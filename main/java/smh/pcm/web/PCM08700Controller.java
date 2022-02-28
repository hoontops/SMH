package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM08700Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
 * @file		: PCM08700Controller.java
 * @Package		: smh.pcm.web
 * @Project name: IFC MES시스템 구축
 * @Type name	: PCM08700Controller
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
@RequestMapping(value = "/pcm08700")
public class PCM08700Controller extends AbstractWebController {

    @Autowired
    private PCM08700Service service;

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
    @RequestMapping(value = "selectOutsourceDistributionList.do")
    public View selectPcmOutsourceDistributionList(UiMapDto dto, Model model) throws Exception {
    	service.selectOutsourceDistributionList(dto);
        return apply(dto, model);
    }
    
    
    //공정별 배분 현황
    @RequestMapping(value = "selectOutsourcedDistributionPopup.do")
    public View selectOutsourcedDistributionPopup(UiMapDto dto, Model model) throws Exception {
	  	service.selectOutsourcedDistributionPopup(dto);
	  	return apply(dto, model);
    }
    
    //Lot No별 공정 목록
    @RequestMapping(value = "selectOutsourcedDistributionLotSegmentid.do")
    public View selectOutsourcedDistributionLotSegmentid(UiMapDto dto, Model model) throws Exception {
	  	service.selectOutsourcedDistributionLotSegmentid(dto);
	  	return apply(dto, model);
    }
    
    //회사별 plant 정보 가져오기 
    @RequestMapping(value = "selectPlantidInformatByCsm.do")
    public View selectPlantidInformatByCsm(UiMapDto dto, Model model) throws Exception {
	  	service.selectPlantidInformatByCsm(dto);
	  	return apply(dto, model);
    }
    
    //===============
    //Lot No. 확인 저장
    //===============
    @RequestMapping(value = "updateOutsourcedDistributionCheckSave.do")
    public View updateOutsourcedDistributionCheckSave(UiMapDto dto, Model model) throws Exception {
    	log("////////////////////////////////////////////////////////////////[web]updateOutsourcedDistributionCheckSave");
	  	service.updateOutsourcedDistributionCheckSave(dto);
	  	return apply(dto, model);
    }
    
    //RESOURCE 정보 가져오기
    @RequestMapping(value = "selectResourceidListByOspList.do")
    public View selectResourceidListByOspList(UiMapDto dto, Model model) throws Exception {
	  	service.selectResourceidListByOspList(dto);
	  	return apply(dto, model);
    }
    
    //===============
    //RESOURCE 정보 저장
    //===============
    @RequestMapping(value = "saveResourceidListByOsp.do")
    public View saveResourceidListByOsp(UiMapDto dto, Model model) throws Exception {
	  	service.saveResourceidListByOsp(dto);
	  	return apply(dto, model);
    }
    
    private void log(String message){
    	System.out.println("////////////////////////////////////////////////////////////////"+message);
    }
}
