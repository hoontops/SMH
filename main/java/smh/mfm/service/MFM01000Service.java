package smh.mfm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
 * @file		: MFM01000Service.java
 * @Package		: smh.pcm.service
 * @Project name: IFC MES시스템 구축
 * @Type name	: MFM01000Service
 * @Company		: Built1
 * @Create Date	: 2021.05.21
 * @Author		: 김기수
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 05. 21.  김기수      최초  생성 
 */
public interface MFM01000Service {	

	public void selectDeliveryList(UiMapDto dto) throws Exception;
	//public void selectTactimeApplySTD(UiMapDto dto) throws Exception;
	
	public void saveDeliveryDate(UiMapDto dto) throws Exception;   
 }