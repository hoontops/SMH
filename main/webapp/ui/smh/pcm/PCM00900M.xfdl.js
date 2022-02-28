(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM00900M");
            this.set_titletext("LOT 투입 취소");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_wipList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"STARTEDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"LINENO\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTREVISION\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"PANELQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"LINENO\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RODUCTDIVISION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prodVersion", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFVERSIONCODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSIONNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lineNo", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODEID\" type=\"STRING\" size=\"256\"/><Column id=\"COCENM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popSearch", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_productVersionSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RODUCTDIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_areaSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lineNoSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_wipListTemp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"STARTEDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"LINENO\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTREVISION\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"PANELQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("label00","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTIONTYPE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_productionType","108","135","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label01","0","185","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("S/O번호");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTIONORDERID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label02","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTIONDEFINITION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productionOrderId","108","185",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","250","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","250","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip00",null,"70","15","97","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip01","0","80","15","97",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip03",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"230","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","250","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label03","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_text("제품구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDIVISION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_productionOrderId",null,"185","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_productDivision","108","160","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_codecolumn("C,ProductDivision2,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productDefId","108","35",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_enable("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_productDefId",null,"35","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00_00","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("24");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_plantId","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,SiteType,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label02_00","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_text("Rev");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFVERSION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_productDefVersion","108","60","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_prodVersion");
            obj.set_codecolumn("PRODUCTDEFVERSIONCODE");
            obj.set_datacolumn("PRODUCTDEFVERSIONNAME");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label06","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("26");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFNAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productDefNm","108","85",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_readonly("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staAREAID","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("27");
            obj.set_text("작업장");
            obj.set_tooltiptext("AREA");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_areaNm",null,"110","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label02_00_00","0","210","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("28");
            obj.set_text("라인");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LINENO");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_lineNo","108","210","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_innerdataset("ds_lineNo");
            obj.set_codecolumn("CODEID");
            obj.set_datacolumn("COCENM");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_areaId","108","110",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("29");
            obj.set_enable("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_areaNm","108","110",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01","0","47","290","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("title2_00","0","0","130","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("LOT 투입 취소");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("MENU_PG-SG-0041");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_wipList","title2_00:10","0","140","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("none");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_wipList","0","34",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_wipList");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"230\"/><Column size=\"80\"/><Column size=\"230\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"86\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"투입일자\"/><Cell col=\"2\" text=\"Site ID\"/><Cell col=\"3\" text=\"양산구분\"/><Cell col=\"4\" text=\"S/O번호\"/><Cell col=\"5\" text=\"라인\"/><Cell col=\"6\" text=\"품목코드\"/><Cell col=\"7\" text=\"품목명\"/><Cell col=\"8\" text=\"Rev.\"/><Cell col=\"9\" text=\"LOT NO.\"/><Cell col=\"10\" text=\"공정수순\"/><Cell col=\"11\" text=\"공졍명\"/><Cell col=\"12\" text=\"상태\" tooltiptext=\"STATUS\"/><Cell col=\"13\" text=\"작업장\"/><Cell col=\"14\" text=\"Roll/Sheet\"/><Cell col=\"15\" text=\"수량\"/><Cell col=\"16\" text=\"수량(PNL)\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:STARTEDDATE\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"2\" text=\"bind:PLANTID\"/><Cell col=\"3\" text=\"bind:LOTTYPE\"/><Cell col=\"4\" text=\"bind:PRODUCTIONORDERID\"/><Cell col=\"5\" text=\"bind:LINENO\"/><Cell col=\"6\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"7\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:PRODUCTREVISION\"/><Cell col=\"9\" text=\"bind:LOTID\"/><Cell col=\"10\" text=\"bind:USERSEQUENCE\"/><Cell col=\"11\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"12\" displaytype=\"combotext\" combocodecol=\"C,WipProcessState,ALL,Y,N\" text=\"bind:PROCESSSTATE\"/><Cell col=\"13\" text=\"bind:AREANAME\" textAlign=\"center\"/><Cell col=\"14\" text=\"bind:RTRSHT\" textAlign=\"center\"/><Cell col=\"15\" text=\"bind:QTY\" displaytype=\"mask\"/><Cell col=\"16\" text=\"bind:PANELQTY\" displaytype=\"mask\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","34","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("h34");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"16","26","24","31",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_print");
            obj.set_tooltiptext("Toolbar_Print");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","62",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","26","24","93",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Delete");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","58","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_text("화면명");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
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
        this.addIncludeScript("PCM00900M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM00900M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PCM00900M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		:  LOT 투입
         * 파일명 		: PCM00500M.xfdl
         * 작성자 		: 방성혁
         * 작성일 		: 2021.03.08
         *
         * 설  명		:  조회/수정/삭제/엑셀다운로드 기능 제공
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.03.08	방성혁   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("pcm::pcmCommon.xjs"); /*include "pcm::pcmCommon.xjs"*/; //pcm 에서 사용하는 공통

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.fv_currDate;

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {

        	this.nfn_formInit(obj);
        	this.fn_searchClear();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
            this.ds_search.clearData();
        	this.ds_wipList.clearData();

            this.div_work.form.grd_wipList.setCellProperty("head", 0, "text", '0');

        	var sRow = this.ds_search.addRow();
        	this.ds_search.setColumn(sRow, "ENTERPRISEID", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_enterpriseId"));
        	this.ds_search.setColumn(sRow, "PLANTID", this.tab_search.Tabpage1.form.cmb_plantId.value);
        	this.ds_search.setColumn(sRow, "PRODUCTIONORDERID", this.tab_search.Tabpage1.form.edt_productionOrderId.value);
        	this.ds_search.setColumn(sRow, "LINENO", this.tab_search.Tabpage1.form.cmb_lineNo.value);
        	this.ds_search.setColumn(sRow, "PRODUCTDEFID", this.tab_search.Tabpage1.form.edt_productDefId.value);
        	this.ds_search.setColumn(sRow, "PRODUCTDEFVERSION", this.tab_search.Tabpage1.form.cmb_productDefVersion.value);
            this.ds_search.setColumn(sRow, "PRODUCTDEFNAME", this.tab_search.Tabpage1.form.edt_productDefNm.value);
        	 this.ds_search.setColumn(sRow, "AREAID", this.tab_search.Tabpage1.form.edt_areaId.value);
        	this.ds_search.setColumn(sRow, "RODUCTDIVISION", this.tab_search.Tabpage1.form.cmb_productDivision.value);
        	this.ds_search.setColumn(sRow, "PRODUCTIONTYPE", this.tab_search.Tabpage1.form.cmb_productionType.value);
        	this.ds_search.setColumn(sRow, "LANGUAGETYPE", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType"));


        	var sSvcID = "WIP_LIST";
        	var sController = "/pcm00900/selectWIPListToCancelInput.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_wipList=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
            this.ds_wipListTemp.clearData();
        	this.ds_wipListTemp.copyData(this.ds_wipList);

        	for(var i = this.ds_wipListTemp.getRowCount() -1; i >= 0 ; i--)
        	{
        		if (this.ds_wipListTemp.getColumn(i, "CHK") == "0")
        		{
        			this.ds_wipListTemp.deleteRow(i);
        		}
        	}

        	if(this.ds_wipListTemp.getRowCount() == 0)
        	{
        		this.gfn_Message("NoSelections", null, "error", "ok");
        		return false;
        	}

        	var sSvcID = "CANCEL_INPUTLOT";
        	var sController = "/pcm00900/cancelInputLot.do";
        	var sInDatasets = "INPUT=ds_wipListTemp";
        	var sOutDatasets = "";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);


        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
             this.tab_search.Tabpage1.form.cmb_plantId.set_value(this.gf_getSiteType());
             this.fn_ComboClear();
        	 this.ds_wipList.clearData();
        };

        /*
         * 기능 : 신규
         */
        this.fn_new = function(obj,e)
        {

        };


        /*
         * 기능 : 삭제
         */
        this.fn_delete = function(obj,e)
        {

        };
        /*
         * 기능 : 도움말  => 공통 처리
         */
        this.fn_help = function(obj,e)
        {
        };

        /*
         * 기능 : 출력
         */
        this.fn_print = function(obj,e)
        {

        };

        /*
         * 기능 : work영역 초기화  => 공통처리
         */
        this.fn_reset = function(obj,e)
        {

        };

        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD != 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        		return;
        	}

        	switch(trId) {
        	case "WIP_LIST":
        	      if (this.ds_wipList.getRowCount() == 0)
        	      {
        				this.gfn_Message("NoSelectData", null, "error", "ok");
        				return false;
        	      }
        		  trace(this.ds_wipList.saveXML());
        		  break;
        	case "SEARCH_PRODUCTVERSION" :
        	      this.AddAll(this.ds_prodVersion,"PRODUCTDEFVERSIONCODE","PRODUCTDEFVERSIONNAME");
        	      this.tab_search.Tabpage1.form.cmb_productDefVersion.set_index(0);
        		  break;
            case "SEARCH_LINENO":
        		  this.AddAll(this.ds_lineNo,"CODEID","COCENM");
        		  this.tab_search.Tabpage1.form.cmb_lineNo.set_index(0);
        		  break;
        	case "CANCEL_INPUTLOT" :
        		  this.gfn_Message("ProcessingSuccess", "", "information", "ok");
        		  this.fn_search();
        		  break;
        	default:
        	}

        };


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) {
        	  switch(sPopupId)
        	  {
        		 case "SEARCH_AREA" :
        			this.tab_search.Tabpage1.form.edt_areaId.set_value("");
        			this.tab_search.Tabpage1.form.edt_areaNm.set_value("");
        			break;
        		 case "SEARCH_PRODUCT" :
        			this.tab_search.Tabpage1.form.edt_productDefId.set_value("");
        			this.tab_search.Tabpage1.form.edt_productDefNm.set_value("");
        			this.fn_ComboClear("LINENO");
        			break;
        		 case "SEARCH_PRODUCTIONORDERID" :
        			this.tab_search.Tabpage1.form.edt_productionOrderId.set_value("");
        			this.fn_ComboClear("PRODUCTDEFVERSION");
        			break;
        		 default :
        		    break;
        	  }
        	  return false;
        	}

            switch(sPopupId)
        	{
        		case "SEARCH_AREA" :
        			this.tab_search.Tabpage1.form.edt_areaId.set_value(rtn[0]);
        			this.tab_search.Tabpage1.form.edt_areaNm.set_value(rtn[1]);

        			break;
        		case "SEARCH_PRODUCT" :
        			if(rtn.length == 1) {
        				var colArray = rtn[0];

        				this.ds_prodVersion.clearData();
        				this.ds_prodVersion.addRow();
        				this.ds_prodVersion.setColumn(0,"CODE",colArray[1]);
        				this.ds_prodVersion.setColumn(0,"NAME",colArray[1]);

        				this.tab_search.Tabpage1.form.edt_productDefId.set_value(colArray[0]);
        				this.tab_search.Tabpage1.form.edt_productDefNm.set_value(colArray[2]);

        			} else if(rtn.length > 1) {
        				var arrCode = [];
        				for(var i=0; i<rtn.length; i++)
        				{
        					var colArray = rtn[i];
        					arrCode.push(colArray[0]);
        				}
        			    this.tab_search.Tabpage1.form.edt_productDefId.set_value(arrCode.join(","));

        			}
        			this.fn_productVersionSearch();
        			break;
        		case "SEARCH_PRODUCTIONORDERID" :
        			var arrOrderId  = [];

        			for(var i=0; i<rtn.length; i++){
        				var colArray = rtn[i];
        				 arrOrderId.push(colArray[0]);
        			}
        		    this.tab_search.Tabpage1.form.edt_productionOrderId.set_value(arrOrderId.join(","));


        			this.fn_getLineNo();
        	      break;
        		default :
        			break;
        	}

        };
        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        this.fn_ComboClear = function(objName)
        {
        	switch(objName) {
        	case "LINENO":
        		this.ds_lineNo.clearData();
        		this.AddAll(this.ds_lineNo,"CODEID","COCENM");
        		this.tab_search.Tabpage1.form.cmb_lineNo.set_index(0);
        		break;
        	case  "PRODUCTDEFVERSION":
        		this.ds_prodVersion.clearData();
        	    this.AddAll(this.ds_prodVersion,"PRODUCTDEFVERSIONCODE","PRODUCTDEFVERSIONNAME");
        	    this.tab_search.Tabpage1.form.cmb_productDefVersion.set_index(0);
        		break;
        	default:
        		this.ds_prodVersion.clearData();
        		this.AddAll(this.ds_prodVersion,"PRODUCTDEFVERSIONCODE","PRODUCTDEFVERSIONNAME");
        		this.ds_lineNo.clearData();
        		this.AddAll(this.ds_lineNo,"CODEID","COCENM");
        		this.tab_search.Tabpage1.form.cmb_LineNo.set_index(0);
        		this.tab_search.Tabpage1.form.cmb_productDefVersion.set_index(0);
        	}


        };

        this.fn_productVersionSearch = function()
        {
        	this.ds_productVersionSearch.clearData();
        	this.ds_prodVersion.clearData();

        	var aRow = this.ds_productVersionSearch.addRow();
        	this.ds_productVersionSearch.setColumn(aRow, "ENTERPRISEID", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_enterpriseId"));
        	this.ds_productVersionSearch.setColumn(aRow, "PLANTID", this.tab_search.Tabpage1.form.cmb_plantId.value);
        	this.ds_productVersionSearch.setColumn(aRow, "PRODUCTDEFID", this.tab_search.Tabpage1.form.edt_productDefId.value);
        	this.ds_productVersionSearch.setColumn(aRow, "LANGUAGETYPE", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType"));

        	this.pfn_CostomQuerySync(this.ds_productVersionSearch, this.ds_prodVersion, "selectProductVersionMulty");

        	this.AddAll(this.ds_prodVersion,"PRODUCTDEFVERSIONCODE","PRODUCTDEFVERSIONNAME");
        	this.tab_search.Tabpage1.form.cmb_productDefVersion.set_index(0);

        };

        this.fn_getLineNo = function()
        {
            this.ds_lineNoSearch.clearData();
        	this.ds_lineNo.clearData();

        	var aRow = this.ds_lineNoSearch.addRow();

        	this.ds_lineNoSearch.setColumn(aRow, "ENTERPRISEID", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_enterpriseId"));
        	this.ds_lineNoSearch.setColumn(aRow, "PLANTID", this.tab_search.Tabpage1.form.cmb_plantId.value);
        	this.ds_lineNoSearch.setColumn(aRow, "PRODUCTIONORDERID", this.tab_search.Tabpage1.form.edt_productionOrderId.value);
        	var sSvcID = "SEARCH_LINENO";
        	var sController = "/pcm00300/selectLineNo.do";
        	var sInDatasets = "INPUT=ds_lineNoSearch";
        	var sOutDatasets = "ds_lineNo=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.tab_search_Tabpage1_btn_areaId_onclick = function(obj,e)
        {
            this.ds_areaSearch.clearData();
        	var aRow = this.ds_areaSearch.addRow();
        	this.ds_areaSearch.setColumn(aRow, "ENTERPRISEID", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_enterpriseId"));
        	this.ds_areaSearch.setColumn(aRow, "PLANTID", this.tab_search.Tabpage1.form.cmb_plantId.value);
        	this.ds_areaSearch.setColumn(aRow, "PRODUCTDEFID", this.tab_search.Tabpage1.form.edt_productDefId.value);
        	this.ds_areaSearch.setColumn(aRow, "AREAID", this.tab_search.Tabpage1.form.edt_areaNm.value);

        	this.openAREA_P00124("BA", this.ds_areaSearch);
        };

        this.tab_search_Tabpage1_btn_productCode_onclick = function(obj,e)
        {
            this.ds_popSearch.clearData();
        	var aRow = this.ds_popSearch.addRow();
        	this.ds_popSearch.setColumn(aRow, "ENTERPRISEID", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_enterpriseId"));
        	this.ds_popSearch.setColumn(aRow, "PLANTID", this.tab_search.Tabpage1.form.cmb_plantId.value);
        	this.ds_popSearch.setColumn(aRow, "PRODUCTDEFID", this.tab_search.Tabpage1.form.edt_productDefId.value);
        	this.ds_popSearch.setColumn(aRow, "LANGUAGETYPE", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType"));
            var pProductDivsion = this.tab_search.Tabpage1.form.cmb_productDivision.value
        	this.openProduct_P00105("CA", this.ds_popSearch, pProductDivsion);
        };

        this.tab_search_Tabpage1_btn_productionOrderId_onclick = function(obj,e)
        {
        	 var txtSearch = ""
        	if (!this.nfn_isNull(this.tab_search.Tabpage1.form.edt_productionOrderId.value))
        	{
        		txtSearch = "PRODUCTIONORDERID="+ this.tab_search.Tabpage1.form.edt_productionOrderId.value;
        	}

        	var popupId = "SEARCH_PRODUCTIONORDERID";
        	var oArg = {};
        	oArg.arg_type = "CA";
        	oArg.arg_popupCd = "P00146";
        	oArg.arg_popupNm = "수주번호조회";
        	oArg.arg_rtnCols = "PRODUCTIONORDERID|LINENO|REINPUTYN";
        	oArg.arg_paramCols = "PLANTID|LANGUAGETYPE";
        	oArg.arg_paramValues = this.gf_getSiteType() + "|" + nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType")+ "|0";
        	oArg.arg_searchStr = txtSearch;

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=830,height=700");
        };

        this.tab_search_Tabpage1_edt_areaNm_onkillfocus = function(obj,e)
        {
        	this.tab_search_Tabpage1_btn_areaId_onclick(obj, e);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tabpage1.form.btn_productionOrderId.addEventHandler("onclick",this.tab_search_Tabpage1_btn_productionOrderId_onclick,this);
            this.tab_search.Tabpage1.form.btn_productDefId.addEventHandler("onclick",this.tab_search_Tabpage1_btn_productCode_onclick,this);
            this.tab_search.Tabpage1.form.btn_areaNm.addEventHandler("onclick",this.tab_search_Tabpage1_btn_areaId_onclick,this);
            this.tab_search.Tabpage1.form.edt_areaNm.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_areaNm_onkeydown,this);
            this.tab_search.Tabpage1.form.edt_areaNm.addEventHandler("onkillfocus",this.tab_search_Tabpage1_edt_areaNm_onkillfocus,this);
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("PCM00900M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
