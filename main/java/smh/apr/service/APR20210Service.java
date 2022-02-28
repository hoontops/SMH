package smh.apr.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: APR20210Service.java
* @Package: smh.apr.service
* @Project name: 
* @Type name: APR20210Service
* @Company: Built1
* @Create Date: 2022.2.3
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2022. 2. 3.   박대호   최초  생성
 *
 *
*/
public interface APR20210Service {

    /**
     * @fn : updatePartEvaluation
     * @brief : 업적평가-파트장평가 수정
     * @Method Name : updatePartEvaluation
     * @remark
     * @Create Date: 2022.2.3
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2022.2.3.    박대호     최초  생성
      *
     */
     public void updatePartEvaluation(UiMapDto dto) throws Exception;
     /**
      * @fn : selectPerformanceRating
      * @brief : 업적평가-피평가자 등급조회
      * @Method Name : selectPerformanceRating
      * @remark
      * @Create Date: 2022.2.4
      * @Author: 박대호
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일      수정자   수정내용
       *   ------------  ------  ----------
       *   2022.2.4.    박대호     최초  생성
       *
      */
      public void selectPerformanceRating(UiMapDto dto) throws Exception;
     
 }