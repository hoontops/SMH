package smh.bas.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: BAS00600Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS00600Service
* @Company: Built1
* @Create Date: 2021.2.26
* @Author: sungmin.choe
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 03   sungmin.choe   최초  생성
 *
 *
*/
public interface BAS00600Service {


    /**
    * @fn : selectStayingTimelist
    * @brief : 공정별 체공시간 조회
    * @Method Name : selectStayingTimelist
    * @remark
    * @Create Date: 2021.3.03
    * @Author: sungmin.choe
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 03.       sungmin.choe     최초  생성
     *
    */
    public void selectStayingTimelist(UiMapDto dto) throws Exception;
  
    /**
    * @fn 			: saveStayingTime
    * @brief 			: 공정별 체공시간 저장
    * @Method Name : saveStayingTime
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 03.       sungmin.choe      최초  생성
     *
    */
    public void saveStayingTime(UiMapDto dto) throws Exception;
 }