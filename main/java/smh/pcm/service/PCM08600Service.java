package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
 * @file		: PCM08600Service.java
 * @Package		: smh.pcm.service
 * @Project name: IFC MES시스템 구축
 * @Type name	: PCM08600Service
 * @Company		: Built1
 * @Create Date	: 2021.2.1
 * @Author		: 박현우
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 2. 10.  박현우      최초  생성 
 */
public interface PCM08600Service {

    /**
     * @fn : 
     * @brief : 공정관리물류창고 입고 조회 (넥사크로)
     * @Method Name : selectOutSourceWarehouseWare
     * @Create Date: 2017. XX. XX. 오전 9:12:16
     * @Author: built1
     * @param: UiMapDto dto, Model model
     * @return: View
     * @throws : Exception
     */	
    public void selectOutSourceWarehouseShipment(UiMapDto dto) throws Exception;
    
    /**
     * @fn : 
     * @brief : 공정관리물류창고 입고 저장
     * @Method Name : saveOutSourceWarehouseWare
     * @Create Date: 2017. XX. XX. 오전 9:12:16
     * @Author: built1
     * @param: UiMapDto dto, Model model
     * @return: View
     * @throws : Exception
     */	
    public void saveOutSourceWarehouseShipment(UiMapDto dto) throws Exception;  
    
 }