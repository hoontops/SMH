package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM01800Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM01800Service
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
public interface PCM01800Service {

	

    public void selectLotInfoByProcess(UiMapDto dto) throws Exception;
	
    /**
     * @brief : 작업시작
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
    public void getEquipmentByArea(UiMapDto dto) throws Exception;
	
    /**
     * @brief : 작업시작
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
    public void getEquipmentRecipeList(UiMapDto dto) throws Exception;
    
  
    /**
     * @brief : 작업시작
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
    public void selectDurableListByProcessWorkStartAndBOR(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 작업시작
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
    public void selectConsumableListByProcessWorkCompleteAndByProcess(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 작업시작
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
    public void getPriorityConsumableLotByProcess(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 작업시작
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
    public void getConsumableLotByProcess(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 작업시작
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
    public void getConsumableAlternativeLotByProcess(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 작업시작
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
    public void getWorkerByProcess(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 작업시작
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
    public void selectEquipmentRecipe(UiMapDto dto) throws Exception;
    
    
 }