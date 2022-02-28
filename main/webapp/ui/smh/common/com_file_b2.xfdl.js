(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("com_file_b2");
            this.set_titletext("File Up/Down");
            if (Form == this.constructor)
            {
                this._setFormPosition(827,355);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_file", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_SYS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_EXT\" type=\"STRING\" size=\"256\"/><Column id=\"OC_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_GUID\" type=\"STRING\" size=\"256\"/><Column id=\"SVR_SAVE_COURS\" type=\"STRING\" size=\"256\"/><Column id=\"DRM_APY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DNLD_CNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"KEEP_START_DATEC\" type=\"STRING\" size=\"256\"/><Column id=\"KEEP_END_DATEC\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CREATION_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATED_BY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LAST_UPDATE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATE_LOGIN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TABLE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESC\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_SRC_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_SAVE_COURS\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


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


            obj = new Dataset("ds_file00", this);
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"188\"/><Column size=\"0\"/><Column size=\"110\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"파일명\"/><Cell col=\"2\" text=\"input Time\"/><Cell col=\"3\" text=\"파일크기(KB)\"/><Cell col=\"4\" text=\"저장경로\"/><Cell col=\"5\" text=\"저장파일명\"/></Band><Band id=\"body\"><Cell text=\"expr:rowidx + 1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:OC_FILE_NM\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:inputTime\"/><Cell col=\"3\" text=\"bind:FILE_SIZE\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:SVR_SAVE_COURS\"/><Cell col=\"5\" text=\"bind:ATCH_FILE_GUID\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("st_FileSize",null,"6","72","24","395",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("0KB");
            obj.set_visible("false");
            obj.set_background("transparent");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Button("btn_fileDel",null,"6","70","24","202",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("파일삭제");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_tooltiptext("파일 삭제");
            this.addChild(obj.name, obj);

            obj = new Div("div_fup",null,"6","184","24","262",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_border("0px solid rgba(193,193,193,1)");
            obj.set_formscrollbartype("none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new FileUpload("fup_AttachedFile","100","0",null,"24","13",null,null,null,null,null,this.div_fup.form);
            obj.set_taborder("0");
            obj.set_itemcount("1");
            obj.set_buttontext("파일찾기");
            obj.set_scrolltype("none");
            obj.set_tooltiptext("find file");
            obj.set_itemheight("24");
            obj.set_multiselect("false");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.div_fup.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload00","727","368","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("FileDownload00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_upload03",null,"6","82","24","117",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("파일업로드");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_tooltiptext("파일 업로드");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_fileDownLoad",null,"6","94","24","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("파일다운로드");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_tooltiptext("파일 다운로드");
            this.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","0","0","95","34",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("파일 업로드");
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
        this.registerScript("com_file_b2.xfdl", function() {
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
        // include "cuslib::nbdfComLib.xjs";
        /***********************************************************************
         * 화면 변수 선언부
         ************************************************************************/
        this.strPostId = "";

        this.jobSysCd = "";
        this.subDir = "";
        this.atchSrcKey = "";
        this.atchTyCd = "";
        this.tableName = "";
        this.desc = "";
        this.fv_fileUploadHeight = 0;
        this.fv_upUrl = nexacro.getEnvironment().services["svcurl"].url;
        //this.fv_uploadDo = "/comm/uploadFile/" + this.parent.parent.arg_jobSysCd + ".do"; //업로드 서비스명
        this.fv_filePath = "upload"; //파일 Up/Down 서버경로
        this.fv_fileDelCase = "N"; //(option)파일 삭제 유형 : 'N' row 단위 삭제, 'C' 그리드 checkbox 선택 삭제 유형

        this.fileChanged = "N";
        this.fileExts;	//[".png", ".jpg"]

        //var indexUpload = 0;
        /***********************************************************************
         * Event 처리 부분
         ***********************************************************************/
        this.form_onload = function (obj, e)
        {
        	this.jobSysCd = this.parent.parent.arg_jobSysCd;
        	this.subDir = this.parent.parent.arg_subDir;

           // FileUpload 콤포넌트 버튼 높이 setting
        	this.fv_fileUploadHeight = this.div_fup.form.fup_AttachedFile.height;
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
        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	var sSvcID = "updateAtchFiles";
        	var sController = "/cmsa01200/updateAtchFiles.do";
        	var sInDatasets = "ds_file=ds_file00";
        	var sOutDatasets = "";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "updateAtchFiles");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 삭제
         */
        this.fn_delete = function (obj, e)
        {
        	var sSvcID = "deleteFile";
        	var sController = "/comm/deleteFile.do";
        	var sInDatasets = "ds_file=ds_file:U";
        	var sOutDatasets = "";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "deleteFile");

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
        			alert("조회에 실패하였습니다." + errMsg + ".." + trId);
        		}
        		else
        		{
        			alert(errMsg);
        		}
        	}
        	else
        	{
        		if (trId == "selectAtchFileList")
        		{
        			//this.fileChanged = "N";
        		}
        		else if (trId == "completeFileUpload")
        		{
        			this.fileChanged = "Y";
        			this.fn_save();
        		}
        		else if (trId == "updateAtchFiles")
        		{
        			this.fileChanged = "Y";
        			this.fn_search();
        			alert("저장되었습니다.");
        		}
        		else if (trId == "deleteFile")
        		{
        			this.fileChanged = "Y";
        			this.fn_search();
        			alert("삭제되었습니다.");
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

        this.fn_fileExtCheck = function (sFileName)
        {
        	var bRtn = false;

        	var file_excludes = [".do", ".jsp", ".class", ".js", ".asp", ".php", ".cgi", ".exe", ".sh", ".html", ".htm", ".dll", ".cmd", ".bat", ".jar"];
        	var str = sFileName.lastIndexOf(".");
        	var fileExt = sFileName.substring(str, sFileName.length);

        	trace("fileExt :" + fileExt);

        	for (var i in file_excludes)
        	{
        		if (fileExt == file_excludes[i])
        		{
        			this.gfn_Message("CannotSaveExtension", fileExt, "warning", "ok");
        			//this.alert("확장자가 " + fileExt + " 해당 파일은 등록이 불가능 합니다.");
        			return false;
        		}
        	}
        	if(!this.gfn_isNull(this.fileExts)){
        		for (var i in this.fileExts)
        		{
        			if (fileExt == this.fileExts[i])
        			{
        				bRtn = true;
        			}
        		}
        		if(!bRtn)
        		{
        			this.gfn_Message("CannotSaveExtension", fileExt, "warning", "ok");
        			//this.alert("확장자가 " + fileExt + " 해당 파일은 등록이 불가능 합니다.");
        			return false;
        		}
        	}
        	return true;
        };

        /***********************************************************************
         * FileUpload 콤포넌트 item 추가
         ************************************************************************/
        this.fup_AttachedFile_onitemchanged = function (obj,e)
        {
        	trace("index-->"+e.index);
        	var sFilePath = e.newvalue;
        	if(obj.filelist.length==0) return;
        //	var objVir = obj.filelist[0];
        	trace("obj.filelist.length-->"+obj.filelist.length);
        	var objVir = obj.filelist[e.index];

        	var sFileName = objVir.filename;
        	trace("sFileName >> " + sFileName);
        	var nCnt = this.ds_file.getCaseCount("OC_FILE_NM=='" + sFileName + "'");
        	var curIdx = e.index;
        	if (nCnt > 0)
        	{
        		// alert("동일한 파일명이 존재합니다");
        		this.gfn_Message("InValidData007", "File Name", "error", "ok");

        		obj.deleteItem(curIdx);
        		if (curIdx != 0)
        		{
        			obj.appendItem();
        		}
        		return;
        	}

        	/* 업로드 갯수 제한 */
        	if (!this.gfn_isNull(this.parent.parent.fv_nFileCnt))
        	{
        		if (this.parent.parent.fv_nFileCnt <= this.ds_file.rowcount)
        		{
        			//this.alert(this.parent.fv_nFileCnt + "건이상은 업로드 불가능 합니다.");
        			this.gfn_Message("CannotUploadCnt", this.parent.parent.fv_nFileCnt, "info", "ok");
        			// onitemchanged 에서 deleteItem 처리시 에러발생 - Bug
        			// timer를 사용하여 시간차를 두고 삭제 처리한다.
        			// obj.deleteItem(obj.itemcount-1);
        			this.setTimer(9, 100);
        			obj.deleteItem(curIdx);
        			if (curIdx != 0)
        			{
        				obj.appendItem();
        			}
        			return;
        		}
        	}

        	/* 파일 업로드시 확장자 체크 로직 추가함 */
        	var result = this.fn_fileExtCheck(sFileName);

        	if (result)
        	{
        		var args = {
        			"orgcolname" : "OC_FILE_NM"
        		};
        		var nRow = this.fn_addUploadFile(obj, this.ds_file, args);
        		// Dialog 호출 후 취소시 후 처리 없음.
        		if (this.gfn_isNull(nRow))
        		{
        			return;
        		}
        	}
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
        	var comp = this.div_fup.form.fup_AttachedFile;
        	//alert(comp.getItemCount(true));
        	//return;
        	//fupList.filelist.length
        	//alert(comp.filelist.length);
        	/*
        	for (var i = 0; i < comp.getItemCount(); i++)
        	{
        		trace("ssss-->" + this.fn_getFileName(comp.getValue(i)));
        	}
        	*/

        	if (!this.gfn_dsIsUpdated(this.ds_file))
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");
        		//this.alert("변경된 내용이 없습니다!!");
        		return;
        	}

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
        	var fCnt = this.div_fup.form.fup_AttachedFile.getItemCount(true);
        	if (fCnt == 0)
        	{
        		// Upload 이후 부모창 callback 호출
        		this.lookupFunc("fn_callBack").call("completeFileUpload", 1, "There are no files to upload.");
        	}
        	else
        	{
        		var upUrl = this.fv_upUrl + "/comm/uploadFile/" + this.jobSysCd + "/" + this.subDir + ".do";
        		trace("this.fv_upUrl : " + this.fv_upUrl);
        		trace("fn_upload url : " + upUrl);

        		// waitCursor 보여주기
        		this.setWaitCursor(true, true);
        		this.div_fup.form.fup_AttachedFile.upload(upUrl);
        	}
        };


        this.div_fup_fup_AttachedFile_onsuccess = function (obj,e)
        {
        	trace("e.errorcode : " + e.errorcode);
        	// waitCursor 숨기기
        	this.setWaitCursor(false, true);

        	if (e.errorcode != 200)
        	{
        		return this.lookupFunc("fn_callBack").call("completeFileUpload", -1, e.errormsg);
        	}

        	if (e.datasets == null)
        	{
        		trace("업로드 실패");
        		this.parent.parent.SUCC_YN = "N";
        	}
        	else
        	{
        		// 파일 사이즈 total 계산
        		var nSize = e.filesize;//this.ds_file.getSum("FILE_SIZE");
        		trace("size-->"+nSize);
        		nSize = nexacro.round((nSize / 1024), 2); //KB

        		trace("업로드 성공");
        		this.parent.parent.SUCC_YN = "Y";
        		// alert("업로드갯수-->"+e.datasets[0].rowcount);
        		// alert(e.datasets[0].saveXML());
        		if (e.datasets[0].rowcount == 0)
        		{
        			return;
        		}

        		// 업로드 성공 후 받은 데이터셋에서 해당 파일의 파일명을 데이터셋에 저장.
        		var sysname = "";
        		for (var i = this.ds_file.rowcount - 1; i >= 0; i--)
        		{
        			sysname = this.ds_file.getColumn(i, "ATCH_FILE_GUID");
        			trace("sysname ..>> " + sysname);
        			if (this.gfn_isNull(sysname))
        			{
        				this.ds_file.deleteRow(i);
        			}
        		}


        		e.datasets[0].addColumn("JOB_SYS_CD", "string");
        		e.datasets[0].addColumn("TABLE_NAME", "string");
        		e.datasets[0].addColumn("DESC", "string");
        		e.datasets[0].addColumn("ATCH_SRC_KEY", "string");

        		for (var i = 0; i < e.datasets[0].rowcount; i++)
        		{
        			e.datasets[0].setColumn(i, "JOB_SYS_CD", this.jobSysCd);
        			e.datasets[0].setColumn(i, "TABLE_NAME", this.tableName);
        			e.datasets[0].setColumn(i, "DESC", this.desc);
        			e.datasets[0].setColumn(i, "ATCH_SRC_KEY", this.atchSrcKey);
        		}

        		this.ds_file00.clearData();
        		this.ds_file00.appendData(e.datasets[0], true);
        		// 파일콤포넌트 index 초기화
        		for (var i = obj.getItemCount() - 1; i >= 0; i--)
        		{
        			obj.deleteItem(i);
        		}

        		this.st_FileSize.set_text(this.nfn_numberWithCommas(nSize) + " KB");

        		// Upload 이후 부모창 callback 호출
        		this.lookupFunc("fn_callBack").call("completeFileUpload", e.errorcode, e.errormsg);
        	}
        };

        /*-------------------------------------------------------------------------------
         * 설명      : 첨부 파일 다운로드 및 삭제
         *------------------------------------------------------------------------------*/
        this.grd_list_oncelldblclick = function (obj, e)
        {
        	if (this.ds_file.rowposition < 0)
        	{
        		this.gfn_Message("SelectSomeThing", "FILE", "warning", "ok");//alert("다운로드 할 파일을 선택하십시오!");
        		return;
        	}
        	trace(this.ds_file.saveXML());
        	var atchFileGuid = this.ds_file.getColumn(this.ds_file.rowposition, "ATCH_FILE_GUID");
        	var dnUrl = this.fv_upUrl + "/comm/downFile/" + atchFileGuid + ".do";
        	this.FileDownload00.set_downloadurl(dnUrl);
        	var bSucc = this.FileDownload00.download();

        	trace("bSucc >> " + bSucc);
        };


        /*----------------------------------------------------------------------------------------------
         * 설명      : Delete 버튼 클릭시
         *---------------------------------------------------------------------------------------------*/
        this.btn_delete_onclick = function (obj, e)
        {
        	var rowType;
        	/** rowposition 삭제 유형 */
        	var comp = this.div_fup.form.fup_AttachedFile;

        	var nRow = this.ds_file.rowposition;
        	if (nRow == -1)
        	{
        		// return this.gfn_alert("msg.err.grid.noselect", "error");
        		this.gfn_Message("grid.noselect");
        		return;
        	}

        	// var rtVal = this.gfn_confirm("msg.before.delete", "question");
        	var bOK = this.gfn_Message("IsDeleted", null, "conf", "yesno");//삭제하시겠습니까?
        	if (bOK == false) return;

        	if (this.ds_file.getRowType(this.ds_file.rowposition) == 2)
        	{
        		rowType = "D";
        	}

        	var nRowCnt = this.ds_file.getRowCount();
        	for (var i = 0; i < comp.getItemCount(true); i++)
        	{
        		if (this.fn_getFileName(comp.filelist[i].filename) == this.ds_file.getColumn(nRow, "OC_FILE_NM"))
        		{
        			comp.deleteItem(i);
        		}
        	}

        	if (this.fv_fileDelCase == "N")
        	{
        		this.ds_file.deleteRow(nRow);
        	}
        	else
        	{
        		/** checkbox 삭제 유형시 사용할 수 있습니다. */
        		var comp = this.div_fup.form.fup_AttachedFile;

        		var nRow = this.ds_file.findRow("CHK", 1);
        		if (nRow == -1)
        		{
        			return this.gfn_alert("msg.err.grid.noselect", "error");
        		}

        		var rtVal = this.gfn_confirm("msg.before.delete", "question");
        		if (rtVal == false)
        		{
        			return;
        		}

        		var nRowCnt = this.ds_file.getRowCount();

        		for (var i = 0; i < nRowCnt; i++)
        		{
        			var bIsChecked = this.ds_file.getColumn(i, "CHK");
        			if (bIsChecked == 1)
        			{
        				for (var ni = 0; ni < comp.getItemCount(true); ni++)
        				{
        					if (this.fn_getFileName(comp.filelist[ni].filename) == this.ds_file.getColumn(i, "OC_FILE_NM"))
        					{
        						comp.deleteItem(ni);
        					}
        				}
        				this.ds_file.deleteRow(i);
        			}
        		}
        	}

        	if (rowType == "D")
        	{
        		return;
        	}

        	// 파일 사이즈 total 계산
        	var nSize = this.ds_file.getSum("FILE_SIZE");
        	nSize = nexacro.round((nSize / 1024), 2); //KB
        	this.st_FileSize.set_text(this.nfn_numberWithCommas(nSize) + " KB");

        	this.fn_delete();
        };

        /*----------------------------------------------------------------------------------------------
         * 설명      : FileUpload 콤포넌트 Item 추가시 position(height) 처리
         *---------------------------------------------------------------------------------------------*/
        this.div_fup_fup_AttachedFile_onappenditem = function (obj, e)
        {
        	obj.getNumSetter("height").addset(this.fv_fileUploadHeight);
        	obj.set_top(obj.top - 24);

        };

        /*----------------------------------------------------------------------------------------------
         * 설명      : FileUpload 콤포넌트 Item 추가시 position(height) 처리
         *---------------------------------------------------------------------------------------------*/
        this.div_fup_fup_AttachedFile_ondeleteitem = function (obj,e)
        {
        	if (obj.getItemCount() == 0)
        	{
        		obj.appendItem();
        	}
        	obj.getNumSetter("height").subset(this.fv_fileUploadHeight);
        	obj.set_top(obj.top + 24);
        };


        /**
         * 업로드하기 위해 선택한 파일을 FileUpload컴포턴트와 innerdataset에 연결된 Dataset에 설정한다.
         * (참고)Runtime버전과 다르게 코딩
         * (주의)dsFile의 칼럼은 "FILE_PATH", "nmFile", "FILE_SIZE", "FILE_NAME"으로 구성되어야 한다.
         * @param fupList FileUpload 컴포넌트
         * @param dsFile FileUpload컴포턴트의 innerdataset에 연결된 Dataset
         * @param args FileUpload component 처리시 추가 옵션 배열
         - args.syscolname : 로컬시스템 파일 경로?? html5 보안상 로컬 처리안됨.
         - args.orgcolname : 로컬 파일명.
         - args.compheight : tem 추가시 current button position.
         * @return target Dataset rowposition
         */
        this.fn_addUploadFile = function (fupList, dsFile, args)
        {
        	var strFileName;
        	var nRow;

        	trace("getItemCount-->"+fupList.getItemCount());


        	try
        	{
        		// 업로드 파일정보를 데이터셋에 설정
        		strFileName = this.fn_getFileName(fupList.value);

        		nRow = dsFile.addRow();

        		if (args.syscolname)
        		{
        			dsFile.setColumn(nRow, args.syscolname, fupList.value);
        		}
        		if (args.orgcolname)
        		{
        			dsFile.setColumn(nRow, args.orgcolname, strFileName);
        		}
        		fupList.appendItem();
        		trace("getItemCount-->"+fupList.getItemCount());
        		trace("getItemCount(true)-->"+fupList.getItemCount(true));

        		// 선택한 파일이 없으면 FileDialog로 선택
        		if (this.gfn_isNull(fupList.value))
        		{
        			return null;
        		}

        		 trace(fupList.value);
        		 for(var i=0; i < fupList.itemcount; i++)
        		 {
        			 trace(i + " : "+fupList.hasValue(i));
        			 if(!fupList.hasValue(i)){
        				return null;
        			 }
        		 }



        	}
        	catch (e)
        	{
        		this.alert(e.message);
        	}
        	return nRow;
        };



        /********************************************************************************
         * Function Name: fn_getFileName
         * Description  : 파일 경로에서 파일명만 가져온다.
         * Arguments	: 파일명
         * Return 		: String, 파일명
         ********************************************************************************/
        this.fn_getFileName = function (strFilePath)
        {
        	var strFileName = "";

        	strFilePath = this.gfn_toString(strFilePath);
        	for (var i = 0; i < strFilePath.length; i++)
        	{
        		if (this.gfn_right(strFilePath, i + 1).indexOf("\\") > -1)
        		{
        			break;
        		}
        		if (this.gfn_right(strFilePath, i + 1).indexOf("\/") > -1)
        		{
        			break;
        		}
        		strFileName = this.gfn_right(strFilePath, i + 1);
        	}

        	return strFileName;
        };

        /*----------------------------------------------------------------------------------------------
         * 설명      : FileUpload 콤포넌트 초기화 처리
         *---------------------------------------------------------------------------------------------*/
        this.fn_compFileUploadReset = function ()
        {
        	for (var i = this.div_fup.form.fup_AttachedFile.getItemCount(); i > 0; i--)
        	{
        		this.div_fup.form.fup_AttachedFile.deleteItem(i - 1);
        	}

        	// default item setting
        	if (this.div_fup.form.fup_AttachedFile.getItemCount() == 0)
        	{
        		this.div_fup.form.fup_AttachedFile.appendItem();
        	}

        	// 첨부파일 데이타셋 초기화
        	this.ds_file.clearData();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.btn_fileDel.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.div_fup.form.fup_AttachedFile.addEventHandler("onsuccess",this.div_fup_fup_AttachedFile_onsuccess,this);
            this.div_fup.form.fup_AttachedFile.addEventHandler("onitemchanged",this.fup_AttachedFile_onitemchanged,this);
            this.div_fup.form.fup_AttachedFile.addEventHandler("onappenditem",this.div_fup_fup_AttachedFile_onappenditem,this);
            this.div_fup.form.fup_AttachedFile.addEventHandler("ondeleteitem",this.div_fup_fup_AttachedFile_ondeleteitem,this);
            this.btn_upload03.addEventHandler("onclick",this.fn_upload,this);
            this.btn_fileDownLoad.addEventHandler("onclick",this.grd_list_oncelldblclick,this);
        };
        this.loadIncludeScript("com_file_b2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
