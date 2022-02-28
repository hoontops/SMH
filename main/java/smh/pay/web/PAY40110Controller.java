package smh.pay.web;

import smh.pay.service.PAY40110Service;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file        : PAY40110Controller.java
* @Package     : smh.pay.web  
* @Project name: SM상선 myHR Application 고도화
* @Type name   : PAY40110Controller    
* @Company     : Built1
* @Create Date : 2022. 1. 26. 오전 9:44:36 
* @Author      : yheekim
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일         수정자       수정내용
 *   ------------  ---------  ----------
 *   2022. 1. 26.    정우영     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pay40110/")
public class PAY40110Controller extends AbstractWebController {

    @Autowired
    private PAY40110Service service;

    /**
    * @fn          : selectRequestAttendanceList
    * @brief       : 연차정보 및 근태신청 현황 조회
    * @Method Name : selectRequestAttendanceList
    * @remark      :
    * @Create Date : 2022. 1. 26. 오전 9:46:40 
    * @Author      : 정우영
    * @File Version: v1.0 
    *
    * << 개정이력(Modification Information) >>
    *   
    *     수정일         수정자       수정내용
    *   ------------  ---------  ----------
    *   2022. 1. 26.    정우영     최초  생성
    *
    */
    @RequestMapping(value = "selectRequestAttendanceList.do")
    public View selectRequestAttendanceList(UiMapDto dto, Model model) throws Exception {
        service.selectRequestAttendanceList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn          : selectRequestAttendanceInfo
    * @brief       : 근태신청 현황 상세조회
    * @Method Name : selectRequestAttendanceInfo
    * @remark      :
    * @Create Date : 2022. 1. 26. 오전 9:48:05 
    * @Author      : 정우영
    * @File Version: v1.0 
    *
    * << 개정이력(Modification Information) >>
    *   
    *     수정일         수정자       수정내용
    *   ------------  ---------  ----------
    *   2022. 1. 26.    정우영     최초  생성
    *
    */
    @RequestMapping(value = "selectRequestAttendanceInfo.do")
    public View selectRequestAttendanceInfo(UiMapDto dto, Model model) throws Exception {
        service.selectRequestAttendanceInfo(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn          : selectCheckCloseYn
    * @brief       : 마감여부체크
    * @Method Name : selectCheckCloseYn
    * @remark      :
    * @Create Date : 2022. 1. 26. 오전 9:48:05 
    * @Author      : 정우영
    * @File Version: v1.0 
    *
    * << 개정이력(Modification Information) >>
    *   
    *     수정일         수정자       수정내용
    *   ------------  ---------  ----------
    *   2022. 1. 26.    정우영     최초  생성
    *
    */
    @RequestMapping(value = "selectCheckCloseYn.do")
    public View selectCheckCloseYn(UiMapDto dto, Model model) throws Exception {
        service.selectCheckCloseYn(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn          : selectWorkDayCntWt
    * @brief       : 날짜간의 일수계산WT
    * @Method Name : selectWorkDayCntWt
    * @remark      :
    * @Create Date : 2022. 1. 26. 오전 9:48:05 
    * @Author      : 정우영
    * @File Version: v1.0 
    *
    * << 개정이력(Modification Information) >>
    *   
    *     수정일         수정자       수정내용
    *   ------------  ---------  ----------
    *   2022. 1. 26.    정우영     최초  생성
    *
    */
    @RequestMapping(value = "selectWorkDayCntWt.do")
    public View selectWorkDayCntWt(UiMapDto dto, Model model) throws Exception {
        service.selectWorkDayCntWt(dto);
        return apply(dto, model);
    }    
    
    /**
    * @fn          : selectWorkDayCnt
    * @brief       : 날짜간의 일수계산
    * @Method Name : selectWorkDayCnt
    * @remark      :
    * @Create Date : 2022. 1. 26. 오전 9:48:05 
    * @Author      : 정우영
    * @File Version: v1.0 
    *
    * << 개정이력(Modification Information) >>
    *   
    *     수정일         수정자       수정내용
    *   ------------  ---------  ----------
    *   2022. 1. 26.    정우영     최초  생성
    *
    */
    @RequestMapping(value = "selectWorkDayCnt.do")
    public View selectWorkDayCnt(UiMapDto dto, Model model) throws Exception {
        service.selectWorkDayCnt(dto);
        return apply(dto, model);
    } 
    

    /**
    * @fn          : selectDiffDay
    * @brief       : 시작일자와 종료일자 차이 구하기
    * @Method Name : selectDiffDay
    * @remark      :
    * @Create Date : 2022. 1. 28. 오전 7:52:00 
    * @Author      : yheekim
    * @File Version: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일         수정자       수정내용
     *   ------------  ---------  ----------
     *   2022. 1. 28.    정우영     최초  생성
     *
    */
    @RequestMapping(value = "selectDiffDay.do")
    public View selectDiffDay(UiMapDto dto, Model model) throws Exception {
        service.selectDiffDay(dto);
        return apply(dto, model);
    } 
    
    /**
    * @fn          : saveAttendance
    * @brief       : 근태신청 등록/수정/삭제
    * @remark
    * @Create Date : 2022. 1. 26. 오전 9:48:05 
    * @Author      : 정우영
    * @File Version: v1.0 
    *
    * << 개정이력(Modification Information) >>
    *   
    *     수정일         수정자       수정내용
    *   ------------  ---------  ----------
    *   2022. 1. 26.    정우영     최초  생성
    *
    */    
    @RequestMapping(value = "saveAttendance.do")
    public View saveAttendance(UiMapDto dto, Model model) throws Exception {
    	service.saveAttendance(dto);
    	return apply(dto, model);
    }
    
    /**
    * @fn          : saveStatus
    * @brief       : 근태신청 행삭제 및 철회 대기 변경
    * @remark
    * @Create Date : 2022. 1. 26. 오전 9:48:05 
    * @Author      : 정우영
    * @File Version: v1.0 
    *
    * << 개정이력(Modification Information) >>
    *   
    *     수정일         수정자       수정내용
    *   ------------  ---------  ----------
    *   2022. 1. 26.    정우영     최초  생성
    *
    */    
    @RequestMapping(value = "saveStatus.do")
    public View saveStatus(UiMapDto dto, Model model) throws Exception {
    	service.saveStatus(dto);
    	return apply(dto, model);
    } 
    /**
    * @fn          : updateAttendanceStatus
    * @brief       : 근태신청 철회
    * @remark
    * @Create Date : 2022. 1. 26. 오전 9:48:05 
    * @Author      : 정우영
    * @File Version: v1.0 
    *
    * << 개정이력(Modification Information) >>
    *   
    *     수정일         수정자       수정내용
    *   ------------  ---------  ----------
    *   2022. 1. 26.    정우영     최초  생성
    *
    */    
    @RequestMapping(value = "updateAttendanceStatus.do")
    public View updateAttendanceStatus(UiMapDto dto, Model model) throws Exception {
    	service.updateAttendanceStatus(dto);
    	return apply(dto, model);
    }
    
}
