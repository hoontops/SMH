package smh.qam.service;

import com.nbdf.com.StringUtils;
import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.interceptor.ContextConstant;
import com.nbdf.commons.interceptor.SessionManager;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

import egovframework.rte.fdl.string.EgovObjectUtil;
import smh.commons.TxnHistKey;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
* @file        : QAM01700ServiceImpl.java
* @Package     : smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name   : QAM01700ServiceImpl
* @Company     : Built1
* @Create Date : 2021.04.06
* @Author      : yanghee.kim
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.04.06  yanghee.kim    최초  생성
*
*/
@Service
public class QAM01700ServiceImpl extends AbstractNbdfService implements QAM01700Service {

    public static final String NAMESPACE = "smh.qam.dao.QAM01700Dao";
    public static final String NAMESPACE1 = "com.nbdf.cmd.cm.cmsa.dao.CMSA00302Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn          : selectGetDefectLotList
    * @brief       : (Override method) 불량 LOT 조회
    * @Method Name : selectGetDefectLotList
    * @remark      : 상세설명
* @see smh.qam.service.QAM01700Service#selectGetDefectLotList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectGetDefectLotList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectGetDefectLotList", param));
    }

    /**
    * @fn          : selectGetInboundDefectLotList
    * @brief       : (Override method) 인수처리한 불량 LOT 조회
    * @Method Name : selectGetInboundDefectLotList
    * @remark      : 상세설명
* @see smh.qam.service.QAM01700Service#selectGetInboundDefectLotList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectGetInboundDefectLotList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectGetInboundDefectLotList", param));
    }

    /**
    * @fn          : selectGetDefectLotDefectCodeInfo
    * @brief       : (Override method)LOT별 불량
    * @Method Name : selectGetInboundDefectLotList
    * @remark      : 상세설명
* @see smh.qam.service.QAM01700Service#selectGetDefectLotDefectCodeInfo(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectGetDefectLotDefectCodeInfo(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectGetDefectLotDefectCodeInfo", param));
    }

    /**
    * @fn          : selectGetInbountDefectLotStateList
    * @brief       : (Override method) LOT 상태확인
    * @Method Name : selectGetInbountDefectLotStateList
    * @remark      : 상세설명
* @see smh.qam.service.QAM01700Service#selectGetInbountDefectLotStateList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectGetInbountDefectLotStateList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectGetInbountDefectLotStateList", param));
    }
    /**
    * @fn          : saveLotDefectInbound
    * @brief       : (Override method) 불량품 인수 등록/수정/삭제 Call
    * @Method Name : saveLotDefectInbound
    * @remark      : 상세설명
* @see smh.qam.service.QAM01700Service#saveLotDefectInbound(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void saveLotDefectInbound(UiMapDto dto) throws Exception {
        DataSetMap paramMap = getParametersDataSetMap(dto);
        Map<String, Object> param;

        int result = 0;

        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);

            List<Map<String, Object>> idList = generalDao.addSelect(NAMESPACE + ".selectLotIdChk", param);

            if(idList.size() > 0)
            {
                // ValidState가 Invalid이거나 값이 없으면 Valid처리
                if ("Invalid".equals(param.get("VALIDSTATE")) || StringUtils.isEmpty(param.get("VALIDSTATE").toString()))
                {
                    result += updateQamQclotdefectinbound(param);
                }
            }
            else
            {
                result += insertQamQclotdefectinbound(param);
            }
        }

        putDataSetMap(dto, result);
    }

    /**
    * @fn          : insertQcOspRequestInsp
    * @brief       : (Override method) 불량품 인수 등록
    * @Method Name : insertQcOspRequestInsp
    * @remark      : 상세설명
    * @see
    */
    private int insertQamQclotdefectinbound(Map<String, Object> param) throws Exception{
        Map<String, Object> paramMap = new HashMap<String, Object>();

        //HashMap Copy
        for (Map.Entry<String, Object> entry : param.entrySet()) {
            paramMap.put(entry.getKey(), entry.getValue());
        }

        List<Map<String, Object>> systemDate = generalDao.addSelect(NAMESPACE1 + ".selectCurrentSystemTime", "");
        String sToday = systemDate.get(0).get("TODATE").toString();
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMddHHmmss");
        Date nowDate = dateFormat.parse(sToday);
        
        paramMap.put("RECEIVETIME",     nowDate);
        paramMap.put("RECEIVEUSER",     paramMap.get("INBOUNDUSER"));
        paramMap.put("STATUS",          "InboundComplete");
        paramMap.put("INTERFACESTATUS", "None");
        paramMap.put("VALIDSTATE",      "Valid");

        return generalDao.addUpdate(NAMESPACE + ".insertQamQclotdefectinbound", paramMap);
    }

    /**
    * @fn          : updateQamQclotdefectinbound
    * @brief       : (Override method) 불량품 인수
    * @Method Name : updateQamQclotdefectinbound
    * @remark      : 상세설명
    * @see
    */
    private int updateQamQclotdefectinbound(Map<String, Object> param) throws Exception{
        Map<String, Object> paramMap = new HashMap<String, Object>();

        //HashMap Copy
        for (Map.Entry<String, Object> entry : param.entrySet()) {
            paramMap.put(entry.getKey(), entry.getValue());
        }

        List<Map<String, Object>> systemDate = generalDao.addSelect(NAMESPACE1 + ".selectCurrentSystemTime", "");
        String sToday = systemDate.get(0).get("TODATE").toString();
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMddHHmmss");
        Date nowDate = dateFormat.parse(sToday);

        paramMap.put("RECEIVETIME",     nowDate);
        paramMap.put("RECEIVEUSER",     paramMap.get("INBOUNDUSER"));
        paramMap.put("STATUS",          "InboundComplete");
        paramMap.put("INTERFACESTATUS", "None");
        paramMap.put("VALIDSTATE",      "Valid");

        return generalDao.addUpdate(NAMESPACE + ".updateQamQclotdefectinbound", paramMap);
    }

    /**
    * @fn          : saveLotDefectInboundCancel
    * @brief       : (Override method) 불량품 인수취소
    * @Method Name : saveLotDefectInboundCancel
    * @remark      : 상세설명
* @see smh.qam.service.QAM01700Service#saveLotDefectInboundCancel(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void saveLotDefectInboundCancel(UiMapDto dto) throws Exception {
        DataSetMap paramMap = getParametersDataSetMap(dto);
        Map<String, Object> param;

        int result = 0;

        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);

            List<Map<String, Object>> idList = generalDao.addSelect(NAMESPACE + ".selectLotIdChk", param);

            if(idList.size() > 0)
            {
                result += updateQamQclotdefectinboundCancle(param);
            }
        }

        putDataSetMap(dto, result);
    }

    /**
    * @fn          : updateQamQclotdefectinboundCancle
    * @brief       : (Override method) 불량품 인수취소
    * @Method Name : updateQamQclotdefectinboundCancle
    * @remark      : 상세설명
    * @see
    */
    private int updateQamQclotdefectinboundCancle(Map<String, Object> param) throws Exception{
        Map<String, Object> paramMap = new HashMap<String, Object>();

        //HashMap Copy
        for (Map.Entry<String, Object> entry : param.entrySet()) {
            paramMap.put(entry.getKey(), entry.getValue());
        }

        paramMap.put("INTERFACESTATUS", "None");
        paramMap.put("VALIDSTATE",      "Invalid");

        return generalDao.addUpdate(NAMESPACE + ".updateQamQclotdefectinboundCancle", paramMap);
    }

}