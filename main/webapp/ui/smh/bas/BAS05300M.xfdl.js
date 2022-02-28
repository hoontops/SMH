(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS05300M");
            this.set_titletext("외주작업자관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_basAreaTree", this);
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREATYPE\" type=\"STRING\" size=\"256\"/><Column id=\"OWNTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"AREALEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"ISMODIFY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_basAreaworker", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEENO\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT\" type=\"STRING\" size=\"256\"/><Column id=\"OWNTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISMAINAREA\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNID\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNUSER\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNTIME\" type=\"DATE\" size=\"256\"/><Column id=\"LASTTXNCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"AREATYPE\" type=\"STRING\" size=\"256\"/><Column id=\"OWNTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_basAreaworkerExcel", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"WORKERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"OWNTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISMAINAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEENO\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNID\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNUSER\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNTIME\" type=\"DATE\" size=\"256\"/><Column id=\"LASTTXNCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERNO\" type=\"STRING\" size=\"256\"/><Column id=\"OWNTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"ISMAINAREA\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("staPlantList","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_site","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_enable("false");
            obj.set_codecolumn("C,SiteType,,Y,Y");
            obj.set_readonly("true");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staValidState","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("유효상태");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("VALIDSTATE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_validState","108","35","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_codecolumn("C,ValidState,ALL,Y,Y");
            obj.set_text("유효");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","75","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","75","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"55","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","81","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_search);
            obj.set_text("Tabpage2");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","290","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_treeSearch");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","240","0",null,"34","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("작업자 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("WORKERLIST");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_basAreaworker","240","34",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_basAreaworker");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"작업자명\" cssclass=\"cell_point\" tooltiptext=\"WORKERNAME\" color=\"#333333\"/><Cell col=\"2\" text=\"자사구분\" cssclass=\"cell_point\" tooltiptext=\"OWNTYPE\" color=\"#333333\"/><Cell col=\"3\" text=\"작업자구분\" cssclass=\"cell_point\" tooltiptext=\"WORKERTYPE\"/><Cell col=\"4\" text=\"주작업장구분\" cssclass=\"cell_point\" tooltiptext=\"ISMAINAREA\"/><Cell col=\"5\" text=\"유효상태\" cssclass=\"cell_point\" tooltiptext=\"VALIDSTATE\"/><Cell col=\"6\" text=\"생성자\" tooltiptext=\"CREATOR\"/><Cell col=\"7\" text=\"생성일\" tooltiptext=\"CREATEDTIME\"/><Cell col=\"8\" text=\"수정자\" tooltiptext=\"MODIFIER\"/><Cell col=\"9\" text=\"수정일\" tooltiptext=\"MODIFIEDTIME\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:WORKERNAME\" textAlign=\"left\" edittype=\"expr:dataset.getRowType(currow) ==2 ? &apos;text&apos;:&apos;none&apos;\"/><Cell col=\"2\" text=\"bind:OWNTYPE\" displaytype=\"combotext\" edittype=\"combo\" textAlign=\"left\" combocodecol=\"C,OwnType,,Y,Y\"/><Cell col=\"3\" text=\"bind:WORKERTYPE\" textAlign=\"left\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,WORKERTYPE,,Y,Y\"/><Cell col=\"4\" text=\"bind:ISMAINAREA\" edittype=\"combo\" combocodecol=\"C,YesNo,,Y,Y\" displaytype=\"combotext\"/><Cell col=\"5\" text=\"bind:VALIDSTATE\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,ValidState,,Y,Y\"/><Cell col=\"6\" text=\"bind:CREATOR\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:CREATEDTIME\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" displaytype=\"expr: dataset.getRowType(currow) ==2 ? &apos;none&apos;:&apos;normal&apos;\"/><Cell col=\"8\" text=\"bind:MODIFIER\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:MODIFIEDTIME\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" displaytype=\"expr:(dataset.getRowType(currow) ==2 || MODIFIEDTIME == null) ? &apos;none&apos;:&apos;normal&apos;\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("staTreeAreaList","0","0","230","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("작업장 트리");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("TREEAREALIST");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_treeSearch","0","34","230","42",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_search");
            this.div_work.addChild(obj.name, obj);

            obj = new Edit("edt_search","15","10",null,"20","37",null,null,null,null,null,this.div_work.form.div_treeSearch.form);
            obj.set_taborder("0");
            this.div_work.form.div_treeSearch.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"10","22","20","15",null,null,null,null,null,this.div_work.form.div_treeSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.div_treeSearch.addChild(obj.name, obj);

            obj = new Grid("grd_tree","0","75","230",null,null,"0",null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_cssclass("grd_tree");
            obj.set_binddataset("ds_basAreaTree");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseexpandkey("true");
            obj.set_treeusecheckbox("false");
            obj.set_treeusebutton("use");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"260\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:AREANAME\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:AREALEVEL\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_addRow",null,"6","26","24","111",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_delRow",null,"6","26","24","85",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_copyRow",null,"6","27","24","58",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_grdCopy");
            obj.set_tooltiptext("GridCopyRow");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_basAreaworker",null,"6","29","24","29",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlUp",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","31",null,null,null,null,null,this.div_header.form);
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

            obj = new Static("sta_title","30","16","122","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_text("외주작업자관리");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MENU_PG-SD-0163");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
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
        this.addIncludeScript("BAS05300M.xfdl","lib::lib_bas.xjs");
        this.registerScript("BAS05300M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 외주작업자관리
         * 파일명 		: BAS05300M.xfdl
         * 작성자 		: 권혜영
         * 작성일 		: 2021.04.02
         *
         * 설  명		: 기준관리 - 작업자관리 - 외주작업자관리
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.02	권혜영   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.fv_areaId;
        this.fv_areaType;
        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.fn_formInit();
        	this.fn_searchTreeList();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.fn_filterTree(this.div_work.form.div_treeSearch.form.edt_search.value);
        	this.fn_searchTreeList();
        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        	this.fn_formInit();
        	this.div_work.form.div_treeSearch.form.edt_search.set_value("");
        	this.ds_basAreaTree.clearData();
        	this.ds_basAreaworker.clearData();
        };

        /*
         * 기능 : 신규
         */
        this.fn_add = function(obj,e)
        {
        	var dsObj = this.ds_basAreaworker;
        	var rowPosition = this.ds_basAreaTree.rowposition;
        	if(dsObj == null || rowPosition < 0) return;

        	var areaType 	= this.ds_basAreaTree.getColumn(rowPosition, "AREATYPE");
        	var areaId 		= this.ds_basAreaTree.getColumn(rowPosition, "AREAID");
        	var ownType 	= this.ds_basAreaTree.getColumn(rowPosition, "OWNTYPE");
        // 	var isModify = this.ds_basAreaTree.getColumn(rowPosition, "ISMODIFY");
        //
        // 	if(isModify == "N") {
        // 		//this.nfn_getDictionarynameUpper("AREANAME")
        // 		this.gfn_Message("NoMatchingAreaUser", null, "warning", "ok"); //해당 작업장에 대한 권한이 없습니다. {0}
        // 		return;
        // 	}

        	if(areaType == "Area") {
        		var row = dsObj.addRow();

        		dsObj.setColumn(row,"USERID", "*");
        		dsObj.setColumn(row,"AREAID", areaId);
        		dsObj.setColumn(row,"OWNTYPE", ownType);
        		dsObj.setColumn(row,"ENTERPRISEID", this.gf_getEnterpriseId());//ENTERPRISEID
        		dsObj.setColumn(row,"PLANTID", this.gf_getSiteType());//PLANTID
        		dsObj.setColumn(row,"VALIDSTATE", "Valid");			//유효여부
        	}
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	if (!this.gfn_dsIsUpdated(this.ds_basAreaworker) )
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}

        	var component = this.div_work.form.grd_basAreaworker;
        	var strColIdList = "WORKERNAME,OWNTYPE,WORKERTYPE,ISMAINAREA,VALIDSTATE";
        	var rtn = this.nfn_MandatoryCheckGrid(component, strColIdList);
        	if (rtn == false) return;

        	if (!this.fn_checkValidationDup(this.ds_basAreaworker) )
        	{
        		this.gfn_Message("DuplicationItem", this.nfn_getDictionarynameUpper("WORKERNAME"), "warning", "ok"); //중복 등록된 항목이 있습니다.
        		return;
        	}

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveBasAreaworker";
        	var sController 	= "/bas05300/saveBasAreaworker.do";
        	var sInDatasets 	= "INPUT=ds_basAreaworker:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 삭제
         */
        this.fn_delete = function (obj, e)
        {
        	var dsObj = this.ds_basAreaworker;
        	var nRowType = dsObj.getRowType(dsObj.rowposition);
        	trace(nRowType);
        	if(nRowType==2 ){
        		var bOK = this.gfn_Message("IsDeleted", null, "conf", "yesno");
        		if (bOK == false) return;
        		dsObj.deleteRow(dsObj.rowposition);
        	} else {
        		this.gfn_Message("CantdelSaveData", null, "info", "ok");
        	}
        };

        /*
         * 기능 : 행복사
         */
        this.fn_copy = function(obj,e)
        {
        	var dsObj = this.ds_basAreaworker;
        	if(dsObj == null) return;
        	var row = dsObj.insertRow(dsObj.rowposition+1);
        	dsObj.copyRow(row, dsObj, dsObj.rowposition-1);

        	/* KEY,WHO컬럼 관련 복사제외 */
        	dsObj.setColumn(row,"AreaworkerID",""); //ID
        	dsObj.setColumn(row,"CREATOR",""); 		//생성자
        	dsObj.setColumn(row,"CREATEDTIME",""); 	//생성일
        	dsObj.setColumn(row,"MODIFIER",""); 	//수정자
        	dsObj.setColumn(row,"MODIFIEDTIME",""); //수정일
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
        		if (trId == "saveBasAreaworker")
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.fn_searchGridList();
        		} else if (trId == "selectBasAreaworkerList")
        		{

        		} else if (trId == "selectBasAreaTreeList")
        		{

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
        	this.tab_search.Tabpage1.form.cbo_site.set_value(this.gf_getSiteType());
         	this.tab_search.Tabpage1.form.cbo_validState.set_value("Valid");
        };

        /*
         * 트리 조회
         */
        this.fn_searchTreeList = function ()
        {
        	this.ds_basAreaTree.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "PLANTID", this.tab_search.Tabpage1.form.cbo_site.value);
        	this.ds_search.setColumn(0, "AREATYPE", "Area");
        	this.ds_search.setColumn(0, "OWNTYPE", "InHouseOSP,OutsideOSP");

        	var sSvcID 			= "selectBasAreaTreeList";
        	var sController 	= "/bas05300/selectBasAreaTreeList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_basAreaTree=output";
        	var sArgs 			= "";

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 트리 필터
         */
        this.fn_filterTree = function (searchText)
        {
        	if(this.nfn_isNull(searchText)) {
        		this.ds_basAreaTree.filter("");
        	} else {
        		this.ds_basAreaTree.filter("AREANAME.toUpperCase().indexOf('"+searchText.toUpperCase()+"') > -1");
        	}
        	this.ds_basAreaTree.set_rowposition(0);
        };

        /*
         * 작업자 리스트 조회
         */
        this.fn_searchGridList = function()
        {
        	this.ds_basAreaworker.clearData();
        	if(this.fv_areaType != "Area") return;

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "PLANTID", this.tab_search.Tabpage1.form.cbo_site.value);
        	this.ds_search.setColumn(0, "VALIDSTATE", this.tab_search.Tabpage1.form.cbo_validState.value);
        	this.ds_search.setColumn(0, "AREAID", this.fv_areaId);

        	var sSvcID 			= "selectBasAreaworkerList";
        	var sController 	= "/bas05300/selectBasAreaworkerList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_basAreaworker=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 유효성 체크 (중복체크)
         */
        this.fn_checkValidationDup = function ()
        {
        	var ret = true, objDs = this.ds_basAreaworker;

        	for(var i = 0; i < objDs.rowcount; i++) {
        		var planId = objDs.getColumn(i, "PLANTID");
        		var areaId = objDs.getColumn(i, "AREAID");
        		var workerName = objDs.getColumn(i, "WORKERNAME");

        		var filterStr = "PLANTID == '"+planId+"' && AREAID =='"+areaId+"' && WORKERNAME =='"+workerName+"'";

        		if(objDs.getCaseCount(filterStr) > 1) {
        			ret =  false;
        		}
        	}
        	return ret;
        };

        /*
         *	엑셀 업로드 실패 시
         */
        this.fn_excel_fail = function ()
        {
        	this.gfn_Message("FAILEXCELIMPORT", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        };

        /*
         *	엑셀 업로드 이후...
         */
        this.fn_excel_success = function ()
        {
        	var nRow = 0, objName, objCode;

        	var dsObj = this.ds_basAreaworker;
        	var dsObjExcel = this.ds_basAreaworkerExcel;

        	if(dsObjExcel.rowcount > 0 ) {
        		for(var i = 0; i < dsObjExcel.rowcount; i++) {
        			this.fn_add();
        			var addRow = dsObj.rowposition;

        			objName = dsObjExcel.getColumn(i, "WORKERNAME");
        			dsObj.setColumn(addRow, "WORKERNAME", objName);

        			objName = dsObjExcel.getColumn(i, "OWNTYPENAME");
        			nRow = this.ds_COwnType.findRow("MEANING2", objName);
        			objCode = nRow == -1 ? "" : this.ds_COwnType.getColumn(nRow, "LOOKUP_CODE");
        			dsObj.setColumn(addRow, "OWNTYPE", objCode);

        			objName = dsObjExcel.getColumn(i, "WORKERTYPENAME");
        			nRow = this.ds_CWORKERTYPE.findRow("MEANING2", objName);
        			objCode = nRow == -1 ? "" : this.ds_CWORKERTYPE.getColumn(nRow, "LOOKUP_CODE");
        			dsObj.setColumn(addRow, "WORKERTYPE", objCode);

        			objName = dsObjExcel.getColumn(i, "ISMAINAREANAME");
        			nRow = this.ds_CYesNo.findRow("MEANING2", objName);
        			objCode = nRow == -1 ? "" : this.ds_CYesNo.getColumn(nRow, "LOOKUP_CODE");
        			dsObj.setColumn(addRow, "ISMAINAREA", objCode);

        		}
        	} else {
        		this.gfn_Message("NOTEXISTSEXCELIMPORTDATA", "", "warning", "ok");
        	}
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        //작업장 트리 row 변경 시
        this.ds_basAreaTree_onrowposchanged = function(obj,e)
        {
        	if(e.newrow > -1  && e.oldrow != e.newrow) {
        		this.fv_areaId = this.ds_basAreaTree.getColumn(e.newrow, "AREAID");
        		this.fv_areaType = this.ds_basAreaTree.getColumn(e.newrow, "AREATYPE");
        // 		var isModify = this.ds_basAreaTree.getColumn(e.newrow, "ISMODIFY");
        //
        // 		if(isModify == "N") {
        // 			this.gfn_Message("NoMatchingAreaUser", null, "warning", "ok"); //해당 작업장에 대한 권한이 없습니다. {0}
        // 		}

        		this.fn_searchGridList();
        	}
        };

        //작업장 트리 검색 버튼 클릭 시
        this.div_work_div_treeSearch_btn_search_onclick = function(obj,e)
        {
        	this.fn_filterTree(this.div_work.form.div_treeSearch.form.edt_03.value);
        };

        //작업장 트리 검색 edit 엔터 시
        this.div_work_div_treeSearch_edt_search_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13) {
        		this.fn_filterTree(obj.value);
        	}
        };

        //엑셀 업로드 버튼 클릭 시
        this.div_work_btn_xlUp_onclick = function(obj,e)
        {
        	if(this.gfn_dsIsUpdated(this.ds_basAreaworker))
        	{
        		var btn = this.gfn_confirm("WRITTENBEDELETE", "information", ""); //"입력한 내용이 있으면 현재 작성중인 내용이 모두 삭제됩니다."
        		if(bRtn == false) return;
        	}
        	this.gfn_import_excel("ds_basAreaworkerExcel", "fn_excel_success", "fn_excel_fail", "B1", "B2");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.div_work.form.div_treeSearch.form.edt_search.addEventHandler("onkeydown",this.div_work_div_treeSearch_edt_search_onkeydown,this);
            this.div_work.form.div_treeSearch.form.btn_search.addEventHandler("onclick",this.div_work_div_treeSearch_btn_search_onclick,this);
            this.div_work.form.btn_addRow.addEventHandler("onclick",this.fn_add,this);
            this.div_work.form.btn_delRow.addEventHandler("onclick",this.fn_delete,this);
            this.div_work.form.btn_copyRow.addEventHandler("onclick",this.fn_copy,this);
            this.div_work.form.btn_xlUp.addEventHandler("onclick",this.div_work_btn_xlUp_onclick,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.ds_basAreaTree.addEventHandler("onrowposchanged",this.ds_basAreaTree_onrowposchanged,this);
        };
        this.loadIncludeScript("BAS05300M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
