(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MFM00501M");
            this.set_titletext("공정부하대비실적조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_summary", this);
            obj._setContents("<ColumnInfo><Column id=\"LOADTOPSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"LOADTOPSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOADMIDDLESEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"LOADMIDDLESEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSMALLSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSMALLSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"BW_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"BW_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"BW_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"LW_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"LW_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"LW_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"LS_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"LS_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"LS_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WR_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WR_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WR_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"GAP_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"GAP_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"GAP_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"MIDDLEDISPLAYSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"SMALLDISPLAYSEQUENCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"LOADTOPSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"LOADTOPSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOADMIDDLESEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"LOADMIDDLESEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSMALLSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSMALLSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"BW_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"BW_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"BW_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"LW_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"LW_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"LW_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"LS_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"LS_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"LS_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WR_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WR_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WR_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"GAP_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"GAP_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"GAP_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"MIDDLEDISPLAYSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"SMALLDISPLAYSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PRIORITY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_SEARCHDATE\" type=\"STRING\" size=\"256\"/><Column id=\"P_PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"P_TOPSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"P_MIDDLESEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"P_SMALLSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"P_RECEIPTUSER\" type=\"STRING\" size=\"256\"/><Column id=\"P_ITEMGROUP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("ds_itemGroupList", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFCLASSGROUPNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("생산계획");
            this.tab_search.addChild(obj.name, obj);

            obj = new Button("Button44_00_01","171","150","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button45_00","15","150","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_siteId","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchDate","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("조회일자");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"130","45","20","92",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_searchDate","108","35",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210104");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_siteId","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("");
            obj.set_type("filter");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_product","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_product","108","60",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_product",null,"60","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_process","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("공정");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_process","108","85",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_process",null,"85","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_receiptor","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_receiptor","108","110",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_receiptor",null,"110","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","197","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_01","0","0",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab_01);
            obj.set_text("종합");
            this.div_work.form.tab_01.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0",null,"34","768",null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("부하량 대비 실적 조회");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_summary","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_summary");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"125\" band=\"left\"/><Column size=\"125\" band=\"left\"/><Column size=\"125\" band=\"left\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"대공정 그룹명\"/><Cell col=\"1\" rowspan=\"2\" text=\"중공정 그룹명\"/><Cell col=\"2\" rowspan=\"2\" text=\"소공정 그룹명\"/></Band><Band id=\"body\"><Cell text=\"bind:LOADTOPSEGMENTCLASSNAME\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:LOADMIDDLESEGMENTCLASSNAME\" suppress=\"2\"/><Cell col=\"2\" text=\"bind:LOADSMALLSEGMENTCLASSNAME\" cssclass=\"expr:dataset.getColumn(currow,&apos;LOADSMALLSEGMENTCLASSNAME&apos;)==&apos;소계&apos;? &apos;cell_linkTxt,cell_bg_green&apos; : (dataset.getColumn(currow,&apos;LOADSMALLSEGMENTCLASSNAME&apos;)==&apos;총계&apos;? &apos;cell_linkTxt,cell_bg_yellow&apos; : &apos;&apos;)\"/></Band></Format></Formats>");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_summary",null,"6","29","24","6",null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab_01);
            obj.set_text("상세");
            this.div_work.form.tab_01.addChild(obj.name, obj);

            obj = new Static("subtitle1","0","0","190","34",null,null,null,null,null,null,this.div_work.form.tab_01.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("부하량 대비 실적 조회 (상세)");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            this.div_work.form.tab_01.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_detail","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_01.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_detail");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"125\" band=\"left\"/><Column size=\"125\" band=\"left\"/><Column size=\"125\" band=\"left\"/><Column size=\"125\" band=\"left\"/><Column size=\"38\" band=\"left\"/><Column size=\"83\" band=\"left\"/><Column size=\"231\" band=\"left\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"대공정 그룹명\"/><Cell col=\"1\" rowspan=\"2\" text=\"중공정 그룹명\"/><Cell col=\"2\" rowspan=\"2\" text=\"소공정 그룹명\"/><Cell col=\"3\" rowspan=\"2\" text=\"공정명\"/><Cell col=\"4\" rowspan=\"2\" text=\"순위\"/><Cell col=\"5\" rowspan=\"2\" text=\"제품코드\"/><Cell col=\"6\" rowspan=\"2\" text=\"제품명\"/></Band><Band id=\"body\"><Cell text=\"bind:LOADTOPSEGMENTCLASSNAME\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:LOADMIDDLESEGMENTCLASSNAME\" suppress=\"2\"/><Cell col=\"2\" text=\"bind:LOADSMALLSEGMENTCLASSNAME\" cssclass=\"expr:dataset.getColumn(currow,&apos;LOADSMALLSEGMENTCLASSNAME&apos;)==&apos;소계&apos;? &apos;cell_bg_green&apos; : (dataset.getColumn(currow,&apos;LOADSMALLSEGMENTCLASSNAME&apos;)==&apos;총계&apos;? &apos;cell_bg_yellow&apos; : &apos;&apos;)\" suppress=\"3\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTNAME\" suppress=\"4\"/><Cell col=\"4\" text=\"bind:PRIORITY\" suppress=\"5\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFID\" cssclass=\"expr:dataset.getColumn(currow,&apos;PRODUCTDEFNAME&apos;)==&apos;소계&apos;? &apos;cell_bg_green&apos; : (dataset.getColumn(currow,&apos;PRODUCTDEFNAME&apos;)==&apos;총계&apos;? &apos;cell_bg_yellow&apos; : &apos;&apos;)\" suppress=\"6\"/><Cell col=\"6\" text=\"bind:PRODUCTDEFNAME\" suppress=\"5\" cssclass=\"expr:dataset.getColumn(currow,&apos;PRODUCTDEFNAME&apos;)==&apos;소계&apos;? &apos;cell_linkTxt,cell_bg_green&apos; : (dataset.getColumn(currow,&apos;PRODUCTDEFNAME&apos;)==&apos;총계&apos;? &apos;cell_linkTxt,cell_bg_yellow&apos; : &apos;&apos;)\"/></Band></Format></Formats>");
            this.div_work.form.tab_01.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_detail",null,"6","29","24","6",null,null,null,null,null,this.div_work.form.tab_01.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.div_work.form.tab_01.Tabpage2.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"16","26","24","31",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_print");
            obj.set_tooltiptext("Toolbar_Print");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","62",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"16","26","24","93",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_com_del");
            obj.set_tooltiptext("Toolbar_Delete");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","26","24","124",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_new",null,"16","26","24","155",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("5");
            obj.set_cssclass("btn_com_new");
            obj.set_tooltiptext("Toolbar_New");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","155","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_text("공정부하 대비 실적조회");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);
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
        this.addIncludeScript("MFM00501M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("MFM00501M.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("MFM00501M.xfdl","lib::lib_mfm.xjs");
        this.registerScript("MFM00501M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 치공구 현황 조회
         * 파일명 		: TOM01100M.xfdl
         * 작성자 		: 박현우
         * 작성일 		: 2021.02.01
         *
         * 설  명		: 치공구 현황 조회
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.02.10	박현우   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_mfm.xjs"); /*include "lib::lib_mfm.xjs"*/;	//MFM 공통 라이브러리 include

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.searchDiv = this.tab_search.Tabpage1.form;
        this.tabDiv = this.div_work.form;
        this.tabInputDiv1 = this.div_work.form.tab_01.Tabpage1.form;
        this.tabInputDiv2 = this.div_work.form.tab_01.Tabpage2.form;

        this.productId = '';
        this.processId = '';

        this.firstDrawFlag = 0;
        this.gridFormatStr = '';
        this.gridFormatStr2 = '';

        this.clickVal = '';
        this.clickCol = 0;
        this.clickRow = 0;

        this.receiptorId = ''; //담당자Id (조회조건)

        this.fv_rtnValue = ''; //팝업화면 리턴값 변수

        this.itemGrpSel = ''; //소계/총계의 일자별 컬럼을 클릭시 해당 해당 품목그룹만 보여주게 처리 :: 공백 또는 숫자

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);

        	this.fn_initCombo();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색 (첫번째 Grid)
         */
        this.fn_search = function (obj, e)
        {
        	//품목코드명이 공백이면 코드/버젼 공백 처리
        	if(this.searchDiv.edt_product.value=='') {
        		this.productId = '';
        	}

        	//공정명이 공백이면 공정Id 공백 처리
        	if(this.searchDiv.edt_process.value=='') {
        		this.processId = '';
        	}

        	this.ds_summary.clearData(); //첫번째 탭은 데이터 초기화 한다.
        	this.ds_detail.clearData();

        	this.ds_search.clearData();

        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 				this.nfn_nvl(this.gf_getEnterpriseId(), ""));
        	this.ds_search.setColumn(0, "P_PLANTID", 					this.nfn_nvl(this.searchDiv.cbo_siteId.value, ""));

        	this.ds_search.setColumn(0, "P_SEARCHDATE", 				this.nfn_nvl(this.searchDiv.cal_searchDate.value, "")); //조회일자
        	this.ds_search.setColumn(0, "P_PROCESSSEGMENTID", 			this.nfn_nvl(this.processId, "")); //공정
        	this.ds_search.setColumn(0, "P_PRODUCTDEFID", 				this.nfn_nvl(this.productId, "")); //품목
        	this.ds_search.setColumn(0, "P_RECEIPTUSER", 				this.nfn_nvl(this.receiptorId, "")); //담당자

        	this.ds_search.setColumn(0, "CURRENTLOGINID", 				this.tomfn_getUserId()); //사용자Id
        	this.ds_search.setColumn(0, "LANGUAGETYPE", 				this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", 						"selectLoadPredictionPerRecordTotalList");

        	var sSvcID 			= "selectLoadPredictionPerRecordTotalList";
        	var sController 	= "/mfm00501/selectLoadPredictionPerRecordTotalList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_summary=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색 (두번째 Grid)
         */
        this.fn_search2 = function (obj, e)
        {
        	this.ds_search.clearData();

        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 				this.nfn_nvl(this.gf_getEnterpriseId(), ""));
        	this.ds_search.setColumn(0, "P_PLANTID", 					this.nfn_nvl(this.searchDiv.cbo_siteId.value, ""));

        	this.ds_search.setColumn(0, "P_SEARCHDATE", 				this.nfn_nvl(this.searchDiv.cal_searchDate.value, "")); //조회일자
        	this.ds_search.setColumn(0, "P_PROCESSSEGMENTID", 			this.nfn_nvl(this.processId, "")); //공정
        	this.ds_search.setColumn(0, "P_PRODUCTDEFID", 				this.nfn_nvl(this.productId, "")); //품목
        	if(this.clickVal == '소계'){
        		this.ds_search.setColumn(0, "P_TOPSEGMENTCLASSID", 		this.nfn_nvl(this.ds_summary.getColumn(this.ds_summary.rowposition, "LOADTOPSEGMENTCLASSID"))); //대공정
        		this.ds_search.setColumn(0, "P_MIDDLESEGMENTCLASSID", 	this.nfn_nvl(this.ds_summary.getColumn(this.ds_summary.rowposition, "LOADMIDDLESEGMENTCLASSID"))); //중공정
        		this.ds_search.setColumn(0, "P_SMALLSEGMENTCLASSID", 	""); //소공정
        	}
        	if(this.clickVal == '총계'){
        		this.ds_search.setColumn(0, "P_TOPSEGMENTCLASSID", 		this.nfn_nvl(this.ds_summary.getColumn(this.ds_summary.rowposition, "LOADTOPSEGMENTCLASSID"))); //대공정
        		this.ds_search.setColumn(0, "P_MIDDLESEGMENTCLASSID", 	""); //중공정
        		this.ds_search.setColumn(0, "P_SMALLSEGMENTCLASSID", 	""); //소공정
        	}

        	this.ds_search.setColumn(0, "P_ITEMGROUP", 					this.nfn_nvl(this.itemGrpSel, "")); //ITEM 그룹 선택
        	this.ds_search.setColumn(0, "P_RECEIPTUSER", 				this.nfn_nvl(this.receiptorId, "")); //담당자

        	this.ds_search.setColumn(0, "CURRENTLOGINID", 				this.tomfn_getUserId()); //사용자Id
        	this.ds_search.setColumn(0, "LANGUAGETYPE", 				this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", 						"selectLoadPredictionPerRecordList");

        	var sSvcID 			= "selectLoadPredictionPerRecordList";
        	var sController 	= "/mfm00501/selectLoadPredictionPerRecordList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_detail=output ds_itemGroupList=output2";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 사용자별 item 그룹 List
         */
        this.fn_itemGroupList = function (obj, e)
        {
        	this.ds_search.clearData();

        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "P_RECEIPTUSER", 				this.nfn_nvl(this.receiptorId, "")); //담당자
        	this.ds_search.setColumn(0, "SQL_ID", 						"selectItemGroupName");

        	var sSvcID 			= "selectItemGroupName";
        	var sController 	= "/mfmCommon/selectItemGroupName.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_itemGroupList=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        };

        /*
         * 기능 : 삭제
         */
        this.fn_delete = function (obj, e)
        {
        };

        /*
         * 기능 : 복사
         */
        this.fn_copy = function(obj,e)
        {
        };

        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD != 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        		return;
        	}

        	switch(trId) {
        		case "selectTomPlantList":	//[조회조건] Site Callback
        			this.searchDiv.cbo_siteId.set_value(this.gf_getSiteType()); //세션사용자PlantId를 가져온다.
        			this.searchDiv.cal_searchDate.set_value(this.tomfn_getCurrentlyDate("YYYY-MM-DD"));
        			break;
        		case "selectLoadPredictionPerRecordTotalList": //[종합]그리드 CALLBACK
        			break;
        		case "selectLoadPredictionPerRecordList": //[상세]그리드 CALLBACK
        			this.fn_setColumnHideApply2(); //다이나믹 컬럼을 모두 지운다.
        			this.fn_allShowColumn2(); //다이나믹 컬럼을 다시 만든다.
        			break;
        		case "selectItemGroupName": //품목 그룹 callback
        			this.ds_summary.clearData();
        			this.ds_detail.clearData();

        			//alert('품목 그룹 건수 :: '+this.ds_itemGroupList.rowcount);
        			//alert('부하일자 건수 :: '+this.ds_dayList.rowcount);
        			if(this.firstDrawFlag==1){ //화면 초기화시에는 지울것이 없다.
        				this.fn_setColumnHideApply(); //다이나믹 컬럼을 모두 지운다.
        				this.fn_setColumnHideApply2(); //다이나믹 컬럼을 모두 지운다.
        			}else{
        				//그리드폼저장
        				this.gridFormatStr = this.tabInputDiv1.grd_summary.formats;
        				this.gridFormatStr2 = this.tabInputDiv2.grd_detail.formats;
        			}
        			this.fn_allShowColumn(); //다이나믹 컬럼을 다시 만든다.
        			this.fn_allShowColumn2(); //다이나믹 컬럼을 다시 만든다.
        			this.firstDrawFlag = 1;

        			break;
        		default:
        	}
        };

        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        /*
         * 기능(공통팝업) : '작업장' Text 조회
         */
        this.fn_openPop = function(svcId, popId, pArg)
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

        	var popupId = svcId;
        	var oArg = {};
        	var opts = "width=650,height=500";

        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = popId;
        	oArg.arg_popupNm = "";
        	oArg.arg_paramCols = this.gfn_getExtractArgument(pArg,"name");
        	oArg.arg_paramValues = this.gfn_getExtractArgument(pArg,"value");
        	oArg.arg_searchStr = "";

        	if(popId=="P00126"){ //품목코드 조회
        		oArg.arg_type = "CA";
        		oArg.arg_searchStr = "PRODUCTDEFID="+this.searchDiv.edt_product.value;//조회조건의 품목명
        		oArg.arg_rtnCols = "PRODUCTDEFID|PRODUCTDEFNAME|PRODUCTDEFVERSION";
        	}

        	if(popId=="P00194"){ //담당자 조회
        		oArg.arg_searchStr = "USERNAME="+this.searchDiv.edt_receiptor.value;
        		oArg.arg_rtnCols = "USERID|USERNAME";
        	}

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        }

        /*
         *	기능 : 팝업 관련
         */
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;

        	if(sPopupId == "EMAIL" ) this.mfn_ClearGetLotList();

        	if(this.nfn_isNull(rtn)) return;

        	if (sPopupId == "POPUP_PROCESSSEGMENTID")
        	{
        		var objId = "";
        		var objText = "";
        		for(var i=0; i<rtn.length; i++){
        			var colArray = rtn[i];
        			if(i<rtn.length-1){
        				objId += colArray[0]+",";
        				objText += colArray[1]+",";
        			}else{
        				objId += colArray[0];
        				objText += colArray[1];
        			}
        		}
        		this.searchDiv.edt_process.set_value(objText);
        		this.processId = objId;
        	}else if(sPopupId == "SCH_PRODUCT")
        	{
        		var objId = "";
        		var objText = "";
        		for(var i=0; i<rtn.length; i++){
        			var colArray = rtn[i];
        			if(i<rtn.length-1){
        				objId += colArray[0]+"|"+colArray[2]+",";
        				objText += colArray[1]+",";
        			}else{
        				objId += colArray[0]+"|"+colArray[2];
        				objText += colArray[1];
        			}
        		}
        		this.searchDiv.edt_product.set_value(objText);
        		this.productId = objId;
        	}
        	if(sPopupId == "SCH_USERS") //담당자
        	{
        		this.searchDiv.edt_receiptor.set_value(rtn[1]);
        		this.receiptorId = rtn[0]; //HIDDEN 필드

        		this.fn_itemGroupList();
        	}
        };

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 기능 : 조회 조건 Load
         */
        this.fn_initCombo = function ()
        {
        	this.fn_initSiteCombo();

        	this.fn_itemGroupList();

        	// x 버튼 이벤트 설정(담당장Tab, 담당자)
        	this.searchDiv.btn_edt_receiptor.setEventHandler("onclick", this.fn_xClickReceiptor, this );
        }

        /*
         * 기능 : 'Site' 콤보 조회
         */
        this.fn_initSiteCombo = function ()
        {
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());

        	this.tomfn_setCustomQueryCmb(this.searchDiv.cbo_siteId // Object
        								, "selectTomPlantList,ALL,Y,A" // OPTION
        								, sArgs	// 추가 파라미터
        								, "fn_callBack"); //콜백함수 지정
        }

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        // 조회 조건 이벤트 [E]
        this.mfn_OpenProcSegment = function ()
        {
        	var oArg = {};
        	oArg.arg_type        = "CA";
        	oArg.arg_popupCd     = "P00156";
        	oArg.arg_popupNm     = "공정 선택";
        	oArg.arg_rtnCols     = "PROCESSSEGMENTID|PROCESSSEGMENTNAME";
        	oArg.arg_paramCols   = "P_POPTYPE|P_LANGUAGETYPE";
        	oArg.arg_paramValues = "PROCESSSEGMENT|" + this.gf_getLanguageType();
        	oArg.arg_searchStr   = "P_PROCESSSEGMENT=" +this.searchDiv.edt_process.value;
        	this.gfn_openPopup( "POPUP_PROCESSSEGMENTID", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        };

        this.fn_searchClear = function(obj,e)
        {
        };

        this.div_header_btn_reset2_onclick = function(obj,e)
        {
        	this.ds_summary.clearData();
        	this.ds_detail.clearData();
        	//var strCnt = 'Count : <fc v="#f31d24">0</fc><fc v="#999999"></fc>';
        	//this.tabInputDiv.sta_cnt_ds_toolMaking.set_text(strCnt);
        	//strCnt = 'Count : <fc v="#f31d24">0</fc><fc v="#999999"></fc>';
        	//this.tabInputDiv2.sta_cnt_ds_toolMakingStatics.set_text(strCnt);
        };

        this.tab_00_Tabpage1_btn_process_onclick = function(obj,e)
        {
        	this.mfn_OpenProcSegment();
        };

        this.tab_search_Tabpage1_btn_product_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.gf_getSiteType());
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());
        	sArgs += this.gfn_setParam("P_PRODUCTDEFTYPE", "Product");

        	this.fn_openPop("SCH_PRODUCT","P00126", sArgs); //품목코드 조회
        };

        this.tab_search_Tabpage1_edt_product_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btn_product_onclick();
        	}
        };

        this.tab_00_Tabpage1_edt_process_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_00_Tabpage1_btn_process_onclick();
        	}
        };

        this.div_00_tab_01_Tabpage1_grd_summary_oncellclick = function(obj,e)
        {
        	this.itemGrpSel = '';
        	var tempVal = this.ds_summary.getColumn(e.row, "LOADSMALLSEGMENTCLASSNAME");
        	//alert(e.col+'/'+e.row+'/'+tempVal);

        	if(e.col==2){
        		if(tempVal == '소계' || tempVal == '총계'){
        			this.clickVal = tempVal;
        			this.clickCol = e.col;
        			this.clickRow = e.row;

        			this.itemGrpSel = '';

        			this.fn_search2();
        			this.tabDiv.tab_01.set_tabindex(1);
        		}
        	}

        	if(e.col>2){
        		//alert(e.col+'/'+e.row+'/'+tempVal);
        		//head, Body
        		var colNm = this.tabInputDiv1.grd_summary.getCellProperty("Body", e.col, "text").replace("bind:","");
        		//alert(colNm);
        		if(colNm.indexOf("TOTAL")>-1 && (tempVal == '소계' || tempVal == '총계')){
        			this.clickVal = tempVal;
        			this.clickCol = 2;
        			this.clickRow = e.row;

        			this.itemGrpSel = '';

        			this.fn_search2();
        			this.tabDiv.tab_01.set_tabindex(1);
        		}else{
        			var tempArr = colNm.split("_")
        			var tempStr = tempArr[1].replace("G1","").replace("G2","").replace("G3","").replace("G4","").replace("G5",""); //G1_TYPE1QTY
        			tempStr = tempStr.replace("TYPE","").replace("QTY","");
        			//alert(tempStr);
        			this.itemGrpSel = tempStr;
        			if(tempVal == '소계' || tempVal == '총계'){
        				this.clickVal = tempVal;
        				this.clickCol = e.col;
        				this.clickRow = e.row;
        				this.fn_search2();
        				this.tabDiv.tab_01.set_tabindex(1);
        			}else{
        				//alert('소계/총계 아니면 skip...');
        			}
        		}
        	}
        };

        this.div_00_tab_01_Tabpage1_grd_summary_oncelldblclick = function(obj,e)
        {
        };

        this.tab_00_Tabpage1_edt_receiptor_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_00_Tabpage1_btn_receiptor_onclick();
        	}
        };

        this.tab_00_Tabpage1_btn_receiptor_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.searchDiv.cbo_siteId.value);

        	this.fn_openPop("SCH_USERS","P00194", sArgs); //담당자 조회
        };

        /*
         * 담당자 Tab 담당자 x 버튼 클릭시
         */
        this.fn_xClickReceiptor = function ()
        {
        	this.searchDiv.edt_receiptor.set_value('');
        	this.receiptorId = '';
        	this.fn_itemGroupList();
        };

        this.div_00_tab_01_Tabpage2_grd_detail_oncellclick = function(obj,e)
        {

        };


        this.fn_allShowColumn = function ()
        {
        	//alert(this.ds_dayList.rowcount + '/' + this.ds_itemGroupList.rowcount);
        	this.tabInputDiv1.grd_summary.set_enableredraw(false);
        	this.div_work.form.tab_01.Tabpage1.form.grd_summary.set_enableevent(false);
        	this.ds_summary.set_enableevent(false);

        	var nCell = 0;
        	if(this.ds_itemGroupList.rowcount>0){
        		var nCol = 3; //처음에 insert될 위치
        		var objGrd = this.tabInputDiv1.grd_summary;
        		for(var i = 1; i <= 4; i++) {
        			objGrd.insertContentsCol("body", nCol);
        			objGrd.setFormatColProperty(nCol, "size", 80);
        			objGrd.setCellProperty( "head", nCol, "text", "합 계");
        			objGrd.setCellProperty( "head", nCol, "font", "bold 11px/1.1 'Malgun Gothic','맑은 고딕','Arial'");
        			objGrd.setCellProperty( "body", nCol, "text", "bind:G"+i+"_TOTALQTY");
        			objGrd.setCellProperty( "body", nCol, "textAlign", "right");
        			//objGrd.setCellProperty( "body", nCol, "cssclass", "cell_bold" );
        			objGrd.setCellProperty( "body", nCol, "cssclass", "expr:dataset.getColumn(currow,'LOADSMALLSEGMENTCLASSNAME')=='소계'? 'cell_linkTxt,cell_bold' : (dataset.getColumn(currow,'LOADSMALLSEGMENTCLASSNAME')=='총계'? 'cell_linkTxt,cell_bold' : 'cell_bold')" );
        			nCol++;

        			for(var j = 1; j <= this.ds_itemGroupList.rowcount; j++) {
        				objGrd.insertContentsCol("body", nCol);
        				objGrd.setFormatColProperty(nCol, "size", 80);
        				objGrd.setCellProperty( "head", nCol, "text", this.nfn_nvl(this.ds_itemGroupList.getColumn(j-1, "PRODUCTDEFCLASSGROUPNAME")));
        				objGrd.setCellProperty( "body", nCol, "text", "bind:G"+i+"_TYPE"+j+"QTY");
        				objGrd.setCellProperty( "body", nCol, "textAlign", "right");
        				objGrd.setCellProperty( "body", nCol, "cssclass", "expr:dataset.getColumn(currow,'LOADSMALLSEGMENTCLASSNAME')=='소계'? 'cell_linkTxt,cell_bold' : (dataset.getColumn(currow,'LOADSMALLSEGMENTCLASSNAME')=='총계'? 'cell_linkTxt,cell_bold' : '')" );
        				nCol++;
        			}
        			//trace("z_______________ "+nCol+" || "+i);
        		}

        		//2021-07-12추가함
        		objGrd.insertContentsCol("body", nCol);
        		objGrd.setFormatColProperty(nCol, "size", 80);
        		objGrd.setCellProperty( "head", nCol, "text", "합 계");
        		objGrd.setCellProperty( "head", nCol, "font", "bold 11px/1.1 'Malgun Gothic','맑은 고딕','Arial'");
        		objGrd.setCellProperty( "body", nCol, "text", "bind:G5_TOTALQTY");
        		objGrd.setCellProperty( "body", nCol, "textAlign", "right");
        		objGrd.setCellProperty( "body", nCol, "cssclass", "cell_bold" );
        		objGrd.setCellProperty( "body", nCol, "cssclass", "expr:dataset.getColumn(currow,'LOADSMALLSEGMENTCLASSNAME')=='소계'? 'cell_linkTxt,cell_bold' : (dataset.getColumn(currow,'LOADSMALLSEGMENTCLASSNAME')=='총계'? 'cell_linkTxt,cell_bold' : 'cell_bold')" );
        		nCol++;
        		for(var j = 1; j <= this.ds_itemGroupList.rowcount; j++) {
        			objGrd.insertContentsCol("body", nCol);
        			objGrd.setFormatColProperty(nCol, "size", 80);
        			objGrd.setCellProperty( "head", nCol, "text", this.nfn_nvl(this.ds_itemGroupList.getColumn(j-1, "PRODUCTDEFCLASSGROUPNAME")));
        			objGrd.setCellProperty( "body", nCol, "text", "bind:G5_TYPE"+j+"QTY");
        			objGrd.setCellProperty( "body", nCol, "textAlign", "right");
        			objGrd.setCellProperty( "body", nCol, "cssclass", "expr:dataset.getColumn(currow,'LOADSMALLSEGMENTCLASSNAME')=='소계'? 'cell_linkTxt,cell_bold' : (dataset.getColumn(currow,'LOADSMALLSEGMENTCLASSNAME')=='총계'? 'cell_linkTxt,cell_bold' : '')" );
        			nCol++;
        		}

        		//alert(nCol);
        		for(var i2 = 1; i2 <= 4; i2++) {
        			objGrd.setFormatColProperty(nCol, "size", 80);
        			objGrd.setCellProperty( "head", nCol, "text", "합 계");
        			objGrd.setCellProperty( "head", nCol, "font", "bold 11px/1.1 'Malgun Gothic','맑은 고딕','Arial'");
        			objGrd.setCellProperty( "body", nCol, "textAlign", "right");
        			nCol++;
        			for(var j2 = 1; j2 <= this.ds_itemGroupList.rowcount; j2++) {
        				objGrd.setFormatColProperty(nCol, "size", 80);
        				objGrd.setCellProperty( "head", nCol, "text", this.nfn_nvl(this.ds_itemGroupList.getColumn(j2-1, "PRODUCTDEFCLASSGROUPNAME")));
        				objGrd.setCellProperty( "body", nCol, "textAlign", "right");
        				nCol++;
        			}
        		}

        		//2021-07-12추가함
        		objGrd.setFormatColProperty(nCol, "size", 80);
        		objGrd.setCellProperty( "head", nCol, "text", "합 계");
        		objGrd.setCellProperty( "head", nCol, "font", "bold 11px/1.1 'Malgun Gothic','맑은 고딕','Arial'");
        		objGrd.setCellProperty( "body", nCol, "textAlign", "right");
        		nCol++;
        		for(var j2 = 1; j2 <= this.ds_itemGroupList.rowcount; j2++) {
        			objGrd.setFormatColProperty(nCol, "size", 80);
        			objGrd.setCellProperty( "head", nCol, "text", this.nfn_nvl(this.ds_itemGroupList.getColumn(j2-1, "PRODUCTDEFCLASSGROUPNAME")));
        			objGrd.setCellProperty( "body", nCol, "textAlign", "right");
        			nCol++;
        		}
        	}

        	if(this.ds_itemGroupList.rowcount>0){
        		var nCol = 3+4 * this.ds_itemGroupList.rowcount+4+this.ds_itemGroupList.rowcount+1; //처음에 insert될 위치 :
        		var objGrd = this.tabInputDiv1.grd_summary;
        		for(var i = 5; i >= 1; i--) {
        			nCol--; //total
        			for(var j = this.ds_itemGroupList.rowcount; j >= 1; j--) {
        				nCol--;
        			}
        			nCell = objGrd.mergeContentsCell("head", 0, nCol, 0, nCol+this.ds_itemGroupList.rowcount, nCol+1, false);
        			if(i==5){
        				objGrd.setCellProperty('Head', nCol, "text", "차이 현황");
        			}else if(i==4){
        				objGrd.setCellProperty('Head', nCol, "text", "실적 현황");
        			}else if(i==3){
        				objGrd.setCellProperty('Head', nCol, "text", "예상 부하");
        			}else if(i==2){
        				objGrd.setCellProperty('Head', nCol, "text", "기말 재공");
        			}else if(i==1){
        				objGrd.setCellProperty('Head', nCol, "text", "기초 재공");
        			}
        			objGrd.setCellProperty("head", nCol, "font", "bold 11px/1.1 'Malgun Gothic','맑은 고딕','Arial'");
        		}
        	}

        	//짝수행 칼라링
        	if(this.ds_itemGroupList.rowcount>0){
        		var nCol = 3 + (5 * this.ds_itemGroupList.rowcount) + 5; //처음에 insert될 위치 :
        		var objGrd = this.tabInputDiv1.grd_summary;
        		for(var i = 5; i >= 1; i--) {
        			nCol--; //total
        			if(i%2==0){ //짝수이면background="#fefff4"
        				objGrd.setCellProperty('body', nCol, "background", "#fefff4"); //여린노랑색
        			}else{
        				objGrd.setCellProperty('body', nCol, "background", "#ffffff");
        			}
        			for(var j = this.ds_itemGroupList.rowcount; j >= 1; j--) {
        				nCol--;
        				if(i%2==0){ //짝수이면background="#fefff4"
        					objGrd.setCellProperty('body', nCol, "background", "#fefff4");
        				}else{
        					objGrd.setCellProperty('body', nCol, "background", "#ffffff");
        				}
        			}
        		}
        	}

        	this.tabInputDiv1.grd_summary.set_enableredraw(true);
        	this.div_work.form.tab_01.Tabpage1.form.grd_summary.set_enableevent(true);
        	this.ds_summary.set_enableevent(true);

        	// 틀고정
        	this.nfn_cellFix(this.tabInputDiv1.grd_summary, 2);
        }

        //해당하는 갯수만큼 안보이게 하기
        this.fn_setColumnHideApply = function ()
        {
        	//alert('---1---delete start');
        	this.tabInputDiv1.grd_summary.set_formats(this.gridFormatStr);
        	this.tabInputDiv1.grd_summary.set_enableredraw(true);
        	this.resetScroll();
        }

        //###################################################
        //###################################################
        //################################################### 2번째 탭 그리드 다이나믹 컬럼 생성/삭제
        //###################################################
        //###################################################
        this.fn_allShowColumn2 = function ()
        {
        	//alert(this.ds_dayList.rowcount + '/' + this.ds_itemGroupList.rowcount);
        	this.tabInputDiv2.grd_detail.set_enableredraw(false);
        	this.div_work.form.tab_01.Tabpage2.form.grd_detail.set_enableevent(false);
        	this.ds_detail.set_enableevent(false);

        	var nCell = 0;
        	if(this.ds_itemGroupList.rowcount>0){
        		var nCol = 7; //처음에 insert될 위치
        		var objGrd = this.tabInputDiv2.grd_detail;
        		for(var i = 1; i <= 4; i++) {
        			objGrd.insertContentsCol("body", nCol);
        			if(this.nfn_nvl(this.itemGrpSel, "")==''){
        				objGrd.setFormatColProperty(nCol, "size", 80);
        			}else{
        				objGrd.setFormatColProperty(nCol, "size", 0);
        			}
        			objGrd.setCellProperty( "head", nCol, "text", "합계");
        			objGrd.setCellProperty( "head", nCol, "font", "bold 11px/1.1 'Malgun Gothic','맑은 고딕','Arial'");
        			objGrd.setCellProperty( "body", nCol, "text", "bind:G"+i+"_TOTALQTY");
        			objGrd.setCellProperty( "body", nCol, "textAlign", "right");
        			//objGrd.setCellProperty( "body", nCol, "cssclass", "cell_bold" );
        			objGrd.setCellProperty( "body", nCol, "cssclass", "expr:dataset.getColumn(currow,'PRODUCTDEFNAME')=='소계'? 'cell_linkTxt,cell_bold' : (dataset.getColumn(currow,'PRODUCTDEFNAME')=='총계'? 'cell_linkTxt,cell_bold' : 'cell_bold')" );
        			nCol++;
        			for(var j = 1; j <= this.ds_itemGroupList.rowcount; j++) {
        				objGrd.insertContentsCol("body", nCol);
        				objGrd.setFormatColProperty(nCol, "size", 80);
        				objGrd.setCellProperty( "head", nCol, "text", this.nfn_nvl(this.ds_itemGroupList.getColumn(j-1, "PRODUCTDEFCLASSGROUPNAME")));
        				objGrd.setCellProperty( "body", nCol, "text", "bind:G"+i+"_TYPE"+j+"QTY");
        				objGrd.setCellProperty( "body", nCol, "textAlign", "right");
        				objGrd.setCellProperty( "body", nCol, "cssclass", "expr:dataset.getColumn(currow,'PRODUCTDEFNAME')=='소계'? 'cell_linkTxt,cell_bold' : (dataset.getColumn(currow,'PRODUCTDEFNAME')=='총계'? 'cell_linkTxt,cell_bold' : '')" );
        				nCol++;
        			}
        			//trace("z_______________ "+nCol+" || "+i);
        		}

        		//2021-07-12추가함
        		objGrd.insertContentsCol("body", nCol);
        		if(this.nfn_nvl(this.itemGrpSel, "")==''){
        			objGrd.setFormatColProperty(nCol, "size", 80);
        		}else{
        			objGrd.setFormatColProperty(nCol, "size", 0);
        		}
        		objGrd.setCellProperty( "head", nCol, "text", "합계");
        		objGrd.setCellProperty( "head", nCol, "font", "bold 11px/1.1 'Malgun Gothic','맑은 고딕','Arial'");
        		objGrd.setCellProperty( "body", nCol, "text", "bind:G5_TOTALQTY");
        		objGrd.setCellProperty( "body", nCol, "textAlign", "right");
        		objGrd.setCellProperty( "body", nCol, "cssclass", "cell_bold" );
        		nCol++;
        		for(var j = 1; j <= this.ds_itemGroupList.rowcount; j++) {
        			objGrd.insertContentsCol("body", nCol);
        			objGrd.setFormatColProperty(nCol, "size", 80);
        			objGrd.setCellProperty( "head", nCol, "text", this.nfn_nvl(this.ds_itemGroupList.getColumn(j-1, "PRODUCTDEFCLASSGROUPNAME")));
        			objGrd.setCellProperty( "body", nCol, "text", "bind:G5_TYPE"+j+"QTY");
        			objGrd.setCellProperty( "body", nCol, "textAlign", "right");
        			nCol++;
        		}

        		//alert(nCol);
        		for(var i2 = 1; i2 <= 4; i2++) {
        			if(this.nfn_nvl(this.itemGrpSel, "")==''){
        				objGrd.setFormatColProperty(nCol, "size", 80);
        			}else{
        				objGrd.setFormatColProperty(nCol, "size", 0);
        			}
        			objGrd.setCellProperty( "head", nCol, "text", "합계");
        			objGrd.setCellProperty( "head", nCol, "font", "bold 11px/1.1 'Malgun Gothic','맑은 고딕','Arial'");
        			objGrd.setCellProperty( "body", nCol, "textAlign", "right");
        			nCol++;
        			for(var j2 = 1; j2 <= this.ds_itemGroupList.rowcount; j2++) {
        				objGrd.setFormatColProperty(nCol, "size", 80);
        				objGrd.setCellProperty( "head", nCol, "text", this.nfn_nvl(this.ds_itemGroupList.getColumn(j2-1, "PRODUCTDEFCLASSGROUPNAME")));
        				objGrd.setCellProperty( "body", nCol, "textAlign", "right");
        				nCol++;
        			}
        		}

        		//2021-07-12추가함
        		if(this.nfn_nvl(this.itemGrpSel, "")==''){
        			objGrd.setFormatColProperty(nCol, "size", 80);
        		}else{
        			objGrd.setFormatColProperty(nCol, "size", 0);
        		}
        		objGrd.setCellProperty( "head", nCol, "text", "합계");
        		objGrd.setCellProperty( "head", nCol, "font", "bold 11px/1.1 'Malgun Gothic','맑은 고딕','Arial'");
        		objGrd.setCellProperty( "body", nCol, "textAlign", "right");
        		nCol++;
        		for(var j2 = 1; j2 <= this.ds_itemGroupList.rowcount; j2++) {
        			objGrd.setFormatColProperty(nCol, "size", 80);
        			objGrd.setCellProperty( "head", nCol, "text", this.nfn_nvl(this.ds_itemGroupList.getColumn(j2-1, "PRODUCTDEFCLASSGROUPNAME")));
        			objGrd.setCellProperty( "body", nCol, "textAlign", "right");
        			nCol++;
        		}
        	}

        	if(this.ds_itemGroupList.rowcount>0){
        		var nCol = 7+4 * this.ds_itemGroupList.rowcount+4+this.ds_itemGroupList.rowcount+1; //처음에 insert될 위치 :
        		var objGrd = this.tabInputDiv2.grd_detail;
        		for(var i = 5; i >= 1; i--) {
        			nCol--; //total
        			for(var j = this.ds_itemGroupList.rowcount; j >= 1; j--) {
        				nCol--;
        			}
        			nCell = objGrd.mergeContentsCell("head", 0, nCol, 0, nCol+this.ds_itemGroupList.rowcount, nCol+1, false);
        			if(i==5){
        				objGrd.setCellProperty('Head', nCol, "text", "차이 현황");
        			}else if(i==4){
        				objGrd.setCellProperty('Head', nCol, "text", "실적 현황");
        			}else if(i==3){
        				objGrd.setCellProperty('Head', nCol, "text", "예상 부하");
        			}else if(i==2){
        				objGrd.setCellProperty('Head', nCol, "text", "기말 재공");
        			}else if(i==1){
        				objGrd.setCellProperty('Head', nCol, "text", "기초 재공");
        			}
        			objGrd.setCellProperty( "head", nCol, "font", "bold 11px/1.1 'Malgun Gothic','맑은 고딕','Arial'");
        		}
        	}

        	//짝수행 칼라링
        	if(this.ds_itemGroupList.rowcount>0){
        		var nCol = 7 + (5 * this.ds_itemGroupList.rowcount) + 5; //처음에 insert될 위치 :
        		var objGrd = this.tabInputDiv2.grd_detail;
        		for(var i = 5; i >= 1; i--) {
        			nCol--; //total
        			if(i%2==0){ //짝수이면background="#fefff4"
        				objGrd.setCellProperty('body', nCol, "background", "#fefff4"); //여린노랑색
        			}else{
        				objGrd.setCellProperty('body', nCol, "background", "#ffffff");
        			}
        			for(var j = this.ds_itemGroupList.rowcount; j >= 1; j--) {
        				nCol--;
        				if(i%2==0){ //짝수이면background="#fefff4"
        					objGrd.setCellProperty('body', nCol, "background", "#fefff4");
        				}else{
        					objGrd.setCellProperty('body', nCol, "background", "#ffffff");
        				}
        			}
        		}
        	}

        	this.tabInputDiv2.grd_detail.set_enableredraw(true);
        	this.div_work.form.tab_01.Tabpage2.form.grd_detail.set_enableevent(true);
        	this.ds_detail.set_enableevent(true);

        	// 틀고정
        	this.nfn_cellFix(this.tabInputDiv2.grd_detail, 6);
        }

        //해당하는 갯수만큼 안보이게 하기
        this.fn_setColumnHideApply2 = function ()
        {
        	this.tabInputDiv2.grd_detail.set_formats(this.gridFormatStr2);
        	this.tabInputDiv2.grd_detail.set_enableredraw(true);
        	this.resetScroll();
        }
        //###################################################
        //###################################################
        //###################################################
        //###################################################
        //###################################################

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.fn_init,this);
            this.tab_search.Tabpage1.form.Button44_00_01.addEventHandler("onclick",this.div_header_btn_reset2_onclick,this);
            this.tab_search.Tabpage1.form.Button45_00.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.cbo_siteId.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_siteId_onitemchanged,this);
            this.tab_search.Tabpage1.form.edt_product.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_product_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_product.addEventHandler("onclick",this.tab_search_Tabpage1_btn_product_onclick,this);
            this.tab_search.Tabpage1.form.edt_process.addEventHandler("onkeydown",this.tab_00_Tabpage1_edt_process_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_process.addEventHandler("onclick",this.tab_00_Tabpage1_btn_process_onclick,this);
            this.tab_search.Tabpage1.form.edt_receiptor.addEventHandler("onkeydown",this.tab_00_Tabpage1_edt_receiptor_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_receiptor.addEventHandler("onclick",this.tab_00_Tabpage1_btn_receiptor_onclick,this);
            this.div_work.form.tab_01.addEventHandler("onchanged",this.div_00_tab_01_onchanged,this);
            this.div_work.form.tab_01.Tabpage1.form.grd_summary.addEventHandler("oncellclick",this.div_00_tab_01_Tabpage1_grd_summary_oncellclick,this);
            this.div_work.form.tab_01.Tabpage1.form.grd_summary.addEventHandler("oncelldblclick",this.div_00_tab_01_Tabpage1_grd_summary_oncelldblclick,this);
            this.div_work.form.tab_01.Tabpage2.form.grd_detail.addEventHandler("oncellclick",this.div_00_tab_01_Tabpage2_grd_detail_oncellclick,this);
            this.div_header.form.btn_reset.addEventHandler("onclick",this.fn_searchClear,this);
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_new.addEventHandler("onclick",this.fn_new,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("MFM00501M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
