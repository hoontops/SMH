(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HRA30610M");
            this.set_titletext("FAQ등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"HJSHR_BOARD_ITEM_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ITEM_GROUP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_faqList", this);
            obj._setContents("<ColumnInfo><Column id=\"HJSHR_BOARD_ITEM_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ITEM_GROUP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MEANING\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CREATION_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_COUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CHECK_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_faqInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"HJSHR_BOARD_ITEM_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ITEM_GROUP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MEANING\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CREATION_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_FILE\" type=\"STRING\" size=\"256\"/><Column id=\"ANNOUNCE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_COUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"OBJECT_VERSION_NUMBER\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_viewCount", this);
            obj._setContents("<ColumnInfo><Column id=\"HJSHR_BOARD_ITEM_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"VIEW_COUNT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
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
            obj.set_text("분류");
            obj.set_tooltiptext("분류");
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

            obj = new Combo("cbo_boardItemGroup","103","10","110","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_codecolumn("C,SM_BOARD_ITEM_GROUP,NAN,,Y,Y");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00","213","10","70","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("제목");
            obj.set_tooltiptext("제목");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_title","293","10","300","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"8","60","20","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear",null,"8","60","20","76",null,null,null,null,null,this);
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

            obj = new Tab("div_work","0","78",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work);
            obj.set_text("F.A.Q 현황");
            obj.set_tooltiptext("F.A.Q 현황");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","211","34",null,null,null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("F.A.Q 현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("F.A.Q 현황");
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_faqList","0","34",null,null,"0","10",null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_faqList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"480\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"분류\" tooltiptext=\"분류\"/><Cell col=\"2\" text=\"제목\" tooltiptext=\"제목\"/><Cell col=\"3\" text=\"작성자\" tooltiptext=\"작성자\"/><Cell col=\"4\" text=\"등록일자\" tooltiptext=\"등록일자\"/><Cell col=\"5\" text=\"조회\" tooltiptext=\"조회\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHECK_YN\"/><Cell col=\"1\" text=\"bind:MEANING\"/><Cell col=\"2\" text=\"bind:TITLE\" color=\"blue\"/><Cell col=\"3\" text=\"bind:USER_NAME\"/><Cell col=\"4\" text=\"bind:CREATION_DATE\"/><Cell col=\"5\" text=\"bind:VIEW_COUNT\"/></Band></Format></Formats>");
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_faqList","219","0","140","34",null,null,null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_delLine",null,"7","60","20","0",null,null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("행삭제");
            obj.set_tooltiptext("행삭제");
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work);
            obj.set_text("F.A.Q 등록");
            obj.set_tooltiptext("F.A.Q 등록");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","241","34",null,null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("F.A.Q 등록");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("F.A.Q 등록");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Div("div_basicInfo","0","34",null,"288","0",null,null,null,null,null,this.div_work.Tabpage2.form);
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

            obj = new Static("sta_site","0","0","120","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("0");
            obj.set_text("<fc v=\'red\'>*</fc>게시분류");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("게시분류");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_site00","430","0","120","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("1");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("작성자");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_00","0","30",null,"2","0",null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_detail_line");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_00_00","0","61",null,"2","0",null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_detail_line");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_site01","0","31","120","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("4");
            obj.set_text("<fc v=\'red\'>*</fc>제목");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("제목");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_certdate00","0","62","120","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("5");
            obj.set_text("파일첨부");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("파일첨부");
            obj.set_usedecorate("false");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_site00_00","430","62","120","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("6");
            obj.set_text("공지 게시물");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("공지 게시물");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00","0","92",null,"2","0",null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_detail_line");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_prevcareer00","0","93","120","193",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("8");
            obj.set_text("<fc v=\'red\'>*</fc>내용");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("내용");
            obj.set_usedecorate("true");
            obj.set_border("0px none");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new TextArea("txa_content","125","98","777","183",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("9");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_title","125","36","711","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("10");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_attachFile","125","67","260","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("11");
            obj.set_enable("false");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Combo("cbo_boardItemGroup","125","5","160","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("12");
            obj.set_codecolumn("C,SM_BOARD_ITEM_GROUP,NAN,,Y,Y");
            obj.set_index("-1");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Button("Button00","385","67","22","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_userName","554","5","160","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("14");
            obj.set_cssclass("display");
            obj.set_enable("false");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox_announceType","554","67","19","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("15");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

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
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_work.Tabpage2.form.div_basicInfo.form.edt_userName","value","ds_faqInfo","USER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_work.Tabpage2.form.div_basicInfo.form.edt_title","value","ds_faqInfo","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_work.Tabpage2.form.div_basicInfo.form.edt_attachFile","value","ds_faqInfo","ATTACH_FILE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_work.Tabpage2.form.div_basicInfo.form.CheckBox_announceType","value","ds_faqInfo","ANNOUNCE_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_work.Tabpage2.form.div_basicInfo.form.txa_content","value","ds_faqInfo","CONTENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_work.Tabpage2.form.div_basicInfo.form.cbo_boardItemGroup","value","ds_faqInfo","ITEM_GROUP_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("HRA30610M.xfdl", function() {
        /***************************************************************************************
         * 시스템명       : SM상선 myHR Application고도화 사업
         * 업무명         : F.A.Q 등록
         * 파일명         : HRA30610M.xfdl
         * 작성자         : 정우영
         * 작성일         : 2022.02.18
         *
         * 설  명         : 인사업무 담당자는 임직원들에게 셀프서비스 게시판을 통해 인사정보를 보여줄 수 있다.
         *					즉, 전사원들에게 인사 업무관련 각종 게시물이나 공지사항을 게시판을 통해 보여줄 경우 게시판 등록을 작성하고,
         *					업무분류에 따라 세분화하여 구분시킬 수 있다
         *
         *---------------------------------------------------------------------------------------
         * 변경일        변경자      변경내역
         *---------------------------------------------------------------------------------------
         * 2022.02.18     정우영      최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 필수 include
         ***************************************************************************/

        /**************************************************************************
         * FORM 변수 선언 영역
         ***************************************************************************/
        var flag;
        var rowData;
        var personId = this.gf_getPersonId();
        /**************************************************************************
         * FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {

            this.nfn_formInit(obj);

        	var jobSysCd = "HRA"; //업무구분코드 CMD,BAS....
            var subDir = "faq_board";	//세부업무약어
            var resouceid = '0';//테이블의 키 값  //RESOURCEID
            var resourcetype = "faq_board";  //RESOURCETYPE
            var comments = "F.A.Q 게시판";  //파일설명 //
            var fileCnt = "null"; // 업로드 수


        	this.div_file.form.jobSysCd = jobSysCd;
        	this.div_file.form.subDir = subDir;
        	this.div_file.form.resouceid = resouceid;
        	this.div_file.form.fileExts = '';
        	this.div_file.form.resourcetype = resourcetype;
        	this.div_file.form.desc = '';
        	this.fv_nFileCnt = fileCnt;

        };

        /**************************************************************************
         * 공통버튼영역 (함수 삭제금지!!!!)
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
        this.fn_search = function(obj,e)
        {
        	// 매개변수 초기화
        	this.ds_search.clearData();
        	var sRow = this.ds_search.addRow();
        	this.ds_search.setColumn(sRow, "ITEM_GROUP_ID", this.div_search.form.cbo_boardItemGroup.value);
        	this.ds_search.setColumn(sRow, "TITLE", this.div_search.form.edt_title.value);

        	// F.A.Q 현황 내역
        	var sSvcID = "selectFaqList";
        	var sController = "/hra30610/selectFaqList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_faqList=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectFaqList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };

        /*
         * 기능 : 취소
         */
        this.fn_cancel = function(obj,e)
        {
        	//데이터 미존재시 return
        	if (this.ds_faqInfo.rowcount < 1) return;

            if (this.ds_faqInfo.getRowType(this.ds_faqInfo.rowposition) == 2) //추가된행의 경우
            {
        		//해당 div 내 초기화
        		this.div_work.Tabpage2.form.div_basicInfo.form.cbo_boardItemGroup.set_value("");
        		this.div_work.Tabpage2.form.div_basicInfo.form.edt_title.set_value("");
        		this.div_work.Tabpage2.form.div_basicInfo.form.edt_attachFile.set_value("");
        		this.div_work.Tabpage2.form.div_basicInfo.form.CheckBox_announceType.set_value("N");
        		this.div_work.Tabpage2.form.div_basicInfo.form.txa_content.set_value("");
        	}
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function(obj,e)
        {
        	//데이터 미존재시 return
        	if (this.ds_faqInfo.rowcount < 1) return;

        	//변경된 데이터가 있는지 체크
        	if (!this.gfn_dsIsUpdated(this.ds_faqInfo))
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");
        		return;
        	}

        	var objDataset = "ds_faqInfo";
        	var strColIdList = "ITEM_GROUP_ID,TITLE,CONTENT";
        	var strColNmList = "게시분류,제목,내용"

        	var rtn = this.nfn_MandatoryCheckDs(objDataset, strColIdList, strColNmList);
        	if (rtn == false) return;

        	// ---------------------
        	// 저장
        	// ':U'는 갱싱된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N'은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 저장하지않는 데이터세트는 Normal로 동작합니다.
        	// ---------------------

            var sSvcID        = "saveFaq";
            var sController   = "/hra30610/saveFaq.do";
            var sInDatasets   = "INPUT=ds_faqInfo:U";
            var sOutDatasets  = "";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        	this.div_file.form.fn_upload();
        };

        /*
         * 기능 : 삭제
         */
        this.fn_delLine = function(obj,e)
        {
        	//데이터 미존재시 return
        	if (this.ds_faqList.rowcount < 1) return;

        	var validCount = 0;
        	var arrDelRow = []; //삭제대상 리스트
        	for (i=0; i< this.ds_faqList.getRowCount(); i++){
        		var checkYn = this.ds_faqList.getColumn(i, "CHECK_YN");

        		if (checkYn == "1") //체크대상
        		{
        			validCount++;
        			arrDelRow.push(i);
        		}
        	}

        	if (validCount < 1)
        	{
        		this.gfn_Message("NoSelectData", null, "info", "ok");
        		return;
        	}

        	var bOK = this.gfn_Message("IsDeleted", null, "conf", "yesno"); //선택한 내역에 대해 삭제 작업을 수행할 예정입니다. 계속 진행하시겠습니까?
        	if (!bOK) return;

        	//선택된 행삭제
            this.ds_faqList.deleteMultiRows(arrDelRow);

        	// -------------------------
            // 저장
            // ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
            // ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
            // -------------------------
        	var sSvcID 			= "saveFaq";
        	var sController 	= "/hra30610/saveFaq.do";
        	var sInDatasets 	= "INPUT= ds_faqList:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /**************************************************************************
         * TRANSACTION, CALLBACK 영역
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
        		if (trId == "selectFaqList") //조회
        		{
        			this.div_work.set_tabindex(0); //F.A.Q 등록 내역 탭으로 이동
        			if (this.ds_faqList.rowcount < 1)
        			{
        				 this.gfn_Message("NotExistList", "F.A.Q 현황", "info", "ok") //{0} 내역정보가 존재하지 않습니다.
        				 return;
        			}
        		}
        		else if (trId == "selectFaqDetail") //상세 조회
        		{
        			this.div_work.Tabpage2.form.btn_cancel.set_enable(false);//취소버튼 잠금
        			this.div_work.Tabpage2.form.btn_save.set_enable(true);
        			this.div_work.set_tabindex(1);
        		}
        		else if (trId == "saveFaq") //저장
        		{
                    this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.div_work.set_tabindex(0); //F.A.Q 등록 내역 탭으로 이동
        			this.fn_search();
        		}
        	}
        };


        /**************************************************************************
         * 팝업 호출
         **************************************************************************/

        //파일 첨부 팝업
        this.fn_attachFile_onclick = function(obj,e)
        {
        	var jobSysCd = "HRA"; 					//업무구분코드 CMD,BAS....
        	var subDir = "public_board"; 				//세부업무약어
        	var resouceid = "0";					//테이블의 키 값
        	var resourcetype = "public_board"; 	//테이블명
        	var comments = "공지 게시판"; 		//파일설명
        	var fileCnt = null; 					//업로드수
        	var fileExts = [".png", ".jpg"];	//허용 파일 확장자
        	var oArg = {arg_jobSysCd:jobSysCd
        				,arg_atchSrcKey:resouceid
        				,arg_tableName:resourcetype
        				,arg_desc:comments
        				,arg_subDir:subDir
        				,arg_fileCnt:fileCnt
        				,arg_fileExts:fileExts
        				};
        	this.gfn_openPopup("file_upload","cmd::CMSA01220P.xfdl",oArg,"");
        };

        /**************************************************************************
         * 기타 함수(화면 로컬 정의)
         **************************************************************************/

        /**************************************************************************
         * 이벤트
         ***************************************************************************/

        //그리드 셀클릭 - 상세정보 진입
        this.fn_cellClick = function(obj,e)
        {
        	if(e.col == obj.getBindCellIndex("body", "TITLE"))
        	{
        		var col = e.col;

        		//클릭시 체크박스컬럼은 제외
        		if(col != 0) {
        			flag = "select";
        			rowData = this.ds_faqList.getColumn(e.row, "HJSHR_BOARD_ITEM_SEQ")

        			this.div_work.set_tabindex(1);
        		}

        		// 조회 수 증가
        		this.ds_viewCount.clearData();
        		this.ds_viewCount.addRow();
        		this.ds_viewCount.setColumn(0, "HJSHR_BOARD_ITEM_SEQ", this.ds_faqList.getColumn(e.row, "HJSHR_BOARD_ITEM_SEQ"));

        		var sSvcID        = "insertViewCount";
        		var sController   = "/hra30610/insertViewCount.do";
        		var sInDatasets   = "INPUT=ds_viewCount:U";
        		var sOutDatasets  = "";
        		var sArgs         = "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	}
        };

        // Tab Page 변경 시(등록탭 페이지화면 로드 될 때)
        this.tab_work_onchanged = function(obj,e)
        {

        	//F.A.Q 등록 탭일 경우
        	if (e.postindex == 1) {

        		//상세내역 클릭 경우 상세정보 뿌려주기
        		if (flag == "select") {

        			//입력창 활성화
        			this.div_work.Tabpage2.form.div_basicInfo.set_enable( true );

        			this.ds_faqInfo.clearData();

        			this.ds_search.clearData();
        			this.ds_search.addRow();
        			this.ds_search.setColumn(0, "HJSHR_BOARD_ITEM_SEQ", rowData);

        			var sSvcID = "selectFaqDetail";
        			var sController = "/hra30610/selectFaqDetail.do";
        			var sInDatasets = "INPUT=ds_search";
        			var sOutDatasets = "ds_faqInfo=output";
        			var sArgs = "";
        			this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        		}
        		//상세내역 조회가 아닌 경우 초기화
        		else {

        			this.div_work.Tabpage2.form.div_basicInfo.set_enable( true );

        			this.ds_faqInfo.clearData();
        			var nRow = this.ds_faqInfo.addRow();
        			this.ds_faqInfo.setColumn(nRow, "USER_ID", personId);
        			this.ds_faqInfo.setColumn(nRow, "USER_NAME", this.gf_getUserNm());
        			this.ds_faqInfo.setColumn(nRow, "OBJECT_VERSION_NUMBER", 1);

        			this.div_work.Tabpage2.form.div_basicInfo.form.edt_title.set_value("");
        			this.div_work.Tabpage2.form.div_basicInfo.form.edt_fileAttach.set_value("");
        			this.div_work.Tabpage2.form.div_basicInfo.form.CheckBox_announceType.set_value("");
        			this.div_work.Tabpage2.form.div_basicInfo.form.txa_content.set_value("");
        		}
        	}

        	//화면 진입 성공 후 플래그 초기화
        	flag = "";
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_search.form.Static00.addEventHandler("onclick",this.div_search_Static00_onclick,this);
            this.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.addEventHandler("onchanged",this.tab_work_onchanged,this);
            this.div_work.Tabpage1.form.grd_faqList.addEventHandler("oncellclick",this.fn_cellClick,this);
            this.div_work.Tabpage1.form.btn_delLine.addEventHandler("onclick",this.fn_delLine,this);
            this.div_work.Tabpage2.form.div_basicInfo.form.sta_prevcareer00.addEventHandler("onclick",this.div_work_Tabpage3_div_basicInfo_sta_prevcareer_onclick,this);
            this.div_work.Tabpage2.form.btn_cancel.addEventHandler("onclick",this.fn_cancel,this);
            this.div_work.Tabpage2.form.btn_save.addEventHandler("onclick",this.fn_save,this);
        };
        this.loadIncludeScript("HRA30610M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
