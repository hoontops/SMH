(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HRA10110M");
            this.set_titletext("My Profile");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_baseInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPLOYEE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"KOR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ENG_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"HIRE_PERIOD\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_PROMOTION_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"GRADE_PROMOTION_PERIOD\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_TITLE_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"GRADE_TITLE_PERIOD\" type=\"STRING\" size=\"256\"/><Column id=\"EFFECTIVE_START_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"EFFECTIVE_START_PERIOD\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"JOB_PERIOD\" type=\"STRING\" size=\"256\"/><Column id=\"MAJOR\" type=\"STRING\" size=\"256\"/><Column id=\"NATIONAL_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PERSON_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_humanInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"DATE_OF_BIRTH\" type=\"DATE\" size=\"256\"/><Column id=\"LUNAR_SOLAR\" type=\"STRING\" size=\"256\"/><Column id=\"LUNAR_SOLAR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MARITAL_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"MARITAL_MEANING\" type=\"STRING\" size=\"256\"/><Column id=\"MARITAL_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PAR_ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"PAC_ADDRESS1\" type=\"STRING\" size=\"256\"/><Column id=\"PAC_ADDRESS2\" type=\"STRING\" size=\"256\"/><Column id=\"PAC_HOME_TELEPHONE\" type=\"STRING\" size=\"256\"/><Column id=\"PAC_MOBILE_TELEPHONE\" type=\"STRING\" size=\"256\"/><Column id=\"PAC_EMERGENCY_TELEPHONE\" type=\"STRING\" size=\"256\"/><Column id=\"PATRIOT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PATRIOT_RELATION_SHIP\" type=\"STRING\" size=\"256\"/><Column id=\"PATRIOT_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"DISABILITY_MEANING\" type=\"STRING\" size=\"256\"/><Column id=\"DISABILITY_GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"DISABILITY_GRADE_MEANING\" type=\"STRING\" size=\"256\"/><Column id=\"DISABILITY_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"MILITARY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"MILITARY_REASON\" type=\"STRING\" size=\"256\"/><Column id=\"MILITARY_PART\" type=\"STRING\" size=\"256\"/><Column id=\"MILITARY_RANK\" type=\"STRING\" size=\"256\"/><Column id=\"MILITARY_FROM_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"MILITARY_TO_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"PERSON_ID\" type=\"INT\" size=\"256\"/><Column id=\"EMPLOYEE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"PAR_ADDRESS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PAR_POSTAL_CODE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PAC_ADDRESS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PAC_POSTAL_CODE_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_educationInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"ATTENDED_START_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"ATTENDED_END_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"ESTABLISHMENT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SCHOOL_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"MAJOR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MAJOR\" type=\"STRING\" size=\"256\"/><Column id=\"ESTABLISHMENT_DEGREE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_familyInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CONTACT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTACT_TYPE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FIRST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SEX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SEX_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NATIONAL_IDENTIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_OF_BIRTH\" type=\"DATE\" size=\"256\"/><Column id=\"COHABITATION_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"CONTACT_RELATIONSHIP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PERSON_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CONTRACT_EMPLOYEE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"CONTACT_PERSON_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PCR_OBJECT_VERSION_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"PAPF_OBJECT_VERSION_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_forLanguage", this);
            obj._setContents("<ColumnInfo><Column id=\"LANGUAGE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"QUALFICATION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SCORE\" type=\"STRING\" size=\"256\"/><Column id=\"PERFACT_SCORE\" type=\"STRING\" size=\"256\"/><Column id=\"AUTHORIZED_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"FINALS\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_ORG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_certificate", this);
            obj._setContents("<ColumnInfo><Column id=\"QUALIFICATION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"QUALIFICATION_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"AUTHORIZED_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"EXPIRE_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"ISSUE_ORGANIZATION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_passport", this);
            obj._setContents("<ColumnInfo><Column id=\"VISA_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"VISA_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"ISSUE_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"EXPIRY_EATE\" type=\"DATE\" size=\"256\"/><Column id=\"NATIONALITY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NATIONALITY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PERSON_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PEA_OBJECT_VERSION_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"PERSON_ANALYSIS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ANALYSIS_CRITERIA_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_orderRecord", this);
            obj._setContents("<ColumnInfo><Column id=\"START_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"REASON_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"REASON\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION_NAME_KR\" type=\"STRING\" size=\"256\"/><Column id=\"END_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"SUB_START_DATE\" type=\"DATE\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_workExperience", this);
            obj._setContents("<ColumnInfo><Column id=\"EFFECTIVE_START_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"EFFECTIVE_END_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"ORG_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_PERIOD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_jobExperience", this);
            obj._setContents("<ColumnInfo><Column id=\"EFFECTIVE_START_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"EFFECTIVE_END_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"REASON\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION_NAME_KR\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION_PERIOD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_workRating", this);
            obj._setContents("<ColumnInfo><Column id=\"APPRAISAL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISEE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"KOR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_FINAL_RATING\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_educationCarrerInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"SEGMENT4\" type=\"STRING\" size=\"256\"/><Column id=\"SEGMENT3\" type=\"STRING\" size=\"256\"/><Column id=\"SEGMENT9\" type=\"STRING\" size=\"256\"/><Column id=\"SEGMENT10\" type=\"STRING\" size=\"256\"/><Column id=\"SEGMENT5\" type=\"STRING\" size=\"256\"/><Column id=\"SEGMENT6\" type=\"STRING\" size=\"256\"/><Column id=\"SEGMENT8\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_otherCompany", this);
            obj._setContents("<ColumnInfo><Column id=\"WORK_FROM\" type=\"DATE\" size=\"256\"/><Column id=\"WORK_TO\" type=\"DATE\" size=\"256\"/><Column id=\"COMPANY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DUTY_PLACE\" type=\"STRING\" size=\"256\"/><Column id=\"FINAL_GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"FINAL_JOB\" type=\"STRING\" size=\"256\"/><Column id=\"TERM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("div_work_01","0","288",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work_01);
            obj.set_text("????????????");
            obj.set_tooltiptext("????????????");
            this.div_work_01.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","241","34",null,null,null,null,null,null,this.div_work_01.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("????????????");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("????????????");
            this.div_work_01.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory","0","34",null,null,"0","10",null,null,null,null,this.div_work_01.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_orderRecord");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"????????????\"/><Cell col=\"1\" text=\"??????\"/><Cell col=\"2\" text=\"??????\"/><Cell col=\"3\" text=\"??????\"/><Cell col=\"4\" text=\"??????\"/><Cell col=\"5\" text=\"??????\"/><Cell col=\"6\" text=\"????????????\"/><Cell col=\"7\" text=\"???????????????\" suppressalign=\"first\"/></Band><Band id=\"body\"><Cell text=\"bind:START_DATE\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\"/><Cell col=\"1\" text=\"bind:REASON\"/><Cell col=\"2\" text=\"bind:ORG_NAME\"/><Cell col=\"3\" text=\"bind:GRADE_NAME\"/><Cell col=\"4\" text=\"bind:JOB_NAME\"/><Cell col=\"5\" text=\"bind:POSITION_NAME_KR\"/><Cell col=\"6\" text=\"bind:END_DATE\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\"/><Cell col=\"7\" text=\"bind:SUB_START_DATE\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\"/></Band></Format></Formats>");
            this.div_work_01.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work_01);
            obj.set_text("????????????");
            obj.set_tooltiptext("????????????");
            this.div_work_01.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory","0","34",null,null,"0","10",null,null,null,null,this.div_work_01.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_workExperience");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"????????????\"/><Cell col=\"1\" text=\"????????????\"/><Cell col=\"2\" text=\"????????????\"/><Cell col=\"3\" text=\"????????????\"/><Cell col=\"4\" text=\"??????\"/><Cell col=\"5\" text=\"????????????\"/></Band><Band id=\"body\"><Cell text=\"bind:EFFECTIVE_START_DATE\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\"/><Cell col=\"1\" text=\"bind:EFFECTIVE_END_DATE\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\"/><Cell col=\"2\" text=\"bind:ORG_NAME\"/><Cell col=\"3\" text=\"bind:GRADE_NAME\"/><Cell col=\"4\" text=\"bind:JOB_NAME\"/><Cell col=\"5\" text=\"bind:JOB_PERIOD\"/></Band></Format></Formats>");
            this.div_work_01.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","141","34",null,null,null,null,null,null,this.div_work_01.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("????????????");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("????????????");
            this.div_work_01.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.div_work_01);
            obj.set_text("????????????");
            obj.set_tooltiptext("????????????");
            this.div_work_01.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","211","34",null,null,null,null,null,null,this.div_work_01.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_text("????????????");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("????????????");
            this.div_work_01.Tabpage3.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory","0","34",null,null,"0","10",null,null,null,null,this.div_work_01.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_jobExperience");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"????????????\"/><Cell col=\"1\" text=\"????????????\"/><Cell col=\"2\" text=\"??????\"/><Cell col=\"3\" text=\"??????\"/><Cell col=\"4\" text=\"??????\"/><Cell col=\"5\" text=\"??????\"/><Cell col=\"6\" text=\"????????????\"/></Band><Band id=\"body\"><Cell text=\"bind:EFFECTIVE_START_DATE\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\"/><Cell col=\"1\" text=\"bind:EFFECTIVE_END_DATE\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\"/><Cell col=\"2\" text=\"bind:REASON\"/><Cell col=\"3\" text=\"bind:ORG_NAME\"/><Cell col=\"4\" text=\"bind:GRADE_NAME\"/><Cell col=\"5\" text=\"bind:POSITION_NAME_KR\"/><Cell col=\"6\" text=\"bind:POSITION_PERIOD\"/></Band></Format></Formats>");
            this.div_work_01.Tabpage3.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.div_work_01);
            obj.set_text("????????????");
            obj.set_tooltiptext("????????????");
            this.div_work_01.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","211","34",null,null,null,null,null,null,this.div_work_01.Tabpage4.form);
            obj.set_taborder("0");
            obj.set_text("????????????");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("????????????");
            this.div_work_01.Tabpage4.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory","0","34",null,null,"0","10",null,null,null,null,this.div_work_01.Tabpage4.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_workRating");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"??????\"/><Cell col=\"1\" text=\"??????\"/><Cell col=\"2\" text=\"??????\"/><Cell col=\"3\" text=\"??????\"/><Cell col=\"4\" text=\"????????????\"/></Band><Band id=\"body\"><Cell text=\"bind:APPRAISAL_YEAR\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"1\" text=\"bind:APPRAISAL_SEQUENCE\"/><Cell col=\"2\" text=\"bind:ORG_NAME\"/><Cell col=\"3\" text=\"bind:GRADE_NAME\"/><Cell col=\"4\" text=\"bind:APPRAISAL_FINAL_RATING\"/></Band></Format></Formats>");
            this.div_work_01.Tabpage4.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.div_work_01);
            obj.set_text("????????????");
            obj.set_tooltiptext("????????????");
            this.div_work_01.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","211","34",null,null,null,null,null,null,this.div_work_01.Tabpage5.form);
            obj.set_taborder("0");
            obj.set_text("????????????");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("????????????");
            this.div_work_01.Tabpage5.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory","0","34",null,null,"0","10",null,null,null,null,this.div_work_01.Tabpage5.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_educationCarrerInfo");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"??????\"/><Cell col=\"1\" text=\"??????\"/><Cell col=\"2\" text=\"????????????\"/><Cell col=\"3\" text=\"??????\"/><Cell col=\"4\" text=\"??????\"/><Cell col=\"5\" text=\"????????????\"/><Cell col=\"6\" text=\"??????\"/><Cell col=\"7\" text=\"??????\"/></Band><Band id=\"body\"><Cell text=\"bind:SEGMENT4\"/><Cell col=\"1\" text=\"bind:SEGMENT3\"/><Cell col=\"2\" text=\"bind:SEGMENT9\"/><Cell col=\"3\" text=\"bind:SEGMENT10\"/><Cell col=\"4\" text=\"bind:SEGMENT5\"/><Cell col=\"5\" text=\"bind:SEGMENT6\"/><Cell col=\"6\" text=\"bind:SEGMENT8\"/><Cell col=\"7\" text=\"bind:REMARK\"/></Band></Format></Formats>");
            this.div_work_01.Tabpage5.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage6",this.div_work_01);
            obj.set_text("????????????");
            obj.set_tooltiptext("????????????");
            this.div_work_01.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory","0","34",null,null,"0","10",null,null,null,null,this.div_work_01.Tabpage6.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_otherCompany");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"?????????\"/><Cell col=\"1\" text=\"?????????\"/><Cell col=\"2\" text=\"??????\"/><Cell col=\"3\" text=\"??????\"/><Cell col=\"4\" text=\"??????\"/><Cell col=\"5\" text=\"??????\"/><Cell col=\"6\" text=\"????????????\"/></Band><Band id=\"body\"><Cell text=\"bind:WORK_FROM\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\"/><Cell col=\"1\" text=\"bind:WORK_TO\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\"/><Cell col=\"2\" text=\"bind:COMPANY_NAME\"/><Cell col=\"3\" text=\"bind:DUTY_PLACE\"/><Cell col=\"4\" text=\"bind:FINAL_GRADE\"/><Cell col=\"5\" text=\"bind:FINAL_JOB\"/><Cell col=\"6\" text=\"bind:TERM\"/></Band></Format></Formats>");
            this.div_work_01.Tabpage6.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","241","34",null,null,null,null,null,null,this.div_work_01.Tabpage6.form);
            obj.set_taborder("1");
            obj.set_text("????????????");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("????????????");
            this.div_work_01.Tabpage6.addChild(obj.name, obj);

            obj = new Tab("div_work_00","0","288",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work_00);
            obj.set_text("????????????");
            obj.set_tooltiptext("????????????");
            this.div_work_00.addChild(obj.name, obj);

            obj = new Div("div_basicInfo","0","34",null,"249","0",null,null,null,null,null,this.div_work_00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.div_work_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_site","0","0","120","31",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("0");
            obj.set_text("<fc v=\'red\'>*</fc>????????????");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("????????????");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_area","580","0","120","31",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("1");
            obj.set_text("????????????");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("????????????");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_inspector","290","0","120","31",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("2");
            obj.set_text("??????");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("??????");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_certdate","0","31","120","31",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("3");
            obj.set_text("??????");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("??????");
            obj.set_usedecorate("false");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_enterdate","580","31","120","31",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("4");
            obj.set_text("???????????????");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("???????????????");
            obj.set_usedecorate("false");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_00","125","36","440","20",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("11");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Combo("cmb_inspectionclassid00_00","415","5","150","20",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("6");
            obj.set_codecolumn("C,HJS_HR_CALENDAR_TYPE,,Y,Y");
            obj.set_text("");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_certdate00","0","62","120","31",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("7");
            obj.set_text("<fc v=\'red\'>*</fc>?????????");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("?????????");
            obj.set_usedecorate("true");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_certdate00_00","0","93","120","31",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("9");
            obj.set_text("?????????");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("?????????");
            obj.set_usedecorate("false");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_inspectionclassid00_00","290","93","120","31",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("10");
            obj.set_text("????????????");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("????????????");
            obj.set_usedecorate("false");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_enterdate00_00","580","93","120","31",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("12");
            obj.set_text("<fc v=\'red\'>*</fc>????????????");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("????????????");
            obj.set_usedecorate("true");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_certdate00_00_00","0","124","120","31",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("14");
            obj.set_text("????????????");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("????????????");
            obj.set_usedecorate("false");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_inspectionclassid00_00_00","290","124","120","31",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("17");
            obj.set_text("????????????");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("????????????");
            obj.set_usedecorate("false");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_enterdate00_00_00","580","124","120","31",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("19");
            obj.set_text("????????????");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("????????????");
            obj.set_usedecorate("false");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_certdate00_00_00_00","0","155","120","31",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("21");
            obj.set_text("????????????");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("????????????");
            obj.set_usedecorate("false");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_inspectionclassid00_00_00_00","290","155","120","31",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("23");
            obj.set_text("????????????");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("????????????");
            obj.set_usedecorate("false");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_enterdate00_00_00_00","580","155","120","31",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("25");
            obj.set_text("????????????");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("????????????");
            obj.set_usedecorate("false");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_certdate00_00_00_00_00","0","186","120","31",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("27");
            obj.set_text("????????????");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("????????????");
            obj.set_usedecorate("false");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_inspectionclassid00_00_00_00_00","290","186","120","31",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("28");
            obj.set_text("??????/????????????");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("??????/????????????");
            obj.set_usedecorate("false");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_enterdate00_00_00_00_00","580","186","120","31",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("29");
            obj.set_text("?????????");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("?????????");
            obj.set_usedecorate("false");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_certdate00_00_00_00_00_00","0","217","120","31",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("31");
            obj.set_text("??????");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("??????");
            obj.set_usedecorate("false");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_inspectionclassid00_00_00_00_00_00","290","217","120","31",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("33");
            obj.set_text("??????");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("??????");
            obj.set_usedecorate("false");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_enterdate00_00_00_00_00_00","580","217","120","31",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("35");
            obj.set_text("?????????");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("?????????");
            obj.set_usedecorate("false");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Calendar("cal_00","125","5","150","20",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Combo("cmb_inspectionclassid00_00_00","705","5","150","20",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("8");
            obj.set_codecolumn("C,MAR_STATUS,,Y,Y");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Calendar("cal_00_00","705","36","150","20",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_02_01","125","67","390","20",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("36");
            obj.set_readonly("true");
            obj.set_text("?????? ????????? ????????? 56?????? 110(?????????, ???????????????)");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Button("Button02_00_00","515","67","22","20",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_finder");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_00_00","540","67","315","20",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("16");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00","125","98","150","20",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("18");
            obj.set_text("9928");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00","415","98","150","20",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("20");
            obj.set_text("9928");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_00","705","98","150","20",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("22");
            obj.set_text("9928");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_01","125","129","150","20",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("24");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("9928");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_01","415","129","150","20",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("26");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("9928");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_00_00","705","129","150","20",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("30");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("9928");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_01_00","125","160","150","20",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("32");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("9928");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_01_00","415","160","150","20",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("34");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("9928");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_01_00_00","125","191","150","20",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("37");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("9928");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_01_00_00","415","191","150","20",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("38");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("9928");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_01_00_00_00","125","222","150","20",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("39");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("9928");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_01_00_00_00","415","222","150","20",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("40");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("9928");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","241","34",null,null,null,null,null,null,this.div_work_00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("????????????");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("????????????");
            this.div_work_00.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_00","706","256","150","20",null,null,null,null,null,null,this.div_work_00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_enable("false");
            this.div_work_00.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_00_00","707","225","150","20",null,null,null,null,null,null,this.div_work_00.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_enable("false");
            this.div_work_00.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_00_01","707","196","150","20",null,null,null,null,null,null,this.div_work_00.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_tabstop("false");
            obj.set_tooltiptype("hover");
            obj.set_type("normal");
            obj.set_enable("false");
            this.div_work_00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work_00);
            obj.set_text("????????????");
            obj.set_tooltiptext("????????????");
            this.div_work_00.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory","0","34",null,null,"0","10",null,null,null,null,this.div_work_00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_educationInfo");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"?????????\"/><Cell col=\"1\" text=\"?????????\"/><Cell col=\"2\" text=\"?????????\"/><Cell col=\"3\" text=\"?????????\"/><Cell col=\"4\" text=\"??????\"/><Cell col=\"5\" text=\"??????\"/></Band><Band id=\"body\"><Cell text=\"bind:ATTENDED_START_DATE\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\"/><Cell col=\"1\" text=\"bind:ATTENDED_END_DATE\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\"/><Cell col=\"2\" text=\"bind:ESTABLISHMENT_NAME\"/><Cell col=\"3\" text=\"bind:SCHOOL_TYPE\"/><Cell col=\"4\" text=\"bind:MAJOR\"/><Cell col=\"5\" text=\"bind:ESTABLISHMENT_DEGREE\"/></Band></Format></Formats>");
            this.div_work_00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","141","34",null,null,null,null,null,null,this.div_work_00.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("????????????");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("????????????");
            this.div_work_00.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.div_work_00);
            obj.set_text("????????????");
            obj.set_tooltiptext("????????????");
            this.div_work_00.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","211","34",null,null,null,null,null,null,this.div_work_00.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_text("????????????");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("????????????");
            this.div_work_00.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_addline",null,"7","60","20","66",null,null,null,null,null,this.div_work_00.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_text("?????????");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("?????????");
            this.div_work_00.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_delline",null,"7","60","20","0",null,null,null,null,null,this.div_work_00.Tabpage3.form);
            obj.set_taborder("2");
            obj.set_text("?????????");
            obj.set_tooltiptext("??????");
            this.div_work_00.Tabpage3.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory","0","34",null,null,"0","10",null,null,null,null,this.div_work_00.Tabpage3.form);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_familyInfo");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"??????\"/><Cell col=\"2\" text=\"??????(Sur)\"/><Cell col=\"3\" text=\"??????(Given)\"/><Cell col=\"4\" text=\"??????\"/><Cell col=\"5\" text=\"????????????\"/><Cell col=\"6\" text=\"????????????\"/><Cell col=\"7\" text=\"????????????\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" combocodecol=\"C,CONTACT,,Y,Y\" displaytype=\"combotext\" text=\"bind:CONTACT_TYPE\"/><Cell col=\"2\" text=\"bind:LAST_NAME\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:FIRST_NAME\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:SEX_CODE\" edittype=\"combo\" combocodecol=\"C,SM_SEX,,Y,Y\" displaytype=\"combocontrol\" comboautoselect=\"false\"/><Cell col=\"5\" text=\"bind:NATIONAL_IDENTIFIER\" edittype=\"text\"/><Cell col=\"6\" text=\"bind:DATE_OF_BIRTH\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\" edittype=\"date\" calendardisplayinvalidtype=\"default\" calendardisplaynulltype=\"default\" calendareditformat=\"yyyy-MM-dd\"/><Cell col=\"7\" text=\"bind:COHABITATION_FLAG\" edittype=\"combo\" combocodecol=\"C,SM_YN,,Y,Y\" displaytype=\"combocontrol\"/></Band></Format></Formats>");
            this.div_work_00.Tabpage3.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.div_work_00);
            obj.set_text("???????????????");
            obj.set_tooltiptext("???????????????");
            this.div_work_00.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","211","34",null,null,null,null,null,null,this.div_work_00.Tabpage4.form);
            obj.set_taborder("0");
            obj.set_text("???????????????");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("???????????????");
            this.div_work_00.Tabpage4.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory","0","34",null,null,"0","10",null,null,null,null,this.div_work_00.Tabpage4.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_forLanguage");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"??????\"/><Cell col=\"1\" text=\"?????????\"/><Cell col=\"2\" text=\"??????\"/><Cell col=\"3\" text=\"????????????\"/><Cell col=\"4\" text=\"????????????\"/><Cell col=\"5\" text=\"????????????\"/><Cell col=\"6\" text=\"????????????\"/></Band><Band id=\"body\"><Cell text=\"bind:LANGUAGE_TYPE\"/><Cell col=\"1\" text=\"bind:QUALFICATION_NAME\"/><Cell col=\"2\" text=\"bind:SCORE\"/><Cell col=\"3\" text=\"bind:PERFACT_SCORE\"/><Cell col=\"4\" text=\"bind:AUTHORIZED_DATE\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"5\" text=\"bind:FINALS\"/><Cell col=\"6\" text=\"bind:APPRAISAL_ORG\"/></Band></Format></Formats>");
            this.div_work_00.Tabpage4.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.div_work_00);
            obj.set_text("????????????");
            obj.set_tooltiptext("????????????");
            this.div_work_00.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","211","34",null,null,null,null,null,null,this.div_work_00.Tabpage5.form);
            obj.set_taborder("0");
            obj.set_text("????????????");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("????????????");
            this.div_work_00.Tabpage5.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory","0","34",null,null,"0","10",null,null,null,null,this.div_work_00.Tabpage5.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_certificate");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"?????????\"/><Cell col=\"1\" text=\"???????????????\"/><Cell col=\"2\" text=\"????????????\"/><Cell col=\"3\" text=\"????????????\"/><Cell col=\"4\" text=\"?????????\"/></Band><Band id=\"body\"><Cell text=\"bind:QUALIFICATION_NAME\"/><Cell col=\"1\" text=\"bind:QUALIFICATION_NUMBER\"/><Cell col=\"2\" text=\"bind:AUTHORIZED_DATE\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\"/><Cell col=\"3\" text=\"bind:EXPIRE_DATE\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\"/><Cell col=\"4\" text=\"bind:ISSUE_ORGANIZATION\"/></Band></Format></Formats>");
            this.div_work_00.Tabpage5.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage6",this.div_work_00);
            obj.set_text("??????&??????");
            obj.set_tooltiptext("??????&??????");
            this.div_work_00.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","211","34",null,null,null,null,null,null,this.div_work_00.Tabpage6.form);
            obj.set_taborder("0");
            obj.set_text("??????/??????");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("????????????");
            this.div_work_00.Tabpage6.addChild(obj.name, obj);

            obj = new Button("btn_addline",null,"7","60","20","66",null,null,null,null,null,this.div_work_00.Tabpage6.form);
            obj.set_taborder("2");
            obj.set_text("?????????");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("?????????");
            this.div_work_00.Tabpage6.addChild(obj.name, obj);

            obj = new Button("btn_delline",null,"7","60","20","0",null,null,null,null,null,this.div_work_00.Tabpage6.form);
            obj.set_taborder("3");
            obj.set_text("?????????");
            obj.set_tooltiptext("??????");
            this.div_work_00.Tabpage6.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory","0","34",null,null,"0","10",null,null,null,null,this.div_work_00.Tabpage6.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_passport");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"172\"/><Column size=\"161\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"??????\"/><Cell col=\"2\" text=\"License??????\"/><Cell col=\"3\" text=\"????????????\"/><Cell col=\"4\" text=\"????????????\"/><Cell col=\"5\" text=\"??????\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:VISA_KIND\" combocodecol=\"C,HJS_HR_VISA_KIND,SEL,Y,Y\" displaytype=\"combotext\"/><Cell col=\"2\" text=\"bind:VISA_NUMBER\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:ISSUE_DATE\" displaytype=\"date\" edittype=\"date\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"4\" text=\"bind:EXPIRY_EATE\" textAlign=\"right\" displaytype=\"date\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"5\" text=\"bind:NATIONALITY_CODE\" combocodecol=\"C,NATIONALITY,SEL,Y,Y\" edittype=\"combo\" displaytype=\"combocontrol\"/></Band></Format></Formats>");
            this.div_work_00.Tabpage6.addChild(obj.name, obj);

            obj = new Button("btn_personal",null,"295","84","20","10",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("????????????");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("????????????");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","10","6","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_searchOpen");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","40","6","145","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("???????????????(??????)");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.name,\"MENU_NM\")");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite","187","6","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_favorite");
            this.addChild(obj.name, obj);

            obj = new Button("btn_career",null,"295","84","20","10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("????????????");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("????????????");
            this.addChild(obj.name, obj);

            obj = new Div("div_00","0","36",null,"254","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrollbarbarminsize("0");
            obj.set_formscrollbarbaroutsize("0");
            obj.set_formscrollbardecbuttonsize("0");
            obj.set_formscrollbarincbuttonsize("0");
            obj.set_formscrollbarsize("0");
            obj.set_formscrollbartrackbarsize("0");
            obj.set_formscrollindicatorsize("0");
            this.addChild(obj.name, obj);

            obj = new Div("div_01","0","34",null,"218","-1",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_detail_nobg");
            obj.set_formscrollbarbarminsize("0");
            obj.set_formscrollbarbaroutsize("0");
            obj.set_formscrollbardecbuttonsize("0");
            obj.set_formscrollbarincbuttonsize("0");
            obj.set_formscrollbarsize("0");
            obj.set_formscrollbartrackbarsize("0");
            obj.set_formscrollindicatorsize("0");
            this.div_00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer04","15","6","150","180",null,null,null,null,null,null,this.div_00.form.div_01.form);
            obj.set_taborder("0");
            obj.set_cssclass("img_user");
            this.div_00.form.div_01.addChild(obj.name, obj);

            obj = new Div("div_subTitle","186","2",null,"217","-6",null,null,null,null,null,this.div_00.form.div_01.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_detail_line_notop");
            obj.set_text("");
            obj.set_enable("false");
            this.div_00.form.div_01.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","135","31",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("0");
            obj.set_text("??????");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("??????");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_insepctionclassname","139","5","219","20",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("1");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("??????");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static30_00","361","0","135","31",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("2");
            obj.set_text("?????????");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("?????????");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static30_01","0","31","135","31",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("3");
            obj.set_text("??????");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("??????");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_insepctionclassname01","139","36","219","20",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("4");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("??????");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static30_00_00","361","31","135","31",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("5");
            obj.set_text("?????????");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("?????????");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static30_01_00","0","62","135","31",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("6");
            obj.set_text("??????");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("??????");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_insepctionclassname01_00","139","67","219","20",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("7");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("??????");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static30_00_00_00","361","62","135","31",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("8");
            obj.set_text("?????????");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("?????????");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static30_01_00_00","0","93","135","31",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("9");
            obj.set_text("??????");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("??????");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_insepctionclassname01_00_00","139","98","219","20",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("10");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("??????");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static30_00_00_00_00","361","93","135","31",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("11");
            obj.set_text("?????????");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("?????????");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static30_01_00_00_00","0","124","135","31",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("12");
            obj.set_text("??????");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("??????");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_insepctionclassname01_00_00_00","139","129","219","20",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("13");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("??????");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static30_00_00_00_00_00","361","124","135","31",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("14");
            obj.set_text("?????????");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("?????????");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static30_01_00_00_00_00","0","155","135","31",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("15");
            obj.set_text("??????");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("??????");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_insepctionclassname01_00_00_00_00","139","160","219","20",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("16");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("??????");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static30_00_00_00_00_00_00","361","155","135","31",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("17");
            obj.set_text("??????");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("??????");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_insepctionclassname00_00_00_00_00_00","500","160","223","20",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("18");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("??????");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static30_01_00_00_00_00_00","0","186","135","30",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("19");
            obj.set_text("??????");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("??????");
            obj.set_border("0px none");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_insepctionclassname01_00_00_00_00_00","139","191","219","20",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("20");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("??????");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static30_00_00_00_00_00_00_00","361","186","135","30",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("21");
            obj.set_text("????????????");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("????????????");
            obj.set_border("0px none");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Calendar("cal_00","500","5","110","20",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("22");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("display");
            obj.set_enable("false");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Calendar("cal_00_00","500","36","110","20",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("23");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("display");
            obj.set_enable("false");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Calendar("cal_00_00_00","500","67","110","20",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("display");
            obj.set_enable("false");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Calendar("cal_00_00_00_00","500","98","110","20",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("25");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("display");
            obj.set_enable("false");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Calendar("cal_00_00_00_00_00","500","129","110","20",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("26");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("display");
            obj.set_enable("false");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_insepctionclassname00_00_00_00_00_00_00","613","5","110","20",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("27");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("??????");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_insepctionclassname00_00_00_00_00_00_00_00","613","36","110","20",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("28");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("??????");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_insepctionclassname00_00_00_00_00_00_00_00_00","613","67","110","20",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("29");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("??????");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_insepctionclassname00_00_00_00_00_00_00_00_00_00","613","98","110","20",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("30");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("??????");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_insepctionclassname00_00_00_00_00_00_00_00_00_00_00","613","129","110","20",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("31");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("??????");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_insepctionclassname00_00_00_00_00_00_01","500","187","223","20",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("32");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("??????");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Button("btn_save","56","190","70","20",null,null,null,null,null,null,this.div_00.form.div_01.form);
            obj.set_taborder("2");
            obj.set_text("????????????");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("????????????");
            this.div_00.form.div_01.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","241","34",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("1");
            obj.set_text("?????? ?????? ??????");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("?????? ?????? ??????");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"43","60","20","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("??????");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("??????");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_work_00.Tabpage2.form.div_basicInfo00.form.cal_certdate","value","ds_qamQcinspector","CERTDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_work_01.Tabpage2.form.div_basicInfo00.form.cal_certdate","value","ds_qamQcinspector","CERTDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_00.form.div_01.form.div_subTitle.form.edt_insepctionclassname","value","ds_baseInfo","KOR_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_00.form.div_01.form.div_subTitle.form.edt_insepctionclassname01","value","ds_baseInfo","EMPLOYEE_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_00.form.div_01.form.div_subTitle.form.edt_insepctionclassname01_00","value","ds_baseInfo","GRADE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_00.form.div_01.form.div_subTitle.form.edt_insepctionclassname01_00_00","value","ds_baseInfo","GRADE_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_00.form.div_01.form.div_subTitle.form.edt_insepctionclassname01_00_00_00","value","ds_baseInfo","ORG_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_00.form.div_01.form.div_subTitle.form.edt_insepctionclassname01_00_00_00_00","value","ds_baseInfo","JOB_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_00.form.div_01.form.div_subTitle.form.edt_insepctionclassname01_00_00_00_00_00","value","ds_baseInfo","POSITION_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_00.form.div_01.form.div_subTitle.form.edt_insepctionclassname00_00_00_00_00_00","value","ds_baseInfo","MAJOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_00.form.div_01.form.div_subTitle.form.cal_00_00_00","value","ds_baseInfo","GRADE_TITLE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_00.form.div_01.form.div_subTitle.form.cal_00_00","value","ds_baseInfo","GRADE_PROMOTION_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_00.form.div_01.form.div_subTitle.form.cal_00","value","ds_baseInfo","HIRE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_00.form.div_01.form.div_subTitle.form.cal_00_00_00_00","value","ds_baseInfo","EFFECTIVE_START_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_00.form.div_01.form.div_subTitle.form.cal_00_00_00_00_00","value","ds_baseInfo","JOB_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_work_00.Tabpage1.form.div_basicInfo.form.cal_00","value","ds_humanInfo","DATE_OF_BIRTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_work_00.Tabpage1.form.div_basicInfo.form.edt_00","value","ds_humanInfo","PAR_ADDRESS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_work_00.Tabpage1.form.div_basicInfo.form.cmb_inspectionclassid00_00","value","ds_humanInfo","LUNAR_SOLAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_work_00.Tabpage1.form.div_basicInfo.form.cmb_inspectionclassid00_00_00","value","ds_humanInfo","MARITAL_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_work_00.Tabpage1.form.div_basicInfo.form.cal_00_00","value","ds_humanInfo","MARITAL_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_work_00.Tabpage1.form.div_basicInfo.form.edt_01_00_00","value","ds_humanInfo","PAC_HOME_TELEPHONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_work_00.Tabpage1.form.div_basicInfo.form.edt_01_00_00_00","value","ds_humanInfo","PAC_MOBILE_TELEPHONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_work_00.Tabpage1.form.div_basicInfo.form.edt_01_00_00_00_00","value","ds_humanInfo","PAC_EMERGENCY_TELEPHONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_work_00.Tabpage1.form.div_basicInfo.form.edt_01_00_00_01","value","ds_humanInfo","PATRIOT_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_work_00.Tabpage1.form.div_basicInfo.form.edt_01_00_00_01","accessibilityaction","ds_humanInfo","PATRIOT_RELATION_SHIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_work_00.Tabpage1.form.div_basicInfo.form.edt_01_00_00_00_00_00","value","ds_educationInfo","PATRIOT_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_work_00.Tabpage1.form.div_basicInfo.form.edt_01_00_00_01_00","value","ds_humanInfo","DISABILITY_MEANING");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_work_00.Tabpage1.form.div_basicInfo.form.edt_01_00_00_00_01_00","value","ds_humanInfo","DISABILITY_GRADE_MEANING");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_work_00.Tabpage1.form.div_basicInfo.form.edt_01_00_00_01_00_00","value","ds_humanInfo","MILITARY_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_work_00.Tabpage1.form.div_basicInfo.form.edt_01_00_00_00_01_00_00","value","ds_humanInfo","MILITARY_REASON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_work_00.Tabpage1.form.div_basicInfo.form.edt_01_00_00_01_00_00_00","value","ds_humanInfo","MILITARY_PART");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_work_00.Tabpage1.form.div_basicInfo.form.edt_01_00_00_00_01_00_00_00","value","ds_humanInfo","MILITARY_RANK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","div_work_00.Tabpage1.form.div_basicInfo.form.edt_02_01","value","ds_humanInfo","PAC_ADDRESS1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","div_work_00.Tabpage1.form.div_basicInfo.form.edt_00_00","value","ds_humanInfo","PAC_ADDRESS2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_work_00.Tabpage1.form.cal_00_01","value","ds_humanInfo","DISABILITY_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_work_00.Tabpage1.form.cal_00_00","value","ds_humanInfo","MILITARY_FROM_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_00.form.div_01.form.div_subTitle.form.edt_insepctionclassname00_00_00_00_00_00_01","value","ds_baseInfo","NATIONAL_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_work_00.Tabpage1.form.cal_00","value","ds_humanInfo","MILITARY_TO_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","div_work_00.Tabpage1.form.div_basicInfo.form.edt_01_00_00_00_01","value","ds_humanInfo","PATRIOT_RELATION_SHIP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("HRA10110M.xfdl", function() {
        /***************************************************************************************
         * ???????????? 	: ????????????
         * ????????? 		: ???????????? ?????? ??? ??????
         * ????????? 		: HRA10110M.xfdl
         * ????????? 		: ?????????
         * ???  ???		: ??????????????? ???????????? ???????????? ??????
         *---------------------------------------------------------------------------------------
         * ?????????		?????????			????????????
         *---------------------------------------------------------------------------------------
         * 2022.01.27	?????????			????????????
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/


        /**************************************************************************
         * 1. ?????? include
         ***************************************************************************/


        /**************************************************************************
         * 2. FORM ?????? ?????? ??????
         ***************************************************************************/
         //???????????? ??????
        var rowData;
        var flag;
        var chkCount;
        var tab=0;

        //person_id ??????
        var personId = this.gf_getPersonId();

        //???????????? ??? ??? ??? btnId, dataSet Setting
        var buttonId = "btn_personal";
        var tabDS;




        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/

        this.fn_init = function (obj, e)
        {

        	this.nfn_formInit(obj);

        	this.fn_baseInfo(); 	// ????????????
        	this.fn_HumanInfo(); 	// ????????????
        	this.fn_educationInfo();// ????????????
         	this.fn_familyInfo();	// ????????????
        	this.fn_forLanguage();	// ???????????????
        	this.fn_certificate();	// ????????????
        	this.fn_passport();		// ????????????

        	this.fn_orderRecord(); 	  // ????????????
        	this.fn_workExperience(); // ????????????
        	this.fn_jobExperience();  // ????????????
        	this.fn_workRating()	  // ????????????
        	this.fn_educationCarrerInfo();  // ????????????
        	this.fn_otherCompany();	  // ????????????

        	tabDS = this.ds_humanInfo;
        };

        /**************************************************************************
         * 4. ????????? ??????
         ***************************************************************************/



        //************************************************
        //????????????
        //************************************************
        this.fn_baseInfo = function(obj,e)
        {
        	trace("???????????? INFO===============================");

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "PERSON_ID", personId);


        	var sSvcID = "selectBaseInfo";
        	var sController = "/hra10110/selectBaseInfo.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_baseInfo=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        }

        //************************************************
        //?????? - ????????????
        //************************************************
        this.fn_HumanInfo = function(obj,e)
        {
        	trace("???????????? INFO===============================");

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "PERSON_ID", personId);


        	var sSvcID = "selectHumanInfo";
        	var sController = "/hra10110/selectHumanInfo.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_humanInfo=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        }

        //************************************************
        //?????? - ????????????
        //************************************************
        this.fn_educationInfo = function(obj,e)
        {
        	trace("???????????? INFO===============================");

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "PERSON_ID", personId);


        	var sSvcID = "selectEducationInfo";
        	var sController = "/hra10110/selectEducationInfo.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_educationInfo=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        }

        //************************************************
        //?????? - ????????????
        //************************************************
        this.fn_familyInfo = function(obj,e)
        {
        	trace("???????????? INFO===============================");

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "PERSON_ID", personId);


        	var sSvcID = "selectFamilyInfo";
        	var sController = "/hra10110/selectFamilyInfo.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_familyInfo=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        }

        //************************************************
        //?????? - ????????? ??????
        //************************************************
        this.fn_forLanguage = function(obj,e)
        {
        	trace("??????????????? INFO===============================");

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "PERSON_ID", personId);


        	var sSvcID = "selectForLanguageInfo";
        	var sController = "/hra10110/selectForLanguageInfo.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_forLanguage=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        }

        //************************************************
        //?????? - ?????? ??????
        //************************************************
        this.fn_certificate= function(obj,e)
        {
        	trace("???????????? INFO===============================");

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "PERSON_ID", personId);


        	var sSvcID = "selectCertificate";
        	var sController = "/hra10110/selectCertificate.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_certificate=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        }

        //************************************************
        //?????? - ?????? ??????
        //************************************************
        this.fn_passport= function(obj,e)
        {
        	trace("???????????? INFO===============================");

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "PERSON_ID", personId);


        	var sSvcID = "selectPassport";
        	var sController = "/hra10110/selectPassport.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_passport=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        }


        //************************************************
        //?????? - ????????????
        //************************************************
        this.fn_orderRecord= function(obj,e)
        {
        	trace("???????????? INFO===============================");

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "PERSON_ID", personId);


        	var sSvcID = "selecOrderRecord";
        	var sController = "/hra10110/selectOrderRecord.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_orderRecord=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        }

        //************************************************
        //?????? - ????????????
        //************************************************
        this.fn_workExperience= function(obj,e)
        {
        	trace("???????????? INFO===============================");

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "PERSON_ID", personId);


        	var sSvcID = "selectWorkExperience";
        	var sController = "/hra10110/selectWorkExperience.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_workExperience=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        }

        //************************************************
        //?????? - ????????????
        //************************************************
        this.fn_jobExperience= function(obj,e)
        {
        	trace("???????????? INFO===============================");

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "PERSON_ID", personId);


        	var sSvcID = "selectJobExperience";
        	var sController = "/hra10110/selectJobExperience.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_jobExperience=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        }


        //************************************************
        //?????? - ????????????
        //************************************************
        this.fn_workRating= function(obj,e)
        {
        	trace("???????????? INFO===============================");

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "PERSON_ID", personId);


        	var sSvcID = "selectWorkRating";
        	var sController = "/hra10110/selectWorkRating.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_workRating=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        }


        //************************************************
        //?????? - ????????????
        //************************************************
        this.fn_educationCarrerInfo= function(obj,e)
        {
        	trace("???????????? INFO===============================");

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "PERSON_ID", personId);


        	var sSvcID = "selectEducationCarrerInfo";
        	var sController = "/hra10110/selectEducationCarrerInfo.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_educationCarrerInfo=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        }

        //************************************************
        //?????? - ????????????
        //************************************************
        this.fn_otherCompany= function(obj,e)
        {
        	trace("???????????? INFO===============================");

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "PERSON_ID", personId);


        	var sSvcID = "selectOtherCompany";
        	var sController = "/hra10110/selectOtherCompany.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_otherCompany=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        }

        //************************************************
        //????????????, ???????????? ??? Change
        //************************************************

        this.fn_change = function(obj,e)
        {
        	trace("ID ********************** : "+ obj.id);
        	//???????????? ???????????????
        	buttonId = obj.id;

        	if(buttonId == "btn_career") {
        		this.btn_personal.bringToFront();
        		this.div_work_00.moveToNext( this.div_work_01 );
        	} else if (buttonId == "btn_personal") {
        		this.btn_career.bringToFront();
        		this.div_work_01.moveToNext( this.div_work_00 );
        	}
        };





        //************************************************
        // ??? ??????
        //************************************************
        this.btn_add_onclick = function (obj, e)
        {


        	if(tab == 2) {
        		var rowtype = this.ds_familyInfo.getRowType(this.ds_familyInfo.rowposition);
        		var nRow = this.ds_familyInfo.addRow();
        		this.ds_familyInfo.setColumn(nRow, "CONTACT_TYPE", "A");
        		this.ds_familyInfo.setColumn(nRow, "SEX_CODE", "M");
        		this.ds_familyInfo.setColumn(nRow, "COHABITATION_FLAG", "Y");
        		this.ds_familyInfo.setColumn(nRow, "PERSON_ID", personId);

        		trace("???????????? Add Row")
        	}
        	else if(tab == 5) {
        		var rowtype = this.ds_passport.getRowType(this.ds_passport.rowposition);
        		var nRow = this.ds_passport.addRow();
        		this.ds_passport.setColumn(nRow, "PERSON_ID", personId);
        		trace("???????????? Add Row")
        	}
        };




        /*******************************************************************************
        // ?????? : ????????? validate??????
        *******************************************************************************/
        this.fn_saveValidate = function ()
        {
        	trace("fn_saveValidate -----------------------");
        	//????????????
        	if(tab == 0) {

        		//???????????? CHECK
        		var component = this.div_work_00.Tabpage1.form.div_basicInfo;
        		var strColIdList = "cal_00";
        		var strColNmList = "????????????";
        		var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);

        		if (rtn == false) return;

        		//????????? CHECK
        		var component = this.div_work_00.Tabpage1.form.div_basicInfo;
        		var strColIdList = "edt_02_01";
        		var strColNmList = "?????????";
        		var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);

        		if (rtn == false) return;


        		//???????????? CHECK
        		var component = this.div_work_00.Tabpage1.form.div_basicInfo;
        		var strColIdList = "edt_01_00_00_00_00";
        		var strColNmList = "????????????";
        		var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);

        		if (rtn == false) return;


        	}
        	//????????????
        	if(tab == 2) {
        		trace("????????????");
        		var component = this.div_work_00.Tabpage3.form.grd_qamQcinspectorhistory;
        		var strColIdList = "CONTACT_TYPE,LAST_NAME,FIRST_NAME,SEX_CODE,NATIONAL_IDENTIFIER,DATE_OF_BIRTH,COHABITATION_FLAG";
        		var rtn = this.nfn_MandatoryCheckGrid(component, strColIdList);

        		return rtn;
        	};
        	//??????&??????
        	if(tab == 5) {
        		trace("??????/??????");
        		var component = this.div_work_00.Tabpage6.form.grd_qamQcinspectorhistory;
        		var strColIdList = "VISA_KIND,VISA_NUMBER,ISSUE_DATE,EXPIRY_EATE,NATIONALITY_CODE";
        		var rtn = this.nfn_MandatoryCheckGrid(component, strColIdList);

        		return rtn;
        	};

        	return true;
        };




        //************************************************
        // ??????????????? ?????? - ??????
        //************************************************
        this.fn_save = function(obj,e)
        {


        	// ????????? ??????
        	if(!this.fn_saveValidate()) {

        		return false;
        	};


        	if(!this.gfn_dsIsUpdated(tabDS))
        	{

        		this.gfn_Message("NoDataChanged", null, "info","ok");
        		/*alert("????????? ???????????? ????????????.");*/
        		return false;
        	}

        	//?????????????????????????
        	var bOK = this.gfn_Message("InfoPopupSave", null, "conf", "yesno");
        	if (bOK == false) return;

        	var id = tabDS.id;

        	trace("======= DS id : "+ id);

        	if(tab == 0) {


        		this.ds_humanInfo.setColumn(0, "PERSON_ID", personId);

        		trace(this.ds_humanInfo.getColumn(0, "PERSON_ID"));


        		var sSvcID = "insert"+id;
        		var sController = "/hra10110/insert"+id+".do";
        		var sInDatasets = "INPUT="+id;
        		var sOutDatasets = "";

        		var sArgs = "";
        		/*sArgs += this.gfn_setParam("method", "saveCmdDictionary");*/

        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        	}
        	else if(tab == 2) {

        		trace(this.ds_familyInfo.getColumn(0, "PERSON_ID"));


        		var sSvcID = "insert"+id;
        		var sController = "/hra10110/insert"+id+".do";
        		var sInDatasets = "INPUT="+id+":U";
        		var sOutDatasets = "";

        		var sArgs = "";
        		/*sArgs += this.gfn_setParam("method", "saveCmdDictionary");*/

        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        	}
        	else if(tab == 5) {

        		trace(this.ds_passport.getColumn(0, "PERSON_ID"));


        		var sSvcID = "insert"+id;
        		var sController = "/hra10110/insert"+id+".do";
        		var sInDatasets = "INPUT="+id+":U";
        		var sOutDatasets = "";

        		var sArgs = "";
        		/*sArgs += this.gfn_setParam("method", "saveCmdDictionary");*/

        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        	}

        };

        // ************************
        // ???????????? - ?????????
        // ************************
        this.fn_delete = function(obj,e)
        {
        	//????????? ????????? ?????? ?????? ????????? ????????? ???????????????. ?????? ?????????????????????????
        	var bOK = this.gfn_Message("IsDeleted", null, "conf", "yesno");
        	if (bOK == false) return;

        	var applyChk = [];


        	//???????????? ??????
        	for (var i = tabDS.getRowCount(); i>=0; i--) {
        		if ( tabDS.getColumn(i,"CHK") == 1 ) {
        			applyChk.push(i)
        		}

        	}

        	var id = tabDS.id;

        	//????????????
        	if(tab == 2){
        		//?????? ??? ??????
        		for(i=0; i<applyChk.length; i++) {
        			tabDS.deleteRow(applyChk[i]);
        		}
        		var sSvcID = "delete"+id;
        		var sController = "/hra10110/delete"+id+".do";
        		var sInDatasets = "INPUT="+id+":U";
        		var sOutDatasets = "";

        		var sArgs = "";
        		/*sArgs += this.gfn_setParam("method", "saveCmdDictionary");*/

        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	}
        	//????????????
        	if(tab == 5){
        		//?????? ??? ??????
        		for(i=0; i<applyChk.length; i++) {
        			tabDS.deleteRow(applyChk[i]);
        		}
        		var sSvcID = "delete"+id;
        		var sController = "/hra10110/delete"+id+".do";
        		var sInDatasets = "INPUT="+id+":U";
        		var sOutDatasets = "";

        		var sArgs = "";
        		/*sArgs += this.gfn_setParam("method", "saveCmdDictionary");*/

        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	}

        };


        //************************************************
        // Tab Page ?????? ???(??? ??????????????? ?????? ??? ???)
        //************************************************
        this.tab_work_onchanged = function(obj,e)
        {

        	//????????? ?????? ?????? ?????????
        	tab = e.postindex;

        	//this.fn_list();

        	//??? ????????? ?????? ???????????? ??????
        	if(buttonId == "btn_personal") {

        		//???????????????
        		if (e.postindex == 0) {
        			tabDS = this.ds_humanInfo;
        		}
        		//???????????????
        		else if (e.postindex == 1) {
        			tabDS = this.ds_educationInfo;
        		}
        		//????????????
        		else if (e.postindex == 2) {
        			tabDS = this.ds_familyInfo;
        		}
        		//?????????
        		else if (e.postindex == 3) {
        			tabDS = this.ds_forLanguage;
        		}
        		//??????
        		else if (e.postindex == 4) {
        			tabDS = this.ds_certificate;
        		}
        		//??????
        		else if (e.postindex == 5) {
        			tabDS = this.ds_passport;
        		}

        	}
        	else if(buttonId == "btn_career") {

        		//
        		if (e.postindex == 0) {
        			tabDS = "ds_orderRecord";
        		}
        		//
        		else if (e.postindex == 1) {
        			tabDS = "ds_workExperience";
        		}
        		//
        		else if (e.postindex == 2) {
        			tabDS = "ds_jobExperience";
        		}
        		//
        		else if (e.postindex == 3) {
        			tabDS = "ds_workRating";
        		}
        		//
        		else if (e.postindex == 4) {
        			tabDS = "ds_educationCarrerInfo";
        		}
        		//
        		else if (e.postindex == 5) {
        			tabDS = "ds_otherCompany";
        		}

        	}



        	trace(" Tab Index ::: " + tab);
        	trace(" Tab tabDS ::: " + tabDS);





        };


        /*******************************************************************************
        // ??? ?????? ??? ???????????? ??????
        *******************************************************************************/
        this.fn_list = function ()
        {

        	this.div_work_00.Tabpage1.form.div_basicInfo.form.cal_00.setFocus();

        	if(this.gfn_dsIsUpdated(tabDS))
        	{
        		//????????? ???????????? ????????????. ?????? ??? ?????????????????????????
         		if (this.gfn_Message("IsChangedButContinue", null, "conf", "yesno"))
        		{

        			return this.fn_save();
        		} else
        		{
        			trace("false");
        			return ;
        		}
        	}
        	else {
        		trace("???????????? X");
        	}

        };





        /**************************************************************************
         * 5. TRANSACTION, CALLBACK ??????
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        	}
        	else
        	{
        		if (trId == "insertds_humanInfo")
        		{
        				trace("callBack insertds_humanInfo")
        				this.gfn_Message("SuccedSave", null, "info","ok");
        		}
        		if (trId == "insertds_familyInfo")
        		{
        				trace("callBack ds_familyInfo")
        				this.gfn_Message("SuccedSave", null, "info","ok");
        		}
        		if (trId == "insertds_passport")
        		{
        				trace("callBack ds_passport")
        				this.gfn_Message("SuccedSave", null, "info","ok");
        		}
        		if (trId == "deleteds_humanInfo")
        		{
        				trace("callBack insertds_humanInfo")
        				this.gfn_Message("SuccedSave", null, "info","ok");
        		}
        		if (trId == "deleteds_passport")
        		{
        				trace("callBack deleteds_passport")
        				this.gfn_Message("SuccedSave", null, "info","ok");
        		}



        	}
        };






        this.fn_updateChk = function(obj,e)
        {

        	//??? ?????? ??? ???????????? ??????
        	var Chk = this.fn_list();

        	//?????? ??? ??? ?????? X
        	return Chk;
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_work_01.addEventHandler("onchanged",this.tab_work_onchanged,this);
            this.div_work_00.addEventHandler("onchanged",this.tab_work_onchanged,this);
            this.div_work_00.addEventHandler("canchange",this.fn_updateChk,this);
            this.div_work_00.Tabpage1.form.div_basicInfo.form.sta_inspector.addEventHandler("onclick",this.tab_work_Tabpage1_div_basicInfo_sta_inspector_onclick,this);
            this.div_work_00.Tabpage1.form.div_basicInfo.form.cmb_inspectionclassid00_00.addEventHandler("onitemchanged",this.div_work_00_Tabpage1_div_basicInfo_cmb_inspectionclassid00_00_onitemchanged,this);
            this.div_work_00.Tabpage1.form.div_basicInfo.form.edt_01_00_00_00_01.addEventHandler("onchanged",this.div_work_00_Tabpage1_div_basicInfo_edt_01_00_00_00_01_onchanged,this);
            this.div_work_00.Tabpage3.form.btn_addline.addEventHandler("onclick",this.btn_add_onclick,this);
            this.div_work_00.Tabpage3.form.btn_delline.addEventHandler("onclick",this.fn_delete,this);
            this.div_work_00.Tabpage6.form.btn_addline.addEventHandler("onclick",this.btn_add_onclick,this);
            this.div_work_00.Tabpage6.form.btn_delline.addEventHandler("onclick",this.fn_delete,this);
            this.btn_personal.addEventHandler("onclick",this.fn_change,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.btn_career.addEventHandler("onclick",this.fn_change,this);
            this.div_00.form.div_01.form.div_subTitle.form.Static30.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_00.form.div_01.form.div_subTitle.form.edt_insepctionclassname.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_00.form.div_01.form.div_subTitle.form.Static30_00.addEventHandler("onclick",this.div_subTitle_Static30_00_onclick,this);
            this.div_00.form.div_01.form.div_subTitle.form.Static30_01.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_00.form.div_01.form.div_subTitle.form.edt_insepctionclassname01.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_00.form.div_01.form.div_subTitle.form.Static30_00_00.addEventHandler("onclick",this.div_subTitle_Static30_00_onclick,this);
            this.div_00.form.div_01.form.div_subTitle.form.Static30_01_00.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_00.form.div_01.form.div_subTitle.form.edt_insepctionclassname01_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_00.form.div_01.form.div_subTitle.form.Static30_00_00_00.addEventHandler("onclick",this.div_subTitle_Static30_00_onclick,this);
            this.div_00.form.div_01.form.div_subTitle.form.Static30_01_00_00.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_00.form.div_01.form.div_subTitle.form.edt_insepctionclassname01_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_00.form.div_01.form.div_subTitle.form.Static30_00_00_00_00.addEventHandler("onclick",this.div_subTitle_Static30_00_onclick,this);
            this.div_00.form.div_01.form.div_subTitle.form.Static30_01_00_00_00.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_00.form.div_01.form.div_subTitle.form.edt_insepctionclassname01_00_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_00.form.div_01.form.div_subTitle.form.Static30_00_00_00_00_00.addEventHandler("onclick",this.div_subTitle_Static30_00_onclick,this);
            this.div_00.form.div_01.form.div_subTitle.form.Static30_01_00_00_00_00.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_00.form.div_01.form.div_subTitle.form.edt_insepctionclassname01_00_00_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_00.form.div_01.form.div_subTitle.form.Static30_00_00_00_00_00_00.addEventHandler("onclick",this.div_subTitle_Static30_00_onclick,this);
            this.div_00.form.div_01.form.div_subTitle.form.Static30_01_00_00_00_00_00.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_00.form.div_01.form.div_subTitle.form.edt_insepctionclassname01_00_00_00_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_00.form.div_01.form.div_subTitle.form.Static30_00_00_00_00_00_00_00.addEventHandler("onclick",this.div_subTitle_Static30_00_onclick,this);
            this.btn_save.addEventHandler("onclick",this.fn_save,this);
        };
        this.loadIncludeScript("HRA10110M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
