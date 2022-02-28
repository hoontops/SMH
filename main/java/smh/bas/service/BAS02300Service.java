package smh.bas.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: BAS02300Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS02300Service
* @Company: Built1
* @Create Date: 2021. 3. 1. 오전 11:35:30
* @Author: 진성하
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 1.   진성하   최초  생성
 *
 *
*/
public interface BAS02300Service {

    /**
    * @fn : saveBasApproval
    * @brief : 승인 저장
    * @Method Name : saveBasApproval
    * @remark
    * @Create Date: 2021. 3. 6. 오후 3:33:03
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 6.     진성하     최초  생성
     *
    */
    public void saveBasApproval(UiMapDto dto) throws Exception;

    /**
    * @fn : selectBasApprovalList
    * @brief : 승인  조회
    * @Method Name : selectBasApprovalList
    * @remark
    * @Create Date: 2021. 3. 6. 오후 3:33:03
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 6.     진성하     최초  생성
     *
    */
    public void selectBasApprovalList(UiMapDto dto) throws Exception;

    /**
    * @fn : selectBasApprovaltransactionList
    * @brief : 승인 처리결과
    * @Method Name : selectBasApprovaltransactionList
    * @remark
    * @Create Date: 2021. 3. 6. 오후 3:33:03
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 6.     진성하     최초  생성
     *
    */
    public void selectBasApprovaltransactionList(UiMapDto dto) throws Exception;


    
 }