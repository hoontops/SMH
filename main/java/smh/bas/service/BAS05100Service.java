package smh.bas.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: BAS05100Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS05100Service
* @Company: Built1
* @Create Date: 2021.05.01
* @Author: 김진현
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.05.01.   김진현   최초  생성
 *
 *
*/
public interface BAS05100Service {

	/**
     * @fn : SelectEquipmentManagementList
     * @brief : 설비/설비단 관리 - 메인 설비현황 조회
     * @Method Name : SelectEquipmentManagementList
     * @remark
     * @Create Date: 2021.05.01
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.05.01.     김진현        최초  생성
      *
     */
    public void SelectEquipmentManagementList(UiMapDto dto) throws Exception;
    
    /**
     * @fn : selectEqpClassTreeList
     * @brief : 설비/설비단 관리 - 트리 조회
     * @Method Name : selectEqpClassTreeList
     * @remark
     * @Create Date: 2021.05.01
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.05.01.     김진현        최초  생성
      *
     */
    public void selectEqpClassTreeList(UiMapDto dto) throws Exception;
    
    /**
     * @fn : SelectEquipmentClass03
     * @brief : 설비/설비단 관리 - 설비 (MC) List
     * @Method Name : SelectEquipmentClass03
     * @remark
     * @Create Date: 2021.05.01
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.05.01.     김진현        최초  생성
      *
     */
    public void SelectEquipmentClass03(UiMapDto dto) throws Exception;
    
    /**
     * @fn : SelectEquipmentClass02
     * @brief : 설비/설비단 관리 - 설비 (SC) List
     * @Method Name : SelectEquipmentClass02
     * @remark
     * @Create Date: 2021.05.01
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.05.01.     김진현        최초  생성
      *
     */
    public void SelectEquipmentClass02(UiMapDto dto) throws Exception;
    
    /**
     * @fn : SelectEquimentClass
     * @brief : 설비/설비단 관리 - 설비단 조회
     * @Method Name : SelectEquimentClass
     * @remark
     * @Create Date: 2021.05.01
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.05.01.     김진현        최초  생성
      *
     */
    public void SelectEquimentClass(UiMapDto dto) throws Exception;
    
    

/**
     * @fn : SelectEqpClassGridCombo
     * @brief : 설비/설비단 관리 -  그리드 콤보 조회
     * @Method Name : SelectEqpClassGridCombo
     * @remark
     * @Create Date: 2021.05.01
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.05.01.     김진현        최초  생성
      *
     */
    public void SelectEqpClassGridCombo(UiMapDto dto) throws Exception;
    
    /**
     * @fn : SelectEquipmentClass
     * @brief : 설비/설비단 관리 - 설비단 설비단id 팝업
     * @Method Name : SelectEquipmentClass
     * @remark
     * @Create Date: 2021.05.03
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.05.03.     김진현        최초  생성
      *
     */
    public void SelectEquipmentClass(UiMapDto dto) throws Exception;
    
    /**
     * @fn : saveEquipment
     * @brief : 설비/설비단 관리 - 설비/설비단 저장
     * @Method Name : saveEquipment
     * @remark
     * @Create Date: 2021.05.03
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.05.03.     김진현        최초  생성
      *
     */
    public void saveEquipment(UiMapDto dto) throws Exception;
    
    /**
     * @fn : selectAreaListByEquipmentClassId
     * @brief : 설비/설비단 관리 - [작업장popup]설비그룹이 매핑된 Area만 조회
     * @Method Name : selectAreaListByEquipmentClassId
     * @remark
     * @Create Date: 2021.05.03
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.05.03.     김진현        최초  생성
      *
     */
    public void selectAreaListByEquipmentClassId(UiMapDto dto) throws Exception;
    
    /**
     * @fn : selectProcessSegmentClass
     * @brief : 설비/설비단 관리 - [공정그룹 popup]
     * @Method Name : selectProcessSegmentClass
     * @remark
     * @Create Date: 2021.05.04
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.05.04.     김진현        최초  생성
      *
     */
    public void selectProcessSegmentClass(UiMapDto dto) throws Exception;
    
    /**
     * @fn : SelectMainEquipmentPop
     * @brief : 설비/설비단 관리 - 설비 그룹 (POP - 메인 그리드)
     * @Method Name : SelectMainEquipmentPop
     * @remark
     * @Create Date: 2021.05.07
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.05.07.     김진현        최초  생성
      *
     */
    public void SelectMainEquipmentPop(UiMapDto dto) throws Exception;
   
 
 }