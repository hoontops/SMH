(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS00300M");
            this.set_titletext("UOM관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"CONDITIONVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_uomClass", this);
            obj._setContents("<ColumnInfo><Column id=\"UOMCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"UOMCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_uomGroupList", this);
            obj._setContents("<ColumnInfo><Column id=\"UOMCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"UOMCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_uomList", this);
            obj._setContents("<ColumnInfo><Column id=\"UOMDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"UOMDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UOMCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISADD\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_uomMap", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"UOMCATEGORY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_uomMapList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"UOMDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"UOMDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UOMCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ISADD\" type=\"STRING\" size=\"256\"/><Column id=\"UOMCATEGORY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Button("btn_clear2","171","75","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","75","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
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

            obj = new Static("Static12_00_00_00_01_00_00",null,"55","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","81","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
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

            obj = new Edit("edtConditionValue","108","35","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_readonly("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

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
            obj.set_text("UOM 그룹");
            obj.set_tooltiptext("UOMCLASS");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Grid("grd_basEnterprise","0","35",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_uomClass");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell tooltiptext=\"MEASURINGENTERPRISEID\"/><Cell col=\"1\" text=\"UOM 그룹 ID\" tooltiptext=\"UOMCLASSID\"/><Cell col=\"2\" text=\"UOM 그룹 명\" tooltiptext=\"UOMCLASSNAME\"/><Cell col=\"3\" text=\"유효상태\" tooltiptext=\"VALIDSTATE\"/><Cell col=\"4\" text=\"생성자\" tooltiptext=\"CREATOR\"/><Cell col=\"5\" text=\"생성일\" tooltiptext=\"CREATEDTIME\"/><Cell col=\"6\" text=\"수정자\" tooltiptext=\"MODIFIER\"/><Cell col=\"7\" text=\"수정일\" tooltiptext=\"MODIFIEDTIME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" edittype=\"none\" editmaxlength=\"50\" editimemode=\"none\" editinputtype=\"numberandenglish,digit,dot,comma,sign\" editinputfilter=\"none\" textAlign=\"left\" displaytype=\"number\"/><Cell col=\"1\" text=\"bind:UOMCLASSID\" edittype=\"none\" editinputmode=\"normal\" editmaxlength=\"160\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:UOMCLASSNAME\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:VALIDSTATE_NM\" edittype=\"none\" displaytype=\"normal\" combocodecol=\"C,ValidState,SEL,Y,Y\" combopopuptype=\"none\" combobuttonsize=\"0 0\" combodisplayrowcount=\"0\"/><Cell col=\"4\" text=\"bind:CREATOR\"/><Cell col=\"5\" text=\"bind:CREATEDTIME\" edittype=\"none\" displaytype=\"text\" calendardisplaynulltype=\"none\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"6\" text=\"bind:MODIFIER\"/><Cell col=\"7\" text=\"bind:MODIFIEDTIME\" displaytype=\"text\" calendardisplaynulltype=\"none\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","5","0","165","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("UOM 그룹 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("UOMCLASSLIST");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_uomClass","sta_subTitle:17","0","200","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab);
            obj.set_text("UOM 정의");
            obj.set_tooltiptext("UOMDEFINITION");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Grid("grd_uomMap","0","400","300",null,null,"0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds_uomMap");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"206\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell tooltiptext=\"MEASURINGENTERPRISEID\"/><Cell col=\"1\" text=\"UOM Map\" tooltiptext=\"UOMMAP\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" edittype=\"none\" editmaxlength=\"50\" editimemode=\"none\" editinputtype=\"numberandenglish,digit,dot,comma,sign\" editinputfilter=\"none\" textAlign=\"left\" displaytype=\"number\"/><Cell col=\"1\" text=\"bind:UOMCATEGORY\" edittype=\"expr:comp.parent.parent.parent.parent.parent.parent.ds_uomMap.getRowType(currow) ==2 ? &apos;normal&apos;:&apos;none&apos;\" editinputmode=\"normal\" editmaxlength=\"160\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_uomGroupList","0","35","300",null,null,"grd_uomMap:54",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_uomGroupList");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell tooltiptext=\"MEASURINGENTERPRISEID\"/><Cell col=\"1\" text=\"UOM 그룹아이디\" tooltiptext=\"UOMCLASSID\"/><Cell col=\"2\" text=\"UOM 그룹 명\" tooltiptext=\"UOMCLASSNAME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" edittype=\"none\" editmaxlength=\"50\" editimemode=\"none\" editinputtype=\"numberandenglish,digit,dot,comma,sign\" editinputfilter=\"none\" textAlign=\"left\" displaytype=\"number\"/><Cell col=\"1\" text=\"bind:UOMCLASSID\" edittype=\"none\" editinputmode=\"normal\" editmaxlength=\"160\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:UOMCLASSNAME\" edittype=\"none\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00_00",null,"346","58",null,"323","315",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("10");
            obj.set_text("h15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_uomList","grd_uomGroupList:5","35",null,null,"0","Static12_00_00_00_01_00_00_00:0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_uomList");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"UOM 그룹 ID\" tooltiptext=\"UOMCLASSID\"/><Cell col=\"2\" text=\"UOM ID\" tooltiptext=\"UOMDEFID\"/><Cell col=\"3\" text=\"UOM 명\" tooltiptext=\"UOMCLASSNAME\"/><Cell col=\"4\" text=\"설명\" tooltiptext=\"DESCRIPTION\"/><Cell col=\"5\" text=\"유효상태\" tooltiptext=\"VALIDSTATE\"/><Cell col=\"6\" text=\"생성일\" tooltiptext=\"CREATEDTIME\"/><Cell col=\"7\" text=\"수정일\" tooltiptext=\"MODIFIEDTIME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" edittype=\"none\" editmaxlength=\"50\" editimemode=\"none\" editinputtype=\"numberandenglish,digit,dot,comma,sign\" editinputfilter=\"none\" textAlign=\"left\" displaytype=\"number\"/><Cell col=\"1\" text=\"bind:UOMCLASSID\" edittype=\"none\" editinputmode=\"normal\" editmaxlength=\"160\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:UOMDEFID\"/><Cell col=\"3\" text=\"bind:UOMDEFNAME\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:DESCRIPTION\"/><Cell col=\"5\" text=\"bind:VALIDSTATE_NM\" edittype=\"none\" displaytype=\"normal\" combocodecol=\"C,ValidState,SEL,Y,Y\" combopopuptype=\"none\" combobuttonsize=\"0 0\" combodisplayrowcount=\"0\"/><Cell col=\"6\" text=\"bind:CREATEDTIME\" edittype=\"none\" displaytype=\"normal\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" text=\"bind:MODIFIEDTIME\" displaytype=\"normal\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_uomMapList","grd_uomMap:5","400",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_uomMapList");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"UOM 그룹 ID\" tooltiptext=\"UOMCLASSID\"/><Cell col=\"2\" text=\"UOM ID\" tooltiptext=\"UOMDEFID\"/><Cell col=\"3\" text=\"UOM 명\" tooltiptext=\"UOMCLASSNAME\"/><Cell col=\"4\" text=\"설명\" tooltiptext=\"DESCRIPTION\"/><Cell col=\"5\" text=\"유효상태\" tooltiptext=\"VALIDSTATE\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" edittype=\"none\" editmaxlength=\"50\" editimemode=\"none\" editinputtype=\"numberandenglish,digit,dot,comma,sign\" editinputfilter=\"none\" textAlign=\"left\" displaytype=\"number\"/><Cell col=\"1\" text=\"bind:UOMCLASSID\" edittype=\"none\" editinputmode=\"normal\" editmaxlength=\"160\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:UOMDEFID\"/><Cell col=\"3\" text=\"bind:UOMDEFNAME\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:DESCRIPTION\"/><Cell col=\"5\" text=\"bind:VALIDSTATE_NM\" edittype=\"none\" displaytype=\"normal\" combocodecol=\"C,ValidState,SEL,Y,Y\" combopopuptype=\"none\" combobuttonsize=\"0 0\" combodisplayrowcount=\"0\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"385","58","15","323",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("9");
            obj.set_text("h15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_addUom","60.19%",null,"24","24",null,"Static12_00_00_00_01_00_00:0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_shuttleB");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static30","btn_addUom:0","361","10","24",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("6");
            obj.set_text("w\r\n10");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_delUom","Static30:0",null,"24","24",null,"Static12_00_00_00_01_00_00:0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_shuttleT");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","5","0","300","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("7");
            obj.set_text("UOM 그룹 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("UOMCLASSLIST");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_subTitle00","grd_uomGroupList:5","0","425","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("8");
            obj.set_text("UOM 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("UOMDEFLIST");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_uomMap","276",null,"29","24",null,"grd_uomMap:0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_delRow",null,null,"29","24","btn_xlDn_grd_uomMap:0","grd_uomMap:0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_addRow",null,null,"29","24","btn_delRow:0","grd_uomMap:0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_uomList",null,null,"29","24","0","grd_uomList:0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_subTitle01","5",null,"203","34",null,"grd_uomMap:0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("15");
            obj.set_text("UOM Map");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("UOMMAP");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_subTitle01_00","306",null,"203","34",null,"grd_uomMap:1",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("16");
            obj.set_text("UOM 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("UOMDEFLIST");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_uomMapList",null,null,"29","24","0","grd_uomMapList:0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

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

            obj = new Button("btn_saveUom",null,"16","26","24","btn_help:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","100","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_text("UOM 관리");
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
        this.addIncludeScript("BAS00300M.xfdl","lib::lib_bas.xjs");
        this.registerScript("BAS00300M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: UOM 관리
         * 파일명 		: BAS00300M.xfdl
         * 작성자 		: 최성민
         * 작성일 		: 2021.02.23
         *
         * 설  명		: 기준관리 - UOM 관리 화면
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.02.23	최성민   	최초작성
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
        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.fn_formInit();
        	this.basfn_saveBtn(this.div_header.form.btn_saveUom); //저장버튼 공통처리 함수 호출
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.fn_searchClass();			//1.1 : 탭1 UOM 그룹 리스트 조회
        	this.fn_searchUOMClassList();	//2.1 : 탭2 UOM 그룹 리스트 조회
        	this.fn_searchUOMMapList()		//2.2 : 탭2 UOM Map 조회
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
        		if (trId == "selectUomClassList")
        		{

        		} else if (trId == "selectUomGroupList") {
        			if(this.ds_uomGroupList.rowcount>0){
        				this.ds_uomGroupList.set_rowposition(0);
        				this.selectUomList(0);
        			}
        		} else if (trId == "selectUomMapList") {
        			if(this.ds_uomMap.rowcount>0){
        				this.ds_uomMap.set_rowposition(0);
        				this.fn_searchUOMMapDataList(0);
        			}
        		} else if (trId == "saveUomList") {
        			this.fn_search();
        		}
        	}
        };


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 기능 : 최초 호출되는 초기화 함수
         */
        this.fn_formInit = function ()
        {
        	this.searchDiv.cboValidState.set_value("Valid");
        }

        /*
         * 기능 : 1.1 UOM 그룹리스트 조회 함수
         */
        this.fn_searchClass = function ()
        {
        	this.ds_uomClass.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0, "VALIDSTATE", this.tab_search.Tabpage1.form.cboValidState.value);
        	this.ds_search.setColumn(0, "CONDITIONVALUE", this.tab_search.Tabpage1.form.edtConditionValue.value);

        	var sSvcID 			= "selectUomClassList";
        	var sController 	= "/bas00300/selectUomClassList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_uomClass=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 2.1 UOM 그룹 조회
         */
        this.fn_searchUOMClassList = function ()
        {
        	this.ds_uomGroupList.clearData();
        	this.ds_uomList.clearData();
        	var sSvcID 			= "selectUomGroupList";
        	var sController 	= "/bas00300/selectUomClassList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_uomGroupList=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        /*
         * 기능 : 2.2 UOM MAP 조회
         */
        this.fn_searchUOMMapList = function ()
        {
        	this.ds_uomMap.clearData();
        	this.ds_uomMapList.clearData();
        	var sSvcID 			= "selectUomMapList";
        	var sController 	= "/bas00300/selectUomMapList.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_uomMap=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 2.3 UOM Detail 조회
         */
        this.selectUomList = function (rowPosition)
        {
        	this.ds_uomList.clearData();
        	var uomClassId = this.ds_uomGroupList.getColumn(rowPosition, "UOMCLASSID");
        	var validState = this.ds_uomGroupList.getColumn(rowPosition, "VALIDSTATE");
        	var uomCategory = this.ds_uomMap.getColumn(this.ds_uomMap.rowposition, "UOMCATEGORY");

        	var sSvcID 			= "selectUomList";
        	var sController 	= "/bas00300/selectUomList.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_uomList=output";
        	var sArgs 			= this.gfn_setParam("UOMCLASSID", uomClassId);
        		sArgs 			+= this.gfn_setParam("VALIDSTATE", validState);
        		sArgs 			+= this.gfn_setParam("UOMCATEGORY", uomCategory);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 2.4 UOM Mapping Data 조회
         */
        this.fn_searchUOMMapDataList = function (rowPosition)
        {
        	this.ds_uomMapList.clearData();
        	var uomCategory = this.ds_uomMap.getColumn(rowPosition, "UOMCATEGORY");

        	var sSvcID 			= "selectUomMapDataList";
        	var sController 	= "/bas00300/selectUomMapDataList.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_uomMapList=output";
        	var sArgs 			= this.gfn_setParam("UOMCATEGORY", uomCategory);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.ds_uomGroupList_canrowposchange = function(obj,e)
        {
        	if(e.newrow < 0 || e.newrow == e.oldrow) return;
        	this.selectUomList(e.newrow);
        };

        this.ds_uomMap_canrowposchange = function(obj,e)
        {
        	if(e.newrow < 0 || e.newrow == e.oldrow) return;
        	this.selectUomList(this.ds_uomGroupList.rowposition);
        	this.fn_searchUOMMapDataList(e.newrow);
        };

        /*
         *	기능 : UOM 추가
         */
        this.fn_addUom = function(obj,e)
        {
        	if(this.ds_uomList.rowposition >=0){
        		var uomClassId 		= this.ds_uomList.getColumn(this.ds_uomList.rowposition, "UOMCLASSID");
        		var uomDefId 		= this.ds_uomList.getColumn(this.ds_uomList.rowposition, "UOMDEFID");
        		var uomCategory 	= this.ds_uomMap.getColumn(this.ds_uomMap.rowposition, "UOMCATEGORY");
        		var sRow 			= this.ds_uomMapList.findRowExpr("UOMCLASSID == '"+uomClassId
        															+"'&& UOMDEFID=='" + uomDefId +"'");

        		if(this.nfn_isNull(uomCategory)){
        			this.gfn_Message("REQUIREDITEM", this.nfn_nvl(this.nfn_getDictionarynameUpper("UOMMAP"),"UOM Map"), "warning", "ok");
        			return;
        		}
        		//이미 존재하는 값
        		if(sRow>=0){
        			this.gfn_Message("OspDataOverlapCheck", "", "warning", "ok");
        			return;
        		}
        		var row 	= this.ds_uomMapList.insertRow(this.ds_uomMapList.rowcount+1);
        		this.ds_uomMapList.setRowType(row, Dataset.ROWTYPE_INSERT);
        		this.ds_uomMapList.copyRow(row,this.ds_uomList,this.ds_uomList.rowposition);
        		this.ds_uomList.deleteRow(this.ds_uomList.rowposition);
        		this.ds_uomMapList.setColumn(row, "UOMCATEGORY", uomCategory);
        	} else {
        		this.gfn_Message("NoSelections", "", "warning", "ok");
        		return;
        	}
        };

        /*
         *	기능 : UOM 삭제
         */
        this.fn_delUom = function(obj,e)
        {
        	if(this.ds_uomMapList.rowposition >=0){
        		var uomClassId = this.ds_uomMapList.getColumn(this.ds_uomMapList.rowposition, "UOMCLASSID");
        		var uomDefId = this.ds_uomMapList.getColumn(this.ds_uomMapList.rowposition, "UOMDEFID");
        		var sRow 	= this.ds_uomList.findRowExpr("UOMCLASSID == '"+uomClassId
        													+"'&& UOMDEFID=='" + uomDefId +"'");
        		//이미 존재하지 않을 경우에만 위로 복사
        		if(sRow<0){
        			var row 	= this.ds_uomList.insertRow(this.ds_uomList.rowposition+1);
        			var bSucc 	= this.ds_uomList.copyRow(row,this.ds_uomMapList,this.ds_uomMapList.rowposition);
        		}
        		this.ds_uomMapList.deleteRow(this.ds_uomMapList.rowposition);
        	} else {
        		this.gfn_Message("NoSelections", "", "warning", "ok");
        		return;
        	}
        };
        this.fn_save = function(obj,e)
        {
        	if (!this.gfn_dsIsUpdated(this.ds_uomMapList) )
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveUomList";
        	var sController 	= "/bas00300/saveUomList.do";
        	var sInDatasets 	= "INPUT=ds_uomMapList:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.fn_add = function(obj,e)
        {
        	this.ds_uomMap.set_enableevent(false);
        	var nRow = this.ds_uomMap.addRow();
        	this.selectUomList(this.ds_uomGroupList.rowposition);
        	this.fn_searchUOMMapDataList(nRow);
        	this.ds_uomMap.set_enableevent(true);
        };

        this.fn_delete = function(obj,e)
        {
        	var wrkTp = this.ds_uomMap.getRowType(this.ds_uomMap.rowposition);
        	if(wrkTp==Dataset.ROWTYPE_INSERT){
        		this.ds_uomMap.deleteRow(this.ds_uomMap.rowposition);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tabpage1.form.btn_clear2.addEventHandler("onclick",this.fn_formInit,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.div_work.form.tab.Tabpage2.form.btn_addUom.addEventHandler("onclick",this.fn_addUom,this);
            this.div_work.form.tab.Tabpage2.form.btn_delUom.addEventHandler("onclick",this.fn_delUom,this);
            this.div_work.form.tab.Tabpage2.form.btn_delRow.addEventHandler("onclick",this.fn_delete,this);
            this.div_work.form.tab.Tabpage2.form.btn_addRow.addEventHandler("onclick",this.fn_add,this);
            this.div_header.form.btn_saveUom.addEventHandler("onclick",this.fn_save,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.ds_uomGroupList.addEventHandler("canrowposchange",this.ds_uomGroupList_canrowposchange,this);
            this.ds_uomMap.addEventHandler("canrowposchange",this.ds_uomMap_canrowposchange,this);
        };
        this.loadIncludeScript("BAS00300M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
