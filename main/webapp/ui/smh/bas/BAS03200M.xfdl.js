(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS03200M");
            this.set_titletext("Routing WIndow Time");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"RODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNM\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"COMPLETIONWAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UOMDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"PNLSIZEXAXIS\" type=\"STRING\" size=\"256\"/><Column id=\"PNLSIZEYAXIS\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"PCSMM\" type=\"STRING\" size=\"256\"/><Column id=\"USELAYER\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_4step", this);
            obj._setContents("<ColumnInfo><Column id=\"LOOKUP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOOKUP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MEANING\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ENABLED_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE1\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE2\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE3\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE4\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE5\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE6\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE7\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE8\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE9\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE10\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTCODEID\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAYSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"DICTIONARYID\" type=\"STRING\" size=\"256\"/><Column id=\"DICTIONARYID2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_WtimeExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"WTIMEDEFNAME\" type=\"STRING\" size=\"32\"/><Column id=\"FR_USERSEQUENCE\" type=\"STRING\" size=\"32\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"32\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"32\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"32\"/><Column id=\"TO_USERSEQUENCE\" type=\"STRING\" size=\"32\"/><Column id=\"TOPROCESSSEGMENTID\" type=\"STRING\" size=\"32\"/><Column id=\"TOPROCESSSEGMENTNAME\" type=\"STRING\" size=\"32\"/><Column id=\"TOPROCESSSTATE\" type=\"STRING\" size=\"32\"/><Column id=\"WTIMETYPE\" type=\"STRING\" size=\"32\"/><Column id=\"WTIMELIMIT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"RODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNM\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj.set_text("Routing Window Time");
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
            obj.set_taborder("6");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PLANTID","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,SiteType,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProductDefVersion","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("품목 버전");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("D803F17F3C844E62AA1972AB54C4432A");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","125","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
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
            obj.set_taborder("8");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip01","0","0","15",null,null,"0",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip02","0","0",null,"10","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip03","0","30",null,"5","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04","0","105",null,"20","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","125","10","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProcductName","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMNAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFVERSION","108","60","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDNM","108","85","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProductCode","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("PRODUCTDEFID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID","108","35","143","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_PRODUCTDEFID",null,"35","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDetail","25.05%","34",null,"63","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("8");
            obj.set_cssclass("grd_detail");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_fillareatype("datarow");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none");
            obj.set_binddataset("ds_detail");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"31\"/><Row size=\"31\"/></Rows><Band id=\"body\"><Cell cssclass=\"cell_head\" text=\"고객사명\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" wordWrap=\"english\" tooltiptext=\"CUTOMERNAME\"/><Cell col=\"1\" text=\"bind:CUSTOMERNAME\" textAlign=\"left\" wordWrap=\"english\"/><Cell col=\"2\" cssclass=\"cell_head\" text=\"품목코드\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" wordWrap=\"english\" tooltiptext=\"PRODUCTDEFID\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\" wordWrap=\"english\"/><Cell col=\"4\" cssclass=\"cell_head\" text=\"Rev\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" wordWrap=\"english\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\" wordWrap=\"english\"/><Cell col=\"6\" cssclass=\"cell_head\" text=\"품목명\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" wordWrap=\"english\" tooltiptext=\"PRODUCTDEFNAME\"/><Cell col=\"7\" colspan=\"3\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\" wordWrap=\"english\" cssclass=\"cell_end\"/><Cell row=\"1\" cssclass=\"cell_head\" text=\"작업구분\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" wordWrap=\"english\" tooltiptext=\"WORKTYPE\"/><Cell row=\"1\" col=\"1\" text=\"bind:JOBTYPENAME\" textAlign=\"left\" wordWrap=\"english\"/><Cell row=\"1\" col=\"2\" cssclass=\"cell_head\" text=\"생산구분\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" wordWrap=\"english\" tooltiptext=\"PRODUCTIONTYPE\"/><Cell row=\"1\" col=\"3\" text=\"bind:PRODUCTIONTYPENAME\" textAlign=\"left\" wordWrap=\"english\"/><Cell row=\"1\" col=\"4\" cssclass=\"cell_head,cell_point\" text=\"RTR/SHEET\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" wordWrap=\"english\"/><Cell row=\"1\" col=\"5\" text=\"bind:RTRSHT\" textAlign=\"left\" wordWrap=\"english\"/><Cell row=\"1\" col=\"6\" cssclass=\"cell_head\" text=\"PNL X\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" wordWrap=\"english\" tooltiptext=\"PANELX\"/><Cell row=\"1\" col=\"7\" text=\"bind:PNLSIZEXAXIS\" textAlign=\"left\" wordWrap=\"english\"/><Cell row=\"1\" col=\"8\" cssclass=\"cell_head\" text=\"PNL Y\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" wordWrap=\"english\" tooltiptext=\"PANELY\"/><Cell row=\"1\" col=\"9\" text=\"bind:PNLSIZEYAXIS\" textAlign=\"left\" wordWrap=\"english\" cssclass=\"cell_end\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("StaticTitleWTime1","25.5%","97","100","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("9");
            obj.set_text("W-Time 정의");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grdWtime","25.05%","131",null,"332","1",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_Wtime");
            obj.set_autoenter("select");
            obj.set_treeinitstatus("expand,null");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"W-Time 정의명\"/><Cell col=\"2\" text=\"시작 공정수순\"/><Cell col=\"3\" text=\"공정ID\" cssclass=\"cell_point\"/><Cell col=\"4\" text=\"공정명\"/><Cell col=\"5\" text=\"공정진행상태\" cssclass=\"cell_point\"/><Cell col=\"6\" text=\"종료 공정수순\"/><Cell col=\"7\" text=\"TO 공정 ID\" cssclass=\"cell_point\"/><Cell col=\"8\" text=\"TO 공정명\"/><Cell col=\"9\" text=\"TO 공정진행상태\" cssclass=\"cell_point\"/><Cell col=\"10\" text=\"W-Type\"/><Cell col=\"11\" text=\"W-TIME 설정시간(Min)\" cssclass=\"cell_point\"/><Cell col=\"12\" text=\"유효상태\"/><Cell col=\"13\" text=\"생성자\"/><Cell col=\"14\" text=\"생성일\"/><Cell col=\"15\" text=\"수정자\"/><Cell col=\"16\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:WTIMEDEFNAME\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:FR_USERSEQUENCE\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTID\" expandshow=\"show\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\"/><Cell col=\"4\" text=\"bind:PROCESSSEGMENTNAME\"/><Cell col=\"5\" text=\"bind:PROCESSSTATE\" combocodecol=\"LOOKUP_CODE\" edittype=\"combo\" displaytype=\"combotext\" combodataset=\"ds_Step\" combodatacol=\"MEANING\"/><Cell col=\"6\" text=\"bind:TO_USERSEQUENCE\"/><Cell col=\"7\" text=\"bind:TOPROCESSSEGMENTID\" expandshow=\"show\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\"/><Cell col=\"8\" text=\"bind:TOPROCESSSEGMENTNAME\"/><Cell col=\"9\" text=\"bind:TOPROCESSSTATE\" combocodecol=\"LOOKUP_CODE\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_ToStep\" combodatacol=\"MEANING\"/><Cell col=\"10\" text=\"bind:WTIMETYPE\" combocodecol=\"C,QtimeType,SEL,Y,Y\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"11\" text=\"bind:WTIMELIMIT\" edittype=\"mask\" maskeditformat=\"#,###\"/><Cell col=\"12\" text=\"bind:VALIDSTATE\" combocodecol=\"C,ValidState,SEL,Y,Y\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"13\" text=\"bind:CREATOR\"/><Cell col=\"14\" text=\"bind:CREATEDTIME\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"15\" text=\"bind:MODIFIER\"/><Cell col=\"16\" text=\"bind:MODIFIEDTIME\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_Wtime","StaticTitleWTime1:0","97","140","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("10");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("title","0","0","160","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("11");
            obj.set_text("Routing Window Time");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_ProcessPath","title:2","0",null,"34","728",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grdProcessPath","0","34",null,null,"grdWtime:10","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("13");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_ProcessPath");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"60\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"250\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\" Site ID\"/><Cell col=\"2\" text=\"공정수순\"/><Cell col=\"3\" text=\"공정ID\"/><Cell col=\"4\" text=\"공정명\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PLANTID\"/><Cell col=\"2\" text=\"bind:USERSEQUENCE\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTID\"/><Cell col=\"4\" text=\"bind:PROCESSSEGMENTNAME\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("StaticTitleWTime2","25.05%","463","100","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("15");
            obj.set_text("W-Time 실행");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_WtimeAction","StaticTitleWTime2:6","463","140","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("14");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grdWtimeAction","25.05%","497",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_binddataset("ds_WtimeAction");
            obj.set_autoenter("select");
            obj.set_treeinitstatus("expand,null");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"W-Action\" cssclass=\"cell_point\"/><Cell col=\"2\" text=\"Sequence\" cssclass=\"cell_point\"/><Cell col=\"3\" text=\"유효상태\" tooltiptext=\"VALIDSTATE\"/><Cell col=\"4\" text=\"생성자\"/><Cell col=\"5\" text=\"생성일\"/><Cell col=\"6\" text=\"수정자\"/><Cell col=\"7\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:WTIMEACTIONID\" displaytype=\"combotext\" edittype=\"expr:dataset.getRowType(currow) ==2 ? &apos;combo&apos;:&apos;none&apos;\" combodataset=\"ds_Action\" combocodecol=\"ACTIONID\" combodatacol=\"ACTIONNAME\"/><Cell col=\"2\" text=\"bind:ACTIONSEQUENCE\" edittype=\"mask\" maskeditformat=\"#,###\" maskeditautoselect=\"true\" maskedittrimtype=\"both\"/><Cell col=\"3\" text=\"bind:VALIDSTATE\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,ValidState,SEL,Y,Y\"/><Cell col=\"4\" text=\"bind:CREATOR\"/><Cell col=\"5\" text=\"bind:CREATEDTIME\"/><Cell col=\"6\" text=\"bind:MODIFIER\"/><Cell col=\"7\" text=\"bind:MODIFIEDTIME\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grdWtime",null,"103","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_Wtime",null,"103","26","24","btn_xlDn_grdWtime:0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btnAddRow_ds_Wtime",null,"103","26","24","btn_delRow_ds_Wtime:0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            obj.set_text("");
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

            obj = new Static("sta_searchTitle","0","47","290","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tab_search.Tabpage1.form.edt_PRODUCTDEFVERSION","value","ds_search","PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tab_search.Tabpage1.form.edt_PRODUCTDNM","value","ds_search","PRODUCTDEFNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab_search.Tabpage1.form.edt_PRODUCTDEFID","value","ds_search","PRODUCTDEFID");
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
        this.addIncludeScript("BAS03200M.xfdl","lib::lib_bas.xjs");
        this.registerScript("BAS03200M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: Routing WIndow Time
         * 파일명 		: BAS03200M.xfdl
         * 작성자 		: 김애리
         * 작성일 		: 2021.2.18
         * AS-IS		: RoutingQueueTime
         * 설  명		: 시작 공정부터 끝 공정까지 큐타임과 Action을 설정한다.
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.2.18	김애리   	최초작성
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
        	var sController 	= "/bas03200/selectActionList.do";
        	var sInDatasets 	= "";
        	var sOutDatasets = "ds_Action=output";
        	var sArgs 			= "";
        	//this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false);
        };

        this.get4Step = function ()
        {
        	var sSvcID 			= "select4step";
        	var sController 	= "/bas03200/select4step.do";
        	var sInDatasets 	= "";
        	var sOutDatasets = "ds_4step=output";
        	var sArgs 			= "";
        	//this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false);
        };

        this.getStepAll = function ()
        {
        	var sSvcID 			= "selectStepAll";
        	var sController 	= "/bas03200/selectStepAll.do";
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
        	var strColIdList = "edt_PRODUCTDEFID,edt_PRODUCTDEFVERSION";
        	var strColNmList = "품목코드,품목 버전";
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
        	this.ds_sendDefault.setColumn(0,"PRODUCTDEFID",this.ds_detail.getColumn(0,"PRODUCTDEFID"));
        	this.ds_sendDefault.setColumn(0,"PRODUCTDEFVERSION",this.ds_detail.getColumn(0,"PRODUCTDEFVERSION"));

        	var wRow = this.ds_Wtime.rowcount == 1 ? 0 : this.ds_Wtime.rowposition;
        	var wTimeDefID = this.ds_Wtime.getColumn(wRow,"WTIMEDEFID");
        	if(this.nfn_isNull(wTimeDefID)) wTimeDefID = this.ds_Wtime.getColumn(wRow,"WTIMEDEFIDNEW");

        	for(var i=0;i<this.ds_WtimeAction.rowcount;i++)
        	{
        		this.ds_WtimeAction.setColumn(i , "WTIMEDEFID", wTimeDefID);
        	}

        	var sSvcID 			= "saveRoutingWtime";
        	var sController 	= "/bas03200/saveRoutingWtime.do";
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
        		var strColIdList = "PROCESSSEGMENTID,PROCESSSTATE,TOPROCESSSEGMENTID,TOPROCESSSTATE,WTIMETYPE,WTIMELIMIT";
        		var strColNmList = "PROCESSSEGMENTID,PROCESSSTATE,TOPROCESSSEGMENTID,TOPROCESSSTATE,WTIMETYPE,WTIMELIMIT";
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
        		case "selectEcmLookupValuesVList2ds_C4StepSEL" :
        		{
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
        	case "SEARCH_PRODUCTD":
        	{//PRODUCTDEFID|PRODUCTDEFVERSION|PRODUCTDEFNAME
        		this.ds_search.setColumn(0,"PRODUCTDEFID",rtn[0]);
        		this.ds_search.setColumn(0,"PRODUCTDEFVERSION",rtn[1]);
        		this.ds_search.setColumn(0,"PRODUCTDEFNM",rtn[2]);
        		break;
        	}
        	case "SEARCH_ROUTING_FROM":
        	{//PLANTID|USERSEQUENCE|PROCESSPATHID|PROCESSSEGMENTID|PROCESSSEGMENTNAME|PROCESSDEFID|PROCESSDEFVERSION|ENTERPRISEID
        		var nRow = this.ds_Wtime.rowposition;

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
        		var nRow = this.ds_Wtime.rowposition;

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
        	this.ds_detail.clearData();
        	this.ds_Wtime.clearData();

        	var sSvcID 			= "selectWindowTimeList";
        	var sController 	= "/bas03200/selectWindowTimeList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_ProcessPath=ds_ProcessPath ds_detail=ds_detail ds_Wtime=ds_Wtime";
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
        	var sController 	= "/bas03200/selectWindowActionList.do";
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
        	// gfn_openPopup(arg_type, popupCd, popupNm, rtnCols, paramCols, paramValues, searchStr);
        //-----------------
        // arg_type    : A::사용자가 선택, B:: 한건존재시 자동 셋팅
        // popupCd     : 공통팝업 관리 화면에서 생성되는 팝업코드
        // popupNm     : 변경할팝업화면명 , 변경하지 않을 경우 팝업화면 타이틀은 관리화면의 타이틀로 지정됨
        // rtnCols     : 구분자 : "|"   : 그리드에 출력될 컬럼 지정 (않을 경우 관리화면의 그리드로 출력됨)
        // paramCols   : 구분자 : "|" : where 구문에 들어갈 컬럼
        // paramValues : 구분자 : "|"  : where 구문에 들어갈 컬럼에 대한 값
        // searchStr   : 팝업 조회조건 콤보값 = 조회 값
        	this.ds_search.setColumn(0,"PRODUCTDEFID",this.tab_search.Tabpage1.form.edt_PRODUCTDEFID.value);

        	var popupId = "SEARCH_PRODUCTD";
        	var pPRODUCTDIVISION = "Product";
        	var pPlantID = this.ds_search.getColumn(0,"PLANTID");
        	var processDefId = this.ds_search.getColumn(0,"PRODUCTDEFID");
        	var prductIDCondition = processDefId == "" ? "" : "TXTPRODUCTDEFNAME=" + processDefId + "|";

        	var oArg = {};
        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = "P00105";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "PRODUCTDEFID|PRODUCTDEFVERSION|PRODUCTDEFNAME";
        	oArg.arg_paramCols = "PLANTID";
        	oArg.arg_paramValues = pPlantID;
        	oArg.arg_searchStr = prductIDCondition + "PRODUCTDIVISION=" + pPRODUCTDIVISION;

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=800,height=800");
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
        	var idxFrProcID = this.div_work.form.grdWtime.getBindCellIndex("body","PROCESSSEGMENTID");
        	var idxToProcID = this.div_work.form.grdWtime.getBindCellIndex("body","TOPROCESSSEGMENTID");

        	var popupId = "";
        	var processDefId = this.ds_detail.getColumn(0,"PRODUCTDEFID");
        	var processDefVer = this.ds_detail.getColumn(0,"PRODUCTDEFVERSION");
        	var procSegID = "";
        	var procSegName = "";
        	var procUserSeq = "";
        	var languageType = nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType");

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
        	oArg.arg_paramCols = "PROCESSDEFID|PROCESSDEFVERSION|PROCESSSEGMENTID|PROCESSSEGMENTNAME|CURRPROCESSSEGMENTID|USERSEQUENCE|LANGUAGETYPE|ENTERPRISEID";
        	oArg.arg_paramValues = processDefId + "|" + processDefVer + "|" + procSegID  + "|" + procSegName + "|" + "|" + procUserSeq
        						+ "|" + languageType + "|" + this.gf_getEnterpriseId();
        	oArg.arg_searchStr = "1=1";

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=730,height=530");

        };

        /*
         *	상단 그리드 row 추가 시
         */
        this.div_work_btnAddRow_ds_Wtime_onclick = function(obj,e)
        {
        	if(this.ds_ProcessPath.rowcount == 0) return;
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
        	if(this.ds_Wtime.rowcount == 0 ) return;
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
        	this.ds_WtimeExcel.clearData();
        	this.gfn_import_excel("ds_WtimeExcel", "fn_excel_success", "fn_excel_fail", "A1", "A2");
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
        	trace(this.ds_WtimeExcel.saveXML());

        	this.ds_Wtime.clearData();
        	this.ds_WtimeAction.clearData();
        	for(var r=0;r<this.ds_WtimeExcel.rowcount;r++)
        	{
        		var fRow = this.ds_ProcessPath.findRow("PROCESSSEGMENTID", this.ds_WtimeExcel.getColumn(r,"PROCESSSEGMENTID"))
        		var tRow = this.ds_ProcessPath.findRow("PROCESSSEGMENTID", this.ds_WtimeExcel.getColumn(r,"TOPROCESSSEGMENTID"))
        		if(fRow == -1)
        		{
        			//해당 정보와 일치하는 공정수순 ID가 존재하지 않습니다. {0}
        			this.gfn_Message("NotExistsProcessPathId", this.ds_WtimeExcel.getColumn(r,"PROCESSSEGMENTID"),"error", "ok");
        			return;
        		}

        		if(tRow == -1)
        		{
        			//해당 정보와 일치하는 공정수순 ID가 존재하지 않습니다. {0}
        			this.gfn_Message("NotExistsProcessPathId", this.ds_WtimeExcel.getColumn(r,"TOPROCESSSEGMENTID"),"error", "ok");
        			return;
        		}

        		this.ds_Wtime.addRow();

        		this.ds_Wtime.setColumn(r,"WTIMEDEFNAME",this.ds_WtimeExcel.getColumn(r,"WTIMEDEFNAME"));
        		this.ds_Wtime.setColumn(r,"USERSEQUENCE",this.ds_WtimeExcel.getColumn(r,"FR_USERSEQUENCE"));
        		this.ds_Wtime.setColumn(r,"FR_USERSEQUENCE",this.ds_WtimeExcel.getColumn(r,"FR_USERSEQUENCE"));
        		this.ds_Wtime.setColumn(r,"PROCESSSEGMENTID",this.ds_WtimeExcel.getColumn(r,"PROCESSSEGMENTID"));
        		this.ds_Wtime.setColumn(r,"HIDDEN_PROCESSSEGMENTID",this.ds_WtimeExcel.getColumn(r,"PROCESSSEGMENTID"));

        		this.ds_Wtime.setColumn(r,"PROCESSSEGMENTNAME",this.ds_WtimeExcel.getColumn(r,"PROCESSSEGMENTNAME"));

        		var stateRow = this.ds_4step.findRow("MEANING",this.ds_WtimeExcel.getColumn(r,"PROCESSSTATE"))
        		this.ds_Wtime.setColumn(r,"PROCESSSTATE",this.ds_4step.getColumn(stateRow,"LOOKUP_CODE"));

        		this.ds_Wtime.setColumn(r,"TO_USERSEQUENCE",this.ds_WtimeExcel.getColumn(r,"TO_USERSEQUENCE"));
        		this.ds_Wtime.setColumn(r,"TOPROCESSSEGMENTID",this.ds_WtimeExcel.getColumn(r,"TOPROCESSSEGMENTID"));
        		this.ds_Wtime.setColumn(r,"TOPROCESSSEGMENTNAME",this.ds_WtimeExcel.getColumn(r,"TOPROCESSSEGMENTNAME"));

        		stateRow = this.ds_4step.findRow("MEANING",this.ds_WtimeExcel.getColumn(r,"TOPROCESSSTATE"))
        		this.ds_Wtime.setColumn(r,"TOPROCESSSTATE",this.ds_4step.getColumn(stateRow,"LOOKUP_CODE"));

        		this.ds_Wtime.setColumn(r,"WTIMETYPE",this.ds_WtimeExcel.getColumn(r,"WTIMETYPE"));
        		this.ds_Wtime.setColumn(r,"WTIMELIMIT",this.ds_WtimeExcel.getColumn(r,"WTIMELIMIT"));

        		this.ds_Wtime.setColumn(r,"VALIDSTATE",this.ds_WtimeExcel.getColumn(r,"VALIDSTATE")=="유효"? "Valid" : "Invalid");
        		this.ds_Wtime.setColumn(r,"WTIMEDEFNAME",this.ds_WtimeExcel.getColumn(r,"WTIMEDEFNAME"));


        		this.ds_Wtime.setColumn(r,"PLANTID",this.gf_getSiteType());
        		var procPathID = this.ds_ProcessPath.getColumn(fRow,"PROCESSPATHID");
        		this.ds_Wtime.setColumn(r,"PROCESSPATHID",procPathID);
        		this.ds_Wtime.setColumn(r , "PROCESSDEFID", this.ds_ProcessPath.getColumn(fRow,"PROCESSDEFID"));
        		this.ds_Wtime.setColumn(r , "PROCESSDEFVERSION", this.ds_ProcessPath.getColumn(fRow,"PROCESSDEFVERSION"));
        		this.ds_Wtime.setColumn(r , "TOPROCESSDEFID", this.ds_ProcessPath.getColumn(fRow,"PROCESSDEFID"));
        		this.ds_Wtime.setColumn(r , "TOPROCESSDEFVERSION", this.ds_ProcessPath.getColumn(fRow,"PROCESSDEFVERSION"));
        		this.ds_Wtime.setColumn(r , "PROCESSSEGMENTVERSION", "*");
        		this.ds_Wtime.setColumn(r , "TOPROCESSSEGMENTVERSION", "*");
        		this.ds_Wtime.setColumn(r , "VALIDSTATE", "Valid");
        		this.ds_Wtime.setColumn(r , "WTIMETYPE", "Max");
        		this.ds_Wtime.setColumn(r , "HIDDEN_PROCESSSEGMENTID", this.ds_ProcessPath.getColumn(fRow,"PROCESSSEGMENTID"));
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.fn_init,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.tab_search_Tabpage1_btn_clear_onclick,this);
            this.tab_search.Tabpage1.form.btn_PRODUCTDEFID.addEventHandler("onclick",this.tab_search_Tabpage1_btnProductCode_onclick,this);
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
            this.ds_WtimeExcel.addEventHandler("onrowposchanged",this.ds_Wtime_onrowposchanged,this);
            this.ds_WtimeExcel.addEventHandler("canrowposchange",this.ds_Wtime_canrowposchange,this);
        };
        this.loadIncludeScript("BAS03200M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
