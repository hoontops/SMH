package smh.qam.service;


import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.interceptor.ContextConstant;
import com.nbdf.commons.interceptor.SessionManager;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
* @file        : QAM00500ServiceImpl.java
* @Package     : smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name   : QAM00500ServiceImpl
* @Company     : Built1
* @Create Date : 2021.03.22
* @Author      : yanghee.kim
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.03.22  yanghee.kim    최초  생성
*
*/
@Service
public class QAM00500ServiceImpl extends AbstractNbdfService implements QAM00500Service {

    public static final String NAMESPACE = "smh.qam.dao.QAM00500Dao";
 
    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn          : selectQcOspRequestInspList
    * @brief       : (Override method) 수입검사 의뢰 조회
    * @Method Name : selectQcOspRequestInspList
    * @remark      : 상세설명
* @see smh.qam.service.QAM00500Service#selectQcOspRequestInspList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectQcOspRequestInspList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectQcOspRequestInspList", param));
    }

    /**
    * @fn          : saveQcOspRequestInsp
    * @brief       : (Override method) 수입검사 의뢰 등록/수정/삭제 Call
    * @Method Name : saveQcOspRequestInsp
    * @remark      : 상세설명
* @see smh.qam.service.QAM00500Service#saveQcOspRequestInsp(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void saveQcOspRequestInsp(UiMapDto dto) throws Exception {
        DataSetMap paramMap = getParametersDataSetMap(dto);
        Map<String, Object> param;

        int result = 0;

        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            int type = getRowType(param);
            
        	if ("1".equals(param.get("CHK")))
        	{
        		if (type == DataSet.ROW_TYPE_INSERTED)
        		{
        		}
        		else if (type == DataSet.ROW_TYPE_UPDATED)
        		{
	            	if ("modified".equals(param.get("JOBSTATE")))
	            	{
	            		result += updateQcOspRequestInsp(param);
	            	}
	            	else if ("added".equals(param.get("JOBSTATE")))
	            	{
	            		result += insertQcOspRequestInsp(param);
	            	}                
        		}
        		else if (type == DataSet.ROW_TYPE_DELETED)
        		{
        		}
        	}
        }

        putDataSetMap(dto, result);
    }

    /**
    * @fn          : insertQcOspRequestInsp
    * @brief       : (Override method) 수입검사 의뢰 등록
    * @Method Name : insertQcOspRequestInsp
    * @remark      : 상세설명
    * @see
    */
    private int insertQcOspRequestInsp(Map<String, Object> param) throws Exception{
        Map<String, Object> paramMap = new HashMap<String, Object>();

        //HashMap Copy
        for (Map.Entry<String, Object> entry : param.entrySet()) {
            paramMap.put(entry.getKey(), entry.getValue());
        }

        List<Map<String, Object>> maxDegree = generalDao.addSelect(NAMESPACE + ".selectQcOspRequestInspDegree", paramMap);
        int degree = 0;
        Boolean isFirst = true;
        
        //차수설정
        if(maxDegree.get(0).get("DEGREE") != null)
        {
            degree = Integer.parseInt(maxDegree.get(0).get("DEGREE").toString());
            isFirst = false;
        }
        
        /*
         //2021.06.11 TOBE Modify 여러번 의뢰가능하도록 주석처리
        if(!isFirst)
        {
            //2020-01-23 의뢰목록중 검사하지않은건 있는지
            Map<String,Object> param2 = new HashMap<String, Object>();

            param2.put("ENTERPRISEID", paramMap.get("ENTERPRISEID"));
            param2.put("PLANTID", paramMap.get("PLANTID"));
            param2.put("RESOURCEID", paramMap.get("LOTID"));
            param2.put("PROCESSRELNO", (String) paramMap.get("LOTHISTKEY") + degree);
            param2.put("DEGREE", degree);
            param2.put("RESOURCETYPE", "ProcessInspection");
            
            //2020-01-23 의뢰목록중 검사하지않은건 있는지 체크 =>의뢰 한 건 중 검사 한것 검색됨
            // 1건 => 의뢰가능
            // 없을 때 (검사 안됐거나)
            List<Map<String, Object>> inspected = generalDao.addSelect(NAMESPACE + ".selectQcOspRequestInspResultChk", param2);

            if(inspected.size() != 1)
            {
                //이미 공정수입검사 의뢰한 대상입니다. 검사를 진행 해 주세요.
            	throw new BizException("NoInspectedOSPRequested", String.format("%s, %s", paramMap.get("LOTID"), degree));
            	
            }        
        }
        */
        updateQcOspRequestInspIsLast(paramMap);

        paramMap.put("DEGREE", Integer.toString(degree+1));
        paramMap.put("REQUESTDATE", new Date());
        paramMap.put("REQUESTOR", (String)SessionManager.getInstance().getSessionInfo(ContextConstant.SESSION_USER_ID));
        paramMap.put("ISLASTREQUEST", "Y");
        
        return generalDao.addUpdate(NAMESPACE + ".insertQcOspRequestInsp", paramMap);
    }

    /**
    * @fn          : updateQcOspRequestInsp
    * @brief       : (Override method) 수입검사 의뢰 수정
    * @Method Name : updateQcOspRequestInsp
    * @remark      : 상세설명
    * @see
    */
    private int updateQcOspRequestInsp(Map<String, Object> param) throws Exception{
        Map<String, Object> paramMap = new HashMap<String, Object>();

        //HashMap Copy
        for (Map.Entry<String, Object> entry : param.entrySet()) {
            paramMap.put(entry.getKey(), entry.getValue());
        }

        List<Map<String, Object>> idList = generalDao.addSelect(NAMESPACE + ".selectQcOspRequestInspChk", paramMap);
        if (idList.size() < 1 )
        {
            throw new BizException("InValidData001",String.format("LOTID = %s", paramMap.get("LOTID"))+", "
                                                   +String.format("LOTHISTKEY = %s", paramMap.get("LOTHISTKEY"))+", "
                                                   +String.format("DEGREE = %s", paramMap.get("DEGREE")));
        }

        return generalDao.addUpdate(NAMESPACE + ".updateQcOspRequestInsp", paramMap);
    }

    /**
    * @fn          : updateQcOspRequestInspIsLast
    * @brief       : (Override method) 수입검사 의뢰 수정
    * @Method Name : updateQcOspRequestInspIsLast
    * @remark      : 상세설명
    * @see
    */
    private int updateQcOspRequestInspIsLast(Map<String, Object> param) throws Exception{
        Map<String, Object> paramMap = new HashMap<String, Object>();
        
        int result = 0;
        
        //HashMap Copy
        for (Map.Entry<String, Object> entry : param.entrySet()) {
            paramMap.put(entry.getKey(), entry.getValue());
        }

        Map<String,Object> param2 = new HashMap<String, Object>();
        param2.put("LOTID", paramMap.get("LOTID"));    
        param2.put("LOTHISTKEY", paramMap.get("LOTHISTKEY"));    
        param2.put("PLANTID", paramMap.get("PLANTID"));    
        param2.put("ENTERPRISEID", paramMap.get("ENTERPRISEID"));    
        param2.put("ISLASTREQUEST", "Y"); 
        
        List<Map<String, Object>> requestedList = generalDao.addSelect(NAMESPACE + ".selectQcOspRequestInspIsLast", param2);
        if(requestedList.size() != 0)
        {            
            for (Map<String, Object> item : requestedList)
            {         
            	paramMap.put("DEGREE", item.get("DEGREE").toString());
				
            	List<Map<String, Object>> idList = generalDao.addSelect(NAMESPACE + ".selectQcOspRequestInspChk", paramMap);
            	if (idList.size() < 1 )
            	{
                    throw new BizException("InValidData001",String.format("LOTID = %s", paramMap.get("LOTID"))+", "
								                           +String.format("LOTHISTKEY = %s", paramMap.get("LOTHISTKEY"))+", "
								                           +String.format("DEGREE = %s", paramMap.get("DEGREE")));
            	}
            	paramMap.put("ISLASTREQUEST", "N");

            	result += generalDao.addUpdate(NAMESPACE + ".updateQcOspRequestInspIsLast", paramMap);
            }            
        }
        
        return result;
    }
    
    /**
    * @fn          : saveQcOspRequestInspCancel
    * @brief       : (Override method) 수입검사 의뢰 - 의뢰취소
    * @Method Name : saveQcOspRequestInspCancel
    * @remark      : 상세설명
* @see smh.qam.service.QAM00500Service#saveQcOspRequestInspCancel(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void saveQcOspRequestInspCancel(UiMapDto dto) throws Exception {
        DataSetMap paramMap = getParametersDataSetMap(dto);
        Map<String, Object> param;

        int result = 0;

        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            int type = getRowType(param);

        	if ("1".equals(param.get("CHK")))
        	{
	            if (type == DataSet.ROW_TYPE_UPDATED) 
	            {
	            	result += deleteQcOspRequestInsp(param);
	            }
        	}
        }

        putDataSetMap(dto, result);
    }   
    

    /**
    * @fn          : deleteQcOspRequestInsp
    * @brief       : (Override method) 수입검사 의뢰 - 의뢰취소
    * @Method Name : deleteQcOspRequestInsp
    * @remark      : 상세설명
    * @see
    */
    private int deleteQcOspRequestInsp(Map<String, Object> param) throws Exception{
        Map<String, Object> paramMap = new HashMap<String, Object>();
        
        //HashMap Copy
        for (Map.Entry<String, Object> entry : param.entrySet()) {
            paramMap.put(entry.getKey(), entry.getValue());
        }

        List<Map<String, Object>> idList = generalDao.addSelect(NAMESPACE + ".selectQcOspRequestInspChk", paramMap);
        if (idList.size() < 1 ) 
        {
            throw new BizException("InValidData003",String.format("LOTID = %s", paramMap.get("LOTID"))+", "
									               +String.format("LOTHISTKEY = %s", paramMap.get("LOTHISTKEY"))+", "
									               +String.format("DEGREE = %s", paramMap.get("DEGREE")));
        }
        
        return generalDao.addUpdate(NAMESPACE + ".deleteQcOspRequestInsp", paramMap);        
    }
}