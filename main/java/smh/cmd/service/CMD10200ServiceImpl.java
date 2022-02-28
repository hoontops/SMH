package smh.cmd.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

@Service
public class CMD10200ServiceImpl extends AbstractNbdfService implements CMD10200Service {
	
	public static final String NAMESPACE = "smh.cmd.dao.CMD10200Dao";
    
	@Autowired
    private GeneralDao generalDao;
    
	 /**
     * @fn			: selectNoticeList
     * @brief		: (Override method) Todo List
     * @Method Name : selectNoticeList
     * @remark 		: todoList리스트 조회
     * @see "smh.cmd.dao.CMD10200Service#selectNoticeList"
     */

    public void selectNoticeList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        
        //NOTICES LIST 조회
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectNoticeList", param), "output1");
        
        // TO-DO LIST 조회[1: mytodo, 2:Leader's]
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selecMyTodoList", param), "output2");
       
        // Max  조회		[MAX VAlUE FOR PAGE]
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selecMaxPage", param), "output3");
       
    }

	@Override
	public void selectLeadersTodoList(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectLeadersTodoList", param));
		    
	}

	@Override
	public void selectNoticePageList(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectNoticePageList", param));
	}
    
}