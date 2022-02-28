package smh.qam.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.qam.service.QAM01400Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

/**
 * @file: QAM01400Controller.java
* @Package: smh.qam.service
 * @Project name: IFC MES시스템 구축
 * @Type name: QAM01400Controller
 * @Company: Built1
 * @Create Date: 2021.06.17
 * @Author: 권혜영
 * @File Version: v1.0
 *
 *       << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.06.17       권혜영     최초  생성
 *
 */
@Controller
@RequestMapping(value = "/qam01400")
public class QAM01400Controller extends AbstractWebController {

	@Autowired
	private QAM01400Service service;

	/**
	 * @fn : selectQamOverallStatusList
	 * @brief : 종합현황 조회 > 월별 LRR 조회
	 * @remark
	 * @Create Date: 2021.06.17
	 * @Author: 권혜영
	 * @File Version: v1.0
	 *
	 * << 개정이력(Modification Information) >>
	  *
	  *     수정일      수정자   수정내용
	  *   ------------  ------  ----------
	  *   2021.06.17.       권혜영     최초  생성
	 *
	 */
	@RequestMapping(value = "selectQamOverallStatusList.do")
	public View selectQamOverallStatusList(UiMapDto dto, Model model) throws Exception {
		service.selectQamOverallStatusList(dto);
		return apply(dto, model);
	}

    /**
    * @fn : selectQamOverallStatusDetailList
    * @brief : 종합현황 조회 > 일별 LRR 조회
    * @remark
    * @Create Date: 2021.06.22
    * @Author: 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.06.22.       권혜영     최초  생성
    *
    */
    @RequestMapping(value = "selectQamOverallStatusDetailList.do")
    public View selectQamOverallStatusDetailList(UiMapDto dto, Model model) throws Exception {
        service.selectQamOverallStatusDetailList(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectQamOverallStatusVendorMonList
    * @brief : 업체별 현황(월) 조회
    * @remark
    * @Create Date: 2021.06.22
    * @Author: 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.06.22.       권혜영     최초  생성
    *
    */
    @RequestMapping(value = "selectQamOverallStatusVendorMonList.do")
    public View selectQamOverallStatusVendorMonList(UiMapDto dto, Model model) throws Exception {
        service.selectQamOverallStatusVendorMonList(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectQamOverallStatusVendorDateList
    * @brief : 업체별 현황(일) 조회
    * @remark
    * @Create Date: 2021.06.22
    * @Author: 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.06.22.       권혜영     최초  생성
    *
    */
    @RequestMapping(value = "selectQamOverallStatusVendorDateList.do")
    public View selectQamOverallStatusVendorDateList(UiMapDto dto, Model model) throws Exception {
        service.selectQamOverallStatusVendorDateList(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectQamOverallStatusItemList
    * @brief : 품목별 현황 조회
    * @remark
    * @Create Date: 2021.06.22
    * @Author: 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.06.22.       권혜영     최초  생성
    *
    */
    @RequestMapping(value = "selectQamOverallStatusItemList.do")
    public View selectQamOverallStatusItemList(UiMapDto dto, Model model) throws Exception {
        service.selectQamOverallStatusItemList(dto);
        return apply(dto, model);
    }
    
	/**
	* @fn : selectQamOverallStatusProductDefList
	* @brief : 품목별 현황 조회
	* @Method Name : selectQamOverallStatusProductDefList
	* @remark
	* @Create Date: 2021.07.15
	* @Author: yanghee.kim
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.07.15.       yanghee.kim     최초  생성
	*
	*/
    @RequestMapping(value = "selectQamOverallStatusProductDefList.do")
    public View selectQamOverallStatusProductDefList(UiMapDto dto, Model model) throws Exception {
        service.selectQamOverallStatusProductDefList(dto);
        return apply(dto, model);
    }
}