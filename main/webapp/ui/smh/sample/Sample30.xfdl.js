(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("WebEditorTest");
            this.set_titletext("파일업로드/다운로드");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,530);
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
            obj = new FileUpload("fup_upload01","556","320","87","42",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_multiselect("true");
            obj.set_itemcount("1");
            obj.set_border("0px solid rgba(128,128,128,1)");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_append","660","483","75","36",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("item 추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_upload00","742","320","69","36",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("upload");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_grid","38","312","428","100",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_binddataset("ds_file");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"FILE_PATH\"/><Cell col=\"1\" text=\"FILE_NAME\"/><Cell col=\"2\" text=\"FILE_SIZE\"/><Cell col=\"3\" text=\"FILE_SAVENM\"/><Cell col=\"4\" text=\"FILE_TYPE\"/><Cell col=\"5\" text=\"SEQ\"/><Cell col=\"6\" text=\"CHK\"/></Band><Band id=\"body\"><Cell text=\"bind:FILE_PATH\"/><Cell col=\"1\" text=\"bind:FILE_NAME\"/><Cell col=\"2\" text=\"bind:FILE_SIZE\"/><Cell col=\"3\" text=\"bind:FILE_SAVENM\"/><Cell col=\"4\" text=\"bind:FILE_TYPE\"/><Cell col=\"5\" text=\"bind:SEQ\"/><Cell col=\"6\" text=\"bind:CHK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","25","428","884","2",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Static00");
            obj.set_border("1px solid rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new FileUpload("fup_upload02","556","492","87","100",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_multiselect("false");
            obj.set_border("0px solid rgba(128,128,128,1)");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete","756","483","75","36",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("item 삭제");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_grid00","38","483","428","133",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_binddataset("ds_file00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"FILE_PATH\"/><Cell col=\"1\" text=\"FILE_NAME\"/></Band><Band id=\"body\"><Cell text=\"bind:FILE_PATH\"/><Cell col=\"1\" text=\"bind:FILE_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_upload01","846","483","69","36",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("upload");
            this.addChild(obj.name, obj);

            obj = new Static("sta_comment","2.39%","253",null,"47","39.02%",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("* IE8, IE9 에서는 multiselect 기능 지원 안됨.\r\n\r\n* upload시 그리드 BLOB 기능 지원 안됨(보안문제 - 파일 처리시 Dialog 스크립트 지원 X)\r\n");
            obj.set_color("blue");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_file","3.8%","57",null,"144","53.59%",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_url("common::com_file.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_upload03","50.65%","90",null,"36","40.00%",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("upload");
            this.addChild(obj.name, obj);

            obj = new Static("sta_comment00","2.39%","9",null,"47","39.1%",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("* Division을 활용한 파일 업/다운로드");
            obj.set_color("red");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","2.5%","212",null,"2","9.57%",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("Static00");
            obj.set_border("1px solid rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Static("sta_comment01","2.39%","224",null,"28","39.02%",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("* 멀티선택 파일업로드");
            obj.set_color("red");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_comment02","2.39%","440",null,"28","39.02%",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("* 싱글선택 파일업로드");
            obj.set_color("red");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Plugin("Plugin00","71.63%","139",null,"46","18.7%",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_classid("{CA8A9780-280D-11CF-A24D-444553540000}");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","66.74%","90",null,"46","18.91%",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_comUpload","453","9","190","59",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("공통 파일업로드");
            this.addChild(obj.name, obj);

            obj = new Button("btn_comDnload","675","9","190","59",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("공통 파일다운로드");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,530,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_file.xfdl");
        };
        
        // User Script
        this.registerScript("Sample30.xfdl", function() {

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
        		return this.gfn_alert(strErrorMsg);
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


        this.Button00_onclick = function (obj, e)
        {
        	this.Plugin00;
        };

        this.btn_comUpload_onclick = function(obj,e)
        {
        	var jobSysCd = "CMD"; 					//업무구분코드 CMD,BAS....
        	var subDir = "test"; 				//세부업무약어
        	var resouceid = "1234";					//테이블의 키 값
        	var resourcetype = "CMD_TEST"; 	//테이블명
        	var comments = "테스트"; 		//파일설명
        	var fileCnt = null; 					//업로드수
        	var fileExts = [".png", ".jpg"];	//허용 파일 확장자
        	var oArg = {arg_jobSysCd:jobSysCd
        				,arg_atchSrcKey:resouceid
        				,arg_tableName:resourcetype
        				,arg_desc:comments
        				,arg_subDir:subDir
        				,arg_fileCnt:fileCnt
        				,arg_fileExts:fileExts
        				};
        	this.gfn_openPopup("file_upload","cmd::CMSA01220P.xfdl",oArg,"");
        };

        this.btn_comDnload_onclick = function(obj,e)
        {
        	var jobSysCd = "CMD"; 					//업무구분코드 CMD,BAS....
        	var subDir = "test"; 				//세부업무약어
        	var resouceid = "1234";					//테이블의 키 값
        	var resourcetype = "CMD_TEST"; 	//테이블명
        	var comments = "테스트"; 		//파일설명
        	var fileCnt = null; 					//업로드수
        	var oArg = {arg_jobSysCd:jobSysCd
        				,arg_atchSrcKey:resouceid
        				,arg_tableName:resourcetype
        				,arg_desc:comments
        				,arg_subDir:subDir
        				,arg_fileCnt:fileCnt};
        	this.gfn_openPopup("file_dnload","cmd::CMSA01310P.xfdl",oArg,"");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.WebEditorTest_onload,this);
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
            this.btn_comUpload.addEventHandler("onclick",this.btn_comUpload_onclick,this);
            this.btn_comDnload.addEventHandler("onclick",this.btn_comDnload_onclick,this);
        };
        this.loadIncludeScript("Sample30.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
