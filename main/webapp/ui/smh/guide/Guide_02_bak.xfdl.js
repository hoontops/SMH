(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Guide1");
            this.set_titletext("Button");
            if (Form == this.constructor)
            {
                this._setFormPosition(1140,1681);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Data", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Int\" type=\"STRING\" size=\"256\"/><Column id=\"Clm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Int\">1</Col><Col id=\"Clm\">A</Col></Row><Row><Col id=\"Int\">2</Col><Col id=\"Clm\">B</Col></Row><Row><Col id=\"Int\">3</Col><Col id=\"Clm\">C</Col></Row><Row><Col id=\"Int\">4</Col><Col id=\"Clm\">D</Col></Row><Row><Col id=\"Int\">5</Col><Col id=\"Clm\">E</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","125","247",null,"1","0",null,null,null,null,null,this);
            obj.set_taborder("155");
            obj.set_border("1px solid rgba(206,213,223,1), 0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","0","29","125","219",null,null,null,null,null,null,this);
            obj.set_taborder("156");
            obj.set_text("CRUD Button");
            obj.set_background("rgba(127,127,127,1)");
            obj.set_border("1px solid rgba(206,213,223,1)");
            obj.set_color("rgba(255,255,255,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","0","0","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("157");
            obj.set_text("Component Name");
            obj.set_background("rgba(51,51,51,1)");
            obj.set_border("1px solid rgba(207,215,223,1)");
            obj.set_color("rgba(255,255,255,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","124","0",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("158");
            obj.set_text("Component View");
            obj.set_background("rgba(51,51,51,1)");
            obj.set_border("1px solid rgba(207,215,223,1)");
            obj.set_color("rgba(255,255,255,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","503","832","40","21",null,null,null,null,null,null,this);
            obj.set_taborder("162");
            obj.set_text("등록");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_basic");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","320","804","40","21",null,null,null,null,null,null,this);
            obj.set_taborder("164");
            obj.set_text("가나");
            obj.set_cssclass("btn_WF_basic");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","320","829","52","21",null,null,null,null,null,null,this);
            obj.set_taborder("165");
            obj.set_text("가나다");
            obj.set_cssclass("btn_WF_basic");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","320","855","64","21",null,null,null,null,null,null,this);
            obj.set_taborder("166");
            obj.set_text("가나다라");
            obj.set_cssclass("btn_WF_basic");
            this.addChild(obj.name, obj);

            obj = new Button("Button06","320","880","76","21",null,null,null,null,null,null,this);
            obj.set_taborder("167");
            obj.set_text("가나다라마");
            obj.set_cssclass("btn_WF_basic");
            this.addChild(obj.name, obj);

            obj = new Static("Static38","143","730","445","32",null,null,null,null,null,null,this);
            obj.set_taborder("168");
            obj.set_text("* 최소 2글자부터 시작하며 한글자가 늘어날 때마다 버튼 width가 12px씩 증가");
            obj.set_cssclass("sta_WF_Info_Orange");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","125","448",null,"1","0",null,null,null,null,null,this);
            obj.set_taborder("169");
            obj.set_border("1px solid rgba(206,213,223,1), 0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","0","247","125","203",null,null,null,null,null,null,this);
            obj.set_taborder("170");
            obj.set_text("File Button ");
            obj.set_background("rgba(127,127,127,1)");
            obj.set_border("1px solid rgba(206,213,223,1)");
            obj.set_color("rgba(255,255,255,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","124","721",null,"1","1",null,null,null,null,null,this);
            obj.set_taborder("181");
            obj.set_border("1px solid rgba(206,213,223,1), 0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","1","448","124","277",null,null,null,null,null,null,this);
            obj.set_taborder("182");
            obj.set_text("Grid Control Button");
            obj.set_background("rgba(127,127,127,1)");
            obj.set_border("1px solid rgba(206,213,223,1)");
            obj.set_color("rgba(255,255,255,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","142","94","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("183");
            obj.set_text("기본가이드");
            obj.set_color("black");
            obj.set_font("8pt \"Tahoma\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","318","94","122","20",null,null,null,null,null,null,this);
            obj.set_taborder("184");
            obj.set_text("활용예시");
            obj.set_color("black");
            obj.set_font("8pt \"Tahoma\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","142","41","878","46",null,null,null,null,null,null,this);
            obj.set_taborder("191");
            obj.set_text("* 기본사이즈는 3글자(58), 최소 2글자부터 시작하며 한글자가 늘어날 때마다 버튼 width가 16px씩 증가");
            obj.set_cssclass("sta_WF_Info_Orange");
            this.addChild(obj.name, obj);

            obj = new Static("Static32","498","94","122","20",null,null,null,null,null,null,this);
            obj.set_taborder("192");
            obj.set_text("Pseudo Guide");
            obj.set_color("black");
            obj.set_font("8pt \"Tahoma\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static35","1","722","124","347",null,null,null,null,null,null,this);
            obj.set_taborder("199");
            obj.set_text("etc. Button");
            obj.set_background("rgba(127,127,127,1)");
            obj.set_border("1px solid rgba(206,213,223,1)");
            obj.set_color("rgba(255,255,255,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static36","142","1421","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("200");
            obj.set_text("enabled");
            obj.set_color("black");
            obj.set_font("8pt \"Tahoma\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static37","124","1069",null,"1","2",null,null,null,null,null,this);
            obj.set_taborder("201");
            obj.set_border("1px solid rgba(206,213,223,1), 0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Button("Button23","138","1445","21","22",null,null,null,null,null,null,this);
            obj.set_taborder("202");
            obj.set_cssclass("btn_WF_PagePP");
            this.addChild(obj.name, obj);

            obj = new Button("Button24","158","1445","21","22",null,null,null,null,null,null,this);
            obj.set_taborder("203");
            obj.set_cssclass("btn_WF_PageP");
            this.addChild(obj.name, obj);

            obj = new Button("Button25","314","1445","23","22",null,null,null,null,null,null,this);
            obj.set_taborder("204");
            obj.set_cssclass("btn_WF_PageNN");
            this.addChild(obj.name, obj);

            obj = new Button("Button26","295","1445","21","22",null,null,null,null,null,null,this);
            obj.set_taborder("205");
            obj.set_cssclass("btn_WF_PageN");
            this.addChild(obj.name, obj);

            obj = new Button("Button27","184","1445","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("206");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_PageNumber");
            this.addChild(obj.name, obj);

            obj = new Button("Button28","205","1445","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("207");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_PageNumber");
            this.addChild(obj.name, obj);

            obj = new Button("Button29","226","1445","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("208");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_PageNumber");
            this.addChild(obj.name, obj);

            obj = new Button("Button30","247","1445","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("209");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_PageNumber");
            this.addChild(obj.name, obj);

            obj = new Button("Button31","268","1445","23","22",null,null,null,null,null,null,this);
            obj.set_taborder("210");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_PageNumber");
            this.addChild(obj.name, obj);

            obj = new Static("Static39","498","1421","122","20",null,null,null,null,null,null,this);
            obj.set_taborder("211");
            obj.set_text("disabled");
            obj.set_color("black");
            obj.set_font("8pt \"Tahoma\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static40","124","1398",null,"1","-1",null,null,null,null,null,this);
            obj.set_taborder("221");
            obj.set_border("1px solid rgba(206,213,223,1), 0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static41","1","1067","124","77",null,null,null,null,null,null,this);
            obj.set_taborder("222");
            obj.set_text("사용자 정의 Button");
            obj.set_background("rgba(127,127,127,1)");
            obj.set_border("1px solid rgba(206,213,223,1)");
            obj.set_color("rgba(255,255,255,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static42","141","1517","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("223");
            obj.set_text("enabled");
            obj.set_color("black");
            obj.set_font("8pt \"Tahoma\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static43","497","1517","121","20",null,null,null,null,null,null,this);
            obj.set_taborder("224");
            obj.set_text("disabled");
            obj.set_color("black");
            obj.set_font("8pt \"Tahoma\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button41","138","1542","23","23",null,null,null,null,null,null,this);
            obj.set_taborder("225");
            obj.set_cssclass("btn_WF_ShuttleL");
            this.addChild(obj.name, obj);

            obj = new Button("Button42","163","1542","23","23",null,null,null,null,null,null,this);
            obj.set_taborder("226");
            obj.set_cssclass("btn_WF_ShuttleR");
            this.addChild(obj.name, obj);

            obj = new Button("Button43","212","1542","23","23",null,null,null,null,null,null,this);
            obj.set_taborder("227");
            obj.set_cssclass("btn_WF_ShuttleD");
            this.addChild(obj.name, obj);

            obj = new Button("Button44","187","1542","23","23",null,null,null,null,null,null,this);
            obj.set_taborder("228");
            obj.set_cssclass("btn_WF_ShuttleU");
            this.addChild(obj.name, obj);

            obj = new Button("Button45","497","1542","24","23",null,null,null,null,null,null,this);
            obj.set_taborder("229");
            obj.set_cssclass("btn_WF_ShuttleL");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button46","523","1542","23","23",null,null,null,null,null,null,this);
            obj.set_taborder("230");
            obj.set_cssclass("btn_WF_ShuttleR");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button47","574","1542","23","23",null,null,null,null,null,null,this);
            obj.set_taborder("231");
            obj.set_cssclass("btn_WF_ShuttleD");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button48","548","1542","24","23",null,null,null,null,null,null,this);
            obj.set_taborder("232");
            obj.set_cssclass("btn_WF_ShuttleU");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button32","497","1445","23","22",null,null,null,null,null,null,this);
            obj.set_taborder("233");
            obj.set_cssclass("btn_WF_PagePP");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button33","518","1445","21","22",null,null,null,null,null,null,this);
            obj.set_taborder("234");
            obj.set_cssclass("btn_WF_PageP");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button34","673","1445","24","22",null,null,null,null,null,null,this);
            obj.set_taborder("235");
            obj.set_cssclass("btn_WF_PageNN");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button35","655","1445","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("236");
            obj.set_cssclass("btn_WF_PageN");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button36","544","1445","23","22",null,null,null,null,null,null,this);
            obj.set_taborder("237");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_PageNumber");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button37","564","1445","23","22",null,null,null,null,null,null,this);
            obj.set_taborder("238");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_PageNumber");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button38","585","1445","23","22",null,null,null,null,null,null,this);
            obj.set_taborder("239");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_PageNumber");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button39","607","1445","23","22",null,null,null,null,null,null,this);
            obj.set_taborder("240");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_PageNumber");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button49","629","1445","24","22",null,null,null,null,null,null,this);
            obj.set_taborder("242");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_PageNumber");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static44","123","1495",null,"1","1",null,null,null,null,null,this);
            obj.set_taborder("243");
            obj.set_border("1px solid rgba(206,213,223,1), 0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static46","1","1399","124","97",null,null,null,null,null,null,this);
            obj.set_taborder("244");
            obj.set_text("Page Button");
            obj.set_background("rgba(127,127,127,1)");
            obj.set_border("1px solid rgba(206,213,223,1)");
            obj.set_color("rgba(255,255,255,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static58","1","1495","124","97",null,null,null,null,null,null,this);
            obj.set_taborder("255");
            obj.set_text("Shuttle Button");
            obj.set_background("rgba(127,127,127,1)");
            obj.set_border("1px solid rgba(206,213,223,1)");
            obj.set_color("rgba(255,255,255,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","123","1587",null,"1","1",null,null,null,null,null,this);
            obj.set_taborder("264");
            obj.set_border("1px solid rgba(206,213,223,1), 0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","1","1587","124","94",null,null,null,null,null,null,this);
            obj.set_taborder("265");
            obj.set_text("Search Button");
            obj.set_background("rgba(127,127,127,1)");
            obj.set_border("1px solid rgba(206,213,223,1)");
            obj.set_color("rgba(255,255,255,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button53","498","148","50","21",null,null,null,null,null,null,this);
            obj.set_taborder("269");
            obj.set_text("조회");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button52","140","122","50","21",null,null,null,null,null,null,this);
            obj.set_taborder("270");
            obj.set_text("조회");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","677","94","122","20",null,null,null,null,null,null,this);
            obj.set_taborder("276");
            obj.set_text("업무시스템 활용");
            obj.set_color("black");
            obj.set_font("8pt \"Tahoma\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","318","122","58","21",null,null,null,null,null,null,this);
            obj.set_taborder("277");
            obj.set_text("가나");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button13","318","148","58","21",null,null,null,null,null,null,this);
            obj.set_taborder("278");
            obj.set_text("가나다");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button14","318","174","74","21",null,null,null,null,null,null,this);
            obj.set_taborder("279");
            obj.set_text("가나다라");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button15","498","122","50","21",null,null,null,null,null,null,this);
            obj.set_taborder("280");
            obj.set_text("조회");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button16","677","122","50","21",null,null,null,null,null,null,this);
            obj.set_taborder("281");
            obj.set_text("조회");
            obj.set_cssclass("btn_CRUD_Search");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button17","677","148","50","21",null,null,null,null,null,null,this);
            obj.set_taborder("282");
            obj.set_text("삭제");
            obj.set_cssclass("btn_CRUD_Delete");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button18","677","173","50","21",null,null,null,null,null,null,this);
            obj.set_taborder("283");
            obj.set_text("저장");
            obj.set_cssclass("btn_CRUD_Save");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button19","677","199","50","21",null,null,null,null,null,null,this);
            obj.set_taborder("284");
            obj.set_text("실행");
            obj.set_cssclass("btn_CRUD_Action");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","142","308","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("285");
            obj.set_text("기본가이드");
            obj.set_color("black");
            obj.set_font("8pt \"Tahoma\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","318","308","122","20",null,null,null,null,null,null,this);
            obj.set_taborder("286");
            obj.set_text("활용예시");
            obj.set_color("black");
            obj.set_font("8pt \"Tahoma\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","142","255","447","46",null,null,null,null,null,null,this);
            obj.set_taborder("287");
            obj.set_text("* 최소 2글자부터 시작하며 한글자가 늘어날 때마다 버튼 width가 13px씩 증가");
            obj.set_cssclass("sta_WF_Info_Orange");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","498","308","122","20",null,null,null,null,null,null,this);
            obj.set_taborder("288");
            obj.set_text("Pseudo Guide");
            obj.set_color("black");
            obj.set_font("8pt \"Tahoma\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button07","498","362","97","21",null,null,null,null,null,null,this);
            obj.set_taborder("289");
            obj.set_text("파일업로드");
            obj.set_cssclass("btn_File_Up");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button08","140","336","97","21",null,null,null,null,null,null,this);
            obj.set_taborder("290");
            obj.set_text("파일업로드");
            obj.set_cssclass("btn_File_Up");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button09","318","336","84","21",null,null,null,null,null,null,this);
            obj.set_taborder("291");
            obj.set_text("가나다라");
            obj.set_cssclass("btn_File_Up");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button10","318","362","97","21",null,null,null,null,null,null,this);
            obj.set_taborder("292");
            obj.set_text("가나다라마");
            obj.set_cssclass("btn_File_Up");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button11","318","388","110","21",null,null,null,null,null,null,this);
            obj.set_taborder("293");
            obj.set_text("가나다라마바");
            obj.set_cssclass("btn_File_Up");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button12","498","336","97","21",null,null,null,null,null,null,this);
            obj.set_taborder("294");
            obj.set_text("파일업로드");
            obj.set_cssclass("btn_File_Up");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button20","677","336","97","21",null,null,null,null,null,null,this);
            obj.set_taborder("295");
            obj.set_text("파일업로드");
            obj.set_cssclass("btn_File_Up");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button21","677","362","110","21",null,null,null,null,null,null,this);
            obj.set_taborder("296");
            obj.set_text("파일다운로드");
            obj.set_cssclass("btn_File_Down");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","677","308","122","20",null,null,null,null,null,null,this);
            obj.set_taborder("299");
            obj.set_text("업무시스템 활용");
            obj.set_color("black");
            obj.set_font("8pt \"Tahoma\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button57","810","336","84","21",null,null,null,null,null,null,this);
            obj.set_taborder("302");
            obj.set_text("찾아보기");
            obj.set_cssclass("btn_File_Search");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","142","462","825","46",null,null,null,null,null,null,this);
            obj.set_taborder("303");
            obj.set_text("* 최소 2글자부터 시작하며 한 글자가 늘어날 때마다 버튼 width가 12px씩 증가한다. 띄어 쓰기가 있는 경우 4px씩 증가한다.\r\n* 특수 그리드 버튼의 아이콘 크기는 4px 더 크다.(기본버튼 아이콘 8x8, 특수버튼 아이콘 12x12)");
            obj.set_cssclass("sta_WF_Info_Orange");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","142","511","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("304");
            obj.set_text("기본가이드");
            obj.set_color("black");
            obj.set_font("8pt \"Tahoma\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","318","511","122","20",null,null,null,null,null,null,this);
            obj.set_taborder("305");
            obj.set_text("활용예시");
            obj.set_color("black");
            obj.set_font("8pt \"Tahoma\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","498","511","122","20",null,null,null,null,null,null,this);
            obj.set_taborder("306");
            obj.set_text("Pseudo Guide");
            obj.set_color("black");
            obj.set_font("8pt \"Tahoma\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button58","498","565","67","21",null,null,null,null,null,null,this);
            obj.set_taborder("307");
            obj.set_text("행 추가");
            obj.set_cssclass("btn_WF_GridPlus");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button59","140","539","67","21",null,null,null,null,null,null,this);
            obj.set_taborder("308");
            obj.set_text("행 추가");
            obj.set_cssclass("btn_WF_GridPlus");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button60","318","539","51","21",null,null,null,null,null,null,this);
            obj.set_taborder("309");
            obj.set_text("가나");
            obj.set_cssclass("btn_WF_GridPlus");
            this.addChild(obj.name, obj);

            obj = new Button("Button61","318","565","63","21",null,null,null,null,null,null,this);
            obj.set_taborder("310");
            obj.set_text("가나다");
            obj.set_cssclass("btn_WF_GridPlus");
            this.addChild(obj.name, obj);

            obj = new Button("Button62","318","591","75","21",null,null,null,null,null,null,this);
            obj.set_taborder("311");
            obj.set_text("가나다라");
            obj.set_cssclass("btn_WF_GridPlus");
            this.addChild(obj.name, obj);

            obj = new Button("Button63","677","539","67","21",null,null,null,null,null,null,this);
            obj.set_taborder("312");
            obj.set_text("행 추가");
            obj.set_cssclass("btn_WF_GridPlus");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","677","511","122","20",null,null,null,null,null,null,this);
            obj.set_taborder("314");
            obj.set_text("업무시스템 활용");
            obj.set_color("black");
            obj.set_font("8pt \"Tahoma\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button65","747","539","67","21",null,null,null,null,null,null,this);
            obj.set_taborder("315");
            obj.set_text("행 삭제");
            obj.set_cssclass("btn_WF_GridMinus");
            this.addChild(obj.name, obj);

            obj = new Button("Button68","498","539","67","21",null,null,null,null,null,null,this);
            obj.set_taborder("318");
            obj.set_text("행 추가");
            obj.set_cssclass("btn_WF_GridPlus");
            this.addChild(obj.name, obj);

            obj = new Button("Button69","318","617","79","21",null,null,null,null,null,null,this);
            obj.set_taborder("319");
            obj.set_text("가나 다라");
            obj.set_cssclass("btn_WF_GridPlus");
            this.addChild(obj.name, obj);

            obj = new Button("Button64","140","664","55","21",null,null,null,null,null,null,this);
            obj.set_taborder("320");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_GridPlus02");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","142","636","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("321");
            obj.set_text("그리드 특수");
            obj.set_color("black");
            obj.set_font("8pt \"Tahoma\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button66","318","664","55","21",null,null,null,null,null,null,this);
            obj.set_taborder("322");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_GridPlus02");
            this.addChild(obj.name, obj);

            obj = new Button("Button67","677","664","55","21",null,null,null,null,null,null,this);
            obj.set_taborder("323");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_GridPlus02");
            this.addChild(obj.name, obj);

            obj = new Button("Button70","734","664","83","21",null,null,null,null,null,null,this);
            obj.set_taborder("324");
            obj.set_text("전체 추가");
            obj.set_cssclass("btn_WF_GridPlus02");
            this.addChild(obj.name, obj);

            obj = new Button("Button71","876","664","83","21",null,null,null,null,null,null,this);
            obj.set_taborder("325");
            obj.set_text("전체 삭제");
            obj.set_cssclass("btn_WF_GridMinus02");
            this.addChild(obj.name, obj);

            obj = new Button("Button72","819","664","55","21",null,null,null,null,null,null,this);
            obj.set_taborder("326");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_GridMinus02");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","682","777","122","20",null,null,null,null,null,null,this);
            obj.set_taborder("327");
            obj.set_text("업무시스템 활용");
            obj.set_color("black");
            obj.set_font("8pt \"Tahoma\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","503","777","122","20",null,null,null,null,null,null,this);
            obj.set_taborder("328");
            obj.set_text("Pseudo Guide");
            obj.set_color("black");
            obj.set_font("8pt \"Tahoma\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","323","777","122","20",null,null,null,null,null,null,this);
            obj.set_taborder("329");
            obj.set_text("활용예시");
            obj.set_color("black");
            obj.set_font("8pt \"Tahoma\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","147","777","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("330");
            obj.set_text("기본가이드");
            obj.set_color("black");
            obj.set_font("8pt \"Tahoma\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static29","138","1088","711","47",null,null,null,null,null,null,this);
            obj.set_taborder("331");
            obj.set_text("* 정의된 버튼명 이외에 업무단에서 사용하는 버튼으로,  위의 ETC 버튼의 기본 가이드와 동일함. 업무시스템 필요 용도에 맞춰 사용.");
            obj.set_cssclass("sta_WF_Info_Orange");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","147","982","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("333");
            obj.set_text("에러시");
            obj.set_color("black");
            obj.set_font("8pt \"Tahoma\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button74","503","804","40","21",null,null,null,null,null,null,this);
            obj.set_taborder("335");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_basic");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","146","803","40","21",null,null,null,null,null,null,this);
            obj.set_taborder("336");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_basic");
            this.addChild(obj.name, obj);

            obj = new Button("Button73","681","804","40","21",null,null,null,null,null,null,this);
            obj.set_taborder("337");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_basic");
            this.addChild(obj.name, obj);

            obj = new Button("Button75","723","804","40","21",null,null,null,null,null,null,this);
            obj.set_taborder("338");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_basic");
            this.addChild(obj.name, obj);

            obj = new Button("Button76","765","804","40","21",null,null,null,null,null,null,this);
            obj.set_taborder("339");
            obj.set_text("반영");
            obj.set_cssclass("btn_WF_basic");
            this.addChild(obj.name, obj);

            obj = new Button("Button77","807","804","40","21",null,null,null,null,null,null,this);
            obj.set_taborder("340");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_basic");
            this.addChild(obj.name, obj);

            obj = new Button("Button78","849","804","40","21",null,null,null,null,null,null,this);
            obj.set_taborder("341");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_basic");
            this.addChild(obj.name, obj);

            obj = new Button("Button79","681","831","52","21",null,null,null,null,null,null,this);
            obj.set_taborder("342");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_basic");
            this.addChild(obj.name, obj);

            obj = new Button("Button80","735","831","40","21",null,null,null,null,null,null,this);
            obj.set_taborder("343");
            obj.set_text("인쇄");
            obj.set_cssclass("btn_WF_basic");
            this.addChild(obj.name, obj);

            obj = new Button("Button81","777","831","64","21",null,null,null,null,null,null,this);
            obj.set_taborder("344");
            obj.set_text("미리보기");
            obj.set_cssclass("btn_WF_basic");
            this.addChild(obj.name, obj);

            obj = new Button("Button82","843","831","64","21",null,null,null,null,null,null,this);
            obj.set_taborder("345");
            obj.set_text("설문참여");
            obj.set_cssclass("btn_WF_basic");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","144","1012","88","31",null,null,null,null,null,null,this);
            obj.set_taborder("346");
            obj.set_text("에러시");
            obj.set_cssclass("btn_Box_error");
            this.addChild(obj.name, obj);

            obj = new Button("Button83","188","1017","40","21",null,null,null,null,null,null,this);
            obj.set_taborder("347");
            obj.set_text("버튼");
            obj.set_cssclass("btn_WF_basic");
            this.addChild(obj.name, obj);

            obj = new Static("Static47","139","1608","122","20",null,null,null,null,null,null,this);
            obj.set_taborder("348");
            obj.set_text("enabled");
            obj.set_color("black");
            obj.set_font("8pt \"Tahoma\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static48","496","1608","121","20",null,null,null,null,null,null,this);
            obj.set_taborder("349");
            obj.set_text("disabled");
            obj.set_color("black");
            obj.set_font("8pt \"Tahoma\"");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","138","1632","135","21",null,null,null,null,null,null,this);
            obj.set_taborder("350");
            obj.set_cssclass("edit_Search");
            this.addChild(obj.name, obj);

            obj = new Button("Button50","255","1632","15","21",null,null,null,null,null,null,this);
            obj.set_taborder("351");
            obj.set_cssclass("btn_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Button("Button51","305","1632","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("352");
            obj.set_cssclass("btn_WF_SearchBox");
            this.addChild(obj.name, obj);

            obj = new Button("Button55","673","1632","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("355");
            obj.set_cssclass("btn_WF_SearchBox");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","497","1632","137","21",null,null,null,null,null,null,this);
            obj.set_taborder("356");
            obj.set_enable("false");
            obj.set_cssclass("edit_Search");
            this.addChild(obj.name, obj);

            obj = new Button("Button84","615","1632","15","21",null,null,null,null,null,null,this);
            obj.set_taborder("357");
            obj.set_cssclass("btn_WF_Search");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static31","1","1143","124","257",null,null,null,null,null,null,this);
            obj.set_taborder("358");
            obj.set_text("대륜E&S Button");
            obj.set_background("rgba(127,127,127,1)");
            obj.set_border("1px solid rgba(206,213,223,1)");
            obj.set_color("rgba(255,255,255,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static33","123","1143",null,"1","1",null,null,null,null,null,this);
            obj.set_taborder("359");
            obj.set_border("1px solid rgba(206,213,223,1), 0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Button("Button95","725","863","40","21",null,null,null,null,null,null,this);
            obj.set_taborder("381");
            obj.set_text("버튼");
            obj.set_cssclass("btn_WF_basic");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","681","858","88","31",null,null,null,null,null,null,this);
            obj.set_taborder("382");
            obj.set_text("에러시");
            obj.set_cssclass("btn_Box_error");
            this.addChild(obj.name, obj);

            obj = new Static("Static54","147","905","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("383");
            obj.set_text("영문 텍스트");
            obj.set_color("black");
            obj.set_font("8pt \"Tahoma\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button96","146","932","51","21",null,null,null,null,null,null,this);
            obj.set_taborder("384");
            obj.set_text("Button");
            obj.set_cssclass("btn_WF_basic");
            this.addChild(obj.name, obj);

            obj = new Static("Static55","435","924","545","32",null,null,null,null,null,null,this);
            obj.set_taborder("385");
            obj.set_text("* 영문 텍스트는 스펠링 마다 사이즈가 다르기 때문에 좌, 우 padding 값만 맞춰준다.");
            obj.set_cssclass("sta_WF_Info_Orange");
            this.addChild(obj.name, obj);

            obj = new Button("Button97","320","932","51","21",null,null,null,null,null,null,this);
            obj.set_taborder("386");
            obj.set_text("Button");
            obj.set_cssclass("btn_WF_basic");
            this.addChild(obj.name, obj);

            obj = new Static("Static56","321","933","8","20",null,null,null,null,null,null,this);
            obj.set_taborder("387");
            obj.set_text("8");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static57","363","932","8","20",null,null,null,null,null,null,this);
            obj.set_taborder("388");
            obj.set_text("8");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("Button22","817","539","67","21",null,null,null,null,null,null,this);
            obj.set_taborder("389");
            obj.set_text("행 복사");
            obj.set_cssclass("btn_WF_GridCopy");
            this.addChild(obj.name, obj);

            obj = new Button("Button40","167","1173","60","21",null,null,null,null,null,null,this);
            obj.set_taborder("390");
            obj.set_text("첨부");
            obj.set_cssclass("btn_DR_GridAttach");
            this.addChild(obj.name, obj);

            obj = new Button("Button54","238","1173","60","21",null,null,null,null,null,null,this);
            obj.set_taborder("391");
            obj.set_text("취소");
            obj.set_cssclass("btn_DR_GridCancel");
            this.addChild(obj.name, obj);

            obj = new Button("Button56","309","1173","60","21",null,null,null,null,null,null,this);
            obj.set_taborder("392");
            obj.set_text("확인");
            obj.set_cssclass("btn_DR_GridCheck");
            this.addChild(obj.name, obj);

            obj = new Button("Button88","380","1173","60","21",null,null,null,null,null,null,this);
            obj.set_taborder("396");
            obj.set_text("인쇄");
            obj.set_cssclass("btn_DR_GridPrint");
            this.addChild(obj.name, obj);

            obj = new Button("Button89","453","1173","60","21",null,null,null,null,null,null,this);
            obj.set_taborder("397");
            obj.set_text("신청");
            obj.set_cssclass("btn_DR_GridApply");
            this.addChild(obj.name, obj);

            obj = new Button("Button90","524","1173","60","21",null,null,null,null,null,null,this);
            obj.set_taborder("398");
            obj.set_text("접수");
            obj.set_cssclass("btn_DR_GridRecept");
            this.addChild(obj.name, obj);

            obj = new Button("Button91","597","1173","60","21",null,null,null,null,null,null,this);
            obj.set_taborder("399");
            obj.set_text("승인");
            obj.set_cssclass("btn_DR_GridAccept");
            this.addChild(obj.name, obj);

            obj = new Button("Button92","668","1173","60","21",null,null,null,null,null,null,this);
            obj.set_taborder("400");
            obj.set_text("메일");
            obj.set_cssclass("btn_DR_GridMail");
            this.addChild(obj.name, obj);

            obj = new Button("Button93","167","1217","60","21",null,null,null,null,null,null,this);
            obj.set_taborder("401");
            obj.set_text("FAX");
            obj.set_cssclass("btn_DR_GridFax");
            this.addChild(obj.name, obj);

            obj = new Button("Button94","238","1217","60","21",null,null,null,null,null,null,this);
            obj.set_taborder("402");
            obj.set_text("SMS");
            obj.set_cssclass("btn_DR_GridSms");
            this.addChild(obj.name, obj);

            obj = new Button("Button98","309","1217","60","21",null,null,null,null,null,null,this);
            obj.set_taborder("403");
            obj.set_text("SCAN");
            obj.set_cssclass("btn_DR_GridScan");
            this.addChild(obj.name, obj);

            obj = new Button("Button99","167","1259","60","21",null,null,null,null,null,null,this);
            obj.set_taborder("406");
            obj.set_cssclass("btn_DR_GridPlus");
            obj.set_text("행 추가");
            this.addChild(obj.name, obj);

            obj = new Button("Button101","238","1259","60","21",null,null,null,null,null,null,this);
            obj.set_taborder("407");
            obj.set_text("행 삭제");
            obj.set_cssclass("btn_DR_GridMinus");
            this.addChild(obj.name, obj);

            obj = new Button("Button102","309","1259","60","21",null,null,null,null,null,null,this);
            obj.set_taborder("408");
            obj.set_text("행 복사");
            obj.set_cssclass("btn_DR_GridCopy");
            this.addChild(obj.name, obj);

            obj = new Button("Button85","167","1298","80","21",null,null,null,null,null,null,this);
            obj.set_taborder("409");
            obj.set_cssclass("btn_DR_GridFileinput");
            obj.set_text("파일입력");
            this.addChild(obj.name, obj);

            obj = new Button("Button86","252","1298","80","21",null,null,null,null,null,null,this);
            obj.set_taborder("410");
            obj.set_text("화면캡쳐");
            obj.set_cssclass("btn_DR_GridCapture");
            this.addChild(obj.name, obj);

            obj = new Button("Button87","167","1333","90","21",null,null,null,null,null,null,this);
            obj.set_taborder("411");
            obj.set_text("파일업로드");
            obj.set_cssclass("btn_DR_GridUpload");
            this.addChild(obj.name, obj);

            obj = new Button("Button100","265","1333","90","21",null,null,null,null,null,null,this);
            obj.set_taborder("412");
            obj.set_text("파일다운로드");
            obj.set_cssclass("btn_DR_GridDownload");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1140,1681,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Guide_02_bak.xfdl", function() {

        this.Button56_onclick = function (obj, e)
        {
        };

        this.Button40_onclick = function (obj, e)
        {
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static38.addEventHandler("onclick",this.Static28_onclick,this);
            this.Static28.addEventHandler("onclick",this.Static28_onclick,this);
            this.Static35.addEventHandler("onclick",this.Static35_onclick,this);
            this.Button53.addEventHandler("onclick",this.Button53_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Static11.addEventHandler("onclick",this.Static28_onclick,this);
            this.Button07.addEventHandler("onclick",this.Button53_onclick,this);
            this.Button09.addEventHandler("onclick",this.Button00_onclick,this);
            this.Static16.addEventHandler("onclick",this.Static28_onclick,this);
            this.Button58.addEventHandler("onclick",this.Button53_onclick,this);
            this.Button60.addEventHandler("onclick",this.Button00_onclick,this);
            this.Static29.addEventHandler("onclick",this.Static28_onclick,this);
            this.Static55.addEventHandler("onclick",this.Static28_onclick,this);
            this.Button40.addEventHandler("onclick",this.Button40_onclick,this);
            this.Button56.addEventHandler("onclick",this.Button56_onclick,this);
            this.Button88.addEventHandler("onclick",this.Button40_onclick,this);
            this.Button90.addEventHandler("onclick",this.Button56_onclick,this);
            this.Button91.addEventHandler("onclick",this.Button40_onclick,this);
            this.Button93.addEventHandler("onclick",this.Button56_onclick,this);
            this.Button94.addEventHandler("onclick",this.Button56_onclick,this);
            this.Button98.addEventHandler("onclick",this.Button56_onclick,this);
            this.Button99.addEventHandler("onclick",this.Button56_onclick,this);
            this.Button101.addEventHandler("onclick",this.Button56_onclick,this);
            this.Button102.addEventHandler("onclick",this.Button56_onclick,this);
            this.Button85.addEventHandler("onclick",this.Button56_onclick,this);
            this.Button86.addEventHandler("onclick",this.Button56_onclick,this);
            this.Button87.addEventHandler("onclick",this.Button56_onclick,this);
            this.Button100.addEventHandler("onclick",this.Button56_onclick,this);
        };
        this.loadIncludeScript("Guide_02_bak.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
