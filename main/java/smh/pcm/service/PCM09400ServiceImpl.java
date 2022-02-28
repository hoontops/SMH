package smh.pcm.service;

import java.util.HashMap;
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
 * @file		: PCM09400ServiceImpl.java
 * @Package		: smh.pcm.service
 * @Project name: IFC MES시스템 구축
 * @Type name	: PCM09400ServiceImpl
 * @Company		: Built1
 * @Create Date	: 2021.3.10
 * @Author		: 김진현
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 3. 10.  김진현      최초  생성 
 */
@Service
public class PCM09400ServiceImpl extends AbstractNbdfService implements PCM09400Service {

    public static final String NAMESAPCE = "smh.pcm.dao.PCM09400Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief 품목 코드 조회(포장사양관리)
     * @remark 
     * @see smh.pcm.service.PCM09400Service#selectPcmProductItemGroupList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    //품목 코드 조회
  	public void selectPcmProductItemGroupList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectPcmProductItemGroupList", param));
    }
  	
  	/**
     * @fn
     * @brief 고객사 정보 팝업 조회(포장사양관리)
     * @remark 
     * @see smh.pcm.service.PCM09400Service#selectCustomerList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    //품목 코드 조회
  	public void selectCustomerList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectCustomerList", param));
    }
  	
  	
  	/**
     * @fn
     * @brief 고객사 정보 팝업 조회(포장사양관리)
     * @remark 
     * @see smh.pcm.service.PCM09400Service#selectPackagProductMstList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    //품목 코드 조회
  	public void selectPackagProductMstList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectPackagProductMstList", param));
    }
  	
  	/**
     * @fn
     * @brief 포장사양관리 (버튼 기준정보, 포장정보 sub 그리드) 조회
     * @remark 
     * @see smh.pcm.service.PCM09400Service#selectPackagProductSubList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    //품목 코드 조회
  	public void selectPackagProductSubList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectPackagProductDtlList", param), "output1");
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectPackagProductFncList", param), "output2");
		
    }
  	
  	/**
     * @fn
     * @brief 포장사양관리 (품목유형코드) 조회
     * @remark 
     * @see smh.pcm.service.PCM09400Service#selectMstDataClassId(com.nbdf.commons.ui.vo.UiMapDto)
     */
    //품목 코드 조회
  	public void selectMstDataClassId(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectMstDataClassId", param));
    }
  	
  	/**
     * @fn
     * @brief 품목코드 팝업 조회 (품목유형코드 활용) 조회 
     * @remark 
     * @see smh.pcm.service.PCM09400Service#selectPcmProductItemGroupListVer1(com.nbdf.commons.ui.vo.UiMapDto)
     */
    //품목 코드 조회
  	public void selectPcmProductItemGroupListVer1(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectPcmProductItemGroupListVer1", param));
    }
  	
  	/**
     * @fn  : selectPackagProductDupList
     * @brief 저장전 db 중복 값 체크 및 next seq 조회 
     * @remark 
     * @see smh.pcm.service.PCM09400Service#selectPackagProductDupList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    //저장전 시퀀스, db 중복 체크 조회
  	public void selectPackagProductDupList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectPackagProductMstDupList" , param), "output1");
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectPackagProductDtlDupList" , param), "output2");
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectPackagProductFncDupList" , param), "output3");
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectPackagProductDtlLNextSeq", param), "output4");
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectPackagProductFncNextSeq" , param), "output5");
		
		
    }
  	
  	/**
     * @fn  : savePackagProductList
     * @brief 저장
     * @remark 
     * @see smh.pcm.service.PCM09400Service#savePackagProductList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    //저장전 시퀀스, db 중복 체크 조회
  	public void savePackagProductList(UiMapDto dto) throws Exception {
    	
		DataSetMap ds_resourceMst		= getParametersDataSetMap(dto, "ds_resourceMst");					//고객정보
        DataSetMap ds_resourceDtl 		= getParametersDataSetMap(dto, "ds_resourceDtl");			//포장정보
        DataSetMap ds_resourceBtn 		= getParametersDataSetMap(dto, "ds_resourceBtn");			//버튼정보
		
        // 고객 정보 등록/수정/삭제(sub부터 전부 삭제 후 진행)
 		int result = 0;
 		
 		Map<String, Object> param;
 		
         for (int i = 0, n = ds_resourceMst.size(); i < n; i++) {
             param = ds_resourceMst.get(i);
             param.put("LASTTXNHISTKEY",  TxnHistKey.getTxnHistKey());
             int type = getRowType(param);
             if (type == DataSet.ROW_TYPE_INSERTED) {
             	//param.put("UNITPRICEID", UUID.randomUUID().toString().toUpperCase());
             	result += generalDao.insert(NAMESAPCE + ".insertPackagProductMst", param);
             }
 			 else if (type == DataSet.ROW_TYPE_UPDATED) {
             	result += generalDao.update(NAMESAPCE + ".updatePackagProductMst", param);
             } 
 			
 			else if (type == DataSet.ROW_TYPE_DELETED) {
             	
 				
 				
 				result += generalDao.delete(NAMESAPCE + ".deletePackagProductBtnAll", param);
 				result += generalDao.delete(NAMESAPCE + ".deletePackagProductDtlAll", param);
 				result += generalDao.delete(NAMESAPCE + ".deletePackagProductMst", param);
             }
 			
         }
 		
 		// 포장정보         
         for (int d = 0, n = ds_resourceDtl.size(); d < n; d++) {
             param = ds_resourceDtl.get(d);
             param.put("LASTTXNHISTKEY",  TxnHistKey.getTxnHistKey());
             int type = getRowType(param);
             if (type == DataSet.ROW_TYPE_INSERTED) {
             	//param.put("UNITPRICEID", UUID.randomUUID().toString().toUpperCase());
             	result += generalDao.insert(NAMESAPCE + ".insertPackagProductDtl", param);
             } 
 			
 			else if (type == DataSet.ROW_TYPE_UPDATED) {
             	result += generalDao.update(NAMESAPCE + ".updatePackagProductDtl", param);
             } 			
 			else if (type == DataSet.ROW_TYPE_DELETED) {
             	result += generalDao.delete(NAMESAPCE + ".deletePackagProductDtl", param);
             }
 			
         }
 		
 		// 버튼정보
         
         for (int j = 0, m = ds_resourceBtn.size(); j < m; j++) {
             param = ds_resourceBtn.get(j);
             param.put("LASTTXNHISTKEY",  TxnHistKey.getTxnHistKey());
             int type = getRowType(param);
             if (type == DataSet.ROW_TYPE_INSERTED) {
             	//param.put("UNITPRICEID", UUID.randomUUID().toString().toUpperCase());
             	result += generalDao.insert(NAMESAPCE + ".insertPackagProductBtn", param);
             } 
 			
 			else if (type == DataSet.ROW_TYPE_UPDATED) {
             	result += generalDao.update(NAMESAPCE + ".updatePackagProductBtn", param);
             }
 			
 			else if (type == DataSet.ROW_TYPE_DELETED) {
             	result += generalDao.delete(NAMESAPCE + ".deletePackagProductBtn", param);
             }
 			
         }
 		
         
         putDataSetMap(dto, result);
		
		
    }
  	
  	/**
     * @fn
     * @brief 고객사 정보 팝업 조회(조회조건) - 포장사양에 등록된 내용만 
     * @remark 
     * @see smh.pcm.service.PCM09400Service#selectPackCustomerList(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectPackCustomerList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectPackCustomerList", param));
    }
  	
  	
  	/**
     * @fn
     * @brief : 포장기준정보관리 - Mst 고객사 코드 중복 체크
     * @remark 
     * @see smh.pcm.service.PCM09400Service#savePackagMstChk(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void savePackagMstChk(UiMapDto dto) throws Exception {
		DataSetMap ds_main		= getParametersDataSetMap(dto, "ds_resourceMst");			//포장라벨 메인 정보
		// [대포장 - main 확인]
        Map<String, Object> param;
        for (int v = 0, i = ds_main.size(); v < i; v++) {
        	param	= ds_main.get(v);
        	
			// 정합성 체크
			Map<String, Object> paramMap = new HashMap<String, Object>();
			paramMap = generalDao.addSelectOneMap(NAMESAPCE + ".savePackagMstChk", param);
			String chkFlag  = (String)paramMap.get("CUSTOMERID_FLAG");
			// N이면 수정 삭제 불가능 
			if(!chkFlag.equals("Y")) {	
				throw new BizException("InValidData002|"+String.format("CUSTOMERID = %s", param.get("CUSTOMERID"))); 			// 인계처리된 경우 수정할 수 없습니다.
			}
            
         }
    }
  	
}