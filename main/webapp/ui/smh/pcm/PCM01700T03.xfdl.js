(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM01700T03");
            this.set_titletext("BBT 불량");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,316);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_lotInfoData", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PATHTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPEID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STEPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRINTLOTCARD\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRINTRCLOTCARD\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINUSER\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"ISRCLOT\" type=\"STRING\" size=\"256\"/><Column id=\"SELFSHIPINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"SELFTAKEINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"OSPINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"ISBEFOREROLLCUTTING\" type=\"STRING\" size=\"256\"/><Column id=\"Column30\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"ISWEEKMNG\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTPROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLAIMLOT\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"ISREWORK\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"DUEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_param", this);
            obj._setContents("<ColumnInfo><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTREVISION\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectParam", this);
            obj._setContents("<ColumnInfo><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CODECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bbtDefectList", this);
            obj._setContents("<ColumnInfo><Column id=\"DEFECTCODEGROUPID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODEGROUPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"LAYER\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectInfoData", this);
            obj._setContents("<ColumnInfo><Column id=\"DEFECTCODEGROUPID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODEGROUPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"LAYERID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTRATE\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectcode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODEID\" type=\"STRING\" size=\"256\"/><Column id=\"CODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODEGROUPID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("title1_01","0","0","97","34",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검사 결과 등록");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_BBTHOLEDefectInfo","60%","34",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_defectInfoData");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"불량코드\" tooltiptext=\"DEFECTCODE\"/><Cell col=\"2\" text=\"불량항목\" tooltiptext=\"DEFECTITEM\"/><Cell col=\"3\" text=\"검사수량\" tooltiptext=\"INSPECTQTY\"/><Cell col=\"4\" text=\"불량수량\" tooltiptext=\"DEFECTQTY\"/><Cell col=\"5\" text=\"불량률\" tooltiptext=\"DEFECTRATE\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:DEFECTCODE\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:DEFECTCODENAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:INSPECTQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"4\" text=\"bind:DEFECTQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"5\" text=\"bind:DEFECTRATE\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"합계\" textAlign=\"center\" tooltiptext=\"SUM\" cssclass=\"cell_blue\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" text=\"expr:dataset.getSum(&quot;DEFECTQTY&quot;)\" cssclass=\"cell_blue\"/><Cell col=\"5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_BBTHOLEDefect","0","34",null,null,"grd_BBTHOLEDefectInfo:10","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_bbtDefectList");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"불량코드\" tooltiptext=\"DEFECTCODE\" cssclass=\"cell_point\"/><Cell col=\"2\" text=\"불량항목\" tooltiptext=\"DEFECTITEM\"/><Cell col=\"3\" text=\"수량(PCS)\" tooltiptext=\"PCSQTY\" cssclass=\"cell_point\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:DEFECTCODE\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:DEFECTCODENAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PCSQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\" maskeditautoselect=\"true\" edittype=\"mask\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"합계\" textAlign=\"center\" tooltiptext=\"SUM\" cssclass=\"cell_blue\"/><Cell col=\"2\"/><Cell col=\"3\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" text=\"expr:dataset.getSum(&quot;PCSQTY&quot;)\" cssclass=\"cell_blue\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_bbtDefectList","title1_01:0","0","140","34",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_BBTHOLEDefectPrint","sta_cnt_ds_bbtDefectList:0","9","114","21",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("불량 데이터 출력");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("title1_01_00","60%","0","114","34",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("설비 Defect Data");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_defectInfoData","title1_01_00:0","0","140","34",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Div("div_BBTHOLEDefectBtnItem","583","0","161","34",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Button("btn_grdDel",null,"6","26","24","0",null,null,null,null,null,this.div_BBTHOLEDefectBtnItem.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.div_BBTHOLEDefectBtnItem.addChild(obj.name, obj);

            obj = new Button("btn_grdAdd",null,"6","26","24","btn_grdDel:0",null,null,null,null,null,this.div_BBTHOLEDefectBtnItem.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.div_BBTHOLEDefectBtnItem.addChild(obj.name, obj);

            obj = new Div("div_BBTHOLEDefectInfoBtnItem","1140","0","118","34",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_grdDel",null,"6","26","24","0",null,null,null,null,null,this.div_BBTHOLEDefectInfoBtnItem.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.div_BBTHOLEDefectInfoBtnItem.addChild(obj.name, obj);

            obj = new Button("btn_grdAdd",null,"6","26","24","btn_grdDel:0",null,null,null,null,null,this.div_BBTHOLEDefectInfoBtnItem.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.div_BBTHOLEDefectInfoBtnItem.addChild(obj.name, obj);

            obj = new Button("btn_BBTHOLEDefectMapLink",null,"6","86","24","5",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("Defect Map");
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
        this.addIncludeScript("PCM01700T03.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM01700T03.xfdl","lib::lib_pcm.xjs");
        this.addIncludeScript("PCM01700T03.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("PCM01700T03.xfdl","lib::lib_mtm.xjs");
        this.addIncludeScript("PCM01700T03.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PCM01700T03.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 작업종료 :: BBT 불량
         * 파일명 		: PCM01700T03.xfdl
         * 작성자 		: 김성현
         * 작성일 		: 2021.04.29
         *
         * 설  명		: 인수등록 :: BBT 불량 탭
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

        this.defectType = "";
        this.ds_bbtDefectList_rowposition = -1;

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {

        	console.log("PCM01700T03");

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
        		case "selectDefectDataByEquipment":

        			if (this.defectType == "BBT")
        			{
        				//grdBBTHOLEDefect.View.RefreshComboBoxDataSource("DEFECTCODE", new SqlQuery("GetCodeList", "00001", "CODECLASSID=DefectMapBBTDefectCode", $"LANGUAGETYPE={this.gf_getLanguageType()}"));

        				if (this.gf_getEnterpriseId() == this.getEnterPrise_InterFlex())
        				{
        					this.div_BBTHOLEDefectBtnItem.set_visible(false);

        					//grdBBTHOLEDefect.View.Columns["DEFECTCODE"].OptionsColumn.AllowEdit = false;
        					//this.grd_BBTHOLEDefect.setCellProperty("body", 1, "edittype", "none");
        					this.grd_BBTHOLEDefect.setCellProperty("body", 1, "expandimage", "");
        					this.grd_BBTHOLEDefect.setCellProperty("body", 1, "expandshow", "hine");
        					this.grd_BBTHOLEDefect.setCellProperty("body", 1, "expandsize", "");

        					this.ds_defectParam.clearData();
        					this.ds_defectParam.addRow();
        					this.ds_defectParam.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        					this.ds_defectParam.setColumn(0, "CODECLASSID", "DefectMapBBTDefectCode");
        					this.ds_defectParam.setColumn(0, "VALIDSTATE", "Y");
        					this.ds_defectParam.setColumn(0, "VERSION", "10001");

        					var sSvcID = "getBBTDefectList";
        					var sController = "/pcm01900/getBBTDefectList.do";
        					var sInDatasets = "INPUT=ds_defectParam";
        					var sOutDatasets = "ds_bbtDefectList=output";
        					var sArgs = "";
        					this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        				}
        				else if (this.gf_getEnterpriseId() == Constants.EnterPrise_YoungPoong)
        				{

        					this.div_BBTHOLEDefectBtnItem.set_visible(true);

        					//grdBBTHOLEDefect.View.Columns["DEFECTCODE"].OptionsColumn.AllowEdit = true;
        					//this.grd_BBTHOLEDefect.setCellProperty("body", 1, "edittype", "none");
        					this.grd_BBTHOLEDefect.setCellProperty("body", 1, "expandimage", "url('theme://images/grd_expand.png')");
        					this.grd_BBTHOLEDefect.setCellProperty("body", 1, "expandshow", "show");
        					this.grd_BBTHOLEDefect.setCellProperty("body", 1, "expandsize", "24");


        					if(this.ds_bbtDefectList.getRowCount() == 0)
        					{
        						this.ds_bbtDefectList.addColumn( "DEFECTCODEGROUPID"     , "string", 256 );
        						this.ds_bbtDefectList.addColumn( "DEFECTCODEGROUPNAME"   , "string", 256 );
        						this.ds_bbtDefectList.addColumn( "DEFECTCODE"            , "string", 256 );
        						this.ds_bbtDefectList.addColumn( "DEFECTCODENAME"        , "string", 256 );
        						this.ds_bbtDefectList.addColumn( "LAYER"                 , "string", 256 );
        						this.ds_bbtDefectList.addColumn( "PCSQTY"                , "BIGDECIMAL", 256 );
        					}

        					var dCnt = this.ds_defectInfoData.getRowCount();

        					for(var i = 0; i < dCnt; i++)
        					{
        						var nRow = this.ds_bbtDefectList.addRow();

        						this.ds_bbtDefectList.setColumn(nRow, "DEFECTCODEGROUPID", this.ds_defectInfoData.getColumn(i, "DEFECTCODEGROUPID"));
        						this.ds_bbtDefectList.setColumn(nRow, "DEFECTCODEGROUPNAME", this.ds_defectInfoData.getColumn(i, "DEFECTCODEGROUPNAME"));
        						this.ds_bbtDefectList.setColumn(nRow, "DEFECTCODE", this.ds_defectInfoData.getColumn(i, "DEFECTCODE"));
        						this.ds_bbtDefectList.setColumn(nRow, "DEFECTCODENAME", this.ds_defectInfoData.getColumn(i, "DEFECTCODENAME"));
        						this.ds_bbtDefectList.setColumn(nRow, "PCSQTY", this.ds_defectInfoData.getColumn(i, "DEFECTQTY"));
        					}

        				}
        			}
        			else if (defectType == "HOLE")
        			{
        				//grdBBTHOLEDefect.View.RefreshComboBoxDataSource("DEFECTCODE", new SqlQuery("GetCodeList", "00001", "CODECLASSID=DefectMapHoleDefectCode", $"LANGUAGETYPE={this.gf_getLanguageType()}"));

        				this.div_BBTHOLEDefectBtnItem.set_visible(true);

        				//grdBBTHOLEDefect.View.Columns["DEFECTCODE"].OptionsColumn.AllowEdit = true;
        				//this.grd_BBTHOLEDefect.setCellProperty("body", 1, "edittype", "none");
        				this.grd_BBTHOLEDefect.setCellProperty("body", 1, "expandimage", "url('theme://images/grd_expand.png')");
        				this.grd_BBTHOLEDefect.setCellProperty("body", 1, "expandshow", "show");
        				this.grd_BBTHOLEDefect.setCellProperty("body", 1, "expandsize", "24");

        				if(this.ds_bbtDefectList.getRowCount() == 0)
        				{
        					this.ds_bbtDefectList.addColumn( "DEFECTCODEGROUPID"     , "string", 256 );
        					this.ds_bbtDefectList.addColumn( "DEFECTCODEGROUPNAME"   , "string", 256 );
        					this.ds_bbtDefectList.addColumn( "DEFECTCODE"            , "string", 256 );
        					this.ds_bbtDefectList.addColumn( "DEFECTCODENAME"        , "string", 256 );
        					this.ds_bbtDefectList.addColumn( "LAYER"                 , "string", 256 );
        					this.ds_bbtDefectList.addColumn( "PCSQTY"                , "BIGDECIMAL", 256 );
        				}

        				var dCnt = this.ds_defectInfoData.getRowCount();

        				for(var i = 0; i < dCnt; i++)
        				{
        					var nRow = this.ds_bbtDefectList.addRow();

        					this.ds_bbtDefectList.setColumn(nRow, "DEFECTCODEGROUPID", this.ds_defectInfoData.getColumn(i, "DEFECTCODEGROUPID"));
        					this.ds_bbtDefectList.setColumn(nRow, "DEFECTCODEGROUPNAME", this.ds_defectInfoData.getColumn(i, "DEFECTCODEGROUPNAME"));
        					this.ds_bbtDefectList.setColumn(nRow, "DEFECTCODE", this.ds_defectInfoData.getColumn(i, "DEFECTCODE"));
        					this.ds_bbtDefectList.setColumn(nRow, "DEFECTCODENAME", this.ds_defectInfoData.getColumn(i, "DEFECTCODENAME"));
        					this.ds_bbtDefectList.setColumn(nRow, "PCSQTY", this.ds_defectInfoData.getColumn(i, "DEFECTQTY"));
        				}
        			}

        			break;

        		case "getBBTDefectList":


        			break;

        		case "getAoiDefectCodeByDefectCodeGroup":

        			this.setBBTHOLEDefectPageVisible();

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
         this.fn_search = function ()
         {
         	var vLotId          = this.parent.parent.parent.parent.parent.g_LotId;
        	var vPanelperQty    = this.parent.parent.parent.parent.parent.g_PanelperQty;
        	var vPnlQty         = this.parent.parent.parent.parent.parent.g_PnlQty;
        	var vPcsQty         = this.parent.parent.parent.parent.parent.g_PcsQty;
        	var vQueryVersion   = this.parent.parent.parent.parent.parent.queryVersion;
        	var vLotInfoData    = this.parent.parent.parent.parent.parent.ds_lotInfo;

        	this.setLotInfo(vLotId, vPanelperQty, vPnlQty, vPcsQty, vQueryVersion, vLotInfoData);


        	this.getDefectCodeList();

        	console.log("fn_search");

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

        /*
         *	불량코드 리스트
         */
        this.getDefectCodeList = function ()
        {
        	this.ds_temp.clear();
        	this.pfn_DatasetAddColumn(this.ds_temp, "LANGUAGETYPE,VERSION");

        	this.ds_temp.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.ds_temp.setColumn(0, "LOTID", "10001");

        	this.pfn_CostomQuery(this.ds_temp, this.ds_defectcode, "getAoiDefectCodeByDefectCodeGroup"); //????

        };

        this.setBBTHOLEDefectPageVisible = function ()
        {
        	this.defectType = this.parent.parent.parent.parent.parent.tab_bbt_visible; // BBT, HOLE


        	this.ds_param.clearData();
        	this.ds_param.addRow();
        	this.ds_param.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.ds_param.setColumn(0, "LOTID", this._lotId);
        	this.ds_param.setColumn(0, "PRODUCTDEFID", this.nfn_nvl(this.ds_lotInfoData.getColumn(0, "PRODUCTDEFID"), ""));
        	this.ds_param.setColumn(0, "PRODUCTDEFVERSION", this.nfn_nvl(this.ds_lotInfoData.getColumn(0, "PRODUCTDEFVERSION"), ""));
        	this.ds_param.setColumn(0, "EQUIPMENTTYPE", this.defectType);
        	this.ds_param.setColumn(0, "VERSION", "10001");


        	var sSvcID = "selectDefectDataByEquipment";
        	var sController = "/pcm01900/selectDefectDataByEquipment.do";
        	var sInDatasets = "INPUT=ds_param";
        	var sOutDatasets = "ds_defectInfoData=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.btn_BBTHOLEDefectMapLink_onclick = function(obj,e)
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

        this.div_BBTHOLEDefectBtnItem_btn_grdAdd_onclick = function(obj,e)
        {
        	var nRow = this.ds_bbtDefectList.addRow();
        	this.ds_bbtDefectList.setColumn(nRow, "ISCHANGE", "Y");
        };

        this.div_BBTHOLEDefectBtnItem_btn_grdDel_onclick = function(obj,e)
        {
        	var nRow = this.ds_bbtDefectList.rowcount == 1 ? 0 : this.ds_bbtDefectList_rowposition;
        	this.ds_bbtDefectList.deleteRow(nRow);
        };

        this.ds_bbtDefectList_onrowposchanged = function(obj,e)
        {
        	this.ds_bbtDefectList_rowposition = e.newrow;
        };

        this.ds_bbtDefectList_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "DEFECTCODE")
        	{
        		obj.filter("DEFECTCODE = '" + e.newvalue + "'");

        		if (obj.getRowCount() > 0)
        		{
        			// 이미 등록된 불량 항목입니다.
        			this.gfn_Message("AlreadyInputDefectItem", null, "info", "ok");
        			obj.setColumn(e.row, e.columnid , "");
        			obj.filter("");

        			return;
        		}

        		obj.filter("");

        	}
        };


        // 불량코드
        this.pdv_DefectCodeList_grd_DefectCodeList_oncelldblclick = function(obj,e)
        {
        	var codeid			  = this.ds_defectcode.getColumn(this.ds_defectcode.rowposition,"CODEID");
        	var codename          = this.ds_defectcode.getColumn(this.ds_defectcode.rowposition,"CODENAME");
        	var defectcodegroupid = this.ds_defectcode.getColumn(this.ds_defectcode.rowposition,"DEFECTCODEGROUPID");

        	this.ds_bbtDefectList.set_enableevent(false);

        	var nRow = this.ds_bbtDefectList.rowcount == 1 ? 0 : this.ds_bbtDefectList_rowposition;

        	this.ds_bbtDefectList.setColumn(nRow,"DEFECTCODE",codeid);
        	this.ds_bbtDefectList.setColumn(nRow,"DEFECTCODENAME",codename);
        	this.ds_bbtDefectList.setColumn(nRow,"DEFECTCODEGROUPID",defectcodegroupid);

        	this.ds_bbtDefectList.set_enableevent(true);

        	this.pdv_DefectCodeList.closePopup();
        	this.ds_defectcode.filter("");
        };


        // this.grd_BBTHOLEDefect_onexpandup = function(obj:nexacro.Grid,e:nexacro.GridMouseEventInfo)
        // {
        // 	if (this.nfn_isEqualCol(obj, e.col, "DEFECTCODE"))
        // 	{
        // 		var nRow = this.ds_bbtDefectList.rowcount == 1 ? 0 : this.ds_bbtDefectList_rowposition;
        //
        // 		var pkId = this.ds_bbtDefectList.getColumn(nRow,"DEFECTCODEGROUPID");
        //
        // 		//this.ds_defectcode.filter("DEFECTCODEGROUPID='" + pkId + "'");
        //
        // 		this.pdv_DefectCodeList.show();
        // 		this.pdv_DefectCodeList.trackPopup(e.screenx, e.screeny-70,  this.pdv_DefectCodeList.width, this.pdv_DefectCodeList.height, "fn_Callback_pdv_DefectCodeList");
        // 	}
        // };


        this.grd_BBTHOLEDefect_checkValidation = function()
        {
        // 	//ds_bbtDefectList
        // 	var result = "";
        //
        // 	this.ds_bbtDefectList.filter("CHK=='1'");
        // 	for(var i = 0; i < this.ds_bbtDefectList.getRowCount(); i++)
        // 	{
        // 		result += this.ds_bbtDefectList.getColumn(i, "EQUIPMENTID")  + ",";
        // 	}
        //
        // 	if (result.length > 0)
        // 		result = result.substring(0, result.length - 1);
        //
        // 	this.ds_bbtDefectList.filter("");
        //
        // 	return result;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_BBTHOLEDefectBtnItem.form.btn_grdDel.addEventHandler("onclick",this.div_BBTHOLEDefectBtnItem_btn_grdDel_onclick,this);
            this.div_BBTHOLEDefectBtnItem.form.btn_grdAdd.addEventHandler("onclick",this.div_BBTHOLEDefectBtnItem_btn_grdAdd_onclick,this);
            this.btn_BBTHOLEDefectMapLink.addEventHandler("onclick",this.btn_BBTHOLEDefectMapLink_onclick,this);
            this.ds_bbtDefectList.addEventHandler("onrowposchanged",this.ds_bbtDefectList_onrowposchanged,this);
            this.ds_bbtDefectList.addEventHandler("oncolumnchanged",this.ds_bbtDefectList_oncolumnchanged,this);
        };
        this.loadIncludeScript("PCM01700T03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
