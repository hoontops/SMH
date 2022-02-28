(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM07800M");
            this.set_titletext("포장 인수 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_pcmLot", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DUDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNM\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSITTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comment", this);
            obj._setContents("<ColumnInfo><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"USERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pcmLotSend", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DUDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"-9",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","62","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","62","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"33","15","97","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","43","15","97",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
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

            obj = new Static("Static12_00_00_00_00_00","161","68","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00",null,"29","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_AreaID","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("작업장 코드");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("AREAID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_areaId","108","10","143","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnAreaId",null,"10","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_LotId","108","34","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_enable("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProcductName","0","34","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LOTID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_01",null,"52","45","10","94",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","281","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"23","-40",null,null,null,null,this);
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

            obj = new Grid("grd_pcmLotList","2","66",null,null,"-2","50",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_pcmLot");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"200\"/><Column size=\"145\"/><Column size=\"80\"/><Column size=\"199\"/><Column size=\"152\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"127\"/><Column size=\"99\"/><Column size=\"133\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell col=\"2\" text=\"품목코드\" tooltiptext=\"PRODUCTDEFID\"/><Cell col=\"3\" text=\"Rev\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell col=\"4\" text=\"품목명\" tooltiptext=\"PRODUCTDEFNAME\"/><Cell col=\"5\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTID\"/><Cell col=\"6\" text=\"공정수순\" tooltiptext=\"USERSEQUENCE\"/><Cell col=\"7\" text=\"단위\" tooltiptext=\"UNIT\"/><Cell col=\"8\" text=\"수량(PNL)\" tooltiptext=\"PANELQTY\"/><Cell col=\"9\" text=\"수량\" tooltiptext=\"QTY\"/><Cell col=\"10\" text=\"고객명\" tooltiptext=\"CUSTOMERNAME\"/><Cell col=\"11\" text=\"투입일자\" tooltiptext=\"INPUTDATE\"/><Cell col=\"12\" text=\"S/O번호\" tooltiptext=\"PRODUCTIONORDERID\"/><Cell col=\"13\" text=\"생산구분\" tooltiptext=\"PRODUCTIONTYPE\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:CHK\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"1\" text=\"bind:LOTID\" cssclass=\"expr:CHK==1  ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFID\" cssclass=\"expr:CHK==1  ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFVERSION\" cssclass=\"expr:CHK==1  ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFNAME\" cssclass=\"expr:CHK==1  ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"5\" text=\"bind:PROCESSSEGMENTNAME\" cssclass=\"expr:CHK==1  ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"6\" text=\"bind:USERSEQUENCE\" cssclass=\"expr:CHK==1  ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"7\" text=\"bind:UNIT\" cssclass=\"expr:CHK==1  ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"8\" text=\"bind:PANELQTY\" cssclass=\"expr:CHK==1  ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"9\" text=\"bind:QTY\" cssclass=\"expr:CHK==1  ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"10\" text=\"bind:CUSTOMERNAME\" cssclass=\"expr:CHK==1  ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"11\" text=\"bind:INPUTDATE\" cssclass=\"expr:CHK==1  ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"12\" text=\"bind:PRODUCTIONORDERID\" cssclass=\"expr:CHK==1  ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"13\" text=\"bind:PRODUCTIONTYPE\" cssclass=\"expr:CHK==1  ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","5","0","108","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("LOT 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("GRIDLOTLIST");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_pcmLot","sta_subTitle:17","0",null,"34","762",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_LotList",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Edit("edt_LotIdConfirm","80","sta_cnt_ds_pcmLot:9","260",null,null,"grd_pcmLotList:3",null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_enable("true");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("staComment","1","43",null,null,"edt_LotIdConfirm:20","grd_pcmLotList:5",null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_text("LOT No.");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("LOTID");
            obj.set_textAlign("left");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","22",null,null,null,null,null,this);
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

            obj = new Button("btn_print",null,"16","26","24","29",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_print");
            obj.set_tooltiptext("Toolbar_Print");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","55",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
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

            obj = new Button("btn_save",null,"16","26","24","93",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("8");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM07800M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM07800M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PCM07800M.xfdl", function() {

        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 포장 인수 등록
         * 파일명 		: PCM07800M.xfdl
         * 작성자 		: 김기수
         * 작성일 		: 2021.04.26
         *
         * 설  명		: 공정관리 > 포장관리 > 포장인수등록
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.26	김기수   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("pcm::pcmCommon.xjs"); /*include "pcm::pcmCommon.xjs"*/; //pcm 에서 사용하는 공통
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.fn_formInit();

        };

        this.fn_formInit = function()
        {



        	var userId = nexacro.getApplication().gds_userInfo.getColumn(0,"gv_userAcnt");
        	var username = nexacro.getApplication().gds_userInfo.getColumn(0,"gv_userNm");
        	var langType = nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType");

        	this.ds_comment.addRow();
        	this.ds_comment.setColumn(0,"USERID",userId);
        	this.ds_comment.setColumn(0,"USERNAME",username);
        	this.ds_comment.setColumn(0,"LANGUAGETYPE",langType);


        	//this.div_work.form.edt_creator.set_value(this.ds_comment.getColumn(0,"USERNAME"));

        };



        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        		this.fn_BoxPackingAccept();
        };

        this.fn_BoxPackingAccept = function()
        {
        	if(this.fn_searchValidate() == false) return;

        	this.ds_pcmLot.clearData();


        	var sRow = 0;

        	this.ds_search.setColumn(sRow, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_search.setColumn(sRow, "PLANTID",this.gf_getSiteType());
        	this.ds_search.setColumn(sRow, "LANGUAGETYPE", this.ds_comment.getColumn(0,"LANGUAGETYPE"));
        	this.ds_search.setColumn(sRow, "LOTID", this.tab_search.Tabpage1.form.edt_LotId.value);



        	var sSvcID 			= "selectLotWorkPacking";
        	var sController 	= "/pcm07800/selectLotWorkPacking.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_pcmLot=output";
        	var sArgs 			= "";

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };



        this.fn_searchValidate = function ()
        {

        	var strSearchValue = this.tab_search.Tabpage1.form.edt_areaId.value;
        	var strSearchColNm = ["AreaId"];

        	if(this.gfn_isNull(strSearchValue))
        	{
        		this.gfn_Message("REQUIREDITEM",strSearchColNm , "warning","ok");
        		this.tab_search.Tabpage1.form.edt_areaId.setFocus();
        		return false;
        	}
        	else{
        		return true;
        	}

        };


        /*

         * 기능 : 저장
         */
        this.fn_save = function(obj,e)
        {
        	if (!this.gfn_dsIsUpdated(this.ds_pcmLot) )
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");
        		return;
        	}

        	for( var i = 0; i <this.ds_pcmLot.rowcount; i++)
        	{
        		var strChk = this.ds_pcmLot.getColumn(i,"CHK");

        		if(strChk =="1")
        		{
        				var newRow = this.ds_pcmLotSend.addRow();
        				this.ds_pcmLotSend.copyRow(newRow,this.ds_pcmLot,i);
        		}

        	}

        	if(this.ds_pcmLotSend.rowkcount =0)
        	{
        		this.gfn_Message("오류 ds_pcmLotSend 0", null, "warning", "ok");
        		return;
        	}
        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "savePcmBoxPackingAccept";
        	var sController 	= "/pcm07800/savePcmBoxPackingAccept.do";
        	var sInDatasets 	= "ds_pcmLot=ds_pcmLotSend:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 삭제
         */



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
        		switch(trId) {
        			case "savePcmBoxPackingAccept" :
        			{
        				this.gfn_Message("SuccessSave", null, "info", "ok");
        				this.fn_BoxPackingAccept();
        				break;
        			}
        			default :
        		}
        	}
        };


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        /*
         *	기능 : 팝업 관련
         */
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	switch(sPopupId) {
        	case "SEARCH_AREAID":
        	{
        		this.tab_search.Tabpage1.form.edt_areaId.set_value(rtn[1]);
        		this.ds_search.setColumn(0,"AREAID",rtn[0]);
        		this.ds_search.setColumn(0,"AREANAME",rtn[1]);
        		break;
        	}
        	default:
        	}

        };

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/


        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.tab_search_Tabpage1_btnAreaId_onclick = function(obj,e)
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
        	var popupId = "SEARCH_AREAID";
        	var oArg = {};
        	var langType =  this.ds_comment.getColumn(0,"LANGUAGETYPE");
        	var userId = this.ds_comment.getColumn(0,"USERID");

        	var pAreaId = this.tab_search.Tabpage1.form.edt_areaId.value;
        	if(this.nfn_isNull(pAreaId)) {
        		pAreaId="";
        	}


        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = "P00148";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "AREAID|AREANAME";
        	oArg.arg_paramCols = "USERID|SESSION_LANGUAGETYPE|PLANTID";
        	oArg.arg_paramValues =userId+"|"+langType+"|"+this.gf_getSiteType();
        	oArg.arg_searchStr = "TXTAREA=" + pAreaId;

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=830,height=700");
        };



        this.tab_search_Tabpage1_edt_areaId_onkeydown = function(obj,e)
        {
        	if (e.keycode != 13) return;

        	this.ds_search.setColumn(0,"AREAID",obj.value);
        	this.tab_search_Tabpage1_btnAreaId_onclick();
        };


        this.div_work_edt_LotIdConfirm_onkeydown = function(obj,e)
        {
        	if (e.keycode != 13) return;
        	if (this.ds_pcmLot.getRowCount() <= 0) return;

        	var nRow = this.ds_pcmLot.findRow("LOTID" , this.div_work.form.edt_LotIdConfirm.value);
        	if(nRow==0){
        		this.ds_pcmLot.setColumn(0,"CHK",1);
        	}
        	else{
        		var newRow = this.ds_pcmLot.insertRow();
        		this.ds_pcmLot.copyRow(newRow,this.ds_pcmLot,nRow+1);
        		this.ds_pcmLot.setColumn(newRow,"CHK",1);
        		this.ds_pcmLot.deleteRow(nRow+1);
        		//this.ds_pcmLot.setRowType(nRow+1 ,Dataset.ROWTYPE_NORMAL);
        	}
        	this.div_work.form.edt_LotIdConfirm.set_value("");
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_formInit,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.tab_search_Tabpage1_btn_search_onclick,this);
            this.tab_search.Tabpage1.form.edt_areaId.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_areaId_onkeydown,this);
            this.tab_search.Tabpage1.form.btnAreaId.addEventHandler("onclick",this.tab_search_Tabpage1_btnAreaId_onclick,this);
            this.div_work.form.edt_LotIdConfirm.addEventHandler("onkeydown",this.div_work_edt_LotIdConfirm_onkeydown,this);
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_header.form.btn_save.addEventHandler("onclick",this.fn_save,this);
        };
        this.loadIncludeScript("PCM07800M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
