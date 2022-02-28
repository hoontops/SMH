(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("com_copy");
            this.set_titletext("그리드 셀 복사");
            if (Form == this.constructor)
            {
                this._setFormPosition(505,228);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static10","30","6",null,"70","30",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("복사창");
            obj.set_cssclass("sta_POP_title");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_copy","30","96",null,"64","30",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"0","35","35","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_pop_close");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"180","62","28","30",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("취소");
            obj.set_cssclass("btn_pop_no");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_00_00_01","97","6","70","70",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h70");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_00_00_00","187","0","60","76",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h76");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_00_00_00_00_00",null,"96","30","55","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("w30");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_00_00_00_00","0","113","30","55",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("w30");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_00_00_01_00","405",null,"70","20",null,"48",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_00_00_01_00_00","405",null,"70","20",null,"0",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","31","59","403","19",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("(전체 새로고침 후 최초 한번 Ctrl+C로 복사해주세요)");
            obj.set_font("normal 11pt/normal \"Arial\"");
            obj.set_color("green");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",505,228,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("com_copy.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: 우정사업정보센터 통합경영관리시스템
         * 업무명 		: 복사창
         * 파일명 		: com_copy.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2015.05.27
         *
         * 설  명		: 그리드에서 선택한 셀 내용을 팝업에 display(to copy & paste)
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2015.05.27	진성하   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include(필수)
         ***************************************************************************/
        // include "lib::comLib.xjs";
        // include "cuslib::nbdfComLib.xjs";

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        var fv_currDate;

        /**************************************************************************
         * 3. FORM 정의
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	// fv_currDate = this.fn_fcm_getCurrentSystemTime(0);
        	//this.nfn_formInit(obj);
        	this.txa_copy.set_value(this.parent.arg_content);
        	system.clearClipboard();
        	system.setClipboard("CF_TEXT",this.parent.arg_content);

        	if(this.parent.arg_type=="G") return;

        	if(nexacro.getApplication().gv_copyCnt==0){
        		//this.setTimer(100,2000);
        		this.setTimer(100,10);
        		nexacro.getApplication().gv_copyCnt = nexacro.toNumber(nexacro.getApplication().gv_copyCnt)+1;
        	}else{
        		this.setTimer(100,100);
        	}
        };

        this.btn_close_onclick = function (obj, e)
        {
        	this.close();
        };

        this.txa_copy_onkeydown = function (obj, e)
        {
        	trace("keycode = " + e.keycode);
        	// ESC 누르면 창 닫기
        	if (e.keycode == 27)
        	{
        		this.btn_close_onclick();
        	}
        	/*
        	if(e.ctrlkey){
        		if (e.keycode == 67)
        		{
        			this.btn_close_onclick();
        		}
        	}
        	*/
        };

        this.com_copy_ontimer = function(obj,e)
        {
        	if(e.timerid==100){
        		this.killTimer(e.timerid);
        		this.close();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.addEventHandler("ontimer",this.com_copy_ontimer,this);
            this.Static10.addEventHandler("onclick",this.Static10_onclick,this);
            this.txa_copy.addEventHandler("onkeydown",this.txa_copy_onkeydown,this);
            this.Button00.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("com_copy.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
