package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM08500Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
 * @file		: PCM08500Controller.java
 * @Package		: smh.pcm.web
 * @Project name: IFC MES시스템 구축
 * @Type name	: PCM08500Controller
 * @Company		: Built1
 * @Create Date	: 2021.2.1
 * @Author		: 박현우
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 2. 10.  박현우      최초  생성 
 */
@Controller
@RequestMapping(value = "/pcm08500")
public class PCM08500Controller extends AbstractWebController {

    @Autowired
    private PCM08500Service service;

    /**
     * @fn : selectPcmOutSourceWarehouseWare
     * @brief : 공정관리물류창고 입고 조회
     * @remark
     * @Create Date: 2021. 2. 10
     * @Author: 박현우
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 2. 10.  박현우      최초  생성
     *
     */
    @RequestMapping(value = "selectOutSourceWarehouseWare.do")
    public View selectPcmOutSourceWarehouseWare(UiMapDto dto, Model model) throws Exception {
    	service.selectOutSourceWarehouseWare(dto);
        return apply(dto, model);
    }
    
    /**
     * @fn : savePcmOutSourceWarehouseWare
     * @brief : 공정관리물류창고 입고 저장
     * @remark
     * @Create Date: 2021. 2. 10
     * @Author: 박현우
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 2. 10.  박현우      최초  생성
     *
     */
    @RequestMapping(value = "saveOutSourceWarehouseWare.do")
    public View savePcmOutSourceWarehouseWare(UiMapDto dto, Model model) throws Exception {
	  	service.saveOutSourceWarehouseWare(dto);
	  	return apply(dto, model);
    }
}
