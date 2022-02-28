package smh.hra.service;

import java.sql.Blob;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.commons.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

/**
* @file: HRA90210ServiceImpl.java
* @Package: smh.hra.service  
* @Project name: SM 상선 myHR 고도화
* @Type name: HRA90210ServiceImpl    
* @Company: Built1
* @Create Date: 2022. 2. 18.
* @Author: 한만섭
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2022. 2. 18.  한만섭     최초  생성
 *
 */
@Service
public class HRA90210ServiceImpl extends AbstractNbdfService implements HRA90210Service {
	
	public static final String NAMESPACE = "smh.hra.dao.HRA90210Dao";

    @Autowired
    private GeneralDao generalDao;
    
    public void selectMembers(UiMapDto dto) throws Exception {
    	
        Map<String, Object> param = getParametersMap(dto);

        List<Map<String, Object>> memberList = generalDao.addSelect(NAMESPACE + ".selectMembers", param);
        
        List<Map<String, Object>> partLeader = new ArrayList<Map<String, Object>>();
        List<Map<String, Object>> members = new ArrayList<Map<String, Object>>();
        
        for(int i = 0; i < memberList.size(); i++) {
        	Map<String, Object> map = memberList.get(i);
        	Blob image = (Blob) map.get("BLOB_IMAGE");
			String convertImage = encodeBlobToBase64(image);
			map.put("BLOB_IMAGE", "data:image/*;base64,"+convertImage);
        	if(i == 0) {
        		partLeader.add(map);
        	} else {
        		members.add(map);        		
        	}
        }
        
        putDataSetMap(dto, partLeader, "ds_part_leader");
        putDataSetMap(dto, members, "ds_members");
    }
    
    /**
     * Oracle Blob 타입을 Base64로 변환
     * @param Blob
     * @return String
     */
    public static String encodeBlobToBase64(Blob data){      
        String base64Str = "";
        byte[] blobToBytes = null;
        
        try {   
            if(data != null && data.length() > 0){
                blobToBytes = data.getBytes(1l, (int) data.length());
                base64Str = Base64.encodeBase64String(blobToBytes);
            }
        } catch (Exception e) {
            
        }
        
        return base64Str;
    }
}
