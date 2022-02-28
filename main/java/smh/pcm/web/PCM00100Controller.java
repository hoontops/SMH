package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM00100Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: PCM00100Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM00100Controller
* @Company: Built1
* @Create Date: 2021.2.15
* @Author: 방성혁
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 2. 15.    방성혁     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm00100")
public class PCM00100Controller extends AbstractWebController {

    @Autowired
    private PCM00100Service service;

    /**
    * @fn :  SelectSalesOrder List
    * @brief : S/O 조회
    * @remark
    * @Create Date: 2021. 2. 15
    * @Author: 방성혁
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 2. 15.   방성혁     최초  생성
     *
    */ 
    @RequestMapping(value = "selectSalesOrderList.do")
    public View selectSalesOrderList(UiMapDto dto, Model model) throws Exception {
        service.selectSalesOrderList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn :  selectSalesOrderDo
    * @brief : 수주배분리스트
    * @remark
    * @Create Date: 2021. 2. 16
    * @Author: 방성혁
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 2. 16.   방성혁     최초  생성
     *
    */ 
    @RequestMapping(value = "selectSalesOrderDo.do")
    public View selectSalesOrderDo(UiMapDto dto, Model model) throws Exception {
        service.selectSalesOrderDo(dto);
        return apply(dto, model);
    } 
    
    /**
     * @fn :  selectProductVersionList
     * @brief : 제품 버젼 리스트
     * @remark
     * @Create Date: 2021. 2. 16
     * @Author: 방성혁
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021. 2. 16.   방성혁     최초  생성
      *
     */ 
     @RequestMapping(value = "selectProductVersionList.do")
     public View selectProductVersionList(UiMapDto dto, Model model) throws Exception {
         service.selectProductVersionList(dto);
         return apply(dto, model);
     }     
     
     /**
      * @fn :  saveSalesOrderDo
      * @brief : 수주배분 저장
      * @remark
      * @Create Date: 2021. 2. 18
      * @Author: 방성혁
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일      수정자   수정내용
       *   ------------  ------  ----------
       *   2021. 2. 18.   방성혁     최초  생성
       *
      */ 
      @RequestMapping(value = "saveSalesOrderDo.do")
      public View saveSalesOrderDo(UiMapDto dto, Model model) throws Exception {
          service.saveSalesOrderDo(dto);
          return apply(dto, model);
      }  
      
      /**
       * @fn :  selectSalesOrderApproval
       * @brief : 수주배분리스트
       * @remark
       * @Create Date: 2021. 2. 16
       * @Author: 방성혁
       * @File Version: v1.0
        *
        * << 개정이력(Modification Information) >>
        *
        *     수정일      수정자   수정내용
        *   ------------  ------  ----------
        *   2021. 2. 16.   방성혁     최초  생성
        *
       */ 
       @RequestMapping(value = "selectSalesOrderApproval.do")
       public View selectSalesOrderApproval(UiMapDto dto, Model model) throws Exception {
           service.selectSalesOrderApproval(dto);
           return apply(dto, model);
       }       
}
