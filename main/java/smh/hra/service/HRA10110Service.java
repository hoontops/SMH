package smh.hra.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: HRA10110Service.java
* @Package: smh.hra.service  
* @Project name: SM 상선 myHR 고도화
* @Type name: HRA10110Service    
* @Company: Built1
* @Create Date: 2022. 1. 13. 오전 11:48:49 
* @Author: 권택진
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2022. 1. 13.     권택진     최초  생성
 *
*/
public interface HRA10110Service {
	
	
	/**
	 * @fn          : selectVarificationLetterList
	 * @brief       : 신상정보 Base Infomation
	 * @remark
	 * @Author      : 권택진
	 * @File Version: v1.0
	 *
	 * << 개정이력(Modification Information) >>
	 *
	 *     수정일         수정자        수정내용
	 *   ----------  ------------  ----------
	 *   2022.01.27.    권택진        최초  생성
	 *
	 */   
	public void selectBaseInfo(UiMapDto dto) throws Exception;
	
	public void selectHumanInfo(UiMapDto dto) throws Exception;
	
	public void selectEducationInfo(UiMapDto dto) throws Exception;
	
	public void selectFamilyInfo(UiMapDto dto) throws Exception;

	public void selectForLanguageInfo(UiMapDto dto) throws Exception;

	public void selectCertificate(UiMapDto dto) throws Exception;
	
	public void selectPassport(UiMapDto dto) throws Exception;
	
	public void selectOrderRecord(UiMapDto dto) throws Exception;
	
	public void selectWorkExperience(UiMapDto dto) throws Exception;
	
	public void selectJobExperience(UiMapDto dto) throws Exception;
	
	public void selectWorkRating(UiMapDto dto) throws Exception;
	
	public void selectEducationCarrerInfo(UiMapDto dto) throws Exception;
	
	public void selectOtherCompany(UiMapDto dto) throws Exception;
	
	
	public void insertds_humanInfo(UiMapDto dto) throws Exception;
	
	public void insertds_familyInfo(UiMapDto dto) throws Exception;
	
	public void insertds_passport(UiMapDto dto) throws Exception;
	
	public void deleteds_familyInfo(UiMapDto dto) throws Exception;
	
	public void deleteds_passport(UiMapDto dto) throws Exception;

	

}
