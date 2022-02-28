package com.nbdf.commons.util;

import ch.qos.logback.classic.Level;
import ch.qos.logback.classic.pattern.ClassicConverter;
import ch.qos.logback.classic.spi.ILoggingEvent;

public class NbdfQosLogConverter extends ClassicConverter {

    @Override
    public String convert(ILoggingEvent event) {
        TxLogId txLogId = event.getLevel().levelInt == Level.ERROR_INT ? TxUtil.getTxId() : TxUtil.getTxIdAndUpdate();

        if (txLogId == null) {
            return "";
        }

        return String.format("[%010d-%03d] %s %d(ms) ", txLogId.getTxId(), txLogId.getSeq(), txLogId.getReqIp(), txLogId.getLapTime());
    }
}
