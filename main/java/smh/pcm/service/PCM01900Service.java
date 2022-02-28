package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM01900Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM01900Service
* @Company: Built1
* @Create Date: 2021.04.19
* @Author: 김성현
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *    2021.04.19.  김성현   최초  생성
 *
 *
*/
public interface PCM01900Service {

	
	
    /**
     * @brief : 작업종료
     * @remark
     * @Create Date: 2021.03.12
     * @Author: 김성현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.12.       김성현     최초  생성
      *
     */
    public void selectDefectMapDataByWorkComplete(UiMapDto dto) throws Exception;

    /**
     * @brief : 작업종료
     * @remark
     * @Create Date: 2021.03.12
     * @Author: 김성현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.12.       김성현     최초  생성
      *
     */
    public void getLotWorkerByTrackOut(UiMapDto dto) throws Exception;    
    
    /**
     * @brief : 작업종료
     * @remark
     * @Create Date: 2021.03.12
     * @Author: 김성현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.12.       김성현     최초  생성
      *
     */
    public void getDurableDEFByBOR(UiMapDto dto) throws Exception;    
    
    
    /**
     * @brief : 작업종료
     * @remark
     * @Create Date: 2021.03.12
     * @Author: 김성현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.12.       김성현     최초  생성
      *
     */
    public void selectDurableListByProcessWorkComplete(UiMapDto dto) throws Exception;    
    
    /**
     * @brief : 작업종료
     * @remark
     * @Create Date: 2021.03.12
     * @Author: 김성현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.12.       김성현     최초  생성
      *
     */
    public void selectPostProcessEquipmentWipByArea(UiMapDto dto) throws Exception;    
    
    /**
     * @brief : 작업종료
     * @remark
     * @Create Date: 2021.03.12
     * @Author: 김성현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.12.       김성현     최초  생성
      *
     */
    public void getLotEquipmentByArea(UiMapDto dto) throws Exception;  
    
    /**
     * @brief : 작업종료
     * @remark
     * @Create Date: 2021.03.12
     * @Author: 김성현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.12.       김성현     최초  생성
      *
     */
    public void selectDefectDataByEquipment(UiMapDto dto) throws Exception;  
    
    /**
     * @brief : 작업종료
     * @remark
     * @Create Date: 2021.03.12
     * @Author: 김성현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.12.       김성현     최초  생성
      *
     */
    public void selectDefectMapDataForSend(UiMapDto dto) throws Exception;  
    
    /**
     * @brief : 작업종료
     * @remark
     * @Create Date: 2021.03.12
     * @Author: 김성현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.12.       김성현     최초  생성
      *
     */
    public void getLayerListForAoiBbtDefect(UiMapDto dto) throws Exception;  
    
    /**
     * @brief : 작업종료
     * @remark
     * @Create Date: 2021.03.12
     * @Author: 김성현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.12.       김성현     최초  생성
      *
     */
    public void getAoiDefectCodeByDefectCodeGroup(UiMapDto dto) throws Exception;  
    
    /**
     * @brief : 작업종료
     * @remark
     * @Create Date: 2021.03.12
     * @Author: 김성현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.12.       김성현     최초  생성
      *
     */
    public void getBBTDefectList(UiMapDto dto) throws Exception;  
    
    /**
     * @brief : 작업종료
     * @remark
     * @Create Date: 2021.03.12
     * @Author: 김성현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.12.       김성현     최초  생성
      *
     */
    public void getProcessSegmentClassBySegmentID(UiMapDto dto) throws Exception;  
    
    /**
     * @brief : 작업종료
     * @remark
     * @Create Date: 2021.03.12
     * @Author: 김성현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.12.       김성현     최초  생성
      *
     */
    public void selectReworkRouting(UiMapDto dto) throws Exception;  
    
    /**
     * @brief : 작업종료
     * @remark
     * @Create Date: 2021.03.12
     * @Author: 김성현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.12.       김성현     최초  생성
      *
     */
    public void getTransitResourceForAoiRepair(UiMapDto dto) throws Exception;  
    
    /**
     * @brief : 작업종료
     * @remark
     * @Create Date: 2021.03.12
     * @Author: 김성현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.12.       김성현     최초  생성
      *
     */
    public void getProcessPathList(UiMapDto dto) throws Exception;  

    
    public void selectConsumableListByProcessWorkCompleteAndByProcess(UiMapDto dto) throws Exception;
 }