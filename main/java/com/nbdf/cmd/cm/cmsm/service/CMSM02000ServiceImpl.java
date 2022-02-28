package com.nbdf.cmd.cm.cmsm.service;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.BizUtil;
import com.nbdf.commons.util.ObjectUtil;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

/**
* @file: CMSM02000ServiceImpl.java
* @Package: com.nbdf.cmd.cm.cmsm.service
* @Project name: IFC MES시스템 구축
* @Type name: CMSM02000ServiceImpl
* @Company: Built1
* @Create Date: 2015 2015. 3. 25
* @Author: 진성하
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일            수정자     수정내용
 *   ------------  ------    ----------
 *   2015. 3. 25.    진성하     최초  생성
 *   2015. 4. 25.    진성하     화면상의 조회를 위한 기능 구현 : selectSessionList()
 *
*/
@Service
public class CMSM02000ServiceImpl extends AbstractNbdfService implements CMSM02000Service {

    @Value("#{commonsProp['env.session.time']?:30}")
    private long sessionLimitTime; // 세션만료시간(분단위)

    public static final String NAMESAPCE = "com.nbdf.cmd.cm.cmsm.dao.CMSM02000Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn
    * @brief (Override method) 세션 목록 조회 화면에서 호출/ 세션 Count 조회(페이징 기능)
    * @remark
    * - 오버라이드 함수의 상세 설명
    * @see com.nbdf.cmd.cm.cmsm.service.CMSM02000Service#selectSessionList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectSessionList(UiMapDto dto)  throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCE + ".selectSessionList", param);
        putDataSetMap(dto, list, "ds_sessions");

        list = generalDao.addSelect(NAMESAPCE + ".selectSessionCount", param);
        putDataSetMap(dto, list, "ds_sessionsCount");
        }

    /**
     *
    * @fn
    * @brief (Override method) 해당 사용자의 세션정보 조회
    * @remark
    * - 오버라이드 함수의 상세 설명
    * @see com.nbdf.cmd.cm.cmsm.service.CMSM02000Service#selectSessionInfo(int)
     */
      @Override
      public Map<String, Object> selectSessionInfo(String userId)  throws Exception {
          ConcurrentHashMap<String, Object> param = new ConcurrentHashMap<String, Object>();
          param.put("USER_ID", userId);

          Map<String, Object> map = generalDao.selectOne(NAMESAPCE + ".selectSessionInfo", param);
          return map;
      }

      /**
       * @fn
       * @brief (Override method) 세션/인증 유효성여부 체크
       * @param lgnSessionId 로그인 세션ID
       * @param userId   포탈사용자ID
       * @param dto UiMapDto
       * @return boolean 결과(true,false)
       * @remark
       * @see
       */
      public boolean checkSessionValid(Map<String,String> sessionInfo) throws Exception {

          sessionInfo.put("CHECK_SESSION_TIME", (String) getProperty("env.session.time"));
          boolean result = true;
          String userId = generalDao.selectOne(NAMESAPCE+ ".checkSessionValid", sessionInfo);
          if(userId == null || userId.equals("") ) result = false;
          return result;
       }

      /**
       * @fn
       * @brief (Override method) 세션/인증 저장
       * @param  dto UiMapDto
       * @return int 결과(1,0)
       * @remark
       * @see
       */
      public int insertSessionInfo(UiMapDto dto) throws Exception {
           //Map<String, Object> param = new HashMap<String, Object>();
           ConcurrentHashMap<String, Object> param = new ConcurrentHashMap<String, Object>();
           int result = 1;

          // 실제 로직은 나중에..
           result = generalDao.insert(NAMESAPCE + ".insertSessionInfo", param);

           return result;
       }

      /**
       * @fn
       * @brief (Override method) 세션/인증 갱신(수정)
       * @param  dto UiMapDto
       * @return int 결과(1,0)
       * @remark
       * @see
       */
      public boolean updateSessionInfo(Map<String,String> sessionInfo) throws Exception {
          if(generalDao.update(NAMESAPCE + ".updateSessionInfo", sessionInfo) != 0) {
              return true;
          }else {
              return false;
          }
      }


      public Map<String, Object> getPortalUerId(Map<String, Object> gvLoginInfo) throws Exception {
          return  generalDao.addSelectOneMap("com.nbdf.pes.pe.penc.dao.PENC00010Dao.selectGlovelValueInfo", gvLoginInfo);
      }


      /**
       *
      * @fn
      * @brief (Override method) 요청한 사용자의 세션상태 리턴
      * @remark
      *  응답값 정의 -> -1:로그아웃 상태(로그인 필요), 1:로그인 상태이며 정상, 2:로그인 상태이나 중복로그인 요청되어 로그오프됨, 3:로그인 세션유지시간 만료
      * @see com.nbdf.cmd.cm.cmsm.service.CMSM02000Service#checkSessionStatus(int)
       */
    @Override
    public int checkSessionStatus(String userId, String reqIp) throws Exception {
        int status = 1;
//        if(userId == 0){ return -1; }
        if(StringUtil.isEmpty(userId)) { return -1; }
        ConcurrentHashMap<String, Object> param = new ConcurrentHashMap<String, Object>();
        param.put("USER_ID", userId);  //요청한 사용자 ID

        Map<String,Object> sessionInfoMap = generalDao.selectOne(NAMESAPCE + ".selectSessionInfo", param); //요청한 사용자 ID의 세션상태 조회
        if(sessionInfoMap == null ){    //없다면 한번도 로그인하지 않은상태 : -1(로그아웃상태)리턴
            return -1;
        }else{  //조회됨
            String cnctIp = ObjectUtil.toStrTrim(sessionInfoMap.get("CNCT_IP"));   //접속 IP
            String sessionVldYn = ObjectUtil.toStrTrim(sessionInfoMap.get("SESSION_VLD_YN"));   //세션 유효 여부
            String lstScrinUtTime = ObjectUtil.toStrTrim(sessionInfoMap.get("LST_SCRIN_UT_TIME"));   //마지막 서버 호출 시각
            if("N".equalsIgnoreCase(sessionVldYn)){ return -1; }
            if(lstScrinUtTime.length() == 14){
                long lastCallTime = BizUtil.calcSessionInvalidTime(lstScrinUtTime); //마지막 호출 시간의 '분' 계산
                if(lastCallTime > sessionLimitTime) { return 3; }
            }
            //중복로그인 체크 cnctIp : 세션테이블에 저장된 ip, reqIp:지금 요청이 들어온 ip
            //jsh 201711 
            if(!cnctIp.equals(reqIp)){ return 2; }
        }
        return status;
    }

    /**
     *
    * @fn
    * @brief (Override method) 요청한 dto에 부합되는 세션정보 조회
    * @remark
    * - 오버라이드 함수의 상세 설명
    * @see com.nbdf.cmd.cm.cmsm.service.CMSM02000Service#selectSessionInfo(java.util.Map)
     */
    @Override
    public Map<String, Object> selectSessionInfo(Map<String, Object> dto) throws Exception {
        Map<String, Object> map = generalDao.selectOne(NAMESAPCE + ".selectSessionInfo", dto);
        return map;
    }


 }