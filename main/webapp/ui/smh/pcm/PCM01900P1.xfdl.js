(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM01900P1");
            this.set_titletext("재작업 라우팅");
            if (Form == this.constructor)
            {
                this._setFormPosition(829,594);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_processClass", this);
            obj._setContents("<ColumnInfo><Column id=\"CODEID\" type=\"STRING\" size=\"256\"/><Column id=\"CODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAYSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"CODECLASSID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_param", this);
            obj._setContents("<ColumnInfo><Column id=\"CODECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PROCESSCLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKNUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TOPPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODECLASSID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_segmentClass", this);
            obj._setContents("<ColumnInfo><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_topDt", this);
            obj._setContents("<ColumnInfo><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dt", this);
            obj._setContents("<ColumnInfo><Column id=\"PROCESSCLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKNUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"TOPPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"TOPPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_transitResource", this);
            obj._setContents("<ColumnInfo><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRIMARYRESOURCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_processPath", this);
            obj._setContents("<ColumnInfo><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSENAME\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PATHSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"ATHTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BF_AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"BF_EQUIPMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"ISSKIP\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ALTERNATIVERESOURCE\" type=\"STRING\" size=\"256\"/><Column id=\"ASSIGNEQUIPMENT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_reworkRouting", this);
            obj._setContents("<ColumnInfo><Column id=\"PROCESSCLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKNUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"TOPPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"TOPPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","66","0","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","0","82","20","84",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00",null,"100","20","84","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,null,"70","28","20","20",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("닫기");
            obj.set_cssclass("btn_pop_no");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok",null,null,"70","28","btn_close:10","20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("확인");
            obj.set_cssclass("btn_pop_yes");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,null,"50","20","97","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02","20",null,null,"10","20","48",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_dt","20","82","140","34",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_processDef","20","sta_cnt_ds_dt:0","789","193",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_dt");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"선택\" tooltiptext=\"SELECT\"/><Cell col=\"2\" text=\"적용구분\" tooltiptext=\"APPLICATIONTYPE\"/><Cell col=\"3\" text=\"재작업구분\" tooltiptext=\"REWORKTYPE\"/><Cell col=\"4\" text=\"대공정\" tooltiptext=\"TOPPROCESSSEGMENTID\"/><Cell col=\"5\" text=\"재작업번호\" tooltiptext=\"REWORKNUMBER\"/><Cell col=\"6\" text=\"재작업버전\" tooltiptext=\"REWORKVERSION\"/><Cell col=\"7\" text=\"재작업명\" tooltiptext=\"REWORKNAME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:APPLICATIONTYPE\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:REWORKTYPE\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:TOPPROCESSSEGMENTID\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:REWORKNUMBER\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:REWORKVERSION\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:REWORKNAME\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","20","20",null,"62","20",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchBg");
            obj.set_background("rgba(247,247,247,1)");
            this.addChild(obj.name, obj);

            obj = new Static("sta_processClass","0","0","14.96%","31",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("라우팅 구분");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("LOTID");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_processClass","sta_processClass:2","6","190","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_font("9pt \"Dotum\"");
            obj.set_visible("true");
            obj.set_codecolumn("C,ProcessClassType,null,Y,Y");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_reworkNumber","0","sta_processClass:0","14.58%","31",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("재작업번호");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("LOTID");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_reworkNumber","sta_reworkNumber:5","36","190","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_font("9pt \"Dotum\"");
            obj.set_autoselect("true");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_CustomSearch",null,"6","57","21","7",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_SA_search");
            obj.set_tooltiptype("hover");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_reworkName","340","31","14.96%","31",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("재작업명");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("LOTID");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_reworkName","sta_reworkName:5","36","190","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_font("9pt \"Dotum\"");
            obj.set_autoselect("true");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_topSegment","340","0","14.96%","31",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("대공정");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("LOTID");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_topSegment","sta_topSegment:5","6","190","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_segmentClass");
            obj.set_codecolumn("PROCESSSEGMENTCLASSID");
            obj.set_datacolumn("PROCESSSEGMENTCLASSNAME");
            obj.set_font("9pt \"Dotum\"");
            obj.set_visible("true");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_resourceId","619","grd_processDef:7",null,"20","20",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_codecolumn("RESOURCEID");
            obj.set_datacolumn("RESOURCENAME");
            obj.set_innerdataset("ds_transitResource");
            this.addChild(obj.name, obj);

            obj = new Static("sta_resourceId","511","316",null,"20","cbo_resourceId:5",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("인계자원");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_processPath","20","grd_processDef:0","140","34",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_processPath","20","sta_cnt_ds_processPath:0","789","193",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_processPath");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"공정순서\" tooltiptext=\"USERSEQUENCE\"/><Cell col=\"2\" text=\"공정코드\" tooltiptext=\"PROCESSSEGMENTID\"/><Cell col=\"3\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:USERSEQUENCE\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:PROCESSSEGMENTID\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",829,594,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM01900P1.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM01900P1.xfdl","lib::lib_pcm.xjs");
        this.addIncludeScript("PCM01900P1.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("PCM01900P1.xfdl","lib::lib_mtm.xjs");
        this.registerScript("PCM01900P1.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 공통팝업
         * 파일명 		: PCM01900P1.xfdl
         * 작성자 		: 김성현
         * 작성일 		: 2021.05.02
         *
         * 설  명		: 공통팝업
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.05.02	김성현   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_pcm.xjs"); /*include "lib::lib_pcm.xjs"*/;
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_mtm.xjs"); /*include "lib::lib_mtm.xjs"*/;	//MTM 공통 라이브러리 include

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.LotId    = "";
        this.TopProcessSegmentId = "";
        this.ResourceId = "";
        this.AreaId = "";
        this.ProcessSegmentId  = "";

        this.processDefId = "";
        this.processDefVersion = "";

        this.ds_dt_rowposition = -1;

        this.resultInfo = {
        		resultCd :	"FAIL"	//결과코드
        	  , resourceId : ""
              , areaId : ""
        	  , dataSet : this.ds_reworkRouting
        };
        // this.gf_getEnterpriseId()
        // this.gf_getSiteType()
        // this.gf_getLanguageType()
        // this.gf_getUserId()
        // this.gf_getUserNm()

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
        		case  "getProcessSegmentClassByType":

        			// 공정ID가 있을 경우 대공정을 조회하여 ComboBox가 기본 선택되도록 함
        			if (!this.nfn_isNull(this.ProcessSegmentId))
        			{
        				this.ds_param.clearData();
        				this.ds_param.addRow();
        				this.ds_param.setColumn(0, "P_PROCESSCLASSTYPE" , "TopProcessSegmentClass");
        				this.ds_param.setColumn(0, "PROCESSSEGMENTID" , this.ProcessSegmentId);
        				this.ds_param.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        				this.ds_param.setColumn(0, "VERSION", "10001");

        				var sSvcID 			= "getProcessSegmentClassBySegmentID";
        				var sController 	= "/pcm01900/getProcessSegmentClassBySegmentID.do";
        				var sInDatasets 	= "INPUT=ds_param";
        				var sOutDatasets 	= "ds_topDt=output";
        				var sArgs 			= "";
        				this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        			} else {
        				this.div_search_btn_search_onclick();
        			}

        			break;

        		case "getProcessSegmentClassBySegmentID":

        			if (this.ds_topDt.getRowCount()  <= 0) return;

        			var processSegmentClassId = this.nfn_nvl(this.ds_topDt.getColumn(0, "PROCESSSEGMENTCLASSID"), "");
        			this.div_search.form.cbo_topSegment.set_value(processSegmentClassId);

        			this.div_search_btn_search_onclick();
        			break;

        		case "selectReworkRouting":

        			break;

        		case "getTransitResourceForAoiRepair":

        			var primaryResource = "";


        			for (var i = 0; i < this.ds_transitResource.getRowCount(); i++)
        			{
        				var isPrimaryResource = this.nfn_nvl(this.ds_transitResource.getColumn(i, "ISPRIMARYRESOURCE"), "");

        				if (isPrimaryResource == "Y")
        				{
        					primaryResource = this.nfn_nvl(this.ds_transitResource.getColumn(i, "RESOURCEID"), "");
        					break;
        				}
        			}


        			this.ds_param.clearData();
        			this.ds_param.addRow();
        			this.ds_param.setColumn(0, "ENTERPRISEID" , this.gf_getEnterpriseId());
        			this.ds_param.setColumn(0, "PROCESSDEFID" , this.processDefId);
        			this.ds_param.setColumn(0, "PROCESSDEFVERSION" , this.processDefVersion);
        			this.ds_param.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        			this.ds_param.setColumn(0, "VERSION", "10001");

        			var sSvcID 			= "getProcessPathList";
        			var sController 	= "/pcm01900/getProcessPathList.do";
        			var sInDatasets 	= "INPUT=ds_param";
        			var sOutDatasets 	= "ds_processPath=output";
        			var sArgs 			= "";
        			this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        			break;

        		case "getProcessPathList":

        			break;
        		default:

        			break;
        	}
        };

        // paging end
        /**************************************************************************
         * 3. FORM 정의
         ***************************************************************************/


        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	console.log("PCM01900P1");


        	this.LotId    			 = this.parent.arg_LotId;
        // 	this.TopProcessSegmentId =  this.parent.arg_TopProcessSegmentId;
        // 	this.ResourceId 		 =  this.parent.arg_ResourceId;
        // 	this.AreaId 			 =  this.parent.arg_AreaId;
        	this.ProcessSegmentId    =  this.parent.arg_ProcessSegmentId;

        	this.initializeCombobox();
        };


        this.initializeCombobox = function ()
        {
        	this.ds_param.clearData();
        	this.ds_param.addRow();
        	this.ds_param.setColumn(0, "PROCESSSEGMENTCLASSTYPE" , "TopProcessSegmentClass");
        	this.ds_param.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.ds_param.setColumn(0, "VERSION", "10001");

        	var sSvcID 			= "getProcessSegmentClassByType";
        	var sController 	= "/mfm00200/selectProcessSegmentClassByTypeList.do";
        	var sInDatasets 	= "INPUT=ds_param";
        	var sOutDatasets 	= "ds_segmentClass=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.initalizeHoldCombo = function()
        {
        	this.ds_param.clearData();
        	this.ds_param.addRow();
        	this.ds_param.setColumn(0, "P_PARENTREASONCODECLASSID", "HoldCode");
        	this.ds_param.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        };



        this.grd_processDef_oncellclick = function(obj,e)
        {
        	// 한 행만 체크 가능
        	this.ds_dt.filter("CHK == '1'");

        	if (this.ds_dt.getRowCount() > 0)
        	{
        		this.ds_dt.filter("");

        		var nRow = this.ds_dt.rowcount == 1 ? 0 : this.ds_dt_rowposition;

        		this.processDefId      = this.nfn_nvl(this.ds_dt.getColumn(nRow, "REWORKNUMBER"), "");
        		this.processDefVersion = this.nfn_nvl(this.ds_dt.getColumn(nRow, "REWORKVERSION"), "");

        		this.ds_reworkRouting.clearData();
        		this.ds_reworkRouting.addRow();
        		this.ds_reworkRouting.copyRow(0, this.ds_dt, nRow);

        		this.searchProcessPath();
        	}

        	this.ds_dt.filter("");
        };

        this.searchProcessPath = function()
        {

        	this.ds_param.clearData();
        	this.ds_transitResource.clearData();
        	this.ds_param.addRow();
        	this.ds_param.setColumn(0, "PROCESSDEFID", this.processDefId);
        	this.ds_param.setColumn(0, "PROCESSDEFVERSION", this.processDefVersion);
        	this.ds_param.setColumn(0, "VERSION", "10001");

        	var sSvcID 			= "getTransitResourceForAoiRepair";
        	var sController 	= "/pcm01900/getTransitResourceForAoiRepair.do";
        	var sInDatasets 	= "INPUT=ds_param";
        	var sOutDatasets 	= "ds_transitResource=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };


        this.div_search_btn_search_onclick = function(obj,e)
        {
        	this.ds_param.clearData();
        	this.ds_param.addRow();
        	this.ds_param.setColumn(0, "PLANTID", this.gf_getSiteType());
        	this.ds_param.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.ds_param.setColumn(0, "P_LOTID", this.LotId );
        	this.ds_param.setColumn(0, "P_PROCESSCLASSTYPE", this.div_search.form.cbo_processClass.value);
        	this.ds_param.setColumn(0, "REWORKNUMBER", this.div_search.form.edt_reworkNumber.value);
        	this.ds_param.setColumn(0, "REWORKNAME", this.div_search.form.edt_reworkName.value);
        	this.ds_param.setColumn(0, "TOPPROCESSSEGMENTID", this.div_search.form.cbo_topSegment.value);
        	this.ds_param.setColumn(0, "VERSION", "10001");

        	var sSvcID 			= "selectReworkRouting";
        	var sController 	= "/pcm01900/selectReworkRouting.do";
        	var sInDatasets 	= "INPUT=ds_param";
        	var sOutDatasets 	= "ds_dt=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.div_search_edt_reworkNumber_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.div_search_btn_search_onclick();
        	}
        };

        this.div_search_edt_reworkName_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.div_search_btn_search_onclick();
        	}
        };


        this.btn_ok_onclick = function(obj,e)
        {
        	if (this.nfn_isNull(this.cbo_resourceId.value))
        	{
        		// 인계 자원을 선택하시기 바랍니다.
        		this.gfn_Message("SelectTransitResource", null, "warning", "ok");
        		return;
        	}
        	var areaId 					= this.nfn_nvl(this.ds_transitResource.getColumn(this.ds_transitResource.findRow("RESOURCEID", this.cbo_resourceId.value) ,"AREAID"), "");
        	var	subProcessDefId 	  	= this.nfn_nvl(this.ds_reworkRouting.getColumn(0, "REWORKNUMBER"), "");
        	var	subProcessDefVersion 	= this.nfn_nvl(this.ds_reworkRouting.getColumn(0, "REWORKVERSION"), "");

        	var resultInfo = {
        		 resultCd 	: "OK"
        		,resourceId : this.cbo_resourceId.value
        		,areaId     : areaId
        		,subProcessDefId	: subProcessDefId
        		,subProcessDefVersion	: subProcessDefVersion
        	};

        	//var retData = JSON.stringify(resultInfo);
        	this.opener.fv_rtnValue = resultInfo;
        	this.close();

        };

        this.btn_close_onclick = function (obj, e)
        {
        	var resultInfo = {
        		resultCd :	"FAIL"	//결과코드
        	};
        	var retData = JSON.stringify(resultInfo);
        	this.opener.fv_rtnValue = retData;
        	this.close();
        };

        this.ds_dt_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "CHK" && e.newvalue == "1")
        	{
        		trace("111");
        		for(var i = 0; i < obj.getRowCount(); i++)
        		{
        			obj.setColumn(i, "CHK", "0");
        		}
        		obj.setColumn(e.row, "CHK", e.newvalue);
        	}
        };

        this.ds_dt_onrowposchanged = function(obj,e)
        {
        	this.ds_dt_rowposition = e.newrow;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_ok.addEventHandler("onclick",this.btn_ok_onclick,this);
            this.grd_processDef.addEventHandler("oncellclick",this.grd_processDef_oncellclick,this);
            this.div_search.form.edt_reworkNumber.addEventHandler("onkeydown",this.div_search_edt_reworkNumber_onkeydown,this);
            this.div_search.form.btn_CustomSearch.addEventHandler("onclick",this.div_search_btn_search_onclick,this);
            this.div_search.form.edt_reworkName.addEventHandler("onkeydown",this.div_search_edt_reworkName_onkeydown,this);
            this.div_search.form.cbo_topSegment.addEventHandler("onitemchanged",this.div_search_cbo_srh_onitemchanged,this);
            this.ds_dt.addEventHandler("oncolumnchanged",this.ds_dt_oncolumnchanged,this);
            this.ds_dt.addEventHandler("onrowposchanged",this.ds_dt_onrowposchanged,this);
        };
        this.loadIncludeScript("PCM01900P1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
