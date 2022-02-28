package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM03700Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
 * 
* @file: PCM03700Controller.java
* @Package: smh.pcm.web  
* @Project name: 대륜E&S 빌링시스템 재구축
* @Type name: PCM03700Controller    
* @Company: Built1
* @Create Date: 2021 2021. 4. 1. 오후 3:58:42 
* @Author: JinSungHa
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 1.        JinSungHa     최초  생성
 *
 */
@Controller
@RequestMapping(value = "/pcm03700")
public class PCM03700Controller extends AbstractWebController {

    @Autowired
    private PCM03700Service service;

    /**
     * 
    * @fn : selectWIPLockList
    * @brief : 함수 간략한 설명 
    * @Method Name : selectWIPLockList
    * @remark
    * @Create Date: 2021 2021. 4. 1. 오후 3:58:48 
    * @Author: JinSungHa
    * @File Version: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 4. 1.        JinSungHa     최초  생성
     *
     */
    @RequestMapping(value = "selectLockList.do")
    public View selectLockList(UiMapDto dto, Model model) throws Exception {
        service.selectLockList(dto);
        return apply(dto, model);
    }
   
    /**
     * 
    * @fn : selectLotLockingCount
    * @brief : 함수 간략한 설명 
    * @Method Name : selectLotLockingCount
    * @remark
    * @Create Date: 2021 2021. 4. 1. 오후 3:58:53 
    * @Author: JinSungHa
    * @File Version: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 4. 1.        JinSungHa     최초  생성
     *
     */
    @RequestMapping(value = "selectLotLocking.do")
    public View selectLotLocking(UiMapDto dto, Model model) throws Exception {
        service.selectLotLocking(dto);
        return apply(dto, model);
    }
    
    /**
     * 
    * @fn : insertLotLocking
    * @brief : 함수 간략한 설명 
    * @Method Name : insertLotLocking
    * @remark
    * @Create Date: 2021 2021. 4. 2. 오후 3:30:09 
    * @Author: JinSungHa
    * @File Version: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 4. 2.        JinSungHa     최초  생성
     *
     */
    @RequestMapping(value = "insertLotLocking.do")
    public View insertLotLocking(UiMapDto dto, Model model) throws Exception {
        service.insertLotLocking(dto);
        return apply(dto, model);
    }
    
}
