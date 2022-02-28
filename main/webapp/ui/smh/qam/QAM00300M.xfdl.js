(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM00300M");
            this.set_titletext("검사원관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISUSEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"EVALUATIONDATE_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"EVALUATIONDATE_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTEVALUATIONDATE_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTEVALUATIONDATE_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONGRADE\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"CAPACITYTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"EVALUATIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEENUM\" type=\"STRING\" size=\"256\"/><Column id=\"ISEVALUATIONCOMPLETE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qamQcinspector", this);
            obj._setContents("<ColumnInfo><Column id=\"INSPECTORID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"CERTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTCERTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RETIREDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PREVCAREERYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"PREVCAREERMONTH\" type=\"STRING\" size=\"256\"/><Column id=\"SCORE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"ISCERTFINISH\" type=\"STRING\" size=\"256\"/><Column id=\"EVALUATIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTORNO\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNID\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNUSER\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"CAREER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","btn_reset:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","90","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_text("검사원관리");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MENU_PG-QC-0260");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"16","44","24","btn_help:0",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("10");
            obj.set_text("등록");
            obj.set_cssclass("btn_com_basic");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("REGISTRATION");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_printLabel",null,"16","68","24","btn_add:0",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("9");
            obj.set_text("라벨출력");
            obj.set_cssclass("btn_com_basic");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("PRINTLABEL");
            this.div_header.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_qamQcinspector","31.32%","0","120","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subTitle00","0","0",null,"34","sta_cnt_ds_qamQcinspector:41.67%",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("검사원 관리현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("INSPECTIONMANAGEMENT");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspector","0","34",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamQcinspector");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"검사원 ID\" tooltiptext=\"INSPECTORID\"/><Cell col=\"2\" text=\"검사원번호\" tooltiptext=\"INSPECTORNO\"/><Cell col=\"3\" text=\"자격구분\" tooltiptext=\"CAPACITYTYPE\"/><Cell col=\"4\" text=\"작업장\" tooltiptext=\"AREANAME\"/><Cell col=\"5\" text=\"사원번호\" tooltiptext=\"EMPLOYEENUMBER\"/><Cell col=\"6\" text=\"검사자명\" tooltiptext=\"INSPECTORNAME\"/><Cell col=\"7\" text=\"등급\" tooltiptext=\"GRADE\"/><Cell col=\"8\" text=\"입사일자\" tooltiptext=\"ENTERDATE\"/><Cell col=\"9\" text=\"퇴사일자\" tooltiptext=\"RETIREDATE\"/><Cell col=\"10\" text=\"경력\" tooltiptext=\"CAREER\"/><Cell col=\"11\" text=\"유효상태\" tooltiptext=\"VALIDSTATE\"/><Cell col=\"12\" text=\"인증 평가일\" tooltiptext=\"CERTDATE\"/><Cell col=\"13\" text=\"차기 인증평가일\" tooltiptext=\"NEXTCERTDATE\"/><Cell col=\"14\" text=\"인증평가 완료여부\" tooltiptext=\"ISCERTFINISH\"/><Cell col=\"15\" text=\"평가구분\" tooltiptext=\"EVALUATIONTYPE\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:INSPECTORID\" textAlign=\"center\" cssclass=\"expr:comp.parent.parent.parent.fn_setBgColor(currow)\"/><Cell col=\"2\" text=\"bind:INSPECTORNO\" textAlign=\"center\" cssclass=\"expr:comp.parent.parent.parent.fn_setBgColor(currow)\"/><Cell col=\"3\" text=\"bind:CAPACITYTYPE\" cssclass=\"expr:comp.parent.parent.parent.fn_setBgColor(currow)\"/><Cell col=\"4\" text=\"bind:AREANAME\" cssclass=\"expr:comp.parent.parent.parent.fn_setBgColor(currow)\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:EMPNO\" cssclass=\"expr:comp.parent.parent.parent.fn_setBgColor(currow)\"/><Cell col=\"6\" text=\"bind:INSPECTORNAME\" cssclass=\"expr:comp.parent.parent.parent.fn_setBgColor(currow)\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:GRADE\" cssclass=\"expr:comp.parent.parent.parent.fn_setBgColor(currow)\"/><Cell col=\"8\" text=\"bind:ENTERDATE\" cssclass=\"expr:comp.parent.parent.parent.fn_setBgColor(currow)\"/><Cell col=\"9\" text=\"bind:RETIREDATE\" cssclass=\"expr:comp.parent.parent.parent.fn_setBgColor(currow)\"/><Cell col=\"10\" text=\"bind:CAREER\" textAlign=\"left\" cssclass=\"expr:comp.parent.parent.parent.fn_setBgColor(currow)\"/><Cell col=\"11\" text=\"bind:VALIDSTATE\" combocodecol=\"C,ValidState,,Y,N\" displaytype=\"combotext\" cssclass=\"expr:comp.parent.parent.parent.fn_setBgColor(currow)\"/><Cell col=\"12\" text=\"bind:CERTDATE\" cssclass=\"expr:comp.parent.parent.parent.fn_setBgColor(currow)\"/><Cell col=\"13\" text=\"bind:NEXTCERTDATE\" cssclass=\"expr:comp.parent.parent.parent.fn_setBgColor(currow)\"/><Cell col=\"14\" text=\"bind:ISCERTFINISH\" cssclass=\"expr:comp.parent.parent.parent.fn_setBgColor(currow)\"/><Cell col=\"15\" text=\"bind:EVALUATIONTYPENAME\" cssclass=\"expr:comp.parent.parent.parent.fn_setBgColor(currow)\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_ds_qamQcinspector",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Edit("edt_employeenum","128","285","145","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_worktype","128","35","145","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_codecolumn("C,WorkType,ALL,Y,Y");
            obj.set_text("WorkType");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_site","0","10","123","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_isusedate","0","60","123","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("날짜사용여부");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("ISUSEDATE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","400","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","400","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"380","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","406","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_certdate","0","85","123","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("인증평가일");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CERTDATE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_worktype","0","35","123","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("재직구분");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("465F50B3C66A460E8DC20AF32DFBA80D");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_area","128","210",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_area",null,"210","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_certdateForm","128","85",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_certdateTo","128","110",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_nextcertdate","0","135","123","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("차기인증평가일");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("597315C801FF4FF38CA2565E14B64945");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_inspectiongrade","0","185","123","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("검사등급");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("4844D3894A004B8FAD9298513F35F793");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_area","0","210","123","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("557E08D884564DBAA6EA3CFC90DA0607");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_capacitytype","0","235","123","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_text("자격구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CAPACITYTYPE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_isusedate","128","60","145","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_codecolumn("C,YesNo,,Y,Y");
            obj.set_text("YesNo");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_evaluationtype","0","260","123","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_text("평가구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("EVALUATIONTYPE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_employeenum","0","285","123","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_text("사원번호");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("2571401C73124C9B81F94E00C3CCC2C6");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_iscertfinish","0","310","135","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_text("인증평가 완료여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("AC5D23FDEFA44660B0596619F4BA6D5A");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_workername","0","335","123","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("24");
            obj.set_text("검사자명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("7AB0B917C45447108BF0C9DB8540CF26");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_inspectiongrade","128","185","145","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_codecolumn("C,InspectionGrade,ALL,Y,Y");
            obj.set_text("InspectionGrade");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_nextcertdateFrom","128","135",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_nextcertdateTo","128","160",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("26");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_capacitytype","128","235","145","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("27");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_evaluationtype","128","260","145","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("28");
            obj.set_codecolumn("C,EvaluationType,ALL,Y,Y");
            obj.set_text("EvaluationType");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_iscertfinish","128","310","145","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("29");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            obj.set_text("YesNo");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_workername","128","335","145","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("30");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_validstate","0","360","123","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("31");
            obj.set_text("유효상태");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("VALIDSTATE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_validstate","128","360","145","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("32");
            obj.set_codecolumn("C,ValidState,ALL,Y,Y");
            obj.set_text("ValidState");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_site","128","10","145","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("33");
            obj.set_codecolumn("C,SiteType,,Y,Y");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_periodType","10","110","114","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("34");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_nextPeriodType","10","160","114","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("35");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_area_id","60","457","120","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("36");
            obj.set_value("작업장ID (HIDDEN)");
            obj.set_visible("false");
            obj.set_text("작업장ID (HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","290","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("QAM00300M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("QAM00300M.xfdl","lib::lib_qam.xjs");
        this.registerScript("QAM00300M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 검사원 등급관리
         * 파일명 		: QAM00300M.xfdl
         * 작성자 		: 권혜영
         * 작성일 		: 2021.04.26
         *
         * 설  명		: 품질관리 > 검사원/AUDIT > 검사원관리
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.26	권혜영   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_qam.xjs"); /*include "lib::lib_qam.xjs"*/;	//품질관리 공통 라이브러리 include
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.basfn_getPeriodData("ds_periodType");
        	this.fn_initCombo();
        	this.fn_formInit();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_qamQcinspector.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();

        	this.ds_search.setColumn(0, "PLANTID", this.tab_search.Tabpage1.form.cbo_site.value);
        	this.ds_search.setColumn(0, "WORKTYPE", this.tab_search.Tabpage1.form.cbo_worktype.value);
        	this.ds_search.setColumn(0, "ISUSEDATE", this.tab_search.Tabpage1.form.cbo_isusedate.value);
        	this.ds_search.setColumn(0, "EVALUATIONDATE_PERIODFR", this.tab_search.Tabpage1.form.cal_certdateForm.value);
        	this.ds_search.setColumn(0, "EVALUATIONDATE_PERIODTO", this.tab_search.Tabpage1.form.cal_certdateTo.value);
        	this.ds_search.setColumn(0, "NEXTEVALUATIONDATE_PERIODFR", this.tab_search.Tabpage1.form.cal_nextcertdateFrom.value);
        	this.ds_search.setColumn(0, "NEXTEVALUATIONDATE_PERIODTO", this.tab_search.Tabpage1.form.cal_nextcertdateTo.value);

        	this.ds_search.setColumn(0, "INSPECTIONGRADE", this.tab_search.Tabpage1.form.cbo_inspectiongrade.value);
        	this.ds_search.setColumn(0, "AREAID", this.tab_search.Tabpage1.form.edt_area_id.value);
        	this.ds_search.setColumn(0, "CAPACITYTYPE", this.tab_search.Tabpage1.form.cbo_capacitytype.value);

        	this.ds_search.setColumn(0, "EVALUATIONTYPE", this.tab_search.Tabpage1.form.cbo_evaluationtype.value);
        	this.ds_search.setColumn(0, "EMPLOYEENUM", this.tab_search.Tabpage1.form.edt_employeenum.value);
        	this.ds_search.setColumn(0, "ISEVALUATIONCOMPLETE", this.tab_search.Tabpage1.form.cbo_iscertfinish.value);


        	this.ds_search.setColumn(0, "WORKERNAME", this.tab_search.Tabpage1.form.edt_workername.value);
        	this.ds_search.setColumn(0, "VALIDSTATE", this.tab_search.Tabpage1.form.cbo_validstate.value);

        	var sSvcID 			= "selectQamQcinspectorList";
        	var sController 	= "/qam00300/selectQamQcinspectorList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_qamQcinspector=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        	this.fn_formInit();
        };

        /*
         * 기능 : 신규
         */
        this.fn_add = function(obj,e)
        {
        	var dsObj = this.ds_qamQcinspector;
        	if(dsObj == null) return;
        	if(this.fv_isInit) return;

        	var row = dsObj.addRow();

        	dsObj.setColumn(row,"ENTERPRISEID", this.gf_getEnterpriseId());//ENTERPRISEID
        	dsObj.setColumn(row,"PLANTID", this.gf_getSiteType());//PLANTID
        	dsObj.setColumn(row,"VALIDSTATE", "Valid");			//유효여부
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	if (!this.gfn_dsIsUpdated(this.ds_qamQcinspector) )
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}

        	var component = this.div_work.form.grd_qamQcinspector;
        	var strColIdList = "INSPECTIONCLASSID,GRADE";
        	var rtn = this.nfn_MandatoryCheckGrid(component, strColIdList);
        	if (rtn == false) return;

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveQamQcinspector";
        	var sController 	= "/qam00300/saveQamQcinspector.do";
        	var sInDatasets 	= "INPUT=ds_qamQcinspector:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 삭제
         */
        this.fn_delete = function (obj, e)
        {
        	var dsObj = this.ds_qamQcinspector;
        	var nRowType = dsObj.getRowType(dsObj.rowposition);

        	if(nRowType==2 ){
        		var bOK = this.gfn_Message("IsDeleted", null, "conf", "yesno");
        		if (bOK == false) return;
        		dsObj.deleteRow(dsObj.rowposition);
        	} else {
        		this.gfn_Message("CantdelSaveData", null, "info", "ok");
        	}
        };

        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        	}
        	else
        	{
        		if (trId == "saveQamQcinspector")
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.fn_search();

        		} else if (trId == "selectQamQcinspectorList")
        		{
        			this.qamfn_calCareer(this.ds_qamQcinspector);

         		} else if (trId == "selectCapacityTypeList")
        		{
        		}
        	}
        };


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        this.fn_openPopup = function(obj,e)
        {
        	var oArg = {};
        	this.gfn_openPopup("SEARCH_INSPECTOR","qam::QAM00300P1.xfdl",oArg,"");
        };

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 최초 호출되는 초기화 함수
         */
        this.fn_formInit = function ()
        {
        	this.ds_CSiteType.filter("LOOKUP_CODE == '"+this.gf_getSiteType()+"'");
        	this.tab_search.Tabpage1.form.cbo_site.set_index(0);
        	this.tab_search.Tabpage1.form.cbo_isusedate.set_value("N");
        	this.fn_changeIsUseDate("N");

        	this.qamfn_setCompControl(this.tab_search.Tabpage1.form.components, "empty");

        	this.tab_search.Tabpage1.form.cbo_periodType.set_value("THISWEEK");
        	this.tab_search.Tabpage1.form.cbo_nextPeriodType.set_value("THISWEEK");

        	this.fn_setDate("certdate", "THISWEEK");
        	this.fn_setDate("nextcertdate", "THISWEEK");
        };

        /*
         * 검색 콤보 조회
         */
        this.fn_initCombo = function ()
        {
        	this.qamfn_setCustomQueryCmb(this.tab_search.Tabpage1.form.cbo_capacitytype // Object
        								, "selectGetCapacityTypeList,ALL,Y,A" // OPTION
        								, ""
        								, "fn_callBack");	  // 추가 파라미터
        };

        /*
         * 유효성 체크 (점수)
         */
        this.fn_checkValidationScore = function (p_planId, p_inspectionClassId, p_score, p_rowPos)
        {
        	var ret = true;
        	p_score = p_score || '';

        	if(!this.nfn_isNull(p_planId) && !this.nfn_isNull(p_inspectionClassId)) {
        		var objDs = this.ds_qamQcinspector, curPosLowerScore, curPosUpperScore;

        		curPosLowerScore = objDs.getColumn(p_rowPos, "LOWERSCORE");
        		curPosUpperScore = objDs.getColumn(p_rowPos, "UPPERSCORE");

        		for(var i = 0; i < objDs.getRowCount(); i++) {
        			var planId = objDs.getColumn(i, "PLANTID");
        			var inspectionClassId = objDs.getColumn(i, "INSPECTIONCLASSID");

        			var lowerScore = this.nfn_isNull(objDs.getColumn(i, "LOWERSCORE")) ? 0 : objDs.getColumn(i, "LOWERSCORE");
        			var upperScore = this.nfn_isNull(objDs.getColumn(i, "UPPERSCORE")) ? 999999999 : objDs.getColumn(i, "UPPERSCORE");

        			if(i != p_rowPos && planId == p_planId && inspectionClassId == p_inspectionClassId) {
        				if(this.nfn_isNull(p_score)) {
        					if(!this.nfn_isNull(curPosLowerScore) || !this.nfn_isNull(curPosUpperScore)) {
        						curPosLowerScore = this.nfn_isNull(curPosLowerScore) ? 0 : curPosLowerScore;
        						curPosUpperScore = this.nfn_isNull(curPosUpperScore) ? 999999999 : curPosUpperScore;

        						if( (lowerScore <= curPosLowerScore && curPosLowerScore <= upperScore) || (lowerScore <= curPosUpperScore && curPosUpperScore <= upperScore)) {
        							this.gfn_Message("ScoreIsAlready", null, "warning", "ok");
        							ret = false;
        							return;
        						}
        					}
        				} else {
        					if(lowerScore <= p_score && p_score <= upperScore) {
        						this.gfn_Message("ScoreIsAlready", null, "warning", "ok");
        						ret = false;
        						return;
        					}
        				}
        			}
        		}
        	}
        	return ret;
        };

        /*
         * 유효성 체크 (중복체크)
         */
        this.fn_checkValidationDup = function (planId, inspectionClassId, grade)
        {
        	var ret = true;
        	if(!this.nfn_isNull(planId) && !this.nfn_isNull(inspectionClassId) && !this.nfn_isNull(grade)) {
        		var objDs = this.ds_qamQcinspector;
        		var filterStr = "PLANTID == '"+planId+"' && INSPECTIONCLASSID =='"+inspectionClassId+"' && GRADE =='"+grade+"'";

        		if(objDs.getCaseCount(filterStr) >= 1) {
        			var inspectionClassIdText = this.nfn_getDictionarynameUpper("INSPECTIONCLASSID");
        			var gradeText = this.nfn_getDictionarynameUpper("GRADE");
        			var msgText = "Site ID, "+inspectionClassIdText+", "+gradeText;

        			this.gfn_Message("DuplicationItem", msgText, "warning", "ok");
        			ret =  false;
        		}
        	}
        	return ret;
        };

        /*
         * 기능 : 검색일자 바인딩 함수
         */
        this.fn_setDate = function (calType, periodType)
        {
        	if(calType == "certdate") { //인증평가일
        		this.tab_search.Tabpage1.form.cal_certdateForm.set_value(this.ds_periodType.getColumn(0,periodType+"_S"));
        		this.tab_search.Tabpage1.form.cal_certdateTo.set_value(this.ds_periodType.getColumn(0,periodType+"_E"));
        	} else if(calType == "nextcertdate") { //차기 인증평가일
        		this.tab_search.Tabpage1.form.cal_nextcertdateFrom.set_value(this.ds_periodType.getColumn(0,periodType+"_S"));
        		this.tab_search.Tabpage1.form.cal_nextcertdateTo.set_value(this.ds_periodType.getColumn(0,periodType+"_E"));
        	}

        };

        /*
         * 기능 : 라벨출력
         */
        this.fn_printLabel = function(obj,e)
        {
        	var objDs  = this.ds_qamQcinspector, rowPos = objDs.rowposition;
        	if(rowPos < 0) {
        		this.gfn_Message("GridNoChecked", null, "warning", "ok");
        		return;
        	}

        	var inspectorid = "["+this.ds_qamQcinspector.getColumn(rowPos, "INSPECTORID")+"]";
          	var oArg = {
          		sRptPath   : "/QAM/",
          		sRptName   : "QAM03000R.mrd",
          		strField   : inspectorid,
          		bModalless : false
          	};

          	var sOption = "titletext=라벨출력,modeless=false";
          	this.gfn_reportPopup("reportViewer", "common::com_report.xfdl", oArg, sOption);
        };

        /*
         * 기능 : 오늘날짜 기준으로 차기 인증평가일에 대한 background color setting
         */
        this.fn_setBgColor = function(nRow)
        {
        	var nextCertDate = this.qamfn_replace(this.ds_qamQcinspector.getColumn(nRow, "NEXTCERTDATE"), "-", "");
        	var isCertFinish = this.ds_qamQcinspector.getColumn(nRow, "ISCERTFINISH");

        	// 오늘날짜 기준으로 차기 인증평가일이 지났지만 인증평가 완료여부가 N이라면 붉은색 알람
        	if(nextCertDate < this.gfn_today() && isCertFinish == "N") {
        		return "cell_bg_red";

        	}
        	// 오늘날짜 기준으로 차기 인증평가일이 2주후이지만 인증평가 완료여부가 N이라면 노란색 알람
        	else if(this.gfn_addDate(nextCertDate, -14) < this.gfn_today() && isCertFinish == "N") {
        		return "cell_bg_yellow";

        	}
        };

        /*
         * 기능 : 날짜사용여부 변경 시 날짜 관련 component enable 설정
         */
        this.fn_changeIsUseDate = function(val)
        {
        	if(val == "Y") {
        		this.tab_search.Tabpage1.form.cbo_periodType.set_enable(true);
        		this.tab_search.Tabpage1.form.cbo_nextPeriodType.set_enable(true);
        		this.tab_search.Tabpage1.form.cal_certdateForm.set_enable(true);
        		this.tab_search.Tabpage1.form.cal_certdateTo.set_enable(true);
        		this.tab_search.Tabpage1.form.cal_nextcertdateFrom.set_enable(true);
        		this.tab_search.Tabpage1.form.cal_nextcertdateTo.set_enable(true);
        	} else {
        		this.tab_search.Tabpage1.form.cbo_periodType.set_enable(false);
        		this.tab_search.Tabpage1.form.cbo_nextPeriodType.set_enable(false);
        		this.tab_search.Tabpage1.form.cal_certdateForm.set_enable(false);
        		this.tab_search.Tabpage1.form.cal_certdateTo.set_enable(false);
        		this.tab_search.Tabpage1.form.cal_nextcertdateFrom.set_enable(false);
        		this.tab_search.Tabpage1.form.cal_nextcertdateTo.set_enable(false);
        	}
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        // 그리드 더블 클릭 시 팝업 호출
        this.div_work_grd_qamQcinspector_oncelldblclick = function(obj,e)
        {
        	var oArg = {ds_qamQcinspector: this.ds_qamQcinspector, nRow: e.row};
        	this.gfn_openPopup("SEARCH_INSPECTOR","qam::QAM00300P1.xfdl",oArg,"");
        };

        // "인증평가일" 기간 변경 시
        this.tab_search_Tabpage1_cbo_periodType_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != "CUSTOM"){
        		this.fn_setDate("certdate", e.postvalue);
        	}
        };

        // "차기인증평가일" 기간 변경 시
        this.tab_search_Tabpage1_cbo_nextPeriodType_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != "CUSTOM"){
        		this.fn_setDate("nextcertdate", e.postvalue);
        	}
        };

        // 날짜 component 변경 시 기간 -> 사용자지정으로 변경
        this.fn_changeCustom = function(obj,e)
        {
        	if(obj.id.indexOf("cal_certdate") > -1) {
        		this.tab_search.Tabpage1.form.cbo_periodType.set_value("CUSTOM");
        	} else {
        		this.tab_search.Tabpage1.form.cbo_nextPeriodType.set_value("CUSTOM");
        	}
        };

        //날짜사용여부 combo 변경
        this.tab_search_Tabpage1_cbo_isusedate_onitemchanged = function(obj,e)
        {
        	this.fn_changeIsUseDate(e.postvalue);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_header.form.btn_add.addEventHandler("onclick",this.fn_openPopup,this);
            this.div_header.form.btn_printLabel.addEventHandler("onclick",this.fn_printLabel,this);
            this.div_work.form.grd_qamQcinspector.addEventHandler("oncelldblclick",this.div_work_grd_qamQcinspector_oncelldblclick,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.btn_area.addEventHandler("onclick",this.qamfn_callOpenPopButtonEvent,this);
            this.tab_search.Tabpage1.form.cal_certdateForm.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.cal_certdateTo.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.cbo_isusedate.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_isusedate_onitemchanged,this);
            this.tab_search.Tabpage1.form.cal_nextcertdateFrom.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.cal_nextcertdateTo.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.cbo_periodType.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_periodType_onitemchanged,this);
            this.tab_search.Tabpage1.form.cbo_nextPeriodType.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_nextPeriodType_onitemchanged,this);
        };
        this.loadIncludeScript("QAM00300M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
