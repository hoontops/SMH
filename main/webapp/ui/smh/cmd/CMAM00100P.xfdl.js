(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMAM00100P");
            this.set_titletext("Mail Popup");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(790,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_receiver", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SNDNG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SNDNG_RESULT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SNDNG_KND_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_SRC_KEY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_atchSrcKey", this);
            obj._setContents("<ColumnInfo><Column id=\"SNDNG_LOG_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_email", this);
            obj._setContents("<ColumnInfo><Column id=\"SUBJECT\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_SYS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SNDNG_LOG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_SRC_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_TY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TABLE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_save",null,null,"80","20","73","9",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("메일발송");
            obj.set_cssclass("btn_pop_yes");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("SENDMAIL");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","0.89%","6",null,"31","81.27%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Mail Popup");
            obj.set_cssclass("sta_WF_subTitle3");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,null,"56","21","10","8",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("취소");
            obj.set_cssclass("btn_pop_no");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close00",null,"6","25","25","6",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addRow_ds_receiver",null,"45","26","24","31",null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_receiver",null,"45","26","24","5",null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_receiver","5","74",null,"146","5",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_receiver");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"29\"/><Column size=\"106\"/><Column size=\"93\"/><Column size=\"249\"/><Column size=\"184\"/><Column size=\"98\"/><Column size=\"126\"/><Column size=\"59\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"사용자ID\"/><Cell col=\"2\" text=\"사용자명\"/><Cell col=\"3\" text=\"이메일주소\"/><Cell col=\"4\" text=\"부서명\"/><Cell col=\"5\" text=\"직위\"/><Cell col=\"6\" text=\"사용자그룹\"/><Cell col=\"7\" text=\"전송결과\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:USER_ID\" expandshow=\"show\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:USER_NM\" edittype=\"normal\" editautoselect=\"true\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:EMAIL_ADDR\" edittype=\"normal\" editautoselect=\"true\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:DEPT_NM\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:JIKWI_NM\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:AUTH_NM\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:SNDNG_RESULT\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","7","41","141","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("수신자 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Div("div_file","5",null,null,"124","5","36",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_url("common::com_file_b2.xfdl");
            obj.set_border("0px solid rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_receiver","133","38",null,"34","393",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Div("div_editor","42","250",null,"378","5",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_url("common::richtexteditor.xfdl");
            obj.set_async("true");
            obj.set_enable("true");
            obj.set_border("0px none rgba(128,128,128,1)");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_subject","42","225",null,"20","5",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("essential");
            obj.set_inputmode("normal");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0.00%","225",null,"20","95.70%",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_tooltiptext("CODECLASSNAME");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0.00%","248",null,"20","95.57%",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_tooltiptext("REMARK");
            obj.set_textAlign("right");
            obj.set_text("내용");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",790,900,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","txa_description00","value","ds_lookupTypes","DESCRIPTION");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_file_b2.xfdl");
            this._addPreloadList("fdl","common::richtexteditor.xfdl");
        };
        
        // User Script
        this.registerScript("CMAM00100P.xfdl", function() {
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
        // include "lib::comLib.xjs";
        // include "cuslib::nbdfComLib.xjs";

        // var gfnXjs = new GfnXjs();

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

        	this.div_file.form.jobSysCd = "CMD";
        	this.div_file.form.atchTyCd = "EMAIL";
        	this.div_file.form.tableName = "EMAIL";
        	this.div_file.form.subDir  = "mail";

        	var sSvcID = "selectAtchSrcKey";
        	var sController = "/cmam00100/selectAtchSrcKey.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_atchSrcKey=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectAtchSrcKey");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs,"","",false);

        	fv_atchSrcKey = this.ds_atchSrcKey.getColumn(0,"ATCH_SRC_KEY");
        	this.div_file.form.atchSrcKey = fv_atchSrcKey;

        	var subject = this.gfn_isEmpty(this.parent.subject);
        	var contents = this.gfn_isEmpty(this.parent.contents);
        	var objAddrList = this.gfn_isEmpty(this.parent.objAddrList);
        	var objUserList = this.gfn_isEmpty(this.parent.objUserList);
        	var objUserIdList = this.gfn_isEmpty(this.parent.objUserIdList);
        	var objJikwiList = this.gfn_isEmpty(this.parent.objJikwiList);
        	var objUserGrpList = this.gfn_isEmpty(this.parent.objUserGrpList);
        	var objDeptList = this.gfn_isEmpty(this.parent.objDeptList);
        	var atchSrcKey = this.gfn_isEmpty(this.parent.atchSrcKey);
        	var atchSrc = this.gfn_isEmpty(this.parent.atchSrc);
        	if(!this.gfn_isNull(atchSrcKey)){
        		fv_atchSrcKey = atchSrcKey;
        		this.div_file.form.atchSrcKey = atchSrcKey;
        		this.div_file.form.tableName = atchSrc;
        		this.div_file.form.atchTyCd = atchSrc;
        		this.div_file.form.fn_search();
        	}

        	this.edt_subject.set_value(subject);
        	if(!this.gfn_isNull(objAddrList)){
        		for(var i=0; i<objAddrList.length; i++){
        			var nRow = this.ds_receiver.addRow();
        			this.ds_receiver.setColumn(nRow,"EMAIL_ADDR",objAddrList[i]);
        			this.ds_receiver.setColumn(nRow,"USER_NM",objUserList[i]);
        			this.ds_receiver.setColumn(nRow,"USER_ID",objUserIdList[i]);
        			this.ds_receiver.setColumn(nRow,"JIKWI_NM",objJikwiList[i]);
        			this.ds_receiver.setColumn(nRow,"AUTH_NM",objUserGrpList[i]);
        			this.ds_receiver.setColumn(nRow,"DEPT_NM",objDeptList[i]);
        			this.ds_receiver.setColumn(nRow,"CHK","1");
        		}
        	}
        	trace("contents-->"+contents);
        	this.contents = contents;
        	//this.div_editor.form.setContent(contents);
        	this.setTimer( 1000, 1000 );
        };


        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "SNDNG_KND_CD", "EMAIL");
        	this.ds_search.setColumn(0, "ATCH_SRC_KEY", fv_atchSrcKey);

        	var sSvcID = "selectCmdSndngLogsList";
        	var sController = "/cmam00100/selectCmdSndngLogsList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_receiver=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectCmdSndngLogsList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	var bOK = this.gfn_Message("IsSendMail", null, "conf", "yesno");//nexacro.getApplication().confirm("메일을 발송하시겠습니까?");
        	if (bOK == false) return;

        	if (this.ds_receiver.getCaseCount("CHK=='1'")<=0)
        	{
        		this.gfn_Message("NoRecipientEmail", null, "warning", "ok");//이메일 수신자가 없습니다
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
        	if(this.gfn_isNull(this.gf_getEmailAddr())){
        		this.gfn_Message("NoEmailAddress", this.gf_getUserId(), "warning", "ok");//이메일주소가 등록되지 않았습니다. 이메일주소를 확인해 주시기 바랍니다. User Id = {0}
        		return;
        	}
        	for(var i=0; i<this.ds_receiver.rowcount; i++){
        		if(this.ds_receiver.getColumn(i,"CHK")=="1" && this.gfn_isNull(this.ds_receiver.getColumn(i,"EMAIL_ADDR"))){
        			this.ds_receiver.set_rowposition(i);
        			this.gfn_Message("EMPTYEMAILADDRESS", "", "warning", "ok");//이메일주소를 입력하시기 바랍니다.
        			return;
        		}
        		if(this.ds_receiver.getColumn(i,"CHK")=="1" && !this.gfn_isEmail(this.ds_receiver.getColumn(i,"EMAIL_ADDR"))){
        			this.ds_receiver.set_rowposition(i);
        			this.gfn_Message("EMPTYEMAILADDRESS", "", "warning", "ok");//이메일 형식이 올바르지 않습니다.
        			return;
        		}
        	}

        	if (this.gfn_dsIsUpdated(this.div_file.form.ds_file) )
        	{
        		this.gfn_Message("ClickFileUploadButton", null, "warning", "ok");//파일업로드 버튼을 눌러 파일을 업로드 하시기 바랍니다.
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
        		if (trId == "selectCmdSndngLogsList")
        		{
        		}
        		else if (trId == "saveEmailSend")
        		{
        			this.gfn_Message("SuccessSendMail", null, "info", "ok");
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
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	var nRow ;
        	if(sPopupId == "SEARCH_USER")
        	{
        		for(var i=0; i<rtn.length; i++){
        			var colArray = rtn[i];
        			if(i==0){
        				nRow = this.ds_receiver.rowposition;
        			}else{
        				nRow = this.ds_receiver.addRow();
        			}
        			for(var j=0; j<colArray.length; j++){
        				this.ds_receiver.setColumn(nRow, "CHK", "1");
        				this.ds_receiver.setColumn(nRow, "USER_ID", colArray[0]);
        				this.ds_receiver.setColumn(nRow, "USER_NM", colArray[1]);
        				this.ds_receiver.setColumn(nRow, "EMAIL_ADDR", colArray[2]);
        				this.ds_receiver.setColumn(nRow, "DEPT_NM", colArray[3]);
        				this.ds_receiver.setColumn(nRow, "JIKWI_CD", colArray[4]);
        				this.ds_receiver.setColumn(nRow, "AUTH_NM", colArray[5]);
        			}
        		}
        	}
        }


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


        this.btn_addRow_ds_receiver_onclick = function(obj,e)
        {
        	this.ds_receiver.setColumn(this.ds_receiver.rowposition,"CHK","1");
        };

        this.grd_receiver_onexpandup = function(obj,e)
        {
        	if(e.row < 0) return;
        	if (this.nfn_isEqualCol(obj, e.col, "USER_ID"))
        	{
        		var popupId = "SEARCH_USER";
        		var oArg = {};
        		oArg.arg_type = "C";
        		oArg.arg_popupCd = "P00164";
        		oArg.arg_popupNm = "";
        		oArg.arg_rtnCols = "USER_ID|USER_NM|EMAIL_ADDR|DEPT_NM|JIKWI_NM|AUTH_NM";
        		oArg.arg_paramCols = "";
        		oArg.arg_paramValues = "";
        		oArg.arg_searchStr = "";

        		this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"");
        	}
        };



        this.CMAM00100P_ontimer = function(obj,e)
        {
        	var id = e.timerid;
        	if (id == 1000)
        	{
        		if(this.gfn_isNull(this.contents)) this.killTimer( 1000 );
        		if(!this.gfn_isNull(this.contents)){
        			this.div_editor.form.setContent(this.contents);
        			this.killTimer( 1000 );
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.addEventHandler("ontimer",this.CMAM00100P_ontimer,this);
            this.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_close00.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_addRow_ds_receiver.addEventHandler("onclick",this.btn_addRow_ds_receiver_onclick,this);
            this.grd_receiver.addEventHandler("onexpandup",this.grd_receiver_onexpandup,this);
            this.edt_subject.addEventHandler("onchanged",this.div_edt_meaning_onchanged,this);
        };
        this.loadIncludeScript("CMAM00100P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
