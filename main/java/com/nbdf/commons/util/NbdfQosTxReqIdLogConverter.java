package com.nbdf.commons.util;

import com.nbdf.commons.util.TxLogId;
import com.nbdf.commons.util.TxUtil;
import ch.qos.logback.classic.pattern.ClassicConverter;
import ch.qos.logback.classic.spi.ILoggingEvent;

public class NbdfQosTxReqIdLogConverter extends ClassicConverter {

    @Override
    public String convert(ILoggingEvent event) {
        TxLogId txLogId = TxUtil.getTxId();

        if (txLogId == null) {
            return "";
        }

        return txLogId.getReqId();
    }
}
