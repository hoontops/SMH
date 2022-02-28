package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM03400Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file			: PCM03400Controller.java
* @Package		: smh.pcm.web  
* @Project 	: 인터플렉스 MES 구축
* @Type name	: PCM03400Controller    
* @Company		: Built1
* @Create Date	: 2021. 4. 27. 오후 7:59:49 
* @Author		: sungmin.choe
* @File Version	: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일      수정자        수정내용
 *   ------------  ------       ----------
 *   2021. 4. 27.       sungmin.choe      최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm03400")
public class PCM03400Controller extends AbstractWebController {

    @Autowired
    private PCM03400Service service;

   
    /**
    * @fn 			: selectOtherInfo
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectOtherInfo
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 27.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectOtherInfo.do")
    public View selectOtherInfo(UiMapDto dto, Model model) throws Exception {
        service.selectOtherInfo(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: selectBatchTrackOut
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectBatchTrackOut
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 5. 25.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectBatchTrackOut.do")
    public View selectBatchTrackOut(UiMapDto dto, Model model) throws Exception {
        service.selectBatchTrackOut(dto);
        return apply(dto, model);
    }

    
    /**
    * @fn 			: saveLotBatchTrackOut
    * @brief 		: 함수 간략한 설명 
    * @Method Name : saveLotBatchTrackOut
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 5. 25.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "saveLotBatchTrackOut.do")
    public View saveLotBatchTrackOut(UiMapDto dto, Model model) throws Exception {
        service.saveLotBatchTrackOut(dto);
        return apply(dto, model);
    }    
 
    /**
    * @fn 			: selectLotEquipmentList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectLotEquipmentList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 5. 27.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectLotEquipmentList.do")
    public View selectLotEquipmentList(UiMapDto dto, Model model) throws Exception {
        service.selectLotEquipmentList(dto);
        return apply(dto, model);
    }
    
}