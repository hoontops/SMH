(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS04700M");
            this.set_titletext("공정 검사기준정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_operationInspectionItemList", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_operationInspectionList", this);
            obj._setContents("<ColumnInfo><Column id=\"INSPECTIONDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSEGVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"TANKSIZE\" type=\"STRING\" size=\"256\"/><Column id=\"CALCULATIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ANALYSISCONST\" type=\"STRING\" size=\"256\"/><Column id=\"FOMULATYPE\" type=\"STRING\" size=\"256\"/><Column id=\"QTYCONST\" type=\"STRING\" size=\"256\"/><Column id=\"SPECCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"SPECSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"ISINSPECTIONREQUIRED\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTORDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"ISAQL\" type=\"STRING\" size=\"256\"/><Column id=\"AQLINSPECTIONLEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"AQLDEFECTLEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"AQLDECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"AQLCYCLE\" type=\"STRING\" size=\"256\"/><Column id=\"ISNCR\" type=\"STRING\" size=\"256\"/><Column id=\"NCRINSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"NCRCYCLE\" type=\"STRING\" size=\"256\"/><Column id=\"NCRDECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"NCRDEFECTRATE\" type=\"STRING\" size=\"256\"/><Column id=\"NCRLOTSIZE\" type=\"STRING\" size=\"256\"/><Column id=\"QTYUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISSPEC\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_OSPInspectionList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROCESSSEGID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSEGVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ISAQL\" type=\"STRING\" size=\"256\"/><Column id=\"AQLINSPECTIONLEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"AQLDEFECTLEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"AQLDECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"ISNCR\" type=\"STRING\" size=\"256\"/><Column id=\"NCRINSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"NCRCYCLE\" type=\"STRING\" size=\"256\"/><Column id=\"NCRLOTSIZE\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_jobFlag", this);
            obj._setContents("<ColumnInfo><Column id=\"JOBFLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","29",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","26","24","55",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_execute",null,"16","44","24","109",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_com_basic");
            obj.set_tooltiptext("Toolbar_Standard");
            obj.set_text("규격");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","3",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","144","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_text("공정 검사기준정보");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            obj.set_tooltiptext("MENU_PG-SD-0463");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
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

            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tab1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("sta_itemId","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("4");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMID");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_itemVersion","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("5");
            obj.set_text("품목 버전");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEM_VERSION");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_itemName","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("6");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMNAME");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_productdefId","108","10",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("0");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_productdefId",null,"10","22","20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","100","102","36",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","100","146","36",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"80","45","20","91",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("7");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00_00","161","106","10","27",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("8");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_productdefVersion","108","35","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("9");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_productdefName","108","60","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("10");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","162","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_formscrollbarsize("10");
            this.addChild(obj.name, obj);

            obj = new Tab("tab","0","0",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab);
            obj.set_text("계측검사");
            obj.set_tooltiptext("OPERATIONINSPECTION");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Grid("grd_operationInspectionList","30.27%","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_binddataset("ds_operationInspectionList");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"품목코드\" tooltiptext=\"ITEMID\"/><Cell col=\"2\" text=\"Rev.\" tooltiptext=\"ITEMVERSION\"/><Cell col=\"3\" text=\"품목명\" tooltiptext=\"ITEMNAME\"/><Cell col=\"4\" text=\"공정ID\" tooltiptext=\"PROCESSSEGMENTID\"/><Cell col=\"5\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"6\" text=\"검사항목명\" tooltiptext=\"INSPITEMNAME\"/><Cell col=\"7\" text=\"Spec여부\" tooltiptext=\"ISSPEC\"/><Cell col=\"8\" text=\"검사필수여부\" tooltiptext=\"ISINSPECTIONREQUIRED\"/><Cell col=\"9\" text=\"검사주기\" tooltiptext=\"INSPECTIONCYCLE\"/><Cell col=\"10\" text=\"NCR여부\" tooltiptext=\"ISNCR\"/><Cell col=\"11\" text=\"NCR판정\" tooltiptext=\"NCRDECISIONDEGREE\"/><Cell col=\"12\" text=\"LOT SIZE\" tooltiptext=\"NCRLOTSIZE\"/><Cell col=\"13\" text=\"유효상태\" cssclass=\"cell_point\" tooltiptext=\"VALIDSTATE\" displaytype=\"normal\"/><Cell col=\"14\" text=\"생성자\" tooltiptext=\"CREATOR\"/><Cell col=\"15\" text=\"생성일\" tooltiptext=\"CREATEDTIME\"/><Cell col=\"16\" text=\"수정자\" tooltiptext=\"MODIFIER\"/><Cell col=\"17\" text=\"수정일\" tooltiptext=\"MODIFIEDTIME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:ITEMID\"/><Cell col=\"2\" text=\"bind:ITEMVERSION\"/><Cell col=\"3\" text=\"bind:ITEMNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:PROCESSSEGID\"/><Cell col=\"5\" text=\"bind:PROCESSSEGNAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:INSPITEMNAME\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:ISSPEC\"/><Cell col=\"8\" text=\"bind:ISINSPECTIONREQUIRED\"/><Cell col=\"9\" text=\"bind:NCRCYCLE\" combocodecol=\"C,InspCycle,,Y,Y\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"10\" text=\"bind:ISNCR\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,YesNo,,Y,Y\"/><Cell col=\"11\" text=\"bind:NCRDECISIONDEGREE\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,DecisionDegree,,Y,Y\"/><Cell col=\"12\" text=\"bind:NCRLOTSIZE\" displaytype=\"mask\" edittype=\"mask\"/><Cell col=\"13\" text=\"bind:VALIDSTATE\" combocodecol=\"C,ValidState,,Y,Y\" displaytype=\"combotext\"/><Cell col=\"14\" text=\"bind:CREATOR\"/><Cell col=\"15\" text=\"bind:CREATEDTIME\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"16\" text=\"bind:MODIFIER\"/><Cell col=\"17\" text=\"bind:MODIFIEDTIME\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_operationInspectionItemList","0","34",null,null,"grd_operationInspectionList:10","0",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_operationInspectionItemList");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"220\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"품목코드\" tooltiptext=\"PRODUCTDEFID\"/><Cell col=\"2\" text=\"Rev\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell col=\"3\" text=\"품목명\" cssclass=\"cell_end\" tooltiptext=\"PRODUCTDEFNAME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_operationInspectionItemList","95","0","150","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_productInfo","0","0",null,"34","sta_cnt_ds_operationInspectionItemList:17",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("제품정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("PRODUCTINFO");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_qcmirrInspInfoR","30.27%","0","150","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("검사정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("QCMLRRINSPINFOR");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_operationInspectionList","sta_qcmirrInspInfoR:30","0","150","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_operationInspectionItemList",null,"6","29","24","sta_qcmirrInspInfoR:10",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_operationInspectionList",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab);
            obj.set_text("공정수입검사");
            obj.set_tooltiptext("OSPINSPECTION");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_OSPInspectionList","204","0","150","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_subTitle01","0","0",null,"34","sta_cnt_ds_OSPInspectionList:17",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("검사정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_OSPInspectionList","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_OSPInspectionList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"240\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"품질공정코드\" cssclass=\"cell_point\" tooltiptext=\"PROCESSSEGID\"/><Cell col=\"2\" text=\"품질공정명\" tooltiptext=\"PROCESSSEGNAME\"/><Cell col=\"3\" text=\"AQL여부\" tooltiptext=\"ISAQL\"/><Cell col=\"4\" text=\"검사수준\" tooltiptext=\"AQLINSPECTIONLEVEL\"/><Cell col=\"5\" text=\"불량수준\" tooltiptext=\"AQLDEFECTLEVEL\"/><Cell col=\"6\" text=\"AQL판정등급\" tooltiptext=\"AQLDECISIONDEGREE\"/><Cell col=\"7\" text=\"NCR여부\" tooltiptext=\"ISNCR\"/><Cell col=\"8\" text=\"검사수량\" tooltiptext=\"NCRINSPECTIONQTY\"/><Cell col=\"9\" text=\"검사주기\" tooltiptext=\"INSPECTIONCYCLE\"/><Cell col=\"10\" text=\"LOT SIZE\" tooltiptext=\"NCRLOTSIZE\"/><Cell col=\"11\" text=\"생성자\" tooltiptext=\"CREATOR\"/><Cell col=\"12\" text=\"생성일\" tooltiptext=\"CREATEDTIME\"/><Cell col=\"13\" text=\"수정자\" tooltiptext=\"MODIFIER\"/><Cell col=\"14\" text=\"수정일\" tooltiptext=\"MODIFIEDTIME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PROCESSSEGID\"/><Cell col=\"2\" text=\"bind:PROCESSSEGNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:ISAQL\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,YesNo,,Y,Y\"/><Cell col=\"4\" text=\"bind:AQLINSPECTIONLEVEL\" combocodecol=\"C,AQLSize,,Y,Y\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"5\" text=\"bind:AQLDEFECTLEVEL\" combocodecol=\"C,AQLRate,,Y,Y\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"6\" text=\"bind:AQLDECISIONDEGREE\" combocodecol=\"C,DecisionDegree,,Y,Y\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"7\" text=\"bind:ISNCR\" combocodecol=\"C,YesNo,,Y,Y\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"8\" text=\"bind:NCRINSPECTIONQTY\" displaytype=\"mask\" edittype=\"mask\"/><Cell col=\"9\" text=\"bind:NCRCYCLE\" combocodecol=\"C,InspCycle,,Y,Y\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"10\" text=\"bind:NCRLOTSIZE\" displaytype=\"mask\" edittype=\"mask\"/><Cell col=\"11\" text=\"bind:CREATOR\"/><Cell col=\"12\" text=\"bind:CREATEDTIME\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"13\" text=\"bind:MODIFIER\"/><Cell col=\"14\" text=\"bind:MODIFIEDTIME\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_OSPInspectionList",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAS04700M.xfdl","lib::lib_bas.xjs");
        this.registerScript("BAS04700M.xfdl", function() {
        /***************************************************************************************
         * 시스템명       : IFC MES시스템
         * 업무명         : 공정검사기준정보(기준관리 - 품질기준정보)
         * 파일명         : BAS04700M.xfdl
         * 작성자         : yanghee.kim
         * 작성일         : 2021.03.30
         *
         * 설  명         :
         *---------------------------------------------------------------------------------------
         * 변경일        변경자      변경내역
         *---------------------------------------------------------------------------------------
         * 2021.03.30   yanghee.kim   최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;    //기준관리 공통 라이브러리 include

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.enterpriseId = "";
        this.lang;

        this.g_positionA; //저장 후 위치고정을 위한 전역변수(탭1. 검사정보)
        this.g_positionB; //저장 후 위치고정을 위한 전역변수(탭2. 검사정보)

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
            this.nfn_formInit(obj);
            this.enterpriseId = this.gf_getEnterpriseId();
        	this.lang = this.gf_getLanguageType();
        	this.fn_formInit();    //최초 호출되는 초기화 함수
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        this.fn_save = function(obj,e)
        {

            this.ds_jobFlag.clearData();
        	var nRow = this.ds_jobFlag.addRow();

        	if (this.div_work.form.tab.tabindex == 0) //탭1. 계측검사 저장
        	{
        		if (!this.gfn_dsIsUpdated(this.ds_operationInspectionList))
        		{
        			this.gfn_Message("NoSaveData", null, "warning", "ok");
        			return;
        		}

        		this.g_positionA  = this.ds_operationInspectionList.rowposition;

        		this.ds_jobFlag.setColumn(nRow, "JOBFLAG", "OperationInspection");
        		var sInDatasets   = "INPUT1=ds_jobFlag:A INPUT=ds_operationInspectionList:U";
        	}
            else    //탭2. 공정수입검사 저장
        	{
        		if (!this.gfn_dsIsUpdated(this.ds_OSPInspectionList))
        		{
        			this.gfn_Message("NoSaveData", null, "warning", "ok");
        			return;
        		}

        		this.g_positionB  = this.ds_OSPInspectionList.rowposition;

        		this.ds_jobFlag.setColumn(nRow, "JOBFLAG", "OSPInspection");
        		var sInDatasets = "INPUT1=ds_jobFlag:N INPUT=ds_OSPInspectionList:U";
        	}

            // -------------------------
            // 저장
            // ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
            // ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
            // -------------------------
            var sSvcID        = "saveInspectionitemrel";
            var sController   = "/bas04700/saveInspectionitemrel.do";
            var sOutDatasets  = "";
        	var sArgs  = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
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
                    this.fn_searchQcOperationInspectionItemList(); //탭1. 계측검사 조회
                break;
                case 1:
                    this.fn_searchQcOSPInspectionList();           //탭2. 공정수입검사 조회
                break;
            }
        };

        /*
         * 기능 : 규격
         */
        this.fn_execute = function(obj,e)
        {
            if (this.div_work.form.tab.tabindex == 0)
            {
        		if ( this.ds_operationInspectionList.getRowCount() == 0 ) return;

        		var nRow = this.ds_operationInspectionList.rowposition;
        		if (this.ds_operationInspectionList.getColumn(nRow, "INSPITEMTYPE") != "SPC")
        		{
        			var inspItemType = this.ds_operationInspectionList.getColumn(nRow, "INSPITEMTYPE");
        			this.gfn_Message("InValidStdData002", inspItemType, "warning", "ok"); //검사항목 유형이 SPC가 아닙니다. 검사항목코드 :({0})
        			return;
        		}

        		var popupId = "SPECDETAILPOPUP";//규격정보조회
        		var oArg = {};
        		if (this.nfn_isNull(this.ds_operationInspectionList.getColumn(nRow, "SPECCLASSID")))
        		{
        			oArg.specSequence = "";
        			oArg.specClassId  = "OperationSpec";
        		}
        		else
        		{
        			oArg.specSequence = this.ds_operationInspectionList.getColumn(nRow, "SPECSEQUENCE");
        			oArg.specClassId  = this.ds_operationInspectionList.getColumn(nRow, "SPECCLASSID");
        		}

        		this.gfn_openPopup(popupId,"bas::BAS04700P.xfdl",oArg,"width=840,height=500");
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
                if (trId == "selectQcOperationInspectionItemList") //탭1. 계측검사 - 제품정보
                {
                    if (this.ds_operationInspectionItemList.rowcount > 0)
                    {
        			    this.ds_operationInspectionItemList.set_rowposition(-1);
        				this.ds_operationInspectionItemList.set_rowposition(0);
                    }
                }
        		else if (trId == "selectQcOperationInspectionList") //탭1. 계측검사 - 검사정보
                {
        			if (this.ds_operationInspectionList.rowcount > 0)
        			{
        				if (!this.nfn_isNull(this.g_positionA))
        				{
        					this.ds_operationInspectionList.set_rowposition(this.g_positionA);
        					this.g_positionA = null;
        				}
        			}
        			else
        			{
        				this.ds_operationInspectionItemList.set_rowposition(0);
        			}
        		}
        		else if (trId == "selectQcOSPInspectionList") //탭2. 공정수입검사 - 검사정보
                {
        			if (!this.nfn_isNull(this.g_positionB))
        			{
        				this.ds_OSPInspectionList.set_rowposition(this.g_positionB);
        				this.g_positionB = null;
        			}
        		}
                else if (trId == "saveInspectionitemrel")
                {
                    this.gfn_Message("SuccessSave", null, "info", "ok");
                    if (this.div_work.form.tab.tabindex == 0)
        		    {
        			    this.fn_searchQcOperationInspectionList(this.ds_operationInspectionItemList.rowposition);
        			}
        			else
        			{
        				this.fn_searchQcOSPInspectionList();
        			}
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

            oArg.arg_type = "B";
            oArg.arg_popupCd = popId;
            oArg.arg_popupNm = "";
            oArg.arg_paramCols = "";
            oArg.arg_paramValues = "";
            oArg.arg_searchStr = "";

        	if(popupId == "SRCH_PRODUCTDEF")    /*조회조건-품목*/
            {
        		oArg.arg_type        = "BA";
        		oArg.arg_paramCols   = "P_POPTYPE|VALIDSTATE";
                oArg.arg_paramValues = "PRODUCTDEFINITION|Valid";
                oArg.arg_rtnCols     = "PRODUCTDEFID|PRODUCTDEFVERSION|PRODUCTDEFNAME";
        		if (!this.nfn_isNull(this.tab_search.Tab1.form.edt_productdefId.value))
        		{
        			oArg.arg_searchStr   = "PRODUCTDEFID=" + this.tab_search.Tab1.form.edt_productdefId.value;
        		}
            }

            this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        };

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
            var rtn = this.fv_rtnValue;
            if (this.nfn_isNull(rtn)) return;

            if(sPopupId == "SRCH_PRODUCTDEF")    /*조회조건-품목*/
            {
                this.tab_search.Tab1.form.edt_productdefId.set_value(rtn[0]);
        		this.tab_search.Tab1.form.edt_productdefVersion.set_value(rtn[1]);
        		this.tab_search.Tab1.form.edt_productdefName.set_value(rtn[2]);
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
        };

        /*
         * 기능 : 조회조건 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        	this.fn_formInit();
        };

        /*
         * 기능 : 탭1. 계측검사 - 제품정보 조회
         */
        this.fn_searchQcOperationInspectionItemList = function ()
        {
            this.ds_operationInspectionItemList.clearData();
            this.ds_operationInspectionList.clearData();

            var sSvcID        = "selectQcOperationInspectionItemList";
            var sController   = "/bas04700/selectQcOperationInspectionItemList.do";
            var sInDatasets   = "";
            var sOutDatasets  = "ds_operationInspectionItemList=output";
            var sArgs         = "";
                sArgs        += this.gfn_setParam("ENTERPRISEID", this.enterpriseId);
        		sArgs        += this.gfn_setParam("ITEMID",       this.tab_search.Tab1.form.edt_productdefId.value);
                sArgs        += this.gfn_setParam("ITEMVERSION",  this.tab_search.Tab1.form.edt_productdefVersion.value);
        		sArgs        += this.gfn_setParam("LANGUAGETYPE", this.lang);
        		sArgs        += this.gfn_setParam("VALIDSTATE",   "Valid");
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 탭1. 계측검사 - 검사정보 조회
         */
        this.fn_searchQcOperationInspectionList = function (pRow)
        {
            this.ds_operationInspectionList.clearData();

            if (pRow < 0) return false;

            var sSvcID        = "selectQcOperationInspectionList";
            var sController   = "/bas04700/selectQcOperationInspectionList.do";
            var sInDatasets   = "";
            var sOutDatasets  = "ds_operationInspectionList=output";
            var sArgs         = "";
                sArgs        += this.gfn_setParam("ENTERPRISEID", this.enterpriseId);
        		sArgs        += this.gfn_setParam("LANGUAGETYPE", this.lang);
                sArgs        += this.gfn_setParam("INSPECTIONCLASSID", "OperationInspection");
        		sArgs        += this.gfn_setParam("PRODUCTDEFID", this.ds_operationInspectionItemList.getColumn(pRow, "PRODUCTDEFID"));
        		sArgs        += this.gfn_setParam("PRODUCTDEFVERSION", this.ds_operationInspectionItemList.getColumn(pRow, "PRODUCTDEFVERSION"));
        		sArgs        += this.gfn_setParam("VALIDSTATE",   "Valid");
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 탭2. 공정수입검사 - 검사정보 조회
         */
        this.fn_searchQcOSPInspectionList = function (pRow)
        {
            this.ds_operationInspectionList.clearData();

            if (pRow < 0) return false;

            var sSvcID        = "selectQcOSPInspectionList";
            var sController   = "/bas04700/selectQcOSPInspectionList.do";
            var sInDatasets   = "";
            var sOutDatasets  = "ds_OSPInspectionList=output";
            var sArgs         = "";
        		sArgs        += this.gfn_setParam("LANGUAGETYPE", this.lang);
        		sArgs        += this.gfn_setParam("VALIDSTATE",   "Valid");
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
         /*
         * 이벤트 : 탭 클릭시
         */
        this.div_work_tab_onchanged = function(obj,e)
        {

        	if (e.postindex==0) /*계측검사*/
        	{
        		this.div_header.form.btn_execute.set_visible(true);
        	}
        	else                /*공정수입검사*/
        	{
        		this.div_header.form.btn_execute.set_visible(false);
        	}

        };

        /*
         * 이벤트 : 조회조건 아이콘 버튼 클릭시
         */
        this.fn_searchPopup_click = function(obj,e)
        {
        	if (obj.name == "btn_productdefId")
        	{
        		this.fn_openPop("SRCH_PRODUCTDEF","P00202"); //품목코드
        	}
        };

        /*
         * 이벤트 : 탭1. 계측검사 - 제품정보 클릭시
         */
        this.ds_operationInspectionItemList_canrowposchange = function(obj,e)
        {
            if (e.newrow < 0) return;

            var bOk = true;
            if (this.gfn_dsIsUpdated(this.ds_operationInspectionList)) {
                bOk = this.gfn_Message("WRITTENBEDELETE", null, "conf", "yesno");
            }

            if (bOk){
                this.fn_searchQcOperationInspectionList(e.newrow)
            } else {
                return false;
            }
        };

        /*
         * 이벤트 : 조회조건 품목코드 값 초기화시
         */
        this.tab_search_Tab1_edt_productdefId_onchanged = function(obj,e)
        {
        	if (this.nfn_isNull(e.postvalue))
        	{
        		this.tab_search.Tab1.form.edt_productdefName.set_value("");
        		this.tab_search.Tab1.form.edt_productdefVersion.set_value("");
        	}
        };

        /*
         * 이벤트 : 조회조건 품목코드의 버튼 클리어 이미지 클릭
         */
        this.nfn_editBtnClear = function()
        {
        	this.tab_search.Tab1.form.edt_productdefId.set_value("");
        	this.tab_search.Tab1.form.edt_productdefName.set_value("");
        	this.tab_search.Tab1.form.edt_productdefVersion.set_value("");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_header.form.btn_execute.addEventHandler("onclick",this.fn_execute,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.tab_search.Tab1.form.edt_productdefId.addEventHandler("onchanged",this.tab_search_Tab1_edt_productdefId_onchanged,this);
            this.tab_search.Tab1.form.btn_productdefId.addEventHandler("onclick",this.fn_searchPopup_click,this);
            this.tab_search.Tab1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tab1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.div_work.form.tab.addEventHandler("onchanged",this.div_work_tab_onchanged,this);
            this.ds_operationInspectionItemList.addEventHandler("canrowposchange",this.ds_operationInspectionItemList_canrowposchange,this);
        };
        this.loadIncludeScript("BAS04700M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
