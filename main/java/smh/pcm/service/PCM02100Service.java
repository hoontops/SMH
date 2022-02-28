package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM02100Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM02100Service
* @Company: Built1
* @Create Date: 2021.03.30
* @Author: 이용국
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 30.  이용국   최초  생성
 *
 *
*/
public interface PCM02100Service {

	
	
    /**
     * @brief : 인수등록
     * @remark
     * @Create Date: 2021.03.12
     * @Author: 이용국
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.12.       이용국     최초  생성
      *
     */
    public void getUomDefinitionList(UiMapDto dto) throws Exception;
	
    /**
     * @brief : 인수등록
     * @remark
     * @Create Date: 2021.03.12
     * @Author: 이용국
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.12.       이용국     최초  생성
      *
     */
    public void getLotProductTypePathType(UiMapDto dto) throws Exception;
    
    
    /**
     * @brief : 인수등록
     * @remark
     * @Create Date: 2021.03.12
     * @Author: 이용국
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.12.       이용국     최초  생성
      *
     */
    public void getAreaList(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 인수등록
     * @remark
     * @Create Date: 2021.03.12
     * @Author: 이용국
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.12.       이용국     최초  생성
      *
     */
    public void getTransitAreaList(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 인수등록
     * @remark
     * @Create Date: 2021.03.12
     * @Author: 이용국
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.12.       이용국     최초  생성
      *
     */
    public void selectAreaResourceByLot(UiMapDto dto) throws Exception;
    
    
    /**
     * @brief : 인수등록
     * @remark
     * @Create Date: 2021.03.12
     * @Author: 이용국
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.12.       이용국     최초  생성
      *
     */
    public void selectEquipmentByArea(UiMapDto dto) throws Exception;
    
    
    /**
     * @brief : 인수등록
     * @remark
     * @Create Date: 2021.03.12
     * @Author: 이용국
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.12.       이용국     최초  생성
      *
     */
    public void selectLotHistoryMessage(UiMapDto dto) throws Exception;
    
    
    /**
     * @brief : 인수등록
     * @remark
     * @Create Date: 2021.03.12
     * @Author: 이용국
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.12.       이용국     최초  생성
      *
     */
    public void getDefectCodeByProcess(UiMapDto dto) throws Exception;
    
    /**
     * @brief : NCR 리스트 
     * @remark
     * @Create Date: 2021.03.16
     * @Author: 이용국
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.16.       이용국     최초  생성
      *
     */
    public void SelectNcrStandardOfSelfInspection(UiMapDto dto) throws Exception;
    
  
    /**
     * @brief : 불량 팝업 리스트
     * @remark
     * @Create Date: 2021.03.18
     * @Author: 이용국
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.18.       이용국     최초  생성
      *
     */
    public void SelectDefectCodeByProcess(UiMapDto dto) throws Exception;
    
    
    /**
     * @brief : 
     * @remark
     * @Create Date: 2021.03.18
     * @Author: 이용국
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.18.       이용국     최초  생성
      *
     */
    public void selectProcessDefTypeByProcess(UiMapDto dto) throws Exception;
    
    
    /**
     * @brief : 
     * @remark
     * @Create Date: 2021.03.18
     * @Author: 이용국
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.18.       이용국     최초  생성
      *
     */
    public void getEquipmentState(UiMapDto dto) throws Exception;
    
    
    /**
     * @brief : 
     * @remark
     * @Create Date: 2021.03.18
     * @Author: 이용국
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.18.       이용국     최초  생성
      *
     */
    public void selectLotMessage(UiMapDto dto) throws Exception;
    
    
    
    /**
     * @brief : 
     * @remark
     * @Create Date: 2021.03.18
     * @Author: 이용국
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.18.       이용국     최초  생성
      *
     */
    public void getLotMessageList(UiMapDto dto) throws Exception;    
    
    /**
     * @brief : 
     * @remark
     * @Create Date: 2021.03.18
     * @Author: 이용국
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.18.       이용국     최초  생성
      *
     */
    public void getReasonConsumableList(UiMapDto dto) throws Exception;    
    
    /**
     * @brief : 
     * @remark
     * @Create Date: 2021.03.18
     * @Author: 이용국
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.18.       이용국     최초  생성
      *
     */
    public void selectLotInfoByProcess(UiMapDto dto) throws Exception;

    public Boolean selectLotInfoByProcess(String enterpriseId,String plantId,String areaId, String lotId) throws Exception;

    /**
     * @brief : 
     * @remark
     * @Create Date: 2021.03.18
     * @Author: 이용국
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.18.       이용국     최초  생성
      *
     */
    public void selectCodeList(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 
     * @remark
     * @Create Date: 2021.03.18
     * @Author: 이용국
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.18.       이용국     최초  생성
      *
     */
    public void selectCheckStaying(UiMapDto dto) throws Exception;
    
    
    /**
     * @brief : 
     * @remark
     * @Create Date: 2021.03.18
     * @Author: 이용국
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.18.       이용국     최초  생성
      *
     */
    public void getReasonCodeByProcess(UiMapDto dto) throws Exception;
    
    
    /**
     * @brief : 
     * @remark
     * @Create Date: 2021.03.18
     * @Author: 이용국
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.18.       이용국     최초  생성
      *
     */
    public void selectPlantIsWipSurvey(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 
     * @remark
     * @Create Date: 2021.03.18
     * @Author: 이용국
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.18.       이용국     최초  생성
      *
     */
    public void selectCommentByProcess(UiMapDto dto) throws Exception;
    
    
    /**
     * @brief : 
     * @remark
     * @Create Date: 2021.03.18
     * @Author: 이용국
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.18.       이용국     최초  생성
      *
     */
    public void selectProcessSpecByProcess(UiMapDto dto) throws Exception;

    /**
     * @brief : 
     * @remark
     * @Create Date: 2021.03.18
     * @Author: 이용국
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.18.       이용국     최초  생성
      *
     */
    public void selectLotCancelWorkResultByRollCutting(UiMapDto dto) throws Exception;

    /**
     * @brief : 
     * @remark
     * @Create Date: 2021.03.18
     * @Author: 이용국
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.18.       이용국     최초  생성
      *
     */
    public void selectDefectMapDataForSend(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 
     * @remark
     * @Create Date: 2021.03.18
     * @Author: 이용국
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.18.       이용국     최초  생성
      *
     */
    public void selectPostProcessEquipmentWipByArea(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 
     * @remark
     * @Create Date: 2021.03.18
     * @Author: 이용국
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.18.   이용국     최초  생성
      *
     */
    public void getCodeList(UiMapDto dto) throws Exception;

    /**
     * @brief : 
     * @remark
     * @Create Date: 2021.03.18
     * @Author: 이용국
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.18.   이용국     최초  생성
      *
     */
    public void selectConsumableListByProcessWorkComplete(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 
     * @remark
     * @Create Date: 2021.03.18
     * @Author: 이용국
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.18.       이용국     최초  생성
      *
     */
	public void abnormalOccurenceByDelayLot(UiMapDto dto) throws Exception;
	
    /**
     * @brief : 입고검사, 자주검사 등록 
     * @remark : 공정 인수 전 입고검사 결과를 등록하는 화면, 결과에 따라 NCR을 발행
     * @Create Date: 2021.03.23
     * @Author: 이용국
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.23.       이용국     최초  생성
      *
     */
	public void saveLotIncommingInspection(UiMapDto dto) throws Exception;
    
 }