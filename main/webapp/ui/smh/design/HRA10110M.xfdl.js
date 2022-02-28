(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HRA10110M");
            this.set_titletext("My Profile");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Tab("div_work_00","0","288",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            obj.set_background("url(\'theme://images/bg_tab_master.png\') repeat-y left top #ffffff");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work_00);
            obj.set_text("인적사항");
            obj.set_tooltiptext("인적사항");
            this.div_work_00.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","241","34",null,null,null,null,null,null,this.div_work_00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("인적사항");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("인적사항");
            this.div_work_00.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_basicInfo","0","34",null,"249","0",null,null,null,null,null,this.div_work_00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.div_work_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_site","0","0","120","31",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("0");
            obj.set_text("<fc v=\'red\'>*</fc>생년월일");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("생년월일");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_area","580","0","120","31",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("1");
            obj.set_text("결혼여부");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("결혼여부");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_inspector","290","0","120","31",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("2");
            obj.set_text("음양");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("음양");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_certdate","0","31","120","31",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("3");
            obj.set_text("본적");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("본적");
            obj.set_usedecorate("false");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_enterdate","580","31","120","31",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("4");
            obj.set_text("결혼기념일");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("결혼기념일");
            obj.set_usedecorate("false");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_00","125","36","440","20",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("11");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Combo("cmb_inspectionclassid00_00","415","5","150","20",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("6");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_certdate00","0","62","120","31",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("7");
            obj.set_text("<fc v=\'red\'>*</fc>현주소");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("현주소");
            obj.set_usedecorate("true");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_certdate00_00","0","93","120","31",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("9");
            obj.set_text("집전화");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("집전화");
            obj.set_usedecorate("false");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_inspectionclassid00_00","290","93","120","31",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("10");
            obj.set_text("휴대전화");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("휴대전화");
            obj.set_usedecorate("false");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_enterdate00_00","580","93","120","31",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("12");
            obj.set_text("<fc v=\'red\'>*</fc>비상전화");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("비상전화");
            obj.set_usedecorate("true");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_certdate00_00_00","0","124","120","31",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("14");
            obj.set_text("보훈구분");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("보훈구분");
            obj.set_usedecorate("false");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_inspectionclassid00_00_00","290","124","120","31",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("17");
            obj.set_text("보훈관계");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("보훈관계");
            obj.set_usedecorate("false");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_enterdate00_00_00","580","124","120","31",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("19");
            obj.set_text("보훈번호");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("보훈번호");
            obj.set_usedecorate("false");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_certdate00_00_00_00","0","155","120","31",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("21");
            obj.set_text("장애구분");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("장애구분");
            obj.set_usedecorate("false");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_inspectionclassid00_00_00_00","290","155","120","31",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("23");
            obj.set_text("장애등급");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("장애등급");
            obj.set_usedecorate("false");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_enterdate00_00_00_00","580","155","120","31",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("25");
            obj.set_text("인정일자");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("인정일자");
            obj.set_usedecorate("false");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_certdate00_00_00_00_00","0","186","120","31",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("27");
            obj.set_text("병역구분");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("병역구분");
            obj.set_usedecorate("false");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_inspectionclassid00_00_00_00_00","290","186","120","31",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("28");
            obj.set_text("전역/면제사유");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("전역/면제사유");
            obj.set_usedecorate("false");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_enterdate00_00_00_00_00","580","186","120","31",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("29");
            obj.set_text("입대일");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("입대일");
            obj.set_usedecorate("false");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_certdate00_00_00_00_00_00","0","217","120","31",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("31");
            obj.set_text("군별");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("군별");
            obj.set_usedecorate("false");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_inspectionclassid00_00_00_00_00_00","290","217","120","31",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("33");
            obj.set_text("계급");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("계급");
            obj.set_usedecorate("false");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_enterdate00_00_00_00_00_00","580","217","120","31",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("35");
            obj.set_text("제대일");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("제대일");
            obj.set_usedecorate("false");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Calendar("cal_00","125","5","150","20",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Combo("cmb_inspectionclassid00_00_00","705","5","150","20",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("8");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Calendar("cal_00_00","705","36","150","20",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_02_01","125","67","390","20",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("37");
            obj.set_readonly("true");
            obj.set_text("서울 강서구 강서로 56나길 110(등촌동, 부영아파트)");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Button("Button02_00_00","515","67","22","20",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_finder");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_00_00","540","67","315","20",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("16");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00","125","98","150","20",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("18");
            obj.set_text("9928");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00","415","98","150","20",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("20");
            obj.set_text("9928");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_00","705","98","150","20",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("22");
            obj.set_text("9928");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_01","125","129","150","20",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("24");
            obj.set_cssclass("display");
            obj.set_text("9928");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_01","415","129","150","20",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("26");
            obj.set_cssclass("display");
            obj.set_text("9928");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_00_00","705","129","150","20",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("30");
            obj.set_cssclass("display");
            obj.set_text("9928");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_01_00","125","160","150","20",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("32");
            obj.set_cssclass("display");
            obj.set_text("9928");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_01_00","415","160","150","20",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("34");
            obj.set_cssclass("display");
            obj.set_text("9928");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_00_00_00","705","160","150","20",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("36");
            obj.set_cssclass("display");
            obj.set_text("9928");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_01_00_00","125","191","150","20",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("38");
            obj.set_cssclass("display");
            obj.set_text("9928");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_01_00_00","415","191","150","20",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("39");
            obj.set_cssclass("display");
            obj.set_text("9928");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_00_00_00_00","705","191","150","20",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("40");
            obj.set_cssclass("display");
            obj.set_text("9928");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_01_00_00_00","125","222","150","20",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("41");
            obj.set_cssclass("display");
            obj.set_text("9928");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_01_00_00_00","415","222","150","20",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("42");
            obj.set_cssclass("display");
            obj.set_text("9928");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00_00_00_00_00_00","705","222","150","20",null,null,null,null,null,null,this.div_work_00.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("43");
            obj.set_cssclass("display");
            obj.set_text("9928");
            this.div_work_00.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work_00);
            obj.set_text("학력사항");
            obj.set_tooltiptext("학력사항");
            this.div_work_00.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory","0","34",null,null,"0","10",null,null,null,null,this.div_work_00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamQcinspectorhistory");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"240\"/><Column size=\"100\"/><Column size=\"220\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/></Rows><Band id=\"head\"><Cell text=\"입학일\" tooltiptext=\"입학일\"/><Cell col=\"1\" text=\"졸업일\" tooltiptext=\"졸업일\"/><Cell col=\"2\" text=\"학교명\" tooltiptext=\"학교명\"/><Cell col=\"3\" text=\"본분교\" tooltiptext=\"본분교\"/><Cell col=\"4\" text=\"전공\" tooltiptext=\"전공\"/><Cell col=\"5\" text=\"학위\" tooltiptext=\"학위\"/></Band></Format></Formats>");
            this.div_work_00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","141","34",null,null,null,null,null,null,this.div_work_00.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("학력사항");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("학력사항");
            this.div_work_00.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.div_work_00);
            obj.set_text("가족사항");
            obj.set_tooltiptext("가족사항");
            this.div_work_00.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","211","34",null,null,null,null,null,null,this.div_work_00.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_text("가족사항");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("가족사항");
            this.div_work_00.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_addline",null,"7","60","20","66",null,null,null,null,null,this.div_work_00.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_text("행추가");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("행추가");
            this.div_work_00.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_delline",null,"7","60","20","0",null,null,null,null,null,this.div_work_00.Tabpage3.form);
            obj.set_taborder("2");
            obj.set_text("행삭제");
            obj.set_tooltiptext("출력");
            this.div_work_00.Tabpage3.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory","0","34",null,null,"0","10",null,null,null,null,this.div_work_00.Tabpage3.form);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamQcinspectorhistory");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"&lt;fc v=&apos;red&apos;&gt;*&lt;/fc&gt;관계\" tooltiptext=\"관계\" displaytype=\"decoratetext\"/><Cell col=\"2\" text=\"&lt;fc v=&apos;red&apos;&gt;*&lt;/fc&gt;성명(Sur)\" displaytype=\"decoratetext\" tooltiptext=\"성명(Sur)\"/><Cell col=\"3\" text=\"&lt;fc v=&apos;red&apos;&gt;*&lt;/fc&gt;성명(Given)\" displaytype=\"decoratetext\" tooltiptext=\"성명(Given)\"/><Cell col=\"4\" text=\"&lt;fc v=&apos;red&apos;&gt;*&lt;/fc&gt;성별\" displaytype=\"decoratetext\" tooltiptext=\"성별\"/><Cell col=\"5\" text=\"&lt;fc v=&apos;red&apos;&gt;*&lt;/fc&gt;주민번호\" displaytype=\"decoratetext\" tooltiptext=\"주민번호\"/><Cell col=\"6\" text=\"&lt;fc v=&apos;red&apos;&gt;*&lt;/fc&gt;생년월일\" displaytype=\"decoratetext\" tooltiptext=\"생년월일\"/><Cell col=\"7\" text=\"&lt;fc v=&apos;red&apos;&gt;*&lt;/fc&gt;동거여부\" displaytype=\"decoratetext\" tooltiptext=\"동거여부\"/></Band></Format></Formats>");
            this.div_work_00.Tabpage3.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.div_work_00);
            obj.set_text("외국어자격");
            obj.set_tooltiptext("외국어자격");
            this.div_work_00.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","211","34",null,null,null,null,null,null,this.div_work_00.Tabpage4.form);
            obj.set_taborder("0");
            obj.set_text("외국어자격");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("외국어자격");
            this.div_work_00.Tabpage4.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory","0","34",null,null,"0","10",null,null,null,null,this.div_work_00.Tabpage4.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamQcinspectorhistory");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"160\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"240\"/></Columns><Rows><Row size=\"24\" band=\"head\"/></Rows><Band id=\"head\"><Cell text=\"구분\" tooltiptext=\"구분\"/><Cell col=\"1\" text=\"자격명\" tooltiptext=\"자격명\"/><Cell col=\"2\" text=\"점수\" tooltiptext=\"점수\"/><Cell col=\"3\" text=\"만점기준\" tooltiptext=\"만점기준\"/><Cell col=\"4\" text=\"취득일자\" tooltiptext=\"취득일자\"/><Cell col=\"5\" text=\"최종여부\" tooltiptext=\"최종여부\"/><Cell col=\"6\" text=\"평가기관\" tooltiptext=\"평가기관\"/></Band></Format></Formats>");
            this.div_work_00.Tabpage4.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.div_work_00);
            obj.set_text("자격면허");
            obj.set_tooltiptext("자격면허");
            this.div_work_00.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","211","34",null,null,null,null,null,null,this.div_work_00.Tabpage5.form);
            obj.set_taborder("0");
            obj.set_text("자격면허");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("자격면허");
            this.div_work_00.Tabpage5.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory","0","34",null,null,"0","10",null,null,null,null,this.div_work_00.Tabpage5.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamQcinspectorhistory");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"240\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"220\"/></Columns><Rows><Row size=\"24\" band=\"head\"/></Rows><Band id=\"head\"><Cell text=\"자격증\" tooltiptext=\"자격증\"/><Cell col=\"1\" text=\"자격증번호\" tooltiptext=\"자격증번호\"/><Cell col=\"2\" text=\"취득일자\" tooltiptext=\"취득일자\"/><Cell col=\"3\" text=\"만료일자\" tooltiptext=\"만료일자\"/><Cell col=\"4\" text=\"발급처\" tooltiptext=\"발급처\"/></Band></Format></Formats>");
            this.div_work_00.Tabpage5.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage6",this.div_work_00);
            obj.set_text("여권&비자");
            obj.set_tooltiptext("여권&비자");
            this.div_work_00.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","211","34",null,null,null,null,null,null,this.div_work_00.Tabpage6.form);
            obj.set_taborder("0");
            obj.set_text("여권/비자");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("가족사항");
            this.div_work_00.Tabpage6.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory","0","34",null,null,"0","10",null,null,null,null,this.div_work_00.Tabpage6.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamQcinspectorhistory");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"160\"/><Column size=\"300\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"160\"/></Columns><Rows><Row size=\"24\" band=\"head\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"&lt;fc v=&apos;red&apos;&gt;*&lt;/fc&gt;구분\" tooltiptext=\"구분\" displaytype=\"decoratetext\"/><Cell col=\"2\" text=\"&lt;fc v=&apos;red&apos;&gt;*&lt;/fc&gt;License번호\" displaytype=\"decoratetext\" tooltiptext=\"License번호\"/><Cell col=\"3\" text=\"&lt;fc v=&apos;red&apos;&gt;*&lt;/fc&gt;발급일자\" displaytype=\"decoratetext\" tooltiptext=\"발급일자\"/><Cell col=\"4\" text=\"&lt;fc v=&apos;red&apos;&gt;*&lt;/fc&gt;만료일자\" displaytype=\"decoratetext\" tooltiptext=\"만료일자\"/><Cell col=\"5\" text=\"&lt;fc v=&apos;red&apos;&gt;*&lt;/fc&gt;국가\" displaytype=\"decoratetext\" tooltiptext=\"국가\"/></Band></Format></Formats>");
            this.div_work_00.Tabpage6.addChild(obj.name, obj);

            obj = new Button("btn_addline",null,"7","60","20","66",null,null,null,null,null,this.div_work_00.Tabpage6.form);
            obj.set_taborder("2");
            obj.set_text("행추가");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("행추가");
            this.div_work_00.Tabpage6.addChild(obj.name, obj);

            obj = new Button("btn_delline",null,"7","60","20","0",null,null,null,null,null,this.div_work_00.Tabpage6.form);
            obj.set_taborder("3");
            obj.set_text("행삭제");
            obj.set_tooltiptext("출력");
            this.div_work_00.Tabpage6.addChild(obj.name, obj);

            obj = new Tab("div_work_01","0","288",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            obj.set_background("url(\'theme://images/bg_tab_master.png\') repeat-y left top #ffffff");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work_01);
            obj.set_text("발령기록");
            obj.set_tooltiptext("발령기록");
            this.div_work_01.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","241","34",null,null,null,null,null,null,this.div_work_01.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("발령기록");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("발령기록");
            this.div_work_01.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory","0","34",null,null,"0","10",null,null,null,null,this.div_work_01.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamQcinspectorhistory");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"90\"/><Column size=\"140\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/></Rows><Band id=\"head\"><Cell text=\"발령일자\" tooltiptext=\"발령일자\"/><Cell col=\"1\" text=\"구분\" tooltiptext=\"구분\"/><Cell col=\"2\" text=\"부서\" tooltiptext=\"부서\"/><Cell col=\"3\" text=\"직급\" tooltiptext=\"직급\"/><Cell col=\"4\" text=\"직무\" tooltiptext=\"직무\"/><Cell col=\"5\" text=\"직책\" tooltiptext=\"직책\"/><Cell col=\"6\" text=\"종료일자\" tooltiptext=\"종료일자\"/><Cell col=\"7\" text=\"입출국일자\" tooltiptext=\"입출국일자\"/></Band></Format></Formats>");
            this.div_work_01.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work_01);
            obj.set_text("직무경력");
            obj.set_tooltiptext("직무경력");
            this.div_work_01.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory","0","34",null,null,"0","10",null,null,null,null,this.div_work_01.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamQcinspectorhistory");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"220\"/><Column size=\"100\"/><Column size=\"220\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/></Rows><Band id=\"head\"><Cell text=\"시작일자\" tooltiptext=\"시작일자\"/><Cell col=\"1\" text=\"종료일자\" tooltiptext=\"종료일자\"/><Cell col=\"2\" text=\"최종부서\" tooltiptext=\"최종부서\"/><Cell col=\"3\" text=\"최종직급\" tooltiptext=\"최종직급\"/><Cell col=\"4\" text=\"직무\" tooltiptext=\"직무\"/><Cell col=\"5\" text=\"직무경력\" tooltiptext=\"직무경력\"/></Band></Format></Formats>");
            this.div_work_01.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","141","34",null,null,null,null,null,null,this.div_work_01.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("직무경력");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("직무경력");
            this.div_work_01.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.div_work_01);
            obj.set_text("직책경력");
            obj.set_tooltiptext("직책경력");
            this.div_work_01.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","211","34",null,null,null,null,null,null,this.div_work_01.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_text("직책경력");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("직책경력");
            this.div_work_01.Tabpage3.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory","0","34",null,null,"0","10",null,null,null,null,this.div_work_01.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamQcinspectorhistory");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/></Rows><Band id=\"head\"><Cell text=\"시작일자\" tooltiptext=\"시작일자\"/><Cell col=\"1\" text=\"종료일자\" tooltiptext=\"종료일자\"/><Cell col=\"2\" text=\"구분\" tooltiptext=\"구분\"/><Cell col=\"3\" text=\"부서\" tooltiptext=\"부서\"/><Cell col=\"4\" text=\"직급\" tooltiptext=\"직급\"/><Cell col=\"5\" text=\"직책\" tooltiptext=\"직책\"/><Cell col=\"6\" text=\"직책경력\" tooltiptext=\"직책경력\"/></Band></Format></Formats>");
            this.div_work_01.Tabpage3.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.div_work_01);
            obj.set_text("근무평정");
            obj.set_tooltiptext("근무평정");
            this.div_work_01.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","211","34",null,null,null,null,null,null,this.div_work_01.Tabpage4.form);
            obj.set_taborder("0");
            obj.set_text("근무평정");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("근무평정");
            this.div_work_01.Tabpage4.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory","0","34",null,null,"0","10",null,null,null,null,this.div_work_01.Tabpage4.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamQcinspectorhistory");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"140\"/><Column size=\"140\"/><Column size=\"350\"/><Column size=\"140\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/></Rows><Band id=\"head\"><Cell text=\"년도\" tooltiptext=\"년도\"/><Cell col=\"1\" text=\"차수\" tooltiptext=\"차수\"/><Cell col=\"2\" text=\"부서\" tooltiptext=\"부서\"/><Cell col=\"3\" text=\"직급\" tooltiptext=\"직급\"/><Cell col=\"4\" text=\"평가등급\" tooltiptext=\"평가등급\"/></Band></Format></Formats>");
            this.div_work_01.Tabpage4.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.div_work_01);
            obj.set_text("교육정보");
            obj.set_tooltiptext("교육정보");
            this.div_work_01.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","211","34",null,null,null,null,null,null,this.div_work_01.Tabpage5.form);
            obj.set_taborder("0");
            obj.set_text("교육정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("교육정보");
            this.div_work_01.Tabpage5.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory","0","34",null,null,"0","10",null,null,null,null,this.div_work_01.Tabpage5.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamQcinspectorhistory");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"160\"/></Columns><Rows><Row size=\"24\" band=\"head\"/></Rows><Band id=\"head\"><Cell text=\"차수\" tooltiptext=\"차수\"/><Cell col=\"1\" text=\"과정\" tooltiptext=\"과정\"/><Cell col=\"2\" text=\"역량유형\" tooltiptext=\"역량유형\"/><Cell col=\"3\" text=\"역량\" tooltiptext=\"역량\"/><Cell col=\"4\" text=\"총점\" tooltiptext=\"총점\"/><Cell col=\"5\" text=\"이수여부\" tooltiptext=\"이수여부\"/><Cell col=\"6\" text=\"학점\" tooltiptext=\"학점\"/><Cell col=\"7\" text=\"비고\" tooltiptext=\"비고\"/></Band></Format></Formats>");
            this.div_work_01.Tabpage5.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage6",this.div_work_01);
            obj.set_text("타사경력");
            obj.set_tooltiptext("타사경력");
            this.div_work_01.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory","0","34",null,null,"0","10",null,null,null,null,this.div_work_01.Tabpage6.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamQcinspectorhistory");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/></Rows><Band id=\"head\"><Cell text=\"시작일\" tooltiptext=\"시작일\"/><Cell col=\"1\" text=\"종료일\" tooltiptext=\"종료일\"/><Cell col=\"2\" text=\"회사\" tooltiptext=\"회사\"/><Cell col=\"3\" text=\"부서\" tooltiptext=\"부서\"/><Cell col=\"4\" text=\"직급\" tooltiptext=\"직급\"/><Cell col=\"5\" text=\"직무\" tooltiptext=\"직무\"/><Cell col=\"6\" text=\"경력년수\" tooltiptext=\"경력년수\"/></Band></Format></Formats>");
            this.div_work_01.Tabpage6.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","241","34",null,null,null,null,null,null,this.div_work_01.Tabpage6.form);
            obj.set_taborder("1");
            obj.set_text("타사경력");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("타사경력");
            this.div_work_01.Tabpage6.addChild(obj.name, obj);

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

            obj = new Div("div_00","0","36",null,"254","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrollbarbarminsize("0");
            obj.set_formscrollbarbaroutsize("0");
            obj.set_formscrollbardecbuttonsize("0");
            obj.set_formscrollbarincbuttonsize("0");
            obj.set_formscrollbarsize("0");
            obj.set_formscrollbartrackbarsize("0");
            obj.set_formscrollindicatorsize("0");
            this.addChild(obj.name, obj);

            obj = new Div("div_01","0","34",null,"218","-1",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_detail_nobg");
            obj.set_formscrollbarbarminsize("0");
            obj.set_formscrollbarbaroutsize("0");
            obj.set_formscrollbardecbuttonsize("0");
            obj.set_formscrollbarincbuttonsize("0");
            obj.set_formscrollbarsize("0");
            obj.set_formscrollbartrackbarsize("0");
            obj.set_formscrollindicatorsize("0");
            this.div_00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer04","15","6","150","180",null,null,null,null,null,null,this.div_00.form.div_01.form);
            obj.set_taborder("0");
            obj.set_cssclass("img_user");
            this.div_00.form.div_01.addChild(obj.name, obj);

            obj = new Div("div_subTitle","180","-1",null,"217","0",null,null,null,null,null,this.div_00.form.div_01.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_detail_line_notop");
            obj.set_text("");
            this.div_00.form.div_01.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","135","31",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("0");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("성명");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_insepctionclassname","139","5","219","20",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("1");
            obj.set_cssclass("display");
            obj.set_text("성명");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static30_00","361","0","135","31",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("2");
            obj.set_text("입사일");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("입사일");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static30_01","0","31","135","31",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("3");
            obj.set_text("사번");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("사번");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_insepctionclassname01","139","36","219","20",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("4");
            obj.set_cssclass("display");
            obj.set_text("성명");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static30_00_00","361","31","135","31",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("5");
            obj.set_text("승진일");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("승진일");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static30_01_00","0","62","135","31",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("6");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("직급");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_insepctionclassname01_00","139","67","219","20",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("7");
            obj.set_cssclass("display");
            obj.set_text("성명");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static30_00_00_00","361","62","135","31",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("8");
            obj.set_text("호칭일");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("호칭일");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static30_01_00_00","0","93","135","31",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("9");
            obj.set_text("호칭");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("호칭");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_insepctionclassname01_00_00","139","98","219","20",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("10");
            obj.set_cssclass("display");
            obj.set_text("성명");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static30_00_00_00_00","361","93","135","31",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("11");
            obj.set_text("부서일");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("부서일");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static30_01_00_00_00","0","124","135","31",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("12");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("부서");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_insepctionclassname01_00_00_00","139","129","219","20",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("13");
            obj.set_cssclass("display");
            obj.set_text("성명");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static30_00_00_00_00_00","361","124","135","31",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("14");
            obj.set_text("직무일");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("직무일");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static30_01_00_00_00_00","0","155","135","31",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("15");
            obj.set_text("직무");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("직무");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_insepctionclassname01_00_00_00_00","139","160","219","20",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("16");
            obj.set_cssclass("display");
            obj.set_text("성명");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static30_00_00_00_00_00_00","361","155","135","31",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("17");
            obj.set_text("학력");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("학력");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_insepctionclassname00_00_00_00_00_00","500","160","223","20",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("18");
            obj.set_cssclass("display");
            obj.set_text("부서");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static30_01_00_00_00_00_00","0","186","135","30",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("19");
            obj.set_text("직책");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("직책");
            obj.set_border("0px none");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_insepctionclassname01_00_00_00_00_00","139","191","219","20",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("20");
            obj.set_cssclass("display");
            obj.set_text("성명");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static30_00_00_00_00_00_00_00","361","186","135","30",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("21");
            obj.set_text("주민번호");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("주민번호");
            obj.set_border("0px none");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new MaskEdit("mae_02","500","191","110","20",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("22");
            obj.set_format("######-#{999999}");
            obj.set_type("string");
            obj.set_cssclass("display");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Calendar("cal_00","500","5","110","20",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("23");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("display");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Calendar("cal_00_00","500","36","110","20",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("display");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Calendar("cal_00_00_00","500","67","110","20",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("25");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("display");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Calendar("cal_00_00_00_00","500","98","110","20",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("26");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("display");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Calendar("cal_00_00_00_00_00","500","129","110","20",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("27");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("display");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_insepctionclassname00_00_00_00_00_00_00","613","5","110","20",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("28");
            obj.set_cssclass("display");
            obj.set_text("부서");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_insepctionclassname00_00_00_00_00_00_00_00","613","36","110","20",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("29");
            obj.set_cssclass("display");
            obj.set_text("부서");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_insepctionclassname00_00_00_00_00_00_00_00_00","613","67","110","20",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("30");
            obj.set_cssclass("display");
            obj.set_text("부서");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_insepctionclassname00_00_00_00_00_00_00_00_00_00","613","98","110","20",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("31");
            obj.set_cssclass("display");
            obj.set_text("부서");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_insepctionclassname00_00_00_00_00_00_00_00_00_00_00","613","129","110","20",null,null,null,null,null,null,this.div_00.form.div_01.form.div_subTitle.form);
            obj.set_taborder("32");
            obj.set_cssclass("display");
            obj.set_text("부서");
            this.div_00.form.div_01.form.div_subTitle.addChild(obj.name, obj);

            obj = new Button("btn_save","56","190","70","20",null,null,null,null,null,null,this.div_00.form.div_01.form);
            obj.set_taborder("2");
            obj.set_text("사진등록");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("사진등록");
            this.div_00.form.div_01.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","241","34",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("1");
            obj.set_text("개인 신상 정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("개인 신상 정보");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"43","60","20","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_personal",null,"295","84","20","10",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("신상보기");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("신상보기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_career",null,"295","84","20","10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("이력보기");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("이력보기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_work_00.Tabpage2.form.div_basicInfo00.form.cal_certdate","value","ds_qamQcinspector","CERTDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_work_01.Tabpage2.form.div_basicInfo00.form.cal_certdate","value","ds_qamQcinspector","CERTDATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_work_00.addEventHandler("onchanged",this.tab_work_onchanged,this);
            this.div_work_00.Tabpage1.form.div_basicInfo.form.sta_inspector.addEventHandler("onclick",this.tab_work_Tabpage1_div_basicInfo_sta_inspector_onclick,this);
            this.div_work_00.Tabpage3.form.btn_addline.addEventHandler("onclick",this.fn_save,this);
            this.div_work_00.Tabpage3.form.btn_delline.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.div_work_00.Tabpage6.form.btn_addline.addEventHandler("onclick",this.fn_save,this);
            this.div_work_00.Tabpage6.form.btn_delline.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.div_work_01.addEventHandler("onchanged",this.tab_work_onchanged,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_00.form.div_01.form.div_subTitle.form.Static30.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_00.form.div_01.form.div_subTitle.form.edt_insepctionclassname.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_00.form.div_01.form.div_subTitle.form.Static30_00.addEventHandler("onclick",this.div_subTitle_Static30_00_onclick,this);
            this.div_00.form.div_01.form.div_subTitle.form.Static30_01.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_00.form.div_01.form.div_subTitle.form.edt_insepctionclassname01.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_00.form.div_01.form.div_subTitle.form.Static30_00_00.addEventHandler("onclick",this.div_subTitle_Static30_00_onclick,this);
            this.div_00.form.div_01.form.div_subTitle.form.Static30_01_00.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_00.form.div_01.form.div_subTitle.form.edt_insepctionclassname01_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_00.form.div_01.form.div_subTitle.form.Static30_00_00_00.addEventHandler("onclick",this.div_subTitle_Static30_00_onclick,this);
            this.div_00.form.div_01.form.div_subTitle.form.Static30_01_00_00.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_00.form.div_01.form.div_subTitle.form.edt_insepctionclassname01_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_00.form.div_01.form.div_subTitle.form.Static30_00_00_00_00.addEventHandler("onclick",this.div_subTitle_Static30_00_onclick,this);
            this.div_00.form.div_01.form.div_subTitle.form.Static30_01_00_00_00.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_00.form.div_01.form.div_subTitle.form.edt_insepctionclassname01_00_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_00.form.div_01.form.div_subTitle.form.Static30_00_00_00_00_00.addEventHandler("onclick",this.div_subTitle_Static30_00_onclick,this);
            this.div_00.form.div_01.form.div_subTitle.form.Static30_01_00_00_00_00.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_00.form.div_01.form.div_subTitle.form.edt_insepctionclassname01_00_00_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_00.form.div_01.form.div_subTitle.form.Static30_00_00_00_00_00_00.addEventHandler("onclick",this.div_subTitle_Static30_00_onclick,this);
            this.div_00.form.div_01.form.div_subTitle.form.Static30_01_00_00_00_00_00.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_00.form.div_01.form.div_subTitle.form.edt_insepctionclassname01_00_00_00_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_00.form.div_01.form.div_subTitle.form.Static30_00_00_00_00_00_00_00.addEventHandler("onclick",this.div_subTitle_Static30_00_onclick,this);
            this.div_00.form.div_01.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.btn_personal.addEventHandler("onclick",this.fn_save,this);
            this.btn_career.addEventHandler("onclick",this.fn_save,this);
        };
        this.loadIncludeScript("HRA10110M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
