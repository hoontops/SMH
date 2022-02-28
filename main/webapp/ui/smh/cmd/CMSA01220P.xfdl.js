(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMSA01220P");
            this.set_titletext("파일업로드");
            this.set_cssclass("form_PopupBg");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(642,291);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_file","1.87%","5",null,"244","1.71%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_url("common::com_file_b4.xfdl");
            obj.set_border("0px solid rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sel",null,"254","70","26","76",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btn_pop_yes");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"254","60","26","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.set_cssclass("btn_pop_no");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","1.71%","241",null,"15","1.56%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","1.87%","277",null,"12","1.56%",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("12");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0%","0",null,"284","98.13%",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","98.29%","0",null,"284","0%",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close00",null,"0","25","25","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",642,291,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_file_b4.xfdl");
        };
        
        // User Script
        this.registerScript("CMSA01220P.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 파일 업로드 관리
         * 파일명 		: cmsa01200P.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2017.03.18
         *
         * 설  명		: 파일 업로드 다운로드 기능 제공
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2017.03.16	진성하   	최초작성
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
        this.SUCC_YN;
        this.fv_nFileCnt;
        /**************************************************************************
         * 3. FORM 정의
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.div_file.form.jobSysCd = this.parent.arg_jobSysCd;
        	this.div_file.form.atchSrcKey = this.parent.arg_atchSrcKey;
        	this.div_file.form.fileExts = this.parent.arg_fileExts;	//허용 파일 확장자 [".png", ".jpg"]
        	// this.div_file.form.atchTyCd = this.parent.arg_atchTyCd;
        	this.div_file.form.subDir = this.parent.arg_subDir;
        	this.div_file.form.tableName = this.parent.arg_tableName;
        	this.div_file.form.desc = this.parent.arg_desc;
        	this.fv_nFileCnt = this.parent.arg_fileCnt;
        	trace("jobSysCd-->" + this.parent.arg_jobSysCd);
        	trace("atchSrcKey-->" + this.parent.arg_atchSrcKey);
        	trace("subDir-->"+this.parent.arg_subDir);
        	trace("tableName-->" + this.parent.arg_tableName);
        	trace("desc-->" + this.parent.arg_desc);
        	trace("fileCnt-->" + this.parent.arg_fileCnt);

        	this.nfn_formInit(obj);

        	this.div_file.form.fn_search();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/

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
        			this.gfn_Message("EMFCM0001", trId + errMsg, "error", "ok");
        		}
        	}
        	else
        	{
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
        this.btn_upload03_onclick = function (obj, e)
        {
        	this.div_file.form.fn_upload();
        };


        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        /**
         * 5.1 (필수) Transaction 요청 처리 함수
         */

        /**
         * 5.2 (필수) CallBack 처리
         */
        /* callBack함수(strSvcId - 서비스 아이디, nErrorCode - 에러코드, strErrorMsg - 에러메시지) */
        // 조회 후 호출되는 함수
        this.fn_callBack = function (strSvcId, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode < 0)
        	{
        		return this.gfn_alert(strErrorMsg);
        	}
        	else
        	{
        		switch (strSvcId)
        		{
        			case "search":
        				break;
        			case "completeFileUpload":
        				trace(this.div_file.form.ds_file.saveXML());
        				break;
        			default:
        				break;
        		}
        	}
        };

        this.btn_close_onclick = function (obj, e)
        {
        	var rtnArray = new Array();
        	// var orgnCnt = this.div_file.form.fileCnt;
        	// var currCnt = this.div_file.form.ds_file.getCaseCount("ATCH_FILE_GUID != null && ATCH_FILE_GUID != ''");
        	// trace("ATCH_FILE_GUID-->"+this.div_file.form.ds_file.getColumn(0,"ATCH_FILE_GUID"));
        	trace("fileChanged-->" + this.div_file.form.fileChanged);
        	var fileChanged = this.div_file.form.fileChanged;
        	if (fileChanged == "N")
        	{
        		trace("no changed");
        		rtnArray = null;
        	}
        	else
        	{
        		rtnArray[0] = this.div_file.form.ds_file.getCaseCount("ATCH_FILE_GUID != null && ATCH_FILE_GUID != ''");
        		rtnArray[1] = this.div_file.form.ds_file.getColumn(0, "FULL_SAVE_COURS");
        		rtnArray[2] = this.div_file.form.ds_file.getColumn(0, "FILE_EXT");
        		rtnArray[3] = this.SUCC_YN;
        		rtnArray[4] = this.div_file.form.ds_file.getColumn(0, "ATCH_FILE_GUID");
        		rtnArray[5] = this.div_file.form.ds_file.getColumn(0, "ATCH_FILE_ID");
        	}
        	trace("rtnArray-->"+rtnArray);
        	//2021.05.19 Add
        	if (!this.nfn_isNull(this.parent.arg_copyDataset))
        	{
        		var ds = eval("this.opener."+this.parent.arg_copyDataset);
        		ds.copyData(this.div_file.form.ds_file);
        	}
        	this.opener.fv_rtnValue = rtnArray;
        	this.close();
        };

        this.btn_sel_onclick = function (obj, e)
        {
        	this.div_file.form.sel = "Y";
        	this.div_file.form.fn_upload();
        /*
        	var rtnArray = new Array();
        	trace(this.div_file.form.ds_file.saveXML());
        	rtnArray[0] = this.div_file.form.ds_file.getCaseCount("ATCH_FILE_GUID != null && ATCH_FILE_GUID != ''");
        	rtnArray[1] = this.div_file.form.ds_file.getColumn(0, "FULL_SAVE_COURS");
        	rtnArray[2] = this.div_file.form.ds_file.getColumn(0, "FILE_EXT");
        	rtnArray[3] = this.SUCC_YN;
        	rtnArray[4] = this.div_file.form.ds_file.getColumn(0, "ATCH_FILE_ID");
        	this.opener.fv_rtnValue = rtnArray;
        	this.close();
        */
        };

        this.btn_fileDownLoad_onclick = function (obj, e)
        {
        	this.div_file.form.grd_list_oncelldblclick();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_sel.addEventHandler("onclick",this.btn_sel_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_close00.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("CMSA01220P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
