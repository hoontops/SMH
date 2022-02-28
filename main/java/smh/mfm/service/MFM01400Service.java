package smh.mfm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

	/**
	 * @file		: MFM01400Service.java
	 * @Package		: smh.mfm.service
	 * @Project name: IFC MES시스템 구축
	 * @Type name	: MFM01600Service
	 * @Company		: Built1
	 * @Create Date	: 2021.04.26
	 * @Author		: 김진현
	 * @File Version: v1.0
	 *
	 * << 개정이력(Modification Information) >>
	 *
	 *     수정일               수정자         수정내용
	 *   ------------  ------  ----------
	 *   2021. 04. 26.  김진현      최초  생성 
	 */
	public interface MFM01400Service {
	
	/**
     * @fn : SelectWorkDoneQtyMainList
     * @brief : 주요 공정 실적 현황판 - main(left, right) 조회
     * @Method Name : SelectWorkDoneQtyMainList
     * @remark
     * @Create Date: 2021.04.26
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.04.26.     김진현        최초  생성
      *
     */
	public void selectWorkDoneQtyMainList(UiMapDto dto) throws Exception;
	
	/**
     * @fn : selectWorkDoneQtyDetailList
     * @brief : 주요 공정 실적 현황판 - 상세 내용 조회 (그리드 + 헤더)
     * @Method Name : selectWorkDoneQtyDetailList
     * @remark
     * @Create Date: 2021.05.18
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.05.18.     김진현        최초  생성
      *
     */
    public void selectWorkDoneQtyDetailList(UiMapDto dto) throws Exception;
    
    /**
     * @fn : selectWorkDoneSummaryLeftList
     * @brief : 주요 공정 실적 현황판 - 상세 내용 조회 (그리드 + 헤더)
     * @Method Name : selectWorkDoneSummaryLeftList
     * @remark
     * @Create Date: 2021.05.18
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.05.18.     김진현        최초  생성
      *
     */
    public void selectWorkDoneSummaryLeftList(UiMapDto dto) throws Exception;
	
    
    /**
     * @fn : selectWorkDoneSummaryRightList
     * @brief : 주요 공정 실적 현황판 - 상세 내용 조회 (그리드 + 헤더) - 작업장 소계
     * @Method Name : selectWorkDoneSummaryRightList
     * @remark
     * @Create Date: 2021.05.21
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.05.21.     김진현        최초  생성
      *
     */
    public void selectWorkDoneSummaryRightList(UiMapDto dto) throws Exception;
    
    /**
     * @fn : selectWorkDoneINPUTSTATUSDetail
     * @brief : 주요 공정 실적 현황판 - 상세 내용 조회 (투입현황)
     * @Method Name : selectWorkDoneINPUTSTATUSDetail
     * @remark
     * @Create Date: 2021.05.21
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.05.21.     김진현        최초  생성
      *
     */
    public void selectWorkDoneINPUTSTATUSDetail(UiMapDto dto) throws Exception;
    
    /**
     * @fn : selectWorkDoneNOTINPUTSTATUSDetail
     * @brief : 주요 공정 실적 현황판 - 미투입현황 상세조회
     * @Method Name : selectWorkDoneNOTINPUTSTATUSDetail
     * @remark
     * @Create Date: 2021. 07. 14
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021. 07. 14.     김진현        최초  생성
      *
     */
    public void selectWorkDoneNOTINPUTSTATUSDetail(UiMapDto dto) throws Exception;
    
	
 }