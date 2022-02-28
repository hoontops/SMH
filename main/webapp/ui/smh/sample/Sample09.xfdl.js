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
            this.set_titletext("마스킹처리");
            this.set_color("rgba(52,52,52,1)");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_noMasking", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"JUMIN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CARD_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fMasking", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"M_JUMIN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"M_TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"M_CARD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"JUMIN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CARD_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_driver", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_phone", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tel", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("st_Title01","0.87%","308",null,"14","49.89%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("주요 개인 정보 마스킹(*) 적용 샘플(TEST계정으로 조회 가능)");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_font("bold 10pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","84.35%","488",null,"233","-40.76%",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_noMasking");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/><Column size=\"179\"/><Column size=\"278\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"주민번호\"/><Cell col=\"2\" text=\"휴대전화 번호\"/><Cell col=\"3\" text=\"카드번호\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:JUMIN_NO\"/><Cell col=\"2\" text=\"bind:TEL_NO\"/><Cell col=\"3\" text=\"bind:CARD_NO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","686","304","58","21",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_cssclass("btn_CRUD_Search");
            obj.set_tooltiptext("조회");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","8","337","724","295",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_fMasking");
            obj.set_nodatatext("검색 결과가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"65\"/><Column size=\"200\"/><Column size=\"223\"/><Column size=\"301\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"주민번호(*)\"/><Cell col=\"2\" text=\"휴대전화번호(*)\"/><Cell col=\"3\" text=\"카드번호(*)\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:M_JUMIN_NO\"/><Cell col=\"2\" text=\"bind:M_TEL_NO\"/><Cell col=\"3\" text=\"bind:M_CARD_NO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelDn","568","304","110","21",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("파일다운로드");
            obj.set_cssclass("btn_File_Down");
            obj.set_tooltiptext("파일다운로드");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelDn00","436","304","124","21",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("파일다운로드(*)");
            obj.set_cssclass("btn_File_Down");
            obj.set_tooltiptext("파일다운로드");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","6","109","121","31",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("여권번호");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_tooltiptext("여권번호");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","6","49","121","31",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("주민등록번호");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_tooltiptext("주민등록번호");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","6","79","121","31",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("운전면허 번호");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_tooltiptext("메시지 종류");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static74","1.85%","49",null,"182","97.93%",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("2");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static37","1.09%","54",null,"21","97.93%",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("*");
            obj.set_color("rgba(212,75,65,1)");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static38","1.09%","84",null,"21","97.93%",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("*");
            obj.set_color("rgba(212,75,65,1)");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static39","1.09%","114",null,"21","97.93%",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("*");
            obj.set_color("rgba(212,75,65,1)");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","126","79","391","31",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_InputBg");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","126","109","391","31",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_InputBg");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static35","126","49","391","31",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_InputBg");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static76","13.8%","50",null,"4","80.22%",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static72","13.8%","50",null,"181","85.65%",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","13.8%","75",null,"4","80.22%",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","13.8%","80",null,"4","80.22%",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","13.8%","105",null,"4","80.22%",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","13.8%","110",null,"4","80.22%",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","14.02%","135",null,"4","80%",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static29","14.02%","140",null,"4","80%",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","14.67%","113",null,"4","79.35%",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static31","14.67%","118",null,"4","79.35%",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static32","14.89%","143",null,"4","79.13%",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static33","14.89%","148",null,"4","79.13%",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","55.54%","50",null,"181","43.91%",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Combo("cho_driverNm00","132","84","85","21",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_codecolumn("CD_NM");
            obj.set_datacolumn("CD_NM");
            obj.set_innerdataset("ds_driver");
            obj.set_font("9pt \"Dotum\"");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static46","6","48","511","2",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_LabelLine");
            this.addChild(obj.name, obj);

            obj = new Button("btn_juminMask","534","53","66","28",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("마스킹처리");
            this.addChild(obj.name, obj);

            obj = new Static("sta_juminMask","605","52","307","32",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("주민등록번호 마스킹처리");
            this.addChild(obj.name, obj);

            obj = new Static("st_Title00","0.87%","12",null,"14","24.67%",null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("해당 화면은 UI표준이 아니며, 마스킹 처리 관련 이해를 돕기 위해 개발된 화면입니다.");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_font("bold 10pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","225","87","18","16",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_driverNm01","235","84","61","24",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_maxlength("2");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","303","87","39","16",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_driverNm02","323","84","94","24",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_maxlength("6");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","425","87","39","16",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_driverNm03","448","84","59","24",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_maxlength("2");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Button("btn_driverMask","534","82","67","28",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("마스킹처리");
            this.addChild(obj.name, obj);

            obj = new Static("sta_driverNmMask","605","81","307","32",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("운전면허 번호 마스킹처리");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_passPortNm","132","113","172","24",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_maxlength("9");
            this.addChild(obj.name, obj);

            obj = new Button("btn_passPortMask","534","113","68","28",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("마스킹처리");
            this.addChild(obj.name, obj);

            obj = new Static("sta_passPortNmMask","606","112","306","32",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("여권 번호 마스킹처리");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","6","139","121","31",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_tooltiptext("여권번호");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","0.98%","144",null,"21","98.04%",null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("*");
            obj.set_color("rgba(212,75,65,1)");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","126","139","391","31",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_InputBg");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","14.57%","143",null,"4","79.46%",null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","14.57%","148",null,"4","79.46%",null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","14.57%","173",null,"4","79.46%",null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","14.57%","178",null,"4","79.46%",null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","15.43%","151",null,"4","78.59%",null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","15.43%","156",null,"4","78.59%",null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","15.43%","181",null,"4","78.59%",null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","15.43%","186",null,"4","78.59%",null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_acountNm","131","143","172","24",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_maxlength("15");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Button("btn_acountMask","534","144","69","28",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("마스킹처리");
            this.addChild(obj.name, obj);

            obj = new Static("sta_acountNmMask","606","143","306","32",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("계좌 번호 마스킹처리");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","14.89%","172",null,"4","79.13%",null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","14.89%","177",null,"4","79.13%",null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static36","15.76%","180",null,"4","78.26%",null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static40","15.76%","185",null,"4","78.26%",null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static41","6","168","121","31",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("신용카드 번호");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_tooltiptext("여권번호");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static42","0.98%","173",null,"21","98.04%",null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("*");
            obj.set_color("rgba(212,75,65,1)");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static43","126","168","391","31",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_cssclass("sta_WF_InputBg");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static44","15.43%","180",null,"4","78.59%",null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static45","15.43%","185",null,"4","78.59%",null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static49","16.3%","188",null,"4","77.72%",null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static50","16.3%","193",null,"4","77.72%",null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_creditCardNm00","131","172","85","24",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static53","220","177","9","16",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_creditCardNm01","232","172","86","24",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_creditCardNm02","327","172","86","24",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static54","417","177","9","16",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_creditCardNm03","428","172","86","24",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static55","319","178","9","16",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Button("btn_creditCardMask","534","173","70","28",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_text("마스킹처리");
            this.addChild(obj.name, obj);

            obj = new Static("sta_creditCardNmMask","607","172","306","32",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_text("신용카드 번호 마스킹처리");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","15.43%","210",null,"4","78.59%",null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static47","15.43%","215",null,"4","78.59%",null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static48","16.3%","218",null,"4","77.72%",null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static51","16.3%","223",null,"4","77.72%",null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static52","15.76%","209",null,"4","78.26%",null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static56","15.76%","214",null,"4","78.26%",null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static57","16.63%","217",null,"4","77.39%",null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static58","16.63%","222",null,"4","77.39%",null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static59","6","197","121","31",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_tooltiptext("비밀번호");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static60","0.98%","202",null,"21","98.04%",null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_text("*");
            obj.set_color("rgba(212,75,65,1)");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static61","126","197","391","31",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_cssclass("sta_WF_InputBg");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static62","16.3%","217",null,"4","77.72%",null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static63","16.3%","222",null,"4","77.72%",null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static64","17.17%","225",null,"4","76.85%",null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static65","17.17%","230",null,"4","76.85%",null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_password","131","201","188","24",null,null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_maxlength("10");
            obj.set_password("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_passwordMask","534","202","70","28",null,null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_text("마스킹처리");
            this.addChild(obj.name, obj);

            obj = new Static("sta_passwordMask","606","201","305","32",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_text("비밀번호 마스킹처리");
            this.addChild(obj.name, obj);

            obj = new Static("Static66","16.3%","217",null,"4","77.72%",null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static67","16.3%","222",null,"4","77.72%",null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static68","16.3%","247",null,"4","77.72%",null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static69","16.3%","252",null,"4","77.72%",null,null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static70","17.17%","255",null,"4","76.85%",null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static71","17.17%","260",null,"4","76.85%",null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static73","16.63%","246",null,"4","77.39%",null,null,null,null,null,this);
            obj.set_taborder("120");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static75","16.63%","251",null,"4","77.39%",null,null,null,null,null,this);
            obj.set_taborder("121");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static77","17.5%","254",null,"4","76.52%",null,null,null,null,null,this);
            obj.set_taborder("122");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static78","17.5%","259",null,"4","76.52%",null,null,null,null,null,this);
            obj.set_taborder("123");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static79","6","226","121","31",null,null,null,null,null,null,this);
            obj.set_taborder("124");
            obj.set_text("휴대 전화번호");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_tooltiptext("휴대 전화번호");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static80","0.98%","231",null,"21","98.04%",null,null,null,null,null,this);
            obj.set_taborder("125");
            obj.set_text("*");
            obj.set_color("rgba(212,75,65,1)");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static81","126","226","391","31",null,null,null,null,null,null,this);
            obj.set_taborder("126");
            obj.set_cssclass("sta_WF_InputBg");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static82","17.17%","254",null,"4","76.85%",null,null,null,null,null,this);
            obj.set_taborder("127");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static83","17.17%","259",null,"4","76.85%",null,null,null,null,null,this);
            obj.set_taborder("128");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static84","18.04%","262",null,"4","75.98%",null,null,null,null,null,this);
            obj.set_taborder("129");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static85","18.04%","267",null,"4","75.98%",null,null,null,null,null,this);
            obj.set_taborder("130");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Combo("cho_phoneNm00","132","230","85","21",null,null,null,null,null,null,this);
            obj.set_taborder("131");
            obj.set_innerdataset("ds_phone");
            obj.set_codecolumn("CD_NM");
            obj.set_datacolumn("CD_NM");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static86","225","233","18","16",null,null,null,null,null,null,this);
            obj.set_taborder("132");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_phoneNm01","234","230","62","24",null,null,null,null,null,null,this);
            obj.set_taborder("133");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static87","302","233","40","16",null,null,null,null,null,null,this);
            obj.set_taborder("134");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_phoneNm02","323","230","77","24",null,null,null,null,null,null,this);
            obj.set_taborder("135");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_phoneMask","534","231","70","28",null,null,null,null,null,null,this);
            obj.set_taborder("136");
            obj.set_text("마스킹처리");
            this.addChild(obj.name, obj);

            obj = new Static("sta_phoneNmMask","607","230","305","32",null,null,null,null,null,null,this);
            obj.set_taborder("137");
            obj.set_text("휴대전화번호 마스킹처리");
            this.addChild(obj.name, obj);

            obj = new Static("Static88","16.3%","252",null,"4","77.72%",null,null,null,null,null,this);
            obj.set_taborder("138");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static89","16.63%","251",null,"4","77.39%",null,null,null,null,null,this);
            obj.set_taborder("139");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static90","17.17%","259",null,"4","76.85%",null,null,null,null,null,this);
            obj.set_taborder("140");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static91","17.17%","254",null,"4","76.85%",null,null,null,null,null,this);
            obj.set_taborder("141");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static92","18.04%","267",null,"4","75.98%",null,null,null,null,null,this);
            obj.set_taborder("142");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static93","18.91%","275",null,"4","75.11%",null,null,null,null,null,this);
            obj.set_taborder("143");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static94","17.17%","284",null,"4","76.85%",null,null,null,null,null,this);
            obj.set_taborder("144");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static95","17.17%","289",null,"4","76.85%",null,null,null,null,null,this);
            obj.set_taborder("145");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static96","18.04%","292",null,"4","75.98%",null,null,null,null,null,this);
            obj.set_taborder("146");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static97","18.04%","297",null,"4","75.98%",null,null,null,null,null,this);
            obj.set_taborder("147");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static98","17.5%","283",null,"4","76.52%",null,null,null,null,null,this);
            obj.set_taborder("148");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static99","17.5%","288",null,"4","76.52%",null,null,null,null,null,this);
            obj.set_taborder("149");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static100","18.37%","291",null,"4","75.65%",null,null,null,null,null,this);
            obj.set_taborder("150");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static101","18.37%","296",null,"4","75.65%",null,null,null,null,null,this);
            obj.set_taborder("151");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static102","6","255","121","31",null,null,null,null,null,null,this);
            obj.set_taborder("152");
            obj.set_text("유선 전화번호");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_tooltiptext("유선 전화번호");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static103","0.98%","260",null,"21","98.04%",null,null,null,null,null,this);
            obj.set_taborder("153");
            obj.set_text("*");
            obj.set_color("rgba(212,75,65,1)");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static104","126","255","391","31",null,null,null,null,null,null,this);
            obj.set_taborder("154");
            obj.set_cssclass("sta_WF_InputBg");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static105","18.04%","291",null,"4","75.98%",null,null,null,null,null,this);
            obj.set_taborder("155");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static106","18.04%","296",null,"4","75.98%",null,null,null,null,null,this);
            obj.set_taborder("156");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static107","18.91%","299",null,"4","75.11%",null,null,null,null,null,this);
            obj.set_taborder("157");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static108","18.91%","304",null,"4","75.11%",null,null,null,null,null,this);
            obj.set_taborder("158");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 3px 0px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Combo("cho_telNm00","132","259","85","21",null,null,null,null,null,null,this);
            obj.set_taborder("159");
            obj.set_innerdataset("ds_tel");
            obj.set_codecolumn("CM_CD");
            obj.set_datacolumn("CD_NM");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static109","24.46%","262",null,"16","73.59%",null,null,null,null,null,this);
            obj.set_taborder("160");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_telNm01","233","259","63","24",null,null,null,null,null,null,this);
            obj.set_taborder("161");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static110","32.83%","262",null,"16","62.83%",null,null,null,null,null,this);
            obj.set_taborder("162");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_telNm02","323","259","77","24",null,null,null,null,null,null,this);
            obj.set_taborder("163");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_telMask","534","259","70","28",null,null,null,null,null,null,this);
            obj.set_taborder("164");
            obj.set_text("마스킹처리");
            this.addChild(obj.name, obj);

            obj = new Static("sta_telNmMask","607","258","305","32",null,null,null,null,null,null,this);
            obj.set_taborder("165");
            obj.set_text("유선 전화번호 마스킹처리");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","0.98%","638",null,"21","4.67%",null,null,null,null,null,this);
            obj.set_taborder("166");
            obj.set_text("주요 개인정보 : 주민등록번호, 운전면허 번호, 여권번호, 외국인등록번호, 계좌번호, 신용카드 번호, 비밀번호, 휴대전화번호, 전화번호");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mask_juminNm","133","53","182","22",null,null,null,null,null,null,this);
            obj.set_taborder("167");
            obj.getSetter("mask").set("######-#######");
            obj.set_maskchar(" ");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Sample09.xfdl","lib::comLib.xjs");
        this.registerScript("Sample09.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 마스킹 처리 샘플
         * 파일명 		: Sample09.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2017.09.04
         *
         * 설  명		: 주민번호, 카드 번호, 전화번호 마스킹 처리 샘플
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2017.09.04	진성하   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/
        /**************************************************************************
         * 1. 필수 include(필수)
         ***************************************************************************/
        this.executeIncludeScript("lib::comLib.xjs"); /*include "lib::comLib.xjs"*/
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.form_onload = function (obj, e)
        {
        	/* 수행시간을 체크하는 공통함수 */
        	this.gfn_formOnLoad(obj);
        	/* 운전면허 앞자리 */
        	this.gfn_GetCmCdCombo("selectDriverNm", this.ds_driver, this.cho_driverNm00, "CMD_DRIVER_NUM", "", "");
        	/* 휴대전화 번호 앞자리 */
        	this.gfn_GetCmCdCombo("selectPhoneNm", this.ds_phone, this.cho_phoneNm00, "CMD_PHONE_NUM", "", "");
        	/* 지역번호 */
        	this.gfn_GetCmCdCombo("selectTelNm", this.ds_tel, this.cho_telNm00, "CMD_AREA_NUM", "", "");
        };

        /*
         * ds_masking :  마스킹 처리된 데이터셋
         * ds_noMasking :  마스킹 처리되지 않은 데이터셋
         * ds_fMasking :  마스킹 처리 + 마스킹 처리되지 않은 데이터셋
         */
        this.btn_search_onclick = function (obj, e)
        {
        	var sSvcID = "selectList";
        	var sController = "/cmtt01000/maskingSample.do";
        	var sOutDatasets = "ds_noMasking=ds_noMasking ds_fMasking=ds_fMasking";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectGrpCdList");
        	this.gfn_transaction(sSvcID, sController, "", sOutDatasets, sArgs);
        };

        this.fn_callBack = function (strSvcId, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode < 0)
        	{
        		trace("0 fn_callBack strErrorMsg: " + strErrorMsg);
        		return this.gfn_alert(strErrorMsg);
        	}
        	if (strSvcId == "selectList")
        	{
        		/* 조회 결과 성공 */
        	}
        };

        /* 마스킹 처리되지 않은 데이터를 다운로드  */
        this.btn_excelDn_onclick = function (obj, e)
        {
        	this.gfn_export_excel("Grid00", "개인정보", "개인정보");
        };

        /* 마스킹 처리된 데이터를 다운로드  */
        this.btn_mExcelDn_onclick = function (obj, e)
        {
        	this.gfn_export_excel("Grid02", "개인정보", "개인정보_마스킹처리");
        };


        /**************************************************************************
         * 3. MASKING 처리 관련 로직 처리
         ***************************************************************************/

        /* (1) 주민번호(외국인등록번호) 관련 처리 - START */
        this.btn_juminMask_onclick = function (obj, e)
        {
        	if (this.gfn_isNull(this.mask_juminNm.text))
        	{
        		this.mask_juminNm.setFocus();
        		return;
        	}
        	var juminNmArr = this.mask_juminNm.text.split("-");
        	var juminNm = juminNmArr[0] + juminNmArr[1];

        	var juminNmMask = this.gfn_private_info_mask("JUMIN_NUM", juminNm);
        	this.sta_juminMask.set_text(juminNmMask);
        };
        /* END */

        /* (2) 운전면허 관련 처리 - START */
        this.btn_driverMask_onclick = function (obj, e)
        {
        	if (this.gfn_isNull(this.cho_driverNm00.value))
        	{
        		this.cho_driverNm00.setFocus();
        		return;
        	}
        	else if (this.gfn_isNull(this.edt_driverNm01.text))
        	{
        		this.edt_driverNm01.setFocus();
        		return;
        	}
        	else if (this.gfn_isNull(this.edt_driverNm02.text))
        	{
        		this.edt_driverNm02.setFocus();
        		return;
        	}
        	else if (this.gfn_isNull(this.edt_driverNm03.text))
        	{
        		this.edt_driverNm03.setFocus();
        		return;
        	}
        	var driverNmMask = this.gfn_private_info_mask("DRIVER_LICENSE_NUM", this.cho_driverNm00.value + this.edt_driverNm01.text + this.edt_driverNm02.text + this.edt_driverNm03.text);
        	this.sta_driverNmMask.set_text(driverNmMask);
        };

        this.fn_driverNmOnTextChanged = function (obj, e)
        {
        	if (this.edt_driverNm01.text.length == 2)
        	{
        		this.edt_driverNm02.setFocus();
        	}
        	if (this.edt_driverNm02.text.length == 6)
        	{
        		this.edt_driverNm03.setFocus();
        	}
        };
        /* END */

        /* (3) 여권번호 관련 처리 - START */
        this.btn_passPortMask_onclick = function (obj, e)
        {
        	if (this.gfn_isNull(this.edt_passPortNm.text))
        	{
        		this.edt_passPortNm.setFocus();
        		return;
        	}
        	var passPortNmMask = this.gfn_private_info_mask("PASSPORT_NUM", this.edt_passPortNm.text);
        	this.sta_passPortNmMask.set_text(passPortNmMask);
        };
        /* END */

        /* (4) 계좌번호 관련 처리 - START */
        this.btn_acountMask_onclick = function (obj, e)
        {
        	if (this.gfn_isNull(this.edt_acountNm.text))
        	{
        		this.edt_acountNm.setFocus();
        		return;
        	}
        	var acountNmMask = this.gfn_private_info_mask("ACOUNT_NUM", this.edt_acountNm.text);
        	this.sta_acountNmMask.set_text(acountNmMask);
        };
        /* END */

        /* (5) 신용카드 번호 관련 처리 - START */
        this.btn_creditCardMask_onclick = function (obj, e)
        {
        	if (this.gfn_isNull(this.edt_creditCardNm00.text))
        	{
        		this.edt_creditCardNm00.setFocus();
        		return;
        	}
        	if (this.gfn_isNull(this.edt_creditCardNm01.text))
        	{
        		this.edt_creditCardNm01.setFocus();
        		return;
        	}
        	if (this.gfn_isNull(this.edt_creditCardNm02.text))
        	{
        		this.edt_creditCardNm02.setFocus();
        		return;
        	}
        	if (this.gfn_isNull(this.edt_creditCardNm03.text))
        	{
        		this.edt_creditCardNm03.setFocus();
        		return;
        	}
        	var creditCardNmMask = this.gfn_private_info_mask("CREDIT_CARD_NUM", this.edt_creditCardNm00.text + this.edt_creditCardNm01.text + this.edt_creditCardNm02.text + this.edt_creditCardNm03.text);
        	this.sta_creditCardNmMask.set_text(creditCardNmMask);
        };

        this.fn_creditOnTextChanged = function (obj, e)
        {
        	if (this.edt_creditCardNm00.text.length == 4)
        	{
        		this.edt_creditCardNm01.setFocus();
        	}
        	if (this.edt_creditCardNm01.text.length == 4)
        	{
        		this.edt_creditCardNm02.setFocus();
        	}
        	if (this.edt_creditCardNm02.text.length == 4)
        	{
        		this.edt_creditCardNm03.setFocus();
        	}
        };
        /* END */

        /* (6) 비밀 번호 관련 처리 - START */
        this.fn_passwordOnTextChanged = function (obj, e)
        {
        	var passwordMask = this.gfn_private_info_mask("PASSWORD", this.edt_password.text);
        	this.sta_passwordMask.set_text(passwordMask);
        };
        /* END */

        /* (7) 휴대전화 번호 관련 처리 - START */
        this.btn_phoneMask_onclick = function (obj, e)
        {
        	if (this.gfn_isNull(this.edt_phoneNm01.text))
        	{
        		this.edt_phoneNm01.setFocus();
        		return;
        	}
        	if (this.gfn_isNull(this.edt_phoneNm02.text))
        	{
        		this.edt_phoneNm02.setFocus();
        		return;
        	}
        	var phoneNmMask = this.gfn_private_info_mask("TEL_NUM", this.cho_phoneNm00.text + "-" + this.edt_phoneNm01.text + "-" + this.edt_phoneNm02.text);
        	this.sta_phoneNmMask.set_text(phoneNmMask);
        };

        this.fn_phoneNmOnTextChanged = function (obj, e)
        {
        	if (this.edt_phoneNm01.text.length == 4)
        	{
        		this.edt_phoneNm02.setFocus();
        	}
        };
        /* END */

        /* (8) 유선전화 번호 관련 처리 - START */
        this.btn_telMask_onclick = function (obj, e)
        {
        	if (this.gfn_isNull(this.edt_telNm01.text))
        	{
        		this.edt_telNm01.setFocus();
        		return;
        	}
        	if (this.gfn_isNull(this.edt_telNm02.text))
        	{
        		this.edt_telNm02.setFocus();
        		return;
        	}
        	var telNmMask = this.gfn_private_info_mask("TEL_NUM", this.cho_telNm00.value + "-" + this.edt_telNm01.text + "-" + this.edt_telNm02.text);
        	this.sta_telNmMask.set_text(telNmMask);
        };

        this.fn_telNmOnTextChanged = function (obj, e)
        {
        	if (this.edt_telNm01.text.length == 4)
        	{
        		this.edt_telNm02.setFocus();
        	}
        }/* END */

        ;

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.st_Title01.addEventHandler("onclick",this.st_Title01_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_excelDn.addEventHandler("onclick",this.btn_excelDn_onclick,this);
            this.btn_excelDn00.addEventHandler("onclick",this.btn_mExcelDn_onclick,this);
            this.cho_driverNm00.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.cho_driverNm00.addEventHandler("onmousemove",this.fn_msgKndCboToolTip,this);
            this.btn_juminMask.addEventHandler("onclick",this.btn_juminMask_onclick,this);
            this.st_Title00.addEventHandler("onclick",this.st_Title01_onclick,this);
            this.btn_driverMask.addEventHandler("onclick",this.btn_driverMask_onclick,this);
            this.btn_passPortMask.addEventHandler("onclick",this.btn_passPortMask_onclick,this);
            this.btn_acountMask.addEventHandler("onclick",this.btn_acountMask_onclick,this);
            this.btn_creditCardMask.addEventHandler("onclick",this.btn_creditCardMask_onclick,this);
            this.btn_passwordMask.addEventHandler("onclick",this.btn_creditCardMask_onclick,this);
            this.cho_phoneNm00.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.cho_phoneNm00.addEventHandler("onmousemove",this.fn_msgKndCboToolTip,this);
            this.btn_phoneMask.addEventHandler("onclick",this.btn_phoneMask_onclick,this);
            this.btn_telMask.addEventHandler("onclick",this.btn_telMask_onclick,this);
        };
        this.loadIncludeScript("Sample09.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
