package smh.bas.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file			: BASCommonService.java
* @Package		: smh.bas.service  
* @Project 	: 인터플렉스 MES 구축
* @Type name	: BASCommonService    
* @Company		: Built1
* @Create Date	: 2021. 2. 2. 오후 4:35:30 
* @Author		: sungmin.choe
* @File Version	: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일      수정자        수정내용
 *   ------------  ------       ----------
 *   2021. 2. 2.       sungmin.choe      최초  생성
 *
*/
public interface BASCommonService {

    public void selectCustomQuery(UiMapDto dto) throws Exception;  

 
 }