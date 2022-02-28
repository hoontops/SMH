(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMSA01230P");
            this.set_titletext("파일 업로드/다운로드[K]");
            this.set_cssclass("form_PopupBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(642,418);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_file","1.87%","5",null,"376","1.71%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_url("common::com_file_upload_download_b1.xfdl");
            obj.set_border("0px solid rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sel",null,"257","40","21","-48",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"383","60","21","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("닫기");
            obj.set_cssclass("btn_DR_GridCancel");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","2.34%","9",null,"31","61.06%",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("파일 업로드/다운로드");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","1.87%","36",null,"10","64.49%",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","1.87%","3",null,"15","64.49%",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","1.71%","368",null,"15","1.56%",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","1.87%","404",null,"12","1.56%",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("12");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0%","0",null,"284","98.13%",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","98.29%","0",null,"284","0%",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","96.11%","0",null,"23","0%",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_POP_Close");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",642,418,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_file_upload_download_b1.xfdl");
        };
        
        // User Script
        this.registerScript("CMSA01230P.xfdl", function() {
        /***************************************************************************************
         * 시스템명    	: IFC MES시스템
         * 업무명 		: 파일 업로드/업로드 관리
         * 파일명 		: cmsa01200P.xfdl
         * 작성자 		: Kang Jeong GI
         * 작성일 		: 2017.06.22
         *
         * 설  명		: 파일 업로드 다운로드 기능
         *---------------------------------------------------------------------------------------
         * 변경일		변경자			    변경내역
         *---------------------------------------------------------------------------------------
         * 2017.06.22	Kang Jeong GI   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/


        /**************************************************************************
         * 1. FORM 변수 선언 영역
         ***************************************************************************/
        this.SUCC_YN; //파일성공여부

        /**************************************************************************
         * 2. FORM 정의
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.div_file.jobSysCd = this.parent.arg_jobSysCd; //업무구분코드
        	this.div_file.subDir = this.parent.arg_subDir; //업무구분상세코드
        	this.div_file.atchFileId = this.parent.arg_atchFileId; //첨부파일ID
        	this.div_file.atchTyCd = this.parent.arg_atchTyCd; //테이블명
        	this.div_file.descr = this.parent.arg_descr; //파일 업로드/다운로드 설명
        	this.div_file.maxFileCnt = this.parent.arg_maxFileCnt; //첨부파일 최대 갯수

        	trace("jobSysCd-->" + this.parent.arg_jobSysCd);
        	trace("subDir-->" + this.parent.arg_subDir);
        	trace("atchFileId-->" + this.parent.arg_atchFileId);
        	trace("atchTyCd-->" + this.parent.arg_atchTyCd);
        	trace("descr-->" + this.parent.arg_descr);
        	trace("maxFileCnt-->" + this.parent.arg_maxFileCnt);

        	this.nfn_formInit(obj);

        	this.div_file.fn_search();
        };


        /**************************************************************************
         * 3. TRANSACTION, CALLBACK 영역
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
        };


        /**************************************************************************
         * 4. 이벤트
         ***************************************************************************/
        this.btn_upload03_onclick = function (obj, e)
        {
        	this.div_file.fn_upload();
        };


        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
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
        			case "selectAtchFileList":
        				// if(this.div_file.ds_file.rowcount == 0) this.gfn_Message("IMCMM0028", null, "info","ok");
        				break;
        			case "completeFileUpload":
        				// trace(this.div_file.ds_file.saveXML());
        				break;
        			case "deleteAtchFile":
        				break;
        			default:
        				break;
        		}
        	}
        };


        // 닫기 버튼
        this.fn_close = function (obj, e)
        {
        	var rtnArray = new Array();
        	var fileChanged = this.div_file.fileChanged;
        	if (fileChanged == "N")
        	{
        		rtnArray = null;
        	}
        	else
        	{
        		rtnArray[0] = this.div_file.ds_file.getCaseCount("ATCH_FILE_GUID != null && ATCH_FILE_GUID != ''");
        		rtnArray[1] = this.div_file.ds_file.getColumn(0, "FULL_SAVE_COURS");
        		rtnArray[2] = this.div_file.ds_file.getColumn(0, "FILE_EXT");
        		rtnArray[3] = this.SUCC_YN;
        		rtnArray[4] = this.gfn_blankStr(this.div_file.ds_file.getColumn(0, "ATCH_FILE_ID"));
        	}
        	this.opener.fv_rtnValue = rtnArray;
        	this.close();
        };


        // 확인 버튼
        this.fn_sel = function (obj, e)
        {
        	var rtnArray = new Array();
        	rtnArray[0] = this.div_file.ds_file.getCaseCount("ATCH_FILE_GUID != null && ATCH_FILE_GUID != ''");
        	rtnArray[1] = this.div_file.ds_file.getColumn(0, "FULL_SAVE_COURS");
        	rtnArray[2] = this.div_file.ds_file.getColumn(0, "FILE_EXT");
        	rtnArray[3] = this.SUCC_YN;
        	rtnArray[4] = this.gfn_blankStr(this.div_file.ds_file.getColumn(0, "ATCH_FILE_ID"));
        	this.opener.fv_rtnValue = rtnArray;
        	this.close();
        };


        // 파일 다운로드 버튼
        this.fn_fileDownLoad = function (obj, e)
        {
        	this.div_file.grd_list_oncelldblclick();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_sel.addEventHandler("onclick",this.fn_sel,this);
            this.btn_close.addEventHandler("onclick",this.fn_close,this);
            this.Button00.addEventHandler("onclick",this.fn_close,this);
        };
        this.loadIncludeScript("CMSA01230P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
