package smh.pay.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.SessionUtil;
import com.nbdf.commons.web.support.GeneralDao;
import com.nbdf.commons.web.support.AbstractNbdfService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.Cache;
import org.springframework.cache.ehcache.EhCacheCacheManager;
import org.springframework.stereotype.Service;

import com.nexacro17.xapi.data.DataSet;

/**
 * @fn : selectPayCalendarList
 * @brief : 출근현황 리스트 조회
 * @Method Name : selectPayCalendarList
 * @remark
 * @Create Date: 2022. 01. 20
 * @Author: 유성연
 * @File Version: v1.0
 *
 *       << 개정이력(Modification Information) >>
 *
 *       수정일 수정자 수정내용 ------------ ------ ---------- 2022.01.20. 유성연 최초 생성
 *
 */

@Service
public class PAY40130ServiceImpl extends AbstractNbdfService implements PAY40130Service {

	public static final String NAMESPACE = "smh.pay.dao.PAY40130Dao";
	@Autowired
	private GeneralDao generalDao;

	public void selectPayCalendarList(UiMapDto dto) {
		Map<String, Object> param = getParametersMap(dto);
		System.out.println("param.entrySet() : " + param.entrySet());
		//출근현황 조회 select
		List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectPayCalendarList", param);
		
		putDataSetMap(dto, list);
	}

	/**
	 * @fn : saveCalendarList
	 * @brief : (Override method) 인사고충상담현황 상태 수정
	 * @Method Name : saveCalendarList
	 * @remark : 상세설명
	 * @see smh.pay.service.PAY40130Service#saveCalendarList(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	@Override
	public void saveCalendarList(UiMapDto dto) throws Exception {
		DataSetMap paramMap = getParametersDataSetMap(dto);
		Map<String, Object> param;

		int result = 0;

		for (int i = 0, n = paramMap.size(); i < n; i++) {
			param = paramMap.get(i);
			int type = getRowType(param);
			//OBJECT_VERSION_NUMBER이 없으면
			if (!param.containsKey("OBJECT_VERSION_NUMBER")) {
				
				result += insertCalendarList(param);
			} else {
				result += updateCalendarList(param);
			}

		}
		putDataSetMap(dto, result);
	}

	/**
	 * @fn : insertCalendarList
	 * @brief : (Override method) 출근현황 등록
	 * @Method Name : insertCalendarList
	 * @remark : 상세설명
	 * @see
	 */
	private int insertCalendarList(Map<String, Object> param) throws Exception {
		Map<String, Object> paramMap = new HashMap<String, Object>();

		// HashMap Copy
		for (Map.Entry<String, Object> entry : param.entrySet()) {
			paramMap.put(entry.getKey(), entry.getValue());
		}
		
		/* 조회시 출근현황 테이블에 데이터가 미존재시에도 일자별로 데이터는 생성되므로 데이터 생성시에는 해당 정보를 강제로 만들어줘야 함
		 * 로그인사용자의 person_id 가져오기*/
		String personId = generalDao.addSelectOne(NAMESPACE + ".selectErpPersonId", paramMap);
		paramMap.put("PERSON_ID", personId);
		//출근현황 조회 select
		Map<String, Object> rtnMap = generalDao.addSelectOneMap(NAMESPACE + ".selectAttandanceDelay", paramMap);

		if (rtnMap != null) {
			String workAtHome = (String) rtnMap.get("WORK_AT_HOME"); // 사용자가 출근기록한 출근시간
			String  startTime = (String) rtnMap.get("TIME_NORMAL_START"); //시스템 내 출근시간
			paramMap.put("TIME_NORMAL_START", startTime);
			
			//출근지연시간이 Y가 아니라면 
			if (!"Y".equals(workAtHome)) {
				int dffTime = generalDao.addSelectCount(NAMESPACE + ".selectAttandanceDelayCheck", paramMap);
				if (dffTime > 0) {
					paramMap.put("ATTENDANCE_DELAY", "Y");
				}
				else {
					paramMap.put("ATTENDANCE_DELAY", "N");
				}
			}
		}
		//
		int count = generalDao.addUpdate(NAMESPACE + ".insertCalendarList", paramMap);
		int seq = 0;
		if (count > 0) {
			seq = (int) paramMap.get("HJSHR_CERTIFICATION_SEQ");
		}
		// delete
		int delCount = generalDao.addUpdate(NAMESPACE + ".deleteCalendarList", paramMap);

		return count;
	}

	/**
	 * @fn : updateCalendarList
	 * @brief : (Override method) 비고내용
	 * @Method Name : updateCalendarList
	 * @remark : 상태변경
	 * @see
	 */
	private int updateCalendarList(Map<String, Object> param) throws Exception {
		Map<String, Object> paramMap = new HashMap<String, Object>();
		String comments = (String) param.get("COMMENTS"); // 비고 내용 업데이트

		// HashMap Copy
		for (Map.Entry<String, Object> entry : param.entrySet()) {
			paramMap.put(entry.getKey(), entry.getValue());
		}
// 2022-02-15 중복체크 부분 제외 
//		String isExsist = generalDao.addSelectOne(NAMESPACE + ".selectDuplicateChk", paramMap);
//
//		if (!"Y".equals(isExsist)) {
//			throw new BizException("InValidData001", String.format("COMMENTS = %s", comments));
//		}

		return generalDao.addUpdate(NAMESPACE + ".updateCalendarList", paramMap);
	}

}
