package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM06100Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM06100Service
* @Company: Built1
* @Create Date: 2021.03.30
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 30.  박대호   최초  생성
 *
 *
*/
public interface PCM06100Service {

  
    /**
     * @brief : 대공정, 중공정팝업 조회 
     * @remark
     * @Create Date: 2021.03.30
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.30.       박대호     최초  생성
      *
     */
    public void getProcessSegmentClass(UiMapDto dto) throws Exception;
    
    
    /**
     * @brief : 작업장별 실적현황 조회 (작업장)
     * @remark
     * @Create Date: 2021.06.10
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.06.10.       박대호     최초  생성
      *
     */
    public void selectWorkResultByareaList(UiMapDto dto) throws Exception;
    /**
     * @brief : 작업장별 실적현황 조회 (품목)
     * @remark
     * @Create Date: 2021.06.10
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.06.10.       박대호     최초  생성
      *
     */
    public void selectWorkResultByproductList(UiMapDto dto) throws Exception;
    /**
     * @brief : 작업장별 실적현황 조회 (LOT)
     * @remark
     * @Create Date: 2021.03.30
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.30.       박대호     최초  생성
      *
     */
    public void selectWorkResultBylotList(UiMapDto dto) throws Exception;
    
 }