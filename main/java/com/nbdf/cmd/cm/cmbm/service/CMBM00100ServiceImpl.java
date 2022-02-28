package com.nbdf.cmd.cm.cmbm.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.interceptor.ContextConstant;
import com.nbdf.commons.interceptor.SessionManager;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

/***
* @file: CMBM00100ServiceImpl.java 
* @Package: com.nbdf.cmd.cm.cmbs.service
* @Project name: IFC MES시스템 구축
* @Type name: CMBM00100ServiceImpl
* @Company: Jeong Jun Myeong
* @Create Date: 2015. 6. 23. 오전 9:15:21
* @Author: Jeong Jun Myeong
* @File Version: v1.01
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 6. 23.        Jeong Jun Myeong     최초  생성 1
 *
*/
@Service
public class CMBM00100ServiceImpl extends AbstractNbdfService implements CMBM00100Service {

    private UiMapDto dto;

    public static final String NAMESPACE = "com.nbdf.cmd.cm.cmbm.dao.CMBM00100Dao";

   @Autowired
    private GeneralDao generalDao;

   
    /** 고객번호 조회
     * @see com.drens.dr.CMBM.service.CMBM00100Service#selectCustMst(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectCustMst(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);

        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectCustMst", param);
        if(list.size() > 0){
        	int cnt = generalDao.selectOne(NAMESPACE + ".selectDrcrCustMstConnt", param);
        	list.get(0).put("TOTAL_ROWS", cnt);
        }
        
        putDataSetMap(dto, list);
    }

    /**
     * @fn
     * @brief (Override method) 고객센터 combo용 조회
     * @remark
     * - 고객센터 combo용 조회
     * @see com.drens.dr.drcr.service.DRCR00000Service#selectCboCenterList(com.nbdf.commons.ui.vo.UiMapDto)
     */   
     public void selectCboCenterList(UiMapDto dto) throws Exception {
         Map<String, Object> param = getParametersMap(dto);
         List<Map<String, Object>> list = null;
         list = generalDao.addSelect(NAMESPACE + ".selectCboCenterList", param);
         putDataSetMap(dto, list);
     }

     /**
     * @fn
     * @brief (Override method) 행정동 combo용 조회
     * @remark
     * - 행정동 combo용 조회
     * @see com.drens.dr.drcr.service.DRCR00000Service#selectCboHaengjeongDongList(com.nbdf.commons.ui.vo.UiMapDto)
     */   
     public void selectCboHaengjeongDongList(UiMapDto dto) throws Exception {
         Map<String, Object> param = getParametersMap(dto);
         List<Map<String, Object>> list = null;
         list = generalDao.addSelect(NAMESPACE + ".selectCboHaengjeongDongList", param);
         putDataSetMap(dto, list);
     }    
     /**
     * @fn
     * @brief (Override method) 행정동 combo용 조회
     * @remark
     * - 행정동 combo용 조회
     * @see com.drens.dr.drcr.service.DRCR00000Service#insertPiLogHistoryOfExcelDn(com.nbdf.commons.ui.vo.UiMapDto)
     */   
     public void insertPiLogHistoryOfExcelDn(UiMapDto dto) throws Exception {
		 Map<String, Object> param = getParametersMap(dto);
		 String workMan = (String)SessionManager.getInstance().getSessionInfo(ContextConstant.SESSION_USER_ACNT)
				   +"("+(String)SessionManager.getInstance().getSessionInfo(ContextConstant.SESSION_USER_NM)+")";
		 String ipAddress = (String)SessionManager.getInstance().getSessionInfo(ContextConstant.SESSION_IP_ADDR);
		 
		 param.put("IP_ADDRESS", ipAddress);
		 param.put("WORK_MAN", workMan);
		 int cnt = generalDao.addInsert(NAMESPACE + ".insertPiLogHistoryOfExcelDn", param);
		 putDataSetMap(dto, cnt);
     }    
}
