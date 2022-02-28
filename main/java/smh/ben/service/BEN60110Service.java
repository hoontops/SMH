package smh.ben.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file         : BEN60110Service.java
* @Package      : smh.ben.service  
* @Project name : SM상선 myHR 고도화
* @Type name    : BEN60110Service    
* @Company      : Built1
* @Create Date  : 2022 2022. 1. 27. 오후 1:49:18 
* @Author       : Administrator
* @File Version : v1.0 
*
* << 개정이력(Modification Information) >>
* 수정일             수정자             수정내용
* ------------     ------------     ------------
* 2022. 1. 27.       Administrator      최초생성
*/
public interface BEN60110Service {
    
    /**
    * @fn           : selectAddInsuraceList
    * @brief        : 단체상해보험 데이터 조회
    * @Method Name  : selectAddInsuraceList
    * @Create Date  : 2022 2022. 1. 27. 오후 3:18:34
    * @Author       : Administrator
    * @File Version : v1.0
    *
    * << 개정이력(Modification Information) >>
    * 수정일             수정자             수정내용
    * ------------     ------------     ------------
    * 2022. 1. 27.       Administrator      최초생성
    */
    public void selectAddInsuraceList(UiMapDto dto) throws Exception;
    
    
    
    /**
    * @fn           : saveAddInsurace
    * @brief        : 단체상해보험 데이터 저장
    * @Method Name  : saveAddInsurace
    * @Create Date  : 2022 2022. 1. 28. 오후 2:14:50
    * @Author       : Administrator
    * @File Version : v1.0
    *
    * << 개정이력(Modification Information) >>
    * 수정일             수정자             수정내용
    * ------------     ------------     ------------
    * 2022. 1. 28.       Administrator      최초생성
    */
    public void saveAddInsurace(UiMapDto dto) throws Exception;
    
    
    
}
