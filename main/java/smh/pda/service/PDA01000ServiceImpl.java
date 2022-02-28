package smh.pda.service;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @file: PDA00600ServiceImpl.java
* @Package: smh.bas.service
 * @Project name: IFC MES시스템 구축
 * @Type name: PDA00600ServiceImpl
 * @Company: Built1
 * @Create Date:  2021.04.19
 * @Author:
 * @File Version: v1.0
 *
 *       << 개정이력(Modification Information) >>
 *
 *       수정일 수정자 수정내용 ------------ ------ ---------- 2021. 3. 30. 김성현 최초 생성
 */
@Service
public class PDA01000ServiceImpl extends AbstractNbdfService implements PDA01000Service {

    public static final String NAMESPACE2200 = "smh.pcm.dao.PCM02200Dao";
	public static final String NAMESPACE = "smh.pda.dao.PDA01000Dao";
	public static final String NAMESPACE1700 = "smh.pcm.dao.PCM01700Dao";
	public static final String NAMESPACE1900 = "smh.pcm.dao.PCM01900Dao";
	public static final String NAMESPACECOM = "smh.pcm.dao.PCMCommonDao";

	@Autowired
	private GeneralDao generalDao;


    /**
     * @fn selectLotWorkCancelList
     * @brief (Override method) 인수취소
     * @remark 
     * @see smh.bas.service.PDA00600#selectLotInfoBylotIDbyAreaAuthority(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectLotInfoBylotIDbyAreaAuthority(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> lotInfo = generalDao.addSelect(NAMESPACE + ".selectLotInfoBylotIDbyAreaAuthority", param);
        putDataSetMap(dto, lotInfo , "output");
        
        if(lotInfo.size()==1) {
//			param.put("PRODUCTDEFID", lotInfo.get(0).get("PRODUCTDEFID"));
//			param.put("PRODUCTDEFVERSION", lotInfo.get(0).get("PRODUCTDEFVERSION"));
//			param.put("PROCESSSEGMENTID", lotInfo.get(0).get("PROCESSSEGMENTID"));
//			param.put("PROCESSSEGMENTVERSION", lotInfo.get(0).get("PROCESSSEGMENTVERSION"));
//			putDataSetMap(dto, generalDao.addSelect(NAMESPACE1700 + ".selectLotHistoryMessage", param), "ds_message");
			
//			List<Map<String, Object>> listWorker = generalDao.addSelect(NAMESPACECOM + ".getWorkerByProcess", param);
//			if(listWorker.size()==1) {
//				putDataSetMap(dto, listWorker, "ds_work");
//			}
			
			List<Map<String, Object>> workerList = generalDao.addSelect(NAMESPACE1900 + ".getLotWorkerByTrackOut", param);
			putDataSetMap(dto, workerList, "ds_work");			
        }
    }   
	
}