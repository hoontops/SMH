(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMSY01800M");
            this.set_titletext("부서관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,637);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmdDepts", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_BLG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO_SP\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_NO\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_NO_SP\" type=\"STRING\" size=\"256\"/><Column id=\"AC_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"AC_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COUNSEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_TRANS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAY_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"ROWID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_yn", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"desc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col><Col id=\"desc\">Y</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"desc\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_drbmVwAcDept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","30",null,"43","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchBg");
            obj.set_background("rgba(247,247,247,1)");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_deptNm","94","10","140","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00","17","10","73","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("19");
            obj.set_text("부서명");
            obj.set_cssclass("sta_WF_subTitle");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static03","10.68%","56",null,"43","88.22%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("22");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static13","0%","0",null,"10","0%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("23");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static07","84","0","10",null,null,"0",null,null,null,null,this.div_search.form);
            obj.set_taborder("28");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","0%","-1",null,"43","97.8%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("34");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","0%","88","140","21",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("부서정보");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_border("0px none rgba(51,51,51,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"0","60","21","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_DR_GridSave");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("저장");
            this.addChild(obj.name, obj);

            obj = new Static("Static06",null,"28","10","42","10",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","98.91%","0",null,"1856","0%",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","0%","109",null,"10","87.17%",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_cmdDepts","0%","119",null,null,"52.07%","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_cmdDepts");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/><Column size=\"162\"/><Column size=\"95\"/><Column size=\"90\"/><Column size=\"125\"/><Column size=\"60\"/><Column size=\"1\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"부서코드\"/><Cell col=\"1\" text=\"부서명\"/><Cell col=\"2\" text=\"회사\"/><Cell col=\"3\" text=\"사용자소속\"/><Cell col=\"4\" text=\"회계부서\"/><Cell col=\"5\" text=\"사용여부\"/><Cell col=\"6\"/></Band><Band id=\"body\"><Cell edittype=\"none\" text=\"bind:DEPT_CD\"/><Cell col=\"1\" edittype=\"none\" text=\"bind:DEPT_NM\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:COMPANY_CD\" combocodecol=\"C,CMD_USER_COMPANY,SEL,Y,N\"/><Cell col=\"3\" displaytype=\"combo\" text=\"bind:USER_BLG_CD\" combocodecol=\"C,DRBM_USER_BLG_CD,SEL,Y,N\"/><Cell col=\"4\" displaytype=\"combo\" text=\"bind:AC_DEPT\" combodataset=\"ds_drbmVwAcDept\" combocodecol=\"DEPT_CODE\" combodatacol=\"DEPT_NAME\"/><Cell col=\"5\" text=\"bind:USE_YN\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:ROWID\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"94","60","21","75",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("행추가");
            obj.set_cssclass("btn_DR_GridPlus");
            obj.set_tooltiptext("행추가");
            this.addChild(obj.name, obj);

            obj = new Div("div","48.37%","119",null,"198","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_border("1px solid rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_deptCd","21.38%","10",null,"21","52.48%",null,null,null,null,null,this.div.form);
            obj.set_taborder("1");
            obj.set_cssclass("essential");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static05","0","10",null,"21","80.78%",null,null,null,null,null,this.div.form);
            obj.set_taborder("0");
            obj.set_text("부서코드");
            obj.set_cssclass("sta_WF_Label2");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static16","0%","0",null,"10","-3.24%",null,null,null,null,null,this.div.form);
            obj.set_taborder("40");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static12","0%",null,null,"5","-3.24%","-15",null,null,null,null,this.div.form);
            obj.set_taborder("44");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static25","47.52%","0","10","196",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("45");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static28","68.9%","0",null,null,"28.94%","0",null,null,null,null,this.div.form);
            obj.set_taborder("46");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static13","19.22%","0",null,null,"78.62%","-15",null,null,null,null,this.div.form);
            obj.set_taborder("47");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static03","49.68%","10",null,"21","31.1%",null,null,null,null,null,this.div.form);
            obj.set_taborder("2");
            obj.set_text("부서명");
            obj.set_cssclass("sta_WF_Label2");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_deptNm","71.06%","10",null,"21","2.81%",null,null,null,null,null,this.div.form);
            obj.set_taborder("3");
            obj.set_cssclass("essential");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static10","0%","31",null,"5","-0.65%",null,null,null,null,null,this.div.form);
            obj.set_taborder("57");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00","0","36",null,"21","80.78%",null,null,null,null,null,this.div.form);
            obj.set_taborder("4");
            obj.set_text("회사");
            obj.set_cssclass("sta_WF_Label2");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cbo_deptCd","21.38%","36",null,"21","52.48%",null,null,null,null,null,this.div.form);
            obj.set_taborder("5");
            obj.set_cssclass("essential");
            obj.set_codecolumn("C,CMD_USER_COMPANY,SEL,Y,Y");
            obj.set_font("9pt \"Dotum\"");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static04","49.68%","36",null,"21","31.1%",null,null,null,null,null,this.div.form);
            obj.set_taborder("6");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label2");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cbo_useYn","71.06%","36",null,"21","2.81%",null,null,null,null,null,this.div.form);
            obj.set_taborder("7");
            obj.set_cssclass("essential");
            obj.set_innerdataset("ds_yn");
            obj.set_codecolumn("code");
            obj.set_datacolumn("desc");
            obj.set_font("9pt \"Dotum\"");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static01","0","62",null,"21","80.78%",null,null,null,null,null,this.div.form);
            obj.set_taborder("8");
            obj.set_text("사용자소속");
            obj.set_cssclass("sta_WF_Label2");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static02","0","114",null,"21","80.35%",null,null,null,null,null,this.div.form);
            obj.set_taborder("16");
            obj.set_text("회계부서");
            obj.set_cssclass("sta_WF_Label2");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cbo_acDept","21.38%","114",null,"21","52.48%",null,null,null,null,null,this.div.form);
            obj.set_taborder("17");
            obj.set_innerdataset("ds_drbmVwAcDept");
            obj.set_codecolumn("DEPT_CODE");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_type("dropdown");
            obj.set_autoselect("false");
            obj.set_font("9pt \"Dotum\"");
            obj.set_index("-1");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static06","0.22%","57",null,"5","0%",null,null,null,null,null,this.div.form);
            obj.set_taborder("67");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static07","0%","83",null,"5","0%",null,null,null,null,null,this.div.form);
            obj.set_taborder("68");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static08","0","88",null,"21","80.78%",null,null,null,null,null,this.div.form);
            obj.set_taborder("12");
            obj.set_text("부서전화번호");
            obj.set_cssclass("sta_WF_Label2");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static09","49.68%","88",null,"21","31.1%",null,null,null,null,null,this.div.form);
            obj.set_taborder("14");
            obj.set_text("부서팩스번호");
            obj.set_cssclass("sta_WF_Label2");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static11","0%","109",null,"5","0%",null,null,null,null,null,this.div.form);
            obj.set_taborder("73");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static14","230","62",null,"21","31.1%",null,null,null,null,null,this.div.form);
            obj.set_taborder("10");
            obj.set_text("부서그룹");
            obj.set_cssclass("sta_WF_Label2");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cbo_deptGroup","71.06%","62",null,"21","2.81%",null,null,null,null,null,this.div.form);
            obj.set_taborder("11");
            obj.set_codecolumn("C,CMD_DEPT_GROUP,SEL,Y,Y");
            obj.set_cssclass("essential");
            obj.set_font("9pt \"Dotum\"");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static15","49.68%","114",null,"21","31.1%",null,null,null,null,null,this.div.form);
            obj.set_taborder("18");
            obj.set_text("상담여부");
            obj.set_cssclass("sta_WF_Label2");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cbo_counselYn","71.06%","114",null,"21","2.81%",null,null,null,null,null,this.div.form);
            obj.set_taborder("19");
            obj.set_innerdataset("ds_yn");
            obj.set_codecolumn("code");
            obj.set_cssclass("essential");
            obj.set_datacolumn("desc");
            obj.set_font("9pt \"Dotum\"");
            obj.set_index("-1");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static17","0%","135",null,"5","0%",null,null,null,null,null,this.div.form);
            obj.set_taborder("78");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static18","0","140",null,"21","80.78%",null,null,null,null,null,this.div.form);
            obj.set_taborder("20");
            obj.set_text("호전환여부");
            obj.set_cssclass("sta_WF_Label2");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cbo_telTransYn","21.38%","140",null,"21","52.48%",null,null,null,null,null,this.div.form);
            obj.set_taborder("21");
            obj.set_cssclass("essential");
            obj.set_codecolumn("code");
            obj.set_innerdataset("ds_yn");
            obj.set_datacolumn("desc");
            obj.set_font("9pt \"Dotum\"");
            this.div.addChild(obj.name, obj);

            obj = new MaskEdit("mae_telNo","21.38%","88",null,"21","52.48%",null,null,null,null,null,this.div.form);
            obj.set_taborder("13");
            obj.set_type("string");
            obj.getSetter("mask").set("###########");
            obj.set_maskchar(" ");
            obj.set_trimtype("both");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            obj.set_font("9pt \"Dotum\"");
            this.div.addChild(obj.name, obj);

            obj = new MaskEdit("mae_faxNo","71.06%","88",null,"21","2.81%",null,null,null,null,null,this.div.form);
            obj.set_taborder("15");
            obj.set_type("string");
            obj.getSetter("mask").set("###########");
            obj.set_maskchar(" ");
            obj.set_trimtype("both");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            obj.set_font("9pt \"Dotum\"");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static19","49.68%","140",null,"21","31.1%",null,null,null,null,null,this.div.form);
            obj.set_taborder("22");
            obj.set_text("정렬순서");
            obj.set_cssclass("sta_WF_Label2");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_displayOrder","71.06%","140",null,"21","2.81%",null,null,null,null,null,this.div.form);
            obj.set_taborder("23");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cbo_userBlgCd","21.38%","62",null,"21","52.48%",null,null,null,null,null,this.div.form);
            obj.set_taborder("9");
            obj.set_codecolumn("C,DRBM_USER_BLG_CD,SEL,Y,Y");
            obj.set_cssclass("essential");
            obj.set_font("9pt \"Dotum\"");
            this.div.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"94","60","21","10",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_DR_GridMinus");
            obj.set_tooltiptext("행삭제");
            this.addChild(obj.name, obj);

            obj = new Static("Static78","0%","21",null,"9","1.09%",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"0","60","21","139",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_DR_GridSearch");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear1",null,"0","60","21","75",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("초기화");
            obj.set_cssclass("btn_DR_GridReset");
            obj.set_tooltiptext("초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","10","6","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_searchOpen");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","40","6","145","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("업무화면명(자동)");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.name,\"MENU_NM\")");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:2","6","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_favorite");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,637,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item5","div_search.form.edt_deptNm","cssclass","ds_result","POPUP_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div.form.edt_deptCd","value","ds_cmdDepts","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div.form.edt_deptNm","value","ds_cmdDepts","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div.form.cbo_deptCd","value","ds_cmdDepts","COMPANY_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div.form.cbo_useYn","value","ds_cmdDepts","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div.form.cbo_acDept","value","ds_cmdDepts","AC_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div.form.cbo_deptGroup","value","ds_cmdDepts","DEPT_GROUP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div.form.cbo_counselYn","value","ds_cmdDepts","COUNSEL_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div.form.cbo_telTransYn","value","ds_cmdDepts","TEL_TRANS_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div.form.mae_telNo","value","ds_cmdDepts","TEL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div.form.mae_telNo","mask","ds_cmdDepts","TEL_NO_SP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div.form.mae_faxNo","mask","ds_cmdDepts","FAX_NO_SP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div.form.mae_faxNo","value","ds_cmdDepts","FAX_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div.form.edt_displayOrder","value","ds_cmdDepts","DISPLAY_ORDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div.form.cbo_userBlgCd","value","ds_cmdDepts","USER_BLG_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CMSY01800M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 부서 관리
         * 파일명 		: cmsy01800.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2017.03.18
         *
         * 설  명		: 부서  조회/수정/삭제/엑셀다운로드 기능 제공
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

        	// this.fn_search();
        	this.ds_search.clearData();
        	this.ds_search.addRow();

        	var sSvcID = "selectDrbmVwAcDeptList";
        	var sController = "/cmsy01800/selectDrbmVwAcDeptList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_drbmVwAcDept=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectDrbmVwAcDeptList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_cmdDepts.clearData();

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "DEPT_NM", this.div_search.form.edt_deptNm.value);

        	var sSvcID = "selectCmdDeptsList";
        	var sController = "/cmsy01800/selectCmdDeptsList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_cmdDepts=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectCmdDeptsList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	var bOK = nexacro.getApplication().confirm("저장하시겠습니까?");
        	if (bOK == false)
        	{
        		return;
        	}

        	if (!this.gfn_dsIsUpdated(this.ds_cmdDepts))
        	{
        		this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}

        	var component = this.div;
        	var strColIdList = "edt_deptCd,edt_deptNm,cbo_deptCd,cbo_useYn,cbo_userBlgCd,cbo_deptGroup,cbo_counselYn,cbo_telTransYn";
        	var strColNmList = "부서코드,부서명,회사,사용여부,사용자소속,부서그룹,상담여부,호전환여부";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        	if (rtn == false)
        	{
        		return;
        	}

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID = "saveCmdDepts";
        	var sController = "/cmsy01800/saveCmdDepts.do";
        	var sInDatasets = "INPUT=ds_cmdDepts:U";
        	var sOutDatasets = "";

        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "saveCmdDepts");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 삭제
         */
        this.fn_delete = function (obj, e)
        {
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
        		if (trId == "selectCmdDeptsList")
        		{
        		}
        		else if (trId == "saveCmdDepts")
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.fn_search();
        		}
        		else if (trId == "selectDrbmVwAcDeptList")
        		{
        			this.nfn_InsSelAllInDs(this.div.form.cbo_acDept, "선택");
        			this.ds_drbmVwAcDept.filter("USE_YN!='N'");
        		}
        	}
        };

        /**************************************************************************
         * 6. 팝업 시작
         **************************************************************************/



        /**************************************************************************
         * 7. 기타 함수 시작
         **************************************************************************/


        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.btn_add_onclick = function (obj, e)
        {
        	var nRow = this.ds_cmdDepts.addRow();
        	this.ds_cmdDepts.setColumn(nRow, "COMPANY_CD", "");
        	this.ds_cmdDepts.setColumn(nRow, "USE_YN", "Y");
        	this.div.form.edt_deptCd.set_enable(true);
        };

        this.btn_del_onclick = function (obj, e)
        {
        	if (this.ds_cmdDepts.getRowType(this.ds_cmdDepts.rowposition) == 2)
        	{
        		this.ds_cmdDepts.deleteRow(this.ds_cmdDepts.rowposition);
        	}
        	else
        	{
        		this.alert("기등록된 부서는 삭제하실 수 없습니다!! 사용여부를 'N'으로 하시기 바랍니다!!");
        	}
        };

        this.div_search_btn_clear_onclick = function (obj, e)
        {
        	this.reload();
        };

        this.grd_cmdDepts_onselectchanged = function (obj, e)
        {
        	if (this.ds_cmdDepts.getRowType(e.row) == 2)
        	{
        		this.div.form.edt_deptCd.set_enable(true);
        	}
        	else
        	{
        		this.div.form.edt_deptCd.set_enable(false);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.Static02.addEventHandler("onclick",this.Static10_onclick,this);
            this.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.grd_cmdDepts.addEventHandler("onselectchanged",this.grd_cmdDepts_onselectchanged,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.div.form.Static15.addEventHandler("onclick",this.div_Static15_onclick,this);
            this.div.form.mae_telNo.addEventHandler("onsetfocus",this.nfn_telMaskFocus,this);
            this.div.form.mae_telNo.addEventHandler("onkillfocus",this.nfn_telMaskFocusKill,this);
            this.div.form.mae_faxNo.addEventHandler("onsetfocus",this.nfn_telMaskFocus,this);
            this.div.form.mae_faxNo.addEventHandler("onkillfocus",this.nfn_telMaskFocusKill,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.btn_clear1.addEventHandler("onclick",this.div_search_btn_clear_onclick,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("CMSY01800M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
