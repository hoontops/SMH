package smh.qam.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.qam.service.QAM01200Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

/**
 * @file: QAM01200Controller.java
* @Package: smh.qam.service
 * @Project name: IFC MES시스템 구축
 * @Type name: QAM01200Controller
 * @Company: Built1
 * @Create Date: 2021.4.5
 * @Author: 권혜영
 * @File Version: v1.0
 *
 *       << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.4.5.       권혜영     최초  생성
 *
 */
@Controller
@RequestMapping(value = "/qam01200")
public class QAM01200Controller extends AbstractWebController {

	@Autowired
	private QAM01200Service service;

	/**
	 * @fn : selectQualitySpecificationIssueList
	 * @brief : 품질규격 이상발생 정보 조회
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
	@RequestMapping(value = "selectQualitySpecificationIssueList.do")
	public View selectQualitySpecificationIssueList(UiMapDto dto, Model model) throws Exception {
		service.selectQualitySpecificationIssueList(dto);
		return apply(dto, model);
	}

	/**
	 * @fn : selectQualitySpecIssueAffectLot
	 * @brief : 품질규격 이상발생 affectLot 조회
	 * @remark
	 * @Create Date: 2021. 4. 19
	 * @Author: 권혜영
	 * @File Version: v1.0
	 *
	 * << 개정이력(Modification Information) >>
	 *
	 *     수정일      수정자   수정내용
	 *   ------------  ------  ----------
	 *   2021. 4. 19.       권혜영     최초  생성
	 *
	 */
	@RequestMapping(value = "selectQualitySpecIssueAffectLot.do")
	public View selectQualitySpecIssueAffectLot(UiMapDto dto, Model model) throws Exception {
		service.selectQualitySpecIssueAffectLot(dto);
		return apply(dto, model);
	}

	/**
	 * @fn : selectSequenceDegree
	 * @brief : CAR 접수 순번에 따른 마지막차수를 조회
	 * @remark
	 * @Create Date: 2021. 4. 19
	 * @Author: 권혜영
	 * @File Version: v1.0
	 *
	 * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 4. 21.       권혜영     최초  생성
	 *
	 */
	@RequestMapping(value = "selectSequenceDegree.do")
	public View selectSequenceDegree(UiMapDto dto, Model model) throws Exception {
		service.selectSequenceDegree(dto);
		return apply(dto, model);
	}

	/**
	 * @fn : selectSequenceState
	 * @brief : CAR 접수 순번에 따른 상태를 조회
	 * @remark
	 * @Create Date: 2021. 4. 21
	 * @Author: 권혜영
	 * @File Version: v1.0
	 *
	 * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 4. 21.       권혜영     최초  생성
	 *
	 */
	@RequestMapping(value = "selectSequenceState.do")
	public View selectSequenceState(UiMapDto dto, Model model) throws Exception {
		service.selectSequenceState(dto);
		return apply(dto, model);
	}

	/**
	 * @fn : selectCarRequest
	 * @brief : CAR 요청정보를 조회
	 * @remark
	 * @Create Date: 2021. 4. 21
	 * @Author: 권혜영
	 * @File Version: v1.0
	 *
	 * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 4. 21.       권혜영     최초  생성
	 *
	 */
	@RequestMapping(value = "selectCarRequest.do")
	public View selectCarRequest(UiMapDto dto, Model model) throws Exception {
		service.selectCarRequest(dto);
		return apply(dto, model);
	}

	/**
	 * @fn : selectCarReceipt
	 * @brief : CAR 접수정보를 조회
	 * @remark
	 * @Create Date: 2021. 4. 21
	 * @Author: 권혜영
	 * @File Version: v1.0
	 *
	 * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 4. 21.       권혜영     최초  생성
	 *
	 */
	@RequestMapping(value = "selectCarReceipt.do")
	public View selectCarReceipt(UiMapDto dto, Model model) throws Exception {
		service.selectCarReceipt(dto);
		return apply(dto, model);
	}

	/**
	 * @fn : selectCarApproval
	 * @brief : CAR 승인정보를 조회
	 * @remark
	 * @Create Date: 2021. 4. 21
	 * @Author: 권혜영
	 * @File Version: v1.0
	 *
	 * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 4. 21.       권혜영     최초  생성
	 *
	 */
	@RequestMapping(value = "selectCarApproval.do")
	public View selectCarApproval(UiMapDto dto, Model model) throws Exception {
		service.selectCarApproval(dto);
		return apply(dto, model);

	}

	/**
	 * @fn : selectCarValidation
	 * @brief : CAR 유효성평가정보를 조회
	 * @remark
	 * @Create Date: 2021. 4. 21
	 * @Author: 권혜영
	 * @File Version: v1.0
	 *
	 * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 4. 21.       권혜영     최초  생성
	 *
	 */
	@RequestMapping(value = "selectCarValidation.do")
	public View selectCarValidation(UiMapDto dto, Model model) throws Exception {
		service.selectCarValidation(dto);
		return apply(dto, model);
	}

	/**
	 * @fn : selectConcurrenceCount
	 * @brief : 해당 기간안에 스펙아웃이 발생한 Count 조회
	 * @remark
	 * @Create Date: 2021. 4. 21
	 * @Author: 권혜영
	 * @File Version: v1.0
	 *
	 * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 4. 21.       권혜영     최초  생성
	 *
	 */
	@RequestMapping(value = "selectConcurrenceCount.do")
	public View selectConcurrenceCount(UiMapDto dto, Model model) throws Exception {
		service.selectConcurrenceCount(dto);
		return apply(dto, model);
	}

	/**
	 * @fn : saveQamCarAllState
	 * @brief : 품질이상발생 CAR 저장
	 * @remark
	 * @Create Date: 2021.4.23
	 * @Author: 권혜영
	 * @File Version: v1.0
	 *
	 * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 4. 23.       권혜영     최초  생성
	 *
	 */
	@RequestMapping(value = "saveQamCarAllState.do")
	public View saveQamCarAllState(UiMapDto dto, Model model) throws Exception {

		service.saveQamCarAllState(dto);
		return apply(dto, model);
	}

	/**
	 * @fn : selectLotToAddAffectLot
	 * @brief : AffectLot을 수동추가하기위한 Lot조회
	 * @remark
	 * @Create Date: 2021.04.25
	 * @Author: 권혜영
	 * @File Version: v1.0
	 *
	 * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 4. 25.       권혜영     최초  생성
	 *
	 */
	@RequestMapping(value = "selectLotToAddAffectLot.do")
	public View selectLotToAddAffectLot(UiMapDto dto, Model model) throws Exception {
		service.selectLotToAddAffectLot(dto);
		return apply(dto, model);
	}

    /**
    * @fn : selectOperationInspMeasureImage
    * @brief : 품질규격 측정항목의 파일 리스트 조회
    * @remark
    * @Create Date: 2021.05.03
    * @Author: 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.05.03.       권혜영     최초  생성
    *
    */
    @RequestMapping(value = "selectOperationInspMeasureImage.do")
    public View selectOperationInspMeasureImage(UiMapDto dto, Model model) throws Exception {
        service.selectOperationInspMeasureImage(dto);
        return apply(dto, model);
    }
    
}