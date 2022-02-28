package smh.bas.service;

import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

import smh.commons.TxnHistKey;


/**
* @file: BAS05200ServiceImpl.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS05200ServiceImpl
* @Company: Built1
* @Create Date: 2021.04.27
* @Author: 김진현
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.04.27.       김진현     최초  생성
*/
@Service
public class BAS05200ServiceImpl extends AbstractNbdfService implements BAS05200Service {

    public static final String NAMESAPCE_05300 		= "smh.bas.dao.BAS05300Dao";  // 외주 작업자 관리
    public static final String NAMESAPCE_TOMCOM 	= "smh.tom.dao.TOM00001Dao";  // site 정보 tom
    public static final String NAMESAPCE_03000 		= "smh.bas.dao.BAS03000Dao";  // 작업장 정보(콤보)
    public static final String NAMESAPCE 				= "smh.bas.dao.BAS05200Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief 자사 작업자 관리 - Tree 조회
     * @remark 
     * @see smh.bas.service.BAS05200Service#selectBasAreaPersonTreeList(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectBasAreaPersonTreeList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE_05300 + ".selectBasAreaTreeList", param));		// 05300(외주작업자랑 같이 사용)
    }
  	
  	/**
     * @fn
     * @brief 자사 작업자 관리 - Tree 선택 후 Main 조회
     * @remark 
     * @see smh.bas.service.BAS05200Service#selecBasAreaPersonMainList(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selecBasAreaPersonMainList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selecBasAreaPersonMainList", param));
    }
  	
  	/**
     * @fn
     * @brief 자사 작업자 관리 - site, area 콤보 정보 조회
     * @remark 
     * @see smh.bas.service.BAS05200Service#selectInitComboList(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectInitComboList(UiMapDto dto) throws Exception {
  		Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE_TOMCOM + ".selectTomPlantList" , param), "output1");
 		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE_03000 + ".selectAreaList" , param), "output2");
    }
  	
  	/**
     * @fn
     * @brief 자사 작업자 관리 - 사용자 ID 조회
     * @remark 
     * @see smh.bas.service.BAS05200Service#selecUserAreaPersonList(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selecUserAreaPersonList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selecUserAreaPersonList", param));
    }
  	
  	/**
     * @fn
     * @brief 자사 작업자 관리 - 저장
     * @remark 
     * @see smh.bas.service.BAS05200Service#saveBasAreaPerson(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void saveBasAreaPerson(UiMapDto dto) throws Exception {
  		DataSetMap paramMap = getParametersDataSetMap(dto);
        Map<String, Object> param;

        int result = 0;
        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            int type = getRowType(param);
            if (type == DataSet.ROW_TYPE_INSERTED) {
            	result += insertAreaPerson(param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
            	result += updateAreaPerson(param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            	result += deleteAreaPerson(param);
            }
        }
        
        putDataSetMap(dto, result);
    }
  	
	/*
  	 * 자사 작업자 관리 등록
  	 */
  	private int insertAreaPerson(Map<String, Object> param) throws Exception{
    	
  		String workerNm 	= (String)param.get("WORKERNAME");
  		String enterpriseId = (String)param.get("ENTERPRISEID");
  		String plantId 		= (String)param.get("PLANTID");
  		String areaId			= (String)param.get("AREAID");
  		
  		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectChkAreaPersonList", param);
		if (idList.size() > 0 )
		{
			throw new BizException("InValidData002|"+String.format("AREAID = %s, ENTERPRISEID = %s, PLANTID = %s,WORKERNAME = %s"
					,areaId,enterpriseId,plantId,workerNm));
		}
		
		return generalDao.addUpdate(NAMESAPCE + ".insertAreaPerson", param);
		
	}
  	
  	/*
  	 * 자사 작업자 관리 수정
  	 */
  	private int updateAreaPerson(Map<String, Object> param) throws Exception{
    	
  		String workerNm 	= (String)param.get("WORKERNAME");
  		String enterpriseId = (String)param.get("ENTERPRISEID");
  		String plantId 		= (String)param.get("PLANTID");
  		String areaId			= (String)param.get("AREAID");
  		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectChkAreaPersonList", param);
  		if (idList.size() < 0 )
		{
			throw new BizException("InValidData001|"+String.format("AREAID = %s, ENTERPRISEID = %s, PLANTID = %s,WORKERNAME = %s"
					,areaId,enterpriseId,plantId,workerNm));
		}
		return generalDao.addUpdate(NAMESAPCE + ".updateAreaPerson", param);		
	}
  	
  	/*
  	 * 자사 작업자 관리 삭제
  	 */
  	 private int deleteAreaPerson(Map<String, Object> param) throws Exception{
     	
  		String workerNm 	= (String)param.get("WORKERNAME");
  		String enterpriseId = (String)param.get("ENTERPRISEID");
  		String plantId 		= (String)param.get("PLANTID");
  		String areaId			= (String)param.get("AREAID");
  		List<Map<String, Object>> idList = generalDao.addSelect(NAMESAPCE + ".selectChkAreaPersonList", param);
  		if (idList.size() < 0 )
		{
			throw new BizException("InValidData003|"+String.format("AREAID = %s, ENTERPRISEID = %s, PLANTID = %s,WORKERNAME = %s"
					,areaId,enterpriseId,plantId,workerNm));
		}
 		return generalDao.addUpdate(NAMESAPCE + ".deleteAreaPerson", param);		
 	}
  	
  	

}