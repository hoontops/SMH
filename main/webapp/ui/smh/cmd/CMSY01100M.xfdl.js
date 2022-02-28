(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMSY01100M");
            this.set_titletext("사용자관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,637);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmdUsers", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PWD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"CLPS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMPN_PHN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MBPH_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PWD_CHANGE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PWD_ERR_CNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LAST_LGN_DTM\" type=\"DATE\" size=\"256\"/><Column id=\"LAST_LGN_IP\" type=\"STRING\" size=\"256\"/><Column id=\"CREATED_BY\" type=\"STRING\" size=\"256\"/><Column id=\"CREATION_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"LAST_UPDATED_BY\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATE_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"PWD_ERR_DTM\" type=\"DATE\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"NICKNAME\" type=\"STRING\" size=\"256\"/><Column id=\"HOMEADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USERSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISEESLINK\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"AREARESPONSIBILITY\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_ROWS\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RETR_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PAGE_NUMBER\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PAGE_SIZE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LOOKUP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmdDepts", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_BLG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmdUserJob", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"JOB_GUBUN_CD\" type=\"STRING\" size=\"30\"/><Column id=\"JOB_GUBUN_NM\" type=\"STRING\" size=\"100\"/><Column id=\"USER_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"USER_JOB_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ORDR\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_multiJobSys", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"CODE\" type=\"STRING\" size=\"30\"/><Column id=\"VALUE\" type=\"STRING\" size=\"100\"/><Column id=\"ORDR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"USER_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"USER_JOB_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"JOB_GUBUN_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">CMM</Col><Col id=\"VALUE\">시스템공통</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"CODE\">CC</Col><Col id=\"VALUE\">콜센터</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"CODE\">CR</Col><Col id=\"VALUE\">자원</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"CODE\">GM</Col><Col id=\"VALUE\">계량기</Col></Row><Row><Col id=\"CODE\">MM</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"CODE\">SC</Col><Col id=\"VALUE\">안전점검</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"CODE\">CM</Col><Col id=\"VALUE\">CNG</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"CODE\">RM</Col><Col id=\"VALUE\">검침</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"CODE\">RC</Col><Col id=\"VALUE\">과금</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"CODE\">NP</Col><Col id=\"VALUE\">고지</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"CODE\">RP</Col><Col id=\"VALUE\">수납</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"CODE\">NM</Col><Col id=\"VALUE\">채권</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_multiCompanyCd", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"CODE\" type=\"STRING\" size=\"30\"/><Column id=\"VALUE\" type=\"STRING\" size=\"100\"/><Column id=\"ORDR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"USER_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmdUserCompanyMpng", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"30\"/><Column id=\"USER_ID\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_result", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmdDeptsSrch", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_BLG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_multiSite", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"VALUE\">CCT</Col><Col id=\"CODE\">CCT</Col></Row><Row><Col id=\"VALUE\">IFC</Col><Col id=\"CODE\">IFC</Col></Row><Row><Col id=\"VALUE\">IFV</Col><Col id=\"CODE\">IFV</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmdPlantuser", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0%","30",null,"43","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchBg");
            obj.set_background("rgba(247,247,247,1)");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_userId","73","10","94","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_inputmode("normal");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00","17","10","50","18",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("사용자ID");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_font("9pt \"Dotum\"");
            obj.set_tooltiptext("USERID");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_userNm","256","10","113","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01","186","10","63","18",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("사용자명");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_font("9pt \"Dotum\"");
            obj.set_tooltiptext("10B96D1653054FC48054A31BF0D766EA");
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

            obj = new Static("Static02","0%","-1",null,"43","97.83%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
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
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06","10.24%","1",null,null,"88.66%","-1",null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static09","33.7%","-1",null,null,"65.2%","1",null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static34","397","10","45","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_text("사이트");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_plantid","450","10","98","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_codecolumn("C,SiteType,,Y,Y");
            obj.set_type("filter");
            obj.set_displayrowcount("20");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01_00","579","10","43","18",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_font("9pt \"Dotum\"");
            obj.set_tooltiptext("DEPARTMENTNAME");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_deptNm","628","10","133","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"0","60","20","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_DR_GridSave");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("Toolbar_Save");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","0%","73",null,"15","87.17%",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0.87%","81",null,"15","86.3%",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","6","81","132","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("사용자 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_border("0px none rgba(51,51,51,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_tooltiptext("USERLIST");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","0%","109",null,"10","87.17%",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Div("div",null,"120","51.20%",null,"10","5",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_border("1px solid rgba(128,128,128,1)");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","0.57%","10",null,"21","78.20%",null,null,null,null,null,this.div.form);
            obj.set_taborder("25");
            obj.set_text("사용자ID(사번)");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_tooltiptext("USERID");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static19","52.13%","86",null,"21","27.13%",null,null,null,null,null,this.div.form);
            obj.set_taborder("35");
            obj.set_text("직위");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_tooltiptext("POSITION");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static07","4","60",null,"20","78.55%",null,null,null,null,null,this.div.form);
            obj.set_taborder("21");
            obj.set_text("이메일주소");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_tooltiptext("EMAILADDRESS");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_emailAddr","23.71%","60",null,"20","1.15%",null,null,null,null,null,this.div.form);
            obj.set_taborder("4");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_userNm","74.56%","36",null,"20","1.41%",null,null,null,null,null,this.div.form);
            obj.set_taborder("3");
            obj.set_cssclass("essential");
            obj.set_enable("true");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static03","52.13%","36",null,"21","27.13%",null,null,null,null,null,this.div.form);
            obj.set_taborder("22");
            obj.set_text("사용자명");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_tooltiptext("10B96D1653054FC48054A31BF0D766EA");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00","4","36",null,"20","78.55%",null,null,null,null,null,this.div.form);
            obj.set_taborder("23");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_tooltiptext("PASSWORD");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static05","300","10",null,"20","26.96%",null,null,null,null,null,this.div.form);
            obj.set_taborder("24");
            obj.set_text("ID");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_tooltiptext("ID");
            obj.set_visible("false");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static16","0%","0",null,"10","-3.04%",null,null,null,null,null,this.div.form);
            obj.set_taborder("26");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static17","0.00%","31",null,"5","0.57%",null,null,null,null,null,this.div.form);
            obj.set_taborder("27");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static10","0%","55",null,"5","-0.89%",null,null,null,null,null,this.div.form);
            obj.set_taborder("28");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static11","0%","81",null,"5","-0.89%",null,null,null,null,null,this.div.form);
            obj.set_taborder("29");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static12","0%",null,null,"5","-3.04%","-15",null,null,null,null,this.div.form);
            obj.set_taborder("30");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static25","47.52%","0",null,"84","47.87%",null,null,null,null,null,this.div.form);
            obj.set_taborder("31");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static28","72.87%","0",null,"87","25.18%",null,null,null,null,null,this.div.form);
            obj.set_taborder("32");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static13","21.63%","0",null,null,"76.24%","-15",null,null,null,null,this.div.form);
            obj.set_taborder("33");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_id","74.38%","10",null,"20","1.34%",null,null,null,null,null,this.div.form);
            obj.set_taborder("1");
            obj.set_enable("false");
            obj.set_visible("false");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_userId","23.71%","10",null,"20","52.20%",null,null,null,null,null,this.div.form);
            obj.set_taborder("0");
            obj.set_cssclass("essential");
            obj.set_enable("false");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cbo_plantid","23.71%","190",null,"20","52.20%",null,null,null,null,null,this.div.form);
            obj.set_taborder("13");
            obj.set_cssclass("essential");
            obj.set_codecolumn("C,SiteType,SEL,Y,Y");
            obj.set_font("9pt \"Dotum\"");
            obj.set_index("0");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static15","5","190",null,"20","78.41%",null,null,null,null,null,this.div.form);
            obj.set_taborder("34");
            obj.set_text("기본 Site ID");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_tooltiptext("SITETYPE");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_userPwd","23.71%","36",null,"20","52.58%",null,null,null,null,null,this.div.form);
            obj.set_taborder("2");
            obj.set_cssclass("essential");
            obj.set_enable("false");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static20","72.87%","85",null,"127","25.18%",null,null,null,null,null,this.div.form);
            obj.set_taborder("36");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static21","47.52%","86",null,"100","47.87%",null,null,null,null,null,this.div.form);
            obj.set_taborder("37");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static01","4","86",null,"20","78.55%",null,null,null,null,null,this.div.form);
            obj.set_taborder("38");
            obj.set_text("직책");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_tooltiptext("DUTY");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static14","0%","107",null,"5","0%",null,null,null,null,null,this.div.form);
            obj.set_taborder("39");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static23","0%","133",null,"5","0%",null,null,null,null,null,this.div.form);
            obj.set_taborder("40");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static24","5","138",null,"20","78.55%",null,null,null,null,null,this.div.form);
            obj.set_taborder("41");
            obj.set_text("비밀번호변경일");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_font("bold 9pt \"Dotum\"");
            obj.set_tooltiptext("CHANGEPASSWORDDATE");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static26","52.13%","138",null,"20","27.13%",null,null,null,null,null,this.div.form);
            obj.set_taborder("42");
            obj.set_text("오류횟수");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_tooltiptext("OSPCLOSEERRORCOUNT");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_pwdErrCnt","74.56%","138",null,"20","1.41%",null,null,null,null,null,this.div.form);
            obj.set_taborder("10");
            obj.set_textAlign("right");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static27","0%","159",null,"5","0.35%",null,null,null,null,null,this.div.form);
            obj.set_taborder("43");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Calendar("cal_pwdChangeDate","23.71%","138",null,"20","52.58%",null,null,null,null,null,this.div.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("essential");
            obj.set_enable("false");
            obj.set_font("9pt \"굴림\"");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static32","0%","55",null,"5","-1.77%",null,null,null,null,null,this.div.form);
            obj.set_taborder("20");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static34","51.94%","190",null,"20","27.03%",null,null,null,null,null,this.div.form);
            obj.set_taborder("44");
            obj.set_text("기본언어");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_tooltiptext("DEFAULTLANGUAGETYPE");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cbo_languagetype","74.56%","190",null,"20","1.41%",null,null,null,null,null,this.div.form);
            obj.set_taborder("14");
            obj.set_displayrowcount("20");
            obj.set_type("filter");
            obj.set_font("9pt \"Dotum\"");
            obj.set_codecolumn("C,LanguageType,SEL,Y,Y");
            obj.set_index("-1");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static37","0%","185",null,"5","0.71%",null,null,null,null,null,this.div.form);
            obj.set_taborder("45");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static02","0%","235",null,"5","1.06%",null,null,null,null,null,this.div.form);
            obj.set_taborder("46");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static09","4","112",null,"20","78.41%",null,null,null,null,null,this.div.form);
            obj.set_taborder("47");
            obj.set_text("사내번호");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_tooltiptext("INHOUSEOSP");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_cmpnPhnNo","23.71%","112",null,"20","52.39%",null,null,null,null,null,this.div.form);
            obj.set_taborder("7");
            obj.set_enable("true");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static18","52.04%","112",null,"21","27.08%",null,null,null,null,null,this.div.form);
            obj.set_taborder("48");
            obj.set_text("휴대전화");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_tooltiptext("PHONENUMBER");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_mbphNo","74.56%","112",null,"20","1.41%",null,null,null,null,null,this.div.form);
            obj.set_taborder("8");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static29","0%","209",null,"5","1.06%",null,null,null,null,null,this.div.form);
            obj.set_taborder("49");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cbo_lockYn","74.56%","214",null,"20","1.41%",null,null,null,null,null,this.div.form);
            obj.set_taborder("16");
            obj.set_enable("false");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_font("9pt \"Dotum\"");
            var div_form_cbo_lockYn_innerdataset = new nexacro.NormalDataset("div_form_cbo_lockYn_innerdataset", obj);
            div_form_cbo_lockYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(div_form_cbo_lockYn_innerdataset);
            this.div.addChild(obj.name, obj);

            obj = new Static("Static01_00","4","164",null,"20","78.41%",null,null,null,null,null,this.div.form);
            obj.set_taborder("50");
            obj.set_text("부서코드");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_tooltiptext("F4C715B5608D4831897B68B35D5830F9");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_deptCd","23.72%","164",null,"20","52.57%",null,null,null,null,null,this.div.form);
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_deptCd_nm","54.49%","164",null,"20","1.34%",null,null,null,null,null,this.div.form);
            obj.set_taborder("51");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static30_00","4","214",null,"20","78.45%",null,null,null,null,null,this.div.form);
            obj.set_taborder("52");
            obj.set_text("사용자상태");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_visible("true");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_tooltiptext("8DA6BF5D6AD24551996F97951AE07180");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static34_00","51.59%","214",null,"20","27.03%",null,null,null,null,null,this.div.form);
            obj.set_taborder("53");
            obj.set_text("잠김여부");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_tooltiptext("LOCKING");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static15_00","4","240",null,"20","78.45%",null,null,null,null,null,this.div.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("사용여부");
            obj.set_tooltiptext("USAGESTATUS");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cbo_useYn","23.71%","240",null,"20","51.82%",null,null,null,null,null,this.div.form);
            obj.set_taborder("17");
            obj.set_cssclass("essential");
            obj.set_codecolumn("C,UseYn,SEL,Y,Y");
            obj.set_font("9pt \"Dotum\"");
            obj.set_index("0");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cbo_userstate","23.71%","214",null,"20","51.82%",null,null,null,null,null,this.div.form);
            obj.set_taborder("15");
            obj.set_cssclass("essential");
            obj.set_codecolumn("C,UserState,,Y,N");
            obj.set_font("9pt \"Dotum\"");
            obj.set_index("0");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static02_00","1.77%","260",null,"5","-0.71%",null,null,null,null,null,this.div.form);
            obj.set_taborder("55");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Div("div_selectComp","23.71%","266",null,"19","51.82%",null,null,null,null,null,this.div.form);
            obj.set_taborder("19");
            obj.set_url("common::com_multiCombo.xfdl");
            obj.set_text("사이트권한");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static15_00_00","2","265",null,"20","78.39%",null,null,null,null,null,this.div.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("사이트권한");
            obj.set_tooltiptext("SITETYPE");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cbo_CLPS_CD","23.71%","86",null,"20","52.20%",null,null,null,null,null,this.div.form);
            obj.set_taborder("5");
            obj.set_cssclass("essential");
            obj.set_codecolumn("C,HRAbilCode,SEL,Y,Y");
            obj.set_font("9pt \"Dotum\"");
            obj.set_type("filter");
            obj.set_index("0");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cbo_JIKWI_CD","74.38%","86",null,"20","1.34%",null,null,null,null,null,this.div.form);
            obj.set_taborder("6");
            obj.set_displayrowcount("20");
            obj.set_type("filter");
            obj.set_font("9pt \"Dotum\"");
            obj.set_codecolumn("C,HRPostCode,SEL,Y,Y");
            obj.set_index("-1");
            this.div.addChild(obj.name, obj);

            obj = new Button("btn_deptCd","48.18%","164",null,"20","46.08%",null,null,null,null,null,this.div.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_finder");
            obj.set_tooltiptext("Toolbar_Search");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static34_00_00","50.67%","239",null,"20","26.96%",null,null,null,null,null,this.div.form);
            obj.set_taborder("57");
            obj.set_text("퇴직일");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_tooltiptext("RETIREDATE");
            this.div.addChild(obj.name, obj);

            obj = new Calendar("cal_retrDate","74.38%","239",null,"20","1.34%",null,null,null,null,null,this.div.form);
            obj.set_taborder("18");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("essential");
            obj.set_enable("true");
            obj.set_font("9pt \"굴림\"");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","1.34%","285",null,"5","0.00%",null,null,null,null,null,this.div.form);
            obj.set_taborder("58");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static15_00_00_00","28","292",null,"20","78.39%",null,null,null,null,null,this.div.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("비고");
            obj.set_tooltiptext("DESCRIPTION");
            this.div.addChild(obj.name, obj);

            obj = new TextArea("txa_desc","23.71%","291",null,"42","1.34%",null,null,null,null,null,this.div.form);
            obj.set_taborder("60");
            this.div.addChild(obj.name, obj);

            obj = new Grid("grd_cmdUsers","0","120",null,null,"div:5","4",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_cmdUsers");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"73\"/><Column size=\"68\"/><Column size=\"66\"/><Column size=\"71\"/><Column size=\"71\"/><Column size=\"71\"/><Column size=\"71\"/><Column size=\"71\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"시용자ID\" tooltiptext=\"EA03424BB6C54D5689162718A6304B9F\"/><Cell col=\"1\" text=\"사용자명\" tooltiptext=\"CB3FF311849E468A8DCDA121093F00B9\"/><Cell col=\"2\" text=\"부서\" tooltiptext=\"F4C715B5608D4831897B68B35D5830F9\"/><Cell col=\"3\" text=\"사용여부\" tooltiptext=\"USAGESTATUS\"/><Cell col=\"4\" text=\"수정자\" tooltiptext=\"USAGESTATUS\"/><Cell col=\"5\" text=\"수정일\" tooltiptext=\"USAGESTATUS\"/><Cell col=\"6\" text=\"생성자\" tooltiptext=\"USAGESTATUS\"/><Cell col=\"7\" text=\"생성일\" tooltiptext=\"USAGESTATUS\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" text=\"bind:USER_ID\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:USER_NM\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:DEPT_NM\" textAlign=\"left\"/><Cell col=\"3\" displaytype=\"combo\" text=\"bind:USE_YN\" combocodecol=\"C,CMD_HFFC_STTUS,SEL,Y,Y\"/><Cell col=\"4\" displaytype=\"combo\" text=\"bind:LAST_UPDATED_BY\" combocodecol=\"C,CMD_HFFC_STTUS,SEL,Y,Y\"/><Cell col=\"5\" displaytype=\"combo\" text=\"bind:LAST_UPDATE_DATE\" combocodecol=\"C,CMD_HFFC_STTUS,SEL,Y,Y\"/><Cell col=\"6\" displaytype=\"combo\" text=\"bind:CREATED_BY\" combocodecol=\"C,CMD_HFFC_STTUS,SEL,Y,Y\"/><Cell col=\"7\" displaytype=\"combo\" text=\"bind:CREATION_DATE\" combocodecol=\"C,CMD_HFFC_STTUS,SEL,Y,Y\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add01",null,"95","67","20","80",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("행추가");
            obj.set_cssclass("btn_DR_GridPlus");
            obj.set_tooltiptext("GridAdd");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del01",null,"95","67","20","10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_DR_GridMinus");
            obj.set_tooltiptext("GridDelete");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"0","60","20","141",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_DR_GridSearch");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("Toolbar_Search");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear1",null,"0","60","20","76",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("초기화");
            obj.set_cssclass("btn_DR_GridReset");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.addChild(obj.name, obj);

            obj = new Static("Static78","0%","21",null,"9","1.09%",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","13",null,"369","10",null,"-10",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","13",null,"369","20",null,"-30",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("페이징처리영역");
            obj.set_visible("false");
            obj.set_background("lightskyblue");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Div("div_page","43",null,"522","20",null,"-30",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_url("common::com_paging.xfdl");
            obj.set_background("transparent");
            obj.set_color("rgba(68,68,68,1)");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","13",null,"369","10",null,"-40",null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("9pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pwdInit",null,"0","117","20","206",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("비밀번호 초기화");
            obj.set_cssclass("btn_DR_GridReset");
            obj.set_tooltiptext("INITPASSWORD");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pwdUnlock",null,"0","117","20","328",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("로그인 잠금 해제");
            obj.set_cssclass("btn_DR_GridReset");
            obj.set_enable("true");
            obj.set_tooltiptext("UNLOCKLOGIN");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt","113","78",null,"34","663",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","10","6","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_searchOpen");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","40","6","145","24",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("업무화면명(자동)");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.name,\"MENU_NM\")");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:2","6","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WF_favorite");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,637,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item5","div_search.edt_deptNm","value","ds_EapInvoicesAll","VAT_REGISTRATION_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_search.form.edt_userNm","value","ds_EapInvoicesAll","VAT_REGISTRATION_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_menu.edt_userId","value","ds_cmdUsers","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_menu.edt_userAcnt","value","ds_cmdUsers","USER_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_menu.edt_userPwd","value","ds_cmdUsers","USER_PWD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_menu.edt_userNm","value","ds_cmdUsers","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_menu.edt_emailAddr","value","ds_cmdUsers","EMAIL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_menu.cbo_useYn","value","ds_cmdUsers","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_menu.edt_pwdErrCnt","value","ds_cmdUsers","PWD_ERR_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_menu.cal_pwdChangeDate","value","ds_cmdUsers","PWD_CHANGE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_menu.edt_empNo","value","ds_cmdUsers","EMP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_menu.cbo_clpsCd","value","ds_cmdUsers","CLPS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_menu.cbo_jikwiCd","value","ds_cmdUsers","JIKWI_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_menu.cbo_hffcSttusCd","value","ds_cmdUsers","HFFC_STTUS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_menu.cbo_userGubunCd","value","ds_cmdUsers","USER_GUBUN_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div.form.edt_id","value","ds_cmdUsers","ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div.form.edt_userId","value","ds_cmdUsers","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div.form.edt_userPwd","value","ds_cmdUsers","USER_PWD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div.form.edt_userNm","value","ds_cmdUsers","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div.form.edt_emailAddr","value","ds_cmdUsers","EMAIL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div.form.cal_pwdChangeDate","value","ds_cmdUsers","PWD_CHANGE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div.form.edt_pwdErrCnt","value","ds_cmdUsers","PWD_ERR_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div.form.cbo_plantid","value","ds_cmdUsers","PLANTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div.form.cbo_languagetype","value","ds_cmdUsers","LANGUAGETYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div.form.edt_cmpnPhnNo","value","ds_cmdUsers","CMPN_PHN_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div.form.edt_mbphNo","value","ds_cmdUsers","MBPH_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div.form.edt_deptCd","value","ds_cmdUsers","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div.form.edt_deptCd_nm","value","ds_cmdUsers","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div.form.cbo_useYn","value","ds_cmdUsers","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div.form.cbo_userstate","value","ds_cmdUsers","USERSTATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div.form.cbo_CLPS_CD","value","ds_cmdUsers","CLPS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div.form.cbo_JIKWI_CD","value","ds_cmdUsers","JIKWI_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_search.form.edt_deptNm","value","ds_EapInvoicesAll","VAT_REGISTRATION_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div.form.cal_retrDate","value","ds_cmdUsers","RETR_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div.form.txa_desc","value","ds_cmdUsers","DESCRIPTION");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_multiCombo.xfdl");
            this._addPreloadList("fdl","common::com_paging.xfdl");
        };
        
        // User Script
        this.registerScript("CMSY01100M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 메뉴 관리
         * 파일명 		: cmsy01100.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2017.03.18
         *
         * 설  명		: 공통코드 조회/수정/삭제/엑셀다운로드 기능 제공
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2017.09.16	진성하   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include(필수)
         ***************************************************************************/
        // include "lib::comLib.xjs";
        // include "cuslib::nbdfComLib.xjs";

        // var gfnXjs = new GfnXjs();

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.fv_currDate;

        /**************************************************************************
         * 3. FORM 정의
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	// 엔터키 설정 함수(조회)
        	this.gfn_setEnterSearch(this.div_search, "nfn_search");
        	//this.div_page.set_visible(true);

        	// paging
        	//this.fn_paging_onload(obj);
        	// paging end

        //	alert(this.nfn_getDictionaryname('YPEInspClassChemicalInspection'));

        	this.div.form.div_selectComp.form.fn_init_multicombo_data(this.ds_multiSite);
        	this.div.form.div_selectComp.form.ds_initData.applyChange();

        	this.div.form.btn_deptCd.set_enable(false);

        };


        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	if (this.isValidObject(obj))
        	{
        		//this.page = 1;
        		//this.div_page.form.setCurrentPage(this.page);
        	}
        	this.ds_cmdUsers.clearData();

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "USER_ID", this.div_search.form.edt_userId.value);
        	this.ds_search.setColumn(0, "USER_NM", this.div_search.form.edt_userNm.value);
        	this.ds_search.setColumn(0, "PLANTID", this.div_search.form.cbo_plantid.value);
        	this.ds_search.setColumn(0, "DEPT_NM", this.div_search.form.edt_deptNm.value);
        	//this.ds_search.setColumn(0, "PAGE_NUMBER", this.page);
        	//this.ds_search.setColumn(0, "PAGE_SIZE", this.LIST_COUNT);

        	var sSvcID = "selectCmdUsersList";
        	var sController = "/cmsy01100/selectCmdUsersList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_cmdUsers=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectCmdUsersList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	var bOK = this.gfn_Message("InfoPopupSave", null, "conf", "yesno");//nexacro.getApplication().confirm("저장하시겠습니까?");
        	if (bOK == false)
        	{
        		return;
        	}

        	var component = this.div;
        	var strColIdList = "edt_userId,edt_userPwd,edt_userNm";
        	var strColNmList = "USERID,PASSWORD,10B96D1653054FC48054A31BF0D766EA";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        	if (rtn == false) return;
        	for(var i=0; i<this.div.form.div_selectComp.form.ds_initData.rowcount; i++){
        		var chk = this.div.form.div_selectComp.form.ds_initData.getColumn(i,"CHK");
        		var code = this.div.form.div_selectComp.form.ds_initData.getColumn(i,"CODE");
        		var nRow = this.ds_multiSite.findRow("CODE",code);
        		if(chk == this.ds_multiSite.getColumn(nRow,"CHK")) continue;
        		this.ds_multiSite.setColumn(nRow,"CHK",chk);
        		this.ds_multiSite.setColumn(nRow,"USER_ID",this.div.form.edt_userId.value);
        	}
        	if (!this.gfn_dsIsUpdated(this.ds_cmdUsers) && !this.gfn_dsIsUpdated(this.ds_multiSite))
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");
        		return;
        	}

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID = "saveCmdUsers";
        	var sController = "/cmsy01100/saveCmdUsers.do";
        	var sInDatasets = "INPUT=ds_cmdUsers:U INPUT2=ds_multiSite:U";
        	var sOutDatasets = "ds_result=output";

        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "saveCmdUsers");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
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
        		if (trId == "selectCmdUsersList")
        		{
        			//this.div_page.set_visible(true);
        			//this.div_page.form.setPage(this.ds_cmdUsers.getColumn(0, "TOTAL_ROWS"));
        			var cnt = this.ds_cmdUsers.getColumn(0, "TOTAL_ROWS");
        			if(this.gfn_isNull(cnt)) cnt =0;
        			this.sta_cnt.set_text("Count : " + '<fc v="#f31d24">'+cnt+'</fc>')
        		}
        		else if (trId == "saveCmdUsers")
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");

        			if (this.gfn_isNull(this.ds_cmdUsers.getColumn(this.ds_cmdUsers.rowposition, "ID"))
        				 && !this.gfn_isNull(this.ds_result.getColumn(0, "ID")))
        			{
        				this.ds_cmdUsers.setColumn(this.ds_cmdUsers.rowposition, "ID", this.ds_result.getColumn(0, "ID"));
        				this.ds_cmdUsers.applyChange();
        			}

        			this.div.form.div_selectComp.form.ds_initData.applyChange();

        			this.ds_search.clearData();
        			this.ds_search.addRow();
        			this.ds_search.setColumn(0, "USER_ID", this.ds_cmdUsers.getColumn(this.ds_cmdUsers.rowposition,"USER_ID"));

        			var sSvcID = "selectCmdPlantList";
        			var sController = "/cmsy01100/selectCmdPlantList.do";
        			var sInDatasets = "INPUT=ds_search";
        			var sOutDatasets = "ds_cmdPlantuser=output";
        			var sArgs = "";
        			sArgs += this.gfn_setParam("method", "selectCmdPlantList");
        			this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        		}
        		else if (trId == "updateCmdUsersPwdInit")
        		{
        			this.gfn_Message("ProcessingSuccess", null, "info", "ok"); //정상적으로 처리되었습니다.
        		}
        		else if (trId == "updateCmdUsersPwdUnlock")
        		{
        			this.gfn_Message("ProcessingSuccess", null, "info", "ok"); //정상적으로 처리되었습니다.
        		}
        		else if (trId == "selectCmdPlantList")
        		{
        			this.div.form.div_selectComp.form.fn_init_multicombo_data(this.ds_multiSite);
        			this.div.form.div_selectComp.form.ds_initData.applyChange();
        			for(var i=0; i<this.ds_cmdPlantuser.rowcount; i++){
        				var chk  = this.ds_cmdPlantuser.getColumn(i,"VALIDSTATE");
        				var nRow = this.div.form.div_selectComp.form.ds_initData.findRow("CODE",this.ds_cmdPlantuser.getColumn(i,"PLANTID"));
        				this.div.form.div_selectComp.form.ds_initData.setColumn(nRow,"CHK",chk);
        				this.div.form.div_selectComp.form.pdiv_data_btn_select_data_onclick();
        			}
        		}
        		if (trId == "selectEcmLookupValuesVList2ds_CSiteType")
        		{
        			this.div_search.form.cbo_plantid.set_index(0);
        		}
        	}
        };

        /**************************************************************************
         * 6. 팝업 시작
         **************************************************************************/
        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "SEARCH_DEPT")
        	{
        		var nRow = this.ds_cmdUsers.rowposition;

        		this.ds_cmdUsers.setColumn(nRow, "DEPT_CD", rtn[0]);
        		this.ds_cmdUsers.setColumn(nRow, "DEPT_NM", rtn[1]);
        	}

        }



        /**************************************************************************
         * 7. 기타 함수 시작
         **************************************************************************/
        this.fn_paging_onload = function (obj)
        {
        	this.page = Eco.XComp.getUserProperty(obj, "pageNum"); //페이지 넘버 클릭시 페이지 값 전달위한 프로퍼티 세팅,
        	if (Eco.isEmpty(this.page))
        	{
        		this.page = 1;
        	}
        	// 값이 null 일때 1페이지
        	this.div_page.form.initPaging(this.LIST_COUNT, this.PAGE_COUNT, this.onChangePage, this); //디비전 속 페이지
        	this.div_page.form.setCurrentPage(this.page); //디비전 속 페이지
        };

        /* 조회시 항상 1페이지 호출 */
        this.fn_setPageInit = function ()
        {
        	this.page = 1;
        	this.div_page.form.initPaging(this.LIST_COUNT, this.PAGE_COUNT, this.onChangePage, this);
        };

        /* 페이지 변경 시 호출됨 */
        this.onChangePage = function (page)
        {
        	Eco.XComp.setUserProperty(this, "pageNum", page);
        	this.page = page;
        	this.div_page.form.setCurrentPage(page);
        	this.fn_search();
        };
        /*
        this.fn_reloadJobComp = function ()
        {
        	this.ds_multiCompanyCd.clearData();

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "USER_ID", this.ds_cmdUsers.getColumn(this.ds_cmdUsers.rowposition, "USER_ID"));

        	this.ds_cmdUserCompanyMpng.clearData();
        	var sSvcID = "selectCmdUserCompanyMpngListMulti";
        	var sController = "/cmsy01700/selectCmdUserCompanyMpngListMulti.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_multiCompanyCd=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectCmdUserCompanyMpngListMulti");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false, "");
        };
        */
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.btn_add_onclick = function (obj, e)
        {
        	var rowtype = this.ds_cmdUsers.getRowType(this.ds_cmdUsers.rowposition);
        	var nRow = this.ds_cmdUsers.addRow();
        	this.ds_cmdUsers.setColumn(nRow, "USE_YN", "Y");
        	this.ds_cmdUsers.setColumn(nRow, "USER_PWD", "6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"); //1111
        };

        this.btn_del_onclick = function (obj, e)
        {
        	if (this.ds_cmdUsers.getRowType(this.ds_cmdUsers.rowposition) == 2)
        	{
        		this.ds_cmdUsers.deleteRow(this.ds_cmdUsers.rowposition);
        	}
        	else
        	{
        		this.gfn_Message("changeInvalid", null, "info", "ok");
        		//this.alert("기등록된 메시지정보는 삭제하실 수 없습니다!! 유효상태를 'Invalid'으로 하시기 바랍니다!!");
        	}
        };

        this.grd_cmdUsers_onselectchanged = function (obj, e)
        {
        	this.grd_cmdUsers.set_enableevent(false);
        	var rowtype = this.ds_cmdUsers.getRowType(e.oldrow);
        	var rowtypeselected = this.ds_cmdUsers.getRowType(e.row);

        	if (nexacro.getApplication().gv_runMode != "prod")
        	{
        		this.btn_pwdInit.set_enable(true);
        		this.btn_pwdUnlock.set_enable(true);
        	}
        	if(rowtypeselected == 2){
        		this.div.form.edt_userId.set_enable(true);
        	}else{
        		this.div.form.edt_userId.set_enable(false);
        	}

        	if ((rowtypeselected == 4 || rowtypeselected == 1))
        	{
        		this.btn_pwdInit.set_enable(true);
        	}
        	else
        	{
        		this.btn_pwdInit.set_enable(false);
        	}
        	if (nexacro.getApplication().gv_runMode != "prod")
        	{
        		this.btn_pwdInit.set_enable(true);
        	}

        	if (parseInt(this.ds_cmdUsers.getColumn(e.row, "PWD_ERR_CNT")) >= 5)
        	{
        		this.div.form.cbo_lockYn.set_value("Y");
        		this.btn_pwdUnlock.set_enable(true);
        	}
        	else
        	{
        		this.div.form.cbo_lockYn.set_value("N");
        		this.btn_pwdUnlock.set_enable(false);
        	}

        	this.grd_cmdUsers.set_enableevent(true);
        	//this.fn_reloadJobComp();
        	if(e.row<0) return;
        	this.div.form.btn_deptCd.set_enable(true);
        	/*
        	if(this.gfn_isNull(this.div.form.cbo_CLPS_CD.text)){
        		this.div.form.cbo_CLPS_CD.set_text(this.ds_cmdUsers.getColumn(e.row,"CLPS_CD"));
        	}
        	if(this.gfn_isNull(this.div.form.cbo_JIKWI_CD.text)){
        		trace("sss-->"+this.ds_cmdUsers.getColumn(e.row,"JIKWI_CD"))
        		this.div.form.cbo_JIKWI_CD.set_text(this.ds_cmdUsers.getColumn(e.row,"JIKWI_CD"));
        	}
        	*/
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "USER_ID", this.ds_cmdUsers.getColumn(e.row,"USER_ID"));

        	var sSvcID = "selectCmdPlantList";
        	var sController = "/cmsy01100/selectCmdPlantList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_cmdPlantuser=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectCmdPlantList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };



        this.div_search_btn_clear1_onclick = function (obj, e)
        {
        	this.reload();
        };

        this.div_cbo_deptCd_onitemchanged = function (obj, e)
        {
        	var userBlgCd = this.ds_cmdDepts.lookup("DEPT_CD", e.postvalue, "USER_BLG_CD");
        	this.ds_cmdUsers.setColumn(this.ds_cmdUsers.rowposition, "USER_BLG_CD", userBlgCd);
        };

        this.btn_pwdInit_onclick = function (obj, e)
        {
        	//var bOK = nexacro.getApplication().confirm("비밀번호를 초기화하시겠습니까?");
        	var bOK = this.gfn_Message("PASSWORDFORGOTCONFIRM", null, "conf", "yesno");
        	if (bOK == false)
        	{
        		return;
        	}

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID = "updateCmdUsersPwdInit";
        	var sController = "/cmsy01100/updateCmdUsersPwdInit.do";
        	var sInDatasets = "";
        	var sOutDatasets = "";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("USER_ID", this.ds_cmdUsers.getColumn(this.ds_cmdUsers.rowposition, "USER_ID"));
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.btn_pwdUnlock_onclick = function (obj, e)
        {
        	//var bOK = nexacro.getApplication().confirm("비밀번호 오류 잠금해제 하시겠습니까?");//UnLockPassword
        	var bOK = this.gfn_Message("UnLockPassword", null, "conf", "yesno");
        	if (bOK == false) return;


        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID = "updateCmdUsersPwdUnlock";
        	var sController = "/cmsy01100/updateCmdUsersPwdUnlock.do";
        	var sInDatasets = "";
        	var sOutDatasets = "";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("USER_ID", this.ds_cmdUsers.getColumn(this.ds_cmdUsers.rowposition, "USER_ID"));
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };



        this.div_cbo_plantid_onitemchanged = function(obj,e)
        {
        	var nRow = this.div.form.div_selectComp.form.ds_initData.findRow("CODE",e.postvalue);
        	this.div.form.div_selectComp.form.ds_initData.setColumn(nRow,"CHK","1");
        	this.div.form.div_selectComp.form.pdiv_data_btn_select_data_onclick();
        };

        this.div_btn_deptCd_onclick = function(obj,e)
        {
        	var popupId = "SEARCH_DEPT";
        	var oArg = {};
        	oArg.arg_type = "B";
        	oArg.arg_popupCd = "P00210";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "DEPT_CD|DEPT_NM";
        	oArg.arg_paramCols = "";
        	oArg.arg_paramValues = "";
        	oArg.arg_searchStr = "";

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_search.form.cbo_plantid.addEventHandler("onitemchanged",this.div_cbo_deptCd_onitemchanged,this);
            this.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.Static02.addEventHandler("onclick",this.Static10_onclick,this);
            this.div.form.cbo_plantid.addEventHandler("onitemchanged",this.div_cbo_plantid_onitemchanged,this);
            this.div.form.cbo_languagetype.addEventHandler("onitemchanged",this.div_cbo_deptCd_onitemchanged,this);
            this.div.form.cbo_useYn.addEventHandler("onitemchanged",this.div_cbo_companyCd_onitemchanged,this);
            this.div.form.cbo_userstate.addEventHandler("onitemchanged",this.div_cbo_companyCd_onitemchanged,this);
            this.div.form.cbo_CLPS_CD.addEventHandler("onitemchanged",this.div_cbo_plantid_onitemchanged,this);
            this.div.form.cbo_JIKWI_CD.addEventHandler("onitemchanged",this.div_cbo_deptCd_onitemchanged,this);
            this.div.form.btn_deptCd.addEventHandler("onclick",this.div_btn_deptCd_onclick,this);
            this.grd_cmdUsers.addEventHandler("onselectchanged",this.grd_cmdUsers_onselectchanged,this);
            this.btn_add01.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_del01.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.btn_clear1.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.Static18.addEventHandler("onclick",this.Static18_onclick,this);
            this.btn_pwdInit.addEventHandler("onclick",this.btn_pwdInit_onclick,this);
            this.btn_pwdUnlock.addEventHandler("onclick",this.btn_pwdUnlock_onclick,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("CMSY01100M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
