package com.nbdf.cmd.cm.cmsa.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;
import com.nbdf.cmd.cm.cmsa.service.CMSA01200Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: CMSA01200Controller.java
* @Package: com.nbdf.ecm.cm.cmsa.web;
* @Project name: IFC MES시스템 구축
* @Type name: CMSA01200Controller
* @Company: Built1
* @Create Date: 2015 2015. 3. 9. 오후 7:36:19
* @Author: 진성하
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일      수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 3. 10.  진성하   최초 생성
 **/

@Controller
@RequestMapping(value = "/cmsa01200/")
public class CMSA01200Controller extends AbstractWebController {

    @Autowired
    private CMSA01200Service service;

    /**
    * @fn : selectAtchFileDnList
    * @brief : 파일 다운로드 리스트 조회
    * @Method Name : selectAtchFileDnList
    * @remark
    * @Create Date: 2015 2015. 3. 10. 오후 4:58:04
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 10.       진성하     최초  생성
     *
    */
    @RequestMapping(value = "selectAtchFileList")
    public View selectAtchFileList(UiMapDto dto, Model model) throws Exception {
        service.selectAtchFileList(dto);
        return apply(dto, model);
    }

    /**
    * @fn : updateAtchFiles
    * @brief : 첨부파일 내용 저장
    * @Method Name : updateAtchFiles
    * @remark
    * @Create Date: 2015 2015. 3. 10. 오후 4:58:04
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 10.       진성하     최초  생성
     *
    */
    @RequestMapping("updateAtchFiles")
    public View updateAtchFiles(UiMapDto dto, Model model) throws Exception {
        service.updateAtchFiles(dto);
        return apply(dto, model);
    }

    /**
    * @fn : deleteFile
    * @brief : 첨부파일 내용 삭제
    * @Method Name : deleteFile
    * @remark
    * @Create Date: 2015 2015. 3. 10. 오후 4:58:04
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 10.       진성하     최초  생성
     *
    */
    @RequestMapping("deleteFile")
    public View deleteFile(UiMapDto dto, Model model) throws Exception {
        service.deleteFile(dto);
        return apply(dto, model);
    }

    /**
     * @fn : deleteFile
     * @brief : 키,테이블명에 대한 모든파일 삭제
     * @Method Name : deleteFile
     * @remark
     * @Create Date: 2015 2015. 3. 30. 오전 10:04:25
     * @Author: 진성하
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 30.        진성하     최초  생성
     *
     */
    @RequestMapping(value = "deleteFile2.do")
    public View deleteFile2(UiMapDto dto, Model model)  throws Exception {
    	service.deleteFile2(dto);
    	return apply(dto, model);
    }
}