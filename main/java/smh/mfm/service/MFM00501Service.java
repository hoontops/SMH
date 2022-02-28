package smh.mfm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
 * @file		: MFM00400Service.java
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
public interface MFM00501Service {	

	public void selectLoadPredictionPerRecordTotalList(UiMapDto dto) throws Exception;

	public void selectLoadPredictionPerRecordList(UiMapDto dto) throws Exception;
 }