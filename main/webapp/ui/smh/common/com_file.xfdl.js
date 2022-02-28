(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("com_file");
            this.set_titletext("File Up/Down");
            if (Form == this.constructor)
            {
                this._setFormPosition(827,355);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_file", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"JOB_SYS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_EXT\" type=\"STRING\" size=\"256\"/><Column id=\"OC_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_GUID\" type=\"STRING\" size=\"256\"/><Column id=\"SVR_SAVE_COURS\" type=\"STRING\" size=\"256\"/><Column id=\"DRM_APY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"KEEP_END_DATEC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_list","0","34",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_file");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_nodatatext("파일이 없습니다.");
            obj.set_font("9pt \"dotum\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"66\"/><Column size=\"760\"/><Column size=\"0\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"29\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"파일명\"/><Cell col=\"2\" text=\"input Time\"/></Band><Band id=\"body\"><Cell text=\"expr:rowidx + 1\"/><Cell col=\"1\" text=\"bind:OC_FILE_NM\"/><Cell col=\"2\" text=\"bind:inputTime\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_fileDel",null,"6","70","24","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("파일삭제");
            obj.set_cssclass("btn_WF_grdCom");
            this.addChild(obj.name, obj);

            obj = new Div("div_fup",null,"6","97","24","80",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("transparent");
            obj.set_border("0px none aquamarine");
            this.addChild(obj.name, obj);

            obj = new FileUpload("fup_AttachedFile","0","0","97","24",null,null,null,null,null,null,this.div_fup.form);
            obj.set_taborder("0");
            obj.set_itemcount("1");
            obj.set_itemheight("24");
            obj.set_index("0");
            this.div_fup.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload00","0","6","108","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("FileDownload00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FileSize",null,"6","73","24","186",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("0KB");
            obj.set_visible("false");
            obj.set_background("transparent");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
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
        this.registerScript("com_file.xfdl", function() {
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

        this.fv_fileUploadHeight = 0;
        this.fv_upUrl = nexacro.getEnvironment().services["svcurl"].url;
        this.fv_uploadDo = "/fileRep/fileUpload.jsp"; //업로드 서비스명
        this.fv_downloadDo = "/fileRep/downloadFile.jsp"; //다운로드 서비스명
        this.fv_filePath = "upload"; //파일 Up/Down 서버경로
        this.fv_fileDelCase = "N"; //(option)파일 삭제 유형 : 'N' row 단위 삭제, 'C' 그리드 checkbox 선택 삭제 유형

        /***********************************************************************
         * Event 처리 부분
         ***********************************************************************/

        this.form_onload = function (obj, e)
        {
        	// FileUpload 콤포넌트 버튼 높이 setting
        	this.fv_fileUploadHeight = this.div_fup.form.fup_AttachedFile.height;
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
        	var file_excludes = [".do", ".jsp", ".class", ".js", ".asp", ".php", ".cgi", ".exe", ".sh", ".html", ".htm", ".dll", ".cmd", ".bat", ".jar"];
        	var str = sFileName.lastIndexOf(".");
        	var fileExt = sFileName.substr(str, sFileName.length);

        	trace("fileExt :" + fileExt);

        	for (var i in file_excludes)
        	{
        		if (fileExt == file_excludes[i])
        		{
        			this.alert("확장자가 " + fileExt + " 해당 파일은 등록이 불가능 합니다.");
        			return false;
        		}
        	}
        	return true;
        };

        /***********************************************************************
         * FileUpload 콤포넌트 item 추가
         ************************************************************************/
        this.fup_AttachedFile_onitemchanged = function (obj, e)
        {
        	trace("this.parent.fv_nFileCnt : " + this.parent.fv_nFileCnt);
        	trace("this.ds_file.rowcount : " + this.ds_file.rowcount);

        	/* 업로드 갯수 제한 */
        	if (!this.gfn_isNull(this.parent.fv_nFileCnt))
        	{
        		if (this.parent.fv_nFileCnt <= this.ds_file.rowcount)
        		{
        			this.alert(this.parent.fv_nFileCnt + "건이상은 업로드 불가능 합니다.");

        			// onitemchanged 에서 deleteItem 처리시 에러발생 - Bug
        			// timer를 사용하여 시간차를 두고 삭제 처리한다.
        			// obj.deleteItem(obj.itemcount-1);
        			this.setTimer(9, 100);

        			return;
        		}
        	}

        	var sFilePath = e.newvalue;
        	var dirExpt = sFilePath.lastIndexOf("\\") + 1;
        	var sFileName = sFilePath.substr(dirExpt);

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
        		// var upUrl = this.fv_upUrl+this.fv_uploadDo+"?path="+sPath;
        		// var upUrl = "/comm/uploadFile/"+sPath+".do";
        		var upUrl = this.fv_upUrl + "/comm/uploadFile/" + sPath + ".do";
        		trace("application.gv_host url : " + nexacro.getApplication().gv_host);
        		trace("fn_upload url : " + upUrl);

        		// waitCursor 보여주기
        		this.setWaitCursor(true, true);

        		this.div_fup.form.fup_AttachedFile.upload(upUrl);
        	}
        };

        this.div_fup_fup_AttachedFile_onsuccess = function (obj, e)
        {
        	// waitCursor 숨기기
        	this.setWaitCursor(false, true);

        	if (e.errorcode != 200)
        	{
        		return this.lookupFunc("fn_callBack").call("completeFileUpload", -1, e.errormsg);
        	}
        	// this.ds_file.deleteRow(this.ds_file.getRowCount()-1);

        	// 업로드 성공 후 받은 데이터셋에서 해당 파일의 파일명을 데이터셋에 저장.
        	var sysname = "";
        	for (var i = this.ds_file.rowcount - 1; i >= 0; i--)
        	{
        		sysname = this.ds_file.getColumn(i, "FILE_SIZE");
        		if (this.gfn_isNull(sysname))
        		{
        			if (e.errormsg != null && e.errormsg != "")
        			{
        				this.alert(e.errorcode);
        			}
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
        };

        /*-------------------------------------------------------------------------------
         * 설명      : 첨부 파일 다운로드 및 삭제
         *------------------------------------------------------------------------------*/
        this.grd_list_oncelldblclick = function (obj, e)
        {
        	var hlpId = this.ds_file.getColumn(e.row, "ATCH_FILE_ID");
        	var seqNo = this.ds_file.getColumn(e.row, "SEQ_NO");

        	/*dnUrl 정보 중 STM 혹은 FCM 자신의 프로젝트에 맞는 값 선택 */
        	var dnUrl = this.fv_upUrl + "/comm/dnFile/" + hlpId + "/" + seqNo + ".do";
        	trace("this.fv_upUrl :" + this.fv_upUrl);
        	trace("dnUrl :" + dnUrl);
        	this.FileDownload00.set_downloadurl(dnUrl);
        	var bSucc = this.FileDownload00.download();
        };

        /*----------------------------------------------------------------------------------------------
         * 설명      : Delete 버튼 클릭시
         *---------------------------------------------------------------------------------------------*/
        this.btn_delete_onclick = function (obj, e)
        {
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
        	var rtVal = this.gfn_confirm("삭제 하시겠습니까?", "conf");
        	if (rtVal == false)
        	{
        		return;
        	}

        	var nRowCnt = this.ds_file.getRowCount();

        	for (var i = 0; i < comp.getItemCount(); i++)
        	{
        		if (this.fn_getFileName(comp.getValue(i)) == this.ds_file.getColumn(nRow, "OC_FILE_NM"))
        		{
        			comp.deleteItem(i);
        		}
        	}

        	if (this.fv_fileDelCase == "N")
        	{
        		this.ds_file.setRowType(i, Dataset.ROWTYPE_DELETE);
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
        				for (var ni = 0; ni < comp.getItemCount(); ni++)
        				{
        					if (this.fn_getFileName(comp.getValue(ni)) == this.ds_file.getColumn(i, "OC_FILE_NM"))
        					{
        						comp.deleteItem(ni);
        					}
        				}
        				this.ds_file.deleteRow(i);
        			}
        		}
        	}

        	// 파일 사이즈 total 계산
        	/*
        	 var nSize = this.ds_file.getSum("FILE_SIZE");
        	 trace(nSize);
        	 nSize = nexacro.round( (nSize / 1024), 2 ); //KB
        	 this.st_FileSize.set_text( nSize + " KB") ;
        	 */
        };

        /*----------------------------------------------------------------------------------------------
         * 설명      : FileUpload 콤포넌트 Item 추가시 position(height) 처리
         *---------------------------------------------------------------------------------------------*/
        this.div_fup_fup_AttachedFile_onappenditem = function (obj, e)
        {
        	obj.getNumSetter("height").addset(this.fv_fileUploadHeight);
        };

        /*----------------------------------------------------------------------------------------------
         * 설명      : FileUpload 콤포넌트 Item 추가시 position(height) 처리
         *---------------------------------------------------------------------------------------------*/
        this.div_fup_fup_AttachedFile_ondeleteitem = function (obj, e)
        {
        	if (obj.getItemCount() == 0)
        	{
        		obj.appendItem();
        	}
        	obj.getNumSetter("height").subset(this.fv_fileUploadHeight);
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

        	// 선택한 파일이 없으면 FileDialog로 선택
        	if (this.gfn_isNull(fupList.value))
        	{
        		return null;
        	}

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

        // form timer 이벤트
        this.com_file_ontimer = function (obj, e)
        {
        	if (e.timerid === 9)
        	{
        		this.div_fup.form.fup_AttachedFile.deleteItem(this.div_fup.form.fup_AttachedFile.itemcount - 1);
        		this.killTimer(9);
        	}
        };

        /*----------------------------------------------------------------------------------------------
         * 설명      : FileUpload 실패 이벤트
         *---------------------------------------------------------------------------------------------*/
        this.div_fup_fup_AttachedFile_onerror = function (obj, e)
        {
        	// waitCursor 숨기기
        	this.setWaitCursor(false, true);
        };

        this.FileDownload00_onerror = function (obj, e)
        {
        };

        this.FileDownload00_onsuccess = function (obj, e)
        {
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ontimer",this.com_file_ontimer,this);
            this.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.btn_fileDel.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.div_fup.form.fup_AttachedFile.addEventHandler("onsuccess",this.div_fup_fup_AttachedFile_onsuccess,this);
            this.div_fup.form.fup_AttachedFile.addEventHandler("onitemchanged",this.fup_AttachedFile_onitemchanged,this);
            this.div_fup.form.fup_AttachedFile.addEventHandler("onappenditem",this.div_fup_fup_AttachedFile_onappenditem,this);
            this.div_fup.form.fup_AttachedFile.addEventHandler("ondeleteitem",this.div_fup_fup_AttachedFile_ondeleteitem,this);
            this.div_fup.form.fup_AttachedFile.addEventHandler("onerror",this.div_fup_fup_AttachedFile_onerror,this);
            this.FileDownload00.addEventHandler("onerror",this.FileDownload00_onerror,this);
            this.FileDownload00.addEventHandler("onsuccess",this.FileDownload00_onsuccess,this);
        };
        this.loadIncludeScript("com_file.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
