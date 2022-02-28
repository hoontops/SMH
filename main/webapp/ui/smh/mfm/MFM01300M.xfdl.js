(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MFM01300M");
            this.set_titletext("주요 공정 실적 현황판_기준정보화면");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_segmentRelMain", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDONETOPSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDONETOPSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDONEMIDDLESEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDONEMIDDLESEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"X_T_BTN\" type=\"STRING\" size=\"256\"/><Column id=\"X_M_BTN\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"SDATE\" type=\"STRING\" size=\"256\"/><Column id=\"EDATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_topMain", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"WORKDONESEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDONESEGMENTCLASSNAME_KO_KR\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDONESEGMENTCLASSNAME_EN_US\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDONESEGMENTCLASSNAME_ZH_CN\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDONESEGMENTCLASSNAME_VI_VN\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDONESEGMENTCLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTWORKDONESEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDONESEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SEQDISPLAY\" type=\"STRING\" size=\"256\"/><Column id=\"ISLEFTORRIGHTDISPLAY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchGrp", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_WORKDONETOPSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"P_WORKDONEMIDDLESEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"P_VALIDSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_plant", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"STARTBUSINESSHOUR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOADTOPSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOADMIDDLESEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOADSMALLSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_midMain", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"WORKDONESEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDONESEGMENTCLASSNAME_KO_KR\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDONESEGMENTCLASSNAME_EN_US\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDONESEGMENTCLASSNAME_ZH_CN\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDONESEGMENTCLASSNAME_VI_VN\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDONESEGMENTCLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTWORKDONESEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDONESEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SEQDISPLAY\" type=\"STRING\" size=\"256\"/><Column id=\"ISLEFTORRIGHTDISPLAY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchFilter", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"CODECLASSID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prodTypeList", this);
            obj._setContents("<ColumnInfo><Column id=\"CODEID\" type=\"STRING\" size=\"256\"/><Column id=\"CODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAYSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"CODECLASSID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prodDivisioList", this);
            obj._setContents("<ColumnInfo><Column id=\"CODEID\" type=\"STRING\" size=\"256\"/><Column id=\"CODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAYSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"CODECLASSID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchRel", this);
            obj._setContents("<ColumnInfo><Column id=\"P_PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_NOINPUT\" type=\"STRING\" size=\"256\"/><Column id=\"P_VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"P_WORKDONETOPCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"P_WORKDONEMIDCLASS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_topMainExcel", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"WORKDONESEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDONESEGMENTCLASSNAME_KO_KR\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDONESEGMENTCLASSNAME_EN_US\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDONESEGMENTCLASSNAME_ZH_CN\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDONESEGMENTCLASSNAME_VI_VN\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDONESEGMENTCLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"SEQDISPLAY\" type=\"STRING\" size=\"256\"/><Column id=\"ISLEFTORRIGHTDISPLAY\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTWORKDONESEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDONESEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_midMainExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"WORKDONESEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDONESEGMENTCLASSNAME_KO_KR\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDONESEGMENTCLASSNAME_EN_US\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDONESEGMENTCLASSNAME_ZH_CN\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDONESEGMENTCLASSNAME_VI_VN\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDONESEGMENTCLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTWORKDONESEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDONESEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_segmentGroup", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"WORKDONESEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDONESEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDONESEGMENTCLASSTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_segmentRelMainExcel", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDONETOPSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDONEMIDDLESEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDONETOPSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDONEMIDDLESEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"X_T_BTN\" type=\"STRING\" size=\"256\"/><Column id=\"X_M_BTN\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"SDATE\" type=\"STRING\" size=\"256\"/><Column id=\"EDATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabpage_mapSearch",this.tab_search);
            obj.set_text("표준공정 맵핑");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","80","15","97",null,null,null,null,null,null,this.tab_search.tabpage_mapSearch.form);
            obj.set_taborder("0");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tabpage_mapSearch.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"70","15","97","0",null,null,null,null,null,this.tab_search.tabpage_mapSearch.form);
            obj.set_taborder("1");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tabpage_mapSearch.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.tabpage_mapSearch.form);
            obj.set_taborder("2");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tabpage_mapSearch.addChild(obj.name, obj);

            obj = new Static("sta_standard","0","10","103","20",null,null,null,null,null,null,this.tab_search.tabpage_mapSearch.form);
            obj.set_taborder("3");
            obj.set_text("표준공정 ID");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("STANDARDOPERATION");
            this.tab_search.tabpage_mapSearch.addChild(obj.name, obj);

            obj = new Static("sta_noInput","0","85","103","20",null,null,null,null,null,null,this.tab_search.tabpage_mapSearch.form);
            obj.set_taborder("4");
            obj.set_text("미입력");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("NOINPUT");
            this.tab_search.tabpage_mapSearch.addChild(obj.name, obj);

            obj = new Static("sta_valid","0","110","103","20",null,null,null,null,null,null,this.tab_search.tabpage_mapSearch.form);
            obj.set_taborder("5");
            obj.set_text("유효상태");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("973968B5BBDD4C4488E0BCB3E760DA76");
            this.tab_search.tabpage_mapSearch.addChild(obj.name, obj);

            obj = new Button("btn_standard",null,"10","22","20","15",null,null,null,null,null,this.tab_search.tabpage_mapSearch.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tabpage_mapSearch.addChild(obj.name, obj);

            obj = new Edit("edt_standard","108","10",null,"20","37",null,null,null,null,null,this.tab_search.tabpage_mapSearch.form);
            obj.set_taborder("7");
            this.tab_search.tabpage_mapSearch.addChild(obj.name, obj);

            obj = new Combo("cmb_noInput","108","85","165","20",null,null,null,null,null,null,this.tab_search.tabpage_mapSearch.form);
            obj.set_taborder("8");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            obj.set_innerdataset("");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.tabpage_mapSearch.addChild(obj.name, obj);

            obj = new Combo("cmb_valid","108","110","165","20",null,null,null,null,null,null,this.tab_search.tabpage_mapSearch.form);
            obj.set_taborder("9");
            obj.set_codecolumn("C,ValidState,ALL,Y,Y");
            this.tab_search.tabpage_mapSearch.addChild(obj.name, obj);

            obj = new Button("btn_search","15","150","146","36",null,null,null,null,null,null,this.tab_search.tabpage_mapSearch.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.tabpage_mapSearch.addChild(obj.name, obj);

            obj = new Button("btn_searchClear","171","150","102","36",null,null,null,null,null,null,this.tab_search.tabpage_mapSearch.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.tabpage_mapSearch.addChild(obj.name, obj);

            obj = new Static("sta_mainProcGrp","0","35","103","20",null,null,null,null,null,null,this.tab_search.tabpage_mapSearch.form);
            obj.set_taborder("12");
            obj.set_text("대공정 그룹명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LOADTOPSEGMENTCLASSNAME");
            this.tab_search.tabpage_mapSearch.addChild(obj.name, obj);

            obj = new Edit("edt_mainProcGrp","108","35",null,"20","37",null,null,null,null,null,this.tab_search.tabpage_mapSearch.form);
            obj.set_taborder("13");
            this.tab_search.tabpage_mapSearch.addChild(obj.name, obj);

            obj = new Button("btn_mainProcGrp",null,"35","22","20","15",null,null,null,null,null,this.tab_search.tabpage_mapSearch.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tabpage_mapSearch.addChild(obj.name, obj);

            obj = new Static("sta_midProcGrp","0","60","103","20",null,null,null,null,null,null,this.tab_search.tabpage_mapSearch.form);
            obj.set_taborder("15");
            obj.set_text("중공정 그룹명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LOADMIDDLESEGMENTCLASSNAME");
            this.tab_search.tabpage_mapSearch.addChild(obj.name, obj);

            obj = new Edit("edt_midProcGrp","108","60",null,"20","37",null,null,null,null,null,this.tab_search.tabpage_mapSearch.form);
            obj.set_taborder("16");
            this.tab_search.tabpage_mapSearch.addChild(obj.name, obj);

            obj = new Button("btn_midProcGrp",null,"60","22","20","15",null,null,null,null,null,this.tab_search.tabpage_mapSearch.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tabpage_mapSearch.addChild(obj.name, obj);

            obj = new Tabpage("tabpage_topSearch",this.tab_search);
            obj.set_text("대공정 그룹");
            this.tab_search.addChild(obj.name, obj);

            obj = new Combo("cmb_site","108","10","165","20",null,null,null,null,null,null,this.tab_search.tabpage_topSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("PLANTID");
            obj.set_datacolumn("PLANTNAME");
            obj.set_innerdataset("ds_plant");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.tabpage_topSearch.addChild(obj.name, obj);

            obj = new Static("sta_site","0","10","103","20",null,null,null,null,null,null,this.tab_search.tabpage_topSearch.form);
            obj.set_taborder("0");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("STOPSITE");
            this.tab_search.tabpage_topSearch.addChild(obj.name, obj);

            obj = new Edit("edt_topProc","108","35",null,"20","37",null,null,null,null,null,this.tab_search.tabpage_topSearch.form);
            obj.set_taborder("1");
            this.tab_search.tabpage_topSearch.addChild(obj.name, obj);

            obj = new Button("btn_topProc",null,"35","22","20","15",null,null,null,null,null,this.tab_search.tabpage_topSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tabpage_topSearch.addChild(obj.name, obj);

            obj = new Combo("cmb_valid","108","60","165","20",null,null,null,null,null,null,this.tab_search.tabpage_topSearch.form);
            obj.set_taborder("4");
            obj.set_codecolumn("C,ValidState,ALL,Y,Y");
            this.tab_search.tabpage_topSearch.addChild(obj.name, obj);

            obj = new Button("btn_searchClear","171","100","102","36",null,null,null,null,null,null,this.tab_search.tabpage_topSearch.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.tabpage_topSearch.addChild(obj.name, obj);

            obj = new Button("btn_search","15","100","146","36",null,null,null,null,null,null,this.tab_search.tabpage_topSearch.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.tabpage_topSearch.addChild(obj.name, obj);

            obj = new Static("sta_valid","0","60","103","20",null,null,null,null,null,null,this.tab_search.tabpage_topSearch.form);
            obj.set_taborder("7");
            obj.set_text("유효상태");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("VALIDSTATE");
            this.tab_search.tabpage_topSearch.addChild(obj.name, obj);

            obj = new Static("sta_topProc","0","35","103","20",null,null,null,null,null,null,this.tab_search.tabpage_topSearch.form);
            obj.set_taborder("8");
            obj.set_text("대공정 그룹");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("TOPSEGMENTGROUP");
            this.tab_search.tabpage_topSearch.addChild(obj.name, obj);

            obj = new Tabpage("tabpage_midSearch",this.tab_search);
            obj.set_text("중공정 그룹");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("sta_site","0","10","103","20",null,null,null,null,null,null,this.tab_search.tabpage_midSearch.form);
            obj.set_taborder("0");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("STOPSITE");
            this.tab_search.tabpage_midSearch.addChild(obj.name, obj);

            obj = new Edit("edt_midProc","108","35",null,"20","37",null,null,null,null,null,this.tab_search.tabpage_midSearch.form);
            obj.set_taborder("1");
            this.tab_search.tabpage_midSearch.addChild(obj.name, obj);

            obj = new Button("btn_midProc",null,"35","22","20","15",null,null,null,null,null,this.tab_search.tabpage_midSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tabpage_midSearch.addChild(obj.name, obj);

            obj = new Static("sta_midProc","0","35","103","20",null,null,null,null,null,null,this.tab_search.tabpage_midSearch.form);
            obj.set_taborder("3");
            obj.set_text("중공정 그룹");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("MIDDLESEGMENTGROUP");
            this.tab_search.tabpage_midSearch.addChild(obj.name, obj);

            obj = new Combo("cmb_site","108","10","165","20",null,null,null,null,null,null,this.tab_search.tabpage_midSearch.form);
            obj.set_taborder("4");
            obj.set_codecolumn("PLANTID");
            obj.set_datacolumn("PLANTNAME");
            obj.set_innerdataset("ds_plant");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.tabpage_midSearch.addChild(obj.name, obj);

            obj = new Static("sta_valid","0","60","103","20",null,null,null,null,null,null,this.tab_search.tabpage_midSearch.form);
            obj.set_taborder("5");
            obj.set_text("유효상태");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("VALIDSTATE");
            this.tab_search.tabpage_midSearch.addChild(obj.name, obj);

            obj = new Combo("cmb_valid","108","60","165","20",null,null,null,null,null,null,this.tab_search.tabpage_midSearch.form);
            obj.set_taborder("6");
            obj.set_codecolumn("C,ValidState,ALL,Y,Y");
            this.tab_search.tabpage_midSearch.addChild(obj.name, obj);

            obj = new Button("btn_search","15","100","146","36",null,null,null,null,null,null,this.tab_search.tabpage_midSearch.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.tabpage_midSearch.addChild(obj.name, obj);

            obj = new Button("btn_searchClear","171","100","102","36",null,null,null,null,null,null,this.tab_search.tabpage_midSearch.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.tabpage_midSearch.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","290","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_work","0","0",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("tabpage_map",this.div_work.form.tab_work);
            obj.set_text("표준공정 맵핑");
            obj.set_tooltiptext("STANDARDSEGMENTMAPPING");
            this.div_work.form.tab_work.addChild(obj.name, obj);

            obj = new Static("sta_subtitle","0","0","102","34",null,null,null,null,null,null,this.div_work.form.tab_work.tabpage_map.form);
            obj.set_taborder("0");
            obj.set_text("표준공정 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("PROCESSSEGMENTLIST");
            this.div_work.form.tab_work.tabpage_map.addChild(obj.name, obj);

            obj = new Grid("grd_map","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_work.tabpage_map.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_segmentRelMain");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"100\"/><Column size=\"250\"/><Column size=\"250\"/><Column size=\"24\"/><Column size=\"250\"/><Column size=\"24\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"200\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"표준공정 코드\" tooltiptext=\"STANDARDOPERATIONID\"/><Cell col=\"3\" text=\"표준공정명\" tooltiptext=\"STANDARDOPERATIONNAME\"/><Cell col=\"4\" colspan=\"2\" text=\"대공정 그룹명\" tooltiptext=\"LOADTOPSEGMENTCLASSNAME\" border=\"1px solid #e0e0e0\"/><Cell col=\"6\" colspan=\"2\" text=\"중공정 그룹명\" tooltiptext=\"LOADMIDDLESEGMENTCLASSNAME\"/><Cell col=\"8\" text=\"시작일자\" tooltiptext=\"APPLY_START_DATE\"/><Cell col=\"9\" text=\"만료일자\" tooltiptext=\"EXP_DATE\"/><Cell col=\"10\" text=\"설명\" tooltiptext=\"SPCRULESDISCRIPTION\"/><Cell col=\"11\" text=\"유효상태\" cssclass=\"cell_point\" tooltiptext=\"VALIDSTATE\"/><Cell col=\"12\" text=\"유효상태\" cssclass=\"cell_point\"/><Cell col=\"13\" text=\"수정자\" tooltiptext=\"MODIFIER\"/><Cell col=\"14\" text=\"수정일\" tooltiptext=\"MODIFIEDTIME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"2\" text=\"bind:PROCESSSEGMENTID\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"4\" text=\"bind:WORKDONETOPSEGMENTCLASSNAME\" textAlign=\"left\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\" border=\"1px solid #f1f1f1,0px solid #f1f1f1,1px solid #f1f1f1,1px solid #f1f1f1\" expandsize=\"24\"/><Cell col=\"5\" expandimage=\"url(&apos;theme://images/img_WF_inputDel_P.png&apos;)\" expandshow=\"show\" text=\"bind:X_T_BTN\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\" border=\"1px solid #f1f1f1,1px solid #f1f1f1,1px solid #f1f1f1,0px solid #f1f1f1\" expandsize=\"24\"/><Cell col=\"6\" text=\"bind:WORKDONEMIDDLESEGMENTCLASSNAME\" textAlign=\"left\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\" border=\"1px solid #f1f1f1,0px solid #f1f1f1,1px solid #f1f1f1,1px solid #f1f1f1\" expandsize=\"24\"/><Cell col=\"7\" expandimage=\"url(&apos;theme://images/img_WF_inputDel_P.png&apos;)\" expandshow=\"show\" text=\"bind:X_M_BTN\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\" border=\"1px solid #f1f1f1,1px solid #f1f1f1,1px solid #f1f1f1,0px solid #f1f1f1\" expandsize=\"24\"/><Cell col=\"8\" text=\"bind:SDATE\" displaytype=\"calendarcontrol\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplayinvalidtype=\"default\" calendardisplaynulltype=\"none\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"9\" text=\"bind:EDATE\" displaytype=\"calendarcontrol\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplayinvalidtype=\"default\" calendardisplaynulltype=\"none\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"10\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\" displaytype=\"text\" edittype=\"normal\" textAlign=\"left\" text=\"bind:DESCRIPTION\"/><Cell col=\"11\" text=\"bind:VALIDSTATE\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,ValidState,,Y,Y\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"12\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,ValidState,,Y,Y\" text=\"bind:VALIDSTATE\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"13\" text=\"bind:MODIFIER\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"14\" text=\"bind:MODIFIEDTIME\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.tabpage_map.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_mapExcel",null,"6","29","24","29",null,null,null,null,null,this.div_work.form.tab_work.tabpage_map.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_work.tabpage_map.addChild(obj.name, obj);

            obj = new Button("btn_xlUpCustom_grd_map",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_work.tabpage_map.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("GridImport");
            this.div_work.form.tab_work.tabpage_map.addChild(obj.name, obj);

            obj = new Tabpage("tabpage_Top",this.div_work.form.tab_work);
            obj.set_text("대공정 그룹");
            obj.set_tooltiptext("TOPSEGMENTGROUP");
            this.div_work.form.tab_work.addChild(obj.name, obj);

            obj = new Static("sta_subtitle","0","0","121","34",null,null,null,null,null,null,this.div_work.form.tab_work.tabpage_Top.form);
            obj.set_taborder("0");
            obj.set_text("대공정 그룹 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("TOPLOADSEGMENTGROUPLIST");
            this.div_work.form.tab_work.tabpage_Top.addChild(obj.name, obj);

            obj = new Grid("grd_topMain","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_work.tabpage_Top.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_topMain");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"120\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"주요공정 그룹ID\" cssclass=\"cell_point\" tooltiptext=\"WORKDONESEGMENTCLASSID\"/><Cell col=\"3\" text=\"주요공정 그룹명(K)\" tooltiptext=\"WORKDONESEGMENTCLASSID_K\"/><Cell col=\"4\" text=\"주요공정 그룹명(E)\" tooltiptext=\"WORKDONESEGMENTCLASSID_E\"/><Cell col=\"5\" text=\"주요공정 그룹명(C)\" tooltiptext=\"WORKDONESEGMENTCLASSID_C\"/><Cell col=\"6\" text=\"주요공정 그룹명(V)\" tooltiptext=\"WORKDONESEGMENTCLASSID_V\"/><Cell col=\"7\" text=\"주요공정 드룹타입\" tooltiptext=\"WORKDONESEGMENTCLASSTYPE\"/><Cell col=\"8\" text=\"설명\" tooltiptext=\"DESCRIPTION\"/><Cell col=\"9\" text=\"정렬순서\" tooltiptext=\"SORT_ORDER\"/><Cell col=\"10\" text=\"출력위치\" tooltiptext=\"PRINT_LOCATION\"/><Cell col=\"11\" text=\"유효상태\" cssclass=\"cell_point\" tooltiptext=\"VALIDSTATE\"/><Cell col=\"12\" text=\"수정자\" tooltiptext=\"MODIFIER\"/><Cell col=\"13\" text=\"수정일\" tooltiptext=\"MODIFIEDTIME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"2\" text=\"bind:WORKDONESEGMENTCLASSID\" displaytype=\"expr:dataset.getRowType(currow)==&quot;2&quot;?&quot;text&quot;:&quot;normal&quot;\" edittype=\"expr:dataset.getRowType(currow)==&quot;2&quot;?&quot;normal&quot;:&quot;none&quot;\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\" editinputmode=\"upper\" editinputfilter=\"none,dot,space,symbol,comma,sign\" editinputtype=\"english,number\"/><Cell col=\"3\" text=\"bind:WORKDONESEGMENTCLASSNAME_KO_KR\" displaytype=\"text\" edittype=\"normal\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"4\" text=\"bind:WORKDONESEGMENTCLASSNAME_EN_US\" displaytype=\"text\" edittype=\"normal\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"5\" text=\"bind:WORKDONESEGMENTCLASSNAME_ZH_CN\" displaytype=\"text\" edittype=\"normal\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"6\" text=\"bind:WORKDONESEGMENTCLASSNAME_VI_VN\" displaytype=\"text\" edittype=\"normal\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"7\" text=\"bind:WORKDONESEGMENTCLASSTYPE\" displaytype=\"combotext\" textAlign=\"left\" edittype=\"none\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\" combocodecol=\"C,WorkDoneSegmentClassType,,Y,N\"/><Cell col=\"8\" text=\"bind:DESCRIPTION\" displaytype=\"text\" edittype=\"normal\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"9\" text=\"bind:SEQDISPLAY\" displaytype=\"mask\" edittype=\"mask\" textAlign=\"right\" maskeditformat=\"!#,##9\" maskeditautoselect=\"true\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"10\" text=\"bind:ISLEFTORRIGHTDISPLAY\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\" editautoselect=\"true\" editimemode=\"none\" editinputmode=\"upper\" editinputfilter=\"none,digit\" editinputtype=\"normal,alpha\"/><Cell col=\"11\" text=\"bind:VALIDSTATE\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,ValidState,,Y,Y\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"12\" text=\"bind:MODIFIER\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"13\" text=\"bind:MODIFIEDTIME\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.tabpage_Top.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_topMain",null,"6","29","24","29",null,null,null,null,null,this.div_work.form.tab_work.tabpage_Top.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_work.tabpage_Top.addChild(obj.name, obj);

            obj = new Button("btn_del_ds_topMain",null,"6","26","24","58",null,null,null,null,null,this.div_work.form.tab_work.tabpage_Top.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.div_work.form.tab_work.tabpage_Top.addChild(obj.name, obj);

            obj = new Button("btn_add_ds_topMain",null,"6","26","24","116",null,null,null,null,null,this.div_work.form.tab_work.tabpage_Top.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.form.tab_work.tabpage_Top.addChild(obj.name, obj);

            obj = new Button("btn_copyRowTop",null,"6","29","24","87",null,null,null,null,null,this.div_work.form.tab_work.tabpage_Top.form);
            obj.set_initvalueid("x");
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdCopy");
            obj.set_tooltiptext("GridCopyRow");
            this.div_work.form.tab_work.tabpage_Top.addChild(obj.name, obj);

            obj = new Button("btn_xlUpCustom_grd_topMain",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_work.tabpage_Top.form);
            obj.set_initvalueid("x");
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("GridImport");
            this.div_work.form.tab_work.tabpage_Top.addChild(obj.name, obj);

            obj = new Tabpage("tabpage_Mid",this.div_work.form.tab_work);
            obj.set_text("중공정 그룹");
            obj.set_tooltiptext("MIDDLESEGMENTGROUP");
            this.div_work.form.tab_work.addChild(obj.name, obj);

            obj = new Static("sta_subtitle","0","0","121","34",null,null,null,null,null,null,this.div_work.form.tab_work.tabpage_Mid.form);
            obj.set_taborder("0");
            obj.set_text("중공정 그룹 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MIDDLELOADSEGMENTGROUPLIST");
            this.div_work.form.tab_work.tabpage_Mid.addChild(obj.name, obj);

            obj = new Grid("grd_midMain","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_work.tabpage_Mid.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_midMain");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"120\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"주요공정 그룹ID\" cssclass=\"cell_point\" tooltiptext=\"WORKDONESEGMENTCLASSID\"/><Cell col=\"3\" text=\"주요공정 그룹명(K)\" tooltiptext=\"WORKDONESEGMENTCLASSID_K\"/><Cell col=\"4\" text=\"주요공정 그룹명(E)\" tooltiptext=\"WORKDONESEGMENTCLASSID_E\"/><Cell col=\"5\" text=\"주요공정 그룹명(C)\" tooltiptext=\"WORKDONESEGMENTCLASSID_C\"/><Cell col=\"6\" text=\"주요공정 그룹명(V)\" tooltiptext=\"WORKDONESEGMENTCLASSID_V\"/><Cell col=\"7\" text=\"주요공정 드룹타입\" tooltiptext=\"WORKDONESEGMENTCLASSTYPE\"/><Cell col=\"8\" text=\"설명\" tooltiptext=\"SPCRULESDISCRIPTION\"/><Cell col=\"9\" text=\"유효상태\" cssclass=\"cell_point\" tooltiptext=\"VALIDSTATE\"/><Cell col=\"10\" text=\"수정자\" tooltiptext=\"MODIFIER\"/><Cell col=\"11\" text=\"수정일\" tooltiptext=\"MODIFIEDTIME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"2\" text=\"bind:WORKDONESEGMENTCLASSID\" displaytype=\"expr:dataset.getRowType(currow)==&quot;2&quot;?&quot;text&quot;:&quot;normal&quot;\" edittype=\"expr:dataset.getRowType(currow)==&quot;2&quot;?&quot;normal&quot;:&quot;none&quot;\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\" editinputmode=\"upper\" editinputtype=\"english,number\" editinputfilter=\"none,comma,dot,sign,space,symbol\"/><Cell col=\"3\" text=\"bind:WORKDONESEGMENTCLASSNAME_KO_KR\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"4\" text=\"bind:WORKDONESEGMENTCLASSNAME_EN_US\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"5\" text=\"bind:WORKDONESEGMENTCLASSNAME_ZH_CN\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"6\" text=\"bind:WORKDONESEGMENTCLASSNAME_VI_VN\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"7\" text=\"bind:WORKDONESEGMENTCLASSTYPE\" displaytype=\"combotext\" combocodecol=\"C,WorkDoneSegmentClassType,,Y,N\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"8\" text=\"bind:DESCRIPTION\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"9\" text=\"bind:VALIDSTATE\" combocodecol=\"C,ValidState,,Y,Y\" displaytype=\"combotext\" edittype=\"combo\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"10\" text=\"bind:MODIFIER\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"11\" text=\"bind:MODIFIEDTIME\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.tabpage_Mid.addChild(obj.name, obj);

            obj = new Button("btn_add_ds_midMain",null,"6","26","24","116",null,null,null,null,null,this.div_work.form.tab_work.tabpage_Mid.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.form.tab_work.tabpage_Mid.addChild(obj.name, obj);

            obj = new Button("btn_copyRowMid",null,"6","29","24","87",null,null,null,null,null,this.div_work.form.tab_work.tabpage_Mid.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdCopy");
            obj.set_tooltiptext("GridCopyRow");
            this.div_work.form.tab_work.tabpage_Mid.addChild(obj.name, obj);

            obj = new Button("btn_del_ds_midMain",null,"6","26","24","58",null,null,null,null,null,this.div_work.form.tab_work.tabpage_Mid.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.div_work.form.tab_work.tabpage_Mid.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_midMain",null,"6","29","24","29",null,null,null,null,null,this.div_work.form.tab_work.tabpage_Mid.form);
            obj.set_initvalueid("x");
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_work.tabpage_Mid.addChild(obj.name, obj);

            obj = new Button("btn_xlUpCustom_grd_midMain",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_work.tabpage_Mid.form);
            obj.set_initvalueid("x");
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("GridImport");
            this.div_work.form.tab_work.tabpage_Mid.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","31",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","155","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_text("공정 부하 기준 정보");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            obj.set_tooltiptext("MENU_PG-PM-0060");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","60","21","62",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_text("저장");
            obj.set_cssclass("btn_DR_GridSave");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("저장");
            this.div_header.addChild(obj.name, obj);

            obj = new Grid("grd_mapExcel","300","770",null,null,"0","-293",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_segmentRelMain");
            obj.set_selecttype("row");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"250\"/><Column size=\"250\"/><Column size=\"250\"/><Column size=\"200\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"표준공정 코드\" tooltiptext=\"STANDARDOPERATIONID\"/><Cell col=\"2\" text=\"표준공정명\" tooltiptext=\"STANDARDOPERATIONNAME\"/><Cell col=\"3\" text=\"대공정 그룹명\" tooltiptext=\"LOADTOPSEGMENTCLASSNAME\" border=\"1px solid #e0e0e0\"/><Cell col=\"4\" text=\"중공정 그룹명\" tooltiptext=\"LOADMIDDLESEGMENTCLASSNAME\"/><Cell col=\"5\" text=\"설명\" tooltiptext=\"SPCRULESDISCRIPTION\"/><Cell col=\"6\" text=\"유효상태\" cssclass=\"cell_point\" tooltiptext=\"VALIDSTATE\"/><Cell col=\"7\" text=\"유효상태\" tooltiptext=\"VALIDSTATE\"/><Cell col=\"8\" text=\"생성자\" tooltiptext=\"CREATOR\"/><Cell col=\"9\" text=\"생성일\" tooltiptext=\"CREATEDATE\"/><Cell col=\"10\" text=\"수정자\" tooltiptext=\"MODIFIER\"/><Cell col=\"11\" text=\"수정일\" tooltiptext=\"MODIFIEDTIME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"1\" text=\"bind:PROCESSSEGMENTID\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"2\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"3\" text=\"bind:WORKDONETOPSEGMENTCLASSNAME\" textAlign=\"left\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\" border=\"1px solid #f1f1f1,0px solid #f1f1f1,1px solid #f1f1f1,1px solid #f1f1f1\" expandsize=\"24\"/><Cell col=\"4\" text=\"bind:WORKDONEMIDDLESEGMENTCLASSNAME\" textAlign=\"left\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\" border=\"1px solid #f1f1f1,0px solid #f1f1f1,1px solid #f1f1f1,1px solid #f1f1f1\" expandsize=\"24\"/><Cell col=\"5\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\" displaytype=\"text\" edittype=\"normal\" textAlign=\"left\" text=\"bind:DESCRIPTION\"/><Cell col=\"6\" text=\"bind:VALIDSTATE\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,ValidState,,Y,Y\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"7\" text=\"bind:VALIDSTATE\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,ValidState,,Y,Y\"/><Cell col=\"8\" text=\"bind:CREATOR\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"9\" text=\"bind:CREATEDTIME\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"10\" text=\"bind:MODIFIER\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"11\" text=\"bind:MODIFIEDTIME\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MFM01300M.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("MFM01300M.xfdl","lib::lib_mtm.xjs");
        this.registerScript("MFM01300M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 주요 공정 실적 현황판_기준정보화면
         * 파일명 		: MFM01300M.xfdl
         * 작성자 		: 김진현
         * 작성일 		: 2021.04.21
         *
         * 설  명		: 주요공정 실적 현황판_기준정보화면 (맵핑, 대공정, 중공정)
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.21	김진현   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_mtm.xjs"); /*include "lib::lib_mtm.xjs"*/;	//MTM 공통 라이브러리 include

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        //this.searchDiv = this.div_work.form.div_search.form;

        this.fv_ownerId 		= "";			// 담당자Id

        this.fv_personPos		= 0;			// 담당자Tab Rowpos

        this.fv_segmentRelPos	= 0;			// 표준공정 Tab Rowpos

        this.fv_ProdSegmentPos	= 0;			// 부하량 기준정보 Tab Rowpos

        this.fv_paste = false;					// 복사 여부 판단(맵핑)


        this.fv_f_mainProcGrpId = "";	 		// 필터 대공정 id
        this.fv_f_midProcGrpId 	= "";			// 필터 중공정 id


        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	// 초기화 (공통)
        	this.nfn_formInit(obj);

        	// 검색조건 공통 콤보 설정
        	this.fn_initCombo();

        	// 그리드 팝업창 x 버튼 추가(표준공정)
        	var nMapXTopIdx 	= this.div_work.form.tab_work.tabpage_map.form.grd_map.getBindCellIndex("body","X_T_BTN");
        	this.div_work.form.tab_work.tabpage_map.form.grd_map.setCellProperty("body",nMapXTopIdx,"expandimage","URL('theme://images/img_WF_inputDel_N.png')") ;   // 테마 이미지
        	var nMapXMidIdx 	= this.div_work.form.tab_work.tabpage_map.form.grd_map.getBindCellIndex("body","X_M_BTN");
        	this.div_work.form.tab_work.tabpage_map.form.grd_map.setCellProperty("body",nMapXMidIdx,"expandimage","URL('theme://images/img_WF_inputDel_N.png')") ;   // 테마 이미지

        	// 복사 기능 - 21.04.23 맵핑(대/중) 복사 기능
        	this.div_work.form.tab_work.tabpage_map.form.grd_map.removeEventHandler("onkeydown", this.nfn_grd_onkeydown , this);
        	this.gfn_setGridCopyPaste(this.div_work.form.tab_work.tabpage_map.form.grd_map);

        	// (21.04.23) 기능 추가_[복사 붙여 넣기 시 대/중 공정 코드 설정]
        	this.div_work.form.tab_work.tabpage_map.form.grd_map.addEventHandler( "onkeydown"
        							, this.fn_gridKeyDown
        							, this
        							);

        	// 품목코드 x 버튼 이벤트 설정
        	this.tab_search.tabpage_mapSearch.form.btn_edt_mainProcGrp.setEventHandler( "onclick", this.fn_clickMainProcGrp, this );
        	this.tab_search.tabpage_mapSearch.form.btn_edt_midProcGrp.setEventHandler( "onclick", this.fn_clickMidProcGrp, this );



        };


        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색(메인 -  고객정보 그리드)
         */
        this.fn_search = function (obj, e)
        {
        	var nSearchTab = this.tab_search.tabindex;

        	// 조회 분기 로직
        	this.fn_tabSearch(nSearchTab);
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	var nTabIdx = this.div_work.form.tab_work.tabindex;

        	switch(nTabIdx) {
        		case 0: //[조회조건] Period dataset Callback
        			this.fn_mappingSave(this.ds_segmentRelMain, nTabIdx, this.div_work.form.tab_work.tabpage_map.form.grd_map);
        			break;
        		case 1: //대공정 그룹 저장
        			this.fn_procSave(this.ds_topMain, this.div_work.form.tab_work.tabpage_Top.form.grd_topMain,"TOPLOADSEGMENTGROUPLIST");
        			break;
        		case 2: //중공정 그룹 저장
        			this.fn_procSave(this.ds_midMain, this.div_work.form.tab_work.tabpage_Mid.form.grd_midMain, "MIDDLELOADSEGMENTGROUPLIST");
        			break;
        		default:
        	}
        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {

        };

        /*
         * 기능 : 신규
         */
        this.fn_new = function(obj,e)
        {

        };


        /*
         * 기능 : 삭제
         */
        this.fn_delete = function(obj,e)
        {

        };
        /*
         * 기능 : 도움말  => 공통 처리
         */
        this.fn_help = function(obj,e)
        {

        };

        /*
         * 기능 : 출력
         */
        this.fn_print = function(obj,e)
        {

        };



        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD != 0)
        	{
        		if (trId == "saveProcGrpList")
        		{
        			var msgArray = errMsg.split(("|"));
        			if(msgArray.length==2) {
        				this.gfn_Message(msgArray[0], "\n"+msgArray[1], "error", "ok");
        				return;
        			} else {
        				this.gfn_Message("ProcessingError", "\n"+errMsg, "error", "ok");
        				return;
        			}
        		} else {
        			this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        			return;
        		}
        		return;
        	}

        	switch(trId) {
        		case "selectPlantList10001": 			//[조회조건] Period dataset Callback _[사용]

        			// site 첫값
        			this.tab_search.tabpage_topSearch.form.cmb_site.set_value(this.gf_getSiteType());
        			this.tab_search.tabpage_midSearch.form.cmb_site.set_value(this.gf_getSiteType());
        			// 공정 부하 기준 정보 - 담당자(생산구분, 제품구분)
        			// this.fn_getProdType();			// 생산 구분 (21.04.22) - 일단 주석 처리
        			//this.fn_getProdDivision();

        			break;
        		case "TopLoadSegmentClass":

        			if(this.ds_topMain.rowcount == 0)
        			{
        				this.gfn_Message("NoSelectData", null, "warning", "ok");
        			}
        			break;
        		case "MiddleLoadSegmentClass":
        			if(this.ds_midMain.rowcount == 0)
        			{
        				this.gfn_Message("NoSelectData", null, "warning", "ok");
        			}
        			break;
        		case "SmallLoadSegmentClass":
        			if(this.ds_smallMain.rowcount == 0)
        			{
        				this.gfn_Message("NoSelectData", null, "warning", "ok");
        			}
        			break;

        		case "saveProcGrpList": 				// 대/중 공정 그룹저장

        			this.gfn_Message("SuccessSave", null, "info", "ok");

        			this.fn_search();

        			break;

        		case "saveWorkDoneSegmentRel": 			 	// 표준공정 맵핑 저장

        			this.gfn_Message("SuccessSave", null, "info", "ok");

        			this.fn_search();

        			break;

        		case "selectWorkDoneSegmentRelList":		// 표준공정 조회
        			if(this.ds_segmentRelMain.rowcount == 0)
        			{
        				this.gfn_Message("NoSelectData", null, "warning", "ok");
        			}

        			// 조회 성공 후 (시작인 빈값인경우 오늘로  자동 설정)
        			//this.fn_setToDate();		// 21.05.07 사용안함

        			// 조회 성공 후 (유효상태 설정)
        			this.fn_setValid();

        			break;

        		case "selectTopProcGrp":			//_[사용]
        			if(this.ds_topMain.rowcount == 0)
        			{
        				this.gfn_Message("NoSelectData", null, "warning", "ok");
        			}
        			break;
        		case "selectMidProcGrp":			//_[사용]
        			if(this.ds_midMain.rowcount == 0)
        			{
        				this.gfn_Message("NoSelectData", null, "warning", "ok");
        			}
        			break;


        	default:

        	}

        };




        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;
            switch(sPopupId)
        	{
        		case "TOP_PROC_GRP" :	// 대공정그룹
        			var nLen = rtn.length;
        			if(nLen != 0)
        			{
        				var nTop = "";

        				for(var i=0; i<nLen; i++)
        				{
        					nTop += i==0? rtn[i][0] : ", " +rtn[i][0];
        				}
        				this.tab_search.tabpage_topSearch.form.edt_topProc.set_value(nTop);
        			}
        			else
        			{
        				this.tab_search.tabpage_topSearch.form.edt_topProc.set_value("");
        			}
        			break;

        		case "MID_PROC_GRP" :	// 중공정그룹
        			var nLen = rtn.length;
        			if(nLen != 0)
        			{
        				var nMid = "";

        				for(var i=0; i<nLen; i++)
        				{
        					nMid += i==0? rtn[i][0] : ", " +rtn[i][0];
        				}
        				this.tab_search.tabpage_midSearch.form.edt_midProc.set_value(nMid);
        			}
        			else
        			{
        				this.tab_search.tabpage_midSearch.form.edt_midProc.set_value("");
        			}
        			break;

        		case "P_PROCESSSEGMENTID" :	// 표준공정 맵핑Tab - 표준공정(다중선택)	__[사용]
        			var nLen = rtn.length;

        			if(nLen != 0)
        			{
        				var nStandard = "";

        				for(var i=0; i<nLen; i++)
        				{
        					nStandard += i==0? rtn[i][0] : ", " +rtn[i][0];
        				}
        				this.tab_search.tabpage_mapSearch.form.edt_standard.set_value(nStandard);

        			}
        			else
        			{
        				this.tab_search.tabpage_mapSearch.form.edt_standard.set_value("");
        			}
        			break;
        		case "P_GetLoadSegmentListByType" :	// 표준공정 맵핑Tab - 대/중/소(단일선택)

        				switch(rtn[2]) {
        					case "TopWorkDoneSegmentClass":		// 대공정
        						this.ds_segmentRelMain.setColumn(this.fv_segmentRelPos, "WORKDONETOPSEGMENTCLASSID", rtn[0]);
        						this.ds_segmentRelMain.setColumn(this.fv_segmentRelPos, "WORKDONETOPSEGMENTCLASSNAME", rtn[1]);
        						break;
        					case "MiddleWorkDoneSegmentClass": 	// 중공정
        						this.ds_segmentRelMain.setColumn(this.fv_segmentRelPos, "WORKDONEMIDDLESEGMENTCLASSID", rtn[0]);
        						this.ds_segmentRelMain.setColumn(this.fv_segmentRelPos, "WORKDONEMIDDLESEGMENTCLASSNAME", rtn[1]);
        						break;
        					default:
        				}
        			break;
        		case "P_GetLoadSegmentListByType_filter" :	// 표준공정 맵핑Tab - 대/중/소(단일선택) - 필터

        				switch(rtn[2]) {
        					case "TopWorkDoneSegmentClass":		// 대공정
        						this.tab_search.tabpage_mapSearch.form.edt_mainProcGrp.set_value(rtn[1]);
        						this.fv_f_mainProcGrpId = rtn[0];	 		// 필터 대공정 id

        						break;
        					case "MiddleWorkDoneSegmentClass": 	// 중공정
        						this.tab_search.tabpage_mapSearch.form.edt_midProcGrp.set_value(rtn[1]);
        						this.fv_f_midProcGrpId 	= rtn[0];			// 필터 중공정 id
        						break;
        					default:
        				}
        			break;


        		default :
        			break;
        	}
        };

         /*
         * 기능(공통팝업) : 조회
         */
        this.fn_openPop = function(svcId, popId, pArg)
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
        	var opts = "width=600,height=600";

        	oArg.arg_type = "CA";		// 멀티 선택
        	oArg.arg_popupCd = popId;
        	oArg.arg_popupNm = "";
        	oArg.arg_paramCols = this.gfn_getExtractArgument(pArg,"name");
        	oArg.arg_paramValues = this.gfn_getExtractArgument(pArg,"value");

        	if(popId=="P00245"){ // 대공정 그룹 조회
        		oArg.arg_rtnCols = "WORKDONESEGMENTCLASSID";							// 코드만 받아온다
        		oArg.arg_searchStr = "1=1|TXTWORKDONETOPSEGMENTCLASS="+this.tab_search.tabpage_topSearch.form.edt_topProc.value;	// 대
        	}
        	else if(popId=="P00246")	// 중공정 그룹 조회
        	{
        		oArg.arg_rtnCols = "WORKDONESEGMENTCLASSID";							// 코드만 받아온다
        		oArg.arg_searchStr = "1=1|TXTWORKDONEMIDDLESEGMENTCLASS="+this.tab_search.tabpage_midSearch.form.edt_midProc.value;	// 중
        	}



        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        }


        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 기능 : 조회 조건 Load
         */
        this.fn_tabSearch = function (nIdx)
        {
        	switch(nIdx) {
        		case 0: //표준공정 맵핑
        			this.ds_segmentRelMain.clearData();
        			this.fn_searchRel();				// 표준공정 조회

        			break;
        		case 1: //대공정 그룹 조회
        			this.ds_topMain.clearData();
        			var nType = "TOP";	//"TopLoadSegmentClass";
        			this.fn_searchGrp( nType);			// 그룹조회(대/중/소)
        			break;
        		case 2: //중공정 그룹 조회
        			this.ds_midMain.clearData();
        			var nType = "MIDDLE";
        			this.fn_searchGrp(nType);			// 그룹조회(대/중/소)
        			break;
        		default:
        	}
        };

        /*
         * 대/중 공정 그룹 조회
         */
        this.fn_searchGrp = function (nType)
        {
        	this.ds_searchGrp.clearData();
        	this.ds_searchGrp.addRow();
        	this.ds_searchGrp.setColumn(0,"TYPE"			,nType);
        	this.ds_searchGrp.setColumn(0,"ENTERPRISEID"	,this.gf_getEnterpriseId());


        	var nSvcID 			= "";		// service Id
        	var nOutDatasets	= "";		// 데이터셋

        	var nTop 	= "";
        	var nMid 	= "";
        	var nSmall 	= "";
        	var nValid	= "";
        	var nSite	= "";

        	// 리턴 데이터셋 설정(outdate 설정 및 콜백 설정)
        	switch(nType) {
        		case "TOP":
        			nSvcID 			= "selectTopProcGrp";
        			nOutDatasets 	= "ds_topMain=output";
        			nTop			= this.tab_search.tabpage_topSearch.form.edt_topProc.value;
        			nSite			= this.tab_search.tabpage_topSearch.form.cmb_site.value;
        			nValid			= this.tab_search.tabpage_topSearch.form.cmb_valid.value;
        			break;
        		case "MIDDLE":
        			nSvcID 			= "selectMidProcGrp";
        			nOutDatasets 	= "ds_midMain=output";
        			nMid			= this.tab_search.tabpage_midSearch.form.edt_midProc.value;
        			nSite			= this.tab_search.tabpage_midSearch.form.cmb_site.value;
        			nValid			= this.tab_search.tabpage_midSearch.form.cmb_valid.value;
        			break;
        		default:
        	}

        	this.ds_searchGrp.setColumn(0,"PLANTID"							,nSite);

        	this.ds_searchGrp.setColumn(0,"P_WORKDONETOPSEGMENTCLASSID"		,nTop);
        	this.ds_searchGrp.setColumn(0,"P_WORKDONEMIDDLESEGMENTCLASSID"	,nMid);

        	this.ds_searchGrp.setColumn(0,"P_VALIDSTATE"					,nValid);


        	var sSvcID 			= nSvcID;
        	var sController 	= "/mfm01300/selectWorkDoneSegmentList.do";
        	var sInDatasets 	= "INPUT=ds_searchGrp";
        	var sOutDatasets 	= nOutDatasets;
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);


        };

        /*
         * 기능 : 조회 조건 Load
         */
        this.fn_initCombo = function ()
        {
        	this.fn_initSiteCombo();
        }
        /*
         * 기능 : 'site' 콤보 조회
         */
        this.fn_initSiteCombo = function ()
        {
        	this.ds_search.clearData();

        	// 조회 조건 설정
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId()); 	// ENTERPRISEID

        	// 품목유형코드 콤보 정보 조회
        	var sSvcID 			= "selectPlantList10001";
        	var sController 	= "/pcm08400/selectPlantList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_plant=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }

        /*
         * 대/중/소 공정그룹 추가
         */
        this.fn_procAdd = function(obj,e)
        {
        	var nTabIdx = this.div_work.form.tab_work.tabindex;
        	switch(nTabIdx) {
        		case 1: //대공정 그룹 조회
        			var nAddRow = this.ds_topMain.addRow();
        			this.ds_topMain.setColumn(nAddRow, "WORKDONESEGMENTCLASSTYPE","TopWorkDoneSegmentClass");
        			this.ds_topMain.setColumn(nAddRow, "VALIDSTATE","Valid");
        			this.ds_topMain.setColumn(nAddRow, "ENTERPRISEID", this.gf_getEnterpriseId());	// EnterpriseId
        			this.ds_topMain.setColumn(nAddRow, "PLANTID", this.gf_getSiteType());   		// Site
        			break;
        		case 2: //중공정 그룹 조회
        			var nAddRow = this.ds_midMain.addRow();
        			this.ds_midMain.setColumn(nAddRow, "WORKDONESEGMENTCLASSTYPE","MiddleWorkDoneSegmentClass");
        			this.ds_midMain.setColumn(nAddRow, "VALIDSTATE","Valid");
        			this.ds_midMain.setColumn(nAddRow, "ENTERPRISEID", this.gf_getEnterpriseId());	// EnterpriseId
        			this.ds_midMain.setColumn(nAddRow, "PLANTID", this.gf_getSiteType());   		// Site
        			break;
        		default:
        	}

        };

        /*
         * 대/중 공정 그룹 copy
         */
        this.fn_procCopy = function(obj,e)
        {
        	var nTabIdx = this.div_work.form.tab_work.tabindex;
        	var nObjDs;
        	switch(nTabIdx) {
        		case 1: //대공정 그룹 조회
        			nObjDs = this.ds_topMain;

        			break;
        		case 2: //중공정 그룹 조회
        			nObjDs = this.ds_midMain;

        			break;
        		default:
        	}

        	this.fn_copyDataset(nObjDs, null, "CREATOR,MODIFIER,CREATEDTIME,MODIFIEDTIME");
        };

        /*
         * 대/중 그룹 삭제
         */
        this.fn_procDelete = function(obj,e)
        {
        	var nTabIdx = this.div_work.form.tab_work.tabindex;
        	var nObjDs;
        	switch(nTabIdx) {
        		case 1: //대공정 그룹 조회
        			nObjDs = this.ds_topMain;
        			break;
        		case 2: //중공정 그룹 조회
        			nObjDs = this.ds_midMain;
        			break;
        		default:
        	}

        	this.fn_deleteRow(nObjDs);

        };

        /*******************************************************************************
         * fn_copyDataset
         * 기능 : Dataset 복사 함수
         * 최성민 -> copy 하단에 복사한 결과값 생기도록 수정
         * Parameter  :
         *				dsObjFr : 소스Dataset
         *				dsObjTo : 타겟Dataset
         *				args	: 복사후 초기화할 컬럼 배열 (A,B,C)  -> 수정해서 사용
        *******************************************************************************/
        this.fn_copyDataset = function (dsObjFr, dsObjTo, args)
        {

        	if(dsObjFr == null) return;
        	if(dsObjTo == null) dsObjTo = dsObjFr;
        	var row = -1;
        	var isChkCnt = dsObjFr.getColIndex("CHK");
        	var chkCnt = isChkCnt==-1 ? -1 : dsObjFr.getCaseCount("CHK=='1'");
        	var rowCount = dsObjFr.rowcount;
        	var exceptCol = new Array();

        	if(!this.nfn_isNull(args)){
        		exceptCol = args.split(",");
        	}

        	dsObjFr.set_enableevent(false);
        	dsObjTo.set_enableevent(false);

        	//단일행
        	if(chkCnt==-1){
        		var dsPosition = dsObjFr.rowposition;
        		if(dsPosition < 0) {
        			this.gfn_Message("NoSelections", "", "warning", "ok");
        			dsObjFr.set_enableevent(true);
        			dsObjTo.set_enableevent(true);
        			return;
        		} else {
        			row = dsObjTo.insertRow(dsPosition);
        			dsObjTo.copyRow(row, dsObjFr, dsPosition);
        			dsObjTo.setColumn(row,"CHK","0");
        			for(var j=0; j<exceptCol.length; j++){
        				dsObjTo.setColumn(row,exceptCol[j],"");
        			}
        		}
        	} else {
        		if (chkCnt==0)
        		{
        			this.gfn_Message("NoSelections", "", "warning", "ok");
        			dsObjFr.set_enableevent(true);
        			dsObjTo.set_enableevent(true);
        			return;
        		}
        		for(var i=0; i<rowCount; i++){
        			if(dsObjFr.getColumn(i,"CHK")=="1"){
        				var nLastRow = dsObjTo.rowcount;
        				row = dsObjTo.insertRow(nLastRow+1);
        				//row = dsObjTo.insertRow(i+1);
        				//i+2;
        				dsObjTo.copyRow(row, dsObjFr, i);
        				/* KEY,WHO컬럼 관련 복사제외 */
        				dsObjTo.setColumn(row,"CHK","0");
        				for(var j=0; j<exceptCol.length; j++){
        					dsObjTo.setColumn(row,exceptCol[j],"");
        				}
        			}
        		}
        	}
        	dsObjFr.set_enableevent(true);
        	dsObjTo.set_enableevent(true);
        	return row;
        };

        /*******************************************************************************
         * fn_deleteRow
         * 기능 : 그리드에 체크된 행 삭제
         * 다중행만 삭제
         * Parameter  :
         *				dsObjFr : 소스Dataset
         *				args	: 체크박스 외에 추가 조건 (KEY==VALUE && KEY1==VALUE1)
         *				msg		: Confirm 메세지 표시여부 (msgId)
        *******************************************************************************/
        this.fn_deleteRow = function (dsObj, args, msg)
        {
        	if(dsObj == null) return;
        	var isChkCnt = dsObj.getColIndex("CHK");
        	var chkCnt = isChkCnt==-1 ? -1 : dsObj.getCaseCount("CHK=='1'");
        	var rowCount = dsObj.rowcount;
        	var bOk = true;

        	//멀티행 삭제건
        	if (chkCnt==0)
        	{
        		this.gfn_Message("NoSelections", "", "warning", "ok");
        		return;
        	}

        	if(!this.nfn_isNull(msg)){
        		bOk = this.gfn_Message(msg, null, "conf", "yesno");
        		if(!bOk){return}
        	}

        	for(var j=rowCount+1; j>=0; j--){
        		if(dsObj.getColumn(j,"CHK")=="1"){
        			if(!this.nfn_isNull(args)){
        				var sRow 			= dsObj.findRowExpr(args);
        				if(sRow<0) continue;
        			}
        				dsObj.deleteRow(j);

        		}
        	}
        };

        /*
         * 대/중 저장
         */
        this.fn_procSave = function (nObjDs, nGrid, nTitle)
        {
        	if (!this.gfn_dsIsUpdated(nObjDs))
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}

        	/* 그리드 필수체크 */
        	var mst 	= nGrid;

        	var strMst = "WORKDONESEGMENTCLASSID,VALIDSTATE";					// 필수값 체크

        	/* 고객정보 그리드 체크 */
        	if(!this.nfn_MandatoryCheckGrid(mst, strMst)) return;

        	//고객정보 그리드내 중복값 체크
        	if(!this.fn_checkGridDup(nObjDs
        							, "WORKDONESEGMENTCLASSID"
        							, "DuplicationUserSequence|DuplicationSegmentID"
        							, this.nfn_getDictionaryname(nTitle,true)
        							)){ return;}

        	var dsName = nObjDs.name;	// 대/중/소 데이터셋 명

        	// 대/중 공정 저장
        	var sSvcID 			= "saveProcGrpList";
        	var sController 	= "/mfm01300/saveProcGrpList.do";
        	var sInDatasets 	= "ds_procGrp="+dsName+":U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };
        /*******************************************************************************
         * fn_checkGridDup
         * 기능 : 그리드내 중복값 존재여부 체크
         * 최성민(복사해수 구현)
         * Parameter  :
         *				obj 	: 체크 Dataset
         *				chkCol  : 체크 컬럼ID (COLUMN_A|COLUMN_B|COLUMN_C)
         *				msg		: 체크컬럼 오류시 메세지 ID (MSG_A|MSG_B|MSG_C)
        *******************************************************************************/
         this.fn_checkGridDup = function (obj, chkCol, msg, tableNm)
         {
        	//속도문제로 로딩바 이미지 표시
        	if(this.nfn_isNull(chkCol)) return true;
        	var chkColList = chkCol.split("|");
        	//var msgList = msg.split("|");
        	for(var i=0; i <obj.rowcount; i++){

        		var nChkStr = "";
        		for(var j=0; j <chkColList.length; j++){
        			var chkKey = chkColList[j];
        			var chkValue = obj.getColumn(i,chkKey);

        			nChkStr += j==0? chkKey+"== '" + chkValue+"'"
        							:" && " +chkKey+"== '" + chkValue+"'";
        		}
        		// 중복 조건
        		var chkCnt = obj.getCaseCount(nChkStr);

        		if(chkCnt > 1){
        			var chkText = this.nfn_getDictionarynameUpper("FIELDDATA") +"[" + chkValue +"]" ;
        			//this.gfn_Message(this.nfn_nvl(msgList[j],"CannotInputDupSomething"),chkText , "warning", "ok");
        			this.gfn_Message("CannotInputDupSomething",tableNm , "warning", "ok");
        			return false;
        		}
        	}
        	return true;
         };


        /*
         * 맵핑 정보 저장
         */
        this.fn_mappingSave = function (nObjDs, nType, nGrid)
        {
        	if (!this.gfn_dsIsUpdated(nObjDs))
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}
        	var nOut = "";
        	switch(nType) {

        		case 0: // 표준공정 저장
        			nOut	= "ds_segmentRelMain=ds_segmentRelMain:U";

        			this.fn_setRelInfo();
        			break;

        		default:
        	}

        	/*
        	// 21.04.26 노석안과장님 요청 사항 불필요(만료일있으면 사용 안함)
        	if(nType == 0)
        	{
        		// 그리드 필수체크
        		var mst 	= nGrid;

        		var strMst = "VALIDSTATE";					// 필수값 체크

        		// 고객정보 그리드 체크
        		if(!this.nfn_MandatoryCheckGrid(mst, strMst)) return;
        	}
        	*/
        	// 표준공정 맵핑인 경우만
        	if(nType == 0)
        	{
        		// 날짜 양식 체크
        		var nRelCnt = this.ds_segmentRelMain.rowcount;
        		/*
        		// 21.05.07 날짜 사용 안함 대신 유효 여부 사용함
        		for(var i=0; i<nRelCnt; i++)
        		{
        			var nS = this.ds_segmentRelMain.getColumn(i,"SDATE");
        			var nD = this.ds_segmentRelMain.getColumn(i,"EDATE");

        			var nRowType = this.ds_segmentRelMain.getRowType(i);

        			if(nRowType == Dataset.ROWTYPE_UPDATE || nRowType == Dataset.ROWTYPE_INSERT)
        			{
        				if(!this.gfn_isNull(nS) && !this.gfn_isNull(nD))
        				{
        					if( nS  > nD )
        					{
        						this.gfn_Message("ValidateDate", "", "warning", "ok");//시작 일자는 종료일자보다 작아야합니다.
        						return false;
        					}
        				}
        				if(!this.gfn_isNull(nS))
        				{
        					var nChkDate = nS.replace(/-/gi, "");
        					// 날짜 체크
        					if(!this.gfn_isDate(nChkDate))
        					{
        						this.gfn_Message("ValidateMWONONEDATE", "", "warning", "ok");//잘못된날짜데이터입니다.
        						return;
        					}
        				}
        				if(!this.gfn_isNull(nD))
        				{
        					var nChkDate = nD.replace(/-/gi, "");
        					// 날짜 체크
        					if(!this.gfn_isDate(nChkDate))
        					{
        						this.gfn_Message("ValidateMWONONEDATE", "", "warning", "ok");//잘못된날짜데이터입니다.
        						return;
        					}
        				}
        			}
        		}
        		*/
        	}
        	// 표준공정 맵핑인 경우만(대/중 공정 코드 누락 부분 채우기, 등록 내역 체크)
        	if(nType == 0)
        	{
        		// 저장시 체크()
        		if(!this.fn_setChksegmentRel())
        		{
        			return;
        		}
        	}


        	// 대/중 공정 저장
        	var sSvcID 			= "saveWorkDoneSegmentRel";
        	var sController 	= "/mfm01300/saveWorkDoneSegmentRel.do";
        	var sInDatasets 	= nOut;
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        /*
         * 필터 조건의 초기화 설정
         */
        this.fn_initSearch = function ()
        {
        	var nSearchTab = this.tab_search.tabindex;
        	switch(nSearchTab) {
        		case 0: // 표준공정 맵핑 초기화
        			this.tab_search.tabpage_mapSearch.form.cmb_noInput.set_index(0);
        			this.tab_search.tabpage_mapSearch.form.cmb_valid.set_index(0);
        			this.tab_search.tabpage_mapSearch.form.edt_standard.set_value("");

        			this.tab_search.tabpage_mapSearch.form.edt_mainProcGrp.set_value("");
        			this.tab_search.tabpage_mapSearch.form.edt_midProcGrp.set_value("");
        			this.fv_f_midProcGrpId 		= "";			// 필터 중공정 id
        			this.fv_f_mainProcGrpId 	= "";			// 필터 대공정 id

        			break;
        		case 1: //대공정 그룹 조회
        			this.tab_search.tabpage_topSearch.form.cmb_site.set_value(this.gf_getSiteType());
        			this.tab_search.tabpage_topSearch.form.edt_topProc.set_value("");
        			this.tab_search.tabpage_topSearch.form.cmb_valid.set_index(0);
        			break;
        		case 2: //중공정 그룹 조회
        			this.tab_search.tabpage_midSearch.form.cmb_site.set_value(this.gf_getSiteType());
        			this.tab_search.tabpage_midSearch.form.edt_midProc.set_value("");
        			this.tab_search.tabpage_midSearch.form.cmb_valid.set_index(0);
        			break;
        		default:
        	}
        };

        /*
         * 표준공정 조회
         */
        this.fn_searchRel = function ()
        {
        	this.ds_segmentGroup.clearData();		// 복사 붙여 넣기 시 대/중 코드 찾기 위해 조회시 가져옴 (전체) 21.04.23 추가

        	this.ds_searchRel.clearData();
        	this.ds_searchRel.addRow();

        	this.ds_searchRel.setColumn(0,"P_PROCESSSEGMENTID"		,this.tab_search.tabpage_mapSearch.form.edt_standard.value);
        	this.ds_searchRel.setColumn(0,"P_NOINPUT"				,this.tab_search.tabpage_mapSearch.form.cmb_noInput.value);
        	this.ds_searchRel.setColumn(0,"P_VALIDSTATE"			,this.tab_search.tabpage_mapSearch.form.cmb_valid.value);

        	// 21.05.06 추가(대,중공정 필터 조건 추가)
        	this.ds_searchRel.setColumn(0,"P_WORKDONETOPCLASS"			,this.fv_f_mainProcGrpId);
        	this.ds_searchRel.setColumn(0,"P_WORKDONEMIDCLASS"			,this.fv_f_midProcGrpId);


        	//
        	this.ds_searchRel.setColumn(0,"PLANTID"					,this.gf_getSiteType());
        	this.ds_searchRel.setColumn(0,"ENTERPRISEID"			,this.gf_getEnterpriseId());



        	var sSvcID 			= "selectWorkDoneSegmentRelList";
        	var sController 	= "/mfm01300/selectWorkDoneSegmentRelList.do";
        	var sInDatasets 	= "INPUT=ds_searchRel";
        	//(21.04.23) 기능 추가_[복사 붙여 넣기 시 대/중 공정 코드 설정]
        	var sOutDatasets 	= "ds_segmentRelMain=output1 ds_segmentGroup=output2";		// 21.04.23 추가
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);


        };


        /*
         * 표준공정(대/중 공정 Popup)
         */
        this.fn_getProcPop = function (nType, nSearchT)
        {
        	var nEnterpriseId 	= this.gf_getEnterpriseId();	//ENTERPRISEID
        	var nSite 			= this.gf_getSiteType();		//Site
        	var nType 			= nType;						//대중소

        	var popupId = "P_GetLoadSegmentListByType";
        	var oArg 	= {};
        	var opts 	= "width=600,height=600";

        	// 그리드 내 입력값 있으면
        	var nSearch = nSearchT;

        	if(!this.gfn_isNull(nSearch))
        	{
        		// 기입력된 값이 있으면
        		oArg.arg_Text = nSearch;
        	}

        	oArg.arg_nEnt 		= nEnterpriseId;
        	oArg.arg_nSite 		= nSite;
        	oArg.arg_nType 		= nType;

        	oArg.arg_rtnCols = "WORKDONESEGMENTCLASSID|WORKDONESEGMENTCLASSNAME";				// 리턴 받을값

        	this.gfn_openPopup(popupId,"mfm::MFM01300P.xfdl" ,oArg ,opts);
        };


        /*
         * 표준공정 수정시 -> 기본 정보 설정
         */
        this.fn_setRelInfo = function ()
        {
        	var nCnt = this.ds_segmentRelMain.rowcount;
        	for(var i=0; i<nCnt; i++)
        	{
        		var nRowType = this.ds_segmentRelMain.getRowType(i);
        		if(nRowType == Dataset.ROWTYPE_UPDATE)
        		{
        			this.ds_segmentRelMain.setColumn(i,"ENTERPRISEID"	,this.gf_getEnterpriseId());
        			this.ds_segmentRelMain.setColumn(i,"PLANTID"		,this.gf_getSiteType());
        		}
        	}
        };


        /*
         *	엑셀 업로드 실패 시 (middle)
         */
        this.fn_excel_fail_mid = function ()
        {
        	this.gfn_Message("FAILEXCELIMPORT", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        	this.ds_midMain.set_enableevent(true);
        };


        /*
         *	엑셀 업로드 이후...(middle)
         */
        this.fn_excel_success_mid = function ()
        {
        	this.ds_midMain.set_enableevent(false);
        	var dsObj 		= this.ds_midMain;
        	var dsObjExcel 	= this.ds_midMainExcel;

        	if(dsObjExcel.rowcount > 0 ){
        		this.fn_makeExcelDataMid();
        	} else {
        		this.gfn_Message("NOTEXISTSEXCELIMPORTDATA", "", "warning", "ok");
        		this.ds_midMain.set_enableevent(true);
        	}
        };


         //업로드된 엑셀데이터를 가지고 코드값 조회 함수 (middle)
        this.fn_makeExcelDataMid = function()
        {
        	for(var i=0; i<this.ds_midMainExcel.rowcount; i++)
        	{
        		var addRow = this.ds_midMain.addRow();
        		this.ds_midMain.copyRow(addRow,this.ds_midMainExcel,i);
        		this.ds_midMain.setColumn(addRow, "WORKDONESEGMENTCLASSTYPE",	"MiddleWorkDoneSegmentClass");
        		this.ds_midMain.setColumn(addRow, "VALIDSTATE",					"Valid");
        		this.ds_midMain.setColumn(addRow, "ENTERPRISEID", 				this.gf_getEnterpriseId());	// EnterpriseId
        		this.ds_midMain.setColumn(addRow, "PLANTID", 					this.gf_getSiteType());   	// Site
        	}
        	this.ds_midMain.set_enableevent(true);
        }


        /*
         *	엑셀 업로드 실패 시 (Top)
         */
        this.fn_excel_fail_top = function ()
        {
        	this.gfn_Message("FAILEXCELIMPORT", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        	this.ds_topMain.set_enableevent(true);
        };


        /*
         *	엑셀 업로드 이후...(Top)
         */
        this.fn_excel_success_top = function ()
        {
        	this.ds_topMain.set_enableevent(false);
        	var dsObj 		= this.ds_topMain;
        	var dsObjExcel 	= this.ds_topMainExcel;

        	if(dsObjExcel.rowcount > 0 ){
        		this.fn_makeExcelDataTop();
        	} else {
        		this.gfn_Message("NOTEXISTSEXCELIMPORTDATA", "", "warning", "ok");
        		this.ds_topMain.set_enableevent(true);
        	}
        };


         //업로드된 엑셀데이터를 가지고 코드값 조회 함수 (Top)
         this.fn_makeExcelDataTop = function()
         {
        	for(var i=0; i<this.ds_topMainExcel.rowcount; i++)
        	{
        		var addRow = this.ds_topMain.addRow();
        		this.ds_topMain.copyRow(addRow,this.ds_topMainExcel,i);
        		this.ds_topMain.setColumn(addRow, "WORKDONESEGMENTCLASSTYPE",	"TopWorkDoneSegmentClass");
        		this.ds_topMain.setColumn(addRow, "VALIDSTATE",					"Valid");
        		this.ds_topMain.setColumn(addRow, "ENTERPRISEID", 				this.gf_getEnterpriseId());	// EnterpriseId
        		this.ds_topMain.setColumn(addRow, "PLANTID", 					this.gf_getSiteType());   	// Site
        	}
        	this.ds_topMain.set_enableevent(true);

         }

         /*
          * 시작일 빈값 자동 오늘자로 설정_[21.04.23]
          */
         this.fn_setToDate = function ()
         {

        	this.div_work.form.tab_work.tabpage_map.form.grd_map.set_enableevent(false);
        	this.ds_segmentRelMain.set_enableevent(false);
        	var nToDate = this.gfn_today();
        	var nCnt  	= this.ds_segmentRelMain.rowcount;
        	for(var i=0; i<nCnt; i++)
        	{
        		var nSdate = this.ds_segmentRelMain.getColumn(i,"SDATE");
        		if(this.gfn_isNull(nSdate))
        		{
        			this.ds_segmentRelMain.setColumn(i,"SDATE",nToDate);
        		}
        	}
        	this.div_work.form.tab_work.tabpage_map.form.grd_map.set_enableevent(true);
        	this.ds_segmentRelMain.set_enableevent(true);

         };

        /*
         * 표준공정 맵핑 - 대/소 공정 붙여 넣을 후 코드값 설정 (21.04.23) 기능 추가_[복사 붙여 넣기 시 대/중 공정 코드 설정]
         */
        this.fn_gridKeyDown = function (obj,e)
        {
        	var sKeycode = e.keycode;

        	if(e.ctrlkey && !e.shiftkey && !e.altkey)
        	{
        		if(sKeycode == 86)		// 붙여 넣기
        		{
        			//obj.bGridCopy = true;
        			//trace(" 붙여넣기 "+e.keycode+" || "+e.);
        			//this.fn_chkGrid();
        			this.fv_paste = true;
        		}
        	}
        };


        /*
         * 대/중 공정명/코드 체크 설정 (21.04.23) 기능 추가_[복사 붙여 넣기 시 대/중 공정 코드 설정]
         */
        this.fn_setWorkDoneCode = function ()
        {
        	/*
        	var nIcnt = this.ds_segmentRelMain.getCaseCount("dataset.getRowType(currow)==2");		// 신규 등록 안됨 수정만됨.
        	//trace("-----------------------------(신규 건수.)"+nIcnt);
        	if(nIcnt > 0 )
        	{
        		trace("-----------------------------(신규 등록 건이 있습니다.)");
        		this.fv_paste = false;
        		return;
        	}
        	*/


        	// 신규는 없다...
        	var nRow = this.ds_segmentRelMain.rowcount;
        	//trace("=======================[여기] (총) : "+nRow);
        	for(var i=0; i<nRow; i++)
        	{
        		//var nType = this.ds_segmentRelMain.getRowType(i);
        		//if(nType == Dataset.ROWTYPE_UPDATE)		// 수정인 경우만
        		//{
        			var nTtxt = this.ds_segmentRelMain.getColumn(i,"WORKDONETOPSEGMENTCLASSNAME");		// 대공정
        			if(!this.gfn_isNull(nTtxt))
        			{
        				//trace("=======================[여기] (체크) : "+nTtxt+" || "+i);
        				var nChkRow = (i+1)+"";
        				// 명으로 -> 코드 찾아서 설정 (조회시 대/중공정 정보 조회 가지고 있다가 설정)
        				var nTopF 	= this.ds_segmentGroup.findRowExpr("WORKDONESEGMENTCLASSNAME == '"+nTtxt+"' && WORKDONESEGMENTCLASSTYPE == 'TopWorkDoneSegmentClass'");
        				if(nTopF == -1)
        				{
        					this.gfn_Message("CheckSegmentGroup", [this.nfn_getDictionaryname("TOPSEGMENTGROUP",true),nChkRow], "error", "ok");	//{0}에 해당하는 코드값이 없습니다. ({1}행)
        					return false;
        				}
        				var nId		= this.ds_segmentGroup.getColumn(nTopF,"WORKDONESEGMENTCLASSID");
        				this.ds_segmentRelMain.setColumn(i,"WORKDONETOPSEGMENTCLASSID",nId);				// 대공정 코드 설정
        			}

        			var nMtxt = this.ds_segmentRelMain.getColumn(i,"WORKDONEMIDDLESEGMENTCLASSNAME");		// 중공정
        			if(!this.gfn_isNull(nMtxt))
        			{
        				// 명으로 -> 코드 찾아서 설정 (조회시 대/중공정 정보 조회 가지고 있다가 설정)
        				var nMidF 	= this.ds_segmentGroup.findRowExpr("WORKDONESEGMENTCLASSNAME == '"+nMtxt+"' && WORKDONESEGMENTCLASSTYPE == 'MiddleWorkDoneSegmentClass'");
        				if(nMidF == -1)
        				{
        					this.gfn_Message("CheckSegmentGroup", [this.nfn_getDictionaryname("MIDDLESEGMENTGROUP",true),nChkRow], "error", "ok");	//{0}에 해당하는 코드값이 없습니다. ({1}행)
        					return false;
        				}
        				var nId		= this.ds_segmentGroup.getColumn(nMidF,"WORKDONESEGMENTCLASSID");
        				this.ds_segmentRelMain.setColumn(i,"WORKDONEMIDDLESEGMENTCLASSID",nId);				// 중공정 코드 설정
        			}
        		//}
        	}
        	return true;
        };


        /*
         * 저장전 누락된 대/중/소 코드 설정 (21.04.23)
         */
        this.fn_setChksegmentRel = function ()
        {
        	var nCnt 		= this.ds_segmentRelMain.rowcount;
        	var nChkInsert	= this.ds_segmentRelMain.getCaseCount("dataset.getRowType(currow)==2");
        	if(nChkInsert != 0)
        	{
        		this.gfn_Message("CannotSaveInsert", null, "warning", "ok");	// 신규 등록된 내역은 저장 할 수 없습니다.
        		return false;
        	}

        	if(!this.fn_setWorkDoneCode())
        	{
        		return false;
        	}

        	return true;

        };


        /*
         * 표준공정(대/중 공정 Popup) - 필터
         */
        this.fn_getProcPopFilter = function (nType, nSearchT)
        {
        	var nEnterpriseId 	= this.gf_getEnterpriseId();	//ENTERPRISEID
        	var nSite 			= this.gf_getSiteType();		//Site
        	var nType 			= nType;						//대중소

        	var popupId = "P_GetLoadSegmentListByType_filter";
        	var oArg 	= {};
        	var opts 	= "width=600,height=600";

        	// 그리드 내 입력값 있으면
        	var nSearch = nSearchT;

        	if(!this.gfn_isNull(nSearch))
        	{
        		// 기입력된 값이 있으면
        		oArg.arg_Text = nSearch;
        	}

        	oArg.arg_nEnt 		= nEnterpriseId;
        	oArg.arg_nSite 		= nSite;
        	oArg.arg_nType 		= nType;

        	oArg.arg_rtnCols = "WORKDONESEGMENTCLASSID|WORKDONESEGMENTCLASSNAME";				// 리턴 받을값

        	this.gfn_openPopup(popupId,"mfm::MFM01300P.xfdl" ,oArg ,opts);
        };

        /*
         * 필터 대공정 x 버튼 클릭시
         */
        this.fn_clickMainProcGrp = function ()
        {
        	this.tab_search.tabpage_mapSearch.form.edt_mainProcGrp.set_value("");
        	this.fv_f_mainProcGrpId 	= "";			// 필터 대공정 id
        };
        /*
         * 필터 중공정 x 버튼 클릭시
         */
        this.fn_clickMidProcGrp = function ()
        {
        	this.tab_search.tabpage_mapSearch.form.edt_midProcGrp.set_value("");
        	this.fv_f_midProcGrpId 		= "";			// 필터 중공정 id
        };

         /*
          * 시작일 빈값 자동 오늘자로 설정_[21.04.23]
          */
        this.fn_setValid = function ()
        {

        	this.div_work.form.tab_work.tabpage_map.form.grd_map.set_enableevent(false);
        	this.ds_segmentRelMain.set_enableevent(false);

        	var nCnt  	= this.ds_segmentRelMain.rowcount;
        	for(var i=0; i<nCnt; i++)
        	{
        		var nValid = this.ds_segmentRelMain.getColumn(i,"VALIDSTATE");
        		if(this.gfn_isNull(nValid))
        		{
        			this.ds_segmentRelMain.setColumn(i,"VALIDSTATE","Valid");
        		}
        	}
        	this.div_work.form.tab_work.tabpage_map.form.grd_map.set_enableevent(true);
        	this.ds_segmentRelMain.set_enableevent(true);

        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         * Tab Page 변경시 필터 조건 변경설정
         */
        this.div_work_tab_work_onchanged = function(obj,e)
        {
        	var nTabIdx = this.div_work.form.tab_work.tabindex;
        	// 필터 조건 설정
        	this.tab_search.set_tabindex(nTabIdx);
        };


        /*
         * 중공정 그룹 팝업 호출
         */
        this.tab_search_tabpage_midSearch_btn_midProc_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID"				, this.gf_getEnterpriseId()); 		// ENTERPRISEID
        	sArgs += this.gfn_setParam("PLANTID"					, this.gf_getSiteType()); 			// Site
        	sArgs += this.gfn_setParam("WORKDONESEGMENTCLASSTYPE"	, 'MiddleWorkDoneSegmentClass'); 	// 중

        	this.fn_openPop("MID_PROC_GRP","P00246", sArgs); // 중공정 그룹 조회
        };
        /*
         * 대공정 그룹 팝업 호출
         */
        this.tab_search_tabpage_topSearch_btn_topProc_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID"				, this.gf_getEnterpriseId()); 		// ENTERPRISEID
        	sArgs += this.gfn_setParam("PLANTID"					, this.gf_getSiteType()); 			// Site
        	sArgs += this.gfn_setParam("WORKDONESEGMENTCLASSTYPE"	, 'TopWorkDoneSegmentClass'); 		// 대


        	this.fn_openPop("TOP_PROC_GRP","P00245", sArgs); // 대공정 그룹 조회
        };


        /*
         * 체크박스 선택시 수정 모드 변경 불가하도록 설정
         */
        this.ds_chkChang = function(obj,e)
        {

        	if(e.columnid == 'CHK')		// 체크되거나, 양품수량의 값이 변경 될때
        	{
        		obj.set_updatecontrol(false);
        	}
        };
        /*
         * 체크박스 변경후 상태 변경
         */
        this.ds_chkchanged = function(obj,e)
        {
        	if(e.columnid == 'CHK')		// 체크되거나, 양품수량의 값이 변경 될때
        	{
        		obj.set_updatecontrol(true);
        	}
        };


        /*
         * 표준공정 팝업 호출
         */
        this.tab_search_tabpage_mapSearch_btn_standard_onclick = function(obj,e)
        {
        	var nEnterpriseId 	= this.gf_getEnterpriseId();	//ENTERPRISEID
        	var nSite 			= this.gf_getSiteType();		//Site

        	var popupId = "P_PROCESSSEGMENTID";
        	var oArg 	= {};
        	var opts 	= "width=800,height=800";

        	// 그리드 내 입력값 있으면
        	var nSearch = this.tab_search.tabpage_mapSearch.form.edt_standard.value;

        	if(!this.gfn_isNull(nSearch))
        	{
        		// 기입력된 값이 있으면
        		oArg.arg_standardId = nSearch;
        	}

        	oArg.arg_rtnCols = "PROCESSSEGMENTID|PROCESSSEGMENTNAME";				// 리턴 받을값

        	this.gfn_openPopup(popupId,"mfm::MFM00201P.xfdl" ,oArg ,opts);
        };

        /*
         * 표준공정 대/중/소 팝업 호출시
         */
        this.div_work_tab_work_tabpage_map_grd_map_onexpanddown = function(obj,e)
        {
        	if(e.row < 0) return;
        	var nTopIdx 	= this.div_work.form.tab_work.tabpage_map.form.grd_map.getBindCellIndex("body","WORKDONETOPSEGMENTCLASSNAME");
        	var nMidIdx 	= this.div_work.form.tab_work.tabpage_map.form.grd_map.getBindCellIndex("body","WORKDONEMIDDLESEGMENTCLASSNAME");

        	var nMapXTopIdx 	= this.div_work.form.tab_work.tabpage_map.form.grd_map.getBindCellIndex("body","X_T_BTN");
        	var nMapXMidIdx 	= this.div_work.form.tab_work.tabpage_map.form.grd_map.getBindCellIndex("body","X_M_BTN");

        	this.fv_segmentRelPos 	= e.row;
        	var nText =	"";
        	switch(e.cell) {
        		case nTopIdx:	// 대공정
        			nText = this.ds_segmentRelMain.getColumn(e.row,"WORKDONETOPSEGMENTCLASSNAME");
        			this.fn_getProcPop("TopWorkDoneSegmentClass", nText);
        			break;
        		case nMidIdx: 	// 중공정
        			nText = this.ds_segmentRelMain.getColumn(e.row,"WORKDONEMIDDLESEGMENTCLASSNAME");
        			this.fn_getProcPop("MiddleWorkDoneSegmentClass", nText);
        			break;

        		case nMapXTopIdx: // 대공정 X
        			this.ds_segmentRelMain.setColumn(this.fv_segmentRelPos,"WORKDONETOPSEGMENTCLASSID" ,"");
        			this.ds_segmentRelMain.setColumn(this.fv_segmentRelPos,"WORKDONETOPSEGMENTCLASSNAME" ,"");
        			break;
        		case nMapXMidIdx: // 중공정 X
        			this.ds_segmentRelMain.setColumn(this.fv_segmentRelPos,"WORKDONEMIDDLESEGMENTCLASSID" ,"");
        			this.ds_segmentRelMain.setColumn(this.fv_segmentRelPos,"WORKDONEMIDDLESEGMENTCLASSNAME" ,"");
        			break;
        		default:
        	}

        };

        /*
         * 엑셀 업로드 (대공정)
         */
        this.div_work_tab_work_tabpage_Top_btn_xlUp_grd_topMain_onclick = function(obj,e)
        {

        	if(this.gfn_dsIsUpdated(this.ds_topMain))
        	{
        		var btn = this.gfn_confirm("WRITTENBEDELETE", "information", ""); //"입력한 내용이 있으면 현재 작성중인 내용이 모두 삭제됩니다."
        		if(btn == false) return;
        	}
        	//this.ds_topMain.set_enableevent(false);
        	this.ds_topMain.clearData();
        	/*
        	var bOK = this.gfn_Message("IsOkIntializeGrid", null, "conf", "yesno");//그리드를 초기화 하시겠습니까?
        	if (!bOK) return;

        	this.ds_topMain.set_enableevent(false);
        	for(var i=this.ds_topMain.rowcount-1; i>=0; i--){
        		this.ds_topMain.deleteRow(i);
        	}
        	*/
        	this.Mode = "Excel";
        	this.ds_topMainExcel.clearData();
        	this.gfn_import_excel("ds_topMainExcel", "fn_excel_success_top", "fn_excel_fail_top", "C2", "C2");
        };

        /*
         * 엑셀 업로드 (중공정)
         */
        this.div_work_tab_work_tabpage_Mid_btn_xlUpCustom_grd_midMain_onclick = function(obj,e)
        {
        	if(this.gfn_dsIsUpdated(this.ds_midMain))
        	{
        		var btn = this.gfn_confirm("WRITTENBEDELETE", "information", ""); //"입력한 내용이 있으면 현재 작성중인 내용이 모두 삭제됩니다."
        		if(btn == false) return;
        	}
        	//this.ds_midMain.set_enableevent(false);
        	this.ds_midMain.clearData();
        	/*
        	var bOK = this.gfn_Message("IsOkIntializeGrid", null, "conf", "yesno");//그리드를 초기화 하시겠습니까?
        	if (!bOK) return;

        	this.ds_topMain.set_enableevent(false);
        	for(var i=this.ds_topMain.rowcount-1; i>=0; i--){
        		this.ds_topMain.deleteRow(i);
        	}
        	*/
        	this.Mode = "Excel";
        	this.ds_midMainExcel.clearData();
        	this.gfn_import_excel("ds_midMainExcel", "fn_excel_success_mid", "fn_excel_fail_mid", "C2", "C2");
        };




        /*
         * 체크박스 변경후 상태 변경 (21.04.23) 기능 추가_[복사 붙여 넣기 시 대/중 공정 코드 설정]
         */
        this.ds_chkchangedRel = function(obj,e)
        {
        	if(e.columnid == 'CHK')		// 체크되거나, 양품수량의 값이 변경 될때
        	{
        		obj.set_updatecontrol(true);
        	}
        	else if(e.columnid == 'WORKDONETOPSEGMENTCLASSNAME'
        		|| e.columnid == 'WORKDONETOPSEGMENTCLASSID'
        		|| e.columnid == 'WORKDONEMIDDLESEGMENTCLASSNAME'
        		|| e.columnid == 'WORKDONEMIDDLESEGMENTCLASSID'
        	)
        	{
        		if(this.fv_paste)
        		{
        			this.fn_setWorkDoneCode();
        			this.fv_paste = false;
        		}
        	}
        };


        /*
         * 필터 대/중공정 팝업 조회
         */
        this.fn_filter_ProcGrp_onclick = function(obj,e)
        {
        	var nText;
        	switch(obj.name) {
        		case "btn_mainProcGrp":	// 대공정
        			nText = this.tab_search.tabpage_mapSearch.form.edt_mainProcGrp.value;
        			this.fn_getProcPopFilter("TopWorkDoneSegmentClass", nText);
        			break;
        		case "btn_midProcGrp": 	// 중공정
        			nText = this.tab_search.tabpage_mapSearch.form.edt_midProcGrp.value;
        			this.fn_getProcPopFilter("MiddleWorkDoneSegmentClass", nText);
        			break;


        		default:
        	}
        };


        /*
         * edit 입력시 id 지움 (대공정)
         */
        this.tab_search_tabpage_mapSearch_edt_mainProcGrp_onkeydown = function(obj,e)
        {
        	this.fv_f_mainProcGrpId 	= "";			// 필터 대공정 id
        };
        /*
         * edit 입력시 id 지움 (중공정)
         */
        this.tab_search_tabpage_mapSearch_edt_midProcGrp_onkeydown = function(obj,e)
        {
        	this.fv_f_midProcGrpId 		= "";			// 필터 중공정 id
        };


        /*
         * 표준공정 맵핑 엑셀 업로드
         */
        this.div_work_tab_work_tabpage_map_btn_xlUpCustom_grd_map_onclick = function(obj,e)
        {
        	if(this.gfn_dsIsUpdated(this.ds_segmentRelMain))
        	{
        		var bRtn = this.gfn_confirm("WRITTENBEDELETE", "information", ""); //"입력한 내용이 있으면 현재 작성중인 내용이 모두 삭제됩니다."
        		if(bRtn == false) return;
        	}
        	this.gfn_import_excel("ds_segmentRelMainExcel", "fn_excel_success", "fn_excel_fail", "B1", "B2");
        };
        /*
         *	엑셀 업로드 실패 시 (맵핑)
         */
        this.fn_excel_fail = function ()
        {
        	this.gfn_Message("FAILEXCELIMPORT", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        };


        /*
         *	엑셀 업로드 이후...(맵핑)
         */
        this.fn_excel_success = function ()
        {
        	var nRow = 0, objName, objCode;

        	var dsObj 		= this.ds_segmentRelMain;
        	var dsObjExcel 	= this.ds_segmentRelMainExcel;

        	if(dsObjExcel.rowcount > 0 ) {

        		this.ds_segmentRelMain.set_updatecontrol(false);
        		for(var i = 0; i < dsObjExcel.rowcount; i++) {


        			var addRow = dsObj.addRow();		// 신규 ROW 생성

        			this.ds_segmentRelMain.setRowType(addRow, Dataset.ROWTYPE_UPDATE);

        			// 표준공정 코드
        			objName = dsObjExcel.getColumn(i, "PROCESSSEGMENTID");
        			dsObj.setColumn(addRow, "PROCESSSEGMENTID", objName);

        			// 표준공정명
        			objName = dsObjExcel.getColumn(i, "PROCESSSEGMENTNAME");
        			dsObj.setColumn(addRow, "PROCESSSEGMENTNAME", objName);


        			// 대공정 그룹명
        			objName = dsObjExcel.getColumn(i, "WORKDONETOPSEGMENTCLASSNAME");
        			nRow = this.ds_segmentGroup.findRowExpr("WORKDONESEGMENTCLASSNAME == '"+objName+"' && WORKDONESEGMENTCLASSTYPE =='TopWorkDoneSegmentClass'");
        			objCode = nRow == -1 ? "" : this.ds_segmentGroup.getColumn(nRow, "WORKDONESEGMENTCLASSID");
        			dsObj.setColumn(addRow, "WORKDONETOPSEGMENTCLASSID", objCode);
        			dsObj.setColumn(addRow, "WORKDONETOPSEGMENTCLASSNAME", nRow == -1 ? "" :objName);

        			// 중공정 그룹명
        			objName = dsObjExcel.getColumn(i, "WORKDONEMIDDLESEGMENTCLASSNAME");
        			nRow = this.ds_segmentGroup.findRowExpr("WORKDONESEGMENTCLASSNAME == '"+objName+"' && WORKDONESEGMENTCLASSTYPE =='MiddleWorkDoneSegmentClass'");
        			objCode = nRow == -1 ? "" : this.ds_segmentGroup.getColumn(nRow, "WORKDONESEGMENTCLASSID");
        			dsObj.setColumn(addRow, "WORKDONEMIDDLESEGMENTCLASSID", objCode);
        			dsObj.setColumn(addRow, "WORKDONEMIDDLESEGMENTCLASSNAME", nRow == -1 ? "" :objName);

        			// 설명
        			objName = dsObjExcel.getColumn(i, "DESCRIPTION");
        			dsObj.setColumn(addRow, "DESCRIPTION", objName);

        			// 유효상태
        			objName = dsObjExcel.getColumn(i, "VALIDSTATE");
        			nRow = this.ds_CValidState.findRow("MEANING2", objName);
        			objCode = nRow == -1 ? "" : this.ds_CValidState.getColumn(nRow, "LOOKUP_CODE");
        			dsObj.setColumn(addRow, "VALIDSTATE", objCode);


        		}
        		this.ds_segmentRelMain.set_updatecontrol(true);
        	} else {
        		this.gfn_Message("NOTEXISTSEXCELIMPORTDATA", "", "warning", "ok");
        	}

        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.tabpage_mapSearch.form.btn_standard.addEventHandler("onclick",this.tab_search_tabpage_mapSearch_btn_standard_onclick,this);
            this.tab_search.tabpage_mapSearch.form.btn_searchClear.addEventHandler("onclick",this.fn_initSearch,this);
            this.tab_search.tabpage_mapSearch.form.edt_mainProcGrp.addEventHandler("onkeydown",this.tab_search_tabpage_mapSearch_edt_mainProcGrp_onkeydown,this);
            this.tab_search.tabpage_mapSearch.form.btn_mainProcGrp.addEventHandler("onclick",this.fn_filter_ProcGrp_onclick,this);
            this.tab_search.tabpage_mapSearch.form.edt_midProcGrp.addEventHandler("onkeydown",this.tab_search_tabpage_mapSearch_edt_midProcGrp_onkeydown,this);
            this.tab_search.tabpage_mapSearch.form.btn_midProcGrp.addEventHandler("onclick",this.fn_filter_ProcGrp_onclick,this);
            this.tab_search.tabpage_topSearch.form.btn_topProc.addEventHandler("onclick",this.tab_search_tabpage_topSearch_btn_topProc_onclick,this);
            this.tab_search.tabpage_topSearch.form.btn_searchClear.addEventHandler("onclick",this.fn_initSearch,this);
            this.tab_search.tabpage_midSearch.form.btn_midProc.addEventHandler("onclick",this.tab_search_tabpage_midSearch_btn_midProc_onclick,this);
            this.tab_search.tabpage_midSearch.form.btn_searchClear.addEventHandler("onclick",this.fn_initSearch,this);
            this.div_work.form.tab_work.addEventHandler("onchanged",this.div_work_tab_work_onchanged,this);
            this.div_work.form.tab_work.tabpage_map.form.grd_map.addEventHandler("onexpanddown",this.div_work_tab_work_tabpage_map_grd_map_onexpanddown,this);
            this.div_work.form.tab_work.tabpage_map.form.btn_xlUpCustom_grd_map.addEventHandler("onclick",this.div_work_tab_work_tabpage_map_btn_xlUpCustom_grd_map_onclick,this);
            this.div_work.form.tab_work.tabpage_Top.form.btn_del_ds_topMain.addEventHandler("onclick",this.fn_procDelete,this);
            this.div_work.form.tab_work.tabpage_Top.form.btn_add_ds_topMain.addEventHandler("onclick",this.fn_procAdd,this);
            this.div_work.form.tab_work.tabpage_Top.form.btn_copyRowTop.addEventHandler("onclick",this.fn_procCopy,this);
            this.div_work.form.tab_work.tabpage_Top.form.btn_xlUpCustom_grd_topMain.addEventHandler("onclick",this.div_work_tab_work_tabpage_Top_btn_xlUp_grd_topMain_onclick,this);
            this.div_work.form.tab_work.tabpage_Mid.form.btn_add_ds_midMain.addEventHandler("onclick",this.fn_procAdd,this);
            this.div_work.form.tab_work.tabpage_Mid.form.btn_copyRowMid.addEventHandler("onclick",this.fn_procCopy,this);
            this.div_work.form.tab_work.tabpage_Mid.form.btn_del_ds_midMain.addEventHandler("onclick",this.fn_procDelete,this);
            this.div_work.form.tab_work.tabpage_Mid.form.btn_xlUpCustom_grd_midMain.addEventHandler("onclick",this.div_work_tab_work_tabpage_Mid_btn_xlUpCustom_grd_midMain_onclick,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_header.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.ds_segmentRelMain.addEventHandler("cancolumnchange",this.ds_chkChang,this);
            this.ds_segmentRelMain.addEventHandler("oncolumnchanged",this.ds_chkchangedRel,this);
            this.ds_topMain.addEventHandler("cancolumnchange",this.ds_chkChang,this);
            this.ds_topMain.addEventHandler("oncolumnchanged",this.ds_chkchanged,this);
            this.ds_midMain.addEventHandler("cancolumnchange",this.ds_chkChang,this);
            this.ds_midMain.addEventHandler("oncolumnchanged",this.ds_chkchanged,this);
            this.ds_prodTypeList.addEventHandler("cancolumnchange",this.ds_chkChang,this);
            this.ds_prodTypeList.addEventHandler("oncolumnchanged",this.ds_chkchanged,this);
            this.ds_prodDivisioList.addEventHandler("cancolumnchange",this.ds_chkChang,this);
            this.ds_prodDivisioList.addEventHandler("oncolumnchanged",this.ds_chkchanged,this);
            this.ds_segmentRelMainExcel.addEventHandler("cancolumnchange",this.ds_chkChang,this);
            this.ds_segmentRelMainExcel.addEventHandler("oncolumnchanged",this.ds_chkchangedRel,this);
        };
        this.loadIncludeScript("MFM01300M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
