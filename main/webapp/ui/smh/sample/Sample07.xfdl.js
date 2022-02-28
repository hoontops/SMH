(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample07");
            this.set_titletext("Search Div 펼침/숨김");
            this.set_color("rgba(52,52,52,1)");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,530);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div01","0","31","890","43",null,null,null,null,null,null,this);
            obj.set_taborder("186");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","20","10","70","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("38");
            obj.set_text("가나다라마");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","217","10","70","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("39");
            obj.set_text("가나다라마");
            obj.set_cssclass("sta_WF_Label");
            obj.set_font("9pt \"Dotum\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","414","10","70","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("40");
            obj.set_text("가나다라마");
            obj.set_cssclass("sta_WF_Label");
            obj.set_font("9pt \"Dotum\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","610","10","70","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("41");
            obj.set_text("가나다라마");
            obj.set_cssclass("sta_WF_Label");
            obj.set_font("9pt \"Dotum\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit04","97","10","100","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("43");
            obj.set_value("ABCDEFG");
            obj.set_font("9pt \"Dotum\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00","294","10","100","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("44");
            obj.set_value("ABCDEFG");
            obj.set_font("9pt \"Dotum\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit01","491","10","100","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("45");
            obj.set_value("ABCDEFG");
            obj.set_font("9pt \"Dotum\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit02","687","10","99","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("46");
            obj.set_value("ABCDEFG");
            obj.set_font("9pt \"Dotum\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static04","20","41","70","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("47");
            obj.set_text("가나다라마");
            obj.set_cssclass("sta_WF_Label");
            obj.set_visible("true");
            obj.set_enable("false");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit03","97","41","100","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("48");
            obj.set_value("ABCDEFG");
            obj.set_visible("true");
            obj.set_enable("false");
            obj.set_font("9pt \"Dotum\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static05","217","41","70","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("49");
            obj.set_text("가나다라마");
            obj.set_cssclass("sta_WF_Label");
            obj.set_enable("false");
            obj.set_font("9pt \"Dotum\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit05","294","41","100","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("50");
            obj.set_value("ABCDEFG");
            obj.set_enable("false");
            obj.set_font("9pt \"Dotum\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static06","414","41","70","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("51");
            obj.set_text("가나다라마");
            obj.set_cssclass("sta_WF_Label");
            obj.set_enable("false");
            obj.set_font("9pt \"Dotum\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit06","491","41","100","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("52");
            obj.set_value("ABCDEFG");
            obj.set_enable("false");
            obj.set_font("9pt \"Dotum\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static07","610","41","70","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("53");
            obj.set_text("가나다라마");
            obj.set_cssclass("sta_WF_Label");
            obj.set_enable("false");
            obj.set_font("9pt \"Dotum\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit07","687","41","99","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("54");
            obj.set_value("ABCDEFG");
            obj.set_enable("false");
            obj.set_font("9pt \"Dotum\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button52",null,"10","58","21","25",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("58");
            obj.set_text("조회");
            obj.set_cssclass("btn_CRUD_Search");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_searchContoll","872","0","16","16",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("61");
            obj.set_tooltiptext("검색조건 펼침");
            obj.set_cssclass("btn_search_open");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static10","0","32","130","10",null,null,null,null,null,null,this);
            obj.set_taborder("211");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","1","32","20","73",null,null,null,null,null,null,this);
            obj.set_taborder("212");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","0","94","130","10",null,null,null,null,null,null,this);
            obj.set_taborder("213");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","0","63","130","10",null,null,null,null,null,null,this);
            obj.set_taborder("214");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","198","32","20","73",null,null,null,null,null,null,this);
            obj.set_taborder("215");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","823","32","20","10",null,null,null,null,null,null,this);
            obj.set_taborder("216");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","864","32","10","73",null,null,null,null,null,null,this);
            obj.set_taborder("217");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","0","89","890","388",null,null,null,null,null,null,this);
            obj.set_taborder("231");
            obj.set_visible("true");
            obj.set_background("aquamarine");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","257","8","375","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("검색창 하단영역 (Search Div 아래의 모든영역을 본 Div에 넣을것)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("9pt \"Dotum\"");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01","16","64","248","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_text("검색창 숨김/펼침 함수 : gfn_searchCtrl");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_font("9pt \"Dotum\"");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02","16","96","248","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_text("함수사용시 search영역의 height값 표준준수");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_font("9pt \"Dotum\"");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static03","16","136","301","34",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_text("2줄검색창 height : 74px  3줄검색창 height : 105px");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_font("9pt \"Dotum\"");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static04","16","176","248","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_text("한줄 증가시마다 31px씩 증가");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_font("9pt \"Dotum\"");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static05","16","216","360","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("5");
            obj.set_text("최상위줄 이외의 컴포넌트들은 탭오더시 탭포커싱이 되지 않도록");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_font("9pt \"Dotum\"");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static06","376","216","160","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("6");
            obj.set_text("enable속성 false 처리!!");
            obj.set_color("red");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_font("bold 9pt \"Dotum\"");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static09","0","0","346","21",null,null,null,null,null,null,this);
            obj.set_taborder("232");
            obj.set_text("소 타이틀");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0%","16",null,"15","1.09%",null,null,null,null,null,this);
            obj.set_taborder("233");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0%","74",null,"15","81.74%",null,null,null,null,null,this);
            obj.set_taborder("234");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
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
        this.addIncludeScript("Sample07.xfdl","lib::comLib.xjs");
        this.registerScript("Sample07.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: Search 펼침/숨김 Sample
         * 파일명 		: Sample07.xfdl
         * 작성자 		: 진성하(UI공통)
         * 작성일 		: 2014.04.21
         *
         * 설  명		: Div 접기 및 펴기 기능 제공
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         *
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        this.executeIncludeScript("lib::comLib.xjs"); /*include "lib::comLib.xjs"*/

        this.Div01_btn_searchContoll_onclick = function (obj, e)
        {
        	var flag = this.gfn_searchCtrl(this.Div01, this.Div02, this.Div01.form.btn_searchContoll, 2, 1);
        	/**********************************************************************
        	 this.gfn_searchCtrl = function(sDiv, bDiv, cBtn, line)
        	 Arguments: 	sDiv		:	Search Div의 id값
        	 bDiv		:	Search Div 하단영역 Div의 id값
        	 cBtn		:	Search창 조절버튼 id값
        	 line		:	Search Div의 라인 수
        	 initLine	:	Search Div의 초기라인 수
        	 (Null로 처리시 Default 1단으로 세팅)
        	 ***********************************************************************/

        	trace(flag);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div01.form.Edit04.addEventHandler("oneditclick",this.Edit00_oneditclick,this);
            this.Div01.form.Edit00.addEventHandler("oneditclick",this.Edit00_oneditclick,this);
            this.Div01.form.Edit01.addEventHandler("oneditclick",this.Edit00_oneditclick,this);
            this.Div01.form.Edit02.addEventHandler("oneditclick",this.Edit00_oneditclick,this);
            this.Div01.form.Edit03.addEventHandler("oneditclick",this.Edit00_oneditclick,this);
            this.Div01.form.Edit05.addEventHandler("oneditclick",this.Edit00_oneditclick,this);
            this.Div01.form.Edit06.addEventHandler("oneditclick",this.Edit00_oneditclick,this);
            this.Div01.form.Edit07.addEventHandler("oneditclick",this.Edit00_oneditclick,this);
            this.Div01.form.btn_searchContoll.addEventHandler("onclick",this.Div01_btn_searchContoll_onclick,this);
        };
        this.loadIncludeScript("Sample07.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
