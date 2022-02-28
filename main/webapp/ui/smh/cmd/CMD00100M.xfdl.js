(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMD00100M");
            this.set_titletext("ID Serial관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1278,757);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"IDCLASSID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_basIdclass", this);
            obj._setContents("<ColumnInfo><Column id=\"IDCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"IDCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LENGTH\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"DATE\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"DATE\" size=\"256\"/><Column id=\"LASTTXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNID\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNUSER\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNTIME\" type=\"DATE\" size=\"256\"/><Column id=\"LASTTXNCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_basIdclassserial", this);
            obj._setContents("<ColumnInfo><Column id=\"IDCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"PREFIX\" type=\"STRING\" size=\"256\"/><Column id=\"LASTSERIALNO\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"DATE\" size=\"256\"/><Column id=\"SERIALNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_basIddefinition", this);
            obj._setContents("<ColumnInfo><Column id=\"IDDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"IDCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"IDDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"IDDEFCATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"IDDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LENGTH\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"FORMAT\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEPTIONCHARS\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"DATE\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"DATE\" size=\"256\"/><Column id=\"LASTTXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNID\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNUSER\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNTIME\" type=\"DATE\" size=\"256\"/><Column id=\"LASTTXNCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"IDCLASSNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","2","64","295",null,null,"2",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("label00","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("유효상태");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_validstate","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,ValidState,,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label02","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("ID 그룹");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_idclassname","108","35",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_idclassname",null,"35","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","75","107","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","75","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"30","15","97","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","40","15","97",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"55","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","81","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_idclassname_id","108","205",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_visible("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","9","56","206","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","31","24","2",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","34",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","31","24","61",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","10","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","40","16","145","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_text("업무화면명(자동)");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:2","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Tab("tab_work","298","48",null,null,"3","1",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_work);
            obj.set_text("ID그룹");
            this.tab_work.addChild(obj.name, obj);

            obj = new Grid("grd_basIdclass","1","31",null,null,"1","1",null,null,null,null,this.tab_work.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_basIdclass");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"104\"/><Column size=\"164\"/><Column size=\"208\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ID 그룹\"/><Cell col=\"1\" text=\"ID 그룹명\"/><Cell col=\"2\" text=\"설명\"/><Cell col=\"3\" text=\"전체길이\"/><Cell col=\"4\" text=\"유효상태\"/><Cell col=\"5\" text=\"생성자\"/><Cell col=\"6\" text=\"생성일\"/><Cell col=\"7\" text=\"수정자\"/><Cell col=\"8\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:IDCLASSID\" edittype=\"expr:dataset.getRowType(currow) ==2 ? &apos;normal&apos;:&apos;none&apos;\" editautoselect=\"true\" calendarautoselect=\"false\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:IDCLASSNAME\" edittype=\"normal\" editautoselect=\"true\" calendarautoselect=\"false\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:DESCRIPTION\" edittype=\"normal\" editautoselect=\"true\" calendarautoselect=\"false\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:LENGTH\" displaytype=\"number\" edittype=\"normal\" editautoselect=\"true\" calendarautoselect=\"false\"/><Cell col=\"4\" text=\"bind:VALIDSTATE\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,ValidState,,Y,Y\" calendarautoselect=\"false\" editautoselect=\"true\"/><Cell col=\"5\" text=\"bind:CREATOR\" calendarautoselect=\"false\" editautoselect=\"true\" displaytype=\"normal\" maskeditformat=\"####-##-##\"/><Cell col=\"6\" text=\"bind:CREATEDTIME\" displaytype=\"date\" edittype=\"none\" calendardisplaynulltype=\"nulltext\" calendardateformat=\"yyyy-MM-dd\" calendarautoselect=\"true\" editautoselect=\"false\"/><Cell col=\"7\" text=\"bind:MODIFIER\" calendarautoselect=\"false\" editautoselect=\"true\"/><Cell col=\"8\" text=\"bind:MODIFIEDTIME\" displaytype=\"date\" edittype=\"none\" calendardisplaynulltype=\"nulltext\" calendardateformat=\"yyyy-MM-dd\" calendarautoselect=\"true\" editautoselect=\"false\"/></Band></Format></Formats>");
            this.tab_work.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","7","-4","141","28",null,null,null,null,null,null,this.tab_work.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("ID 그룹 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            this.tab_work.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_addRow_ds_basIdclass",null,"2","26","24","114",null,null,null,null,null,this.tab_work.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.tab_work.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_basIdclass",null,"2","26","24","88",null,null,null,null,null,this.tab_work.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.tab_work.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_copyRow_ds_basIdclass",null,"2","27","24","61",null,null,null,null,null,this.tab_work.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdCopy");
            obj.set_tooltiptext("GridCopyRow");
            this.tab_work.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_basIdclass",null,"2","29","24","32",null,null,null,null,null,this.tab_work.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.tab_work.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlUp_grd_basIdclass",null,"2","29","24","3",null,null,null,null,null,this.tab_work.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.tab_work.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_work);
            obj.set_text("ID정의");
            this.tab_work.addChild(obj.name, obj);

            obj = new Grid("grd_basIddefinition","1","34",null,null,"1","354",null,null,null,null,this.tab_work.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_basIddefinition");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"132\"/><Column size=\"116\"/><Column size=\"155\"/><Column size=\"98\"/><Column size=\"61\"/><Column size=\"97\"/><Column size=\"91\"/><Column size=\"58\"/><Column size=\"80\"/><Column size=\"56\"/><Column size=\"73\"/><Column size=\"48\"/><Column size=\"64\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ID 그룹명\"/><Cell col=\"1\" text=\"ID 정의\"/><Cell col=\"2\" text=\"ID 정의명\"/><Cell col=\"3\" text=\"ID 타입\"/><Cell col=\"4\" text=\"전체길이\"/><Cell col=\"5\" text=\"포맷\"/><Cell col=\"6\" text=\"ID 구분\"/><Cell col=\"7\" text=\"ID 순서\"/><Cell col=\"8\" text=\"유효상태\"/><Cell col=\"9\" text=\"생성자\"/><Cell col=\"10\" text=\"생성일\"/><Cell col=\"11\" text=\"수정자\"/><Cell col=\"12\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:IDCLASSNAME\" edittype=\"expr:comp.parent.parent.parent.parent.ds_basIddefinition.getRowType(currow) ==2 ? &apos;normal&apos;:&apos;none&apos;\" expandshow=\"show\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:IDDEFID\" edittype=\"expr:dataset.getRowType(currow) ==2 ? &apos;normal&apos;:&apos;none&apos;\" editautoselect=\"true\" calendarautoselect=\"false\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:IDDEFNAME\" edittype=\"normal\" editautoselect=\"true\" calendarautoselect=\"false\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:IDDEFTYPE\" combocodecol=\"C,IDDefType,SEL,Y,Y\" displaytype=\"combotext\" edittype=\"combo\" editautoselect=\"true\" calendarautoselect=\"false\"/><Cell col=\"4\" text=\"bind:LENGTH\" edittype=\"normal\" displaytype=\"number\" editautoselect=\"true\" calendarautoselect=\"false\"/><Cell col=\"5\" text=\"bind:FORMAT\" edittype=\"normal\" editautoselect=\"true\" calendarautoselect=\"false\"/><Cell col=\"6\" text=\"bind:IDDEFCATEGORY\" combocodecol=\"C,IDDefCategory,SEL,Y,Y\" displaytype=\"combotext\" edittype=\"combo\" editautoselect=\"true\" calendarautoselect=\"false\"/><Cell col=\"7\" text=\"bind:SEQUENCE\" displaytype=\"number\" edittype=\"normal\" editautoselect=\"true\" calendarautoselect=\"false\"/><Cell col=\"8\" text=\"bind:VALIDSTATE\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,ValidState,,Y,Y\" editautoselect=\"true\" calendarautoselect=\"false\"/><Cell col=\"9\" text=\"bind:CREATOR\" editautoselect=\"true\" calendarautoselect=\"false\"/><Cell col=\"10\" text=\"bind:CREATEDTIME\" calendardisplaynulltype=\"nulltext\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" editautoselect=\"false\" calendarautoselect=\"true\"/><Cell col=\"11\" text=\"bind:MODIFIER\" editautoselect=\"true\" calendarautoselect=\"false\"/><Cell col=\"12\" text=\"bind:MODIFIEDTIME\" calendardisplaynulltype=\"nulltext\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" editautoselect=\"false\" calendarautoselect=\"true\"/></Band></Format></Formats>");
            this.tab_work.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_basIdclassserial","1",null,null,"311","1","1",null,null,null,null,this.tab_work.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_basIdclassserial");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"155\"/><Column size=\"110\"/><Column size=\"158\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ID Serial No\"/><Cell col=\"1\" text=\"생성자\"/><Cell col=\"2\" text=\"생성일\"/></Band><Band id=\"body\"><Cell text=\"bind:SERIALNO\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:CREATOR\"/><Cell col=\"2\" text=\"bind:CREATEDTIME\" calendardisplaynulltype=\"nulltext\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.tab_work.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_basIdclassserial",null,null,"29","24","5","317",null,null,null,null,this.tab_work.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.tab_work.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","7","2","141","28",null,null,null,null,null,null,this.tab_work.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("코드 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            this.tab_work.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static20_00_00_00","8",null,"141","28",null,"315",null,null,null,null,this.tab_work.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_text("ID Serial 이력");
            obj.set_cssclass("sta_WF_subTitle");
            this.tab_work.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_addRow_ds_basIddefinition",null,"5","26","24","113",null,null,null,null,null,this.tab_work.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.tab_work.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_basIddefinition",null,"5","26","24","87",null,null,null,null,null,this.tab_work.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.tab_work.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_copyRow_ds_basIddefinition",null,"5","27","24","60",null,null,null,null,null,this.tab_work.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_grdCopy");
            obj.set_tooltiptext("GridCopyRow");
            this.tab_work.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_basIddefinition",null,"5","29","24","31",null,null,null,null,null,this.tab_work.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.tab_work.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlUp_grd_basIddefinition",null,"5","29","24","3",null,null,null,null,null,this.tab_work.Tabpage2.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.tab_work.Tabpage2.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1278,757,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CMD00100M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: ID Serial 관리
         * 파일명 		: CMD00100.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2021.01.11
         *
         * 설  명		: ID Serial 조회/수정/삭제/엑셀다운로드 기능 제공
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.01.11	진성하   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        // include "lib::comLib.xjs";
        // include "cuslib::nbdfComLib.xjs";

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.fv_currDate;

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	//this.div_page.set_visible(true);

        	// paging
        	//this.fn_paging_onload(obj);
        	// paging end
        	this.fv_currDate = this.nfn_getCurrentSystemTime();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_basIdclass.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "VALIDSTATE", this.tab_search.Tabpage1.form.cbo_validstate.value);
        	this.ds_search.setColumn(0, "IDCLASSID", this.tab_search.Tabpage1.form.edt_idclassname_id.value);

        	if(this.tab_work.tabindex==0){

        		var sSvcID = "selectBasIdclassList";
        		var sController = "/cmd00100/selectBasIdclassList.do";
        		var sInDatasets = "INPUT=ds_search";
        		var sOutDatasets = "ds_basIdclass=ds_basIdclass";
        		var sArgs = "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	}else{
        		var sSvcID = "selectBasIdclassList";
        		var sController = "/cmd00100/selectBasIdclassList.do";
        		var sInDatasets = "INPUT=ds_search";
        		var sOutDatasets = "ds_basIddefinition=ds_basIddefinition";
        		var sArgs = "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

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
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	if(this.tab_work.tabindex==0){
        		if (!this.gfn_dsIsUpdated(this.ds_basIdclass) )
        		{
        			this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        			return;
        		}

        		var component = this.tab_work.Tabpage1.form.grd_basIdclass;
        		var strColIdList = "IDCLASSID,IDCLASSNAME,LENGTH,VALIDSTATE";
        		var rtn = this.nfn_MandatoryCheckGrid(component, strColIdList);
        		if (rtn == false) return;

        		// -------------------------
        		// 저장
        		// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        		// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        		// -------------------------
        		var sSvcID = "saveBasIdclass";
        		var sController = "/cmd00100/saveBasIdclass.do";
        		var sInDatasets = "INPUT=ds_basIdclass:U";
        		var sOutDatasets = "";

        		var sArgs = "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	}else{
        		if (!this.gfn_dsIsUpdated(this.ds_basIddefinition) )
        		{
        			this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        			return;
        		}

        		var component = this.tab_work.Tabpage2.form.grd_basIddefinition;
        		var strColIdList = "IDCLASSNAME,IDDEFID,IDDEFNAME,IDDEFTYPE,LENGTH,IDDEFCATEGORY";
        		var rtn = this.nfn_MandatoryCheckGrid(component, strColIdList);
        		if (rtn == false) return;

        		// -------------------------
        		// 저장
        		// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        		// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        		// -------------------------
        		var sSvcID = "saveBasIdclass";
        		var sController = "/cmd00100/saveBasIddefinition.do";
        		var sInDatasets = "INPUT=ds_basIddefinition:U";
        		var sOutDatasets = "";

        		var sArgs = "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	}
        };

        /*
         * 기능 : 삭제
         */
        this.fn_delelete = function(obj,e)
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

        /*
         * 기능 : work영역 초기화  => 공통처리
         */
        this.fn_reset = function(obj,e)
        {
        	this.reload();
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
        		if (trId == "saveBasIdclass")
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.fn_search();
        		}
        		else if (trId == "selectEcmLookupValuesVList2ds_CValidState")
        		{
        			this.tab_search.Tabpage1.form.cbo_validstate.set_index(0);
        		}
        	}

        }


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "SEARCH_IDCLASS")
        	{
        		var str="";
        		var str_id="";

        		for(var i=0; i<rtn.length; i++){
        			var colArray = rtn[i];
        			trace(colArray);
        			var str0 = (i==0) ? "" : "," ;
        			str_id = str_id + str0 + colArray[0];
        			str = str + str0 + colArray[1];
        		}
        		this.tab_search.Tabpage1.form.edt_idclassname_id.set_value(str_id);
        		this.tab_search.Tabpage1.form.edt_idclassname.set_value(str);
        	}
        	if(sPopupId == "SEARCH_IDCLASS2")
        	{
        		this.ds_basIddefinition.setColumn(this.ds_basIddefinition.rowposition,"IDCLASSID",rtn[0]);
        		this.ds_basIddefinition.setColumn(this.ds_basIddefinition.rowposition,"IDCLASSNAME",rtn[1]);
        	}

        }
        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/


        this.div_work_tab_Tabpage1_btn_xlDn_grd_basIdclass_onclick = function(obj,e)
        {
        	var sName = "grd_basIdclass";
        	// 저장될 엑셀명
        	var file_name = "공통코드";
        	this.gfn_export_excel(sName, "Sheet1", file_name, "EXCEL");
        };



        this.tab_search_Tabpage1_btn_idclass_onclick = function(obj,e)
        {
        	var popupId = "SEARCH_IDCLASS";
        	var oArg = {};
        	oArg.arg_type = "C";
        	oArg.arg_popupCd = "P00084";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "IDCLASSID|IDCLASSNAME";
        	oArg.arg_paramCols = "";
        	oArg.arg_paramValues = "";
        	oArg.arg_searchStr = "IDNAME="+this.tab_search.Tabpage1.form.edt_idclassname.value;
        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"");
        };

        this.tab_work_Tabpage2_grd_basIddefinition_onexpandup = function(obj,e)
        {
        	if(e.row<0) return;
        	if (this.nfn_isEqualCol(obj, e.col, "IDCLASSNAME"))
        	{
        		var popupId = "SEARCH_IDCLASS2";
        		var oArg = {};
        		oArg.arg_type = "BA";
        		oArg.arg_popupCd = "P00084";
        		oArg.arg_popupNm = "";
        		oArg.arg_rtnCols = "IDCLASSID|IDCLASSNAME";
        		oArg.arg_paramCols = "";
        		oArg.arg_paramValues = "";
        		oArg.arg_searchStr = "";
        		this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"");
        	}
        };

        this.tab_work_Tabpage2_grd_basIddefinition_onselectchanged = function(obj,e)
        {
        	this.ds_basIdclassserial.clearData();

        	if(e.row<0) return;
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "IDCLASSID", this.ds_basIddefinition.getColumn(this.ds_basIddefinition.rowposition,"IDCLASSID"));

        	var sSvcID = "selectBasIdclassserialList";
        	var sController = "/cmd00100/selectBasIdclassserialList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_basIdclassserial=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tabpage1.form.btn_idclassname.addEventHandler("onclick",this.tab_search_Tabpage1_btn_idclass_onclick,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.div_header.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.tab_work.Tabpage1.form.btn_addRow_ds_basIdclass.addEventHandler("onclick",this.tab_work_Tabpage1_btn_addRow_ds_basIdclass_onclick,this);
            this.tab_work.Tabpage2.form.grd_basIddefinition.addEventHandler("onexpandup",this.tab_work_Tabpage2_grd_basIddefinition_onexpandup,this);
            this.tab_work.Tabpage2.form.grd_basIddefinition.addEventHandler("onselectchanged",this.tab_work_Tabpage2_grd_basIddefinition_onselectchanged,this);
            this.tab_work.Tabpage2.form.btn_addRow_ds_basIddefinition.addEventHandler("onclick",this.tab_work_Tabpage2_btn_addRow_ds_basIddefinition_onclick,this);
        };
        this.loadIncludeScript("CMD00100M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
