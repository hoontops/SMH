package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM00800Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM00800Service
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
public interface PCM00800Service {

  
    /**
     * @brief : 제품 버전 콤보 데이타 조회
     * @remark
     * @Create Date: 2021.03.09
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.09.       김애리     최초  생성
      *
     */
    public void selectProductVersion(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 투입 실적 탭 조회 
     * @remark
     * @Create Date: 2021.03.09
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.09.       김애리     최초  생성
      *
     */
    public void selectInputResultByInputDay(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 품목별 투입 실적 탭 조회 
     * @remark
     * @Create Date: 2021.03.09
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.09.       김애리     최초  생성
      *
     */
    public void selectInputResultbyProduct(UiMapDto dto) throws Exception;
    
    /**
     * @brief : Lot별 투입 실적 탭 조회 
     * @remark
     * @Create Date: 2021.03.09
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.09.       김애리     최초  생성
      *
     */
    public void selectInputResultByLot(UiMapDto dto) throws Exception;
  
 }