(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMSY01400M");
            this.set_titletext("메뉴_권한관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,637);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmdJobAuthMng", this);
            obj._setContents("<ColumnInfo><Column id=\"JOB_AUTH_ID\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"JOB_AUTH_ID\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmdJobAuthMenuMpng", this);
            obj._setContents("<ColumnInfo><Column id=\"_chk\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVS\" type=\"STRING\" size=\"256\"/><Column id=\"UPPER_MENU\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MENU_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PGE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_EXTP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_RM\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_AUTH_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INS_AUTH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"QRY_AUTH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_AUTH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_AUTH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_ALT_AUTH_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","28",null,"43","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchBg");
            obj.set_background("rgba(247,247,247,1)");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_authNm","94","10","140","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00","16","10","73","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("19");
            obj.set_text("사용자그룹명");
            obj.set_cssclass("sta_WF_Label");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static03","10.68%","56",null,"43","88.22%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("22");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static13","0%","0",null,"10","0%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("23");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static07","84","0","10",null,null,"0",null,null,null,null,this.div_search.form);
            obj.set_taborder("28");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","0%","-1",null,"43","97.8%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("34");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_plantid","310","10","128","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_codecolumn("C,SiteType,,Y,Y");
            obj.set_type("filter");
            obj.set_displayrowcount("20");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static34","257","10","45","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("사이트");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","0.76%","83","140","21",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("권한정보");
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

            obj = new Static("Static06",null,"26","10","42","10",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","98.91%","0",null,"1856","0%",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static78","0%","21",null,"7","1.09%",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","0%","107",null,"10","87.17%",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_cmdJobAuthMng","0%","117",null,null,"76.41%","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_cmdJobAuthMng");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"210\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사용자그룹\"/></Band><Band id=\"body\"><Cell edittype=\"none\" text=\"bind:AUTH_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_cmdJobAuthMenuMpng","24.02%","117",null,null,"0.87%","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_cmdJobAuthMenuMpng");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"303\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"메뉴명\"/><Cell col=\"1\" text=\"등록권한\"/><Cell col=\"2\" text=\"조회권한\"/><Cell col=\"3\" text=\"수정권한\"/><Cell col=\"4\" text=\"삭제권한\"/><Cell row=\"1\" col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\"/><Cell row=\"1\" col=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\"/><Cell row=\"1\" col=\"3\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\"/><Cell row=\"1\" col=\"4\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\"/></Band><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" text=\"bind:MENU_NM\" suppressalign=\"first\" treelevel=\"bind:MENU_LVS\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:INS_AUTH_YN\" textAlign=\"center\"/><Cell col=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:QRY_AUTH_YN\" textAlign=\"center\"/><Cell col=\"3\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:UPD_AUTH_YN\" textAlign=\"center\"/><Cell col=\"4\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:DEL_AUTH_YN\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"0","60","20","140",null,null,null,null,null,this);
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

            obj = new Button("btn_searchOpen","10","6","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_searchOpen");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","40","6","145","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("업무화면명(자동)");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.name,\"MENU_NM\")");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite","187","6","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
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
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CMSY01400M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 권한메뉴 관리
         * 파일명 		: cmsy01400.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2017.09.16
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
        	this.ds_search.setColumn(0, "USE_YN", "Y");

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
        	this.ds_cmdJobAuthMenuMpng.clearData();

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "JOB_AUTH_ID", this.ds_cmdJobAuthMng.getColumn(this.ds_cmdJobAuthMng.rowposition, "JOB_AUTH_ID"));
        	this.ds_search.setColumn(0, "PLANTID", this.ds_cmdJobAuthMng.getColumn(this.ds_cmdJobAuthMng.rowposition, "PLANTID"));

        	var sSvcID = "selectCmdJobAuthMenuMpngList";
        	var sController = "/cmsy01400/selectCmdJobAuthMenuMpngList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_cmdJobAuthMenuMpng=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectCmdJobAuthMenuMpngList");
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

        	if (!this.gfn_dsIsUpdated(this.ds_cmdJobAuthMenuMpng))
        	{
        		this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID = "saveCmdJobAuthMenuMpng";
        	var sController = "/cmsy01400/saveCmdJobAuthMenuMpng.do";
        	var sInDatasets = "INPUT=ds_cmdJobAuthMenuMpng:U";
        	var sOutDatasets = "";

        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "saveCmdJobAuthMenuMpng");

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
        		else if (trId == "saveCmdJobAuthMenuMpng")
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.fn_search2();
        		}
        		if (trId == "selectEcmLookupValuesVList2ds_CSiteType")
        		{
        			this.div_search.form.cbo_plantid.set_index(0);
        		}
        	}
        };

        this.grd_cmdJobAuthMng_onselectchanged = function (obj, e)
        {
        	this.fn_search2();
        };


        this.ds_cmdJobAuthMenuMpng_onvaluechanged = function (obj, e)
        {
        	if (e.columnid == "INS_AUTH_YN" || e.columnid == "QRY_AUTH_YN" || e.columnid == "UPD_AUTH_YN" || e.columnid == "DEL_AUTH_YN")
        	{
        		obj.set_enableevent(false);
        		var nRow0 = e.row;
        		var nRow = e.row;
        		var jobMenuId = obj.getColumn(nRow0, "JOB_MENU_ID");
        		if (nRow0 >= 0)
        		{
        			for (var i = nRow0 + 1; i < obj.rowcount; i++)
        			{
        				if (obj.getColumn(i, "UPPER_MENU") == jobMenuId)
        				{
        					obj.setColumn(i, e.columnid, e.newvalue);
        				}
        			}
        		}


        		obj.set_enableevent(true);

        		obj.set_enableevent(false);
        		// var nRow = e.row;
        		for (var i = 0; i < 4; i++)
        		{
        			var upperMenu = obj.getColumn(nRow, "UPPER_MENU");
        			var cntVal = obj.getCaseCount("UPPER_MENU==" + upperMenu + " && " + e.columnid + "=='1'");
        			nRow = obj.findRow("JOB_MENU_ID", upperMenu);
        			// trace("nRow-->"+nRow);
        			if (nRow < 0)
        			{
        				obj.set_enableevent(true);
        				return;
        			}
        			obj.setColumn(nRow, e.columnid, cntVal > 0 ? "1" : "0");
        		}


        		obj.set_enableevent(true);
        	}
        };




        this.div_search_btn_clear_onclick = function (obj, e)
        {
        	this.reload();
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
            this.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.btn_clear1.addEventHandler("onclick",this.div_search_btn_clear_onclick,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.ds_cmdJobAuthMenuMpng.addEventHandler("onvaluechanged",this.ds_cmdJobAuthMenuMpng_onvaluechanged,this);
        };
        this.loadIncludeScript("CMSY01400M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
