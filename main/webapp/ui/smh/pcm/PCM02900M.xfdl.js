(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM02900M");
            this.set_titletext("재작업 LOT 투입");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_LotInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"DUEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STEPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISREWORK\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKCOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Resource", this);
            obj._setContents("<ColumnInfo><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRIMARYRESOURCE\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ResourceReturn", this);
            obj._setContents("<ColumnInfo><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRIMARYRESOURCE\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ReworkRouting", this);
            obj._setContents("<ColumnInfo><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CurrentRouting", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAYSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVELOTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"STARTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"ENDLOTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"SENDLOTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PATHSEQUENCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_header","0","0",null,"47","2",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("StaticTitle","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
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

            obj = new Button("btn_save",null,"16","26","24","btn_help:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","106","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_text("포장사양관리");
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

            obj = new Static("StaGuideTop","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);

            obj = new Div("div_work","0","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","0","10",null,"42","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_search");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("staLOTID","0","10","5.5%","20",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("LOTID");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","10",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("5");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"9","24","24","10",null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_SA_reset2");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_LOTID","staLOTID:10","10","200","20",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            obj.set_text("1025149H4");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"9","62","24","btn_reset:5",null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("SEARCH");
            obj.set_hotkey("F2");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Grid("grdLotInfo","0","52",null,"85","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_fillareatype("allrow");
            obj.set_cssclass("grd_detail_Master");
            obj.set_selecttype("cell");
            obj.set_scrollbartype("none");
            obj.set_scrolltype("none");
            obj.set_binddataset("ds_LotInfo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"87\"/><Column size=\"170\"/><Column size=\"100\"/><Column size=\"170\"/><Column size=\"102\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"21\"/><Row size=\"21\"/><Row size=\"21\"/><Row size=\"21\"/></Rows><Band id=\"body\"><Cell cssclass=\"cell_head\" text=\"Lot No.\" wordWrap=\"char\" textAlign=\"left\"/><Cell col=\"1\" textAlign=\"left\" text=\"bind:LOTID\"/><Cell col=\"2\" cssclass=\"cell_head\" text=\"이전공정명\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"PREVPROCESSSEGMENTNAME\"/><Cell col=\"3\" textAlign=\"left\" text=\"bind:PREVPROCESSSEGMENTNAME\"/><Cell col=\"4\" cssclass=\"cell_head\" text=\"공정명\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"5\" textAlign=\"left\" text=\"bind:PROCESSSEGMENTNAME\"/><Cell col=\"6\" cssclass=\"cell_head\" text=\"후공정\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"NEXTPROCESSSEGMENTNAME \"/><Cell col=\"7\" textAlign=\"left\" text=\"bind:NEXTPROCESSSEGMENTNAME\"/><Cell col=\"8\" cssclass=\"cell_head\" text=\"공정수순\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"USERSEQUENCE \"/><Cell col=\"9\" textAlign=\"left\" text=\"bind:USERSEQUENCE\"/><Cell row=\"1\" cssclass=\"cell_head\" text=\"품목코드\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"ITEMID\"/><Cell row=\"1\" col=\"1\" textAlign=\"left\" text=\"bind:PRODUCTDEFID\"/><Cell row=\"1\" col=\"2\" cssclass=\"cell_head\" text=\"품목명\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"ITEMNAME\"/><Cell row=\"1\" col=\"3\" textAlign=\"left\" text=\"bind:PRODUCTDEFNAME\"/><Cell row=\"1\" col=\"4\" cssclass=\"cell_head\" text=\"투입일자\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"INPUTDATE\"/><Cell row=\"1\" col=\"5\" textAlign=\"left\" text=\"bind:INPUTDATE\"/><Cell row=\"1\" col=\"6\" cssclass=\"cell_head\" text=\"S/O번호\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"PRODUCTIONORDERID \"/><Cell row=\"1\" col=\"7\" textAlign=\"left\" text=\"bind:PRODUCTIONORDERID\"/><Cell row=\"1\" col=\"8\" cssclass=\"cell_head\" text=\"납기일\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"DUEDATE \"/><Cell row=\"1\" col=\"9\" textAlign=\"left\" text=\"bind:DUEDATE\"/><Cell row=\"2\" cssclass=\"cell_head\" text=\"품목유형구분\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"PRODUCTDEFTYPE\"/><Cell row=\"2\" col=\"1\" textAlign=\"left\" text=\"bind:PRODUCTDEFTYPE\"/><Cell row=\"2\" col=\"2\" cssclass=\"cell_head\" text=\"작업장\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"AREA \"/><Cell row=\"2\" col=\"3\" textAlign=\"left\" text=\"bind:AREANAME\"/><Cell row=\"2\" col=\"4\" cssclass=\"cell_head\" text=\"고객명\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"CUSTOMERNAME\"/><Cell row=\"2\" col=\"5\" textAlign=\"left\" text=\"bind:CUSTOMERNAME\"/><Cell row=\"2\" col=\"6\" cssclass=\"cell_head\" text=\"단위\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"UNIT\"/><Cell row=\"2\" col=\"7\" textAlign=\"left\" text=\"bind:UNIT\"/><Cell row=\"2\" col=\"8\" cssclass=\"cell_head\" text=\"수량(PNL)\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"PANELQTY\"/><Cell row=\"2\" col=\"9\" textAlign=\"left\" text=\"bind:PNLQTY\"/><Cell row=\"3\" cssclass=\"cell_head\" wordWrap=\"char\" textAlign=\"left\" text=\"수량(PCS)\" tooltiptext=\"PCSQTY \"/><Cell row=\"3\" col=\"1\" textAlign=\"left\" text=\"bind:PCSQTY\"/><Cell row=\"3\" col=\"2\" cssclass=\"cell_head\" text=\"MM\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"MM\"/><Cell row=\"3\" col=\"3\" textAlign=\"left\" text=\"bind:MM\"/><Cell row=\"3\" col=\"4\" cssclass=\"cell_head\" wordWrap=\"char\" textAlign=\"left\" text=\"생산구분\" tooltiptext=\"PRODUCTIONTYPE\"/><Cell row=\"3\" col=\"5\" textAlign=\"left\" text=\"bind:PRODUCTIONTYPE\"/><Cell row=\"3\" col=\"6\" cssclass=\"cell_head\"/><Cell row=\"3\" col=\"7\" textAlign=\"left\"/><Cell row=\"3\" col=\"8\" cssclass=\"cell_head\" wordWrap=\"char\" textAlign=\"left\" text=\" \"/><Cell row=\"3\" col=\"9\" textAlign=\"left\" text=\" \"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_ReworkRouting","0","grdLotInfo:10","49%",null,null,"0",null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("div_00");
            obj.set_cssclass("div_WF_detail");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_ReworkRouting","6","105",null,null,"7","1",null,null,null,null,this.div_work.form.div_ReworkRouting.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_ReworkRouting");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"71\"/><Column size=\"170\"/><Column size=\"214\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"공정순서\"/><Cell col=\"1\" text=\"공정수순\"/><Cell col=\"2\" text=\"공정명\"/><Cell col=\"3\" text=\"자원명\"/></Band><Band id=\"body\"><Cell text=\"bind:PATHSEQUENCE\"/><Cell col=\"1\" text=\"bind:USERSEQUENCE\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:RESOURCENAME\" edittype=\"normal\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.form.div_ReworkRouting.addChild(obj.name, obj);

            obj = new Combo("cbo_Resource","87","9","250","20",null,null,null,null,null,null,this.div_work.form.div_ReworkRouting.form);
            obj.set_taborder("1");
            obj.set_codecolumn("RESOURCEID");
            obj.set_innerdataset("ds_Resource");
            obj.set_datacolumn("RESOURCENAME");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.div_work.form.div_ReworkRouting.addChild(obj.name, obj);

            obj = new Static("staResource","9","8","68","20",null,null,null,null,null,null,this.div_work.form.div_ReworkRouting.form);
            obj.set_taborder("2");
            obj.set_text("대상 자원");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("TARGETRESOURCE");
            this.div_work.form.div_ReworkRouting.addChild(obj.name, obj);

            obj = new Static("staREWORKROUTING","-1","74","107","20",null,null,null,null,null,null,this.div_work.form.div_ReworkRouting.form);
            obj.set_taborder("3");
            obj.set_text("재작업 라우팅");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("TARGETRESOURCE");
            this.div_work.form.div_ReworkRouting.addChild(obj.name, obj);

            obj = new Static("sta_title","5","36",null,"31","35.95%",null,null,null,null,null,this.div_work.form.div_ReworkRouting.form);
            obj.set_taborder("4");
            obj.set_text("재작업 라우팅");
            obj.set_cssclass("sta_WF_subTitle3");
            obj.set_tooltiptext("SELECTREWORKROUTING");
            this.div_work.form.div_ReworkRouting.addChild(obj.name, obj);

            obj = new Edit("edt_REWORKROUTING","108","74","200","20",null,null,null,null,null,null,this.div_work.form.div_ReworkRouting.form);
            obj.set_taborder("5");
            this.div_work.form.div_ReworkRouting.addChild(obj.name, obj);

            obj = new Button("btn_REWORKROUTING","edt_REWORKROUTING:0","74","22","20",null,null,null,null,null,null,this.div_work.form.div_ReworkRouting.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.div_ReworkRouting.addChild(obj.name, obj);

            obj = new Edit("edt_RoutingVersion","btn_REWORKROUTING:4","74","44","20",null,null,null,null,null,null,this.div_work.form.div_ReworkRouting.form);
            obj.set_taborder("7");
            obj.set_enable("false");
            this.div_work.form.div_ReworkRouting.addChild(obj.name, obj);

            obj = new CheckBox("ckb_PRODUCTROUTING","edt_RoutingVersion:10","74","120","20",null,null,null,null,null,null,this.div_work.form.div_ReworkRouting.form);
            obj.set_taborder("8");
            obj.set_text("품목 라우팅");
            obj.set_tooltiptext("PRODUCTROUTING");
            this.div_work.form.div_ReworkRouting.addChild(obj.name, obj);

            obj = new Edit("edt_REWORKNUMBER","298","44",null,"20","179",null,null,null,null,null,this.div_work.form.div_ReworkRouting.form);
            obj.set_taborder("9");
            obj.set_visible("false");
            this.div_work.form.div_ReworkRouting.addChild(obj.name, obj);

            obj = new Div("div_CurrentRouting","div_ReworkRouting:4","grdLotInfo:10",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_text("div_00");
            obj.set_cssclass("div_WF_detail");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_CurrentRouting","6","66",null,null,"7","0",null,null,null,null,this.div_work.form.div_CurrentRouting.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_CurrentRouting");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"38\"/><Column size=\"85\"/><Column size=\"310\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"공정순서\"/><Cell col=\"1\"/><Cell col=\"2\" text=\"공정수순\"/><Cell col=\"3\" text=\"공정명\"/></Band><Band id=\"body\"><Cell text=\"bind:PATHSEQUENCE\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:USERSEQUENCE\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.form.div_CurrentRouting.addChild(obj.name, obj);

            obj = new Combo("cbo_ResourceReturn","139","9","250","20",null,null,null,null,null,null,this.div_work.form.div_CurrentRouting.form);
            obj.set_taborder("1");
            obj.set_codecolumn("RESOURCEID");
            obj.set_innerdataset("ds_ResourceReturn");
            obj.set_datacolumn("RESOURCENAME");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.div_work.form.div_CurrentRouting.addChild(obj.name, obj);

            obj = new Static("staResourceReturn","9","8","120","20",null,null,null,null,null,null,this.div_work.form.div_CurrentRouting.form);
            obj.set_taborder("2");
            obj.set_text("재작업 후 대상자원");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("RETARGETRESOURCE");
            this.div_work.form.div_CurrentRouting.addChild(obj.name, obj);

            obj = new Static("sta_title","7","33",null,"31","32.26%",null,null,null,null,null,this.div_work.form.div_CurrentRouting.form);
            obj.set_taborder("3");
            obj.set_text("재작업 후 공정");
            obj.set_cssclass("sta_WF_subTitle3");
            obj.set_tooltiptext("SELECTREWORKROUTING");
            this.div_work.form.div_CurrentRouting.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_work.form.div_search.form.edt_LOTID","value","ds_search","LOTID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM02900M.xfdl","lib::lib_base.xjs");
        this.addIncludeScript("PCM02900M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM02900M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PCM02900M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 재작업 LOT 투입
         * 파일명 		: PCM02900M.xfdl
         * 작성자 		: 김애리
         * 작성일 		: 2021.5.21
         * AS-IS		: ReworkLotInput
         * 설  명		:
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.5.21	김애리   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
         this.executeIncludeScript("lib::lib_base.xjs"); /*include "lib::lib_base.xjs"*/;
         this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
         this.executeIncludeScript("pcm::pcmCommon.xjs"); /*include "pcm::pcmCommon.xjs"*/; //pcm 에서 사용하는 공통

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/


        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
         this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	//this.fn_initDatePicker(); //fn_callback 로 감.

        	this.ds_search.set_rowposition(0);
        	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0, "PLANTID",this.gf_getSiteType());
        	this.ds_search.setColumn(0, "LANGUAGETYPE",this.gf_getLanguageType());

        	//this.fn_initCombo();
        };


        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.GetLotInfo();
        };


        this.fn_searchValidate = function ()
        {
        	var component = this.div_work.form.div_search;
        	var strColIdList = "edt_LOTID";
        	var strColNmList = "LOTID";
        	return this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        };

        this.fn_save = function (obj, e)
        {
        	if(this.fn_saveValidate() == false) return;

        	var	ProcessDefId              ;
        	var	ProcessDefVersion         ;
        	var	ProcessSegmentId          ;
        	var	ProcessSegmentName        ;
        	var	ProcessPathId             ;
        	var	UserSequence              ;
        	var	PathSequence              ;
        	var	ResourceId                ;
        	var	ResourceName              ;
        		// Return 공정
        	var	ReturnProcessSegmentId    ;
        	var	ReturnPathSequence        ;
            var AreaId					  ;
        	var ReturnAreaId			  ;
        	var	ReturnPathId              ;
        	var	ReturnResourceId          ;
        	var	ReturnResourceName        ;

        	var ToResourceId ;
        	var ToProcessPathId ;
        	var ToAreaId ;

        	var	ReworkType                ;

        	var rRow = this.ds_Resource.findRow("RESOURCEID",this.div_work.form.div_ReworkRouting.form.cbo_Resource.value);

        	// 품목 Routing 인경우
        	if(this.div_work.form.div_ReworkRouting.form.ckb_PRODUCTROUTING.value=="1")
        	{
        		ReworkProcessDefId = this.ds_ReworkRouting.getColumn(this.ds_ReworkRouting.rowposition,"PROCESSDEFID");
        		ReworkProcessDefVersion = this.ds_ReworkRouting.getColumn(this.ds_ReworkRouting.rowposition,"PROCESSDEFVERSION");
        		ReturnProcessPathId = this.ds_ReworkRouting.getColumn(this.ds_ReworkRouting.rowposition,"PROCESSPATHID");
        		ReworkUserSequence = this.ds_ReworkRouting.getColumn(this.ds_ReworkRouting.rowposition,"USERSEQUENCE");
        		ReworkPathSequence = this.ds_ReworkRouting.getColumn(this.ds_ReworkRouting.rowposition,"PATHSEQUENCE");
        		ReworkProcessSegmentId = this.ds_ReworkRouting.getColumn(this.ds_ReworkRouting.rowposition,"PROCESSSEGMENTID");
        		ReworkProcessSegmentName = this.ds_ReworkRouting.getColumn(this.ds_ReworkRouting.rowposition,"PROCESSSEGMENTNAME");
        		ReworkProcessPathId = this.ds_ReworkRouting.getColumn(this.ds_ReworkRouting.rowposition,"PROCESSPATHID");

        		ReworkType = "PRODUCT";
        	}
        	else
        	{
        		ReworkProcessDefId = this.div_work.form.div_ReworkRouting.form.edt_REWORKNUMBER.value;
        		ReworkProcessDefVersion = this.div_work.form.div_ReworkRouting.form.edt_RoutingVersion.value;
        		ReturnProcessPathId = this.ds_CurrentRouting.getColumn(this.ds_CurrentRouting.rowposition,"PROCESSPATHID");
        		ReturnProcessSegmentId = this.ds_CurrentRouting.getColumn(this.ds_CurrentRouting.rowposition,"PROCESSSEGMENTID");
        		ReturnPathSequence = this.ds_CurrentRouting.getColumn(this.ds_CurrentRouting.rowposition,"PATHSEQUENCE");

        		var retRow = this.ds_ResourceReturn.findRow("RESOURCEID",this.div_work.form.div_CurrentRouting.form.cbo_ResourceReturn.value);

        		ReturnAreaId =  this.ds_ResourceReturn.getColumn(retRow,"AREAID");
        		ReturnResourceId = this.div_work.form.div_CurrentRouting.form.cbo_ResourceReturn.value;
        		ReturnResourceName = this.div_work.form.div_CurrentRouting.form.cbo_ResourceReturn.text;
        		ToResourceId = this.div_work.form.div_ReworkRouting.form.cbo_Resource.value;
        		ToResourceName = this.div_work.form.div_ReworkRouting.form.cbo_Resource.text;

        		ToAreaId = this.ds_Resource.getColumn(rRow,"AREAID");
        		ToProcessPathId = this.ds_ReworkRouting.getColumn(this.ds_ReworkRouting.rowposition,"PROCESSPATHID");
        		ReworkUserSequence = this.ds_ReworkRouting.getColumn(this.ds_ReworkRouting.rowposition,"USERSEQUENCE");
        		ReworkPathSequence = this.ds_ReworkRouting.getColumn(this.ds_ReworkRouting.rowposition,"PATHSEQUENCE");
        		ReworkProcessSegmentId = this.ds_ReworkRouting.getColumn(this.ds_ReworkRouting.rowposition,"PROCESSSEGMENTID");
        		ReworkProcessSegmentName = this.ds_ReworkRouting.getColumn(this.ds_ReworkRouting.rowposition,"PROCESSSEGMENTNAME");
        		ReworkProcessPathId = this.ds_ReworkRouting.getColumn(this.ds_ReworkRouting.rowposition,"PROCESSPATHID");

        		ReworkType = "REWORK";
        	}

        	ResourceId = this.div_work.form.div_ReworkRouting.form.cbo_Resource.value;
        	ResourceName = this.div_work.form.div_ReworkRouting.form.cbo_Resource.text;
        	AreaId = this.ds_Resource.getColumn(rRow,"AREAID");

        	this.ds_temp.clear();
        	this.pfn_DatasetAddColumn(this.ds_temp, "lotid,reworkprocessdefid,reworkprocessdefversion"
        							+ ",returnprocesspathid,returnresourceid,returnareaid,resourceid,areaid"
        							+ ",toresourceid,toprocesspathid,toareaid,enterpriseid,plantid,isproductrouting");

        	this.ds_temp.setColumn(0, "lotid", this.ds_LotInfo.getColumn(0,"LOTID"));
        	this.ds_temp.setColumn(0, "reworkprocessdefid", ReworkProcessDefId);
        	this.ds_temp.setColumn(0, "reworkprocessdefversion", ReworkProcessDefVersion);
        	this.ds_temp.setColumn(0, "returnprocesspathid", ReturnProcessPathId);
        	this.ds_temp.setColumn(0, "returnresourceid", ReturnResourceId);
        	this.ds_temp.setColumn(0, "returnareaid", ReturnAreaId);
        	this.ds_temp.setColumn(0, "resourceid", ResourceId);
        	this.ds_temp.setColumn(0, "areaid", AreaId);
        	this.ds_temp.setColumn(0, "toresourceid", ToResourceId);
        	this.ds_temp.setColumn(0, "toprocesspathid", ToProcessPathId);
        	this.ds_temp.setColumn(0, "toareaid", ToAreaId);
        	this.ds_temp.setColumn(0, "enterpriseid", this.gf_getEnterpriseId());
        	this.ds_temp.setColumn(0, "plantid", this.gf_getSiteType());
        	this.ds_temp.setColumn(0, "isproductrouting", this.div_work.form.div_ReworkRouting.form.ckb_PRODUCTROUTING.value=="1" ? "Y" : "N");

        	var sSvcID 			= "saveLotRework";
        	var sController 	= "/pcm02900/saveLotRework.do";
        	var sInDatasets 	= "ds_temp=ds_temp ds_LotInfo=ds_LotInfo";
        	var sOutDatasets 	= "ds_result=output";
        	var sArgs 			= "";

        	trace(this.ds_temp.saveXML());

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);


        	//돌아와서 Print 해야함. this.mfn_PrintLotCard();
        };

        this.fn_saveValidate = function ()
        {
        	if(this.gfn_isNull(this.ds_LotInfo.getColumn(0,"LOTID"))){
        		this.gfn_Message("NotExistLot", "", "info", "ok");// 해당 Lot이 존재하지 않습니다. {0}
        		return false;
        	}
        	if(this.div_work.form.div_ReworkRouting.form.ckb_PRODUCTROUTING.value!="1"){
        		if(this.gfn_isNull(this.div_work.form.div_ReworkRouting.form.edt_REWORKNUMBER.value)){
        			this.gfn_Message("ReworkRoutingValidation", "", "info", "ok");// 재작업 라우팅을 선택 해주세요.
        			this.div_work.form.div_ReworkRouting.form.edt_REWORKNUMBER.setFocus();
        			return false;
        		}
        		if(this.ds_CurrentRouting.findRow("CHK","1")<0){
        			this.gfn_Message("ReturnProcessPathValidation", "", "info", "ok");// 재작업 후 공정을 선택 해주세요.
        			return false;
        		}

        		if(this.gfn_isNull(this.div_work.form.div_CurrentRouting.form.cbo_ResourceReturn.value) || !this.div_work.form.div_CurrentRouting.form.cbo_ResourceReturn.enable){
        			this.gfn_Message("NoResourceSelected", "", "info", "ok");// 선택된 자원이 없습니다.
        			this.div_work.form.div_CurrentRouting.form.cbo_ResourceReturn.setFocus();
        			return false;
        		}
        	}else{
        		if(this.ds_ReworkRouting.rowcount==0){
        			this.gfn_Message("StartProcessPathValidation", "", "info", "ok");// 시작 공정을 선택 해주세요.
        			return false;
        		}

        	}

        	if(this.gfn_isNull(this.div_work.form.div_ReworkRouting.form.cbo_Resource.value) || !this.div_work.form.div_ReworkRouting.form.cbo_Resource.enable){
        		this.gfn_Message("NoResourceSelected", "", "info", "ok");// 선택된 자원이 없습니다.
        		this.div_work.form.div_ReworkRouting.form.cbo_Resource.setFocus();
        		return false;
        	}

        	return true;
        };



         /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        trace('fn_callBack trId ?' + trId);
        	if (errCD < 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        		return;
        	}
        	{
        		switch(trId) {
        		case "selectLotInfoBylotID" :
        		{
        			if(this.ds_LotInfo.rowcount > 0 )
        			{
        				if(this.ds_LotInfo.getColumn(0,"ISREWORK") == "Y") {
        					this.gfn_Message("LotAlreadyIsRework", "", "info", "ok");// 재작업중인 LOT을 다시 재작업 할 수 없습니다.
        					this.ds_LotInfo.clearData();
        				} else if(this.ds_LotInfo.getColumn(0,"PROCESSSTATE") == "Run") {
        					this.gfn_Message("LotProcessStateIsRun", this.ds_LotInfo.getColumn(0,"LOTID"), "info", "ok");// 공정진행 상태가 Run인 LOT은 재작업 할 수 없습니다. {0}
        					this.ds_LotInfo.clearData();
        				} else if(this.ds_LotInfo.getColumn(0,"ISHOLD") == "Y") {
        					this.gfn_Message("LotIsHold", this.ds_LotInfo.getColumn(0,"LOTID"), "info", "ok"); // 보류 상태의 Lot 입니다. {0}
        					this.ds_LotInfo.clearData();
        				} else {
        					this.fn_SearchCurrentRouting();
        				}
        			} else {
        				this.gfn_Message("NotExistLot", "", "info", "ok");// 해당 Lot이 존재하지 않습니다. {0}
        			}
        			break;
        		}
        		case "GetCurrentRoutingByLot" :
        		{
        			this.ds_CurrentRouting.setColumn(0,"CHK","1");
        			this.fn_RefreshResource();
        			this.fn_RefreshResourceReturn();
        			break;
        		}
        		case "SelectReworkRoutingResource10002" :
        		{
        			this.div_work.form.div_ReworkRouting.form.cbo_Resource.set_enable(true);
        // 			if(this.ds_Resource.rowcount==2){
        // 				this.div_work.form.div_ReworkRouting.form.cbo_Resource.set_index(1);
        // 			}else{
        				var nRow = this.ds_Resource.findRow("ISPRIMARYRESOURCE","Y");
        				this.div_work.form.div_ReworkRouting.form.cbo_Resource.set_index(nRow);
        			//}
        			break;
        		}
        		case "SelectReworkRoutingResource" :
        		{
        			//현재 LotInfo 에 있는 자원으로 변경함. by 노석안 2021.07.29
        			var resourceID = this.ds_LotInfo.getColumn(0,"RESOURCEID");
        			if(this.nfn_isNull(resourceID) == false)
        			{
        				var nRow = this.ds_ResourceReturn.findRow("RESOURCEID",resourceID);
        				this.div_work.form.div_CurrentRouting.form.cbo_ResourceReturn.set_index(nRow);
        			}


        // 			if(this.ds_ResourceReturn.rowcount==2){
        // 				this.div_work.form.div_CurrentRouting.form.cbo_ResourceReturn.set_index(1);
        // 			}else{
        // 				var nRow = this.ds_ResourceReturn.findRow("ISPRIMARYRESOURCE","Y");
        // 				this.div_work.form.div_CurrentRouting.form.cbo_ResourceReturn.set_index(nRow);
        // 			}
        			break;
        		}
        		case "GetProcessPathList" :
        		{
        			this.fn_RefreshResource();
        			break;
        		}
        		case "GetProductRoutingPreviousProcessPaths" :
        		{
        			this.div_work.form.div_ReworkRouting.form.ckb_PRODUCTROUTING.set_enable(true);
        			this.fn_RefreshResource();
        			break;
        		}
        		case "saveLotRework" :
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			if(this.div_work.form.div_ReworkRouting.form.ckb_PRODUCTROUTING.value != "1" ) this.mfn_PrintLotCard();
        			break;
        		}

        		default:
        		}
        	}
        };




        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        /*
         *	기능 : 팝업 관련
         */
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "REWORKROUTING")
        	{
        		this.div_work.form.div_ReworkRouting.form.edt_REWORKNUMBER.set_value(rtn[0]);
        		this.div_work.form.div_ReworkRouting.form.edt_REWORKROUTING.set_value(rtn[2]);
        		this.div_work.form.div_ReworkRouting.form.edt_RoutingVersion.set_value(rtn[1]);

        		this.div_work.form.div_ReworkRouting.form.cbo_Resource.set_enable(true);
        		this.div_work.form.div_CurrentRouting.form.cbo_ResourceReturn.set_enable(true);

        		this.fn_RefreshReworkRoutingPath(rtn[0],rtn[1]);
        	}
        };

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        this.GetLotInfo = function ()
        {
        	this.div_work.form.div_ReworkRouting.form.ckb_PRODUCTROUTING.set_value("0");
        	this.div_work.form.div_ReworkRouting.form.edt_REWORKROUTING.set_value("");

        	this.ds_LotInfo.clearData();
        	this.ds_Resource.clearData();//좌측 대상자원
        	this.ds_ResourceReturn.clearData();//우측 대상자원
        	this.ds_ReworkRouting.clearData();
        	this.ds_CurrentRouting.clearData();

        	if(this.fn_searchValidate() == false) return;
        	this.ds_search.setColumn(0,"LOTID",this.div_work.form.div_search.form.edt_LOTID.value);

        	var sSvcID 			= "selectLotInfoBylotID";
        	var sController 	= "/pcm02900/selectLotInfoBylotID.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_LotInfo=ds_LotInfo";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.fn_RefreshResource = function()
        {
        	if(this.ds_ReworkRouting.rowcount==0){
        		this.div_work.form.div_ReworkRouting.form.cbo_Resource.set_value("");
        		this.div_work.form.div_ReworkRouting.form.cbo_Resource.set_enable(false);
        		this.div_work.form.div_ReworkRouting.form.ckb_PRODUCTROUTING.set_enable(true);
        	}else{
        		if(this.div_work.form.div_ReworkRouting.form.ckb_PRODUCTROUTING.value=="1"){
        			if(this.ds_ReworkRouting.rowcount==0){
        				this.div_work.form.div_ReworkRouting.form.cbo_Resource.set_value("");
        				this.div_work.form.div_ReworkRouting.form.cbo_Resource.set_enable(false);
        			}else{

        				this.ds_temp.clear();
        				this.pfn_DatasetAddColumn(this.ds_temp, "PRODUCTDEFID,PRODUCTDEFVERSION,PROCESSDEFID,PROCESSDEFVERSION,PROCESSPATHID,PROCESSDEFTYPE");

        				this.ds_temp.setColumn(0, "PRODUCTDEFID", this.ds_LotInfo.getColumn(0,"PRODUCTDEFID"));
        				this.ds_temp.setColumn(0, "PRODUCTDEFVERSION", this.ds_LotInfo.getColumn(0,"PRODUCTDEFVERSION"));
        				this.ds_temp.setColumn(0, "PROCESSDEFID", this.ds_ReworkRouting.getColumn(this.ds_ReworkRouting.rowposition,"PROCESSDEFID"));
        				this.ds_temp.setColumn(0, "PROCESSDEFVERSION", this.ds_ReworkRouting.getColumn(this.ds_ReworkRouting.rowposition,"PROCESSDEFVERSION"));
        				this.ds_temp.setColumn(0, "PROCESSPATHID", this.ds_ReworkRouting.getColumn(this.ds_ReworkRouting.rowposition,"PROCESSPATHID"));
        				this.ds_temp.setColumn(0, "PROCESSDEFTYPE", "Main");

        				var sSvcID = "SelectReworkRoutingResource10002";
        				var sController = "/pcm04500/SelectReworkRoutingResource10002.do";
        				var sInDatasets = "INPUT=ds_temp";
        				var sOutDatasets = "ds_Resource=output";
        				var sArgs = "";
        				this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        			}
        		}else{
        				this.ds_temp.clear();
        				this.pfn_DatasetAddColumn(this.ds_temp, "PRODUCTDEFID,PRODUCTDEFVERSION,PROCESSDEFID,PROCESSDEFVERSION,PROCESSPATHID,PROCESSDEFTYPE");

        				this.ds_temp.setColumn(0, "PRODUCTDEFID", this.ds_LotInfo.getColumn(0,"PRODUCTDEFID"));
        				this.ds_temp.setColumn(0, "PRODUCTDEFVERSION", this.ds_LotInfo.getColumn(0,"PRODUCTDEFVERSION"));
        				this.ds_temp.setColumn(0, "PROCESSDEFID", this.ds_ReworkRouting.getColumn(this.ds_ReworkRouting.rowposition,"PROCESSDEFID"));
        				this.ds_temp.setColumn(0, "PROCESSDEFVERSION", this.ds_ReworkRouting.getColumn(this.ds_ReworkRouting.rowposition,"PROCESSDEFVERSION"));
        				this.ds_temp.setColumn(0, "PROCESSDEFTYPE", "Rework");

        				var sSvcID = "SelectReworkRoutingResource10002";
        				var sController = "/pcm04500/SelectReworkRoutingResource10002.do";
        				var sInDatasets = "INPUT=ds_temp";
        				var sOutDatasets = "ds_Resource=output";
        				var sArgs = "";
        				this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        		}
        	}
        };

        this.fn_RefreshReworkRoutingPath = function(ProcessDefid, ProcessDefVersion)
        {
        	this.ds_temp.clear();
        	this.pfn_DatasetAddColumn(this.ds_temp, "PROCESSDEFID,PROCESSDEFVERSION,PROCESSDEFTYPE");

        	this.ds_temp.setColumn(0, "PROCESSDEFID", ProcessDefid);
        	this.ds_temp.setColumn(0, "PROCESSDEFVERSION", ProcessDefVersion);
        	this.ds_temp.setColumn(0, "PROCESSDEFTYPE", "Rework");

        	var sSvcID = "GetProcessPathList";
        	var sController = "/pcm04500/GetProcessPathList.do";
        	var sInDatasets = "INPUT=ds_temp";
        	var sOutDatasets = "ds_ReworkRouting=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.fn_SearchCurrentRouting = function()
        {
        	var sSvcID = "GetCurrentRoutingByLot";
        	var sController = "/pcm04500/GetCurrentRoutingByLot.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_CurrentRouting=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };

        this.fn_RefreshResourceReturn = function()
        {
        	if(this.ds_CurrentRouting.rowcount==0 || this.div_work.form.div_ReworkRouting.form.ckb_PRODUCTROUTING.value=="1"){
        		this.div_work.form.div_CurrentRouting.form.cbo_ResourceReturn.set_value("");
        		this.div_work.form.div_CurrentRouting.form.cbo_ResourceReturn.set_enable(true);
        	}else{
        		if(this.ds_CurrentRouting.findRow("CHK","1")<0){
        			this.div_work.form.div_CurrentRouting.form.cbo_ResourceReturn.set_value("");
        			this.div_work.form.div_CurrentRouting.form.cbo_ResourceReturn.set_enable(false);

        		}else{

        			this.ds_temp.clear();
        			this.pfn_DatasetAddColumn(this.ds_temp, "PRODUCTDEFID,PRODUCTDEFVERSION,PROCESSDEFID,PROCESSDEFVERSION,PROCESSPATHID");

        			this.ds_temp.setColumn(0, "PRODUCTDEFID", this.ds_LotInfo.getColumn(0,"PRODUCTDEFID"));
        			this.ds_temp.setColumn(0, "PRODUCTDEFVERSION", this.ds_LotInfo.getColumn(0,"PRODUCTDEFVERSION"));
        			this.ds_temp.setColumn(0, "PROCESSDEFID", this.ds_CurrentRouting.lookup("CHK","1","PROCESSDEFID"));
        			this.ds_temp.setColumn(0, "PROCESSDEFVERSION", this.ds_CurrentRouting.lookup("CHK","1","PROCESSDEFVERSION"));
        			this.ds_temp.setColumn(0, "PROCESSPATHID", this.ds_CurrentRouting.lookup("CHK","1","PROCESSPATHID"));

        			var sSvcID = "SelectReworkRoutingResource";
        			var sController = "/pcm04500/SelectReworkRoutingResource.do";
        			var sInDatasets = "INPUT=ds_temp";
        			var sOutDatasets = "ds_ResourceReturn=output";
        			var sArgs = "";
        			this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        		}
        	}

        };

        this.fn_SearchRoutings = function()
        {
        	this.ds_CurrentRouting.clearData();
        	this.ds_ReworkRouting.clearData();
        	this.div_work.form.div_ReworkRouting.form.edt_REWORKROUTING.set_enable(true);
        	this.div_work.form.div_ReworkRouting.form.btn_REWORKROUTING.set_enable(true);

        	this.div_work.form.div_CurrentRouting.form.cbo_ResourceReturn.set_enable(true);

        	if(this.div_work.form.div_ReworkRouting.form.ckb_PRODUCTROUTING.value=="1"){
        		this.div_work.form.div_ReworkRouting.form.edt_REWORKNUMBER.set_value("");
        		this.div_work.form.div_ReworkRouting.form.edt_REWORKROUTING.set_value("");
        		this.div_work.form.div_ReworkRouting.form.edt_RoutingVersion.set_value("");
        		this.div_work.form.div_ReworkRouting.form.edt_REWORKROUTING.set_enable(false);
        		this.div_work.form.div_ReworkRouting.form.btn_REWORKROUTING.set_enable(false);
        		this.div_work.form.div_CurrentRouting.form.cbo_ResourceReturn.set_enable(false);

        		var sSvcID = "GetProductRoutingPreviousProcessPaths";
        		var sController = "/pcm04500/GetProductRoutingPreviousProcessPaths.do";
        		var sInDatasets = "INPUT=ds_search";
        		var sOutDatasets = "ds_ReworkRouting=output";
        		var sArgs = "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        	}else{
        		//this.div_work.form.div_ReworkRouting.form.ckb_PRODUCTROUTING.set_enable(false);
        		this.fn_SearchCurrentRouting();
        		//this.fn_RefreshResource();
        		//this.fn_RefreshResourceReturn();
        	}

        };

        this.mfn_PrintLotCard = function ()
        {
        	var languageType 	= this.gf_getLanguageType();
        	var title 			= this.nfn_nvl(this.nfn_getDictionarynameUpper("LOTCARDPRINT"),"LOT Card 출력");


        	var oArg = {
        		sRptPath   : "/pcm/",
        		sRptName   : "PCM02900R.mrd",
        		strField   :   "[" + this.ds_LotInfo.getColumn(0,"LOTID")
        					+ "][" + languageType
        					+ "][" + this.ds_LotInfo.getColumn(0,"LOTID")  + "|" + this.nfn_nvl(this.nfn_getDictionarynameUpper("REWORK"),"재작업")
        					+  "]",
        		bModalless : false
        	};

        	var sOption = "titletext="+title+",modeless=false";
        	this.gfn_reportPopup("reportViewer", "common::com_report.xfdl", oArg, sOption);
        };


        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.div_work_div_ReworkRouting_edt_REWORKROUTING_onchanged = function(obj,e)
        {
        	if(this.gfn_isNull(e.postvalue) && this.div_work.form.div_ReworkRouting.form.ckb_PRODUCTROUTING.value!="1"){
        		this.ds_ReworkRouting.clearData();
        		this.div_work.form.div_ReworkRouting.form.cbo_Resource.set_value("");
        		this.div_work.form.div_ReworkRouting.form.cbo_Resource.set_enable(false);
        	}
        };

        this.div_work_div_ReworkRouting_btn_REWORKROUTING_onclick = function(obj,e)
        {
        	var popupId = "REWORKROUTING";
        	var oArg = {};
        	oArg.LotId   = this.ds_search.getColumn(0,"LOTID");
        	this.gfn_openPopup(popupId,"pcm::PCM04502P.xfdl",oArg,"");

        };

        /*
        this.div_work.form.div_ReworkRouting_grd_ReworkRouting_onselectchanged = function(obj:nexacro.Grid,e:nexacro.GridSelectEventInfo)
        {
        	this.fn_RefreshResource();
        	this.fn_RefreshResourceReturn();
        };
        */

        this.div_work_div_CurrentRouting_grd_CurrentRouting_oncellclick = function(obj,e)
        {
        	if(this.nfn_isEqualCol(obj,e.col,"CHK")){
        		var val = this.ds_CurrentRouting.getColumn(e.row,"CHK");
        		if(val=="1"){
        			for(var i=0; i<e.row; i++) this.ds_CurrentRouting.setColumn(i,"CHK","0");
        			for(var i=e.row+1; i<this.ds_CurrentRouting.rowcount; i++) this.ds_CurrentRouting.setColumn(i,"CHK","0");
        			/*
        			var nRow = this.ds_CurrentRouting.findRow("CHK","1",0,e.row-1);
        			if(nRow>=0){
        				this.ds_CurrentRouting.setColumn(nRow,"CHK","0");
        			}else{
        				var nRow = this.ds_CurrentRouting.findRow("CHK","1",e.row+1,this.ds_CurrentRouting.rowcount-1);
        				this.ds_CurrentRouting.setColumn(nRow,"CHK","0");
        			}
        			if(this.ds_CurrentRouting.getColumn(e.row,"DISPLAYSEQUENCE") != "1"){
        				this.ds_CurrentRouting.getColumn(e.row,"CHK","1");
        			}else{
        				this.ds_CurrentRouting.getColumn(e.row,"CHK","0");
        			}
        			*/
        			this.fn_RefreshResource();
        			this.fn_RefreshResourceReturn();

        		}
        	}

        };

        this.div_work_div_ReworkRouting_grd_ReworkRouting_oncellclick = function(obj,e)
        {
        	this.fn_RefreshResource();
            this.fn_RefreshResourceReturn();
        };

        this.div_work_div_ReworkRouting_ckb_PRODUCTROUTING_onchanged = function(obj,e)
        {
        	this.fn_SearchRoutings();
        };


        this.div_work_div_search_edt_LOTID_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13) {
        		this.ds_search.setColumn(0,"LOTID",this.div_work.form.div_search.form.edt_LOTID.value);
        		this.GetLotInfo();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.div_search.form.btn_reset.addEventHandler("onclick",this.fn_formInit,this);
            this.div_work.form.div_search.form.edt_LOTID.addEventHandler("onkeydown",this.div_work_div_search_edt_LOTID_onkeydown,this);
            this.div_work.form.div_ReworkRouting.form.grd_ReworkRouting.addEventHandler("onselectchanged",this.div_1_grd_ReworkRouting_onselectchanged,this);
            this.div_work.form.div_ReworkRouting.form.grd_ReworkRouting.addEventHandler("oncellclick",this.div_work_div_ReworkRouting_grd_ReworkRouting_oncellclick,this);
            this.div_work.form.div_ReworkRouting.form.edt_REWORKROUTING.addEventHandler("onchanged",this.div_work_div_ReworkRouting_edt_REWORKROUTING_onchanged,this);
            this.div_work.form.div_ReworkRouting.form.btn_REWORKROUTING.addEventHandler("onclick",this.div_work_div_ReworkRouting_btn_REWORKROUTING_onclick,this);
            this.div_work.form.div_ReworkRouting.form.ckb_PRODUCTROUTING.addEventHandler("onchanged",this.div_work_div_ReworkRouting_ckb_PRODUCTROUTING_onchanged,this);
            this.div_work.form.div_ReworkRouting.form.edt_REWORKNUMBER.addEventHandler("onchanged",this.div_work_div_ReworkRouting_edt_REWORKNUMBER_onchanged,this);
            this.div_work.form.div_CurrentRouting.form.grd_CurrentRouting.addEventHandler("onselectchanged",this.div_work_grd_basApproval_onselectchanged,this);
            this.div_work.form.div_CurrentRouting.form.grd_CurrentRouting.addEventHandler("oncellclick",this.div_work_div_CurrentRouting_grd_CurrentRouting_oncellclick,this);
        };
        this.loadIncludeScript("PCM02900M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
