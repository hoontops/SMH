package smh.qam.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.qam.service.QAM01100Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: QAM01100Controller.java
* @Package: smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name: QAM01100Controller
* @Company: Built1
* @Create Date: 2021.4.7
* @Author: 권혜영
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.4.7.       권혜영     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/qam01100")
public class QAM01100Controller extends AbstractWebController {

    @Autowired
    private QAM01100Service service;

    /**
    * @fn : selectQamMeasureValue
    * @brief : 품질규격 측정값 정보 조회 (리스트화면)
    * @remark
    * @Create Date: 2021.4.7
    * @Author: 권혜영
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.4.7.       권혜영     최초  생성
     *
    */
    @RequestMapping(value = "selectQamMeasureValueList.do")
    public View selectQamMeasureValueList(UiMapDto dto, Model model) throws Exception {
        service.selectQamMeasureValueList(dto);
        return apply(dto, model);
    }
    
    /**
     * @fn : selectQamMeasureValue
     * @brief : LOTId로 측정갑 등록화면의 모든 정보 조회 (등록화면)
     * @remark
     * @Create Date: 2021.4.7
     * @Author: 권혜영
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.4.7.       권혜영     최초  생성
      *
     */
     @RequestMapping(value = "selectQamMeasureValue.do")
     public View selectQamMeasureValue(UiMapDto dto, Model model) throws Exception {
         service.selectQamMeasureValue(dto);
         return apply(dto, model);
     }

    /**
     * @fn : selectQamLotByLotId
     * @brief : LOT 정보 조회
     * @remark
     * @Create Date: 2021.4.7
     * @Author: 권혜영
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.4.7.       권혜영     최초  생성
      *
     */
     @RequestMapping(value = "selectQamLotByLotId.do")
     public View selectQamLotByLotId(UiMapDto dto, Model model) throws Exception {
         service.selectQamLotByLotId(dto);
         return apply(dto, model);
     }
     
    /**
    * @fn : saveBasDaresult
    * @brief : 데이터 측정 이력 저장
    * @remark
    * @Create Date: 2021.4.7
    * @Author: 권혜영
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.4.7.       권혜영     최초  생성
     *
    */
    @RequestMapping(value = "saveQamMeasureValue.do")
    public View saveQamMeasureValue(UiMapDto dto, Model model) throws Exception {
    	
        service.saveQamMeasureValue(dto);
        return apply(dto, model);
    }
}