(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sample_page");
            this.set_titletext("RD호출(html5)--삭제");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EVL_YY\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_MM\" type=\"STRING\" size=\"256\"/><Column id=\"GRFC_LPSAO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GRFC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GRFC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GOAL1\" type=\"STRING\" size=\"256\"/><Column id=\"GOAL2\" type=\"STRING\" size=\"256\"/><Column id=\"GOAL3\" type=\"STRING\" size=\"256\"/><Column id=\"GOAL4\" type=\"STRING\" size=\"256\"/><Column id=\"GOAL5\" type=\"STRING\" size=\"256\"/><Column id=\"GOAL6\" type=\"STRING\" size=\"256\"/><Column id=\"GOAL7\" type=\"STRING\" size=\"256\"/><Column id=\"GOAL8\" type=\"STRING\" size=\"256\"/><Column id=\"GOAL9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"GRFC_NM\">이순신</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","1.66%","120",null,"29","83.3%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("호출");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00","1.66%","160",null,"526","31.25%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_url("http://localhost:8080/oz70/ozhviewer/ozReportViewer2.jsp");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","1.66%","8",null,"27","86.62%",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("서버 URL");
            obj.set_font("11pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","1.66%","40",null,"27","86.62%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Viewer ID");
            obj.set_font("11pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","1.66%","72",null,"27","86.62%",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("File Name");
            obj.set_font("11pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","10.25%","8",null,"27","41.41%",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_value("http://ldekmc.kpic.go.kr:7714/ReportingServer/service");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","10.25%","40",null,"27","41.41%",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_value("crownix-viewer");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","10.25%","72",null,"27","41.41%",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_value("http://10.222.77.248:7714/ReportingServer/mrd/RSCM00101R.mrd");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","560","114","133","34",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("DB호출");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,768,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Sample98.xfdl", function() {

        this.bIsLoaded = false; //페이지 오픈 여부

        // --------------------------------------------------
        // 여기는 공통으로 구현 필요.
        // --------------------------------------------------
        this.fn_getIframeHandle = function (objWb)
        {
        	return objWb._ifrm_elem._handle;
        };
        // --------------------------------------------------

        this.Button00_onclick = function (obj, e)
        {
        	if (nexacro.Rrowser == "Runtime")
        	{
        		return;
        	}

        	// 이미 한번 오픈한 경우 레포트 	바로 호출
        	if (this.bIsLoaded)
        	{
        		trace("=================>reopen");
        		var sRptUrl = this.Edit02.value;
        		var sParam = "/rdata [" + this.ds_list.saveXML() + "]";

        		this.fn_rdSet(sRptUrl, sParam);
        		return;
        	}
        	// this.WebBrowser00.set_url("http://10.222.77.247:9090/nexacro/rd_sample/crownix/sample/sample_nexa.html");
        	// this.WebBrowser00.set_url("http://localhost:8011/kmc/nexacro/sample_nexa.html");
        	this.WebBrowser00.set_url("http://localhost:8011/fcm/rd_nexa/rd_nexa.html");
        };

        this.WebBrowser00_onloadcompleted = function (obj, e)
        {
        	if (e.url.indexOf("rd_nexa.html") >= 0)
        	{
        		var sUrl = this.Edit00.value;
        		var sId = this.Edit01.value;
        		this.fn_rdCreate(sUrl, sId);

        		var sRptUrl = this.Edit02.value;
        		var sParam = "/rdata [" + xmldata + "]";
        		this.fn_rdSet(sRptUrl, sParam);
        	}
        };

        /*------------------------------------------------------------
         // 레포트 viewer 를 생성한다.
         --------------------------------------------------------------*/
        this.fn_rdCreate = function (sUrl, sId)
        {
        	trace(">>>>>fn_rdCreate call");
        	var pWin = this.WebBrowser00.getProperty("document");
        	var ifms = this.fn_getIframeHandle(this.WebBrowser00);
        	var crownixRpt = ifms.contentWindow._crownix_createViewer(sUrl, sId);

        	if (crownixRpt == null || crownixRpt == undefined)
        	{
        		alert("report 생성실패...");
        		return;
        	}
        	crownixRpt = null;

        	this.bIsLoaded = true;
        };

        /*------------------------------------------------------------
         // 레포트를 호출한다.
         --------------------------------------------------------------*/
        this.fn_rdSet = function (sUrl, sParam)
        {
        	var pWin = this.WebBrowser00.getProperty("document");
        	var ifms = this.fn_getIframeHandle(this.WebBrowser00);
        	ifms.contentWindow.crownixViewer.openFile(sUrl, sParam);
        };

        this.Button01_onclick = function (obj, e)
        {
        	this.WebBrowser00.callMethod("test");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.WebBrowser00.addEventHandler("onloadcompleted",this.WebBrowser00_onloadcompleted,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("Sample98.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
