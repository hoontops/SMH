package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM05200Service.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM05200Service
* @Company: Built1
* @Create Date: 2021.04.19
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 19.  박대호   최초  생성
 *
 *
*/
public interface PCM05200Service {

  
    /**
     * @brief : 중공정 콤보조회
     * @remark
     * @Create Date: 2021.04.19
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.19.       박대호     최초  생성
      *
     */
    public void selectProcessSegmentClassByType(UiMapDto dto) throws Exception;
    /**
     * @brief : 공정텝 조회
     * @remark
     * @Create Date: 2021.04.22
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.22.       박대호     최초  생성
      *
     */
    public void selectStockbyprocessList(UiMapDto dto) throws Exception;
    /**
     * @brief : 품목텝 조회
     * @remark
     * @Create Date: 2021.04.23
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.23.       박대호     최초  생성
      *
     */
    public void selectStockbyProductList(UiMapDto dto) throws Exception;
    
 }