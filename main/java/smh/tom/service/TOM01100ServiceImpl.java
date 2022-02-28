package smh.tom.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @file		: TOM01100ServiceImpl.java
 * @Package		: smh.tom.service
 * @Project name: IFC MES시스템 구축
 * @Type name	: TOM01100ServiceImpl
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
public class TOM01100ServiceImpl extends AbstractNbdfService implements TOM01100Service {

    public static final String NAMESAPCE = "smh.tom.dao.TOM01100Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief 치공구 현황 조회
     * @remark 
     * @see smh.tom.service.TOM01100Service#selectTomToolStatusListForReportByEap(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectTomToolStatusListForReportByEap(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	String sqlId = (String)param.get("SQL_ID");        
    	log("sqlId :: "+sqlId);
        if(!"".equals(sqlId)){
        	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + "."+sqlId, param));
        } else {
        	throw new BizException("Error : Not Exists SQL_ID");
        }
    }
    
    /**
     * @fn
     * @brief 이력 조회
     * @remark 
     * @see smh.bas.service.PCM01100Service#selectTomToolHistoryListForReportByEqp(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectTomToolHistoryListForReportByEqp(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	String sqlId = (String)param.get("SQL_ID");        
    	log("sqlId :: "+sqlId);
        if(!"".equals(sqlId)){
        	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + "."+sqlId, param));
        } else {
        	throw new BizException("Error : Not Exists SQL_ID");
        }
    }
    
    /**
     * @fn
     * @brief 사용 내역 조회
     * @remark 
     * @see smh.bas.service.PCM01100Service#selectTomToolUseStatusListForReportByEqp(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectTomToolUseStatusListForReportByEqp(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	String sqlId = (String)param.get("SQL_ID");        
    	log("sqlId :: "+sqlId);
        if(!"".equals(sqlId)){
        	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + "."+sqlId, param));
        } else {
        	throw new BizException("Error : Not Exists SQL_ID");
        }
    }
    
    private void log(String message){
    	logger.debug("////////////////////////////////////////////////////////////////"+message);
    }
}