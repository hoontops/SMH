(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM01700T04");
            this.set_titletext("특기사항");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,316);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_commentInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ISCURRENTPROCESS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_commentParam", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotInfoData", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PATHTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPEID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STEPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRINTLOTCARD\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRINTRCLOTCARD\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINUSER\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"ISRCLOT\" type=\"STRING\" size=\"256\"/><Column id=\"SELFSHIPINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"SELFTAKEINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"OSPINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"ISBEFOREROLLCUTTING\" type=\"STRING\" size=\"256\"/><Column id=\"Column30\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"ISWEEKMNG\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTPROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLAIMLOT\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"ISREWORK\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"DUEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_comment","0","34",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_commentInfo");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"500\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"공정수순\" tooltiptext=\"USERSEQUENCE\"/><Cell col=\"2\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"3\" text=\"특기사항\" tooltiptext=\"REMARKS\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" cssclass=\"expr:ISCURRENTPROCESS==&apos;Y&apos; ? &apos;cell_bg_yellow&apos;:&apos;&apos;\"/><Cell col=\"1\" text=\"bind:USERSEQUENCE\" textAlign=\"left\" cssclass=\"expr:ISCURRENTPROCESS==&apos;Y&apos; ? &apos;cell_bg_yellow&apos;:&apos;&apos;\"/><Cell col=\"2\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\" cssclass=\"expr:ISCURRENTPROCESS==&apos;Y&apos; ? &apos;cell_bg_yellow&apos;:&apos;&apos;\"/><Cell col=\"3\" text=\"bind:DESCRIPTION\" textAlign=\"left\" cssclass=\"expr:ISCURRENTPROCESS==&apos;Y&apos; ? &apos;cell_bg_yellow&apos;:&apos;&apos;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("title1_01","0","0","110","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("특기사항");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_commentInfo","102","0","140","34",null,null,null,null,null,null,this);
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
        this.addIncludeScript("PCM01700T04.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM01700T04.xfdl","lib::lib_pcm.xjs");
        this.addIncludeScript("PCM01700T04.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("PCM01700T04.xfdl","lib::lib_mtm.xjs");
        this.registerScript("PCM01700T04.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 인수등록 :: 특기사항 탭
         * 파일명 		: PCM01700T04.xfdl
         * 작성자 		: 김성현
         * 작성일 		: 2021.04.10
         *
         * 설  명		: 인수등록 :: 특기사항 탭
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



        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	console.log("PCM01700T04");

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
        		case "selectCommentByProcess":
        			console.log(this.ds_commentInfo.saveXML());

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
        	this.ds_commentParam.clearData();
        	this.ds_commentParam.addRow();
        	this.ds_commentParam.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_commentParam.setColumn(0, "PLANTID", this.gf_getSiteType() );
        	this.ds_commentParam.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.ds_commentParam.setColumn(0, "LOTID", this.parent.parent.parent.parent.parent.div_work.form.div_search.form.edt_lotId.value);
        	this.ds_commentParam.setColumn(0, "PROCESSSEGMENTID", this.nfn_nvl(this.parent.parent.parent.parent.parent.ds_lotInfo.getColumn(0, "PROCESSSEGMENTID"), ""));
        	this.ds_commentParam.setColumn(0, "VERSION", this.parent.parent.parent.parent.parent.queryVersion);



        	var sSvcID = "selectCommentByProcess";
        	var sController = "/pcm01700/selectCommentByProcess.do";
        	var sInDatasets = "INPUT=ds_commentParam";
        	var sOutDatasets = "ds_commentInfo=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
        };
        this.loadIncludeScript("PCM01700T04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
