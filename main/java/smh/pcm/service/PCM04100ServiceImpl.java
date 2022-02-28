package smh.pcm.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.SessionUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import smh.pcm.service.PCMConstant.LotState;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


/**
* @file: PCM04100ServiceImpl.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM04100ServiceImpl
* @Company: Built1
* @Create Date: 2021. 3. 1. 오후 4:29:40
* @Author: JinSungHa
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 3. 1.   진성하     최초  생성
*/
@Service
public class PCM04100ServiceImpl extends AbstractNbdfService implements PCM04100Service {

    public static final String NAMESAPCE = "smh.pcm.dao.PCM04100Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief (Override method) Lot보류  수정, 등록, 삭제 기능
     * @remark - Lot보류 수정, 등록, 삭제 트랜젝션 처리
     * @see smh.pcm.service.PCM04100Service#saveGroupCode(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void savePcmLothold(UiMapDto dto) throws Exception {
    	int result = 0;
    	
        DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT");
        for (int i = 0, n = dsMap.size(); i < n; i++) {
            Map<String, Object> param = dsMap.get(i);
            
            Map<String, Object> lotData = generalDao.addSelectOneMap(NAMESAPCE + ".selectPcmLot",param);
    		if(lotData == null){			
    			//해당 Lot이 존재하지 않습니다.
    			throw new BizException("NotExistLot");
    		}
    		// Check 재공상태
    		if(!lotData.get("LOTSTATE").equals(LotState.InProduction)) //
    		{
    			if(!lotData.get("LOTSTATE").equals(LotState.InTransit))
    			{
    				// Lot 상태를 확인하여 주세요.
    				throw new BizException("InValidData001");
    			}
    		}

    		// Check Hold
    		if(lotData.get("ISHOLD").equals("Y"))
    		{
    			// Lot이 Hold되어 있습니다.
    			throw new BizException("InValidData001");
    		}
    		// 사용자별 작업장 통제
    		if(!isAreaInAuthority((String)lotData.get("AREAID"), true, param)) {
    			// 해당 작업장에 대한 권한이 없습니다. {0}
    			throw new BizException("HasNoAuthorityOfArea", String.format("LotId=%s AreaId=%s", (String)lotData.get("LOTID"), (String)lotData.get("AREAID")));
    		}            
    		param.put("HOLDSTATUS", "Y");
    		param.put("ISHOLD", "Y");
        	result = generalDao.addInsert(NAMESAPCE + ".insertPcmLothold",param);
        	result = generalDao.addInsert(NAMESAPCE + ".updatePcmLot",param);
        }
        putDataSetMap(dto, result);
    }
    
    /**
     * @fn
     * @brief (Override method) ID 패턴 그룹 조회
     * @remark [조회] 버튼 클릭시 호출
     * @see smh.pcm.service.PCM04100Service#selectWIPListCommon(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectWIPListCommon(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectWIPListCommon", param), "output");
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectBasReasonCodeClassList", param), "output2");
    }

    /**
     * @fn
     * @brief (Override method) ReasonCodeClass 조회
     * @remark [조회] 버튼 클릭시 호출
     * @see smh.pcm.service.PCM04100Service#selectBasReasonCodeClassList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectBasReasonCodeClassList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectBasReasonCodeClassList", param), "output");
    }

    /**
     * @fn
     * @brief (Override method) ID 패턴 그룹 조회
     * @remark [조회] 버튼 클릭시 호출
     * @see smh.pcm.service.PCM04100Service#selectWIPListCommon(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectBasReasonCodeList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectBasReasonCodeList", param), "output");
    }

	/****************************************************************************************************************
	 * 작업장이 TxnInfo.getTxnUser()에게 허용되었는지 여부를 반환한다
	 * @param areaId 작업장 ID
	 * @param isModify Y=등록권한, N=전체
	 * @throws Throwable
	 ****************************************************************************************************************/
	public boolean isAreaInAuthority(String areaId, boolean isModify, Map<String, Object> param) throws Exception {
		param.put("ISMODIFY", isModify ? "Y" : "N");
		param.put("SESSION_USER_ID", SessionUtil.getSessionValue("USER_ID"));
		param.put("SESSION_LANGUAGETYPE", SessionUtil.getSessionValue("LANGUAGETYPE"));
		param.put("AREA",areaId);
		List<Map<String, Object>> result = generalDao.addSelect(NAMESAPCE + ".GetAreaListByAuthority", param);
		for(int i=0; i<result.size(); i++){
			if(result.get(i).get("AREAID").equals(areaId)) return true;
		}
		return false;
	}
}