package smh.bas.service;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



/**
* @file			: BAS01600ServiceImpl.java
* @Package		: smh.bas.service  
* @Project 	: 인터플렉스 MES 구축
* @Type name	: BAS01600ServiceImpl    
* @Company		: Built1
* @Create Date	: 2021. 04. 09. 오전 11:26:13 
* @Author		: sungmin.choe
* @File Version	: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일      수정자        수정내용
 *   ------------  ------       ----------
 *   2021. 04. 09.       sungmin.choe      최초  생성
 *
*/
@Service
public class BAS01600ServiceImpl extends AbstractNbdfService implements BAS01600Service {

    public static final String NAMESAPCE = "smh.bas.dao.BAS01600Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn 			: selectActionList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectActionList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 9.       sungmin.choe      최초  생성
     *
    */
    public void selectActionList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectActionList", param));
    }
    
    /**
    * @fn 			: saveActionList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : saveActionList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 9.       sungmin.choe      최초  생성
     *
    */
    @Override
    public void saveActionList(UiMapDto dto) throws Exception {
        DataSetMap paramMap = getParametersDataSetMap(dto);
        Map<String, Object> param;

        int result = 0;
        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            int type = getRowType(param);
            if (type == DataSet.ROW_TYPE_INSERTED) {
            	Map<String, Object> keyMap = new HashMap<String, Object>();
            	String strID = "";
            	keyMap.put("CLASSID", 	"QCAction");		
            	keyMap.put("PREFIX",		"QCAction");
            	keyMap.put("CREATOR", param.get("CREATOR"));
        		generalDao.addSelectOneMap(NAMESAPCE + ".selectNewItemID", keyMap);
        		strID = (String)keyMap.get("O_NEWID");
        		param.put("ACTIONID", strID);
            	result += generalDao.addUpdate(NAMESAPCE + ".insertAction", param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
                result += generalDao.addUpdate(NAMESAPCE + ".updateAction", param);
            }
        }
        
        putDataSetMap(dto, result);
    }
    
}