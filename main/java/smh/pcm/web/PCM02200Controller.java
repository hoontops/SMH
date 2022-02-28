package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM02200Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: PCM02200Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM02200Controller
* @Company: Built1
* @Create Date: 2021.4.16
* @Author: 김애리
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4.16.    김애리     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm02200")
public class PCM02200Controller extends AbstractWebController {

    @Autowired
    private PCM02200Service service;

    /**
    * @fn :   
    * @brief : 상단 LOT INFO
    * @remark
    * @Create Date: 2021. 4. 16
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 4. 16.   김애리     최초  생성
     *
    */ 
    @RequestMapping(value = "selectLotInfoBylotIDbyAreaAuthority.do")
    public View selectLotInfoBylotIDbyAreaAuthority(UiMapDto dto, Model model) throws Exception {
        service.selectLotInfoBylotIDbyAreaAuthority(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn :   
    * @brief : 설비 가동 현황 탭 조회
    * @remark
    * @Create Date: 2021. 4. 16
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 4. 16.   김애리     최초  생성
     *
    */ 
    @RequestMapping(value = "selectEquipmentTab.do")
    public View selectEquipmentTab(UiMapDto dto, Model model) throws Exception {
        service.selectEquipmentInfoByLotID4Run(dto);
        service.selectEquipmentInfoByLotID4Change(dto);
        service.selectDurableInfoByLotID4Run(dto);
        service.selectDurableInfoByLotID4Change(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn :   
    * @brief : 치공구 현황 탭 작업 설비 조회
    * @remark
    * @Create Date: 2021. 4. 16
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 4. 16.   김애리     최초  생성
     *
    */ 
    @RequestMapping(value = "selectDurableTabEquipment.do")
    public View selectDurableTabEquipment(UiMapDto dto, Model model) throws Exception {
    	service.selectEquipmentInfoByLotID4Run(dto);
        return apply(dto, model);
    }
    
    
    /**
     * @fn :   
     * @brief : 치공구 현황 탭 작업 치공구들 조회
     * @remark
     * @Create Date: 2021. 4. 16
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021. 4. 16.   김애리     최초  생성
      *
     */ 
     @RequestMapping(value = "selectDurableTabDurable.do")
     public View selectDurableTabDurable(UiMapDto dto, Model model) throws Exception {
         service.selectDurableInfoByLotID4Run(dto);
         service.selectDurableInfoByLotID4Change(dto);
         return apply(dto, model);
     }
     
     
    
    
    
    /**
     * @fn :   
     * @brief : 설비가동현황 탭 저장
     * @remark
     * @Create Date: 2021. 4. 16
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021. 4. 16.   김애리     최초  생성
      *
     */ 
    @RequestMapping(value = "saveChangeEquipment.do")
    public View saveChangeEquipment(UiMapDto dto, Model model) throws Exception {
   	 System.out.println("lucky saveChangeEquipment ************* !!!");
        service.saveChangeEquipment(dto);
        return apply(dto, model);
    }  
    
    /**
     * @fn :   
     * @brief : 치공구현황 탭 저장
     * @remark
     * @Create Date: 2021. 4. 16
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021. 4. 16.   김애리     최초  생성
      *
     */ 
    @RequestMapping(value = "saveChangeDurable.do")
    public View saveChangeDurable(UiMapDto dto, Model model) throws Exception {
   	 System.out.println("lucky saveChangeDurable ************* !!!");
        service.saveChangeDurable(dto);
        return apply(dto, model);
    }  
    
    
   
}
