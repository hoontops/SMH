package smh.apr.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: APR10210Service.java
* @Package: smh.apr.service
* @Project name: 
* @Type name: APR10210Service
* @Company: Built1
* @Create Date: 2022.1.26
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2022. 1. 26.   박대호   최초  생성
 *
 *
*/
public interface APR10210Service {
      /**
       * @fn : selectSelfEvaluationListDetail
       * @brief : 업적평가 본인평가 Detail 조회
       * @Method Name : selectSelfEvaluationListDetail
       * @remark
       * @Create Date: 2022.1.26
       * @Author: 박대호
       * @File Version: v1.0
        *
        * << 개정이력(Modification Information) >>
        *
        *     수정일      수정자   수정내용
        *   ------------  ------  ----------
        *   2022.1.26.    박대호     최초  생성
        *
       */
       public void selectSelfEvaluationListDetail(UiMapDto dto) throws Exception;
       /**
        * @fn : saveSelfEvaluationList
        * @brief : 업적평가 본인평가 수정
        * @Method Name : saveSelfEvaluationList
        * @remark
        * @Create Date: 2022.1.26
        * @Author: 박대호
        * @File Version: v1.0
         *
         * << 개정이력(Modification Information) >>
         *
         *     수정일      수정자   수정내용
         *   ------------  ------  ----------
         *   2022.1.26.    박대호     최초  생성
         *
        */
        public void saveSelfEvaluationList(UiMapDto dto) throws Exception;
       
          
 }