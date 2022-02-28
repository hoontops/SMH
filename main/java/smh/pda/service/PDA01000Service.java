package smh.pda.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PDA00600Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PDA00600Service
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
public interface PDA01000Service {

	
    public void selectLotInfoBylotIDbyAreaAuthority(UiMapDto dto) throws Exception;
	
 }