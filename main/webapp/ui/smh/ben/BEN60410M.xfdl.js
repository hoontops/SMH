(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BEN60410M");
            this.set_titletext("경조가불금");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"BASE_YEAR\" type=\"DATE\" size=\"256\"/><Column id=\"PERSON_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_adjLifeExpenseList", this);
            obj._setContents("<ColumnInfo><Column id=\"STATUS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REQUEST_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"OBJECT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OBJECT_ORG_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OBJECT_GRADE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PAYMENT_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"PERSON_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OBJECT_PERSON_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_MONTH\" type=\"STRING\" size=\"256\"/><Column id=\"REASON_CONTENTS\" type=\"STRING\" size=\"256\"/><Column id=\"OBJECT_VERSION_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"HJSBEN_ADVANCE_PAYMENT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_adjLifeExpenseDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"HJSBEN_ADVANCE_PAYMENT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PERSON_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQUEST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"OBJECT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OBJECT_PERSON_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"PAYMENT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_MONTH\" type=\"STRING\" size=\"256\"/><Column id=\"REASON_CONTENTS\" type=\"STRING\" size=\"256\"/><Column id=\"OBJECT_ORG_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OBJECT_GRADE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OBJECT_VERSION_NUMBER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detailSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"HJSBEN_ADVANCE_PAYMENT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PERSON_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rtn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_adjLifeCheckList", this);
            obj._setContents("<ColumnInfo><Column id=\"REQUEST_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"ORG_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PAY_MONTH\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_PERSON_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PERSON_ID\" type=\"STRING\" size=\"256\"/><Column id=\"HJSBEN_ADVANCE_PAYMENT_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0.00%","36",null,"42","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_search");
            obj.set_background("rgba(247,247,247,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","21","10","70","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("기준년도");
            obj.set_tooltiptext("기준년도");
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
            obj.set_taborder("2");
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
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06","10.24%","1",null,null,"88.66%","-1",null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static07","25%","0",null,"43","72.8%",null,null,null,null,null,this.div_search.form);
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

            obj = new Combo("cbo_baseYear","103","10","124","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_codecolumn("C,HJS_HR_APPRAISAL_YEAR_LOV,,Y,Y");
            obj.set_text("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"8","60","20","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear1",null,"8","60","20","76",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
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

            obj = new Tab("div_work","0","78",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work);
            obj.set_text("경조가불금 현황");
            obj.set_tooltiptext("경조가불금 현황");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"7","60","20","66",null,null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("신청");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("신청");
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_delLine",null,"7","60","20","0",null,null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("행삭제");
            obj.set_tooltiptext("출력");
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","211","34",null,null,null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("경조가불금 신청 내역");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("경조가불금 신청 내역");
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_adjLifeExpenseList","0","34",null,null,"0","10",null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_adjLifeExpenseList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"91\"/><Column size=\"80\"/><Column size=\"136\"/><Column size=\"199\"/><Column size=\"229\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"상태\"/><Cell col=\"2\" text=\"신청일자\"/><Cell col=\"3\" text=\"경조대상자\"/><Cell col=\"4\" text=\"부서\"/><Cell col=\"5\" text=\"호칭\"/><Cell col=\"6\" text=\"구분\"/><Cell col=\"7\" text=\"신청금액\"/><Cell col=\"8\" text=\"승인일자\"/><Cell col=\"9\" text=\"급여공제월\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:STATUS_NAME\"/><Cell col=\"2\" text=\"bind:REQUEST_DATE\"/><Cell col=\"3\" text=\"bind:OBJECT_NAME\"/><Cell col=\"4\" text=\"bind:OBJECT_ORG_NAME\"/><Cell col=\"5\" text=\"bind:OBJECT_GRADE_NAME\"/><Cell col=\"6\" text=\"bind:COMPANY_FLAG\"/><Cell col=\"7\" text=\"bind:AMOUNT\"/><Cell col=\"8\" text=\"bind:PAYMENT_DATE\"/><Cell col=\"9\" text=\"bind:PAY_MONTH\"/></Band></Format></Formats>");
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_adjLifeExpenseList","219","0","140","34",null,null,null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work);
            obj.set_text("경조가불금 신청");
            obj.set_tooltiptext("경조가불금 신청");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","241","34",null,null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("경조가불금 신청 정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("경조가불금 신청 정보");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"7","60","20","66",null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            obj.set_tooltiptext("취소");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"7","60","20","0",null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("저장");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Div("div_basicInfo","0","34",null,"94","0",null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_site","0","0","120","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("0");
            obj.set_text("신청일자");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("신청일자");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_inspectionclassid","290","31","120","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("1");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("부서");
            obj.set_usedecorate("true");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_prevcareer","0","62","120","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("2");
            obj.set_text("<fc v=\'red\'>*</fc>신청금액");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("신청금액");
            obj.set_usedecorate("true");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_certdate","0","31","120","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("3");
            obj.set_text("<fc v=\'red\'>*</fc>경조대상자");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("경조대상자");
            obj.set_usedecorate("true");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_enterdate","580","31","120","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("4");
            obj.set_text("호칭");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("호칭");
            obj.set_usedecorate("false");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Calendar("cal_certdate","125","5","160","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("display");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00","705","36","160","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("6");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_inspectionclassid00","290","62","120","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("7");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("비고");
            obj.set_usedecorate("true");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_00_00","125","36","138","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("8");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Button("Button02","263","36","22","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_00","415","67","450","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("10");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_01","415","36","160","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("11");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new MaskEdit("msk_00_00","125","102","160","20",null,null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_format("###,###");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.div_work);
            obj.set_text("경조가불금 확인");
            obj.set_tooltiptext("경조가불금 확인");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","211","34",null,null,null,null,null,null,this.div_work.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_text("경조가불금 확인");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("경조가불금 확인");
            this.div_work.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_adjLifeCheckList","219","0","140","34",null,null,null,null,null,null,this.div_work.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.Tabpage3.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory","0","34",null,null,"0","10",null,null,null,null,this.div_work.Tabpage3.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_adjLifeCheckList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"신청일자\"/><Cell col=\"1\" text=\"부서\"/><Cell col=\"2\" text=\"호칭\"/><Cell col=\"3\" text=\"신청자\"/><Cell col=\"4\" text=\"신청금액\"/><Cell col=\"5\" text=\"급여제공월\"/><Cell col=\"6\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:REQUEST_DATE\"/><Cell col=\"1\" text=\"bind:ORG_NAME\"/><Cell col=\"2\" text=\"bind:GRADE_TITLE\"/><Cell col=\"3\" text=\"bind:EMP_NAME\"/><Cell col=\"4\" text=\"bind:AMOUNT\"/><Cell col=\"5\" text=\"bind:PAY_MONTH\"/><Cell col=\"6\" text=\"bind:REMARK\"/></Band></Format></Formats>");
            this.div_work.Tabpage3.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item6","div_work.Tabpage2.form.div_basicInfo.form.cal_certdate","value","ds_adjLifeExpenseDetail","REQUEST_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_work.Tabpage2.form.div_basicInfo.form.edt_00_00","value","ds_adjLifeExpenseDetail","OBJECT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_work.Tabpage2.form.div_basicInfo.form.edt_00_01_00_00_00","value","ds_adjLifeExpenseDetail","REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_work.Tabpage2.form.div_basicInfo.form.edt_00_01_00_00_01","value","ds_adjLifeExpenseDetail","OBJECT_ORG_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_work.Tabpage2.form.div_basicInfo.form.edt_00_01_00_00","value","ds_adjLifeExpenseDetail","OBJECT_GRADE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_work.Tabpage2.form.msk_00_00","value","ds_adjLifeExpenseDetail","AMOUNT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("BEN60410M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: 경조금
         * 업무명 		: 경조금 신청 및 현황
         * 파일명 		: BEN60410M.xfdl
         * 작성자 		: 권택진
         * 설  명		: 경조금 가불금 현황 및 신청
         *---------------------------------------------------------------------------------------
         * 변경일		변경자			변경내역
         *---------------------------------------------------------------------------------------
         * 2022.01.25	권택진			최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/


        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/


        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
         //전역변수 선언
        var rowData;
        var flag;
        var chkCount;
        var tab = 0;

        //person_id 저장
        var personId = this.gf_getPersonId();


        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/

        this.fn_init = function (obj, e)
        {

        	this.nfn_formInit(obj);
        };

        /**************************************************************************
         * 4. 이벤트 영역
         ***************************************************************************/


        //************************************************
        // 검색
        //************************************************
        this.fn_search = function(obj,e)
        {

        	//경조가불금 현황
        	if(tab == 0) {

        		trace("경조가불금 현황 search===============================");

        		this.ds_search.clearData();
        		this.ds_search.addRow();
        		this.ds_search.setColumn(0, "BASE_YEAR", this.div_search.form.cbo_baseYear.value);
        		this.ds_search.setColumn(0, "PERSON_ID", personId);


        		var sSvcID = "adjLifeExpenseList";
        		var sController = "/ben60410/adjLifeExpenseList.do";
        		var sInDatasets = "INPUT=ds_search";
        		var sOutDatasets = "ds_adjLifeExpenseList=output";
        		var sArgs = "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        	}

        	//경조가불금 확인

        	if(tab == 2) {

        		trace("경조가불금 확인 search===============================");

        		this.ds_search.clearData();
        		this.ds_search.addRow();
        		this.ds_search.setColumn(0, "BASE_YEAR", this.div_search.form.cbo_baseYear.value);
        		this.ds_search.setColumn(0, "PERSON_ID", personId);

        		var sSvcID = "adjLifeCheckList";
        		var sController = "/ben60410/adjLifeCheckList.do";
        		var sInDatasets = "INPUT=ds_search";
        		var sOutDatasets = "ds_adjLifeCheckList=output";
        		var sArgs = "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        	}

        };

        //************************************************
        // 신규신청탭 클릭
        //************************************************
        this.fn_apply = function(obj,e)
        {
        	flag = "apply";
        	this.div_work.set_tabindex(1);
        };


        //************************************************
        // 그리드 셀클릭 - 상세정보 진입
        //************************************************
        this.fn_cellClick = function(obj,e)
        {
          trace("row select");
          trace(" col : ", e.col);
          trace(" row : ", e.row);

          var col = e.col;

          //클릭 시 체크박스컬럼은 제외
          if(col != 0) {
        	  flag = "select";
        	  rowData = this.ds_adjLifeExpenseList.getColumn(e.row, "HJSBEN_ADVANCE_PAYMENT_SEQ")

        	  trace("  rowData  : " +  rowData);
        	  this.div_work.set_tabindex(1);
          }

        };



        /*******************************************************************************
        // 기능 : 저장전 validate체크
        *******************************************************************************/
        this.fn_saveValidate = function ()
        {
        	trace("fn_saveValidate -----------------------");

        	//경조대상자 CHECK
        	var component = this.div_work.Tabpage2.form.div_basicInfo;
        	var strColIdList = "edt_00_00";
        	var strColNmList = "경조대상자";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);

        	if (rtn == false) return;

        	//신청금액 CHECK
        	var component = this.div_work.Tabpage2.form.div_basicInfo;
        	var strColIdList = "edt_00_01_00_01";
        	var strColNmList = "신청금액";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);

        	if (rtn == false) return;



        	return true;
        };


        //************************************************
        // 경조가불금 신청 - 저장
        //************************************************
        this.fn_save = function(obj,e)
        {

        	var bOK = this.gfn_Message("InfoPopupSave", null, "conf", "yesno");
        	if (bOK == false) return;

        	// 필수값 체크
        	if(!this.fn_saveValidate()) {

        		return false;
        	};




        	this.ds_adjLifeExpenseDetail.setColumn(0, "PERSON_ID",personId);
        	this.ds_adjLifeExpenseDetail.setColumn(0, "REQUEST_DATE",this.div_work.Tabpage2.form.div_basicInfo.form.cal_certdate.value);
        	this.ds_adjLifeExpenseDetail.setColumn(0, "STATUS", "10");
        	this.ds_adjLifeExpenseDetail.setColumn(0, "COMPANY_FLAG", "사내");
        	this.ds_adjLifeExpenseDetail.setColumn(0, "AMOUNT",this.div_work.Tabpage2.form.msk_00_00.value);
        	this.ds_adjLifeExpenseDetail.setColumn(0, "OBJECT_NAME",this.div_work.Tabpage2.form.div_basicInfo.form.edt_00_00.value);
        	this.ds_adjLifeExpenseDetail.setColumn(0, "REMARK",this.div_work.Tabpage2.form.div_basicInfo.form.edt_00_01_00_00_00.value);
        	this.ds_adjLifeExpenseDetail.setColumn(0, "OBJECT_ORG_NAME", this.div_work.Tabpage2.form.div_basicInfo.form.edt_00_01_00_00_01.value);
        	this.ds_adjLifeExpenseDetail.setColumn(0, "OBJECT_GRADE_NAME",this.div_work.Tabpage2.form.div_basicInfo.form.edt_00_01_00_00.value);


        	trace("=======save personId : "+ personId)

        	var sSvcID = "insertAdjLife";
        	var sController = "/ben60410/insertAdjLife.do";
        	var sInDatasets = "INPUT=ds_adjLifeExpenseDetail:U";
        	var sOutDatasets = "ds_adjLifeExpenseDetail=output";

        	var sArgs = "";
        	/*sArgs += this.gfn_setParam("method", "saveCmdDictionary");*/

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);


        };

        // ************************
        // 경조금 현황 - 행삭제
        // ************************
        this.fn_delete = function(obj,e)
        {
        	//선택한 내역에 대해 삭제 작업을 수행할 예정입니다. 계속 진행하시겠습니까?
        	var bOK = this.gfn_Message("IsDeleted", null, "conf", "yesno");
        	if (bOK == false) return;


        	var chk = false;
        	var applyChk = [];
        	for (var i = this.ds_adjLifeExpenseList.getRowCount(); i>=0; i--) {
        			if ( this.ds_adjLifeExpenseList.getColumn(i,"CHK") == 1 ) {
        				trace("*************************CHK : "+ i);

        				var status = this.ds_adjLifeExpenseList.getColumn(i,"STATUS")

        				//승인상태 빼고 모두 삭제가능
        				if(status != "20") {

        					applyChk.push(i)

        					chk = true;

        				}
        				else {
        					//승인상태가 선택돼있을 경우 리턴
        					this.gfn_Message("ApprovalDeleteCheckByState", "", "error", "ok");

        					return;
        				}

        			if(!chk) {
        				//체크없을 시 에러문구 출력
        				this.gfn_Message("CHECKREMOVETOOLDATA", "", "error", "ok");
        			}
        		}
        	}

        	//화면 행 삭제
        	for(i=0; i<applyChk.length; i++) {

        		this.ds_adjLifeExpenseList.deleteRow(applyChk[i]);


        	}

        	var sSvcID = "deleteAdjLife";
        	var sController = "/ben60410/deleteAdjLife.do";
        	var sInDatasets = "INPUT=ds_adjLifeExpenseList:U";
        	var sOutDatasets = "ds_adjLifeExpenseList=output";

        	var sArgs = "";
        	/*sArgs += this.gfn_setParam("method", "saveCmdDictionary");*/

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);


        };


        //************************************************
        // Tab Page 변경 시(탭 페이지화면 로드 될 때)
        //************************************************
        this.tab_work_onchanged = function(obj,e)
        {
        	//현재탭 위치 저장 플래그
        	tab = e.postindex;

        	// dataset 현재 row
        	var selRow = this.ds_adjLifeExpenseList.rowposition

        	trace("===selRow : "+ selRow);

        	// 선택 row 신청 상태 가져오기
        	var status = this.ds_adjLifeExpenseList.getColumn(selRow,"STATUS");

        	trace(" =====flag : " + flag)
        	trace(" =====status: " + status);
        	trace(" Tab Index ::: " + e.postindex);

        	//경조가불금 신청 탭 일경우
        	if (e.postindex == 1) {

        		//상세내역클릭경우 상세정보 뿌려주기
        		if (flag == "select") {

        			// 신청상태 == 대기일 경우 수정가능
        			if(status == "10") {


        				//입력창 활성화
        				this.div_work.Tabpage2.form.div_basicInfo.set_enable( true );

        				this.ds_adjLifeExpenseDetail.clearData();

        				this.ds_detailSearch.clearData();
        				this.ds_detailSearch.addRow();
        				this.ds_detailSearch.setColumn(0, "HJSBEN_ADVANCE_PAYMENT_SEQ", rowData);

        				var sSvcID = "adjLifeExpenseDetail";
        				var sController = "/ben60410/adjLifeExpenseDetail.do";
        				var sInDatasets = "INPUT=ds_detailSearch";
        				var sOutDatasets = "ds_adjLifeExpenseDetail=output";
        				var sArgs = "";
        				this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        			}

        			//대기아닐경우
        			else {

        				trace("상태 : 대기 아님");
        				//입력창 비활성화
        				this.div_work.Tabpage2.form.div_basicInfo.set_enable( false );
        				this.div_work.Tabpage2.form.msk_00_00.set_enable( false );


        				this.ds_adjLifeExpenseDetail.clearData();

        				this.ds_detailSearch.clearData();
        				this.ds_detailSearch.addRow();
        				this.ds_detailSearch.setColumn(0, "HJSBEN_ADVANCE_PAYMENT_SEQ", rowData);

        				var sSvcID = "adjLifeExpenseDetail";
        				var sController = "/ben60410/adjLifeExpenseDetail.do";
        				var sInDatasets = "INPUT=ds_detailSearch";
        				var sOutDatasets = "ds_adjLifeExpenseDetail=output";
        				var sArgs = "";
        				this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);


        			}

        		}
        		//상세내역 조회가 아닌경우 초기화
        		else {

        			this.div_work.Tabpage2.form.div_basicInfo.set_enable( true );
        			this.div_work.Tabpage2.form.msk_00_00.set_enable( true );

        			this.ds_adjLifeExpenseDetail.clearData();
        			this.ds_adjLifeExpenseDetail.addRow();


        			var today = new nexacro.Date();

        			var year = today.getFullYear();
        			var month = today.getMonth()+1;
        			var date = today.getDate();

        			//var inputDay = year + "-" + month + "-" + date;
        			var inputDay =  year + "-" + month + "-" + date;
        			trace(" ***********************requestDay : " + inputDay);

        			this.ds_adjLifeExpenseDetail.setColumn(0, "REQUEST_DATE",inputDay);



        			trace("value set 완료");

        		}
        	}

        	//화면 진입 성공 후 플래그 초기화
        	status = "";
        	flag = "";
        };

        //************************************************
        // 경조금 신청 - 경조구분 선택시
        //************************************************
        this.Combo01_onitemchanged = function(obj,e)
        {

        };


        //************************************************
        // 기능 : 검색조건 초기화
        //************************************************
        this.fn_searchClear = function(obj,e)
        {

        	this.div_search.form.cbo_baseYear.set_text("전체");

        	trace("초기화 완료!")
        };



        //************************************************
        // 기능 : 취소
        //************************************************
        this.fn_back = function(obj,e)
        {
        	this.div_work.set_tabindex(0);
        };


        //************************************************
        // 기능 : 팝업호출
        //************************************************
        this.fn_pupUp = function(obj,e)
        {
        	var oArg = {};
        	oArg.arg_rtnCols  = "EMPLOYEE_NAME|ORG_NAME|JOB_NAME|GRADE_NAME|EMPLOYEE_NUMBER|POSITION|PERSON_ID";
        	oArg.arg_popupCd = "P00322";

        	this.gfn_openPopup( "SELECT_EMPLOYEE", "cmd::CMSA00100P.xfdl",oArg, "width=1068,height=800");
        };



        //************************************************
        // 기능 : 팝업 CallBack
        //************************************************
        this.fn_popupAfter = function (sPopupId, Variant)
        {
        	trace("!!!!!!!!!!!!!!!!!sPopupId ==> " + sPopupId + ", !!!!!!!!!!!!!!!!!Variant ==>" + Variant);

        	if(sPopupId == "SELECT_EMPLOYEE")
        	{
        		// 반환받은 문자열데이타 형변환(String, Array, Object) 처리
        		var rtn = this.fv_rtnValue;
        		trace("                 rtn                  : "+ rtn);

        		//팝업에서 선택한 사원 데이터 넣어주기.
        		this.ds_adjLifeExpenseDetail.setColumn(0, "OBJECT_NAME", rtn[0]);
        		this.ds_adjLifeExpenseDetail.setColumn(0, "OBJECT_ORG_NAME", rtn[1]);
        		this.ds_adjLifeExpenseDetail.setColumn(0, "OBJECT_GRADE_NAME", rtn[5]);
        		this.ds_adjLifeExpenseDetail.setColumn(0, "OBJECT_PERSON_ID", rtn[6]);



        	};
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
        		if (trId == "adjLifeExpenseList")
        		{

        			this.notFoundView(this.div_work.Tabpage1.form.adjLifeExpenseList);
        		}
        		if (trId == "adjLifeCheckList")
        		{

        			this.notFoundView(this.div_work.Tabpage3.form.grd_qamQcinspectorhistory);
        		}
        		if (trId == "insertAdjLife")
        		{
        			trace("insert !!!!!!!!!!!!!!!!!!!!! complete!!!!!!!!!!!!!");
        			this.gfn_Message("SuccedSave", null, "info","ok");

        			this.div_work.set_tabindex(0);
        			this.fn_search();
        		}
        		if (trId == "deleteAdjLife")
        		{
        			trace("delete !!!!!!!!!!!!!!!!!!!!! complete!!!!!!!!!!!!!");
        			this.gfn_Message("SuccedSave", null, "info","ok");

        			//this.div_work.set_tabindex(0);
        			this.fn_search();
        		}

        	}
        };




        this.fn_searchClear = function(obj,e)
        {
        	this.div_search.form.cbo_baseYear.set_text(this.gfn_getYear());
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_search.form.cbo_baseYear.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.div_search.form.cbo_baseYear.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.btn_clear1.addEventHandler("onclick",this.fn_searchClear,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.addEventHandler("onchanged",this.tab_work_onchanged,this);
            this.div_work.Tabpage1.form.btn_print.addEventHandler("onclick",this.fn_apply,this);
            this.div_work.Tabpage1.form.btn_delLine.addEventHandler("onclick",this.fn_delete,this);
            this.div_work.Tabpage1.form.grd_adjLifeExpenseList.addEventHandler("oncellclick",this.fn_cellClick,this);
            this.div_work.Tabpage2.form.btn_cancel.addEventHandler("onclick",this.fn_back,this);
            this.div_work.Tabpage2.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_work.Tabpage2.form.div_basicInfo.form.Button02.addEventHandler("onclick",this.fn_pupUp,this);
        };
        this.loadIncludeScript("BEN60410M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
