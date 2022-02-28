(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS04200M");
            this.set_titletext("검사항목관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_inspitemList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"INSPITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMKEYNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME_KR\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME_US\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME_CN\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME_VN\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"EQPINSPITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"TOPBOTTOMYN\" type=\"STRING\" size=\"256\"/><Column id=\"CIRCUITSTD\" type=\"STRING\" size=\"256\"/><Column id=\"SPECTRANSTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lookInspmethodList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONMETHODID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONMETHODNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONMETHODNAME_KR\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONMETHODNAME_US\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONMETHODNAME_CN\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONMETHODNAME_VN\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"DICTIONARYID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inspitemmethodTreeList", this);
            obj._setContents("<ColumnInfo><Column id=\"ITEMLEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONCLASSID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inspmethodList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONMETHODID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONMETHODNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inspmethoditemList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMTYPEID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONMETHODID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONCLASSID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("0");
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

            obj = new Static("sta_title","30","16","106","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            obj.set_tooltiptext("MENU_PG-SD-0450");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
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

            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tab1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("sta_srchName","0","10","120","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("0");
            obj.set_text("검사항목/방법 명칭");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("7DEEA358BB464DCEAA0396EF6EE17EDD");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_validState","125","35","148","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("1");
            obj.set_codecolumn("C,ValidState,ALL,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","75","102","36",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","75","146","36",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"55","45","20","91",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("4");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00_00","161","81","10","27",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("5");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_srchName","sta_srchName:5","10","148","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("6");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_validState","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("7");
            obj.set_text("유효상태");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("VALIDSTATE");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","290","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_formscrollbarsize("10");
            this.addChild(obj.name, obj);

            obj = new Tab("tab","0","0",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab);
            obj.set_text("검사항목등록");
            obj.set_tooltiptext("REGISTINSPITEM");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Grid("grd_inspitemList","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_inspitemList");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"95\"/><Column size=\"90\"/><Column size=\"83\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"검사항목 ID\" tooltiptext=\"INSPITEMID\" cssclass=\"cell_point\"/><Cell col=\"2\" text=\"검사항목명(K)\" tooltiptext=\"INSPITEMNAMEKR\"/><Cell col=\"3\" text=\"검사항목명(E)\" tooltiptext=\"INSPITEMNAMEUS\"/><Cell col=\"4\" text=\"검사항목명(C)\" tooltiptext=\"INSPITEMNAMECN\"/><Cell col=\"5\" text=\"검사항목명(V)\" tooltiptext=\"INSPITEMNAMEVN\"/><Cell col=\"6\" text=\"단위\" tooltiptext=\"UNIT\"/><Cell col=\"7\" text=\"설비검사항목\" tooltiptext=\"EQPINSPITEMID\"/><Cell col=\"8\" text=\"항목분류\" tooltiptext=\"ITEMCLASS\" cssclass=\"cell_point\"/><Cell col=\"9\" text=\"상/하단 사용여부\"/><Cell col=\"10\" text=\"회로폭기준\" tooltiptext=\"CircuitStd\"/><Cell col=\"11\" tooltiptext=\"PROCESSSPECTRANSFORM\" text=\"공정SPEC변환\"/><Cell col=\"12\" text=\"유효상태\" tooltiptext=\"VALIDSTATE\" cssclass=\"cell_point\"/><Cell col=\"13\" text=\"생성자\" tooltiptext=\"CREATOR\"/><Cell col=\"14\" text=\"생성일\" tooltiptext=\"CREATEDTIME\"/><Cell col=\"15\" text=\"수정자\" tooltiptext=\"MODIFIER\"/><Cell col=\"16\" text=\"수정일\" tooltiptext=\"MODIFIEDTIME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:INSPITEMID\" edittype=\"expr:dataset.getRowType(currow) ==2 ? &apos;text&apos;:&apos;none&apos;\" cssclass=\"expr:dataset.getRowType(currow) ==2 ? &apos;point&apos;:&apos;&apos;\" editmaxlength=\"5\" editinputtype=\"number,alpha\" displaytype=\"text\" editinputmode=\"upper\"/><Cell col=\"2\" text=\"bind:INSPITEMNAME_KR\" textAlign=\"left\" editmaxlength=\"500\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:INSPITEMNAME_US\" textAlign=\"left\" editmaxlength=\"500\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:INSPITEMNAME_CN\" textAlign=\"left\" editmaxlength=\"500\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"5\" text=\"bind:INSPITEMNAME_VN\" textAlign=\"left\" editmaxlength=\"500\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"6\" text=\"bind:UNIT\" editmaxlength=\"100\" combocodecol=\"C,Unit,,Y,Y\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"7\" text=\"bind:EQPINSPITEMID\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,EquipmentInspectionItem,NAN,Y,Y\"/><Cell col=\"8\" combocodecol=\"C,InspItemClass,,Y,Y\" text=\"bind:INSPITEMCLASS\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"9\" combocodecol=\"C,YesNo,,Y,Y\" text=\"bind:TOPBOTTOMYN\" displaytype=\"combotext\" edittype=\"expr:dataset.getColumn(currow, &quot;INSPITEMCLASS&quot;)==&quot;SpecMeasure&quot;?&apos;combo&apos;:&apos;none&apos;\"/><Cell col=\"10\" combocodecol=\"C,CircuitStd,NAN,Y,Y\" displaytype=\"combotext\" text=\"bind:CIRCUITSTD\" edittype=\"expr:dataset.getColumn(currow, &quot;TOPBOTTOMYN&quot;)==&quot;Y&quot;?&apos;combo&apos;:&apos;none&apos;\"/><Cell col=\"11\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,SpecTransType,NAN,Y,Y\" text=\"bind:SPECTRANSTYPE\"/><Cell col=\"12\" text=\"bind:VALIDSTATE\" cssclass=\"point\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,ValidState,,Y,Y\"/><Cell col=\"13\" text=\"bind:CREATOR\"/><Cell col=\"14\" text=\"bind:CREATEDTIME\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"15\" text=\"bind:MODIFIER\"/><Cell col=\"16\" text=\"bind:MODIFIEDTIME\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_inspitemList","182","0","200","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","0","0",null,"34","sta_cnt_ds_inspitemList:17",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("검사항목목록");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("INSPITEMS");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_addRowInspitem",null,"6","26","24","29",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_inspitemList",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab);
            obj.set_text("검사방법등록");
            obj.set_tooltiptext("REGISTINSPMETHOD");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Grid("grd_lookInspmethodList","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_lookInspmethodList");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"180\"/><Column size=\"160\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"검사방법ID\" cssclass=\"cell_point\" tooltiptext=\"INSPECTIONMETHODID\"/><Cell col=\"2\" text=\"검사방법명(K)\" tooltiptext=\"INSPECTIONMETHODNAMEKR\"/><Cell col=\"3\" text=\"검사방법명(E)\" tooltiptext=\"INSPECTIONMETHODNAMEUS\"/><Cell col=\"4\" text=\"검사방법명(C)\" tooltiptext=\"INSPECTIONMETHODNAMECN\"/><Cell col=\"5\" text=\"검사방법명(V)\" tooltiptext=\"INSPECTIONMETHODNAMEVN\"/><Cell col=\"6\" text=\"유효상태\" cssclass=\"cell_point\" tooltiptext=\"VALIDSTATE\"/><Cell col=\"7\" text=\"생성자\" tooltiptext=\"CREATOR\"/><Cell col=\"8\" text=\"생성일\" tooltiptext=\"CREATEDTIME\"/><Cell col=\"9\" text=\"수정자\" tooltiptext=\"MODIFIER\"/><Cell col=\"10\" text=\"수정일\" tooltiptext=\"MODIFIEDTIME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:INSPECTIONMETHODID\" cssclass=\"expr:dataset.getRowType(currow) ==2 ? &apos;point&apos;:&apos;&apos;\" edittype=\"expr:dataset.getRowType(currow) ==2 ? &apos;text&apos;:&apos;none&apos;\" editinputtype=\"alpha,number\" editmaxlength=\"3\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:INSPECTIONMETHODNAME_KR\" textAlign=\"left\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:INSPECTIONMETHODNAME_US\" textAlign=\"left\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:INSPECTIONMETHODNAME_CN\" textAlign=\"left\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"5\" text=\"bind:INSPECTIONMETHODNAME_VN\" textAlign=\"left\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"6\" text=\"bind:VALIDSTATE\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,ValidState,,Y,Y\" cssclass=\"point\"/><Cell col=\"7\" text=\"bind:CREATOR\"/><Cell col=\"8\" text=\"bind:CREATEDTIME\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"9\" text=\"bind:MODIFIER\"/><Cell col=\"10\" text=\"bind:MODIFIEDTIME\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_lookInspmethodList","182","0","200","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","0","0",null,"34","sta_cnt_ds_lookInspmethodList:17",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("검사방법목록");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("INSPMETHODS");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_addRowLookInspmethod",null,"6","26","24","29",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_lookInspmethodList",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.div_work.form.tab);
            obj.set_text("검사방법별 검사항목 등록");
            obj.set_tooltiptext("REGISTINSPMETHODITEM");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Static("sta_title1_00","63.75%","0",null,"34","68",null,null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_taborder("6");
            obj.set_text("검사항목목록");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("INSPITEMS");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_inspmethodList",null,"6","29","24","sta_title1_00:5",null,null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_initvalueid("x");
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_addRowInspmethod",null,"6","26","24","btn_xlDn_grd_inspmethodList:0",null,null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_title1","25.05%","0",null,"34","btn_addRowInspmethod:0",null,null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_taborder("5");
            obj.set_text("검사방법목록");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("INSPMETHODS");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_title0","0","0","230","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_text("검사 항목 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("INSPITEMLIST");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Grid("grd_inspmethoditemList","63.75%","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_taborder("8");
            obj.set_binddataset("ds_inspmethoditemList");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"70\"/><Column size=\"140\"/><Column size=\"70\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"검사항목ID\" cssclass=\"cell_point\" tooltiptext=\"INSPITEMID\"/><Cell col=\"2\" text=\"검사항목명\" cssclass=\"cell_point\" tooltiptext=\"INSPITEMNAME\"/><Cell col=\"3\" text=\"검사항목유형\" tooltiptext=\"INSPITEMTYPE\"/><Cell col=\"4\" text=\"유효상태\" cssclass=\"cell_point\" tooltiptext=\"VALIDSTATE\"/><Cell col=\"5\" text=\"생성자\" tooltiptext=\"CREATOR\"/><Cell col=\"6\" text=\"생성일\" tooltiptext=\"CREATEDTIME\"/><Cell col=\"7\" text=\"수정자\" tooltiptext=\"MODIFIER\"/><Cell col=\"8\" text=\"수정일\" tooltiptext=\"MODIFIEDTIME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:INSPITEMID\" edittype=\"none\" cssclass=\"expr:dataset.getRowType(currow) ==2 ? &apos;point&apos;:&apos;&apos;\"/><Cell col=\"2\" text=\"bind:INSPITEMNAME\" textAlign=\"left\" edittype=\"none\" cssclass=\"expr:dataset.getRowType(currow) ==2 ? &apos;point&apos;:&apos;&apos;\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"expr:dataset.getRowType(currow) ==2 ? &apos;show&apos;:&apos;hide&apos;\" expandsize=\"24\"/><Cell col=\"3\" text=\"bind:INSPITEMTYPE\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,InspItemType,,Y,Y\"/><Cell col=\"4\" text=\"bind:VALIDSTATE\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,ValidState,,Y,Y\" cssclass=\"point\"/><Cell col=\"5\" text=\"bind:CREATOR\"/><Cell col=\"6\" text=\"bind:CREATEDTIME\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"7\" text=\"bind:MODIFIER\"/><Cell col=\"8\" text=\"bind:MODIFIEDTIME\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Grid("grd_inspmethodList","25.05%","34",null,null,"grd_inspmethoditemList:10","0",null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_taborder("4");
            obj.set_binddataset("ds_inspmethodList");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"70\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"검사방법 ID\" cssclass=\"cell_point\" tooltiptext=\"INSPECTIONMETHODID\"/><Cell col=\"2\" text=\"검사방법명\" cssclass=\"cell_point\" tooltiptext=\"INSPECTIONMETHODNAME\"/><Cell col=\"3\" text=\"유효상태\" cssclass=\"cell_point\" tooltiptext=\"VALIDSTATE\"/><Cell col=\"4\" text=\"생성자\" tooltiptext=\"CREATOR\"/><Cell col=\"5\" text=\"생성일\" tooltiptext=\"CREATEDTIME\"/><Cell col=\"6\" text=\"수정자\" tooltiptext=\"MODIFIER\"/><Cell col=\"7\" text=\"수정일\" tooltiptext=\"MODIFIEDTIME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:INSPECTIONMETHODID\" cssclass=\"expr:dataset.getRowType(currow) ==2 ? &apos;point&apos;:&apos;&apos;\" edittype=\"none\" displaytype=\"normal\"/><Cell col=\"2\" text=\"bind:INSPECTIONMETHODNAME\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow) ==2 ? &apos;point&apos;:&apos;&apos;\" edittype=\"none\" displaytype=\"normal\" expandshow=\"expr:dataset.getRowType(currow) ==2 ? &apos;show&apos;:&apos;hide&apos;\" expandsize=\"24\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\"/><Cell col=\"3\" text=\"bind:VALIDSTATE\" cssclass=\"point\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,ValidState,,Y,Y\"/><Cell col=\"4\" text=\"bind:CREATOR\"/><Cell col=\"5\" text=\"bind:CREATEDTIME\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"6\" text=\"bind:MODIFIER\"/><Cell col=\"7\" text=\"bind:MODIFIEDTIME\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Div("div_treeSearch","0","34",null,"42","grd_inspmethodList:10",null,null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_search");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("edt_treeItemName","15","10",null,"20","37",null,null,null,null,null,this.div_work.form.tab.Tabpage3.form.div_treeSearch.form);
            obj.set_taborder("0");
            this.div_work.form.tab.Tabpage3.form.div_treeSearch.addChild(obj.name, obj);

            obj = new Button("btn_treeItemName",null,"10","22","20","15",null,null,null,null,null,this.div_work.form.tab.Tabpage3.form.div_treeSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.tab.Tabpage3.form.div_treeSearch.addChild(obj.name, obj);

            obj = new Grid("grd_inspitemmethodTreeList","0","75",null,null,"grd_inspmethodList:10","0",null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_taborder("2");
            obj.set_cssclass("grd_tree");
            obj.set_binddataset("ds_inspitemmethodTreeList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseexpandkey("true");
            obj.set_treeusecheckbox("false");
            obj.set_treeusebutton("use");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"260\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:ITEMNAME\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:ITEMLEVEL\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_addRowInspmethoditem",null,"6","26","24","29",null,null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_initvalueid("x");
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_inspmethoditemList",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_initvalueid("x");
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);
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
        this.addIncludeScript("BAS04200M.xfdl","lib::lib_bas.xjs");
        this.registerScript("BAS04200M.xfdl", function() {
        /***************************************************************************************
         * 시스템명       : IFC MES시스템
         * 업무명         : 검사항목관리(기준관리 - 품질기준정보)
         * 파일명         : BAS04200M.xfdl
         * 작성자         : yanghee.kim
         * 작성일         : 2021.03.13
         *
         * 설  명         : 검사항목 등록/수정
         *                  검사방법 등록/수정
         *                  검사항목과 검사방법 매핑
         *---------------------------------------------------------------------------------------
         * 변경일        변경자      변경내역
         *---------------------------------------------------------------------------------------
         * 2021.03.13   yanghee.kim   최초작성
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
        this.g_positionA; //저장 후 위치고정을 위한 전역변수(검사항목리스트)
        this.g_positionB; //저장 후 위치고정을 위한 전역변수(검사방법목록)
        this.g_positionC; //저장 후 위치고정을 위한 전역변수(검사항목목록)
        this.fv_preItemId 	= "";	// 조회시 이전에 선택한 tree값

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
            this.nfn_formInit(obj);
            this.enterpriseid = this.gf_getEnterpriseId();
            this.fn_formInit();    //최초 호출되는 초기화 함수

        	//검사항목별 검사방법 등록  Tree x 버튼 이벤트 설정
        	//this.div_work.form.tab.Tabpage3.form.div_treeSearch.form.btn_edt_treeSearch.addEventHandler( "onclick", this.fn_clickTreeSearch, this );
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
                    this.fn_saveInspitem();        //탭1 검사항목 등록 저장
                break;
                case 1:
                    this.fn_saveLookInspmethod();  //탭2 검사방법 등록 저장
                break;
                case 2:
                    this.fn_saveInspmethod();      //탭2 검사방법별 검사항목 등록 저장
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
                    this.fn_searchInspitemList();        //탭1 검사항목 등록조회
                break;
                case 1:
                    this.fn_searchLookInspmethodList();  //탭2 검사방법 등록 조회
                break;
                case 2:
                    this.fn_searchInspitemmethodTreeList();  //탭3 검사방법별 검사항목 등록 조회
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
                if (trId == "selectInspitemList")
                {
                }
                else if (trId == "selectInspitemmethodTreeList")
                {
                    if (this.ds_inspitemmethodTreeList.rowcount > 0)
                    {
                        this.ds_inspitemmethodTreeList.set_rowposition(-1);

        				if (!this.nfn_isNull(this.g_positionA))
                        {
                            this.fn_findRowSetPosition(this.ds_inspitemmethodTreeList, "ITEMID", "g_positionA");
                        }
                        else
                        {
                            this.ds_inspitemmethodTreeList.set_rowposition(0);
                        }
                    }
                    else
                    {
                        this.ds_inspitemmethodTreeList.set_rowposition(-1);
                    }
                }
                else if (trId == "selectInspmethodList")
                {
                    if (this.ds_inspmethodList.rowcount > 0)
                    {
                        this.ds_inspmethodList.set_rowposition(-1);

                        if (!this.nfn_isNull(this.g_positionB))
                        {
                            this.fn_findRowSetPosition(this.ds_inspmethodList, "INSPECTIONMETHODID", "g_positionB");
                        }
                        else
                        {
                            this.ds_inspmethodList.set_rowposition(0);
                        }
                    }
                    else
                    {
                        this.ds_inspmethodList.set_rowposition(-1);
                    }
                }
                else if (trId == "selectInspmethoditemList")
                {
                    if (this.ds_inspmethoditemList.rowcount > 0)
                    {
                        if (!this.nfn_isNull(this.g_positionC))
                        {
                            this.fn_findRowSetPosition(this.ds_inspmethoditemList, "INSPITEMID", "g_positionC");
                        }
                    }
                }
                else if (trId == "saveInspitem")
                {
                    this.gfn_Message("SuccessSave", null, "info", "ok");
                    this.fn_searchInspitemList();
                }
                else if (trId == "saveLookInspmethod")
                {
                    this.gfn_Message("SuccessSave", null, "info", "ok");
                    this.fn_searchLookInspmethodList();
                }
                else if (trId == "saveInspmethod")
                {
                    this.gfn_Message("SuccessSave", null, "info", "ok");
                    this.fn_searchInspitemmethodTreeList();
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
            var opts = "width=600,height=500";

            oArg.arg_type = "A";
            oArg.arg_popupCd = popId;
            oArg.arg_popupNm = "";
            oArg.arg_paramCols = "";
            oArg.arg_paramValues = "";
            oArg.arg_searchStr = "";

            if (popupId == "GRD_INSPMETHOD143")    /*그리드-검사방법*/
            {
                opts = "width=450,height=500";
                oArg.arg_type = "C";
                oArg.arg_paramCols = "VALIDSTATE|ENTERPRISEID";
                oArg.arg_paramValues = "Valid|"+this.enterpriseid;
                oArg.arg_rtnCols = "INSPECTIONMETHODID|INSPECTIONMETHODNAME";
            }
            else if (popupId == "GRD_INSPMETHODITEM144")    /*그리드-검사항목*/
            {
                oArg.arg_type = "C";
                oArg.arg_paramCols = "VALIDSTATE";
                oArg.arg_paramValues = "Valid";
                oArg.arg_rtnCols = "INSPITEMID|INSPITEMVERSION|INSPITEMNAME";
            }

            this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        };

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
            var rtn = this.fv_rtnValue;
            if (this.nfn_isNull(rtn)) return;

            if (sPopupId == "GRD_INSPMETHOD143")    /*그리드-검사방법*/
            {
                /*팝업 클릭한 row에 setting 정보를 가져와서 멀티 선택시 다른 row에도 일괄 반영*/
                var itemId   = this.ds_inspitemmethodTreeList.getColumn(this.ds_inspitemmethodTreeList.rowposition, "ITEMID")

                if (itemId.indexOf("_") > -1)
                {
                    var arrItemId = itemId.split("_");
                    var inspectionClassID = arrItemId[0];
                }
                else
                {
                    var inspectionClassID = itemId;
                }

                for(var i=0; i<rtn.length; i++){
                    var colArray = rtn[i];

                    if (i==0)
                    {
                        addRow = this.ds_inspmethodList.rowposition;
                    }
                    else
                    {
                        addRow = this.ds_inspmethodList.addRow();
                    }

                    this.ds_inspmethodList.setColumn(addRow, "ENTERPRISEID", this.enterpriseid);
                    this.ds_inspmethodList.setColumn(addRow, "INSPECTIONMETHODID", colArray[0]);
                    this.ds_inspmethodList.setColumn(addRow, "INSPECTIONMETHODNAME", colArray[1]);
                    this.ds_inspmethodList.setColumn(addRow, "INSPECTIONCLASSID", inspectionClassID);
                    this.ds_inspmethodList.setColumn(addRow, "VALIDSTATE", "Valid");
                }
            }
            else if (sPopupId == "GRD_INSPMETHODITEM144")    /*그리드-검사항목*/
            {
                /*팝업 클릭한 row에 setting 정보를 가져와서 멀티 선택시 다른 row에도 일괄 반영*/
                var inspectionMethodID = this.ds_inspmethodList.getColumn(this.ds_inspmethodList.rowposition, "INSPECTIONMETHODID");
                var inspectionClassID = this.ds_inspmethodList.getColumn(this.ds_inspmethodList.rowposition, "INSPECTIONCLASSID")

                for(var i=0; i<rtn.length; i++){
                    var colArray = rtn[i];

                    if (i==0)
                    {
                        addRow = this.ds_inspmethoditemList.rowposition;
                    }
                    else
                    {
                        addRow = this.ds_inspmethoditemList.addRow();
                    }

                    this.ds_inspmethoditemList.setColumn(addRow, "ENTERPRISEID", this.enterpriseid);
                    this.ds_inspmethoditemList.setColumn(addRow, "INSPITEMID", colArray[0]);
                    this.ds_inspmethoditemList.setColumn(addRow, "INSPITEMVERSION", colArray[1]);
                    this.ds_inspmethoditemList.setColumn(addRow, "INSPITEMNAME", colArray[2]);
                    this.ds_inspmethoditemList.setColumn(addRow, "INSPECTIONMETHODID", inspectionMethodID);
                    this.ds_inspmethoditemList.setColumn(addRow, "INSPECTIONCLASSID", inspectionClassID);
                    this.ds_inspmethoditemList.setColumn(addRow, "VALIDSTATE", "Valid");
                }
            }
        };

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 기능 : 최초 호출되는 초기화 함수
         */
        this.fn_formInit = function ()
        {
            this.tab_search.Tab1.form.cbo_validState.set_value("Valid");
        };

        /*
         * 기능 : 조회조건 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        	this.fn_formInit();
        };

        /*
         * 기능 : 탭1. 검사항목 등록 조회
         */
        this.fn_searchInspitemList = function ()
        {
            this.ds_inspitemList.clearData();

            var srchName = this.tab_search.Tab1.form.edt_srchName.value;
            var validState = this.tab_search.Tab1.form.cbo_validState.value;

            var sSvcID        = "selectInspitemList";
            var sController   = "/bas04200/selectInspitemList.do";
            var sInDatasets   = "";
            var sOutDatasets  = "ds_inspitemList=output";
            var sArgs         = "";
                sArgs        += this.gfn_setParam("ENTERPRISEID", this.enterpriseid);
                sArgs        += this.gfn_setParam("SRCHNAME", srchName);
                sArgs        += this.gfn_setParam("VALIDSTATE", validState);
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 탭1. 검사항목 등록 추가
         */
        this.fn_addInspitem = function(obj,e)
        {
            var objDataset = this.ds_inspitemList;
            if (objDataset == null) return;
            var row = objDataset.addRow();

            /* KEY컬럼 기본세팅 */
            objDataset.setColumn(row, "ENTERPRISEID",    this.enterpriseid);    //
            objDataset.setColumn(row, "INSPITEMVERSION", "*");  //
            objDataset.setColumn(row, "VALIDSTATE",      "Valid");  //유효여부
        	objDataset.setColumn(row, "TOPBOTTOMYN",     "N");   //상/하단 사용여부
        };

        /*
         * 기능 : 탭1. 검사항목 등록 저장
         */
        this.fn_saveInspitem = function()
        {
            if (!this.gfn_dsIsUpdated(this.ds_inspitemList))
            {
                this.gfn_Message("NoSaveData", null, "warning", "ok");
                return;
            }

            //검사항목 그리드 필수값 체크
            var component = this.div_work.form.tab.Tabpage1.form.grd_inspitemList;
            var rtn = this.fn_gridValueCheck("INSPITEMID", component);
            if (rtn == false) return;
            // -------------------------
            // 저장
            // ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
            // ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
            // -------------------------
            var sSvcID        = "saveInspitem";
            var sController   = "/bas04200/saveInspitem.do";
            var sInDatasets   = "INPUT=ds_inspitemList:U";
            var sOutDatasets  = "";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 탭2. 검사방법 등록 조회
         */
        this.fn_searchLookInspmethodList = function ()
        {
            this.ds_lookInspmethodList.clearData();

            var srchName = this.tab_search.Tab1.form.edt_srchName.value;
            var validState = this.tab_search.Tab1.form.cbo_validState.value;

            var sSvcID        = "selectLookInspmethodList";
            var sController   = "/bas04200/selectLookInspmethodList.do";
            var sInDatasets   = "";
            var sOutDatasets  = "ds_lookInspmethodList=output";
            var sArgs         = "";
                sArgs        += this.gfn_setParam("ENTERPRISEID", this.enterpriseid);
                sArgs        += this.gfn_setParam("SRCHNAME", srchName);
                sArgs        += this.gfn_setParam("VALIDSTATE", validState);
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 탭2. 검사방법 등록 추가
         */
        this.fn_addLookInspmethod = function(obj,e)
        {
            var objDataset = this.ds_lookInspmethodList;
            if (objDataset == null) return;
            var row = objDataset.addRow();

            /* KEY컬럼 기본세팅 */
            objDataset.setColumn(row,"VALIDSTATE","Valid");    //유효여부
        };

        /*
         * 기능 : 탭2. 검사항목 등록 저장
         */
        this.fn_saveLookInspmethod = function()
        {
            if (!this.gfn_dsIsUpdated(this.ds_lookInspmethodList))
            {
                this.gfn_Message("NoSaveData", null, "warning", "ok");
                return;
            }

            //검사항목 그리드 필수값 체크
            var component = this.div_work.form.tab.Tabpage2.form.grd_lookInspmethodList;
            var rtn = this.fn_gridValueCheck("INSPECTIONMETHODID", component);
            if (rtn == false) return;
            // -------------------------
            // 저장
            // ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
            // ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
            // -------------------------
            var sSvcID        = "saveLookInspmethod";
            var sController   = "/bas04200/saveLookInspmethod.do";
            var sInDatasets   = "INPUT=ds_lookInspmethodList:U";
            var sOutDatasets  = "";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 탭3. 검사방법별 검사항목 등록 - 트리 조회
         */
        this.fn_searchInspitemmethodTreeList = function ()
        {
            //검색시에는 하위 데이터셋도 초기화
            this.ds_inspitemmethodTreeList.clearData();
            this.ds_inspmethodList.clearData();
            this.ds_inspmethoditemList.clearData();

            var srchName = this.tab_search.Tab1.form.edt_srchName.value;
            var validState = this.tab_search.Tab1.form.cbo_validState.value;

            var sSvcID        = "selectInspitemmethodTreeList";
            var sController   = "/bas04200/selectInspitemmethodTreeList.do";
            var sInDatasets   = "";
            var sOutDatasets  = "ds_inspitemmethodTreeList=output";
            var sArgs         = "";
                sArgs        += this.gfn_setParam("ENTERPRISEID", this.enterpriseid);
                sArgs        += this.gfn_setParam("SRCHNAME", srchName);
                sArgs        += this.gfn_setParam("VALIDSTATE", validState);
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 탭3. 검사방법별 검사항목 등록 - 검사방법목록 조회
         */
        this.fn_searchInspmethodList = function (pRow)
        {
            this.ds_inspmethodList.clearData();
            this.ds_inspmethoditemList.clearData();

            if (pRow < 0) return false;

            var itemId = this.ds_inspitemmethodTreeList.getColumn(pRow, "ITEMID");
            var inspectionClassID = "";
            var inspectionMethodID = "";
            if (itemId.indexOf("_") > -1)
            {
                var arrItemId = itemId.split("_");
                inspectionClassID = arrItemId[0];
                inspectionMethodID = arrItemId[1];
            }
            else
            {
                inspectionClassID = itemId;
            }

            var sSvcID        = "selectInspmethodList";
            var sController   = "/bas04200/selectInspmethodList.do";
            var sInDatasets   = "";
            var sOutDatasets  = "ds_inspmethodList=output";
            var sArgs         = "";
                sArgs        += this.gfn_setParam("ENTERPRISEID", this.enterpriseid);
                sArgs        += this.gfn_setParam("INSPECTIONCLASSID", inspectionClassID);
                sArgs        += this.gfn_setParam("INSPECTIONMETHODID", inspectionMethodID);
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 탭3. 검사방법별 검사항목 등록 - 검사항목목록 조회
         */
        this.fn_searchInspmethoditemList = function (pRow)
        {
            this.ds_inspmethoditemList.clearData();

            if (pRow < 0) return false;

            var sSvcID        = "selectInspmethoditemList";
            var sController   = "/bas04200/selectInspmethoditemList.do";
            var sInDatasets   = "";
            var sOutDatasets  = "ds_inspmethoditemList=output";
            var sArgs         = "";
                sArgs        += this.gfn_setParam("ENTERPRISEID", this.enterpriseid);
                sArgs        += this.gfn_setParam("INSPECTIONCLASSID", this.ds_inspmethodList.getColumn(pRow, "INSPECTIONCLASSID"));
                sArgs        += this.gfn_setParam("INSPECTIONMETHODID", this.ds_inspmethodList.getColumn(pRow, "INSPECTIONMETHODID"));
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 탭3. 검사방법별 검사항목 등록 - 검사방법 추가
         */
        this.fn_addInspmethod = function(obj,e)
        {
            var objDataset = this.ds_inspmethodList;
            if (objDataset == null) return;

            if (this.ds_inspitemmethodTreeList.rowcount < 0)
            {

        		this.gfn_Message("NotSelectResult", this.nfn_getDictionarynameUpper("INSPITEMLIST"), "warning", "ok");
                return false;
            }
            var row = objDataset.addRow();

            /* KEY컬럼 기본세팅 */
            objDataset.setColumn(row,"VALIDSTATE","Valid");    //유효여부
        };

        /*
         * 기능 : 탭3. 검사방법별 검사항목 등록 - 검사항목 추가
         */
        this.fn_addInspmethoditem = function(obj,e)
        {
            var objDataset = this.ds_inspmethoditemList;
            if (objDataset == null) return;

            if (this.ds_inspmethodList.rowcount < 0)
            {
                this.gfn_Message("NotSelectResult", this.nfn_getDictionarynameUpper("INSPITEMCLASSLIST"), "warning", "ok");
                return false;
            }

            var row = objDataset.addRow();

            /* KEY컬럼 기본세팅 */
            objDataset.setColumn(row,"VALIDSTATE","Valid");    //유효여부
        };

        /*
         * 기능 : 탭3. 검사방법별 검사항목 등록 저장
         */
        this.fn_saveInspmethod = function()
        {
            if (!this.gfn_dsIsUpdated(this.ds_inspmethodList) && !this.gfn_dsIsUpdated(this.ds_inspmethoditemList))
            {
                this.gfn_Message("NoSaveData", null, "warning", "ok");
                return;
            }

            //검사방법 그리드 필수값 체크
            var component = this.div_work.form.tab.Tabpage3.form.grd_inspmethodList;
            var strColIdList = "VALIDSTATE";
            var rtn = this.nfn_MandatoryCheckGrid(component, strColIdList);
            if (rtn == false) return;

            //검사항목 그리드 필수값 체크
            var component = this.div_work.form.tab.Tabpage3.form.grd_inspmethoditemList;
            var strColIdList = "VALIDSTATE";
            var rtn = this.nfn_MandatoryCheckGrid(component, strColIdList);
            if (rtn == false) return;

            this.g_positionA = this.ds_inspitemmethodTreeList.getColumn(this.ds_inspitemmethodTreeList.rowposition, "ITEMID");
            this.g_positionB = this.ds_inspmethodList.getColumn(this.ds_inspmethodList.rowposition, "INSPECTIONMETHODID");
            this.g_positionC = this.ds_inspmethoditemList.getColumn(this.ds_inspmethoditemList.rowposition, "INSPITEMID");

            // -------------------------
            // 저장
            // ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
            // ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
            // -------------------------
            var sSvcID        = "saveInspmethod";
            var sController   = "/bas04200/saveInspmethod.do";
            var sInDatasets   = "INPUT1=ds_inspmethodList:U INPUT2=ds_inspmethoditemList:U";
            var sOutDatasets  = "";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        /*
         * 기능 : 그리드 필수값 검증
         */
        this.fn_gridValueCheck = function(pJobFlag, pComponent)
        {
            var objGrid = pComponent
            var strColIdList = "";
            var objDataset = this.all[objGrid.binddataset];
            var blnRtn = true;

            for(var i=0; i < objDataset.getRowCount(); i++)
            {
                if (objDataset.getRowType(i) == 2 || objDataset.getRowType(i) == 4)        {

                    if (pJobFlag == "INSPITEMID")    /*검사항목*/
                    {
                        strColIdList = "INSPITEMID,INSPITEMNAME_KR,INSPITEMNAME_US,INSPITEMNAME_CN,INSPITEMNAME_VN,VALIDSTATE,INSPITEMCLASS";
        				if (objDataset.getColumn(i, "INSPITEMCLASS") == "SpecMeasure") //규격측정
        				{
        					strColIdList += ",TOPBOTTOMYN";
        				}
        				if (objDataset.getColumn(i, "TOPBOTTOMYN") == "Y")
        				{
        					strColIdList += ",CIRCUITSTD";
        				}
                    }
                    else if (pJobFlag == "INSPECTIONMETHODID")    /*검사방법*/
                    {
                        strColIdList = "INSPECTIONMETHODID,INSPECTIONMETHODNAME_KR,INSPECTIONMETHODNAME_US,INSPECTIONMETHODNAME_CN,INSPECTIONMETHODNAME_VN,VALIDSTATE";
                    }

                    var arrColId = strColIdList.split(",");

                    for(var j=0; j<arrColId.length; j++)
                    {
                        if (this.gfn_isNull(objDataset.getColumn(i, arrColId[j])))
                        {
                            var colId = this.nfn_GetColNum(objGrid, arrColId[j]);
        					var dicNm;
        					if (pJobFlag == "INSPITEMID" && arrColId[j] =="INSPITEMCLASS")    /*검사항목-검사항목분류*/
        					{
        					   	dicNm= "InspItemClass";
        					}
        					else
        					{
        						dicNm= arrColId[j];
        					}
                            var title = this.nfn_nvl(this.nfn_getDictionaryname(dicNm),objGrid.getCellProperty("head", colId, "text"))
                            this.gfn_Message("InputSomeThing", title, "warning", "ok");//alert(arrTitle[j]+"을(를) 입력 해주세요");
                            objDataset.set_rowposition(i);
                            objGrid.setFocus();
                            objGrid.setCellPos(colId);
                            objGrid.showEditor(true);
                            blnRtn = false;
                            return false;
                        }
                    }//end for

                    if (pJobFlag == "INSPITEMID" || pJobFlag == "INSPECTIONMETHODID")
                    {
        				var checkKey;
        				var checkLength;
        				var msgCheckLength;
        				var checkColNm;

                        if (pJobFlag == "INSPITEMID")
                        {
                            checkKey = objDataset.getColumn(i, pJobFlag);    //검사항목등록
        					checkLength = 5;
                            msgCheckLength = "ALPHANUMFIVEDIGITS"; //영문,숫자 5자리
                            checkColNm = this.nfn_getDictionaryname("INSPITEMID"); //검사항목 ID
                        }
                        else if (pJobFlag == "INSPECTIONMETHODID")
                        {
                            checkKey = objDataset.getColumn(i, pJobFlag);  //검사방법등록
                            checkLength = 3;
        					msgCheckLength = "NUMBERTHREEDIGITS"; //숫자 3자리
                            checkColNm = this.nfn_getDictionaryname("INSPECTIONMETHODID"); //검사방법 ID
                        }

                        if (this.nfn_GetLengB(checkKey) != parseInt(checkLength) )
                        {
        					this.gfn_Message("CheckInputLength", new Array(checkColNm, msgCheckLength, "warning", "ok"));
                            colId = this.nfn_GetColNum(objGrid, pJobFlag);
                            objDataset.set_rowposition(i);
                            objGrid.setFocus();
                            objGrid.setCellPos(colId);
                            objGrid.showEditor(true);
                            blnRtn = false;
                            return false;
                        }
                    }//end if pJobFlag
                }//end if
            } //end for
        };

        /*
         * 기능 : 트리검색시
         */
        this.fn_searchFilterTree = function(obj,e)
        {
            var searchKey = this.div_work.form.tab.Tabpage3.form.div_treeSearch.form.edt_treeItemName.value;
            this.ds_inspitemmethodTreeList.filter("");
            this.ds_inspitemmethodTreeList.filter("ITEMNAME.indexOf('"+searchKey+"') >= 0");
        };

        /*
         * 트리 필터
         */
        // this.fn_searchFilterTree = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        // 	var searchText = this.div_work.form.tab.Tabpage3.form.div_treeSearch.form.edt_treeItemName.value;
        // 	this.fv_preItemId	 = this.ds_inspitemmethodTreeList.getColumn(this.ds_inspitemmethodTreeList.rowposition, "ITEMID");
        //
        // 	if(this.nfn_isNull(searchText)) {
        // 		this.ds_inspitemmethodTreeList.filter("");
        // 	} else {
        //
        // 		// (21.07.13) 테스트 -> 필터 정상작동 되는듯.
        // 		this.ds_inspitemmethodTreeList.set_enableevent(false);
        // 		this.ds_inspitemmethodTreeList.filter("");
        // 		var nFilter 	= "";			// 필터 조건
        // 		var nSubFilter = "ITEMNAME=='INTERFLEX'";			// 필터 조건(서브)
        // 		var nCnt = this.ds_inspitemmethodTreeList.rowcount;
        // 		var nMaxLev = this.ds_inspitemmethodTreeList.getMax("ITEMLEVEL");
        // 		for(var i=0; i<nCnt; i++)
        // 		{
        // 			var nName = this.ds_inspitemmethodTreeList.getColumn(i, "ITEMNAME");
        //
        // 			if(nName.toUpperCase().indexOf(searchText.toUpperCase()) > -1)
        // 			{
        // 				var nLevel = this.ds_inspitemmethodTreeList.getColumn(i,"ITEMLEVEL");
        // 				var nParent = "";
        // 				for(var j=0; j< nLevel; j++)
        // 				{
        // 					var nPos = j == 0 ? i : (this.ds_inspitemmethodTreeList.findRow("ITEMID",nParent));
        // 					nParent = this.ds_inspitemmethodTreeList.getColumn(nPos,"INSPECTIONCLASSID");
        // 					var nId = this.ds_inspitemmethodTreeList.getColumn(nPos,"ITEMID");
        //
        // 					if(j == 0)
        // 					{
        // 						this.fv_preItemId = nId;
        // 					}
        //
        //
        // 					if((parseInt(nMaxLev) != parseInt(nLevel)) && j == 0)
        // 					{
        // 						trace(" 레벨 확인(1) : "+nMaxLev+" || "+nLevel+" || "+nName);
        // 						if(parseInt(nLevel) == 1)
        // 						{
        // 							trace(" 레벨 확인(2) : [ITEMID]");
        // 							nSubFilter += this.gfn_isNull(nSubFilter) ? "ITEMID == '"+nId+"'" : " || ITEMID == '"+nId+"'";
        // 						}
        // 						else if(parseInt(nLevel) == 2)
        // 						{
        // 							trace(" 레벨 확인(3) : [INSPECTIONCLASSID]");
        // 							nSubFilter += this.gfn_isNull(nSubFilter) ? "INSPECTIONCLASSID == '"+nId+"'" : " || INSPECTIONCLASSID == '"+nId+"'";
        // 						}
        // 					}
        // 					nFilter += this.gfn_isNull(nFilter) ? "ITEMID == '"+nId+"'" : " || ITEMID == '"+nId+"'";
        // 				}
        // 			}
        // 		}
        //
        //
        // 		if(!this.gfn_isNull(nFilter))
        // 		{
        // 			nFilter = nFilter+ "|| ("+nSubFilter+")";
        // 		}
        // 		trace("필터 설정값 : "+nFilter);
        //
        // 		//trace(" this.fv_preItemId : "+this.fv_preItemId);
        // 		this.ds_inspitemmethodTreeList.filter(nFilter);
        // 		this.ds_inspitemmethodTreeList.set_enableevent(true);
        // 	}
        //
        // 	// 이전 선택 값 확인
        // 	var nRowPos = this.ds_inspitemmethodTreeList.findRow("ITEMID",this.fv_preItemId);
        //
        // 	if(nRowPos != -1)
        // 	{
        // 		this.ds_inspitemmethodTreeList.set_rowposition(nRowPos);
        // 	}
        // 	else
        // 	{
        // 		this.ds_inspitemmethodTreeList.set_rowposition(0);
        // 	}
        // };
        //
        // /*
        //  * 트리 x 버튼 클릭시 이벤트 설정
        //  */
        // this.fn_clickTreeSearch = function ()
        // {
        // 	this.ds_inspitemmethodTreeList.filter("");
        // };

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
         * 이벤트 : 검사방법별 검사항목 등록 - 검사방법목록  '검사방법명' 버튼 클릭 시
         */
        this.div_work_tab_Tabpage3_grd_inspmethodList_onexpandup = function(obj,e)
        {
            if (e.row < 0) return;
            this.fn_openPop("GRD_INSPMETHOD143","P00143");
        };

        /*
         * 이벤트 : 검사방법별 검사항목 등록 - 검사항목목록  '검사항목명' 버튼 클릭 시
         */
        this.div_work_tab_Tabpage3_grd_inspmethoditemList_onexpandup = function(obj,e)
        {
            if (e.row < 0) return;
            this.fn_openPop("GRD_INSPMETHODITEM144","P00144");
        };

        /*
         * 이벤트 : 검사방법별 검사항목 등록 - 검사항목 리스트 클릭시
         */
        this.ds_inspitemmethodTreeList_canrowposchange = function(obj,e)
        {
            if (e.newrow < 0) return;

            var bOk = true;
            if (this.gfn_dsIsUpdated(this.ds_inspmethodList)
               || this.gfn_dsIsUpdated(this.ds_inspmethoditemList)) {
                bOk = this.gfn_Message("WRITTENBEDELETE", null, "conf", "yesno");
            }

            if (bOk){
                this.fn_searchInspmethodList(e.newrow);
            } else {
                return false;
            }
        };

        /*
         * 이벤트 : 검사방법별 검사항목 등록 - 검사방법 목록 클릭시
         */
        this.ds_inspmethodList_canrowposchange = function(obj,e)
        {
            if (e.newrow < 0) return;

            var bOk = true;
            if (this.gfn_dsIsUpdated(this.ds_inspmethoditemList)) {
                bOk = this.gfn_Message("WRITTENBEDELETE", null, "conf", "yesno");
            }
            if (bOk){
                //this.g_positionB = e.newrow;
                this.fn_searchInspmethoditemList(e.newrow);
            } else {
                return false;
            }
        };

        /*
         * 이벤트 : 트리 검색 단어 입력 후 Enter시 검색
         */
        this.div_work_tab_Tabpage3_div_treeSearch_edt_treeItemName_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13)
        	{
        		this.fn_searchFilterTree();
        	}
        };

        /*
         * 이벤트 : Row 의 선택이 변경되어 DataSet 의 rowposition 속성값이 변경될 때 발생하는 이벤트입니다.
         */
        this.ds_inspitemList_cancolumnchange = function(obj,e)
        {
        	if (e.columnid == "TOPBOTTOMYN")
        	{
        		if (e.newvalue == "Y")
        		{
         			this.ds_CCircuitStdNAN.filter("");
         			this.ds_CCircuitStdNAN.filter("ENABLED_FLAG != '해당없음'");
        		}
        		else if(e.newvalue == "N")
        		{
        			//상/하단 사용여부가 N일 경우 초기화
        			obj.set_enableevent(false);
        			obj.setColumn(e.row, "CIRCUITSTD", "");
        			obj.set_enableevent(true);
        		}
        	}
        	return true;
        };

        /*
         * Grid 에 표시되었던 Combo 아이템 리스트 또는 팝업달력이 닫힐 때 발생하는 이벤트입니다.
         */
        this.div_work_tab_Tabpage1_grd_inspitemList_oncloseup = function(obj,e)
        {
        	this.div_work.form.tab.Tabpage1.form.grd_inspitemList.updateToDataset();
        };

        this.ds_inspitemList_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "INSPITEMCLASS") //항목분류
        	{
        		if (e.newvalue != "SpecMeasure") //규격측정
        		{
        			obj.setColumn(e.row, "TOPBOTTOMYN", "");
        			obj.setColumn(e.row, "CIRCUITSTD", "");
        			obj.g
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.tab_search.Tab1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tab1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.div_work.form.tab.Tabpage1.form.grd_inspitemList.addEventHandler("oncloseup",this.div_work_tab_Tabpage1_grd_inspitemList_oncloseup,this);
            this.div_work.form.tab.Tabpage1.form.btn_addRowInspitem.addEventHandler("onclick",this.fn_addInspitem,this);
            this.div_work.form.tab.Tabpage2.form.btn_addRowLookInspmethod.addEventHandler("onclick",this.fn_addLookInspmethod,this);
            this.div_work.form.tab.Tabpage3.form.btn_addRowInspmethod.addEventHandler("onclick",this.fn_addInspmethod,this);
            this.div_work.form.tab.Tabpage3.form.grd_inspmethoditemList.addEventHandler("onexpandup",this.div_work_tab_Tabpage3_grd_inspmethoditemList_onexpandup,this);
            this.div_work.form.tab.Tabpage3.form.grd_inspmethodList.addEventHandler("onexpandup",this.div_work_tab_Tabpage3_grd_inspmethodList_onexpandup,this);
            this.div_work.form.tab.Tabpage3.form.div_treeSearch.form.edt_treeItemName.addEventHandler("onkeydown",this.div_work_tab_Tabpage3_div_treeSearch_edt_treeItemName_onkeydown,this);
            this.div_work.form.tab.Tabpage3.form.div_treeSearch.form.btn_treeItemName.addEventHandler("onclick",this.fn_searchFilterTree,this);
            this.div_work.form.tab.Tabpage3.form.btn_addRowInspmethoditem.addEventHandler("onclick",this.fn_addInspmethoditem,this);
            this.ds_inspitemList.addEventHandler("cancolumnchange",this.ds_inspitemList_cancolumnchange,this);
            this.ds_inspitemList.addEventHandler("oncolumnchanged",this.ds_inspitemList_oncolumnchanged,this);
            this.ds_inspitemmethodTreeList.addEventHandler("canrowposchange",this.ds_inspitemmethodTreeList_canrowposchange,this);
            this.ds_inspmethodList.addEventHandler("canrowposchange",this.ds_inspmethodList_canrowposchange,this);
        };
        this.loadIncludeScript("BAS04200M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
