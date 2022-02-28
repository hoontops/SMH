(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM00300P1");
            this.set_titletext("검사원 등록/수정");
            if (Form == this.constructor)
            {
                this._setFormPosition(992,626);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_qamQcinspector", this);
            obj._setContents("<ColumnInfo><Column id=\"INSPECTORID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"CERTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTCERTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RETIREDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PREVCAREERYEAR\" type=\"INT\" size=\"256\"/><Column id=\"PREVCAREERMONTH\" type=\"STRING\" size=\"256\"/><Column id=\"SCORE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"ISCERTFINISH\" type=\"STRING\" size=\"256\"/><Column id=\"EVALUATIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTORNO\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNID\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNUSER\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANYCAREER\" type=\"STRING\" size=\"256\"/><Column id=\"CAREER\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTCODEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qamQcinspectorhistory", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"INSPECTORID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"CERTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTCERTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RETIREDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PREVCAREERYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"PREVCAREERMONTH\" type=\"STRING\" size=\"256\"/><Column id=\"SCORE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"ISCERTFINISH\" type=\"STRING\" size=\"256\"/><Column id=\"EVALUATIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTORNO\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNID\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNUSER\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"TXNTIME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONCLASSNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTORID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"SCORE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_output", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTORID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","66","0","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","0","82","20","84",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00",null,"100","20","84","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,null,"50","20","97","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,null,"700","10","0","48",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Div("div_basicInfo","20","20",null,"187","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_site","0","0","140","31",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("1");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_detailLabel_P");
            obj.set_wordWrap("english");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Combo("cbo_site","145","5","160","20",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("0");
            obj.set_enable("false");
            obj.set_codecolumn("C,SiteType,,Y,N");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_area","0","31","140","31",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("2");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_detailLabel_P");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("WORKAREA");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_inspectionclassid","0","62","140","31",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("3");
            obj.set_text("자격구분");
            obj.set_cssclass("sta_WF_detailLabel_P");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("CAPACITYTYPE");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_prevcareer","0","93","140","31",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("4");
            obj.set_text("이전경력");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("PREVCAREER");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_score","0","124","140","31",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("5");
            obj.set_text("점수");
            obj.set_cssclass("sta_WF_detailLabel_P");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("SCORE");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_evaluationtype","0","155","140","31",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("6");
            obj.set_text("평가구분");
            obj.set_cssclass("sta_WF_detailLabel_P");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("EVALUATIONTYPE");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_inspector","310","0","140","31",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("7");
            obj.set_text("검사자명");
            obj.set_cssclass("sta_WF_detailLabel_P");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("INSPECTORNAME");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_certdate","310","31","140","31",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("8");
            obj.set_text("인증 평가일");
            obj.set_cssclass("sta_WF_detailLabel_P");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("CERTDATE");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_enterdate","310","62","140","31",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("9");
            obj.set_text("입사일자");
            obj.set_cssclass("sta_WF_detailLabel_P");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("ENTERDATE");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_career","310","93","140","31",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("10");
            obj.set_text("자회사경력");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("COMPANYCAREER");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_grade","310","124","140","31",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("11");
            obj.set_text("등급");
            obj.set_cssclass("sta_WF_detailLabel_P");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("GRADE");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_inspectorno","310","155","140","31",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("12");
            obj.set_text("검사원번호");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("INSPECTORNUMBER");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_empno","640","0","140","31",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("13");
            obj.set_text("사원번호");
            obj.set_cssclass("sta_WF_detailLabel_P");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("EMPLOYEENUMBER");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_nextcertdate","640","31","140","31",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("14");
            obj.set_text("차기 인증평가일");
            obj.set_cssclass("sta_WF_detailLabel_P");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("NEXTCERTDATE");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_retiredate","640","62","140","31",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("15");
            obj.set_text("퇴사일자");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("RETIREDATE");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_totalcareer","640","93","140","31",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("16");
            obj.set_text("총경력");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("TOTALCAREER");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_iscertfinish","640","124","140","31",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("17");
            obj.set_text("인증평가 완료여부");
            obj.set_cssclass("sta_WF_detailLabel_P");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("ISCERTFINISH");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_validstate","640","155","140","31",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("18");
            obj.set_text("유효상태");
            obj.set_cssclass("sta_WF_detailLabel_P");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("VALIDSTATE");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_inspector_id","785","5","160","20",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_areaname","145","36","160","20",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("20");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Combo("cmb_inspectionclassid","145","67","160","20",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("21");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Spin("spn_prevcareeryear","145","98","50","20",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("22");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("unit01","195","98","20","20",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("23");
            obj.set_text("년");
            obj.set_cssclass("sta_WF_unit");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("YEAR");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Spin("spn_prevcareermonth","215","98","50","20",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("24");
            obj.set_min("0");
            obj.set_max("12");
            obj.set_value("");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("unit02","265","98","32","20",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("25");
            obj.set_text("개월");
            obj.set_cssclass("sta_WF_unit");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MONTH");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new MaskEdit("edt_score","145","129","160","20",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("26");
            obj.set_format("#0.0");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Combo("cbo_evaluationtype","145","160","160","20",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("27");
            obj.set_codecolumn("C,EvaluationType,,Y,Y");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_inspector","455","5","158","20",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("28");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Button("btn_inspector","edt_inspector:0","5","22","20",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("29");
            obj.set_cssclass("btn_WF_finder");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Calendar("cal_certdate","455","36","180","20",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("30");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Calendar("cal_enterdate","455","67","180","20",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("31");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_career","455","98","180","20",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("32");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_grade","455","129","180","20",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("33");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_inspectorno","455","160","180","20",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("34");
            obj.set_enable("false");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Calendar("cal_nextcertdate","785","36","160","20",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("35");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Calendar("cal_retiredate","785","67","160","20",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("36");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_totalcareer","785","98","160","20",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("37");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Combo("cbo_iscertfinish","785","129","160","20",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("38");
            obj.set_codecolumn("C,YesNo,,Y,Y");
            obj.set_value("");
            obj.set_index("-1");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Combo("cbo_validstate","785","160","160","20",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("39");
            obj.set_codecolumn("C,ValidState,,Y,Y");
            obj.set_value("");
            obj.set_index("-1");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_area_id","10","39","59","20",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("40");
            obj.set_value("작업장ID (HIDDEN)");
            obj.set_visible("false");
            obj.set_text("작업장ID (HIDDEN)");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","20","207","99","34",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("인증평가 이력");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("CERTIFICATIONHISTORY");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory","20","241",null,"327","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamQcinspectorhistory");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"변경일시\" tooltiptext=\"CHANGEDATE\"/><Cell col=\"2\" text=\"자격구분\" tooltiptext=\"CAPACITYTYPE\"/><Cell col=\"3\" text=\"인증평가일\" tooltiptext=\"CERTDATE\"/><Cell col=\"4\" text=\"점수\" tooltiptext=\"SCORE\"/><Cell col=\"5\" text=\"인증평가완료여부\" tooltiptext=\"ISCERTFINISH\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:TXNTIME\"/><Cell col=\"2\" text=\"bind:INSPECTIONCLASSNAME\"/><Cell col=\"3\" text=\"bind:CERTDATE\"/><Cell col=\"4\" text=\"bind:SCORE\" maskeditformat=\"#0.0\" displaytype=\"mask\"/><Cell col=\"5\" text=\"bind:ISCERTFINISH\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"70","28","95","20",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("저장");
            obj.set_cssclass("btn_pop_yes");
            obj.set_tooltiptext("SAVE");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,null,"70","28","20","20",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("닫기");
            obj.set_cssclass("btn_pop_no");
            obj.set_tooltiptext("CLOSE");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",992,626,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_basicInfo.form.cbo_site","value","ds_qamQcinspector","PLANTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_basicInfo.form.edt_inspector","value","ds_qamQcinspector","INSPECTORNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_basicInfo.form.edt_inspector_id","value","ds_qamQcinspector","EMPNO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_basicInfo.form.edt_areaname","value","ds_qamQcinspector","AREANAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_basicInfo.form.cal_certdate","value","ds_qamQcinspector","CERTDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_basicInfo.form.cal_nextcertdate","value","ds_qamQcinspector","NEXTCERTDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_basicInfo.form.cmb_inspectionclassid","value","ds_qamQcinspector","INSPECTIONCLASSID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_basicInfo.form.cal_enterdate","value","ds_qamQcinspector","ENTERDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_basicInfo.form.cal_retiredate","value","ds_qamQcinspector","RETIREDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_basicInfo.form.spn_prevcareeryear","value","ds_qamQcinspector","PREVCAREERYEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_basicInfo.form.spn_prevcareermonth","value","ds_qamQcinspector","PREVCAREERMONTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_basicInfo.form.edt_career","value","ds_qamQcinspector","COMPANYCAREER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_basicInfo.form.edt_totalcareer","value","ds_qamQcinspector","CAREER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_basicInfo.form.edt_score","value","ds_qamQcinspector","SCORE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_basicInfo.form.edt_grade","value","ds_qamQcinspector","GRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_basicInfo.form.cbo_iscertfinish","value","ds_qamQcinspector","ISCERTFINISH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_basicInfo.form.cbo_evaluationtype","value","ds_qamQcinspector","EVALUATIONTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_basicInfo.form.edt_inspectorno","value","ds_qamQcinspector","INSPECTORNO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_basicInfo.form.cbo_validstate","value","ds_qamQcinspector","VALIDSTATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_basicInfo.form.edt_area_id","value","ds_qamQcinspector","AREAID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("QAM00300P1.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("QAM00300P1.xfdl","lib::lib_qam.xjs");
        this.registerScript("QAM00300P1.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 검사원 등록.수정
         * 파일명 		: QAM00300P1.xfdl
         * 작성자 		: 권혜영
         * 작성일 		: 2021.04.26
         *
         * 설  명		: 품질관리 > 검사원/AUDIT > 검사원관리 > 검사원 등록/수정
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
        this.qamSearchComp = this.div_basicInfo.form;
        this.fv_isNew = true;
        this.fv_existEmpno = false;
        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
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
        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        };

        /*
         * 기능 : 신규
         */
        this.fn_add = function(obj,e)
        {
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

        	var objDs = this.ds_qamQcinspector, strColumn = "INSPECTORNAME|EMPNO|AREANAME|CERTDATE|NEXTCERTDATE|INSPECTIONCLASSID:CAPACITYTYPE|ENTERDATE|SCORE|GRADE|ISCERTFINISH|EVALUATIONTYPE|VALIDSTATE";
        	var validation = this.qamfn_checkEmptyField(objDs, strColumn);
        	if(!validation.rtn) {

        		this.qamfn_setEditFocus(this.div_basicInfo, objDs, validation.column);
        		this.gfn_Message("NoSelectedMsg", validation.msgTxt, "warning", "ok"); //선택된 {0}(이)가 없습니다. 먼저 선택하세요.
        		return;
        	}

        	validation = this.fn_checkValidation();
        	if(!validation.rtn) {
        		this.gfn_Message(validation.msg, null, "warning", "ok");
        		return;
        	}
        // 	if(this.fv_isNew) {
        // 		this.fn_searchExistInspector();
        // 		if(!this.fv_existEmpno) {
        // 			return;
        // 		}
        // 	}

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
        			this.opener.fn_search();
        			this.close();
        		} else if (trId == "selectQamQcinspectorList")
        		{
        			this.qamfn_calCareer(this.ds_qamQcinspector);
         		} else if (trId == "selectCapacityTypeList")
        		{

        		} else if (trId == "selectInspectionScore")
        		{
        			var grade = "None";
        			if(this.ds_output.rowcount > 0) {
        				grade = this.ds_output.getColumn(0, "GRADE") || grade;
        			}
        			this.ds_qamQcinspector.setColumn(0, "GRADE", grade);

        		} else if (trId == "selectExistInspector")
        		{
        			if(this.ds_output.rowcount > 0) {
        				this.gfn_Message("ExistInspector", null, "info", "ok");
        				this.fv_existEmpno = false;
        			}
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

        	if(!this.nfn_isNull(this.parent.ds_qamQcinspector) && !this.nfn_isNull(this.parent.nRow)) {
        		this.fv_isNew = false;
        		this.ds_qamQcinspector.set_updatecontrol(false);
        		this.ds_qamQcinspector.clearData();
        		this.ds_qamQcinspector.addRow();
        		this.ds_qamQcinspector.copyRow(0, this.parent.ds_qamQcinspector, this.parent.nRow);

        		this.qamfn_calCareer(this.ds_qamQcinspector);
        		this.ds_qamQcinspector.set_updatecontrol(true);

        		this.fn_searchHistory();
        	} else {
        		var dsObj = this.ds_qamQcinspector;
        		var row = dsObj.addRow();

        		dsObj.setColumn(row,"ENTERPRISEID", this.gf_getEnterpriseId());//ENTERPRISEID
        		dsObj.setColumn(row,"PLANTID", this.gf_getSiteType());//PLANTID
        		dsObj.setColumn(row,"PLANTCODEID", this.ds_CSiteType.getColumn(this.ds_CSiteType.rowposition, "ATTRIBUTE2"));//PLANTCODEID

        		dsObj.setColumn(row,"VALIDSTATE", "Valid");			//유효여부
        		dsObj.setColumn(row,"ISCERTFINISH", "Y");			//인증평가 완료여부

        		this.div_basicInfo.form.edt_inspectorno.set_enable(true);

        		this.fn_setNextCertDate();
        	}
        };

        /*
         * 검색 콤보 조회
         */
        this.fn_initCombo = function ()
        {
        	this.qamfn_setCustomQueryCmb(this.div_basicInfo.form.cmb_inspectionclassid // Object
        								, "selectGetCapacityTypeList,SEL,Y,A" // OPTION
        								, ""
        								, "fn_callBack");	  // 추가 파라미터
        };

        /*
         * 기능 : 검색
         */
        this.fn_searchHistory = function (obj, e)
        {
        	this.ds_qamQcinspectorhistory.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "INSPECTORID", this.ds_qamQcinspector.getColumn(0, "INSPECTORID"));

        	var sSvcID 			= "selectQamQcinspectorhistoryList";
        	var sController 	= "/qam00300/selectQamQcinspectorhistoryList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_qamQcinspectorhistory=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        /*
         * 기능 : 유효성 검증
         */
        this.fn_checkValidation = function()
        {
        	var validation = {rtn: true, msg: ""};
        	var objDs = this.ds_qamQcinspector;

        	var certDate = objDs.getColumn(0, "CERTDATE");
        	var enterDate = objDs.getColumn(0, "ENTERDATE");
        	var retireDate = objDs.getColumn(0, "RETIREDATE");
        	var grade = objDs.getColumn(0, "GRADE");

        	// 등급
        	if (grade == "None"){
        		validation.rtn = false;
        		validation.msg = "NoRegistGrade"; //NoRegistGrade
        		return validation;
        	}
        	// 퇴사일자도 입력됬다면 포함해서 날짜 유효성 평가
        	else if(!this.nfn_isNull(retireDate)) {
        		/*if (enterDate > certDate || enterDate > retireDate || retireDate > certDate) {*/
        		if (enterDate > certDate || enterDate > retireDate) {
        			validation.rtn = false;
        			validation.msg = "CheckDate"; //날짜를 확인해주세요.
        			return validation;
        		}
        	}
        	// 입사일자만 입력됬다면 퇴사일자 빼고 날짜 유효성 평가
        	else {
        		if (enterDate > certDate) {
        			validation.rtn = false;
        			validation.msg = "CheckDate"; //날짜를 확인해주세요.
        			return validation;
        		}
        	}

        	return validation;
        };

        /*
         * 기능 : 차기 인증평가일을 인증평가일 + 1년으로 설정
         */
        this.fn_setNextCertDate = function ()
        {
        	var objDs = this.ds_qamQcinspector;

        	objDs.setColumn(0, "CERTDATE", this.gfn_today());
        	var nextCertDate = this.gfn_addYear(objDs.getColumn(0, "CERTDATE"), 1);

        	objDs.setColumn(0, "NEXTCERTDATE", nextCertDate);
        	objDs.setColumn(0, "RETIREDATE", "");

        };

        /*
         * 기능 : 검사원 관리의 점수에 따른 등급조회 (AS-IS : GetInspectionScore)
         */
        this.fn_searchInspectionScore = function (inspectionclassid, score)
        {
        	this.ds_output.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();

        	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());//ENTERPRISEID
        	this.ds_search.setColumn(0, "PLANTID", this.gf_getSiteType());//PLANTID
        	this.ds_search.setColumn(0, "INSPECTIONCLASSID", inspectionclassid);
        	this.ds_search.setColumn(0, "SCORE", score);

        	var sSvcID 			= "selectInspectionScore";
        	var sController 	= "/qam00300/selectInspectionScore.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_output=output";
        	var sArgs 			= "";

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검사원 등록 시 이미 등록된 검사원명, 사원번호인지 조회 (AS-IS : GetExistInspector)
         */
        this.fn_searchExistInspector = function ()
        {
        	this.ds_output.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();

        	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());//ENTERPRISEID
        	this.ds_search.setColumn(0, "PLANTID", this.gf_getSiteType());//PLANTID
        	this.ds_search.setColumn(0, "EMPNO", this.ds_qamQcinspector.getColumn(0, "EMPNO"));
        	this.ds_search.setColumn(0, "INSPECTORNAME", this.ds_qamQcinspector.getColumn(0, "INSPECTORNAME"));

        	var sSvcID 			= "selectExistInspector";
        	var sController 	= "/qam00300/selectExistInspector.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_output=output";
        	var sArgs 			= "";

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, null, true, false);
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/


        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        this.ds_qamQcinspector_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "INSPECTORNAME" && this.nfn_isNull(e.newvalue)) {
        		obj.setColumn(e.row, "AREAID", "");
        		obj.setColumn(e.row, "AREANAME", "");
        	}
        	if(e.columnid == "PREVCAREERYEAR") {
        		this.qamfn_calCareer(this.ds_qamQcinspector, e.newvalue, obj.getColumn(e.row, "PREVCAREERMONTH"));
        	}
        	if(e.columnid == "PREVCAREERMONTH") {
        		this.qamfn_calCareer(this.ds_qamQcinspector, obj.getColumn(e.row, "PREVCAREERYEAR"), e.newvalue);
        	}
        	if(e.columnid == "INSPECTIONCLASSID") {
        		this.fn_searchInspectionScore(e.newvalue, obj.getColumn(e.row, "SCORE"));
        	}
        	if(e.columnid == "SCORE") {
        		this.fn_searchInspectionScore(obj.getColumn(e.row, "INSPECTIONCLASSID"), e.newvalue);
        	}
        	this.qamfn_calCareer(this.ds_qamQcinspector);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_basicInfo.form.edt_inspector.addEventHandler("onkeydown",this.qamfn_callOpenPopEditEvent,this);
            this.div_basicInfo.form.btn_inspector.addEventHandler("onclick",this.qamfn_callOpenPopButtonEvent,this);
            this.btnSave.addEventHandler("onclick",this.fn_save,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.ds_qamQcinspector.addEventHandler("oncolumnchanged",this.ds_qamQcinspector_oncolumnchanged,this);
        };
        this.loadIncludeScript("QAM00300P1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
