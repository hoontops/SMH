package smh.bas.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: BAS00300Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS00300Service
* @Company: Built1
* @Create Date: 2021.2.23
* @Author: sungmin.choe
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 2. 16   sungmin.choe   최초  생성
 *
 *
*/
public interface BAS00300Service {

    /**
    * @fn : selectUomClassList
    * @brief : Uom그룹 조회
    * @Method Name : selectUomClassList
    * @remark
    * @Create Date: 2021.2.23
    * @Author: sungmin.choe
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.2.23.       sungmin.choe     최초  생성
     *
    */
    public void selectUomClassList(UiMapDto dto) throws Exception;

    /**
    * @fn 			: selectUomList
    * @brief 		: Uom 조회
    * @Method Name : selectUomList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 2. 24.       sungmin.choe      최초  생성
     *
    */
    public void selectUomList(UiMapDto dto) throws Exception;
    
    /**
    * @fn 			: selectUomMapDataList
    * @brief 		: Uom MAP List 
    * @Method Name : selectUomMapDataList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 2. 24.       sungmin.choe      최초  생성
     *
    */
    public void selectUomMapDataList(UiMapDto dto) throws Exception;
    
    /**
    * @fn 			: selectUomMapList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectUomMapList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 2. 24.       sungmin.choe      최초  생성
     *
    */
    public void selectUomMapList(UiMapDto dto) throws Exception;
    
 
    /**
    * @fn 			: selectUomDetailList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectUomDetailList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 2. 24.       sungmin.choe      최초  생성
     *
    */
    public void selectUomDetailList(UiMapDto dto) throws Exception;
    
    /**
    * @fn 			: saveUomList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : saveUomList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 2. 24.       sungmin.choe      최초  생성
     *
    */
    public void saveUomList(UiMapDto dto) throws Exception;
 }