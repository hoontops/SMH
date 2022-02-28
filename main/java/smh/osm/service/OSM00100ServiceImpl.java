package smh.osm.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


/**
* @file: OSM00100ServiceImpl.java
* @Package: smh.osm.service
* @Project name: IFC MES시스템 구축
* @Type name: OSM00100ServiceImpl
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
public class OSM00100ServiceImpl extends AbstractNbdfService implements OSM00100Service {

    public static final String NAMESPACE = "smh.osm.dao.OSM00100Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief (Override method) Claim공정별 기준금액  수정, 등록, 삭제 기능
     * @remark - Claim공정별 기준금액 수정, 등록, 삭제 트랜젝션 처리
     * @see smh.osm.service.OSM00100Service#saveGroupCode(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void saveBasProductquotationsegment(UiMapDto dto) throws Exception {
    	int result = 0;
        DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT");
        Map<String, Object> param0 = dsMap.get(0);
        param0.put("VALIDSTATE", "Valid");
        result = generalDao.addSelectCount(NAMESPACE + ".selectBasProductquotationCnt",param0);
        if (result == 0) {
        	result = generalDao.addInsert(NAMESPACE + ".insertBasProductquotation",param0);
        } else if (result > 0) {
        	result = generalDao.addUpdate(NAMESPACE + ".updateBasProductquotation",param0);
        }
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".GetInvalidProductquotationsegment",param0);
        for(int j=0; j<list.size(); j++){
        	Map<String, Object> param2 = list.get(j);
        	result = generalDao.addUpdate(NAMESPACE + ".deleteBasProductquotationsegment",param2);
        }
        
        dsMap = getParametersDataSetMap(dto, "INPUT2");
        for (int i = 0, n = dsMap.size(); i < n; i++) {
        	Map<String, Object> param = dsMap.get(i);
        	result = generalDao.addSelectCount(NAMESPACE + ".selectBasProductquotationsegmentCnt",param);
        	param.put("VALIDSTATE", "Valid");
            if (result == 0) {
            	result = generalDao.addInsert(NAMESPACE + ".insertBasProductquotationsegment",param);
            } else if (result > 0) {
            	result = generalDao.addUpdate(NAMESPACE + ".updateBasProductquotationsegment",param);
            }
        }
        

        putDataSetMap(dto, result);
    }
    /**
     * @fn
     * @brief (Override method) Claim공정별 기준금액  copy
     * @remark - Claim공정별 기준금액 copy
     * @see smh.osm.service.OSM00100Service#copyBasProductquotationsegment(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void copyBasProductquotationsegment(UiMapDto dto) throws Exception {
    	int result = 0;
    	/*
    	DataSetMap dsMap = getParametersDataSetMap(dto);
    	for (int i = 0, n = dsMap.size(); i < n; i++) {	//단건처리
    		Map<String, Object> param = dsMap.get(i);
    		result = generalDao.addUpdate(NAMESPACE + ".deleteBasProductquotationsegment",param);	//Invalid 처리
    		result = generalDao.addUpdate(NAMESPACE + ".insertBasProductquotationsegmentCopy",param);	//Insert 처리
    		result = generalDao.addUpdate(NAMESPACE + ".deleteBasProductquotation",param);	//Invalid 처리
    		result = generalDao.addUpdate(NAMESPACE + ".insertBasProductquotationCopy",param);	//Insert
    	}
    	*/
    	DataSetMap dsMap = getParametersDataSetMap(dto);
    	//for (int i = 0, n = dsMap.size(); i < n; i++) {	//단건처리
        	Map<String, Object> param = dsMap.get(0);
        	Map<String, Object> param0 = new HashMap<String, Object>();
        	
        	// [21.07.01] to -> from 변경 작업
        	/*
        	param0.put("PRODUCTDEFID", param.get("TOPRODUCTDEFID"));
        	param0.put("PRODUCTDEFVERSION", param.get("TOPRODUCTDEFVERSION"));
        	param0.put("PROCESSDEFID", param.get("TOPROCESSDEFID"));
        	param0.put("PROCESSDEFVERSION", param.get("TOPROCESSDEFVERSION"));
        	*/
        	
        	param0.put("PRODUCTDEFID", param.get("PRODUCTDEFID"));
        	param0.put("PRODUCTDEFVERSION", param.get("PRODUCTDEFVERSION"));
        	param0.put("PROCESSDEFID", param.get("PROCESSDEFID"));
        	param0.put("PROCESSDEFVERSION", param.get("PROCESSDEFVERSION"));
        	
        	List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".GetInvalidProductquotationsegment",param0);	//리스트  (21.07.01) - 받아야 되는 것 조회(복사를 받는것) - 조회된  (복사될 - 메인조회)
            for(int j=0; j<list.size(); j++){
            	Map<String, Object> param2 = list.get(j);
            	result = generalDao.addUpdate(NAMESPACE + ".deleteBasProductquotationsegment",param2);	//Invalid 처리  (복사를 받는것) - 조회된 (복사될 - 메인조회된)
            }
            
            // [21.07.01] 복사할 정보 데이터 새롭게 설정 (복사해줄 From 정보)
            Map<String, Object> paramFrom = new HashMap<String, Object>();
            paramFrom.put("PRODUCTDEFID", param.get("TOPRODUCTDEFID"));
            paramFrom.put("PRODUCTDEFVERSION", param.get("TOPRODUCTDEFVERSION"));
            paramFrom.put("PROCESSDEFID", param.get("TOPROCESSDEFID"));
            paramFrom.put("PROCESSDEFVERSION", param.get("TOPROCESSDEFVERSION"));
        	// (21.07.02) - 밑에서 사용 추가
            paramFrom.put("VALIDSTATE", "Valid");
            
            //list = generalDao.addSelect(NAMESPACE + ".selectGetOutsourcedClaimBaseAmountCopy",param);
            list = generalDao.addSelect(NAMESPACE + ".selectGetOutsourcedClaimBaseAmountCopy",paramFrom);		// 조회된 -> From 입력값으로 변경(21.07.01)
            
            if(list != null && list.size()>0) {
//            	Map<String, Object> mapProduct=  list.get(0);
            	
            	//Map<String, Object> productquotationData = generalDao.addSelectOneMap(NAMESPACE + ".selectBasProductquotation",param);	//from
            	Map<String, Object> productquotationData = generalDao.addSelectOneMap(NAMESPACE + ".selectBasProductquotation",paramFrom);	//from  (21.07.01) 조회된 -> From 정보(복사할 값 - From정보)
            	//int cnt = generalDao.addSelectCount(NAMESPACE+".selectBasProductquotationCnt", param0);
            	int cnt = generalDao.addSelectCount(NAMESPACE+".selectBasProductquotationCnt", param);		// (21.07.01)  (복사될 param == param0)
            	
            	
            	/*
            	productquotationData.put("PRODUCTDEFID",param.get("TOPRODUCTDEFID"));            //제품 정의 ID
            	productquotationData.put("PRODUCTDEFVERSION", param.get("TOPRODUCTDEFVERSION"));  //제품 정의 Version
            	productquotationData.put("PROCESSDEFID",param.get("TOPROCESSDEFID")); 
    			productquotationData.put("PROCESSDEFVERSION",param.get("TOPROCESSDEFVERSION")); 
    			//productquotationData.put("CURRENCYUNIT", mapProduct.get("CURRENCYUNIT"));
            	//productquotationData.put("DEFECTAMOUNTTOT", mapProduct.get("DEFECTAMOUNTTOT"));
            	productquotationData.put("VALIDSTATE", "Valid");
            	*/
            	
            	// (21.07.02) - to -> from 변경 (조회된 내용이 from 이다.)
            	productquotationData.put("PRODUCTDEFID",param.get("PRODUCTDEFID"));            //제품 정의 ID
            	productquotationData.put("PRODUCTDEFVERSION", param.get("PRODUCTDEFVERSION"));  //제품 정의 Version
            	productquotationData.put("PROCESSDEFID",param.get("PROCESSDEFID")); 
    			productquotationData.put("PROCESSDEFVERSION",param.get("PROCESSDEFVERSION")); 
    			//productquotationData.put("CURRENCYUNIT", mapProduct.get("CURRENCYUNIT"));
            	//productquotationData.put("DEFECTAMOUNTTOT", mapProduct.get("DEFECTAMOUNTTOT"));
            	productquotationData.put("VALIDSTATE", "Valid");
            	
            	
            	
                if (cnt > 0) {
                	result = generalDao.addUpdate(NAMESPACE + ".updateBasProductquotation",productquotationData);
                	// (21.07.02) 복사될
                	//result = generalDao.addUpdate(NAMESPACE + ".updateBasProductquotation",paramFrom);
                } else {
                	result = generalDao.addInsert(NAMESPACE + ".insertBasProductquotation",productquotationData);
                	// (21.07.02) 복사될
                	//result = generalDao.addInsert(NAMESPACE + ".insertBasProductquotation",paramFrom);
                }
                
                for(int j=0; j<list.size(); j++){
                	Map<String, Object> map=  list.get(j);
                	/*
                	map.put("PRODUCTDEFID",param.get("TOPRODUCTDEFID"));            //제품 정의 ID
                	map.put("PRODUCTDEFVERSION", param.get("TOPRODUCTDEFVERSION"));  //제품 정의 Version
                	map.put("PROCESSDEFID",param.get("TOPROCESSDEFID")); 
                	map.put("PROCESSDEFVERSION",param.get("TOPROCESSDEFVERSION")); 
                	*/
                	
                	// (21.07.02) - 복사될 내용 
                	map.put("PRODUCTDEFID",param.get("PRODUCTDEFID"));            //제품 정의 ID
                	map.put("PRODUCTDEFVERSION", param.get("PRODUCTDEFVERSION"));  //제품 정의 Version
                	map.put("PROCESSDEFID",param.get("PROCESSDEFID")); 
                	map.put("PROCESSDEFVERSION",param.get("PROCESSDEFVERSION")); 
                	
                	// (21.07.02) - 복사될 내용 있는지 없는지 판단 후 update, insert 진행
                	Map<String, Object> productquotationsegmentData = generalDao.addSelectOneMap(NAMESPACE + ".selectBasProductquotationsegment",map); 
                	if (productquotationsegmentData != null) {
                		productquotationsegmentData.put("VARIABLECOST",Double.parseDouble(map.get("VARIABLECOST").toString()));                     //변동비용
            			productquotationsegmentData.put("FIXEDCOST",Double.parseDouble(map.get("FIXEDCOST").toString()));                           //고정비용
            			productquotationsegmentData.put("MATERIALCOST",Double.parseDouble(map.get("MATERIALCOST").toString()));                     //자재비용
            			productquotationsegmentData.put("MATERIALPROCESSCOST",Double.parseDouble(map.get("MATERIALPROCESSCOST").toString()));       //자재가공비용
            			productquotationsegmentData.put("BOXCOST",Double.parseDouble(map.get("BOXCOST").toString()));                               //BOX비용
            			productquotationsegmentData.put("MOLDCOST",Double.parseDouble(map.get("MOLDCOST").toString()));                             //금형비용
            			productquotationsegmentData.put("SAMPLECOST",Double.parseDouble(map.get("SAMPLECOST").toString()));                         //샘플비용
            			productquotationsegmentData.put("MANUFACTURINGOVERHEAD",Double.parseDouble(map.get("MANUFACTURINGOVERHEAD").toString()));   //제조간접비
            			productquotationsegmentData.put("GENERALCOST",Double.parseDouble(map.get("GENERALCOST").toString()));                       //일반관리비
            			productquotationsegmentData.put("ETCCOST",Double.parseDouble(map.get("ETCCOST").toString()));                               //기타비용
            			productquotationsegmentData.put("DEFECTAMOUNT",Double.parseDouble(map.get("DEFECTAMOUNT").toString()));                     //불량반영금액
            			productquotationsegmentData.put("AMOUNT",Double.parseDouble(map.get("AMOUNT").toString()));                                 //견적금액
            			productquotationsegmentData.put("PCSAMOUNT",Double.parseDouble(map.get("PCSAMOUNT").toString()));                           //PCS견적금액
            			productquotationsegmentData.put("CUMULATIVEAMOUNT",Double.parseDouble(map.get("CUMULATIVEAMOUNT").toString()));             //견적누적금액
            			productquotationsegmentData.put("CUMULATIVERATE",Double.parseDouble(map.get("CUMULATIVERATE").toString()));                 //견적누적비율
            			productquotationsegmentData.put("CUMULATIVEPCSAMOUNT",Double.parseDouble(map.get("CUMULATIVEPCSAMOUNT").toString()));       //PCS누적금액
            			productquotationsegmentData.put("ENTERPRISEID",map.get("ENTERPRISEID"));                     //회사 ID
            			productquotationsegmentData.put("DESCRIPTION",map.get("DESCRIPTION"));                       //설명
            			productquotationsegmentData.put("VALIDSTATE","Valid");
            			productquotationsegmentData.put("PRODUCTDEFID",map.get("PRODUCTDEFID"));            //제품 정의 ID
            			productquotationsegmentData.put("PRODUCTDEFVERSION", map.get("PRODUCTDEFVERSION"));  //제품 정의 Version
            			productquotationsegmentData.put("PROCESSDEFID",map.get("PROCESSDEFID")); 
            			productquotationsegmentData.put("PROCESSDEFVERSION",map.get("PROCESSDEFVERSION")); 
            			productquotationsegmentData.put("PROCESSSEGMENTID",map.get("PROCESSSEGMENTID")); 
            			productquotationsegmentData.put("PROCESSSEGMENTVERSION",map.get("PROCESSSEGMENTVERSION")); 

                    	result = generalDao.addUpdate(NAMESPACE + ".updateBasProductquotationsegment",productquotationsegmentData);
                    	logger.error("update.."+j+":"+result);
                    } else {
                    	productquotationsegmentData = new HashMap<>();	
            			productquotationsegmentData.put("PRODUCTDEFID",map.get("PRODUCTDEFID"));            //제품 정의 ID
            			productquotationsegmentData.put("PRODUCTDEFVERSION", map.get("PRODUCTDEFVERSION"));  //제품 정의 Version
            			productquotationsegmentData.put("PROCESSDEFID",map.get("PROCESSDEFID")); 
            			productquotationsegmentData.put("PROCESSDEFVERSION",map.get("PROCESSDEFVERSION")); 
            			
            			productquotationsegmentData.put("PROCESSSEGMENTID",map.get("PROCESSSEGMENTID")); 
            			productquotationsegmentData.put("PROCESSSEGMENTVERSION",map.get("PROCESSSEGMENTVERSION")); 
            			
            			productquotationsegmentData.put("VARIABLECOST",Double.parseDouble(map.get("VARIABLECOST").toString()));                     //변동비용
            			productquotationsegmentData.put("FIXEDCOST",Double.parseDouble(map.get("FIXEDCOST").toString()));                           //고정비용
            			productquotationsegmentData.put("MATERIALCOST",Double.parseDouble(map.get("MATERIALCOST").toString()));                     //자재비용
            			productquotationsegmentData.put("MATERIALPROCESSCOST",Double.parseDouble(map.get("MATERIALPROCESSCOST").toString()));       //자재가공비용
            			productquotationsegmentData.put("BOXCOST",Double.parseDouble(map.get("BOXCOST").toString()));                               //BOX비용
            			productquotationsegmentData.put("MOLDCOST",Double.parseDouble(map.get("MOLDCOST").toString()));                             //금형비용
            			productquotationsegmentData.put("SAMPLECOST",Double.parseDouble(map.get("SAMPLECOST").toString()));                         //샘플비용
            			productquotationsegmentData.put("MANUFACTURINGOVERHEAD",Double.parseDouble(map.get("MANUFACTURINGOVERHEAD").toString()));   //제조간접비
            			productquotationsegmentData.put("GENERALCOST",Double.parseDouble(map.get("GENERALCOST").toString()));                       //일반관리비
            			productquotationsegmentData.put("ETCCOST",Double.parseDouble(map.get("ETCCOST").toString()));                               //기타비용
            			productquotationsegmentData.put("DEFECTAMOUNT",Double.parseDouble(map.get("DEFECTAMOUNT").toString()));                     //불량반영금액
            			productquotationsegmentData.put("AMOUNT",Double.parseDouble(map.get("AMOUNT").toString()));                                 //견적금액
            			productquotationsegmentData.put("PCSAMOUNT",Double.parseDouble(map.get("PCSAMOUNT").toString()));                           //PCS견적금액
            			productquotationsegmentData.put("CUMULATIVEAMOUNT",Double.parseDouble(map.get("CUMULATIVEAMOUNT").toString()));             //견적누적금액
            			productquotationsegmentData.put("CUMULATIVERATE",Double.parseDouble(map.get("CUMULATIVERATE").toString()));                 //견적누적비율
            			productquotationsegmentData.put("CUMULATIVEPCSAMOUNT",Double.parseDouble(map.get("CUMULATIVEPCSAMOUNT").toString()));       //PCS누적금액
            			productquotationsegmentData.put("ENTERPRISEID",map.get("ENTERPRISEID"));                     //회사 ID
            			productquotationsegmentData.put("DESCRIPTION",map.get("DESCRIPTION"));                       //설명
            			productquotationsegmentData.put("VALIDSTATE","Valid");
            			result = generalDao.addInsert(NAMESPACE + ".insertBasProductquotationsegment",productquotationsegmentData);
            			logger.error("insert.."+j+":"+result);

                    }
                }
            }
            
        //}
    }
        
    /**
     * @fn
     * @brief (Override method) ID 패턴 그룹 조회
     * @remark [조회] 버튼 클릭시 호출
     * @see smh.osm.service.OSM00100Service#selectBasProductquotationsegmentList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectBasProductquotationsegmentList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        //Map<String, Object> map = generalDao.addSelectOneMap(NAMESPACE + ".selectSalePrice", param);  
        //param.put("SALEPRICE", map.get("SALEPRICE"));
        Map<String, Object> map = generalDao.addSelectOneMap(NAMESPACE + ".selectGetProductInformatByOsp", param);  
        param.put("SALEPRICE", map.get("SALEPRICE"));
        int cnt = generalDao.addSelectCount(NAMESPACE + ".selectBasProductquotationsegmentCnt_first", param);
        if(cnt==0) {
            putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectBasProductquotationsegmentList_first", param), "output");
        }else {
            putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectBasProductquotationsegmentList", param), "output");
        }
        putDataSetMap(dto, map, "output2");
//        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectOutsourcedClaimExchange", param), "output3");
    }

    /**
     * @fn
     * @brief (Override method) 환산금액 조회
     * @remark [조회] 버튼 클릭시 호출
     * @see smh.osm.service.OSM00100Service#selectBasProductquotationsegmentList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectGetOutsourcedClaimBaseAmountCopy(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        param.put("EXCHANGE_RATE", "1");
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectGetOutsourcedClaimBaseAmount", param), "output");
    }
    
    public void selectGetOutsourcedClaimBaseAmount(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        if(param.get("CURRENCYUNIT_FR").equals(param.get("CURRENCYUNIT_TO"))){
	        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectGetOutsourcedClaimBaseAmount", param), "output");
	        putDataSetMap(dto, param, "output2");
        }else {
            List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectGetOutsourcedClaimExchangeValueByOsp", param);
            if(list.size()==1) {
    	        param.put("EXCHANGE_RATE", list.get(0).get("EXCHANGE_RATE"));
            }else {
            	param.put("EXCHANGE_RATE", "0");
            }
	        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectGetOutsourcedClaimBaseAmount", param), "output");
	        putDataSetMap(dto, param, "output2");
        }
    }

    /**
     * @fn
     * @brief (Override method) 화폐단위 조회
     * @remark [조회] 버튼 클릭시 호출
     * @see smh.osm.service.OSM00100Service#selectGetUomDefinitionListByOsp(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectGetUomDefinitionListByOsp(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectGetUomDefinitionListByOsp", param), "output");
    }
}