package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.BigDataUtil;
import com.nbdf.commons.web.support.AbstractWebController;
import com.nexacro17.xeni.export.impl.GridExportExcel;

import smh.bas.service.BAS03700Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: BAS03700Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS03700Controller
* @Company: Built1
* @Create Date: 2021.2.1
* @Author: 김기수
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 2. 1.    김기수     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/bas03700")
public class BAS03700Controller extends AbstractWebController {

    @Autowired
    private BAS03700Service service;

    /**
    * @fn : selectBasBOMList
    * @brief : BOM 소요량 조회
    * @remark
    * @Create Date: 2021. 3. 5
    * @Author:  김기수
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 5.     김기수     최초  생성
     *
    */
    @RequestMapping(value = "selectBasBOMList.do")
    public View selectBasBOMList(UiMapDto dto, Model model) throws Exception {
        service.selectBasBOMList(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectBasBOMList
    * @brief : BOM 소요량 조회
    * @remark
    * @Create Date: 2021. 3. 5
    * @Author:  김기수
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 5.     김기수     최초  생성
     *
    */
    @RequestMapping(value = "selectBasBOMListExcel.do")
    public View selectBasBOMListExcel(UiMapDto dto, Model model) throws Exception {
    	GridExportExcel exporter =  BigDataUtil.bigDataExporter(dto, "IFC");
    	if( exporter != null ) {
    		service.selectBasBOMListExcel(dto);
         }
         model.addAttribute("BIG_DATA_EXPORTER", exporter);
         return bigDataApply(dto, model);
    }
    
    /**
     * @fn : selectBasAllCount
     * @brief : BOM 전체row Count
     * @remark
     * @Create Date: 2021. 3. 16
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
     @RequestMapping(value = "selectBasAllCount.do")
     public View selectBasAllCount(UiMapDto dto, Model model) throws Exception {
    	 service.selectBasAllCount(dto);
         return apply(dto, model);
     }

}
