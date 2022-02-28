(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS00800M");
            this.set_titletext("카테고리 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCHVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORYSET\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCHTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORYID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTCATEGORYID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_categoryList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CATEGORYID\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORYNAME_KR\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORYNAME_US\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORYNAME_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORYNAME_VN\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORYSET\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTCATEGORYID\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORYNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ORDERBY\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tree", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CATEGORYID\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORYNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTCATEGORYID\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORYSET\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"IS_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORYPATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_category", this);
            obj._setContents("<ColumnInfo><Column id=\"CATEGORYID\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORYNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTCATEGORYID\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORYSET\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"IS_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Button("btn_clear2","171","125","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","125","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
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

            obj = new Static("Static12_00_00_00_01_00_00",null,"105","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","131","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
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

            obj = new Static("staSearchType","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("조회조건");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("WORKTYPE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cboSearchType","108","60","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edtSearchValue","108","85","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_readonly("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_01",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staSearchType00","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("Set명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("B897A00C3D654520BA892467BB4C8D87");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cboSet","108","35","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_codecolumn("C,CategorySet,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_01_00",null,"55","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_01_00_00","15","80",null,"5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
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

            obj = new Grid("grd_category","260","35",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_categoryList");
            obj.set_treeinitstatus("expand,null");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" cssclass=\"cell_point\" tooltiptext=\"CATEGORYID\" text=\"카테고리 코드\"/><Cell col=\"2\" tooltiptext=\"CATEGORYNAME_KR\" text=\"카테고리명(K)\"/><Cell col=\"3\" tooltiptext=\"CATEGORYNAME_US\" text=\"카테고리명(E)\"/><Cell col=\"4\" tooltiptext=\"CATEGORYNAME_CN\" text=\"카테고리명(C)\"/><Cell col=\"5\" tooltiptext=\"CATEGORYNAME_VN\" text=\"카테고리명(V)\"/><Cell col=\"6\" tooltiptext=\"CATEGORYSET\" text=\"카테고리 Set\"/><Cell col=\"7\" tooltiptext=\"LEVEL\" text=\"Level\"/><Cell col=\"8\" tooltiptext=\"PARENTCATEGORYID\" text=\"카테고리 분류\"/><Cell col=\"9\" text=\"순서\"/><Cell col=\"10\" tooltiptext=\"ENTERPRISEID\" text=\"회사 ID\"/><Cell col=\"11\" tooltiptext=\"PLANTID\" text=\"Site ID\"/><Cell col=\"12\" tooltiptext=\"DESCRIPTION\" text=\"설명\"/><Cell col=\"13\" cssclass=\"cell_point\" tooltiptext=\"VALIDSTATE\" text=\"유효상태\"/><Cell col=\"14\" tooltiptext=\"CREATOR\" text=\"생성자\"/><Cell col=\"15\" tooltiptext=\"CREATEDTIME\" text=\"생성일\"/><Cell col=\"16\" tooltiptext=\"MODIFIER\" text=\"수정자\"/><Cell col=\"17\" tooltiptext=\"MODIFIEDTIME\" text=\"수정일\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:CATEGORYID\" edittype=\"expr:dataset.getRowType(currow) ==2  ? &apos;normal&apos;:&apos;none&apos;\" cssclass=\"point\"/><Cell col=\"2\" text=\"bind:CATEGORYNAME_KR\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:CATEGORYNAME_US\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:CATEGORYNAME_CN\" edittype=\"normal\"/><Cell col=\"5\" text=\"bind:CATEGORYNAME_VN\" edittype=\"normal\"/><Cell col=\"6\" text=\"bind:CATEGORYSET\" combocodecol=\"C,CategorySet,,Y,N\" edittype=\"none\" displaytype=\"combotext\"/><Cell col=\"7\" text=\"bind:LVL\" edittype=\"combo\" combocodecol=\"C,CategoryLevel,,Y,Y\" displaytype=\"combotext\"/><Cell col=\"8\" text=\"bind:PARENTCATEGORYID\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_category\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"9\" text=\"bind:ORDERBY\" edittype=\"normal\" displaytype=\"number\" editinputtype=\"number\" editmaxlength=\"5\"/><Cell col=\"10\" text=\"bind:ENTERPRISEID\"/><Cell col=\"11\" text=\"bind:PLANTID\"/><Cell col=\"12\" text=\"bind:DESCRIPTION\" edittype=\"normal\"/><Cell col=\"13\" text=\"bind:VALIDSTATE\" combocodecol=\"C,ValidState,,Y,Y\" edittype=\"combo\" displaytype=\"combotext\"/><Cell col=\"14\" text=\"bind:CREATOR\"/><Cell col=\"15\" text=\"bind:CREATEDTIME\" displaytype=\"text\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"16\" text=\"bind:MODIFIER\"/><Cell col=\"17\" text=\"bind:MODIFIEDTIME\" displaytype=\"text\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","260","0","165","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("카테고리 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("CATEGORYLIST");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_categoryList","442","0","200","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("StaticTitleBOM","0","0","230","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_text("카테고리 구분");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("CATEGORYTYPE");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_del",null,null,"29","24","58","grd_category:0",null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_add",null,null,"29","24","87","grd_category:0",null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_copy",null,null,"29","24","29","grd_category:0",null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_grdCopy");
            obj.set_tooltiptext("GridCopyRow");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_category",null,null,"29","24","0","grd_category:0",null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("treeArea","0","35","250",null,null,"0",null,null,null,null,this.div_work.form);
            obj.set_taborder("9");
            obj.set_cssclass("grd_tree");
            obj.set_binddataset("ds_tree");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_treeinitstatus("collapse,all");
            obj.set_treeuseexpandkey("true");
            obj.set_treeusecheckbox("false");
            obj.set_treeusebutton("use");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"260\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" text=\"bind:CATEGORYNAME\" treestartlevel=\"0\" treelevel=\"bind:LVL\" autosizecol=\"none\" treestate=\"bind:CHK\"/></Band></Format></Formats>");
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
            obj.set_text("카테고리 관리");
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
        this.addIncludeScript("BAS00800M.xfdl","lib::lib_bas.xjs");
        this.registerScript("BAS00800M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: UOM 관리
         * 파일명 		: BAS00800M.xfdl
         * 작성자 		: 최성민
         * 작성일 		: 2021.02.26
         *
         * 설  명		: 기준관리 - 카테고리 관리 화면
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.03.04	최성민   	최초작성
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
        this.formDiv1 = this.div_work.form;
        this.g_positionTree; //저장 후 위치고정을 위한 전역변수

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.basfn_saveBtn(this.div_header.form.btn_saveArea); //저장버튼 공통처리 함수 호출
        	var addParam = "ALLVIEWS|CATEGORYID|CATEGORYNAME";
        	/* 조회조건 조회 */
        	this.basfn_setCustomQueryCmb(this.searchDiv1.cboSearchType // Object
        						, "selectCustomCodeList,,Y,A" // OPTION
        						, this.gfn_setParam("ADD_PARAM", addParam)
        						, false);	  // 추가 파라미터

        	//카테고리 분류 그리드콤보 조회
        	var sSvcID 			= "selectTreeList";
        	var sController 	= "/bas00800/selectTreeList.do";
        	var sInDatasets   	= "";
        	var sOutDatasets  	= "ds_category=output";
        	var sArgs 		  	= "";
        	sArgs 			+= this.gfn_setParam("LVL", "PARENT");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, true);

        	this.fn_formInit();
        	this.fn_search();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        this.fn_save = function(obj,e)
        {
        	if (!this.gfn_dsIsUpdated(this.ds_categoryList) )
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}

        	/* 그리드 필수체크 */
        	var component = this.formDiv1.grd_category;
        	var strColIdList = "CATEGORYID,CATEGORYSET,VALIDSTATE";
        	var rtn = this.nfn_MandatoryCheckGrid(component, strColIdList);
        	if (rtn == false) return;

        	this.g_positionTree = this.ds_tree.rowposition;

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveCategory";
        	var sController 	= "/bas00800/saveCategory.do";
        	var sInDatasets 	= "INPUT=ds_categoryList:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.fn_searchTreeList();	//트리 조회
        };

        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		if (trId == "saveCategory")
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
        			if(this.ds_tree.rowcount>0){
        				var idx = 0;
        				if(!this.nfn_isNull(this.g_positionTree)){
        					idx = this.g_positionTree;
        					this.ds_tree.set_rowposition(idx);
        				} else {
        					this.fn_searchCategoryList(idx);
        				}
        			} else {
        				this.fn_searchCategoryList(-1);
        			}
        			this.fn_expandTree();
        		} else if (trId == "selectCategoryList") {

        		} else if (trId == "saveCategory") {
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.fn_searchTreeList();
        		}
        	}
        };

        //레벨별 Expand가 안돼서 하드코딩 삽질
        this.fn_expandTree = function(){
        	var obj = this.div_work.form.treeArea;
        	var nRow = this.ds_tree.findRow("CATEGORYID",this.gf_getEnterpriseId());
        	obj.setTreeStatus(nRow,true);
        	nRow = this.ds_tree.findRow("CATEGORYID","Production");
        	obj.setTreeStatus(nRow,true);
        	nRow = this.ds_tree.findRow("CATEGORYID","Sales");
        	obj.setTreeStatus(nRow,true);
        }


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
        	this.searchDiv1.cboValidState.set_value("Valid");
        	this.searchDiv1.cboSet.set_value(null);
        	this.searchDiv1.edtSearchValue.set_value("");
        	this.searchDiv1.cboSearchType.set_value("ALLVIEWS");
        }

        /*
         * 기능 : 탭1. 트리 조회
         */
        this.fn_searchTreeList = function ()
        {
        	this.ds_tree.clearData();

        	//전역변수 초기화
        	var sSvcID 			= "selectTreeList";
        	var sController 	= "/bas00800/selectTreeList.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_tree=output";
        	var sArgs 			= "";
        	sArgs 			+= this.gfn_setParam("CATEGORYSET", this.searchDiv1.cboSet.value);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 카테고리 조회
         */
        this.fn_searchCategoryList = function (rowPosition)
        {
        	this.ds_categoryList.clearData();
        	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0, "SEARCHTYPE", this.searchDiv1.cboSearchType.value);
        	this.ds_search.setColumn(0, "SEARCHVALUE", this.searchDiv1.edtSearchValue.value);
        	this.ds_search.setColumn(0, "VALIDSTATE", this.searchDiv1.cboValidState.value);
        	this.ds_search.setColumn(0, "CATEGORYSET", this.searchDiv1.cboSet.value);
        	this.ds_search.setColumn(0, "PARENTCATEGORYID", this.ds_tree.getColumn(rowPosition, "CATEGORYID"));

        	var sSvcID 			= "selectCategoryList";
        	var sController 	= "/bas00800/selectCategoryList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_categoryList=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 탭1 : 행 추가
         */
        this.fn_add = function(obj,e)
        {
        	var dsObj = this.ds_categoryList;
        	if(dsObj == null) return;
        	var row = dsObj.addRow();
        	var rowPosition = this.ds_tree.rowposition;
        	var categorySetId = this.ds_tree.getColumn(rowPosition, "CATEGORYSET");
        	var categoryId = this.ds_tree.getColumn(rowPosition, "CATEGORYID");
        	var parentCategoryId = this.ds_tree.getColumn(rowPosition, "PARENTCATEGORYID");
        	var categoryPath = this.ds_tree.getColumn(rowPosition, "CATEGORYPATH");
        	var lvl = this.ds_tree.getColumn(rowPosition, "LVL");

        	//제조만 추가할 수 있으므로 제조로 하드코딩 (2021.03.05. 정원식 대리)
        	categorySetId = "Production";

        	//카테고리분류가 EnterpriseID일 경우 제조로 처리
        	if(categoryPath==this.gf_getEnterpriseId()
        	   || parentCategoryId ==this.gf_getEnterpriseId()){
        		parentCategoryId = "Production";
        	}

        	//2레벨에서 추가시 2레벨 ID가 카테고리분류로 세팅
        	if(lvl=="2"){
        		parentCategoryId = categoryId;
        	}

        	/* KEY컬럼 기본세팅 */
        	dsObj.setColumn(row,"PARENTCATEGORYID",parentCategoryId);
        	dsObj.setColumn(row,"CATEGORYSET",categorySetId);
        	dsObj.setColumn(row,"LVL",Number(this.nfn_nvl(lvl,"0"))+1);
        	dsObj.setColumn(row,"VALIDSTATE","Valid");
        };


        this.fn_delete = function(obj,e)
        {
        	//공통함수
        	this.basfn_deleteRow(this.ds_categoryList);
        };

        this.fn_copy = function(obj,e)
        {
        	this.basfn_copyDataset(this.ds_categoryList, null, "CREATOR,MODIFIER,CREATEDTIME,MODIFIEDTIME");
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.ds_tree_canrowposchange = function(obj,e)
        {
        	var bOk = true;
        	if (this.gfn_dsIsUpdated(this.ds_categoryList)) {
        		bOk = this.gfn_Message("WRITTENBEDELETE", null, "conf", "yesno");
        	}

        	if(bOk){
        		this.g_positionTree = e.newrow;
        		this.fn_searchCategoryList(e.newrow);
        		var categoryPath = this.ds_tree.getColumn(e.newrow, "CATEGORYPATH");
        		var lvl = this.ds_tree.getColumn(e.newrow, "LVL");

        		//2021-03-04 카테고리가 영업인 경우이거나 3레벨 이상은 행추가 버튼 숨기기
        		var isVisible = true;
        		if(categoryPath.indexOf("|Sales")>=0 || lvl=="3"){
        			isVisible = false;
        		}
        		var objGrid = this.div_work.form.grd_category;
        		var colNum = this.nfn_GetColNum(objGrid, "CHK");

        		if(isVisible){
        			objGrid.setCellProperty("Body",colNum,"edittype","checkbox");
        			objGrid.setCellProperty("Body",colNum,"displaytype","checkboxcontrol");
        		} else {
        			objGrid.setCellProperty("Body",colNum,"edittype","none");
        			objGrid.setCellProperty("Body",colNum,"displaytype","none");
        		}

        		this.div_work.form.btn_add.set_visible(isVisible);
        		this.div_work.form.btn_del.set_visible(isVisible);
        		this.div_work.form.btn_copy.set_visible(isVisible);
        	} else {
        		return false;
        	}
        };
        this.div_work_tab_Tabpage1_div_00_btn_search03_onclick = function(obj,e)
        {
        	var searchKey = this.div_work.form.div_00.form.edtSearchKey.value;
        	this.ds_tree.filter("CATEGORYNAME.indexOf('"+searchKey+"') >= 0");
        };

        this.div_work_btn_grdReload_onclick = function(obj,e)
        {
        	this.div_work.form.div_00.form.edtSearchKey.set_value;
        	this.ds_tree.filter("");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tabpage1.form.btn_clear2.addEventHandler("onclick",this.fn_formInit,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.div_work.form.btn_del.addEventHandler("onclick",this.fn_delete,this);
            this.div_work.form.btn_add.addEventHandler("onclick",this.fn_add,this);
            this.div_work.form.btn_copy.addEventHandler("onclick",this.fn_copy,this);
            this.div_header.form.btn_saveArea.addEventHandler("onclick",this.fn_save,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.ds_tree.addEventHandler("canrowposchange",this.ds_tree_canrowposchange,this);
        };
        this.loadIncludeScript("BAS00800M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
