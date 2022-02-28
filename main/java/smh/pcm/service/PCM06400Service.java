package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM06400Service.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM06400Service
* @Company: Built1
* @Create Date: 2021.06.07
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 6. 07.  박대호   최초  생성
 *
 *
*/
public interface PCM06400Service {

  
    /**
     * @brief : 승인자 팝업
     * @remark
     * @Create Date: 2021.06.07
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.06.07.       박대호     최초  생성
      *
     */
    public void selectUserList(UiMapDto dto) throws Exception;
    /**
     * @brief : 재작업이력 조회
     * @remark
     * @Create Date: 2021.06.08
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.06.08.       박대호     최초  생성
      *
     */
    public void selectReworkHistory(UiMapDto dto) throws Exception;
    /**
     * @brief : 재작업 이력 팝업
     * @remark
     * @Create Date: 2021.06.08
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.06.08.       박대호     최초  생성
      *
     */
    public void selectCommentByProcess(UiMapDto dto) throws Exception;
    /**
     * @brief : 재작업 승인
     * @remark
     * @Create Date: 2021.06.08
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.06.08.       박대호     최초  생성
      *
     */
    public void saveReworkHistory(UiMapDto dto) throws Exception;
    
 }