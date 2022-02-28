package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM01500Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: PCM01500Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM01500Controller
* @Company: Built1
* @Create Date: 2021.3.12
* @Author: 김애리
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 12.    김애리     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm01500")
public class PCM01500Controller extends AbstractWebController {

    @Autowired
    private PCM01500Service service;

    /**
    * @fn :   
    * @brief : 입고검사 / 자주검사 리스트 
    * @remark
    * @Create Date: 2021. 3. 12
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 12.   김애리     최초  생성
     *
    */ 
    @RequestMapping(value = "SelectLotInspectionList.do")
    public View SelectLotInspectionList(UiMapDto dto, Model model) throws Exception {
        service.SelectLotInspectionList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn :   
    * @brief : NCR 리스트 
    * @remark
    * @Create Date: 2021. 3. 16
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 16.   김애리     최초  생성
     *
    */ 
    @RequestMapping(value = "SelectNcrStandardOfSelfInspection.do")
    public View SelectNcrStandardOfSelfInspection(UiMapDto dto, Model model) throws Exception {
        service.SelectNcrStandardOfSelfInspection(dto);
        return apply(dto, model);
    }
    
    /**
     * @fn :   
     * @brief : 불량 팝업 리스트 
     * @remark
     * @Create Date: 2021. 3. 18
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021. 3. 18.   김애리     최초  생성
      *
     */ 
     @RequestMapping(value = "SelectDefectCodeByProcess.do")
     public View SelectDefectCodeByProcess(UiMapDto dto, Model model) throws Exception {
         service.SelectDefectCodeByProcess(dto);
         return apply(dto, model);
     }
    
    
     /**
      * @fn :  saveLotIncommingInspection
      * @brief : 단가 테이블 저장
      * @remark
      * @Create Date: 2021. 3. 23
      * @Author: 김애리
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일      수정자   수정내용
       *   ------------  ------  ----------
       *   2021. 3. 23.   김애리     최초  생성
       *
      */ 
     @RequestMapping(value = "saveLotIncommingInspection.do")
     public View saveLotIncommingInspection(UiMapDto dto, Model model) throws Exception {
    	 System.out.println("lucky saveLotIncommingInspection ************* !!!");
         service.saveLotIncommingInspection(dto);
         return apply(dto, model);
     }  
     
}
