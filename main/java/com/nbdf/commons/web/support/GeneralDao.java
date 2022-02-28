package com.nbdf.commons.web.support;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.stereotype.Repository;

/**
 * @file: AbstractDao.java * @Class AbstractDao
 * @Description DAO 추상클래스 <br />
 *              또한 AbstractDao 를 상속받는 클래스는 Logger 클래스 선언 없이 protected로 선언된 logger를 사용할 수 있다.
 * @Package: com.nbdf.commons.web.support
 * @Project name: IFC MES시스템 구축
 * @Type name: AbstractDao
 * @Company: Built1
 * @Create Date: 2015 2015. 3. 2. 오전 11:08:42
 * @Author: 채기용
 * @File Version: v1.0
 *
 *       << 개정이력(Modification Information) >>
 *
 *       수정일 수정자 수정내용 ------------ ------ ---------- 2015. 3. 2. 채기용 최초 생성
 *
 */

@Repository("generalDao")
public class GeneralDao extends AbstractNbdfDao {
    final String DAO_NAME = "com.nbdf.commons.web.support.GeneralDao";

    @Resource(name = "sqlSessionFactory")
    public void setSqlSessionFactory(SqlSessionFactory sqlSession) {
        super.setSqlSessionFactory(sqlSession);
    }
}