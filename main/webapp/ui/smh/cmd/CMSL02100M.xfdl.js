(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMSL02100M");
            this.set_titletext("다양한 쿼리 실행[K]");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"BUSINESS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRAM_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dynamicSqlHeader", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BUSINESS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"CREATED_BY\" type=\"STRING\" size=\"256\"/><Column id=\"CREATION_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATED_BY\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dynamicSqlPrintAlias", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PROGRAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FIELD_NO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"FIELD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FIELD_PRINT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FIELD_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FIELD_SIZE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"FIELD_FORMAT\" type=\"STRING\" size=\"256\"/><Column id=\"FIELD_SUM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CREATED_BY\" type=\"STRING\" size=\"256\"/><Column id=\"CREATION_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATED_BY\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dynamicSqlParam", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"PROGRAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM_SQL_TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM_DEFAULT\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM_DIS_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM_NULL_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM_REQUIRED\" type=\"STRING\" size=\"256\"/><Column id=\"CREATED_BY\" type=\"STRING\" size=\"256\"/><Column id=\"CREATION_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATED_BY\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popParam", this);
            obj._setContents("<ColumnInfo><Column id=\"BUSINESS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRAM_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_proc_run", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"O_RTN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"O_RTN_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"O_RTN_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"P_SQL_TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"P_PROGRAM_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_proc_out", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"O_RTN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"O_RTN_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"O_RTN_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TIME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lov", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"PARAM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RCODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_TEXT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_getDateTime", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"DATE_TIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_param", this);
            obj._setContents("<ColumnInfo><Column id=\"P_START\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"P_ROWSPERPAGE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"P_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"P_PROGRAM_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_unFold","100","84","38","20",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_cssclass("btn_WF_ContentsOpen");
            obj.set_visible("false");
            obj.set_text("▼");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Fold","100","84","38","20",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_cssclass("btn_WF_ContentsClose");
            obj.set_tooltiptext("접기/펼치기 토글");
            obj.set_text("▲");
            this.addChild(obj.name, obj);

            obj = new Static("Static03",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","0","69",null,"15","0",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("yellowgreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static78","0%","21",null,"5","0.22%",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","84","96","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("매개변수 설정");
            obj.set_cssclass("sta_WF_subTitle3");
            obj.set_border("0px none rgba(51,51,51,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","98","500","10",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"0","60","21","181",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_DR_GridSearch");
            obj.set_tooltiptype("hover");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear1",null,"0","60","21","118",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("초기화");
            obj.set_cssclass("btn_DR_GridReset");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","51","307",null,"15","451",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("yellowgreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","0%","26",null,"43","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_SearchBg");
            obj.set_background("rgba(247,247,247,1)");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_programCd","340","10","150","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_inputmode("upper");
            obj.set_cssclass("essential");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_businessType","95","10","150","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,SystemWorkType,SEL,Y,Y");
            obj.set_cssclass("essential");
            obj.set_enable("false");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("lbl_srchWrokClass","20","10","65","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("업무구분");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("lbl_srchBatchCd","253","10","77","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("프로그램코드");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_programNm","521","10","266","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_maxlength("30");
            obj.set_cssclass("readonly");
            obj.set_readonly("true");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static13","0%","0",null,"10","0%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04","0%","31",null,"10","0%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06","32.61%","1","10",null,null,"-1",null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","20","43",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01","8.4%","1","10",null,null,"-1",null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static03","245","0","20","43",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_sqlNoPopup","492","10","25","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_finder");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_excelDownload",null,"0","105","21","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_DR_GridDownload");
            obj.set_tooltiptext("파일다운로드");
            this.addChild(obj.name, obj);

            obj = new Div("div_param","0","108",null,null,"10","465",null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_dynamicSqlParam","0","0",null,"195","0",null,null,null,null,null,this.div_param.form);
            obj.set_taborder("12");
            obj.set_binddataset("ds_dynamicSqlParam");
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_nodatatext("검색 결과가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"222\"/><Column size=\"277\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" text=\"No\" textAlign=\"center\"/><Cell col=\"1\" text=\"매개변수\"/><Cell col=\"2\" text=\"값\"/><Cell col=\"3\" text=\"초기화\"/><Cell col=\"4\" text=\"필수\" textAlign=\"center\"/><Cell col=\"5\" text=\"기본값\"/><Cell col=\"6\" text=\"검색후 저장값\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"bind:PARAM_NO\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"bind:PARAM_NM\" combodisplay=\"edit\"/><Cell col=\"2\" displaytype=\"expr:PARAM_TYPE==&apos;YYYYMMDD&apos;?&apos;date&apos;:PARAM_TYPE==&apos;LIST&apos;?&apos;combo&apos;:PARAM_TYPE==&apos;YYYYMM&apos;?&apos;text&apos;:PARAM_TYPE==&apos;YYYY&apos;?&apos;text&apos;:&apos;normal&apos;\" edittype=\"expr:PARAM_TYPE==&apos;YYYYMMDD&apos;?&apos;date&apos;:PARAM_TYPE==&apos;LIST&apos;?&apos;combo&apos;:PARAM_TYPE==&apos;YYYYMM&apos;?&apos;mask&apos;:PARAM_TYPE==&apos;YYYY&apos;?&apos;mask&apos;:&apos;normal&apos;\" text=\"bind:PARAM_VALUE\" mask=\"expr:PARAM_TYPE==&apos;YYYYMMDD&apos;?&apos;yyyy/MM/dd&apos;:PARAM_TYPE==&apos;YYYYMM&apos;?&apos;####/##&apos;:PARAM_TYPE==&apos;YYYY&apos;?&apos;####&apos;:&apos;&apos;\" editlimit=\"500\" editdisplay=\"edit\" expandimage=\"expr:PARAM_TYPE==&apos;YYYYMM&apos; ? &apos;image::cal_WF_Drop_N.png&apos; : &apos;&apos;\" combodataset=\"ds_lov\" combocodecol=\"CODE\" combodatacol=\"NAME\" combodisplay=\"edit\" calendardisplay=\"edit\" calendardisplaynulltype=\"none\" textAlign=\"left\"/><Cell col=\"3\" displaytype=\"imagecontrol\" edittype=\"none\" textAlign=\"center\" text=\"theme://images/btn_eraser.png\"/><Cell col=\"4\" displaytype=\"checkboxcontrol\" text=\"bind:PARAM_REQUIRED\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:PARAM_DEFAULT\"/><Cell col=\"6\" text=\"bind:PARAM_VALUE\"/></Band></Format></Formats>");
            this.div_param.addChild(obj.name, obj);

            obj = new Div("div_result","0","322",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_proc_out","0","24",null,null,"0","0",null,null,null,null,this.div_result.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_proc_out");
            obj.set_autoenter("select");
            obj.set_nodatatext("검색 결과가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/></Band><Band id=\"body\"><Cell text=\"bind:NO\"/></Band><Band id=\"summary\"><Cell text=\"합계\" textAlign=\"center\" background=\"aquamarine\" font=\"bold 9pt &quot;Arial&quot;\"/></Band></Format></Formats>");
            this.div_result.addChild(obj.name, obj);

            obj = new Static("Static04","0","0","196","24",null,null,null,null,null,null,this.div_result.form);
            obj.set_taborder("1");
            obj.set_text("쿼리실행 결과");
            obj.set_cssclass("sta_WF_subTitle3");
            obj.set_border("0px none rgba(51,51,51,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_result.addChild(obj.name, obj);

            obj = new Static("sta_totCnt2",null,"0","120","21","88",null,null,null,null,null,this.div_result.form);
            obj.set_taborder("2");
            obj.set_text("(조회  0 건)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("bottom");
            obj.set_font("bold 9pt \"Dotum\"");
            this.div_result.addChild(obj.name, obj);

            obj = new Button("btn_sqlRun",null,"0","80","21","0",null,null,null,null,null,this.div_result.form);
            obj.set_taborder("3");
            obj.set_text("쿼리 실행");
            obj.set_cssclass("btn_DR_Basic2");
            this.div_result.addChild(obj.name, obj);

            obj = new Button("btn_paramClear",null,"84","110","21","10",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("매개변수 초기화");
            obj.set_cssclass("btn_DR_GridReset");
            this.addChild(obj.name, obj);

            obj = new Button("btn_paramDefaultValue",null,"84","141","21","123",null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("매개변수 기본값 할당");
            obj.set_cssclass("btn_DR_Basic2");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totCnt1",null,"84","120","21","274",null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("(조회  0 건)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("bottom");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,768,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item5","div_search.form.edt_programCd","value","ds_EapInvoicesAll","VAT_REGISTRATION_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_search.form.edt_programNm","value","ds_EapInvoicesAll","VAT_REGISTRATION_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_search00.edt_sqlCd","value","ds_EapInvoicesAll","VAT_REGISTRATION_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search00.edt_sqlNm","value","ds_EapInvoicesAll","VAT_REGISTRATION_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CMSL02100M.xfdl", function() {
        /***************************************************************************************
         * 시스템명      : 대륜E&S 빌링시스템
         * 업무명        : 다양한 쿼리 실행
         * 파일명        : CMSL02100M.xfdl
         * 작성자        :Jin Sung Ha
         * 작성일        : 2021.05.25
         *
         * 설  명        : 배치실행 및 조회
         *---------------------------------------------------------------------------------------
         * 변경일        변경자      		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.05.25   Jin Sung Ha      	최초작성
         *---------------------------------------------------------------------------------------
         ***************************************************************************************/


        /***************************************************************************************
         * 10. 라이브러리 include
         ***************************************************************************************/
        // include "lib::comLib.xjs";
        // include "cuslib::nbdfComLib.xjs";


        /***************************************************************************************
         * 20. FORM 변수 선언 영역
         ***************************************************************************************/


        /***************************************************************************************
         * 30. FORM 시작 영역
         ***************************************************************************************/

        // (필수) 화면 로딩후에 실행되는 함수
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);

        	// 기본값 설정
        	this.fn_setDefaultVal();

        	// 엔터키 설정 함수(조회)
        //	this.gfn_setEnterSearch(this.div_search, "nfn_search");

        	this.div_search.form.cbo_businessType.set_value(this.parent.parent.parent.arg_businessType);
        	this.div_search.form.edt_programCd.set_value(this.parent.parent.parent.arg_programCd);
        	this.div_search.form.edt_programNm.set_value(this.parent.parent.parent.arg_programNm);
        };


        /***************************************************************************************
         * 40. TRANSACTION 영역
         ***************************************************************************************/

        // 조회 버튼
        this.fn_search = function (obj, e)
        {
        	// 검색조건 필수 체크
        	if (this.fn_searchValidation() == false)
        	{
        		return;
        	}

        	// 대상초기화
        	this.ds_proc_out.clearData();
        	this.ds_dynamicSqlHeader.clearData();
        	this.ds_dynamicSqlPrintAlias.clearData();
        	this.ds_dynamicSqlParam.clearData();

        	var sSvcID = "selectcmdDynamicSqlList";
        	var sController = "/cmsl02000/selectcmdDynamicSqlList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_dynamicSqlHeader=output1 ds_dynamicSqlPrintAlias=output2 ds_dynamicSqlParam=output3";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false, "");
        };


        // 기본값 설정
        this.fn_clear = function ()
        {
        	// 초기화 버튼
        	this.fn_setDefaultVal();
        };


        // 쿼리실행 버튼
        this.fn_sqlRun = function (obj, e)
        {
        	if (this.ds_dynamicSqlHeader.rowcount == 0)
        	{
        		this.gfn_Message("NoSelectCondData", null, "info", "ok");//조회 조건에 일치하는 데이터가 없습니다.
        		return;
        	}

        	// 매개변수 필수 체크
        	if (this.fn_paramValidation() == false)
        	{
        		return;
        	}
        	// trace("ds_dynamicSqlParam => " + this.ds_dynamicSqlParam.saveXML());

        	var sSvcID = "saveDynamicData";
        	var sController = "/cmsl02000/saveDynamicData.do";
        	var sInDatasets = "input1=ds_dynamicSqlHeader:u input2=ds_dynamicSqlPrintAlias:u input3=ds_dynamicSqlParam:u";
        	var sOutDatasets = "ds_result=ouput";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", sSvcID);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        // 매개변수 필수 체크
        this.fn_paramValidation = function ()
        {
        	var rtnValue = true;
        	var paramDefault = "";
        	var paramNullValue = "";

        	for (var i = 0; i < this.ds_dynamicSqlParam.rowcount; i++)
        	{
        		paramValue = this.ds_dynamicSqlParam.getColumn(i, "PARAM_VALUE");
        		paramNullValue = this.ds_dynamicSqlParam.getColumn(i, "PARAM_NULL_VALUE");
        		paramRequired = this.ds_dynamicSqlParam.getColumn(i, "PARAM_REQUIRED");

        		// trace("paramValue => " + paramValue + ", paramNullValue => " + paramNullValue);
        		if ((this.gfn_isNull(paramValue) && this.gfn_isNull(paramNullValue))
        			 || (!this.gfn_isNull(paramRequired) && paramRequired == "1" && this.gfn_isNull(paramValue)))
        		{
        			var paramNm = this.ds_dynamicSqlParam.getColumn(i, "PARAM_NM");
        			this.gfn_Message("InputPameters", paramNm, "info", "ok");//매개변수 '" + paramNm + "' 값을 입력하시기 바랍니다.
        			this.ds_dynamicSqlParam.set_rowposition(i);
        			this.div_param.form.grd_dynamicSqlParam.setFocus();
        			this.div_param.form.grd_dynamicSqlParam.setCellPos(2);
        			rtnValue = false;
        			break;
        		}
        	}
        	return rtnValue;
        };

        // 엑셀 다운로드
        this.fn_excelDown = function ()
        {
        	if (this.ds_proc_out.rowcount == 0)
        	{
        		this.gfn_Message("InValidOspData011", null, "warning", "ok");
        		return;
        	}
        	// 익스포트할 그리드 명, 여러개일 경우 ':'로 구분
        	var grdName = "div_result.form.grd_proc_out";

        	// 익스포트될 시트명, 여러개일 경우 ':'로 구분
        	var excelSheetName = this.div_search.form.edt_programNm.value;

        	// 익스포트될 엑셀 파일명
        	var excelFileName = this.div_search.form.edt_programNm.value;

        	// 저장될 엑셀명
        	this.gfn_export_excel(grdName, excelSheetName, excelFileName, "EXCEL");

        /*
        	var nFistPage = 1;
        	var rowsPerPage = 10000;
        	this.ds_param.clearData();
        	this.ds_param.addRow();
        	this.ds_param.setColumn(0, "P_START", 1);
        	this.ds_param.setColumn(0, "P_ROWSPERPAGE"  , rowsPerPage);                                      //조회 단위 건수
        	this.ds_param.setColumn(0, "P_COUNT"  , this.ds_proc_out.rowcount);                                      //전체 데이터 건수
        	this.ds_param.setColumn(0, "P_PROGRAM_CD", this.ds_dynamicSqlHeader.getColumn(0, "PROGRAM_CD"));

        	var sSvcID 			= "selectBigDataExcel";
        	var sController 	= "/cmsl02000/selectBigDataExcel.do";
        	var sInDatasets 	= "INPUT=ds_param";
        	var sArgs="";
        	var sStr="div_result.form.grd_proc_out";
        	var sStrSht="Sheet1";
        	var sFileName=this.div_search.form.edt_programNm.value;
        	var sFileType="EXCEL";

        	this.gfn_export_bigdata_excel(sSvcID,sController,sInDatasets,sArgs,sStr,sStrSht,sFileName,sFileType);
        */
        };


        // 매개변수 초기화 버튼
        this.fn_paramClear = function ()
        {
        	for (var i = 0; i < this.ds_dynamicSqlParam.rowcount; i++)
        	{
        		this.ds_dynamicSqlParam.setColumn(i, "PARAM_DIS_VALUE", "");
        	}
        };


        // 매개변수 기본값 할당 버튼
        this.fn_paramDefaultValue = function ()
        {
        	// 매개변수 데이터 강제 업데이트
        	for (var i = 0; i < this.ds_dynamicSqlParam.rowcount; i++)
        	{
        		// trace(this.ds_dynamicSqlParam.getColumn(i, "PARAM_TYPE"));
        		this.ds_dynamicSqlParam.setColumn(i, "LAST_UPDATE_DATE", this.gfn_todayTime());
        		this.ds_dynamicSqlParam.setColumn(i, "PARAM_DIS_VALUE", ""); //이전 조회할시 선택/입력한 값 지우기


        		// 기본값 할당
        		if (this.gfn_isNull(this.ds_dynamicSqlParam.getColumn(i, "PARAM_DIS_VALUE")))
        		{
        			if (this.ds_dynamicSqlParam.getColumn(i, "PARAM_TYPE") == "YYYYMMDD")
        			{
        				this.ds_dynamicSqlParam.setColumn(i, "PARAM_DIS_VALUE", this.gfn_today());
        			}
        			else if (this.ds_dynamicSqlParam.getColumn(i, "PARAM_TYPE") == "YYYYMM")
        			{
        				this.ds_dynamicSqlParam.setColumn(i, "PARAM_DIS_VALUE", this.gfn_today().substring(0, 6));
        			}
        			else if (this.ds_dynamicSqlParam.getColumn(i, "PARAM_TYPE") == "YYYY")
        			{
        				this.ds_dynamicSqlParam.setColumn(i, "PARAM_DIS_VALUE", this.gfn_today().substring(0, 4));
        			}
        			else if (this.ds_dynamicSqlParam.getColumn(i, "PARAM_TYPE") == "USERID")
        			{
        				this.ds_dynamicSqlParam.setColumn(i, "PARAM_DIS_VALUE", this.gf_getUserAcnt());
        			}
        		}

        		// 설정에서 등록된 기본 값 할당
        		if (!this.gfn_isNull(this.ds_dynamicSqlParam.getColumn(i, "PARAM_DEFAULT")))
        		{
        			// 리스트 목록은 무조건 값 공백 할당
        			if (this.ds_dynamicSqlParam.getColumn(i, "PARAM_TYPE") == "LIST")
        			{
        				var paramDisValue = this.ds_dynamicSqlParam.getColumn(i, "PARAM_NO") + "_"
        					 + this.ds_dynamicSqlParam.getColumn(i, "PARAM_DEFAULT");
        				// trace("paramDisValue=> " + paramDisValue);
        				this.ds_dynamicSqlParam.setColumn(i, "PARAM_DIS_VALUE", paramDisValue);
        			}
        			else
        			{
        				var paramDisValue = this.ds_dynamicSqlParam.getColumn(i, "PARAM_DEFAULT");
        				this.ds_dynamicSqlParam.setColumn(i, "PARAM_DIS_VALUE", paramDisValue);
        			}
        		}
        	}
        };


        /***************************************************************************************
         * 50. CALLBACK 영역
         ***************************************************************************************/

        // 콜백: 업무로직
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	// trace("trId => " + trId + ", errCD => " + errCD + ", errMsg => " + errMsg);
        	// 오류처리
        	if (errCD < 0)
        	{
        		/*
        		var localErrMsg = errMsg.substring(errMsg.lastIndexOf("ORA-") + 11, errMsg.length - 1);
        		// trace("localErrMsg => " + localErrMsg);

        		// BizException
        		if (errCD == -200)
        		{
        			this.gfn_alert(localErrMsg);
        			return;
        		}

        		// BizException
        		if (errCD == -500)
        		{
        			this.gfn_alert(localErrMsg);
        			return;
        		}

        		if (trId.substring(0, 7) == "execute")
        		{
        			// 을/를 실패하였습니다.
        			this.gfn_Message("ProcessingError", new Array("프로시져 실행", "\n" + localErrMsg), "error", "ok");
        		}
        		else if (trId.substring(0, 6) == "select")
        		{
        			// 조회에 실패하였습니다.
        			this.gfn_Message("ProcessingError", "\n" + localErrMsg, "error", "ok");
        		}
        		else if (trId.substring(0, 6) == "delete")
        		{
        			// 삭제가 실패하였습니다.
        			this.gfn_Message("ProcessingError", "\n" + localErrMsg, "error", "ok");
        		}
        		else if (trId.substring(0, 4) == "save")
        		{
        			// 저장을/를 실패하였습니다.
        			this.gfn_Message("ProcessingError", new Array("저장", "\n" + localErrMsg), "error", "ok");
        		}
        		else
        		{
        			// 을/를 실패하였습니다.
        			this.gfn_Message("ProcessingError", new Array("처리", "\n" + localErrMsg), "error", "ok");
        		}
        		*/
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        		return;
        	}

        	// 정상처리
        	switch (trId)
        	{
        		// 업무구분코드 조회 후 값 세팅
        		case "selectEcmLookupValuesVList2ds_CCMD_JOB_GUBUNCDSEL":
        			// 다양한 쿼리 등록(CMSL02000M) 화면에서 본 화면을 Call할 경우 아래 매개변수 설정
        			this.fn_popupSetValue();
        			break;


        			// 쿼리실행 버튼(변동된 매개변수 값 저장)
        		case "saveDynamicData":
        			// 쿼리실행 결과 데이터셋 초기화
        			this.ds_proc_out.clearData();

        			this.ds_proc_run.clearData();
        			nRow = this.ds_proc_run.addRow();
        			this.ds_proc_run.setColumn(nRow, "P_PROGRAM_CD", this.ds_dynamicSqlHeader.getColumn(0, "PROGRAM_CD"));
        			// trace(this.ds_proc_run.saveXML());

        			var sSvcID = "executeDynamicSqlRun";
        			var sController = "/cmsl02000/executeDynamicSqlRun.do";
        			var sInDatasets = "INPUT=ds_proc_run";
        			var sOutDatasets = "ds_proc_out=ouput";
        			var sArgs = "";
        			sArgs += this.gfn_setParam("method", sSvcID);
        			this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false, "");
        			break;

        			// 쿼리실행 버튼
        		case "executeDynamicSqlRun":
        			this.div_result.form.sta_totCnt2.set_text("(조회  " + this.nfn_appendComma(this.ds_proc_out.rowcount) + " 건)");

        			// 쿼리 실행 결과 그리드 셋팅
        			this.fn_grdSetting();

        			if (this.ds_proc_out.rowcount == 0)
        			{
        				// 조회된 자료가 없습니다.
        				this.gfn_Message("InValidOspData011", null, "info", "ok");
        			}
        			break;

        			// 조회 버튼
        		case "selectcmdDynamicSqlList":
        			this.sta_totCnt1.set_text("(조회  " + this.nfn_appendComma(this.ds_dynamicSqlParam.rowcount) + " 건)");

        			if (this.ds_dynamicSqlHeader.rowcount == 0)
        			{
        				// 조회된 자료가 없습니다.
        				this.gfn_Message("InValidOspData011", null, "info", "ok");
        				this.ds_dynamicSqlParam.clearData();
        				this.ds_proc_out.clearData();
        				break;
        			}

        			// 그리드 콤보박스 데이터 설정
        			this.fn_grdSetLov();

        			// 매개변수 기본값 할당 버튼
        			this.fn_paramDefaultValue();

        			break;
        	}
        };


        /***************************************************************************************
         * 60. 기타 함수
         ***************************************************************************************/

        // 초기화 버튼
        this.fn_setDefaultVal = function ()
        {
        	// 전체 초기화
        	this.ds_search.clearData();
        	this.ds_proc_out.clearData();
        	this.ds_dynamicSqlHeader.clearData();
        	this.ds_dynamicSqlPrintAlias.clearData();
        	this.ds_dynamicSqlParam.clearData();

        	this.sta_totCnt1.set_text("(조회  0 건)");
        	this.div_result.form.sta_totCnt2.set_text("(조회  0 건)");

        	var objDiv = this.div_search;
        	this.nfn_clearAllInDiv(objDiv);

        	// 그리드 열 갯수(데이터 재 조회시 삭제하기 위하여 조회)
        	var dsCols = this.div_result.form.grd_proc_out.getFormatColCount();
        	this.div_result.form.grd_proc_out.setFormatColProperty(0, "size", 0);

        	// 그리드 열 삭제
        	for (var j = dsCols; j > 1; j--)
        	{
        		this.div_result.form.grd_proc_out.deleteContentsCol(j - 1);
        	}

        	this.div_search.form.edt_programCd.setFocus();
        };


        // 다양한 쿼리 등록(CMSL02000M) 화면에서 본 화면을 Call할 경우 아래 매개변수 설정
        this.fn_popupSetValue = function ()
        {
        	var mainBusinessType = this.parent.parent.arg_businessType;
        	var mainProgramCd = this.parent.parent.arg_programCd;
        	var mainProgramNm = this.parent.parent.arg_programNm;
        	if (!this.nfn_isNull(mainProgramCd))
        	{
        		// 팝업화면으로 오픈 시 자동 조회
        		this.div_search.form.cbo_businessType.set_value(mainBusinessType);
        		this.div_search.form.edt_programCd.set_value(mainProgramCd);
        		this.div_search.form.edt_programNm.set_value(mainProgramNm);
        		this.fn_search();
        	}
        };


        // 그리드 콤보박스 데이터 설정
        this.fn_grdSetLov = function ()
        {
        	this.ds_lov.clearData();

        	this.ds_proc_run.clearData();
        	nRow = this.ds_proc_run.addRow();
        	this.ds_proc_run.setColumn(nRow, "P_PROGRAM_CD", this.ds_dynamicSqlHeader.getColumn(0, "PROGRAM_CD"));
        	// trace(this.ds_proc_run.saveXML());

        	var sSvcID = "executeDynamicSqlLov";
        	var sController = "/cmsl02000/executeDynamicSqlLov.do";
        	var sInDatasets = "INPUT=ds_proc_run";
        	var sOutDatasets = "ds_lov=ouput";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", sSvcID);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false, "");
        };


        // 검색조건 필수 체크
        this.fn_searchValidation = function ()
        {
        	// 필수입력 체크(업무구분,프로그램코드)
        	var component = this.div_search;
        	var strColIdList = "edt_programCd";
        	var strColNmList = "프로그램코드";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        	if (rtn == false)
        	{
        		return false;
        	}

        	// 검색조건 초기화
        	this.ds_search.clearData();
        	var nRow = this.ds_search.addRow();

        	this.ds_search.setColumn(nRow, "BUSINESS_TYPE", this.gfn_blankStr(this.div_search.form.cbo_businessType.value));
        	this.ds_search.setColumn(nRow, "PROGRAM_CD", this.gfn_blankStr(this.div_search.form.edt_programCd.value));
        	// trace(this.ds_search.saveXML());

        	return true;
        };


        this.fn_getDateTime = function ()
        {
        	var localDateTime = "";
        	this.ds_getDateTime.clearData();

        	var sSvcID = "getDateTime";
        	var sController = "/cmsl02000/getDateTime.do";
        	var sInDatasets = "";
        	var sOutDatasets = "ds_getDateTime=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", sSvcID);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false, "");

        	if (this.ds_getDateTime.rowcount != 0)
        	{
        		localDateTime = this.ds_getDateTime.getColumn(0, "DATE_TIME");
        	}
        	// trace("localDateTime => " + localDateTime);
        	return (localDateTime);
        };


        // 쿼리 실행 결과 그리드 셋팅
        this.fn_grdSetting = function ()
        {
        	// trace("그리드 디자인 시작 => " + this.fn_getDateTime());
        	this.div_result.form.grd_proc_out.set_enableredraw(false);
        	this.ds_dynamicSqlPrintAlias.set_enableevent(false);

        	// 그리드 열 갯수(데이터 재 조회시 삭제하기 위하여 조회)
        	var dsCols = this.div_result.form.grd_proc_out.getFormatColCount();

        	this.div_result.form.grd_proc_out.setFormatColProperty(0, "size", 0);

        	// trace(j + ": 그리드 컬럼 전체 삭제 시작 => " + this.fn_getDateTime());
        	// 그리드 열 삭제

        	for (var j = dsCols; j > 1; j--)
        	{
        		this.div_result.form.grd_proc_out.deleteContentsCol(j - 1);
        	}

        	// trace(j + ": 그리드 컬럼 전체 삭제 종료 => " + this.fn_getDateTime());

        	// 그리드 열 추가
        	for (var j = 1; j <= this.ds_dynamicSqlPrintAlias.rowcount; j++)
        	{
        		// if(j==1)trace(j + ": 루프 시작 => " + this.fn_getDateTime());
        		// 컬럼에 대한 상세정보 가져오기
        		var colBindNm = "bind:" + this.ds_dynamicSqlPrintAlias.getColumn(j - 1, "FIELD_NM");
        		var colFieldNm = this.ds_dynamicSqlPrintAlias.getColumn(j - 1, "FIELD_NM");
        		var colType = this.ds_dynamicSqlPrintAlias.getColumn(j - 1, "FIELD_TYPE");
        		var colTitleNm = this.ds_dynamicSqlPrintAlias.getColumn(j - 1, "FIELD_PRINT_NM");
        		var colSize = this.ds_dynamicSqlPrintAlias.getColumn(j - 1, "FIELD_SIZE");
        		var colFormat = this.ds_dynamicSqlPrintAlias.getColumn(j - 1, "FIELD_FORMAT");
        		var colSumYn = this.ds_dynamicSqlPrintAlias.getColumn(j - 1, "FIELD_SUM_YN");

        		this.div_result.form.grd_proc_out.appendContentsCol();
        		// if(j==1)trace(j + ": 그리드 컬럼 추가 => " + this.fn_getDateTime());


        		// 그리드 헤더 명칭 생성
        		this.div_result.form.grd_proc_out.setCellProperty('Head', j, "text", colTitleNm);
        		// if(j==1)trace(j + ": 그리드 헤더 명칭 작성 => " + this.fn_getDateTime());

        		// 그리드 컬럼 사이즈 생성
        		this.div_result.form.grd_proc_out.setFormatColProperty(j, "size", colSize);
        		// if(j==1)trace(j + ": 그리드 컬럼 사이즈 할당 => " + this.fn_getDateTime());

        		// 그리드 데이터 영역 데이테 셋과 연동
        		this.div_result.form.grd_proc_out.setCellProperty('Body', j, "text", colBindNm);
        		// if(j==1)trace(j + ": 데이터 셋 연동 => " + this.fn_getDateTime());

        		// 그리드 합계 영역 색상 및 폰트 굵게
        		this.div_result.form.grd_proc_out.setCellProperty('Summary', j, "style", "background:aquamarine");
        		this.div_result.form.grd_proc_out.setCellProperty('Summary', j, "style", "background2:aquamarine");
        		this.div_result.form.grd_proc_out.setCellProperty('Summary', j, "style", "font:bold 9 Arial");

        		// if(j==1)trace(j + ": 그리드 합계 처리 => " + this.fn_getDateTime());

        		// 디스플레이 타입 설정
        		// 문자
        		if (colType == "1")
        		{
        			// 표기형식 지정
        			this.div_result.form.grd_proc_out.setCellProperty('Body', j, "displaytype", "text");

        			// 아래 필드는 중앙정렬
        			switch (colFieldNm)
        			{
        				case "CUST_NO":
        					// 고객번호
        				case "HOUSE_NO":
        					// 자원번호
        				case "COM_REG_NO":
        					// 사업자등록번호
        				case "INSP_YYMM":
        					// 검침년월
        				case "SALE_YYMM":
        					// 매출년월
        				case "INSP_PATH":
        					// 검침진로순
        				case "CHARGE_DELIVERY_PATH":
        					// 송달진로순
        					this.div_result.form.grd_proc_out.setCellProperty('Body', j, "style", "align:center");
        					break;
        			}

        			// 필드명이 아래 값이 존재하면 중앙정렬
        			if (colFieldNm.indexOf("ID") > -1 || colFieldNm.indexOf("CD") > -1 || colFieldNm.indexOf("CODE") > -1)
        			{
        				this.div_result.form.grd_proc_out.setCellProperty('Body', j, "style", "align:center");
        			}
        		}

        		// if(j==1)trace(j + ": 디스플레이 타입 설정: 문자 => " + this.fn_getDateTime());

        		// 숫자
        		if (colType == "2")
        		{
        			// 천단위 콤마 제거, 중앙정렬
        			if (colFieldNm.indexOf("ID") > -1 || colFieldNm.indexOf("CD") > -1 || colFieldNm.indexOf("CODE") > -1)
        			{
        				// 그렇지만 IDX의 경우 천단위 콤마, 우측정렬
        				if (colFieldNm.indexOf("IDX") > -1)
        				{
        					this.div_result.form.grd_proc_out.setCellProperty('Body', j, "displaytype", "number");
        					this.div_result.form.grd_proc_out.setCellProperty('Body', j, "style", "align:right");

        					// 그리드 숫자 합계 구하기
        					if (colSumYn == "1")
        					{
        						var fieldGetSum = "expr:dataset.getSum('" + colFieldNm + "')";
        						this.div_result.form.grd_proc_out.setCellProperty('Summary', j, "text", fieldGetSum);
        						this.div_result.form.grd_proc_out.setCellProperty('Summary', j, "displaytype", "number");
        						this.div_result.form.grd_proc_out.setCellProperty('Summary', j, "style", "align:right");
        						this.div_result.form.grd_proc_out.setCellProperty('Summary', j, "mask", colFormat);
        					}
        				}

        				// ID, CD, CODE가 포함된 필드은 중앙정렬 및 텍스트로 설정
        				else
        				{
        					this.div_result.form.grd_proc_out.setCellProperty('Body', j, "displaytype", "text");
        					this.div_result.form.grd_proc_out.setCellProperty('Body', j, "style", "align:center");
        				}
        			}
        			else
        			{
        				this.div_result.form.grd_proc_out.setCellProperty('Body', j, "displaytype", "number");
        				this.div_result.form.grd_proc_out.setCellProperty('Body', j, "style", "align:right");

        				// 그리드 숫자 합계 구하기
        				if (colSumYn == "1")
        				{
        					var fieldGetSum = "expr:dataset.getSum('" + colFieldNm + "')";
        					this.div_result.form.grd_proc_out.setCellProperty('Summary', j, "text", fieldGetSum);
        					this.div_result.form.grd_proc_out.setCellProperty('Summary', j, "displaytype", "number");
        					this.div_result.form.grd_proc_out.setCellProperty('Summary', j, "style", "align:right");
        					this.div_result.form.grd_proc_out.setCellProperty('Summary', j, "mask", colFormat);
        				}
        			}
        		}
        		// if(j==1)trace(j + ": 디스플레이 타입 설정: 숫자 => " + this.fn_getDateTime());

        		// 날짜
        		if (colType == "12")
        		{
        			this.div_result.form.grd_proc_out.setCellProperty('Body', j, "displaytype", "date");
        			this.div_result.form.grd_proc_out.setCellProperty('Body', j, "calendardisplaynulltype", "none");
        			this.div_result.form.grd_proc_out.setCellProperty('Body', j, "style", "align:center");
        		}
        		// if(j==1)trace(j + ": 디스플레이 타입 설정:날짜 => " + this.fn_getDateTime());

        		// 포멧설정
        		if (!this.gfn_isNull(colFormat))
        		{
        			this.div_result.form.grd_proc_out.setCellProperty('Body', j, "mask", colFormat);
        		}
        		// if(j==1)trace(j + ": 루프 종료 => " + this.fn_getDateTime());
        	}


        	// 첫 열에 순서 컬럼 정의 (헤더, 바디, 합계)
        	this.div_result.form.grd_proc_out.setCellProperty('Head', 0, "text", "No");
        	this.div_result.form.grd_proc_out.setFormatColProperty(0, "size", 60);
        	this.div_result.form.grd_proc_out.setCellProperty('Body', 0, "text", "expr:currow + 1");
        	this.div_result.form.grd_proc_out.setCellProperty('Body', 0, "style", "align:center");
        	this.div_result.form.grd_proc_out.setCellProperty('Summary', 0, "text", "합계");
        	this.div_result.form.grd_proc_out.setCellProperty('Summary', 0, "style", "align:center");
        	this.div_result.form.grd_proc_out.setCellProperty('Summary', 0, "style", "background:aquamarine");
        	this.div_result.form.grd_proc_out.setCellProperty('Summary', 0, "style", "background2:aquamarine");
        	this.div_result.form.grd_proc_out.setCellProperty('Summary', 0, "style", "font:bold 9 Arial");

        	this.ds_dynamicSqlPrintAlias.set_enableevent(true);
        	this.div_result.form.grd_proc_out.set_enableredraw(true);
        };


        /***************************************************************************************
         * 70. 이벤트
         ***************************************************************************************/

        // 매개변수 설정 폴더 펼치기
        this.fn_fold = function (obj, e)
        {
        	this.div_param.set_visible(false);
        	this.div_result.set_top("108px");
        	this.div_result.set_bottom("0px");

        	this.btn_Fold.set_visible(false); //접기(▲)버튼 비활성화
        	this.btn_unFold.set_visible(true); //펴기(▼)버튼 활성화
        };


        // 매개변수 설정 폴더 숨기기
        this.fn_unfold = function (obj, e)
        {
        	this.div_param.set_visible(true);
        	this.div_result.set_top("334px");
        	this.div_result.set_bottom("0px");

        	this.btn_Fold.set_visible(true); //접기(▲)버튼 활성화
        	this.btn_unFold.set_visible(false); //펴기(▼)버튼 비활성화
        };


        // 그리드 선택영역이 변경될 경우
        this.fn_grdOnClick = function (obj, e)
        {
        	if (e.col == 3)
        	{
        		this.ds_dynamicSqlParam.setColumn(e.row, "PARAM_DIS_VALUE", "");
        	}
        };


        /***************************************************************************************
         * 80. 페이징
         ***************************************************************************************/


        /***************************************************************************************
         * 90. 팝업
         ***************************************************************************************/

        // 팝업 - 입력 후 명칭 자동 조회
        this.fn_popupTextOnChanged = function (obj, e)
        {
        	if (this.nfn_isNull(e.postvalue))
        	{
        		this.div_search.form.edt_programNm.set_value(null);
        	}
        	else
        	{
        		this.ds_popParam.clearData();
        		nRow = this.ds_popParam.addRow();
        		this.ds_popParam.setColumn(nRow, "BUSINESS_TYPE", this.div_search.form.cbo_businessType.value);
        		this.ds_popParam.setColumn(nRow, "PROGRAM_CD", this.div_search.form.edt_programCd.value);

        		var sComp = "this.div_search";
        		var sSvcID = "selectP00184";
        		var popupCd = "P00184";
        		var sRtnCols = "BUSINESS_TYPE|PROGRAM_CD|PROGRAM_NM";
        		var sRtnComponents = "cbo_businessType|edt_programCd|edt_programNm";
        		var sParamDs = "ds_popParam";
        		this.nfn_setCompsCommomPoup(sSvcID, popupCd, sParamDs, sComp, sRtnCols, sRtnComponents);
        	}
        };


        // 팝업 - 오픈 버튼
        this.fn_popupOpenButton = function (obj, e)
        {
        	var oArg = {
        	};
        	this.gfn_openPopup("CMSL02100P", "cmd::CMSL02100P.xfdl", oArg, "");


        	// var popupId     = "selectP00184";
        	// var popupCd     = "P00184";
        	// var popupNm     = "다양한 SQL 조회";                     // 팝업 화면 명칭
        	// var paramCols   = "";                                    // 팝업에 넘겨줄 컬럼명, 구분자 : "|"
        	// var paramValues = "";                                    // 팝업데 넘겨줄 컬럼값, 구분자 : "|"
        	// var searchStr   = "";                                    // 조회컬럼 값,          구분자 : "|"
        	// var rtnCols     = "BUSINESS_TYPE|PROGRAM_CD|PROGRAM_NM"; // 리턴받을 값들의 컬럼: 구분자 : "|"
        	//
        	// var oArg = { arg_popupCd:popupCd
        	// , arg_rtnCols:rtnCols
        	// , arg_paramCols:paramCols
        	// , arg_paramValues:paramValues
        	// , arg_popupNm :popupNm
        	// , arg_searchStr:searchStr
        	// };
        	// this.gfn_openPopup(popupId, "cmcm::CMSA00100P.xfdl", oArg, "");
        };


        // 팝업 - CLEAR 버튼
        this.fn_popupDataClear = function (obj, e)
        {
        	this.div_search.form.edt_programCd.set_value(null);
        	this.div_search.form.edt_programNm.set_value(null);
        };


        // 팝업 - Callback
        this.fn_popupAfter = function (sPopupId, Variant)
        {
        	if (sPopupId == "selectP00184")
        	{
        		if (this.nfn_isNull(this.fv_rtnValue))
        		{
        			return;
        		}

        		this.div_search.form.cbo_businessType.set_value(this.fv_rtnValue[0]);
        		this.div_search.form.edt_programCd.set_value(this.fv_rtnValue[1]);
        		this.div_search.form.edt_programNm.set_value(this.fv_rtnValue[2]);
        	}
        	else if (sPopupId == "CMSL02100P")
        	{
        		if (this.nfn_isNull(this.fv_rtnValue))
        		{
        			return;
        		}

        		this.div_search.form.edt_programCd.set_value(this.fv_rtnValue[0]);
        		this.div_search.form.edt_programNm.set_value(this.fv_rtnValue[1]);
        		this.div_search.form.cbo_businessType.set_value(this.fv_rtnValue[2]);
        	}
        };



        /***************************************************************************************
         * 100. 그리드 월력표기
         ***************************************************************************************/

        // 그리드 월력 팝업
        this.fn_grdCalmthOpen = function (obj, e)
        {
        	// 기준 위치
        	/* Form 에서 Grid Cell 기준으로 위치얻기 */
        	var objRect = obj.getCellRect(e.row, e.cell);

        	/* cell 기준 position으로 클라이언트 기준 X, Y 좌표를 스크린 기준 기준으로 바꾸어 위치얻기 */
        	var nLeft = system.clientToScreenX(obj, objRect.left);
        	var nTop = system.clientToScreenY(obj, objRect.bottom);

        	/* 스크린 기준 X, Y 좌표를 클라이언트 기준으로 바꾸어 위치얻기 */
        	nLeft = system.screenToClientX(nexacro.getApplication().mainframe, nLeft);
        	nTop = system.screenToClientY(nexacro.getApplication().mainframe, nTop);

        	// 전달 값
        	var sYearMonth = this.ds_dynamicSqlParam.getColumn(e.row, "PARAM_DIS_VALUE");
        	var colId = obj.getCellProperty("Body", e.cell, "text").replace("bind:", "");
        	this.gfn_popupCalMonth(colId, nLeft, nTop, sYearMonth);
        };


        // 그리드 월력 팝업: 값 선택 후 callBack 함수
        this.fn_monthCallback = function (svcId, retVal)
        {
        	if (!this.gfn_isNull(retVal))
        	{
        		// 리턴값
        		// [0] : 선택한 년월
        		// [1] : 월 시작일
        		// [2] : 월 종료일
        		// [3] : 변경전 년월 값
        		this.ds_dynamicSqlParam.setColumn(this.ds_dynamicSqlParam.rowposition, "PARAM_DIS_VALUE", retVal[0]);
        	}
        };


        // 데이터셋 행 변경전
        this.ds_dynamicSqlParam_canrowposchange = function (obj, e)
        {
        	// LOV 필터
        	if (obj.getColumn(e.newrow, "PARAM_TYPE") == "LIST")
        	{
        		this.ds_lov.filter("PARAM_NO == '" + obj.getColumn(e.newrow, "PARAM_NO") + "'");
        	}
        };

        // 데이터셋 컬럼 변경전
        this.ds_dynamicSqlParam_cancolumnchange = function (obj, e)
        {
        	// 값이 변경되고 값이 입력되면
        	if (e.oldvalue != e.newvalue && e.columnid == "PARAM_DIS_VALUE")
        	{
        		var newValue = "";
        		if (obj.getColumn(e.row, "PARAM_TYPE") == "LIST")
        		{
        			// trace("e.newvalue => " + e.newvalue);
        			// trace("findRow    => " + this.ds_lov.findRow("CODE", e.newvalue));
        			newValue = this.ds_lov.getColumn(this.ds_lov.findRow("CODE", e.newvalue), "RCODE");
        		}
        		else
        		{
        			newValue = e.newvalue;
        		}
        		obj.setColumn(e.row, "PARAM_VALUE", newValue);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_unFold.addEventHandler("onclick",this.fn_unfold,this);
            this.btn_Fold.addEventHandler("onclick",this.fn_fold,this);
            this.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.btn_clear1.addEventHandler("onclick",this.fn_clear,this);
            this.div_search.form.edt_programCd.addEventHandler("onchanged",this.fn_popupTextOnChanged,this);
            this.div_search.form.btn_sqlNoPopup.addEventHandler("onclick",this.fn_popupOpenButton,this);
            this.btn_excelDownload.addEventHandler("onclick",this.fn_excelDown,this);
            this.div_param.form.grd_dynamicSqlParam.addEventHandler("oncellclick",this.fn_grdOnClick,this);
            this.div_param.form.grd_dynamicSqlParam.addEventHandler("onexpandup",this.fn_grdCalmthOpen,this);
            this.div_result.form.btn_sqlRun.addEventHandler("onclick",this.fn_sqlRun,this);
            this.btn_paramClear.addEventHandler("onclick",this.fn_paramClear,this);
            this.btn_paramDefaultValue.addEventHandler("onclick",this.fn_paramDefaultValue,this);
            this.ds_dynamicSqlParam.addEventHandler("canrowposchange",this.ds_dynamicSqlParam_canrowposchange,this);
            this.ds_dynamicSqlParam.addEventHandler("cancolumnchange",this.ds_dynamicSqlParam_cancolumnchange,this);
        };
        this.loadIncludeScript("CMSL02100M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
