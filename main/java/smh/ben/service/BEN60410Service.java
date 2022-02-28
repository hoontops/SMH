package smh.ben.service;


import java.util.Map;

import com.nbdf.commons.ui.vo.UiMapDto;

public interface BEN60410Service {
    /**
    * @fn : selectCmdMessageList
    * @brief : 메시지리스트  조회
    * @Method Name : selectCmdMessageList
    * @remark
    * @Create Date: 2015 2015. 3. 10. 오후 5:00:21
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
    public void adjLifeExpenseList(UiMapDto dto) throws Exception;
 
    public void adjLifeExpenseDetail(UiMapDto dto) throws Exception;
    
    
    public void selectEmpList(UiMapDto dto) throws Exception;
    
    public void adjLifeCheckList(UiMapDto dto) throws Exception;
    
    
    public void deleteAdjLife(UiMapDto dto) throws Exception;
    
    
    public void insertAdjLife(UiMapDto dto) throws Exception;
    
    
}
