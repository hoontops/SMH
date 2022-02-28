package smh.dfm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:DFM00500Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: DFM00500Service
* @Company: Built1
* @Create Date: 2021.04.19
* @Author: 김성현
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *    2021.04.19.  김성현   최초  생성
 *
 *
*/
public interface DFM00500Service {

	
    /**
     * @brief : 
     * @remark
     * @Create Date: 2021.03.12
     * @Author: 김성현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.12.       김성현     최초  생성
      *
     */
    public void getDefectRateByRepairNullList(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 
     * @remark
     * @Create Date: 2021.03.12
     * @Author: 김성현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.12.       김성현     최초  생성
      *
     */
    public void getDefectRateByRepairList(UiMapDto dto) throws Exception;

   
//    /**
//     * @brief : 
//     * @remark
//     * @Create Date: 2021.03.12
//     * @Author: 김성현
//     * @File Version: v1.0
//      *
//      * << 개정이력(Modification Information) >>
//      *
//      *     수정일      수정자   수정내용
//      *   ------------  ------  ----------
//      *   2021.03.12.       김성현     최초  생성
//      *
//     */
//    public void getAOIDefectCodeList(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 
     * @remark
     * @Create Date: 2021.03.12
     * @Author: 김성현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.12.       김성현     최초  생성
      *
     */
    public void getProcessByProductdef(UiMapDto dto) throws Exception;
    
   
    /**
     * @brief : 
     * @remark
     * @Create Date: 2021.03.12
     * @Author: 김성현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.12.       김성현     최초  생성
      *
     */
    public void getDefectRateByRepairNullDetailList(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 
     * @remark
     * @Create Date: 2021.03.12
     * @Author: 김성현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.12.       김성현     최초  생성
      *
     */
    public void getDefectRateByRepairDetailList(UiMapDto dto) throws Exception;
    
    
    /**
     * @brief : 
     * @remark
     * @Create Date: 2021.03.12
     * @Author: 김성현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.12.       김성현     최초  생성
      *
     */
    public void getDefectRateByRepairNullSeriesDetailList(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 
     * @remark
     * @Create Date: 2021.03.12
     * @Author: 김성현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.12.       김성현     최초  생성
      *
     */
    public void getDefectRateByRepairSeriesDetailList(UiMapDto dto) throws Exception;
    
//    /**
//     * @brief : 
//     * @remark
//     * @Create Date: 2021.03.12
//     * @Author: 김성현
//     * @File Version: v1.0
//      *
//      * << 개정이력(Modification Information) >>
//      *
//      *     수정일      수정자   수정내용
//      *   ------------  ------  ----------
//      *   2021.03.12.       김성현     최초  생성
//      *
//     */
//    public void getJoinLotList(UiMapDto dto) throws Exception;    
    
    
 }