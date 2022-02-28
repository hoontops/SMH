package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM01700Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM01700Service
* @Company: Built1
* @Create Date: 2021.03.30
* @Author: 김성현
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 30.  김성현   최초  생성
 *
 *
*/
public interface PCM01700Service {

	
	
    /**
     * @brief : 인수등록
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
    public void getUomDefinitionList(UiMapDto dto) throws Exception;
	
    /**
     * @brief : 인수등록
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
    public void getLotProductTypePathType(UiMapDto dto) throws Exception;
    
    
    /**
     * @brief : 인수등록
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
    public void getAreaList(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 인수등록
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
    public void getTransitAreaList(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 인수등록
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
    public void selectAreaResourceByLot(UiMapDto dto) throws Exception;
    
    
    /**
     * @brief : 인수등록
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
    public void selectEquipmentByArea(UiMapDto dto) throws Exception;
    
    
    /**
     * @brief : 인수등록
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
    public void selectLotHistoryMessage(UiMapDto dto) throws Exception;
    
    
    /**
     * @brief : 인수등록
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
    public void getDefectCodeByProcess(UiMapDto dto) throws Exception;
    
    /**
     * @brief : NCR 리스트 
     * @remark
     * @Create Date: 2021.03.16
     * @Author: 김성현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.16.       김성현     최초  생성
      *
     */
    public void SelectNcrStandardOfSelfInspection(UiMapDto dto) throws Exception;
    
  
    /**
     * @brief : 불량 팝업 리스트
     * @remark
     * @Create Date: 2021.03.18
     * @Author: 김성현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.18.       김성현     최초  생성
      *
     */
    public void SelectDefectCodeByProcess(UiMapDto dto) throws Exception;
    
    
    /**
     * @brief : 
     * @remark
     * @Create Date: 2021.03.18
     * @Author: 김성현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.18.       김성현     최초  생성
      *
     */
    public void getProcessDefTypeByProcess(UiMapDto dto) throws Exception;
    
    
    /**
     * @brief : 
     * @remark
     * @Create Date: 2021.03.18
     * @Author: 김성현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.18.       김성현     최초  생성
      *
     */
    public void getState(UiMapDto dto) throws Exception;
    
    
    /**
     * @brief : 
     * @remark
     * @Create Date: 2021.03.18
     * @Author: 김성현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.18.       김성현     최초  생성
      *
     */
    public void selectLotMessage(UiMapDto dto) throws Exception;
    
    
    
    /**
     * @brief : 
     * @remark
     * @Create Date: 2021.03.18
     * @Author: 김성현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.18.       김성현     최초  생성
      *
     */
    public void getLotMessageList(UiMapDto dto) throws Exception;    
    
    /**
     * @brief : 
     * @remark
     * @Create Date: 2021.03.18
     * @Author: 김성현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.18.       김성현     최초  생성
      *
     */
    public void getReasonConsumableList(UiMapDto dto) throws Exception;    
    
    /**
     * @brief : 
     * @remark
     * @Create Date: 2021.03.18
     * @Author: 김성현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.18.       김성현     최초  생성
      *
     */
    public void selectLotInfoByProcess(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 
     * @remark
     * @Create Date: 2021.03.18
     * @Author: 김성현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.18.       김성현     최초  생성
      *
     */
    public void getCodeList(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 
     * @remark
     * @Create Date: 2021.03.18
     * @Author: 김성현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.18.       김성현     최초  생성
      *
     */
    public void getCheckStaying(UiMapDto dto) throws Exception;
    
    
    /**
     * @brief : 
     * @remark
     * @Create Date: 2021.03.18
     * @Author: 김성현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.18.       김성현     최초  생성
      *
     */
    public void getReasonCodeByProcess(UiMapDto dto) throws Exception;
    
    
    /**
     * @brief : 
     * @remark
     * @Create Date: 2021.03.18
     * @Author: 김성현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.18.       김성현     최초  생성
      *
     */
    public void getPlantIsWipSurvey(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 
     * @remark
     * @Create Date: 2021.03.18
     * @Author: 김성현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.18.       김성현     최초  생성
      *
     */
    public void selectCommentByProcess(UiMapDto dto) throws Exception;
    
    
    /**
     * @brief : 
     * @remark
     * @Create Date: 2021.03.18
     * @Author: 김성현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.18.       김성현     최초  생성
      *
     */
    public void selectProcessSpecByProcess(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 
     * @remark
     * @Create Date: 2021.03.18
     * @Author: 김성현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.18.       김성현     최초  생성
      *
     */
	public void abnormalOccurenceByDelayLot(UiMapDto dto) throws Exception;
	
    /**
     * @brief : 입고검사, 자주검사 등록 
     * @remark : 공정 인수 전 입고검사 결과를 등록하는 화면, 결과에 따라 NCR을 발행
     * @Create Date: 2021.03.23
     * @Author: 김성현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.23.       김성현     최초  생성
      *
     */
	public void saveLotIncommingInspection(UiMapDto dto) throws Exception;
	
	   /**
	    * @fn : savePrintLotCard
	    * @brief : Lot Card 출력 저장
	    * @Method Name : savePrintLotCard
	    * @remark
	    * @Create Date: 2021. 04. 02
	    * @Author: 
	    * @File Version: v1.0 
	    *
	    * << 개정이력(Modification Information) >>
	    *   
	    *     수정일                수정자      수정내용
	    *   ------------  ------  ----------
	    *   2021. 5. 04.   김성현     최초  생성
	    *
	   */
	public void savePrintLotCard(UiMapDto dto) throws Exception;
	
	/**
	* @fn 			: saveLotMessageRead
	* @brief 		: 함수 간략한 설명 
	* @Method Name : saveLotMessageRead
	* @remark		: 상세설명
	* @Author		: sungmin.choe
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 5. 18.       sungmin.choe      최초  생성
	 *
	*/
	public void saveLotMessageRead(UiMapDto dto) throws Exception;
	
    
 }