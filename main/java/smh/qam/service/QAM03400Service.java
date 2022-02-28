package smh.qam.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: QAM03400Service.java
* @Package: smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name: QAM03400Service
* @Company: Built1
* @Create Date: 2021.05.27
* @Author: 권혜영
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.05.12.   권혜영   최초  생성
 *
 *
*/
public interface QAM03400Service {

    /**
    * @fn : selectQamAffectLotList
    * @brief : AFFECT LOT산정 조회
    * @Method Name : selectQamAffectLotList
    * @remark
    * @Create Date: 2021.05.27
    * @Author: 권혜영
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.05.27.       권혜영     최초  생성
     *
    */
    public void selectQamAffectLotList(UiMapDto dto) throws Exception;

	/**
	* @fn : selectLotIdList
	* @brief : Lot  조회
	* @Method Name : selectLotIdList
	* @remark
	* @Create Date: 2021.06.01
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.06.01.       권혜영     최초  생성
	*
	*/
	public void selectLotIdList(UiMapDto dto) throws Exception;
	/**
	* @fn : selectProductListByCustomer
	* @brief : 품목 조회
	* @Method Name : selectProductListByCustomer
	* @remark
	* @Create Date: 2021.06.01
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.06.01.       권혜영     최초  생성
	*
	*/
	public void selectProductListByCustomer(UiMapDto dto) throws Exception;
	/**
	* @fn : selectProductMKWeekByProductdefid
	* @brief : 주차 조회
	* @Method Name : selectProductMKWeekByProductdefid
	* @remark
	* @Create Date: 2021.06.01
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.06.01.       권혜영     최초  생성
	*
	*/
	public void selectProductMKWeekByProductdefid(UiMapDto dto) throws Exception;
	/**
	* @fn : selectProductBoxNoByProductdefid
	* @brief : Box No 조회
	* @Method Name : selectProductBoxNoByProductdefid
	* @remark
	* @Create Date: 2021.06.01
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.06.01.       권혜영     최초  생성
	*
	*/
	public void selectProductBoxNoByProductdefid(UiMapDto dto) throws Exception;
	/**
	* @fn : selectTopProcessSegmentIdByProductdefid
	* @brief : 대공정 조회
	* @Method Name : selectTopProcessSegmentIdByProductdefid
	* @remark
	* @Create Date: 2021.06.01
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.06.01.       권혜영     최초  생성
	*
	*/
	public void selectTopProcessSegmentIdByProductdefid(UiMapDto dto) throws Exception;
	/**
	* @fn : selectMiddleProcessSegmentIdByProductdefid
	* @brief : 중공정 조회
	* @Method Name : selectMiddleProcessSegmentIdByProductdefid
	* @remark
	* @Create Date: 2021.06.01
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.06.01.       권혜영     최초  생성
	*
	*/
	public void selectMiddleProcessSegmentIdByProductdefid(UiMapDto dto) throws Exception;	
	/**
	* @fn : selectProcessSegmentIdByProductdefid
	* @brief : 공정 조회
	* @Method Name : selectProcessSegmentIdByProductdefid
	* @remark
	* @Create Date: 2021.06.01
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.06.01.       권혜영     최초  생성
	*
	*/
	public void selectProcessSegmentIdByProductdefid(UiMapDto dto) throws Exception;
	/**
	* @fn : selectAreaIdByProcesssegmentId
	* @brief : 작업장 조회
	* @Method Name : selectAreaIdByProcesssegmentId
	* @remark
	* @Create Date: 2021.06.01
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.06.01.       권혜영     최초  생성
	*
	*/
	public void selectAreaIdByProcesssegmentId(UiMapDto dto) throws Exception;
	/**
	* @fn : selectEquipmentClassIdByAreaId
	* @brief : 설비그룹 조회
	* @Method Name : selectEquipmentClassIdByAreaId
	* @remark
	* @Create Date: 2021.06.01
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.06.01.       권혜영     최초  생성
	*
	*/
	public void selectEquipmentClassIdByAreaId(UiMapDto dto) throws Exception;
	/**
	* @fn : selectResourceIdByEquipmentClassId
	* @brief : 자원 조회
	* @Method Name : selectResourceIdByEquipmentClassId
	* @remark
	* @Create Date: 2021.06.01
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.06.01.       권혜영     최초  생성
	*
	*/
	public void selectResourceIdByEquipmentClassId(UiMapDto dto) throws Exception;
	/**
	* @fn : selectEquipmentidByResourceId
	* @brief : 설비호기 조회
	* @Method Name : selectEquipmentidByResourceId
	* @remark
	* @Create Date: 2021.06.01
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.06.01.       권혜영     최초  생성
	*
	*/
	public void selectEquipmentidByResourceId(UiMapDto dto) throws Exception;
	/**
	* @fn : selectWorkstartUserByEquipmentid
	* @brief : 작업자 조회
	* @Method Name : selectWorkstartUserByEquipmentid
	* @remark
	* @Create Date: 2021.06.01
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.06.01.       권혜영     최초  생성
	*
	*/
	public void selectWorkstartUserByEquipmentid(UiMapDto dto) throws Exception;
	/**
	* @fn : selectDurableDefIdByDurableClassId
	* @brief : 치공구 명 조회
	* @Method Name : selectDurableDefIdByDurableClassId
	* @remark
	* @Create Date: 2021.06.01
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.06.01.       권혜영     최초  생성
	*
	*/
	public void selectDurableDefIdByDurableClassId(UiMapDto dto) throws Exception;
	/**
	* @fn : selectDurablelotidByDurableDefId
	* @brief : 치공구 NO 조회
	* @Method Name : selectDurablelotidByDurableDefId
	* @remark
	* @Create Date: 2021.06.01
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.06.01.       권혜영     최초  생성
	*
	*/
	public void selectDurablelotidByDurableDefId(UiMapDto dto) throws Exception;
	/**
	* @fn : selectMaterialDefId
	* @brief : 원자재 조회
	* @Method Name : selectMaterialDefId
	* @remark
	* @Create Date: 2021.06.01
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.06.01.       권혜영     최초  생성
	*
	*/
	public void selectMaterialDefId(UiMapDto dto) throws Exception;
	/**
	* @fn : selectMateriallotidByMaterialDefId
	* @brief : 원자재 LOT 조회
	* @Method Name : selectMateriallotidByMaterialDefId
	* @remark
	* @Create Date: 2021.06.01
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.06.01.       권혜영     최초  생성
	*
	*/
	public void selectMateriallotidByMaterialDefId(UiMapDto dto) throws Exception;
	/**
	* @fn : selectProductMaterialLotId
	* @brief : 반제품명 조회
	* @Method Name : selectProductMaterialLotId
	* @remark
	* @Create Date: 2021.06.01
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.06.01.       권혜영     최초  생성
	*
	*/
	public void selectProductMaterialLotId(UiMapDto dto) throws Exception;
	/**
	* @fn : selectMaterialLotIdByProductMaterialLotId
	* @brief : 반제품 LOT 조회
	* @Method Name : selectMaterialLotIdByProductMaterialLotId
	* @remark
	* @Create Date: 2021.06.01
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.06.01.       권혜영     최초  생성
	*
	*/
	public void selectMaterialLotIdByProductMaterialLotId(UiMapDto dto) throws Exception;

}