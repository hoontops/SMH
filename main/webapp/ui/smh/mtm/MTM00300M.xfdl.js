(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MTM00300M");
            this.set_titletext("자재불출요청");
            this.set_tooltiptext("MENU_PG-SG-0720");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_mtmMtrOutFlowRequestList", this);
            obj._setContents("<ColumnInfo><Column id=\"CSMREQUESTNO\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CSMREQUESTUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSENAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"CSMREQUESTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CSMREQUESTSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"MATREMARK\" type=\"STRING\" size=\"256\"/><Column id=\"DEMAND\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mtmMtrOutFlowRequest", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTNO\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"MATREMARK\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSENAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DEMAND\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SITE\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE_S\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE_E\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABELDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Process", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSNAME_MIDDLE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSNAME_TOP\" type=\"STRING\" size=\"256\"/><Column id=\"P_PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_processSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mtmMtrOutFlowRequestHeader", this);
            obj._setContents("<ColumnInfo><Column id=\"REQUESTNO\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSENAME\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTUSERID\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORSPOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDEPARTMENT\" type=\"STRING\" size=\"256\"/><Column id=\"DEMAND\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_report", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_result", this);
            obj._setContents("<ColumnInfo><Column id=\"REQUESTNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Button("btn_print",null,"16","26","24","btn_reset:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_print");
            obj.set_tooltiptext("Toolbar_Print");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","btn_print:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","117","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_text("자재 현황 조회");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
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

            obj = new Button("btn_save",null,"16","26","24","73",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("8");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","0","0","140","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("자재불출요청목록");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MATERIALSTATUSSTATISTICSLIST");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_requestInfo","-8","273",null,"90","8",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_text("div_00");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_mtrVer","0","5","70","20",null,null,null,null,null,null,this.div_work.form.div_requestInfo.form);
            obj.set_taborder("15");
            obj.set_text("요청번호");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("E300603C6F28477A8A504EACCC1B7542");
            obj.set_textAlign("right");
            this.div_work.form.div_requestInfo.addChild(obj.name, obj);

            obj = new Edit("edt_requestNo","sta_mtrVer:12","5","143","20",null,null,null,null,null,null,this.div_work.form.div_requestInfo.form);
            obj.set_taborder("0");
            obj.set_enable("false");
            this.div_work.form.div_requestInfo.addChild(obj.name, obj);

            obj = new Static("sta_areaid","211","5","70","20",null,null,null,null,null,null,this.div_work.form.div_requestInfo.form);
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("1");
            obj.set_textAlign("right");
            this.div_work.form.div_requestInfo.addChild(obj.name, obj);

            obj = new Edit("edt_areaId","edt_requestNo:60","5","143","20",null,null,null,null,null,null,this.div_work.form.div_requestInfo.form);
            obj.set_taborder("2");
            this.div_work.form.div_requestInfo.addChild(obj.name, obj);

            obj = new Button("btn_areaId","edt_areaId:0","5","22","20",null,null,null,null,null,null,this.div_work.form.div_requestInfo.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.div_requestInfo.addChild(obj.name, obj);

            obj = new Static("sta_mtrVer00","0","30","70","20",null,null,null,null,null,null,this.div_work.form.div_requestInfo.form);
            obj.set_taborder("14");
            obj.set_text("요청유형");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("E300603C6F28477A8A504EACCC1B7542");
            obj.set_textAlign("right");
            this.div_work.form.div_requestInfo.addChild(obj.name, obj);

            obj = new Combo("cmb_requestType","sta_mtrVer00:12","30","143","20",null,null,null,null,null,null,this.div_work.form.div_requestInfo.form);
            obj.set_taborder("4");
            this.div_work.form.div_requestInfo.addChild(obj.name, obj);

            obj = new Static("sta_areaid00","211","30","70","20",null,null,null,null,null,null,this.div_work.form.div_requestInfo.form);
            obj.set_text("창고 No.");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("5");
            obj.set_textAlign("right");
            this.div_work.form.div_requestInfo.addChild(obj.name, obj);

            obj = new Edit("edt_wareHouseId","cmb_requestType:60","30","143","20",null,null,null,null,null,null,this.div_work.form.div_requestInfo.form);
            obj.set_taborder("6");
            obj.set_enable("false");
            this.div_work.form.div_requestInfo.addChild(obj.name, obj);

            obj = new Static("sta_mtrVer02","448","30","70","20",null,null,null,null,null,null,this.div_work.form.div_requestInfo.form);
            obj.set_taborder("8");
            obj.set_text("창고명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("E300603C6F28477A8A504EACCC1B7542");
            obj.set_textAlign("right");
            this.div_work.form.div_requestInfo.addChild(obj.name, obj);

            obj = new Edit("edt_wareHouseName","sta_mtrVer02:3","30","143","20",null,null,null,null,null,null,this.div_work.form.div_requestInfo.form);
            obj.set_taborder("7");
            obj.set_enable("false");
            this.div_work.form.div_requestInfo.addChild(obj.name, obj);

            obj = new Static("sta_mtrVer02_00","btn_areaId:-2","5","70","20",null,null,null,null,null,null,this.div_work.form.div_requestInfo.form);
            obj.set_taborder("10");
            obj.set_text("요청자");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("E300603C6F28477A8A504EACCC1B7542");
            obj.set_textAlign("right");
            this.div_work.form.div_requestInfo.addChild(obj.name, obj);

            obj = new Edit("edt_requestName","sta_mtrVer02_00:3","5","143","20",null,null,null,null,null,null,this.div_work.form.div_requestInfo.form);
            obj.set_taborder("9");
            obj.set_enable("false");
            this.div_work.form.div_requestInfo.addChild(obj.name, obj);

            obj = new Static("sta_mtrVer02_01","edt_wareHouseName:4","5","70","20",null,null,null,null,null,null,this.div_work.form.div_requestInfo.form);
            obj.set_taborder("11");
            obj.set_text("거래처");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("E300603C6F28477A8A504EACCC1B7542");
            obj.set_textAlign("right");
            this.div_work.form.div_requestInfo.addChild(obj.name, obj);

            obj = new Edit("edt_customerId","sta_mtrVer02_01:5","5","143","20",null,null,null,null,null,null,this.div_work.form.div_requestInfo.form);
            obj.set_taborder("12");
            obj.set_enable("false");
            this.div_work.form.div_requestInfo.addChild(obj.name, obj);

            obj = new Static("sta_mtrVer01","0","55","70","20",null,null,null,null,null,null,this.div_work.form.div_requestInfo.form);
            obj.set_taborder("13");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("E300603C6F28477A8A504EACCC1B7542");
            obj.set_textAlign("right");
            this.div_work.form.div_requestInfo.addChild(obj.name, obj);

            obj = new Edit("edt_remark","sta_mtrVer01:12","55","813","20",null,null,null,null,null,null,this.div_work.form.div_requestInfo.form);
            obj.set_taborder("16");
            this.div_work.form.div_requestInfo.addChild(obj.name, obj);

            obj = new Button("btn_customerId","edt_customerId:0","5","22","20",null,null,null,null,null,null,this.div_work.form.div_requestInfo.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_finder");
            obj.set_enable("false");
            obj.set_visible("false");
            this.div_work.form.div_requestInfo.addChild(obj.name, obj);

            obj = new Grid("grd_mtmMtrOutFlowRequestList","0","34",null,null,"0","div_requestInfo:39",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_mtmMtrOutFlowRequestList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"요청번호\" tooltiptext=\"CSMREQUESTNO\"/><Cell col=\"2\" text=\"요청일시\" tooltiptext=\"REQUESTDATE\"/><Cell col=\"3\" text=\"요청자명\" tooltiptext=\"CSMREQUESTUSERNAME\"/><Cell col=\"4\" text=\"창고명\" tooltiptext=\"WAREHOUSENAME\"/><Cell col=\"5\" text=\"작업장\" tooltiptext=\"AREANAME\"/><Cell col=\"6\" text=\"요청유형\" tooltiptext=\"CSMREQUESTTYPE\"/><Cell col=\"7\" text=\"순번\" tooltiptext=\"CSMREQUESTSEQUENCE\"/><Cell col=\"8\" text=\"자재No.\" tooltiptext=\"CONSUMABLEDEFID\"/><Cell col=\"9\" text=\"자재 Ver\" tooltiptext=\"CONSUMABLEDEFNAME\"/><Cell col=\"10\" text=\"자재명\" tooltiptext=\"CONSUMABLEDEFNAME\"/><Cell col=\"11\" text=\"수량\" tooltiptext=\"QTY\"/><Cell col=\"12\" tooltiptext=\"UNIT\" text=\"단위\"/><Cell col=\"13\" text=\"비고\" tooltiptext=\"MATREMARK\"/><Cell col=\"14\" text=\"요청ID\" displaytype=\"none\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:CSMREQUESTNO\"/><Cell col=\"2\" text=\"bind:REQUESTDATE\"/><Cell col=\"3\" text=\"bind:CSMREQUESTUSERNAME\"/><Cell col=\"4\" text=\"bind:WAREHOUSENAME\"/><Cell col=\"5\" text=\"bind:AREANAME\"/><Cell col=\"6\" text=\"bind:CSMREQUESTTYPE\"/><Cell col=\"7\" text=\"bind:CSMREQUESTSEQUENCE\"/><Cell col=\"8\" text=\"bind:CONSUMABLEDEFID\"/><Cell col=\"9\" text=\"bind:CONSUMABLEDEFVERSION\"/><Cell col=\"10\" text=\"bind:CONSUMABLEDEFNAME\"/><Cell col=\"11\" text=\"bind:REQUESTQTY\"/><Cell col=\"12\" text=\"bind:UNIT\"/><Cell col=\"13\" text=\"bind:MATREMARK\"/><Cell col=\"14\" text=\"bind:CSMREQUESTID\" displaytype=\"none\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_main",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subTitle01","0","grd_mtmMtrOutFlowRequestList:1",null,"34","div_requestInfo:-160",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_text("자재불출요청");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("OSPPUBLISHSTATUSDETAILINFO");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_mtmMtrOutFlowRequest","0","div_requestInfo:13",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_mtmMtrOutFlowRequest");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"48\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"250\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"280\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"순번\" tooltiptext=\"SEQUENCE\"/><Cell col=\"2\" text=\"자재 No.\"/><Cell col=\"3\" text=\"자재버전\" tooltiptext=\"CONSUMABLEDEFVERSION\"/><Cell col=\"4\" text=\"자재명\" tooltiptext=\"CONSUMABLEDEFNAME\"/><Cell col=\"5\" text=\"단위\" tooltiptext=\"UNIT\"/><Cell col=\"6\" text=\"수량\" tooltiptext=\"QTY\"/><Cell col=\"7\" text=\"비고\" tooltiptext=\"MATREMARK\"/><Cell col=\"8\" text=\"비고\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:REQUESTSEQUENCE\"/><Cell col=\"2\" text=\"bind:CONSUMABLEDEFID\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"expr:dataset.getRowType(currow) ==2 ? &apos;show&apos;:&apos;hide&apos;\"/><Cell col=\"3\" text=\"bind:CONSUMABLEDEFVERSION\"/><Cell col=\"4\" text=\"bind:CONSUMABLEDEFNAME\"/><Cell col=\"5\" text=\"bind:UNIT\"/><Cell col=\"6\" text=\"bind:REQUESTQTY\" displaytype=\"number\" edittype=\"expr:DEMAND==&apos;Y&apos; ? &apos;none&apos; : &apos;mask&apos;\"/><Cell col=\"7\" text=\"bind:MATREMARK\" edittype=\"text\"/><Cell col=\"8\" text=\"bind:DEMAND\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_request","div_requestInfo:-22","352","29","24",null,null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_new",null,"6","103","24","btn_xlDn_grd_main:55",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("신규 등록");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_printReport",null,"5","103","24","btn_new:9",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("전표 출력");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Button("btn_clearConsum","171","175","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","175","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"155","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","181","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_SearchMaterialId","108","135",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_searchMaterialId",null,"135","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_plantId","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,SiteType,ALL,Y,Y");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_SearchRequestType","108","110","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_site","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_period","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("요청기간");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PERIOD");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_mtrVer","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("요청유형");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("E300603C6F28477A8A504EACCC1B7542");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_whNm","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("자재명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("WAREHOUSENAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_periodType","10","85","94","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("금주");
            obj.set_value("");
            obj.set_index("2");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_startDt","108","60",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210104");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_endDt","108","85",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210104");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip02_00",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip02_00_00",null,"55","45","5","90",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip02_00_00_00",null,"80","45","5","90",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip02_00_00_00_00",null,"105","45","5","90",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip02_00_00_00_00_00",null,"130","45","5","90",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","273","79","15","97",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_areaid","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("22");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_searchAreaId","108","35",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("23");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_searchAreaId",null,"35","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","290","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddRow_ds_mtmMtrOutFlowRequest",null,"399","26","24","div_work:-909",null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelRow_ds_mtmMtrOutFlowRequest",null,"399","26","24","div_work:-933",null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
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
        this.addIncludeScript("MTM00300M.xfdl","lib::lib_mtm.xjs");
        this.addIncludeScript("MTM00300M.xfdl","lib::lib_tom.xjs");
        this.registerScript("MTM00300M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 자재현황조회
         * 파일명 		: MTM00300M.xfdl
         * 작성자 		: 김진현
         * 작성일 		: 2021.05.10
         *
         * 설  명		:
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.05.10	유창균   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_mtm.xjs"); /*include "lib::lib_mtm.xjs"*/;	//MTM 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.areaId = '';		// 작업장 id
        this.mtrId = '';		// 자재 id
        this.requestNo = '';    // 요청번호
        this.WhId = '';			// 창고 id
        this.UserId = '';		// 창고 id
        this.processId = '';		// 공정 id
        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	//초기화 (공통)
        	this.nfn_formInit(obj);
        	this.fn_formInit();
        };

        /*
         * 필터 초기화 버튼 클릭시
         */
        this.fn_formInit = function ()
        {
        	this.ds_mtmMtrOutFlowRequest.clearData();
        	this.ds_mtmMtrOutFlowRequestHeader.clearData();

        	this.ds_mtmMtrOutFlowRequestHeader.addRow();

        	this.tab_search.Tabpage1.form.cmb_plantId.set_value(this.gf_getSiteType());		//사이트 초기화
        	this.div_work.form.div_requestInfo.form.edt_requestName.set_value(this.gf_getUserNm());		//요청자명 초기화
        	this.UserId = this.gf_getUserId();															//요청자ID 초기화
        	var enterpriseid = nexacro.getApplication().gds_userInfo.getColumn(0,"gv_enterpriseId");
        	this.ds_mtmMtrOutFlowRequestHeader.setColumn(0,"ENTERPRISEID",enterpriseid);
        	this.ds_mtmMtrOutFlowRequestHeader.setColumn(0,"PLANTID", this.gf_getSiteType());
        	this.ds_mtmMtrOutFlowRequestHeader.setColumn(0,"REQUESTDEPARTMENT", this.gf_getDeptCd());
        	this.ds_mtmMtrOutFlowRequestHeader.setColumn(0,"REQUESTUSERID" ,this.gf_getUserId() );

        	this.tab_search.Tabpage1.form.edt_searchAreaId.set_value("");							//작업장 초기화
         																//작업장ID 변수 초기화

        	this.tab_search.Tabpage1.form.edt_SearchMaterialId.set_value("");							//자재명 초기화


        	//요청기간 초기화
        	this.tomfn_getPeriodData("ds_periodType","","fn_callBack");						//mtm에 getPeriodData 없어서 tomfn으로 처리
        	this.tab_search.Tabpage1.form.cmb_periodType.set_value("THISWEEK"); 			//금주


        	var addParam="";
        	this.mtmfn_setCustomQueryCmb(this.tab_search.Tabpage1.form.cmb_SearchRequestType		// Object
        								, "selectRequestType,ALL,Y,A" 						// OPTION
        								, this.gfn_setParam("ADD_PARAM", addParam) 			// 추가 파라미터
        								, "fn_callBack"); 									// 콜백함수 지정


        	this.mtmfn_setCustomQueryCmb(this.div_work.form.div_requestInfo.form.cmb_requestType		// Object
        								, "selectRequestType,SEL,Y,A" 									// OPTION
        								, this.gfn_setParam("ADD_PARAM", addParam) 						// 추가 파라미터
        								, "fn_callBack"); 												// 콜백함수 지정

        	this.div_work.form.div_requestInfo.form.edt_requestNo.set_value("");
        	this.div_work.form.div_requestInfo.form.edt_areaId.set_value("");
        	this.div_work.form.div_requestInfo.form.edt_customerId.set_value("");
        	this.div_work.form.div_requestInfo.form.edt_remark.set_value("");
        	this.div_work.form.div_requestInfo.form.edt_requestName.set_value(this.gf_getUserNm());
        	this.div_work.form.div_requestInfo.form.edt_wareHouseId.set_value("");
        	this.div_work.form.div_requestInfo.form.edt_wareHouseName.set_value("");
        	this.div_work.form.div_requestInfo.form.cmb_requestType.set_value("");
        };
        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	//dataset 초기화
        	this.ds_mtmMtrOutFlowRequestList.clearData();
        	this.ds_mtmMtrOutFlowRequest.clearData();
        	this.ds_search.clearData();

        	//dataset row 생성
        	var aRow = this.ds_search.addRow();

        	//dataset setcolumn
        	this.ds_search.setColumn(aRow, "SITE", this.tab_search.Tabpage1.form.cmb_plantId.value);
        	this.ds_search.setColumn(aRow, "AREAID", this.areaId);
        	this.ds_search.setColumn(aRow, "REQUESTDATE_S", this.tab_search.Tabpage1.form.cal_startDt.value);
        	this.ds_search.setColumn(aRow, "REQUESTDATE_E", this.tab_search.Tabpage1.form.cal_endDt.value);
        	this.ds_search.setColumn(aRow, "REQUESTTYPE", this.tab_search.Tabpage1.form.cmb_SearchRequestType.value);
        	this.ds_search.setColumn(aRow, "MATERIALID", this.mtrId);



        	var sSvcID 			= "selectMtmMtrOutFlowRequestList";
        	var sController 	= "/mtm00300/selectMtmMtrOutFlowRequestList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_mtmMtrOutFlowRequestList=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 자재 불출 요청 선택 시
         */
        this.fn_selectDetail = function (requestNo)
        {
        	this.ds_mtmMtrOutFlowRequest.clearData();

        	var sSvcID 			= "selectMtmMtrOutFlowRequest";
        	var sController 	= "/mtm00300/selectMtmMtrOutFlowRequest.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_mtmMtrOutFlowRequest=output";
        	var	sArgs 			= this.gfn_setParam("CSMREQUESTNO", requestNo);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, false);
        };

        /*
        * 기능 : 저장
        */
        this.fn_save = function (obj, e)
        {
        	//trace( this.ds_unitPrice.saveXML());
        	if(this.fn_saveValidate() == false) return;

        	var sSvcID 			= "saveMtmMtrOutFlowRequest";
        	var sController 	= "/mtm00300/saveMtmMtrOutFlowRequest.do";
        	var sInDatasets 	= "ds_mtmMtrOutFlowRequest=ds_mtmMtrOutFlowRequest:U ds_mtmMtrOutFlowRequestHeader=ds_mtmMtrOutFlowRequestHeader:A ";
        	var sOutDatasets 	= "ds_result=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        this.fn_saveValidate = function ()
        {
        	var nRow = this.ds_mtmMtrOutFlowRequest.rowcount;
        	if(nRow < 1)
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");
        		return false;
        	}
        	else{
        		for(var i=0;i<nRow;i++)
        		{
        			var checkConsumableId = this.ds_mtmMtrOutFlowRequest.getColumn(i,"CONSUMABLEDEFID");
        			if(this.nfn_isNull(checkConsumableId))
        			{
        				this.gfn_Message("NoConsumableDefId", null, "warning", "ok");
        				return false;
        			}
        			var checkQty = this.ds_mtmMtrOutFlowRequest.getColumn(i,"REQUESTQTY");
        			if(this.nfn_isNull(checkQty) || checkQty ==0)
        			{
        				this.gfn_Message("NoQty", null , "Warning", "ok");
        				return false;
        			}
        		}
        	}
        	var checkAreaId = this.ds_mtmMtrOutFlowRequestHeader.getColumn(0,"AREAID");
        	if(this.nfn_isNull(checkAreaId))
        	{
        		this.gfn_Message("NoAreaId", null , "Warning", "ok");
        		this.div_work.form.div_requestInfo.form.edt_areaId.setFocus();
        		return false;
        	}

        	var checkRequestType = this.ds_mtmMtrOutFlowRequestHeader.getColumn(0,"REQUESTTYPE");
        	var	checkCustomer = this.ds_mtmMtrOutFlowRequestHeader.getColumn(0,"CUSTOMERID");
        	if(this.nfn_isNull(checkRequestType))
        	{
        		this.gfn_Message("NoRequestTypeSelect", null , "Warning", "ok");
        		return false;
        	}
        	if(checkRequestType=="RQ0020" && this.nfn_isNull(checkCustomer))
        	{
        		this.gfn_Message("NoCustomer", null , "Warning", "ok");
        		this.div_work.form.div_requestInfo.form.edt_customerId.setFocus();
        		return false;
        	}

        	var checkDemand = this.ds_mtmMtrOutFlowRequestHeader.getColumn(0,"DEMAND");
        	if(checkDemand=="Y")
        	{
        		this.gfn_Message("ERPDEMAND", null , "Warning", "ok");
        		//this.div_work.form.div_requestInfo.form.edt_customerId.setFocus();
        		return false;
        	}


        	return true;
        };

        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if(trId == "saveBillOfDurableList")
        	{
        		this.gfn_Message(errMsg, "", "error", "ok");
        		return;
        	}
        	if (errCD != 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        		return;
        	}

        	switch(trId) {
        		case "selectPeriodQueryCmb": 		//요청기간 CALLBACK
        			this.fn_setDate("THISWEEK");	//금주
        			break;
        		case "selectRequestType":			//요청유형 CALLBACK
        			break;
        		case "saveMtmMtrOutFlowRequest" :
        			this.gfn_Message("SuccessSave", "", "information", "ok");
        			this.fn_search();
        			//this.ds_mtmMtrOutFlowRequestList.set_rowposition(0);
        			this.fn_selectDetail(this.ds_result.getColumn(0,"REQUESTNO"));
        			this.SetRequestinfo();
        			this.fn_printReport(this.ds_result.getColumn(0,"REQUESTNO"));
        			break;
        	default:
        		break;
        	}
        };

        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;
            switch(sPopupId)
        	{
        		case "SEARCH_AREAID" :
        			this.tab_search.Tabpage1.form.edt_searchAreaId.set_value(rtn[1]);
        			this.ds_search.setColumn(0,"AREAID",rtn[0]);
        			this.ds_search.setColumn(0,"AREANAME",rtn[1]);
        			break;

        		case "SEARCH_MATERIAL" :
        			this.tab_search.Tabpage1.form.edt_SearchMaterialId.set_value(rtn[2]);
        			this.ds_search.setColumn(0,"CONSUMABLEDEFID",rtn[0]);
        			this.ds_search.setColumn(0,"CONSUMABLEDEFVERSION", rtn[1]);
        			this.ds_search.setColumn(0,"CONSUMABLEDEFNAME", rtn[2]);
        			break;
        		case "INFO_AREAID" :
        			this.div_work.form.div_requestInfo.form.edt_areaId.set_value(rtn[1]);
        			this.div_work.form.div_requestInfo.form.edt_wareHouseId.set_value(rtn[2]);
        			this.div_work.form.div_requestInfo.form.edt_wareHouseName.set_value(rtn[3]);
        			this.ds_mtmMtrOutFlowRequestHeader.setColumn(0,"AREAID",rtn[0]);
        			//alert(this.ds_mtmMtrOutFlowRequestHeader.getColumn(0,"AREAID"));
        			this.ds_mtmMtrOutFlowRequestHeader.setColumn(0,"AREANAME",rtn[1]);
        			this.ds_mtmMtrOutFlowRequestHeader.setColumn(0,"WAREHOUSEID",rtn[2]);
        			//alert(this.ds_mtmMtrOutFlowRequestHeader.getColumn(0,"WAREHOUSEID"));
        			this.ds_mtmMtrOutFlowRequestHeader.setColumn(0,"WAREHOUSENAME",rtn[3]);
        			break;
        		case "INFO_MATERIAL" :
        			var nRow = this.ds_mtmMtrOutFlowRequest.rowcount == 1 ? 0 : this.ds_mtmMtrOutFlowRequest.rowposition;
        			this.ds_mtmMtrOutFlowRequest.set_enableevent(false);
        			for(var i=0; i<rtn.length; i++)
        			{
        				if( i != 0 && this.ds_mtmMtrOutFlowRequest.rowcount-1 <  nRow) {

        					this.ds_mtmMtrOutFlowRequest.addRow();
        				}
        				var colArray = rtn[i];
        				var rowSeq = nRow+1;
        				//if(this.nfn_isNull(seq)) seq = nexacro.toNumber(this.ds_Operation.getMax("USERSEQUENCE"),0) + 10;
        				this.ds_mtmMtrOutFlowRequest.setColumn(nRow, "REQUESTSEQUENCE", rowSeq);
        				this.ds_mtmMtrOutFlowRequest.setColumn(nRow, "CONSUMABLEDEFID", colArray[0]);
        				this.ds_mtmMtrOutFlowRequest.setColumn(nRow, "CONSUMABLEDEFVERSION", colArray[1]);
        				this.ds_mtmMtrOutFlowRequest.setColumn(nRow, "CONSUMABLEDEFNAME", colArray[2]);
        				this.ds_mtmMtrOutFlowRequest.setColumn(nRow, "UNIT", colArray[3]);

        				nRow++;
        				}
        			this.ds_mtmMtrOutFlowRequest.set_enableevent(true);

        			break;
        		case "INFO_CUSTOMERID" :
        			this.div_work.form.div_requestInfo.form.edt_customerId.set_value(rtn[1]);
        			this.ds_mtmMtrOutFlowRequestHeader.setColumn(0,"CUSTOMERID",rtn[0]);
        			this.ds_mtmMtrOutFlowRequestHeader.setColumn(0,"CUSTOMERNAME",rtn[1]);
        			//alert(this.ds_mtmMtrOutFlowRequestHeader.getColumn(0,"CUSTOMERID"));
        			break;

        		default :
        			break;
        	}
        };

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 기능 : 검색일자 바인딩 함수
         */
        this.fn_setDate = function (periodType)
        {
        	this.tab_search.Tabpage1.form.cal_startDt.set_value(this.ds_periodType.getColumn(0,periodType+"_S"));
        	this.tab_search.Tabpage1.form.cal_endDt.set_value(this.ds_periodType.getColumn(0,periodType+"_E"));
        }



        /*
         * divrequestinfo작업장 팝업 호출 버튼 클릭시
         */


        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         * 작업장 팝업 호출 버튼 클릭시
         */
        this.tab_search_Tabpage1_btn_searchAreaId_onclick = function(obj,e)
        {
        	// gfn_openPopup(arg_type, popupCd, popupNm, rtnCols, paramCols, paramValues, searchStr);
        	//-----------------
        	// arg_type    : A::사용자가 선택, B:: 한건존재시 자동 셋팅
        	// popupCd     : 공통팝업 관리 화면에서 생성되는 팝업코드
        	// popupNm     : 변경할팝업화면명 , 변경하지 않을 경우 팝업화면 타이틀은 관리화면의 타이틀로 지정됨
        	// rtnCols     : 구분자 : "|"   : 그리드에 출력될 컬럼 지정 (않을 경우 관리화면의 그리드로 출력됨)
        	// paramCols   : 구분자 : "|" : where 구문에 들어갈 컬럼
        	// paramValues : 구분자 : "|"  : where 구문에 들어갈 컬럼에 대한 값
        	// searchStr   : 팝업 조회조건 콤보값 = 조회 값
        	var popupId = "SEARCH_AREAID";
        	var oArg = {};
        	var langType =   nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType");


        	var pAreaId = this.tab_search.Tabpage1.form.edt_searchAreaId.value;
        	if(this.nfn_isNull(pAreaId)) {
        		pAreaId="";
        	}


        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = "P00273";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "AREAID|AREANAME|WAREHOUSEID|WAREHOUSENAME";
        	oArg.arg_paramCols = "PLANTID|LANGUAGETYPE|VALIDSTATE";
        	oArg.arg_paramValues =this.gf_getSiteType() + "|" + langType + "|" + "Valid";
        	oArg.arg_searchStr = "AREA=" + pAreaId;

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=830,height=700");
        };

        this.tab_search_tab_page_cmb_periodType_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != "CUSTOM"){
        		this.fn_setDate(e.postvalue);
        	}
        };



        /*
         * 자재 요청 불출 리스트 선택 시
         */
        this.ds_mtmMtrOutFlowRequestList_onrowposchanged = function(obj,e)
        {
        	if(e.newrow<0) return;

        	var requestNo = obj.getColumn(e.newrow, "CSMREQUESTNO");
        	this.fn_selectDetail(requestNo);
        	this.SetRequestinfo();
        };

        /*
         * 자재 불출 요청 리스트 값 가져오기
         */
        this.SetRequestinfo = function()
        {
        	var aRow = this.ds_mtmMtrOutFlowRequestList.rowposition;
        	/*
        	this.div_work.form.div_requestInfo.form.edt_requestNo.set_value(this.ds_mtmMtrOutFlowRequestList.getColumn(aRow, "CSMREQUESTNO"));
        	//this.div_work.form.div_requestInfo.form.edt_areaNm.set_value(this.ds_mtmMtrOutFlowRequestList.getColumn(aRow, "AREANAME"));
        	this.div_work.form.div_requestInfo.form.edt_WhNm.set_value(this.ds_mtmMtrOutFlowRequestList.getColumn(aRow, "WAREHOUSENAME"));
        	//this.div_work.form.div_requestInfo.form.edt_Vendor.set_value(this.ds_mtmMtrOutFlowRequestList.getColumn(aRow, "WAREHOUSENAME")); //거래처 쿼리수정 필요

        	this.div_work.form.div_requestInfo.form.cmb_requestType.set_value(this.ds_mtmMtrOutFlowRequestList.getColumn(aRow, "CSMREQUESTID"));//code값을 ID로 받아옴
        	this.div_work.form.div_requestInfo.form.edt_processSegmentNm.set_value(this.ds_mtmMtrOutFlowRequestList.getColumn(aRow, "PROCESSSEGMENTNAME"));
        	this.div_work.form.div_requestInfo.form.edt_requestNm.set_value(this.ds_mtmMtrOutFlowRequestList.getColumn(aRow, "CSMREQUESTUSERNAME"));
        	//this.div_work.form.div_requestInfo.form.edt_spot.set_value(this.ds_mtmMtrOutFlowRequestList.getColumn(aRow, "WAREHOUSENAME")); //지점 쿼리수정 필요

        	this.div_work.form.div_requestInfo.form.edt_remark.set_value(this.ds_mtmMtrOutFlowRequestList.getColumn(aRow, "MATREMARK"));
        	*/
        	//this.div_work.form.div_requestInfo.form.edt_requestNo.set_value(this.ds_mtmMtrOutFlowRequest.get(Column(aRow,"REQUESTNO")));
        	this.ds_mtmMtrOutFlowRequestHeader.setColumn(0,"REQUESTNO",this.ds_mtmMtrOutFlowRequest.getColumn(0,"REQUESTNO"));
        	this.ds_mtmMtrOutFlowRequestHeader.setColumn(0,"AREAID", this.ds_mtmMtrOutFlowRequest.getColumn(0,"AREAID"));
        	this.ds_mtmMtrOutFlowRequestHeader.setColumn(0,"AREANAME", this.ds_mtmMtrOutFlowRequest.getColumn(0,"AREANAME"));
        	this.ds_mtmMtrOutFlowRequestHeader.setColumn(0,"WAREHOUSEID" , this.ds_mtmMtrOutFlowRequest.getColumn(0,"WAREHOUSEID"));
        	this.ds_mtmMtrOutFlowRequestHeader.setColumn(0,"WAREHOUSENAME" , this.ds_mtmMtrOutFlowRequest.getColumn(0,"WAREHOUSENAME"));
        	this.ds_mtmMtrOutFlowRequestHeader.setColumn(0,"REQUESTTYPE", this.ds_mtmMtrOutFlowRequest.getColumn(0,"REQUESTTYPE"));
        	this.ds_mtmMtrOutFlowRequestHeader.setColumn(0,"REQUESTUSERID", this.ds_mtmMtrOutFlowRequest.getColumn(0,"REQUESTUSERID"));
        	this.ds_mtmMtrOutFlowRequestHeader.setColumn(0,"REQUESTUSERNAME", this.ds_mtmMtrOutFlowRequest.getColumn(0,"REQUESTUSERNAME"));
        	this.ds_mtmMtrOutFlowRequestHeader.setColumn(0,"REMARK", this.ds_mtmMtrOutFlowRequest.getColumn(0,"REMARK"));
        	this.ds_mtmMtrOutFlowRequestHeader.setColumn(0,"CUSTOMERID" , this.ds_mtmMtrOutFlowRequest.getColumn(0,"CUSTOMERID"));
        	this.ds_mtmMtrOutFlowRequestHeader.setColumn(0,"CUSTOMERNAME" , this.ds_mtmMtrOutFlowRequest.getColumn(0,"CUSTOMERNAME"));
        	this.ds_mtmMtrOutFlowRequestHeader.setColumn(0,"DEMAND" , this.ds_mtmMtrOutFlowRequest.getColumn(0,"DEMAND"));

        	this.div_work.form.div_requestInfo.form.edt_requestNo.set_value(this.ds_mtmMtrOutFlowRequestHeader.getColumn(0,"REQUESTNO"));
        	this.div_work.form.div_requestInfo.form.edt_areaId.set_value(this.ds_mtmMtrOutFlowRequestHeader.getColumn(0,"AREANAME"));
        	this.div_work.form.div_requestInfo.form.edt_areaId.set_enable(false);

        	this.div_work.form.div_requestInfo.form.edt_customerId.set_value(this.ds_mtmMtrOutFlowRequestHeader.getColumn(0,"CUSTOMERNAME"));
        	this.div_work.form.div_requestInfo.form.edt_customerId.set_enable(false);
        	this.div_work.form.div_requestInfo.form.cmb_requestType.set_value(this.ds_mtmMtrOutFlowRequestHeader.getColumn(0,"REQUESTTYPE"));

        	this.div_work.form.div_requestInfo.form.edt_wareHouseId.set_value(this.ds_mtmMtrOutFlowRequestHeader.getColumn(0,"WAREHOUSEID"));
        	this.div_work.form.div_requestInfo.form.edt_wareHouseName.set_value(this.ds_mtmMtrOutFlowRequestHeader.getColumn(0,"WAREHOUSENAME"));
        	this.div_work.form.div_requestInfo.form.edt_remark.set_value(this.ds_mtmMtrOutFlowRequestHeader.getColumn(0,"REMARK"));
        	this.div_work.form.div_requestInfo.form.edt_remark.set_enable(false);

        	var checkDemand = this.ds_mtmMtrOutFlowRequestHeader.getColumn(0,"DEMAND");

        	//alert(checkDemand);

        	if(checkDemand =="Y")
        	{
        		this.btnAddRow_ds_mtmMtrOutFlowRequest.set_enable(false);
        		this.btnDelRow_ds_mtmMtrOutFlowRequest.set_enable(false);
        	}
        	else
        	{
        		this.btnAddRow_ds_mtmMtrOutFlowRequest.set_enable(true);
        		this.btnDelRow_ds_mtmMtrOutFlowRequest.set_enable(true);
        	}
        };





        this.div_work_div_requestInfo_btn_processSegment_onclick = function(obj,e)
        {
        	this.ds_processSearch.clearData();
        	var aRow = this.ds_processSearch.addRow();

        	trace(nexacro.getApplication().gds_userInfo.getColumn(0,"gv_enterpriseId"));

        	this.ds_processSearch.setColumn(aRow, "ENTERPRISEID", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_enterpriseId"));
        	this.ds_processSearch.setColumn(aRow, "PROCESSSEGMENTID", this.processID);
        	this.ds_processSearch.setColumn(aRow, "PROCESSSEGMENTNAME", this.div_work.form.div_requestInfo.form.edt_processSegmentNm.value);

        	this.openAREA_P00114("BA", this.ds_processSearch);
        };

        this.div_work_div_requestInfo_cmb_requestType_onitemchanged = function(obj,e)
        {
        	var requestType = this.div_work.form.div_requestInfo.form.cmb_requestType.value;
        	this.ds_mtmMtrOutFlowRequestHeader.setColumn(0,"REQUESTTYPE", requestType);
        	if (requestType == "RQ0020")
        	{
        		this.div_work.form.div_requestInfo.form.edt_customerId.set_enable(true);
        		this.div_work.form.div_requestInfo.form.btn_customerId.set_visible(true);
        		this.div_work.form.div_requestInfo.form.btn_customerId.set_enable(true);
        		this.div_work.form.div_requestInfo.form.edt_customerId.set_value("");
        	}
        	else
        	{
        		this.div_work.form.div_requestInfo.form.edt_customerId.set_enable(false);
        		this.div_work.form.div_requestInfo.form.btn_customerId.set_visible(false);
        		this.div_work.form.div_requestInfo.form.btn_customerId.set_enable(false);
        		this.div_work.form.div_requestInfo.form.edt_customerId.set_value("");
        		if(requestType =="RQ0070")
        		{
        			this.div_work.form.div_requestInfo.form.edt_customerId.set_value("CCT");
        			this.ds_mtmMtrOutFlowRequestHeader.setColumn(0,"CUSTOMERID" , "1206");
        			this.ds_mtmMtrOutFlowRequestHeader.setColumn(0,"CUSTOMERNAME" , "CCT");
        		}else if(requestType =="RQ0080")
        		{
        			this.div_work.form.div_requestInfo.form.edt_customerId.set_value("IFV");
        			this.ds_mtmMtrOutFlowRequestHeader.setColumn(0,"CUSTOMERID" , "13628");
        			this.ds_mtmMtrOutFlowRequestHeader.setColumn(0,"CUSTOMERNAME" , "IFV");
        		}

        	}
        };

        this.btnAddRow_ds_mtmMtrOutFlowRequest_onclick = function(obj,e)
        {
        	var cRow = this.ds_mtmMtrOutFlowRequest.rowcount == 1 ? 0 : this.ds_mtmMtrOutFlowRequest.rowposition;
        	/*
        	if(this.ds_mtmMtrOutFlowRequest.getColumn(cRow, "PROCESSTYPE") == "PAST") {
        		this.gfn_Message("CantCurrSegentSeq", "", "warning", "ok"); //현재 공정보다 작은 공정수순으로 할당할 수 없습니다.
        		return;
        	}
        	*/

        	this.ds_mtmMtrOutFlowRequest.set_enableevent(false);
        	//var userSequence = this.ds_mtmMtrOutFlowRequest.getColumn(cRow,"USERSEQUENCE") + 5 ;
        	var nRow = this.ds_mtmMtrOutFlowRequest.insertRow(cRow + 1);


        	this.ds_mtmMtrOutFlowRequest.set_enableevent(true);
        };



        this.div_work_tabControl_tpgResource_btnDelRow_ds_Resource_onclick = function(obj,e)
        {
        	var nRow = this.ds_mtmMtrOutFlowRequest.rowcount == 1 ? 0 : this.ds_mtmMtrOutFlowRequest.rowposition;

        	this.ds_mtmMtrOutFlowRequest.deleteRow(nRow);
        };

        this.div_work_grd_mtmMtrOutFlowRequest_onexpanddown = function(obj,e)
        {
        	var popupId = "INFO_MATERIAL";
        	var oArg = {};
        	var langType =   nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType");

        	//alert(pAreaId);
        	oArg.arg_type = "CA";
        	oArg.arg_popupCd = "P00285";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "CONSUMABLEDEFID|CONSUMABLEDEFVERSION|CONSUMABLEDEFNAME|CONSUMABLEUOM";
        	oArg.arg_paramCols = "VALIDSTATE";
        	oArg.arg_paramValues = "Valid" ;
        	//oArg.arg_searchStr = "MATERIAL=" + pMaterialId;

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=830,height=700");
        };

        this.tab_search_Tabpage1_edt_searchAreaId_onkeydown = function(obj,e)
        {
        	if (e.keycode != 13) return;
        	this.tab_search_Tabpage1_btn_searchAreaId_onclick();
        };



        this.div_work_div_requestInfo_btn_areaId_onclick = function(obj,e)
        {
        	var popupId = "INFO_AREAID";
        	var oArg = {};
        	var langType =   nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType");
        	var pAreaId = this.div_work.form.div_requestInfo.form.edt_areaId.value;

        	if(this.nfn_isNull(pAreaId)) {
        		pAreaId="";
        	}

        	//alert(pAreaId);
        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = "P00273";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "AREAID|AREANAME|WAREHOUSEID|WAREHOUSENAME";
        	oArg.arg_paramCols = "PLANTID|LANGUAGETYPE|VALIDSTATE";
        	oArg.arg_paramValues =this.gf_getSiteType() + "|" +langType + "|" + "Valid";
        	oArg.arg_searchStr = "AREA=" + pAreaId;

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=830,height=700");
        };

        this.div_work_div_requestInfo_edt_areaId_onkeydown = function(obj,e)
        {
        	if (e.keycode != 13) return;
        	this.div_work_div_requestInfo_btn_areaId_onclick();
        };

        this.tab_search_Tabpage1_btn_searchMaterialId_onclick = function(obj,e)
        {
        	var popupId = "SEARCH_MATERIAL";
        	var oArg = {};
        	var langType =   nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType");
        	var pMaterialId = this.tab_search.Tabpage1.form.edt_SearchMaterialId.value;

        	if(this.nfn_isNull(pMaterialId)) {
        		pMaterialId="";
        	}

        	//alert(pAreaId);
        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = "P00285";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "CONSUMABLEDEFID|CONSUMABLEDEFVERSION|CONSUMABLEDEFNAME|CONSUMABLEDEFUOM";
        	oArg.arg_paramCols = "MATERIAL|VALIDSTATE";
        	oArg.arg_paramValues =pMaterialId + "|Valid" ;
        	oArg.arg_searchStr = "MATERIAL=" + pMaterialId;

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=830,height=700");
        };

        this.tab_search_Tabpage1_edt_SearchMaterialId_onkeydown = function(obj,e)
        {
        	if (e.keycode != 13) return;
        	this.tab_search_Tabpage1_btn_searchMaterialId_onclick();
        };

        this.div_work_div_requestInfo_btn_customerId_onclick = function(obj,e)
        {
        	var popupId = "INFO_CUSTOMERID";
        	var oArg = {};
        	//var langType =   nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType");
        	var pPopType = "CUSTOMER";
        	//var enterpriseId = nexacro.getApplication().gds_userInfo.getColumn(0,"gv_enterpriseId");
        	var pPlantId = this.gf_getSiteType();
        	var pCustomerId = this.div_work.form.div_requestInfo.form.edt_customerId.value;

        	if(this.nfn_isNull(pCustomerId)) {
        		pCustomerId="";
        	}

        	//alert(pAreaId);
        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = "P00212";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "CUSTOMERID|CUSTOMERNAME";
        	oArg.arg_paramCols = "P_POPTYPE|P_PLANTID|P_CUSTOMER";
        	oArg.arg_paramValues =pPopType + "|" + pPlantId+  "|" + pCustomerId ;
        	oArg.arg_searchStr = "P_CUSTOMER=" + pCustomerId;

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=830,height=700");
        };

        this.div_work_div_requestInfo_edt_customerId_onkeydown = function(obj,e)
        {
        	if (e.keycode != 13) return;
        	this.div_work_div_requestInfo_btn_customerId_onclick();
        };

        this.div_work_btn_new_onclick = function(obj,e)
        {
        	this.fn_formInit();
        	this.ds_mtmMtrOutFlowRequest.clearData();
        	this.div_work.form.div_requestInfo.form.edt_areaId.set_enable(true);
        	this.div_work.form.div_requestInfo.form.edt_remark.set_enable(true);
        	this.btnAddRow_ds_mtmMtrOutFlowRequest.set_enable(true);
        	this.btnDelRow_ds_mtmMtrOutFlowRequest.set_enable(true);
        	//this.div_work.form.grd_mtmMtrOutFlowRequest.set_enable(true);
        	//this.ds_mtmMtrOutFlowRequest.set_enableevent(true);
        };

        this.div_work_btn_printReport_onclick = function(obj,e)
        {
        	var requestNo = this.ds_mtmMtrOutFlowRequestHeader.getColumn(0,"REQUESTNO");
        	this.fn_printReport(requestNo);

        };

        this.fn_printReport = function(requestNo)
        {
        	this.ds_report.clearData();

        	var addRows = this.ds_report.addRow();
        	this.ds_report.setColumn(addRows,"code" ,1);
        	this.ds_report.setColumn(addRows,"value" , requestNo);
        	//this.alert("전표 출력 합니다.     :" + this.ds_report.getColumn(addRows2,"value"));



        	var strField = this.gfn_strParameterData(this.ds_report, "code", "value");  //code : parameter 순서 : 1,2....
        	//또는 strField = [$1값][$2값]....[$n값];
        	var oArg = {
        		sRptPath : "/pcm/",
        		sRptName : "MTM00300R.mrd",
        		strField : strField,
        		bModalless : false
        	};
        	var sOption = "titletext=Report modal 실행 샘플,modeless=false";
        	this.gfn_reportPopup("reportViewer", "common::com_report.xfdl", oArg, sOption);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.div_requestInfo.form.edt_areaId.addEventHandler("onkeydown",this.div_work_div_requestInfo_edt_areaId_onkeydown,this);
            this.div_work.form.div_requestInfo.form.btn_areaId.addEventHandler("onclick",this.div_work_div_requestInfo_btn_areaId_onclick,this);
            this.div_work.form.div_requestInfo.form.cmb_requestType.addEventHandler("onitemchanged",this.div_work_div_requestInfo_cmb_requestType_onitemchanged,this);
            this.div_work.form.div_requestInfo.form.edt_customerId.addEventHandler("onkeydown",this.div_work_div_requestInfo_edt_customerId_onkeydown,this);
            this.div_work.form.div_requestInfo.form.btn_customerId.addEventHandler("onclick",this.div_work_div_requestInfo_btn_customerId_onclick,this);
            this.div_work.form.grd_mtmMtrOutFlowRequest.addEventHandler("onexpanddown",this.div_work_grd_mtmMtrOutFlowRequest_onexpanddown,this);
            this.div_work.form.btn_new.addEventHandler("onclick",this.div_work_btn_new_onclick,this);
            this.div_work.form.btn_printReport.addEventHandler("onclick",this.div_work_btn_printReport_onclick,this);
            this.tab_search.Tabpage1.form.btn_clearConsum.addEventHandler("onclick",this.fn_formInit,this);
            this.tab_search.Tabpage1.form.edt_SearchMaterialId.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_SearchMaterialId_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_searchMaterialId.addEventHandler("onclick",this.tab_search_Tabpage1_btn_searchMaterialId_onclick,this);
            this.tab_search.Tabpage1.form.cmb_SearchRequestType.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cmb_requestType_onitemchanged,this);
            this.tab_search.Tabpage1.form.cmb_periodType.addEventHandler("onitemchanged",this.tab_search_tab_page_cmb_periodType_onitemchanged,this);
            this.tab_search.Tabpage1.form.cal_startDt.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.cal_endDt.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.edt_searchAreaId.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_searchAreaId_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_searchAreaId.addEventHandler("onclick",this.tab_search_Tabpage1_btn_searchAreaId_onclick,this);
            this.btnAddRow_ds_mtmMtrOutFlowRequest.addEventHandler("onclick",this.btnAddRow_ds_mtmMtrOutFlowRequest_onclick,this);
            this.btnDelRow_ds_mtmMtrOutFlowRequest.addEventHandler("onclick",this.div_work_tabControl_tpgResource_btnDelRow_ds_Resource_onclick,this);
            this.ds_mtmMtrOutFlowRequestList.addEventHandler("onrowposchanged",this.ds_mtmMtrOutFlowRequestList_onrowposchanged,this);
        };
        this.loadIncludeScript("MTM00300M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
