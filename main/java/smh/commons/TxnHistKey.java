package smh.commons;

import java.text.SimpleDateFormat;
import java.util.UUID;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class TxnHistKey {

	private static final Logger logger = LoggerFactory
			.getLogger(TxnHistKey.class);
	
	private static String txnHistKey = "";
	private static int txnHistKeySeq = 0;
	private static String txnGroupHistKey = "";
	public static String getTxnHistKey() {
		genTxnHistKey();
		return txnHistKey;
	}
	public static void setTxnHistKey(String txnHistKey) {
		TxnHistKey.txnHistKey = txnHistKey;
	}
	public static int getTxnHistKeySeq() {
		return txnHistKeySeq;
	}
	public static void setTxnHistKeySeq(int txnHistKeySeq) {
		TxnHistKey.txnHistKeySeq = txnHistKeySeq;
	}
	public static String getTxnGroupHistKey() {
		genTxnGroupHistKey();
		return txnGroupHistKey;
	}
	public static void setTxnGroupHistKey(String txnGroupHistKey) {
		TxnHistKey.txnGroupHistKey = txnGroupHistKey;
	}

	private static void genTxnHistKey(){
    	long nano = System.currentTimeMillis();
    	int txnSeq = TxnHistKey.getTxnHistKeySeq() + 1;
    	if(txnSeq > 9999) txnSeq = 1;
    	setTxnHistKeySeq(txnSeq);
    	setTxnHistKey(new SimpleDateFormat("yyyyMMddHHmmssSSS").format(nano) + "-" + txnSeq);
	}

	private static void genTxnGroupHistKey(){
		String uuid = UUID.randomUUID().toString();
		setTxnGroupHistKey("HTTP" +uuid.replaceAll("-", "").toUpperCase());
	}

}
