(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMSY01300M");
            this.set_titletext("권한관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,637);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmdJobAuthMng", this);
            obj._setContents("<ColumnInfo><Column id=\"DICTIONARYID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"JOB_SYS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"ISAUDIT\" type=\"STRING\" size=\"256\"/><Column id=\"DICTIONARYNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_yn", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"desc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col><Col id=\"desc\">Y</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"desc\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","30",null,"43","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchBg");
            obj.set_background("rgba(247,247,247,1)");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_authNm","110","10","140","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","73","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("19");
            obj.set_text("사용자그룹");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_tooltiptext("USERCLASSNAME");
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

            obj = new Static("Static07","100","0","10",null,null,"0",null,null,null,null,this.div_search.form);
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

            obj = new Static("Static34","257","10","45","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("사이트");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_tooltiptext("PLANT");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_plantid","310","10","128","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_codecolumn("C,SiteType,,Y,Y");
            obj.set_type("filter");
            obj.set_displayrowcount("20");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","0%","88","140","21",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_border("0px none rgba(51,51,51,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("사용자그룹");
            obj.set_tooltiptext("GRIDUSERCLASSLIST");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"0","60","20","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_DR_GridSave");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("Toolbar_Save");
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

            obj = new Static("Static03","98.91%","-6",null,"1856","0%",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static78","1.09%","16",null,"9","0%",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","0%","109",null,"10","1.09%",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_cmdJobAuthMng","0%","119",null,null,"52.07%","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_cmdJobAuthMng");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"108\"/><Column size=\"93\"/><Column size=\"94\"/><Column size=\"64\"/><Column size=\"166\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사이트\" tooltiptext=\"PLANT\"/><Cell col=\"1\" text=\"사용자그룹명\" tooltiptext=\"USERCLASSNAME\"/><Cell col=\"2\" text=\"권한시작일\" tooltiptext=\"STARTDATE\"/><Cell col=\"3\" text=\"권한종료일\" tooltiptext=\"ENDDATE\"/><Cell col=\"4\" text=\"사용여부\" tooltiptext=\"유효상태\"/><Cell col=\"5\" text=\"권한설명\" tooltiptext=\"DESCRIPTION\"/></Band><Band id=\"body\"><Cell text=\"bind:PLANTID\" combocodecol=\"C,SiteType,,Y,N\" displaytype=\"combotext\"/><Cell col=\"1\" edittype=\"none\" text=\"bind:AUTH_NM\" textAlign=\"left\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"none\" text=\"bind:AUTH_START_DATE\" mask=\"yyyy/MM/dd\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"none\" text=\"bind:AUTH_END_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"combotext\" edittype=\"none\" text=\"bind:USE_YN\" combocodecol=\"C,UseYn,SEL,Y,N\"/><Cell col=\"5\" edittype=\"none\" text=\"bind:AUTH_DESC\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"88","60","20","75",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("행추가");
            obj.set_cssclass("btn_DR_GridPlus");
            obj.set_tooltiptext("행추가");
            this.addChild(obj.name, obj);

            obj = new Div("div","48.37%","119",null,"328","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_border("1px solid rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","5","113",null,"83","79.70%",null,null,null,null,null,this.div.form);
            obj.set_taborder("10");
            obj.set_text("설명");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_font("bold 9pt \"Dotum\"");
            obj.set_textAlign("right");
            obj.set_tooltiptext("DESCRIPTION");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static07","5","87",null,"20","79.70%",null,null,null,null,null,this.div.form);
            obj.set_taborder("12");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_authNm","22.25%","35",null,"20","0.65%",null,null,null,null,null,this.div.form);
            obj.set_taborder("0");
            obj.set_cssclass("essential");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static03","52.27%","61",null,"20","28.51%",null,null,null,null,null,this.div.form);
            obj.set_taborder("15");
            obj.set_text("권한종료일");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_tooltiptext("ENDDATE");
            obj.set_textAlign("right");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00","5","61",null,"20","79.70%",null,null,null,null,null,this.div.form);
            obj.set_taborder("16");
            obj.set_text("권한시작일");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_tooltiptext("STARTDATE");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static05","5","35",null,"20","79.70%",null,null,null,null,null,this.div.form);
            obj.set_taborder("17");
            obj.set_text("사용자그룹명");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_tooltiptext("USERCLASSNAME");
            this.div.addChild(obj.name, obj);

            obj = new TextArea("txt_authDesc","22.25%","113",null,"83","0.65%",null,null,null,null,null,this.div.form);
            obj.set_taborder("3");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static16","0%","0",null,"10","-3.24%",null,null,null,null,null,this.div.form);
            obj.set_taborder("18");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static17","0.00%","56",null,"5","-3.24%",null,null,null,null,null,this.div.form);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static10","0.00%","82",null,"5","-3.24%",null,null,null,null,null,this.div.form);
            obj.set_taborder("20");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static11","0.00%","108",null,"5","-3.24%",null,null,null,null,null,this.div.form);
            obj.set_taborder("21");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static12","0%",null,null,"5","-3.24%","-15",null,null,null,null,this.div.form);
            obj.set_taborder("22");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static25","48.38%","0",null,"60","47.08%",null,null,null,null,null,this.div.form);
            obj.set_taborder("23");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static28","71.27%","0",null,"63","26.57%",null,null,null,null,null,this.div.form);
            obj.set_taborder("24");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static13","20.3%","0",null,null,"77.54%","-15",null,null,null,null,this.div.form);
            obj.set_taborder("25");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Calendar("cal_authStartDate","22.25%","61",null,"20","51.62%",null,null,null,null,null,this.div.form);
            obj.set_taborder("1");
            obj.set_cssclass("essential");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_font("9pt \"굴림\"");
            this.div.addChild(obj.name, obj);

            obj = new Calendar("cal_authEndDate","73.22%","61",null,"20","0.65%",null,null,null,null,null,this.div.form);
            obj.set_taborder("2");
            obj.set_cssclass("essential");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_font("9pt \"굴림\"");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cbo_useYn","22.25%","87",null,"20","51.62%",null,null,null,null,null,this.div.form);
            obj.set_taborder("26");
            obj.set_codecolumn("C,UseYn,SEL,Y,Y");
            obj.set_cssclass("essential");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_dictionaryid","22.25%","201",null,"20","51.19%",null,null,null,null,null,this.div.form);
            obj.set_taborder("4");
            obj.set_cssclass("essential");
            obj.set_visible("true");
            obj.set_enable("false");
            this.div.addChild(obj.name, obj);

            obj = new Button("btn_pop","49.03%","201",null,"20","40.39%",null,null,null,null,null,this.div.form);
            obj.set_taborder("5");
            obj.set_text("찾기");
            obj.set_tooltiptext("SEARCH_BUTTON");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_dictionaryname","59.83%","201",null,"20","0.65%",null,null,null,null,null,this.div.form);
            obj.set_taborder("6");
            obj.set_cssclass("essential");
            obj.set_visible("true");
            obj.set_enable("false");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static03_00","2.81%","201",null,"20","79.70%",null,null,null,null,null,this.div.form);
            obj.set_taborder("7");
            obj.set_text("다국어ID");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_visible("true");
            obj.set_textAlign("right");
            obj.set_tooltiptext("DICTIONARYID");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static07_00","5","227",null,"20","79.70%",null,null,null,null,null,this.div.form);
            obj.set_taborder("8");
            obj.set_text("Audit여부");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_tooltiptext("ISAUDIT");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cbo_isaudit","22.25%","227",null,"20","51.19%",null,null,null,null,null,this.div.form);
            obj.set_taborder("9");
            obj.set_codecolumn("C,UseYn,SEL,Y,Y");
            obj.set_cssclass("essential");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static10_00","0.00%","222",null,"5","-3.24%",null,null,null,null,null,this.div.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static34","49","10",null,"21","79.7%",null,null,null,null,null,this.div.form);
            obj.set_taborder("13");
            obj.set_text("사이트");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_tooltiptext("PLANT");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cbo_plantid","22.46%","10",null,"20","49.89%",null,null,null,null,null,this.div.form);
            obj.set_taborder("14");
            obj.set_codecolumn("C,SiteType,SEL,Y,Y");
            obj.set_type("filter");
            obj.set_displayrowcount("20");
            obj.set_font("9pt \"Dotum\"");
            this.div.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"88","60","20","10",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_DR_GridMinus");
            obj.set_tooltiptext("행삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"0","60","20","140",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("Toolbar_Search");
            obj.set_cssclass("btn_DR_GridSearch");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear1",null,"0","60","20","75",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("초기화");
            obj.set_cssclass("btn_DR_GridReset");
            obj.set_tooltiptext("Toolbar_Initialization");
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

            obj = new Button("btn_favorite","187","6","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_favorite");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,637,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item5","div_search.form.edt_authNm","cssclass","ds_result","POPUP_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div.form.edt_authNm","value","ds_cmdJobAuthMng","AUTH_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div.form.txt_authDesc","value","ds_cmdJobAuthMng","AUTH_DESC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div.form.cal_authStartDate","value","ds_cmdJobAuthMng","AUTH_START_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div.form.cal_authEndDate","value","ds_cmdJobAuthMng","AUTH_END_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div.form.cbo_useYn","value","ds_cmdJobAuthMng","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div.form.edt_dictionaryid","value","ds_cmdJobAuthMng","DICTIONARYID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div.form.edt_dictionaryname","value","ds_cmdJobAuthMng","DICTIONARYNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div.form.cbo_isaudit","value","ds_cmdJobAuthMng","ISAUDIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div.form.cbo_plantid","value","ds_cmdJobAuthMng","PLANTID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CMSY01300M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 권한 관리
         * 파일명 		: cmsy01300.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2017.03.18
         *
         * 설  명		: 권한
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
        	this.fv_currDate = this.nfn_getCurrentSystemTime();
        	this.nfn_formInit(obj);
        	// 엔터키 설정 함수(조회)
        	this.gfn_setEnterSearch(this.div_search, "nfn_search");

        	// this.fn_search();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_cmdJobAuthMng.clearData();

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "PLANTID", this.div_search.form.cbo_plantid.value);
        	this.ds_search.setColumn(0, "AUTH_NM", this.div_search.form.edt_authNm.value);

        	var sSvcID = "selectCmdJobAuthMngList";
        	var sController = "/cmsy01300/selectCmdJobAuthMngList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_cmdJobAuthMng=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectCmdJobAuthMngList");
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

        	if (!this.gfn_dsIsUpdated(this.ds_cmdJobAuthMng))
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");
        		return;
        	}

        	var component = this.div;
        	var strColIdList = "cbo_plantid,edt_authNm,cal_authStartDate,cal_authEndDate,cbo_useYn";
        	var strColNmList = "사이트,메뉴명,권한시작일,권한종료일,사용여부";
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
        	var sSvcID = "saveCmdJobAuthMng";
        	var sController = "/cmsy01300/saveCmdJobAuthMng.do";
        	var sInDatasets = "INPUT=ds_cmdJobAuthMng:U";
        	var sOutDatasets = "";

        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "saveCmdJobAuthMng");

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
        		if (trId == "saveCmdJobAuthMng")
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok"); //저장이 완료되었습니다.
        			this.fn_search();
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



        /**************************************************************************
         * 7. 기타 함수 시작
         **************************************************************************/


        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.btn_add_onclick = function (obj, e)
        {
        	var nRow = this.ds_cmdJobAuthMng.addRow();
        	this.ds_cmdJobAuthMng.setColumn(nRow, "USE_YN", "Y");
        	this.ds_cmdJobAuthMng.setColumn(nRow, "PLATFORM_FLAG", "W");
        	this.ds_cmdJobAuthMng.setColumn(nRow, "AUTH_START_DATE", this.fv_currDate.substring(0,8));
        	this.ds_cmdJobAuthMng.setColumn(nRow, "AUTH_END_DATE", "29991231");
        };

        this.btn_del_onclick = function (obj, e)
        {
        	if (this.ds_cmdJobAuthMng.getRowType(this.ds_cmdJobAuthMng.rowposition) == 2)
        	{
        		this.ds_cmdJobAuthMng.deleteRow(this.ds_cmdJobAuthMng.rowposition);
        	}
        	else
        	{
        		this.gfn_Message("changeInvalid", null, "info", "ok");
        		//this.alert("기등록된 메시지정보는 삭제하실 수 없습니다!! 유효상태를 'Invalid'으로 하시기 바랍니다!!");
        	}
        };



        this.div_search_btn_clear_onclick = function (obj, e)
        {
        	this.reload();
        };

        this.div_btn_pop_onclick = function(obj,e)
        {
        // gfn_openPopup(arg_type, popupCd, popupNm, rtnCols, paramCols, paramValues, searchStr);
        //-----------------
        // arg_type    : A::사용자가 선택, B:: 한건존재시 자동 셋팅
        // popupCd     : 공통팝업 관리 화면에서 생성되는 팝업코드
        // popupNm     : 변경할팝업화면명 , 변경하지 않을 경우 팝업화면 타이틀은 관리화면의 타이틀로 지정됨
        // rtnCols     : 구분자 : "|"   : 그리드에 출력될 컬럼 지정 (않을 경우 관리화면의 그리드로 출력됨)
        // paramCols   : 구분자 : "|" : where 구문에 들어갈 컬럼
        // paramValues : 구분자 : "|"  : where 구문에 들어갈 컬럼에 대한 값
        // searchStr   : 팝업 조회조건 콤보값 = 조회 값
        	var popupId = "SEARCH_DICTIONARY";
        	var oArg = {};
        	oArg.arg_type = "B";
        	oArg.arg_popupCd = "P00002";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "DICTIONARYID|DICTIONARYNAME";
        	oArg.arg_paramCols = "";
        	oArg.arg_paramValues = "";
        	oArg.arg_searchStr = "";

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"");
        };

        /**************************************************************************
         * 80. 팝업
        ***************************************************************************/
        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "SEARCH_DICTIONARY")
        	{
        		var nRow = this.ds_cmdJobAuthMng.rowposition;

        		this.ds_cmdJobAuthMng.setColumn(nRow, "DICTIONARYID", rtn[0]);
        		this.ds_cmdJobAuthMng.setColumn(nRow, "DICTIONARYNAME", rtn[1]);
        	}

        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_search.form.cbo_plantid.addEventHandler("onitemchanged",this.div_cbo_deptCd_onitemchanged,this);
            this.Static02.addEventHandler("onclick",this.Static10_onclick,this);
            this.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.grd_cmdJobAuthMng.addEventHandler("oncellclick",this.grd_cmdJobAuthMng_oncellclick,this);
            this.grd_cmdJobAuthMng.addEventHandler("onmouseenter",this.grd_cmdJobAuthMng_onmouseenter,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.div.form.btn_pop.addEventHandler("onclick",this.div_btn_pop_onclick,this);
            this.div.form.cbo_plantid.addEventHandler("onitemchanged",this.div_cbo_deptCd_onitemchanged,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.btn_clear1.addEventHandler("onclick",this.div_search_btn_clear_onclick,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("CMSY01300M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
