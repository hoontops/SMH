(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TOM00701P");
            this.set_titletext("Tool Code 조회");
            this.set_cssclass("form_PopupBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,461);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_toolCode", this);
            obj._setContents("<ColumnInfo><Column id=\"RECEIPTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTUSER\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTUSERID\" type=\"STRING\" size=\"256\"/><Column id=\"REPAIRVENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"REPAIRVENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTDURABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLNUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLNUMBER3\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTDURABLELOTID3\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTAREA\" type=\"STRING\" size=\"256\"/><Column id=\"SENDAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"SENDAREA\" type=\"STRING\" size=\"256\"/><Column id=\"REPAIRFINISHDATE\" type=\"STRING\" size=\"256\"/><Column id=\"FINISHERID\" type=\"STRING\" size=\"256\"/><Column id=\"FINISHER\" type=\"STRING\" size=\"256\"/><Column id=\"HORIZONTAL\" type=\"STRING\" size=\"256\"/><Column id=\"VERTICAL\" type=\"STRING\" size=\"256\"/><Column id=\"WEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"THEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"POLISHTHICKNESS\" type=\"STRING\" size=\"256\"/><Column id=\"PREVTOTALPOLISHTHICKNESS\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALPOLISHTHICKNESS\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTHICKNESS\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"SENDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"SENDSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLCODE\" type=\"STRING\" size=\"256\"/><Column id=\"POLISH\" type=\"STRING\" size=\"256\"/><Column id=\"PREVTOOLVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLREPAIRTYPEID\" type=\"STRING\" size=\"256\"/><Column id=\"MAKEVENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"MAKEVENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"REPAIRDESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLFORMCODE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLFORM\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLTYPEID\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLKINDID\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLKIND\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REPAIRRESULT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"P_REQUESTDATE_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"P_REQUESTDATE_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"P_REQUESTDELIVERYDATE_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"P_REQUESTDELIVERYDATE_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"P_PLANDELIVERYDATE_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"P_PLANDELIVERYDATE_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENTLOGINID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"SENDAREAID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02_02",null,null,"50","10","58","48",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,null,"70","28","49","20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.set_cssclass("btn_pop_no");
            this.addChild(obj.name, obj);

            obj = new Button("btn_apply",null,null,"70","28","132","20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.set_cssclass("btn_pop_yes");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","54","0","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,null,"50","20","152","0",null,null,null,null,this);
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

            obj = new Static("Static02_01_00_00",null,"19","20","67","226",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"-3","25","25","17",null,null,null,null,null,this);
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

            obj = new Grid("grd_toolCode","20","121",null,null,"20","57",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_autoenter("select");
            obj.set_fillareatype("none");
            obj.set_binddataset("ds_toolCode");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"87\"/><Column size=\"28\"/><Column size=\"130\"/><Column size=\"78\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"65\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"69\"/><Column size=\"59\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"82\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"Tool 코드\"/><Cell col=\"2\" text=\"이전 Tool 코드\"/><Cell col=\"3\" text=\"치공구 ID\"/><Cell col=\"4\" text=\"Rev.\"/><Cell col=\"5\" text=\"치공구명\"/><Cell col=\"6\" text=\"품목코드\"/><Cell col=\"7\" text=\"품목명\"/><Cell col=\"8\" text=\"Tool구분아이디---HIDDEN\"/><Cell col=\"9\" text=\"TOOL 구분\"/><Cell col=\"10\" text=\"Tool유형아이디---HIDDEN\"/><Cell col=\"11\" text=\"TOOL 유형\"/><Cell col=\"12\" text=\"Tool유형아이디---HIDDEN\"/><Cell col=\"13\" text=\"TOOL 종류\"/><Cell col=\"14\" text=\"연마여부\"/><Cell col=\"15\" text=\"수리요청사항\"/><Cell col=\"16\" text=\"RECEIPTAREAID---HIDDEN\"/><Cell col=\"17\" text=\"입고작업장\"/><Cell col=\"18\" text=\"SENDAREAID---HIDDEN\"/><Cell col=\"19\" text=\"출고작업장\"/><Cell col=\"20\" text=\"수리완료일\"/><Cell col=\"21\" text=\"FINISHERID---HIDDEN\"/><Cell col=\"22\" text=\"출고자\"/><Cell col=\"23\" text=\"무게 (g)\"/><Cell col=\"24\" text=\"가로\"/><Cell col=\"25\" text=\"세로\"/><Cell col=\"26\" text=\"높이\"/><Cell col=\"27\" text=\"연마두께\"/><Cell col=\"28\" text=\"수리전 연마두께누적\"/><Cell col=\"29\" text=\"CREATEDTHICKNESS---HIDDEN\"/><Cell col=\"30\" text=\"REQUESTDATE---HIDDEN\"/><Cell col=\"31\" text=\"REQUESTSEQUENCE---HIDDEN\"/><Cell col=\"32\" text=\"SENDDATE---HIDDEN\"/><Cell col=\"33\" text=\"SENDSEQUENCE---HIDDEN\"/><Cell col=\"34\" text=\"TOOLCODE---HIDDEN\"/><Cell col=\"35\" text=\"POLISH---HIDDEN\"/><Cell col=\"36\" text=\"PREVTOOLVERSION---HIDDEN\"/><Cell col=\"37\" text=\"MAKEVENDORID---HIDDEN\"/><Cell col=\"38\" text=\"MAKEVENDOR---HIDDEN\"/><Cell col=\"39\" text=\"REQUESTDATE\"/><Cell col=\"40\" text=\"REQUESTSEQUENCE\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" textAlign=\"left\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:NEXTDURABLELOTID3\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:TOOLNUMBER3\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:DURABLEDEFID\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:TOOLVERSION\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:TOOLNAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:PRODUCTDEFID\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:TOOLCATEGORYID\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:TOOLTYPE\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:TOOLCATEGORYDETAILID\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:TOOLFORM\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:TOOLDETAILID\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:TOOLKIND\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:POLISH\" textAlign=\"center\" displaytype=\"checkboxcontrol\" edittype=\"none\"/><Cell col=\"15\" text=\"bind:REPAIRDESCRIPTION\" textAlign=\"left\"/><Cell col=\"16\" text=\"bind:RECEIPTAREAID\" textAlign=\"left\"/><Cell col=\"17\" text=\"bind:RECEIPTAREA\" textAlign=\"left\"/><Cell col=\"18\" text=\"bind:SENDAREAID\" textAlign=\"left\"/><Cell col=\"19\" text=\"bind:SENDAREA\" textAlign=\"left\"/><Cell col=\"20\" text=\"bind:REPAIRFINISHDATE\" textAlign=\"left\"/><Cell col=\"21\" text=\"bind:FINISHERID\" textAlign=\"left\"/><Cell col=\"22\" text=\"bind:FINISHER\" textAlign=\"left\"/><Cell col=\"23\" text=\"bind:WEIGHT\" textAlign=\"left\"/><Cell col=\"24\" text=\"bind:HORIZONTAL\" textAlign=\"left\"/><Cell col=\"25\" text=\"bind:VERTICAL\" textAlign=\"left\"/><Cell col=\"26\" text=\"bind:THEIGHT\" textAlign=\"left\"/><Cell col=\"27\" text=\"bind:POLISHTHICKNESS\" textAlign=\"left\"/><Cell col=\"28\" text=\"bind:PREVTOTALPOLISHTHICKNESS\" textAlign=\"left\"/><Cell col=\"29\" text=\"bind:CREATEDTHICKNESS\" textAlign=\"left\"/><Cell col=\"30\" text=\"bind:REQUESTDATE\" textAlign=\"left\"/><Cell col=\"31\" text=\"bind:REQUESTSEQUENCE\" textAlign=\"left\"/><Cell col=\"32\" text=\"bind:SENDDATE\" textAlign=\"left\"/><Cell col=\"33\" text=\"bind:SENDSEQUENCE\" textAlign=\"left\"/><Cell col=\"34\" text=\"bind:TOOLCODE\" textAlign=\"left\"/><Cell col=\"35\" text=\"bind:POLISH\" textAlign=\"left\"/><Cell col=\"36\" text=\"bind:PREVTOOLVERSION\" textAlign=\"left\"/><Cell col=\"37\" text=\"bind:MAKEVENDORID\" textAlign=\"left\"/><Cell col=\"38\" text=\"bind:MAKEVENDOR\" textAlign=\"left\"/><Cell col=\"39\" text=\"bind:REQUESTDATE\" textAlign=\"left\"/><Cell col=\"40\" text=\"bind:REQUESTSEQUENCE\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch02","20","19",null,"68","20",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("div_WF_search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"2","20","70","93",null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("3");
            obj.set_text("w\r\n18");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("sta_site","0","10","7.15%","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("1");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Button("btn_area","749","11","22","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_finder");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("sta_area","506","11","91","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("9");
            obj.set_text("입고 작업장");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Edit("edt_area","sta_area:10","11",null,"20","btn_area:0",null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("10");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Button("btn_product",null,"11","22","20","sta_area:0",null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_finder");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("sta_product","234","11","98","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("7");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Edit("edt_product","sta_product:10","11",null,"20","btn_product:0",null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("8");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Combo("cbo_siteId","sta_site:22","10",null,"20","sta_product:0",null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("0");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("Static02","93","0","48","10",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("2");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","93",null,"46","10",null,"1",null,null,null,null,this.divSearch02.form);
            obj.set_taborder("4");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"38","3.61%","24","12",null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_01_00",null,null,"11","82","1","-8",null,null,null,null,this.divSearch02.form);
            obj.set_taborder("6");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("sta_area2","506","sta_area:4","91","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("13");
            obj.set_text("출고 작업장");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Button("btn_area2","749","35","22","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_finder");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Edit("edt_area2","sta_area2:10","35",null,"20","btn_area2:0",null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("14");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_toolCode","title0:0","87","150","34",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_01_00",null,null,"9","37","40","11",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00",null,"413","20","37","20",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"20","20","67","0",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("w\r\n18");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1040,461,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("TOM00701P.xfdl","lib::lib_tom.xjs");
        this.registerScript("TOM00701P.xfdl", function() {
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

        var p_strSiteId = '';
        var p_strAreaId = '';
        var p_strAreaName = '';
        var p_strProductId = '';
        var p_strProductVer = '';
        var p_strProductName = '';

        this.productId = ''; //제품Id(조회조건)
        this.productVer = ''; //제품Ver(조회조건)
        this.areaId = ''; //입고 작업장Id(조회조건)
        this.areaId2 = ''; //출고 작업장Id(조회조건)

        //공통팝업:검색키구별값
        this.areaKeyType = '1'; //1:입고작업장, 2:출고작업장

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.p_strSiteId 		= this.nfn_nvl(this.parent.arg_siteId, "");	//SiteId
        	this.p_strAreaId 		= this.nfn_nvl(this.parent.arg_areaId, "");	//작업장Id
        	this.p_strAreaName 		= this.nfn_nvl(this.parent.arg_areaName, ""); //작업장명
        	this.p_strProductId 	= this.nfn_nvl(this.parent.arg_productId, ""); //품목코드
        	this.p_strProductVer 	= this.nfn_nvl(this.parent.arg_productVer, ""); //품목Ver
        	this.p_strProductName 	= this.nfn_nvl(this.parent.arg_productName, ""); //품목명

        	//alert(this.p_strSiteId+'/'+this.p_strAreaId+'/'+this.p_strAreaName+'/'+this.p_strProductId+'/'+this.p_strProductVer+'/'+this.p_strProductName);

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

        	//입고작업장명이 공백이면 작업장Id 공백 처리
        	if(this.searchDiv.edt_area.value=='') {
        		this.areaId = '';
        	}

        	//춝고작업장명이 공백이면 작업장Id 공백 처리
        	if(this.searchDiv.edt_area2.value=='') {
        		this.areaId2 = '';
        	}

        	//품목코드명이 공백이면 코드/버젼 공백 처리
        	if(this.searchDiv.edt_product.value=='') {
        		this.productId = '';
        		this.productVer = '';
        	}

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 					this.nfn_nvl(this.gf_getEnterpriseId(), ""));
        	this.ds_search.setColumn(0, "PLANTID", 							this.nfn_nvl(this.searchDiv.cbo_siteId.value, ""));
        	this.ds_search.setColumn(0, "PRODUCTDEFID", 					this.nfn_nvl(this.productId, "")); //품목Id
        	this.ds_search.setColumn(0, "RECEIPTAREAID",					this.nfn_nvl(this.areaId, "")); //입고작업장Id
        	this.ds_search.setColumn(0, "SENDAREAID",						this.nfn_nvl(this.areaId2, "")); //출고작업장Id
        	this.ds_search.setColumn(0, "CURRENTLOGINID", 					this.tomfn_getUserId()); //사용자Id
        	this.ds_search.setColumn(0, "LANGUAGETYPE", 					this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", 							"selectRepairToolResultListForReceiptByToolList");

        	var sSvcID 			= "selectRepairToolResultListForReceiptByToolList";
        	var sController 	= "/tom00700/selectRepairToolResultListForReceiptByToolList.do";
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
        			this.searchDiv.cbo_siteId.set_value(this.p_strSiteId);
        			this.searchDiv.cbo_siteId.set_enable(false);
        			this.productId = this.p_strProductId;
        			this.productVer = this.p_strProductVer;
        			this.searchDiv.edt_product.set_value(this.p_strProductName);
        			this.areaId = this.p_strAreaId;
        			this.searchDiv.edt_area.set_value(this.p_strAreaName);
        			break;
        		case "selectRepairToolResultListForReceiptByToolList":
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

        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = popId;
        	oArg.arg_popupNm = "";
        	oArg.arg_paramCols = this.gfn_getExtractArgument(pArg,"name");
        	oArg.arg_paramValues = this.gfn_getExtractArgument(pArg,"value");
        	oArg.arg_searchStr = "";

        	if(popId=="P00126"){ //품목코드 조회
        		oArg.arg_searchStr = "PRODUCTDEFID="+this.searchDiv.edt_product.value;//조회조건의 품목명
        		oArg.arg_rtnCols = "PRODUCTDEFID|PRODUCTDEFNAME|PRODUCTDEFVERSION";
        	}else if(popId=="P00063"){ //작업장조회 조회
        		if(this.areaKeyType=='1'){
        			oArg.arg_searchStr = "AREANAME="+this.nfn_nvl(this.searchDiv.edt_area.value, "");//조회조건의 입고작업장 엔터
        		}else if(this.areaKeyType=='2'){
        			oArg.arg_searchStr = "AREANAME="+this.nfn_nvl(this.searchDiv.edt_area2.value, "");//조회조건의 출고작업장 엔터
        		}
        		oArg.arg_rtnCols = "AREAID|AREANAME";
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
        	}else if(sPopupId == "SCH_AREA")
        	{
        		this.searchDiv.edt_area.set_value(rtn[1]);
        		this.areaId = rtn[0];
        	}else if(sPopupId == "SCH_AREA2")
        	{
        		this.searchDiv.edt_area2.set_value(rtn[1]);
        		this.areaId2 = rtn[0];
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

        	var lv_rtnCols = "RECEIPTDATE|RECEIPTSEQUENCE|RECEIPTUSER|RECEIPTUSERID|REPAIRVENDOR|"+ //5
        					 "REPAIRVENDORID|TOOLNUMBER|TOOLNAME|PRODUCTDEFID|PRODUCTDEFNAME|"+ //5
        					 "TOOLVERSION|RECEIPTAREAID|RECEIPTAREA|SENDAREAID|SENDAREA|"+ //5
        					 "REPAIRFINISHDATE|FINISHERID|FINISHER|HORIZONTAL|VERTICAL|"+ //5
        					 "WEIGHT|THEIGHT|POLISHTHICKNESS|PREVTOTALPOLISHTHICKNESS|TOTALPOLISHTHICKNESS|"+ //5
        					 "CREATEDTHICKNESS|REQUESTDATE|REQUESTSEQUENCE|SENDDATE|SENDSEQUENCE|"+ //5
        					 "TOOLCODE|POLISH|PREVTOOLVERSION|TOOLREPAIRTYPEID|MAKEVENDORID|"+ //5
        					 "MAKEVENDOR|REPAIRDESCRIPTION|TOOLFORMCODE|TOOLFORM|TOOLTYPEID|"+ //5
        					 "TOOLTYPE|TOOLKINDID|TOOLKIND|CHK|"; //4
        	for(var j=0; j<this.ds_toolCode.rowcount; j++){
        		if(this.ds_toolCode.getColumn(j,"CHK")!="1") continue;
        		var colArray = new Array();
        		var colIdList = lv_rtnCols.split("|");
        		for (var i = 0; i < colIdList.length; i++)
        		{
        			colArray[i] = this.ds_toolCode.getColumn(j, colIdList[i]);
        		}
        		colArray[44] = this.tomfn_getUserId(); //USERID
        		colArray[45] = this.tomfn_getUserNm(); //SENDOR
        		colArray[46] = this.ds_toolCode.getColumn(j, "PRODUCTDEFVERSION"); 	//PRODUCTDEFVERSION
        		colArray[47] = this.ds_toolCode.getColumn(j, "DURABLEDEFID"); 		//DURABLEDEFID...20210415/PHW/APPENDED
        		colArray[48] = this.ds_toolCode.getColumn(j, "DURABLEDEFVERSION"); 	//DURABLEDEFVERSION...//20210415/PHW/APPENDED
        		colArray[49] = this.ds_toolCode.getColumn(j, "REPAIRRESULT"); 		//REPAIRRESULT...//20210416/PHW/APPENDED
        		colArray[50] = this.ds_toolCode.getColumn(j, "NEXTDURABLELOTID"); 	//2021-06-09 / 수정의경우 NEXTDURABLELOTID 를 앞화면에 보내준다.
        		colArray[51] = this.ds_toolCode.getColumn(j, "TOOLMAKETYPE"); 		//2021-06-10 /
        		colArray[52] = this.ds_toolCode.getColumn(j, "TOOLNUMBER3"); 		//2021-06-17 /
        		colArray[53] = this.ds_toolCode.getColumn(j, "NEXTDURABLELOTID3");	//2021-06-18 /

        		colArray[54] = this.ds_toolCode.getColumn(j, "REPAIRTRTYPE");		//2021-06-29 / 1:수정출고,2:수리출고

        		//alert(colArray[49]);

        		rtnArray[index] = colArray;
        		index++;
        	}

        	this.opener.fv_rtnValue = rtnArray;
        	this.close();
        };



        this.divSearch02_btn_product_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.searchDiv.cbo_siteId.value);
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());
        	sArgs += this.gfn_setParam("P_PRODUCTDEFTYPE", "Product");

        	this.fn_openPop("SCH_PRODUCT","P00126", sArgs); //품목코드 조회
        };

        this.divSearch02_btn_area_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.searchDiv.cbo_siteId.value);
        	sArgs += this.gfn_setParam("CURRENTLOGINID", this.gf_getUserAcnt()); //로그인 ID
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());

        	this.areaKeyType = '1';

        	this.fn_openPop("SCH_AREA","P00063", sArgs); //입고 작업장 조회
        };

        this.divSearch02_btn_area2_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.searchDiv.cbo_siteId.value);
        	sArgs += this.gfn_setParam("CURRENTLOGINID", this.gf_getUserAcnt()); //로그인 ID
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());

        	this.areaKeyType = '2';

        	this.fn_openPop("SCH_AREA2","P00063", sArgs); //출고 작업장 조회
        };

        this.divSearch02_btn_reset2_onclick = function(obj,e)
        {
        	this.ds_toolCode.clearData();
        	var strCnt = 'Count : <fc v="#f31d24">0</fc><fc v="#999999"></fc>';
        	this.searchDiv.sta_cnt_ds_toolCode.set_text(strCnt);

        	this.searchDiv.edt_product.set_value('');
        	this.searchDiv.edt_area.set_value('');
        	this.searchDiv.edt_area2.set_value('');
        	this.productId = '';
        	this.productVer = '';
        	this.areaId = '';
        	this.areaId2 = '';
        };

        this.divSearch02_edt_product_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.divSearch02_btn_product_onclick();
        	}
        };

        this.divSearch02_edt_area_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.areaKeyType = "1";
        		this.divSearch02_btn_area_onclick();
        	}
        };

        this.divSearch02_edt_area2_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.areaKeyType = "2";
        		this.divSearch02_btn_area2_onclick();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_apply.addEventHandler("onclick",this.btn_apply_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.divSearch02.form.btn_area.addEventHandler("onclick",this.divSearch02_btn_area_onclick,this);
            this.divSearch02.form.edt_area.addEventHandler("onkeydown",this.divSearch02_edt_area_onkeydown,this);
            this.divSearch02.form.btn_product.addEventHandler("onclick",this.divSearch02_btn_product_onclick,this);
            this.divSearch02.form.edt_product.addEventHandler("onkeydown",this.divSearch02_edt_product_onkeydown,this);
            this.divSearch02.form.btnSearch.addEventHandler("onclick",this.fn_search,this);
            this.divSearch02.form.btn_area2.addEventHandler("onclick",this.divSearch02_btn_area2_onclick,this);
            this.divSearch02.form.edt_area2.addEventHandler("onkeydown",this.divSearch02_edt_area2_onkeydown,this);
        };
        this.loadIncludeScript("TOM00701P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
