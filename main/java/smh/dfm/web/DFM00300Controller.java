package smh.dfm.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.dfm.service.DFM00300Service;


/**
* @file: DFM00300Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: DFM00300Controller
* @Company: Built1
* @Create Date: 2021.4.19
* @Author: 김성현
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 30.    김성현     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/dfm00300")
public class DFM00300Controller extends AbstractWebController {

    @Autowired
    private DFM00300Service service;

    /**
    * @fn :   
    * @brief :  
    * @remark
    * @Create Date: 2021. 3. 30
    * @Author: 김성현
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 30.   김성현     최초  생성
     *
    */ 
    @RequestMapping(value = "getDefectRateByEquipmentTypeNullList.do")
    public View getDefectRateByEquipmentTypeNullList(UiMapDto dto, Model model) throws Exception {
        service.getDefectRateByEquipmentTypeNullList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn :   
    * @brief :  
    * @remark
    * @Create Date: 2021. 3. 30
    * @Author: 김성현
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 30.   김성현     최초  생성
     *
    */ 
    @RequestMapping(value = "getDefectRateByEquipmentTypeList.do")
    public View getDefectRateByEquipmentTypeList(UiMapDto dto, Model model) throws Exception {
        service.getDefectRateByEquipmentTypeList(dto);
        return apply(dto, model);
    }
   
    /**
     * @fn :   
     * @brief :  
     * @remark
     * @Create Date: 2021. 3. 30
     * @Author: 김성현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021. 3. 30.   김성현     최초  생성
      *
     */ 
     @RequestMapping(value = "getDefectRateByEquipmentTypeNullDetailList.do")
     public View getDefectRateByEquipmentTypeNullDetailList(UiMapDto dto, Model model) throws Exception {
         service.getDefectRateByEquipmentTypeNullDetailList(dto);
         return apply(dto, model);
     }
     
     /**
      * @fn :   
      * @brief :  
      * @remark
      * @Create Date: 2021. 3. 30
      * @Author: 김성현
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일      수정자   수정내용
       *   ------------  ------  ----------
       *   2021. 3. 30.   김성현     최초  생성
       *
      */ 
      @RequestMapping(value = "getDefectRateByEquipmentTypeDetailList.do")
      public View getDefectRateByEquipmentTypeDetailList(UiMapDto dto, Model model) throws Exception {
          service.getDefectRateByEquipmentTypeDetailList(dto);
          return apply(dto, model);
      }
      
      
    /**
     * @fn :   
     * @brief :  
     * @remark
     * @Create Date: 2021. 3. 30
     * @Author: 김성현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021. 3. 30.   김성현     최초  생성
      *
     */ 
     @RequestMapping(value = "getAOIDefectCodeList.do")
     public View getAOIDefectCodeList(UiMapDto dto, Model model) throws Exception {
         service.getAOIDefectCodeList(dto);
         return apply(dto, model);
     }
     
     
     
     /**
      * @fn :   
      * @brief :  
      * @remark
      * @Create Date: 2021. 3. 30
      * @Author: 김성현
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일      수정자   수정내용
       *   ------------  ------  ----------
       *   2021. 3. 30.   김성현     최초  생성
       *
      */ 
      @RequestMapping(value = "getProcessByProductdef.do")
      public View getProcessByProductdef(UiMapDto dto, Model model) throws Exception {
          service.getProcessByProductdef(dto);
          return apply(dto, model);
      }
      
      /**
       * @fn :   
       * @brief :  
       * @remark
       * @Create Date: 2021. 3. 30
       * @Author: 김성현
       * @File Version: v1.0
        *
        * << 개정이력(Modification Information) >>
        *
        *     수정일      수정자   수정내용
        *   ------------  ------  ----------
        *   2021. 3. 30.   김성현     최초  생성
        *
       */ 
       @RequestMapping(value = "getJoinLotList.do")
       public View getJoinLotList(UiMapDto dto, Model model) throws Exception {
           service.getJoinLotList(dto);
           return apply(dto, model);
       }
       
         
         
}
