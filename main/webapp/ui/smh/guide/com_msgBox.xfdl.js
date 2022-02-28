(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("com_msgBox");
            this.set_titletext("공통 message Box");
            if (Form == this.constructor)
            {
                this._setFormPosition(385,240);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_title","30","6",null,"70","30",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("메시지");
            obj.set_visible("true");
            obj.set_cssclass("sta_POP_title");
            this.addChild(obj.name, obj);

            obj = new Static("sta_msg","102","111",null,null,"30","68",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("텍스트가 나오는곳입니다.");
            obj.set_wordWrap("char");
            obj.set_cssclass("sta_POP_text");
            this.addChild(obj.name, obj);

            obj = new Static("sta_line","16",null,"355","1",null,"65",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_MID_Line");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok",null,null,"60","28","30","20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("확인");
            obj.set_cssclass("btn_pop_yes");
            obj.set_tooltiptext("확인");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"20","35","35","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("true");
            obj.set_tooltiptext("닫기");
            obj.set_cssclass("btn_pop_close");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,null,"60","28","-69","20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.set_cssclass("btn_pop_no");
            obj.set_tooltiptext("취소");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_00_00_01","127","6","50","70",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h70");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_00_00_00","187","0","60","76",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h76");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_00_00_00_00","0","113","30","55",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("w30");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_00_00_00_00_00",null,"113","30","55","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("w30");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_00_00_01_00",null,null,"70","20","48","48",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_00_00_01_00_00",null,null,"70","20","48","0",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","30","96","52","52",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_background("url(\'theme://images/Alert_default.png\') no-repeat transparent");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",385,240,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("com_msgBox.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 공통 메세지
         * 파일명 		: com_msgBox.xfdl
         * 작성자 		: UI공통
         * 작성일 		: 2017.09.28
         *
         * 설  명		: message 기능 공통 팝업 제공
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2017.09.28	UI공통   	최초작성
         * 2018.01.21	진성하		모달팝업 표준에 따라 디자인 수정, 스크립트로직 전체수정
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/
        /**************************************************************************
         * 1. 필수 include(필수)
         ***************************************************************************/
        // include "lib::comLib.xjs";

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        var rtnVal;
        var sCallback;

        /**************************************************************************
         * 3. FORM 정의
         ***************************************************************************/
        this.form_onload = function (obj, e)
        {
        	// message 타이틀 처리
        	this.sta_title.set_text("알림");

        	sCallback = this.parent.callFunc;

        	var sMsg = this.parent.message;
        	this.sta_msg.set_text(sMsg);

        	var sType = this.parent.type;
        	if (sType == "info")
        	{
        		this.btn_cancel.set_visible(false);
        		this.btn_ok.set_right("15px");

        		this.btn_close.addEventHandler("onclick", this.btn_ok_onclick, this);
        	}
        	else
        	{
        		this.btn_close.addEventHandler("onclick", this.btn_cancel_onclick, this);
        	}
        };

        this.btn_ok_onclick = function (obj, e)
        {
        	// this.close();

        	rtnVal = [true, sCallback];
        	this.gfn_popupClose(rtnVal);
        };

        this.btn_cancel_onclick = function (obj, e)
        {
        	// this.close();

        	rtnVal = [false, sCallback];
        	this.gfn_popupClose(rtnVal);
        };

        this.com_msgBox_onkeyup = function (obj, e)
        {
        	if (e.keycode == 27)
        	{
        		var nIndex = this.btn_close.findEventHandler("onclick", this.btn_ok_onclick, this);
        		if (nIndex != -1)
        		{
        			this.btn_ok_onclick();
        		}
        		else
        		{
        			this.btn_cancel_onclick();
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onkeyup",this.com_msgBox_onkeyup,this);
            this.btn_ok.addEventHandler("onclick",this.btn_ok_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
        };
        this.loadIncludeScript("com_msgBox.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
