package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM01000Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM01000Service
* @Company: Built1
* @Create Date: 2021.03.24
* @Author: 김애리
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일             수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 24.  방성혁   최초  생성
 *
 *
*/
public interface PCM01000Service {

  
    /**
     * @brief : 재투입대상 수주번호 조회
     * @remark
     * @Create Date: 2021.03.24
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일               수정자       수정내용
      *   ------------  ------  ----------
      *   2021.03.24.    방성혁     최초  생성
      *
     */
    public void selectProductionOrderListForReInput(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 품목조회
     * @remark
     * @Create Date: 2021. 03. 24
     * @Author: 방성혁
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 03. 24.   방성혁     최초  생성
     *
     */
    public void selectProductDefinitionListByProductionOrder_YP(UiMapDto dto) throws Exception;
    
  
    /**
    * @brief : 재투입사유 조회
    * @remark
    * @Create Date: 2021. 03. 24
    * @Author: 방성혁
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 03. 24.   방성혁     최초  생성
     *
     */
    public void selectReinputReason(UiMapDto dto) throws Exception;
    
    /**
    * @brief : LOT 투입시 생성된 LOTID를 가져온다
    * @remark
    * @Create Date: 2021. 03. 24
    * @Author: 방성혁
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 03. 24.   방성혁     최초  생성
     *
     */
	public void getLotStartNo(UiMapDto dto) throws Exception;
	
    /**
    * @brief :  재투입사유조회
    * @remark
    * @Create Date: 2021. 03. 24
    * @Author: 방성혁
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 03. 24.   방성혁     최초  생성
     *
    */ 	
	
	public void selectReInputReason(UiMapDto dto) throws Exception;
	
	 /**
    * @brief :  saveReInputLot
    * @remark
    * @Create Date: 2021. 03.24
    * @Author: 방성혁
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 03. 24.   방성혁     최초  생성
     *
    */ 	
	
	public void saveReInputLot(UiMapDto dto) throws Exception;
		
    
 }