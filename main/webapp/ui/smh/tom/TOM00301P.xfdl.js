(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TOM00301P");
            this.set_titletext("Tool Code 조회");
            this.set_cssclass("form_PopupBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,461);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_toolCode", this);
            obj._setContents("<ColumnInfo><Column id=\"REQUESTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLNUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLFORMCODE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLFORM\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLCATEGORYID\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLCATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLCATEGORYDETAILID\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLCATEGORYDETAIL\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLDETAILID\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLDETAIL\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDEPARTMENT\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTUSERID\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTUSER\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDELIVERYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANDELIVERYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISMODIFY\" type=\"STRING\" size=\"256\"/><Column id=\"OWNSHIPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLMAKETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLMAKETYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLKINDID\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLKIND\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"P_REQUESTDATE_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"P_REQUESTDATE_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"P_REQUESTDELIVERYDATE_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"P_REQUESTDELIVERYDATE_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"P_PLANDELIVERYDATE_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"P_PLANDELIVERYDATE_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENTLOGINID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02_02",null,null,"50","10","38","48",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,null,"70","28","36","20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btn_pop_no");
            this.addChild(obj.name, obj);

            obj = new Button("btn_apply",null,null,"70","28","113","20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.set_cssclass("btn_pop_yes");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,null,"50","20","133","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","395","87","50","34",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("h34");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","0","82","20","84",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00",null,"19","20","67","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"-3","25","25","35",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("title0","20","87","97","34",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("TOOL 조회");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_toolCode","20","121",null,null,"0","57",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_autoenter("select");
            obj.set_fillareatype("none");
            obj.set_binddataset("ds_toolCode");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"37\"/><Column size=\"100\"/><Column size=\"52\"/><Column size=\"165\"/><Column size=\"185\"/><Column size=\"100\"/><Column size=\"185\"/><Column size=\"146\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"185\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"의뢰일\"/><Cell col=\"2\" text=\"의뢰순번\"/><Cell col=\"3\" text=\"Tool 코드\"/><Cell col=\"4\" text=\"치공구명\"/><Cell col=\"5\" text=\"품목코드\"/><Cell col=\"6\" text=\"품목명\"/><Cell col=\"7\" text=\"치공구 ID\"/><Cell col=\"8\" text=\"치공구 Rev.\"/><Cell col=\"9\" text=\"치공구명\"/><Cell col=\"10\" text=\"TOOL 형식\"/><Cell col=\"11\" text=\"TOOLCATEGORYID---HIDDEN\"/><Cell col=\"12\" text=\"TOOL 구분\"/><Cell col=\"13\" text=\"TOOLCATEGORYDETAILID---HIDDEN\"/><Cell col=\"14\" text=\"TOOL 유형1\"/><Cell col=\"15\" text=\"TOOLDETAILID---HIDDEN\"/><Cell col=\"16\" text=\"TOOL 유형2\"/><Cell col=\"17\" text=\"의뢰부서 ID\"/><Cell col=\"18\" text=\"REQUESTUSERID---HIDDEN\"/><Cell col=\"19\" text=\"요청자\"/><Cell col=\"20\" text=\"VENDORID---HIDDEN\"/><Cell col=\"21\" text=\"거래처명\"/><Cell col=\"22\" text=\"입고요청일\"/><Cell col=\"23\" text=\"입고예정일\"/><Cell col=\"24\" text=\"AREAID---HIDDEN\"/><Cell col=\"25\" text=\"작업장\"/><Cell col=\"26\" text=\"ISMODIFY---HIDDEN\"/><Cell col=\"27\" text=\"OWNSHIPTYPE---HIDDEN\"/><Cell col=\"28\" text=\"제품명\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" textAlign=\"left\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:REQUESTDATE\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"2\" text=\"bind:REQUESTSEQUENCE\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:TOOLNUMBER\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:TOOLNAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:TOOLCODE\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:DURABLEDEFVERSION\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:TOOLNAME\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:TOOLFORMCODE\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:TOOLCATEGORYID\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:TOOLCATEGORY\" textAlign=\"center\"/><Cell col=\"13\" text=\"bind:TOOLCATEGORYDETAILID\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:TOOLCATEGORYDETAIL\" textAlign=\"center\"/><Cell col=\"15\" text=\"bind:TOOLDETAILID\" textAlign=\"left\"/><Cell col=\"16\" text=\"bind:TOOLDETAIL\" textAlign=\"center\"/><Cell col=\"17\" text=\"bind:REQUESTDEPARTMENT\" textAlign=\"left\"/><Cell col=\"18\" text=\"bind:REQUESTUSERID\" textAlign=\"left\"/><Cell col=\"19\" text=\"bind:REQUESTUSER\" textAlign=\"left\"/><Cell col=\"20\" text=\"bind:VENDORID\" textAlign=\"left\"/><Cell col=\"21\" text=\"bind:VENDORNAME\" textAlign=\"left\"/><Cell col=\"22\" text=\"bind:REQUESTDELIVERYDATE\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"23\" text=\"bind:PLANDELIVERYDATE\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\"/><Cell col=\"24\" text=\"bind:AREAID\" textAlign=\"left\"/><Cell col=\"25\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"26\" text=\"bind:ISMODIFY\" textAlign=\"left\"/><Cell col=\"27\" text=\"bind:OWNSHIPTYPE\" textAlign=\"left\"/><Cell col=\"28\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch02","20","19",null,"68","20",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("div_WF_search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"0","20","70","97",null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("4");
            obj.set_text("w\r\n18");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("sta_site","0","10","7.15%","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("1");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Combo("cbo_siteId","sta_site:10","10",null,"20","996",null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("0");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("Static02","96","0","48","10",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("2");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("sta_requestDate","18.59%","10","6.91%","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("3");
            obj.set_text("의뢰일");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","96",null,"46","10",null,"1",null,null,null,null,this.divSearch02.form);
            obj.set_taborder("5");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"34","3.62%","24","53",null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Button("btnReset",null,"34","24","24","18",null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_SA_reset2");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Calendar("cal_periodFr1","432","10","100","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20200320");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("Static05","532","10","17","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("9");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_unit");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Calendar("cal_periodTo1","549","10","100","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20200320");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_01_00",null,null,"11","82","0","-6",null,null,null,null,this.divSearch02.form);
            obj.set_taborder("11");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Combo("cbo_periodType1","333","10","94","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("12");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("사용자정의");
            obj.set_value("");
            obj.set_index("5");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("sta_requestDeliveryDate","53.87%","10","6.91%","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("13");
            obj.set_text("입고요청일");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Combo("cbo_periodType2","764","11","94","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("14");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("사용자정의");
            obj.set_value("");
            obj.set_index("5");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Calendar("cal_periodFr2","863","11","100","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("15");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20200320");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("Static05_00","963","11","17","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("16");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_unit");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Calendar("cal_periodTo2","980","11","100","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("17");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20200320");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("sta_planDeliveryDate","18.59%","36","6.91%","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("18");
            obj.set_text("입고예정일");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Combo("cbo_periodType3","333","36","94","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("19");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("사용자정의");
            obj.set_value("");
            obj.set_index("5");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Calendar("cal_periodFr3","432","36","100","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("20");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20200320");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("Static05_01","532","36","17","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("21");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_unit");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Calendar("cal_periodTo3","549","36","100","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("22");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20200320");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("sta_product","655","36","103","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("23");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Button("btn_product",null,"36","22","20","253",null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_finder");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Edit("edt_product","764","36",null,"20","275",null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("24");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("sta_manufactId","0","35","103","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("26");
            obj.set_text("제작업체");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Button("btn_vendor",null,"35","22","20","996",null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("28");
            obj.set_cssclass("btn_WF_finder");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Edit("edt_vendor","96","35",null,"20","1018",null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("27");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_toolCode","title0:0","87","150","34",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_01_00",null,null,"9","37","21","11",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00",null,"413","20","37","0",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,461,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("TOM00301P.xfdl","lib::lib_tom.xjs");
        this.registerScript("TOM00301P.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 치공구 제작 의뢰 - Toll Code 조회(팝업)
         * 파일명 		: TOM00101P.xfdl
         * 작성자 		: 박현우
         * 작성일 		: 2021.02.01
         *
         * 설  명		: 치공구 제작 의뢰 - Toll Code 조회(팝업)
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.03.15	박현우   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.searchDiv = this.divSearch02.form;

        var p_strPlantid = '';
        var p_strPeriodType = '';
        var p_strPeriodFr = ''; //[입고기간]
        var p_strPeriodTo = ''; //[입고기간]
        var p_strProductId = ''; //[입고기간]
        var p_strProductName = '';

        this.productId = ''; //제품Id(조회조건)
        this.productVer = ''; //제품Ver(조회조건)
        this.vendorId = ''; //제작업체Id(조회조건)

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.p_strPlantid 		= this.nfn_nvl(this.parent.arg_siteId, "");	//Site코드
        	this.p_strPeriodType 	= this.nfn_nvl(this.parent.arg_periodType, ""); //Period타입
        	this.p_strPeriodFr 		= this.nfn_nvl(this.parent.arg_periodFr, ""); //시작일자
        	this.p_strPeriodTo 		= this.nfn_nvl(this.parent.arg_periodTo, ""); //종료일자
        	this.p_strProductId 	= this.nfn_nvl(this.parent.arg_productId, ""); //품목코드
        	this.p_strProductName 	= this.nfn_nvl(this.parent.arg_productName, ""); //품목명

        	//alert(this.p_strPlantid+'/'+this.p_strPeriodType+'/'+this.p_strPeriodFr+'/'+this.p_strPeriodTo+'/'+this.p_strProductId+'/'+this.p_strProductName);

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
        	this.ds_toolCode.clearData(); //첫번째 탭은 데이터 초기화 한다.

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 					this.nfn_nvl(this.gf_getEnterpriseId(), ""));
        	this.ds_search.setColumn(0, "PLANTID", 							this.nfn_nvl(this.searchDiv.cbo_siteId.value, ""));
        	this.ds_search.setColumn(0, "PRODUCTDEFID", 					this.nfn_nvl(this.productId, "")); //품목Id
        	this.ds_search.setColumn(0, "VENDORID", 						this.nfn_nvl(this.vendorId, "")); //제작업체Id
        	this.ds_search.setColumn(0, "P_REQUESTDATE_PERIODFR", 			this.nfn_nvl(this.searchDiv.cal_periodFr1.value, "")); //시작일자(의뢰일)
        	this.ds_search.setColumn(0, "P_REQUESTDATE_PERIODTO", 			this.nfn_nvl(this.searchDiv.cal_periodTo1.value, "")); //종료일자
        	this.ds_search.setColumn(0, "P_REQUESTDELIVERYDATE_PERIODFR", 	this.nfn_nvl(this.searchDiv.cal_periodFr2.value, "")); //시작일자(입고요청일)
        	this.ds_search.setColumn(0, "P_REQUESTDELIVERYDATE_PERIODTO", 	this.nfn_nvl(this.searchDiv.cal_periodTo2.value, "")); //종료일자
        	this.ds_search.setColumn(0, "P_PLANDELIVERYDATE_PERIODFR", 		this.nfn_nvl(this.searchDiv.cal_periodFr3.value, "")); //시작일자(입고예정일)
        	this.ds_search.setColumn(0, "P_PLANDELIVERYDATE_PERIODTO", 		this.nfn_nvl(this.searchDiv.cal_periodTo3.value, "")); //종료일자
        	this.ds_search.setColumn(0, "CURRENTLOGINID", 					this.tomfn_getUserId()); //사용자Id
        	this.ds_search.setColumn(0, "LANGUAGETYPE", 					this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", 							"selectToolRequestListForReceiptByToolList");

        	var sSvcID 			= "selectToolRequestListForReceiptByToolList";
        	var sController 	= "/tom00300/selectToolRequestListForReceiptByToolList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_toolCode=output";
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
        		return;
        	}

        	switch(trId) {
        		case "selectTomPlantList":	//[조회조건] Site Callback
        			this.searchDiv.cbo_siteId.set_value(this.p_strPlantid);
        			this.searchDiv.cbo_siteId.set_enable(false);
        			this.productId = this.p_strProductId;
        			this.searchDiv.edt_product.set_value(this.p_strProductName);
        			break;
        		case "selectToolRequestListForReceiptByToolList":
        			break;
        		default:
        	}
        };

        this.fn_callBack1 = function (trId, errCD, errMsg)
        {
        	this.searchDiv.cbo_periodType1.set_value("CUSTOM");
        	this.searchDiv.cal_periodFr1.set_value("");
        	this.searchDiv.cal_periodTo1.set_value("");
        }
        this.fn_callBack2 = function (trId, errCD, errMsg)
        {
        	this.searchDiv.cbo_periodType2.set_value("CUSTOM");
        	this.searchDiv.cal_periodFr2.set_value("");
        	this.searchDiv.cal_periodTo2.set_value("");
        }
        this.fn_callBack3 = function (trId, errCD, errMsg)
        {
        	this.searchDiv.cbo_periodType3.set_value(this.p_strPeriodType);
        	this.searchDiv.cal_periodFr3.set_value(this.p_strPeriodFr);
        	this.searchDiv.cal_periodTo3.set_value(this.p_strPeriodTo);
        }

        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
         /*
         * 기능(공통팝업) : '작업장' Text 조회
         */
        this.fn_openPop = function(svcId, popId, pArg)
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
        	oArg.arg_paramCols = this.gfn_getExtractArgument(pArg,"name");
        	oArg.arg_paramValues = this.gfn_getExtractArgument(pArg,"value");
        	oArg.arg_searchStr = "";

        	if(popId=="P00126"){ //품목코드 조회
        		oArg.arg_rtnCols = "PRODUCTDEFID|PRODUCTDEFNAME|PRODUCTDEFVERSION";
        	}else if(popId=="P00145"){ //거래처(협력업체) 조회
        		oArg.arg_rtnCols = "VENDORID|VENDORNAME";
        	}

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        }

        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "SCH_PRODUCT")
        	{
        		this.searchDiv.edt_product.set_value(rtn[1]);
        		this.productId = rtn[0]; //HIDDEN 필드
        		this.productVer = rtn[2]; //HIDDEN 필드
        	}else if(sPopupId == "SCH_VENDOR")
        	{
        		this.searchDiv.edt_vendor.set_value(rtn[1]);
        		this.vendorId = rtn[0]; //HIDDEN 필드
        	}
        }

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 기능 : 조회 조건 Load
         */
        this.fn_initCombo = function ()
        {
        	this.tomfn_getPeriodData("ds_periodType1","","fn_callBack1");
        	this.tomfn_getPeriodData("ds_periodType2","","fn_callBack2");
        	this.tomfn_getPeriodData("ds_periodType3","","fn_callBack3");

        	this.fn_initSiteCombo();
        }

        /*
         * 기능 : 'Site' 콤보 조회
         */
        this.fn_initSiteCombo = function ()
        {
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());

        	this.tomfn_setCustomQueryCmb(this.searchDiv.cbo_siteId // Object
        								, "selectTomPlantList,ALL,Y,A" // OPTION
        								, sArgs	// 추가 파라미터
        								, "fn_callBack"); //콜백함수 지정
        }

        /*
         * 기능 : 검색일자 변경시 검색구분을 [사용자지정]으로 변경
         */
        this.fn_changeCustom1 = function ()
        {
        	this.searchDiv.cbo_periodType1.set_value("CUSTOM");
        }
        this.fn_changeCustom2 = function ()
        {
        	this.searchDiv.cbo_periodType2.set_value("CUSTOM");
        }
        this.fn_changeCustom3 = function ()
        {
        	this.searchDiv.cbo_periodType3.set_value("CUSTOM");
        }

        /*
         * 기능 : 검색일자 바인딩 함수
         */
        this.fn_setDate1 = function (periodType)
        {
        	this.searchDiv.cal_periodFr1.set_value(this.ds_periodType1.getColumn(0,periodType+"_S"));
        	this.searchDiv.cal_periodTo1.set_value(this.ds_periodType1.getColumn(0,periodType+"_E"));
        }
        this.fn_setDate2 = function (periodType)
        {
        	this.searchDiv.cal_periodFr2.set_value(this.ds_periodType2.getColumn(0,periodType+"_S"));
        	this.searchDiv.cal_periodTo2.set_value(this.ds_periodType2.getColumn(0,periodType+"_E"));
        }
        this.fn_setDate3 = function (periodType)
        {
        	this.searchDiv.cal_periodFr3.set_value(this.ds_periodType3.getColumn(0,periodType+"_S"));
        	this.searchDiv.cal_periodTo3.set_value(this.ds_periodType3.getColumn(0,periodType+"_E"));
        }

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.btn_close_onclick = function(obj,e)
        {
        	this.opener.fv_rtnValue = "";
        	this.close();
        };

        this.btn_cancel_onclick = function(obj,e)
        {
        	this.opener.fv_rtnValue = "";
        	this.close();
        };

        //선택건 처리
        this.btn_apply_onclick = function(obj,e)
        {
        	if (this.ds_toolCode.rowcount==0)
            {
            	this.gfn_Message("NoSelections", "", "warning", "ok");
            	return;
            }

        	if (this.ds_toolCode.getCaseCount("CHK=='1'")==0)
            {
            	this.gfn_Message("NoSelections", "", "warning", "ok");
            	return;
            }

        	var rtnArray = new Array();
        	var index = 0;

        	var lv_rtnCols = "PRODUCTDEFID|PRODUCTDEFVERSION|PRODUCTDEFNAME|AREAID|AREANAME|REQUESTDATE|TOOLCODE|TOOLMAKETYPE|TOOLMAKETYPENAME|TOOLCATEGORYID|TOOLCATEGORY|TOOLFORMCODE|TOOLFORM|TOOLKINDID|TOOLKIND";
        	for(var j=0; j<this.ds_toolCode.rowcount; j++){
        		if(this.ds_toolCode.getColumn(j,"CHK")!="1") continue;
        		var colArray = new Array();
        		var colIdList = lv_rtnCols.split("|");
        		for (var i = 0; i < colIdList.length; i++)
        		{
        			colArray[i] = this.ds_toolCode.getColumn(j, colIdList[i]);
        		}
        		rtnArray[index] = colArray;
        		index++;
        	}

        	this.opener.fv_rtnValue = rtnArray;
        	this.close();
        };

        this.divSearch02_cbo_periodType1_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != "CUSTOM"){
        		this.fn_setDate1(e.postvalue);
        	}
        };

        this.divSearch02_cbo_periodType2_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != "CUSTOM"){
        		this.fn_setDate2(e.postvalue);
        	}
        };

        this.divSearch02_cbo_periodType3_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != "CUSTOM"){
        		this.fn_setDate3(e.postvalue);
        	}
        };

        this.tab_search_Tabpage1_btn_product_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.searchDiv.cbo_siteId.value);
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());
        	sArgs += this.gfn_setParam("P_PRODUCTDEFTYPE", "Product");

        	this.fn_openPop("SCH_PRODUCT","P00126", sArgs); //품목코드 조회
        };

        this.tab_search_Tabpage1_btn_vendor_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.searchDiv.cbo_siteId.value);

        	this.fn_openPop("SCH_VENDOR","P00145", sArgs); //제작처(협력업체) 조회
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_apply.addEventHandler("onclick",this.btn_apply_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.divSearch02.form.btnSearch.addEventHandler("onclick",this.fn_search,this);
            this.divSearch02.form.cal_periodFr1.addEventHandler("onchanged",this.fn_changeCustom1,this);
            this.divSearch02.form.cal_periodTo1.addEventHandler("onchanged",this.fn_changeCustom1,this);
            this.divSearch02.form.cbo_periodType1.addEventHandler("onitemchanged",this.divSearch02_cbo_periodType1_onitemchanged,this);
            this.divSearch02.form.cbo_periodType2.addEventHandler("onitemchanged",this.divSearch02_cbo_periodType2_onitemchanged,this);
            this.divSearch02.form.cal_periodFr2.addEventHandler("onchanged",this.fn_changeCustom2,this);
            this.divSearch02.form.cal_periodTo2.addEventHandler("onchanged",this.fn_changeCustom2,this);
            this.divSearch02.form.cbo_periodType3.addEventHandler("onitemchanged",this.divSearch02_cbo_periodType3_onitemchanged,this);
            this.divSearch02.form.cal_periodFr3.addEventHandler("onchanged",this.fn_changeCustom3,this);
            this.divSearch02.form.cal_periodTo3.addEventHandler("onchanged",this.fn_changeCustom3,this);
            this.divSearch02.form.btn_product.addEventHandler("onclick",this.tab_search_Tabpage1_btn_product_onclick,this);
            this.divSearch02.form.btn_vendor.addEventHandler("onclick",this.tab_search_Tabpage1_btn_vendor_onclick,this);
        };
        this.loadIncludeScript("TOM00301P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
