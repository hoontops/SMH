(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM03300P2");
            this.set_titletext("선택 LOT 보기");
            this.set_tooltiptext("VIEWSELECTLOT");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_lotInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTARTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP1_LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP2_LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_group1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTARTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP1_LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP2_LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_group2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTARTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP1_LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP2_LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTARTDATEFR\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSCOMPLETEYN\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTARTDATETO\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREDATEFR\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREDATETO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","66","0","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,null,"50","20","117","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","0","47","20","84",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00",null,"86","20","84","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,null,"50","10","20","48",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Button("btn_x_close",null,"0","20","20","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("CLOSE");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_01","0","204","20","84",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,null,"70","28","95","20",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("저장");
            obj.set_cssclass("btn_pop_yes");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,null,"70","28","20","20",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("닫기");
            obj.set_cssclass("btn_pop_no");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","20","20",null,"65","20",null,null,null,"65",null,this);
            obj.set_taborder("12");
            obj.set_cssclass("div_WF_search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_productdef","0","10","80","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMNAME");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_productdef","sta_productdef:10","10","150","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_productdef","edt_productdef:0","10","22","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_finder");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_productdefcode","btn_productdef:10","10","80","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMID");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_productdef_id","sta_productdefcode:10","10","120","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10","70","24","39",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btnReset",null,"11","24","24","10",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_SA_reset2");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_lotstartdate","0","35","80","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("투입일");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("INPUTDAY");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_productdefversion","492","10","80","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("Rev");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFVERSION");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_productdef_cd","sta_productdefversion:10","10","100","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_enable("false");
            obj.set_text("품목ID (HIDDEN)");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_lotstartdatefr","sta_lotstartdate:10","35","172","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_lotstartdateto","cal_lotstartdatefr:5","35","172","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_processcomplete","492","35","80","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_text("진행완료");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PROCESSCOMPLETE");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_processcomplete","sta_processcomplete:10","35","165","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_codecolumn("C,YesNo,,Y,Y");
            obj.set_value("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_lotInfo","20","div_search:10","250","31",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("LOT 정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("LOTINFO");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_userApproval","20","sta_lotInfo:0","45%",null,null,"58",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_lotInfo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"210\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell col=\"3\" text=\"투입일\" tooltiptext=\"INPUTDAY\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:LOTID\"/><Cell col=\"3\" text=\"bind:LOTSTARTDATE\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_lotGroup","grd_userApproval:10","div_search:10",null,null,"20","58",null,null,null,null,this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Div("div_group1","0","0",null,"49%","0",null,null,null,null,null,this.div_lotGroup.form);
            obj.set_taborder("0");
            obj.set_background("");
            obj.set_text("");
            this.div_lotGroup.addChild(obj.name, obj);

            obj = new Static("sta_group1","48","0","250","31",null,null,null,null,null,null,this.div_lotGroup.form.div_group1.form);
            obj.set_taborder("0");
            obj.set_text("GROUP1");
            obj.set_cssclass("sta_WF_subTitle");
            this.div_lotGroup.form.div_group1.addChild(obj.name, obj);

            obj = new Grid("grd_approvalList","50","sta_group1:0",null,null,"0","0",null,null,null,null,this.div_lotGroup.form.div_group1.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_group1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"210\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell col=\"3\" text=\"투입일\" tooltiptext=\"INPUTDAY\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:GROUP1_LOTID\"/><Cell col=\"3\" text=\"bind:LOTSTARTDATE\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.div_lotGroup.form.div_group1.addChild(obj.name, obj);

            obj = new Button("btn_add","0","101","40","38",null,null,null,null,null,null,this.div_lotGroup.form.div_group1.form);
            obj.set_taborder("2");
            obj.set_icon("url(\'image::button_right.png\')");
            this.div_lotGroup.form.div_group1.addChild(obj.name, obj);

            obj = new Button("btn_minus","0","143","40","38",null,null,null,null,null,null,this.div_lotGroup.form.div_group1.form);
            obj.set_taborder("3");
            obj.set_icon("url(\'image::button_left.png\')");
            this.div_lotGroup.form.div_group1.addChild(obj.name, obj);

            obj = new Div("div_group2","0","50%",null,null,"0","0",null,null,null,null,this.div_lotGroup.form);
            obj.set_taborder("1");
            obj.set_background("");
            obj.set_text("");
            this.div_lotGroup.addChild(obj.name, obj);

            obj = new Static("sta_group2","48","0","250","31",null,null,null,null,null,null,this.div_lotGroup.form.div_group2.form);
            obj.set_taborder("0");
            obj.set_text("GROUP2");
            obj.set_cssclass("sta_WF_subTitle");
            this.div_lotGroup.form.div_group2.addChild(obj.name, obj);

            obj = new Grid("grd_approvalList","50","sta_group2:0",null,null,"0","0",null,null,null,null,this.div_lotGroup.form.div_group2.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_group2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"210\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell col=\"3\" text=\"투입일\" tooltiptext=\"INPUTDAY\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:GROUP2_LOTID\"/><Cell col=\"3\" text=\"bind:LOTSTARTDATE\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.div_lotGroup.form.div_group2.addChild(obj.name, obj);

            obj = new Button("btn_add","0","101","40","38",null,null,null,null,null,null,this.div_lotGroup.form.div_group2.form);
            obj.set_taborder("2");
            obj.set_icon("url(\'image::button_right.png\')");
            this.div_lotGroup.form.div_group2.addChild(obj.name, obj);

            obj = new Button("btn_minus","0","143","40","38",null,null,null,null,null,null,this.div_lotGroup.form.div_group2.form);
            obj.set_taborder("3");
            obj.set_icon("url(\'image::button_left.png\')");
            this.div_lotGroup.form.div_group2.addChild(obj.name, obj);

            obj = new Button("btn_dataReset",null,null,"70","28","170","20",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("초기화");
            obj.set_cssclass("btn_pop_no");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("QAM03300P2.xfdl","lib::lib_qam.xjs");
        this.addIncludeScript("QAM03300P2.xfdl","lib::lib_bas.xjs");
        this.registerScript("QAM03300P2.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 결재정보 팝업
         * 파일명 		: QAM03300P2.xfdl
         * 작성자 		: 권혜영
         * 작성일 		: 2021.06.10
         *
         * 설  명		: 수축율 현황 > 그룹지정비교 > 선택 LOT 보기 팝업
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.06.10	권혜영   	최초작성
         *---------------------------------------------------------------------------------------


        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_qam.xjs"); /*include "lib::lib_qam.xjs"*/;	//품질관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.qamSearchComp = this.div_search.form;
        this.fv_userid = this.gf_getUserId();
        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
         this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);

        	this.basfn_getPeriodData("ds_periodType");

        	this.ds_group1.appendData(this.opener.ds_group1, true);
        	this.ds_group2.appendData(this.opener.ds_group2, true);

        	this.fn_formInit();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
         /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        // 	if(this.ds_group1.rowcount == 0 || this.ds_group2.rowcount == 0) {
        //
        // 		this.gfn_Message("NoSeletedLot", null, "warning", "ok"); //LOT을 선택하여 주십시오.
        // 		return;
        // 	}

        	//부모창의 차트 검색 호출
        	this.opener.fn_searchGroup(this.ds_group1, this.ds_group2);
        	this.close();
        };

        /*
         * 기능 : 검색 (lot 검색)
         */
        this.fn_search = function (obj, e)
        {
            this.ds_lotInfo.clearData();
        	this.ds_search.clearData();
        	var nRow = this.ds_search.addRow();

        	this.ds_search.setColumn(nRow, "PRODUCTDEFVERSION", this.div_search.form.edt_productdef_cd.value);
        	this.ds_search.setColumn(nRow, "PRODUCTDEFID", this.div_search.form.edt_productdef_id.value);
        	this.ds_search.setColumn(nRow, "LOTSTARTDATEFR", this.div_search.form.cal_lotstartdatefr.value);
        	this.ds_search.setColumn(nRow, "LOTSTARTDATETO", this.div_search.form.cal_lotstartdateto.value);
        	this.ds_search.setColumn(nRow, "PROCESSCOMPLETEYN", this.div_search.form.cbo_processcomplete.value);

        	var sSvcID 			= "selectQamShrinkmeasureList";
        	var sController 	= "/qam03300/selectQamShrinkmeasureLotList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_lotInfo=output";
        	var sArgs 			= "";

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        	this.fn_setDate("THISWEEK");
        	this.qamfn_setCompControl(this.qamSearchComp.components, "empty", [Edit]);
        	this.div_search.form.cbo_processcomplete.set_value("Y");
        };

         /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        	}
        	else
        	{
        		if (trId == "selectQamShrinkmeasureList") {

        			//param set
        			this.opener.fv_popupParam = {
        				productdef: this.div_search.form.edt_productdef.value ,
        				productdef_id: this.div_search.form.edt_productdef_id.value,
        				productdef_cd: this.div_search.form.edt_productdef_cd.value,
        				lotstartdatefr: this.div_search.form.cal_lotstartdatefr.value,
        				lotstartdateto: this.div_search.form.cal_lotstartdateto.value,
        				processcomplete: this.div_search.form.cbo_processcomplete.value
        			};
        			this.fn_filterLotinfo();
        		}
        	}
        };

        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/

        /**************************************************************************
         * 7. 기타 함수 시작
         **************************************************************************/
        //최초 호출되는 초기화 함수
        this.fn_formInit = function ()
        {
        	this.fn_searchClear();

        	if(!this.nfn_isNull(this.opener.fv_popupParam)) {
        		this.div_search.form.edt_productdef.set_value(this.opener.fv_popupParam.productdef);
        		this.div_search.form.edt_productdef_id.set_value(this.opener.fv_popupParam.productdef_id);
        		this.div_search.form.edt_productdef_cd.set_value(this.opener.fv_popupParam.productdef_cd);
        		this.div_search.form.cal_lotstartdatefr.set_value(this.opener.fv_popupParam.lotstartdatefr);
        		this.div_search.form.cal_lotstartdateto.set_value(this.opener.fv_popupParam.lotstartdateto);
        		this.div_search.form.cbo_processcomplete.set_value(this.opener.fv_popupParam.processcomplete);
        	}

        };

        /*
         * lot 추가
         */
        this.fn_add = function(idx)
        {
        	if(this.ds_lotInfo.getCaseCount("CHK == '1'") <= 0) return;

        	var objDs = eval("this.ds_group" + idx);
        	this.ds_lotInfo.filter("CHK == '1'");

        	// 품목 체크
        	var productdefid = "", productdefversion = "";
        	if(this.ds_group1.rowcount > 0) {
        		productdefid = this.ds_group1.getColumn(0, "PRODUCTDEFID");
        		productdefversion = this.ds_group1.getColumn(0, "PRODUCTDEFVERSION");

        	} else if(this.ds_group2.rowcount > 0) {
        		productdefid = this.ds_group2.getColumn(0, "PRODUCTDEFID");
        		productdefversion = this.ds_group2.getColumn(0, "PRODUCTDEFVERSION");
        	}
        	for(var i = 0; i < this.ds_lotInfo.rowcount; i++) {
        		var lotid = this.ds_lotInfo.getColumn(i, "LOTID");
        		var filterStr = "LOTID == '" + lotid + "'";

        		var nRowCnt  = objDs.getCaseCount(filterStr);

        		// 동일 LOTID 체크
        		if (nRowCnt > 0) {
        			this.gfn_Message("ExistLot", lotid , "warning","ok"); //이미 추가 된 LOT 입니다. {0}
        			this.ds_lotInfo.filter("");
        			this.fn_filterLotinfo();
        			return;

        		}
        		// 품목, 버전 체크
        		else if(!this.nfn_isNull(productdefid) && !this.nfn_isNull(productdefversion) && (this.ds_lotInfo.getColumn(i, "PRODUCTDEFID") != productdefid || this.ds_lotInfo.getColumn(i, "PRODUCTDEFVERSION") != productdefversion)) {
        			this.gfn_Message("SelectSameProductdefid", null , "warning","ok"); //동일 품목만 선택할 수 있습니다.
        			this.ds_lotInfo.filter("");
        			this.fn_filterLotinfo();
        			return;
        		}
        		else {
        			this.ds_lotInfo.setColumn(i, "CHK", "0");

        			var nRow = objDs.addRow();
        			objDs.copyRow(nRow, this.ds_lotInfo, i, "GROUP"+idx+"_LOTID=LOTID,LOTSTARTDATE=LOTSTARTDATE,PRODUCTDEFID=PRODUCTDEFID,PRODUCTDEFVERSION=PRODUCTDEFVERSION");

        			productdefid = this.ds_lotInfo.getColumn(i, "PRODUCTDEFID");
        			productdefversion = this.ds_lotInfo.getColumn(i, "PRODUCTDEFVERSION");
        		}
        	}
        	this.ds_lotInfo.filter("");
        	this.fn_filterLotinfo();
        };

        /*
         * lot 삭제
         */
        this.fn_del = function(idx)
        {
        	var objDs = eval("this.ds_group" + idx);
        	var arrDelRow = [];
        	for(var i = 0; i < objDs.rowcount; i++) {
        		if(objDs.getColumn(i, "CHK") == "1") {
        			arrDelRow.push(i);
        		}
        	}
        	objDs.deleteMultiRows(arrDelRow);
        	this.fn_filterLotinfo();
        };

        /*
         * data 초기화
         */
        this.fn_dataReset = function(obj,e)
        {
        	this.ds_lotInfo.clearData();
        	this.ds_group1.clearData();
        	this.ds_group2.clearData();
        };

        /*
         * 기능 : 검색일자 바인딩 함수
         */
        this.fn_setDate = function (periodType)
        {
        	this.div_search.form.cal_lotstartdatefr.set_value(this.ds_periodType.getColumn(0,periodType+"_S"));
        	this.div_search.form.cal_lotstartdateto.set_value(this.ds_periodType.getColumn(0,periodType+"_E"));
        };

        /*
         * 기능 : Lot 정보에 Group1, Group2에 속한 data는 보이지 않게 filter 처리
         */
        this.fn_filterLotinfo = function()
        {
        	var arrLotid = [], filterStr = "";

        	this.ds_lotInfo.filter("");
        	for(var i = 0; i < this.ds_group1.rowcount; i++) {
        		arrLotid.push(this.ds_group1.getColumn(i, "GROUP1_LOTID"));
        	}
        	for(var i = 0; i < this.ds_group2.rowcount; i++) {
        		arrLotid.push(this.ds_group2.getColumn(i, "GROUP2_LOTID"));
        	}

        	//최종 filter
        	for(var i = 0; i < this.ds_lotInfo.rowcount; i++) {
        		var lotid = this.ds_lotInfo.getColumn(i, "LOTID");

        		for(var j = 0; j < arrLotid.length; j++) {
        			if(lotid == arrLotid[j]) {
        				if(!this.nfn_isNull(filterStr)) {
        					filterStr += " && "
        				}
        				filterStr += " LOTID != '" + lotid + "' ";
        			}
        		}
        	}
        	if(!this.nfn_isNull(filterStr)) {
        		this.ds_lotInfo.filter(filterStr);
        	}
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.fn_close = function(obj,e)
        {
        	this.close();
        };

        // 요청 그리드 > 행추가
        this.div_lotGroup_div_group1_btn_add_onclick = function(obj,e)
        {
        	this.fn_add(1);
        };

        // 검토/합의 그리드 > 행추가
        this.div_lotGroup_div_group2_btn_add_onclick = function(obj,e)
        {
        	this.fn_add(2);
        };

        // 요청 그리드 > 행삭제
        this.div_lotGroup_div_group1_btn_minus_onclick = function(obj,e)
        {
        	this.fn_del(1);
        };

        // 검토/합의 그리드 > 행삭제
        this.div_lotGroup_div_group2_btn_minus_onclick = function(obj,e)
        {
        	this.fn_del(2);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_x_close.addEventHandler("onclick",this.fn_close,this);
            this.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.btn_close.addEventHandler("onclick",this.fn_close,this);
            this.div_search.form.edt_productdef.addEventHandler("onkeydown",this.qamfn_callOpenPopEditEvent,this);
            this.div_search.form.btn_productdef.addEventHandler("onclick",this.qamfn_callOpenPopButtonEvent,this);
            this.div_search.form.edt_productdef_id.addEventHandler("onkeydown",this.fn_edtKeyDown,this);
            this.div_search.form.btnSearch.addEventHandler("onclick",this.fn_search,this);
            this.div_search.form.btnReset.addEventHandler("onclick",this.fn_searchClear,this);
            this.div_lotGroup.form.div_group1.form.grd_approvalList.addEventHandler("oncellclick",this.grd_approvalList_oncellclick,this);
            this.div_lotGroup.form.div_group1.form.btn_add.addEventHandler("onclick",this.div_lotGroup_div_group1_btn_add_onclick,this);
            this.div_lotGroup.form.div_group1.form.btn_minus.addEventHandler("onclick",this.div_lotGroup_div_group1_btn_minus_onclick,this);
            this.div_lotGroup.form.div_group2.form.grd_approvalList.addEventHandler("oncellclick",this.grd_approvalList_oncellclick,this);
            this.div_lotGroup.form.div_group2.form.btn_add.addEventHandler("onclick",this.div_lotGroup_div_group2_btn_add_onclick,this);
            this.div_lotGroup.form.div_group2.form.btn_minus.addEventHandler("onclick",this.div_lotGroup_div_group2_btn_minus_onclick,this);
            this.btn_dataReset.addEventHandler("onclick",this.fn_dataReset,this);
        };
        this.loadIncludeScript("QAM03300P2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
