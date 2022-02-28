(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS04400M");
            this.set_titletext("검사조치 및 실행");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_basQcinterlockaction", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"QCGRADE\" type=\"STRING\" size=\"256\"/><Column id=\"ACTIONID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNID\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNUSER\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNTIME\" type=\"DATE\" size=\"256\"/><Column id=\"LASTTXNCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"P_ROWPOS\" type=\"STRING\" size=\"256\"/><Column id=\"ACTIONNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKEDACTION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"LOOKUP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"QCGRADE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONCLASSID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_basQcgrade", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"QCGRADE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comboQcgrade", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"QCGRADE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_basQcinterlock", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"INSPECTIONCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"DECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"DECISIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"QCGRADE\" type=\"STRING\" size=\"256\"/><Column id=\"FROMNGRATE\" type=\"STRING\" size=\"256\"/><Column id=\"TONGRATE\" type=\"STRING\" size=\"256\"/><Column id=\"NGQUANTITY\" type=\"STRING\" size=\"256\"/><Column id=\"NGCONDITION\" type=\"STRING\" size=\"256\"/><Column id=\"QTYORRATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRIORITY\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNID\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNUSER\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONCLASS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("label00","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_site","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,SiteType,,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label01","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("유효상태");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("VALIDSTATE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label02","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("검사종류");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("4D90FFD91C2A4A71B1D9ACD81B84181F");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","100","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
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

            obj = new Static("guidetip00",null,"70","15","97","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip01","0","80","15","97",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip03",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"80","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","106","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_validState","108","35","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_codecolumn("C,ValidState,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_inspectionClassid","108","60","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

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

            obj = new Tab("tab_qcinterlock","0","0",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab_qcinterlock);
            obj.set_text("판정별 조치등급");
            obj.set_tooltiptext("QCGRADENGCAPTION");
            this.div_work.form.tab_qcinterlock.addChild(obj.name, obj);

            obj = new Static("title3","0","0",null,"34","0",null,null,null,null,null,this.div_work.form.tab_qcinterlock.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("판정별 조치등급");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("QCGRADENGCAPTION");
            this.div_work.form.tab_qcinterlock.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_basQcinterlock","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_qcinterlock.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_basQcinterlock");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"판정등급\" cssclass=\"cell_point\" tooltiptext=\"DECISIONDEGREE\"/><Cell col=\"2\" text=\"판정유형\" cssclass=\"cell_point\" tooltiptext=\"DECISIONTYPE\"/><Cell col=\"3\" text=\"우선순위\" cssclass=\"cell_point\" tooltiptext=\"PRIORITY\"/><Cell col=\"4\" text=\"조치등급\" cssclass=\"cell_point\" tooltiptext=\"QCGRADE\"/><Cell col=\"5\" text=\"NG조건\" tooltiptext=\"NGCONDITION\"/><Cell col=\"6\" text=\"수량/불량율 구분\" tooltiptext=\"QTYORRATE\"/><Cell col=\"7\" text=\"FROM 불량율\" tooltiptext=\"FROMNGRATE\"/><Cell col=\"8\" text=\"TO 불량율\" tooltiptext=\"TONGRATE\"/><Cell col=\"9\" text=\"불량수량\" tooltiptext=\"NGQUANTITY\"/><Cell col=\"10\" text=\"유효상태\" tooltiptext=\"VALIDSTATE\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:DECISIONDEGREE\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,DecisionDegree,,Y,Y\"/><Cell col=\"2\" text=\"bind:DECISIONTYPE\" textAlign=\"left\" combocodecol=\"C,QCDecisionType,,Y,Y\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"3\" text=\"bind:PRIORITY\" textAlign=\"right\" edittype=\"expr:comp.parent.parent.parent.parent.parent.parent.fn_setEnbleText(&apos;PRIORITY&apos;, currow)\"/><Cell col=\"4\" text=\"bind:QCGRADE\" textAlign=\"left\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_comboQcgrade\" combocodecol=\"QCGRADE\" combodatacol=\"QCGRADE\"/><Cell col=\"5\" text=\"bind:NGCONDITION\" displaytype=\"combotext\" edittype=\"expr:comp.parent.parent.parent.parent.parent.parent.fn_setEnbleText(&apos;NGCONDITION&apos;, currow)\" combocodecol=\"C,Condition,,Y,Y\"/><Cell col=\"6\" text=\"bind:QTYORRATE\" displaytype=\"combotext\" edittype=\"expr:comp.parent.parent.parent.parent.parent.parent.fn_setEnbleText(&apos;QTYORRATE&apos;, currow)\" combocodecol=\"C,QtyDefectRateType,,Y,Y\"/><Cell col=\"7\" text=\"bind:FROMNGRATE\" displaytype=\"number\" textAlign=\"right\" edittype=\"expr:comp.parent.parent.parent.parent.parent.parent.fn_setEnbleText(&apos;FROMNGRATE&apos;, currow)\"/><Cell col=\"8\" text=\"bind:TONGRATE\" displaytype=\"number\" textAlign=\"right\" edittype=\"expr:comp.parent.parent.parent.parent.parent.parent.fn_setEnbleText(&apos;TONGRATE&apos;, currow)\"/><Cell col=\"9\" text=\"bind:NGQUANTITY\" textAlign=\"right\" displaytype=\"number\" edittype=\"expr:comp.parent.parent.parent.parent.parent.parent.fn_setEnbleText(&apos;NGQUANTITY&apos;, currow)\"/><Cell col=\"10\" text=\"bind:VALIDSTATE\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,ValidState,,Y,Y\"/></Band></Format></Formats>");
            this.div_work.form.tab_qcinterlock.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_addRow",null,"6","26","24","29",null,null,null,null,null,this.div_work.form.tab_qcinterlock.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.form.tab_qcinterlock.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_basQcinterlock",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_qcinterlock.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridImport");
            this.div_work.form.tab_qcinterlock.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab_qcinterlock);
            obj.set_text("조치등급/조치별 Action");
            obj.set_tooltiptext("QCGRADEACTIONCAPTION");
            this.div_work.form.tab_qcinterlock.addChild(obj.name, obj);

            obj = new Static("sta_qcgrade","0","0","141","34",null,null,null,null,null,null,this.div_work.form.tab_qcinterlock.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("조치등급");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("QCGRADECAPTION");
            this.div_work.form.tab_qcinterlock.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_addRowbasQcgrade","224","6","29","24",null,null,null,null,null,null,this.div_work.form.tab_qcinterlock.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_text("");
            obj.set_tooltiptext("GridAdd");
            this.div_work.form.tab_qcinterlock.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_basQcgrade","253","6","29","24",null,null,null,null,null,null,this.div_work.form.tab_qcinterlock.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_text("");
            obj.set_tooltiptext("GridImport");
            this.div_work.form.tab_qcinterlock.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_basQcgrade","0","34","282",null,null,"0",null,null,null,null,this.div_work.form.tab_qcinterlock.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_basQcgrade");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"조치등급\" cssclass=\"cell_point\" tooltiptext=\"QCGRADE\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:QCGRADE\" textAlign=\"left\" edittype=\"expr:dataset.getRowType(currow)==2 ? &apos;text&apos; : &apos;none&apos;\"/></Band></Format></Formats>");
            this.div_work.form.tab_qcinterlock.Tabpage2.addChild(obj.name, obj);

            obj = new Static("title2","292","0","340","34",null,null,null,null,null,null,this.div_work.form.tab_qcinterlock.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_text("조치별 Action");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("QCACTIONCAPTION");
            this.div_work.form.tab_qcinterlock.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_basQcinterlockaction","292","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_qcinterlock.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_binddataset("ds_basQcinterlockaction");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"40\"/><Column size=\"130\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"Action 명\" tooltiptext=\"ACTIONNAME\"/><Cell col=\"3\" text=\"Action 유형\" tooltiptext=\"ACTIONTYPE\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CHECKEDACTION\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:ACTIONNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:ACTIONTYPE\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.form.tab_qcinterlock.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_basQcinterlockaction",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_qcinterlock.Tabpage2.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_text("");
            obj.set_tooltiptext("GridImport");
            this.div_work.form.tab_qcinterlock.Tabpage2.addChild(obj.name, obj);

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

            obj = new Button("btn_help",null,"16","26","24","29",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","26","24","55",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","133","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_text("검사조치 및 실행");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MENU_PG-SD-0470");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
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
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAS04400M.xfdl","lib::lib_bas.xjs");
        this.registerScript("BAS04400M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 검사 조치 및 실행
         * 파일명 		: BAS04400M.xfdl
         * 작성자 		: 권혜영
         * 작성일 		: 2021.04.13
         * 설  명		: 기준정보 > 품질기준정보 > 검사 조치 및 실행
        				  품질 기준 정보의 검사조치 및 실행을 관리한다.
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.13	권혜영   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.fv_qcGradeRowPos = 0;
        this.fv_isInitBasQcinterlock = true;
        this.fv_isInitBasQcgrade = true;
        this.fv_isNewBasQcinterlockaction = false;
        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.fn_initCombo();
        	this.fn_formInit();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.fn_searchComboQcgrade();

        	if(this.div_work.form.tab_qcinterlock.tabindex == 0) {
        		if(this.nfn_isNull(this.tab_search.Tabpage1.form.cbo_inspectionClassid.value)) {
        			var text = this.nfn_getDictionarynameUpper("INSPECTIONCLASS");
        			this.gfn_Message("NoSelectedMsg", text, "warning", "ok"); //선택된 {0}(이)가 없습니다. 먼저 선택하세요.
        			return;
        		}
        		this.fn_searchQcinterlock();

        	} else if(this.div_work.form.tab_qcinterlock.tabindex == 1) {
        		this.fn_searchQcgrade();
        	}
        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
         	this.tab_search.Tabpage1.form.cbo_validState.set_value("Valid");
        	this.ds_basQcinterlock.clearData();
        	this.ds_basQcgrade.clearData();
        	this.ds_basQcinterlockaction.clearData();
        };

        /*
         * 기능 : 신규 (판정별 조치등급)
         */
        this.fn_addBasQcinterlock = function(obj,e)
        {
        	var dsObj = this.ds_basQcinterlock;
        	if(dsObj == null) return;
        	if(this.fv_isInitBasQcinterlock) return;

        	var row = dsObj.addRow();
        	dsObj.setColumn(row,"ENTERPRISEID", this.gf_getEnterpriseId());//ENTERPRISEID
        	dsObj.setColumn(row,"PLANTID", this.gf_getSiteType());//PLANTID
        	dsObj.setColumn(row,"VALIDSTATE", "Valid");			//유효여부
        	dsObj.setColumn(row,"INSPECTIONCLASSID", this.tab_search.Tabpage1.form.cbo_inspectionClassid.value);
        	dsObj.setColumn(row,"INSPECTIONCLASS", this.tab_search.Tabpage1.form.cbo_inspectionClassid.text);
        	dsObj.setColumn(row,"SEQ", dsObj.rowcount);
        };

        /*
         * 기능 : 신규 (조치별 Action)
         */
        this.fn_addBasQcgrade = function(obj,e)
        {
        	var dsObj = this.ds_basQcgrade;
        	if(dsObj == null) return;
        	//if(this.fv_isInitBasQcgrade) return;

        	var row = dsObj.addRow();

        	dsObj.setColumn(row,"ENTERPRISEID", this.gf_getEnterpriseId());//ENTERPRISEID
        	dsObj.setColumn(row,"PLANTID", this.gf_getSiteType());//PLANTID
        	dsObj.setColumn(row,"VALIDSTATE", "Valid");			//유효여부
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveBasQcinterlock";
        	var sController 	= "/bas04400/saveBasQcinterlock.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";

        	//판정별 조치등급
        	if(this.div_work.form.tab_qcinterlock.tabindex == 0) {


        		if (!this.gfn_dsIsUpdated(this.ds_basQcinterlock))
        		{
        			this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        			return;
        		}
        		var component = this.div_work.form.tab_qcinterlock.Tabpage1.form.grd_basQcinterlock;
        		var strColIdList = "DECISIONDEGREE,DECISIONTYPE,PRIORITY,QCGRADE,SEQ,VALIDSTATE";
        		var rtn = this.nfn_MandatoryCheckGrid(component, strColIdList);
        		if (rtn == false) return;

        		var validation = this.fn_checkValidation();
        		if(!validation.rtn) {
        			this.gfn_Message(validation.msg, null, "warning", "ok");
        			return;
        		}
        		sInDatasets 	= "ds_basQcinterlock=ds_basQcinterlock:U";

        	}
        	//조치등급/ACTION
        	else if(this.div_work.form.tab_qcinterlock.tabindex == 1) {
        		if (!this.gfn_dsIsUpdated(this.ds_basQcinterlockaction))
        		{
        			this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        			return;
        		}
        		this.fn_setQcinterlockactionColumn();
        		sInDatasets 	= "ds_basQcinterlockaction=ds_basQcinterlockaction:U";
        	}

        	//최종 저장
        	if(this.nfn_isNull(sInDatasets)) return;
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 삭제
         */
        this.fn_delete = function (obj, e)
        {
        	var dsObj = this.ds_basEnterprise;
        	var nRowType = dsObj.getRowType(dsObj.rowposition);
        	if(nRowType==2 ){
        		var bOK = this.gfn_Message("IsDeleted", null, "conf", "yesno");
        		if (bOK == false) return;
        		dsObj.deleteRow(dsObj.rowposition);
        	} else {
        		this.gfn_Message("CantdelSaveData", null, "info", "ok");
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
        		if (trId == "saveBasQcinterlock")
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.fn_search();
        		} else if (trId == "selectInspectionClassidList")
        		{
        			this.this.tab_search.Tabpage1.form.cbo_inspectionClassid.set_index(0);
        		} else if (trId == "selectBasQcgradeList")
        		{
        			this.fv_isInitBasQcgrade = false;
        		} else if (trId == "selectBasQcinterlockList")
        		{
        			this.fv_isInitBasQcinterlock = false;
        		} else if (trId == "selectBasQcinterlockactionList")
        		{
        			if(this.fv_isNewBasQcinterlockaction) {
        				this.ds_basQcinterlockaction.set_updatecontrol(false);
        				for(var i = 0;  i < this.ds_basQcinterlockaction.rowcount; i++) {
        					this.ds_basQcinterlockaction.setColumn(i, "P_ROWPOS", this.fv_qcGradeRowPos);
        					this.ds_basQcinterlockaction.setRowType(i, 2);
        				}
        				this.ds_basQcinterlockaction.set_updatecontrol(true);
        			}
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
         * 최초 호출되는 초기화 함수
         */
        this.fn_formInit = function ()
        {
        	this.ds_CSiteType.filter("LOOKUP_CODE == '"+this.gf_getSiteType()+"'");
        	this.tab_search.Tabpage1.form.cbo_site.set_index(0);
         	this.tab_search.Tabpage1.form.cbo_validState.set_value("Valid");
        };

        /*
         * 콤보 초기화
         */
        this.fn_initCombo = function ()
        {
        	this.basfn_setCustomQueryCmb(this.tab_search.Tabpage1.form.cbo_inspectionClassid // Object
        								, "selectInspectionClassidList,SEL,Y,A" // OPTION
        								, null);	  // 추가 파라미터
        	this.fn_searchComboQcgrade();
        };

        /*
         * 기능 : 조치등급 (콤보)
         */
        this.fn_searchComboQcgrade = function ()
        {
        	this.ds_comboQcgrade.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "PLANTID", this.tab_search.Tabpage1.form.cbo_site.value);

        	var sSvcID 			= "selectComboBasQcgradeList";
        	var sController 	= "/bas04400/selectBasQcgradeList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_comboQcgrade=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : tab1. 판정별 조치등급 조회 >> AS-IS : InitializeGridQCInterlock
         */
        this.fn_searchQcinterlock = function ()
        {
        	this.ds_basQcinterlock.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "INSPECTIONCLASSID", this.tab_search.Tabpage1.form.cbo_inspectionClassid.value);
        	this.ds_search.setColumn(0, "PLANTID", this.tab_search.Tabpage1.form.cbo_site.value);
        	this.ds_search.setColumn(0, "VALIDSTATE", this.tab_search.Tabpage1.form.cbo_validState.value);

        	var sSvcID 			= "selectBasQcinterlockList";
        	var sController 	= "/bas04400/selectBasQcinterlockList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_basQcinterlock=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : tab2. 조치등급
         */
        this.fn_searchQcgrade = function ()
        {
        	this.ds_basQcgrade.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "PLANTID", this.tab_search.Tabpage1.form.cbo_site.value);

        	var sSvcID 			= "selectBasQcgradeList";
        	var sController 	= "/bas04400/selectBasQcgradeList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_basQcgrade=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : tab2. 조치등급/조치별 Action 조회
         */
        this.fn_searchQcinterlockAction = function ()
        {
        	this.ds_basQcinterlockaction.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "QCGRADE", this.ds_basQcgrade.getColumn(this.fv_qcGradeRowPos, "QCGRADE"));
        	this.ds_search.setColumn(0, "PLANTID", this.tab_search.Tabpage1.form.cbo_site.value);
        	this.ds_search.setColumn(0, "VALIDSTATE", this.tab_search.Tabpage1.form.cbo_validState.value);

        	var sSvcID 			= "selectBasQcinterlockactionList";
        	var sController 	= "/bas04400/selectBasQcinterlockactionList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_basQcinterlockaction=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 유효성 검증 (판정별 조치등급)
         */
        this.fn_checkValidation = function()
        {
        	var validation = {rtn: true, msg: ""};

        	var objDs = this.ds_basQcinterlock, cnt = objDs.rowcount;
        	for(var i = 0; i < cnt; i++) {
        		//NG조건과 수량/불량율 구분이 선택이 되지 않았을 경우에는 입력이 가능하지만 From불량율, To불량율, 불량수량들도 모두 입력이 되어서는 안된다.
        		if(this.nfn_isNull(objDs.getColumn(i, "NGCONDITION")) && this.nfn_isNull(objDs.getColumn(i, "QTYORRATE")) && this.nfn_isNull(objDs.getColumn(i, "FROMNGRATE")) && this.nfn_isNull(objDs.getColumn(i, "TONGRATE")) && this.nfn_isNull(objDs.getColumn(i, "NGQUANTITY"))) {
        			validation.rtn = true;
        		}
        		if(this.nfn_isNull(objDs.getColumn(i, "NGCONDITION")) && objDs.getColumn(i, "DECISIONTYPE") != "AQL") {
        			validation.rtn = false;
        			validation.msg = "ValidateInterLockNGCondition";//NG조건을 입력하세요.
        			return validation;
        		}

        		if(this.nfn_isNull(objDs.getColumn(i, "QTYORRATE")) && objDs.getColumn(i, "DECISIONTYPE") != "AQL") {
        			validation.rtn = false;
        			validation.msg = "ValidateInterLockQTYORRATE";//수량/불량율 구분을 입력하세요.
        			return validation;
        		}
        		if(objDs.getColumn(i, "NGCONDITION") == "BT" && objDs.getColumn(i, "QTYORRATE") == "RATE") {
        			if(this.nfn_isNull(objDs.getColumn(i, "FROMNGRATE")) || this.nfn_isNull(objDs.getColumn(i, "TONGRATE"))) {
        				validation.rtn = false;
        				validation.msg = "ValidateInterLockFROMandTO";//NG조건이 [사이]인경우 From 불량율과 To 불량율을 모두 입력하셔야 합니다.
        				return validation;
        			}
        			//IsBiggerThanTONGRATE TONGRATE < FROMNGRATE
        			if((objDs.getColumn(i, "TONGRATE") < objDs.getColumn(i, "FROMNGRATE")) && objDs.getColumn(i, "DECISIONTYPE") != "AQL" && objDs.getColumn(i, "NGCONDITION") == "BT") {
        				validation.rtn = false;
        				validation.msg = "ValidateInterLockFromMoreTo";//From 불량율은 To 불량율보다 클 수 없습니다.
        				return validation;
        			}

        		} else if(objDs.getColumn(i, "NGCONDITION") != "BT" && objDs.getColumn(i, "QTYORRATE") == "RATE" && objDs.getColumn(i, "DECISIONTYPE") != "AQL" ) {
        			if(this.nfn_isNull(objDs.getColumn(i, "TONGRATE"))) {
        				validation.rtn = false;
        				validation.msg = "ValidateInterLockTORATE";//To 불량율을 입력하세요.
        				return validation;
        			}
        		} else {
        			if(this.nfn_isNull(objDs.getColumn(i, "NGQUANTITY")) && objDs.getColumn(i, "DECISIONTYPE") != "AQL") {
        				validation.rtn = false;
        				validation.msg = "ValidateInterLockQCQuantity";//불량수량을 입력하세요.
        				return validation;
        			}
        		}
        	}
        	return validation;
        };

        /*
         * 기능 : save 전에 ds_basQcinterlockaction 에 set column
         */
        this.fn_setQcinterlockactionColumn = function() {
        	var objDs = this.ds_basQcinterlockaction;
        	for(var i = 0;  i < objDs.rowcount; i++) {
        		if(objDs.getRowType(i) == 2 || objDs.getRowType(i) == 4) {
        			var validState = objDs.getColumn(i, "CHECKEDACTION") == "1" ? "Valid" : "Invalid";
        			objDs.setColumn(i, "VALIDSTATE", validState);

        			if(objDs.getRowType(i) == 2) {
        				var nPowPos = objDs.getColumn(i, "P_ROWPOS");
        				if(!this.nfn_isNull(nPowPos) && nPowPos != "-1") {
        					var qcGrade = this.ds_basQcgrade.getColumn(nPowPos , "QCGRADE");

        					objDs.setColumn(i, "QCGRADE", qcGrade);
        					objDs.setColumn(i, "PLANTID", this.gf_getSiteType());
        					objDs.setColumn(i, "ENTERPRISEID", this.gf_getEnterpriseId());
        				}
        			} else if(objDs.getRowType(i) == 4) {
        				var qcGrade = objDs.getColumn(i, "QCGRADE");
        				if(this.nfn_isNull(qcGrade)) {
        					var qcGrade = this.ds_basQcgrade.getColumn(this.ds_basQcgrade.rowposition , "QCGRADE");

        					objDs.setColumn(i, "QCGRADE", qcGrade);
        					objDs.setColumn(i, "PLANTID", this.gf_getSiteType());
        					objDs.setColumn(i, "ENTERPRISEID", this.gf_getEnterpriseId());

        					objDs.updatecontrol = false;
        					objDs.setRowType(i, 2);
        					objDs.updatecontrol = true;
        				}
        			}
        		}
        	}
        };

        /*
         * 기능 : text enable 여부 세팅.
         */
        this.fn_setEnbleText =  function(vColumn, nRow) {
        	var objDs = this.ds_basQcinterlock;

        	switch (vColumn) {
        		case "PRIORITY":
        			if(objDs.getColumn(nRow, "DECISIONTYPE") == "AQL") {
        				return "none";
        			} else {
        				return "text";
        			}
        			break;
        		//수량/불량율 구분은 NG조건이 선택되어져야 한다.
        		case "NGCONDITION":
        			if(objDs.getColumn(nRow, "DECISIONTYPE") == "AQL") {
        				return "none";
        			} else {
        				return "combo";
        			}
        			break;
        		//수량/불량율 구분은 NG조건이 선택되어져야 한다.
        		case "QTYORRATE":
        			if(objDs.getColumn(nRow, "DECISIONTYPE") == "AQL" || objDs.getColumn(nRow, "NGCONDITION") == "") {
        				return "none";
        			} else {
        				return "combo";
        			}
        			break;
        		//From 불량율은 NG조건이 BT이며 수량/불량율이 불량율일때만 입력가능하다.
        		case "FROMNGRATE":
        			if(objDs.getColumn(nRow, "DECISIONTYPE") == "AQL" || objDs.getColumn(nRow, "NGCONDITION") != "BT" || objDs.getColumn(nRow, "QTYORRATE") != "RATE") {
        				return "none";
        			} else {
        				return "text";
        			}
        			break;
        		//To 불량율은 수량/불량율이 불량율일때만 입력가능하다.
        		case "TONGRATE":
        			if(objDs.getColumn(nRow, "DECISIONTYPE") == "AQL" || objDs.getColumn(nRow, "QTYORRATE") != "RATE") {
        				return "none";
        			} else {
        				return "text";
        			}
        			break;
        		//불량수량의 경우 수량/불량율이 수량일 때만 입력이 가능하다.
        		case "NGQUANTITY":
        			if(objDs.getColumn(nRow, "DECISIONTYPE") == "AQL" || objDs.getColumn(nRow, "QTYORRATE") != "QTY") {
        				return "none";
        			} else {
        				return "text";
        			}
        			break;
        	}
        };
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        //판정별 조치등급 dataset 변경 시 (validation check)
        this.ds_basQcinterlock_oncolumnchanged = function(obj,e)
        {
        	var columnId = e.columnid, val = e.newvalue, row = e.row;
        	obj.set_enableevent(false);

        	switch (columnId) {
        		case "TONGRATE":
        			if(obj.getColumn(row, "NGCONDITION") == "BT") {
        				if(obj.getColumn(row, "FROMNGRATE") > val) {
        					this.gfn_Message("ValidateInterLockFromMoreTo", null, "warning", "ok"); //to 불량율은 from 불량율보다 클수 없다. (NG조건이 [사이]인 경우만 From 불량율을 입력할 수 있다.)
        					obj.setColumn(row, "TONGRATE", "");
        				}
        			}
        			obj.set_enableevent(true);
        			break;
        		case "NGCONDITION":
        			if(val != "BT" && obj.getColumn(row, "QTYORRATE") == "RATE") {
        				obj.setColumn(row, "FROMNGRATE", "");
        				obj.setColumn(row, "NGQUANTITY", "");

        			} else if(val == "BT" && obj.getColumn(row, "QTYORRATE") == "RATE") {
        				obj.setColumn(row, "NGQUANTITY", "");

        			} else if(obj.getColumn(row, "QTYORRATE") == "QTY") {
        				obj.setColumn(row, "FROMNGRATE", "");
        				obj.setColumn(row, "NGQUANTITY", "");

        			}
        			obj.set_enableevent(true);
        			break;
        		case "QTYORRATE":
        			if(val == "RATE") {
        				obj.setColumn(row, "NGQUANTITY", "");

        			} else if(val == "QTY") {
        				obj.setColumn(row, "FROMNGRATE", "");
        				obj.setColumn(row, "TONGRATE", "");
        			}
        			obj.set_enableevent(true);
        			break;
        		case "DECISIONTYPE":
        			//IsUniqQCGrade
        			var decisiondegree = obj.getColumn(row, "DECISIONDEGREE");
        			var nRowCnt = obj.getCaseCount("DECISIONTYPE == 'AQL' && DECISIONDEGREE == '" +decisiondegree +"'");
        			if(nRowCnt > 1) {
        				this.gfn_Message("ValidationQCDecisionTypeUniq", null, "warning", "ok"); //조치등급 선택시 AQL의 경우 하나의 판정등급에 2개의 AQL이 있으면 안된다.
        				obj.setColumn(row, "DECISIONTYPE", "");

        			} else if(val == "AQL") {
        				obj.setColumn(row, "PRIORITY", "1");
        				obj.setColumn(row, "FROMNGRATE", "");
        				obj.setColumn(row, "TONGRATE", "");
        				obj.setColumn(row, "NGQUANTITY", "");
        				obj.setColumn(row, "QTYORRATE", "");
        				obj.setColumn(row, "NGCONDITION", "");
        			}
        			obj.set_enableevent(true);
        			break;
        		case "DECISIONDEGREE":
        			var nRowCnt = obj.getCaseCount("DECISIONTYPE == 'AQL' && DECISIONDEGREE == '" +val +"'");
        			if(nRowCnt > 1) {
        				obj.setColumn(row, "DECISIONDEGREE", "1");
        				obj.set_enableevent(true);
        				this.gfn_Message("ValidationQCDecisionTypeUniq", null, "warning", "ok"); //조치등급 선택시 AQL의 경우 하나의 판정등급에 2개의 AQL이 있으면 안된다.
        				return;
        			}
        			obj.set_enableevent(true);
        			break;
        	}
        	obj.set_enableevent(true);
        };

        //판정별 조치등급 dataset 이 삭제되었을 경우 (초기화 여부 판단)
        this.ds_basQcinterlock_onrowsetchanged = function(obj,e)
        {
        	if( e.reason == "23") { //Dataset의 모든 Row가 완전 삭제되었을 때
        		this.fv_isInitBasQcinterlock = true;
        	}
        };

        //조치등급/조치별 Action 탭 > 조치등급 dataset row 변경 시 이벤트 (조치별 Action 데이터 조회)
        this.ds_basQcgrade_onrowposchanged = function(obj,e)
        {
        	if(obj.rowcount < 1) {
        		return;
        	}

        	this.fv_qcGradeRowPos = e.newrow;
        	this.fv_isNewBasQcinterlockaction = obj.getRowType(e.newrow) == 2 ? true : false;
        	this.fn_searchQcinterlockAction();
        };

        //조치등급/조치별 Action 탭 > 조치등급 dataset 이 삭제되었을 경우 (초기화 여부 판단)
        this.ds_basQcgrade_onrowsetchanged = function(obj,e)
        {
        	if( e.reason == "23") { //Dataset의 모든 Row가 완전 삭제되었을 때
        		this.fv_isInitBasQcgrade = true;
        	}
        };

        //조치등급/조치별 Action 탭 > 조치등급 dataset row 변경 전 이벤트 (변경된 데이터 여부 check)
        this.ds_basQcgrade_canrowposchange = function(obj,e)
        {
        	if (this.gfn_dsIsUpdated(this.ds_basQcinterlockaction) )
        	{
        		if(!this.gfn_confirm("IsChangedButContinue", "question", "")) { //변경된 데이터가 있습니다. 계속하시겠습니까?
        			return false;
        		}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.div_work.form.tab_qcinterlock.Tabpage1.form.btn_addRow.addEventHandler("onclick",this.fn_addBasQcinterlock,this);
            this.div_work.form.tab_qcinterlock.Tabpage1.form.btn_xlDn_grd_basQcinterlock.addEventHandler("onclick",this.div_work_btn_xlUp_onclick,this);
            this.div_work.form.tab_qcinterlock.Tabpage2.form.btn_addRowbasQcgrade.addEventHandler("onclick",this.fn_addBasQcgrade,this);
            this.div_work.form.tab_qcinterlock.Tabpage2.form.btn_xlDn_grd_basQcgrade.addEventHandler("onclick",this.div_work_btn_xlUp_onclick,this);
            this.div_work.form.tab_qcinterlock.Tabpage2.form.btn_xlDn_grd_basQcinterlockaction.addEventHandler("onclick",this.div_work_btn_xlUp_onclick,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.ds_basQcgrade.addEventHandler("onrowposchanged",this.ds_basQcgrade_onrowposchanged,this);
            this.ds_basQcgrade.addEventHandler("onrowsetchanged",this.ds_basQcgrade_onrowsetchanged,this);
            this.ds_basQcgrade.addEventHandler("canrowposchange",this.ds_basQcgrade_canrowposchange,this);
            this.ds_basQcinterlock.addEventHandler("onrowsetchanged",this.ds_basQcinterlock_onrowsetchanged,this);
            this.ds_basQcinterlock.addEventHandler("oncolumnchanged",this.ds_basQcinterlock_oncolumnchanged,this);
        };
        this.loadIncludeScript("BAS04400M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
