package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM01800Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: PCM01800Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM01800Controller
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
@RequestMapping(value = "/pcm01800")
public class PCM01800Controller extends AbstractWebController {

    @Autowired
    private PCM01800Service service;

    
    @RequestMapping(value = "selectLotInfoByProcess.do")
    public View selectLotInfoByProcess(UiMapDto dto, Model model) throws Exception {
        service.selectLotInfoByProcess(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn :   
    * @brief : 작업시작 
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
    @RequestMapping(value = "getEquipmentByArea.do")
    public View getEquipmentByArea(UiMapDto dto, Model model) throws Exception {
        service.getEquipmentByArea(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn :   
    * @brief : 작업시작 
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
    @RequestMapping(value = "getEquipmentRecipeList.do")
    public View getEquipmentRecipeList(UiMapDto dto, Model model) throws Exception {
        service.getEquipmentRecipeList(dto);
        return apply(dto, model);
    }
    
    
    /**
    * @fn :   
    * @brief : 작업시작 
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
    @RequestMapping(value = "getConsumableLotByProcess.do")
    public View getConsumableLotByProcess(UiMapDto dto, Model model) throws Exception {
        service.getConsumableLotByProcess(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn :   
    * @brief : 작업시작 
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
    @RequestMapping(value = "selectDurableListByProcessWorkStartAndBOR.do")
    public View selectDurableListByProcessWorkStartAndBOR(UiMapDto dto, Model model) throws Exception {
        service.selectDurableListByProcessWorkStartAndBOR(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn :   
    * @brief : 작업시작 
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
    @RequestMapping(value = "selectConsumableListByProcessWorkCompleteAndByProcess.do")
    public View selectConsumableListByProcessWorkCompleteAndByProcess(UiMapDto dto, Model model) throws Exception {
        service.selectConsumableListByProcessWorkCompleteAndByProcess(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn :   
    * @brief : 작업시작 
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
    @RequestMapping(value = "getPriorityConsumableLotByProcess.do")
    public View getPriorityConsumableLotByProcess(UiMapDto dto, Model model) throws Exception {
        service.getPriorityConsumableLotByProcess(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn :   
    * @brief : 작업시작 
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
    @RequestMapping(value = "getConsumableAlternativeLotByProcess.do")
    public View getConsumableAlternativeLotByProcess(UiMapDto dto, Model model) throws Exception {
        service.getConsumableAlternativeLotByProcess(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn :   
    * @brief : 작업시작 
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
    @RequestMapping(value = "selectEquipmentRecipe.do")
    public View selectEquipmentRecipe(UiMapDto dto, Model model) throws Exception {
        service.selectEquipmentRecipe(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn :   
    * @brief : 작업시작 
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
    @RequestMapping(value = "getWorkerByProcess.do")
    public View getWorkerByProcess(UiMapDto dto, Model model) throws Exception {
        service.getWorkerByProcess(dto);
        return apply(dto, model);
    }
    
    
}
