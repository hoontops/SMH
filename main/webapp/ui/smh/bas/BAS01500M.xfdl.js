(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS01500M");
            this.set_titletext("작업장 권한 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_user", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"P_USERID\" type=\"STRING\" size=\"256\"/><Column id=\"USERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT\" type=\"STRING\" size=\"256\"/><Column id=\"CONTROLRIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_area", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"P_USERID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"OWNTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSENAME\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Button("btn_clear2","171","100","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","100","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","0","15","300",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","106","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_user_nm","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("사용자명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMVERSION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip02","0","0",null,"10","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04","0","80",null,"20","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_user_nm","108","35","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_enable("false");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_text("FA1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_userId","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("사용자ID");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_user","108","10","143","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("1010759A5");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_user",null,"10","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip03_00","0","30",null,"5","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip03_00_00","0","55",null,"5","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_work_area","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("작업장ID");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_workArea","108","60","143","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("1010759A5");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_workArea",null,"60","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_workArea_id","74","461","140","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_value("작업장ID(HIDDEN)");
            obj.set_visible("false");
            obj.set_text("작업장ID(HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","3",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("6");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","btn_reset:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_customSave",null,"16","26","24","btn_help:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","112","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            obj.set_text("작업장 권한 관리");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","242","34",null,null,null,null,null,null,this);
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

            obj = new Static("Static01","35.00%","0","68","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("작업장 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("PROCESSPEC");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_area","35.00%","Static01:0",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"90\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"작업장 ID\" cssclass=\"cell_point\"/><Cell col=\"2\" text=\"작업장\"/><Cell col=\"3\" text=\"자사구분\" cssclass=\"cell_headMaster\"/><Cell col=\"4\" text=\"창고코드\" cssclass=\"cell_headMaster\"/><Cell col=\"5\" text=\"창고명\" cssclass=\"cell_headMaster\"/><Cell col=\"6\" text=\"생성자\"/><Cell col=\"7\" text=\"생성일\"/><Cell col=\"8\" text=\"수정자\"/><Cell col=\"9\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" displaytype=\"number\"/><Cell col=\"1\" text=\"bind:AREAID\" displaytype=\"text\" textAlign=\"left\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"expr:dataset.getRowType(currow) ==2 ? &apos;show&apos;:&apos;hide&apos;\" expandsize=\"24\"/><Cell col=\"2\" text=\"bind:AREANAME\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:OWNTYPE\" displaytype=\"combotext\" edittype=\"none\" editinputtype=\"number\" combocodecol=\"C,OwnType,,Y,Y\"/><Cell col=\"4\" text=\"bind:WAREHOUSEID\" displaytype=\"text\" edittype=\"none\" editinputtype=\"number\"/><Cell col=\"5\" text=\"bind:WAREHOUSENAME\" displaytype=\"text\" edittype=\"none\" editinputtype=\"number\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:CREATOR\"/><Cell col=\"7\" text=\"bind:CREATEDTIME\" displaytype=\"text\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"8\" text=\"bind:MODIFIER\"/><Cell col=\"9\" text=\"bind:MODIFIEDTIME\" displaytype=\"text\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_area",null,"7","29","24","2",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_grdDel",null,"7","26","24","btn_xlDn_grd_area:0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_grdAdd",null,"7","26","24","btn_grdDel:0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_user",null,"7","29","24","Static01:6",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static01_01","0","0","68","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("7");
            obj.set_text("사용자 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("OPERATION");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_user","0","Static01_01:0",null,null,"grd_area:10","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_user");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"사용자ID\"/><Cell col=\"2\" text=\"사용자명\"/><Cell col=\"3\" text=\"부서\"/><Cell col=\"4\" text=\"통제권한\"/><Cell col=\"5\" text=\"수정자\"/><Cell col=\"6\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" displaytype=\"number\"/><Cell col=\"1\" text=\"bind:P_USERID\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:USERNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:DEPARTMENT\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:CONTROLRIGHT\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,AreaAuthority,,Y,Y\"/><Cell col=\"5\" text=\"bind:MODIFIER\"/><Cell col=\"6\" text=\"bind:MODIFIEDTIME\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_user","Static01_01:10","0","200","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_area","Static01:16","0","200","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","tab_search.Tabpage1.form.edt_user","value","ds_search","USERID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","tab_search.Tabpage1.form.edt_workArea_id","value","ds_search","AREAID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAS01500M.xfdl","lib::lib_bas.xjs");
        this.registerScript("BAS01500M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 작업장 권한 관리
         * 파일명 		: BAS01500M.xfdl
         * 작성자 		: 최성민
         * 작성일 		: 2021.04.12
         *
         * 설  명		: 기준관리 - 작업장 권한 관리
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.12	최성민   	최초작성
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
         this.g_positionA; //저장 후 위치고정을 위한 전역변수

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.fn_comboInit();
        	this.fn_formInit();
        	this.basfn_saveBtn(this.div_header.form.btn_customSave); //저장버튼 공통처리 함수 호출
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        this.fn_save = function(obj,e)
        {
        	if (!this.gfn_dsIsUpdated(this.ds_user) && !this.gfn_dsIsUpdated(this.ds_area))
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");
        		return;
        	}

        	//검사항목 중복값 체크
        	if(!this.basfn_checkGridDup(this.ds_area
        								, "AREAID"
        								, "AREAID")){ return;}

        	var componentA = this.div_work.form.grd_area;
        	var strColIdListA = "AREAID";

        	/* 그리드 체크 */
        	if(!this.nfn_MandatoryCheckGrid(componentA, strColIdListA)) return;

        	this.g_positionA = this.ds_user.rowposition;
        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveUserArea";
        	var sController 	= "/bas01500/saveUserArea.do";
        	var sInDatasets 	= "ds_user=ds_user:U ds_area=ds_area:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	if(!this.fn_checkDsUpdate())return;
        	this.ds_user.clearData();
        	var sSvcID 			= "selectUserList";
        	var sController 	= "/bas01500/selectUserList.do";
        	var sInDatasets 	= "intput=ds_search";
        	var sOutDatasets 	= "ds_user=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		if (trId == "saveUserArea")
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
        	} else {
        		if (trId == "selectUserList") {
        			if(this.ds_user.rowcount>0){
        				var idx = 0;
        				if(!this.nfn_isNull(this.g_positionA)){
        					idx = this.g_positionA;
        				}
        				this.ds_user.set_rowposition(idx);
        				this.fn_searchDetail(idx);
        			} else {
        				this.fn_searchDetail(-1);
        			}
        			this.div_work.form.sta_cnt_ds_user.set_text("Count : " + '<fc v="#f31d24">'+this.ds_user.rowcount+'</fc>');
        			this.g_positionA = null;
        		} else if (trId == "selectAreaList") {

        		} else if (trId == "saveUserArea") {
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.fn_search();
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
        	oArg.arg_searchStr = "";
        	oArg.arg_paramCols = "";
        	oArg.arg_paramValues = "";

        	//품목코드 조회
        	if(svcId =="SCH_USER"){
        		oArg.arg_type = "CA";
        		oArg.arg_paramCols = "SQL_ID";
        		oArg.arg_paramValues = "selectUserList";
        		oArg.arg_rtnCols = "USERID|USERNAME";
        		oArg.arg_searchStr = "USERIDNAME="+this.nfn_nvl(this.searchDiv1.edt_user.value, "");
        	}


        	//작업장 조회
        	if(svcId =="SCH_AREA"){
        		oArg.arg_type = "BA";
        		oArg.arg_paramCols = "SQL_ID";
        		oArg.arg_paramValues = "selectUserAreaList";
        		oArg.arg_rtnCols = "AREAID|AREANAME";
        		oArg.arg_searchStr = "AREAIDNAME="+this.nfn_nvl(this.searchDiv1.edt_workArea.value, "");
        	}

        	//작업장 조회
        	if(svcId =="GRD_AREA"){
        		opts = "width=800,height=500";
        		oArg.arg_type = "CA";
        		oArg.arg_paramCols = "SQL_ID";
        		oArg.arg_paramValues = "selectUserAreaGrdList";
        		oArg.arg_rtnCols = "AREAID|AREANAME|OWNTYPE|VENDORID|VENDORNAME|WAREHOUSEID|WAREHOUSENAME";
        		oArg.arg_searchStr = "AREAIDNAME="+this.nfn_nvl(this.searchDiv1.edt_workArea.value, "");
        	}

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        }

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "SCH_USER")	//검색조건 : 사용자 조회
        	{
        		var objKey = "";
        		var objId = "";

        		for(var i=0; i<rtn.length; i++){
        			var colArray = rtn[i];
        			objKey += ","+ colArray[1];
        			objId  += ","+ colArray[0];
        		}

        		this.searchDiv1.edt_user_nm.set_value(objKey.substr(1));
        		this.searchDiv1.edt_user.set_value(objId.substr(1));
        	}

        	if(sPopupId == "SCH_AREA")	//검색조건 : 작업장 조회
        	{
        		this.searchDiv1.edt_workArea.set_value(rtn[1]);
        		this.searchDiv1.edt_workArea_id.set_value(rtn[0]);
        	}

        	if(sPopupId == "GRD_AREA")	//그리드 : 작업장 조회
        	{
        		var userId 			= this.ds_user.getColumn(this.ds_user.rowposition, "P_USERID");
        		for(var i=0; i<rtn.length; i++){
        			var colArray 			= rtn[i];
        			var areaId 				= colArray[0];
        			var areaName 			= colArray[1];
        			var ownType 			= colArray[2];
        			var vendorId 			= colArray[3];
        			var vendorName 			= colArray[4];
        			var warehouseId 		= colArray[5];
        			var warehouseName 		= colArray[6];

        			var nRow = this.ds_area.rowposition;
        			var addRow = nRow;
        			if(i!=0){
        				addRow = this.ds_area.addRow();
        			}


        			this.ds_area.setColumn(addRow, "AREAID", 			areaId);
        			this.ds_area.setColumn(addRow, "AREANAME", 			areaName);
        			this.ds_area.setColumn(addRow, "OWNTYPE", 			ownType);
        			this.ds_area.setColumn(addRow, "VENDORNAME", 		vendorId);
        			this.ds_area.setColumn(addRow, "VENDORID", 			vendorName);
        			this.ds_area.setColumn(addRow, "WAREHOUSEID", 		warehouseId);
        			this.ds_area.setColumn(addRow, "WAREHOUSENAME", 	warehouseName);
        			this.ds_area.setColumn(addRow, "PLANTID", 			this.gf_getSiteType());
        			this.ds_area.setColumn(addRow, "P_USERID", 			userId);
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
        	this.searchDiv1.edt_user.set_value("");
        	this.searchDiv1.edt_user_nm.set_value("");
        	this.searchDiv1.edt_workArea.set_value("");
        	this.searchDiv1.edt_workArea_id.set_value("");
        }


        /*
         * 상세조회 : 조회
         */
        this.fn_searchDetail = function (rowPosition)
        {
        	var userId 			= this.ds_user.getColumn(rowPosition, "P_USERID");
        	this.ds_area.clearData();

        	var sSvcID 			= "selectAreaList";
        	var sController 	= "/bas01500/selectAreaList.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_area=output";
        	var sArgs 			= "";
        		sArgs 			+= this.gfn_setParam("P_USERID"			, userId);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.fn_comboInit = function ()
        {

        }

        /*
         * Dataset 수정여부 체크 함수
         */
        this.fn_checkDsUpdate = function()
        {
        	var bOk = true;
        	if (  this.gfn_dsIsUpdated(this.ds_user) || this.gfn_dsIsUpdated(this.ds_area)) {
        		bOk = this.gfn_Message("WRITTENBEDELETE", null, "conf", "yesno");
        	}
        	return bOk;
        }

        /*
         * 행삭제 함수
         */
        this.fn_delete = function(obj,e)
        {
        	this.basfn_deleteRow(this.ds_area, null, "IsDeleted");
        };

        this.fn_add = function(obj,e)
        {
        	var dsObj 				= this.ds_area;
        	if(dsObj==null)return;
        	var nRow 				= dsObj.addRow();
        	dsObj.setColumn(nRow, "P_USERID",		this.ds_user.getColumn(this.ds_user.rowposition, "P_USERID"));

        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.tab_search_Tabpage1_btnProductCode_onclick = function(obj,e)
        {
        	this.fn_openPop("SCH_USER","P00226"); //사용자 조회
        };

        this.div_work_grd_operationSpec_onexpandup = function(obj,e)
        {
        	if(e.row < 0) return;
        	if (this.nfn_isEqualCol(obj, e.cell, "AREAID")) {
        		this.fn_openPop("GRD_AREA","P00229"); //작업장 조회
        	}
        };

        this.tab_search_Tabpage1_btn_work_area_onclick = function(obj,e)
        {
        	this.fn_openPop("SCH_AREA","P00227"); //작업장 조회
        };

        this.div_work_grd_user_oncellclick = function(obj,e)
        {
        	if(e.row < 0 ) return;
        	if(e.row != e.oldrow){
        		this.fn_searchDetail(e.row);
        		var controlRight = this.ds_user.getColumn(this.ds_user.rowposition, "CONTROLRIGHT");
        		var isVisible = false;
        		if(controlRight=="ProductionManager"){ //생산관리자는 행추가 불가
        			isVisible = false;
        		} else {
        			isVisible = true;
        		}
        		this.div_work.form.btn_grdAdd.set_visible(isVisible);
        		this.div_work.form.btn_grdDel.set_visible(isVisible);
        	}
        };


        this.ds_user_canrowposchange = function(obj,e)
        {
        	if(!this.fn_checkDsUpdate())return false;
        	this.ds_area.clearData();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tabpage1.form.btn_clear2.addEventHandler("onclick",this.fn_formInit,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.btn_user.addEventHandler("onclick",this.tab_search_Tabpage1_btnProductCode_onclick,this);
            this.tab_search.Tabpage1.form.btn_workArea.addEventHandler("onclick",this.tab_search_Tabpage1_btn_work_area_onclick,this);
            this.div_header.form.btn_customSave.addEventHandler("onclick",this.fn_save,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.grd_area.addEventHandler("onexpandup",this.div_work_grd_operationSpec_onexpandup,this);
            this.div_work.form.btn_grdDel.addEventHandler("onclick",this.fn_delete,this);
            this.div_work.form.btn_grdAdd.addEventHandler("onclick",this.fn_add,this);
            this.div_work.form.grd_user.addEventHandler("oncellclick",this.div_work_grd_user_oncellclick,this);
            this.ds_user.addEventHandler("canrowposchange",this.ds_user_canrowposchange,this);
        };
        this.loadIncludeScript("BAS01500M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
