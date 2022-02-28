(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HRA90210M");
            this.set_titletext("Organization Photo Chart");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,757);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn_searchOpen","10","6","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_searchOpen");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","40","6","145","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("업무화면명(자동)");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.name,\"MENU_NM\")");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite","187","6","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_favorite");
            this.addChild(obj.name, obj);

            obj = new Div("div_00","305","36",null,"99","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_subTitle","0","0",null,"32","0",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","115","31",null,null,null,null,null,null,this.div_00.form.div_subTitle.form);
            obj.set_taborder("0");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("부서");
            this.div_00.form.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_00","118","5","200","20",null,null,null,null,null,null,this.div_00.form.div_subTitle.form);
            obj.set_taborder("1");
            obj.set_text("sdlkdjf");
            this.div_00.form.div_subTitle.addChild(obj.name, obj);

            obj = new Button("btn_cancel","324","5","84","20",null,null,null,null,null,null,this.div_00.form.div_subTitle.form);
            obj.set_taborder("2");
            obj.set_text("부서찾기");
            obj.set_tooltiptext("부서찾기");
            this.div_00.form.div_subTitle.addChild(obj.name, obj);

            obj = new Button("btn_cancel00","414","5","84","20",null,null,null,null,null,null,this.div_00.form.div_subTitle.form);
            obj.set_taborder("3");
            obj.set_text("Uppor Org");
            obj.set_tooltiptext("Uppor Org");
            this.div_00.form.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static16","15","42",null,"24","185",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("1");
            obj.set_text("* ‘Staff’을 누르시면 산하 소속 임직원을 조회하실 수 있습니다.");
            obj.set_cssclass("sta_font_blue");
            this.div_00.addChild(obj.name, obj);

            obj = new Div("div_topPhoto","0","36","295","169",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_formscrollbarbarminsize("0");
            obj.set_formscrollbarbaroutsize("0");
            obj.set_formscrollbardecbuttonsize("0");
            obj.set_formscrollbarincbuttonsize("0");
            obj.set_formscrollbarsize("0");
            obj.set_formscrollbartrackbarsize("0");
            obj.set_formscrollindicatorsize("0");
            obj.set_cssclass("div_topPhoto");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","0","32","295","1",null,null,null,null,null,null,this.div_topPhoto.form);
            obj.set_taborder("0");
            obj.set_border("0px none,0px none,1px solid #cccccc");
            this.div_topPhoto.addChild(obj.name, obj);

            obj = new Edit("edt_00","6","6","213","20",null,null,null,null,null,null,this.div_topPhoto.form);
            obj.set_taborder("1");
            obj.set_cssclass("display");
            obj.set_value("부서 명칭");
            obj.set_text("부서 명칭");
            this.div_topPhoto.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"6","60","20","10",null,null,null,null,null,this.div_topPhoto.form);
            obj.set_taborder("2");
            obj.set_text("Staff");
            obj.set_tooltiptext("부서찾기");
            obj.set_visible("false");
            this.div_topPhoto.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer_00","10","46","90","106",null,null,null,null,null,null,this.div_topPhoto.form);
            obj.set_taborder("3");
            this.div_topPhoto.addChild(obj.name, obj);

            obj = new Static("Static00","103","48","70","20",null,null,null,null,null,null,this.div_topPhoto.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("성명");
            obj.set_tooltiptext("성명");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_topPhoto.addChild(obj.name, obj);

            obj = new Static("Static00_00","103","70","70","20",null,null,null,null,null,null,this.div_topPhoto.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("직책");
            obj.set_tooltiptext("직책");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_topPhoto.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","103","92","70","20",null,null,null,null,null,null,this.div_topPhoto.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("호칭");
            obj.set_tooltiptext("호칭");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_topPhoto.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","103","114","70","20",null,null,null,null,null,null,this.div_topPhoto.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("직무");
            obj.set_tooltiptext("직무");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_topPhoto.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","103","136","70","20",null,null,null,null,null,null,this.div_topPhoto.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("부서일");
            obj.set_tooltiptext("부서일");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_topPhoto.addChild(obj.name, obj);

            obj = new Edit("edt_00_00","183","48","100","20",null,null,null,null,null,null,this.div_topPhoto.form);
            obj.set_taborder("9");
            obj.set_cssclass("display");
            obj.set_value("홍길동");
            obj.set_text("홍길동");
            this.div_topPhoto.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00","183","70","100","20",null,null,null,null,null,null,this.div_topPhoto.form);
            obj.set_taborder("10");
            obj.set_cssclass("display");
            obj.set_value("팀장");
            obj.set_text("팀장");
            this.div_topPhoto.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00","183","92","100","20",null,null,null,null,null,null,this.div_topPhoto.form);
            obj.set_taborder("11");
            obj.set_cssclass("display");
            obj.set_value("차장");
            obj.set_text("차장");
            this.div_topPhoto.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00","183","114","100","20",null,null,null,null,null,null,this.div_topPhoto.form);
            obj.set_taborder("12");
            obj.set_cssclass("display");
            obj.set_value("선복 및 장비운영");
            obj.set_text("선복 및 장비운영");
            this.div_topPhoto.addChild(obj.name, obj);

            obj = new Calendar("cal_00","183","136","100","20",null,null,null,null,null,null,this.div_topPhoto.form);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("display");
            obj.set_value("20200112");
            this.div_topPhoto.addChild(obj.name, obj);

            obj = new Div("div_work","0","205",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","241","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("12");
            obj.set_text("Members");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("Members");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_memPhoto_00","0","34","295","169",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_formscrollbarbarminsize("0");
            obj.set_formscrollbarbaroutsize("0");
            obj.set_formscrollbardecbuttonsize("0");
            obj.set_formscrollbarincbuttonsize("0");
            obj.set_formscrollbarsize("0");
            obj.set_formscrollbartrackbarsize("0");
            obj.set_formscrollindicatorsize("0");
            obj.set_cssclass("div_memPhoto");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_00","0","32","295","1",null,null,null,null,null,null,this.div_work.form.div_memPhoto_00.form);
            obj.set_taborder("0");
            obj.set_border("0px none,0px none,1px solid #cccccc");
            this.div_work.form.div_memPhoto_00.addChild(obj.name, obj);

            obj = new Edit("edt_00","6","6","213","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("display");
            obj.set_value("부서 명칭");
            obj.set_text("부서 명칭");
            this.div_work.form.div_memPhoto_00.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"6","60","20","10",null,null,null,null,null,this.div_work.form.div_memPhoto_00.form);
            obj.set_taborder("2");
            obj.set_text("Staff");
            obj.set_tooltiptext("부서찾기");
            this.div_work.form.div_memPhoto_00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer_00","10","46","90","106",null,null,null,null,null,null,this.div_work.form.div_memPhoto_00.form);
            obj.set_taborder("3");
            this.div_work.form.div_memPhoto_00.addChild(obj.name, obj);

            obj = new Static("Static00","103","45","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("성명");
            obj.set_tooltiptext("성명");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","103","67","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("직책");
            obj.set_tooltiptext("직책");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","103","89","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("호칭");
            obj.set_tooltiptext("호칭");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","103","111","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("직무");
            obj.set_tooltiptext("직무");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","103","133","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("부서일");
            obj.set_tooltiptext("부서일");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_00.addChild(obj.name, obj);

            obj = new Edit("edt_00_00","183","45","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_00.form);
            obj.set_taborder("9");
            obj.set_cssclass("display");
            obj.set_value("홍길동");
            obj.set_text("홍길동");
            this.div_work.form.div_memPhoto_00.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00","183","67","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("display");
            obj.set_value("팀장");
            obj.set_text("팀장");
            this.div_work.form.div_memPhoto_00.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00","183","89","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("display");
            obj.set_value("차장");
            obj.set_text("차장");
            this.div_work.form.div_memPhoto_00.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00","183","111","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_00.form);
            obj.set_taborder("12");
            obj.set_cssclass("display");
            obj.set_value("인사총괄");
            obj.set_text("인사총괄");
            this.div_work.form.div_memPhoto_00.addChild(obj.name, obj);

            obj = new Calendar("cal_00","183","133","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_00.form);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("display");
            obj.set_value("20200112");
            this.div_work.form.div_memPhoto_00.addChild(obj.name, obj);

            obj = new Div("div_memPhoto_01","305","34","295","169",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_formscrollbarbarminsize("0");
            obj.set_formscrollbarbaroutsize("0");
            obj.set_formscrollbardecbuttonsize("0");
            obj.set_formscrollbarincbuttonsize("0");
            obj.set_formscrollbarsize("0");
            obj.set_formscrollbartrackbarsize("0");
            obj.set_formscrollindicatorsize("0");
            obj.set_cssclass("div_memPhoto");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_00","0","32","295","1",null,null,null,null,null,null,this.div_work.form.div_memPhoto_01.form);
            obj.set_taborder("0");
            obj.set_border("0px none,0px none,1px solid #cccccc");
            this.div_work.form.div_memPhoto_01.addChild(obj.name, obj);

            obj = new Edit("edt_00","6","6","213","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_01.form);
            obj.set_taborder("1");
            obj.set_cssclass("display");
            obj.set_text("부서 명칭");
            this.div_work.form.div_memPhoto_01.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"6","60","20","10",null,null,null,null,null,this.div_work.form.div_memPhoto_01.form);
            obj.set_taborder("2");
            obj.set_text("Staff");
            obj.set_tooltiptext("부서찾기");
            this.div_work.form.div_memPhoto_01.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer_00","10","46","90","106",null,null,null,null,null,null,this.div_work.form.div_memPhoto_01.form);
            obj.set_taborder("3");
            this.div_work.form.div_memPhoto_01.addChild(obj.name, obj);

            obj = new Static("Static00","103","45","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_01.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("성명");
            obj.set_tooltiptext("성명");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_01.addChild(obj.name, obj);

            obj = new Static("Static00_00","103","67","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_01.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("직책");
            obj.set_tooltiptext("직책");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","103","89","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("호칭");
            obj.set_tooltiptext("호칭");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","103","111","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_01.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("직무");
            obj.set_tooltiptext("직무");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","103","133","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_01.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("부서일");
            obj.set_tooltiptext("부서일");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_01.addChild(obj.name, obj);

            obj = new Edit("edt_00_00","183","45","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_01.form);
            obj.set_taborder("9");
            obj.set_cssclass("display");
            obj.set_text("이팀장");
            this.div_work.form.div_memPhoto_01.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00","183","67","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_01.form);
            obj.set_taborder("10");
            obj.set_cssclass("display");
            obj.set_text("팀장");
            this.div_work.form.div_memPhoto_01.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00","183","89","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_01.form);
            obj.set_taborder("11");
            obj.set_cssclass("display");
            obj.set_text("차장");
            this.div_work.form.div_memPhoto_01.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00","183","111","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_01.form);
            obj.set_taborder("12");
            obj.set_cssclass("display");
            obj.set_text("인사총괄");
            this.div_work.form.div_memPhoto_01.addChild(obj.name, obj);

            obj = new Calendar("cal_00","183","133","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_01.form);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("display");
            this.div_work.form.div_memPhoto_01.addChild(obj.name, obj);

            obj = new Div("div_memPhoto_02","610","34","295","169",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_formscrollbarbarminsize("0");
            obj.set_formscrollbarbaroutsize("0");
            obj.set_formscrollbardecbuttonsize("0");
            obj.set_formscrollbarincbuttonsize("0");
            obj.set_formscrollbarsize("0");
            obj.set_formscrollbartrackbarsize("0");
            obj.set_formscrollindicatorsize("0");
            obj.set_cssclass("div_memPhoto");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_00","0","32","295","1",null,null,null,null,null,null,this.div_work.form.div_memPhoto_02.form);
            obj.set_taborder("0");
            obj.set_border("0px none,0px none,1px solid #cccccc");
            this.div_work.form.div_memPhoto_02.addChild(obj.name, obj);

            obj = new Edit("edt_00","6","6","213","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_02.form);
            obj.set_taborder("1");
            obj.set_cssclass("display");
            obj.set_text("부서 명칭");
            this.div_work.form.div_memPhoto_02.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"6","60","20","10",null,null,null,null,null,this.div_work.form.div_memPhoto_02.form);
            obj.set_taborder("2");
            obj.set_text("Staff");
            obj.set_tooltiptext("부서찾기");
            this.div_work.form.div_memPhoto_02.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer_00","10","46","90","106",null,null,null,null,null,null,this.div_work.form.div_memPhoto_02.form);
            obj.set_taborder("3");
            this.div_work.form.div_memPhoto_02.addChild(obj.name, obj);

            obj = new Static("Static00","103","45","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_02.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("성명");
            obj.set_tooltiptext("성명");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_02.addChild(obj.name, obj);

            obj = new Static("Static00_00","103","67","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_02.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("직책");
            obj.set_tooltiptext("직책");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_02.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","103","89","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_02.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("호칭");
            obj.set_tooltiptext("호칭");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_02.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","103","111","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_02.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("직무");
            obj.set_tooltiptext("직무");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_02.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","103","133","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_02.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("부서일");
            obj.set_tooltiptext("부서일");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_02.addChild(obj.name, obj);

            obj = new Edit("edt_00_00","183","45","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_02.form);
            obj.set_taborder("9");
            obj.set_cssclass("display");
            obj.set_text("이팀장");
            this.div_work.form.div_memPhoto_02.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00","183","67","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_02.form);
            obj.set_taborder("10");
            obj.set_cssclass("display");
            obj.set_text("팀장");
            this.div_work.form.div_memPhoto_02.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00","183","89","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_02.form);
            obj.set_taborder("11");
            obj.set_cssclass("display");
            obj.set_text("차장");
            this.div_work.form.div_memPhoto_02.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00","183","111","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_02.form);
            obj.set_taborder("12");
            obj.set_cssclass("display");
            obj.set_text("인사총괄");
            this.div_work.form.div_memPhoto_02.addChild(obj.name, obj);

            obj = new Calendar("cal_00","183","133","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_02.form);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("display");
            this.div_work.form.div_memPhoto_02.addChild(obj.name, obj);

            obj = new Div("div_memPhoto_04","0","208","295","169",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_formscrollbarbarminsize("0");
            obj.set_formscrollbarbaroutsize("0");
            obj.set_formscrollbardecbuttonsize("0");
            obj.set_formscrollbarincbuttonsize("0");
            obj.set_formscrollbarsize("0");
            obj.set_formscrollbartrackbarsize("0");
            obj.set_formscrollindicatorsize("0");
            obj.set_cssclass("div_memPhoto");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_00","0","32","295","1",null,null,null,null,null,null,this.div_work.form.div_memPhoto_04.form);
            obj.set_taborder("0");
            obj.set_border("0px none,0px none,1px solid #cccccc");
            this.div_work.form.div_memPhoto_04.addChild(obj.name, obj);

            obj = new Edit("edt_00","6","6","213","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_04.form);
            obj.set_taborder("1");
            obj.set_cssclass("display");
            obj.set_text("부서 명칭");
            this.div_work.form.div_memPhoto_04.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"6","60","20","10",null,null,null,null,null,this.div_work.form.div_memPhoto_04.form);
            obj.set_taborder("2");
            obj.set_text("Staff");
            obj.set_tooltiptext("부서찾기");
            this.div_work.form.div_memPhoto_04.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer_00","10","46","90","106",null,null,null,null,null,null,this.div_work.form.div_memPhoto_04.form);
            obj.set_taborder("3");
            this.div_work.form.div_memPhoto_04.addChild(obj.name, obj);

            obj = new Static("Static00","103","45","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_04.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("성명");
            obj.set_tooltiptext("성명");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_04.addChild(obj.name, obj);

            obj = new Static("Static00_00","103","67","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_04.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("직책");
            obj.set_tooltiptext("직책");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_04.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","103","89","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_04.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("호칭");
            obj.set_tooltiptext("호칭");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_04.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","103","111","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_04.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("직무");
            obj.set_tooltiptext("직무");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_04.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","103","133","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_04.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("부서일");
            obj.set_tooltiptext("부서일");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_04.addChild(obj.name, obj);

            obj = new Edit("edt_00_00","183","45","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_04.form);
            obj.set_taborder("9");
            obj.set_cssclass("display");
            obj.set_text("이팀장");
            this.div_work.form.div_memPhoto_04.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00","183","67","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_04.form);
            obj.set_taborder("10");
            obj.set_cssclass("display");
            obj.set_text("팀장");
            this.div_work.form.div_memPhoto_04.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00","183","89","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_04.form);
            obj.set_taborder("11");
            obj.set_cssclass("display");
            obj.set_text("차장");
            this.div_work.form.div_memPhoto_04.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00","183","111","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_04.form);
            obj.set_taborder("12");
            obj.set_cssclass("display");
            obj.set_text("인사총괄");
            this.div_work.form.div_memPhoto_04.addChild(obj.name, obj);

            obj = new Calendar("cal_00","183","133","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_04.form);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("display");
            this.div_work.form.div_memPhoto_04.addChild(obj.name, obj);

            obj = new Div("div_memPhoto_05","305","208","295","169",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_formscrollbarbarminsize("0");
            obj.set_formscrollbarbaroutsize("0");
            obj.set_formscrollbardecbuttonsize("0");
            obj.set_formscrollbarincbuttonsize("0");
            obj.set_formscrollbarsize("0");
            obj.set_formscrollbartrackbarsize("0");
            obj.set_formscrollindicatorsize("0");
            obj.set_cssclass("div_memPhoto");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_00","0","32","295","1",null,null,null,null,null,null,this.div_work.form.div_memPhoto_05.form);
            obj.set_taborder("0");
            obj.set_border("0px none,0px none,1px solid #cccccc");
            this.div_work.form.div_memPhoto_05.addChild(obj.name, obj);

            obj = new Edit("edt_00","6","6","213","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_05.form);
            obj.set_taborder("1");
            obj.set_cssclass("display");
            obj.set_text("부서 명칭");
            this.div_work.form.div_memPhoto_05.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"6","60","20","10",null,null,null,null,null,this.div_work.form.div_memPhoto_05.form);
            obj.set_taborder("2");
            obj.set_text("Staff");
            obj.set_tooltiptext("부서찾기");
            this.div_work.form.div_memPhoto_05.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer_00","10","46","90","106",null,null,null,null,null,null,this.div_work.form.div_memPhoto_05.form);
            obj.set_taborder("3");
            this.div_work.form.div_memPhoto_05.addChild(obj.name, obj);

            obj = new Static("Static00","103","45","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_05.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("성명");
            obj.set_tooltiptext("성명");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_05.addChild(obj.name, obj);

            obj = new Static("Static00_00","103","67","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_05.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("직책");
            obj.set_tooltiptext("직책");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_05.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","103","89","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_05.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("호칭");
            obj.set_tooltiptext("호칭");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_05.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","103","111","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_05.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("직무");
            obj.set_tooltiptext("직무");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_05.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","103","133","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_05.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("부서일");
            obj.set_tooltiptext("부서일");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_05.addChild(obj.name, obj);

            obj = new Edit("edt_00_00","183","45","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_05.form);
            obj.set_taborder("9");
            obj.set_cssclass("display");
            obj.set_text("이팀장");
            this.div_work.form.div_memPhoto_05.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00","183","67","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_05.form);
            obj.set_taborder("10");
            obj.set_cssclass("display");
            obj.set_text("팀장");
            this.div_work.form.div_memPhoto_05.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00","183","89","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_05.form);
            obj.set_taborder("11");
            obj.set_cssclass("display");
            obj.set_text("차장");
            this.div_work.form.div_memPhoto_05.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00","183","111","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_05.form);
            obj.set_taborder("12");
            obj.set_cssclass("display");
            obj.set_text("인사총괄");
            this.div_work.form.div_memPhoto_05.addChild(obj.name, obj);

            obj = new Calendar("cal_00","183","133","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_05.form);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("display");
            this.div_work.form.div_memPhoto_05.addChild(obj.name, obj);

            obj = new Div("div_memPhoto_06","610","208","295","169",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_formscrollbarbarminsize("0");
            obj.set_formscrollbarbaroutsize("0");
            obj.set_formscrollbardecbuttonsize("0");
            obj.set_formscrollbarincbuttonsize("0");
            obj.set_formscrollbarsize("0");
            obj.set_formscrollbartrackbarsize("0");
            obj.set_formscrollindicatorsize("0");
            obj.set_cssclass("div_memPhoto");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_00","0","32","295","1",null,null,null,null,null,null,this.div_work.form.div_memPhoto_06.form);
            obj.set_taborder("0");
            obj.set_border("0px none,0px none,1px solid #cccccc");
            this.div_work.form.div_memPhoto_06.addChild(obj.name, obj);

            obj = new Edit("edt_00","6","6","213","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_06.form);
            obj.set_taborder("1");
            obj.set_cssclass("display");
            obj.set_text("부서 명칭");
            this.div_work.form.div_memPhoto_06.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"6","60","20","10",null,null,null,null,null,this.div_work.form.div_memPhoto_06.form);
            obj.set_taborder("2");
            obj.set_text("Staff");
            obj.set_tooltiptext("부서찾기");
            this.div_work.form.div_memPhoto_06.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer_00","10","46","90","106",null,null,null,null,null,null,this.div_work.form.div_memPhoto_06.form);
            obj.set_taborder("3");
            this.div_work.form.div_memPhoto_06.addChild(obj.name, obj);

            obj = new Static("Static00","103","45","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_06.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("성명");
            obj.set_tooltiptext("성명");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_06.addChild(obj.name, obj);

            obj = new Static("Static00_00","103","67","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_06.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("직책");
            obj.set_tooltiptext("직책");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_06.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","103","89","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_06.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("호칭");
            obj.set_tooltiptext("호칭");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_06.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","103","111","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_06.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("직무");
            obj.set_tooltiptext("직무");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_06.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","103","133","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_06.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("부서일");
            obj.set_tooltiptext("부서일");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_06.addChild(obj.name, obj);

            obj = new Edit("edt_00_00","183","45","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_06.form);
            obj.set_taborder("9");
            obj.set_cssclass("display");
            obj.set_text("이팀장");
            this.div_work.form.div_memPhoto_06.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00","183","67","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_06.form);
            obj.set_taborder("10");
            obj.set_cssclass("display");
            obj.set_text("팀장");
            this.div_work.form.div_memPhoto_06.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00","183","89","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_06.form);
            obj.set_taborder("11");
            obj.set_cssclass("display");
            obj.set_text("차장");
            this.div_work.form.div_memPhoto_06.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00","183","111","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_06.form);
            obj.set_taborder("12");
            obj.set_cssclass("display");
            obj.set_text("인사총괄");
            this.div_work.form.div_memPhoto_06.addChild(obj.name, obj);

            obj = new Calendar("cal_00","183","133","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_06.form);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("display");
            this.div_work.form.div_memPhoto_06.addChild(obj.name, obj);

            obj = new Div("div_memPhoto_08","0","382","295","169",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("8");
            obj.set_formscrollbarbarminsize("0");
            obj.set_formscrollbarbaroutsize("0");
            obj.set_formscrollbardecbuttonsize("0");
            obj.set_formscrollbarincbuttonsize("0");
            obj.set_formscrollbarsize("0");
            obj.set_formscrollbartrackbarsize("0");
            obj.set_formscrollindicatorsize("0");
            obj.set_cssclass("div_memPhoto");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_00","0","32","295","1",null,null,null,null,null,null,this.div_work.form.div_memPhoto_08.form);
            obj.set_taborder("0");
            obj.set_border("0px none,0px none,1px solid #cccccc");
            this.div_work.form.div_memPhoto_08.addChild(obj.name, obj);

            obj = new Edit("edt_00","6","6","213","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_08.form);
            obj.set_taborder("1");
            obj.set_cssclass("display");
            obj.set_text("부서 명칭");
            this.div_work.form.div_memPhoto_08.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"6","60","20","10",null,null,null,null,null,this.div_work.form.div_memPhoto_08.form);
            obj.set_taborder("2");
            obj.set_text("Staff");
            obj.set_tooltiptext("부서찾기");
            this.div_work.form.div_memPhoto_08.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer_00","10","46","90","106",null,null,null,null,null,null,this.div_work.form.div_memPhoto_08.form);
            obj.set_taborder("3");
            this.div_work.form.div_memPhoto_08.addChild(obj.name, obj);

            obj = new Static("Static00","103","45","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_08.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("성명");
            obj.set_tooltiptext("성명");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_08.addChild(obj.name, obj);

            obj = new Static("Static00_00","103","67","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_08.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("직책");
            obj.set_tooltiptext("직책");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_08.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","103","89","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_08.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("호칭");
            obj.set_tooltiptext("호칭");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_08.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","103","111","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_08.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("직무");
            obj.set_tooltiptext("직무");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_08.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","103","133","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_08.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("부서일");
            obj.set_tooltiptext("부서일");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_08.addChild(obj.name, obj);

            obj = new Edit("edt_00_00","183","45","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_08.form);
            obj.set_taborder("9");
            obj.set_cssclass("display");
            obj.set_text("이팀장");
            this.div_work.form.div_memPhoto_08.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00","183","67","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_08.form);
            obj.set_taborder("10");
            obj.set_cssclass("display");
            obj.set_text("팀장");
            this.div_work.form.div_memPhoto_08.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00","183","89","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_08.form);
            obj.set_taborder("11");
            obj.set_cssclass("display");
            obj.set_text("차장");
            this.div_work.form.div_memPhoto_08.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00","183","111","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_08.form);
            obj.set_taborder("12");
            obj.set_cssclass("display");
            obj.set_text("인사총괄");
            this.div_work.form.div_memPhoto_08.addChild(obj.name, obj);

            obj = new Calendar("cal_00","183","133","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_08.form);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("display");
            this.div_work.form.div_memPhoto_08.addChild(obj.name, obj);

            obj = new Div("div_memPhoto_09","305","382","295","169",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("9");
            obj.set_formscrollbarbarminsize("0");
            obj.set_formscrollbarbaroutsize("0");
            obj.set_formscrollbardecbuttonsize("0");
            obj.set_formscrollbarincbuttonsize("0");
            obj.set_formscrollbarsize("0");
            obj.set_formscrollbartrackbarsize("0");
            obj.set_formscrollindicatorsize("0");
            obj.set_cssclass("div_memPhoto");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_00","0","32","295","1",null,null,null,null,null,null,this.div_work.form.div_memPhoto_09.form);
            obj.set_taborder("0");
            obj.set_border("0px none,0px none,1px solid #cccccc");
            this.div_work.form.div_memPhoto_09.addChild(obj.name, obj);

            obj = new Edit("edt_00","6","6","213","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_09.form);
            obj.set_taborder("1");
            obj.set_cssclass("display");
            obj.set_text("부서 명칭");
            this.div_work.form.div_memPhoto_09.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"6","60","20","10",null,null,null,null,null,this.div_work.form.div_memPhoto_09.form);
            obj.set_taborder("2");
            obj.set_text("Staff");
            obj.set_tooltiptext("부서찾기");
            this.div_work.form.div_memPhoto_09.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer_00","10","46","90","106",null,null,null,null,null,null,this.div_work.form.div_memPhoto_09.form);
            obj.set_taborder("3");
            this.div_work.form.div_memPhoto_09.addChild(obj.name, obj);

            obj = new Static("Static00","103","45","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_09.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("성명");
            obj.set_tooltiptext("성명");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_09.addChild(obj.name, obj);

            obj = new Static("Static00_00","103","67","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_09.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("직책");
            obj.set_tooltiptext("직책");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_09.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","103","89","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_09.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("호칭");
            obj.set_tooltiptext("호칭");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_09.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","103","111","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_09.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("직무");
            obj.set_tooltiptext("직무");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_09.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","103","133","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_09.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("부서일");
            obj.set_tooltiptext("부서일");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_09.addChild(obj.name, obj);

            obj = new Edit("edt_00_00","183","45","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_09.form);
            obj.set_taborder("9");
            obj.set_cssclass("display");
            obj.set_text("이팀장");
            this.div_work.form.div_memPhoto_09.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00","183","67","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_09.form);
            obj.set_taborder("10");
            obj.set_cssclass("display");
            obj.set_text("팀장");
            this.div_work.form.div_memPhoto_09.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00","183","89","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_09.form);
            obj.set_taborder("11");
            obj.set_cssclass("display");
            obj.set_text("차장");
            this.div_work.form.div_memPhoto_09.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00","183","111","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_09.form);
            obj.set_taborder("12");
            obj.set_cssclass("display");
            obj.set_text("인사총괄");
            this.div_work.form.div_memPhoto_09.addChild(obj.name, obj);

            obj = new Calendar("cal_00","183","133","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_09.form);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("display");
            this.div_work.form.div_memPhoto_09.addChild(obj.name, obj);

            obj = new Div("div_memPhoto_10","610","382","295","169",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("10");
            obj.set_formscrollbarbarminsize("0");
            obj.set_formscrollbarbaroutsize("0");
            obj.set_formscrollbardecbuttonsize("0");
            obj.set_formscrollbarincbuttonsize("0");
            obj.set_formscrollbarsize("0");
            obj.set_formscrollbartrackbarsize("0");
            obj.set_formscrollindicatorsize("0");
            obj.set_cssclass("div_memPhoto");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_00","0","32","295","1",null,null,null,null,null,null,this.div_work.form.div_memPhoto_10.form);
            obj.set_taborder("0");
            obj.set_border("0px none,0px none,1px solid #cccccc");
            this.div_work.form.div_memPhoto_10.addChild(obj.name, obj);

            obj = new Edit("edt_00","6","6","213","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_10.form);
            obj.set_taborder("1");
            obj.set_cssclass("display");
            obj.set_text("부서 명칭");
            this.div_work.form.div_memPhoto_10.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"6","60","20","10",null,null,null,null,null,this.div_work.form.div_memPhoto_10.form);
            obj.set_taborder("2");
            obj.set_text("Staff");
            obj.set_tooltiptext("부서찾기");
            this.div_work.form.div_memPhoto_10.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer_00","10","46","90","106",null,null,null,null,null,null,this.div_work.form.div_memPhoto_10.form);
            obj.set_taborder("3");
            this.div_work.form.div_memPhoto_10.addChild(obj.name, obj);

            obj = new Static("Static00","103","45","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_10.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("성명");
            obj.set_tooltiptext("성명");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_10.addChild(obj.name, obj);

            obj = new Static("Static00_00","103","67","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_10.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("직책");
            obj.set_tooltiptext("직책");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_10.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","103","89","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_10.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("호칭");
            obj.set_tooltiptext("호칭");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_10.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","103","111","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_10.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("직무");
            obj.set_tooltiptext("직무");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_10.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","103","133","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_10.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("부서일");
            obj.set_tooltiptext("부서일");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_10.addChild(obj.name, obj);

            obj = new Edit("edt_00_00","183","45","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_10.form);
            obj.set_taborder("9");
            obj.set_cssclass("display");
            obj.set_text("이팀장");
            this.div_work.form.div_memPhoto_10.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00","183","67","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_10.form);
            obj.set_taborder("10");
            obj.set_cssclass("display");
            obj.set_text("팀장");
            this.div_work.form.div_memPhoto_10.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00","183","89","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_10.form);
            obj.set_taborder("11");
            obj.set_cssclass("display");
            obj.set_text("차장");
            this.div_work.form.div_memPhoto_10.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00","183","111","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_10.form);
            obj.set_taborder("12");
            obj.set_cssclass("display");
            obj.set_text("인사총괄");
            this.div_work.form.div_memPhoto_10.addChild(obj.name, obj);

            obj = new Calendar("cal_00","183","133","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_10.form);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("display");
            this.div_work.form.div_memPhoto_10.addChild(obj.name, obj);

            obj = new Div("div_memPhoto_03","915","34","295","169",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_formscrollbarbarminsize("0");
            obj.set_formscrollbarbaroutsize("0");
            obj.set_formscrollbardecbuttonsize("0");
            obj.set_formscrollbarincbuttonsize("0");
            obj.set_formscrollbarsize("0");
            obj.set_formscrollbartrackbarsize("0");
            obj.set_formscrollindicatorsize("0");
            obj.set_cssclass("div_memPhoto");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_00","0","32","295","1",null,null,null,null,null,null,this.div_work.form.div_memPhoto_03.form);
            obj.set_taborder("0");
            obj.set_border("0px none,0px none,1px solid #cccccc");
            this.div_work.form.div_memPhoto_03.addChild(obj.name, obj);

            obj = new Edit("edt_00","6","6","213","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_03.form);
            obj.set_taborder("1");
            obj.set_cssclass("display");
            obj.set_text("부서 명칭");
            this.div_work.form.div_memPhoto_03.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"6","60","20","10",null,null,null,null,null,this.div_work.form.div_memPhoto_03.form);
            obj.set_taborder("2");
            obj.set_text("Staff");
            obj.set_tooltiptext("부서찾기");
            this.div_work.form.div_memPhoto_03.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer_00","10","46","90","106",null,null,null,null,null,null,this.div_work.form.div_memPhoto_03.form);
            obj.set_taborder("3");
            this.div_work.form.div_memPhoto_03.addChild(obj.name, obj);

            obj = new Static("Static00","103","45","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_03.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("성명");
            obj.set_tooltiptext("성명");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_03.addChild(obj.name, obj);

            obj = new Static("Static00_00","103","67","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_03.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("직책");
            obj.set_tooltiptext("직책");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_03.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","103","89","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_03.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("호칭");
            obj.set_tooltiptext("호칭");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_03.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","103","111","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_03.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("직무");
            obj.set_tooltiptext("직무");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_03.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","103","133","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_03.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("부서일");
            obj.set_tooltiptext("부서일");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_03.addChild(obj.name, obj);

            obj = new Edit("edt_00_00","183","45","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_03.form);
            obj.set_taborder("9");
            obj.set_cssclass("display");
            obj.set_text("이팀장");
            this.div_work.form.div_memPhoto_03.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00","183","67","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_03.form);
            obj.set_taborder("10");
            obj.set_cssclass("display");
            obj.set_text("팀장");
            this.div_work.form.div_memPhoto_03.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00","183","89","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_03.form);
            obj.set_taborder("11");
            obj.set_cssclass("display");
            obj.set_text("차장");
            this.div_work.form.div_memPhoto_03.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00","183","111","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_03.form);
            obj.set_taborder("12");
            obj.set_cssclass("display");
            obj.set_text("인사총괄");
            this.div_work.form.div_memPhoto_03.addChild(obj.name, obj);

            obj = new Calendar("cal_00","183","133","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_03.form);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("display");
            this.div_work.form.div_memPhoto_03.addChild(obj.name, obj);

            obj = new Div("div_memPhoto_07","915","208","295","169",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("7");
            obj.set_formscrollbarbarminsize("0");
            obj.set_formscrollbarbaroutsize("0");
            obj.set_formscrollbardecbuttonsize("0");
            obj.set_formscrollbarincbuttonsize("0");
            obj.set_formscrollbarsize("0");
            obj.set_formscrollbartrackbarsize("0");
            obj.set_formscrollindicatorsize("0");
            obj.set_cssclass("div_memPhoto");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_00","0","32","295","1",null,null,null,null,null,null,this.div_work.form.div_memPhoto_07.form);
            obj.set_taborder("0");
            obj.set_border("0px none,0px none,1px solid #cccccc");
            this.div_work.form.div_memPhoto_07.addChild(obj.name, obj);

            obj = new Edit("edt_00","6","6","213","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_07.form);
            obj.set_taborder("1");
            obj.set_cssclass("display");
            obj.set_text("부서 명칭");
            this.div_work.form.div_memPhoto_07.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"6","60","20","10",null,null,null,null,null,this.div_work.form.div_memPhoto_07.form);
            obj.set_taborder("2");
            obj.set_text("Staff");
            obj.set_tooltiptext("부서찾기");
            this.div_work.form.div_memPhoto_07.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer_00","10","46","90","106",null,null,null,null,null,null,this.div_work.form.div_memPhoto_07.form);
            obj.set_taborder("3");
            this.div_work.form.div_memPhoto_07.addChild(obj.name, obj);

            obj = new Static("Static00","103","45","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_07.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("성명");
            obj.set_tooltiptext("성명");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_07.addChild(obj.name, obj);

            obj = new Static("Static00_00","103","67","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_07.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("직책");
            obj.set_tooltiptext("직책");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_07.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","103","89","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_07.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("호칭");
            obj.set_tooltiptext("호칭");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_07.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","103","111","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_07.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("직무");
            obj.set_tooltiptext("직무");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_07.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","103","133","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_07.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("부서일");
            obj.set_tooltiptext("부서일");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_07.addChild(obj.name, obj);

            obj = new Edit("edt_00_00","183","45","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_07.form);
            obj.set_taborder("9");
            obj.set_cssclass("display");
            obj.set_text("이팀장");
            this.div_work.form.div_memPhoto_07.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00","183","67","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_07.form);
            obj.set_taborder("10");
            obj.set_cssclass("display");
            obj.set_text("팀장");
            this.div_work.form.div_memPhoto_07.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00","183","89","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_07.form);
            obj.set_taborder("11");
            obj.set_cssclass("display");
            obj.set_text("차장");
            this.div_work.form.div_memPhoto_07.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00","183","111","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_07.form);
            obj.set_taborder("12");
            obj.set_cssclass("display");
            obj.set_text("인사총괄");
            this.div_work.form.div_memPhoto_07.addChild(obj.name, obj);

            obj = new Calendar("cal_00","183","133","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_07.form);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("display");
            this.div_work.form.div_memPhoto_07.addChild(obj.name, obj);

            obj = new Div("div_memPhoto_11","915","382","295","169",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("11");
            obj.set_formscrollbarbarminsize("0");
            obj.set_formscrollbarbaroutsize("0");
            obj.set_formscrollbardecbuttonsize("0");
            obj.set_formscrollbarincbuttonsize("0");
            obj.set_formscrollbarsize("0");
            obj.set_formscrollbartrackbarsize("0");
            obj.set_formscrollindicatorsize("0");
            obj.set_cssclass("div_memPhoto");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_00","0","32","295","1",null,null,null,null,null,null,this.div_work.form.div_memPhoto_11.form);
            obj.set_taborder("0");
            obj.set_border("0px none,0px none,1px solid #cccccc");
            this.div_work.form.div_memPhoto_11.addChild(obj.name, obj);

            obj = new Edit("edt_00","6","6","213","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_11.form);
            obj.set_taborder("1");
            obj.set_cssclass("display");
            obj.set_text("부서 명칭");
            this.div_work.form.div_memPhoto_11.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"6","60","20","10",null,null,null,null,null,this.div_work.form.div_memPhoto_11.form);
            obj.set_taborder("2");
            obj.set_text("Staff");
            obj.set_tooltiptext("부서찾기");
            this.div_work.form.div_memPhoto_11.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer_00","10","46","90","106",null,null,null,null,null,null,this.div_work.form.div_memPhoto_11.form);
            obj.set_taborder("3");
            this.div_work.form.div_memPhoto_11.addChild(obj.name, obj);

            obj = new Static("Static00","103","45","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_11.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("성명");
            obj.set_tooltiptext("성명");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_11.addChild(obj.name, obj);

            obj = new Static("Static00_00","103","67","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_11.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("직책");
            obj.set_tooltiptext("직책");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_11.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","103","89","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_11.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("호칭");
            obj.set_tooltiptext("호칭");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_11.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","103","111","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_11.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("직무");
            obj.set_tooltiptext("직무");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_11.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","103","133","70","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_11.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("부서일");
            obj.set_tooltiptext("부서일");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.div_memPhoto_11.addChild(obj.name, obj);

            obj = new Edit("edt_00_00","183","45","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_11.form);
            obj.set_taborder("9");
            obj.set_cssclass("display");
            obj.set_text("이팀장");
            this.div_work.form.div_memPhoto_11.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00","183","67","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_11.form);
            obj.set_taborder("10");
            obj.set_cssclass("display");
            obj.set_text("팀장");
            this.div_work.form.div_memPhoto_11.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00","183","89","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_11.form);
            obj.set_taborder("11");
            obj.set_cssclass("display");
            obj.set_text("차장");
            this.div_work.form.div_memPhoto_11.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00","183","111","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_11.form);
            obj.set_taborder("12");
            obj.set_cssclass("display");
            obj.set_text("인사총괄");
            this.div_work.form.div_memPhoto_11.addChild(obj.name, obj);

            obj = new Calendar("cal_00","183","133","100","20",null,null,null,null,null,null,this.div_work.form.div_memPhoto_11.form);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("display");
            this.div_work.form.div_memPhoto_11.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,757,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("HRA90210M.xfdl", function() {

        this.Static00_00_00_00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_00.form.div_subTitle.form.Static30.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_00.form.div_subTitle.form.edt_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_00.form.div_subTitle.form.btn_cancel.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.div_00.form.div_subTitle.form.btn_cancel00.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.div_topPhoto.form.btn_cancel.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.div_topPhoto.form.Static00_00_00_00.addEventHandler("onclick",this.Static00_00_00_00_onclick,this);
            this.div_topPhoto.form.edt_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_topPhoto.form.edt_00_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_topPhoto.form.edt_00_00_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_topPhoto.form.edt_00_00_00_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_memPhoto_00.form.btn_cancel.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.div_work.form.div_memPhoto_00.form.Static00_00_00_00.addEventHandler("onclick",this.Static00_00_00_00_onclick,this);
            this.div_work.form.div_memPhoto_00.form.edt_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_memPhoto_00.form.edt_00_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_memPhoto_00.form.edt_00_00_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_memPhoto_00.form.edt_00_00_00_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_memPhoto_01.form.btn_cancel.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.div_work.form.div_memPhoto_01.form.Static00_00_00_00.addEventHandler("onclick",this.Static00_00_00_00_onclick,this);
            this.div_work.form.div_memPhoto_01.form.edt_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_memPhoto_01.form.edt_00_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_memPhoto_01.form.edt_00_00_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_memPhoto_01.form.edt_00_00_00_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_memPhoto_02.form.btn_cancel.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.div_work.form.div_memPhoto_02.form.Static00_00_00_00.addEventHandler("onclick",this.Static00_00_00_00_onclick,this);
            this.div_work.form.div_memPhoto_02.form.edt_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_memPhoto_02.form.edt_00_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_memPhoto_02.form.edt_00_00_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_memPhoto_02.form.edt_00_00_00_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_memPhoto_04.form.btn_cancel.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.div_work.form.div_memPhoto_04.form.Static00_00_00_00.addEventHandler("onclick",this.Static00_00_00_00_onclick,this);
            this.div_work.form.div_memPhoto_04.form.edt_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_memPhoto_04.form.edt_00_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_memPhoto_04.form.edt_00_00_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_memPhoto_04.form.edt_00_00_00_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_memPhoto_05.form.btn_cancel.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.div_work.form.div_memPhoto_05.form.Static00_00_00_00.addEventHandler("onclick",this.Static00_00_00_00_onclick,this);
            this.div_work.form.div_memPhoto_05.form.edt_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_memPhoto_05.form.edt_00_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_memPhoto_05.form.edt_00_00_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_memPhoto_05.form.edt_00_00_00_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_memPhoto_06.form.btn_cancel.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.div_work.form.div_memPhoto_06.form.Static00_00_00_00.addEventHandler("onclick",this.Static00_00_00_00_onclick,this);
            this.div_work.form.div_memPhoto_06.form.edt_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_memPhoto_06.form.edt_00_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_memPhoto_06.form.edt_00_00_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_memPhoto_06.form.edt_00_00_00_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_memPhoto_08.form.btn_cancel.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.div_work.form.div_memPhoto_08.form.Static00_00_00_00.addEventHandler("onclick",this.Static00_00_00_00_onclick,this);
            this.div_work.form.div_memPhoto_08.form.edt_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_memPhoto_08.form.edt_00_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_memPhoto_08.form.edt_00_00_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_memPhoto_08.form.edt_00_00_00_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_memPhoto_09.form.btn_cancel.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.div_work.form.div_memPhoto_09.form.Static00_00_00_00.addEventHandler("onclick",this.Static00_00_00_00_onclick,this);
            this.div_work.form.div_memPhoto_09.form.edt_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_memPhoto_09.form.edt_00_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_memPhoto_09.form.edt_00_00_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_memPhoto_09.form.edt_00_00_00_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_memPhoto_10.form.btn_cancel.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.div_work.form.div_memPhoto_10.form.Static00_00_00_00.addEventHandler("onclick",this.Static00_00_00_00_onclick,this);
            this.div_work.form.div_memPhoto_10.form.edt_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_memPhoto_10.form.edt_00_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_memPhoto_10.form.edt_00_00_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_memPhoto_10.form.edt_00_00_00_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_memPhoto_03.form.btn_cancel.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.div_work.form.div_memPhoto_03.form.Static00_00_00_00.addEventHandler("onclick",this.Static00_00_00_00_onclick,this);
            this.div_work.form.div_memPhoto_03.form.edt_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_memPhoto_03.form.edt_00_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_memPhoto_03.form.edt_00_00_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_memPhoto_03.form.edt_00_00_00_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_memPhoto_07.form.btn_cancel.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.div_work.form.div_memPhoto_07.form.Static00_00_00_00.addEventHandler("onclick",this.Static00_00_00_00_onclick,this);
            this.div_work.form.div_memPhoto_07.form.edt_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_memPhoto_07.form.edt_00_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_memPhoto_07.form.edt_00_00_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_memPhoto_07.form.edt_00_00_00_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_memPhoto_11.form.btn_cancel.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.div_work.form.div_memPhoto_11.form.Static00_00_00_00.addEventHandler("onclick",this.Static00_00_00_00_onclick,this);
            this.div_work.form.div_memPhoto_11.form.edt_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_memPhoto_11.form.edt_00_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_memPhoto_11.form.edt_00_00_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_memPhoto_11.form.edt_00_00_00_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
        };
        this.loadIncludeScript("HRA90210M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
