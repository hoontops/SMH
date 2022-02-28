package smh.bas.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file			: BAS01900Service.java
* @Package		: smh.bas.service  
* @Project 	: 인터플렉스 MES 구축
* @Type name	: BAS01900Service    
* @Company		: Built1
* @Create Date	: 2021. 4. 06. 오전 11:22:35 
* @Author		: sungmin.choe
* @File Version	: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일      수정자        수정내용
 *   ------------  ------       ----------
 *   2021. 4. 06.       sungmin.choe      최초  생성
 *
*/
public interface BAS01900Service {

    /**
    * @fn 			: selectCamRequestList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectCamRequestList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 6.       sungmin.choe      최초  생성
     *
    */
    public void selectCamRequestList(UiMapDto dto) throws Exception;

    /**
    * @fn 			: saveCamRequest
    * @brief 		: 함수 간략한 설명 
    * @Method Name : saveCamRequest
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 6.       sungmin.choe      최초  생성
     *
    */
    public void saveCamRequest(UiMapDto dto) throws Exception;
    
    /**
    * @fn 			: selectCamRequestId
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectCamRequestId
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 7.       sungmin.choe      최초  생성
     *
    */
    public void selectCamRequestId(UiMapDto dto) throws Exception;
    
    /**
    * @fn 			: selectItemDetail
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectItemDetail
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 7.       sungmin.choe      최초  생성
     *
    */
    public void selectItemDetail(UiMapDto dto) throws Exception;
 }