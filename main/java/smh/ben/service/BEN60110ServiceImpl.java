package smh.ben.service;

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



/**
* @file         : BEN60110ServiceImpl.java
* @Package      : smh.ben.service  
* @Project name : SM상선 myHR 고도화
* @Type name    : BEN60110ServiceImpl    
* @Company      : Built1
* @Create Date  : 2022 2022. 1. 28. 오후 2:14:25 
* @Author       : Administrator
* @File Version : v1.0 
*
* << 개정이력(Modification Information) >>
* 수정일             수정자             수정내용
* ------------     ------------     ------------
* 2022. 1. 28.       Administrator      최초생성
*/
@Service
public class BEN60110ServiceImpl extends AbstractNbdfService implements BEN60110Service {

    public static final String NAMESPACE = "smh.ben.dao.BEN60110Dao";

    @Autowired
    private GeneralDao generalDao;

    
    /**
    * @fn 
    * @brief (Override method) 함수 간략한 설명
    * @remark
    * - 조회 버튼 클릭시 호출
    * @see smh.ben.service.BEN60110Service#selectAddInsuraceList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectAddInsuraceList(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectAddInsuraceList", param), "output");
    }    
    
    
    /**
    * @fn 
    * @brief (Override method) 단체상해보험 데이터 저장
    * @remark
    * - 버튼 클릭시 호출
    * @see smh.ben.service.BEN60110Service#saveAddInsurace(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void saveAddInsurace(UiMapDto dto) throws Exception {
         DataSetMap paramMap = getParametersDataSetMap(dto);
         Map<String, Object> param;

         int result = 0;

         for (int i = 0, n = paramMap.size(); i < n; i++) {
             param = paramMap.get(i);
             int type = getRowType(param);	

             if (type == DataSet.ROW_TYPE_UPDATED) {
                 result += updateAddInsurace(param);
             }            
         }

         putDataSetMap(dto, result);
     }
    
    
    
    /**
    * @fn           : updateAddInsurace
    * @brief        : 단체상해보험 데이터 수정
    * @Method Name  : updateAddInsurace
    * @Create Date  : 2022 2022. 1. 28. 오후 2:13:41
    * @Author       : Administrator
    * @File Version : v1.0
    *
    * << 개정이력(Modification Information) >>
    * 수정일             수정자             수정내용
    * ------------     ------------     ------------
    * 2022. 1. 28.       Administrator      최초생성
    */
    private int updateAddInsurace(Map<String, Object> param) throws Exception {
		Map<String, Object> paramMap = new HashMap<String, Object>();
		String effectiveDate = (String)param.get("EFFECTIVE_DATE");
		 
		// HashMap Copy(포인트 주소를 실제 맵 데이터로 복사)
		for (Map.Entry<String, Object> entry : param.entrySet()) {
			paramMap.put(entry.getKey(), entry.getValue());
		}
		
		// 단체상해보험 신청 마감일자 체크
		String isExsist = generalDao.addSelectOne(NAMESPACE + ".selectCloseDateCheck", paramMap);
		
		// 마감되면 오류 처리
		if ("Y".equals(isExsist) )
		{
			throw new BizException("InValidData001", String.format("effectiveDate = %s", effectiveDate));
		} 
		
		// 정상적이면 단체상해보험 데이터 업데이트
		return generalDao.addUpdate(NAMESPACE + ".updateAddInsurace", paramMap);
	}
}
