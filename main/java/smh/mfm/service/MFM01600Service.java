package smh.mfm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
 * @file		: MFM01600Service.java
 * @Package		: smh.pcm.service
 * @Project name: IFC MES시스템 구축
 * @Type name	: MFM01600Service
 * @Company		: Built1
 * @Create Date	: 2021.04.24
 * @Author		: 김진현
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 04. 21.  김진현      최초  생성 
 */
public interface MFM01600Service {
	
	
	/**
     * @fn : SelectWorkDoneProductRelList
     * @brief : 주요 품목 재공 실적_기준정보화면 - [메인조회]
     * @Method Name : SelectWorkDoneProductRelList
     * @remark
     * @Create Date: 2021.04.24
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.04.24.     김진현        최초  생성
      *
     */
	public void selectProductKind(UiMapDto dto) throws Exception;
	
	/**
     * @fn : SelectWorkDoneProductRelList
     * @brief : 주요 품목 재공 실적_기준정보화면 - [메인조회]
     * @Method Name : SelectWorkDoneProductRelList
     * @remark
     * @Create Date: 2021.04.24
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.04.24.     김진현        최초  생성
      *
     */
	public void selectWorkDoneProductRelList(UiMapDto dto) throws Exception;
	
	/**
     * @fn : SaveWorkDoneProductRel
     * @brief : 주요 품목 재공 실적_기준정보화면 - [메인저장]
     * @Method Name : SaveWorkDoneProductRel
     * @remark
     * @Create Date: 2021.04.24
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.04.24.     김진현        최초  생성
      *
     */
	public void saveWorkDoneProductRel(UiMapDto dto) throws Exception;
	
	
 }