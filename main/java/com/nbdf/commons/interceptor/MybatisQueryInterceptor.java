package com.nbdf.commons.interceptor;

import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.commons.lang3.StringUtils;
import org.apache.ibatis.executor.Executor;
import org.apache.ibatis.mapping.MappedStatement;
import org.apache.ibatis.plugin.Intercepts;
import org.apache.ibatis.plugin.Invocation;
import org.apache.ibatis.plugin.Signature;
import org.apache.ibatis.session.ResultHandler;
import org.apache.ibatis.session.RowBounds;
import org.springframework.util.StopWatch;

/**
 * @file: MybatisQueryInterceptor.java
 * @Package: com.nbdf.commons.interceptor
 * @Project name: IFC MES시스템 구축
 * @Type name: MybatisQueryInterceptor
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
@Intercepts({ @Signature(type = Executor.class, method = "query", args = { MappedStatement.class, Object.class, RowBounds.class, ResultHandler.class }) })
public class MybatisQueryInterceptor extends MybatisInterceptor {

    // Logger logger = LoggerFactory.getLogger(getClass());

//    public MybatisQueryInterceptor(String scpIniFilePath, String scpKeyFilePath) {
//        super(scpIniFilePath, scpKeyFilePath);
//    }

    public Object intercept(Invocation invocation) throws Throwable {
        // logger.debug("{}", invocation.getArgs());
        // logger.debug("{}", invocation.getArgs()[0]);
        // logger.debug("{}", invocation.getArgs()[1] == null ? "" : invocation.getArgs()[1].toString());
        // logger.debug("{}", ((MappedStatement) invocation.getArgs()[0]).getBoundSql(invocation.getArgs()[1]).getSql());

//        if (scpDbCtx == null) {
//            logger.error("ScpDbAgent context is null");
//            return invocation.proceed();
//        }

        StopWatch stopWatch = new StopWatch("encode");
        stopWatch.start("encode");

        if (invocation.getArgs()[1] != null) {
            if (invocation.getArgs()[1] instanceof Map) {
                Set keys = ((Map) invocation.getArgs()[1]).keySet();
                for (Iterator j = keys.iterator(); j.hasNext();) {
                    String key = (String) j.next();
                    for (Iterator k = encodeColumns.iterator(); k.hasNext();) {
                        Map encodeColumn = (Map) k.next();
                        if (StringUtils.equals(key, (String) encodeColumn.get("column"))) {
                            logger.debug("{}={}", key, ((Map) invocation.getArgs()[1]).get(key));
                            // ((Map) invocation.getArgs()[1]).put(key, scpDbAgent.ScpEncB64(scpIniFilePath, "KEY1", (String) ((Map) invocation.getArgs()[1]).get(key)));
                            // logger.debug("{}={}", key, scpDbAgent.ScpEncB64(scpIniFilePath, "KEY1", (String) ((Map) invocation.getArgs()[1]).get(key)));
                            try {
//                                logger.debug("{}={}", key, scpDbAgent.AgentCipherEncryptStringB64(scpDbCtx, (String) ((Map) invocation.getArgs()[1]).get(key)));
                                logger.debug("{}={}", key, (String) ((Map) invocation.getArgs()[1]).get(key));
                            } catch (ClassCastException e) {
                                logger.error("{}", e);
                            }
                        }
                    }
                }
            }
        }
        stopWatch.stop();
        logger.trace(stopWatch.shortSummary());

        Object o = invocation.proceed();
        // logger.debug("{}", o == null ? "" : o.toString());

        stopWatch = new StopWatch("decode");
        stopWatch.start("decode");

        if (o instanceof List) {
            for (Iterator i = ((List) o).iterator(); i.hasNext();) {
                Object p = i.next();
                if (p instanceof Map) {
                    Set keys = ((Map) p).keySet();
                    for (Iterator j = keys.iterator(); j.hasNext();) {
                        String key = (String) j.next();
                        for (Iterator k = decodeColumns.iterator(); k.hasNext();) {
                            Map decodeColumn = (Map) k.next();
                            if (StringUtils.equals(key, (String) decodeColumn.get("column"))) {
                                logger.debug("{}={}", key, ((Map) p).get(key));
                                // ((Map) p).put(key, scpDbAgent.ScpEncB64(scpIniFilePath, "KEY1", (String) ((Map) p).get(key)));
                                // logger.debug("{}={}", key, scpDbAgent.ScpEncB64(scpIniFilePath, "KEY1", (String) ((Map) p).get(key)));
                                try {
//                                    logger.debug("{}={}", key, scpDbAgent.AgentCipherEncryptStringB64(scpDbCtx, (String) ((Map) p).get(key)));
                                    logger.debug("{}={}", key, (String) ((Map) p).get(key));
                                } catch (ClassCastException e) {
                                    logger.error("{}", e);
                                }
                            }
                        }
                    }
                }
            }
        }
        if (o instanceof Map) {
            Set keys = ((Map) o).keySet();
            for (Iterator j = keys.iterator(); j.hasNext();) {
                String key = (String) j.next();
                for (Iterator k = decodeColumns.iterator(); k.hasNext();) {
                    Map decodeColumn = (Map) k.next();
                    if (StringUtils.equals(key, (String) decodeColumn.get("column"))) {
                        logger.debug("{}={}", key, ((Map) o).get(key));
                        // ((Map) o).put(key, scpDbAgent.ScpEncB64(scpIniFilePath, "KEY1", (String) ((Map) o).get(key)));
                        // logger.debug("{}={}", key, scpDbAgent.ScpEncB64(scpIniFilePath, "KEY1", (String) ((Map) o).get(key)));
                        try {
//                            logger.debug("{}={}", key, scpDbAgent.AgentCipherEncryptStringB64(scpDbCtx, (String) ((Map) o).get(key)));
                            logger.debug("{}={}", key, (String) ((Map) o).get(key));
                        } catch (ClassCastException e) {
                            logger.error("{}", e);
                        }
                    }
                }
            }
        }
        stopWatch.stop();
        logger.trace(stopWatch.shortSummary());
        return o;
    }
}
