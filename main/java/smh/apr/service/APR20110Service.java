package smh.apr.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: APR20110Service.java
* @Package: smh.apr.service
* @Project name: 
* @Type name: APR20110Service
* @Company: Built1
* @Create Date: 2022.1.21
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2022. 1. 21.   박대호   최초  생성
 *
 *
*/
public interface APR20110Service {

    /**
    * @fn : selectAppraisalTargetReviewList
    * @brief : 업적평가-목표리뷰 리스트조회
    * @Method Name : selectAppraisalTargetReviewList
    * @remark
    * @Create Date: 2022.1.21
    * @Author: 박대호
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2022.1.21.    박대호     최초  생성
     *
    */
    public void selectAppraisalTargetReviewList(UiMapDto dto) throws Exception;
    /**
     * @fn : updateAprComment
     * @brief : 업적평가-목표리뷰 수정
     * @Method Name : updateAprComment
     * @remark
     * @Create Date: 2022.1.24
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2022.1.24.    박대호     최초  생성
      *
     */
     public void updateAprComment(UiMapDto dto) throws Exception;
    
 }