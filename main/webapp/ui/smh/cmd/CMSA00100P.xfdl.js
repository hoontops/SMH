(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMSA00100P");
            this.set_titletext("공통팝업");
            this.set_cssclass("form_PopupBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,630);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"POPUP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ORDERBY\" type=\"STRING\" size=\"256\"/><Column id=\"MDL\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_NUMBER\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PAGE_SIZE\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_result", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_srhTy", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"desc\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popup", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"POPUP_ID\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"POPUP_CD\" size=\"256\" type=\"STRING\"/><Column id=\"POPUP_NM\" size=\"256\" type=\"STRING\"/><Column id=\"QRY_URL\" size=\"256\" type=\"STRING\"/><Column id=\"MTH\" size=\"256\" type=\"STRING\"/><Column id=\"DEL_YN\" size=\"256\" type=\"STRING\"/><Column id=\"CREATED_BY\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"CREATION_DATE\" size=\"256\" type=\"DATE\"/><Column id=\"LAST_UPDATED_BY\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"LAST_UPDATE_DATE\" size=\"256\" type=\"DATE\"/><Column id=\"LAST_UPDATED_LOGIN\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"QRY_TY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popupPls", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"POPUP_PLS_ID\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"POPUP_ID\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"CLUM_KOREAN_NM\" size=\"256\" type=\"STRING\"/><Column id=\"CLUM_ENG_NM\" size=\"256\" type=\"STRING\"/><Column id=\"CLUM_SIZE\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"CLUM_TY\" size=\"256\" type=\"STRING\"/><Column id=\"HRZNTLTY_QEE\" size=\"256\" type=\"STRING\"/><Column id=\"QRY_SEQ\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"CREATED_BY\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"CREATED_DATE\" size=\"256\" type=\"DATE\"/><Column id=\"LAST_UPDATED_BY\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"LAST_UPDATED_DATE\" size=\"256\" type=\"DATE\"/><Column id=\"LAST_UPDATED_LOGIN\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"QEE_ORDR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"QEE_DRC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_srhCndClum", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"POPUP_SRH_CND_CLUM_ID\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"POPUP_ID\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"SRH_CLUM_KOREAN_NM\" size=\"256\" type=\"STRING\"/><Column id=\"SRH_CLUM_ENG_NM\" size=\"256\" type=\"STRING\"/><Column id=\"SRH_CLUM_TY\" size=\"256\" type=\"STRING\"/><Column id=\"SRH_VL\" size=\"256\" type=\"STRING\"/><Column id=\"FIXING_CLUM_YN\" size=\"256\" type=\"STRING\"/><Column id=\"CREATED_BY\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"CREATION_DATE\" size=\"256\" type=\"DATE\"/><Column id=\"LAST_UPDATED_BY\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"LAST_UPDATE_DATE\" size=\"256\" type=\"DATE\"/><Column id=\"LAST_UPDATED_LOGIN\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"QEE_ORDR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DICTIONARYNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qry", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"QUERY\" size=\"256\" type=\"STRING\"/><Column id=\"CONDITION\" type=\"STRING\" size=\"256\"/><Column id=\"ORDERBY\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_NUMBER\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PAGE_SIZE\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_param", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"OFFICE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ACCT_DIV_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MODULE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static18","100",null,"400","20",null,"54",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("페이징처리영역");
            obj.set_visible("false");
            obj.set_background("lightskyblue");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title_bg","0","0",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_background("#3056a3");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","0","0",null,"40","41.67%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("타이틀명");
            obj.set_cssclass("sta_WF_popTitle");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","20","60",null,"42","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_search");
            obj.set_background("rgba(247,247,247,1)");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_srh","20","10","130","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_srhTy");
            obj.set_codecolumn("code");
            obj.set_datacolumn("desc");
            obj.set_font("9pt \"Dotum\"");
            obj.set_visible("false");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_srh","170","10","190","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_font("9pt \"Dotum\"");
            obj.set_autoselect("true");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"8","60",null,"10","8",null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_SA_search");
            obj.set_tooltiptype("hover");
            this.div_search.addChild(obj.name, obj);

            obj = new Grid("grd_result","20","107",null,null,"20","84",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_result");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"49\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/></Band><Band id=\"body\"><Cell edittype=\"none\" text=\"expr:currow+1\" autosizecol=\"default\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_x",null,null,"60","24","20","20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("취소");
            obj.set_cssclass("btn_pop_no");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sel",null,null,"60","24","86","20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btn_pop_yes");
            this.addChild(obj.name, obj);

            obj = new Static("Static05",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","0.00%","102",null,"5","0.00%",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close00",null,"5","30","30","15",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("Static08_00","0.00%","40",null,"20","0.00%",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static08_00_00","0.00%",null,null,"20","0.00%","0",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Div("div_page","100",null,null,"20","100","54",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_url("common::com_paging.xfdl");
            obj.set_background("transparent");
            obj.set_color("rgba(68,68,68,1)");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","0",null,null,"10","0","74",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","0",null,null,"10","0","44",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("9pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,630,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item9","div_search.form.edt_srh","value","ds_EapInvoicesAll","VAT_REGISTRATION_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_paging.xfdl");
        };
        
        // User Script
        this.registerScript("CMSA00100P.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 공통팝업
         * 파일명 		: CMCM001010P.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2017.03.18
         *
         * 설  명		: 공통팝업
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2017.03.16	진성하   	최초작성
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
        var lv_hderId;
        var lv_popupCd;
        var lv_popupNm;
        var lv_rtnCols;
        var lv_paramCols;
        var lv_paramValues;
        var lv_changeCols;
        var lv_changeColNms;
        var lv_changeSrhCols;
        var lv_changeSrhColNms;
        var lv_searchStr;
        var lv_type;
        var lv_divSearchWidth;
        var lv_checkIncludeYn="N";

        var sAppName = nexacro.getApplication().id;
        sAppName = sAppName.toString().toUpperCase();

        var objCombo;

        // paging
        var fv_pagingCheck;
        var arrCombo = new Array();
        var cntObj = 0;
        var arr_popupId = new Array();
        var arr_popupCd = new Array();
        var arr_rtnCols = new Array();
        var arrIndex = 0;

        // paging end
        /**************************************************************************
         * 3. FORM 정의
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.opener.fv_rtnValue = null;

        	// lv_hderId = this.parent.arg_hderId;
        	lv_popupCd = this.parent.arg_popupCd;
        	lv_rtnCols = this.parent.arg_rtnCols;
        	lv_paramCols = this.parent.arg_paramCols;
        	lv_paramValues = this.parent.arg_paramValues;
        	lv_searchStr = this.parent.arg_searchStr;
        	lv_popupNm = this.parent.arg_popupNm;
        	lv_type = this.parent.arg_type;
        	if(lv_type=="C" || lv_type=="CA") lv_checkIncludeYn="Y";

        	if (!this.gfn_isNull(this.parent.arg_condReqYn) && this.parent.arg_condReqYn == "Y")
        	{
        		this.div_search.form.edt_srh.set_cssclass("essential");
        	}
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	// this.ds_search.setColumn(0,"POPUP_ID",lv_hderId);

        	this.ds_search.setColumn(0, "POPUP_CD", lv_popupCd);
        	this.fn_searchHder();

        	//this.nfn_formInit(obj);
        	// 엔터키 설정 함수(조회)
        	this.gfn_setEnterSearch(this.div_search, "nfn_search");

        	this.div_page.form.set_visible(true);

        	// paging
        	this.fn_paging_onload(obj);
        	// paging end
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	// paging
        	if (fv_pagingCheck == false)
        	{
        		this.page = 1;
        		this.div_page.form.setCurrentPage(this.page);
        	}
        	// paging end

        	if (!this.gfn_isNull(this.parent.arg_condReqYn) && this.parent.arg_condReqYn == "Y")
        	{
        		var component = this.div_search;
        		var strColIdList = "edt_srh";
        		var strColNmList = "조회조건값";
        		var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        		if (rtn == false)
        		{
        			return;
        		}
        	}

        	// 고정 검색조건 값 셑팅
        	this.ds_search.clearData();
        	this.ds_search.addRow();


        	this.ds_srhCndClum.filter("FIXING_CLUM_YN=='Y'");
        	for (var i = 0; i < this.ds_srhCndClum.rowcount; i++)
        	{
        		this.ds_search.addColumn(this.ds_srhCndClum.getColumn(i, "SRH_CLUM_ENG_NM"), "string");
        	}

        	//trace(this.ds_search.saveXML());
        	//trace("lv_paramCols-->" + lv_paramCols);
        	//trace("lv_paramValues-->" + lv_paramValues);
        	if (!this.gfn_isNull(lv_paramCols))
        	{
        		var arrParamCols = lv_paramCols.split("|");
        		var arrParamValues = lv_paramValues.split("|");
        		for (var i = 0; i < arrParamCols.length; i++)
        		{
        			if (this.nfn_getCntOfColNm(this.ds_search, arrParamCols[i]) == 0)
        			{
        				this.ds_search.addColumn(arrParamCols[i], "string");
        			}
        			this.ds_search.setColumn(0, arrParamCols[i], arrParamValues[i]);
        		}
        	}
        	//trace("ds_search-->" + this.ds_search.saveXML());

        	// order by 설정
        	var strOrderBy = "";
        	var j = 0;
        	for (var i = 0; i < this.ds_popupPls.rowcount; i++)
        	{
        		if (!this.nfn_isNull(this.ds_popupPls.getColumn(i, "QEE_ORDR")) && !this.nfn_isNull(this.ds_popupPls.getColumn(i, "QEE_DRC")))
        		{
        			strOrderBy = strOrderBy + (j == 0 ? " ORDER BY " : ",") + this.ds_popupPls.getColumn(i, "CLUM_ENG_NM") + " " + this.ds_popupPls.getColumn(i, "QEE_DRC");
        			j++;
        		}
        	}
        	if(this.div_search.form.components["cbo_srh"] != null){
        		this.ds_search.setColumn(0, this.div_search.form.cbo_srh.value, this.div_search.form.edt_srh.value);
        	}
        /*
        	var sColNm = this.div_search.form.cbo_srh.value;
        	if (this.nfn_getCntOfColNm(this.ds_search, sColNm) == 0)
        	{
        		this.ds_search.addColumn(sColNm, "string");
        	}
        */
        	if (this.ds_popup.getColumn(0, "QRY_TY") == "U")
        	{
        		this.ds_search.setColumn(0, "ORDERBY", strOrderBy);
        		this.ds_search.setColumn(0, "ORDERBY", strOrderBy);
        		// paging
        		this.ds_search.setColumn(0, "PAGE_NUMBER", this.page);
        		this.ds_search.setColumn(0, "PAGE_SIZE", this.LIST_COUNT);
        		// paging end

        		this.ds_srhCndClum.filter("FIXING_CLUM_YN=='N'");
        		for (var i = 0; i < this.ds_srhCndClum.rowcount; i++)
        		{
        			if("COMBO,LIST".indexOf(this.ds_srhCndClum.getColumn(i,"SRH_CLUM_TY"))>=0){
        				this.ds_search.addColumn(this.ds_srhCndClum.getColumn(i, "SRH_CLUM_ENG_NM"), "string");
        				trace("this.div_search.form.cbo_"+this.ds_srhCndClum.getColumn(i,"SRH_CLUM_ENG_NM")+".value");
        				var val = eval("this.div_search.form.cbo_"+this.ds_srhCndClum.getColumn(i,"SRH_CLUM_ENG_NM")+".value");
        				this.ds_search.setColumn(0, this.ds_srhCndClum.getColumn(i, "SRH_CLUM_ENG_NM"), val);
        			}else if("STRING,BIGDECIMAL,POPUP".indexOf(this.ds_srhCndClum.getColumn(i,"SRH_CLUM_TY"))>=0){
        				this.ds_search.addColumn(this.ds_srhCndClum.getColumn(i, "SRH_CLUM_ENG_NM"), "string");
        				trace("this.div_search.form.edt_"+this.ds_srhCndClum.getColumn(i,"SRH_CLUM_ENG_NM")+".value");
        				var val = eval("this.div_search.form.edt_"+this.ds_srhCndClum.getColumn(i,"SRH_CLUM_ENG_NM")+".value");
        				this.ds_search.setColumn(0, this.ds_srhCndClum.getColumn(i, "SRH_CLUM_ENG_NM"), val);
        			}else if(this.ds_srhCndClum.getColumn(i,"SRH_CLUM_TY")=="DATE"){
        				this.ds_search.addColumn(this.ds_srhCndClum.getColumn(i, "SRH_CLUM_ENG_NM"), "string");
        				trace("this.div_search.form.cal_"+this.ds_srhCndClum.getColumn(i,"SRH_CLUM_ENG_NM")+".value");
        				var val = eval("this.div_search.form.cal_"+this.ds_srhCndClum.getColumn(i,"SRH_CLUM_ENG_NM")+".value");
        				this.ds_search.setColumn(0, this.ds_srhCndClum.getColumn(i, "SRH_CLUM_ENG_NM"), val);
        			}
        		}

        		//trace(this.ds_search.saveXML());
        		var sSvcID = "selectList";
        		var sController = this.ds_popup.getColumn(0, "QRY_URL");
        		var sInDatasets = "INPUT=ds_search";
        		var sOutDatasets = "ds_result=output";
        		var sArgs = "";
        		sArgs += this.gfn_setParam("method", this.ds_popup.getColumn(0, "MTH"));
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	}
        	else if (this.ds_popup.getColumn(0, "QRY_TY") == "Q")
        	{
        		var strQry = this.ds_popup.getColumn(0, "QRY_URL");
        		var strCondition = "";
        		var arrParamCols = lv_paramCols.split("|");
        		var arrParamValues = lv_paramValues.split("|");
        		if (!this.nfn_isNull(lv_paramCols))
        		{
        			for (var i = 0; i < arrParamCols.length; i++)
        			{
        				strCondition = strCondition + " AND " + arrParamCols[i] + "='" + arrParamValues[i] + "'";
        			}
        		}
        		if (!this.nfn_isNull(this.div_search.form.edt_srh.value) && this.div_search.form.edt_srh.visible)
        		{
        			var val = this.div_search.form.edt_srh.value;
        			strCondition = strCondition + " AND UPPER(" + this.div_search.form.cbo_srh.value + ") LIKE '%' || UPPER('" + this.div_search.form.edt_srh.value + "') ||'%'";
        			//strCondition = strCondition + " OR " + this.div_search.form.cbo_srh.value + " in (" + val.split(",") + "))";
        		}

        		// 고정 검색조건 값 셑팅
        		this.ds_srhCndClum.filter("FIXING_CLUM_YN=='N'");
        		for (var i = 0; i < this.ds_srhCndClum.rowcount; i++)
        		{
        			if("COMBO,LIST".indexOf(this.ds_srhCndClum.getColumn(i,"SRH_CLUM_TY"))>=0){
        				trace("this.div_search.form.cbo_"+this.ds_srhCndClum.getColumn(i,"SRH_CLUM_ENG_NM")+".value");
        				var val = eval("this.div_search.form.cbo_"+this.ds_srhCndClum.getColumn(i,"SRH_CLUM_ENG_NM")+".value");
        				if(!this.gfn_isNull(val))
        					strCondition = strCondition + " AND UPPER(" + this.ds_srhCndClum.getColumn(i, "SRH_CLUM_ENG_NM") + ")=UPPER('" + val + "')";
        			}else if("STRING,BIGDECIMAL,POPUP".indexOf(this.ds_srhCndClum.getColumn(i,"SRH_CLUM_TY"))>=0){
        				var val = eval("this.div_search.form.edt_"+this.ds_srhCndClum.getColumn(i,"SRH_CLUM_ENG_NM")+".value");
        				if(!this.gfn_isNull(val)){
        					strCondition = strCondition + " AND UPPER(" + this.ds_srhCndClum.getColumn(i, "SRH_CLUM_ENG_NM") + ") like '%'||UPPER('" + val + "')||'%'";
        					//strCondition = strCondition + " OR " + this.ds_srhCndClum.getColumn(i, "SRH_CLUM_ENG_NM") + " in (" + val + "))";
        				}
        			}else if(this.ds_srhCndClum.getColumn(i,"SRH_CLUM_TY")=="DATE"){
        				var val = eval("this.div_search.form.cal_"+this.ds_srhCndClum.getColumn(i,"SRH_CLUM_ENG_NM")+".value");
        				if(!this.gfn_isNull(val)){
        					if(comp.name.indexOf("_FROM")>-1)
        						strCondition = strCondition + " AND " + this.ds_srhCndClum.getColumn(i, "SRH_CLUM_ENG_NM") + ">=to_date('" + val + "','yyyymmdd')";
        					else if(comp.name.indexOf("_TO")>-1)
        						strCondition = strCondition + " AND " + this.ds_srhCndClum.getColumn(i, "SRH_CLUM_ENG_NM") + "<=to_date('" + val.split(",")+ "','yyyymmdd')+0.99999";
        					else
        						strCondition = strCondition + " AND " + this.ds_srhCndClum.getColumn(i, "SRH_CLUM_ENG_NM") + "=to_date('" + val + "','yyyymmdd')";

        				}
        			}

        		}

        		this.ds_qry.clearData();
        		this.ds_qry.addRow();
        		this.ds_qry.setColumn(0, "QUERY", strQry);
        		this.ds_qry.setColumn(0, "CONDITION", strCondition);
        		this.ds_qry.setColumn(0, "ORDERBY", strOrderBy);
        		// paging
        		this.ds_qry.setColumn(0, "PAGE_NUMBER", this.page);
        		this.ds_qry.setColumn(0, "PAGE_SIZE", this.LIST_COUNT);
        		// paging end

        		//trace(this.ds_qry.saveXML());

        		var sSvcID = "selectList";
        		var sController = "/cmsa00400/selectUserQryList.do";
        		var sInDatasets = "INPUT=ds_qry";
        		var sOutDatasets = "ds_result=output";
        		var sArgs = "";
        		sArgs += this.gfn_setParam("method", "selectUserQryList");
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	}
        	else if (this.ds_popup.getColumn(0, "QRY_TY") == "QR")
        	{
        		var strQry = this.ds_popup.getColumn(0, "QRY_URL");
        		var strCondition = "";
        		var arrParamCols = lv_paramCols.split("|");
        		var arrParamValues = lv_paramValues.split("|");
        		if (!this.nfn_isNull(lv_paramCols))
        		{
        			for (var i = 0; i < arrParamCols.length; i++)
        			{
        				strCondition = strCondition + " AND " + arrParamCols[i] + "='" + arrParamValues[i] + "'";
        			}
        		}
        		if (!this.nfn_isNull(this.div_search.form.edt_srh.value) && this.div_search.form.edt_srh.visible)
        		{
        			strCondition = strCondition + " AND UPPER(" + this.div_search.form.cbo_srh.value + ") LIKE '%' || UPPER('" + this.div_search.form.edt_srh.value + "') ||'%'";
        		}

        		// 고정 검색조건 값 셑팅
        		this.ds_srhCndClum.filter("FIXING_CLUM_YN=='N'");
        		for (var i = 0; i < this.ds_srhCndClum.rowcount; i++)
        		{
        			if("COMBO,LIST".indexOf(this.ds_srhCndClum.getColumn(i,"SRH_CLUM_TY"))>=0){
        				var val = eval("this.div_search.form.cbo_"+this.ds_srhCndClum.getColumn(i,"SRH_CLUM_ENG_NM")+".value");
        				if(this.gfn_isNull(val)) val = "";
        				val = this.gfn_quote(val);
        			}else if("STRING,POPUP,BIGDECIMAL".indexOf(this.ds_srhCndClum.getColumn(i,"SRH_CLUM_TY"))>=0){	// 콤보에 묶어주세요
        				var val = eval("this.div_search.form.edt_"+this.ds_srhCndClum.getColumn(i,"SRH_CLUM_ENG_NM")+".value");
        				if(this.gfn_isNull(val)) val = "";
        				val = this.gfn_quote(val);
        			}else if(this.ds_srhCndClum.getColumn(i,"SRH_CLUM_TY")=="DATE"){
        				var val = eval("this.div_search.form.cal_"+this.ds_srhCndClum.getColumn(i,"SRH_CLUM_ENG_NM")+".value");
        				if(this.gfn_isNull(val)) val = "";
        				val = this.gfn_quote(val);
        			}
        			strQry = strQry.replace(this.ds_srhCndClum.getColumn(i,"REPLACE_STR"),val);
        			strQry = strQry.replace(this.ds_srhCndClum.getColumn(i,"REPLACE_STR"),val);
        			strQry = strQry.replace(this.ds_srhCndClum.getColumn(i,"REPLACE_STR"),val);
        			strQry = strQry.replace(this.ds_srhCndClum.getColumn(i,"REPLACE_STR"),val);
        			strQry = strQry.replace(this.ds_srhCndClum.getColumn(i,"REPLACE_STR"),val);
        			strQry = strQry.replace(this.ds_srhCndClum.getColumn(i,"REPLACE_STR"),val);
        			strQry = strQry.replace(this.ds_srhCndClum.getColumn(i,"REPLACE_STR"),val);
        			strQry = strQry.replace(this.ds_srhCndClum.getColumn(i,"REPLACE_STR"),val);
        			strQry = strQry.replace(this.ds_srhCndClum.getColumn(i,"REPLACE_STR"),val);
        			strQry = strQry.replace(this.ds_srhCndClum.getColumn(i,"REPLACE_STR"),val);
        		}

        		this.ds_qry.clearData();
        		this.ds_qry.addRow();
        		this.ds_qry.setColumn(0, "QUERY", strQry);
        		this.ds_qry.setColumn(0, "CONDITION", strCondition);
        		this.ds_qry.setColumn(0, "ORDERBY", strOrderBy);
        		// paging
        		this.ds_qry.setColumn(0, "PAGE_NUMBER", this.page);
        		this.ds_qry.setColumn(0, "PAGE_SIZE", this.LIST_COUNT);
        		// paging end

        		//trace(this.ds_qry.saveXML());

        		var sSvcID = "selectList";
        		var sController = "/cmsa00400/selectUserQryList.do";
        		var sInDatasets = "INPUT=ds_qry";
        		var sOutDatasets = "ds_result=output";
        		var sArgs = "";
        		sArgs += this.gfn_setParam("method", "selectUserQryList");
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	}
        };

        /*******************************************************************************
         *  콜백 함수
         ******************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");

        	}
        	else
        	{
        		if (trId == "selectCmdPopupList")
        		{
        			this.fn_setHder();
        			this.fn_searchSrhCnd();
        		}
        		else if (trId == "selectCmdPopupSrhCndClumList")
        		{
        			this.fn_setSrhCnd();
        			this.fn_searchLine();
        		}
        		else if (trId == "selectCmdPopupPlsList")
        		{
        			this.fn_setLine();
        			this.nfn_formInit(this);
        			this.nfn_setGridToolTipText(this.grd_result);
        			this.grd_result.setFocus();
        			this.div_search.form.edt_srh.setFocus();
        			if (this.parent.arg_type=="AA" || this.parent.arg_type=="BA" || this.parent.arg_type=="CA" || this.parent.arg_type=="DA")
        			{
        				//검색조건 값 있을 경우 자동조회
        				if(!this.gfn_isNull(lv_searchStr)){
        					var arrSearch0 = lv_searchStr.split("|");
        					if(!this.gfn_isNull(arrSearch0)){
        						for(var index = 0; index < arrSearch0.length; index++){
        							var arrSearch = arrSearch0[index].split("=");
        							if(!this.gfn_isNull(arrSearch[1])){
        								this.fn_search();
        								return;
        							}
        						}
        					}
        				}
        			}

        		}
        		else if (trId == "selectList")
        		{
        			if(lv_checkIncludeYn=="Y" || lv_type=="C" || lv_type=="CA") this.ds_result.addColumn("CHK","STRING");
        			// paging
        			fv_pagingCheck = false;
        			// paging end

        			this.div_page.form.set_visible(true);
        			this.div_page.form.setPage(this.ds_result.getColumn(0, "TOTAL_ROWS"));

        			// if(this.ds_result.rowcount==1){
        			// if(!this.gfn_isNull(lv_type) && lv_type!="A") return;
        			if(this.ds_result.rowcount==1 && lv_type!="D" && lv_type!="DA") this.grd_result_oncelldblclick();
        			// }
        		}
        		else if(trId.indexOf("selectEcmLookupValuesVList2")>-1)
        		{
        			for(var i=0; i<arrCombo.length; i++){
        				arrCombo[i].set_index(0);
        			}

        		}

        	}
        };
        /**************************************************************************
         * 6. 팝업 시작
         **************************************************************************/



        /**************************************************************************
         * 7. 기타 함수 시작
         **************************************************************************/
        this.fn_searchHder = function ()
        {
        	var sSvcID = "selectCmdPopupList";
        	var sController = "/cmsa00100/selectCmdPopupList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_popup=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectCmdPopupList");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        // **************************************************************************************************
        // 검색 Line
        // **************************************************************************************************
        this.fn_searchSrhCnd = function ()
        {
        	this.ds_search.setColumn(0, "POPUP_ID", this.ds_popup.getColumn(0, "POPUP_ID"));

        	var sSvcID = "selectCmdPopupSrhCndClumList";
        	var sController = "/cmsa00100/selectCmdPopupSrhCndClumList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_srhCndClum=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectCmdPopupSrhCndClumList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.fn_searchLine = function ()
        {
        	this.ds_search.setColumn(0, "POPUP_ID", this.ds_popup.getColumn(0, "POPUP_ID"));

        	var sSvcID = "selectCmdPopupPlsList";
        	var sController = "/cmsa00100/selectCmdPopupPlsList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_popupPls=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectCmdPopupPlsList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };
        this.fn_setHder = function ()
        {
        	if(!this.gfn_isNull(lv_popupNm)){
        		this.sta_title.set_text(lv_popupNm);
        	}else
        	{
        		this.sta_title.set_text(this.ds_popup.getColumn(0, "POPUP_NM"));
        		this.set_titletext(this.ds_popup.getColumn(0, "POPUP_NM"));
        	}
        };

        this.fn_setLine = function ()
        {
        	//trace(this.ds_popupPls.saveCSV());
        	var nWidth = 0;
        	if(lv_type=="C" || lv_type=="CA"){
        		var nCol = this.grd_result.appendContentsCol();
        		this.grd_result.setCellProperty('Body', nCol, "text", "bind:CHK");
        		this.grd_result.setFormatColProperty(nCol, "size", 50);
        		this.grd_result.setCellProperty('Head', nCol, "displaytype", "checkboxcontrol");
        		this.grd_result.setCellProperty('Head', nCol, "edittype", "checkbox");
        		this.grd_result.setCellProperty('Head', nCol, "text", "0");
        		this.grd_result.setCellProperty('Body', nCol, "displaytype", "checkboxcontrol");
        		this.grd_result.setCellProperty('Body', nCol, "edittype", "checkbox");
        		lv_checkIncludeYn = "Y";
        	}
        	for (var i = 0; i < this.ds_popupPls.rowcount; i++)
        	{
        		if (this.ds_popupPls.getColumn(i, "CLUM_TY") == "check" && (lv_type=="C" || lv_type=="CA")) continue;

        		var nCol = this.grd_result.appendContentsCol();
        		this.grd_result.setCellProperty('Head', nCol, "text", this.ds_popupPls.getColumn(i, "CLUM_KOREAN_NM"));
        		this.grd_result.setCellProperty('Body', nCol, "text", "bind:" + this.ds_popupPls.getColumn(i, "CLUM_ENG_NM"));
        		this.grd_result.setFormatColProperty(nCol, "size", this.ds_popupPls.getColumn(i, "CLUM_SIZE") * 10);

        		if (!this.nfn_isNull(this.ds_popupPls.getColumn(i, "HRZNTLTY_ALIGN")))
        		{
        			//this.grd_result.setCellProperty('Body', nCol, "style", "align:" + this.ds_popupPls.getColumn(i, "HRZNTLTY_ALIGN") + ";");
        			this.grd_result.setCellProperty('Body', nCol, "textAlign", this.ds_popupPls.getColumn(i, "HRZNTLTY_ALIGN"));
        		}

        		this.grd_result.setCellProperty('Body', nCol, "displaytype", this.ds_popupPls.getColumn(i, "CLUM_TY"));
        		if (this.ds_popupPls.getColumn(i, "CLUM_TY") == "decimal")
        		{
        			this.grd_result.setCellProperty('Body', nCol, "displaytype", "number");
        		}

        		if (this.ds_popupPls.getColumn(i, "CLUM_TY") == "date")
        		{
        			this.grd_result.setCellProperty('Body', nCol, "calendardisplaynulltype", "none");
        		}
        		else if (this.ds_popupPls.getColumn(i, "CLUM_TY") == "number")
        		{
        			this.grd_result.setCellProperty('Body', nCol, "mask", "#,##0");
        		}
        		else if (this.ds_popupPls.getColumn(i, "CLUM_TY") == "decimal")
        		{
        			this.grd_result.setCellProperty('Body', nCol, "mask", "#,###.##");
        		}
        		else if (this.ds_popupPls.getColumn(i, "CLUM_TY") == "combo")
        		{
        			this.grd_result.setCellProperty('Body', nCol, "displaytype", "combotext");
        			this.grd_result.setCellProperty('Body', nCol, "combocodecol", this.ds_popupPls.getColumn(i, "CBO_CODE_TYPE"));
        		}
        		else if (this.ds_popupPls.getColumn(i, "CLUM_TY") == "list")
        		{
        			var dsName = "ds_p"+this.ds_popupPls.getColumn(i,"SRH_CLUM_ENG_NM");
        			this.grd_result.setCellProperty('Body', nCol, "displaytype", "combotext");
        			this.grd_result.setCellProperty('Body', nCol, "combocodecol", "CODE");
        			this.grd_result.setCellProperty('Body', nCol, "combodatacol", "NAME");
        			this.grd_result.setCellProperty('Body', nCol, "combodataset", dsName);

        			this.gfn_createDataset(this, dsName);
        			var strQry = this.ds_popupPls.getColumn(i,"CBO_CODE_TYPE")
        			this.ds_qry.clearData();
        			this.ds_qry.addRow();
        			this.ds_qry.setColumn(0, "QUERY", strQry);
        			var sSvcID = "selectUserQryList2";
        			var sController = "/cmsa00400/selectUserQryList.do";
        			var sInDatasets = "INPUT=ds_qry";
        			var sOutDatasets = dsName+"=output";
        			var sArgs = "";
        			sArgs += this.gfn_setParam("method", "selectUserQryList");
        			this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "",  "", false);
        		}
        		else if (this.ds_popupPls.getColumn(i, "CLUM_TY") == "check" && lv_type!="C" && lv_type!="CA")
        		{
        			this.grd_result.setCellProperty('Body', nCol, "displaytype", "checkboxcontrol");
        			this.grd_result.setCellProperty('Body', nCol, "edittype", "checkbox");
        			lv_checkIncludeYn = "Y";
        		}
        		else
        		{
        			this.grd_result.setCellProperty('Body', nCol, "displaytype", "text");
        		}

        		nWidth = nWidth + this.ds_popupPls.getColumn(i, "CLUM_SIZE") * 10;
        	}

        	if (nWidth < 450)
        	{
        		nWidth = 450;
        	}
        	if (nWidth > 550)
        	{
        		nWidth = 550;
        	}
        	//if(lv_divSearchWidth > nWidth) nWidth = lv_divSearchWidth;
        	//this.set_width(nWidth + 50);
        	// trace("widht -->"+nWidth);

        };

        this.fn_setSrhCnd = function ()
        {
        	var nRow;
        	this.ds_srhTy.clearData();
        	this.ds_srhCndClum.filter("FIXING_CLUM_YN=='Y'");
        	for (var i = 0; i < this.ds_srhCndClum.rowcount; i++)
        	{
        		nRow = this.ds_srhTy.addRow();
        		this.ds_srhTy.setColumn(nRow, "code", this.ds_srhCndClum.getColumn(i, "SRH_CLUM_ENG_NM"));
        		this.ds_srhTy.setColumn(nRow, "desc", this.ds_srhCndClum.getColumn(i, "SRH_CLUM_KOREAN_NM"));
        	}
        	this.div_search.form.cbo_srh.set_index(0);

        	this.fn_setSrhFixing();
        };

        this.fn_setSrhFixing = function ()
        {
        	var left = 3;
        	var top = 6;
        	var width = 0;
        	var margin = 10;
        	lv_divSearchWidth = 3;
        	var arrSearch0;
        	if (!this.nfn_isNull(lv_searchStr))
        	{
        		arrSearch0 = lv_searchStr.split("|");
        	}

        	this.ds_srhCndClum.filter("FIXING_CLUM_YN=='Y'");
        	if(this.ds_srhCndClum.rowcount>0){
        		if(!this.gfn_isNull(arrSearch0)){
        			for(var index = 0; index < arrSearch0.length; index++){
        				var arrSearch = arrSearch0[index].split("=");
        				if(this.ds_srhTy.findRow("code",arrSearch[0])>=0){
        					this.div_search.form.cbo_srh.set_value(arrSearch[0]);
        					this.div_search.form.edt_srh.set_value(this.gfn_isEmpty(arrSearch[1]));
        					this.div_search.form.edt_srh.setFocus();
        					break;
        				}
        			}
        		}
        		this.div_search.form.cbo_srh.set_visible(true);
        		this.div_search.form.edt_srh.set_visible(true);
        		left = nexacro.toNumber(this.div_search.form.edt_srh.left) + nexacro.toNumber(this.div_search.form.edt_srh.width) + margin;
        		lv_divSearchWidth = left;
        		cntObj = 2;
        		width = 136 + this.div_search.form.edt_srh.width;
        	}
        	for (var i = 0; i < this.ds_srhCndClum.rowcount; i++)
        	{
        		this.ds_search.addColumn(this.ds_srhCndClum.getColumn(i, "SRH_CLUM_ENG_NM"), this.ds_srhCndClum.getColumn(i, "SRH_CLUM_TY"));
        		// this.ds_search.setColumn(0,this.ds_srhCndClum.getColumn(i,"SRH_CLUM_ENG_NM"),this.ds_srhCndClum.getColumn(i,"SRH_VL"));
        	}

        	this.ds_srhCndClum.filter("FIXING_CLUM_YN=='N'");
        	var k=0;
        	for (var i = 0; i < this.ds_srhCndClum.rowcount; i++)
        	{
        		cntObj++;
        		if(cntObj > 3 && cntObj % 3 == 1){
        			left = 3;
        			top = top + 20 + 6;
        			this.div_search.set_height(nexacro.toNumber(this.div_search.height) +  + 20 + 6);
        			this.grd_result.set_top(nexacro.toNumber(this.grd_result.top) +  20 + 6);
        		}
        		if(this.ds_srhCndClum.getColumn(i,"SRH_CLUM_TY")=="COMBO"){
        			var text = this.ds_srhCndClum.getColumn(i,"DICTIONARYNAME");
        			if(this.gfn_isNull(text)) text = this.ds_srhCndClum.getColumn(i,"SRH_CLUM_KOREAN_NM");
        			var staId = "Static"+Math.random();
        			var objStatic = new Static(staId, left, top, this.nfn_getByteB(text)*6+2, 20, null, null);
        			this.div_search.addChild(staId, objStatic);
        			objStatic.set_fittocontents("width");
        			objStatic.set_text(text);
        			objStatic.show();
        			lv_divSearchWidth = lv_divSearchWidth + nexacro.toNumber(objStatic.width);

        			left = left +  nexacro.toNumber(objStatic.width) + 4;
        			var objCombo = new Combo("cbo_"+this.ds_srhCndClum.getColumn(i,"SRH_CLUM_ENG_NM"), left, top, 110, 20, null, null);
        			this.div_search.addChild("cbo_"+this.ds_srhCndClum.getColumn(i,"SRH_CLUM_ENG_NM"), objCombo);
        			objCombo.set_codecolumn(this.ds_srhCndClum.getColumn(i,"SRH_VL"));
        			objCombo.show();
        			width = objCombo.left + objCombo.width;

        			arrCombo[k] = objCombo;
        			k++;

        			left = left +  nexacro.toNumber(objCombo.width) + margin;
        			lv_divSearchWidth = left;
        			this.nfn_setLookupCodeCmb(objCombo,false);

        			if(!this.gfn_isNull(arrSearch0)){
        				for(var index = 0; index < arrSearch0.length; index++){
        					var arrSearch = arrSearch0[index].split("=");
        					if(arrSearch[0]==this.ds_srhCndClum.getColumn(i,"SRH_CLUM_ENG_NM")){
        						objCombo.set_value(this.gfn_isEmpty(arrSearch[1]));
        					}
        				}
        			}
        		}else if(this.ds_srhCndClum.getColumn(i,"SRH_CLUM_TY")=="STRING"){	// 콤보에 묶어주세요
        			var text = this.ds_srhCndClum.getColumn(i,"DICTIONARYNAME");
        			if(this.gfn_isNull(text)) text = this.ds_srhCndClum.getColumn(i,"SRH_CLUM_KOREAN_NM");
        			var staId = "Static"+Math.random();
        			var objStatic = new Static(staId, left, top, this.nfn_getByteB(text)*6+2, 20, null, null);
        			this.div_search.addChild(staId, objStatic);
        			objStatic.set_fittocontents("width");
        			objStatic.set_text(text);
        			objStatic.show();
        			lv_divSearchWidth = lv_divSearchWidth + nexacro.toNumber(objStatic.width);
        			left = left +  nexacro.toNumber(objStatic.width) + 4;
        			var objEdit = new Edit("edt_"+this.ds_srhCndClum.getColumn(i,"SRH_CLUM_ENG_NM"), left, top, 110, 20, null, null);
        			this.div_search.addChild("edt_"+this.ds_srhCndClum.getColumn(i,"SRH_CLUM_ENG_NM"), objEdit);
        			objEdit.show();
        			width = objEdit.left + objEdit.width;
        			left = left +  nexacro.toNumber(objEdit.width) + margin;
        			lv_divSearchWidth = left;

        			if(!this.gfn_isNull(arrSearch0)){
        				for(var index = 0; index < arrSearch0.length; index++){
        					var arrSearch = arrSearch0[index].split("=");
        					if(arrSearch[0]==this.ds_srhCndClum.getColumn(i,"SRH_CLUM_ENG_NM")){
        							objEdit.set_value(this.gfn_isEmpty(arrSearch[1]));
        					}
        				}
        			}
        		}else if(this.ds_srhCndClum.getColumn(i,"SRH_CLUM_TY")=="DATE"){
        			var text = this.ds_srhCndClum.getColumn(i,"DICTIONARYNAME");
        			if(this.gfn_isNull(text)) text = this.ds_srhCndClum.getColumn(i,"SRH_CLUM_KOREAN_NM");
        			var staId = "Static"+Math.random();
        			var objStatic = new Static(staId, left, top, this.nfn_getByteB(text)*6+2, 20, null, null);
        			this.div_search.addChild(staId, objStatic);
        			objStatic.set_fittocontents("width");
        			objStatic.set_text(text);
        			objStatic.show();
        			lv_divSearchWidth = lv_divSearchWidth + nexacro.toNumber(objStatic.width);

        			left = left +  nexacro.toNumber(objStatic.width) + 4;
        			var objCalendar = new Calendar("cal_"+this.ds_srhCndClum.getColumn(i,"SRH_CLUM_ENG_NM"), left, top, 110, 20, null, null);
        			this.div_search.addChild("cal_"+this.ds_srhCndClum.getColumn(i,"SRH_CLUM_ENG_NM"), objCalendar);
        			objCalendar.show();
        			width = objCalendar.left + objCalendar.width;
        			left = left +  nexacro.toNumber(objCalendar.width) + margin;
        			lv_divSearchWidth = left;

        			if(!this.gfn_isNull(arrSearch0)){
        				for(var index = 0; index < arrSearch0.length; index++){
        					var arrSearch = arrSearch0[index].split("=");
        					if(arrSearch[0]==this.ds_srhCndClum.getColumn(i,"SRH_CLUM_ENG_NM")){
        						objCalendar.set_value(this.gfn_isEmpty(arrSearch[1]));
        					}
        				}
        			}
        		}else if(this.ds_srhCndClum.getColumn(i,"SRH_CLUM_TY")=="LIST"){
        			var text = this.ds_srhCndClum.getColumn(i,"DICTIONARYNAME");
        			if(this.gfn_isNull(text)) text = this.ds_srhCndClum.getColumn(i,"SRH_CLUM_KOREAN_NM");
        			var staId = "Static"+Math.random();
        			var objStatic = new Static(staId, left, top, this.nfn_getByteB(text)*6+2, 20, null, null);
        			this.div_search.addChild(staId, objStatic);
        			objStatic.set_fittocontents("width");
        			objStatic.set_text(text);
        			objStatic.show();
        			lv_divSearchWidth = lv_divSearchWidth + nexacro.toNumber(objStatic.width);

        			left = left +  nexacro.toNumber(objStatic.width) + 4;
        			var dsName = "ds_"+this.ds_srhCndClum.getColumn(i,"SRH_CLUM_ENG_NM");
        			var objCombo = new Combo("cbo_"+this.ds_srhCndClum.getColumn(i,"SRH_CLUM_ENG_NM"), left, top, 110, 20, null, null);
        			this.div_search.addChild("cbo_"+this.ds_srhCndClum.getColumn(i,"SRH_CLUM_ENG_NM"), objCombo);
        			this.gfn_createDataset(this, dsName);
        			objCombo.set_codecolumn("CODE");
        			objCombo.set_datacolumn("NAME");
        			objCombo.set_innerdataset(dsName);
        			objCombo.show();
        			width = objCombo.left + objCombo.width;
        			arrCombo[k] = objCombo;
        			k++;

        			left = left +  nexacro.toNumber(objCombo.width) + margin;
        			lv_divSearchWidth = left;
        			var strQry = this.ds_srhCndClum.getColumn(i,"SRH_VL")
        			this.ds_qry.clearData();
        			this.ds_qry.addRow();
        			this.ds_qry.setColumn(0, "QUERY", strQry);
        			var sSvcID = "selectUserQryList";
        			var sController = "/cmsa00400/selectUserQryList.do";
        			var sInDatasets = "INPUT=ds_qry";
        			var sOutDatasets = dsName+"=output";
        			var sArgs = "";
        			this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "",  "", false);
        			objCombo.set_index(0);
        			if(!this.gfn_isNull(arrSearch0)){
        				for(var index = 0; index < arrSearch0.length; index++){
        					var arrSearch = arrSearch0[index].split("=");
        					if(arrSearch[0]==this.ds_srhCndClum.getColumn(i,"SRH_CLUM_ENG_NM")){
        						objCombo.set_value(this.gfn_isEmpty(arrSearch[1]));
        					}
        				}
        			}
        		}else if(this.ds_srhCndClum.getColumn(i,"SRH_CLUM_TY")=="POPUP"){
        			var text = this.ds_srhCndClum.getColumn(i,"DICTIONARYNAME");
        			if(this.gfn_isNull(text)) text = this.ds_srhCndClum.getColumn(i,"SRH_CLUM_KOREAN_NM");
        			var staId = "Static"+Math.random();
        			var objStatic = new Static(staId, left, top, this.nfn_getByteB(text)*6+2, 20, null, null);
        			this.div_search.addChild(staId, objStatic);
        			objStatic.set_fittocontents("width");
        			objStatic.set_text(text);
        			objStatic.show();
        			lv_divSearchWidth = lv_divSearchWidth + nexacro.toNumber(objStatic.width);
        			left = left +  nexacro.toNumber(objStatic.width) + 4;
        			var objEdit = new Edit("edt_"+this.ds_srhCndClum.getColumn(i,"SRH_CLUM_ENG_NM"), left, top, 99, 20, null, null);
        			this.div_search.addChild("edt_"+this.ds_srhCndClum.getColumn(i,"SRH_CLUM_ENG_NM"), objEdit);
        			objEdit.set_readonly(true);
        			objEdit.show();
        			left = left + 2;

        			var objButton = new Button("btn_"+this.ds_srhCndClum.getColumn(i,"SRH_CLUM_ENG_NM"), left, top, 22, 20, null, null);
        			objButton.set_cssclass("btn_WF_finder");
        			objButton.set_left(objEdit.name+":2");
        			objEdit.parent.addChild("btn_"+this.ds_srhCndClum.getColumn(i,"SRH_CLUM_ENG_NM"), objButton);
        			var nIndex = objButton.addEventHandler("onclick", this.fn_openComPopup , this);
        			objButton.show();

        			left = left +  nexacro.toNumber(objEdit.width) + 22 + 2;
        			var objEdit = new Edit("edt_"+this.ds_srhCndClum.getColumn(i,"SRH_CLUM_ENG_NM")+"_nm", left, top, 110, 20, null, null);
        			this.div_search.addChild("edt_"+this.ds_srhCndClum.getColumn(i,"SRH_CLUM_ENG_NM")+"_nm", objEdit);
        			objEdit.set_readonly(true);
        			objEdit.show();
        			width = objEdit.left + objEdit.width;

        			left = left + nexacro.toNumber(objEdit.width) + margin;
        			lv_divSearchWidth = left;

        			arr_popupId[arrIndex] = "btn_"+this.ds_srhCndClum.getColumn(i,"SRH_CLUM_ENG_NM");
        			arr_popupCd[arrIndex] = this.ds_srhCndClum.getColumn(i,"SRH_VL");
        			arr_rtnCols[arrIndex] = this.ds_srhCndClum.getColumn(i,"POPUP_RETURN_COLS");
        			arrIndex++;
        		}
        		//alert(width);
        		if(width>550 && this.parent.width<=600){
        			this.set_width(this.width + 100);
        			this.parent.set_width(this.parent.width + 100);
        		}
        	}
        	this.gfn_setEnterSearch(this.div_search,"nfn_search");
        };

        this.fn_paging_onload = function (obj)
        {
        	this.page = Eco.XComp.getUserProperty(obj, "pageNum"); //페이지 넘버 클릭시 페이지 값 전달위한 프로퍼티 세팅,
        	if (Eco.isEmpty(this.page))
        	{
        		this.page = 1;
        	}
        	// 값이 null 일때 1페이지
        	// trace("this.LIST_COUNT= " + this.LIST_COUNT + " | this.PAGE_COUNT = " + this.PAGE_COUNT + " | this.onChangePage = " + this.onChangePage);
        	this.div_page.form.initPaging(this.LIST_COUNT, this.PAGE_COUNT, this.onChangePage, this); //디비전 속 페이지
        	this.div_page.form.setCurrentPage(this.page); //디비전 속 페이지
        };

        /* 조회시 항상 1페이지 호출 */
        this.fn_setPageInit = function ()
        {
        	this.page = 1;
        	this.div_page.form.initPaging(this.LIST_COUNT, this.PAGE_COUNT, this.onChangePage, this);
        };

        /* 페이지 변경 시 호출됨 */
        this.onChangePage = function (page)
        {
        	Eco.XComp.setUserProperty(this, "pageNum", page);
        	this.page = page;
        	this.div_page.form.setCurrentPage(page);
        	fv_pagingCheck = true;
        	this.fn_search();
        };
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        // **************************************************************************************************
        // 검색 Hder
        // **************************************************************************************************

        this.btn_close_onclick = function (obj, e)
        {
        	var rtnArray = new Array();
        	this.opener.fv_rtnValue = rtnArray;
        	this.close();
        };

        this.grd_result_oncelldblclick = function (obj, e)
        {
        	if(lv_checkIncludeYn == "Y"){
        		this.ds_result.setColumn(this.ds_result.rowposition,"CHK","1");
        		trace(this.ds_result.saveXML());
        		this.btn_sel_onclick();
        		return;
        	}
        	var rtnArray = new Array();
        	if (this.gfn_isNull(lv_rtnCols))
        	{
        		for (var i = 1; i <= this.grd_result.getCellCount("Body"); i++)
        		{
        			if(!this.gfn_isNull(this.grd_result.getCellProperty("Body", i, "text"))){
        				var colId = this.grd_result.getCellProperty("Body", i, "text").replace("bind:", "");
        				rtnArray[i - 1] = this.ds_result.getColumn(this.ds_result.rowposition, colId);
        			}
        		}
        	}
        	else
        	{
        		arrRtnCols = lv_rtnCols.split("|");
        		for (var i = 0; i < arrRtnCols.length; i++)
        		{
        			rtnArray[i] = this.ds_result.getColumn(this.ds_result.rowposition, arrRtnCols[i]);
        		}
        	}

        	this.opener.fv_rtnValue = rtnArray;
        	this.close();
        	// this.gfn_popupClose(rtnArray);	//위든 아래든 아무거나 사용
        };

        this.div_search_edt_srh_onkeydown = function (obj, e)
        {
        	if (e.keycode != 13)
        	{
        		return;
        	}

        	this.fn_search();
        };

        this.btn_sel_onclick = function (obj, e)
        {
        	//NoSelections	선택된 항목이 없습니다.
        	if (this.ds_result.rowposition < 0)
        	{
        		this.gfn_Message("NoSelections", "", "warning", "ok");
        		return;
        	}
        	if (lv_checkIncludeYn == "Y" && this.ds_result.getCaseCount("CHK=='1'")==0)
        	{
        		this.gfn_Message("NoSelections", "", "warning", "ok");
        		return;
        	}
        	if(lv_checkIncludeYn == "Y"){
        		var index = 0;
        		var rtnArray = new Array();
        		for(var j=0; j<this.ds_result.rowcount; j++){
        			if(this.ds_result.getColumn(j,"CHK")!="1") continue;
        			var colArray = new Array();
        			if (this.gfn_isNull(lv_rtnCols))
        			{
        				for (var i = 1; i <= this.grd_result.getCellCount("Body"); i++)
        				{
        					var colId = this.grd_result.getCellProperty("Body", i, "text").replace("bind:", "");
        					colArray[i - 1] = this.ds_result.getColumn(j, colId);
        				}
        			}
        			else
        			{
        				arrRtnCols = lv_rtnCols.split("|");
        				for (var i = 0; i < arrRtnCols.length; i++)
        				{
        					colArray[i] = this.ds_result.getColumn(j, arrRtnCols[i]);
        				}
        			}
        			rtnArray[index] = colArray;
        			index++;
        		}
        		if(this.gfn_isNull(rtnArray)){
        			this.gfn_Message("NoSelections", "", "warning", "ok");
        			return;
        		}
        		this.opener.fv_rtnValue = rtnArray;
        		this.close();

        	}else{
        		this.grd_result_oncelldblclick();
        	}
        };

        this.div_search_cbo_srh_onitemchanged = function (obj, e)
        {
        	//this.div_search.form.edt_srh.set_value("");
        	this.div_search.form.edt_srh.setFocus();
        };

        this.fn_openComPopup= function(obj,e)
        {
        	for(var i=0; i<arr_popupId.length; i++){
        		if(arr_popupId[i]==obj.name){
        			this.nfn_openComPopup(obj.name,"B", arr_popupCd[i], arr_rtnCols[i],"","","");
        			return;
        		}
        	}
        };

        /**************************************************************************
         * 80. 팝업
        ***************************************************************************/
        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;
        	var edtName = "edt_"+sPopupId.substring(4);
        	for(var i=0; i<arr_popupId.length; i++){
        		if(arr_popupId[i]==sPopupId){
        			var comp = this.nfn_getComponent(this.div_search,edtName,Edit);
        			comp.set_value(rtn[0]);
        			var comp = this.nfn_getComponent(this.div_search,edtName+"_nm",Edit);
        			comp.set_value(rtn[1]);

        			return;
        		}
        	}

        }
        this.grd_result_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.grd_result_oncelldblclick();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.Static18.addEventHandler("onclick",this.Static18_onclick,this);
            this.div_search.form.cbo_srh.addEventHandler("onitemchanged",this.div_search_cbo_srh_onitemchanged,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.grd_result.addEventHandler("onselectchanged",this.grd_EapInvoiceDistributionsAll_onselectchanged,this);
            this.grd_result.addEventHandler("oncelldblclick",this.grd_result_oncelldblclick,this);
            this.grd_result.addEventHandler("onmouseenter",this.grd_result_onmouseenter,this);
            this.grd_result.addEventHandler("onkeydown",this.grd_result_onkeydown,this);
            this.btn_x.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_sel.addEventHandler("onclick",this.btn_sel_onclick,this);
            this.btn_close00.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("CMSA00100P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
