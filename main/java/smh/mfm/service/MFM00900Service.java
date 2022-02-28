package smh.mfm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
 * @file		: MFM00800Service.java
 * @Package		: smh.pcm.service
 * @Project name: IFC MES시스템 구축
 * @Type name	: MFM00200Service
 * @Company		: Built1
 * @Create Date	: 2021.04.15
 * @Author		: 박현우
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 04. 15.  김진현      최초  생성 
 */
public interface MFM00900Service {	

	public void selectDispatchingItemList(UiMapDto dto) throws Exception;
	public void selectPriorityOfDispatchingItemList(UiMapDto dto) throws Exception;
	public void selectLotListSetDispatchingItemSimulation(UiMapDto dto) throws Exception;
	
	public void saveDispatching(UiMapDto dto) throws Exception;   
 }