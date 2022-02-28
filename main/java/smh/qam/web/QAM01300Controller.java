package smh.qam.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.qam.service.QAM01300Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

/**
 * @file: QAM01300Controller.java
* @Package: smh.qam.service
 * @Project name: IFC MES시스템 구축
 * @Type name: QAM01300Controller
 * @Company: Built1
 * @Create Date: 2021.05.04
 * @Author: 권혜영
 * @File Version: v1.0
 *
 *       << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.05.04       권혜영     최초  생성
 *
 */
@Controller
@RequestMapping(value = "/qam01300")
public class QAM01300Controller extends AbstractWebController {

	@Autowired
	private QAM01300Service service;

	/**
	 * @fn : selectShipmentInspHistoryList
	 * @brief : 출하검사 이력 조회
	 * @remark
	 * @Create Date: 2021. 4. 16
	 * @Author: 권혜영
	 * @File Version: v1.0
	 *
	 * << 개정이력(Modification Information) >>
	  *
	  *     수정일      수정자   수정내용
	  *   ------------  ------  ----------
	  *   2021. 4. 5.       권혜영     최초  생성
	 *
	 */
	@RequestMapping(value = "selectShipmentInspHistoryList.do")
	public View selectShipmentInspHistoryList(UiMapDto dto, Model model) throws Exception {
		service.selectShipmentInspHistoryList(dto);
		return apply(dto, model);
	}
    
    /**
    * @fn : selectDefectToNCRShipmentList
    * @brief : NCR 최종 발행 조회
    * @remark
    * @Create Date: 2021.05.07
    * @Author: 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.05.07.       권혜영     최초  생성
    *
    */
    @RequestMapping(value = "selectDefectToNCRShipmentList.do")
    public View selectDefectToNCRShipmentList(UiMapDto dto, Model model) throws Exception {
        service.selectDefectToNCRShipmentList(dto);
        return apply(dto, model);
    }

    /**
    * @fn : saveShipmentInspNCRIssue
    * @brief : 출하 검사 NCR 저장
    * @remark
    * @Create Date: 2021.05.07
    * @Author: 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.05.07.       권혜영     최초  생성
    *
    */
    @RequestMapping(value = "saveShipmentInspNCRIssue.do")
    public View saveShipmentInspNCRIssue(UiMapDto dto, Model model) throws Exception {
        service.saveShipmentInspNCRIssue(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectLotInfoByProcessShipment
    * @brief : 출하검사 이력조회 > Lot 상세 정보를 조회
    * @remark
    * @Create Date: 2021.05.10
    * @Author: 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.05.10.       권혜영     최초  생성
    *
    */
    @RequestMapping(value = "selectLotInfoByProcessShipment.do")
    public View selectLotInfoByProcessShipment(UiMapDto dto, Model model) throws Exception {
        service.selectLotInfoByProcessShipment(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectShipmentInspHistoryDetailExterior
    * @brief : 출하검사 결과 이력 detail 그리드 조회
    * @remark
    * @Create Date: 2021.05.10
    * @Author: 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.05.10.       권혜영     최초  생성
    *
    */
    @RequestMapping(value = "selectShipmentInspHistoryDetailExterior.do")
    public View selectShipmentInspHistoryDetailExterior(UiMapDto dto, Model model) throws Exception {
        service.selectShipmentInspHistoryDetailExterior(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectLotMessageShipmentInsp
    * @brief : 출하검사 LotId 로 LotMessage 공정 조회
    * @remark
    * @Create Date: 2021.05.10
    * @Author: 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.05.10.       권혜영     최초  생성
    *
    */
    @RequestMapping(value = "selectLotMessageShipmentInsp.do")
    public View selectLotMessageShipmentInsp(UiMapDto dto, Model model) throws Exception {
        service.selectLotMessageShipmentInsp(dto);
        return apply(dto, model);
    }

}