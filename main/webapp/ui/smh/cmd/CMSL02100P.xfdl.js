(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMSL02100P");
            this.set_titletext("다양한 쿼리 조회-팝업");
            this.set_cssclass("form_PopupBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,628);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SHR_CASE\" type=\"STRING\" size=\"256\"/><Column id=\"SRH_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"SRH_GET_USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_result", this);
            obj._setContents("<ColumnInfo><Column id=\"BUSINESS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRAM_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","7","51",null,"34","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchBg");
            obj.set_background("rgba(247,247,247,1)");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_srh","3","6","159","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_font("9pt \"Dotum\"");
            var div_search_form_cbo_srh_innerdataset = new nexacro.NormalDataset("div_search_form_cbo_srh_innerdataset", obj);
            div_search_form_cbo_srh_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">99</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">프로그램명</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">업무구분</Col></Row><Row><Col id=\"codecolumn\">30</Col><Col id=\"datacolumn\">프로그램코드</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cbo_srh_innerdataset);
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_srh","166","6","346","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"6","57","21","7",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_DR_GridSearch");
            obj.set_tooltiptype("hover");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_title","2.67%","14",null,"31","12.67%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("다양한 쿼리 조회");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_font("bold 11pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_result","6","95",null,"493","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_result");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"339\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"업무구분\"/><Cell col=\"2\" text=\"프로그램코드\"/><Cell col=\"3\" text=\"프로그램명\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:BUSINESS_TYPE_NM\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:PROGRAM_CD\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:PROGRAM_NM\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","98.17%","0",null,"588","0%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","2.5%","85",null,"10","4.83%",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","-0.5%","8",null,"556","98.83%",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close00",null,"6","25","25","3",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sel",null,null,"56","21","71","12",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("확인");
            obj.set_cssclass("btn_pop_yes");
            this.addChild(obj.name, obj);

            obj = new Button("btn_x",null,null,"56","21","10","12",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("취소");
            obj.set_cssclass("btn_pop_no");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,628,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item9","div_search.form.edt_srh","value","ds_EapInvoicesAll","VAT_REGISTRATION_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CMSL02100P.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: 대륜E&S 빌링시스템
         * 업무명 		: 다양한 쿼리 조회-팝업
         * 파일명 		: CMSL02100P.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2018.10.32
         *
         * 설  명		: 다양한 쿼리 조회-팝업
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		        변경내역
         *---------------------------------------------------------------------------------------
         * 2018.10.32	Kang. Jeong Gi   	최초작성
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


        /**************************************************************************
         * 3. FORM 정의
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	// 폼 초기화
        	this.nfn_formInit(obj);

        	// 엔터키 설정 함수(조회)
        	this.gfn_setEnterSearch(this.div_search, "nfn_search");

        	// 초기화 버튼
        	this.fn_clear();
        };


        /**************************************************************************
         * 4. 공통버튼영역
         ***************************************************************************/
        // 조회 버튼
        this.fn_search = function (obj, e)
        {
        	this.ds_search.clearData();
        	nRow = this.ds_search.addRow();

        	// 검색조건
        	var getCase = this.gfn_blankStr(this.div_search.form.cbo_srh.value);
        	var getValue = this.gfn_blankStr(this.div_search.form.edt_srh.value);

        	this.ds_search.setColumn(nRow, "SHR_CASE", getCase);
        	this.ds_search.setColumn(nRow, "SRH_VALUE", getValue);
        	this.ds_search.setColumn(nRow, "SRH_GET_USER_ID", this.gf_getUserId());
        	// trace(this.ds_search.saveXML());

        	// 대상 초기화
        	this.ds_result.clearData();

        	var sSvcID = "selectCmdDyamicSqlHeader";
        	var sController = "/cmsl02200/selectCmdDyamicSqlHeader.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_result=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", sSvcID);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        // 초기화 버튼
        this.fn_clear = function (obj, e)
        {
        	this.div_search.form.cbo_srh.set_index(0);
        	this.div_search.form.edt_srh.set_value("");
        	this.div_search.form.edt_srh.setFocus();
        };


        // 확인 버튼
        this.fn_confirm = function (obj, e)
        {
        	var rtnArray = new Array();

        	if (this.ds_result.rowcount == 0)
        	{
        		rtnArray[0] = "";
        		rtnArray[1] = "";
        	}
        	else
        	{
        		cRow = this.ds_result.rowposition;
        		rtnArray[0] = this.ds_result.getColumn(cRow, "PROGRAM_CD");
        		rtnArray[1] = this.ds_result.getColumn(cRow, "PROGRAM_NM");
        		rtnArray[2] = this.ds_result.getColumn(cRow, "BUSINESS_TYPE");
        		this.opener.fv_rtnValue = rtnArray;
        	}
        	this.close();
        };


        // / 닫기 버튼
        this.fn_close = function (obj, e)
        {
        	this.close();
        };


        this.grdDblclick = function (obj, e)
        {
        	// 확인 버튼
        	this.fn_confirm();
        };


        /**************************************************************************
         *  콜백 함수
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        	/*
        		if (errCD == -200)
        		{
        			this.gfn_alert(errMsg);
        			return;
        		}

        		if (trId.substring(0, 7) == "execute")
        		{
        			this.gfn_Message("SMCMM0001", new Array("프로시져 실행", "\n" + trId + "\n" + errMsg), "error", "ok");
        		}
        		else if (trId.substring(0, 6) == "select")
        		{
        			this.gfn_Message("SMCMM0005", "\n" + trId + "\n" + errMsg, "error", "ok");
        		}
        		else if (trId.substring(0, 6) == "delete")
        		{
        			this.gfn_Message("SMCMM0004", "\n" + trId + "\n" + errMsg, "error", "ok");
        		}
        		else
        		{
        			this.gfn_Message("SMCMM0001", new Array("처리", "\n" + trId + "\n" + errMsg), "error", "ok");
        		}
        		*/
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        	}
        	else
        	{
        		switch (trId)
        		{
        			// 조회 버튼
        			case "selectCmdDyamicSqlHeader":
        				// 조회된 자료가 없습니다.
        				if (this.ds_result.rowcount == 0)
        				{
        					this.gfn_Message("NoSelectCondData", null, "info", "ok");
        				}
        				break;
        		}
        	}
        }
        ;

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_search.form.cbo_srh.addEventHandler("onitemchanged",this.div_search_cbo_srh_onitemchanged,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.grd_result.addEventHandler("onselectchanged",this.grd_EapInvoiceDistributionsAll_onselectchanged,this);
            this.grd_result.addEventHandler("oncelldblclick",this.grdDblclick,this);
            this.btn_close00.addEventHandler("onclick",this.fn_close,this);
            this.btn_sel.addEventHandler("onclick",this.fn_confirm,this);
            this.btn_x.addEventHandler("onclick",this.fn_close,this);
        };
        this.loadIncludeScript("CMSL02100P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
