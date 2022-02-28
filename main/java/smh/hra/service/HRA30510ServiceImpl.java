package smh.hra.service;

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

@Service
public class HRA30510ServiceImpl extends AbstractNbdfService implements HRA30510Service {
	
	public static final String NAMESPACE = "smh.hra.dao.HRA30510Dao";
	public static final String FILESPACE = "com.nbdf.cmd.cm.cmfm.dao.CMFM01000Dao";
	
	@Autowired
	private GeneralDao generalDao;
	
    /**
     * @fn          : selectBoardList
     * @brief       : (Override method) 게시판 현황 조회
     * @Method Name : selectBoardList
     * @remark      : 상세설명
     * @see smh.hra.service.HRA30510Service#selectBoardList(com.nbdf.commons.ui.vo.UiMapDto)
     */
	public void selectBoardList(UiMapDto dto) throws Exception {
		
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectBoardList", param));
	}
	
    /**
     * @fn          : selectBoardDetail
     * @brief       : (Override method) 게시판 현황 상세조회
     * @Method Name : selectBoardDetail
     * @remark      : 상세설명
     * @see smh.hra.service.HRA30510Service#selectBoardDetail(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectBoardDetail(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        //조회전 조회수 증가수행하여 조회데이터에 반영
        updateViewCount(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectBoardDetail", param));
    }
    
    /**
     * @fn          : updateViewCount
     * @brief       : (Override method) 게시판 조회수 업데이트
     * @Method Name : updateViewCount
     * @remark      : 상세설명
     * @see smh.hra.service.HRA30510Service#insertViewCount(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void updateViewCount(UiMapDto dto) {
        DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT");
        int result = 0;
        for (int i = 0, n = dsMap.size(); i < n; i++) {
            Map<String, Object> param = dsMap.get(i);
            int type = getRowType(param);        
            generalDao.addInsert(NAMESPACE+".updateViewCount",param);
        }
   
        putDataSetMap(dto, result);
    }
    
    /**
     * @fn          : saveBoard
     * @brief       : (Override method) 게시판 현황 등록/수정/삭제
     * @Method Name : saveBoard
     * @remark      : 상세설명
     * @see smh.hra.service.HRA30510Service#saveBoard(com.nbdf.commons.ui.vo.UiMapDto)
     */
	@Override
	public void saveBoard(UiMapDto dto) throws Exception {
		DataSetMap paramMap = getParametersDataSetMap(dto);
		Map<String, Object> param;
		
		int result = 0;
		
		for (int i = 0, n = paramMap.size(); i < n; i++) {
			param = paramMap.get(i);
			int type = getRowType(param);
			
			if (type == DataSet.ROW_TYPE_INSERTED) {
				result += insertBoard(param);
			} else if (type == DataSet.ROW_TYPE_UPDATED) {
				result += updateBoard(param);
			} else if (type == DataSet.ROW_TYPE_DELETED) {
				result += deleteBoard(param);
			}
		}
		putDataSetMap(dto, result);
	}
	
    /**
     * @fn          : insertBoard
     * @brief       : (Override method) 게시판 등록
     * @Method Name : insertBoard
     * @remark      : 상세설명
     * @see
     */
	private int insertBoard(Map<String, Object> param) throws Exception{
		Map<String, Object> paramMap = new HashMap<String, Object>();
		
		//HashMap Copy
		for (Map.Entry<String, Object> entry : param.entrySet()) {
			paramMap.put(entry.getKey(), entry.getValue());
		}
		return generalDao.addUpdate(NAMESPACE + ".insertBoard", paramMap);
	}
	
	/**
	 * @fn          : updateBoard
	 * @brief       : (Override method) 게시판 현황 수정
	 * @Method Name : updateBoard
	 * @remark      : 상세설명
	 * @see
	 */
	private int updateBoard(Map<String, Object> param) throws Exception {
		Map<String, Object> paramMap = new HashMap<String, Object>();
	  	 
	   	//HashMap Copy		
	   	for (Map.Entry<String, Object> entry : param.entrySet()) {
	   		paramMap.put(entry.getKey(), entry.getValue()); 
	   	}
	   	return generalDao.addUpdate(NAMESPACE + ".updateBoard", paramMap);   	 
	}
	
	/**
	 * @fn          : deleteBoard
	 * @brief       : (Override method) 게시판 현황 삭제
	 * @Method Name : deleteBoard
	 * @remark      : 상세설명
	 * @see
	 */
	private int deleteBoard(Map<String, Object> param) throws Exception {
		Map<String, Object> paramMap = new HashMap<String, Object>();
		
		//HashMap Copy
		for (Map.Entry<String, Object> entry : param.entrySet()) {
			paramMap.put(entry.getKey(), entry.getValue());
		}
		
		//행삭제시 첨부파일이 존재할 경우 첨부파일 삭제
		String atchFileId = (String) paramMap.get("ATTACH_FILE");
		if (atchFileId != null && !"".equals(atchFileId))
		{
			paramMap.put("ATCH_FILE_ID", atchFileId);
			int delCnt = generalDao.addUpdate(FILESPACE+".deleteAtchFilesByAtchFileId", paramMap);
			if (delCnt > 0) generalDao.addUpdate(FILESPACE+".deleteAtchFilesMpngs", paramMap);
		}
		
		return generalDao.addUpdate(NAMESPACE + ".deleteBoard", paramMap);
	}
}
