(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HRA10610M");
            this.set_titletext("증명서 신청");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_varificationLetterList", this);
            obj._setContents("<ColumnInfo><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CERTIFICATION_KIND_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DOCUMENT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PRINT_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"PRINT_COUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PRESENTATION\" type=\"STRING\" size=\"256\"/><Column id=\"ISSUE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CERTIFICATION_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRINT_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"PERSON_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"HJSHR_CERTIFICATION_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"OBJECT_VERSION_NUMBER\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"USED\" type=\"STRING\" size=\"256\"/><Column id=\"NOTE\" type=\"STRING\" size=\"256\"/><Column id=\"ESTABLISHMENT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CERTIFICATION_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"PERSON_ID\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_varificationLetterInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CERTIFICATION_KIND_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DOCUMENT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PRINT_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"PRINT_COUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PRESENTATION\" type=\"STRING\" size=\"256\"/><Column id=\"ISSUE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CERTIFICATION_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRINT_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"PERSON_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"HJSHR_CERTIFICATION_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"OBJECT_VERSION_NUMBER\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"USED\" type=\"STRING\" size=\"256\"/><Column id=\"NOTE\" type=\"STRING\" size=\"256\"/><Column id=\"ESTABLISHMENT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0.00%","36",null,"42","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_search");
            obj.set_background("rgba(247,247,247,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","21","10","70","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("증명서종류");
            obj.set_tooltiptext("HJS_HR_HRA_EMPLETTER");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static13","0%","0",null,"10","0%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","0%","-1",null,"43","97.83%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
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
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06","10.24%","1",null,null,"88.66%","-1",null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static07","25%","0",null,"43","72.8%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static09","33.7%","-1",null,null,"65.2%","1",null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_certificationKind","103","10","124","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_codecolumn("C,HJS_HR_HRA_EMPLETTER,ALL,Y,Y");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"5","60","20","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear",null,"5","60","20","76",null,null,null,null,null,this);
            obj.set_taborder("0");
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

            obj = new Tab("div_work","0","88",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work);
            obj.set_text("증명서신청 현황");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"4","60","20","66",null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("출력");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("출력");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_deleteRow",null,"4","60","20","0",null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("행삭제");
            obj.set_tooltiptext("행삭제");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_gridTitle","0","-5","211","34",null,null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_text("증명서 신청 내역");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("증명서 신청 내역");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_varificationLetterList","0","27",null,null,"0","10",null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_varificationLetterList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"상태\" tooltiptext=\"상태\"/><Cell col=\"2\" text=\"신청일자\" tooltiptext=\"신청일자\"/><Cell col=\"3\" text=\"증명서종류\" tooltiptext=\"증명서종류\"/><Cell col=\"4\" text=\"문서번호\" tooltiptext=\"문서번호\"/><Cell col=\"5\" text=\"신청매수\" tooltiptext=\"신청매수\"/><Cell col=\"6\" text=\"출력매수\" tooltiptext=\"출력매수\"/><Cell col=\"7\" text=\"제출처\" tooltiptext=\"제출처\"/></Band><Band id=\"body\"><Cell text=\"bind:CHECK_YN\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:STATUS\" textAlign=\"center\" color=\"blue\"/><Cell col=\"2\" text=\"bind:RECEIPT_DATE\"/><Cell col=\"3\" text=\"bind:CERTIFICATION_KIND_NM\"/><Cell col=\"4\" text=\"bind:DOCUMENT_NO\"/><Cell col=\"5\" text=\"bind:PRINT_NUMBER\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:PRINT_COUNT\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:PRESENTATION\"/></Band></Format></Formats>");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_varificationLetterList","266","-5","140","34",null,null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_background("transparent");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_request",null,"4","60","20","132",null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("신청");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("신청");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.div_work);
            obj.set_text("증명서 신청");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","-5","241","34",null,null,null,null,null,null,this.div_work.Tabpage3.form);
            obj.set_taborder("3");
            obj.set_text("증명서 신청 정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("증명서 신청 정보");
            this.div_work.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"4","60","20","1",null,null,null,null,null,this.div_work.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.set_tooltiptext("취소");
            obj.set_enable("true");
            this.div_work.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"4","60","20","67",null,null,null,null,null,this.div_work.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("저장");
            obj.set_enable("true");
            this.div_work.Tabpage3.addChild(obj.name, obj);

            obj = new Div("div_basicInfo","0","27",null,"94","0",null,null,null,null,null,this.div_work.Tabpage3.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.div_work.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_site","0","0","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("7");
            obj.set_text("신청일자");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("신청일자");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_area","580","0","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("8");
            obj.set_text("<fc v=\'red\'>*</fc>증명서종류");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("HJS_HR_HRA_EMPLETTER");
            obj.set_usedecorate("true");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_inspectionclassid","290","31","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("9");
            obj.set_text("<fc v=\'red\'>*</fc>제출처");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("제출처");
            obj.set_usedecorate("true");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_prevcareer","0","62","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("10");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("비고");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_inspector","290","0","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("11");
            obj.set_text("문서번호");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("문서번호");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_certdate","0","31","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("12");
            obj.set_text("<fc v=\'red\'>*</fc>신청매수");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("신청매수");
            obj.set_usedecorate("true");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_enterdate","580","31","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("13");
            obj.set_text("<fc v=\'red\'>*</fc>용도");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("용도");
            obj.set_usedecorate("true");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Combo("cbo_certificationKind","705","5","160","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("2");
            obj.set_codecolumn("C,HJS_HR_HRA_EMPLETTER,ALL,Y,Y");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Calendar("cal_requestDate","125","5","160","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_presentation","415","36","160","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("4");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_note","125","67","740","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("6");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_documentNo","415","5","160","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("1");
            obj.set_cssclass("display");
            obj.set_enable("false");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_printNumber","125","36","160","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("3");
            obj.set_inputtype("number");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_used","705","36","160","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("5");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_work.Tabpage3.form.div_basicInfo.form.cal_requestDate","value","ds_varificationLetterInfo","RECEIPT_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_work.Tabpage3.form.div_basicInfo.form.edt_documentNo","value","ds_varificationLetterInfo","DOCUMENT_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_work.Tabpage3.form.div_basicInfo.form.cbo_certificationKind","value","ds_varificationLetterInfo","CERTIFICATION_KIND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_work.Tabpage3.form.div_basicInfo.form.edt_printNumber","value","ds_varificationLetterInfo","PRINT_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_work.Tabpage3.form.div_basicInfo.form.edt_presentation","value","ds_varificationLetterInfo","PRESENTATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_work.Tabpage3.form.div_basicInfo.form.edt_used","value","ds_varificationLetterInfo","USED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_work.Tabpage3.form.div_basicInfo.form.edt_note","value","ds_varificationLetterInfo","NOTE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("HRA10610M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: SM 상선 myHR 고도화
         * 업무명 		: 증명서 신청
         * 파일명 		: HRA10610M.xfdl
         * 작성자 		: 정우영
         * 작성일 		: 2022.01.14
         * 설  명		: 임직원은 셀프서비스를 통해 필요한 증명서를 신청한다.
         *                담당자는 접수된 증명서의 처리에 따라서 승인상태를 승인한다.
         *                승인완료 된 증명서 신청 건에 대해 직접 출력할 수 있다.
         *                Grid의 CheckBox edittype => dataset.getColumn(currow, "APPROVE_YN")=="N"?'checkbox':'none'
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2022.01.14	정우영   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/


         /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/


        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.gridTitle = "";

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/

        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.gridTitle = this.div_work.Tabpage2.form.sta_gridTitle.getDisplayText();
        };


        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/

        /*
         * 기능 : 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        };

        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	// 매개변수 초기화
        	this.ds_search.clearData();
        	var sRow = this.ds_search.addRow();
        	this.ds_search.setColumn(sRow, "CERTIFICATION_KIND", this.div_search.form.cbo_certificationKind.value);
        	this.ds_search.setColumn(sRow, "PERSON_ID", this.gf_getPersonId());

        	// 증명서신청 내역
        	var sSvcID = "selectVarificationLetterList";
        	var sController = "/hra10610/selectVarificationLetterList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_varificationLetterList=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectVarificationLetterList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function(obj,e)
        {
            //데이터 미존재시 return
        	if (this.ds_varificationLetterInfo.rowcount < 1) return;

        	//변경된 데이터가 있는지 체크
        	if (!this.gfn_dsIsUpdated(this.ds_varificationLetterInfo))
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");
        		return;
        	}

        	//데이터셋 필수체크
        	var objDataset = "ds_varificationLetterInfo";
        	var strColIdList = "CERTIFICATION_KIND,PRINT_NUMBER,PRESENTATION,USED";
        	var strColNmList = "증명서종류,신청매수,제출처,용도"

        	var rtn = this.nfn_MandatoryCheckDs(objDataset, strColIdList, strColNmList);
        	if (rtn == false) return;

        	// ---------------------
        	// 저장
        	// ':U'는 갱싱된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N'은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 저장하지않는 데이터세트는 Normal로 동작합니다.
        	// ---------------------

            var sSvcID        = "saveVarificationLetter";
            var sController   = "/hra10610/saveVarificationLetter.do";
            var sInDatasets   = "INPUT=ds_varificationLetterInfo:U";
            var sOutDatasets  = "";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 신청
         */
        this.fn_request = function(obj,e)
        {
        	this.ds_varificationLetterInfo.clearData();
        	var nRow = this.ds_varificationLetterInfo.addRow();
        	this.ds_varificationLetterInfo.setColumn(nRow, "PERSON_ID", this.gf_getPersonId()); //this.gf_getPersonId()
        	this.ds_varificationLetterInfo.setColumn(nRow, "RECEIPT_DATE", this.gfn_today());
        	this.ds_varificationLetterInfo.setColumn(nRow, "OBJECT_VERSION_NUMBER", 1);
        	this.ds_varificationLetterInfo.setColumn(nRow, "APPROVE_YN", "N");

        	/*신청시에는 신청등록 div 활성화 */
        	this.div_work.set_tabindex(1); //증명서 신청 탭으로 이동
        	this.div_work.Tabpage3.form.div_basicInfo.set_enable(true);
        	this.div_work.Tabpage3.form.btn_cancel.set_enable(true);
        };

        /*
         * 기능 : 취소
         */
        this.fn_cancel = function(obj,e)
        {
        	//데이터 미존재시 return
        	if (this.ds_varificationLetterInfo.rowcount < 1) return;

            if (this.ds_varificationLetterInfo.getRowType(this.ds_varificationLetterInfo.rowposition) == 2) //추가된행의 경우
            {
        		//해당 div 내 초기화
        		this.div_work.Tabpage3.form.div_basicInfo.form.cbo_certificationKind.set_index(0);
        		this.div_work.Tabpage3.form.div_basicInfo.form.edt_printNumber.set_value("");
        		this.div_work.Tabpage3.form.div_basicInfo.form.edt_presentation.set_value("");
        		this.div_work.Tabpage3.form.div_basicInfo.form.edt_used.set_value("");
        		this.div_work.Tabpage3.form.div_basicInfo.form.edt_note.set_value("");
        	}
        };

        /*
         * 기능 : 삭제
         */
        this.fn_deleteRow = function(obj,e)
        {
        	//데이터 미존재시 return
        	if (this.ds_varificationLetterList.rowcount < 1) return;

        	//선택 대상중 상태가 "승인"인 데이터가 존재하면 오류 처리
        	var validCount = 0;
        	var inValidCount = 0;
        	var arrDelRow = []; //삭제대상 리스트
        	for (i=0; i< this.ds_varificationLetterList.getRowCount(); i++){
        		var checkYn = this.ds_varificationLetterList.getColumn(i, "CHECK_YN");
        		var status = this.ds_varificationLetterList.getColumn(i, "APPROVE_YN");

        		if (checkYn == "1" && status == "Y") //체크대상 중 승인
        		{
        			inValidCount++;
        		}
        		else if (checkYn == "1" && status == "N") //체크대상 중 미승인
        		{
        			validCount++;
        			arrDelRow.push(i);
        		}
        	}

        	if (inValidCount > 0)
        	{
        		this.gfn_Message("ApprovalDeleteCheckByState", null, "info", "ok"); //승인 상태 내역은 삭제할 수 없습니다.
        		return;
        	}

        	if (validCount < 1)
        	{
        		this.gfn_Message("SelectData", this.gridTitle, "info", "ok");//{0}을 선택하여 주십시오.
        		return;
        	}

        	var bOK = this.gfn_Message("IsDeleted", null, "conf", "yesno"); //선택한 내역에 대해 삭제 작업을 수행할 예정입니다. 계속 진행하시겠습니까?
        	if (!bOK) return;

        	//선택된 행삭제
            this.ds_varificationLetterList.deleteMultiRows(arrDelRow);

        	// -------------------------
            // 저장
            // ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
            // ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
            // -------------------------
        	var sSvcID 			= "saveVarificationLetter";
        	var sController 	= "/hra10610/saveVarificationLetter.do";
        	var sInDatasets 	= "INPUT= ds_varificationLetterList:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 출력
         */
        this.fn_print = function(obj,e)
        {
        	//데이터가 없는 경우
        	if (this.ds_varificationLetterList.rowcount < 1){
        		this.gfn_Message("NoSelections", null, "info", "ok");//선택된 항목이 없습니다.
        		return;
        	}

           	// 체크된 대상이 존재하는지 확인
        	var checkCount = this.ds_varificationLetterList.getCaseCount("CHECK_YN == '1'");

        	//체크된 데이터가 없는 경우
        	if(checkCount == 0)
        	{
        		this.gfn_Message("NoSelections", null, "info", "ok");
        		return;
        	}
        	else if(checkCount > 1)
        	{
        		this.gfn_Message("OneRowCheck", null, "info", "ok");//한 건만 선택해주십시오.
        		return;
        	}

        	var nRow = this.ds_varificationLetterList.findRow("CHECK_YN", '1');
        	var status = this.ds_varificationLetterList.getColumn(nRow, "APPROVE_YN");

            /*신청건중 미승인 상태일 경우만 변경가능*/
        	if (status == "N"){
        		this.gfn_Message("ValidatePrintCheckByState", null, "info", "ok");//미승인 상태 내역은 출력할 수 없습니다.
        		return;
        	}
        	else
        	{
        		//레포트 호출
        		alert("레포트 호출 미구현");
        	}
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
        		if (trId == "selectVarificationLetterList") //조회
        		{
        			this.div_work.set_tabindex(0); //증명서 신청 내역 탭으로 이동
        			if (this.ds_varificationLetterList.rowcount < 1)
        			{
        				 this.gfn_Message("NotExistListTitle", this.gridTitle, "info", "ok") //{0}정보가 존재하지 않습니다.
        				 return;
        			}
        		}
        		else if (trId == "saveVarificationLetter") //저장
        		{
                    this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.div_work.set_tabindex(0); //증명서 신청 내역 탭으로 이동
        			this.fn_search();
        		}
        	}
        };


        /**************************************************************************
         * 6. 이벤트
         ***************************************************************************/

        /*
         * 기능 : 증명서 신청내역 Grid의 상태컬럼 Click시에 신청화면에 내역 표기
         */
        this.grd_varificationLetterList_oncellclick = function(obj,e)
        {
        		if(e.row < 0) return;

        		var objDataset = obj.getBindDataset();
        		var status = objDataset.getColumn(e.row, "APPROVE_YN");

        		if(e.col == obj.getBindCellIndex("body", "STATUS"))
        		{
        			this.ds_varificationLetterInfo.clearData();
        			var nRow = this.ds_varificationLetterInfo.addRow();
        			this.ds_varificationLetterInfo.copyRow(nRow, objDataset, e.row);

        			/*addRow 수행의 경우 행의 rowtype의 insert이므로 normal로 변경함*/
        			this.ds_varificationLetterInfo.set_updatecontrol(false);
        			this.ds_varificationLetterInfo.setRowType(nRow, Dataset.ROWTYPE_NORMAL);
        			this.ds_varificationLetterInfo.set_updatecontrol(true);

        			this.div_work.Tabpage3.form.btn_cancel.set_enable(false);

        			/*신청건중 미승인 상태일 경우만 변경가능*/
        			if (status == "Y")
        			{
        				this.div_work.Tabpage3.form.div_basicInfo.set_enable(false);
        			}
        			else
        			{
        				this.div_work.Tabpage3.form.div_basicInfo.set_enable(true);
        			}

        			this.div_work.set_tabindex(1);
        		}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_search.form.cbo_certificationKind.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.div_search.form.cbo_certificationKind.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.addEventHandler("onchanged",this.tab_work_onchanged,this);
            this.div_work.Tabpage2.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_work.Tabpage2.form.btn_deleteRow.addEventHandler("onclick",this.fn_deleteRow,this);
            this.div_work.Tabpage2.form.grd_varificationLetterList.addEventHandler("oncellclick",this.grd_varificationLetterList_oncellclick,this);
            this.div_work.Tabpage2.form.grd_varificationLetterList.addEventHandler("oncelldblclick",this.grd_varificationLetterList_oncelldblclick,this);
            this.div_work.Tabpage2.form.btn_request.addEventHandler("onclick",this.fn_request,this);
            this.div_work.Tabpage3.form.btn_cancel.addEventHandler("onclick",this.fn_cancel,this);
            this.div_work.Tabpage3.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_work.Tabpage3.form.div_basicInfo.form.sta_inspector.addEventHandler("onclick",this.tab_work_Tabpage1_div_basicInfo_sta_inspector_onclick,this);
        };
        this.loadIncludeScript("HRA10610M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
