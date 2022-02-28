(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS00900M");
            this.set_titletext("사유코드 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"REASONCODECLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"MIDDLETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODECLASSID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_reasonCodeClass", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"REASONCODECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODECLASSNAME_KR\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODECLASSNAME_US\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODECLASSNAME_CN\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODECLASSNAME_VN\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTREASONCODECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODECLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODECLASSNAME_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODECLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_srchReasonCodeClass", this);
            obj._setContents("<ColumnInfo><Column id=\"REASONCODECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODECLASSNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_reasonCodeClass2", this);
            obj._setContents("<ColumnInfo><Column id=\"REASONCODECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODECLASSNAME_KR\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODECLASSNAME_US\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODECLASSNAME_CN\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODECLASSNAME_VN\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTREASONCODECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODECLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODECLASSNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_reasonCode", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"REASONCODEID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODENAME_KR\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODENAME_US\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODENAME_CN\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODENAME_VN\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAYSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODENAME_KEY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Button("btn_clear2","171","100","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","100","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
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

            obj = new Static("Static12_00_00_00_01_00_00",null,"80","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","106","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staValidState","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("유효상태");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("VALIDSTATE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_validState","108","35","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
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

            obj = new Static("Static12_00_00_00_01_00_03_00",null,"55","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_01",null,"55","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staReasonCode","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("사유코드타입");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("VALIDSTATE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00",null,"30","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_01_00",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_reasonCode","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_codecolumn("C,ReasonCodeType,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staMiddleType","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("사유코드그룹명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("REASONCODECLASSNAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_middleType","108","60","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_innerdataset("ds_srchReasonCodeClass");
            obj.set_codecolumn("REASONCODECLASSID");
            obj.set_datacolumn("REASONCODECLASSNAME");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
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
            obj.set_text("사유코드 그룹");
            obj.set_tooltiptext("REASONCODECLASS");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Grid("grd_reasonCodeClass","0","35",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_reasonCodeClass");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"30\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" tooltiptext=\"REASONCODECLASSID\" text=\"사유코드 그룹 ID\" cssclass=\"cell_point\"/><Cell col=\"3\" tooltiptext=\"REASONCODECLASSNAME\" text=\"사유코드 그룹 명(K)\"/><Cell col=\"4\" text=\"사유코드 그룹 명(E)\" tooltiptext=\"REASONCODECLASSNAME\"/><Cell col=\"5\" text=\"사유코드 그룹 명(C)\" tooltiptext=\"REASONCODECLASSNAME\"/><Cell col=\"6\" text=\"사유코드 그룹 명(V)\" tooltiptext=\"REASONCODECLASSNAME\"/><Cell col=\"7\" tooltiptext=\"DESCRIPTION\" text=\"설명\"/><Cell col=\"8\" tooltiptext=\"REASONCODECLASSTYPE\" text=\"사유코드 타입\"/><Cell col=\"9\" tooltiptext=\"PARENTREASONCODECLASSID\" text=\"상위 사유코드 그룹 ID\"/><Cell col=\"10\" tooltiptext=\"VALIDSTATE\" text=\"유효상태\" cssclass=\"cell_point\"/><Cell col=\"11\" tooltiptext=\"CREATOR\" text=\"작성자\"/><Cell col=\"12\" tooltiptext=\"CREATEDTIME\" text=\"작성일\"/><Cell col=\"13\" tooltiptext=\"MODIFIER\" text=\"수정자\"/><Cell col=\"14\" tooltiptext=\"MODIFIEDTIME\" text=\"수정자\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" text=\"expr:currow+1\" textAlign=\"right\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"2\" text=\"bind:REASONCODECLASSID\" edittype=\"expr:dataset.getRowType(currow) ==2  ? &apos;normal&apos;:&apos;none&apos;\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:REASONCODECLASSNAME_KR\" displaytype=\"text\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:REASONCODECLASSNAME_US\" displaytype=\"text\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:REASONCODECLASSNAME_CN\" displaytype=\"text\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:REASONCODECLASSNAME_VN\" displaytype=\"text\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:DESCRIPTION\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\"/><Cell col=\"8\" text=\"bind:REASONCODECLASSTYPE\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,ReasonCodeType,null,Y,Y\"/><Cell col=\"9\" text=\"bind:PARENTREASONCODECLASSID\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" expandsize=\"24\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"10\" text=\"bind:VALIDSTATE\" combocodecol=\"C,ValidState,,Y,Y\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"11\" text=\"bind:CREATOR\"/><Cell col=\"12\" text=\"bind:CREATEDTIME\" displaytype=\"text\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"13\" text=\"bind:MODIFIER\"/><Cell col=\"14\" text=\"bind:MODIFIEDTIME\" displaytype=\"text\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","5","0","165","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("사유코드 그룹 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("REASONCODECLASSLIST");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_reasonCodeClass","sta_subTitle:17","0","200","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_addRow",null,"6","29","24","87",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_delRow",null,"6","29","24","58",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_copyRow",null,"6","29","24","29",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdCopy");
            obj.set_tooltiptext("GridCopyRow");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_reasonCodeClass",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab);
            obj.set_text("사유코드");
            obj.set_tooltiptext("REASONCODE");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Grid("grd_reasonCode","350","35",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_reasonCode");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"103\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" tooltiptext=\"REASONCODEID\" text=\"사유코드 ID\" cssclass=\"cell_point\"/><Cell col=\"2\" tooltiptext=\"REASONCODENAME_KR\" text=\"사유코드 명(K)\"/><Cell col=\"3\" tooltiptext=\"REASONCODENAME_US\" text=\"사유코드 명(E)\"/><Cell col=\"4\" tooltiptext=\"REASONCODENAME_CN\" text=\"사유코드 명(C)\"/><Cell col=\"5\" tooltiptext=\"REASONCODENAME_VN\" text=\"사유코드 명(V)\"/><Cell col=\"6\" tooltiptext=\"DESCRIPTION\" text=\"설명\"/><Cell col=\"7\" tooltiptext=\"REASONCODECLASSID\" text=\"사유코드 그룹 ID\"/><Cell col=\"8\" tooltiptext=\"DISPLAYSEQUENCE\" text=\"표시순서\"/><Cell col=\"9\" tooltiptext=\"VALIDSTATE\" text=\"유효상태\" cssclass=\"cell_point\"/><Cell col=\"10\" tooltiptext=\"CREATOR\" text=\"생성자\"/><Cell col=\"11\" tooltiptext=\"CREATEDTIME\" text=\"생성일\"/><Cell col=\"12\" tooltiptext=\"MODIFIER\" text=\"수정자\"/><Cell col=\"13\" tooltiptext=\"MODIFIEDTIME\" text=\"수정일\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:REASONCODEID\" displaytype=\"text\" edittype=\"expr:dataset.getRowType(currow) ==2  ? &apos;normal&apos;:&apos;none&apos;\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:REASONCODENAME_KR\" displaytype=\"text\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:REASONCODENAME_US\" displaytype=\"text\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:REASONCODENAME_CN\" displaytype=\"text\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:REASONCODENAME_VN\" displaytype=\"text\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:DESCRIPTION\" displaytype=\"text\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:REASONCODECLASSID\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:DISPLAYSEQUENCE\" displaytype=\"number\" edittype=\"normal\" textAlign=\"right\" editinputtype=\"number\"/><Cell col=\"9\" text=\"bind:VALIDSTATE\" combocodecol=\"C,ValidState,,Y,Y\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"10\" text=\"bind:CREATOR\"/><Cell col=\"11\" text=\"bind:CREATEDTIME\" displaytype=\"text\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"12\" text=\"bind:MODIFIER\"/><Cell col=\"13\" text=\"bind:MODIFIEDTIME\" displaytype=\"text\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","5","0","300","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("사유코드 그룹 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("REASONCODECLASSLIST");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_subTitle00","345","0","425","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("사유코드 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("REASONCODELIST");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_reasonCodeClass2","0","35",null,null,"grd_reasonCode:5","0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_reasonCodeClass2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"120\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" tooltiptext=\"REASONCODECLASSID\" text=\"사유코드 그룹 ID\"/><Cell col=\"2\" tooltiptext=\"REASONCODECLASSNAME\" text=\"사유코드 그룹 명\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"1\" text=\"bind:REASONCODECLASSID\" edittype=\"none\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:REASONCODECLASSNAME\" displaytype=\"text\" edittype=\"none\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_addRow",null,"6","29","24","87",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_delRow",null,"6","29","24","58",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_copyRow",null,"6","29","24","29",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdCopy");
            obj.set_tooltiptext("GridCopyRow");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_reasonCode",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("7");
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
            obj.set_text("사유코드 관리");
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
        this.addIncludeScript("BAS00900M.xfdl","lib::lib_bas.xjs");
        this.registerScript("BAS00900M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 사유코드 관리
         * 파일명 		: BAS00900M.xfdl
         * 작성자 		: 최성민
         * 작성일 		: 2021.03.15
         *
         * 설  명		: 기준관리 - 사유코드 관리 화면
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.03.15	최성민   	최초작성
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
        	this.ds_srchReasonCodeClass.clearData();

        	var sSvcID 			= "selectSrchReasonClassList";
        	var sController 	= "/bas00900/selectReasonClassList.do";
        	var sInDatasets   	= "";
        	var sOutDatasets  	= "ds_srchReasonCodeClass=output";
        	var sArgs 		  	= "";
        	sArgs 			+= this.gfn_setParam("VALIDSTATE", "Valid");
        	sArgs 			+= this.gfn_setParam("CMB_TYPE", this.nfn_nvl(this.nfn_getDictionaryname("YPE_TOTAL"),"전체"));
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
        	this.fn_searchReasonClass();	//1.1 : 탭1 사유코드 그룹 조회
        };

        this.fn_save = function(obj,e)
        {
        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------

        	var tabIdx = this.div_work.form.tab.tabindex;
        	var sSvcID 			= "saveReason";
        	var sController 	= "";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";

        	if(tabIdx==0){
        		if (!this.gfn_dsIsUpdated(this.ds_reasonCodeClass) )
        		{
        			this.gfn_Message("NoSaveData", null, "warning", "ok");
        			return;
        		}
        		var component = this.div_work.form.tab.Tabpage1.form.grd_reasonCodeClass;
        		var strColIdList = "REASONCODECLASSID";

        		/* 그리드 체크 */
        		if(!this.nfn_MandatoryCheckGrid(component, strColIdList)) return;


        		sController 	= "/bas00900/saveReasonClass.do";
        		sInDatasets 	= "INPUT=ds_reasonCodeClass:U";
        	} else if(tabIdx==1){
        		if (!this.gfn_dsIsUpdated(this.ds_reasonCode) )
        		{
        			this.gfn_Message("NoSaveData", null, "warning", "ok");
        			return;
        		}

        		var component = this.div_work.form.tab.Tabpage2.form.grd_reasonCode;
        		var strColIdList = "REASONCODEID";

        		/* 그리드 체크 */
        		if(!this.nfn_MandatoryCheckGrid(component, strColIdList)) return;

        		sController 	= "/bas00900/saveReason.do";
        		sInDatasets 	= "INPUT=ds_reasonCode:U";
        	}

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	this.setWaitCursor(false, true); //커서 비활성화.
        	if (errCD < 0)
        	{
        		if (trId == "saveReason")
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
        		if (trId == "selectReasonClassList")
        		{
        			this.fn_searchReasonClass2();	//2.1 : 탭2 사유코드 그룹 조회
        		} else if (trId == "selectReasonClassList") {
        			if(this.ds_reasonCodeClass2.rowcount>0){
        				this.ds_reasonCodeClass2.set_rowposition(0);
        			}
        		} else if (trId == "saveReason") {
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			var tabIdx = this.div_work.form.tab.tabindex;
        			if(tabIdx==0){
        				this.fn_search();
        			} else {
        				this.fn_searchReason(this.ds_reasonCodeClass2.rowposition);
        			}
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

        	if(svcId =="GRD_PARENTCODE"){
        		var nRow = this.ds_reasonCodeClass.rowposition;
        		var reasonCodeClassId = this.ds_reasonCodeClass.getColumn(nRow, "REASONCODECLASSID");
        		oArg.arg_paramCols = "REASONCODECLASSID";
        		oArg.arg_paramValues = reasonCodeClassId;
        		oArg.arg_rtnCols = "CODE|NAME";
        	}
        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        }

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId =="GRD_PARENTCODE"){
        		var nRow = this.ds_reasonCodeClass.rowposition;
        		this.ds_reasonCodeClass.setColumn(nRow, "PARENTREASONCODECLASSID", rtn[0]);
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
        	this.searchDiv.cbo_reasonCode.set_value(null);
        	this.searchDiv.cbo_validState.set_value("Valid");
        	this.searchDiv.cbo_middleType.set_value(null);
        }

        /*
         * 기능 : 1.1 사유코드 그룹 조회
         */
        this.fn_searchReasonClass = function ()
        {
        	this.ds_reasonCodeClass.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "REASONCODECLASSTYPE", 	this.tab_search.Tabpage1.form.cbo_reasonCode.value);
        	this.ds_search.setColumn(0, "VALIDSTATE", 			this.tab_search.Tabpage1.form.cbo_validState.value);
        	this.ds_search.setColumn(0, "REASONCODECLASSID", 	this.tab_search.Tabpage1.form.cbo_middleType.value);

        	var sSvcID 			= "selectReasonClassList";
        	var sController 	= "/bas00900/selectReasonClassList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_reasonCodeClass=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 2.1 사유코드 그룹 조회
         */
        this.fn_searchReasonClass2 = function ()
        {
        	this.ds_reasonCodeClass2.clearData();
        	var sSvcID 			= "selectReasonClassList2";
        	var sController 	= "/bas00900/selectReasonClassList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_reasonCodeClass2=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 2.2 사유코드 조회
         */
        this.fn_searchReason = function (rowposition)
        {
        	this.ds_reasonCode.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "REASONCODECLASSTYPE", 	this.tab_search.Tabpage1.form.cbo_reasonCode.value);
        	this.ds_search.setColumn(0, "VALIDSTATE", 			this.tab_search.Tabpage1.form.cbo_validState.value);
        	this.ds_search.setColumn(0, "REASONCODECLASSID", 	this.ds_reasonCodeClass2.getColumn(rowposition, "REASONCODECLASSID"));

        	var sSvcID 			= "selectReasonList";
        	var sController 	= "/bas00900/selectReasonList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_reasonCode=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        this.fn_copyCode = function(obj,e)
        {
        	this.basfn_copyDataset(this.ds_reasonCode, null, "CREATOR,MODIFIER,CREATEDTIME,MODIFIEDTIME");
        };

        this.fn_copyClass = function(obj,e)
        {
        	this.basfn_copyDataset(this.ds_reasonCodeClass, null, "CREATOR,MODIFIER,CREATEDTIME,MODIFIEDTIME");
        };

        this.fn_addCode = function(obj,e)
        {
        	var nRow 				= this.ds_reasonCode.addRow();
        	var reasonCodeClassId 	= this.ds_reasonCodeClass2.getColumn(this.ds_reasonCodeClass2.rowposition, "REASONCODECLASSID");
        	var maxSeq 			  	= this.nfn_nvl(this.ds_reasonCode.getMax("DISPLAYSEQUENCE"),0);
        	var displaySequence	  	= Number(maxSeq) + 1;

        	this.ds_reasonCode.setColumn(nRow,"REASONCODECLASSID",	reasonCodeClassId);
        	this.ds_reasonCode.setColumn(nRow,"DISPLAYSEQUENCE",	displaySequence);
        	this.ds_reasonCode.setColumn(nRow,"VALIDSTATE",			"Valid");
        };

        this.fn_addClass = function(obj,e)
        {
        	var nRow = this.ds_reasonCodeClass.addRow();
        	this.ds_reasonCodeClass.setColumn(nRow,"VALIDSTATE",			"Valid");
        };


        this.fn_deleteCode = function(obj,e)
        {
        	this.basfn_deleteRow(this.ds_reasonCode);
        };


        this.fn_deleteClass = function(obj,e)
        {
        	this.basfn_deleteRow(this.ds_reasonCodeClass);
        };


        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.ds_reasonCodeClass2_canrowposchange = function(obj,e)
        {
        	var bOk = true;
        	if (this.gfn_dsIsUpdated(this.ds_reasonCode)) {
        		bOk = this.gfn_Message("WRITTENBEDELETE", null, "conf", "yesno");
        	}
        	if(bOk){
        		return true;
        	} else {
        		return false;
        	}
        };

        this.ds_reasonCodeClass2_onrowposchanged = function(obj,e)
        {
        	if(e.newrow < 0) return;
        	this.fn_searchReason(e.newrow);
        };

        this.div_work_tab_Tabpage1_grd_reasonCodeClass_onexpandup = function(obj,e)
        {
        	if(e.row < 0) return;
        	if (this.nfn_isEqualCol(obj, e.cell, "PARENTREASONCODECLASSID")) {
        		this.fn_openPop("GRD_PARENTCODE","P00149");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tabpage1.form.btn_clear2.addEventHandler("onclick",this.fn_formInit,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.div_work.form.tab.Tabpage1.form.grd_reasonCodeClass.addEventHandler("onexpandup",this.div_work_tab_Tabpage1_grd_reasonCodeClass_onexpandup,this);
            this.div_work.form.tab.Tabpage1.form.btn_addRow.addEventHandler("onclick",this.fn_addClass,this);
            this.div_work.form.tab.Tabpage1.form.btn_delRow.addEventHandler("onclick",this.fn_deleteClass,this);
            this.div_work.form.tab.Tabpage1.form.btn_copyRow.addEventHandler("onclick",this.fn_copyClass,this);
            this.div_work.form.tab.Tabpage2.form.btn_addRow.addEventHandler("onclick",this.fn_addCode,this);
            this.div_work.form.tab.Tabpage2.form.btn_delRow.addEventHandler("onclick",this.fn_deleteCode,this);
            this.div_work.form.tab.Tabpage2.form.btn_copyRow.addEventHandler("onclick",this.fn_copyCode,this);
            this.div_header.form.btn_saveUom.addEventHandler("onclick",this.fn_save,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.ds_reasonCodeClass2.addEventHandler("canrowposchange",this.ds_reasonCodeClass2_canrowposchange,this);
            this.ds_reasonCodeClass2.addEventHandler("onrowposchanged",this.ds_reasonCodeClass2_onrowposchanged,this);
        };
        this.loadIncludeScript("BAS00900M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
