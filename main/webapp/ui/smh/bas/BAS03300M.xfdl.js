(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS03300M");
            this.set_titletext("재작업 Routing Window Time");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKNUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ProcessPath", this);
            obj._setContents("<ColumnInfo><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PATHSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PATHTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STEPCLASS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Wtime", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"WTIMEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"WTIMEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"FR_USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"HIDDEN_PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"TOPROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"TOPROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"TOPROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"TOPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"TOPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TOPROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"TOPROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"WTIMETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"WTIMELIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"WTIMEDEFIDNEW\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_WtimeAction", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"WTIMEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"WTIMEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"WTIMEACTIONID\" type=\"STRING\" size=\"256\"/><Column id=\"WTIMEACTIONNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACTIONSEQUENCE\" type=\"INT\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Action", this);
            obj._setContents("<ColumnInfo><Column id=\"ACTIONID\" type=\"STRING\" size=\"256\"/><Column id=\"ACTIONNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sendDefault", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_4step", this);
            obj._setContents("<ColumnInfo><Column id=\"LOOKUP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOOKUP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MEANING\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ENABLED_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE1\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE2\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE3\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE4\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE5\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE6\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE7\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE8\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE9\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE10\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTCODEID\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAYSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"DICTIONARYID\" type=\"STRING\" size=\"256\"/><Column id=\"DICTIONARYID2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKNUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Step", this);
            obj._setContents("<ColumnInfo><Column id=\"STEPCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"LOOKUP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MEANING\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ToStep", this);
            obj._setContents("<ColumnInfo><Column id=\"STEPCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"LOOKUP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MEANING\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("StaTitle","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","btn_reset:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","26","24","btn_help:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","272","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_text("재작업 Routing Window Time");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("StaticGuideTitle","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);

            obj = new Tab("tab_search","0","47","290",null,null,"47",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("staPlantList","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PLANTID","128","10","145","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_codecolumn("C,SiteType,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staREWORKVERSION","0","60","120","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("재작업 라우팅 버전");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("6DCF14F6DCAB4D7B9E6C41BF464094AF");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","125","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","125","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            obj.set_hotkey("F2");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip00",null,"0","15",null,"0","0",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip01","0","0","15",null,null,"0",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip02","0","0",null,"10","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip03","0","30",null,"5","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04","0","105",null,"20","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","125","10","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staREWORKNAME","0","85","108","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("재작업 라우팅 명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("161FF10CC8544F8DBEFD732BDE4159B6");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_REWORKVERSION","128","60","145","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_enable("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_REWORKNAME","128","85","145","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_enable("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staREWORKNUMBER","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("재작업번호");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("REWORKNUMBER");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_REWORKNUMBER","128","35","123","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_REWORKNUMBER",null,"35","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_finder");
            obj.set_text("");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Grid("grdWtime","24.84%","34",null,"429","1",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_Wtime");
            obj.set_autoenter("select");
            obj.set_treeinitstatus("expand,null");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"W-Time 정의명\"/><Cell col=\"2\" text=\"품목코드\"/><Cell col=\"3\" text=\"Rev\"/><Cell col=\"4\" text=\"품목명\"/><Cell col=\"5\" text=\"시작 공정수순\"/><Cell col=\"6\" text=\"공정 코드\" cssclass=\"cell_point\"/><Cell col=\"7\" text=\"공정명\"/><Cell col=\"8\" text=\"공정진행상태\" cssclass=\"cell_point\"/><Cell col=\"9\" text=\"종료 공정수순\"/><Cell col=\"10\" text=\"TO 공정 코드\" cssclass=\"cell_point\"/><Cell col=\"11\" text=\"TO 공정명\"/><Cell col=\"12\" text=\"TO 공정진행상태\" cssclass=\"cell_point\"/><Cell col=\"13\" text=\"W-Type\"/><Cell col=\"14\" text=\"W-TIME 설정시간(Min)\" cssclass=\"cell_point\"/><Cell col=\"15\" text=\"유효상태\"/><Cell col=\"16\" text=\"생성자\"/><Cell col=\"17\" text=\"생성일\"/><Cell col=\"18\" text=\"수정자\"/><Cell col=\"19\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:WTIMEDEFNAME\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFID\" expandshow=\"show\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:FR_USERSEQUENCE\"/><Cell col=\"6\" text=\"bind:PROCESSSEGMENTID\" expandshow=\"show\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\"/><Cell col=\"7\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:PROCESSSTATE\" combocodecol=\"C,4Step,SEL,Y,Y\" edittype=\"combo\" displaytype=\"combotext\"/><Cell col=\"9\" text=\"bind:TO_USERSEQUENCE\"/><Cell col=\"10\" text=\"bind:TOPROCESSSEGMENTID\" expandshow=\"show\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\"/><Cell col=\"11\" text=\"bind:TOPROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:TOPROCESSSTATE\" combocodecol=\"C,4Step,SEL,Y,Y\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"13\" text=\"bind:WTIMETYPE\" combocodecol=\"C,QtimeType,SEL,Y,Y\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"14\" text=\"bind:WTIMELIMIT\" edittype=\"mask\" maskeditformat=\"#,###\"/><Cell col=\"15\" text=\"bind:VALIDSTATE\" combocodecol=\"C,ValidState,SEL,Y,Y\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"16\" text=\"bind:CREATOR\"/><Cell col=\"17\" text=\"bind:CREATEDTIME\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"18\" text=\"bind:MODIFIER\"/><Cell col=\"19\" text=\"bind:MODIFIEDTIME\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("title","0","0","160","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("8");
            obj.set_text("Routing Window Time");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_ProcessPath","title:2","0",null,"34","728",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grdProcessPath","0","34",null,null,"grdWtime:10","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("10");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_ProcessPath");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"60\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"250\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\" Site ID\"/><Cell col=\"2\" text=\"공정수순\"/><Cell col=\"3\" text=\"공정 코드\"/><Cell col=\"4\" text=\"공정명\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PLANTID\"/><Cell col=\"2\" text=\"bind:USERSEQUENCE\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTID\"/><Cell col=\"4\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("StaticTitleWTime2","25.05%","463","100","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("12");
            obj.set_text("W-Time 실행");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_WtimeAction","StaticTitleWTime2:6","463","140","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("11");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grdWtimeAction","24.95%","497",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_binddataset("ds_WtimeAction");
            obj.set_autoenter("select");
            obj.set_treeinitstatus("expand,null");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"W-Action\" cssclass=\"cell_point\"/><Cell col=\"2\" text=\"Sequence\" cssclass=\"cell_point\"/><Cell col=\"3\" text=\"유효상태\" tooltiptext=\"VALIDSTATE\"/><Cell col=\"4\" text=\"생성자\"/><Cell col=\"5\" text=\"생성일\"/><Cell col=\"6\" text=\"수정자\"/><Cell col=\"7\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:WTIMEACTIONID\" displaytype=\"combotext\" edittype=\"expr:dataset.getRowType(currow) ==2 ? &apos;combo&apos;:&apos;none&apos;\" combodataset=\"ds_Action\" combocodecol=\"ACTIONID\" combodatacol=\"ACTIONNAME\"/><Cell col=\"2\" text=\"bind:ACTIONSEQUENCE\" edittype=\"mask\" maskeditformat=\"#,###\" maskeditautoselect=\"true\" maskedittrimtype=\"both\"/><Cell col=\"3\" text=\"bind:VALIDSTATE\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,ValidState,SEL,Y,Y\"/><Cell col=\"4\" text=\"bind:CREATOR\"/><Cell col=\"5\" text=\"bind:CREATEDTIME\"/><Cell col=\"6\" text=\"bind:MODIFIER\"/><Cell col=\"7\" text=\"bind:MODIFIEDTIME\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grdWtime",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_Wtime",null,"6","26","24","btn_xlDn_grdWtime:0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btnAddRow_ds_Wtime",null,"6","26","24","btn_delRow_ds_Wtime:0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btnAddRow_ds_WtimeAction",null,"470","26","24","58",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_WtimeAction",null,"470","26","24","29",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grdWtimeAction",null,"470","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("StaticTitleWTime1","25.47%","0","100","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("13");
            obj.set_text("W-Time 정의");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_Wtime","StaticTitleWTime1:0","0","140","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("14");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","290","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tab_search.Tabpage1.form.edt_REWORKNUMBER","value","ds_search","REWORKNUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tab_search.Tabpage1.form.edt_REWORKVERSION","value","ds_search","REWORKVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab_search.Tabpage1.form.edt_REWORKNAME","value","ds_search","REWORKNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tab_search.Tabpage1.form.cbo_PLANTID","value","ds_search","PLANTID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAS03300M.xfdl","lib::lib_bas.xjs");
        this.registerScript("BAS03300M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 재작업 Routing Window Time
         * 파일명 		: BAS03300M.xfdl
         * 작성자 		: 김애리
         * 작성일 		: 2021.2.22
         * AS-IS		: ReworkRoutingQueueTime
         * 설  명		: 재작업 시작 공정부터 끝 공정까지 큐타임과 Action을 설정한다.
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.2.22	김애리   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.Mode = "";

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
         this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.fn_initCombo();
        	this.get4Step();
        	this.getStepAll();

        	this.ds_search.set_rowposition(0);
        	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0, "LANGUAGETYPE", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType"));
        };

        this.fn_initCombo = function ()
        {
        	var sSvcID 			= "selectActionList";
        	var sController 	= "/bas03300/selectActionList.do";
        	var sInDatasets 	= "";
        	var sOutDatasets = "ds_Action=output";
        	var sArgs 			= "";
        	//this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false);
        };

        this.get4Step = function ()
        {
        	var sSvcID 			= "select4step";
        	var sController 	= "/bas03300/select4step.do";
        	var sInDatasets 	= "";
        	var sOutDatasets = "ds_4step=output";
        	var sArgs 			= "";
        	//this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false);
        };

        this.getStepAll = function ()
        {
        	var sSvcID 			= "selectStepAll";
        	var sController 	= "/bas03300/selectStepAll.do";
        	var sInDatasets 	= "";
        	var sOutDatasets = "ds_Step=output";
        	var sArgs 			= "";
        	//this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false);
        	this.ds_ToStep.copyData(this.ds_Step);
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	if(this.fn_searchValidate() == false) return;

        	this.getWindowTimeList();
        };

        this.fn_searchValidate = function ()
        {
        	var component = this.tab_search.Tabpage1;
        	var strColIdList = "edt_REWORKNUMBER";
        	var strColNmList = "재작업번호";
        	return this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        };

        /*
        * 기능 : 검색 초기화
        */
        this.fn_searchClear = function(obj,e)
        {
        	this.ds_search.copyData(this.ds_searchCopy);

        };

        this.fn_save = function (obj, e)
        {

        	if(this.fn_saveValidate() == false) return;

        	this.ds_sendDefault.clearData();
        	this.ds_sendDefault.addRow();

        	this.ds_sendDefault.setColumn(0,"ENTERPRISEID",this.gf_getEnterpriseId());
        	this.ds_sendDefault.setColumn(0,"PLANTID",this.gf_getSiteType());
        	this.ds_sendDefault.setColumn(0,"VALIDSTATE","Valid");

        	var wRow = this.ds_Wtime.rowcount == 1 ? 0 : this.ds_Wtime.rowposition;
        	var wTimeDefID = this.ds_Wtime.getColumn(wRow,"WTIMEDEFID");
        	if(this.nfn_isNull(wTimeDefID)) wTimeDefID = this.ds_Wtime.getColumn(wRow,"WTIMEDEFIDNEW");

        	for(var i=0;i<this.ds_WtimeAction.rowcount;i++)
        	{
        		this.ds_WtimeAction.setColumn(i , "WTIMEDEFID", wTimeDefID);
        	}

        	var sSvcID 			= "saveRoutingWtime";
        	var sController 	= "/bas03300/saveRoutingWtime.do";
        	var sInDatasets 	= "ds_Wtime=ds_Wtime:A ds_WtimeAction=ds_WtimeAction:A ds_sendDefault=ds_sendDefault";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);



        };

        this.fn_saveValidate = function ()
        {
        	if (!this.gfn_dsIsUpdated(this.ds_Wtime) && !this.gfn_dsIsUpdated(this.ds_WtimeAction)  )
        	{
        		 this.gfn_Message("NoSaveData", null, "warning", "ok");
        		return false;
        	}
        	try{

        		// W-Time 에 필수값 체크
        		var component = this.div_work.form.grdWtime;
        		var strColIdList = "PRODUCTDEFID,PRODUCTDEFVERSION,PROCESSSEGMENTID,PROCESSSTATE,TOPROCESSSEGMENTID,TOPROCESSSTATE,WTIMETYPE,WTIMELIMIT";
        		var strColNmList = "PRODUCTDEFID,PRODUCTDEFVERSION,PROCESSSEGMENTID,PROCESSSTATE,TOPROCESSSEGMENTID,TOPROCESSSTATE,WTIMETYPE,WTIMELIMIT";
        		var rtn = this.nfn_MandatoryCheckGrid(component, strColIdList);
        		if (rtn == false) return false;

        		if(this.ds_WtimeAction.rowcount == 0)
        		{
        			this.gfn_Message("NOWTIMEACTION", null, "warning", "ok");//W-Time 실행에 대해 저장할 내용이 없습니다.
        			return false;
        		}

        		{//[S] window Time 에 공정 seq와 공정 진행상태 체크
        		var tmpDataset = this.getChangeRows(this.ds_Wtime);

        		for(var i=0;i<this.ds_Wtime.rowcount;i++)
        		{
        			var fromUserSeq = nexacro.toNumber(this.ds_Wtime.getColumn(i,"FR_USERSEQUENCE")); //시작 공정 순서
        			var toUserSeq = nexacro.toNumber(this.ds_Wtime.getColumn(i,"TO_USERSEQUENCE")); //시작 공정 순서

        			if(toUserSeq < fromUserSeq || ( toUserSeq == fromUserSeq && this.getProcStateValidate(i) == false))
        			{
        				var wtimeName = this.ds_Wtime.getColumn(i,"WTIMEDEFNAME");
        				this.gfn_Message("CheckSequenceProcess", wtimeName, "warning", "ok");
        				return false;
        			}

        		}

        		}//[E] window Time 에 공정 seq와 공정 진행상태 체크

        		//Action에 필수값 체크
        		component = this.div_work.form.grdWtimeAction;
        		strColIdList = "WTIMEACTIONID,ACTIONSEQUENCE";
        		strColNmList = "WTIMEACTIONID,ACTIONSEQUENCE";
        		rtn = this.nfn_MandatoryCheckGrid(component, strColIdList);
        		if (rtn == false) return false;

        		{//[S] Action 에 Duplicate 체크
        		for(var i=0;i<this.ds_WtimeAction.rowcount;i++)
        		{
        			for(var j=0;j<this.ds_WtimeAction.rowcount;j++)
        			{
        				if(i != j && this.ds_WtimeAction.getColumn(i,"WTIMEACTIONID") == this.ds_WtimeAction.getColumn(j,"WTIMEACTIONID")){
        					this.ds_WtimeAction.rowposition = j;
        					this.gfn_Message("DuplicationActionID", this.ds_WtimeAction.getColumn(i,"WTIMEACTIONID"), "warning", "ok");
        					return false;
        				}
        			}
        		}
        		}//[E] Action 에 Duplicate 체크
        	}
        	catch(e){ return false };
        };

         /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        trace('fn_callBack trId ?' + trId);
        	if (errCD < 0)
        	{
        		if(trId == "saveBillOfDurableList")
        		{
        			var msg = errMsg.split("|");
        			this.gfn_Message(msg[0], msg[1], "error", "ok");
        		}
        		else
        			this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");

        		return;
        	}

        	{
        		switch(trId) {
        		case "select4step" :
        		{
        			this.ds_searchCopy.copyData(this.ds_search);
        			break;
        		}
        		case "selectEcmLookupValuesVList2ds_CSiteTypeALL" :
        		{
        			this.ds_search.setColumn(0,"PLANTID",this.gf_getSiteType());
        			break;
        		}
        		case "selectWindowTimeList":
        		{
        			if(this.ds_Wtime.rowcount > 0)
        			{
        				this.ds_Wtime.set_rowposition(0);
        			}
        			break;
        		}
        		case "selectWindowActionList":
        		{
        			trace(this.ds_WtimeAction.saveXML());
        			break;
        		}
        		case "selectActionList":
        		{
        			trace(this.ds_Action.saveXML());
        			break;
        		}
        		case "saveRoutingWtime":
        		{
        			this.gfn_Message("SuccessSave", "", "information", "ok");
        			this.getWindowTimeList();
        			break;
        		}
        		default:
        		}

        	}
        };


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        /*
         *	기능 : 팝업 관련
         */
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	switch(sPopupId) {
        	case "SEARCH_PRODUCTDEFID":
        	{//PRODUCTDEFID|PRODUCTDEFVERSION|PRODUCTDEFNAME
        		var procID = this.ds_search.getColumn(0,"REWORKNUMBER");
        		var procVer = this.ds_search.getColumn(0,"REWORKVERSION");
        		var colArray = rtn[i];
        		var nRow = this.ds_Wtime.rowcount == 1 ? 0 : this.ds_Wtime.rowposition;
        		for(var i=0; i<rtn.length; i++)
        		{
        			if( i != 0) this.ds_Wtime.addRow();
        			var colArray = rtn[i];

        			this.ds_Wtime.setColumn(nRow,"PRODUCTDEFID",colArray[0]);
        			this.ds_Wtime.setColumn(nRow,"PRODUCTDEFVERSION",colArray[1]);
        			this.ds_Wtime.setColumn(nRow,"PRODUCTDEFNAME",colArray[2]);
        			this.ds_Wtime.setColumn(nRow,"PROCESSDEFID",procID);
        			this.ds_Wtime.setColumn(nRow,"PROCESSDEFVERSION",procVer);
        			this.ds_Wtime.setColumn(nRow,"TOPROCESSDEFID",procID);
        			this.ds_Wtime.setColumn(nRow,"TOPROCESSDEFVERSION",procVer);

        			this.ds_Wtime.setColumn(nRow , "PROCESSSEGMENTVERSION", "*");
        			this.ds_Wtime.setColumn(nRow , "TOPROCESSSEGMENTVERSION", "*");
        			this.ds_Wtime.setColumn(nRow , "VALIDSTATE", "Valid");
        			this.ds_Wtime.setColumn(nRow , "WTIMETYPE", "Max");

        			nRow++;
        		}

        		break;
        	}
        	case "SEARCH_REWORKNUMBER":
        	{//REWORKNUMBER|REWORKVERSION|REWORKNAME
        		this.ds_search.setColumn(0,"REWORKNUMBER",rtn[0]);
        		this.ds_search.setColumn(0,"REWORKVERSION",rtn[1]);
        		this.ds_search.setColumn(0,"REWORKNAME",rtn[2]);
        		break;
        	}
        	case "SEARCH_ROUTING_FROM":
        	{//PLANTID|USERSEQUENCE|PROCESSPATHID|PROCESSSEGMENTID|PROCESSSEGMENTNAME|PROCESSDEFID|PROCESSDEFVERSION|ENTERPRISEID
        		var nRow = this.ds_Wtime.rowcount == 1 ? 0 : this.ds_Wtime.rowposition;

        		var plantID = this.gf_getSiteType();//로그인한 Site ID 가 들어감.
        		var userSeq = rtn[1];
        		var procPathID = rtn[2];
        		var procSegID = rtn[3];
        		var procSegName = rtn[4];

        		this.ds_Wtime.setColumn(nRow,"PLANTID",plantID);
        		this.ds_Wtime.setColumn(nRow,"USERSEQUENCE",userSeq);
        		this.ds_Wtime.setColumn(nRow,"FR_USERSEQUENCE",userSeq);
        		this.ds_Wtime.setColumn(nRow,"PROCESSPATHID",procPathID);
        		this.ds_Wtime.setColumn(nRow,"HIDDEN_PROCESSSEGMENTID",procSegID);
        		this.ds_Wtime.setColumn(nRow,"PROCESSSEGMENTID",procSegID);
        		this.ds_Wtime.setColumn(nRow,"PROCESSSEGMENTNAME",procSegName);

        		this.ds_Wtime.setColumn(nRow,"TO_USERSEQUENCE","");
        		this.ds_Wtime.setColumn(nRow,"TOPROCESSPATHID","");
        		this.ds_Wtime.setColumn(nRow,"TOPROCESSSEGMENTID","");
        		this.ds_Wtime.setColumn(nRow,"TOPROCESSSEGMENTNAME","");

        		break;
        	}
        	case "SEARCH_ROUTING_TO":
        	{//PLANTID|USERSEQUENCE|PROCESSPATHID|PROCESSSEGMENTID|PROCESSSEGMENTNAME|PROCESSDEFID|PROCESSDEFVERSION|ENTERPRISEID
        		var nRow = this.ds_Wtime.rowcount == 1 ? 0 : this.ds_Wtime.rowposition;

        		var userSeq = rtn[1];
        		var procPathID = rtn[2];
        		var procSegID = rtn[3];
        		var procSegName = rtn[4];

        		this.ds_Wtime.setColumn(nRow,"TO_USERSEQUENCE",userSeq);
        		this.ds_Wtime.setColumn(nRow,"TOPROCESSPATHID",procPathID);
        		this.ds_Wtime.setColumn(nRow,"TOPROCESSSEGMENTID",procSegID);
        		this.ds_Wtime.setColumn(nRow,"TOPROCESSSEGMENTNAME",procSegName);

        		break;
        	}
        	default:
        	}

        };

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        this.getWindowTimeList = function ()
        {
        	this.Mode = "";
        	this.ds_ProcessPath.clearData();
        	this.ds_Wtime.clearData();

        	var sSvcID 			= "selectWindowTimeList";
        	var sController 	= "/bas03300/selectWindowTimeList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_ProcessPath=ds_ProcessPath ds_Wtime=ds_Wtime";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };
        /*
         * 하단 그리드 조회
         */
        this.getWTimeAction = function ()
        {
        	var nRow = this.ds_Wtime.rowcount == 1 ? 0 : this.ds_Wtime.rowposition;

        	this.ds_temp.clear();

        	this.datasetAddColumn(this.ds_temp, "WTIMEDEFID");
        	this.ds_temp.setColumn(0, "WTIMEDEFID", this.ds_Wtime.getColumn(nRow, "WTIMEDEFID"));

        	var sSvcID 			= "selectWindowActionList";
        	var sController 	= "/bas03300/selectWindowActionList.do";
        	var sInDatasets 	= "INPUT=ds_temp";
        	var sOutDatasets 	= "ds_WtimeAction=ds_WtimeAction";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         *	dataset 에 param 값 setting
         */
        this.datasetAddColumn = function (objDataset, strColumnInfo)
        {
        	var arrColumn = strColumnInfo.split(",");
        	var setEnable = objDataset.enableevent;

        	objDataset.set_enableevent(false);

        	var i;
        	for (i=0; i<arrColumn.length; i++) {
        		if(objDataset.getConstColIndex(arrColumn[i]) < 0) objDataset.addColumn(arrColumn[i], "String","255");
        	}

        	if(objDataset.rowcount == 0) objDataset.addRow();

        	objDataset.set_enableevent(setEnable);

        };

        /*
         *	작업된 row 찾기
         */
        this.getChangeRows = function (objDataset)
        {
        	var tmpDataset = new Dataset;

        	tmpDataset.copyData(objDataset);
        	for(var i=objDataset.rowcount-1; i>=0;i--)
        	{
        		if(objDataset.getRowType(i) != 2 && objDataset.getRowType(i) != 4)
        		{
        			tmpDataset.deleteRow(i);
        		}
        	}

        	return tmpDataset ;
        };

        /*
         *	공정 진행상태(from, to) 를 비교.
         */
        this.getProcStateValidate = function (iRow)
        {
        	try
            {
                var frState = this.ds_Wtime.getColumn(iRow,"PROCESSSTATE");
        		var toState = this.ds_Wtime.getColumn(iRow,"TOPROCESSSTATE");
        		if(this.nfn_isNull(frState) || this.nfn_isNull(toState)) return false;
        		var frRow = this.ds_4step.findRow("LOOKUP_CODE",frState);
        		var toRow = this.ds_4step.findRow("LOOKUP_CODE",toState);

        		var frSeq = nexacro.toNumber(this.ds_4step.getColumn(frRow,"DISPLAYSEQUENCE"));
        		var toSeq = nexacro.toNumber(this.ds_4step.getColumn(toRow,"DISPLAYSEQUENCE"));
        		if(frSeq >= toSeq) return false;
        		else true;
            }
            catch(e){ return false };

        	return true;
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         *	기능 : 품목코드 검색 버튼 클릭 시
         */
        this.tab_search_Tabpage1_btnProductCode_onclick = function(obj,e)
        {

        	this.ds_search.setColumn(0,"REWORKNUMBER", this.tab_search.Tabpage1.form.edt_REWORKNUMBER.value);
        	var languageType = nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType");
        	// gfn_openPopup(arg_type, popupCd, popupNm, rtnCols, paramCols, paramValues, searchStr);
        //-----------------
        // arg_type    : A::사용자가 선택, B:: 한건존재시 자동 셋팅
        // popupCd     : 공통팝업 관리 화면에서 생성되는 팝업코드
        // popupNm     : 변경할팝업화면명 , 변경하지 않을 경우 팝업화면 타이틀은 관리화면의 타이틀로 지정됨
        // rtnCols     : 구분자 : "|"   : 그리드에 출력될 컬럼 지정 (않을 경우 관리화면의 그리드로 출력됨)
        // paramCols   : 구분자 : "|" : where 구문에 들어갈 컬럼
        // paramValues : 구분자 : "|"  : where 구문에 들어갈 컬럼에 대한 값
        // searchStr   : 팝업 조회조건 콤보값 = 조회 값

        	var popupId = "SEARCH_REWORKNUMBER";
        	var oArg = {};
        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = "P00104";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "REWORKNUMBER|REWORKVERSION|REWORKNAME";
        	oArg.arg_paramCols = "PLANTID|PROCESSDEFTYPE|LANGUAGETYPE";
        	oArg.arg_paramValues = this.gf_getSiteType() + "|Rework|"+ languageType ;
        	oArg.arg_searchStr = "TXTREWORKPROCESSDEF=" + this.ds_search.getColumn(0,"REWORKNUMBER");

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=830,height=700");
        	//this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"");


        };

        /*
         *	상단 그리드 row 변경 시 입력한 내용 삭제에 대한 confirm 확인
         */
        this.ds_Wtime_canrowposchange = function(obj,e)
        {
        	if(this.gfn_dsIsUpdated(this.ds_WtimeAction))
        	{
        		return this.gfn_confirm("WRITTENBEDELETE", "information", ""); //"입력한 내용이 있으면 현재 작성중인 내용이 모두 삭제됩니다."
        	}
        };

        this.ds_Wtime_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "PROCESSSEGMENTID" || e.columnid == "TOPROCESSSEGMENTID"){
        		this.mfn_ResetStep(e.columnid, e.row);
        	}
        };


        /*
         *	상단 그리드 row 변경 시
         */
        this.ds_Wtime_onrowposchanged = function(obj,e)
        {
        	if(this.Mode == "Excel" ) return;
        	this.mfn_ResetStep("",e.newrow);
        	this.ds_WtimeAction.clearData();
        	if(this.nfn_isNull( this.ds_Wtime.getColumn(e.newrow, "WTIMEDEFID") ) ) return;
        	this.getWTimeAction();
        };

        /*
         *	그리드 콤보에 표시할 Step 을 선택한 공정에 해당하는 Step으로 표시한다.
         */
        this.mfn_ResetStep = function (columnid, sRow)
        {
        	if(columnid == "" || columnid == "PROCESSSEGMENTID"){
        		var processSegID = this.ds_Wtime.getColumn(sRow,"PROCESSSEGMENTID");
        		var processSegVer = this.ds_Wtime.getColumn(sRow,"PROCESSSEGMENTVERSION");

        		if(this.nfn_isNull(processSegID) == false && this.nfn_isNull(processSegVer) == false ){
        			var nRow = this.ds_ProcessPath.findRowExpr("PROCESSSEGMENTID=='"+ processSegID +"' && PROCESSSEGMENTVERSION=='"+ processSegVer +"'") ;
        			var stepClass = this.ds_ProcessPath.getColumn(nRow, "STEPCLASS");
        			this.ds_Step.set_loadfiltermode( "reset" );
        			if(this.nfn_isNull(stepClass) == false){
        				this.ds_Step.set_filterstr("STEPCLASS=='"+ stepClass +"'");
        			} else {
        				this.ds_Step.set_filterstr("STEPCLASS=='4Step'");
        			}
        		} else {
        			this.ds_Step.set_filterstr("STEPCLASS=='4Step'");
        		}
        	}

        	if(columnid == "" || columnid == "TOPROCESSSEGMENTID"){
        		var processSegID = this.ds_Wtime.getColumn(sRow,"TOPROCESSSEGMENTID");
        		var processSegVer = this.ds_Wtime.getColumn(sRow,"TOPROCESSSEGMENTVERSION");

        		if(this.nfn_isNull(processSegID) == false && this.nfn_isNull(processSegVer) == false ){
        			var nRow = this.ds_ProcessPath.findRowExpr("PROCESSSEGMENTID=='"+ processSegID +"' && PROCESSSEGMENTVERSION=='"+ processSegVer +"'") ;
        			var stepClass = this.ds_ProcessPath.getColumn(nRow, "STEPCLASS");
        			this.ds_ToStep.set_loadfiltermode( "reset" );
        			if(this.nfn_isNull(stepClass) == false){
        				this.ds_ToStep.set_filterstr("STEPCLASS=='"+ stepClass +"'");
        			}else {
        				this.ds_ToStep.set_filterstr("STEPCLASS=='4Step'");
        			}
        		} else {
        			this.ds_ToStep.set_filterstr("STEPCLASS=='4Step'");
        		}
        	}
        };

        /*
         * 상단 그리드에서 공정 팝업 선택 시
         */
        this.div_work_grdWtime_onexpanddown = function(obj,e)
        {
        	var idxProdDefID = this.div_work.form.grdWtime.getBindCellIndex("body","PRODUCTDEFID");

        	var popupId = "";
        	var pPRODUCTDIVISION = "Product";
        	var pPlantID = this.ds_search.getColumn(0,"PLANTID");


        	if(e.cell == idxProdDefID)
        	{
        		var processDefId = this.ds_Wtime.getColumn(e.row,"PRODUCTDEFID");

        		var oArg = {};
        		oArg.arg_type = "C";
        		oArg.arg_popupCd = "P00105";
        		oArg.arg_popupNm = "";
        		oArg.arg_rtnCols = "PRODUCTDEFID|PRODUCTDEFVERSION|PRODUCTDEFNAME";
        		oArg.arg_paramCols = "PLANTID|TXTPRODUCTDEFNAME";
        		oArg.arg_paramValues = pPlantID + "|" + processDefId ;
        		oArg.arg_searchStr = "PRODUCTDIVISION=" + pPRODUCTDIVISION;
        		popupId = "SEARCH_PRODUCTDEFID";

        		this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=800,height=800");
        			return;
        	}
        	else
        	{
        		var idxFrProcID = this.div_work.form.grdWtime.getBindCellIndex("body","PROCESSSEGMENTID");
        		var idxToProcID = this.div_work.form.grdWtime.getBindCellIndex("body","TOPROCESSSEGMENTID");

        		var processDefId = this.ds_search.getColumn(0,"REWORKNUMBER");
        		var processDefVer = this.ds_search.getColumn(0,"REWORKVERSION");
        		var languageType = nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType");

        		var procSegID = "";
        		var procSegName = "";
        		var procUserSeq = "";

        		if(e.cell == idxFrProcID)
        		{
        			procSegID = this.ds_Wtime.getColumn(e.row,"PROCESSSEGMENTID");
        			procSegName = this.ds_Wtime.getColumn(e.row,"PROCESSSEGMENTNAME");
        			popupId = "SEARCH_ROUTING_FROM";
        		}
        		else if(e.cell == idxToProcID)
        		{
        			procSegID = this.ds_Wtime.getColumn(e.row,"TOPROCESSSEGMENTID");
        			procSegName = this.ds_Wtime.getColumn(e.row,"TOPROCESSSEGMENTNAME");
        			procUserSeq = this.ds_Wtime.getColumn(e.row,"USERSEQUENCE");
        			popupId = "SEARCH_ROUTING_TO";
        		}


        		var oArg = {};
        		oArg.arg_type = "BA";
        		oArg.arg_popupCd = "P00086";
        		oArg.arg_popupNm = "";
        		oArg.arg_rtnCols = "PLANTID|USERSEQUENCE|PROCESSPATHID|PROCESSSEGMENTID|PROCESSSEGMENTNAME|PROCESSDEFID|PROCESSDEFVERSION|ENTERPRISEID";
        		oArg.arg_paramCols = "PROCESSDEFID|PROCESSDEFVERSION|CURRPROCESSSEGMENTID|USERSEQUENCE|LANGUAGETYPE|ENTERPRISEID";
        		oArg.arg_paramValues = processDefId  + "|" + processDefVer + "|" + "|" + procUserSeq
        							+ "|" + languageType + "|" + this.gf_getEnterpriseId();
        		oArg.arg_searchStr = "1=1"; //"PROCESSSEGMENTID=" + procSegID + "|PROCESSSEGMENTNAME=" + procSegName ;

        		this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=730,height=530");
        	}

        };

        /*
         *	상단 그리드 row 추가 시
         */
        this.div_work_btnAddRow_ds_Wtime_onclick = function(obj,e)
        {
        	var nRow = this.ds_Wtime.addRow();
        	var procRow = this.ds_ProcessPath.rowposition;

        	this.ds_Wtime.setColumn(nRow , "WTIMEDEFNAME", "WTIME"+nRow);
        	this.ds_Wtime.setColumn(nRow , "WTIMEDEFIDNEW", "WTIME"+nRow);
        	this.ds_Wtime.setColumn(nRow , "PROCESSDEFID", this.ds_ProcessPath.getColumn(procRow,"PROCESSDEFID"));
        	this.ds_Wtime.setColumn(nRow , "PROCESSDEFVERSION", this.ds_ProcessPath.getColumn(procRow,"PROCESSDEFVERSION"));
        	this.ds_Wtime.setColumn(nRow , "TOPROCESSDEFID", this.ds_ProcessPath.getColumn(procRow,"PROCESSDEFID"));
        	this.ds_Wtime.setColumn(nRow , "TOPROCESSDEFVERSION", this.ds_ProcessPath.getColumn(procRow,"PROCESSDEFVERSION"));
        	this.ds_Wtime.setColumn(nRow , "PROCESSSEGMENTVERSION", "*");
        	this.ds_Wtime.setColumn(nRow , "TOPROCESSSEGMENTVERSION", "*");
        	this.ds_Wtime.setColumn(nRow , "VALIDSTATE", "Valid");
        	this.ds_Wtime.setColumn(nRow , "WTIMETYPE", "Max");
        	this.ds_Wtime.setColumn(nRow , "HIDDEN_PROCESSSEGMENTID", this.ds_ProcessPath.getColumn(procRow,"PROCESSSEGMENTID"));
        };

        /*
         *	하단 그리드 row 추가 시
         */
        this.div_work_btnAddRow_ds_WtimeAction_onclick = function(obj,e)
        {
        	var wRow = this.ds_Wtime.rowposition;
        	var nRow = this.ds_WtimeAction.addRow();
        	var seq = this.nfn_isNull(this.ds_WtimeAction.getMax("ACTIONSEQUENCE")) ? 1 : this.ds_WtimeAction.getMax("ACTIONSEQUENCE") + 1;

        	if(this.nfn_isNull(this.ds_Wtime.getColumn(wRow,"WTIMEDEFID")) ){
        		this.ds_WtimeAction.setColumn(nRow , "WTIMEDEFID", this.ds_Wtime.getColumn(wRow,"WTIMEDEFIDNEW"));
        	} else {
        		this.ds_WtimeAction.setColumn(nRow , "WTIMEDEFID", this.ds_Wtime.getColumn(wRow,"WTIMEDEFID"));
        	}
        	this.ds_WtimeAction.setColumn(nRow , "ACTIONSEQUENCE", seq);
        	this.ds_WtimeAction.setColumn(nRow , "VALIDSTATE", "Valid");

        };

        /*
         *	상단 그리드 Excel Upload
         */
        this.div_work_btn_xlUp_onclick = function(obj,e)
        {
        	if(this.gfn_dsIsUpdated(this.ds_WtimeAction))
        	{
        		var btn = this.gfn_confirm("WRITTENBEDELETE", "information", ""); //"입력한 내용이 있으면 현재 작성중인 내용이 모두 삭제됩니다."

        		if(bRtn == false) return;
        	}

        	this.Mode = "Excel";
        	this.ds_Wtime.clearData();
        	this.gfn_import_excel("ds_Wtime", "fn_excel_success", "fn_excel_fail", "A1", "A2");
        };

        /*
         *	엑셀 업로드 실패 시
         */
        this.fn_excel_fail = function ()
        {
        	alert("error occurred!!");
        };

        /*
         *	엑셀 업로드 이후...
         */
        this.fn_excel_success = function ()
        {
        	trace("SUCCESS");
        	trace(this.ds_Wtime.saveXML());



        };

        this.tab_search_Tabpage1_btn_search_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.fn_init,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.tab_search_Tabpage1_btn_clear_onclick,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.guidetip04.addEventHandler("onclick",this.tab_search_Tabpage1_guidetip04_onclick,this);
            this.tab_search.Tabpage1.form.btn_REWORKNUMBER.addEventHandler("onclick",this.tab_search_Tabpage1_btnProductCode_onclick,this);
            this.div_work.form.grdWtime.addEventHandler("onexpanddown",this.div_work_grdWtime_onexpanddown,this);
            this.div_work.form.grdProcessPath.addEventHandler("oncellclick",this.div_work_grd_RoutionRollLoss_oncellclick,this);
            this.div_work.form.grdWtimeAction.addEventHandler("onexpanddown",this.div_work_grdWtimeAction_onexpanddown,this);
            this.div_work.form.btnAddRow_ds_Wtime.addEventHandler("onclick",this.div_work_btnAddRow_ds_Wtime_onclick,this);
            this.div_work.form.btnAddRow_ds_WtimeAction.addEventHandler("onclick",this.div_work_btnAddRow_ds_WtimeAction_onclick,this);
            this.ds_ProcessPath.addEventHandler("onrowposchanged",this.ds_operation_onrowposchanged,this);
            this.ds_Wtime.addEventHandler("onrowposchanged",this.ds_Wtime_onrowposchanged,this);
            this.ds_Wtime.addEventHandler("canrowposchange",this.ds_Wtime_canrowposchange,this);
            this.ds_Wtime.addEventHandler("oncolumnchanged",this.ds_Wtime_oncolumnchanged,this);
            this.ds_WtimeAction.addEventHandler("onrowposchanged",this.ds_operation_onrowposchanged,this);
            this.ds_Action.addEventHandler("onrowposchanged",this.ds_operation_onrowposchanged,this);
        };
        this.loadIncludeScript("BAS03300M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();