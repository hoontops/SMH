package smh.pda.service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: EDA00100Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: EDA00100Service
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
public interface EDA00200Service {

    /**
    * @fn : executeFifo12
    * @brief : 공급사 제조LOT 입력 저장
    * @Method Name : executeFifo12
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
    public void executeFifo12(UiMapDto dto) throws Exception;

    /**
    * @fn : selectFifo11
    * @brief : 복사후  조회
    * @Method Name : selectFifo11
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
    public void selectFifo11(UiMapDto dto) throws Exception;
    public void selectFifo13(UiMapDto dto) throws Exception;
    
    /**
    * @fn : selectLogin
    * @brief : selectLogin
    * @Method Name : selectFifo11
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
//    public void selectLogin(UiMapDto dto, HttpServletRequest request, HttpServletResponse response) throws Exception;
    
    
 }