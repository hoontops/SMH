package com.nbdf.pes.pe.pemm.service;

import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


/**
* @file: PEMM00010SERVICEIMPL.java
* @Package: com.nbdf.pes.pe.pemm.service
* @Project name: 통합 경영관리시스템 재구축
* @Type name: PEMM00010ServiceImpl
* @Company: SICC
* @Create Date: 2015 2015. 7. 9. 오후 11:01:14
* @Author: IMCS
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 7. 9.        IMCS     최초  생성
 *
*/
@Service
public class PEMM00010ServiceImpl extends AbstractNbdfService implements PEMM00010Service {

    public static final String NAMESAPCE = "com.nbdf.pes.pe.pemm.dao.PEMM00010Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn selectMyMemoList
    * @brief 나의 메모 리스트
    * @remark
    * - 오버라이드 함수의 상세 설명
    * @see com.nbdf.pes.pe.pesm.service.PESM00010Service#selectDraftList(java.util.Map)
    */
    @Override
    public List<Map<String, Object>> selectMyMemoList(Map<String, Object> dto) throws Exception {
        return generalDao.selectList(NAMESAPCE + ".selectMyMemoList" ,dto);
    }

    /**
    * @fn selectMyMemoData
    * @brief 나의 메모 상세보기
    * @remark
    * - 오버라이드 함수의 상세 설명
    * @see com.nbdf.pes.pe.pesm.service.PESM00010Service#selectMyMemoData(java.util.Map)
    */
    @Override
    public Map<String, Object> selectMyMemoData(Map<String, Object> dto) throws Exception {
        return generalDao.selectOne(NAMESAPCE + ".selectMyMemoData" ,dto);
    }

    /**
    * @fn updateMemo
    * @brief 메모 등록
    * @remark
    * - 오버라이드 함수의 상세 설명
    * @see com.nbdf.pes.pe.pesm.service.PEMM00010Service#updateMemo(java.util.Map)
     */
    @Override
    public int updateMemo(Map<String, Object> dto) throws Exception {

        return generalDao.update(NAMESAPCE + ".updateMemo", dto);
    }

    /**
    * @fn insertMemo
    * @brief 메모 등록
    * @remark
    * - 오버라이드 함수의 상세 설명
    * @see com.nbdf.pes.pe.pesm.service.PEMM00010Service#insertMemo(java.util.Map)
     */
    @Override
    public int insertMemo(Map<String, Object> dto) throws Exception {

        return generalDao.insert(NAMESAPCE + ".insertMemo", dto);
    }

    /**
    * @fn deleteMemo
    * @brief 메모 등록
    * @remark
    * - 오버라이드 함수의 상세 설명
    * @see com.nbdf.pes.pe.pesm.service.PEMM00010Service#deleteMemo(java.util.Map)
     */
    @Override
    public int deleteMemo(Map<String, Object> dto) throws Exception {

        return generalDao.update(NAMESAPCE + ".deleteMemo", dto);
    }
}
