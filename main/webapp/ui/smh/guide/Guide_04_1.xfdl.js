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
            this.set_titletext("상세영역(Sub)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1295,1103);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd00", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"파일명\" type=\"STRING\" size=\"256\"/><Column id=\"확장자\" type=\"STRING\" size=\"256\"/><Column id=\"파일크기\" type=\"STRING\" size=\"256\"/><Column id=\"내용\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">1</Col></Row><Row><Col id=\"No\">2</Col></Row><Row><Col id=\"No\">3</Col></Row><Row><Col id=\"No\">4</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_04_00_01_00","1","346","252","50",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("252");
            obj.set_cssclass("guide_size_HB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_01_00_00","252","346","253","50",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("252");
            obj.set_cssclass("guide_size_HB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_01_00_00_00","504","346","253","50",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("252");
            obj.set_cssclass("guide_size_HB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_01_00_00_00_00","756","346","252","50",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("251");
            obj.set_cssclass("guide_size_HB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_01_00_00_00_00_00","1007","346","246","50",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("251");
            obj.set_cssclass("guide_size_HB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_00","478","934","90","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("20px");
            obj.set_cssclass("guide_size_VL");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","0","105","1260","237",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_detail");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("label18","60.10%","105","9.54%",null,null,"5",null,null,null,null,this.Div01.form);
            obj.set_taborder("42");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("label06","60.10%","30","9.54%","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("36");
            obj.set_text("품목명(기존)");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("label11","60.10%","55","9.54%","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("37");
            obj.set_text("품목명(변경)");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("label16","60.10%","80","9.54%","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("38");
            obj.set_text("등록일");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("label01","0","5","9.54%","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("25");
            obj.set_text("변경구분");
            obj.set_cssclass("sta_WF_detailLabel2_P");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("label03","0","30","9.54%","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("26");
            obj.set_text("고객사(기존)");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("label08","0","55","9.54%","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("27");
            obj.set_text("고객사(변경)");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("label13","0","80","9.54%","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("28");
            obj.set_text("변경점 관리번호");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("label09","19.79%","55","9.54%","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("29");
            obj.set_text("품목(변경)");
            obj.set_cssclass("sta_WF_detailLabel2_P");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("label14","19.79%","80","9.54%","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("30");
            obj.set_text("요청부서");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("label02","39.90%","5","9.54%","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("31");
            obj.set_text("적용구분");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("label05","39.83%","30","9.54%","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("32");
            obj.set_text("품목 Rev.)기존)");
            obj.set_cssclass("sta_WF_detailLabel2_P");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("label10","39.83%","55","9.54%","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("33");
            obj.set_text("품목 Rev.(변경)");
            obj.set_cssclass("sta_WF_detailLabel2_P");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("label15","39.83%","80","9.54%","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("34");
            obj.set_text("변경점 요청자");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("label04","19.79%","30","9.54%","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("35");
            obj.set_text("품목(기존)");
            obj.set_cssclass("sta_WF_detailLabel2_P");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("label07","80.13%","30","9.54%","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("39");
            obj.set_text("사양담당(기존)");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("label12","80.13%","55","9.54%","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("40");
            obj.set_text("사양담당(변경)");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("label17","0","105","9.54%",null,null,"5",null,null,null,null,this.Div01.form);
            obj.set_taborder("41");
            obj.set_text("변경사유");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.Div01.addChild(obj.name, obj);

            obj = new CheckBox("chk_00","label01:5","5","70","20",null,null,null,null,null,null,this.Div01.form);
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

            obj = new CheckBox("chk_02","label02:5","5","45","20",null,null,null,null,null,null,this.Div01.form);
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

            obj = new Edit("edt_00","label03:5","30",null,"20","label04:0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_value("삼성전자무선구민2공장");
            obj.set_text("삼성전자무선구민2공장");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_search00",null,"30","22","20","label05:0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_finder");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_01","label04:5","30",null,"20","btn_search00:0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_02","label05:5","30",null,"20","label06:0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_03","label06:5","30",null,"20","label07:0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_04","label07:5","30",null,"20","5",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_05","label08:5","55",null,"20","label09:0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_search00_00",null,"55","22","20","label10:0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_finder");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_06","label09:5","55",null,"20","btn_search00_00:0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_cssclass("point");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_07","label10:5","55",null,"20","label11:0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_08","label11:5","55",null,"20","label12:0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("14");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_09","label12:5","55",null,"20","5",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("15");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_10","label13:5","80",null,"20","label14:0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("16");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_11","label14:5","80",null,"20","label15:0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("17");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_00","label15:5","80",null,"20","label16:0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("18");
            obj.set_text("cmb_00");
            this.Div01.addChild(obj.name, obj);

            obj = new Calendar("cal_00","label16:5","80","10.10%","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("19");
            this.Div01.addChild(obj.name, obj);

            obj = new TextArea("txt_00","label17:5","105",null,"125","label18:0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("20");
            obj.set_cssclass("point");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("grd_00","label18:5","133",null,"97","5",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("21");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_grd00");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"파일명\"/><Cell col=\"3\" text=\"확장자\"/><Cell col=\"4\" text=\"파일크기\"/><Cell col=\"5\" text=\"내용\" cssclass=\"cell_end\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:파일명\"/><Cell col=\"3\" text=\"bind:확장자\"/><Cell col=\"4\" text=\"bind:파일크기\"/><Cell col=\"5\" text=\"bind:내용\" cssclass=\"cell_end\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_grdDel",null,"105","26","24","34",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_grdAdd",null,"105","26","24","60",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button21_02_00",null,"105","29","24","5",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"51","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("상세영역(Sub)");
            obj.set_cssclass("sta_guide_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","15","891","392","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("* 상세영역은  Div(cssclass : div_WF_detail) 안에서 내용을 구성합니다.");
            obj.set_cssclass("sta_font_gray");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","27","959","198","94",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("상세영역");
            obj.set_cssclass("div_WF_detail");
            this.addChild(obj.name, obj);

            obj = new Static("Static62","27","928","144","21",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("cssclass : div_WF_detail");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","527","934","165","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Charge Description");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","527","903","171","21",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("cssclass : sta_WF_detailLabel2");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","767","903","185","21",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("cssclass : sta_WF_detailLabel2_P");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","767","934","165","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Charge Description");
            obj.set_cssclass("sta_WF_detailLabel2_P");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","0","849","141","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("기본 구성내용");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","881","11","247","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("* 라벨과 입력 컴포넌트 사이 간격은 5px,  \r\n라인과 입력 컴포넌트 사이 간격은 5px입니다.");
            obj.set_cssclass("sta_font_gray");
            obj.set_usedecorate("true");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","376","832","377","42",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("* 입력 컴포넌트와 입력 컴포넌트 사이 간격은 3px입니다.\r\n* 입력 컴포넌트와 버튼, 버튼과 입력컴포넌트 사이간격은 0px 입니다.\r\n* 입력 컴포넌트와 단위 표시 사이 간격은 5px입니다.");
            obj.set_cssclass("sta_font_gray");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00","2","397","141","28",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("width 960px");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","74","141","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("width 1260px");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Div("Div01_00","0","425","960","237",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("div_WF_detail");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("label17","59.5%","105","9.39%",null,null,"5",null,null,null,null,this.Div01_00.form);
            obj.set_taborder("42");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("label05","59.5%","30","9.39%","20",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("36");
            obj.set_text("품목명(기존)");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("label10","59.5%","55","9.39%","20",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("37");
            obj.set_text("품목명(변경)");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("label15","59.5%","80","9.39%","20",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("38");
            obj.set_text("등록일");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("label00","0","5","9.5%","20",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("25");
            obj.set_text("변경구분");
            obj.set_cssclass("sta_WF_detailLabel2_P");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("label02","0","30","9.5%","20",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("26");
            obj.set_text("고객사(기존)");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("label07","0","55","9.5%","20",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("27");
            obj.set_text("고객사(변경)");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("label12","0","80","9.5%","20",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("28");
            obj.set_text("변경점 관리번호");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("label08","19.94%","55","9.39%","20",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("29");
            obj.set_text("품목(변경)");
            obj.set_cssclass("sta_WF_detailLabel2_P");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("label13","19.94%","80","9.39%","20",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("30");
            obj.set_text("요청부서");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("label01","39.67%","5","9.39%","20",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("31");
            obj.set_text("적용구분");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("label04","39.67%","30","9.39%","20",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("32");
            obj.set_text("품목 Rev.)기존)");
            obj.set_cssclass("sta_WF_detailLabel2_P");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("label09","380","55","9.39%","20",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("33");
            obj.set_text("품목 Rev.(변경)");
            obj.set_cssclass("sta_WF_detailLabel2_P");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("label14","39.67%","80","9.39%","20",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("34");
            obj.set_text("변경점 요청자");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("label03","19.94%","30","9.39%","20",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("35");
            obj.set_text("품목(기존)");
            obj.set_cssclass("sta_WF_detailLabel2_P");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("label06","79.23%","30","9.39%","20",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("39");
            obj.set_text("사양담당(기존)");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("label11","79.23%","55","9.39%","20",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("40");
            obj.set_text("사양담당(변경)");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("label16","0","105","9.5%",null,null,"5",null,null,null,null,this.Div01_00.form);
            obj.set_taborder("41");
            obj.set_text("변경사유");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.Div01_00.addChild(obj.name, obj);

            obj = new CheckBox("chk_00","label00:5","5","70","20",null,null,null,null,null,null,this.Div01_00.form);
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

            obj = new CheckBox("chk_02","label01:6","5","45","20",null,null,null,null,null,null,this.Div01_00.form);
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

            obj = new Edit("edt_00","label02:5","30",null,"20","label03:0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("4");
            obj.set_value("삼성전자무선구민2공장");
            obj.set_text("삼성전자무선구민2공장");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("btn_search00",null,"30","22","20","label04:0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_finder");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("edt_01","label03:5","30",null,"20","btn_search00:0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("5");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("edt_02","label04:5","30",null,"20","label05:0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("7");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("edt_03","label05:5","30",null,"20","label06:0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("8");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("edt_04","label06:5","30",null,"20","5",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("9");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("edt_05","label07:5","55",null,"20","label08:0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("10");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("btn_search00_00",null,"55","22","20","label09:0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_finder");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("edt_06","label08:5","55",null,"20","btn_search00_00:0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("point");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("edt_07","label09:5","55",null,"20","label10:0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("13");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("edt_08","label10:5","55",null,"20","label11:0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("14");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("edt_09","label11:5","55",null,"20","5",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("15");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("edt_10","label12:5","80",null,"20","label13:0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("16");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("edt_11","label13:5","80",null,"20","label14:0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("17");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Combo("cmb_00","label14:5","80",null,"20","label15:0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("18");
            obj.set_text("cmb_00");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Calendar("cal_00","label15:5","80","10.02%","20",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("19");
            this.Div01_00.addChild(obj.name, obj);

            obj = new TextArea("txt_00","label16:5","105",null,"125","label17:0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("20");
            obj.set_cssclass("point");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Grid("grd_00","label17:5","133",null,"97","5",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("21");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_grd00");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"파일명\"/><Cell col=\"3\" text=\"확장자\"/><Cell col=\"4\" text=\"파일크기\"/><Cell col=\"5\" text=\"내용\" cssclass=\"cell_end\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:파일명\"/><Cell col=\"3\" text=\"bind:확장자\"/><Cell col=\"4\" text=\"bind:파일크기\"/><Cell col=\"5\" text=\"bind:내용\" cssclass=\"cell_end\"/></Band></Format></Formats>");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("btn_grdDel",null,"105","26","24","34",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("btn_grdAdd",null,"105","26","24","60",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button21_02_00",null,"105","29","24","5",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"130","18","97","181",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("43");
            obj.set_text("w\r\n18");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static22_01_00_00_00","432","80","230","21",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("입력창은 왼쪽 라벨과 0px의 간격을 둡니다.");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_01","1","316","126","50",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("126");
            obj.set_cssclass("guide_size_HB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_01_01","126","316","127","50",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("124");
            obj.set_cssclass("guide_size_HB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_01_02","1","646","90","50",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("90");
            obj.set_cssclass("guide_size_HB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_01_01_00","97","646","94","50",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("94");
            obj.set_cssclass("guide_size_HB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_01_00_01","1","676","190","50",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("190");
            obj.set_cssclass("guide_size_HB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_01_00_00_01","190","676","191","50",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("190");
            obj.set_cssclass("guide_size_HB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_01_00_00_00_01","380","676","191","50",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("190");
            obj.set_cssclass("guide_size_HB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_01_00_00_00_00_01","570","676","191","50",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("190");
            obj.set_cssclass("guide_size_HB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_01_00_00_00_00_00_00","760","676","193","50",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("193");
            obj.set_cssclass("guide_size_HB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_01_00_01_00","0","716","960","50",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("960");
            obj.set_cssclass("guide_size_HB");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1295,1103,this,function(p){});
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
        this.loadIncludeScript("Guide_04_1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
