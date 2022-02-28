(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM01000M");
            this.set_titletext("최종검사 결과 조회");
            this.set_tooltiptext("MENU_PG-QC-0570");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_inspResultList", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONPROCESSDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTPROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"TOPPROCESSSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"MIDDLEPROCESSSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONUSER\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SPECOUTPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SPECOUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SPECOUTPERCENTAGE\" type=\"STRING\" size=\"256\"/><Column id=\"ISNCRPUBLISH\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TXNGROUPHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSRELNO\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONQTYPCS\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONQTYPNL\" type=\"STRING\" size=\"256\"/><Column id=\"FINISHINSPECTIONTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inspResultDetailList", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONPROCESSDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SPECOUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SPECOUTPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SPECOUTPERCENTAGE\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONPRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"FILERESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_SRC_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"JOINNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"TXNGROUPHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSRELNO\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","31",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","220","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MENU_PG-QC-0560");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_inspResultList","31.32%","0","120","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subTitle_list","0","0",null,"34","sta_cnt_ds_inspResultList:41.67%",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("최종검사 결과 조회 현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("FINALINSPECTIONRESULTINQUIRYMASTER");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_inspResultList","0","34",null,"42.71%","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_inspResultList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"60\"/><Column size=\"210\"/><Column size=\"60\"/><Column size=\"210\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"75\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" colspan=\"8\" text=\"제품정보\" cssclass=\"cell_headMaster\" tooltiptext=\"QCMLRRPRDINFOR\"/><Cell col=\"9\" colspan=\"5\" cssclass=\"cell_headMaster\" text=\"공정정보(발견공정)\" tooltiptext=\"QCMINSPECTPRCINFOR\"/><Cell col=\"14\" colspan=\"2\" text=\"검사수\" cssclass=\"cell_headMaster\" tooltiptext=\"QCMFINALINSPECTQTY\"/><Cell col=\"16\" colspan=\"3\" text=\"불량수\" cssclass=\"cell_headMaster\" tooltiptext=\"QCMFINALINSPECTSPECOUT\"/><Cell col=\"19\" rowspan=\"2\" tooltiptext=\"ISNCRPUBLISH\" text=\"NCR 발행여부\"/><Cell row=\"1\" col=\"1\" text=\"품목코드\" tooltiptext=\"PRODUCTDEFID\"/><Cell row=\"1\" col=\"2\" text=\"품목명\" tooltiptext=\"PRODUCTDEFNAME\"/><Cell row=\"1\" col=\"3\" text=\"REV\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell row=\"1\" col=\"4\" text=\"모 LOT\" tooltiptext=\"PARENTLOTID\"/><Cell row=\"1\" col=\"5\" text=\"차수\" tooltiptext=\"DEGREE\"/><Cell row=\"1\" col=\"6\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell row=\"1\" col=\"7\" text=\"PCS\" tooltiptext=\"WORKENDPCSQTY\"/><Cell row=\"1\" col=\"8\" text=\"PNL\" tooltiptext=\"WORKENDPANELQTY\"/><Cell row=\"1\" col=\"9\" text=\"처리일시\" tooltiptext=\"INSPECTIONPROCESSDATE\"/><Cell row=\"1\" col=\"10\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell row=\"1\" col=\"11\" text=\"작업장\" tooltiptext=\"AREANAME\"/><Cell row=\"1\" col=\"12\" text=\"검사구분\" tooltiptext=\"INSPECTIONDEFNAME\"/><Cell row=\"1\" col=\"13\" text=\"검사자명\" tooltiptext=\"INSPECTORNAME\"/><Cell row=\"1\" col=\"14\" text=\"PCS\" tooltiptext=\"INSPECTIONPCSQTY\"/><Cell row=\"1\" col=\"15\" text=\"PNL\" tooltiptext=\"INSPECTIONPNLQTY\"/><Cell row=\"1\" col=\"16\" text=\"불량수PCS\" tooltiptext=\"SPECOUTPCSQTY\"/><Cell row=\"1\" col=\"17\" text=\"불량수PNL\" tooltiptext=\"SPECOUTPNLQTY\"/><Cell row=\"1\" col=\"18\" text=\"불량율(%)\" tooltiptext=\"SPECOUTPERCENTAGE\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"4\" text=\"bind:PARENTLOTID\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:DEGREE\"/><Cell col=\"6\" text=\"bind:LOTID\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:WORKENDPCSQTY\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,###,##0\"/><Cell col=\"8\" text=\"bind:WORKENDPANELQTY\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,###,##0\"/><Cell col=\"9\" text=\"bind:INSPECTIONDATE\" displaytype=\"normal\"/><Cell col=\"10\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:FINISHINSPECTIONTYPE\" textAlign=\"left\" displaytype=\"combotext\" combocodecol=\"C,FinishInspectionType,,Y,N\"/><Cell col=\"13\" text=\"bind:INSPECTORNAME\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:INSPECTIONQTYPCS\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,###,##0\"/><Cell col=\"15\" text=\"bind:INSPECTIONQTYPNL\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,###,##0\"/><Cell col=\"16\" text=\"bind:SPECOUTQTYPCS\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,###,##0\"/><Cell col=\"17\" text=\"bind:SPECOUTQTYPNL\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,###,##0\"/><Cell col=\"18\" text=\"bind:SPECOUTQTYRATE\" displaytype=\"mask\" maskeditformat=\"#,##0.##\" textAlign=\"right\"/><Cell col=\"19\" text=\"bind:ISNCRPUBLISH\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\" maskeditformat=\"#,###,##0\" expr=\"dataset.getSum(&quot;WORKENDPCSQTY&quot;)\" displaytype=\"mask\"/><Cell col=\"8\" maskeditformat=\"#,###,##0\" expr=\"dataset.getSum(&quot;WORKENDPANELQTY&quot;)\" displaytype=\"mask\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\" maskeditformat=\"#,###,##0\" displaytype=\"mask\" expr=\"dataset.getSum(&quot;INSPECTIONQTYPCS&quot;)\"/><Cell col=\"15\" maskeditformat=\"#,###,##0\" displaytype=\"mask\" expr=\"dataset.getSum(&quot;INSPECTIONQTYPNL&quot;)\"/><Cell col=\"16\" maskeditformat=\"#,###,##0\" displaytype=\"mask\" expr=\"dataset.getSum(&quot;SPECOUTQTYPCS&quot;)\"/><Cell col=\"17\" maskeditformat=\"#,###,##0\" displaytype=\"mask\" expr=\"dataset.getSum(&quot;SPECOUTQTYPNL&quot;)\"/><Cell col=\"18\"/><Cell col=\"19\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_inspResultDetailList","31.32%","grd_inspResultList:0",null,"34","551",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subTitle_detail","0","grd_inspResultList:0",null,"34","sta_cnt_ds_inspResultDetailList:46.73%",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_text("상세현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("QCMINSPECTIONRESULTDETAIL");
            this.div_work.addChild(obj.name, obj);

            obj = new ImageViewer("img_photo",null,null,"430","33.71%","0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_cssclass("img_photo");
            obj.set_stretch("fit");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_file",null,"grd_inspResultList:0","430",null,"0","img_photo:5",null,null,null,null,this.div_work.form);
            obj.set_taborder("7");
            obj.set_url("common::com_file_down_b2.xfdl");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_inspResultList",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_inspResultDetailList",null,"grd_inspResultList:6","29","24","440",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridImport");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_inspResultDetailList","0","sta_subTitle_detail:0",null,null,"img_photo:10","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_inspResultDetailList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"200\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"210\"/><Column size=\"150\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"판정등급\" tooltiptext=\"DECISIONDEGREE\"/><Cell col=\"2\" rowspan=\"2\" text=\"불량코드 명\" tooltiptext=\"DEFECTCODENAME\"/><Cell col=\"3\" colspan=\"2\" text=\"검사수\" cssclass=\"cell_headMaster\" tooltiptext=\"QCMFINALINSPECTQTY\"/><Cell col=\"5\" colspan=\"2\" text=\"불량수\" cssclass=\"cell_headMaster\" tooltiptext=\"QCMFINALINSPECTSPECOUT\"/><Cell col=\"7\" rowspan=\"2\" text=\"불량율(%)\" tooltiptext=\"SPECOUTPERCENTAGE\"/><Cell col=\"8\" colspan=\"4\" text=\"원인공정\" cssclass=\"cell_headMaster\" tooltiptext=\"QCMFINALINSPECTREASON\"/><Cell row=\"1\" col=\"3\" text=\"PNL\" tooltiptext=\"INSPECTIONPNLQTY\"/><Cell row=\"1\" col=\"4\" text=\"PCS\" tooltiptext=\"INSPECTIONPCSQTY\"/><Cell row=\"1\" col=\"5\" text=\"PNL\" tooltiptext=\"SPECOUTPNLQTY\"/><Cell row=\"1\" col=\"6\" text=\"PCS\" tooltiptext=\"SPECOUTPCSQTY\"/><Cell row=\"1\" col=\"8\" text=\"원인품목명\" tooltiptext=\"REASONPRODUCTDEFNAME\"/><Cell row=\"1\" col=\"9\" text=\"원인 Lot ID\" tooltiptext=\"REASONCONSUMABLELOTID\"/><Cell row=\"1\" col=\"10\" text=\"원인공정명\" tooltiptext=\"REASONSEGMENTNAME\"/><Cell row=\"1\" col=\"11\" text=\"원인작업장명\" tooltiptext=\"REASONAREANAME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:DECISIONDEGREE\"/><Cell col=\"2\" text=\"bind:JOINNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:INSPECTIONQTYPNL\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"4\" text=\"bind:INSPECTIONQTYPCS\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"5\" text=\"bind:SPECOUTQTYPNL\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"6\" text=\"bind:SPECOUTQTYPCS\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"7\" text=\"bind:SPECOUTQTYRATE\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0.##\"/><Cell col=\"8\" text=\"bind:REASONSEGMENTNAME\"/><Cell col=\"9\" text=\"bind:REASONCONSUMABLELOTID\"/><Cell col=\"10\" text=\"bind:REASONSEGMENTNAME\"/><Cell col=\"11\" text=\"bind:REASONAREANAME\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tab1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("sta_site","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("14");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","225","102","36",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","225","146","36",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip00",null,"85","15","97","0",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("15");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip01","0","80","15","97",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("16");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("17");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"205","45","20","91",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("18");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","231","10","27",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("19");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_productdef","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("20");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTIONDEFINITION");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_cal","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("21");
            obj.set_text("처리기간");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PROCESSINGPERIOD");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_productDef","108","85",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("4");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_productDef",null,"85","22","20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_process","108","160",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("8");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_process",null,"160","22","20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_period","10","60","94","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("2");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("금일");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Calendar("cal_dateFrom","108","35",null,"20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210104");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Calendar("cal_dateTo","108","60",null,"20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210104");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_plantId","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("0");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_parentLotId","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("22");
            obj.set_text("모 Lot");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PARENTLOTID");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_lotId","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("23");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LOTID");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_process","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("24");
            obj.set_text("공정");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PROCESSCHANGETYPE");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("label07","0","185","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("25");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("AREA");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_area","108","185",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("10");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_area",null,"185","22","20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_parentLotId","108","110","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("6");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_lotId","108","135","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("7");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_productDef_id","126","380",null,"20","19",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("26");
            obj.set_visible("false");
            obj.set_tooltiptext("조회조건품목ID");
            obj.set_background("thistle");
            obj.set_enable("false");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_hidden2","25","379",null,"20","172",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("27");
            obj.set_text("품목Revision");
            obj.set_visible("false");
            obj.set_textAlign("right");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_area_id","126","355",null,"20","19",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("28");
            obj.set_visible("false");
            obj.set_tooltiptext("조회조건작업장ID");
            obj.set_background("thistle");
            obj.set_enable("false");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_hidden1","25","356",null,"20","172",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("29");
            obj.set_text("작업장ID");
            obj.set_visible("false");
            obj.set_textAlign("right");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_process_id","127","405",null,"20","18",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("30");
            obj.set_visible("false");
            obj.set_tooltiptext("조회조건공정ID");
            obj.set_background("thistle");
            obj.set_enable("false");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_hidden1_00","26","406",null,"20","171",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("31");
            obj.set_text("공정ID");
            obj.set_visible("false");
            obj.set_textAlign("right");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","290","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_file_down_b2.xfdl");
        };
        
        // User Script
        this.addIncludeScript("QAM01000M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("QAM01000M.xfdl","lib::lib_qam.xjs");
        this.registerScript("QAM01000M.xfdl", function() {
        /***************************************************************************************
         * 시스템명       : IFC MES시스템
         * 업무명         : 최종검사 결과조회(품질관리 - 자주/최종검사/품질규격)
         * 파일명         : QAM010000M.xfdl
         * 작성자         : 권혜영
         * 작성일         : 2021.05.04
         *
         * 설  명         :
         *---------------------------------------------------------------------------------------
         * 변경일        변경자      변경내역
         *---------------------------------------------------------------------------------------
         * 2021.05.04   권혜영   최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;    //기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_qam.xjs"); /*include "lib::lib_qam.xjs"*/;    //품질관리 공통 라이브러리 include
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.lang;
        this.userId;
        this.plantId;
        this.enterpriseId;
        this.dateFrom;
        this.dateTo;

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
            this.nfn_formInit(obj);
        	this.fn_setInitialFile(); //파일다운로드 폼 화면에 맞춰 변경
        	this.lang = this.gf_getLanguageType();
        	this.userId = this.gf_getUserId();
        	this.plantId = this.gf_getSiteType();
        	this.enterpriseId = this.gf_getEnterpriseId();
        	this.basfn_getPeriodData("ds_periodType"); //조회기간 변경에 따른 날짜 Dataset
        	this.qamfn_searchUserPlant("ds_userAuthorityPlantList", this.tab_search.Tab1.form.cbo_plantId); //접속사용자의 PLANT 조회
        	this.fn_formInit();    //최초 호출되는 초기화 함수
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 최종검사 결과조회
         */
        this.fn_search = function (obj, e)
        {
            this.ds_inspResultList.clearData();
        	this.ds_inspResultDetailList.clearData();
            this.ds_search.clearData();

        	var nRow = this.ds_search.addRow();
        	this.ds_search.setColumn(nRow, "LANGUAGETYPE",           this.lang);
        	this.ds_search.setColumn(nRow, "PLANTID",                this.tab_search.Tab1.form.cbo_plantId.value);
        	this.ds_search.setColumn(nRow, "PERIODFR",               this.tab_search.Tab1.form.cal_dateFrom.value);
        	this.ds_search.setColumn(nRow, "PERIODTO",               this.tab_search.Tab1.form.cal_dateTo.value);
        	this.ds_search.setColumn(nRow, "PRODUCTDEFID",           this.tab_search.Tab1.form.edt_productDef_id.value);
        	this.ds_search.setColumn(nRow, "PARENTLOTID",            this.tab_search.Tab1.form.edt_parentLotId.value);
        	this.ds_search.setColumn(nRow, "LOTID",                  this.tab_search.Tab1.form.edt_lotId.value);
        	this.ds_search.setColumn(nRow, "PROCESSSEGMENTID",       this.tab_search.Tab1.form.edt_process_id.value);
        	this.ds_search.setColumn(nRow, "AREAID",                 this.tab_search.Tab1.form.edt_area_id.value);
        	this.ds_search.setColumn(nRow, "USERID",                 this.userId);

            var sSvcID        = "selectFinalInspectionResultList";
            var sController   = "/qam01000/selectFinalInspectionResultList.do";
            var sInDatasets   = "INPUT=ds_search";
            var sOutDatasets  = "ds_inspResultList=output";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 최종검사 결과조회 상세
         */
        this.fn_searchInboundDefectLot = function(pDataset, pRow)
        {
            this.ds_inspResultDetailList.clearData();
            this.ds_search.clearData();
        	this.div_work.form.div_file.form.ds_file.clearData();

        	var nRow = this.ds_search.addRow();
        	this.ds_search.setColumn(nRow, "LANGUAGETYPE",           this.lang);
        	this.ds_search.setColumn(nRow, "PLANTID",                pDataset.getColumn(pRow, "PLANTID"));
        	this.ds_search.setColumn(nRow, "LOTID",             	 pDataset.getColumn(pRow, "LOTID"));
        	this.ds_search.setColumn(nRow, "TXNGROUPHISTKEY",        pDataset.getColumn(pRow, "TXNGROUPHISTKEY"));  //"HTTPD5AB4836460444B1A3073EBD1AEB6324"
        	this.ds_search.setColumn(nRow, "INSPECTIONDEFID",        pDataset.getColumn(pRow, "INSPECTIONDEFID"));
        	this.ds_search.setColumn(nRow, "PROCESSRELNO",           pDataset.getColumn(pRow, "PROCESSRELNO"));
        	this.ds_search.setColumn(nRow, "DEGREE",          		 pDataset.getColumn(pRow, "DEGREE"));

            var sSvcID        = "selectFinalInspectionResultDetailList";
            var sController   = "/qam01000/selectFinalInspectionResultDetailList.do";
            var sInDatasets   = "INPUT=ds_search";
            var sOutDatasets  = "ds_inspResultDetailList=output";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 원본파일 조회
         */
        this.fn_searchAttach = function(pSrcKey)
        {
            var divFile = this.div_work.form.div_file;
        	divFile.form.jobSysCd 		= "PCM";   //업무구분코드 CMD,BAS....
        	divFile.form.atchTyCd 		= "";
        	divFile.form.tableName 		= "QAM_INSPECTIONDEFECT";//테이블명
        	divFile.form.subDir  		= ""; //세부업무약어
        	divFile.form.atchSrcKey  	= pSrcKey; //CMD_ATCH_FILES_MPNGS.ATCH_SRC_KEY;
        	divFile.form.fn_search();
        };

        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
            if (errCD < 0)
            {
                this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
            }
            else
            {
        	    if (trId == "selectFinalInspectionResultList") {

        		} else if (trId == "selectFinalInspectionResultDetailList") {

        		}
            }
        };

        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
         this.fn_openPop = function(svcId, popId)
        {
            // gfn_openPopup(arg_type, popupCd, popupNm, rtnCols, paramCols, paramValues, searchStr);
            //-----------------
            // arg_type    : A::사용자가 선택, B:: 한건존재시 자동 셋팅, C::사용자 멀티 선택
            // popupCd     : 공통팝업 관리 화면에서 생성되는 팝업코드
            // popupNm     : 변경할팝업화면명 , 변경하지 않을 경우 팝업화면 타이틀은 관리화면의 타이틀로 지정됨
            // rtnCols     : 구분자 : "|"   : 그리드에 출력될 컬럼 지정 (않을 경우 관리화면의 그리드로 출력됨)
            // paramCols   : 구분자 : "|" : where 구문에 들어갈 컬럼
            // paramValues : 구분자 : "|"  : where 구문에 들어갈 컬럼에 대한 값
            // searchStr   : 팝업 조회조건 콤보값 = 조회 값

            var popupId = svcId;
            var oArg = {};
            var opts = "width=650,height=500";

            oArg.arg_type = "BA";
            oArg.arg_popupCd = popId;
            oArg.arg_popupNm = "";
            oArg.arg_paramCols = "";
            oArg.arg_paramValues = "";
            oArg.arg_searchStr = "";

            if(popupId == "SRCH_AREA217")    /*조회조건-작업장*/
            {
        		opts = "width=450,height=500";
        		oArg.arg_paramCols   = "PLANTID|USER_ID|LANGUAGETYPE";
                oArg.arg_paramValues = this.plantId +'|'+ this.userId + '|' + this.lang ;
                oArg.arg_rtnCols     = "AREAID|AREANAME";
        		oArg.arg_searchStr   = "AREAIDNAME=" + this.tab_search.Tab1.form.edt_area.value;
            }
        	else if(popupId == "SRCH_PRODUCTDEF218")    /*조회조건-품목*/
            {
        		oArg.arg_paramCols   = "PLANTID";
                oArg.arg_paramValues = this.plantId;
                oArg.arg_rtnCols     = "PRODUCTDEFIDVERSION|PRODUCTDEFNAME";
        		oArg.arg_searchStr   = "PRODUCTDEFIDNAME=" + this.tab_search.Tab1.form.edt_productDef.value;
            }
        	else if(popupId == "SRCH_PROCESS156")    /*조회조건-공정*/
            {
                opts = "width=650,height=500";
        		oArg.arg_type        = "BA";
        		oArg.arg_paramCols   = "P_POPTYPE|P_LANGUAGETYPE";
                oArg.arg_paramValues = "PROCESSSEGMENT|"+this.gf_getLanguageType();
                oArg.arg_rtnCols     = "PROCESSSEGMENTID|PROCESSSEGMENTNAME";
        		oArg.arg_searchStr   = "P_PROCESSSEGMENT=" + this.tab_search.Tab1.form.edt_process.value;
            }

            this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        };

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
            var rtn = this.fv_rtnValue;
            if(this.nfn_isNull(rtn)) return;

            if (sPopupId == "SRCH_AREA217")    /*조회조건-작업장*/
            {
                this.tab_search.Tab1.form.edt_area_id.set_value(rtn[0]);
        		this.tab_search.Tab1.form.edt_area.set_value(rtn[1]);
            }
        	else if (sPopupId == "SRCH_PRODUCTDEF218")    /*조회조건-품목*/
            {
                this.tab_search.Tab1.form.edt_productDef_id.set_value(rtn[0]);
        		this.tab_search.Tab1.form.edt_productDef.set_value(rtn[1]);
            }
        	else if(sPopupId == "SRCH_PROCESS156")    /*조회조건-공정*/
        	{
                this.tab_search.Tab1.form.edt_process_id.set_value(rtn[0]);
        		this.tab_search.Tab1.form.edt_process.set_value(rtn[1]);
            }
        };

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 기능 : 최초 호출되는 초기화 함수
         */
        this.fn_formInit = function ()
        {
        	this.tab_search.Tab1.form.cbo_period.set_value("THISDAY"); //금일
        	this.fn_setSearchDate("THISDAY");
        };

        /*
         * 기능 : 조회조건 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        	this.tab_search.Tab1.form.cbo_plantId.set_value(this.plantId);
        	this.fn_formInit();
        };

        /*
         * 기능 : 의뢰일자 셋팅
         */
        this.fn_setSearchDate = function (periodType)
        {
        	this.tab_search.Tab1.form.cal_dateFrom.set_value(this.ds_periodType.getColumn(0,periodType+"_S"));
         	this.tab_search.Tab1.form.cal_dateTo.set_value(this.ds_periodType.getColumn(0,periodType+"_E"));
        };


        /*
         * 사진 보여주기
         */
        this.fn_setImgUrl = function (obj, e)
        {
        	var objDataset = obj.getBindDataset();
        	var atchFileGuid = objDataset.getColumn(e.row, "ATCH_FILE_GUID");
        	var upUrl = nexacro.getEnvironment().services["svcurl"].url +"/comm/downImage/" + atchFileGuid + ".do";
        	this.div_work.form.img_photo.set_image("URL('"+ upUrl + "')");
        	this.div_work.form.img_photo.set_stretch('fixaspectratio'); //fit or fixaspectratio
        };

        /*
         * 기능 : 파일다운로드 폼 화면에 맞춰 변경
         */
        this.fn_setInitialFile = function ()
        {
        	this.div_work.form.div_file.form.grd_list.removeEventHandler("oncelldblclick", this.div_work.form.div_file.form.grd_list_oncelldblclick, this); //파일다운로드
        	this.div_work.form.div_file.form.sta_subTitle.set_text("파일");
        	this.div_work.form.div_file.form.btn_fileDownLoad.set_visible(false);
        	this.div_work.form.div_file.form.grd_list.addEventHandler("onselectchanged", this.fn_setImgUrl, this); //파일목록 선택시
        };

        /*
         * 기능 : 검색일자 변경시 검색구분을 [사용자지정]으로 변경
         */

        this.fn_changeCalendar = function() {
        	this.tab_search.Tab1.form.cbo_period.set_value("CUSTOM");
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         * 이벤트 : 조회조건 아이콘 버튼 클릭시
         */
        this.fn_popup_click = function(obj,e)
        {
        	if (obj.name == "btn_area")
        	{
        		this.fn_openPop("SRCH_AREA217","P00228"); //작업장
        	}
        	else if (obj.name == "btn_productDef")
        	{
        		this.fn_openPop("SRCH_PRODUCTDEF218","P00218"); //품목
        	}
        	else if (obj.name == "btn_process")
        	{
        		this.fn_openPop("SRCH_PROCESS156","P00156"); //공정
        	}
        };

        /*
         * 이벤트 : 의뢰일자 조건변경시
         */
        this.tab_search_Tab1_cbo_period_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != "CUSTOM")
        	{
        		this.fn_setSearchDate(e.postvalue);
        	}
        };

        /*
         * 이벤트 : 최종검사 결과조회를 클릭했을때 상세 조회
         */
        this.ds_inspResultList_onrowposchanged = function(obj,e)
        {
        	if (e.newrow < 0) return;
        	this.fn_searchInboundDefectLot(obj, e.newrow);
        };

        /*
         * 이벤트 : 최종검사 상세조회를 클릭했을때 파일 조회
         */
        this.ds_inspResultDetailList_canrowposchange = function(obj,e)
        {
            if (e.newrow < 0) return;
        	var srcKey =        obj.getColumn(e.newrow, "TXNHISTKEY")
        				+ "|" + obj.getColumn(e.newrow, "INSPECTIONCLASSID")
        			    + "|" + obj.getColumn(e.newrow, "LOTID")
        			    + "|" + obj.getColumn(e.newrow, "DEFECTCODE")
        				+ "|" + obj.getColumn(e.newrow, "PROCESSSEGMENTID");

        	//파일조회
            this.fn_searchAttach(srcKey);
        };

        /*
        * 이벤트 : 조회조건 이름 삭제시 id 초기화
        */
        this.fn_popup_canchange = function(obj,e)
        {
        	if (obj.name == "edt_area")
        	{
        		this.nfn_isNull(e.postvalue) == false ? "": this.tab_search.Tab1.form.edt_area_id.set_value("");
        	}
        	else if (obj.name == "edt_productDef")
        	{
        		this.nfn_isNull(e.postvalue) == false ? "": this.tab_search.Tab1.form.edt_productDef_id.set_value("");
        	}
        	else if (obj.name == "edt_process")
        	{
        		this.nfn_isNull(e.postvalue) == false ? "": this.tab_search.Tab1.form.edt_process_id.set_value("");
        	}
        };

        /*
        * 이벤트 : 날짜 component 변경 시 기간 -> 사용자지정으로 변경
        */
        this.tab_search_Tab1_cal_dateFrom_onchanged = function(obj,e)
        {
        	this.tab_search.Tab1.form.cbo_period.set_value("CUSTOM");
        };

        /*
        * 이벤트 : 날짜 component 변경 시 기간 -> 사용자지정으로 변경
        */
        this.tab_search_Tab1_cal_dateTo_onchanged = function(obj,e)
        {
        	this.tab_search.Tab1.form.cbo_period.set_value("CUSTOM");
        };

        /*
         * 이벤트 : 상세현황 Row 의 선택이 변경되어 DataSet 의 rowposition 속성값이 변경될 때 파일리스트 조회
         */
        this.ds_inspResultDetailList_onrowposchanged = function(obj,e)
        {
            if (e.newrow < 0) return;
        	var srcKey = obj.getColumn(e.newrow, "ATCH_SRC_KEY");
        	this.div_work.form.img_photo.set_image("");
            this.div_work.form.div_file.form.jobSysCd 	= "PCM";   //업무구분코드 CMD,BAS....
        	this.div_work.form.div_file.form.atchTyCd 	= "";
        	this.div_work.form.div_file.form.tableName 	= "QAM_INSPECTIONDEFECT";//테이블명
        	this.div_work.form.div_file.form.subDir  	= ""; //세부업무약어
        	this.div_work.form.div_file.form.atchSrcKey = srcKey; //CMD_ATCH_FILES_MPNGS.ATCH_SRC_KEY;
        	this.div_work.form.div_file.form.fn_search();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_help.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.grd_inspResultList.addEventHandler("onselectchanged",this.div_work_grd_inspResultList_onselectchanged,this);
            this.tab_search.Tab1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tab1.form.btn_productDef.addEventHandler("onclick",this.fn_popup_click,this);
            this.tab_search.Tab1.form.btn_process.addEventHandler("onclick",this.fn_popup_click,this);
            this.tab_search.Tab1.form.cbo_period.addEventHandler("onitemchanged",this.tab_search_Tab1_cbo_period_onitemchanged,this);
            this.tab_search.Tab1.form.cal_dateFrom.addEventHandler("onchanged",this.tab_search_Tab1_cal_dateFrom_onchanged,this);
            this.tab_search.Tab1.form.cal_dateTo.addEventHandler("onchanged",this.tab_search_Tab1_cal_dateTo_onchanged,this);
            this.tab_search.Tab1.form.btn_area.addEventHandler("onclick",this.fn_popup_click,this);
            this.ds_inspResultList.addEventHandler("onrowposchanged",this.ds_inspResultList_onrowposchanged,this);
            this.ds_inspResultDetailList.addEventHandler("onrowposchanged",this.ds_inspResultDetailList_onrowposchanged,this);
        };
        this.loadIncludeScript("QAM01000M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
