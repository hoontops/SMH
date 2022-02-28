package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
 * @file		: PCM09300Service.java
 * @Package		: smh.pcm.service
 * @Project name: IFC MES시스템 구축
 * @Type name	: PCM09300Service
 * @Company		: Built1
 * @Create Date	: 2021.3.18
 * @Author		: 김진현
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 3. 18.  김진현      최초  생성 
 */
public interface PCM09300Service {
	
	 /**
     * @fn : selectConsumableDefList
     * @brief : 자재품목ID선택 조회
     * @Method Name : selectConsumableDefList
     * @remark
     * @Create Date: 2021. 3. 18
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021. 3. 18.     긴진현        최초  생성
      *
     */
	public void selectConsumableDefList(UiMapDto dto) throws Exception;
	
	
	 /**
     * @fn : selectConsumableLotHistoryList
     * @brief : 자재 사용 이력 list 조회
     * @Method Name : selectConsumableLotHistoryList
     * @remark
     * @Create Date: 2021. 3. 18
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021. 3. 18.     긴진현        최초  생성
      *
     */
	public void selectConsumableLotHistoryList(UiMapDto dto) throws Exception;
	
	
 }