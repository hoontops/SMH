(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMCM00300P");
            this.set_titletext("사용 신청");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(560,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmdUsers", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PWD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"CLPS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMPN_PHN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MBPH_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PWD_CHANGE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PWD_ERR_CNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LAST_LGN_DTM\" type=\"DATE\" size=\"256\"/><Column id=\"LAST_LGN_IP\" type=\"STRING\" size=\"256\"/><Column id=\"CREATED_BY\" type=\"STRING\" size=\"256\"/><Column id=\"CREATION_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"LAST_UPDATED_BY\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATE_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"PWD_ERR_DTM\" type=\"DATE\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"NICKNAME\" type=\"STRING\" size=\"256\"/><Column id=\"HOMEADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USERSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISEESLINK\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"AREARESPONSIBILITY\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_ROWS\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"USE_REQ_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lang", this);
            obj._setContents("<ColumnInfo><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LANG_NM\">한국어(KOR)</Col><Col id=\"LANG_CD\">ko-KR</Col></Row><Row><Col id=\"LANG_NM\">영어(ENGLISH)</Col><Col id=\"LANG_CD\">en-US</Col></Row><Row><Col id=\"LANG_NM\">중국어(CHINESE)</Col><Col id=\"LANG_CD\">zh-CN</Col></Row><Row><Col id=\"LANG_NM\">베트남어(Vietnamese)</Col><Col id=\"LANG_CD\">vi-VN</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_site", this);
            obj._setContents("<ColumnInfo><Column id=\"SITE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SITE_CD\">CCT</Col><Col id=\"SITE_NM\">CCT</Col></Row><Row><Col id=\"SITE_CD\">IFC</Col><Col id=\"SITE_NM\">IFC</Col></Row><Row><Col id=\"SITE_CD\">IFV</Col><Col id=\"SITE_NM\">IFV</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_result", this);
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ID\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_multiSite", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">CCT</Col><Col id=\"code\">CCT</Col></Row><Row><Col id=\"value\">IFC</Col><Col id=\"code\">IFC</Col></Row><Row><Col id=\"value\">IFV</Col><Col id=\"code\">IFV</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_save",null,null,"60","20","73","13",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btn_pop_yes");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("저장");
            this.addChild(obj.name, obj);

            obj = new Static("sta_poptitle","2.52%","14",null,"31","31.03%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("User Request");
            obj.set_cssclass("sta_WF_subTitle3");
            this.addChild(obj.name, obj);

            obj = new Div("div","7","50",null,"293","7",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("1px solid rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","51.63%","158",null,"21","29.07%",null,null,null,null,null,this.div.form);
            obj.set_taborder("21");
            obj.set_text("Position");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_tooltiptext("POSITION");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static07","4","132",null,"20","79.83%",null,null,null,null,null,this.div.form);
            obj.set_taborder("12");
            obj.set_text("e-Mail");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_emailAddr","21.48%","132",null,"20","0.87%",null,null,null,null,null,this.div.form);
            obj.set_taborder("6");
            obj.set_autoselect("true");
            obj.set_imemode("alpha");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_desc","21.18%","108",null,"20","0.92%",null,null,null,null,null,this.div.form);
            obj.set_taborder("5");
            obj.set_cssclass("essential");
            obj.set_enable("true");
            obj.set_autoselect("true");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static03","0.22%","108",null,"21","79.83%",null,null,null,null,null,this.div.form);
            obj.set_taborder("13");
            obj.set_text("Description");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static05","4","10",null,"20","80.57%",null,null,null,null,null,this.div.form);
            obj.set_taborder("14");
            obj.set_text("User ID");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_tooltiptext("USERID");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static16","0%","0",null,"10","-3.04%",null,null,null,null,null,this.div.form);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static17","0%","31",null,"5","-3.04%",null,null,null,null,null,this.div.form);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static10","0.00%","127",null,"5","-0.87%",null,null,null,null,null,this.div.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static11","0.00%","153",null,"5","-0.87%",null,null,null,null,null,this.div.form);
            obj.set_taborder("18");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static12","0%",null,null,"5","-3.04%","-15",null,null,null,null,this.div.form);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static13","20.09%","0",null,null,"78.17%","-15",null,null,null,null,this.div.form);
            obj.set_taborder("20");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_userId","21.62%","10",null,"20","49.78%",null,null,null,null,null,this.div.form);
            obj.set_taborder("0");
            obj.set_enable("false");
            obj.set_autoselect("true");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static01","4","158",null,"20","80.48%",null,null,null,null,null,this.div.form);
            obj.set_taborder("22");
            obj.set_text("Duty");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_tooltiptext("DUTY");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static14","0.00%","179",null,"5","0.00%",null,null,null,null,null,this.div.form);
            obj.set_taborder("23");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static23","0.00%","205",null,"5","0.00%",null,null,null,null,null,this.div.form);
            obj.set_taborder("24");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static27","0.00%","231",null,"5","0.22%",null,null,null,null,null,this.div.form);
            obj.set_taborder("25");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static32","0.00%","127",null,"5","-1.74%",null,null,null,null,null,this.div.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static34","51.63%","184",null,"20","29.07%",null,null,null,null,null,this.div.form);
            obj.set_taborder("26");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cbo_languagetype","21.18%","184",null,"20","49.54%",null,null,null,null,null,this.div.form);
            obj.set_taborder("7");
            obj.set_displayrowcount("20");
            obj.set_type("filter");
            obj.set_font("9pt \"Dotum\"");
            obj.set_innerdataset("ds_lang");
            obj.set_codecolumn("LANG_CD");
            obj.set_datacolumn("LANG_NM");
            obj.set_text("한국어(KOR)");
            obj.set_value("ko-KR");
            obj.set_index("0");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static37","0.00%","255",null,"5","0.22%",null,null,null,null,null,this.div.form);
            obj.set_taborder("27");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static18","0.00%","210",null,"21","80.48%",null,null,null,null,null,this.div.form);
            obj.set_taborder("28");
            obj.set_text("Phone Number");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_tooltiptext("PHONENUMBER");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_mbphNo","21.18%","210",null,"20","49.36%",null,null,null,null,null,this.div.form);
            obj.set_taborder("9");
            obj.set_autoselect("true");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static19_00","2.21%","234",null,"20","80.48%",null,null,null,null,null,this.div.form);
            obj.set_taborder("29");
            obj.set_text("Department");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_tooltiptext("DEPARTMENTNAME");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static07_00","3","260",null,"20","79.56%",null,null,null,null,null,this.div.form);
            obj.set_taborder("30");
            obj.set_text("Address");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_homeaddress","21.18%","260",null,"20","0.74%",null,null,null,null,null,this.div.form);
            obj.set_taborder("10");
            obj.set_autoselect("true");
            this.div.addChild(obj.name, obj);

            obj = new Button("btn_dupcheck",null,"10","67","20","8",null,null,null,null,null,this.div.form);
            obj.set_taborder("1");
            obj.set_text("중복체크");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("REDUPLICATIONCHECK");
            obj.set_visible("false");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_userPwd","21.48%","36",null,"20","49.67%",null,null,null,null,null,this.div.form);
            obj.set_taborder("2");
            obj.set_cssclass("essential");
            obj.set_enable("true");
            obj.set_password("true");
            obj.set_autoselect("true");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_userPwd2","21.48%","61",null,"20","49.67%",null,null,null,null,null,this.div.form);
            obj.set_taborder("3");
            obj.set_cssclass("essential");
            obj.set_enable("true");
            obj.set_password("true");
            obj.set_autoselect("true");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","0.87%","61",null,"21","80.48%",null,null,null,null,null,this.div.form);
            obj.set_taborder("31");
            obj.set_text("Password(OK)");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static03_00","0.87%","36",null,"21","80.48%",null,null,null,null,null,this.div.form);
            obj.set_taborder("32");
            obj.set_text("Password");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static32_00","0.00%","56",null,"5","35.36%",null,null,null,null,null,this.div.form);
            obj.set_taborder("33");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static32_00_00","0.00%","81",null,"5","35.36%",null,null,null,null,null,this.div.form);
            obj.set_taborder("34");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static32_01","0.00%","107",null,"5","-1.52%",null,null,null,null,null,this.div.form);
            obj.set_taborder("35");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_userNm","21.48%","86",null,"20","28.20%",null,null,null,null,null,this.div.form);
            obj.set_taborder("4");
            obj.set_cssclass("essential");
            obj.set_enable("true");
            obj.set_autoselect("true");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static03_01","0.22%","86",null,"21","79.83%",null,null,null,null,null,this.div.form);
            obj.set_taborder("36");
            obj.set_text("User Name");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static01_01","4","184",null,"20","80.48%",null,null,null,null,null,this.div.form);
            obj.set_taborder("37");
            obj.set_text("Language");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_tooltiptext("DEFAULTLANGUAGETYPE");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cbo_site","71.27%","184",null,"20","0.74%",null,null,null,null,null,this.div.form);
            obj.set_taborder("8");
            obj.set_displayrowcount("20");
            obj.set_type("filter");
            obj.set_font("9pt \"Dotum\"");
            obj.set_codecolumn("SITE_CD");
            obj.set_innerdataset("ds_site");
            obj.set_datacolumn("SITE_NM");
            obj.set_text("IFC");
            obj.set_value("IFC");
            obj.set_index("1");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cbo_JIKWI_CD","71.09%","158",null,"20","0.74%",null,null,null,null,null,this.div.form);
            obj.set_taborder("38");
            obj.set_displayrowcount("20");
            obj.set_type("filter");
            obj.set_font("9pt \"Dotum\"");
            obj.set_codecolumn("C,HRPostCode,SEL,Y,Y");
            obj.set_index("-1");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cbo_CLPS_CD","21.18%","158",null,"20","49.54%",null,null,null,null,null,this.div.form);
            obj.set_taborder("39");
            obj.set_cssclass("essential");
            obj.set_codecolumn("C,HRAbilCode,SEL,Y,Y");
            obj.set_font("9pt \"Dotum\"");
            obj.set_index("0");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_deptCd","21.18%","234",null,"20","55.62%",null,null,null,null,null,this.div.form);
            obj.set_taborder("40");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div.addChild(obj.name, obj);

            obj = new Button("btn_deptCd","44.94%","234",null,"20","48.43%",null,null,null,null,null,this.div.form);
            obj.set_taborder("41");
            obj.set_cssclass("btn_WF_finder");
            obj.set_tooltiptext("Toolbar_Search");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_deptCd_nm","52.30%","234",null,"20","0.74%",null,null,null,null,null,this.div.form);
            obj.set_taborder("42");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.div.addChild(obj.name, obj);

            obj = new Button("btn_close",null,null,"56","21","10","12",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("취소");
            obj.set_cssclass("btn_pop_no");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close00",null,"6","25","25","6",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",560,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_menu.edt_userId","value","ds_cmdUsers","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_menu.edt_userAcnt","value","ds_cmdUsers","USER_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_menu.edt_userPwd","value","ds_cmdUsers","USER_PWD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_menu.edt_userNm","value","ds_cmdUsers","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_menu.edt_emailAddr","value","ds_cmdUsers","EMAIL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_menu.cbo_useYn","value","ds_cmdUsers","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_menu.edt_pwdErrCnt","value","ds_cmdUsers","PWD_ERR_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_menu.cal_pwdChangeDate","value","ds_cmdUsers","PWD_CHANGE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_menu.edt_empNo","value","ds_cmdUsers","EMP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_menu.cbo_clpsCd","value","ds_cmdUsers","CLPS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_menu.cbo_jikwiCd","value","ds_cmdUsers","JIKWI_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_menu.cbo_hffcSttusCd","value","ds_cmdUsers","HFFC_STTUS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_menu.cbo_userGubunCd","value","ds_cmdUsers","USER_GUBUN_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div.form.edt_userId","value","ds_cmdUsers","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div.form.edt_desc","value","ds_cmdUsers","DESCRIPTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div.form.edt_emailAddr","value","ds_cmdUsers","EMAIL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div.form.cbo_languagetype","value","ds_cmdUsers","LANGUAGETYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div.form.edt_mbphNo","value","ds_cmdUsers","MBPH_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div.form.edt_homeaddress","value","ds_cmdUsers","HOMEADDRESS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div.form.edt_userPwd","value","ds_cmdUsers","USER_PWD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div.form.edt_userNm","value","ds_cmdUsers","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div.form.cbo_site","value","ds_cmdUsers","PLANTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div.form.cbo_JIKWI_CD","value","ds_cmdUsers","JIKWI_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div.form.cbo_CLPS_CD","value","ds_cmdUsers","CLPS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div.form.edt_deptCd","value","ds_cmdUsers","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div.form.edt_deptCd_nm","value","ds_cmdUsers","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CMCM00300P.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 사용자정보 수정
         * 파일명 		: cmsy01100.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2021.01.20
         *
         * 설  명		: 사용자정보 수정
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.01.20	진성하   	최초작성
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
        	this.ds_cmdUsers.addRow();
        	this.ds_cmdUsers.setColumn(0,"USE_REQ_YN","1");	//1.사용신청, 2.그룹웨어
        	this.ds_cmdUsers.setColumn(0,"USERSTATE","Request");
        	this.ds_cmdUsers.setColumn(0,"USE_YN","N");
        	this.ds_cmdUsers.setColumn(0,"ENTERPRISEID","INTERFLEX");

        	this.div.form.cbo_languagetype.set_index(0);
        	this.div.form.cbo_site.set_index(1);

        	var sSvcID = "selectUserIdSeqence";
        	var sController = "/cmsy01100/selectUserIdSeqence.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_result=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectUserIdSeqence");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs,"","",false);
        	this.ds_cmdUsers.setColumn(0,"ID",this.ds_result.getColumn(0,"ID"));
        	this.ds_cmdUsers.setColumn(0,"USER_ID","MES"+this.ds_result.getColumn(0,"ID"));
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	if(this.gfn_isNull(this.div.form.edt_userId.value)){
        		this.gfn_Message("EMPTYUSERID", null, "warning", "ok");
        		return;
        	}

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "USER_ID", this.div.form.edt_userId.value);
        	var sSvcID = "selectCmdUserDupCheck";
        	var sController = "/cmsy01100/selectCmdUserDupCheck.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectCmdUserDupCheck");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {

        	var pwVal1 = this.div.form.edt_userPwd.value;
        	var pwVal2 = this.div.form.edt_userPwd2.value;

        	if(pwVal1 != pwVal2)
        	{
        		this.gfn_Message("PASSWORDNOTMATCHING", null, "warning", "ok");
        		this.div.form.edt_userPwd2.setFocus();
        		return;
        	}

        	var component = this.div;
        	var strColIdList = "edt_userId,edt_userPwd,edt_userPwd2,edt_userNm,cbo_CLPS_CD,cbo_JIKWI_CD,cbo_languagetype,cbo_site,edt_mbphNo,edt_deptCd";
        	var strColNmList = "User ID,Password,Password(OK),User Name,Duty,Position,language,site,phone number,department";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        	if (rtn == false) return;

        	var bOK = this.gfn_Message("InfoPopupSave", null, "conf", "yesno");//nexacro.getApplication().confirm("사용신청 하시겠습니까?");//
        	if (bOK == false) return;

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID = "saveCmdUsers";
        	var sController = "/cmsy01100/saveCmdUsersReq.do";
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
        		if (trId == "selectCmdUserDupCheck")
        		{
        			if(this.ds_result.getColumn(0,"CNT")>0){
        				this.gfn_Message("HAVEDUPLICATEID", "", "error", "ok");

        				//alert("중복되는 ID가 존재합니다.");
        				//Your ID is duplicate.
        			}else{
        				this.gfn_Message("NOTHAVEDUPLICATEID", "", "error", "ok");
        				//alert("사용가능한 ID입니다.");
        			}
        		}
        		else if (trId == "saveCmdUsers")
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.close();

        		}
        	}
        };

        /**************************************************************************
         * 6. 팝업 시작
         **************************************************************************/
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

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.btn_close_onclick = function (obj, e)
        {
        	var rtnArray = new Array();
        	this.opener.fv_rtnValue = rtnArray;
        	this.close();
        };


        this.div_edt_userPwd_onchanged = function(obj,e)
        {
        	if(!this.nfn_isValidPassword(e.postvalue)){
        		this.gfn_Message("PASSWORDVALIDATE", "", "error", "ok");
        		obj.set_value(e.prevalue);
        		obj.setFocus();
        		return;
        	}
        };
        this.div_edt_userPwd2_onchanged = function(obj,e)
        {
        	var pwVal1 = this.div.form.edt_userPwd.value;
        	var pwVal2 = this.div.form.edt_userPwd2.value;

        	if(pwVal1 != pwVal2)
        	{
        		this.gfn_Message("PASSWORDNOTMATCHING", null, "warning", "ok");
        		obj.setFocus();
        		return;
        	}

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
            this.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div.form.btn_dupcheck.addEventHandler("onclick",this.fn_search,this);
            this.div.form.edt_userPwd.addEventHandler("onchanged",this.div_edt_userPwd_onchanged,this);
            this.div.form.edt_userPwd2.addEventHandler("onchanged",this.div_edt_userPwd2_onchanged,this);
            this.div.form.cbo_JIKWI_CD.addEventHandler("onitemchanged",this.div_cbo_deptCd_onitemchanged,this);
            this.div.form.cbo_CLPS_CD.addEventHandler("onitemchanged",this.div_cbo_plantid_onitemchanged,this);
            this.div.form.btn_deptCd.addEventHandler("onclick",this.div_btn_deptCd_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_close00.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("CMCM00300P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
