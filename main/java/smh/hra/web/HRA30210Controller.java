package smh.hra.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;
import smh.hra.service.HRA30210Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

/**
* @file: HRA30210Controller.java
* @Package: smh.hra.web  
* @Project name: SM상선 myHR 시스템 구축
* @Type name: HRA30210Controller    
* @Company: Built1
* @Create Date: 2022. 1. 13. 오후 1:11:20 
* @Author: 유성연
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2022. 1. 13.        유성연     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/hra30210")
public class HRA30210Controller extends AbstractWebController {

	@Autowired
    private HRA30210Service service;

	/**
	 * @fn          : selectCounselingStatusList
	 * @brief       : 인사상담고충내역 조회
	 * @remark
	 * @Create Date : 2022.01.19. 오후 4:46:20 
	 * @Author      : 유성연
	 * @File Version: v1.0
	 *
	 * << 개정이력(Modification Information) >>
	 *
	 *     수정일         수정자        수정내용
	 *   ----------  ------------  ----------
	 *   2022.01.26.    유성연        최초  생성
	 *
	 */  
    
    @RequestMapping(value = "selectCounselingStatusList.do")
    public View selectCounselingStatusList(UiMapDto dto, Model model) throws Exception {
        service.selectCounselingStatusList(dto);
        return apply(dto, model);
    }
    
	/**
	 * @fn          : selectCounselingStatusDetail
	 * @brief       : 인사고충상담 상세내역 조회
	 * @remark
	 * @Create Date : 2022.01.26. 
	 * @Author      : 유성연
	 * @File Version: v1.0
	 *
	 * << 개정이력(Modification Information) >>
	 *
	 *     수정일         수정자        수정내용
	 *   ----------  ------------  ----------
	 *   2022.01.26.    유성연        최초  생성
	 *
	 */   
    
    @RequestMapping(value = "selectCounselingStatusDetail.do")
    public View selectCounselingStatusDetail(UiMapDto dto, Model model) throws Exception {
        service.selectCounselingStatusDetail(dto);
        return apply(dto, model);
    }
    
    /**
     * @fn          : saveCounselingStatus
     * @brief       : 인사고충상담 등록/수정/삭제
     * @remark
     * @Create Date : 2022.01.26. 
     * @Author      : 유성연
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일         수정자        수정내용
     *   ----------  ------------  ----------
     *   2022.01.26.    유성연        최초  생성
     *
     */    
    @RequestMapping(value = "saveCounselingStatus.do")
    public View saveCounselingStatus(UiMapDto dto, Model model) throws Exception {
    	service.saveCounselingStatus(dto);
    	return apply(dto, model);
    }
    
    /**
     * @fn          : saveChangeStatus
     * @brief       : 인사고충상담현황 상태 수정
     * @remark
     * @Create Date : 2022.01.26. 
     * @Author      : 유성연
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일         수정자        수정내용
     *   ----------  ------------  ----------
     *   2022.01.26.    유성연        최초  생성
     *
     */    
    @RequestMapping(value = "saveChangeStatus.do")
    public View saveChangeStatus(UiMapDto dto, Model model) throws Exception {
    	service.saveChangeStatus(dto);
    	return apply(dto, model);
    }
    
}
