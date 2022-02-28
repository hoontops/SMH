package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM03100Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: PCM03100Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM03100Controller
* @Company: Built1
* @Create Date: 2021.04.02
* @Author: 김애리
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.04.02.    김애리     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm03100")
public class PCM03100Controller extends AbstractWebController {

    @Autowired
    private PCM03100Service service;

    /**
    * @fn :   
    * @brief : 
    * @remark
    * @Create Date: 2021.04.02
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.04.02.   김애리     최초  생성
     *
    */ 
    @RequestMapping(value = "selectLotInfoByLotID.do")
    public View selectLotInfoByLotID(UiMapDto dto, Model model) throws Exception {
        service.selectLotInfoByLotID(dto);
        return apply(dto, model);
    }
    
    /**
     * @fn :   
     * @brief :
     * @remark
     * @Create Date: 2021.04.02
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.02.   김애리     최초  생성
      *
     */ 
     @RequestMapping(value = "selectLotGenealTreeList.do")
    public View selectLotGenealTreeList(UiMapDto dto, Model model) throws Exception {
         service.selectLotGenealTreeList(dto);
         return apply(dto, model);
     }
     
     /**
     * @fn :   
      * @brief :
      * @remark
      * @Create Date: 2021.04.02
      * @Author: 김애리
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일      수정자   수정내용
       *   ------------  ------  ----------
       *   2021.04.02.   김애리     최초  생성
       *
      */ 
    @RequestMapping(value = "selectLotWorkHistoryList.do")
    public View selectLotWorkHistoryList(UiMapDto dto, Model model) throws Exception {
      service.selectLotWorkHistoryList(dto);
      return apply(dto, model);
    }
    
    /**
    * @fn :   
     * @brief :
     * @remark
     * @Create Date: 2021.04.02
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.02.   김애리     최초  생성
      *
     */ 
   @RequestMapping(value = "selectLotSplitMergeHistory.do")
   public View selectLotSplitMergeHistory(UiMapDto dto, Model model) throws Exception {
     service.selectLotSplitMergeHistory(dto);
     return apply(dto, model);
   }
      
  /**
   * @fn :   
   * @brief : 
   * @remark
   * @Create Date: 2021.04.02
   * @Author: 김애리
   * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.04.02.   김애리     최초  생성
    *
   */ 
   @RequestMapping(value = "selectProductSpecInfo.do")
   public View selectProductSpecInfo(UiMapDto dto, Model model) throws Exception {
       service.selectProductSpecInfo(dto);
       return apply(dto, model);
   }
      
   /**
    * @fn :   
    * @brief : 
    * @remark
    * @Create Date: 2021.07.07
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.07.07.   김애리     최초  생성
     *
    */ 
    @RequestMapping(value = "selectLotHistoryDefectPop.do")
    public View selectLotHistoryDefectPop(UiMapDto dto, Model model) throws Exception {
        service.selectLotHistoryDefectPop(dto);
        return apply(dto, model);
    }
       
   
     

}
