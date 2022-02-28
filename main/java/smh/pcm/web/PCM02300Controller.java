package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM02300Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: PCM02300Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM02300Controller
* @Company: Built1
* @Create Date: 2021.04.28
* @Author: 김애리
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.04.28.    김애리     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/pcm02300")
public class PCM02300Controller extends AbstractWebController {

    @Autowired
    private PCM02300Service service;

    /**
    * @fn :   
    * @brief : 상단 Roll Lot 정보
    * @remark
    * @Create Date: 2021.04.28
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.04.28.   김애리     최초  생성
     *
    */ 
    @RequestMapping(value = "selectRollLotList.do")
    public View selectRollLotList(UiMapDto dto, Model model) throws Exception {
    	System.out.println("lucky selectRollLotList ************* !!!");
        service.selectRollLotList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn :   
    * @brief : 사용가능 Roll Lot 팝업
    * @remark
    * @Create Date: 2021.04.28
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.04.28.   김애리     최초  생성
     *
    */ 
    @RequestMapping(value = "selectConsumableLotListForRollLot.do")
    public View selectConsumableLotListForRollLot(UiMapDto dto, Model model) throws Exception {
    	System.out.println("lucky selectConsumableLotListForRollLot ************* !!!");
        service.selectConsumableLotListForRollLot(dto);
        return apply(dto, model);
    }
    

    /**
    * @fn :   
    * @brief : Lot No 채번
    * @remark
    * @Create Date: 2021.04.28
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.04.28.   김애리     최초  생성
     *
    */ 
    @RequestMapping(value = "selectLotIdMaxSequence.do")
    public View selectLotIdMaxSequence(UiMapDto dto, Model model) throws Exception {
    	System.out.println("lucky selectLotIdMaxSequence ************* !!!");
        service.selectLotIdMaxSequence(dto);
        return apply(dto, model);
    }
    
    
    /**
    * @fn :   
    * @brief : 화면 중간에, Roll lot 유효성 체크 그리드
    * @remark
    * @Create Date: 2021.04.28
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.04.28.   김애리     최초  생성
     *
    */ 
    @RequestMapping(value = "selectConsumableLotInfo.do")
    public View selectConsumableLotInfo(UiMapDto dto, Model model) throws Exception {
    	System.out.println("lucky selectConsumableLotInfo ************* !!!");
        service.selectConsumableLotInfo(dto);
        return apply(dto, model);
    }
    
    
    /**
    * @fn :   
    * @brief : 화면 하단 왼쪽 , 자재 투입 내역
    * @remark
    * @Create Date: 2021.04.28
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.04.28.   김애리     최초  생성
     *
    */ 
    @RequestMapping(value = "selectCreatedListByRollLotSplit.do")
    public View selectCreatedListByRollLotSplit(UiMapDto dto, Model model) throws Exception {
    	System.out.println("lucky selectCreatedListByRollLotSplit ************* !!!");
        service.selectCreatedListByRollLotSplit(dto);
        return apply(dto, model);
    }
    
    
    /**
    * @fn :   
    * @brief : 화면 하단 오른쪽 , ROLL LOT 투입 분할 이력
    * @remark
    * @Create Date: 2021.04.28
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.04.28.   김애리     최초  생성
     *
    */ 
    @RequestMapping(value = "selectCreatedLotListByRollLotSplit.do")
    public View selectCreatedLotListByRollLotSplit(UiMapDto dto, Model model) throws Exception {
    	System.out.println("lucky selectCreatedLotListByRollLotSplit ************* !!!");
        service.selectCreatedLotListByRollLotSplit(dto);
        return apply(dto, model);
    }
    
    

    /**
    * @fn :   
    * @brief : 저장
    * @remark
    * @Create Date: 2021.04.28
    * @Author: 김애리
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.04.28.   김애리     최초  생성
     *
    */ 
    @RequestMapping(value = "saveRollLotSplit.do")
    public View saveRollLotSplit(UiMapDto dto, Model model) throws Exception {
    	System.out.println("lucky saveRollLotSplit ************* !!!");
        service.saveRollLotSplit(dto);
        return apply(dto, model);
    }
    
}
