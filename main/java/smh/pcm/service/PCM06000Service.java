package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM06000Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM06000Service
* @Company: Built1
* @Create Date: 2021.06.03
* @Author: 김애리
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.06.03.  김애리   최초  생성
 *
 *
*/
public interface PCM06000Service {

  
	/**
     * @brief : 품목 탭 조회
     * @remark
     * @Create Date: 2021.06.03
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.06.03.       김애리     최초  생성
      *
     */
	public void selectRollLossByProduct(UiMapDto dto) throws Exception;
	
    /**
     * @brief : 공정 탭 투입 조회
     * @remark
     * @Create Date: 2021.06.03
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.06.03.       김애리     최초  생성
      *
     */
    public void selectRollLossBySegment_Input(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 공정 탭 완료 조회
     * @remark
     * @Create Date: 2021.06.03
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.06.03.       김애리     최초  생성
      *
     */
    public void selectRollLossBySegment_Complete(UiMapDto dto) throws Exception;
    
    /**
     * @brief : LOT 탭 투입 조회
     * @remark
     * @Create Date: 2021.06.03
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.06.03.       김애리     최초  생성
      *
     */
    public void selectRollLossByLot_Input(UiMapDto dto) throws Exception;
    
    /**
     * @brief : LOT 탭 완료 조회
     * @remark
     * @Create Date: 2021.06.03
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.06.03.       김애리     최초  생성
      *
     */
    public void selectRollLossByLot_Complete(UiMapDto dto) throws Exception;
    
    
 }