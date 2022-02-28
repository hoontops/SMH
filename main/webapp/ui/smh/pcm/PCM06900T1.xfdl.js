(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM06900T1");
            this.set_titletext("Message");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,316);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_messageInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"WRITEPROCESSSEGMENT\" type=\"STRING\" size=\"256\"/><Column id=\"PATHSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"MESSAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"WRITER\" type=\"STRING\" size=\"256\"/><Column id=\"WRITEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISREAD\" type=\"STRING\" size=\"256\"/><Column id=\"CONTEXT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_messageParam", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_param", this);
            obj._setContents("<ColumnInfo><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"SHOWTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dt", this);
            obj._setContents("<ColumnInfo><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"MESSAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"WRITER\" type=\"STRING\" size=\"256\"/><Column id=\"WRITEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"MESSAGE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotInfoData", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PATHTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotMessageInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_messageList", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"WRITEPROCESSSEGMENT\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"ISREAD\" type=\"STRING\" size=\"256\"/><Column id=\"MESSAGE\" type=\"STRING\" size=\"256\"/><Column id=\"SHOWTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGEDROW\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_worker", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"DUEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPEID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"ISREWORK\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STEPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRINTLOTCARD\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRINTRCLOTCARD\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINUSER\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"ISRCLOT\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"SELFSHIPINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"SELFTAKEINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"OSPINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"ISBEFOREROLLCUTTING\" type=\"STRING\" size=\"256\"/><Column id=\"PATHTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISWEEKMNG\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTPROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLAIMLOT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_body", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"ISREAD\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div01","60%","34",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            obj.set_border("1px solid #b3b3b3,1px solid #e8e8e8,0px none");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","21.13%","31",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("SUBJECT");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_00","Static30:5","5",null,"20","5",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_text("샘플");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_00_00","0","31",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_detailBg");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static30_00","0","31","21.13%",null,null,"0",null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("COMMENTS");
            this.Div01.addChild(obj.name, obj);

            obj = new WebBrowser("Web","Static30_00:5","35",null,null,"5","5",null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("grd_message","0","34",null,null,"Div01:10","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_messageInfo");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"300\"/><Column size=\"150\"/><Column size=\"140\"/><Column size=\"60\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"공정수순\" tooltiptext=\"USERSEQUENCE\"/><Cell col=\"2\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"3\" text=\"입력공정\" tooltiptext=\"WRITEPROCESSSEGMENT\"/><Cell col=\"4\" text=\"작업장\" tooltiptext=\"AREANAME\"/><Cell col=\"5\" text=\"메시지 유형\" tooltiptext=\"MESSAGETYPE\"/><Cell col=\"6\" text=\"등록자\" tooltiptext=\"WRITER\"/><Cell col=\"7\" text=\"등록일\" tooltiptext=\"WRITEDATE\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:USERSEQUENCE\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:WRITEPROCESSSEGMENT\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:AREANAME\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:MESSAGETYPE\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:WRITER\" displaytype=\"mask\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:WRITEDATE\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("title1_01","0","0","110","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("전달사항");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MESSAGE");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,316,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","Div01.form.edt_00","value","ds_dt","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM06900T1.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM06900T1.xfdl","lib::lib_pcm.xjs");
        this.addIncludeScript("PCM06900T1.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("PCM06900T1.xfdl","lib::lib_mtm.xjs");
        this.registerScript("PCM06900T1.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 최종인수등록 :: 전달사항 탭
         * 파일명 		: PCM06900T1.xfdl
         * 작성자 		: 최성민
         * 작성일 		: 2021.04.28
         *
         * 설  명		: 최종인수등록 :: 전달사항 탭
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.28	최성민   	최초작성
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
        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/

        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;
            switch(sPopupId)
        	{
        		case "SEARCH_LOTMESSAGEPOPUP" :
        			if(typeof(rtn) != "undefined")
        			{
        				if(rtn.resultCd == "OK")
        				{
        					if(this.ds_body.getCaseCount("ISREAD=='Y'")>0){
        						var sSvcID = "saveLotMessageRead";
        						var sController = "/pcm01700/saveLotMessageRead.do";
        						var sInDatasets = "INPUT=ds_body";
        						var sOutDatasets = "";
        						var sArgs = "";
        						this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        					}
        				}
        			}
        			break;
        		default :
        			break;
        	}
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
        		case "selectLotHistoryMessage":
        			if (this.ds_messageInfo.getRowCount() > 0)
        			{
        				var isRealAllMessage = true;
        				for(var i = 0; i < this.ds_messageInfo.getRowCount(); i++)
        				{
        					if(this.nfn_nvl(this.ds_messageInfo.getColumn(i, "ISREAD"), "") == "N")
        					{
        						isRealAllMessage = false;
        						break;
        					}
        				}

        				if (!isRealAllMessage)
        				{
        					this.ds_lotMessageInfo.clearData();
        					this.ds_lotMessageInfo.copyData(this.parent.parent.parent.parent.parent.parent.parent.ds_lotInfo);

        					//메시지 정보 조회
        					var lotId             = this.nfn_nvl(this.ds_lotMessageInfo.getColumn(0, "LOTID"), "");
        					var productDefId      = this.nfn_nvl(this.ds_lotMessageInfo.getColumn(0, "PRODUCTDEFID"), "");
        					var productDefVersion = this.nfn_nvl(this.ds_lotMessageInfo.getColumn(0, "PRODUCTDEFVERSION"), "");
        					var processSegmentId  = this.nfn_nvl(this.ds_lotMessageInfo.getColumn(0, "PROCESSSEGMENTID"), "");

        					this.ds_param.clearData();
        					this.ds_param.addRow();
        					this.ds_param.setColumn(0, "LOTID", 			lotId);
        					this.ds_param.setColumn(0, "PRODUCTDEFID", 		productDefId);
        					this.ds_param.setColumn(0, "PRODUCTDEFVERSION", productDefVersion);
        					this.ds_param.setColumn(0, "PROCESSSEGMENTID", 	processSegmentId);
        					this.ds_param.setColumn(0, "LANGUAGETYPE", 		this.gf_getLanguageType());
        					this.ds_param.setColumn(0, "SHOWTYPE", "Y");
        					this.ds_param.setColumn(0, "VERSION", "10002");


        					var sSvcID = "getLotMessageList";
        					var sController = "/pcm01700/getLotMessageList.do";
        					var sInDatasets = "INPUT=ds_param";
        					var sOutDatasets = "ds_messageList=output";
        					var sArgs = "";

        					this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        				}
        			}

        			break;
        		case "selectLotMessage":
        			var msg = this.ds_dt.getColumn(0,"MESSAGE");
        			var v2 = this.Div01.form.Web.getProperty("document").getProperty("body");
        			v2.setProperty( "innerHTML", this.nfn_nvl(msg,""));
        			this.Div01.form.Web.setProperty( "document", v2 );
        			break;
        		case "getLotMessageList":


        			if(this.ds_messageList.getRowCount() > 0)
        			{
        				this.ds_body.clearData();
        				var popupId = "SEARCH_LOTMESSAGEPOPUP";
        				var oArg = {};

        				oArg.arg_ds_lotMessageInfo = this.ds_lotMessageInfo;
        				oArg.arg_ds_messageList    = this.ds_messageList;

        				this.gfn_openPopup(popupId,"pcm::PCM01700P4.xfdl",oArg,"width=556,height=664");
        			}


        			break;

        		case "saveLotMessageRead":

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
         this.fn_clear = function()
         {
        	this.ds_messageInfo.clearData();
        	this.ds_dt.clearData();
         }

        this.fn_search = function ()
         {
        	var dsObj 			= this.parent.parent.parent.parent.parent.parent.parent.ds_lotInfo;

        	this.ds_messageParam.clearData();
        	this.ds_messageParam.addRow();
        	this.ds_messageParam.setColumn(0, "ENTERPRISEID",			this.gf_getEnterpriseId());
        	this.ds_messageParam.setColumn(0, "PLANTID", 				this.gf_getSiteType());
        	this.ds_messageParam.setColumn(0, "LANGUAGETYPE", 			this.gf_getLanguageType());
        	this.ds_messageParam.setColumn(0, "LOTID", 					this.nfn_nvl(dsObj.getColumn(0, "LOTID"), ""));
        	this.ds_messageParam.setColumn(0, "PRODUCTDEFID", 			this.nfn_nvl(dsObj.getColumn(0, "PRODUCTDEFID"), ""));
        	this.ds_messageParam.setColumn(0, "PRODUCTDEFVERSION", 		this.nfn_nvl(dsObj.getColumn(0, "PRODUCTDEFVERSION"), ""));
        	this.ds_messageParam.setColumn(0, "PROCESSSEGMENTID", 		this.nfn_nvl(dsObj.getColumn(0, "PROCESSSEGMENTID"), ""));
        	this.ds_messageParam.setColumn(0, "PROCESSSEGMENTVERSION", 	this.nfn_nvl(dsObj.getColumn(0, "PROCESSSEGMENTVERSION"), ""));
        	this.ds_messageParam.setColumn(0, "VERSION", "10001");


        	var sSvcID = "selectLotHistoryMessage";
        	var sController = "/pcm01700/selectLotHistoryMessage.do";
        	var sInDatasets = "INPUT=ds_messageParam";
        	var sOutDatasets = "ds_messageInfo=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
         };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.ds_messageInfo_onrowposchanged = function(obj,e)
        {

        	this.ds_param.clearData();
        	this.ds_param.addRow();
        	this.ds_param.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.ds_param.setColumn(0, "P_TXNHISTKEY", obj.getColumn(e.newrow, "TXNHISTKEY"));
        	this.ds_param.setColumn(0, "P_LOTID", obj.getColumn(e.newrow, "LOTID"));
        	this.ds_param.setColumn(0, "P_PROCESSSEGMENTID", obj.getColumn(e.newrow, "PROCESSSEGMENTID"));
        	this.ds_param.setColumn(0, "P_USERSEQUENCE", obj.getColumn(e.newrow, "USERSEQUENCE"));
        	this.ds_param.setColumn(0, "VERSION", "10001");


        	var sSvcID = "selectLotMessage";
        	var sController = "/pcm01700/selectLotMessage.do";
        	var sInDatasets = "INPUT=ds_param";
        	var sOutDatasets = "ds_dt=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.ds_messageInfo.addEventHandler("onrowposchanged",this.ds_messageInfo_onrowposchanged,this);
        };
        this.loadIncludeScript("PCM06900T1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
