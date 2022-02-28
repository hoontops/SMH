package smh.pcm.service;


import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;


/**
 * @file		: PCM07900ServiceImpl.java
 * @Package		: smh.pcm.service
 * @Project name: IFC MES시스템 구축
 * @Type name	: PCM07900ServiceImpl
 * @Company		: Built1
 * @Create Date	: 2021.04.09
 * @Author		: 김진현
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 04. 09.  김진현      최초  생성 
 */
@Service
public class PCM07500ServiceImpl extends AbstractNbdfService implements PCM07500Service {

    public static final String NAMESAPCE = "smh.pcm.dao.PCM07500Dao";
    
    @Autowired
    private GeneralDao generalDao;
    
    /**
     * @fn
     * @brief 포장라벨출력(2블럭) - Line List  조회
     * @remark 
     * @see smh.pcm.service.PCM07500Service#selectPackLineList(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectPackLineList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectPackLineList", param));
    }
  	
  	
  	/**
     * @fn
     * @brief 포장라벨출력(2블럭) - 저장시
     * @remark 
     * @see smh.pcm.service.PCM07500Service#savePackLabel02(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void savePackLabel02(UiMapDto dto) throws Exception {
  		DataSetMap ds_main		= getParametersDataSetMap(dto, "ds_main");			//포장라벨 메인 정보
        DataSetMap ds_line 		= getParametersDataSetMap(dto, "ds_line");			//포장라벨 LINE 정보
        
        // 고객 정보 등록/수정/삭제(sub부터 전부 삭제 후 진행)
 		int result = 0;
 		
 		Map<String, Object> param;
 		Map<String, Object> paramline;
        
    }
  	
  	/**
     * @fn
     * @brief 2블럭 메인 조회시 lot정보 Line에서 가져옴
     * @remark 
     * @see smh.pcm.service.PCM07500Service#selectPackLabelMain2BList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectPackLabelMain2BList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectPackLabelMain2BList", param));
    }
    
    
  	
  	
  		
}