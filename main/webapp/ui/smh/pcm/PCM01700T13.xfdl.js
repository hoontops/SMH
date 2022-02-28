(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM01700T13");
            this.set_titletext("후공정 설비재공");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,316);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_postProcessEquipmentWipParam", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_postProcessEquipmentWipInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_param", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CODECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ENTERPRISEID\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_state", this);
            obj._setContents("<ColumnInfo><Column id=\"CODEID\" type=\"STRING\" size=\"256\"/><Column id=\"CODENAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotInfoData", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PATHTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPEID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STEPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRINTLOTCARD\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRINTRCLOTCARD\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINUSER\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"ISRCLOT\" type=\"STRING\" size=\"256\"/><Column id=\"SELFSHIPINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"SELFTAKEINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"OSPINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"ISBEFOREROLLCUTTING\" type=\"STRING\" size=\"256\"/><Column id=\"Column30\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"ISWEEKMNG\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTPROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLAIMLOT\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"ISREWORK\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"DUEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("title1_01","0","0","110","34",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("후공정 설비재공");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("POSTPROCESSEQUIPMENTWIP");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_postProcessEquipmentWip","0","34",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_postProcessEquipmentWipInfo");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"작업장\" tooltiptext=\"AREA\"/><Cell col=\"2\" text=\"설비 ID\" tooltiptext=\"EQUIPMENTID\"/><Cell col=\"3\" text=\"설비명\" tooltiptext=\"EQUIPMENTNAME\"/><Cell col=\"4\" text=\"Lot 수\" tooltiptext=\"LOTCNT\"/><Cell col=\"5\" text=\"설비상태\" tooltiptext=\"EQUIPMENTSTATE\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:EQUIPMENTID\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:EQUIPMENTNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:LOTCNT\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\"/><Cell col=\"5\" text=\"bind:STATE\" displaytype=\"combotext\" combodataset=\"ds_state\" combodatacol=\"CODENAME\" combocodecol=\"CODEID\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_grdAdd",null,"6","26","24","111",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_grdDel",null,"6","26","24","85",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_grdCopy",null,"6","27","24","58",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdCopy");
            obj.set_tooltiptext("복사");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_grdDown",null,"6","29","24","29",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운로드");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_grdUp",null,"6","29","24","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_postProcessEquipmentWipInfo","title1_01:0","0","140","34",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,316,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM01700T13.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM01700T13.xfdl","lib::lib_pcm.xjs");
        this.addIncludeScript("PCM01700T13.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("PCM01700T13.xfdl","lib::lib_mtm.xjs");
        this.registerScript("PCM01700T13.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 작업종료 :: 후공정 설비재공 탭
         * 파일명 		: PCM01700T13.xfdl
         * 작성자 		: 김성현
         * 작성일 		: 2021.04.29
         *
         * 설  명		: 인수등록 :: 후공정 설비재공 탭
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.29	김성현   	최초작성
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
        this._panelPerQty = 0;
        this._panelQty = 0;
        this._qty = 0;
        this._visibleLotId = true;
        this._visibleFileUp = false;
        this._VisibleDefectDgree = false;
        this._visibleTopDefectCode = false;
        this._lotId = "";
        this._queryVersion = "";


        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	// 그리드 리턴 받을 값
        	console.log("PCM01700T13");

        	this.nfn_formInit(obj);

        	switch (this.parent.parent.parent.parent.parent.name)
        	{
        		case "PCM01700M":  //인수 등록
        			this.setProcessType(this.ProcessType.LotAccept);
        			break;
        		case "PCM01800M":  //작업 시작
        			this.setProcessType(this.ProcessType.StartWork);
        			break;
        		case "PCM01900M":  //작업 완료
        			this.setProcessType(this.ProcessType.WorkCompletion);
        			break;
        		case "PCM02100M":   //인계 등록
        			this.setProcessType(this.ProcessType.TransitRegist);
        			break;
        	}



        // 	var vlotId = this.nfn_nvl(this.parent.parent.parent.parent.parent.div_work.form.div_search.form.edt_lotId.value, "");
        // 	var vpfsDetail_tabSearch = this.parent.parent.parent.parent.parent.g_pfsDetail_tabSearch;
        //
        // 	if(vlotId != "" && vpfsDetail_tabSearch) this.fn_search();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/


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
        	    case "getState":
        			this.ds_postProcessEquipmentWipParam.clearData();
        			this.ds_postProcessEquipmentWipParam.addRow();
        			var areaId = this.parent.parent.parent.parent.parent.div_work.form.div_pfsInfo.form.cbo_transitArea.value;
        			var parentDs = this.parent.parent.parent.parent.parent.div_work.form.div_pfsInfo.form.ds_transitAreaList;

        			var fRow   = parentDs.findRow("RESOURCEID", areaId);
        			var realAreaId = "";

        			if(fRow < 0){
        				realAreaId = areaId;
        			} else {
        				realAreaId = parentDs.getColumn(fRow, "AREAID");
        			}

        			this.ds_postProcessEquipmentWipParam.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        			this.ds_postProcessEquipmentWipParam.setColumn(0, "PLANTID", this.gf_getSiteType() );
        			this.ds_postProcessEquipmentWipParam.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        			this.ds_postProcessEquipmentWipParam.setColumn(0, "LOTID", this.parent.parent.parent.parent.parent.div_work.form.div_search.form.edt_lotId.value);
        			this.ds_postProcessEquipmentWipParam.setColumn(0, "PROCESSSEGMENTID", this.nfn_nvl(this.parent.parent.parent.parent.parent.ds_lotInfo.getColumn(0, "NEXTPROCESSSEGMENTID"), ""));
        			this.ds_postProcessEquipmentWipParam.setColumn(0, "PROCESSSEGMENTVERSION", this.nfn_nvl(this.parent.parent.parent.parent.parent.ds_lotInfo.getColumn(0, "NEXTPROCESSSEGMENTVERSION"), ""));
        			this.ds_postProcessEquipmentWipParam.setColumn(0, "RESOURCETYPE", "Area");
        			this.ds_postProcessEquipmentWipParam.setColumn(0, "VERSION", "10031");
        			this.ds_postProcessEquipmentWipParam.setColumn(0, "AREAID",  realAreaId);

        			var sSvcID 			= "selectPostProcessEquipmentWipByArea";
        			var sController 	= "/pcm01900/selectPostProcessEquipmentWipByArea.do";
        			var sInDatasets 	= "INPUT=ds_postProcessEquipmentWipParam";
        			var sOutDatasets 	= "ds_postProcessEquipmentWipInfo=output";
        			var sArgs 			= "";
        			this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        			break;
        		case "selectPostProcessEquipmentWipByArea":
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
             switch(sPopupId)
         	{

        		default :
        			break;
         	}
         };

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        this.fn_initCombo = function ()
        {

        	// 조회 조건 설정
        	this.ds_param.clearData();
        	this.ds_param.addRow();
        	this.ds_param.setColumn(0, "CODECLASSID" , "EquipmentState");
        	this.ds_param.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.ds_param.setColumn(0, "VERSION", "00001");


        	var sSvcID 			= "getState";
        	var sController 	= "/pcm01700/getCodeList.do";
        	var sInDatasets 	= "INPUT=ds_param";
        	var sOutDatasets 	= "ds_state=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }

         this.fn_search = function ()
         {
         	var vLotId          = this.parent.parent.parent.parent.parent.g_LotId;
        	var vPanelperQty    = this.parent.parent.parent.parent.parent.g_PanelperQty;
        	var vPnlQty         = this.parent.parent.parent.parent.parent.g_PnlQty;
        	var vPcsQty         = this.parent.parent.parent.parent.parent.g_PcsQty;
        	var vQueryVersion   = this.parent.parent.parent.parent.parent.queryVersion;
        	var vLotInfoData    = this.parent.parent.parent.parent.parent.ds_lotInfo;

        	this.setLotInfo(vLotId, vPanelperQty, vPnlQty, vPcsQty, vQueryVersion, vLotInfoData);

        	this.fn_initCombo();


        };

        this.setLotInfo = function (lotId, panelPerQty, panelQty, qty, queryVersion, dataSet)
        {
        	var queryVersion = "10001";
        	this._lotId = lotId;
        	this._panelPerQty = panelPerQty;
        	this._panelQty = panelQty;
        	this._qty = qty;

        	this.ds_lotInfoData.clearData();  // 1700M 에서 가져옴.
        	this.ds_lotInfoData.copyData(dataSet);

        	this._queryVersion = queryVersion;
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
        };
        this.loadIncludeScript("PCM01700T13.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
