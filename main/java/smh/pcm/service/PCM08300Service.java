package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
 * @file		: PCM08400Service.java
 * @Package		: smh.pcm.service
 * @Project name: IFC MES시스템 구축
 * @Type name	: PCM08400Service
 * @Company		: Built1
 * @Create Date	: 2021.04.15
 * @Author		: 김진현
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 04. 15.  김진현      최초  생성 
 */
public interface PCM08300Service {
	
	/**
     * @fn : selectRePackList
     * @brief : 재포장 등록 List 조회
     * @Method Name : selectRePackList
     * @remark
     * @Create Date: 2021.04.13
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.04.13.     김진현        최초  생성
      *
     */
	public void selectRePackList(UiMapDto dto) throws Exception;
	
	/**
     * @fn : saveRePackList
     * @brief : 재포장 등록 List 재포장완료
     * @Method Name : saveRePackList
     * @remark
     * @Create Date: 2021.04.13
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.04.13.     김진현        최초  생성
      *
     */
	public void saveRePackList(UiMapDto dto) throws Exception;
	
	
 }