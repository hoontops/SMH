package smh.mfm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
 * @file		: MFM00300Service.java
 * @Package		: smh.pcm.service
 * @Project name: IFC MES시스템 구축
 * @Type name	: MFM00300Service
 * @Company		: Built1
 * @Create Date	: 2021.04.15
 * @Author		: 박현우
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 04. 15.  박현우      최초  생성 
 */
public interface MFM00300Service {	  
	  
/**
   * @fn : selectLoadSegmentListByTypeList
   * @brief : 공정 부하 예측
   * @Method Name : selectLoadSegmentListByTypeList
   * @remark
   * @Create Date: 2021.04.13
   * @Author: 박현우
   * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일                    수정자        수정내용
    *   ------------  ------  ----------
    *   2021.04.13.     박현우        최초  생성
    *
   */
	public void selectDaySegmentLoad(UiMapDto dto) throws Exception;
	
	/**
     * @fn : saveProcGrpList
     * @brief : 공정 부하 예측 :: 확정
     * @Method Name : saveDaySegmentLoad
     * @remark
     * @Create Date: 2021.04.18
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.04.18.     김진현        최초  생성
      *
     */
	public void saveDaySegmentLoadConfirm(UiMapDto dto) throws Exception;
	
	/**
     * @fn : saveProcGrpList
     * @brief : 공정 부하 예측 :: 저장
     * @Method Name : saveDaySegmentLoad
     * @remark
     * @Create Date: 2021.04.18
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.04.18.     김진현        최초  생성
      *
     */
	public void saveDaySegmentLoad(UiMapDto dto) throws Exception;
	
 }