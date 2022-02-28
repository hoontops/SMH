package smh.pcm.service;

import java.util.Date;
import java.util.List;
import java.util.Map;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: PCMReworkLotService.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCMReworkLotService
* @Company: Built1
* @Create Date: 2021. 3. 1. 오전 11:35:30
* @Author: 진성하
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 1.   진성하   최초  생성
 *
 *
*/
public interface PCMOspService {

    public void OspreciptsendlotCreate(String strEnterpriseid ,String strPlantid
							            ,String strLotid        ,String strtxnhistkey
							            ,String strOspreceiptuser) throws Exception;
    public double CreateIdLineSeq(String strPlantid ,String strLotid ,String strtxnhistkey) throws Exception;

    public void getOspreceiptsendlotsegmentMain(Map<String, Object> map,Double dblReceiptsequence) throws Exception;

    public void getOspreceiptsendlotsegmentInsertData(Map<String, Object> map,Double dblReceiptsequence)  throws Exception;
    
    public boolean OspPriceInValidCheck(Map<String, Object> lotworkresultData) throws Exception;
    
    public boolean OspBudgetCheck(Map<String, Object> lotworkresultData) throws Exception;
    
    public String getIsospbudgetcontrol(Map<String, Object> lotworkresultData) throws Exception;

    public String getIsbudgetexcept(Map<String, Object> lotworkresultData) throws Exception;

    public double getBudgetAmount(Map<String, Object> lotworkresultData) throws Exception;

    public double GetOspProcessOspActualCntCheck(Map<String, Object> lotworkresultData) throws Exception;
    
    public double getOspActualAmount(Map<String, Object> lotworkresultData,String _OsppriceDate ) throws Exception;

    public void CalculationLotPrice(Map<String, Object> lotworkresultData) throws Exception;

    public Map<String, Object> OspActualQtyMain(Map<String, Object> lotworkresultData ,Map<String, Object> ospactualStd) throws Exception;

    public Map<String, Object> SearchCreateInfomat(Map<String, Object> lotworkresultData ,Map<String, Object> OspactualStd) throws Exception;
    
    public String SearchOwntypeInfomat(Map<String, Object> lotworkresultData) throws Exception;
    
    public String SearchOsppriceDat(Map<String, Object> lotworkresultData) throws Exception;
    
    public void InvalidOspActualDetail(String _txnhistkey  ,String  _lotid) throws Exception;
    
    public void getInvalidOspActualMain(String _txnhistkey  ,String  _lotid)  throws Exception;
    
    public void InvalidOspActualReduceDetail(String _txnhistkey  ,String  _lotid) throws Exception;
    
    public void getInvalidOspActualReduceDetail(String _txnhistkey  ,String  _lotid ,Map<String, Object> map) throws Exception;
    
    public void getInvalidOspActualDetail(String _txnhistkey  ,String  _lotid ,Map<String, Object> map) throws Exception;
    
    public void OspActualDetailMain(String osppricecode,String  strCalculateunit,Double dblAttributevalue
			,Map<String, Object> lotworkresultData ,Map<String, Object> ospactualStd) throws Exception;
    
    public String getOsppriceDate(Date dtTransdate) throws Exception;
    
    public void SaveOspActualDetail(String _txnhistkey  ,String  _lotid ,Map<String, Object> map 
			,String strCalculateunit
			,Double dblAttributevalue
			,Map<String, Object> lotworkresultData
			,Map<String, Object> ospactualStd)  throws Exception;
    
    public void SaveErrorOspActualDetail(Map<String, Object> lotworkresultData
			,String strPricecombinationid
			,String Iserror
			,String strErrorid
			,String Errorcomment) throws Exception;
    
    public void SaveOspActual(Map<String, Object> lotworkresultData
			,Map<String, Object> ospactualStd) throws Exception;
    
    public double getOspActualOspSpecialReduce(Double dblOrigAmount ,Map<String, Object> lotworkresultData
			,String strosppriceDate) throws Exception;
    
    public void SaveOspActualOspSpecialReduce(String _txnhistkey  ,String  _lotid ,Map<String, Object> map
			,Double dblamount,Double dblreducerate,Double dblreduceamount,Double dblsettleamount) throws Exception;
    
    public String  OspEtcClaimAmountCreate( String strenterpriseid , String strplantid           , String strclaimdate
			 , String strclaimtype    , String strclaimdepartment
			 , String strclaimuser    , String strareaid            , String strvendorid
			 , String strproductdefid , String strproductdefversion , String stretclotid
			 , Double dblamount       , String strrelkeyno ) throws Exception;
    
    public int GetCreateSeq(String sPlantid,String Settledate) throws Exception;
    
 
}