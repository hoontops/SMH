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
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"KEYCOLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"STOCKQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AVAILABLEQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"INPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ORGINPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LOTUSINGQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CONSUMABLEDEFECT\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLESTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"AREAID\">1</Col><Col id=\"KEYCOLUMN\">AA</Col><Col id=\"INPUTQTY\">2</Col><Col id=\"CONSUMABLEDEFID\">1</Col><Col id=\"CHK\">0</Col><Col id=\"CONSUMABLEDEFNAME\">1</Col></Row><Row><Col id=\"AREAID\">2</Col><Col id=\"KEYCOLUMN\">AA</Col><Col id=\"INPUTQTY\">2</Col><Col id=\"CONSUMABLEDEFID\">2</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"AREAID\">3</Col><Col id=\"KEYCOLUMN\">BB</Col><Col id=\"INPUTQTY\">2</Col><Col id=\"CONSUMABLEDEFID\">3</Col><Col id=\"CHK\">0</Col><Col id=\"CONSUMABLEDEFNAME\">a</Col></Row><Row><Col id=\"AREAID\">4</Col><Col id=\"KEYCOLUMN\">AA</Col><Col id=\"INPUTQTY\">2</Col><Col id=\"CONSUMABLEDEFID\">4</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"AREAID\">5</Col><Col id=\"KEYCOLUMN\">BB</Col><Col id=\"INPUTQTY\">2</Col><Col id=\"CONSUMABLEDEFID\">5</Col><Col id=\"CHK\">0</Col><Col id=\"CONSUMABLEDEFNAME\">b</Col></Row><Row><Col id=\"AREAID\">6</Col><Col id=\"KEYCOLUMN\">AA</Col><Col id=\"INPUTQTY\">2</Col><Col id=\"CONSUMABLEDEFID\">6</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"AREAID\">7</Col><Col id=\"KEYCOLUMN\">CC</Col><Col id=\"INPUTQTY\">2</Col><Col id=\"CONSUMABLEDEFID\">7</Col><Col id=\"CHK\">0</Col><Col id=\"CONSUMABLEDEFNAME\">c</Col></Row><Row><Col id=\"AREAID\">8</Col><Col id=\"KEYCOLUMN\">CC</Col><Col id=\"INPUTQTY\">2</Col><Col id=\"CONSUMABLEDEFID\">8</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"CONSUMABLEDEFNAME\">d</Col></Row><Row><Col id=\"CHK\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputQtyList", this);
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"KEYCOLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"STOCKQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AVAILABLEQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"INPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ORGINPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LOTUSINGQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CONSUMABLEDEFECT\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLESTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_consumableDistinctList", this);
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"KEYCOLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"STOCKQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AVAILABLEQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"INPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ORGINPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LOTUSINGQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CONSUMABLEDEFECT\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLESTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"자재 ID\" tooltiptext=\"CONSUMABLEDEFID\"/><Cell col=\"2\" text=\"자재명\" tooltiptext=\"CONSUMABLEDEFNAME\"/><Cell col=\"3\" text=\"기준소요량\" tooltiptext=\"STANDARDREQUIREMENTQTY\"/><Cell col=\"4\" text=\"소요량\" tooltiptext=\"REQUIREMENTQTY\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CONSUMABLEDEFID\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:CONSUMABLEDEFNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:STANDARDREQUIREMENTQTY\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:REQUIREMENTQTY\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_consumableStart","0","34",null,null,"grd_standardRequirementStart:10","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_consumableList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"적용구분\" tooltiptext=\"APPLICATIONTYPE\"/><Cell col=\"3\" text=\"재작업구분\" tooltiptext=\"REWORKTYPE\"/><Cell col=\"4\" text=\"대공정\" tooltiptext=\"TOPPROCESSSEGMENTID\"/><Cell col=\"5\" text=\"재작업번호\" tooltiptext=\"REWORKNUMBER\"/><Cell col=\"6\" text=\"재작업버전\" tooltiptext=\"REWORKVERSION\"/><Cell col=\"7\" text=\"재작업명\" tooltiptext=\"REWORKNAME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:APPLICATIONTYPE\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:REWORKTYPE\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:TOPPROCESSSEGMENTID\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:REWORKNUMBER\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:REWORKVERSION\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:REWORKNAME\" textAlign=\"left\"/></Band></Format></Formats>");
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

            obj = new Button("btn_delRow",null,"5","29","24","514",null,null,null,null,null,this);
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

            obj = new Tab("tab_00","84","114","610","176",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_00);
            obj.set_text("Tabpage1");
            this.tab_00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_00);
            obj.set_text("Tabpage2");
            this.tab_00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.tab_00);
            obj.set_text("Tabpage3");
            this.tab_00.addChild(obj.name, obj);
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
        this.addIncludeScript("PCM01700T06_test.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM01700T06_test.xfdl","lib::lib_pcm.xjs");
        this.addIncludeScript("PCM01700T06_test.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("PCM01700T06_test.xfdl","lib::lib_mtm.xjs");
        this.registerScript("PCM01700T06_test.xfdl", function() {
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
        	trace("PCM01700T06");




        	var pathType = "xxxxEnd";
        	var xxx = pathType.substring(pathType.length-3, pathType.length);

        	trace(xxx);

        	this.tab_00.set_tabindex(2);
        	//this.tab_00.set_tabposition();

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


        this.sta_cnt_ds_consumableList_onclick = function(obj,e)
        {

        };

        this.grd_consumableStart_onlbuttondown = function(obj,e)
        {
        //	obj.
        	trace("e.col   >>" + e.col);
        	trace("e.cell   >>" + e.cell);

        // 	CONSUMABLEDEFECT
        //
        // 	if (this.nfn_isEqualCol(obj, e.col, "DEFECTCODE"))



        };


        this.fn_AOIDefetView_ShowingEditor = function(currRow, focusedFieldName)
        {
        	trace("fn_AOIDefetView_ShowingEditor");
        	trace(focusedFieldName);

        	var isChangeRow = this.nfn_nvl(this.ds_defectList.getColumn(currRow, "ISCHANGE"), "");

        	var isChangeCell = false;

        	if (isChangeRow == "N")
        	{
        		if (this.gf_getEnterpriseId() == this.getEnterPrise_InterFlex())
        		{
        			var defectCodeGroupId = this.nfn_nvl(this.ds_defectList.getColumn(currRow, "DEFECTCODEGROUPID"), "");

        			if (this._isRepairProcess || this._isSendStep)
        			{
        				if ((focusedFieldName == "ANALYSISGOODQTY" || focusedFieldName == "ANALYSISGOODPNLQTY") && defectCodeGroupId == "005")
        					isChangeCell = true;
        			}
        			else
        			{
        				if (focusedFieldName == "LAYER")
        					isChangeCell = true;

        				if (focusedFieldName == "PCSQTY" && defectCodeGroupId != "005")
        					isChangeCell = true;
        			}
        		}
        	}
        	else
        	{

        		if (focusedFieldName != "ANALYSISQTY" && focusedFieldName != "ANALYSISGOODQTY" && focusedFieldName != "ANALYSISGOODPNLQTY")
        			isChangeCell = true;
        	}


        	return !isChangeCell;

        };


        this.ds_consumableList_oncolumnchanged = function(obj,e)
        {
        	trace("e.columnid >>" + e.columnid);
        	trace("e.newvalue >>" + e.newvalue);

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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.fn_init,this);
            this.grd_consumableStart.addEventHandler("onlbuttondown",this.grd_consumableStart_onlbuttondown,this);
            this.edt_consumableLotIdStart.addEventHandler("onkeydown",this.edt_consumableLotIdStart_onkeydown,this);
            this.btn_delRow.addEventHandler("onclick",this.btn_delRow_onclick,this);
            this.sta_cnt_ds_consumableList.addEventHandler("onclick",this.sta_cnt_ds_consumableList_onclick,this);
            this.ds_consumableList.addEventHandler("onrowposchanged",this.ds_consumableList_onrowposchanged,this);
            this.ds_consumableList.addEventHandler("oncolumnchanged",this.ds_consumableList_oncolumnchanged,this);
            this.ds_consumableDistinctList.addEventHandler("onrowposchanged",this.ds_consumableList_onrowposchanged,this);
        };
        this.loadIncludeScript("PCM01700T06_test.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
