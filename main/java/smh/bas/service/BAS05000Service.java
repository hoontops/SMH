package smh.bas.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: BAS05000Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS05000Service
* @Company: Built1
* @Create Date: 2021.04.28
* @Author: 김진현
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.04.28.   김진현   최초  생성
 *
 *
*/
public interface BAS05000Service {

	/**
     * @fn : selectConditionitem
     * @brief : 설비 그룹 - 필터조회 - 조회조건(콤보)
     * @Method Name : selectConditionitem
     * @remark
     * @Create Date: 2021.04.28
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.04.28.     김진현        최초  생성
      *
     */
    public void selectConditionitem(UiMapDto dto) throws Exception;
    
    /**
     * @fn : selectEqpClassTreeList
     * @brief : 설비 그룹 - 트리 그리드 조회
     * @Method Name : selectEqpClassTreeList
     * @remark
     * @Create Date: 2021.04.28
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.04.28.     김진현        최초  생성
      *
     */
    public void selectEqpClassTreeList(UiMapDto dto) throws Exception;
    
    /**
     * @fn : selectEqpClassList
     * @brief : 설비 그룹 - 메인 그리드 조회(Tree row 변경시)
     * @Method Name : selectEqpClassList
     * @remark
     * @Create Date: 2021.04.28
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.04.28.     김진현        최초  생성
      *
     */
    public void selectEqpClassList(UiMapDto dto) throws Exception;
    
    /**
     * @fn : saveEqpGrp
     * @brief : 설비 그룹 - 메인 그리드 조회(Tree row 변경시)
     * @Method Name : saveEqpGrp
     * @remark
     * @Create Date: 2021.04.29
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.04.29.     김진현        최초  생성
      *
     */
    public void saveEqpGrp(UiMapDto dto) throws Exception;
 
 }