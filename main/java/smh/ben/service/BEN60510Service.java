package smh.ben.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file         : BEN60510Service.java
* @Package      : smh.ben.service  
* @Project name : SM상선 myHR 고도화
* @Type name    : BEN60510Service    
* @Company      : Built1
* @Create Date  : 2022 2022. 1. 27. 오후 1:49:18 
* @Author       : Administrator
* @File Version : v1.0 
*
* << 개정이력(Modification Information) >>
* 수정일             수정자             수정내용
* ------------     ------------     ------------
* 2022. 1. 27.       Administrator      최초생성
*/
public interface BEN60510Service {
    
    public void selectCreditUnionList(UiMapDto dto) throws Exception;
}
