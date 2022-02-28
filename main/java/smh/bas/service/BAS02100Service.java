package smh.bas.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file: BAS02100Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS02100Service
* @Company: Built1
* @Create Date: 2021.2.26
* @Author: sungmin.choe
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 08   sungmin.choe   최초  생성
 *
 *
*/
public interface BAS02100Service {

    /**
    * @fn 			: selectTreeList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectTreeList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 08.       sungmin.choe      최초  생성
     *
    */
    public void selectTreeList(UiMapDto dto) throws Exception;
      
    /**
    * @fn 			: selectProductDEFInfo
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectProductDEFInfo
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 8.       sungmin.choe      최초  생성
     *
    */
    public void selectProductDEFInfo(UiMapDto dto) throws Exception;
    
    /**
    * @fn 			: selectProductDetail
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectProductDetail
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 8.       sungmin.choe      최초  생성
     *
    */
    public void selectProductDetail(UiMapDto dto) throws Exception;
    
    /**
    * @fn 			: selectDurablePopList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectDurablePopList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 9.       sungmin.choe      최초  생성
     *
    */
    public void selectDurablePopList(UiMapDto dto) throws Exception;
    
    /**
    * @fn 			: saveRouting
    * @brief 		: 함수 간략한 설명 
    * @Method Name : saveRouting
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 10.       sungmin.choe      최초  생성
     *
    */
    public void saveRouting(UiMapDto dto) throws Exception;
    
    /**
    * @fn 			: selectCheckRoutingList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectCheckRoutingList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 11.       sungmin.choe      최초  생성
     *
    */
    public void selectCheckRoutingList(UiMapDto dto) throws Exception;
    
    /**
    * @fn 			: saveItemWarehouse
    * @brief 		: 함수 간략한 설명 
    * @Method Name : saveItemWarehouse
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 11.       sungmin.choe      최초  생성
     *
    */
    public void saveItemWarehouse(UiMapDto dto) throws Exception;
    
    /**
    * @fn 			: copyRouting
    * @brief 		: 함수 간략한 설명 
    * @Method Name : copyRouting
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 11.       sungmin.choe      최초  생성
     *
    */
    public void copyRouting(UiMapDto dto) throws Exception;
    
    /**
    * @fn 			: uploadRoutingExcel
    * @brief 		: 함수 간략한 설명 
    * @Method Name : uploadRoutingExcel
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 18.       sungmin.choe      최초  생성
     *
    */
    public void uploadRoutingExcel(UiMapDto dto) throws Exception;
    
    /**
    * @fn 			: selectProcessSegmentExtPupop
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectProcessSegmentExtPupop
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 31.       sungmin.choe      최초  생성
     *
    */
    public void selectProcessSegmentExtPupop(UiMapDto dto) throws Exception;
    
    /**
    * @fn 			: selectDurableList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectDurableList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 13.       sungmin.choe      최초  생성
     *
    */
    public void selectDurableListPop(UiMapDto dto) throws Exception;
    
    /**
    * @fn 			: checkAOI
    * @brief 		: 함수 간략한 설명 
    * @Method Name : checkAOI
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 6. 15.       sungmin.choe      최초  생성
     *
    */
    public void checkAOI(UiMapDto dto) throws Exception;
    
    /**
    * @fn 			: selectCheckLot
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectCheckLot
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 7. 6.       sungmin.choe      최초  생성
     *
    */
    public void selectCheckLot(UiMapDto dto) throws Exception;
    
    /**
    * @fn 			: checkWeek
    * @brief 		: 함수 간략한 설명 
    * @Method Name : checkWeek
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 7. 13.       sungmin.choe      최초  생성
     *
    */
    public void checkWeek(UiMapDto dto) throws Exception;
 }