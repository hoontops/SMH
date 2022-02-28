(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Guide_09");
            this.set_titletext("sitemap");
            if (Form == this.constructor)
            {
                this._setFormPosition(1248,896);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn_00_01_00","0","0","165","38",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("시스템 관리");
            obj.set_cssclass("btn_sitemap_menu0");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("div_menu0","0","38","165","150",null,null,null,null,null,null,this);
            obj.set_taborder("1");
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

            obj = new Div("div_menu0_00","175","38","165","150",null,null,null,null,null,null,this);
            obj.set_taborder("2");
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

            obj = new Div("div_menu0_00_00","350","38","165","150",null,null,null,null,null,null,this);
            obj.set_taborder("3");
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

            obj = new Div("div_menu0_00_01","525","38","165","150",null,null,null,null,null,null,this);
            obj.set_taborder("4");
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

            obj = new Div("div_menu0_00_00_00","700","38","165","150",null,null,null,null,null,null,this);
            obj.set_taborder("5");
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

            obj = new Div("div_menu0_00_01_00","875","38","165","150",null,null,null,null,null,null,this);
            obj.set_taborder("6");
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

            obj = new Div("div_menu0_00_00_00_00","1050","38","165","150",null,null,null,null,null,null,this);
            obj.set_taborder("7");
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

            obj = new Static("Static16_01_00_00_00","24","26","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.addChild(obj.name, obj);

            obj = new Div("div_menu0_00_02","175","198","165","54",null,null,null,null,null,null,this);
            obj.set_taborder("9");
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

            obj = new Div("div_menu0_01","0","198","165","54",null,null,null,null,null,null,this);
            obj.set_taborder("10");
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

            obj = new Static("sta_00","0","276",null,"21","30",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_sitemap_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00_00_00","14","252","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h24");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00",null,"442","30","116","0",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("w\r\n30");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_01","350","8","165","65",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("165");
            obj.set_cssclass("guide_size_HT");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_00_00_01","650","141","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("24px");
            obj.set_cssclass("guide_size_VL");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_00_00_01_00","650","38","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("30px");
            obj.set_cssclass("guide_size_VL");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01","81","0","70","38",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("38px");
            obj.set_cssclass("guide_size_VR");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00_00_00_00","515","22","10","115",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("w\r\n10");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00_00_00_01","174","188","350","10",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("guide_size_VR");
            obj.set_text("h10");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_00","24","277","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("20px");
            obj.set_cssclass("guide_size_VR");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_01","81","38","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("30px");
            obj.set_cssclass("guide_size_VR");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_01_00","81","68","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("24px");
            obj.set_cssclass("guide_size_VR");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","1009","125","176","136",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("menu0 버튼은 165px*38px\r\nmenu1 버튼은 165px*30px\r\nmenu1 버튼은 165px*34px\r\n\r\nmenu2 그룹간의 가로 간격10px, 새로간격 10px\r\n\r\nmenu0 그룹간의 간격은 top 20px, bottom 24px");
            obj.set_cssclass("sta_font_skyBlue");
            obj.set_usedecorate("true");
            obj.set_wordWrap("char");
            obj.set_visible("false");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Div("div_menu0_02","0","335","165","462",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_00_01","0","0","165","30",null,null,null,null,null,null,this.div_menu0_02.form);
            obj.set_taborder("0");
            obj.set_text("Setup");
            obj.set_cssclass("btn_sitemap_menu1");
            this.div_menu0_02.addChild(obj.name, obj);

            obj = new Button("btn_00","0","30","165","24",null,null,null,null,null,null,this.div_menu0_02.form);
            obj.set_taborder("1");
            obj.set_text("Enterprise정의");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_02.addChild(obj.name, obj);

            obj = new Button("btn_01","0","54","165","24",null,null,null,null,null,null,this.div_menu0_02.form);
            obj.set_taborder("2");
            obj.set_text("Site 정의");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_02.addChild(obj.name, obj);

            obj = new Button("btn_00_00","0","78","165","24",null,null,null,null,null,null,this.div_menu0_02.form);
            obj.set_taborder("3");
            obj.set_text("UOM 관리");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_02.addChild(obj.name, obj);

            obj = new Button("btn_01_00","0","102","165","24",null,null,null,null,null,null,this.div_menu0_02.form);
            obj.set_taborder("4");
            obj.set_text("작업장 관리");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_02.addChild(obj.name, obj);

            obj = new Button("btn_00_00_00","0","126","165","24",null,null,null,null,null,null,this.div_menu0_02.form);
            obj.set_taborder("5");
            obj.set_text("표준공정 관리");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_02.addChild(obj.name, obj);

            obj = new Button("btn_01_00_00","0","150","165","24",null,null,null,null,null,null,this.div_menu0_02.form);
            obj.set_taborder("6");
            obj.set_text("공정별 체공시간 관리");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_02.addChild(obj.name, obj);

            obj = new Button("btn_00_00_00_00","0","174","165","24",null,null,null,null,null,null,this.div_menu0_02.form);
            obj.set_taborder("7");
            obj.set_text("품목유형 관리");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_02.addChild(obj.name, obj);

            obj = new Button("btn_01_00_00_00","0","198","165","24",null,null,null,null,null,null,this.div_menu0_02.form);
            obj.set_taborder("8");
            obj.set_text("카테고리 관리");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_02.addChild(obj.name, obj);

            obj = new Button("btn_00_00_00_00_00","0","222","165","24",null,null,null,null,null,null,this.div_menu0_02.form);
            obj.set_taborder("9");
            obj.set_text("사유코드 관리");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_02.addChild(obj.name, obj);

            obj = new Button("btn_01_00_00_00_00","0","246","165","24",null,null,null,null,null,null,this.div_menu0_02.form);
            obj.set_taborder("10");
            obj.set_text("고객 정보조회");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_02.addChild(obj.name, obj);

            obj = new Button("btn_01_00_00_00_00_00","0","438","165","24",null,null,null,null,null,null,this.div_menu0_02.form);
            obj.set_taborder("11");
            obj.set_text("ID Serial");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_02.addChild(obj.name, obj);

            obj = new Button("btn_00_00_00_00_00_00","0","414","165","24",null,null,null,null,null,null,this.div_menu0_02.form);
            obj.set_taborder("12");
            obj.set_text("Action 관리");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_02.addChild(obj.name, obj);

            obj = new Button("btn_01_00_00_00_01","0","390","165","24",null,null,null,null,null,null,this.div_menu0_02.form);
            obj.set_taborder("13");
            obj.set_text("작업장 권한 관리");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_02.addChild(obj.name, obj);

            obj = new Button("btn_00_00_00_00_01","0","366","165","24",null,null,null,null,null,null,this.div_menu0_02.form);
            obj.set_taborder("14");
            obj.set_text("사용자 그룹-사용자 매핑");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_02.addChild(obj.name, obj);

            obj = new Button("btn_01_00_00_01","0","342","165","24",null,null,null,null,null,null,this.div_menu0_02.form);
            obj.set_taborder("15");
            obj.set_text("사용자 그룹 관리");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_02.addChild(obj.name, obj);

            obj = new Button("btn_00_00_00_01","0","318","165","24",null,null,null,null,null,null,this.div_menu0_02.form);
            obj.set_taborder("16");
            obj.set_text("환율 정보조회");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_02.addChild(obj.name, obj);

            obj = new Button("btn_01_00_01","0","294","165","24",null,null,null,null,null,null,this.div_menu0_02.form);
            obj.set_taborder("17");
            obj.set_text("창고 정보조회");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_02.addChild(obj.name, obj);

            obj = new Button("btn_00_00_01","0","270","165","24",null,null,null,null,null,null,this.div_menu0_02.form);
            obj.set_taborder("18");
            obj.set_text("업체 정보조회");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_02.addChild(obj.name, obj);

            obj = new Button("btn_00_01_00_00","0","297","165","38",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("기준정보");
            obj.set_cssclass("btn_sitemap_menu0");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("div_menu0_02_00","175","335","165","462",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_00_01","0","0","165","30",null,null,null,null,null,null,this.div_menu0_02_00.form);
            obj.set_taborder("0");
            obj.set_text("사양기준관리");
            obj.set_cssclass("btn_sitemap_menu1");
            this.div_menu0_02_00.addChild(obj.name, obj);

            obj = new Button("btn_00","0","30","165","24",null,null,null,null,null,null,this.div_menu0_02_00.form);
            obj.set_taborder("1");
            obj.set_text("모델등록 및 진행현황");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_02_00.addChild(obj.name, obj);

            obj = new Button("btn_01","0","54","165","24",null,null,null,null,null,null,this.div_menu0_02_00.form);
            obj.set_taborder("2");
            obj.set_text("마스터품목(사양)");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_02_00.addChild(obj.name, obj);

            obj = new Button("btn_00_00","0","78","165","24",null,null,null,null,null,null,this.div_menu0_02_00.form);
            obj.set_taborder("3");
            obj.set_text("CAM 작업의뢰");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_02_00.addChild(obj.name, obj);

            obj = new Button("btn_01_00","0","102","165","24",null,null,null,null,null,null,this.div_menu0_02_00.form);
            obj.set_taborder("4");
            obj.set_text("품목사양정보");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_02_00.addChild(obj.name, obj);

            obj = new Button("btn_00_00_00","0","126","165","24",null,null,null,null,null,null,this.div_menu0_02_00.form);
            obj.set_taborder("5");
            obj.set_text("ROUTING");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_02_00.addChild(obj.name, obj);

            obj = new Button("btn_01_00_00","0","150","165","24",null,null,null,null,null,null,this.div_menu0_02_00.form);
            obj.set_taborder("6");
            obj.set_text("공정 Spec 등록");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_02_00.addChild(obj.name, obj);

            obj = new Button("btn_00_00_00_00","0","174","165","24",null,null,null,null,null,null,this.div_menu0_02_00.form);
            obj.set_taborder("7");
            obj.set_text("승인처리");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_02_00.addChild(obj.name, obj);

            obj = new Button("btn_01_00_00_00","0","198","165","24",null,null,null,null,null,null,this.div_menu0_02_00.form);
            obj.set_taborder("8");
            obj.set_text("수주 사양 결재");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_02_00.addChild(obj.name, obj);

            obj = new Button("btn_00_00_00_00_00","0","222","165","24",null,null,null,null,null,null,this.div_menu0_02_00.form);
            obj.set_taborder("9");
            obj.set_text("CNC Data 관리");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_02_00.addChild(obj.name, obj);

            obj = new Button("btn_01_00_00_00_00","0","246","165","24",null,null,null,null,null,null,this.div_menu0_02_00.form);
            obj.set_taborder("10");
            obj.set_text("사양변경등록비교");
            obj.set_cssclass("btn_sitemap_menu2");
            this.div_menu0_02_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1248,896,this,function(p){});
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
        this.loadIncludeScript("Guide_09.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
