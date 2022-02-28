(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMSY02501P");
            this.set_titletext("공지사항 상세");
            this.set_cssclass("form_PopupBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(540,565);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmdNotice", this);
            obj._setContents("<ColumnInfo><Column id=\"NOTICE_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"COMMENTS\" type=\"STRING\" size=\"256\"/><Column id=\"CREATED_BY\" type=\"STRING\" size=\"256\"/><Column id=\"CREATION_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"LAST_UPDATED_BY\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATE_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"CFM_CNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"WRITER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"NOTICE_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ALL_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmdNoticeJob", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"JOB_GUBUN_CD\" type=\"STRING\" size=\"30\"/><Column id=\"JOB_GUBUN_NM\" type=\"STRING\" size=\"100\"/><Column id=\"NOTICE_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ORDR\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_file", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DRM_APY_YN\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"DNLD_CNT\" type=\"string\" size=\"16\"/><Column id=\"LAST_UPDATE_DATE\" type=\"string\" size=\"32\"/><Column id=\"CREATION_DATE\" type=\"datetime\" size=\"17\"/><Column id=\"RM\" type=\"string\" size=\"32\"/><Column id=\"LAST_UPDATE_LOGIN\" type=\"string\" size=\"32\"/><Column id=\"KEEP_END_DATEC\" type=\"string\" size=\"32\"/><Column id=\"OC_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"SVR_SAVE_COURS\" type=\"string\" size=\"32\"/><Column id=\"CREATED_BY\" type=\"string\" size=\"16\"/><Column id=\"FULL_SAVE_COURS\" type=\"string\" size=\"32\"/><Column id=\"KEEP_START_DATEC\" type=\"string\" size=\"32\"/><Column id=\"LAST_UPDATED_BY\" type=\"string\" size=\"32\"/><Column id=\"FILE_SIZE\" type=\"string\" size=\"16\"/><Column id=\"JOB_SYS_CD\" type=\"string\" size=\"32\"/><Column id=\"ATCH_FILE_GUID\" type=\"string\" size=\"32\"/><Column id=\"FILE_EXT\" type=\"string\" size=\"32\"/><Column id=\"ATCH_FILE_ID\" type=\"string\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new FileDownload("FileDownload00","105",null,"142","45",null,"117",null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_text("FileDownload00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,null,"60","21","15","13",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("닫기");
            obj.set_cssclass("btn_DR_GridCancel");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","0","0","15","376",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","525","0","15","376",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","15","3","510","15",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","15","18","164","16",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("공지사항 상세");
            obj.set_cssclass("sta_WF_popTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","15","33","510","15",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static46","15","48","510","2",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_cssclass("sta_WF_LabelLine");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","15",null,null,"12","15","1",null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("12");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","516","0","24","23",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_POP_Close");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_attchFile","102",null,null,"126","15","50",null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_binddataset("ds_file");
            obj.set_autofittype("col");
            obj.set_nodatatext("등록된 첨부파일이 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"344\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"90\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"29\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"파일명\"/><Cell col=\"2\" text=\"파일크기\"/><Cell col=\"3\" text=\"등록일자\"/><Cell col=\"4\" text=\"비고\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:OC_FILE_NM\"/><Cell col=\"2\" text=\"bind:FILE_SIZE\"/><Cell col=\"3\" text=\"bind:CREATION_DATE\"/><Cell col=\"4\" text=\"bind:RM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","10",null,"86","114",null,"55",null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","16","111","80","185",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_tooltiptext("공지사항 내용");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","16","81","80","31",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_tooltiptext("업무시스템명");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","15","301","72","18",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_text("공지시작일");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_noticeStrtDate","18.89%","300",null,"19","58.52%",null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","304","301","72","18",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_text("공지종료일");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_noticeEndDate","70.74%","300",null,"19","6.67%",null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cho_jobCd","102","56","110","21",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_codecolumn("C,CMD_JOB_CD,SEL,Y,N");
            obj.set_enable("false");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","40","51","56","31",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_text("업무");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","296","323",null,"31","164",null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_text("등록 일자");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_tooltiptext("등록 일자");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_creationDate",null,"323","122","31","36",null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_cssclass("sta_WF_InputBg");
            obj.set_border("1px solid rgba(221,221,221,1), 1px solid rgba(204,204,204,1)");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","16","323","80","31",null,null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_text("등록자");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_tooltiptext("등록 일자");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_wirterNm","102","323","122","31",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_cssclass("sta_WF_InputBg");
            obj.set_border("1px solid rgba(221,221,221,1), 1px solid rgba(204,204,204,1)");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_lastUpdatDate",null,"353","122","31","36",null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_cssclass("sta_WF_InputBg");
            obj.set_border("1px solid rgba(221,221,221,1), 1px solid rgba(204,204,204,1)");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","296","353",null,"31","164",null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_text("수정 일자");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_tooltiptext("수정 일자");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_updaterNm","102","353","122","31",null,null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_cssclass("sta_WF_InputBg");
            obj.set_border("1px solid rgba(221,221,221,1), 1px solid rgba(204,204,204,1)");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","16","353","80","31",null,null,null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_text("수정자");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_tooltiptext("등록 일자");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_title","102","81",null,"21","15",null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_imemode("hangul");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_comments","102","106",null,"190","15",null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_imemode("hangul");
            obj.set_maxlength("300");
            obj.set_tooltiptype("hover");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_padding("10px 10px 10px 10px");
            obj.set_textAlign("left");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",540,565,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","cal_noticeStrtDate","value","ds_cmdNotice","NOTICE_STRT_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cal_noticeEndDate","value","ds_cmdNotice","NOTICE_END_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cho_jobCd","value","ds_cmdNotice","JOB_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","sta_creationDate","text","ds_cmdNotice","CREATION_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","sta_wirterNm","text","ds_cmdNotice","WRITER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","sta_lastUpdatDate","text","ds_cmdNotice","LAST_UPDATE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","sta_updaterNm","text","ds_cmdNotice","UPDATER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edt_title","value","ds_cmdNotice","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","txa_comments","value","ds_cmdNotice","COMMENTS");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CMSY02501P.xfdl", function() {
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
        var save = false;
        this.fv_upUrl = nexacro.getEnvironment().services["svcurl"].url;

        /**************************************************************************
         * 3. FORM 정의
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.fn_search();
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
        	this.ds_search.setColumn(0, "NOTICE_ID", this.parent.arg_noticeId);
        	// this.ds_search.setColumn(0,"ALL_YN",this.parent.arg_allYn);

        	var sSvcID = "selectCmdNoticeList";
        	var sController = "/cmsy02400/selectCmdNoticeList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_cmdNotice=output ds_file=ds_file";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectCmdNoticeList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID = "saveCmdNoticeCfm";
        	var sController = "/cmsy02400/saveCmdNoticeCfm.do";
        	var sInDatasets = "INPUT=ds_cmdNotice";
        	var sOutDatasets = "";

        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "saveCmdNoticeCfm");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 삭제
         */
        this.fn_delete = function (obj, e)
        {
        	var bOK = nexacro.getApplication().confirm("삭제하시겠습니까?");
        	if (bOK == false)
        	{
        		return;
        	}

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID = "deleteCmdNotice";
        	var sController = "/cmsy02400/deleteCmdNotice.do";
        	var sInDatasets = "INPUT=ds_cmdNotice";
        	var sOutDatasets = "";

        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "deleteCmdNotice");

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
        			this.gfn_Message("SMCMM0005", trId + errMsg, "error", "ok");
        		}
        		else
        		{
        			this.gfn_Message("SMCMM0051", trId + errMsg, "error", "ok");
        		}
        	}
        	else
        	{
        		if (trId == "selectCmdNoticeJobList")
        		{
        			var jobs = "";
        			for (var i = 0; i < this.ds_cmdNoticeJob.rowcount; i++)
        			{
        				if (this.ds_cmdNoticeJob.getColumn(i, "CHK") == "1")
        				{
        					jobs += (i == 0 ? "" : ",") + this.ds_cmdNoticeJob.getColumn(i, "VALUE");
        				}
        			}
        			this.sta_job.set_text(jobs);
        		}
        		else if (trId == "selectCmdNoticeList")
        		{
        			// this.fn_save();
        		}
        		else if (trId == "deleteCmdNotice")
        		{
        			save = true;
        			this.gfn_Message("IMCMM0037", null, "info", "ok"); //삭제가 완료되었습니다.
        			this.fn_search();
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

        this.grd_attchFile_oncelldbclick = function (obj, e)
        {
        	var atchFileId = this.ds_file.getColumn(e.row, "ATCH_FILE_ID");
        	var seqNo = this.ds_file.getColumn(e.row, "SEQ_NO");

        	/*dnUrl 정보 중 STM 혹은 FCM 자신의 프로젝트에 맞는 값 선택 */
        	var dnUrl = this.fv_upUrl + "/comm/dnFile/" + atchFileId + "/" + seqNo + ".do";
        	trace("dnUrl :" + dnUrl);
        	this.FileDownload00.set_downloadurl(dnUrl);
        	var bSucc = this.FileDownload00.download();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.FileDownload00.addEventHandler("onclick",this.FileDownload00_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.Button00.addEventHandler("onclick",this.btn_close_onclick,this);
            this.grd_attchFile.addEventHandler("oncelldblclick",this.grd_attchFile_oncelldbclick,this);
            this.cho_jobCd.addEventHandler("onmousemove",this.fn_jobSysCboToolTip,this);
            this.sta_creationDate.addEventHandler("onclick",this.Static10_onclick,this);
            this.sta_creationDate.addEventHandler("onmousemove",this.fn_creatDateToolTip,this);
            this.sta_wirterNm.addEventHandler("onclick",this.Static10_onclick,this);
            this.sta_wirterNm.addEventHandler("onmousemove",this.fn_creatDateToolTip,this);
            this.sta_lastUpdatDate.addEventHandler("onclick",this.Static10_onclick,this);
            this.sta_lastUpdatDate.addEventHandler("onmousemove",this.fn_lastUpdateToolTip,this);
            this.sta_updaterNm.addEventHandler("onclick",this.Static10_onclick,this);
            this.sta_updaterNm.addEventHandler("onmousemove",this.fn_creatDateToolTip,this);
        };
        this.loadIncludeScript("CMSY02501P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
