package smh.qam.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.qam.service.QAM03100Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: QAM03100Controller.java
* @Package: smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name: QAM03100Controller
* @Company: Built1
* @Create Date: 2021.06.02
* @Author: 권혜영
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.06.02.    권혜영     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/qam03100")
public class QAM03100Controller extends AbstractWebController {

    @Autowired
    private QAM03100Service service;

	/**
	 * @fn : selectQamShrinkproduct
	 * @brief : 수축율 측정기준 조회
	 * @remark
	 * @Create Date: 2021.06.02
	 * @Author: 권혜영
	 * @File Version: v1.0
	 *
	 * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.06.02.       권혜영     최초  생성
	 *
	 */
    @RequestMapping(value = "selectQamShrinkproductList.do")
    public View selectQamShrinkproductList(UiMapDto dto, Model model) throws Exception {
        service.selectQamShrinkproductList(dto);
        return apply(dto, model);
    }
    /**
    * @fn : selectQamProcesssegmentList
    * @brief : 공정선택 팝업 조회
    * @remark
    * @Create Date: 2021.06.03
    * @Author: 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.06.03.       권혜영     최초  생성
    *
    */
    @RequestMapping(value = "selectQamProcesssegmentList.do")
    public View selectQamProcesssegmentList(UiMapDto dto, Model model) throws Exception {
        service.selectQamProcesssegmentList(dto);
        return apply(dto, model);
    }

    /**
    * @fn : saveQamShrinkproduct
    * @brief : 수축율관리 조회
    * @remark
    * @Create Date: 2021.06.03
    * @Author: 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.06.03.       권혜영     최초  생성
    *
    */
    @RequestMapping(value = "saveQamShrinkproduct.do")
    public View saveQamShrinkproduct(UiMapDto dto, Model model) throws Exception {
        service.saveQamShrinkproduct(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectQamShrinkproductoperationList
    * @brief : 수축율관리품목 공정별기준값 조회
    * @remark
    * @Create Date: 2021.06.03
    * @Author: 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.06.03.       권혜영     최초  생성
    *
    */
    @RequestMapping(value = "selectQamShrinkproductoperationList.do")
    public View selectQamShrinkproductoperationList(UiMapDto dto, Model model) throws Exception {
        service.selectQamShrinkproductoperationList(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectMeasureMasterLotList
    * @brief : 수축율 측정기준등록 > 품목리스트 > 초도측정 측정LOT 팝업
    * @remark
    * @Create Date: 2021.07.20
    * @Author: yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
	*     수정일         수정자        수정내용
	*   ----------  ------------  ----------
	*   2021.07.20  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectMeasureMasterLotList.do")
    public View selectMeasureMasterLotList(UiMapDto dto, Model model) throws Exception {
        service.selectMeasureMasterLotList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn : saveQamShrinkFirstLot
    * @brief : 수축율 측정기준등록 > 품목리스트 > 초도측정 측정LOT 저장
    * @remark
    * @Create Date: 2021.07.20
    * @Author: yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
	*     수정일         수정자        수정내용
	*   ----------  ------------  ----------
	*   2021.07.20  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "saveQamShrinkFirstLot.do")
    public View saveQamShrinkFirstLot(UiMapDto dto, Model model) throws Exception {
        service.saveQamShrinkFirstLot(dto);
        return apply(dto, model);
    }
}