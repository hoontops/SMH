package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCMCommonService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: PCMCommonController.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCMCommonController
* @Company: Built1
* @Create Date: 2021.3.4
* @Author: 김애리
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 4.    김애리     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcmCommon")
public class PCMCommonController extends AbstractWebController {

    @Autowired
    private PCMCommonService service;

    /**
    * @fn : selectCustomQuery
    * @brief : 기준관리 공통SQL 조회용 메소드 
    * @Method Name : selectCustomQuery
    * @remark
    * @Create Date: 2021 2021. 2. 2. 오후 4:33:38 
    * @Author: sungmin.choe
    * @File Version: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 2. 2.        sungmin.choe     최초  생성
     *
    */
    @RequestMapping(value = "selectCustomQuery.do")
    public View selectCustomQuery(UiMapDto dto, Model model) throws Exception {
        service.selectCustomQuery(dto);
        return apply(dto, model);
    }
    
    /**
     * @fn : selectUserList
     * @brief : 사용자 정보 리스트
     * @Method Name : selectUserList
     * @remark
     * @Create Date: 2021 2021. 3.16
     * @Author: 
     * @File Version: v1.0 
      *
      * << 개정이력(Modification Information) >>
      *   
      *     수정일          수정자   수정내용
      *   ------------  ------  ----------
      *   2021. 3. 16.        eleventh     최초  생성
      *
     */
     @RequestMapping(value = "selectUserList.do")
     public View selectUserList(UiMapDto dto, Model model) throws Exception {
         service.selectUserList(dto);
         return apply(dto, model);
     }
     
     
     /**
      * @fn : selectTxnHistKey
      * @brief : 사용자 정보 리스트
      * @Method Name : selectUserList
      * @remark
      * @Create Date: 2021 2021. 3.18
      * @Author: 
      * @File Version: v1.0 
       *
       * << 개정이력(Modification Information) >>
       *   
       *     수정일          수정자   수정내용
       *   ------------  ------  ----------
       *   2021. 3. 18.        eleventh     최초  생성
       *
      */
      @RequestMapping(value = "selectTxnHistKey.do")
      public View selectTxnHistKey(UiMapDto dto, Model model) throws Exception {
          service.selectTxnHistKey(dto);
          return apply(dto, model);
      }
      
      /**
       * @fn :  getUserList
       * @brief : 유저 리스트를 조회한다.
       * @remark
       * @Create Date: 2021. 03. 08
       * @Author: 방성혁
       * @File Version: v1.0
        *
        * << 개정이력(Modification Information) >>
        *
        *     수정일      수정자   수정내용
        *   ------------  ------  ----------
        *   2021. 03. 08.   방성혁     최초  생성
        *
       */ 
       @RequestMapping(value = "getUserList.do")
       public View getUserList(UiMapDto dto, Model model) throws Exception {
           service.getUserList(dto);
           return apply(dto, model);
       }    
       
       /**
        * @fn :  getWorkerByProcess
        * @brief : Process 4-Step Info User Control에서 작업자 팝업 데이터를 조회 한다.
        * @remark
        * @Create Date: 2021. 03. 08
        * @Author: 방성혁
        * @File Version: v1.0
         *
         * << 개정이력(Modification Information) >>
         *
         *     수정일      수정자   수정내용
         *   ------------  ------  ----------
         *   2021. 03. 08.   방성혁     최초  생성
         *
        */ 
        @RequestMapping(value = "getWorkerByProcess.do")
        public View getWorkerByProcess(UiMapDto dto, Model model) throws Exception {
            service.getWorkerByProcess(dto);
            return apply(dto, model);
        }  
        
        /**
         * @fn :  getBasAreaPop
         * @brief : 작업장 팝업 쿼리
         * @remark
         * @Create Date: 2021. 05. 11
         * @Author: 방성혁
         * @File Version: v1.0
          *
          * << 개정이력(Modification Information) >>
          *
          *     수정일      수정자   수정내용
          *   ------------  ------  ----------
          *   2021. 05. 11.   방성혁     최초  생성
          *
         */ 
         @RequestMapping(value = "getBasAreaPop.do")
         public View getBasAreaPop(UiMapDto dto, Model model) throws Exception {
             service.getBasAreaPop(dto);
             return apply(dto, model);
         }     
     
}
