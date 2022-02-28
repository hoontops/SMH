(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM02800P1");
            this.set_titletext("변경점 신청서 등록/수정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,712);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_approvalList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGERID\" type=\"STRING\" size=\"256\"/><Column id=\"USERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"CELLPHONENUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"EMAILADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"REJECTCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGETYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALSTATE_ORG\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALTIME\" type=\"STRING\" size=\"256\"/><Column id=\"REJECTCOMMENTS\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALNO\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_save", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHANGEPOINTNO\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDEPARTMENT\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDEPARTMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMUSEYN\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCOMMENTS\" type=\"STRING\" size=\"256\"/><Column id=\"BEFORECOMMENTS\" type=\"STRING\" size=\"256\"/><Column id=\"AFTERCOMMENTS\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGEDETAILS\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGEPOINTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"STOCKHANDLEMETHOD\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGEITEMMGNT\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLENAME\" type=\"STRING\" size=\"256\"/><Column id=\"STOCKSTATUS\" type=\"STRING\" size=\"256\"/><Column id=\"RATINGDECISION\" type=\"STRING\" size=\"256\"/><Column id=\"SEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"SEGMENTTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGETYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATIONTYPENAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_reviewList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"USERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REVIEWDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REVIEWCOMMENTS\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGEPOINTNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grade", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOOKUP_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_seq", this);
            obj._setContents("<ColumnInfo><Column id=\"CHANGEPOINTNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_itemMasterDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"MASTERDATACLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMUOM\" type=\"STRING\" size=\"256\"/><Column id=\"NEWREQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"ENGINEERINGCHANGE\" type=\"STRING\" size=\"256\"/><Column id=\"IMPLEMENTATIONDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMSTATUS\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LAYER\" type=\"STRING\" size=\"256\"/><Column id=\"COSTCATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"SALEORDERCATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"INVENTORYCATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"MAKEBUYTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANNER\" type=\"STRING\" size=\"256\"/><Column id=\"UNITOFPURCHASING\" type=\"STRING\" size=\"256\"/><Column id=\"UNITOFSTOCK\" type=\"STRING\" size=\"256\"/><Column id=\"SPEC\" type=\"STRING\" size=\"256\"/><Column id=\"PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"AGING\" type=\"STRING\" size=\"256\"/><Column id=\"AGINGDAY\" type=\"STRING\" size=\"256\"/><Column id=\"CYCLECOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ENDTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTCONTROL\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNID\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNUSER\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"LEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"TACTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"NM_PLANNER\" type=\"STRING\" size=\"256\"/><Column id=\"NM_CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"NM_SPECIFICATIO\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTRATING\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FACTORYID\" type=\"STRING\" size=\"256\"/><Column id=\"IDCLASSIDRULE\" type=\"STRING\" size=\"256\"/><Column id=\"ISINPUT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_output", this);
            obj._setContents("<ColumnInfo><Column id=\"PROCESSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGERID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_customer", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Button("btn_close",null,null,"70","28","20","20",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("닫기");
            obj.set_cssclass("btn_pop_no");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,null,"70","28","btn_close:5","20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_pop_yes");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,null,"50","20","97","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,null,"700","10","0","48",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Div("div_changePointNo","20","20",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_changePointNo","0","0","140","31",null,null,null,null,null,null,this.div_changePointNo.form);
            obj.set_taborder("1");
            obj.set_text("변경점 관리번호");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("CHANGEPOINTNO");
            this.div_changePointNo.addChild(obj.name, obj);

            obj = new Edit("edt_changePointNo","145","5","200","20",null,null,null,null,null,null,this.div_changePointNo.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            this.div_changePointNo.addChild(obj.name, obj);

            obj = new Div("div_form","20","447","756","207",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("div_WF_detail");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("label00","0","5","120","20",null,null,null,null,null,null,this.div_form.form);
            obj.set_taborder("26");
            obj.set_text("변경점 신청일");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("CHANGEPOINTDATE");
            this.div_form.addChild(obj.name, obj);

            obj = new Static("label02","0","30","120","20",null,null,null,null,null,null,this.div_form.form);
            obj.set_taborder("27");
            obj.set_text("변경점 신청부서");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("CHANGEPOINTDEPARTMENT");
            this.div_form.addChild(obj.name, obj);

            obj = new Static("label04","0","55","120","20",null,null,null,null,null,null,this.div_form.form);
            obj.set_taborder("28");
            obj.set_text("변경점 제목");
            obj.set_cssclass("sta_WF_detailLabel2_P");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("CHANGEPOINTTITLE");
            this.div_form.addChild(obj.name, obj);

            obj = new Static("label06","0","80","120","20",null,null,null,null,null,null,this.div_form.form);
            obj.set_taborder("29");
            obj.set_text("품목사용여부");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("ISUSEPRODUCT");
            this.div_form.addChild(obj.name, obj);

            obj = new Static("label01",null,"5","110","20","344",null,null,null,null,null,this.div_form.form);
            obj.set_taborder("30");
            obj.set_text("공정유형");
            obj.set_cssclass("sta_WF_detailLabel2_P");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("SEGMENTTYPE");
            this.div_form.addChild(obj.name, obj);

            obj = new Static("label03",null,"30","110","20","344",null,null,null,null,null,this.div_form.form);
            obj.set_taborder("31");
            obj.set_text("변경유형");
            obj.set_cssclass("sta_WF_detailLabel2_P");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("CHANGETYPE");
            this.div_form.addChild(obj.name, obj);

            obj = new Static("label05",null,"55","110","20","344",null,null,null,null,null,this.div_form.form);
            obj.set_taborder("32");
            obj.set_text("적용구분");
            obj.set_cssclass("sta_WF_detailLabel2_P");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("IMPLEMENTATIONTYPE");
            this.div_form.addChild(obj.name, obj);

            obj = new Static("label07",null,"80","110","20","344",null,null,null,null,null,this.div_form.form);
            obj.set_taborder("33");
            obj.set_text("공정명");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("PROCESSSEGMENTNAME");
            this.div_form.addChild(obj.name, obj);

            obj = new Static("label08","0","105","120","20",null,null,null,null,null,null,this.div_form.form);
            obj.set_taborder("34");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("ITEMNAME");
            this.div_form.addChild(obj.name, obj);

            obj = new Static("label10","0","130","120","20",null,null,null,null,null,null,this.div_form.form);
            obj.set_taborder("35");
            obj.set_text("자재명");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("CONSUMABLEDEFNAME");
            this.div_form.addChild(obj.name, obj);

            obj = new Static("label12","0","155","120","20",null,null,null,null,null,null,this.div_form.form);
            obj.set_taborder("36");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("LOTID");
            this.div_form.addChild(obj.name, obj);

            obj = new Static("label14","0","180","120","20",null,null,null,null,null,null,this.div_form.form);
            obj.set_taborder("37");
            obj.set_text("재고현황");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("STOCKSTATE");
            this.div_form.addChild(obj.name, obj);

            obj = new Static("label09",null,"105","110","20","344",null,null,null,null,null,this.div_form.form);
            obj.set_taborder("38");
            obj.set_text("변경품 관리");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("CHANGEPRODUCTMANAGEMENT");
            this.div_form.addChild(obj.name, obj);

            obj = new Static("label11",null,"130","110","20","344",null,null,null,null,null,this.div_form.form);
            obj.set_taborder("39");
            obj.set_text("고객");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("CUSTOMER");
            this.div_form.addChild(obj.name, obj);

            obj = new Static("label13",null,"155","110","20","344",null,null,null,null,null,this.div_form.form);
            obj.set_taborder("40");
            obj.set_text("재고처리방안");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("STOCKTREATMENTPLAN");
            this.div_form.addChild(obj.name, obj);

            obj = new CheckBox("chk_segmentType1","415","5","70","21",null,null,null,null,null,null,this.div_form.form);
            obj.set_taborder("9");
            obj.set_text("생산공정");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("PRODUCTIONPROCESS");
            obj.set_truevalue("ProductionProcess");
            this.div_form.addChild(obj.name, obj);

            obj = new CheckBox("chk_segmentType2","chk_segmentType1:10","5","46","21",null,null,null,null,null,null,this.div_form.form);
            obj.set_taborder("10");
            obj.set_text("구매");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("PURCHASE");
            obj.set_truevalue("Purchase");
            this.div_form.addChild(obj.name, obj);

            obj = new CheckBox("chk_segmentType3","chk_segmentType2:10","5","46","21",null,null,null,null,null,null,this.div_form.form);
            obj.set_taborder("11");
            obj.set_text("사양");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("SPECIFICATION");
            obj.set_truevalue("Specification");
            this.div_form.addChild(obj.name, obj);

            obj = new CheckBox("chk_segmentType4","chk_segmentType3:34","5","70","21",null,null,null,null,null,null,this.div_form.form);
            obj.set_taborder("12");
            obj.set_text("기타정보");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("ETC");
            obj.set_truevalue("Etc");
            this.div_form.addChild(obj.name, obj);

            obj = new CheckBox("chk_changeType1","label03:5","30","58","21",null,null,null,null,null,null,this.div_form.form);
            obj.set_taborder("13");
            obj.set_text("원자재");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("RAWMATERIAL");
            obj.set_truevalue("RawMaterial");
            this.div_form.addChild(obj.name, obj);

            obj = new CheckBox("chk_changeType2","chk_changeType1:22","30","46","21",null,null,null,null,null,null,this.div_form.form);
            obj.set_taborder("14");
            obj.set_text("설비");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("EQUIPMENT");
            obj.set_truevalue("Equipment");
            this.div_form.addChild(obj.name, obj);

            obj = new CheckBox("chk_changeType3","chk_changeType2:10","30","70","21",null,null,null,null,null,null,this.div_form.form);
            obj.set_taborder("15");
            obj.set_text("공정변경");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("SEGMENTCHANGE");
            obj.set_truevalue("WorkingCondition");
            this.div_form.addChild(obj.name, obj);

            obj = new CheckBox("chk_changeType4","chk_changeType3:10","30","46","21",null,null,null,null,null,null,this.div_form.form);
            obj.set_taborder("16");
            obj.set_text("사람");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("PERSON");
            obj.set_truevalue("Person");
            this.div_form.addChild(obj.name, obj);

            obj = new CheckBox("chk_changeType5","chk_changeType4:30","30","46","21",null,null,null,null,null,null,this.div_form.form);
            obj.set_taborder("17");
            obj.set_text("환경");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("ENVIRONMENT");
            obj.set_truevalue("Environment");
            this.div_form.addChild(obj.name, obj);

            obj = new CheckBox("chk_applicationType1","label05:5","55","90","21",null,null,null,null,null,null,this.div_form.form);
            obj.set_taborder("18");
            obj.set_text("승인 후 즉시");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("AFTERAPPROVAL");
            obj.set_truevalue("AfterApproval");
            this.div_form.addChild(obj.name, obj);

            obj = new CheckBox("chk_applicationType2","chk_applicationType1:46","55","118","21",null,null,null,null,null,null,this.div_form.form);
            obj.set_taborder("19");
            obj.set_text("재고 소진 후 적용");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("AFTEREXHAUST");
            obj.set_truevalue("AfterExhaust");
            this.div_form.addChild(obj.name, obj);

            obj = new Button("btn_item",null,"105","22","20","label09:0",null,null,null,null,null,this.div_form.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_finder");
            obj.set_enable("false");
            this.div_form.addChild(obj.name, obj);

            obj = new Edit("edt_item","label08:5","105",null,"20","btn_item:0",null,null,null,null,null,this.div_form.form);
            obj.set_taborder("2");
            this.div_form.addChild(obj.name, obj);

            obj = new Edit("edt_requestDepartment","label02:5","30",null,"20","label03:0",null,null,null,null,null,this.div_form.form);
            obj.set_taborder("41");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.div_form.addChild(obj.name, obj);

            obj = new Edit("edt_subject","label04:5","55",null,"20","label05:0",null,null,null,null,null,this.div_form.form);
            obj.set_taborder("0");
            this.div_form.addChild(obj.name, obj);

            obj = new Combo("cbo_useItem","125","80",null,"20","label07:0",null,null,null,null,null,this.div_form.form);
            obj.set_taborder("1");
            obj.set_codecolumn("C,YesNo,,Y,Y");
            this.div_form.addChild(obj.name, obj);

            obj = new Edit("edt_consumableName","label10:5","130",null,"20","label11:0",null,null,null,null,null,this.div_form.form);
            obj.set_taborder("4");
            this.div_form.addChild(obj.name, obj);

            obj = new Button("btn_lotNo",null,"155","22","20","520",null,null,null,null,null,this.div_form.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_finder");
            this.div_form.addChild(obj.name, obj);

            obj = new Edit("edt_lotNo","label12:5","155",null,"20","btn_lotNo:0",null,null,null,null,null,this.div_form.form);
            obj.set_taborder("5");
            this.div_form.addChild(obj.name, obj);

            obj = new Edit("edt_selectLot","3","155",null,"20","700",null,null,null,null,null,this.div_form.form);
            obj.set_taborder("7");
            obj.set_visible("false");
            obj.set_value("사용안함");
            obj.set_text("사용안함");
            this.div_form.addChild(obj.name, obj);

            obj = new Edit("edt_stockState","label14:5","label13:5","175","20",null,null,null,null,null,null,this.div_form.form);
            obj.set_taborder("8");
            this.div_form.addChild(obj.name, obj);

            obj = new Button("btn_segment",null,"80","22","20","5",null,null,null,null,null,this.div_form.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_finder");
            this.div_form.addChild(obj.name, obj);

            obj = new Edit("edt_segment",null,"80","312","20","btn_segment:0",null,null,null,null,null,this.div_form.form);
            obj.set_taborder("20");
            this.div_form.addChild(obj.name, obj);

            obj = new Edit("edt_changeItemMgnt",null,"105","334","20","5",null,null,null,null,null,this.div_form.form);
            obj.set_taborder("22");
            this.div_form.addChild(obj.name, obj);

            obj = new Button("btn_customer",null,"130","22","20","5",null,null,null,null,null,this.div_form.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_finder");
            this.div_form.addChild(obj.name, obj);

            obj = new Edit("edt_customer",null,"130","312","20","btn_customer:0",null,null,null,null,null,this.div_form.form);
            obj.set_taborder("23");
            this.div_form.addChild(obj.name, obj);

            obj = new Edit("edt_stock",null,"155","334","20","5",null,null,null,null,null,this.div_form.form);
            obj.set_taborder("25");
            this.div_form.addChild(obj.name, obj);

            obj = new Edit("edt_item_id","3","76","62","20",null,null,null,null,null,null,this.div_form.form);
            obj.set_taborder("42");
            obj.set_visible("false");
            obj.set_text("품목ID (HIDDEN)");
            this.div_form.addChild(obj.name, obj);

            obj = new Edit("edt_segment_id","310","76","62","20",null,null,null,null,null,null,this.div_form.form);
            obj.set_taborder("43");
            obj.set_visible("false");
            obj.set_text("공정ID (HIDDEN)");
            this.div_form.addChild(obj.name, obj);

            obj = new Edit("edt_customer_id","310","130","62","20",null,null,null,null,null,null,this.div_form.form);
            obj.set_taborder("44");
            obj.set_visible("false");
            obj.set_text("고객ID (HIDDEN)");
            this.div_form.addChild(obj.name, obj);

            obj = new Edit("edt_requestDepartmentId","3","32","62","20",null,null,null,null,null,null,this.div_form.form);
            obj.set_taborder("45");
            obj.set_visible("false");
            obj.set_text("부서ID (HIDDEN)");
            this.div_form.addChild(obj.name, obj);

            obj = new Div("div_requestdate_from","125","5",null,"21","label01:0",null,null,null,null,null,this.div_form.form);
            obj.set_taborder("46");
            obj.set_url("common::com_calendar.xfdl");
            obj.set_enable("false");
            this.div_form.addChild(obj.name, obj);

            obj = new Edit("edt_item_cd","3","100","62","20",null,null,null,null,null,null,this.div_form.form);
            obj.set_taborder("47");
            obj.set_visible("false");
            obj.set_text("품목CD (HIDDEN)");
            this.div_form.addChild(obj.name, obj);

            obj = new Edit("edt_segment_cd","310","90","62","20",null,null,null,null,null,null,this.div_form.form);
            obj.set_taborder("48");
            obj.set_visible("false");
            obj.set_text("공정ID (HIDDEN)");
            this.div_form.addChild(obj.name, obj);

            obj = new Button("btn_selectLot","239","155","60","20",null,null,null,null,null,null,this.div_form.form);
            obj.set_taborder("49");
            obj.set_text("LOT 정보");
            obj.set_cssclass("btn_WF_black");
            obj.set_tooltiptext("LOTINFO");
            this.div_form.addChild(obj.name, obj);

            obj = new Static("sta_requestInfo","20","413","202","34",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("신청정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("APPLYINFORMATION");
            this.addChild(obj.name, obj);

            obj = new Static("sta_changeContent","786","52","474","34",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("변경내용");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("CHANGECONTENTS");
            this.addChild(obj.name, obj);

            obj = new Div("div_changeContent","786","86",null,"179","20",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("div_WF_detail");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","0","5","120","20",null,null,null,null,null,null,this.div_changeContent.form);
            obj.set_taborder("4");
            obj.set_text("변경사유");
            obj.set_cssclass("sta_WF_detailLabel2_P");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("CHANGEREASON");
            this.div_changeContent.addChild(obj.name, obj);

            obj = new TextArea("txt_reasonComment","Static30:5","5",null,"38","5",null,null,null,null,null,this.div_changeContent.form);
            obj.set_taborder("0");
            obj.set_wordWrap("char");
            this.div_changeContent.addChild(obj.name, obj);

            obj = new Static("Static30_00","0","48","120","20",null,null,null,null,null,null,this.div_changeContent.form);
            obj.set_taborder("5");
            obj.set_text("변경전");
            obj.set_cssclass("sta_WF_detailLabel2_P");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("BEFORECHANGE");
            this.div_changeContent.addChild(obj.name, obj);

            obj = new TextArea("txt_beforeComments","Static30_00:5","48",null,"38","5",null,null,null,null,null,this.div_changeContent.form);
            obj.set_taborder("1");
            obj.set_wordWrap("char");
            this.div_changeContent.addChild(obj.name, obj);

            obj = new Static("Static30_00_00","0","134","120","20",null,null,null,null,null,null,this.div_changeContent.form);
            obj.set_taborder("6");
            obj.set_text("변경세부내용");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("CHANGEDETAILS");
            this.div_changeContent.addChild(obj.name, obj);

            obj = new TextArea("txt_changeDetail","Static30_00_00:5","134",null,"38","5",null,null,null,null,null,this.div_changeContent.form);
            obj.set_taborder("3");
            obj.set_wordWrap("char");
            this.div_changeContent.addChild(obj.name, obj);

            obj = new Static("Static30_01","0","91","120","20",null,null,null,null,null,null,this.div_changeContent.form);
            obj.set_taborder("7");
            obj.set_text("변경후");
            obj.set_cssclass("sta_WF_detailLabel2_P");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("AFTERCHANGE");
            this.div_changeContent.addChild(obj.name, obj);

            obj = new TextArea("txt_afterComments","Static30_01:5","91",null,"38","5",null,null,null,null,null,this.div_changeContent.form);
            obj.set_taborder("2");
            obj.set_wordWrap("char");
            this.div_changeContent.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","786","413","100","34",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("검토/승인내용");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("REVIEWANDAPPROVAL");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_reviewList","786","447","494","117",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_binddataset("ds_reviewList");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"142\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"사용자명\" tooltiptext=\"USERNAME\"/><Cell col=\"3\" text=\"부서\" tooltiptext=\"DEPARTMENT\"/><Cell col=\"4\" text=\"검토일시\" tooltiptext=\"REVIEWTIME\"/><Cell col=\"5\" text=\"내용\" tooltiptext=\"COMMENTS\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:USERNAME\"/><Cell col=\"3\" text=\"bind:DEPARTMENTNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:REVIEWDATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"5\" text=\"bind:REVIEWCOMMENTS\" edittype=\"normal\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_grdDel",null,"419","26","24","16",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_grdAdd",null,"419","26","24","btn_grdDel:0",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gradeJudgement","786","564","307","34",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("등급판정");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("GRADEJUDGEMENT");
            this.addChild(obj.name, obj);

            obj = new Div("div_grade","786","598",null,"56","20",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("div_WF_detail");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_changePointType","0","5","120","20",null,null,null,null,null,null,this.div_grade.form);
            obj.set_taborder("0");
            obj.set_text("변경점 구분");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("CHANGEPOINTTYPE");
            this.div_grade.addChild(obj.name, obj);

            obj = new Static("sta_grade","0","30","120","20",null,null,null,null,null,null,this.div_grade.form);
            obj.set_taborder("1");
            obj.set_text("등급");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("GRADE");
            this.div_grade.addChild(obj.name, obj);

            obj = new Combo("cbo_changePointType","125","5",null,"20","192",null,null,null,null,null,this.div_grade.form);
            obj.set_taborder("2");
            obj.set_codecolumn("C,ChangePointType,null,Y,N");
            obj.set_readonly("false");
            this.div_grade.addChild(obj.name, obj);

            obj = new Radio("rdo_grade","125","30",null,"20","0",null,null,null,null,null,this.div_grade.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_grade");
            obj.set_codecolumn("LOOKUP_CODE");
            obj.set_datacolumn("LOOKUP_CODE");
            obj.set_columncount("10");
            this.div_grade.addChild(obj.name, obj);

            obj = new Div("div_file","60.38%",null,null,"142","20","300",null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_url("common::com_file_b2.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","785","265","100","34",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("파일목록");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("FILELIST");
            this.addChild(obj.name, obj);

            obj = new Button("btn_x_close",null,"0","20","20","0",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("CLOSE");
            this.addChild(obj.name, obj);

            obj = new Div("div_approval","20","52","756","361",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_url("qam::QAM02800D1.xfdl");
            obj.set_async("false");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1300,712,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","div_changePointNo.form.edt_changePointNo","value","ds_save","CHANGEPOINTNO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_form.form.edt_customer_id","value","ds_save","CUSTOMERID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_form.form.edt_customer","value","ds_save","CUSTOMERNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_form.form.edt_segment_id","value","ds_save","PROCESSSEGMENTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_form.form.edt_segment","value","ds_save","PROCESSSEGMENTNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_form.form.edt_requestDepartmentId","value","ds_save","REQUESTDEPARTMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_form.form.edt_requestDepartment","value","ds_save","REQUESTDEPARTMENTNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_form.form.edt_subject","value","ds_save","SUBJECT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_form.form.cbo_useItem","value","ds_save","ITEMUSEYN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_changeContent.form.txt_reasonComment","value","ds_save","REASONCOMMENTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_changeContent.form.txt_beforeComments","value","ds_save","BEFORECOMMENTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_changeContent.form.txt_afterComments","value","ds_save","AFTERCOMMENTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_changeContent.form.txt_changeDetail","value","ds_save","CHANGEDETAILS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_grade.form.cbo_changePointType","value","ds_save","CHANGEPOINTTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_form.form.edt_lotNo","value","ds_save","LOTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_form.form.edt_stock","value","ds_save","STOCKHANDLEMETHOD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_form.form.edt_changeItemMgnt","value","ds_save","CHANGEITEMMGNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_form.form.edt_segment_cd","value","ds_save","PROCESSSEGMENTVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_form.form.edt_item_id","value","ds_save","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_form.form.edt_item_cd","value","ds_save","PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_form.form.edt_consumableName","value","ds_save","CONSUMABLENAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_form.form.edt_stockState","value","ds_save","STOCKSTATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_form.form.edt_item","value","ds_save","PRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_grade.form.rdo_grade","value","ds_save","RATINGDECISION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_form.form.div_requestdate_from","text","ds_save","REQUESTDATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_calendar.xfdl");
            this._addPreloadList("fdl","common::com_file_b2.xfdl");
            this._addPreloadList("fdl","qam::QAM02800D1.xfdl");
        };
        
        // User Script
        this.addIncludeScript("QAM02800P1.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("QAM02800P1.xfdl","lib::lib_qam.xjs");
        this.registerScript("QAM02800P1.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 변경점 변경신청-신규
         * 파일명 		: QAM02800P1.xfdl
         * 작성자 		: sungmin.choe
         * 작성일 		: 2021.4.26
         *
         * 설  명		: 변경점 변경신청-신규
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.4.26	sungmin.choe   	최초작성
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
         this.fv_type;
         this.changePointNo = this.parent.changePointNo;
         this.qamSearchComp = this.div_form.form;
         this.fv_userid = this.gf_getUserId();
        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
         this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.div_file.form.sta_subTitle.set_visible(false);

        	//초기 조회 함수
        	this.fn_selectGrade();

        	if(!this.nfn_isNull(this.changePointNo)){ //기존 Data
        		this.fv_type = "Old";
        		this.fn_selectDetailData();

        	} else { //신규 Data
        		this.fv_type = "New";
        		this.fn_newData();
        	}

        	//폼목의 경우 고객정보도 초기화해야해서 별도 호출
        	this.div_form.form.btn_edt_item.removeEventHandler("onclick", this.nfn_editBtnClear , this);
        	this.div_form.form.btn_edt_item.addEventHandler("onclick", this.fn_editBtnClear , this);
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 검토/승인내용 그리드 행추가 함수
         */
        this.btn_grdAdd_onclick = function(obj,e)
        {
        	var dsObj = this.ds_reviewList;
        	var nRow = dsObj.addRow();
        	var sDate = this.nfn_getCurrentSystemTime(0,0,"today");
        	var arrDate = sDate.split(",");
        	var dateType = "yyyy-MM-dd HH:mm:ss";

        	dsObj.setColumn(nRow, "USERID", 		this.fv_userid);
        	dsObj.setColumn(nRow, "USERNAME", 		this.gf_getUserNm());
        	dsObj.setColumn(nRow, "DEPARTMENTNAME", this.gf_getDeptNm());
        	dsObj.setColumn(nRow, "DEPARTMENT", 	this.gf_getDeptCd());
        	dsObj.setColumn(nRow, "REVIEWDATE", 	arrDate[0]);
        	dsObj.setColumn(nRow, "CHANGEPOINTNO", 	this.changePointNo);
        	dsObj.setColumn(nRow, "VALIDSTATE", 	"Valid");
        };

        /*
         * 검토/승인내용 그리드 행삭제 함수
         */
        this.btn_grdDel_onclick = function(obj,e)
        {
        	//공통함수
        	this.basfn_deleteRow(this.ds_reviewList);
        };

        /*
         * 저장
         */
        this.fn_save = function(obj,e)
        {
        	// 유효성 검증 (필수 체크 신청정보)
        	if(!this.fn_checkValidation()) return;

        	//유효성 검증 (검토/승인)
        	var validation = this.fn_checkValidationReview();
        	if(!validation.rtn) {
        		this.gfn_Message(validation.msg, null, "warning", "ok");
        		return;
        	}

        	//유효성 검증 (결재정보)
        	if(!this.div_approval.form.fn_checkValidationApproval()) return;

        	// 저장 전에 data set.
        	this.ds_save.setColumn(0, "CHANGEPOINTNO", this.changePointNo);
        	this.ds_save.setColumn(0, "VALIDSTATE", "Valid");

        	this.ds_approvalList.clearData();
        	var objDs = this.div_approval.form.ds_approvalList;
        	for(var i = 0; i < objDs.rowcount; i++) {
        		var nRow = this.ds_approvalList.addRow();
        		this.ds_approvalList.copyRow(nRow, objDs, i);
        		this.ds_approvalList.setColumn(nRow, "APPROVALNO", this.changePointNo);
        		this.ds_approvalList.setColumn(nRow, "APPROVALTYPE", "ChangePointManagement");
        		this.ds_approvalList.setColumn(nRow, "VALIDSTATE", "Valid");
        	}
        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveChangePoint";
        	var sController 	= "/qam02800/saveChangePoint.do";
        	var sInDatasets 	= "ds_save=ds_save:U ds_reviewList=ds_reviewList:U ds_approvalList=ds_approvalList:A";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
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
        		if (trId == "saveChangePoint")
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");

        			//메일발송
        			this.div_approval.form.fn_approvalMail(this.nfn_getDictionarynameUpper("CHANGEREVIEWANDAPPROVALREQUEST"), this.ds_reviewList, this.ds_save);
        			this.div_approval.form.fn_approvalCompanionMail(this.nfn_getDictionarynameUpper("CHANGEREVIEWCOMPANION"), this.ds_reviewList, this.ds_save);

        		} else if (trId =="selectDetailData") {

        			//파일 처리
        			this.qamfn_setCompControl(this.div_file.form.components, "hide", [Div, Button], "btn_fileDownLoad");
        			this.fn_searchAttach();
        			this.fn_bindData();
        			this.fn_setReadOnly();

        			//결재리스트 DIV 처리
        			this.div_approval.set_url("qam::QAM02800D1.xfdl");
        			this.div_approval.form.fn_formInit(this.ds_approvalList, this.fv_type);

        		} else if (trId == "selectRCKey"){

        			this.changePointNo = this.ds_seq.getColumn(0,"CHANGEPOINTNO");

        			//파일 처리
        			this.fn_searchAttach();
        			this.fn_setReadOnly();

        			//결재리스트 DIV 처리
        			this.div_approval.set_url("qam::QAM02800D1.xfdl");
        			this.div_approval.form.fn_formInit(this.ds_approvalList, this.fv_type);

        		} else if (trId == "selectIsDraft") {

        			// 결재테이블의 요청의 결재상태가 회수가 아니라면 ReadOnly처리
        			if (this.ds_output.rowcount == 0) {
        				// 신청정보
        				this.qamfn_setCompControl(this.div_form.form.components, "disable", [Edit, Combo, CheckBox, Button, TextArea, Calendar], "btn_selectLot");
        				//this.qamfn_setCompControl(this.div_form.form.components, "enable", [Button], "btn_selectLot");

        				// 변경내용
        				this.qamfn_setCompControl(this.div_changeContent.form.components, "disable", [TextArea]);

        			}
        		} else if (trId == "selectChangePointThisTimeApprovalUser") {

        			// 이번 차례의 결재가 절차구분이 합의 또는 승인부서이고 로그인한 유저가 담당자라면 등급판정 UnReadOnly
        			if (this.ds_output.rowcount == 0) return;

        			var processType = this.ds_output.getColumn(0,"PROCESSTYPE");
        			var chargerId 	= this.ds_output.getColumn(0,"CHARGERID");

        			if((processType=="Review" || processType=="Approval") && chargerId == this.fv_userid) {
        				// 등급판정
        				this.qamfn_setCompControl(this.div_grade.form.components, "enable", [Radio, CheckBox]);
        			}
        		} else if (trId == "selectEcmLookupValuesVList2ds_CGrade") {

        		}
        	}
        };

        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        this.fn_openPop = function(svcId, popId)
        {
        	// gfn_openPopup(arg_type, popupCd, popupNm, rtnCols, paramCols, paramValues, searchStr);
        	//-----------------
        	// arg_type    : A::사용자가 선택, B:: 한건존재시 자동 셋팅
        	// popupCd     : 공통팝업 관리 화면에서 생성되는 팝업코드
        	// popupNm     : 변경할팝업화면명 , 변경하지 않을 경우 팝업화면 타이틀은 관리화면의 타이틀로 지정됨
        	// rtnCols     : 구분자 : "|"   : 그리드에 출력될 컬럼 지정 (않을 경우 관리화면의 그리드로 출력됨)
        	// paramCols   : 구분자 : "|" : where 구문에 들어갈 컬럼
        	// paramValues : 구분자 : "|"  : where 구문에 들어갈 컬럼에 대한 값
        	// searchStr   : 팝업 조회조건 콤보값 = 조회 값

        	var popupId = svcId;
        	var oArg = {};
        	var opts = "width=650,height=500";

        	oArg.arg_popupCd = popId;
        	oArg.arg_popupNm = "";
        	oArg.arg_paramCols = "";
        	oArg.arg_paramValues = "";
        	oArg.arg_searchStr = "";

        	if(svcId=="FRM_LOT"){
        		opts = "width=1024,height=500";
        		oArg.arg_type = "CA";
        		oArg.arg_paramCols = "PRODUCTDEFID|PRODUCTDEFVERSION";
        		oArg.arg_paramValues = this.nfn_nvl(this.div_form.form.edt_item_id.value,"")+"|"+this.nfn_nvl(this.div_form.form.edt_item_cd.value,"");
        		oArg.arg_searchStr = "PLANTID="+this.gf_getSiteType()
        						   +"|LOTID="+this.nfn_nvl(this.div_form.form.edt_lotNo.value,"");
        		oArg.arg_rtnCols = "LOTID";
        		this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        	} else if(svcId=="FRM_CUSTOMER"){
        		oArg.arg_type = "BA";
        		oArg.arg_rtnCols = "CUSTOMERID|CUSTOMERNAME";
        		oArg.arg_searchStr = "SEARCH_KEY=" + this.nfn_nvl(this.div_form.form.edt_customer.value,"");
        		this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        	} else if(svcId=="SELECT_LOT"){
        		opts = "width=800,height=500";
        		oArg.arg_lotId = this.ds_save.getColumn(0,"LOTID");
        		this.gfn_openPopup(popupId,"qam::QAM02800P2.xfdl",oArg,opts);
        	}else if(svcId == "FRM_ITEM") { // 품목코드 조회 P00236 (by khyed) //GetProductListByQcm
        		opts = "width=600,height=500";
        		oArg.arg_type = "BA";
        		oArg.arg_rtnCols = "PRODUCTDEFID|PRODUCTDEFNAME|PRODUCTDEFVERSION";
        		oArg.arg_searchStr	= "SEARCH_KEY=" + this.nfn_nvl(this.div_form.form.edt_item.value,"");
        		this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        	}
        };

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(sPopupId != "EMAIL" && this.nfn_isNull(rtn)) return;

        	if(sPopupId == "FRM_CUSTOMER"){
        		this.div_form.form.edt_customer.set_value(rtn[1]);
        		this.div_form.form.edt_customer_id.set_value(rtn[0]);

        	} else if(sPopupId=="FRM_LOT"){
        		var objId = "";

        		for(var i=0; i<rtn.length; i++){
        			var colArray = rtn[i];
        			objId  += ","+ colArray[0];
        		}
        		this.div_form.form.edt_lotNo.set_value(objId.substr(1));

        	} else if(sPopupId == "EMAIL") {
        		this.opener.fn_search();
        		this.close();
        	}else if(sPopupId == "FRM_ITEM"){
        		this.div_form.form.edt_item.set_value(rtn[1]);
        		this.div_form.form.edt_item_id.set_value(rtn[0]);
        		this.div_form.form.edt_item_cd.set_value(rtn[2]);

        		if (!this.nfn_isNull(rtn[0]))
        		{
        			this.ds_customer.clearData();
        			var sSvcID 			= "selectProductCustomerInfo";
        			var sController 	= "/qam02800/selectProductCustomerInfo.do";
        			var sInDatasets 	= "";
        			var sOutDatasets 	= "ds_customer=output";
        			var sArgs 			= "";
        				sArgs 			+= this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        				sArgs 			+= this.gfn_setParam("PLANTID",      this.gf_getSiteType());
        				sArgs 			+= this.gfn_setParam("ITEMID",       this.div_form.form.edt_item_id.value);
        				sArgs 			+= this.gfn_setParam("ITEMVERSION",  this.div_form.form.edt_item_cd.value);

        			this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false, "");

        			if (this.ds_customer.rowcount > 0){
        				this.div_form.form.edt_customer.set_value(this.ds_customer.getColumn(0, "CUSTOMERNAME"));
        				this.div_form.form.edt_customer_id.set_value(this.ds_customer.getColumn(0, "CUSTOMERID"));
        			}
        		}else{
        			this.div_form.form.edt_customer.set_value("");
        			this.div_form.form.edt_customer_id.set_value("");
        		}
        	}
        };

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 신규 데이터 초기화 함수
         */
        this.fn_newData = function()
        {
        	var nRow = this.ds_save.addRow();
        	var dateType = "yyyy-MM-dd HH:mm:ss";

        	this.div_form.form.div_requestdate_from.form.calStart.set_value(this.gfn_todayTime());
        	this.div_form.form.div_requestdate_from.form.calStart.set_editformat(dateType);
        	this.div_form.form.div_requestdate_from.form.calStart.set_dateformat(dateType);

        	this.ds_save.setColumn(nRow, "REQUESTDATE", this.gfn_todayTime());
        	this.ds_save.setColumn(nRow, "ITEMUSEYN", "N");
        	this.ds_save.setColumn(nRow, "REQUESTDEPARTMENTNAME", this.gf_getDeptNm());
        	this.ds_save.setColumn(nRow, "REQUESTDEPARTMENT", this.gf_getDeptCd());
        	this.ds_save.setColumn(nRow, "CHANGEPOINTTYPE", "ACN");
        	this.ds_save.setColumn(nRow, "VALIDSTATE", "Valid");
        	this.ds_save.setColumn(nRow, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_save.setColumn(nRow, "PLANTID", this.gf_getSiteType());

        	this.fn_changeUseItem("N");
        	this.fn_selectRCKey();
        };

        /*
         * 기존 R/C 조회
         * ds_save : 신청내용 / ds_reviewList : 검토내용 / ds_approvalList : 결재내용
         */
        this.fn_selectDetailData = function()
        {
        	this.ds_save.clearData();
        	this.ds_approvalList.clearData();
        	this.ds_reviewList.clearData();

        	var sSvcID 			= "selectDetailData";
        	var sController 	= "/qam02800/selectDetailData.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_save=output1 ds_reviewList=output2 ds_approvalList=output3";
        	var sArgs 			= "";
        		sArgs 			+= this.gfn_setParam("CHANGEPOINTNO", 		this.changePointNo);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 초기 R/C 조회 (sequence, 결재정보)
         */
        this.fn_selectRCKey = function ()
        {
        	this.ds_seq.clearData();
        	var sSvcID 			= "selectRCKey";
        	var sController 	= "/qam02800/selectRCKey.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_seq=output1 ds_approvalList=output2";
        	var sArgs 			= "";
        		sArgs 			+= this.gfn_setParam("USERID", this.fv_userid);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 첨부파일 조회
         */
        this.fn_searchAttach = function()
        {
        	var divFile = this.div_file;
        	divFile.form.jobSysCd 		= "QAM";
        	divFile.form.atchTyCd 		= "EMAIL";
        	divFile.form.tableName 		= "QAM_CHANGEPOINT";
        	divFile.form.subDir  		= "ChangePoint";
        	divFile.form.atchSrcKey  	= this.changePointNo;
        	divFile.form.fn_search();
        };

        /*
         * 등급조회 (radio group 세팅)
         */
        this.fn_selectGrade = function ()
        {
        	// 절차구분이 있다면 요청의 결재상태를 확인한다.
        	this.ds_grade.clearData();
        	var sSvcID 			= "selectEcmLookupValuesVList2ds_CGrade";
        	var sController 	= "/cmsa00300/selectEcmLookupValuesVList2.do";
        	var sInDatasets   	= "";
        	var sOutDatasets  	= "ds_grade=output";
        	var sArgs 		  	= "";
        		sArgs 			+= this.gfn_setParam("LOOKUP_TYPE", "GradeClass");
        		sArgs 			+= this.gfn_setParam("CMB_TYPE", "");
        		sArgs 			+= this.gfn_setParam("ENABLED_FLAG", "Y");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, false);
        };

        /*
         * 결재번호의 요청에 대해서 결재상태가 회수인지 조사
         */
        this.fn_selectIsDraft = function ()
        {
        	// 절차구분이 있다면 요청의 결재상태를 확인한다.
        	this.ds_output.clearData();
        	var sSvcID 			= "selectIsDraft";
        	var sController 	= "/qam02800/selectIsDraft.do";
        	var sInDatasets   	= "";
        	var sOutDatasets  	= "ds_output=output";
        	var sArgs 		  	= "";
        		sArgs 			+= this.gfn_setParam("APPROVALNO", this.changePointNo);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack");
        };

        /*
         * 이번 차례의 결재자가 누구인지 조사
         */
        this.fn_selectChangePointThisTimeApprovalUser = function ()
        {
        	// 절차구분이 있다면 요청의 결재상태를 확인한다.
        	this.ds_output.clearData();
        	var sSvcID 			= "selectChangePointThisTimeApprovalUser";
        	var sController 	= "/qam02800/selectChangePointThisTimeApprovalUser.do";
        	var sInDatasets   	= "";
        	var sOutDatasets  	= "ds_output=output";
        	var sArgs 		  	= "";
        		sArgs 			+= this.gfn_setParam("APPROVALNO", this.changePointNo);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 다중값 바인딩 함수
         */
        this.fn_bindData = function ()
        {
        	var segmentType 		= this.ds_save.getColumn(0, "SEGMENTTYPE");
        	var changeType 			= this.ds_save.getColumn(0, "CHANGETYPE");
        	var applicationType 	= this.ds_save.getColumn(0, "APPLICATIONTYPE");
        	var itemUseYn		 	= this.ds_save.getColumn(0, "ITEMUSEYN");

        	var segmentTypeList 	= segmentType.split(",");
        	var changeTypeList		= changeType.split(",");
        	var applicationTypeList = applicationType.split(",");

        	this.fn_changeUseItem(itemUseYn);

        	//공정유형
        	for(var i=0; i<segmentTypeList.length;i++){
        		for(var j=1; j<5;j++){
        			var obj = eval("this.div_form.form.chk_segmentType"+j);
        			var tValue = obj.truevalue;
        			if(tValue==segmentTypeList[i]){
        				obj.set_value(tValue);
        			}
        		}
        	}

        	//변경유형
        	for(var i=0; i<changeTypeList.length;i++){
        		for(var j=1; j<6;j++){
        			var obj = eval("this.div_form.form.chk_changeType"+j);
        			var tValue = obj.truevalue;
        			if(tValue==changeTypeList[i]){
        				obj.set_value(tValue);
        			}
        		}
        	}

        	//적용구분
        	for(var i=0; i<applicationTypeList.length;i++){
        		for(var j=1; j<3;j++){
        			var obj = eval("this.div_form.form.chk_applicationType"+j);
        			var tValue = obj.truevalue;
        			if(tValue==applicationTypeList[i]){
        				obj.set_value(tValue);
        			}
        		}
        	}
        };

        /*
         * 상황에 따라 화면을 ReadOnly처리한다. (AS-IS : SetReadOnly)
         */
        this.fn_setReadOnly = function ()
        {
        	var approvalCnt = this.ds_approvalList.rowcount;

        	// 기존 데이터가 존재할 경우
        	if (this.fv_type == "Old")
        	{
        		// 기존 데이터가 있지만 결재를 등록하지 않았다면 넘어간다.
        		if (approvalCnt == 0)
        		{
        			return;

        		} else {
        			// 요청에 대한 결재상태가 회수인지 조사
        			this.fn_selectIsDraft();

        			// 이번 차례의 결재자가 누구인지 조사
        			this.fn_selectChangePointThisTimeApprovalUser();
        		}
        	}
        };

        /*
         * 품목팝업 활성화 또는 비활성화
         */
        this.fn_changeUseItem = function (value)
        {
        	//품목 사용여부 변경시
        	if(value == "Y") {
        		this.div_form.form.edt_item.set_enable(true);
        		this.div_form.form.btn_item.set_enable(true);
        	} else {
        		this.div_form.form.edt_item.set_enable(false);
        		this.div_form.form.btn_item.set_enable(false);
        		this.div_form.form.edt_item.set_value(null);
        		this.div_form.form.edt_item_id.set_value(null);
        	}
        };

        /*
         * 유효성 검증
         */
        this.fn_checkValidation = function()
        {
        	var itemUseYn		 	= this.ds_save.getColumn(0, "ITEMUSEYN");
        	var itemId				= this.ds_save.getColumn(0, "PRODUCTDEFID");

        	var objDs = this.ds_save, strColumn;

        	// 품목사용여부가 Y인 경우 품목필수입력
        	strColumn = "PRODUCTDEFNAME";
        	if(itemUseYn=="Y" && this.nfn_isNull(itemId)){
        		this.gfn_Message("RequiredProductDefId",null , "warning","ok");
        		this.qamfn_setEditFocus(this.div_form, objDs, strColumn);
        		return false;
        	}

        	// 공정유형, 변경유형, 적용구분은 각각 최소 1개 필수입력
        	strColumn = "SEGMENTTYPE|CHANGETYPE|APPLICATIONTYPE"; //공정유형,변경유형, 적용구분
        	var validation = this.qamfn_checkEmptyField(objDs, strColumn);
        	if(!validation.rtn) {
        		this.gfn_Message("ChangePointRequiredCheck", null, "warning", "ok"); //공정유형, 변경유형, 적용구분은 각각 최소 1개의 값을 체크해야합니다.
        		return false;
        	}

        	strColumn = "SUBJECT:CHANGEPOINTTITLE"; //변경점제목
        	validation = this.qamfn_checkEmptyField(objDs, strColumn);
        	if(!validation.rtn) {
        		this.qamfn_setEditFocus(this.div_form, objDs, validation.column);
        		this.gfn_Message("NoSelectedMsg", validation.msgTxt, "warning", "ok"); //선택된 {0}(이)가 없습니다. 먼저 선택하세요.
        		return false;
        	}

        	strColumn = "REASONCOMMENTS:CHANGEREASON|BEFORECOMMENTS:BEFORECHANGE|AFTERCOMMENTS:AFTERCHANGE"; //변경사유, 변경전, 변경후는 필수입력
        	validation = this.qamfn_checkEmptyField(objDs, strColumn);
        	if(!validation.rtn) {

        		this.qamfn_setEditFocus(this.div_changeContent, objDs, validation.column);
        		this.gfn_Message("NoSelectedMsg", validation.msgTxt, "warning", "ok"); //선택된 {0}(이)가 없습니다. 먼저 선택하세요.
        		return false;
        	}
        	return true;
        };

        /*
         * 기능 : 유효성 검증 (검토/승인)
         */
        this.fn_checkValidationReview = function()
        {
        	var validation = {rtn: true, msg: ""};

        	var objDs = this.ds_reviewList, cnt = objDs.rowcount;
        	for(var i = 0; i < cnt; i++) {
        		if(this.nfn_isNull(objDs.getColumn(i, "USERNAME"))) {
        			validation.rtn = false;
        			validation.msg = "UserMissingForReviewAndApproval";//검토/승인내용에 사용자가 누락되었습니다.
        			return validation;
        		}
        	}
        	return validation;
        };

        /*
         * 체크박스의 체크유무에 따른 Value값을 구분자 ,로 하여 string형태로 만들어준다.
         */
        this.fn_chkValue = function(type){
        	var dsObj = this.ds_save;
        	var dsCol = "", chkVal = [], chkText = [];

        	//공정유형
        	if(type=="Segment"){
        		dsCol = "SEGMENTTYPE";
        		for(var j=1; j<5;j++){
        			var obj = eval("this.div_form.form.chk_segmentType"+j);
        			if(obj.value){
        				chkVal.push(obj.truevalue);
        				chkText.push(obj.text);
        			}
        		}
        	}

        	//변경유형
        	if(type=="ChangeType"){
        		dsCol = "CHANGETYPE";
        		for(var j=1; j<6;j++){
        			var obj = eval("this.div_form.form.chk_changeType"+j);
        			if(obj.value){
        				chkVal.push(obj.truevalue);
        				chkText.push(obj.text);
        			}
        		}
        	}

        	//적용구분
        	if(type=="ApplicationType"){
        		dsCol = "APPLICATIONTYPE";
        		for(var j=1; j<3;j++){
        			var obj = eval("this.div_form.form.chk_applicationType"+j);
        			if(obj.value){
        				chkVal.push(obj.truevalue);
        				chkText.push(obj.text);
        			}
        		}
        	}
        	dsObj.setColumn(0, dsCol, chkVal.join(","));
        	dsObj.setColumn(0, dsCol + "NAME", chkText.join(","));
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        // 닫기
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        // 품목사용여부 변경 이벤트 > 품목사용여부 Y일때 품목팝업 활성화, N일때 비활성화
        this.div_form_cbo_useItem_onitemchanged = function(obj,e)
        {
        	if(e.prevalue != e.postvalue){
        		this.fn_changeUseItem(e.postvalue);
        	}
        };

        // 버튼 클릭 이벤트 (없는 내용은 lib_	qam)
        this.div_form_btn_selectLot_onclick = function(obj,e)
        {
        	this.fn_openPop("SELECT_LOT",null); //SELECT LOT 조회
        };

        this.div_form_btn_lotNo_onclick = function(obj,e)
        {
        	this.fn_openPop("FRM_LOT","P00250"); //LOT 조회
        };

        this.div_form_btn_customer_onclick = function(obj,e)
        {
        	this.fn_openPop("FRM_CUSTOMER","P00042"); //고객사 조회
        };

        this.div_form_btn_item_onclick = function(obj,e)
        {
        	this.fn_openPop("FRM_ITEM","P00236"); //품목정보
        };


        // 에디트 keydown 이벤트 (없는 내용은 lib_qam)
        this.div_form_edt_selectLot_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.div_form_btn_selectLot_onclick(); //SELECT LOT 조회
        	}
        };

        this.div_form_edt_lotNo_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.div_form_btn_lotNo_onclick(); //LOT 조회
        	}
        };

        this.div_form_edt_customer_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.div_form_btn_customer_onclick(); //고객사 조회
        	}
        };

        this.div_form_edt_item_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.div_form_btn_item_onclick(); //품목정보
        	}
        };

        // 공정유형 checkbox 변경 이벤트
        this.div_form_chk_segmentType1_onchanged = function(obj,e)
        {
        	this.fn_chkValue("Segment");
        };

        // 변경유형 checkbox 변경 이벤트
        this.div_form_chk_changeType1_onchanged = function(obj,e)
        {
        	this.fn_chkValue("ChangeType");
        };

        // 적용구분 checkbox 변경 이벤트
        this.div_form_chk_applicationType1_onchanged = function(obj,e)
        {
        	this.fn_chkValue("ApplicationType");
        };

        /*
         * 이벤트 : 품목 초기화
         */
        this.fn_editBtnClear = function()
        {
        	this.div_form.form.edt_item.set_value("");
        	this.div_form.form.edt_item_id.set_value("");
        	this.div_form.form.edt_item_cd.set_value("");
        	this.div_form.form.edt_customer.set_value("");
        	this.div_form.form.edt_customer_id.set_value("");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_form.form.chk_segmentType1.addEventHandler("onchanged",this.div_form_chk_segmentType1_onchanged,this);
            this.div_form.form.chk_segmentType2.addEventHandler("onchanged",this.div_form_chk_segmentType1_onchanged,this);
            this.div_form.form.chk_segmentType3.addEventHandler("onchanged",this.div_form_chk_segmentType1_onchanged,this);
            this.div_form.form.chk_segmentType4.addEventHandler("onchanged",this.div_form_chk_segmentType1_onchanged,this);
            this.div_form.form.chk_changeType1.addEventHandler("onchanged",this.div_form_chk_changeType1_onchanged,this);
            this.div_form.form.chk_changeType2.addEventHandler("onchanged",this.div_form_chk_changeType1_onchanged,this);
            this.div_form.form.chk_changeType3.addEventHandler("onchanged",this.div_form_chk_changeType1_onchanged,this);
            this.div_form.form.chk_changeType4.addEventHandler("onchanged",this.div_form_chk_changeType1_onchanged,this);
            this.div_form.form.chk_changeType5.addEventHandler("onchanged",this.div_form_chk_changeType1_onchanged,this);
            this.div_form.form.chk_applicationType1.addEventHandler("onchanged",this.div_form_chk_applicationType1_onchanged,this);
            this.div_form.form.chk_applicationType2.addEventHandler("onchanged",this.div_form_chk_applicationType1_onchanged,this);
            this.div_form.form.btn_item.addEventHandler("onclick",this.div_form_btn_item_onclick,this);
            this.div_form.form.edt_item.addEventHandler("onkeydown",this.div_form_edt_item_onkeydown,this);
            this.div_form.form.cbo_useItem.addEventHandler("onitemchanged",this.div_form_cbo_useItem_onitemchanged,this);
            this.div_form.form.btn_lotNo.addEventHandler("onclick",this.div_form_btn_lotNo_onclick,this);
            this.div_form.form.edt_lotNo.addEventHandler("onkeydown",this.div_form_edt_lotNo_onkeydown,this);
            this.div_form.form.edt_selectLot.addEventHandler("onkeydown",this.div_form_edt_selectLot_onkeydown,this);
            this.div_form.form.btn_segment.addEventHandler("onclick",this.qamfn_callOpenPopButtonEvent,this);
            this.div_form.form.edt_segment.addEventHandler("onkeydown",this.qamfn_callOpenPopEditEvent,this);
            this.div_form.form.btn_customer.addEventHandler("onclick",this.div_form_btn_customer_onclick,this);
            this.div_form.form.edt_customer.addEventHandler("onkeydown",this.div_form_edt_customer_onkeydown,this);
            this.div_form.form.edt_item_id.addEventHandler("onchanged",this.div_form_edt_item_id_canchange,this);
            this.div_form.form.btn_selectLot.addEventHandler("onclick",this.div_form_btn_selectLot_onclick,this);
            this.btn_grdDel.addEventHandler("onclick",this.btn_grdDel_onclick,this);
            this.btn_grdAdd.addEventHandler("onclick",this.btn_grdAdd_onclick,this);
            this.btn_x_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("QAM02800P1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
