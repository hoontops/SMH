package smh.bas.service;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import java.util.Map;
import java.util.Random;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nexacro17.xapi.data.DataSet;

import smh.commons.TxnHistKey;

/**
* @file: BAS00200ServiceImpl.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS00200ServiceImpl
* @Company: Built1
* @Create Date: 2021.2.16
* @Author: JinSungHa
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 2. 16.   sungmin.choe     최초  생성
*/
@Service
public class BAS00200ServiceImpl extends AbstractNbdfService implements BAS00200Service {

    public static final String NAMESAPCE = "smh.bas.dao.BAS00200Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief (Override method) Site 정보 조회
     * @remark 
     * @see smh.bas.service.BAS00200Service#selectBasSiteList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectBasSiteList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectBasSiteList", param));
    }


    /**
     * @fn
     * @brief (Override method) 그룹코드 수정, 등록, 삭제 기능
     * @remark - Site 정보 수정, 등록, 삭제 트랜젝션 처리
     * @see smh.bas.service.BAS00200Service#saveBasSite(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void saveBasSite(UiMapDto dto) throws Exception {
        DataSetMap paramMap = getParametersDataSetMap(dto);
        Map<String, Object> param;

        int result = 0;
        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            int type = getRowType(param);
            param.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());   
            if (type == DataSet.ROW_TYPE_INSERTED) {
            	String uid = UUID.randomUUID().toString().toUpperCase(); //UID 신규채번
            	param.put("PLANTNAME", uid);
            	result += generalDao.addUpdate(NAMESAPCE + ".insertBasSite", param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
                result += generalDao.addUpdate(NAMESAPCE + ".updateBasSite", param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
                result += generalDao.addUpdate(NAMESAPCE + ".deleteBasSite", param);
            }
        }
        
        putDataSetMap(dto, result);
    }
    
    /**
    * @fn 			: generateUID
    * @brief 		: UID 신규생성 
    * @Method Name : generateUID
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 2. 16.       sungmin.choe      최초  생성
     *
    */
    public String generateUID() throws Exception{
    	StringBuffer temp = new StringBuffer();
    	Random rnd = new Random();
    	for (int i = 0; i < 33; i++) {
    	    int rIndex = rnd.nextInt(3);
    	    switch (rIndex) {
    	    case 0:
    	    case 1:	
    	        // A-Z
    	        temp.append((char) ((int) (rnd.nextInt(26)) + 65));
    	        break;
    	    case 2:
    	        // 0-9
    	        temp.append((rnd.nextInt(10)));
    	        break;
    	    }
    	}
    	return temp.toString();
    }

}