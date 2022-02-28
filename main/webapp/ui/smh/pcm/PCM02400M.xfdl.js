(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM02400M");
            this.set_titletext("ROLL CUT 인계 분할");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSITAREA\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"COMMENT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_wip", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SALESORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"LINENO\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PLANQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSIZE\" type=\"STRING\" size=\"256\"/><Column id=\"STARTEDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PCS\" type=\"STRING\" size=\"256\"/><Column id=\"PNL\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"AFTERPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"AFTERPROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKTYPENAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_wipLot", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SALESORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"LINENO\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSIZE\" type=\"STRING\" size=\"256\"/><Column id=\"STARTEDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PCS\" type=\"STRING\" size=\"256\"/><Column id=\"PNL\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"AFTERPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"AFTERPROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKTYPENAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cbo_ProdVersion", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFVERSIONCODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSIONNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PRODUCTDEFVERSIONCODE\"/><Col id=\"PRODUCTDEFVERSIONNAME\">전체조회</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_wipCreateLot", this);
            obj._setContents("<ColumnInfo><Column id=\"PARENTLOT\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detailSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOTCARDPRINT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ISLOTCARDPRINT\">true</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cbo_TransitArea", this);
            obj._setContents("<ColumnInfo><Column id=\"RESOURCEAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEAREAID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rollcut", this);
            obj._setContents("<ColumnInfo><Column id=\"LASTSEQUENCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_result", this);
            obj._setContents("<ColumnInfo><Column id=\"RESULT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_titleBG");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static01","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("1");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","58","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_text("화면명");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:20","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","26","24","62",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","31",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("5");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("6");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","15","290",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","15","290","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static03",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_PLANTID","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PLANT");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PLANTID","sta_PLANTID:5",null,"165","20",null,"sta_PLANTID:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_codecolumn("C,SiteType,ALL,Y,Y");
            obj.set_text("선택");
            obj.set_index("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTDEFNAME","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMNAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_LOTID","0","sta_PRODUCTDEFNAME:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LOTID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_LOTID","sta_LOTID:5",null,null,"20","37","sta_LOTID:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_LOTID",null,null,"22","20","15","sta_LOTID:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_AREAID","0","sta_PLANTID:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("AREA");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTDEFID","0","sta_AREAID:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID","sta_PRODUCTDEFID:5",null,null,"20","37","sta_PRODUCTDEFID:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_PRODUCTDEFID",null,null,"22","20","15","sta_PRODUCTDEFID:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFNAME","sta_PRODUCTDEFNAME:5",null,null,"20","15","sta_PRODUCTDEFNAME:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_AREAID","sta_AREAID:5",null,null,"20","37","sta_AREAID:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_AREAID",null,null,"22","20","15","sta_AREAID:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static04",null,"edt_LOTID:0","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","Static04:0","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            obj.set_cssclass("btn_SA_search");
            obj.set_hotkey("F2");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static05","161",null,"10","27",null,"btn_search:-32",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","Static04:0","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_cssclass("btn_SA_reset");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTDEFVERSION","0","sta_PRODUCTDEFID:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("27");
            obj.set_text("Rev.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("INNERREVISION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTDEFVERSION","sta_PRODUCTDEFVERSION:5","edt_PRODUCTDEFID:5","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("28");
            obj.set_codecolumn("PRODUCTDEFVERSIONCODE");
            obj.set_datacolumn("PRODUCTDEFVERSIONNAME");
            obj.set_innerdataset("ds_cbo_ProdVersion");
            obj.set_text("전체조회");
            obj.set_value("");
            obj.set_index("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","130","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("재공현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("WIPLIST");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_wip",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_wip","0","staTitle:5",null,null,"0","62.43%",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_autoenter("none");
            obj.set_binddataset("ds_wip");
            obj.set_cellclickbound("control");
            obj.set_enable("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"수주번호\" tooltiptext=\"SALESORDERID\"/><Cell col=\"3\" text=\"라인\" tooltiptext=\"LINENO\"/><Cell col=\"4\" text=\"품목코드\" tooltiptext=\"ITEMCODE\"/><Cell col=\"5\" tooltiptext=\"INNERREVISION\" text=\"Rev.\"/><Cell col=\"6\" text=\"품목명\" tooltiptext=\"ITEMNAME\"/><Cell col=\"7\" text=\"수주량\" tooltiptext=\"PLANQTY\"/><Cell col=\"8\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"9\" text=\"공정수순\" tooltiptext=\"USERSEQUENCE\"/><Cell col=\"10\" text=\"작업장\" tooltiptext=\"WORKAREA\"/><Cell col=\"11\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell col=\"12\" text=\"투입일자\" tooltiptext=\"INPUTDATE\"/><Cell col=\"13\" text=\"투입수량\" tooltiptext=\"INPUTQTY\"/><Cell col=\"14\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell col=\"15\" text=\"PNL\" tooltiptext=\"OSPDAY01PNL\"/><Cell col=\"16\" text=\"MM\" tooltiptext=\"OSPDAY09MM\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow + 1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:SALESORDERID\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:LINENO\"/><Cell col=\"4\" textAlign=\"left\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"5\" text=\"bind:ITEMVERSION\"/><Cell col=\"6\" textAlign=\"left\" text=\"bind:PRODUCTDEFNAME\"/><Cell col=\"7\" displaytype=\"number\" text=\"bind:PLANQTY\" textAlign=\"right\"/><Cell col=\"8\" textAlign=\"left\" text=\"bind:PROCESSSEGMENTNAME\"/><Cell col=\"9\" text=\"bind:USERSEQUENCE\"/><Cell col=\"10\" textAlign=\"left\" text=\"bind:AREANAME\"/><Cell col=\"11\" textAlign=\"left\" text=\"bind:LOTID\"/><Cell col=\"12\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" text=\"bind:STARTEDDATE\"/><Cell col=\"13\" displaytype=\"number\" text=\"bind:INPUTQTY\" textAlign=\"right\"/><Cell col=\"14\" displaytype=\"number\" text=\"bind:PCS\" textAlign=\"right\"/><Cell col=\"15\" displaytype=\"number\" text=\"bind:PNL\" textAlign=\"right\"/><Cell col=\"16\" displaytype=\"number\" text=\"bind:MM\" textAlign=\"right\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_detail","0","grd_wip:0",null,"128","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_detail");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("guidetip00","30","38",null,"10","30",null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("1");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Static("sta_TRANSITAREA","0","guidetip00:0","70","20",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("0");
            obj.set_text("인계자원");
            obj.set_cssclass("sta_WF_detailLabel2_P");
            obj.set_tooltiptext("SENDRESOURCEID");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Combo("cbo_TRANSITAREA","sta_TRANSITAREA:10","guidetip00:0","165","20",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("15");
            obj.set_codecolumn("RESOURCEAREAID");
            obj.set_innerdataset("ds_cbo_TransitArea");
            obj.set_datacolumn("RESOURCEAREANAME");
            obj.set_text("선택");
            obj.set_index("0");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_WORKERID","cbo_TRANSITAREA:10","guidetip00:0","165","20",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("8");
            obj.set_enable("false");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Static("guidetip02","30","edt_WORKERID:0",null,"5","30",null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("3");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Static("staCOMMENT","0","sta_TRANSITAREA:5","70","20",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("4");
            obj.set_text("특이 사항");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("COMMENT ");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_COMMENT","staCOMMENT:10","73","50%","20",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("9");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Static("staLOTSIZE","0","staCOMMENT:5","70","20",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("6");
            obj.set_text("Lot Size");
            obj.set_cssclass("sta_WF_detailLabel2_P");
            obj.set_tooltiptext("LOTSIZE");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_LOTSIZE","staLOTSIZE:10","edt_COMMENT:5","7%","20",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("7");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Static("guidetip04","30","edt_LOTSIZE:0",null,"10","30",null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("2");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Static("guidetip03","30","edt_COMMENT:0",null,"5","30",null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("5");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Static("staSpace","59.62%","60","1.05%","20",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext(" ");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Button("btn_CreateLot","edt_LOTSIZE:10","98","50","20",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("16");
            obj.set_text("생성");
            obj.set_cssclass("btn_WF_black");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("CREATELOT");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new CheckBox("chk_LOTCARDPRINT","btn_CreateLot:15","guidetip03:0","10.15%","20",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("11");
            obj.set_text("Lot Card 출력");
            obj.set_value("true");
            obj.set_readonly("false");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("LOTCARDPRINT");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Static("Static00","50%","0","58","15",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_text("h15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            obj.set_taborder("13");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Button("btn_Down","50%","Static00:0","24","23",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_shuttleB");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Button("btn_Up","btn_Down:10","Static00:0","24","23",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_shuttleT");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Static("staTitle1","0","div_detail:0","117","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("RELEASELOCKING");
            obj.set_text("Lot List");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_wipLot","0","staTitle1:0","55%",null,null,"0",null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_wipLot");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"품목코드\" tooltiptext=\"ITEMCODE\"/><Cell col=\"3\" text=\"Rev.\" tooltiptext=\"INNERREVISION\"/><Cell col=\"4\" text=\"품목명\" tooltiptext=\"ITEMNAME\"/><Cell col=\"5\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"6\" text=\"작업장\" tooltiptext=\"WORKAREA\"/><Cell col=\"7\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell col=\"8\" text=\"투입일자\" tooltiptext=\"INPUTDATE\"/><Cell col=\"9\" text=\"투입수량\" tooltiptext=\"INPUTQTY\"/><Cell col=\"10\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell col=\"11\" text=\"PNL\" tooltiptext=\"OSPDAY01PNL\"/><Cell col=\"12\" text=\"MM\" tooltiptext=\"OSPDAY09MM\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow + 1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:ITEMVERSION\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:LOTID\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:STARTEDDATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"9\" text=\"bind:INPUTQTY\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:PCS\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:PNL\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"12\" text=\"bind:MM\" displaytype=\"number\" textAlign=\"right\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_wip","staTitle:-60","1","140","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("11");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_wipLot","staTitle1:-51","div_detail:0","140","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("12");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("staTitle1_00","grd_wipLot:0","div_detail:0","117","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("RELEASELOCKING");
            obj.set_text("Lot List");
            obj.set_taborder("9");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_wipCreateLot","grd_wipLot:0","staTitle1_00:0",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("8");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_wipCreateLot");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"170\"/><Column size=\"170\"/><Column size=\"70\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"모 Lot\" tooltiptext=\"PARENTLOT\"/><Cell col=\"2\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell col=\"3\" text=\"수량(PNL)\" tooltiptext=\"PANELQTY\"/><Cell col=\"4\" text=\"수량\" tooltiptext=\"OSPDAY26QTY\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow + 1\" textAlign=\"center\"/><Cell col=\"1\" textAlign=\"left\" text=\"bind:PARENTLOT\"/><Cell col=\"2\" textAlign=\"left\" text=\"bind:LOTID\"/><Cell col=\"3\" textAlign=\"right\" displaytype=\"number\" text=\"bind:PANELQTY\"/><Cell col=\"4\" textAlign=\"right\" displaytype=\"number\" text=\"bind:QTY\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_wipCreateLot","staTitle1_00:-51","div_detail:0","140","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("10");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","281","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tab_search.Tabpage1.form.cbo_PLANTID","value","ds_search","PLANTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tab_search.Tabpage1.form.edt_LOTID","value","ds_search","LOTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab_search.Tabpage1.form.edt_PRODUCTDEFID","value","ds_search","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tab_search.Tabpage1.form.edt_PRODUCTDEFNAME","value","ds_search","PRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab_search.Tabpage1.form.edt_AREAID","value","ds_search","AREANAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","tab_search.Tabpage1.form.cbo_PRODUCTDEFVERSION","value","ds_search","PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_work.form.div_detail.form.edt_WORKERID","value","ds_RollLotList","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_work.form.div_detail.form.edt_COMMENT","value","ds_search","COMMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_work.form.div_detail.form.edt_LOTSIZE","value","ds_search","LOTSIZE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_work.form.div_detail.form.cbo_TRANSITAREA","value","ds_search","TRANSITAREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_work.form.div_detail.form.chk_LOTCARDPRINT","value","ds_detailSearch","ISLOTCARDPRINT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM02400M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM02400M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PCM02400M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: LOT_Locking_해제
         * 파일명 		: PCM03800M.xfdl
         * 작성자 		: 박대호
         * 작성일 		: 2021.04.07
         *
         * 설  명		:  조회/엑셀다운로드 LOT_Locking_해제 기능 제공
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.07	박대호   	최초작성
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
        var result;
        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	// 초기화 (공통)
        	this.nfn_formInit(obj);

        	this.fn_initCombo();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색(메인 -  고객정보 그리드)
         */
        this.fn_search = function (obj, e)
        {
        	if(this.fn_searchValidate() == false) return;
        	this.ds_search.setColumn(0,"LOTSIZE", "");
        	this.ds_search.setColumn(0,"TRANSITAREA", "");
        	this.ds_search.setColumn(0,"COMMENT", "");
        	this.ds_cbo_TransitArea.clearData();
        	this.ds_wip.clearData();
        	this.ds_wipLot.clearData();
        	this.ds_wipCreateLot.clearData();

        	var sSvcID 			= "selectRollCuttingTarget";
        	var sController 	= "/pcm02400/selectRollCuttingTarget.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_wip=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.fn_searchValidate = function ()
        {
        	var component = this.tab_search.Tabpage1;
        	var strColIdList = "edt_AREAID";
        	var strColNmList = "AREAID";
        	return this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {

         	if (!this.gfn_dsIsUpdated(this.ds_wipCreateLot) )
         	{
         		this.gfn_Message("NoSaveData", null, "warning", "ok");
         		return;
         	}
        // 	if (new String(this.div_work.form.div_detail.form.cbo_TRANSITAREA.value).valueOf() == "undefined")
        // 	{
        // 		this.gfn_Message("NoSelectTargetArea", "", "warning", "ok");
        // 		return;
        // 	}
        //
        	var  colIdList = "cbo_TRANSITAREA"
        	var  colNmList = "SENDRESOURCEID";

            var component = this.div_work.form.div_detail;
        	var strColIdList = colIdList
        	var strColNmList = colNmList;
        	if( !this.nfn_MandatoryCheck(component, strColIdList, strColNmList)) return false;

        	this.ds_search.setColumn(0,"PLANTID",this.gf_getSiteType());
        	this.ds_search.setColumn(0, "USERID", this.gf_getUserId());					//사용자id
        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
          	var sSvcID = "saveRollCutiing";
          	var sController = "/pcm02400/saveRollCutiing.do";
          	var sInDatasets = "ds_search=ds_search ds_wipCreateLot=ds_wipCreateLot:A";
          	var sOutDatasets = "";
          	var sArgs = "";
          	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        	this.fn_initCombo();
        	this.ds_search.setColumn(0,"PLANTID",this.gf_getSiteType());
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
        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        	}

        	switch(trId)
        	{
        		case "selectEcmLookupValuesVList2ds_CSiteTypeALL" :
        		{
        			this.ds_search.setColumn(0,"PLANTID",this.gf_getSiteType());
        			break;
        		}
        		case "selectLotIdMaxSequence_Rollcut" :
        		{
        			this.fn_lotCreate();
        			break;
        		}
        		case "saveRollCutiing" :
        		{
        			if(errCD == 0)
        			{
        				if(this.ds_detailSearch.getColumn(0,"ISLOTCARDPRINT") == "true")
        				{
        					this.mfn_PrintLotCard();
        				}
        				this.ds_search.setColumn(0,"LOTSIZE", "");
        				this.ds_search.setColumn(0,"TRANSITAREA", "");
        				this.ds_search.setColumn(0,"COMMENT", "");
        				this.ds_cbo_TransitArea.clearData();
        				this.fn_search();
        				this.fn_countSearch();
        			}
        			break;
        		}
        		default:
        		{
        		}
        		break;
        	}

        };




        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
         /*
         *	기능 : 팝업 관련
         */
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;
        	switch (sPopupId)
        	{
        		case "POPUP_LOTID" :
        		{
        			this.tab_search.Tabpage1.form.edt_LOTID.set_value(rtn);
        		}
        		break;
        		case "POPUP_PRODUCTDEFID" :
        		{//PRODUCTDEFID|PRODUCTDEFVERSION|PRODUCTDEFNAME
        			this.setProduct_ProdVersion(rtn, this.ds_cbo_ProdVersion, this.ds_search, "C");
        			rtn = this.gfn_split(rtn, ",");
        			if (rtn.length == 3)
        			{
        				this.tab_search.Tabpage1.form.edt_PRODUCTDEFID.set_value(rtn[0]);
        				this.tab_search.Tabpage1.form.edt_PRODUCTDEFNAME.set_value(rtn[2]);
        				this.ds_search.setColumn(0, "PRODUCTDEFVERSION", rtn[1]);
        			}
        			else
        			{
        				var valueId = [];
        				var valueName = [];
        				for (var i = 0; i < rtn.length; i++)
        				{
        					if ((i % 3) == 0)
        					{
        						valueId.push(rtn[i]);
        					}
        					else if ((i % 3) == 2)
        					{
        						valueName.push(rtn[i]);
        					}

        				}
        				this.tab_search.Tabpage1.form.edt_PRODUCTDEFID.set_value(valueId.join(","));
        				this.tab_search.Tabpage1.form.edt_PRODUCTDEFNAME.set_value("");
        				this.ds_search.setColumn(0, "PRODUCTDEFVERSION", "");
        			}
        		}
        		break;
        		case "SEARCH_AREA" :
        		{
        			this.ds_search.setColumn(0,"AREAID",rtn[0]);
        			this.ds_search.setColumn(0,"AREANAME",rtn[1]);
        		}
        		break;
        	}

        };
        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/

        this.fn_initCombo = function ()
        {
        	this.ds_cbo_ProdVersion.deleteAll();
        	this.AddAll(this.ds_cbo_ProdVersion,"PRODUCTDEFVERSIONCODE","PRODUCTDEFVERSIONNAME");
        	this.ds_search.setColumn(0, "PRODUCTDEFVERSION", "");
        	this.ds_search.setColumn(0, "PRODUCTDEFID", "");
        	this.div_work.form.div_detail.form.edt_WORKERID.set_value(this.gf_getUserId() + " : " + this.gf_getUserNm());
        };

        this.fn_transitAreaList = function(LotId, ProcesssegmentVersion, processegmentId)
        {
        	this.ds_detailSearch.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_detailSearch.setColumn(0, "PLANTID", this.gf_getSiteType());
        	this.ds_detailSearch.setColumn(0, "LOTID", LotId);
        	this.ds_detailSearch.setColumn(0, "PROCESSSEGMENTVERSION", ProcesssegmentVersion);
        	this.ds_detailSearch.setColumn(0, "PROCESSSEGMENTID", processegmentId);
        	this.ds_detailSearch.setColumn(0, "RESOURCETYPE", "Resource");

        	var sSvcID 			= "selectTransitAreaList";
        	var sController 	= "/pcm02400/selectTransitAreaList.do";
        	var sInDatasets 	= "INPUT=ds_detailSearch";
        	var sOutDatasets 	= "ds_cbo_TransitArea=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }
        //그리드 카운터 조회
        this.fn_countSearch = function ()
        {
        	this.div_work.form.sta_cnt_ds_wip.set_text( "Count : <fc v='#f31d24'>" + this.ds_wip.getRowCount() + "</fc>");
        	this.div_work.form.sta_cnt_ds_wipLot.set_text( "Count : <fc v='#f31d24'>" + this.ds_wipLot.getRowCount() + "</fc>");
        	this.div_work.form.sta_cnt_ds_wipCreateLot.set_text( "Count : <fc v='#f31d24'>" + this.ds_wipCreateLot.getRowCount() + "</fc>");

        };

        //LOT생성 조회
        this.fn_lotCreateSearch = function ()
        {
        	this.ds_wipCreateLot.clearData()
        	var siteCode = "";


        	switch (this.gf_getSiteType())
        	{
        		case "IFC":
        			siteCode = "F";
        			break;
        		case "IFV":
        			siteCode = "V";
        			break;
        		case "CCT":
        			siteCode = "C";
        			break;
        		case "YPE":
        			siteCode = "Y";
        			break;
        		case "YPEV":
        			siteCode = "P";
        			break;
        	}

        	var InputSeq = this.ds_wipLot.getColumn(0, "INPUTSEQUENCE");
        	var parentLotid = this.ds_wipLot.getColumn(0, "LOTID");
        	var checkLotid = parentLotid.substring(0, parentLotid.length - 4);
        	this.ds_detailSearch.setColumn(0, "LOTID", checkLotid);

        	var sSvcID 			= "selectLotIdMaxSequence_Rollcut";
        	var sController 	= "/pcm02400/selectLotIdMaxSequence_Rollcut.do";
        	var sInDatasets 	= "INPUT=ds_detailSearch";
        	var sOutDatasets 	= "ds_rollcut=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }
        //LOT 생성
        this.fn_lotCreate = function ()
        {
        	var parentLotid = this.ds_wipLot.getColumn(0, "LOTID");
        	var checkLotid = parentLotid.substring(0, parentLotid.length - 4);
        	var LotQty = this.ds_wipLot.getColumn(0, "PNL");
        	var PanelperQty = this.ds_wipLot.getColumn(0, "PANELPERQTY");
        	var checkLotQty = nexacro.toNumber(LotQty);
        	var lotSize = nexacro.toNumber(this.div_work.form.div_detail.form.edt_LOTSIZE.value);
        	var lotCnt = 0;
        	var checkSplitCnt = 0;
        	var sequece = nexacro.toNumber(this.ds_rollcut.getColumn(0, "LASTSEQUENCE"));

        	while(checkLotQty > 0)
        	{
        		var prevQty = lotSize +1;
        		var isPrevMerge = "N";
        		var splitQty = checkLotQty -lotSize;
        		var PrevLotid = "";
        		var creteLotNo = "";
        		var UsePrevLot = false;

        		if(this.ds_wipCreateLot.rowcount > 0)
        		{
        			prevQty = this.ds_wipCreateLot.getColumn(this.ds_wipCreateLot.rowcount - 1,"QTY");
        			PrevLotid = this.ds_wipCreateLot.getColumn(this.ds_wipCreateLot.rowcount - 1,"LOTID");
        		}
        		var creatQty = 0;

        		creatQty = splitQty > 0 ? lotSize : checkLotQty;
        		lotCnt++;
        		checkLotQty = checkLotQty - creatQty;

        		if(checkSplitCnt > 0)
        		{
        			sequece++;
        			creteLotNo = checkLotid + "-" + this.gfn_lpad(sequece + "", "0", 3);
        		}
        		else
        		{
        			creteLotNo = parentLotid;
        		}
        		this.ds_wipCreateLot.addRow();
        		this.ds_wipCreateLot.setColumn(this.ds_wipCreateLot.rowcount - 1, "PARENTLOT", parentLotid);
        		this.ds_wipCreateLot.setColumn(this.ds_wipCreateLot.rowcount - 1, "LOTID", creteLotNo);
        		this.ds_wipCreateLot.setColumn(this.ds_wipCreateLot.rowcount - 1, "PANELQTY", creatQty);
        		this.ds_wipCreateLot.setColumn(this.ds_wipCreateLot.rowcount - 1, "QTY", creatQty * PanelperQty);
        		checkSplitCnt++;
        	}
        	this.fn_countSearch();
        }
        this.mfn_PrintLotCard = function ()
        {
        	var lot = [];
        	var wok = [];
        	var languageType 	= this.gf_getLanguageType();
        	var title 			= this.nfn_nvl(this.nfn_getDictionarynameUpper("LOTCARDPRINT"),"LOT Card 출력");
        	for (var i = 0; i < this.ds_wipCreateLot.rowcount; i++)
        	{
        		lot.push(                                                            this.ds_wipCreateLot.getColumn( i, "LOTID" ) );
        		wok.push( this.ds_wipCreateLot.getColumn( i, "LOTID" ) + "|" + this.ds_wipLot.getColumn( 0, "WORKTYPENAME" ) );
        	}

        	var oArg = {
        		sRptPath   : "/pcm/",
        		sRptName   : "PCM00600R.mrd",
        		strField   :   "[" + lot
        					+ "][" + languageType
        					+ "][" + wok
        					+ "][" + lot
        					+ "]",
        		bModalless : false
        	};

        	var sOption = "titletext="+title+",modeless=false";
        	this.gfn_reportPopup("reportViewer", "common::com_report.xfdl", oArg, sOption);
        };
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        /*
         *	기능 : LotNo 검색 버튼 클릭 시
         */
        this.tab_search_Tabpage1_btn_LOTID_onclick = function(obj,e)
        {
        	var oArg = {};
        	if (this.tab_search.Tabpage1.form.edt_LOTID.value != undefined)
        	{
        		oArg.arg_type        = "CA";
        	}
        	else
        	{
        		oArg.arg_type        = "C";
        	}
        	oArg.arg_popupCd     = "P00159";
        	oArg.arg_popupNm     = "Lot No 조회";
        	oArg.arg_rtnCols     = "LOTID";
        	oArg.arg_paramCols   = "P_POPTYPE|P_LANGUAGETYPE";
        	oArg.arg_paramValues = "LOTID|" + this.gf_getLanguageType();
        	oArg.arg_searchStr   = "P_LOTID=" + this.tab_search.Tabpage1.form.edt_LOTID.value;
        	this.gfn_openPopup( "POPUP_LOTID", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        };
        /*
         *	기능 : 품목 검색 버튼 클릭 시
         */
        this.tab_search_Tabpage1_btn_PRODUCTDEFID_onclick = function(obj,e)
        {
        	var oArg = {};

        	if (this.tab_search.Tabpage1.form.edt_PRODUCTDEFID.value != undefined)
        	{
        		oArg.arg_type        = "CA";
        	}
        	else
        	{
        		oArg.arg_type        = "C";
        	}
        	oArg.arg_popupCd     = "P00211";
        	oArg.arg_popupNm     = "품목 선택";
        	oArg.arg_rtnCols     = "PRODUCTDEFID|PRODUCTDEFVERSION|PRODUCTDEFNAME";
        	oArg.arg_paramCols   = "P_POPTYPE";
        	oArg.arg_paramValues = "PRODUCTDEFINITION";
        	oArg.arg_searchStr   = "P_PRODUCTDEFNAME=" + this.tab_search.Tabpage1.form.edt_PRODUCTDEFID.value;
        	this.gfn_openPopup( "POPUP_PRODUCTDEFID", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");

        };
        /*
         *	기능 : 작업장 검색 버튼 클릭 시
         */
        this.tab_search_Tabpage1_btn_AREAID_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0,"AREAID",this.tab_search.Tabpage1.form.edt_AREAID.value);
        	this.openAREA_P00124("BA", this.ds_search);
        };



        /*
         *	기능 : 아래이동 화살표 클릭 시
         */
        this.div_work_div_detail_btn_Down_onclick = function(obj,e)
        {
        	if(this.ds_wip.rowcount > 1)
        	{
        		var chkCount = 0;
        		for (var i = 0; i < this.ds_wip.rowcount; i++)
        		{
        			if (this.ds_wip.getColumn( i, "CHK" ) == true)
        			{
        				chkCount++;
        			}
        		};

        		if(chkCount + this.ds_wipLot.rowcount > 1)
        		{
        			// {0} 의 Lot 만 분할 가능 합니다.
        			this.gfn_Message("CheckRollCutSplit", "1", "info");
        			return;
        		}
        	}

        	var chk = false;

         	for (var i = 0; i < this.ds_wip.rowcount; i++)
         	{
         		if (this.ds_wip.getColumn( i, "CHK" ) == true)
         		{
         			chk = true;
         			break;
         		}
         	};

         	if (!chk)
         	{
         		return;
         	};

        	var LotSize = this.ds_wip.getColumn(0, "LOTSIZE");
        	var LotId = this.ds_wip.getColumn(0, "LOTID");
        	var ProcesssegmentVersion = this.ds_wip.getColumn(0, "AFTERPROCESSSEGMENTVERSION");
        	var processegmentId = this.ds_wip.getColumn(0, "AFTERPROCESSSEGMENTID");

         	for (var i = 0; i < this.ds_wip.getRowCount(); i++)
         	{
         		if (this.ds_wip.getColumn( i, "CHK") == true)
         		{
         			this.ds_wipLot.copyRow(this.ds_wipLot.addRow(), this.ds_wip, i);
         			this.ds_wipLot.setColumn( (this.ds_wipLot.getRowCount() - 1), "CHK",  "" );
         		}
         	};

         	for (var i = this.ds_wip.getRowCount(); i >= 0; i--)
         	{
         		if (this.ds_wip.getColumn( i, "CHK") == true)
         		{
         			this.ds_wip.deleteRow( i );
         		}
         	};
        	this.ds_search.setColumn(0, "LOTSIZE", LotSize);
        	this.fn_transitAreaList(LotId, ProcesssegmentVersion, processegmentId);
        	this.fn_countSearch();
        };
        /*
         *	기능 :위이동 화살표 클릭 시
         */
        this.div_work_div_detail_btn_Up_onclick = function(obj,e)
        {
        	var chk = false;
        	for (var i = 0; i < this.ds_wipLot.rowcount; i++)
        	{
        		if (this.ds_wipLot.getColumn( i, "CHK" ) == true)
        		{
        			chk = true;
        			break;
        		}
        	};

        	if (!chk)
        	{
        		return;
        	}

        	for (var i = 0; i < this.ds_wipLot.getRowCount(); i++)
        	{
        		if (this.ds_wipLot.getColumn( i, "CHK") == true)
        		{
        			this.ds_wip.copyRow(this.ds_wip.addRow(), this.ds_wipLot, i);
        			this.ds_wip.setColumn( (this.ds_wip.getRowCount() - 1), "CHK",  "" );
        		}
        	};

        	for (var i = this.ds_wipLot.getRowCount(); i >= 0; i--)
        	{
        		if (this.ds_wipLot.getColumn( i, "CHK") == true)
        		{
        			this.ds_wipLot.deleteRow( i );
        		}
        	};
        	this.fn_countSearch();
        };

        /*
         *	기능 :생성버튼 클릭 시
         */
        this.div_work_div_detail_btn_CreateLot_onclick = function(obj,e)
        {
        	if(this.div_work.form.div_detail.form.edt_LOTSIZE.value == "")
        	{
        		// Lot Size가 입력이 되어야 합니다.
        		this.gfn_Message("LOTSIZEINPUT", null, "warning");
        		return;
        	}
        	this.fn_lotCreateSearch();

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.tab_search.Tabpage1.form.btn_LOTID.addEventHandler("onclick",this.tab_search_Tabpage1_btn_LOTID_onclick,this);
            this.tab_search.Tabpage1.form.btn_PRODUCTDEFID.addEventHandler("onclick",this.tab_search_Tabpage1_btn_PRODUCTDEFID_onclick,this);
            this.tab_search.Tabpage1.form.btn_AREAID.addEventHandler("onclick",this.tab_search_Tabpage1_btn_AREAID_onclick,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.div_work.form.div_detail.form.btn_CreateLot.addEventHandler("onclick",this.div_work_div_detail_btn_CreateLot_onclick,this);
            this.div_work.form.div_detail.form.btn_Down.addEventHandler("onclick",this.div_work_div_detail_btn_Down_onclick,this);
            this.div_work.form.div_detail.form.btn_Up.addEventHandler("onclick",this.div_work_div_detail_btn_Up_onclick,this);
        };
        this.loadIncludeScript("PCM02400M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
