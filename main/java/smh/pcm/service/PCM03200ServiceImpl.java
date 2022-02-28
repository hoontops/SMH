package smh.pcm.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

@Service
public class PCM03200ServiceImpl extends AbstractNbdfService implements PCM03200Service {
	
    public static final String NAMESAPCE 						= "smh.pcm.dao.PCM03200Dao";
    
    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn 			: selectOtherInfo
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectOtherInfo
    * @remark		: 상세설명
* @see smh.pcm.service.PCM03200Service#selectOtherInfo(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectOtherInfo(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);        
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectCommentByProcess", param),				"output1");
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProcessSpecByProcess", param),				"output2");
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".getEquipmentByArea", param),						"output3");        
    }

    /**
    * @fn 			: selectBatchAccept
    * @brief 		: 함수 간략한 설명 
    * @Method Name : selectBatchAccept
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 5. 25.       sungmin.choe      최초  생성
     *
    */
    @Override
    public void selectBatchAccept(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);        
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectBatchAccept", param));        
    }    
}