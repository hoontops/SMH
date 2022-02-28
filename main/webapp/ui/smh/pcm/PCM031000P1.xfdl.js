(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM031000P1");
            this.set_titletext("불량 내역");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_LotDefect", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENT\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREA\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("guidetip00","66","0","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("guidetip01","0","82","20","84",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"100","20","84","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("guidetip03",null,null,"50","20","97","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Tab("tabMain","20","20",null,null,"20","58",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tpgDefect",this.tabMain);
            obj.set_text("불량");
            obj.set_tooltiptext("DEFECT");
            this.tabMain.addChild(obj.name, obj);

            obj = new Static("staLotRouting","0","0","52","34","666",null,null,null,null,null,this.tabMain.tpgDefect.form);
            obj.set_taborder("0");
            obj.set_text("Defect");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            this.tabMain.tpgDefect.addChild(obj.name, obj);

            obj = new Grid("grdLotDefect","0","34",null,null,"0","0",null,null,null,null,this.tabMain.tpgDefect.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_LotDefect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"39\" band=\"left\"/><Column size=\"200\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"97\"/><Column size=\"140\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"97\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Lot No.\"/><Cell col=\"2\" text=\"공정명\"/><Cell col=\"3\" text=\"공정순서\"/><Cell col=\"4\" text=\"작업장\"/><Cell col=\"5\" text=\"불량코드\"/><Cell col=\"6\" text=\"불량코드 명\"/><Cell col=\"7\" text=\"품질공정 ID\"/><Cell col=\"8\" text=\"품질공정 명\"/><Cell col=\"9\" text=\"불량 수량\"/><Cell col=\"10\" text=\"원인 품목\"/><Cell col=\"11\" text=\"원인품목명\"/><Cell col=\"12\" text=\"원인 LOTID\"/><Cell col=\"13\" text=\"원인공정\"/><Cell col=\"14\" text=\"원인작업장\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:LOTID\"/><Cell col=\"2\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:USERSEQUENCE\"/><Cell col=\"4\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:DEFECTCODE\"/><Cell col=\"6\" text=\"bind:DEFECTCODENAME\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:QCSEGMENTID\"/><Cell col=\"8\" text=\"bind:QCSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:DEFECTQTY\"/><Cell col=\"10\" text=\"bind:REASONCONSUMABLEDEFID\"/><Cell col=\"11\" text=\"bind:REASONCONSUMABLEDEFNAME\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:REASONCONSUMABLELOTID\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:REASONSEGMENT\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:REASONAREA\"/></Band></Format></Formats>");
            this.tabMain.tpgDefect.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_LotDefect","staLotRouting:10","0","140","34",null,null,null,null,null,null,this.tabMain.tpgDefect.form);
            obj.set_taborder("2");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.tabMain.tpgDefect.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grdLotDefect",null,"6","29","24","0",null,null,null,null,null,this.tabMain.tpgDefect.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.tabMain.tpgDefect.addChild(obj.name, obj);

            obj = new Tabpage("tpgInspect",this.tabMain);
            obj.set_text("검사");
            obj.set_tooltiptext("INSPECT");
            obj.getSetter("DetailLoad").set("");
            obj.getSetter("InspectionClassID").set("");
            obj.getSetter("LotID").set("");
            this.tabMain.addChild(obj.name, obj);

            obj = new Button("btn_close",null,null,"70","28","20","20",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("닫기");
            obj.set_cssclass("btn_pop_no");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1200,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PCM031000P1.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 불량 내역 팝업
         * 파일명 		: PCM031000P1.xfdl
         * 작성자 		: 김애리
         * 작성일 		: 2021.7.7
         *
         * 설  명		: Lot 이력 조회에서 자주검사 쉘을 더블클릭하면
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.7.7	김애리   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/


        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/


        /**************************************************************************
         * 3. FORM 정의
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);

        	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0, "PLANTID", this.gf_getSiteType());
        	this.ds_search.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());

        	this.fn_initParam();

        	this.tabMain.tpgInspect.set_url("pcm::PCM01500D.xfdl");
        };

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
        		case "selectLotHistoryDefectPop": //첫번째 탭 가져오면 두번째 탭 바로 가져옴
        			this.tabMain.tpgInspect.LotID = this.ds_search.getColumn(0,"LOTID");

        			break;
        		default:

        			break;
        	}
        };
        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/

        this.fn_initParam = function()
        {
        	this.ds_search.setColumn(0,"LOTID", this.parent.LOTID);
        	this.tabMain.tpgInspect.LotID = this.parent.LOTID;

        	this.ds_LotDefect.clearData();

        	if(this.tabMain.tabindex == 0){
        		this.GetLotDefect();
        	} else {

        	}

        }


        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        this.GetLotDefect = function ()
        {
        	var sSvcID 			= "selectLotHistoryDefectPop";
        	var sController 	= "/pcm03100/selectLotHistoryDefectPop.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_LotDefect=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.btn_close_onclick = function (obj, e)
        {
        	this.close();
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tabMain.addEventHandler("onchanged",this.div_work_tabMain_onchanged,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.ds_LotDefect.addEventHandler("onrowposchanged",this.ds_messageList_onrowposchanged,this);
        };
        this.loadIncludeScript("PCM031000P1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
