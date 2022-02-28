(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PopUp_0044");
            this.set_titletext("도움말");
            this.set_cssclass("form_PopupBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(770,558);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"헤더명01\" type=\"STRING\" size=\"256\"/><Column id=\"헤더명02\" type=\"STRING\" size=\"256\"/><Column id=\"헤더명03\" type=\"STRING\" size=\"256\"/><Column id=\"헤더명04\" type=\"STRING\" size=\"256\"/><Column id=\"헤더명05\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"헤더명01\">텍스트</Col><Col id=\"헤더명02\">텍스트</Col><Col id=\"헤더명03\">텍스트</Col><Col id=\"헤더명04\">텍스트</Col><Col id=\"헤더명05\">텍스트</Col></Row><Row><Col id=\"헤더명05\">텍스트</Col><Col id=\"헤더명04\">텍스트</Col><Col id=\"헤더명03\">텍스트</Col><Col id=\"헤더명02\">텍스트</Col><Col id=\"헤더명01\">텍스트</Col></Row><Row><Col id=\"헤더명05\">텍스트</Col><Col id=\"헤더명04\">텍스트</Col><Col id=\"헤더명03\">텍스트</Col><Col id=\"헤더명02\">텍스트</Col><Col id=\"헤더명01\">텍스트</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"lev\" type=\"STRING\" size=\"256\"/><Column id=\"txt\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"lev\">0</Col><Col id=\"txt\">예산</Col></Row><Row><Col id=\"lev\">1</Col><Col id=\"txt\">사업관리</Col></Row><Row><Col id=\"lev\">2</Col><Col id=\"txt\">사업정보관리</Col></Row><Row><Col id=\"lev\">2</Col><Col id=\"txt\">사업등록및정보수정</Col></Row><Row><Col id=\"lev\">2</Col><Col id=\"txt\">프로그램조회</Col></Row><Row><Col id=\"lev\">2</Col><Col id=\"txt\">단위사업조회</Col></Row><Row><Col id=\"lev\">0</Col><Col id=\"txt\">세출</Col></Row><Row><Col id=\"txt\">지출인원행위</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"txt\">지출인원행위</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"txt\">예산</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"txt\">사업관리</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"txt\">사업정보관리</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"lev\">2</Col><Col id=\"txt\">사업등록및정보수정</Col></Row><Row><Col id=\"lev\">2</Col><Col id=\"txt\">프로그램조회</Col></Row><Row><Col id=\"lev\">2</Col><Col id=\"txt\">단위사업조회</Col></Row><Row><Col id=\"lev\">0</Col><Col id=\"txt\">세출</Col></Row><Row><Col id=\"lev\">0</Col><Col id=\"txt\">예산</Col></Row><Row><Col id=\"lev\">1</Col><Col id=\"txt\">사업관리</Col></Row><Row><Col id=\"lev\">2</Col><Col id=\"txt\">사업정보관리</Col></Row><Row><Col id=\"lev\">2</Col><Col id=\"txt\">사업등록및정보수정</Col></Row><Row><Col id=\"lev\">2</Col><Col id=\"txt\">프로그램조회</Col></Row><Row><Col id=\"lev\">2</Col><Col id=\"txt\">단위사업조회</Col></Row><Row><Col id=\"lev\">0</Col><Col id=\"txt\">세출</Col></Row><Row><Col id=\"lev\">1</Col><Col id=\"txt\">지출인원행위</Col></Row><Row><Col id=\"lev\">1</Col><Col id=\"txt\">지출인원행위</Col></Row><Row><Col id=\"lev\">0</Col><Col id=\"txt\">예산</Col></Row><Row><Col id=\"lev\">1</Col><Col id=\"txt\">사업관리</Col></Row><Row><Col id=\"lev\">2</Col><Col id=\"txt\">사업정보관리</Col></Row><Row><Col id=\"lev\">2</Col><Col id=\"txt\">사업등록및정보수정</Col></Row><Row><Col id=\"lev\">2</Col><Col id=\"txt\">프로그램조회</Col></Row><Row><Col id=\"lev\">2</Col><Col id=\"txt\">단위사업조회</Col></Row><Row><Col id=\"lev\">0</Col><Col id=\"txt\">세출</Col></Row><Row><Col id=\"lev\">1</Col><Col id=\"txt\">지출인원행위</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static10","245","3","512","15",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","245","33","512","15",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","245","44","197","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("소 타이틀");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","245","60","126","10",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","232","-8","13","576",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("13");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","756","-8","15","576",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","245","65","61","21",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("항목명");
            obj.set_cssclass("sta_WF_Item");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","301","65","263","21",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text(": 텍스트가 나오는곳입니다.");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","245","81","126","10",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","245","86","197","21",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("항목명");
            obj.set_cssclass("sta_WF_Item");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","245","141","126","10",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","255","105","493","21",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("텍스트가 나오는곳입니다.");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","255","126","493","21",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("텍스트가 나오는곳입니다.");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","245","151","510","130",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("ImageViewer00");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","438","281","124","21",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("<b v=\'true\'>[그림]</b> 이미지 이름");
            obj.set_usedecorate("true");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","245","336","511","119",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"102\"/><Column size=\"102\"/><Column size=\"102\"/><Column size=\"102\"/><Column size=\"102\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"29\"/></Rows><Band id=\"head\"><Cell text=\"헤더명01\"/><Cell col=\"1\" text=\"헤더명02\"/><Cell col=\"2\" text=\"헤더명03\"/><Cell col=\"3\" text=\"헤더명04\"/><Cell col=\"4\" text=\"헤더명05\"/></Band><Band id=\"body\"><Cell text=\"bind:헤더명01\"/><Cell col=\"1\" text=\"bind:헤더명02\"/><Cell col=\"2\" text=\"bind:헤더명03\"/><Cell col=\"3\" text=\"bind:헤더명04\"/><Cell col=\"4\" text=\"bind:헤더명05\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","437","296","126","15",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","438","456","124","21",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("<b v=\'true\'>[그림]</b> 이미지 이름");
            obj.set_usedecorate("true");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","437","280","126","5",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","447","471","105","10",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","246","481","509","29",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("텍스트가 나오는곳입니다. 텍스트가 나오는곳입니다. 텍스트가 나오는곳입니다.\r\n텍스트가 나오는곳입니다.");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","245","546","512","12",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("12");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","245","102","126","8",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("8");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","245","311","197","20",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("소 타이틀");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","244","326","126","10",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("Button78","716","525","40","21",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_basic");
            this.addChild(obj.name, obj);

            obj = new Button("Button77","673","525","40","21",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_basic");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","245","510","512","15",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","247","11","648","24",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("<fc v=\'#cccccc\'>></fc> 메뉴명 <fc v=\'#cccccc\'>></fc> 메뉴명 <fc v=\'#cccccc\'>></fc> <b v=\'true\'>메뉴명</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Local");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","2","3","230","77",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","54","44","100","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_font("9pt \"Dotum\"");
            var Div00_form_Combo00_innerdataset = new nexacro.NormalDataset("Div00_form_Combo00_innerdataset", obj);
            Div00_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">선택</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Combo00_innerdataset);
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static23","14","44","38","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static08","15","12","86","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("도움말");
            obj.set_cssclass("sta_WF_helpTitle");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","14","29","126","15",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","14","0","126","15",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button16","159","44","58","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("조회");
            obj.set_cssclass("btn_CRUD_Search");
            obj.set_font("bold 9pt \"Dotum\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","2","503","230","53",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","94","36","126","15",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","94","0","126","15",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button75","117","15","40","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_basic");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button73","74","15","40","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_basic");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button17","160","15","58","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_text("삭제");
            obj.set_cssclass("btn_CRUD_Delete");
            obj.set_font("bold 9pt \"Dotum\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid02","17","80","215","420",null,null,null,null,null,null,this);
            obj.set_cssclass("grd_WF_Tree");
            obj.set_taborder("38");
            obj.set_binddataset("Dataset01");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"204\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" text=\"bind:txt\" treelevel=\"bind:lev\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","2","16","15","309",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","231","3","1","553",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("Static27");
            obj.set_background("rgba(175,175,175,1)");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","747","0","23","23",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_cssclass("btn_POP_Close");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",770,558,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PopUpMD_003.xfdl", function() {

        this.Static21_onclick = function (obj, e)
        {
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static12.addEventHandler("onclick",this.Static12_onclick,this);
            this.Static07.addEventHandler("onclick",this.Static12_onclick,this);
            this.Static11.addEventHandler("onclick",this.Static12_onclick,this);
            this.Static17.addEventHandler("onclick",this.Static12_onclick,this);
            this.Static19.addEventHandler("onclick",this.Static12_onclick,this);
            this.Static20.addEventHandler("onclick",this.Static12_onclick,this);
            this.Static21.addEventHandler("onclick",this.Static21_onclick,this);
            this.Static23.addEventHandler("onclick",this.Static12_onclick,this);
            this.Static01.addEventHandler("onclick",this.Static12_onclick,this);
            this.Static22.addEventHandler("onclick",this.Static12_onclick,this);
            this.Static24.addEventHandler("onclick",this.Static12_onclick,this);
            this.Static25.addEventHandler("onclick",this.Static10_onclick,this);
            this.Div00.form.Static00.addEventHandler("onclick",this.Static12_onclick,this);
            this.Div00.form.Static01.addEventHandler("onclick",this.Static12_onclick,this);
            this.Div01.form.Static00.addEventHandler("onclick",this.Static12_onclick,this);
            this.Div01.form.Static01.addEventHandler("onclick",this.Static12_onclick,this);
        };
        this.loadIncludeScript("PopUpMD_003.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
