package com.nbdf.cmd.cm.cmzc.service;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
//import com.nbdf.commons.web.support.AbstractDao;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
* @file: CMZC015000ServiceImpl.java
* @Package: com.nbdf.cmd.cm.cmzc.service
* @Project name: IFC MES시스템 구축
* @Type name: CMZC015000ServiceImpl
* @Company: Built1
* @Create Date: 2015 2015. 3. 27
* @Author: 진성하
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일            수정자     수정내용
 *   ------------  ------    ----------
 *   2015. 3. 27.    진성하     최초  생성
 *
*/
@Service
public class CMZC01500ServiceImpl extends AbstractNbdfService implements CMZC01500Service {
    public static final String NAMESAPCE = "com.nbdf.cmd.cm.cmzc.dao.CMZC01500Dao";

    @Autowired
    private GeneralDao generalDao;

     /**
      * @fn
      * @brief (Override method) 우편번호 시도 그룹 조회
      * @param dto UiMapDto
      * @remark
      * @see
      */
      public void selectZipsSidoList(UiMapDto dto)  throws Exception {


          Map<String, Object> param = getParametersMap(dto);
          putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectZipsSidoList", param));

      }

      /**
       * @fn
       * @brief (Override method) 우편번호 검색 카운트
       * @param dto UiMapDto
       * @remark
       * @see
       */
       public void selectZipsSearchCount(UiMapDto dto)  throws Exception {
           Map<String, Object> param = getParametersMap(dto);

           List<Map<String, Object>> cntList = generalDao.addSelect(NAMESAPCE + ".selectZipsSearchCount", param);
           logger.debug("*** 우편번호 전체 카운트 : selectZipsSearchCount = " + cntList.get(0).get("CNT"));
           putDataSetMap(dto, cntList);
       }

      /**
       * @fn
       * @brief (Override method) 우편번호 검색 리스트
       * @param dto UiMapDto
       * @remark
       * @see
       */
       public void selectZipsSearchList(UiMapDto dto)  throws Exception {
           Map<String, Object> param = getParametersMap(dto);

           logger.debug("*** 우편번호 검색 리스트 : selectZipsSearchList CALL...param=" + param.toString());

           int pStart = 1;
           int pEnd = 20;
           if(param.get("P_START") == null || param.get("P_START").equals("") || param.get("P_START").equals("NaN")) {
               param.put("P_START", pStart); // 시작페이지
           }
           if(param.get("P_END") == null || param.get("P_END").equals("") || param.get("P_END").equals("NaN") ) {
               param.put("P_END", pEnd); // 페이지당 목록 수
           }
           List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCE + ".selectZipsSearchList", param);
           if(list != null) {
               logger.debug("*** selectZipsSearchList result = [" + list.size() + "]");
           }

           /*
           // 배치 프로시져 Call 테스트
           Map<String, Object> map =  new ConcurrentHashMap<String, Object>();
           map.put("v_grp_cd",  "CMD_DATA_ATRB"); // Input 파라미터 변수1
           map.put("v_cm_cd",  "TEXT");                 // Input 파라미터 변수2

           logger.debug("배치 프로시져 Call 테스트 ...  sampleBatchSp");
           generalDao.addSelectOneMap(NAMESAPCE + ".sampleBatchSp", map); // 프로시져 Call
           logger.debug("프로시져 Call후 받은 OUT Fix 변수 ");
           logger.debug("P_FET_CNT    : [" + map.get("P_FET_CNT") + "]");   // 처리대상 건수
           logger.debug("P_SKP_CNT    : [" + map.get("P_SKP_CNT") + "]");   // 스킵 건수
           logger.debug("P_ERR_CNT    : [" + map.get("P_ERR_CNT") + "]");   // 오류 건수
           logger.debug("P_ERR_DESC   : [" + map.get("P_ERR_DESC") + "]"); // 오류 메시지
           // 차후 배치 로그에 테이블(CMD_BAT_LOGS)에 INSERT 됨.
            */

           putDataSetMap(dto,  list);
       }

       /**
        * @fn
        * @brief (Override method) 우편번호 사서함 검색 카운트
        * @param dto UiMapDto
        * @remark
        * @see
        */
        public void selectMlbxSearchCount(UiMapDto dto)  throws Exception {
            Map<String, Object> param = getParametersMap(dto);

            List<Map<String, Object>> cntList = generalDao.addSelect(NAMESAPCE + ".selectMlbxSearchCount", param);
            logger.debug("*** 우편번호 사서함 전체 카운트 : selectMlbxSearchCount = " + cntList.get(0).get("CNT"));
            putDataSetMap(dto, cntList);
        }

       /**
        * @fn
        * @brief (Override method) 우편번호 사서함 검색 리스트
        * @param dto UiMapDto
        * @remark
        * @see
        */
        public void selectMlbxSearchList(UiMapDto dto)  throws Exception {
            Map<String, Object> param = getParametersMap(dto);
            //logger.debug("*** 우편번호 사서함 검색 리스트 : selectMlbxSearchList CALL...param=" + param.toString());
            int pStart = 1;
            int pEnd = 20;
            if(param.get("P_START") == null || param.get("P_START").equals("") || param.get("P_START").equals("NaN")) {
                param.put("P_START", pStart); // 시작페이지
            }
            if(param.get("P_END") == null || param.get("P_END").equals("") || param.get("P_END").equals("NaN") ) {
                param.put("P_END", pEnd); // 페이지당 목록 수
            }
            List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCE + ".selectMlbxSearchList", param);
            if(list != null) {
                logger.debug("*** selectMlbxSearchList result = [" + list.size() + "]");
            }
            putDataSetMap(dto,  list);
        }

 }