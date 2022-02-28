(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS00400M");
            this.set_titletext("작업장 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"CONDITIONVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_areaListTab1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME_KR\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME_US\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME_CN\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME_VN\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"AREATYPE\" type=\"STRING\" size=\"256\"/><Column id=\"AREATYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"OWNTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FACTORYID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSENAME\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISSUBCONTRACT\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_areaList", this);
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME_KR\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME_US\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME_CN\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME_VN\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"AREATYPE\" type=\"STRING\" size=\"256\"/><Column id=\"AREATYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"OWNTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FACTORYID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSENAME\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISSUBCONTRACT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_resourceListTab1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"STEPCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"STEPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISOSPINSPCONTROL\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"STEPTYPEKEY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_resourceList", this);
            obj._setContents("<ColumnInfo><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"STEPCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"STEPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISOSPINSPCONTROL\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tree", this);
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANM\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"FACTORYID\" type=\"STRING\" size=\"256\"/><Column id=\"AREATYPE\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREALVL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_area", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_factory", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_step", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_checkNow", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_checkNowParam", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Button("btn_clear2","171","50","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","50","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"0","15","300","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","0","15","300",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"30","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","56","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staValidState","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("유효상태");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("VALIDSTATE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cboValidState","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_codecolumn("C,ValidState,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03",null,"0","45","10","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00",null,"30","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_01",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_search);
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("staValidState","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("유효상태");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("VALIDSTATE");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cboValidState","108","35","165","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_codecolumn("C,ValidState,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_search","15","125","146","36",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_clear2","171","125","102","36",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","0","15","300",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"0","15","300","0",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","131","10","27",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("6");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"105","45","20","91",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("7");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_01",null,"55","45","5","91",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("8");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("9");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03",null,"0","45","10","228",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("10");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00",null,"55","45","5","228",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("11");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("label00_00","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("12");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("STOPSITE");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cboSite","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("13");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_01_00",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("14");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("staSearchType","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("15");
            obj.set_text("조회조건");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("WORKTYPE");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cboSearchType","108","60","165","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("16");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("edtSearchValue","108","85","165","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("17");
            obj.set_readonly("false");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_01_00_00",null,"30","45","5","228",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("18");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","281","34",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"1","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_formscrollbarsize("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","112","-63","101","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("서브타이틀");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tab","0","0",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab);
            obj.set_text("작업장 등록");
            obj.set_tooltiptext("AREAREGIST");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Grid("treeArea","0","35","250",null,null,"0",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_cssclass("grd_tree");
            obj.set_binddataset("ds_tree");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeuseexpandkey("true");
            obj.set_treeusecheckbox("false");
            obj.set_treeusebutton("use");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"260\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" text=\"bind:AREANM\" treestartlevel=\"0\" treelevel=\"bind:AREALVL\" autosizecol=\"none\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_areaListTab1","treeArea:10","35",null,null,"0","52.81%",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_areaListTab1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" tooltiptext=\"AREAID\" text=\"작업장 코드\"/><Cell col=\"2\" tooltiptext=\"AREANAME_KR\" text=\"작업장(K)\"/><Cell col=\"3\" tooltiptext=\"AREANAME_US\" text=\"작업장(E)\"/><Cell col=\"4\" tooltiptext=\"AREANAME_CN\" text=\"작업장(C)\"/><Cell col=\"5\" tooltiptext=\"AREANAME_VN\" text=\"작업장(V)\"/><Cell col=\"6\" tooltiptext=\"WAREHOUSEID\" text=\"창고 코드\"/><Cell col=\"7\" tooltiptext=\"WAREHOUSENAME\" text=\"창고 명\"/><Cell col=\"8\" tooltiptext=\"VENDORID\" text=\"거래처 ID\"/><Cell col=\"9\" tooltiptext=\"VENDORNAME\" text=\"거래처명\"/><Cell col=\"10\" tooltiptext=\"AREATYPE\" text=\"작업장 Type\" cssclass=\"cell_point\"/><Cell col=\"11\" tooltiptext=\"OWNTYPE\" text=\"자사구분\" cssclass=\"cell_point\"/><Cell col=\"12\" tooltiptext=\"ISSUBCONTRACT\" text=\"무상사급여부\"/><Cell col=\"13\" tooltiptext=\"VALIDSTATE\" text=\"유효상태\" cssclass=\"cell_point\"/><Cell col=\"14\" tooltiptext=\"CREATOR\" text=\"생성자\"/><Cell col=\"15\" tooltiptext=\"CREATEDTIME\" text=\"생성일\"/><Cell col=\"16\" tooltiptext=\"MODIFIER\" text=\"수정자\"/><Cell col=\"17\" tooltiptext=\"MODIFIEDTIME\" text=\"수정일\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:AREAID\" displaytype=\"text\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:AREANAME_KR\" edittype=\"normal\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:AREANAME_US\" edittype=\"normal\" displaytype=\"text\"/><Cell col=\"4\" text=\"bind:AREANAME_CN\" edittype=\"normal\" displaytype=\"text\"/><Cell col=\"5\" text=\"bind:AREANAME_VN\" edittype=\"normal\" displaytype=\"text\"/><Cell col=\"6\" text=\"bind:WAREHOUSEID\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" expandsize=\"24\"/><Cell col=\"7\" text=\"bind:WAREHOUSENAME\"/><Cell col=\"8\" text=\"bind:VENDORID\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" expandsize=\"24\"/><Cell col=\"9\" text=\"bind:VENDORNAME\"/><Cell col=\"10\" text=\"bind:AREATYPE\" combocodecol=\"C,AreaType,,Y,Y\" displaytype=\"combocontrol\" edittype=\"combo\" cssclass=\"point\"/><Cell col=\"11\" text=\"bind:OWNTYPE\" combocodecol=\"C,OwnType,,Y,Y\" displaytype=\"combocontrol\" edittype=\"combo\" cssclass=\"point\"/><Cell col=\"12\" text=\"bind:ISSUBCONTRACT\" combocodecol=\"C,YesNo,,Y,Y\" displaytype=\"combocontrol\" edittype=\"combo\"/><Cell col=\"13\" text=\"bind:VALIDSTATE\" combocodecol=\"C,ValidState,,Y,Y\" displaytype=\"combocontrol\" edittype=\"combo\" cssclass=\"point\"/><Cell col=\"14\" text=\"bind:CREATOR\"/><Cell col=\"15\" text=\"bind:CREATEDTIME\" displaytype=\"text\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"16\" text=\"bind:MODIFIER\"/><Cell col=\"17\" text=\"bind:MODIFIEDTIME\" displaytype=\"text\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","260","0","165","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("작업장 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("AREALIST");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_areaListTab1","sta_subTitle:17","0","200","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("StaticTitleBOM","0","0","230","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("작업장 트리");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("TREEAREALIST");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_subTitle00","260","grd_areaListTab1:2","165","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("자원 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("RESOURCELIST");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_resourceListTab1","sta_subTitle00:17","grd_areaListTab1:2","200","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_resourceListTab1","treeArea:10","sta_cnt_ds_resourceListTab1:4",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_resourceListTab1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" tooltiptext=\"RESOURCETYPE\" text=\"자원유형\"/><Cell col=\"2\" tooltiptext=\"EQUIPMENTCLASSID\" text=\"설비그룹 코드\"/><Cell col=\"3\" text=\"설비그룹 명\" tooltiptext=\"EQUIPMENTCLASSNAME\"/><Cell col=\"4\" text=\"자원 코드\" tooltiptext=\"RESOURCEID\"/><Cell col=\"5\" text=\"자원명\"/><Cell col=\"6\" text=\"스탭유형\"/><Cell col=\"7\" text=\"작업단위\"/><Cell col=\"8\" text=\"외주검사여부\"/><Cell col=\"9\" text=\"작업장 코드\" tooltiptext=\"AREAID\"/><Cell col=\"10\" tooltiptext=\"VALIDSTATE\" text=\"유효상태\" cssclass=\"cell_point\"/><Cell col=\"11\" text=\"생성자\" tooltiptext=\"CREATOR\"/><Cell col=\"12\" tooltiptext=\"CREATEDTIME\" text=\"생성일\"/><Cell col=\"13\" tooltiptext=\"MODIFIER\" text=\"수정자\"/><Cell col=\"14\" tooltiptext=\"MODIFIEDTIME\" text=\"수정일\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:RESOURCETYPE\" combocodecol=\"C,EquipmentType,,Y,Y\" edittype=\"expr:dataset.getRowType(currow) ==2 ? &apos;combo&apos;:&apos;none&apos;\" displaytype=\"combotext\"/><Cell col=\"2\" text=\"bind:EQUIPMENTCLASSID\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"expr:dataset.getRowType(currow) ==2 ? &apos;show&apos;:&apos;hide&apos;\" expandsize=\"24\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:EQUIPMENTCLASSNAME\" displaytype=\"expr:dataset.getRowType(currow) ==2 ? &apos;editcontrol&apos;:&apos;normal&apos;\" edittype=\"expr:dataset.getRowType(currow) ==2 ? &apos;normal&apos;:&apos;none&apos;\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:RESOURCEID\" displaytype=\"expr:dataset.getRowType(currow) ==2 ? &apos;editcontrol&apos;:&apos;normal&apos;\" edittype=\"expr:dataset.getRowType(currow) ==2 ? &apos;normal&apos;:&apos;none&apos;\" expandshow=\"hide\" expandsize=\"24\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:DESCRIPTION\" displaytype=\"expr:dataset.getRowType(currow) ==2 ? &apos;editcontrol&apos;:&apos;normal&apos;\" edittype=\"expr:dataset.getRowType(currow) ==2 ? &apos;normal&apos;:&apos;none&apos;\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:STEPCLASS\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,StepType,null,Y,Y\"/><Cell col=\"7\" text=\"bind:STEPTYPE\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:ISOSPINSPCONTROL\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,YesNo,null,Y,Y\"/><Cell col=\"9\" text=\"bind:AREAID\" expandshow=\"hide\" expandsize=\"24\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:VALIDSTATE\" cssclass=\"point\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,ValidState,,Y,Y\"/><Cell col=\"11\" text=\"bind:CREATOR\"/><Cell col=\"12\" text=\"bind:CREATEDTIME\" displaytype=\"text\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"13\" text=\"bind:MODIFIER\"/><Cell col=\"14\" text=\"bind:MODIFIEDTIME\" displaytype=\"text\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_addRowArea",null,"6","29","24","87",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_delRowArea",null,"6","29","24","58",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            obj.set_text("");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_copyRowArea",null,"6","29","24","29",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_grdCopy");
            obj.set_tooltiptext("GridCopyRow");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_areaListTab1",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_addRowResource",null,null,"29","24","87","grd_resourceListTab1:0",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            obj.set_visible("false");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_delRowResource",null,null,"29","24","58","grd_resourceListTab1:0",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            obj.set_text("");
            obj.set_visible("false");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_copyRowResource",null,null,"29","24","29","grd_resourceListTab1:0",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_grdCopy");
            obj.set_tooltiptext("GridCopyRow");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_resourceListTab1",null,null,"29","24","0","grd_resourceListTab1:0",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab);
            obj.set_text("작업장 현황");
            obj.set_tooltiptext("AREASTATUS");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Grid("grd_areaList","0","35",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_areaList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell tooltiptext=\"AREAID\" text=\"작업장 코드\"/><Cell col=\"1\" tooltiptext=\"AREANAME_KR\" text=\"작업장(K)\"/><Cell col=\"2\" tooltiptext=\"AREANAME_US\" text=\"작업장(E)\"/><Cell col=\"3\" tooltiptext=\"AREANAME_CN\" text=\"작업장(C)\"/><Cell col=\"4\" tooltiptext=\"AREANAME_VN\" text=\"작업장(V)\"/><Cell col=\"5\" tooltiptext=\"WAREHOUSEID\" text=\"창고 코드\"/><Cell col=\"6\" tooltiptext=\"WAREHOUSENAME\" text=\"창고 명\"/><Cell col=\"7\" tooltiptext=\"VENDORID\" text=\"거래처 ID\"/><Cell col=\"8\" tooltiptext=\"VENDORNAME\" text=\"거래처 명\"/><Cell col=\"9\" tooltiptext=\"AREATYPENM\" text=\"작업장 Type\"/><Cell col=\"10\" tooltiptext=\"PARENTAREAID\" text=\"상위 작업장 코드\"/><Cell col=\"11\" tooltiptext=\"OWNTYPE\" text=\"자사구분\"/><Cell col=\"12\" tooltiptext=\"FACTORYID\" text=\"공장 코드\"/><Cell col=\"13\" text=\"무상사급여부\" tooltiptext=\"ISSUBCONTRACT\"/><Cell col=\"14\" tooltiptext=\"VALIDSTATE\" text=\"유효여부\"/><Cell col=\"15\" tooltiptext=\"CREATOR\" text=\"생성자\"/><Cell col=\"16\" tooltiptext=\"CREATEDTIME\" text=\"생성일\"/><Cell col=\"17\" tooltiptext=\"MODIFIER\" text=\"수정자\"/><Cell col=\"18\" tooltiptext=\"MODIFIEDTIME\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:AREAID\" textAlign=\"center\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:AREANAME_KR\" textAlign=\"center\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:AREANAME_US\" textAlign=\"center\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:AREANAME_CN\" textAlign=\"center\" displaytype=\"text\"/><Cell col=\"4\" text=\"bind:AREANAME_VN\" textAlign=\"center\" displaytype=\"text\"/><Cell col=\"5\" text=\"bind:WAREHOUSEID\" textAlign=\"center\" displaytype=\"text\"/><Cell col=\"6\" text=\"bind:WAREHOUSENAME\" textAlign=\"center\" displaytype=\"text\"/><Cell col=\"7\" text=\"bind:VENDORID\" textAlign=\"center\" displaytype=\"text\"/><Cell col=\"8\" text=\"bind:VENDORNAME\" textAlign=\"center\" displaytype=\"text\"/><Cell col=\"9\" text=\"bind:AREATYPE\" displaytype=\"text\" combocodecol=\"C,AreaType,,Y,N\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:PARENTAREAID\" displaytype=\"text\" combodataset=\"ds_area\" combocodecol=\"CODE\" combodatacol=\"NAME\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:OWNTYPE\" combocodecol=\"C,OwnType,,Y,N\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"12\" text=\"bind:FACTORYID\" displaytype=\"text\" combodataset=\"ds_factory\" combocodecol=\"CODE\" combodatacol=\"NAME\" textAlign=\"center\"/><Cell col=\"13\" text=\"bind:ISSUBCONTRACT\" combocodecol=\"C,YesNo,,Y,N\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"14\" text=\"bind:VALIDSTATE\" combocodecol=\"C,ValidState,,Y,N\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"15\" text=\"bind:CREATOR\" textAlign=\"center\" displaytype=\"text\"/><Cell col=\"16\" text=\"bind:CREATEDTIME\" textAlign=\"center\" displaytype=\"text\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"17\" text=\"bind:MODIFIER\" textAlign=\"center\" displaytype=\"text\"/><Cell col=\"18\" text=\"bind:MODIFIEDTIME\" textAlign=\"center\" displaytype=\"text\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","5","0","300","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("작업장 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("AREALIST");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_areaList",null,null,"29","24","0","grd_areaList:0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_areaList","sta_subTitle:17","0","200","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.div_work.form.tab);
            obj.set_text("자원 현황");
            obj.set_tooltiptext("RESOURCESTATTUS");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","5","0","300","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_text("자원 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("RESOURCELIST");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Grid("grd_resourceList","0","35",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_resourceList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell tooltiptext=\"RESOURCETYPE\" text=\"자원유형\"/><Cell col=\"1\" text=\"자원 코드\" tooltiptext=\"RESOURCEID\"/><Cell col=\"2\" text=\"자원명\"/><Cell col=\"3\" text=\"스탭유형\"/><Cell col=\"4\" text=\"작업단위\"/><Cell col=\"5\" text=\"외주검사여부\"/><Cell col=\"6\" text=\"Site ID\"/><Cell col=\"7\" text=\"작업장 코드\" tooltiptext=\"AREAID\"/><Cell col=\"8\" text=\"작업장\"/><Cell col=\"9\" tooltiptext=\"EQUIPMENTCLASSID\" text=\"설비그룹 코드\"/><Cell col=\"10\" text=\"설비그룹 명\" tooltiptext=\"EQUIPMENTCLASSNAME\"/><Cell col=\"11\" tooltiptext=\"VALIDSTATE\" text=\"유효상태\"/><Cell col=\"12\" text=\"생성자\" tooltiptext=\"CREATOR\"/><Cell col=\"13\" tooltiptext=\"CREATEDTIME\" text=\"생성일\"/><Cell col=\"14\" tooltiptext=\"MODIFIER\" text=\"수정자\"/><Cell col=\"15\" tooltiptext=\"MODIFIEDTIME\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:RESOURCETYPE_NM\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:RESOURCEID\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:DESCRIPTION\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:STEPCLASS\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:STEPTYPE\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:ISOSPINSPCONTROL\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:PLANTID\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:AREAID\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:AREANAME\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:EQUIPMENTCLASSID\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:EQUIPMENTCLASSNAME\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:VALIDSTATE_NM\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"12\" text=\"bind:CREATOR\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"13\" text=\"bind:CREATEDTIME\" displaytype=\"text\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"14\" text=\"bind:MODIFIER\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"15\" text=\"bind:MODIFIEDTIME\" displaytype=\"text\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_resourceList",null,null,"29","24","0","grd_resourceList:0",null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_resourceList","sta_subTitle:17","0","200","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_basMasterdataclass",null,"33","29",null,"0","tab:0",null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","3",null,null,null,null,null,this.div_header.form);
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

            obj = new Button("btn_saveArea",null,"16","26","24","btn_help:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","100","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_text("작업장 관리");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:10","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAS00400M.xfdl","lib::lib_bas.xjs");
        this.registerScript("BAS00400M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: UOM 관리
         * 파일명 		: BAS00400M.xfdl
         * 작성자 		: 최성민
         * 작성일 		: 2021.02.24
         *
         * 설  명		: 기준관리 - 작업장 관리 화면
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.02.24	최성민   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.searchDiv1 = this.tab_search.Tabpage1.form;
        this.searchDiv2 = this.tab_search.Tabpage2.form;
        this.formDiv1 = this.div_work.form.tab.Tabpage1.form;
        this.g_positionTree; //저장 후 위치고정을 위한 전역변수
        this.g_position; //저장 후 위치고정을 위한 전역변수
        this.g_positionA; //저장 후 위치고정을 위한 전역변수
        this.g_treeId;
        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.fn_formInit();
        	this.basfn_saveBtn(this.div_header.form.btn_saveArea); //저장버튼 공통처리 함수 호출
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        this.fn_save = function(obj,e)
        {
        	if (!this.gfn_dsIsUpdated(this.ds_areaListTab1) && !this.gfn_dsIsUpdated(this.ds_resourceListTab1) )
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}

        	//작업장 그리드 필수값 체크
        	var rtn = this.fn_GridKeyCheckArea();
        	if (rtn == false) return;
        	this.g_positionTree = this.ds_tree.rowposition;
        	this.g_position = this.ds_areaListTab1.rowposition;
        	this.g_treeId = this.ds_tree.getColumn(this.ds_tree.rowposition, "AREAID");
        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveArea";
        	var sController 	= "/bas00400/saveArea.do";
        	var sInDatasets 	= "INPUT_AREA=ds_areaListTab1:U INPUT_RESOURCE=ds_resourceListTab1:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	var tabIdx = this.div_work.form.tab.tabindex;
        	switch (tabIdx)
        	{
        		case 0:
        			this.fn_searchAreaTreeList();		//탭1 작업장 트리 조회
        		break;
        		case 1:
        			this.fn_searchAreaList();			//탭2 작업장 조회
        		break;
        		case 2:
        			this.fn_searchResourceList();		//탭3 자원조회
        		break;
        	}
        };

        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		if (trId == "saveArea")
        		{
        			var msgArray = errMsg.split(("|"));
        			if(msgArray.length==2) {
        				this.gfn_Message(msgArray[0], "\n"+msgArray[1], "error", "ok");
        			} else {
        				this.gfn_Message("ProcessingError", "\n"+errMsg, "error", "ok");
        			}
        		} else {
        			this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        		}
        	}
        	else
        	{
        		if (trId == "selectAreaTreeList")
        		{

        			// 이전 선택 값 확인
        			var nRowPos = this.ds_tree.findRow("AREAID",this.g_treeId);

        			if(nRowPos == 0){
        				this.fn_tab1AreaList();
        			} else if(nRowPos > 0)
        			{
        				this.ds_tree.set_rowposition(nRowPos);
        			} else {
        				var idx = 0;
        				if(!this.nfn_isNull(this.g_positionTree)){
        					idx = this.g_positionTree;
        				}
        				this.ds_tree.set_rowposition(idx);
        			}



        			//this.fn_tab1AreaList();

        		} else if (trId == "selectTab1AreaList") {
        			if(this.ds_areaListTab1.rowcount>0){
        				var idx = 0;
        				if(!this.nfn_isNull(this.g_position)){
        					idx = this.g_position;
        					this.ds_areaListTab1.set_rowposition(idx);
        				} else {
        					this.fn_tab1ResourceList(idx);
        				}
        			} else {
        				this.fn_tab1ResourceList(-1);
        			}
        		} else if (trId == "selectUomMapList") {
        			if(this.ds_uomMap.rowcount>0){
        				this.ds_uomMap.set_rowposition(0);
        				this.fn_searchUOMMapDataList(0);
        			}
        		} else if (trId == "saveArea") {
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.fn_searchAreaTreeList();
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

        	if(svcId =="GRD_WAREHOUSE" || svcId =="GRD_VENDOR"){
        		oArg.arg_rtnCols = "CODE|NAME";
        	} else if(svcId =="GRD_EQUIPMENT"){
        		oArg.arg_type = "C";
        		opts = "width=800,height=500";
        		oArg.arg_rtnCols = "EQUIPMENTCLASSID"
        						 +"|EQUIPMENTCLASSNAME"
        						 +"|TOPEQUIPMENTCLASSID"
        						 +"|TOPEQUIPMENTCLASS"
        						 +"|MIDDLEEQUIPMENTCLASSID"
        						 +"|MIDDLEEQUIPMENTCLASS"
        						 +"|DESCRIPTION"
        						 +"|EQUIPMENTCLASSTYPE";
        	}
        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        }

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId =="GRD_WAREHOUSE"){
        		var nRow = this.ds_areaListTab1.rowposition;
        		this.ds_areaListTab1.setColumn(nRow, "WAREHOUSEID", rtn[0]);
        		this.ds_areaListTab1.setColumn(nRow, "WAREHOUSENAME", rtn[1]);
        	}
        	if(sPopupId =="GRD_VENDOR"){
        		var nRow = this.ds_areaListTab1.rowposition;
        		this.ds_areaListTab1.setColumn(nRow, "VENDORID", rtn[0]);
        		this.ds_areaListTab1.setColumn(nRow, "VENDORNAME", rtn[1]);
        	}
        	if(sPopupId =="GRD_EQUIPMENT"){
        		var areaId = this.ds_areaListTab1.getColumn(this.ds_areaListTab1.rowposition, "AREAID");
        		var areaNm = this.ds_areaListTab1.getColumn(this.ds_areaListTab1.rowposition, "AREANAME_"+ this.gf_getLanguageType().substr(3,5)) ;
        		var plantId = this.ds_areaListTab1.getColumn(this.ds_areaListTab1.rowposition, "PLANTID");

        		for(var i=0; i<rtn.length; i++){
        				var colArray = rtn[i];

        				var equipmentClassId = colArray[0];
        				var equipmentClassName = colArray[1];
        				var topClassId	= colArray[7];

        				var resourceClassId = "Machine"; //ResourceClassId = Machine 고정 값
        				var resourceTypeEquipment = topClassId;   // EquipmentType
        				var resourceId = areaId + equipmentClassId;
        				var resourceNm = areaNm + "-" + equipmentClassName;
        				var sRow 			= this.ds_resourceListTab1.findRowExpr("EQUIPMENTCLASSID == '"+equipmentClassId+"'");

        				//이미 존재하는 값
        				if(sRow>=0){
        					this.gfn_Message("OspDataOverlapCheck", equipmentClassId, "warning", "ok");
        					return;
        				}

        				if(i==0){
        					addRow = this.ds_resourceListTab1.rowposition;
        				} else {
        					addRow = this.ds_resourceListTab1.addRow();
        				}

        				this.ds_resourceListTab1.setColumn(addRow, "RESOURCECLASSID", resourceClassId);
        				this.ds_resourceListTab1.setColumn(addRow, "RESOURCETYPE", resourceTypeEquipment);
        				this.ds_resourceListTab1.setColumn(addRow, "EQUIPMENTCLASSID", equipmentClassId);
        				this.ds_resourceListTab1.setColumn(addRow, "EQUIPMENTCLASSNAME", equipmentClassName);

        				this.ds_resourceListTab1.setColumn(addRow, "RESOURCEID", resourceId);
        				this.ds_resourceListTab1.setColumn(addRow, "DESCRIPTION", resourceNm);

        				//resource Id 만듦
        				this.ds_resourceListTab1.setColumn(addRow, "PLANTID", plantId);
        				this.ds_resourceListTab1.setColumn(addRow, "AREAID", areaId);
        				this.ds_resourceListTab1.setColumn(addRow, "AREANAME", areaNm);
        				this.ds_resourceListTab1.setColumn(addRow, "VALIDSTATE", "Valid");
        		}
        	}
        }

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 기능 : 최초 호출되는 초기화 함수
         */
        this.fn_init1 = function ()
        {
        	this.searchDiv1.cboValidState.set_value("Valid");
        }

        this.fn_init2 = function ()
        {
        	this.searchDiv2.cboValidState.set_value("Valid");
        	this.searchDiv2.cboSite.set_value(this.gf_getSiteType());
        	this.searchDiv2.cboSearchType.set_value("ALLVIEWS");
        	this.searchDiv2.edtSearchValue.set_value("");
        }

        this.fn_formInit = function ()
        {
        	this.searchDiv1.cboValidState.set_value("Valid");
        	this.searchDiv2.cboValidState.set_value("Valid");

        	/* Site 코드 조회 */
        	this.basfn_setCustomQueryCmb(this.searchDiv2.cboSite // Object
        								, "selectSiteList,,Y,A" // OPTION
        								, null);	  // 추가 파라미터
        	this.searchDiv2.cboSite.set_value(this.gf_getSiteType());

        	/* 상위 작업장 ID 조회용 DS */
        	this.ds_area.clearData();
        	var sSvcID 			= "selectAreaList";
        	var sController 	= "/basCommon/selectCustomQuery.do";
        	var sInDatasets   	= "";
        	var sOutDatasets  	= "ds_area=output";
        	var sArgs 		  	= "";
        	sArgs 			+= this.gfn_setParam("SQL_ID", "selectAreaList");
        	sArgs 			+= this.gfn_setParam("PLANTID", this.searchDiv2.cboSite.value);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, true);

        	/* 공장 ID 조회용 DS */
        	this.ds_factory.clearData();
        	var sSvcID 			= "selectFactoryList";
        	var sController 	= "/basCommon/selectCustomQuery.do";
        	var sInDatasets   	= "";
        	var sOutDatasets  	= "ds_factory=output";
        	var sArgs 		  	= "";
        	sArgs 			+= this.gfn_setParam("SQL_ID", "selectFactoryList");
        	sArgs 			+= this.gfn_setParam("PLANTID", this.searchDiv2.cboSite.value);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, true);

        	/* Step명 조회용 DS */
        	this.ds_step.clearData();
        	var sSvcID 			= "selectStepList";
        	var sController 	= "/basCommon/selectCustomQuery.do";
        	var sInDatasets   	= "";
        	var sOutDatasets  	= "ds_step=output";
        	var sArgs 		  	= "";
        	sArgs 			+= this.gfn_setParam("SQL_ID", "selectStepList");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, true);

        	this.fn_search();
        }


        /*
         * 기능 : 탭1. 작업장 트리 조회
         */
        this.fn_searchAreaTreeList = function ()
        {
        	this.ds_tree.clearData();
        	this.ds_areaListTab1.clearData();
        	var validState = this.searchDiv1.cboValidState.value;
        	var sSvcID 			= "selectAreaTreeList";
        	var sController 	= "/bas00400/selectAreaTreeList.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_tree=output";
        	var sArgs 			= "";
        		sArgs 			+= this.gfn_setParam("VALIDSTATE", validState);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 탭1. 작업장 리스트 조회
         */
        this.fn_tab1AreaList = function (rowPosition)
        {
        	this.ds_areaListTab1.clearData();
        	this.ds_resourceListTab1.clearData();
        	var validState = this.searchDiv1.cboValidState.value;
        	var parentId = this.ds_tree.getColumn(rowPosition, "AREAID");
        	var areaLvl = this.ds_tree.getColumn(rowPosition, "AREALVL");
        	var areaType = "null";
        	var nodeAreaType = this.ds_tree.getColumn(rowPosition, "AREATYPE");
        	var searchKey	= "";//this.div_work.form.tab.Tabpage1.form.div_00.form.edtSearchKey.value;

        	if(areaLvl=="1"){
        		areaType = "Factory";
        	} else if(areaLvl=="2"){
        		areaType = "Floor";
        	} else if(areaLvl=="3"){
        		areaType = "Area";
        	}


        	//2021.03.03 정원식 과장 요청 (2레벨에서는 층만 입력가능하도록 수정)
        	var objGrid = this.formDiv1.grd_areaListTab1;
        	var colNum = this.nfn_GetColNum(objGrid, "AREATYPE");

        	if(areaLvl=="2" && parentId!="9"){ //사외외주가 아닌경우만 해당
        		objGrid.setCellProperty("Body",colNum,"edittype","none");
        	} else {
        		objGrid.setCellProperty("Body",colNum,"edittype","combo");
        	}

        	var sSvcID 			= "selectTab1AreaList";
        	var sController 	= "/bas00400/selectAreaList.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_areaListTab1=output";
        	var sArgs 			= "";
        		sArgs 			+= this.gfn_setParam("VALIDSTATE", validState);
        		sArgs 			+= this.gfn_setParam("PARENTAREAID", parentId);
        		sArgs 			+= this.gfn_setParam("AREATYPE", areaType);
        		sArgs 			+= this.gfn_setParam("SEARCHKEY", searchKey);
        		sArgs 			+= this.gfn_setParam("PLANTID", this.gf_getSiteType());
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 탭1. 자원리스트 조회
         */
        this.fn_tab1ResourceList = function (rowPosition)
        {
        	this.ds_resourceListTab1.clearData();
        	var areaId = this.ds_areaListTab1.getColumn(rowPosition, "AREAID");
        	var areaType = this.ds_areaListTab1.getColumn(rowPosition, "AREATYPE");
        	var validState = this.searchDiv1.cboValidState.value;
        	//if(this.nfn_isNull(areaId)) return;

        	//작업장이 아니면 자원추가 불가
        	if(areaType!="Area"){
        		this.formDiv1.btn_addRowResource.set_visible(false);
        		this.formDiv1.btn_delRowResource.set_visible(false);
        	} else {
        		this.formDiv1.btn_addRowResource.set_visible(true);
        		this.formDiv1.btn_delRowResource.set_visible(true);
        	}

        	var sSvcID 			= "selectTab1ResourceList";
        	var sController 	= "/bas00400/selectResourceList.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_resourceListTab1=output";
        	var sArgs 			= "";
        		sArgs 			+= this.gfn_setParam("AREAID", this.nfn_nvl(areaId,"-1"));
        		sArgs 			+= this.gfn_setParam("VALIDSTATE", validState);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        /*
         * 기능 : 탭2. 작업장현황 조회
         */
        this.fn_searchAreaList = function (rowPosition)
        {
        	this.ds_areaList.clearData();
        	var validState = this.searchDiv2.cboValidState.value;
        	var plantId = this.searchDiv2.cboSite.value;
        	var searchType = this.searchDiv2.cboSearchType.value;
        	var searchValue = this.searchDiv2.edtSearchValue.value;

        	var sSvcID 			= "selectSearchAreaList";
        	var sController 	= "/bas00400/selectAreaList.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_areaList=output";
        	var sArgs 			= "";
        		sArgs 			+= this.gfn_setParam("PLANTID", plantId);
        		sArgs 			+= this.gfn_setParam("VALIDSTATE", validState);
        		sArgs 			+= this.gfn_setParam("SEARCHTYPE", searchType);
        		sArgs 			+= this.gfn_setParam("SEARCHVALUE", searchValue);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 탭3. 자원현황 조회
         */
        this.fn_searchResourceList = function (rowPosition)
        {
        	this.ds_resourceList.clearData();
        	var validState = this.searchDiv2.cboValidState.value;
        	var plantId = this.searchDiv2.cboSite.value;
        	var searchType = this.searchDiv2.cboSearchType.value;
        	var searchValue = this.searchDiv2.edtSearchValue.value;

        	var sSvcID 			= "selectResourceList";
        	var sController 	= "/bas00400/selectResourceList.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_resourceList=output";
        	var sArgs 			= "";
        		sArgs 			+= this.gfn_setParam("VALIDSTATE", validState);
        		sArgs 			+= this.gfn_setParam("PLANTID", plantId);
        		sArgs 			+= this.gfn_setParam("SEARCHTYPE", searchType);
        		sArgs 			+= this.gfn_setParam("SEARCHVALUE", searchValue);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 작업장 추가
         */
        this.fn_addArea = function(obj,e)
        {
        	var dsObj = this.ds_areaListTab1;
        	if(dsObj == null) return;
        	var row = dsObj.addRow();
        	var rowPosition = this.ds_tree.rowposition;
        	var parentId = this.ds_tree.getColumn(rowPosition, "PARENTAREAID");
        	var areaLvl = this.ds_tree.getColumn(rowPosition, "AREALVL");
        	var areaType = this.ds_tree.getColumn(rowPosition, "AREATYPE");
        	var parentAreaId = parentId=="*" ? "" : parentId;

        	if(this.nfn_isNull(areaType)){
        		dsObj.setColumn(row,"AREATYPE","Factory");
        	} else if(areaType=="Floor"){
        		dsObj.setColumn(row,"ISSUBCONTRACT","N");
        		dsObj.setColumn(row,"AREATYPE","Area");
        	} else {
        		dsObj.setColumn(row,"AREATYPE",areaType=="Factory" ? "Floor" : "Area");
        		dsObj.setColumn(row,"FACTORYID",parentId);
        	}

        	if(areaType=="Area"){
        		dsObj.setColumn(row,"AREAID",parentId);
        	}

        	if(parentId=="9"){ //사외외주인 경우 작업장 Type은 층으로 고정 2021-05-14 최창선 차장 요청
        		dsObj.setColumn(row,"AREATYPE","Floor");
        	}

        	/* KEY컬럼 기본세팅 */
        	dsObj.setColumn(row,"ENTERPRISEID",this.gf_getEnterpriseId());//ENTERPRISEID
        	dsObj.setColumn(row,"VALIDSTATE","Valid");			//유효여부
        	dsObj.setColumn(row,"PARENTAREAID",parentId);
        	dsObj.setColumn(row,"FACTORYID",parentId);

        };

        /*
         * 기능 : 작업장 삭제
         */
        this.fn_deleteArea = function(obj,e)
        {
        	//공통함수
        	this.basfn_deleteRow(this.ds_areaListTab1);
        };

        /*
         * 기능 : 자원 추가
         */
        this.fn_addResource = function(obj,e)
        {
        	var areaId = this.ds_areaListTab1.getColumn(this.ds_areaListTab1.rowposition, "AREAID");
        	if(this.nfn_isNull(areaId)) {
        		this.gfn_Message("NoAreaSelected", "", "warning", "ok");
        		return;
        	}

        	var dsObj = this.ds_resourceListTab1;
        	if(dsObj == null) return;
        	var row = dsObj.addRow();

        	/* KEY컬럼 기본세팅 */
        	dsObj.setColumn(row,"ENTERPRISEID",this.gf_getEnterpriseId());//ENTERPRISEID
        	dsObj.setColumn(row,"VALIDSTATE","Valid");			//유효여부
        	dsObj.setColumn(row,"AREAID",areaId);
        };

        /*
         * 기능 : 자원 삭제
         */
        this.fn_deleteResource = function(obj,e)
        {
        	//공통함수
        	this.basfn_deleteRow(this.ds_resourceListTab1);
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.div_work_tab_onchanged = function(obj,e)
        {
        	if(e.postindex==0){
        		this.tab_search.set_tabindex(0);
        	} else {
        		this.tab_search.set_tabindex(1);
        		var addParam = "";
        		if(e.postindex==1){
        			addParam = "ALLVIEWS|AREAID|AREANAME";
        		} else if(e.postindex==2){
        			addParam = "ALLVIEWS|RESOURCEID|RESOURCENAME";
        		}
        			/* 조회조건 조회 */
        			this.basfn_setCustomQueryCmb(this.searchDiv2.cboSearchType // Object
        								, "selectCustomCodeList,,Y,A" // OPTION
        								, this.gfn_setParam("ADD_PARAM", addParam));	  // 추가 파라미터
        			this.searchDiv2.cboSearchType.set_value("ALLVIEWS");
        	}
        };

        this.ds_tree_canrowposchange = function(obj,e)
        {
        	if(e.newrow<0)return;


        	var bOk = true;
        	if (this.gfn_dsIsUpdated(this.ds_areaListTab1) || this.gfn_dsIsUpdated(this.ds_resourceListTab1)) {
        		bOk = this.gfn_Message("WRITTENBEDELETE", null, "conf", "yesno");
        	}
        	if(bOk){
        		this.fn_tab1AreaList(e.newrow);
        	} else {
        		return false;
        	}
        };

        this.ds_areaListTab1_canrowposchange = function(obj,e)
        {
        	if(e.newrow<0)return;
        	var bOk = true;
        	if (this.gfn_dsIsUpdated(this.ds_resourceListTab1)) {
        		bOk = this.gfn_Message("WRITTENBEDELETE", null, "conf", "yesno");
        	}
        	if(bOk)this.fn_tab1ResourceList(e.newrow);
        };

        this.div_work_tab_Tabpage1_grd_areaListTab1_onexpandup = function(obj,e)
        {
        	if(e.row < 0) return;
        	if (this.nfn_isEqualCol(obj, e.cell, "WAREHOUSEID")) {
        		this.fn_openPop("GRD_WAREHOUSE","P00107"); //창고 조회
        	} else if (this.nfn_isEqualCol(obj, e.cell, "VENDORID")) {
        		this.fn_openPop("GRD_VENDOR","P00108"); //거래처 조회
        	}
        };

        /*
         * 그리드 필수값 검증 (Custom)
         */
        this.fn_GridKeyCheckArea = function()
        {
        	var objGrid = this.div_work.form.tab.Tabpage1.form.grd_areaListTab1;
        	var strColIdList = "";
         	var blnRtn = true;
         	var objData = this.all[objGrid.binddataset];
        	var dsObj = this.ds_areaListTab1;
         	for(var i=0; i < objData.getRowCount(); i++) {
         	  if (objData.getRowType(i) == 2 || objData.getRowType(i) == 4){
        		var ownType = objData.getColumn(i, "OWNTYPE");	//자사구분
        		var productType = objData.getColumn(i, "MASTERDATACLASSID");
        		var vendorId = objData.getColumn(i, "VENDORID");
        		strColIdList = "AREATYPE,OWNTYPE,VALIDSTATE";

        		var arrColId = strColIdList.split(",");
        		for(var j=0; j<arrColId.length; j++) {
        			if(this.gfn_isNull(objData.getColumn(i, arrColId[j]))) {
        				var colId = this.nfn_GetColNum(objGrid, arrColId[j]);
        				var title = this.nfn_nvl(this.nfn_getDictionarynameUpper(arrColId[j]),objGrid.getCellProperty("head", colId, "text"))
        				this.gfn_Message("InputSomeThing",title , "warning","ok");//alert(arrTitle[j]+"을(를) 입력 해주세요");
        				objData.set_rowposition(i);
        				objGrid.setFocus();
        				objGrid.setCellPos(colId);
        				objGrid.showEditor(true);
        				blnRtn = false;
        				return false;
        			}
        		}

        		//자사구분이 외주는 거래처가 필수
        		//2021-05-28 거래처 필수 제외, 최창선 차장 요청
        		/*
        		if(this.nfn_isNull(vendorId) && (ownType=="InHouseOSP"
        									  || ownType=="OutsideOSP"
        									  || ownType=="MajorSuppliers") ){
        			this.gfn_Message("OWNTYPEOSP",title , "warning","ok");
        			colId = this.nfn_GetColNum(objGrid, "OWNTYPE");
        			objData.set_rowposition(i);
        			objGrid.setFocus();
        			objGrid.setCellPos(colId);
        			objGrid.showEditor(true);
        			blnRtn = false;
        			return false;
        		}
        		*/
        	  }
         	}
         	return blnRtn;
        }

        this.div_work_tab_Tabpage1_div_00_btn_search03_onclick = function(obj,e)
        {
        	this.g_treeId = this.ds_tree.getColumn(this.ds_tree.rowposition, "AREAID");

        	var searchKey = "";//this.div_work.form.tab.Tabpage1.form.div_00.form.edtSearchKey.value;
        	if(this.nfn_isNull(searchKey)) {
        		this.ds_tree.filter("");
        	} else {
        		this.ds_tree.filter("AREANM.toUpperCase().indexOf('"+searchKey.toUpperCase()+"') >= 0");
        	}

        	// 이전 선택 값 확인
        	var nRowPos = this.ds_tree.findRow("AREAID",this.g_treeId);

        	if(nRowPos != -1)
        	{
        		this.ds_tree.set_rowposition(nRowPos);
        	} else {
        		this.ds_tree.set_rowposition(0);
        	}

        	this.g_treeId 	= "";				// 조회시 이전에 선택한 tree값
        };

        this.div_work_tab_Tabpage1_grd_resourceListTab1_onexpandup = function(obj,e)
        {
        	if(e.row < 0) return;
        	if (this.nfn_isEqualCol(obj, e.col, "EQUIPMENTCLASSID")) {
        		this.fn_openPop("GRD_EQUIPMENT","P00113"); //설비 조회
        	}
        };

        /*
         * Step 변경시 Step명 조회하여 보여줌
         */
        this.ds_resourceListTab1_onvaluechanged = function(obj,e)
        {
        	if (e.columnid == "STEPCLASS") {
        		var sRow 		= this.ds_step.findRowExpr("CODE == '"+e.newvalue+"'");
        		var stepName 	= this.ds_step.getColumn(sRow, "NAME");
        		var stepTypeKey	= this.ds_step.getColumn(sRow, "DESCRIPTION");

        		this.ds_resourceListTab1.setColumn(e.row, "STEPTYPE", stepName);
        		this.ds_resourceListTab1.setColumn(e.row, "STEPTYPEKEY", stepTypeKey);
        	}
        };

        this.div_work_tab_Tabpage1_grd_resourceListTab1_oncloseup = function(obj,e)
        {
        	this.formDiv1.grd_resourceListTab1.updateToDataset();
        };

        this.fn_copyArea = function(obj,e)
        {
        	this.basfn_copyDataset(this.ds_areaListTab1, null, "CREATOR,MODIFIER,CREATEDTIME,MODIFIEDTIME");
        };

        this.fn_copyResource = function(obj,e)
        {
        	this.basfn_copyDataset(this.ds_resourceListTab1, null, "CREATOR,MODIFIER,CREATEDTIME,MODIFIEDTIME");
        };

        this.div_work_tab_Tabpage1_div_00_edtSearchKey_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.div_work_tab_Tabpage1_div_00_btn_search03_onclick();
        	}
        };

        this.div_work_tab_Tabpage1_btn_grdReload_onclick = function(obj,e)
        {
        	//this.div_work.form.tab.Tabpage1.form.div_00.form.edtSearchKey.set_value("");
        	this.ds_tree.filter("");
        	this.ds_tree.clearData();
        	this.ds_areaListTab1.clearData();
        	this.g_treeId 	= "";				// 조회시 이전에 선택한 tree값
        	this.fn_searchAreaTreeList();
        };

        this.ds_areaListTab1_oncolumnchanged = function(obj,e)
        {
        	//2021-08-04 통테3차 결함리스트 #1479  - 정원식 대리 요청
        	//현재공 있는경우 미사용처리 불가처리
        	var objGrid = this.div_work.form.tab.Tabpage1.form.grd_resourceListTab1;
        	var colNum = this.nfn_GetColNum(objGrid, "VALIDSTATE");

        	if(e.columnid=="VALIDSTATE"){
        		if(e.newvalue=="Invalid"){
        			this.ds_checkNowParam.clearData();
        			this.ds_checkNow.clearData();
        			this.ds_checkNowParam.addRow();
        			this.ds_checkNowParam.setColumn(0, "AREAID", this.ds_areaListTab1.getColumn(e.row, "AREAID"));

        			var sSvcID 			= "selectCheckLot";
        			var sController 	= "/bas00400/selectCheckLot.do";
        			var sInDatasets 	= "INPUT=ds_checkNowParam";
        			var sOutDatasets 	= "ds_checkNow=output";
        			var sArgs 			= "";
        			this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, false);

        			if(this.ds_checkNow.rowcount>0){
        				this.gfn_Message("CantInvalidProcess", "", "warning", "ok");
        				this.ds_areaListTab1.setColumn(e.row, "VALIDSTATE", "Valid");
        				return;
        			}
        			for(var i=0; i < this.ds_resourceListTab1.rowcount; i++){
        				this.ds_resourceListTab1.setColumn(i, "VALIDSTATE", "Invalid");
        				objGrid.setCellProperty("Body",colNum,"edittype","none");
        			}
        		} else {
        			for(var i=0; i < this.ds_resourceListTab1.rowcount; i++){
        				this.ds_resourceListTab1.setColumn(i, "VALIDSTATE", "Valid");
        				objGrid.setCellProperty("Body",colNum,"edittype","combo");
        			}
        		}
        	}
        };

        this.div_work_tab_Tabpage1_grd_areaListTab1_oncloseup = function(obj,e)
        {
        	obj.updateToDataset();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tabpage1.form.btn_clear2.addEventHandler("onclick",this.fn_init1,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage2.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage2.form.btn_clear2.addEventHandler("onclick",this.fn_init2,this);
            this.div_work.form.tab.addEventHandler("onchanged",this.div_work_tab_onchanged,this);
            this.div_work.form.tab.Tabpage1.form.grd_areaListTab1.addEventHandler("onexpandup",this.div_work_tab_Tabpage1_grd_areaListTab1_onexpandup,this);
            this.div_work.form.tab.Tabpage1.form.grd_areaListTab1.addEventHandler("oncloseup",this.div_work_tab_Tabpage1_grd_areaListTab1_oncloseup,this);
            this.div_work.form.tab.Tabpage1.form.grd_resourceListTab1.addEventHandler("onexpandup",this.div_work_tab_Tabpage1_grd_resourceListTab1_onexpandup,this);
            this.div_work.form.tab.Tabpage1.form.grd_resourceListTab1.addEventHandler("oncloseup",this.div_work_tab_Tabpage1_grd_resourceListTab1_oncloseup,this);
            this.div_work.form.tab.Tabpage1.form.btn_addRowArea.addEventHandler("onclick",this.fn_addArea,this);
            this.div_work.form.tab.Tabpage1.form.btn_delRowArea.addEventHandler("onclick",this.fn_deleteArea,this);
            this.div_work.form.tab.Tabpage1.form.btn_copyRowArea.addEventHandler("onclick",this.fn_copyArea,this);
            this.div_work.form.tab.Tabpage1.form.btn_addRowResource.addEventHandler("onclick",this.fn_addResource,this);
            this.div_work.form.tab.Tabpage1.form.btn_delRowResource.addEventHandler("onclick",this.fn_deleteResource,this);
            this.div_work.form.tab.Tabpage1.form.btn_copyRowResource.addEventHandler("onclick",this.fn_copyResource,this);
            this.div_header.form.btn_saveArea.addEventHandler("onclick",this.fn_save,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.ds_areaListTab1.addEventHandler("canrowposchange",this.ds_areaListTab1_canrowposchange,this);
            this.ds_areaListTab1.addEventHandler("oncolumnchanged",this.ds_areaListTab1_oncolumnchanged,this);
            this.ds_resourceListTab1.addEventHandler("onvaluechanged",this.ds_resourceListTab1_onvaluechanged,this);
            this.ds_tree.addEventHandler("canrowposchange",this.ds_tree_canrowposchange,this);
        };
        this.loadIncludeScript("BAS00400M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
