(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("com_file_down_b4");
            this.set_titletext("File Down");
            if (Form == this.constructor)
            {
                this._setFormPosition(827,355);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"JOB_SYS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_SRC_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_TY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TABLE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_file", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_SYS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_EXT\" type=\"STRING\" size=\"256\"/><Column id=\"OC_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_GUID\" type=\"STRING\" size=\"256\"/><Column id=\"SVR_SAVE_COURS\" type=\"STRING\" size=\"256\"/><Column id=\"DRM_APY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DNLD_CNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"KEEP_START_DATEC\" type=\"STRING\" size=\"256\"/><Column id=\"KEEP_END_DATEC\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CREATION_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATED_BY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LAST_UPDATE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATE_LOGIN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TABLE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESC\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_SRC_KEY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_list","0","34",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_file");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_nodatatext("파일이 없습니다.");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"207\"/><Column size=\"110\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"66\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO\" autosizecol=\"default\"/><Cell col=\"1\" text=\"파일명\"/><Cell col=\"2\" text=\"파일크기\"/><Cell col=\"3\" text=\"저장경로\"/><Cell col=\"4\" text=\"저장파일명\"/><Cell col=\"5\"/></Band><Band id=\"body\"><Cell text=\"expr:rowidx + 1\" textAlign=\"center\" autosizecol=\"none\"/><Cell col=\"1\" text=\"bind:OC_FILE_NM\" autosizecol=\"limitmin\" expandshow=\"hide\" expandsize=\"16\"/><Cell col=\"2\" text=\"bind:FILE_SIZE\" autosizecol=\"limitmin\"/><Cell col=\"3\" text=\"bind:SVR_SAVE_COURS\" autosizecol=\"none\"/><Cell col=\"4\" text=\"bind:ATCH_FILE_GUID\" autosizecol=\"none\"/><Cell col=\"5\" displaytype=\"buttoncontrol\" edittype=\"none\" text=\"다운로드\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload00","727","368","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("FileDownload00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt","105","0",null,"34","620",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","0","0","95","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("파일 다운로드");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",827,355,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("com_file_down_b4.xfdl", function() {
        /***********************************************************************
         * 01. 업무구분 : 파일 다운로드 콤포넌트
         * 02. 화면명   : com_file_down_b4.xfdl
         * 03. 화면설명 : 파일 다운로드
         * 04. 작성일   : 2022-02-18
         * 05. 작성자   : Built1
         * 06. 수정이력 :
         ***********************************************************************
         *     수정일     작성자   내용
         ***********************************************************************
         *
         ***********************************************************************
         */

        /***********************************************************************
         * Script Include
         ************************************************************************/


        /***********************************************************************
         * 화면 변수 선언부
         ************************************************************************/
        this.jobSysCd = "";
        this.atchSrcKey = "";
        this.atchTyCd = "";
        this.tableName = "";

        this.fv_fileUploadHeight = 0;
        this.fv_upUrl = nexacro.getEnvironment().services["svcurl"].url;
        this.fv_filePath = "upload"; //파일 Up/Down 서버경로

        /***********************************************************************
         * Event 처리 부분
         ***********************************************************************/
        this.form_onload = function (obj,e)
        {
        	// FileUpload 콤포넌트 버튼 높이 setting
        	// this.fv_fileUploadHeight = this.div_fup.fup_AttachedFile.height;
        	this.nfn_formInit(obj);

        	//그리드의 NO Column Size Fix
        	this.grd_list.setFormatColProperty( 0 ,"Style","Null");
        	var bAct = this.grd_list.setFormatColProperty( 0 ,"band", "left");
        	this.grd_list.setFormatColProperty( 5 ,"Style","Null");
        	var bAct = this.grd_list.setFormatColProperty( 5 ,"band", "right");
        };


        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "JOB_SYS_CD", this.jobSysCd);
        	this.ds_search.setColumn(0, "ATCH_SRC_KEY", this.atchSrcKey);
        	this.ds_search.setColumn(0, "ATCH_TY_CD", this.atchTyCd);
        	this.ds_search.setColumn(0, "TABLE_NAME", this.tableName);
        	var sSvcID = "selectAtchFileList";
        	var sController = "/cmsa01200/selectAtchFileList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_file=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectAtchFileList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /************************************************************************
         * TRANSACTION, CALLBACK 영역
         ************************************************************************/
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
        				this.sta_cnt.set_text('Count : <fc v="#f31d24">'+this.nfn_numberWithCommas(this.ds_file.rowcount)+'</fc>');
        				break;
        			default:
        				break;
        		}
        	}
        };


        /*-------------------------------------------------------------------------------
         * 설명      : 첨부 파일 다운로드
         *------------------------------------------------------------------------------*/
        this.grd_list_oncelldblclick = function (obj, e)
        {
        	var atchFileGuid = this.ds_file.getColumn(this.ds_file.rowposition, "ATCH_FILE_GUID");
        	var dnUrl = this.fv_upUrl + "/comm/downFile/" + atchFileGuid + ".do";
        	this.FileDownload00.set_downloadurl(dnUrl);
        	var bSucc = this.FileDownload00.download();
        	trace("bSucc >> " + bSucc);
        };

        this.grd_list_oncellclick = function(obj,e)
        {
        	if (e.cell == 5)
        	{
        		var atchFileGuid = this.ds_file.getColumn(this.ds_file.rowposition, "ATCH_FILE_GUID");
        		var dnUrl = this.fv_upUrl + "/comm/downFile/" + atchFileGuid + ".do";
        		this.FileDownload00.set_downloadurl(dnUrl);
        		var bSucc = this.FileDownload00.download();
        		trace("bSucc >> " + bSucc);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
        };
        this.loadIncludeScript("com_file_down_b4.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
