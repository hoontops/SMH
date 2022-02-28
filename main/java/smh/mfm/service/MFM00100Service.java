package smh.mfm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
 * @file		: MFM00200Service.java
 * @Package		: smh.pcm.service
 * @Project name: IFC MES시스템 구축
 * @Type name	: MFM00200Service
 * @Company		: Built1
 * @Create Date	: 2021.04.15
 * @Author		: 박현우
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 04. 15.  김진현      최초  생성 
 */
public interface MFM00100Service {
	
	  
	  
/**
   * @fn : selectWorkOrderPlanList
   * @brief : 수주계획 조회
   * @Method Name : selectWorkOrderPlanList
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
	public void selectProductPlanList(UiMapDto dto) throws Exception;
	
	/**
     * @fn : selectProductPlanForPivotList
     * @brief : 피벗 List
     * @Method Name : selectProductPlanForPivotList
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
	public void selectProductPlanForPivotList(UiMapDto dto) throws Exception;
	
	//엑셀 업로드
	public void saveProductPlanUpload(UiMapDto dto) throws Exception;
	
	//수주계획 확정
	public void saveProductPlanConfirm(UiMapDto dto) throws Exception;
 }