(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS00500M");
            this.set_titletext("표준공정 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"CONDITIONVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_processList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"STANDARDOPERATIONID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME_KR\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME_US\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME_CN\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME_VN\" type=\"STRING\" size=\"256\"/><Column id=\"SEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TOPPROCESSSEGMENTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"MIDDLEPROCESSSEGMENTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"STEPCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"STEPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STEPTYPEKEY\" type=\"STRING\" size=\"256\"/><Column id=\"SUBSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"ISTOOLWORK\" type=\"STRING\" size=\"256\"/><Column id=\"ISINCOMINGINSPECTION\" type=\"STRING\" size=\"256\"/><Column id=\"COSTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"ISREQUIREDMATERIAL\" type=\"STRING\" size=\"256\"/><Column id=\"ISREQUIREDOPERATIONSPEC\" type=\"STRING\" size=\"256\"/><Column id=\"ISREQUIREDTOOL\" type=\"STRING\" size=\"256\"/><Column id=\"SUBSEGMENTID1\" type=\"STRING\" size=\"256\"/><Column id=\"PLATINGTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tree", this);
            obj._setContents("<ColumnInfo><Column id=\"PROCESSSEGMENTCLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTPROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_factory", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_step", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_processAList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PROCESSSEGMENTCLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSNAME_KR\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSNAME_US\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSNAME_CN\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSNAME_VN\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTPROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTPROCESSSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_processBList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME_KR\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME_US\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME_CN\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME_VN\" type=\"STRING\" size=\"256\"/><Column id=\"SEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STEPCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"STEPTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"STEPTYPEKEY\" type=\"STRING\" size=\"256\"/><Column id=\"STEPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"SUBSEGMENTID1\" type=\"STRING\" size=\"256\"/><Column id=\"ISTOOLWORK\" type=\"STRING\" size=\"256\"/><Column id=\"ISINCOMINGINSPECTION\" type=\"STRING\" size=\"256\"/><Column id=\"COSTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"PLATINGTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"ISREQUIREDMATERIAL\" type=\"STRING\" size=\"256\"/><Column id=\"ISREQUIREDOPERATIONSPEC\" type=\"STRING\" size=\"256\"/><Column id=\"ISREQUIREDTOOL\" type=\"STRING\" size=\"256\"/><Column id=\"PRIVATEPROCESS\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_processCList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"EQPTSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ASSIGNEDUNITS\" type=\"STRING\" size=\"256\"/><Column id=\"MANHOUR\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_processDList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"SPECSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"DEFAULTDISPLAY\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inspection", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Tabpage("Tabpage2",this.tab_search);
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("staValidState","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("유효상태");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("VALIDSTATE");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cboValidState","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_codecolumn("C,ValidState,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_search","15","100","146","36",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_clear2","171","100","102","36",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
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

            obj = new Static("Static12_00_00_00_00_00","161","106","10","27",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("6");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"80","45","20","91",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("7");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_01",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage2.form);
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

            obj = new Static("Static12_00_00_00_01_00_03_00",null,"30","45","5","228",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("11");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("staSearchType","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("12");
            obj.set_text("조회조건");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("WORKTYPE");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cboSearchType","108","35","165","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("13");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("edtSearchValue","108","60","165","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("14");
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
            obj.set_text("공정등록");
            obj.set_tooltiptext("PROCESSSEGMENTEXTREGIST");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Grid("treeArea","0","34","250",null,null,"0",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_cssclass("grd_tree");
            obj.set_binddataset("ds_tree");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeuseexpandkey("true");
            obj.set_treeusecheckbox("false");
            obj.set_treeusebutton("use");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"260\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" text=\"bind:PROCESSSEGMENTCLASSNAME\" treestartlevel=\"0\" treelevel=\"bind:LVL\" autosizecol=\"none\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_processA","treeArea:10","35",null,null,"0","68.62%",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_processAList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" tooltiptext=\"PROCESSSEGMENTCLASSTYPE\" text=\"공정그룹유형\"/><Cell col=\"2\" tooltiptext=\"PROCESSSEGMENTCLASSID\" text=\"공정 그룹 코드\" cssclass=\"cell_point\"/><Cell col=\"3\" tooltiptext=\"PROCESSSEGMENTCLASSNAME_KR\" text=\"공정그룹명(K)\"/><Cell col=\"4\" text=\"공정그룹명(E)\" tooltiptext=\"PROCESSSEGMENTCLASSNAME_US\"/><Cell col=\"5\" text=\"공정그룹명(C)\" tooltiptext=\"PROCESSSEGMENTCLASSNAME_CN\"/><Cell col=\"6\" text=\"공정그룹명(V)\" tooltiptext=\"PROCESSSEGMENTCLASSNAME_VN\"/><Cell col=\"7\" tooltiptext=\"PARENTPROCESSSEGMENTCLASSID\" text=\"상위분류\"/><Cell col=\"8\" tooltiptext=\"CREATOR\" text=\"생성자\"/><Cell col=\"9\" tooltiptext=\"CREATEDTIME\" text=\"생성일\"/><Cell col=\"10\" tooltiptext=\"MODIFIER\" text=\"수정자\"/><Cell col=\"11\" tooltiptext=\"MODIFIEDTIME\" text=\"수정일\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:PROCESSSEGMENTCLASSTYPE\" displaytype=\"combotext\" combocodecol=\"C,ProcessSegmentClassType,,Y,N\"/><Cell col=\"2\" text=\"bind:PROCESSSEGMENTCLASSID\" displaytype=\"expr:dataset.getRowType(currow) ==2  ? &apos;editcontrol&apos;:&apos;normal&apos;\" edittype=\"expr:dataset.getRowType(currow) ==2  ? &apos;normal&apos;:&apos;none&apos;\" cssclass=\"point\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTCLASSNAME_KR\" displaytype=\"text\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:PROCESSSEGMENTCLASSNAME_US\" displaytype=\"text\" edittype=\"normal\"/><Cell col=\"5\" text=\"bind:PROCESSSEGMENTCLASSNAME_CN\" displaytype=\"text\" edittype=\"normal\"/><Cell col=\"6\" text=\"bind:PROCESSSEGMENTCLASSNAME_VN\" displaytype=\"text\" edittype=\"normal\"/><Cell col=\"7\" text=\"bind:PARENTPROCESSSEGMENTCLASSID\"/><Cell col=\"8\" text=\"bind:CREATOR\"/><Cell col=\"9\" text=\"bind:CREATEDTIME\" displaytype=\"text\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"10\" text=\"bind:MODIFIER\"/><Cell col=\"11\" text=\"bind:MODIFIEDTIME\" displaytype=\"text\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","260","0","165","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("공정그룹");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("PROCESSSEGMENTCLASSLIST");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_processAList","sta_subTitle:17","0","200","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("StaticTitleBOM","0","0","230","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("공정그룹");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("PROCESSSEGMENTCLASSLIST");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_subTitle00","260","grd_processA:0","165","35",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("표준공정");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("STANDARDSEGMENT");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_processBList","sta_subTitle00:17","grd_processA:0","200","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_processB","treeArea:10","sta_cnt_ds_processBList:-1",null,null,"0","242",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_processBList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"공정 그룹 코드\" tooltiptext=\"PROCESSSEGMENTCLASSID\"/><Cell col=\"2\" tooltiptext=\"STANDARDOPERATIONID\" text=\"표준공정 코드\"/><Cell col=\"3\" tooltiptext=\"PROCESSSEGMENTNAME_KR\" text=\"공정명(K)\"/><Cell col=\"4\" text=\"공정명(E)\" tooltiptext=\"PROCESSSEGMENTNAME_EN\"/><Cell col=\"5\" text=\"공정명(C)\" tooltiptext=\"PROCESSSEGMENTNAME_CN\"/><Cell col=\"6\" text=\"공정명(V)\" tooltiptext=\"PROCESSSEGMENTNAME_VN\"/><Cell col=\"7\" tooltiptext=\"SEGMENTTYPE\" text=\"공정유형\"/><Cell col=\"8\" tooltiptext=\"STEPCLASS\" text=\"스탭유형\"/><Cell col=\"9\" tooltiptext=\"STEPTYPENAME\" text=\"작업단위\"/><Cell col=\"10\" tooltiptext=\"SUBSEGMENTID\" text=\"세부공정\" cssclass=\"cell_point\"/><Cell col=\"11\" tooltiptext=\"SUBSEGMENTID1\" text=\"외주사양구분\"/><Cell col=\"12\" tooltiptext=\"PLATINGTYPE\" text=\"도금유형\"/><Cell col=\"13\" tooltiptext=\"ISREQUIREDMATERIAL\" text=\"자재\"/><Cell col=\"14\" tooltiptext=\"ISREQUIREDOPERATIONSPEC\" text=\"공정SPEC\"/><Cell col=\"15\" tooltiptext=\"ISREQUIREDTOOL\" text=\"치공구\"/><Cell col=\"16\" tooltiptext=\"COSTCODE\" text=\"원가코드\"/><Cell col=\"17\" tooltiptext=\"PRIVATEPROCESS\" text=\"SITE 전용공정\"/><Cell col=\"18\" tooltiptext=\"VALIDSTATE\" text=\"유효상태\"/><Cell col=\"19\" tooltiptext=\"CREATOR\" text=\"생성자\"/><Cell col=\"20\" tooltiptext=\"CREATEDTIME\" text=\"생성일\"/><Cell col=\"21\" text=\"수정자\" tooltiptext=\"MODIFIER\"/><Cell col=\"22\" tooltiptext=\"MODIFIEDTIME\" text=\"수정일\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:PROCESSSEGMENTCLASSID\"/><Cell col=\"2\" text=\"bind:PROCESSSEGMENTID\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTNAME_KR\" displaytype=\"text\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:PROCESSSEGMENTNAME_US\" displaytype=\"text\" edittype=\"normal\"/><Cell col=\"5\" text=\"bind:PROCESSSEGMENTNAME_CN\" displaytype=\"text\" edittype=\"normal\"/><Cell col=\"6\" text=\"bind:PROCESSSEGMENTNAME_VN\" displaytype=\"text\" edittype=\"normal\"/><Cell col=\"7\" text=\"bind:SEGMENTTYPE\" combocodecol=\"C,ProcessSegmentType,null,Y,Y\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"8\" text=\"bind:STEPCLASS\" edittype=\"combo\" displaytype=\"combotext\" combocodecol=\"C,StepType,null,Y,Y\"/><Cell col=\"9\" text=\"bind:STEPTYPENAME\"/><Cell col=\"10\" text=\"bind:SUBSEGMENTID\" displaytype=\"combotext\" edittype=\"combo\" cssclass=\"point\" combocodecol=\"C,Subsegmentid1,null,Y,Y\"/><Cell col=\"11\" text=\"bind:SUBSEGMENTID1\" combocodecol=\"C,OutsourcingSpecType,null,Y,Y\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"12\" text=\"bind:PLATINGTYPE\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,PlatingType2,null,Y,Y\"/><Cell col=\"13\" text=\"bind:ISREQUIREDMATERIAL\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,YesNo,null,Y,Y\"/><Cell col=\"14\" text=\"bind:ISREQUIREDOPERATIONSPEC\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,YesNo,null,Y,Y\"/><Cell col=\"15\" text=\"bind:ISREQUIREDTOOL\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,YesNo,null,Y,Y\"/><Cell col=\"16\" text=\"bind:COSTCODE\" displaytype=\"text\" edittype=\"normal\"/><Cell col=\"17\" text=\"bind:PRIVATEPROCESS\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_factory\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"18\" text=\"bind:VALIDSTATE\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,ValidState,,Y,Y\"/><Cell col=\"19\" text=\"bind:CREATOR\"/><Cell col=\"20\" text=\"bind:CREATEDTIME\" displaytype=\"text\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"21\" text=\"bind:MODIFIER\"/><Cell col=\"22\" text=\"bind:MODIFIEDTIME\" displaytype=\"text\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_delA",null,null,"29","24","58","grd_processA:0",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            obj.set_text("");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_addA",null,null,"29","24","btn_delA:0","grd_processA:0",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_copyA",null,null,"29","24","29","grd_processA:0",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_grdCopy");
            obj.set_tooltiptext("GridCopyRow");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_processA",null,null,"29","24","0","grd_processA:0",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_addB",null,null,"29","24","87","grd_processB:0",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            obj.set_visible("true");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_delB",null,null,"29","24","58","grd_processB:0",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            obj.set_text("");
            obj.set_visible("true");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_copyB",null,null,"29","24","29","grd_processB:0",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_grdCopy");
            obj.set_tooltiptext("GridCopyRow");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_processB",null,null,"29","24","0","grd_processB:0",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Tab("tab_00","treeArea:10","grd_processB:5",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab.Tabpage1.form.tab_00);
            obj.set_text("설비그룹");
            obj.set_tooltiptext("EQUIPMENTCLASS");
            this.div_work.form.tab.Tabpage1.form.tab_00.addChild(obj.name, obj);

            obj = new Grid("grd_processC","0","31",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage1.form.tab_00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_processCList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" tooltiptext=\"PROCESSSEGMENTID\" text=\"공정 코드\"/><Cell col=\"2\" tooltiptext=\"EQUIPMENTCLASSID\" text=\"설비그룹 코드\" cssclass=\"cell_point\"/><Cell col=\"3\" tooltiptext=\"EQUIPMENTCLASSNAME\" text=\"설비그룹 명\"/><Cell col=\"4\" tooltiptext=\"VALIDSTATE\" text=\"유효상태\"/><Cell col=\"5\" tooltiptext=\"CREATOR\" text=\"생성자\"/><Cell col=\"6\" tooltiptext=\"CREATEDTIME\" text=\"생성일\"/><Cell col=\"7\" tooltiptext=\"MODIFIER\" text=\"수정자\"/><Cell col=\"8\" tooltiptext=\"MODIFIEDTIME\" text=\"수정일\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:PROCESSSEGMENTID\"/><Cell col=\"2\" text=\"bind:EQUIPMENTCLASSID\" expandshow=\"expr:dataset.getRowType(currow) ==2 ? &apos;show&apos;:&apos;hide&apos;\" expandsize=\"24\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" cssclass=\"point\"/><Cell col=\"3\" text=\"bind:EQUIPMENTCLASSNAME\"/><Cell col=\"4\" text=\"bind:VALIDSTATE\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,ValidState,,Y,Y\"/><Cell col=\"5\" text=\"bind:CREATOR\"/><Cell col=\"6\" text=\"bind:CREATEDTIME\" displaytype=\"text\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"7\" text=\"bind:MODIFIER\"/><Cell col=\"8\" text=\"bind:MODIFIEDTIME\" displaytype=\"text\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage1.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_addC",null,null,"29","24","87","grd_processC:0",null,null,null,null,this.div_work.form.tab.Tabpage1.form.tab_00.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            obj.set_visible("true");
            this.div_work.form.tab.Tabpage1.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_delC",null,null,"29","24","58","grd_processC:0",null,null,null,null,this.div_work.form.tab.Tabpage1.form.tab_00.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            obj.set_text("");
            obj.set_visible("true");
            this.div_work.form.tab.Tabpage1.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_copyC",null,null,"29","24","29","grd_processC:0",null,null,null,null,this.div_work.form.tab.Tabpage1.form.tab_00.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdCopy");
            obj.set_tooltiptext("GridCopyRow");
            this.div_work.form.tab.Tabpage1.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_processC",null,null,"29","24","0","grd_processC:0",null,null,null,null,this.div_work.form.tab.Tabpage1.form.tab_00.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab.Tabpage1.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_processCList","0","-3","200","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form.tab_00.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tab.Tabpage1.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab.Tabpage1.form.tab_00);
            obj.set_text("Spec 항목");
            obj.set_tooltiptext("SPECINSPITEM");
            this.div_work.form.tab.Tabpage1.form.tab_00.addChild(obj.name, obj);

            obj = new Button("btn_addD",null,null,"29","24","87","167",null,null,null,null,this.div_work.form.tab.Tabpage1.form.tab_00.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            obj.set_visible("true");
            this.div_work.form.tab.Tabpage1.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_delD",null,null,"29","24","58","167",null,null,null,null,this.div_work.form.tab.Tabpage1.form.tab_00.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            obj.set_text("");
            obj.set_visible("true");
            this.div_work.form.tab.Tabpage1.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_copyD",null,null,"29","24","29","167",null,null,null,null,this.div_work.form.tab.Tabpage1.form.tab_00.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdCopy");
            obj.set_tooltiptext("GridCopyRow");
            this.div_work.form.tab.Tabpage1.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_processD",null,null,"29","24","0","167",null,null,null,null,this.div_work.form.tab.Tabpage1.form.tab_00.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab.Tabpage1.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_processDList","0","-3","200","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form.tab_00.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tab.Tabpage1.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_processD","0","31",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage1.form.tab_00.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_processDList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" tooltiptext=\"INSPECTIONDEFID\" text=\"검사 정의 코드\"/><Cell col=\"2\" tooltiptext=\"INSPITEMCLASSID\" text=\"검사 방법 코드\"/><Cell col=\"3\" cssclass=\"cell_point\" tooltiptext=\"INSPITEMID\" text=\"검사항목 코드\"/><Cell col=\"4\" text=\"검사항목명\" tooltiptext=\"INSPITEMNAME\"/><Cell col=\"5\" tooltiptext=\"DEFAULTDISPLAY\" text=\"화면표시여부\"/><Cell col=\"6\" tooltiptext=\"VALIDSTATE\" text=\"유효상태\"/><Cell col=\"7\" tooltiptext=\"CREATOR\" text=\"생성자\"/><Cell col=\"8\" tooltiptext=\"CREATEDTIME\" text=\"생성일\"/><Cell col=\"9\" text=\"수정자\" tooltiptext=\"MODIFIER\"/><Cell col=\"10\" text=\"수정일\" tooltiptext=\"MODIFIEDTIME\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:INSPECTIONDEFID\"/><Cell col=\"2\" text=\"bind:INSPITEMCLASSID\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_inspection\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"3\" text=\"bind:INSPITEMID\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" expandsize=\"24\"/><Cell col=\"4\" text=\"bind:INSPITEMNAME\"/><Cell col=\"5\" text=\"bind:DEFAULTDISPLAY\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,YesNo,null,Y,Y\"/><Cell col=\"6\" text=\"bind:VALIDSTATE\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,ValidState,,Y,Y\"/><Cell col=\"7\" text=\"bind:CREATOR\"/><Cell col=\"8\" text=\"bind:CREATEDTIME\" displaytype=\"text\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"9\" text=\"bind:MODIFIER\"/><Cell col=\"10\" text=\"bind:MODIFIEDTIME\" displaytype=\"text\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage1.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab);
            obj.set_text("공정현황");
            obj.set_tooltiptext("PROCESSSEGMENTEXTSTATUS");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Grid("grd_processList","0","35",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_processList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell tooltiptext=\"STANDARDOPERATIONID\" text=\"표준공정 코드\"/><Cell col=\"1\" tooltiptext=\"PROCESSSEGMENTNAME_KR\" text=\"공정명(K)\"/><Cell col=\"2\" text=\"공정명(E)\" tooltiptext=\"PROCESSSEGMENTNAME_US\"/><Cell col=\"3\" text=\"공정명(C)\" tooltiptext=\"PROCESSSEGMENTNAME_CN\"/><Cell col=\"4\" text=\"공정명(V)\" tooltiptext=\"PROCESSSEGMENTNAME_VN\"/><Cell col=\"5\" text=\"대공정\" tooltiptext=\"TOPPROCESSSEGMENTCLASS\"/><Cell col=\"6\" tooltiptext=\"MIDDLEPROCESSSEGMENTCLASS\" text=\"중공정\"/><Cell col=\"7\" tooltiptext=\"SEGMENTTYPE\" text=\"공정유형\"/><Cell col=\"8\" tooltiptext=\"STEPCLASS\" text=\"스텝유형\"/><Cell col=\"9\" tooltiptext=\"STEPTYPE\" text=\"작업단위\"/><Cell col=\"10\" tooltiptext=\"SUBSEGMENTID\" text=\"세부 공정\"/><Cell col=\"11\" tooltiptext=\"ISTOOLWORK\" text=\"치공구 작업\"/><Cell col=\"12\" text=\"수입검사유무\" tooltiptext=\"ISINCOMINGINSPECTION\"/><Cell col=\"13\" text=\"외주사양 구분\" tooltiptext=\"OUTSOURCINGSPECTYPE\"/><Cell col=\"14\" text=\"도금유형\" tooltiptext=\"PLATINGTYPE\"/><Cell col=\"15\" text=\"자재\" tooltiptext=\"MATERIALCHANGETYPE\"/><Cell col=\"16\" tooltiptext=\"ISREQUIREDOPERATIONSPEC\" text=\"공정SPEC\"/><Cell col=\"17\" tooltiptext=\"ISREQUIREDTOOL\" text=\"치공구\"/><Cell col=\"18\" tooltiptext=\"COSTCODE\" text=\"원가코드\"/><Cell col=\"19\" tooltiptext=\"VALIDSTATE\" text=\"유효상태\"/><Cell col=\"20\" text=\"생성자\" tooltiptext=\"CREATOR\"/><Cell col=\"21\" text=\"생성일\" tooltiptext=\"CREATEDTIME\"/><Cell col=\"22\" tooltiptext=\"MODIFIER\" text=\"수정자\"/><Cell col=\"23\" text=\"수정일\" tooltiptext=\"MODIFIEDTIME\"/></Band><Band id=\"body\"><Cell text=\"bind:STANDARDOPERATIONID\"/><Cell col=\"1\" text=\"bind:PROCESSSEGMENTNAME_KR\"/><Cell col=\"2\" text=\"bind:PROCESSSEGMENTNAME_US\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTNAME_CN\"/><Cell col=\"4\" text=\"bind:PROCESSSEGMENTNAME_VN\"/><Cell col=\"5\" text=\"bind:TOPPROCESSSEGMENTCLASS\"/><Cell col=\"6\" text=\"bind:MIDDLEPROCESSSEGMENTCLASS\"/><Cell col=\"7\" text=\"bind:SEGMENTTYPE\" combocodecol=\"C,ProcessSegmentType,,Y,N\" displaytype=\"combotext\"/><Cell col=\"8\" text=\"bind:STEPCLASS\" displaytype=\"combotext\" combocodecol=\"C,StepType,,Y,N\"/><Cell col=\"9\" text=\"bind:STEPTYPE\"/><Cell col=\"10\" text=\"bind:SUBSEGMENTID\" combocodecol=\"C,Subsegmentid1,,Y,N\" displaytype=\"combotext\"/><Cell col=\"11\" text=\"bind:ISTOOLWORK\" combocodecol=\"C,YesNo,,Y,N\" displaytype=\"combotext\"/><Cell col=\"12\" text=\"bind:ISINCOMINGINSPECTION\" combocodecol=\"C,YesNo,,Y,N\" displaytype=\"combotext\"/><Cell col=\"13\" text=\"bind:SUBSEGMENTID1\" combocodecol=\"C,OutsourcingSpecType,,Y,N\" displaytype=\"combotext\"/><Cell col=\"14\" tooltiptext=\"PLATINGTYPE\" displaytype=\"combotext\" text=\"bind:PLATINGTYPE\" combocodecol=\"C,PlatingType2,,Y,N\"/><Cell col=\"15\" text=\"bind:ISREQUIREDMATERIAL\" combocodecol=\"C,YesNo,,Y,N\" displaytype=\"combotext\"/><Cell col=\"16\" text=\"bind:ISREQUIREDOPERATIONSPEC\" combocodecol=\"C,YesNo,,Y,N\" displaytype=\"combotext\"/><Cell col=\"17\" text=\"bind:ISREQUIREDTOOL\" combocodecol=\"C,YesNo,,Y,N\" displaytype=\"combotext\"/><Cell col=\"18\" text=\"bind:COSTCODE\"/><Cell col=\"19\" text=\"bind:VALIDSTATE\" combocodecol=\"C,ValidState,,Y,N\" displaytype=\"combotext\"/><Cell col=\"20\" text=\"bind:CREATOR\"/><Cell col=\"21\" text=\"bind:CREATEDTIME\" displaytype=\"text\"/><Cell col=\"22\" text=\"bind:MODIFIER\"/><Cell col=\"23\" text=\"bind:MODIFIEDTIME\" displaytype=\"text\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","5","0","300","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("표준공정 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("STANDARDSEGMENTLIST");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_processList",null,null,"29","24","0","grd_processList:0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_processList","sta_subTitle:17","0","200","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
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

            obj = new Button("btn_saveArea",null,"16","26","24","btn_help:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","100","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_text("표준공정 관리");
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
        this.addIncludeScript("BAS00500M.xfdl","lib::lib_bas.xjs");
        this.registerScript("BAS00500M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: UOM 관리
         * 파일명 		: BAS00500M.xfdl
         * 작성자 		: 최성민
         * 작성일 		: 2021.02.26
         *
         * 설  명		: 기준관리 - 표준공정관리 화면
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.02.26	최성민   	최초작성
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
        this.formDiv2 = this.div_work.form.tab.Tabpage1.form.tab_00;

        this.g_positionTree; //저장 후 위치고정을 위한 전역변수
        this.g_positionA; //저장 후 위치고정을 위한 전역변수
        this.g_positionB; //저장 후 위치고정을 위한 전역변수
        this.g_treeId 	= "";
        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);

        	this.basfn_saveBtn(this.div_header.form.btn_saveArea); //저장버튼 공통처리 함수 호출

        	/* 공장 ID 조회용 DS */
        	this.ds_factory.clearData();
        	var sSvcID 			= "selectSiteList";
        	var sController 	= "/basCommon/selectCustomQuery.do";
        	var sInDatasets   	= "";
        	var sOutDatasets  	= "ds_factory=output";
        	var sArgs 		  	= "";
        	sArgs 			+= this.gfn_setParam("SQL_ID", "selectSiteList");
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

        	/* 검사방법 조회용 DS */
        	this.ds_inspection.clearData();
        	var sSvcID 			= "selectInspectionList";
        	var sController 	= "/basCommon/selectCustomQuery.do";
        	var sInDatasets   	= "";
        	var sOutDatasets  	= "ds_inspection=output";
        	var sArgs 		  	= "";
        	sArgs 			+= this.gfn_setParam("SQL_ID", "selectInspectionList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, true);

        	this.fn_formInit();
        	this.fn_search();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        this.fn_save = function(obj,e)
        {
        	if (!this.gfn_dsIsUpdated(this.ds_processAList)
        	 && !this.gfn_dsIsUpdated(this.ds_processBList)
        	 && !this.gfn_dsIsUpdated(this.ds_processCList)
        	 && !this.gfn_dsIsUpdated(this.ds_processDList)
        	 )
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}

        	/* 그리드 필수체크 */
        	var componentA = this.formDiv1.grd_processA;
        	var componentB = this.formDiv1.grd_processB;
        	var componentC = this.formDiv2.Tabpage1.form.grd_processC;
        	var componentD = this.formDiv2.Tabpage2.form.grd_processD;

        	var strColIdListA = "PROCESSSEGMENTCLASSID";
        	var strColIdListB = "SUBSEGMENTID";
        	var strColIdListC = "EQUIPMENTCLASSID";
        	var strColIdListD = "INSPITEMID";

        	/* 공정그룹 그리드 체크 */
        	var rtn = this.nfn_MandatoryCheckGrid(componentA, strColIdListA);
        	if (rtn == false) return;

        	/* 표준공정 그리드 체크 */
        	rtn = this.nfn_MandatoryCheckGrid(componentB, strColIdListB);
        	if (rtn == false) return;

        	/* 설비그룹 그리드 체크 */
        	rtn = this.nfn_MandatoryCheckGrid(componentC, strColIdListC);
        	if (rtn == false) return;

        	/* SPEC 그리드 체크 */
        	rtn = this.nfn_MandatoryCheckGrid(componentD, strColIdListD);
        	if (rtn == false) return;

        	this.g_positionTree = this.ds_tree.rowposition;
        	this.g_positionA = this.ds_processAList.rowposition;
        	this.g_positionB = this.ds_processBList.rowposition;
        	this.g_treeId = this.ds_tree.getColumn(this.ds_tree.rowposition, "PROCESSSEGMENTCLASSID");
        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveProcess";
        	var sController 	= "/bas00500/saveProcess.do";
        	var sInDatasets 	= "INPUT_A=ds_processAList:U INPUT_B=ds_processBList:U INPUT_C=ds_processCList:U INPUT_D=ds_processDList:U";
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
        			this.fn_searchTreeList();						//탭1 트리 조회
        		break;
        		case 1:
        			this.fn_searchProcessSegmentExtlist();			//탭2 공정현황 조회
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
        		if (trId == "saveProcess")
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
        		if (trId == "selectTreeList")
        		{
        		// 이전 선택 값 확인
        			var nRowPos = this.ds_tree.findRow("PROCESSSEGMENTCLASSID",this.g_treeId);
        			trace("nRowPos===" + nRowPos);
        			if(nRowPos == 0){
        				this.ds_tree.set_rowposition(0);
        			} else if(nRowPos > 0) {
        				this.ds_tree.set_rowposition(nRowPos);
        			} else {
        				if(this.ds_tree.rowcount>0){
        					var idx = 0;

        					if(!this.nfn_isNull(this.g_positionTree)){
        						idx = this.g_positionTree;
        						this.ds_tree.set_rowposition(idx);
        					} else {
        						this.fn_searchProcessAList(idx);
        					}
        				} else {
        					this.fn_searchProcessAList(-1);
        				}
        			}
        		} else if (trId == "selectProcessAList") {
        			if(this.ds_processAList.rowcount>0){
        				var idx = 0;
        				if(!this.nfn_isNull(this.g_positionA)){
        					idx = this.g_positionA;
        				}
        				this.ds_processAList.set_enableevent(false);
        				this.ds_processAList.set_rowposition(idx);
        				this.ds_processAList.set_enableevent(true);
        				this.fn_searchProcessBList(idx);
        			} else {
        				this.fn_searchProcessBList(-1);
        			}
        		} else if (trId == "selectProcessBList") {
        			if(this.ds_processBList.rowcount>0){
        				var idx = 0;
        				if(!this.nfn_isNull(this.g_positionB)){
        					idx = this.g_positionB;
        				}
        				this.ds_processBList.set_enableevent(false);
        				this.ds_processBList.set_rowposition(idx);
        				this.ds_processBList.set_enableevent(true);

        				this.fn_searchProcessCList(idx);
        				this.fn_searchProcessDList(idx);
        			} else {
        				this.fn_searchProcessCList(-1);
        				this.fn_searchProcessDList(-1);
        			}
        		} else if (trId == "saveProcess") {
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.fn_searchTreeList();
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

        	if(svcId =="GRD_EQUIPMENT"){
        		oArg.arg_type = "CA";
        		opts = "width=800,height=500";
        		//oArg.arg_searchStr = "1=1";
        		oArg.arg_rtnCols = "EQUIPMENTCLASSID"
        						 +"|EQUIPMENTCLASSNAME"
        						 +"|TOPEQUIPMENTCLASSID"
        						 +"|TOPEQUIPMENTCLASS"
        						 +"|MIDDLEEQUIPMENTCLASSID"
        						 +"|MIDDLEEQUIPMENTCLASS"
        						 +"|DESCRIPTION";
        	} else if(svcId =="GRD_INSPECTION"){
        		oArg.arg_type = "C";
        		var rowPosition = this.ds_processDList.rowposition;
        		var inspItemClassId 	= this.ds_processDList.getColumn(rowPosition, "INSPITEMCLASSID");

        		opts = "width=800,height=500";
        		oArg.arg_paramCols="INSPECTIONCLASSID";
        		oArg.arg_paramValues=inspItemClassId;
        		oArg.arg_rtnCols = "INSPITEMID"
        						 +"|INSPITEMNAME"
        	}
        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        }

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId =="GRD_INSPECTION"){
        		var inspClassId 	= this.ds_processDList.getColumn(this.ds_processDList.rowposition, "INSPITEMCLASSID");
        		var inspDefId 		= this.ds_processDList.getColumn(this.ds_processDList.rowposition, "INSPECTIONDEFID");
        		var parentId 		= this.ds_processBList.getColumn(this.ds_processBList.rowposition, "PROCESSSEGMENTID");
        		for(var i=0; i<rtn.length; i++){
        				var colArray = rtn[i];
        				var inspId = colArray[0];
        				var inspNm = colArray[1];

        				if(i==0){
        					addRow = this.ds_processDList.rowposition;
        				} else {
        					addRow = this.ds_processDList.addRow();
        				}

        				this.ds_processDList.setColumn(addRow, "PROCESSSEGMENTID", parentId);
        				this.ds_processDList.setColumn(addRow, "INSPECTIONDEFID", inspDefId);
        				this.ds_processDList.setColumn(addRow, "INSPITEMCLASSID", inspClassId);
        				this.ds_processDList.setColumn(addRow, "INSPITEMID", inspId);
        				this.ds_processDList.setColumn(addRow, "INSPITEMNAME", inspNm);
        				this.ds_processDList.setColumn(addRow, "VALIDSTATE", "Valid");
        		}
        	}
        	if(sPopupId =="GRD_EQUIPMENT"){
        		var parentId 	= this.ds_processBList.getColumn(this.ds_processBList.rowposition, "PROCESSSEGMENTID");

        		for(var i=0; i<rtn.length; i++){
        				var colArray = rtn[i];
        				var equipmentClassId = colArray[0];
        				var equipmentClassName = colArray[1];
        				var sRow 			= this.ds_processCList.findRowExpr("EQUIPMENTCLASSID == '"+equipmentClassId+"'");

        				//이미 존재하는 값
        				if(sRow>=0){
        					this.gfn_Message("OspDataOverlapCheck", equipmentClassId, "warning", "ok");
        					return;
        				}

        				if(i==0){
        					addRow = this.ds_processCList.rowposition;
        				} else {
        					addRow = this.ds_processCList.addRow();
        				}
        				this.ds_processCList.setColumn(addRow, "PROCESSSEGMENTID", parentId);
        				this.ds_processCList.setColumn(addRow, "EQUIPMENTCLASSID", equipmentClassId);
        				this.ds_processCList.setColumn(addRow, "EQUIPMENTCLASSNAME", equipmentClassName);
        				this.ds_processCList.setColumn(addRow, "VALIDSTATE", "Valid");
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
        	this.searchDiv1.cboValidState.set_value("Valid");
        	this.searchDiv2.cboValidState.set_value("Valid");
        }

        /*
         * 기능 : 탭1. 트리 조회
         */
        this.fn_searchTreeList = function ()
        {
        	this.ds_tree.clearData();

        	//전역변수 초기화
        	var validState = this.searchDiv1.cboValidState.value;
        	var sSvcID 			= "selectTreeList";
        	var sController 	= "/bas00500/selectTreeList.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_tree=output";
        	var sArgs 			= "";
        		sArgs 			+= this.gfn_setParam("VALIDSTATE", validState);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 탭1. 공정그룹 조회
         */
        this.fn_searchProcessAList = function (rowPosition)
        {
        	this.ds_processAList.clearData();
        	var validState 	= this.searchDiv1.cboValidState.value;
        	var parentId 	= this.ds_tree.getColumn(rowPosition, "PROCESSSEGMENTCLASSID");

        	var sSvcID 			= "selectProcessAList";
        	var sController 	= "/bas00500/selectProcessAList.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_processAList=output";
        	var sArgs 			= "";
        		sArgs 			+= this.gfn_setParam("VALIDSTATE", validState);
        		sArgs 			+= this.gfn_setParam("PARENTPROCESSSEGMENTCLASSID", parentId);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 탭1. 표준공정 조회
         */
        this.fn_searchProcessBList = function (rowPosition)
        {
        	this.ds_processBList.clearData();
        	var validState 	= this.searchDiv1.cboValidState.value;
        	var parentId 	= this.ds_processAList.getColumn(rowPosition, "PROCESSSEGMENTCLASSID");
        	var sSvcID 			= "selectProcessBList";
        	var sController 	= "/bas00500/selectProcessBList.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_processBList=output";
        	var sArgs 			= "";
        		sArgs 			+= this.gfn_setParam("VALIDSTATE", validState);
        		sArgs 			+= this.gfn_setParam("PROCESSSEGMENTCLASSID", parentId);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 탭1. 설비그룹 조회
         */
        this.fn_searchProcessCList = function (rowPosition)
        {
        	this.ds_processCList.clearData();
        	var validState 	= this.searchDiv1.cboValidState.value;
        	var parentId 	= this.ds_processBList.getColumn(rowPosition, "PROCESSSEGMENTID");
        	var sSvcID 			= "selectProcessCList";
        	var sController 	= "/bas00500/selectProcessCList.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_processCList=output";
        	var sArgs 			= "";
        		sArgs 			+= this.gfn_setParam("VALIDSTATE", validState);
        		sArgs 			+= this.gfn_setParam("PROCESSSEGMENTID", parentId);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 탭1. Spec 조회
         */
        this.fn_searchProcessDList = function (rowPosition)
        {
        	this.ds_processDList.clearData();
        	var validState 	= this.searchDiv1.cboValidState.value;
        	var parentId 	= this.ds_processBList.getColumn(rowPosition, "PROCESSSEGMENTID");
        	var sSvcID 			= "selectProcessDList";
        	var sController 	= "/bas00500/selectProcessDList.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_processDList=output";
        	var sArgs 			= "";
        		sArgs 			+= this.gfn_setParam("VALIDSTATE", validState);
        		sArgs 			+= this.gfn_setParam("PROCESSSEGMENTID", parentId);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 탭2. 공정현황 조회
         */
        this.fn_searchProcessSegmentExtlist = function ()
        {
        	this.ds_processList.clearData();
        	var validState = this.searchDiv2.cboValidState.value;
        	var searchType = this.searchDiv2.cboSearchType.value;
        	var searchValue = this.searchDiv2.edtSearchValue.value;

        	var sSvcID 			= "selectProcessSegmentExtlist";
        	var sController 	= "/bas00500/selectProcessSegmentExtlist.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_processList=output";
        	var sArgs 			= "";
        		sArgs 			+= this.gfn_setParam("VALIDSTATE", validState);
        		sArgs 			+= this.gfn_setParam("SEARCHTYPE", searchType);
        		sArgs 			+= this.gfn_setParam("SEARCHVALUE", searchValue);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        /*
         * 탭1 : 공정그룹 행 추가
         */
        this.fn_addA = function(obj,e)
        {
        	var dsObj = this.ds_processAList;
        	if(dsObj == null) return;
        	var row = dsObj.addRow();
        	var rowPosition = this.ds_tree.rowposition;
        	var processId = this.ds_tree.getColumn(rowPosition, "PROCESSSEGMENTCLASSID");
        	var lvl = this.ds_tree.getColumn(rowPosition, "LVL");
        	var classType = lvl=="0" ? "TopProcessSegmentClass" : "MiddleProcessSegmentClass";

        	/* KEY컬럼 기본세팅 */
        	dsObj.setColumn(row,"PARENTPROCESSSEGMENTCLASSID",processId);
        	dsObj.setColumn(row,"PROCESSSEGMENTCLASSTYPE",classType);
        	dsObj.setColumn(row,"VALIDSTATE","Valid");
        };


        /*
         * 탭1 : 표준공정 행 추가
         */
        this.fn_addB = function(obj,e)
        {
        	var parentId = this.ds_processAList.getColumn(this.ds_processAList.rowposition, "PROCESSSEGMENTCLASSID");
        	var segmentClassType = this.ds_processAList.getColumn(this.ds_processAList.rowposition, "PROCESSSEGMENTCLASSTYPE");
        	var rowType =  this.ds_processAList.getRowType(this.ds_processAList.rowposition);

        	if(this.nfn_isNull(parentId) || rowType == Dataset.ROWTYPE_INSERT) {
        		this.gfn_Message("RequiredProcessSegId", "", "warning", "ok");
        		return;
        	}

        	//중공정이 아니면 표준공정 추가 불가
        	if(segmentClassType!="MiddleProcessSegmentClass"){
        		return;
        	}

        	var dsObj = this.ds_processBList;
        	if(dsObj == null) return;
        	var row = dsObj.addRow();
        	var rowPosition = this.ds_processAList.rowposition;
        	var processId = this.ds_processAList.getColumn(rowPosition, "PROCESSSEGMENTCLASSID");

        	/* KEY컬럼 기본세팅 */
        	dsObj.setColumn(row,"PROCESSSEGMENTCLASSID",processId);
        	dsObj.setColumn(row,"VALIDSTATE","Valid");
        };

        /*
         * 탭1 : 설비그룹 행 추가
         */
        this.fn_addC = function(obj,e)
        {
        	var rowPosition = this.ds_processBList.rowposition;
        	var parentId 	= this.ds_processBList.getColumn(rowPosition, "PROCESSSEGMENTID");
        	var rowType		= this.ds_processBList.getRowType(rowPosition);

        	if(this.nfn_isNull(parentId) || rowType == Dataset.ROWTYPE_INSERT) {
        		this.gfn_Message("RequiredProcessSegId", "", "warning", "ok");
        		return;
        	}

        	var dsObj = this.ds_processCList;
        	if(dsObj == null) return;
        	var row = dsObj.addRow();

        	/* KEY컬럼 기본세팅 */
        	dsObj.setColumn(row,"PROCESSSEGMENTID",parentId);
        	dsObj.setColumn(row,"VALIDSTATE","Valid");
        };

        /*
         * 탭1 : Spec 행 추가
         */
        this.fn_addD = function(obj,e)
        {
        	var rowPosition = this.ds_processBList.rowposition;
        	var parentId 	= this.ds_processBList.getColumn(rowPosition, "PROCESSSEGMENTID");
        	var rowType		= this.ds_processBList.getRowType(rowPosition);

        	if(this.nfn_isNull(parentId) || rowType == Dataset.ROWTYPE_INSERT) {
        		this.gfn_Message("RequiredProcessSegId", "", "warning", "ok");
        		return;
        	}

        	var dsObj = this.ds_processDList;
        	if(dsObj == null) return;
        	var row = dsObj.addRow();

        	/* KEY컬럼 기본세팅 */
        	dsObj.setColumn(row,"PROCESSSEGMENTID",parentId);
        	dsObj.setColumn(row,"INSPECTIONDEFID","OperationInspection");
        	dsObj.setColumn(row,"VALIDSTATE","Valid");
        };

        this.fn_deleteA = function(obj,e)
        {
        	//공통함수
        	this.basfn_deleteRow(this.ds_processAList);
        };

        this.fn_deleteB = function(obj,e)
        {
        	//공통함수
        	this.basfn_deleteRow(this.ds_processBList);
        };

        this.fn_deleteC = function(obj,e)
        {
        	//공통함수
        	this.basfn_deleteRow(this.ds_processCList);
        };

        this.fn_deleteD = function(obj,e)
        {
        	//공통함수
        	this.basfn_deleteRow(this.ds_processDList);
        };

        this.fn_copyA = function(obj,e)
        {
        	this.basfn_copyDataset(this.ds_processAList, null, "CREATOR,MODIFIER,CREATEDTIME,MODIFIEDTIME");
        };

        this.fn_copyB = function(obj,e)
        {
        	this.basfn_copyDataset(this.ds_processBList, null, "CREATOR,MODIFIER,CREATEDTIME,MODIFIEDTIME");
        };

        this.fn_copyC = function(obj,e)
        {
        	this.basfn_copyDataset(this.ds_processCList, null, "CREATOR,MODIFIER,CREATEDTIME,MODIFIEDTIME");
        };

        this.fn_copyD = function(obj,e)
        {
        	this.basfn_copyDataset(this.ds_processDList, null, "CREATOR,MODIFIER,CREATEDTIME,MODIFIEDTIME");
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
        		var addParam = "ALLVIEWS|PROCESSSEGMENTID|PROCESSSEGMENTNAME";
        			/* 조회조건 조회 */
        			this.basfn_setCustomQueryCmb(this.searchDiv2.cboSearchType // Object
        								, "selectCustomCodeList,,Y,A" // OPTION
        								, this.gfn_setParam("ADD_PARAM", addParam));	  // 추가 파라미터
        			this.searchDiv2.cboSearchType.set_value("ALLVIEWS");
        	}
        };

        this.ds_tree_canrowposchange = function(obj,e)
        {
        	var bOk = true;
        	if (this.gfn_dsIsUpdated(this.ds_processAList)
        	   || this.gfn_dsIsUpdated(this.ds_processBList)
        	   || this.gfn_dsIsUpdated(this.ds_processCList)) {
        		bOk = this.gfn_Message("WRITTENBEDELETE", null, "conf", "yesno");
        	}

        	if(bOk){
        		this.g_positionTree = e.newrow;
        		this.fn_searchProcessAList(e.newrow);
        	} else {
        		return false;
        	}
        };




        this.ds_processAList_canrowposchange = function(obj,e)
        {
        	var bOk = true;
        	if (this.gfn_dsIsUpdated(this.ds_processBList)) {
        		bOk = this.gfn_Message("WRITTENBEDELETE", null, "conf", "yesno");
        	}
        	if(bOk){
        		this.fn_searchProcessBList(e.newrow);
        	} else {
        		return false;
        	}
        };

        this.ds_processBList_onvaluechanged = function(obj,e)
        {
        	if (e.columnid == "STEPCLASS") {
        		var sRow 		= this.ds_step.findRowExpr("CODE == '"+e.newvalue+"'");
        		var stepName 	= this.ds_step.getColumn(sRow, "NAME");
        		var stepTypeKey	= this.ds_step.getColumn(sRow, "DESCRIPTION");

        		this.ds_processBList.setColumn(e.row, "STEPTYPENAME", stepName);
        		this.ds_processBList.setColumn(e.row, "STEPTYPEKEY", stepTypeKey);
        	}
        };

        this.div_work_tab_Tabpage1_grd_processB_oncloseup = function(obj,e)
        {
        	this.formDiv1.grd_processB.updateToDataset();
        };

        this.ds_processBList_canrowposchange = function(obj,e)
        {
        	var bOk = true;
        	if (this.gfn_dsIsUpdated(this.ds_processCList)) {
        		bOk = this.gfn_Message("WRITTENBEDELETE", null, "conf", "yesno");
        	}
        	if(bOk){
        		this.fn_searchProcessCList(e.newrow);
        		this.fn_searchProcessDList(e.newrow);
        	} else {
        		return false;
        	}
        };

        this.div_work_tab_Tabpage1_tab_00_Tabpage1_grd_processC_onexpandup = function(obj,e)
        {
        	if(e.row < 0) return;
        	if (this.nfn_isEqualCol(obj, e.cell, "EQUIPMENTCLASSID")) {
        		this.fn_openPop("GRD_EQUIPMENT","P00113"); //설비 조회
        	}
        };

        this.div_work_tab_Tabpage1_tab_00_Tabpage2_grd_processD_onexpandup = function(obj,e)
        {
        	if(e.row < 0) return;
        	if (this.nfn_isEqualCol(obj, e.cell, "INSPITEMID")) {
        		this.fn_openPop("GRD_INSPECTION","P00123"); //검사방법 조회
        	}
        };

        this.div_work_tab_Tabpage1_tab_00_Tabpage2_grd_processD_oncloseup = function(obj,e)
        {
        	this.formDiv2.Tabpage2.form.grd_processD.updateToDataset();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tabpage1.form.btn_clear2.addEventHandler("onclick",this.fn_formInit,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage2.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage2.form.btn_clear2.addEventHandler("onclick",this.fn_formInit,this);
            this.div_work.form.tab.addEventHandler("onchanged",this.div_work_tab_onchanged,this);
            this.div_work.form.tab.Tabpage1.form.grd_processA.addEventHandler("onexpandup",this.div_work_tab_Tabpage1_grd_areaListTab1_onexpandup,this);
            this.div_work.form.tab.Tabpage1.form.grd_processB.addEventHandler("onexpandup",this.div_work_tab_Tabpage1_grd_resourceListTab1_onexpandup,this);
            this.div_work.form.tab.Tabpage1.form.grd_processB.addEventHandler("oncloseup",this.div_work_tab_Tabpage1_grd_processB_oncloseup,this);
            this.div_work.form.tab.Tabpage1.form.btn_delA.addEventHandler("onclick",this.fn_deleteA,this);
            this.div_work.form.tab.Tabpage1.form.btn_addA.addEventHandler("onclick",this.fn_addA,this);
            this.div_work.form.tab.Tabpage1.form.btn_copyA.addEventHandler("onclick",this.fn_copyA,this);
            this.div_work.form.tab.Tabpage1.form.btn_addB.addEventHandler("onclick",this.fn_addB,this);
            this.div_work.form.tab.Tabpage1.form.btn_delB.addEventHandler("onclick",this.fn_deleteB,this);
            this.div_work.form.tab.Tabpage1.form.btn_copyB.addEventHandler("onclick",this.fn_copyB,this);
            this.div_work.form.tab.Tabpage1.form.tab_00.Tabpage1.form.grd_processC.addEventHandler("oncloseup",this.div_work_tab_Tabpage1_grd_resourceListTab1_oncloseup,this);
            this.div_work.form.tab.Tabpage1.form.tab_00.Tabpage1.form.grd_processC.addEventHandler("onexpandup",this.div_work_tab_Tabpage1_tab_00_Tabpage1_grd_processC_onexpandup,this);
            this.div_work.form.tab.Tabpage1.form.tab_00.Tabpage1.form.btn_addC.addEventHandler("onclick",this.fn_addC,this);
            this.div_work.form.tab.Tabpage1.form.tab_00.Tabpage1.form.btn_delC.addEventHandler("onclick",this.fn_deleteC,this);
            this.div_work.form.tab.Tabpage1.form.tab_00.Tabpage1.form.btn_copyC.addEventHandler("onclick",this.fn_copyC,this);
            this.div_work.form.tab.Tabpage1.form.tab_00.Tabpage2.form.btn_addD.addEventHandler("onclick",this.fn_addD,this);
            this.div_work.form.tab.Tabpage1.form.tab_00.Tabpage2.form.btn_delD.addEventHandler("onclick",this.fn_deleteD,this);
            this.div_work.form.tab.Tabpage1.form.tab_00.Tabpage2.form.btn_copyD.addEventHandler("onclick",this.fn_copyD,this);
            this.div_work.form.tab.Tabpage1.form.tab_00.Tabpage2.form.grd_processD.addEventHandler("onexpandup",this.div_work_tab_Tabpage1_tab_00_Tabpage2_grd_processD_onexpandup,this);
            this.div_work.form.tab.Tabpage1.form.tab_00.Tabpage2.form.grd_processD.addEventHandler("oncloseup",this.div_work_tab_Tabpage1_tab_00_Tabpage2_grd_processD_oncloseup,this);
            this.div_header.form.btn_saveArea.addEventHandler("onclick",this.fn_save,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.ds_tree.addEventHandler("canrowposchange",this.ds_tree_canrowposchange,this);
            this.ds_tree.addEventHandler("onrowposchanged",this.ds_tree_onrowposchanged,this);
            this.ds_processAList.addEventHandler("canrowposchange",this.ds_processAList_canrowposchange,this);
            this.ds_processAList.addEventHandler("onrowposchanged",this.ds_processAList_onrowposchanged,this);
            this.ds_processBList.addEventHandler("onvaluechanged",this.ds_processBList_onvaluechanged,this);
            this.ds_processBList.addEventHandler("canrowposchange",this.ds_processBList_canrowposchange,this);
            this.ds_processBList.addEventHandler("onrowposchanged",this.ds_processBList_onrowposchanged,this);
        };
        this.loadIncludeScript("BAS00500M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
