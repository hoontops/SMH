(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS00110M");
            this.set_titletext("회사등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
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

            obj = new Combo("cmb_enterpriseid","103","10","110","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
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
            obj.set_text("회사 현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("회사 현황");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_basEnterprise","0","34",null,null,"0","10",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_basEnterprise");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"300\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"decoratetext\" text=\"&lt;fc v=&apos;red&apos;&gt;*&lt;/fc&gt;회사ID\" tooltiptext=\"회사ID\"/><Cell col=\"1\" displaytype=\"decoratetext\" text=\"&lt;fc v=&apos;red&apos;&gt;*&lt;/fc&gt;회사명\" tooltiptext=\"회사명\"/><Cell col=\"2\" text=\"주소\" tooltiptext=\"주소\"/><Cell col=\"3\" text=\"전화번호\" tooltiptext=\"전화번호\"/><Cell col=\"4\" text=\"팩스번호\" tooltiptext=\"팩스번호\"/><Cell col=\"5\" text=\"&lt;fc v=&apos;red&apos;&gt;*&lt;/fc&gt;유효상태\" tooltiptext=\"유효상태\" displaytype=\"decoratetext\"/></Band><Band id=\"body\"><Cell text=\"bind:ENTERPRISEID\" edittype=\"text\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:ENTERPRISENAME\" edittype=\"text\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:ADDRESS\" textAlign=\"left\" edittype=\"text\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:PHONE\" edittype=\"text\" displaytype=\"text\"/><Cell col=\"4\" text=\"bind:FAXNO\" edittype=\"text\" displaytype=\"text\"/><Cell col=\"5\" text=\"bind:VALIDSTATE\" edittype=\"combo\" displaytype=\"combotext\" combocodecol=\"C,ValidState,,Y,Y\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_basEnterprise","219","0","140","34",null,null,null,null,null,null,this.div_work.form);
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
        this.addIncludeScript("BAS00110M.xfdl","lib::lib_bas.xjs");
        this.registerScript("BAS00110M.xfdl", function() {
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
        	this.ds_search.setColumn(0, "ENTERPRISEID", this.div_search.form.cmb_enterpriseid.value);

        	var sSvcID 			= "selectBasEnterpriseList";
        	var sController 	= "/bas00100/selectBasEnterpriseList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_basEnterprise=output";
        	var sArgs 			= "";
        	sArgs 			+= this.gfn_setParam("", "");
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
         * 기능 : 취소
         */
        this.fn_cancel = function(obj,e)
        {
        	//데이터 미존재시 return
        	if (this.ds_basEnterprise.rowcount < 1) return;
            this.ds_basEnterprise.reset();
        };

        /*
         * 기능 : 행추가
         */
        this.fn_addRow = function(obj,e)
        {
        	var dsObj = this.ds_basEnterprise;
        	if(dsObj == null) return;
        	var row = dsObj.insertRow(dsObj.rowposition+1);

        	/* KEY컬럼 기본세팅 */
        	dsObj.setColumn(row,"VALIDSTATE","Valid");	//Validate
        };

        /*
         * 기능 : 행삭제
         */
        this.fn_deleteRow = function (obj, e)
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
        	// 콤보에 데이터 생성 : 회사정보
        	this.basfn_setCustomQueryCmb(this.div_search.form.cmb_enterpriseid // Object
        								, "selectEnterpriseList,ALL,Y,A"       // Option
        								, null);                          	   // 추가 파라미터
        }

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
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
            this.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.grd_basEnterprise.addEventHandler("onenterdown",this.fn_grdonEenterDown,this);
            this.div_work.form.btn_cancel.addEventHandler("onclick",this.fn_cancel,this);
            this.div_work.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_work.form.btn_addRow.addEventHandler("onclick",this.fn_addRow,this);
            this.div_work.form.btn_deleteRow.addEventHandler("onclick",this.fn_deleteRow,this);
        };
        this.loadIncludeScript("BAS00110M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
