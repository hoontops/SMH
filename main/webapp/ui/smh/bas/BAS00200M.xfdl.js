(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS00200M");
            this.set_titletext("Site 정의");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_basPlant", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"FAXNO\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGE\" type=\"STRING\" size=\"256\"/><Column id=\"ISOSPBUDGETCONTROL\" type=\"STRING\" size=\"256\"/><Column id=\"ISOSPETCBUDGETCONTROL\" type=\"STRING\" size=\"256\"/><Column id=\"WORKTIME\" type=\"STRING\" size=\"256\"/><Column id=\"TIMEZONE\" type=\"STRING\" size=\"256\"/><Column id=\"SETHOLDDATE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ISOTIMEZONE\" type=\"STRING\" size=\"256\"/><Column id=\"ISAUDIT\" type=\"STRING\" size=\"256\"/><Column id=\"ISOSPWAREHOUSEOPERATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISWIPSURVEY\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNID\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNUSER\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNTIME\" type=\"DATE\" size=\"256\"/><Column id=\"LASTTXNCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTNAME_KR\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTNAME_US\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTNAME_CN\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTNAME_VN\" type=\"STRING\" size=\"256\"/><Column id=\"SAMPLE2STEP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_enterprise", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"18",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("label00","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("회사");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ENTERPRISE_ID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_enterpriseid","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear2","171","74","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","74","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"59","15","97","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","69","15","97",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"54","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","80","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00_00","0","34","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("STOPSITE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00",null,"29","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cboSite","108","34","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("IFC");
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

            obj = new Grid("grd_basSite","0","34",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_basPlant");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"250\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Site ID\" tooltiptext=\"PLANTID\" cssclass=\"cell_point\"/><Cell col=\"1\" text=\"Site 명(K)\" tooltiptext=\"PLANTID(K)\"/><Cell col=\"2\" text=\"Site 명(E)\" tooltiptext=\"PLANTID(E)\"/><Cell col=\"3\" text=\"Site 명(C)\" tooltiptext=\"PLANTID(C)\"/><Cell col=\"4\" text=\"Site 명(V)\" tooltiptext=\"PLANTID(V)\"/><Cell col=\"5\" text=\"설명\" tooltiptext=\"DESCRIPTION\"/><Cell col=\"6\" text=\"회사\" tooltiptext=\"ENTERPRISE_ID\"/><Cell col=\"7\" text=\"주소\" tooltiptext=\"ADDRESS\"/><Cell col=\"8\" text=\"전화번호\" tooltiptext=\"PHONE\"/><Cell col=\"9\" text=\"팩스번호\" tooltiptext=\"FAXNO\"/><Cell col=\"10\" text=\"언어\" tooltiptext=\"LANGUAGE\"/><Cell col=\"11\" text=\"Audit 여부\" tooltiptext=\"ISAUDIT\"/><Cell col=\"12\" text=\"물류창고운영여부\" tooltiptext=\"OUTSOURCEDWAREHOUSEYN\"/><Cell col=\"13\" text=\"샘플2Step\" tooltiptext=\"SAMPLE2STEP\"/><Cell col=\"14\" text=\"유효상태\" cssclass=\"cell_point\" tooltiptext=\"VALIDSTATE\"/><Cell col=\"15\" text=\"생성자\" tooltiptext=\"CREATOR\"/><Cell col=\"16\" text=\"생성일\" tooltiptext=\"CREATEDTIME\"/><Cell col=\"17\" text=\"수정자\" tooltiptext=\"MODIFIER\"/><Cell col=\"18\" text=\"수정일\" tooltiptext=\"MODIFIEDTIME\"/></Band><Band id=\"body\"><Cell text=\"bind:PLANTID\" edittype=\"expr:comp.parent.parent.parent.ds_basPlant.getRowType(currow) ==2 ? &apos;normal&apos;:&apos;none&apos;\" editmaxlength=\"50\" editimemode=\"none\" editinputtype=\"numberandenglish,digit,dot,comma,sign\" editinputfilter=\"none\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:PLANTNAME_KR\" edittype=\"normal\" editinputmode=\"normal\" editmaxlength=\"160\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:PLANTNAME_US\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PLANTNAME_CN\" edittype=\"normal\" editmaxlength=\"50\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:PLANTNAME_VN\" edittype=\"normal\" editmaxlength=\"50\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:DESCRIPTION\" edittype=\"normal\" editmaxlength=\"50\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:ENTERPRISEID\" edittype=\"combo\" displaytype=\"combotext\" textAlign=\"left\" combodataset=\"ds_enterprise\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"7\" text=\"bind:ADDRESS\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"8\" text=\"bind:PHONE\" textAlign=\"left\" editinputtype=\"number,symbol\" edittype=\"normal\"/><Cell col=\"9\" text=\"bind:FAXNO\" textAlign=\"left\" editinputtype=\"number,symbol\" edittype=\"normal\"/><Cell col=\"10\" text=\"bind:LANGUAGE\" textAlign=\"left\" combocodecol=\"C,LanguageType,,Y,Y\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"11\" edittype=\"combo\" displaytype=\"combotext\" text=\"bind:ISAUDIT\" combocodecol=\"C,YesNo,,Y,Y\"/><Cell col=\"12\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:ISOSPWAREHOUSEOPERATE\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"13\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:SAMPLE2STEP\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"14\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,ValidState,,Y,Y\" text=\"bind:VALIDSTATE\"/><Cell col=\"15\" text=\"bind:CREATOR\"/><Cell col=\"16\" text=\"bind:CREATEDTIME\" edittype=\"none\" displaytype=\"text\" calendardisplaynulltype=\"none\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"17\" text=\"bind:MODIFIER\"/><Cell col=\"18\" text=\"bind:MODIFIEDTIME\" displaytype=\"text\" calendardisplaynulltype=\"none\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","5","0","108","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("Site 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("PLANTINFOLIST");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_basPlant","sta_subTitle:17","0",null,"34","762",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_addRow",null,"6","29","24","87",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_delRow",null,"6","29","24","58",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_copyRow",null,"6","29","24","29",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdCopy");
            obj.set_tooltiptext("GridCopyRow");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_basPlant",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("7");
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

            obj = new Button("btn_save",null,"16","26","24","btn_help:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","100","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_text("Enterprise 정의");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MENU_PG-SD-0121");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
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
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAS00200M.xfdl","lib::lib_bas.xjs");
        this.registerScript("BAS00200M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: Site 정의
         * 파일명 		: BAS00200.xfdl
         * 작성자 		: 최성민
         * 작성일 		: 2021.02.16
         *
         * 설  명		: 기준관리 - Site 정의 화면
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.02.16	최성민   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
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
        	this.fn_initCombo();
        	this.fn_formInit();
        };

        this.fn_formInit = function ()
        {
        	//Site Session값으로 기본세팅
        	this.tab_search.Tabpage1.form.cmb_enterpriseid.set_value(null);
        	this.tab_search.Tabpage1.form.cboSite.set_value(this.gf_getSiteType());
        }
        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_basPlant.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", this.tab_search.Tabpage1.form.cmb_enterpriseid.value);
        	this.ds_search.setColumn(0, "PLANTID", this.tab_search.Tabpage1.form.cboSite.value);

        	var sSvcID 			= "selectBasSiteList";
        	var sController 	= "/bas00200/selectBasSiteList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_basPlant=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	if (!this.gfn_dsIsUpdated(this.ds_basPlant) )
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}

        	var component = this.div_work.form.grd_basSite;
        	var strColIdList = "PLANTID,VALIDSTATE";
        	var rtn = this.nfn_MandatoryCheckGrid(component, strColIdList);
        	if (rtn == false) return;

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveBasSite";
        	var sController 	= "/bas00200/saveBasSite.do";
        	var sInDatasets 	= "INPUT=ds_basPlant:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 삭제
         */
        this.fn_delete = function (obj, e)
        {
        	var dsObj = this.ds_basPlant;
        	var nRowType = dsObj.getRowType(dsObj.rowposition);
        	if(nRowType==2 ){
        		var bOK = this.gfn_Message("IsDeleted", null, "conf", "yesno");
        		if (bOK == false) return;
        		dsObj.deleteRow(dsObj.rowposition);
        	} else {
        		this.gfn_Message("CantdelSaveData", null, "info", "ok");
        	}
        };

        this.fn_copy = function(obj,e)
        {
        	var dsObj = this.ds_basPlant;
        	if(dsObj == null) return;
        	var row = dsObj.insertRow(dsObj.rowposition+1);
        	dsObj.copyRow(row, dsObj, dsObj.rowposition-1);

        	/* KEY,WHO컬럼 관련 복사제외 */
        	dsObj.setColumn(row,"PLANTID",""); //ID
        	dsObj.setColumn(row,"CREATOR",""); 		//생성자
        	dsObj.setColumn(row,"CREATEDTIME",""); 	//생성일
        	dsObj.setColumn(row,"MODIFIER",""); 	//수정자
        	dsObj.setColumn(row,"MODIFIEDTIME",""); //수정일
        	dsObj.setColumn(row,"LASTTXNHISTKEY","");
        	dsObj.setColumn(row,"LASTTXNID","");
        	dsObj.setColumn(row,"LASTTXNUSER","");
        	dsObj.setColumn(row,"LASTTXNTIME","");
        	dsObj.setColumn(row,"LASTTXNCOMMENT","");
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
        		if (trId == "saveBasSite")
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.fn_initCombo(); //데이터 저장후 검색조건 재조회
        			this.fn_search();
        		}else if (trId == "selectBasSiteList")
        		{
        			//this.div_work.form.sta_cnt.set_text('Count : <fc v="#f31d24">'+this.nfn_numberWithCommas(this.ds_basPlant.rowcount)+'</fc>');
        			//this.div_page.set_visible(true);
        			//this.div_page.form.setPage(this.ds_basPlant.getColumn(0, "TOTAL_ROWS"));
        		}
        	}
        };


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        this.fn_initCombo = function ()
        {
        	this.basfn_setCustomQueryCmb(this.tab_search.Tabpage1.form.cmb_enterpriseid // Object
        								, "selectEnterpriseList,ALL,Y,A" // OPTION
        								, null);	  // 추가 파라미터

        	this.basfn_setCustomQueryCmb(this.tab_search.Tabpage1.form.cboSite // Object
        								, "selectSiteList,ALL,Y,A" // OPTION
        								, null);	  // 추가 파라미터

        	//그리드용 ComboDataset
        	var sSvcID 			= "selectCustomQueryEnterprise";
        	var sController 	= "/basCommon/selectCustomQuery.do";
        	var sInDatasets   	= "";
        	var sOutDatasets  	= "ds_enterprise=output";
        	var sArgs 		  	= "";
        	sArgs 			+= this.gfn_setParam("SQL_ID", "selectEnterpriseList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, false);

        	this.tab_search.Tabpage1.form.cboSite.set_value(this.gf_getSiteType());
        }

        /*
         * 기능 : 추가
         */
        this.fn_add = function(obj,e)
        {
        	var dsObj = this.ds_basPlant;
        	if(dsObj == null) return;
        	var row = dsObj.insertRow(dsObj.rowposition+1);

        	/* KEY컬럼 기본세팅 */
        	dsObj.setColumn(row,"VALIDSTATE","Valid");	//Validate
        };
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tabpage1.form.btn_clear2.addEventHandler("onclick",this.fn_formInit,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.tab_search_Tabpage1_btn_search_onclick,this);
            this.div_work.form.btn_addRow.addEventHandler("onclick",this.fn_add,this);
            this.div_work.form.btn_delRow.addEventHandler("onclick",this.fn_delete,this);
            this.div_work.form.btn_copyRow.addEventHandler("onclick",this.fn_copy,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("BAS00200M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
