package smh.qam.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.qam.service.QAM02800Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


@Controller
@RequestMapping(value = "/qam02800")
public class QAM02800Controller extends AbstractWebController {

    @Autowired
    private QAM02800Service service;

    /**
    * @fn 			: selectChangePointList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectChangePointList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 27.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectChangePointList.do")
    public View selectChangePointList(UiMapDto dto, Model model) throws Exception {
        service.selectChangePointList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: selectRCKey
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectRCKey
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 27.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectRCKey.do")
    public View selectRCKey(UiMapDto dto, Model model) throws Exception {
        service.selectRCKey(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: selectSaveLotList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectSaveLotList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 27.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectSaveLotList.do")
    public View selectSaveLotList(UiMapDto dto, Model model) throws Exception {
        service.selectSaveLotList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: selectLotList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectLotList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 27.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectLotList.do")
    public View selectLotList(UiMapDto dto, Model model) throws Exception {
        service.selectLotList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn 			: selectDetailData
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectDetailData
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 27.       sungmin.choe      최초  생성
     *
    */
    @RequestMapping(value = "selectDetailData.do")
    public View selectDetailData(UiMapDto dto, Model model) throws Exception {
        service.selectDetailData(dto);
        return apply(dto, model);
    }
 
    /**
    * @fn : selectIsDraft
    * @brief : 결재번호의 요청에 대해서 결재상태가 회수인지 조사 조회
    * @remark
    * @Create Date: 2021.05.18
    * @Author: 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.05.18.       권혜영     최초  생성
    *
    */
    @RequestMapping(value = "selectIsDraft.do")
    public View selectIsDraft(UiMapDto dto, Model model) throws Exception {
        service.selectIsDraft(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectChangePointThisTimeApprovalUser
    * @brief : 변경점 등록 팝업을 호출할 때 이번 차례의 결재자가 누구인지 조사 조회
    * @remark
    * @Create Date: 2021.05.18
    * @Author: 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.05.18.       권혜영     최초  생성
    *
    */
    @RequestMapping(value = "selectChangePointThisTimeApprovalUser.do")
    public View selectChangePointThisTimeApprovalUser(UiMapDto dto, Model model) throws Exception {
        service.selectChangePointThisTimeApprovalUser(dto);
        return apply(dto, model);
    }

    /**
    * @fn : saveChangePoint
    * @brief : 변경점 신청서, 결재 저장 조회
    * @remark
    * @Create Date: 2021.05.20
    * @Author: 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.05.20.       권혜영     최초  생성
    *
    */
    @RequestMapping(value = "saveChangePoint.do")
    public View saveChangePoint(UiMapDto dto, Model model) throws Exception {
        service.saveChangePoint(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectApprovalAllStateByReliabilityVerificationRequest
    * @brief : 전체 기안자/승인자의 상태 조회
    * @remark
    * @Create Date: 2021.05.21
    * @Author: 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.05.21.       권혜영     최초  생성
    *
    */
    @RequestMapping(value = "selectApprovalType.do")
    public View selectApprovalType(UiMapDto dto, Model model) throws Exception {
        service.selectApprovalType(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectUserApproval
    * @brief : 신뢰성 검증 의뢰 > 결제자 조회  조회
    * @remark
    * @Create Date: 2021.05.23
    * @Author: 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.05.23.       권혜영     최초  생성
    *
    */
    @RequestMapping(value = "selectUserApproval.do")
    public View selectUserApproval(UiMapDto dto, Model model) throws Exception {
        service.selectUserApproval(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectProductCustomerInfo
    * @brief : 변경점 등록 > 품목선택 > 고객정보 조회
    * @remark
    * @Create Date: 2021.08.04
    * @Author: yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일             수정자      수정내용
    *   ------------  -----------  ----------
    *   2021.08.04.   yanghee.kim  최초  생성
    *
    */
    @RequestMapping(value = "selectProductCustomerInfo.do")
    public View selectProductCustomerInfo(UiMapDto dto, Model model) throws Exception {
        service.selectProductCustomerInfo(dto);
        return apply(dto, model);
    }
}