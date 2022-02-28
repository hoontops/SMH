package smh.pay.service;

import java.util.Map;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file        : PAY40110Service.java
* @Package     : smh.pay.service  
* @Project name: SM상선 myHR Application 고도화
* @Type name   : PAY40110Service    
* @Company     : Built1
* @Create Date : 2022. 1. 26. 오전 10:39:17 
* @Author      : yheekim
* @File Version: v1.0 
*
* << 개정이력(Modification Information) >>
*   
*     수정일         수정자       수정내용
*   ------------  ---------  ----------
*   2022. 1. 26.        yheekim    최초  생성
*
*/
public interface PAY40110Service {
    
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
    public void selectRequestAttendanceList(UiMapDto dto) throws Exception;
    
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
    public void selectRequestAttendanceInfo(UiMapDto dto) throws Exception;

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
    public void selectCheckCloseYn(UiMapDto dto) throws Exception;
    
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
    public void selectWorkDayCntWt(UiMapDto dto) throws Exception;
 
    
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
    public void selectWorkDayCnt(UiMapDto dto) throws Exception;
    	
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
	public void selectDiffDay(UiMapDto dto) throws Exception;
	
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
	public void saveAttendance(UiMapDto dto) throws Exception;
	
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
	public void saveStatus(UiMapDto dto) throws Exception;
	
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
	public void updateAttendanceStatus(UiMapDto dto) throws Exception;
}
