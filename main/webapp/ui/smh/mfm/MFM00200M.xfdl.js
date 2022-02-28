(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MFM00200M");
            this.set_titletext("공정 부하 기준 정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_ProdSegmentMain", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHPLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"OWNER\" type=\"STRING\" size=\"256\"/><Column id=\"LOADTOPSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"LOADTOPSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOADTOPSEGMENTCLASSNAME_COPY\" type=\"STRING\" size=\"256\"/><Column id=\"LOADMIDDLESEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"LOADMIDDLESEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOADMIDDLESEGMENTCLASSNAME_COPY\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSMALLSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSMALLSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSMALLSEGMENTCLASSNAME_COPY\" type=\"STRING\" size=\"256\"/><Column id=\"OUTSOUCINGRATIO\" type=\"STRING\" size=\"256\"/><Column id=\"TARGETPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"TARGETSEGMENTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEIDd\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"X_T_BTN\" type=\"STRING\" size=\"256\"/><Column id=\"X_M_BTN\" type=\"STRING\" size=\"256\"/><Column id=\"X_S_BTN\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_segmentRelMain", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOADTOPSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"LOADTOPSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOADMIDDLESEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"LOADMIDDLESEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSMALLSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSMALLSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"X_T_BTN\" type=\"STRING\" size=\"256\"/><Column id=\"X_M_BTN\" type=\"STRING\" size=\"256\"/><Column id=\"X_S_BTN\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_topMain", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOADSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSEGMENTCLASSNAME_KO_KR\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSEGMENTCLASSNAME_EN_US\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSEGMENTCLASSNAME_ZH_CN\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSEGMENTCLASSNAME_VI_VN\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSEGMENTCLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOADSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_personMain", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"OWNER\" type=\"STRING\" size=\"256\"/><Column id=\"OWNERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOADMNG\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"WIP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"X_BTN\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATELOAD\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFCLASSGROUPNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchGrp", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOADTOPSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOADMIDDLESEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOADSMALLSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"P_VALIDSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"LOADSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSEGMENTCLASSNAME_KO_KR\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSEGMENTCLASSNAME_EN_US\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSEGMENTCLASSNAME_ZH_CN\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSEGMENTCLASSNAME_VI_VN\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSEGMENTCLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOADSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_smallMain", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOADSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSEGMENTCLASSNAME_KO_KR\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSEGMENTCLASSNAME_EN_US\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSEGMENTCLASSNAME_ZH_CN\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSEGMENTCLASSNAME_VI_VN\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSEGMENTCLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOADSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("ds_searchPerson", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_NOINPUT\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_ISLOADMNG\" type=\"STRING\" size=\"256\"/><Column id=\"P_WIPYN\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODGROUP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchRel", this);
            obj._setContents("<ColumnInfo><Column id=\"P_PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_NOINPUT\" type=\"STRING\" size=\"256\"/><Column id=\"P_VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_NOINPUT\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_ISLOADMNG\" type=\"STRING\" size=\"256\"/><Column id=\"P_PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_segmentGroup", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOADSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSEGMENTCLASSTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_topMainExcel", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOADSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSEGMENTCLASSNAME_KO_KR\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSEGMENTCLASSNAME_EN_US\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSEGMENTCLASSNAME_ZH_CN\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSEGMENTCLASSNAME_VI_VN\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSEGMENTCLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOADSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_midMainExcel", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOADSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSEGMENTCLASSNAME_KO_KR\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSEGMENTCLASSNAME_EN_US\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSEGMENTCLASSNAME_ZH_CN\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSEGMENTCLASSNAME_VI_VN\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSEGMENTCLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOADSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_smallMainExcel", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOADSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSEGMENTCLASSNAME_KO_KR\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSEGMENTCLASSNAME_EN_US\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSEGMENTCLASSNAME_ZH_CN\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSEGMENTCLASSNAME_VI_VN\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSEGMENTCLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOADSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prodTypeGridComboList", this);
            obj._setContents("<ColumnInfo><Column id=\"CODEID\" type=\"STRING\" size=\"256\"/><Column id=\"CODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAYSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"CODECLASSID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabpage_infoSearch",this.tab_search);
            obj.set_text("부하량 기준정보");
            this.tab_search.addChild(obj.name, obj);

            obj = new Button("btn_searchClear","171","230","102","36",null,null,null,null,null,null,this.tab_search.tabpage_infoSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.tabpage_infoSearch.addChild(obj.name, obj);

            obj = new Button("btn_search","15","230","146","36",null,null,null,null,null,null,this.tab_search.tabpage_infoSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.tabpage_infoSearch.addChild(obj.name, obj);

            obj = new Static("sta_site","0","10","103","20",null,null,null,null,null,null,this.tab_search.tabpage_infoSearch.form);
            obj.set_taborder("2");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("STOPSITE");
            this.tab_search.tabpage_infoSearch.addChild(obj.name, obj);

            obj = new Combo("cmb_site","108","10","165","20",null,null,null,null,null,null,this.tab_search.tabpage_infoSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("PLANTID");
            obj.set_datacolumn("PLANTNAME");
            obj.set_innerdataset("ds_plant");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.tabpage_infoSearch.addChild(obj.name, obj);

            obj = new Static("sta_standard","0","35","103","20",null,null,null,null,null,null,this.tab_search.tabpage_infoSearch.form);
            obj.set_taborder("4");
            obj.set_text("표준공정ID");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("STANDARDOPERATION");
            this.tab_search.tabpage_infoSearch.addChild(obj.name, obj);

            obj = new Static("sta_prodType","0","60","103","20",null,null,null,null,null,null,this.tab_search.tabpage_infoSearch.form);
            obj.set_taborder("5");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("7EB39F8C213747B58EF982C5A61CA6A0");
            this.tab_search.tabpage_infoSearch.addChild(obj.name, obj);

            obj = new Static("sta_prdoDefId","0","85","103","20",null,null,null,null,null,null,this.tab_search.tabpage_infoSearch.form);
            obj.set_taborder("6");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEM");
            this.tab_search.tabpage_infoSearch.addChild(obj.name, obj);

            obj = new Static("sta_prodDivision","0","110","103","20",null,null,null,null,null,null,this.tab_search.tabpage_infoSearch.form);
            obj.set_taborder("7");
            obj.set_text("제품구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("E6CFFD81784B43AA8DECDCB5BCC7AD8E");
            this.tab_search.tabpage_infoSearch.addChild(obj.name, obj);

            obj = new Static("sta_noInput","0","135","103","20",null,null,null,null,null,null,this.tab_search.tabpage_infoSearch.form);
            obj.set_taborder("8");
            obj.set_text("미입력");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("NOINPUT");
            this.tab_search.tabpage_infoSearch.addChild(obj.name, obj);

            obj = new Static("sta_valid","0","185","103","20",null,null,null,null,null,null,this.tab_search.tabpage_infoSearch.form);
            obj.set_taborder("9");
            obj.set_text("유효상태");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("973968B5BBDD4C4488E0BCB3E760DA76");
            this.tab_search.tabpage_infoSearch.addChild(obj.name, obj);

            obj = new Edit("edt_standard","108","35",null,"20","37",null,null,null,null,null,this.tab_search.tabpage_infoSearch.form);
            obj.set_taborder("10");
            this.tab_search.tabpage_infoSearch.addChild(obj.name, obj);

            obj = new Button("btn_standard",null,"35","22","20","15",null,null,null,null,null,this.tab_search.tabpage_infoSearch.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tabpage_infoSearch.addChild(obj.name, obj);

            obj = new Combo("cmb_prodType","108","60","165","20",null,null,null,null,null,null,this.tab_search.tabpage_infoSearch.form);
            obj.set_taborder("12");
            obj.set_codecolumn("CODEID");
            obj.set_datacolumn("CODENAME");
            obj.set_innerdataset("ds_prodTypeList");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.tabpage_infoSearch.addChild(obj.name, obj);

            obj = new Edit("edt_prdoDefId","108","85",null,"20","37",null,null,null,null,null,this.tab_search.tabpage_infoSearch.form);
            obj.set_taborder("13");
            this.tab_search.tabpage_infoSearch.addChild(obj.name, obj);

            obj = new Button("btn_prdoDefId",null,"85","22","20","15",null,null,null,null,null,this.tab_search.tabpage_infoSearch.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tabpage_infoSearch.addChild(obj.name, obj);

            obj = new Combo("cmb_prodDivision","108","110","165","20",null,null,null,null,null,null,this.tab_search.tabpage_infoSearch.form);
            obj.set_taborder("15");
            obj.set_innerdataset("ds_prodDivisioList");
            obj.set_codecolumn("CODEID");
            obj.set_datacolumn("CODENAME");
            obj.set_text("");
            this.tab_search.tabpage_infoSearch.addChild(obj.name, obj);

            obj = new Combo("cmb_noInput","108","135","165","20",null,null,null,null,null,null,this.tab_search.tabpage_infoSearch.form);
            obj.set_taborder("16");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y ");
            this.tab_search.tabpage_infoSearch.addChild(obj.name, obj);

            obj = new Combo("cmb_valid","108","185","165","20",null,null,null,null,null,null,this.tab_search.tabpage_infoSearch.form);
            obj.set_taborder("17");
            obj.set_codecolumn("C,ValidState,ALL,Y,Y");
            this.tab_search.tabpage_infoSearch.addChild(obj.name, obj);

            obj = new Static("sta_userId","0","160","103","20",null,null,null,null,null,null,this.tab_search.tabpage_infoSearch.form);
            obj.set_taborder("18");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("OWNER");
            this.tab_search.tabpage_infoSearch.addChild(obj.name, obj);

            obj = new Edit("edt_userId","108","160",null,"20","37",null,null,null,null,null,this.tab_search.tabpage_infoSearch.form);
            obj.set_taborder("19");
            this.tab_search.tabpage_infoSearch.addChild(obj.name, obj);

            obj = new Button("btn_userId",null,"160","22","20","15",null,null,null,null,null,this.tab_search.tabpage_infoSearch.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tabpage_infoSearch.addChild(obj.name, obj);

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

            obj = new Static("sta_noInput","0","35","103","20",null,null,null,null,null,null,this.tab_search.tabpage_mapSearch.form);
            obj.set_taborder("4");
            obj.set_text("미입력");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("NOINPUT");
            this.tab_search.tabpage_mapSearch.addChild(obj.name, obj);

            obj = new Static("sta_valid","0","60","103","20",null,null,null,null,null,null,this.tab_search.tabpage_mapSearch.form);
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

            obj = new Combo("cmb_noInput","108","35","165","20",null,null,null,null,null,null,this.tab_search.tabpage_mapSearch.form);
            obj.set_taborder("8");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            obj.set_innerdataset("");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.tabpage_mapSearch.addChild(obj.name, obj);

            obj = new Combo("cmb_valid","108","60","165","20",null,null,null,null,null,null,this.tab_search.tabpage_mapSearch.form);
            obj.set_taborder("9");
            obj.set_codecolumn("C,ValidState,ALL,Y,Y");
            this.tab_search.tabpage_mapSearch.addChild(obj.name, obj);

            obj = new Button("btn_search","15","100","146","36",null,null,null,null,null,null,this.tab_search.tabpage_mapSearch.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.tabpage_mapSearch.addChild(obj.name, obj);

            obj = new Button("btn_searchClear","171","100","102","36",null,null,null,null,null,null,this.tab_search.tabpage_mapSearch.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
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

            obj = new Tabpage("tabpage_smallSearch",this.tab_search);
            obj.set_text("소공정 그룹");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("sta_site","0","10","103","20",null,null,null,null,null,null,this.tab_search.tabpage_smallSearch.form);
            obj.set_taborder("0");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("STOPSITE");
            this.tab_search.tabpage_smallSearch.addChild(obj.name, obj);

            obj = new Edit("edt_smallProc","108","35",null,"20","37",null,null,null,null,null,this.tab_search.tabpage_smallSearch.form);
            obj.set_taborder("1");
            this.tab_search.tabpage_smallSearch.addChild(obj.name, obj);

            obj = new Button("btn_smallProc",null,"35","22","20","15",null,null,null,null,null,this.tab_search.tabpage_smallSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tabpage_smallSearch.addChild(obj.name, obj);

            obj = new Combo("cmb_site","108","10","165","20",null,null,null,null,null,null,this.tab_search.tabpage_smallSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("PLANTID");
            obj.set_datacolumn("PLANTNAME");
            obj.set_innerdataset("ds_plant");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.tabpage_smallSearch.addChild(obj.name, obj);

            obj = new Static("sta_smallProc","0","35","103","20",null,null,null,null,null,null,this.tab_search.tabpage_smallSearch.form);
            obj.set_taborder("4");
            obj.set_text("소공정 그룹");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("SMALLSEGMENTGROUP");
            this.tab_search.tabpage_smallSearch.addChild(obj.name, obj);

            obj = new Static("sta_valid","0","60","103","20",null,null,null,null,null,null,this.tab_search.tabpage_smallSearch.form);
            obj.set_taborder("5");
            obj.set_text("유효상태");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("VALIDSTATE");
            this.tab_search.tabpage_smallSearch.addChild(obj.name, obj);

            obj = new Combo("cmb_valid","108","60","165","20",null,null,null,null,null,null,this.tab_search.tabpage_smallSearch.form);
            obj.set_taborder("6");
            obj.set_codecolumn("C,ValidState,ALL,Y,Y");
            this.tab_search.tabpage_smallSearch.addChild(obj.name, obj);

            obj = new Button("btn_search","15","100","146","36",null,null,null,null,null,null,this.tab_search.tabpage_smallSearch.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.tabpage_smallSearch.addChild(obj.name, obj);

            obj = new Button("btn_searchClear","171","100","102","36",null,null,null,null,null,null,this.tab_search.tabpage_smallSearch.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.tabpage_smallSearch.addChild(obj.name, obj);

            obj = new Tabpage("tabpage_personSearch",this.tab_search);
            obj.set_text("담당자");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("sta_site","0","10","103","20",null,null,null,null,null,null,this.tab_search.tabpage_personSearch.form);
            obj.set_taborder("0");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("STOPSITE");
            this.tab_search.tabpage_personSearch.addChild(obj.name, obj);

            obj = new Static("sta_prodType","0","35","103","20",null,null,null,null,null,null,this.tab_search.tabpage_personSearch.form);
            obj.set_taborder("1");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("DC67B95CD188427AAAB84B5346920900");
            this.tab_search.tabpage_personSearch.addChild(obj.name, obj);

            obj = new Static("sta_prdoDefId","0","60","103","20",null,null,null,null,null,null,this.tab_search.tabpage_personSearch.form);
            obj.set_taborder("2");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("1DDB96DA263E4951B88AF933F6A0471A");
            this.tab_search.tabpage_personSearch.addChild(obj.name, obj);

            obj = new Static("sta_prodDivision","0","85","103","20",null,null,null,null,null,null,this.tab_search.tabpage_personSearch.form);
            obj.set_taborder("3");
            obj.set_text("제품구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("3384BF67439F441199ED9A9D9E7987FB");
            this.tab_search.tabpage_personSearch.addChild(obj.name, obj);

            obj = new Static("sta_noInput","0","110","103","20",null,null,null,null,null,null,this.tab_search.tabpage_personSearch.form);
            obj.set_taborder("4");
            obj.set_text("미입력");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("NOINPUT");
            this.tab_search.tabpage_personSearch.addChild(obj.name, obj);

            obj = new Static("sta_userId","0","135","103","20",null,null,null,null,null,null,this.tab_search.tabpage_personSearch.form);
            obj.set_taborder("5");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("OWNER");
            this.tab_search.tabpage_personSearch.addChild(obj.name, obj);

            obj = new Static("sta_IsLoadMng","0","160","103","20",null,null,null,null,null,null,this.tab_search.tabpage_personSearch.form);
            obj.set_taborder("6");
            obj.set_text("품목사용여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CCB1B9699E184BF78F657B5CE08AD7E7");
            this.tab_search.tabpage_personSearch.addChild(obj.name, obj);

            obj = new Combo("cmb_site","108","10","165","20",null,null,null,null,null,null,this.tab_search.tabpage_personSearch.form);
            obj.set_taborder("7");
            obj.set_codecolumn("PLANTID");
            obj.set_datacolumn("PLANTNAME");
            obj.set_innerdataset("ds_plant");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.tabpage_personSearch.addChild(obj.name, obj);

            obj = new Edit("edt_prdoDefId","108","60",null,"20","37",null,null,null,null,null,this.tab_search.tabpage_personSearch.form);
            obj.set_taborder("8");
            this.tab_search.tabpage_personSearch.addChild(obj.name, obj);

            obj = new Button("btn_prdoDefId",null,"60","22","20","15",null,null,null,null,null,this.tab_search.tabpage_personSearch.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tabpage_personSearch.addChild(obj.name, obj);

            obj = new Button("btn_search","15","265","146","36",null,null,null,null,null,null,this.tab_search.tabpage_personSearch.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.tabpage_personSearch.addChild(obj.name, obj);

            obj = new Button("btn_searchClear","171","265","102","36",null,null,null,null,null,null,this.tab_search.tabpage_personSearch.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.tabpage_personSearch.addChild(obj.name, obj);

            obj = new Combo("cmb_prodType","108","35","165","20",null,null,null,null,null,null,this.tab_search.tabpage_personSearch.form);
            obj.set_taborder("12");
            obj.set_codecolumn("CODEID");
            obj.set_datacolumn("CODENAME");
            obj.set_innerdataset("ds_prodTypeList");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.tabpage_personSearch.addChild(obj.name, obj);

            obj = new Combo("cmb_prodDivision","108","85","165","20",null,null,null,null,null,null,this.tab_search.tabpage_personSearch.form);
            obj.set_taborder("13");
            obj.set_codecolumn("CODEID");
            obj.set_datacolumn("CODENAME");
            obj.set_innerdataset("ds_prodDivisioList");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.tabpage_personSearch.addChild(obj.name, obj);

            obj = new Combo("cmb_noInput","108","110","165","20",null,null,null,null,null,null,this.tab_search.tabpage_personSearch.form);
            obj.set_taborder("14");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            obj.set_innerdataset("");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.tabpage_personSearch.addChild(obj.name, obj);

            obj = new Combo("cmb_IsLoadMng","108","160","165","20",null,null,null,null,null,null,this.tab_search.tabpage_personSearch.form);
            obj.set_taborder("15");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            obj.set_innerdataset("");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.tabpage_personSearch.addChild(obj.name, obj);

            obj = new Edit("edt_userId","108","135",null,"20","37",null,null,null,null,null,this.tab_search.tabpage_personSearch.form);
            obj.set_taborder("16");
            this.tab_search.tabpage_personSearch.addChild(obj.name, obj);

            obj = new Button("btn_userId",null,"135","22","20","15",null,null,null,null,null,this.tab_search.tabpage_personSearch.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tabpage_personSearch.addChild(obj.name, obj);

            obj = new Static("sta_wipYn","0","185","103","20",null,null,null,null,null,null,this.tab_search.tabpage_personSearch.form);
            obj.set_taborder("18");
            obj.set_text("재공여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("WIP_YN");
            this.tab_search.tabpage_personSearch.addChild(obj.name, obj);

            obj = new Combo("cmb_wipYn","108","185","165","20",null,null,null,null,null,null,this.tab_search.tabpage_personSearch.form);
            obj.set_taborder("19");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            obj.set_innerdataset("");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.tabpage_personSearch.addChild(obj.name, obj);

            obj = new Static("sta_valid","0","210","103","20",null,null,null,null,null,null,this.tab_search.tabpage_personSearch.form);
            obj.set_taborder("20");
            obj.set_text("유효상태");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("VALIDSTATE");
            this.tab_search.tabpage_personSearch.addChild(obj.name, obj);

            obj = new Combo("cmb_valid","108","210","165","20",null,null,null,null,null,null,this.tab_search.tabpage_personSearch.form);
            obj.set_taborder("21");
            obj.set_codecolumn("C,ValidState,ALL,Y,Y");
            this.tab_search.tabpage_personSearch.addChild(obj.name, obj);

            obj = new Static("sta_prodGrp","0","235","103","20",null,null,null,null,null,null,this.tab_search.tabpage_personSearch.form);
            obj.set_taborder("22");
            obj.set_text("품목그룹");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMGROUP");
            this.tab_search.tabpage_personSearch.addChild(obj.name, obj);

            obj = new Edit("edt_prodGrp","108","235",null,"20","37",null,null,null,null,null,this.tab_search.tabpage_personSearch.form);
            obj.set_taborder("23");
            this.tab_search.tabpage_personSearch.addChild(obj.name, obj);

            obj = new Button("btn_prodGrp",null,"235","22","20","15",null,null,null,null,null,this.tab_search.tabpage_personSearch.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tabpage_personSearch.addChild(obj.name, obj);

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

            obj = new Tabpage("tabpage_info",this.div_work.form.tab_work);
            obj.set_text("부하량 기준정보");
            obj.set_tooltiptext("LOADSTANDARD");
            this.div_work.form.tab_work.addChild(obj.name, obj);

            obj = new Static("sta_subtitle","0","0",null,"34","778",null,null,null,null,null,this.div_work.form.tab_work.tabpage_info.form);
            obj.set_taborder("0");
            obj.set_text("부하량 기준정보 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("LOADSTANDARDLIST");
            this.div_work.form.tab_work.tabpage_info.addChild(obj.name, obj);

            obj = new Grid("grd_infoMain","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_work.tabpage_info.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_ProdSegmentMain");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"30\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"50\" band=\"left\"/><Column size=\"280\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"150\" band=\"left\"/><Column size=\"93\" band=\"left\"/><Column size=\"80\"/><Column size=\"180\"/><Column size=\"24\"/><Column size=\"180\"/><Column size=\"24\"/><Column size=\"180\"/><Column size=\"24\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"품목코드\" tooltiptext=\"ITEMID\"/><Cell col=\"3\" text=\"Rev.\" tooltiptext=\"ITEMVERSION\"/><Cell col=\"4\" text=\"품목명\" tooltiptext=\"ITEMNAME\"/><Cell col=\"5\" text=\"공정수순\" tooltiptext=\"USERSEQUENCE\"/><Cell col=\"6\" text=\"공정 ID\" tooltiptext=\"PROCID\"/><Cell col=\"7\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"8\" text=\"Site ID\" tooltiptext=\"PLANTID\"/><Cell col=\"9\" text=\"담당자\" tooltiptext=\"OWNER\"/><Cell col=\"10\" colspan=\"2\" text=\"대공정 그룹명\" tooltiptext=\"LOADTOPSEGMENTCLASSNAME\"/><Cell col=\"12\" colspan=\"2\" text=\"중공정 그룹명\" tooltiptext=\"LOADMIDDLESEGMENTCLASSNAME\"/><Cell col=\"14\" colspan=\"2\" text=\"소공정 그룹명\" tooltiptext=\"LOADSMALLSEGMENTCLASSNAME\"/><Cell col=\"16\" text=\"외주비율(%)\" tooltiptext=\"OUTSOUCINGRATIO\"/><Cell col=\"17\" text=\"일목표수량(PNL)\" tooltiptext=\"TARGETPANELQTY\"/><Cell col=\"18\" text=\"일목표공정(개수)\" tooltiptext=\"TARGETSEGMENTQTY\"/><Cell col=\"19\" text=\"설명\" tooltiptext=\"DESCRIPTION\"/><Cell col=\"20\" text=\"유효상태\" cssclass=\"cell_point\" tooltiptext=\"VALIDSTATE\"/><Cell col=\"21\" text=\"수정자\" tooltiptext=\"MODIFIER\"/><Cell col=\"22\" text=\"수정일\" tooltiptext=\"MODIFIEDTIME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"5\" text=\"bind:USERSEQUENCE\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"6\" text=\"bind:PROCESSSEGMENTID\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"7\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"8\" text=\"bind:PROCESSPATHPLANTID\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"9\" text=\"bind:OWNER\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"10\" text=\"bind:LOADTOPSEGMENTCLASSNAME\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\" border=\"1px solid #f1f1f1,0px solid #f1f1f1,1px solid #f1f1f1,1px solid #f1f1f1\"/><Cell col=\"11\" expandimage=\"url(&apos;theme://images/img_WF_inputDel_P.png&apos;)\" expandshow=\"show\" text=\"bind:X_T_BTN\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\" border=\"1px solid #f1f1f1,1px solid #f1f1f1,1px solid #f1f1f1,0px solid #f1f1f1\"/><Cell col=\"12\" text=\"bind:LOADMIDDLESEGMENTCLASSNAME\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\" border=\"1px solid #f1f1f1,0px solid #f1f1f1,1px solid #f1f1f1,1px solid #f1f1f1\"/><Cell col=\"13\" expandimage=\"url(&apos;theme://images/img_WF_inputDel_P.png&apos;)\" expandshow=\"show\" text=\"bind:X_M_BTN\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\" border=\"1px solid #f1f1f1,1px solid #f1f1f1,1px solid #f1f1f1,0px solid #f1f1f1\"/><Cell col=\"14\" text=\"bind:LOADSMALLSEGMENTCLASSNAME\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\" border=\"1px solid #f1f1f1,0px solid #f1f1f1,1px solid #f1f1f1,1px solid #f1f1f1\"/><Cell col=\"15\" expandimage=\"url(&apos;theme://images/img_WF_inputDel_P.png&apos;)\" expandshow=\"show\" text=\"bind:X_S_BTN\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\" border=\"1px solid #f1f1f1,1px solid #f1f1f1,1px solid #f1f1f1,0px solid #f1f1f1\"/><Cell col=\"16\" text=\"bind:OUTSOUCINGRATIO\" textAlign=\"right\" maskeditformat=\"!#,##9\" displaytype=\"maskeditcontrol\" edittype=\"mask\"/><Cell col=\"17\" text=\"bind:TARGETPANELQTY\" textAlign=\"right\" maskeditformat=\"!#,##9\" displaytype=\"mask\" edittype=\"mask\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"18\" text=\"bind:TARGETSEGMENTQTY\" textAlign=\"right\" maskeditformat=\"!#,##9\" displaytype=\"mask\" edittype=\"mask\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"19\" text=\"bind:DESCRIPTION\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"20\" text=\"bind:VALIDSTATE\" combocodecol=\"C,ValidState,,Y,Y\" displaytype=\"combotext\" edittype=\"combo\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"21\" text=\"bind:MODIFIER\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"22\" text=\"bind:MODIFIEDTIME\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.tabpage_info.addChild(obj.name, obj);

            obj = new Static("sta_pnlQty",null,"7","110","20","31%",null,null,null,null,null,this.div_work.form.tab_work.tabpage_info.form);
            obj.set_taborder("2");
            obj.set_text("일목표수량(PNL)");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("TARGETPANELQTY");
            this.div_work.form.tab_work.tabpage_info.addChild(obj.name, obj);

            obj = new Button("btn_allApply",null,"7","90","21","10",null,null,null,null,null,this.div_work.form.tab_work.tabpage_info.form);
            obj.set_taborder("3");
            obj.set_text("일괄적용");
            obj.set_cssclass("btn_DR_GridSave");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("ALLAPPLY");
            this.div_work.form.tab_work.tabpage_info.addChild(obj.name, obj);

            obj = new Static("sta_targetSegmentQty",null,"7","120","20","13%",null,null,null,null,null,this.div_work.form.tab_work.tabpage_info.form);
            obj.set_taborder("4");
            obj.set_text("일목표공정(개수)");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("TARGETSEGMENTQTY");
            this.div_work.form.tab_work.tabpage_info.addChild(obj.name, obj);

            obj = new MaskEdit("msk_pnlQty","sta_pnlQty:5","7",null,"20","sta_targetSegmentQty:5",null,null,null,null,null,this.div_work.form.tab_work.tabpage_info.form);
            obj.set_taborder("5");
            obj.set_trimtype("both");
            obj.set_limitbymask("decimal");
            obj.set_format("!#,##9");
            obj.set_displaynulltext("0");
            this.div_work.form.tab_work.tabpage_info.addChild(obj.name, obj);

            obj = new MaskEdit("msk_targetSegmentQty","sta_targetSegmentQty:5","7",null,"20","btn_allApply:5",null,null,null,null,null,this.div_work.form.tab_work.tabpage_info.form);
            obj.set_taborder("6");
            obj.set_trimtype("both");
            obj.set_limitbymask("decimal");
            obj.set_format("!#,##9");
            obj.set_displaynulltext("0");
            this.div_work.form.tab_work.tabpage_info.addChild(obj.name, obj);

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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"100\"/><Column size=\"250\"/><Column size=\"180\"/><Column size=\"24\"/><Column size=\"180\"/><Column size=\"24\"/><Column size=\"180\"/><Column size=\"24\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"공정ID\" tooltiptext=\"PROCID\"/><Cell col=\"3\" text=\"공정명\" tooltiptext=\"STOPPROCESSSEGMENTNAME\"/><Cell col=\"4\" colspan=\"2\" text=\"대공정 그룹명\" tooltiptext=\"LOADTOPSEGMENTCLASSNAME\"/><Cell col=\"6\" colspan=\"2\" text=\"중공정 그룹명\" tooltiptext=\"LOADMIDDLESEGMENTCLASSNAME\"/><Cell col=\"8\" colspan=\"2\" text=\"소공정 그룹명\" tooltiptext=\"LOADSMALLSEGMENTCLASSNAME\"/><Cell col=\"10\" text=\"설명\" tooltiptext=\"SPCRULESDISCRIPTION\"/><Cell col=\"11\" text=\"유효상태\" cssclass=\"cell_point\" tooltiptext=\"VALIDSTATE\"/><Cell col=\"12\" text=\"수정자\" tooltiptext=\"MODIFIER\"/><Cell col=\"13\" text=\"수정일\" tooltiptext=\"MODIFIEDTIME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"2\" text=\"bind:PROCESSSEGMENTID\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"4\" text=\"bind:LOADTOPSEGMENTCLASSNAME\" textAlign=\"left\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\" border=\"1px solid #f1f1f1,0px solid #f1f1f1,1px solid #f1f1f1,1px solid #f1f1f1\" expandsize=\"24\"/><Cell col=\"5\" expandimage=\"url(&apos;theme://images/img_WF_inputDel_P.png&apos;)\" expandshow=\"show\" text=\"bind:X_T_BTN\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\" border=\"1px solid #f1f1f1,1px solid #f1f1f1,1px solid #f1f1f1,0px solid #f1f1f1\" displaytype=\"none\" expandsize=\"24\"/><Cell col=\"6\" text=\"bind:LOADMIDDLESEGMENTCLASSNAME\" textAlign=\"left\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\" border=\"1px solid #f1f1f1,0px solid #f1f1f1,1px solid #f1f1f1,1px solid #f1f1f1\"/><Cell col=\"7\" expandimage=\"url(&apos;theme://images/img_WF_inputDel_P.png&apos;)\" expandshow=\"show\" text=\"bind:X_M_BTN\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\" border=\"1px solid #f1f1f1,1px solid #f1f1f1,1px solid #f1f1f1,0px solid #f1f1f1\" displaytype=\"none\"/><Cell col=\"8\" text=\"bind:LOADSMALLSEGMENTCLASSNAME\" textAlign=\"left\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\" border=\"1px solid #f1f1f1,0px solid #f1f1f1,1px solid #f1f1f1,1px solid #f1f1f1\"/><Cell col=\"9\" expandimage=\"url(&apos;theme://images/img_WF_inputDel_P.png&apos;)\" expandshow=\"show\" text=\"bind:X_S_BTN\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\" border=\"1px solid #f1f1f1,1px solid #f1f1f1,1px solid #f1f1f1,0px solid #f1f1f1\" displaytype=\"none\"/><Cell col=\"10\" text=\"bind:DESCRIPTION\" displaytype=\"text\" edittype=\"normal\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"11\" text=\"bind:VALIDSTATE\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,ValidState,,Y,Y\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"12\" text=\"bind:MODIFIER\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"13\" text=\"bind:MODIFIEDTIME\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/></Band></Format></Formats>");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"120\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"공정부하 그룹ID\" cssclass=\"cell_point\" tooltiptext=\"LOADSEGMENTCLASSID\"/><Cell col=\"3\" text=\"공정부하 그룹명(K)\" tooltiptext=\"LOADSEGMENTCLASSNAME_K\"/><Cell col=\"4\" text=\"공정부하 그룹명(E)\" tooltiptext=\"LOADSEGMENTCLASSNAME_E\"/><Cell col=\"5\" text=\"공정부하 그룹명(C)\" tooltiptext=\"LOADSEGMENTCLASSNAME_C\"/><Cell col=\"6\" text=\"공정부하 그룹명(V)\" tooltiptext=\"LOADSEGMENTCLASSNAME_V\"/><Cell col=\"7\" text=\"공정부하 드룹타입\" tooltiptext=\"PROCLOADDROPTYPE\"/><Cell col=\"8\" text=\"설명\" tooltiptext=\"DESCRIPTION\"/><Cell col=\"9\" text=\"유효상태\" cssclass=\"cell_point\" tooltiptext=\"VALIDSTATE\"/><Cell col=\"10\" text=\"수정자\" tooltiptext=\"MODIFIER\"/><Cell col=\"11\" text=\"수정일\" tooltiptext=\"MODIFIEDTIME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"2\" text=\"bind:LOADSEGMENTCLASSID\" displaytype=\"expr:dataset.getRowType(currow)==&quot;2&quot;?&quot;text&quot;:&quot;normal&quot;\" edittype=\"expr:dataset.getRowType(currow)==&quot;2&quot;?&quot;normal&quot;:&quot;none&quot;\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\" editinputmode=\"upper\" editinputtype=\"english,number\" editinputfilter=\"none,dot,comma,symbol,space,sign\"/><Cell col=\"3\" text=\"bind:LOADSEGMENTCLASSNAME_KO_KR\" displaytype=\"text\" edittype=\"normal\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"4\" text=\"bind:LOADSEGMENTCLASSNAME_EN_US\" displaytype=\"text\" edittype=\"normal\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"5\" text=\"bind:LOADSEGMENTCLASSNAME_ZH_CN\" displaytype=\"text\" edittype=\"normal\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"6\" text=\"bind:LOADSEGMENTCLASSNAME_VI_VN\" displaytype=\"text\" edittype=\"normal\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"7\" text=\"bind:LOADSEGMENTCLASSTYPE\" displaytype=\"combotext\" textAlign=\"left\" edittype=\"none\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\" combocodecol=\"C,LoadSegmentClassType,,Y,N\"/><Cell col=\"8\" text=\"bind:DESCRIPTION\" displaytype=\"text\" edittype=\"normal\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"9\" text=\"bind:VALIDSTATE\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,ValidState,,Y,Y\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"10\" text=\"bind:MODIFIER\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"11\" text=\"bind:MODIFIEDTIME\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/></Band></Format></Formats>");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"120\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"공정부하 그룹ID\" cssclass=\"cell_point\" tooltiptext=\"LOADSEGMENTCLASSID\"/><Cell col=\"3\" text=\"공정부하 그룹명(K)\" tooltiptext=\"LOADSEGMENTCLASSNAME_K\"/><Cell col=\"4\" text=\"공정부하 그룹명(E)\" tooltiptext=\"LOADSEGMENTCLASSNAME_E\"/><Cell col=\"5\" text=\"공정부하 그룹명(C)\" tooltiptext=\"LOADSEGMENTCLASSNAME_C\"/><Cell col=\"6\" text=\"공정부하 그룹명(V)\" tooltiptext=\"LOADSEGMENTCLASSNAME_V\"/><Cell col=\"7\" text=\"공정부하 그룹타입\" tooltiptext=\"LOADSEGMENTCLASSTYPE\"/><Cell col=\"8\" text=\"설명\" tooltiptext=\"SPCRULESDISCRIPTION\"/><Cell col=\"9\" text=\"유효상태\" cssclass=\"cell_point\" tooltiptext=\"VALIDSTATE\"/><Cell col=\"10\" text=\"수정자\" tooltiptext=\"MODIFIER\"/><Cell col=\"11\" text=\"수정일\" tooltiptext=\"MODIFIEDTIME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"2\" text=\"bind:LOADSEGMENTCLASSID\" displaytype=\"expr:dataset.getRowType(currow)==&quot;2&quot;?&quot;text&quot;:&quot;normal&quot;\" edittype=\"expr:dataset.getRowType(currow)==&quot;2&quot;?&quot;normal&quot;:&quot;none&quot;\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\" editinputmode=\"upper\" editinputtype=\"english,number\" editinputfilter=\"none,comma,dot,sign,space,symbol\"/><Cell col=\"3\" text=\"bind:LOADSEGMENTCLASSNAME_KO_KR\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"4\" text=\"bind:LOADSEGMENTCLASSNAME_EN_US\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"5\" text=\"bind:LOADSEGMENTCLASSNAME_ZH_CN\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"6\" text=\"bind:LOADSEGMENTCLASSNAME_VI_VN\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"7\" text=\"bind:LOADSEGMENTCLASSTYPE\" displaytype=\"combotext\" combocodecol=\"C,LoadSegmentClassType,,Y,N\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"8\" text=\"bind:DESCRIPTION\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"9\" text=\"bind:VALIDSTATE\" combocodecol=\"C,ValidState,,Y,Y\" displaytype=\"combotext\" edittype=\"combo\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"10\" text=\"bind:MODIFIER\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"11\" text=\"bind:MODIFIEDTIME\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/></Band></Format></Formats>");
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

            obj = new Tabpage("tabpage_Small",this.div_work.form.tab_work);
            obj.set_text("소공정 그룹");
            obj.set_tooltiptext("LOADSMALLSEGMENTCLASSID");
            this.div_work.form.tab_work.addChild(obj.name, obj);

            obj = new Static("sta_subtitle","0","0","121","34",null,null,null,null,null,null,this.div_work.form.tab_work.tabpage_Small.form);
            obj.set_taborder("0");
            obj.set_text("소공정 그룹 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("SMALLLOADSEGMENTGROUPLIST");
            this.div_work.form.tab_work.tabpage_Small.addChild(obj.name, obj);

            obj = new Grid("grd_smallMain","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_work.tabpage_Small.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_smallMain");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"120\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"공정부하 그룹ID\" cssclass=\"cell_point\" tooltiptext=\"LOADSEGMENTCLASSID\"/><Cell col=\"3\" text=\"공정부하 그룹명(K)\" tooltiptext=\"LOADSEGMENTCLASSNAME_K\"/><Cell col=\"4\" text=\"공정부하 그룹명(E)\" tooltiptext=\"LOADSEGMENTCLASSNAME_E\"/><Cell col=\"5\" text=\"공정부하 그룹명(C)\" tooltiptext=\"LOADSEGMENTCLASSNAME_C\"/><Cell col=\"6\" text=\"공정부하 그룹명(V)\" tooltiptext=\"LOADSEGMENTCLASSNAME_V\"/><Cell col=\"7\" text=\"공정부하 그룹타입\" tooltiptext=\"LOADSEGMENTCLASSTYPE\"/><Cell col=\"8\" text=\"설명\" tooltiptext=\"SPCRULESDISCRIPTION\"/><Cell col=\"9\" text=\"유효상태\" cssclass=\"cell_point\" tooltiptext=\"VALIDSTATE\"/><Cell col=\"10\" text=\"수정자\" tooltiptext=\"MODIFIER\"/><Cell col=\"11\" text=\"수정일\" tooltiptext=\"MODIFIEDTIME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"2\" text=\"bind:LOADSEGMENTCLASSID\" displaytype=\"expr:dataset.getRowType(currow)==&quot;2&quot;?&quot;text&quot;:&quot;normal&quot;\" edittype=\"expr:dataset.getRowType(currow)==&quot;2&quot;?&quot;normal&quot;:&quot;none&quot;\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\" editinputmode=\"upper\" editinputtype=\"english,number\" editinputfilter=\"none,comma,dot,sign,space,symbol\"/><Cell col=\"3\" text=\"bind:LOADSEGMENTCLASSNAME_KO_KR\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"4\" text=\"bind:LOADSEGMENTCLASSNAME_EN_US\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"5\" text=\"bind:LOADSEGMENTCLASSNAME_ZH_CN\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"6\" text=\"bind:LOADSEGMENTCLASSNAME_VI_VN\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"7\" text=\"bind:LOADSEGMENTCLASSTYPE\" combocodecol=\"C,LoadSegmentClassType,,Y,N\" displaytype=\"combotext\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"8\" text=\"bind:DESCRIPTION\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"9\" text=\"bind:VALIDSTATE\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,ValidState,,Y,Y\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"10\" text=\"bind:MODIFIER\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"11\" text=\"bind:MODIFIEDTIME\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.tabpage_Small.addChild(obj.name, obj);

            obj = new Button("btn_add_ds_smallMain",null,"6","26","24","116",null,null,null,null,null,this.div_work.form.tab_work.tabpage_Small.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.form.tab_work.tabpage_Small.addChild(obj.name, obj);

            obj = new Button("btn_copyRowSma",null,"6","29","24","87",null,null,null,null,null,this.div_work.form.tab_work.tabpage_Small.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdCopy");
            obj.set_tooltiptext("GridCopyRow");
            this.div_work.form.tab_work.tabpage_Small.addChild(obj.name, obj);

            obj = new Button("btn_del_ds_smallMain",null,"6","26","24","58",null,null,null,null,null,this.div_work.form.tab_work.tabpage_Small.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.div_work.form.tab_work.tabpage_Small.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_smallMain",null,"6","29","24","29",null,null,null,null,null,this.div_work.form.tab_work.tabpage_Small.form);
            obj.set_initvalueid("x");
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_work.tabpage_Small.addChild(obj.name, obj);

            obj = new Button("btn_xlUpCustom_grd_smallMain",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_work.tabpage_Small.form);
            obj.set_initvalueid("x");
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("GridImport");
            this.div_work.form.tab_work.tabpage_Small.addChild(obj.name, obj);

            obj = new Tabpage("tabpage_Person",this.div_work.form.tab_work);
            obj.set_text("담당자");
            obj.set_tooltiptext("OWNER");
            this.div_work.form.tab_work.addChild(obj.name, obj);

            obj = new Static("sta_subtitle","0","0","74","34",null,null,null,null,null,null,this.div_work.form.tab_work.tabpage_Person.form);
            obj.set_taborder("0");
            obj.set_text("담당자 맵핑");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("OWNERMAPPINGLIST");
            this.div_work.form.tab_work.tabpage_Person.addChild(obj.name, obj);

            obj = new Grid("grd_person","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_work.tabpage_Person.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_personMain");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"120\"/><Column size=\"50\"/><Column size=\"280\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"24\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"품목코드\" tooltiptext=\"ITEMCODE\"/><Cell col=\"3\" text=\"Rev.\" tooltiptext=\"ITEMVERSION\"/><Cell col=\"4\" text=\"품목명\" tooltiptext=\"ITEMNAME\"/><Cell col=\"5\" text=\"생산구분\" tooltiptext=\"PRODUCTIONTYPENAME\"/><Cell col=\"6\" text=\"품목유형구분\" tooltiptext=\"PRODUCTDEFTYPE\"/><Cell col=\"7\" text=\"품목 그룹\" tooltiptext=\"ITEMGROUP\"/><Cell col=\"8\" text=\"담당자\" tooltiptext=\"OWNER\"/><Cell col=\"9\" colspan=\"2\" text=\"담당자명\" tooltiptext=\"OWNERNAME\"/><Cell col=\"11\" text=\"재공여부\" tooltiptext=\"WIPYN\"/><Cell col=\"12\" text=\"품목사용여부\" tooltiptext=\"ISUSEPRODUCT\"/><Cell col=\"13\" tooltiptext=\"VALIDSTATE\" text=\"유효상태\"/><Cell col=\"14\" text=\"수정자\" tooltiptext=\"MODIFIER\"/><Cell col=\"15\" text=\"수정일\" tooltiptext=\"MODIFIEDTIME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"5\" text=\"bind:PRODUCTIONTYPE\" displaytype=\"combotext\" combodataset=\"ds_prodTypeGridComboList\" combocodecol=\"CODEID\" combodatacol=\"CODENAME\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"6\" text=\"bind:PRODUCTDEFTYPE\" textAlign=\"center\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"7\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\" text=\"bind:PRODUCTDEFCLASSGROUPNAME\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"8\" text=\"bind:OWNER\" textAlign=\"left\" expandshow=\"hide\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"9\" text=\"bind:OWNERNAME\" textAlign=\"left\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" displaytype=\"text\" edittype=\"normal\" border=\"1px solid #f1f1f1,0px solid #f1f1f1,1px solid #f1f1f1,1px solid #f1f1f1\" expandsize=\"24\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"10\" expandimage=\"url(&apos;theme://images/img_WF_inputDel_P.png&apos;)\" expandshow=\"show\" text=\"bind:X_BTN\" border=\"1px solid #f1f1f1,1px solid #f1f1f1,1px solid #f1f1f1,0px solid #f1f1f1\" expandsize=\"24\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"11\" textAlign=\"center\" text=\"bind:WIP_YN\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"12\" text=\"bind:ISLOADMNG\" textAlign=\"center\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,YesNo,,Y,Y\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"13\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,ValidState,,Y,Y\" text=\"bind:VALIDSTATELOAD\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"14\" text=\"bind:MODIFIER\" textAlign=\"center\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"15\" text=\"bind:MODIFIEDTIME\" textAlign=\"center\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.tabpage_Person.addChild(obj.name, obj);

            obj = new Button("btn_setUse",null,"7","110","20","5",null,null,null,null,null,this.div_work.form.tab_work.tabpage_Person.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_black");
            obj.set_fittocontents("none");
            obj.set_enable("true");
            obj.set_tooltiptext("SETWIPTOITEM");
            obj.set_text("재공->품목사용");
            this.div_work.form.tab_work.tabpage_Person.addChild(obj.name, obj);

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

            obj = new Button("btn_save00",null,"18","60","21","62",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_text("저장");
            obj.set_cssclass("btn_DR_GridSave");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);
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
        this.addIncludeScript("MFM00200M.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("MFM00200M.xfdl","lib::lib_mtm.xjs");
        this.registerScript("MFM00200M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 공정 부하 기준 정보
         * 파일명 		: MFM00200M.xfdl
         * 작성자 		: 김진현
         * 작성일 		: 2021.04.16
         *
         * 설  명		:  재포장을 등록 합니다.
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.16	김진현   	최초작성
         * 2021.06.30   김진현     부하량 기준정보(담당자 필터 추가, 조회시 전체 조회 체크 해제 추가)
         * 2021.07.29	김진현		표준공정 맵핑_유효상태 빈값 자동  설정_[21.07.29]
         * 2021.08.09	김진현		그리드 품목명 사이즈 조절(250 -> 270)
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

        this.fv_ownerId_info    = "";			// 담당자 id (부하량기준정보 Tab) (21.06.30)

        this.fv_personPos		= 0;			// 담당자Tab Rowpos

        this.fv_segmentRelPos	= 0;			// 표준공정 Tab Rowpos

        this.fv_ProdSegmentPos	= 0;			// 부하량 기준정보 Tab Rowpos

        this.fv_paste 			= false;		// 복사 여부 판단(맵핑)


        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	// 초기화 (공통)
        	this.nfn_formInit(obj);

        	// 검색조건 공통 콤보 설정
        	this.fn_initCombo();

        	// 그리드 팝업창 x 버튼 추가
        	var nOwnerXIdx 		= this.div_work.form.tab_work.tabpage_Person.form.grd_person.getBindCellIndex("body","X_BTN");
        	this.div_work.form.tab_work.tabpage_Person.form.grd_person.setCellProperty("body",nOwnerXIdx,"expandimage","URL('theme://images/img_WF_inputDel_N.png')") ;   // 테마 이미지

        	// x 버튼 이벤트 설정(담당장Tab, 담당자)
        	this.tab_search.tabpage_personSearch.form.btn_edt_userId.setEventHandler("onclick", this.fn_xClickUserId, this );


        	// 그리드 팝업창 x 버튼 추가(표준공정)
        	var nMapXTopIdx 	= this.div_work.form.tab_work.tabpage_map.form.grd_map.getBindCellIndex("body","X_T_BTN");
        	this.div_work.form.tab_work.tabpage_map.form.grd_map.setCellProperty("body",nMapXTopIdx,"expandimage","URL('theme://images/img_WF_inputDel_N.png')") ;   // 테마 이미지
        	var nMapXMidIdx 	= this.div_work.form.tab_work.tabpage_map.form.grd_map.getBindCellIndex("body","X_M_BTN");
        	this.div_work.form.tab_work.tabpage_map.form.grd_map.setCellProperty("body",nMapXMidIdx,"expandimage","URL('theme://images/img_WF_inputDel_N.png')") ;   // 테마 이미지
        	var nMapXSmallIdx 	= this.div_work.form.tab_work.tabpage_map.form.grd_map.getBindCellIndex("body","X_S_BTN");
        	this.div_work.form.tab_work.tabpage_map.form.grd_map.setCellProperty("body",nMapXSmallIdx,"expandimage","URL('theme://images/img_WF_inputDel_N.png')") ;   // 테마 이미지


        	// 그리드 팝업창 x 버튼 추가(부하량 기준정보)
        	var nInfoXTopIdx 	= this.div_work.form.tab_work.tabpage_info.form.grd_infoMain.getBindCellIndex("body","X_T_BTN");
        	this.div_work.form.tab_work.tabpage_info.form.grd_infoMain.setCellProperty("body",nInfoXTopIdx,"expandimage","URL('theme://images/img_WF_inputDel_N.png')") ;   // 테마 이미지
        	var nInfoXMidIdx 	= this.div_work.form.tab_work.tabpage_info.form.grd_infoMain.getBindCellIndex("body","X_M_BTN");
        	this.div_work.form.tab_work.tabpage_info.form.grd_infoMain.setCellProperty("body",nInfoXMidIdx,"expandimage","URL('theme://images/img_WF_inputDel_N.png')") ;   // 테마 이미지
        	var nInfoXSmallIdx 	= this.div_work.form.tab_work.tabpage_info.form.grd_infoMain.getBindCellIndex("body","X_S_BTN");
        	this.div_work.form.tab_work.tabpage_info.form.grd_infoMain.setCellProperty("body",nInfoXSmallIdx,"expandimage","URL('theme://images/img_WF_inputDel_N.png')") ;   // 테마 이미지


        	// x 버튼 이벤트 설정(담당장Tab, 담당자)
        	this.tab_search.tabpage_infoSearch.form.btn_edt_userId.setEventHandler("onclick", this.fn_xClickUserId_info, this );

        	// 복사 기능
        	this.div_work.form.tab_work.tabpage_info.form.grd_infoMain.removeEventHandler("onkeydown", this.nfn_grd_onkeydown , this);
        	this.gfn_setGridCopyPaste(this.div_work.form.tab_work.tabpage_info.form.grd_infoMain);

        	// 틀고정
        	this.nfn_cellFix(this.div_work.form.tab_work.tabpage_info.form.grd_infoMain, 8);


        	// 복사 기능 - 21.04.23 담당자 복사 기능
        	this.div_work.form.tab_work.tabpage_Person.form.grd_person.removeEventHandler("onkeydown", this.nfn_grd_onkeydown , this);
        	this.gfn_setGridCopyPaste(this.div_work.form.tab_work.tabpage_Person.form.grd_person);


        	// 복사 기능 - 21.04.23 맵핑 복사 기능
        	this.div_work.form.tab_work.tabpage_map.form.grd_map.removeEventHandler("onkeydown", this.nfn_grd_onkeydown , this);
        	this.gfn_setGridCopyPaste(this.div_work.form.tab_work.tabpage_map.form.grd_map);
        	// (21.04.23) 기능 추가_[복사 붙여 넣기 시 대/중/소 공정 코드 설정]
        	this.div_work.form.tab_work.tabpage_map.form.grd_map.addEventHandler( "onkeydown"
        							, this.fn_gridKeyDown
        							, this
        							);

        	//체크박스, sort 이벤트 수정(담당자)
        	this.div_work.form.tab_work.tabpage_Person.form.grd_person.removeEventHandler("onheadclick", this.nfn_grd_onheadclick , this);
        	this.div_work.form.tab_work.tabpage_Person.form.grd_person.addEventHandler("onheadclick", this.fn_onheadclick , this);
        	// 부하량 기준정보
        	this.div_work.form.tab_work.tabpage_info.form.grd_infoMain.removeEventHandler("onheadclick", this.nfn_grd_onheadclick , this);
        	this.div_work.form.tab_work.tabpage_info.form.grd_infoMain.addEventHandler("onheadclick", this.fn_onheadclick , this);

        	// 표준공정 리스트
        	this.div_work.form.tab_work.tabpage_map.form.grd_map.removeEventHandler("onheadclick", this.nfn_grd_onheadclick , this);
        	this.div_work.form.tab_work.tabpage_map.form.grd_map.addEventHandler("onheadclick", this.fn_onheadclick , this);


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
        		case 0:	//[조회조건] Site Callback
        			this.fn_mappingSave(this.ds_ProdSegmentMain, nTabIdx, this.div_work.form.tab_work.tabpage_info.form.grd_infoMain);
        			break;
        		case 1: //[조회조건] Period dataset Callback
        			this.fn_mappingSave(this.ds_segmentRelMain, nTabIdx, this.div_work.form.tab_work.tabpage_map.form.grd_map);
        			break;
        		case 2: //대공정 그룹 저장
        			this.fn_procSave(this.ds_topMain, this.div_work.form.tab_work.tabpage_Top.form.grd_topMain,"TOPLOADSEGMENTGROUPLIST");
        			break;
        		case 3: //중공정 그룹 저장
        			this.fn_procSave(this.ds_midMain, this.div_work.form.tab_work.tabpage_Mid.form.grd_midMain, "MIDDLELOADSEGMENTGROUPLIST");
        			break;
        		case 4: // 소공정 그룹 저장
        			this.fn_procSave(this.ds_smallMain, this.div_work.form.tab_work.tabpage_Small.form.grd_smallMain, "SMALLLOADSEGMENTGROUPLIST");
        			break;
        		case 5: // 담당자 수정 저장
        			this.fn_mappingSave(this.ds_personMain, nTabIdx, this.div_work.form.tab_work.tabpage_Person.form.grd_person);
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
        		case "selectPlantList10001": 			//[조회조건] Period dataset Callback
        			/*
        			this.ds_plant.insertRow(0);
        			this.ds_plant.setColumn(0,"PLANTID","");
        			this.ds_plant.setColumn(0,"PLANTNAME",this.nfn_getDictionaryname("ALL",true));
        			*/
        			// site 첫값
        			this.tab_search.tabpage_topSearch.form.cmb_site.set_value(this.gf_getSiteType());
        			this.tab_search.tabpage_midSearch.form.cmb_site.set_value(this.gf_getSiteType());
        			this.tab_search.tabpage_smallSearch.form.cmb_site.set_value(this.gf_getSiteType());
        			this.tab_search.tabpage_personSearch.form.cmb_site.set_value(this.gf_getSiteType());

        			this.tab_search.tabpage_infoSearch.form.cmb_site.set_value(this.gf_getSiteType());
        			// 공정 부하 기준 정보 - 담당자(생산구분, 제품구분)
        			this.fn_getProdType();
        			this.fn_getProdDivision();



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

        		case "saveProcGrpList":

        			this.gfn_Message("SuccessSave", null, "info", "ok");

        			this.fn_search();

        			break;

        		case "selectProdType": 		// 필터 조건 (생산구분)
        			// [21.05.17] 담당자 그리스 생산구분 추가 (All없는 경우)
        			this.ds_prodTypeGridComboList.clearData();
        			this.ds_prodTypeGridComboList.copyData(this.ds_prodTypeList);

        			this.ds_prodTypeList.insertRow(0);
        			this.ds_prodTypeList.setColumn(0,"CODEID"  ,"");
        			this.ds_prodTypeList.setColumn(0,"CODENAME",this.nfn_getDictionaryname("ALLVIEWS",true));
        			this.tab_search.tabpage_personSearch.form.cmb_prodType.set_value("");
        			this.tab_search.tabpage_infoSearch.form.cmb_prodType.set_value("");

        			break;

        		case "selectProdDivision": 		// 필터 조건 (제품구분)
        			this.ds_prodDivisioList.insertRow(0);
        			this.ds_prodDivisioList.setColumn(0,"CODEID"  ,"");
        			this.ds_prodDivisioList.setColumn(0,"CODENAME",this.nfn_getDictionaryname("ALLVIEWS",true));
        			this.tab_search.tabpage_personSearch.form.cmb_prodDivision.set_value("");
        			this.tab_search.tabpage_infoSearch.form.cmb_prodDivision.set_value("");
        			break;

        		case "selectProduDefListForOwnerMapping":

        			// 속도개선
        			//this.div_work.form.tab_work.tabpage_Person.form.grd_person.set_enableevent(true);
        			//this.ds_personMain.set_enableevent(true);
        			if(this.ds_personMain.rowcount == 0)
        			{
        				this.gfn_Message("NoSelectData", null, "warning", "ok");
        			}
        			break;

        		case "saveLoadSegmentRel":

        			this.gfn_Message("SuccessSave", null, "info", "ok");

        			this.fn_search();

        			break;

        		case "selectLoadSegmentRelList":
        			if(this.ds_segmentRelMain.rowcount == 0)
        			{
        				this.gfn_Message("NoSelectData", null, "warning", "ok");
        			}

        			// 조회 성공 후 (유효상태 설정) (21.07.29)
        			this.fn_setLoadValid();

        			break;

        		case "selectProductSegmentMappingList":
        			if(this.ds_ProdSegmentMain.rowcount == 0)
        			{
        				this.gfn_Message("NoSelectData", null, "warning", "ok");
        			}

        			// 수량 초기화 (21.04.26)
        			this.div_work.form.tab_work.tabpage_info.form.msk_pnlQty.set_value(0);
        			this.div_work.form.tab_work.tabpage_info.form.msk_targetSegmentQty.set_value(0);

        			// 조회 성공 후 (유효상태 설정)
        			this.fn_setValid();
        			break;

        		case "selectTopProcGrp":
        			if(this.ds_topMain.rowcount == 0)
        			{
        				this.gfn_Message("NoSelectData", null, "warning", "ok");
        			}
        			break;
        		case "selectMidProcGrp":
        			if(this.ds_midMain.rowcount == 0)
        			{
        				this.gfn_Message("NoSelectData", null, "warning", "ok");
        			}
        			break;
        		case "selectSmallProcGrp":
        			if(this.ds_smallMain.rowcount == 0)
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
        		case "SMALL_PROC_GRP" :	// 소공정그룹
        			var nLen = rtn.length;
        			if(nLen != 0)
        			{
        				var nSamll = "";

        				for(var i=0; i<nLen; i++)
        				{
        					nSamll += i==0? rtn[i][0] : ", " +rtn[i][0];
        				}
        				this.tab_search.tabpage_smallSearch.form.edt_smallProc.set_value(nSamll);
        			}
        			else
        			{
        				this.tab_search.tabpage_smallSearch.form.edt_smallProc.set_value("");
        			}
        			break;
        		case "OWNERNAME" :	// 담당자Tab -  담당자(다중선택)
        			var nLen = rtn.length;

        			if(nLen != 0)
        			{
        				var nOwnerId = "";
        				var nOwnerNm = "";

        				for(var i=0; i<nLen; i++)
        				{
        					nOwnerId += i==0? rtn[i][0] : ", " +rtn[i][0];
        					nOwnerNm += i==0? rtn[i][1] : ", " +rtn[i][1];
        				}
        				this.tab_search.tabpage_personSearch.form.edt_userId.set_value(nOwnerNm);
        				this.fv_ownerId = nOwnerId;
        			}
        			else
        			{
        				this.tab_search.tabpage_personSearch.form.edt_userId.set_value("");
        				this.fv_ownerId = "";
        			}
        			break;
        		case "P_PRODUCTDEFID" :	// 담당자Tab - 품목(다중선택)
        			var nLen = rtn.length;

        			if(nLen != 0)
        			{
        				var nProdDefId = "";

        				for(var i=0; i<nLen; i++)
        				{
        					nProdDefId += i==0? rtn[i][0] : ", " +rtn[i][0];
        				}
        				this.tab_search.tabpage_personSearch.form.edt_prdoDefId.set_value(nProdDefId);

        			}
        			else
        			{
        				this.tab_search.tabpage_personSearch.form.edt_prdoDefId.set_value("");
        			}
        			break;
        		case "OWNERNAME_GRID" :	// 담당자Tab - 품목(단일선택 - 그리드 입력팝업)

        			this.ds_personMain.setColumn(this.fv_personPos, "OWNER" ,rtn[0]);
        			this.ds_personMain.setColumn(this.fv_personPos, "OWNERNAME" ,rtn[1]);
        			break;

        		case "P_PROCESSSEGMENTID" :	// 표준공정 맵핑Tab - 표준공정(다중선택)
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
        					case "TopLoadSegmentClass":		// 대공정
        						this.ds_segmentRelMain.setColumn(this.fv_segmentRelPos, "LOADTOPSEGMENTCLASSID", rtn[0]);
        						this.ds_segmentRelMain.setColumn(this.fv_segmentRelPos, "LOADTOPSEGMENTCLASSNAME", rtn[1]);
        						break;
        					case "MiddleLoadSegmentClass": 	// 중공정
        						this.ds_segmentRelMain.setColumn(this.fv_segmentRelPos, "LOADMIDDLESEGMENTCLASSID", rtn[0]);
        						this.ds_segmentRelMain.setColumn(this.fv_segmentRelPos, "LOADMIDDLESEGMENTCLASSNAME", rtn[1]);
        						break;
        					case "SmallLoadSegmentClass": 	// 소공정
        						this.ds_segmentRelMain.setColumn(this.fv_segmentRelPos, "LOADSMALLSEGMENTCLASSID", rtn[0]);
        						this.ds_segmentRelMain.setColumn(this.fv_segmentRelPos, "LOADSMALLSEGMENTCLASSNAME", rtn[1]);
        						break;
        					default:
        				}
        			break;

        		case "P_PROCESSSEGMENTID_INFO" :	// 부하량기준정보 Tab - 표준공정(다중선택)
        			var nLen = rtn.length;

        			if(nLen != 0)
        			{
        				var nStandard = "";

        				for(var i=0; i<nLen; i++)
        				{
        					nStandard += i==0? rtn[i][0] : ", " +rtn[i][0];
        				}
        				this.tab_search.tabpage_infoSearch.form.edt_standard.set_value(nStandard);
        			}
        			else
        			{
        				this.tab_search.tabpage_infoSearch.form.edt_standard.set_value("");
        			}
        			break;
        		case "P_PRODUCTDEFID_INFO" :	// 부하량 기준정보 Tab - 품목(다중선택)
        			var nLen = rtn.length;

        			if(nLen != 0)
        			{
        				var nProdDefId = "";

        				for(var i=0; i<nLen; i++)
        				{
        					nProdDefId += i==0? rtn[i][0]+"|"+rtn[i][2] : "," +rtn[i][0]+"|"+rtn[i][2];			// 21.05.24 rev도 같이 조회 가능
        				}
        				this.tab_search.tabpage_infoSearch.form.edt_prdoDefId.set_value(nProdDefId);

        			}
        			else
        			{
        				this.tab_search.tabpage_infoSearch.form.edt_prdoDefId.set_value("");
        			}
        			break;

        		case "P_GetLoadSegmentListByTypeInfo" :	// 표준공정 맵핑Tab - 대/중/소(단일선택)

        				switch(rtn[2]) {
        					case "TopLoadSegmentClass":		// 대공정
        						this.ds_ProdSegmentMain.setColumn(this.fv_ProdSegmentPos, "LOADTOPSEGMENTCLASSID", rtn[0]);
        						this.ds_ProdSegmentMain.setColumn(this.fv_ProdSegmentPos, "LOADTOPSEGMENTCLASSNAME", rtn[1]);
        						break;
        					case "MiddleLoadSegmentClass": 	// 중공정
        						this.ds_ProdSegmentMain.setColumn(this.fv_ProdSegmentPos, "LOADMIDDLESEGMENTCLASSID", rtn[0]);
        						this.ds_ProdSegmentMain.setColumn(this.fv_ProdSegmentPos, "LOADMIDDLESEGMENTCLASSNAME", rtn[1]);
        						break;
        					case "SmallLoadSegmentClass": 	// 소공정
        						this.ds_ProdSegmentMain.setColumn(this.fv_ProdSegmentPos, "LOADSMALLSEGMENTCLASSID", rtn[0]);
        						this.ds_ProdSegmentMain.setColumn(this.fv_ProdSegmentPos, "LOADSMALLSEGMENTCLASSNAME", rtn[1]);
        						break;
        					default:
        				}
        			break;

        		case "OWNERNAME_INFO" :	// 공정부하기준정보 Tab -  필터 담당자(멀티선택) (21.06.30) 추가
        			var nLen = rtn.length;

        			if(nLen != 0)
        			{
        				var nOwnerId = "";
        				var nOwnerNm = "";

        				for(var i=0; i<nLen; i++)
        				{
        					nOwnerId += i==0? rtn[i][0] : ", " +rtn[i][0];
        					nOwnerNm += i==0? rtn[i][1] : ", " +rtn[i][1];
        				}
        				this.tab_search.tabpage_infoSearch.form.edt_userId.set_value(nOwnerNm);
        				this.fv_ownerId_info = nOwnerId;
        			}
        			else
        			{
        				this.tab_search.tabpage_infoSearch.form.edt_userId.set_value("");
        				this.fv_ownerId_info = "";
        			}
        			break;

        		case "PRODGROUP":		// (21.07.27) 품목 그룹 추가
        			var nLen = rtn.length;

        			if(nLen != 0)
        			{
        				var nProdGrp = "";

        				for(var i=0; i<nLen; i++)
        				{
        					nProdGrp += i==0? rtn[i][0] : ", " +rtn[i][0];
        				}
        				this.tab_search.tabpage_personSearch.form.edt_prodGrp.set_value(nProdGrp);
        			}
        			else
        			{
        				this.tab_search.tabpage_personSearch.form.edt_prodGrp.set_value("");
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




        	if(popId=="P00238"){ // 대공정 그룹 조회
        		oArg.arg_rtnCols = "LOADSEGMENTCLASSID";							// 코드만 받아온다
        		oArg.arg_searchStr = "1=1|TXTLOADTOPSEGMENTCLASS="+this.tab_search.tabpage_topSearch.form.edt_topProc.value;	// 대
        	}
        	else if(popId=="P00239")	// 중공정 그룹 조회
        	{
        		oArg.arg_rtnCols = "LOADSEGMENTCLASSID";							// 코드만 받아온다
        		oArg.arg_searchStr = "1=1|TXTLOADMIDDLESEGMENTCLASS="+this.tab_search.tabpage_midSearch.form.edt_midProc.value;	// 중
        	}
        	else if(popId=="P00240")	// 소공정 그룹 조회
        	{
        		oArg.arg_rtnCols = "LOADSEGMENTCLASSID";							// 코드만 받아온다
        		oArg.arg_searchStr = "1=1|TXTLOADSMALLSEGMENTCLASS="+this.tab_search.tabpage_smallSearch.form.edt_smallProc.value;	// 소
        	}
        	else if(popId=="P00242")	// 담당장 팝업
        	{
        		oArg.arg_rtnCols = "USERID|USERNAME";								// 담당자id,담당자명
        		oArg.arg_searchStr = "1=1|USERIDNAME="+this.tab_search.tabpage_personSearch.form.edt_userId.value;	// 담당자

        		if(svcId == "OWNERNAME_GRID")
        		{
        			oArg.arg_type 	= "BA";		// 멀티 선택
        			var nStrOwnerNm	= this.ds_personMain.getColumn(this.fv_personPos,"OWNERNAME");
        			oArg.arg_searchStr = "1=1|USERIDNAME="+nStrOwnerNm;	// 담당자(명) 그리드 상의
        		}
        		// (21.06.30) 부하량기준정보 담당자 팝업 추가(필터) [↓]  조건에 해당함
        		else if(svcId == "OWNERNAME_INFO")
        		{
        			oArg.arg_searchStr = "1=1|USERIDNAME="+this.tab_search.tabpage_infoSearch.form.edt_userId.value;	// 담당자 (멀티선택)
        		}
        	}

        	// (21.07.27) 품목 그룹 추가
        	else if (popId == 'P00320')
        	{
        		oArg.arg_rtnCols = "PRODUCTDEFCLASSGROUPNAME";								// 품목그룹
        		oArg.arg_searchStr = "1=1|PRODCLASSGROUP="+this.tab_search.tabpage_personSearch.form.edt_prodGrp.value;	// 품목 그룹
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
        	// (21.06.30) - 전체 체크 박스 초기화(각각 추가)

        	switch(nIdx) {
        		case 0:	// 부하량 기준정보
        			this.ds_ProdSegmentMain.clearData();
        			this.div_work.form.tab_work.tabpage_info.form.grd_infoMain.setCellProperty( "head", 1, "text", "0");
        			this.fn_searchInfo();				// 부하량 기준정보 조회
        			break;
        		case 1: //표준공정 맵핑
        			this.ds_segmentRelMain.clearData();
        			this.div_work.form.tab_work.tabpage_map.form.grd_map.setCellProperty( "head", 1, "text", "0");
        			this.fn_searchRel();				// 표준공정 조회
        			break;
        		case 2: //대공정 그룹 조회
        			this.ds_topMain.clearData();
        			this.div_work.form.tab_work.tabpage_Top.form.grd_topMain.setCellProperty( "head", 1, "text", "0");
        			var nType = "TOP";	//"TopLoadSegmentClass";
        			this.fn_searchGrp( nType);			// 그룹조회(대/중/소)
        			break;
        		case 3: //중공정 그룹 조회
        			this.ds_midMain.clearData();
        			this.div_work.form.tab_work.tabpage_Mid.form.grd_midMain.setCellProperty( "head", 1, "text", "0");
        			var nType = "MIDDLE";
        			this.fn_searchGrp(nType);			// 그룹조회(대/중/소)
        			break;
        		case 4: // 소공정 그룹 조회
        			this.ds_smallMain.clearData();
        			this.div_work.form.tab_work.tabpage_Small.form.grd_smallMain.setCellProperty( "head", 1, "text", "0");
        			var nType = "SMALL";
        			this.fn_searchGrp(nType);			// 그룹조회(대/중/소)
        			break;
        		case 5: //담당차 초기화
        			this.ds_personMain.clearData();
        			this.div_work.form.tab_work.tabpage_Person.form.grd_person.setCellProperty( "head", 1, "text", "0");
        			this.fn_searchPerson();				// 담당자 조회
        			break;
        		default:
        	}
        };

        /*
         * 대/중/소 그룹 조회
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
        		case "SMALL":
        			nSvcID 			= "selectSmallProcGrp";
        			nOutDatasets 	= "ds_smallMain=output";
        			nSmall			= this.tab_search.tabpage_smallSearch.form.edt_smallProc.value;
        			nSite			= this.tab_search.tabpage_smallSearch.form.cmb_site.value;
        			nValid			= this.tab_search.tabpage_smallSearch.form.cmb_valid.value;
        			break;
        		default:
        	}

        	this.ds_searchGrp.setColumn(0,"PLANTID"							,nSite);
        	// P_LOADSMALLMENTCLASSID
        	this.ds_searchGrp.setColumn(0,"P_LOADTOPSEGMENTCLASSID"			,nTop);
        	this.ds_searchGrp.setColumn(0,"P_LOADMIDDLESEGMENTCLASSID"		,nMid);
        	this.ds_searchGrp.setColumn(0,"P_LOADSMALLSEGMENTCLASSID"		,nSmall);

        	this.ds_searchGrp.setColumn(0,"P_VALIDSTATE"					,nValid);


        	var sSvcID 			= nSvcID;
        	var sController 	= "/mfm00200/selectLoadSegmentList.do";
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
        		case 2: //대공정 그룹 조회
        			var nAddRow = this.ds_topMain.addRow();
        			this.ds_topMain.setColumn(nAddRow,"LOADSEGMENTCLASSTYPE","TopLoadSegmentClass");
        			this.ds_topMain.setColumn(nAddRow,"VALIDSTATE","Valid");
        			//this.ds_topMain.setColumn(nAddRow, "CREATER", this.gf_getUserId());   		// 담당자(쿼리에서 처리)
        			this.ds_topMain.setColumn(nAddRow, "ENTERPRISEID", this.gf_getEnterpriseId());	// EnterpriseId
        			this.ds_topMain.setColumn(nAddRow, "PLANTID", this.gf_getSiteType());   		// Site

        			break;
        		case 3: //중공정 그룹 조회
        			var nAddRow = this.ds_midMain.addRow();
        			this.ds_midMain.setColumn(nAddRow,"LOADSEGMENTCLASSTYPE","MiddleLoadSegmentClass");
        			this.ds_midMain.setColumn(nAddRow,"VALIDSTATE","Valid");
        			//this.ds_midMain.setColumn(nAddRow, "CREATER", this.gf_getUserId());   		// 담당자(쿼리에서 처리)
        			this.ds_midMain.setColumn(nAddRow, "ENTERPRISEID", this.gf_getEnterpriseId());	// EnterpriseId
        			this.ds_midMain.setColumn(nAddRow, "PLANTID", this.gf_getSiteType());   		// Site

        			break;
        		case 4: // 소공정 그룹 조회
        			var nAddRow = this.ds_smallMain.addRow();
        			this.ds_smallMain.setColumn(nAddRow,"LOADSEGMENTCLASSTYPE","SmallLoadSegmentClass");
        			this.ds_smallMain.setColumn(nAddRow,"VALIDSTATE","Valid");
        			//this.ds_smallMain.setColumn(nAddRow, "CREATER", this.gf_getUserId());   		// 담당자(쿼리에서 처리)
        			this.ds_smallMain.setColumn(nAddRow, "ENTERPRISEID", this.gf_getEnterpriseId());// EnterpriseId
        			this.ds_smallMain.setColumn(nAddRow, "PLANTID", this.gf_getSiteType());   		// Site

        			break;

        		default:
        	}

        };

        /*
         * 대/중/소 공정 copy
         */
        this.fn_procCopy = function(obj,e)
        {
        	var nTabIdx = this.div_work.form.tab_work.tabindex;
        	var nObjDs;
        	switch(nTabIdx) {
        		case 2: //대공정 그룹 조회
        			nObjDs = this.ds_topMain;

        			break;
        		case 3: //중공정 그룹 조회
        			nObjDs = this.ds_midMain;

        			break;
        		case 4: // 소공정 그룹 조회
        			nObjDs = this.ds_smallMain;


        			break;

        		default:
        	}

        	this.fn_copyDataset(nObjDs, null, "CREATOR,MODIFIER,CREATEDTIME,MODIFIEDTIME");
        };

        /*
         * 대/중/소 삭제
         */
        this.fn_procDelete = function(obj,e)
        {
        	var nTabIdx = this.div_work.form.tab_work.tabindex;
        	var nObjDs;
        	switch(nTabIdx) {
        		case 2: //대공정 그룹 조회
        			nObjDs = this.ds_topMain;
        			break;
        		case 3: //중공정 그룹 조회
        			nObjDs = this.ds_midMain;
        			break;
        		case 4: // 소공정 그룹 조회
        			nObjDs = this.ds_smallMain;
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
         * 대/중/소 저장
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

        	var strMst = "LOADSEGMENTCLASSID,VALIDSTATE";					// 필수값 체크

        	/* 고객정보 그리드 체크 */
        	if(!this.nfn_MandatoryCheckGrid(mst, strMst)) return;

        	//고객정보 그리드내 중복값 체크
        	if(!this.fn_checkGridDup(nObjDs
        							, "LOADSEGMENTCLASSID"
        							, "DuplicationUserSequence|DuplicationSegmentID"
        							, this.nfn_getDictionaryname(nTitle,true)
        							)){ return;}

        	var dsName = nObjDs.name;	// 대/중/소 데이터셋 명

        	// 대/중/소 공정 저장
        	var sSvcID 			= "saveProcGrpList";
        	var sController 	= "/mfm00200/saveProcGrpList.do";
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
         *	담당자Tab 필터 생산구분 콤보
         */
        this.fn_getProdType = function ()
        {
        	this.ds_searchFilter.clearData();
        	// 조회 조건 설정
        	this.ds_searchFilter.addRow();
        	this.ds_searchFilter.setColumn(0, "ENTERPRISEID"	, this.gf_getEnterpriseId()); 	// ENTERPRISEID
        	this.ds_searchFilter.setColumn(0, "CODECLASSID"		, "ProductionType"); 	// ENTERPRISEID

        	// 품목유형코드 콤보 정보 조회
        	var sSvcID 			= "selectProdType";
        	var sController 	= "/pcm08400/selectTypeList.do";
        	var sInDatasets 	= "INPUT=ds_searchFilter";
        	var sOutDatasets 	= "ds_prodTypeList=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         *	담당자Tab 필터 제품구분 콤보
         */
        this.fn_getProdDivision = function ()
        {
        	this.ds_searchFilter.clearData();
        	// 조회 조건 설정
        	this.ds_searchFilter.addRow();
        	this.ds_searchFilter.setColumn(0, "ENTERPRISEID"	, this.gf_getEnterpriseId()); 	// ENTERPRISEID
        	this.ds_searchFilter.setColumn(0, "CODECLASSID"		, "ProductDivision2"); 	// ENTERPRISEID

        	// 품목유형코드 콤보 정보 조회
        	var sSvcID 			= "selectProdDivision";
        	var sController 	= "/pcm08400/selectTypeList.do";
        	var sInDatasets 	= "INPUT=ds_searchFilter";
        	var sOutDatasets 	= "ds_prodDivisioList=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 담당장 메인 조회
         */
        this.fn_searchPerson = function ()
        {
        	// 속도개선
        	//this.div_work.form.tab_work.tabpage_Person.form.grd_person.set_enableevent(false);
        	//this.ds_personMain.set_enableevent(false);

        	this.ds_searchPerson.clearData();
        	this.ds_searchPerson.addRow();

        	this.ds_searchPerson.setColumn(0,"ENTERPRISEID"		,this.gf_getEnterpriseId());
        	this.ds_searchPerson.setColumn(0,"P_PLANTID"		,this.gf_getSiteType());
        	//this.ds_searchPerson.setColumn(0,"P_VALIDSTATE"		,this.gf_getEnterpriseId());
        	this.ds_searchPerson.setColumn(0,"P_PRODUCTDEFID"	,this.tab_search.tabpage_personSearch.form.edt_prdoDefId.value);
        	this.ds_searchPerson.setColumn(0,"P_PRODUCTIONTYPE"	,this.tab_search.tabpage_personSearch.form.cmb_prodType.value);
        	this.ds_searchPerson.setColumn(0,"P_NOINPUT"		,this.tab_search.tabpage_personSearch.form.cmb_noInput.value);
        	this.ds_searchPerson.setColumn(0,"USERID"			,this.fv_ownerId);
        	this.ds_searchPerson.setColumn(0,"P_PRODUCTDEFTYPE"	,this.tab_search.tabpage_personSearch.form.cmb_prodDivision.value);
        	this.ds_searchPerson.setColumn(0,"P_ISLOADMNG"		,this.tab_search.tabpage_personSearch.form.cmb_IsLoadMng.value);
        	// 재공여부 추가(21.04.24)
        	this.ds_searchPerson.setColumn(0,"P_WIPYN"		    ,this.tab_search.tabpage_personSearch.form.cmb_wipYn.value);
        	// 유효상태 추가
        	this.ds_searchPerson.setColumn(0,"P_VALIDSTATE"		,this.tab_search.tabpage_personSearch.form.cmb_valid.value);

        	// (21.07.27) 품목 그룹 추가
        	this.ds_searchPerson.setColumn(0,"P_PRODGROUP"		,this.tab_search.tabpage_personSearch.form.edt_prodGrp.value);


        	var sSvcID 			= "selectProduDefListForOwnerMapping";
        	var sController 	= "/mfm00200/selectProduDefListForOwnerMapping.do";
        	var sInDatasets 	= "INPUT=ds_searchPerson";
        	var sOutDatasets 	= "ds_personMain=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };

        /*
         * 담당자 Tab 담당자 x 버튼 클릭시
         */
        this.fn_xClickUserId = function ()
        {
        	this.tab_search.tabpage_personSearch.form.edt_userId.set_value("");
        	this.fv_ownerId = "";
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
        		case 0: // 부하량 기준정보
        			nOut	= "ds_ProdSegmentMain=ds_ProdSegmentMain:U";
        			this.fn_setProdSegInfo();
        			break;
        		case 1: // 표준공정 저장
        			nOut	= "ds_segmentRelMain=ds_segmentRelMain:U";

        			this.fn_setRelInfo();
        			break;
        		case 5: // 담당자 저장
        			nOut	= "ds_personMain=ds_personMain:A";
        			break;

        		default:
        	}


        	if(nType != 5)
        	{
        		/* 그리드 필수체크 */
        		var mst 	= nGrid;

        		var strMst = "VALIDSTATE";					// 필수값 체크

        		/* 고객정보 그리드 체크 */
        		if(!this.nfn_MandatoryCheckGrid(mst, strMst)) return;
        	}

        	// 표준공정 맵핑인 경우만(대/중 공정 코드 누락 부분 채우기, 등록 내역 체크)
        	if(nType == 1)
        	{
        		// 저장시 체크()
        		if(!this.fn_setChksegmentRel())
        		{
        			return;
        		}
        	}

        	// 대/중/소 공정 저장
        	var sSvcID 			= "saveLoadSegmentRel";
        	var sController 	= "/mfm00200/saveLoadSegmentRel.do";
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
        		case 0:	//[조회조건] Site Callback

        			this.tab_search.tabpage_infoSearch.form.cmb_prodType.set_value("");
        			this.tab_search.tabpage_infoSearch.form.cmb_prodDivision.set_value("");

        			this.tab_search.tabpage_infoSearch.form.cmb_site.set_value(this.gf_getSiteType());
        			this.tab_search.tabpage_infoSearch.form.cmb_noInput.set_index(0);
        			this.tab_search.tabpage_infoSearch.form.cmb_valid.set_index(0);
        			this.tab_search.tabpage_infoSearch.form.edt_standard.set_value("");

        			// (21.06.30) - 필터 담당자 추가
        			this.tab_search.tabpage_infoSearch.form.edt_userId.set_value("");
        			this.fv_ownerId_info = "";

        			break;
        		case 1: // 표준공정 맵핑 초기화
        			this.tab_search.tabpage_mapSearch.form.cmb_noInput.set_index(0);
        			this.tab_search.tabpage_mapSearch.form.cmb_valid.set_index(0);
        			this.tab_search.tabpage_mapSearch.form.edt_standard.set_value("");

        			break;
        		case 2: //대공정 그룹 조회
        			this.tab_search.tabpage_topSearch.form.cmb_site.set_value(this.gf_getSiteType());
        			this.tab_search.tabpage_topSearch.form.edt_topProc.set_value("");
        			this.tab_search.tabpage_topSearch.form.cmb_valid.set_index(0);
        			break;
        		case 3: //중공정 그룹 조회
        			this.tab_search.tabpage_midSearch.form.cmb_site.set_value(this.gf_getSiteType());
        			this.tab_search.tabpage_midSearch.form.edt_midProc.set_value("");
        			this.tab_search.tabpage_midSearch.form.cmb_valid.set_index(0);

        			break;
        		case 4: // 소공정 그룹 조회
        			this.tab_search.tabpage_smallSearch.form.cmb_site.set_value(this.gf_getSiteType());
        			this.tab_search.tabpage_smallSearch.form.edt_smallProc.set_value("");
        			this.tab_search.tabpage_smallSearch.form.cmb_valid.set_index(0);

        			break;
        		case 5: // 담당자 초기화
        			this.tab_search.tabpage_personSearch.form.cmb_site.set_value(this.gf_getSiteType());
        			this.tab_search.tabpage_personSearch.form.cmb_prodType.set_value("");
        			this.tab_search.tabpage_personSearch.form.cmb_prodDivision.set_value("");
        			this.tab_search.tabpage_personSearch.form.cmb_noInput.set_index(0);
        			this.tab_search.tabpage_personSearch.form.cmb_IsLoadMng.set_index(0);
        			this.fv_ownerId 	= "";			// 담당자Id
        			this.tab_search.tabpage_personSearch.form.edt_prdoDefId.set_value("");
        			this.tab_search.tabpage_personSearch.form.edt_userId.set_value("");
        			// 재공여부 (21.04.24)
        			this.tab_search.tabpage_personSearch.form.cmb_wipYn.set_index(0);
        			// 유효상태 추가
        			this.tab_search.tabpage_infoSearch.form.cmb_valid.set_index(0);
        			// 품목그룹 추가 (21.07.27)
        			this.tab_search.tabpage_personSearch.form.edt_prodGrp.set_value("");

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

        	// (21.04.23 추가 대/중/소 복사붙여넣기시 정합성 체크)
        	this.ds_searchRel.setColumn(0,"PLANTID"					,this.gf_getSiteType());
        	this.ds_searchRel.setColumn(0,"ENTERPRISEID"			,this.gf_getEnterpriseId());


        	var sSvcID 			= "selectLoadSegmentRelList";
        	var sController 	= "/mfm00200/selectLoadSegmentRelList.do";
        	var sInDatasets 	= "INPUT=ds_searchRel";
        	var sOutDatasets 	= "ds_segmentRelMain=output1 ds_segmentGroup=output2";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);


        };


        /*
         * 표준공정(대/중/소 공정 Popup)
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

        	oArg.arg_rtnCols = "LOADSEGMENTCLASSID|LOADSEGMENTCLASSNAME";				// 리턴 받을값

        	this.gfn_openPopup(popupId,"mfm::MFM00202P.xfdl" ,oArg ,opts);
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
         * 부하량 기준정보 조회
         */
        this.fn_searchInfo  = function ()
        {
        	this.ds_searchInfo.clearData();
        	this.ds_searchInfo.addRow();

        	this.ds_searchInfo.setColumn(0,"P_VALIDSTATE"			,this.tab_search.tabpage_infoSearch.form.cmb_valid.value);
        	this.ds_searchInfo.setColumn(0,"P_PLANTID"				,this.gf_getSiteType());
        	this.ds_searchInfo.setColumn(0,"P_PRODUCTDEFID"			,this.tab_search.tabpage_infoSearch.form.edt_prdoDefId.value);		// 품목
        	this.ds_searchInfo.setColumn(0,"P_PRODUCTIONTYPE"	 	,this.tab_search.tabpage_infoSearch.form.cmb_prodType.value);		// 생산구분
        	this.ds_searchInfo.setColumn(0,"P_PRODUCTDEFTYPE"	    ,this.tab_search.tabpage_infoSearch.form.cmb_prodDivision.value);	// 제품구분
        	this.ds_searchInfo.setColumn(0,"P_PROCESSSEGMENTID"		,this.tab_search.tabpage_infoSearch.form.edt_standard.value);		// 표준공정
        	this.ds_searchInfo.setColumn(0,"P_NOINPUT"				,this.tab_search.tabpage_infoSearch.form.cmb_noInput.value);		// 미입력


        	// (21.06.30) 담당자추가
        	//trace(" 담당자 조건 확인 "+ this.fv_ownerId_info);
        	this.ds_searchInfo.setColumn(0,"USERID"				,this.fv_ownerId_info);		// 담당자 (21.06.30)- 추가

        	var sSvcID 			= "selectProductSegmentMappingList";
        	var sController 	= "/mfm00200/selectProductSegmentMappingList.do";
        	var sInDatasets 	= "INPUT=ds_searchInfo";
        	var sOutDatasets 	= "ds_ProdSegmentMain=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        /*
         * 표준공정(대/중/소 공정 Popup)
         */
        this.fn_getProcInfoPop = function (nType, nSearchT)
        {
        	var nEnterpriseId 	= this.gf_getEnterpriseId();	//ENTERPRISEID
        	var nSite 			= this.gf_getSiteType();		//Site
        	var nType 			= nType;						//대중소

        	var popupId = "P_GetLoadSegmentListByTypeInfo";
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

        	oArg.arg_rtnCols = "LOADSEGMENTCLASSID|LOADSEGMENTCLASSNAME";				// 리턴 받을값

        	this.gfn_openPopup(popupId,"mfm::MFM00202P.xfdl" ,oArg ,opts);
        };

        /*
         * 부하량 기준정보 수정시 -> 기본 정보 설정
         */
        this.fn_setProdSegInfo = function ()
        {
        	var nCnt = this.ds_ProdSegmentMain.rowcount;
        	for(var i=0; i<nCnt; i++)
        	{
        		var nRowType = this.ds_ProdSegmentMain.getRowType(i);
        		if(nRowType == Dataset.ROWTYPE_UPDATE)
        		{
        			this.ds_ProdSegmentMain.setColumn(i,"ENTERPRISEID"	,this.gf_getEnterpriseId());
        			this.ds_ProdSegmentMain.setColumn(i,"PLANTID"		,this.gf_getSiteType());
        		}
        	}
        };

        /*
         * 표준공정 맵핑 - 대/소 공정 붙여 넣을 후 코드값 설정 (21.04.23) 기능 추가_[복사 붙여 넣기 시 대/중 공정 코드 설정](21.04.23) - 맵핑정보 붙여넣기 기능 추가
         */
        this.fn_gridKeyDown = function (obj,e)
        {
        	var sKeycode = e.keycode;

        	if(e.ctrlkey && !e.shiftkey && !e.altkey)
        	{
        		if(sKeycode == 86)		// 붙여 넣기
        		{
        			this.fv_paste = true;
        		}
        	}
        };



        /*
         * 대/중 공정명/코드 체크 설정 (21.04.23) 기능 추가_[복사 붙여 넣기 시 대/중/소 공정 코드 설정]
         */
        this.fn_setWorkDoneCode = function ()
        {
        	var nRow = this.ds_segmentRelMain.rowcount;
        	for(var i=0; i<nRow; i++)
        	{
        		//var nType = this.ds_segmentRelMain.getRowType(i);
        		//if(nType == Dataset.ROWTYPE_UPDATE)		// 수정인 경우만
        		//{
        			var nTtxt = this.ds_segmentRelMain.getColumn(i,"LOADTOPSEGMENTCLASSNAME");		// 대공정
        			if(!this.gfn_isNull(nTtxt))
        			{
        				var nI		= i;
        				var nChkRow = (nI+1)+"";
        				// 명으로 -> 코드 찾아서 설정 (조회시 대/중공정 정보 조회 가지고 있다가 설정)
        				var nTopF 	= this.ds_segmentGroup.findRowExpr("LOADSEGMENTCLASSNAME == '"+nTtxt+"' && LOADSEGMENTCLASSTYPE == 'TopLoadSegmentClass'");
        				if(nTopF == -1)
        				{
        					this.gfn_Message("CheckSegmentGroup", [this.nfn_getDictionaryname("TOPSEGMENTGROUP",true),nChkRow], "error", "ok");	//{0}에 해당하는 코드값이 없습니다. ({1}행)
        					return false;
        				}
        				var nId		= this.ds_segmentGroup.getColumn(nTopF,"LOADSEGMENTCLASSID");
        				this.ds_segmentRelMain.setColumn(i,"LOADTOPSEGMENTCLASSID",nId);				// 대공정 코드 설정
        			}

        			var nMtxt = this.ds_segmentRelMain.getColumn(i,"LOADMIDDLESEGMENTCLASSNAME");		// 중공정
        			if(!this.gfn_isNull(nMtxt))
        			{
        				// 명으로 -> 코드 찾아서 설정 (조회시 대/중공정 정보 조회 가지고 있다가 설정)
        				var nMidF 	= this.ds_segmentGroup.findRowExpr("LOADSEGMENTCLASSNAME == '"+nMtxt+"' && LOADSEGMENTCLASSTYPE == 'MiddleLoadSegmentClass'");
        				if(nMidF == -1)
        				{
        					this.gfn_Message("CheckSegmentGroup", [this.nfn_getDictionaryname("MIDDLESEGMENTGROUP",true),nChkRow], "error", "ok");	//{0}에 해당하는 코드값이 없습니다. ({1}행)
        					return false;
        				}
        				var nId		= this.ds_segmentGroup.getColumn(nMidF,"LOADSEGMENTCLASSID");
        				this.ds_segmentRelMain.setColumn(i,"LOADMIDDLESEGMENTCLASSID",nId);				// 중공정 코드 설정
        			}

        			var nStxt = this.ds_segmentRelMain.getColumn(i,"LOADSMALLSEGMENTCLASSNAME");			// 소공정
        			if(!this.gfn_isNull(nStxt))
        			{
        				// 명으로 -> 코드 찾아서 설정 (조회시 대/중공정 정보 조회 가지고 있다가 설정)
        				var nSmallF 	= this.ds_segmentGroup.findRowExpr("LOADSEGMENTCLASSNAME == '"+nStxt+"' && LOADSEGMENTCLASSTYPE == 'SmallLoadSegmentClass'");
        				if(nSmallF == -1)
        				{
        					this.gfn_Message("CheckSegmentGroup", [this.nfn_getDictionaryname("SMALLSEGMENTGROUP",true),nChkRow], "error", "ok");	//{0}에 해당하는 코드값이 없습니다. ({1}행)
        					return false;
        				}
        				var nId		= this.ds_segmentGroup.getColumn(nSmallF,"LOADSEGMENTCLASSID");
        				this.ds_segmentRelMain.setColumn(i,"LOADSMALLSEGMENTCLASSID",nId);				// 중공정 코드 설정
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
        		this.ds_topMain.setColumn(addRow, "LOADSEGMENTCLASSTYPE",		"TopLoadSegmentClass");
        		this.ds_topMain.setColumn(addRow, "VALIDSTATE",					"Valid");
        		this.ds_topMain.setColumn(addRow, "ENTERPRISEID", 				this.gf_getEnterpriseId());	// EnterpriseId
        		this.ds_topMain.setColumn(addRow, "PLANTID", 					this.gf_getSiteType());   	// Site
        	}
        	this.ds_topMain.set_enableevent(true);
        }


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
        		this.ds_midMain.setColumn(addRow, "LOADSEGMENTCLASSTYPE",		"MiddleLoadSegmentClass");
        		this.ds_midMain.setColumn(addRow, "VALIDSTATE",					"Valid");
        		this.ds_midMain.setColumn(addRow, "ENTERPRISEID", 				this.gf_getEnterpriseId());	// EnterpriseId
        		this.ds_midMain.setColumn(addRow, "PLANTID", 					this.gf_getSiteType());   	// Site
        	}
        	this.ds_midMain.set_enableevent(true);
        }


        /*
         *	엑셀 업로드 실패 시 (small)
         */
        this.fn_excel_fail_small = function ()
        {
        	this.gfn_Message("FAILEXCELIMPORT", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        	this.ds_smallMain.set_enableevent(true);
        };


        /*
         *	엑셀 업로드 이후...(small)
         */
        this.fn_excel_success_small = function ()
        {
        	this.ds_smallMain.set_enableevent(false);
        	var dsObj 		= this.ds_smallMain;
        	var dsObjExcel 	= this.ds_smallMainExcel;

        	if(dsObjExcel.rowcount > 0 ){
        		this.fn_makeExcelDataSmall();
        	} else {
        		this.gfn_Message("NOTEXISTSEXCELIMPORTDATA", "", "warning", "ok");
        		this.ds_smallMain.set_enableevent(true);
        	}
        };


        //업로드된 엑셀데이터를 가지고 코드값 조회 함수 (middle)
        this.fn_makeExcelDataSmall = function()
        {
        	for(var i=0; i<this.ds_smallMainExcel.rowcount; i++)
        	{
        		var addRow = this.ds_smallMain.addRow();
        		this.ds_smallMain.copyRow(addRow,this.ds_smallMainExcel,i);
        		this.ds_smallMain.setColumn(addRow, "LOADSEGMENTCLASSTYPE",		"SmallLoadSegmentClass");
        		this.ds_smallMain.setColumn(addRow, "VALIDSTATE",				"Valid");
        		this.ds_smallMain.setColumn(addRow, "ENTERPRISEID", 			this.gf_getEnterpriseId());	// EnterpriseId
        		this.ds_smallMain.setColumn(addRow, "PLANTID", 					this.gf_getSiteType());   	// Site
        	}
        	this.ds_smallMain.set_enableevent(true);
        }

         /*
          * 시작일 빈값 자동 오늘자로 설정_[21.04.23]
          */
         this.fn_setValid = function ()
         {

        	this.div_work.form.tab_work.tabpage_info.form.grd_infoMain.set_enableevent(false);
        	this.ds_ProdSegmentMain.set_enableevent(false);

        	var nCnt  	= this.ds_ProdSegmentMain.rowcount;
        	for(var i=0; i<nCnt; i++)
        	{
        		var nValid = this.ds_ProdSegmentMain.getColumn(i,"VALIDSTATE");
        		if(this.gfn_isNull(nValid))
        		{
        			this.ds_ProdSegmentMain.setColumn(i,"VALIDSTATE","Valid");
        		}
        	}
        	this.div_work.form.tab_work.tabpage_info.form.grd_infoMain.set_enableevent(true);
        	this.ds_ProdSegmentMain.set_enableevent(true);

         };


        /*
         * (21.06.04) - 체크박스 전체 이벤트 제거후 적용 해 볼 것 (속도개선)
         */
        this.fn_onheadclick = function (obj,e)
        {
        	var nObjDs	= obj.getBindDataset();
        	nObjDs.set_updatecontrol(false);
        	nObjDs.set_enableevent(false);
        	obj.set_enableevent(false);
        	// Grid 전체선택/해제(Header에 checkbox있는 Grid에만 추가
        	this.gfn_setGridCheckAll(obj, e);

        	// Grid 정렬
        	this.gfn_ProcGrdSort(obj, e.cell);
        	obj.set_enableevent(true);
        	nObjDs.set_enableevent(true);
        	nObjDs.set_updatecontrol(true);

        };

        /*
         * 담당자 Tab 담당자 x 버튼 클릭시  (부하량기준정보) (21.06.30)
         */
        this.fn_xClickUserId_info = function ()
        {
        	this.tab_search.tabpage_infoSearch.form.edt_userId.set_value("");
        	this.fv_ownerId_info = "";
        };

        /*
         * 유효상태 빈값 자동  설정_[21.07.29]
         */
        this.fn_setLoadValid = function ()
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
         * 소공정 그룹 팝업 호출
         */
        this.tab_search_tabpage_smallSearch_btn_smallProc_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID"			, this.gf_getEnterpriseId()); 		// ENTERPRISEID
        	sArgs += this.gfn_setParam("PLANTID"				, this.gf_getSiteType()); 			// Site
        	sArgs += this.gfn_setParam("LOADSEGMENTCLASSTYPE"	, 'SmallLoadSegmentClass'); 		// 소
        	//sArgs += this.gfn_setParam("TXTLOADTOPSEGMENTCLASS"	, this.tab_search.tabpage_smallSearch.form.edt_smallProc.value); // 소

        	this.fn_openPop("SMALL_PROC_GRP","P00240", sArgs); // 소공정 그룹 조회
        };
        /*
         * 중공정 그룹 팝업 호출
         */
        this.tab_search_tabpage_midSearch_btn_midProc_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID"			, this.gf_getEnterpriseId()); 		// ENTERPRISEID
        	sArgs += this.gfn_setParam("PLANTID"				, this.gf_getSiteType()); 			// Site
        	sArgs += this.gfn_setParam("LOADSEGMENTCLASSTYPE"	, 'MiddleLoadSegmentClass'); 		// 중
        	//sArgs += this.gfn_setParam("TXTLOADTOPSEGMENTCLASS"	, this.tab_search.tabpage_midSearch.form.edt_midProc.value); // 중

        	this.fn_openPop("MID_PROC_GRP","P00239", sArgs); // 중공정 그룹 조회
        };
        /*
         * 대공정 그룹 팝업 호출
         */
        this.tab_search_tabpage_topSearch_btn_topProc_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID"			, this.gf_getEnterpriseId()); 		// ENTERPRISEID
        	sArgs += this.gfn_setParam("PLANTID"				, this.gf_getSiteType()); 			// Site
        	sArgs += this.gfn_setParam("LOADSEGMENTCLASSTYPE"	, 'TopLoadSegmentClass'); 		// 대


        	this.fn_openPop("TOP_PROC_GRP","P00238", sArgs); // 대공정 그룹 조회
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
         * 담당자 필터(팝업 호출)
         */
        this.tab_search_tabpage_personSearch_btn_userId_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId()); 	//ENTERPRISEID
        	sArgs += this.gfn_setParam("PLANTID", this.gf_getSiteType()); 			//Site
        	// 필터의 경우 등록된것만 나오도록 수정 (21.07.26)
        	sArgs += this.gfn_setParam("P_FILTER", "Y"); 							//필터의 경우등록된것만 나오도록 설정

        	this.fn_openPop("OWNERNAME","P00242", sArgs); // 담당자 필터
        };

        /*
         * 공정 부하 기준 정보 (담당자 품목 팝업)
         */
        this.tab_search_tabpage_personSearch_btn_prdoDefId_onclick = function(obj,e)
        {
        	var nEnterpriseId 	= this.gf_getEnterpriseId();	//ENTERPRISEID
        	var nSite 			= this.gf_getSiteType();		//Site

        	var popupId = "P_PRODUCTDEFID";
        	var oArg 	= {};
        	var opts 	= "width=800,height=800";

        	// 그리드 내 입력값 있으면
        	var nSearch = this.tab_search.tabpage_personSearch.form.edt_prdoDefId.value;

        	if(!this.gfn_isNull(nSearch))
        	{
        		// 기입력된 값이 있으면
        		oArg.arg_prodId = nSearch;
        	}

        	oArg.arg_rtnCols = "PRODUCTDEFID|PRODUCTDEFNAME";				// 리턴 받을값

        	this.gfn_openPopup(popupId,"mfm::MFM00200P.xfdl" ,oArg ,opts);
        };

        /*
         * 담당자 Tab - 담당자명 팝업 클릭시
         */
        this.div_work_tab_work_tabpage_Person_grd_00_onexpanddown = function(obj,e)
        {
        	var nOwnerIdx 		= this.div_work.form.tab_work.tabpage_Person.form.grd_person.getBindCellIndex("body","OWNERNAME");
        	this.fv_personPos 	= e.row;
        	if(e.cell == nOwnerIdx)
        	{

        		var sArgs = {};
        		sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId()); 	//ENTERPRISEID
        		sArgs += this.gfn_setParam("PLANTID", this.gf_getSiteType()); 			//Site

        		this.fn_openPop("OWNERNAME_GRID","P00242", sArgs); // 담당자 필터
        	}
        	else
        	{
        		//초기화
        		this.ds_personMain.setColumn(this.fv_personPos, "OWNER" ,"");
        		this.ds_personMain.setColumn(this.fv_personPos, "OWNERNAME" ,"");
        	}
        };
        /*
         * 재공->품목사용 설정
         */
        this.div_work_tab_work_tabpage_Person_btn_setUse_onclick = function(obj,e)
        {
        	this.ds_personMain.set_enableevent(false);
        	this.div_work.form.tab_work.tabpage_Person.form.grd_person.set_enableevent(false);
        	var nPersonCnt = this.ds_personMain.rowcount;
        	for(var i=0; i<nPersonCnt; i++)
        	{
        		var nWipYn = this.ds_personMain.getColumn(i,"WIP_YN") // 재공유무 -> 품목 사용 같도록 WIP_YN
        		this.ds_personMain.setColumn(i,"ISLOADMNG",nWipYn);
        	}

        	this.ds_personMain.set_enableevent(true);
        	this.div_work.form.tab_work.tabpage_Person.form.grd_person.set_enableevent(true);

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
        	var nTopIdx 	= this.div_work.form.tab_work.tabpage_map.form.grd_map.getBindCellIndex("body","LOADTOPSEGMENTCLASSNAME");
        	var nMidIdx 	= this.div_work.form.tab_work.tabpage_map.form.grd_map.getBindCellIndex("body","LOADMIDDLESEGMENTCLASSNAME");
        	var nSmallIdx 	= this.div_work.form.tab_work.tabpage_map.form.grd_map.getBindCellIndex("body","LOADSMALLSEGMENTCLASSNAME");

        	var nMapXTopIdx 	= this.div_work.form.tab_work.tabpage_map.form.grd_map.getBindCellIndex("body","X_T_BTN");
        	var nMapXMidIdx 	= this.div_work.form.tab_work.tabpage_map.form.grd_map.getBindCellIndex("body","X_M_BTN");
        	var nMapXSmallIdx 	= this.div_work.form.tab_work.tabpage_map.form.grd_map.getBindCellIndex("body","X_S_BTN");

        	this.fv_segmentRelPos 	= e.row;
        	var nText =	"";
        	switch(e.cell) {
        		case nTopIdx:	// 대공정

        			nText = this.ds_segmentRelMain.getColumn(e.row,"LOADTOPSEGMENTCLASSNAME");
        			this.fn_getProcPop("TopLoadSegmentClass", nText);
        			break;
        		case nMidIdx: 	// 중공정

        			nText = this.ds_segmentRelMain.getColumn(e.row,"LOADMIDDLESEGMENTCLASSNAME");
        			this.fn_getProcPop("MiddleLoadSegmentClass", nText);
        			break;
        		case nSmallIdx: // 소공정

        			nText = this.ds_segmentRelMain.getColumn(e.row,"LOADSMALLSEGMENTCLASSNAME");
        			this.fn_getProcPop("SmallLoadSegmentClass", nText);
        			break;
        		case nMapXTopIdx: // 대공정 X

        			this.ds_segmentRelMain.setColumn(this.fv_segmentRelPos,"LOADTOPSEGMENTCLASSID" ,"");
        			this.ds_segmentRelMain.setColumn(this.fv_segmentRelPos,"LOADTOPSEGMENTCLASSNAME" ,"");
        			break;
        		case nMapXMidIdx: // 중공정 X

        			this.ds_segmentRelMain.setColumn(this.fv_segmentRelPos,"LOADMIDDLESEGMENTCLASSID" ,"");
        			this.ds_segmentRelMain.setColumn(this.fv_segmentRelPos,"LOADMIDDLESEGMENTCLASSNAME" ,"");
        			break;
        		case nMapXSmallIdx: // 소공정 X

        			this.ds_segmentRelMain.setColumn(this.fv_segmentRelPos,"LOADSMALLSEGMENTCLASSID" ,"");
        			this.ds_segmentRelMain.setColumn(this.fv_segmentRelPos,"LOADSMALLSEGMENTCLASSNAME" ,"");
        			break;

        		default:
        	}

        };

        /*
         * 부하량기준정보 - 표준공정 팝업
         */
        this.tab_search_tabpage_infoSearch_btn_standard_onclick = function(obj,e)
        {
        	var nEnterpriseId 	= this.gf_getEnterpriseId();	//ENTERPRISEID
        	var nSite 			= this.gf_getSiteType();		//Site

        	var popupId = "P_PROCESSSEGMENTID_INFO";
        	var oArg 	= {};
        	var opts 	= "width=800,height=800";

        	// 그리드 내 입력값 있으면
        	var nSearch = this.tab_search.tabpage_infoSearch.form.edt_standard.value;

        	if(!this.gfn_isNull(nSearch))
        	{
        		// 기입력된 값이 있으면
        		oArg.arg_standardId = nSearch;
        	}

        	oArg.arg_rtnCols = "PROCESSSEGMENTID|PROCESSSEGMENTNAME";				// 리턴 받을값

        	this.gfn_openPopup(popupId,"mfm::MFM00201P.xfdl" ,oArg ,opts);
        };

        /*
         * 부하량기준정보 - 품목 팝업
         */
        this.tab_search_tabpage_infoSearch_btn_prdoDefId_onclick = function(obj,e)
        {
        	var nEnterpriseId 	= this.gf_getEnterpriseId();	//ENTERPRISEID
        	var nSite 			= this.gf_getSiteType();		//Site

        	var popupId = "P_PRODUCTDEFID_INFO";
        	var oArg 	= {};
        	var opts 	= "width=800,height=800";

        	// 그리드 내 입력값 있으면
        	var nSearch = this.tab_search.tabpage_infoSearch.form.edt_prdoDefId.value;

        	if(!this.gfn_isNull(nSearch))
        	{
        		// 기입력된 값이 있으면
        		oArg.arg_prodId = nSearch;
        	}
        	oArg.arg_prodType = "Y";			// (21.06.11) 담당자에서 등록된것만 조회 되도록.. 추가

        	oArg.arg_rtnCols = "PRODUCTDEFID|PRODUCTDEFNAME|PRODUCTDEFVERSION";				// 리턴 받을값	(21.05.24 - Rev 추가)

        	this.gfn_openPopup(popupId,"mfm::MFM00200P.xfdl" ,oArg ,opts);
        };


        /*
         * 부하량 기준정보 그리드 팝업
         */
        this.div_work_tab_work_tabpage_info_grd_infoMain_onexpanddown = function(obj,e)
        {
        	var nTopIdx 	= this.div_work.form.tab_work.tabpage_info.form.grd_infoMain.getBindCellIndex("body","LOADTOPSEGMENTCLASSNAME");
        	var nMidIdx 	= this.div_work.form.tab_work.tabpage_info.form.grd_infoMain.getBindCellIndex("body","LOADMIDDLESEGMENTCLASSNAME");
        	var nSmallIdx 	= this.div_work.form.tab_work.tabpage_info.form.grd_infoMain.getBindCellIndex("body","LOADSMALLSEGMENTCLASSNAME");

        	var nMapXTopIdx 	= this.div_work.form.tab_work.tabpage_info.form.grd_infoMain.getBindCellIndex("body","X_T_BTN");
        	var nMapXMidIdx 	= this.div_work.form.tab_work.tabpage_info.form.grd_infoMain.getBindCellIndex("body","X_M_BTN");
        	var nMapXSmallIdx 	= this.div_work.form.tab_work.tabpage_info.form.grd_infoMain.getBindCellIndex("body","X_S_BTN");

        	this.fv_ProdSegmentPos 	= e.row;
        	var nText =	"";
        	switch(e.cell) {
        		case nTopIdx:	// 대공정

        			nText = this.ds_ProdSegmentMain.getColumn(e.row,"LOADTOPSEGMENTCLASSNAME");
        			this.fn_getProcInfoPop("TopLoadSegmentClass", nText);
        			break;
        		case nMidIdx: 	// 중공정

        			nText = this.ds_ProdSegmentMain.getColumn(e.row,"LOADMIDDLESEGMENTCLASSNAME");
        			this.fn_getProcInfoPop("MiddleLoadSegmentClass", nText);
        			break;
        		case nSmallIdx: // 소공정

        			nText = this.ds_ProdSegmentMain.getColumn(e.row,"LOADSMALLSEGMENTCLASSNAME");
        			this.fn_getProcInfoPop("SmallLoadSegmentClass", nText);
        			break;
        		case nMapXTopIdx: // 대공정 X

        			this.ds_ProdSegmentMain.setColumn(this.fv_ProdSegmentPos,"LOADTOPSEGMENTCLASSID" ,"");
        			this.ds_ProdSegmentMain.setColumn(this.fv_ProdSegmentPos,"LOADTOPSEGMENTCLASSNAME" ,"");
        			break;
        		case nMapXMidIdx: // 중공정 X

        			this.ds_ProdSegmentMain.setColumn(this.fv_ProdSegmentPos,"LOADMIDDLESEGMENTCLASSID" ,"");
        			this.ds_ProdSegmentMain.setColumn(this.fv_ProdSegmentPos,"LOADMIDDLESEGMENTCLASSNAME" ,"");
        			break;
        		case nMapXSmallIdx: // 소공정 X

        			this.ds_ProdSegmentMain.setColumn(this.fv_ProdSegmentPos,"LOADSMALLSEGMENTCLASSID" ,"");
        			this.ds_ProdSegmentMain.setColumn(this.fv_ProdSegmentPos,"LOADSMALLSEGMENTCLASSNAME" ,"");
        			break;

        		default:
        	}
        };


        /*
         * 맵핑 화면 -> 붙여 넣기 실행시 값 변경 체크
         */
        this.ds_chkchangedRel = function(obj,e)
        {
        	if(e.columnid == 'CHK')		// 체크되거나, 양품수량의 값이 변경 될때
        	{
        		obj.set_updatecontrol(true);
        	}
        	else if(e.columnid == 'LOADTOPSEGMENTCLASSID'
        		|| e.columnid == 'LOADTOPSEGMENTCLASSNAME'			// 대
        		|| e.columnid == 'LOADMIDDLESEGMENTCLASSID'
        		|| e.columnid == 'LOADMIDDLESEGMENTCLASSNAME'		// 중
        		|| e.columnid == 'LOADSMALLSEGMENTCLASSID'
        		|| e.columnid == 'LOADSMALLSEGMENTCLASSNAME'		// 소
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
         *  대공정 엑셀 임포트
         */
        this.div_work_tab_work_tabpage_Top_btn_xlUpCustom_grd_topMain_onclick = function(obj,e)
        {
        	if(this.gfn_dsIsUpdated(this.ds_topMain))
        	{
        		var btn = this.gfn_confirm("WRITTENBEDELETE", "information", ""); //"입력한 내용이 있으면 현재 작성중인 내용이 모두 삭제됩니다."
        		if(btn == false) return;
        	}
        	this.ds_topMain.clearData();
        	this.Mode = "Excel";
        	this.ds_topMainExcel.clearData();
        	this.gfn_import_excel("ds_topMainExcel", "fn_excel_success_top", "fn_excel_fail_top", "C2", "C2");
        };

        /*
         * 중공정 엑셀 임포트
         */
        this.div_work_tab_work_tabpage_Mid_btn_xlUpCustom_grd_midMain_onclick = function(obj,e)
        {
        	if(this.gfn_dsIsUpdated(this.ds_midMain))
        	{
        		var btn = this.gfn_confirm("WRITTENBEDELETE", "information", ""); //"입력한 내용이 있으면 현재 작성중인 내용이 모두 삭제됩니다."
        		if(btn == false) return;
        	}

        	this.ds_midMain.clearData();

        	this.Mode = "Excel";
        	this.ds_midMainExcel.clearData();
        	this.gfn_import_excel("ds_midMainExcel", "fn_excel_success_mid", "fn_excel_fail_mid", "C2", "C2");
        };
        /*
         * 소공정 엑셀 임포트
         */
        this.div_work_tab_work_tabpage_Small_btn_xlUpCustom_grd_smallMain_onclick = function(obj,e)
        {
        	if(this.gfn_dsIsUpdated(this.ds_smallMain))
        	{
        		var btn = this.gfn_confirm("WRITTENBEDELETE", "information", ""); //"입력한 내용이 있으면 현재 작성중인 내용이 모두 삭제됩니다."
        		if(btn == false) return;
        	}

        	this.ds_smallMain.clearData();

        	this.Mode = "Excel";
        	this.ds_midMainExcel.clearData();
        	this.gfn_import_excel("ds_smallMainExcel", "fn_excel_success_small", "fn_excel_fail_small", "C2", "C2");
        };


        /*
         * 수량 입력 일괄 적용(21.04.26)
         */
        this.div_work_tab_work_tabpage_info_btn_allApply_onclick = function(obj,e)
        {
        	var nChkCnt = this.ds_ProdSegmentMain.getCaseCount("CHK=='1'");
        	// 체크건 확인
        	if (nChkCnt == 0)
        	{
        		this.gfn_Message("NoSelections", "", "warning", "ok");		// 선택된 항목이 없습니다.
        		return;
        	}
        	var nPnlQty = this.div_work.form.tab_work.tabpage_info.form.msk_pnlQty.value;
        	var nTarSegQty = this.div_work.form.tab_work.tabpage_info.form.msk_targetSegmentQty.value;

        	this.ds_ProdSegmentMain.set_enableevent(false);
        	this.div_work.form.tab_work.tabpage_info.form.grd_infoMain.set_enableevent(false);
        	// 체크된 내용 확인
        	var nMainCnt = this.ds_ProdSegmentMain.rowcount;
        	for(var i=0; i<nMainCnt; i++)
        	{
        		var nChk = this.ds_ProdSegmentMain.getColumn(i,"CHK");
        		if(nChk == '1')
        		{
        			this.ds_ProdSegmentMain.setColumn(i,"TARGETPANELQTY"	,nPnlQty);
        			this.ds_ProdSegmentMain.setColumn(i,"TARGETSEGMENTQTY"	,nTarSegQty);
        		}
        	}

        	this.ds_ProdSegmentMain.set_enableevent(true);
        	this.div_work.form.tab_work.tabpage_info.form.grd_infoMain.set_enableevent(true);
        };


        /*
         * 담당자 필터(팝업 호출) - 부하량 기준정보(21.06.30) - 부하량기준정보 필터 담당자 추가
         */
        this.tab_search_tabpage_infoSearch_btn_userId_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId()); 	//ENTERPRISEID
        	sArgs += this.gfn_setParam("PLANTID", this.gf_getSiteType()); 			//Site

        	// 필터의 경우 등록된것만 나오도록 수정 (21.07.26)
        	sArgs += this.gfn_setParam("P_FILTER", "Y"); 							//필터의 경우등록된것만 나오도록 설정

        	this.fn_openPop("OWNERNAME_INFO","P00242", sArgs); // 담당자 필터
        };




        /*
         * 담당자 체크 박스 변경시 수정안되도록 설정
         */
        this.ds_personMain_oncolumnchanged = function(obj,e)
        {
        	/*
        	if(e.columnid == "CHK")
        	{
        		trace("설정 - 열기");
        		this.div_work.form.tab_work.tabpage_Person.form.grd_person.set_enableevent(true);
        		obj.set_enableevent(true);
        		obj.set_updatecontrol(true);
        	}
        	*/


        };

        this.ds_personMain_cancolumnchange = function(obj,e)
        {
        	/*
        	if(e.columnid == "CHK")
        	{
        		trace("설정 - 막기");
        		obj.set_updatecontrol(false);
        		obj.set_enableevent(false);
        		this.div_work.form.tab_work.tabpage_Person.form.grd_person.set_enableevent(false);
        	}
        	*/
        };



        /*
         * 담당자 필터(품목 그룹 호출)
         */
        this.tab_search_tabpage_personSearch_btn_prodGrp_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId()); 	//ENTERPRISEID
        	sArgs += this.gfn_setParam("PLANTID", this.gf_getSiteType()); 			//Site

        	this.fn_openPop("PRODGROUP","P00320", sArgs); // 품목 그룹 필터
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.tabpage_infoSearch.form.btn_searchClear.addEventHandler("onclick",this.fn_initSearch,this);
            this.tab_search.tabpage_infoSearch.form.btn_standard.addEventHandler("onclick",this.tab_search_tabpage_infoSearch_btn_standard_onclick,this);
            this.tab_search.tabpage_infoSearch.form.btn_prdoDefId.addEventHandler("onclick",this.tab_search_tabpage_infoSearch_btn_prdoDefId_onclick,this);
            this.tab_search.tabpage_infoSearch.form.btn_userId.addEventHandler("onclick",this.tab_search_tabpage_infoSearch_btn_userId_onclick,this);
            this.tab_search.tabpage_mapSearch.form.btn_standard.addEventHandler("onclick",this.tab_search_tabpage_mapSearch_btn_standard_onclick,this);
            this.tab_search.tabpage_mapSearch.form.btn_searchClear.addEventHandler("onclick",this.fn_initSearch,this);
            this.tab_search.tabpage_topSearch.form.btn_topProc.addEventHandler("onclick",this.tab_search_tabpage_topSearch_btn_topProc_onclick,this);
            this.tab_search.tabpage_topSearch.form.btn_searchClear.addEventHandler("onclick",this.fn_initSearch,this);
            this.tab_search.tabpage_midSearch.form.btn_midProc.addEventHandler("onclick",this.tab_search_tabpage_midSearch_btn_midProc_onclick,this);
            this.tab_search.tabpage_midSearch.form.btn_searchClear.addEventHandler("onclick",this.fn_initSearch,this);
            this.tab_search.tabpage_smallSearch.form.btn_smallProc.addEventHandler("onclick",this.tab_search_tabpage_smallSearch_btn_smallProc_onclick,this);
            this.tab_search.tabpage_smallSearch.form.btn_searchClear.addEventHandler("onclick",this.fn_initSearch,this);
            this.tab_search.tabpage_personSearch.form.btn_prdoDefId.addEventHandler("onclick",this.tab_search_tabpage_personSearch_btn_prdoDefId_onclick,this);
            this.tab_search.tabpage_personSearch.form.btn_searchClear.addEventHandler("onclick",this.fn_initSearch,this);
            this.tab_search.tabpage_personSearch.form.btn_userId.addEventHandler("onclick",this.tab_search_tabpage_personSearch_btn_userId_onclick,this);
            this.tab_search.tabpage_personSearch.form.btn_prodGrp.addEventHandler("onclick",this.tab_search_tabpage_personSearch_btn_prodGrp_onclick,this);
            this.div_work.form.tab_work.addEventHandler("onchanged",this.div_work_tab_work_onchanged,this);
            this.div_work.form.tab_work.tabpage_info.form.grd_infoMain.addEventHandler("onexpanddown",this.div_work_tab_work_tabpage_info_grd_infoMain_onexpanddown,this);
            this.div_work.form.tab_work.tabpage_info.form.btn_allApply.addEventHandler("onclick",this.div_work_tab_work_tabpage_info_btn_allApply_onclick,this);
            this.div_work.form.tab_work.tabpage_map.form.grd_map.addEventHandler("onexpanddown",this.div_work_tab_work_tabpage_map_grd_map_onexpanddown,this);
            this.div_work.form.tab_work.tabpage_Top.form.btn_del_ds_topMain.addEventHandler("onclick",this.fn_procDelete,this);
            this.div_work.form.tab_work.tabpage_Top.form.btn_add_ds_topMain.addEventHandler("onclick",this.fn_procAdd,this);
            this.div_work.form.tab_work.tabpage_Top.form.btn_copyRowTop.addEventHandler("onclick",this.fn_procCopy,this);
            this.div_work.form.tab_work.tabpage_Top.form.btn_xlUpCustom_grd_topMain.addEventHandler("onclick",this.div_work_tab_work_tabpage_Top_btn_xlUpCustom_grd_topMain_onclick,this);
            this.div_work.form.tab_work.tabpage_Mid.form.btn_add_ds_midMain.addEventHandler("onclick",this.fn_procAdd,this);
            this.div_work.form.tab_work.tabpage_Mid.form.btn_copyRowMid.addEventHandler("onclick",this.fn_procCopy,this);
            this.div_work.form.tab_work.tabpage_Mid.form.btn_del_ds_midMain.addEventHandler("onclick",this.fn_procDelete,this);
            this.div_work.form.tab_work.tabpage_Mid.form.btn_xlUpCustom_grd_midMain.addEventHandler("onclick",this.div_work_tab_work_tabpage_Mid_btn_xlUpCustom_grd_midMain_onclick,this);
            this.div_work.form.tab_work.tabpage_Small.form.btn_add_ds_smallMain.addEventHandler("onclick",this.fn_procAdd,this);
            this.div_work.form.tab_work.tabpage_Small.form.btn_copyRowSma.addEventHandler("onclick",this.fn_procCopy,this);
            this.div_work.form.tab_work.tabpage_Small.form.btn_del_ds_smallMain.addEventHandler("onclick",this.fn_procDelete,this);
            this.div_work.form.tab_work.tabpage_Small.form.btn_xlUpCustom_grd_smallMain.addEventHandler("onclick",this.div_work_tab_work_tabpage_Small_btn_xlUpCustom_grd_smallMain_onclick,this);
            this.div_work.form.tab_work.tabpage_Person.form.grd_person.addEventHandler("onexpanddown",this.div_work_tab_work_tabpage_Person_grd_00_onexpanddown,this);
            this.div_work.form.tab_work.tabpage_Person.form.btn_setUse.addEventHandler("onclick",this.div_work_tab_work_tabpage_Person_btn_setUse_onclick,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_header.form.btn_save00.addEventHandler("onclick",this.fn_save,this);
            this.ds_ProdSegmentMain.addEventHandler("cancolumnchange",this.ds_chkChang,this);
            this.ds_ProdSegmentMain.addEventHandler("oncolumnchanged",this.ds_chkchanged,this);
            this.ds_segmentRelMain.addEventHandler("cancolumnchange",this.ds_chkChang,this);
            this.ds_segmentRelMain.addEventHandler("oncolumnchanged",this.ds_chkchangedRel,this);
            this.ds_topMain.addEventHandler("cancolumnchange",this.ds_chkChang,this);
            this.ds_topMain.addEventHandler("oncolumnchanged",this.ds_chkchanged,this);
            this.ds_personMain.addEventHandler("oncolumnchanged",this.ds_personMain_oncolumnchanged,this);
            this.ds_personMain.addEventHandler("cancolumnchange",this.ds_personMain_cancolumnchange,this);
            this.ds_midMain.addEventHandler("cancolumnchange",this.ds_chkChang,this);
            this.ds_midMain.addEventHandler("oncolumnchanged",this.ds_chkchanged,this);
            this.ds_smallMain.addEventHandler("cancolumnchange",this.ds_chkChang,this);
            this.ds_smallMain.addEventHandler("oncolumnchanged",this.ds_chkchanged,this);
            this.ds_prodTypeList.addEventHandler("cancolumnchange",this.ds_chkChang,this);
            this.ds_prodTypeList.addEventHandler("oncolumnchanged",this.ds_chkchanged,this);
            this.ds_prodDivisioList.addEventHandler("cancolumnchange",this.ds_chkChang,this);
            this.ds_prodDivisioList.addEventHandler("oncolumnchanged",this.ds_chkchanged,this);
            this.ds_topMainExcel.addEventHandler("cancolumnchange",this.ds_chkChang,this);
            this.ds_topMainExcel.addEventHandler("oncolumnchanged",this.ds_chkchanged,this);
            this.ds_midMainExcel.addEventHandler("cancolumnchange",this.ds_chkChang,this);
            this.ds_midMainExcel.addEventHandler("oncolumnchanged",this.ds_chkchanged,this);
            this.ds_smallMainExcel.addEventHandler("cancolumnchange",this.ds_chkChang,this);
            this.ds_smallMainExcel.addEventHandler("oncolumnchanged",this.ds_chkchanged,this);
            this.ds_prodTypeGridComboList.addEventHandler("cancolumnchange",this.ds_chkChang,this);
            this.ds_prodTypeGridComboList.addEventHandler("oncolumnchanged",this.ds_chkchanged,this);
        };
        this.loadIncludeScript("MFM00200M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
