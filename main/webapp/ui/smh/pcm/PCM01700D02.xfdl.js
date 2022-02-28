(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM01700D02");
            this.set_titletext("작업완료");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,80);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_unitOfMaterial", this);
            obj._setContents("<ColumnInfo><Column id=\"UOMDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"UOMDEFNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_areaParam", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotParam", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_transitAreaList", this);
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRIMARYRESOURCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PATHTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_result", this);
            obj._setContents("<ColumnInfo><Column id=\"WORKER\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"GOODQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GOODPNLQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTPNLQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TRANSITAREA\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"PRINTWEEK\" type=\"STRING\" size=\"256\"/><Column id=\"COMMENT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_transitAreaParam", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_param", this);
            obj._setContents("<ColumnInfo><Column id=\"UOMCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pfsInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"UOMCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_workInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"WORKER\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"GOODQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GOODPNLQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTPNLQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"PRINTWEEK\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSITAREA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"GOODQTY\">0</Col><Col id=\"GOODPNLQTY\">0</Col><Col id=\"DEFECTQTY\">0</Col><Col id=\"DEFECTPNLQTY\">0</Col><Col id=\"COMMENT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotInfoData", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PATHTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPEID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STEPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRINTLOTCARD\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRINTRCLOTCARD\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINUSER\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"ISRCLOT\" type=\"STRING\" size=\"256\"/><Column id=\"SELFSHIPINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"SELFTAKEINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"OSPINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"ISBEFOREROLLCUTTING\" type=\"STRING\" size=\"256\"/><Column id=\"Column30\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"ISWEEKMNG\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTPROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLAIMLOT\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"ISREWORK\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"DUEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_comment","5","55","6.76%","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("특이사항");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.addChild(obj.name, obj);

            obj = new Static("sta_defectQty","39.98%","30","6.76%","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("불량 수량");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.addChild(obj.name, obj);

            obj = new Static("label01","5","5","6.76%","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("작업자");
            obj.set_cssclass("sta_WF_detailLabel2_P");
            this.addChild(obj.name, obj);

            obj = new Static("label03","5","30","6.76%","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("UOM");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.addChild(obj.name, obj);

            obj = new Static("sta_goodQty","19.79%","30","6.76%","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("양품 수량");
            obj.set_cssclass("sta_WF_detailLabel2_P");
            this.addChild(obj.name, obj);

            obj = new Static("sta_transitArea","19.79%","5","6.76%","20",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("인계작업장");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_workerSrh",null,"5","22","20","sta_transitArea:0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_finder");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_worker","label01:5","5",null,"20","btn_workerSrh:0",null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_comment","sta_comment:5","55",null,"20","5",null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_unitOfMaterial","label03:5","30",null,"20","sta_goodQty:0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_unitOfMaterial");
            obj.set_datacolumn("UOMDEFNAME");
            obj.set_codecolumn("UOMDEFID");
            obj.set_readonly("true");
            obj.set_text("cmb_00");
            this.addChild(obj.name, obj);

            obj = new Static("sta_goodQtyUOM",null,"30","31","20","sta_defectQty:0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("PNL");
            obj.set_cssclass("sta_WF_unit");
            this.addChild(obj.name, obj);

            obj = new Spin("spn_numGoodPnlQty","31.80%","30",null,"20","sta_goodQtyUOM:0",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_min("-1");
            obj.set_max("-1");
            obj.set_value("");
            this.addChild(obj.name, obj);

            obj = new Spin("spn_numGoodQty","sta_goodQty:5","30",null,"20","spn_numGoodPnlQty:3",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_min("-1");
            obj.set_max("-1");
            obj.set_value("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_printWeek","60.73%","30","6.76%","20",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("인쇄주차");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.addChild(obj.name, obj);

            obj = new Static("sta_defectQtyUOM",null,"30","31","20","sta_printWeek:0",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("PNL");
            obj.set_cssclass("sta_WF_unit");
            this.addChild(obj.name, obj);

            obj = new Spin("spn_numDefectPnlQty","52.15%","30",null,"20","sta_defectQtyUOM:0",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_min("-1");
            obj.set_max("-1");
            obj.set_value("");
            this.addChild(obj.name, obj);

            obj = new Spin("spn_numDefectQty","sta_defectQty:5","30",null,"20","spn_numDefectPnlQty:3",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_min("-1");
            obj.set_max("-1");
            obj.set_value("");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_transitArea","sta_transitArea:5","5",null,"20","sta_defectQtyUOM:0",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_innerdataset("ds_transitAreaList");
            obj.set_codecolumn("AREAID");
            obj.set_datacolumn("AREANAME");
            obj.set_tooltiptext("TRANSITAREA");
            obj.set_readonly("true");
            obj.set_text("cmb_00");
            this.addChild(obj.name, obj);

            obj = new Static("sta_equpmentClass","80.68%","30","6.76%","20",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("설비그룹");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_printWeek","sta_printWeek:5","30",null,"20","19.4%",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_equpment","80.60%","5","6.76%","20",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("설비");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_equpment","sta_equpment:6","5",null,"20","5",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_innerdataset("ds_unitOfMaterial");
            obj.set_datacolumn("UOMDEFNAME");
            obj.set_codecolumn("UOMDEFID");
            obj.set_readonly("true");
            obj.set_visible("false");
            obj.set_text("cmb_00");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_equpmentClass","sta_equpmentClass:5","30",null,"20","5",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_innerdataset("ds_unitOfMaterial");
            obj.set_datacolumn("UOMDEFNAME");
            obj.set_codecolumn("UOMDEFID");
            obj.set_readonly("true");
            obj.set_visible("false");
            obj.set_text("cmb_00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,80,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","cbo_unitOfMaterial","value","ds_workInfo","UNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_comment","value","ds_workInfo","COMMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","spn_numGoodQty","value","ds_workInfo","GOODQTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","spn_numGoodPnlQty","value","ds_workInfo","GOODPNLQTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","spn_numDefectQty","value","ds_workInfo","DEFECTQTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","spn_numDefectPnlQty","value","ds_workInfo","DEFECTPNLQTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","edt_printWeek","value","ds_workInfo","PRINTWEEK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM01700D02.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM01700D02.xfdl","lib::lib_pcm.xjs");
        this.addIncludeScript("PCM01700D02.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("PCM01700D02.xfdl","lib::lib_mtm.xjs");
        this.registerScript("PCM01700D02.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 인수등록
         * 파일명 		: PCM01700D02.xfdl
         * 작성자 		: 김성현
         * 작성일 		: 2021.04.08
         *
         * 설  명		: 인수등록 모듈
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.08	김성현   	최초작성
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

        this.g_workerId = "";   // 작업자 id
        this.g_areaId = "";		// 작업장 id
        this.g_LotId       = "";

        this.primaryAreaId = "";
        this.plantId = "";
        this.pathType = "";
        this.productDefType = "";
        this.lastRework = "";

        this.btn_workerSrh_flag = false;


         // this.gf_getEnterpriseId()
        // this.gf_getEnterpriseId()
        // this.gf_getSiteType()
        // this.gf_getLanguageType()
        // this.gf_getUserId()
        // this.gf_getUserNm()


        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	console.log("PCM01700D02");
        	// 초기화 (공통)
        	this.nfn_formInit(obj);

        	switch (this.parent.parent.parent.parent.name)
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


        	this.setControlsVisible();
        	this.setEnable(false);

        	this.fn_initCombo();
        };


        this.fn_initCombo = function ()
         {

         	this.ds_param.clearData();
         	this.ds_param.addRow();
         	this.ds_param.setColumn(0,"UOMCLASSID", "Segment");
        	this.ds_param.setColumn(0,"VERSION", "10001");

         	var sSvcID 			= "getUomDefinitionList";
         	var sController 	= "/pcm01700/getUomDefinitionList.do"; // selectCustomQuery
         	var sInDatasets 	= "INPUT=ds_param";
         	var sOutDatasets 	= "ds_unitOfMaterial=output";
         	var sArgs 			= "";
         	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
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
        		case "getUomDefinitionList":

         			this.spn_numGoodQty.set_enable(false);
         			this.spn_numGoodPnlQty.set_enable(false);
         			this.spn_numDefectQty.set_enable(false);
         			this.spn_numDefectPnlQty.set_enable(false);

         			//설비는 하단 탭으로, 설비 그룹은 사용 안함
         			//일단 visible false처리
         			this.sta_equpment.set_visible(false);
        			this.sta_equpment.set_enable(false);
         			this.cbo_equpment.set_visible(false);
        			this.cbo_equpment.set_enable(false);
         			this.sta_equpmentClass.set_visible(false);
        			this.sta_equpmentClass.set_enable(false);
         			this.cbo_equpmentClass.set_visible(false);
        			this.cbo_equpmentClass.set_enable(false);

         			this.sta_goodQtyUOM.set_font("normal 9px 맑은 고딕");  // 양품수량 pnl
         			this.sta_defectQtyUOM.set_font("normal 9px 맑은 고딕"); // 불량수량 pnl


        			break;

        	  case "getLotProductTypePathType": // x, LotProductTypePathType

        			if (this.ds_lotInfo.getRowCount() > 0)
        			{
        				this.plantId = this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PLANTID"), "");
        				this.pathType = this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PATHTYPE"), "");
        				this.productDefType = this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PRODUCTDEFTYPE"), "");
        			}

        			var pathType_endsWith = this.pathType.substring(this.pathType.length-3, this.pathType.length);

        			if (pathType_endsWith == "End" && this.productDefType == "SubAssembly")
        			{
        				this.sta_transitArea.set_tooltiptext("TRANSITAREA");
        				this.cbo_transitArea.set_codecolumn("AREAID");
        				this.cbo_transitArea.set_datacolumn("AREANAME");

        				if (this.gf_getEnterpriseId() == this.getEnterPrise_InterFlex()) // ???
        				{
        					this.ds_areaParam.clearData();
        					this.ds_areaParam.addRow();
        					this.ds_areaParam.setColumn(0, "PLANTID", this.plantId);
        					this.ds_areaParam.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        					this.ds_areaParam.setColumn(0, "VERSION", "10004");


        					// 10004
        					var sSvcID = "getAreaList";
        					var sController = "/pcm01700/getAreaList.do";
        					var sInDatasets = "INPUT=ds_areaParam";
        					var sOutDatasets = "ds_transitAreaList=output";
        					var sArgs = "";
        					this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        				}
        			}
        			else
        			{

        				//this.sta_transitArea.set_tooltiptext("TRANSITAREA");
        				//this.cbo_transitArea.set_codecolumn("AREAID");
        				//this.cbo_transitArea.set_datacolumn("AREANAME");
        				this.sta_transitArea.set_tooltiptext("TRANSITRESOURCE");
        				this.cbo_transitArea.set_codecolumn("RESOURCEID");
        				this.cbo_transitArea.set_datacolumn("RESOURCENAME");

        				var sSvcID = "getTransitAreaList";
        				var sController = "/pcm01700/getTransitAreaList.do";
        				var sInDatasets = "INPUT=ds_transitAreaParam";
        				var sOutDatasets = "ds_transitAreaList=output";
        				var sArgs = "";

        				if(this.lastRework  == "Y") {
        					this.ds_transitAreaParam.setColumn(0, "VERSION", "10032");
        				}
        				else{
        					this.ds_transitAreaParam.setColumn(0, "VERSION", "10031");
        				}
        				this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        			}


        		break;

        	  case "getAreaList":  // LotProductTypePathType, getAreaList

        		this.primaryAreaId = this.nfn_nvl(this.ds_lotInfo.getColumn(0, "AREAID"), "");
        		this.cbo_transitArea.set_value(this.primaryAreaId);
        		this.cbo_transitArea.set_codecolumn("AREAID");
        		this.cbo_transitArea.set_datacolumn("AREANAME");
        		/*
        			this.cbo_transitArea.set_innerdataset(this.ds_transitAreaList);

        			if(this.primaryAreaId == "")
        			{   //EmptyItemValue
        				this.cbo_transitArea.set_codecolumn("");
        				this.cbo_transitArea.set_datacolumn("");
        			}
        			else{
        				this.cbo_transitArea.set_codecolumn(this.primaryAreaId);
        				this.cbo_transitArea.set_datacolumn(this.primaryAreaId);
        			}
        		*/
        			this.setControlsInfo3();


        		break;

        	  case "getTransitAreaList": // TransitAreaList
        			if (this.nfn_isNull(this.ds_lotInfoData.getColumn(0, "NEXTPROCESSSEGMENTID")))
        			{
        				this.primaryAreaId = this.nfn_nvl(this.ds_lotInfoData.getColumn(0, "RESOURCEID"), "");
        			}
        			else
        			{
        				for (var i = 0; i < this.ds_transitAreaList.getRowCount(); i++)
        				{
        					if (this.nfn_nvl(this.ds_transitAreaList.getColumn(i, "ISPRIMARYRESOURCE"), "N") == "Y")
        					{
        						this.primaryAreaId = this.nfn_nvl(this.ds_transitAreaList.getColumn(i, "RESOURCEID"), "N");
        						break;
        					}
        				}
        			}

        			this.cbo_transitArea.set_value(this.primaryAreaId);
        			this.cbo_transitArea.set_codecolumn("RESOURCEID");
        			this.cbo_transitArea.set_datacolumn("RESOURCENAME");
        			/*
        			this.cbo_transitArea.set_innerdataset(this.ds_transitAreaList);

        			if(this.primaryAreaId == "")
        			{   //EmptyItemValue
        				this.cbo_transitArea.set_codecolumn("");
        				this.cbo_transitArea.set_datacolumn("");
        			}
        			else{
        				this.cbo_transitArea.set_codecolumn(this.primaryAreaId);
        				this.cbo_transitArea.set_datacolumn(this.primaryAreaId);
        			}
        			*/

        			this.setControlsInfo3();

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
         		case "SEARCH_UserList" :

        			this.g_workerId = rtn[0]; // 작업자 id
         			this.edt_worker.set_value(rtn[1]);
        			this.ds_workInfo.setColumn(0, "WORKER", rtn[0]);

        			this.edt_worker.set_enable(false);
        			this.btn_workerSrh.set_enable(false);

        // 			this.resultInfo.resultCd = "USER";
        // 			var retData = JSON.stringify(this.resultInfo);
        // 			this.fv_rtnValue = retData;

        			this.setControlsInfo2();

         	      break;
         		case "SEARCH_WorkerByProcess" :

        			this.g_workerId = rtn[0]; // 작업자 id
         			this.edt_worker.set_value(rtn[1]);
        			this.ds_workInfo.setColumn(0, "WORKER", rtn[0]);

        			this.edt_worker.set_enable(true);
        			this.btn_workerSrh.set_enable(true);

        			this.setControlsInfo2();

         			break;
         		default :
         			break;
         	}
         };


        this.resultInfo = {
        		resultCd :	"FAIL"	//결과코드
        	  , resourceId : "" //
        };

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/


         this.setControlsVisible = function ()
         {
         	switch (this.getProcessType())
         	{
         		case this.ProcessType.LotAccept: // ProcessType.LotAccept:
         			this.sta_equpmentClass.set_visible(false);
        			this.sta_equpmentClass.set_enable(false);
         			this.cbo_equpmentClass.set_visible(false);
        			this.cbo_equpmentClass.set_enable(false);
         			this.sta_equpment.set_visible(false);
        			this.sta_equpment.set_enable(false);
         			this.cbo_equpment.set_visible(false);
        			this.cbo_equpment.set_enable(false);
         			this.sta_transitArea.set_visible(false);  //인계작업장 패널
        			this.sta_transitArea.set_enable(false);
         			this.cbo_transitArea.set_visible(false);
        			this.cbo_transitArea.set_enable(false);
         			this.sta_printWeek.set_visible(false);  //인쇄주차 텍스트 박스
        			this.sta_printWeek.set_enable(false);
         			this.edt_printWeek.set_visible(false);
        			this.edt_printWeek.set_enable(false);
         			break;
         		case this.ProcessType.StartWork: // ProcessType.StartWork:
         			this.sta_transitArea.set_visible(false); //인계작업장 패널
        			this.sta_transitArea.set_enable(false);
         			this.cbo_transitArea.set_visible(false);
        			this.cbo_transitArea.set_enable(false);
         			this.sta_printWeek.set_visible(false);  //인쇄주차 텍스트 박스
        			this.sta_printWeek.set_enable(false);
         			this.edt_printWeek.set_visible(false);
        			this.edt_printWeek.set_enable(false);
         			break;
         		case this.ProcessType.WorkCompletion: // ProcessType.WorkCompletion:
         			this.sta_transitArea.set_visible(false); //인계작업장 패널
        			this.sta_transitArea.set_enable(false);
         			this.cbo_transitArea.set_visible(false);
        			this.cbo_transitArea.set_enable(false);
         			this.sta_printWeek.set_visible(false);  //인쇄주차 텍스트 박스
        			this.sta_printWeek.set_enable(false);
         			this.edt_printWeek.set_visible(false);
        			this.edt_printWeek.set_enable(false);
        			this.edt_printWeek.set_readonly(true);
         			break;
         		case this.ProcessType.TransitRegist: // ProcessType.TransitRegist:
         			this.sta_equpmentClass.set_visible(false);
        			this.sta_equpmentClass.set_enable(false);
         			this.cbo_equpmentClass.set_visible(false);
        			this.cbo_equpmentClass.set_enable(false);
         			this.sta_equpment.set_visible(false);
        			this.sta_equpment.set_enable(false);
         			this.cbo_equpment.set_visible(false);
        			this.cbo_equpment.set_enable(false);
         			this.sta_printWeek.set_visible(false);  //인쇄주차 텍스트 박스
        			this.sta_printWeek.set_enable(false);
         			this.edt_printWeek.set_visible(false);
        			this.edt_printWeek.set_enable(false);
         			break;
         	}
         };

         this.setUserInfo = function ()
         {
         	//GetUserList 10001
         	var txtSearch = ""
         	if (!this.nfn_isNull(this.parent.parent.parent.parent.div_work.form.div_search.form.edt_area.value))
         	{
         		txtSearch = "USERIDNAME="+ this.gf_getUserId();
         	}

         	var popupId = "SEARCH_UserList";  ///pcmCommon/getUserList.do
         	var oArg = {};
         	oArg.arg_type = "BA"; // C: 체크박스 B: 단일, CA : arg_searchStr 자동조회
         	oArg.arg_popupCd = "P00195";
         	oArg.arg_popupNm = "유저 리스트 조회";
         	oArg.arg_rtnCols = "WORKERID|WORKERNAME";
         	oArg.arg_paramCols = "PLANTID";
         	oArg.arg_paramValues = this.gf_getSiteType() ;  //this.gf_getSiteType()
         	oArg.arg_searchStr = txtSearch;

         	this.gfn_openPopup(popupId,"pcm::PCM01700P5.xfdl",oArg,"width=450,height=600");
         };

         // 인계작업장 visible
         this.getTransitAreaVisible = function ()
         {
         	return this.sta_transitArea.visible;
         };

         this.setTransitAreaVisible = function (v)
         {
         	this.sta_transitArea.set_visible(v);
        	this.sta_transitArea.set_enable(v);
         	this.cbo_transitArea.set_visible(v);
        	this.cbo_transitArea.set_enable(v);
         };


         //UOM 콤보
         this.getUnitComboEnable = function ()
         {
         	return this.cbo_unitOfMaterial.enable;
         };

         this.setUnitComboEnable = function (v)
         {
         	this.cbo_unitOfMaterial.set_enable(v);
         };

          this.setUserInfoByArea = function ()
         {
         	//GetUserList 10001
         	var txtSearch = ""
         	if (!this.nfn_isNull(this.parent.parent.parent.parent.div_work.form.div_search.form.edt_area.value))
         	{
         		txtSearch = "TXTWORKERIDNAME="+ this.edt_worker.value;
         	}


         	// 자사구분
         	//workerCondition.GridColumns.AddComboBoxColumn("OWNTYPE", 100, new SqlQuery("GetCodeList", "00001", "CODECLASSID=OwnType", $"LANGUAGETYPE={UserInfo.Current.LanguageType}"));
         	// 작업자유형
         	//workerCondition.GridColumns.AddComboBoxColumn("WORKERTYPE", 120, new SqlQuery("GetCodeList", "00001", "CODECLASSID=WorkerType", $"LANGUAGETYPE={UserInfo.Current.LanguageType}"));

         	//???  ==> 디폴트 , 작업자유형 팝업

         	var popupId = "SEARCH_WorkerByProcess";  // /pcmCommon/getWorkerByProcess.do
         	var oArg = {};
         	oArg.arg_type = "BA"; // C: 체크박스 B: 단일, CA : arg_searchStr 자동조회
         	oArg.arg_popupCd = "P00196";  //getWorkerByProcess.do  /pcmCommon/getWorkerByProcess.do
         	oArg.arg_popupNm = "작업자 조회";
         	oArg.arg_rtnCols = "WORKERID|WORKERNAME|EMPLOYEENO|DEPARTMENT|OWNTYPE|WORKERTYPE";
         	oArg.arg_paramCols = "USERID|ENTERPRISEID|PLANTID|AREAID";
         	oArg.arg_paramValues = this.gf_getUserId() + "|" + this.gf_getEnterpriseId() + "|" + this.gf_getSiteType() + "|" +  this.g_areaId;  //this.gf_getSiteType()
         	oArg.arg_searchStr = txtSearch;

         	this.gfn_openPopup(popupId,"pcm::PCM01700P5.xfdl",oArg,"width=700,height=800");

         };

        this.setControlsInfo = function (areaId, lotId, dataSet)
         {

         // 	areaId => txtArea.Editor.SelectedData.FirstOrDefault()["AREAID"].ToString()
         // 	lotId => txtLotId.Text
         // 	dataSource => lotInfo   DataTable lotInfo = SqlExecuter.Query("SelectLotInfoByProcess", processDefType == "Rework" ? "10032" : "10031", param); 데이타셋
         // 	queryVersion => queryVersion

        	this.btn_workerSrh_flag = false;

        	this.g_workerId = "";
         	this.edt_worker.set_value("");

        	this.g_areaId = areaId;
        	this.g_LotId  = lotId;
         	//DataTable dataSource, string queryVersion = "10001"
            this.lastRework  = "N";

         	this.ds_lotInfoData.clearData();
         	this.ds_lotInfoData.copyData(dataSet);


         	if (this.getProcessType() == this.ProcessType.LotAccept || this.getProcessType() == this.ProcessType.TransitRegist)
         	{
        		this.g_workerId = this.gf_getUserId();
        		this.edt_worker.set_value(this.gf_getUserNm());

        		this.ds_workInfo.setColumn(0, "WORKER", this.gf_getUserId());

        		this.edt_worker.set_enable(false);
        		this.btn_workerSrh.set_enable(false);

        		this.setControlsInfo2();
         	}
        	else
        	{
        		this.edt_worker.set_enable(true);
        		this.btn_workerSrh.set_enable(true);

        		this.setControlsInfo2();
        	}

         };

         this.setControlsInfo2 = function ()
         {

        	if(this.btn_workerSrh_flag) return;

         	this.ds_transitAreaParam.clearData();
         	this.ds_transitAreaParam.addRow();
         	this.ds_transitAreaParam.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId()); //??? ==> 세션
         	this.ds_transitAreaParam.setColumn(0, "PLANTID", this.gf_getSiteType());
         	this.ds_transitAreaParam.setColumn(0, "LOTID", this.g_LotId );
         	this.ds_transitAreaParam.setColumn(0, "PROCESSSEGMENTID", this.ds_lotInfoData.getColumn(0, "NEXTPROCESSSEGMENTID"));
         	this.ds_transitAreaParam.setColumn(0, "PROCESSSEGMENTVERSION", this.ds_lotInfoData.getColumn(0, "NEXTPROCESSSEGMENTVERSION"));
         	this.ds_transitAreaParam.setColumn(0, "RESOURCETYPE", "Resource");
         	this.ds_transitAreaParam.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());


         	switch (this.getProcessType())
         	{
         		case this.ProcessType.LotAccept:
        			this.setControlsInfo3();
         			break;
         		case this.ProcessType.StartWork:
        			this.setControlsInfo3();
         			break;
         		case this.ProcessType.WorkCompletion:
         			var processSegmentType = this.ds_lotInfoData.getColumn(0, "PROCESSSEGMENTTYPE");
         			var isWeekMng = this.ds_lotInfoData.getColumn(0, "ISWEEKMNG");
         			var stepType = this.ds_lotInfoData.getColumn(0, "STEPTYPE");

         			if (isWeekMng == "Y") {
         				this.sta_printWeek.set_visible(true);
        				this.sta_printWeek.set_enable(true);
         				this.edt_printWeek.set_visible(true);
        				this.edt_printWeek.set_enable(true);
        				this.edt_printWeek.set_readonly(false);
         			}
         			else
         			{
         				this.sta_printWeek.set_visible(false);
        				this.sta_printWeek.set_enable(false);
         				this.edt_printWeek.set_visible(false);
        				this.edt_printWeek.set_enable(false);
        				this.edt_printWeek.set_readonly(true);
         			}

         			// TODO : Resource
         			// 인계 작업장
        			trace(stepType);
         			if (stepType.split(',').indexOf("WaitForSend") == -1)
         			{

         				this.sta_transitArea.set_visible(true);
        				this.sta_transitArea.set_enable(true);
         				this.cbo_transitArea.set_visible(true);
        				this.cbo_transitArea.set_enable(true);
        				this.cbo_transitArea.set_readonly(false);


        				this.fn_getLotProductTypePathType();


         			}
         			else
         			{
         				this.sta_transitArea.set_visible(false);
        				this.sta_transitArea.set_enable(false);
         				this.cbo_transitArea.set_visible(false);
        				this.cbo_transitArea.set_enable(false);
        				this.cbo_transitArea.set_readonly(true);
         				this.cbo_transitArea.set_innerdataset(null);

        				this.setControlsInfo3();
         			}


         			break;
         		case this.ProcessType.TransitRegist:

        			this.fn_getLotProductTypePathType();

         			break;
         	} //switch end


         };

         this.fn_getLotProductTypePathType = function ()
         {
        	this.ds_lotParam.clearData();
        	this.ds_lotParam.addRow();
        	this.ds_lotParam.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_lotParam.setColumn(0, "PLANTID", this.plantId);
        	this.ds_lotParam.setColumn(0, "LOTID", this.g_LotId);
        	this.ds_lotParam.setColumn(0, "VERSION", "10001");


        	//10001
        	var sSvcID = "getLotProductTypePathType";
        	var sController = "/pcm01700/getLotProductTypePathType.do";
        	var sInDatasets = "INPUT=ds_lotParam";
        	var sOutDatasets = "ds_lotInfo=output";  // 확인
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
         };

         this.setControlsInfo3 = function ()
         {
         	var defectUnit = this.ds_lotInfoData.getColumn(0, "DEFECTUNIT");

         	if (this.nfn_isNull(defectUnit))
         	{
         		var materialClass = this.nfn_nvl(this.ds_lotInfoData.getColumn(0, "MATERIALCLASS"), "");

         		this.cbo_unitOfMaterial.set_value("PNL") ; //  콤보리스트에서 PNL 선택
        		this.ds_workInfo.setColumn(0, "UNIT", "PNL");

         		if (materialClass == "FG")
         		{
         			this.cbo_unitOfMaterial.set_enable(true);
         		}
         		else
         		{
         			var pcsPnl = nexacro.toNumber(this.nfn_nvl(this.ds_lotInfoData.getColumn(0, "PANELPERQTY"), "0"));

         			if (pcsPnl == 0)
        			{
         				this.cbo_unitOfMaterial.set_value("EA");
        				this.ds_workInfo.setColumn(0, "UNIT", "EA");
        			}

         			this.cbo_unitOfMaterial.set_enable(true);
         		}
         	}
         	else
         	{
         		this.cbo_unitOfMaterial.set_value(defectUnit);
        		this.ds_workInfo.setColumn(0, "UNIT", defectUnit);
         		this.cbo_unitOfMaterial.set_enable(false);
         	}

         	var unitOfMaterial = this.cbo_unitOfMaterial.value;

         	this.spn_numGoodQty.set_value(nexacro.toNumber(this.nfn_nvl(this.ds_lotInfoData.getColumn(0, "PCSQTY"), "0"))); //
         	this.spn_numGoodPnlQty.set_value(nexacro.toNumber(this.nfn_nvl(this.ds_lotInfoData.getColumn(0, "PNLQTY"), "0")));

        	this.ds_workInfo.setColumn(0, "GOODQTY"   , nexacro.toNumber(this.nfn_nvl(this.ds_lotInfoData.getColumn(0, "PCSQTY"), "0")));
        	this.ds_workInfo.setColumn(0, "GOODPNLQTY", nexacro.toNumber(this.nfn_nvl(this.ds_lotInfoData.getColumn(0, "PNLQTY"), "0")));

        	// 메인 창 콜백
        	this.parent.parent.parent.parent.fn_setControlsInfo_CallBack();
         };

         this.setWorker = function (workerId, workerName)
         {
        	this.g_workerId = workerId;
        	this.edt_worker.set_value(workerName);

        	this.ds_workInfo.setColumn(0, "WORKER", workerId);
         };

         this.setQty = function (defectQty)
         {
         	defectQty = nexacro.toNumber(defectQty);

         	var unit = this.cbo_unitOfMaterial.value;

         	var panelQty = nexacro.toNumber(this.nfn_nvl(this.ds_lotInfoData.getColumn(0, "PNLQTY"), "0"));
         	var qty = nexacro.toNumber(this.nfn_nvl(this.ds_lotInfoData.getColumn(0, "PCSQTY"), "0"));
         	var pcsPnl = nexacro.toNumber(this.nfn_nvl(this.ds_lotInfoData.getColumn(0, "PANELPERQTY"), "0"));
         	var dDefectPnlQty = 0;
         	var dGoodPnlQty = 0;

         	if (pcsPnl > 0)
         	{
         		dGoodPnlQty = nexacro.ceil((qty - defectQty) / pcsPnl);
         		dDefectPnlQty = nexacro.ceil(defectQty / pcsPnl);
         	}


         	this.spn_numDefectQty.set_value(defectQty);
         	this.spn_numGoodQty.set_value(qty - defectQty);

         	this.spn_numGoodPnlQty.set_value(dGoodPnlQty);
         	this.spn_numDefectPnlQty.set_value(dDefectPnlQty);

        	this.ds_workInfo.setColumn(0, "DEFECTQTY"   , defectQty);
        	this.ds_workInfo.setColumn(0, "GOODQTY", qty - defectQty);

        	this.ds_workInfo.setColumn(0, "GOODPNLQTY", dGoodPnlQty);
        	this.ds_workInfo.setColumn(0, "DEFECTPNLQTY"   , dDefectPnlQty);


         };

         this.getValues = function ()
         {
        	this.ds_workInfo.setColumn(0, "WORKER", this.g_workerId);


         	this.ds_result.clearData();
         	this.ds_result.addRow();
         	this.ds_result.setColumn(0, "WORKER", this.g_workerId);
         	this.ds_result.setColumn(0, "UNIT", this.cbo_unitOfMaterial.value);
         	this.ds_result.setColumn(0, "GOODQTY", this.spn_numGoodQty.value);
         	this.ds_result.setColumn(0, "GOODPNLQTY", this.spn_numGoodPnlQty.value);
         	this.ds_result.setColumn(0, "DEFECTQTY", this.spn_numDefectQty.value);
         	this.ds_result.setColumn(0, "DEFECTPNLQTY", this.spn_numDefectPnlQty.value);


         	if (this.sta_transitArea.visible)
         	{
         		if (this.cbo_transitArea.codecolumn == "AREAID")
         		{
         			this.ds_result.setColumn(0, "TRANSITAREA", this.cbo_transitArea.value);
        			this.ds_workInfo.setColumn(0, "TRANSITAREA", this.cbo_transitArea.value);
         		}
         		else if (this.cbo_transitArea.codecolumn == "RESOURCEID")
         		{
         			this.ds_result.setColumn(0, "RESOURCEID", this.cbo_transitArea.value);
         			this.ds_result.setColumn(0, "TRANSITAREA", this.ds_transitAreaList.getColumn(this.ds_transitAreaList.getRowCount()-1, "AREAID"));

        			this.ds_workInfo.setColumn(0, "RESOURCEID", this.cbo_transitArea.value);
        			this.ds_workInfo.setColumn(0, "TRANSITAREA", this.ds_transitAreaList.getColumn(this.ds_transitAreaList.getRowCount()-1, "AREAID"));
         		}
         	}

         	if (this.edt_printWeek.visible)
        	{
         		this.ds_result.setColumn(0, "PRINTWEEK", this.edt_printWeek.value);
        		this.ds_workInfo.setColumn(0, "PRINTWEEK", this.edt_printWeek.value);
        	}

         	this.ds_result.setColumn(0, "COMMENT", this.edt_comment.value);
        	this.ds_workInfo.setColumn(0, "COMMENT", this.edt_comment.value);

         	return this.ds_result;
         };


         this.getEquipmentList = function ()
         {
         	return ""; // this.cbo_equpment 의 데이타셋 리턴
         };

         this.getLotEquipmentList = function ()
         {
         	return this.cbo_equpment.value.split(',');
         };

          this.clearData = function ()
         {
         /*	ClearControlsEditValue(tlpProcessFourStepInfo.Controls);*/

         	if (this.getProcessType() == this.ProcessType.WorkCompletion)
         	{
         		if (this.edt_printWeek.visible) {
         			this.sta_printWeek.set_visible(false);
        			this.sta_printWeek.set_enable(false);
         			this.edt_printWeek.set_visible(false);
        			this.edt_printWeek.set_enable(false);
        			this.edt_printWeek.set_readonly(t);
         		}

         		if (this.cbo_transitArea.visible) {
         			this.sta_transitArea.set_visible(false);
        			this.sta_transitArea.set_enable(false);
         			this.cbo_transitArea.set_visible(false);
        			this.cbo_transitArea.set_enable(false);
         		}
         	}
         };

         this.getEquipmentDataSource = function ()
         {
         	return this.cbo_equpment.getInnerDataset();
         };

         this.getWorker = function (workerId, workerName)
         {
        	this.g_workerId = workerId;
         	this.edt_worker.set_value(workerName);

        	this.ds_workInfo.setColumn(0, "WORKER", workerId);
         };

         this.setEnable = function (isEnable)
         {
         	this.setEnableControl(isEnable);
         };

         this.setUnitOfMaterialControlEnable = function ()
         {
         	var defectUnit = this.ds_lotInfoData.getColumn(0, "DEFECTUNIT");

         	if (this.nfn_isNull(defectUnit))
         	{
         		var materialClass = this.nfn_nvl(this.ds_lotInfoData.getColumn(0, "MATERIALCLASS"), "");

         		this.cbo_unitOfMaterial.set_value("PNL"); // cboUnitOfMaterial.EditValue = "PNL"; ??
        		this.ds_workInfo.setColumn(0, "UNIT", "PNL");

         		if (materialClass == "FG")
         		{
         			this.cbo_unitOfMaterial.set_enable(true);
         		}
         		else
         		{
         			var pcsPnl = nexacro.toNumber(this.nfn_nvl(this.ds_lotInfoData.getColumn(0, "PANELPERQTY"), "0"));

         			if (pcsPnl == 0) {
         				this.cbo_unitOfMaterial.set_value("EA"); // cboUnitOfMaterial.EditValue = "EA"; ??
        				this.ds_workInfo.setColumn(0, "UNIT", "EA");
        		    }
         			this.cbo_unitOfMaterial.set_enable(true);
         		}

         	}
         	else
         	{
         		this.cbo_unitOfMaterial.set_value(defectUnit); // cboUnitOfMaterial.EditValue = defectUnit; ??
        		this.ds_workInfo.setColumn(0, "UNIT", defectUnit);


         		this.cbo_unitOfMaterial.set_enable(false);
         	}
         };


        this.setEnableControl = function (isEnable)
        {


         	if (this.getProcessType() == this.ProcessType.LotAccept || this.getProcessType() == this.ProcessType.TransitRegist)
         	{
         // 						smartLabelSelectPopup.Editor.ReadOnly = true;
         // 						smartLabelSelectPopup.Editor.SearchButtonReadOnly = true;
         // 						smartLabelSelectPopup.Editor.ClearButtonVisible = false;
         		this.btn_workerSrh.set_enable(false);
         	}


         // 				smartLabelSelectPopup.Editor.ReadOnly = isEnable;
         // 				smartLabelSelectPopup.Editor.SearchButtonReadOnly = isEnable;
         // 				smartLabelSelectPopup.Editor.ClearButtonVisible = !isEnable;
         	//this.btn_workerSrh.set_enable(!isEnable);

         	this.cbo_unitOfMaterial.set_enable(isEnable);

         	this.cbo_equpment.set_enable(isEnable);
         	this.cbo_equpmentClass.set_enable(isEnable);
         	this.cbo_unitOfMaterial.set_enable(isEnable);

         	this.cbo_transitArea.set_enable(isEnable);
         	this.edt_printWeek.set_enable(isEnable);

         };


        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/



        this.cbo_equpmentClass_onitemchanged = function(obj,e)
        {
         	if (!this.cbo_equpmentClass.visible)
         		return;


         	if (this.cbo_equpment.getInnerDataset() == null)
         		return;

         	//DataView view = (cbo_equpment.Editor.DataSource as DataTable).DefaultView; ??? -===> 필요없는거다.

         	if (this.nfn_isNull(this.cbo_equpmentClass.value))
         		view.RowFilter = "";
         	else
         		view.RowFilter = "EQUIPMENTCLASSID = '" + this.cbo_equpmentClass.value + "'";

         	//EquipmentClassEditValueChanged?.Invoke(cbo_equpment.Editor, e); // 투명도 바꾸기
        };

        this.cbo_unitOfMaterial_onitemchanged = function(obj,e)
        {

        };

        this.btn_workerSrh_onclick = function(obj,e)
        {
        	this.btn_workerSrh_flag  = true;

         	if (this.getProcessType() == this.ProcessType.LotAccept || this.getProcessType() == this.ProcessType.TransitRegist)
         	{
         		this.setUserInfo();
         	}
         	else
         	{
         		this.setUserInfoByArea();
         	}

        };

        this.edt_worker_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.btn_workerSrh_onclick();
        	}
        };

        this.cbo_transitArea_onitemchanged = function(obj,e)
        {
        	var tabObj  = this.parent.parent.parent.parent.div_work.form.tab_main.tpgPostProcessEquipmentWip;
        	tabObj.form.fn_search();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_workerSrh.addEventHandler("onclick",this.btn_workerSrh_onclick,this);
            this.edt_worker.addEventHandler("onkeydown",this.edt_worker_onkeydown,this);
            this.cbo_unitOfMaterial.addEventHandler("onitemchanged",this.cbo_unitOfMaterial_onitemchanged,this);
            this.cbo_transitArea.addEventHandler("onitemchanged",this.cbo_transitArea_onitemchanged,this);
            this.cbo_equpmentClass.addEventHandler("onitemchanged",this.cbo_equpmentClass_onitemchanged,this);
        };
        this.loadIncludeScript("PCM01700D02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
