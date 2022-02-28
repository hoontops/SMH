package smh.apr.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: APR20510Service.java
* @Package: smh.apr.service
* @Project name: 
* @Type name: APR20510Service
* @Company: Built1
* @Create Date: 2022.1.25
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2022. 1. 25.   박대호   최초  생성
 *
 *
*/
public interface APR20510Service {

    /**
    * @fn : select1stAppraiserCombo
    * @brief : 업적평가-목표리뷰(1st Appraiser)콤보조회
    * @Method Name : select1stAppraiserCombo
    * @remark
    * @Create Date: 2022.1.25
    * @Author: 박대호
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2022.1.25.    박대호     최초  생성
     *
    */
    public void select1stAppraiserCombo(UiMapDto dto) throws Exception;
    /**
     * @fn : updateApr1stComment
     * @brief : 업적평가-목표리뷰 수정
     * @Method Name : updateApr1stComment
     * @remark
     * @Create Date: 2022.1.25
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2022.1.25.    박대호     최초  생성
      *
     */
     public void updateApr1stComment(UiMapDto dto) throws Exception;
    
 }