package smh.qam.service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

/**
* @file			: QAM02800ServiceImpl.java
* @Package		: smh.qam.service  
* @Project 	: 인터플렉스 MES 구축
* @Type name	: QAM02800ServiceImpl    
* @Company		: Built1
* @Create Date	: 2021. 4. 22. 오후 2:23:23 
* @Author		: sungmin.choe
* @File Version	: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일      수정자        수정내용
 *   ------------  ------       ----------
 *   2021. 4. 22.       sungmin.choe      최초  생성
 *
*/
@Service
public class QAM02800ServiceImpl extends AbstractNbdfService implements QAM02800Service {

    public static final String NAMESAPCE = "smh.qam.dao.QAM02800Dao";
 
    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn 			: selectChangePointList
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectChangePointList
    * @remark		: 상세설명
* @see smh.qam.service.QAM02800Service#selectChangePointList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectChangePointList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectChangePointList", param));
    }

    /**
    * @fn 			: selectRCKey
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectRCKey
    * @remark		: 상세설명
* @see smh.qam.service.QAM02800Service#selectRCKey(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectRCKey(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        Map<String, Object> keyMap = new HashMap<String, Object>();
        String plantId = (String)param.get("SESSION_SITETYPE");
    	String strID = "";
    	Date date = new Date();        		        		
    	SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMdd");
    	String formattedDate = dateFormat.format(date);            	
    	keyMap.put("CLASSID", 	"ChangePointSequence");		
    	keyMap.put("PREFIX",		plantId+formattedDate);
    	keyMap.put("CREATOR", param.get("CREATOR"));
		generalDao.addSelectOneMap(NAMESAPCE + ".selectNewItemID", keyMap);
		strID = (String)keyMap.get("O_NEWID");
		param.put("CHANGEPOINTNO", strID);
		
        putDataSetMap(dto, param, "output1"); // RC KEY
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectUserApproval", param),	"output2");        
    }
    
    /**
    * @fn 			: selectLotList
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectLotList
    * @remark		: 상세설명
* @see smh.qam.service.QAM02800Service#selectLotList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectLotList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLotList", param));
    }
    
    /**
    * @fn 			: selectSaveLotList
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectSaveLotList
    * @remark		: 상세설명
* @see smh.qam.service.QAM02800Service#selectSaveLotList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectSaveLotList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectSaveLotList", param));
    }
    
    /**
    * @fn 			: selectDetailData
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectDetailData
    * @remark		: 상세설명
* @see smh.qam.service.QAM02800Service#selectDetailData(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectDetailData(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectChangePointList", param),		"output1");
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectChangePointReview", param),	"output2");
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectQCApproval", param),			"output3");        
    }
    
    /**
     * @fn
     * @brief (Override method) 결재번호의 요청에 대해서 결재상태가 회수인지 조사
     * @remark 
     * @see smh.qam.service.QAM02800Service#selectIsDraft(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void selectIsDraft(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectIsDraft", param));
    }
    
    /**
     * @fn
     * @brief (Override method) 변경점 등록 팝업을 호출할 때 이번 차례의 결재자가 누구인지 조사
     * @remark 
     * @see smh.qam.service.QAM02800Service#selectChangePointThisTimeApprovalUser(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void selectChangePointThisTimeApprovalUser(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectChangePointThisTimeApprovalUser", param));
    }
    
    /**
     * @fn
     * @brief (Override method) 그룹코드 수정, 등록, 삭제 기능
     * @remark - 변경점 신청서, 결재 저장 정보 수정, 등록, 삭제 트랜젝션 처리
     * @see fc.qam.service.QAM02800Service#saveChangePoint(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void saveChangePoint(UiMapDto dto) throws Exception {
        DataSetMap changePoint = getParametersDataSetMap(dto, "ds_save"); // 변경점 신청 테이블
        DataSetMap changePointReview = getParametersDataSetMap(dto, "ds_reviewList");// 변경점 검토 테이블
        DataSetMap approval = getParametersDataSetMap(dto, "ds_approvalList");// 결재 테이블
        
        Map<String, Object> param;
        int result = 0;
        
    	//========================================================
		//변경점 신청 테이블 처리
		//========================================================
        if(changePoint != null) {
        	for (int i = 0, n = changePoint.size(); i < n; i++) {
        		param = changePoint.get(i);
        		int type = getRowType(param);
        		
        		if (type == DataSet.ROW_TYPE_INSERTED) {
        			result += generalDao.addUpdate(NAMESAPCE + ".insertQamChangepoint", param);
        		}else if (type == DataSet.ROW_TYPE_UPDATED) {
        			result += generalDao.addUpdate(NAMESAPCE + ".updateQamChangepoint", param);
        		}
        	}
        }
        
    	//========================================================
		//변경점 검토 테이블 처리
		//========================================================
        if(changePointReview != null) {
        	for (int i = 0, n = changePointReview.size(); i < n; i++) {
        		param = changePointReview.get(i);
        		int type = getRowType(param);
        		
        		if (type == DataSet.ROW_TYPE_INSERTED) {
        			result += generalDao.addUpdate(NAMESAPCE + ".insertQamChangepointreview", param);
        		} else if (type == DataSet.ROW_TYPE_UPDATED) {
        			result += generalDao.addUpdate(NAMESAPCE + ".updateQamChangepointreview", param);
        		} else if (type == DataSet.ROW_TYPE_DELETED) {
        			result += generalDao.addUpdate(NAMESAPCE + ".deleteQamChangepointreview", param);
        		}
        	}
        }
  
    	//========================================================
		//결재 테이블 처리
		//========================================================
        if(approval != null) {
        	for (int i = 0, n = approval.size(); i < n; i++) {
        		param = approval.get(i);
        		if(i == 0) {
        			result += generalDao.addUpdate(NAMESAPCE + ".deleteQamQcapproval", param);
        		}
    			result += generalDao.addUpdate(NAMESAPCE + ".insertQamQcapproval", param);
        	}
        }
        
        putDataSetMap(dto, result);
    }
    
    /**
     * @fn
     * @brief (Override method) 전체 기안자/승인자의 상태
     * @remark 
     * @see smh.qam.service.QAM02800Service#selectApprovalType(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void selectApprovalType(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectApprovalType", param));
    }
    
    /**
     * @fn
     * @brief (Override method) 신뢰성 검증 의뢰 > 결제자 조회 
     * @remark 
     * @see smh.qam.service.QAM02800Service#selectUserApproval(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void selectUserApproval(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectUserApproval", param));
    }
    
    /**
     * @fn
     * @brief (Override method) 변경점 등록 > 품목선택 > 고객정보 조회
     * @remark 
     * @see smh.qam.service.QAM02800Service#selectProductCustomerInfo(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void selectProductCustomerInfo(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProductCustomerInfo", param));
    }    
    
}