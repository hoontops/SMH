package smh.ben.service;


import java.util.Map;

import com.nbdf.commons.ui.vo.UiMapDto;

public interface BEN60320Service {
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
    public void gonList(UiMapDto dto) throws Exception;
    
    
    public void gonDetailList(UiMapDto dto) throws Exception;
    
    public void addDetail(UiMapDto dto) throws Exception;
    
    public void deleteGon(UiMapDto dto) throws Exception;
    
    public void insertGon(UiMapDto dto) throws Exception;

}
