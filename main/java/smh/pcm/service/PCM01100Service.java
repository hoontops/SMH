package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM01100Service.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM01100Service
* @Company: Built1
* @Create Date: 2021.04.26
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 26.  박대호   최초  생성
 *
 *
*/
public interface PCM01100Service {

  
    /**
     * @brief : 계획대비 투입 실적 조회 
     * @remark
     * @Create Date: 2021.04.26
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.26.       박대호     최초  생성
      *
     */
    public void selectInputLotRecordPerPlanChartResult(UiMapDto dto) throws Exception;
    /**
     * @brief : 계획대비 투입 실적 디테일조회
     * @remark
     * @Create Date: 2021.04.28
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.28.       박대호     최초  생성
      *
     */
    public void selectinputlotrecordperplangridDetail(UiMapDto dto) throws Exception;
    
 }