package com.nbdf.pes.pe.pemm.service;

import java.util.List;
import java.util.Map;


 /**
* @file: PEMM00010Service.java
* @Package:  com.nbdf.pes.pe.pemm.service
* @Project name: IFC MES시스템재구축
* @Type name: PEMM00010Service
* @Company: Built1
* @Create Date: 2017 2017. 10. 9. 오후 11:00:18
* @Author: JinSungha
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2017. 10. 9.        JinSungHa     최초  생성
 *
*/
public interface PEMM00010Service {

    public List<Map<String, Object>> selectMyMemoList(Map<String, Object> dto) throws Exception;

    public Map<String, Object> selectMyMemoData(Map<String, Object> dto) throws Exception;

    public int updateMemo(Map<String, Object> dto) throws Exception;

    public int insertMemo(Map<String, Object> dto) throws Exception;

    public int deleteMemo(Map<String, Object> dto) throws Exception;

}
