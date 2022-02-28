(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMSY01500M");
            this.set_titletext("권한_사용자관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,637);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmdJobAuthMng", this);
            obj._setContents("<ColumnInfo><Column id=\"JOB_AUTH_ID\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_SYS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_DESC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_AUTH_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmdUsers", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmdUserAuthMpng", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_AUTH_ID\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","30",null,"43","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchBg");
            obj.set_background("rgba(247,247,247,1)");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_authNm","100","10","140","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00","16","10","73","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("사용자그룹명");
            obj.set_cssclass("sta_WF_Label");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static03","10.68%","56",null,"43","88.22%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static13","0%","0",null,"10","0%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static07","84","0","10",null,null,"0",null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","0%","-1",null,"43","97.8%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static34","257","10","45","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("사이트");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_plantid","310","10","128","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_codecolumn("C,SiteType,,Y,Y");
            obj.set_type("filter");
            obj.set_displayrowcount("20");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","0.43%","77","140","21",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("사용자그룹");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_border("0px none rgba(51,51,51,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"0","60","20","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_DR_GridSave");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("저장");
            this.addChild(obj.name, obj);

            obj = new Static("Static06",null,"28","10","42","10",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","98.91%","0",null,"1856","0%",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","0%","98",null,"10","87.17%",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_cmdJobAuthMng","0%","108",null,"179","0.98%",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_cmdJobAuthMng");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"195\"/><Column size=\"98\"/><Column size=\"96\"/><Column size=\"70\"/><Column size=\"299\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"권한명\"/><Cell col=\"2\" text=\"권한시작일\"/><Cell col=\"3\" text=\"권한종료일\"/><Cell col=\"4\" text=\"사용여부\"/><Cell col=\"5\" text=\"권한설명\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" edittype=\"none\" text=\"bind:AUTH_NM\" textAlign=\"left\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"none\" text=\"bind:AUTH_START_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"none\" text=\"bind:AUTH_END_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" text=\"bind:USE_YN\" combodataset=\"ds_yn\" combocodecol=\"code\" combodatacol=\"desc\" textAlign=\"center\"/><Cell col=\"5\" edittype=\"none\" text=\"bind:AUTH_DESC\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0%","317",null,"10","87.17%",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_cmdUsers","0","327",null,null,"60.65%","0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("ds_cmdUsers");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"82\"/><Column size=\"85\"/><Column size=\"99\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\"/><Cell col=\"1\" text=\"사번\"/><Cell col=\"2\" text=\"사용자명\"/><Cell col=\"3\" text=\"부서\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" textAlign=\"center\"/><Cell col=\"1\" edittype=\"none\" text=\"bind:USER_ID\" textAlign=\"left\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"bind:USER_NM\" calendardisplaynulltype=\"none\" textAlign=\"left\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" text=\"bind:DEPT_NM\" calendardisplaynulltype=\"none\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","47.93%","296","140","21",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("권한사용자");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_border("0px none rgba(51,51,51,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","47.61%","317",null,"10","39.57%",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add","41.2%","415",null,"35","54.24%",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text(">>");
            obj.set_font("bold 10pt \"arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del","41.2%","463",null,"35","54.24%",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("<<");
            obj.set_font("bold 10pt \"arial\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_srhType","0","297","8.48%","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_font("9pt \"Dotum\"");
            var cbo_srhType_innerdataset = new nexacro.NormalDataset("cbo_srhType_innerdataset", obj);
            cbo_srhType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">USER_ID</Col><Col id=\"datacolumn\">사번</Col></Row><Row><Col id=\"codecolumn\">USER_NM</Col><Col id=\"datacolumn\">사용자명</Col></Row></Rows>");
            obj.set_innerdataset(cbo_srhType_innerdataset);
            obj.set_text("사용자명");
            obj.set_value("USER_NM");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_userKeyWord","8.91%","297","9.24%","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_cmdUserAuthMpng","47.5%","327",null,null,"0.98%","0",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_binddataset("ds_cmdUserAuthMpng");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"90\"/><Column size=\"85\"/><Column size=\"138\"/><Column size=\"104\"/><Column size=\"104\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\"/><Cell col=\"1\" text=\"권한\"/><Cell col=\"2\" text=\"사번\"/><Cell col=\"3\" text=\"사용자명\"/><Cell col=\"4\" text=\"부서\"/><Cell col=\"5\" text=\"생성일\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"normal\" text=\"bind:AUTH_NM\" textAlign=\"left\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"bind:USER_ID\" textAlign=\"left\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" text=\"bind:USER_NM\" calendardisplaynulltype=\"none\" textAlign=\"left\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" text=\"bind:DEPT_NM\" calendardisplaynulltype=\"none\" textAlign=\"left\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"none\" text=\"bind:CREATION_DATE\" calendardisplaynulltype=\"none\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search2",null,"297","60","20","60.76%",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("조회");
            obj.set_cssclass("btn_DR_GridSearch");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"0","60","20","139",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_DR_GridSearch");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear1",null,"0","60","20","75",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("초기화");
            obj.set_cssclass("btn_DR_GridReset");
            obj.set_tooltiptext("초기화");
            this.addChild(obj.name, obj);

            obj = new Static("Static78","0%","21",null,"9","1.09%",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","10","6","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_searchOpen");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","40","6","145","24",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("업무화면명(자동)");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.name,\"MENU_NM\")");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:2","6","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WF_favorite");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,637,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item5","div_search.form.edt_authNm","cssclass","ds_result","POPUP_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","edt_userKeyWord","cssclass","ds_result","POPUP_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CMSY01500M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 메뉴 관리
         * 파일명 		: cmsy01500.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2017.03.18
         *
         * 설  명		: 공통코드 조회/수정/삭제/엑셀다운로드 기능 제공
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2017.09.16	진성하   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include(필수)
         ***************************************************************************/
        // include "lib::comLib.xjs";
        // include "cuslib::nbdfComLib.xjs";

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.fv_currDate;

        /**************************************************************************
         * 3. FORM 정의
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	// 엔터키 설정 함수(조회)
        	this.gfn_setEnterSearch(this.div_search, "nfn_search");
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {

        	this.ds_cmdJobAuthMng.clearData();

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "AUTH_NM", this.div_search.form.edt_authNm.value);
        	this.ds_search.setColumn(0, "PLANTID", this.div_search.form.cbo_plantid.value);

        	var sSvcID = "selectCmdJobAuthMngList";
        	var sController = "/cmsy01300/selectCmdJobAuthMngList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_cmdJobAuthMng=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectCmdJobAuthMngList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.fn_search2 = function (obj, e)
        {

        	this.ds_cmdUsers.clearData();

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, this.cbo_srhType.value, this.edt_userKeyWord.value);
        	this.ds_search.setColumn(0, "JOB_AUTH_ID", this.ds_cmdJobAuthMng.getColumn(this.ds_cmdJobAuthMng.rowposition, "JOB_AUTH_ID"));
        	this.ds_search.setColumn(0, "PLANTID", this.ds_cmdJobAuthMng.getColumn(this.ds_cmdJobAuthMng.rowposition, "PLANTID"));

        	var sSvcID = "selectCmdUsersList";
        	var sController = "/cmsy01500/selectCmdUsersList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_cmdUsers=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectCmdUsersList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.fn_search3 = function ()
        {
        	this.ds_cmdUserAuthMpng.clearData();

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "JOB_AUTH_ID", this.ds_cmdJobAuthMng.getColumn(this.ds_cmdJobAuthMng.rowposition, "JOB_AUTH_ID"));
        	this.ds_search.setColumn(0, "PLANTID", this.ds_cmdJobAuthMng.getColumn(this.ds_cmdJobAuthMng.rowposition, "PLANTID"));

        	var sSvcID = "selectCmdUserAuthMpngList";
        	var sController = "/cmsy01500/selectCmdUserAuthMpngList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_cmdUserAuthMpng=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectCmdUsersList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	var bOK = nexacro.getApplication().confirm("저장하시겠습니까?");
        	if (bOK == false)
        	{
        		return;
        	}

        	if (!this.gfn_dsIsUpdated(this.ds_cmdUserAuthMpng))
        	{
        		this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID = "saveCmdJobAuthMng";
        	var sController = "/cmsy01500/saveCmdUserAuthMpng.do";
        	var sInDatasets = "INPUT=ds_cmdUserAuthMpng:U";
        	var sOutDatasets = "";

        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "saveCmdJobAuthMng");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 삭제
         */
        this.fn_delete = function (obj, e)
        {
        };

        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		if (trId.substring(0, 6) == "select")
        		{
        			this.gfn_Message("ErrorOnSearch", trId + errMsg, "error", "ok");
        		}
        		else
        		{
        			this.gfn_Message("ErrorOnSave", trId + errMsg, "error", "ok");
        		}
        	}
        	else
        	{
        		if (trId == "selectCmdJobAuthMngList")
        		{
        		}
        		else if (trId == "selectEcmLookupValuesVList2ds_CCMD_USER_COMPANY")
        		{
        			this.div_search.form.cbo_companyCd.set_index(0);
        		}
        		else if (trId == "saveCmdJobAuthMng")
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.fn_search2();
        			this.fn_search3();
        		}
        		if (trId == "selectEcmLookupValuesVList2ds_CSiteType")
        		{
        			this.div_search.form.cbo_plantid.set_index(0);
        		}
        	}
        };

        /**************************************************************************
         * 6. 팝업 시작
         **************************************************************************/



        /**************************************************************************
         * 7. 기타 함수 시작
         **************************************************************************/


        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.btn_add_onclick = function (obj, e)
        {
        	if (this.ds_cmdUsers.getCaseCount("CHK=='1'") == 0)
        	{
        		this.gfn_Message("IMCMM0157", "사용자를", "info", "ok");
        		return;
        	}

        	for (var i = 0; i < this.ds_cmdUsers.rowcount; i++)
        	{
        		if (this.ds_cmdUsers.getColumn(i, "CHK") == "1")
        		{
        			var nRow = this.ds_cmdUserAuthMpng.addRow();
        			this.ds_cmdUserAuthMpng.setColumn(nRow, "JOB_AUTH_ID", this.ds_cmdJobAuthMng.getColumn(this.ds_cmdJobAuthMng.rowposition, "JOB_AUTH_ID"));
        			this.ds_cmdUserAuthMpng.setColumn(nRow, "AUTH_NM", this.ds_cmdJobAuthMng.getColumn(this.ds_cmdJobAuthMng.rowposition, "AUTH_NM"));
        			this.ds_cmdUserAuthMpng.setColumn(nRow, "USER_ID", this.ds_cmdUsers.getColumn(i, "USER_ID"));
        			this.ds_cmdUserAuthMpng.setColumn(nRow, "USER_NM", this.ds_cmdUsers.getColumn(i, "USER_NM"));
        			this.ds_cmdUserAuthMpng.setColumn(nRow, "USER_ACNT", this.ds_cmdUsers.getColumn(i, "USER_ACNT"));
        			this.ds_cmdUserAuthMpng.setColumn(nRow, "DEPT_CD", this.ds_cmdUsers.getColumn(i, "DEPT_CD"));
        			this.ds_cmdUserAuthMpng.setColumn(nRow, "DEPT_NM", this.ds_cmdUsers.getColumn(i, "DEPT_NM"));
        		}
        	}
        	for (var i = this.ds_cmdUsers.rowcount - 1; i >= 0; i--)
        	{
        		if (this.ds_cmdUsers.getColumn(i, "CHK") == "1")
        		{
        			this.ds_cmdUsers.deleteRow(i);
        		}
        	}
        };

        this.btn_del_onclick = function (obj, e)
        {
        	if (this.ds_cmdUserAuthMpng.getCaseCount("CHK=='1'") == 0)
        	{
        		this.gfn_Message("IMCMM0157", "권한사용자를", "info", "ok");
        		return;
        	}

        	for (var i = 0; i < this.ds_cmdUserAuthMpng.rowcount; i++)
        	{
        		if (this.ds_cmdUserAuthMpng.getColumn(i, "CHK") == "1")
        		{
        			var nRow = this.ds_cmdUsers.addRow();
        			this.ds_cmdUsers.setColumn(nRow, "USER_ID", this.ds_cmdUserAuthMpng.getColumn(i, "USER_ID"));
        			this.ds_cmdUsers.setColumn(nRow, "USER_NM", this.ds_cmdUserAuthMpng.getColumn(i, "USER_NM"));
        			this.ds_cmdUsers.setColumn(nRow, "EMP_NO", this.ds_cmdUserAuthMpng.getColumn(i, "EMP_NO"));
        			this.ds_cmdUsers.setColumn(nRow, "DEPT_CD", this.ds_cmdUserAuthMpng.getColumn(i, "DEPT_CD"));
        		}
        	}
        	for (var i = this.ds_cmdUserAuthMpng.rowcount - 1; i >= 0; i--)
        	{
        		if (this.ds_cmdUserAuthMpng.getColumn(i, "CHK") == "1")
        		{
        			this.ds_cmdUserAuthMpng.deleteRow(i);
        		}
        	}
        };

        this.grd_cmdJobAuthMng_onselectchanged = function (obj, e)
        {
        	this.fn_search2();
        	this.fn_search3();
        };

        this.btn_search2_onclick = function (obj, e)
        {
        	this.fn_search2();
        };

        this.div_search_cbo_companyCd_onitemchanged = function (obj, e)
        {
        	this.fn_search();
        };

        this.div_search_btn_clear_onclick = function (obj, e)
        {
        	this.reload();
        };

        this.edt_userKeyWord_onkeydown = function (obj, e)
        {
        	if (e.keycode == "13")
        	{
        		this.fn_search2();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_search.form.cbo_plantid.addEventHandler("onitemchanged",this.div_cbo_deptCd_onitemchanged,this);
            this.Static02.addEventHandler("onclick",this.Static10_onclick,this);
            this.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.grd_cmdJobAuthMng.addEventHandler("onselectchanged",this.grd_cmdJobAuthMng_onselectchanged,this);
            this.Static04.addEventHandler("onclick",this.Static10_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.edt_userKeyWord.addEventHandler("onkeydown",this.edt_userKeyWord_onkeydown,this);
            this.btn_search2.addEventHandler("onclick",this.btn_search2_onclick,this);
            this.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.btn_clear1.addEventHandler("onclick",this.div_search_btn_clear_onclick,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("CMSY01500M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
