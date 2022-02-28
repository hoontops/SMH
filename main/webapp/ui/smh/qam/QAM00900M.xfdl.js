(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM00900M");
            this.set_titletext("자주/최종 NCR");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLOSE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"MIDDLEPROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"DECISIONDEGREE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_topProcessList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTPROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTPROCESSSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_middleProcessList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTPROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTPROCESSSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_abnormalOccurrenceList", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRNO\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"NCRISSUEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"STATENAME\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MIDDLEPROCESSSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TOPPROCESSSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILERESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTRATE\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONUSER\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLOSE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDATE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTUSER\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTWORKRESULTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"ISMODIFY\" type=\"STRING\" size=\"256\"/><Column id=\"AFFECTISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"CARREQUESTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CAREXPECTEDRECEIPTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","btn_reset:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","213","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            obj.set_tooltiptext("MENU_PG-QC-0580");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_abnormalOccurrenceList","31.32%","0","120","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subTitle_list","0","0",null,"34","sta_cnt_ds_abnormalOccurrenceList:41.67%",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("자주/최종 NCR");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MENU_PG-QC-0580");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_abnormalOccurrenceList","0","34",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_abnormalOccurrenceList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"60\"/><Column size=\"210\"/><Column size=\"210\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"210\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" rowspan=\"2\" text=\"NCR 발행일시\" tooltiptext=\"NCRISSUEDATE\"/><Cell col=\"3\" rowspan=\"2\" text=\"상태명\" tooltiptext=\"STATENAME\"/><Cell col=\"4\" colspan=\"6\" text=\"공정정보(발견정보)\" cssclass=\"cell_headMaster\" tooltiptext=\"PROCESSSEGMENTINFO\"/><Cell col=\"10\" colspan=\"8\" text=\"제품정보\" cssclass=\"cell_headMaster\" tooltiptext=\"PRODUCTINFO\"/><Cell col=\"18\" colspan=\"4\" text=\"불량정보\" cssclass=\"cell_headMaster\" tooltiptext=\"DEFECTINFO\"/><Cell col=\"22\" colspan=\"5\" text=\"원인정보\" cssclass=\"cell_headMaster\" tooltiptext=\"REASONINFO\"/><Cell col=\"27\" rowspan=\"2\" text=\"담당자\" tooltiptext=\"OWNER\"/><Cell col=\"28\" rowspan=\"2\" text=\"CAR 요청 일자\" tooltiptext=\"CARREQUESTDATE\"/><Cell col=\"29\" rowspan=\"2\" text=\"CAR 접수 예정 일자\" tooltiptext=\"CAREXPECTEDRECEIPTDATE\"/><Cell col=\"30\" rowspan=\"2\" text=\"CAR 접수 일자\" tooltiptext=\"CARRECEIPTDATE\"/><Cell col=\"31\" rowspan=\"2\" text=\"CAR 승인 일자\" tooltiptext=\"CARAPPROVALDATE\"/><Cell col=\"32\" rowspan=\"2\" text=\"CAR 유효성 평가 일자\" tooltiptext=\"CARCLOSEDATE\"/><Cell col=\"33\" rowspan=\"2\" text=\"마감여부\" tooltiptext=\"ISCLOSE\"/><Cell row=\"1\" col=\"4\" text=\"대공정명\" tooltiptext=\"TOPPROCESSSEGMENTCLASSNAME\"/><Cell row=\"1\" col=\"5\" text=\"중공정명\" tooltiptext=\"MIDDLEPROCESSSEGMENTCLASSNAME\"/><Cell row=\"1\" col=\"6\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell row=\"1\" col=\"7\" text=\"작업장\" tooltiptext=\"AREANAME\"/><Cell row=\"1\" col=\"8\" text=\"검사정의명\" tooltiptext=\"INSPECTIONDEFNAME\"/><Cell row=\"1\" col=\"9\" text=\"검사자\" tooltiptext=\"INSPECTIONUSER\"/><Cell row=\"1\" col=\"10\" text=\"품목코드\" tooltiptext=\"PRODUCTDEFID\"/><Cell row=\"1\" col=\"11\" text=\"품목명\" tooltiptext=\"PRODUCTNAME\"/><Cell row=\"1\" col=\"12\" text=\"Rev\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell row=\"1\" col=\"13\" text=\"모 Lot\" tooltiptext=\"PARENTLOTID\"/><Cell row=\"1\" col=\"14\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell row=\"1\" col=\"15\" text=\"차수\" tooltiptext=\"DEGREE\"/><Cell row=\"1\" col=\"16\" text=\"수량(PCS)\" tooltiptext=\"PCSQTY\"/><Cell row=\"1\" col=\"17\" text=\"수량(PNL)\" tooltiptext=\"PANELQTY\"/><Cell row=\"1\" col=\"18\" text=\"판정등급\" tooltiptext=\"DECISIONDEGREE\"/><Cell row=\"1\" col=\"19\" text=\"불량코드명\" tooltiptext=\"DEFECTCODENAME\"/><Cell row=\"1\" col=\"20\" text=\"불량수량\" tooltiptext=\"DEFECTQTY\"/><Cell row=\"1\" col=\"21\" text=\"불량율\" tooltiptext=\"DEFECTRATE\"/><Cell row=\"1\" col=\"22\" text=\"원인품목명\" tooltiptext=\"REASONPRODUCTDEFNAME\"/><Cell row=\"1\" col=\"23\" text=\"원인 품목 Rev\" tooltiptext=\"REASONCONSUMABLEDEFVERSION\"/><Cell row=\"1\" col=\"24\" text=\"원인 LOTID\" tooltiptext=\"REASONCONSUMABLELOTID\"/><Cell row=\"1\" col=\"25\" text=\"원인공정명\" tooltiptext=\"REASONSEGMENTNAME\"/><Cell row=\"1\" col=\"26\" text=\"원인작업장명\" tooltiptext=\"REASONAREANAME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"1\" text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"2\" text=\"bind:NCRISSUEDATE\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" displaytype=\"date\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"3\" text=\"bind:STATENAME\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"4\" text=\"bind:TOPPROCESSSEGMENTCLASSNAME\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"5\" text=\"bind:MIDDLEPROCESSSEGMENTCLASSNAME\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"6\" text=\"bind:PROCESSSEGMENTNAME\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"7\" text=\"bind:AREANAME\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"8\" text=\"bind:INSPECTIONDEFNAME\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"9\" text=\"bind:INSPECTIONUSER\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"10\" text=\"bind:PRODUCTDEFID\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"11\" text=\"bind:PRODUCTDEFNAME\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"12\" text=\"bind:PRODUCTDEFVERSION\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"13\" text=\"bind:PARENTLOTID\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"14\" text=\"bind:LOTID\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"15\" text=\"bind:DEGREE\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"16\" text=\"bind:PCSQTY\" displaytype=\"mask\" maskeditformat=\"#,###,##0\" textAlign=\"right\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"17\" text=\"bind:PANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,##0\" textAlign=\"right\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"18\" text=\"bind:DECISIONDEGREE\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"19\" text=\"bind:JOINNAME\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\" textAlign=\"left\"/><Cell col=\"20\" text=\"bind:DEFECTQTY\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,###,##0\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"21\" text=\"bind:DEFECTRATE\" textAlign=\"right\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"22\" text=\"bind:REASONCONSUMABLEDEFNAME\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"23\" text=\"bind:REASONCONSUMABLEDEFVERSION\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"24\" text=\"bind:REASONCONSUMABLELOTID\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"25\" text=\"bind:REASONSEGMENTNAME\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"26\" text=\"bind:REASONAREANAME\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"27\" text=\"bind:CHARGERNAME\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"28\" text=\"bind:CARREQUESTDATE\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" displaytype=\"date\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"29\" text=\"bind:CAREXPECTEDRECEIPTDATE\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" displaytype=\"date\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"30\" text=\"bind:RECEIPTDATE\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" displaytype=\"date\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"31\" text=\"bind:APPROVALDATE\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" displaytype=\"date\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"32\" text=\"bind:CLOSEDATE\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" displaytype=\"date\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"33\" text=\"bind:ISCLOSE\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_abnormalOccurrenceList",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tab1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Edit("edt_lotId","108","110","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("6");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_topProcess","108","160","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("9");
            obj.set_codecolumn("PROCESSSEGMENTCLASSID");
            obj.set_datacolumn("PROCESSSEGMENTCLASSNAME");
            obj.set_innerdataset("ds_topProcessList");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_site","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("23");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("SITE");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_productdef","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("24");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTIONDEFINITION");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","400","102","36",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("22");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","400","146","36",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("25");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"380","45","20","91",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("26");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","406","10","27",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("27");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_lotId","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("28");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LOTID");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_cal","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("29");
            obj.set_text("발행기간");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ISSUEPERIOD");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_productDef","108","135",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("4");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_productDef",null,"135","22","20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_period","10","60","94","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("2");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Calendar("cal_dateFrom","108","35",null,"20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Calendar("cal_dateTo","108","60",null,"20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_plantId","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("0");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_area","0","235","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("30");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("AREA");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta__topProcess","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("31");
            obj.set_text("대공정");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("TOPPROCESSSEGMENTCLASS");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_middleProcess","0","185","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("32");
            obj.set_text("중공정");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("MIDDLEPROCESSSEGMENT");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_process","0","210","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("33");
            obj.set_text("공정");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PROCESSSEGMENT");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_area","108","235",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("7");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_area",null,"235","22","20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_middleProcess","108","185","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("10");
            obj.set_codecolumn("PROCESSSEGMENTCLASSID");
            obj.set_datacolumn("PROCESSSEGMENTCLASSNAME");
            obj.set_innerdataset("ds_middleProcessList");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_selfFinishInspectionType","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("34");
            obj.set_text("검사구분");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("FINISHINSPECTIONTYPE");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_decisionDegree","0","260","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("35");
            obj.set_text("불량등급");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("DEFECTGRADE");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_defectCodeName","0","285","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("36");
            obj.set_text("불량코드 명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("DEFECTCODENAME");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_reasonarea","0","310","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("37");
            obj.set_text("원인작업장명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("REASONAREANAME");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_process",null,"210","22","20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_process","108","210",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("11");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_selfFinishInspectionType","108","85","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("13");
            obj.set_codecolumn("C,SelfFinishInspectionType,,Y,Y");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_progressStatus","0","335","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("38");
            obj.set_text("처리현황");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PROGRESSSTATUS");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_isClose","0","360","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("39");
            obj.set_text("마감여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ISCLOSE");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_decisionDegree","108","260","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("14");
            obj.set_codecolumn("C,DecisionDegree,ALL,Y,Y");
            obj.set_text("cmb_05");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_defectCode","108","285",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("15");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_defectCode",null,"285","22","20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_reasonarea","108","310",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("17");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_reasonarea",null,"310","22","20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_state","108","335","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("19");
            obj.set_codecolumn("C,CARProgressStatus,ALL,Y,Y");
            obj.set_text("cmb_06");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_isClose","108","360","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("20");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            obj.set_text("cmb_07");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_productDef_id","108","445","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("40");
            obj.set_background("thistle");
            obj.set_tooltiptext("조회조건품목ID");
            obj.set_visible("false");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("label02_00","0","444","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("41");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_label");
            obj.set_visible("false");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("label04_01","0","488","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("42");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_visible("false");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_area_id","108","489","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("43");
            obj.set_background("thistle");
            obj.set_visible("false");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("label07_01","0","467","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("44");
            obj.set_text("공정");
            obj.set_cssclass("sta_WF_label");
            obj.set_visible("false");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_process_id","108","467","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("45");
            obj.set_background("thistle");
            obj.set_visible("false");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("label06_00_01","0","510","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("46");
            obj.set_text("불량코드명");
            obj.set_cssclass("sta_WF_label");
            obj.set_visible("false");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_defectCode_id","108","511","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("47");
            obj.set_background("thistle");
            obj.set_visible("false");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("label07_00_01","0","532","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("48");
            obj.set_text("원인작업장명");
            obj.set_cssclass("sta_WF_label");
            obj.set_visible("false");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_reasonarea_id","108","533","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("49");
            obj.set_background("thistle");
            obj.set_visible("false");
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

        };
        
        // User Script
        this.addIncludeScript("QAM00900M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("QAM00900M.xfdl","lib::lib_qam.xjs");
        this.registerScript("QAM00900M.xfdl", function() {
        /***************************************************************************************
         * 시스템명       : IFC MES시스템
         * 업무명         : 공정검사 NCR(품질관리 - 자주/최종검사/품질규격)
         * 파일명         : QAM009000M.xfdl
         * 작성자         : yanghee.kim
         * 작성일         : 2021.05.04
         *
         * 설  명         :
         *---------------------------------------------------------------------------------------
         * 변경일        변경자      변경내역
         *---------------------------------------------------------------------------------------
         * 2021.05.04   yanghee.kim   최초작성
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

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
            this.nfn_formInit(obj);
        	this.lang = this.gf_getLanguageType();
        	this.userId = this.gf_getUserId();
        	this.plantId = this.gf_getSiteType();
        	this.enterpriseId = this.gf_getEnterpriseId();
        	this.basfn_getPeriodData("ds_periodType"); //조회기간 변경에 따른 날짜 Dataset
        	this.qamfn_searchUserPlant("ds_userAuthorityPlantList", this.tab_search.Tab1.form.cbo_plantId); //접속사용자의 PLANT 조회
        	this.fn_searchProcessSegment (); //대공정, 중공정 조회
        	this.fn_formInit();    //최초 호출되는 초기화 함수
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 공정검사 NCR조회
         */
        this.fn_search = function (obj, e)
        {
            var dateFrom = this.tab_search.Tab1.form.cal_dateFrom.value + this.qam_jobStartTime;
        	var dateTo = this.tab_search.Tab1.form.cal_dateTo.value + this.qam_jobEndTime;

            this.ds_abnormalOccurrenceList.clearData();
        	this.ds_search.clearData();
        	var nRow = this.ds_search.addRow();
        	this.ds_search.setColumn(nRow, "ENTERPRISEID",                 this.enterpriseId);
        	this.ds_search.setColumn(nRow, "PLANTID",                      this.plantId);
        	this.ds_search.setColumn(nRow, "LANGUAGETYPE",                 this.lang);
        	this.ds_search.setColumn(nRow, "USERID",                       this.userId);
        	this.ds_search.setColumn(nRow, "PERIODFR",                     dateFrom); //발행기간
        	this.ds_search.setColumn(nRow, "PERIODTO",                     dateTo); //발행기간
            this.ds_search.setColumn(nRow, "ABNOCRTYPE",                   this.tab_search.Tab1.form.cbo_selfFinishInspectionType.value); //검사구분
            this.ds_search.setColumn(nRow, "LOTID",                        this.tab_search.Tab1.form.edt_lotId.value);	//LotID
        	this.ds_search.setColumn(nRow, "PRODUCTDEFID",                 this.tab_search.Tab1.form.edt_productDef_id.value); //품목
        	this.ds_search.setColumn(nRow, "PROCESSSEGMENTCLASSID",        this.tab_search.Tab1.form.cbo_topProcess.value);//대공정
        	this.ds_search.setColumn(nRow, "MIDDLEPROCESSSEGMENTCLASSID",  this.tab_search.Tab1.form.cbo_middleProcess.value);//중공정
        	this.ds_search.setColumn(nRow, "PROCESSSEGMENTID",             this.tab_search.Tab1.form.edt_process_id.value);//공정
        	this.ds_search.setColumn(nRow, "AREAID",                       this.tab_search.Tab1.form.edt_area_id.value);//작업장
        	this.ds_search.setColumn(nRow, "DECISIONDEGREE",               this.tab_search.Tab1.form.cbo_decisionDegree.value);//불량등급
        	this.ds_search.setColumn(nRow, "DEFECTCODE",                   this.tab_search.Tab1.form.edt_defectCode_id.value); //불량코드
        	this.ds_search.setColumn(nRow, "REASONAREAID",                 this.tab_search.Tab1.form.edt_reasonarea_id.value);//원인작업장
        	this.ds_search.setColumn(nRow, "STATE",                        this.tab_search.Tab1.form.cbo_state.value); //처리현황
        	this.ds_search.setColumn(nRow, "ISCLOSE",                      this.tab_search.Tab1.form.cbo_isClose.value); //마감여부

            var sSvcID        = "selectAbnormalOccurrenceList";
            var sController   = "/qam00900/selectAbnormalOccurrenceList.do";
            var sInDatasets   = "INPUT=ds_search";
            var sOutDatasets  = "ds_abnormalOccurrenceList=output";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
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
        	    if (trId == "selectAbnormalOccurrenceList")
                {
        			if (this.ds_abnormalOccurrenceList.rowcount  < 1)
        			{
        				this.gfn_Message("NoSelectData", null, "info", "ok");
        				return;
        			}
        			else
        			{
        			}
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

            if(popupId == "SRCH_PRODUCTDEF218")    /*조회조건-품목*/
            {
        		oArg.arg_type        = "CA";
        		oArg.arg_paramCols   = "PLANTID";
                oArg.arg_paramValues = this.plantId;
                oArg.arg_rtnCols     = "PRODUCTDEFID|PRODUCTDEFNAME";
        		oArg.arg_searchStr   = "PRODUCTDEFIDNAME=" + this.tab_search.Tab1.form.edt_productDef.value;
            }
        	else if(popupId == "SRCH_PROCESS156")    /*조회조건-공정*/
            {
                opts = "width=650,height=500";

        		oArg.arg_paramCols   = "P_POPTYPE|P_LANGUAGETYPE";
                oArg.arg_paramValues = "PROCESSSEGMENT|"+this.gf_getLanguageType();
                oArg.arg_rtnCols     = "PROCESSSEGMENTID|PROCESSSEGMENTNAME";

        		var topProcess, middleProcess;
        		if (!this.nfn_isNull(this.tab_search.Tab1.form.cbo_topProcess.value))
        		{
        			 topProcess = this.tab_search.Tab1.form.cbo_topProcess.value;
        			 oArg.arg_paramCols += "|P_PROCESSSEGMENTCLASSID_TOP";
        			 oArg.arg_paramValues += "|"+ topProcess;
        		}

        		oArg.arg_searchStr   = "P_PROCESSSEGMENTCLASSID_MIDDLE="+ this.tab_search.Tab1.form.cbo_middleProcess.value +"|"+"P_PROCESSSEGMENT=" + this.tab_search.Tab1.form.edt_process.value;
            }
        	else if(popupId == "SRCH_AREA228")    /*조회조건-작업장*/
            {
                opts = "width=450,height=500";
        		oArg.arg_paramCols   = "PLANTID|USER_ID|LANGUAGETYPE";
                oArg.arg_paramValues = this.plantId +'|'+ this.userId + '|' + this.lang ;
                oArg.arg_rtnCols     = "AREAID|AREANAME";
        		oArg.arg_searchStr   = "AREAIDNAME=" + this.tab_search.Tab1.form.edt_area.value;
            }
        	else if(popupId == "SRCH_DEFECT230")    /*조회조건-불량코드*/
            {
                opts = "width=490,height=500";
        		oArg.arg_paramCols   = "LANGUAGETYPE";
        		oArg.arg_paramValues = this.gf_getLanguageType();
                oArg.arg_rtnCols     = "JOINCODE|JOINNAME|DEFECTCODE|QCSEGMENTID";
        		oArg.arg_searchStr   = "DEFECTCODENAME=" + this.tab_search.Tab1.form.edt_defectCode.value;
            }
        	else if(popupId == "SRCH_REASONAREA262")    /*조회조건-원인작업장*/
            {
                opts = "width=450,height=500";
        		oArg.arg_paramCols   = "VERSION|LANGUAGETYPE";
                oArg.arg_paramValues = "10003|" + this.lang ;
                oArg.arg_rtnCols     = "AREAID|AREANAME";
        		oArg.arg_searchStr   = "TXTAREA=" + this.tab_search.Tab1.form.edt_reasonarea.value;
            }
            this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        };

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
            var rtn = this.fv_rtnValue;
            if(this.nfn_isNull(rtn)) return;

            if (sPopupId == "SRCH_PRODUCTDEF218")    /*조회조건-품목*/
            {
        		var arrProductdefId      = "";
        		var arrProductdefNM      = "";
        		var arrProductdefVersion = "";

        		for(var i=0; i<rtn.length; i++){
        			var colArray = rtn[i];
        			if (i > 0)
        			{
        				arrProductdefId      += ",";
        				arrProductdefNM      += ",";
        			}
        			arrProductdefId      += colArray[0];
        			arrProductdefNM      += colArray[1];
        		}

                this.tab_search.Tab1.form.edt_productDef_id.set_value(arrProductdefId);
        		this.tab_search.Tab1.form.edt_productDef.set_value(arrProductdefNM);
            }
        	else if(sPopupId == "SRCH_PROCESS156")    /*조회조건-공정*/
        	{
                this.tab_search.Tab1.form.edt_process_id.set_value(rtn[0]);
        		this.tab_search.Tab1.form.edt_process.set_value(rtn[1]);
            }
        	else if (sPopupId == "SRCH_AREA228")    /*조회조건-작업장*/
            {
                this.tab_search.Tab1.form.edt_area_id.set_value(rtn[0]);
        		this.tab_search.Tab1.form.edt_area.set_value(rtn[1]);
            }
        	else if(sPopupId == "SRCH_DEFECT230")    /*조회조건-불량코드*/
        	{
                this.tab_search.Tab1.form.edt_defectCode_id.set_value(rtn[0]);
        		this.tab_search.Tab1.form.edt_defectCode.set_value(rtn[1]);
            }
        	else if (sPopupId == "SRCH_REASONAREA262")    /*조회조건-원인작업장*/
            {
                this.tab_search.Tab1.form.edt_reasonarea_id.set_value(rtn[0]);
        		this.tab_search.Tab1.form.edt_reasonarea.set_value(rtn[1]);
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
        	this.tab_search.Tab1.form.cbo_selfFinishInspectionType.set_value("SelfInspectionTake"); //검사구분 자주(입고)
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
         * 기능 : 일자 셋팅
         */
        this.fn_setSearchDate = function (periodType)
        {
        	this.tab_search.Tab1.form.cal_dateFrom.set_value(this.ds_periodType.getColumn(0,periodType+"_S"));
         	this.tab_search.Tab1.form.cal_dateTo.set_value(this.ds_periodType.getColumn(0,periodType+"_E"));
        };

        /*
         * 기능 : 조회조건 대공정,중공정 조회
         */
        this.fn_searchProcessSegment = function ()
        {
            this.ds_topProcessList.clearData();
        	this.ds_middleProcessList.clearData();
            var sSvcID        = "selectTwoProcessSegmentClassList";
            var sController   = "/qampopup/selectTwoProcessSegmentClassList.do";
            var sInDatasets   = "";
            var sOutDatasets  = "ds_topProcessList=output1 ds_middleProcessList=output2";
            var sArgs         = "";
        	    sArgs        += this.gfn_setParam("LANGUAGETYPE",  this.lang); //
        		sArgs        += this.gfn_setParam("PLANTID",       this.plantId); //
        		sArgs        += this.gfn_setParam("CMB_TYPE",      "ALL");
        		sArgs        += this.gfn_setParam("VALIDSTATE",    "Valid");
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         * 이벤트 : 조회조건 아이콘 버튼 클릭시
         */
        this.fn_popup_click = function(obj,e)
        {
        	if (obj.name == "btn_productDef") //품목
        	{
        		this.fn_openPop("SRCH_PRODUCTDEF218","P00218");
        	}
        	else if (obj.name == "btn_process") //공정
        	{
        		this.fn_openPop("SRCH_PROCESS156","P00156");
        	}
        	else if (obj.name == "btn_area")  //작업장
        	{
        		this.fn_openPop("SRCH_AREA228","P00228");
        	}
        	else if (obj.name == "btn_defectCode") //불량코드
        	{
        		this.fn_openPop("SRCH_DEFECT230","P00230");
        	}
        	else if (obj.name == "btn_reasonarea") //원인작업장
        	{
        		this.fn_openPop("SRCH_REASONAREA262","P00262");
        	}
        };

        /*
         * 이벤트 : 조회조건 이름 삭제시 id 초기화
         */
        this.fn_popup_canchange = function(obj,e)
        {
        	if (obj.name == "edt_productDef") //품목
        	{
        		this.nfn_isNull(e.postvalue) == false ? "": this.tab_search.Tab1.form.edt_productDef_id.set_value("");
        	}
        	else if (obj.name == "edt_process") //공정
        	{
        		this.nfn_isNull(e.postvalue) == false ? "": this.tab_search.Tab1.form.edt_process_id.set_value("");
        	}
        	else if (obj.name == "edt_area") //작업장
        	{
        		this.nfn_isNull(e.postvalue) == false ? "": this.tab_search.Tab1.form.edt_area_id.set_value("");
        	}
        	else if (obj.name == "edt_defectCode") //불량코드
        	{
        		this.nfn_isNull(e.postvalue) == false ? "": this.tab_search.Tab1.form.edt_defectCode_id.set_value("");
        	}
        	else if (obj.name == "edt_reasonarea") //원인작업장
        	{
        		this.nfn_isNull(e.postvalue) == false ? "": this.tab_search.Tab1.form.edt_reasonarea_id.set_value("");
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
         * 이벤트 : 의뢰일자 변경시
         */
        this.fn_preiodChang = function(obj,e)
        {
        	this.tab_search.Tab1.form.cbo_period.set_value("CUSTOM");
        };

        /*
         * 이벤트 : 공정검사 NCR 더블클릭시 팝업호출
         */
        this.div_work_grd_abnormalOccurrenceList_oncelldblclick = function(obj,e)
        {
         	var popupId = "SEARCH_NCR";
        	var oArg = {};

            if (e.row > -1) {
        	    oArg.datasetNm = obj.getBindDataset().name;
        		oArg.rowPos = e.row;
        	}
        	this.gfn_openPopup(popupId,"qam::QAM00900P1.xfdl",oArg,"width=1400,height=800");
        };

        /*
         *	이벤트 : 조회조건 대공정 아이템을 변경할 때 발생하는 이벤트입니다.
         */
        this.tab_search_Tab1_cbo_topProcess_canitemchange = function(obj,e)
        {
        	if (this.nfn_isNull(e.postvalue))
        	{
        		this.ds_middleProcessList.filter("");
        	}
        	else
        	{
        		this.ds_middleProcessList.filter("");
        		//var chkValue = this.nfn_isNull(PARENTPROCESSSEGMENTCLASSID);
        		this.ds_middleProcessList.filter("PARENTPROCESSSEGMENTCLASSID == '" + e.postvalue + "' || SEQ == '1'");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.grd_abnormalOccurrenceList.addEventHandler("oncelldblclick",this.div_work_grd_abnormalOccurrenceList_oncelldblclick,this);
            this.tab_search.Tab1.form.cbo_topProcess.addEventHandler("canitemchange",this.tab_search_Tab1_cbo_topProcess_canitemchange,this);
            this.tab_search.Tab1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tab1.form.btn_productDef.addEventHandler("onclick",this.fn_popup_click,this);
            this.tab_search.Tab1.form.cbo_period.addEventHandler("onitemchanged",this.tab_search_Tab1_cbo_period_onitemchanged,this);
            this.tab_search.Tab1.form.cal_dateFrom.addEventHandler("onchanged",this.fn_preiodChang,this);
            this.tab_search.Tab1.form.cal_dateTo.addEventHandler("onchanged",this.fn_preiodChang,this);
            this.tab_search.Tab1.form.btn_area.addEventHandler("onclick",this.fn_popup_click,this);
            this.tab_search.Tab1.form.btn_process.addEventHandler("onclick",this.fn_popup_click,this);
            this.tab_search.Tab1.form.btn_defectCode.addEventHandler("onclick",this.fn_popup_click,this);
            this.tab_search.Tab1.form.btn_reasonarea.addEventHandler("onclick",this.fn_popup_click,this);
        };
        this.loadIncludeScript("QAM00900M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
