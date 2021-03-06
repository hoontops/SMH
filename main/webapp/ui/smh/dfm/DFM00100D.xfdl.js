(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DFM00100D");
            this.set_cssclass("form_PopupBg");
            this.set_titletext("Defect List Div");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,250);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"P_LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"P_INCLUDEAOI\" type=\"STRING\" size=\"256\"/><Column id=\"P_GROUPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"P_SUBCODE\" type=\"STRING\" size=\"256\"/><Column id=\"P_LAYER\" type=\"STRING\" size=\"256\"/><Column id=\"P_PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectGrp", this);
            obj._setContents("<ColumnInfo><Column id=\"INPPROC\" type=\"STRING\" size=\"256\"/><Column id=\"INPPROCNM\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALRATE\" type=\"STRING\" size=\"256\"/><Column id=\"LAYERID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"GRPINSPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"GRPINSPERATE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DETAILRATE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALDEFECTCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"LAYERNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_work","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_defectGrp","0","34",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_defectGrp");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"????????????\" tooltiptext=\"INSPPROCESSSEGMENT\"/><Cell col=\"2\" text=\"LAYER\" tooltiptext=\"44C87C99332444CC8A076FBDB35DA9C2\"/><Cell col=\"3\" text=\"?????? (Total)\" tooltiptext=\"DefectTotal\"/><Cell col=\"4\" text=\"?????????\" tooltiptext=\"QCMFINALINSPECTQTY\"/><Cell col=\"5\" tooltiptext=\"PCSDEFECTQTY\" text=\"?????????\"/><Cell col=\"6\" text=\"????????? (??????)\" tooltiptext=\"DefectGroupName\"/><Cell col=\"7\" text=\"????????? (??????)\" tooltiptext=\"DefectGroupCount2\"/><Cell col=\"8\" text=\"????????? (??????)\" tooltiptext=\"DefectGroupRate2\"/><Cell col=\"9\" text=\"????????? (??????)\" tooltiptext=\"DefectDetailName\"/><Cell col=\"10\" text=\"????????? (??????)\" tooltiptext=\"DefectDetailCount\"/><Cell col=\"11\" text=\"????????? (??????)\" tooltiptext=\"DefectDetailRate\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:INPPROCNM\" suppress=\"1\" suppressalign=\"middle\" cssclass=\"cell_line\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:LAYERNM\" suppress=\"2\" suppressalign=\"middle\" cssclass=\"cell_line\"/><Cell col=\"3\" suppress=\"3\" suppressalign=\"middle\" cssclass=\"cell_line\" textAlign=\"right\" expr=\"comp.parent.parent.parent.fn_setTotalRate(LAYERID,INSPECTIONQTY)\" displaytype=\"normal\" maskeditformat=\" ##0.##%\"/><Cell col=\"4\" text=\"bind:INSPECTIONQTY\" suppress=\"4\" suppressalign=\"middle\" cssclass=\"cell_line\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"!#,##9\"/><Cell col=\"5\" text=\"bind:TOTALDEFECTCOUNT\" cssclass=\"cell_line\" displaytype=\"mask\" suppress=\"4\" suppressalign=\"middle\" maskeditformat=\"!#,##9\" expr=\"comp.parent.parent.parent.fn_setTotalDefectCnt(GROUPCODE,LAYERID)\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:GROUPNAME\" cssclass=\"cell_line\" suppress=\"5\" suppressalign=\"first\" textAlign=\"left\"/><Cell col=\"7\" cssclass=\"cell_line\" suppress=\"6\" suppressalign=\"first\" textAlign=\"right\" displaytype=\"number\" expr=\"comp.parent.parent.parent.fn_setGrpInspQty(GROUPCODE,LAYERID)\"/><Cell col=\"8\" cssclass=\"cell_line\" suppress=\"7\" suppressalign=\"first\" expr=\"comp.parent.parent.parent.fn_setGrpRate(GROUPCODE,LAYERID,INSPECTIONQTY)\" textAlign=\"right\" displaytype=\"normal\" maskeditformat=\" ##0.##%\"/><Cell col=\"9\" text=\"bind:SUBNAME\" cssclass=\"cell_line\" suppress=\"8\" suppressalign=\"first\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:DEFECTCOUNT\" cssclass=\"cell_line\" suppress=\"9\" suppressalign=\"first\" textAlign=\"right\"/><Cell col=\"11\" cssclass=\"cell_line\" suppress=\"10\" suppressalign=\"first\" displaytype=\"normal\" maskeditformat=\" ##0.##%\" maskeditlimitbymask=\"none\" expr=\"comp.parent.parent.parent.fn_setDetailRate(INSPECTIONQTY, DEFECTCOUNT)\" maskedittype=\"number\" textAlign=\"right\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subtitleDefectList","0","0","150","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("?????? Defect Data");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("EQUIPMENTDEFECTDATA");
            this.div_work.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",500,250,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DFM00100D.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("DFM00100D.xfdl","lib::lib_mtm.xjs");
        this.registerScript("DFM00100D.xfdl", function() {
        /***************************************************************************************
         * ???????????? 	: IFC MES?????????
         * ????????? 		: Defect Map ????????? div
         * ????????? 		: DFM00100D.xfdl
         * ????????? 		: ?????????
         * ????????? 		: 2021.06.18
         *
         * ???  ???		: Defect Map ????????? div
         *---------------------------------------------------------------------------------------
         * ?????????		?????????		????????????
         *---------------------------------------------------------------------------------------
         * 2021.06.18	?????????   	????????????
         * [???????????? ????????? 3?????? -> 2?????? ????????? ?????? ?????????.]
         * [?????? ??????] - DFM00100M, DFM00100D, DFM00200M(??????+??????)?????? ?????? ?????????. [?????????] ?????? ?????? ????????? ???????????????.
         * nexacro.round ?????????...   => ????????? ????????? ????????? ???????????????. ?????? ?????? ?????? 3 -> 2??? ?????? ????????????  this.fv_roundNum ?????? ??????
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. ?????? include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM ?????? ??????????????? include
        this.executeIncludeScript("lib::lib_mtm.xjs"); /*include "lib::lib_mtm.xjs"*/;	//MTM ?????? ??????????????? include
        /**************************************************************************
         * 2. FORM ?????? ?????? ??????
         ***************************************************************************/

        var lv_rtnCols;

        this.parentDc;			// ???????????? ????????? ????????????
        this.v_popType;			// ???????????? ????????? type (R/S) -> ?????? ?????? ??????


        this.fv_layer;
        this.fv_panel;
        this.fv_image;
        this.fv_color;
        this.fv_h;
        this.fv_w;


        this.fv_LayerTitle;		// 21.05.20  ?????? Layer ??? ?????? ????????? ?????? ??????


        this.fv_roundNum = 3;						// [?????????] ?????????(3 -> 2)?????? ?????? @.@ ?????? ?????? ?????? ????????? !!!!!!!!!!!!!!!!!!



        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	// ?????? ?????? ??????
        	this.nfn_formInit(obj);

        	// ds?????????

        };

        /**************************************************************************
         * 4. ?????????????????? (?????? ????????????!!!!)
         ***************************************************************************/
        /*
         * ?????? : ??????
         * param : LOTID, PRODUCTDEFID, PRODUCTDEFVERSION  -> ???????????? ?????? ??????
         */
        this.fn_search = function (P_LOTID, P_PRODUCTDEFID, P_PRODUCTDEFVERSION, P_PROCESSSEGMENTID)
        {
        	var lotId        		= P_LOTID;
        	var productDefId 		= P_PRODUCTDEFID;
        	var productDefVersion 	= P_PRODUCTDEFVERSION;
        	// (21.06.23)
        	var procId 				= P_PROCESSSEGMENTID;

        	// ?????? ?????? ????????? ?????? ?????? ?????? ??? ???!

        	this.ds_defectGrp.clearData();
        	this.ds_search.clearData();
        	this.ds_defectGrp.filter("");

        	// Lot no  ?????? ????????? ??????
        	if(!this.fn_chkValid(lotId, productDefId, productDefVersion)) return;


        	this.ds_search.addRow();

        	// ?????? ?????? ????????? ?????? ??? ???!
        	this.ds_search.setColumn(0,"P_LOTID"				,lotId);
        	this.ds_search.setColumn(0,"ENTERPRISEID"			,this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0,"P_PRODUCTDEFID"			,productDefId);
        	this.ds_search.setColumn(0,"P_PRODUCTDEFVERSION"	,productDefVersion);

        	// (21.06.23) ???????????? ??????
        	this.ds_search.setColumn(0,"P_PROCESSSEGMENTID"		,procId);



        	// ?????? ?????? ?????? ?????? ?????? ??? ???!
        	var sSvcID 			= "selectDefectMapDivList";
        	var sController 	= "/dfm00100/selectDefectMapDivList.do";		// div?????? ?????? ??? ???!
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_defectGrp=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };

        /*
         * ?????? : ??????
         */
        this.fn_save = function (obj, e)
        {

        };

        /*
         * ?????? : ??????
         */
        this.fn_delete = function (obj, e)
        {
        };

        /*
         * ?????? : ??????
         */
        this.fn_copy = function(obj,e)
        {
        };

        /**************************************************************************
         * 5. TRANSACTION, CALLBACK ??????
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD != 0)
        	{
        		/*
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        		this.ds_outsourcedWarehouseShipment.clearData(); //Target Dataset clear
        		this.fn_lotNoScanRready(); //scan READY
        		return;
        		*/

        		if (trId == "savePackInvNo")
        		{
        			var msgArray = errMsg.split(("|"));
        			if(msgArray.length==2) {
        				this.gfn_Message(msgArray[0], "\n"+msgArray[1], "error", "ok");
        			}
        			/*
        			else {
        				this.gfn_Message("ProcessingError", "\n"+errMsg, "error", "ok");
        			}
        			*/
        		}
        		else
        		{
        			this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        		}
        		return;
        	}

        	switch(trId) {
        		case "selectDefectMapDivList": 			//[Raw Data ?????? ??????]
        				//trace(" Raw Data ?????? ?????? @..@  "+this.ds_chartColor.saveXML());
        				if(this.ds_defectGrp.rowcount == 0)
        				{

        					// msg ????????? ??????
        					//this.gfn_Message("NoSelectData", null, "warning", "ok");

        					this.fn_initSearch();
        					return;
        				}

        			break;


        		default:
        	}
        };


        /**************************************************************************
         * 6. ?????? ??????/??????
         **************************************************************************/
         /*
         * ??????(????????????) : '?????????' Text ??????
         */
        this.fn_openPop = function(svcId, popId, pArg)
        {

        }

        this.fn_popupAfter = function(sPopupId, Variant)
        {


        }

        /**************************************************************************
         * 7. ?????? ??????(?????? ?????? ??????)
         **************************************************************************/
        /*
         *	Lot No ????????? ?????? ??????(?????? ?????? ??????)
         */
        this.fn_chkValid = function (lotId, productDefId, productDefVersion)
        {
        	if(this.gfn_isNull(lotId))
        	{
        		// ????????? ??????
        		var nTitle = this.nfn_getDictionaryname("54C33732C27844B298AB8C7EA28109AC",true);
        		this.gfn_Message("MessageParamIsNull",nTitle , "warning","ok");//{0}??? ????????????.
        		return false;
        	}
        	if(this.gfn_isNull(productDefId))
        	{
        		// ????????? ??????
        		var nTitle = this.nfn_getDictionaryname("F112527EF89E45D8BA876725E97E3B30",true);
        		this.gfn_Message("MessageParamIsNull",nTitle , "warning","ok");//{0}??? ????????????.
        		return false;
        	}
        	if(this.gfn_isNull(productDefVersion))
        	{
        		// ????????? ??????
        		var nTitle = this.nfn_getDictionaryname("8B803E42B2684B27BA4E31A4B3D97F59",true);
        		this.gfn_Message("MessageParamIsNull",nTitle , "warning","ok");//{0}??? ????????????.
        		return false;
        	}

        	return true;

        };


        /*
         * PCM01900T02?????? ????????? ??? ??????
         */
        this.setLotInfo = function (lotId, panelPerQty, panelQty, qty, queryVersion, dataSet)
        {
        	var queryVersion = "10001";
        	this._lotId = lotId;
        	this._panelPerQty = panelPerQty;
        	this._panelQty = panelQty;
        	this._qty = qty;

        	this.ds_lotInfoData.clearData();  // 1700M ?????? ?????????.
        	this.ds_lotInfoData.copyData(dataSet);

        	this._queryVersion = queryVersion;
        };

        /************************************[???????????? ?????????, ????????? ????????????]***************************************/

        /*
         * ?????????(Total)
         */
        this.fn_setTotalRate = function (grpLayerId,total)
        {
        	//trace(" ====> : "+grpLayerId+" || "+total);
        	var nTotalQty = 0;
        	var nCnt = this.ds_defectGrp.rowcount;
        	for(var i=0; i<nCnt; i++)
        	{
        		var nDefectQty 	= this.ds_defectGrp.getColumn(i,"DEFECTCOUNT");
        		var nLayerId 	= this.ds_defectGrp.getColumn(i,"LAYERID");
        		if((grpLayerId == nLayerId))
        		{
        			nTotalQty += parseInt(nDefectQty);
        		}
        	}
        	//trace(" ====> (1): "+nTotalQty);

        	var nR = 0;
        	if(!this.gfn_isNull(total) && !this.gfn_isNull(nTotalQty))
        	{
        		var nPreRate = parseFloat(nTotalQty) / parseFloat(total) * 100;
        		nR = nexacro.round(nPreRate, this.fv_roundNum);
        		//nR = nexacro.round(nPreRate, 2);//[?????????]
        	}
        	return nR+"%";
        };


        /*
         * ?????????(Layer??????) 21.05.20 ??????
         */
        this.fn_setTotalDefectCnt  = function (grpCode,grpLayerId)
        {
        	//trace(" ---(grpCode) : "+grpCode);
        	var nGrpQty = 0;
        	var nCnt = this.ds_defectGrp.rowcount;
        	for(var i=0; i<nCnt; i++)
        	{
        		var nGrpCode 	= this.ds_defectGrp.getColumn(i,"GROUPCODE");
        		var nDefectQty 	= this.ds_defectGrp.getColumn(i,"DEFECTCOUNT");
        		var nLayerId 	= this.ds_defectGrp.getColumn(i,"LAYERID");
        		if((grpLayerId == nLayerId))
        		{
        			nGrpQty += parseInt(nDefectQty);
        		}
        	}
        	return nGrpQty;
        };

        /*
         * ?????????(??????)
         */
        this.fn_setGrpInspQty  = function (grpCode,grpLayerId)
        {
        	//trace(" ---(grpCode) : "+grpCode);
        	var nGrpQty = 0;
        	var nCnt = this.ds_defectGrp.rowcount;
        	for(var i=0; i<nCnt; i++)
        	{
        		var nGrpCode 	= this.ds_defectGrp.getColumn(i,"GROUPCODE");
        		var nDefectQty 	= this.ds_defectGrp.getColumn(i,"DEFECTCOUNT");
        		var nLayerId 	= this.ds_defectGrp.getColumn(i,"LAYERID");
        		if((nGrpCode == grpCode) && (grpLayerId == nLayerId))
        		{
        			nGrpQty += parseInt(nDefectQty);
        		}
        	}
        	return nGrpQty;
        };


        /*
         * ?????????(??????)
         */
        this.fn_setGrpRate = function (grpCode,grpLayerId,total)
        {
        	var nGrpQty = 0;
        	var nCnt = this.ds_defectGrp.rowcount;
        	for(var i=0; i<nCnt; i++)
        	{
        		var nGrpCode 	= this.ds_defectGrp.getColumn(i,"GROUPCODE");
        		var nDefectQty 	= this.ds_defectGrp.getColumn(i,"DEFECTCOUNT");
        		var nLayerId 	= this.ds_defectGrp.getColumn(i,"LAYERID");
        		if((nGrpCode == grpCode) && (grpLayerId == nLayerId))
        		{
        			nGrpQty += parseInt(nDefectQty);
        		}
        	}
        	//nGrpQty;

        	var nR = 0;
        	if(!this.gfn_isNull(total) && !this.gfn_isNull(nGrpQty))
        	{
        		var nPreRate = parseFloat(nGrpQty) / parseFloat(total) * 100;
        		nR = nexacro.round(nPreRate, this.fv_roundNum);
        		//nR = nexacro.round(nPreRate, 2);//[?????????]
        	}
        	return nR+"%";
        };


        /*
         * ?????????(??????)
         */
        this.fn_setDetailRate = function (total, defectQty)
        {
        	//trace("-------------------"+defectQty+" / "+total);
        	var nR = 0;
        	if(!this.gfn_isNull(total) && !this.gfn_isNull(defectQty))
        	{
        		//nR = '0'
        		var nPreRate = parseFloat(defectQty) / parseFloat(total) * 100;
        		//trace("-------------------(nPreRate)"+nPreRate);
        		nR = nexacro.round(nPreRate, this.fv_roundNum);
        		//nR = nexacro.round(nPreRate, 2);	//[?????????]
        		//nR = nPreRate;
        		//trace("-------------------(nR)"+nR);
        		//nR = parseFloat(defectQty) / parseFloat(total) * 100;
        		//trace("-------------------"+nR);
        	}
        	return nR+"%";
        };

        /*
         * ?????????
         */
        this.fn_initSearch = function()
        {
        	this.ds_defectGrp.clearData();
        	this.ds_search.clearData();
        	this.ds_defectGrp.filter("");
        	//this.div_work.form.sta_cnt_ds_defectGrp.set_text('Count : <fc v="#f31d24">0</fc>');
        };



        /**************************************************************************
         * 8. ?????????
         ***************************************************************************/


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
        };
        this.loadIncludeScript("DFM00100D.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
