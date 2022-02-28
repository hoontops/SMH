(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample22");
            this.set_titletext("화면호출 - 목록화면");
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
            obj.set_text("화면 호출 A");
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

            obj = new Static("Static00","43","104","486","253",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("목록 화면");
            obj.set_color("red");
            obj.set_font("bold 24pt \"Dotum\"");
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
        this.registerScript("Sample22.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 화면호출 목록화면 sample
         * 파일명 		: Sample22.xfdl
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
        	// 화면 호출시 셋팅된 argument 가 존재하면 가져온다.
        	var sArgName = this.gfn_getFrameAguments("menuName");

        	trace("argument :" + sArgName);

        	var sArgArr = this.gfn_getFrameAguments("objList");

        	trace("argument :" + sArgArr);
        }


        	/**************************************************************************
         * 4. TRANSACTION, CALLBACK 영역
         ***************************************************************************/

        	/**************************************************************************
         * 7. 기타 함수 시작
         **************************************************************************/


        	/**************************************************************************
         * 8. 이벤트
         ***************************************************************************/


        ;

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("Sample22.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
