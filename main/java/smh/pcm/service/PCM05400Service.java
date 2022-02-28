package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM05400Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM05400Service
* @Company: Built1
* @Create Date: 2021.05.31
* @Author: 김애리
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.05.31.  김애리   최초  생성
 *
 *
*/
public interface PCM05400Service {

  
	/**
     * @brief : category 조회 
     * @remark
     * @Create Date: 2021.05.31
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.05.31.       김애리     최초  생성
      *
     */
	public void selectCategory(UiMapDto dto) throws Exception;
	
    /**
     * @brief : APP 탭 조회
     * @remark
     * @Create Date: 2021.05.31
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.05.31.       김애리     최초  생성
      *
     */
    public void selectLeadTimeByApp(UiMapDto dto) throws Exception;
    
    /**
     * @brief : TYPE 탭 조회
     * @remark
     * @Create Date: 2021.05.31
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.05.31.       김애리     최초  생성
      *
     */
    public void selectLeadTimeByType(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 품목 탭 조회
     * @remark
     * @Create Date: 2021.05.31
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.05.31.       김애리     최초  생성
      *
     */
    public void selectLeadTimeByProduct(UiMapDto dto) throws Exception;
    
    /**
     * @brief : LOT 탭 조회
     * @remark
     * @Create Date: 2021.05.31
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.05.31.       김애리     최초  생성
      *
     */
    public void selectLeadTimeByLot(UiMapDto dto) throws Exception;
    
    /**
     * @brief : Segment 탭 조회 
     * @remark
     * @Create Date: 2021.05.31
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.05.31.       김애리     최초  생성
      *
     */
    public void selectLeadTimeBySegment(UiMapDto dto) throws Exception;
    
    /**
     * @brief : Area 탭 조회
     * @remark
     * @Create Date: 2021.05.31
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.05.31.       김애리     최초  생성
      *
     */
    public void selectLeadTimeByArea(UiMapDto dto) throws Exception;
    
 }