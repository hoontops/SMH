package smh.bas.service;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
* @file: BAS03700ServiceImpl.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS03700ServiceImpl
* @Company: Built1
* @Create Date: 2021.3.5
* @Author: 김기수
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 5.   김기수     최초  생성
*/
@Service
public class BAS03700ServiceImpl extends AbstractNbdfService implements BAS03700Service {

    public static final String NAMESAPCE = "smh.bas.dao.BAS03700Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief (Override method) BOM 소요량 조회
     * @remark 
     * @see smh.bas.service.BAS03700Service#selectBasBOMList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectBasBOMList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectBasBOMList", param));
    }

    public void selectBasBOMListExcel(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        logger.error("param-->"+param);
        List<Map<String, Object>> list = null;
        /**
         * ######################################################
         * 조회 index from / to 를 설정하기 위한 페이징 정보 추출
         * ######################################################
         */
        if(param.get("P_COUNT")==null) param.put("P_COUNT",200000);
        double totalRows     = Double.parseDouble(String.valueOf(param.get("P_COUNT")));
        double rowsPerPage = Double.parseDouble(String.valueOf(param.get("P_END")));
        int loopCount    =  (int) Math.ceil(totalRows/rowsPerPage);

        logger.debug("##########################################");
        logger.debug("          전체 데이터 갯수    ["+totalRows+"]");
        logger.debug("          페이징당 데이터 수 ["+rowsPerPage+"]");
        logger.debug("          반복횟수                ["+loopCount+"]");
        logger.debug("##########################################");
        for(int idx = 0; idx < loopCount; idx++) {

            int startIndex = (int)(idx*rowsPerPage);
            int endIndex  =  (int)((idx*rowsPerPage)+(int)rowsPerPage)-1;

            param.put("P_START", startIndex);
            param.put("P_END", endIndex);

            list = generalDao.addSelect(NAMESAPCE + ".selectBasBOMListExcel", param);
            putDataSetMap(dto, list, "ds_batchResult"+idx);
        }
    }
   
    /**
     * @fn
     * @brief (Override method) BOM rowcount
     * @remark 
     * @see smh.bas.service.BAS03700Service#selectBasAllCount(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectBasAllCount(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectBasAllCount", param));
    }
}