package smh.pcm.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @file		: PCM08900ServiceImpl.java
 * @Package		: smh.pcm.service
 * @Project name: IFC MES시스템 구축
 * @Type name	: PCM08700ServiceImpl
 * @Company		: Built1
 * @Create Date	: 2021.2.1
 * @Author		: 박현우
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 2. 10.  박현우      최초  생성 
 */
@Service
public class PCM08900ServiceImpl extends AbstractNbdfService implements PCM08900Service {

    public static final String NAMESAPCE = "smh.pcm.dao.PCM08900Dao";

    @Autowired
    private GeneralDao generalDao;
    
    //외주창고입출고현황(수입검사의뢰)
    public void selectOutboundwarehouseStatusInspectList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	String sqlId = (String)param.get("SQL_ID");
    	
    	log("[*** selectOutboundwarehouseStatusInspectList ***]"+sqlId);
    	log("--------[1] USERID :: "+					param.get("USERID"));    	
    	log("--------[2] P_LOTID :: "+					param.get("P_LOTID"));
    	log("--------[3] P_PLANTID :: "+				param.get("P_PLANTID"));
    	log("--------[4] P_AREAID :: "+					param.get("P_AREAID"));
    	log("--------[5] P_PROCESSSEGMENTID :: "+		param.get("P_PROCESSSEGMENTID"));    	
    	log("--------[6] P_PRODUCTDEFID :: "+			param.get("P_PRODUCTDEFID"));
    	log("--------[7] P_PRODUCTDEFVERSION :: "+		param.get("P_PRODUCTDEFVERSION"));
    	log("--------[8] P_SEARCHDATE_PERIODFR :: "+	param.get("P_SEARCHDATE_PERIODFR"));
    	log("--------[9] P_SEARCHDATE_PERIODTO :: "+	param.get("P_SEARCHDATE_PERIODTO"));
    	log("--------[10] LANGUAGETYPE :: "+			param.get("LANGUAGETYPE"));
    	log("--------[11] *** SQL_ID *** :: "+			param.get("SQL_ID"));
    	
    	List<Map<String, Object>> list00 = null;
        List<Map<String, Object>> list01 = null;
        List<Map<String, Object>> list02 = null;
        
        if(!"".equals(sqlId)){
        	list00 = generalDao.addSelect(NAMESAPCE + ".selectOutboundwarehouseStatusInspectList", param); //외주창고입출고현황(수입검사의뢰)
            list01 = generalDao.addSelect(NAMESAPCE + ".selectOutboundwarehouseStatusInOutList", param); //외주창고입출고현황(입출고 l/t)
            list02 = generalDao.addSelect(NAMESAPCE + ".selectOutboundwarehouseStatusOutputSlipList", param); //외주창고입출고현황(전표출력이력)
            
            log("--------[11] *** list00 *** :: "+			list00);
            log("--------[11] *** list01 *** :: "+			list01);
            log("--------[11] *** list02 *** :: "+			list02);

        	putDataSetMap(dto, list00, "inspect");
            putDataSetMap(dto, list01, "inout");
            putDataSetMap(dto, list02, "slip");
        } else {
        	throw new BizException("Error : Not Exists SQL_ID");
        }
    }

    
    private void log(String message){
    	System.out.println("////////////////////////////////////////////////////////////////"+message);
    }
}