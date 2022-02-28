(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM01700T09");
            this.set_titletext("설비");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,316);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_equipmentInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINTIME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKOUTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PNLQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RECIPEID\" type=\"STRING\" size=\"256\"/><Column id=\"RECIPEVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RECIPETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_equipmentParam", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DETAILEQUIPMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_equipmentInfoTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINTIME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKOUTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PNLQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RECIPEID\" type=\"STRING\" size=\"256\"/><Column id=\"RECIPEVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RECIPETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_equipmentInfoSave", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINTIME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKOUTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PNLQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RECIPEID\" type=\"STRING\" size=\"256\"/><Column id=\"RECIPEVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RECIPETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotInfoData", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PATHTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPEID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STEPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRINTLOTCARD\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRINTRCLOTCARD\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINUSER\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"ISRCLOT\" type=\"STRING\" size=\"256\"/><Column id=\"SELFSHIPINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"SELFTAKEINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"OSPINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"ISBEFOREROLLCUTTING\" type=\"STRING\" size=\"256\"/><Column id=\"Column30\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"ISWEEKMNG\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTPROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLAIMLOT\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"ISREWORK\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"DUEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("edt_equipment","229","9","200","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("title1_01","0","0","80","34",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("설비");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_equipment","0","34",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_equipmentInfo");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"설비ID\" tooltiptext=\"EQUIPMENTID\"/><Cell col=\"3\" text=\"설비명\" tooltiptext=\"EQUIPMENTNAME\"/><Cell col=\"4\" text=\"Receipe Id\"/><Cell col=\"5\" text=\"Recipe 버전\"/><Cell col=\"6\" text=\"Recipe Type\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:EQUIPMENTID\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:EQUIPMENTNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:RECIPEID\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:RECIPEVERSION\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:RECIPETYPE\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_equipmentInfo","title1_01:0","0","140","34",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_equipmentId","sta_cnt_ds_equipmentInfo:5","9","160","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_equipmentSrh","edt_equipment:0","9","22","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_finder");
            obj.set_visible("false");
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
        this.addIncludeScript("PCM01700T09.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM01700T09.xfdl","lib::lib_pcm.xjs");
        this.addIncludeScript("PCM01700T09.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("PCM01700T09.xfdl","lib::lib_mtm.xjs");
        this.registerScript("PCM01700T09.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 인수등록 :: 설비 탭
         * 파일명 		: PCM01700T09.xfdl
         * 작성자 		: 김성현
         * 작성일 		: 2021.04.10
         *
         * 설  명		: 인수등록 :: 설비 탭
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.10	김성현   	최초작성
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

        this._visibleTopDefectCode = false;

        this.ds_equipmentInfo_rowposition = -1;

        this.recipeNameFieldName;
        this.parameterNameFieldName;

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	console.log("PCM01700T09");

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
        		case "getEquipmentByArea":
        			console.log(this.ds_equipmentInfo.saveXML());

        			break;

        		case "getLotEquipmentByArea":

        			this.ds_equipmentParam.clearData();
        			this.ds_equipmentParam.addRow();
        			this.ds_equipmentParam.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        			this.ds_equipmentParam.setColumn(0, "PLANTID", this.gf_getSiteType() );
        			this.ds_equipmentParam.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        			this.ds_equipmentParam.setColumn(0, "LOTID", this.parent.parent.parent.parent.parent.div_work.form.div_search.form.edt_lotId.value);
        			this.ds_equipmentParam.setColumn(0, "EQUIPMENTTYPE", "Production");
        			this.ds_equipmentParam.setColumn(0, "DETAILEQUIPMENTTYPE", "Main");
        			this.ds_equipmentParam.setColumn(0, "VERSION", "10031");


        			var sSvcID = "getEquipmentByArea";
        			var sController = "/pcm01800/getEquipmentByArea.do";
        			var sInDatasets = "INPUT=ds_equipmentParam";
        			var sOutDatasets = "ds_equipmentInfoSave=output";
        			var sArgs = "";
        			this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

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
        		case "SEARCH_RECIPEID":

        			var nRow = this.ds_equipmentInfo.rowcount == 1 ? 0 : this.ds_equipmentInfo_rowposition;

        			// "EQUIPMENTID|RECIPEID|RECIPEVERSION|RECIPENAME|PRODUCTTYPE|RECIPETYPE"


        			this.ds_equipmentInfo.setColumn(nRow,"EQUIPMENTID",rtn[0]);
        			this.ds_equipmentInfo.setColumn(nRow,"RECIPEID",rtn[1]);
        			this.ds_equipmentInfo.setColumn(nRow,"RECIPEVERSION",rtn[2]);
        			this.ds_equipmentInfo.setColumn(nRow,"RECIPENAME",rtn[3]);
        			this.ds_equipmentInfo.setColumn(nRow,"PRODUCTTYPE",rtn[4]);
        			this.ds_equipmentInfo.setColumn(nRow,"RECIPETYPE",rtn[5]);

        			// DECISIONDEGREENAME ???

        			break;

        		default :
        			break;
         	}
         };

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/

         this.fn_search = function ()
         {
         	var vLotId          = this.parent.parent.parent.parent.parent.g_LotId;
        	var vPanelperQty    = this.parent.parent.parent.parent.parent.g_PanelperQty;
        	var vPnlQty         = this.parent.parent.parent.parent.parent.g_PnlQty;
        	var vPcsQty         = this.parent.parent.parent.parent.parent.g_PcsQty;
        	var vQueryVersion   = this.parent.parent.parent.parent.parent.queryVersion;
        	var vLotInfoData    = this.parent.parent.parent.parent.parent.ds_lotInfo;

        	this.setLotInfo(vLotId, vPanelperQty, vPnlQty, vPcsQty, vQueryVersion, vLotInfoData);

        	console.log("fn_search");


        	if(this.getProcessType() == this.ProcessType.StartWork)
        	{
        		//작업 시작

        		this.ds_equipmentParam.clearData();
        		this.ds_equipmentParam.addRow();
        		this.ds_equipmentParam.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        		this.ds_equipmentParam.setColumn(0, "PLANTID", this.gf_getSiteType() );
        		this.ds_equipmentParam.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        		this.ds_equipmentParam.setColumn(0, "LOTID", this.parent.parent.parent.parent.parent.div_work.form.div_search.form.edt_lotId.value);
        		this.ds_equipmentParam.setColumn(0, "EQUIPMENTTYPE", "Production");
        		this.ds_equipmentParam.setColumn(0, "DETAILEQUIPMENTTYPE", "Main");
        		this.ds_equipmentParam.setColumn(0, "VERSION", "10031");


        		var sSvcID = "getEquipmentByArea";
        		var sController = "/pcm01800/getEquipmentByArea.do";
        		var sInDatasets = "INPUT=ds_equipmentParam";
        		var sOutDatasets = "ds_equipmentInfo=output";
        		var sArgs = "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	}
        	else if(this.getProcessType() == this.ProcessType.WorkCompletion)
        	{
        		//작업 완료

        		this.ds_equipmentParam.clearData();
        		this.ds_equipmentParam.addRow();
        		this.ds_equipmentParam.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        		this.ds_equipmentParam.setColumn(0, "PLANTID", this.gf_getSiteType() );
        		this.ds_equipmentParam.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        		this.ds_equipmentParam.setColumn(0, "LOTID", this.parent.parent.parent.parent.parent.div_work.form.div_search.form.edt_lotId.value);
        		this.ds_equipmentParam.setColumn(0, "EQUIPMENTTYPE", "Production");
        		this.ds_equipmentParam.setColumn(0, "DETAILEQUIPMENTTYPE", "Main");
        		this.ds_equipmentParam.setColumn(0, "VERSION", "10031");


        		var sSvcID = "getLotEquipmentByArea";
        		var sController = "/pcm01900/getLotEquipmentByArea.do";
        		var sInDatasets = "INPUT=ds_equipmentParam";
        		var sOutDatasets = "ds_equipmentInfo=output";
        		var sArgs = "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	}

        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/


        this.edt_equipmentId_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		if (this.getProcessType() != this.ProcessType.StartWork)
        			return;

        		var nRow = this.ds_equipmentInfo.findRow( "EQUIPMENTID", this.nfn_nvl(this.edt_equipmentId.value, "") );
        		this.ds_equipmentInfo.setColumn(nRow, "CHK", "1");

        		this.edt_equipmentId.set_value("");
        	}
        };


        this.ds_equipmentInfo_onrowposchanged = function(obj,e)
        {
        	this.ds_equipmentInfo_rowposition = obj.rowposition;

        	if (e.newrow < 0)
        		return;


        	var isEquipmentid = obj.getColumn(e.newrow, "EQUIPMENTID");

        // 	DataTable dt = grdEquipmentRecipe.DataSource as DataTable;
        //
        // 	if (dt == null) return;
        //
        // 	int cnt = dt.AsEnumerable().Where(c => Format.GetTrimString(c["EQUIPMENTID"]).Equals(isEquipmentid)).Count();
        //
        // 	if (cnt > 0)
        // 	{
        // 		e.Appearance.BackColor = Color.Green;
        // 		e.HighPriority = true;
        // 	}
        };


        this.ds_equipmentInfo_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "CHK" && obj.getColumn(e.row, "CHK") == "1")
        	{


        		this.ds_equipmentInfoTemp.clearData();
        		this.ds_equipmentInfoTemp.copyData(this.ds_equipmentInfo, true);


        		this.setDurableLotEquipmentDataSource(this.ds_equipmentInfoTemp);

        	}
        	else{
        		if (e.columnid == "PCSQTY")
        		{

        			var panelPerQty = nexacro.toNumber(this.nfn_nvl(this.ds_lotInfoData.getColumn(0, "PANELPERQTY"), "0"));

        			this.ds_equipmentInfo.setColumn(e.newvalue, "PNLQTY",  nexacro.ceil(e.newvalue) / panelPerQty);
        		}
        		else if (e.columnid == "PNLQTY")
        		{
        			var panelPerQty = nexacro.toNumber(this.nfn_nvl(this.ds_lotInfoData.getColumn(0, "PANELPERQTY"), "0"));

        			this.ds_equipmentInfo.setColumn(e.newvalue, "PCSQTY",  nexacro.ceil(e.newvalue) / panelPerQty);
        		}
        	}

        };

        this.setDurableLotEquipmentDataSource = function(obj)
        {
        	this.ds_equipmentInfoTemp.filter("CHK=='1'");
        	if (this.getProcessType() == this.ProcessType.StartWork)
        	{


        		var grd_durableStart = this.parent.parent.parent.parent.parent.div_work.form.tab_pfsDetail_StartWork.tabpages.tpgDurableStart.form.grd_durableStart;
         		var durableStartInfo = this.parent.parent.parent.parent.parent.div_work.form.tab_pfsDetail_StartWork.tabpages.tpgDurableStart.form.ds_durableStartInfo;
        // 		ds_durableStartInfo.enableevent(false);

        		var equipmentInfo = this.parent.parent.parent.parent.parent.div_work.form.tab_pfsDetail_StartWork.tabpages.tpgDurableStart.form.ds_equipmentList;


        		if(equipmentInfo.getRowCount() == 0)
        		{
        			equipmentInfo.addColumn( "EQUIPMENTID"       , "string", 256 );
        			equipmentInfo.addColumn( "EQUIPMENTNAME"     , "string", 256 );
        		}

        		equipmentInfo.clearData();
        		equipmentInfo.copyData(obj, true);



        		durableStartInfo.set_enableevent(true);

        		grd_durableStart.set_combodataset(equipmentInfo);

        		grd_durableStart.updateToDataset();
        	}
        	else if (this.getProcessType() == this.ProcessType.WorkCompletion)
        	{
        		var form = this.parent.parent.parent.parent.parent.pfsDetail_form();

        		if(form.ds_equipmentList.getRowCount() == 0)
        		{
        			form.ds_equipmentList.addColumn( "EQUIPMENTID"       , "string", 256 );
        			form.ds_equipmentList.addColumn( "EQUIPMENTNAME"     , "string", 256 );
        		}

        		form.ds_equipmentList.clearData();
        	    form.ds_equipmentList.copyData(obj, true);

        		form.ds_equipmentList.set_enableevent(true);
        	}

        	this.ds_equipmentInfoTemp.filter("");
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

        this.getCheckedEquipmentId = function ()
        {
        	var result = "";

        	this.ds_equipmentInfo.set_enableevent(false);
        	this.ds_equipmentInfo.filter("CHK='1'");

        	for(var i = 0; i < this.ds_equipmentInfo.getRowCount(); i++)
        	{
        		result += this.ds_equipmentInfo.getColumn(i, "EQUIPMENTID")  + ",";
        	}

        	if (result.length > 0)
        		result = result.substring(0, result.length - 1);

        	this.ds_equipmentInfo.filter("");
        	this.ds_equipmentInfo.set_enableevent(true);

        	return result;
         };

         this.getCheckedEquipmentId = function ()
        {
        	var result = "";

        	this.ds_equipmentInfo.set_enableevent(false);
        	this.ds_equipmentInfo.filter("CHK='1'");

        	for(var i = 0; i < this.ds_equipmentInfo.getRowCount(); i++)
        	{
        		result += this.ds_equipmentInfo.getColumn(i, "EQUIPMENTID")  + ",";
        	}

        	if (result.length > 0)
        		result = result.substring(0, result.length - 1);

        	this.ds_equipmentInfo.filter("");
        	this.ds_equipmentInfo.set_enableevent(true);

        	return result;
         };

        this.getEquipmentId = function ()
        {
        	var result = "";

        	this.ds_equipmentInfo.filter("");

        	for(var i = 0; i < this.ds_equipmentInfo.getRowCount(); i++)
        	{
        		result += this.ds_equipmentInfo.getColumn(i, "EQUIPMENTID")  + ",";
        	}

        	if (result.length > 0)
        		result = result.substring(0, result.length - 1);

        	return result;
         };

        this.btn_equipmentSrh_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.edt_equipmentId.addEventHandler("onkeydown",this.edt_equipmentId_onkeydown,this);
            this.btn_equipmentSrh.addEventHandler("onclick",this.btn_equipmentSrh_onclick,this);
            this.ds_equipmentInfo.addEventHandler("onrowposchanged",this.ds_equipmentInfo_onrowposchanged,this);
            this.ds_equipmentInfo.addEventHandler("oncolumnchanged",this.ds_equipmentInfo_oncolumnchanged,this);
            this.ds_equipmentInfoSave.addEventHandler("onrowposchanged",this.ds_equipmentInfo_onrowposchanged,this);
            this.ds_equipmentInfoSave.addEventHandler("oncolumnchanged",this.ds_equipmentInfo_oncolumnchanged,this);
        };
        this.loadIncludeScript("PCM01700T09.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
