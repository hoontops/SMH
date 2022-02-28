(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS00210M");
            this.set_titletext("사이트등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
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
            obj = new Div("div_search","0.00%","36",null,"42","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_search");
            obj.set_background("rgba(247,247,247,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","21","10","70","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("회사");
            obj.set_tooltiptext("회사");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static13","0%","0",null,"10","0%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","0%","-1",null,"43","97.83%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04","0%",null,null,"10","76.88%","0",null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06","10.24%","1",null,null,"88.66%","-1",null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_enterpriseid","103","10","110","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00","233","10","70","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("사이트");
            obj.set_tooltiptext("사이트");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_site","315","10","110","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"8","60","20","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear",null,"8","60","20","76",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.addChild(obj.name, obj);

            obj = new Static("Static78","0.00%","27",null,"9","1.09%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","10","6","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_searchOpen");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","40","6","145","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("업무화면명(자동)");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.name,\"MENU_NM\")");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:2","6","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_favorite");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","0","78",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","211","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("사이트 현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("사이트 현황");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_basSite","0","34",null,null,"0","10",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_basPlant");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"120\"/><Column size=\"250\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"160\"/><Column size=\"98\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"decoratetext\" text=\"&lt;fc v=&apos;red&apos;&gt;*&lt;/fc&gt;사이트ID\" tooltiptext=\"사이트ID\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"decoratetext\" text=\"&lt;fc v=&apos;red&apos;&gt;*&lt;/fc&gt;사이트명(한글)\" tooltiptext=\"사이트명(한글)\" textAlign=\"center\"/><Cell col=\"2\" text=\"&lt;fc v=&apos;red&apos;&gt;*&lt;/fc&gt;사이트명(영문)\" tooltiptext=\"사이트명(영문)\" displaytype=\"decoratetext\" textAlign=\"center\"/><Cell col=\"3\" text=\"&lt;fc v=&apos;red&apos;&gt;*&lt;/fc&gt;회사\" displaytype=\"decoratetext\" tooltiptext=\"회사\" textAlign=\"center\"/><Cell col=\"4\" text=\"언어\" tooltiptext=\"언어\" textAlign=\"center\"/><Cell col=\"5\" text=\"비고\" tooltiptext=\"비고\" textAlign=\"center\"/><Cell col=\"6\" text=\"&lt;fc v=&apos;red&apos;&gt;*&lt;/fc&gt;유효상태\" tooltiptext=\"유효상태\" displaytype=\"decoratetext\" textAlign=\"center\"/></Band><Band id=\"body\"><Cell text=\"bind:PLANTID\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"1\" text=\"bind:PLANTNAME_KR\" textAlign=\"left\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"2\" textAlign=\"left\" text=\"bind:PLANTNAME_US\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:ENTERPRISEID\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_enterprise\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"4\" text=\"bind:LANGUAGE\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,LanguageType,,Y,Y\"/><Cell col=\"5\" text=\"bind:DESCRIPTION\" textAlign=\"left\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"6\" text=\"bind:VALIDSTATE\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,ValidState,,Y,Y\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_basPlant","219","0","140","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"7","60","20","66",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_text("취소");
            obj.set_tooltiptext("취소");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"7","60","20","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("저장");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_addRow",null,"7","60","20","198",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_text("행추가");
            obj.set_tooltiptext("행추가");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_deleteRow",null,"7","60","20","132",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_text("행삭제");
            obj.set_tooltiptext("행삭제");
            this.div_work.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAS00210M.xfdl","lib::lib_bas.xjs");
        this.registerScript("BAS00210M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: SM 상선 myHR 고도화
         * 업무명 		: 회사등록
         * 파일명 		: BAS00110M.xfdl
         * 작성자 		: 정우영
         * 작성일 		: 2022.02.17
         * 설  명		: 회사에 대한 정보를 등록하고 관리하는 화면
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2022.02.17	정우영   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/


        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        //기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;

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

        	// 회사콤보 데이터 조회
        	this.fn_initCombo();

        	// 조회조건 초기화
        	this.fn_formInit();
        };

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
        	this.ds_search.setColumn(0, "ENTERPRISEID", this.div_search.form.cbo_enterpriseid.value);
        	this.ds_search.setColumn(0, "PLANTID", this.div_search.form.cbo_site.value);

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
        	var strColIdList = "PLANTID,PLANTNAME_KR,PLANTNAME_US,ENTERPRISEID,VALIDSTATE";
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
         * 기능 : 취소
         */
        this.fn_cancel = function(obj,e)
        {
        	//데이터 미존재시 return
        	if (this.ds_basPlant.rowcount < 1) return;
            this.ds_basPlant.reset();
        };

        /*
         * 기능 : 추가
         */
        this.fn_addRow = function(obj,e)
        {
        	var dsObj = this.ds_basPlant;
        	if(dsObj == null) return;
        	var row = dsObj.insertRow(dsObj.rowposition+1);

        	/* KEY컬럼 기본세팅 */
        	dsObj.setColumn(row,"VALIDSTATE","Valid");	//Validate
        };

        /*
         * 기능 : 삭제
         */
        this.fn_deleteRow = function (obj, e)
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

        /*
         * 기능 : 초기화
         */
        this.fn_searchClear = function (obj, e)
        {
        	this.fn_formInit();
        }

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
         * 회사 및 사이트는 Session값으로 세팅
         */
        this.fn_formInit = function()
        {
        	this.div_search.form.cbo_enterpriseid.set_value(this.gf_getEnterpriseId());
        	this.div_search.form.cbo_site.set_value(this.gf_getSiteType());
        }

        /*
         * 검색조건 콤보박스 기본값 설정
         */
        this.fn_initCombo = function ()
        {
        	this.basfn_setCustomQueryCmb(this.div_search.form.cbo_enterpriseid // Object
        								, "selectEnterpriseList,SEL,Y,A"       // Option
        								, null);

        	this.basfn_setCustomQueryCmb(this.div_search.form.cbo_site // Object
        								, "selectSiteList,ALL,Y,A"     // Option
        								, null);	                   // 추가 파라미터

        	//그리드용 ComboDataset
        	var sSvcID 			= "selectCustomQueryEnterprise";
        	var sController 	= "/basCommon/selectCustomQuery.do";
        	var sInDatasets   	= "";
        	var sOutDatasets  	= "ds_enterprise=output";
        	var sArgs 		  	= "";
        	sArgs 			+= this.gfn_setParam("SQL_ID", "selectEnterpriseList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, false);
        }


        /**************************************************************************
         * 8. 이벤트
         **************************************************************************/
        this.fn_grdonEenterDown = function(obj,e)
        {
        	// 엔터키 누르면 다음 셀로 이동
        	obj.moveToNextCell();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_search.form.Static00.addEventHandler("onclick",this.div_search_Static00_onclick,this);
            this.div_search.form.Static00_00.addEventHandler("onclick",this.div_search_Static00_onclick,this);
            this.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.grd_basSite.addEventHandler("onenterdown",this.fn_grdonEenterDown,this);
            this.div_work.form.btn_cancel.addEventHandler("onclick",this.fn_cancel,this);
            this.div_work.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_work.form.btn_addRow.addEventHandler("onclick",this.fn_addRow,this);
            this.div_work.form.btn_deleteRow.addEventHandler("onclick",this.fn_deleteRow,this);
        };
        this.loadIncludeScript("BAS00210M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
