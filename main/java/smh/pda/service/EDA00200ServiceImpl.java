package smh.pda.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.ErpDao;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;


/**
* @file: EDA00100ServiceImpl.java
* @Package: smh.osm.service
* @Project name: IFC MES시스템 구축
* @Type name: EDA00100ServiceImpl
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
public class EDA00200ServiceImpl extends AbstractNbdfService implements EDA00200Service {

	@Value("#{commonsProp['env.server']?:'local'}")
	private String envServer; // 서버종류(local,dev,prod,vera)

	public static final String NAMESAPCE = "smh.pda.dao.EDA00200Dao";

    @Autowired
    private ErpDao erpDao;
    /**
     * @fn
     * @brief (Override method) Claim공정별 기준금액  수정, 등록, 삭제 기능
     * @remark - 공급사 제조LOT 입력 트랜젝션 처리
     * @see smh.osm.service.EDA00200Service#saveGroupCode(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void executeFifo12(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        erpDao.addSelect(NAMESAPCE + ".executeFifo12", param);
        if("N".equals(param.get("P_EXISTS"))) {
        	throw new BizException("ProcessingError",(String) param.get("P_SPLIT_NUM"));
        }
        //List<Map<String, Object>> list =  new ArrayList();
        //param.put("O_RTN_CURSOR", list);
        erpDao.addSelect(NAMESAPCE + ".selectFifo13", param);
        List<Map<String, Object>> list = (List<Map<String, Object>>) param.get("O_RTN_CURSOR");
     	putDataSetMap(dto, list);
    }

    /**
     * @fn
     * @brief (Override method) 환산금액 조회
     * @remark [조회] 버튼 클릭시 호출
     * @see smh.osm.service.EDA00200Service#selectBasProductquotationsegmentList(com.nbdf.commons.ui.vo.UiMapDto)
     */
	@Override
    public void selectFifo11(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        erpDao.addSelect(NAMESAPCE + ".selectFifo11", param);
        putDataSetMap(dto, param);
    }
    
    /**
     * @fn
     * @brief (Override method) 환산금액 조회
     * @remark [조회] 버튼 클릭시 호출
     * @see smh.osm.service.EDA00200Service#selectLogin(com.nbdf.commons.ui.vo.UiMapDto)
     */
//	@Override
//    public void selectLogin(UiMapDto dto, HttpServletRequest request, HttpServletResponse response) throws Exception {
//        Map<String, Object> param = getParametersMap(dto);
//		SessionManager sessionManager = SessionManager.getInstance(envServer);
//		sessionManager.setSessionInfo(ContextConstant.SESSION_USER_ID, (String) param.get("USER_ID"));
//		logger.error("USER_ID.."+SessionUtil.getSessionValue("USER_ID"));
//        generalDao.addSelect(NAMESAPCE + ".selectLogin", param);
//        if("N".equals(param.get("CHECK"))) {
//        	throw new BizException("LoginInfoNotExists");
//        }
//        CMSYservice.loginPost(dto, request, response);
//        putDataSetMap(dto, param);
//    }

    /**
     * @fn
     * @brief (Override method) 환산금액 조회
     * @remark [조회] 버튼 클릭시 호출
     * @see smh.osm.service.EDA00200Service#selectBasProductquotationsegmentList(com.nbdf.commons.ui.vo.UiMapDto)
     */
	@Override
    public void selectFifo13(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        erpDao.addSelect(NAMESAPCE + ".selectFifo13", param);
     	List<Map<String, Object>> list = (List<Map<String, Object>>) param.get("O_RTN_CURSOR");
     	putDataSetMap(dto, list);
    }
	
}