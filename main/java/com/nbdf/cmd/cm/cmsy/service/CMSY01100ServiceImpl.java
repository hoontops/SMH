package com.nbdf.cmd.cm.cmsy.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.ObjectUtil;
import com.nbdf.commons.web.support.GeneralDao;
import com.nbdf.commons.web.support.AbstractNbdfService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro17.xapi.data.DataSet;


/**
* @file: CMSY01100ServiceImpl.java
* @Package: com.nbdf.cmd.cm.cmsy.service
* @Project name: IFC MES시스템 구축
* @Type name: CMSY01100ServiceImpl
* @Company: Built1
* @Create Date: 2015 2015. 3. 9. 오후 7:36:19
* @Author: JinSungHa
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일      수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 3. 9.    진성하     최초  생성
 *
*/

@Service
public class CMSY01100ServiceImpl extends AbstractNbdfService implements CMSY01100Service {

    public static final String NAMESPACE = "com.nbdf.cmd.cm.cmsy.dao.CMSY01100Dao";
    public static final String NAMESPACE2 = "com.nbdf.cmd.cm.cmsy.dao.CMSY01700Dao";
	public static final String NAMESAPCE3 = "com.nbdf.pes.pe.pelh.dao.PELH00010Dao";
	public static final String NAMESAPCE4 = "com.nbdf.cmd.cm.cmsy.dao.CMSY03300Dao";
	
    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn
    * @brief (Override method)  사용자리스트  조회
    * @remark
    *  1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.ecm.cm.cmsa.service.CMSA01000Service#selectCmdUsersList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectCmdUsersList(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectCmdUsersList",param);
        putDataSetMap(dto, list, "output");
        
    }
    public void selectCmdUsers(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectCmdUsers",param);
        putDataSetMap(dto, list, "output");
        
    }
    public void selectCmdPlantList(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectCmdPlantList",param);
        putDataSetMap(dto, list, "output");
        
    }
    public void selectCmdUserDupCheck(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectCmdUserDupCheck",param);
        
        putDataSetMap(dto, list);
    }
    /**
    * @fn
    * @brief (Override method)  사용자리스트  조회
    * @remark
    *  1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.ecm.cm.cmsa.service.CMSA01000Service#selectCmdUserJobList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectCmdUserJobList(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectCmdUserJobList",param);

        putDataSetMap(dto, list);
    }


    /**
    * @fn
    * @brief (Override method)  사용자 삭제
    * @remark
    *  1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.ecm.cm.cmsa.service.CMSA01000Service#deleteCmdUsers(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void deleteCmdUsers(UiMapDto dto) {
        int result = 0;
        DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT");
        Map<String, Object> param = dsMap.get(0);
        generalDao.addUpdate(NAMESPACE + ".deleteCmdUsers",param);
        putDataSetMap(dto, result);
    }

 
    /**
    * @fn
    * @brief (Override method) 활동코드 [즐겨찾기] 저장
    * @remark
    * - 오버라이드 함수의 상세 설명
    * @see com.nbdf.ecm.cm.cmsa.service.CMSA00100Service#saveCmdUsers(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void saveCmdUsers(UiMapDto dto) {
    	Map<String, Object> rtnMap = new HashMap<String, Object>();
    	DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT");
    	int result = 0;
        int id = 0;
        for (int i = 0, n = dsMap.size(); i < n; i++) {
            Map<String, Object> param = dsMap.get(i);
            int type = getRowType(param);
            if (type == DataSet.ROW_TYPE_INSERTED) {
        		String encodeLoginPw = ObjectUtil.encodeSHA256(ObjectUtil.toStrTrim(param.get("USER_PWD")));
        		param.put("USER_PWD",encodeLoginPw);
                generalDao.addInsert(NAMESPACE+".insertCmdUsers",param);
                id = (int) param.get("ID");
                rtnMap.put("ID",id);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
                generalDao.addUpdate(NAMESPACE+".updateCmdUsers",param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
                generalDao.addUpdate(NAMESPACE+".deleteCmdUsers",param);
            }
        }
 
        dsMap = getParametersDataSetMap(dto, "INPUT2");
    	for (int i = 0, n = dsMap.size(); i < n; i++) {
            Map<String, Object> param = dsMap.get(i);
            param.put("ENTERPRISEID", param.get("SESSION_ENTERPRISEID"));
            param.put("PLANTID", param.get("CODE"));
            
            if("1".equals(param.get("CHK"))){
                param.put("VALIDSTATE", "Valid");
                int cnt = generalDao.addSelectCount(NAMESAPCE4+".selectCmdPlantuser",param);
                if(cnt>0){
                    generalDao.addUpdate(NAMESAPCE4+".updateCmdPlantuser",param);
                }else{
                    generalDao.addUpdate(NAMESAPCE4+".insertCmdPlantuser",param);
                }
            }else{
            		
                param.put("VALIDSTATE", "Invalid");
                generalDao.addUpdate(NAMESAPCE4+".updateCmdPlantuser",param);
            }
            
        }        
        putDataSetMap(dto, rtnMap);
    }

    public void selectCmdJobGubunList(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectCmdJobGubunList",param);

        putDataSetMap(dto, list);
    }

    /**
    * @fn
    * @brief (Override method)  비번 초기화
    * @remark
    *  1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.ecm.cm.cmsa.service.CMSA01000Service#updateCmdUsersPwdInit(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void updateCmdUsersPwdInit(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        int result = generalDao.addSelectCount(NAMESPACE + ".selectCmdUsersCnt",param);
        if(result==0){
        	throw new BizException("UNREGISTEREDUSERID");
        }
        result = generalDao.addUpdate(NAMESPACE + ".updateCmdUsersPwdInit",param);
        putDataSetMap(dto, result);
    }
    
    /**
    * @fn
    * @brief (Override method)  비번 초기화
    * @remark
    *  1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.ecm.cm.cmsa.service.CMSA01000Service#updateCmdUsersPwdUnlock(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void updateCmdUsersPwdUnlock(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        int result = generalDao.addUpdate(NAMESPACE + ".updateCmdUsersPwdUnlock",param);
        putDataSetMap(dto, result);
    }

    public void updateChangeUserPw(UiMapDto dto) throws Exception {
    	int result = 0;
    	Map<String, Object> param0 = getParametersMap(dto);
    	Map<String, Object> param = new HashMap<String, Object>();
        Map<String, Object> map = new HashMap<String, Object>();
        
        String userId = ObjectUtil.toStrTrim(param0.get("USER_ID"));
        String loginId = ObjectUtil.toStrTrim(param0.get("USER_ACNT"));
        String oldPassword = ObjectUtil.toStrTrim(param0.get("USER_PWD_CUR"));
        String newPassword = ObjectUtil.toStrTrim(param0.get("USER_PWD_NEW"));
        oldPassword = ObjectUtil.encodeSHA256(oldPassword);		//jsh 20180626 sha256암호화 적용
        newPassword = ObjectUtil.encodeSHA256(newPassword);		//jsh 20180626 sha256암호화 적용

        param.put("USER_ID", userId);
//        param.put("USER_ACNT", loginId);
        param.put("USER_PWD", oldPassword);
        param.put("NEW_USER_PWD", newPassword);
        param.put("LAST_UPDATED_BY", param0.get("ID"));
        
		// 1. 이전 비밀번호 일치여부 검사
		List<Map<String, Object>> list = generalDao.selectList(NAMESAPCE3 + ".selectUserInfoList", param);
		if (list == null || list.size() == 0) { // 이전비밀번호 불일치
			logger.debug("비밀번호 변경 : 이전비밀번호 불일치");
			result = -1;
			
		}else{
//			int existCnt = generalDao.selectOne(NAMESAPCE3 + ".selectExistPwd", param);
//			if(existCnt > 0){
//				logger.debug("이전에 사용하던 비밀번호와 동일 ");
//				result = -3;
//			}else{
				param.put("USER_ID", userId);
				generalDao.update(NAMESAPCE3 + ".insertCmdPwdAltHst", param);	
				// 3. 비밀번호 수정
				result = generalDao.update(NAMESAPCE3 + ".updateChangeUserPw", param);
//			}
		}
		
		// 2. 비밀번호 유효한지 재검증
		/*
		 * if(비밀번호 정규식처리){ logger.debug("비밀번호 변경 : 유효성 검증 실패"); return -2; }
		 */

		// PW암호화적용 예정
		//String encReqLoginPw = ObjectUtil.toStrTrim(param.get("NEW_USER_PWD"));
		//param.put("NEW_USER_PWD", encReqLoginPw);
		

	    if (result > 0) {
	       map.put("RESULT", result);
	       map.put("MSG", "비밀번호가 수정되었습니다");
	    }else if(result == -1){
	       map.put("RESULT", result);
	       map.put("MSG", "이전 비밀번호가 일치하지 않습니다.");
	       throw new BizException("PASSWORDNOTMATCHING");
//	    }else if(result == -2){
//	       map.put("RESULT", result);
//	       map.put("MSG", "비밀번호는 영어+숫자+특수문자 조합으로 8자리 이상 9자리 이하이어야 합니다.");
//	       throw new BizException("PASSWORDNOTMATCHING");
//	    }else if(result == -3){
//	       map.put("RESULT", result);
//	       map.put("MSG", "이전에 사용하던 비밀번호와 동일합니다.");
//	       throw new BizException("PASSWORDNOTMATCHING");
//	    }else if(result == -4){
//	       map.put("RESULT", result);
//	       map.put("MSG", "변경할 비밀번호에 사번이 포함되어 있습니다.");
//	       throw new BizException("PASSWORDNOTMATCHING");
	    }else {
	       throw new BizException("ErrorOnSave");
	    }
		
        putDataSetMap(dto, map);
    }
    
    public void selectUserIdSeqence(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectUserIdSeqence",param);
        putDataSetMap(dto, list);
    }
    
}
