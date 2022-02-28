(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM08701P");
            this.set_titletext("자원정보 조회");
            this.set_cssclass("form_PopupBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,470);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_outsourcedResource", this);
            obj._setContents("<ColumnInfo><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"P_PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"P_PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"P_PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"P_PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"P_RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch01","20","20",null,"60","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","10",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("0");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","66",null,"48","10",null,"32",null,null,null,null,this.divSearch01.form);
            obj.set_taborder("1");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"47","24","40","19",null,null,null,null,this.divSearch01.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Button("btnReset",null,null,"24","24","10","19",null,null,null,null,this.divSearch01.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_SA_reset2");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("sta_area","0","16","79","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("4");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("sta_resource","309","16","79","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("5");
            obj.set_text("자원명");
            obj.set_cssclass("sta_WF_label");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Edit("edt_resourceName","382","16","195","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("6");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Combo("cbo_areaId","108","16","165","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("7");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,null,"50","10","21","67",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,null,"70","28","20","39",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("취소");
            obj.set_cssclass("btn_pop_no");
            this.addChild(obj.name, obj);

            obj = new Button("btn_apply",null,null,"70","28","btn_cancel:5","39",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btn_pop_yes");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,null,"50","20","115","19",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","395","86","50","34",null,null,null,null,null,null,this);
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

            obj = new Static("Static02_01_00_00",null,"19","20","61","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"-2","25","25","14",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("title0","20","86","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("자원정보 목록");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("OUTSOURCEDWAREHOUSEWEARLIST");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_outsourcedResource","title0:0","86","140","34",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_outsourcedResource","20","120",null,null,"0","84",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_outsourcedResource");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"165\"/><Column size=\"100\"/><Column size=\"280\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"AREAID\"/><Cell col=\"1\" text=\"작업장\"/><Cell col=\"2\" text=\"자원 ID\"/><Cell col=\"3\" text=\"자원명\"/></Band><Band id=\"body\"><Cell text=\"bind:AREAID\"/><Cell col=\"1\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:RESOURCEID\"/><Cell col=\"3\" text=\"bind:RESOURCENAME\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,470,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM08701P.xfdl","lib::lib_tom.xjs");
        this.registerScript("PCM08701P.xfdl", function() {
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
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.searchDiv = this.divSearch01.form;

        var p_strProductdefid = '';
        var p_strProductdefversion = '';
        var p_strProcessdefid = '';
        var p_strProcessdefversion = '';
        var p_strProcesssegmentid = '';
        var p_strProcesssegmentversion = '';
        var p_strPlantid = '';

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.fn_initCombo();

        	this.p_strProductdefid 			= this.nfn_nvl(this.parent.arg_productDefId, "");
        	this.p_strProductdefversion 	= this.nfn_nvl(this.parent.arg_productDefVersion, "");
        	this.p_strProcessdefid 			= this.nfn_nvl(this.parent.arg_processDefId, "");
        	this.p_strProcessdefversion 	= this.nfn_nvl(this.parent.arg_processDefVersion, "");
        	this.p_strProcesssegmentid 		= this.nfn_nvl(this.parent.arg_processSegmentId, "");
        	this.p_strProcesssegmentversion = this.nfn_nvl(this.parent.arg_processSegmentVersion, "");
        	this.p_strPlantid 				= this.nfn_nvl(this.parent.arg_plantId, "");

        	//this.gfn_Message("DATA 1:: "+this.p_strProductdefid+'/'+this.p_strProductdefversion+'/'+this.p_strProcessdefid+'/'+this.p_strProcessdefversion, "", "error", "ok");
        	//this.gfn_Message("DATA 2:: "+this.p_strProcesssegmentid+'/'+this.p_strProcesssegmentversion+'/'+this.p_strPlantid, "", "error", "ok");

        	this.opener.fv_rtnValue = "";
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_outsourcedResource.clearData(); //Target Dataset clear
        	this.ds_search.clearData(); //Search Condition Dataset clear

        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "P_PRODUCTDEFID", this.p_strProductdefid);
        	this.ds_search.setColumn(0, "P_PRODUCTDEFVERSION", this.p_strProductdefversion);
        	this.ds_search.setColumn(0, "P_PROCESSDEFID", this.p_strProcessdefid);
        	this.ds_search.setColumn(0, "P_PROCESSDEFVERSION", this.p_strProcessdefversion);
        	this.ds_search.setColumn(0, "P_PROCESSSEGMENTID", this.p_strProcesssegmentid);
        	this.ds_search.setColumn(0, "P_PROCESSSEGMENTVERSION", this.p_strProcesssegmentversion);
        	this.ds_search.setColumn(0, "P_PLANTID", this.p_strPlantid);
        	this.ds_search.setColumn(0, "P_AREAID", this.searchDiv.cbo_areaId.value); //작업장
        	this.ds_search.setColumn(0, "P_RESOURCENAME", this.searchDiv.edt_resourceName.value);
        	this.ds_search.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", "selectResourceidListByOspList");

        	var sSvcID 			= "selectResourceidListByOspList";
        	var sController 	= "/pcm08700/selectResourceidListByOspList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_outsourcedResource=output";
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
        		this.ds_outsourcedResource.clearData(); //Target Dataset clear
        		return;
        	}

        	switch(trId) {
        		case "selectResourceidListByOspList":
        			break;
        		case "selectAreaidByOspProcesssegmentid":
        			this.searchDiv.cbo_areaId.set_value("*");
        			break;
        		default:
        	}
        };


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
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
        	this.fn_initAreaCombo();
        }

        /*
         * 기능 : '작업장' 콤보 조회
         */
        this.fn_initAreaCombo = function ()
        {
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("P_PRODUCTDEFID", this.p_strProductdefid);
        	sArgs += this.gfn_setParam("P_PRODUCTDEFVERSION", this.p_strProductdefversion);
        	sArgs += this.gfn_setParam("P_PROCESSDEFID", this.p_strProcessdefid);
        	sArgs += this.gfn_setParam("P_PROCESSDEFVERSION", this.p_strProcessdefversion);
        	sArgs += this.gfn_setParam("P_PROCESSSEGMENTID", this.p_strProcesssegmentid);
        	sArgs += this.gfn_setParam("P_PROCESSSEGMENTVERSION", this.p_strProcesssegmentversion);
        	sArgs += this.gfn_setParam("P_PLANTID", this.p_strPlantid);
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());

        	this.tomfn_setCustomQueryCmb(this.searchDiv.cbo_areaId // Object
        								, "selectAreaidByOspProcesssegmentid,ALL,Y,A" // OPTION
        								, sArgs	// 추가 파라미터
        								, "fn_callBack"); //콜백함수 지정
        }

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        this.btn_apply_onclick = function(obj,e)
        {
        	if (this.ds_outsourcedResource.rowcount==0)
            {
            	this.gfn_Message("NoSelections", "", "warning", "ok");
            	return;
            }
        	var areaId = this.ds_outsourcedResource.getColumn(this.ds_outsourcedResource.rowposition, "AREAID");
        	var resourceId = this.ds_outsourcedResource.getColumn(this.ds_outsourcedResource.rowposition, "RESOURCEID");
        	var resourceName = this.ds_outsourcedResource.getColumn(this.ds_outsourcedResource.rowposition, "RESOURCENAME");
        	this.opener.fv_rtnValue = areaId+"^"+resourceId+"^"+resourceName;
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.divSearch01.form.btnSearch.addEventHandler("onclick",this.fn_search,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_apply.addEventHandler("onclick",this.btn_apply_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.grd_outsourcedResource.addEventHandler("oncelldblclick",this.btn_apply_onclick,this);
        };
        this.loadIncludeScript("PCM08701P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
