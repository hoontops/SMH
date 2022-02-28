package smh.bas.service;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
* @file: BAS02800ServiceImpl.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS02800ServiceImpl
* @Company: Built1
* @Create Date: 2021.4.02
* @Author: sungmin.choe
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 02.   sungmin.choe     최초  생성
*/ 
@Service
public class BAS02800ServiceImpl extends AbstractNbdfService implements BAS02800Service {

    public static final String NAMESAPCE = "smh.bas.dao.BAS02800Dao";
    

    @Autowired
    private GeneralDao generalDao;
  
    @Override
    public void selectDurableList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".SelectMoldAndToolManagement_Mold", param), "output1");        
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".SelectMoldAndToolManagement_Film", param), "output2");
    }
    
}