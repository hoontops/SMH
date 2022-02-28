package smh.pcm.service;

import com.nbdf.com.StringUtils;
import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.Stack;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nexacro17.xapi.data.DataSet;
import com.sun.star.bridge.oleautomation.Date;

import smh.commons.TxnHistKey;
import smh.pcm.service.PCMConstant.LotState;

/**
* @file: PCM02900ServiceImpl.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS02900ServiceImpl
* @Company: Built1
* @Create Date: 2021.05.21
* @Author: 
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.05.21.   김애리     최초  생성
*/
@Service
public class PCM02900ServiceImpl extends AbstractNbdfService implements PCM02900Service {

    public static final String NAMESAPCE = "smh.pcm.dao.PCM02900Dao";	
    public static final String NAMESAPCECOM = "smh.pcm.dao.PCMCommonDao";
    public static final String NAMESAPCEWIP = "smh.pcm.dao.PCMWipDao";
    
    @Autowired
    private GeneralDao generalDao;
    
    @Autowired
    private PCMReworkLotService reworkLotService;

    private String lotId;					// LOT ID
	private String reworkProcessDefId;		// 재작업 라우팅 ID
	private String reworkProcessDefVersion;	// 재작업 라우팅 버전
	private String resourceId;				// 재작업 자원 ID
	private String areaId;					// 재작업 작업장 ID
	private String returnProcessPathId;		// 재작업 후 공정경로 ID
	private String returnResourceId;		// 재작업 후 공정 자원 ID
	private String returnAreaId;			// 재작업 후 공정 작업장 ID
	private String enterpriseId;			// 회사 ID
	private String plantId;					// 공장 ID
	private String isProductRouting;		// 품목라우팅 여부(Y/N)
	//2019.01.21 배선용, Rework order 이력 저장 관련 파라미터 추가
	private String reworkResourceId;		// Rework 지시시 인계 자원
	private String reworkPathId;            // Rework 지시시 인계 공정  pathid
	private String reworkAreaId;            // Rework 지시시 인계 작업장

    /**
     * @fn
     * @brief : 상단 Lot 정보
     * @remark 
     * @see smh.pcm.service.PCM02900Service#selectLotInfoBylotID(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectLotInfoBylotID(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLotInfoBylotID", param),"ds_LotInfo");
    }
  
    
    /**
	 * @fn
	 * @brief : 
	 * @remark
* @see smh.pcm.service.PCM02900Service#SaveLotRework(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void saveLotRework(UiMapDto dto) throws Exception {
    	int result = 0;
    	Map<String, Object> responseRow;
		List<Map<String, Object>> responseDt = new java.util.ArrayList<Map<String, Object>>();

		loadParameter(dto);						// 파라미터 로드
		
		Map<String, Object> txnInfo = new HashMap<String, Object>(); 
		reworkLotService.ReworkLot(dto, lotId, reworkProcessDefId, reworkProcessDefVersion, resourceId
				, areaId, returnProcessPathId, returnResourceId, returnAreaId, enterpriseId
				, plantId, isProductRouting, reworkResourceId, reworkPathId, reworkAreaId, txnInfo);
		
		putDataSetMap(dto, responseDt);
    }
	
	private void loadParameter(UiMapDto dto) {

		DataSetMap paramMapInfo = getParametersDataSetMap(dto, "ds_temp");
		DataSetMap paramMapLotInfo = getParametersDataSetMap(dto, "ds_LotInfo");
		
		Map<String, Object> paramInfo = paramMapInfo.get(0);
		Map<String, Object> paramLotInfo = paramMapLotInfo.get(0);
		
		this.lotId = StringUtil.Object2String(paramInfo.get("lotid"));
		
		Map<String, Object> propertyMap = new HashMap<>();
		propertyMap.put("LOTID", this.lotId);
		List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCECOM + ".selectPcmLotList", propertyMap);
		Map<String, Object> lotData = list.get(0);
		
		if( !lotData.get("PROCESSSEGMENTID").toString().equals(paramLotInfo.get("PROCESSSEGMENTID").toString())
				|| !lotData.get("USERSEQUENCE").toString().equals(paramLotInfo.get("USERSEQUENCE").toString())
				|| !lotData.get("PROCESSSTATE").toString().equals(paramLotInfo.get("PROCESSSTATE").toString())
				|| StringUtil.Object2Int(lotData.get("WORKCOUNT")) != StringUtil.Object2Int(paramLotInfo.get("WORKCOUNT"))
			) {
			// Lot 을 재조회 후 실행해주세요.{0}
			throw new BizException("ValidLot", this.lotId);
		}
		
		
		this.reworkProcessDefId = StringUtil.Object2String(paramInfo.get("reworkprocessdefid"));
		this.reworkProcessDefVersion = StringUtil.Object2String(paramInfo.get("reworkprocessdefversion"));
		this.returnProcessPathId = StringUtil.Object2String(paramInfo.get("returnprocesspathid"));
		this.resourceId = StringUtil.Object2String(paramInfo.get("resourceid"));
		this.areaId = StringUtil.Object2String(paramInfo.get("areaid"));
		this.returnResourceId = StringUtil.Object2String(paramInfo.get("returnresourceid"));
		this.returnAreaId = StringUtil.Object2String(paramInfo.get("returnareaid"));
		this.enterpriseId = StringUtil.Object2String(paramInfo.get("enterpriseid"));
		this.plantId = StringUtil.Object2String(paramInfo.get("plantid"));
		this.isProductRouting = StringUtil.Object2String(paramInfo.get("isproductrouting"));
		
		this.reworkResourceId = StringUtil.Object2String(paramInfo.get("toresourceid"));
		this.reworkPathId = StringUtil.Object2String(paramInfo.get("toprocesspathid"));
		this.reworkAreaId = StringUtil.Object2String(paramInfo.get("toareaid"));
	}
	
}