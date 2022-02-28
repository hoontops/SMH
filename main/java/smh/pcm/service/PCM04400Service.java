package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM04400Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM04400Service
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
public interface PCM04400Service {

  
    /**
     * @brief : 불량 코드 조회
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
    public void selectDefectCodeList4Popup(UiMapDto dto) throws Exception;
    

    /**
     * @brief : 전체 불량 처리
     * @remark
     * @Create Date: 2021.04.12
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.12.       김애리     최초  생성
      *
     */
    public void saveDefectAll(UiMapDto dto) throws Exception;
    
    /**
    * @brief : Lot별 불량 처리
    * @remark
    * @Create Date: 2021.04.12
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.04.12.       김애리     최초  생성
     *
    */
    public void saveDefectLot(UiMapDto dto) throws Exception;
   
   
    
 }