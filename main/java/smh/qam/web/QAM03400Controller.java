package smh.qam.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.qam.service.QAM03400Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: QAM03400Controller.java
* @Package: smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name: QAM03400Controller
* @Company: Built1
* @Create Date: 2021.05.27
* @Author: 권혜영
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.05.27.    권혜영     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/qam03400")
public class QAM03400Controller extends AbstractWebController {

    @Autowired
    private QAM03400Service service;

	/**
	 * @fn : selectQamAffectLot
	 * @brief : AFFECT LOT산정 조회
	 * @remark
	 * @Create Date: 2021.05.27
	 * @Author: 권혜영
	 * @File Version: v1.0
	 *
	 * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.05.27.       권혜영     최초  생성
	 *
	 */
    @RequestMapping(value = "selectQamAffectLotList.do")
    public View selectQamAffectLotList(UiMapDto dto, Model model) throws Exception {
        service.selectQamAffectLotList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn : selectLotIdList
    * @brief : Lot  조회
    * @remark
    * @Create Date: 2021.06.01
    * @Author: 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.06.01.       권혜영     최초  생성
    *
    */
    @RequestMapping(value = "selectLotIdList.do")
    public View selectLotIdList(UiMapDto dto, Model model) throws Exception {
        service.selectLotIdList(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectProductListByCustomer
    * @brief : 품목 조회
    * @remark
    * @Create Date: 2021.06.01
    * @Author: 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.06.01.       권혜영     최초  생성
    *
    */
    @RequestMapping(value = "selectProductListByCustomer.do")
    public View selectProductListByCustomer(UiMapDto dto, Model model) throws Exception {
        service.selectProductListByCustomer(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectProductMKWeekByProductdefid
    * @brief : 주차 조회
    * @remark
    * @Create Date: 2021.06.01
    * @Author: 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.06.01.       권혜영     최초  생성
    *
    */
    @RequestMapping(value = "selectProductMKWeekByProductdefid.do")
    public View selectProductMKWeekByProductdefid(UiMapDto dto, Model model) throws Exception {
        service.selectProductMKWeekByProductdefid(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectProductBoxNoByProductdefid
    * @brief : Box No 조회
    * @remark
    * @Create Date: 2021.06.01
    * @Author: 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.06.01.       권혜영     최초  생성
    *
    */
    @RequestMapping(value = "selectProductBoxNoByProductdefid.do")
    public View selectProductBoxNoByProductdefid(UiMapDto dto, Model model) throws Exception {
        service.selectProductBoxNoByProductdefid(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn : selectTopProcessSegmentIdByProductdefid
    * @brief : 대공정 조회
    * @remark
    * @Create Date: 2021.06.01
    * @Author: 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.06.01.       권혜영     최초  생성
    *
    */
    @RequestMapping(value = "selectTopProcessSegmentIdByProductdefid.do")
    public View selectTopProcessSegmentIdByProductdefid(UiMapDto dto, Model model) throws Exception {
        service.selectTopProcessSegmentIdByProductdefid(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn : selectMiddleProcessSegmentIdByProductdefid
    * @brief : 중공정 조회
    * @remark
    * @Create Date: 2021.06.01
    * @Author: 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.06.01.       권혜영     최초  생성
    *
    */
    @RequestMapping(value = "selectMiddleProcessSegmentIdByProductdefid.do")
    public View selectMiddleProcessSegmentIdByProductdefid(UiMapDto dto, Model model) throws Exception {
        service.selectMiddleProcessSegmentIdByProductdefid(dto);
        return apply(dto, model);
    }    
    /**
    * @fn : selectProcessSegmentIdByProductdefid
    * @brief : 공정 조회
    * @remark
    * @Create Date: 2021.06.01
    * @Author: 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.06.01.       권혜영     최초  생성
    *
    */
    @RequestMapping(value = "selectProcessSegmentIdByProductdefid.do")
    public View selectProcessSegmentIdByProductdefid(UiMapDto dto, Model model) throws Exception {
        service.selectProcessSegmentIdByProductdefid(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectAreaIdByProcesssegmentId
    * @brief : 작업장 조회
    * @remark
    * @Create Date: 2021.06.01
    * @Author: 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.06.01.       권혜영     최초  생성
    *
    */
    @RequestMapping(value = "selectAreaIdByProcesssegmentId.do")
    public View selectAreaIdByProcesssegmentId(UiMapDto dto, Model model) throws Exception {
        service.selectAreaIdByProcesssegmentId(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectEquipmentClassIdByAreaId
    * @brief : 설비그룹 조회
    * @remark
    * @Create Date: 2021.06.01
    * @Author: 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.06.01.       권혜영     최초  생성
    *
    */
    @RequestMapping(value = "selectEquipmentClassIdByAreaId.do")
    public View selectEquipmentClassIdByAreaId(UiMapDto dto, Model model) throws Exception {
        service.selectEquipmentClassIdByAreaId(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectResourceIdByEquipmentClassId
    * @brief : 자원 조회
    * @remark
    * @Create Date: 2021.06.01
    * @Author: 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.06.01.       권혜영     최초  생성
    *
    */
    @RequestMapping(value = "selectResourceIdByEquipmentClassId.do")
    public View selectResourceIdByEquipmentClassId(UiMapDto dto, Model model) throws Exception {
        service.selectResourceIdByEquipmentClassId(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectEquipmentidByResourceId
    * @brief : 설비호기 조회
    * @remark
    * @Create Date: 2021.06.01
    * @Author: 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.06.01.       권혜영     최초  생성
    *
    */
    @RequestMapping(value = "selectEquipmentidByResourceId.do")
    public View selectEquipmentidByResourceId(UiMapDto dto, Model model) throws Exception {
        service.selectEquipmentidByResourceId(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectWorkstartUserByEquipmentid
    * @brief : 작업자 조회
    * @remark
    * @Create Date: 2021.06.01
    * @Author: 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.06.01.       권혜영     최초  생성
    *
    */
    @RequestMapping(value = "selectWorkstartUserByEquipmentid.do")
    public View selectWorkstartUserByEquipmentid(UiMapDto dto, Model model) throws Exception {
        service.selectWorkstartUserByEquipmentid(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectDurableDefIdByDurableClassId
    * @brief : 치공구 명 조회
    * @remark
    * @Create Date: 2021.06.01
    * @Author: 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.06.01.       권혜영     최초  생성
    *
    */
    @RequestMapping(value = "selectDurableDefIdByDurableClassId.do")
    public View selectDurableDefIdByDurableClassId(UiMapDto dto, Model model) throws Exception {
        service.selectDurableDefIdByDurableClassId(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectDurablelotidByDurableDefId
    * @brief : 치공구 NO 조회
    * @remark
    * @Create Date: 2021.06.01
    * @Author: 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.06.01.       권혜영     최초  생성
    *
    */
    @RequestMapping(value = "selectDurablelotidByDurableDefId.do")
    public View selectDurablelotidByDurableDefId(UiMapDto dto, Model model) throws Exception {
        service.selectDurablelotidByDurableDefId(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectMaterialDefId
    * @brief : 원자재 조회
    * @remark
    * @Create Date: 2021.06.01
    * @Author: 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.06.01.       권혜영     최초  생성
    *
    */
    @RequestMapping(value = "selectMaterialDefId.do")
    public View selectMaterialDefId(UiMapDto dto, Model model) throws Exception {
        service.selectMaterialDefId(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectMateriallotidByMaterialDefId
    * @brief : 원자재 LOT 조회
    * @remark
    * @Create Date: 2021.06.01
    * @Author: 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.06.01.       권혜영     최초  생성
    *
    */
    @RequestMapping(value = "selectMateriallotidByMaterialDefId.do")
    public View selectMateriallotidByMaterialDefId(UiMapDto dto, Model model) throws Exception {
        service.selectMateriallotidByMaterialDefId(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectProductMaterialLotId
    * @brief : 반제품명 조회
    * @remark
    * @Create Date: 2021.06.01
    * @Author: 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.06.01.       권혜영     최초  생성
    *
    */
    @RequestMapping(value = "selectProductMaterialLotId.do")
    public View selectProductMaterialLotId(UiMapDto dto, Model model) throws Exception {
        service.selectProductMaterialLotId(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectMaterialLotIdByProductMaterialLotId
    * @brief : 반제품 LOT 조회
    * @remark
    * @Create Date: 2021.06.01
    * @Author: 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.06.01.       권혜영     최초  생성
    *
    */
    @RequestMapping(value = "selectMaterialLotIdByProductMaterialLotId.do")
    public View selectMaterialLotIdByProductMaterialLotId(UiMapDto dto, Model model) throws Exception {
        service.selectMaterialLotIdByProductMaterialLotId(dto);
        return apply(dto, model);
    }

}