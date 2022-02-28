package smh.bas.service;

import org.springframework.ui.Model;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file			: BAS01800Service.java
* @Package		: smh.bas.service  
* @Project 	: 인터플렉스 MES 구축
* @Type name	: BAS01800Service    
* @Company		: Built1
* @Create Date	: 2021. 2. 17. 오전 11:22:35 
* @Author		: sungmin.choe
* @File Version	: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일      수정자        수정내용
 *   ------------  ------       ----------
 *   2021. 2. 17.       sungmin.choe      최초  생성
 *
*/
public interface BAS01800Service {


    /**
    * @fn 			: selectBasItemMasterList
    * @brief 		: 마스터품목(사양) 조회 함수 
    * @Method Name : selectBasItemMasterList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 2. 17.       sungmin.choe      최초  생성
     *
    */
    public void selectBasItemMasterList(UiMapDto dto) throws Exception;


    /**
    * @fn 			: saveBasItemMaster
    * @brief 		: 마스터품목(사양) 저장 함수
    * @Method Name : saveBasItemMaster
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 2. 17.       sungmin.choe      최초  생성
     *
    */
    public void saveBasItemMaster(UiMapDto dto) throws Exception;

    /**
    * @fn 			: copyValidationBasItemMaster
    * @brief 		: 마스터품목(사양) 복사검증 함수
    * @Method Name : saveBasItemMaster
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 2. 18.       sungmin.choe      최초  생성
     *
    */
    public void copyValidationBasItemMaster(UiMapDto dto) throws Exception;
    
    /**
    * @fn 			: copyBasItemMaster
    * @brief 		: 마스터품목(사양) 복사 함수
    * @Method Name : saveBasItemMaster
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 2. 18.       sungmin.choe      최초  생성
     *
    */
    public void copyBasItemMaster(UiMapDto dto) throws Exception;
    
    /**
    * @fn 			: selectCompareSemiProductByProduct
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectCompareSemiProductByProduct
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 2. 19.       sungmin.choe      최초  생성
     *
    */
    public void selectCompareSemiProductByProduct(UiMapDto dto) throws Exception;
 }