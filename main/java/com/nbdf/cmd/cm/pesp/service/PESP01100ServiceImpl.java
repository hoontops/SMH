package com.nbdf.cmd.cm.pesp.service;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.DateUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro17.xapi.data.DataSet;

/**
* @file: pesp01100ServiceImpl.java
* @Package: com.nbdf.cmd.cm.pesp.service
* @Project name: IFC MES시스템 구축
* @Type name: pesp01100ServiceImpl
* @Company: Built1
* @Create Date: 2015 2015. 8. 6. 오후 4:29:40
* @Author: JinSungHa
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 3. 10.   진성하     최초  생성
 *   2015. 8. 06.   진성하     IFS(연계) 테이블 저장 로직 추가
 *   2015. 12.08    진성하    서버시간 가져오기를 DB-->WAS시간으로 변경
*/
@Service
public class PESP01100ServiceImpl extends AbstractNbdfService implements PESP01100Service {

    public static final String NAMESAPCE = "com.nbdf.cmd.cm.pesp.dao.PESP01100Dao";
    public static final String COMCD_CHECK_SQL = "selectCdList";

    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief (Override method) 그룹 코드 조회
     * @remark 1. onLoad()시 호출 2. [조회] 버튼 클릭시 호출
     * @see com.nbdf.cmd.cm.pesp.service.pesp01100Service#selectGrpCd(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectGrpCdList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectGrpCdList", param));
    }

    /**
     * @fn
     * @brief (Override method) 상세코드를 조회
     * @remark - 상세 코드 조회
     * @see com.nbdf.cmd.cm.pesp.service.pesp01100Service#selectCodeSearch(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectCdList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectCdList", param));
    }

    /**
     * @fn
     * @brief (Override method) (엑셀다운로드용)그룹코드와 상세코드 전체를 조회
     * @remark Multi 그리드 + Dataset 조회
     * @see com.nbdf.cmd.cm.pesp.service.pesp01100Service#selectAll(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectGrpCmCdList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        logger.debug("들어옴");
        List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCE + ".selectGrpCdList", param);
        logger.debug("들어옴2");
        putDataSetMap(dto, list, "ds_grpCdResult");
        if (list.size() > 0) {
            Map<String, Object> grpCdList = list.get(0);
            param.put("GRP_CD", grpCdList.get("GRP_CD"));
            list = generalDao.addSelect(NAMESAPCE + ".selectCdList", param);
            if (list.size() > 0) {
                putDataSetMap(dto, list, "ds_cdResult");
            } else {
                putDataSetMap(dto, list, "ds_cdResult");
            }
        }
    }

    /**
     * @fn
     * @brief (Override method) 그룹코드 수정, 등록, 삭제 기능
     * @remark - 그룹코드 수정, 등록, 삭제 트랜젝션 처리 - 상세코드에 데이터가 있으면 삭제처리 하지 않고 롤백
     * @see com.nbdf.cmd.cm.pesp.service.pesp01100Service#saveGroupCode(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void saveGrpCd(UiMapDto dto) throws Exception {
        DataSetMap paramMap = getParametersDataSetMap(dto);
        Map<String, Object> param;
        Map<String, Object> map = new ConcurrentHashMap<String, Object>();
        boolean pkChange = false;
        String grp_cd = "";

        int result = 0;
        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            param.put("LINK_STAT_CD", "N");                              // N:신규, P:진행, S:성공, F:실패
            param.put("CUD_KEY", "C");                                     // C:Create, U:Delete 후 Insert,

            int type = getRowType(param);
            if (type == DataSet.ROW_TYPE_INSERTED) {
                result += generalDao.addUpdate(NAMESAPCE + ".insertGrpCd", param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
                param.put("CUD_KEY", "U");
                result += generalDao.addUpdate(NAMESAPCE + ".updateGrpCd", param);

                if (!param.get("GRP_CD").equals(param.get("OLD_GRP_CD"))) { // 그룹코드가 변경된 경우
                    result += generalDao.addUpdate(NAMESAPCE + ".updateAllCd", param);
                    pkChange = true;
                    grp_cd = (String)param.get("GRP_CD");
                    //param.put("CUD_KEY", "C");
                    //result += generalDao.addUpdate(NAMESAPCE + ".inertAddAllCdIfs", param); // EAI

                }
            } else if (type == DataSet.ROW_TYPE_DELETED) {
                //param.put("CUD_KEY", "D");                                     // C:Create, U:Delete 후 Insert,
                //result += generalDao.addUpdate(NAMESAPCE + ".insertAllCdIfs", param); // EAI -- 문제발생

                //result += generalDao.addUpdate(NAMESAPCE + ".deleteGrpCd", param);
                result += generalDao.addUpdate(NAMESAPCE + ".deleteAllCd", param);
            }
            //result += generalDao.addUpdate(NAMESAPCE + ".insertGrpCdIfs", param);  // EAI
        }
//        if(pkChange) {
//            map.put("CUD_KEY", "U");
//            map.put("LINK_STAT_CD", "N");
//            map.put("GRP_CD", grp_cd);
//            result += generalDao.addUpdate(NAMESAPCE + ".insertAllCdIfs", map); // EAI
//        }


        List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCE + ".selectGrpCdList");
        putDataSetMap(dto, list, "ds_grpCd");
    }

    /**
     * @fn
     * @brief (Override method) 상세코드 수정, 등록, 삭제 기능
     * @remark - 코드(상세코드) 수정, 등록, 삭제 트랜젝션 처리
     * @see com.nbdf.cmd.cm.pesp.service.pesp01100Service#saveGridCode(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void saveCd(UiMapDto dto) throws Exception {
        //generalDao.saveCud(dto, NAMESAPCE, "Cd");

        DataSetMap paramMap = getParametersDataSetMap(dto);
        Map<String, Object> param;
        for (int i = 0, n = paramMap.size(); i < n; i++) {
            logger.debug("N ==>>> "+n);
            param = paramMap.get(i);
            int type = getRowType(param);
            param.put("LINK_STAT_CD", "N");

            if (type == DataSet.ROW_TYPE_INSERTED) {
                //param.put("CUD_KEY", "C");//
                //generalDao.addUpdate(NAMESAPCE + ".insertCdIfs", param);  // EAI
                generalDao.addUpdate(NAMESAPCE + ".insertCd", param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
                    //param.put("CUD_KEY", "U");
                    //generalDao.addUpdate(NAMESAPCE + ".insertCdIfs", param);  // EAI (변경된 코드 신규로 요청)
                    generalDao.addUpdate(NAMESAPCE + ".updateCd", param);
            } else if ( type== DataSet.ROW_TYPE_DELETED) {
                //param.put("CUD_KEY", "D");
                //generalDao.addUpdate(NAMESAPCE + ".insertCdIfs", param);  // EAI
                generalDao.addUpdate(NAMESAPCE + ".deleteCd", param);
            }
        }
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectCdList", getParametersMap(dto)), "ds_cd");
    }
//
    /**
     * @fn
     * @brief (Override method) 넥사크로에서 사용할 공통 코드 전체 조회
     * @remark - 공통코드 전체 조회(넥사크로에서 공통으로 사용) (모든 업무단에서 사용 할 수 있도록 넥사크로 공통 프레임영역에서 호출(API))
     * @see com.nbdf.cmd.cm.pesp.service.pesp01100Service#selectCmCode(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectCmCode(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCE + ".selectCmCode", param);
        putDataSetMap(dto, list);
    }

    /**
     * @fn : multiDsCode(샘플)
     * @brief : Multi 그리드 + Dataset 코드 수정, 등록, 삭제 기능
     * @Method Name : multiDsCode
     * @remark
     * @Create Date: 2015 2015. 3. 4. 오전 11:04:11
     * @Author: 진성하
     * @File Version: v1.0
     *
     *       << 개정이력(Modification Information) >>
     *
     *       수정일 수정자 수정내용 ------------ ------ ---------- 2015. 3. 4. 진성하 최초 생성
     *
     */
    public void multiDsCode(UiMapDto dto) throws Exception {

        int result = 0;
        result += subGridCode(dto, getParametersDataSetMap(dto, "ds_result_master"), "GroupCode"); // 개발자 작업 영역
        result += subGridCode(dto, getParametersDataSetMap(dto, "ds_result_detail"), "Code"); // 개발자 작업 영역
    }

    /**
     * @fn : subGridCode(샘플)
     * @brief : multiDsCode 함수에서 호출하여 실제 수정,등록,삭제를 처리
     * @Method Name : subGridCode
     * @remark
     * @Create Date: 2015 2015. 3. 9. 오후 7:40:54
     * @Author: 진성하
     * @File Version: v1.0
     *
     *       << 개정이력(Modification Information) >>
     *
     *       수정일 수정자 수정내용 ------------ ------ ---------- 2015. 3. 9. 진성하 최초 생성
     *
     */
    public Integer subGridCode(UiMapDto dto, DataSetMap dsMap, String sqlId) throws Exception {

        int result = 0;
        for (int i = 0, n = dsMap.size(); i < n; i++) {
            Map<String, Object> param = dsMap.get(i);
            int type = getRowType(param);
            if (type == DataSet.ROW_TYPE_INSERTED) {
                result += generalDao.addUpdate(NAMESAPCE + ".insert" + sqlId, param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
                result += generalDao.addUpdate(NAMESAPCE + ".update" + sqlId, param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
                result += generalDao.addUpdate(NAMESAPCE + ".delete" + sqlId, param);
            }
        }
        putDataSetMap(dto, result);
        return result;
    }

    /**
     * @fn
     * @brief (Override method) 엑셀 다운로드
     * @remark - 엑셀 다운로드
     * @see com.nbdf.cmd.cm.pesp.service.pesp01100Service#selectExcelDn(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void selectExcelDn(UiMapDto dto) throws Exception {
        DataSetMap paramMap = getParametersDataSetMap(dto);
        Map<String, Object> param;
        List<String> list = new ArrayList<String>();

        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            list.add((String) param.get("GRP_CD"));
        }
        List<Map<String, Object>> result = generalDao.addSelect(NAMESAPCE + ".selectExcelDn", list);
        putDataSetMap(dto, result, "ds_cdExcel");
    }

    /**
     * @fn
     * @brief (Override method) WAS서버시간 가져오기 (yyyyMMdd)
     * @remark - WAS서버시간 가져오기 (yyyyMMdd)
     * @see
     */
    @Override
    public void selectServerDbToday(UiMapDto dto) throws Exception {
        //Map<String, Object> param = getParametersMap(dto);

        List<Map<String, Object>> resulList = new ArrayList<Map<String, Object>>();
        Map<String, Object> resultMap =  new ConcurrentHashMap<String, Object>();
        String sToday= DateUtil.getNowDate("yyyyMMdd");
        //logger.debug("*** TODAY = [" + sToday + "]");
        resultMap.put("TODAY",  sToday);
        resulList.add(resultMap);
        putDataSetMap(dto, resulList);
        //putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectServerDbToday", param));
    }

    /**
     * @fn
     * @brief (Override method) WAS서버시간 가져오기 (yyyyMMddHHmmss)
     * @remark - WAS서버시간 가져오기 (yyyyMMddHHmmss)
     * @see
     */
    @Override
    public void selectServerDbTime(UiMapDto dto) throws Exception {
       // Map<String, Object> param = getParametersMap(dto);

        List<Map<String, Object>> resulList = new ArrayList<Map<String, Object>>();
        Map<String, Object> resultMap =  new ConcurrentHashMap<String, Object>();
        String sTodayTime= DateUtil.getNowDateTime();
        //logger.debug("*** TODAY_TIME = [" + sTodayTime + "]");
        resultMap.put("TODAY_TIME",  sTodayTime);
        resulList.add(resultMap);
        putDataSetMap(dto, resulList);
        //putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectServerDbTime", param));
    }

}