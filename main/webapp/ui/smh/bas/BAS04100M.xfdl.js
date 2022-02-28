(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS04100M");
            this.set_titletext("검사정의 및 통제");
            this.set_tooltiptext("MENU_PG-SD-0451");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inspectionclassList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"INSPECTIONCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONCLASSNAME_KR\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONCLASSNAME_US\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONCLASSNAME_CN\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONCLASSNAME_VN\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONCLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONRESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISUSEITEM\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_processsegmentclassLList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTPROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inspectionsegmentrelLList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"INSPECTIONCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISREQUIRED\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CREATORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_processsegmentclassMList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTPROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inspectionsegmentrelMList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"INSPECTIONCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISREQUIRED\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CREATORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_processsegmentclassList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inspectionsegmentrelList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"INSPECTIONCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISREQUIRED\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CREATORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"3",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"0","15","300","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","0","15","300",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_validState","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("유효상태");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("VALIDSTATE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_validState","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,ValidState,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03",null,"0","45","10","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","14","50","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","170","50","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
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
            obj.set_text("검사 정의");
            obj.set_tooltiptext("DEFECTCODE");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Grid("grd_inspectionclassList","0","35",null,null,"0","0%",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_inspectionclassList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell tooltiptext=\"INSPECTIONCLASSID\" text=\"검사종류\" cssclass=\"cell_point\"/><Cell col=\"1\" tooltiptext=\"INSPECTIONCLASSNAMEKR\" text=\"검사 종류 명(K)\"/><Cell col=\"2\" tooltiptext=\"INSPECTIONCLASSNAMEUS\" text=\"검사 종류 명(E)\"/><Cell col=\"3\" tooltiptext=\"INSPECTIONCLASSNAMECN\" text=\"검사 종류 명(C)\"/><Cell col=\"4\" tooltiptext=\"INSPECTIONCLASSNAMEVN\" text=\"검사 종류 명(V)\"/><Cell col=\"5\" tooltiptext=\"INSPECTIONCLASSTYPE\" text=\"검사종류\"/><Cell col=\"6\" tooltiptext=\"INSPECTIONRESOURCETYPE\" text=\"검사유형\"/><Cell col=\"7\" tooltiptext=\"ISUSEITEM\" text=\"검사항목사용여부\"/><Cell col=\"8\" tooltiptext=\"DESCRIPTION\" text=\"설명\"/><Cell col=\"9\" tooltiptext=\"VALIDSTATE\" text=\"유효상태\" cssclass=\"cell_point\"/><Cell col=\"10\" tooltiptext=\"CREATORNAME\" text=\"생성자명\"/><Cell col=\"11\" tooltiptext=\"CREATEDTIME\" text=\"생성일\"/><Cell col=\"12\" tooltiptext=\"MODIFIERNAME\" text=\"수정자명\"/><Cell col=\"13\" tooltiptext=\"MODIFIEDTIME\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:INSPECTIONCLASSID\" editmaxlength=\"100\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow) ==2 ? &apos;point&apos;:&apos;&apos;\" edittype=\"expr:dataset.getRowType(currow) ==2 ? &apos;text&apos;:&apos;none&apos;\"/><Cell col=\"1\" text=\"bind:INSPECTIONCLASSNAME_KR\" textAlign=\"left\" editmaxlength=\"500\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:INSPECTIONCLASSNAME_US\" textAlign=\"left\" editmaxlength=\"500\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:INSPECTIONCLASSNAME_CN\" textAlign=\"left\" editmaxlength=\"500\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:INSPECTIONCLASSNAME_VN\" textAlign=\"left\" editmaxlength=\"500\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"5\" text=\"bind:INSPECTIONCLASSTYPE\" displaytype=\"combotext\" combocodecol=\"C,InspectionClassType,,Y,N\"/><Cell col=\"6\" text=\"bind:INSPECTIONRESOURCETYPE\" editmaxlength=\"100\" displaytype=\"combotext\" combocodecol=\"C,InspectionResourceType,,Y,N\"/><Cell col=\"7\" text=\"bind:ISUSEITEM\"/><Cell col=\"8\" text=\"bind:DESCRIPTION\" editmaxlength=\"4000\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"9\" text=\"bind:VALIDSTATE\" cssclass=\"point\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,ValidState,,Y,Y\"/><Cell col=\"10\" text=\"bind:CREATORNAME\"/><Cell col=\"11\" text=\"bind:CREATEDTIME\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"12\" text=\"bind:MODIFIERNAME\"/><Cell col=\"13\" text=\"bind:MODIFIEDTIME\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","0","0","165","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("검사 정의 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("INSPECTIONDEFINITIONLIST");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_inspectionclassList","sta_subTitle:17","0","200","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_defectcoderelList",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab);
            obj.set_text("검사 통제");
            obj.set_tooltiptext("INSPECTIONCONTROL");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","0","0","260","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("대공정");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("TOPPROCESSSEGMENTCLASS");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_inspectionsegmentrelList","67.22%","50.15%",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("16");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_inspectionsegmentrelList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"180\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell tooltiptext=\"INSPECTIONCLASSNAME\" text=\"검사 종류 명\"/><Cell col=\"1\" tooltiptext=\"ISREQUIRED\" text=\"필수여부\"/><Cell col=\"2\" tooltiptext=\"VALIDSTATE\" text=\"유효상태\" cssclass=\"cell_point\"/><Cell col=\"3\" tooltiptext=\"CREATORNAME\" text=\"생성자\"/><Cell col=\"4\" tooltiptext=\"CREATEDTIME\" text=\"생성일\"/><Cell col=\"5\" tooltiptext=\"MODIFIERNAME\" text=\"수정자\"/><Cell col=\"6\" tooltiptext=\"MODIFIEDTIME\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:INSPECTIONCLASSNAME\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:ISREQUIRED\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,YesNo,NAN,Y,Y\"/><Cell col=\"2\" text=\"bind:VALIDSTATE\" cssclass=\"point\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,ValidState,,Y,Y\"/><Cell col=\"3\" text=\"bind:CREATORNAME\"/><Cell col=\"4\" text=\"bind:CREATEDTIME\" displaytype=\"date\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"5\" text=\"bind:MODIFIERNAME\"/><Cell col=\"6\" text=\"bind:MODIFIEDTIME\" displaytype=\"date\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_subTitle05","67.22%",null,"66","34",null,"grd_inspectionsegmentrelList:0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("15");
            obj.set_text("검사종류");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("INSPECTIONCLASS");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_processsegmentclassList","67.19%","34",null,null,"0","sta_subTitle05:0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("11");
            obj.set_autosizingtype("none");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_processsegmentclassList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell tooltiptext=\"PROCESSSEGMENT\" text=\"공정\"/><Cell col=\"1\" tooltiptext=\"PROCESSSEGMENTNAME\" text=\"공정명\"/></Band><Band id=\"body\"><Cell text=\"bind:PROCESSSEGMENTID\"/><Cell col=\"1\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_inspectionsegmentrelMList","33.61%","50.15%",null,null,"grd_inspectionsegmentrelList:10","0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("17");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_inspectionsegmentrelMList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"180\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell tooltiptext=\"INSPECTIONCLASSNAME\" text=\"검사 종류 명\"/><Cell col=\"1\" tooltiptext=\"ISREQUIRED\" text=\"필수여부\"/><Cell col=\"2\" tooltiptext=\"VALIDSTATE\" text=\"유효상태\" cssclass=\"cell_point\"/><Cell col=\"3\" tooltiptext=\"CREATORNAME\" text=\"생성자\"/><Cell col=\"4\" tooltiptext=\"CREATEDTIME\" text=\"생성일\"/><Cell col=\"5\" tooltiptext=\"MODIFIERNAME\" text=\"수정자\"/><Cell col=\"6\" tooltiptext=\"MODIFIEDTIME\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:INSPECTIONCLASSNAME\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:ISREQUIRED\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,YesNo,NAN,Y,Y\"/><Cell col=\"2\" text=\"bind:VALIDSTATE\" cssclass=\"point\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,ValidState,,Y,Y\"/><Cell col=\"3\" text=\"bind:CREATORNAME\"/><Cell col=\"4\" text=\"bind:CREATEDTIME\" displaytype=\"date\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"5\" text=\"bind:MODIFIERNAME\"/><Cell col=\"6\" text=\"bind:MODIFIEDTIME\" displaytype=\"date\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_subTitle03","33.61%",null,"66","34",null,"grd_inspectionsegmentrelMList:0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("7");
            obj.set_text("검사종류");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("INSPECTIONCLASS");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_processsegmentclassMList","33.61%","34",null,null,"grd_processsegmentclassList:10","sta_subTitle03:0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("10");
            obj.set_autosizingtype("none");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_processsegmentclassMList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell tooltiptext=\"PROCESSSEGMENT\" text=\"공정\"/><Cell col=\"1\" tooltiptext=\"PROCESSSEGMENTNAME\" text=\"공정명\"/></Band><Band id=\"body\"><Cell text=\"bind:PROCESSSEGMENTCLASSID\"/><Cell col=\"1\" text=\"bind:PROCESSSEGMENTCLASSNAME\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_inspectionsegmentrelLList","0","50.15%",null,null,"grd_inspectionsegmentrelMList:10","0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_inspectionsegmentrelLList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"180\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell tooltiptext=\"INSPECTIONCLASSNAME\" text=\"검사 종류 명\"/><Cell col=\"1\" tooltiptext=\"ISREQUIRED\" text=\"필수여부\"/><Cell col=\"2\" tooltiptext=\"VALIDSTATE\" text=\"유효상태\" cssclass=\"cell_point\"/><Cell col=\"3\" tooltiptext=\"CREATORNAME\" text=\"생성자\"/><Cell col=\"4\" tooltiptext=\"CREATEDTIME\" text=\"생성일\"/><Cell col=\"5\" tooltiptext=\"MODIFIERNAME\" text=\"수정자\"/><Cell col=\"6\" tooltiptext=\"MODIFIEDTIME\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:INSPECTIONCLASSNAME\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:ISREQUIRED\" combocodecol=\"C,YesNo,NAN,Y,Y\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"2\" text=\"bind:VALIDSTATE\" cssclass=\"point\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,ValidState,,Y,Y\"/><Cell col=\"3\" text=\"bind:CREATORNAME\"/><Cell col=\"4\" text=\"bind:CREATEDTIME\" displaytype=\"date\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"5\" text=\"bind:MODIFIERNAME\"/><Cell col=\"6\" text=\"bind:MODIFIEDTIME\" displaytype=\"date\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_subTitle01","0",null,"66","34",null,"grd_inspectionsegmentrelLList:0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_text("검사종류");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("INSPECTIONCLASS");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_processsegmentclassLList","0","34",null,null,"grd_processsegmentclassMList:10","sta_subTitle01:0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_autosizingtype("none");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_processsegmentclassLList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell tooltiptext=\"PROCESSSEGMENT\" text=\"공정\"/><Cell col=\"1\" tooltiptext=\"PROCESSSEGMENTNAME\" text=\"공정명\"/></Band><Band id=\"body\"><Cell text=\"bind:PROCESSSEGMENTCLASSID\"/><Cell col=\"1\" text=\"bind:PROCESSSEGMENTCLASSNAME\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_subTitle02","33.54%","0","273","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("9");
            obj.set_text("중공정");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MIDDLEPROCESSSEGMENT");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_qcsegmentList",null,"6","29","24","sta_subTitle02:10",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_inspectionsegmentrelLList",null,null,"29","24","sta_subTitle03:10","grd_inspectionsegmentrelLList:3",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_inspectionsegmentrelMList",null,null,"29","24","sta_subTitle05:10","grd_inspectionsegmentrelMList:3",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_subTitle04","67.19%","0","273","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("13");
            obj.set_text("표준공정");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("STANDARDSEGMENT");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_processsegmentclassMList",null,"6","29","24","sta_subTitle04:10",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_processsegmentclassList",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_inspectionsegmentrelList",null,null,"29","24","0","grd_inspectionsegmentrelList:3",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("14");
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
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","3",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","29",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","26","24","55",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","110","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            obj.set_tooltiptext("MENU_PG-SD-0451");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:10","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","138","10","27",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"112","45","20","1061",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);
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
        this.addIncludeScript("BAS04100M.xfdl","lib::lib_bas.xjs");
        this.registerScript("BAS04100M.xfdl", function() {
        /***************************************************************************************
         * 시스템명       : IFC MES시스템
         * 업무명         : 기준관리>>품질기준정보>>검사종류관리
         * 파일명         : BAS04100M.xfdl
         * 작성자         : yanghee.kim
         * 작성일         : 2021.03.09
         *
         * 설  명         : 검사정의 등록/수정
         *                  공정별 검사종류 등록/수정
         *---------------------------------------------------------------------------------------
         * 변경일        변경자      변경내역
         *---------------------------------------------------------------------------------------
         * 2021.03.09   yanghee.kim   최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;    //기준관리 공통 라이브러리 include

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.enterpriseid = "";
        this.g_positionL;//저장 후 위치고정을 위한 전역변수(대공정)
        this.g_positionM;//저장 후 위치고정을 위한 전역변수(중공정)
        this.g_positionS;//저장 후 위치고정을 위한 전역변수(공정)
        this.g_positionL1;//저장 후 위치고정을 위한 전역변수(대공정 검사종류)
        this.g_positionM1;//저장 후 위치고정을 위한 전역변수(중공정 검사종류)
        this.g_positionS1;//저장 후 위치고정을 위한 전역변수(공정 검사종류)

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
            this.nfn_formInit(obj);
            this.enterpriseid = this.gf_getEnterpriseId();
        	this.fn_formInit();    //최초 호출되는 초기화 함수
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        this.fn_save = function(obj,e)
        {
            var tabIdx = this.div_work.form.tab.tabindex;
            switch (tabIdx)
            {
                case 0:
                    this.fn_saveInspectionclass();        //탭1 검사 정의 저장
                break;
                case 1:
                    this.fn_saveInspectionsegmentrel();  //탭2 검사 통제 저장
                break;
            }
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
                    this.fn_searchInspectionclassList();   //탭1 검사 정의 조회
                break;
                case 1:
                    this.fn_searchProcesssegmentclassLList();  //탭2 검사 통제 - 대공정 조회
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
                this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
            }
            else
            {
                if (trId == "selectInspectionclassList")
                {
                }
                else if (trId == "selectProcesssegmentclassLList")
                {
                    if (this.ds_processsegmentclassLList.rowcount > 0)
                    {
                        this.ds_processsegmentclassLList.set_rowposition(-1);

                        if (!this.nfn_isNull(this.g_positionL))
                        {
                            this.fn_findRowSetPosition(this.ds_processsegmentclassLList, "PROCESSSEGMENTCLASSID", "g_positionL");
                        }
                        else
                        {
                            this.ds_processsegmentclassLList.set_rowposition(0);
                        }
                    }
                    else
                    {
                        this.ds_processsegmentclassLList.set_rowposition(-1);
                    }
                }
                else if (trId == "selectProcesssegmentclassMList")
                {
                    if (this.ds_processsegmentclassMList.rowcount > 0)
                    {
                        this.ds_processsegmentclassMList.set_rowposition(-1);

                        if (!this.nfn_isNull(this.g_positionM))
                        {
                            this.fn_findRowSetPosition(this.ds_processsegmentclassMList, "PROCESSSEGMENTCLASSID", "g_positionM");
                        }
                        else
                        {
                            this.ds_processsegmentclassMList.set_rowposition(0);
                        }
                    }
                    else
                    {
                        this.ds_processsegmentclassMList.set_rowposition(-1);
                    }
                }
                else if (trId == "selectProcesssegmentclassList")
                {
                    if (this.ds_processsegmentclassList.rowcount > 0)
                    {
                        this.ds_processsegmentclassList.set_rowposition(-1);

                        if (!this.nfn_isNull(this.g_positionS))
                        {
                            this.fn_findRowSetPosition(this.ds_processsegmentclassList, "PROCESSSEGMENTID", "g_positionS");
                        }
                        else
                        {
                            this.ds_processsegmentclassList.set_rowposition(0);
                        }
                    }
                }
                else if (trId == "selectProcessInspectionclassLList")
                {
                    if (this.ds_inspectionsegmentrelLList.rowcount > 0)
                    {
                        if (!this.nfn_isNull(this.g_positionL1))
                        {
                            this.fn_findRowSetPosition(this.ds_inspectionsegmentrelLList, "INSPECTIONCLASSID", "g_positionL1");
                        }
                    }
                }
                else if (trId == "selectProcessInspectionclassMList")
                {
                    if (this.ds_inspectionsegmentrelMList.rowcount > 0)
                    {
                        if (!this.nfn_isNull(this.g_positionM1))
                        {
                            this.fn_findRowSetPosition(this.ds_inspectionsegmentrelMList, "INSPECTIONCLASSID", "g_positionM1");
                        }
                    }
                }
                else if (trId == "selectProcessInspectionclassList")
                {
                    if (this.ds_inspectionsegmentrelList.rowcount > 0)
                    {
                        if (!this.nfn_isNull(this.g_positionS1))
                        {
                            this.fn_findRowSetPosition(this.ds_inspectionsegmentrelList, "INSPECTIONCLASSID", "g_positionS1");
                        }
                    }
                }
                else if (trId == "saveInspectionclass")
                {
                    this.gfn_Message("SuccessSave", null, "info", "ok");
                    this.fn_searchInspectionclassList();
                }
                else if (trId == "saveInspectionsegmentrel")
                {
                    this.gfn_Message("SuccessSave", null, "info", "ok");
                    this.fn_searchInspectionsegmentrelLList(this.ds_processsegmentclassLList.rowposition);
                    this.fn_searchInspectionsegmentrelMList(this.ds_processsegmentclassMList.rowposition);
                    this.fn_searchInspectionsegmentrelList(this.ds_processsegmentclassList.rowposition);
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
            var opts = "width=850,height=500";

            oArg.arg_type = "B";
            oArg.arg_popupCd = popId;
            oArg.arg_popupNm = "";
            oArg.arg_paramCols = "";
            oArg.arg_paramValues = "";
            oArg.arg_searchStr = "";

            this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        };

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
            var rtn = this.fv_rtnValue;
            if (this.nfn_isNull(rtn)) return;
        };

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 기능 : 최초 호출되는 초기화 함수
         */
        this.fn_formInit = function ()
        {
            this.tab_search.Tabpage1.form.cbo_validState.set_value("Valid");
        };

        /*
         * 기능 : 조회조건 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        	this.fn_formInit();
        };

        /*
         * 기능 : 탭1. 검사 정의 조회
         */
        this.fn_searchInspectionclassList = function ()
        {
            this.ds_inspectionclassList.clearData();

            var validState = this.tab_search.Tabpage1.form.cbo_validState.value;

            var sSvcID        = "selectInspectionclassList";
            var sController   = "/bas04100/selectInspectionclassList.do";
            var sInDatasets   = "";
            var sOutDatasets  = "ds_inspectionclassList=output";
            var sArgs         = "";
                sArgs        += this.gfn_setParam("ENTERPRISEID", this.enterpriseid);
                sArgs        += this.gfn_setParam("VALIDSTATE", validState);
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 탭1. 검사 정의 저장
         */
        this.fn_saveInspectionclass = function()
        {
            if (!this.gfn_dsIsUpdated(this.ds_inspectionclassList))
            {
                this.gfn_Message("NoSaveData", null, "warning", "ok");
                return;
            }

            //검사 정의 그리드 필수값 체크
            var component = this.div_work.form.tab.Tabpage1.form.grd_inspectionclassList;
            var strColIdList = "INSPECTIONCLASSNAME_KR,INSPECTIONCLASSNAME_US,INSPECTIONCLASSNAME_CN,INSPECTIONCLASSNAME_VN,VALIDSTATE";
            var rtn = this.nfn_MandatoryCheckGrid(component, strColIdList);
            if (rtn == false) return;

            // -------------------------
            // 저장
            // ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
            // ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
            // -------------------------
            var sSvcID        = "saveInspectionclass";
            var sController   = "/bas04100/saveInspectionclass.do";
            var sInDatasets   = "INPUT=ds_inspectionclassList:U";
            var sOutDatasets  = "";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 탭2. 검사 통제 - 대공정 조회
         */
        this.fn_searchProcesssegmentclassLList = function ()
        {
            //검색시에는 하위 데이터셋도 초기화
            this.ds_processsegmentclassLList.clearData();
            this.ds_processsegmentclassMList.clearData();
            this.ds_processsegmentclassList.clearData();
            this.ds_inspectionsegmentrelLList.clearData();
            this.ds_inspectionsegmentrelMList.clearData();
            this.ds_inspectionsegmentrelList.clearData();

            var validState = this.tab_search.Tabpage1.form.cbo_validState.value;

            var sSvcID        = "selectProcesssegmentclassLList";
            var sController   = "/bas04100/selectProcesssegmentclassLList.do";
            var sInDatasets   = "";
            var sOutDatasets  = "ds_processsegmentclassLList=output";
            var sArgs         = "";
                sArgs        += this.gfn_setParam("ENTERPRISEID", this.enterpriseid);
                sArgs        += this.gfn_setParam("VALIDSTATE", validState);
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 탭2. 검사 통제 - 중공정 조회
         */
        this.fn_searchProcesssegmentclassMList = function (pRow)
        {
            this.ds_processsegmentclassMList.clearData();

            if (pRow < 0) return false;

            var processsgementclassid = this.ds_processsegmentclassLList.getColumn(pRow, "PROCESSSEGMENTCLASSID");
            var validState = this.tab_search.Tabpage1.form.cbo_validState.value;

            var sSvcID        = "selectProcesssegmentclassMList";
            var sController   = "/bas04100/selectProcesssegmentclassMList.do";
            var sInDatasets   = "";
            var sOutDatasets  = "ds_processsegmentclassMList=output";
            var sArgs         = "";
                sArgs        += this.gfn_setParam("ENTERPRISEID", this.enterpriseid);
                sArgs        += this.gfn_setParam("VALIDSTATE", validState);
                sArgs        += this.gfn_setParam("PARENTPROCESSSEGMENTCLASSID", processsgementclassid);
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 탭2. 검사 통제 - 공정 조회
         */
        this.fn_searchProcesssegmentclassList = function (pRow)
        {
            this.ds_processsegmentclassList.clearData();

            if (pRow < 0) return false;

            var processsgementclassid = this.ds_processsegmentclassMList.getColumn(pRow, "PROCESSSEGMENTCLASSID");
            var validState = this.tab_search.Tabpage1.form.cbo_validState.value;

            var sSvcID        = "selectProcesssegmentclassList";
            var sController   = "/bas04100/selectProcesssegmentclassList.do";
            var sInDatasets   = "";
            var sOutDatasets  = "ds_processsegmentclassList=output";
            var sArgs         = "";
                sArgs        += this.gfn_setParam("ENTERPRISEID", this.enterpriseid);
                sArgs        += this.gfn_setParam("VALIDSTATE", validState);
                sArgs        += this.gfn_setParam("PROCESSSEGMENTCLASSID", processsgementclassid);
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 탭2. 검사 통제 - 대공정 검사종류 조회
         */
        this.fn_searchInspectionsegmentrelLList = function (pRow)
        {
            this.ds_inspectionsegmentrelLList.clearData();

            if (pRow < 0) return false;

            var processsegmentid = this.ds_processsegmentclassLList.getColumn(pRow, "PROCESSSEGMENTCLASSID");
            var validState = this.tab_search.Tabpage1.form.cbo_validState.value;

            var sSvcID        = "selectProcessInspectionclassLList";
            var sController   = "/bas04100/selectProcessInspectionclassList.do";
            var sInDatasets   = "";
            var sOutDatasets  = "ds_inspectionsegmentrelLList=output";
            var sArgs         = "";
                sArgs        += this.gfn_setParam("ENTERPRISEID", this.enterpriseid);
                sArgs        += this.gfn_setParam("VALIDSTATE", validState);
                sArgs        += this.gfn_setParam("PROCESSSEGMENTID", processsegmentid);
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 탭2. 검사 통제 - 중공정 검사종류 조회
         */
        this.fn_searchInspectionsegmentrelMList = function (pRow)
        {
            this.ds_inspectionsegmentrelMList.clearData();

            if (pRow < 0) return false;

            var processsegmentid = this.ds_processsegmentclassMList.getColumn(pRow, "PROCESSSEGMENTCLASSID");
            var validState = this.tab_search.Tabpage1.form.cbo_validState.value;

            var sSvcID        = "selectProcessInspectionclassMList";
            var sController   = "/bas04100/selectProcessInspectionclassList.do";
            var sInDatasets   = "";
            var sOutDatasets  = "ds_inspectionsegmentrelMList=output";
            var sArgs         = "";
                sArgs        += this.gfn_setParam("ENTERPRISEID", this.enterpriseid);
                sArgs        += this.gfn_setParam("VALIDSTATE", validState);
                sArgs        += this.gfn_setParam("PROCESSSEGMENTID", processsegmentid);
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 탭2. 검사 통제 - 공정 검사종류 조회
         */
        this.fn_searchInspectionsegmentrelList = function (pRow)
        {
            this.ds_inspectionsegmentrelList.clearData();

            if (pRow < 0) return false;

            var processsegmentid =  this.ds_processsegmentclassList.getColumn(pRow, "PROCESSSEGMENTID");
            var validState = this.tab_search.Tabpage1.form.cbo_validState.value;

            var sSvcID        = "selectProcessInspectionclassList";
            var sController   = "/bas04100/selectProcessInspectionclassList.do";
            var sInDatasets   = "";
            var sOutDatasets  = "ds_inspectionsegmentrelList=output";
            var sArgs         = "";
                sArgs        += this.gfn_setParam("ENTERPRISEID", this.enterpriseid);
                sArgs        += this.gfn_setParam("VALIDSTATE", validState);
                sArgs        += this.gfn_setParam("PROCESSSEGMENTID", processsegmentid);
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 탭2. 검사 통제 - 검사종류 저장
         */
        this.fn_saveInspectionsegmentrel = function()
        {
            if (   !this.gfn_dsIsUpdated(this.ds_inspectionsegmentrelLList)
                && !this.gfn_dsIsUpdated(this.ds_inspectionsegmentrelMList)
                && !this.gfn_dsIsUpdated(this.ds_inspectionsegmentrelList) )
            {
                this.gfn_Message("NoSaveData", null, "warning", "ok");
                return;
            }

            //검사종류 저장시 상위 공정정보 Setting
            this.fn_datasetColAdd("L", this.ds_inspectionsegmentrelLList); //대공정-검사종류
            this.fn_datasetColAdd("M", this.ds_inspectionsegmentrelMList); //중공정-검사종류
            this.fn_datasetColAdd("S", this.ds_inspectionsegmentrelList); //공정-검사종류

            this.g_positionL = this.ds_processsegmentclassLList.getColumn(this.ds_processsegmentclassLList.rowposition, "PROCESSSEGMENTCLASSID");
            this.g_positionM = this.ds_processsegmentclassMList.getColumn(this.ds_processsegmentclassMList.rowposition, "PROCESSSEGMENTCLASSID");
            this.g_positionS = this.ds_processsegmentclassList.getColumn(this.ds_processsegmentclassList.rowposition, "PROCESSSEGMENTID");
            this.g_positionL1 = this.ds_inspectionsegmentrelLList.getColumn(this.ds_inspectionsegmentrelLList.rowposition, "INSPECTIONCLASSID");
            this.g_positionM1 = this.ds_inspectionsegmentrelMList.getColumn(this.ds_inspectionsegmentrelMList.rowposition, "INSPECTIONCLASSID");
            this.g_positionS1 = this.ds_inspectionsegmentrelList.getColumn(this.ds_inspectionsegmentrelList.rowposition, "INSPECTIONCLASSID");

            // -------------------------
            // 저장
            // ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
            // ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
            // -------------------------
            var sSvcID        = "saveInspectionsegmentrel";
            var sController   = "/bas04100/saveInspectionsegmentrel.do";
            var sInDatasets   = "INPUT11=ds_inspectionsegmentrelLList:U INPUT22=ds_inspectionsegmentrelMList:U INPUT33=ds_inspectionsegmentrelList:U";
            var sOutDatasets  = "";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검사종류 저장시 부가정보 Setting
         */
        this.fn_datasetColAdd = function(pJobFlag, pDataset)
        {
            for(var i=0; i < pDataset.getRowCount(); i++)
            {
                if (pDataset.getRowType(i) == 2 || pDataset.getRowType(i) == 4)
                {
                    var processsegmentid = "";

                    pDataset.addColumn("PROCESSSEGMENTID", "string");
                    pDataset.addColumn("PROCESSSEGMENTTYPE", "string");
                    pDataset.addColumn("PROCESSSEGMENTVERSION", "string");

                    if (pJobFlag == "L")
                    {
                        processsegmentid = this.ds_processsegmentclassLList.getColumn(this.ds_processsegmentclassLList.rowposition, "PROCESSSEGMENTCLASSID");
                        pDataset.setColumn(i, "PROCESSSEGMENTID", processsegmentid);
                        pDataset.setColumn(i, "PROCESSSEGMENTTYPE", "TopProcessSegmentClass");
                    }
                    else if (pJobFlag == "M")
                    {
                        processsegmentid = this.ds_processsegmentclassMList.getColumn(this.ds_processsegmentclassMList.rowposition, "PROCESSSEGMENTCLASSID");
                        pDataset.setColumn(i, "PROCESSSEGMENTID", processsegmentid);
                        pDataset.setColumn(i, "PROCESSSEGMENTTYPE", "MiddleProcessSegmentClass");
                    }
                    else if (pJobFlag == "S")
                    {
                        processsegmentid = this.ds_processsegmentclassList.getColumn(this.ds_processsegmentclassList.rowposition, "PROCESSSEGMENTID");
                        pDataset.setColumn(i, "PROCESSSEGMENTID", processsegmentid);
                        pDataset.setColumn(i, "PROCESSSEGMENTTYPE", "ProcessSegmentID");
                    }

                    pDataset.setColumn(i, "PROCESSSEGMENTVERSION", "*");
                }//end if
            } //end for
        };

        /*
         * 기능 : 조건표현식을 만족하는 첫번째 Row index 리턴
         */
        this.fn_findRowIndex = function (pDataset, pColumId, pStr)
        {
            var nRow = pDataset.findRowExpr(pColumId + "== '" + pStr + "'") ;
            var idx = 0;

            if (nRow > -1)
            {
                idx = nRow;
            }

            return idx;
        };

        /*
         * 기능 : 조건표현식을 만족하는 첫번째 Row를 선택
         */
        this.fn_findRowSetPosition = function (pDataset, pColumId, pVariable)
        {
            var findStr = eval("this."+pVariable);
            var nRow = pDataset.findRowExpr(pColumId + "== '" + findStr + "'") ;

            if (nRow == -1)
            {
                pDataset.set_rowposition(0);
            }
            else
            {
                pDataset.set_rowposition(nRow);
            }

            var variableInitial = "this."+pVariable+"="+null;
            eval(variableInitial);
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
         /*
         * 이벤트 : 탭 클릭시
         */
        this.div_work_tab_onchanged = function(obj,e)
        {
        };

        /*
         * 이벤트 : 검사 통제 - 대공정 클릭시
         */
        this.ds_processsegmentclassLList_canrowposchange = function(obj,e)
        {
            if (e.newrow < 0) return;

            var bOk = true;
            if (this.gfn_dsIsUpdated(this.ds_inspectionsegmentrelLList)
               || this.gfn_dsIsUpdated(this.ds_inspectionsegmentrelMList)
               || this.gfn_dsIsUpdated(this.ds_inspectionsegmentrelList)) {
                bOk = this.gfn_Message("WRITTENBEDELETE", null, "conf", "yesno");
            }

            if (bOk)
            {
                this.ds_processsegmentclassList.clearData();
                this.ds_inspectionsegmentrelMList.clearData();
                this.ds_inspectionsegmentrelList.clearData();

                this.fn_searchInspectionsegmentrelLList(e.newrow);
                this.fn_searchProcesssegmentclassMList(e.newrow);
            }
            else
            {
                return false;
            }
        };

        /*
         * 이벤트 : 검사 통제 - 중공정 클릭시
         */
        this.ds_processsegmentclassMList_canrowposchange = function(obj,e)
        {
            if (e.newrow < 0) return;

            var bOk = true;
            if (this.gfn_dsIsUpdated(this.ds_inspectionsegmentrelMList)
               || this.gfn_dsIsUpdated(this.ds_inspectionsegmentrelList)) {
                bOk = this.gfn_Message("WRITTENBEDELETE", null, "conf", "yesno");
            }

            if (bOk)
            {
                this.ds_inspectionsegmentrelList.clearData();

                this.fn_searchInspectionsegmentrelMList(e.newrow)
                this.fn_searchProcesssegmentclassList(e.newrow);
            }
            else
            {
                return false;
            }
        };

        /*
         * 이벤트 : 검사 통제 - 공정 클릭시
         */
        this.ds_processsegmentclassList_canrowposchange = function(obj,e)
        {
            if (e.newrow < 0) return;

            var bOk = true;
            if (this.gfn_dsIsUpdated(this.ds_inspectionsegmentrelList)) {
                bOk = this.gfn_Message("WRITTENBEDELETE", null, "conf", "yesno");
            }

            if (bOk){
                this.fn_searchInspectionsegmentrelList(e.newrow)
            } else {
                return false;
            }
        };

        /*
         * 이벤트 : 대공정-검사종류 Grid 에 표시되었던 Combo 아이템 리스트 또는 팝업달력이 닫힐 때 발생하는 이벤트입니다.
         */
        this.div_work_tab_Tabpage2_grd_inspectionsegmentrelLList_oncloseup = function(obj,e)
        {
        	this.div_work.form.tab.Tabpage2.form.grd_inspectionsegmentrelLList.updateToDataset();
        };

        /*
         * 이벤트 : 중공정-검사종류 Grid 에 표시되었던 Combo 아이템 리스트 또는 팝업달력이 닫힐 때 발생하는 이벤트입니다.
         */
        this.div_work_tab_Tabpage2_grd_inspectionsegmentrelMList_oncloseup = function(obj,e)
        {
        	this.div_work.form.tab.Tabpage2.form.grd_inspectionsegmentrelMList.updateToDataset();
        };

        /*
         * 이벤트 : 공정-검사종류 Grid 에 표시되었던 Combo 아이템 리스트 또는 팝업달력이 닫힐 때 발생하는 이벤트입니다.
         */
        this.div_work_tab_Tabpage2_grd_inspectionsegmentrelList_oncloseup = function(obj,e)
        {
        	this.div_work.form.tab.Tabpage2.form.grd_inspectionsegmentrelList.updateToDataset();
        };

        /*
         * 이벤트 : 대공정-검사종류 DataSet 의 Column 값이 변경된 후 발생하는 이벤트입니다.
         */
        this.ds_inspectionsegmentrelLList_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "ISREQUIRED")
        	{
        		if (this.gfn_isNull(obj.getColumn(e.row, "VALIDSTATE")))
        		{
        			obj.setColumn(e.row, "VALIDSTATE", "Valid");
        		}
        	}
        };

        /*
         * 이벤트 : 중공정-검사종류 DataSet 의 Column 값이 변경된 후 발생하는 이벤트입니다.
         */
        this.ds_inspectionsegmentrelMList_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "ISREQUIRED")
        	{
        		if (this.gfn_isNull(obj.getColumn(e.row, "VALIDSTATE")))
        		{
        			obj.setColumn(e.row, "VALIDSTATE", "Valid");
        		}
        	}
        };

        /*
         * 이벤트 : 공정-검사종류 DataSet 의 Column 값이 변경된 후 발생하는 이벤트입니다.
         */
        this.ds_inspectionsegmentrelList_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "ISREQUIRED")
        	{
        		if (this.gfn_isNull(obj.getColumn(e.row, "VALIDSTATE")))
        		{
        			obj.setColumn(e.row, "VALIDSTATE", "Valid");
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.tab_search_Tabpage1_btn_search_onclick,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.div_work.form.tab.addEventHandler("onchanged",this.div_work_tab_onchanged,this);
            this.div_work.form.tab.Tabpage1.form.grd_inspectionclassList.addEventHandler("onexpandup",this.div_work_tab_Tabpage1_grd_defectcoderelList_onexpandup,this);
            this.div_work.form.tab.Tabpage1.form.grd_inspectionclassList.addEventHandler("oncloseup",this.div_work_tab_Tabpage1_grd_defectcoderelList_oncloseup,this);
            this.div_work.form.tab.Tabpage2.form.grd_inspectionsegmentrelList.addEventHandler("oncloseup",this.div_work_tab_Tabpage2_grd_inspectionsegmentrelList_oncloseup,this);
            this.div_work.form.tab.Tabpage2.form.grd_inspectionsegmentrelMList.addEventHandler("oncloseup",this.div_work_tab_Tabpage2_grd_inspectionsegmentrelMList_oncloseup,this);
            this.div_work.form.tab.Tabpage2.form.grd_inspectionsegmentrelLList.addEventHandler("oncloseup",this.div_work_tab_Tabpage2_grd_inspectionsegmentrelLList_oncloseup,this);
            this.div_header.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.ds_processsegmentclassLList.addEventHandler("canrowposchange",this.ds_processsegmentclassLList_canrowposchange,this);
            this.ds_inspectionsegmentrelLList.addEventHandler("oncolumnchanged",this.ds_inspectionsegmentrelLList_oncolumnchanged,this);
            this.ds_processsegmentclassMList.addEventHandler("canrowposchange",this.ds_processsegmentclassMList_canrowposchange,this);
            this.ds_inspectionsegmentrelMList.addEventHandler("oncolumnchanged",this.ds_inspectionsegmentrelMList_oncolumnchanged,this);
            this.ds_processsegmentclassList.addEventHandler("canrowposchange",this.ds_processsegmentclassList_canrowposchange,this);
            this.ds_inspectionsegmentrelList.addEventHandler("oncolumnchanged",this.ds_inspectionsegmentrelList_oncolumnchanged,this);
        };
        this.loadIncludeScript("BAS04100M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
