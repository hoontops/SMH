(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample11");
            this.set_titletext("파일업로드/다운로드");
            if (Form == this.constructor)
            {
                this._setFormPosition(1005,838);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_file", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SAVENM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_file00", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SAVENM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new FileUpload("fup_upload00","556","785","87","23",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_border("1px solid rgba(193,193,193,1)");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new FileUpload("fup_upload01","556","368","87","42",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_multiselect("true");
            obj.set_itemcount("1");
            obj.set_border("0px solid rgba(128,128,128,1)");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_append","660","619","75","36",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("item 추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_upload00","742","368","69","36",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("upload");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_grid","38","368","428","124",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_binddataset("ds_file");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"FILE_PATH\"/><Cell col=\"1\" text=\"FILE_NAME\"/><Cell col=\"2\" text=\"FILE_SIZE\"/><Cell col=\"3\" text=\"FILE_SAVENM\"/><Cell col=\"4\" text=\"FILE_TYPE\"/><Cell col=\"5\" text=\"SEQ\"/><Cell col=\"6\" text=\"CHK\"/></Band><Band id=\"body\"><Cell text=\"bind:FILE_PATH\"/><Cell col=\"1\" text=\"bind:FILE_NAME\"/><Cell col=\"2\" text=\"bind:FILE_SIZE\"/><Cell col=\"3\" text=\"bind:FILE_SAVENM\"/><Cell col=\"4\" text=\"bind:FILE_TYPE\"/><Cell col=\"5\" text=\"bind:SEQ\"/><Cell col=\"6\" text=\"bind:CHK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","25","564","884","2",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Static00");
            obj.set_border("1px solid rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new FileUpload("fup_upload02","556","628","87","100",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_multiselect("false");
            obj.set_border("0px solid rgba(128,128,128,1)");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete","756","619","75","36",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("item 삭제");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_grid00","38","619","428","133",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_binddataset("ds_file00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"319\"/><Column size=\"107\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"FILE_PATH\"/><Cell col=\"1\" text=\"FILE_NAME\"/></Band><Band id=\"body\"><Cell text=\"bind:FILE_PATH\"/><Cell col=\"1\" text=\"bind:FILE_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_upload01","846","619","69","36",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("upload");
            this.addChild(obj.name, obj);

            obj = new Static("sta_comment","2.39%","301",null,"47","39%",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("* IE8, IE9 에서는 multiselect 기능 지원 안됨.\r\n\r\n* upload시 그리드 BLOB 기능 지원 안됨(보안문제 - 파일 처리시 Dialog 스크립트 지원 X)\r\n");
            obj.set_color("blue");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_file","3.78%","57",null,"184","53.63%",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_url("common::com_file.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_upload03","50.15%","68",null,"36","40.6%",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("upload");
            this.addChild(obj.name, obj);

            obj = new Static("sta_comment00","2.39%","9",null,"47","39.1%",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("* Division을 활용한 파일 업/다운로드");
            obj.set_color("red");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","2.49%","260",null,"2","9.55%",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("Static00");
            obj.set_border("1px solid rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Static("sta_comment01","2.39%","272",null,"28","39%",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("* 멀티선택 파일업로드");
            obj.set_color("red");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_comment02","2.39%","576",null,"28","39%",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("* 싱글선택 파일업로드");
            obj.set_color("red");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","501","168","107","20",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_color("chocolate");
            var Combo00_innerdataset = new nexacro.NormalDataset("Combo00_innerdataset", obj);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","70.35%","77",null,"39","15.62%",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("파일업로드(팝업)");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","70.75%","136",null,"35","15.52%",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("파일다운로드(팝업)");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","33","764","884","2",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("Static00");
            obj.set_border("1px solid rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","699","786","73","22",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("upload");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","77","785","385","22",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","28","783","44","23",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("파일");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1005,838,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_file.xfdl");
        };
        
        // User Script
        this.registerScript("Sample11.xfdl", function() {
        // include "lib::comLib.xjs";
        // include "cuslib::nbdfComLib.xjs";

        this.fv_fileUploadHeight = 0;

        this.WebEditorTest_onload = function (obj, e)
        {
        };


        this.fup_upload01_onitemchanged = function (obj, e)
        {
        	var sFileName;
        	var sFilePath;

        	if (obj.multiselect)
        	{
        		var sFullData = e.newvalue;
        		var aFilePath = sFullData.split(",");
        		this.ds_file.clearData();
        	}

        	for (var i = 0; i < aFilePath.length; i++)
        	{
        		sFilePath = aFilePath[i];
        		var dirExpt = sFilePath.lastIndexOf("\\") + 1;
        		sFileName = sFilePath.substr(dirExpt);

        		this.ds_file.addRow();

        		this.ds_file.setColumn(i, "FILE_PATH", sFilePath);
        		this.ds_file.setColumn(i, "FILE_NAME", sFileName);
        		this.ds_file.setColumn(i, "SEQ", i + 1);
        		this.ds_file.setColumn(i, "CHK", 1);
        	}
        };

        // 멀티업로드
        this.btn_upload00_onclick = function (obj, e)
        {
        	trace(this.ds_file.saveXML());
        	var sFileUrl = "http://localhost:8011/fileRep/fileUpload.jsp";
        	this.fup_upload01.upload(sFileUrl + "?path=upload");
        };

        this.fup_upload02_onitemchanged = function (obj, e)
        {
        	var sFilePath = e.newvalue;

        	// sFilePath = aFilePath[i];
        	var dirExpt = sFilePath.lastIndexOf("\\") + 1;
        	var sFileName = sFilePath.substr(dirExpt);
        	trace(sFileName);
        	var nRow = this.ds_file00.addRow();

        	this.ds_file00.setColumn(nRow, "FILE_PATH", sFilePath);
        	this.ds_file00.setColumn(nRow, "FILE_NAME", sFileName);
        };

        // 추가
        this.btn_append_onclick = function (obj, e)
        {
        	this.fup_upload02.appendItem();
        };

        // 삭제
        this.btn_delete_onclick = function (obj, e)
        {
        	var nRow = this.ds_file00.rowposition;
        	this.fup_upload02.deleteItem(nRow);
        	this.ds_file00.deleteRow(nRow);
        };

        // 싱글업로드
        this.btn_upload01_onclick = function (obj, e)
        {
        	var sFileUrl = "http://localhost:8011/fileRep/fileUpload.jsp";
        	this.fup_upload02.upload(sFileUrl + "?path=upload");
        };



        this.btn_upload03_onclick = function (obj, e)
        {
        	this.div_file.fn_upload();
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
        		return alert(strErrorMsg);
        	}
        	else
        	{
        		switch (strSvcId)
        		{
        			case "search":
        				break;
        			case "completeFileUpload":
        				break;
        			default:
        				break;
        		}
        	}
        };

        this.fn_popupAfter = function (sPopupId, Variant)
        {
        	if (sPopupId == "file_upload")
        	{
        		if (this.gfn_isNull(this.fv_rtnValue))
        		{
        			return;
        		}
        		trace("return value-->" + this.fv_rtnValue);
        	}
        };
        this.Button00_onclick = function (obj, e)
        {
        	var jobSysCd = "DRBM";
        	var subDir = "IA";
        	var atchSrcKey = "1234567"// 테이블의 키 값
        ;
        	var tableName = "EAP_INVOICES_ALL";
        	var desc = "파일업로드";
        	var fileCnt = "3";
        	var oArg = {
        		arg_jobSysCd : jobSysCd,
        		arg_atchSrcKey : atchSrcKey,
        		arg_tableName : tableName,
        		arg_desc : desc,
        		arg_subDir : subDir,
        		arg_fileCnt : fileCnt
        	};
        	this.gfn_openPopup("file_upload", "cmcm::CMSA01200P.xfdl", oArg, "");
        };

        this.Button02_onclick = function (obj, e)
        {
        	var jobSysCd = "DRBM";
        	var atchSrcKey = "1234567"// 테이블의 키 값
        ;
        	var tableName = "EAP_INVOICES_ALL";
        	var oArg = {
        		arg_jobSysCd : jobSysCd,
        		arg_atchSrcKey : atchSrcKey,
        		arg_tableName : tableName
        	};
        	this.gfn_openPopup("file_download", "cmcm::CMSA01300P.xfdl", oArg, "");
        };

        this.fup_upload00_onitemchanged = function (obj, e)
        {
        	var sFilePath = e.newvalue;

        	// sFilePath = aFilePath[i];
        	var dirExpt = sFilePath.lastIndexOf("\\") + 1;
        	var sFileName = sFilePath.substr(dirExpt);

        	/* 파일 업로드시 확장자 체크 로직 추가함 */
        	var result = this.fn_fileExtCheck(sFileName);

        	if (result)
        	{
        		var nRow = this.fn_addUploadFile(obj);
        		// Dialog 호출 후 취소시 후 처리 없음.
        		if (this.gfn_isNull(nRow))
        		{
        			return;
        		}
        	}
        	this.Edit00.set_value(sFilePath);
        };

        this.Button01_onclick = function (obj, e)
        {
        	// 변경사항 체크 - 파일 업로드가 없으면 바로 save 처리
        	var fCnt = this.fup_upload00.getItemCount(true);
        	trace("fCnt-->" + fCnt);
        	if (fCnt == 0)
        	{
        		// Upload 이후 부모창 callback 호출
        		this.lookupFunc("fn_callBack").call("completeFileUpload", 1, "There are no files to upload.");
        	}
        	else
        	{
        		var url = nexacro.getEnvironment().services["svcurl"].url;
        		var upUrl = url + "/comm/uploadFileTemp.do";
        		trace("upUrl-->" + upUrl);
        		this.fup_upload00.upload(upUrl);
        	}
        };

        this.fup_upload00_onsuccess = function (obj, e)
        {
        	trace("1111");
        	if (e.errorcode != 200)
        	{
        		return this.lookupFunc("fn_callBack").call("completeFileUpload", -1, e.errormsg);
        	}
        };

        this.fup_upload00_onerror = function (obj, e)
        {
        	trace("2222::" + e.errormsg);
        };
        this.fn_addUploadFile = function (fupList)
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
        		fupList.appendItem();
        	}
        	catch (e)
        	{
        		this.alert(e.message);
        	}
        	return 0;
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
        this.fup_upload00_onappenditem = function (obj, e)
        {
        	obj.getNumSetter("height").addset(this.fv_fileUploadHeight);
        };

        this.fup_upload00_ondeleteitem = function (obj, e)
        {
        	if (obj.getItemCount() == 0)
        	{
        		obj.appendItem();
        	}
        	obj.getNumSetter("height").subset(this.fv_fileUploadHeight);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.WebEditorTest_onload,this);
            this.fup_upload00.addEventHandler("onitemchanged",this.fup_upload00_onitemchanged,this);
            this.fup_upload00.addEventHandler("onsuccess",this.fup_upload00_onsuccess,this);
            this.fup_upload00.addEventHandler("onerror",this.fup_upload00_onerror,this);
            this.fup_upload00.addEventHandler("onappenditem",this.fup_upload00_onappenditem,this);
            this.fup_upload00.addEventHandler("ondeleteitem",this.fup_upload00_ondeleteitem,this);
            this.fup_upload01.addEventHandler("onitemchanged",this.fup_upload01_onitemchanged,this);
            this.fup_upload01.addEventHandler("onerror",this.fup_upload01_onerror,this);
            this.fup_upload01.addEventHandler("onsuccess",this.fup_upload01_onsuccess,this);
            this.btn_append.addEventHandler("onclick",this.btn_append_onclick,this);
            this.btn_upload00.addEventHandler("onclick",this.btn_upload00_onclick,this);
            this.fup_upload02.addEventHandler("onitemchanged",this.fup_upload02_onitemchanged,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.btn_upload01.addEventHandler("onclick",this.btn_upload01_onclick,this);
            this.btn_upload03.addEventHandler("onclick",this.btn_upload03_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("Sample11.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
