package smh.qam.service;

import java.util.Map;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: QAM01100Service.java
* @Package: smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name: QAM01100Service
* @Company: Built1
* @Create Date: 2021.4.7
* @Author: 권혜영
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 5.   권혜영   최초  생성
 *
 *
*/
public interface QAM01100Service {

    /**
    * @fn : selectQamMeasureValueList
    * @brief : 품질규격 측정값 정보 조회
    * @Method Name : selectQamMeasureValueList
    * @remark
    * @Create Date: 2021.4.7
    * @Author: 권혜영
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.4.7.       권혜영     최초  생성
     *
    */
    public void selectQamMeasureValueList(UiMapDto dto) throws Exception;
    
    /**
     * @fn : selectQamLotByLotId
     * @brief : LOT 정보 조회
     * @Method Name : selectQamLotByLotId
     * @remark
     * @Create Date: 2021.4.7
     * @Author: 권혜영
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.4.7.       권혜영     최초  생성
      *
     */
    public void selectQamLotByLotId(UiMapDto dto) throws Exception;
    
    /**
     * @fn : selectQamMeasureValue
     * @brief : LOTID로 측정값 등록화면의 모든 정보 조회
     * @Method Name : selectQamMeasureValue
     * @remark
     * @Create Date: 2021.4.7
     * @Author: 권혜영
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.4.7.       권혜영     최초  생성
      *
     */
     public void selectQamMeasureValue(UiMapDto dto) throws Exception;
    
    /**
    * @fn : saveQamMeasureValue
    * @brief : 데이터 측정 이력 저장
    * @Method Name : saveQamMeasureValue
    * @remark
    * @Create Date: 2021.4.7
    * @Author: 권혜영
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *  2021.4.7.       권혜영     최초  생성
     *
    */
    public void saveQamMeasureValue(UiMapDto dto) throws Exception;
    
    /**
     * @fn : saveQamMeasureValue
     * @brief : 데이터 측정 이력 저장 > 수입검사결과등록에서 처리할 내역
     * @Method Name : saveQamMeasureValue
     * @remark
     * @Create Date: 2021.06.25
     * @Author: 권혜영
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *  2021.06.25.       권혜영     최초  생성
      *
     */
    public void saveQamMeasureValue(DataSetMap measureItemMap, DataSetMap measureValueMap, DataSetMap infoMap) throws Exception;
    
}