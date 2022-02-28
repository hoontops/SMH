package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
 * @file		: PCM08700Service.java
 * @Package		: smh.pcm.service
 * @Project name: IFC MES시스템 구축
 * @Type name	: PCM08700Service
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
public interface PCM08700Service {

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
    public void selectOutsourceDistributionList(UiMapDto dto) throws Exception;
    
    //공정별 배분 현황
    public void selectOutsourcedDistributionPopup(UiMapDto dto) throws Exception;
    
    //Lot No별 공정 목록
    public void selectOutsourcedDistributionLotSegmentid(UiMapDto dto) throws Exception;
    
    //회사별 plant 정보 가져오기 
    public void selectPlantidInformatByCsm(UiMapDto dto) throws Exception;
    
    
    
    //RESOURCE 정보 저장
    public void saveResourceidListByOsp(UiMapDto dto) throws Exception;
    
    
    //RESOURCE 정보 가져오기
    public void selectResourceidListByOspList(UiMapDto dto) throws Exception;
    
    
    //Lot No. 확인 저장
    public void updateOutsourcedDistributionCheckSave(UiMapDto dto) throws Exception;
 }