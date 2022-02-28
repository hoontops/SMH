(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM01700T01");
            this.set_titletext("치공구(작업시작)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,316);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_durableStartInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"USEDCOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TOTALUSEDCOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"USEDLIMIT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CLEANLIMIT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"USINGQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_durableParam", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLESTATE\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_BORDurableStart", this);
            obj._setContents("<ColumnInfo><Column id=\"DURABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLECLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USEDLIMIT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CLEANLIMIT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_equipmentList", this);
            obj._setContents("<ColumnInfo><Column id=\"EQUIPMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINTIME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKOUTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RECIPEID\" type=\"STRING\" size=\"256\"/><Column id=\"RECIPEVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RECIPETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotInfoData", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PATHTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPEID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STEPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRINTLOTCARD\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRINTRCLOTCARD\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINUSER\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"ISRCLOT\" type=\"STRING\" size=\"256\"/><Column id=\"SELFSHIPINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"SELFTAKEINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"OSPINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"ISBEFOREROLLCUTTING\" type=\"STRING\" size=\"256\"/><Column id=\"Column30\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"ISWEEKMNG\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTPROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLAIMLOT\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"ISREWORK\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"DUEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("title1_01","0","0","110","34",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("치공구(작업시작)");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_BORDurableStart","60%","34",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_BORDurableStart");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/><Column size=\"300\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"치공구 ID\" tooltiptext=\"DURABLEDEFID\"/><Cell col=\"2\" text=\"치공구 명\" tooltiptext=\"DURABLEDEFNAME\"/><Cell col=\"3\" text=\"치공구 유형\" tooltiptext=\"DURABLETYPE\"/><Cell col=\"4\" text=\"보증타수\" tooltiptext=\"USEDLIMIT\"/><Cell col=\"5\" text=\"연마기준타수\" tooltiptext=\"CLEANLIMIT\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:DURABLEDEFID\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:DURABLEDEFNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:DURABLECLASSNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:USEDLIMIT\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\"/><Cell col=\"5\" text=\"bind:CLEANLIMIT\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_durableStart","0","34",null,null,"grd_BORDurableStart:10","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_durableStartInfo");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"치공구 ID\" tooltiptext=\"DURABLEDEFID\"/><Cell col=\"3\" text=\"치공구 명\" tooltiptext=\"DURABLEDEFNAME\"/><Cell col=\"4\" text=\"Tool No.\" tooltiptext=\"DURABLELOTID\"/><Cell col=\"5\" text=\"사용타수\" tooltiptext=\"USEDCOUNT\"/><Cell col=\"6\" text=\"누적타수\" tooltiptext=\"TOTALUSEDCOUNT\"/><Cell col=\"7\" text=\"보증타수\" tooltiptext=\"USEDLIMIT\"/><Cell col=\"8\" text=\"연마기준타수\" tooltiptext=\"CLEANLIMIT\"/><Cell col=\"9\" text=\"사용횟수\" tooltiptext=\"USINGQTY\"/><Cell col=\"10\" text=\"설비\" tooltiptext=\"EQUIPMENT\" cssclass=\"cell_point\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:DURABLEDEFID\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:DURABLEDEFNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:DURABLELOTID\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:USEDCOUNT\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\"/><Cell col=\"6\" text=\"bind:TOTALUSEDCOUNT\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\"/><Cell col=\"7\" text=\"bind:USEDLIMIT\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\"/><Cell col=\"8\" text=\"bind:CLEANLIMIT\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\"/><Cell col=\"9\" text=\"bind:USINGQTY\" displaytype=\"mask\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" textAlign=\"right\" maskeditformat=\"#,###,###,##0.#####\"/><Cell col=\"10\" text=\"bind:EQUIPMENTID\" displaytype=\"combocontrol\" combocodecol=\"EQUIPMENTID\" combodatacol=\"EQUIPMENTNAME\" combodataset=\"ds_equipmentList\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_durableLotIdStart","title1_01:200","9","77","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("치공구 LOT");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_durableLotIdStart","sta_durableLotIdStart:5","9","160","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delRow",null,"5","29","24","grd_BORDurableStart:10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdDel");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_durableStartInfo","122","0","140","34",null,null,null,null,null,null,this);
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
        this.addIncludeScript("PCM01700T01.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM01700T01.xfdl","lib::lib_pcm.xjs");
        this.addIncludeScript("PCM01700T01.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("PCM01700T01.xfdl","lib::lib_mtm.xjs");
        this.registerScript("PCM01700T01.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 인수등록 :: 치공구(작업시작) 탭
         * 파일명 		: PCM01700T01.xfdl
         * 작성자 		: 김성현
         * 작성일 		: 2021.04.10
         *
         * 설  명		: 인수등록 :: 치공구(작업시작) 탭
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
        this.ds_durableStartInfo_rowposition = -1;
        this.productDefType;
        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	console.log("PCM01700T01");

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
        		case "selectDurableListByProcessWorkStartAndBOR":
        			console.log(this.ds_BORDurableStart.saveXML());
        			console.log(this.ds_durableStartInfo.saveXML());

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
        	console.log("fn_search 111");

        // 	var equipmentInfo = this.parent.parent.parent.parent.parent.div_work.form.tab_pfsDetail_StartWork.tabpages.tpgEquipment.form.ds_equipmentInfo;
        //
        //
        // 	this.ds_equipmentList.clearData();
        // 	this.ds_equipmentList.copyData(equipmentInfo, true);
        //
        // 	console.log(this.ds_equipmentList.saveXML());

        	this.productDefType = this.parent.parent.parent.parent.parent.productDefType;

        	//치공구 BOR 등록
        	this.ds_durableParam.clearData();
        	this.ds_durableParam.addRow();
        	this.ds_durableParam.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_durableParam.setColumn(0, "PLANTID", this.gf_getSiteType() );
        	this.ds_durableParam.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.ds_durableParam.setColumn(0, "LOTID", this.parent.parent.parent.parent.parent.div_work.form.div_search.form.edt_lotId.value);
        	if (this.productDefType == "SubAssembly")
        		this.ds_durableParam.setColumn(0, "DURABLESTATE", "Available,InUse");
        	else
        		this.ds_durableParam.setColumn(0, "DURABLESTATE", "Available");
        	this.ds_durableParam.setColumn(0, "VERSION", this.parent.parent.parent.parent.parent.queryVersion);


        	var sSvcID = "selectDurableListByProcessWorkStartAndBOR";
        	var sController = "/pcm01800/selectDurableListByProcessWorkStartAndBOR.do";
        	var sInDatasets = "INPUT=ds_durableParam";
        	var sOutDatasets = "ds_BORDurableStart=output1 ds_durableStartInfo=output2";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.edt_durableLotIdStart_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13 || e.keycode == 9)
        	{
        		var nRow = this.ds_durableStartInfo.findRow("DURABLELOTID", this.edt_durableLotIdStart.value);

        		if (nRow < 0)
        		{
        			// 현재 작업에서 사용할 수 없는 치공구 Lot 입니다.
        			this.gfn_Message("NotAvailableDurableLotProcess", null, "info", "ok");
        			this.edt_durableLotIdStart.set_value("");
        			return;
        		}

        		this.ds_durableStartInfo.setColumn(nRow, "CHK", "1");

        		this.edt_durableLotIdStart.set_value("");
        	}
        };

        this.ds_durableStartInfo_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "CHK" && obj.getColumn(e.row, "CHK") == "1")
        	{
        		obj.enableevent(false);
        		for(var i = 0; i < obj.rowcount; i++)
        		{
        			obj.setColumn(e.row, "EQUIPMENTID", "");
        		}

        		var totalCnt = ds_equipmentInfo.getRowCount();
        		var nRow = obj.findRow("CHK", "1");
        		obj.filter("CHK == '1'");
        		var checkedCnt = obj.getRowCount();
        		obj.filter("");

        		if (totalCnt == 1 && checkedCnt == 1)
        		{
        			// 설비탭의 그리드에서 가져옴.
        			var equipmentId = ds_equipmentInfo.getColumn(0, "EQUIPMENTID");
        			obj.setColumn(e.row,  "EQUIPMENTID", equipmentId);
        		}
        		obj.enableevent(true);
        	}
        };

        this.btn_delRow_onclick = function(obj,e)
        {
        	var nRow = this.ds_durableStartInfo.rowcount == 1 ? 0 : this.ds_durableStartInfo_rowposition;
        	this.ds_durableStartInfo.deleteRow(nRow);
        };

        // this.setLotInfo = function (lotId, panelPerQty, panelQty, qty, queryVersion, dataSet)
        // {
        // 	var queryVersion = "10001";
        // 	this._lotId = lotId;
        // 	this._panelPerQty = panelPerQty;
        // 	this._panelQty = panelQty;
        // 	this._qty = qty;
        //
        // 	this.ds_lotInfoData.clearData();  // 1700M 에서 가져옴.
        // 	this.ds_lotInfoData.copyData(dataSet);
        //
        // 	this._queryVersion = queryVersion;
        // };


        this.ds_durableStartInfo_onrowposchanged = function(obj,e)
        {
        	this.ds_durableStartInfo_rowposition = e.newrow;
        };


        this.grd_durableStart_oncellclick = function(obj,e)
        {
        	console.log("xxx");

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.grd_durableStart.addEventHandler("oncellclick",this.grd_durableStart_oncellclick,this);
            this.edt_durableLotIdStart.addEventHandler("onkeydown",this.edt_durableLotIdStart_onkeydown,this);
            this.btn_delRow.addEventHandler("onclick",this.btn_delRow_onclick,this);
            this.ds_durableStartInfo.addEventHandler("oncolumnchanged",this.ds_durableStartInfo_oncolumnchanged,this);
            this.ds_durableStartInfo.addEventHandler("onrowposchanged",this.ds_durableStartInfo_onrowposchanged,this);
        };
        this.loadIncludeScript("PCM01700T01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
