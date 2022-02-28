(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("OSM00101P");
            this.set_titletext("환산금액조회");
            this.set_cssclass("form_PopupBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(880,700);
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
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENCYUNIT_FR\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENCYUNIT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"UOMTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"EXCHANGE_RATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_outsourcedClaimBaseAmount", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"VARIABLECOST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"FIXEDCOST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MATERIALCOST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MATERIALPROCESSCOST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BOXCOST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MOLDCOST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SAMPLECOST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MANUFACTURINGOVERHEAD\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GENERALCOST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ETCCOST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTAMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PCSAMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CUMULATIVEAMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CUMULATIVERATE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CUMULATIVEPCSAMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"DATE\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"DATE\" size=\"256\"/><Column id=\"LASTTXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNID\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNUSER\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNTIME\" type=\"DATE\" size=\"256\"/><Column id=\"LASTTXNCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENCYUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PCSMM\" type=\"STRING\" size=\"256\"/><Column id=\"PATHSEQUENCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_exchangeRate", this);
            obj._setContents("<ColumnInfo><Column id=\"EXCHANGE_RATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_basUomdefinition", this);
            obj._setContents("<ColumnInfo><Column id=\"UOMDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"UOMDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"UOMTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"DATE\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"DATE\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","20","118",null,"34","700",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("공정별 Claim기준금액");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","20","51",null,"67","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_search");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","10",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","70",null,"48","10",null,"0",null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"47","24","39","10",null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("guidetip03","0","30",null,"5","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"0","18",null,"86","0",null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("w\r\n18");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("StaticDurableID","0","35","75","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("From단위");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("DURABLEDEFID");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("StaticDurableName","25.06%","35","75","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("To단위");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("DURABLEDEFNAME");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("StaticDurableClass","44.87%","35","75","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("기준년월");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("DURABLECLASSTYPE");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID",null,"10","192","20","558",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFVERSION",null,"10","42","20","514",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFNAME",null,"10","406","20","105",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("StaticDurableID00","0","9","75","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("DURABLEDEFID");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("StaticDurableClass00","66.11%","35","75","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_text("계획환율");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("DURABLECLASSTYPE");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_PERIOD_NAME","460","34","85","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_url("common::com_monthCalendar.xfdl");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_EXCHANGE_RATE",null,"35","92","20","105",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("14");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_PROCESSDEFID","658","2",null,"20","95",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("15");
            obj.set_enable("false");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_PROCESSDEFVERSION","748","2",null,"20","5",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("16");
            obj.set_enable("false");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_CURRENCYUNIT_from","89","35","85","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("17");
            obj.set_innerdataset("ds_basUomdefinition");
            obj.set_codecolumn("UOMDEFID");
            obj.set_datacolumn("UOMDEFNAME");
            obj.set_enable("false");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_CURRENCYUNIT_to","279","35","85","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("18");
            obj.set_innerdataset("ds_basUomdefinition");
            obj.set_codecolumn("UOMDEFID");
            obj.set_datacolumn("UOMDEFNAME");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,null,"70","28","20","20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("취소");
            obj.set_cssclass("btn_pop_no");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,null,"50","20","117","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","236","118","50","34",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("h34");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","0","103","20","84",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00",null,"92","20","84","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,null,"50","10","20","48",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","20","20",null,"31","34.50%",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("환산금액 조회");
            obj.set_cssclass("sta_WF_subTitle3");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"6","25","25","4",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_outsourcedClaimBaseAmount","19","152",null,null,"20","60",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_binddataset("ds_outsourcedClaimBaseAmount");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"170\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"119\"/><Column size=\"214\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"공정순서\"/><Cell col=\"1\" text=\"공정수순\"/><Cell col=\"2\" text=\"공정ID\"/><Cell col=\"3\" text=\"공정명\"/><Cell col=\"4\" text=\"공정변동비\"/><Cell col=\"5\" text=\"공정고정비\"/><Cell col=\"6\" text=\"자재비\"/><Cell col=\"7\" text=\"자재가공비\"/><Cell col=\"8\" text=\"Box비\"/><Cell col=\"9\" text=\"금형비\"/><Cell col=\"10\" text=\"샘플비\"/><Cell col=\"11\" text=\"제조간접비\"/><Cell col=\"12\" text=\"일반관리비\"/><Cell col=\"13\" text=\"기타\"/><Cell col=\"14\" text=\"불량반영금액\"/><Cell col=\"15\" text=\"견적가\"/><Cell col=\"16\" text=\"견적누적금액\"/><Cell col=\"17\" text=\"견적누적비율\"/><Cell col=\"18\" text=\"PCS금액\"/><Cell col=\"19\" text=\"PCS누적금액\"/><Cell col=\"20\" text=\"설명\"/></Band><Band id=\"body\"><Cell text=\"bind:PATHSEQUENCE\"/><Cell col=\"1\" text=\"bind:USERSEQUENCE\"/><Cell col=\"2\" text=\"bind:PROCESSSEGMENTID\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:VARIABLECOST\" edittype=\"normal\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:FIXEDCOST\" edittype=\"normal\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:MATERIALCOST\" edittype=\"normal\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:MATERIALPROCESSCOST\" edittype=\"normal\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:BOXCOST\" edittype=\"normal\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:MOLDCOST\" edittype=\"normal\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:SAMPLECOST\" edittype=\"normal\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:MANUFACTURINGOVERHEAD\" edittype=\"normal\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"12\" text=\"bind:GENERALCOST\" edittype=\"normal\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"13\" text=\"bind:ETCCOST\" edittype=\"normal\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"14\" text=\"bind:DEFECTAMOUNT\" edittype=\"none\" maskeditformat=\"#,##0\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"15\" text=\"bind:AMOUNT\" edittype=\"none\" maskeditformat=\"#,##0\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"16\" text=\"bind:CUMULATIVEAMOUNT\" edittype=\"none\" maskeditformat=\"#,##0\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"17\" text=\"bind:CUMULATIVERATE\" edittype=\"none\" maskeditformat=\"#,##0\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"18\" text=\"bind:PCSAMOUNT\" edittype=\"none\" maskeditformat=\"#,##0\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"19\" text=\"bind:CUMULATIVEPCSAMOUNT\" edittype=\"none\" maskeditformat=\"#,##0\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"20\" text=\"bind:DESCRIPTION\" edittype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_outsourcedClaimBaseAmount","Static01:20","122",null,"24","663",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_outsourcedClaimBaseAmount",null,"124","29","24","25",null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",880,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.edt_EXCHANGE_RATE","value","ds_exchangeRate","EXCHANGE_RATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_monthCalendar.xfdl");
        };
        
        // User Script
        this.registerScript("OSM00101P.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: Claim공정별 기준금액
         * 파일명 		: OSM00100M.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2021.04.11
         *
         * 설  명		: Claim공정별 기준금액
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.11	진성하   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        // include "lib::comLib.xjs";
        // include "cuslib::nbdfComLib.xjs";

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.fv_currDate;

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	//this.div_page.set_visible(true);

        	// paging
        	//this.fn_paging_onload(obj);
        	// paging end
        	this.div_search.form.edt_PRODUCTDEFID.set_value(this.parent.arg_productdefid);
        	this.div_search.form.edt_PRODUCTDEFVERSION.set_value(this.parent.arg_productdefversion);
        	this.div_search.form.edt_PRODUCTDEFNAME.set_value(this.parent.arg_productdefname);
        	this.div_search.form.edt_PROCESSDEFID.set_value(this.parent.arg_processdefid);
        	this.div_search.form.edt_PROCESSDEFVERSION.set_value(this.parent.arg_processdefversion);
        	this.fv_currDate = this.nfn_getCurrentSystemTime();
        	this.div_search.form.div_PERIOD_NAME.form.msk_month.set_value(this.fv_currDate.substring(0,6));

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "UOMTYPE", "Currency");

        	var sSvcID = "selectGetUomDefinitionListByOsp";
        	var sController = "/osm00100/selectGetUomDefinitionListByOsp.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_basUomdefinition=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	if(this.gfn_isNull(this.div_search.form.cbo_CURRENCYUNIT_from.value)) return;

        	if(this.div_search.form.cbo_CURRENCYUNIT_from.value == this.div_search.form.cbo_CURRENCYUNIT_to.value){
        		this.div_search.form.edt_EXCHANGE_RATE.set_value("1");
        	}

        	var component = this.div_search;
        	var strColIdList = "edt_PRODUCTDEFID,edt_PRODUCTDEFID";
        	var strColNmList = "PRODUCTDEFID";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        	if (rtn == false) return;

        	this.ds_outsourcedClaimBaseAmount.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "PRODUCTDEFID", this.div_search.form.edt_PRODUCTDEFID.value);
        	this.ds_search.setColumn(0, "PRODUCTDEFVERSION", this.div_search.form.edt_PRODUCTDEFVERSION.value);
        	this.ds_search.setColumn(0, "PROCESSDEFID", this.div_search.form.edt_PROCESSDEFID.value);
        	this.ds_search.setColumn(0, "PROCESSDEFVERSION", this.div_search.form.edt_PROCESSDEFVERSION.value);
        	this.ds_search.setColumn(0, "CURRENCYUNIT_FR", this.div_search.form.cbo_CURRENCYUNIT_from.value);
        	this.ds_search.setColumn(0, "CURRENCYUNIT_TO", this.div_search.form.cbo_CURRENCYUNIT_to.value);
        	this.ds_search.setColumn(0, "PERIOD_NAME", this.div_search.form.div_PERIOD_NAME.form.msk_month.text);
        	this.ds_search.setColumn(0, "EXCHANGE_RATE", this.div_search.form.edt_EXCHANGE_RATE.value);

        	var sSvcID = "selectGetOutsourcedClaimBaseAmount";
        	var sController = "/osm00100/selectGetOutsourcedClaimBaseAmount.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_outsourcedClaimBaseAmount=output ds_exchangeRate=output2";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색 초기화
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
         * 기능 : 저장(승인)
         */
        this.fn_save = function (obj, e)
        {
        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------

        };


        /*
         * 기능 : 삭제
         */
        this.fn_delelete = function(obj,e)
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
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        	}
        	else
        	{
        		if (trId == "saveBasProductquotationsegment")
        		{
        			this.gfn_Message("ProcessingSuccess", null, "info", "ok");
        			this.fn_search();
        		}
        		else if (trId == "selectGetUomDefinitionListByOsp")
        		{
        			this.div_search.form.cbo_CURRENCYUNIT_from.set_value("KRW");
        			this.div_search.form.cbo_CURRENCYUNIT_to.set_value("KRW");
        		}
        		else if (trId == "selectGetOutsourcedClaimBaseAmount")
        		{

        		}
        	}

        }


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "PRODUCTDEFID")
        	{
        		this.div_search.form.edt_PRODUCTDEFID.set_value(rtn[0]);
        		this.div_search.form.edt_PRODUCTDEFID_nm.set_value(rtn[1]);
        		this.div_search.form.edt_PRODUCTDEFID_id.set_value(rtn[2]);
        		this.div_search.form.edt_PROCESSDEFID.set_value(rtn[3]);
        		this.div_search.form.edt_PROCESSDEFVERSION.set_value(rtn[4]);
        	}
        }
        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_search.form.btnSearch.addEventHandler("onclick",this.fn_search,this);
            this.btnCancel.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.grd_outsourcedClaimBaseAmount.addEventHandler("onselectchanged",this.div_work_grd_basApproval_onselectchanged,this);
        };
        this.loadIncludeScript("OSM00101P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
