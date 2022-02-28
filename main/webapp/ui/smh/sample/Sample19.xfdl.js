(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample19");
            this.set_titletext("스캔,이미지마스킹");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,530);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","6.63%","38",null,"37","83.15%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("스캐너 오픈");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","6.85%","122",null,"35","82.61%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("이미지마스킹");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","25.54%","38",null,"37","64.24%",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("NEW스캐너 오픈");
            this.addChild(obj.name, obj);

            obj = new Plugin("Plugin00","46.85%","44",null,"47","46.41%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_classid("{FBAEA0F3-99A4-49F6-9A5B-BA2E861532A2}");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00","14.24%","576",null,"188","18.48%",null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","13.04%","260",null,"58","69.46%",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Button03");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","14.35%","211",null,"29","71.85%",null,null,null,null,null,this);
            obj.set_taborder("6");
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

        };
        
        // User Script
        this.registerScript("Sample19.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: 사용자 정보 보기 샘플
         * 업무명 		: 사용자 정보 보기
         * 파일명 		: Sample19.xfdl
         * 작성자 		: UI공통
         * 작성일 		: 2017.09.17
         *
         * 설  명		: 사용자 정보 보기
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------

         *---------------------------------------------------------------------------------------
         ****************************************************************************************/
        /**************************************************************************
         * 1. 필수 include(필수)
         ***************************************************************************/
        // include "lib::comLib.xjs";

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	// this.Plugin00.set_classid("{C6913F07-39CB-408B-BAAA-BC8ADC317F25}");
        	// this.WebBrowser00.set_url(application.gv_host+"/html/cmm/callExe.jsp");
        };

        this.Button00_onclick = function (obj, e)
        {
        	var imgPath = "RATE/DRBM/IA/";
        	this.nfn_executeScan(imgPath);

        	var bOK = nexacro.getApplication().confirm("스캔 처리가 완료 되었습니까?");
        	if (bOK == false)
        	{
        		return;
        	}

        	var tableNm = "DRSC_TBL";
        	var desc = "스캔테이블";
        	var archSrcKey = "11111";
        	this.nfn_saveScanFileInfo(filePath, tableNm, desc, archSrcKey);
        	/*
        	 var exePath = "C:\\scan_app\\scan_app.exe";
        	 var imgPath = "RATE/DRBM/IA/";
        	 this.WebBrowser00.callMethod("CallExe",exePath,imgPath);
        	 */
        };

        this.Button01_onclick = function (obj, e)
        {
        	/*
        	 var exePath = "C:\\img_mask\\img_mask.exe";
        	 var imgPath = "RATE/DRBM/IA/201803/43.jpg";
        	 this.WebBrowser00.callMethod("CallExe",exePath,imgPath);
        	 */
        	var imgPath = "RATE/DRBM/IA/201803/43.jpg";
        	this.nfn_executeMask(imgPath);

        	// var bOK = application.confirm( "이미지 마스킹 처리가 완료 되었습니까?" );
        	// if(bOK==false) return;
        };

        this.Button02_onclick = function (obj, e)
        {
        	var imgPath = "RATE/DRBM/IA/";
        	this.nfn_executeScan(imgPath);

        	var bOK = nexacro.getApplication().confirm("스캔 처리가 완료 되었습니까?");
        	if (bOK == false)
        	{
        		return;
        	}

        	var tableNm = "DRSC_TBL";
        	var desc = "스캔테이블";
        	var archSrcKey = "11111";
        	this.nfn_saveScanFileInfo(filePath, tableNm, desc, archSrcKey);
        };


        this.Button03_onclick = function (obj, e)
        {
        	var rtn = this.nfn_checkTelNo(this.Edit00.value, "H");
        	alert("rtn::" + rtn);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
        };
        this.loadIncludeScript("Sample19.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
