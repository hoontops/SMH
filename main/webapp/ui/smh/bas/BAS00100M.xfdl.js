(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS00100M");
            this.set_titletext("Enterprise정의");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_basEnterprise", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISENAME\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"FAXNO\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTPERSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USEOUTSOURCINGWAREHOUSE\" type=\"STRING\" size=\"256\"/><Column id=\"ISMENUSTATISTICS\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNID\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNUSER\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNTIME\" type=\"DATE\" size=\"256\"/><Column id=\"LASTTXNCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Button("btn_clear","171","50","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
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

            obj = new Static("Static12_00_00_00",null,"30","15","97","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","40","15","97",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
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

            obj = new Static("Static12_00_00_00_01_00_00",null,"30","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","56","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("w\r\n10");
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

            obj = new Grid("grd_basEnterprise","0","34",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_basEnterprise");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"220\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"106\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"회사ID\" tooltiptext=\"MEASURINGENTERPRISEID\" cssclass=\"cell_point\"/><Cell col=\"1\" text=\"회사명\" cssclass=\"cell_point\" tooltiptext=\"ENTERPRISENAME\"/><Cell col=\"2\" text=\"설명\" tooltiptext=\"SPCRULESDISCRIPTION\"/><Cell col=\"3\" text=\"주소\" tooltiptext=\"HOMEADDRESS\"/><Cell col=\"4\" text=\"전화번호\" tooltiptext=\"TELNUMBER\"/><Cell col=\"5\" text=\"팩스번호\" tooltiptext=\"FAXNO\"/><Cell col=\"6\" text=\"유효상태\" cssclass=\"cell_point\" tooltiptext=\"VALIDSTATE\"/><Cell col=\"7\" text=\"생성자\" tooltiptext=\"CREATOR\"/><Cell col=\"8\" text=\"생성일\" tooltiptext=\"CREATEDTIME\"/><Cell col=\"9\" text=\"수정자\" tooltiptext=\"MODIFIER\"/><Cell col=\"10\" text=\"수정일\" tooltiptext=\"MODIFIEDTIME\"/></Band><Band id=\"body\"><Cell text=\"bind:ENTERPRISEID\" edittype=\"expr:comp.parent.parent.parent.ds_basEnterprise.getRowType(currow) ==2 ? &apos;normal&apos;:&apos;none&apos;\" editmaxlength=\"50\" editimemode=\"none\" editinputtype=\"numberandenglish,digit,dot,comma,sign\" editinputfilter=\"none\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:ENTERPRISENAME\" edittype=\"normal\" editinputmode=\"normal\" editmaxlength=\"160\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:DESCRIPTION\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:ADDRESS\" edittype=\"normal\" editmaxlength=\"50\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:PHONE\" edittype=\"normal\" editinputtype=\"number,symbol\" editmaxlength=\"50\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:FAXNO\" edittype=\"normal\" editinputtype=\"number,symbol\" editmaxlength=\"50\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:VALIDSTATE\" edittype=\"combo\" displaytype=\"combotext\" combocodecol=\"C,ValidState,SEL,Y,Y\"/><Cell col=\"7\" text=\"bind:CREATOR\"/><Cell col=\"8\" text=\"bind:CREATEDTIME\" edittype=\"none\" displaytype=\"text\" calendardisplaynulltype=\"none\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"9\" text=\"bind:MODIFIER\"/><Cell col=\"10\" text=\"bind:MODIFIEDTIME\" displaytype=\"text\" calendardisplaynulltype=\"none\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","5","0","108","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("회사 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("ENTERPRISEINFOLIST");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_basEnterprise","sta_subTitle:17","0",null,"34","762",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_addRow_ds_basEnterprise",null,"6","29","24","87",null,null,null,null,null,this.div_work.form);
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

            obj = new Button("btn_xlDn_grd_basEnterprise",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
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
        this.addIncludeScript("BAS00100M.xfdl","lib::lib_bas.xjs");
        this.registerScript("BAS00100M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: Enterprise 정의
         * 파일명 		: BAS00700.xfdl
         * 작성자 		: 최성민
         * 작성일 		: 2021.02.01
         *
         * 설  명		: 기준관리 - Enterprise 정의 화면
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.02.01	최성민   	최초작성
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
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_basEnterprise.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", this.tab_search.Tabpage1.form.cmb_enterpriseid.value);

        	var sSvcID 			= "selectBasEnterpriseList";
        	var sController 	= "/bas00100/selectBasEnterpriseList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_basEnterprise=output";
        	var sArgs 			= "";
        	sArgs 			+= this.gfn_setParam("TEST_VAL", "TTTTTTTTTTTT");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	if (!this.gfn_dsIsUpdated(this.ds_basEnterprise) )
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}

        	var component = this.div_work.form.grd_basEnterprise;
        	var strColIdList = "ENTERPRISEID,ENTERPRISENAME,VALIDSTATE";
        	var rtn = this.nfn_MandatoryCheckGrid(component, strColIdList);
        	if (rtn == false) return;

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveBasEnterprise";
        	var sController 	= "/bas00100/saveBasEnterprise.do";
        	var sInDatasets 	= "INPUT=ds_basEnterprise:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
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

        this.fn_copy = function(obj,e)
        {
        	var dsObj = this.ds_basEnterprise;
        	if(dsObj == null) return;
        	var row = dsObj.insertRow(dsObj.rowposition+1);
        	dsObj.copyRow(row, dsObj, dsObj.rowposition-1);

        	/* KEY,WHO컬럼 관련 복사제외 */
        	dsObj.setColumn(row,"ENTERPRISEID",""); //ID
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
        		if (trId == "saveBasEnterprise")
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.fn_initCombo(); //데이터 저장후 검색조건 재조회
        			this.fn_search();
        		}else if (trId == "selectBasEnterpriseList")
        		{
        			//this.div_work.form.sta_cnt.set_text('Count : <fc v="#f31d24">'+this.nfn_numberWithCommas(this.ds_basEnterprise.rowcount)+'</fc>');
        			//this.div_page.set_visible(true);
        			//this.div_page.form.setPage(this.ds_basEnterprise.getColumn(0, "TOTAL_ROWS"));
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
        }
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.tab_search_Tabpage1_btn_search_onclick,this);
            this.div_work.form.btn_addRow_ds_basEnterprise.addEventHandler("onclick",this.div_work_btn_addRow_onclick,this);
            this.div_work.form.btn_delRow.addEventHandler("onclick",this.fn_delete,this);
            this.div_work.form.btn_copyRow.addEventHandler("onclick",this.fn_copy,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("BAS00100M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
