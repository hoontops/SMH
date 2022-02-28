package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM01900Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: PCM01900Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM01900Controller
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
@RequestMapping(value = "/pcm01900")
public class PCM01900Controller extends AbstractWebController {

    @Autowired
    private PCM01900Service service;

    /**
    * @fn :   
    * @brief : 작업종료 
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
    @RequestMapping(value = "selectDefectMapDataByWorkComplete.do")
    public View selectDefectMapDataByWorkComplete(UiMapDto dto, Model model) throws Exception {
        service.selectDefectMapDataByWorkComplete(dto);
        return apply(dto, model);
    }
   
    /**
    * @fn :   
    * @brief : 작업종료 
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
    @RequestMapping(value = "getLotWorkerByTrackOut.do")
    public View getLotWorkerByTrackOut(UiMapDto dto, Model model) throws Exception {
        service.getLotWorkerByTrackOut(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn :   
    * @brief : 작업종료 
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
    @RequestMapping(value = "getDurableDEFByBOR.do")
    public View getDurableDEFByBOR(UiMapDto dto, Model model) throws Exception {
        service.getDurableDEFByBOR(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn :   
    * @brief : 작업종료 
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
    @RequestMapping(value = "selectDurableListByProcessWorkComplete.do")
    public View selectDurableListByProcessWorkComplete(UiMapDto dto, Model model) throws Exception {
        service.selectDurableListByProcessWorkComplete(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn :   
    * @brief : 작업종료 
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
    @RequestMapping(value = "selectPostProcessEquipmentWipByArea.do")
    public View selectPostProcessEquipmentWipByArea(UiMapDto dto, Model model) throws Exception {
        service.selectPostProcessEquipmentWipByArea(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn :   
    * @brief : 작업종료 
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
    @RequestMapping(value = "getLotEquipmentByArea.do")
    public View getLotEquipmentByArea(UiMapDto dto, Model model) throws Exception {
        service.getLotEquipmentByArea(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn :   
    * @brief : 작업종료 
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
    @RequestMapping(value = "selectDefectDataByEquipment.do")
    public View selectDefectDataByEquipment(UiMapDto dto, Model model) throws Exception {
        service.selectDefectDataByEquipment(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn :   
    * @brief : 작업종료 
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
    @RequestMapping(value = "selectDefectMapDataForSend.do")
    public View selectDefectMapDataForSend(UiMapDto dto, Model model) throws Exception {
        service.selectDefectMapDataForSend(dto);
        return apply(dto, model);
    }
   
    /**
    * @fn :   
    * @brief : 작업종료 
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
    @RequestMapping(value = "getLayerListForAoiBbtDefect.do")
    public View getLayerListForAoiBbtDefect(UiMapDto dto, Model model) throws Exception {
        service.getLayerListForAoiBbtDefect(dto);
        return apply(dto, model);
    }
 
    /**
    * @fn :   
    * @brief : 작업종료 
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
    @RequestMapping(value = "getAoiDefectCodeByDefectCodeGroup.do")
    public View getAoiDefectCodeByDefectCodeGroup(UiMapDto dto, Model model) throws Exception {
        service.getAoiDefectCodeByDefectCodeGroup(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn :   
    * @brief : 작업종료 
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
    @RequestMapping(value = "getBBTDefectList.do")
    public View getBBTDefectList(UiMapDto dto, Model model) throws Exception {
        service.getBBTDefectList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn :   
    * @brief : 작업종료 
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
    @RequestMapping(value = "getProcessSegmentClassBySegmentID.do")
    public View getProcessSegmentClassBySegmentID(UiMapDto dto, Model model) throws Exception {
        service.getProcessSegmentClassBySegmentID(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn :   
    * @brief : 작업종료 
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
    @RequestMapping(value = "selectReworkRouting.do")
    public View selectReworkRouting(UiMapDto dto, Model model) throws Exception {
        service.selectReworkRouting(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn :   
    * @brief : 작업종료 
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
    @RequestMapping(value = "getTransitResourceForAoiRepair.do")
    public View getTransitResourceForAoiRepair(UiMapDto dto, Model model) throws Exception {
        service.getTransitResourceForAoiRepair(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn :   
    * @brief : 작업종료 
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
    @RequestMapping(value = "getProcessPathList.do")
    public View getProcessPathList(UiMapDto dto, Model model) throws Exception {
        service.getProcessPathList(dto);
        return apply(dto, model);
    }

    @RequestMapping(value = "selectConsumableListByProcessWorkCompleteAndByProcess.do")
    public View selectConsumableListByProcessWorkCompleteAndByProcess(UiMapDto dto, Model model) throws Exception {
        service.selectConsumableListByProcessWorkCompleteAndByProcess(dto);
        return apply(dto, model);
    }

}
