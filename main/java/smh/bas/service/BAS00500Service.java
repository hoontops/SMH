package smh.bas.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: BAS00500Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS00500Service
* @Company: Built1
* @Create Date: 2021.2.26
* @Author: sungmin.choe
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 2. 26   sungmin.choe   최초  생성
 *
 *
*/
public interface BAS00500Service {


    /**
    * @fn : selectProcessSegmentExtlist
    * @brief : 공정현황 조회
    * @Method Name : selectProcessSegmentExtlist
    * @remark
    * @Create Date: 2021.2.26
    * @Author: sungmin.choe
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.2.26.       sungmin.choe     최초  생성
     *
    */
    public void selectProcessSegmentExtlist(UiMapDto dto) throws Exception;
  
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
     *   2021. 2. 26.       sungmin.choe      최초  생성
     *
    */
    public void selectTreeList(UiMapDto dto) throws Exception;
    
    /**
    * @fn 			: selectProcessAList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectProcessAList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 2. 26.       sungmin.choe      최초  생성
     *
    */
    public void selectProcessAList(UiMapDto dto) throws Exception;
    
    /**
    * @fn 			: selectProcessBList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectProcessBList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 2. 26.       sungmin.choe      최초  생성
     *
    */
    public void selectProcessBList(UiMapDto dto) throws Exception;
    
    /**
    * @fn 			: selectProcessCList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectProcessCList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 2. 26.       sungmin.choe      최초  생성
     *
    */
    public void selectProcessCList(UiMapDto dto) throws Exception;
    
    /**
    * @fn 			: selectProcessDList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectProcessDList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 2. 26.       sungmin.choe      최초  생성
     *
    */
    public void selectProcessDList(UiMapDto dto) throws Exception;
    
    /**
    * @fn 			: saveProcess
    * @brief 		: 함수 간략한 설명 
    * @Method Name : saveProcess
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 2.       sungmin.choe      최초  생성
     *
    */
    public void saveProcess(UiMapDto dto) throws Exception;
 }