(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMBM02100M");
            this.set_titletext("배치실행 및 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
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
            obj._setContents("<ColumnInfo><Column id=\"DATE_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TO\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_GUBUN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRAM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BATCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BATCH_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"BATCH_RESULT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PARENT_JOB_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_NUMBER\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PAGE_SIZE\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_batchRun", this);
            obj._setContents("<ColumnInfo><Column id=\"BATCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRAM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PARENT_JOB_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PARAMS\" type=\"STRING\" size=\"256\"/><Column id=\"START_TIME\" type=\"DATETIME\" size=\"256\"/><Column id=\"END_TIME\" type=\"DATETIME\" size=\"256\"/><Column id=\"TERM_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"BATCH_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"BATCH_STATUS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BATCH_RESULT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BATCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BATCH_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BATCH_INTERVAL_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BATCH_INTERVAL_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BATCH_INTERVAL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CREATED_BY\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ENABLED\" type=\"STRING\" size=\"256\"/><Column id=\"NEXT_RUN_DATE\" type=\"DATETIME\" size=\"256\"/><Column id=\"TOTAL_ROWS\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ADDITIONAL_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ATCH_TY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_SRC_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_CNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ATCH_FILE_GUID\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_NUMBER\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PAGE_SIZE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_batchLog", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"JOB_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ_NO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"START_TIME\" type=\"DATETIME\" size=\"256\"/><Column id=\"END_TIME\" type=\"DATETIME\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"TABLE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CRUD_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESS_CNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SUCCESS_CNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ERROR_CNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"STATUS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ERR_CONTENTS\" type=\"STRING\" size=\"256\"/><Column id=\"TERM_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"CNT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_proc_out", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ERROR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ERROR_DESC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search2", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DATE_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TO\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_GUBUN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRAM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BATCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BATCH_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"BATCH_RESULT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PARENT_JOB_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_NUMBER\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PAGE_SIZE\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_totCnt",null,"112","162","21","10",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("(조회  0 건)");
            obj.set_textAlign("right");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static03",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","0","96",null,"15","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("yellowgreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static78","0%","21",null,"5","0.22%",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_batchRun","0","135",null,"435","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_batchRun");
            obj.set_autoenter("select");
            obj.set_nodatatext("검색 결과가 없습니다.");
            obj.set_cellsizingtype("col");
            obj.set_tabstop("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\" band=\"left\"/><Column size=\"40\"/><Column size=\"149\"/><Column size=\"242\"/><Column size=\"130\"/><Column size=\"180\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"1000\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"처리상태\"/><Cell col=\"1\" text=\"첨부\"/><Cell col=\"2\" text=\"배치코드\"/><Cell col=\"3\" text=\"배치명\"/><Cell col=\"4\" text=\"배치JOB\"/><Cell col=\"5\" text=\"매개변수\"/><Cell col=\"6\" text=\"시작일시\"/><Cell col=\"7\" text=\"종료일시\"/><Cell col=\"8\" text=\"처리시간\"/><Cell col=\"9\" text=\"배치상태\"/><Cell col=\"10\" text=\"첨부파일ID\"/><Cell col=\"11\" text=\"첩부테이블\"/><Cell col=\"12\" text=\"첩부파일 조회키\"/><Cell col=\"13\" text=\"첨부파일수\"/><Cell col=\"14\" text=\"유형\"/><Cell col=\"15\" text=\"등록자\"/><Cell col=\"16\" text=\"다음실행시간\"/><Cell col=\"17\" text=\"배치상태\" textAlign=\"center\"/><Cell col=\"18\" text=\"배치주기\"/><Cell col=\"19\" text=\"간격\"/><Cell col=\"20\" text=\"부모JOB\"/><Cell col=\"21\" text=\"추가정보\"/></Band><Band id=\"body\"><Cell text=\"bind:BATCH_STATUS_NM\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"expr:comp.parent.nfn_isNull(ATCH_FILE_ID) ? &apos;normal&apos; : &apos;image&apos;\" edittype=\"none\" text=\"expr:comp.parent.nfn_isNull(ATCH_FILE_ID) ? &apos;&apos; : &apos;image::btn_WF_TabIcon1_P.png&apos;\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:BATCH_CD\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PROGRAM_NAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:JOB_NAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:PARAMS\" textAlign=\"left\"/><Cell col=\"6\" displaytype=\"normal\" text=\"bind:START_TIME\" mask=\"yyyy/MM/dd HH:mm:ss\" maskchar=\" \" calendardisplaynulltype=\"none\" textAlign=\"left\"/><Cell col=\"7\" displaytype=\"normal\" text=\"bind:END_TIME\" mask=\"yyyy/MM/dd HH:mm:ss\" maskchar=\" \" calendardisplaynulltype=\"none\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:TERM_TIME\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:BATCH_RESULT_TYPE\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:ATCH_FILE_ID\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:ATCH_TY_CD\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:ATCH_SRC_KEY\" textAlign=\"left\"/><Cell col=\"13\" displaytype=\"number\" text=\"bind:ATCH_FILE_CNT\" mask=\"!#,###,###\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:BATCH_TYPE_NM\" textAlign=\"left\"/><Cell col=\"15\" text=\"bind:USER_NM\" textAlign=\"left\"/><Cell col=\"16\" displaytype=\"normal\" text=\"bind:NEXT_RUN_DATE\" mask=\"yyyy/MM/dd HH:mm:ss\" maskchar=\" \" calendardisplaynulltype=\"none\" textAlign=\"left\"/><Cell col=\"17\" text=\"bind:BATCH_RESULT_TYPE\" textAlign=\"center\"/><Cell col=\"18\" text=\"bind:BATCH_INTERVAL_TYPE_NM\" textAlign=\"center\"/><Cell col=\"19\" text=\"bind:BATCH_INTERVAL\" textAlign=\"center\"/><Cell col=\"20\" text=\"bind:PARENT_JOB_NAME\"/><Cell col=\"21\" text=\"bind:ADDITIONAL_INFO\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","108","196","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("배치실행내역");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_border("0px none rgba(51,51,51,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","125","500","10",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","622","130",null,"5","10",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"0","60","21","250",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_DR_GridSearch");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear1",null,"0","60","21","313",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("초기화");
            obj.set_cssclass("btn_DR_GridReset");
            obj.set_tooltiptext("초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"0","80","21","167",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("실행취소");
            obj.set_cssclass("btn_DR_Basic2");
            obj.set_tooltiptype("hover");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exec",null,"0","60","21","104",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("실행");
            obj.set_cssclass("btn_DR_Basic2");
            obj.set_tooltiptype("hover");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","570",null,"15","0",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("yellowgreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0","582","196","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("배치로그내역");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_border("0px none rgba(51,51,51,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","0","599","500","10",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","622","604",null,"5","10",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_batchLog","0","609",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_batchLog");
            obj.set_autoenter("select");
            obj.set_nodatatext("검색 결과가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"250\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"65\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"550\"/><Column size=\"300\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"처리상태\"/><Cell col=\"2\" text=\"처리기준\"/><Cell col=\"3\" text=\"시작일시\"/><Cell col=\"4\" text=\"종료일시\"/><Cell col=\"5\" text=\"처리시간\"/><Cell col=\"6\" text=\"처리유형\"/><Cell col=\"7\" text=\"처리건수\"/><Cell col=\"8\" text=\"성공건수\"/><Cell col=\"9\" text=\"오류건수\"/><Cell col=\"10\" text=\"진행단계\"/><Cell col=\"11\" text=\"에러메시지\"/></Band><Band id=\"body\"><Cell text=\"bind:SEQ_NO\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:STATUS_NAME\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:TABLE_NAME\"/><Cell col=\"3\" displaytype=\"date\" text=\"bind:START_TIME\" mask=\"yyyy/MM/dd HH:mm:ss\" maskchar=\" \" calendardisplaynulltype=\"none\" textAlign=\"center\"/><Cell col=\"4\" displaytype=\"date\" text=\"bind:END_TIME\" mask=\"yyyy/MM/dd HH:mm:ss\" maskchar=\" \" calendardisplaynulltype=\"none\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:TERM_TIME\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:CRUD_TYPE\" textAlign=\"center\"/><Cell col=\"7\" displaytype=\"number\" text=\"bind:PROCESS_CNT\" textAlign=\"right\"/><Cell col=\"8\" displaytype=\"number\" text=\"bind:SUCCESS_CNT\" textAlign=\"right\"/><Cell col=\"9\" displaytype=\"number\" text=\"bind:ERROR_CNT\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:DESCRIPTION\"/><Cell col=\"11\" text=\"bind:ERR_CONTENTS\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totCnt1",null,"586","162","21","10",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("(조회  0 건)");
            obj.set_textAlign("right");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","0","26",null,"70","10",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("div_WF_SearchBg");
            obj.set_background("rgba(247,247,247,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0","0","20",null,null,"0",null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static27","0","0",null,"10","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static17","75","0","10",null,null,"0",null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01","0",null,null,"10","0","-58",null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static16","0",null,null,"10","0","0",null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static05",null,"0","10",null,"0","0",null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static07","12","10","61","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("실행일자");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static20","220","10","20","19",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00","315","0","20",null,null,"0",null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","423","10","57","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_text("업무구분");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static03","386","0","10",null,null,"0",null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06","501","0","20",null,null,"0",null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static08","609","10","45","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_text("배치명");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static09","560","0","10",null,null,"0",null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static11","12","37","61","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("14");
            obj.set_text("배치유형");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static13","0","29",null,"8","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("15");
            obj.set_text("8");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static10","184","37","63","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("16");
            obj.set_text("처리상태");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_jobGubunCd","490","10","105","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("17");
            obj.set_autoselect("true");
            obj.set_codecolumn("C,SystemWorkType,ALL,Y,Y");
            obj.set_font("9pt \"Dotum\"");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_batchType","85","37","89","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("18");
            obj.set_autoselect("true");
            obj.set_codecolumn("C,CMD_BATCH_TYPE,ALL,Y,Y");
            obj.set_font("9pt \"Dotum\"");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_programName","664","10","130","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("19");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static12","700","0","20",null,null,"0",null,null,null,null,this.div_search.form);
            obj.set_taborder("20");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static14","808","10","56","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("21");
            obj.set_text("배치JOB");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static15","772","0","10",null,null,"0",null,null,null,null,this.div_search.form);
            obj.set_taborder("22");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_jobName","876","10","130","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("23");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static19","216","0","10",null,null,"0",null,null,null,null,this.div_search.form);
            obj.set_taborder("24");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_batchStatus","250","37","89","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("25");
            obj.set_autoselect("true");
            obj.set_codecolumn("C,CMD_BATCH_STATUS,ALL,Y,Y");
            obj.set_font("9pt \"Dotum\"");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_batchResultType","490","37","105","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("26");
            obj.set_autoselect("true");
            obj.set_codecolumn("C,CMD_BATCH_RESULT,ALL,Y,Y");
            obj.set_font("9pt \"Dotum\"");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static22","423","37","57","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_text("배치상태");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static25","609","37","45","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("28");
            obj.set_text("생성자");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_userNm","664","37","130","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("29");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_parentJobName","876","37","130","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("30");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static18","808","37","56","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("31");
            obj.set_text("부모JOB");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_count","1072","37","4","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("32");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_visible("false");
            obj.set_font("9pt \"Dotum\"");
            var div_search_form_cbo_count_innerdataset = new nexacro.NormalDataset("div_search_form_cbo_count_innerdataset", obj);
            div_search_form_cbo_count_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">30</Col><Col id=\"datacolumn\">30</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row><Row><Col id=\"codecolumn\">500</Col><Col id=\"datacolumn\">500</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cbo_count_innerdataset);
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_calendar_from","85","10","135","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("33");
            obj.set_url("common::com_calendar.xfdl");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_calendar_to","245","10","135","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("34");
            obj.set_url("common::com_calendar.xfdl");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_page","22.07%","550",null,"20","17.97%",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_url("common::com_paging.xfdl");
            obj.set_border("0px none rgba(128,128,128,1)");
            obj.set_color("rgba(68,68,68,1)");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totCnt2","103","584","555","21",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("(전체: 0건, 성공: 0건, 실패: 0건)");
            obj.set_textAlign("left");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload00","1031","0","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("FileDownload00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","10","6","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WF_searchOpen");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","40","6","145","24",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("업무화면명(자동)");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.name,\"MENU_NM\")");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:2","6","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_favorite");
            this.addChild(obj.name, obj);

            obj = new Button("btn_adjust",null,"0","90","21","10",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("스케쥴 제어");
            obj.set_cssclass("btn_DR_Basic2");
            obj.set_tooltiptype("hover");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,768,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_calendar.xfdl");
            this._addPreloadList("fdl","common::com_paging.xfdl");
        };
        
        // User Script
        this.registerScript("CMBM02100M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	    : IFC MES시스템
         * 업무명 		: 배치실행 및 조회
         * 파일명 		: CMBM02100M.xfdl
         * 작성자 		: built1
         * 작성일 		: 2018.05.01
         *
         * 설  명		: 배치실행 및 조회
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2018.05.01    built1		최초작성
         *---------------------------------------------------------------------------------------
         ***************************************************************************************/

        /**************************************************************************
         * 1. 필수 include(필수)
         *************************************************************************/
        // include "lib::comLib.xjs";
        // include "cuslib::nbdfComLib.xjs";

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.fv_currDate;
        this.pJobName = ""; //메인화면에서 배치Job 값을 넘길 경우 자동 조회를 위한 변수


        /**************************************************************************
         * 3. FORM 정의
         **************************************************************************/
        /**
         * 3.1 (필수) 화면 로딩후에 실행되는 함수
         */
        // onload함수(공통코드관리 화면이 호출될때 바로 실행되는 함수)
        this.fn_init = function (obj, e)
        {
        	// 폼 초기화
        	this.nfn_formInit(obj);

        	var toDate = this.nfn_getCurrentSystemTime(0);
        //	trace("111-->"+toDate.substring(0,8)+"235959");
        //	this.div_search.form.div_calendar_from.form.calStart.set_value(toDate);

        	// 엔터키 설정 함수(조회)
        	this.gfn_setEnterSearch(this.div_search, "nfn_search");

        	// 그리드 소트 제외
        	this.grd_batchRun.removeEventHandler("onheadclick", this.nfn_grd_onheadclick, this);
        	this.grd_batchLog.removeEventHandler("onheadclick", this.nfn_grd_onheadclick, this);

        	// paging
        	// this.LIST_COUNT = 100;
        	this.page = Eco.XComp.getUserProperty(obj, "pageNum"); //페이지 넘버 클릭시 페이지 값 전달위한 프로퍼티 세팅,
        	if (Eco.isEmpty(this.page))
        	{
        		this.page = 1;
        	}
        	// 값이 null 일때 1페이지
        	this.div_page.form.initPaging(this.LIST_COUNT, this.PAGE_COUNT, this.onChangePage, this); //디비전 속 페이지
        	this.div_page.form.setCurrentPage(this.page); //paging end

        	// 초기값 설정
        	this.btn_clear_onclick();

        	// 틀고정
        	this.nfn_cellFix(this.grd_batchRun, 3);
        	this.nfn_cellFix(this.grd_batchLog, 2);

        	// 메인화면에서 값을 넘겨 받을 경우 배치Job 값을 자동으로 실행
        	this.pJobName = this.nfn_getFrameAguments("arg_pJobName");
        	if (!this.gfn_isNull(this.pJobName))
        	{
        		this.div_search.form.edt_jobName.set_value(this.pJobName);
        		this.fn_search();
        	}
        	if (this.nfn_getFrameAguments("arg_searchFlag"))
        	{
        		this.fn_search();
        	}
        	this.div_search.form.div_calendar_from.form.calStart.set_value(toDate.substring(0,8)+"0000");
        	this.div_search.form.div_calendar_to.form.calStart.set_value(toDate.substring(0,8)+"2359");

        };


        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         **************************************************************************/
        /*
         기능 : 조회버튼 처리
         */
        this.fn_search = function (obj, e)
        {
        	// 필수입력 체크
        	var component = this.div_search;
        	var strColIdList = "div_calendar_from.form.calStart,div_calendar_to.form.calStart";
        	var strColNmList = "STARTDATE,ENDDATE";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        	if (rtn == false)
        	{
        		return;
        	}

        	// 실행일자..From, To 체크
        	if (!this.nfn_fromToCheck("Date", this.div_search.form.div_calendar_from.form.calStart, this.div_search.form.div_calendar_to.form.calStart, "Y"))
        	{
        		return;
        	}

        	// paging
        	if (this.isValidObject(obj))
        	{
        		this.page = 1;
        		this.div_page.form.setCurrentPage(this.page);
        	}
        	// paging end

        	// 검색 search DS 초기화
        	this.ds_search.clearData();
        	this.ds_search.addRow();

        	// 검색조건
        	this.ds_search.setColumn(0, "DATE_FROM", this.div_search.form.div_calendar_from.form.calStart.value);
        	this.ds_search.setColumn(0, "DATE_TO", this.div_search.form.div_calendar_to.form.calStart.value);

        	this.ds_search.setColumn(0, "JOB_GUBUN_CD", this.div_search.form.cbo_jobGubunCd.value);
        	this.ds_search.setColumn(0, "PROGRAM_NAME", this.div_search.form.edt_programName.value);
        	this.ds_search.setColumn(0, "JOB_NAME", this.div_search.form.edt_jobName.value);
        	this.ds_search.setColumn(0, "BATCH_TYPE", this.div_search.form.cbo_batchType.value);
        	this.ds_search.setColumn(0, "BATCH_STATUS", this.div_search.form.cbo_batchStatus.value);
        	this.ds_search.setColumn(0, "BATCH_RESULT_TYPE", this.div_search.form.cbo_batchResultType.value);
        	this.ds_search.setColumn(0, "USER_NM", this.div_search.form.edt_userNm.value);
        	this.ds_search.setColumn(0, "PARENT_JOB_NAME", this.div_search.form.edt_parentJobName.value);

        	// paging
        	this.ds_search.setColumn(0, "PAGE_NUMBER", this.page);
        	this.ds_search.setColumn(0, "PAGE_SIZE", this.LIST_COUNT);
        	// paging end

        	// trace(this.ds_search.saveXML());

        	// 대상 초기화
        	this.ds_batchRun.clearData();

        	var sSvcID = "selectBatchProgramRunList";
        	var sController = "/cmbm02100/selectBatchProgramRunList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_batchRun=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", sSvcID);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        // 배치로그내역
        this.fn_search2 = function (nRow)
        {
        	// 검색 search DS 초기화
        	this.ds_search2.clearData();
        	this.ds_search2.addRow();

        	// 검색조건
        	this.ds_search2.setColumn(0, "JOB_NAME", this.ds_batchRun.getColumn(nRow, "JOB_NAME"));
        	// trace(this.ds_search.saveXML());

        	// 대상 초기화
        	this.ds_batchLog.clearData();

        	var sSvcID = "selectCmbmBatchJobLogs";
        	var sController = "/cmbm02100/selectCmbmBatchJobLogs.do";
        	var sInDatasets = "INPUT=ds_search2";
        	var sOutDatasets = "ds_batchLog=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", sSvcID);

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        /*
         기능 : 저장버튼 처리
         */
        this.fn_save = function (obj, e)
        {
        };


        /*
         기능 : 삭제버튼 처리
         */
        this.fn_delete = function (obj, e)
        {
        };


        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         **************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        	}
        	/*
        	if (errCD < 0)
        	{
        		// BizException
        		if (errCD == -200)
        		{
        			this.gfn_alert(errMsg);
        			return;
        		}

        		// strMsgType  (메세지 종류 : error, warning, info)
        		// strMsgButton(버튼        : ok,yesno,yesnocancel)
        		if (trId.substring(0, 7) == "execute")
        		{
        			this.gfn_Message("SMCMM0001", new Array("프로시져 실행", "\n" + trId + "\n" + errMsg), "error", "ok"); //("처리을/를 실패하였습니다."+"\n"+trId+"\n"+errMsg);
        		}
        		else if (trId.substring(0, 6) == "select")
        		{
        			this.gfn_Message("ErrorOnSearch", "\n" + trId + "\n" + errMsg, "error", "ok"); //("조회에 실패하였습니다."+"\n"+trId+"\n"+errMsg);
        		}
        		else if (trId.substring(0, 6) == "delete")
        		{
        			this.gfn_Message("SMCMM0004", "\n" + trId + "\n" + errMsg, "error", "ok"); //("삭제가 실패하였습니다."+"\n"+trId+"\n"+errMsg);
        		}
        		else
        		{
        			this.gfn_Message("SMCMM0001", new Array("처리", "\n" + trId + "\n" + errMsg), "error", "ok"); ///{0}을/를 실패하였습니다.{1}
        		}
        	}
        	*/
        	else
        	{
        		if (trId == "selectBatchProgramRunList")
        		{
        			// 배치실행 리스트
        			if (this.ds_batchRun.rowcount < 1)
        			{
        				this.div_page.set_visible(false);
        				this.grd_batchRun.set_height(430);
        				this.sta_totCnt.set_text("(Search  " + this.nfn_appendComma(this.ds_batchRun.rowcount) + " 건)");

        				this.ds_batchLog.clearData();
        				this.sta_totCnt1.set_text("(Search  " + this.nfn_appendComma(this.ds_batchLog.rowcount) + " 건)");
        				this.sta_totCnt2.set_text("(All: 0건, Success: 0건, Fail: 0건)");

        				//this.gfn_Message("NoSaveData", null, "info", "ok"); //조회된 자료가 없습니다.
        			}
        			else
        			{
        				var totalRows = this.ds_batchRun.getColumn(0, "TOTAL_ROWS");

        				this.sta_totCnt.set_text("(Search  " + this.nfn_appendComma(totalRows) + " 건)");
        				this.div_page.form.setPage(totalRows);

        				// 한 줄로 조회가 되면 페이징을 안 보이게 하는 작업 - 문자 비교가 아닌 숫자 비교로 전환
        				if (nexacro.toNumber(totalRows) > nexacro.toNumber(this.LIST_COUNT))
        				{
        					this.div_page.set_visible(true);
        					this.grd_batchRun.set_height(410);
        				}
        				else
        				{
        					this.div_page.set_visible(false);
        					this.grd_batchRun.set_height(426);
        				}
        			}
        		}
        		else if (trId == "selectCmbmBatchJobLogs")
        		{
        			// 배치로그내역
        			this.sta_totCnt1.set_text("(Search  " + this.nfn_appendComma(this.ds_batchLog.rowcount) + " 건)");

        			// var nopayAmt = this.nfn_FormatNull(this.ds_rcptNopayList.getCaseSum("CHK_EXCEPTION!='1'","NOPAY_AMT"))

        			var TCnt = this.ds_batchLog.getSum("CNT");
        			var SCnt = this.ds_batchLog.getCaseSum("STATUS_CODE == 'S'", "CNT");
        			var ECnt = this.ds_batchLog.getCaseSum("STATUS_CODE == 'E'", "CNT");

        			this.sta_totCnt2.set_text("(All: " + this.nfn_appendComma(TCnt) + "건, " +
        				"Success: " + this.nfn_appendComma(SCnt) + "건, " +
        				"Fail: " + this.nfn_appendComma(ECnt) + "건)");

        			if (this.ds_batchLog.rowcount < 1)
        			{
        				// this.gfn_Message("NoSaveData", null, "info","ok");// 조회된 자료가 없습니다.
        			}
        		}

        	}
        };


        /**************************************************************************
         * 6. 팝업 시작
         **************************************************************************/
        // 실행
        this.btn_exec_onclick = function (obj, e)
        {
        	var jobGubunCd = this.div_search.form.cbo_jobGubunCd.value;

        	var oArg = {
        		arg_jobGubunCd : jobGubunCd
        	};

        	this.gfn_openPopup("CMBM02110P", "cmd::CMBM02110P.xfdl", oArg, "");
        };


        // 팝업 Callback
        this.fn_popupAfter = function (sPopupId, Variant)
        {
        	if (sPopupId == "CMBM02110P")
        	{
        		if (this.fv_rtnValue[0] == "SEARCH")
        		{
        			this.fn_search();
        		}
        	}
        };


        /**************************************************************************
         * 7. 기타 함수 시작
         **************************************************************************/
        // paging
        // ////////페이징관련///////////////////////
        /* 콤보 박스 변경시 */
        this.cbo_count_onitemchanged = function (obj, e)
        {
        	this.ds_batchRun.clearData();
        	this.ds_batchLog.clearData();
        	this.grd_batchRun.set_height(426);

        	this.sta_totCnt.set_text("(조회  0 건)");
        	this.sta_totCnt1.set_text("(조회  0 건)");

        	// 페이지당 조회 건수 변경 발생시 paging 화면 reload 처리
        	this.LIST_COUNT = e.postvalue;
        	this.div_page.form.fn_reload();
        	this.nfn_setPageInit(this.div_page);
        };

        /* 페이지 변경 시 호출됨 */
        this.onChangePage = function (page)
        {
        	Eco.XComp.setUserProperty(this, "pageNum", page);
        	this.page = page;
        	this.div_page.form.setCurrentPage(page);
        	this.fn_search();
        };
        // ////////페이징 관련///////////////////////
        // paging end


        /**************************************************************************
         * 8. 이벤트
         **************************************************************************/
        // 초기화
        this.btn_clear_onclick = function (obj, e)
        {

        	// 전체 초기화
        	var objDiv = this.div_search;
        	this.nfn_clearAllInDiv(objDiv);
        	this.ds_batchRun.clearData();
        	this.ds_batchLog.clearData();
        	this.sta_totCnt.set_text("(조회  0 건)");
        	this.sta_totCnt1.set_text("(조회  0 건)");

        	this.div_search.form.cbo_jobGubunCd.set_index(0);
        	this.div_search.form.cbo_batchType.set_index(0);
        	this.div_search.form.cbo_batchStatus.set_index(0);
        	this.div_search.form.cbo_batchResultType.set_index(0);

        	// 현재일설정
        	this.fv_currDate = this.gfn_todayTime();
        	this.div_search.form.div_calendar_from.form.calStart.set_value(this.fv_currDate.substring(0, 8)); //현재일
        	this.div_search.form.div_calendar_to.form.calStart.set_value(this.fv_currDate.substring(0, 12)); //현재일

        	this.div_search.form.cbo_count.set_value("30");
        	this.LIST_COUNT = 30;
        	this.div_page.set_visible(false);
        	this.grd_batchRun.set_height(426);
        	this.div_page.form.fn_reload();
        	this.nfn_setPageInit(this.div_page);
        };


        // 실행취소
        this.btn_cancel_onclick = function (obj, e)
        {
        	var nRow = this.ds_batchRun.rowposition;
        	if (nRow < 0)
        	{
        		this.gfn_Message("NoSelections", "", "warning", "ok"); //선택된 항목이 없습니다.
        		return;
        	}

        	var batchResultType = this.ds_batchRun.getColumn(nRow, "BATCH_RESULT_TYPE");
        	trace("batchResultType => " + batchResultType);

        	if (batchResultType == "성공" || batchResultType == "취소" || batchResultType == "실패")
        	{
        		this.gfn_Message("CannotCancelBatchStatus", "", "warning", "ok");//배치상태가 성공/취소/실패는 취소할 수 없습니다.
        		return;
        	}

        	var bOK = this.gfn_Message("OspDoProcessWant", "실행취소 ", "conf", "yesno");
        	if (bOK == false)
        	{
        		return;
        	}

        	// DS 초기화
        	this.ds_search.clearData();
        	this.ds_search.addRow();

        	// 조건
        	this.ds_search.setColumn(0, "JOB_NAME", this.ds_batchRun.getColumn(nRow, "JOB_NAME"));
        	// trace(this.ds_search.saveXML());

        	// 대상 초기화
        	this.ds_proc_out.clearData();

        	var sSvcID = "executeBatchRunCancel";
        	var sController = "/cmbm02100/executeBatchRunCancel.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_proc_out=ouput";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", sSvcID);

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        this.grd_batchRun_oncellclick = function (obj, e)
        {
        	// 첨부된 컬럼을 클릭할 경우에만 이벤트 발생
        	if (e.col == 1)
        	{
        		var atchFileYn = this.gfn_blankStr(this.ds_batchRun.getColumn(e.row, "ATCH_FILE_YN"));
        		var atchFilecnt = this.ds_batchRun.getColumn(e.row, "ATCH_FILE_CNT");
        		var jobSysCd = this.ds_batchRun.getColumn(e.row, "BATCH_CD").substring(0, 4);
        		// trace("atchFileYn => " + atchFileYn + ", atchFilecnt => " + atchFilecnt + ", jobSysCd => " + jobSysCd);

        		if (atchFileYn == "" || atchFileYn == "N")
        		{
        			return;
        		}

        		// 첨부파일 없을 경우
        		if (atchFilecnt == 0)
        		{
        			return;
        		}

        		// 첨부파일 한건 일 경우
        		else if (atchFilecnt == 1)
        		{
        			var bOK = this.gfn_Message("IMCMM0046", "파일다운로드", "conf", "yesno");
        			if (bOK == false)
        			{
        				return;
        			}

        			var atchFileGuid = this.ds_batchRun.getColumn(e.row, "ATCH_FILE_GUID");
        			var dnUrl = nexacro.getEnvironment().services["svcurl"].url + "/comm/downFile2/" + atchFileGuid + "/" + jobSysCd + ".do";
        			// trace("dnUrl => " + dnUrl);
        			this.FileDownload00.set_downloadurl(dnUrl);
        			var bSucc = this.FileDownload00.download();
        		}

        		// 첨부파일 다건 일 경우
        		else
        		{
        			var atchSrcKey = this.ds_batchRun.getColumn(e.row, "ATCH_SRC_KEY");
        			var tableName = this.ds_batchRun.getColumn(e.row, "ATCH_TY_CD");
        			var oArg = {
        				arg_jobSysCd : jobSysCd,
        				arg_atchSrcKey : atchSrcKey,
        				arg_tableName : tableName
        			};
        			this.gfn_openPopup("file_download", "cmcm::CMSA01310P.xfdl", oArg, "");
        		}
        	}
        };


        this.grd_batchRun_onselectchanged = function(obj,e)
        {
        	if(e.row < 0) this.ds_batchLog.clearData();
        	// 배치로그내역
        	this.fn_search2(e.row);

        };

        this.btn_adjust_onclick = function(obj,e)
        {
        	var jobGubunCd = this.div_search.form.cbo_jobGubunCd.value;
        	var	jobName = this.ds_batchRun.getColumn(this.ds_batchRun.rowposition,"PARENT_JOB_NAME")
        	if(this.gfn_isNull(jobName))
        		jobName = this.ds_batchRun.getColumn(this.ds_batchRun.rowposition,"JOB_NAME")

        	var oArg = {
        		arg_jobGubunCd : jobGubunCd
        		,arg_programName : this.ds_batchRun.getColumn(this.ds_batchRun.rowposition,"PROGRAM_NAME")
        		,arg_jobName : jobName
        	};

        	this.gfn_openPopup("CMBM02110P", "cmd::CMBM02120P.xfdl", oArg, "");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.grd_batchRun.addEventHandler("oncellclick",this.grd_batchRun_oncellclick,this);
            this.grd_batchRun.addEventHandler("onselectchanged",this.grd_batchRun_onselectchanged,this);
            this.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.btn_clear1.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_exec.addEventHandler("onclick",this.btn_exec_onclick,this);
            this.div_search.form.cbo_count.addEventHandler("onitemchanged",this.cbo_count_onitemchanged,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.btn_adjust.addEventHandler("onclick",this.btn_adjust_onclick,this);
        };
        this.loadIncludeScript("CMBM02100M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
