package smh.bas.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file			: BAS01700Service.java
* @Package		: smh.bas.service  
* @Project 	: 인터플렉스 MES 구축
* @Type name	: BAS01700Service    
* @Company		: Built1
* @Create Date	: 2021. 2. 10. 오전 11:22:35 
* @Author		: sungmin.choe
* @File Version	: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일      수정자        수정내용
 *   ------------  ------       ----------
 *   2021. 2. 10.       sungmin.choe      최초  생성
 *
*/
public interface BAS01700Service {


    /**
    * @fn 			: selectBasGovernanceList
    * @brief 		: 모델등록 및 진행현황 조회 함수 
    * @Method Name : selectBasGovernanceList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 2. 10.       sungmin.choe      최초  생성
     *
    */
    public void selectBasGovernanceList(UiMapDto dto) throws Exception;


    /**
    * @fn 			: saveBasGovernance
    * @brief 		: 모델등록 및 진행현황 저장 함수
    * @Method Name : saveBasGovernance
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 2. 10.       sungmin.choe      최초  생성
     *
    */
    public void saveBasGovernance(UiMapDto dto) throws Exception;

    
    /**
    * @fn 			: selectGovernanceApprovalList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectGovernanceApprovalList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 19.       sungmin.choe      최초  생성
     *
    */
    public void selectGovernanceApprovalList(UiMapDto dto) throws Exception;
 
    
    /**
    * @fn 			: requestGovernance
    * @brief 		: 함수 간략한 설명 
    * @Method Name : requestGovernance
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 19.       sungmin.choe      최초  생성
     *
    */
    public void requestGovernance(UiMapDto dto) throws Exception;
 }