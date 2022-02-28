(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("com_file_down_b1");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"207\"/><Column size=\"0\"/><Column size=\"87\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"파일명\"/><Cell col=\"2\" text=\"input Time\"/><Cell col=\"3\" text=\"파일크기(KB)\"/><Cell col=\"4\" text=\"저장경로\"/><Cell col=\"5\" text=\"저장파일명\"/></Band><Band id=\"body\"><Cell text=\"expr:rowidx + 1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:OC_FILE_NM\"/><Cell col=\"2\" text=\"bind:inputTime\"/><Cell col=\"3\" displaytype=\"number\" text=\"expr:comp.parent.gfn_isNull(FILE_SIZE) ? &quot;&quot;:nexacro.round( (FILE_SIZE / 1024), 2 )\" mask=\"!#,##0.#0\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:SVR_SAVE_COURS\"/><Cell col=\"5\" text=\"bind:ATCH_FILE_GUID\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload00","727","368","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("FileDownload00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt","105","0",null,"34","620",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("<fc v=\"#f31d24\">0</fc><fc v=\"#999999\">건</fc>");
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

            obj = new Button("btn_fileDownLoad",null,"6","98","24","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("파일다운로드");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_tooltiptext("FILEDOWNLOADTITLE");
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
        this.registerScript("com_file_down_b2.xfdl", function() {
        /***********************************************************************
         * 01. 업무구분 : 파일 업/다운로드 콤포넌트
         * 02. 화면명   : fileUpDown.xfdl
         * 03. 화면설명 :
         * 04. 작성일   :
         * 05. 작성자   :
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
        // include "lib::comLib.xjs";

        /***********************************************************************
         * 화면 변수 선언부
         ************************************************************************/
        this.strPostId = "";

        this.jobSysCd = "";
        this.atchSrcKey = "";
        this.atchTyCd = "";
        this.tableName = "";

        this.fv_fileUploadHeight = 0;
        this.fv_upUrl = nexacro.getEnvironment().services["svcurl"].url;
        this.fv_uploadDo = "/comm/uploadFile/" + this.parent.parent.arg_jobSysCd + ".do"; //업로드 서비스명
        this.fv_filePath = "upload"; //파일 Up/Down 서버경로
        this.fv_fileDelCase = "N"; //(option)파일 삭제 유형 : 'N' row 단위 삭제, 'C' 그리드 checkbox 선택 삭제 유형

        /***********************************************************************
         * Event 처리 부분
         ***********************************************************************/
        this.form_onload = function (obj,e)
        {
        	// FileUpload 콤포넌트 버튼 높이 setting
        	// this.fv_fileUploadHeight = this.div_fup.fup_AttachedFile.height;
        	this.nfn_formInit(obj);
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
        				this.sta_cnt.set_text('<fc v="#f31d24">'+this.nfn_numberWithCommas(this.ds_file.rowcount)+'</fc><fc v="#999999">건</fc>');
        				break;
        			default:
        				break;
        		}
        	}
        };

        /************************************************************************************************
         * 사용자 FUNCTION 영역 (필수)
         ************************************************************************************************/
        /*------------------------------------------------------------------------------
         * 기   능:		파일업/다운로드 초기화
         * 인   수:		path - 파일업/다운로드 경로(필수)
         delCase - 파일 삭제 유형 : 'N' row 단위 삭제, 'C' 그리드 checkbox 선택 삭제 유형(옵션)
         * 리   턴: 	없음
         -------------------------------------------------------------------------------*/
        this.fn_initFileUpDown = function (path, delCase)
        {
        	this.fv_filePath = path;

        	if (!this.gfn_isNull(delCase))
        	{
        		if (delCase == "N" || delCase == "C")
        		{
        			this.fv_fileDelCase = delCase;
        		}
        	}
        };

        /***********************************************************************
         * FileUpload 콤포넌트 item 추가
         ************************************************************************/
        this.fup_AttachedFile_onitemchanged = function (obj, e)
        {
        	var sFilePath = e.newvalue;

        	// sFilePath = aFilePath[i];
        	var dirExpt = sFilePath.lastIndexOf("\\") + 1;
        	var sFileName = sFilePath.substr(dirExpt);
        	trace("sFileName >> " + sFileName);


        	// trace("onitemchanged : "+obj.height);
        	var args = {
        		"orgcolname" : "OC_FILE_NM"
        	};
        	var nRow = this.fn_addUploadFile(obj, this.ds_file, args);

        	// Dialog 호출 후 취소시 후 처리 없음.
        	if (this.gfn_isNull(nRow))
        	{
        		return;
        	}

        	/**
        	 필요시 업무단 처리 부분...
        	 */
        };


        /***********************************************************************
         * 사용자 정의함수 부분
         - 전체 파일 사이즈 계산
         ************************************************************************/
        this.fn_calcTotalFileSize = function ()
        {
        	this.nTotalSize = 0;

        	for (var i = 0; i < this.ds_file.rowcount; i++)
        	{
        		this.nTotalSize += parseInt(this.ds_file.getColumn(i, "FILE_SIZE"));
        	}

        	if (this.nTotalSize < 1024)
        	{
        		this.st_FileSize.set_text(this.nTotalSize + "B");
        	}
        	else
        	{
        		this.st_FileSize.set_text((Math.ceil(this.nTotalSize / 1024) + "KB"));
        	}
        };


        /***********************************************************************
         * Upload
         ************************************************************************/
        this.fn_upload = function (sPath)
        {
        	if (this.gfn_isNull(sPath))
        	{
        		sPath = this.fv_filePath;
        	}

        	if (this.gfn_isNull(sPath))
        	{
        		return this.gfn_alert("msg.err.nofilepath");
        		// 경로가 지정되지 않은 첨부파일은 업/다운로드 할 수 없습니다.
        	}

        	// 변경사항 체크 - 파일 업로드가 없으면 바로 save 처리
        	var fCnt = this.div_fup.fup_AttachedFile.getItemCount(true);
        	if (fCnt == 0)
        	{
        		// Upload 이후 부모창 callback 호출
        		this.lookupFunc("fn_callBack").call("completeFileUpload", 1, "There are no files to upload.");
        	}
        	else
        	{
        		var upUrl = this.fv_upUrl + this.fv_uploadDo + "?path=" + sPath;
        		trace("fn_upload url : " + upUrl);

        		this.div_fup.fup_AttachedFile.upload(upUrl);
        	}
        };


        this.div_fup_fup_AttachedFile_onsuccess = function (obj, e)
        {
        	trace("e.errorcode : " + e.errorcode);

        	if (e.datasets == null)
        	{
        		trace("업로드 실패");
        	}
        	else
        	{
        		trace("업로드 성공");
        		// alert(e.datasets[0].rowcount);
        		// alert(e.datasets[0].saveXML());


        		// 업로드 성공 후 받은 데이터셋에서 해당 파일의 파일명을 데이터셋에 저장.
        		var sysname = "";
        		for (var i = this.ds_file.rowcount - 1; i >= 0; i--)
        		{
        			sysname = this.ds_file.getColumn(i, "FILE_NAME");
        			trace("sysname ..>> " + sysname);
        			if (this.gfn_isNull(sysname))
        			{
        				this.ds_file.deleteRow(i);
        			}
        		}

        		this.ds_file.appendData(e.datasets[0], true);

        		// 파일콤포넌트 index 초기화
        		for (var i = obj.getItemCount() - 1; i >= 0; i--)
        		{
        			obj.deleteItem(i);
        		}

        		// 파일 사이즈 total 계산
        		var nSize = this.ds_file.getSum("FILE_SIZE");
        		trace(nSize);
        		nSize = nexacro.round((nSize / 1024), 2); //KB
        		this.st_FileSize.set_text(nSize + " KB");

        		// Upload 이후 부모창 callback 호출
        		this.lookupFunc("fn_callBack").call("completeFileUpload", e.errorcode, e.errormsg);
        	}
        };

        /*-------------------------------------------------------------------------------
         * 설명      : 첨부 파일 다운로드 및 삭제
         *------------------------------------------------------------------------------*/
        this.grd_list_oncelldblclick = function (obj, e)
        {
        	var atchFileGuid = this.ds_file.getColumn(this.ds_file.rowposition, "ATCH_FILE_GUID");
        	var dnUrl = this.fv_upUrl + "/comm/downFile/" + atchFileGuid + ".do";
        	this.FileDownload00.set_downloadurl(dnUrl);
        	var bSucc = this.FileDownload00.download();


        	trace("bSucc >> " + bSucc);
        };



        this.btn_fileDownLoad_onclick = function (obj, e)
        {
        	this.grd_list_oncelldblclick();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.btn_fileDownLoad.addEventHandler("onclick",this.btn_fileDownLoad_onclick,this);
        };
        this.loadIncludeScript("com_file_down_b2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
