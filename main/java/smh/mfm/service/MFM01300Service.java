package smh.mfm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
 * @file		: MFM01300Service.java
 * @Package		: smh.pcm.service
 * @Project name: IFC MES시스템 구축
 * @Type name	: MFM01300Service
 * @Company		: Built1
 * @Create Date	: 2021.04.21
 * @Author		: 김진현
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 04. 21.  김진현      최초  생성 
 */
public interface MFM01300Service {
	
	/**
     * @fn : selectWorkDoneSegmentListByTypeList
     * @brief : 주요공정 실적 현황판  - [대/중공정그룹 필터] - 대/중/ 주요공정그룹조회
     * @Method Name : selectWorkDoneSegmentListByTypeList
     * @remark
     * @Create Date: 2021.04.21
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.04.21.     김진현        최초  생성
      *
     */
	public void selectWorkDoneSegmentListByTypeList(UiMapDto dto) throws Exception;
	
	/**
     * @fn : SelectWorkDoneSegmentList
     * @brief : 주요공정 실적 현황판  - 대/중 주요공정그룹조회 List
     * @Method Name : SelectWorkDoneSegmentList
     * @remark
     * @Create Date: 2021.04.21
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.04.21.     김진현        최초  생성
      *
     */
	public void selectWorkDoneSegmentList(UiMapDto dto) throws Exception;
	
	/**
     * @fn : saveProcGrpList
     * @brief : 대/중 저장(등록,수정,삭제)
     * @Method Name : saveProcGrpList
     * @remark
     * @Create Date: 2021.04.21
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.04.21.     김진현        최초  생성
      *
     */
	public void saveProcGrpList(UiMapDto dto) throws Exception;
	
	/**
     * @fn : selectWorkDoneSegmentRelList
     * @brief : 주요 공정 실적 현황판 - [표준공정 맵핑] - 표준공정List 조회
     * @Method Name : selectWorkDoneSegmentRelList
     * @remark
     * @Create Date: 2021.04.21
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.04.21.     김진현        최초  생성
      *
     */
	public void selectWorkDoneSegmentRelList(UiMapDto dto) throws Exception;
	
	
	/**
     * @fn : saveWorkDoneSegmentRel
     * @brief : 주요 공정 실적 현황판 - [표준공정 맵핑] - 표준공정List 저장
     * @Method Name : saveWorkDoneSegmentRel
     * @remark
     * @Create Date: 2021.04.21
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.04.21.     김진현        최초  생성
      *
     */
	public void saveWorkDoneSegmentRel(UiMapDto dto) throws Exception;
	
	

	
	
	
	
 }