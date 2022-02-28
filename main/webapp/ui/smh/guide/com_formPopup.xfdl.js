(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("com_formPopup");
            this.set_titletext("메인화면 팝업");
            this.set_cssclass("form_PopupBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(1044,813);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_formTitle","20","6",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("화면명");
            obj.set_cssclass("sta_POP_title");
            this.addChild(obj.name, obj);

            obj = new Div("div_form","0","56",null,null,"0","20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("0px solid rgba(128,128,128,1)");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_00_00_00","187","0","60","56",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h56");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_00_00_01","37","0","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"11","35","35","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_00_00_01_00","37","38","50","17",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_00_00_00_00_00_00",null,"3","20","55","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("w20");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1044,813,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("com_formPopup.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 메인화면 팝업
         * 파일명 		: com_formPopup.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2017.03.18
         *
         * 설  명		: 메인화면 팝업
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2017.09.16	진성하   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include(필수)
         ***************************************************************************/
        // include "lib::comLib.xjs";
        // include "cuslib::nbdfComLib.xjs";

        this.fn_init = function (obj, e)
        {
        	var formUrl = this.parent.arg_formUrl;
        	var formTitle = this.parent.arg_formTitle;
        	this.div_form.set_url(formUrl);
        	this.sta_formTitle.set_text(formTitle);

        	var width = this.parent.arg_width;
        	var height = this.parent.arg_height;

        	if (!this.gfn_isNull(width))
        	{
        		this.set_width(width);
        	}
        	if (!this.gfn_isNull(height))
        	{
        		this.set_height(height);
        	}
        };

        this.btn_close_onclick = function (obj, e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("com_formPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
