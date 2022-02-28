(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TOM00102P");
            this.set_titletext("[메일] 발주/취소");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1199,794);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_receiver", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SNDNG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SNDNG_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"CREATION_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ORDERNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SNDNG_KND_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_SRC_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_TY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SELSTR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_atchSrcKey", this);
            obj._setContents("<ColumnInfo><Column id=\"SNDNG_LOG_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_email", this);
            obj._setContents("<ColumnInfo><Column id=\"SUBJECT\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_SYS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SNDNG_LOG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_SRC_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_TY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TABLE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_toolRequestMailList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"TOOLCODE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLCATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"FORMID\" type=\"STRING\" size=\"256\"/><Column id=\"FORM\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLKINDID\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLKIND\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ROWSTATUS\" type=\"STRING\" size=\"256\"/><Column id=\"FILMUSELAYER1\" type=\"STRING\" size=\"256\"/><Column id=\"USELAYER\" type=\"STRING\" size=\"256\"/><Column id=\"FILMUSELAYER2\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"SUMMARY\" type=\"STRING\" size=\"256\"/><Column id=\"SCALEX\" type=\"STRING\" size=\"256\"/><Column id=\"SCALEY\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLMAKETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLMAKETYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"OLDQTY\" type=\"STRING\" size=\"256\"/><Column id=\"ORDERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDEPARTMENT\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTUSER\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DELIVERYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"OLB\" type=\"STRING\" size=\"256\"/><Column id=\"NETPNL\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLPROGRESSSTATUS\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ISAPPROVALUSE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_status", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"STATUSNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_save",null,null,"80","20","71","17",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("발주");
            obj.set_cssclass("btn_pop_yes");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("SAVE");
            this.addChild(obj.name, obj);

            obj = new Button("btn_testMail",null,null,"80","20","btn_save:5","17",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Test 발송");
            obj.set_cssclass("btn_pop_yes");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("SENDMAIL");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","0.98%","6",null,"31","30.98%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Mail 수신자 조회");
            obj.set_cssclass("sta_WF_subTitle3");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,null,"56","21","10","16",null,null,null,null,this);
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

            obj = new Button("btn_addRow_ds_receiver",null,"55","26","24","31",null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_receiver",null,"55","26","24","5",null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_receiver","5","84",null,"176","5",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_receiver");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"29\"/><Column size=\"106\"/><Column size=\"84\"/><Column size=\"149\"/><Column size=\"113\"/><Column size=\"65\"/><Column size=\"75\"/><Column size=\"142\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"사용자ID\"/><Cell col=\"2\" text=\"사용자명\"/><Cell col=\"3\" text=\"이메일주소\"/><Cell col=\"4\" text=\"부서명\"/><Cell col=\"5\" text=\"직위\"/><Cell col=\"6\" text=\"전송결과\"/><Cell col=\"7\" text=\"전송시간\"/><Cell col=\"8\" text=\"구분\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:USER_ID\" expandshow=\"show\"/><Cell col=\"2\" text=\"bind:USER_NM\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:EMAIL_ADDR\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:DEPT_NM\"/><Cell col=\"5\" text=\"bind:JIKWI_CD\"/><Cell col=\"6\" text=\"bind:SNDNG_RESULT\"/><Cell col=\"7\" text=\"bind:CREATION_DATE\" calendardateformat=\"yyyy-MM-dd\" maskedittype=\"string\"/><Cell col=\"8\" text=\"bind:ORDERNM\" calendardateformat=\"yyyy-MM-dd\" maskedittype=\"string\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","7","51","141","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("수신자 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Div("div_file","5",null,null,"124","5","61",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_url("common::com_file_b2.xfdl");
            obj.set_border("0px solid rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Div("div_editor","62","298",null,"400","5",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_url("common::richtexteditor.xfdl");
            obj.set_async("true");
            obj.set_enable("true");
            obj.set_border("0px none rgba(128,128,128,1)");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_subject","62","270",null,"20","5",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("essential");
            obj.set_inputmode("normal");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","1.67%","270","33","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_tooltiptext("CODECLASSNAME");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","1.67%","Static01:5","33","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_tooltiptext("REMARK");
            obj.set_textAlign("right");
            obj.set_text("내용");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1199,794,this,function(p){});
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
        this.addIncludeScript("TOM00102P.xfdl","lib::lib_tom.xjs");
        this.registerScript("TOM00102P.xfdl", function() {
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
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.fv_currDate;
        this.contents;
        var fv_atchSrcKey;
        this.fv_mailType; //메일타입:1:발주,2:발주취소,3:수신자확인

        /**************************************************************************
         * 3. FORM 정의
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);

        	//최초 버튼 ALL Disabled
        	this.btn_testMail.set_visible(false);
        	this.btn_save.set_visible(false);
        	//this.sta_status.set_visible(false);
        	//this.edt_status.set_visible(false);

        	this.fv_mailType = this.gfn_isEmpty(this.parent.mailType);
        	if(this.fv_mailType=="1"){ //발주
        		this.sta_title.set_text("발주 Mail 수신자 조회");
        		this.btn_save.set_text("발주");
        		this.btn_save.set_visible(true);

        	} else if(this.fv_mailType=="2"){ //발주취소
        		this.sta_title.set_text("발주취소 Mail 수신자 조회");
        		this.btn_save.set_text("발주취소");
        		this.btn_save.set_visible(true);

        	} else if(this.fv_mailType=="3"){ //수신자 조회
        		//this.sta_status.set_visible(true);
        		//this.edt_status.set_visible(true);
        		this.sta_title.set_text("Mail 수신자 조회");

        	}

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
        	var atchSrcKey = this.gfn_isEmpty(this.parent.atchSrcKey);
        	var atchSrc = this.gfn_isEmpty(this.parent.atchSrc);
        	var selStr = this.gfn_isEmpty(this.parent.selStr); //2021-07-26 수정함 : 선택건 발주 처리
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
        			this.ds_receiver.setColumn(nRow,"CHK","1");
        		}
        	}

        	//발주 List
        	var sSvcID = "selectToolRequestMailList";
        	var sController = "/tom00100/selectToolRequestMailList.do";
        	var sInDatasets = ""; //INPUT 데이터셋이 없으면 아규먼트 세팅 된다.
        	var sOutDatasets = "ds_toolRequestMailList=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectToolRequestMailList");
        	var fv_atchSrcKeyArr = fv_atchSrcKey.split("|");
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.nfn_nvl(this.gf_getEnterpriseId(), ""));
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());
        	sArgs += this.gfn_setParam("REQUESTDATE", fv_atchSrcKeyArr[0]);
        	sArgs += this.gfn_setParam("REQUESTSEQUENCE", fv_atchSrcKeyArr[1]);
        	sArgs += this.gfn_setParam("SELSTR", selStr);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs,"","",false);

        	this.fn_search();

        	trace("contents-->"+contents);
        	this.contents = this.tomfn_mailCssStr() + contents + "<BR>" + this.fn_toolRequestMailStr();
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

        	var sSvcID = "selectToolRequestMailRecvList";
        	var sController = "/tomCommon/selectToolRequestMailRecvList.do"; //화면 Load시 key 에 해당하는 사용자List 가져 온다.
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_receiver=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectToolRequestMailRecvList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
        this.fn_statusSearch = function (obj:Button, e:nexacro.ClickEventInfo)
        {
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "SNDNG_KND_CD", "EMAIL");
        	this.ds_search.setColumn(0, "ATCH_SRC_KEY", fv_atchSrcKey);

        	var sSvcID = "selectToolRequestStatusName";
        	var sController = "/tomCommon/selectToolRequestStatusName.do"; //화면 Load시 key 에 해당하는 사용자List 가져 온다.
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_status=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectToolRequestStatusName");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };
        */

        /*
         * 기능 : 발송
         */
        this.fn_sentMail = function (obj, e)
        {
        	var bOK = this.gfn_Message("IsSendMail", null, "conf", "yesno");//nexacro.getApplication().confirm("메일을 발송하시겠습니까?");
        	if (bOK == false) return;

        	if (this.ds_receiver.getCaseCount("CHK=='1'")<=0)
        	{
        		this.gfn_Message("NoRecipientEmail", null, "warning", "ok");//이메일 수신자가 없습니다
        		return;
        	}

        	var component2 = this;
        	var strColIdList = "edt_subject";
        	var strColNmList = "SUBJECT";
        	var rtn = this.nfn_MandatoryCheck(component2, strColIdList, strColNmList);
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
        	var sSvcID = "sentEmail";
        	var sController = "/tomCommon/sentEmail.do"; //메일 실제 발송을 호출 한다. (수신자 저장 기능 포함)
        	var sInDatasets = "INPUT=ds_receiver:U INPUT2=ds_email:U";
        	var sOutDatasets = "";

        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "sentEmail");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 수신자 저장 및 발주/발주취소
         */
        this.fn_save = function (obj, e)
        {
        	var msgName = "";
        	if(this.fv_mailType=="1"){ //발주
        		msgName = "OrderConfirm";
        	}else if(this.fv_mailType=="2"){ //발주
        		msgName = "OrderCancelConfirm";
        	}

        	var bOK = this.gfn_Message(msgName, null, "conf", "yesno"); //발주 하겠습니까 ? 또는 발주 취소 하겠습니까 ?
        	if (bOK == false) return;

        	if (this.ds_receiver.getCaseCount("CHK=='1'")<=0)
        	{
        		this.gfn_Message("NoRecipientEmail", null, "warning", "ok");//이메일 수신자가 없습니다
        		return;
        	}

        	var component2 = this;
        	var strColIdList = "edt_subject";
        	var strColNmList = "SUBJECT";
        	var rtn = this.nfn_MandatoryCheck(component2, strColIdList, strColNmList);
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
        	var sSvcID = "saveEmail";
        	var sController = "/tomCommon/saveEmail.do"; //메일 저장을 호출 한다.
        	var sInDatasets = "INPUT=ds_receiver:A INPUT2=ds_email:U";
        	var sOutDatasets = "";

        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "saveEmail");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		if (trId.substring(0, 6) == "select")
        		{
        			this.gfn_Message("ErrorOnSearch", trId + errMsg, "error", "ok");
        		}
        		else
        		{
        			this.gfn_Message("ErrorOnSave", trId + errMsg, "error", "ok");
        		}
        	}
        	else
        	{
        		if (trId == "selectToolRequestMailRecvList")
        		{
        			//this.fn_statusSearch();
        		}
        		else if (trId == "selectToolRequestStatusName")
        		{
        			//var statusName = this.ds_status.getColumn(this.ds_status.rowposition, "STATUSNAME");
        			//this.edt_status.set_value(statusName);
        		}
        		else if (trId == "sentEmail") //테스트 메일 발송 처리(사용하지 않는다)
        		{
        			this.gfn_Message("SuccessSendMail", null, "info", "ok"); //메일이 발송되었습니다.
        			this.fn_search();
        		}
        		else if (trId == "saveEmail")
        		{
        			//수신자 저장된 이후에 발주/발주취소 처리 한다.
        			if(this.fv_mailType=="1"){ //발주
        				/* ========== */
        				/* ========== */
        				/* 발주 처리 */
        				/* ========== */
        				/* ========== */
        				var fv_atchSrcKeyArr = fv_atchSrcKey.split("|");
        				var tempRequestDate = fv_atchSrcKeyArr[0];
        				var tempRequestSequence = fv_atchSrcKeyArr[1];

        				this.ds_search.clearData();
        				this.ds_search.addRow();
        				this.ds_search.setColumn(0, "ENTERPRISEID", 			this.gf_getEnterpriseId());
        				this.ds_search.setColumn(0, "REQUESTDATE", 				this.nfn_nvl(tempRequestDate, "")); //의뢰일자
        				this.ds_search.setColumn(0, "REQUESTSEQUENCE", 			this.nfn_nvl(tempRequestSequence, "")); //순번
        				this.ds_search.setColumn(0, "ATCH_SRC_KEY", 			this.nfn_nvl(tempRequestDate+"|"+tempRequestSequence, "")); //조회키
        				this.ds_search.setColumn(0, "ATCH_TY_CD", 				"TOMTOOLREQUEST");
        				this.ds_search.setColumn(0, "LANGUAGETYPE", 			this.gf_getLanguageType());
        				this.ds_search.setColumn(0, "SQL_ID", 					"saveOrder");

        				var selStr = this.gfn_isEmpty(this.parent.selStr); //2021-07-26 수정함 : 선택건 발주 처리
        				this.ds_search.setColumn(0, "SELSTR", 					selStr);

        				var sSvcID 			= "saveOrder";
        				var sController 	= "/tom00100/saveOrder.do";
        				var sInDatasets 	= "INPUT=ds_search";
        				var sOutDatasets 	= "";
        				var sArgs 			= "";
        				sArgs += this.gfn_setParam("", "");

        				this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        			}else if(this.fv_mailType=="2"){ //발주취소
        				/* ================ */
        				/* ================ */
        				/* 발주 취소 처리 */
        				/* =============== */
        				/* =============== */
        				var fv_atchSrcKeyArr = fv_atchSrcKey.split("|");
        				var tempRequestDate = fv_atchSrcKeyArr[0];
        				var tempRequestSequence = fv_atchSrcKeyArr[1];

        				this.ds_search.clearData();
        				this.ds_search.addRow();
        				this.ds_search.setColumn(0, "ENTERPRISEID", 			this.gf_getEnterpriseId());
        				this.ds_search.setColumn(0, "REQUESTDATE", 				this.nfn_nvl(tempRequestDate, "")); //의뢰일자
        				this.ds_search.setColumn(0, "REQUESTSEQUENCE", 			this.nfn_nvl(tempRequestSequence, "")); //순번
        				this.ds_search.setColumn(0, "ATCH_SRC_KEY", 			this.nfn_nvl(tempRequestDate+"|"+tempRequestSequence, "")); //조회키
        				this.ds_search.setColumn(0, "ATCH_TY_CD", 				"TOMTOOLREQUEST2"); //발주취소구분자 세팅(2021-04-27)
        				this.ds_search.setColumn(0, "LANGUAGETYPE", 			this.gf_getLanguageType());
        				this.ds_search.setColumn(0, "SQL_ID", 					"saveOrderCancel");

        				var selStr = this.gfn_isEmpty(this.parent.selStr); //2021-07-26 수정함 : 선택건 발주 취소 처리
        				this.ds_search.setColumn(0, "SELSTR", 					selStr);

        				var sSvcID 			= "saveOrderCancel";
        				var sController 	= "/tom00100/saveOrderCancel.do";
        				var sInDatasets 	= "INPUT=ds_search";
        				var sOutDatasets 	= "";
        				var sArgs 			= "";
        				sArgs += this.gfn_setParam("", "");

        				this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        			}
        		}
        		else if (trId == "saveOrder")
        		{
        			this.gfn_Message("OrderProcess", "", "error", "ok"); //발주 처리 되었습니다.
        			this.opener.fv_rtnValue = "OK";
        			this.close();
        		}
        		else if (trId == "saveOrderCancel")
        		{
        			this.gfn_Message("OrderCancelProcess", "", "error", "ok"); //발주 취소 처리 되었습니다.
        			this.opener.fv_rtnValue = "OK";
        			this.close();
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
        				this.ds_receiver.setColumn(nRow, "USER_ID", colArray[0]);
        				this.ds_receiver.setColumn(nRow, "USER_NM", colArray[1]);
        				this.ds_receiver.setColumn(nRow, "EMAIL_ADDR", colArray[2]);
        				this.ds_receiver.setColumn(nRow, "DEPT_NM", colArray[3]);
        				this.ds_receiver.setColumn(nRow, "JIKWI_CD", colArray[4]);
        				//this.ds_receiver.setColumn(nRow, "AUTH_NM", colArray[5]);
        			}
        		}
        	}
        }


        /**************************************************************************
         * 7. 기타 함수 시작
         **************************************************************************/
        //치공구 발주 메일 본문 List
        this.fn_toolRequestMailStr = function()
        {
        	var resultHtml = "";
        	var rowPos  = 0;
        	if (this.ds_toolRequestMailList.rowcount>0){
        		resultHtml += "<table border='1' cellspacing='0' bordercolor='#54688B' bordercolordark='white' bordercolorlight='#54688B' width='100%'>";
        		resultHtml += "  <tr class='listth'>";
        		resultHtml += "    <td align='center'>제작구분</td>";
        		resultHtml += "    <td align='center'>생산구분</td>";
        		resultHtml += "    <td align='center'>고객사</td>";
        		resultHtml += "    <td align='center'>품목코드</td>";
        		resultHtml += "    <td align='center'>품목Rev.</td>";
        		resultHtml += "    <td align='center'>Tool종류</td>";
        		resultHtml += "    <td align='center'>Tool형식</td>";
        		resultHtml += "    <td align='center'>수주량</td>";
        		resultHtml += "    <td align='center'>SCALEX</td>";
        		resultHtml += "    <td align='center'>SCALEY</td>";
        		resultHtml += "    <td align='center'>NET-PNL</td>";
        		resultHtml += "    <td align='center'>특이사항</td>";
        		resultHtml += "    <td align='center'>의뢰사유</td>";
        		resultHtml += "    <td align='center'>의뢰일자</td>";
        		resultHtml += "    <td align='center'>납기일자</td>";
        		resultHtml += "    <td align='center'>제작처</td>";
        		resultHtml += "    <td align='center'>작업처</td>";
        		resultHtml += "    <td align='center'>의뢰자</td>";
        		resultHtml += "  </tr>";
        		for(var i=0; i<this.ds_toolRequestMailList.rowcount; i++){
        			rowPos = i;
        			resultHtml += "  <tr class='listtd'>";
        			resultHtml += "    <td align='center'>"	+this.nfn_nvl(this.ds_toolRequestMailList.getColumn(rowPos, "TOOLMAKETYPENAME"),	"&nbsp;")+"</td>"; //제작구분
        			resultHtml += "    <td align='center'>"	+this.nfn_nvl(this.ds_toolRequestMailList.getColumn(rowPos, "PRODUCTIONTYPENAME"),	"&nbsp;")+"</td>"; //작업/생산구분?????????????
        			resultHtml += "    <td align='center'>"	+this.nfn_nvl(this.ds_toolRequestMailList.getColumn(rowPos, "CUSTOMERNAME"),		"&nbsp;")+"</td>"; //고객사??????????????????
        			resultHtml += "    <td align='center'>"	+this.nfn_nvl(this.ds_toolRequestMailList.getColumn(rowPos, "PRODUCTDEFID"),		"&nbsp;")+"</td>"; //품목코드
        			resultHtml += "    <td align='center'>"	+this.nfn_nvl(this.ds_toolRequestMailList.getColumn(rowPos, "PRODUCTDEFVERSION"),	"&nbsp;")+"</td>"; //내부Rev.
        			resultHtml += "    <td align='center'>"	+this.nfn_nvl(this.ds_toolRequestMailList.getColumn(rowPos, "TOOLKIND"),			"&nbsp;")+"</td>"; //TOOL종류
        			resultHtml += "    <td align='center'>"	+this.nfn_nvl(this.ds_toolRequestMailList.getColumn(rowPos, "FORM"),				"&nbsp;")+"</td>"; //TOOL형식
        			resultHtml += "    <td align='right'>"	+this.nfn_nvl(this.ds_toolRequestMailList.getColumn(rowPos, "ORDERQTY"),			"&nbsp;")+"</td>"; //수주량
        			resultHtml += "    <td align='right'>"	+this.nfn_nvl(this.ds_toolRequestMailList.getColumn(rowPos, "SCALEX"),				"&nbsp;")+"</td>";
        			resultHtml += "    <td align='right'>"	+this.nfn_nvl(this.ds_toolRequestMailList.getColumn(rowPos, "SCALEY"),				"&nbsp;")+"</td>";
        			resultHtml += "    <td align='right'>"	+this.nfn_nvl(this.ds_toolRequestMailList.getColumn(rowPos, "NETPNL"),				"&nbsp;")+"</td>";
        			resultHtml += "    <td align='left' width='150'>"	+this.nfn_nvl(this.ds_toolRequestMailList.getColumn(rowPos, "DESCRIPTION"),			"&nbsp;")+"</td>"; //특이사항
        			resultHtml += "    <td align='left' width='150'>"	+this.nfn_nvl(this.ds_toolRequestMailList.getColumn(rowPos, "REQUESTCOMMENT"),		"&nbsp;")+"</td>"; //의뢰사유
        			resultHtml += "    <td align='center'>"	+this.nfn_nvl(this.ds_toolRequestMailList.getColumn(rowPos, "REQUESTDATE"),			"&nbsp;")+"</td>"; //의뢰일자
        			resultHtml += "    <td align='center'>"	+this.nfn_nvl(this.ds_toolRequestMailList.getColumn(rowPos, "DELIVERYDATE"),		"&nbsp;")+"</td>"; //납기일자
        			resultHtml += "    <td align='center'>"	+this.nfn_nvl(this.ds_toolRequestMailList.getColumn(rowPos, "VENDORNAME"),			"&nbsp;")+"</td>"; //제작처
        			resultHtml += "    <td align='center'>"	+this.nfn_nvl(this.ds_toolRequestMailList.getColumn(rowPos, "RECEIPTAREANAME"),		"&nbsp;")+"</td>"; //작업처
        			resultHtml += "    <td align='center'>"	+this.nfn_nvl(this.ds_toolRequestMailList.getColumn(rowPos, "REQUESTUSERNAME"),		"&nbsp;")+"</td>"; //의뢰자
        			resultHtml += "  </tr>";
        		}
        		resultHtml += "</table>";
        	}else{
        		resultHtml = "";
        	}
        	return resultHtml;
        }

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
        		//oArg.arg_rtnCols = "USER_ID|USER_NM|EMAIL_ADDR|DEPT_NM|JIKWI_CD|AUTH_NM";
        		oArg.arg_rtnCols = "USER_ID|USER_NM|EMAIL_ADDR|DEPT_NM|JIKWI_NM";
        		oArg.arg_paramCols = "";
        		oArg.arg_paramValues = "";
        		oArg.arg_searchStr = "";

        		this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"");
        	}
        };

        this.TOM00102P_ontimer = function(obj,e)
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
            this.addEventHandler("ontimer",this.TOM00102P_ontimer,this);
            this.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.btn_testMail.addEventHandler("onclick",this.fn_sentMail,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_close00.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_addRow_ds_receiver.addEventHandler("onclick",this.btn_addRow_ds_receiver_onclick,this);
            this.grd_receiver.addEventHandler("onexpandup",this.grd_receiver_onexpandup,this);
        };
        this.loadIncludeScript("TOM00102P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
