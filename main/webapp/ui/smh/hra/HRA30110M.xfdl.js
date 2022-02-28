(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HRA30110M");
            this.set_titletext("인사고충상담");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"WRITER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"HJSHR_COUNSELING_SEQ\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_counselingList", this);
            obj._setContents("<ColumnInfo><Column id=\"STATUS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REQUEST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT\" type=\"STRING\" size=\"256\"/><Column id=\"COUNSELOR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"HJSHR_COUNSELING_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"CHECK_YN\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_counselinginfo", this);
            obj._setContents("<ColumnInfo><Column id=\"REQUEST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"COUNSELOR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COUNSEL_AREA\" type=\"STRING\" size=\"256\"/><Column id=\"OPEN_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"NAMED_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT\" type=\"STRING\" size=\"256\"/><Column id=\"REQUEST_CONTEXT\" type=\"STRING\" size=\"256\"/><Column id=\"COUNSEL_CONTEXT\" type=\"STRING\" size=\"256\"/><Column id=\"ANSWER_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE1\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE2\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE3\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE4\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE5\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE6\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE7\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE8\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE9\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE10\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE11\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE12\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE13\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE14\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE15\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE16\" type=\"STRING\" size=\"256\"/><Column id=\"CREATED_BY\" type=\"STRING\" size=\"256\"/><Column id=\"CREATION_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATED_BY\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATE_LOGIN\" type=\"STRING\" size=\"256\"/><Column id=\"OBJECT_VERSION_NUMBER\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"WRITER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COUNSEL_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_searchOpen","10","6","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_searchOpen");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","40","6","145","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("업무화면명(자동)");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.name,\"MENU_NM\")");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite","187","6","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_favorite");
            this.addChild(obj.name, obj);

            obj = new Tab("div_work","0","66",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work);
            obj.set_text("인사고충상담 현황");
            obj.set_tooltiptext("인사고충상담 현황");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","211","34",null,null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("인사고충상담 현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("인사고충상담 현황");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_counseling","0","34",null,null,"0","10",null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_counselingList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"460\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"상태\" tooltiptext=\"상태\"/><Cell col=\"2\" text=\"신청일자\" tooltiptext=\"신청일자\"/><Cell col=\"3\" text=\"제목\" tooltiptext=\"제목\"/><Cell col=\"4\" text=\"상담자\" tooltiptext=\"상담자\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:CHECK_YN\" controlautosizingtype=\"both\" edittype=\"checkbox\"/><Cell col=\"1\" color=\"blue\" text=\"bind:STATUS_NAME\"/><Cell col=\"2\" text=\"bind:REQUEST_DATE\"/><Cell col=\"3\" text=\"bind:SUBJECT\"/><Cell col=\"4\" text=\"bind:COUNSELOR_NAME\"/></Band></Format></Formats>");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_counselingList","219","0","140","34",null,null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_apply",null,"7","60","20","66",null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("신청");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("신청");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_delLine",null,"7","60","20","0",null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("행삭제");
            obj.set_tooltiptext("행삭제");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.div_work);
            obj.set_text("인사고충상담 등록");
            obj.set_tooltiptext("인사고충상담 등록");
            obj.set_enable("true");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","241","34",null,null,null,null,null,null,this.div_work.Tabpage3.form);
            obj.set_taborder("3");
            obj.set_text("고충상담 신청");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("고충상담 신청");
            this.div_work.Tabpage3.addChild(obj.name, obj);

            obj = new Div("div_basicInfo","0","34",null,"489","0",null,null,null,null,null,this.div_work.Tabpage3.form);
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
            this.div_work.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_site","0","0","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("0");
            obj.set_text("등록일자");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("등록일자");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_prevcareer","0","62","120","333",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("6");
            obj.set_text("<fc v=\'red\'>*</fc>고충내용\r\n(0 / 1000)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("고충내용");
            obj.set_usedecorate("true");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_certdate","0","31","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("4");
            obj.set_text("<fc v=\'red\'>*</fc>제목");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("제목");
            obj.set_usedecorate("true");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Calendar("cal_today","125","5","160","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("display");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_subject","125","36","777","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("5");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Combo("cbo_counseller","555","5","190","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("3");
            obj.set_codecolumn("C,HJS_HRA_COUNSELOR_LOV,ALL,Y,Y");
            obj.set_index("-1");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_site00","430","0","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("2");
            obj.set_text("<fc v=\'red\'>*</fc>상담자");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("상담자");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_00","0","30",null,"2","0",null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_detail_line");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_00_00","0","61",null,"2","0",null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_detail_line");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new TextArea("txa_context","125","67","777","323",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("7");
            obj.set_maxlength("1000");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_site01","0","395","120","93",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("8");
            obj.set_text("Comment");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("Comment");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new TextArea("txa_counselContext","125","400","777","83",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00","0","394",null,"2","-10",null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_detail_line");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"7","60","20","66",null,null,null,null,null,this.div_work.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            obj.set_tooltiptext("취소");
            this.div_work.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"7","60","20","0",null,null,null,null,null,this.div_work.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("저장");
            this.div_work.Tabpage3.addChild(obj.name, obj);

            obj = new Div("div_search","0","34",null,"32","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","115","31",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("성명");
            obj.set_usedecorate("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_userNm","118","5","172","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_accessibilityrole("none");
            obj.set_enable("false");
            obj.set_text("성명");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static30_00","300","0","115","31",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("부서");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_deptNm","418","5","172","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("부서");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static30_00_01","601","0","115","31",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("직급");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_glpsNm","719","5","172","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("부서");
            this.div_search.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","div_work.Tabpage3.form.div_basicInfo.form.cbo_counseller","value","ds_counselinginfo","COUNSELOR_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_work.Tabpage3.form.div_basicInfo.form.edt_subject","value","ds_counselinginfo","SUBJECT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_work.Tabpage3.form.div_basicInfo.form.txa_context","value","ds_counselinginfo","REQUEST_CONTEXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_work.Tabpage3.form.div_basicInfo.form.cal_today","value","ds_counselinginfo","REQUEST_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_work.Tabpage3.form.div_basicInfo.form.txa_counselContext","value","ds_counselinginfo","COUNSEL_CONTEXT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("HRA30110M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: SM상선 myHR Application고도화 사업
         * 업무명 		: 인사고충상담
         * 파일명 		: HRA30110M.xfdl
         * 작성자 		: 이정훈
         * 작성일 		: 2022.01.19
         *
         * 설  명		: 인사고충상담
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2022.01.19	이정훈   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/


        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/


        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.personId;
        this.userNm;
        this.deptNm;
        this.glpsNm;
        this.svrdate;

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	//화면 초기화
        	this.nfn_formInit(obj);

        	this.glpsNm = this.gf_getGlpsNm();      //직급명
        	this.userNm = this.gf_getUserNm();		//사용자명
        	this.deptNm = this.gf_getDeptNm();		//사용자 부서명

        	this.svrdate = this.gfn_svrToday();  //오늘날짜
        	this.fn_formInit();
        	this.fn_search();
        };

        //필요한 데이터를 해당위치에 보여줌
        this.fn_formInit = function ()
        {
        	this.div_search.form.edt_userNm.set_value(this.userNm);
        	this.div_search.form.edt_deptNm.set_value(this.deptNm);
        	this.div_search.form.edt_glpsNm.set_value(this.glpsNm);
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_counselingList.clearData();					 //Target output Dataset clear
        	this.ds_search.clearData();							 //Search Condition Dataset clear
        	var nRow = this.ds_search.addRow();			//dataset에 row를 추가하고 데이터를 입력.
        	this.ds_search.setColumn(nRow, "WRITER_ID",  this.personId); //사용자Id DATA

        	var sSvcID 			= "selectCounselingList"; 							 	// CallBack service name
        	var sController 	= "/hra30110/selectCounselingList.do" ;			        // CONTROLLER VALUE
        	var sInDatasets 	= "INPUT=ds_search";						   			// DB INPUT  DATA
        	var sOutDatasets 	= "ds_counselingList=output";						    // DB OUTPUT DATA
        	var sArgs 			= "";

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 상세
         */
        this.fn_searchDetail = function(obj,e)
        {
        	if (e.col == obj.getBindCellIndex("body", "STATUS_NAME"))
        	{
        		//Dataset clear
        		this.ds_counselinginfo.clearData();
        		this.ds_search.clearData();

        	    // 상단의 dataset에서 원하는 값을 해당하는 로우에서 꺼내옴.
        		var counselingSeq = this.ds_counselingList.getColumn(this.ds_counselingList.rowposition, "HJSHR_COUNSELING_SEQ");
        		var nRow = this.ds_search.addRow();			//dataset에 row를 추가하고 데이터를 입력.
        		this.ds_search.setColumn(nRow, "HJSHR_COUNSELING_SEQ",  counselingSeq); //사용자Id DATA

        		var sSvcID 			= "selectCounselingDetail"; 						// CallBack service name
        		var sController 	= "/hra30110/selectCounselingDetail.do" ;			// CONTROLLER VALUE
        		var sInDatasets 	= "INPUT=ds_search";						   		// DB INPUT  DATA
        		var sOutDatasets 	= "ds_counselinginfo=output";						// DB OUTPUT DATA
        		var sArgs 			= "";

        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	}
        };


        /*
         * 기능 : 저장
         */
         this.fn_save = function(obj,e)
        {
        	if (this.ds_counselinginfo.rowcount < 1) return;

        	var objDataset = "ds_counselinginfo";
        	var strColIdList = "COUNSELOR_ID,SUBJECT,REQUEST_CONTEXT";
        	var strColNmList = "상담자,제목,고충내용"

        	var rtn = this.nfn_MandatoryCheckDs(objDataset, strColIdList, strColNmList);
        	if (rtn == false) return;

        	//---------------------
        	// 저장
        	// ':U'는 갱싱된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N'은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 저장하지않는 데이터세트는 Normal로 동작합니다.
        	// ---------------------
        	var sSvcID 			= "saveCounseling";				// CallBack service name
        	var sController 	= "/hra30110/saveCounseling.do";
        	var sInDatasets 	= "INPUT=ds_counselinginfo:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 행삭제
         */
        this.fn_delline = function(obj,e)
        {
        	//데이터 미존재시 return
        	if (this.ds_counselingList.rowcount < 1) return;

        	//선택 대상중 상태가 "승인"인 데이터가 존재하면 오류 처리
        	var validCount = 0;
        	var inValidCount = 0;
        	var arrDelRow = []; //삭제대상 리스트
        	for (i=0; i< this.ds_counselingList.getRowCount(); i++){
        		var checkYn = this.ds_counselingList.getColumn(i, "CHECK_YN");
        		var status = this.ds_counselingList.getColumn(i, "STATUS");

        		if (checkYn == "1" && status == "02") //체크대상 접수
        		{
        			inValidCount++;
        		}
        		else if (checkYn == "1" && status == "01") //체크대상 신청
        		{
        			validCount++;
        			arrDelRow.push(i);
        		}
        	}

        	if (inValidCount > 0)
        	{
        		this.gfn_Message("접수상태 내역은 삭제할 수 없습니다.", null, "info", "ok"); //접수 상태 내역은 삭제할 수 없습니다.
        		return;
        	}

        	if (validCount < 1)
        	{
        		this.gfn_Message("SelectData", null, "info", "ok");
        		return;
        	}

        	var bOK = this.gfn_Message("IsDeleted", null, "conf", "yesno"); //선택한 내역에 대해 삭제 작업을 수행할 예정입니다. 계속 진행하시겠습니까?
        	if (!bOK) return;

        	//선택된 행삭제

        	this.ds_counselingList.deleteMultiRows(arrDelRow);

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveCounseling";
        	var sController 	= "/hra30110/saveCounseling.do";
        	var sInDatasets 	= "INPUT= ds_counselingList:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        /*
         * 기능 : 신청버튼
         */
        this.fn_apply = function(obj,e)
        {
        	this.div_work.set_tabindex(1);

        	this.div_work.Tabpage3.form.btn_cancel.set_enable(true);
        	this.div_work.Tabpage3.form.btn_save.set_enable(true);
        	this.div_work.Tabpage3.form.div_basicInfo.set_enable(true);
        	this.div_work.Tabpage3.form.div_basicInfo.form.cbo_counseller.set_index(0);

        	this.ds_counselinginfo.clearData();
        	var nRow = this.ds_counselinginfo.addRow();
        	this.ds_counselinginfo.setColumn(nRow, "WRITER_ID",  this.personId);
        	this.ds_counselinginfo.setColumn(nRow, "REQUEST_DATE", this.svrdate);
        	this.ds_counselinginfo.setColumn(nRow, "COUNSEL_TYPE", "20");//구분 상담
         	this.ds_counselinginfo.setColumn(nRow, "STATUS", "01");		//신청
        	this.ds_counselinginfo.setColumn(nRow, "OBJECT_VERSION_NUMBER", 1);
        };

        /*
         * 기능 : 취소버튼
         */
        this.fn_cancle = function(obj,e)
        {
        	//데이터 미존재시 return
        	if (this.ds_counselinginfo.rowcount < 1)  return;

           if (this.ds_counselinginfo.getRowType(this.ds_counselinginfo.rowposition) == 2)
            {
        		var bOK =  this.gfn_Message("CancelConfirm",  "인사고충상담" , "conf", "yesno");
        		if(bOK)
        		{
        		var strList = "cal_today";
        		this.nfn_clearInDivExcept(this.div_work.Tabpage3.form.div_basicInfo, strList );

        		var strCnt = '<fc v="red">*</fc>고충내용\n('+ this.div_work.Tabpage3.form.div_basicInfo.form.txa_context.text.length +'/ 1000)'
        		this.div_work.Tabpage3.form.div_basicInfo.form.sta_prevcareer.set_text(strCnt);
        		}
        	}
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
                if (trId == "selectCounselingList") //조회 service name
                {
        			if(this.ds_counselingList.rowcount < 1 )
        			{
        				 this.gfn_Message("NotExistList", NULL , "info", "ok");
        			}
        	    }
        		else if(trId == "selectCounselingDetail")	//상세조회
        		{
        			var status = this.ds_counselinginfo.getColumn(this.ds_counselinginfo.rowposition, "STATUS");
        			var counselContext = this.ds_counselinginfo.getColumn(this.ds_counselinginfo.rowposition, "COUNSEL_CONTEXT" );

        			//해당글의 내용에 대한 글자수를 표기
        			var strCnt = '<fc v="red">*</fc>고충내용\n('+ this.div_work.Tabpage3.form.div_basicInfo.form.txa_context.text.length +'/ 1000)'
        			this.div_work.Tabpage3.form.div_basicInfo.form.sta_prevcareer.set_text(strCnt);

        			this.div_work.Tabpage3.form.btn_cancel.set_enable(false);//취소버튼 잠금

        			if(status == "01")
        			{	//신청상태
        				this.div_work.Tabpage3.form.div_basicInfo.set_enable(true);
        				this.div_work.Tabpage3.form.btn_save.set_enable(true);
        			}
        			else if(status == "02")
        			{   //접수상태 = 답변유무 체크
        				this.div_work.Tabpage3.form.btn_save.set_enable(false);
        				this.div_work.Tabpage3.form.div_basicInfo.set_enable(false);
        			}
        			this.div_work.set_tabindex(1);
        		}
        		else if (trId == "saveCounseling")
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.div_work.set_tabindex(0);
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


        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        		// 글자수 체크표기
        this.fn_textAreaMaxkey = function(obj,e)
        {
        	var strCnt = '<fc v="red">*</fc>고충내용\n('+ this.div_work.Tabpage3.form.div_basicInfo.form.txa_context.text.length +'/ 1000)'
        	this.div_work.Tabpage3.form.div_basicInfo.form.sta_prevcareer.set_text(strCnt);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.Tabpage2.form.grd_counseling.addEventHandler("oncellclick",this.fn_searchDetail,this);
            this.div_work.Tabpage2.form.sta_cnt_ds_counselingList.addEventHandler("onclick",this.div_work_Tabpage2_sta_cnt_ds_counselingList_onclick,this);
            this.div_work.Tabpage2.form.btn_apply.addEventHandler("onclick",this.fn_apply,this);
            this.div_work.Tabpage2.form.btn_delLine.addEventHandler("onclick",this.fn_delline,this);
            this.div_work.Tabpage3.form.div_basicInfo.form.cbo_counseller.addEventHandler("onitemchanged",this.div_work_Tabpage3_div_basicInfo_cbo_counseller_onitemchanged,this);
            this.div_work.Tabpage3.form.div_basicInfo.form.txa_context.addEventHandler("onkeyup",this.fn_textAreaMaxkey,this);
            this.div_work.Tabpage3.form.div_basicInfo.form.txa_context.addEventHandler("onchanged",this.div_work_Tabpage3_div_basicInfo_txa_context_onchanged,this);
            this.div_work.Tabpage3.form.div_basicInfo.form.txa_counselContext.addEventHandler("onchanged",this.div_work_Tabpage3_div_basicInfo_txa_counselContext_onchanged,this);
            this.div_work.Tabpage3.form.btn_cancel.addEventHandler("onclick",this.fn_cancle,this);
            this.div_work.Tabpage3.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_search.form.Static30.addEventHandler("onclick",this.div_search_Static30_onclick,this);
            this.div_search.form.edt_userNm.addEventHandler("onchanged",this.div_search_edt_userNm_onchanged,this);
        };
        this.loadIncludeScript("HRA30110M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
