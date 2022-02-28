package smh.pcm.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.NumberUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

import smh.commons.TxnHistKey;

/**
 * @file		: PCM08300ServiceImpl.java
 * @Package		: smh.pcm.service
 * @Project name: IFC MES시스템 구축
 * @Type name	: PCM08300ServiceImpl
 * @Company		: Built1
 * @Create Date	: 2021.04.15
 * @Author		: 김진현
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 04. 15.  김진현      최초  생성 
 */
@Service
public class PCM08300ServiceImpl extends AbstractNbdfService implements PCM08300Service {

    public static final String NAMESAPCE = "smh.pcm.dao.PCM08300Dao";

    @Autowired
    private GeneralDao generalDao;
    
    /**
     * @fn
     * @brief 재포장 등록 List 조회
     * @remark 
     * @see smh.pcm.service.PCM08300Service#selectRePackList(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void selectRePackList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectRePackList", param));
    }
  	
  	/**
     * @fn
     * @brief 재포장 등록 List 재포장완료
     * @remark 
     * @see smh.pcm.service.PCM08300Service#saveRePackList(com.nbdf.commons.ui.vo.UiMapDto)
     */
  	public void saveRePackList(UiMapDto dto) throws Exception {
  		DataSetMap ds_main		= getParametersDataSetMap(dto, "ds_main");					// 재포장정보
  		
  		 // 고객 정보 등록/수정/삭제(sub부터 전부 삭제 후 진행)
 		int result = 0;
 		
 		Map<String, Object> param;
 		Map<String, Object> paramChk;
 		// 체크 필요 할것 같음 -> 입력받은 수량, 이미 입력된 수량 넘어온 수량 계산 후 0과 같거나 커야 된다 남은 수량이
 		for (int i = 0, n = ds_main.size(); i < n; i++) {
            param = ds_main.get(i);
            param.put("LASTTXNHISTKEY",  TxnHistKey.getTxnHistKey());
            int type = getRowType(param);
            if (type == DataSet.ROW_TYPE_UPDATED) {			// 수정만 가능 (PCM_REPACKINGPRODUCTDONE 등록)
            	
            	String repackingNo = (String)param.get("REPACKINGNO");
            	paramChk = generalDao.addSelectOneMap(NAMESAPCE + ".selectRePackChk", param);        		
            	String vChk  = (String)paramChk.get("CHK_YN");
            	if(vChk.equals("N"))
            	{
            		// 입력 완료수량이 재포장수량을 초과할 수 없습니다.
            		throw new BizException("REPACKINGQTY|"+String.format("REPACKINGNO=%s", repackingNo));
            	}
            }
        }
 		
 		int seqNextVal = 0;
        for (int i = 0, n = ds_main.size(); i < n; i++) {
            param = ds_main.get(i);
            param.put("LASTTXNHISTKEY",  TxnHistKey.getTxnHistKey());
            int type = getRowType(param);
            if (type == DataSet.ROW_TYPE_UPDATED) {			// 수정만 가능 (PCM_REPACKINGPRODUCTDONE 등록)
            	
            	result += generalDao.insert(NAMESAPCE + ".insertRePack", param);
            	
            	//ERP I/F 시퀀스 채번
            	seqNextVal = getERPSeqNextVal();
            	param.put("SERIALID", 							seqNextVal);
            	generalDao.addSelectOneMap(NAMESAPCE + ".insertERPIFDataRePack", param);
            }
        }
        
        // 메인 상태 변경 해야 되면 UPDATE 필요 -> 상태변경
        
        // 인터페이스 필요 (erp 쪽에 수량 정보를 넘겨줘야한다.)
        
        putDataSetMap(dto, result);
    }
  	
  	/*
  	  * ERP 연동 IF 일련 번호 조회
  	  */
    public int getERPSeqNextVal() throws Exception 
    {
    	int seqNextVal = 0;
    	Map<String, Object> param = new HashMap<>();
    	Map<String, Object> result = generalDao.addSelectOneMap(NAMESAPCE + ".getERPSeqNextVal", param);
    	if(result==null){
    		seqNextVal = 1;
    	}else{
    		seqNextVal = NumberUtil.toInt((String)result.get("SEQNEXTVAL"));
    	}
    	System.out.println("seqNextVal :: "+seqNextVal);
    	return seqNextVal;
    }

    
  	
}