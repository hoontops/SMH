(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM01700T10");
            this.set_titletext("설비 Recipe");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,316);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_equipmentRecipeInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ISCURRENTPROCESS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_recipeParam", this);
            obj._setContents("<ColumnInfo><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RECIPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PARAMETERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"SEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotInfoData", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PATHTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPEID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STEPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRINTLOTCARD\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRINTRCLOTCARD\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINUSER\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"ISRCLOT\" type=\"STRING\" size=\"256\"/><Column id=\"SELFSHIPINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"SELFTAKEINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"OSPINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"ISBEFOREROLLCUTTING\" type=\"STRING\" size=\"256\"/><Column id=\"Column30\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"ISWEEKMNG\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTPROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLAIMLOT\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"ISREWORK\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"DUEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("title1_01","0","0","90","34",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("설비 Recipe");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_cssclass("sta_WF_subTitle2");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_equipmentRecipe","0","34",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_equipmentRecipeInfo");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"설비 ID\" tooltiptext=\"EQUIPMENTID\"/><Cell col=\"3\" text=\"설비명\" tooltiptext=\"EQUIPMENTNAME\"/><Cell col=\"4\" text=\"Recipe Id\" tooltiptext=\"RECIPEID\"/><Cell col=\"5\" text=\"Recipe 버전\" tooltiptext=\"RECIPEVERSION\"/><Cell col=\"6\" text=\"Recipe 명\" tooltiptext=\"RECIPENAME\"/><Cell col=\"7\" text=\"파라미터 ID\" tooltiptext=\"PARAMETERID\"/><Cell col=\"8\" text=\"파라미터명\" tooltiptext=\"PARAMETERNAME\"/><Cell col=\"9\" text=\"하한값\" tooltiptext=\"LSL\"/><Cell col=\"10\" text=\"목표값\" tooltiptext=\"TARGET\"/><Cell col=\"11\" text=\"상한값\" tooltiptext=\"USL\"/><Cell col=\"12\" text=\"Validation 타입\" tooltiptext=\"VALIDATIONTYPE\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:EQUIPMENTID\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:EQUIPMENTNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:RECIPEID\" textAlign=\"left\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" expandsize=\"24\"/><Cell col=\"5\" text=\"bind:RECIPEVERSION\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:RECIPENAME\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:PARAMETERID\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:PARAMETERNAME\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:LSL\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:TARGET\"/><Cell col=\"11\" text=\"bind:USL\" displaytype=\"mask\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"12\" text=\"bind:VALIDATIONTYPE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_equipmentRecipeInfo","122","0","140","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
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
        this.addIncludeScript("PCM01700T10.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM01700T10.xfdl","lib::lib_pcm.xjs");
        this.addIncludeScript("PCM01700T10.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("PCM01700T10.xfdl","lib::lib_mtm.xjs");
        this.registerScript("PCM01700T10.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 인수등록 :: 설비별 Recipe 탭
         * 파일명 		: PCM01700T10.xfdl
         * 작성자 		: 김성현
         * 작성일 		: 2021.04.10
         *
         * 설  명		: 인수등록 :: 설비별 Recipe 탭
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
         // this.gf_getEnterpriseId()
        // this.gf_getSiteType()
        // this.gf_getLanguageType()
        // this.gf_getUserId()
        // this.gf_getUserNm()

        this._panelPerQty = 0;
        this._panelQty = 0;
        this._qty = 0;
        this._visibleLotId = true;
        this._visibleFileUp = false;
        this._VisibleDefectDgree = false;
        this._visibleTopDefectCode = false;
        this._lotId = "";
        this._queryVersion = "";

        this.equipmentId = "";
        this.recipeNameFieldName = "";
        this.parameterNameFieldName = "";


        this.ds_equipmentRecipeInfo_rowposition = -1;

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	console.log("PCM01700T10");

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
        		case "selectEquipmentRecipe":
        			console.log(this.ds_equipmentRecipeInfo.saveXML());

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

        			var nRow = this.ds_equipmentRecipeInfo.rowcount == 1 ? 0 : this.ds_equipmentRecipeInfo_rowposition;


        			this.ds_equipmentRecipeInfo.setColumn(nRow,"EQUIPMENTID",rtn[0]);
        			this.ds_equipmentRecipeInfo.setColumn(nRow,"RECIPEID",rtn[1]);
        			this.ds_equipmentRecipeInfo.setColumn(nRow,"RECIPEVERSION",rtn[2]);
        			this.ds_equipmentRecipeInfo.setColumn(nRow,"RECIPENAME",rtn[3]);
        			this.ds_equipmentRecipeInfo.setColumn(nRow,"PRODUCTTYPE",rtn[4]);
        			this.ds_equipmentRecipeInfo.setColumn(nRow,"RECIPETYPE",rtn[5]);

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
        	console.log("fn_search");

        	//설비탭의 ds_equipmentInfo 에서 EQUIPMENTID를 가져옴.
        	//this.equipmentId = string.Join(",", equipmentList.Rows.Cast<DataRow>().Select(row => Format.GetString(row["EQUIPMENTID"])));


        	switch (this.gf_getLanguageType())
        	{
        		case "ko-KR":
        			this.recipeNameFieldName = "KRECIPENAME";
        			this.parameterNameFieldName = "KPARAMETERNAME";
        			break;
        		case "en-US":
        			this.recipeNameFieldName = "ERECIPENAME";
        			this.parameterNameFieldName = "EPARAMETERNAME";
        			break;
        		case "zh-CN":
        			this.recipeNameFieldName = "CRECIPENAME";
        			this.parameterNameFieldName = "CPARAMETERNAME";
        			break;
        		case "vi-VN":
        			this.recipeNameFieldName = "VRECIPENAME";
        			this.parameterNameFieldName = "VPARAMETERNAME";
        			break;
        	}

        	this.ds_recipeParam.clearData();
        	this.ds_recipeParam.addRow();

        	this.ds_recipeParam.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.ds_recipeParam.setColumn(0, "RECIPENAME", this.recipeNameFieldName);
        	this.ds_recipeParam.setColumn(0, "PARAMETERNAME", this.parameterNameFieldName);
        	this.ds_recipeParam.setColumn(0, "PRODUCTID", this.ds_lotInfoData.getColumn(0, "PRODUCTDEFID"));
        	this.ds_recipeParam.setColumn(0, "PRODUCTVERSION", this.ds_lotInfoData.getColumn(0, "PRODUCTDEFVERSION"));
        	this.ds_recipeParam.setColumn(0, "PROCESSDEFID", this.parent.parent.parent.parent.parent.processDefId);
        	this.ds_recipeParam.setColumn(0, "PROCESSDEFVERSION", this.parent.parent.parent.parent.parent.processDefVersion);
        	this.ds_recipeParam.setColumn(0, "SEGMENTID", this.ds_lotInfoData.getColumn(0, "PROCESSSEGMENTID"));
        	this.ds_recipeParam.setColumn(0, "RESOURCEID", this.ds_lotInfoData.getColumn(0, "RESOURCEID"));
        	this.ds_recipeParam.setColumn(0, "LOTID", this._lotId);
        	this.ds_recipeParam.setColumn(0, "EQUIPMENTID", this.equipmentId);
        	this.ds_recipeParam.setColumn(0, "VERSION", this._queryVersion);


        	var sSvcID = "selectEquipmentRecipe";
        	var sController = "/pcm01800/selectEquipmentRecipe.do";
        	var sInDatasets = "INPUT=ds_recipeParam";
        	var sOutDatasets = "ds_equipmentRecipeInfo=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
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

        this.grd_equipmentRecipe_onexpandup = function(obj,e)
        {
        	if(e.row <0) return;
        	if (this.nfn_isEqualCol(obj, e.col, "RECIPEID"))
        	{
        		this.mfn_OpenDefectPopup();
        	}
        };

        this.mfn_OpenDefectPopup = function ()
        {
        	var nRow = this.ds_equipmentRecipeInfo.rowcount == 1 ? 0 : this.ds_equipmentRecipeInfo_rowposition;

        	var popupId     = "SEARCH_RECIPEID";

        	var vLanguagetype       = this.nfn_nvl(this.ds_recipeParam.getColumn(0, "LANGUAGETYPE" ), "");
        	var vRecipename         = this.nfn_nvl(this.ds_recipeParam.getColumn(0, "RECIPENAME" ), "");
        	var vProductid          = this.nfn_nvl(this.ds_recipeParam.getColumn(0, "PRODUCTID" ), "");
        	var vProductversion     = this.nfn_nvl(this.ds_recipeParam.getColumn(0, "PRODUCTVERSION" ), "");
        	var vProcessdefid       = this.nfn_nvl(this.ds_recipeParam.getColumn(0, "PROCESSDEFID" ), "");
        	var vProcessdefversion  = this.nfn_nvl(this.ds_recipeParam.getColumn(0, "PROCESSDEFVERSION" ), "");
        	var vSegmentid          = this.nfn_nvl(this.ds_recipeParam.getColumn(0, "SEGMENTID" ), "");
        	var vResourceid         = this.nfn_nvl(this.ds_recipeParam.getColumn(0, "RESOURCEID" ), "");
        	var vLotID              = this.nfn_nvl(this.ds_recipeParam.getColumn(0, "LOTID" ), "");
        	var vEquipmentId        = this.nfn_nvl(this.ds_recipeParam.setColumn(0, "EQUIPMENTID"), "");

        	var oArg = {};

        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = "P00247"; // getEquipmentRecipeList
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "EQUIPMENTID|RECIPEID|RECIPEVERSION|RECIPENAME|PRODUCTTYPE|RECIPETYPE";
        	oArg.arg_paramCols = "VERSION|RECIPENAME|PRODUCTID|PRODUCTVERSION|PROCESSDEFID|PROCESSDEFVERSION|SEGMENTID|RESOURCEID|LOTID|EQUIPMENTID";
        	oArg.arg_paramValues = this._queryVersion + "|" + vRecipename + "|" + vProductid + "|" + vProductversion + "|" + vProcessdefid + "|" + vProcessdefversion + "|" + vSegmentid + "|" + vResourceid + "|" + vLotID + "|" + vEquipmentId;
        	oArg.arg_searchStr = "";


        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=800,height=800");
        };


        this.ds_equipmentRecipeInfo_onrowposchanged = function(obj,e)
        {
        	this.ds_equipmentRecipeInfo_rowposition = e.newrow;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.grd_equipmentRecipe.addEventHandler("onexpandup",this.grd_equipmentRecipe_onexpandup,this);
            this.ds_equipmentRecipeInfo.addEventHandler("onrowposchanged",this.ds_equipmentRecipeInfo_onrowposchanged,this);
        };
        this.loadIncludeScript("PCM01700T10.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
