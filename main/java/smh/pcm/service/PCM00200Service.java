package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM00200Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM00200Service
* @Company: Built1
* @Create Date: 2021.03.04
* @Author: 김애리
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 4.  김애리   최초  생성
 *
 *
*/
public interface PCM00200Service {

    /**
    * @brief : 단가 테이블 목록 조회
    * @remark
    * @Create Date: 2021.03.04
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.03.04.       김애리     최초  생성
     *
    */
    public void selectUnitPriceList(UiMapDto dto) throws Exception;
         
    /**
     * @brief : 화폐 콤보 데이타 조회
     * @remark
     * @Create Date: 2021.03.05
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.05.       김애리     최초  생성
      *
     */
    public void selectCurrencies(UiMapDto dto) throws Exception;

    /**
     * @brief : 단가 테이블 목록 저장 
     * @remark
     * @Create Date: 2021.03.04
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.04.       김애리     최초  생성
      *
     */
	public void saveUnitPrice(UiMapDto dto) throws Exception;
  
 }