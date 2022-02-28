(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DFM00402P");
            this.set_titletext("Layer별 불량 현황 - Layer No");
            this.set_cssclass("form_PopupBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_layerMainList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LAYER\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"OPERATIONSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"P_ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mstDataClass", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchInit", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMOWNER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_layerGroup1List", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LAYER\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_layerGroup2List", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LAYER\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_layerGroup3List", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LAYER\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_layerGroup4List", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LAYER\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_layerGroup5List", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LAYER\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_layerGroup6List", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LAYER\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_layerGroupSum", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LAYER\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_layerGroupSumP", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LAYER\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02_02",null,null,"50","10","18","48",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,null,"70","28","20","20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.set_cssclass("btn_pop_no");
            obj.set_tooltiptext("CANCEL");
            this.addChild(obj.name, obj);

            obj = new Button("btn_apply",null,null,"70","28","btn_cancel:5","20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("적용");
            obj.set_cssclass("btn_pop_yes");
            obj.set_tooltiptext("APPLY");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","265","0","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,null,"50","20","115","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","0","82","20","84",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00",null,"42","20","84","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"-2","25","25","14",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","20","20","80","34",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Layer");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_layerMainList","sta_title:0","20","115","34",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_layerMainList","20","54","28%",null,null,"58",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_layerMainList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"70\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"LAYER\" tooltiptext=\"44C87C99332444CC8A076FBDB35DA9C2\"/><Cell col=\"3\" tooltiptext=\"INSPPROCESSSEGMENT\" text=\"검사공정\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:LAYER\" textAlign=\"left\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_layerGroup4","72%","54",null,"110","20",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_layerGroup4List");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"220\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"LAYER\" tooltiptext=\"44C87C99332444CC8A076FBDB35DA9C2\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:LAYER\" textAlign=\"left\" displaytype=\"normal\" edittype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_layerGroup1","grd_layerMainList:65","54",null,"110","grd_layerGroup4:55",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_layerGroup1List");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"220\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"LAYER\" tooltiptext=\"44C87C99332444CC8A076FBDB35DA9C2\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:LAYER\" textAlign=\"left\" displaytype=\"normal\" edittype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_suttleRGrp1",null,"81","23","24","grd_layerGroup1:16",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_shuttleR");
            this.addChild(obj.name, obj);

            obj = new Button("btn_suttleLGrp1",null,"127","23","24","grd_layerGroup1:16",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_shuttleL");
            this.addChild(obj.name, obj);

            obj = new Static("sta_titleG1","309","16","80","34",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Group 1");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_titleG2","309","179","80","34",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Group 2");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_layerGroup5","72%","217",null,"110","20",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_layerGroup5List");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"220\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"LAYER\" tooltiptext=\"44C87C99332444CC8A076FBDB35DA9C2\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:LAYER\" textAlign=\"left\" displaytype=\"normal\" edittype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_layerGroup2","grd_layerMainList:65","217",null,"110","grd_layerGroup5:55",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_layerGroup2List");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"220\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"LAYER\" tooltiptext=\"44C87C99332444CC8A076FBDB35DA9C2\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:LAYER\" textAlign=\"left\" displaytype=\"normal\" edittype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_titleG3","309","335","80","43",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Group 3");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_layerGroup6","72%","382",null,"110","20",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_layerGroup6List");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"220\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"LAYER\" tooltiptext=\"44C87C99332444CC8A076FBDB35DA9C2\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:LAYER\" textAlign=\"left\" displaytype=\"normal\" edittype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_layerGroup3","grd_layerMainList:65","382",null,"110","grd_layerGroup6:55",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_layerGroup3List");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"220\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"LAYER\" tooltiptext=\"44C87C99332444CC8A076FBDB35DA9C2\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:LAYER\" textAlign=\"left\" displaytype=\"normal\" edittype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_titleG6","576","335","80","43",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Group 6");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_titleG5","576","179","80","34",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("Group 5");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_titleG4","sta_titleG1:187","16","80","34",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("Group 4");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_suttleRGrp4",null,"81","23","24","grd_layerGroup4:17",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_shuttleR");
            this.addChild(obj.name, obj);

            obj = new Button("btn_suttleLGrp4",null,"127","23","24","grd_layerGroup4:17",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("btn_WF_shuttleL");
            this.addChild(obj.name, obj);

            obj = new Button("btn_suttleRGrp5",null,"248","23","24","grd_layerGroup5:17",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("btn_WF_shuttleR");
            this.addChild(obj.name, obj);

            obj = new Button("btn_suttleLGrp5",null,"294","23","24","grd_layerGroup5:17",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("btn_WF_shuttleL");
            this.addChild(obj.name, obj);

            obj = new Button("btn_suttleRGrp2",null,"248","23","24","grd_layerGroup2:16",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("btn_WF_shuttleR");
            this.addChild(obj.name, obj);

            obj = new Button("btn_suttleLGrp2",null,"294","23","24","grd_layerGroup2:16",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_shuttleL");
            this.addChild(obj.name, obj);

            obj = new Button("btn_suttleRGrp3",null,"414","23","24","grd_layerGroup3:16",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("btn_WF_shuttleR");
            this.addChild(obj.name, obj);

            obj = new Button("btn_suttleLGrp3",null,"460","23","24","grd_layerGroup3:16",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("btn_WF_shuttleL");
            this.addChild(obj.name, obj);

            obj = new Button("btn_suttleRGrp6",null,"414","23","24","grd_layerGroup6:17",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_cssclass("btn_WF_shuttleR");
            this.addChild(obj.name, obj);

            obj = new Button("btn_suttleLGrp6",null,"460","23","24","grd_layerGroup6:17",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_cssclass("btn_WF_shuttleL");
            this.addChild(obj.name, obj);

            obj = new Static("sta_popupTitle","2.50%","0","245","20",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("Layer List");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("LAYERLIST");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,550,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DFM00402P.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("DFM00402P.xfdl","lib::lib_mtm.xjs");
        this.registerScript("DFM00402P.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: Layer별 불량 현황 - Lot No Popup
         * 파일명 		: DFM00400P.xfdl
         * 작성자 		: 김진현
         * 작성일 		: 2021.06.01
         *
         * 설  명		: Layer별 불량 현황 - Lot No Popup
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.06.01	김진현   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_mtm.xjs"); /*include "lib::lib_mtm.xjs"*/;	//MTM 공통 라이브러리 include
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/

        var lv_rtnCols;

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);

        	// 그리드 리턴 받을 값
        	lv_rtnCols = this.parent.arg_rtnCols;

        	this.ds_layerGroupSumP.clearData();
        	this.ds_layerGroupSumP.copyData(this.parent.arg_chkDs)

        	this.fn_search();

        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {

        	var nRev  = this.parent.arg_rev;
        	var nEnt  = this.parent.arg_enter;
        	var nItem = this.parent.arg_item;

        	trace("nRev :  "+nRev);
        	trace("nEnt :  "+nEnt);
        	trace("nItem :  "+nItem);
        	if(this.gfn_isNull(nItem) || this.gfn_isNull(nEnt))
        	{
        		return;
        	}

        	this.ds_layerMainList.clearData(); 		//Target Dataset clear

        	this.ds_layerGroup1List.clearData(); 	//Target Dataset clear
        	this.ds_layerGroup2List.clearData(); 	//Target Dataset clear
        	this.ds_layerGroup3List.clearData(); 	//Target Dataset clear
        	this.ds_layerGroup4List.clearData(); 	//Target Dataset clear
        	this.ds_layerGroup5List.clearData(); 	//Target Dataset clear
        	this.ds_layerGroup6List.clearData(); 	//Target Dataset clear

        	this.ds_search.clearData(); 			//Search Condition Dataset clear

        	// (21.07.02) - 품목코드는 필수 값으로 지정 -> LAYER 조회 쿼리 변경으로 인해서


        	// (21.07.02) - ds_layerMainList 컬럼 추가  [PROCESSSEGMENTID, OPERATIONSEQUENCE, PROCESSSEGMENTNAME]

        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "P_ENTERPRISEID"			, nEnt); 					// ENTERPRISEID
        	this.ds_search.setColumn(0, "P_PRODUCTDEFID"			, nItem); 					// 품목
        	this.ds_search.setColumn(0, "P_PRODUCTDEFVERSION"		, nRev); 					// Rev

        	var sSvcID 			= "selectLayerByProductdef";
        	var sController 	= "/dfm00400/selectLayerByProductdef.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_layerMainList=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
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
        		this.ds_outsourcedWarehouseShipment.clearData(); //Target Dataset clear
        		this.fn_lotNoScanRready(); //scan READY
        		return;
        	}

        	switch(trId) {

        		case "selectLayerByProductdef":		//[메인 조회] 자재그룹코드 Callback
        			if (this.ds_layerMainList.getRowCount() == 0)
        			{
        				this.gfn_Message("NoSelectData", null, "error", "ok");
        			}

        			/*
        			// (21.07.02) - 주석 처리 (Layer 정보 전부다 가져옴 max값 가져와서 그릴 필요 없음)
        			trace(" [ds_layerMainList] : "+this.ds_layerMainList.saveXML());
        			var nMaxLayer 	= this.ds_layerMainList.getColumn(0,"LAYER");
        			var nMaxNum		= nMaxLayer.replace("L","");
        			trace(" ----[max Lay]--- : "+nMaxNum);
        			this.ds_layerMainList.clearData();
        			// [ TEST ]
        			for(var i=1; i<=nMaxNum; i++)
        			{
        				var nAdd = this.ds_layerMainList.addRow();
        				this.ds_layerMainList.setColumn(nAdd, "LAYER", i+"L");
        				this.ds_layerMainList.setColumn(nAdd, "CHK", "");
        			}

        			var nCount = this.ds_layerMainList.rowcount;
        			var nCountText = "Count : <fc v='#f31d24'>"+nCount+"</fc>";
        			this.sta_cnt_ds_layerMainList.set_text(nCountText);
        			*/
        			// 이미 선택된 내용 설정
        			this.fn_setPgroup();

        			break;
        		default:
        	}
        };


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
         /*
         * 기능(공통팝업) : '작업장' Text 조회
         */
        this.fn_openPop = function(svcId, popId, pArg)
        {

        }

        this.fn_popupAfter = function(sPopupId, Variant)
        {


        }

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 적용 버튼 클릭시 해당 값 담는 함수
         */
        this.fn_selectData = function(rowPosition)
        {

        	var rtnArray = new Array();
        	var index = 0;
        	this.ds_layerGroupSum.clearData();
        	// 선택되지 않은 Group에서 이미 등록 되어 있는지 체크
        	for(var j=1; j<=6; j++)
        	{
        		var nChkDs	= this.all["ds_layerGroup"+j+"List"];		// 선택된 ds
        		var nChkCnt	= nChkDs.rowcount;
        		for(var c=0; c<nChkCnt; c++)
        		{
        			var nLay = nChkDs.getColumn(c,"LAYER");
        			var nGrp = nChkDs.getColumn(c,"GROUP");
        			var nAddR = this.ds_layerGroupSum.addRow();
        			this.ds_layerGroupSum.setColumn(nAddR, "LAYER", nLay);
        			this.ds_layerGroupSum.setColumn(nAddR, "GROUP", nGrp);
        		}
        	}
        	trace(" ========[선택된 Layer들]=========> : "+this.ds_layerGroupSum.saveXML());
        	for(var j=0; j<this.ds_layerGroupSum.rowcount; j++){

        		var colArray = new Array();

        		var colIdList = lv_rtnCols.split("|");			// 리턴 값

        		for (var i = 0; i < colIdList.length; i++)
        		{
        			colArray[i] = this.ds_layerGroupSum.getColumn(j, colIdList[i]);
        		}
        		rtnArray[index] = colArray;
        		index++;
        	}
        	this.opener.fv_rtnValue = rtnArray;
        	this.close();


        }

        /*
         * 기 선택된 Group 설정
         */
        this.fn_setPgroup = function ()
        {
        	var nCnt = this.ds_layerGroupSumP.rowcount;
        	trace(" (이미 선택된 row)=========> : "+nCnt);
        	for(var i=0; i<nCnt; i++)
        	{
        		var nLay 	= this.ds_layerGroupSumP.getColumn(i,"LAYER");
        		var nGp	 	= this.ds_layerGroupSumP.getColumn(i,"GROUP");
        		var nNum	= nGp.substr(-1,1);

        		var nDs	= this.all["ds_layerGroup"+nNum+"List"];		// 선택된 ds

        		var nAddR = nDs.addRow();
        		nDs.setColumn(nAddR, "LAYER", nLay);
        		nDs.setColumn(nAddR, "GROUP", nGp);
        	}


        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/







        /*
         * X 버튼 클릭시
         */
        this.btn_close_onclick = function(obj,e)
        {
        	this.opener.fv_rtnValue = "";
        	this.close();
        };

        /*
         * 취소 버튼 클릭시
         */
        this.btn_cancel_onclick = function(obj,e)
        {
        	this.opener.fv_rtnValue = "";
        	this.close();
        };


        /*
         * 이벤트 : 그리드 선택값 리턴 처리(2차원 배열) -> 단일 선택
         */
        this.btn_apply_onclick = function(obj,e)
        {
        	// 선택된 값을 담는다.
        	this.fn_selectData();	// 체크박스 아님

        };

        /*
         * 그리드 셀 더블 클릭시
         */
        this.grd_consumalbe_oncelldblclick = function(obj,e)
        {
        	if(e.row < 0 || e.col < 1) return;
        	this.fn_selectData(e.row);
        };

        /*
         * 조회 조건 초기화
         */
        this.divSearch_btn_reset_search_onclick = function(obj,e)
        {
        	this.divSearch.form.edt_itemId.set_value("");
        	this.divSearch.form.edt_lotNo.set_value("");
        	this.fn_setDate ();
        };

        /*
         * Layer 선택 추가
         */
        this.fn_layerR = function(obj,e)
        {
        	var nBtnNm 	= obj.name;
        	var nNum	= nBtnNm.substr(-1,1);
        	trace(" (클릭 넘버)----> : "+nNum);

        	var nChkCnt = this.ds_layerMainList.getCaseCount("CHK=='1'");
        	// 삭제건 체크
        	if (nChkCnt == 0)
        	{
        		this.gfn_Message("NoSelections", "", "warning", "ok");			// 선택된 항목이 없습니다.
        		return;
        	}

        	var nDs	= this.all["ds_layerGroup"+nNum+"List"];		// 선택된 ds
        	var nCnt = this.ds_layerMainList.rowcount;


        	//*********************************************************(21.07.02) - 이미 선택된 ds 점검
        	var nChkCnt 	= nDs.rowcount;
        	var nChkProcId	= "";				// 이미 선택된, 들어가있는 ds의 Layer 해당하는 검사공정
        	for(var nC = 0; nC < nChkCnt; nC++)
        	{
        		var nChkLayer 	=  nDs.getColumn(nC, "LAYER");
        		var nFindInsp 	=  this.ds_layerMainList.findRow("LAYER", nChkLayer);
        		var nProcId		=  this.ds_layerMainList.getColumn(nFindInsp, "PROCESSSEGMENTID");
        		if(!this.gfn_isNull(nProcId))
        		{
        			nChkProcId 	=  nProcId;
        			break;
        		}
        	}
        	//*********************************************************(21.07.02)

        	// 이미 들어 가 있는제 체크(자지 Group 이외에)
        	//**********************************************************************************[21.06.18] Max Layer 체크
        	// (21.06.18) 최대 2건만 들어 가도록 설정 (이미 들어가있는 layer 수)
        	var nMaxCnt = nDs.rowcount;
        	// 이미 들어 가 있는지 체크(자기 자신)
        	for(var z=0; z<nCnt; z++)
        	{
        		var nChk	= this.ds_layerMainList.getColumn(z,"CHK");
        		var nLayer	= this.ds_layerMainList.getColumn(z,"LAYER");

        		if(nChk == 1)				// main에서 체크된 내용만
        		{


        			// (21.06.18)
        			if(nMaxCnt >= 2)
        			{
        				//{0}은 최대 {1}개만 등록가능합니다.
        				this.gfn_Message("MaxRowCntCheck", [" "+'Layer',2], "warning", "ok");
        				// Layer, 2
        				return;
        			}

        			// 선택되지 않은 Group에서 이미 등록 되어 있는지 체크
        			for(var h=1; h<=6; h++)
        			{
        				if(h != nNum)
        				{
        					var nChkDs	= this.all["ds_layerGroup"+h+"List"];		// 선택된 ds
        					var nChkFr	= nChkDs.findRow("LAYER",nLayer);
        					if(nChkFr != -1)
        					{
        						this.gfn_Message("IsDuplication", "", "warning", "ok");			// 이미 등록된 정보입니다.
        						return;
        					}
        				}
        			}

        			// 등록하려는 Group에 이미 들어가 있는지 체크
        			var nFr	=	nDs.findRow("LAYER",nLayer);
        			if(nFr == -1)		// 존재하지 않으면 생성
        			{
        				// (21.06.18) 최대 2건만 들어 가도록 설정
        				nMaxCnt++;
        			}
        			else
        			{
        				this.gfn_Message("DuplicateData", "", "warning", "ok");			// 중복된 데이터가 있습니다. 다시 선택해주세요.
        				return;
        			}

        			// (21.07.02) - 검사공정이 다른지 체크
        			var nPostProcId	= this.ds_layerMainList.getColumn(z,"PROCESSSEGMENTID");
        			if( (nChkProcId != nPostProcId) && !this.gfn_isNull(nChkProcId))
        			//if( (nChkProcId != nPostProcId))
        			{
        				//trace("-------------------[검사공정이 다르다]"+nChkProcId+" || "+nPostProcId);
        				nChkProcId = nPostProcId;
        				//SelectSameItem 같은 {0}끼리만 선택하여 주십시오.  INSPPROCESSSEGMENT
        				this.gfn_Message("SelectSameItem", this.nfn_getDictionaryname("INSPPROCESSSEGMENT",true), "warning", "ok");
        				return;
        			}
        			// (21.07.02) - 초기에 값없는 경우 로직 추가
        			if(this.gfn_isNull(nChkProcId))
        			{
        				nChkProcId = nPostProcId;
        			}
        		}
        	}
        	//**********************************************************************************[21.06.18] Max Layer 체크



        	// 이미 들어 가 있는지 체크(자기 자신)
        	for(var i=0; i<nCnt; i++)
        	{
        		var nChk	= this.ds_layerMainList.getColumn(i,"CHK");
        		var nLayer	= this.ds_layerMainList.getColumn(i,"LAYER");
        		if(nChk == 1)				// main에서 체크된 내용만
        		{
        			// 선택되지 않은 Group에서 이미 등록 되어 있는지 체크
        			for(var j=1; j<=6; j++)
        			{
        				if(j != nNum)
        				{
        					var nChkDs	= this.all["ds_layerGroup"+j+"List"];		// 선택된 ds
        					var nChkFr	= nChkDs.findRow("LAYER",nLayer);
        					if(nChkFr != -1)
        					{
        						this.gfn_Message("IsDuplication", "", "warning", "ok");			// 이미 등록된 정보입니다.
        						return;
        					}
        				}
        			}

        			// 등록하려는 Group에 이미 들어가 있는지 체크
        			var nFr	=	nDs.findRow("LAYER",nLayer);
        			if(nFr == -1)		// 존재하지 않으면 생성
        			{
        				var nAdd = nDs.addRow();
        				nDs.setColumn(nAdd,"LAYER",nLayer);
        				nDs.setColumn(nAdd,"GROUP","G"+nNum);
        			}
        			else
        			{
        				this.gfn_Message("DuplicateData", "", "warning", "ok");			// 중복된 데이터가 있습니다. 다시 선택해주세요.
        				return;
        			}

        			// (21.06.18) 선택 적용시 이미 선택된 내용 체크 해제
        			this.ds_layerMainList.setColumn(i,"CHK",0);
        		}
        	}

        };


        /*
         * Layer 선택 제거
         */
        this.fn_layerL = function(obj,e)
        {
        	var nBtnNm 	= obj.name;
        	var nNum	= nBtnNm.substr(-1,1);
        	trace(" (클릭 넘버)----> : "+nNum);

        	var nDs	= this.all["ds_layerGroup"+nNum+"List"];		// 선택된 ds
        	var nDsCnt	= nDs.rowcount;
        	var nChkCnt = nDs.getCaseCount("CHK=='1'");
        	// 삭제건 체크
        	if (nChkCnt == 0)
        	{
        		this.gfn_Message("NoSelections", "", "warning", "ok");			// 선택된 항목이 없습니다.
        		return;
        	}

        	// 선택된 행 삭제
        	for(var i=nDsCnt-1; i>=0;i--)
        	{
        		if ((nDs.getColumn(i, "CHK") == "1"))   // 체크건만 삭제 가능
        		{
        			nDs.deleteRow(i);
        		}
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_apply.addEventHandler("onclick",this.btn_apply_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_suttleRGrp1.addEventHandler("onclick",this.fn_layerR,this);
            this.btn_suttleLGrp1.addEventHandler("onclick",this.fn_layerL,this);
            this.btn_suttleRGrp4.addEventHandler("onclick",this.fn_layerR,this);
            this.btn_suttleLGrp4.addEventHandler("onclick",this.fn_layerL,this);
            this.btn_suttleRGrp5.addEventHandler("onclick",this.fn_layerR,this);
            this.btn_suttleLGrp5.addEventHandler("onclick",this.fn_layerL,this);
            this.btn_suttleRGrp2.addEventHandler("onclick",this.fn_layerR,this);
            this.btn_suttleLGrp2.addEventHandler("onclick",this.fn_layerL,this);
            this.btn_suttleRGrp3.addEventHandler("onclick",this.fn_layerR,this);
            this.btn_suttleLGrp3.addEventHandler("onclick",this.fn_layerL,this);
            this.btn_suttleRGrp6.addEventHandler("onclick",this.fn_layerR,this);
            this.btn_suttleLGrp6.addEventHandler("onclick",this.fn_layerL,this);
        };
        this.loadIncludeScript("DFM00402P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
