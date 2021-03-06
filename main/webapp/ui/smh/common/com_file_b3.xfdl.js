(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("com_file_b3");
            this.set_titletext("File Up/Down");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(90,20);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_file", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_SYS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_EXT\" type=\"STRING\" size=\"256\"/><Column id=\"OC_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_GUID\" type=\"STRING\" size=\"256\"/><Column id=\"SVR_SAVE_COURS\" type=\"STRING\" size=\"256\"/><Column id=\"DRM_APY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DNLD_CNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"KEEP_START_DATEC\" type=\"STRING\" size=\"256\"/><Column id=\"KEEP_END_DATEC\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CREATION_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATED_BY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LAST_UPDATE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATE_LOGIN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TABLE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESC\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_SRC_KEY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            
            // UI Components Initialize
            obj = new Button("btn_fileUpload","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_DR_GridUpload");
            this.addChild(obj.name, obj);

            obj = new FileUpload("fup_FileUpload","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_itemheight("20");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload00","727","368","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("FileDownload00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",90,20,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("com_file_b3.xfdl", function() {
        /***********************************************************************
         * 01. ???????????? : ?????? ???/???????????? ????????????
         * 02. ?????????   : fileUpDown.xfdl
         * 03. ???????????? : ?????? ?????????
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
        this.jobSysCd = "";
        this.subDir = "";
        this.atchSrcKey = "";
        this.tableName = "";
        this.desc = "";
        this.fv_upUrl = nexacro.getEnvironment().services["svcurl"].url;
        this.sCallBack;
        this.sBeforeFn;
        this.loadCallback;

        /***********************************************************************
         * Event ?????? ??????
         ***********************************************************************/
        this.form_onload = function (obj, e)
        {
        	trace("div com_file_b3");
        	// this.parent.lookupFunc("fn_beforeFileUpload").call();
        	// if(typeof this.parent.parent.fn_beforeFileUpload == 'function')
        	// {
        	// this.parent.parent.fn_beforeFileUpload();
        	// }
        };





        this.getItemCount = function(){
          return this.fup_FileUpload.getItemCount(true);
        }



        this.filelist = function(){
          return this.fup_FileUpload.filelist;
        }









        /*
         * ?????? : ??????
         */
        this.fn_search = function (obj, e){
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
        	var sInDatasets = "ds_file=ds_file";
        	var sOutDatasets = "";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "updateAtchFiles");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };
        /*
         * ?????? : ??????
         * ??? ???????????? ?????? ???
         */
        this.fn_delete = function (obj, e)
        {
        	if (this.nfn_isNull(this.atchSrcKey) || this.nfn_isNull(this.tableName))
        	{
        		this.alert("??????????????? ??? ????????? ??????????????????.");
        		return;
        	}
        	//this.ds_file.clearData();
        	//this.ds_file.addRow();
        	this.ds_file.setColumn(0, "ATCH_SRC_KEY", this.atchSrcKey);
        	this.ds_file.setColumn(0, "TABLE_NAME", this.tableName);

        /*
        	var sSvcID = "deleteFile2";
        	var sController = "/cmsa01200/deleteFile2.do";
        	var sInDatasets = "ds_file=ds_file";
        	var sOutDatasets = "";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "updateAtchFiles");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	*/

        	var sSvcID = "deleteFile";
        	var sController = "/comm/deleteFile.do";
        	var sInDatasets = "ds_file=ds_file";
        	var sOutDatasets = "";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "deleteFile");

             var sss = this.ds_file.saveXML();
        	 trace( sss );

            if( this.ds_file.rowcount > 0 && this.ds_file.getColumn(0, 'ATCH_FILE_GUID') != ''&& this.ds_file.getColumn(0, 'ATCH_FILE_GUID') != undefined ){
        	  this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	}



        };

        /**************************************************************************
         * 5. TRANSACTION, CALLBACK ??????
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD != 0)
        	{
        		alert(errMsg);
        	}
        	else
        	{
        		if (trId == "deleteFile2")
        		{
        			this.fn_fileUpload();
        		}
        		else if (trId == "completeFileUpload")
        		{
        			this.fn_save();
        		}
        		else if (trId == "updateAtchFiles")
        		{
        			trace("callback ?????? : " + this.sCallBack);

        			// fn_callBack ????????? ?????? ??????????????? ?????? ?????? ???????????? ????????? SUCC_YN ????????? ????????? ?????? ??????????????? ??????.
        			//var obj = eval(this.fn_getFunc("SUCC_YN", "string"));
        			//trace(obj.id);
        			//obj.lookupFunc("fn_callBack").call(this.sCallBack, 0, "");
        			var obj = eval(this.fn_getFunc(this.sCallBack, "function"));
        			var vFlg = obj.lookupFunc(this.sCallBack).call(this.fileNm);
        		}
        		else if ( trId == "selectAtchFileList" ){
        			var obj = eval(this.fn_getFunc(this.loadCallback, "function"));
        			var fileInfo = {"errcode":"-1"};

        			var sssxml = this.ds_file.saveXML();
        			trace( sssxml );

        			if( this.ds_file.rowcount > 0 ){

        			  var strTmp = '"errcode":"0"';
        			  for( var i = 0; i < this.ds_file.colcount; i++ ){
        				var ci = this.ds_file.getColumnInfo(i);
        			    //trace( ci.name );
        				//if( i > 0 ){
        				  strTmp += ' , ';
        				//}
        				var ttmp = this.ds_file.getColumn(0, ci.name);
        				if( ttmp == null ){
        				strTmp += '"'+ci.name+'":""';
        				}
        				else{
        				strTmp += '"'+ci.name+'":"'+ttmp+'"';
        				}
        			  }
        			  strTmp = ' fileInfo = { ' + strTmp+' }';
        			  trace( strTmp );
        			  //fileInfo = eval(strTmp);
        			}
        				trace ( 'fileInfo' );
        				trace ( fileInfo );
        				eval(strTmp);
        				var vFlg = obj.lookupFunc(this.loadCallback).call(fileInfo);
        		}
        	}
        };

        /***********************************************************************
         * Upload
         ************************************************************************/
        this.fup_FileUpload_onitemchanged = function (){
        };


        this.fn_upload = function(){
          this.fn_fileUpload();
        }
        /***********************************************************************
         * Upload
         ************************************************************************/
        this.fn_fileUpload = function ()
        {
        	this.fn_delete();
        	// ???????????? ?????? - ?????? ???????????? ????????? ?????? save ??????
        	var fCnt = this.fup_FileUpload.getItemCount(true);
        	if (fCnt > 0)
        	{
        		this.fileNm = this.fn_getFileName(this.fup_FileUpload.value);

        		trace("this.sBeforeFn  = " + this.sBeforeFn);

        		// ??????????????? ??? Validation ?????? ??????(Return True/False)
        		if (!this.nfn_isNull(this.sBeforeFn))
        		{
        			var obj = eval(this.fn_getFunc(this.sBeforeFn, "function"));
        			var vFlg = obj.lookupFunc(this.sBeforeFn).call(this.fileNm);
        			if (!vFlg)
        			{
        				return;
        			}
        		}



        		var upUrl = this.fv_upUrl + "/comm/uploadFile/" + this.jobSysCd + "/" + this.subDir + ".do?subDir=";

        		// waitCursor ????????????
        		//this.setWaitCursor(true, true);

        		this.fup_FileUpload.upload(upUrl); //????????? ??????
        	}
        };

        this.fup_FileUpload_onsuccess = function (obj, e)
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
        		// ?????? ????????? ???????????? ????????? ????????? ???????????? eval??? ????????????
        		//eval(this.fn_getFunc("SUCC_YN", "string") + ".SUCC_YN='N'");
        	}
        	else
        	{
        		trace("????????? ??????");
        		// ?????? ????????? ???????????? ????????? ????????? ???????????? eval??? ????????????
        		//eval(this.fn_getFunc("SUCC_YN", "string") + ".SUCC_YN='Y'");

        		if (e.datasets[0].rowcount == 0)
        		{
        		trace("????????? ?????? ?????? ?????? ??????");
        			return;
        		}


        		trace("????????? ?????? ?????? ?????? ????????? ??????");
        		var i = e.datasets[0].rowcount - 1;

        		e.datasets[0].addColumn("JOB_SYS_CD", "string");
        		e.datasets[0].addColumn("TABLE_NAME", "string");
        		e.datasets[0].addColumn("DESC", "string");
        		e.datasets[0].addColumn("ATCH_SRC_KEY", "string");
        		e.datasets[0].setColumn(i, "JOB_SYS_CD", this.jobSysCd);
        		e.datasets[0].setColumn(i, "TABLE_NAME", this.tableName);
        		e.datasets[0].setColumn(i, "DESC", this.desc);
        		e.datasets[0].setColumn(i, "ATCH_SRC_KEY", this.atchSrcKey);
        		e.datasets[0].setColumn(i, "OC_FILE_NM", this.fileNm);

        		this.ds_file.clearData();
        		this.ds_file.addRow();
        		var suc = this.ds_file.copyRow(0, e.datasets[0], i);
        		//this.fup_FileUpload.deleteItem(0);
        		//this.fup_FileUpload.appendItem();

        		// Upload ?????? ????????? callback ??????


        		var sssxml = this.ds_file.saveXML();
        		trace( sssxml );

        		this.lookupFunc("fn_callBack").call("completeFileUpload", 0, e.errormsg);
        	}
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
        // ?????? ?????????????????? ?????? ?????? ?????? (function,string)
        this.fn_getFunc = function (str, type)
        {
        	var objStr = "this";
        	var newObj;
        	for (var i = 0; i < 10; i++)
        	{
        		objStr += ".parent"; //parent??? ?????? ??????

        		newObj = eval(objStr + "." + str); //????????? ?????? ??????????????? ?????? ?????? ??????

        		// ??? ????????? ??????, ?????? ????????? ??????????????? ?????? ???????????? return
        		if (typeof newObj == type)
        		{
        			return objStr;
        		}
        		// ?????? ????????? ?????? ??? ????????? ??????????????????( ??? : this.str; )
        		// ????????? ??????. ????????? ??? ?????? ??? ???       ( this.str = "N"; )
        	}
        };

        this.fup_FileUpload_onappenditem = function(obj,e)
        {
        	//obj.getNumSetter("height").addset(this.fv_fileUploadHeight);
        	//obj.move(obj.left,obj.top - 24);
        };


        this.download = function(){
          alert('downStart');


        	if (this.ds_file.rowposition < 0)
        	{
        		//this.gfn_Message("SelectSomeThing", "FILE", "warning", "ok");//alert("???????????? ??? ????????? ??????????????????!");
        		return;
        	}
        	//trace(this.ds_file.saveXML());
        	var atchFileGuid = this.ds_file.getColumn(this.ds_file.rowposition, "ATCH_FILE_GUID");
        	var filename = this.ds_file.getColumn(this.ds_file.rowposition, "OC_FILE_NM");
        	var dnUrl = this.fv_upUrl + "/comm/downFile/" + atchFileGuid + ".do";
        	this.FileDownload00.set_downloadurl(dnUrl);

        	this.FileDownload00.set_downloadfilename( filename );

        	var bSucc = this.FileDownload00.download();


          return bSucc;
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_fileUpload.addEventHandler("onclick",this.div_form1_btn_fileUpload_onclick,this);
            this.fup_FileUpload.addEventHandler("onsuccess",this.fup_FileUpload_onsuccess,this);
            this.fup_FileUpload.addEventHandler("onitemchanged",this.fup_FileUpload_onitemchanged,this);
            this.fup_FileUpload.addEventHandler("onappenditem",this.fup_FileUpload_onappenditem,this);
        };
        this.loadIncludeScript("com_file_b3.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
