package smh.pcm.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


/**
* @file: PCMReworkLotServiceImpl.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCMReworkLotServiceImpl
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
public class PCMOspServiceImpl extends AbstractNbdfService implements PCMOspService {

    public static final String NAMESPACECOM = "smh.pcm.dao.PCMCommonDao";
    public static final String NAMESPACEWIP = "smh.pcm.dao.PCMWipDao";
    public static final String NAMESPACELOTCOM = "smh.pcm.dao.PCMLotCommonDao";
    public static final String NAMESPACE_CMSA = "com.nbdf.cmd.cm.cmsa.dao.CMSA00302Dao";

    public static final String NAMESPACE_CSM = "smh.pcm.dao.PCMCsmDao";
    public static final String NAMESPACE_RC = "smh.pcm.dao.PCMReworkDao";
    public static final String NAMESPACE_RL = "smh.pcm.dao.PCMReworkCancelDao";
    public static final String NAMESPACE_SL = "smh.pcm.dao.PCMSendLotDao";

    public static final String NAMESPACE = "smh.pcm.dao.PCMOspDao";

    @Autowired
    private GeneralDao generalDao;
	
	private static String _worktime = "";
    
	/****************************************************************************************************************
	 * 공정에서 인계시 호출 부분 예산 체크 로직 
	 * @param LotworkresultData 
	 ****************************************************************************************************************/
	@Override
	public boolean OspBudgetCheck(Map<String, Object> lotworkresultData) throws Exception {
		String strIsbudgetexcept="";
		String strresulttype="";
		String strenterpriseid="";
		double Budgetamount =0d;
		double CntActual =0d;
		double dblAmount =0d;
		//단가계산처리 
		//
		String _txnhistkey = (String) lotworkresultData.get("TXNHISTKEY");
		String _lotid      = (String) lotworkresultData.get("LOTID");
		String strIsospbudgetcontrol=getIsospbudgetcontrol(lotworkresultData); //외주비예산통제여부 
		
		if(StringUtil.isNullOrEmpty((String) lotworkresultData.get("RESULTTYPE")))
		{
			strresulttype="";
		}
		else
		{
			strresulttype =(String) lotworkresultData.get("RESULTTYPE");
		}
		strenterpriseid  =(String) lotworkresultData.get("ENTERPRISEID");
		
		Map<String, Object> ospactualStd = new HashMap<String, Object>(); 
		ospactualStd =SearchCreateInfomat(lotworkresultData,ospactualStd);
		if (ospactualStd.get("ISERROR").equals("Y"))
		{
			return false;
		}
		SimpleDateFormat dateformat = new SimpleDateFormat("yyyy-MM-dd");
		String sOsppriceDate = dateformat.format(ospactualStd.get("SENDTIME"));
		
		String _Owntype    = (String) ospactualStd.get("OWNTYPE");
		
		if (_Owntype.equals("OURCOMPANY")) return true;
		if (strresulttype.equals("SKIP")) return true;
		
		if (strenterpriseid.equals("YOUNGPOONG"))
		{
			//OspYoungPoongService.CalculationLotYoungPoongPriceInvalid(lotworkresultData);
			//return true;
//			Map<String,Object> FunctionMap =new HashMap<>();
//			
//			FunctionMap.put("ENTERPRISEID"   ,  strenterpriseid); 
//			FunctionMap.put("PLANTID"        ,  lotworkresultData.get("Plantid")); 
//			FunctionMap.put("LOTID"          ,  _lotid); 
//			FunctionMap.put("LOTHISTKEY"     ,  _txnhistkey); 
//			FunctionMap.put("USERID"         ,  lotworkresultData.get("Senduser")); 
//			
//			List<Map<String, Object>> result = QueryProvider.select("OspReYpCalculationLotPriceDetail", "10001", FunctionMap);
			
		}
		else
		{
			CalculationLotPrice(lotworkresultData);
		}
		if (_Owntype.equals("MajorSuppliers")) return true;
		
		CntActual = GetOspProcessOspActualCntCheck( lotworkresultData);
		
		if (CntActual >0 )
		{
			if (strIsospbudgetcontrol.equals("Y"))
			{
				//제외 여부 확인 ...
				strIsbudgetexcept = getIsbudgetexcept( lotworkresultData) ;
				if (strIsbudgetexcept.equals("N"))//제어처리 대상이 아니면 ...
				{
					//예산금액 가져오기 ...
					Budgetamount =getBudgetAmount( lotworkresultData);
					//
					dblAmount =getOspActualAmount(lotworkresultData,sOsppriceDate);
					if (Budgetamount  < dblAmount)
					{
						/*//이상하네 조회는 왜하고 return은 false로??--> 막음
						Map<String,Object> FunctionMap =new HashMap<>();
						
						FunctionMap.put("ENTERPRISEID"   ,  lotworkresultData.get("Enterpriseid")); 
						FunctionMap.put("PLANTID"        ,  lotworkresultData.get("Plantid")); 
						FunctionMap.put("LOTID"          ,  _lotid); 
						FunctionMap.put("LOTHISTKEY"     ,  _txnhistkey); 
						FunctionMap.put("USERID"         ,  lotworkresultData.get("Senduser")); 
						
						List<Map<String, Object>> result = generalDao.addSelect(NAMESPACE + ".OspPriceInValidCheck",FunctionMap);
						*/
						return false;		//이상하네 조회는 왜하고 return은 false로??
						
					}
				}
			}
		}
		return true;
	}
	/****************************************************************************************************************
	 * site의 외주비예산통제여부  값 가져오기 
	 * @param LotworkresultData 
	 ****************************************************************************************************************/
	@Override
	public String getIsospbudgetcontrol(Map<String, Object> lotworkresultData) throws Exception
	{
		String strIsospbudgetcontrol="N";
		Map<String, Object> plantData = generalDao.addSelectOneMap(NAMESPACE + ".selectBasPlant",lotworkresultData);
		
		if(StringUtil.isNullOrEmpty((String) plantData.get("ISOSPBUDGETCONTROL")))
		{
			strIsospbudgetcontrol ="N";
		}
		else
		{
			strIsospbudgetcontrol =(String) plantData.get("ISOSPBUDGETCONTROL");
		}
		return strIsospbudgetcontrol;
	}
	
	/****************************************************************************************************************
	 * 단가 계산시 필요한  기초 자료 생성
	 * @param LotworkresultData 
	 ****************************************************************************************************************/
	public Map<String, Object> SearchCreateInfomat(Map<String, Object> lotworkresultData ,Map<String, Object> OspactualStd) throws Exception
	{
		
		Map<String,Object> insertMap =new HashMap<>();
		insertMap.put("PLANTID"          ,  lotworkresultData.get("PLANTID"));
		insertMap.put("PRODUCTDEFID"     ,  lotworkresultData.get("PRODUCTDEFID"));
		insertMap.put("PRODUCTDEFVERSION",  lotworkresultData.get("PRODUCTDEFVERSION"));
		insertMap.put("AREAID"           ,  lotworkresultData.get("AREAID"));
		insertMap.put("SENDTIME"         ,  lotworkresultData.get("SENDTIME").toString());
		
		List<Map<String, Object>> degreeList = generalDao.addSelect(NAMESPACE + ".GetlotidInformatByOsp",insertMap);
		if(degreeList != null && degreeList.size() > 0)
		{
			Map<String, Object> map =degreeList.get(0);
			_worktime  = map.get("WORKTIME").toString();
			_worktime  =_worktime + ":";
			OspactualStd.put("VENDORID",map.get("VENDORID").toString());
			OspactualStd.put("AREAID",lotworkresultData.get("Areaid"));
			OspactualStd.put("OWNTYPE",map.get("OWNTYPE").toString());
			OspactualStd.put("PCSMM",Double.parseDouble(map.get("PCSMM").toString()));
			OspactualStd.put("PCSPNL",Double.parseDouble(map.get("PCSPNL").toString()));
			OspactualStd.put("LOTTYPE", map.get("PRODUCTIONTYPE").toString());
			String _Lottype   = map.get("PRODUCTIONTYPE").toString();
			String _Processpricetype ="";
			if (_Lottype.equals("Sample"))
			{
				 _Processpricetype=_Lottype;
			}
			else
			{
				 _Processpricetype="Product"; 
			}
			OspactualStd.put("PROCESSPRICETYPE",_Processpricetype);
			if (map.get("PCSMM").toString().equals("0")|| map.get("PCSPNL").toString().equals("0"))
			{
				OspactualStd.put("ISERROR","Y");
				OspactualStd.put("DESCRIPTION","ospCalErrorId007");
			}
			SimpleDateFormat dateformat = new SimpleDateFormat("yyyy-MM-dd");
			Date dtstartdate = dateformat.parse(map.get("OSPPRICEDATE").toString());
			OspactualStd.put("SENDTIME",dtstartdate);//일자 대체 임시 로 
		}
		else
		{
			OspactualStd.put("ISERROR","Y");
			OspactualStd.put("DESCRIPTION","ospCalErrorId008");
		}
		return OspactualStd ;
	}	
	
	/****************************************************************************************************************
	 * 공정에서 실적 처리후 호출 단가 계산 
	 * @param LotworkresultData 
	 ****************************************************************************************************************/	
	@Override
	public void CalculationLotPrice(Map<String, Object> lotworkresultData) throws Exception {
		String  osppricecode      ="";
		String  strCalculateunit ="";
		String strAttributevaluecheck="";
		String  Processsegmentid  = (String) lotworkresultData.get("PROCESSSEGMENTID");
		double dblAttributevalue	=0d;
		String _txnhistkey = (String)lotworkresultData.get("TXNHISTKEY");
		String _lotid      = (String)lotworkresultData.get("LOTID");
		String strEnterpriseid = (String)lotworkresultData.get("ENTERPRISEID");
		String strPlantid      = (String)lotworkresultData.get("PLANTID");
		String strAreaid       = (String)lotworkresultData.get("AREAID");
		String strresulttype="";
		
		if(StringUtil.isNullOrEmpty((String) lotworkresultData.get("RESULTTYPE")))
		{
			strresulttype="";
		}
		else
		{
			strresulttype =(String) lotworkresultData.get("RESULTTYPE");
		}
		
		Map<String, Object> ospactualStd = new HashMap<String, Object>(); 
		ospactualStd =SearchCreateInfomat(lotworkresultData,ospactualStd);
		SimpleDateFormat dateformat = new SimpleDateFormat("yyyy-MM-dd");
		String sOsppriceDate = dateformat.format(ospactualStd.get("SENDTIME"));
		
		getInvalidOspActualMain(_txnhistkey  , _lotid);
		InvalidOspActualDetail(_txnhistkey  , _lotid);
		InvalidOspActualReduceDetail(_txnhistkey  , _lotid);
		
		//String _Owntype  = SearchOwntypeInfomat(lotworkresultData);
		
		if (ospactualStd.get("Owntype").equals("OurCompany")) return ;
		
		//불량 수량및 가성 불량 수량 가져오기 
		if (strresulttype.equals("SKIP")) return ;
		
		ospactualStd = OspActualQtyMain (lotworkresultData,ospactualStd);
		if (ospactualStd.get("Iserror").equals("Y"))
		{
			SaveErrorOspActualDetail(lotworkresultData,"*","Y",(String) ospactualStd.get("Description"),"제품정보의 PCSMM ,PCSPNL의 정보를 확인해 주세요.");//1
			SaveOspActual(lotworkresultData,ospactualStd);
			return;
		}
		
		
		Map<String,Object> insertMap =new HashMap<>();
		insertMap.put("ITEMID"              ,  lotworkresultData.get("Productdefid"));
		insertMap.put("ITEMVERSION"         ,  lotworkresultData.get("Productdefversion"));
		insertMap.put("ENTERPRISEID"        ,  lotworkresultData.get("Enterpriseid"));
		insertMap.put("PLANTID"             ,  lotworkresultData.get("Plantid"));
		insertMap.put("PROCESSSEGMENTID"    ,  Processsegmentid);
		List<Map<String, Object>> degreeList = generalDao.addSelect(NAMESPACE + ".GetOspProcessAttributeValue",insertMap);
		
		if(degreeList != null && degreeList.size() > 0)
		{
			for(int i = 0, len = degreeList.size(); i < len; i++)
			{
				Map<String, Object> map=  degreeList.get(i);
				strAttributevaluecheck=map.get("ATTRIBUTEVALUECHECK").toString();
				osppricecode =map.get("OSPPRICECODE").toString();
				if (strAttributevaluecheck.equals("SUCCESS"))
				{
				
					dblAttributevalue=Double.parseDouble(map.get("ATTRIBUTEVALUE").toString());
					if (dblAttributevalue <= 0)
					{
						dblAttributevalue=1;
					}
					strCalculateunit =map.get("CALCULATEUNIT").toString();
				
					//
					OspActualDetailMain(osppricecode,strCalculateunit,dblAttributevalue ,lotworkresultData,ospactualStd);
				}
				else if  (strAttributevaluecheck.equals("ERRORCODE"))
				{
					SaveErrorOspActualDetail(lotworkresultData,"*","Y","ospCalErrorId001","기준정보 외주단가연결  품목정보 항목코드 오류");//1
				}	
				else if  (strAttributevaluecheck.equals("ERRORVALUE"))
				{
					SaveErrorOspActualDetail(lotworkresultData,"*","Y","ospCalErrorId002","기준정보 외주단가연결 품목정보 항목값 오류");//1
				}	
			}
		}
		else
		{
			SaveErrorOspActualDetail(lotworkresultData,"*","Y","ospCalErrorId003","기준정보 외주단가연결  품목정보 단가 코드 누락");//1
		}
		
		SaveOspActual(lotworkresultData,ospactualStd);		
	}

	/****************************************************************************************************************
	 * 불량 수량및 가성불량 및 수량 재정의
	 * @param LotworkresultData 
	 ****************************************************************************************************************/
	public Map<String, Object> OspActualQtyMain(Map<String, Object> lotworkresultData ,Map<String, Object> ospactualStd) throws Exception
	{
		String _txnhistkey = (String) lotworkresultData.get("TXNHISTKEY");
		String _lotid      = (String) lotworkresultData.get("LOTID");
		
		Map<String,Object> insertMap =new HashMap<>();
		insertMap.put("LOTID"       , _lotid);
		insertMap.put("TXNHISTKEY"  ,  _txnhistkey);
		double _dblPcspnl =(double) ospactualStd.get("PCSPNL");
		double _dblSendpanelqty =0d;
		double _dblPaneldefectqty =0d;
		double _dblPanelpseudodefectqty  =0d;
		double _dblPcsmm =(double) ospactualStd.get("PCSMM");
		double _dblSendm2qty =0;
		double _dblM2qty =0;
		List<Map<String, Object>> degreeDefectList = generalDao.addSelect(NAMESPACE + ".GetlotDefectqtyByOsp",insertMap);
		Map<String, Object> mapdefecy =degreeDefectList.get(0);
		double _dblDefectqty  = Double.parseDouble(mapdefecy.get("DEFECTQTY").toString());
		ospactualStd.put("DEFECTQTY",_dblDefectqty);
		List<Map<String, Object>> degreePseudoList = generalDao.addSelect(NAMESPACE + ".GetlotPseudodefectqtyByOsp",insertMap);
		Map<String, Object> mapPseudo =degreePseudoList.get(0);
		double _dblPseudodefectqty  = Double.parseDouble(mapPseudo.get("PSEUDODEFECTQTY").toString());
		ospactualStd.put("PSEUDODEFECTQTY",_dblPseudodefectqty);
		double _dblSendpcsqty=(double) lotworkresultData.get("SENDPCSQTY");
		ospactualStd.put("SENDPCSQTY",_dblSendpcsqty);
		ospactualStd.put("SENDPANELQTY",lotworkresultData.get("SENDPANELQTY"));
		if (_dblPcspnl==0d)
		{
			_dblSendpanelqty =0d;
			_dblPaneldefectqty =0d;
			_dblPanelpseudodefectqty  =0d;
		}
		else
		{
			if (_dblSendpcsqty ==0d )
			{
				_dblSendpanelqty =0d;
			}
			else
			{
				_dblSendpanelqty = _dblSendpcsqty /_dblPcspnl;
				_dblSendpanelqty =  Math.ceil(_dblSendpanelqty* 100) / 100.0;
			}
			if (_dblDefectqty ==0d )
			{
				_dblPaneldefectqty =0d;
			}
			else
			{
				_dblPaneldefectqty = _dblDefectqty /_dblPcspnl;
				_dblPaneldefectqty =  Math.ceil(_dblPaneldefectqty* 100) / 100.0;
			}
			
			if (_dblPseudodefectqty ==0d )
			{
				_dblPanelpseudodefectqty =0d;
			}
			else
			{
				_dblPanelpseudodefectqty = _dblPseudodefectqty /_dblPcspnl;
				_dblPanelpseudodefectqty =  Math.ceil(_dblPanelpseudodefectqty* 100) / 100.0;
			}
		
		}
		//_dblPcsqty =_dblSendpcsqty - _dblPseudodefectqty;
		//_dblPcspnl =_dblSendpnlqty -_dblPanelpseudodefectqty;
		double _dblPcsqty =_dblSendpcsqty ;
		double _dblPanelqty =_dblSendpanelqty;
		if (_dblPcsmm==0d)
		{
			_dblSendm2qty =0;
			_dblM2qty =0;
		}
		else
		{
			_dblSendm2qty = _dblSendpcsqty/_dblPcsmm;
			_dblSendm2qty =  Math.ceil(_dblSendm2qty* 100) / 100.0;
			
			_dblM2qty = _dblPcsqty/_dblPcsmm;
			_dblM2qty =  Math.ceil(_dblM2qty* 100) / 100.0;
		}
		ospactualStd.put("PCSQTY",_dblPcsqty);
		ospactualStd.put("PANELQTY",_dblPanelqty);
		ospactualStd.put("SENDM2QTY",_dblSendm2qty);
		ospactualStd.put("M2QTY",_dblM2qty);
		ospactualStd.put("PANELPSEUDODEFECTQTY",_dblPanelpseudodefectqty);
		ospactualStd.put("PANELDEFECTQTY",_dblPaneldefectqty);
		if (_dblPcsmm == 0d || _dblPcspnl==0d)
		{
			ospactualStd.put("ISERROR","Y");
			ospactualStd.put("DESCRIPTION","ospCalErrorId007");
		}
		return ospactualStd ;
	}
		
	/****************************************************************************************************************
	 * 공정단가계산시 기존자료 validstate 상태값 변경 처리 
	 *
	 ****************************************************************************************************************/
	public void InvalidOspActualReduceDetail(String _txnhistkey  ,String  _lotid) throws Exception
	{
		Map<String,Object> insertMap =new HashMap<>();
		insertMap.put("LOTID"        ,  _lotid);
		insertMap.put("LOTHISTKEY"   ,  _txnhistkey);
		List<Map<String, Object>> degreeList = generalDao.addSelect(NAMESPACE + ".GetInvalidOspActualReduceDetail",insertMap);
		if(degreeList != null && degreeList.size() > 0)
		{
			for(int i = 0, len = degreeList.size(); i < len; i++)
			{
				Map<String, Object> map=  degreeList.get(i);
				
				getInvalidOspActualReduceDetail(_txnhistkey ,_lotid ,map);
				
			}
		}
		
	}	
	/****************************************************************************************************************
	 * 공정단가계산시 기존자료 validstate 상태값 변경 처리 
	 *
	 ****************************************************************************************************************/
	public void InvalidOspActualDetail(String _txnhistkey  ,String  _lotid) throws Exception
	{
		Map<String,Object> insertMap =new HashMap<>();
		insertMap.put("LOTID"        ,  _lotid);
		insertMap.put("LOTHISTKEY"   ,  _txnhistkey);
		List<Map<String, Object>> degreeList = generalDao.addSelect(NAMESPACE + ".GetInvalidOspActualDetail",insertMap);
		if(degreeList != null && degreeList.size() > 0)
		{
			for(int i = 0, len = degreeList.size(); i < len; i++)
			{
				Map<String, Object> map=  degreeList.get(i);
				//ospactualdetail   Invalid
				getInvalidOspActualDetail( _txnhistkey  ,  _lotid ,map);
				
			}
		}
		
	}
	
	/****************************************************************************************************************
	 * 공정단가계산시 기존자료 validstate -=>Invalid 처리
	 *  @param Map<String, Object> map
	 ****************************************************************************************************************/
	public void getInvalidOspActualMain(String _txnhistkey  ,String  _lotid) throws Exception
	{
		Map<String, Object> param = new HashMap<String, Object>(); 
		param.put("LOTHISTKEY",_txnhistkey);
		param.put("LOTID",_lotid);
		Map<String, Object> ospactualData = generalDao.addSelectOneMap(NAMESPACE + ".selectOsmOspactual",param);
		
		if (!(ospactualData == null))
		{	
			ospactualData.put("VALIDSTATE","Invalid");
			generalDao.addUpdate(NAMESPACE + ".updateOsmOspactual",ospactualData);
		}
		
		
	}	
	
	/****************************************************************************************************************
	 * 공정단가계산시 기존자료 validstate -=>Invalid 처리
	 *  @param Map<String, Object> map
	 ****************************************************************************************************************/
	public void getInvalidOspActualDetail(String _txnhistkey  ,String  _lotid ,Map<String, Object> map) throws Exception
	{
		
		Map<String, Object> param = new HashMap<String, Object>(); 
		param.put("LOTHISTKEY",_txnhistkey);
		param.put("LOTID",_lotid);
		param.put("PRICECOMBINATIONID",map.get("PRICECOMBINATIONID").toString());
		Map<String, Object> ospactualdetailData = generalDao.addSelectOneMap(NAMESPACE + ".selectOsmOspactualdetail",param);
		
		if (!(ospactualdetailData == null))
		{	
			ospactualdetailData.put("VALIDSTATE","Invalid");
			generalDao.addUpdate(NAMESPACE + ".updateOsmOspactualdetail",ospactualdetailData);
		}
		
	}
		
	@Override
	public double GetOspProcessOspActualCntCheck(Map<String, Object> lotworkresultData) throws Exception {
		double Cntactual =0d;
		Map<String,Object> insertMap =new HashMap<>();
		String _txnhistkey = (String) lotworkresultData.get("Txnhistkey");
		String _lotid      = (String) lotworkresultData.get("Lotid");
		insertMap.put("LOTHISTKEY"               , _txnhistkey);
		insertMap.put("LOTID"                    ,  _lotid);
		
		List<Map<String, Object>> degreeList = generalDao.addSelect(NAMESPACE + ".GetOspProcessOspActualCntCheck",insertMap);
		
		if(degreeList != null && degreeList.size() > 0)
		{
			Map<String, Object> map=  degreeList.get(0);
			Cntactual =Double.parseDouble(map.get("CNTACTUAL").toString());
		}
		return Cntactual;
	}

	@Override
	public String getIsbudgetexcept(Map<String, Object> lotworkresultData) throws Exception {
		String strIsospbudgetcontrol ="N";
		Map<String,Object> insertMap =new HashMap<>();
		insertMap.put("PRODUCTDEFID"               ,  lotworkresultData.get("Productdefid"));
		insertMap.put("PRODUCTDEFVERSION"          ,  lotworkresultData.get("Productdefversion"));
		insertMap.put("SENDTIME"                   ,  lotworkresultData.get("Sendtime"));
		insertMap.put("PLANTID"                    ,  lotworkresultData.get("Plantid"));
		insertMap.put("PROCESSSEGMENTID"           ,  lotworkresultData.get("Processsegmentid"));

		List<Map<String, Object>> degreeList = generalDao.addSelect(NAMESPACE + ".GetOspProcessIsbudgetexcept",insertMap);
		if(degreeList != null && degreeList.size() > 0)
		{
		
			strIsospbudgetcontrol ="Y";
		}
		return strIsospbudgetcontrol;
	}

	@Override
	public double getBudgetAmount(Map<String, Object> lotworkresultData) throws Exception {
		double Budgetamount =0d;
		Map<String,Object> insertMap =new HashMap<>();
		insertMap.put("SENDTIME"                   ,  lotworkresultData.get("SENDTIME"));
		insertMap.put("PLANTID"                    ,  lotworkresultData.get("PLANTID"));
		
		List<Map<String, Object>> degreeList = generalDao.addSelect(NAMESPACE + ".GetOspProcessBudgetAmount",insertMap);
		if(degreeList != null && degreeList.size() > 0)
		{
			Map<String, Object> map=  degreeList.get(0);
			Budgetamount =Double.parseDouble(map.get("BUDGETAMOUNT").toString());
		}
		
		return Budgetamount;
	}

	@Override
	public double getOspActualAmount(Map<String, Object> lotworkresultData, String _OsppriceDate) throws Exception {
		double dblAmount =0d;
		
		
		Map<String,Object> insertMap =new HashMap<>();
		insertMap.put("PLANTID"                    ,  lotworkresultData.get("PLANTID"));
		insertMap.put("SENDTIME"                   ,  lotworkresultData.get("SENDTIME"));
		List<Map<String, Object>> degreeList = generalDao.addSelect(NAMESPACE + ".GetOspProcessOspActualAmount",insertMap);
		if(degreeList != null && degreeList.size() > 0)
		{
			Map<String, Object> map=  degreeList.get(0);
			dblAmount =Double.parseDouble(map.get("AMOUNT").toString());
		}
		return dblAmount;
	}
	@Override
	public void OspreciptsendlotCreate(String strEnterpriseid, String strPlantid, String strLotid, String strtxnhistkey,
			String strOspreceiptuser) throws Exception {
		Map<String,Object> param =new HashMap<>();
		param.put("LOTID", strLotid);	
		param.put("PLANTID", strPlantid);	
		param.put("LOTHISTKEY", strtxnhistkey);	

		List<Map<String, Object>> attributeList = generalDao.addSelect(NAMESPACE + ".GetOutsourcedWarehouseWear",param);
		
		if(attributeList != null && attributeList.size() > 0)
		{
			Map<String, Object> map =attributeList.get(0);
			String strWearOkCheck = map.get("WEAROKCHECK").toString();
			if (strWearOkCheck.equals("OK"))
			{
				Map<String, Object> ospreceiptsendlotData = new HashMap<String, Object>(); 	
				double dblReceiptsequence =CreateIdLineSeq(strPlantid ,strLotid  , strtxnhistkey);	
				ospreceiptsendlotData.put("LOTHISTKEY",strtxnhistkey);
				ospreceiptsendlotData.put("LOTID",strLotid);
				
				ospreceiptsendlotData.put("RECEIPTSEQUENCE",dblReceiptsequence);
				ospreceiptsendlotData.put("PLANTID",strPlantid);
				ospreceiptsendlotData.put("ENTERPRISEID",strEnterpriseid);
				
				ospreceiptsendlotData.put("RECEIPTDATE",new Date());
				ospreceiptsendlotData.put("RECEIPTUSER",strOspreceiptuser);
				ospreceiptsendlotData.put("SENDAREAID",map.get("AREAID").toString());
				ospreceiptsendlotData.put("VALIDSTATE","Valid");
//				ospreceiptsendlotData.put("LASTTXNID",TransactionId.CREATE);
				
				//2021.08.02 Add 공정에서 작업요청시점 LOT의 정보를 찾기위해 추가요청
				ospreceiptsendlotData.put("PCMLASTTXNHISTKEY",map.get("PCMLASTTXNHISTKEY").toString());
				
				generalDao.addInsert(NAMESPACE + ".insertOsmOspreceiptsendlot",ospreceiptsendlotData);
				
				getOspreceiptsendlotsegmentMain(map ,dblReceiptsequence);
			}
			
		}
		else
		{
			throw new BizException("InValidOspData002", 
				 	String.format("ospreceiptsendlotKey Key = %s", strLotid));
		// 메세지 
		}
	}
	@Override
	public double CreateIdLineSeq(String strPlantid, String strLotid, String strtxnhistkey) throws Exception {
		Map<String,Object> insertMap =new HashMap<>();
		insertMap.put("LOTID", strLotid);	
		insertMap.put("PLANTID", strPlantid);	
		insertMap.put("LOTHISTKEY", strtxnhistkey);	
		List<Map<String, Object>> degreeList = generalDao.addSelect(NAMESPACE + ".GetOutsourcedWarehouseWearReceiptsequence",insertMap);
		Map<String, Object> map =degreeList.get(0);
		String strtemp =map.get("RECEIPTSEQUENCE").toString();
		double dblseq = Double.parseDouble(strtemp);
		
		return dblseq;
	}
	@Override
	public void getOspreceiptsendlotsegmentMain(Map<String, Object> map, Double dblReceiptsequence) throws Exception {
		Map<String,Object> insertMap =new HashMap<>();
		insertMap.put("LOTID", map.get("LOTID").toString());	
		insertMap.put("PLANTID", map.get("PLANTID").toString());	
		insertMap.put("LOTHISTKEY", map.get("LOTHISTKEY").toString());	
		insertMap.put("PATHSEQUENCESTART", map.get("PATHSEQUENCESTART").toString());	
		insertMap.put("PATHSEQUENCEEND", map.get("PATHSEQUENCEEND").toString());	
		List<Map<String, Object>> degreeList = generalDao.addSelect(NAMESPACE + ".GetOutsourcedWarehouseWearSegment",insertMap);
		if(degreeList != null && degreeList.size() > 0)
		{
			
			for(int i = 0, len = degreeList.size(); i < len; i++)
			{
				Map<String, Object> demap=  degreeList.get(i);
				getOspreceiptsendlotsegmentInsertData(demap,dblReceiptsequence);
				
			}
		}
	}
	/****************************************************************************************************************
	 * 외주창고입출고공정 ct_ospreceiptsendlotsegment insert 
	 ****************************************************************************************************************/
	@Override
	public void getOspreceiptsendlotsegmentInsertData(Map<String, Object> map, Double dblReceiptsequence)
			throws Exception {
		
		Map<String, Object> ospreceiptsendlotsegmentData = new HashMap<String, Object>(); 
		
		ospreceiptsendlotsegmentData.put("LOTHISTKEY",map.get("LOTHISTKEY").toString());
		ospreceiptsendlotsegmentData.put("LOTID",map.get("LOTID").toString());
		ospreceiptsendlotsegmentData.put("RECEIPTSEQUENCE",dblReceiptsequence);
		ospreceiptsendlotsegmentData.put("PROCESSDEFID",map.get("PROCESSDEFID").toString());
		ospreceiptsendlotsegmentData.put("PROCESSDEFVERSION",map.get("PROCESSDEFVERSION").toString());
		ospreceiptsendlotsegmentData.put("PROCESSSEGMENTID",map.get("PROCESSSEGMENTID").toString());
		ospreceiptsendlotsegmentData.put("PROCESSSEGMENTVERSION",map.get("PROCESSSEGMENTVERSION").toString());
		
		ospreceiptsendlotsegmentData.put("PATHSEQUENCE",Integer.parseInt(map.get("PATHSEQUENCE").toString()));
		ospreceiptsendlotsegmentData.put("USERSEQUENCE",map.get("USERSEQUENCE").toString());
		ospreceiptsendlotsegmentData.put("RESOURCEID",map.get("RESOURCEID").toString());
		ospreceiptsendlotsegmentData.put("AREAID",map.get("AREAID").toString());
		ospreceiptsendlotsegmentData.put("PREVRESOURCEID",map.get("RESOURCEID").toString());
		ospreceiptsendlotsegmentData.put("PREVAREAID",map.get("AREAID").toString());
		ospreceiptsendlotsegmentData.put("PLANTID",map.get("PLANTID").toString());
		ospreceiptsendlotsegmentData.put("ENTERPRISEID",map.get("ENTERPRISEID").toString());
		
		ospreceiptsendlotsegmentData.put("VALIDSTATE","Valid");
//		ospreceiptsendlotsegmentData.put("Lasttxnid",TransactionId.CREATE);
		
		generalDao.addInsert(NAMESPACE + ".insertOsmOspreceiptsendlotsegment",ospreceiptsendlotsegmentData);
		

	}
	@Override
	public boolean OspPriceInValidCheck(Map<String, Object> lotworkresultData) throws Exception {

		String _txnhistkey = (String) lotworkresultData.get("TXNHISTKEY");
		String _lotid      = (String) lotworkresultData.get("LOTID");
		Map<String, Object> ospactualData = generalDao.addSelectOneMap(NAMESPACE + ".selectOsmOspactual",lotworkresultData);
		
		if (!(ospactualData == null))
		{	
			if(!(StringUtil.isNullOrEmpty((String) ospactualData.get("PERIODID"))))
			{
				return false;
			}
			else
			{
				/* 왜 태우지??
				Map<String,Object> FunctionMap =new HashMap<>();
				
				FunctionMap.put("ENTERPRISEID"   ,  ospactualData.get("ENTERPRISEID")); 
				FunctionMap.put("PLANTID"        ,  lotworkresultData.get("PLANTID")); 
				FunctionMap.put("LOTID"          ,  _lotid); 
				FunctionMap.put("LOTHISTKEY"     ,  _txnhistkey); 
				FunctionMap.put("USERID"         ,  lotworkresultData.get("SENDUSER")); 
				
				List<Map<String, Object>> result = generalDao.addSelect(NAMESPACE + ".OspPriceInValidCheck",FunctionMap);
				*/
				//getInvalidOspActualMain(_txnhistkey  , _lotid);
				//InvalidOspActualDetail(_txnhistkey  , _lotid);
				//InvalidOspActualReduceDetail(_txnhistkey  , _lotid);
				return true;
			}
				
		}
		return true;
	}

	@Override
	public String SearchOwntypeInfomat(Map<String, Object> lotworkresultData) throws Exception {
		Map<String,Object> insertMap =new HashMap<>();
		
		insertMap.put("AREAID"           ,  lotworkresultData.get("AREAID"));
		List<Map<String, Object>> degreeList = generalDao.addSelect(NAMESPACE + ".GetAreaidOwntypeInformatByOsp",insertMap);
		
		Map<String, Object> map =degreeList.get(0);
		
		String _Owntype   = map.get("OWNTYPE").toString();
		
		return _Owntype ;
	}
	@Override
	public String SearchOsppriceDat(Map<String, Object> lotworkresultData) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public void getInvalidOspActualReduceDetail(String _txnhistkey, String _lotid, Map<String, Object> map)
			throws Exception {
		
		Map<String, Object> param = new HashMap<String, Object>(); 
		param.put("LOTHISTKEY",_txnhistkey);         
		param.put("LOTID",_lotid);
		param.put("ENTERPRISEID",map.get("ENTERPRISEID").toString());
		
		param.put("PLANTID",map.get("PLANTID").toString());
		param.put("PROCESSSEGMENTID",map.get("PROCESSSEGMENTID").toString());
		param.put("PRODUCTDEFID",map.get("PRODUCTDEFID").toString());
		param.put("PRODUCTDEFVERSION",map.get("PRODUCTDEFVERSION").toString());
		param.put("AREAID",map.get("AREAID").toString());
		SimpleDateFormat dateformat = new SimpleDateFormat("yyyy-MM-dd");
		String strStartdate=map.get("STARTDATE").toString();
		Date dtStartdate = dateformat.parse(strStartdate);
		param.put("STARTDATE",dtStartdate);
		Map<String, Object> ospactualreducedetailData = generalDao.addSelectOneMap(NAMESPACE + ".selectOsmOspactualreducedetail",param);
		if (!(ospactualreducedetailData == null))
		{
			
			ospactualreducedetailData.put("Validstate","Invalid");
			
			generalDao.addUpdate(NAMESPACE + ".updateOsmOspactualreducedetail",ospactualreducedetailData);
		}
		
		
	}
	@Override
	public void OspActualDetailMain(String osppricecode, String strCalculateunit, Double dblAttributevalue,
			Map<String, Object> lotworkresultData, Map<String, Object> ospactualStd) throws Exception {
		//단가 가져오기..
		Date dtTransdate =(Date) lotworkresultData.get("SENDTIME");
		//단가일 계산처리 .(일시=> 일로 변환)
		String sOsppriceDate =getOsppriceDate(dtTransdate);
		//_OsppriceDate =sOsppriceDate;
		Map<String,Object> insertMap =new HashMap<>();
		insertMap.put("ENTERPRISEID"        ,  lotworkresultData.get("ENTERPRISEID"));
		insertMap.put("PLANTID"             ,  lotworkresultData.get("PLANTID"));
		insertMap.put("OSPPRICECODE"        ,  osppricecode);
		insertMap.put("OSPPRICEDATE"        ,  sOsppriceDate);
		List<Map<String, Object>> degreeList = generalDao.addSelect(NAMESPACE + ".GetOspActualDetailMain",insertMap);
		
		String strOwntype            =(String) ospactualStd.get("OWNTYPE");
		String strProcesspricetype   =(String)  ospactualStd.get("PROCESSPRICETYPE");
		
		String strAreaid             =(String)  ospactualStd.get("Areaid");
		String strProductdefid       =(String)  lotworkresultData.get("PRODUCTDEFID");
		String strProductdefversion  =(String)  lotworkresultData.get("PRODUCTDEFVERSION");
		String strTempOwntype            = "";
		String strTempProcesspricetype   = "";
		
		String strTempAreaid           = "";
		String strTempProductdefid       = "";
		String strTempProductdefversion  = "";
		String _txnhistkey = (String) lotworkresultData.get("TXNHISTKEY");
		String _lotid      = (String) lotworkresultData.get("LOTID");
		if(!(StringUtil.isNullOrEmpty((String) lotworkresultData.get("ISREWORK"))))
		{
			if ("Y".equals(lotworkresultData.get("ISREWORK")))
			{
				strProcesspricetype = "Rework";
			}
		}
		if ((double)lotworkresultData.get("WORKCOUNT") >0)
		{
			strProcesspricetype = "Rework";
		}
		ospactualStd.put("PROCESSPRICETYPE",strProcesspricetype);
		
		if(degreeList != null && degreeList.size() > 0)
		{
			for(int i = 0, len = degreeList.size(); i < len; i++)
			{
				Map<String, Object> map   =  degreeList.get(i);
				strTempOwntype            = map.get("OWNTYPE").toString();
				strTempProcesspricetype   = map.get("PROCESSPRICETYPE").toString();
				strTempAreaid           = map.get("AREAID").toString();
				strTempProductdefid       = map.get("PRODUCTDEFID").toString();
				strTempProductdefversion  = map.get("PRODUCTDEFVERSION").toString();
				if (strTempProductdefid.equals(strProductdefid) && strTempProductdefversion.equals(strProductdefversion))
				{
					if (strTempAreaid.equals(strAreaid))
					{
						if (strTempProcesspricetype.equals(strProcesspricetype))
						{
							if (strTempOwntype.equals(strOwntype))
							{
								SaveOspActualDetail(_txnhistkey  ,  _lotid ,map,strCalculateunit,dblAttributevalue,lotworkresultData,ospactualStd);//1
								return;
							}
						
						}
						else if (strTempProcesspricetype.equals("*"))
						{
							if (strTempOwntype.equals(strOwntype))
							{
								SaveOspActualDetail(_txnhistkey  ,  _lotid ,map,strCalculateunit,dblAttributevalue,lotworkresultData,ospactualStd);//1
								return;
							}
						
						}
					}
					else if (strTempAreaid.equals("*"))
					{
						if (strTempProcesspricetype.equals(strProcesspricetype))
						{
							if (strTempOwntype.equals(strOwntype))
							{
								SaveOspActualDetail(_txnhistkey  ,  _lotid, map,strCalculateunit,dblAttributevalue,lotworkresultData,ospactualStd);//1
								return;
							}
							else if (strTempOwntype.equals("*"))
							{
								SaveOspActualDetail(_txnhistkey  ,  _lotid, map,strCalculateunit,dblAttributevalue,lotworkresultData,ospactualStd);//1
								return;
							}
						}
						else if (strTempProcesspricetype.equals("*"))
						{
							if (strTempOwntype.equals(strOwntype))
							{
								SaveOspActualDetail(_txnhistkey  ,  _lotid, map,strCalculateunit,dblAttributevalue,lotworkresultData,ospactualStd);//1
								return;
							}
							else if (strTempOwntype.equals("*"))
							{
								SaveOspActualDetail(_txnhistkey  ,  _lotid, map,strCalculateunit,dblAttributevalue,lotworkresultData,ospactualStd);//1
								return;
							}
						}
					}
				}
				else if (strTempProductdefid.equals("*") && strTempProductdefversion.equals("*"))
				{
					if (strTempAreaid.equals(strAreaid))
					{
						if (strTempProcesspricetype.equals(strProcesspricetype))
						{
							if (strTempOwntype.equals(strOwntype))
							{
								SaveOspActualDetail(_txnhistkey  ,  _lotid, map,strCalculateunit,dblAttributevalue,lotworkresultData,ospactualStd);//1
								return;
							}
						
						}
						else if (strTempProcesspricetype.equals("*"))
						{
							if (strTempOwntype.equals(strOwntype))
							{
								SaveOspActualDetail(_txnhistkey  ,  _lotid, map,strCalculateunit,dblAttributevalue,lotworkresultData,ospactualStd);//1
								return;
							}
							
						}
					}
					else if (strTempAreaid.equals("*"))
					{
						if (strTempProcesspricetype.equals(strProcesspricetype))
						{
							if (strTempOwntype.equals(strOwntype))
							{
								SaveOspActualDetail(_txnhistkey  ,  _lotid, map,strCalculateunit,dblAttributevalue,lotworkresultData,ospactualStd);//1
								return;
							}
							else if (strTempOwntype.equals("*"))
							{
								SaveOspActualDetail(_txnhistkey  ,  _lotid, map,strCalculateunit,dblAttributevalue,lotworkresultData,ospactualStd);//1
								return;
							}
						}
						else if (strTempProcesspricetype.equals("*"))
						{
							if (strTempOwntype.equals(strOwntype))
							{
								SaveOspActualDetail(_txnhistkey  ,  _lotid, map,strCalculateunit,dblAttributevalue,lotworkresultData,ospactualStd);//1
								return;
							}
							else if (strTempOwntype.equals("*"))
							{
								SaveOspActualDetail(_txnhistkey  ,  _lotid, map,strCalculateunit,dblAttributevalue,lotworkresultData,ospactualStd);//1
								return;
							}
						}
					}
				}
			}
		}
		SaveErrorOspActualDetail(lotworkresultData,"*","Y","ospCalErrorId004","단가매핑 오류(Osppricecombination)");//1
	}
	@Override
	public String getOsppriceDate(Date dtTransdate) throws Exception {
		//일자비교처리 
		SimpleDateFormat dateformat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		SimpleDateFormat Priceformat = new SimpleDateFormat("yyyy-MM-dd");
		String sOsppriceDate ="";
		String sWorkHour = _worktime.split(":")[0];   
		String sWorkMin  = _worktime.split(":")[1];
		String sWorkSec  = _worktime.split(":")[2];
		Calendar calTransdate = Calendar.getInstance();
		calTransdate.setTime(dtTransdate);
		int plantidday =calTransdate.DATE;
		Calendar calPlantdate = Calendar.getInstance();
		calPlantdate.setTime(dtTransdate);
		//Plant별로 추후에 시간 가져오기 
		calPlantdate.set(Calendar.DATE,plantidday);
		calPlantdate.set(Calendar.HOUR_OF_DAY,Integer.parseInt(sWorkHour));
		calPlantdate.set(Calendar.MINUTE,Integer.parseInt(sWorkMin));
		calPlantdate.set(Calendar.SECOND,Integer.parseInt(sWorkSec));
		
		int resultDate = calPlantdate.compareTo(calTransdate);
		
		if (resultDate == 1)
		{
		   //당월
			calPlantdate.add(Calendar.DATE,-1);//전일
			sOsppriceDate =Priceformat.format(calPlantdate.getTime());//
			
		}
		else
		{   
			sOsppriceDate =Priceformat.format(calTransdate.getTime());//
		}
		return sOsppriceDate;
	}
	@Override
	public void SaveOspActualDetail(String _txnhistkey, String _lotid, Map<String, Object> map, String strCalculateunit,
			Double dblAttributevalue, Map<String, Object> lotworkresultData, Map<String, Object> ospactualStd)
			throws Exception {
		String Iserror="N";
		String Errorcomment="";
		String  strerrorid ="";
		Map<String, Object> ospactualdetailData = new HashMap<String, Object>();
		SimpleDateFormat dateformat = new SimpleDateFormat("yyyy-MM-dd");
		Date dtTransdate = dateformat.parse(map.get("STARTDATE").toString());
	
		double dblCalculateqty= 0d;
		double dblAmount =0D;
		
		double dblPrice  = Double.parseDouble(map.get("PRICE").toString());
		double _dblPcsqty =(double) ospactualStd.get("PCSQTY");
		double _dblPanelqty =(double) ospactualStd.get("PANELQTY");
		double  _dblPcsmm =(double) ospactualStd.get("PCSMM");
		if (strCalculateunit.equals("PCS"))
		{
			dblCalculateqty= _dblPcsqty;
			if (dblCalculateqty==0d)
			{
				Iserror="Y";
				Errorcomment="계산 수량 0임 (Sendpcsqty) ";
				strerrorid ="ospCalErrorId005";
			}
		}
		else if (strCalculateunit.equals("PNL"))
		{
			dblCalculateqty=_dblPanelqty;
			if (dblCalculateqty==0d)
			{
				Iserror="Y";
				Errorcomment="계산 수량 0임 (Sendpanelqty) ";
				strerrorid ="ospCalErrorId005";
			}
		} 
		else if (strCalculateunit.equals("M2"))
		{
			 if (_dblPcsmm == 0d)
			 {
				dblCalculateqty =0d;
				if (dblCalculateqty==0d)
				{
					Iserror="Y";
					Errorcomment="품목의 (Pcsmm)0 임  ";
					strerrorid ="ospCalErrorId006";
				}
			 }
			 else if (_dblPcsqty==0d)
			 {
				 dblCalculateqty =0d;
				if (dblCalculateqty==0d)
				{
					Iserror="Y";
					Errorcomment="계산 기준 수량 0임 (Sendpcsqty) ";
					strerrorid ="ospCalErrorId005";
				}
			 }
			 else
			 {
				 dblCalculateqty = _dblPcsqty/_dblPcsmm;
				 dblCalculateqty  = Math.ceil(dblCalculateqty* 100) / 100.0;
			 }
			
		} 
		dblPrice  = dblPrice;
		//dblPrice  = Math.ceil(dblPrice* 100) / 100.0;
		dblAmount =dblPrice *dblAttributevalue *dblCalculateqty; 
		dblAmount  = Math.floor(dblAmount) ;
	
		ospactualdetailData.put("LOTHISTKEY",_txnhistkey);
		ospactualdetailData.put("LOTID",_lotid);
		ospactualdetailData.put("PRICECOMBINATIONID",map.get("PRICECOMBINATIONID").toString());
		ospactualdetailData = generalDao.addSelectOneMap(NAMESPACE + ".selectOsmOspactualdetail",ospactualdetailData);
		//계산구분 단가 및 금액 추가 
		if (Iserror=="Y")
		{
			dblCalculateqty=0d;
		}
		if (!(ospactualdetailData == null))
		{
			ospactualdetailData.put("SPECUNIT",map.get("SPECUNIT").toString());
			if(!StringUtil.isNullOrEmpty(map.get("SPECUNIT").toString()))
			{
				ospactualdetailData.put("SPECVALUE",dblAttributevalue);
			}
			else
			{
				ospactualdetailData.put("SPECVALUE",null);
			}
			ospactualdetailData.put("CALCULATEUNIT",strCalculateunit);
			ospactualdetailData.put("CALCULATEQTY",dblCalculateqty);
			ospactualdetailData.put("OSPPRICECODE",map.get("OSPPRICECODE").toString());
			
			
			ospactualdetailData.put("STARTDATE",dtTransdate);
			ospactualdetailData.put("PRICE",dblPrice);
			ospactualdetailData.put("AMOUNT",dblAmount);
			ospactualdetailData.put("ISERROR",Iserror);
			ospactualdetailData.put("ERRORID",strerrorid);
			ospactualdetailData.put("ERRORCOMMENT",Errorcomment);
			ospactualdetailData.put("VALIDSTATE","Valid");
//			ospactualdetailData.put("Lasttxnid(TransactionId.MODIFY);
			generalDao.addUpdate(NAMESPACE + ".updateOsmOspactualdetail",ospactualdetailData);
		}
		else
		{
			ospactualdetailData = new HashMap<String, Object>(); 
			
			ospactualdetailData.put("LOTHISTKEY",_txnhistkey);
			ospactualdetailData.put("LOTID",_lotid);
			
			ospactualdetailData.put("PRICECOMBINATIONID",map.get("PRICECOMBINATIONID").toString());
			ospactualdetailData.put("ENTERPRISEID",lotworkresultData.get("ENTERPRISEID"));
			ospactualdetailData.put("PLANTID",lotworkresultData.get("PLANTID"));
			ospactualdetailData.put("SPECUNIT",map.get("SPECUNIT").toString());
			if(!StringUtil.isNullOrEmpty(map.get("SPECUNIT").toString()))
			{
				ospactualdetailData.put("SPECVALUE",dblAttributevalue);
			}
			else
			{
				ospactualdetailData.put("SPECVALUE",null);
			}
			ospactualdetailData.put("SPECVALUE",dblAttributevalue);
			ospactualdetailData.put("CALCULATEUNIT",strCalculateunit);
			ospactualdetailData.put("CALCULATEQTY",dblCalculateqty);
			ospactualdetailData.put("OSPPRICECODE",map.get("OSPPRICECODE").toString());
			ospactualdetailData.put("STARTDATE",dtTransdate);
			ospactualdetailData.put("PRICE",dblPrice);
			ospactualdetailData.put("AMOUNT",dblAmount);
			ospactualdetailData.put("ISERROR",Iserror);
			ospactualdetailData.put("ERRORID",strerrorid);
			ospactualdetailData.put("ERRORCOMMENT",Errorcomment);
			ospactualdetailData.put("VALIDSTATE","Valid");
//			ospactualdetailData.put("Lasttxnid(TransactionId.CREATE);
//			batch.add(ospactualdetailData, SQLUpsertType.INSERT);
//			batch.execute();
		}
		
	}
	@Override
	public void SaveErrorOspActualDetail(Map<String, Object> lotworkresultData, String strPricecombinationid,
			String Iserror, String strErrorid, String Errorcomment) throws Exception {
//		LotworkresultKey  lotworkresultKey = lotworkresultData.key();
		String _txnhistkey = (String) lotworkresultData.get("TXNHISTKEY");
		String _lotid      = (String) lotworkresultData.get("LOTID");
		Map<String, Object> ospactualdetailData = new HashMap<String, Object>();
//		OspactualdetailKey  ospactualdetailKey = ospactualdetailData.key();
		SimpleDateFormat dateformat = new SimpleDateFormat("yyyy-MM-dd");
		
		double dblSpecvalue= 0d;
		double dblCalculateqty= Double.parseDouble(String.valueOf(lotworkresultData.get("SENDPANELQTY")));
		double dblAmount =0D;
		double dblPrice  = 0D;
//		ISQLUpsertBatch batch = new SQLUpsertBatch();
		
		ospactualdetailData.put("LOTHISTKEY",_txnhistkey);
		ospactualdetailData.put("LOTID",_lotid);
		ospactualdetailData.put("PRICECOMBINATIONID",strPricecombinationid);
		
		
		ospactualdetailData = generalDao.addSelectOneMap(NAMESPACE+".selectOsmOspactualdetail", ospactualdetailData);
		//계산구분 단가 및 금액 추가 
		
		if (!(ospactualdetailData == null))
		{
		
			ospactualdetailData.put("CALCULATEQTY",dblCalculateqty);
			ospactualdetailData.put("OSPPRICECODE","*");
			ospactualdetailData.put("PRICE",dblPrice);
			ospactualdetailData.put("AMOUNT",dblAmount);
			ospactualdetailData.put("ISERROR",Iserror);
			ospactualdetailData.put("ERRORID",strErrorid);
			ospactualdetailData.put("ERRORCOMMENT",Errorcomment);
			ospactualdetailData.put("VALIDSTATE","Valid");
			generalDao.addUpdate(NAMESPACE+".updateOsmOspactualdetail", ospactualdetailData);
//			ospactualdetailData.put("Lasttxnid",TransactionId.MODIFY);
//			batch.add(ospactualdetailData, SQLUpsertType.UPDATE);
//			batch.execute();
		}
		else
		{
			ospactualdetailData = new HashMap<>();
			
			ospactualdetailData.put("LOTHISTKEY",_txnhistkey);
			ospactualdetailData.put("LOTID",_lotid);
			ospactualdetailData.put("PRICECOMBINATIONID",strPricecombinationid);
			ospactualdetailData.put("OSPPRICECODE","*");
			ospactualdetailData.put("ENTERPRISEID",lotworkresultData.get("ENTERPRISEID"));
			ospactualdetailData.put("PLANTID",lotworkresultData.get("PLANTID"));
			
			
			ospactualdetailData.put("SPECVALUE",dblSpecvalue);
			
			ospactualdetailData.put("CALCULATEQTY",dblCalculateqty);
			
			ospactualdetailData.put("PRICE",dblPrice);
			ospactualdetailData.put("AMOUNT",dblAmount);
			ospactualdetailData.put("ISERROR",Iserror);
			ospactualdetailData.put("ERRORID",strErrorid);
			ospactualdetailData.put("ERRORCOMMENT",Errorcomment);
			ospactualdetailData.put("VALIDSTATE","Valid");
			generalDao.addUpdate(NAMESPACE+".insertOsmOspactualdetail", ospactualdetailData);
//			ospactualdetailData.put("Lasttxnid",TransactionId.CREATE);
//			batch.add(ospactualdetailData, SQLUpsertType.INSERT);
//			batch.execute();
		}
		
	}
	@Override
	public void SaveOspActual(Map<String, Object> lotworkresultData, Map<String, Object> ospactualStd)
			throws Exception {
 		double dblAmount =0d;
		double dblPrice  =0d;
		double dblM2qty =0d;
		double dblReduceamount =0d;
		double dblSettleamount =0d;
		double dblReduceRate=0d;
		SimpleDateFormat dateformat = new SimpleDateFormat("yyyy-MM-dd");
		String sOsppriceDate = dateformat.format(ospactualStd.get("SENDTIME"));
		String _txnhistkey = (String) lotworkresultData.get("TXNHISTKEY");
		String _lotid      = (String) lotworkresultData.get("LOTID");
		int cnterror =0;
		String Iserror ="N";
		String Processpricetype ="";
		double dblPcsqty = Double.parseDouble(String.valueOf(ospactualStd.get("PCSQTY")));
		Map<String,Object> insertMap =new HashMap<>();
		insertMap.put("LOTID"        ,  _lotid);
		insertMap.put("LOTHISTKEY"   ,  _txnhistkey);
		List<Map<String, Object>> degreeList = generalDao.addSelect(NAMESPACE+".GetInvalidOspActualSummary", insertMap);
	
		if(degreeList != null && degreeList.size() > 0)
		{
			 Map<String, Object> map=  degreeList.get(0);
			 dblAmount	=Double.parseDouble(map.get("AMOUNT").toString());
			 cnterror   =Integer.parseInt(map.get("CNTERROR").toString());
			
		}
		if (cnterror >0)
		{
			Iserror ="Y";
			dblReduceamount =0;
			dblSettleamount =dblAmount - dblReduceamount;
		}
		else
		{
			
			dblReduceamount =getOspActualOspSpecialReduce(dblAmount ,lotworkresultData,sOsppriceDate);
			dblSettleamount =dblAmount - dblReduceamount;
		}
		
		if (dblSettleamount==0 ||dblPcsqty ==0)
		{
			dblPrice =0;
		}
		else
		{
			dblPrice  =  dblSettleamount / dblPcsqty;
			dblPrice  = Math.ceil(dblPrice* 100) / 100.0;
		}
		Map<String, Object> ospactualData = new HashMap<String, Object>(); 
		
		ospactualData.put("LOTHISTKEY",_txnhistkey);
		ospactualData.put("LOTID",_lotid);
		
		ospactualData = generalDao.addSelectOneMap(NAMESPACE+".selectOsmOspactual", ospactualData);
		if (!(ospactualData == null))
		{
			ospactualData.put("SENDTIME",lotworkresultData.get("SENDTIME"));
			ospactualData.put("PRODUCTDEFID",lotworkresultData.get("PRODUCTDEFID"));
			ospactualData.put("PRODUCTDEFVERSION",lotworkresultData.get("PRODUCTDEFVERSION"));
			ospactualData.put("PROCESSSEGMENTID",lotworkresultData.get("PROCESSSEGMENTID"));
			ospactualData.put("AREAID",lotworkresultData.get("AREAID"));
			ospactualData.put("VENDORID",ospactualStd.get("VENDORID"));
			ospactualData.put("OWNTYPE",ospactualStd.get("OWNTYPE"));
			ospactualData.put("LOTTYPE",ospactualStd.get("LOTTYPE"));
			ospactualData.put("ISREWORK",lotworkresultData.get("ISREWORK"));
			ospactualData.put("SETTLEDATE",ospactualStd.get("SENDTIME"));
			ospactualData.put("PROCESSPRICETYPE",ospactualStd.get("PROCESSPRICETYPE"));
			ospactualData.put("PCSMM",ospactualStd.get("PCSMM"));
			ospactualData.put("PCSPNL",ospactualStd.get("PCSPNL"));
			ospactualData.put("PCSQTY",ospactualStd.get("PCSQTY"));
			ospactualData.put("PANELQTY",ospactualStd.get("PANELQTY"));
			ospactualData.put("M2QTY",ospactualStd.get("M2QTY"));
			ospactualData.put("SENDPCSQTY",ospactualStd.get("SENDPCSQTY"));
			ospactualData.put("SENDPANELQTY",ospactualStd.get("SENDPANELQTY"));
			ospactualData.put("SENDM2QTY",ospactualStd.get("SENDM2QTY"));
			ospactualData.put("DEFECTQTY",ospactualStd.get("DEFECTQTY"));
			ospactualData.put("PANELDEFECTQTY",ospactualStd.get("PANELDEFECTQTY"));
			ospactualData.put("PSEUDODEFECTQTY",ospactualStd.get("PSEUDODEFECTQTY"));
			ospactualData.put("PANELPSEUDODEFECTQTY",ospactualStd.get("PANELPSEUDODEFECTQTY"));
			ospactualData.put("ISERROR",Iserror);
			ospactualData.put("PRICE",dblPrice);
			ospactualData.put("AMOUNT",dblAmount);
			ospactualData.put("REDUCEAMOUNT",dblReduceamount);
			ospactualData.put("SETTLEAMOUNT",dblSettleamount);
			ospactualData.put("ISMAJORCLOSE","N");
			ospactualData.put("VALIDSTATE","Valid");
			generalDao.addUpdate(NAMESPACE+".updateOsmOspactual", ospactualData);
//			ospactualData.put("Lasttxnid",TransactionId.MODIFY);
//			batch.add(ospactualData, SQLUpsertType.UPDATE);
//			batch.execute();
		}
		else
		{
			ospactualData = new HashMap<>();
			ospactualData.put("LOTHISTKEY",_txnhistkey);
			ospactualData.put("LOTID",_lotid);
			ospactualData.put("SENDTIME",lotworkresultData.get("SENDTIME"));
			ospactualData.put("PRODUCTDEFID",lotworkresultData.get("PRODUCTDEFID"));
			ospactualData.put("PRODUCTDEFVERSION",lotworkresultData.get("PRODUCTDEFVERSION"));
			ospactualData.put("PROCESSSEGMENTID",lotworkresultData.get("PROCESSSEGMENTID"));
			ospactualData.put("AREAID",lotworkresultData.get("AREAID"));
			ospactualData.put("VENDORID",ospactualStd.get("VENDORID"));
			ospactualData.put("OWNTYPE",ospactualStd.get("OWNTYPE"));
			ospactualData.put("LOTTYPE",ospactualStd.get("LOTTYPE"));
			ospactualData.put("ISREWORK",lotworkresultData.get("ISREWORK"));
			ospactualData.put("SETTLEDATE",ospactualStd.get("SENDTIME"));
			ospactualData.put("PROCESSPRICETYPE",ospactualStd.get("PROCESSPRICETYPE"));
			ospactualData.put("PCSMM",ospactualStd.get("PCSMM"));
			ospactualData.put("PCSPNL",ospactualStd.get("PCSPNL"));
			ospactualData.put("PCSQTY",ospactualStd.get("PCSQTY"));
			ospactualData.put("PANELQTY",ospactualStd.get("PANELQTY"));
			ospactualData.put("M2QTY",ospactualStd.get("M2QTY"));
			ospactualData.put("SENDPCSQTY",ospactualStd.get("SENDPCSQTY"));
			ospactualData.put("SENDPANELQTY",ospactualStd.get("SENDPANELQTY"));
			ospactualData.put("SENDM2QTY",ospactualStd.get("SENDM2QTY"));
			ospactualData.put("DEFECTQTY",ospactualStd.get("DEFECTQTY"));
			ospactualData.put("PANELDEFECTQTY",ospactualStd.get("PANELDEFECTQTY"));
			ospactualData.put("PSEUDODEFECTQTY",ospactualStd.get("PSEUDODEFECTQTY"));
			ospactualData.put("PANELPSEUDODEFECTQTY",ospactualStd.get("PANELPSEUDODEFECTQTY"));
			ospactualData.put("PRICE",dblPrice);
			ospactualData.put("AMOUNT",dblAmount);
			ospactualData.put("REDUCEAMOUNT",dblReduceamount);
			ospactualData.put("SETTLEAMOUNT",dblSettleamount);
			ospactualData.put("ISERROR",Iserror);
			ospactualData.put("ISMAJORCLOSE","N");
			ospactualData.put("ENTERPRISEID",lotworkresultData.get("ENTERPRISEID"));
			ospactualData.put("PLANTID",lotworkresultData.get("PLANTID"));
			ospactualData.put("ISEXCEPT","N");
			ospactualData.put("VALIDSTATE","Valid");
			generalDao.addUpdate(NAMESPACE+".insertOsmOspactual", ospactualData);

//			ospactualData.put("Lasttxnid",TransactionId.CREATE);
//			batch.add(ospactualData, SQLUpsertType.INSERT);
//			batch.execute();
		}
  		
	}
	@Override
	public double getOspActualOspSpecialReduce(Double dblOrigAmount, Map<String, Object> lotworkresultData,
			String strosppriceDate) throws Exception {
 		double dblReduce =0d;
		double dblamount=dblOrigAmount;
		double dblreducerate=0d;
		double dblreduceamount=0d;
		double dblsettleamount=0d;
		String _txnhistkey = (String) lotworkresultData.get("TXNHISTKEY");
		String _lotid      = (String) lotworkresultData.get("LOTID");
		Map<String,Object> insertMap =new HashMap<>();
		insertMap.put("ENTERPRISEID"        ,  lotworkresultData.get("ENTERPRISEID"));
		insertMap.put("PLANTID"             ,  lotworkresultData.get("PLANTID"));
		insertMap.put("PROCESSSEGMENTID"    ,  lotworkresultData.get("PROCESSSEGMENTID"));
		insertMap.put("PRODUCTDEFID"        ,  lotworkresultData.get("PRODUCTDEFID"));
		insertMap.put("PRODUCTDEFVERSION"   ,  lotworkresultData.get("PRODUCTDEFVERSION"));
		insertMap.put("AREAID"              ,  lotworkresultData.get("AREAID"));
		insertMap.put("VENDORID"            ,  "*");
		insertMap.put("STARTDATE"           ,  strosppriceDate);
		List<Map<String, Object>> degreeList = generalDao.addSelect(NAMESPACE+".GetOspActualOspSpecialReduce", insertMap);
		if(degreeList != null && degreeList.size() > 0)
		{
			for(int i = 0, len = degreeList.size(); i < len; i++)
			{
				Map<String, Object> map   =  degreeList.get(i);
//				
				dblreducerate = Double.parseDouble(map.get("REDUCERATE").toString());
				dblreduceamount = Math.ceil(dblOrigAmount * dblreducerate/100);
				dblsettleamount =dblamount -dblreduceamount;
				dblReduce = dblReduce + dblreduceamount;
				SaveOspActualOspSpecialReduce(_txnhistkey  , _lotid ,map ,dblamount,dblreducerate,dblreduceamount,dblsettleamount);
				//dblamount = dblsettleamount;
			}
			
		}
		
		return dblReduce;
	}
	@Override
	public void SaveOspActualOspSpecialReduce(String _txnhistkey, String _lotid, Map<String, Object> map,
			Double dblamount, Double dblreducerate, Double dblreduceamount, Double dblsettleamount) throws Exception {
		Map<String, Object> ospactualreducedetailData = new HashMap<>();
		ospactualreducedetailData.put("LOTHISTKEY",_txnhistkey);         
		ospactualreducedetailData.put("LOTID",_lotid);
		ospactualreducedetailData.put("ENTERPRISEID",map.get("ENTERPRISEID"));
		
		ospactualreducedetailData.put("PLANTID",map.get("PLANTID"));
		ospactualreducedetailData.put("PROCESSSEGMENTID",map.get("PROCESSSEGMENTID"));
		ospactualreducedetailData.put("PRODUCTDEFID",map.get("PRODUCTDEFID"));
		ospactualreducedetailData.put("PRODUCTDEFVERSION",map.get("PRODUCTDEFVERSION"));
		ospactualreducedetailData.put("AREAID",map.get("AREAID"));
		ospactualreducedetailData.put("VENDORID",map.get("VENDORID"));
		ospactualreducedetailData.put("MODELID",map.get("MODELID"));
		SimpleDateFormat dateformat = new SimpleDateFormat("yyyy-MM-dd");
		String strStartdate=map.get("STARTDATE").toString();
		String strEnddate=map.get("ENDDATE").toString();
		Date dtStartdate = dateformat.parse(strStartdate);
		Date dtEnddate = dateformat.parse(strEnddate);
		ospactualreducedetailData.put("STARTDATE",dtStartdate);
	
		ospactualreducedetailData = generalDao.addSelectOneMap(NAMESPACE+".selectOsmOspactualreducedetail", ospactualreducedetailData);
		if (!(ospactualreducedetailData == null))
		{
			ospactualreducedetailData.put("ENDDATE",dtEnddate);
			ospactualreducedetailData.put("AMOUNT",dblamount);
			ospactualreducedetailData.put("REDUCERATE",dblreducerate);
			ospactualreducedetailData.put("REDUCEAMOUNT",dblreduceamount);
			ospactualreducedetailData.put("SETTLEAMOUNT",dblsettleamount);
			ospactualreducedetailData.put("VALIDSTATE","Valid");
			generalDao.addSelectOneMap(NAMESPACE+".updateOsmOspactualreducedetail", ospactualreducedetailData);
//			ospactualreducedetailData.put("LASTTXNID",TransactionId.MODIFY);
//			batch.add(ospactualreducedetailData, SQLUpsertType.UPDATE);
//			batch.execute();
		}
		else
		{
			ospactualreducedetailData = new HashMap<String, Object>();
			ospactualreducedetailData.put("Lothistkey",_txnhistkey);         
			ospactualreducedetailData.put("Lotid",_lotid);
			ospactualreducedetailData.put("Enterpriseid",map.get("ENTERPRISEID").toString());
			
			ospactualreducedetailData.put("Plantid",map.get("PLANTID").toString());
			ospactualreducedetailData.put("Processsegmentid",map.get("PROCESSSEGMENTID").toString());
			ospactualreducedetailData.put("Productdefid",map.get("PRODUCTDEFID").toString());
			ospactualreducedetailData.put("Productdefversion",map.get("PRODUCTDEFVERSION").toString());
			ospactualreducedetailData.put("Areaid",map.get("AREAID").toString());
			ospactualreducedetailData.put("Vendorid",map.get("VENDORID").toString());
			ospactualreducedetailData.put("Modelid",map.get("MODELID").toString());
			ospactualreducedetailData.put("Startdate",dtStartdate);
			
			ospactualreducedetailData.put("Enddate",dtEnddate);
			ospactualreducedetailData.put("Amount",dblamount);
			ospactualreducedetailData.put("Reducerate",dblreducerate);
			ospactualreducedetailData.put("Reduceamount",dblreduceamount);
			ospactualreducedetailData.put("Settleamount",dblsettleamount);
			ospactualreducedetailData.put("Validstate","Valid");
			generalDao.addUpdate(NAMESPACE+".insertOsmOspactualreducedetail", ospactualreducedetailData);
//			ospactualreducedetailData.put("Lasttxnid",TransactionId.CREATE);
//			batch.add(ospactualreducedetailData, SQLUpsertType.INSERT);
//			batch.execute();
		
		}
		
	}
	@Override
	public String OspEtcClaimAmountCreate(String strenterpriseid, String strplantid, String strclaimdate,
			String strclaimtype, String strclaimdepartment, String strclaimuser, String strareaid, String strvendorid,
			String strproductdefid, String strproductdefversion, String stretclotid, Double dblamount,
			String strrelkeyno) throws Exception {
		
			String strReturn ="";
			String strCloseValue="";
//			ISQLUpsertBatch batch = new SQLUpsertBatch();
			SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
			//기존 자료 유무 확인 처리...
			Map<String,Object> insertMap =new HashMap<>();
			insertMap.put("P_RELKEYNO"           ,  strrelkeyno);
			List<Map<String, Object>> degreeList = generalDao.addSelect(NAMESPACE+".CheckEtcClaimAmountCreateOsp",insertMap);
			if(degreeList != null && degreeList.size() > 0)
			{
				Map<String, Object> map=  degreeList.get(0);
				if(StringUtil.isNullOrEmpty(map.get("PERIODID"))) 
				{
					int _claimsequence   = Integer.parseInt(map.get("CLAIMSEQUENCE").toString()); 
					String strtempclaimdate =map.get("CLAIMDATE").toString();
					
					Date dateClaimdate = dateFormat.parse(strclaimdate) ;
					Map<String, Object> ospetcclaimamountData = new HashMap<String, Object>(); 
					
					ospetcclaimamountData.put("CLAIMDATE",dateClaimdate); 
					ospetcclaimamountData.put("CLAIMSEQUENCE",_claimsequence);
					ospetcclaimamountData.put("ENTERPRISEID",strenterpriseid);
					ospetcclaimamountData.put("PLANTID",strplantid);
					ospetcclaimamountData = generalDao.addSelectOneMap(NAMESPACE+".selectOsmOspetcclaimamount",ospetcclaimamountData);
					
					ospetcclaimamountData.put("AMOUNT",dblamount);                    //금액
					if (dblamount==0)
					{
						ospetcclaimamountData.put("VALIDSTATE","Valid");
					}
					else
					{
						ospetcclaimamountData.put("VALIDSTATE","Invalid");
					}
					generalDao.addUpdate(NAMESPACE+".updateOsmOspetcclaimamount",ospetcclaimamountData);
	//				ospetcclaimamountData.put("Lasttxnid",TransactionId.MODIFY);
	//				batch.add(ospetcclaimamountData, SQLUpsertType.UPDATE);
	//				batch.execute();
					strReturn="true-" +Integer.toString(_claimsequence);
					
				}
				else
				{
					
					strReturn ="false-InValidOspData014";	//다국어 
				}
				
				
			}
			else
			{
				if (dblamount > 0)
				{
					
					
					Map<String, Object> ospetcclaimamountData = new HashMap<String, Object>(); 
					
					String stringDate  = strclaimdate;
					
					
					Date dateClaimdate = dateFormat.parse(strclaimdate) ;
					
					int  _claimsequence = 0;  //정산순번return용 전역변수  
					_claimsequence = GetCreateSeq(strplantid,stringDate);
					
					ospetcclaimamountData.put("CLAIMSEQUENCE",_claimsequence);
					ospetcclaimamountData.put("CLAIMDATE",dateClaimdate);   
					ospetcclaimamountData.put("ENTERPRISEID",strenterpriseid);
					ospetcclaimamountData.put("PLANTID",strplantid);
					
					ospetcclaimamountData.put("CLAIMTYPE",strclaimtype);                    //CLAIM구분
					ospetcclaimamountData.put("CLAIMDEPARTMENT",strclaimdepartment);        //등록부서
					ospetcclaimamountData.put("CLAIMUSER",strclaimuser);                    //등록자
					ospetcclaimamountData.put("AREAID",strareaid);                  
					ospetcclaimamountData.put("VENDORID",strvendorid);                   //협력사
					ospetcclaimamountData.put("PRODUCTDEFID",strproductdefid);              //품목코드
					ospetcclaimamountData.put("PRODUCTDEFVERSION",strproductdefversion);    //품목 version
					ospetcclaimamountData.put("AMOUNT",dblamount);                    //금액
					ospetcclaimamountData.put("ETCLOTID",stretclotid);                      // 관련 lotno
					ospetcclaimamountData.put("DESCRIPTION","");               // 비고 
					ospetcclaimamountData.put("VALIDSTATE","Valid");
					ospetcclaimamountData.put("RELKEYNO",strrelkeyno);
					generalDao.addUpdate(NAMESPACE+".insertOsmOspetcclaimamount",ospetcclaimamountData);
	//				ospetcclaimamountData.put("Lasttxnid(TransactionId.CREATE);
	//				batch.add(ospetcclaimamountData, SQLUpsertType.INSERT);
	//				batch.execute();
					strReturn="true-" +Integer.toString(_claimsequence);
				
				
				}
				else
				{
					strReturn="true-0" ;
				}
			}
			return strReturn;
 	}
	@Override
	public int GetCreateSeq(String sPlantid, String Settledate) throws Exception {
//		TxnInfo txnInfo = TxnInfoUtil.getTxnInfo();
		String strSeq="";
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMdd");
		Date dateSettledate = dateFormat.parse(Settledate) ;
		
		String strmonth = dateFormat.format(dateSettledate);
		
		Map<String, Object> param = new HashMap<String, Object>(); 
		param.put("PLANTID", sPlantid);
		param.put("CLAIMDATE", strmonth);
		int seq = generalDao.addSelectCount(NAMESPACE+".OspClaimamountsequence",param);
		

  		return seq;	
	}

}