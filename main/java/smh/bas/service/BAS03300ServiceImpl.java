package smh.bas.service;

import com.nbdf.com.StringUtils;
import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nexacro17.xapi.data.DataSet;

import smh.commons.TxnHistKey;

/**
* @file: BAS03300ServiceImpl.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS03300ServiceImpl
* @Company: Built1
* @Create Date: 2021.2.1
* @Author: 
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 10.   김애리     최초  생성
*/
@Service
public class BAS03300ServiceImpl extends AbstractNbdfService implements BAS03300Service {

    public static final String NAMESAPCE = "smh.bas.dao.BAS03300Dao";
    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief (Override method) 품목리스트
     * @remark 
     * @see smh.bas.service.BAS03300Service#selectProcessDefPopup(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectProcessDefPopup(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        System.out.println("=====================  selectProcessDefPopup 호출 ====== ");
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProcessDefPopup", param));
    }
    

    /**
     * @fn
     * @brief (Override method) 품목리스트
     * @remark 
     * @see smh.bas.service.BAS03300Service#selectRoutionRollLossList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectProcessPathList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        System.out.println("=====================  selectProcessPathList 호출 ====== ");
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProcessPathList", param),"ds_ProcessPath");
    }
    

    public void selectWindowTimeList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectWindowTimeList", param),"ds_Wtime");
    }
    

    public void selectWindowActionList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectWindowActionList", param),"ds_WtimeAction");
    }
    

    public void selectActionList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectActionList", param));
    }
    

    public void select4step(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".select4step", param));
    }
    
    public void selectStepAll(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectStepAll", param));
    }
    
    public void selectProductDefinitionListPopup(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        
        if(param.get("TXTPRODUCTDEFNAME") != null){
	        String[] splitProduct = param.get("TXTPRODUCTDEFNAME").toString().split(",");
			param.put("TXTPRODUCTDEFNAME", splitProduct);
        }
        
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProductDefinitionListPopup", param));
    }
    

    /**
     * @fn
     * @brief (Override method) 
     * @remark - 
     * @see smh.bas.service.BAS03200Service#saveRoutingWtime(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void saveRoutingWtime(UiMapDto dto) throws Exception {
    	System.out.println("------in to saveRoutingWtime serviceImpl lucky");
    	
    	DataSetMap paramMapWTime = getParametersDataSetMap(dto,"ds_Wtime");
    	DataSetMap paramMapAction = getParametersDataSetMap(dto,"ds_WtimeAction");
        DataSetMap paramMapDef = getParametersDataSetMap(dto,"ds_sendDefault");
        Map<String, Object> paramWTime;
        Map<String, Object> paramAction;

        Map<String, Object> paramDef = paramMapDef.get(0); 
        int result = 0;

        for (int i = 0, len = paramMapWTime.size(); i < len; i++) 
		{
        	paramWTime = paramMapWTime.get(i);
        	
        	int state = getRowType(paramWTime);
        	
			switch (state) 
			{
			case DataSet.ROW_TYPE_INSERTED:
				paramWTime.put("WTIMEDEFID", UUID.randomUUID().toString().toUpperCase());
			case DataSet.ROW_TYPE_UPDATED:
				paramWTime.put("ENTERPRISEID", paramDef.get("ENTERPRISEID"));
				paramWTime.put("PLANTID", paramDef.get("PLANTID"));
//				paramWTime.put("VALIDSTATE", paramDef.get("VALIDSTATE"));
				paramWTime.put("LASTTXNHISTKEY",  TxnHistKey.getTxnHistKey());
				
				result += generalDao.addUpdate(NAMESAPCE + ".saveBasWtimedefinition", paramWTime);
				break;
			case DataSet.ROW_TYPE_DELETED:
				result += generalDao.delete(NAMESAPCE + ".deleteBasWtimedefinition", paramWTime);
				break;
			}
        	
		}
        
        for (int i = 0, len = paramMapAction.size(); i < len; i++) 
		{
        	paramAction = paramMapAction.get(i);
        	
        	int state = getRowType(paramAction);
        	
			switch (state) 
			{
			case DataSet.ROW_TYPE_INSERTED:
				for(int j=0 ; j<paramMapWTime.size();j++){
					String wtimeDefID_Action = paramAction.get("WTIMEDEFID").toString();
					String wtimeDefID = StringUtil.Object2String(paramMapWTime.get(j).get("WTIMEDEFIDNEW"));
					if(wtimeDefID_Action.equals(wtimeDefID)) {
						paramAction.put("WTIMEDEFID", paramMapWTime.get(j).get("WTIMEDEFID"));
					}
				}
//				if(paramAction.get("WTIMEDEFID")== null || StringUtils.isEmpty(paramAction.get("WTIMEDEFID").toString())){
//					for(int j=0 ; j<paramMapWTime.size();j++){
//						String actionDefName = paramAction.get("WTIMEDEFNAME").toString();
//						String wtimeDefName = paramMapWTime.get(j).get("WTIMEDEFNAME").toString();
//						if(actionDefName.equals(wtimeDefName))
//						{
//							paramAction.put("WTIMEDEFID", paramMapWTime.get(j).get("WTIMEDEFID"));
//						}
//					}
//				}
			case DataSet.ROW_TYPE_UPDATED:
				paramAction.put("ENTERPRISEID", paramDef.get("ENTERPRISEID"));
				paramAction.put("PLANTID", paramDef.get("PLANTID"));
				paramAction.put("VALIDSTATE", paramDef.get("VALIDSTATE"));
				paramAction.put("LASTTXNHISTKEY",  TxnHistKey.getTxnHistKey());
				
				result += generalDao.addUpdate(NAMESAPCE + ".saveBasWtimeaction", paramAction);
				break;
			case DataSet.ROW_TYPE_DELETED:
				result += generalDao.delete(NAMESAPCE + ".deleteBasWtimeaction", paramAction);
				break;
			}
        	
		}
        
        
        putDataSetMap(dto, result);
    }


	
}