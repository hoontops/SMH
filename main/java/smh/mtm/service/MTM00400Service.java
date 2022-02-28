package smh.mtm.service;

import java.util.Map;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file			: MTM00400Service.java
* @Package		: smh.bas.service  
* @Project 	: 인터플렉스 MES 구축
* @Type name	: MTM00400Service    
* @Company		: Built1
* @Create Date	: 2021. 3. 8. 오후 2:18:30 
* @Author		: sungmin.choe
* @File Version	: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일      수정자        수정내용
 *   ------------  ------       ----------
 *   2021. 3. 8.       김진현      최초  생성
 *
*/
public interface MTM00400Service {

    
  	/**
     * @fn : selectConsumableLotStatisticsList
     * @brief : 자재 현황 조회 main List조회
     * @Method Name : selectConsumableLotStatisticsList
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
    public void selectConsumableLotStatisticsList(UiMapDto dto) throws Exception;
    
    /**
     * @fn : selectItemMasterPopupList
     * @brief : 자재 현황 조회 detail List조회
     * @Method Name : selectItemMasterPopupList
     * @remark
     * @Create Date: 2021.3.09
     * @Author: sungmin.choe
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.3.09.     긴진현        최초  생성
      *
     */
    public void selectItemMasterPopupList(UiMapDto dto) throws Exception;  
    
    /**
     * @fn : selectConsumablelotStatisticsDetailInfoList
     * @brief : 자재 현황 조회 detail List조회
     * @Method Name : selectConsumablelotStatisticsDetailInfoList
     * @remark
     * @Create Date: 2021.3.09
     * @Author: sungmin.choe
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.3.09.     긴진현        최초  생성
      *
     */
    public void selectConsumablelotStatisticsDetailInfoList(UiMapDto dto) throws Exception;  

   
 
 }