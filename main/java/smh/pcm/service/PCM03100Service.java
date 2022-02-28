package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM03100Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM03100Service
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
public interface PCM03100Service {

  
    /**
     * @brief : 
     * @remark
     * @Create Date: 2021.04.02
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.02.       김애리     최초  생성
      *
     */
    public void selectLotInfoByLotID(UiMapDto dto) throws Exception;
    
    /**
     * @brief :
     * @remark
     * @Create Date: 2021.04.02
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.02.       김애리     최초  생성
      *
     */
    public void selectLotGenealTreeList(UiMapDto dto) throws Exception;
    

    public void selectLotWorkHistoryList(UiMapDto dto) throws Exception;
    
    
    public void selectLotSplitMergeHistory(UiMapDto dto) throws Exception;
    
    
    public void selectProductSpecInfo(UiMapDto dto) throws Exception;

    
    public void selectLotHistoryDefectPop(UiMapDto dto) throws Exception;

 }