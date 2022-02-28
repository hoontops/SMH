package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
 * @file		: PCM08900Service.java
 * @Package		: smh.pcm.service
 * @Project name: IFC MES시스템 구축
 * @Type name	: PCM08800Service
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
public interface PCM08900Service { 

    //외주창고입출고현황(수입검사의뢰)
    public void selectOutboundwarehouseStatusInspectList(UiMapDto dto) throws Exception;
 }