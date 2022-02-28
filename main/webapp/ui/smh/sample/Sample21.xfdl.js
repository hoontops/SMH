(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample21");
            this.set_titletext("화면호출,이메일공통 호출");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,530);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static21",null,"0","9","530","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","0","2",null,"14","678",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("화면 호출");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_font("bold 10pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0","21",null,"10","134",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_call","21","129","133","46",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("화면 호출");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","21","72",null,"35","592",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("화면 호출\r\n");
            obj.set_color("red");
            obj.set_font("bold 9pt \"arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","176","128","592","123",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("-. this.gfn_goPage ( sUrl , objArgs);\r\n\r\n-. 전체메뉴에 등록되었으나, left 메뉴에 나타나지 않은 화면 이동.\r\n\r\n-. 현재화면 전환.");
            obj.set_textAlign("left");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Button("btn_newOpen","21","337","133","46",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("새창 열기");
            obj.set_tooltiptype("default");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_email","251","337","133","46",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Email Popup");
            obj.set_tooltiptype("default");
            obj.set_visible("true");
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
        this.registerScript("Sample21.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 화면 호출 sample
         * 파일명 		: Sample21.xfdl
         * 작성자 		: UI공통
         * 작성일 		: 2014.04.16
         *
         * 설  명		: 화면 호출 기능 제공
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         *
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include(필수)
         ***************************************************************************/
        //include "lib::comLib.xjs"

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/

        /**************************************************************************
         * 3. FORM 정의
         ***************************************************************************/

        /* Form Load (필수) */
        this.form_onload = function (obj, e)
        {
        	// 초기값 셋팅
        	this.fn_init();
        };

        /* 초기값 셋팅 */
        this.fn_init = function ()
        {
        };

        /**************************************************************************
         * 4. TRANSACTION, CALLBACK 영역
         ***************************************************************************/

        /**************************************************************************
         * 7. 기타 함수 시작
         **************************************************************************/


        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/


        this.btn_call_onclick = function (obj, e)
        {
        	var sUrl = "sample::Sample22.xfdl";

        	// arryList 타입전달 예)
        	var objArgs = {
        		menuName : "목록화면..."+Math.random(),
        		objList : ["감자", 2, "고구마", 4]
        	};

        	var bReload = true;	//reload여부
        	this.gfn_goPage(sUrl, objArgs, bReload);
        };


        this.btn_newOpen_onclick = function (obj, e)
        {
        	this.gfn_openPopupHtml("cmd", "http://localhost:8011/cmd/index.html?formUrl=sample::Sample21.xfdl");
        }


        ;

        this.btn_email_onclick = function(obj,e)
        {
        	var popupId = "EMAIL";
        	var oArg = {
        		subject : "subject test",	 //제목
        		contents : "<div>This is a <font color=\"#ff8000\" size=\"5\">Rich Text Editor </font>created in a nexacro platform.</div>",	//메일내용
        		objAddrList : ["sungha.jin@interflex.co.kr", "sunghajin@built1.com"],  //수신자 배열
        		objUserList : ["진성하", "진성하"],   //수신자명 배열
        		atchSrc : "",	//"BAS_ITEMMASTER", //업무에서 올려진 파일 첨부시 (테이블)
        		atchSrcKey : ""	//"INTERFLEX|10400010A1|FA1"   //업무에서 올려진 파일 첨부시 (키값)
        		};
        	//var oArg = {};
        	this.gfn_openPopup(popupId,"cmd::CMAM00100P.xfdl",oArg,"width=790,height=790");

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_call.addEventHandler("onclick",this.btn_call_onclick,this);
            this.btn_newOpen.addEventHandler("onclick",this.btn_newOpen_onclick,this);
            this.btn_email.addEventHandler("onclick",this.btn_email_onclick,this);
        };
        this.loadIncludeScript("Sample21.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
