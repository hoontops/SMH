package smh.mtm.service;

import java.util.Map;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file			: BASCommonService.java
* @Package		: smh.bas.service  
* @Project 	: 인터플렉스 MES 구축
* @Type name	: BASCommonService    
* @Company		: Built1
* @Create Date	: 2021. 3. 5. 오후 2:18:30 
* @Author		: sungmin.choe
* @File Version	: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일      수정자        수정내용
 *   ------------  ------       ----------
 *   2021. 3. 5.       김진현      최초  생성
 *
*/
public interface MTMCommonService {

    public void selectCustomQuery(UiMapDto dto) throws Exception;  

    
    // 창고명 조회 (GetWarehouseidListByCsm)
  	public void selectWhNmPopupList(UiMapDto dto) throws Exception;
  	
  	/**
     * @fn : selectConsumableList
     * @brief : 자재 현황 조회 자재명 팝업 리스트 조회
     * @Method Name : selectConsumableList
     * @remark
     * @Create Date: 2021.3.08
     * @Author: sungmin.choe
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.3.08.     긴진현        최초  생성
      *
     */
    public void selectConsumableList(UiMapDto dto) throws Exception;  

    public void selectRequestType(UiMapDto dto) throws Exception;
    
 
 }