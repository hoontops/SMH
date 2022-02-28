(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM09600P");
            this.set_titletext("ShipmentInspMessagePopup");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(790,440);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_receiver", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"MESSAGE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"P_SPCLEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"P_DEFLEVEL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_editor","31.65%","108",null,null,"5","12%",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_url("common::richtexteditor.xfdl");
            obj.set_async("true");
            obj.set_enable("true");
            obj.set_border("0px none rgba(128,128,128,1)");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"89.55%","57","26","83",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("SAVE");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","0.89%","6",null,"31","70.89%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("ShipmentInspMessagePopup");
            obj.set_cssclass("sta_WF_subTitle3");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"89.77%","56","25","9",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_receiver","5","50","29.87%",null,null,"12%",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_receiver");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"30\"/><Column size=\"100\"/><Column size=\"30\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"LotNo\"/><Cell col=\"3\" text=\"차수\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CHK\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"2\" text=\"bind:RESOURCEID\"/><Cell col=\"3\" text=\"bind:DEGREE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","31.27%","80","36","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_tooltiptext("CODECLASSNAME");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_subject","Static01:10","80",null,"20","5",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("essential");
            obj.set_inputmode("normal");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","31.27%","50","36","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("공정명");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_tooltiptext("CODECLASSNAME");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","69.62%","50","53","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("등록자");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_tooltiptext("CODECLASSNAME");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_subject00","Static01_00:10","50",null,"20","Static01_00_00:10",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("essential");
            obj.set_inputmode("normal");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_subject00_00","Static01_00_00:10","50",null,"20","5",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("essential");
            obj.set_inputmode("normal");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",790,440,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","txa_description00","value","ds_lookupTypes","DESCRIPTION");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::richtexteditor.xfdl");
        };
        
        // User Script
        this.registerScript("PCM09600P.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 사용자정보 수정
         * 파일명 		: cmam00100.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2021.01.20
         *
         * 설  명		: 사용자정보 수정
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.01.20	진성하   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include(필수)
         ***************************************************************************/

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.fv_currDate;
        this.contents;
        var fv_atchSrcKey;
        /**************************************************************************
         * 3. FORM 정의
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);

        	this.opener.fv_rtnValue = null;

        	this.lv_lotId = this.parent.arg_lotId;
        	this.lv_productDefId = this.parent.arg_productDefId;
        	this.lv_productDefVersion = this.parent.arg_productDefVersion;
        	this.lv_processSegmentId = this.parent.arg_processSegmentId;
        	this.lv_processSegmentVersion = this.parent.arg_processSegmentVersion;
        	this.lv_spcLevel = this.parent.arg_spcLevel;
        	this.lv_defLevel = this.parent.arg_defLevel;

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 		this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0, "PLANTID", 				this.gf_getSiteType());
        	this.ds_search.setColumn(0, "LANGUAGETYPE", 		this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", 				"SelectLotListForShipmentInspection");
        	this.ds_search.setColumn(0, "LOTID", 				this.nfn_nvl(this.lv_lotId,""));
        	this.ds_search.setColumn(0, "PRODUCTDEFID", 		this.nfn_nvl(this.lv_productDefId,""));
        	this.ds_search.setColumn(0, "P_SPCLEVEL"				,this.nfn_nvl(this.lv_spcLevel,""));
        	this.ds_search.setColumn(0, "P_DEFLEVEL"				,this.nfn_nvl(this.lv_defLevel,""));
        	this.ds_search.setColumn(0, "PROCESSSTATE"				,"Run");

        	var sSvcID 			= "SelectLotListForShipmentInspection";
        	var sController 	= "/pcm09600/selectCustomQuery.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_receiver=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };


        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	if (this.ds_receiver.getCaseCount("CHK=='1'")<=0)
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");
        		return;
        	}

        	var component = this;
        	var strColIdList = "edt_subject";
        	var strColNmList = "SUBJECT";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        	if (rtn == false) return;

        	if(this.gfn_isNull(this.div_editor.form.getContent())){
        		this.gfn_Message("NoCommentsMeasurement", null, "warning", "ok");//alert("내용이 없습니다.");
        		return;
        	}

        	this.ds_email.clearData();
        	this.ds_email.addRow();
        	this.ds_email.setColumn(0,"SUBJECT",this.edt_subject.value);
        	this.ds_email.setColumn(0,"CONTENT",this.div_editor.form.getContent());
        	this.ds_email.setColumn(0,"FROM_ADDR",this.gf_getEmailAddr());
        	this.ds_email.setColumn(0,"FROM_NAME",this.gf_getUserNm());
        	//this.ds_email.setColumn(0,"SNDNG_LOG_ID",atchSrcKey);
        	this.ds_email.setColumn(0, "JOB_SYS_CD", this.div_file.form.jobSysCd);
        	this.ds_email.setColumn(0, "ATCH_SRC_KEY", fv_atchSrcKey);
        	this.ds_email.setColumn(0, "ATCH_TY_CD", this.div_file.form.atchTyCd);
        	this.ds_email.setColumn(0, "TABLE_NAME", this.div_file.form.tableName);

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID = "saveEmailSend";
        	var sController = "/cmam00100/saveEmailSend.do";
        	var sInDatasets = "INPUT=ds_receiver:U INPUT2=ds_email:U";
        	var sOutDatasets = "";

        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "saveEmailSend");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");

        	}
        	else
        	{
        		if (trId == "Save")
        		{
        		}
        		else if (trId == "save")
        		{
        			this.gfn_Message("NoSaveData", null, "info", "ok");
        			this.opener.fv_rtnValue = "SUCC";
        			this.close();
        			//this.fn_search();
        		}
        	}
        };

        /**************************************************************************
         * 6. 팝업 시작
         **************************************************************************/

        /**************************************************************************
         * 80. 팝업
        ***************************************************************************/
        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        };
        /**************************************************************************
         * 7. 기타 함수 시작
         **************************************************************************/

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.btn_close_onclick = function (obj, e)
        {
        	var rtnArray = new Array();
        	this.opener.fv_rtnValue = rtnArray;
        	this.close();
        };




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.edt_subject.addEventHandler("onchanged",this.div_edt_meaning_onchanged,this);
            this.edt_subject00.addEventHandler("onchanged",this.div_edt_meaning_onchanged,this);
            this.edt_subject00_00.addEventHandler("onchanged",this.div_edt_meaning_onchanged,this);
        };
        this.loadIncludeScript("PCM09600P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
