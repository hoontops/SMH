package smh.qam.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.qam.service.QAM01500Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: QAM01500Controller.java
* @Package: smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name: QAM01500Controller
* @Company: Built1
* @Create Date: 2021.4.14
* @Author: 권혜영
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 5.    권혜영     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/qam01500")
public class QAM01500Controller extends AbstractWebController {

    @Autowired
    private QAM01500Service service;

    /**
    * @fn : selectQamShipinspectiontarget
    * @brief : 월별 LRR 목표등록  정보 조회
    * @remark
    * @Create Date: 2021. 4. 5
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
    @RequestMapping(value = "selectQamShipinspectiontargetList.do")
    public View selectQamShipinspectiontargetList(UiMapDto dto, Model model) throws Exception {
        service.selectQamShipinspectiontargetList(dto);
        return apply(dto, model);
    }

    /**
    * @fn : saveQamShipinspectiontarget
    * @brief : 월별 LRR 목표등록  정보 저장
    * @remark
    * @Create Date: 2021. 4. 5
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
    @RequestMapping(value = "saveQamShipinspectiontarget.do")
    public View saveQamShipinspectiontarget(UiMapDto dto, Model model) throws Exception {
    	
        service.saveQamShipinspectiontarget(dto);
        return apply(dto, model);
    }

}
