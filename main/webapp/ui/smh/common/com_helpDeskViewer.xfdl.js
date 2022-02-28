(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("helpDeskViewer");
            this.set_titletext("헬프데스크");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("helpDesk_Viewer","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
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
        this.registerScript("com_helpDeskViewer.xfdl", function() {
        /***************************************************************************************
         * 시스템명 		: IFC MES시스템
         * 업무명 		: UI공통
         * 파일명 		: com_helpDeskViewer.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2017.09.13
         *
         * 설  명		: 포털 헬프데스크 JSP화면 호출을 위한 웹뷰어
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2017.10.27	진성하		하드코딩 최소화 및 운영서버에서도 링크처리되도록 로직 변경
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /***************************************************************************************
         * 1. 필수 include(필수)
         ****************************************************************************************/
        // include "lib::comLib.xjs";

        /***************************************************************************************
         * 2. FORM 변수 선언 영역
         ****************************************************************************************/
        // var pageUrl = "/html/help/ws_pop_helpdesk.html";
        var pageUrl = "/pes/pelh00030/selectPesHelpDeskList.scr";

        /***************************************************************************************
         * 3. FORM 정의
         ****************************************************************************************/
        this.form_onload = function (obj, e)
        {
        	var runMode = nexacro.getApplication().gv_runMode;

        	if (runMode == "local")
        	{
        		runMode = "dev";
        	}

        	var pesUrl = nexacro.getApplication().gds_url.lookup("RUN_MODE", runMode, "PES");
        	var sUrl = pesUrl + pageUrl;

        	this.helpDesk_Viewer.set_url(sUrl);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.helpDesk_Viewer.addEventHandler("onloadcompleted",this.web_rexpert_onloadcompleted,this);
            this.helpDesk_Viewer.addEventHandler("onusernotify",this.web_rexpert_onusernotify,this);
        };
        this.loadIncludeScript("com_helpDeskViewer.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
