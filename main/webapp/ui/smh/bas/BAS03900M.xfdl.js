(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS03900M");
            this.set_titletext("불량코드등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectcoderelList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"JOINCODE\" type=\"STRING\" size=\"256\"/><Column id=\"JOINNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTECLASS\" type=\"STRING\" size=\"256\"/><Column id=\"DETAILCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"DECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CONFIRMSITE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectcodeList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME_KR\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME_US\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME_CN\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME_VN\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"4000\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CONFIRMSITE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"DICTIONARYID\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qcsegmentList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"QCSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTNAME_KR\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTNAME_US\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTNAME_CN\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTNAME_VN\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qcsegmentrelList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"QCSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTPROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTPROCESSSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"3",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"0","15","300","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","0","15","300",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_validState","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("유효상태");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("VALIDSTATE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_validState","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,ValidState,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03",null,"0","45","10","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_defectcode","126","538","140","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_visible("false");
            obj.set_tooltiptext("불량유형코드(HIDDEN)");
            obj.set_text("불량유형코드(HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_qcsegmentId","126","568","140","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_visible("false");
            obj.set_tooltiptext("품질공정코드 (HIDDEN)");
            obj.set_text("품질공정코드 (HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_defectcode","1","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("불량유형");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("DefectcodeName");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_qcsegmentName","1","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("품질공정");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("QCSEGMENT");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","14","100","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","170","100","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_qcsegmentName","109","60",null,"20","36",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_qcsegmentName",null,"60","22","20","14",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_defectcodeName",null,"35","22","20","14",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_finder");
            obj.set_text("");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_defectcodeName","109","35",null,"20","36",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","281","34",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"1","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_formscrollbarsize("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","112","-63","101","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("서브타이틀");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tab","0","0",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab);
            obj.set_text("불량코드");
            obj.set_tooltiptext("DEFECTCODE");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Grid("grd_defectcoderelList","0","35",null,null,"0","0%",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_defectcoderelList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"95\"/><Column size=\"150\"/><Column size=\"75\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"110\"/><Column size=\"75\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell tooltiptext=\"DEFECTCODE\" text=\"불량 코드\"/><Cell col=\"1\" tooltiptext=\"DEFECTCODENAME\" text=\"불량명\"/><Cell col=\"2\" tooltiptext=\"QCSEGMENTID\" text=\"품질공정코드\" cssclass=\"cell_point\"/><Cell col=\"3\" tooltiptext=\"QCSEGMENTNAME\" text=\"품질공정명\"/><Cell col=\"4\" tooltiptext=\"DEFECTCODETYPE\" text=\"불량유형\" cssclass=\"cell_point\"/><Cell col=\"5\" tooltiptext=\"DEFECTCODETYPENAME\" text=\"불량유형명\"/><Cell col=\"6\" tooltiptext=\"ATTRIBUTECLASS\" text=\"속성분류\" cssclass=\"cell_point\"/><Cell col=\"7\" tooltiptext=\"VENDORID\" text=\"상세분류\" cssclass=\"cell_point\"/><Cell col=\"8\" text=\"SITE확정여부\" tooltiptext=\"CONFIRMSITE\"/><Cell col=\"9\" tooltiptext=\"VENDORNAME\" text=\"판정등급\" cssclass=\"cell_point\"/><Cell col=\"10\" tooltiptext=\"VALIDSTATE\" text=\"유효상태\" cssclass=\"cell_point\"/><Cell col=\"11\" tooltiptext=\"CREATOR\" text=\"생성자\"/><Cell col=\"12\" tooltiptext=\"CREATEDTIME\" text=\"생성일\"/><Cell col=\"13\" text=\"수정자\" tooltiptext=\"MODIFIER\"/><Cell col=\"14\" text=\"수정일\" tooltiptext=\"MODIFIEDTIME\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"bind:JOINCODE\" tooltiptext=\"DEFECTCODE\"/><Cell col=\"1\" text=\"bind:JOINNAME\" edittype=\"none\" displaytype=\"normal\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:QCSEGMENTID\" edittype=\"none\" displaytype=\"normal\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"expr:dataset.getRowType(currow) ==2 ? &apos;show&apos;:&apos;hide&apos;\" expandsize=\"24\" cssclass=\"expr:dataset.getRowType(currow) ==2 ? &apos;point&apos;:&apos;&apos;\"/><Cell col=\"3\" text=\"bind:QCSEGMENTNAME\" edittype=\"none\" displaytype=\"normal\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:DEFECTCODE\" edittype=\"none\" displaytype=\"normal\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"expr:dataset.getRowType(currow) ==2 ? &apos;show&apos;:&apos;hide&apos;\" expandsize=\"24\" cssclass=\"expr:dataset.getRowType(currow) ==2 ? &apos;point&apos;:&apos;&apos;\"/><Cell col=\"5\" text=\"bind:DEFECTCODENAME\" expandshow=\"hide\" expandsize=\"24\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:ATTRIBUTECLASS\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,DefectAttributeClass,,Y,Y\" cssclass=\"point\"/><Cell col=\"7\" text=\"bind:DETAILCLASS\" expandshow=\"hide\" expandsize=\"24\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,DefectDetailClass,NAN,Y,Y\" cssclass=\"point\"/><Cell col=\"8\" text=\"bind:CONFIRMSITE\" combocodecol=\"C,YesNo,,Y,Y\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"9\" text=\"bind:DECISIONDEGREE\" combocodecol=\"C,DecisionDegree,,Y,Y\" displaytype=\"combotext\" edittype=\"combo\" tooltiptext=\"DECISIONDEGREE\" cssclass=\"point\"/><Cell col=\"10\" text=\"bind:VALIDSTATE\" combocodecol=\"C,ValidState,,Y,Y\" displaytype=\"combotext\" edittype=\"combo\" cssclass=\"point\"/><Cell col=\"11\" text=\"bind:CREATOR\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"12\" text=\"bind:CREATEDTIME\" displaytype=\"date\" edittype=\"none\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"13\" text=\"bind:MODIFIER\"/><Cell col=\"14\" displaytype=\"date\" edittype=\"none\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" text=\"bind:MODIFIEDTIME\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","0","0","165","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("불량코드 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("DEFECTCODELIST");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_defectcoderelList","sta_subTitle:17","0","150","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_defectcoderelList",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_addRowDefectcoderel",null,"6","29","24","btn_xlDn_grd_defectcoderelList:0",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab);
            obj.set_text("불량유형");
            obj.set_tooltiptext("DEFECTCODETYPE");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Grid("grd_defectcodeList","0","35",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_defectcodeList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"80\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" tooltiptext=\"DEFECTCODETYPE\" text=\"불량유형코드\" cssclass=\"cell_point\"/><Cell col=\"2\" tooltiptext=\"DEFECTCODETYPENAMEKR\" text=\"불량유형명(K)\"/><Cell col=\"3\" tooltiptext=\"DEFECTCODETYPENAMEUS\" text=\"불량유형명(E)\"/><Cell col=\"4\" tooltiptext=\"DEFECTCODETYPENAMECN\" text=\"불량유형명(C)\"/><Cell col=\"5\" tooltiptext=\"DEFECTCODETYPENAMEVN\" text=\"불량유형명(V)\"/><Cell col=\"6\" tooltiptext=\"VALIDSTATE\" text=\"유효상태\" cssclass=\"cell_point\"/><Cell col=\"7\" tooltiptext=\"CREATOR\" text=\"생성자\"/><Cell col=\"8\" tooltiptext=\"CREATEDTIME\" text=\"생성일\"/><Cell col=\"9\" tooltiptext=\"MODIFIER\" text=\"수정자\"/><Cell col=\"10\" text=\"수정일\" tooltiptext=\"MODIFIEDTIME\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"expr:dataset.getRowType(currow) ==2 ? &apos;text&apos;:&apos;none&apos;\" text=\"bind:DEFECTCODE\" tooltiptext=\"DEFECTCODE\" editinputtype=\"number\" editmaxlength=\"3\" maskeditmaskchar=\"_\"/><Cell col=\"2\" text=\"bind:DEFECTCODENAME_KR\" edittype=\"text\" displaytype=\"text\" textAlign=\"left\" editmaxlength=\"500\"/><Cell col=\"3\" text=\"bind:DEFECTCODENAME_US\" edittype=\"text\" displaytype=\"text\" textAlign=\"left\" editmaxlength=\"500\"/><Cell col=\"4\" text=\"bind:DEFECTCODENAME_CN\" edittype=\"text\" displaytype=\"text\" textAlign=\"left\" editmaxlength=\"500\"/><Cell col=\"5\" text=\"bind:DEFECTCODENAME_VN\" edittype=\"text\" displaytype=\"text\" textAlign=\"left\" editmaxlength=\"500\"/><Cell col=\"6\" text=\"bind:VALIDSTATE\" combocodecol=\"C,ValidState,,Y,Y\" displaytype=\"combotext\" edittype=\"combo\" cssclass=\"point\"/><Cell col=\"7\" text=\"bind:CREATOR\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"8\" text=\"bind:CREATEDTIME\" displaytype=\"date\" edittype=\"none\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"9\" text=\"bind:MODIFIER\"/><Cell col=\"10\" text=\"bind:MODIFIEDTIME\" displaytype=\"date\" edittype=\"none\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","0","0","165","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("불량유형 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("DEFECTCODETYPELIST");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_areaList",null,null,"29","24","0","grd_defectcodeList:0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_defectcodeList","sta_subTitle:17","0","200","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_copyRowDefectcode",null,null,"29","24","btn_xlDn_grd_areaList:0","grd_defectcodeList:0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdCopy");
            obj.set_tooltiptext("GridCopyRow");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_addRowDefectcode",null,null,"29","24","btn_copyRowDefectcode:0","grd_defectcodeList:0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.div_work.form.tab);
            obj.set_text("품질공정");
            obj.set_tooltiptext("QCSEGMENT");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","0","0","165","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_text("품질공정 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("QCSEGMENTLIST");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Grid("grd_qcsegmentList","0","35",null,null,"0","52.25%",null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qcsegmentList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell tooltiptext=\"PROCESSSEGID\" text=\"품질공정코드\" cssclass=\"cell_point\"/><Cell col=\"1\" tooltiptext=\"PROCESSSEGNAMEKR\" text=\"품질공정명(K)\"/><Cell col=\"2\" tooltiptext=\"PROCESSSEGNAMEUS\" text=\"품질공정명(E)\"/><Cell col=\"3\" tooltiptext=\"PROCESSSEGNAMECN\" text=\"품질공정명(C)\"/><Cell col=\"4\" tooltiptext=\"PROCESSSEGNAMEVN\" text=\"품질공정명(V)\"/><Cell col=\"5\" tooltiptext=\"RECEIPTFLAG\" text=\"입고공정\" cssclass=\"cell_point\"/><Cell col=\"6\" tooltiptext=\"VALIDSTATE\" text=\"유효상태\" cssclass=\"cell_point\"/><Cell col=\"7\" text=\"생성자\" tooltiptext=\"CREATOR\"/><Cell col=\"8\" tooltiptext=\"CREATEDTIME\" text=\"생성일\"/><Cell col=\"9\" text=\"수정자\" tooltiptext=\"MODIFIER\"/><Cell col=\"10\" tooltiptext=\"MODIFIEDTIME\" text=\"수정일\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"expr:dataset.getRowType(currow) ==2 ? &apos;text&apos;:&apos;none&apos;\" text=\"bind:QCSEGMENTID\" cssclass=\"expr:dataset.getRowType(currow) ==2 ? &apos;point&apos;:&apos;&apos;\"/><Cell col=\"1\" text=\"bind:QCSEGMENTNAME_KR\" edittype=\"text\" displaytype=\"text\" textAlign=\"left\" editmaxlength=\"500\"/><Cell col=\"2\" text=\"bind:QCSEGMENTNAME_US\" edittype=\"text\" displaytype=\"text\" textAlign=\"left\" editmaxlength=\"500\"/><Cell col=\"3\" text=\"bind:QCSEGMENTNAME_CN\" edittype=\"text\" displaytype=\"text\" textAlign=\"left\" editmaxlength=\"500\"/><Cell col=\"4\" text=\"bind:QCSEGMENTNAME_VN\" edittype=\"text\" displaytype=\"text\" textAlign=\"left\" editmaxlength=\"500\"/><Cell col=\"5\" text=\"bind:RECEIPTFLAG\" combocodecol=\"C,YesNo,,Y,Y\" displaytype=\"combotext\" edittype=\"combo\" cssclass=\"point\"/><Cell col=\"6\" text=\"bind:VALIDSTATE\" combocodecol=\"C,ValidState,,Y,Y\" displaytype=\"combotext\" edittype=\"combo\" cssclass=\"point\"/><Cell col=\"7\" text=\"bind:CREATOR\"/><Cell col=\"8\" text=\"bind:CREATEDTIME\" displaytype=\"date\" edittype=\"none\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"9\" text=\"bind:MODIFIER\"/><Cell col=\"10\" text=\"bind:MODIFIEDTIME\" displaytype=\"date\" edittype=\"none\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_subTitle01","0","grd_qcsegmentList:2","165","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_taborder("7");
            obj.set_text("중공정 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MIDDLEPROCESSSEGMENTCLASSLIST");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_qcsegmentrelList","sta_subTitle01:17","grd_qcsegmentList:2","200","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Grid("grd_qcsegmentrelList","0","sta_cnt_ds_qcsegmentrelList:0",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_taborder("6");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qcsegmentrelList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell tooltiptext=\"MIDDLEPROCESSSEGMENTCLASSID\" text=\"중공정ID\" cssclass=\"cell_point\"/><Cell col=\"1\" text=\"중공정명\" tooltiptext=\"MIDDLEPROCESSSEGMENTCLASSNAME\"/><Cell col=\"2\" text=\"대공정명\" tooltiptext=\"TOPPROCESSSEGMENTCLASSNAME\"/><Cell col=\"3\" tooltiptext=\"VALIDSTATE\" text=\"유효상태\" cssclass=\"cell_point\"/><Cell col=\"4\" text=\"생성자\" tooltiptext=\"CREATOR\"/><Cell col=\"5\" tooltiptext=\"CREATEDTIME\" text=\"생성일\"/><Cell col=\"6\" text=\"수정자\" tooltiptext=\"MODIFIER\"/><Cell col=\"7\" tooltiptext=\"MODIFIEDTIME\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:PROCESSSEGMENTCLASSID\" edittype=\"none\" displaytype=\"normal\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"expr:dataset.getRowType(currow) ==2 ? &apos;show&apos;:&apos;hide&apos;\" expandsize=\"24\" cssclass=\"expr:dataset.getRowType(currow) ==2 ? &apos;point&apos;:&apos;&apos;\"/><Cell col=\"1\" text=\"bind:PROCESSSEGMENTCLASSNAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:PARENTPROCESSSEGMENTCLASSNAME\" expandshow=\"hide\" expandsize=\"24\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:VALIDSTATE\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,ValidState,,Y,Y\" cssclass=\"point\"/><Cell col=\"4\" text=\"bind:CREATOR\"/><Cell col=\"5\" text=\"bind:CREATEDTIME\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"6\" text=\"bind:MODIFIER\"/><Cell col=\"7\" text=\"bind:MODIFIEDTIME\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_qcsegmentList",null,null,"29","24","0","grd_qcsegmentList:0",null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_initvalueid("x");
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_qcsegmentList","sta_subTitle:17","0","200","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_addRowQcsegment",null,null,"29","24","btn_xlDn_grd_qcsegmentList:0","grd_qcsegmentList:0",null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_qcsegmentrelList",null,null,"29","24","0","grd_qcsegmentrelList:0",null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_initvalueid("x");
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_addRowQcsegmentrel",null,null,"29","24","btn_xlDn_grd_qcsegmentrelList:0","grd_qcsegmentrelList:0",null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_initvalueid("x");
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            obj.set_visible("true");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_saveQcsegment",null,null,"26","24","btn_addRowQcsegment:0","grd_qcsegmentList:0",null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_saveQcsegmentrel",null,null,"26","24","btn_addRowQcsegmentrel:0","grd_qcsegmentrelList:0",null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_initvalueid("x");
            obj.set_taborder("9");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_basMasterdataclass",null,"33","29",null,"0","tab:0",null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","3",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","29",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","26","24","55",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","110","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            obj.set_tooltiptext("MENU_PG-SD-0431");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:10","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","188","10","27",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"162","45","20","1061",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00_00_00_00_00_00",null,"137","45","5","1198",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_00_00_00",null,"137","45","5","1061",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00_00_00_00_00",null,"112","45","5","1198",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_00_00",null,"112","45","5","1061",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAS03900M.xfdl","lib::lib_bas.xjs");
        this.registerScript("BAS03900M.xfdl", function() {
        /***************************************************************************************
         * 시스템명       : IFC MES시스템
         * 업무명         : 불량코드(기준관리 - 품질기준정보)
         * 파일명         : BAS03900M.xfdl
         * 작성자         : yanghee.kim
         * 작성일         : 2021.03.04
         *
         * 설  명         : 불량코드 등록/수정
         *                  품질공정 등록/수정
         *                  불량코드와 품질공정 매핑 등록/수정
         *                  품질공정과 중공정 매핑 등록/수정
         *---------------------------------------------------------------------------------------
         * 변경일        변경자      변경내역
         *---------------------------------------------------------------------------------------
         * 2021.03.04   yanghee.kim   최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;    //기준관리 공통 라이브러리 include

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.enterpriseid = "";
        this.g_positionA; //저장 후 위치고정을 위한 전역변수(품질공정)
        this.g_positionB; //저장 후 위치고정을 위한 전역변수(중공정)

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
            this.nfn_formInit(obj);
            this.enterpriseid = this.gf_getEnterpriseId();
        	this.fn_formInit();    //최초 호출되는 초기화 함수
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        this.fn_save = function(obj,e)
        {
            var tabIdx = this.div_work.form.tab.tabindex;
            switch (tabIdx)
            {
                case 0:
                    this.fn_saveDefectcoderel();  //탭1 불량코드 조회
                break;
                case 1:
                    this.fn_saveDefectcode();     //탭2 불량유형 조회
                break;
            }
        };

        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
            var tabIdx = this.div_work.form.tab.tabindex;
            switch (tabIdx)
            {
                case 0:
                    this.fn_searchDefectcoderelList();  //탭1 불량코드 조회
                break;
                case 1:
                    this.fn_searchDefectcodeList();     //탭2 불량유형 조회
                break;
                case 2:
                    this.fn_searchQcsegmentList();      //탭3 품질공정 조회
                break;
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
                if (trId == "selectQcsegmentList")
                {
                    if (this.ds_qcsegmentList.rowcount > 0)
                    {
                        this.ds_qcsegmentList.set_rowposition(-1);

                        if (!this.nfn_isNull(this.g_positionA))
                        {
                            this.fn_findRowSetPosition(this.ds_qcsegmentList, "QCSEGMENTID", "g_positionA");
                        }
                        else
                        {
                            this.ds_qcsegmentList.set_rowposition(0);
                        }
                    }
                    else
                    {
                        this.ds_qcsegmentList.set_rowposition(-1);
                    }
                }
                else if (trId == "selectQcsegmentrelList")
                {
                    if (this.ds_qcsegmentrelList.rowcount > 0)
                    {
                        if (!this.nfn_isNull(this.g_positionB))
                        {
                            this.fn_findRowSetPosition(this.ds_qcsegmentrelList, "PROCESSSEGMENTCLASSID", "g_positionB");
                        }
                    }
                }
                else if (trId == "saveDefectcoderel")
                {
                    this.gfn_Message("SuccessSave", null, "info", "ok");
                    this.fn_searchDefectcoderelList();
                }
                else if (trId == "saveDefectcode")
                {
                    this.gfn_Message("SuccessSave", null, "info", "ok");
                    this.fn_searchDefectcodeList();
                }
                else if (trId == "saveQcsegment")
                {
                    this.gfn_Message("SuccessSave", null, "info", "ok");
                    this.fn_searchQcsegmentList();
                }
                else if (trId == "saveQcsegmentrel")
                {
                    this.gfn_Message("SuccessSave", null, "info", "ok");
                    this.fn_searchQcsegmentrelList();
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
            var opts = "width=850,height=500";

            oArg.arg_type = "A";
            oArg.arg_popupCd = popId;
            oArg.arg_popupNm = "";
            oArg.arg_paramCols = "";
            oArg.arg_paramValues = "";
            oArg.arg_searchStr = "";

            if (popupId == "SCH_DEFECTCODE")    /*조회조건-불량유형*/
            {
                oArg.arg_type = "BA";
        		oArg.arg_rtnCols   = "DEFECTCODE|DEFECTCODENAME";
        		oArg.arg_searchStr = "DEFECTCODENAME=" + this.tab_search.Tabpage1.form.edt_defectcodeName.value;
            }
            else if (popupId == "SCH_QCSEGMENT128")    /*조회조건-품질공정*/
            {
                oArg.arg_type = "BA";
        		oArg.arg_rtnCols   = "QCSEGMENTID|QCSEGMENTNAME";
        		oArg.arg_searchStr = "QCSEGMENTNAME=" + this.tab_search.Tabpage1.form.edt_qcsegmentName.value;
            }
            else if (popupId == "GRD_DEFECTCODE127")    /*그리드-불량유형*/
            {
                oArg.arg_paramCols   = "VALIDSTATE";
                oArg.arg_paramValues = "Valid";
                oArg.arg_rtnCols     = "DEFECTCODE|DEFECTCODENAME";
            }
            else if (popupId == "GRD_QCSEGMENT")    /*그리드-품질공정*/
            {
                oArg.arg_paramCols   = "VALIDSTATE";
                oArg.arg_paramValues = "Valid";
                oArg.arg_rtnCols     = "QCSEGMENTID|QCSEGMENTNAME";
            }
            else if (popupId == "GRD_PROCESSSEGMENT")    /*그리드-중공정*/
            {
                opts = "width=480,height=500";
        		var qcsegmentid = this.ds_qcsegmentList.getColumn(this.ds_qcsegmentList.rowposition, "QCSEGMENTID")
                oArg.arg_type        = "C";
                oArg.arg_paramCols   = "QCSEGMENTID|VALIDSTATE";
                oArg.arg_paramValues = qcsegmentid+"|Valid";
                oArg.arg_rtnCols     = "PROCESSSEGMENTCLASSID|PROCESSSEGMENTCLASSNAME|PARENTPROCESSSEGMENTCLASSID|PARENTPROCESSSEGMENTCLASSNAME";
            }

            this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        };

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
            var rtn = this.fv_rtnValue;
            if (this.nfn_isNull(rtn)) return;


            if (sPopupId == "SCH_DEFECTCODE")    /*조회조건-불량유형*/
            {
                this.tab_search.Tabpage1.form.edt_defectcodeName.set_value(rtn[1]);
                this.tab_search.Tabpage1.form.edt_defectcode.set_value(rtn[0]); //HIDDEN 필드
            }
            else if (sPopupId == "SCH_QCSEGMENT128")    /*조회조건-품질공정*/
            {
                this.tab_search.Tabpage1.form.edt_qcsegmentName.set_value(rtn[1]);
                this.tab_search.Tabpage1.form.edt_qcsegmentId.set_value(rtn[0]); //HIDDEN 필드
            }
            else if (sPopupId == "GRD_DEFECTCODE127")    /*그리드-불량유형*/
            {
                var nRow = this.ds_defectcoderelList.rowposition;
                this.ds_defectcoderelList.setColumn(nRow, "DEFECTCODE", rtn[0]);
                this.ds_defectcoderelList.setColumn(nRow, "DEFECTCODENAME", rtn[1]);
            }
            else if (sPopupId == "GRD_QCSEGMENT")    /*그리드-품질공정*/
            {
                var nRow = this.ds_defectcoderelList.rowposition;
                this.ds_defectcoderelList.setColumn(nRow, "QCSEGMENTID", rtn[0]);
                this.ds_defectcoderelList.setColumn(nRow, "QCSEGMENTNAME", rtn[1]);
            }
            else if (sPopupId == "GRD_PROCESSSEGMENT")    /*그리드-중공정*/
            {
                /*팝업 클릭한 row에 setting 정보를 가져와서 멀티 선택시 다른 row에도 일괄 반영*/
                var qcsegmentid     = this.ds_qcsegmentrelList.getColumn(this.ds_qcsegmentrelList.rowposition, "QCSEGMENTID");
                var validstate         = this.ds_qcsegmentrelList.getColumn(this.ds_qcsegmentrelList.rowposition, "VALIDSTATE");

                for(var i=0; i<rtn.length; i++){
                    var colArray = rtn[i];

                    if (i==0)
                    {
                        addRow = this.ds_qcsegmentrelList.rowposition;
                    }
                    else
                    {
                        addRow = this.ds_qcsegmentrelList.addRow();
                    }

                    this.ds_qcsegmentrelList.setColumn(addRow, "QCSEGMENTID", qcsegmentid);
                    this.ds_qcsegmentrelList.setColumn(addRow, "VALIDSTATE", validstate);
                    this.ds_qcsegmentrelList.setColumn(addRow, "PROCESSSEGMENTCLASSID", colArray[0]);
                    this.ds_qcsegmentrelList.setColumn(addRow, "PROCESSSEGMENTCLASSNAME", colArray[1]);
                    this.ds_qcsegmentrelList.setColumn(addRow, "PARENTPROCESSSEGMENTCLASSID", colArray[2]);
                    this.ds_qcsegmentrelList.setColumn(addRow, "PARENTPROCESSSEGMENTCLASSNAME", colArray[3]);
                }
            }
        };

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 기능 : 최초 호출되는 초기화 함수
         */
        this.fn_formInit = function ()
        {
            this.tab_search.Tabpage1.form.cbo_validState.set_value("Valid");
        };

        /*
         * 기능 : 탭1. 불량코드 조회
         */
        this.fn_searchDefectcoderelList = function ()
        {
            this.ds_defectcoderelList.clearData();

            var validState = this.tab_search.Tabpage1.form.cbo_validState.value;
            var defectcode = this.tab_search.Tabpage1.form.edt_defectcode.value;
            var qcsegmentid = this.tab_search.Tabpage1.form.edt_qcsegmentId.value;

            var sSvcID        = "selectDefectcoderelList";
            var sController   = "/bas03900/selectDefectcoderelList.do";
            var sInDatasets   = "";
            var sOutDatasets  = "ds_defectcoderelList=output";
            var sArgs         = "";
                sArgs        += this.gfn_setParam("ENTERPRISEID", this.enterpriseid);
                sArgs        += this.gfn_setParam("VALIDSTATE", validState);
                sArgs        += this.gfn_setParam("DEFECTCODE", defectcode);
                sArgs        += this.gfn_setParam("QCSEGMENTID", qcsegmentid);
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 탭1. 불량코드 추가
         */
        this.fn_addDefectcoderel = function(obj,e)
        {
            var objDataset = this.ds_defectcoderelList;
            if (objDataset == null) return;
            var row = objDataset.addRow();

            /* KEY컬럼 기본세팅 */
            objDataset.setColumn(row,"ENTERPRISEID", this.enterpriseid);
            objDataset.setColumn(row,"VALIDSTATE","Valid");    //유효여부
        };

        /*
         * 기능 : 탭1. 불량코드 저장
         */
        this.fn_saveDefectcoderel = function ()
        {
            if (!this.gfn_dsIsUpdated(this.ds_defectcoderelList))
            {
                this.gfn_Message("NoSaveData", null, "warning", "ok");
                return;
            }

            //불량코드 그리드 필수값 체크
            var component = this.div_work.form.tab.Tabpage1.form.grd_defectcoderelList;
            var strColIdList = "QCSEGMENTID,DEFECTCODE,ATTRIBUTECLASS,DETAILCLASS,DECISIONDEGREE,VALIDSTATE";
            var rtn = this.nfn_MandatoryCheckGrid(component, strColIdList);
            if (rtn == false) return;

            // -------------------------
            // 저장
            // ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
            // ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
            // -------------------------
            var sSvcID        = "saveDefectcoderel";
            var sController   = "/bas03900/saveDefectcoderel.do";
            var sInDatasets   = "INPUT=ds_defectcoderelList:U";
            var sOutDatasets  = "";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 탭2. 불량유형 조회
         */
        this.fn_searchDefectcodeList = function ()
        {
            this.ds_defectcodeList.clearData();

            var validState = this.tab_search.Tabpage1.form.cbo_validState.value;
            var defectcode = this.tab_search.Tabpage1.form.edt_defectcode.value;
            var qcsegmentid = this.tab_search.Tabpage1.form.edt_qcsegmentId.value;

            var sSvcID        = "selectDefectcodeList";
            var sController   = "/bas03900/selectDefectcodeList.do";
            var sInDatasets   = "";
            var sOutDatasets  = "ds_defectcodeList=output";
            var sArgs         = "";
                sArgs        += this.gfn_setParam("ENTERPRISEID", this.enterpriseid);
                sArgs        += this.gfn_setParam("VALIDSTATE", validState);
                sArgs        += this.gfn_setParam("DEFECTCODE", defectcode);
                sArgs        += this.gfn_setParam("QCSEGMENTID", qcsegmentid);
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 탭2. 불량유형 추가
         */
        this.fn_addDefectcode = function(obj,e)
        {
            var objDataset = this.ds_defectcodeList;
            if (objDataset == null) return;
            var row = objDataset.addRow();

            /* KEY컬럼 기본세팅 */
            objDataset.setColumn(row,"ENTERPRISEID", this.enterpriseid);
            objDataset.setColumn(row,"PLANTID", this.plantid);
            objDataset.setColumn(row,"VALIDSTATE","Valid");            //유효여부
        };

        /*
         * 기능 : 탭2. 불량유형 복사
         */
        this.fn_copyDefectcode = function(obj,e)
        {
            this.basfn_copyDataset(this.ds_defectcodeList, null, "CREATOR,MODIFIER,CREATEDTIME,MODIFIEDTIME");
        };

        /*
         * 기능 : 탭2. 불량유형 저장
         */
        this.fn_saveDefectcode = function(obj,e)
        {
            if (!this.gfn_dsIsUpdated(this.ds_defectcodeList))
            {
                this.gfn_Message("NoSaveData", null, "warning", "ok");
                return;
            }

            //불량코드 그리드 필수값 체크
            var component = this.div_work.form.tab.Tabpage2.form.grd_defectcodeList;
            var rtn = this.fn_gridValueCheck("DEFECTCODE", component);
            if (rtn == false) return;

            // -------------------------
            // 저장
            // ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
            // ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
            // -------------------------
            var sSvcID        = "saveDefectcode";
            var sController   = "/bas03900/saveDefectcode.do";
            var sInDatasets   = "INPUT=ds_defectcodeList:U";
            var sOutDatasets  = "";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 탭3. 품질공정 조회
         */
        this.fn_searchQcsegmentList = function ()
        {
            this.ds_qcsegmentList.clearData();

            var validState = this.tab_search.Tabpage1.form.cbo_validState.value;
            var defectcode = this.tab_search.Tabpage1.form.edt_defectcode.value;
            var qcsegmentid = this.tab_search.Tabpage1.form.edt_qcsegmentId.value;

            var sSvcID        = "selectQcsegmentList";
            var sController   = "/bas03900/selectQcsegmentList.do";
            var sInDatasets   = "";
            var sOutDatasets  = "ds_qcsegmentList=output";
            var sArgs         = "";
                sArgs        += this.gfn_setParam("ENTERPRISEID", this.enterpriseid);
                sArgs        += this.gfn_setParam("VALIDSTATE", validState);
                sArgs        += this.gfn_setParam("QCSEGMENTID", qcsegmentid);
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 탭3. 품질공정 추가
         */
        this.fn_addQcsegment = function(obj,e)
        {
            var objDataset = this.ds_qcsegmentList;
            if (objDataset == null) return;
            var row = objDataset.addRow();

            /* KEY컬럼 기본세팅 */
            objDataset.setColumn(row,"ENTERPRISEID", this.enterpriseid);
            objDataset.setColumn(row,"PLANTID", this.plantid);
            objDataset.setColumn(row,"VALIDSTATE","Valid");            //유효여부
        };

        /*
         * 기능 : 탭3. 품질공정 저장
         */
        this.fn_saveQcsegment = function(obj,e)
        {
            if (!this.gfn_dsIsUpdated(this.ds_qcsegmentList))
            {
                this.gfn_Message("NoSaveData", null, "warning", "ok");
                return;
            }

            //품질공정 그리드 필수값 체크
            var component = this.div_work.form.tab.Tabpage3.form.grd_qcsegmentList;
            var rtn = this.fn_gridValueCheck("QCSEGMENTID", component);
            if (rtn == false) return;

            this.g_positionA = this.ds_qcsegmentList.getColumn(this.ds_qcsegmentList.rowposition, "QCSEGMENTID");

            // -------------------------
            // 저장
            // ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
            // ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
            // -------------------------
            var sSvcID        = "saveQcsegment";
            var sController   = "/bas03900/saveQcsegment.do";
            var sInDatasets   = "INPUT=ds_qcsegmentList:U";
            var sOutDatasets  = "";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 탭3. 중공정 조회
         */
        this.fn_searchQcsegmentrelList = function (pRow)
        {
            this.ds_qcsegmentrelList.clearData();

            var qcsegmentid = this.ds_qcsegmentList.getColumn(pRow, "QCSEGMENTID");

            var sSvcID        = "selectQcsegmentrelList";
            var sController   = "/bas03900/selectQcsegmentrelList.do";
            var sInDatasets   = "";
            var sOutDatasets  = "ds_qcsegmentrelList=output";
            var sArgs         = "";
                sArgs        += this.gfn_setParam("QCSEGMENTID", qcsegmentid);
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 탭3. 중공정 추가
         */
        this.fn_addQcsegmentrel = function(obj,e)
        {
            var qcsegmentid = this.ds_qcsegmentList.getColumn(this.ds_qcsegmentList.rowposition, "QCSEGMENTID");
            if (this.nfn_isNull(qcsegmentid))
            {
        		this.gfn_Message("NotSelectResult", this.nfn_getDictionarynameUpper("QCSEGMENTLIST"), "warning", "ok"); //확인필요
                return;
            }

            var objDataset = this.ds_qcsegmentrelList;
            if (objDataset == null) return;
            var row = objDataset.addRow();

            /* KEY컬럼 기본세팅 */
            objDataset.setColumn(row,"QCSEGMENTID", qcsegmentid); //품질공정ID
            objDataset.setColumn(row,"VALIDSTATE","Valid");       //유효여부
        };

        /*
         * 기능 : 탭3. 중공정 저장
         */
        this.fn_saveQcsegmentrel = function(obj,e)
        {
            if (!this.gfn_dsIsUpdated(this.ds_qcsegmentrelList))
            {
                this.gfn_Message("NoSaveData", null, "warning", "ok");
                return;
            }

            //품질공정 그리드 필수값 체크
            var component = this.div_work.form.tab.Tabpage3.form.grd_qcsegmentrelList;
            var strColIdList = "PROCESSSEGMENTCLASSID,VALIDSTATE";
            var rtn = this.nfn_MandatoryCheckGrid(component, strColIdList);
            if (rtn == false) return;

            this.g_positionB = this.ds_qcsegmentrelList.getColumn(this.ds_qcsegmentrelList.rowposition, "PROCESSSEGMENTCLASSID");

            // -------------------------
            // 저장
            // ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
            // ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
            // -------------------------
            var sSvcID        = "saveQcsegmentrel";
            var sController   = "/bas03900/saveQcsegmentrel.do";
            var sInDatasets   = "INPUT=ds_qcsegmentrelList:U";
            var sOutDatasets  = "";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 그리드 필수값 검증
         */
        this.fn_gridValueCheck = function(pJobFlag, pComponent)
        {
            var objGrid = pComponent
            var strColIdList = "";
            var objDataSet = this.all[objGrid.binddataset];
            var blnRtn = true;

            for(var i=0; i < objDataSet.getRowCount(); i++)
            {
                if (objDataSet.getRowType(i) == 2 || objDataSet.getRowType(i) == 4)
                {
                    if (pJobFlag == "DEFECTCODE")    /*불량유형*/
                    {
                        strColIdList = "DEFECTCODE,DEFECTCODENAME_KR,DEFECTCODENAME_US,DEFECTCODENAME_CN,DEFECTCODENAME_VN,VALIDSTATE";
                    }
                    else if (pJobFlag == "QCSEGMENTID")    /*품질공정*/
                    {
                        strColIdList = "QCSEGMENTID,QCSEGMENTNAME_KR,QCSEGMENTNAME_US,QCSEGMENTNAME_CN,QCSEGMENTNAME_VN,RECEIPTFLAG,VALIDSTATE";
                    }

                    var arrColId = strColIdList.split(",");

                    for(var j=0; j<arrColId.length; j++)
                    {
                        if (this.gfn_isNull(objDataSet.getColumn(i, arrColId[j])))
                        {
                            var colId = this.nfn_GetColNum(objGrid, arrColId[j]);
                            var title = this.nfn_nvl(this.nfn_getDictionarynameUpper(arrColId[j]),objGrid.getCellProperty("head", colId, "text"))
                            this.gfn_Message("InputSomeThing",title , "warning", "ok");//alert(arrTitle[j]+"을(를) 입력 해주세요");
                            objDataSet.set_rowposition(i);
                            objGrid.setFocus();
                            objGrid.setCellPos(colId);
                            objGrid.showEditor(true);
                            blnRtn = false;
                            return false;
                        }
                    }

                    if (pJobFlag == "DEFECTCODE" || pJobFlag == "QCSEGMENTID")    /*불량유형,품질공정*/
                    {
                        var checkKey = "";
                        if (pJobFlag == "DEFECTCODE")
                        {
                            checkKey = objDataSet.getColumn(i, "DEFECTCODE");    //불량유형코드
                        }
                        else if (pJobFlag == "QCSEGMENTID")
                        {
                            checkKey = objDataSet.getColumn(i, "QCSEGMENTID");    //품질공정코드
                        }

                        //불량유형,품질공정 3자리 입력
                        if (this.nfn_GetLengB(checkKey) != 3 )
                        {
                            this.gfn_Message("CheckInputLength", new Array(pJobFlag, this.nfn_getDictionarynameUpper("NUMBERTHREEDIGITS")), "warning", "ok");
                            colId = this.nfn_GetColNum(objGrid, pJobFlag);
                            objDataSet.set_rowposition(i);
                            objGrid.setFocus();
                            objGrid.setCellPos(colId);
                            objGrid.showEditor(true);
                            blnRtn = false;
                            return false;
                        }
                    }//end if pJobFlag
                } //end if getRowType
            } //end for

             return blnRtn;
        };

        /*
         * 기능 : 조건표현식을 만족하는 첫번째 Row를 선택
         */
        this.fn_findRowSetPosition = function (pDataset, pColumId, pVariable)
        {
            var findStr = eval("this."+pVariable);
            var nRow = pDataset.findRowExpr(pColumId + "== '" + findStr + "'") ;

            if (nRow == -1)
            {
                pDataset.set_rowposition(0);
            }
            else
            {
                pDataset.set_rowposition(nRow);
            }

            var variableInitial = "this."+pVariable+"="+null;
            eval(variableInitial);
        };

        /*
         * 기능 : 조회조건 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        	this.fn_formInit();
        };
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
         /*
         * 이벤트 : 탭 클릭시
         */
        this.div_work_tab_onchanged = function(obj,e)
        {
            /*불량코드 탭일 경우만 상위 저장버튼 활성화*/
            this.div_header.form.btn_save.set_visible(true);
            this.tab_search.Tabpage1.form.btn_defectcodeName.set_enable(true);
            this.tab_search.Tabpage1.form.edt_defectcodeName.set_enable(true);
            this.tab_search.Tabpage1.form.btn_qcsegmentName.set_enable(true);
            this.tab_search.Tabpage1.form.edt_qcsegmentName.set_enable(true);

            if (e.postindex > 0)
            {
                if (e.postindex==1) /*불량유형*/
                {
                    this.tab_search.Tabpage1.form.btn_qcsegmentName.set_enable(false);
                    this.tab_search.Tabpage1.form.edt_qcsegmentName.set_enable(false);
                }
                else                /*품질공정*/
                {
                    this.div_header.form.btn_save.set_visible(false);
                    this.tab_search.Tabpage1.form.btn_defectcodeName.set_enable(false);
                    this.tab_search.Tabpage1.form.edt_defectcodeName.set_enable(false);
                }
            }
        };

        /*
         * 이벤트 : 조회조건 아이콘 버튼 클릭시
         */
        this.fn_searchPopup_click = function(obj,e)
        {
        	if (obj.name == "btn_defectcodeName")
        	{
        		this.fn_openPop("SCH_DEFECTCODE","P00127"); //불량유형 조회
        	}
            else if (obj.name == "btn_qcsegmentName")
        	{
        		this.fn_openPop("SCH_QCSEGMENT128","P00128"); //품질공정 조회
        	}
        };

        /*
         * 이벤트 : 그리드 불량코드의 불량유형, 품질공정 이미지 클릭
         */
        this.div_work_tab_Tabpage1_grd_defectcoderelList_onexpandup = function(obj,e)
        {
            if (e.row < 0) return;

            if (e.cell == obj.getBindCellIndex("body", "DEFECTCODE"))
        	{
        		this.fn_openPop("GRD_DEFECTCODE127","P00127"); //불량유형 조회
        	}
            else if (e.cell == obj.getBindCellIndex("body", "QCSEGMENTID"))
            {
                this.fn_openPop("GRD_QCSEGMENT","P00128"); //품질공정 조회
            }
        };

        /*
         * 이벤트 : 그리드 중공정의  중공정 ID 이미지 클릭
         */
        this.div_work_tab_Tabpage3_grd_qcsegmentrelList_onexpandup = function(obj,e)
        {
            if (e.row < 0) return;

            if (e.cell == obj.getBindCellIndex("body", "PROCESSSEGMENTCLASSID"))
            {
                this.fn_openPop("GRD_PROCESSSEGMENT","P00132"); //공정 조회
            }
        };

        /*
         * 이벤트 : 속성분류가 변경될 경우 하위 상세분류 가져오기
         */
        this.ds_defectcoderelList_onvaluechanged = function(obj,e)
        {
            if (e.columnid == "ATTRIBUTECLASS")
            {
                if (e.oldvalue == e.newvalue) return;

                //상세분류 초기화  - 속성분류만 변경하고 저장버튼을 클릭할 경우 반영되어
                obj.setColumn(e.row, obj.getColIndex("DETAILCLASS"), "");

                this.ds_CDefectDetailClassNAN.filter("");
                this.ds_CDefectDetailClassNAN.filter("PARENTCODEID =='"+e.newvalue+"'||PARENTCODEID == ''");
            }
        };

        /*
         * 이벤트 : 변경내역을 Dataset에 바로 반영
         */
        this.div_work_tab_Tabpage1_grd_defectcoderelList_oncloseup = function(obj,e)
        {
            this.div_work.form.tab.Tabpage2.form.grd_defectcodeList.updateToDataset();
        };

        /*
         * 이벤트 : 상세분류 클릭시 속성분류 값이 없을 경우 리스트 안보여줌
         */
        this.div_work_tab_Tabpage1_grd_defectcoderelList_ondropdown = function(obj,e)
        {
            if (e.cell = obj.getBindCellIndex("body", "DETAILCLASS"))
            {
                var currDataset = obj.getBindDataset();
                var currAttributeClass = currDataset.getColumn(e.row, "ATTRIBUTECLASS");

                if (this.nfn_isNull(currAttributeClass))
                {
                    this.ds_CDefectDetailClassNAN.filter("");
                    this.ds_CDefectDetailClassNAN.filter("PARENTCODEID == ''");
                }
        		else
        		{
                    this.ds_CDefectDetailClassNAN.filter("");
                    this.ds_CDefectDetailClassNAN.filter("PARENTCODEID == '"+ currAttributeClass + "'");
        		}
            }
        };

        /*
         * 이벤트 : 그리드 품질공정를 선택했을 때 중공정 조회
         */
        this.ds_qcsegmentList_canrowposchange = function(obj,e)
        {
            if (e.newrow < 0) return;

            var bOk = true;
            if (this.gfn_dsIsUpdated(this.ds_qcsegmentrelList)) {
                bOk = this.gfn_Message("WRITTENBEDELETE", null, "conf", "yesno");
            }

            if (bOk){
                this.fn_searchQcsegmentrelList(e.newrow);
            } else {
                return false;
            }
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.tab_search_Tabpage1_btn_search_onclick,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tabpage1.form.btn_qcsegmentName.addEventHandler("onclick",this.fn_searchPopup_click,this);
            this.tab_search.Tabpage1.form.btn_defectcodeName.addEventHandler("onclick",this.fn_searchPopup_click,this);
            this.div_work.form.tab.addEventHandler("onchanged",this.div_work_tab_onchanged,this);
            this.div_work.form.tab.Tabpage1.form.grd_defectcoderelList.addEventHandler("onexpandup",this.div_work_tab_Tabpage1_grd_defectcoderelList_onexpandup,this);
            this.div_work.form.tab.Tabpage1.form.grd_defectcoderelList.addEventHandler("oncloseup",this.div_work_tab_Tabpage1_grd_defectcoderelList_oncloseup,this);
            this.div_work.form.tab.Tabpage1.form.grd_defectcoderelList.addEventHandler("ondropdown",this.div_work_tab_Tabpage1_grd_defectcoderelList_ondropdown,this);
            this.div_work.form.tab.Tabpage1.form.btn_addRowDefectcoderel.addEventHandler("onclick",this.fn_addDefectcoderel,this);
            this.div_work.form.tab.Tabpage2.form.sta_subTitle.addEventHandler("onclick",this.div_work_tab_Tabpage2_sta_subTitle_onclick,this);
            this.div_work.form.tab.Tabpage2.form.btn_copyRowDefectcode.addEventHandler("onclick",this.fn_copyDefectcode,this);
            this.div_work.form.tab.Tabpage2.form.btn_addRowDefectcode.addEventHandler("onclick",this.fn_addDefectcode,this);
            this.div_work.form.tab.Tabpage3.form.grd_qcsegmentrelList.addEventHandler("onexpandup",this.div_work_tab_Tabpage3_grd_qcsegmentrelList_onexpandup,this);
            this.div_work.form.tab.Tabpage3.form.btn_addRowQcsegment.addEventHandler("onclick",this.fn_addQcsegment,this);
            this.div_work.form.tab.Tabpage3.form.btn_addRowQcsegmentrel.addEventHandler("onclick",this.fn_addQcsegmentrel,this);
            this.div_work.form.tab.Tabpage3.form.btn_saveQcsegment.addEventHandler("onclick",this.fn_saveQcsegment,this);
            this.div_work.form.tab.Tabpage3.form.btn_saveQcsegmentrel.addEventHandler("onclick",this.fn_saveQcsegmentrel,this);
            this.div_header.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.ds_defectcoderelList.addEventHandler("onvaluechanged",this.ds_defectcoderelList_onvaluechanged,this);
            this.ds_qcsegmentList.addEventHandler("canrowposchange",this.ds_qcsegmentList_canrowposchange,this);
        };
        this.loadIncludeScript("BAS03900M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
