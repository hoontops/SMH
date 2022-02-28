(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("APR20210M");
            this.set_titletext("업적평가-파트장 평가");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPLOYEE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"HJSPFM_APPRAISAL_MASTER_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"ORGANIZATION_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ASSESSMENT_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"EFFECTIVE_END_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_userInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"PERSONID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEENUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_evaluationHeader", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"HJSPFM_PER_OBJECT_MASTER_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"HJSPFM_APPRAISAL_MASTER_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENT_JOB_DETAILS\" type=\"STRING\" size=\"256\"/><Column id=\"OBJECT_VERSION_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"PARTICIPANT_ACHITED_COMMENT1\" type=\"STRING\" size=\"256\"/><Column id=\"CORRECTION_CHECK\" type=\"STRING\" size=\"256\"/><Column id=\"ASSESSMENT_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"PARTICIPANT_ACHITED_RATING1\" type=\"STRING\" size=\"256\"/><Column id=\"PARTICIPANT_ACHITED_COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"CONV_MGR_NOTICE1\" type=\"STRING\" size=\"256\"/><Column id=\"CONV_MGR_SCORE1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_evaluationDetail", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"EVALUATION_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"HJSPFM_PER_OBJECT_DETAIL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"KPI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OBJECTIVES\" type=\"STRING\" size=\"256\"/><Column id=\"KPI_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OBJECTIVE_DETAILS\" type=\"STRING\" size=\"256\"/><Column id=\"TARGET_STATUS_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"WEIGHT\" type=\"INT\" size=\"256\"/><Column id=\"ASSESSMENT_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"HJSPFM_PER_OBJECT_MASTER_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"OBJECT_VERSION_NUMBER\" type=\"INT\" size=\"256\"/><Column id=\"ACHIEVEMENTS_DETAILS\" type=\"STRING\" size=\"256\"/><Column id=\"ACHIEVEMENT_STATUS_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SELF_APPRAISAL_COMMENTS\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_COMMENTS1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_targetReviewList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"MASTER_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_PERIOD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISEE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISER_1ST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISER_2ND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ASSESSMENT_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"ORGANIZATION_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PARTICIPANT_ID_1\" type=\"STRING\" size=\"256\"/><Column id=\"EFFECTIVE_END_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_performanceRating", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PERFORMANCE_RATING\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_SCORE\" type=\"STRING\" size=\"256\"/><Column id=\"TEAM_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"TEAM_REMAIN_SCORE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0.00%","36",null,"67","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_search");
            obj.set_background("rgba(247,247,247,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","21","10","100","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("Name");
            obj.set_tooltiptext("Name");
            obj.set_usedecorate("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_name","131","10","124","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_codecolumn("EMPLOYEE_NUMBER");
            obj.set_font("9pt \"Dotum\"");
            obj.set_innerdataset("ds_targetReviewList");
            obj.set_datacolumn("APPRAISEE_NAME");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00","275","10","100","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("Department");
            obj.set_tooltiptext("Department");
            obj.set_usedecorate("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_01","21","35","100","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("Employee Number");
            obj.set_tooltiptext("Employee Number");
            obj.set_usedecorate("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","275","35","100","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("Job");
            obj.set_tooltiptext("Job");
            obj.set_usedecorate("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","529","10","100","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("Grade");
            obj.set_tooltiptext("Grade");
            obj.set_usedecorate("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","529","35","100","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("Position");
            obj.set_tooltiptext("Position");
            obj.set_usedecorate("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_employeeNumber","131","35","124","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_cssclass("display");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_department","385","10","124","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_cssclass("display");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_job","385","35","124","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_cssclass("display");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_grade","639","10","124","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_cssclass("display");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_position","639","35","124","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_cssclass("display");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","10","6","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_searchOpen");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","40","6","145","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("업무화면명(자동)");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.name,\"MENU_NM\")");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:2","6","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_favorite");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search00",null,"8","60","20","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("조회");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","0","104",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Div("div_subTitle01","0",null,null,"32","0","78",null,null,null,null,this.div_work.form);
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
            obj.set_background("#f7f7f7");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","125","30",null,null,null,null,null,null,this.div_work.form.div_subTitle01.form);
            obj.set_taborder("0");
            obj.set_text("Overall Rating");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("Overall Rating");
            obj.set_border("0px none");
            this.div_work.form.div_subTitle01.addChild(obj.name, obj);

            obj = new Div("div_subTitle00","0",null,null,"63","0","10",null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_detail_nobg");
            obj.set_text("");
            obj.set_async("true");
            obj.set_formscrollbarbarminsize("0");
            obj.set_formscrollbarbaroutsize("0");
            obj.set_formscrollbardecbuttonsize("0");
            obj.set_formscrollbarincbuttonsize("0");
            obj.set_formscrollbarsize("0");
            obj.set_formscrollbartrackbarsize("0");
            obj.set_formscrollindicatorsize("0");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","125","61",null,null,null,null,null,null,this.div_work.form.div_subTitle00.form);
            obj.set_taborder("0");
            obj.set_text("Part Appraiser\r\nOverall Rating");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("Part Appraiser Opinion");
            obj.set_usedecorate("true");
            obj.set_border("0px none");
            this.div_work.form.div_subTitle00.addChild(obj.name, obj);

            obj = new Static("Static30_00","258","0","125","61",null,null,null,null,null,null,this.div_work.form.div_subTitle00.form);
            obj.set_taborder("1");
            obj.set_text("Part Appraiser\r\nOpinion");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("Part Appraiser Opinion");
            obj.set_usedecorate("true");
            obj.set_border("0px none");
            this.div_work.form.div_subTitle00.addChild(obj.name, obj);

            obj = new TextArea("txa_partAppraiserOpinion","387","5","515","51",null,null,null,null,null,null,this.div_work.form.div_subTitle00.form);
            obj.set_taborder("2");
            this.div_work.form.div_subTitle00.addChild(obj.name, obj);

            obj = new Combo("cbo_overallRating","129","21","124","20",null,null,null,null,null,null,this.div_work.form.div_subTitle00.form);
            obj.set_taborder("3");
            obj.set_font("9pt \"Dotum\"");
            obj.set_codecolumn("C,APPRAISAL_PER_RATING_SCALE_LEVEL,SEL,Y,Y");
            obj.set_index("-1");
            this.div_work.form.div_subTitle00.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"109","60","20","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("저장");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_list",null,"109","60","20","66",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("목록");
            obj.set_tooltiptext("목록");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_organizationPerformance",null,"109","170","20","132",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_text("Organization Performance");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("Organization Performance");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory","0","132",null,null,"0","115",null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_evaluationDetail");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"50\"/><Column size=\"160\"/><Column size=\"160\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"55\"/><Row size=\"55\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"Type\" tooltiptext=\"Type\" displaytype=\"normal\"/><Cell col=\"1\" text=\"Objectives\" tooltiptext=\"Objectives\" displaytype=\"normal\"/><Cell col=\"2\" text=\"Detail Responsibilities\" tooltiptext=\"Detail Responsibilities\" displaytype=\"normal\"/><Cell col=\"3\" text=\"Target/Planned Completion (Date)\" tooltiptext=\"Target/Planned Completion (Date)\" displaytype=\"normal\"/><Cell col=\"4\" rowspan=\"2\" text=\"Weight&#13;&#10;(%)\" tooltiptext=\"Weight (%)\" displaytype=\"normal\"/><Cell col=\"5\" rowspan=\"2\" text=\"Self-Comments\" tooltiptext=\"Self-Comments\" displaytype=\"normal\"/><Cell col=\"6\" rowspan=\"2\" text=\"Part-Comments\" tooltiptext=\"Part-Comments\"/><Cell row=\"1\" col=\"1\" text=\"KPIs\" tooltiptext=\"KPIs\" displaytype=\"normal\"/><Cell row=\"1\" col=\"2\" text=\"Detail Accomplishments\" tooltiptext=\"Detail Accomplishments\" displaytype=\"normal\"/><Cell row=\"1\" col=\"3\" displaytype=\"normal\" text=\"Achieved/Actual Completion (Date)\" tooltiptext=\"Achieved/Actual Completion (Date)\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" displaytype=\"combotext\" text=\"bind:EVALUATION_TYPE\" combocodecol=\"C,EvaluationType,,Y,N\"/><Cell col=\"1\" text=\"bind:OBJECTIVES\"/><Cell col=\"2\" text=\"bind:OBJECTIVE_DETAILS\" textAlign=\"left\" displaytype=\"text\" autosizecol=\"default\" edittype=\"readonly\"/><Cell col=\"3\" text=\"bind:TARGET_STATUS_DATE\" textAlign=\"left\" displaytype=\"text\" edittype=\"readonly\"/><Cell col=\"4\" rowspan=\"2\" text=\"bind:WEIGHT\"/><Cell col=\"5\" rowspan=\"2\" text=\"bind:SELF_APPRAISAL_COMMENTS\" textAlign=\"left\" displaytype=\"text\" edittype=\"readonly\"/><Cell col=\"6\" rowspan=\"2\" textAlign=\"left\" text=\"bind:APPRAISAL_COMMENTS1\" edittype=\"expr:ASSESSMENT_STATUS != &apos;090&apos; ? &apos;readonly&apos; : &apos;textarea&apos;\" displaytype=\"textareacontrol\" textareaacceptsenter=\"true\"/><Cell row=\"1\" col=\"1\" text=\"bind:KPI_NAME\"/><Cell row=\"1\" col=\"2\" text=\"bind:ACHIEVEMENTS_DETAILS\" textAlign=\"left\" displaytype=\"text\" edittype=\"readonly\"/><Cell row=\"1\" col=\"3\" text=\"bind:ACHIEVEMENT_STATUS_DATE\" textAlign=\"left\" displaytype=\"text\" edittype=\"readonly\"/></Band><Band id=\"summary\"><Cell colspan=\"4\" text=\"Sums\" tooltiptext=\"Sums\" textAlign=\"center\"/><Cell col=\"4\" expr=\"dataset.getSum(&quot;WEIGHT&quot;) \" displaytype=\"number\"/><Cell col=\"5\"/><Cell col=\"6\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_subTitle00_00","0","4",null,"63","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_cssclass("div_WF_detail_nobg");
            obj.set_text("");
            obj.set_async("true");
            obj.set_formscrollbarbarminsize("0");
            obj.set_formscrollbarbaroutsize("0");
            obj.set_formscrollbardecbuttonsize("0");
            obj.set_formscrollbarincbuttonsize("0");
            obj.set_formscrollbarsize("0");
            obj.set_formscrollbartrackbarsize("0");
            obj.set_formscrollindicatorsize("0");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","125","61",null,null,null,null,null,null,this.div_work.form.div_subTitle00_00.form);
            obj.set_taborder("0");
            obj.set_text("Current Job\r\nDetails");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("Current Job Details");
            obj.set_usedecorate("true");
            obj.set_border("0px none");
            this.div_work.form.div_subTitle00_00.addChild(obj.name, obj);

            obj = new TextArea("txa_currentJobDetails","129","5","560","51",null,null,null,null,null,null,this.div_work.form.div_subTitle00_00.form);
            obj.set_taborder("1");
            obj.set_enable("false");
            this.div_work.form.div_subTitle00_00.addChild(obj.name, obj);

            obj = new Static("Static17","692","7","134","24",null,null,null,null,null,null,this.div_work.form.div_subTitle00_00.form);
            obj.set_taborder("2");
            obj.set_text("조직등급/점수");
            obj.set_cssclass("sta_font_gray");
            obj.set_textAlign("right");
            obj.set_tooltiptext("조직등급/점수");
            this.div_work.form.div_subTitle00_00.addChild(obj.name, obj);

            obj = new Static("Static17_00","692","30","134","24",null,null,null,null,null,null,this.div_work.form.div_subTitle00_00.form);
            obj.set_taborder("3");
            obj.set_text("피평가자/잔여점수");
            obj.set_cssclass("sta_font_gray");
            obj.set_textAlign("right");
            obj.set_tooltiptext("피평가자/잔여점수");
            this.div_work.form.div_subTitle00_00.addChild(obj.name, obj);

            obj = new Static("sta_degree","832","7","70","24",null,null,null,null,null,null,this.div_work.form.div_subTitle00_00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.form.div_subTitle00_00.addChild(obj.name, obj);

            obj = new Static("sta_rating","832","30","70","24",null,null,null,null,null,null,this.div_work.form.div_subTitle00_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.form.div_subTitle00_00.addChild(obj.name, obj);

            obj = new Div("div_subTitle01_00","0","72",null,"32","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("7");
            obj.set_cssclass("div_WF_detail_nobg");
            obj.set_text("");
            obj.set_formscrollbarbarminsize("0");
            obj.set_formscrollbarbaroutsize("0");
            obj.set_formscrollbardecbuttonsize("0");
            obj.set_formscrollbarincbuttonsize("0");
            obj.set_formscrollbarsize("0");
            obj.set_formscrollbartrackbarsize("0");
            obj.set_formscrollindicatorsize("0");
            obj.set_background("#f7f7f7");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","125","30",null,null,null,null,null,null,this.div_work.form.div_subTitle01_00.form);
            obj.set_taborder("0");
            obj.set_text("Objectives");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("Objectives");
            obj.set_border("0px none");
            this.div_work.form.div_subTitle01_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.cbo_name","value","ds_userInfo","EMPLOYEENUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.edt_department","value","ds_userInfo","DEPARTMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.edt_grade","value","ds_userInfo","GRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.edt_employeeNumber","value","ds_userInfo","EMPLOYEENUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search.form.edt_job","value","ds_userInfo","JOB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.edt_position","value","ds_userInfo","POSITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_work.form.div_subTitle00_00.form.txa_currentJobDetails","value","ds_evaluationHeader","CURRENT_JOB_DETAILS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_work.form.div_subTitle00.form.cbo_overallRating","value","ds_evaluationHeader","CONV_MGR_SCORE1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_work.form.div_subTitle00.form.txa_partAppraiserOpinion","value","ds_evaluationHeader","PARTICIPANT_ACHITED_COMMENT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("APR20220M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	:
         * 업무명 		: 업적평가-파트장 평가
         * 파일명 		: APR20220M.xfdl
         * 작성자 		: 박대호
         * 작성일 		: 2022.1.27
         * 설  명		: 업적평가-파트장 평가
         *---------------------------------------------------------------------------------------
         * 변경일		변경자			변경내역
         *---------------------------------------------------------------------------------------
         * 2022.01.27	박대호			최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /*===============================================================================
        == apr설명. (apr) 공통함수 목록
        ===============================================================================
        ● fn_initInfo                              : 초기값 세팅
        ● fn_initParam                             : 받아온정보 입력
        ● fn_userInfo                              : 피평가자 개인정보 조회
        ● fn_evaluationListDetail                  : 업적평가 피평가자 상세 조회
        ● fn_save                  				: 저장
        ● fn_list                  				: 목록으로 이동
        ● fn_performanceRating                  	: 피평가자 등급 조회

        */

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
        };
        /*******************************************************************************
         * fn_initInfo
         * 기능 : 초기값 세팅
         * 박대호
         * Parameter  :
        *******************************************************************************/
        this.fn_initInfo = function ()
        {

        }
        /*******************************************************************************
         * fn_initParam
         * 기능 : 받아온정보 입력
         * 박대호
         * Parameter  : oArgs(부모에게 받은값)
        *******************************************************************************/
        this.fn_initParam = function(oArgs)
        {
        	this.ds_targetReviewList.copyData(oArgs.targetReviewList);
        	var mRow = oArgs.row;

         	this.ds_search.setColumn(0, "HJSPFM_APPRAISAL_MASTER_SEQ", this.ds_targetReviewList.getColumn(mRow, "MASTER_SEQ"));//SEQ
         	this.ds_search.setColumn(0, "APPRAISAL_YEAR", this.ds_targetReviewList.getColumn(mRow, "APPRAISAL_YEAR"));//평가년도
         	this.ds_search.setColumn(0, "APPRAISAL_SEQUENCE", this.ds_targetReviewList.getColumn(mRow, "APPRAISAL_SEQUENCE"));//평가차수
         	this.ds_search.setColumn(0, "ORGANIZATION_ID", this.ds_targetReviewList.getColumn(mRow, "ORGANIZATION_ID"));//부서ID
         	this.ds_search.setColumn(0, "ASSESSMENT_STATUS", this.ds_targetReviewList.getColumn(mRow, "ASSESSMENT_STATUS"));//상태
         	this.ds_search.setColumn(0, "EMPLOYEE_NUMBER", this.ds_targetReviewList.getColumn(mRow, "EMPLOYEE_NUMBER"));//사원번호
        	this.ds_search.setColumn(0, "EFFECTIVE_END_DATE", this.ds_targetReviewList.getColumn(mRow, "EFFECTIVE_END_DATE"));//평가기간종료일

        	this.fn_initInfo();
         	this.fn_userInfo();
        	this.fn_performanceRating();
        	this.fn_evaluationListDetail();
        }
        /*******************************************************************************
         * fn_userInfo
         * 기능 : 로그인 피평가자 개인정보 조회
         * 박대호
         * Parameter  :
        *******************************************************************************/
        this.fn_userInfo = function ()
        {
        	var sSvcID = "selectAppraisalUserInfo";
        	var sController = "/apr10110/selectAppraisalUserInfo.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_userInfo=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }
        /*******************************************************************************
         * fn_userInfo
         * 기능 : 피평가자 등급 조회
         * 박대호
         * Parameter  :
        *******************************************************************************/
        this.fn_performanceRating = function ()
        {
        	var sSvcID = "selectPerformanceRating";
        	var sController = "/apr20210/selectPerformanceRating.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_performanceRating=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }
        /*******************************************************************************
         * fn_evaluationListDetail
         * 기능 : 업적평가 피평가자 상세 조회
         * 박대호
         * Parameter  :
        *******************************************************************************/
        this.fn_evaluationListDetail = function ()
        {
        	var sSvcID = "selectSelfEvaluationListDetail";
        	var sController = "/apr10210/selectSelfEvaluationListDetail.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_evaluationHeader=output1 ds_evaluationDetail=output2";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }
        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
         /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.fn_userInfo();
        	this.fn_evaluationListDetail();
        };


        /*
        * 기능 : 검색 초기화
        */
        this.fn_searchClear = function(obj,e)
        {

        };

        /*
        * 기능 : 저장
        */
        this.fn_save = function(SvcID)
        {
        	if(this.ds_search.getColumn(0, "ASSESSMENT_STATUS") != "090") return;


        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID = SvcID;
        	var sController = "/apr20210/updatePartEvaluation.do";
        	var sInDatasets = "ds_evaluationHeader=ds_evaluationHeader:U ds_evaluationDetail=ds_evaluationDetail:U";
        	var sOutDatasets = "";

        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
         trace('fn_callBack trId ?' + trId);
         	if (errCD < 0)
         	{
         		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
         	}
        	else
        	{
        		switch(trId)
        		{
        			case "updatePartEvaluation" :
        			{
        				this.gfn_Message("SuccessSave", null, "info","ok");
        				break;
        			}
        			case "saveList" :
        			{
        				this.gfn_getMaster(this).fn_returnDetail();
        				this.gfn_detail_close(this);
        				break;
        			}
        			case "selectPerformanceRating" :
        			{
        				if(this.ds_performanceRating.rowcount > 0)
        				{
        					this.div_work.form.div_subTitle00_00.form.sta_degree.set_text(
        					this.ds_performanceRating.getColumn(0, "PERFORMANCE_RATING") + " / "
        					+ this.ds_performanceRating.getColumn(0, "ORG_SCORE"));
        					this.div_work.form.div_subTitle00_00.form.sta_rating.set_text(
        					this.ds_performanceRating.getColumn(0, "TEAM_CNT") + " / "
        					+ this.ds_performanceRating.getColumn(0, "TEAM_REMAIN_SCORE"));
        				}
        				else
        				{
        					this.div_work.form.div_subTitle00_00.form.sta_degree.set_text("");
        					this.div_work.form.div_subTitle00_00.form.sta_rating.set_text("");
        				}
        				break;
        			}

        			default:
        		}
        	}
        };
        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*******************************************************************************
         * fn_list
         * 기능 : 목록으로 이동
         * 박대호
         * Parameter  :
        *******************************************************************************/
        this.fn_list = function ()
        {
        	if(this.gfn_dsIsUpdated(this.ds_evaluationDetail) || this.gfn_dsIsUpdated(this.ds_evaluationHeader))
        	{
        		//변경된 데이터가 있습니다. 계속하시겠습니까?
         		if (this.gfn_Message("IsChangedButContinue", null, "conf", "yesno"))
        		{
        			this.fn_save("saveList");
        			return;
        		}
        	}
        	this.gfn_getMaster(this).fn_returnDetail();
        	this.gfn_detail_close(this);
        };


        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         *	기능 : 콤보 변경 이벤트
         */
        this.div_search_cbo_name_onitemchanged = function(obj,e)
        {
        	var row = this.ds_targetReviewList.findRow("EMPLOYEE_NUMBER", e.postvalue);
        	this.ds_search.setColumn(0, "HJSPFM_APPRAISAL_MASTER_SEQ", this.ds_targetReviewList.getColumn(row, "MASTER_SEQ"));//SEQ
         	this.ds_search.setColumn(0, "APPRAISAL_YEAR", this.ds_targetReviewList.getColumn(row, "APPRAISAL_YEAR"));//평가년도
         	this.ds_search.setColumn(0, "APPRAISAL_SEQUENCE", this.ds_targetReviewList.getColumn(row, "APPRAISAL_SEQUENCE"));//평가차수
         	this.ds_search.setColumn(0, "ORGANIZATION_ID", this.ds_targetReviewList.getColumn(row, "ORGANIZATION_ID"));//부서ID
         	this.ds_search.setColumn(0, "ASSESSMENT_STATUS", this.ds_targetReviewList.getColumn(row, "ASSESSMENT_STATUS"));//상태
         	this.ds_search.setColumn(0, "EMPLOYEE_NUMBER", this.ds_targetReviewList.getColumn(row, "EMPLOYEE_NUMBER"));//사원번호
        	this.ds_search.setColumn(0, "EFFECTIVE_END_DATE", this.ds_targetReviewList.getColumn(row, "EFFECTIVE_END_DATE"));//평가기간종료일

         	this.fn_userInfo();
        	this.fn_performanceRating();
        	this.fn_evaluationListDetail();
        };

        /*
         *	기능 : Organization Performance 버튼 이벤트
         */
        this.fn_popupSearch = function(obj,e)
        {
        	var oArg = {};

        	var appraisalYear = this.ds_search.getColumn(0, "APPRAISAL_YEAR");//평가년도
        	var appraisalSequence = this.ds_search.getColumn(0, "APPRAISAL_SEQUENCE");//평가차수
        	var organizationId = this.ds_search.getColumn(0, "ORGANIZATION_ID");//부서ID

        	oArg.arg_type        = "AA";
        	oArg.arg_popupCd     = "P00321";
        	oArg.arg_popupNm     = "Organization Performance Indicator List";
        	oArg.arg_rtnCols     = "MEANING";
        	oArg.arg_paramCols   = "APPRAISAL_YEAR|APPRAISAL_SEQUENCE|ORGANIZATION_ID";
        	oArg.arg_paramValues = appraisalYear + "|" + appraisalSequence + "|" + organizationId;
        	oArg.arg_searchStr   = "1=1";
        	this.gfn_openPopup( "POPUP_KPI", "cmd::CMSA00130P.xfdl", oArg, "width=970,height=800");
        };


        /*
         *	기능 : 저장 버튼 이벤트
         */
        this.div_work_btn_save_onclick = function(obj,e)
        {
        	this.fn_save("updatePartEvaluation");
        };
        /*
         *	기능 : 점수변경 이벤트
         */
        this.div_work_div_subTitle00_cbo_overallRating_onitemchanged = function(obj,e)
        {
        	if(this.nfn_isNull(this.div_work.form.div_subTitle00.form.cbo_overallRating.value))
        	{
        		this.ds_evaluationHeader.setColumn(0, "CONV_MGR_NOTICE1", "");
        	}
        	else
        	{
        		this.ds_evaluationHeader.setColumn(0, "CONV_MGR_NOTICE1", this.div_work.form.div_subTitle00.form.cbo_overallRating.text);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_search.form.Static00.addEventHandler("onclick",this.div_search_Static00_onclick,this);
            this.div_search.form.cbo_name.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.div_search.form.cbo_name.addEventHandler("onitemchanged",this.div_search_cbo_name_onitemchanged,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.btn_search00.addEventHandler("onclick",this.fn_search,this);
            this.div_work.form.div_subTitle01.form.Static30.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_work.form.div_subTitle00.form.Static30.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_work.form.div_subTitle00.form.Static30_00.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_work.form.div_subTitle00.form.cbo_overallRating.addEventHandler("onitemchanged",this.div_work_div_subTitle00_cbo_overallRating_onitemchanged,this);
            this.div_work.form.btn_save.addEventHandler("onclick",this.div_work_btn_save_onclick,this);
            this.div_work.form.btn_list.addEventHandler("onclick",this.fn_list,this);
            this.div_work.form.btn_organizationPerformance.addEventHandler("onclick",this.fn_popupSearch,this);
            this.div_work.form.div_subTitle00_00.form.Static30.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_work.form.div_subTitle01_00.form.Static30.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.ds_evaluationDetail.addEventHandler("oncolumnchanged",this.ds_evaluationDetail_oncolumnchanged,this);
        };
        this.loadIncludeScript("APR20220M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
