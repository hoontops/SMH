package smh.bas.service;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


/**
* @file: BAS02300ServiceImpl.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS02300ServiceImpl
* @Company: Built1
* @Create Date: 2021. 3. 1. 오후 4:29:40
* @Author: JinSungHa
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 3. 1.   진성하     최초  생성
*/
@Service
public class BAS02300ServiceImpl extends AbstractNbdfService implements BAS02300Service {

    public static final String NAMESAPCE = "smh.bas.dao.BAS02300Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief (Override method) 승인  수정, 등록, 삭제 기능
     * @remark - 승인 수정, 등록, 삭제 트랜젝션 처리
     * @see smh.bas.service.BAS02300Service#saveGroupCode(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void saveBasApproval(UiMapDto dto) throws Exception {
    	int result = 0;
    	
        DataSetMap dsMap = getParametersDataSetMap(dto,"INPUT");
        for (int i = 0, n = dsMap.size(); i < n; i++) {
            Map<String, Object> param = dsMap.get(i);
            if("Reject".equals(param.get("REQ_STATUS"))){
                param.put("APPROVALSTATUS", "Reject");
                param.put("GOVERNANACESTATUS", "Reject");
                result = generalDao.addUpdate(NAMESAPCE + ".updateBasApproval",param);
                param.put("RESULTS", "Reject");
                result = generalDao.addUpdate(NAMESAPCE + ".updateBasApprovaltransaction",param);
            }else if("Arbitrary".equals(param.get("REQ_STATUS"))){
                param.put("APPROVALSTATUS", "Approval");
                param.put("GOVERNANACESTATUS", "Approved");
                result = generalDao.addUpdate(NAMESAPCE + ".updateBasApproval2",param);
                param.put("RESULTS", "Arbitrary");
            	result = generalDao.addUpdate(NAMESAPCE + ".updateBasApprovaltransaction2",param);
            }else if("Approval".equals(param.get("REQ_STATUS"))){
                param.put("APPROVALSTATUS", "Approval");
                param.put("GOVERNANACESTATUS", "Approved");
                result = generalDao.addUpdate(NAMESAPCE + ".updateBasApproval",param);
                param.put("RESULTS", "Approval");
            	result = generalDao.addUpdate(NAMESAPCE + ".updateBasApprovaltransaction",param);
            }else if("Review".equals(param.get("REQ_STATUS"))){
                param.put("APPROVALSTATUS", "Review");
                param.put("GOVERNANACESTATUS", "Review");
                result = generalDao.addUpdate(NAMESAPCE + ".updateBasApproval",param);
                param.put("RESULTS", "Review");
            	result = generalDao.addUpdate(NAMESAPCE + ".updateBasApprovaltransaction",param);
            }
        }
        putDataSetMap(dto, result);
    }
    
    /**
     * @fn
     * @brief (Override method) ID 패턴 그룹 조회
     * @remark [조회] 버튼 클릭시 호출
     * @see smh.bas.service.BAS02300Service#selectBasApprovalList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectBasApprovalList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectBasApprovalList", param));
    }


    /**
     * @fn
     * @brief (Override method) 승인 처리결과 조회
     * @remark  [조회] 버튼 클릭시 호출
     * @see smh.bas.service.BAS02300Service#selectBasApprovaltransactionList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectBasApprovaltransactionList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectBasApprovaltransactionList", param));
    }


}