package smh.pda.service;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.ErpDao;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;


@Service
public class EDA00300ServiceImpl extends AbstractNbdfService implements EDA00300Service {

	@Value("#{commonsProp['env.server']?:'local'}")
	private String envServer; // 서버종류(local,dev,prod,vera)

	public static final String NAMESAPCE = "smh.pda.dao.EDA00300Dao";

    @Autowired
    private GeneralDao generalDao;

    @Autowired
    private ErpDao erpDao;
    
	/**
	* @fn 			: selectFifo21
	* @brief 		: 함수 간략한 설명 
	* @Method Name : selectFifo021
	* @remark		: 상세설명
	* @Author		: sungmin.choe
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 6. 1.       sungmin.choe      최초  생성
	 *
	*/
	@Override
    public void selectFifo21(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        erpDao.addSelect(NAMESAPCE + ".selectFifo21", param);
        putDataSetMap(dto, param);
    }
	
	/**
	* @fn 			: selectFifo22
	* @brief 		: 함수 간략한 설명 
	* @Method Name : selectFifo022
	* @remark		: 상세설명
	* @Author		: sungmin.choe
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 6. 1.       sungmin.choe      최초  생성
	 *
	*/
	@Override
    public void selectFifo22(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        erpDao.addSelect(NAMESAPCE + ".selectFifo22", param);
     	putDataSetMap(dto, (List<Map<String, Object>>) param.get("O_RTN_CURSOR"));
    }

	/**
	* @fn 			: selectFifo23
	* @brief 		: (Override method) 함수 간략한 설명
	* @Method Name : selectFifo23
	* @remark		: 상세설명
* @see smh.pda.service.EDA00300Service#selectFifo23(com.nbdf.commons.ui.vo.UiMapDto)
	*/
	@Override
    public void selectFifo23(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        erpDao.addSelect(NAMESAPCE + ".selectFifo23", param);
        putDataSetMap(dto, param);
    }
	
	
	/**
	* @fn 			: selectFifo24
	* @brief 		: (Override method) 함수 간략한 설명
	* @Method Name : selectFifo24
	* @remark		: 상세설명
* @see smh.pda.service.EDA00300Service#selectFifo24(com.nbdf.commons.ui.vo.UiMapDto)
	*/
	@Override
    public void selectFifo24(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        erpDao.addSelect(NAMESAPCE + ".selectFifo24", param);
        putDataSetMap(dto, param);
    }
	
	/**
	* @fn 			: selectFifo25
	* @brief 		: 함수 간략한 설명 
	* @Method Name : selectFifo25
	* @remark		: 상세설명
	* @Author		: sungmin.choe
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 6. 1.       sungmin.choe      최초  생성
	 *
	*/
	@Override
    public void selectFifo25(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        erpDao.addSelect(NAMESAPCE + ".selectFifo25", param);
        putDataSetMap(dto, param);
    }
	
	/**
	* @fn 			: selectFifo26
	* @brief 		: 함수 간략한 설명 
	* @Method Name : selectFifo26
	* @remark		: 상세설명
	* @Author		: sungmin.choe
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 6. 1.       sungmin.choe      최초  생성
	 *
	*/
	@Override
    public void selectFifo26(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        erpDao.addSelect(NAMESAPCE + ".selectFifo26", param);
        putDataSetMap(dto, param);
    }
	
	/**
	* @fn 			: moveTrx
	* @brief 		: 함수 간략한 설명 
	* @Method Name : moveTrx
	* @remark		: 상세설명
	* @Author		: sungmin.choe
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 6. 1.       sungmin.choe      최초  생성
	 *
	*/
	@Override
    public void moveTrx(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        erpDao.addSelect(NAMESAPCE + ".moveTrx", param);
        putDataSetMap(dto, param);
    }
}