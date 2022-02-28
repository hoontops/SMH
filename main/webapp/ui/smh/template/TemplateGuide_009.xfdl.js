(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TemplateGuide_008");
            this.set_titletext("통계_표");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,1186);
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
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/><Column id=\"txt\" type=\"STRING\" size=\"256\"/><Column id=\"lev2\" type=\"STRING\" size=\"256\"/><Column id=\"txt2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">텍스트</Col><Col id=\"Column2\">텍스트</Col><Col id=\"Column3\">텍스트</Col><Col id=\"Column4\">텍스트</Col><Col id=\"lev\">0</Col><Col id=\"txt\">전사</Col><Col id=\"lev2\">0</Col><Col id=\"txt2\">LCD</Col></Row><Row><Col id=\"Column1\">텍스트</Col><Col id=\"Column2\">텍스트</Col><Col id=\"Column3\">텍스트</Col><Col id=\"Column4\">텍스트</Col><Col id=\"lev\">1</Col><Col id=\"txt\">상품K부문</Col><Col id=\"lev2\">2</Col><Col id=\"txt2\">재고금액</Col></Row><Row><Col id=\"Column1\">텍스트</Col><Col id=\"Column2\">텍스트</Col><Col id=\"Column3\">텍스트</Col><Col id=\"Column4\">텍스트</Col><Col id=\"lev\">2</Col><Col id=\"txt\">사업부1</Col><Col id=\"lev2\">2</Col><Col id=\"txt2\">할당재료비</Col></Row><Row><Col id=\"Column1\">텍스트</Col><Col id=\"Column2\">텍스트</Col><Col id=\"Column3\">텍스트</Col><Col id=\"Column4\">텍스트</Col><Col id=\"lev\">3</Col><Col id=\"txt\">FK1B</Col><Col id=\"lev2\">1</Col><Col id=\"txt2\">TV</Col></Row><Row><Col id=\"Column1\">텍스트</Col><Col id=\"Column2\">텍스트</Col><Col id=\"Column3\">텍스트</Col><Col id=\"Column4\">텍스트</Col><Col id=\"lev\">3</Col><Col id=\"txt\">FK2B</Col><Col id=\"lev2\">2</Col><Col id=\"txt2\">UN40D531F6F</Col></Row><Row><Col id=\"Column1\">텍스트</Col><Col id=\"Column2\">텍스트</Col><Col id=\"Column3\">텍스트</Col><Col id=\"Column4\">텍스트</Col><Col id=\"lev\">3</Col><Col id=\"txt\">FK3B</Col><Col id=\"lev2\">2</Col><Col id=\"txt2\">UN40D531F6F</Col></Row><Row><Col id=\"Column1\">텍스트</Col><Col id=\"Column2\">텍스트</Col><Col id=\"Column3\">텍스트</Col><Col id=\"Column4\">텍스트</Col><Col id=\"lev\">2</Col><Col id=\"txt\">사업부2</Col><Col id=\"lev2\">2</Col><Col id=\"txt2\">UN40D531F6F</Col></Row><Row><Col id=\"Column1\">텍스트</Col><Col id=\"Column2\">텍스트</Col><Col id=\"Column3\">텍스트</Col><Col id=\"Column4\">텍스트</Col><Col id=\"lev\">3</Col><Col id=\"txt\">AAA1A</Col><Col id=\"lev2\">0</Col><Col id=\"txt2\">모니터</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static06","910","0","10","1186",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","0","-4","346","21",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("소 타이틀");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","0","12","910","10",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","0","65","910","10",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","60","75","850","200",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_InputBg");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","75","61","59",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("btn_WF_TabIcon5On");
            obj.set_text("트랜드");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","0","135","61","59",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("지표현황");
            obj.set_cssclass("btn_WF_TabIcon6");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","285","910","332",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_binddataset("Dataset00");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"190\"/><Column size=\"175\"/><Column size=\"175\"/><Column size=\"175\"/><Column size=\"175\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"29\"/></Rows><Band id=\"head\"><Cell colspan=\"5\" text=\"Dynamic Report\" textAlign=\"left\" verticalAlign=\"middle\" padding=\"0px 0px 0px 22px\" border=\"1px solid rgba(51,51,51,1)\" background=\"url(&apos;image::img_WF_GridTitle.png&apos;) no-repeat left center rgba(255,255,255,1)\"/><Cell row=\"1\" rowspan=\"2\" text=\"헤더명\"/><Cell row=\"1\" col=\"1\" rowspan=\"2\" text=\"헤더명\"/><Cell row=\"1\" col=\"2\" rowspan=\"2\" text=\"헤더명\"/><Cell row=\"1\" col=\"3\" colspan=\"2\" text=\"헤더명\"/><Cell row=\"2\" col=\"3\" text=\"소헤더명\" font=\"9pt &quot;Dotum&quot;\"/><Cell row=\"2\" col=\"4\" text=\"소헤더명\" font=\"9pt &quot;Dotum&quot;\"/></Band><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" text=\"bind:txt2\" treelevel=\"bind:lev2\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0","275","910","10",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("Button06","144","294","68","21",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("사업부");
            obj.set_cssclass("btn_WF_TabCheckOn");
            obj.set_escapebutton("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","217","294","64","21",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("법인");
            obj.set_cssclass("btn_WF_TabCheck");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","124","295","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","0","759","910","362",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_binddataset("Dataset00");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"190\"/><Column size=\"175\"/><Column size=\"175\"/><Column size=\"175\"/><Column size=\"175\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"29\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"헤더명\"/><Cell col=\"1\" rowspan=\"2\" text=\"헤더명\"/><Cell col=\"2\" rowspan=\"2\" text=\"헤더명\"/><Cell col=\"3\" colspan=\"2\" text=\"헤더명\"/><Cell row=\"1\" col=\"3\" text=\"소헤더명\" font=\"9pt &quot;Dotum&quot;\"/><Cell row=\"1\" col=\"4\" text=\"소헤더명\" font=\"9pt &quot;Dotum&quot;\"/></Band><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" text=\"bind:txt\" treelevel=\"bind:lev\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static40","119","628","791","31",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_InputBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static45","0","628","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("항목명");
            obj.set_cssclass("sta_WF_Label2");
            this.addChild(obj.name, obj);

            obj = new Static("Static46","0","627","910","2",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_LabelLine");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","0","617","910","10",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","119","658","791","31",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_InputBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","0","658","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("항목명");
            obj.set_cssclass("sta_WF_Label2");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","119","688","791","31",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_InputBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","0","688","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("항목명");
            obj.set_cssclass("sta_WF_Label2");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","119","718","791","31",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_InputBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","0","718","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("항목명");
            obj.set_cssclass("sta_WF_Label2");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","125","633","45","21",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("부분");
            obj.set_cssclass("btn_WF_move");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","175","633","58","21",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("사업부");
            obj.set_cssclass("btn_WF_move");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","238","633","32","21",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("팀");
            obj.set_cssclass("btn_WF_move");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button07","125","663","58","21",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("텍스트");
            obj.set_cssclass("btn_WF_move");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button08","188","663","58","21",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("텍스트");
            obj.set_cssclass("btn_WF_move");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button10","251","663","58","21",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("텍스트");
            obj.set_cssclass("btn_WF_move");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button11","314","663","58","21",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("텍스트");
            obj.set_cssclass("btn_WF_move");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button12","125","693","58","21",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("텍스트");
            obj.set_cssclass("btn_WF_move");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button13","188","693","58","21",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("텍스트");
            obj.set_cssclass("btn_WF_move");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button14","251","693","58","21",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("텍스트");
            obj.set_cssclass("btn_WF_move");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button15","314","693","58","21",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("텍스트");
            obj.set_cssclass("btn_WF_move");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button16","125","723","58","21",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("텍스트");
            obj.set_cssclass("btn_WF_move");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button17","188","723","58","21",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("텍스트");
            obj.set_cssclass("btn_WF_move");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button18","251","723","58","21",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("텍스트");
            obj.set_cssclass("btn_WF_move");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","0","749","910","10",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","22","910","43",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","20","10","40","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo01","626","10","100","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("34");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_font("9pt \"Dotum\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","6.76%","10",null,"21","81.98%",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("35");
            obj.set_font("9pt \"Dotum\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","24.67%","10",null,"21","64.1%",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("36");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_font("9pt \"Dotum\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("Radio00","335","10","135","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("37");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_font("9pt \"Dotum\"");
            var Div00_form_Radio00_innerdataset = new nexacro.NormalDataset("Div00_form_Radio00_innerdataset", obj);
            Div00_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">텍스트</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">텍스트</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Radio00_innerdataset);
            obj.set_value("1");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","326","11","10","18",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("38");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","214","11","10","18",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("39");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","184","10","40","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("40");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button92","475","10","117","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("41");
            obj.set_text("Dynamic Report");
            obj.set_cssclass("btn_WF_Stats");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button93","595","10","21","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("42");
            obj.set_cssclass("btn_WF_StatsIcon");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button79",null,"10","52","21","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("43");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_basic");
            obj.set_font("9pt \"Dotum\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button52",null,"10","58","21","65",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("44");
            obj.set_text("조회");
            obj.set_cssclass("btn_CRUD_Search");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","42.73%","10","15","18",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("45");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static14","899","22","10","43",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","0","22","20","43",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","617","35","10","18",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","165","33","20","18",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","52","34","10","18",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("Button52","830","294","58","21",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("조회");
            obj.set_cssclass("btn_CRUD_Search");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","64.46%","35","3","18",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("3");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","49.57%","33",null,"18","48.26%",null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,1186,this,function(p){});
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
        this.loadIncludeScript("TemplateGuide_009.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
