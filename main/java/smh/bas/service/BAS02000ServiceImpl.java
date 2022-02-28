package smh.bas.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
* @file: BAS02000ServiceImpl.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS02000ServiceImpl
* @Company: Built1
* @Create Date: 2021.3.23
* @Author: sungmin.choe
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 23.   sungmin.choe     최초  생성
*/ 
@Service
public class BAS02000ServiceImpl extends AbstractNbdfService implements BAS02000Service {

    public static final String NAMESAPCE = "smh.bas.dao.BAS02000Dao";
    public static final String NAMESAPCE_COM = "smh.bas.dao.BASCommonDao";

    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn 			: selectProductInfo
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectProductInfo
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 23.       sungmin.choe      최초  생성
     *
    */
    @Override
    public void selectProductInfo(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        
        // 탭1
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProductInfo", param),							"output1");	// 제품정보
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".SelectProductSpecDetail", param),					"output2");	// 제품사양 상세
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".SelectProductThickSpec", param),						"output3");	// 두께사양
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".SelectProductSpecComment", param),				"output4");	// 사양변경내용
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".SelectProductMVHSpec", param),						"output5");   // MVH
        
        // 탭2
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".SelectProductSpecDetail_Material", param),			"output6");	// 원,부자재 정보
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".SelectProductSpecDetail_InkInfo", param),			"output7");	// 잉크 및 기타정보
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".SelectProductSpecDetail_MaterialDetail", param),	"output8");	// 부자재 정보
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".SelectProductSpecDetail_Plating", param),			"output9");	// 도금사양
        
        // 탭3
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".GetToolByItem1", param),								"output10");	// 금형,목형
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".GetToolByItem2", param),								"output11");	// BBT, JIG
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".GetToolByItem3", param),								"output12");  // 기타
    }
 
    /**
    * @fn 			: selectApplicationList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectApplicationList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 24.       sungmin.choe      최초  생성
     *
    */
    @Override
    public void selectApplicationList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectApplicationList", param));                
    }

    /**
    * @fn 			: GetPlatingTypeSegment
    * @brief 		: 함수 간략한 설명 
    * @Method Name : GetPlatingTypeSegment
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 26.       sungmin.choe      최초  생성
     *
    */
    @Override
    public void GetPlatingTypeSegment(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".GetPlatingTypeSegment", param));                
    }
    
    /**
    * @fn 			: GetPlatingTypeSegmentList
    * @brief 		: 함수 간략한 설명 
    * @Method Name : GetPlatingTypeSegmentList
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 26.       sungmin.choe      최초  생성
     *
    */
    @Override
    public void GetPlatingTypeSegmentList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".GetPlatingTypeSegmentList", param));                
    }
    
    /**
    * @fn 			: GetPlatingTypeSegmentLInspist
    * @brief 		: 함수 간략한 설명 
    * @Method Name : GetPlatingTypeSegmentLInspist
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 29.       sungmin.choe      최초  생성
     *
    */
    @Override
    public void GetPlatingTypeSegmentLInspist(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".GetPlatingTypeSegmentLInspist", param));                
    }
    
    /**
    * @fn 			: GetToolTypeByClassId
    * @brief 		: 함수 간략한 설명 
    * @Method Name : GetToolTypeByClassId
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 30.       sungmin.choe      최초  생성
     *
    */
    @Override
    public void GetToolTypeByClassId(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".GetToolTypeByClassId", param));                
    }
    
    /**
    * @fn 			: GetToolByItemList1
    * @brief 		: 함수 간략한 설명 
    * @Method Name : GetToolByItemList1
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 30.       sungmin.choe      최초  생성
     *
    */
    @Override
    public void GetToolByItemList1(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".GetToolByItemList1", param));                
    }
    
    /**
    * @fn 			: GetToolByItemList2
    * @brief 		: 함수 간략한 설명 
    * @Method Name : GetToolByItemList2
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 30.       sungmin.choe      최초  생성
     *
    */
    @Override
    public void GetToolByItemList2(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".GetToolByItemList2", param));                
    }
    
    /**
    * @fn 			: GetToolByItemList3
    * @brief 		: 함수 간략한 설명 
    * @Method Name : GetToolByItemList3
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 30.       sungmin.choe      최초  생성
     *
    */
    @Override
    public void GetToolByItemList3(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".GetToolByItemList3", param));                
    }
    
    
    
    /**
    * @fn 			: saveItemSpec
    * @brief 		: 함수 간략한 설명 
    * @Method Name : saveItemSpec
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 24.       sungmin.choe      최초  생성
     *
    */
    @Override
    public void saveItemSpec(UiMapDto dto) throws Exception {
        DataSetMap ds_productInfo		 		= getParametersDataSetMap(dto, "ds_productInfo");			//품목 기본정보
        DataSetMap ds_itemSpecDetail	 		= getParametersDataSetMap(dto, "ds_itemSpecDetail");		//품목 상세정보
        DataSetMap ds_mvh 				 		= getParametersDataSetMap(dto, "ds_mvh");					//품목 MVH
        DataSetMap ds_platingSpec 		 		= getParametersDataSetMap(dto, "ds_platingSpec");			//품목 두께
        DataSetMap ds_specComment 	 		= getParametersDataSetMap(dto, "ds_specComment");		//품목 변경내용
        DataSetMap ds_ink 	 					= getParametersDataSetMap(dto, "ds_ink");						//잉크
        DataSetMap ds_materialPlatingList 	 	= getParametersDataSetMap(dto, "ds_materialPlatingList");	//도금사양
        DataSetMap ds_etc1				 	 	= getParametersDataSetMap(dto, "ds_etc1");					//금형,목형
        DataSetMap ds_etc2				 	 	= getParametersDataSetMap(dto, "ds_etc2");					//BIT,JIG
        DataSetMap ds_etc3				 	 	= getParametersDataSetMap(dto, "ds_etc3");					//기타
        
        Map<String, Object> productParam 	= new HashMap<>();
        int result = 0;
        

        for (int i = 0, n = ds_productInfo.size(); i < n; i++) {
        	productParam = ds_productInfo.get(i);
        	
            //BAS_ITEMMASTER (Product DEF 정보)
    		result += getUpdateItemMasterData(productParam);
    		
    		//BAS_PRODUCTITEMSPEC(제품사양)
    		result += getUpdateProductItemSpecData(productParam);

            //BAS_PRODUCTDEFINITION
    		result += getUpdateProductDefinitionData(productParam);
        }


        if(ds_itemSpecDetail != null && ds_itemSpecDetail.size()>0){
        	//BAS_PRODUCTITEMSPECDETAIL(회로사양)
        	result += getUpdateProductItemSpecDetailData(ds_itemSpecDetail, productParam);
        }

        //BAS_PRODUCTITEMSPEC(회로사양)        
        if(ds_mvh != null && ds_mvh.size()>0){
        	result += getUpdateMVHSpecDetailData(ds_mvh, productParam);
        }
        
        //BAS_PRODUCTITEMTHICKSPEC(두께사양)        
        if(ds_platingSpec != null && ds_platingSpec.size()>0){
        	result += getUpsertProductItemThickSpecData(ds_platingSpec, productParam);
        }
        
        //BAS_PRODUCTITEMSPECCOMMENT(기타정보)        
        if(ds_specComment != null && ds_specComment.size()>0){
        	result += getUpsertProductItemSpecCommentData(ds_specComment, productParam);
        }
        
        if(ds_ink != null && ds_ink.size()>0){
        	result += getUpdateProductItemSpecDetailData_InkInfo(ds_ink, productParam);
        }
        
        if(ds_materialPlatingList != null && ds_materialPlatingList.size()>0){
        	result += getUpdateProductItemSpecDetailData_PlatingInfo(ds_materialPlatingList, productParam);
        }
        
        if(ds_etc1 != null && ds_etc1.size()>0){
        	result += getUpdateProductItemSpecToolData(ds_etc1, productParam);
        }
        
        if(ds_etc2 != null && ds_etc2.size()>0){
        	result += getUpdateProductItemSpecToolData(ds_etc2,  productParam);
        }
        
        if(ds_etc3 != null && ds_etc3.size()>0){
        	result += getUpdateProductItemSpecToolData(ds_etc3, productParam);
        }
     	
        
        
        putDataSetMap(dto, result);
    }
    
    /**
    * @fn 			: getUpdateItemMasterData
    * @brief 		: 함수 간략한 설명 
    * @Method Name : getUpdateItemMasterData
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 3. 25.       sungmin.choe      최초  생성
     *
    */
    private int getUpdateItemMasterData(Map<String, Object> param) throws Exception{
    	Map<String, Object> resultMap 	= null;
    	String	itemId					= (String)param.get("ITEMID");
    	String	itemVersion			= (String)param.get("ITEMVERSION");
    	
    	//제품 존재여부 체크
    	resultMap = generalDao.addSelectOneMap(NAMESAPCE + ".checkItemMaster", param);
    	if(resultMap==null){throw new BizException("InValidData001|"+String.format("ItemId = %s, ItemVersion = %s", itemId, itemVersion));} 
    	
    	//ITEMMASTER Update
    	return generalDao.addUpdate(NAMESAPCE + ".getUpdateItemMasterData", param);    	 		
	}
    
	/**
	* @fn 			: getUpdateProductItemSpecData
	* @brief 		: 함수 간략한 설명 
	* @Method Name : getUpdateProductItemSpecData
	* @remark		: 상세설명
	* @Author		: sungmin.choe
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 3. 25.       sungmin.choe      최초  생성
	 *
	*/
	private int getUpdateProductItemSpecData(Map<String, Object> productParam) throws Exception{
		Map<String, Object> resultMap 	= null;
		String	itemId					= (String)productParam.get("ITEMID");
    	String	itemVersion			= (String)productParam.get("ITEMVERSION");

    	//제품 존재여부 체크
    	resultMap = generalDao.addSelectOneMap(NAMESAPCE + ".checkProductItemSpec", productParam);
    	if(resultMap==null){
    		resultMap = new HashMap<String, Object>();
    		resultMap.put("ITEMID", itemId);
    		resultMap.put("ITEMVERSION", itemVersion);    		
    	}
    	
    	//HashMap Copy
    	for (Map.Entry<String, Object> entry : productParam.entrySet()) {
    		resultMap.put(entry.getKey(), entry.getValue());
    	}

    	// 마스터 정보 추가 Binding (컬럼 이름이 상이)
    	resultMap.put("GITYPE"							, productParam.get("OUTBOUNDFORMAT"));
    	resultMap.put("SPECIFICATIONMAN"			, productParam.get("SPECPERSON"));
    	resultMap.put("SALESMAN"					, productParam.get("SALESOWNER"));
    	resultMap.put("CAMMAN"						, productParam.get("CAMOWNER"));
    	resultMap.put("UL_MARK"						, productParam.get("ULMARK"));
    	resultMap.put("ARRAYDIAGONAL"			, productParam.get("ARRAYDIAGONALLENGTH"));
    	resultMap.put("INPUTSHRINKX"				, productParam.get("INPUTNUMAXIS1"));
    	resultMap.put("INPUTSHRINKY"				, productParam.get("INPUTNUMAXIS2"));    	
    	//BAS_PRODUCTITEMSPEC Merge 
    	return generalDao.addUpdate(NAMESAPCE + ".getUpdateProductItemSpecData", resultMap);    	 	
	}
	
	/**
	* @fn 			: getUpdateProductDefinitionData
	* @brief 		: 함수 간략한 설명 
	* @Method Name : getUpdateProductDefinitionData
	* @remark		: 상세설명
	* @Author		: sungmin.choe
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 3. 25.       sungmin.choe      최초  생성
	 *
	*/
	private int getUpdateProductDefinitionData(Map<String, Object> productParam) throws Exception{
		Map<String, Object> resultMap 	= null;
		String	itemId					= (String)productParam.get("ITEMID");
    	String	itemVersion			= (String)productParam.get("ITEMVERSION");

    	//제품 존재여부 체크
    	resultMap = generalDao.addSelectOneMap(NAMESAPCE + ".checkProductDefinition", productParam);
    	if(resultMap==null){throw new BizException("InValidData001|"+String.format("ProductDefId = %s, ProductDefVersion = %s", itemId, itemVersion));}
    	
    	//HashMap Copy
    	for (Map.Entry<String, Object> entry : productParam.entrySet()) {
    		resultMap.put(entry.getKey(), entry.getValue());
    	}
    	
    	//BAS_PRODUCTDEFINITION Update
    	return generalDao.addUpdate(NAMESAPCE + ".getUpdateProductDefinitionData", resultMap);    	 	
	}
	
	/**
	* @fn 			: getUpdateProductItemSpecDetailData
	* @brief 		: 함수 간략한 설명 
	* @Method Name : getUpdateProductItemSpecDetailData
	* @remark		: 상세설명
	* @Author		: sungmin.choe
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 3. 25.       sungmin.choe      최초  생성
	 *
	*/
	private int getUpdateProductItemSpecDetailData(DataSetMap ds_itemSpecDetail, Map<String, Object> productParam) throws Exception{
		Map<String, Object> specParam 	= new HashMap<>();
		int result = 0;
    	//기존데이터 삭제
    	generalDao.addSelectOneMap(NAMESAPCE + ".checkDeleteProductItemSpecDetail", productParam);
    	
        //BAS_PRODUCTITEMTHICKSPEC(두께사양)
        for (int i = 0, n = ds_itemSpecDetail.size(); i < n; i++) {
        	specParam = ds_itemSpecDetail.get(i);
        	//BAS_PRODUCTITEMSPEC Merge 
        	result += generalDao.addUpdate(NAMESAPCE + ".getUpdateProductItemSpecDetailData", specParam);
        }
    	return result;
	}
	
	/**
	* @fn 			: getUpdateMVHSpecDetailData
	* @brief 		: 함수 간략한 설명 
	* @Method Name : getUpdateMVHSpecDetailData
	* @remark		: 상세설명
	* @Author		: sungmin.choe
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 3. 25.       sungmin.choe      최초  생성
	 *
	*/
	private int getUpdateMVHSpecDetailData(DataSetMap ds_mvh, Map<String, Object> productParam) throws Exception{
		Map<String, Object> mvhParam 	= new HashMap<>();
		int result = 0;
    	//기존데이터 삭제
    	generalDao.addSelectOneMap(NAMESAPCE + ".checkDeleteMVHSpecDetail", productParam);
    	
        for (int i = 0, n = ds_mvh.size(); i < n; i++) {
        	mvhParam = ds_mvh.get(i);
        	mvhParam.put("ITEMID", productParam.get("ITEMID"));
        	mvhParam.put("ITEMVERSION", productParam.get("ITEMVERSION"));
        	mvhParam.put("SEQUENCE", mvhParam.get("SEQUENCE") == null ? (i+1) : mvhParam.get("SEQUENCE"));
        	
        	//BAS_PRODUCTITEMSPECMVH Merge 
        	result += generalDao.addUpdate(NAMESAPCE + ".getUpdateMVHSpecDetailData", mvhParam);
        }
    	return result;
	}
	
	/**
	* @fn 			: getUpsertProductItemThickSpecData
	* @brief 		: 함수 간략한 설명 
	* @Method Name : getUpsertProductItemThickSpecData
	* @remark		: 상세설명
	* @Author		: sungmin.choe
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 3. 25.       sungmin.choe      최초  생성
	 *
	*/
	private int getUpsertProductItemThickSpecData(DataSetMap ds_platingSpec, Map<String, Object> productParam) throws Exception{
		Map<String, Object> platingParam 	= new HashMap<>();
		int result = 0;
    	
        for (int i = 0, n = ds_platingSpec.size(); i < n; i++) {
        	platingParam = ds_platingSpec.get(i);
        	//BAS_PRODUCTITEMTHICKSPEC Merge 
        	platingParam.put("THICKNO", platingParam.get("THICKNO")==null? (i+1) : platingParam.get("THICKNO"));
        	result += generalDao.addUpdate(NAMESAPCE + ".getUpsertProductItemThickSpecData", platingParam);
        }
    	return result;
	}
	
	/**
	* @fn 			: getUpsertProductItemSpecCommentData
	* @brief 		: 함수 간략한 설명 
	* @Method Name : getUpsertProductItemSpecCommentData
	* @remark		: 상세설명
	* @Author		: sungmin.choe
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 3. 25.       sungmin.choe      최초  생성
	 *
	*/
	private int getUpsertProductItemSpecCommentData(DataSetMap ds_specComment, Map<String, Object> productParam) throws Exception{
		Map<String, Object> commentParam 	= new HashMap<>();
		int result = 0;
    	
        for (int i = 0, n = ds_specComment.size(); i < n; i++) {
        	commentParam = ds_specComment.get(i);
        	commentParam.put("ITEMID", productParam.get("ITEMID"));
        	commentParam.put("ITEMVERSION", productParam.get("ITEMVERSION"));
        	//BAS_PRODUCTITEMSPECCOMMENT Merge 
        	result += generalDao.addUpdate(NAMESAPCE + ".getUpsertProductItemSpecCommentData", commentParam);
        }
    	return result;
	}
	
	/**
	* @fn 			: getUpdateProductItemSpecDetailData_InkInfo
	* @brief 		: 함수 간략한 설명 
	* @Method Name : getUpdateProductItemSpecDetailData_InkInfo
	* @remark		: 상세설명
	* @Author		: sungmin.choe
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 3. 29.       sungmin.choe      최초  생성
	 *
	*/
	private int getUpdateProductItemSpecDetailData_InkInfo(DataSetMap ds_ink, Map<String, Object> productParam) throws Exception{
		Map<String, Object> inkParam 	= new HashMap<>();
		int result = 0;
		for (int i = 0, n = ds_ink.size(); i < n; i++) {
			inkParam = ds_ink.get(i);
			int type = getRowType(inkParam);            
	        if (type == DataSet.ROW_TYPE_DELETED) {
	        	result += generalDao.addUpdate(NAMESAPCE + ".getDeleteProductItemSpecDetailData_InkInfo", inkParam);
	        } else {            	
	        	inkParam.put("ITEMID", productParam.get("ITEMID"));
	        	inkParam.put("ITEMVERSION", productParam.get("ITEMVERSION"));
	        	inkParam.put("SEQUENCE1", inkParam.get("SEQUENCE1")==null ? i+1 : inkParam.get("SEQUENCE1"));
	        	result += generalDao.addUpdate(NAMESAPCE + ".getUpdateProductItemSpecDetailData_InkInfo", inkParam);
	        }
		}
        
    	return result;
	}
	
	/**
	* @fn 			: getUpdateProductItemSpecDetailData_PlatingInfo
	* @brief 		: 함수 간략한 설명 
	* @Method Name : getUpdateProductItemSpecDetailData_PlatingInfo
	* @remark		: 상세설명
	* @Author		: sungmin.choe
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 3. 29.       sungmin.choe      최초  생성
	 *
	*/
	private int getUpdateProductItemSpecDetailData_PlatingInfo(DataSetMap ds_materialPlatingList, Map<String, Object> productParam) throws Exception{
		Map<String, Object> platingParam 	= new HashMap<>();
		int result = 0;
		for (int i = 0, n = ds_materialPlatingList.size(); i < n; i++) {
			platingParam = ds_materialPlatingList.get(i);
			result += generalDao.addUpdate(NAMESAPCE + ".getUpdateProductItemSpecDetailData_PlatingInfo", platingParam);
		}
        
    	return result;
	}
	
	/**
	* @fn 			: getUpdateProductItemSpecToolData1
	* @brief 		: 함수 간략한 설명 
	* @Method Name : getUpdateProductItemSpecToolData1
	* @remark		: 상세설명
	* @Author		: sungmin.choe
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 3. 30.       sungmin.choe      최초  생성
	 *
	*/
	private int getUpdateProductItemSpecToolData(DataSetMap ds_etc, Map<String, Object> productParam) throws Exception{
		Map<String, Object> etcParam 	= new HashMap<>();
		int result = 0;
		for (int i = 0, n = ds_etc.size(); i < n; i++) {
			etcParam = ds_etc.get(i);
			int type = getRowType(etcParam);            
			etcParam.put("ITEMID", productParam.get("ITEMID"));
        	etcParam.put("ITEMVERSION", productParam.get("ITEMVERSION"));
	        if (type == DataSet.ROW_TYPE_DELETED) {
	        	result += generalDao.addUpdate(NAMESAPCE + ".getDeleteProductItemSpecToolData", etcParam);
	        } else {
	        	etcParam.put("SEQUENCE", etcParam.get("SEQUENCE")==null ? i+1 : etcParam.get("SEQUENCE"));	        	  	
	        	result += generalDao.addUpdate(NAMESAPCE + ".getUpdateProductItemSpecToolData", etcParam);
	        }
		}
    	return result;
	}
}