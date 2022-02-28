(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HRA30510M");
            this.set_titletext("게시판관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"HJSHR_BOARD_ITEM_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_boardInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"HJSHR_BOARD_ITEM_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BOARD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_GROUP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_FILE\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_COUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LAST_READ_BY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AUTHOR_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRIVATE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ANNOUNCE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATED_BY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CREATION_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATED_BY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LAST_UPDATE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATE_LOGIN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"OBJECT_VERSION_NUMBER\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ATCH_SRC_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_TY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_GUID\" type=\"STRING\" size=\"256\"/><Column id=\"OC_FILE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_boardList", this);
            obj._setContents("<ColumnInfo><Column id=\"HJSHR_BOARD_ITEM_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CREATION_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_FILE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_viewCount", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"HJSHR_BOARD_ITEM_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"VIEW_COUNT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_file", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_SYS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_EXT\" type=\"STRING\" size=\"256\"/><Column id=\"OC_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_GUID\" type=\"STRING\" size=\"256\"/><Column id=\"SVR_SAVE_COURS\" type=\"STRING\" size=\"256\"/><Column id=\"DRM_APY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DNLD_CNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"KEEP_START_DATEC\" type=\"STRING\" size=\"256\"/><Column id=\"KEEP_END_DATEC\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CREATION_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATED_BY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LAST_UPDATE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATE_LOGIN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TABLE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESC\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_SRC_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_SAVE_COURS\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_text("작성자");
            obj.set_tooltiptext("작성자");
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

            obj = new Static("Static00_00","213","10","70","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("제목");
            obj.set_tooltiptext("제목");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_searchWriter","103","10","110","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_searchTitle","293","10","240","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"8","60","20","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear",null,"8","60","20","76",null,null,null,null,null,this);
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
            obj.set_text("게시판 현황");
            obj.set_tooltiptext("게시판 현황");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_gridTitle","0","0","211","34",null,null,null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("게시판 현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("게시판 현황");
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_boardList","0","34",null,null,"0","10",null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_boardList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"480\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"제목\" tooltiptext=\"제목\"/><Cell col=\"2\" text=\"작성자\" tooltiptext=\"작성자\"/><Cell col=\"3\" text=\"등록일자\" tooltiptext=\"등록일자\"/><Cell col=\"4\" text=\"조회\" tooltiptext=\"조회\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHECK_YN\"/><Cell col=\"1\" text=\"bind:TITLE\"/><Cell col=\"2\" text=\"bind:USER_NAME\"/><Cell col=\"3\" text=\"bind:CREATION_DATE\"/><Cell col=\"4\" text=\"bind:VIEW_COUNT\"/></Band></Format></Formats>");
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_boardList","219","0","140","34",null,null,null,null,null,null,this.div_work.Tabpage1.form);
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
            obj.set_text("게시판 등록");
            obj.set_tooltiptext("게시판 등록");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","241","34",null,null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("게시판 등록");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("게시판 등록");
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
            obj.set_text("등록일자");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("등록일자");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_site00","430","0","120","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("2");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("작성자");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_00","0","30",null,"2","0",null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_detail_line");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_00_00","0","61",null,"2","0",null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("12");
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
            obj.set_taborder("6");
            obj.set_text("파일첨부");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("파일첨부");
            obj.set_usedecorate("false");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_site00_00","430","62","120","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("8");
            obj.set_text("공지 게시물");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("공지 게시물");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00","0","92",null,"2","0",null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_detail_line");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_prevcareer00","0","93","120","193",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("14");
            obj.set_text("<fc v=\'red\'>*</fc>내용");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("내용");
            obj.set_usedecorate("true");
            obj.set_border("0px none");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new TextArea("txa_content","125","98","777","183",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("10");
            obj.set_maxlength("1000");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_title","125","36","711","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("5");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Button("btn_attchFile","385","67","22","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox_announceType","554","67","19","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("9");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_writer","554","5","160","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("3");
            obj.set_cssclass("display");
            obj.set_enable("false");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Calendar("cal_requestDate","125","5","160","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("1");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_01","125","67","260","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("15");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #d4d4d4");
            obj.set_padding("0px 5px 0px 5px");
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

            obj = new Button("btn_00","700","373","62","19",null,null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_text("btn_00");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload00","780","480","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("FileDownload00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_work.Tabpage2.form.div_basicInfo.form.cal_requestDate","value","ds_boardInfo","CREATION_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_work.Tabpage2.form.div_basicInfo.form.edt_writer","value","ds_boardInfo","USER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_work.Tabpage2.form.div_basicInfo.form.edt_title","value","ds_boardInfo","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_work.Tabpage2.form.div_basicInfo.form.txa_content","value","ds_boardInfo","CONTENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_work.Tabpage2.form.div_basicInfo.form.CheckBox_announceType","value","ds_boardInfo","ANNOUNCE_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("HRA30510M.xfdl", function() {
        /***************************************************************************************
         * 시스템명       : SM상선 myHR Application고도화 사업
         * 업무명         : 게시판 관리
         * 파일명         : HRA30510M.xfdl
         * 작성자         : 정우영
         * 작성일         : 2022.02.14
         *
         * 설  명         : 인사업무 담당자는 임직원들에게 셀프서비스 게시판을 통해 인사정보를 보여줄 수 있다.
         *					즉, 전사원들에게 인사 업무관련 각종 게시물이나 공지사항을 게시판을 통해 보여줄 경우 게시판 등록을 작성하고,
         *					업무분류에 따라 세분화하여 구분시킬 수 있다
         *
         *---------------------------------------------------------------------------------------
         * 변경일        변경자      변경내역
         *---------------------------------------------------------------------------------------
         * 2022.02.14     정우영      최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 필수 include
         ***************************************************************************/

        /**************************************************************************
         * FORM 변수 선언 영역
         ***************************************************************************/
        var flag;
        var personId = this.gf_getPersonId();

        var callSeq = "";
        var callDetail = "";	 // 타페이지에서 이동해왔을때 DETAIL (상세)화면까지
        					     // 이동하기위해 체크하는 변수입니다. callback부분 확인

        this.gridTitle = "";
        /**************************************************************************
         * FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
            this.nfn_formInit(obj);
            this.gridTitle = this.div_work.Tabpage1.form.sta_gridTitle.getDisplayText();

        	/**************************************************************************
        	 * 호출 응답 (함수 삭제금지!!!!)
        	 *
        	 * 해당 함수를 사용하기위하여 xml 쿼리문을 부분적으로 수정하였습니다.
        	 * selectBoardList 의 최하단에 처리하였으니 xfdl , xml 파일 확인해보시기 바랍니다.
        	 * 2022.02.22 LJH
        	 ***************************************************************************/
        	var sArgName = this.gfn_getFrameAguments("menuName");

        	if(sArgName == "CMD10200M") {
        		var sArgArr = this.gfn_getFrameAguments("objList");
        		var seq = sArgArr[1];
        	//	this.div_work.form.tab.set_tabindex(1);
        		callSeq =seq;
        		callDetail = "Y";
                this.fn_search();

        	}
        };


        /**************************************************************************
         * 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        	/*20200221 id btn_clear1를 btn_clear로 변경하여 nbdfComLib.js의 nfn_clear를 수행하도록 함*/
        	/*this.div_search.form.edt_searchWriter.set_value("");
        	this.div_search.form.edt_searchTitle.set_value("");*/
        };
        /*
         * 기능 : 검색
         */
        this.fn_search = function(obj,e)
        {
        	// 매개변수 초기화
        	this.ds_search.clearData();
        	var sRow = this.ds_search.addRow();
        	if (this.gfn_isNull(callSeq))
        	{
        		this.ds_search.setColumn(sRow, "TITLE", this.div_search.form.edt_searchTitle.value);
        		this.ds_search.setColumn(sRow, "USER_NAME", this.div_search.form.edt_searchWriter.value);
        	}
        	else
        	{
        		this.ds_search.setColumn(sRow, "HJSHR_BOARD_ITEM_SEQ", callSeq);
        	}


        	// 게시판 현황 내역
        	var sSvcID = "selectBoardList";
        	var sController = "/hra30510/selectBoardList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_boardList=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectBoardList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };

        /*
         * 기능 : 취소
         */
        this.fn_cancel = function(obj,e)
        {
        	//데이터 미존재시 return
        	if (this.ds_boardInfo.rowcount < 1) return;

            if (this.ds_boardInfo.getRowType(this.ds_boardInfo.rowposition) == 2) //추가된행의 경우
            {
        		//해당 div 내 초기화
        		this.div_work.Tabpage2.form.div_basicInfo.form.edt_title.set_value("");
        		this.div_work.Tabpage2.form.div_basicInfo.form.edt_fileAttach.set_value("");
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
        	if (this.ds_boardInfo.rowcount < 1) return;

        	//변경된 데이터가 있는지 체크
        	if (!this.gfn_dsIsUpdated(this.ds_boardInfo))
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");
        		return;
        	}

        	var objDataset = "ds_boardInfo";
        	var strColIdList = "TITLE,CONTENT";
        	var strColNmList = "제목,내용"

        	var rtn = this.nfn_MandatoryCheckDs(objDataset, strColIdList, strColNmList);
        	if (rtn == false) return;


        	//조회시 첨부파일 존재
        	if (!this.gfn_isNull(this.ds_boardInfo.getColumn(this.ds_boardInfo.rowposition, "ATTACH_FILE")))
        	{
        		//첨부파일 삭제
        		if (this.ds_file.rowcount < 1)
        		{
        			this.ds_boardInfo.setColumn(this.ds_boardInfo.rowposition, "ATTACH_FILE", "");
        		}
        	}
        	//조회시 첨부파일 미존재
        	else
        	{
        		//첨부파일 추가
        		if (this.ds_file.rowcount > 0)
        		{
        			this.ds_boardInfo.setColumn(this.ds_boardInfo.rowposition, "ATTACH_FILE", this.ds_file.getColumn(0, "ATCH_FILE_ID"));
        		}
        	}

        	// ---------------------
        	// 저장
        	// ':U'는 갱싱된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N'은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 저장하지않는 데이터세트는 Normal로 동작합니다.
        	// ---------------------
            var sSvcID        = "saveBoard";
            var sController   = "/hra30510/saveBoard.do";
            var sInDatasets   = "INPUT=ds_boardInfo:U";
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
        	if (this.ds_boardList.rowcount < 1) return;

        	//선택 대상중 상태가 "승인"인 데이터가 존재하면 오류 처리
        	var validCount = 0;
        	var arrDelRow = []; //삭제대상 리스트
        	for (i=0; i< this.ds_boardList.getRowCount(); i++){
        		var checkYn = this.ds_boardList.getColumn(i, "CHECK_YN");

        		if (checkYn == "1") //체크대상
        		{
        			validCount++;
        			arrDelRow.push(i);
        		}
        	}

        	if (validCount < 1)
        	{
        		this.gfn_Message("SelectData", this.gridTitle, "info", "ok");//{0}을 선택하여 주십시오.
        		return;
        	}

        	var bOK = this.gfn_Message("IsDeleted", null, "conf", "yesno"); //선택한 내역에 대해 삭제 작업을 수행할 예정입니다. 계속 진행하시겠습니까?
        	if (!bOK) return;

        	//선택된 행삭제
            this.ds_boardList.deleteMultiRows(arrDelRow);

        	// -------------------------
            // 저장
            // ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
            // ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
            // -------------------------
        	var sSvcID 			= "saveBoard";
        	var sController 	= "/hra30510/saveBoard.do";
        	var sInDatasets 	= "INPUT= ds_boardList:U";
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
        		if (trId == "selectBoardList") //조회
        		{
        			this.div_work.set_tabindex(0); //게시판 등록 내역 탭으로 이동
        			if (this.ds_boardList.rowcount < 1)
        			{
        				 this.gfn_Message("NotExistListTitle", this.gridTitle, "info", "ok") //{0}정보가 존재하지 않습니다.
        				 return;
        			}
        			if(callDetail == "Y")
        			{/* 상세화면으로 바로이동할수있는 하단  eventhandler 를 사용하여 이동하도록 해줍니다.
        			    기본 search시 callSeq 값을 초기화하여 정상작동 시켜줍니다. */

        				callDetail = "";
        				callSeq = "";
        				this.div_work.Tabpage1.form.grd_boardList.addEventHandler("oncellclick", this.fn_cellClick(this.div_work.Tabpage1.form.grd_boardList ,nexacro.ClickEventInfo), this);
        			}
        		}
        		else if (trId == "selectBoardDetail") //상세 조회
        		{
        			this.div_work.Tabpage2.form.btn_cancel.set_enable(false);//취소버튼 잠금
        			this.div_work.Tabpage2.form.btn_save.set_enable(true);
        			this.div_work.set_tabindex(1);
        		}
        		else if (trId == "saveBoard") //저장
        		{
                    this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.div_work.set_tabindex(0); //게시판 등록 내역 탭으로 이동
        			this.fn_search();
        		}
        	}
        };


        /**************************************************************************
         * 팝업 호출
         **************************************************************************/
        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
            var rtn = this.fv_rtnValue;

            //파일첨부 팝업화면 닫고 호출됨
            if (sPopupId == "file_upload")
        	{
        	   if (!this.nfn_isNull(rtn)) //변경유무
        	   {
        		   if(this.ds_file.rowcount > 0) //파일존재시
        		   {
        				var ocFileNm = this.ds_file.getColumn(0, "OC_FILE_NM");
        				var strOcFileNm = ocFileNm.substring(0, (ocFileNm.indexOf(".")>-1 ? ocFileNm.indexOf(".") : ocFileNm.length));
        				this.ds_boardInfo.set_enableevent(false);
        				this.ds_boardInfo.setColumn(this.ds_boardInfo.rowposition, "ATTACH_FILE_NM", strOcFileNm);
        				this.ds_boardInfo.set_enableevent(true);
        		   }
        		   else  //파일 ALL 삭제시
        		   {
        				this.ds_boardInfo.set_enableevent(false);
        				this.ds_boardInfo.setColumn(this.ds_boardInfo.rowposition, "ATTACH_FILE_NM", "");
        				this.ds_boardInfo.set_enableevent(true);
        		   }

                }
        		return;
        	}
        };

        /**************************************************************************
         * 기타 함수(화면 로컬 정의)
         **************************************************************************/

        /**************************************************************************
         * 이벤트
         ***************************************************************************/

        /*
         * 이벤트 : 파일 첨부 이미지 클릭(파일첨부팝업호출)
         */
        this.fn_attachFile_onclick = function(obj,e)
        {
        	var atchSrcKey = this.ds_boardInfo.getColumn(this.ds_boardInfo.rowposition, "ATCH_SRC_KEY");
        	var atchCd = this.ds_boardInfo.getColumn(this.ds_boardInfo.rowposition, "ATCH_TY_CD");

        	var jobSysCd     = "HRA"; 					      //업무구분코드 CMD,BAS....
        	var subDir       = "public_board"; 		      //세부업무약어
        	var resouceid    = this.gfn_isNull(atchSrcKey) ? this.gfn_svrTodayTime()+"|"+personId: atchSrcKey; //테이블의 키 값
        	var resourcetype = this.gfn_isNull(atchCd) ? "public_board": atchCd; 	              //테이블명
        	var comments     = "공지 게시판"; 		          //파일설명
        	var fileCnt      = 1; 					      //업로드수
        	var fileExts     = [".png", ".jpg"];	          //허용 파일 확장자
        	var oArg = { arg_jobSysCd:jobSysCd
        				,arg_atchSrcKey:resouceid
        				,arg_tableName:resourcetype
        				,arg_desc:comments
        				,arg_subDir:subDir
        				,arg_fileCnt:fileCnt
        				,arg_fileExts:fileExts
        				,arg_copyDataset:"ds_file"     //파일업로드결과 복사데이터셋
        				};

        	this.ds_file.clearData();
        	this.gfn_openPopup("file_upload","cmd::CMSA01220P.xfdl",oArg,"");
        };

        /*
         * 이벤트 : 그리드 셀클릭 - 상세정보 진입
         */
        this.fn_cellClick = function(obj,e)
        {
        	if(e.col != obj.getBindCellIndex("body", "CHECK_YN"))
        	{
        		flag = "select"; //상세정보 조회여부
        		this.ds_boardInfo.clearData();
        		this.ds_search.clearData();
        		var nRow = this.ds_search.addRow();
        		var itemSeq = obj.getBindDataset().getColumn(e.row, "HJSHR_BOARD_ITEM_SEQ");
        		this.ds_search.setColumn(nRow, "HJSHR_BOARD_ITEM_SEQ", itemSeq);

        		var sSvcID = "selectBoardDetail";
        		var sController = "/hra30510/selectBoardDetail.do";
        		var sInDatasets = "INPUT=ds_search";
        		var sOutDatasets = "ds_boardInfo=output";
        		var sArgs = "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	}
        };

        /*
         * 이벤트 : Tab Page 변경 시(등록탭 페이지화면 로드 될 때)
         */
        this.tab_work_onchanged = function(obj,e)
        {
        	//게시판 등록 탭일경우
        	if (e.postindex == 1) {

        		//상세내역 조회가 아닌경우 초기화
        		if (flag != "select")
        		{
        			this.div_work.Tabpage2.form.div_basicInfo.set_enable( true );

        			this.ds_boardInfo.clearData();
        			var nRow = this.ds_boardInfo.addRow();

        			this.ds_boardInfo.setColumn(nRow, "CREATION_DATE", this.gfn_today());
        			this.ds_boardInfo.setColumn(nRow, "USER_ID", personId);
        			this.ds_boardInfo.setColumn(nRow, "USER_NAME", this.gf_getUserNm());
        			this.ds_boardInfo.setColumn(nRow, "OBJECT_VERSION_NUMBER", 1);

        			var strList = "cal_requestDate|edt_writer"; //초기화 제외 대상
        		    this.nfn_clearInDivExcept(this.div_work.Tabpage2.form.div_basicInfo, strList ); //게시판등록 초기화
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
            this.div_work.Tabpage1.form.grd_boardList.addEventHandler("oncellclick",this.fn_cellClick,this);
            this.div_work.Tabpage1.form.btn_delLine.addEventHandler("onclick",this.fn_delLine,this);
            this.div_work.Tabpage2.form.div_basicInfo.form.txa_content.addEventHandler("onchanged",this.div_work_Tabpage2_div_basicInfo_txa_content_onchanged,this);
            this.div_work.Tabpage2.form.div_basicInfo.form.btn_attchFile.addEventHandler("onclick",this.fn_attachFile_onclick,this);
            this.div_work.Tabpage2.form.btn_cancel.addEventHandler("onclick",this.fn_cancel,this);
            this.div_work.Tabpage2.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_work.Tabpage2.form.btn_00.addEventHandler("onclick",this.div_work_Tabpage2_btn_00_onclick,this);
        };
        this.loadIncludeScript("HRA30510M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
