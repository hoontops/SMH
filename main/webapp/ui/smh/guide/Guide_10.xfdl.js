(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Guide_10");
            this.set_titletext("Sub Menu");
            if (Form == this.constructor)
            {
                this._setFormPosition(1248,240);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_menu0","0","12","165","150",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_00_01","0","0","165","30",null,null,null,null,null,null,this.div_menu0.form);
            obj.set_taborder("0");
            obj.set_text("코드관리");
            obj.set_cssclass("btn_sitemap_menu1");
            this.div_menu0.addChild(obj.name, obj);

            obj = new Button("btn_00","0","30","165","24",null,null,null,null,null,null,this.div_menu0.form);
            obj.set_taborder("1");
            obj.set_text("코드그룹정보");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0.addChild(obj.name, obj);

            obj = new Button("btn_01","0","54","165","24",null,null,null,null,null,null,this.div_menu0.form);
            obj.set_taborder("2");
            obj.set_text("코드정보");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00_00_00","24","22","50","15",null,null,null,null,null,null,this.div_menu0.form);
            obj.set_taborder("3");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h15");
            this.div_menu0.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00_00_00_00","24","48","50","13",null,null,null,null,null,null,this.div_menu0.form);
            obj.set_taborder("4");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h13");
            this.div_menu0.addChild(obj.name, obj);

            obj = new Div("div_menu0_00","175","12","165","150",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_00","0","30","165","24",null,null,null,null,null,null,this.div_menu0_00.form);
            obj.set_taborder("0");
            obj.set_text("코드그룹 정보");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_00.addChild(obj.name, obj);

            obj = new Button("btn_01","0","54","165","24",null,null,null,null,null,null,this.div_menu0_00.form);
            obj.set_taborder("1");
            obj.set_text("사용자 정보");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_00.addChild(obj.name, obj);

            obj = new Button("btn_00_01","0","0","165","30",null,null,null,null,null,null,this.div_menu0_00.form);
            obj.set_taborder("2");
            obj.set_text("사용자그룹 정보");
            obj.set_cssclass("btn_sitemap_menu1");
            this.div_menu0_00.addChild(obj.name, obj);

            obj = new Button("btn_02","0","78","165","24",null,null,null,null,null,null,this.div_menu0_00.form);
            obj.set_taborder("3");
            obj.set_text("사용자 그룹-사용자 매핑");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_00.addChild(obj.name, obj);

            obj = new Button("btn_03","0","102","165","24",null,null,null,null,null,null,this.div_menu0_00.form);
            obj.set_taborder("4");
            obj.set_text("사용자 신청 승인");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_00.addChild(obj.name, obj);

            obj = new Button("btn_03_00","0","126","165","24",null,null,null,null,null,null,this.div_menu0_00.form);
            obj.set_taborder("5");
            obj.set_text("사이트-사용자 매핑");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_00.addChild(obj.name, obj);

            obj = new Div("div_menu0_00_00","350","12","165","150",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_00","0","30","165","24",null,null,null,null,null,null,this.div_menu0_00_00.form);
            obj.set_taborder("0");
            obj.set_text("메뉴 정보");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_00_00.addChild(obj.name, obj);

            obj = new Button("btn_01","0","54","165","24",null,null,null,null,null,null,this.div_menu0_00_00.form);
            obj.set_taborder("1");
            obj.set_text("툴바 정보");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_00_00.addChild(obj.name, obj);

            obj = new Button("btn_00_01","0","0","165","30",null,null,null,null,null,null,this.div_menu0_00_00.form);
            obj.set_taborder("2");
            obj.set_text("메뉴 관리");
            obj.set_cssclass("btn_sitemap_menu1");
            this.div_menu0_00_00.addChild(obj.name, obj);

            obj = new Button("btn_02","0","78","165","24",null,null,null,null,null,null,this.div_menu0_00_00.form);
            obj.set_taborder("3");
            obj.set_text("메뉴 권한 정보");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_00_00.addChild(obj.name, obj);

            obj = new Button("btn_03","0","102","165","24",null,null,null,null,null,null,this.div_menu0_00_00.form);
            obj.set_taborder("4");
            obj.set_text("툴바 권한 정보");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_00_00.addChild(obj.name, obj);

            obj = new Button("btn_03_00","0","126","165","24",null,null,null,null,null,null,this.div_menu0_00_00.form);
            obj.set_taborder("5");
            obj.set_text("매뉴얼 정보");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_00_00.addChild(obj.name, obj);

            obj = new Div("div_menu0_00_01","525","12","165","150",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("btn_00_01","0","0","165","30",null,null,null,null,null,null,this.div_menu0_00_01.form);
            obj.set_taborder("0");
            obj.set_text("조건 관리");
            obj.set_cssclass("btn_sitemap_menu1");
            this.div_menu0_00_01.addChild(obj.name, obj);

            obj = new Button("btn_00","0","30","165","24",null,null,null,null,null,null,this.div_menu0_00_01.form);
            obj.set_taborder("1");
            obj.set_text("조회조건 정보");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_00_01.addChild(obj.name, obj);

            obj = new Button("btn_01","0","54","165","24",null,null,null,null,null,null,this.div_menu0_00_01.form);
            obj.set_taborder("2");
            obj.set_text("메뉴-조회조건 매핑");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_00_01.addChild(obj.name, obj);

            obj = new Div("div_menu0_00_00_00","700","12","165","150",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_00_01","0","0","165","30",null,null,null,null,null,null,this.div_menu0_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("다국어 관리");
            obj.set_cssclass("btn_sitemap_menu1");
            this.div_menu0_00_00_00.addChild(obj.name, obj);

            obj = new Button("btn_00","0","30","165","24",null,null,null,null,null,null,this.div_menu0_00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("메세지그룹 정보");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_00_00_00.addChild(obj.name, obj);

            obj = new Button("btn_01","0","54","165","24",null,null,null,null,null,null,this.div_menu0_00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("메세지 정보");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_00_00_00.addChild(obj.name, obj);

            obj = new Button("btn_02","0","78","165","24",null,null,null,null,null,null,this.div_menu0_00_00_00.form);
            obj.set_taborder("3");
            obj.set_text("사전그룹 정보");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_00_00_00.addChild(obj.name, obj);

            obj = new Button("btn_03","0","102","165","24",null,null,null,null,null,null,this.div_menu0_00_00_00.form);
            obj.set_taborder("4");
            obj.set_text("사전 정보");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_00_00_00.addChild(obj.name, obj);

            obj = new Div("div_menu0_00_01_00","875","12","165","150",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_00_01","0","0","165","30",null,null,null,null,null,null,this.div_menu0_00_01_00.form);
            obj.set_taborder("0");
            obj.set_text("접속이력 관리");
            obj.set_cssclass("btn_sitemap_menu1");
            this.div_menu0_00_01_00.addChild(obj.name, obj);

            obj = new Button("btn_00","0","30","165","24",null,null,null,null,null,null,this.div_menu0_00_01_00.form);
            obj.set_taborder("1");
            obj.set_text("접속이력 조회");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_00_01_00.addChild(obj.name, obj);

            obj = new Button("btn_01","0","54","165","24",null,null,null,null,null,null,this.div_menu0_00_01_00.form);
            obj.set_taborder("2");
            obj.set_text("시스템 로그");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_00_01_00.addChild(obj.name, obj);

            obj = new Div("div_menu0_00_00_00_00","1050","12","165","150",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Button("btn_00_01","0","0","165","30",null,null,null,null,null,null,this.div_menu0_00_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("스케쥴 관리");
            obj.set_cssclass("btn_sitemap_menu1");
            this.div_menu0_00_00_00_00.addChild(obj.name, obj);

            obj = new Button("btn_00","0","30","165","24",null,null,null,null,null,null,this.div_menu0_00_00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("스케쥴 관리");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00_00","24","0","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.addChild(obj.name, obj);

            obj = new Div("div_menu0_00_02","175","172","165","54",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Button("btn_00","0","30","165","24",null,null,null,null,null,null,this.div_menu0_00_02.form);
            obj.set_taborder("0");
            obj.set_text("자재 이동 등록(시스템)");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_00_02.addChild(obj.name, obj);

            obj = new Button("btn_00_01","0","0","165","30",null,null,null,null,null,null,this.div_menu0_00_02.form);
            obj.set_taborder("1");
            obj.set_text("자재 예외 처리");
            obj.set_cssclass("btn_sitemap_menu1");
            this.div_menu0_00_02.addChild(obj.name, obj);

            obj = new Div("div_menu0_01","0","172","165","54",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_00_01","0","0","165","30",null,null,null,null,null,null,this.div_menu0_01.form);
            obj.set_taborder("0");
            obj.set_text("요점 관리");
            obj.set_cssclass("btn_sitemap_menu1");
            this.div_menu0_01.addChild(obj.name, obj);

            obj = new Button("btn_00","0","30","165","24",null,null,null,null,null,null,this.div_menu0_01.form);
            obj.set_taborder("1");
            obj.set_text("요청 정보");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_01.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00_00_00","24","22","50","15",null,null,null,null,null,null,this.div_menu0_01.form);
            obj.set_taborder("2");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h15");
            this.div_menu0_01.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00_00_00","14","226","90","14",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h24");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","525","260","206","66",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("sitemap의 가이드를 참고합니다.");
            obj.set_cssclass("sta_font_skyBlue");
            obj.set_usedecorate("true");
            obj.set_wordWrap("char");
            obj.set_visible("false");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00_00_00_00","154","220","90","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1248,240,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("Guide_10.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
