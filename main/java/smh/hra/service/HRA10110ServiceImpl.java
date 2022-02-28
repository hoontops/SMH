package smh.hra.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

@Service
public class HRA10110ServiceImpl extends AbstractNbdfService implements HRA10110Service {
	
	public static final String NAMESPACE = "smh.hra.dao.HRA10110Dao";

    @Autowired
    private GeneralDao generalDao;
    
    //신상정보 Base Infomation
    public void selectBaseInfo(UiMapDto dto) throws Exception {
    	
        Map<String, Object> param = getParametersMap(dto);
        
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectBaseInfo",param);
        System.out.println("==========list==============");
        System.out.println("==========list==============");
        System.out.println("==========list==============");
        System.out.println("==========list==============");
    	System.out.println(list);
    	System.out.println("========================");
    	System.out.println("========================");
    	System.out.println("========================");
    	System.out.println("========================");

        putDataSetMap(dto, list);
    }
    
    
    //신상정보 selectHumanInfo
    public void selectHumanInfo(UiMapDto dto) throws Exception {
    	
    	Map<String, Object> param = getParametersMap(dto);
    	
    	List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectHumanInfo",param);
    	

    	System.out.println("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
    	System.out.println("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
    	System.out.println("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
    	System.out.println("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
    	System.out.println(list);
    	System.out.println("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
    	System.out.println("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
    	System.out.println("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
    	System.out.println("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
    	System.out.println("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
    	System.out.println("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
    	
    	putDataSetMap(dto, list);
    }
    
    //신상정보 selectEducationInfo
    public void selectEducationInfo(UiMapDto dto) throws Exception {
    	
    	Map<String, Object> param = getParametersMap(dto);
    	
    	List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectEducationInfo",param);
    	
    	putDataSetMap(dto, list);
    }
    
    //신상정보 selectFamilyInfo
    public void selectFamilyInfo(UiMapDto dto) throws Exception {
    	
    	Map<String, Object> param = getParametersMap(dto);
    	
    	List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectFamilyInfo",param);
    	
    	System.out.println("==========list==============");
    	System.out.println(list);
    	System.out.println("========================");
    	
    	putDataSetMap(dto, list);
    }
    
    
    //신상정보 selectForLanguageInfo
    public void selectForLanguageInfo(UiMapDto dto) throws Exception {
    	
    	Map<String, Object> param = getParametersMap(dto);
    	
    	List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectForLanguageInfo",param);
    	
    	putDataSetMap(dto, list);
    }
    
    //신상정보 selectCertificate
    public void selectCertificate(UiMapDto dto) throws Exception {
    	
    	Map<String, Object> param = getParametersMap(dto);
    	
    	List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectCertificate",param);
    	
    	putDataSetMap(dto, list);
    }
    
    //신상정보 selectPassport
    public void selectPassport(UiMapDto dto) throws Exception {
    	
    	Map<String, Object> param = getParametersMap(dto);
    	
    	List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectPassport",param);
    	
    	putDataSetMap(dto, list);
    }
    
    //이력정보 selectOrderRecord
    public void selectOrderRecord(UiMapDto dto) throws Exception {
    	
    	Map<String, Object> param = getParametersMap(dto);
    	
    	List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectOrderRecord",param);
    	
    	System.out.println("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
    	System.out.println("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
    	System.out.println("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
    	System.out.println("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
    	System.out.println(list);
    	System.out.println("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
    	System.out.println("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
    	System.out.println("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
    	System.out.println("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
    	System.out.println("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
    	System.out.println("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
    	
    	putDataSetMap(dto, list);
    }
    
    
    //이력정보 selecWorkExperience
    public void selectWorkExperience(UiMapDto dto) throws Exception {
    	
    	Map<String, Object> param = getParametersMap(dto);
    	
    	List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectWorkExperience",param);
    	
    	putDataSetMap(dto, list);
    }
    
    
    //이력정보 selectJobExperience
    public void selectJobExperience(UiMapDto dto) throws Exception {
    	
    	Map<String, Object> param = getParametersMap(dto);
    	
    	List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectJobExperience",param);
    	
    	putDataSetMap(dto, list);
    }
    
    //이력정보 selectWorkRating
    public void selectWorkRating(UiMapDto dto) throws Exception {
    	
    	Map<String, Object> param = getParametersMap(dto);
    	
    	List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectWorkRating",param);
    	
    	putDataSetMap(dto, list);
    }
    
    //이력정보 selectEducationCarrerInfo
    public void selectEducationCarrerInfo(UiMapDto dto) throws Exception {
    	
    	Map<String, Object> param = getParametersMap(dto);
    	
    	List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectEducationCarrerInfo",param);
    	
    	putDataSetMap(dto, list);
    }
    
    //이력정보 selectEducationCarrerInfo
    public void selectOtherCompany(UiMapDto dto) throws Exception {
    	
    	Map<String, Object> param = getParametersMap(dto);
    	
    	List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectOtherCompany",param);
    	
    	putDataSetMap(dto, list);
    }
    
    
    
    //신상정보 수정 -  insertds_humanInfo
    public void insertds_humanInfo(UiMapDto dto) throws Exception {
    	
    	DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT");
        System.out.println(" =========================== insertds_humanInfo ================================ : ");
        System.out.println(dsMap.get(0));
        System.out.println(" =======================================================");
        System.out.println(" =======================================================");
        System.out.println(" =======================================================");
        System.out.println(" =======================================================");
        int result = 0;
        for (int i = 0, n = dsMap.size(); i < n; i++) {
            Map<String, Object> param = dsMap.get(i);
            
//         param.put("PAPF_OBJECT_VERSION_NUMBER", -1);
//            param.put("PAR_ADDRESS_ID", "");
            param.put("PAR_POSTAL_CODE_ID", "");
//            param.put("PAR_OBJECT_VERSION_NUMBER", -1);
//            param.put("PAC_ADDRESS_ID", "");
            param.put("PAC_POSTAL_CODE_ID", 77200);
//            param.put("PAC_OBJECT_VERSION_NUMBER", -1);
//            param.put("PPEI3_PERSON_EXTRA_INFO_ID", "");
//            param.put("PPEI3_OBJECT_VERSION_NUMBER", -1);
            param.put("act_login_logs_id", "");
            param.put("act_user_id", "");
            param.put("act_site_id", -1);
            
//            param.put("EMPLOYEE_NUMBER","");
            param.put("PAR_POSTAL_CODE","");
            param.put("PAC_POSTAL_CODE","763-852");
//            param.put("HOME_TELEPHONE","");
//            param.put("MOBILE_TELEPHONE","");
//            param.put("EMERGENCY_TELEPHONE","");
            param.put("DATE_OF_BIRTH","19890921");
            param.put("MARITAL_DATE","20181124");
            
            System.out.println(" !@$!%$!@#%!@%!@%!@% : "+ param);
            generalDao.addSelectOneMap(NAMESPACE+".insertds_humanInfo",param);
        }
   
        putDataSetMap(dto, result);
    }
    
    
    //신상정보 수정 -  insertds_familyInfo
    public void insertds_familyInfo(UiMapDto dto) throws Exception {
    	
    	DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT");
    	System.out.println(" =========================== insertds_familyInfo ================================ : ");
    	System.out.println(dsMap.get(0));
    	System.out.println(" =======================================================");
    	System.out.println(" =======================================================");
    	System.out.println(" =======================================================");
    	System.out.println(" =======================================================");
    	int result = 0;
    	for (int i = 0, n = dsMap.size(); i < n; i++) {
    		Map<String, Object> param = dsMap.get(i);
    		
    		
    		
    		System.out.println(" !@$!%$!@#%!@%!@%!@% : "+ param);
    		generalDao.addSelectOneMap(NAMESPACE+".insertds_familyInfo",param);
    	}
    	
    	putDataSetMap(dto, result);
    }
    
    //신상정보 수정 -  insertds_passport
    public void insertds_passport(UiMapDto dto) throws Exception {
    	
    	DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT");
    	System.out.println(" =========================== insertds_familyInfo ================================ : ");
    	System.out.println(dsMap.get(0));
    	System.out.println(" =======================================================");
    	System.out.println(" =======================================================");
    	System.out.println(" =======================================================");
    	System.out.println(" =======================================================");
    	int result = 0;
    	for (int i = 0, n = dsMap.size(); i < n; i++) {
    		Map<String, Object> param = dsMap.get(i);
    		
    		
    		
    		System.out.println(" !@$!%$!@#%!@%!@%!@% : "+ param);
    		generalDao.addSelectOneMap(NAMESPACE+".insertds_passport",param);
    	}
    	
    	putDataSetMap(dto, result);
    }
    
    
    //신상정보 수정 -  deleteds_familyInfo
    public void deleteds_familyInfo(UiMapDto dto) throws Exception {
    	
    	DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT");
    	System.out.println(" =========================== insertds_familyInfo ================================ : ");
    	System.out.println(dsMap.get(0));
    	System.out.println(" =======================================================");
    	System.out.println(" =======================================================");
    	System.out.println(" =======================================================");
    	System.out.println(" =======================================================");
    	int result = 0;
    	for (int i = 0, n = dsMap.size(); i < n; i++) {
    		Map<String, Object> param = dsMap.get(i);
    		
    		String relationshipId = (String) param.get("CONTACT_RELATIONSHIP_ID");
    		String personId = (String) param.get("CONTACT_PERSON_ID");
    		
    		String workPks = relationshipId + ":" + personId;
    		
    		param.put("WORKPKS", workPks);
    		
    		System.out.println(param.get("WORKPKS"));
    		
    		param.put("ACT_LOGIN_LOGS_ID", "");
            param.put("ACT_USER_ID", "");
            param.put("ACT_SITE_ID", "");
    		
    		System.out.println(" !@$!%$!@#%!@%!@%!@% : "+ param);
    		generalDao.addSelectOneMap(NAMESPACE+".deleteds_familyInfo",param);
    	}
    	
    	putDataSetMap(dto, result);
    }
    
    
    //신상정보 수정 -  deleteds_familyInfo
    public void deleteds_passport(UiMapDto dto) throws Exception {
    	
    	DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT");
    	System.out.println(" =========================== deleteds_passport ================================ : ");
    	System.out.println(dsMap.get(0));
    	System.out.println(" =======================================================");
    	System.out.println(" =======================================================");
    	System.out.println(" =======================================================");
    	System.out.println(" =======================================================");
    	int result = 0;
    	for (int i = 0, n = dsMap.size(); i < n; i++) {
    		Map<String, Object> param = dsMap.get(i);
    		
    		String relationshipId = (String) param.get("PERSON_ANALYSIS_ID");
    		String personId = (String) param.get("PEA_OBJECT_VERSION_NUMBER");
    		
    		String workPks = relationshipId + ":" + personId;
    		
    		param.put("WORKPKS", workPks);
    		
    		System.out.println(param.get("WORKPKS"));
    		
    		param.put("ACT_LOGIN_LOGS_ID", "");
    		param.put("ACT_USER_ID", "");
    		param.put("ACT_SITE_ID", "");
    		
    		System.out.println(" !@$!%$!@#%!@%!@%!@% : "+ param);
    		generalDao.addSelectOneMap(NAMESPACE+".deleteds_passport",param);
    	}
    	
    	putDataSetMap(dto, result);
    }
    
}
