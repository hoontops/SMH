package smh.qam.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: QAM01500Service.java
* @Package: smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name: QAM01500Service
* @Company: Built1
* @Create Date: 2021.4.14
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
public interface QAM01500Service {

    /**
    * @fn : selectQamShipinspectiontargetList
    * @brief : 월별 LRR 목표등록  정보 조회
    * @Method Name : selectQamShipinspectiontargetList
    * @remark
    * @Create Date: 2021.4.14
    * @Author: 권혜영
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.4.14.       권혜영     최초  생성
     *
    */
    public void selectQamShipinspectiontargetList(UiMapDto dto) throws Exception;

    /**
    * @fn : saveQamShipinspectiontarget
    * @brief : 월별 LRR 목표등록  정보 저장
    * @Method Name : saveQamShipinspectiontarget
    * @remark
    * @Create Date: 2021.4.14
    * @Author: 권혜영
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *  2021.4.14.       권혜영     최초  생성
     *
    */
    public void saveQamShipinspectiontarget(UiMapDto dto) throws Exception;
    
 
 }