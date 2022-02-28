(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HRA30310M");
            this.set_titletext("HR Q&A (인사문의)");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"WRITER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WRITER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GLPS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GLPS_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qnaList", this);
            obj._setContents("<ColumnInfo><Column id=\"HJSHR_COUNSELING_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"REQUEST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"COUNSEL_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"COUNSEL_AREA\" type=\"STRING\" size=\"256\"/><Column id=\"AREA_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT\" type=\"STRING\" size=\"256\"/><Column id=\"WRITER_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"WRITER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COUNSELOR_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"COUNSELOR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_saveQnA", this);
            obj._setContents("<ColumnInfo><Column id=\"HJSHR_COUNSELING_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"REQUEST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"WRITER_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"WRITER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COUNSELOR_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"COUNSEL_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"COUNSEL_AREA\" type=\"STRING\" size=\"256\"/><Column id=\"OPEN_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"NAMED_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT\" type=\"STRING\" size=\"256\"/><Column id=\"REQUEST_CONTEXT\" type=\"STRING\" size=\"256\"/><Column id=\"COUNSEL_CONTEXT\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"ANSWER_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE1\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE2\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE3\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE4\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE5\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE6\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE7\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE8\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE9\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE10\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE11\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE12\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE13\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE14\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE15\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE16\" type=\"STRING\" size=\"256\"/><Column id=\"CREATED_BY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CREATION_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATED_BY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LAST_UPDATE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATE_LOGIN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"OBJECT_VERSION_NUMBER\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_subTitle","0","36",null,"32","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","115","31",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("0");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("성명");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("userNm","118","5","172","20",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("성명");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static30_00","300","0","115","31",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("2");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("부서");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("deptNm","418","5","172","20",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("부서");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static30_00_00","600","0","115","31",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("4");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("직급");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("JikgeubNm","718","5","172","20",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("직급");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Tab("div_work","0","68",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work);
            obj.set_text("HR Q&A 현황");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","141","34",null,null,null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("HR Q&A 현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("HR Q&A 현황");
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_qnaList","149","0","140","34",null,null,null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_deleteRow",null,"7","60","20","0",null,null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("행삭제");
            obj.set_tooltiptext("행삭제");
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_qnaList","0","34",null,null,"0","10",null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qnaList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"450\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"상태\" tooltiptext=\"상태\"/><Cell col=\"2\" text=\"등록일자\" tooltiptext=\"등록일자\"/><Cell col=\"3\" text=\"분류\" tooltiptext=\"분류\"/><Cell col=\"4\" text=\"제목\" tooltiptext=\"제목\"/><Cell col=\"5\" text=\"상담자\" tooltiptext=\"상담자\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:CHECK_YN\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:STATUS_NAME\" color=\"blue\"/><Cell col=\"2\" text=\"bind:REQUEST_DATE\"/><Cell col=\"3\" text=\"bind:AREA_NAME\"/><Cell col=\"4\" text=\"bind:SUBJECT\"/><Cell col=\"5\" text=\"bind:COUNSELOR_NAME\"/></Band></Format></Formats>");
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_request",null,"7","60","20","66",null,null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("신청");
            obj.set_tooltiptext("신청");
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work);
            obj.set_text("HR Q&A 등록");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"7","60","20","0",null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("저장");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"7","60","20","66",null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            obj.set_tooltiptext("취소");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","141","34",null,null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("HR Q&A 등록");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("HR Q&A 등록");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Div("div_basicInfo","0","34",null,"342","0",null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_detail_nobg");
            obj.set_text("");
            obj.set_formscrollbarbarminsize("0");
            obj.set_formscrollbarbaroutsize("0");
            obj.set_formscrollbardecbuttonsize("0");
            obj.set_formscrollbarincbuttonsize("0");
            obj.set_formscrollbarsize("0");
            obj.set_formscrollbartrackbarsize("0");
            obj.set_formscrollindicatorsize("0");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_site","0","0","140","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("4");
            obj.set_text("등록일자");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("등록일자");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_area","0","31","140","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("5");
            obj.set_text("<fc v=\'red\'>*</fc>분류");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("분류");
            obj.set_usedecorate("true");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_inspectionclassid","0","62","140","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("6");
            obj.set_text("<fc v=\'red\'>*</fc>제목");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("제목");
            obj.set_usedecorate("true");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_inspector","450","0","140","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("7");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("작성자");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_certdate","450","31","140","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("8");
            obj.set_text("<fc v=\'red\'>*</fc>상담자");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("상담자");
            obj.set_usedecorate("true");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Combo("cbo_classification","145","36","160","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,HJS_HR_HRA_COUNSEL_AREA,ALL,Y,Y");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Calendar("cal_requestDate","145","5","160","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("display");
            obj.set_enable("false");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_subject","145","67","757","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("2");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_writerNm","595","5","160","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("10");
            obj.set_cssclass("display");
            obj.set_enable("false");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_prevcareer","0","93","140","155",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("11");
            obj.set_text("<fc v=\'red\'>*</fc>상담내용");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("상담내용");
            obj.set_usedecorate("true");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_prevcareer00","0","248","140","93",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("12");
            obj.set_text("답변내용");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("답변내용");
            obj.set_usedecorate("true");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Combo("cbo_counselorId","595","36","160","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("1");
            obj.set_codecolumn("C,HJS_HRA_COUNSELOR_LOV,ALL,Y,Y");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new TextArea("edt_requestContext","146","98","757","144",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("3");
            obj.set_maxlength("1000");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new TextArea("counsel_context","146","253","757","82",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("13");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00_00_00","0","30",null,"2","0",null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_detail_line");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00_00_00_00","0","61",null,"2","0",null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_detail_line");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00_00_00_00_00","0","92",null,"2","0",null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_detail_line");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00_00_00_00_00_00","0","247",null,"2","0",null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_detail_line");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","10","6","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_searchOpen");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","40","6","145","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("업무화면명(자동)");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.name,\"MENU_NM\")");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite","187","6","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_favorite");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","div_work.Tabpage2.form.div_basicInfo.form.cbo_counselorId","value","ds_saveQnA","COUNSELOR_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_work.Tabpage2.form.div_basicInfo.form.edt_subject","value","ds_saveQnA","SUBJECT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_work.Tabpage2.form.div_basicInfo.form.edt_requestContext","value","ds_saveQnA","REQUEST_CONTEXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_work.Tabpage2.form.div_basicInfo.form.counsel_context","value","ds_saveQnA","COUNSEL_CONTEXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_work.Tabpage2.form.div_basicInfo.form.cbo_classification","value","ds_saveQnA","COUNSEL_AREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_subTitle.form.userNm","value","ds_search","WRITER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_subTitle.form.deptNm","value","ds_search","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_subTitle.form.JikgeubNm","value","ds_search","GLPS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_work.Tabpage2.form.div_basicInfo.form.edt_writerNm","value","ds_saveQnA","WRITER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_work.Tabpage2.form.div_basicInfo.form.cal_requestDate","value","ds_saveQnA","REQUEST_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("HRA30310M.xfdl", function() {
        /***************************************************************************************
         * 시스템명       : SM상선 myHR Application고도화 사업
         * 업무명         : HR Q&A
         * 파일명         : HRA30310M.xfdl
         * 작성자         : 정우영
         * 작성일         : 2022.01.21
         *
         * 설  명         : 직원은 인사문의(HR Q&A)를 하기 위해서 셀프서비스를 사용할 수 있다.
         *                   셀프서비스에서 문의 내용을 등록하면 사전 등록된 인사팀 담당자를 답변자로 지정한다.
         *                   인사팀 담당자는 셀프서비스에 로그인하면, To-Do List 에 인사문의 내용이 조회되고,
         *                   답변 작성 화면으로 링크될 수 있도록 한다.
         *
         *---------------------------------------------------------------------------------------
         * 변경일        변경자      변경내역
         *---------------------------------------------------------------------------------------
         * 2022.01.21     정우영      최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {

            this.nfn_formInit(obj);

            this.fn_formInit();    //최초 호출되는 초기화 함수
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function(obj,e)
        {
        	var sSvcID 	= "selectQnaList";
        	var sController = "/hra30310/selectQnaList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_qnaList=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 신청
         */
        this.fn_request = function(obj,e)
        {
        	this.ds_saveQnA.clearData();
        	var nRow = this.ds_saveQnA.addRow();
        	this.ds_saveQnA.setColumn(nRow, "WRITER_ID", this.gf_getPersonId()); //this.gf_getPersonId()
        	this.ds_saveQnA.setColumn(nRow, "WRITER_NM", this.gf_getUserNm());
        	this.ds_saveQnA.setColumn(nRow, "REQUEST_DATE", this.gfn_today());
        	this.ds_saveQnA.setColumn(nRow, "OBJECT_VERSION_NUMBER", 1);
        	this.ds_saveQnA.setColumn(nRow, "STATUS", "01");

        	this.div_work.set_tabindex(1);
        	this.div_work.Tabpage2.form.div_basicInfo.set_enable(true);
        	this.div_work.Tabpage2.form.btn_save.set_enable(true);
        	this.div_work.Tabpage2.form.btn_cancel.set_enable(true);
        };

        /*
         * 기능 : 취소
         */
        this.fn_cancel = function(obj,e)
        {
        	//데이터 미존재시 return
        	if (this.ds_saveQnA.rowcount < 1) return;

            if (this.ds_saveQnA.getRowType(this.ds_saveQnA.rowposition) == 2) //추가된행의 경우
            {
        		//해당 div 내 초기화
        		this.div_work.Tabpage2.form.div_basicInfo.form.cbo_classification.set_index(0);
        		this.div_work.Tabpage2.form.div_basicInfo.form.cbo_counselorId.set_index(0);
        		this.div_work.Tabpage2.form.div_basicInfo.form.edt_subject.set_value("");
        		this.div_work.Tabpage2.form.div_basicInfo.form.edt_requestContext.set_value("");
        	}
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function(obj,e)
        {
        	//데이터 미존재시 return
        	if (this.ds_saveQnA.rowcount < 1) return;

        	//변경된 데이터가 있는지 체크
        	if (!this.gfn_dsIsUpdated(this.ds_saveQnA))
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");
        		return;
        	}

        	var objDataset = "ds_saveQnA";
        	var strColIdList = "COUNSEL_AREA,COUNSELOR_ID,SUBJECT,REQUEST_CONTEXT";
        	var strColNmList = "분류,상담자,제목,상담내용"

        	var rtn = this.nfn_MandatoryCheckDs(objDataset, strColIdList, strColNmList);
        	if (rtn == false) return;

        	// ---------------------
        	// 저장
        	// ':U'는 갱싱된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N'은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 저장하지않는 데이터세트는 Normal로 동작합니다.
        	// ---------------------

            var sSvcID        = "saveQnA";
            var sController   = "/hra30310/saveQnA.do";
            var sInDatasets   = "INPUT=ds_saveQnA:U";
            var sOutDatasets  = "";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 삭제
         */
        this.fn_deleteRow = function(obj,e)
        {
        	//데이터 미존재시 return
        	if (this.ds_qnaList.rowcount < 1) return;

        	//선택 대상중 상태가 "승인"인 데이터가 존재하면 오류 처리
        	var validCount = 0;
        	var inValidCount = 0;
        	var arrDelRow = []; //삭제대상 리스트
        	for (i=0; i< this.ds_qnaList.getRowCount(); i++){
        		var checkYn = this.ds_qnaList.getColumn(i, "CHECK_YN");
        		var status = this.ds_qnaList.getColumn(i, "STATUS");

        		if (checkYn == "1" && status == "02") //체크대상 중 승인
        		{
        			inValidCount++;
        		}
        		else if (checkYn == "1" && status == "01") //체크대상 중 미승인
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
        		this.gfn_Message("NoSelectData", null, "info", "ok");
        		return;
        	}

        	var bOK = this.gfn_Message("IsDeleted", null, "conf", "yesno"); //선택한 내역에 대해 삭제 작업을 수행할 예정입니다. 계속 진행하시겠습니까?
        	if (!bOK) return;

        	//선택된 행삭제
            this.ds_qnaList.deleteMultiRows(arrDelRow);

        	// -------------------------
            // 저장
            // ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
            // ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
            // -------------------------
        	var sSvcID 			= "saveQnA";
        	var sController 	= "/hra30310/saveQnA.do";
        	var sInDatasets 	= "INPUT= ds_qnaList:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
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
        		if (trId == "selectQnaList") //조회
        		{
        			this.div_work.set_tabindex(0); //HR Q&A 신청 내역 탭으로 이동
        			if (this.ds_qnaList.rowcount < 1)
        			{
        				 this.gfn_Message("NotExistList", "HR Q&A 신청", "info", "ok") //{0} 내역정보가 존재하지 않습니다.
        				 return;
        			}
        		}
        		else if (trId == "saveQnA") //저장
        		{
                    this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.div_work.set_tabindex(0); //HR Q&A 신청 내역 탭으로 이동
        			this.fn_search();
        		}
        	}
        };


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 기능 : 최초 호출되는 초기화 함수
         */
        this.fn_formInit = function ()
        {
            this.ds_search.clearData();
        	var nRow = this.ds_search.addRow();

        	this.ds_search.setColumn(nRow, "WRITER_ID", this.gf_getPersonId());
        	this.ds_search.setColumn(nRow, "WRITER_NM", this.gf_getUserNm()); //접속사용자명
        	this.ds_search.setColumn(nRow, "DEPT_CD", this.gf_getDeptCd());
        	this.ds_search.setColumn(nRow, "DEPT_NM", this.gf_getDeptNm()); //접속사용자부서명
        	this.ds_search.setColumn(nRow, "GLPS_CD", this.gf_getGlpsCd());
        	this.ds_search.setColumn(nRow, "GLPS_NM", this.gf_getGlpsNm()); //접속사용자직급명

        	this.fn_search();
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         * 기능 : HR Q&A 신청 내역 Grid의 상태컬럼 Click시에 신청화면에 내역 표기
         */
        this.grd_qnaList_oncellclick = function(obj,e)
        {
        		if(e.row < 0) return;

        		var objDataset = obj.getBindDataset();
        		var status = objDataset.getColumn(e.row, "STATUS");

        		if(e.col == obj.getBindCellIndex("body", "STATUS_NAME"))
        		{
        			this.ds_saveQnA.clearData();
        			var nRow = this.ds_saveQnA.addRow();
        			this.ds_saveQnA.copyRow(nRow, objDataset, e.row);

        			/*addRow 수행의 경우 행의 rowtype의 insert이므로 normal로 변경함*/
        			this.ds_saveQnA.set_updatecontrol(false);
        			this.ds_saveQnA.setRowType(nRow, Dataset.ROWTYPE_NORMAL);
        			this.ds_saveQnA.set_updatecontrol(true);

        			this.div_work.Tabpage2.form.btn_cancel.set_enable(false);

        			/*신청건중 미승인 상태일 경우만 변경가능*/
        			if (status == "02")
        			{
        				this.div_work.Tabpage2.form.div_basicInfo.set_enable(false);
        			}
        			else
        			{
        				this.div_work.Tabpage2.form.div_basicInfo.set_enable(true);
        			}

        			this.div_work.set_tabindex(1);
        		}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_subTitle.form.Static30.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_subTitle.form.userNm.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_subTitle.form.Static30_00.addEventHandler("onclick",this.div_subTitle_Static30_00_onclick,this);
            this.div_work.addEventHandler("onchanged",this.tab_work_onchanged,this);
            this.div_work.Tabpage1.form.btn_deleteRow.addEventHandler("onclick",this.fn_deleteRow,this);
            this.div_work.Tabpage1.form.grd_qnaList.addEventHandler("oncellclick",this.grd_qnaList_oncellclick,this);
            this.div_work.Tabpage1.form.btn_request.addEventHandler("onclick",this.fn_request,this);
            this.div_work.Tabpage2.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_work.Tabpage2.form.btn_cancel.addEventHandler("onclick",this.fn_cancel,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("HRA30310M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
