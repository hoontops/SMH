package smh.bas.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file			: BAS00700Service.java
* @Package		: smh.bas.service  
* @Project 	: 인터플렉스 MES 구축
* @Type name	: BAS00700Service    
* @Company		: Built1
* @Create Date	: 2021. 2. 8. 오전 11:22:35 
* @Author		: sungmin.choe
* @File Version	: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일      수정자        수정내용
 *   ------------  ------       ----------
 *   2021. 2. 8.       sungmin.choe      최초  생성
 *
*/
public interface BAS00700Service {


    /**
    * @fn 			: selectBasMasterdataclassList
    * @brief 		: 품목유형 조회 함수 
    * @Method Name : selectBasMasterdataclassList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 2. 8.       sungmin.choe      최초  생성
     *
    */
    public void selectBasMasterdataclassList(UiMapDto dto) throws Exception;


    /**
    * @fn 			: saveBasMasterdataclass
    * @brief 		: 품목유형 저장 함수
    * @Method Name : saveBasMasterdataclass
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 2. 8.       sungmin.choe      최초  생성
     *
    */
    public void saveBasMasterdataclass(UiMapDto dto) throws Exception;

 
 }