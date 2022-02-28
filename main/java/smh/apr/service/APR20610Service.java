package smh.apr.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: APR20610Service.java
* @Package: smh.apr.service
* @Project name: 
* @Type name: APR20610Service
* @Company: Built1
* @Create Date: 2022.2.7
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2022. 2. 7.   박대호   최초  생성
 *
 *
*/
public interface APR20610Service {

    /**
     * @fn : update1stEvaluation
     * @brief : 업적평가-1차평가자 수정
     * @Method Name : update1stEvaluation
     * @remark
     * @Create Date: 2022.2.7
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2022.2.7.    박대호     최초  생성
      *
     */
     public void update1stEvaluation(UiMapDto dto) throws Exception;
    
 }