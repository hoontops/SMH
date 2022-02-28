package smh.mfm.service;

import java.util.HashMap;
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
 * @file		: MFM01600ServiceImpl.java
 * @Package		: smh.mfm.service
 * @Project name: IFC MES시스템 구축
 * @Type name	: MFM01300ServiceImpl
 * @Company		: Built1
 * @Create Date	: 2021.04.24
 * @Author		: 김진현
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 04. 24.  김진현      최초  생성 
 */
@Service
public class MFM01600ServiceImpl extends AbstractNbdfService implements MFM01600Service {

    public static final String NAMESAPCE = "smh.mfm.dao.MFM01600Dao";

    @Autowired
    private GeneralDao generalDao;
    
    
    /**
     * @fn
     * @brief 주요 품목 재공 실적_기준정보화면 - [메인조회]
     * @remark 
     * @see smh.mfm.service.MFM01300Service#selectProductKind(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectProductKind(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProductKind", param));
    }
  	
    /**
     * @fn
     * @brief 주요 품목 재공 실적_기준정보화면 - [메인조회]
     * @remark 
     * @see smh.mfm.service.MFM01300Service#SelectWorkDoneProductRelList(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectWorkDoneProductRelList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectWorkDoneProductRelList", param), "output1");
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProcessOrderList", param), "output2");
    }
  	

  	/**
     * @fn
     * @brief 주요 품목 재공 실적_기준정보화면 - [메인저장]
     * @remark 
     * @see smh.mfm.service.MFM01300Service#SaveWorkDoneProductRel(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void saveWorkDoneProductRel(UiMapDto dto) throws Exception {
  		DataSetMap dtOwnerMapping 				= getParametersDataSetMap(dto, "ds_personMain");			// 담당장 맵핑
  		DataSetMap dtOrderMapping 				= getParametersDataSetMap(dto, "ds_order");			// 정렬순서
  		
  	  int result = 0;
      Map<String, Object> param;
      Map<String, Object> prePram;
      if(dtOwnerMapping != null )
		{	
			for(int i = 0; i<dtOwnerMapping.size(); i++)
			{
				param = dtOwnerMapping.get(i);
				int type = getRowType(param);
				/*
				if((param.get("OWNER") == null) && (param.get("OWNERNAME") != null))
				{	
					prePram = dtOwnerMapping.get(i-1);
					if(param.get("OWNERNAME").equals(prePram.get("OWNERNAME"))) {
						param.put("OWNER",prePram.get("OWNER"));
					}
				}
				*/
				switch(type)
				{
				case DataSet.ROW_TYPE_UPDATED:
					result += getUpsertWorkDoneProductRel(param);
					break;
				}
			}
			
		}
      
      if(dtOrderMapping != null )
		{	
			for(int i = 0; i<dtOrderMapping.size(); i++)
			{
				param = dtOrderMapping.get(i);
				int type = getRowType(param);
				/*
				if((param.get("OWNER") == null) && (param.get("OWNERNAME") != null))
				{	
					prePram = dtOrderMapping.get(i-1);
					if(param.get("OWNERNAME").equals(prePram.get("OWNERNAME"))) {
						param.put("OWNER",prePram.get("OWNER"));
					}
				}
				*/
				switch(type)
				{
				case DataSet.ROW_TYPE_UPDATED:
					result +=  generalDao.addUpdate(NAMESAPCE + ".mergeOrderRel", param);
					break;
				}
			}
			
		}
      
      putDataSetMap(dto, result);  
    }
  	
	
  	/************************************************************************************************
	 * 주요 품목 재공 실적  Tab UPDATE 
	 ************************************************************************************************/
	private int getUpsertWorkDoneProductRel(Map<String, Object> param) throws Exception
	{	
  		int result = 0;
  		Map<String, Object> workDoenRel = generalDao.addSelectOneMap(NAMESAPCE + ".selectWorkDoneProductRel", param);
  		
  		if(workDoenRel == null)
		{	
  			//param.put("LASTTXNHISTKEY"							, TxnHistKey.getTxnHistKey());
  			//param.put("TXNID"											, "SaveWorkdoneProductRel");
  			
  			result += generalDao.insert(NAMESAPCE + ".insertWorkDoneProductRel", param);
		}
  		else
  		{
  			//workDoenRel.put("OWNER"									, param.get("OWNER"));
  			workDoenRel.put("PRODUCTDEFGROUPNAME"			, param.get("PRODUCTDEFGROUPNAME"));
  			workDoenRel.put("PRODUCTDEFCLASSGROUPNAME"	, param.get("PRODUCTDEFCLASSGROUPNAME"));
  			//workDoenRel.put("YESNOUSEPRODUCTDEFCLASS"		, param.get("YESNOUSEPRODUCTDEFCLASS"));
  			// (21.07.29) 화면에서 수정 가능 한 내용 임  주석 제거
  			workDoenRel.put("VALIDSTATE"								, param.get("VALIDSTATE"));
  			
  			//workDoenRel.put("LASTTXNHISTKEY"						, TxnHistKey.getTxnHistKey());
  			//workDoenRel.put("TXNID"										, "SaveWorkdoneProductRel");
  			result += generalDao.addUpdate(NAMESAPCE + ".updateWorkDoneProductRel", workDoenRel);
  		}
		return result; 
  		
	}


    
  	
}