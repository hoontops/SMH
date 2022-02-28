(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM01900T04");
            this.set_titletext("AOI HOLE 불량");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,316);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_param", this);
            obj._setContents("<ColumnInfo><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CODECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTREVISION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectInfoData", this);
            obj._setContents("<ColumnInfo><Column id=\"DEFECTCODEGROUPID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODEGROUPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"LAYERID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTRATE\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectParam", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEFECTCODEGROUPID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODEGROUPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"LAYER\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ANALYSISQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ANALYSISGOODQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ANALYSISGOODPNLQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"FINALDEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ISCHANGE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_layerList", this);
            obj._setContents("<ColumnInfo><Column id=\"LAYERID\" type=\"STRING\" size=\"256\"/><Column id=\"LAYERNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectcodegroup", this);
            obj._setContents("<ColumnInfo><Column id=\"CODEID\" type=\"STRING\" size=\"256\"/><Column id=\"CODENAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">HOLE</Col><Col id=\"CODENAME\">HOLE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectcode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODEID\" type=\"STRING\" size=\"256\"/><Column id=\"CODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODEGROUPID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectDistinctList", this);
            obj._setContents("<ColumnInfo><Column id=\"DEFECTCODEGROUPID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODEGROUPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"LAYER\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ANALYSISQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ANALYSISGOODQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ANALYSISGOODPNLQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"FINALDEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ISCHANGE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotInfoData", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PATHTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPEID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STEPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRINTLOTCARD\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRINTRCLOTCARD\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINUSER\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"ISRCLOT\" type=\"STRING\" size=\"256\"/><Column id=\"SELFSHIPINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"SELFTAKEINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"OSPINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"ISBEFOREROLLCUTTING\" type=\"STRING\" size=\"256\"/><Column id=\"Column30\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"ISWEEKMNG\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTPROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLAIMLOT\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"ISREWORK\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"DUEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("title1_01","0","0","97","34",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검사 결과 등록");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_AOIDefectInfo","59.94%","404",null,null,"0","-370",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_defectInfoData");
            obj.set_cssclass("grd_sub");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"불량그룹\" tooltiptext=\"DEFECTGROUP\"/><Cell col=\"2\" text=\"불량코드\" tooltiptext=\"DEFECTCODE\"/><Cell col=\"3\" text=\"불량항목\" tooltiptext=\"DEFECTITEM\"/><Cell col=\"4\" text=\"Layer\" tooltiptext=\"LAYER\"/><Cell col=\"5\" text=\"불량수량\" tooltiptext=\"DEFECTQTY\"/><Cell col=\"6\" text=\"불량률\" tooltiptext=\"DEFECTRATE\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:DEFECTCODEGROUPNAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:DEFECTCODE\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:DEFECTCODENAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:LAYERID\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:DEFECTQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"6\" text=\"bind:DEFECTRATE\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" tooltiptext=\"SUM\" text=\"합계\" textAlign=\"center\" cssclass=\"cell_blue\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" text=\"expr:dataset.getSum(&quot;DEFECTQTY&quot;)\" cssclass=\"cell_blue\"/><Cell col=\"6\" expandchar=\"%\" expandsize=\"24\" displaytype=\"mask\" maskeditformat=\"#,##0.00\" text=\"expr:dataset.getSum(&quot;DEFECTRATE&quot;)\" maskedittype=\"number\" maskeditpostfixtext=\" %\" cssclass=\"cell_blue\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_AOIDefect","0","34",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_defectList");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"불량그룹ID\" tooltiptext=\"DEFECTCODEGROUPID\" cssclass=\"cell_point\"/><Cell col=\"2\" text=\"불량그룹\" tooltiptext=\"DEFECTGROUP\"/><Cell col=\"3\" text=\"불량코드\" tooltiptext=\"DEFECTCODE\" cssclass=\"cell_point\"/><Cell col=\"4\" text=\"불량항목\" tooltiptext=\"DEFECTITEM\"/><Cell col=\"5\" text=\"층수\" tooltiptext=\"LAYER\" cssclass=\"cell_point\"/><Cell col=\"6\" text=\"불량수\" tooltiptext=\"QCMFINALINSPECTSPECOUT\" cssclass=\"cell_point\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:DEFECTCODEGROUPID\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" expandsize=\"24\"/><Cell col=\"2\" text=\"bind:DEFECTCODEGROUPNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:DEFECTCODE\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" expandsize=\"24\"/><Cell col=\"4\" text=\"bind:DEFECTCODENAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:LAYER\" textAlign=\"left\" displaytype=\"combocontrol\" combodataset=\"ds_layerList\" combocodecol=\"LAYERID\" combodatacol=\"LAYERNAME\" edittype=\"expr:comp.parent.fn_AOIDefetView_ShowingEditor(currow, dataset.getColID(4), &apos;combo&apos;)\"/><Cell col=\"6\" text=\"bind:PCSQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\" maskeditautoselect=\"true\" edittype=\"expr:comp.parent.fn_AOIDefetView_ShowingEditor(currow, dataset.getColID(5), &apos;mask&apos;)\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"합계\" textAlign=\"center\" tooltiptext=\"SUM\" cssclass=\"cell_blue\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" text=\"expr:dataset.getSum(&quot;PCSQTY&quot;)\" cssclass=\"cell_blue\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_defectList","title1_01:0","0","140","34",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_ReworkPublish","sta_cnt_ds_defectList:0","9","86","21",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("재작업 발행");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_AOIDefectPrint","chk_ReworkPublish:20","9","114","21",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("불량 데이터 출력");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("title1_01_00","59.94%","370","114","34",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("설비 Defect Data");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_defectInfoData","title1_01_00:0","370","140","34",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_AOIDefectBtnItem","583","0",null,"34","10",null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Button("btn_grdDel",null,"6","26","24","0",null,null,null,null,null,this.div_AOIDefectBtnItem.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.div_AOIDefectBtnItem.addChild(obj.name, obj);

            obj = new Button("btn_grdAdd",null,"6","26","24","btn_grdDel:0",null,null,null,null,null,this.div_AOIDefectBtnItem.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.div_AOIDefectBtnItem.addChild(obj.name, obj);

            obj = new Div("div_AOIDefectInfoBtnItem","1140","370","118","34",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_grdDel",null,"6","26","24","0",null,null,null,null,null,this.div_AOIDefectInfoBtnItem.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.div_AOIDefectInfoBtnItem.addChild(obj.name, obj);

            obj = new Button("btn_grdAdd",null,"6","26","24","btn_grdDel:0",null,null,null,null,null,this.div_AOIDefectInfoBtnItem.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.div_AOIDefectInfoBtnItem.addChild(obj.name, obj);

            obj = new Button("btn_AOIDefectMapLink",null,"376","86","24","5",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("Defect Map");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_DefectCodeGroupList","153","129","450","221",null,null,null,null,null,null,this);
            obj.set_text("pdv_00");
            obj.set_visible("false");
            obj.set_cssclass("pdiv_POP");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_DefectCodeGroupList","0","0",null,null,"0","0",null,null,null,null,this.pdv_DefectCodeGroupList.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_defectcodegroup");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드ID\"/><Cell col=\"1\" text=\"코드명\"/></Band><Band id=\"body\"><Cell text=\"bind:CODEID\"/><Cell col=\"1\" text=\"bind:CODENAME\"/></Band></Format></Formats>");
            this.pdv_DefectCodeGroupList.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_DefectCodeList","413","179","450","221",null,null,null,null,null,null,this);
            obj.set_text("pdv_00");
            obj.set_visible("false");
            obj.set_cssclass("pdiv_POP");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_DefectCodeList","0","0",null,null,"0","0",null,null,null,null,this.pdv_DefectCodeList.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_defectcode");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"200\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드ID\"/><Cell col=\"1\" text=\"코드명\"/><Cell col=\"2\" text=\"불량그룹ID\"/></Band><Band id=\"body\"><Cell text=\"bind:CODEID\"/><Cell col=\"1\" text=\"bind:CODENAME\"/><Cell col=\"2\" text=\"bind:DEFECTCODEGROUPID\"/></Band></Format></Formats>");
            this.pdv_DefectCodeList.addChild(obj.name, obj);
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
        this.addIncludeScript("PCM01900T04.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM01900T04.xfdl","lib::lib_pcm.xjs");
        this.addIncludeScript("PCM01900T04.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("PCM01900T04.xfdl","lib::lib_mtm.xjs");
        this.addIncludeScript("PCM01900T04.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PCM01900T04.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 작업종료 :: AOI 불량 탭
         * 파일명 		: PCM01700T02.xfdl
         * 작성자 		: 김성현
         * 작성일 		: 2021.04.29
         *
         * 설  명		: 작업종료 :: AOI 불량 탭
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
        this.executeIncludeScript("pcm::pcmCommon.xjs"); /*include "pcm::pcmCommon.xjs"*/; //pcm 에서 사용하는 공통
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

        this.isSendStep       = false;
        this.isRepairProcess  = false;
        this._isRepairProcess = false;
        this._isSendStep      = false;

        this.ds_defectList_rowposition = -1;

        this.nLeft;
        this.nTop;

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	console.log("PCM01700T02");

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
        		case "getCodeList":

        			this.getDefectCodeList();

        			break;

        		case "getAoiHoleDefectCodeByDefectCodeGroup":

        			this.setAOIDefectPageVisible();

        			break;
        		case "selectDefectDataByEquipment":
        			if (this.isRepairProcess || this.isSendStep)
        			{

        				this.chk_ReworkPublish.set_value(false);
        				this.chk_ReworkPublish.set_visible(false);

        				this.div_AOIDefectBtnItem.set_visible(false);

        				this.ds_defectParam.clearData();
        				this.ds_defectParam.addRow();
        				this.ds_defectParam.setColumn(0, "LOTID", this.parent.parent.parent.parent.parent.div_work.form.div_search.form.edt_lotId.value);
        				this.ds_defectParam.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        				this.ds_defectParam.setColumn(0, "VERSION", "10001");

        				var selectDefectMapDataTwoTypes = "";

        				if (this.isRepairProcess)
        					selectDefectMapDataTwoTypes = "selectDefectMapDataByWorkComplete";
        				else
        					selectDefectMapDataTwoTypes = "selectDefectMapDataForSend";

        				var sSvcID = "selectDefectMapDataTwoTypes";
        				var sController = "/pcm01900/" + selectDefectMapDataTwoTypes + ".do";
        				var sInDatasets = "INPUT=ds_defectParam";
        				var sOutDatasets = "ds_defectList=output";
        				var sArgs = "";
        				this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        			} else {
        				this.chk_ReworkPublish.set_visible(false);

        				this.ds_param.clearData();
        				this.ds_param.addRow();
        				this.ds_param.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        				this.ds_param.setColumn(0, "LOTID", this.parent.parent.parent.parent.parent.div_work.form.div_search.form.edt_lotId.value);
        				this.ds_param.setColumn(0, "VERSION", "10001");

        				var sSvcID = "getLayerListForAoiBbtDefect";
        				var sController = "/pcm01900/getLayerListForAoiBbtDefect.do";
        				var sInDatasets = "INPUT=ds_param";
        				var sOutDatasets = "ds_layerList=output";
        				var sArgs = "";
        				this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        			}

        			break;

        		case "selectDefectMapDataTwoTypes":

        			this.ds_defectDistinctList.clearData();
        			this.ds_defectDistinctList.copyData(this.ds_defectList);

        			this.gf_distincDsFilter(this.ds_defectDistinctList, "LAYER");
        			console.log("this.ds_defectDistinctList.getRowCount() >>" + this.ds_defectDistinctList.getRowCount());

        			var dCnt = this.ds_defectDistinctList.getRowCount();
        			for(var i = 0; i < dCnt; i++)
        			{
        				var nRow = this.ds_layerList.addRow();

        				this.ds_layerList.setColumn(nRow, "LAYERID"  , this.nfn_nvl(this.ds_defectDistinctList.getColumn(i, "LAYER"), ""));
        				this.ds_layerList.setColumn(nRow, "LAYERNAME", this.nfn_nvl(this.ds_defectDistinctList.getColumn(i, "LAYER"), ""));
        			}

        			this.grd_AOIDefect.updateToDataset(); // refresh

        			break;

        		case "getLayerListForAoiBbtDefect":

        			this.div_AOIDefectBtnItem.set_visible(true);

        			var isReworkPublish = false;


        			var cnt = this.ds_defectInfoData.getRowCount();
        			for(var i = 0; i < cnt; i++)
        			{
        				var nRow = this.ds_defectList.addRow();

        				this.ds_defectList.setColumn(nRow, "DEFECTCODEGROUPID", this.ds_defectInfoData.getColumn(i, "DEFECTCODEGROUPID"));
        				this.ds_defectList.setColumn(nRow, "DEFECTCODEGROUPNAME", this.ds_defectInfoData.getColumn(i, "DEFECTCODEGROUPNAME"));
        				this.ds_defectList.setColumn(nRow, "DEFECTCODE", this.ds_defectInfoData.getColumn(i, "DEFECTCODE"));
        				this.ds_defectList.setColumn(nRow, "DEFECTCODENAME", this.ds_defectInfoData.getColumn(i, "DEFECTCODENAME"));
        				this.ds_defectList.setColumn(nRow, "LAYER", this.ds_defectInfoData.getColumn(i, "LAYERID"));
        				this.ds_defectList.setColumn(nRow, "PCSQTY", this.ds_defectInfoData.getColumn(i, "DEFECTQTY"));

        				if (this.gf_getEnterpriseId()  == this.getEnterPrise_InterFlex())
        				{

        					var vDefectcodegroupId = this.nfn_nvl(this.ds_defectInfoData.getColumn(i, "DEFECTCODEGROUPID"), "");
        					if (vDefectcodegroupId == "005")
        					{
        						this.ds_defectList.setColumn(nRow, "ANALYSISQTY", this.ds_defectInfoData.getColumn(i, "DEFECTQTY"));
        						this.ds_defectList.setColumn(nRow, "SEQUENCE", 1);

        						isReworkPublish = true;
        					}
        					else
        					{
        						this.ds_defectList.setColumn(nRow, "SEQUENCE", 11);
        					}
        				}

        				this.ds_defectList.setColumn(nRow, "ISCHANGE", "N");
        			}

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
        	this.getDefectCodeList();
        }

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

        this.setAOIDefectPageVisible = function()
        {
        	this.isSendStep      = false;
        	this.isRepairProcess = this.parent.parent.parent.parent.parent._isRepairProcess;

        	//tabProcessFourStepDetail.SelectedTabPage = tpgAOIDefect;

        	this._isRepairProcess = this.isRepairProcess;
        	this._isSendStep = this.isSendStep;

        	this.ds_param.clearData();
        	this.ds_param.addRow();
        	this.ds_param.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.ds_param.setColumn(0, "LOTID", this.parent.parent.parent.parent.parent.div_work.form.div_search.form.edt_lotId.value);
        	this.ds_param.setColumn(0, "PRODUCTDEFID", this.nfn_nvl(this.ds_lotInfoData.getColumn(0, "PRODUCTDEFID"), ""));
        	this.ds_param.setColumn(0, "PRODUCTDEFVERSION", this.nfn_nvl(this.ds_lotInfoData.getColumn(0, "PRODUCTDEFVERSION"), ""));
        	this.ds_param.setColumn(0, "EQUIPMENTTYPE", "AOI");
        	this.ds_param.setColumn(0, "VERSION", "10001");


        	var sSvcID = "selectDefectDataByEquipment";
        	var sController = "/pcm01900/selectDefectDataByEquipment.do";
        	var sInDatasets = "INPUT=ds_param";
        	var sOutDatasets = "ds_defectInfoData=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.getAOIDefectDataSource = function()
        {
        	for(var i = 0; i < this.ds_defectList.getRowCount(); i++)
        	{
        		var layerRow = this.nfn_nvl(this.ds_defectList.getColumn(i, "LAYER"), "");
        		if (this.nfn_isNull(layerRow))
        		{
        			var defectCode = this.nfn_nvl(this.ds_defectList.getColumn(i, "DEFECTCODE"), "");

        			// 불량이 발생한 Layer를 선택하시기 바랍니다. Defect Code : {0}
        			this.gfn_Message("SelectLayer", defectCode, "warning", "ok");
        			return false;
        		}

        		// ※ 주의 nexacro.toNumber 로 바꾸지 말것
        		var pcsQtyRow = this.nfn_nvl(this.ds_defectList.getColumn(i, "PCSQTY"), "");
        		if (this.nfn_isNull(pcsQtyRow))
        		{
        			var defectCode = this.nfn_nvl(this.ds_defectList.getColumn(i, "DEFECTCODE"), "");

        			// 불량 수량을 입력하시기 바랍니다. Defect Code : {0}
        			this.gfn_Message("InputDefectQty", defectCode, "warning", "ok");
        			return false;
        		}

        		//2021-06-18 불량코드+층별 분석수량이 LOT의 양품수량을 초과할 수 없음
        		var goodQty		= this.nfn_nvl(this.ds_lotInfoData.getColumn(0, "PCSQTY"), 0);//양품수량
        		var expr		= "LAYER=='"+layerRow+"'";
        		var subSum 		= nexacro.toNumber(this.nfn_nvl(this.ds_defectList.getCaseSum(expr, "PCSQTY"), "0"));

        		if(subSum > goodQty){
        			this.gfn_Message("TargetQtyLessThanGootQty", null, "info", "ok");
        			return false;
        		}
        	}
        	return this.ds_defectList;
        };


        /*
         *	불량코드 리스트
         */
        this.getDefectCodeList = function ()
        {
        	this.ds_temp.clear();
        	this.pfn_DatasetAddColumn(this.ds_temp, "LANGUAGETYPE,VERSION");

        	this.ds_temp.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.ds_temp.setColumn(0, "LOTID", "10001");

        	this.pfn_CostomQuery(this.ds_temp, this.ds_defectcode, "getAoiHoleDefectCodeByDefectCodeGroup");

        };


        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.getIsReworkPublishChecked = function()
        {
        	return this.chk_ReworkPublish.value;
        };

        this.ds_defectList_onrowposchanged = function(obj,e)
        {
        	this.ds_defectList_rowposition = e.newrow;
        };

        this.div_AOIDefectBtnItem_btn_grdAdd_onclick = function(obj,e)
        {
        	var nRow = this.ds_defectList.addRow();
        	this.ds_defectList.setColumn(nRow, "ISCHANGE", "Y");
        };

        this.div_AOIDefectBtnItem_btn_grdDel_onclick = function(obj,e)
        {
        	var nRow = this.ds_defectList.rowcount == 1 ? 0 : this.ds_defectList_rowposition;
        	this.ds_defectList.deleteRow(nRow);
        };

        this.fn_AOIDefetView_ShowingEditor = function(currRow, focusedFieldName, paramEditType)
        {
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
        	} else {
        		if (focusedFieldName != "ANALYSISQTY" && focusedFieldName != "ANALYSISGOODQTY" && focusedFieldName != "ANALYSISGOODPNLQTY")
        			isChangeCell = true;
        	}

        	var edittype = "none";

        	if(isChangeCell)
        	{
        		edittype = paramEditType;
        	}

        	return edittype;
        };


        this.ds_defectList_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "DEFECTCODEGROUPID")
        	{
        // 		RepositoryItemLookUpEdit edit = e.Column.ColumnEdit as RepositoryItemLookUpEdit;
        //
        // 		string defectCodeGroupName = Format.GetString(edit.GetDataSourceValue("CODENAME", edit.GetDataSourceRowIndex("CODEID", e.Value)));
        //
        // 		grdAOIDefect.View.SetFocusedRowCellValue("DEFECTCODEGROUPNAME", defectCodeGroupName);

        //		그리드 멀티 콤보
        	}
        	else if (e.columnid == "DEFECTCODE" || e.columnid == "LAYER")
        	{
        		var defectCode = e.columnid == "DEFECTCODE" ? e.newvalue : this.nfn_nvl(obj.getColumn(e.row, "DEFECTCODE"), "");
        		var layerId    = e.columnid == "LAYER" ? e.newvalue : this.nfn_nvl(obj.getColumn(e.row, "LAYER"), "");

        		var dCount = obj.getCaseCount("DEFECTCODE == '" + defectCode + "' && LAYER == '" + layerId + "'");
        		if (dCount > 1)
        		{
        			// 이미 등록된 불량 항목입니다.
        			this.gfn_Message("AlreadyInputDefectItem", null, "info", "ok");

        			obj.setColumn(e.row, e.columnid, "");

        			return;
        		}
        		obj.filter("");

        		if (e.columnid == "DEFECTCODE")
        		{
        // 			RepositoryItemLookUpEdit edit = e.Column.ColumnEdit as RepositoryItemLookUpEdit;
        //
        // 			string defectCodeName = Format.GetString(edit.GetDataSourceValue("CODENAME", edit.GetDataSourceRowIndex("CODEID", e.Value)));
        //
        // 			grdAOIDefect.View.SetFocusedRowCellValue("DEFECTCODENAME", defectCodeName);
        // 			멀티 콤보
        		}
        	}
        	else if (e.columnid == "PCSQTY")
        	{
        		var defectCodeGroupId = this.nfn_nvl(obj.getColumn(e.row, "DEFECTCODEGROUPID"), "");
        		var defectCode        = this.nfn_nvl(obj.getColumn(e.row, "DEFECTCODE"), "");

        		if (this.nfn_isNull(defectCodeGroupId) || this.nfn_isNull(defectCode))
        		{
        			// 불량 그룹, 불량 항목을 선택하시기 바랍니다.
        			this.gfn_Message("SelectDefectGroupAndDefectItem", null, "info", "ok");

        			obj.setColumn(e.row, e.columnid, "");

        			return;
        		}

        		if (this.gf_getEnterpriseId() == this.getEnterPrise_InterFlex())
        		{
        			if (defectCodeGroupId == "005")
        				obj.setColumn(e.row, "ANALYSISQTY", e.newvalue);
        		}
        	}
        	else if (e.columnid == "ANALYSISQTY")
        	{

        		var defectQty         = nexacro.toNumber(this.nfn_nvl(obj.getColumn(e.row, "PCSQTY"), "0"));
        		var analysisTarget    = e.newvalue;

        		if (analysisTarget > defectQty)
        		{
        			// 분석대상 수량은 불량 수량을 초과할 수 없습니다.
        			this.gfn_Message("TargetQtyLessThanDefectQty", null, "info", "ok");

        			obj.setColumn(e.row, "ANALYSISQTY", defectQty);

        			return;
        		}
        	}
        	else if (e.columnid == "ANALYSISGOODQTY")
        	{

        		var defectQty         = nexacro.toNumber(this.nfn_nvl(obj.getColumn(e.row, "PCSQTY"), "0"));
        		var analysisTarget    = nexacro.toNumber(this.nfn_nvl(obj.getColumn(e.row, "ANALYSISQTY"), "0"));
        		var goodQty           = e.newvalue;

        		if (goodQty > analysisTarget)
        		{
        			// 분석양품 수량은 분석대상 수량을 초과할 수 없습니다.
        			this.gfn_Message("GoodQtyLessThanTargetQty", null, "info", "ok");

        			obj.setColumn(e.row, "ANALYSISGOODQTY", analysisTarget);
        			obj.setColumn(e.row, "FINALDEFECTQTY", defectQty - analysisTarget);

        			return;
        		}

        		obj.setColumn(e.row, "FINALDEFECTQTY", defectQty - goodQty);
        	}
        };

        this.btn_AOIDefectMapLink_onclick = function(obj,e)
        {
        // Lot No
        // AOI 포함
        //
        // Lot Defect Map 조회화면으로 이동

        	var lotId        = this.nfn_nvl(this.ds_lotInfoData.getColumn(0, "LOTID"), "");
        	var productDefId = this.nfn_nvl(this.ds_lotInfoData.getColumn(0, "PRODUCTDEFID"), "");
        	var productDefVersion = this.nfn_nvl(this.ds_lotInfoData.getColumn(0, "PRODUCTDEFVERSION"), "");

        	this.ds_param.clearData();
        	this.ds_param.addRow();
        	this.ds_param.setColumn(0, "LOTID", lotId);
        	this.ds_param.setColumn(0, "PRODUCTDEFID", productDefId);
        	this.ds_param.setColumn(0, "PRODUCTREVISION", productDefVersion);


        	//입고검사로 이동
        	var sUrl = "dfm::DFM00100M.xfdl";

        	// arryList 타입전달 예)
        	var objArgs = {
        		menuName : "Lot Defect Map",
        		objList : [this.SelectRow2JsonString(this.ds_param)]
        	};

        	var bReload = true;
        	this.gfn_goPage(sUrl, objArgs, bReload);

        };

        this.grd_AOIDefect_onexpandup = function(obj,e)
        {
        	if(e.row <0) return;

        	/* Form 에서 Grid Cell 기준으로 위치얻기 */
        	var objRect = obj.getCellRect(e.row, e.cell);

        	/* cell 기준 position으로 클라이언트 기준 X, Y 좌표를 스크린 기준 기준으로 바꾸어 위치얻기 */
        	this.nLeft = system.clientToScreenX(obj, objRect.left);
        	this.nTop = system.clientToScreenY(obj, objRect.bottom);

        	/* 스크린 기준 X, Y 좌표를 클라이언트 기준으로 바꾸어 위치얻기 */
        	this.nLeft = system.screenToClientX(nexacro.getApplication().mainframe, this.nLeft);
        	this.nTop = system.screenToClientY(nexacro.getApplication().mainframe, this.nTop);


        	if (this.nfn_isEqualCol(obj, e.col, "DEFECTCODEGROUPID"))
        	{
        		this.pdv_DefectCodeGroupList.show();
        		this.pdv_DefectCodeGroupList.trackPopup(this.nLeft, this.nTop,  this.pdv_DefectCodeGroupList.width, this.pdv_DefectCodeGroupList.height, "fn_Callback_pdv_DefectCodeGroupList");
        	}
        	else if (this.nfn_isEqualCol(obj, e.col, "DEFECTCODE"))
        	{

        		var nRow = this.ds_defectList.rowcount == 1 ? 0 : this.ds_defectList_rowposition;

        		var pkId = this.ds_defectList.getColumn(nRow,"DEFECTCODEGROUPID");
        		this.ds_defectcode.filter("DEFECTCODEGROUPID=='" + pkId + "'");
        		this.pdv_DefectCodeList.show();
        		this.pdv_DefectCodeList.trackPopup(this.nLeft, this.nTop,  this.pdv_DefectCodeList.width, this.pdv_DefectCodeList.height, "fn_Callback_pdv_DefectCodeList");
        	}
        };

        // 불량코드 그룹
        this.pdv_DefectCodeGroupList_grd_DefectCodeGroupList_oncelldblclick = function(obj,e)
        {
        	var codeid     = this.ds_defectcodegroup.getColumn(this.ds_defectcodegroup.rowposition,"CODEID");
        	var codename   = this.ds_defectcodegroup.getColumn(this.ds_defectcodegroup.rowposition,"CODENAME");

        	this.ds_defectList.set_enableevent(false);

        	var nRow = this.ds_defectList.rowcount == 1 ? 0 : this.ds_defectList_rowposition;

        	this.ds_defectList.setColumn(nRow,"DEFECTCODEGROUPID"  ,codeid);
        	this.ds_defectList.setColumn(nRow,"DEFECTCODEGROUPNAME",codename);

        	this.ds_defectList.set_enableevent(true);

        	this.pdv_DefectCodeGroupList.closePopup();
        };

        // 불량코드
        this.pdv_DefectCodeList_grd_DefectCodeList_oncelldblclick = function(obj,e)
        {
        	var codeid			  = this.ds_defectcode.getColumn(this.ds_defectcode.rowposition,"CODEID");
        	var codename          = this.ds_defectcode.getColumn(this.ds_defectcode.rowposition,"CODENAME");
        	var defectcodegroupid = this.ds_defectcode.getColumn(this.ds_defectcode.rowposition,"DEFECTCODEGROUPID");

        	this.ds_defectList.set_enableevent(false);

        	var nRow = this.ds_defectList.rowcount == 1 ? 0 : this.ds_defectList_rowposition;

        	this.ds_defectList.setColumn(nRow,"DEFECTCODE",codeid);
        	this.ds_defectList.setColumn(nRow,"DEFECTCODENAME",codename);
        	this.ds_defectList.setColumn(nRow,"DEFECTCODEGROUPID",defectcodegroupid);

        	this.ds_defectList.set_enableevent(true);

        	this.pdv_DefectCodeList.closePopup();
        	this.ds_defectcode.filter("");
        };

        this.IsReworkPublishChecked = function()
        {
        	/*
        	var isRework = false;
        	for(var i=0; i< this.ds_defectList.rowcount; i++){
        		var vDefectcodegroupId = this.nfn_nvl(this.ds_defectList.getColumn(i, "DEFECTCODEGROUPID"), "");
        		if (vDefectcodegroupId == "005")
        		{
        			isRework = true;
        		} else {
        			isRework = false;
        		}
        	}
        	this.chk_ReworkPublish.set_value(isRework);
        	*/
        	//return this.chk_ReworkPublish.value;
        	return false;
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.grd_AOIDefect.addEventHandler("onexpandup",this.grd_AOIDefect_onexpandup,this);
            this.div_AOIDefectBtnItem.form.btn_grdDel.addEventHandler("onclick",this.div_AOIDefectBtnItem_btn_grdDel_onclick,this);
            this.div_AOIDefectBtnItem.form.btn_grdAdd.addEventHandler("onclick",this.div_AOIDefectBtnItem_btn_grdAdd_onclick,this);
            this.btn_AOIDefectMapLink.addEventHandler("onclick",this.btn_AOIDefectMapLink_onclick,this);
            this.pdv_DefectCodeGroupList.form.grd_DefectCodeGroupList.addEventHandler("oncelldblclick",this.pdv_DefectCodeGroupList_grd_DefectCodeGroupList_oncelldblclick,this);
            this.pdv_DefectCodeList.form.grd_DefectCodeList.addEventHandler("oncelldblclick",this.pdv_DefectCodeList_grd_DefectCodeList_oncelldblclick,this);
            this.ds_defectList.addEventHandler("onrowposchanged",this.ds_defectList_onrowposchanged,this);
            this.ds_defectList.addEventHandler("oncolumnchanged",this.ds_defectList_oncolumnchanged,this);
        };
        this.loadIncludeScript("PCM01900T04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
