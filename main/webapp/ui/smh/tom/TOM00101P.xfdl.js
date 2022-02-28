(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TOM00101P");
            this.set_titletext("Tool Code 조회");
            this.set_cssclass("form_PopupBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,455);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_toolCode", this);
            obj._setContents("<ColumnInfo><Column id=\"TOOLNUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLCODE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLFORMCODE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLFORM\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLCATEGORYID\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLCATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLDETAILID\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLDETAIL\" type=\"STRING\" size=\"256\"/><Column id=\"FILMUSELAYER1\" type=\"STRING\" size=\"256\"/><Column id=\"FILMUSELAYER2\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLKINDID\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLKIND\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"ORDERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"OLB\" type=\"STRING\" size=\"256\"/><Column id=\"NETPNL\" type=\"STRING\" size=\"256\"/><Column id=\"DELIVERYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"SUMMARY\" type=\"STRING\" size=\"256\"/><Column id=\"SCALEX\" type=\"STRING\" size=\"256\"/><Column id=\"SCALEY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLCATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLCATEGORYDETAIL\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLCODE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02_02",null,null,"50","10","38","63",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,null,"70","28","38","35",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.set_cssclass("btn_pop_no");
            this.addChild(obj.name, obj);

            obj = new Button("btn_apply",null,null,"70","28","btn_cancel:5","35",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("확인");
            obj.set_cssclass("btn_pop_yes");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,null,"50","20","133","15",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","395","61","50","34",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("h34");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","0","82","20","84",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00",null,"19","20","42","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch02","20","19",null,"42","20",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("div_WF_search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"0","20","42","97",null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("5");
            obj.set_text("w\r\n18");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("sta_toolcategory","0","10","7.15%","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("1");
            obj.set_text("치공구 구분");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("sta_toolCategoryDetail","18.12%","10","7.15%","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("2");
            obj.set_text("치공구 형식");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Combo("cbo_toolcategoryId","sta_toolcategory:10","10",null,"20","sta_toolCategoryDetail:0",null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("0");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_type("filter");
            obj.set_text("");
            obj.set_value("전체");
            obj.set_index("0");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("sta_toolCode","450","10","7.15%","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("4");
            obj.set_text("치공구 코드");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("Static02","96","0","48","10",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("3");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","96",null,"46","11",null,"0",null,null,null,null,this.divSearch02.form);
            obj.set_taborder("6");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"8","3.62%","24","53",null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Button("btnReset",null,"8","24","24","18",null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_SA_reset2");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Combo("cbo_toolCategoryDetailId","326","10",null,"20","766",null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("9");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_type("filter");
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Edit("edt_toolCode","556","10",null,"20","536",null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("10");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_01_00",null,null,"11","42","1","-2",null,null,null,null,this.divSearch02.form);
            obj.set_taborder("11");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"-2","25","22","18",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("title0","20","61","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("치공구 Code 조회");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("OUTSOURCEDWAREHOUSEWEARLIST");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_toolCode","20","95",null,null,"0","73",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_autoenter("select");
            obj.set_fillareatype("none");
            obj.set_binddataset("ds_toolCode");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"134\"/><Column size=\"95\"/><Column size=\"28\"/><Column size=\"225\"/><Column size=\"0\"/><Column size=\"113\"/><Column size=\"59\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"115\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Tool 코드\"/><Cell col=\"1\" text=\"치공구 ID\"/><Cell col=\"2\" text=\"Ver\"/><Cell col=\"3\" text=\"치공구명\"/><Cell col=\"4\" text=\"LOTID---HIDDEN\"/><Cell col=\"5\" text=\"품목코드\"/><Cell col=\"6\" text=\"Rev.\"/><Cell col=\"7\" text=\"USECOUNT---HIDDEN\"/><Cell col=\"8\" text=\"TOTALUSEDCOUNT---HIDDEN\"/><Cell col=\"9\" text=\"TOTALCLEANCOUNT---HIDDEN\"/><Cell col=\"10\" text=\"TOTALREPAIRCOUNT---HIDDEN\"/><Cell col=\"11\" text=\"AREAID---HIDDEN\"/><Cell col=\"12\" text=\"AREANAME---HIDDEN\"/><Cell col=\"13\" text=\"DURABLESTATE---HIDDEN\"/><Cell col=\"14\" text=\"상태-(이회면에서입력해야한다면SetIsReadOnly를풀어준다.\"/><Cell col=\"15\" text=\"TOOLCATEGORYID---HIDDEN\"/><Cell col=\"16\" text=\"TOOL구분\"/><Cell col=\"17\" text=\"TOOLCATEGORYDETAILID---HIDDEN\"/><Cell col=\"18\" text=\"TOOL구분---HIDDEN\"/><Cell col=\"19\" text=\"TOOLDETAILID---HIDDEN\"/><Cell col=\"20\" text=\"TOOL유형\"/><Cell col=\"21\" text=\"USELAYER---HIDDEN\"/><Cell col=\"22\" text=\"TOOL종류\"/><Cell col=\"23\" text=\"의뢰일\"/><Cell col=\"24\" text=\"품목명\"/><Cell col=\"25\" text=\"합수\"/><Cell col=\"26\" text=\"SCALE X\"/><Cell col=\"27\" text=\"SCALE Y\"/></Band><Band id=\"body\"><Cell text=\"bind:TOOLNUMBER\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:TOOLCODE\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:TOOLVERSION\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:TOOLNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:LOTID\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:USECOUNT\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:TOTALUSEDCOUNT\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:TOTALCLEANCOUNT\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:TOTALREPAIRCOUNT\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:AREAID\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:DURABLESTATE\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:TOOLFORMCODE\" textAlign=\"center\"/><Cell col=\"15\" text=\"bind:TOOLCATEGORYID\" textAlign=\"left\"/><Cell col=\"16\" text=\"bind:TOOLCATEGORY\" textAlign=\"left\"/><Cell col=\"17\" text=\"bind:TOOLCATEGORYDETAILID\" textAlign=\"left\"/><Cell col=\"18\" text=\"bind:TOOLCATEGORYDETAIL\" textAlign=\"left\"/><Cell col=\"19\" text=\"bind:TOOLDETAILID\" textAlign=\"left\"/><Cell col=\"20\" text=\"bind:TOOLFORM\" textAlign=\"left\"/><Cell col=\"21\" text=\"bind:USELAYER\" textAlign=\"left\"/><Cell col=\"22\" text=\"bind:TOOLKIND\" textAlign=\"left\"/><Cell col=\"23\" text=\"bind:REQUESTDATE\" textAlign=\"center\"/><Cell col=\"24\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"25\" text=\"bind:SUMMARY\" textAlign=\"right\"/><Cell col=\"26\" text=\"bind:SCALEX\" textAlign=\"right\"/><Cell col=\"27\" text=\"bind:SCALEY\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_toolCode","155","61","150","34",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,455,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("TOM00101P.xfdl","lib::lib_tom.xjs");
        this.registerScript("TOM00101P.xfdl", function() {
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

        var p_strToolMakeType = '';
        var p_strPlantid = '';
        var p_strPeriodType = '';
        var p_strPeriodFr = '';
        var p_strPeriodTo = '';
        var p_strProductId = '';
        var p_strProductVer = '';
        var p_strProductName = '';

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.p_strToolMakeType 	= this.nfn_nvl(this.parent.arg_toolMakeType, "");	//TOOL구분
        	this.p_strPlantid 		= this.nfn_nvl(this.parent.arg_siteId, "");	//Site코드
        	this.p_strPeriodType 	= this.nfn_nvl(this.parent.arg_periodType, ""); //Period타입
        	this.p_strPeriodFr 		= this.nfn_nvl(this.parent.arg_periodFr, ""); //시작일자
        	this.p_strPeriodTo 		= this.nfn_nvl(this.parent.arg_periodTo, ""); //종료일자
        	this.p_strProductId 	= this.nfn_nvl(this.parent.arg_productId, ""); //품목코드
        	this.p_strProductVer 	= this.nfn_nvl(this.parent.arg_productVer, ""); //품목VER
        	this.p_strProductName 	= this.nfn_nvl(this.parent.arg_productName, ""); //품목명

        	//alert("팝업 :: "+this.p_strToolMakeType+'/'+this.p_strPlantid+'/'+this.p_strPeriodType+'/'+this.p_strPeriodFr+'/'+this.p_strPeriodTo+'/'+this.p_strProductId+'/'+this.p_strProductVer+'/'+this.p_strProductName);

        	if(this.p_strToolMakeType == 'Add'){
        		this.searchDiv.sta_toolCode.set_text('치공구ID');
        		//this.grd_toolCode.setFormatColProperty(0, "size", 0);
        	}else{ //LOT조회 쿼리로 분기된다.(증작/수정/수리)
        		this.searchDiv.sta_toolCode.set_text('TOOL 코드');
        		//this.grd_toolCode.setFormatColProperty(0, "size", 135);
        	}

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
        	this.ds_toolCode.clearData(); //Target Dataset clear
        	this.ds_search.clearData(); //Search Condition Dataset clear

        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 		this.nfn_nvl(this.gf_getEnterpriseId(), ""));
        	this.ds_search.setColumn(0, "PLANTID", 				this.nfn_nvl(this.p_strPlantid, ""));
        	this.ds_search.setColumn(0, "PRODUCTDEFID", 		this.nfn_nvl(this.p_strProductId, ""));
        	this.ds_search.setColumn(0, "TOOLCATEGORY", 		this.nfn_nvl(this.searchDiv.cbo_toolcategoryId.value, ""));
        	this.ds_search.setColumn(0, "TOOLCATEGORYDETAIL", 	this.nfn_nvl(this.searchDiv.cbo_toolCategoryDetailId.value, ""));
        	this.ds_search.setColumn(0, "TOOLCODE", 			this.nfn_nvl(this.searchDiv.edt_toolCode.value, ""));
        	this.ds_search.setColumn(0, "LANGUAGETYPE", 		this.nfn_nvl(this.gf_getLanguageType(), ""));

        	if(this.p_strToolMakeType == 'Add' || this.p_strToolMakeType == 'Repair' || this.p_strToolMakeType == 'Modify'){
        		this.ds_search.setColumn(0, "SQL_ID", "selectDurableLotToolListByToolList"); //수리/수정의 경우
        	}else{
        		this.ds_search.setColumn(0, "SQL_ID", "selectToolDetailCodeListByToolList"); //신규의 경우
        	}

        	var sSvcID 			= "selectToolCodeList";
        	var sController 	= "/tom00100/selectToolCodeList.do";
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
        		case "selectDurableClassIDByToolList":
        			var toolCategory = this.nfn_nvl(this.searchDiv.cbo_toolcategoryId.value, ""); //Tool구분값
        			this.fn_initToolCategoryDetailCombo(toolCategory); //Tool형식 콤보(상세내역)
        			break;
        		case "selectCodeClassIDListByToolList":
        			this.fn_search();
        			break;
        		case "selectDurableLotToolListByToolList":
        			break;
        		case "selectToolDetailCodeListByToolList":
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
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;
        }

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 기능 : 조회 조건 Load
         */
        this.fn_initCombo = function ()
        {
        	this.tomfn_getPeriodData("ds_periodType","","fn_callBack");

        	this.fn_initToolCategoryCombo();
        }

        /*
         * 기능 : 'TOOL구분' 콤보 조회
         */
        this.fn_initToolCategoryCombo = function ()
        {
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("ENTERPRISEID", 		this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("DURABLECLASSTYPE", 	"Tool");
        	sArgs += this.gfn_setParam("PLANTID", 			this.p_strPlantid);
        	sArgs += this.gfn_setParam("LANGUAGETYPE", 		this.gf_getLanguageType());

        	this.tomfn_setCustomQueryCmb(this.searchDiv.cbo_toolcategoryId // Object
        								, "selectDurableClassIDByToolList,ALL,Y,A" // OPTION
        								, sArgs	// 추가 파라미터
        								, "fn_callBack"); //콜백함수 지정
        }

        /*
         * 기능 : 'TOOL유형' 콤보 조회
         */
        this.fn_initToolCategoryDetailCombo = function (toolCategory)
        {
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("ENTERPRISEID", 		this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", 			this.p_strPlantid);
        	sArgs += this.gfn_setParam("DURABLECLASSID", 	toolCategory);
        	sArgs += this.gfn_setParam("LANGUAGETYPE", 		this.gf_getLanguageType());

        	this.tomfn_setCustomQueryCmb(this.searchDiv.cbo_toolCategoryDetailId // Object
        								, "selectCodeClassIDListByToolList,ALL,Y,A" // OPTION
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

        this.btn_apply_onclick = function(obj,e)
        {
        	if (this.ds_toolCode.rowcount==0)
            {
            	this.gfn_Message("NoSelections", "", "warning", "ok");
            	return;
            }
        	var productDefId = this.ds_toolCode.getColumn(this.ds_toolCode.rowposition, "PRODUCTDEFID");	//제품ID
        	var productDefVersion = this.ds_toolCode.getColumn(this.ds_toolCode.rowposition, "PRODUCTDEFVERSION"); //제품VER
        	var productDefName = this.ds_toolCode.getColumn(this.ds_toolCode.rowposition, "PRODUCTDEFNAME"); //제품명
        	var toolCategoryId = this.ds_toolCode.getColumn(this.ds_toolCode.rowposition, "TOOLCATEGORYID"); //영구성자재그룹ID(TOOL구분)
        	var toolCategoryDetailId = this.ds_toolCode.getColumn(this.ds_toolCode.rowposition, "TOOLCATEGORYDETAILID"); //TOOL구분(TOOLTYPE)
        	var toolFormCode = this.ds_toolCode.getColumn(this.ds_toolCode.rowposition, "TOOLFORMCODE"); //형식
        	var toolKindId = this.ds_toolCode.getColumn(this.ds_toolCode.rowposition, "TOOLKINDID"); //TOOL종류

        	var requestSequence = this.ds_toolCode.getColumn(this.ds_toolCode.rowposition, "REQUESTSEQUENCE"); //의뢰순번
        	var areaId = this.ds_toolCode.getColumn(this.ds_toolCode.rowposition, "AREAID"); //작업장ID
        	var areaName = this.ds_toolCode.getColumn(this.ds_toolCode.rowposition, "RECEIPTAREANAME"); //작업장명
        	var vendorId = this.ds_toolCode.getColumn(this.ds_toolCode.rowposition, "VENDORID"); //제작처ID

        	var vendorName = this.ds_toolCode.getColumn(this.ds_toolCode.rowposition, "VENDORNAME"); //제작처명
        	var qty = this.ds_toolCode.getColumn(this.ds_toolCode.rowposition, "QTY"); //의뢰수량
        	var oderQty = this.ds_toolCode.getColumn(this.ds_toolCode.rowposition, "ORDERQTY"); //수주량
        	var olb = this.ds_toolCode.getColumn(this.ds_toolCode.rowposition, "OLB"); //OLB
        	var netpnl = this.ds_toolCode.getColumn(this.ds_toolCode.rowposition, "NETPNL"); //NETPNL

        	var deliveryDate = this.ds_toolCode.getColumn(this.ds_toolCode.rowposition, "DELIVERYDATE"); //납기일자
        	var requestComment = this.ds_toolCode.getColumn(this.ds_toolCode.rowposition, "REQUESTCOMMENT"); //의뢰사유
        	var summary = this.ds_toolCode.getColumn(this.ds_toolCode.rowposition, "SUMMARY"); //합수
        	var scalex = this.ds_toolCode.getColumn(this.ds_toolCode.rowposition, "SCALEX"); //SCALEX
        	var scaley = this.ds_toolCode.getColumn(this.ds_toolCode.rowposition, "SCALEY"); //SCALEY

        	var toolCode = this.ds_toolCode.getColumn(this.ds_toolCode.rowposition, "TOOLCODE"); //TOOLCODE
        	var toolVersion = this.ds_toolCode.getColumn(this.ds_toolCode.rowposition, "TOOLVERSION"); //TOOLVERSION
        	var toolName = this.ds_toolCode.getColumn(this.ds_toolCode.rowposition, "TOOLNAME"); //TOOLNAME
        	var toolNumber = this.ds_toolCode.getColumn(this.ds_toolCode.rowposition, "TOOLNUMBER"); //TOOLNUMBER

        	//alert("[선택후이벤트]제작처 : "+vendorId+"/"+vendorName+"/작업장 : "+areaId+"/"+areaName+"/납기일자 : "+deliveryDate);
        	if(vendorId=='X')vendorId='';
        	if(vendorName=='X')vendorName='';
        	if(areaId=='X')areaId='';
        	if(areaName=='X')areaName='';
        	if(deliveryDate=='X')deliveryDate='';

        	this.opener.fv_rtnValue = productDefId+"^"+productDefVersion+"^"+productDefName+"^"+toolCategoryId+"^"+toolFormCode+"^"+toolKindId+"^"
        							+ requestSequence+"^"+areaId+"^"+areaName+"^"+vendorId+"^"
        							+ vendorName+"^"+qty+"^"+oderQty+"^"+olb+"^"+netpnl+"^"
        							+ deliveryDate+"^"+requestComment+"^"+summary+"^"+scalex+"^"+scaley+"^"
        							+ toolCode+"^"+toolVersion+"^"+toolName+"^"+toolNumber;
        	//alert(this.opener.fv_rtnValue);
        	this.close();
        };

        this.divSearch02_cbo_toolcategoryId_onitemchanged = function(obj,e)
        {
        	var toolCategory = this.nfn_nvl(this.searchDiv.cbo_toolcategoryId.value, ""); //Tool구분값
        	this.fn_initToolCategoryDetailCombo(toolCategory); //Tool형식 콤보(상세내역)
        };

        this.divSearch02_btnReset_onclick = function(obj,e)
        {
        	this.fn_initToolCategoryCombo();
        	this.searchDiv.edt_toolCode.set_value('');
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_apply.addEventHandler("onclick",this.btn_apply_onclick,this);
            this.divSearch02.form.cbo_toolcategoryId.addEventHandler("onitemchanged",this.divSearch02_cbo_toolcategoryId_onitemchanged,this);
            this.divSearch02.form.btnSearch.addEventHandler("onclick",this.fn_search,this);
            this.divSearch02.form.btnReset.addEventHandler("onclick",this.divSearch02_btnReset_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.grd_toolCode.addEventHandler("oncelldblclick",this.btn_apply_onclick,this);
        };
        this.loadIncludeScript("TOM00101P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
