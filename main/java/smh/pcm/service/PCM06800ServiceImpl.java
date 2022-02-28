package smh.pcm.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

import smh.commons.TxnHistKey;

/**
* @file: PCM06800ServiceImpl.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS00100ServiceImpl
* @Company: Built1
* @Create Date: 2021.2.1
* @Author: JinSungHa
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 10.   진성하     최초  생성
*/
@Service
public class PCM06800ServiceImpl extends AbstractNbdfService implements PCM06800Service {

    public static final String NAMESAPCE = "smh.pcm.dao.PCM06800Dao";
    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn 			: selectCustomQuery
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectCustomQuery
    * @remark		: 상세설명
* @see smh.pcm.service.PCM09600Service#selectCustomQuery(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectCustomQuery(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        Map<String, Object> paramArgs = dto.getInVariableMap();        
        String sqlId = (String)param.get("SQL_ID");
        
        if(!"".equals(sqlId) && sqlId != null){
        	//Arguments를 Param에 추가
        	for (Map.Entry<String, Object> entry : paramArgs.entrySet()) {        	    
        	    param.put(entry.getKey(), entry.getValue());
        	}
        	//추가 배열파라미터가 존재하면 배열형태로 param에 바인딩
//        	String addParam = (String)param.get("ADD_PARAM");
//        	if(!"".equals(addParam) && addParam != null){
//        		param.put("ADD_LIST", addParam.split("\\|"));
//        	}
        	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + "."+sqlId, param));
        } else {
        	throw new BizException("Error : Not Exists SQL_ID");
        }        
    }
}