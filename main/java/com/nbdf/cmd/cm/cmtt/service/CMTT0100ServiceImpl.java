package com.nbdf.cmd.cm.cmtt.service;

import com.nbdf.cmd.cm.cmam.service.CMAM00100Service;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
* @file: CMTT0100ServiceImpl.java
* @Package: com.nbdf.cmd.cm.cmtt.service
* @Project name: IFC MES시스템 구축
* @Type name: CMTT0100ServiceImpl
* @Company: Built1
* @Create Date: 2015. 5. 6. 오전 10:03:17
* @Author: JIn Sung Ha
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 5. 6.        JIn Sung Ha     최초  생성
 *
*/
@Service
public class CMTT0100ServiceImpl extends AbstractNbdfService implements CMTT0100Service {

    public static final String NAMESAPCE = "com.nbdf.cmd.cm.cmtt.dao.CMTT0100Dao";

    @Autowired
    private GeneralDao generalDao;

    @Autowired
    private CMAM00100Service arimService;

    /**
    * @throws Exception 
     * @fn
    * @brief (Override method) EMAIL발송 서비스를 위해 임시로 생성
    * @remark
    * - EMAIL발송 서비스를 위해 임시로 생성
    * @see com.nbdf.cmd.cm.cmtt.service.CMTT0100Service#submitEmail(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void submitEmail(UiMapDto dto) throws Exception  {
        Map<String, Object> param = getParametersMap(dto);
        String rst  = arimService.emailSend(param.get("TO").toString(), param.get("FROM").toString(), param.get("SUBJECT").toString(), param.get("CONTENT").toString(), "CMD");

        if(rst.equals("success")) {
            putDataSetMap(dto, 1);
        }else {
            param.put("RESULT" , rst);
            putDataSetMap(dto, param);
        }
    }

    /**
    * @throws Exception 
     * @fn
    * @brief (Override method) SMS발송 서비스를 위해 임시로 생성
    * @remark
    * - SMS발송 서비스를 위해 임시로 생성
    * @see com.nbdf.cmd.cm.cmtt.service.CMTT0100Service#submitSms(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void submitSms(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        boolean success = false;
        success  = arimService.smsSend(param.get("TO").toString(), param.get("FROM").toString(), param.get("CONTENT").toString(), param.get("JOB_SYS_CD").toString());

        if(success) {
            putDataSetMap(dto, 1);
        }
    }

    /**
    * @fn
    * @brief (Override method) 마스킹 처리 샘플
    * @remark
    * - 마스킹 처리 샘플
    * @see com.nbdf.cmd.cm.cmtt.service.CMTT0100Service#maskingSample(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void maskingSample(UiMapDto dto) throws Exception {
        List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCE + ".selectNoMakingList");
        putDataSetMap(dto, list, "ds_noMasking");

        list = generalDao.addSelect(NAMESAPCE + ".selectList");
        putDataSetMap(dto, list, "ds_fMasking");
    }

	@Override
	public void insertSms(UiMapDto dto) throws Exception {
		DataSetMap dsMap = getParametersDataSetMap(dto, "ds_input" );    
        DataSetMap dsMap2 = getParametersDataSetMap(dto, "ds_input2" ); 
        
        Map<String, Object> dsParam = dsMap.get(0);
        String sender = (String)dsParam.get("SENDER");
        String msg = (String)dsParam.get("MSG");
        String mbphNo = "";
        boolean success = true;
        
        for (int i = 0, n = dsMap2.size(); i < n; i++) {
        	if( success ) {
        		Map<String, Object> dsParam2 = dsMap2.get(i);
                mbphNo = (String)dsParam2.get("MBPH_NO");
                success  = arimService.smsSend(mbphNo, sender, msg, "CMD");
        	}
        }
        
        if(success) {
            putDataSetMap(dto, 1);
        }else{
        	putDataSetMap(dto, -1);
        }
	}
	
}
