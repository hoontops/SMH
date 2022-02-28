package smh.apr.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: APR10310Service.java
* @Package: smh.apr.service
* @Project name: 
* @Type name: APR10310Service
* @Company: Built1
* @Create Date: 2022.1.26
* @Author: 권택진
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2022. 02. 23   권택진     최초  생성
 *
 *
*/
public interface APR10310Service {
      /**
       * @fn : selectSelfEvaluationListDetail
       * @brief : 행동평가 평가자 내역 조회
       * @Method Name : selectSelfEvaluationListDetail
       * @remark
       * @Create Date: 2022.1.26
       * @Author: 권택진
       * @File Version: v1.0
        *
        * << 개정이력(Modification Information) >>
        *
        *     수정일      수정자   수정내용
        *   ------------  ------  ----------
        *   2022. 02. 23   권택진     최초  생성
        *
       */
	
	
	
	
	
	
	
	
	public void selectBehaviorUserList(UiMapDto dto) throws Exception;
	
	public void selectRatingList(UiMapDto dto) throws Exception;
	
	public void selectBehaviorTableList(UiMapDto dto) throws Exception;
	
	public void updateBehaviorTable(UiMapDto dto) throws Exception;
	
	public void selectRatingExists(UiMapDto dto) throws Exception;
	
	public void updateAppraisalMaster(UiMapDto dto) throws Exception;
	
	
	
          
 }