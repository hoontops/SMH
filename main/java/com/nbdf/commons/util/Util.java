/*
 * Util.java
 * Copyright(C) 2012 Tomatosystem Corporation. LTD. All Rights Reserved.
 * This file is part of Tomatosystem Common Platform.
 */
package com.nbdf.commons.util;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.net.URL;
import java.util.Properties;
import java.util.Scanner;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


public class Util {
	protected static Logger logger = LoggerFactory.getLogger(Util.class);
    private static Util instance;

    private Util() {
    }

    public static Util getInstance() {
        synchronized (Util.class) {
            if (instance == null) {
                instance = new Util();
            }
        }

        return instance;
    }

    public static String encodeHtml(String data) {
        if (data == null) {
            return data;
        }

        String resultData = data.replaceAll("[#]", "&#35;");
        resultData = resultData.replaceAll("[\"]", "&quot;");
        resultData = resultData.replaceAll("[']", "&#39;");
        resultData = resultData.replaceAll("[<]", "&lt;");
        resultData = resultData.replaceAll("[>]", "&gt;");

        return resultData;
    }

    protected static String getServerMode() {
        String serverMode = System.getProperty("SERVER_MODE");  //2015.9.22 장문규: getEnv에서 getProperty로 수정
        if (serverMode == null || "".equals(serverMode)) {
            return "local";
        }
        return serverMode;
    }

    public static String getProperties(String prop, String key) throws IOException {
        String resource = "properties/" + getServerMode() +"/" + prop;

        ClassLoader classLoader = Thread.currentThread().getContextClassLoader();
        URL url = classLoader.getResource(resource);

        String value = null;

        Properties properties = null;
        InputStream inputStream = null;
        try {
            inputStream = classLoader.getResourceAsStream(resource);

            properties = new Properties();
            properties.load(inputStream);

            if (key == null || "".equals(key)) {
                if (url != null) {
                    value = url.toString();
                }
            } else {
                value = properties.getProperty(key);
            }

        } catch (IOException e) {
            logger.debug("failed : {}", e);
        } finally {
            if (inputStream != null) {
                inputStream.close();
            }

            properties.clear();
        }

        return value;
    }

