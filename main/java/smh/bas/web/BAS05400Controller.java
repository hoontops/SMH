package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS05400Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: BAS05400Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS05400Controller
* @Company: Built1
* @Create Date: 2021.05.06
* @Author: 김진현
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.05.06.    김진현     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/bas05400")
public class BAS05400Controller extends AbstractWebController {

    @Autowired
    private BAS05400Service service;

    /**
     * @fn : selectProductDefList
     * @brief : PCS이미지 관리 - 품목 팝업
     * @remark
     * @Create Date: 2021. 05. 06
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 05. 06.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "selectProductDefList.do")
      public View selectProductDefList(UiMapDto dto, Model model) throws Exception {
        service.selectProductDefList(dto);
        return apply(dto, model);
      }
    
    /**
     * @fn : selectPCSImageList
     * @brief : PCS이미지 관리 - 메인 그리드 조회
     * @remark
     * @Create Date: 2021. 05. 07
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 05. 06.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "selectPCSImageList.do")
      public View selectPCSImageList(UiMapDto dto, Model model) throws Exception {
        service.selectPCSImageList(dto);
        return apply(dto, model);
      }
    
    /**
     * @fn : savePcmImage
     * @brief : PCS이미지 관리 - 메인 그리드 저장
     * @remark
     * @Create Date: 2021. 05. 07
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 05. 07.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "savePcmImage.do")
      public View savePcmImage(UiMapDto dto, Model model) throws Exception {
        service.savePcmImage(dto);
        return apply(dto, model);
      }
    
    /**
     * @fn : savePCSImageSize
     * @brief : PCS이미지 관리 - 메인 그리드 저장(가로/세로)
     * @remark
     * @Create Date: 2021. 05. 07
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 05. 07.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "savePCSImageSize.do")
      public View savePCSImageSize(UiMapDto dto, Model model) throws Exception {
        service.savePCSImageSize(dto);
        return apply(dto, model);
      }
    
    
}
