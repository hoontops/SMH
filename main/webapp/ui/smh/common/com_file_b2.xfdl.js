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
            obj.set_nodatatext("????????? ????????????.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"188\"/><Column size=\"0\"/><Column size=\"110\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"?????????\"/><Cell col=\"2\" text=\"input Time\"/><Cell col=\"3\" text=\"????????????(KB)\"/><Cell col=\"4\" text=\"????????????\"/><Cell col=\"5\" text=\"???????????????\"/></Band><Band id=\"body\"><Cell text=\"expr:rowidx + 1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:OC_FILE_NM\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:inputTime\"/><Cell col=\"3\" text=\"bind:FILE_SIZE\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:SVR_SAVE_COURS\"/><Cell col=\"5\" text=\"bind:ATCH_FILE_GUID\"/></Band></Format></Formats>");
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
            obj.set_text("????????????");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_tooltiptext("?????? ??????");
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
            obj.set_buttontext("????????????");
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
            obj.set_text("???????????????");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_tooltiptext("?????? ?????????");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_fileDownLoad",null,"6","94","24","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("??????????????????");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_tooltiptext("?????? ????????????");
            this.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","0","0","95","34",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("?????? ?????????");
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
         * 01. ???????????? : ?????? ???/???????????? ????????????
         * 02. ?????????   : fileUpDown.xfdl
         * 03. ???????????? :
         * 04. ?????????   :
         * 05. ?????????   :
         * 06. ???????????? :
         ***********************************************************************
         *     ?????????     ?????????   ??????
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
         * ?????? ?????? ?????????
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
        //this.fv_uploadDo = "/comm/uploadFile/" + this.parent.parent.arg_jobSysCd + ".do"; //????????? ????????????
        this.fv_filePath = "upload"; //?????? Up/Down ????????????
        this.fv_fileDelCase = "N"; //(option)?????? ?????? ?????? : 'N' row ?????? ??????, 'C' ????????? checkbox ?????? ?????? ??????

        this.fileChanged = "N";
        this.fileExts;	//[".png", ".jpg"]

        //var indexUpload = 0;
        /***********************************************************************
         * Event ?????? ??????
         ***********************************************************************/
        this.form_onload = function (obj, e)
        {
        	this.jobSysCd = this.parent.parent.arg_jobSysCd;
        	this.subDir = this.parent.parent.arg_subDir;

           // FileUpload ???????????? ?????? ?????? setting
        	this.fv_fileUploadHeight = this.div_fup.form.fup_AttachedFile.height;
        };

        /*
         * ?????? : ??????
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
         * ?????? : ??????
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
         * ?????? : ??????
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
         * 5. TRANSACTION, CALLBACK ??????
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		if (trId.substring(0, 6) == "select")
        		{
        			alert("????????? ?????????????????????." + errMsg + ".." + trId);
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
        			alert("?????????????????????.");
        		}
        		else if (trId == "deleteFile")
        		{
        			this.fileChanged = "Y";
        			this.fn_search();
        			alert("?????????????????????.");
        		}
        	}
        };


        /************************************************************************************************
         * ????????? FUNCTION ?????? (??????)
         ************************************************************************************************/
        /*------------------------------------------------------------------------------
         * ???   ???:		?????????/???????????? ?????????
         * ???   ???:		path - ?????????/???????????? ??????(??????)
         delCase - ?????? ?????? ?????? : 'N' row ?????? ??????, 'C' ????????? checkbox ?????? ?????? ??????(??????)
         * ???   ???: 	??????
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
        			//this.alert("???????????? " + fileExt + " ?????? ????????? ????????? ????????? ?????????.");
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
        			//this.alert("???????????? " + fileExt + " ?????? ????????? ????????? ????????? ?????????.");
        			return false;
        		}
        	}
        	return true;
        };

        /***********************************************************************
         * FileUpload ???????????? item ??????
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
        		// alert("????????? ???????????? ???????????????");
        		this.gfn_Message("InValidData007", "File Name", "error", "ok");

        		obj.deleteItem(curIdx);
        		if (curIdx != 0)
        		{
        			obj.appendItem();
        		}
        		return;
        	}

        	/* ????????? ?????? ?????? */
        	if (!this.gfn_isNull(this.parent.parent.fv_nFileCnt))
        	{
        		if (this.parent.parent.fv_nFileCnt <= this.ds_file.rowcount)
        		{
        			//this.alert(this.parent.fv_nFileCnt + "???????????? ????????? ????????? ?????????.");
        			this.gfn_Message("CannotUploadCnt", this.parent.parent.fv_nFileCnt, "info", "ok");
        			// onitemchanged ?????? deleteItem ????????? ???????????? - Bug
        			// timer??? ???????????? ???????????? ?????? ?????? ????????????.
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

        	/* ?????? ???????????? ????????? ?????? ?????? ????????? */
        	var result = this.fn_fileExtCheck(sFileName);

        	if (result)
        	{
        		var args = {
        			"orgcolname" : "OC_FILE_NM"
        		};
        		var nRow = this.fn_addUploadFile(obj, this.ds_file, args);
        		// Dialog ?????? ??? ????????? ??? ?????? ??????.
        		if (this.gfn_isNull(nRow))
        		{
        			return;
        		}
        	}
        };


        /***********************************************************************
         * ????????? ???????????? ??????
         - ?????? ?????? ????????? ??????
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
        		//this.alert("????????? ????????? ????????????!!");
        		return;
        	}

        	if (this.gfn_isNull(sPath))
        	{
        		sPath = this.fv_filePath;
        	}

        	if (this.gfn_isNull(sPath))
        	{
        		return this.gfn_alert("msg.err.nofilepath");
        		// ????????? ???????????? ?????? ??????????????? ???/???????????? ??? ??? ????????????.
        	}

        	// ???????????? ?????? - ?????? ???????????? ????????? ?????? save ??????
        	var fCnt = this.div_fup.form.fup_AttachedFile.getItemCount(true);
        	if (fCnt == 0)
        	{
        		// Upload ?????? ????????? callback ??????
        		this.lookupFunc("fn_callBack").call("completeFileUpload", 1, "There are no files to upload.");
        	}
        	else
        	{
        		var upUrl = this.fv_upUrl + "/comm/uploadFile/" + this.jobSysCd + "/" + this.subDir + ".do";
        		trace("this.fv_upUrl : " + this.fv_upUrl);
        		trace("fn_upload url : " + upUrl);

        		// waitCursor ????????????
        		this.setWaitCursor(true, true);
        		this.div_fup.form.fup_AttachedFile.upload(upUrl);
        	}
        };


        this.div_fup_fup_AttachedFile_onsuccess = function (obj,e)
        {
        	trace("e.errorcode : " + e.errorcode);
        	// waitCursor ?????????
        	this.setWaitCursor(false, true);

        	if (e.errorcode != 200)
        	{
        		return this.lookupFunc("fn_callBack").call("completeFileUpload", -1, e.errormsg);
        	}

        	if (e.datasets == null)
        	{
        		trace("????????? ??????");
        		this.parent.parent.SUCC_YN = "N";
        	}
        	else
        	{
        		// ?????? ????????? total ??????
        		var nSize = e.filesize;//this.ds_file.getSum("FILE_SIZE");
        		trace("size-->"+nSize);
        		nSize = nexacro.round((nSize / 1024), 2); //KB

        		trace("????????? ??????");
        		this.parent.parent.SUCC_YN = "Y";
        		// alert("???????????????-->"+e.datasets[0].rowcount);
        		// alert(e.datasets[0].saveXML());
        		if (e.datasets[0].rowcount == 0)
        		{
        			return;
        		}

        		// ????????? ?????? ??? ?????? ?????????????????? ?????? ????????? ???????????? ??????????????? ??????.
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
        		// ?????????????????? index ?????????
        		for (var i = obj.getItemCount() - 1; i >= 0; i--)
        		{
        			obj.deleteItem(i);
        		}

        		this.st_FileSize.set_text(this.nfn_numberWithCommas(nSize) + " KB");

        		// Upload ?????? ????????? callback ??????
        		this.lookupFunc("fn_callBack").call("completeFileUpload", e.errorcode, e.errormsg);
        	}
        };

        /*-------------------------------------------------------------------------------
         * ??????      : ?????? ?????? ???????????? ??? ??????
         *------------------------------------------------------------------------------*/
        this.grd_list_oncelldblclick = function (obj, e)
        {
        	if (this.ds_file.rowposition < 0)
        	{
        		this.gfn_Message("SelectSomeThing", "FILE", "warning", "ok");//alert("???????????? ??? ????????? ??????????????????!");
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
         * ??????      : Delete ?????? ?????????
         *---------------------------------------------------------------------------------------------*/
        this.btn_delete_onclick = function (obj, e)
        {
        	var rowType;
        	/** rowposition ?????? ?????? */
        	var comp = this.div_fup.form.fup_AttachedFile;

        	var nRow = this.ds_file.rowposition;
        	if (nRow == -1)
        	{
        		// return this.gfn_alert("msg.err.grid.noselect", "error");
        		this.gfn_Message("grid.noselect");
        		return;
        	}

        	// var rtVal = this.gfn_confirm("msg.before.delete", "question");
        	var bOK = this.gfn_Message("IsDeleted", null, "conf", "yesno");//?????????????????????????
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
        		/** checkbox ?????? ????????? ????????? ??? ????????????. */
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

        	// ?????? ????????? total ??????
        	var nSize = this.ds_file.getSum("FILE_SIZE");
        	nSize = nexacro.round((nSize / 1024), 2); //KB
        	this.st_FileSize.set_text(this.nfn_numberWithCommas(nSize) + " KB");

        	this.fn_delete();
        };

        /*----------------------------------------------------------------------------------------------
         * ??????      : FileUpload ???????????? Item ????????? position(height) ??????
         *---------------------------------------------------------------------------------------------*/
        this.div_fup_fup_AttachedFile_onappenditem = function (obj, e)
        {
        	obj.getNumSetter("height").addset(this.fv_fileUploadHeight);
        	obj.set_top(obj.top - 24);

        };

        /*----------------------------------------------------------------------------------------------
         * ??????      : FileUpload ???????????? Item ????????? position(height) ??????
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
         * ??????????????? ?????? ????????? ????????? FileUpload??????????????? innerdataset??? ????????? Dataset??? ????????????.
         * (??????)Runtime????????? ????????? ??????
         * (??????)dsFile??? ????????? "FILE_PATH", "nmFile", "FILE_SIZE", "FILE_NAME"?????? ??????????????? ??????.
         * @param fupList FileUpload ????????????
         * @param dsFile FileUpload??????????????? innerdataset??? ????????? Dataset
         * @param args FileUpload component ????????? ?????? ?????? ??????
         - args.syscolname : ??????????????? ?????? ???????? html5 ????????? ?????? ????????????.
         - args.orgcolname : ?????? ?????????.
         - args.compheight : tem ????????? current button position.
         * @return target Dataset rowposition
         */
        this.fn_addUploadFile = function (fupList, dsFile, args)
        {
        	var strFileName;
        	var nRow;

        	trace("getItemCount-->"+fupList.getItemCount());


        	try
        	{
        		// ????????? ??????????????? ??????????????? ??????
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

        		// ????????? ????????? ????????? FileDialog??? ??????
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
         * Description  : ?????? ???????????? ???????????? ????????????.
         * Arguments	: ?????????
         * Return 		: String, ?????????
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
         * ??????      : FileUpload ???????????? ????????? ??????
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

        	// ???????????? ???????????? ?????????
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
