package smh.qam.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: QAM03100Service.java
* @Package: smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name: QAM03100Service
* @Company: Built1
* @Create Date: 2021.06.02
* @Author: 권혜영
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.06.02.   권혜영   최초  생성
 *
 *
*/
public interface QAM03100Service {

    /**
    * @fn : selectQamShrinkproductList
    * @brief : 수축율 측정기준 조회
    * @Method Name : selectQamShrinkproductList
    * @remark
    * @Create Date: 2021.4.5
    * @Author: 권혜영
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.4.5.       권혜영     최초  생성
     *
    */
    public void selectQamShrinkproductList(UiMapDto dto) throws Exception;

	/**
	* @fn : selectQamProcesssegmentList
	* @brief : 공정선택 팝업 조회
	* @Method Name : selectQamProcesssegmentList
	* @remark
	* @Create Date: 2021.06.03
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.06.03.       권혜영     최초  생성
	*
	*/
	public void selectQamProcesssegmentList(UiMapDto dto) throws Exception;
	
	/**
	* @fn : saveQamShrinkproduct
	* @brief : 수축율관리 조회
	* @Method Name : saveQamShrinkproduct
	* @remark
	* @Create Date: 2021.06.03
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.06.03.       권혜영     최초  생성
	*
	*/
	public void saveQamShrinkproduct(UiMapDto dto) throws Exception;
	
	/**
	* @fn : selectQamShrinkproductoperationList
	* @brief : 수축율관리품목 공정별기준값 조회
	* @Method Name : selectQamShrinkproductoperationList
	* @remark
	* @Create Date: 2021.06.03
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.06.03.       권혜영     최초  생성
	*
	*/
	public void selectQamShrinkproductoperationList(UiMapDto dto) throws Exception;

    /**
    * @fn : selectMeasureMasterLotList
    * @brief : 수축율 측정기준등록 > 품목리스트 > 초도측정 측정LOT 팝업
    * @remark
    * @Create Date: 2021.07.20
    * @Author: 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
	*     수정일         수정자        수정내용
	*   ----------  ------------  ----------
	*   2021.07.20  yanghee.kim    최초  생성
    *
    */
	public void selectMeasureMasterLotList(UiMapDto dto) throws Exception;
	
    /**
    * @fn : saveQamShrinkFirstLot
    * @brief : 수축율 측정기준등록 > 품목리스트 > 초도측정 측정LOT 저장
    * @remark
    * @Create Date: 2021.07.20
    * @Author: yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
	*     수정일         수정자        수정내용
	*   ----------  ------------  ----------
	*   2021.07.20  yanghee.kim    최초  생성
    *
    */
	public void saveQamShrinkFirstLot(UiMapDto dto) throws Exception;
}