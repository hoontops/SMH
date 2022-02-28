(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM01700T06");
            this.set_titletext("자재(작업시작)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,316);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_consumableList", this);
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"KEYCOLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"STOCKQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AVAILABLEQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"INPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ORGINPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LOTUSINGQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CONSUMABLEDEFECT\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLESTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_consumableParam", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_standardRequirementInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"KEYCOLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"STANDARDREQUIREMENTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"REQUIREMENTQTY\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_standardRequirementParam", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_param", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_checkParam", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_alternativeList", this);
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"KEYCOLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"STOCKQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AVAILABLEQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"INPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ORGINPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LOTUSINGQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CONSUMABLEDEFECT\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLESTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_priorityConsumableList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputQtyList", this);
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"KEYCOLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"STOCKQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AVAILABLEQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"INPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ORGINPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LOTUSINGQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CONSUMABLEDEFECT\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLESTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_consumableDistinctList", this);
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"KEYCOLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"STOCKQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AVAILABLEQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"INPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ORGINPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LOTUSINGQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CONSUMABLEDEFECT\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLESTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_consumableListTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"KEYCOLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"STOCKQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AVAILABLEQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"INPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ORGINPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LOTUSINGQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CONSUMABLEDEFECT\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLESTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotInfoData", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PATHTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPEID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STEPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRINTLOTCARD\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRINTRCLOTCARD\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINUSER\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"ISRCLOT\" type=\"STRING\" size=\"256\"/><Column id=\"SELFSHIPINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"SELFTAKEINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"OSPINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"ISBEFOREROLLCUTTING\" type=\"STRING\" size=\"256\"/><Column id=\"Column30\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"ISWEEKMNG\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTPROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLAIMLOT\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"ISREWORK\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"DUEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("title1_01","0","0","97","34",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("자재(작업시작)");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_standardRequirementStart","60%","34",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_standardRequirementInfo");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"자재 ID\" tooltiptext=\"CONSUMABLEDEFID\"/><Cell col=\"2\" text=\"자재명\" tooltiptext=\"CONSUMABLEDEFNAME\"/><Cell col=\"3\" text=\"기준소요량\" tooltiptext=\"STANDARDREQUIREMENTQTY\"/><Cell col=\"4\" text=\"소요량\" tooltiptext=\"REQUIREMENTQTY\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CONSUMABLEDEFID\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:CONSUMABLEDEFNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:STANDARDREQUIREMENTQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\"/><Cell col=\"4\" text=\"bind:REQUIREMENTQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_consumableStart","0","34",null,null,"grd_standardRequirementStart:10","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_consumableList");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"자재 ID\" tooltiptext=\"CONSUMABLEDEFID\"/><Cell col=\"2\" text=\"자재명\" tooltiptext=\"CONSUMABLEDEFNAME\"/><Cell col=\"3\" text=\"자재 LOT No.\" tooltiptext=\"CONSUMABLELOTID\"/><Cell col=\"4\" text=\"재고수량\" tooltiptext=\"STOCKQTY\"/><Cell col=\"5\" text=\"가용수량\" tooltiptext=\"AVAILABLEQTY\"/><Cell col=\"6\" text=\"투입수량\" tooltiptext=\"INPUTQTY\"/><Cell col=\"7\" text=\"Lot 사용수량\" tooltiptext=\"LOTUSINGQTY\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CONSUMABLEDEFID\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:CONSUMABLEDEFNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:CONSUMABLELOTID\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:STOCKQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\"/><Cell col=\"5\" text=\"bind:AVAILABLEQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\"/><Cell col=\"6\" text=\"bind:INPUTQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\"/><Cell col=\"7\" text=\"bind:LOTUSINGQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" edittype=\"mask\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_consumableLotIdStart","title1_01:200","9","65","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("자재 LOT");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_consumableLotIdStart","sta_consumableLotIdStart:5","9","160","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delRow",null,"7","29","24","grd_standardRequirementStart:10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdDel");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_consumableList","112","0","140","34",null,null,null,null,null,null,this);
            obj.set_taborder("6");
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
        this.addIncludeScript("PCM01700T06.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM01700T06.xfdl","lib::lib_pcm.xjs");
        this.addIncludeScript("PCM01700T06.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("PCM01700T06.xfdl","lib::lib_mtm.xjs");
        this.registerScript("PCM01700T06.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 인수등록 :: 자재(작업시작) 탭
         * 파일명 		: PCM01700T06.xfdl
         * 작성자 		: 김성현
         * 작성일 		: 2021.04.10
         *
         * 설  명		: 인수등록 :: 자재(작업시작) 탭
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
        this.ds_consumableList_rowposition = -1;




        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	console.log("PCM01700T06");

        	this.nfn_formInit(obj);

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
        		case "selectConsumableListByProcessWorkCompleteAndByProcess":
        		    console.log("selectConsumableListByProcessWorkCompleteAndByProcess");
        			console.log(this.ds_consumableList.saveXML());
        			console.log(this.ds_standardRequirementInfo.saveXML());

        			break;
        		case "getConsumableLotByProcess":

        			if (this.ds_consumableListTemp.getRowCount() > 0)
        			{

        				var currentAreaId    = this.nfn_nvl(this.ds_lotInfoData.getColumn(0, "AREAID"), "");
        				var consumableAreaId = this.nfn_nvl(this.ds_consumableListTemp.getColumn(0, "AREAID"), "");

        				var currentWarehouseId    = this.nfn_nvl(this.ds_lotInfoData.getColumn(0, "WAREHOUSEID"), "");
        				var consumableWarehouseId = this.nfn_nvl(this.ds_consumableListTemp.getColumn(0, "WAREHOUSEID"), "");

        				var consumableState = this.nfn_nvl(this.ds_consumableListTemp.getColumn(0, "CONSUMABLESTATE"), "");

        				if (currentWarehouseId != consumableWarehouseId)
        				{
        					// 현재 창고에서 보유하고 있는 자재가 아닙니다. 현재 창고 ID : {0}, 소유 창고 ID : {1}
        					this.gfn_Message("ConsumableNotInWarehouse", [currentWarehouseId, consumableWarehouseId], "info", "ok");
        					return;
        				}

        				if (consumableState == "Consumed")
        				{
        					// 해당 자재 Lot은 사용이 완료 된 Lot 입니다. Lot Id : {0}
        					this.gfn_Message("ConsumedConsumableLot", [this._lotId], "info", "ok");
        					return;
        				}

        				if (consumableState == "Scrapped")
        				{
        					// 해당 자재 Lot은 폐기 처리 된 Lot 입니다. Lot Id : {0}
        					this.gfn_Message("ScrappedConsumableLot", [this._lotId], "info", "ok");
        					return;
        				}


        				var inputQty = nexacro.toNumber(this.nfn_nvl(this.ds_consumableListTemp.getColumn(0, "INPUTQTY"), "0"));

        				if (inputQty <= 0)
        				{
        					var stockQty    = nexacro.toNumber(this.nfn_nvl(this.ds_consumableListTemp.getColumn(0, "STOCKQTY"), "0"));
        					var lotUsingQty = nexacro.toNumber(this.nfn_nvl(this.ds_consumableListTemp.getColumn(0, "LOTUSINGQTY"), "0"));

        					// 해당 자재 Lot은 다른 Lot에서 모두 사용되었습니다. 재고수량 : {0}, Lot 사용수량 : {1}
        					this.gfn_Message("ConsumableLotIsAlreadyUsingInLot", [stockQty.ToString("#,##0.#####"), lotUsingQty.ToString("#,##0.#####")], "info", "ok");
        					return;
        				}


        				var consumableLotId 	 = this.nfn_nvl(this.ds_consumableListTemp.getColumn(0, "CONSUMABLELOTID"), "");
        				var consumableDefId      = this.nfn_nvl(this.ds_consumableListTemp.getColumn(0, "CONSUMABLEDEFID"), "");
        				var consumableDefVersion = this.nfn_nvl(this.ds_consumableListTemp.getColumn(0, "CONSUMABLEDEFVERSION"), "");


        				//ds_consumableList KEYCOLUMN group by SUM(INPUTQTY)


        				this.ds_consumableDistinctList.clearData();
        				this.ds_consumableDistinctList.copyData(this.ds_consumableList);

        				this.gf_distincDsFilter(this.ds_consumableDistinctList, "KEYCOLUMN");


        				trace("this.ds_consumableDistinctList.getRowCount() >>" + this.ds_consumableDistinctList.getRowCount());

        				var vKeyColumn = "";
        				var nRow = -1;
        				this.ds_inputQtyList.clearData();

        				this.ds_consumableList.set_enableevent(false);

        				for(var i=0; i<this.ds_consumableDistinctList.getRowCount(); i++)
        				{
        					vKeyColumn = this.ds_consumableDistinctList.getColumn(i, "KEYCOLUMN");

        					this.ds_consumableList.filter("KEYCOLUMN=='" + vKeyColumn + "'");

        					nRow = this.ds_inputQtyList.addRow();
        					this.ds_inputQtyList.setColumn(nRow, "KEYCOLUMN", vKeyColumn);
        					this.ds_inputQtyList.setColumn(nRow, "INPUTQTY", this.ds_consumableList.getSum("INPUTQTY"));

        					trace("this.ds_consumableList.getRowCount() 1>>" + this.ds_consumableList.getRowCount());
        					trace("this.ds_consumableList.getSum() >>" + this.ds_consumableList.getSum("INPUTQTY"));

        					this.ds_consumableList.filter("");
        				}

        				this.ds_consumableList.filter("");
        				this.ds_consumableList.set_enableevent(true);

        				//dataset.getSum('컬럼명')
        				var key = this.nfn_nvl(this.ds_consumableListTemp.getColumn(0, "KEYCOLUMN"), "");
        				var value_Key   = "";
        				var value_Value = -1;

        				for(var i = 0; i < this.ds_inputQtyList.getRowCount(); i++)
        				{
        					value_Key   = this.nfn_nvl(this.ds_inputQtyList.getColumn(i, "KEYCOLUMN"), "");
        					value_Value = nexacro.toNumber(this.nfn_nvl(this.ds_inputQtyList.getColumn(i, "INPUTQTY"), "0"));

        					if(key == value_Key)
        					{

        						var nRow   = this.ds_standardRequirementInfo.findRow("KEYCOLUMN", value_Key);
        						var reqQty = nexacro.toNumber(this.nfn_nvl(this.ds_standardRequirementInfo.getColumn(nRow, "REQUIREMENTQTY"), "0"));

        						if ((reqQty - value_Value) <= 0)
        						{
        							// {0} 자재는 이미 BOM 소요량만큼 투입되었습니다.
        							this.gfn_Message("ConsumableIsAlreadyInputEqualRequirement", [value_Key.split('|')[0]], "info", "ok");
        							return;
        						}

        						var vInputQty    = nexacro.toNumber(this.nfn_nvl(this.ds_consumableListTemp.getColumn(0, "INPUTQTY"), "0"));
        						var vOrginputQty = nexacro.toNumber(this.nfn_nvl(this.ds_consumableListTemp.getColumn(0, "ORGINPUTQTY"), "0"));

        						if (vInputQty > (reqQty - value_Value))
        							this.ds_consumableListTemp.setColumn(0, "INPUTQTY", (reqQty - value_Value));

        						if (vOrginputQty > (reqQty - value_Value))
        							this.ds_consumableListTemp.setColumn(0, "ORGINPUTQTY", (reqQty - value_Value));
        					}
        				}




        				this.ds_checkParam.clearData();
        				this.ds_checkParam.addRow();
        				this.ds_checkParam.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        				this.ds_checkParam.setColumn(0, "PLANTID", this.gf_getSiteType());
        				this.ds_checkParam.setColumn(0, "AREAID", this.nfn_nvl(this.ds_lotInfoData.getColumn(0, "AREAID"), ""));
        				this.ds_checkParam.setColumn(0, "CONSUMABLELOTID", consumableLotId);
        				this.ds_checkParam.setColumn(0, "CONSUMABLEDEFID", consumableDefId);
        				this.ds_checkParam.setColumn(0, "CONSUMABLEDEFVERSION", consumableDefVersion);
        				this.ds_checkParam.setColumn(0, "VERSION", "10001");



        				var sSvcID = "getPriorityConsumableLotByProcess";
        				var sController = "/pcm01800/getPriorityConsumableLotByProcess.do";
        				var sInDatasets = "INPUT=ds_checkParam";
        				var sOutDatasets = "ds_priorityConsumableList=output";
        				var sArgs = "";
        				this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);


        			}

        			var sSvcID = "getConsumableAlternativeLotByProcess";
        			var sController = "/pcm01800/getConsumableAlternativeLotByProcess.do";
        			var sInDatasets = "INPUT=ds_param";
        			var sOutDatasets = "ds_alternativeList=output";
        			var sArgs = "";
        			this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        			break;

        		case "getPriorityConsumableLotByProcess":

        			if (this.ds_priorityConsumableList.getRowCount() > 0)
        			{
        				// 해당 자재 보다 먼저 입고된 자재 Lot이 있습니다. 그래도 진행 하겠습니까?
        				var vCnf = this.gfn_confirm("ExistsFirstStockLot", "information", "");

        				if(!vCnf) return;

        			}

        			if(this.ds_consumableList.getRowCount() == 0)
        			{
        				this.ds_consumableList.addColumn( "AREAID"              , "string", 256 );
        				this.ds_consumableList.addColumn( "WAREHOUSEID"         , "string", 256 );
        				this.ds_consumableList.addColumn( "KEYCOLUMN"           , "string", 256 );
        				this.ds_consumableList.addColumn( "CONSUMABLEDEFID"     , "string", 256 );
        				this.ds_consumableList.addColumn( "CONSUMABLEDEFVERSION", "string", 256 );
        				this.ds_consumableList.addColumn( "CONSUMABLEDEFNAME"   , "string", 256 );
        				this.ds_consumableList.addColumn( "CONSUMABLELOTID"     , "string", 256 );
        				this.ds_consumableList.addColumn( "STOCKQTY"            , "BIGDECIMAL", 256 );
        				this.ds_consumableList.addColumn( "AVAILABLEQTY"        , "BIGDECIMAL", 256 );
        				this.ds_consumableList.addColumn( "INPUTQTY"            , "string", 256 );
        				this.ds_consumableList.addColumn( "ORGINPUTQTY"         , "BIGDECIMAL", 256 );
        				this.ds_consumableList.addColumn( "DEFECTQTY"           , "BIGDECIMAL", 256 );
        				this.ds_consumableList.addColumn( "LOTUSINGQTY"         , "BIGDECIMAL", 256 );
        				this.ds_consumableList.addColumn( "CONSUMABLEDEFECT"    , "string", 256 );
        				this.ds_consumableList.addColumn( "CONSUMABLESTATE"     , "string", 256 );
        			}

        			var cnt = this.ds_consumableListTemp.getRowCount();
        			for(var i = 0; i < cnt; i++)
        			{
        				var nRow = this.ds_consumableList.addRow();
        				this.ds_consumableList.copyRow(nRow,this.ds_consumableListTemp, i);
        			}


        			break;
        		case "getConsumableAlternativeLotByProcess":

        			if (this.ds_alternativeList.getRowCount() > 0)
        			{

        				var currentAreaId    = this.nfn_nvl(this.ds_lotInfoData.getColumn(0, "AREAID"), "");
        				var consumableAreaId = this.nfn_nvl(this.ds_alternativeList.getColumn(0, "AREAID"), "");

        				var currentWarehouseId    = this.nfn_nvl(this.ds_lotInfoData.getColumn(0, "WAREHOUSEID"), "");
        				var consumableWarehouseId = this.nfn_nvl(this.ds_alternativeList.getColumn(0, "WAREHOUSEID"), "");

        				if (currentWarehouseId != consumableWarehouseId)
        				{
        					// 현재 창고에서 보유하고 있는 자재가 아닙니다. 현재 창고 ID : {0}, 소유 창고 ID : {1}
        					this.gfn_Message("ConsumableNotInWarehouse", [currentWarehouseId, consumableWarehouseId], "info", "ok");
        					return;
        				}


        				this.ds_consumableDistinctList.clearData();
        				this.ds_consumableDistinctList.copyData(this.ds_consumableList);

        				this.gf_distincDsFilter(this.ds_consumableDistinctList, "KEYCOLUMN");


        				trace("this.ds_consumableDistinctList.getRowCount() >>" + this.ds_consumableDistinctList.getRowCount());

        				var vKeyColumn = "";
        				var nRow = -1;
        				this.ds_inputQtyList.clearData();

        				this.ds_consumableList.set_enableevent(false);

        				for(var i=0; i<this.ds_consumableDistinctList.getRowCount(); i++)
        				{
        					vKeyColumn = this.ds_consumableDistinctList.getColumn(i, "KEYCOLUMN");

        					this.ds_consumableList.filter("KEYCOLUMN=='" + vKeyColumn + "'");

        					nRow = this.ds_inputQtyList.addRow();
        					this.ds_inputQtyList.setColumn(nRow, "KEYCOLUMN", vKeyColumn);
        					this.ds_inputQtyList.setColumn(nRow, "INPUTQTY", this.ds_consumableList.getSum("INPUTQTY"));

        					trace("this.ds_consumableList.getRowCount() 1>>" + this.ds_consumableList.getRowCount());
        					trace("this.ds_consumableList.getSum() >>" + this.ds_consumableList.getSum("INPUTQTY"));

        					this.ds_consumableList.filter("");
        				}

        				this.ds_consumableList.filter("");

        				this.ds_consumableList.set_enableevent(true);

        				//dataset.getSum('컬럼명')
        				var key = this.nfn_nvl(this.ds_alternativeList.getColumn(0, "KEYCOLUMN"), "");
        				var value_Key   = "";
        				var value_Value = -1;

        				for(var i = 0; i < this.ds_inputQtyList.rowcount; i++)
        				{
        					value_Key   = this.nfn_nvl(this.ds_inputQtyList.getColumn(i, "KEYCOLUMN"), "");
        					value_Value = this.nfn_nvl(this.ds_inputQtyList.getColumn(i, "INPUTQTY"), "");

        					if(key == value_Key)
        					{

        						var nRow   = this.ds_standardRequirementInfo.findRow("KEYCOLUMN", value_Key);
        						var reqQty = nexacro.toNumber(this.nfn_nvl(this.ds_standardRequirementInfo.getColumn(nRow, "REQUIREMENTQTY"), "0"));

        						if ((reqQty - value_Value) <= 0)
        						{
        							// {0} 자재는 이미 BOM 소요량만큼 투입되었습니다.
        							this.gfn_Message("ConsumableIsAlreadyInputEqualRequirement", [value_Key.split('|')[0]], "info", "ok");
        							return;
        						}

        						var vInputQty    = nexacro.toNumber(this.nfn_nvl(this.ds_alternativeList.getColumn(0, "INPUTQTY"), "0"));

        						if (vInputQty > (reqQty - value_Value))
        							this.ds_alternativeList.setColumn(0, "INPUTQTY", (reqQty - value_Value));

        					}
        				}




        				if(this.ds_consumableList.getRowCount() == 0)
        				{
        					this.ds_consumableList.addColumn( "AREAID"              , "string", 256 );
        					this.ds_consumableList.addColumn( "WAREHOUSEID"         , "string", 256 );
        					this.ds_consumableList.addColumn( "KEYCOLUMN"           , "string", 256 );
        					this.ds_consumableList.addColumn( "CONSUMABLEDEFID"     , "string", 256 );
        					this.ds_consumableList.addColumn( "CONSUMABLEDEFVERSION", "string", 256 );
        					this.ds_consumableList.addColumn( "CONSUMABLEDEFNAME"   , "string", 256 );
        					this.ds_consumableList.addColumn( "CONSUMABLELOTID"     , "string", 256 );
        					this.ds_consumableList.addColumn( "STOCKQTY"            , "BIGDECIMAL", 256 );
        					this.ds_consumableList.addColumn( "AVAILABLEQTY"        , "BIGDECIMAL", 256 );
        					this.ds_consumableList.addColumn( "INPUTQTY"            , "string", 256 );
        					this.ds_consumableList.addColumn( "ORGINPUTQTY"         , "BIGDECIMAL", 256 );
        					this.ds_consumableList.addColumn( "DEFECTQTY"           , "BIGDECIMAL", 256 );
        					this.ds_consumableList.addColumn( "LOTUSINGQTY"         , "BIGDECIMAL", 256 );
        					this.ds_consumableList.addColumn( "CONSUMABLEDEFECT"    , "string", 256 );
        					this.ds_consumableList.addColumn( "CONSUMABLESTATE"     , "string", 256 );
        				}

        				var nCnt = this.ds_alternativeList.getRowCount();
        				for(var i = 0; i < nCnt; i++)
        				{
        					var nRow = this.ds_consumableList.addRow();
        					this.ds_consumableList.copyRow(nRow,this.ds_alternativeList, i);
        				}

        				return;
        			}

        			// 해당 자재 Lot의 품목은 BOM에 등록 되지 않은 자재 입니다.
        			this.gfn_Message("NotExistsConsumableInBOM", null, "info", "ok");

        			break;
        		default:
        	}
        };


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/


        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/


         this.fn_search = function ()
         {
        	console.log("fn_search");

        	var vLotId          = this.parent.parent.parent.parent.parent.g_LotId;
        	var vPanelperQty    = this.parent.parent.parent.parent.parent.g_PanelperQty;
        	var vPnlQty         = this.parent.parent.parent.parent.parent.g_PnlQty;
        	var vPcsQty         = this.parent.parent.parent.parent.parent.g_PcsQty;
        	var vQueryVersion   = this.parent.parent.parent.parent.parent.queryVersion;
        	var vLotInfoData    = this.parent.parent.parent.parent.parent.ds_lotInfo;

        	this.setLotInfo(vLotId, vPanelperQty, vPnlQty, vPcsQty, vQueryVersion, vLotInfoData);

        	console.log("자재(작업시작)");

        	// 자재(작업시작)

        	this.ds_consumableParam.clearData();
        	this.ds_consumableParam.addRow();
        	this.ds_consumableParam.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_consumableParam.setColumn(0, "PLANTID", this.gf_getSiteType());
        	this.ds_consumableParam.setColumn(0, "LOTID", this.parent.parent.parent.parent.parent.div_work.form.div_search.form.edt_lotId.value);
        	this.ds_consumableParam.setColumn(0, "MATERIALTYPE", "Consumable");
        	this.ds_consumableParam.setColumn(0, "VERSION", this.parent.parent.parent.parent.parent.queryVersion);


        	this.ds_standardRequirementParam.clearData();
        	this.ds_standardRequirementParam.addRow();
        	this.ds_standardRequirementParam.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_standardRequirementParam.setColumn(0, "PLANTID", this.gf_getSiteType());
        	this.ds_standardRequirementParam.setColumn(0, "LOTID", this.parent.parent.parent.parent.parent.div_work.form.div_search.form.edt_lotId.value);
        	this.ds_standardRequirementParam.setColumn(0, "VERSION", this.parent.parent.parent.parent.parent.queryVersion);


        	var sSvcID = "selectConsumableListByProcessWorkCompleteAndByProcess";
        	var sController = "/pcm01800/selectConsumableListByProcessWorkCompleteAndByProcess.do";
        	var sInDatasets = "INPUT1=ds_consumableParam INPUT2=ds_standardRequirementParam";
        	var sOutDatasets = "ds_consumableList=output1 ds_standardRequirementInfo=output2";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);


        };

        this.setLotInfo = function (lotId, panelPerQty, panelQty, qty, queryVersion, dataSet)
        {
        	console.log("setLotInfo 1");
        	var queryVersion = "10001";
        	this._lotId = lotId;
        	this._panelPerQty = panelPerQty;
        	this._panelQty = panelQty;
        	this._qty = qty;
        	console.log("setLotInfo 2");
        	this.ds_lotInfoData.clearData();  // 1700M 에서 가져옴.
        	this.ds_lotInfoData.copyData(dataSet);

        	this._queryVersion = queryVersion;
        	console.log("setLotInfo 3");
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.btn_delRow_onclick = function(obj,e)
        {
        	var nRow = this.ds_consumableLis.rowcount == 1 ? 0 : this.ds_consumableList_rowposition;
        	this.ds_consumableList.deleteRow(nRow);
        };

        this.ds_consumableList_onrowposchanged = function(obj,e)
        {
        	this.ds_consumableList_rowposition = e.newrow;
        };

        this.edt_consumableLotIdStart_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13 || e.keycode == 9)
        	{
        		if (!this.checkAlreadyInputLot(this.edt_consumableLotIdStart.value, "CONSUMABLELOTID"))
        		{
        			this.edt_consumableLotIdStart.set_value("");
        			return;
        		}

        		this.ds_param.clearData();
        		this.ds_param.addRow();
        		this.ds_param.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        		this.ds_param.setColumn(0, "PLANTID", this.gf_getSiteType());
        		this.ds_param.setColumn(0, "LOTID", this._lotId);
        		this.ds_param.setColumn(0, "CONSUMABLELOTID", this.edt_consumableLotIdStart.value);
        		this.ds_param.setColumn(0, "VERSION", this._queryVersion);


        		this.edt_consumableLotIdStart.set_value("");


        		var sSvcID = "getConsumableLotByProcess";
        		var sController = "/pcm01800/getConsumableLotByProcess.do";
        		var sInDatasets = "INPUT=ds_param";
        		var sOutDatasets = "ds_consumableListTemp=output";
        		var sArgs = "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	}
        };

        this.checkAlreadyInputLot = function(lotId, fieldName)
        {

        	var resultRow = this.ds_consumableList.findRow(fieldName, lotId);
        	if (resultRow > -1)
        	{
        		// 이미 등록된 Lot Id 입니다. Lot Id = {0}
        		this.gfn_Message("AlreadyInputLot", [lotId], "warning", "ok");
        		this.ds_consumableList.set_rowposition(resultRow);
        		this.grd_consumableStart.setFocus();
        		return false;
        	}

        	return true;

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


        this.gf_distincDsFilter = function(objDs, sColID)
        {
        	var arrArgs	= sColID.split(",");
        	var sFilterExpr		= "";
        	var sFindRowExpr	= "";

        	for (var i=0; i<arrArgs.length; i++)
        	{
        		if (objDs.getColumnInfo(arrArgs[i]) == null) continue;

        		sFindRowExpr	+= (sFindRowExpr) ? " && " : "";
        		sFindRowExpr	+= "" + arrArgs[i] + "=='\" + " + arrArgs[i] + " + \"'";
        	}

        	if (sFindRowExpr) {
        		sFilterExpr	= "rowidx==dataset.findRowExpr(\"" + sFindRowExpr + "\")";
        	}
        	objDs.filter(sFilterExpr);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.fn_init,this);
            this.edt_consumableLotIdStart.addEventHandler("onkeydown",this.edt_consumableLotIdStart_onkeydown,this);
            this.btn_delRow.addEventHandler("onclick",this.btn_delRow_onclick,this);
            this.ds_consumableList.addEventHandler("onrowposchanged",this.ds_consumableList_onrowposchanged,this);
        };
        this.loadIncludeScript("PCM01700T06.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
