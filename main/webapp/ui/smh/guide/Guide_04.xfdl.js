(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("guide_04");
            this.set_titletext("상세영역(Master)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1295,1526);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd00", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"파일명\" type=\"STRING\" size=\"256\"/><Column id=\"확장자\" type=\"STRING\" size=\"256\"/><Column id=\"파일크기\" type=\"STRING\" size=\"256\"/><Column id=\"내용\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">1</Col></Row><Row><Col id=\"No\">2</Col></Row><Row><Col id=\"No\">3</Col></Row><Row><Col id=\"No\">4</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_04_01","204","951","70","31",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("31px");
            obj.set_cssclass("guide_size_VR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_00_00","478","984","90","32",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("32px");
            obj.set_cssclass("guide_size_VL");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_00","478","894","90","32",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("32px");
            obj.set_cssclass("guide_size_VL");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","0","105","1260","264",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00_00","60.1%","124",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_detailBg");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static33_00_00","60.1%","124","9.54%",null,null,"0",null,null,null,null,this.Div01.form);
            obj.set_taborder("43");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_00","0","124",null,null,"Static33_00_00:0","0",null,null,null,null,this.Div01.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_detailBg");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static28_01","60.1%","31","9.54%","31",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("36");
            obj.set_text("품목명(기존)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static36_00","60.1%","62","9.54%","31",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("37");
            obj.set_text("품목명(변경)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static40_00","60.1%","93","9.54%","31",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("38");
            obj.set_text("등록일");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","9.54%","31",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("25");
            obj.set_text("변경구분");
            obj.set_cssclass("sta_WF_detailLabel_P");
            obj.set_wordWrap("english");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static31","0","31","9.54%","31",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("26");
            obj.set_text("고객사(기존)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static32","0","62","9.54%","31",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("27");
            obj.set_text("고객사(변경)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static33","0","93","9.54%","31",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("28");
            obj.set_text("변경점 관리번호");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27","20.03%","62","9.54%","31",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("29");
            obj.set_text("품목(변경)");
            obj.set_cssclass("sta_WF_detailLabel_P");
            obj.set_wordWrap("english");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static38","20.03%","93","9.54%","31",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("30");
            obj.set_text("요청부서");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static29","40.06%","0","9.54%","31",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("31");
            obj.set_text("적용구분");
            obj.set_cssclass("sta_WF_detailLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static28","40.06%","31","9.54%","31",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("32");
            obj.set_text("품목 Rev.)기존)");
            obj.set_cssclass("sta_WF_detailLabel_P");
            obj.set_wordWrap("english");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static36","40.06%","62","9.54%","31",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("33");
            obj.set_text("품목 Rev.(변경)");
            obj.set_cssclass("sta_WF_detailLabel_P");
            obj.set_wordWrap("english");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static40","40.06%","93","9.54%","31",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("34");
            obj.set_text("변경점 요청자");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static29_00","20.03%","31","9.54%","31",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("35");
            obj.set_text("품목(기존)");
            obj.set_cssclass("sta_WF_detailLabel_P");
            obj.set_wordWrap("english");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static28_01_00","80.05%","31","9.54%","31",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("39");
            obj.set_text("사양담당(기존)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static36_00_00","80.05%","62","9.54%","31",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("40");
            obj.set_text("사양담당(변경)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static33_00","0","124","9.54%",null,null,"0",null,null,null,null,this.Div01.form);
            obj.set_taborder("41");
            obj.set_text("변경사유");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.Div01.addChild(obj.name, obj);

            obj = new CheckBox("chk_00","Static30:5","5","70","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("고객변경");
            obj.set_value("true");
            obj.set_readonly("true");
            this.Div01.addChild(obj.name, obj);

            obj = new CheckBox("chk_01","chk_00:10","5","80","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("사내변경");
            obj.set_readonly("true");
            this.Div01.addChild(obj.name, obj);

            obj = new CheckBox("chk_02","Static29:5","5","45","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("R/C");
            obj.set_value("true");
            obj.set_readonly("true");
            this.Div01.addChild(obj.name, obj);

            obj = new CheckBox("chk_03","chk_02:10","5","70","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("차기투입");
            obj.set_readonly("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_00","Static31:5","36",null,"20","Static29_00:5",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_value("삼성전자무선구민2공장");
            obj.set_text("삼성전자무선구민2공장");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_search00",null,"36","22","20","Static28:5",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_finder");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_01","Static29_00:5","36",null,"20","btn_search00:0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_02","Static28:5","36",null,"20","Static28_01:5",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_03","Static28_01:5","36",null,"20","Static28_01_00:5",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_04","Static28_01_00:5","36",null,"20","5",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_05","Static32:5","67",null,"20","Static27:5",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_search00_00",null,"67","22","20","Static36:5",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_finder");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_06","Static27:5","67",null,"20","btn_search00_00:0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_cssclass("point");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_07","Static36:5","67",null,"20","Static36_00:5",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_08","Static36_00:5","67",null,"20","Static36_00_00:5",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("14");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_09","Static36_00_00:5","67",null,"20","5",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("15");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_10","Static33:5","98",null,"20","Static38:5",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("16");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_11","Static38:5","98",null,"20","Static40:6",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("17");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_00","Static40:5","98",null,"20","Static40_00:5",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("18");
            obj.set_text("cmb_00");
            this.Div01.addChild(obj.name, obj);

            obj = new Calendar("cal_00","Static40_00:5","98","9.7%","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("19");
            this.Div01.addChild(obj.name, obj);

            obj = new TextArea("txt_00","Static33_00:5","129",null,"128","Static33_00_00:5",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("20");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("grd_00","Static33_00_00:5","160",null,"97","5",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("21");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_grd00");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"파일명\"/><Cell col=\"3\" text=\"확장자\"/><Cell col=\"4\" text=\"파일크기\"/><Cell col=\"5\" text=\"내용\" cssclass=\"cell_end\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:파일명\"/><Cell col=\"3\" text=\"bind:확장자\"/><Cell col=\"4\" text=\"bind:파일크기\"/><Cell col=\"5\" text=\"bind:내용\" cssclass=\"cell_end\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_grdDel",null,"132","26","24","34",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_grdAdd",null,"132","26","24","60",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button21_02_00",null,"132","29","24","5",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"51","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("상세영역(Master)");
            obj.set_cssclass("sta_guide_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","15","851","392","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("* 상세영역은  Div(cssclass : div_WF_detail) 안에서 내용을 구성합니다.");
            obj.set_cssclass("sta_font_gray");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","27","919","198","94",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("상세영역");
            obj.set_cssclass("div_WF_detail_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","39","1029","229","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("* Div는 기본적으로 \r\n  라인을 포함하고 있습니다.");
            obj.set_cssclass("sta_font_gray");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static62","27","888","144","21",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("cssclass : div_WF_detail_line");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","527","894","165","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Charge Description");
            obj.set_cssclass("sta_WF_detailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","527","984","165","32",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Charge Description");
            obj.set_cssclass("sta_WF_detailLabel_P");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","527","863","171","21",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("cssclass : sta_WF_detailLabel");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","527","953","185","21",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("cssclass : sta_WF_detailLabel_P");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","291","1068","192","21",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("cssclass : sta_WF_detailBg");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","291","1099","165","32",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_detailBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","767","953","185","21",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("cssclass : sta_WF_detailLabel_C");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","767","984","165","32",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Charge Description");
            obj.set_cssclass("sta_WF_detailLabel_C");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","767","863","185","21",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("cssclass : sta_WF_detailLabel_R");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","767","894","165","32",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Charge Description");
            obj.set_cssclass("sta_WF_detailLabel_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","0","809","141","28",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("기본 구성내용");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","881","11","247","28",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("* 라벨과 입력 컴포넌트 사이 간격은 5px,  \r\n라인과 입력 컴포넌트 사이 간격은 5px입니다.");
            obj.set_cssclass("sta_font_gray");
            obj.set_usedecorate("true");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","383","788","377","42",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("* 입력 컴포넌트와 입력 컴포넌트 사이 간격은 3px입니다.\r\n* 입력 컴포넌트와 버튼, 버튼과 입력컴포넌트 사이간격은 0px 입니다.\r\n* 입력 컴포넌트와 단위 표시 사이 간격은 5px입니다.");
            obj.set_cssclass("sta_font_gray");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","527","1355",null,"130","277",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","165","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("Charge Type");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static00","0","31","165","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_text("Charge Type");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static10","0","62",null,"67","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_detailBg");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01","0","62","165","67",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_text("Charge Type");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.Div02.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","170","67",null,null,"5","6",null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static24","291","1179","165","42",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_detailBg_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","291","1148","182","21",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("cssclass : sta_WF_detailBg_line");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","291","1269","165","32",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("Charge Description");
            obj.set_cssclass("sta_WF_detailSum_C");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","291","1238","184","21",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("cssclass : sta_WF_detailSum_C");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static29","527","1238","171","21",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("cssclass : sta_WF_detailSum_R");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","527","1269","165","32",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("Charge Description");
            obj.set_cssclass("sta_WF_detailSum_R");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","291","1354","165","136",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("Div03");
            obj.set_cssclass("div_WF_detail");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","2","558","252","25",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01_00","802","1295","181","28",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text(" cssclass : div_WF_detail_line\r\n");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05_00_00","756","1306","40","65",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("guide_cssLine_TR");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01_00_00","828","1389","181","28",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text(" cssclass : sta_WF_detailBg");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05_00_00_00","782","1400","40","22",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_cssclass("guide_cssLine_TR");
            this.addChild(obj.name, obj);

            obj = new Div("Div01_00","0","455",null,"264","335",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00_00","60.1%","124",null,null,"0","0",null,null,null,null,this.Div01_00.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_detailBg");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static33_00_00","60.10%","124","9.54%",null,null,"0",null,null,null,null,this.Div01_00.form);
            obj.set_taborder("43");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("sta_00","0","124",null,null,"Static33_00_00:0","0",null,null,null,null,this.Div01_00.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_detailBg");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static28_01","60.1%","31","9.54%","31",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("36");
            obj.set_text("품목명(기존)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static36_00","60.1%","62","9.54%","31",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("37");
            obj.set_text("품목명(변경)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static40_00","60.1%","93","9.54%","31",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("38");
            obj.set_text("등록일");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","9.54%","31",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("25");
            obj.set_text("변경구분");
            obj.set_cssclass("sta_WF_detailLabel_P");
            obj.set_wordWrap("english");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static31","0","31","9.54%","31",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("26");
            obj.set_text("고객사(기존)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static32","0","62","9.54%","31",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("27");
            obj.set_text("고객사(변경)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static33","0","93","9.54%","31",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("28");
            obj.set_text("변경점 관리번호");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static27","20.03%","62","9.54%","31",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("29");
            obj.set_text("품목(변경)");
            obj.set_cssclass("sta_WF_detailLabel_P");
            obj.set_wordWrap("english");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static38","20.03%","93","9.54%","31",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("30");
            obj.set_text("요청부서");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static29","40.06%","0","9.54%","31",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("31");
            obj.set_text("적용구분");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static28","40.06%","31","9.54%","31",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("32");
            obj.set_text("품목 Rev.)기존)");
            obj.set_cssclass("sta_WF_detailLabel_P");
            obj.set_wordWrap("english");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static36","40.06%","62","9.54%","31",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("33");
            obj.set_text("품목 Rev.(변경)");
            obj.set_cssclass("sta_WF_detailLabel_P");
            obj.set_wordWrap("english");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static40","40.06%","93","9.54%","31",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("34");
            obj.set_text("변경점 요청자");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static29_00","20.03%","31","9.54%","31",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("35");
            obj.set_text("품목(기존)");
            obj.set_cssclass("sta_WF_detailLabel_P");
            obj.set_wordWrap("english");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static28_01_00","80.13%","31","9.54%","31",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("39");
            obj.set_text("사양담당(기존)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static36_00_00","80.13%","62","9.54%","31",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("40");
            obj.set_text("사양담당(변경)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static33_00","0","124","9.54%",null,null,"0",null,null,null,null,this.Div01_00.form);
            obj.set_taborder("41");
            obj.set_text("변경사유");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.Div01_00.addChild(obj.name, obj);

            obj = new CheckBox("chk_00","Static30:5","5","70","20",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("0");
            obj.set_text("고객변경");
            obj.set_value("true");
            obj.set_readonly("true");
            this.Div01_00.addChild(obj.name, obj);

            obj = new CheckBox("chk_01","chk_00:10","5","80","20",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("1");
            obj.set_text("사내변경");
            obj.set_readonly("true");
            this.Div01_00.addChild(obj.name, obj);

            obj = new CheckBox("chk_02","Static29:5","5","45","20",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("2");
            obj.set_text("R/C");
            obj.set_value("true");
            obj.set_readonly("true");
            this.Div01_00.addChild(obj.name, obj);

            obj = new CheckBox("chk_03","chk_02:10","5","70","20",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("3");
            obj.set_text("차기투입");
            obj.set_readonly("true");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("edt_00","Static31:5","36",null,"20","Static29_00:5",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("4");
            obj.set_value("삼성전자무선구민2공장");
            obj.set_text("삼성전자무선구민2공장");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("btn_search00",null,"36","22","20","Static28:5",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_finder");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("edt_01","Static29_00:5","36",null,"20","btn_search00:0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("5");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("edt_02","Static28:5","36",null,"20","Static28_01:5",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("7");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("edt_03","Static28_01:5","36",null,"20","Static28_01_00:5",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("8");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("edt_04","Static28_01_00:5","36",null,"20","5",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("9");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("edt_05","Static32:5","67",null,"20","Static27:5",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("10");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("btn_search00_00",null,"67","22","20","Static36:5",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_finder");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("edt_06","Static27:5","67",null,"20","btn_search00_00:0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("point");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("edt_07","Static36:5","67",null,"20","Static36_00:5",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("13");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("edt_08","Static36_00:5","67",null,"20","Static36_00_00:5",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("14");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("edt_09","Static36_00_00:5","67",null,"20","5",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("15");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("edt_10","Static33:5","98",null,"20","Static38:5",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("16");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("edt_11","Static38:5","98",null,"20","Static40:6",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("17");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Combo("cmb_00","Static40:5","98",null,"20","Static40_00:5",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("18");
            obj.set_text("cmb_00");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Calendar("cal_00","Static40_00:5","98","9.7%","20",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("19");
            this.Div01_00.addChild(obj.name, obj);

            obj = new TextArea("txt_00","Static33_00:5","129",null,"128","Static33_00_00:5",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("20");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Grid("grd_00","Static33_00_00:5","160",null,"97","5",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("21");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_grd00");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"파일명\"/><Cell col=\"3\" text=\"확장자\"/><Cell col=\"4\" text=\"파일크기\"/><Cell col=\"5\" text=\"내용\" cssclass=\"cell_end\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:파일명\"/><Cell col=\"3\" text=\"bind:확장자\"/><Cell col=\"4\" text=\"bind:파일크기\"/><Cell col=\"5\" text=\"bind:내용\" cssclass=\"cell_end\"/></Band></Format></Formats>");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("btn_grdDel",null,"132","26","24","34",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("btn_grdAdd",null,"132","26","24","60",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button21_02_00",null,"132","29","24","5",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static20_00","2","427","141","28",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("width 960px");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","74","141","28",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("width 1260px");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","296","447","10","5",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_00","283","457","5","15",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_00_00","379","457","5","15",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static11_00","964","952","215","21",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("cssclass : sta_WF_detailLabel_Master");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static12_00","964","983","165","32",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("Head Master");
            obj.set_cssclass("sta_WF_detailLabel_Master");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_01","1","346","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("120");
            obj.set_cssclass("guide_size_HB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_01_00","1","376","252","50",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("252");
            obj.set_cssclass("guide_size_HB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_01_01","120","346","133","50",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("132");
            obj.set_cssclass("guide_size_HB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_01_00_00","252","376","253","50",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("252");
            obj.set_cssclass("guide_size_HB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_01_00_00_00","504","376","253","50",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("252");
            obj.set_cssclass("guide_size_HB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_01_00_00_00_00","756","376","252","50",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("251");
            obj.set_cssclass("guide_size_HB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_01_00_00_00_00_00","1007","376","252","50",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("251");
            obj.set_cssclass("guide_size_HB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_01_00_01","1","706","192","50",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("191");
            obj.set_cssclass("guide_size_HB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_01_00_01_00","192","706","192","50",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("191");
            obj.set_cssclass("guide_size_HB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_01_00_01_00_00","574","706","192","50",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("191");
            obj.set_cssclass("guide_size_HB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_01_00_01_01","383","706","192","50",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("191");
            obj.set_cssclass("guide_size_HB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_01_00_01_00_00_00","765","706","192","50",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("191");
            obj.set_cssclass("guide_size_HB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05_00","887","686","123","20",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_cssclass("guide_cssLine_BR");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01_00_00_00","1015","692","151","21",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("cssclass : grd_sub");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1295,1526,this,function(p){});
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
        this.loadIncludeScript("Guide_04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
