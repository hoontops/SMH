(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MFM00900M");
            this.set_titletext("우선순위적용기준 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dispatchingItem", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DISPATCHINGITEM\" type=\"STRING\" size=\"256\"/><Column id=\"PRIOTY\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"EDITYN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_DISPATCHINGITEM\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_priorityOfDispatching", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DISPATCHINGITEM\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMPRIOTY\" type=\"STRING\" size=\"256\"/><Column id=\"FROMVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"TOVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("sta_dispatchingItem","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("디스패칭 항목");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_dispatchingItem","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,DispatchingItem,ALL,Y,Y");
            obj.set_innerdataset("");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","50","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","50","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
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

            obj = new Static("sta_searchTitle","0","47","143","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_dispatchingItem","0","34",null,null,"2","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_dispatchingItem");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"140\"/><Column size=\"154\"/><Column size=\"68\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"디스패칭 항목\" cssclass=\"cell_point\"/><Cell col=\"3\" text=\"설명\"/><Cell col=\"4\" text=\"우선순위\"/><Cell col=\"5\" text=\"유효상태\" cssclass=\"cell_point\"/><Cell col=\"6\" text=\"수정자\"/><Cell col=\"7\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:NO\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:DISPATCHINGITEM\" displaytype=\"combocontrol\" edittype=\"combo\" combocodecol=\"C,DispatchingItem,,Y,Y\"/><Cell col=\"3\" text=\"bind:DESCRIPTION\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:PRIOTY\" edittype=\"text\" displaytype=\"text\"/><Cell col=\"5\" text=\"bind:VALIDSTATE\" displaytype=\"combocontrol\" edittype=\"combo\" combocodecol=\"C,ValidState,,Y,Y\"/><Cell col=\"6\" text=\"bind:MODIFIER\"/><Cell col=\"7\" text=\"bind:MODIFIEDTIME\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_dispatchingItem","0","0","140","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("디스패칭 항목 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_dispatchingItem","sta_dispatchingItem:11","-1","101","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_addRow_ds_dispatchingItem",null,"4","26","24","92",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_dispatchingItem","btn_addRow_ds_dispatchingItem:4","4","26","24",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_grdCopy01_00","btn_delRow_ds_dispatchingItem:4","4","27","24",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdCopy");
            obj.set_tooltiptext("복사");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_dispatchingItem","btn_grdCopy01_00:0","4","29","24",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_titleBG");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
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

            obj = new Static("sta_title","30","16","176","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_text("우선순위적용기준 등록");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","26","24","57",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("7");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_03",null,"16","93","24","btn_save:12",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("8");
            obj.set_text("Simulation");
            obj.set_cssclass("btn_WF_black");
            obj.set_fittocontents("width");
            this.div_header.addChild(obj.name, obj);
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
        this.addIncludeScript("MFM00900M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("MFM00900M.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("MFM00900M.xfdl","lib::lib_mfm.xjs");
        this.registerScript("MFM00900M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 치공구 현황 조회
         * 파일명 		: TOM01100M.xfdl
         * 작성자 		: 박현우
         * 작성일 		: 2021.02.01
         *
         * 설  명		: 치공구 현황 조회
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.02.10	박현우   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_mfm.xjs"); /*include "lib::lib_mfm.xjs"*/;	//MFM 공통 라이브러리 include

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.searchDiv = this.tab_search.Tabpage1.form;
        this.gridDiv = this.div_work.form;

        this.oldDispatchingItem = '';

        this.fv_rtnValue = ''; //팝업화면 리턴값 변수

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
         * 기능 : 검색 (왼쪽 Grid)
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_dispatchingItem.clearData();

        	this.ds_search.clearData();

        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 				this.nfn_nvl(this.gf_getEnterpriseId(), ""));
        	this.ds_search.setColumn(0, "PLANTID", 						this.nfn_nvl(this.gf_getSiteType(), ""));

        	this.ds_search.setColumn(0, "P_DISPATCHINGITEM", 			this.nfn_nvl(this.searchDiv.cbo_dispatchingItem.value, "")); //디스패칭 항목

        	this.ds_search.setColumn(0, "LANGUAGETYPE", 				this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", 						"selectDispatchingItemList");

        	var sSvcID 			= "selectDispatchingItemList";
        	var sController 	= "/mfm00900/selectDispatchingItemList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_dispatchingItem=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색 (오른쪽 Grid)
         */
        /*
        this.fn_search2 = function (obj:Button, e:nexacro.ClickEventInfo)
        {
        	this.ds_priorityOfDispatching.clearData();

        	this.ds_search.clearData();

        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 				this.nfn_nvl(this.gf_getEnterpriseId(), ""));
        	this.ds_search.setColumn(0, "PLANTID", 						this.nfn_nvl(this.gf_getSiteType(), ""));

        	this.ds_search.setColumn(0, "P_DISPATCHINGITEM", 			this.nfn_nvl(this.ds_dispatchingItem.getColumn(this.ds_dispatchingItem.rowposition, "DISPATCHINGITEM"))); //디스패칭 항목

        	this.ds_search.setColumn(0, "LANGUAGETYPE", 				this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", 						"selectPriorityOfDispatchingItemList");

        	var sSvcID 			= "selectPriorityOfDispatchingItemList";
        	var sController 	= "/mfm00900/selectPriorityOfDispatchingItemList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_priorityOfDispatching=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };
        */

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	//1. 변경 데이터 존재 확인
        	//if(!this.gfn_dsIsUpdated(this.ds_dispatchingItem) && !this.gfn_dsIsUpdated(this.ds_priorityOfDispatching)){ //변경데이터 확인
        	if(!this.gfn_dsIsUpdated(this.ds_dispatchingItem)){ //변경데이터 확인
        		this.gfn_Message("NoSaveData", "", "warning", "ok");
        		return;
        	}

        	//-----------------------------------
        	//[1] 왼쪽 그리드 : 필수 입력 체크
        	//-----------------------------------
        	var component = this.div_work.form.grd_dispatchingItem;
        	var strColIdList = "DISPATCHINGITEM,DESCRIPTION,PRIOTY,VALIDSTATE";

        	/* 그리드 필수 입력 체크 (왼쪽 그리드) */
        	if(!this.nfn_MandatoryCheckGrid(component, strColIdList)) return;

        	//--------------------------------------
        	//[2] 오른쪽 그리드 : 필수 입력 체크
        	//--------------------------------------
        	/*
        	component = this.div_work.form.grd_priorityOfDispatching;
        	strColIdList = "ITEMPRIOTY,FROMVALUE,TOVALUE,VALIDSTATE";
        	*/
        	/* 그리드 필수 입력 체크 (오른쪽 그리드) */
        	//if(!this.nfn_MandatoryCheckGrid(component, strColIdList)) return;

        	//[3] 왼쪽 : 중복값 체크 (디스패칭 항목)
        	if(!this.basfn_checkGridDup(this.ds_dispatchingItem
        								, "DISPATCHINGITEM"
        								, "DISPATCHINGITEMDUP")){ return;} //디스패칭 항목이 중복되었습니다.
        	//[3] 왼쪽 : 중복값 체크 (우선순위)
        	if(!this.basfn_checkGridDup(this.ds_dispatchingItem
        								, "PRIOTY"
        								, "DISPATCHINGPRIOTYDUP")){ return;} //우선순위 항목이 중복되었습니다.
        	//[4] 오른쪽 : 중복값 체크 (우선순위)
        	//if(!this.basfn_checkGridDup(this.ds_priorityOfDispatching
        	//							, "ITEMPRIOTY"
        	//							, "DISPATCHINGITEMDUP")){ return;} //우선순위 항목이 중복되었습니다.

        	//[5] 오른쪽 : Range 범위 체크 : from 보다 to 가 커야 한다.
        	/*
        	var isValidRange = true;
        	var fromVal = 0;
        	var toVal = 0;
        	for(var i=0; i<this.ds_priorityOfDispatching.rowcount; i++){
        		fromVal = Number(this.nfn_nvl(this.ds_priorityOfDispatching.getColumn(i, "FROMVALUE"),'0'));
        		toVal = Number(this.nfn_nvl(this.ds_priorityOfDispatching.getColumn(i, "TOVALUE"),'0'));
        		if(fromVal>=toVal){
        			isValidRange = false;
        		}
        	}
        	if(!isValidRange){
        		this.gfn_Message("RangeFromToUnvalid", "", "warning", "ok"); //범위값은 FROM 보다 TO 가 커야 합니다.
        		return;
        	}
        	*/
        	//[6] 오른쪽 : Range 범위 체크 : 첫row ~ 마지막row-1 반복 : 해당값의 to 숫자 + 1 값이 from 값에 존재해야 한다.
        	/*
        	var chkNum = 0;
        	var compNum = 0;
        	var notSeqRowCount = 0;
        	isValidRange = false;
        	for(var i=0; i<this.ds_priorityOfDispatching.rowcount-1; i++){
        		chkNum = this.nfn_nvl(this.ds_priorityOfDispatching.getColumn(i, "TOVALUE"),'0');
        		isValidRange = false;
        		for(var j=0; j<this.ds_priorityOfDispatching.rowcount; j++){ //모두 뒤진다.
        			compNum = this.nfn_nvl(this.ds_priorityOfDispatching.getColumn(j, "FROMVALUE"),'0');
        			//alert((Number(chkNum)+1)+"/"+Number(compNum));
        			if((Number(chkNum)+1)==Number(compNum)){ //발견되는지 체크
        				isValidRange = true;
        			}
        		}
        		if(!isValidRange){
        			notSeqRowCount++;
        		}
        	}
        	if(notSeqRowCount>0){
        		this.gfn_Message("NoAllowRangeGap", "", "warning", "ok");
        		return;
        	}
        	*/

        	//Save master pos
        	this.oldDispatchingItem = this.ds_dispatchingItem.getColumn(this.ds_dispatchingItem.rowposition, "DISPATCHINGITEM");

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveDispatching";
        	var sController 	= "/mfm00900/saveDispatching.do";
        	//var sInDatasets 	= "INPUT=ds_dispatchingItem:U INPUT2=ds_priorityOfDispatching:U";
        	var sInDatasets 	= "INPUT=ds_dispatchingItem:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 삭제
         */
        this.fn_delete = function (obj, e)
        {
        };

        /*
         * 기능 : 복사
         */
        this.fn_copy = function(obj,e)
        {
        };

        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD != 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        		return;
        	}

        	switch(trId) {
        		case "selectDispatchingItemList": //왼쪽 그리드 CALLBACK
        			if (this.ds_dispatchingItem.rowcount > 0)
        			{
        				if(this.oldDispatchingItem != ''){//save pos restore
        					var restorePos = this.ds_dispatchingItem.findRowExpr("DISPATCHINGITEM=='" + this.oldDispatchingItem + "'");
        					this.ds_dispatchingItem.set_rowposition(restorePos);
        				}
        			}
        			//this.fn_search2();
        			break;
        		//case "selectPriorityOfDispatchingItemList": //오른쪽 그리드 CALLBACK
        		//	break;
        		case "saveDispatching": //저장Callback
        			this.fn_search();
        			break;
        		default:
        	}
        };

        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 기능 : 조회 조건 Load
         */
        this.fn_initCombo = function ()
        {
        }

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.fn_searchClear = function(obj,e)
        {
        };

        this.div_header_btn_reset2_onclick = function(obj,e)
        {
        	this.ds_dispatchingItem.clearData();
        	//this.ds_priorityOfDispatching.clearData();
        	//var strCnt = 'Count : <fc v="#f31d24">0</fc><fc v="#999999"></fc>';
        	//this.tabInputDiv.sta_cnt_ds_toolMaking.set_text(strCnt);
        	//var strCnt = 'Count : <fc v="#f31d24">0</fc><fc v="#999999"></fc>';
        	//this.tabInputDiv.sta_cnt_ds_toolMaking.set_text(strCnt);
        };

        this.div_header_btn_03_onclick = function(obj,e)
        {
        	var popupId = "SCH_SIMULATION_POP";
        	var oArg = {};
        	var opts = "width=1250,height=750";

        	this.gfn_openPopup(popupId,"mfm::MFM00900P.xfdl",oArg,opts);
        };

        this.div_work_grd_dispatchingItem_oncellclick = function(obj,e)
        {
        	//this.fn_search2();
        };

        this.div_work_btn_addRow_ds_priorityOfDispatching_onclick = function(obj,e)
        {
        	//this.ds_priorityOfDispatching.setColumn(this.ds_priorityOfDispatching.rowposition,"DISPATCHINGITEM", this.nfn_nvl(this.ds_dispatchingItem.getColumn(this.ds_dispatchingItem.rowposition, "DISPATCHINGITEM")));
        	//this.ds_priorityOfDispatching.setColumn(this.ds_priorityOfDispatching.rowposition,"ENTERPRISEID", this.nfn_nvl(this.ds_dispatchingItem.getColumn(this.ds_dispatchingItem.rowposition, "ENTERPRISEID")));
        	//this.ds_priorityOfDispatching.setColumn(this.ds_priorityOfDispatching.rowposition,"PLANTID", this.nfn_nvl(this.ds_dispatchingItem.getColumn(this.ds_dispatchingItem.rowposition, "PLANTID")));
        	//this.ds_priorityOfDispatching.setColumn(this.ds_priorityOfDispatching.rowposition,"DESCRIPTION", "");
        };

        this.div_work_btn_addRow_ds_dispatchingItem_onclick = function(obj,e)
        {
        	this.ds_dispatchingItem.setColumn(this.ds_dispatchingItem.rowposition,"ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_dispatchingItem.setColumn(this.ds_dispatchingItem.rowposition,"PLANTID", this.gf_getSiteType());
        	this.ds_dispatchingItem.setColumn(this.ds_dispatchingItem.rowposition,"EDITYN", "Y");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.fn_init,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.div_work.form.grd_dispatchingItem.addEventHandler("oncellclick",this.div_work_grd_dispatchingItem_oncellclick,this);
            this.div_work.form.btn_addRow_ds_dispatchingItem.addEventHandler("onclick",this.div_work_btn_addRow_ds_dispatchingItem_onclick,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_header.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_header.form.btn_03.addEventHandler("onclick",this.div_header_btn_03_onclick,this);
        };
        this.loadIncludeScript("MFM00900M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
