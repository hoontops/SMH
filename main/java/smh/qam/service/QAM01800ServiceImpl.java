package smh.qam.service;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

import smh.commons.TxnHistKey;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
* @file        : QAM01800ServiceImpl.java
* @Package     : smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name   : QAM01800ServiceImpl
* @Company     : Built1
* @Create Date : 2021.04.06
* @Author      : yanghee.kim
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.04.06  yanghee.kim    최초  생성
*
*/
@Service
public class QAM01800ServiceImpl extends AbstractNbdfService implements QAM01800Service {

    public static final String NAMESPACE = "smh.qam.dao.QAM01800Dao";
    public static final String NAMEQAM01900 = "smh.qam.dao.QAM01900Dao";
    
    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn          : selectGetInboundDefectLotList
    * @brief       : (Override method) 인수처리한 불량 Lot별 불량코드를 조회한다.
    * @Method Name : selectGetInboundDefectLotList
    * @remark      : 상세설명
* @see smh.qam.service.QAM01800Service#selectGetInboundDefectLotList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectGetInboundDefectLotList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectGetInboundDefectLotList", param));
    }

    /**
    * @fn          : selectGetDefectLotDefectCodeList
    * @brief       : (Override method)인수처리한 불량 Lot별 불량코드를 조회한다.
    * @Method Name : selectGetDefectLotDefectCodeList
    * @remark      : 상세설명
* @see smh.qam.service.QAM01800Service#selectGetDefectLotDefectCodeList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectGetDefectLotDefectCodeList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectGetDefectLotDefectCodeList", param));
    }

    /**
    * @fn          : selectGetDefectCodeOutboundList
    * @brief       : (Override method) 불량코드별 반출정보를 조회한다.
    * @Method Name : selectGetDefectCodeOutboundList
    * @remark      : 상세설명
* @see smh.qam.service.QAM01800Service#selectGetDefectCodeOutboundList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectGetDefectCodeOutboundList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectGetDefectCodeOutboundList", param));
    }

    /**
    * @fn          : saveLotDefectConfirm
    * @brief       : (Override method) 품질관리 - 불량관리 - 불량품 원인판정
    * @Method Name : saveLotDefectConfirm
    * @remark      : 불량을 반출하고 내역조정한 건에 대해 확정처리 및 확정취소를 한다.
* @see smh.qam.service.QAM01800Service#saveLotDefectConfirm(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void saveLotDefectConfirm(UiMapDto dto) throws Exception {
        DataSetMap paramMap = getParametersDataSetMap(dto);
        Map<String, Object> param;

        int result = 0;
        int result1 = 0;

        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            int type = getRowType(param);
            
            if (type == DataSet.ROW_TYPE_INSERTED) 
            {
                List<Map<String, Object>> idList = generalDao.addSelect(NAMESPACE + ".selectQamQclotdefectresultChk", param);

                //저장되어있는 확정데이터가 없다면 Insert
                if(idList.size() < 1)
                {
                	result += generalDao.addUpdate(NAMESPACE + ".insertConfirmQamQclotdefectresult", param);
                	
                	//ERP 확정정보 Interface
                	if(result>0)
                	{
                		insertErpInterface(param, "Confirm");
                	}
                }
                else
                {
                	//저장되어있는 확정데이터가 있지만 확정플래그가 Confirm이거나 ConfirmCancel이라면 Update
                	if ("Confirm".equals(param.get("CONFIRMFLAG")))
                	{
                		result += generalDao.addUpdate(NAMESPACE + ".updateConfirmQamQclotdefectresult", param);
                		
                    	//ERP 확정정보 Interface
                    	if(result>0)
                    	{
                    		insertErpInterface(param, "Confirm");
                    	}
                		
                	}
                	// 저장되어있는 확정데이터가 있고 확정플래그가 ConfirmCancel이라면 Delete
                	else if ("ConfirmCancel".equals(param.get("CONFIRMFLAG")))
                	{
                		//ERP 연계를 위해 삭제전 반출수량 가져오기
                		int defectQty = generalDao.addSelectCount(NAMESPACE + ".selectInterfaceConfirmCancleInfo", param);
                		
                		result += generalDao.addUpdate(NAMESPACE + ".deleteConfirmQamQclotdefectresult", param);
                    	
                		//ERP 확정정보 Interface
                    	if(result>0)
                    	{
                    		param.put("DEFECTQTY", defectQty);
                    		insertErpInterface(param, "ConfirmCancel");
                    	}                		
                	}
                }          
            }
            else if (type == DataSet.ROW_TYPE_UPDATED){}
            else if (type == DataSet.ROW_TYPE_DELETED){}
        }//for
        
        
        // 불량인수테이블 상태 업데이트=> list의 갯수랑 확정갯수랑 같다면 전부확정이므로 부모테이블 원인판정완료상태로 그렇지 않다면 부모테이블 인수완료상태로 업데이트
        param = paramMap.get(0);
        String status = getStatus(param);
		param.put("STATUS", status);
       	result1 += generalDao.addUpdate(NAMESPACE + ".updateStatusQamQclotdefectinbound", param);

        putDataSetMap(dto, result);
    }

    /**
    * @fn          : insertErpInterface
    * @brief       : (Override method) 불량확정 및 확정취소 정보 ERP Interface
    * @Method Name : insertErpInterface
    * @remark      : 
* @see smh.qam.service.QAM01800Service#insertErpInterface(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void insertErpInterface(Map<String, Object> param, String jobType) throws Exception
    {
		Map<String, Object> lotMap = generalDao.addSelectOneMap(NAMESPACE + ".selectInterfaceLotInfo", param);
		
		/*불량확정일 경우:    코드 90/ 수량+
		 * 불량확정 취소일 경우 :코드 91/ 수량-
		 */
		if ("Confirm".equals(jobType))
		{	
			lotMap.put("TRANSACTION_TYPE_ID", 90);
		    lotMap.put("TRANSACTION_QUANTITY", StringUtil.Object2Int(param.get("DEFECTQTY")));
		}
		else
		{
			lotMap.put("TRANSACTION_TYPE_ID", 91);
			lotMap.put("TRANSACTION_QUANTITY", StringUtil.Object2Int(param.get("DEFECTQTY"))*-1);
		}
		
		
		lotMap.put("IF_CRUD", "C"); /*신규*/
		
		generalDao.addUpdate(NAMESPACE + ".insertInterfaceConfirm", lotMap);
    }

    /**
    * @fn          : saveLotDefectHold
    * @brief       : (Override method) 품질관리 - 불량관리 - 불량품 원인판정
    * @Method Name : saveLotDefectHold
    * @remark      : 인수처리 혹은 원인판정이 확정된 Lot에 대해 보류처리 또는 보류취소처리한다.
* @see smh.qam.service.QAM01800Service#saveLotDefectHold(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void saveLotDefectHold(UiMapDto dto) throws Exception {
        DataSetMap paramMap = getParametersDataSetMap(dto);
        Map<String, Object> param;

        int result = 0;

        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            int type = getRowType(param);
            
            if (type == DataSet.ROW_TYPE_INSERTED)
            {
	        	//보류 플래그가 보류라면 보류처리
	        	if ("Hold".equals(param.get("HOLDFLAG")))
	        	{
	        		param.put("STATUS", "HoldComplete");
	        		result += generalDao.addUpdate(NAMESPACE + ".updateStatusQamQclotdefectinbound", param);
	        	}
	        	// 그렇지 않다면 보류취소처리
	        	else
	        	{
	        		String status = getStatus(param);
	        		param.put("STATUS", status);
	                result += generalDao.addUpdate(NAMESPACE + ".updateStatusQamQclotdefectinbound", param);
	        	}
            }
            else if (type == DataSet.ROW_TYPE_UPDATED){}
            else if (type == DataSet.ROW_TYPE_DELETED){}
        }

        putDataSetMap(dto, result);
    }
    
    /**
    * @fn          : getStatus
    * @brief       : (Override method) 
    * @Method Name : getStatus
    * @remark      : 불량인수테이블 상태 업데이트=> list의 갯수랑 확정갯수랑 같다면 전부확정이므로 부모테이블 원인판정완료상태로 그렇지 않다면 부모테이블 인수완료상태로 업데이트
    * @see
    */
    private String getStatus(Map<String, Object> param) throws Exception{
        List<Map<String, Object>> chkList = generalDao.addSelect(NAMESPACE + ".selectInboundProgressChk", param);
        //List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
        Map<String, Object> map = new HashMap<String, Object>();
        String status;
        
        int totalCnt = 0;
        int confirmStatus = 0;

        for (int j = 0; j < chkList.size(); j++)
        {
        	map = chkList.get(j);
        	totalCnt++;
        	if ("Confirm".equals(map.get("STATUS")))
			{
        		confirmStatus++;
			}
        	//list.add(map);        	
        }
        
//        for (int j = 0; j < list.size(); j++)
//        {
//            status = list.get(j).toString();
//        	// list에 확정상태가 존재하면 Count++
//            if ("Confirm".equals(status))
//            {
//                cnt++;        
//            }        
//        }
        
        // list의 갯수랑 확정갯수랑 같다면 전부확정이므로 부모테이블 원인판정완료상태로 업데이트
        if (totalCnt == confirmStatus)
        {
        	status = "CauseComplete";
        }
        else
        {
        	status = "InboundComplete";	                	
        }
        
        return status;
    }
    
    /**
    * @fn          : saveLotDefectMakeup
    * @brief       : (Override method) 품질관리 - 불량관리 - 불량품 원인판정 - 불량내역조정
    * @Method Name : saveLotDefectMakeup
    * @remark      : 상세설명
* @see smh.qam.service.QAM01800Service#saveLotDefectMakeup(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void saveLotDefectMakeup(UiMapDto dto) throws Exception {
        DataSetMap infoMap = getParametersDataSetMap(dto, "INPUT1");
        DataSetMap listMap = getParametersDataSetMap(dto, "INPUT2");        
        Map<String,Object> infoParam =new HashMap<>();
        Map<String, Object> param;
        int result = 0;
        int result1 = 0;
        String txnGroupHistKey= "";
        
        infoParam.put("TXNHISTKEY", infoMap.get(0).get("TXNHISTKEY"));
        infoParam.put("LOTID",      infoMap.get(0).get("LOTID"));
        infoParam.put("DEFECTQTY",  infoMap.get(0).get("LEFTQTY"));
        
        //잔량이 0이라면 해당 불량코드 Invalid
        if (Integer.parseInt(infoParam.get("DEFECTQTY").toString()) == 0)
        {
        	infoParam.put("VALIDSTATE", "Invalid");
        }
        
        result1 = generalDao.addUpdate(NAMESPACE + ".updateMakeupPcmLotDefect", infoParam);

        for (int i = 0, n = listMap.size(); i < n; i++) {
            param = listMap.get(i);
            int type = getRowType(param);
            
            if (type == DataSet.ROW_TYPE_INSERTED)
            {
            	param.put("REASONSEGMENTID", param.get("REASONPROCESSSEGMENTID"));
            	param.put("VALIDSTATE", "Valid");
            	if (i== 0)
            	{
            		txnGroupHistKey = TxnHistKey.getTxnGroupHistKey();
            	}
            	
            	param.put("TXNGROUPHISTKEY", txnGroupHistKey);
            	param.put("TXNHISTKEY", TxnHistKey.getTxnHistKey());
            	//Double defectQty = Double.parseDouble(param.get("DEFECTQTY").toString());
            	//param.put("DEFECTQTY", defectQty);
            	result += generalDao.addUpdate(NAMESPACE + ".insertMakeupPcmLotDefect", param);
            }
            else if (type == DataSet.ROW_TYPE_UPDATED){}
            else if (type == DataSet.ROW_TYPE_DELETED){}
        }//for
        
        
        putDataSetMap(dto, result);
    }
    
    /**
    * @fn          : saveLotDefectOutbound
    * @brief       : (Override method) 품질관리 - 불량관리 - 불량품 원인판정 - 불량반출
    * @Method Name : saveLotDefectOutbound
    * @remark      : 불량이 발생한 Lot에 의 한 불량코드에 대해 반출한다.
* @see smh.qam.service.QAM01800Service#saveLotDefectOutbound(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void saveLotDefectOutbound(UiMapDto dto) throws Exception {
        DataSetMap paramMap = getParametersDataSetMap(dto);
        Map<String, Object> param;

        int result = 0;

        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            int type = getRowType(param);
            
            if (type == DataSet.ROW_TYPE_INSERTED)
            {
            	result += generalDao.addUpdate(NAMESPACE + ".insertOutboundQamQclotdefectoutbound", param);
            }
            else if (type == DataSet.ROW_TYPE_UPDATED)
            {
            	result += generalDao.addUpdate(NAMESPACE + ".updateOutboundQamQclotdefectoutbound", param);
            }
            else if (type == DataSet.ROW_TYPE_DELETED)
            {
            	result += generalDao.addDelete(NAMESPACE + ".deleteOutboundQamQclotdefectoutbound", param);
            }
        }

        putDataSetMap(dto, result);
    }
}