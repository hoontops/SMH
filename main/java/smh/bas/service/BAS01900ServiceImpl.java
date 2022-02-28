package smh.bas.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

import smh.commons.TxnHistKey;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
* @file			: BAS01900ServiceImpl.java
* @Package		: smh.bas.service  
* @Project 	: 인터플렉스 MES 구축
* @Type name	: BAS01900ServiceImpl    
* @Company		: Built1
* @Create Date	: 2021. 4. 06. 오전 11:26:13 
* @Author		: sungmin.choe
* @File Version	: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일      수정자        수정내용
 *   ------------  ------       ----------
 *   2021. 4. 06.       sungmin.choe      최초  생성
 *
*/
@Service
public class BAS01900ServiceImpl extends AbstractNbdfService implements BAS01900Service {

    public static final String NAMESAPCE = "smh.bas.dao.BAS01900Dao";
    public static final String NAMESAPCE_COM = "smh.bas.dao.BASCommonDao";
    
    @Autowired
    private GeneralDao generalDao;


    /**
    * @fn 			: selectCamRequestList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectCamRequestList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 6.       sungmin.choe      최초  생성
     *
    */
    public void selectCamRequestList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectCamRequestList", param));
    } 

    /**
    * @fn 			: selectItemDetail
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectItemDetail
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 7.       sungmin.choe      최초  생성
     *
    */
    public void selectItemDetail(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectItemDetail", param));
    } 
    
    
    /**
    * @fn 			: saveCamRequest
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : saveCamRequest
    * @remark		: 상세설명
* @see smh.bas.service.BAS01900Service#saveCamRequest(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void saveCamRequest(UiMapDto dto) throws Exception {
        DataSetMap paramMap = getParametersDataSetMap(dto, "INPUT");
        DataSetMap paramMapDel = getParametersDataSetMap(dto, "INPUT_D");
        Map<String, Object> param;
        
        int result = 0;
        //삭제
        for (int i = 0, n = paramMapDel.size(); i < n; i++) {
            param = paramMapDel.get(i);
            int type = getRowType(param);            
            if (type == DataSet.ROW_TYPE_DELETED) {
            	result += generalDao.addUpdate(NAMESAPCE + ".deleteCamRequest", param);
            }
        }
        
        //저장
        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            int type = getRowType(param);            
            if (type == DataSet.ROW_TYPE_INSERTED)  {
            	result += generalDao.addUpdate(NAMESAPCE + ".insertCamRequest", param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
            	result += generalDao.addUpdate(NAMESAPCE + ".updateCamRequest", param);
            }
            
            //Governance 상태 Update
            result += generalDao.addUpdate(NAMESAPCE + ".updateCamState", param);
            
        }        
        putDataSetMap(dto, result);
    }
    
    @Override
    public void selectCamRequestId(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        Map<String, Object> keyMap = new HashMap<String, Object>();
    	String strID = "";
    	Date date = new Date();        		        		
    	SimpleDateFormat dateFormat = new SimpleDateFormat("yyMM");
    	String formattedDate = dateFormat.format(date);            	
    	keyMap.put("CLASSID", 	"CamRequest");		
    	keyMap.put("PREFIX",		"CAM"+formattedDate);
    	keyMap.put("CREATOR", param.get("CREATOR"));
		generalDao.addSelectOneMap(NAMESAPCE + ".selectNewItemID", keyMap);
		strID = (String)keyMap.get("O_NEWID");
		param.put("CAMREQUESTID", strID);
		
        putDataSetMap(dto, param);
    } 
}