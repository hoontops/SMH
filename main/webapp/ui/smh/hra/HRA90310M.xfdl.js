(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HRA90310M");
            this.set_titletext("육성체계가이드");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new ImageViewer("imv_display","10","10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_stretch("fit");
            obj.set_color("transparent");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("HRA90310M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: SM 상선 myHR 고도화
         * 업무명 		: 육성체계가이드
         * 파일명 		: HRA90310M.xfdl
         * 작성자 		: 김희철
         * 작성일 		: 2022.01.25
         * 설  명		: 육성체계에 대한 사용자 가이드 제공을 위한 그림파일을 조회하는 화면입니다.
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2022.01.25	강정기   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/


        /***************************************************************************************
         * 1. 필수 include
         ****************************************************************************************/


        /***************************************************************************************
         * 2. FORM 변수 선언 영역
          ****************************************************************************************/


        /***************************************************************************************
         * 3. FORM LOAD
          ****************************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.imv_display.set_image("URL('img::career_guid_2022.jpg')") ;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
        };
        this.loadIncludeScript("HRA90310M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
