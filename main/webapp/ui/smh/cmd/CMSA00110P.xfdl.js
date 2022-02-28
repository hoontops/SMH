(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMSA00110P");
            this.set_titletext("공통팝업");
            this.set_cssclass("form_PopupBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,645);
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
            obj._setContents("<ColumnInfo><Column id=\"POPUP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CM_POPUP_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ORDERBY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"CM_POPUP_ID\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"POPUP_CD\" size=\"256\" type=\"STRING\"/><Column id=\"POPUP_NM\" size=\"256\" type=\"STRING\"/><Column id=\"QRY_URL\" size=\"256\" type=\"STRING\"/><Column id=\"MTH\" size=\"256\" type=\"STRING\"/><Column id=\"DEL_YN\" size=\"256\" type=\"STRING\"/><Column id=\"CREATED_BY\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"CREATION_DATE\" size=\"256\" type=\"DATE\"/><Column id=\"LAST_UPDATED_BY\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"LAST_UPDATE_DATE\" size=\"256\" type=\"DATE\"/><Column id=\"LAST_UPDATED_LOGIN\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"QRY_TY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popupPls", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CM_POPUP_PLS_ID\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"CM_POPUP_ID\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"CLUM_KOREAN_NM\" size=\"256\" type=\"STRING\"/><Column id=\"CLUM_ENG_NM\" size=\"256\" type=\"STRING\"/><Column id=\"CLUM_SIZE\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"CLUM_TY\" size=\"256\" type=\"STRING\"/><Column id=\"HRZNTLTY_QEE\" size=\"256\" type=\"STRING\"/><Column id=\"QRY_SEQ\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"CREATED_BY\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"CREATED_DATE\" size=\"256\" type=\"DATE\"/><Column id=\"LAST_UPDATED_BY\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"LAST_UPDATED_DATE\" size=\"256\" type=\"DATE\"/><Column id=\"LAST_UPDATED_LOGIN\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"QEE_ORDR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"QEE_DRC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_srhCndClum", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CM_POPUP_SRH_CND_CLUM_ID\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"CM_POPUP_ID\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"SRH_CLUM_KOREAN_NM\" size=\"256\" type=\"STRING\"/><Column id=\"SRH_CLUM_ENG_NM\" size=\"256\" type=\"STRING\"/><Column id=\"SRH_CLUM_TY\" size=\"256\" type=\"STRING\"/><Column id=\"SRH_VL\" size=\"256\" type=\"STRING\"/><Column id=\"FIXING_CLUM_YN\" size=\"256\" type=\"STRING\"/><Column id=\"CREATED_BY\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"CREATION_DATE\" size=\"256\" type=\"DATE\"/><Column id=\"LAST_UPDATED_BY\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"LAST_UPDATE_DATE\" size=\"256\" type=\"DATE\"/><Column id=\"LAST_UPDATED_LOGIN\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"QEE_ORDR\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qry", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"QUERY\" size=\"256\" type=\"STRING\"/><Column id=\"CONDITION\" type=\"STRING\" size=\"256\"/><Column id=\"ORDERBY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search00", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SRH_CLUM_ENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SRH_CLUM_KOREAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SRH_VL\" type=\"STRING\" size=\"256\"/><Column id=\"SRH_CLUM_TY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","7","43",null,"114","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchBg");
            obj.set_background("rgba(247,247,247,1)");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"6","60","21","5",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_cssclass("btn_DR_GridSearch");
            obj.set_tooltiptype("hover");
            this.div_search.addChild(obj.name, obj);

            obj = new Grid("grd_result","5","5",null,"106","70",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_binddataset("ds_search00");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"234\"/><Column size=\"161\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"검색항목\"/><Cell col=\"2\" text=\"검색값\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:SRH_CLUM_KOREAN_NM\"/><Cell col=\"2\" displaytype=\"expr:SRH_CLUM_TY==&apos;DATE&apos;?&apos;date&apos;:&apos;normal&apos;\" edittype=\"expr:SRH_CLUM_TY==&apos;DATE&apos;?&apos;date&apos;:&apos;normal&apos;\" text=\"bind:SRH_VL\"/></Band></Format></Formats>");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_title","2.67%","12",null,"20","54%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("팝업 타이틀명");
            obj.set_cssclass("sta_WF_popTitle");
            obj.set_font("bold 11pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_result","6","169",null,"434","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_result");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/></Band><Band id=\"body\"><Cell edittype=\"none\" text=\"expr:currow+1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"614","56","21","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_basic");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sel",null,"614","56","21","71",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_basic");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","98.17%","0",null,"588","0%",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","2.5%","159",null,"10","4.83%",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","-0.5%","8",null,"556","98.83%",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","96.17%","0",null,"23","0%",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("btn_POP_Close");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,645,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CMSA00110P.xfdl", function() {
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
        /**************************************************************************
         * 3. FORM 정의
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	// lv_hderId = this.parent.arg_hderId;
        	lv_popupCd = this.parent.arg_popupCd;
        	lv_rtnCols = this.parent.arg_rtnCols;
        	lv_paramCols = this.parent.arg_paramCols;
        	lv_paramValues = this.parent.arg_paramValues;
        	lv_searchStr = this.parent.arg_searchStr;
        	lv_popupNm = this.parent.arg_popupNm;
        	lv_type = this.parent.arg_type;

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	// this.ds_search.setColumn(0,"CM_POPUP_ID",lv_hderId);
        	this.ds_search.setColumn(0, "POPUP_CD", lv_popupCd);
        	this.fn_searchHder();

        	this.nfn_formInit(obj);
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_search.clearData();
        	this.ds_search.addRow();

        	// 고정 검색조건 값 셑팅
        	this.ds_srhCndClum.filter("FIXING_CLUM_YN=='Y'");
        	for (var i = 0; i < this.ds_srhCndClum.rowcount; i++)
        	{
        		this.ds_search.setColumn(0, this.ds_srhCndClum.getColumn(i, "SRH_CLUM_ENG_NM"), this.ds_srhCndClum.getColumn(i, "SRH_VL"));
        	}
        	if (!this.gfn_isNull(lv_paramCols))
        	{
        		var arrParamCols = lv_paramCols.split("|");
        		var arrParamValues = lv_paramValues.split("|");
        		for (var i = 0; i < arrParamCols.length; i++)
        		{
        			this.ds_search.addColumn(arrParamCols[i], "string");
        			this.ds_search.setColumn(0, arrParamCols[i], arrParamValues[i]);
        		}
        	}


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
        	/*
        	 var sColNm = this.div_search.cbo_srh.value;
        	 if(this.nfn_getCntOfColNm(this.ds_search,sColNm)==0)
        	 this.ds_search.addColumn(sColNm,"STRING");
        	 this.ds_search.setColumn(0,sColNm,this.div_search.edt_srh.value);
        	 */
        	for (var i = 0; i < this.ds_search00.rowcount; i++)
        	{
        		if (!this.nfn_isNull(this.ds_search00.getColumn(i, "SRH_VL")))
        		{
        			if (this.nfn_getCntOfColNm(this.ds_search, this.ds_search00.getColumn(i, "SRH_CLUM_ENG_NM")) == 0)
        			{
        				this.ds_search.addColumn(this.ds_search00.getColumn(i, "SRH_CLUM_ENG_NM"), this.ds_search00.getColumn(i, "SRH_CLUM_TY"));
        			}
        			this.ds_search.setColumn(0, this.ds_search00.getColumn(i, "SRH_CLUM_ENG_NM"), this.ds_search00.getColumn(i, "SRH_VL"));
        		}
        	}
        	trace(this.ds_search00.saveXML());

        	if (this.ds_popup.getColumn(0, "QRY_TY") == "U")
        	{
        		this.ds_search.setColumn(0, "ORDERBY", strOrderBy);

        		var sSvcID = "selectList";
        		var sController = this.ds_popup.getColumn(0, "QRY_URL");
        		var sInDatasets = "INPUT=ds_search";
        		var sOutDatasets = "ds_result=output";
        		var sArgs = "";
        		sArgs += this.gfn_setParam("method", this.ds_popup.getColumn(0, "MTH"));
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	}
        	else
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
        		if (!this.nfn_isNull(this.div_search.edt_srh.value))
        		{
        			strCondition = strCondition + " AND " + this.div_search.cbo_srh.value + " LIKE '%" + this.div_search.edt_srh.value + "%'";
        		}

        		// 고정 검색조건 값 셑팅
        		this.ds_srhCndClum.filter("FIXING_CLUM_YN=='Y'");
        		for (var i = 0; i < this.ds_srhCndClum.rowcount; i++)
        		{
        			if (!this.gfn_isNull(this.ds_srhCndClum.getColumn(i, "SRH_VL")))
        			{
        				if (this.ds_srhCndClum.getColumn(i, "SRH_CLUM_TY") == "STRING")
        				{
        					strCondition = strCondition + " AND " + this.ds_srhCndClum.getColumn(i, "SRH_CLUM_ENG_NM") + "='" + this.ds_srhCndClum.getColumn(i, "SRH_VL") + "'";
        				}
        				else
        				{
        					strCondition = strCondition + " AND " + this.ds_srhCndClum.getColumn(i, "SRH_CLUM_ENG_NM") + "=" + this.ds_srhCndClum.getColumn(i, "SRH_VL") + "";
        				}
        			}
        		}




        		this.ds_qry.clearData();
        		this.ds_qry.addRow();
        		this.ds_qry.setColumn(0, "QUERY", strQry);
        		this.ds_qry.setColumn(0, "CONDITION", strCondition);
        		this.ds_qry.setColumn(0, "ORDERBY", strOrderBy);

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
        		if (trId.substring(0, 6) == "select")
        		{
        			this.gfn_Message("SMCMM0005", trId + errMsg, "error", "ok");
        		}
        		else
        		{
        			alert(errMsg);
        		}
        	}
        	else
        	{
        		if (trId == "selectEcmPopupList")
        		{
        			this.fn_setHder();
        			this.fn_searchLine();
        		}
        		else if (trId == "selectEcmPopupPlsList")
        		{
        			this.fn_setLine();
        		}
        		else if (trId == "selectEcmPopupSrhCndClumList")
        		{
        			this.fn_setSrhCnd();
        		}
        		else if (trId == "selectList")
        		{
        			if (this.ds_result.rowcount == 1)
        			{
        				if (!this.gfn_isNull(lv_type) && lv_type != "A")
        				{
        					return;
        				}
        				this.grd_result_oncelldblclick();
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
        	var sSvcID = "selectEcmPopupList";
        	var sController = "/cmsa00100/selectEcmPopupList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_popup=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectEcmPopupList");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        // **************************************************************************************************
        // 검색 Line
        // **************************************************************************************************
        this.fn_searchLine = function ()
        {
        	this.ds_search.setColumn(0, "CM_POPUP_ID", this.ds_popup.getColumn(0, "CM_POPUP_ID"));

        	var sSvcID = "selectEcmPopupPlsList";
        	var sController = "/cmsa00100/selectEcmPopupPlsList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_popupPls=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectEcmPopupPlsList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        	var sSvcID = "selectEcmPopupSrhCndClumList";
        	var sController = "/cmsa00100/selectEcmPopupSrhCndClumList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_srhCndClum=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectEcmPopupSrhCndClumList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.fn_setHder = function ()
        {
        	// this.sta_title.set_text(lv_popupNm);
        	// this.set_titletext(lv_popupNm);
        	if (this.nfn_isNull(lv_popupNm))
        	{
        		this.sta_title.set_text(this.ds_popup.getColumn(0, "POPUP_NM"));
        		this.set_titletext(this.ds_popup.getColumn(0, "POPUP_NM"));
        	}
        	else
        	{
        		this.sta_title.set_text(lv_popupNm);
        		this.set_titletext(lv_popupNm);
        	}
        };

        this.fn_setLine = function ()
        {
        	// trace(this.ds_popupPls.saveXML());
        	var nWidth = 0;
        	for (var i = 0; i < this.ds_popupPls.rowcount; i++)
        	{
        		var nCol = this.grd_result.appendContentsCol();
        		this.grd_result.setCellProperty('Head', nCol, "text", this.ds_popupPls.getColumn(i, "CLUM_KOREAN_NM"));
        		this.grd_result.setCellProperty('Body', nCol, "text", "bind:" + this.ds_popupPls.getColumn(i, "CLUM_ENG_NM"));
        		this.grd_result.setFormatColProperty(nCol, "size", this.ds_popupPls.getColumn(i, "CLUM_SIZE") * 10);

        		if (!this.nfn_isNull(this.ds_popupPls.getColumn(i, "HRZNTLTY_ALIGN")))
        		{
        			this.grd_result.setCellProperty('Body', nCol, "style", "align:" + this.ds_popupPls.getColumn(i, "HRZNTLTY_ALIGN") + ";");
        		}

        		trace(this.ds_popupPls.getColumn(i, "CLUM_TY"));
        		this.grd_result.setCellProperty('Body', nCol, "displaytype", this.ds_popupPls.getColumn(i, "CLUM_TY"));
        		if (this.ds_popupPls.getColumn(i, "CLUM_TY") == "date")
        		{
        			this.grd_result.setCellProperty('Body', nCol, "calendardisplaynulltype", "none");
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
        	this.set_width(nWidth + 50);
        	// trace("widht -->"+nWidth);
        };

        this.fn_setSrhCnd = function ()
        {
        	/*
        	 var nRow;
        	 this.ds_srhTy.clearData();
        	 this.ds_srhCndClum.filter("FIXING_CLUM_YN!='Y'");
        	 for(var i=0; i<this.ds_srhCndClum.rowcount; i++){
        	 nRow = this.ds_srhTy.addRow();
        	 this.ds_srhTy.setColumn(nRow,"code",this.ds_srhCndClum.getColumn(i,"SRH_CLUM_ENG_NM"));
        	 this.ds_srhTy.setColumn(nRow,"desc",this.ds_srhCndClum.getColumn(i,"SRH_CLUM_KOREAN_NM"));
        	 }
        	 this.div_search.cbo_srh.set_index(0);
        	 */
        	var nRow;
        	this.ds_search00.clearData();
        	this.ds_srhCndClum.filter("FIXING_CLUM_YN!='Y'");
        	this.ds_search00.copyData(this.ds_srhCndClum, true);

        	this.fn_setSrhFixing();
        };

        this.fn_setSrhFixing = function ()
        {
        	this.ds_srhCndClum.filter("FIXING_CLUM_YN=='Y'");
        	for (var i = 0; i < this.ds_srhCndClum.rowcount; i++)
        	{
        		this.ds_search.addColumn(this.ds_srhCndClum.getColumn(i, "SRH_CLUM_ENG_NM"), this.ds_srhCndClum.getColumn(i, "SRH_CLUM_TY"));
        		// this.ds_search.setColumn(0,this.ds_srhCndClum.getColumn(i,"SRH_CLUM_ENG_NM"),this.ds_srhCndClum.getColumn(i,"SRH_VL"));
        	}
        	/*
        	 var arrParamCols = lv_paramCols.split("|");
        	 var arrParamValues = lv_paramValues.split("|");
        	 for(var i=0; i<arrParamCols.length; i++){
        	 this.ds_search.setColumn(0,arrParamCols[i],arrparamValues[i]);
        	 }
        	 */
        	if (!this.nfn_isNull(lv_searchStr))
        	{
        		var arrSearch = lv_searchStr.split("=");
        		this.div_search.cbo_srh.set_value(arrSearch[0]);
        		this.div_search.edt_srh.set_value(arrSearch[1]);
        		// if(!this.gfn_isNull(arrSearch[1])) this.fn_search();
        		this.fn_search();
        	}
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
        	arrRtnCols = lv_rtnCols.split("|");
        	var rtnArray = new Array();

        	for (var i = 0; i < arrRtnCols.length; i++)
        	{
        		rtnArray[i] = this.ds_result.getColumn(this.ds_result.rowposition, arrRtnCols[i]);
        	}
        	trace("rtnArray-->" + rtnArray);
        	this.opener.fv_rtnValue = rtnArray;
        	this.close();
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
        	if (this.ds_result.rowposition < 0)
        	{
        		this.gfn_Message("IMCMM0026", "데이터", "warning", "ok");
        		return;
        	}
        	this.grd_result_oncelldblclick();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.fn_init,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.div_search.form.grd_result.addEventHandler("oncelldblclick",this.grd_result_oncelldblclick,this);
            this.div_search.form.grd_result.addEventHandler("onselectchanged",this.grd_EapInvoiceDistributionsAll_onselectchanged,this);
            this.grd_result.addEventHandler("onselectchanged",this.grd_EapInvoiceDistributionsAll_onselectchanged,this);
            this.grd_result.addEventHandler("oncelldblclick",this.grd_result_oncelldblclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_sel.addEventHandler("onclick",this.btn_sel_onclick,this);
            this.Button00.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("CMSA00110P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
