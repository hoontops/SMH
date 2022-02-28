package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM02400Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM02400Service
* @Company: Built1
* @Create Date: 2021.04.30
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.04.30.  박대호   최초  생성
 *
 *
*/
public interface PCM02400Service {

	
	/**
     * @brief : Roll Cut 인계 분할 조회
     * @remark
     * @Create Date: 2021.04.30
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.30.       박대호     최초  생성
      *
     */
    public void selectRollCuttingTarget(UiMapDto dto) throws Exception;
    /**
     * @brief : 인계자원 콤보조회
     * @remark
     * @Create Date: 2021.04.30
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.30.       박대호     최초  생성
      *
     */
    public void selectTransitAreaList(UiMapDto dto) throws Exception;
    /**
     * @brief : LotList 생성 조회
     * @remark
     * @Create Date: 2021.05.03
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.05.03.       박대호     최초  생성
      *
     */
    public void selectLotIdMaxSequence_Rollcut(UiMapDto dto) throws Exception;
    
    /**
     * @brief : Roll Cut 인계 분할 저장
     * @remark
     * @Create Date: 2021.04.30
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.30.       박대호     최초  생성
      *
     */
    public void saveRollCutiing(UiMapDto dto) throws Exception;
    

    
 }