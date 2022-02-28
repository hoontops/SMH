package smh.pcm.service;

import java.util.Map;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCMCommonService.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCMCommonService
* @Company: Built1
* @Create Date: 2021.03.09
* @Author: 김애리
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 09.  김애리   최초  생성
 *
 *
*/
public interface PCMCommonService {

	public void selectCustomQuery(UiMapDto dto) throws Exception;  
	
	/**
     * @brief : 자재 출고 번호 채번
     * @remark
     * @Create Date: 2021.03.09
     * @Author: 박현우
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.10.       박현우     최초  생성
      *
     */
	public String selectMaxOutboundNo(String enterpriseId, String plantId, String yyyymmdd, String areaId, String processSegmentId, String processSegmentVersion) throws Exception;
	//public String selectMaxOutboundNo(String enterpriseId, String plantId, String yyyymmdd) throws Exception;
	//public String selectMaxOutboundNo(Map<String, Object> map) throws Exception;
	
	/**
     * @brief : 사용자 정보 리스트
     * @remark
     * @Create Date: 2021.03.16
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.16.       김애리     최초  생성
      *
     */
    public void selectUserList(UiMapDto dto) throws Exception;
    
	
    /**
     * @brief : TxnHistKey 가져옴. 
     * @remark
     * @Create Date: 2021.03.18
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.18.       김애리     최초  생성
      *
     */
    public void selectTxnHistKey(UiMapDto dto) throws Exception;
    
    
    public java.util.Date selectToDate() throws Exception;
    

	public void getUserList(UiMapDto dto) throws Exception;
	
	public void getWorkerByProcess(UiMapDto dto) throws Exception;
	
	/**
     * @brief : 작업장정보 조회
     * @remark
     * @Create Date: 2021.05.11
     * @Author: 방성혁
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일         수정자    수정내용
      *   ------------  ------  ----------
      *   2021.05.11.    방성혁     최초  생성
      *
     */
	  public void getBasAreaPop(UiMapDto dto) throws Exception ;	
 }