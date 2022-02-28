(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS02500M");
            this.set_titletext("사양변경등록비교");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_history", this);
            obj._setContents("<ColumnInfo><Column id=\"CHANGEPOINTNO\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDEPARTMENT\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE_YYYYMMDDHHMISS\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"EXISTSPECOWNER\" type=\"STRING\" size=\"256\"/><Column id=\"EXISTCUSTOMER\" type=\"STRING\" size=\"256\"/><Column id=\"RCPRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"RCPRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RCITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSSPECOWNER\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSCUSTOMER\" type=\"STRING\" size=\"256\"/><Column id=\"RCDIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"IMPLEMENTATIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGEREASON\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTORID\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"RCSTATEID\" type=\"STRING\" size=\"256\"/><Column id=\"RCSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"GOVERNANCENO\" type=\"STRING\" size=\"256\"/><Column id=\"GOVERNANCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"EXISTCUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"EXISTSPECOWNERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSCUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSSPECOWNERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDEPARTMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONFIRMDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTCLASS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_routing1", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSCHANGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALCHANGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SPECCHANGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLCHANGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PATHSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_routing2", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSCHANGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALCHANGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SPECCHANGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLCHANGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PATHSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_routing1_1", this);
            obj._setContents("<ColumnInfo><Column id=\"MATERIALDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_routing1_2", this);
            obj._setContents("<ColumnInfo><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"SPECCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEM\" type=\"STRING\" size=\"256\"/><Column id=\"CONTROLTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SL\" type=\"STRING\" size=\"256\"/><Column id=\"USL\" type=\"STRING\" size=\"256\"/><Column id=\"LSL\" type=\"STRING\" size=\"256\"/><Column id=\"UCL\" type=\"STRING\" size=\"256\"/><Column id=\"CL\" type=\"STRING\" size=\"256\"/><Column id=\"LCL\" type=\"STRING\" size=\"256\"/><Column id=\"UOL\" type=\"STRING\" size=\"256\"/><Column id=\"LOL\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_routing1_3", this);
            obj._setContents("<ColumnInfo><Column id=\"TOOLCODE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_routing2_1", this);
            obj._setContents("<ColumnInfo><Column id=\"MATERIALDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_routing2_2", this);
            obj._setContents("<ColumnInfo><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"SPECCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEM\" type=\"STRING\" size=\"256\"/><Column id=\"CONTROLTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SL\" type=\"STRING\" size=\"256\"/><Column id=\"USL\" type=\"STRING\" size=\"256\"/><Column id=\"LSL\" type=\"STRING\" size=\"256\"/><Column id=\"UCL\" type=\"STRING\" size=\"256\"/><Column id=\"CL\" type=\"STRING\" size=\"256\"/><Column id=\"LCL\" type=\"STRING\" size=\"256\"/><Column id=\"UOL\" type=\"STRING\" size=\"256\"/><Column id=\"LOL\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_routing2_3", this);
            obj._setContents("<ColumnInfo><Column id=\"TOOLCODE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_history_new", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHANGEPOINTNO\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDEPARTMENT\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE_YYYYMMDDHHMISS\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"EXISTSPECOWNER\" type=\"STRING\" size=\"256\"/><Column id=\"EXISTCUSTOMER\" type=\"STRING\" size=\"256\"/><Column id=\"RCPRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"RCPRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RCITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSSPECOWNER\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSCUSTOMER\" type=\"STRING\" size=\"256\"/><Column id=\"RCDIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"IMPLEMENTATIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGEREASON\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTORID\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"RCSTATEID\" type=\"STRING\" size=\"256\"/><Column id=\"RCSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"GOVERNANCENO\" type=\"STRING\" size=\"256\"/><Column id=\"GOVERNANCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"IMPLEMENTATIONTYPE1\" type=\"STRING\" size=\"256\"/><Column id=\"IMPLEMENTATIONTYPE2\" type=\"STRING\" size=\"256\"/><Column id=\"RCDIVISION1\" type=\"STRING\" size=\"256\"/><Column id=\"RCDIVISION2\" type=\"STRING\" size=\"256\"/><Column id=\"EXISTCUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"EXISTSPECOWNERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSCUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSSPECOWNERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDEPARTMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"CONFIRMDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTCLASS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"GOVERNANCESTATE\" type=\"STRING\" size=\"256\"/><Column id=\"P_PERIOD_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"P_PERIOD_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"SPECOWNER\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"RCSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"GOVERNANCENO\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_seq", this);
            obj._setContents("<ColumnInfo><Column id=\"GOVERNANCENO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_item", this);
            obj._setContents("<ColumnInfo><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERREV\" type=\"STRING\" size=\"256\"/><Column id=\"SPECWORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CAMWORKSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CAMWORKSTATENAME\" type=\"STRING\" size=\"256\"/><Column id=\"SPECOWNER\" type=\"STRING\" size=\"256\"/><Column id=\"SPECOWNERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CAMOWNER\" type=\"STRING\" size=\"256\"/><Column id=\"CAMOWNERNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_history_tab", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHANGEPOINTNO\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDEPARTMENT\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE_YYYYMMDDHHMISS\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"EXISTSPECOWNER\" type=\"STRING\" size=\"256\"/><Column id=\"EXISTCUSTOMER\" type=\"STRING\" size=\"256\"/><Column id=\"RCPRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"RCPRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RCITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSSPECOWNER\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSCUSTOMER\" type=\"STRING\" size=\"256\"/><Column id=\"RCDIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"IMPLEMENTATIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGEREASON\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTORID\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"RCSTATEID\" type=\"STRING\" size=\"256\"/><Column id=\"RCSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"GOVERNANCENO\" type=\"STRING\" size=\"256\"/><Column id=\"GOVERNANCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"IMPLEMENTATIONTYPE1\" type=\"STRING\" size=\"256\"/><Column id=\"IMPLEMENTATIONTYPE2\" type=\"STRING\" size=\"256\"/><Column id=\"RCDIVISION1\" type=\"STRING\" size=\"256\"/><Column id=\"RCDIVISION2\" type=\"STRING\" size=\"256\"/><Column id=\"EXISTCUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"EXISTSPECOWNERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSCUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSSPECOWNERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDEPARTMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_governance", this);
            obj._setContents("<ColumnInfo><Column id=\"GOVERNANCENO\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"RCPRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"RCPRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RCITEMNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_emailList", this);
            obj._setContents("<ColumnInfo><Column id=\"USERGROUPID\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"MBPH_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USERGROUPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","3",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("11");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","btn_reset:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_customSave",null,"16","26","24","btn_help:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_new",null,"16","26","24","btn_customSave:25",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_com_new");
            obj.set_tooltiptext("Toolbar_New");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_confirmCancel",null,"16","72","24","204",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("10");
            obj.set_text("확정취소");
            obj.set_cssclass("btn_com_basic");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_confirm",null,"16","72","24","btn_confirmCancel:0",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("9");
            obj.set_text("확정");
            obj.set_cssclass("btn_com_basic");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_sendMail",null,"16","72","24","btn_new:0",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_text("메일 발송");
            obj.set_cssclass("btn_com_basic");
            obj.set_fittocontents("width");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","111","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("2");
            obj.set_text("사양변경등록비교");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Button("btn_clear2","171","275","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","275","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"255","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00_00","161","281","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staSearchPeriod","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("등록기간");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("7693F1DF1E5842AD972326E4CE8D5234");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPlantList","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("STOPSITE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cboPlantList","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cboPeriodType","15","60","88","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("calStartDt","108","35","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_innerdataset("");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("calEndDt","108","60","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_innerdataset("");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_01",null,"55","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_01",null,"80","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02",null,"130","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProductionType","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTIONTYPE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cboProductionType","108","110","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03",null,"30","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00",null,"55","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00",null,"80","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00",null,"130","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProductCode","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMCODE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProductName","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMNAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00_00_00",null,"155","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staSpecOwner","0","185","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("24");
            obj.set_text("사양담당자");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("SPECOWNER");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00_00_00_00_00_00",null,"205","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_item","108","135",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("26");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_item",null,"135","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("27");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_specOwner","108","185",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("28");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_specOwner",null,"185","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("29");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_00_00_00",null,"205","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("30");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_itemNm","108","160","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("31");
            obj.set_readonly("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_01_00",null,"155","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("32");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staCustomer","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("33");
            obj.set_text("고객사");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("F993645129314EB2A2423955D6AB814C");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_customer",null,"85","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("34");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_01_01",null,"105","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("35");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_customer","108","85",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("36");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_01_01_00",null,"105","45","5","229",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("37");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00_00_00_00",null,"180","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("38");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_01_00_00",null,"180","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("39");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProductionType00","0","210","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("40");
            obj.set_text("R/C 등록여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("D59C4E04935945F79BA51B35E14F9C2C");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_rcState","108","210","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("41");
            obj.set_codecolumn("C,RCState,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_customer_id","74","461","140","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("42");
            obj.set_value("고객사ID(HIDDEN)");
            obj.set_visible("false");
            obj.set_text("고객사ID(HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_item_id","73","496","140","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("43");
            obj.set_value("품목ID (HIDDEN)");
            obj.set_visible("false");
            obj.set_text("품목ID (HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_specOwner_id","74","531","140","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("44");
            obj.set_value("사양담당자ID (HIDDEN)");
            obj.set_visible("false");
            obj.set_text("사양담당자ID (HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staSpecOwner00","0","235","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("45");
            obj.set_text("변경점 요청자");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CHANGEPOINTREQUESTOR");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_changeRequester","108","235",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("46");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_changeRequester",null,"235","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("47");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_changeRequester_id","74","568","140","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("48");
            obj.set_value("변경점요청자ID (HIDDEN)");
            obj.set_visible("false");
            obj.set_text("변경점요청자ID (HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_00_00_00_00",null,"230","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("49");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_search);
            obj.set_text("Tabpage2");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("staSpecOwner","0","15","103","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("관리번호");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("SPECOWNER");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt_governanceNo","108","15",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("1");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_governanceNo",null,"15","22","20","15",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"35","45","20","91",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_search2","15","55","146","36",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_clear2","171","55","102","36",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_formscrollbarsize("10");
            this.addChild(obj.name, obj);

            obj = new Tab("tab","0","0",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab);
            obj.set_text("변경등록");
            obj.set_tooltiptext("CHGGOVERNANCE");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Grid("grd_history","0","34",null,null,"0","317",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_history");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"76\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"180\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"상태\" tooltiptext=\"STATUS\"/><Cell col=\"2\" text=\"변경점 신청일\" tooltiptext=\"CHANGEPOINTDATE\"/><Cell col=\"3\" text=\"변경구분\" tooltiptext=\"CHANGETYPENAME\"/><Cell col=\"4\" text=\"적용구분\" tooltiptext=\"IMPLEMENTATIONTYPE\"/><Cell col=\"5\" text=\"생산구분\"/><Cell col=\"6\" text=\"고객사(기존)\" tooltiptext=\"EXISTCUSTOMER\"/><Cell col=\"7\" text=\"품목(기존)\" tooltiptext=\"EXISTINGPRODUCTDEFID\"/><Cell col=\"8\" text=\"품목 Rev.(기존)\" tooltiptext=\"PREVITEMREV\"/><Cell col=\"9\" text=\"품목명(기존)\" tooltiptext=\"EXISTINGPRODUCTDEFNAME\"/><Cell col=\"10\" text=\"사양담당(기존)\" tooltiptext=\"EXISTSPECOWNER\"/><Cell col=\"11\" text=\"고객사(변경)\" tooltiptext=\"TRANSCUSTOMER\"/><Cell col=\"12\" text=\"품목(변경)\" tooltiptext=\"TRANSPRODUCTDEFID\"/><Cell col=\"13\" text=\"품목Rev.(변경)\" tooltiptext=\"AFTERITEMREV\"/><Cell col=\"14\" text=\"품목명(변경)\" tooltiptext=\"TRANSPRODUCTDEFNAME\"/><Cell col=\"15\" text=\"사양담당(변경)\" tooltiptext=\"TRANSSPECOWNER\"/><Cell col=\"16\" text=\"변경점 신청부서\" tooltiptext=\"CHANGEPOINTDEPARTMENT\"/><Cell col=\"17\" text=\"의뢰자명\" tooltiptext=\"REQUESTERNAME\"/><Cell col=\"18\" text=\"변경사유\" tooltiptext=\"UPDATEREASON\"/><Cell col=\"19\" text=\"변경점 관리번호\" tooltiptext=\"CHANGEPOINTNO\"/><Cell col=\"20\" text=\"관리번호\" tooltiptext=\"GOVERNANCENO\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:RCSTATE\" textAlign=\"center\" displaytype=\"combotext\" combocodecol=\"C,RCState,,Y,N\"/><Cell col=\"2\" text=\"bind:REQUESTDATE\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:RCDIVISION\" combocodecol=\"C,GovernanceChangeType,,Y,N\" displaytype=\"combotext\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:IMPLEMENTATIONTYPE\" combocodecol=\"C,GovernanceImplementationType,,Y,N\" displaytype=\"combotext\" textAlign=\"center\"/><Cell col=\"5\" displaytype=\"combotext\" combocodecol=\"C,ProductionType,,Y,N\" text=\"bind:PRODUCTCLASS\"/><Cell col=\"6\" text=\"bind:EXISTCUSTOMERNAME\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:ITEMNAME\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:EXISTSPECOWNERNAME\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:TRANSCUSTOMERNAME\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:RCPRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:RCPRODUCTDEFVERSION\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:RCITEMNAME\" textAlign=\"left\"/><Cell col=\"15\" text=\"bind:TRANSSPECOWNERNAME\" textAlign=\"center\"/><Cell col=\"16\" text=\"bind:REQUESTDEPARTMENTNAME\" textAlign=\"left\"/><Cell col=\"17\" text=\"bind:REQUESTORNAME\" textAlign=\"center\"/><Cell col=\"18\" text=\"bind:CHANGEREASON\" textAlign=\"left\"/><Cell col=\"19\" text=\"bind:CHANGEPOINTNO\"/><Cell col=\"20\" text=\"bind:GOVERNANCENO\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_subTitle01","0","0","118","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("변경점 이력 현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("both");
            obj.set_tooltiptext("CHANGEPOINTSTATUS");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_history",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_delRow",null,"6","26","24","btn_xlDn_grd_history:0",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Div("Div01","0",null,null,"280","0","0",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_detail");
            obj.set_text("");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_historyDetail","0","0",null,"146","0",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form.Div01.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_history_new");
            obj.set_cssclass("grd_detail");
            obj.set_autoenter("select");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none");
            obj.set_autofittype("col");
            obj.set_enable("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"105\"/><Column size=\"25\"/><Column size=\"80\"/><Column size=\"25\"/><Column size=\"80\"/><Column size=\"105\"/><Column size=\"25\"/><Column size=\"80\"/><Column size=\"25\"/><Column size=\"80\"/><Column size=\"105\"/><Column size=\"105\"/></Columns><Rows><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"변경구분\" cssclass=\"cell_head\" font=\"normal 700 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" color=\"red\" tooltiptext=\"CHANGETYPENAME\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" border=\"1px solid #e8e8e8,0px solid #e8e8e8,1px solid #e8e8e8,1px solid #e8e8e8\" edittype=\"expr:RCSTATE  != &apos;Confirm&apos; ? &quot;checkbox&quot; : &quot;none&quot;\" text=\"bind:RCDIVISION1\"/><Cell col=\"2\" text=\"고객변경\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" border=\"1px solid #e8e8e8,0px solid #e8e8e8,1px solid #e8e8e8,1px solid #e8e8e8\" displaytype=\"text\" textAlign=\"left\" tooltiptext=\"CHANGEBYCUSTOMER\"/><Cell col=\"3\" text=\"bind:RCDIVISION2\" displaytype=\"checkboxcontrol\" border=\"1px solid #e8e8e8,0px solid #e8e8e8,1px solid #e8e8e8,1px solid #e8e8e8\" edittype=\"expr:RCSTATE  != &apos;Confirm&apos; ? &quot;checkbox&quot; : &quot;none&quot;\"/><Cell col=\"4\" text=\"사내변경\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" displaytype=\"text\" textAlign=\"left\" tooltiptext=\"CHANGEBYOURCOMPANY\"/><Cell col=\"5\" text=\"적용구분\" cssclass=\"cell_head\" font=\"normal 700 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" tooltiptext=\"IMPLEMENTATIONTYPE\"/><Cell col=\"6\" displaytype=\"checkboxcontrol\" edittype=\"expr:RCSTATE  != &apos;Confirm&apos; ? &quot;checkbox&quot; : &quot;none&quot;\" border=\"1px solid #e8e8e8,0px solid #e8e8e8,1px solid #e8e8e8,1px solid #e8e8e8\" text=\"bind:IMPLEMENTATIONTYPE1\"/><Cell col=\"7\" text=\"R/C\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" border=\"1px solid #e8e8e8,0px solid #e8e8e8,1px solid #e8e8e8,1px solid #e8e8e8\" displaytype=\"text\" textAlign=\"left\" tooltiptext=\"RCRESULT\"/><Cell col=\"8\" displaytype=\"checkboxcontrol\" edittype=\"expr:RCSTATE  != &apos;Confirm&apos; ? &quot;checkbox&quot; : &quot;none&quot;\" border=\"1px solid #e8e8e8,0px solid #e8e8e8,1px solid #e8e8e8,1px solid #e8e8e8\" text=\"bind:IMPLEMENTATIONTYPE2\"/><Cell col=\"9\" text=\"차기투입\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" displaytype=\"text\" textAlign=\"left\" tooltiptext=\"NEXTIN\"/><Cell col=\"10\" text=\"변경점 관리번호\" cssclass=\"cell_head\" font=\"normal 700 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" tooltiptext=\"CHANGEPOINTNO\"/><Cell col=\"11\" text=\"bind:CHANGEPOINTNO\"/><Cell row=\"1\" text=\"요청부서\" cssclass=\"cell_head\" font=\"normal 700 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" tooltiptext=\"CSMREQUESTDEPARTMENT\"/><Cell row=\"1\" col=\"1\" colspan=\"2\" text=\"bind:REQUESTDEPARTMENTNAME\"/><Cell row=\"1\" col=\"3\" colspan=\"2\" text=\"변경점 요청자\" cssclass=\"cell_head\" font=\"normal 700 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" tooltiptext=\"CHANGEPOINTREQUESTOR\"/><Cell row=\"1\" col=\"5\" text=\"bind:REQUESTORNAME\"/><Cell row=\"1\" col=\"6\" colspan=\"2\" text=\"등록일\" cssclass=\"cell_head\" font=\"normal 700 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell row=\"1\" col=\"8\" colspan=\"2\" text=\"bind:REQUESTDATE\"/><Cell row=\"1\" col=\"10\" font=\"normal 700 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" cssclass=\"cell_head\" text=\"완료일\"/><Cell row=\"1\" col=\"11\" text=\"bind:CONFIRMDATE\"/><Cell row=\"2\" cssclass=\"cell_head\"/><Cell row=\"2\" col=\"1\" colspan=\"2\" text=\"고객사\" cssclass=\"cell_head\" font=\"normal 700 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" tooltiptext=\"COMPANYCLIENT\"/><Cell row=\"2\" col=\"3\" colspan=\"2\" text=\"품목\" cssclass=\"cell_head\" font=\"normal 700 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" color=\"red\" tooltiptext=\"ITEM\"/><Cell row=\"2\" col=\"5\" text=\"내부Rev\" cssclass=\"cell_head\" font=\"normal 700 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" color=\"red\" tooltiptext=\"5810E287E4134FC693D018166C5DFBC7\"/><Cell row=\"2\" col=\"6\" colspan=\"5\" text=\"품목명\" cssclass=\"cell_head\" font=\"normal 700 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" tooltiptext=\"ITEMNAME\"/><Cell row=\"2\" col=\"11\" text=\"사양담당\" cssclass=\"cell_head\" font=\"normal 700 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" tooltiptext=\"SPECPERSON\"/><Cell row=\"3\" text=\"기존\" cssclass=\"cell_head\" font=\"normal 700 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" tooltiptext=\"BEFORE\"/><Cell row=\"3\" col=\"1\" colspan=\"2\" text=\"bind:EXISTCUSTOMERNAME\"/><Cell row=\"3\" col=\"3\" colspan=\"2\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"expr:RCSTATE  != &apos;Confirm&apos; ? &quot;show&quot; : &quot;&quot;\" expandsize=\"24\" cssclass=\"point\" edittype=\"none\" text=\"bind:PRODUCTDEFID\"/><Cell row=\"3\" col=\"5\" cssclass=\"point\" edittype=\"none\" text=\"bind:PRODUCTDEFVERSION\"/><Cell row=\"3\" col=\"6\" colspan=\"5\" text=\"bind:ITEMNAME\" displaytype=\"text\" textAlign=\"left\"/><Cell row=\"3\" col=\"11\" text=\"bind:EXISTSPECOWNERNAME\"/><Cell row=\"4\" text=\"변경\" cssclass=\"cell_head\" font=\"normal 700 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" tooltiptext=\"CHANGE\"/><Cell row=\"4\" col=\"1\" colspan=\"2\" text=\"bind:TRANSCUSTOMERNAME\"/><Cell row=\"4\" col=\"3\" colspan=\"2\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"expr:dataset.parent.fn_checkEdit(RCSTATE, RCDIVISION) ? &quot;show&quot; : &quot;hide&quot;\" expandsize=\"24\" cssclass=\"point\" edittype=\"none\" text=\"bind:RCPRODUCTDEFID\"/><Cell row=\"4\" col=\"5\" cssclass=\"point\" edittype=\"none\" text=\"bind:RCPRODUCTDEFVERSION\"/><Cell row=\"4\" col=\"6\" colspan=\"5\" text=\"bind:RCITEMNAME\" displaytype=\"text\" textAlign=\"left\"/><Cell row=\"4\" col=\"11\" text=\"bind:TRANSSPECOWNERNAME\"/><Cell row=\"5\" colspan=\"6\" text=\"변경내용\" cssclass=\"cell_head\" font=\"normal 700 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" tooltiptext=\"UPDATEREASON\"/><Cell row=\"5\" col=\"6\" colspan=\"6\" text=\"첨부파일\" cssclass=\"cell_head\" font=\"normal 700 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" tooltiptext=\"FILEATTACH\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new TextArea("txt_reason","0","145",null,null,"50.21%","0",null,null,null,null,this.div_work.form.tab.Tabpage1.form.Div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("point");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_wordWrap("char");
            this.div_work.form.tab.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Div("div_file","50.10%",null,null,"132","0","0",null,null,null,null,this.div_work.form.tab.Tabpage1.form.Div01.form);
            obj.set_taborder("2");
            obj.set_url("common::com_file_b2.xfdl");
            this.div_work.form.tab.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00","0",null,null,"34","Div01:-66","Div01:3",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("변경등록");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("both");
            obj.set_tooltiptext("CHGGOVERNANCE");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_history","sta_subTitle01:5","0","200","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab);
            obj.set_text("공정 비교");
            obj.set_tooltiptext("ROUTINGCOMPARE");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Tab("tab_01","50.42%","55.11%",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("12");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab.Tabpage2.form.tab_01);
            obj.set_text("자재");
            this.div_work.form.tab.Tabpage2.form.tab_01.addChild(obj.name, obj);

            obj = new Grid("grd_t2_011","0","10",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage2.form.tab_01.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_routing2_1");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"190\"/><Column size=\"60\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"자재품목코드\"/><Cell col=\"2\" text=\"자재품목명\"/><Cell col=\"3\" text=\"버전\"/><Cell col=\"4\" text=\"수량\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:MATERIALDEFID\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:MATERIALDEFNAME\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:MATERIALDEFVERSION\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:QTY\" displaytype=\"number\" textAlign=\"right\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab.Tabpage2.form.tab_01);
            obj.set_text("공정SPEC");
            this.div_work.form.tab.Tabpage2.form.tab_01.addChild(obj.name, obj);

            obj = new Grid("grd_t2_011","0","10",null,null,"2","0",null,null,null,null,this.div_work.form.tab.Tabpage2.form.tab_01.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_routing2_2");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"검사항목\"/><Cell col=\"2\" rowspan=\"2\" text=\"위치\"/><Cell col=\"3\" colspan=\"3\" text=\"SPEC\" cssclass=\"cell_headMaster\"/><Cell col=\"6\" colspan=\"3\" text=\"CONTROL LIMIT\" cssclass=\"cell_headMaster\"/><Cell col=\"9\" colspan=\"2\" text=\"OUTLIER\" cssclass=\"cell_headMaster\"/><Cell row=\"1\" col=\"3\" text=\"상한값\"/><Cell row=\"1\" col=\"4\" text=\"기준값\"/><Cell row=\"1\" col=\"5\" text=\"하한값\"/><Cell row=\"1\" col=\"6\" text=\"상한값\"/><Cell row=\"1\" col=\"7\" text=\"기준값\"/><Cell row=\"1\" col=\"8\" text=\"하한값\"/><Cell row=\"1\" col=\"9\" text=\"상한값\"/><Cell row=\"1\" col=\"10\" text=\"기준값\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:INSPITEM\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:LOCATION\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:LSL\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:SL\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:USL\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:상한값2\"/><Cell col=\"7\" text=\"bind:기준값2\"/><Cell col=\"8\" text=\"bind:하한값2\"/><Cell col=\"9\" text=\"bind:상한값3\"/><Cell col=\"10\" text=\"bind:기준값3\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.form.tab_01.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.div_work.form.tab.Tabpage2.form.tab_01);
            obj.set_text("치공구");
            this.div_work.form.tab.Tabpage2.form.tab_01.addChild(obj.name, obj);

            obj = new Grid("grd_durable","0","10",null,null,"2","0",null,null,null,null,this.div_work.form.tab.Tabpage2.form.tab_01.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_routing2_3");
            obj.set_autoupdatetype("itemselect");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"품목코드\" tooltiptext=\"ITEMCODE\"/><Cell col=\"2\" text=\"Rev.\" tooltiptext=\"INNERREVISION\"/><Cell col=\"3\" text=\"품목명\" tooltiptext=\"ITEMNAME\"/><Cell col=\"4\" text=\"치공구ID\"/><Cell col=\"5\" text=\"치공구명\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PRODUCTDEFID\" expandshow=\"hide\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:TOOLCODE\"/><Cell col=\"5\" text=\"bind:TOOLNAME\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.form.tab_01.Tabpage3.addChild(obj.name, obj);

            obj = new Grid("grd_routing2","50.42%","131",null,null,"0","tab_01:10",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_routing2");
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"180\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Site ID\"/><Cell col=\"2\" text=\"공정수순\"/><Cell col=\"3\" text=\"공정ID\"/><Cell col=\"4\" text=\"공정명\"/><Cell col=\"5\" text=\"공정\"/><Cell col=\"6\" text=\"자재\"/><Cell col=\"7\" text=\"SPEC\"/><Cell col=\"8\" text=\"치공구\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" cssclass=\"expr:dataset.parent.fn_checkGridColor(PROCESSCHANGETYPE)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"1\" text=\"bind:PLANTID\" cssclass=\"expr:dataset.parent.fn_checkGridColor(PROCESSCHANGETYPE)\"/><Cell col=\"2\" text=\"bind:USERSEQUENCE\" displaytype=\"number\" textAlign=\"right\" cssclass=\"expr:dataset.parent.fn_checkGridColor(PROCESSCHANGETYPE)\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTID\" textAlign=\"left\" displaytype=\"text\" cssclass=\"expr:dataset.parent.fn_checkGridColor(PROCESSCHANGETYPE)\"/><Cell col=\"4\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\" displaytype=\"text\" cssclass=\"expr:dataset.parent.fn_checkGridColor(PROCESSCHANGETYPE)\"/><Cell col=\"5\" text=\"bind:PROCESSCHANGETYPE\" displaytype=\"combotext\" cssclass=\"expr:dataset.parent.fn_checkGridColor(PROCESSCHANGETYPE)\" combocodecol=\"C,CompareType,,Y,N\"/><Cell col=\"6\" text=\"bind:MATERIALCHANGETYPE\" displaytype=\"combotext\" cssclass=\"expr:dataset.parent.fn_checkGridColor(PROCESSCHANGETYPE)\" combocodecol=\"C,CompareType,,Y,N\"/><Cell col=\"7\" text=\"bind:SPECCHANGETYPE\" displaytype=\"combotext\" cssclass=\"expr:dataset.parent.fn_checkGridColor(PROCESSCHANGETYPE)\" combocodecol=\"C,CompareType,,Y,N\"/><Cell col=\"8\" text=\"bind:TOOLCHANGETYPE\" displaytype=\"combotext\" cssclass=\"expr:dataset.parent.fn_checkGridColor(PROCESSCHANGETYPE)\" combocodecol=\"C,CompareType,,Y,N\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Tab("tab_00","0","55.11%",null,null,"tab_01:10","0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("11");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab.Tabpage2.form.tab_00);
            obj.set_text("자재");
            this.div_work.form.tab.Tabpage2.form.tab_00.addChild(obj.name, obj);

            obj = new Grid("grd_t2_011","0","10",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage2.form.tab_00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_routing1_1");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"190\"/><Column size=\"60\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"자재품목코드\"/><Cell col=\"2\" text=\"자재품목명\"/><Cell col=\"3\" text=\"버전\"/><Cell col=\"4\" text=\"수량\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:MATERIALDEFID\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:MATERIALDEFNAME\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:MATERIALDEFVERSION\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:QTY\" displaytype=\"number\" textAlign=\"right\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab.Tabpage2.form.tab_00);
            obj.set_text("공정SPEC");
            this.div_work.form.tab.Tabpage2.form.tab_00.addChild(obj.name, obj);

            obj = new Grid("grd_t2_011","0","10",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage2.form.tab_00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_routing1_2");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"검사항목\"/><Cell col=\"2\" rowspan=\"2\" text=\"위치\"/><Cell col=\"3\" colspan=\"3\" text=\"SPEC\" cssclass=\"cell_headMaster\"/><Cell col=\"6\" colspan=\"3\" text=\"CONTROL LIMIT\" cssclass=\"cell_headMaster\"/><Cell col=\"9\" colspan=\"2\" text=\"OUTLIER\" cssclass=\"cell_headMaster\"/><Cell row=\"1\" col=\"3\" text=\"상한값\"/><Cell row=\"1\" col=\"4\" text=\"기준값\"/><Cell row=\"1\" col=\"5\" text=\"하한값\"/><Cell row=\"1\" col=\"6\" text=\"상한값\"/><Cell row=\"1\" col=\"7\" text=\"기준값\"/><Cell row=\"1\" col=\"8\" text=\"하한값\"/><Cell row=\"1\" col=\"9\" text=\"상한값\"/><Cell row=\"1\" col=\"10\" text=\"기준값\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:INSPITEM\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:LOCATION\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:LSL\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:SL\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:USL\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:상한값2\"/><Cell col=\"7\" text=\"bind:기준값2\"/><Cell col=\"8\" text=\"bind:하한값2\"/><Cell col=\"9\" text=\"bind:상한값3\"/><Cell col=\"10\" text=\"bind:기준값3\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.div_work.form.tab.Tabpage2.form.tab_00);
            obj.set_text("치공구");
            this.div_work.form.tab.Tabpage2.form.tab_00.addChild(obj.name, obj);

            obj = new Grid("grd_durable","0","10",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage2.form.tab_00.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_routing1_3");
            obj.set_autoupdatetype("itemselect");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"품목코드\" tooltiptext=\"ITEMCODE\"/><Cell col=\"2\" text=\"Rev.\" tooltiptext=\"INNERREVISION\"/><Cell col=\"3\" text=\"품목명\" tooltiptext=\"ITEMNAME\"/><Cell col=\"4\" text=\"치공구ID\"/><Cell col=\"5\" text=\"치공구명\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PRODUCTDEFID\" expandshow=\"hide\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:TOOLCODE\"/><Cell col=\"5\" text=\"bind:TOOLNAME\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.form.tab_00.Tabpage3.addChild(obj.name, obj);

            obj = new Grid("grd_routing1","0","131",null,null,"grd_routing2:10","tab_00:10",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_routing1");
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"180\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Site ID\"/><Cell col=\"2\" text=\"공정수순\"/><Cell col=\"3\" text=\"공정 ID\"/><Cell col=\"4\" text=\"공정명\"/><Cell col=\"5\" text=\"공정\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" cssclass=\"expr:dataset.parent.fn_checkGridColor(PROCESSCHANGETYPE)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"1\" text=\"bind:PLANTID\" cssclass=\"expr:dataset.parent.fn_checkGridColor(PROCESSCHANGETYPE)\"/><Cell col=\"2\" text=\"bind:USERSEQUENCE\" displaytype=\"number\" textAlign=\"right\" cssclass=\"expr:dataset.parent.fn_checkGridColor(PROCESSCHANGETYPE)\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTID\" displaytype=\"text\" textAlign=\"left\" cssclass=\"expr:dataset.parent.fn_checkGridColor(PROCESSCHANGETYPE)\"/><Cell col=\"4\" text=\"bind:PROCESSSEGMENTNAME\" displaytype=\"text\" textAlign=\"left\" cssclass=\"expr:dataset.parent.fn_checkGridColor(PROCESSCHANGETYPE)\"/><Cell col=\"5\" text=\"bind:PROCESSCHANGETYPE\" displaytype=\"combotext\" combocodecol=\"C,CompareType,,Y,N\" cssclass=\"expr:dataset.parent.fn_checkGridColor(PROCESSCHANGETYPE)\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Div("Div01_00","50.52%","34",null,"63","0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","120","31",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.Div01_00.form);
            obj.set_taborder("0");
            obj.set_text("품목(변경)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("TRANSPRODUCTDEFID");
            this.div_work.form.tab.Tabpage2.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static30_00","0","31","120","31",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.Div01_00.form);
            obj.set_taborder("1");
            obj.set_text("품목명(변경)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("TRANSPRODUCTDEFNAME");
            this.div_work.form.tab.Tabpage2.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static30_01","50%","0","120","31",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.Div01_00.form);
            obj.set_taborder("2");
            obj.set_text("품목 Rev.(변경)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("TRANSPRODUCTDEFVERSION");
            this.div_work.form.tab.Tabpage2.form.Div01_00.addChild(obj.name, obj);

            obj = new Edit("edt_00","Static30:5","5",null,"20","Static30_01:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.Div01_00.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("1042198G1");
            this.div_work.form.tab.Tabpage2.form.Div01_00.addChild(obj.name, obj);

            obj = new Edit("edt_01","Static30_01:5","5",null,"20","5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.Div01_00.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("FA3");
            this.div_work.form.tab.Tabpage2.form.Div01_00.addChild(obj.name, obj);

            obj = new Edit("edt_02","Static30_00:5","36",null,"20","5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.Div01_00.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_enable("false");
            this.div_work.form.tab.Tabpage2.form.Div01_00.addChild(obj.name, obj);

            obj = new Div("Div01","0","34",null,"63","Div01_00:10",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","120","31",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("품목(기존)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("EXISTINGPRODUCTDEFID");
            this.div_work.form.tab.Tabpage2.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static30_00","0","31","120","31",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("품목명(기존)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("EXISTINGPRODUCTDEFNAME");
            this.div_work.form.tab.Tabpage2.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static30_01","50%","0","120","31",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.Div01.form);
            obj.set_taborder("2");
            obj.set_text("품목 Rev.(기존)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("EXISTINGPRODUCTDEFVERSION");
            this.div_work.form.tab.Tabpage2.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_00","Static30:5","5",null,"20","Static30_01:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.Div01.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("1042198G1");
            this.div_work.form.tab.Tabpage2.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_01","Static30_01:5","5",null,"20","5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.Div01.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("FA2");
            this.div_work.form.tab.Tabpage2.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_02","Static30_00:5","36",null,"20","5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.Div01.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_enable("false");
            this.div_work.form.tab.Tabpage2.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_01",null,"108","60","16","0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_text("공정 삭제");
            obj.set_cssclass("txt_12");
            obj.set_fittocontents("width");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_02_00_00",null,"108","16","16","sta_01:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("9");
            obj.set_background("#fac4c1");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_01_00",null,"108","60","16","sta_02_00_00:10",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_text("공정 이동");
            obj.set_cssclass("txt_12");
            obj.set_fittocontents("width");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_02_00",null,"108","16","16","sta_01_00:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("8");
            obj.set_background("#c7e6f6");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00",null,"108","60","16","sta_02_00:10",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("6");
            obj.set_text("공정 추가");
            obj.set_cssclass("txt_12");
            obj.set_fittocontents("width");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_02",null,"108","16","16","sta_01_00_00:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("7");
            obj.set_background("#c0e2c6");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_02_01",null,"6","103","24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("10");
            obj.set_text("스크롤링 동기");
            obj.set_cssclass("btn_WF_black");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","242","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tab_search.Tabpage1.form.cboPlantList","value","ds_search","PLANTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tab_search.Tabpage1.form.calStartDt","value","ds_search","P_PERIOD_PERIODFR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab_search.Tabpage1.form.calEndDt","value","ds_search","P_PERIOD_PERIODTO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab_search.Tabpage1.form.cboProductionType","value","ds_search","PRODUCTIONTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tab_search.Tabpage1.form.edt_item_id","value","ds_search","ITEMID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","tab_search.Tabpage1.form.edt_specOwner_id","value","ds_search","SPECOWNER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","tab_search.Tabpage1.form.edt_camOwner_id","value","ds_search","CAMOWNER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","tab_search.Tabpage1.form.edt_customer_id","value","ds_search","CUSTOMER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tab_search.Tabpage1.form.cbo_rcState","value","ds_search","RCSTATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tab_search.Tabpage1.form.edt_itemNm","value","ds_search","ITEMNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_work.form.tab.Tabpage1.form.Div01.form.txt_reason","value","ds_history_new","CHANGEREASON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_work.form.tab.Tabpage2.form.Div01.form.edt_00","value","ds_history_tab","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_work.form.tab.Tabpage2.form.Div01.form.edt_01","value","ds_history_tab","PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_work.form.tab.Tabpage2.form.Div01.form.edt_02","value","ds_history_tab","ITEMNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_work.form.tab.Tabpage2.form.Div01_00.form.edt_00","value","ds_history_tab","RCPRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_work.form.tab.Tabpage2.form.Div01_00.form.edt_01","value","ds_history_tab","RCPRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_work.form.tab.Tabpage2.form.Div01_00.form.edt_02","value","ds_history_tab","RCITEMNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","tab_search.Tabpage2.form.edt_governanceNo","value","ds_history_tab","GOVERNANCENO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","tab_search.Tabpage1.form.edt_changeRequester_id","value","ds_search","REQUESTER");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_file_b2.xfdl");
        };
        
        // User Script
        this.addIncludeScript("BAS02500M.xfdl","lib::lib_bas.xjs");
        this.registerScript("BAS02500M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 사양변경등록비교
         * 파일명 		: BAS02500M.xfdl
         * 작성자 		: 최성민
         * 작성일 		: 2021.04.12
         *
         * 설  명		: 기준관리 - 사양변경등록비교
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.12	최성민   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.searchDiv = this.tab_search.Tabpage1.form;
        this.fileDiv = this.div_work.form.tab.Tabpage1.form.Div01.form.div_file.form;
        this.formDiv = this.div_work.form.tab.Tabpage1.form.Div01.form;
        this.g_idx	= null;
        this.g_scrollSync = false;
        this.g_grd1 = this.div_work.form.tab.Tabpage2.form.grd_routing1;
        this.g_grd2 = this.div_work.form.tab.Tabpage2.form.grd_routing2;
        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.basfn_getPeriodData("ds_periodType");
        	this.basfn_saveBtn(this.div_header.form.btn_customSave); //저장버튼 공통처리 함수 호출
        	//그리드 틀고정
        	//this.nfn_cellFix(this.div_work.form.grd_reqList, 6);
        	this.fileDiv.sta_subTitle.set_visible(false);
        	this.basfn_setCustomQueryCmb(this.tab_search.Tabpage1.form.cboPlantList // Object
        						, "selectSiteList,ALL,Y,A" // OPTION
        						, null);	  // 추가 파라미터
        	this.fn_formInit();

        	var sArgName = this.gfn_getFrameAguments("menuName");

        	if(sArgName == "RunningChange") {
        		var sArgArr = this.gfn_getFrameAguments("objList");
        		var governanceNo = sArgArr[1];
        		this.div_work.form.tab.set_tabindex(1);
        		this.ds_history_tab.setColumn(0,"GOVERNANCENO", governanceNo);
        		this.fn_getGovernanceData(governanceNo);
        	} else {
        		this.fn_newData();
        	}

        	this.fn_getEmailAddrList();
        };

        this.fn_getEmailAddrList = function()
        {
        	this.ds_emailList.clearData();
        	var sSvcID 			= "selectEmailList";
        	var sController 	= "/basCommon/selectCustomQuery.do";
        	var sInDatasets   	= "";
        	var sOutDatasets  	= "ds_emailList=output";
        	var sArgs 		  	= "";
        		sArgs 			+= this.gfn_setParam("SQL_ID", "selectEmailList");
        		sArgs 			+= this.gfn_setParam("USERGROUPID", "RCChangeEmail");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, false); //동기 호출
        }

        this.fn_getGovernanceData = function(governanceNo)
        {
        	this.ds_governance.clearData();
        	var sSvcID 			= "selectGovernanceData";
        	var sController 	= "/bas02500/selectGovernanceData.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_governance=output";
        	var sArgs 			= "";
        		sArgs 			+= this.gfn_setParam("GOVERNANCENO", governanceNo);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, false); //동기 호출
        }
        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	if (this.gfn_dsIsUpdated(this.ds_history_new) || this.gfn_dsIsUpdated(this.ds_history)) {
        		if(!this.gfn_Message("WRITTENBEDELETE", null, "conf", "yesno"))
        		{
        			return;
        		};
        	}

        	this.ds_history.clearData();
        	this.ds_routing1.clearData();
        	this.ds_routing1_1.clearData();
        	this.ds_routing1_2.clearData();
        	this.ds_routing1_3.clearData();
        	this.ds_routing2.clearData();
        	this.ds_routing2_1.clearData();
        	this.ds_routing2_2.clearData();
        	this.ds_routing2_3.clearData();
        	this.ds_history_new.clearData();
        	this.ds_history_new.addRow();
        	this.ds_history_new.applyChange();

        	var sSvcID 			= "selectRcList";
        	var sController 	= "/bas02500/selectRcList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_history=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        /*
         * 기능 : 상세
         */
        this.fn_selectCamRequestKey = function ()
        {
        	this.ds_seq.clearData();
        	var sSvcID 			= "selectChangeNoId";
        	var sController 	= "/bas02500/selectChangeNoId.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_seq=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, false); //동기 호출
        };

        /*
         * 기능 : 상세
         */
        this.fn_selectItemDetail = function (type, itemId, itemVersion)
        {
        	this.ds_item.clearData();
        	var sSvcID 			= "selectItemDetail"+type;
        	var sController 	= "/bas01900/selectItemDetail.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_item=output";
        	var sArgs 			= "";
        		sArgs 			+= this.gfn_setParam("ITEMID", itemId);
        		sArgs 			+= this.gfn_setParam("ITEMVERSION", itemVersion);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, false); //동기 호출
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	if (!this.gfn_dsIsUpdated(this.ds_history_new) && !this.gfn_dsIsUpdated(this.ds_history))
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}

        	var governanceNo = this.ds_history_new.getColumn(0, "GOVERNANCENO");

        	if(this.nfn_isNull(governanceNo)){ //신규Data
        		this.g_idx = 0;
        	} else {
        		this.g_idx = this.ds_history.rowposition;	//기존Data
        	}

        	var dsObj 		= this.ds_history_new;
        	var implType 	= null;
        	var rcDivision	= null;
        	var implType1 	= dsObj.getColumn(0, "IMPLEMENTATIONTYPE1");
        	var implType2 	= dsObj.getColumn(0, "IMPLEMENTATIONTYPE2");
        	var rcDivision1 = dsObj.getColumn(0, "RCDIVISION1");
        	var rcDivision2 = dsObj.getColumn(0, "RCDIVISION2");
        	var itemId		= dsObj.getColumn(0, "PRODUCTDEFID");
        	var rcItemId	= dsObj.getColumn(0, "RCPRODUCTDEFID");
        	var changeReason= dsObj.getColumn(0, "CHANGEREASON");

        	if(this.nfn_isNull(rcDivision1) && this.nfn_isNull(rcDivision2)){
        		this.gfn_Message("ISREQUIREDSELECTCHANGETYPE", null, "warning", "ok");
        		return;
        	}


        	if(this.nfn_isNull(itemId)){
        		this.gfn_Message("ISREQUIREDPREVPRODUCT", null, "warning", "ok");
        		return;
        	}

        	if(this.nfn_isNull(rcItemId)){
        		this.gfn_Message("ISREQUIREDRCPRODUCT", null, "warning", "ok");
        		return;
        	}

        	if(this.nfn_isNull(changeReason)){
        		this.gfn_Message("ISREQUIREDCHANGEREASON", null, "warning", "ok");
        		return;
        	}

        	if(implType1=="1"){
        		implType="RC";
        	}
        	if(implType2=="1"){
        		implType="Next";
        	}

        	if(rcDivision1=="1"){
        		rcDivision="Customer";
        	}

        	if(rcDivision2=="1"){
        		rcDivision="OurCompany";
        	}


        	this.ds_history_new.setColumn(0, "RCDIVISION", 			rcDivision);
        	this.ds_history_new.setColumn(0, "IMPLEMENTATIONTYPE", 	implType);
        	this.ds_history_new.setColumn(0, "STATUS", 				"Request");
        	this.ds_history_new.setColumn(0, "REQUESTDEPARTMENT", 	this.gf_getDeptCd());


        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveRunningChange";
        	var sController 	= "/bas02500/saveRunningChange.do";
        	var sInDatasets 	= "INPUT=ds_history_new:U INPUT_D=ds_history:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 확정
         */
        this.fn_confirm = function (obj, e)
        {

        	var governanceNo 	= this.ds_history_new.getColumn(0, "GOVERNANCENO");
        	var status			= this.ds_history_new.getColumn(0, "RCSTATE");
        	var rowType			= this.ds_history_new.getRowType(0);

        	if (this.nfn_isNull(governanceNo))
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}


        	//신규입력건은 확정불가
        	if(rowType==2){
        		this.gfn_Message("InValidStdData003", this.nfn_nvl(this.nfn_getDictionarynameUpper("CHGGOVERNANCE"),"변경등록"), "warning", "ok");
        		return;
        	}

        	if(status=="Confirm"){
        		this.gfn_Message("ALREADYCONFIRMED", null, "warning", "ok");
        		return;
        	}

        	this.ds_history_new.setColumn(0, "STATUS", 				"Confirm");

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "confirmRunningChange";
        	var sController 	= "/bas02500/saveRunningChange.do";
        	var sInDatasets 	= "INPUT=ds_history_new:U INPUT_D=ds_history:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        /*
         * 기능 : 확정취소
         */
        this.fn_confirmCancel = function (obj, e)
        {
        	var governanceNo 	= this.ds_history_new.getColumn(0, "GOVERNANCENO");
        	var status			= this.ds_history_new.getColumn(0, "RCSTATE");
        	var rowType			= this.ds_history_new.getRowType(0);

        	if (this.nfn_isNull(governanceNo))
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}

        	//신규입력건은 확정불가
        	if(rowType==2){
        		this.gfn_Message("InValidStdData003", this.nfn_nvl(this.nfn_getDictionarynameUpper("CHGGOVERNANCE"),"변경등록"), "warning", "ok");
        		return;
        	}

        	if(status=="Request"){
        		this.gfn_Message("AlreadyRequest", null, "warning", "ok");
        		return;
        	}

        	this.ds_history_new.setColumn(0, "STATUS", 				"Cancel");

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "cancelRunningChange";
        	var sController 	= "/bas02500/saveRunningChange.do";
        	var sInDatasets 	= "INPUT=ds_history_new:U INPUT_D=ds_history:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
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
        		if (trId == "saveRunningChange")
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.ds_history_new.clearData();
        			this.fileDiv.set_enable(false);
        			this.fn_search();
        		} else if (trId == "confirmRunningChange") {
        			this.gfn_Message("Confirmation", null, "info", "ok");
        			this.ds_history_new.setColumn(0, "RCSTATE", "Confirm");
        			this.ds_history_new.applyChange();
        			this.fn_getRoutingData();
        		} else if (trId == "cancelRunningChange") {
        			this.gfn_Message("NoConfirmation", null, "info", "ok");
        			this.ds_history_new.setColumn(0, "RCSTATE", "Request");
        			this.ds_history_new.applyChange();
        			this.fn_getRoutingData();
        		} else if (trId == "selectRcList") {
        			var idx = 0;
        			if(!this.nfn_isNull(this.g_idx)){
        				idx = this.g_idx;
        			}
         			this.ds_history.set_enableevent(false);
         			this.ds_history.set_rowposition(idx);
         			this.ds_history.set_enableevent(true);
        			this.fn_selectData(idx);
        			this.g_idx = null;
        		} else if (trId == "selectRoutingList"){
        			this.fn_getRoutingDetailData1(0);
        			this.fn_getRoutingDetailData2(0);
        		} else if (trId == "selectRoutingDetailList2"){
        			// R/C에서 넘어온 Data는 PK가없어서 신규채번
        			var governanceNo = this.ds_history_new.getColumn(0, "GOVERNANCENO");
        			if(this.nfn_isNull(governanceNo)){
        				//신규ID 채번
        				this.fn_selectCamRequestKey();
        			}
        		} else if (trId == "selectChangeNoId"){
        			this.ds_history_new.setColumn(0, "GOVERNANCENO", this.ds_seq.getColumn(0,"GOVERNANCENO"));
        			this.fileDiv.set_enable(true);
        			this.fn_searchAttach(this.ds_seq.getColumn(0,"GOVERNANCENO"));
        			this.ds_history_new.applyChange();
        		} else if (trId == "selectItemDetailA"){
        			this.ds_history_new.setColumn(0, "EXISTCUSTOMER", 		this.ds_item.getColumn(0,"CUSTOMERID"));
        			this.ds_history_new.setColumn(0, "EXISTCUSTOMERNAME", 	this.ds_item.getColumn(0,"CUSTOMERNAME"));
        			this.ds_history_new.setColumn(0, "EXISTSPECOWNER", 		this.ds_item.getColumn(0,"SPECOWNER"));
        			this.ds_history_new.setColumn(0, "EXISTSPECOWNERNAME", 	this.ds_item.getColumn(0,"SPECOWNERNAME"));
        		} else if (trId == "selectItemDetailB"){
        			this.ds_history_new.setColumn(0, "TRANSCUSTOMER", 		this.ds_item.getColumn(0,"CUSTOMERID"));
        			this.ds_history_new.setColumn(0, "TRANSCUSTOMERNAME", 	this.ds_item.getColumn(0,"CUSTOMERNAME"));
        			this.ds_history_new.setColumn(0, "TRANSSPECOWNER", 		this.ds_item.getColumn(0,"SPECOWNER"));
        			this.ds_history_new.setColumn(0, "TRANSSPECOWNERNAME", 	this.ds_item.getColumn(0,"SPECOWNERNAME"));
        		} else if (trId =="selectGovernanceData"){
        			this.ds_history_tab.setColumn(0, "PRODUCTDEFID", 		this.ds_governance.getColumn(0, "PRODUCTDEFID"));
        			this.ds_history_tab.setColumn(0, "PRODUCTDEFVERSION", 	this.ds_governance.getColumn(0, "PRODUCTDEFVERSION"));
        			this.ds_history_tab.setColumn(0, "ITEMNAME", 			this.ds_governance.getColumn(0, "ITEMNAME"));
        			this.ds_history_tab.setColumn(0, "RCPRODUCTDEFID", 		this.ds_governance.getColumn(0, "RCPRODUCTDEFID"));
        			this.ds_history_tab.setColumn(0, "RCPRODUCTDEFVERSION", this.ds_governance.getColumn(0, "RCPRODUCTDEFVERSION"));
        			this.ds_history_tab.setColumn(0, "RCITEMNAME", 			this.ds_governance.getColumn(0, "RCITEMNAME"));
        			trace(this.ds_history_tab.saveXML());
        			this.fn_getRoutingData();
        		}
        	}
        };


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/

        this.fn_openPop = function(svcId, popId)
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

        	var popupId = svcId;
        	var oArg = {};
        	var opts = "width=650,height=500";

        	oArg.arg_type = "B";
        	oArg.arg_popupCd = popId;
        	oArg.arg_popupNm = "";
        	oArg.arg_paramCols = "";
        	oArg.arg_paramValues = "";
        	oArg.arg_searchStr = "";

        	if(svcId=="SCH_CUSTOMER"
        	   ||svcId=="SCH_SPEC_OWNER"
        	   ||svcId=="SCH_REQUESTER"
        	   ){ //검색조건에서 고객조회시 다건선택 가능하도록
        			oArg.arg_type = "CA";
        	 }


        		if(popId=="P00042"){ //고객사 조회
        			if(svcId=="SCH_CUSTOMER"){
        				oArg.arg_type = "CA";
        				oArg.arg_searchStr = "SEARCH_KEY=" + this.nfn_nvl(this.tab_search.Tabpage1.form.edt_customer.value,"");
        			} else {
        				oArg.arg_type = "BA";
        				oArg.arg_searchStr = "SEARCH_KEY=" + this.nfn_nvl(this.frmDiv.edt_customer.value,"");
        			}

        			oArg.arg_rtnCols = "CUSTOMERID|CUSTOMERNAME";
        		} else if (popId=="P00138" && svcId=="SCH_ITEM"){	//품목 조회
        			oArg.arg_type = "BA";
        			oArg.arg_rtnCols = "ITEMID|ITEMNAME|ITEMVERSION";
        			oArg.arg_searchStr = this.nfn_nvl(this.searchDiv.edt_item.value, "");
        		} else if (popId=="P00138" && svcId=="FRM_ITEMA"){	//품목 조회
        			oArg.arg_type = "BA";
        			oArg.arg_rtnCols = "ITEMID|ITEMNAME|ITEMVERSION";
        			oArg.arg_searchStr = this.nfn_nvl(this.ds_history_new.getColumn(0, "PRODUCTDEFID"), "");
        			oArg.arg_division = null;
        		} else if (popId=="P00138" && svcId=="FRM_ITEMB"){	//품목 조회
        			var rcDivision2 = this.ds_history_new.getColumn(this.ds_history_new.rowposition, "RCDIVISION2");
        			oArg.arg_type = "BA";
        			oArg.arg_rtnCols = "ITEMID|ITEMNAME|ITEMVERSION";
        			oArg.arg_searchStr = this.nfn_nvl(this.ds_history_new.getColumn(0, "RCPRODUCTDEFID"), "");
        			oArg.arg_division = rcDivision2;
        		} else if (popId=="P00062"){	//담당자 조회
        			oArg.arg_type = "BA";
        			oArg.arg_rtnCols = "USERID|USERNAME";
        			oArg.arg_paramCols = "USERGROUPID";
        			if(svcId=="SCH_SPEC_OWNER" || svcId=="FRM_SPEC_OWNER" || svcId=="SCH_REQUESTER"){ //사양담당자
        				oArg.arg_paramValues = "SPECOWNER";
        			} else if(svcId=="SCH_CAM_OWNER" || svcId=="FRM_CAM_OWNER"){ //CAM담당자
        				oArg.arg_paramValues = "CAMOWNER";
        			}

        			if(svcId=="SCH_SPEC_OWNER" ){ //사양담당자
        				oArg.arg_type = "CA";
        				oArg.arg_searchStr = "SEARCH_KEY=" + this.nfn_nvl(this.tab_search.Tabpage1.form.edt_specOwner.value,"");
        			}
        			if(svcId=="SCH_REQUESTER" ){ //CAM담당자
        				oArg.arg_type = "CA";
        				oArg.arg_searchStr = "SEARCH_KEY=" + this.nfn_nvl(this.tab_search.Tabpage1.form.edt_changeRequester.value,"");
        			}
        		}

        		if(svcId=="SCH_GOVERNANCE"){
        			oArg.arg_type = "BA";
        			oArg.arg_rtnCols = "GOVERNANCENO|PRODUCTDEFID|PRODUCTDEFVERSION|ITEMNAME|RCPRODUCTDEFID|RCPRODUCTDEFVERSION|RCPRODUCTDEFNAME";
        			oArg.arg_paramCols = "SQL_ID";
        			oArg.arg_paramValues = "selectGovernanceList";
        			oArg.arg_searchStr = "GOVERNANCENO=" + this.nfn_nvl(this.tab_search.Tabpage2.form.edt_governanceNo.value,"");
        		}

        		if(popId=="P00138"){	//품목조회
        			opts = "width=800,height=500";
        			this.gfn_openPopup(popupId,"bas::BAS02500P.xfdl",oArg,opts);
        		} else {
        			this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        		}
        }

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "SCH_CUSTOMER")
        	{
        		var objKey = "";
        		var objId = "";

        		for(var i=0; i<rtn.length; i++){
        			var colArray = rtn[i];
        			objKey += ","+ colArray[1];
        			objId  += ","+ colArray[0];
        		}

        		this.searchDiv.edt_customer.set_value(objKey.substr(1));
        		this.searchDiv.edt_customer_id.set_value(objId.substr(1));
        	}
        	if(sPopupId == "SCH_ITEM")
        	{
        		var objVersion = rtn[2];
        		var objId = rtn[0];
        		var objNm = rtn[1];

        		this.searchDiv.edt_item.set_value(objId+"|"+objVersion);
        		this.searchDiv.edt_item_id.set_value(objId+"|"+objVersion);
        		this.searchDiv.edt_item_nm.set_value(objNm);
        		//this.searchDiv.edt_item_cd.set_value(objVersion);

        	}
        	if(sPopupId == "SCH_SPEC_OWNER")
        	{
        		var objKey = "";
        		var objId = "";

        		for(var i=0; i<rtn.length; i++){
        			var colArray = rtn[i];
        			objKey += ","+ colArray[1];
        			objId  += ","+ colArray[0];
        		}

        		this.searchDiv.edt_specOwner.set_value(objKey.substr(1));
        		this.searchDiv.edt_specOwner_id.set_value(objId.substr(1));
        	}
        	if(sPopupId == "SCH_REQUESTER")
        	{
        		var objKey = "";
        		var objId = "";

        		for(var i=0; i<rtn.length; i++){
        			var colArray = rtn[i];
        			objKey += ","+ colArray[1];
        			objId  += ","+ colArray[0];
        		}

        		this.searchDiv.edt_changeRequester.set_value(objKey.substr(1));
        		this.searchDiv.edt_changeRequester_id.set_value(objId.substr(1));
        	}
        	if(sPopupId == "FRM_ITEMA")
        	{
        		this.ds_history_new.setColumn(0, "PRODUCTDEFID", rtn[0]);
        		this.ds_history_new.setColumn(0, "PRODUCTDEFVERSION", rtn[2]);
        		this.ds_history_new.setColumn(0, "ITEMNAME", rtn[1]);
        		//ITEM MASTER정보 추가조회
        		this.fn_selectItemDetail("A", rtn[0], rtn[2]);

        		var rcDivision2 = this.ds_history_new.getColumn(0, "RCDIVISION2");
        		if(rcDivision2=="1"){
        			this.fn_copyItem();
        		}
        	}
        	if(sPopupId == "FRM_ITEMB")
        	{
        		this.ds_history_new.setColumn(0, "RCPRODUCTDEFID", rtn[0]);
        		this.ds_history_new.setColumn(0, "RCPRODUCTDEFVERSION", rtn[2]);
        		this.ds_history_new.setColumn(0, "RCITEMNAME", rtn[1]);
        		//ITEM MASTER정보 추가조회
        		this.fn_selectItemDetail("B", rtn[0], rtn[2]);
        	}

        	if(sPopupId=="SCH_GOVERNANCE"){
        		this.ds_history_tab.clearData();
        		this.ds_history_tab.addRow();
        		this.ds_history_tab.setColumn(0, "GOVERNANCENO", rtn[0]);
        		this.ds_history_tab.setColumn(0, "PRODUCTDEFID", rtn[1]);
        		this.ds_history_tab.setColumn(0, "PRODUCTDEFVERSION", rtn[2]);
        		this.ds_history_tab.setColumn(0, "ITEMNAME", rtn[3]);
        		this.ds_history_tab.setColumn(0, "RCPRODUCTDEFID", rtn[4]);
        		this.ds_history_tab.setColumn(0, "RCPRODUCTDEFVERSION", rtn[5]);
        		this.ds_history_tab.setColumn(0, "RCITEMNAME", rtn[6]);
        		this.ds_history_tab.applyChange();
        	}

        }

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/

        /*
         * 기능 : 최초 호출되는 초기화 함수
         */
        this.fn_formInit = function ()
        {
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.searchDiv.cboPlantList.set_value(this.gf_getSiteType());
        	this.searchDiv.cboPeriodType.set_value("THISMONTH"); // 금월
        	this.searchDiv.edt_customer.set_value(null);
        	this.searchDiv.edt_customer_id.set_value(null);
        	this.searchDiv.edt_item.set_value(null);
        	this.searchDiv.edt_item_id.set_value(null);
        	this.searchDiv.edt_itemNm.set_value(null);
        	this.searchDiv.edt_specOwner.set_value(null);
        	this.searchDiv.edt_specOwner_id.set_value(null);
        	this.searchDiv.edt_changeRequester.set_value(null);
        	this.searchDiv.edt_changeRequester_id.set_value(null);
        	this.searchDiv.cbo_rcState.set_value("Request");
        	this.fn_setDate("THISMONTH");
        	this.ds_history.clearData();
        	this.ds_history_new.clearData();
        	this.ds_history_new.addRow();
        	this.ds_history_new.setColumn(0, "RCSTATE","new");
        	this.ds_history_new.applyChange();
        	this.fileDiv.set_enable(false);
        	this.formDiv.txt_reason.set_readonly(true);
        	this.formDiv.txt_reason.set_enable(false);


        }

        /*
         * 기능 : 검색일자 변경시 검색구분을 [사용자지정]으로 변경
         */
        this.fn_changeCustom = function ()
        {
        	this.searchDiv.cboPeriodType.set_value("CUSTOM");
        }

        /*
         * 기능 : 검색일자 바인딩 함수
         */
        this.fn_setDate = function (periodType)
        {
        	this.searchDiv.calStartDt.set_value(this.ds_periodType.getColumn(0,periodType+"_S"));
        	this.searchDiv.calEndDt.set_value(this.ds_periodType.getColumn(0,periodType+"_E"));
        }

        /*
         * 초기화 함수
         */
        this.fn_newData = function()
        {
        	var dsObj = this.ds_history_new;
        	if(dsObj == null) return;

        	//수정중인 데이터가 존재하면 확인
        	if (this.gfn_dsIsUpdated(dsObj) || this.gfn_dsIsUpdated(this.ds_history)){
        		var bOK = this.gfn_Message("WRITTENBEDELETE", null, "conf", "yesno");
        		if(!bOK)return;
        	}

        	this.ds_routing1.clearData();
        	this.ds_routing1_1.clearData();
        	this.ds_routing1_2.clearData();
        	this.ds_routing1_3.clearData();
        	this.ds_routing2.clearData();
        	this.ds_routing2_1.clearData();
        	this.ds_routing2_2.clearData();
        	this.ds_routing2_3.clearData();
        	dsObj.clearData();
        	var row = dsObj.insertRow(dsObj.rowposition+1);
        	dsObj.setColumn(row, "IMPLEMENTATIONTYPE2","1");
        	this.g_idx = 0;

        	//신규ID 채번
        	this.fn_selectCamRequestKey();

        	this.formDiv.txt_reason.set_readonly(false);
        	this.formDiv.txt_reason.set_enable(true);
        	this.fileDiv.div_fup.form.fup_AttachedFile.set_enable(true);
        	this.fileDiv.btn_fileDel.set_enable(true);
        	this.fileDiv.btn_upload03.set_enable(true);

        	this.div_work.form.tab.set_tabindex(0);
        	dsObj.applyChange();
        }

        this.fn_searchAttach = function(governanceNo)
        {
        	var divFile = this.fileDiv;
        	divFile.jobSysCd 		= "BAS";
        	divFile.atchTyCd 		= "EMAIL";
        	divFile.tableName 		= "BAS_GOVERNANCE";
        	divFile.subDir  		= "RunningChange";
        	divFile.atchSrcKey  	= governanceNo;
        	divFile.fn_search();
        }

        this.fn_selectData = function(crow)
        {
        	var obj = this.ds_history;
        	var governanceNo = obj.getColumn(crow, "GOVERNANCENO");
        	var grd	= this.div_work.form.tab.Tabpage1.form.Div01.form.grd_historyDetail;
        	var dsObj = this.ds_history_new;
        	dsObj.set_enableevent(false);
        	dsObj.clearData();
        	var row = dsObj.insertRow();
        	dsObj.copyRow(row, obj, crow);
        	dsObj.applyChange();

        	//첨부파일 수정가능처리
        	this.fileDiv.set_enable(true);
        	this.fn_searchAttach(governanceNo);

        	var implType 	= obj.getColumn(obj.rowposition, "IMPLEMENTATIONTYPE");
        	var rcDivision 	= obj.getColumn(obj.rowposition, "RCDIVISION");
        	var rcState		= obj.getColumn(obj.rowposition, "RCSTATE");

        	if(implType=="RC"){
        		dsObj.setColumn(row, "IMPLEMENTATIONTYPE1","1");
        		dsObj.setColumn(row, "IMPLEMENTATIONTYPE2","");
        	}
        	if(implType=="Next"){
        		dsObj.setColumn(row, "IMPLEMENTATIONTYPE1","");
        		dsObj.setColumn(row, "IMPLEMENTATIONTYPE2","1");
        	}
        	if(rcDivision=="OurCompany"){
        		dsObj.setColumn(row, "RCDIVISION1","");
        		dsObj.setColumn(row, "RCDIVISION2","1");
        	}
        	if(rcDivision=="Customer"){
        		dsObj.setColumn(row, "RCDIVISION1","1");
        		dsObj.setColumn(row, "RCDIVISION2","");
        	}
        	dsObj.set_enableevent(true);
        	dsObj.applyChange();

        	if(!this.nfn_isNull(rcState) && rcState =="Confirm"){
        		this.formDiv.txt_reason.set_readonly(true);
        		this.formDiv.txt_reason.set_enable(false);
        		this.fileDiv.div_fup.form.fup_AttachedFile.set_enable(false);
        		this.fileDiv.btn_fileDel.set_enable(false);
        		this.fileDiv.btn_upload03.set_enable(false);
        	} else {
        		this.formDiv.txt_reason.set_readonly(false);
        		this.formDiv.txt_reason.set_enable(true);
        		this.fileDiv.div_fup.form.fup_AttachedFile.set_enable(true);
        		this.fileDiv.btn_fileDel.set_enable(true);
        		this.fileDiv.btn_upload03.set_enable(true);
        	}
        	this.ds_search.setColumn(0, "GOVERNANCENO", governanceNo);
        	this.fn_getRoutingData();
        }

        this.fn_selectDataTab = function(crow)
        {
        	var obj = this.ds_history;
        	var governanceNo = obj.getColumn(crow, "GOVERNANCENO");
        	var grd	= this.div_work.form.tab.Tabpage1.form.Div01.form.grd_historyDetail;
        	var dsObj = this.ds_history_tab;
        	dsObj.clearData();
        	var row = dsObj.insertRow();
        	dsObj.copyRow(row, obj, crow);
        	dsObj.applyChange();
        	this.fn_getRoutingData();
        }


        this.fn_getRoutingData = function()
        {
        	this.ds_routing1.clearData();
        	this.ds_routing2.clearData();

        	var itemID_A		= this.ds_history_tab.getColumn(0, "PRODUCTDEFID");
        	var itemVersion_A	= this.ds_history_tab.getColumn(0, "PRODUCTDEFVERSION");
        	var itemID_B		= this.ds_history_tab.getColumn(0, "RCPRODUCTDEFID");
        	var itemVersion_B	= this.ds_history_tab.getColumn(0, "RCPRODUCTDEFVERSION");
        	var sSvcID 			= "selectRoutingList";
        	var sController 	= "/bas02500/selectRoutingList.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_routing1=output1 ds_routing2=output2";
        	var sArgs 			= "";
        		sArgs 			+= this.gfn_setParam("ITEMID_A", itemID_A);
        		sArgs 			+= this.gfn_setParam("ITEMVERSION_A", itemVersion_A);
        		sArgs 			+= this.gfn_setParam("ITEMID_B", itemID_B);
        		sArgs 			+= this.gfn_setParam("ITEMVERSION_B", itemVersion_B);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }


        this.fn_getRoutingDataTab2 = function()
        {
        	this.ds_routing1.clearData();
        	this.ds_routing2.clearData();

        	var itemID_A		= this.ds_history_tab.getColumn(0, "PRODUCTDEFID");
        	var itemVersion_A	= this.ds_history_tab.getColumn(0, "PRODUCTDEFVERSION");
        	var itemID_B		= this.ds_history_tab.getColumn(0, "RCPRODUCTDEFID");
        	var itemVersion_B	= this.ds_history_tab.getColumn(0, "RCPRODUCTDEFVERSION");
        	var sSvcID 			= "selectRoutingList";
        	var sController 	= "/bas02500/selectRoutingList.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_routing1=output1 ds_routing2=output2";
        	var sArgs 			= "";
        		sArgs 			+= this.gfn_setParam("ITEMID_A", itemID_A);
        		sArgs 			+= this.gfn_setParam("ITEMVERSION_A", itemVersion_A);
        		sArgs 			+= this.gfn_setParam("ITEMID_B", itemID_B);
        		sArgs 			+= this.gfn_setParam("ITEMVERSION_B", itemVersion_B);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }


        this.fn_getRoutingDetailData1 = function(rowPosition)
        {
        	this.ds_routing1_1.clearData();
        	this.ds_routing1_2.clearData();
        	this.ds_routing1_3.clearData();

        	var itemId			= this.ds_routing1.getColumn(rowPosition, "PRODUCTDEFID");
        	var itemVersion		= this.ds_routing1.getColumn(rowPosition, "PRODUCTDEFVERSION");
        	var processId		= this.ds_routing1.getColumn(rowPosition, "PROCESSDEFID");
        	var processVersion	= this.ds_routing1.getColumn(rowPosition, "PROCESSDEFVERSION");
        	var segmentId		= this.ds_routing1.getColumn(rowPosition, "PROCESSSEGMENTID");
        	var segmentVersion	= this.ds_routing1.getColumn(rowPosition, "PROCESSSEGMENTVERSION");

        	var sSvcID 			= "selectRoutingDetailList1";
        	var sController 	= "/bas02500/selectRoutingDetailList.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_routing1_1=output1 ds_routing1_2=output2 ds_routing1_3=output3";
        	var sArgs 			= "";
        		sArgs 			+= this.gfn_setParam("ITEMID", 					itemId);
        		sArgs 			+= this.gfn_setParam("ITEMVERSION", 			itemVersion);
        		sArgs 			+= this.gfn_setParam("PROCESSDEFID", 			processId);
        		sArgs 			+= this.gfn_setParam("PROCESSDEFVERSION", 		processVersion);
        		sArgs 			+= this.gfn_setParam("PROCESSSEGMENTID", 		segmentId);
        		sArgs 			+= this.gfn_setParam("PROCESSSEGMENTVERSION", 	segmentVersion);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }

        this.fn_getRoutingDetailData2 = function(rowPosition)
        {
        	this.ds_routing2_1.clearData();
        	this.ds_routing2_2.clearData();
        	this.ds_routing2_3.clearData();

        	var itemId			= this.ds_routing2.getColumn(rowPosition, "PRODUCTDEFID");
        	var itemVersion		= this.ds_routing2.getColumn(rowPosition, "PRODUCTDEFVERSION");
        	var processId		= this.ds_routing2.getColumn(rowPosition, "PROCESSDEFID");
        	var processVersion	= this.ds_routing2.getColumn(rowPosition, "PROCESSDEFVERSION");
        	var segmentId		= this.ds_routing2.getColumn(rowPosition, "PROCESSSEGMENTID");
        	var segmentVersion	= this.ds_routing2.getColumn(rowPosition, "PROCESSSEGMENTVERSION");

        	var sSvcID 			= "selectRoutingDetailList2";
        	var sController 	= "/bas02500/selectRoutingDetailList.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_routing2_1=output1 ds_routing2_2=output2 ds_routing2_3=output3";
        	var sArgs 			= "";
        		sArgs 			+= this.gfn_setParam("ITEMID", 					itemId);
        		sArgs 			+= this.gfn_setParam("ITEMVERSION", 			itemVersion);
        		sArgs 			+= this.gfn_setParam("PROCESSDEFID", 			processId);
        		sArgs 			+= this.gfn_setParam("PROCESSDEFVERSION", 		processVersion);
        		sArgs 			+= this.gfn_setParam("PROCESSSEGMENTID", 		segmentId);
        		sArgs 			+= this.gfn_setParam("PROCESSSEGMENTVERSION", 	segmentVersion);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }

        this.fn_checkEdit = function(rcState, rcDivision)
        {
        	var result = null;

        	if(rcState != 'Confirm'){
        		if(rcDivision=="OurCompany"){
        			//result = false;
        			//2021-05-26 사내변경도 RCITEM 수정할 수 있도록 수정, 임용희 차장
        			result = true;
        		} else {
        			result = true;
        		}
        	} else {
        		result = false;
        	}

        	return result;
        }

        this.fn_checkGridColor = function(processChangeType)
        {
        	var result = null;

        	if(processChangeType=="Move"){
        		result = "cell_bg_blue";
        	} else if(processChangeType=="Add"){
        		result = "cell_bg_green";
        	} else if(processChangeType=="Delete"){
        		result = "cell_bg_red";
        	}

        	return result;
        }
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.tab_search_Tabpage1_cboPeriodType_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != "CUSTOM"){
        		this.fn_setDate(e.postvalue);
        	}
        };
        this.tab_search_Tabpage1_btn_search00_01_onclick = function(obj,e)
        {
        	this.fn_openPop("SCH_CUSTOMER","P00042"); //고객사 조회
        };

        this.tab_search_Tabpage1_btn_search00_onclick = function(obj,e)
        {
        	this.fn_openPop("SCH_ITEM","P00138"); //품목 조회
        };

        this.div_work_tab_Tabpage1_grd_history_oncellclick = function(obj,e)
        {
        	if(e.row<0) return;
        	if(e.oldrow == e.row) return;

        	var bOk = true;
        	if (this.gfn_dsIsUpdated(this.ds_history_new)) {
        		if(!this.gfn_Message("WRITTENBEDELETE", null, "conf", "yesno")){
        			obj.selectRow(e.oldrow);
        			return;
        		}
        	}

        	this.fn_selectData(e.row);
        };

        this.ds_history_new_onvaluechanged = function(obj,e)
        {
        	var rcDivision1 = obj.getColumn(e.row, "RCDIVISION1");
        	var rcDivision2 = obj.getColumn(e.row, "RCDIVISION2");

        	if(e.columnid=="IMPLEMENTATIONTYPE1"){
        		obj.set_enableevent(false);
        		if(e.newvalue=="1"){
        			obj.setColumn(e.row, "IMPLEMENTATIONTYPE2", "");
        		} else if(e.newvalue=="0"){
        			obj.setColumn(e.row, "IMPLEMENTATIONTYPE1", "1");
        		}
        		obj.set_enableevent(true);
        	} else if(e.columnid=="IMPLEMENTATIONTYPE2"){
        		obj.set_enableevent(false);
        		if(e.newvalue=="1"){
        			obj.setColumn(e.row, "IMPLEMENTATIONTYPE1", "");
        		} else if(e.newvalue=="0"){
        			obj.setColumn(e.row, "IMPLEMENTATIONTYPE2", "1");
        		}
        		obj.set_enableevent(true);
        	}

        	if(e.columnid=="RCDIVISION1"){
        		obj.set_enableevent(false);
        		if(e.newvalue=="1"){
        			obj.setColumn(e.row, "RCDIVISION2", "");
        		} else if(e.newvalue=="0"){
        			obj.setColumn(e.row, "RCDIVISION1", "1");
        		}
        		obj.set_enableevent(true);
        	} else if(e.columnid=="RCDIVISION2"){
        		obj.set_enableevent(false);
        		if(e.newvalue=="1"){
        			obj.setColumn(e.row, "RCDIVISION1", "");
        			this.fn_copyItem();
        		} else if(e.newvalue=="0"){
        			obj.setColumn(e.row, "RCDIVISION2", "1");
        		}
        		obj.set_enableevent(true);
        	}

        	if(e.columnid=="PRODUCTDEFID"){
        		if(rcDivision2=="1"){
        			this.fn_copyItem();
        		}
        	}
        };

        this.fn_copyItem = function()
        {
        	var obj = this.ds_history_new;
        	obj.setColumn(0, "RCPRODUCTDEFID", 			obj.getColumn(0,"PRODUCTDEFID"));
        	obj.setColumn(0, "RCPRODUCTDEFVERSION", 	obj.getColumn(0,"PRODUCTDEFVERSION"));
        	obj.setColumn(0, "RCITEMNAME", 				obj.getColumn(0,"ITEMNAME"));
        	obj.setColumn(0, "TRANSSPECOWNER", 			obj.getColumn(0,"EXISTSPECOWNER"));
        	obj.setColumn(0, "TRANSSPECOWNERNAME", 		obj.getColumn(0,"EXISTSPECOWNERNAME"));
        	obj.setColumn(0, "TRANSCUSTOMERNAME", 		obj.getColumn(0,"EXISTCUSTOMERNAME"));
        	obj.setColumn(0, "TRANSCUSTOMER", 			obj.getColumn(0,"EXISTCUSTOMER"));
        }

        this.div_work_tab_Tabpage1_Div01_grd_historyDetail_onexpandup = function(obj,e)
        {
        	if(e.row < 0) return;
        	if (this.nfn_isEqualCol(obj, e.cell, "PRODUCTDEFID")) {
        		this.fn_openPop("FRM_ITEMA","P00138"); //품목 조회
        	}
        	if (this.nfn_isEqualCol(obj, e.cell, "RCPRODUCTDEFID")) {
        		this.fn_openPop("FRM_ITEMB","P00138"); //품목 조회
        	}
        };

        this.div_work_tab_Tabpage1_grd_circuitSpec1_oncloseup = function(obj,e)
        {
        	obj.updateToDataset();
        };

        this.div_work_tab_Tabpage1_Div01_grd_historyDetail_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){

        	}
        };

        this.div_work_tab_Tabpage2_grd_routing1_oncellclick = function(obj,e)
        {
        	if(e.row < 0) return;
        	if(e.oldrow == e.row) return;
        	this.fn_getRoutingDetailData1(e.row);
        };

        this.div_work_tab_Tabpage2_grd_routing2_oncellclick = function(obj,e)
        {
        	if(e.row < 0) return;
        	if(e.oldrow == e.row) return;
        	this.fn_getRoutingDetailData2(e.row);
        };

        this.div_work_tab_Tabpage1_btn_delRow_ds_history_onclick = function(obj,e)
        {
        	if(this.ds_history.rowposition < 0 ){
        		this.gfn_Message("CHECKREMOVETOOLDATA", "", "warning", "ok");
        		return;
        	}

        	var rcStateId = this.ds_history.getColumn(this.ds_history.rowposition, "RCSTATEID");
        	if(rcStateId=="Confirm"){
        		this.gfn_Message("ALREADYCONFIRMED", null, "warning", "ok");
        		return;
        	}

        	if(!this.gfn_Message("IsDeleted", null, "conf", "yesno")) {return};


        	this.ds_history.deleteRow(this.ds_history.rowposition);
        	this.ds_history_new.clearData();
        	this.ds_history_new.addRow();
        	this.fn_selectData(this.ds_history.rowposition);
        };

        this.fn_changeScroll = function(obj,e)
        {
        	var cssId = obj.cssclass;
        	if(cssId =="btn_WF_green"){
        		obj.set_cssclass("btn_WF_black");
        		obj.set_text(this.nfn_nvl(this.nfn_getDictionarynameUpper("SAMETIME"),"스크롤링 동기"));
        		this.g_scrollSync = false;
        	} else {
        		obj.set_cssclass("btn_WF_green");
        		obj.set_text(this.nfn_nvl(this.nfn_getDictionarynameUpper("EACHTIME"),"스크롤링 비동기"));
        		this.g_grd1.scrollTo(0, 0);
        		this.g_grd2.scrollTo(0, 0);
        		this.g_scrollSync = true;
        	}
        };

        this.div_work_tab_Tabpage1_grd_history_oncelldblclick = function(obj,e)
        {
        	this.div_work.form.tab.set_tabindex(1);
        	//this.fn_selectDataTab(e.row);
        };

        this.div_work_tab_onchanged = function(obj,e)
        {
        	this.tab_search.set_tabindex(e.postindex);
        	if(e.postindex==0){
        		this.div_header.form.btn_new.set_visible(true);
        		this.div_header.form.btn_customSave.set_visible(true);
        		this.div_header.form.btn_sendMail.set_visible(true);
        		this.div_header.form.btn_confirm.set_visible(false);
        		this.div_header.form.btn_confirmCancel.set_visible(false);
        		this.div_header.form.btn_sendMail.set_right("btn_new:0");
        	} else if(e.postindex==1){
        		this.div_header.form.btn_confirm.set_visible(true);
        		this.div_header.form.btn_confirmCancel.set_visible(true);
        		this.div_header.form.btn_new.set_visible(false);
        		this.div_header.form.btn_customSave.set_visible(false);
        		this.div_header.form.btn_sendMail.set_visible(false);
        		this.div_header.form.btn_confirmCancel.set_right("btn_help:0");
        		this.div_header.form.btn_confirm.set_right("btn_help:72");

        		this.fn_selectDataTab(this.ds_history.rowposition);
        	}
        };

        this.tab_search_Tabpage2_btn_governanceNo_onclick = function(obj,e)
        {
        	this.fn_openPop("SCH_GOVERNANCE","P00231"); //고객사 조회
        };

        this.fn_formInit2 = function(obj,e)
        {
        	this.tab_search.Tabpage2.form.edt_governanceNo.set_value(null);
        };

        this.div_work_tab_Tabpage2_tab_00_onchanged = function(obj,e)
        {
        	this.div_work.form.tab.Tabpage2.form.tab_01.set_tabindex(e.postindex);
        };

        this.div_work_tab_Tabpage2_tab_01_onchanged = function(obj,e)
        {
        	this.div_work.form.tab.Tabpage2.form.tab_00.set_tabindex(e.postindex);
        };

        //스크롤 동기화 함수
        this.fn_scrollMove = function(objTarget,objSource, hPos, vPos)
        {
        	if(this.g_scrollSync){
        		objTarget.set_enableevent(false);
        		var maxHPos = objTarget.hscrollbar.max;
        		var maxVPos = objTarget.vscrollbar.max;
        		objTarget.scrollTo(hPos>maxHPos ? maxHPos : hPos, vPos>maxVPos ? maxVPos : vPos);
        		objTarget.set_enableevent(true);
        	}
        }

        /********************ROUTING GRID*******************************************************/
        //ROUTING 세로스크롤 이벤트 핸들링(좌측)
        this.div_work_tab_Tabpage2_grd_routing1_onvscroll = function(obj,e)
        {
        	var hPos = this.g_grd2.hscrollbar.pos;
        	this.fn_scrollMove(this.g_grd2, this.g_grd1, hPos, e.pos);
        };
        //ROUTING 세로스크롤 이벤트 핸들링(우측)
        this.div_work_tab_Tabpage2_grd_routing2_onvscroll = function(obj,e)
        {
        	var hPos = this.g_grd1.hscrollbar.pos;
        	this.fn_scrollMove(this.g_grd1, this.g_grd2, hPos, e.pos);
        };
        //ROUTING 가로스크롤 이벤트 핸들링(좌측)
        this.div_work_tab_Tabpage2_grd_routing1_onhscroll = function(obj,e)
        {
        	var vPos = this.g_grd2.vscrollbar.pos;
        	this.fn_scrollMove(this.g_grd2, this.g_grd1, e.pos, vPos);
        };
        //ROUTING 가로스크롤 이벤트 핸들링(우측)
        this.div_work_tab_Tabpage2_grd_routing2_onhscroll = function(obj,e)
        {
        	var vPos = this.g_grd1.vscrollbar.pos;
        	this.fn_scrollMove(this.g_grd1, this.g_grd2, e.pos, vPos);
        };
        /********************ROUTING GRID*******************************************************/


        /********************자재 GRID*******************************************************/
        //자재 가로스크롤 이벤트 핸들링(좌측)
        this.div_work_tab_Tabpage2_tab_00_Tabpage1_grd_t2_011_onhscroll = function(obj,e)
        {
        	var vPos = this.div_work.form.tab.Tabpage2.form.tab_00.Tabpage1.form.grd_t2_011.vscrollbar.pos;
        	var targetGrd = this.div_work.form.tab.Tabpage2.form.tab_01.Tabpage1.form.grd_t2_011;
        	this.fn_scrollMove(targetGrd, obj, e.pos, vPos);
        };

        //자재 가로스크롤 이벤트 핸들링(우측)
        this.div_work_tab_Tabpage2_tab_01_Tabpage1_grd_t2_021_onhscroll = function(obj,e)
        {
        	var vPos = this.div_work.form.tab.Tabpage2.form.tab_01.Tabpage1.form.grd_t2_021.vscrollbar.pos;
        	var targetGrd = this.div_work.form.tab.Tabpage2.form.tab_00.Tabpage1.form.grd_t2_011;
        	this.fn_scrollMove(targetGrd, obj, e.pos, vPos);
        };

        //자재 세로스크롤 이벤트 핸들링(좌측)
        this.div_work_tab_Tabpage2_tab_00_Tabpage1_grd_t2_011_onvscroll = function(obj,e)
        {
        	var hPos = this.div_work.form.tab.Tabpage2.form.tab_00.Tabpage1.form.grd_t2_011.hscrollbar.pos;
        	var targetGrd = this.div_work.form.tab.Tabpage2.form.tab_01.Tabpage1.form.grd_t2_011;
        	this.fn_scrollMove(targetGrd, obj, hPos, e.pos);
        };

        //자재 세로스크롤 이벤트 핸들링(우측)
        this.div_work_tab_Tabpage2_tab_01_Tabpage1_grd_t2_011_onvscroll = function(obj,e)
        {
        	var hPos = this.div_work.form.tab.Tabpage2.form.tab_01.Tabpage1.form.grd_t2_011.hscrollbar.pos;
        	var targetGrd = this.div_work.form.tab.Tabpage2.form.tab_00.Tabpage1.form.grd_t2_011;
        	this.fn_scrollMove(targetGrd, obj, hPos, e.pos);
        };
        /********************자재 GRID*******************************************************/

        /********************공정SPEC GRID*******************************************************/
        //공정SPEC 가로스크롤 이벤트 핸들링(좌측)
        this.div_work_tab_Tabpage2_tab_00_Tabpage2_grd_t2_011_onhscroll = function(obj,e)
        {
        	var vPos = this.div_work.form.tab.Tabpage2.form.tab_00.Tabpage2.form.grd_t2_011.vscrollbar.pos;
        	var targetGrd = this.div_work.form.tab.Tabpage2.form.tab_01.Tabpage2.form.grd_t2_011;
        	this.fn_scrollMove(targetGrd, obj, e.pos, vPos);
        };

        //공정SPEC 가로스크롤 이벤트 핸들링(우측)
        this.div_work_tab_Tabpage2_tab_01_Tabpage2_grd_t2_011_onhscroll = function(obj,e)
        {
        	var vPos = this.div_work.form.tab.Tabpage2.form.tab_01.Tabpage2.form.grd_t2_011.vscrollbar.pos;
        	var targetGrd = this.div_work.form.tab.Tabpage2.form.tab_00.Tabpage2.form.grd_t2_011;
        	this.fn_scrollMove(targetGrd, obj, e.pos, vPos);
        };

        //공정SPEC 세로스크롤 이벤트 핸들링(좌측)
        this.div_work_tab_Tabpage2_tab_00_Tabpage2_grd_t2_011_onvscroll = function(obj,e)
        {
        	var hPos = this.div_work.form.tab.Tabpage2.form.tab_00.Tabpage2.form.grd_t2_011.hscrollbar.pos;
        	var targetGrd = this.div_work.form.tab.Tabpage2.form.tab_01.Tabpage2.form.grd_t2_011;
        	this.fn_scrollMove(targetGrd, obj, hPos, e.pos);
        };

        //공정SPEC 세로스크롤 이벤트 핸들링(우측)
        this.div_work_tab_Tabpage2_tab_01_Tabpage2_grd_t2_011_onvscroll = function(obj,e)
        {
        	var hPos = this.div_work.form.tab.Tabpage2.form.tab_01.Tabpage2.form.grd_t2_011.hscrollbar.pos;
        	var targetGrd = this.div_work.form.tab.Tabpage2.form.tab_00.Tabpage2.form.grd_t2_011;
        	this.fn_scrollMove(targetGrd, obj, hPos, e.pos);
        };

        /********************공정SPEC GRID*******************************************************/


        /********************치공구 GRID*******************************************************/
        //치공구 가로스크롤 이벤트 핸들링(좌측)
        this.div_work_tab_Tabpage2_tab_00_Tabpage3_grd_durable_onhscroll = function(obj,e)
        {
        	var vPos = this.div_work.form.tab.Tabpage2.form.tab_00.Tabpage3.form.grd_durable.vscrollbar.pos;
        	var targetGrd = this.div_work.form.tab.Tabpage2.form.tab_01.Tabpage3.form.grd_durable;
        	this.fn_scrollMove(targetGrd, obj, e.pos, vPos);
        };

        //치공구 가로스크롤 이벤트 핸들링(우측)
        this.div_work_tab_Tabpage2_tab_01_Tabpage3_grd_durable_onhscroll = function(obj,e)
        {
        	var vPos = this.div_work.form.tab.Tabpage2.form.tab_01.Tabpage3.form.grd_durable.vscrollbar.pos;
        	var targetGrd = this.div_work.form.tab.Tabpage2.form.tab_00.Tabpage3.form.grd_durable;
        	this.fn_scrollMove(targetGrd, obj, e.pos, vPos);
        };

        //치공구 세로스크롤 이벤트 핸들링(좌측)
        this.div_work_tab_Tabpage2_tab_00_Tabpage3_grd_durable_onvscroll = function(obj,e)
        {
        	var hPos = this.div_work.form.tab.Tabpage2.form.tab_00.Tabpage3.form.grd_durable.hscrollbar.pos;
        	var targetGrd = this.div_work.form.tab.Tabpage2.form.tab_01.Tabpage3.form.grd_durable;
        	this.fn_scrollMove(targetGrd, obj, hPos, e.pos);
        };

        //치공구 세로스크롤 이벤트 핸들링(우측)
        this.div_work_tab_Tabpage2_tab_01_Tabpage3_grd_durable_onvscroll = function(obj,e)
        {
        	var hPos = this.div_work.form.tab.Tabpage2.form.tab_01.Tabpage3.form.grd_durable.hscrollbar.pos;
        	var targetGrd = this.div_work.form.tab.Tabpage2.form.tab_00.Tabpage3.form.grd_durable;
        	this.fn_scrollMove(targetGrd, obj, hPos, e.pos);
        };
        /********************치공구 GRID*******************************************************/

        this.tab_search_Tabpage1_btn_changeRequester_onclick = function(obj,e)
        {
        	this.fn_openPop("SCH_REQUESTER","P00062");
        };

        this.tab_search_Tabpage1_btnSpecOwner_onclick = function(obj,e)
        {
        	this.fn_openPop("SCH_SPEC_OWNER","P00062");
        };

        this.fn_sendMail = function(obj,e)
        {
        	var governanceNo 	= this.ds_history_new.getColumn(0, "GOVERNANCENO");
        	var title 			= "사양 / CAM 변경 요청서";
        	var contents 		= "";
        	var addrList 		= new Array();
        	var userList 		= new Array();
        	var userIdList 		= new Array();
        	var userJikwiList 	= new Array();
        	var userDeptList 	= new Array();
        	var userUserGrpList = new Array();

        	if(this.nfn_isNull(governanceNo)){ //신규Data
        		this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}

        	for(var i=0; i<this.ds_emailList.rowcount; i++){
        		addrList[i] 		= this.ds_emailList.getColumn(i, "EMAIL_ADDR");
        		userList[i] 		= this.ds_emailList.getColumn(i, "USERID");
        		userIdList[i] 		= this.ds_emailList.getColumn(i, "USER_NM");
        		userDeptList[i] 	= this.ds_emailList.getColumn(i, "DEPT_NM");
        		userJikwiList[i] 	= this.ds_emailList.getColumn(i, "JIKWI_NM");
        		userUserGrpList[i] 	= this.ds_emailList.getColumn(i, "USERGROUPNAME");
        	}

        	var popupId = "EMAIL";
        	var oArg = {
        		subject : title,	 //제목
        		contents : "<div>"+this.fn_getMailContents()+"</div>",	//메일내용
        		objAddrList 	: addrList,  		//수신자 배열
        		objUserList 	: userList,  		//수신자명 배열
        		objUserIdList 	: userIdList,  		//수신자ID 배열
        		objDeptList 	: userDeptList,  	//수신부서 배열
        		objJikwiList 	: userJikwiList,  	//수신직위 배열
        		objUserGrpList 	: userUserGrpList,  //수신사용자그룹 배열
        		atchSrc : "BAS_GOVERNANCE",	//"BAS_ITEMMASTER", //업무에서 올려진 파일 첨부시 (테이블)
        		atchSrcKey : governanceNo	//"INTERFLEX|10400010A1|FA1"   //업무에서 올려진 파일 첨부시 (키값)
        		};
        	this.gfn_openPopup(popupId,"cmd::CMAM00100P.xfdl",oArg,"width=790,height=790");
        };


        this.fn_getMailContents = function()
        {
        	var blankStr	= "&nbsp;";
        	var implType 	= null;
        	var rcDivision	= null;
        	var implType1 	= this.ds_history_new.getColumn(0, "IMPLEMENTATIONTYPE1");
        	var implType2 	= this.ds_history_new.getColumn(0, "IMPLEMENTATIONTYPE2");
        	var rcDivision1 = this.ds_history_new.getColumn(0, "RCDIVISION1");
        	var rcDivision2 = this.ds_history_new.getColumn(0, "RCDIVISION2");
        	var enterprise	= this.nfn_nvl(this.gf_getEnterpriseId(), "");
        	var sender 		= this.nfn_nvl(this.ds_history_new.getColumn(0, "REQUESTORNAME"), 			this.gf_getUserId());	//요청자
        	var senderDept 	= this.nfn_nvl(this.ds_history_new.getColumn(0, "REQUESTDEPARTMENTNAME"), 	this.gf_getDeptNm());	//요청부서
        	var requestDate = this.nfn_nvl(this.ds_history_new.getColumn(0, "REQUESTDATE"), 			blankStr);	//요청일
        	var itemId 		= this.nfn_nvl(this.ds_history_new.getColumn(0, "PRODUCTDEFID"), 			blankStr);	//변경전 품목코드
        	var itemRev 	= this.nfn_nvl(this.ds_history_new.getColumn(0, "PRODUCTDEFVERSION"), 		blankStr);	//변경전 품목REV
        	var itemName 	= this.nfn_nvl(this.ds_history_new.getColumn(0, "ITEMNAME"), 				blankStr);	//변경전 품목명
        	var customer 	= this.nfn_nvl(this.ds_history_new.getColumn(0, "EXISTCUSTOMERNAME"), 		blankStr);	//변경전 고객
        	var specOwner 	= this.nfn_nvl(this.ds_history_new.getColumn(0, "EXISTSPECOWNERNAME"), 		blankStr);	//변경전 사양담당
        	var rcItemId 	= this.nfn_nvl(this.ds_history_new.getColumn(0, "RCPRODUCTDEFID"), 			blankStr);	//변경후 품목코드
        	var rcItemRev 	= this.nfn_nvl(this.ds_history_new.getColumn(0, "RCPRODUCTDEFVERSION"), 	blankStr);	//변경후 품목REV
        	var rcItemName 	= this.nfn_nvl(this.ds_history_new.getColumn(0, "RCITEMNAME"), 				blankStr);	//변경후 품목명
        	var rcCustomer 	= this.nfn_nvl(this.ds_history_new.getColumn(0, "TRANSCUSTOMERNAME"), 		blankStr);	//변경후 고객
        	var rcSpecOwner = this.nfn_nvl(this.ds_history_new.getColumn(0, "TRANSSPECOWNERNAME"), 		blankStr);	//변경후 사양담당
        	var changeReason= this.nfn_nvl(this.ds_history_new.getColumn(0, "CHANGEREASON"), 			blankStr);	//변경사유
        	changeReason = nexacro.replaceAll(changeReason,"\n" ,"<br/>");
        	if(implType1=="1"){implType=this.nfn_nvl(this.nfn_getDictionarynameUpper("RCRESULT"),"R/C");}
        	if(implType2=="1"){implType=this.nfn_nvl(this.nfn_getDictionarynameUpper("NEXTIN"),"차기투입");}
        	if(rcDivision1=="1"){rcDivision=this.nfn_nvl(this.nfn_getDictionarynameUpper("CHANGEBYCUSTOMER"),"고객변경");}
        	if(rcDivision2=="1"){rcDivision=this.nfn_nvl(this.nfn_getDictionarynameUpper("CHANGEBYOURCOMPANY"),"사내변경");}

        	enterprise = this.nfn_isNull(enterprise) ? "" : enterprise +" ";
        	senderDept = this.nfn_isNull(senderDept) ? "" : senderDept +" ";

        	var html = "";
        		html += '<p>안녕하세요<br/>'+enterprise+senderDept+sender+' 입니다.<br />요청사항 확인 후 적용 바랍니다.</p>\n';
        		html += '<table style="border-collapse: collapse; width: 100%; height: 36px;" border="1">																																			\n';
        		html += '<tbody>                                                                                                                                              \n';
        		html += '<tr style="height: 18px;">                                                                                                                           \n';
        		html += '<td style="width: 16.6667%; text-align: center; background-color: #73d1f6; height: 18px; font-size: 12px;"><strong>변경구분</strong></td>            \n';
        		html += '<td style="width: 16.6667%; text-align: center; background-color: #73d1f6; height: 18px; font-size: 12px;"><strong>적용구분</strong></td>            \n';
        		html += '<td style="width: 16.6667%; text-align: center; background-color: #73d1f6; height: 18px; font-size: 12px;"><strong>요청부서</strong></td>            \n';
        		html += '<td style="width: 16.6667%; text-align: center; background-color: #73d1f6; height: 18px; font-size: 12px;"><strong>요청자</strong></td>              \n';
        		html += '<td style="width: 16.6667%; text-align: center; background-color: #73d1f6; height: 18px; font-size: 12px;"><strong>등록일</strong></td>              \n';
        		html += '</tr>                                                                                                                                                \n';
        		html += '<tr style="height: 18px;">                                                                                                                           \n';
        		html += '<td style="width: 16.6667%; height: 18px; font-size: 12px;text-align:center;">'+rcDivision+'</td>                                                                              \n';
        		html += '<td style="width: 16.6667%; height: 18px; font-size: 12px;text-align:center;">'+implType+'</td>                                                                              \n';
        		html += '<td style="width: 16.6667%; height: 18px; font-size: 12px;text-align:center;">'+senderDept+'</td>                                                                              \n';
        		html += '<td style="width: 16.6667%; height: 18px; font-size: 12px;text-align:center;">'+sender+'</td>                                                                              \n';
        		html += '<td style="width: 16.6667%; height: 18px; font-size: 12px;text-align:center;">'+requestDate+'</td>                                                                              \n';
        		html += '</tr>                                                                                                                                                \n';
        		html += '</tbody>                                                                                                                                             \n';
        		html += '</table>                                                                                                                                             \n';
        		html += '<table style="border-collapse: collapse; width: 100%; height: 54px; margin-top: 1px;" border="1">                                                    \n';
        		html += '<tbody>                                                                                                                                              \n';
        		html += '<tr style="height: 18px;">                                                                                                                           \n';
        		html += '<td style="width: 7.00761%; height: 18px; font-size: 12px;">&nbsp;</td>                                                                              \n';
        		html += '<td style="width: 16.2406%; height: 18px; text-align: center; background-color: #73d1f6; font-size: 12px;"><strong>고객사</strong></td>              \n';
        		html += '<td style="width: 15.3883%; height: 18px; text-align: center; background-color: #73d1f6; font-size: 12px;"><strong>품목코드</strong></td>            \n';
        		html += '<td style="width: 7.14964%; height: 18px; text-align: center; background-color: #73d1f6; font-size: 12px;"><strong>REV</strong></td>                 \n';
        		html += '<td style="width: 42.9452%; height: 18px; text-align: center; background-color: #73d1f6; font-size: 12px;"><strong>품목명</strong></td>              \n';
        		html += '<td style="width: 11.269%; height: 18px; text-align: center; background-color: #73d1f6; font-size: 12px;"><strong>사양</strong>담당</td>             \n';
        		html += '</tr>                                                                                                                                                \n';
        		html += '<tr style="height: 18px;">                                                                                                                           \n';
        		html += '<td style="width: 7.00761%; height: 18px; text-align: center; background-color: #73d1f6; font-size: 12px;"><strong>기존</strong></td>                \n';
        		html += '<td style="width: 16.2406%; height: 18px; font-size: 12px;">'+customer+'</td>                                                                              \n';
        		html += '<td style="width: 15.3883%; height: 18px; font-size: 12px;">'+itemId+'</td>                                                                              \n';
        		html += '<td style="width: 7.14964%; height: 18px; font-size: 12px;">'+itemRev+'</td>                                                                              \n';
        		html += '<td style="width: 42.9452%; height: 18px; font-size: 12px;">'+itemName+'</td>                                                                              \n';
        		html += '<td style="width: 11.269%; height: 18px; font-size: 12px;">'+specOwner+'</td>                                                                               \n';
        		html += '</tr>                                                                                                                                                \n';
        		html += '<tr style="height: 18px;">                                                                                                                           \n';
        		html += '<td style="width: 7.00761%; height: 18px; text-align: center; background-color: #73d1f6; font-size: 12px;"><strong>변경</strong></td>                \n';
        		html += '<td style="width: 16.2406%; height: 18px; font-size: 12px;">'+rcCustomer+'</td>                                                                              \n';
        		html += '<td style="width: 15.3883%; height: 18px; font-size: 12px;">'+rcItemId+'</td>                                                                              \n';
        		html += '<td style="width: 7.14964%; height: 18px; font-size: 12px;">'+rcItemRev+'</td>                                                                              \n';
        		html += '<td style="width: 42.9452%; height: 18px; font-size: 12px;">'+rcItemName+'</td>                                                                              \n';
        		html += '<td style="width: 11.269%; height: 18px; font-size: 12px;">'+rcSpecOwner+'</td>                                                                               \n';
        		html += '</tr>                                                                                                                                                \n';
        		html += '</tbody>                                                                                                                                             \n';
        		html += '</table>                                                                                                                                             \n';
        		html += '<table style="border-collapse: collapse; width: 100%; height: 36px; margin-top: 1px;" border="1">                                                    \n';
        		html += '<tbody>                                                                                                                                              \n';
        		html += '<tr style="height: 18px;">                                                                                                                           \n';
        		html += '<td style="width: 100%; height: 18px; background-color: #73d1f6; text-align: center; font-size: 12px;"><strong>변경내용</strong></td>                \n';
        		html += '</tr>                                                                                                                                                \n';
        		html += '<tr style="height: 18px;">                                                                                                                           \n';
        		html += '<td style="width: 100%; height: 80px; font-size: 12px; text-align: left; vertical-align: top;">'+changeReason+'</td>                                           \n';
        		html += '</tr>                                                                                                                                                \n';
        		html += '</tbody>                                                                                                                                             \n';
        		html += '</table>	                                                                                                                                            \n';
        		return html;
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_customSave.addEventHandler("onclick",this.fn_save,this);
            this.div_header.form.btn_new.addEventHandler("onclick",this.fn_newData,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_header.form.btn_confirmCancel.addEventHandler("onclick",this.fn_confirmCancel,this);
            this.div_header.form.btn_confirm.addEventHandler("onclick",this.fn_confirm,this);
            this.div_header.form.btn_sendMail.addEventHandler("onclick",this.fn_sendMail,this);
            this.tab_search.Tabpage1.form.btn_clear2.addEventHandler("onclick",this.fn_formInit,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.cboPeriodType.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cboPeriodType_onitemchanged,this);
            this.tab_search.Tabpage1.form.calStartDt.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.calEndDt.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.btn_item.addEventHandler("onclick",this.tab_search_Tabpage1_btn_search00_onclick,this);
            this.tab_search.Tabpage1.form.btn_specOwner.addEventHandler("onclick",this.tab_search_Tabpage1_btnSpecOwner_onclick,this);
            this.tab_search.Tabpage1.form.btn_customer.addEventHandler("onclick",this.tab_search_Tabpage1_btn_search00_01_onclick,this);
            this.tab_search.Tabpage1.form.btn_changeRequester.addEventHandler("onclick",this.tab_search_Tabpage1_btn_changeRequester_onclick,this);
            this.tab_search.Tabpage2.form.btn_governanceNo.addEventHandler("onclick",this.tab_search_Tabpage2_btn_governanceNo_onclick,this);
            this.tab_search.Tabpage2.form.btn_search2.addEventHandler("onclick",this.fn_getRoutingDataTab2,this);
            this.tab_search.Tabpage2.form.btn_clear2.addEventHandler("onclick",this.fn_formInit2,this);
            this.div_work.form.tab.addEventHandler("onchanged",this.div_work_tab_onchanged,this);
            this.div_work.form.tab.Tabpage1.form.grd_history.addEventHandler("oncellclick",this.div_work_tab_Tabpage1_grd_history_oncellclick,this);
            this.div_work.form.tab.Tabpage1.form.grd_history.addEventHandler("oncelldblclick",this.div_work_tab_Tabpage1_grd_history_oncelldblclick,this);
            this.div_work.form.tab.Tabpage1.form.btn_delRow.addEventHandler("onclick",this.div_work_tab_Tabpage1_btn_delRow_ds_history_onclick,this);
            this.div_work.form.tab.Tabpage1.form.Div01.form.grd_historyDetail.addEventHandler("oncloseup",this.div_work_tab_Tabpage1_grd_circuitSpec1_oncloseup,this);
            this.div_work.form.tab.Tabpage1.form.Div01.form.grd_historyDetail.addEventHandler("onexpandup",this.div_work_tab_Tabpage1_Div01_grd_historyDetail_onexpandup,this);
            this.div_work.form.tab.Tabpage1.form.Div01.form.grd_historyDetail.addEventHandler("onkeydown",this.div_work_tab_Tabpage1_Div01_grd_historyDetail_onkeydown,this);
            this.div_work.form.tab.Tabpage2.form.tab_01.addEventHandler("onchanged",this.div_work_tab_Tabpage2_tab_01_onchanged,this);
            this.div_work.form.tab.Tabpage2.form.tab_01.Tabpage1.form.grd_t2_011.addEventHandler("onhscroll",this.div_work_tab_Tabpage2_tab_01_Tabpage1_grd_t2_021_onhscroll,this);
            this.div_work.form.tab.Tabpage2.form.tab_01.Tabpage1.form.grd_t2_011.addEventHandler("onvscroll",this.div_work_tab_Tabpage2_tab_01_Tabpage1_grd_t2_011_onvscroll,this);
            this.div_work.form.tab.Tabpage2.form.tab_01.Tabpage2.form.grd_t2_011.addEventHandler("onhscroll",this.div_work_tab_Tabpage2_tab_01_Tabpage2_grd_t2_011_onhscroll,this);
            this.div_work.form.tab.Tabpage2.form.tab_01.Tabpage2.form.grd_t2_011.addEventHandler("onvscroll",this.div_work_tab_Tabpage2_tab_01_Tabpage2_grd_t2_011_onvscroll,this);
            this.div_work.form.tab.Tabpage2.form.tab_01.Tabpage3.form.grd_durable.addEventHandler("onhscroll",this.div_work_tab_Tabpage2_tab_01_Tabpage3_grd_durable_onhscroll,this);
            this.div_work.form.tab.Tabpage2.form.tab_01.Tabpage3.form.grd_durable.addEventHandler("onvscroll",this.div_work_tab_Tabpage2_tab_01_Tabpage3_grd_durable_onvscroll,this);
            this.div_work.form.tab.Tabpage2.form.grd_routing2.addEventHandler("oncellclick",this.div_work_tab_Tabpage2_grd_routing2_oncellclick,this);
            this.div_work.form.tab.Tabpage2.form.grd_routing2.addEventHandler("onvscroll",this.div_work_tab_Tabpage2_grd_routing2_onvscroll,this);
            this.div_work.form.tab.Tabpage2.form.grd_routing2.addEventHandler("onhscroll",this.div_work_tab_Tabpage2_grd_routing2_onhscroll,this);
            this.div_work.form.tab.Tabpage2.form.tab_00.addEventHandler("onchanged",this.div_work_tab_Tabpage2_tab_00_onchanged,this);
            this.div_work.form.tab.Tabpage2.form.tab_00.Tabpage1.form.grd_t2_011.addEventHandler("onhscroll",this.div_work_tab_Tabpage2_tab_00_Tabpage1_grd_t2_011_onhscroll,this);
            this.div_work.form.tab.Tabpage2.form.tab_00.Tabpage1.form.grd_t2_011.addEventHandler("onvscroll",this.div_work_tab_Tabpage2_tab_00_Tabpage1_grd_t2_011_onvscroll,this);
            this.div_work.form.tab.Tabpage2.form.tab_00.Tabpage2.form.grd_t2_011.addEventHandler("onhscroll",this.div_work_tab_Tabpage2_tab_00_Tabpage2_grd_t2_011_onhscroll,this);
            this.div_work.form.tab.Tabpage2.form.tab_00.Tabpage2.form.grd_t2_011.addEventHandler("onvscroll",this.div_work_tab_Tabpage2_tab_00_Tabpage2_grd_t2_011_onvscroll,this);
            this.div_work.form.tab.Tabpage2.form.tab_00.Tabpage3.form.grd_durable.addEventHandler("onhscroll",this.div_work_tab_Tabpage2_tab_00_Tabpage3_grd_durable_onhscroll,this);
            this.div_work.form.tab.Tabpage2.form.tab_00.Tabpage3.form.grd_durable.addEventHandler("onvscroll",this.div_work_tab_Tabpage2_tab_00_Tabpage3_grd_durable_onvscroll,this);
            this.div_work.form.tab.Tabpage2.form.grd_routing1.addEventHandler("oncellclick",this.div_work_tab_Tabpage2_grd_routing1_oncellclick,this);
            this.div_work.form.tab.Tabpage2.form.grd_routing1.addEventHandler("onvscroll",this.div_work_tab_Tabpage2_grd_routing1_onvscroll,this);
            this.div_work.form.tab.Tabpage2.form.grd_routing1.addEventHandler("onhscroll",this.div_work_tab_Tabpage2_grd_routing1_onhscroll,this);
            this.div_work.form.tab.Tabpage2.form.btn_02_01.addEventHandler("onclick",this.fn_changeScroll,this);
            this.ds_history_new.addEventHandler("onvaluechanged",this.ds_history_new_onvaluechanged,this);
        };
        this.loadIncludeScript("BAS02500M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
