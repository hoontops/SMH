package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS03600Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: BAS03600Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS03600Controller
* @Company: Built1
* @Create Date: 2021.2.1
* @Author: 김기수
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 16.    김기수     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/bas03600")
public class BAS03600Controller extends AbstractWebController {

    @Autowired
    private BAS03600Service service;

    /**
    * @fn : selectBasMaterialUseProduct
    * @brief : 자원 사용 품목을 조회 한다,.
    * @remark
    * @Create Date: 2021. 3. 15
    * @Author:  김기수
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 16.     김기수     최초  생성
     *
    */
    @RequestMapping(value = "selectBasMaterialUseProduct.do")
    public View selectBasMaterialUseProduct(UiMapDto dto, Model model) throws Exception {
        service.selectBasMaterialUseProduct(dto);
        return apply(dto, model);
    }


    @RequestMapping(value = "selectMaterialPopupList.do")
    public View selectMaterialPopupList(UiMapDto dto, Model model) throws Exception {
        service.selectMaterialPopupList(dto);
        return apply(dto, model);
    }
    
    
   //로컬에서 서버 기동되는 지, 오류확인후  후 커밋 해주세요.  --Local 확인 완료.(김기수)
    @RequestMapping(value = "selectBasMaterialUseProductAll.do")
    public View selectBasMaterialUseProductAll(UiMapDto dto, Model model) throws Exception {
        service.selectBasMaterialUseProductAll(dto);
        return apply(dto, model);
    }
    
}
