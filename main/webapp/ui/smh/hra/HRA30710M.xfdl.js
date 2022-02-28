(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HRA30710M");
            this.set_titletext("F.A.Q");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_FAQList", this);
            obj._setContents("<ColumnInfo><Column id=\"HJSHR_BOARD_ITEM_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ITEM_GROUP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATION_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_COUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ATTACH_FILE\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_SRC_KEY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_FAQInfo", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"HJSHR_BOARD_ITEM_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0.00%","36",null,"42","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_search");
            obj.set_background("rgba(247,247,247,1)");
            this.addChild(obj.name, obj);

            obj = new Static("sta_boardItemGroup","21","10","70","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("분류");
            obj.set_tooltiptext("분류");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static13","0%","0",null,"10","0%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","0%","-1",null,"43","97.83%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04","0%",null,null,"10","76.88%","0",null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06","10.24%","1",null,null,"88.66%","-1",null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Sta_lavelTitle","213","10","70","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("제목");
            obj.set_tooltiptext("LAVEL_TITLE");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_00","293","10","300","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_00","103","10","110","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_codecolumn("C,SM_BOARD_ITEM_GROUP,ALL,Y,Y");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"8","60","20","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("BUTTON_SEARCH");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear",null,"8","60","20","76",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("초기화");
            obj.set_tooltiptext("BUTTON_CLEAR");
            this.addChild(obj.name, obj);

            obj = new Static("Static78","0.00%","27",null,"9","1.09%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","10","6","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_searchOpen");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","40","6","145","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("업무화면명(자동)");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.name,\"MENU_NM\")");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite","187","6","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_favorite");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","0","78",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","211","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("F.A.Q 내역");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("F.A.Q 내역");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_FAQList","219","0","140","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_FAQList","0","34",null,"265","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_FAQList");
            obj.set_autofittype("col");
            obj.set_fillareatype("allrow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"540\"/><Column size=\"140\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"분류\" tooltiptext=\"분류\"/><Cell col=\"1\" text=\"제목\" tooltiptext=\"제목\"/><Cell col=\"2\" text=\"날짜\" tooltiptext=\"날짜\"/><Cell col=\"3\" text=\"조회\" tooltiptext=\"조회\"/></Band><Band id=\"body\"><Cell text=\"bind:ITEM_GROUP_NAME\"/><Cell col=\"1\" text=\"bind:TITLE\" tooltiptext=\"LAVEL_TITLE\"/><Cell col=\"2\" text=\"bind:CREATION_DATE\"/><Cell col=\"3\" text=\"bind:VIEW_COUNT\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_basicInfo","0","304",null,null,"0","138",null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_detail_nobg");
            obj.set_text("");
            obj.set_formscrollbarbarminsize("0");
            obj.set_formscrollbarbaroutsize("0");
            obj.set_formscrollbardecbuttonsize("0");
            obj.set_formscrollbarincbuttonsize("0");
            obj.set_formscrollbarsize("0");
            obj.set_formscrollbartrackbarsize("0");
            obj.set_formscrollindicatorsize("0");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_00_00","0","30",null,"2","0",null,null,null,null,null,this.div_work.form.div_basicInfo.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_detail_line");
            this.div_work.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_site01","0","0","120","31",null,null,null,null,null,null,this.div_work.form.div_basicInfo.form);
            obj.set_taborder("1");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("LAVEL_TITLE");
            this.div_work.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_content","0","31","120",null,null,"0",null,null,null,null,this.div_work.form.div_basicInfo.form);
            obj.set_taborder("2");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("내용");
            obj.set_border("0px none");
            this.div_work.form.div_basicInfo.addChild(obj.name, obj);

            obj = new TextArea("txa_content","125","36","777",null,null,"0",null,null,null,null,this.div_work.form.div_basicInfo.form);
            obj.set_taborder("3");
            obj.set_cssclass("display");
            this.div_work.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_title","125","5","674","20",null,null,null,null,null,null,this.div_work.form.div_basicInfo.form);
            obj.set_taborder("4");
            obj.set_cssclass("display");
            this.div_work.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Div("div_file","1","div_basicInfo:8",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_url("common::com_file_down_b4.xfdl");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_work.form.div_basicInfo.form.edt_title","value","ds_FAQInfo","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_work.form.div_basicInfo.form.txa_content","value","ds_FAQInfo","CONTENT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_file_down_b4.xfdl");
        };
        
        // User Script
        this.registerScript("HRA30710M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: SM 상선 myHR 고도화
         * 업무명 		: F.A.Q
         * 파일명 		: HRA30710M.xfdl
         * 작성자 		: yhee.kim
         * 작성일 		: 2022.02.17
         * 설  명		:
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2022.02.17	yhee.kim   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/


        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/


        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.isFirstCall = "N"; //조회 후 첫행의 상세정보조회는 view_count 증가제외하기 위해 선언

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        };


        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function(obj,e)
        {
        	// F.A.Q 내역
        	var sSvcID = "selectFAQList";
        	var sController = "/hra30710/selectFAQList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_FAQList=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 상세검색
         */
        this.fn_searchDetail = function(obj, pRow)
        {
        	var boardSeq = obj.getColumn(pRow, "HJSHR_BOARD_ITEM_SEQ");
        	var atchSrcKey =obj.getColumn(pRow, "ATCH_SRC_KEY");
        	var tableName = obj.getColumn(pRow, "ATCH_TY_CD");

        	// F.A.Q 상세내역
        	var sSvcID = "selectFAQInfo";
        	var sController = "/hra30710/selectFAQInfo.do";
        	var sInDatasets = "";
        	var sOutDatasets = "ds_FAQInfo=output";
        	var sArgs = "";
        		sArgs += this.gfn_setParam("HJSHR_BOARD_ITEM_SEQ", boardSeq);
        		sArgs += this.gfn_setParam("FIRST_CALL_YN", this.isFirstCall);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        	if (!this.gfn_isNull(atchSrcKey)){
        		this.fn_searchAttach(tableName, atchSrcKey);
        	}
        };

        /*
         * 기능 : 파일조회
         */
        this.fn_searchAttach = function(pTableName, pSrcKey)
        {
            var divFile = this.div_work.form.div_file;
        	divFile.form.jobSysCd 		= "";
        	divFile.form.atchTyCd 		= "";
        	divFile.form.tableName 		= pTableName;//CMD_ATCH_FILES_MPNGS.ATCH_TY_CD
        	divFile.form.subDir  		= ""; //세부업무약어
        	divFile.form.atchSrcKey  	= pSrcKey;//pSrcKey; //CMD_ATCH_FILES_MPNGS.ATCH_SRC_KEY;
        	divFile.form.fn_search();
        };

        /*
         * 기능 : 검색 초기화(nbdfComLib.js -> nfn_clear함수에서 호출함)
         */
        this.fn_searchClear = function(obj,e)
        {
        };

        /*
         * 기능 : 신규
         */
        this.fn_new = function(obj,e)
        {
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function(obj,e)
        {
        };
        /*
         * 기능 : 삭제
         */
        this.fn_delete = function(obj,e)
        {
        };
        /*
         * 기능 : 도움말  => 공통 처리
         */
        this.fn_help = function(obj,e)
        {
        };

        /*
         * 기능 : 출력
         */
        this.fn_print = function(obj,e)
        {
        };

        /*
         * 기능 : work영역 초기화  => 공통처리
         */
        this.fn_reset = function(obj,e)
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
        		if (trId == "selectFAQList") //조회
        		{
        			if (this.ds_FAQList.rowcount < 1){
        				 this.gfn_Message("NotExistList", "F.A.Q", "info", "ok") //{0} 내역정보가 존재하지 않습니다.
        				 return;
        			}
        			else
        			{
        				this.isFirstCall = "Y"; //최초호출
        				this.fn_searchDetail(this.ds_FAQList, 0); //F.A.Q 상세내역 조회
        				this.isFirstCall = "N"; //최초호출이 아님
        			}
        		}
        		else if (trId == "selectFAQInfo") //조회
        		{
        			trace(this.ds_FAQInfo.saveXML("Dataset", "V"));
        		}
        	}
        };
        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         * 이벤트 : Row 의 선택이 변경되어 DataSet 의 rowposition 속성값이 변경될 때 발생하는 이벤트입니다.
         */
        this.ds_FAQList_canrowposchange = function(obj,e)
        {
        	if (e.newrow < 0) return;
        	this.fn_searchDetail(obj, e.newrow); //F.A.Q 상세내역 조회
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.div_basicInfo.form.sta_content.addEventHandler("onclick",this.div_work_Tabpage3_div_basicInfo_sta_prevcareer_onclick,this);
            this.ds_FAQList.addEventHandler("canrowposchange",this.ds_FAQList_canrowposchange,this);
        };
        this.loadIncludeScript("HRA30710M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
