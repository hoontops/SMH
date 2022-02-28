(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMSY02400M");
            this.set_titletext("공지사항관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmdNotice", this);
            obj._setContents("<ColumnInfo><Column id=\"NOTICE_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"COMMENTS\" type=\"STRING\" size=\"256\"/><Column id=\"CREATED_BY\" type=\"STRING\" size=\"256\"/><Column id=\"CREATION_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"LAST_UPDATED_BY\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATE_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"CFM_CNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"WRITER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NOTICE_STRT_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"NOTICE_END_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"JOB_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"KEY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CFM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"KEY_WORD\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static05",null,"30","10","576","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static81",null,"79","168","10","10",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("13");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","0","78","168","12",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static78","0%","21",null,"9","1.07%",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"0","60","21","75",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_DR_GridSearch");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear",null,"0","60","21","11",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("초기화");
            obj.set_cssclass("btn_DR_GridReset");
            obj.set_tooltiptext("초기화");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","0","30",null,"40","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","1","93","130","10",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("45");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static10","196","-1","20","41",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("48");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static11","86","7","10","41",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("50");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_keyType","40","8","140","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_autoselect("true");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_search_form_cbo_keyType_innerdataset = new nexacro.NormalDataset("div_search_form_cbo_keyType_innerdataset", obj);
            div_search_form_cbo_keyType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">제목</Col></Row><Row><Col id=\"codecolumn\">B</Col><Col id=\"datacolumn\">제목+내용</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cbo_keyType_innerdataset);
            obj.set_text("전체");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static13",null,"30","118","8","851",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("74");
            obj.set_text("8");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_keyWord","186","8","292","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_maxlength("30");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_new",null,"0","60","21","205",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("신규");
            obj.set_cssclass("btn_DR_GridCopy");
            this.addChild(obj.name, obj);

            obj = new Button("btn_update",null,"0","60","21","140",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("수정");
            obj.set_cssclass("btn_DR_GridSave");
            obj.set_tooltiptext("수정");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_cmdNotice","0%","106",null,null,"10","40",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_binddataset("ds_cmdNotice");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"54\"/><Column size=\"89\"/><Column size=\"470\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"96\"/><Column size=\"94\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"업무구분\"/><Cell col=\"2\" text=\"제목\"/><Cell col=\"3\" text=\"공지시작일\"/><Cell col=\"4\" text=\"공지종료일\"/><Cell col=\"5\" text=\"작성자\"/><Cell col=\"6\" text=\"작성일자\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"combo\" text=\"bind:JOB_CD\" combocodecol=\"C,CMD_JOB_CD,,Y,N\"/><Cell col=\"2\" text=\"bind:TITLE\"/><Cell col=\"3\" displaytype=\"date\" text=\"bind:NOTICE_STRT_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"date\" text=\"bind:NOTICE_END_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" text=\"bind:WRITER_NM\"/><Cell col=\"6\" text=\"bind:CREATION_DATE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","10","6","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_searchOpen");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","40","6","145","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("업무화면명(자동)");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.name,\"MENU_NM\")");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:2","6","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_favorite");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","6","74","142","28",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("공지사항 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_border("0px none rgba(51,51,51,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_tooltiptext("MENU_USERREQUESTAPPROVAL");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_cmdNotice","Static02:2","70",null,"34","747",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("<fc v=\"#f31d24\">0</fc><fc v=\"#999999\">건</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_expr("expr:\'Count : <fc v=\"#f31d24\">\'+comp.parent.nfn_numberWithCommas(comp.parent.ds_cmdUsers.rowcount)+\'</fc>\'");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,768,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","Div00.edt_text","value","ds_param","TEXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Div00.edt_text00","value","ds_param","TEXT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CMSY02400M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 공지사항
         * 파일명 		: cmsy02400.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2017.03.18
         *
         * 설  명		: 공지사항
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
        this.fv_noticeId;

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
        	this.ds_cmdNotice.clearData();

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "KEY_TYPE", this.div_search.form.cbo_keyType.value);
        	this.ds_search.setColumn(0, "KEY_WORD", this.div_search.form.edt_keyWord.value);
        	this.ds_search.setColumn(0, "ALL_YN", "Y");

        	var sSvcID = "selectCmdNoticeList";
        	var sController = "/cmsy02400/selectCmdNoticeList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_cmdNotice=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectCmdNoticeList");
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

        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		if (trId.substring(0, 6) == "select")
        		{
        			this.gfn_Message("SMCMM0005", trId + errMsg, "error", "ok");
        		}
        		else
        		{
        			this.gfn_Message("SMCMM0051", trId + errMsg, "error", "ok");
        		}
        	}
        	else
        	{
        		if (trId == "selectCmdNoticeList")
        		{
        		}
        	}
        };

        /**************************************************************************
         * 6. 팝업 시작
         **************************************************************************/



        /**************************************************************************
         * 7. 기타 함수 시작
         **************************************************************************/
        this.fn_popupAfter = function (sPopupId, Variant)
        {
        	var rtn = this.gfn_getPopupRtn();
        	if (sPopupId == "CMSY02401P")
        	{
        		if (rtn == "RELOAD")
        		{
        			this.fn_search();
        		}
        	}
        	if (sPopupId == "CMSY02402P")
        	{
        		if (rtn == "MODIFY")
        		{
        			var oArg = {
        				arg_noticeId : this.ds_cmdNotice.getColumn(this.ds_cmdNotice.rowposition, "NOTICE_ID")
        			};
        			this.gfn_openPopup("CMSY02403P", "system::CMSY02403P.xfdl", oArg, "");
        		}
        		else if (rtn == "RELOAD")
        		{
        			this.fn_search();
        		}
        	}
        	if (sPopupId == "CMSY02403P")
        	{
        		if (rtn == "RELOAD")
        		{
        			this.fn_search();
        		}
        	}
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.btn_new_onclick = function (obj, e)
        {
        	var oArg = null;
        	this.gfn_openPopup("CMSY02401P", "system::CMSY02401P.xfdl", oArg, "");
        };


        this.btn_clear_onclick = function (obj, e)
        {
        	this.nfn_clearAllInDiv(this.div_search);
        };



        this.grd_cmdNotice_oncelldblclick = function (obj, e)
        {
        	if (this.ds_cmdNotice.rowposition < 0)
        	{
        		return;
        	}

        	var oArg = {
        		arg_noticeId : this.ds_cmdNotice.getColumn(this.ds_cmdNotice.rowposition, "NOTICE_ID"),
        		arg_allYn : "Y"
        	};
        	this.gfn_openPopup("CMSY02402P", "system::CMSY02402P.xfdl", oArg, "");
        };

        this.btn_update_onclick = function (obj, e)
        {
        	if (this.ds_cmdNotice.rowposition < 0)
        	{
        		return;
        	}

        	var oArg = {
        		arg_noticeId : this.ds_cmdNotice.getColumn(this.ds_cmdNotice.rowposition, "NOTICE_ID")
        	};
        	this.gfn_openPopup("CMSY02403P", "system::CMSY02403P.xfdl", oArg, "");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.div_search.form.cbo_keyType.addEventHandler("onitemchanged",this.fn_jobGubunCdOnChange,this);
            this.div_search.form.edt_keyWord.addEventHandler("onkeyup",this.fn_searchEtr,this);
            this.btn_new.addEventHandler("onclick",this.btn_new_onclick,this);
            this.btn_update.addEventHandler("onclick",this.btn_update_onclick,this);
            this.grd_cmdNotice.addEventHandler("oncelldblclick",this.grd_cmdNotice_oncelldblclick,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.Static02.addEventHandler("onclick",this.Static10_onclick,this);
        };
        this.loadIncludeScript("CMSY02400M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