    public static String getCommonProperty(String key) throws IOException {
        return getProperties("commons.properties", key);
    }
/*
    public static void main(String[] args)throws Exception{
    	
        int count=0;
        String s1 = "";
        StringBuffer s2 = new StringBuffer();
        FileInputStream input=new FileInputStream("D:\\interflex\\분석설계\\DB설계\\oracle_tablescripts.sql");
        InputStreamReader reader=new InputStreamReader(input,"euc-kr");
        BufferedReader br=new BufferedReader(reader);
        
        FileOutputStream output=new FileOutputStream("D:\\interflex\\분석설계\\DB설계\\oracle_tablescripts_20210114.sql",false);
        OutputStreamWriter writer=new OutputStreamWriter(output,"euc-kr");
        BufferedWriter out=new BufferedWriter(writer);
        
        while((s1 = br.readLine() ) != null){
        	s1=s1.replaceAll("IF_INTERFACEERROR","INF_INTERFACEERROR");
        	s1=s1.replaceAll("IF_INTERFACESTATE","INF_INTERFACESTATE");
        	s1=s1.replaceAll("IFR_CONSUMABLEINBOUND","INF_CONSUMABLEINBOUND");
        	s1=s1.replaceAll("IFR_CUSTOMER","INF_CUSTOMER");
        	s1=s1.replaceAll("IFR_DEPT","INF_DEPT");
        	s1=s1.replaceAll("IFR_EXCHANGE","INF_EXCHANGE");
        	s1=s1.replaceAll("IFR_SALESORDER","INF_SALESORDER");
        	s1=s1.replaceAll("IFR_UOM","INF_UOM");
        	s1=s1.replaceAll("IFR_USER","INF_USER");
        	s1=s1.replaceAll("IFR_VENDOR","INF_VENDOR");
        	s1=s1.replaceAll("IFR_WAREHOUSE","INF_WAREHOUSE");
        	s1=s1.replaceAll("IFS_AREA","INF_AREA");
        	s1=s1.replaceAll("IFS_BOM","INF_BOM");
        	s1=s1.replaceAll("IFS_BOMCOMPONENT","INF_BOMCOMPONENT");
        	s1=s1.replaceAll("IFS_CATEGORY","INF_CATEGORY");
        	s1=s1.replaceAll("IFS_EQUIPMENTS","INF_EQUIPMENTS");
        	s1=s1.replaceAll("IFS_INBOUNDINSPECTION","INF_INBOUNDINSPECTION");
        	s1=s1.replaceAll("IFS_ITEMMASTER","INF_ITEMMASTER");
        	s1=s1.replaceAll("IFS_ITEMSPEC","INF_ITEMSPEC");
        	s1=s1.replaceAll("IFS_LOTCHANGE","INF_LOTCHANGE");
        	s1=s1.replaceAll("IFS_LOTHOLD","INF_LOTHOLD");
        	s1=s1.replaceAll("IFS_LOTINFO","INF_LOTINFO");
        	s1=s1.replaceAll("IFS_MATERIALINOUT","INF_MATERIALINOUT");
        	s1=s1.replaceAll("IFS_MATERIALREQUEST","INF_MATERIALREQUEST");
        	s1=s1.replaceAll("IFS_MATERIALRESULT","INF_MATERIALRESULT");
        	s1=s1.replaceAll("IFS_PROCESSSEGMENT","INF_PROCESSSEGMENT");
        	s1=s1.replaceAll("IFS_REASONCODE","INF_REASONCODE");
        	s1=s1.replaceAll("IFS_REASONCODECLASS","INF_REASONCODECLASS");
        	s1=s1.replaceAll("IFS_RESOURCE","INF_RESOURCE");
        	s1=s1.replaceAll("IFS_ROUTING","INF_ROUTING");
        	s1=s1.replaceAll("IFS_ROUTINGALTERRESOURCE","INF_ROUTINGALTERRESOURCE");
        	s1=s1.replaceAll("IFS_ROUTINGOPERATION","INF_ROUTINGOPERATION");
        	s1=s1.replaceAll("IFS_ROUTINGRESOURCE","INF_ROUTINGRESOURCE");
        	s1=s1.replaceAll("IFS_SPECAPPROVAL","INF_SPECAPPROVAL");
        	s1=s1.replaceAll("IFS_WAREHOUSEITEMRECEIPTS","INF_WAREHOUSEITEMRECEIPTS");
        	s1=s1.replaceAll("IFS_WAREHOUSELOTRECEIPTS","INF_WAREHOUSELOTRECEIPTS");
        	s1=s1.replaceAll("CT_ABNORMALOCCURRENCE","QAM_ABNORMALOCCURRENCE");
        	s1=s1.replaceAll("CT_AFFECTLOT","QAM_AFFECTLOT");
        	s1=s1.replaceAll("CT_AUDITINSPECTIONSHEET","QAM_AUDITINSPECTIONSHEET");
        	s1=s1.replaceAll("CT_AUDITMANAGEREGIST","QAM_AUDITMANAGEREGIST");
        	s1=s1.replaceAll("CT_AUDITMANAGEREGISTQUARTERDETAIL","QAM_AUDITMANAGEREGISTQUARTERDT");
        	s1=s1.replaceAll("CT_AUDITMANAGEREGISTQUARTERHEADER","QAM_AUDITMANAGEREGISTQUARTERHD");
        	s1=s1.replaceAll("CT_AUDITMONTHLYSALES","QAM_AUDITMONTHLYSALES");
        	s1=s1.replaceAll("CT_AUDITPLANNEDMATERIALS","QAM_AUDITPLANNEDMATERIALS");
        	s1=s1.replaceAll("CT_AUDITPLANNEDPRODUCT","QAM_AUDITPLANNEDPRODUCT");
        	s1=s1.replaceAll("CT_BOXPACKING","PCM_BOXPACKING");
        	s1=s1.replaceAll("CT_BOXPACKINGCASE","PCM_BOXPACKINGCASE");
        	s1=s1.replaceAll("CT_BOXPACKINGXOUT","PCM_BOXPACKINGXOUT");
        	s1=s1.replaceAll("CT_CACULATIONINPUTQTY","PCM_CACULATIONINPUTQTY");
        	s1=s1.replaceAll("CT_CARAPPROVAL","QAM_CARAPPROVAL");
        	s1=s1.replaceAll("CT_CARREQUEST","QAM_CARREQUEST");
        	s1=s1.replaceAll("CT_CHANGEPOINT","QAM_CHANGEPOINT");
        	s1=s1.replaceAll("CT_CHANGEPOINTREVIEW","QAM_CHANGEPOINTREVIEW");
        	s1=s1.replaceAll("CT_CHEMICALANALYSIS","QAM_CHEMICALANALYSIS");
        	s1=s1.replaceAll("CT_CHEMICALANALYSISDETAIL","QAM_CHEMICALANALYSISDETAIL");
        	s1=s1.replaceAll("CT_CHEMICALCHARTSPEC","QAM_CHEMICALCHARTSPEC");
        	s1=s1.replaceAll("CT_CONCURRENTREQUEST","CMD_CONCURRENTREQUEST");
        	s1=s1.replaceAll("CT_CONSUMABLEARRIVAL","MTM_CONSUMABLEARRIVAL");
        	s1=s1.replaceAll("CT_CONSUMABLEMONTHLYSTOCK","MTM_CONSUMABLEMONTHLYSTOCK");
        	s1=s1.replaceAll("CT_CONSUMABLEREQUEST","MTM_CONSUMABLEREQUEST");
        	s1=s1.replaceAll("CT_CONSUMABLEREQUESTDETAIL","MTM_CONSUMABLEREQUESTDETAIL");
        	s1=s1.replaceAll("CT_CONSUMABLETRANSACTION","MTM_CONSUMABLETRANSACTION");
        	s1=s1.replaceAll("CT_CONSUMABLETXNCODE","MTM_CONSUMABLETXNCODE");
        	s1=s1.replaceAll("CT_CONSUMABLETXNHEADER","MTM_CONSUMABLETXNHEADER");
        	s1=s1.replaceAll("CT_CONSUMABLETXNLINE","MTM_CONSUMABLETXNLINE");
        	s1=s1.replaceAll("CT_CONSUMABLETXNREASONCODE","BAS_CONSUMABLETXNREASONCODE");
        	s1=s1.replaceAll("CT_CONSUMEMATERIALLOT_TEMP","PCM_CONSUMEMATERIALLOT_TEMP");
        	s1=s1.replaceAll("CT_COSTCENTERCODE","BAS_COSTCENTERCODE");
        	s1=s1.replaceAll("CT_DEFECTMAPEQUIPMENTDETAIL","QAM_DEFECTMAPEQUIPMENTDETAIL");
        	s1=s1.replaceAll("CT_DEFECTMAPEQUIPMENTHEADER","QAM_DEFECTMAPEQUIPMENTHEADER");
        	s1=s1.replaceAll("CT_DEFECTMAPMAXDEGREE","QAM_DEFECTMAPMAXDEGREE");
        	s1=s1.replaceAll("CT_DEFECTMAPMAXPANEL","QAM_DEFECTMAPMAXPANEL");
        	s1=s1.replaceAll("CT_DEFECTREPAIRMGNT","QAM_DEFECTREPAIRMGNT");
        	s1=s1.replaceAll("CT_DELAYLOT","PCM_DELAYLOT");
        	s1=s1.replaceAll("CT_DISPATCHINGITEM","BAS_DISPATCHINGITEM");
        	s1=s1.replaceAll("CT_DISPATCHINGITEMPRIOTY","BAS_DISPATCHINGITEMPRIOTY");
        	s1=s1.replaceAll("CT_DMAPMANUALMGNT","QAM_DMAPMANUALMGNT");
        	s1=s1.replaceAll("CT_DMAPMANUALMGNTDETAIL","QAM_DMAPMANUALMGNTDETAIL");
        	s1=s1.replaceAll("CT_EQUIPMENTCHANGE","BAS_EQUIPMENTCHANGE");
        	s1=s1.replaceAll("CT_EQUIPMENTDEFECTCODE","BAS_EQUIPMENTDEFECTCODE");
        	s1=s1.replaceAll("CT_ESTIMATEVALIDITY","QAM_ESTIMATEVALIDITY");
        	s1=s1.replaceAll("CT_FACTORY","BAS_FACTORY");
        	s1=s1.replaceAll("CT_FILMLOT","TOM_FILMLOT");
        	s1=s1.replaceAll("CT_FILMMANAGEMENT","TOM_FILMMANAGEMENT");
        	s1=s1.replaceAll("CT_INSPECTIONMETHOD","BAS_INSPECTIONMETHOD");
        	s1=s1.replaceAll("CT_INSPECTIONMETHODITEM","BAS_INSPECTIONMETHODITEM");
        	s1=s1.replaceAll("CT_INSPECTIONWORKER","PCM_INSPECTIONWORKER");
        	s1=s1.replaceAll("CT_INTERFACEMEASUREVALUE","PCM_INTERFACEMEASUREVALUE");
        	s1=s1.replaceAll("CT_LABORPRODUCTIVITY","PCM_LABORPRODUCTIVITY");
        	s1=s1.replaceAll("CT_LAMINATEDSUBMATERIALS","QAM_LAMINATEDSUBMATERIALS");
        	s1=s1.replaceAll("CT_LOADPROCESSCAPAMANAGE","BAS_LOADPROCESSCAPAMANAGE");
        	s1=s1.replaceAll("CT_LOADPRODUCTSEGMENT","BAS_LOADPRODUCTSEGMENT");
        	s1=s1.replaceAll("CT_LOADSEGMENTCLASS","BAS_LOADSEGMENTCLASS");
        	s1=s1.replaceAll("CT_LOADSEGMENTPERDATE","BAS_LOADSEGMENTPERDATE");
        	s1=s1.replaceAll("CT_LOADSEGMENTREL","BAS_LOADSEGMENTREL");
        	s1=s1.replaceAll("CT_LOTAREA","PCM_LOTAREA");
        	s1=s1.replaceAll("CT_LOTCANCELWORKRESULT","PCM_LOTCANCELWORKRESULT");
        	s1=s1.replaceAll("CT_LOTDURABLE","PCM_LOTDURABLE");
        	s1=s1.replaceAll("CT_LOTEQUIPMENT","PCM_LOTEQUIPMENT");
        	s1=s1.replaceAll("CT_LOTLOCKING","PCM_LOTLOCKING");
        	s1=s1.replaceAll("CT_LOTMERGEAPPROVAL","PCM_LOTMERGEAPPROVAL");
        	s1=s1.replaceAll("CT_LOTMESSAGE","PCM_LOTMESSAGE");
        	s1=s1.replaceAll("CT_LOTMESSAGEMNG","PCM_LOTMESSAGEMNG");
        	s1=s1.replaceAll("CT_LOTPCSREL","PCM_LOTPCSREL");
        	s1=s1.replaceAll("CT_LOTPCSRELHIST","PCM_LOTPCSRELHIST");
        	s1=s1.replaceAll("CT_LOTPERDAILY","PCM_LOTPERDAILY");
        	s1=s1.replaceAll("CT_LOTPLANTTRANSIT","MTM_LOTPLANTTRANSIT");
        	s1=s1.replaceAll("CT_LOTPPCASEREL","PCM_LOTPPCASEREL");
        	s1=s1.replaceAll("CT_LOTPPCASERELHIST","PCM_LOTPPCASERELHIST");
        	s1=s1.replaceAll("CT_LOTRECIPEPARAMETERVALUE","PCM_LOTRECIPEPARAMETERVALUE");
        	s1=s1.replaceAll("CT_LOTREEL","PCM_LOTREEL");
        	s1=s1.replaceAll("CT_LOTRESERVELOCKING","PCM_LOTRESERVELOCKING");
        	s1=s1.replaceAll("CT_LOTREWORKORDER","PCM_LOTREWORKORDER");
        	s1=s1.replaceAll("CT_LOTWORKER","PCM_LOTWORKER");
        	s1=s1.replaceAll("CT_LOTWORKRESULT","PCM_LOTWORKRESULT");
        	s1=s1.replaceAll("CT_LOTWTIME","PCM_LOTWTIME");
        	s1=s1.replaceAll("CT_MAILINGCLASS","CMD_MAILINGCLASS");
        	s1=s1.replaceAll("CT_MAILINGUSER","CMD_MAILINGUSER");
        	s1=s1.replaceAll("CT_MAINTITEMDETAIL","BAS_MAINTITEMDETAIL");
        	s1=s1.replaceAll("CT_MAINTWODETAILRESULT","BAS_MAINTWODETAILRESULT");
        	s1=s1.replaceAll("CT_MATERIALSCONNECTOR","QAM_MATERIALSCONNECTOR");
        	s1=s1.replaceAll("CT_MATERIALSNONCONFORMITY","QAM_MATERIALSNONCONFORMITY");
        	s1=s1.replaceAll("CT_MATERIALSRELIABILITY","QAM_MATERIALSRELIABILITY");
        	s1=s1.replaceAll("CT_MATERIALSSHIELD","QAM_MATERIALSSHIELD");
        	s1=s1.replaceAll("CT_MATERIALSSIP","QAM_MATERIALSSIP");
        	s1=s1.replaceAll("CT_MEASURINGINSPECTION","QAM_MEASURINGINSPECTION");
        	s1=s1.replaceAll("CT_MEASURINGINSTCARD","QAM_MEASURINGINSTCARD");
        	s1=s1.replaceAll("CT_MEASURINGREPAIRACTION","QAM_MEASURINGREPAIRACTION");
        	s1=s1.replaceAll("CT_MEASURINGREPAIRAPPROVE","QAM_MEASURINGREPAIRAPPROVE");
        	s1=s1.replaceAll("CT_MEASURINGREPAIROCCUR","QAM_MEASURINGREPAIROCCUR");
        	s1=s1.replaceAll("CT_MEASURINGREPAIRSCRAP","QAM_MEASURINGREPAIRSCRAP");
        	s1=s1.replaceAll("CT_MEASURINGREPAIRSYMPTOMS","QAM_MEASURINGREPAIRSYMPTOMS");
        	s1=s1.replaceAll("CT_MEASURINGRNRDATA","QAM_MEASURINGRNRDATA");
        	s1=s1.replaceAll("CT_NOTICE","CMD_NOTICE");
        	s1=s1.replaceAll("CT_NOTINPUTQTYPERSALESORDER","PCM_NOTINPUTQTYPERSALESORDER");
        	s1=s1.replaceAll("CT_OBJECTFILECOMMENTS","CMD_OBJECTFILECOMMENTS");
        	s1=s1.replaceAll("CT_OSPACTUAL","OSM_OSPACTUAL");
        	s1=s1.replaceAll("CT_OSPACTUALDETAIL","OSM_OSPACTUALDETAIL");
        	s1=s1.replaceAll("CT_OSPACTUALREDUCEDETAIL","OSM_OSPACTUALREDUCEDETAIL");
        	s1=s1.replaceAll("CT_OSPALLOCATERATE","OSM_OSPALLOCATERATE");
        	s1=s1.replaceAll("CT_OSPALLOCATESEGMENT","OSM_OSPALLOCATESEGMENT");
        	s1=s1.replaceAll("CT_OSPBUDGET","OSM_OSPBUDGET");
        	s1=s1.replaceAll("CT_OSPBUDGETEXCEPT","OSM_OSPBUDGETEXCEPT");
        	s1=s1.replaceAll("CT_OSPCLAIM","OSM_OSPCLAIM");
        	s1=s1.replaceAll("CT_OSPCLOSE","OSM_OSPCLOSE");
        	s1=s1.replaceAll("CT_OSPDAILYSUMMARY","OSM_OSPDAILYSUMMARY");
        	s1=s1.replaceAll("CT_OSPETCAMOUNT","OSM_OSPETCAMOUNT");
        	s1=s1.replaceAll("CT_OSPETCCLAIMAMOUNT","OSM_OSPETCCLAIMAMOUNT");
        	s1=s1.replaceAll("CT_OSPETCWORK","OSM_OSPETCWORK");
        	s1=s1.replaceAll("CT_OSPINTERFACECANCEL","OSM_OSPINTERFACECANCEL");
        	s1=s1.replaceAll("CT_OSPPRICE","OSM_OSPPRICE");
        	s1=s1.replaceAll("CT_OSPPRICECHANGE","OSM_OSPPRICECHANGE");
        	s1=s1.replaceAll("CT_OSPPRICECHANGEDETAIL","OSM_OSPPRICECHANGEDETAIL");
        	s1=s1.replaceAll("CT_OSPPRICECODE","OSM_OSPPRICECODE");
        	s1=s1.replaceAll("CT_OSPPRICECOMBINATION","OSM_OSPPRICECOMBINATION");
        	s1=s1.replaceAll("CT_OSPRECEIPTSENDLOT","OSM_OSPRECEIPTSENDLOT");
        	s1=s1.replaceAll("CT_OSPRECEIPTSENDLOTSEGMENT","OSM_OSPRECEIPTSENDLOTSEGMENT");
        	s1=s1.replaceAll("CT_OSPSPECIALREDUCE","OSM_OSPSPECIALREDUCE");
        	s1=s1.replaceAll("CT_OSPYEXCEPTSEGMENT","OSM_OSPYEXCEPTSEGMENT");
        	s1=s1.replaceAll("CT_OSPYFINALINSPST","OSM_OSPYFINALINSPST");
        	s1=s1.replaceAll("CT_OSPYPRICECLASSHEADER","OSM_OSPYPRICECLASSHEADER");
        	s1=s1.replaceAll("CT_OSPYPRICECLASSLINE","OSM_OSPYPRICECLASSLINE");
        	s1=s1.replaceAll("CT_OSPYPRICECODE","OSM_OSPYPRICECODE");
        	s1=s1.replaceAll("CT_OSPYPRICECOMBINATION","OSM_OSPYPRICECOMBINATION");
        	s1=s1.replaceAll("CT_OSPYPRICEITEM","OSM_OSPYPRICEITEM");
        	s1=s1.replaceAll("CT_OUTSIDEMOVECONFIRM","MTM_OUTSIDEMOVECONFIRM");
        	s1=s1.replaceAll("CT_OUTSORCINGINCOMINGDAILY","MTM_OUTSORCINGINCOMINGDAILY");
        	s1=s1.replaceAll("CT_OUTSOURCINGSPEC","BAS_OUTSOURCINGSPEC");
        	s1=s1.replaceAll("CT_PARKINGMATERIALS","QAM_PARKINGMATERIALS");
        	s1=s1.replaceAll("CT_PERIOD","BAS_PERIOD");
        	s1=s1.replaceAll("CT_PLANTUSER","CMD_PLANTUSER");
        	s1=s1.replaceAll("CT_PROCESSEDGOODS","PCM_PROCESSEDGOODS");
        	s1=s1.replaceAll("CT_PROCESSSEGMENTPROGRAM","BAS_PROCESSSEGMENTPROGRAM");
        	s1=s1.replaceAll("CT_PRODUCTQUOTATIONSEGMENT","BAS_PRODUCTQUOTATIONSEGMENT");
        	s1=s1.replaceAll("CT_QCAOIBBTWORKCOMPLETE","PCM_QCAOIBBTWORKCOMPLETE");
        	s1=s1.replaceAll("CT_QCAPPROVAL","QAM_QCAPPROVAL");
        	s1=s1.replaceAll("CT_QCAPPROVALAUTHORITY","QAM_QCAPPROVALAUTHORITY");
        	s1=s1.replaceAll("CT_QCCLAIMDEFECTLOT","QAM_QCCLAIMDEFECTLOT");
        	s1=s1.replaceAll("CT_QCCLAIMLOT","QAM_QCCLAIMLOT");
        	s1=s1.replaceAll("CT_QCETCHRATEMEASURE","QAM_QCETCHRATEMEASURE");
        	s1=s1.replaceAll("CT_QCETCHRATEREMEASURE","QAM_QCETCHRATEREMEASURE");
        	s1=s1.replaceAll("CT_QCEVALUATIONPAPER","QAM_QCEVALUATIONPAPER");
        	s1=s1.replaceAll("CT_QCINSPECTOR","QAM_QCINSPECTOR");
        	s1=s1.replaceAll("CT_QCINSPECTORGRADE","QAM_QCINSPECTORGRADE");
        	s1=s1.replaceAll("CT_QCLOTDEFECTCANCEL","QAM_QCLOTDEFECTCANCEL");
        	s1=s1.replaceAll("CT_QCLOTDEFECTCANCELDEFECT","QAM_QCLOTDEFECTCANCELDEFECT");
        	s1=s1.replaceAll("CT_QCLOTDEFECTCANCELREWORK","QAM_QCLOTDEFECTCANCELREWORK");
        	s1=s1.replaceAll("CT_QCLOTDEFECTINBOUND","QAM_QCLOTDEFECTINBOUND");
        	s1=s1.replaceAll("CT_QCLOTDEFECTMERGE","QAM_QCLOTDEFECTMERGE");
        	s1=s1.replaceAll("CT_QCLOTDEFECTMERGEAPPROVAL","QAM_QCLOTDEFECTMERGEAPPROVAL");
        	s1=s1.replaceAll("CT_QCLOTDEFECTMERGEOLDLOTID","QAM_QCLOTDEFECTMERGEOLDLOTID");
        	s1=s1.replaceAll("CT_QCLOTDEFECTMERGEREQUEST","QAM_QCLOTDEFECTMERGEREQUEST");
        	s1=s1.replaceAll("CT_QCLOTDEFECTOUTBOUND","QAM_QCLOTDEFECTOUTBOUND");
        	s1=s1.replaceAll("CT_QCLOTDEFECTRESULT","QAM_QCLOTDEFECTRESULT");
        	s1=s1.replaceAll("CT_QCNCRISSUE","QAM_QCNCRISSUE");
        	s1=s1.replaceAll("CT_QCOSPREQUESTINSPECTION","QAM_QCOSPREQUESTINSPECTION");
        	s1=s1.replaceAll("CT_QCOSTCODE","QAM_QCOSTCODE");
        	s1=s1.replaceAll("CT_QCOSTEXPENSE","QAM_QCOSTEXPENSE");
        	s1=s1.replaceAll("CT_QCRELIABILITYLOT","QAM_QCRELIABILITYLOT");
        	s1=s1.replaceAll("CT_QCRELIABILITYMEASURE","QAM_QCRELIABILITYMEASURE");
        	s1=s1.replaceAll("CT_QCRELIABILITYREQUEST","QAM_QCRELIABILITYREQUEST");
        	s1=s1.replaceAll("CT_QCRELIABILITYSEGMENTREF","QAM_QCRELIABILITYSEGMENTREF");
        	s1=s1.replaceAll("CT_QCSEGMENTCLASSREL","QAM_QCSEGMENTCLASSREL");
        	s1=s1.replaceAll("CT_QCSEGMENTCLASSREL_BK1125","QAM_QCSEGMENTCLASSREL_BK1125");
        	s1=s1.replaceAll("CT_QCSEGMENTDEFINITION","QAM_QCSEGMENTDEFINITION");
        	s1=s1.replaceAll("CT_QCSEGMENTDEFINITION_BK1125","QAM_QCSEGMENTDEFINITION_BK1125");
        	s1=s1.replaceAll("CT_QCSEGMENTINSPECTIONREL","QAM_QCSEGMENTINSPECTIONREL");
        	s1=s1.replaceAll("CT_QCSPECFIPREFERENCE","QAM_QCSPECFIPREFERENCE");
        	s1=s1.replaceAll("CT_RETURNCHIT","PCM_RETURNCHIT");
        	s1=s1.replaceAll("CT_RETURNLOT","PCM_RETURNLOT");
        	s1=s1.replaceAll("CT_REWORKRETURN","PCM_REWORKRETURN");
        	s1=s1.replaceAll("CT_RUNNINGCHANGEINFO","PCM_RUNNINGCHANGEINFO");
        	s1=s1.replaceAll("CT_SALESPOFORCAST","PCM_SALESPOFORCAST");
        	s1=s1.replaceAll("CT_SEGMENTCLASSPERAREA","PCM_SEGMENTCLASSPERAREA");
        	s1=s1.replaceAll("CT_SEGMENTSTAYINGTIME","PCM_SEGMENTSTAYINGTIME");
        	s1=s1.replaceAll("CT_SERVICESR","PCM_SERVICESR");
        	s1=s1.replaceAll("CT_SERVICESRCOMMENTS","PCM_SERVICESRCOMMENTS");
        	s1=s1.replaceAll("CT_SHIPMENTEXPORTDATAHIST","BAS_SHIPMENTEXPORTDATAHIST");
        	s1=s1.replaceAll("CT_SHIPMENTEXPORTHIST","BAS_SHIPMENTEXPORTHIST");
        	s1=s1.replaceAll("CT_SHIPMENTEXPORTLIST","BAS_SHIPMENTEXPORTLIST");
        	s1=s1.replaceAll("CT_SHIPMENTMAPPINGDATA","BAS_SHIPMENTMAPPINGDATA");
        	s1=s1.replaceAll("CT_SHIPMENTMAPPINGINFO","BAS_SHIPMENTMAPPINGINFO");
        	s1=s1.replaceAll("CT_SHIPMENTMAPPINGLIST","BAS_SHIPMENTMAPPINGLIST");
        	s1=s1.replaceAll("CT_SHIPPEDPERPRODUCT","MTM_SHIPPEDPERPRODUCT");
        	s1=s1.replaceAll("CT_SPAREPARTINBOUND","MTM_SPAREPARTINBOUND");
        	s1=s1.replaceAll("CT_SPAREPARTMOVE","MTM_SPAREPARTMOVE");
        	s1=s1.replaceAll("CT_SPAREPARTSTOCK","MTM_SPAREPARTSTOCK");
        	s1=s1.replaceAll("CT_SPAREPARTTRANSACTION","MTM_SPAREPARTTRANSACTION");
        	s1=s1.replaceAll("CT_SPECCHANGEREQUEST","BAS_SPECCHANGEREQUEST");
        	s1=s1.replaceAll("CT_SUMMATERIALS","PCM_SUMMATERIALS");
        	s1=s1.replaceAll("CT_TACKTIMEMANAGE","PCM_TACKTIMEMANAGE");
        	s1=s1.replaceAll("CT_TCCONNECTINFO","CMD_TCCONNECTINFO");
        	s1=s1.replaceAll("CT_TOOLMAKERECEIPT","TOM_TOOLMAKERECEIPT");
        	s1=s1.replaceAll("CT_TOOLMOVE","TOM_TOOLMOVE");
        	s1=s1.replaceAll("CT_TOOLREPAIRRECEIPT","TOM_TOOLREPAIRRECEIPT");
        	s1=s1.replaceAll("CT_TOOLREPAIRRECEIPTLOT","TOM_TOOLREPAIRRECEIPTLOT");
        	s1=s1.replaceAll("CT_TOOLREPAIRSEND","TOM_TOOLREPAIRSEND");
        	s1=s1.replaceAll("CT_TOOLREPAIRSENDLOT","TOM_TOOLREPAIRSENDLOT");
        	s1=s1.replaceAll("CT_TOOLREQUEST","TOM_TOOLREQUEST");
        	s1=s1.replaceAll("CT_TOOLREQUESTAPPROVALUSER","TOM_TOOLREQUESTAPPROVALUSER");
        	s1=s1.replaceAll("CT_TOOLREQUESTDETAIL","TOM_TOOLREQUESTDETAIL");
        	s1=s1.replaceAll("CT_TOOLREQUESTDETAILLOT","TOM_TOOLREQUESTDETAILLOT");
        	s1=s1.replaceAll("CT_USERGROUP","CMD_USERGROUP");
        	s1=s1.replaceAll("CT_USERGROUPUSER","CMD_USERGROUPUSER");
        	s1=s1.replaceAll("CT_WAREHOUSESTOCKPERPRODUCT","MTM_WAREHOUSESTOCKPERPRODUCT");
        	s1=s1.replaceAll("CT_WIPLEADTIME","PCM_WIPLEADTIME");
        	s1=s1.replaceAll("CT_WIPLEADTIMEPERTYPE","PCM_WIPLEADTIMEPERTYPE");
        	s1=s1.replaceAll("CT_WIPSUMMARYPERDAILY","PCM_WIPSUMMARYPERDAILY");
        	s1=s1.replaceAll("CT_WIPSUMMARYPERMONTHLY","PCM_WIPSUMMARYPERMONTHLY");
        	s1=s1.replaceAll("CT_WIPSUMMARYPERTIME","PCM_WIPSUMMARYPERTIME");
        	s1=s1.replaceAll("CT_WIPSURVEY","PCM_WIPSURVEY");
        	s1=s1.replaceAll("CT_WTIMEACTION","BAS_WTIMEACTION");
        	s1=s1.replaceAll("CT_WTIMEACTION_COPY","BAS_WTIMEACTION_COPY");
        	s1=s1.replaceAll("CT_WTIMEDEFINITION","BAS_WTIMEDEFINITION");
        	s1=s1.replaceAll("CT_WTIMEDEFINITION_COPY","BAS_WTIMEDEFINITION_COPY");
        	s1=s1.replaceAll("CT_YIELDDEFECTSUMMARY","PCM_YIELDDEFECTSUMMARY");
        	s1=s1.replaceAll("CT_YIELDDEFECTSUMMARY2","PCM_YIELDDEFECTSUMMARY2");
        	s1=s1.replaceAll("CT_YIELDSUMMARY","PCM_YIELDSUMMARY");
        	s1=s1.replaceAll("CT_YIELDSUMMARY2","PCM_YIELDSUMMARY2");
        	s1=s1.replaceAll("CT_YIELDSUMMARYINPUTQTY2","PCM_YIELDSUMMARYINPUTQTY2");
        	s1=s1.replaceAll("CT_YIELDSUMMARYPROCEQPINFO2","PCM_YIELDSUMMARYPROCEQPINFO2");
        	s1=s1.replaceAll("CT_YIELDSUMMARYSITEINFO2","PCM_YIELDSUMMARYSITEINFO2");
        	s1=s1.replaceAll("IFR_MATERIALLOTRECEIPTS","PCM_MATERIALLOTRECEIPTS");
        	s1=s1.replaceAll("IFR_WAREHOUSE","BAS_WAREHOUSE");
        	s1=s1.replaceAll("MM_ALTERNATIVEMATERIAL","BAS_ALTERNATIVEMATERIAL");
        	s1=s1.replaceAll("MM_APPROVAL","CMD_APPROVAL");
        	s1=s1.replaceAll("MM_APPROVALTRANSACTION","CMD_APPROVALTRANSACTION");
        	s1=s1.replaceAll("MM_AREAWORKER","BAS_AREAWORKER");
        	s1=s1.replaceAll("MM_ASSEMBLYBILLOFMATERIAL","BAS_ASSEMBLYBILLOFMATERIAL");
        	s1=s1.replaceAll("MM_ASSEMBLYBILLOFMATERIAL_COPY","BAS_ASSEMBLYBILLOFMATERIAL_CP");
        	s1=s1.replaceAll("MM_ASSIGNATTRIBUTEGROUP","BAS_ASSIGNATTRIBUTEGROUP");
        	s1=s1.replaceAll("MM_ATTRIBUTE","BAS_ATTRIBUTE");
        	s1=s1.replaceAll("MM_ATTRIBUTEGROUP","BAS_ATTRIBUTEGROUP");
        	s1=s1.replaceAll("MM_ATTRIBUTEMAPPING","BAS_ATTRIBUTEMAPPING");
        	s1=s1.replaceAll("MM_BOMCALCULATOR","BAS_BOMCALCULATOR");
        	s1=s1.replaceAll("MM_BOMCNV","BAS_BOMCNV");
        	s1=s1.replaceAll("MM_BOMCOMPONENT","BAS_BOMCOMPONENT");
        	s1=s1.replaceAll("MM_BOMCOMPONENT_COPY","BAS_BOMCOMPONENT_COPY");
        	s1=s1.replaceAll("MM_CAMCHANGE","PCM_CAMCHANGE");
        	s1=s1.replaceAll("MM_CAMREQUEST","PCM_CAMREQUEST");
        	s1=s1.replaceAll("MM_CAMREQUESTDETAIL","PCM_CAMREQUESTDETAIL");
        	s1=s1.replaceAll("MM_CAMSPECIALNOTE","PCM_CAMSPECIALNOTE");
        	s1=s1.replaceAll("MM_CAMSPECIALNOTECLASS","PCM_CAMSPECIALNOTECLASS");
        	s1=s1.replaceAll("MM_CATEGORY","PCM_CATEGORY");
        	s1=s1.replaceAll("MM_CIRCUITCONFIGURATION","PCM_CIRCUITCONFIGURATION");
        	s1=s1.replaceAll("MM_CNCAUTHORITY","PCM_CNCAUTHORITY");
        	s1=s1.replaceAll("MM_CNCDATA","PCM_CNCDATA");
        	s1=s1.replaceAll("MM_CNCDATAPRODUCTION","PCM_CNCDATAPRODUCTION");
        	s1=s1.replaceAll("MM_CNCDATASAMPLE","PCM_CNCDATASAMPLE");
        	s1=s1.replaceAll("MM_CNCNOTICE","PCM_CNCNOTICE");
        	s1=s1.replaceAll("MM_CUSTOMER","BAS_CUSTOMER");
        	s1=s1.replaceAll("MM_EQUIPMENTEXT","BAS_EQUIPMENTEXT");
        	s1=s1.replaceAll("MM_EQUIPMENTIMAGE","BAS_EQUIPMENTIMAGE");
        	s1=s1.replaceAll("MM_EQUIPMENTSPEC","BAS_EQUIPMENTSPEC");
        	s1=s1.replaceAll("MM_ERPINTERFACE","_ERPINTERFACE");
        	s1=s1.replaceAll("MM_EXCHANGE","BAS_EXCHANGE");
        	s1=s1.replaceAll("MM_GOVERNANCE","BAS_GOVERNANCE");
        	s1=s1.replaceAll("MM_GOVERNANCESITE","BAS_GOVERNANCESITE");
        	s1=s1.replaceAll("MM_INKJETPRODUCT","BAS_INKJETPRODUCT");
        	s1=s1.replaceAll("MM_INSPECTIONITEMATTRIBUTE_TEST","BAS_INSPECTIONITEMATTRIBUTE_TE");
        	s1=s1.replaceAll("MM_INSPECTIONPOINT","BAS_INSPECTIONPOINT");
        	s1=s1.replaceAll("MM_INSPECTIONSEGMENTREL","BAS_INSPECTIONSEGMENTREL");
        	s1=s1.replaceAll("MM_INSPITEMGROUP_TEST","BAS_INSPITEMGROUP_TEST");
        	s1=s1.replaceAll("MM_INTERFACESYSTEM","BAS_INTERFACESYSTEM");
        	s1=s1.replaceAll("MM_ITEMMASTER","BAS_ITEMMASTER");
        	s1=s1.replaceAll("MM_ITEMWAREHOUSE","BAS_ITEMWAREHOUSE");
        	s1=s1.replaceAll("MM_LOCATION","BAS_LOCATION");
        	s1=s1.replaceAll("MM_MASTERDATACLASS","BAS_MASTERDATACLASS");
        	s1=s1.replaceAll("MM_MATERIALCNV","BAS_MATERIALCNV");
        	s1=s1.replaceAll("MM_MATERIALITEMSPEC","BAS_MATERIALITEMSPEC");
        	s1=s1.replaceAll("MM_MESVALUE","BAS_MESVALUE");
        	s1=s1.replaceAll("MM_OPEDFFCNV","BAS_OPEDFFCNV");
        	s1=s1.replaceAll("MM_OPERATION","BAS_OPERATION");
        	s1=s1.replaceAll("MM_OPERATIONDFF","BAS_OPERATIONDFF");
        	s1=s1.replaceAll("MM_OPERATIONRESOURCE","BAS_OPERATIONRESOURCE");
        	s1=s1.replaceAll("MM_OPERATIONRESOURCE_COPY","BAS_OPERATIONRESOURCE_COPY");
        	s1=s1.replaceAll("MM_OPERATIONSPECVALUE","BAS_OPERATIONSPECVALUE");
        	s1=s1.replaceAll("MM_OPERATIONSPECVALUE_COPY","BAS_OPERATIONSPECVALUE_COPY");
        	s1=s1.replaceAll("MM_OPERESOURCECNV","BAS_OPERESOURCECNV");
        	s1=s1.replaceAll("MM_OPERESOURCEINSTANCE","BAS_OPERESOURCEINSTANCE");
        	s1=s1.replaceAll("MM_OSPPRICECNV","BAS_OSPPRICECNV");
        	s1=s1.replaceAll("MM_PACKAGEPRODUCT","BAS_PACKAGEPRODUCT");
        	s1=s1.replaceAll("MM_PROCESSATTRIBUTEVALUE","BAS_PROCESSATTRIBUTEVALUE");
        	s1=s1.replaceAll("MM_PROCESSATTRIBUTEVALUE_COPY","BAS_PROCESSATTRIBUTEVALUE_COPY");
        	s1=s1.replaceAll("MM_PROCESSSEGMENTATTRIBUTE","BAS_PROCESSSEGMENTATTRIBUTE");
        	s1=s1.replaceAll("MM_PROCESSSEGMENTEQPTCLASS","BAS_PROCESSSEGMENTEQPTCLASS");
        	s1=s1.replaceAll("MM_PROCESSSEGMENTEXT","BAS_PROCESSSEGMENTEXT");
        	s1=s1.replaceAll("MM_PROCESSSEGMENTRESOURCE","BAS_PROCESSSEGMENTRESOURCE");
        	s1=s1.replaceAll("MM_PRODUCTCNV","BAS_PRODUCTCNV");
        	s1=s1.replaceAll("MM_PRODUCTITEMSPEC","BAS_PRODUCTITEMSPEC");
        	s1=s1.replaceAll("MM_PRODUCTITEMSPEC_COPY","BAS_PRODUCTITEMSPEC_COPY");
        	s1=s1.replaceAll("MM_PRODUCTITEMSPECCOMMENT","BAS_PRODUCTITEMSPECCOMMENT");
        	s1=s1.replaceAll("MM_PRODUCTITEMSPECCOMMENT_COPY","BAS_PRODUCTITEMSPECCOMMENT_CP");
        	s1=s1.replaceAll("MM_PRODUCTITEMSPECDETAIL","BAS_PRODUCTITEMSPECDETAIL");
        	s1=s1.replaceAll("MM_PRODUCTITEMSPECDETAIL_COPY","BAS_PRODUCTITEMSPECDETAIL_COPY");
        	s1=s1.replaceAll("MM_PRODUCTITEMSPECMVH","BAS_PRODUCTITEMSPECMVH");
        	s1=s1.replaceAll("MM_PRODUCTITEMSPECMVH_COPY","BAS_PRODUCTITEMSPECMVH_COPY");
        	s1=s1.replaceAll("MM_PRODUCTITEMSPECTOOL","BAS_PRODUCTITEMSPECTOOL");
        	s1=s1.replaceAll("MM_PRODUCTITEMSPECTOOL_COPY","BAS_PRODUCTITEMSPECTOOL_COPY");
        	s1=s1.replaceAll("MM_PRODUCTITEMSPECTOOLCOMMENT","BAS_PRODUCTITEMSPECTOOLCOMMENT");
        	s1=s1.replaceAll("MM_PRODUCTITEMTHICKSPEC","BAS_PRODUCTITEMTHICKSPEC");
        	s1=s1.replaceAll("MM_QCAQLDEFECTLEVEL","BAS_QCAQLDEFECTLEVEL");
        	s1=s1.replaceAll("MM_QCAQLINSPECTIONLEVEL","BAS_QCAQLINSPECTIONLEVEL");
        	s1=s1.replaceAll("MM_QCCHEMICALATTRIBUTE_TEST","BAS_QCCHEMICALATTRIBUTE_TEST");
        	s1=s1.replaceAll("MM_QCCHEMICALCYCLE","BAS_QCCHEMICALCYCLE");
        	s1=s1.replaceAll("MM_QCCHEMICALITEMCYCLE","BAS_QCCHEMICALITEMCYCLE");
        	s1=s1.replaceAll("MM_QCCHEMICALITEMCYCLE_BK1125","BAS_QCCHEMICALITEMCYCLE_BK1125");
        	s1=s1.replaceAll("MM_QCCHEMICALITEMCYCLE_TEST","BAS_QCCHEMICALITEMCYCLE_TEST");
        	s1=s1.replaceAll("MM_QCINTERLOCK","BAS_QCINTERLOCK");
        	s1=s1.replaceAll("MM_QCINTERLOCK_BK1125","BAS_QCINTERLOCK_BK1125");
        	s1=s1.replaceAll("MM_QCINTERLOCK_TEST","BAS_QCINTERLOCK_TEST");
        	s1=s1.replaceAll("MM_QCINTERLOCKACTION","BAS_QCINTERLOCKACTION");
        	s1=s1.replaceAll("MM_QCINTERLOCKACTION_BK1125","BAS_QCINTERLOCKACTION_BK1125");
        	s1=s1.replaceAll("MM_QCINTERLOCKACTION_TEST","BAS_QCINTERLOCKACTION_TEST");
        	s1=s1.replaceAll("MM_QCINTERLOCKHISTORY_BK1125","BAS_QCINTERLOCKHIST_BK1125");
        	s1=s1.replaceAll("MM_QCPCSIMAGE","BAS_QCPCSIMAGE");
        	s1=s1.replaceAll("MM_RELATIONSHIP","CMD_RELATIONSHIP");
        	s1=s1.replaceAll("MM_RESOURCE","BAS_RESOURCE");
        	s1=s1.replaceAll("MM_REWORKCONTROL","BAS_REWORKCONTROL");
        	s1=s1.replaceAll("MM_ROLLLOSS","BAS_ROLLLOSS");
        	s1=s1.replaceAll("MM_ROLLLOSS_COPY","BAS_ROLLLOSS_COPY");
        	s1=s1.replaceAll("MM_ROLLLOSSOPERATION","BAS_ROLLLOSSOPERATION");
        	s1=s1.replaceAll("MM_ROLLLOSSOPERATION_COPY","BAS_ROLLLOSSOPERATION_COPY");
        	s1=s1.replaceAll("MM_ROUTING","BAS_ROUTING");
        	s1=s1.replaceAll("MM_ROUTINGCNV","BAS_ROUTINGCNV");
        	s1=s1.replaceAll("MM_RULEDEFINITION","BAS_RULEDEFINITION");
        	s1=s1.replaceAll("MM_RULEFORMULA","BAS_RULEFORMULA");
        	s1=s1.replaceAll("MM_SALEORDERAPPROVAL","BAS_SALEORDERAPPROVAL");
        	s1=s1.replaceAll("MM_SPAREPARTIMAGE","BAS_SPAREPARTIMAGE");
        	s1=s1.replaceAll("MM_SPAREPARTSPEC","BAS_SPAREPARTSPEC");
        	s1=s1.replaceAll("MM_SPECATTRIBUTE","BAS_SPECATTRIBUTE");
        	s1=s1.replaceAll("MM_SPECCLASS","BAS_SPECCLASS");
        	s1=s1.replaceAll("MM_SPECDEFCHANGEREASON","BAS_SPECDEFCHANGEREASON");
        	s1=s1.replaceAll("MM_SPECDEFINITION","BAS_SPECDEFINITION");
        	s1=s1.replaceAll("MM_SPECDEFINITION_BK1125","BAS_SPECDEFINITION_BK1125");
        	s1=s1.replaceAll("MM_SPECDEFINITIONHISTORY_BK1125","BAS_SPECDEFINITIONHIST_BK1125");
        	s1=s1.replaceAll("MM_SPECDETAIL","BAS_SPECDETAIL");
        	s1=s1.replaceAll("MM_TARGETVALUE","BAS_TARGETVALUE");
        	s1=s1.replaceAll("MM_UOMCLASS","BAS_UOMCLASS");
        	s1=s1.replaceAll("MM_UOMCONVERSION","BAS_UOMCONVERSION");
        	s1=s1.replaceAll("MM_UOMDEFINITION","BAS_UOMDEFINITION");
        	s1=s1.replaceAll("MM_UOMDEFMAP","BAS_UOMDEFMAP");
        	s1=s1.replaceAll("MM_USERWORKCENTER","BAS_USERWORKCENTER");
        	s1=s1.replaceAll("MM_VENDOR","BAS_VENDOR");
        	s1=s1.replaceAll("MM_VENDORAUDIT","BAS_VENDORAUDIT");
        	s1=s1.replaceAll("MM_WAREHOUSE","BAS_WAREHOUSE");
        	s1=s1.replaceAll("MT_GOVERNANCEMATERIALSPEC","BAS_GOVERNANCEMATERIALSPEC");
        	s1=s1.replaceAll("SF_ACTION","BAS_ACTION");
        	s1=s1.replaceAll("SF_ALARM","BAS_ALARM");
        	s1=s1.replaceAll("SF_ALARMACTION","BAS_ALARMACTION");
        	s1=s1.replaceAll("SF_ALARMCLASS","BAS_ALARMCLASS");
        	s1=s1.replaceAll("SF_ALARMDEFINITION","BAS_ALARMDEFINITION");
        	s1=s1.replaceAll("SF_AREA","BAS_AREA");
        	s1=s1.replaceAll("SF_BILLOFMATERIAL","BAS_BILLOFMATERIAL");
        	s1=s1.replaceAll("SF_BILLOFMATERIAL_COPY","BAS_BILLOFMATERIAL_COPY");
        	s1=s1.replaceAll("SF_BILLOFRESOURCE","BAS_BILLOFRESOURCE");
        	s1=s1.replaceAll("SF_CODE","BAS_CODE");
        	s1=s1.replaceAll("SF_CODECLASS","BAS_CODECLASS");
        	s1=s1.replaceAll("SF_CONSUMABLECLASS","BAS_CONSUMABLECLASS");
        	s1=s1.replaceAll("SF_CONSUMABLEDEFINITION","BAS_CONSUMABLEDEFINITION");
        	s1=s1.replaceAll("SF_CONSUMABLEDEFINITION_COPY","BAS_CONSUMABLEDEFINITION_COPY");
        	s1=s1.replaceAll("SF_CONSUMABLELOT","MTM_CONSUMABLELOT");
        	s1=s1.replaceAll("SF_CONSUMABLELOTGROUP","MTM_CONSUMABLELOTGROUP");
        	s1=s1.replaceAll("SF_CONSUMEMATERIALLOT","MTM_CONSUMEMATERIALLOT");
        	s1=s1.replaceAll("SF_DACLASS","BAS_DACLASS");
        	s1=s1.replaceAll("SF_DADEFINITION","BAS_DADEFINITION");
        	s1=s1.replaceAll("SF_DAITEM","BAS_DAITEM");
        	s1=s1.replaceAll("SF_DAPOINT","BAS_DAPOINT");
        	s1=s1.replaceAll("SF_DARESULT","BAS_DARESULT");
        	s1=s1.replaceAll("SF_DEFECTCODE","BAS_DEFECTCODE");
        	s1=s1.replaceAll("SF_DEFECTCODECLASS","BAS_DEFECTCODECLASS");
        	s1=s1.replaceAll("SF_DEFECTCODEREL","BAS_DEFECTCODEREL");
        	s1=s1.replaceAll("SF_DICTIONARY","CMD_DICTIONARY");
        	s1=s1.replaceAll("SF_DICTIONARYCLASS","CMD_DICTIONARYCLASS");
        	s1=s1.replaceAll("SF_DURABLECLASS","TOM_DURABLECLASS");
        	s1=s1.replaceAll("SF_DURABLEDEFINITION","TOM_DURABLEDEFINITION");
        	s1=s1.replaceAll("SF_DURABLELOT","TOM_DURABLELOT");
        	s1=s1.replaceAll("SF_DURABLELOTGROUP","TOM_DURABLELOTGROUP");
        	s1=s1.replaceAll("SF_ENTERPRISE","BAS_ENTERPRISE");
        	s1=s1.replaceAll("SF_EQUIPMENT","BAS_EQUIPMENT");
        	s1=s1.replaceAll("SF_EQUIPMENTCLASS","BAS_EQUIPMENTCLASS");
        	s1=s1.replaceAll("SF_EQUIPMENTMAINTITEM","BAS_EQUIPMENTMAINTITEM");
        	s1=s1.replaceAll("SF_FAVORITEMENUS","CMD_FAVORITEMENUS");
        	s1=s1.replaceAll("SF_IDCLASS","CMD_IDCLASS");
        	s1=s1.replaceAll("SF_IDCLASSSERIAL","CMD_IDCLASSSERIAL");
        	s1=s1.replaceAll("SF_IDCLASSSPLIT","CMD_IDCLASSSPLIT");
        	s1=s1.replaceAll("SF_IDDEFINITION","CMD_IDDEFINITION");
        	s1=s1.replaceAll("SF_INSPECTIONCLASS","BAS_INSPECTIONCLASS");
        	s1=s1.replaceAll("SF_INSPECTIONCLASS_BK1125","BAS_INSPECTIONCLASS_BK1125");
        	s1=s1.replaceAll("SF_INSPECTIONCLASSHISTORY_BK1125","BAS_INSPECTIONCLASSHIST_BK1125");
        	s1=s1.replaceAll("SF_INSPECTIONDEFECT","BAS_INSPECTIONDEFECT");
        	s1=s1.replaceAll("SF_INSPECTIONDEFINITION","BAS_INSPECTIONDEFINITION");
        	s1=s1.replaceAll("SF_INSPECTIONFILE","BAS_INSPECTIONFILE");
        	s1=s1.replaceAll("SF_INSPECTIONITEMREL","BAS_INSPECTIONITEMREL");
        	s1=s1.replaceAll("SF_INSPECTIONITEMREL_BK1125","BAS_INSPECTIONITEMREL_BK1125");
        	s1=s1.replaceAll("SF_INSPECTIONITEMREL_COPY","BAS_INSPECTIONITEMREL_COPY");
        	s1=s1.replaceAll("SF_INSPECTIONITEMRESULT","BAS_INSPECTIONITEMRESULT");
        	s1=s1.replaceAll("SF_INSPECTIONRESULT","BAS_INSPECTIONRESULT");
        	s1=s1.replaceAll("SF_INSPITEM","BAS_INSPITEM");
        	s1=s1.replaceAll("SF_INSPITEM_BK1125","BAS_INSPITEM_BK1125");
        	s1=s1.replaceAll("SF_INSPITEMCLASS_BK1125","BAS_INSPITEMCLASS_BK1125");
        	s1=s1.replaceAll("SF_INSPITEMCLASSHISTORY_BK1125","BAS_INSPITEMCLASSHIST_BK1125");
        	s1=s1.replaceAll("SF_INSPITEMHISTORY_BK1125","BAS_INSPITEMHIST_BK1125");
        	s1=s1.replaceAll("SF_LABELBARCODE","BAS_LABELBARCODE");
        	s1=s1.replaceAll("SF_LABELCLASS","BAS_LABELCLASS");
        	s1=s1.replaceAll("SF_LABELDEFINITION","BAS_LABELDEFINITION");
        	s1=s1.replaceAll("SF_LABELMAP","BAS_LABELMAP");
        	s1=s1.replaceAll("SF_LOG","CMD_LOG");
        	s1=s1.replaceAll("SF_LOT","PCM_LOT");
        	s1=s1.replaceAll("SF_LOTCOMMENT","PCM_LOTCOMMENT");
        	s1=s1.replaceAll("SF_LOTDEFECT","PCM_LOTDEFECT");
        	s1=s1.replaceAll("SF_LOTGENEAL","PCM_LOTGENEAL");
        	s1=s1.replaceAll("SF_LOTGROUP","PCM_LOTGROUP");
        	s1=s1.replaceAll("SF_LOTHOLD","PCM_LOTHOLD");
        	s1=s1.replaceAll("SF_LOTPLAN","PCM_LOTPLAN");
        	s1=s1.replaceAll("SF_LOTQTIME","PCM_LOTQTIME");
        	s1=s1.replaceAll("SF_MAINTITEM","BAS_MAINTITEM");
        	s1=s1.replaceAll("SF_MAINTITEMCLASS","BAS_MAINTITEMCLASS");
        	s1=s1.replaceAll("SF_MAINTWORKORDER","EQM_MAINTWORKORDER");
        	s1=s1.replaceAll("SF_MAINTWORKORDERFILE","EQM_MAINTWORKORDERFILE");
        	s1=s1.replaceAll("SF_MAINTWOSPAREPART","EQM_MAINTWOSPAREPART");
        	s1=s1.replaceAll("SF_MENU","CMD_MENU");
        	s1=s1.replaceAll("SF_MENUAUTHORITY","CMD_MENUAUTHORITY");
        	s1=s1.replaceAll("SF_MESSAGE","CMD_MESSAGE");
        	s1=s1.replaceAll("SF_MESSAGECLASS","CMD_MESSAGECLASS");
        	s1=s1.replaceAll("SF_OBJECT","CMD_OBJECT");
        	s1=s1.replaceAll("SF_OBJECTATTRIBUTE","CMD_OBJECTATTRIBUTE");
        	s1=s1.replaceAll("SF_OBJECTFILE","CMD_OBJECTFILE");
        	s1=s1.replaceAll("SF_OBJECTFILEMAP","CMD_OBJECTFILEMAP");
        	s1=s1.replaceAll("SF_PLANT","BAS_PLANT");
        	s1=s1.replaceAll("SF_PREVENTIVEMAINTPLAN","EQM_PREVENTIVEMAINTPLAN");
        	s1=s1.replaceAll("SF_PREVENTIVEMAINTRESULT","EQM_PREVENTIVEMAINTRESULT");
        	s1=s1.replaceAll("SF_PROCESSCLASS","BAS_PROCESSCLASS");
        	s1=s1.replaceAll("SF_PROCESSDEFINITION","BAS_PROCESSDEFINITION");
        	s1=s1.replaceAll("SF_PROCESSPATH","BAS_PROCESSPATH");
        	s1=s1.replaceAll("SF_PROCESSPATH_COPY","BAS_PROCESSPATH_COPY");
        	s1=s1.replaceAll("SF_PROCESSSEGMENT","BAS_PROCESSSEGMENT");
        	s1=s1.replaceAll("SF_PROCESSSEGMENTCLASS","BAS_PROCESSSEGMENTCLASS");
        	s1=s1.replaceAll("SF_PROCESSSEGMENTPARA","BAS_PROCESSSEGMENTPARA");
        	s1=s1.replaceAll("SF_PRODUCTCLASS","BAS_PRODUCTCLASS");
        	s1=s1.replaceAll("SF_PRODUCTDEFINITION","BAS_PRODUCTDEFINITION");
        	s1=s1.replaceAll("SF_PRODUCTDEFINITION_COPY","BAS_PRODUCTDEFINITION_COPY");
        	s1=s1.replaceAll("SF_PRODUCTIONORDER","MFM_PRODUCTIONORDER");
        	s1=s1.replaceAll("SF_QTIMEACTION","BAS_QTIMEACTION");
        	s1=s1.replaceAll("SF_QTIMEDEFINITION","BAS_QTIMEDEFINITION");
        	s1=s1.replaceAll("SF_REASONCODE","BAS_REASONCODE");
        	s1=s1.replaceAll("SF_REASONCODECLASS","BAS_REASONCODECLASS");
        	s1=s1.replaceAll("SF_RECIPECLASS","BAS_RECIPECLASS");
        	s1=s1.replaceAll("SF_RECIPEDEFINITION","BAS_RECIPEDEFINITION");
        	s1=s1.replaceAll("SF_RECIPEPARA","BAS_RECIPEPARA");
        	s1=s1.replaceAll("SF_SERVICE","CMD_SERVICE");
        	s1=s1.replaceAll("SF_SERVICEBEHAVIOR","CMD_SERVICEBEHAVIOR");
        	s1=s1.replaceAll("SF_SERVICEBEHAVIORARG","CMD_SERVICEBEHAVIORARG");
        	s1=s1.replaceAll("SF_SERVICECLASS","CMD_SERVICECLASS");
        	s1=s1.replaceAll("SF_SERVICEVALID","CMD_SERVICEVALID");
        	s1=s1.replaceAll("SF_SHIFT","BAS_SHIFT");
        	s1=s1.replaceAll("SF_STATE","BAS_STATE");
        	s1=s1.replaceAll("SF_STATEMODEL","BAS_STATEMODEL");
        	s1=s1.replaceAll("SF_STATETRANSITION","BAS_STATETRANSITION");
        	s1=s1.replaceAll("SF_SUBLOT","PCM_SUBLOT");
        	s1=s1.replaceAll("SF_TOOLBAR","CMD_TOOLBAR");
        	s1=s1.replaceAll("SF_TOOLBARAUTHORITY","CMD_TOOLBARAUTHORITY");
        	s1=s1.replaceAll("SF_TOOLBARAUTHORITYHITORY","CMD_TOOLBARAUTHORITYHITORY");
        	s1=s1.replaceAll("SF_UI","CMD_UI");
        	s1=s1.replaceAll("SF_UICONDACTION","CMD_UICONDACTION");
        	s1=s1.replaceAll("SF_UICONDITEM","CMD_UICONDITEM");
        	s1=s1.replaceAll("SF_UICONDITEMGROUP","CMD_UICONDITEMGROUP");
        	s1=s1.replaceAll("SF_UICONDITEMGROUPMAP","CMD_UICONDITEMGROUPMAP");
        	s1=s1.replaceAll("SF_UIMENUCONDACTIONMAP","CMD_UIMENUCONDACTIONMAP");
        	s1=s1.replaceAll("SF_UIMENUCONDITEMMAP","CMD_UIMENUCONDITEMMAP");
        	s1=s1.replaceAll("SF_USER","CMD_USER");
        	s1=s1.replaceAll("SF_USERCLASS","CMD_USERCLASS");
        	s1=s1.replaceAll("SF_USERCLASSUSER","CMD_USERCLASSUSER");
        	s1=s1.replaceAll("SF_WORKCALENDAR","MFM_WORKCALENDAR");
        	s1=s1.replaceAll("SF_WORKCALENDARSHIFT","MFM_WORKCALENDARSHIFT");
        	s1=s1.replaceAll("TEST_CHEMICALANALYMANAGE","QAM_CHEMICALANALYMANAGE");
        	s1=s1.replaceAll("TB_MIG_LOG","CMD_MIG_LOG");
                s2.append(s1 + "\n");
                count++;
        }
        out.write(s2.toString());
        out.close();
        
//        System.out.println("s2 : "+s2.toString());
    }    
    */
}
