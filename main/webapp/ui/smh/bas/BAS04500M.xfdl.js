(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS04500M");
            this.set_titletext("담당자 그룹 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCHCONDITION\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCHVALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_userGroup", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"USERGROUPID\" type=\"STRING\" size=\"256\"/><Column id=\"USERGROUPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERGROUPNAME_KR\" type=\"STRING\" size=\"256\"/><Column id=\"USERGROUPNAME_US\" type=\"STRING\" size=\"256\"/><Column id=\"USERGROUPNAME_CN\" type=\"STRING\" size=\"256\"/><Column id=\"USERGROUPNAME_VN\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"USERGROUPNAME_KEY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_userGroupUser", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"USERGROUPID\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"MBPH_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_userGroup2", this);
            obj._setContents("<ColumnInfo><Column id=\"USERGROUPID\" type=\"STRING\" size=\"256\"/><Column id=\"USERGROUPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERGROUPNAME_KR\" type=\"STRING\" size=\"256\"/><Column id=\"USERGROUPNAME_US\" type=\"STRING\" size=\"256\"/><Column id=\"USERGROUPNAME_CN\" type=\"STRING\" size=\"256\"/><Column id=\"USERGROUPNAME_VN\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"USERGROUPNAME_KEY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search2", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCHCONDITION\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCHVALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text(" ");
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

            obj = new Static("Static12_00_00_00_01_00_03",null,"26","45","10","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00",null,"80","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00",null,"55","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_01_00",null,"55","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staSearchType","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("조회조건");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("WORKTYPE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cboSearchType","108","35","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edtSearchValue","108","60","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_readonly("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staValidState","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("유효상태");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("VALIDSTATE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_validState","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_codecolumn("C,ValidState,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_01_00_00",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_search);
            obj.set_text(" ");
            this.tab_search.addChild(obj.name, obj);

            obj = new Button("btn_clear2","171","75","102","36",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_search","15","75","146","36",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"55","45","20","91",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","81","10","27",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03",null,"2","45","10","228",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00",null,"55","45","5","228",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("6");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00",null,"30","45","5","228",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("7");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_01_00",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("8");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("staSearchType","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("9");
            obj.set_text("조회조건");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("WORKTYPE");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cboSearchType2","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("10");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("edtSearchValue","108","35","165","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("11");
            obj.set_readonly("false");
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
            obj.set_text("담당자 그룹");
            obj.set_tooltiptext("REASONCODECLASS");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Grid("grd_userGroup","0","35",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_userGroup");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"30\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" tooltiptext=\"USERGROUPID2\" text=\"담당자 그룹 ID\" cssclass=\"cell_point\"/><Cell col=\"3\" tooltiptext=\"USERCLASSNAME2\" text=\"담당자 그룹 명(K)\"/><Cell col=\"4\" text=\"담당자 그룹 명(E)\" tooltiptext=\"USERCLASSNAME2\"/><Cell col=\"5\" text=\"담당자 그룹 명(C)\" tooltiptext=\"USERCLASSNAME2\"/><Cell col=\"6\" text=\"담당자 그룹 명(V)\" tooltiptext=\"USERCLASSNAME2\"/><Cell col=\"7\" tooltiptext=\"DESCRIPTION\" text=\"설명\"/><Cell col=\"8\" tooltiptext=\"VALIDSTATE\" text=\"유효상태\" cssclass=\"cell_point\"/><Cell col=\"9\" tooltiptext=\"CREATOR\" text=\"작성자\"/><Cell col=\"10\" tooltiptext=\"CREATEDTIME\" text=\"작성일\"/><Cell col=\"11\" tooltiptext=\"MODIFIER\" text=\"수정자\"/><Cell col=\"12\" tooltiptext=\"MODIFIEDTIME\" text=\"수정자\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" text=\"expr:currow+1\" textAlign=\"right\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"2\" text=\"bind:USERGROUPID\" edittype=\"expr:dataset.getRowType(currow) ==2  ? &apos;normal&apos;:&apos;none&apos;\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:USERGROUPNAME_KR\" displaytype=\"text\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:USERGROUPNAME_US\" displaytype=\"text\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:USERGROUPNAME_CN\" displaytype=\"text\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:USERGROUPNAME_VN\" displaytype=\"text\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:DESCRIPTION\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\"/><Cell col=\"8\" text=\"bind:VALIDSTATE\" combocodecol=\"C,ValidState,,Y,Y\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"9\" text=\"bind:CREATOR\"/><Cell col=\"10\" text=\"bind:CREATEDTIME\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"11\" text=\"bind:MODIFIER\"/><Cell col=\"12\" text=\"bind:MODIFIEDTIME\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","5","0","165","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("담당자 그룹 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("USERGROUPLIST");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_userGroup","sta_subTitle:17","0","200","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
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

            obj = new Button("btn_xlDn_grd_userGroup",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab);
            obj.set_text("담당자 매핑");
            obj.set_tooltiptext("REASONCODE");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Grid("grd_userGroupUser","350","35",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_userGroupUser");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" tooltiptext=\"USERID\" text=\"사용자ID\" cssclass=\"cell_point\"/><Cell col=\"2\" tooltiptext=\"USERNAME\" text=\"사용자명\"/><Cell col=\"3\" tooltiptext=\"DEPARTMENT\" text=\"부서\"/><Cell col=\"4\" tooltiptext=\"POSITION\" text=\"직위\"/><Cell col=\"5\" tooltiptext=\"EMAILADDRESS\" text=\"이메일주소\"/><Cell col=\"6\" tooltiptext=\"CELLPHONENUMBER\" text=\"핸드폰번호\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:USERID\" displaytype=\"text\" edittype=\"none\" textAlign=\"left\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"expr:dataset.getRowType(currow) ==2 ? &apos;show&apos;:&apos;hide&apos;\" expandsize=\"24\"/><Cell col=\"2\" text=\"bind:USER_NM\" displaytype=\"text\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:DEPT_CD\" displaytype=\"text\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:JIKWI_CD\" displaytype=\"text\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:EMAIL_ADDR\" displaytype=\"text\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:MBPH_NO\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","5","0","300","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("담당자 그룹 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("USERGROUPLIST");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_subTitle00","345","0","425","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("담당자 매핑 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("USERMAPPINGLIST");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_userGroup2","0","35",null,null,"grd_userGroupUser:5","0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_userGroup2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"140\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"담당자그룹ID\" tooltiptext=\"USERGROUPID2\"/><Cell col=\"1\" tooltiptext=\"USERGROUPNAME2\" text=\"담당자그룹명\"/></Band><Band id=\"body\"><Cell text=\"bind:USERGROUPID\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:USERGROUPNAME\" displaytype=\"text\" textAlign=\"left\"/></Band></Format></Formats>");
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

            obj = new Button("btn_xlDn_grd_userGroupUser",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
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

            obj = new Static("sta_title","30","16","130","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_text("담당자 관리");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MENU_USER_FOLDER2");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:70","16","24","24",null,null,null,null,null,null,this.div_header.form);
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
        this.addIncludeScript("BAS04500M.xfdl","lib::lib_bas.xjs");
        this.registerScript("BAS04500M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 사유코드 관리
         * 파일명 		: BAS04500M.xfdl
         * 작성자 		: 최성민
         * 작성일 		: 2021.03.15
         *
         * 설  명		: 기준관리 - 담당자 관리 화면
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
        this.searchDiv1 = this.tab_search.Tabpage1.form;
        this.searchDiv2 = this.tab_search.Tabpage2.form;
        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.fn_formInit();
        	this.basfn_saveBtn(this.div_header.form.btn_saveUom); //저장버튼 공통처리 함수 호출
        	var addParam = "ALLVIEWS|USERGROUPID2|USERCLASSNAME2|DESCRIPTION";
        	/* 조회조건 조회 */
        	this.basfn_setCustomQueryCmb(this.searchDiv1.cboSearchType // Object
        						, "selectCustomCodeList,,Y,A" // OPTION
        						, this.gfn_setParam("ADD_PARAM", addParam)
        						, false);	  // 추가 파라미터

        	var addParam2 = "ALLVIEWS|USERID|USERNAME|DEPARTMENT|POSITION|EMAILADDRESS|PHONENUMBER";
        	/* 조회조건 조회 */
        	this.basfn_setCustomQueryCmb(this.searchDiv2.cboSearchType2 // Object
        						, "selectCustomCodeList,,Y,A" // OPTION
        						, this.gfn_setParam("ADD_PARAM", addParam2)
        						, false);	  // 추가 파라미터
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.fn_searchUserGroup();
        };

        this.fn_save = function(obj,e)
        {
        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------

        	var tabIdx = this.div_work.form.tab.tabindex;
        	var sSvcID 			= "saveUserGroup";
        	var sController 	= "";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";

        	if(tabIdx==0){
        		if (!this.gfn_dsIsUpdated(this.ds_userGroup) )
        		{
        			this.gfn_Message("NoSaveData", null, "warning", "ok");
        			return;
        		}
        		var component = this.div_work.form.tab.Tabpage1.form.grd_userGroup;
        		var strColIdList = "USERGROUPID";

        		/* 그리드 체크 */
        		if(!this.nfn_MandatoryCheckGrid(component, strColIdList)) return;


        		sController 	= "/bas04500/saveUserGroup.do";
        		sInDatasets 	= "INPUT=ds_userGroup:U";
        	} else if(tabIdx==1){
        		if (!this.gfn_dsIsUpdated(this.ds_userGroupUser) )
        		{
        			this.gfn_Message("NoSaveData", null, "warning", "ok");
        			return;
        		}

        		var component = this.div_work.form.tab.Tabpage2.form.grd_userGroupUser;
        		var strColIdList = "USERID";

        		/* 그리드 체크 */
        		if(!this.nfn_MandatoryCheckGrid(component, strColIdList)) return;

        		//중복값 체크
        		if(!this.basfn_checkGridDup(this.ds_userGroupUser
        								, "USERID"
        								, "DuplicationItem")){ return;}

        		sController 	= "/bas04500/saveUserGroupUser.do";
        		sInDatasets 	= "INPUT=ds_userGroupUser:U";
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
        		if (trId == "saveUserGroup")
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
        		if (trId == "selectUserGroupList")
        		{
        			this.fn_searchUserGroup2();	//2.1 : 탭2 사유코드 그룹 조회
        		} else if (trId == "selectUserGroupList2") {
        			if(this.ds_userGroup2.rowcount>0){
        				this.ds_userGroup2.set_rowposition(0);
        			}
        		} else if (trId == "saveUserGroup") {
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			var tabIdx = this.div_work.form.tab.tabindex;
        			if(tabIdx==0){
        				this.fn_search();
        			} else {
        				this.fn_searchUserGroupUser(this.ds_userGroup2.rowposition);
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
        	var opts = "width=800,height=500";

        	oArg.arg_type = "C";
        	oArg.arg_popupCd = popId;
        	oArg.arg_popupNm = "";
        	oArg.arg_paramCols = "";
        	oArg.arg_paramValues = "";
        	oArg.arg_searchStr = "";

        	if(svcId =="GRD_USER"){
        		var nRow = this.ds_userGroup2.rowposition;
        		var reasonCodeClassId = this.ds_userGroup2.getColumn(nRow, "USERGROUPID");
        		oArg.arg_paramCols = "USERGROUPID";
        		oArg.arg_paramValues = reasonCodeClassId;
        		oArg.arg_rtnCols = "USER_ID|USER_NM|DEPT_CD|JIKWI_CD|EMAIL_ADDR|MBPH_NO";
        	}
        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        }

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId =="GRD_USER"){
        		for(var i=0; i<rtn.length; i++){
        			var colArray 		= rtn[i];
        			var nRow;
        			if(i==0){
        				nRow = this.ds_userGroupUser.rowposition;
        			} else {
        				nRow = this.ds_userGroupUser.addRow();
        			}

        			var reasonCodeClassId = this.ds_userGroup2.getColumn(this.ds_userGroup2.rowposition, "USERGROUPID");
        			this.ds_userGroupUser.setColumn(nRow, "USERGROUPID", 	reasonCodeClassId);
        			this.ds_userGroupUser.setColumn(nRow, "USERID", 		colArray[0]);
        			this.ds_userGroupUser.setColumn(nRow, "USER_NM", 		colArray[1]);
        			this.ds_userGroupUser.setColumn(nRow, "DEPT_CD", 		colArray[2]);
        			this.ds_userGroupUser.setColumn(nRow, "JIKWI_CD", 		colArray[3]);
        			this.ds_userGroupUser.setColumn(nRow, "EMAIL_ADDR", 	colArray[4]);
        			this.ds_userGroupUser.setColumn(nRow, "MBPH_NO", 		colArray[5]);
        		}
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
        	var tabIdx = this.div_work.form.tab.tabindex;
        	if(tabIdx==0){
        		this.searchDiv1.cboSearchType.set_value("ALLVIEWS");
        		this.searchDiv1.cbo_validState.set_value("Valid");
        		this.searchDiv1.edtSearchValue.set_value("");
        	} else {
        		this.searchDiv2.cboSearchType.set_value("ALLVIEWS");
        		this.searchDiv2.edtSearchValue.set_value("");
        	}

        }

        this.fn_searchUserGroup = function ()
        {
        	this.ds_userGroup.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "VALIDSTATE", 			this.tab_search.Tabpage1.form.cbo_validState.value);
        	this.ds_search.setColumn(0, "SEARCHCONDITION", 		this.tab_search.Tabpage1.form.cboSearchType.value);
        	this.ds_search.setColumn(0, "SEARCHVALUE", 			this.tab_search.Tabpage1.form.edtSearchValue.value);

        	var sSvcID 			= "selectUserGroupList";
        	var sController 	= "/bas04500/selectUserGroupList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_userGroup=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.fn_searchUserGroup2 = function ()
        {
        	this.ds_userGroupUser.clearData();
        	this.ds_search2.clearData();
        	this.ds_search2.addRow();
        	this.ds_search2.setColumn(0, "VALIDSTATE", 			this.tab_search.Tabpage1.form.cbo_validState.value);
        	var sSvcID 			= "selectUserGroupList2";
        	var sController 	= "/bas04500/selectUserGroupList.do";
        	var sInDatasets 	= "INPUT=ds_search2";
        	var sOutDatasets 	= "ds_userGroup2=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.fn_searchUserGroupUser = function (rowposition)
        {
        	this.ds_userGroupUser.clearData();
        	var userGroupId		= this.ds_userGroup2.getColumn(rowposition, "USERGROUPID");
        	var validState 		= this.tab_search.Tabpage1.form.cbo_validState.value;
        	var sSvcID 			= "selectUserGroupUserList";
        	var sController 	= "/bas04500/selectUserGroupUserList.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_userGroupUser=output";
        	var sArgs 			= "";
        		sArgs 			+= this.gfn_setParam("VALIDSTATE"		, validState);
        		sArgs 			+= this.gfn_setParam("USERGROUPID"		, userGroupId);
        		sArgs 			+= this.gfn_setParam("SEARCHCONDITION"	, this.tab_search.Tabpage2.form.cboSearchType2.value);
        		sArgs 			+= this.gfn_setParam("SEARCHVALUE"		, this.tab_search.Tabpage2.form.edtSearchValue.value);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        this.fn_copyUser = function(obj,e)
        {
        	this.basfn_copyDataset(this.ds_userGroupUser, null, "CREATOR,MODIFIER,CREATEDTIME,MODIFIEDTIME");
        };

        this.fn_copyGroup = function(obj,e)
        {
        	this.basfn_copyDataset(this.ds_userGroup, null, "CREATOR,MODIFIER,CREATEDTIME,MODIFIEDTIME");
        };

        this.fn_addUser = function(obj,e)
        {
        	var nRow 				= this.ds_userGroupUser.addRow();
        	var userGroupId 		= this.ds_userGroup2.getColumn(this.ds_userGroup2.rowposition, "USERGROUPID");

        	this.ds_userGroupUser.setColumn(nRow,"USERGROUPID",	userGroupId);
        };

        this.fn_addGroup = function(obj,e)
        {
        	var nRow = this.ds_userGroup.addRow();
        	this.ds_userGroup.setColumn(nRow,"VALIDSTATE",			"Valid");
        };


        this.fn_deleteUser = function(obj,e)
        {
        	this.basfn_deleteRow(this.ds_userGroupUser);
        };


        this.fn_deleteGroup = function(obj,e)
        {
        	this.basfn_deleteRow(this.ds_userGroup);
        };


        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.ds_userGroup2_canrowposchange = function(obj,e)
        {
        	var bOk = true;
        	if (this.gfn_dsIsUpdated(this.ds_userGroupUser)) {
        		bOk = this.gfn_Message("WRITTENBEDELETE", null, "conf", "yesno");
        	}
        	if(bOk){
        		return true;
        	} else {
        		return false;
        	}
        };

        this.ds_userGroup2_onrowposchanged = function(obj,e)
        {
        	if(e.newrow < 0) return;
        	this.fn_searchUserGroupUser(e.newrow);
        };

        this.div_work_tab_Tabpage2_grd_reasonCode_onexpandup = function(obj,e)
        {
        	if(e.row < 0) return;
        	if (this.nfn_isEqualCol(obj, e.cell, "USERID")) {
        		this.fn_openPop("GRD_USER","P00161");
        	}
        };

        this.div_work_tab_onchanged = function(obj,e)
        {
        	if(e.postindex==0){
        		this.tab_search.set_tabindex(0);
        	} else {
        		this.tab_search.set_tabindex(1);
        	}
        };

        this.div_work_tab_canchange = function(obj,e)
        {
        	var bOk = true;
        	if(e.preindex==0){
        		if (this.gfn_dsIsUpdated(this.ds_userGroup)) {
        			bOk = this.gfn_Message("WRITTENBEDELETE", null, "conf", "yesno");
        		}
        	} else {
        		if (this.gfn_dsIsUpdated(this.ds_userGroupUser)) {
        			bOk = this.gfn_Message("WRITTENBEDELETE", null, "conf", "yesno");
        		}
        	}

        	if(bOk){
        		return true;
        	} else {
        		return false;
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tabpage1.form.btn_clear2.addEventHandler("onclick",this.fn_formInit,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage2.form.btn_clear2.addEventHandler("onclick",this.fn_formInit,this);
            this.tab_search.Tabpage2.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.div_work.form.tab.addEventHandler("onchanged",this.div_work_tab_onchanged,this);
            this.div_work.form.tab.addEventHandler("canchange",this.div_work_tab_canchange,this);
            this.div_work.form.tab.Tabpage1.form.grd_userGroup.addEventHandler("onexpandup",this.div_work_tab_Tabpage1_grd_reasonCodeClass_onexpandup,this);
            this.div_work.form.tab.Tabpage1.form.btn_addRow.addEventHandler("onclick",this.fn_addGroup,this);
            this.div_work.form.tab.Tabpage1.form.btn_delRow.addEventHandler("onclick",this.fn_deleteGroup,this);
            this.div_work.form.tab.Tabpage1.form.btn_copyRow.addEventHandler("onclick",this.fn_copyGroup,this);
            this.div_work.form.tab.Tabpage2.form.grd_userGroupUser.addEventHandler("onexpandup",this.div_work_tab_Tabpage2_grd_reasonCode_onexpandup,this);
            this.div_work.form.tab.Tabpage2.form.btn_addRow.addEventHandler("onclick",this.fn_addUser,this);
            this.div_work.form.tab.Tabpage2.form.btn_delRow.addEventHandler("onclick",this.fn_deleteUser,this);
            this.div_work.form.tab.Tabpage2.form.btn_copyRow.addEventHandler("onclick",this.fn_copyUser,this);
            this.div_header.form.btn_saveUom.addEventHandler("onclick",this.fn_save,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.ds_userGroup2.addEventHandler("canrowposchange",this.ds_userGroup2_canrowposchange,this);
            this.ds_userGroup2.addEventHandler("onrowposchanged",this.ds_userGroup2_onrowposchanged,this);
        };
        this.loadIncludeScript("BAS04500M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
