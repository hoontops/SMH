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
* @file: pesp01200ServiceImpl.java
* @Package: com.nbdf.cmd.cm.pesp.service
* @Project name: IFC MES시스템 구축
* @Type name: pesp01200ServiceImpl
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
*/
@Service
public class PESP01200ServiceImpl extends AbstractNbdfService implements PESP01200Service {

    public static final String NAMESAPCE = "com.nbdf.cmd.cm.pesp.dao.PESP01200Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief (Override method) 그룹 코드 조회
     * @remark 1. onLoad()시 호출 2. [조회] 버튼 클릭시 호출
     * @see com.nbdf.cmd.cm.pesp.service.pesp01200Service#selectPesHelpDesk(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectPesHelpDeskList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectPesHelpDeskList", param));
    }

    /**
     * @fn
     * @brief (Override method) 헬프데스크 수정, 등록, 삭제 기능
     * @remark - 헬프데스크 수정, 등록, 삭제 트랜젝션 처리 - 상세코드에 데이터가 있으면 삭제처리 하지 않고 롤백
     * @see com.nbdf.cmd.cm.pesp.service.pesp01200Service#saveGroupCode(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void savePesHelpDesk(UiMapDto dto) throws Exception {
        DataSetMap paramMap = getParametersDataSetMap(dto);
        Map<String, Object> param;

        int result = 0;
        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);

            int type = getRowType(param);
            if (type == DataSet.ROW_TYPE_INSERTED && param.get("JOB_NAME") != null && !"".equals(param.get("JOB_NAME"))) {
                result += generalDao.addUpdate(NAMESAPCE + ".insertPesHelpDesk", param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
                result += generalDao.addUpdate(NAMESAPCE + ".updatePesHelpDesk", param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
                result += generalDao.addUpdate(NAMESAPCE + ".deletePesHelpDesk", param);
            }
        }
        putDataSetMap(dto, result);
    }

    /**
     * @fn
     * @brief (Override method) 담당자 조회
     * @remark 1. onLoad()시 호출 2. [조회] 버튼 클릭시 호출
     * @see com.nbdf.cmd.cm.pesp.service.pesp01200Service#selectPesPortalUsersList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectPesPortalUsersList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectPesPortalUsersList", param));
    }


}