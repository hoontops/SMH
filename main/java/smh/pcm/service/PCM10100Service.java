package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM10100Service.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM10100Service
* @Company: Built1
* @Create Date: 2021.6.15
* @Author: 방성혁
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 2. 22.  방성혁   최초  생성
 *
 *
*/
public interface PCM10100Service {

    /**
    * @fn :  selectInfPcmWipSubulList
    * @brief :재공 수불부 조회
    * @remark
    * @Create Date: 2021. 6. 15
    * @Author: 방성혁
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *       수정일      수정자      수정내용
     *   ------------  ------  ----------
     *   2021. 6. 15.   방성혁     최초  생성
     *
    */ 
    public void selectInfPcmWipSubulList(UiMapDto dto) throws Exception;
    
   
 }