(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMSY02401P");
            this.set_titletext("공지사항 등록");
            this.set_cssclass("form_PopupBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(540,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"NOTICE_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LOOKUP_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmdNotice", this);
            obj._setContents("<ColumnInfo><Column id=\"NOTICE_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"COMMENTS\" type=\"STRING\" size=\"256\"/><Column id=\"CREATED_BY\" type=\"STRING\" size=\"256\"/><Column id=\"CREATION_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"LAST_UPDATED_BY\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATE_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"CFM_CNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"WRITER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NOTICE_STRT_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"NOTICE_END_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"JOB_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_result", this);
            obj._setContents("<ColumnInfo><Column id=\"NOTICE_ID\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_file", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"JOB_SYS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_EXT\" type=\"STRING\" size=\"256\"/><Column id=\"OC_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_GUID\" type=\"STRING\" size=\"256\"/><Column id=\"SVR_SAVE_COURS\" type=\"STRING\" size=\"256\"/><Column id=\"DRM_APY_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","94","326",null,"31","15",null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_cssclass("sta_WF_InputBg");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","94","49","431","28",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_cssclass("sta_WF_InputBg");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","31","74","56","221",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_tooltiptext("메시지 내용");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,null,"60","21","144","14",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("저장");
            obj.set_cssclass("btn_DR_GridSave");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reload",null,null,"60","21","79","14",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("초기화");
            obj.set_cssclass("btn_DR_GridReset");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","31","77","56","31",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_tooltiptext("제목");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","0","0","15","304",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","15","3","510","15",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","525","0","15","304",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","15","18","148","16",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("공지사항 등록");
            obj.set_cssclass("sta_WF_popTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","15","33","510","15",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static74","25","49","2","182",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("2");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","94","106",null,"221","15",null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_InputBg");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static35","94","76",null,"31","15",null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_cssclass("sta_WF_InputBg");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static72","95","50","45","181",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","135","162","55","4",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","519","50","5","181",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_comments","100","111",null,"211","21",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tooltiptype("hover");
            obj.set_maxlength("300");
            obj.set_imemode("hangul");
            obj.set_cssclass("essential");
            obj.set_padding("10px 10px 10px 10px");
            obj.set_textAlign("left");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,null,"60","21","15","14",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("닫기");
            obj.set_cssclass("btn_DR_GridCancel");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"0","24","23","0",null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_cssclass("btn_POP_Close");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("Static46","15","48","510","2",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_LabelLine");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_title","100","81",null,"21","21",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_imemode("hangul");
            obj.set_cssclass("essential");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","15",null,"72","66",null,"88",null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","94",null,null,"162","15","42",null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_cssclass("sta_WF_InputBg");
            this.addChild(obj.name, obj);

            obj = new Div("div_file","99",null,null,"152","21","47",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_url("cuslib::com_file.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","15",null,"72","18",null,"209",null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_text("공지시작일");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","263",null,"72","18",null,"209",null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_text("공지종료일");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_noticeStrtDate","18.89%","332",null,"19","58.52%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("essential");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_noticeEndDate","64.44%","332",null,"19","12.96%",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("essential");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","31","49","56","31",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_text("업무");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cho_jobCd","100","52","110","21",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_codecolumn("C,CMD_JOB_CD,SEL,Y,Y");
            obj.set_cssclass("essential");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",540,560,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item10","edt_title","value","ds_cmdNotice","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","txa_comments","value","ds_cmdNotice","COMMENTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cal_noticeStrtDate","value","ds_cmdNotice","NOTICE_STRT_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cal_noticeEndDate","value","ds_cmdNotice","NOTICE_END_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cho_jobCd","value","ds_cmdNotice","JOB_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cuslib::com_file.xfdl");
        };
        
        // User Script
        this.registerScript("CMSY02401P.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 공지사항
         * 파일명 		: cmsy02400.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2017.03.18
         *
         * 설  명		: 공지사항
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2017.09.16	진성하   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include(필수)
         ***************************************************************************/
        // include "lib::comLib.xjs";
        // include "cuslib::nbdfComLib.xjs";


        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.fv_currDate;
        this.fv_noticeId;
        var save = false;

        this.fv_nFileCnt = 3;
        this.fv_nFileDn = false;

        /**************************************************************************
         * 3. FORM 정의
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.ds_cmdNotice.addRow();

        	this.cal_noticeStrtDate.set_value(this.gfn_today());
        	this.cal_noticeEndDate.set_value(this.gfn_today());
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_cmdNotice.clearData();

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "NOTICE_ID", this.fv_noticeId);

        	var sSvcID = "selectCmdNoticeList";
        	var sController = "/cmsy02400/selectCmdNoticeList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_cmdNotice=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectCmdNoticeList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	var bOK = nexacro.getApplication().confirm("저장하시겠습니까?");
        	if (bOK == false)
        	{
        		return;
        	}

        	var component = this;
        	var strColIdList = "cho_jobCd,edt_title,txa_comments,cal_noticeStrtDate,cal_noticeEndDate";
        	var strColNmList = "업무,제목,내용,공지시작일,공지종료일";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        	if (rtn == false)
        	{
        		return;
        	}

        	if (!this.gfn_dsIsUpdated(this.ds_cmdNotice))
        	{
        		this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}

        	if (this.div_file.ds_file.getRowCount() > 0)
        	{
        		// this.div_file.fn_upload("CMD");
        		this.div_file.fn_upload("CMM/IA");
        	}
        	else
        	{
        		/* 파일 업로드를 안했을 경우 */
        		this.fn_insert();
        	}
        };

        /*
         * 기능 : 삭제
         */
        this.fn_delete = function (obj, e)
        {
        };

        this.fn_insert = function ()
        {
        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID = "saveCmdNotice";
        	var sController = "/cmsy02400/saveCmdNotice.do";
        	var sInDatasets = "INPUT=ds_cmdNotice:U ds_file=ds_file";
        	var sOutDatasets = "ds_result=output";

        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "saveCmdNotice");
        	// sArgs += this.gfn_setParam("ATCH_SRC_KEY", this.ds_cmdNotice.getColumn(this.ds_cmdNotice.rowposition,"NOTICE_ID"));
        	sArgs += this.gfn_setParam("ATCH_FILE_CNT", this.ds_file.getRowCount());

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
        		if (trId == "saveCmdNotice")
        		{
        			save = true;
        			this.fv_noticeId = this.ds_result.getColumn(0, "NOTICE_ID");
        			this.gfn_Message("SuccessSave", null, "info", "ok"); //this.fn_search();
        			this.btn_close_onclick();
        		}
        		else if (trId == "completeFileUpload")
        		{
        			this.ds_file.assign(this.div_file.ds_file);
        			this.fn_insert();
        		}
        	}
        };

        /**************************************************************************
         * 6. 팝업 시작
         **************************************************************************/



        /**************************************************************************
         * 7. 기타 함수 시작
         **************************************************************************/

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.btn_reload_onclick = function (obj, e)
        {
        	this.reload();
        };

        this.btn_close_onclick = function (obj, e)
        {
        	if (save)
        	{
        		this.gfn_popupClose("RELOAD");
        	}
        	else
        	{
        		this.gfn_popupClose("CLOSE");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.btn_reload.addEventHandler("onclick",this.btn_reload_onclick,this);
            this.txa_comments.addEventHandler("oneditclick",this.TextArea00_oneditclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.Button00.addEventHandler("onclick",this.btn_close_onclick,this);
            this.cho_jobCd.addEventHandler("onmousemove",this.fn_jobSysCboToolTip,this);
        };
        this.loadIncludeScript("CMSY02401P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
