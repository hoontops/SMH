(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Test035");
            this.set_titletext("Grid 필수값체크");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,669);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset02", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"nm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cd\">1</Col><Col id=\"nm\">1111</Col></Row><Row><Col id=\"cd\">2</Col><Col id=\"nm\">2222</Col></Row><Row><Col id=\"cd\">3</Col><Col id=\"nm\">3333</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"col1\" type=\"STRING\" size=\"256\"/><Column id=\"col2\" type=\"STRING\" size=\"256\"/><Column id=\"col3\" type=\"STRING\" size=\"256\"/><Column id=\"col4\" type=\"STRING\" size=\"256\"/><Column id=\"col5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"col1\">col1</Col><Col id=\"col2\">col2</Col><Col id=\"col3\">col3</Col><Col id=\"col4\">col4</Col><Col id=\"col5\">col5</Col></Row><Row><Col id=\"col1\">col11</Col><Col id=\"col2\">col22</Col><Col id=\"col3\">col33</Col><Col id=\"col4\">col44</Col><Col id=\"col5\">col55</Col></Row><Row><Col id=\"col1\">col111</Col><Col id=\"col2\">col222</Col><Col id=\"col3\">col333</Col><Col id=\"col4\">col444</Col><Col id=\"col5\">col555</Col></Row><Row><Col id=\"col1\">col1-1</Col><Col id=\"col2\">col2-1</Col><Col id=\"col3\">col3-1</Col><Col id=\"col4\">col4-1</Col><Col id=\"col5\">col5-1</Col></Row><Row><Col id=\"col1\">col1-2</Col><Col id=\"col2\">col1-2</Col><Col id=\"col3\">col1-3</Col><Col id=\"col4\">col1-4</Col><Col id=\"col5\">col1-5</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH\" type=\"STRING\" size=\"256\"/><Column id=\"CAL_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"CAL_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK\" type=\"STRING\" size=\"256\"/><Column id=\"RADIO_VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YEAR\">1</Col><Col id=\"SEARCH\">ABCDEF</Col><Col id=\"RADIO_VALUE\">1</Col><Col id=\"CAL_FROM\">20150408</Col><Col id=\"CAL_TO\">20150624</Col><Col id=\"CHECK\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_combo", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row><Col id=\"code\">1</Col><Col id=\"value\">2015</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">2014</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_radio", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"value\">라디오1</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">라디오2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchValid", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH\" type=\"STRING\" size=\"256\"/><Column id=\"CAL_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"CAL_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK\" type=\"STRING\" size=\"256\"/><Column id=\"RADIO_VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YEAR\">title:combo,required:true,focus:cmb_year</Col><Col id=\"SEARCH\">title:항목,maxlength:10,focus:edt_search</Col><Col id=\"RADIO_VALUE\">title:radio,required:true,focus:rdo_list</Col><Col id=\"CAL_FROM\">title:FROM,date:true,focus:cal_from</Col><Col id=\"CAL_TO\">title:TO,date:true,focus:cal_to</Col><Col id=\"CHECK\">title:check박스,required:true,focus:chk_text</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new ExcelImportObject("ExcelImportObject00", this);
            obj.getSetter("importtype").set("0");
            obj.getSetter("onsuccess").set("ExcelImportObject00_onsuccess");
            obj.getSetter("onerror").set("ExcelImportObject00_onerror");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","1.09%","378",null,"148","35.54%",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("Dataset01");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"col1\"/><Cell col=\"2\" text=\"col2\"/><Cell col=\"3\" text=\"col3\"/><Cell col=\"4\" text=\"col4\"/><Cell col=\"5\" text=\"col5\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"normal\" text=\"bind:col1\" combodataset=\"Dataset02\" combocodecol=\"cd\" combodatacol=\"nm\" background=\"bisque\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:col2\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:col3\"/><Cell col=\"4\" edittype=\"normal\" text=\"bind:col4\"/><Cell col=\"5\" edittype=\"normal\" text=\"bind:col5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","1.2%","560",null,"95","82.72%",null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("st_Byte","21.85%","559",null,"21","75.11%",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("100");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","67.61%","468",null,"41","20%",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("필수값 체크");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0.11%","351",null,"21","63.91%",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Grid 필수값 체크");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","67.83%","383",null,"35","9.02%",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("필수값 컬럼 : col2, col3");
            obj.set_color("red");
            obj.set_font("bold 9pt \"arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","67.83%","416",null,"50","3.91%",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("예제) \r\nif(!this.gfn_GridKeyCheck(this.Grid00, \r\n[\"col2\", \"col3\"])) return;");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0.11%","531",null,"21","63.91%",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("입력 byte 체크");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Button("bt_sample1","69.13%","30",null,"50","19.67%",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("예제1\r\nconfirm");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0%","4",null,"21","58.15%",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("공통 Message처리 예제");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","1.63%","43",null,"13","87.17%",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("메세지목록");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","51.85%","88",null,"34","6.41%",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("예제1 ) this.gfn_Message(\"IMCMJC0080\", \"개구리\", \"conf\")");
            obj.set_wordWrap("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","51.85%","112",null,"26","6.41%",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("예제2 ) this.gfn_Message(\"IMCMJC0104\", [\"해당값\", \"50\"] , \"info\" )");
            this.addChild(obj.name, obj);

            obj = new Button("bt_sample2","81.85%","30",null,"50","6.85%",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("예제2\r\ninfomation");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","1.63%","60",null,"132","51.09%",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_binddataset("gds_message");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"121\"/><Column size=\"368\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CODE\"/><Cell col=\"1\" text=\"CODENAME\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\"/><Cell col=\"1\" text=\"bind:CODENAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","51.85%","136",null,"26","6.41%",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("인자1 : 메세지ID, 인자2:값(단일 또는 array), 인자3:info, conf");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","51.85%","160",null,"26","6.41%",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("Return값 : Boolean(true or false)");
            this.addChild(obj.name, obj);

            obj = new Button("bt_getmessage","52.61%","32",null,"50","31.74%",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("gds_message가져오기");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","1","207",null,"21","588",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("입력 항목 필수값 체크");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","0","231",null,"103","10",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","20","10","40","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("99");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","217","10","40","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("100");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label");
            obj.set_font("9pt \"Dotum\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_search","257","10","137","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("101");
            obj.set_cssclass("edit_Search");
            obj.set_font("9pt \"Dotum\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static04","20","41","40","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("102");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"10","58","21","80",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("103");
            obj.set_text("조회");
            obj.set_cssclass("btn_CRUD_Search");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_year","60","10","137","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("104");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.set_innerdataset("ds_combo");
            obj.set_font("9pt \"Dotum\"");
            obj.set_text("2015");
            obj.set_value("1");
            obj.set_index("0");
            this.Div01.addChild(obj.name, obj);

            obj = new Radio("rdo_list","60","41","153","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("105");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.set_direction("vertical");
            obj.set_innerdataset("ds_radio");
            obj.set_font("9pt \"Dotum\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button50","376","10","15","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("106");
            obj.set_cssclass("btn_WF_Search");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","439","10","40","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("107");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label");
            obj.set_font("9pt \"Dotum\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Calendar("cal_from","479","10","100","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("108");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("9pt \"Gulim\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","583","9","10","23",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("109");
            obj.set_text("~");
            this.Div01.addChild(obj.name, obj);

            obj = new Calendar("cal_to","596","10","100","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("110");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static03","20","70","370","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("111");
            obj.set_text("※ 메시지 표시 공간입니다. 메시지 표시 공간입니다. ");
            obj.set_font("9pt \"Dotum\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button79",null,"10","52","21","25",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("112");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_basic");
            obj.set_font("9pt \"Dotum\"");
            this.Div01.addChild(obj.name, obj);

            obj = new CheckBox("chk_text","705","10","62","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("113");
            obj.set_text("텍스트");
            obj.set_truevalue("1");
            obj.set_font("9pt \"Dotum\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00","399","10","21","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("114");
            obj.set_cssclass("btn_WF_eraser");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static10","51","242","10","53",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","198","242","20","21",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","248","242","10","21",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static14",null,"242","25","53","11",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("25");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","421","242","20","21",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","470","242","10","21",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","580","242","5","21",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","592","242","5","21",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","21","263","177","10",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","21","292","177","10",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","781","232","117","10",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static67","237","263",null,"10","506",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("Button12",null,"231","16","16","10",null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_cssclass("btn_search_cls");
            obj.set_tooltiptext("검색조건 숨김");
            this.addChild(obj.name, obj);

            obj = new Static("Static82","793","226","117","5",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("greenyellow");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,669,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div01.form.cmb_year","value","ds_search","YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div01.form.edt_search","value","ds_search","SEARCH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div01.form.cal_from","value","ds_search","CAL_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div01.form.cal_to","value","ds_search","CAL_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div01.form.rdo_list","value","ds_search","RADIO_VALUE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div01.form.chk_text","value","ds_search","CHECK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Sample04.xfdl","lib::comLib.xjs");
        this.registerScript("Sample04.xfdl", function() {
        this.executeIncludeScript("lib::comLib.xjs"); /*include "lib::comLib.xjs"*/


        this.btn_export_onclick = function (obj, e)
        {
        	var grd_name = "";
        	// 익스포트할 그리드 명, 여러개일 경우 ':'로 구분
        	grd_name = "Grid00";
        	if (this.Dataset00.rowcount > 0)
        	{
        		grd_name = grd_name + ":Grid01";
        	}

        	// 저장될 엑셀명
        	var file_name = "aaaa";
        	this.export_excel(grd_name, file_name);
        };

        this.btn_import_onclick = function (obj, e)
        {
        	// import 테스트를 위한 엑셀 파일은 sample 디렉토리 아래 book1.xlsx
        	this.import_excel("ds_list");
        };

        this.excel_sample_onload = function (obj, e)
        {
        	// var param1 = Eco.XPComp.getUserProperty(this, "param1");
        	// var param2 = Eco.XPComp.getUserProperty(this, "param2");
        	// if(!Eco.isEmpty(param1))
        	// {
        	// trace("param1===>"+param1);
        	// trace("param2===>"+param2);
        	// }

        	// 데이터셋 로우값 설정
        	this.Dataset01.set_rowposition(2);
        };

        this.Button00_onclick = function (obj, e)
        {
        	// trace(this.ds_list.saveXML());
        	//
        	// return;

        	var sSheet = "ds_list";
        	var sData = sSheet + "=output";

        	if (this.gfn_isNull(sSheet))
        	{
        		alert("table을 선택하세요.");
        		return;
        	}

        	sSheet = sSheet + "!A1:U50000";

        	this.fn_import(sSheet, sData);
        };

        fv_url = "http://localhost:8011/XImport";
        this.fn_import = function (sSheet, sData)
        {
        	this.ds_list.clearData();

        	sStartTime = this.fn_CheckTime();

        	this.ExcelImportObject00.set_importurl(fv_url);
        	this.ExcelImportObject00.set_importfilemode("local");
        	this.ExcelImportObject00.importData("", sSheet, sData);
        	// this.ExcelImportObject00.importData("", "Sheet1!A1:U50000", "ds_list02=output");sImportData
        };

        this.ExcelImportObject00_onerror = function (obj, e)
        {
        	alert(e.errormsg);
        };

        this.ExcelImportObject00_onsuccess = function (obj, e)
        {
        	alert("ExcelImportObject00_onsuccess");
        };

        // Excel Export & Import Time 체크
        this.fn_CheckTime = function ()
        {
        	return 0;
        };

        this.fn_diffTime = function ()
        {
        	return 0;
        };

        this.fn_result = function (rowidx)
        {
        	return rowidx;
        };

        this.TextArea00_onkeydown = function (obj, e)
        {
        	// trace(obj.text);
        	this.gfn_GetLengthB(obj.text);
        	try
        	{
        		this.st_Byte.set_text(this.gfn_GetLengthB(obj.text));
        	}
        	catch (e)
        	{
        		// trace("error");
        	}
        };

        this.Button01_onclick = function (obj, e)
        {
        	if (!this.gfn_GridKeyCheck(this.Grid00, ["col2", "col3"]))
        	{
        		return;
        	}
        };

        this.bt_message_onclick = function (obj, e)
        {
        	// this.fn_start();

        	this.gfn_Message("IMCMJC0112", "개구리", "conf");
        };

        this.bt_sample2_onclick = function (obj, e)
        {
        	this.gfn_Message("IMCMJC0104", ["해당값", "50"], "info");
        };

        this.fn_start = function ()
        {
        	var sSvcID = "selectCmMsg";
        	var sController = "/cmmm01100/selectCmMsg";
        	var sInDatasets = "";
        	var sOutDatasets = "gds_message=ds_output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectCmMsg");
        	var sCallbackFunc = "fn_callBack";

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, sCallbackFunc);
        };

        /**
         * 5.2 (필수) CallBack 처리
         */
        this.fn_callBack = function (strServiceId, strErrorCode, strErrorMsg)
        {
        	if (strErrorCode < 0)
        	{
        		return this.gfn_alert(strErrorMsg);
        	}

        	if (strServiceId == "selectCmMsg")
        	{
        		trace("성공 " + nexacro.getApplication().gds_message.saveXML());
        	}
        };

        this.bt_getmessage_onclick = function (obj, e)
        {
        	this.fn_start();
        };


        this.Div01_btn_search_onclick = function (obj, e)
        {
        	// 유효성 검사
        	if (this.gfn_commonCheckValid(this.ds_search, this.ds_searchValid) == false)
        	{
        		// 유효성 검사를 통과하지 못하면 return 처리
        		return;
        	}
        };


        /**
         * 유효성 검사
         * @param {object} obj target object
         * @param {object} objDsValid 사용자 정의 유효성 dataset
         * @return N/A
         * @example
         * @memberOf public
         */
        this.gfn_commonCheckValid = function (comp, objDsValid)
        {
        	this.gfn_essentialFocus(this);

        	var objDs,sDsName,objGrd;

        	if (comp && ((typeof comp) == "object") && (comp instanceof Grid))
        	{
        		objGrd = comp;
        		sDsName = objGrd.binddataset;
        		objDs = this.objects[sDsName];
        	}
        	else if (comp && ((typeof comp) == "object") && (comp instanceof Dataset))
        	{
        		objDs = comp;
        		sDsName = comp.name;
        	}
        	else
        	{
        		this.gfn_alert("첫번째 Argument에는 Grid or Dataset이 와야 합니다.");
        		return;
        	}

        	if (this.gfn_isNull(objDsValid))
        	{
        		objDsValid = this.objects[sDsName + "Valid"];
        	}

        	if (this.gfn_isNull(objDsValid))
        	{
        		this.gfn_alert("유효성 dataset이 정의 되지 않았습니다.");
        	}

        	var nRowCnt = objDs.rowcount;
        	var nColCnt = objDs.colcount;

        	for (var i = 0; i < nRowCnt; i = i + 1)
        	{
        		for (var j = 0; j < nColCnt; j = j + 1)
        		{
        			// Row Type이 insert(2), update(4)일 경우에만
        			if (objDs.getRowType(i) == 2 || objDs.getRowType(i) == 4)
        			{
        				// validation 체크
        				var rtnVal = this.gfn_itemValid(i, j, objDs, objDsValid);

        				if (rtnVal != true)
        				{
        					// message 처리
        					this.gfn_alert(rtnVal);

        					// Error 위치로 setFocus 처리
        					objDs.set_rowposition(i);
        					var strColNm = objDs.getColID(j);

        					// Grid setFocus 처리
        					if ((typeof comp) == "object" && (comp instanceof Grid))
        					{
        						if (objDsValid.getColumn(0, strColNm).indexOf("focus") == -1)
        						{
        							objGrd.setCellPos(objGrd.getBindCellIndex("Body", objDs.getColID(j)));
        							objGrd.showEditor(true);
        							objGrd.setFocus();
        						}
        					}
        					// validation에 focus가 있는 경우 Component로 setFocus 처리
        					else if (objDsValid.getColumn(0, strColNm).indexOf("focus") > -1)
        					{
        						var arrItem1 = objDsValid.getColumn(0, strColNm).split(",");
        						var arrItem2 = new Array();
        						for (var i = 0; i < arrItem1.length; i++)
        						{
        							arrItem2 = arrItem1[i].split(":");
        							if (arrItem2[0] == "focus")
        							{
        								this.gfn_essentialFocus(this, arrItem2[1]);
        							}
        						}
        					}
        					return false;
        				}
        			}
        		}
        	}
        	return true;
        };


        this.gfn_essentialFocus = function (scope, sCompNm)
        {
        	var strType,sName = this.gfn_isNull(sCompNm) ? "" : sCompNm;

        	for (var i = 0; i < scope.components.length; i = i + 1)
        	{
        		strType = scope.components[i].toString().toUpperCase();

        		if (scope.components[i]["userdata"] == "essential")
        		{
        			// trace(" strType : "+strType + ", sName : "+sName+ ", scope.components[i] : "+scope.components[i].name);
        			if (scope.components[i].name == sName)
        			{
        				scope.components[sName].set_cssclass("essential_error"); //경고css적용
        				scope.components[sName].setFocus();
        			}
        			else
        			{
        				scope.components[i].set_cssclass("essential");
        			}
        		}
        		/* 하위 콤포넌트 check는 Div 만 처리한다. 필요시 Tab, Tabpage 가능 - 필요할까? */
        		// if( strType == "[OBJECT DIV]" || strType == "[OBJECT TAB]" )
        		if (strType == "[OBJECT DIV]")
        		{
        			this.gfn_essentialFocus(scope.components[i], sName);
        		}
        	}
        };


        /**
         * @class Column별 Validation Check
         * @param rowPos     - Check Dataset의 Row Position
         * @param colIdx     - Check Dataset의 Row Column
         * @param objDs      - Check Dataset
         * @param objDsValid - Check Info Dataset
         * @return boolean
         */
        this.gfn_itemValid = function (rowPos, colIdx, objDs, objDsValid)
        {
        	var arrItem = [],arrItem2 = [];

        	var strColNm = objDs.getColID(colIdx);
        	var strCol = objDsValid.getColumn(0, strColNm);

        	if (this.gfn_isNull(strCol))
        	{
        		return true;
        	}

        	var value = objDs.getColumn(rowPos, colIdx);

        	arrItem = strCol.split(",");
        	var rtnVal;

        	for (var k = 0; k < arrItem.length; k++)
        	{
        		trace("item value : " + arrItem[k]);
        		rtnVal = this.gfn_valueValid(rowPos, arrItem[k], value, objDs, colIdx);
        		if (rtnVal == true)
        		{
        			continue;
        		}
        		else if (rtnVal == "SKIP")
        		{
        			if (this.gfn_isNull(value))
        			{
        				return true;
        			}
        			else
        			{
        				continue;
        			}
        		}
        		else
        		{
        			return rtnVal;
        		}
        	}
        	// end for

        	return true;
        };


        /**
         * @class Check 항목별 DataSet 데이터 무결성을 검사하는 함수
         * @param rowPos     - Check Dataset의 Row Position
         * @param Value      - Validation Check 항목
         * @param itemValue  - 체크 대상 Vlaue
         * @param objDs      - Check Dataset
         * @param colIdx     - Column Index
         * @return boolean
         */
        this.gfn_valueValid = function (rowPos, Value, itemValue, objDs, colIdx)
        {
        	var arrItem2 = new Array();
        	var rtnVal = true;
        	arrItem2 = Value.split(":");

        	// trace("arrItem2 : " + arrItem2);
        	switch (arrItem2[0])
        	{
        		case "title":
        			strTitle = arrItem2[1];
        			break;
        		case "required":
        			// 필수입력항목 여부
        			if (arrItem2[1] == "true")
        			{
        				if (this.gfn_isNull(this.gfn_trim(itemValue)))
        				{
        					rtnVal = strTitle + " 은(는) 필수 입력 항목입니다.";
        				}
        			}
        			else
        			{
        				return "SKIP";
        			}
        			break;
        			// 최대 size 크기 - maxlength:7
        		case "maxlength":
        			if (!this.gfn_isNull(itemValue))
        			{
        				if (itemValue.length > parseInt(arrItem2[1]))
        				{
        					rtnVal = strTitle + " 의 입력값의 길이는 " + arrItem2[1] + " 이하이어야 합니다.";
        				}
        			}
        			break;
        			// 최소 size 크기 - minlength:7
        		case "minlength":
        			if (!this.gfn_isNull(itemValue))
        			{
        				if (itemValue.length < parseInt(arrItem2[1]))
        				{
        					rtnVal = strTitle + " 의 입력값의 길이는 " + arrItem2[1] + " 이상이어야 합니다.";
        				}
        			}
        			break;
        			// 숫자 여부 - digits:true
        		case "digits":
        			if (!this.lookupFunc("gfn_isNum").call(itemValue))
        			{
        				rtnVal = strTitle + " 은(는) 숫자만 입력 가능합니다.";
        			}
        			break;
        			// 해당 숫자 이하 - min:7
        		case "min":
        			if (parseFloat(itemValue) < parseFloat(arrItem2[1]))
        			{
        				rtnVal = strTitle + " 은(는) " + arrItem2[1] + " 이상의 숫자만 입력 가능합니다.";
        			}
        			break;
        			// 해당 숫자 이상 - max:7
        		case "max":
        			if (parseFloat(itemValue) > parseFloat(arrItem2[1]))
        			{
        				rtnVal = strTitle + " 은(는) " + arrItem2[1] + " 이하의 숫자만 입력 가능합니다.";
        			}
        			break;
        			// 소숫점 자리수 비교 - declimit:3
        		case "declimit":
        			if (!this.gfn_isNull(itemValue))
        			{
        				var isExistDot = itemValue.indexOf(".");
        				if (isExistDot == -1)
        				{
        					rtnVal = strTitle + " 은(는) 소숫점 " + arrItem2[1] + " 자리로 구성되어야 합니다.";
        				}
        				else
        				{
        					var decLen = itemValue.substr(isExistDot + 1, itemValue.length);
        					if (decLen.length != parseInt(arrItem2[1]))
        					{
        						rtnVal = strTitle + " 은(는) 소숫점 " + arrItem2[1] + " 자리로 구성되어야 합니다.";
        					}
        				}
        			}
        			break;
        			// 날짜 년월일 체크 - date:true
        		case "date":
        			if (!this.gfn_isNull(this.gfn_trim(itemValue, "")))
        			{
        				if (!this.lookupFunc("gfn_isDate").call(itemValue))
        				{
        					rtnVal = strTitle + " : 유효하지 않은 날짜 형식입니다.";
        				}
        			}
        			break;
        			// 날짜 년월 체크 - dateym:true
        		case "dateym":
        			if (!this.gfn_isNull(this.gfn_trim(itemValue, "")))
        			{
        				if (!this.lookupFunc("gfn_isDate6").call(itemValue))
        				{
        					rtnVal = strTitle + " : 유효하지 않은 년월 형식입니다.";
        				}
        			}
        			break;
        			// e-mail 체크 - email:true
        		case "email":
        			if (!this.gfn_isNull(this.gfn_trim(itemValue, "")))
        			{
        				if (!this.lookupFunc("gfn_isEmail").call(itemValue))
        				{
        					rtnVal = strTitle + " : 유효하지 않은 e-mail 형식입니다.";
        				}
        			}
        			break;
        		default:
        			return rtnVal;
        			break;
        	}
        	// end switch
        	return rtnVal;
        }
        ;

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Test035_onload,this);
            this.TextArea00.addEventHandler("onkeydown",this.TextArea00_onkeydown,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.bt_sample1.addEventHandler("onclick",this.bt_message_onclick,this);
            this.bt_sample2.addEventHandler("onclick",this.bt_sample2_onclick,this);
            this.bt_getmessage.addEventHandler("onclick",this.bt_getmessage_onclick,this);
            this.Div01.form.edt_search.addEventHandler("oneditclick",this.Edit00_oneditclick,this);
            this.Div01.form.btn_search.addEventHandler("onclick",this.Div01_btn_search_onclick,this);
        };
        this.loadIncludeScript("Sample04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
