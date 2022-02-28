package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM03000Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM03000Service
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
public interface PCM03000Service {

  
    /**
     * @brief : 제품 버전 콤보 데이타 조회
     * @remark
     * @Create Date: 2021.03.29
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.29.       김애리     최초  생성
      *
     */
    public void selectProductVersion(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 품목 탭 조회 
     * @remark
     * @Create Date: 2021.03.29
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.29.       김애리     최초  생성
      *
     */
    public void selectProductDefinitionList(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 공정 탭 조회 
     * @remark
     * @Create Date: 2021.03.29
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.29.       김애리     최초  생성
      *
     */
    public void selectProcessSegmentList(UiMapDto dto) throws Exception;
    
    /**
     * @brief : Lot 탭 조회 
     * @remark
     * @Create Date: 2021.03.29
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.29.       김애리     최초  생성
      *
     */
    public void selectWipLotMessageList(UiMapDto dto) throws Exception;
  
    /**
    * @brief : 전달 공정 팝업 조회
    * @remark
    * @Create Date: 2021.03.30
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.03.30.       김애리     최초  생성
     *
    */
   public void selectProcessPathByProductDef(UiMapDto dto) throws Exception;
   
   /**
    * @brief : 품목 탭 저장
    * @remark
    * @Create Date: 2021.03.30
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.03.30.       김애리     최초  생성
     *
    */
   public void saveProductDefInfo(UiMapDto dto) throws Exception;
   
   /**
    * @brief : 공정 탭 저장
    * @remark
    * @Create Date: 2021.03.30
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.03.30.       김애리     최초  생성
     *
    */
   public void saveSegmentInfo(UiMapDto dto) throws Exception;
   
   /**
    * @brief : LOT 탭 저장
    * @remark
    * @Create Date: 2021.03.30
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.03.30.       김애리     최초  생성
     *
    */
   public void saveTargetWip(UiMapDto dto) throws Exception;
   
 }