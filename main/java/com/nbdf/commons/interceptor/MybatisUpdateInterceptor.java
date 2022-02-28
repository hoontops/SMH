package com.nbdf.commons.interceptor;

import java.sql.Statement;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

import org.apache.commons.lang3.StringUtils;
import org.apache.ibatis.executor.statement.StatementHandler;
import org.apache.ibatis.plugin.Intercepts;
import org.apache.ibatis.plugin.Invocation;
import org.apache.ibatis.plugin.Signature;
import org.springframework.util.StopWatch;

/**
 * @file: MybatisUpdateInterceptor.java
 * @Package: com.nbdf.commons.interceptor
 * @Project name: IFC MES시스템 구축
 * @Type name: MybatisUpdateInterceptor
 * @Company: Built1
 * @Create Date: 2015 2015. 3. 27. 오전 9:48:05
 * @Author: shinsh
 * @File Version: v1.0
 * @info Mybatis Interceptor
 * 
 * 
 *       << 개정이력(Modification Information) >>
 * 
 *       수정일 수정자 수정내용 ------------ ------ ---------- 2015.7.15. shinsh 최초 생성
 * 
 */
@Intercepts({ @Signature(type = StatementHandler.class, method = "update", args = { Statement.class }) })
public class MybatisUpdateInterceptor extends MybatisInterceptor {
    // Logger logger = LoggerFactory.getLogger(getClass());

//    public MybatisUpdateInterceptor(String scpIniFilePath, String scpKeyFilePath) {
//        super(scpIniFilePath, scpKeyFilePath);
//    }

    public Object intercept(Invocation invocation) throws Throwable {
//        if (scpDbCtx == null) {
//            logger.error("ScpDbAgent context is null");
//            return invocation.proceed();
//        }

        StopWatch stopWatch = new StopWatch("encode");
        stopWatch.start("encode");

        // logger.debug("{}", invocation.getArgs());
        // logger.debug("{}", invocation.getArgs()[0]);
        // logger.debug("{}", invocation.getArgs()[1]);
        // logger.debug("{}", ((StatementHandler) invocation.getTarget()).getBoundSql().getSql());
        if (((StatementHandler) invocation.getTarget()).getParameterHandler().getParameterObject() != null) {
            if (((StatementHandler) invocation.getTarget()).getParameterHandler().getParameterObject() instanceof Map) {
                Set keys = ((Map) ((StatementHandler) invocation.getTarget()).getParameterHandler().getParameterObject()).keySet();
                for (Iterator j = keys.iterator(); j.hasNext();) {
                    String key = (String) j.next();
                    for (Iterator k = encodeColumns.iterator(); k.hasNext();) {
                        Map encodeColumn = (Map) k.next();
                        if (StringUtils.equals(key, (String) encodeColumn.get("column"))) {
                            logger.debug("{}={}", key, ((Map) ((StatementHandler) invocation.getTarget()).getParameterHandler().getParameterObject()).get(key));
                            // ((Map) ((StatementHandler)invocation.getTarget()).getParameterHandler().getParameterObject()).put(key, scpDbAgent.ScpEncB64(scpIniFilePath, "KEY1",
                            // (String) ((Map) ((StatementHandler)invocation.getTarget()).getParameterHandler().getParameterObject()).get(key)));
                            // logger.debug("{}={}", key, scpDbAgent.ScpEncB64(scpIniFilePath, "KEY1", (String) ((Map) ((StatementHandler) invocation.getTarget())
                            // .getParameterHandler().getParameterObject()).get(key)));
                            try {
//                                logger.debug("{}={}", key, scpDbAgent.AgentCipherEncryptStringB64(scpDbCtx, (String) ((Map) ((StatementHandler) invocation.getTarget())
//                                        .getParameterHandler().getParameterObject()).get(key)));
                                logger.debug("{}={}", key, (String) (((Map) ((StatementHandler) invocation.getTarget())
                                      .getParameterHandler().getParameterObject()).get(key)));
                            } catch (ClassCastException e) {
                                logger.error("{}", e);
                            }
                        }
                    }
                }
            }
        }
        // logger.debug("{}", ((StatementHandler)invocation.getTarget()).getParameterHandler().getParameterObject() == null ? "":
        // ((StatementHandler)invocation.getTarget()).getParameterHandler().getParameterObject().toString());
        stopWatch.stop();
        logger.trace(stopWatch.shortSummary());
        return invocation.proceed();
    }

}
