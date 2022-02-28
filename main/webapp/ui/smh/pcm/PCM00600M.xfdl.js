(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM00600M");
            this.set_titletext("LOT_CARD_출력");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_combo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_layout", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotcardlist", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grdMenu", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"value\">QCAction003</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">QCAction004</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_paramList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Button("btn_help",null,"16","26","24","62",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"16","26","24","31",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_com_print");
            obj.set_tooltiptext("Toolbar_Print");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("5");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","168","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","138","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_text("LOT CARD 출력");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MENU_PG-SG-0070");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
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

            obj = new Static("sta_plantid","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_plantid","sta_plantid:5",null,"165","20",null,"sta_plantid:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_codecolumn("C,SiteType,ALL,Y,Y");
            obj.set_text("선택");
            obj.set_index("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_inputdate","0","sta_plantid:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("투입기간");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_inputdate_s","sta_inputdate:5",null,null,"20","15","sta_inputdate:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_inputdatetype","Static00:0","sta_inputdate:5","88","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_inputdate_e","cbo_inputdatetype:5",null,null,"20","15","cbo_inputdatetype:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_productdefid","0","cbo_inputdatetype:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productdefid","sta_productdefid:5",null,null,"20","37","sta_productdefid:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_productdefid",null,null,"22","20","15","sta_productdefid:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_productdefversion","0","sta_productdefid:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("Rev.");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_productdefversion","sta_productdefversion:5",null,"165","20",null,"sta_productdefversion:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_codecolumn("CODECOLUMN");
            obj.set_datacolumn("DATACOLUMN");
            var tab_search_Tabpage1_form_cbo_productdefversion_innerdataset = new nexacro.NormalDataset("tab_search_Tabpage1_form_cbo_productdefversion_innerdataset", obj);
            tab_search_Tabpage1_form_cbo_productdefversion_innerdataset._setContents("<ColumnInfo><Column id=\"CODECOLUMN\" size=\"256\"/><Column id=\"DATACOLUMN\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODECOLUMN\"/><Col id=\"DATACOLUMN\">전체</Col></Row></Rows>");
            obj.set_innerdataset(tab_search_Tabpage1_form_cbo_productdefversion_innerdataset);
            obj.set_text("선택");
            obj.set_index("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_productname","0","sta_productdefversion:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productname","sta_productname:5",null,null,"20","15","sta_productname:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_lotid","0","sta_productname:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_lotid","sta_lotid:5",null,null,"20","37","sta_lotid:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_lotid",null,null,"22","20","15","sta_lotid:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_areaid","0","sta_lotid:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_areaid","sta_areaid:5",null,null,"20","37","sta_areaid:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_areaid",null,null,"22","20","15","sta_areaid:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_lottype","0","sta_areaid:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_lottype","sta_lottype:5",null,"165","20",null,"sta_lottype:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            obj.set_text("선택");
            obj.set_index("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_productdeftype","0","sta_lottype:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("제품구분");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_productdeftype","sta_productdeftype:5",null,"165","20",null,"sta_productdeftype:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_codecolumn("C,ProductDivision2,ALL,Y,Y");
            obj.set_text("선택");
            obj.set_index("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_worktype","0","sta_productdeftype:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("작업구분");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_worktype","sta_worktype:5",null,"165","20",null,"sta_worktype:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_codecolumn("C,LotWorkType,ALL,Y,Y");
            obj.set_text("선택");
            obj.set_index("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_wipstate","0","sta_worktype:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("재공상태");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_wipstate","sta_wipstate:5",null,"165","20",null,"sta_wipstate:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_codecolumn("C,WipState,ALL,Y,Y");
            obj.set_text("선택");
            obj.set_index("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_productionorderid","0","sta_wipstate:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("S/O번호");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productionorderid","sta_productionorderid:5",null,null,"20","37","sta_productionorderid:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_productionorderid",null,null,"22","20","15","sta_productionorderid:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static04",null,"sta_productionorderid:0","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","Static04:0","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            obj.set_cssclass("btn_SA_search");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static05","161",null,"10","27",null,"btn_search:-32",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear2","171","Static04:0","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_cssclass("btn_SA_reset");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_lotcardlist",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_lotcardlist","0","34",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_lotcardlist");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"99\"/><Column size=\"39\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"65\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"\"/><Cell col=\"1\" text=\"\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"S/O번호\"/><Cell col=\"3\" text=\"Site ID\"/><Cell col=\"4\" text=\"작업구분\"/><Cell col=\"5\" text=\"작업장\"/><Cell col=\"6\" text=\"품목코드\"/><Cell col=\"7\" text=\"Rev.\"/><Cell col=\"8\" text=\"품목명\"/><Cell col=\"9\" text=\"Lot No.\"/><Cell col=\"10\" text=\"공정수순\"/><Cell col=\"11\" text=\"공정명\"/><Cell col=\"12\" text=\"UOM\"/><Cell col=\"13\" text=\"PNL\"/><Cell col=\"14\" text=\"PCS\"/><Cell col=\"15\" text=\"MM\"/><Cell col=\"16\" text=\"투입일자\"/><Cell col=\"17\" text=\"생산구분\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow + 1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\" combocodecol=\"C,ProductionType,,Y,\" displaytype=\"combotext\" text=\"bind:LOTTYPE\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new CheckBox("chk_MATERIALPRINT",null,"8","74","20","btn_xlDn_grd_lotcardlist:10",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("자재출력");
            obj.set_value("false");
            obj.set_readonly("false");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MATERIALPRINT");
            obj.set_accessibilityenable("true");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subMainTitle","0","0","120","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_text("LOT CARD 출력");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MENU_PG-SG-0070");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_lotcardlist","122","0","178","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
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
            obj = new BindItem("item01","tab_search.Tabpage1.form.cbo_plantid","value","ds_search","P_PLANTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item021","tab_search.Tabpage1.form.cal_inputdate_s","value","ds_search","P_INPUTDATE_S");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item022","tab_search.Tabpage1.form.cal_inputdate_e","value","ds_search","P_INPUTDATE_E");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item03","tab_search.Tabpage1.form.edt_productdefid","value","ds_search","P_PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item04","tab_search.Tabpage1.form.cbo_productdefversion","value","ds_search","P_PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item05","tab_search.Tabpage1.form.edt_productname","value","ds_search","P_PRODUCTNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item06","tab_search.Tabpage1.form.edt_lotid","value","ds_search","P_LOTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item07","tab_search.Tabpage1.form.edt_areaid","value","ds_search","P_AREAID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item08","tab_search.Tabpage1.form.cbo_lottype","value","ds_search","P_LOTTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item09","tab_search.Tabpage1.form.cbo_productdeftype","value","ds_search","P_PRODUCTDEFTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","tab_search.Tabpage1.form.cbo_worktype","value","ds_search","P_WORKTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","tab_search.Tabpage1.form.cbo_wipstate","value","ds_search","P_WIPSTATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","tab_search.Tabpage1.form.edt_productionorderid","value","ds_search","P_PRODUCTIONORDERID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_work.form.chk_MATERIALPRINT","value","ds_detailSearch","ISLOTCARDPRINT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM00600M.xfdl","lib::lib_bas.xjs");
        this.registerScript("PCM00600M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: LOT CARD 출력
         * 파일명 		: PCM00600M.xfdl
         * 작성자 		: 장병곤
         * 작성일 		: 2021.03.09
         *
         * 설  명		:  조회/수정/삭제/엑셀다운로드 기능 제공
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.03.09	장병곤   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.fv_currDate;

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.fn_initParam();
        	this.nfn_formInit(obj);
        	this.fn_initCombo();
        	this.fn_initGrid();
        	this.fn_initEvent();
        };

        /* 초기값 셋팅 */
        this.fn_initParam = function ()
        {
        	/*
        	// 화면 호출시 셋팅된 argument 가 존재하면 가져온다.
        	var sArgName = this.gfn_getFrameAguments("menuName");
        	if (sArgName != "")
        	{
        		trace("PCM04900M argument : ?" + sArgName);
        		var sArgArr = this.gfn_getFrameAguments("objList");
        		trace("PCM04900M argument : ?" + sArgArr);
        	}
        	*/
        }

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
        	 if (this.nfn_isNull(this.tab_search.Tabpage1.form.cal_inputdate_s.value))
        	{
        		this.gfn_Message("투입기간(FROM)을 입력햐여 주십시요", "", "error", "ok");
        		this.tab_search.Tabpage1.form.cal_inputdate_s.setFocus();
        		return false;
        	}
        	if (this.nfn_isNull(this.tab_search.Tabpage1.form.cal_inputdate_e.value))
        	{
        		this.gfn_Message("투입기간(To)을 입력햐여 주십시요", "", "error", "ok");
        		this.tab_search.Tabpage1.form.cal_inputdate_e.setFocus();
        		return false;
        	}

        	this.ds_search.setColumn( 0, "P_PRODUCTDEFVERSION_T", this.tab_search.Tabpage1.form.cbo_productdefversion.value );
        	this.ds_lotcardlist.clearData();

        	var sSvcID 			= "selectLotCardList";
        	var sController 	= "/pcm00600/selectPrintLotCardList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_lotcardlist=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 저장
        */
        this.fn_save = function (obj, e)
        {
        };

        /*
         * 기능 : 검색 초기화
        */
        this.fn_searchClear = function(obj,e)
        {
        	this.tab_search.Tabpage1.form.edt_productdefid.set_value(      "" );
        	this.tab_search.Tabpage1.form.edt_productname.set_value(       "" );
        	this.tab_search.Tabpage1.form.edt_lotid.set_value(             "" );
        	this.tab_search.Tabpage1.form.edt_areaid.set_value(            "" );
        	this.tab_search.Tabpage1.form.edt_productionorderid.set_value( "" );

        	this.ds_search.setColumn( 0, "P_USER",             this.gf_getUserAcnt() );
        	this.ds_search.setColumn( 0, "P_LANGUAGETYPE", this.gf_getLanguageType() );
        	this.ds_search.setColumn( 0, "P_PLANTID",          this.gf_getSiteType() );

        	for (var i = 0; i < this.ds_search.getColCount(); i++)
        	{
        		switch (this.ds_search.getColID(i))
        		{
        			case "P_USER"         :
        			case "P_LANGUAGETYPE" :
        			case "P_PLANTID"      :
        			{
        			}
        			break;
        			default :
        			{
        				this.ds_search.setColumn( 0, this.ds_search.getColID(i), "" );
        			}
        			break;
        		}
        	};

        	this.tab_search.Tabpage1.form.cbo_inputdatetype.set_value( "THISWEEK" );
        	this.tab_search.Tabpage1.form.cal_inputdate_s.set_value( this.ds_periodType.getColumn( 0, "THISWEEK_S" ) );
        	this.tab_search.Tabpage1.form.cal_inputdate_e.set_value( this.ds_periodType.getColumn( 0, "THISWEEK_E" ) );

        	this.tab_search.Tabpage1.form.cbo_lottype.set_index(        0 );
        	this.tab_search.Tabpage1.form.cbo_productdeftype.set_index( 0 );
        	this.tab_search.Tabpage1.form.cbo_worktype.set_index(       0 );
        	this.tab_search.Tabpage1.form.cbo_wipstate.set_index(       0 );
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
        this.fn_print = function(obj, e)
        {
        	// trace( '>>>>  ? ' +  this.ds_lotcardlist.saveXML() );
        	var chk = [];
        	var wok = [];
        	for (var i = 0; i < this.ds_lotcardlist.rowcount; i++)
        	{
        		if (this.ds_lotcardlist.getColumn( i, "CHK" ) == true)
        		{
        			chk.push(                                                            this.ds_lotcardlist.getColumn( i, "LOTID" ) );
        			wok.push( this.ds_lotcardlist.getColumn( i, "LOTID" ) + "|" + this.ds_lotcardlist.getColumn( i, "WORKTYPENAME" ) );
        		}
        		else
        		{
        			continue;
        		}
        	}

        	if (chk.length <= 0)
        	{
        		this.gfn_Message("SelectPrintLot 선택 해주십시요", "", "error", "ok");
        		return;
        	}

        	this.ds_search.setColumn( 0, "P_LOTID_T",        chk );
        	this.ds_search.setColumn( 0, "P_WORKTYPENAME_T", wok );

        	var sSvcID 			= "selectLotInfoOnPrintLotCard";
        	var sController 	= "/pcm00600/selectLotInfoOnPrintLotCard.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_lotinfoonprintlotcard=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

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
        	trace('fn_callBack trId ?' + trId);
        	//this.div_work.form.staTitle.set_text( "LOT CARD 출력 <fc v='#f31d24'>" + this.ds_lotcardlist.getRowCount() + "</fc><fc v='#999999'> 건</fc>" );
        	if (errCD != 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        		return;
        	}

        	switch (trId)
        	{
        		case "selectComboList" :
        		{
        			this.addChild("ds_productdefversion", new Dataset());
        			this.ds_productdefversion.addColumn( "CODECOLUMN", "STRING", 255);
        			this.ds_productdefversion.addColumn( "DATACOLUMN", "STRING", 255);
        			this.ds_combo.filter( "" );
        			this.ds_combo.filter("CODECOLYPE == 'ALL' || CODECOLYPE == 'REV'");
        			this.ds_productdefversion.copyData(this.ds_combo, true);
        			this.tab_search.Tabpage1.form.cbo_productdefversion.setInnerDataset( this.ds_productdefversion );

        			this.basfn_getPeriodData( "ds_periodType" );
        			this.tab_search.Tabpage1.form.cbo_inputdatetype.set_value( "THISWEEK" );
        			this.tab_search.Tabpage1.form.cal_inputdate_s.set_value( this.ds_periodType.getColumn( 0, "THISWEEK_S" ) );
        			this.tab_search.Tabpage1.form.cal_inputdate_e.set_value( this.ds_periodType.getColumn( 0, "THISWEEK_E" ) );

        			this.tab_search.Tabpage1.form.cbo_lottype.set_index(        0 );
        			this.tab_search.Tabpage1.form.cbo_productdeftype.set_index( 0 );
        			this.tab_search.Tabpage1.form.cbo_worktype.set_index(       0 );
        			this.tab_search.Tabpage1.form.cbo_wipstate.set_index(       0 );

        			this.addChild("ds_lotinfoonprintlotcard",                   new Dataset() );
        			this.addChild("ds_processresultandroutingforlotcardnormal", new Dataset() );
        		}
        		break;
        		case "selectLotCardList" :
        		{
        			if (this.ds_lotcardlist.getRowCount() == 0)
        			{
        				this.gfn_Message("NoSelectData", null, "error", "ok");
        				return;
        			};

        			this.ds_lotcardlist.addColumn( "CHK", "STRING", 255 );
        			this.ds_lotcardlist.getColumnInfo("PNL").type = "FLOAT";
        			this.ds_lotcardlist.getColumnInfo("PCS").type = "FLOAT";
        			this.ds_lotcardlist.getColumnInfo("MM").type = "FLOAT";
        			//this.div_work.form.staTitle.set_text( "LOT CARD 출력 <fc v='#f31d24'>" + this.ds_lotcardlist.getRowCount() + "</fc><fc v='#999999'> 건</fc>" );
        		}
        		break;
        		case "selectLotInfoOnPrintLotCard"  :
        		{
        			trace( 'ds_processresultandroutingforlotcardnormal :: ? ' +  this.ds_lotinfoonprintlotcard.saveXML() );
        			if (this.ds_lotinfoonprintlotcard.rowcount < 1)
        			{
        				this.gfn_Message("NoSelectData", null, "error", "ok");
        				return;
        			};

        			var sSvcID 			= "selectProcessResultAndRoutingForLotCardNormal";
        			var sController 	= "/pcm00600/selectProcessResultAndRoutingForLotCardNormal.do";
        			var sInDatasets 	= "INPUT=ds_search";
        			var sOutDatasets 	= "ds_processresultandroutingforlotcardnormal=output";
        			var sArgs 			= "";
        			this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        		}
        		break;
        		case "selectProcessResultAndRoutingForLotCardNormal" :
        		{
        			trace( 'ds_processresultandroutingforlotcardnormal :: ? ' +  this.ds_processresultandroutingforlotcardnormal.saveXML() );
        			if (this.ds_lotinfoonprintlotcard.rowcount < 1)
        			{
        				this.gfn_Message("NoSelectData", null, "error", "ok");
        				return;
        			};

        			//정상 LOTCARD와 재작업LOTCARD 분리해서 리포트 출력
        			var nomalChk = [];
        			var nomalWok = [];
        			var reworkChk = [];
        			var reworkWok = [];
        			for (var i = 0; i < this.ds_lotcardlist.rowcount; i++)
        			{
        				if (this.ds_lotcardlist.getColumn( i, "CHK" ) == true)
        				{
        					if(this.ds_lotcardlist.getColumn( i, "WORKTYPE") == "Normal")
        					{
        						nomalChk.push(                                                            this.ds_lotcardlist.getColumn( i, "LOTID" ) );
        						nomalWok.push( this.ds_lotcardlist.getColumn( i, "LOTID" ) + "|" + this.ds_lotcardlist.getColumn( i, "WORKTYPENAME" ) );
        					}
        					else
        					{
        						reworkChk.push(                                                            this.ds_lotcardlist.getColumn( i, "LOTID" ) );
        						reworkWok.push( this.ds_lotcardlist.getColumn( i, "LOTID" ) + "|" + this.ds_lotcardlist.getColumn( i, "WORKTYPENAME" ) );
        					}
        				}
        				else
        				{
        					continue;
        				}
        			}
        			//[M210616F001-1-FG-006-004][ko-KR][M210616F001-1-FG-006-004|정상][M210616F002-1-FG-010-001]
        			//2개이상일때 [M210616F001-1-FG-006-004,M210616F001-1-FG-006-004][ko-KR][M210616F001-1-FG-006-004|정상,M210616F001-1-FG-006-004|정상][M210616F001-1-FG-006-004,M210616F001-1-FG-006-004]
        			var nomalFieId = "[" + nomalChk + "][" + this.ds_search.getColumn( 0, "P_LANGUAGETYPE" ) + "][" +  nomalWok +  "]";
        			//[M210616F002-1-FG-010-001] [ko-KR] [M210616F002-1-FG-010-001|재작업]
        			//2개이상일때 [M210616F002-1-FG-010-001,M210616F002-1-FG-010-001] [ko-KR] [M210616F002-1-FG-010-001|재작업,M210616F002-1-FG-010-001|재작업]
        			var reworkFieId = "[" + reworkChk + "][" + this.ds_search.getColumn( 0, "P_LANGUAGETYPE" ) + "][" +  reworkWok +  "]";


        			if(this.div_work.form.chk_MATERIALPRINT.value == true)
        			{
        				nomalFieId = nomalFieId + "[" +  nomalChk +  "]";
        			}
        			else
        			{
        				nomalFieId = nomalFieId + "[]";
        			}
        			//정상
        			if (nomalChk.length > 0)
        			{
        				var oArg = {
        					sRptPath   : "/pcm/",
        					sRptName   : "PCM00600R.mrd",
        					strField   : nomalFieId,
        					bModalless : false
        				};

        				var sOption = "titletext=LOT CARD 출력,modeless=false";
        				this.gfn_reportPopup("reportViewer", "common::com_report.xfdl", oArg, sOption);
        			}
        			//재작업
        			if (reworkChk.length > 0)
        			{
        				var oArg = {
        					sRptPath   : "/pcm/",
        					sRptName   : "PCM02900R.mrd",
        					strField   : reworkFieId,
        					bModalless : false
        				};

        				var sOption = "titletext=LOT CARD 출력,modeless=false";
        				this.gfn_reportPopup("reportViewerRework", "common::com_report.xfdl", oArg, sOption);
        			}

        		}
        		break;
        		default :
        		{
        		}
        	};

        };

        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if (this.nfn_isNull(rtn))
        	{
        		return;
        	};

        	trace( '>>>>  ? ' + sPopupId + ':' +  rtn);
        	switch (sPopupId)
        	{
        		case "POPUP_PRODUCTDEFID" :
        		{
        			rtn = this.gfn_split(rtn, ",");
        			if (rtn.length == 3)
        			{
        				this.tab_search.Tabpage1.form.edt_productdefid.set_value(      rtn[0] );
        				this.tab_search.Tabpage1.form.edt_productname.set_value(       rtn[1] );
        				this.tab_search.Tabpage1.form.cbo_productdefversion.set_value( rtn[2] );
        			}
        			else
        			{
        				var productdefid      = [];
        				var productname       = [];
        				var productdefversion = [];
        				for (var i = 0; i < rtn.length; i++)
        				{
        					if ((i % 3)     == 0)
        					{
        						productdefid.push(rtn[i]);
        					}
        					else if ((i % 3) == 1)
        					{
        						productname.push(rtn[i]);
        					}
        					else
        					{
        						productdefversion.push(rtn[i]);
        					}
        				}

        				this.tab_search.Tabpage1.form.edt_productdefid.set_value( productdefid.join( "," ) );
        				this.tab_search.Tabpage1.form.edt_productname.set_value(                        "" );

        				this.ds_search.setColumn( 0, "P_PRODUCTDEFID",             productdefid.join( "," ) );
        				this.ds_search.setColumn( 0, "P_PRODUCTDEFVERSION_T", productdefversion.join( "," ) );
        				this.tab_search.Tabpage1.form.cbo_productdefversion.set_index(                   0 );
        			}
        		}
        		break;
        		case "POPUP_LOTID" :
        		{
        			this.tab_search.Tabpage1.form.edt_lotid.set_value(rtn);
        		}
        		break;
        		case "POPUP_AREAID" :
        		{
        			rtn = this.gfn_split(rtn, ",");
        			if (rtn.length == 2)
        			{
        				this.tab_search.Tabpage1.form.edt_areaid.set_value(rtn[1]);
        				this.ds_search.setColumn( 0, "P_AREAID",      rtn[0] );
        			}
        			else
        			{
        				var value = [];
        				var dsval = [];
        				for (var i = 0; i < rtn.length; i++)
        				{
        					if ((i % 2) == 0)
        					{
        						dsval.push(rtn[i]);
        					}
        					else
        					{
        						value.push(rtn[i]);
        					}
        				}

        				this.tab_search.Tabpage1.form.edt_areaid.set_value(value.join(","));
        				this.ds_search.setColumn( 0, "P_AREAID",          dsval.join(",") );
        			}
        		}
        		break;
        		case "POPUP_PRODUCTIONORDERID" :
        		{
        			this.tab_search.Tabpage1.form.edt_productionorderid.set_value( rtn);
        			this.ds_search.setColumn(           0, "P_PRODUCTIONORDERID", rtn );
        		}
        		break;
        		default:
        		{
        		}
        		break;
        	};
        };

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        this.fn_initCombo = function ()
        {
        	var search = [
        		 "P_USER"
        		,"P_LANGUAGETYPE"
        		,"P_PLANTID"
        		,"P_INPUTDATE_S"
        		,"P_INPUTDATE_E"
        		,"P_PRODUCTDEFID"
        		,"P_PRODUCTDEFVERSION"
        		,"P_PRODUCTNAME"
        		,"P_LOTID"
        		,"P_AREAID"
        		,"P_LOTTYPE"
        		,"P_PRODUCTDEFTYPE"
        		,"P_PROCESSSEGMENTID"
        		,"P_LOTTYPE"
        		,"P_WORKTYPE"
        		,"P_WIPSTATE"
        		,"P_PRODUCTIONORDERID"
        		,"P_PRODUCTDEFVERSION_T"
        		,"P_LOTID_T"
        		,"P_WORKTYPENAME_T"
        	];

        	for (var i = 0; i < search.length; i++)
        	{
        		this.ds_search.addColumn( search[i], "STRING", 255);
        	};

        	this.ds_search.addRow();
        	for (var i = 0; i < search.length; i++)
        	{
        		this.ds_search.setColumn( 0, search[i], "" );
        	};
        	this.ds_search.setColumn( 0, "P_USER",             this.gf_getUserAcnt() );
        	this.ds_search.setColumn( 0, "P_LANGUAGETYPE", this.gf_getLanguageType() );
        	this.ds_search.setColumn( 0, "P_PLANTID",          this.gf_getSiteType() );

        	var sSvcID 			= "selectComboList";
        	var sController 	= "/pcm04900/selectComboList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_combo=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.fn_initGrid = function ()
        {
        	// ds 세팅 및 포맷타입 설정
        	var layout = [
        		 ""						//
        		,"CHK"					//
        		,"PRODUCTIONORDERID"	// S/O번호
        		,"PLANTID"				// Site ID
        		,"WORKTYPENAME"			// 작업구분
        		,"AREANAME"				// 작업장
        		,"PRODUCTDEFID"			// 품목코드
        		,"PRODUCTDEFVERSION"	// Rev.
        		,"PRODUCTDEFNAME"		// 품목명
        		,"LOTID"				// Lot No
        		,"USERSEQUENCE"			// 공정수순
        		,"PROCESSSEGMENTNAME"	// 공정명
        		,"UOM"					// UOM
        		,"PNL"					// PNL
        		,"PCS"					// PCS
        		,"MM"					// MM
        		,"INPUTDATE"            // 투입일자
        	];

        	// ds 세팅 및 포맷타입 설정
        	var type = [
        		 ""				//
        		,""		        //
        		,"LEFT"			// S/O번호
        		,"CENTER"		// Site ID
        		,"CENTER"	    // 작업구분
        		,"LEFT"			// 작업장
        		,"LEFT"			// 품목코드
        		,"LEFT"			// Rev.
        		,"CENTER"		// 품목명
        		,"CENTER"		// Lot No
        		,"CENTER"		// 공정수순
        		,"CENTER"		// 공정명
        		,"RIGHT"		// UOM
        		,"RIGHT"		// PNL
        		,"RIGHT"		// PCS
        		,"RIGHT"		// MM
        		,"RIGHT"		// 투입일자
        	];

        	this.ds_layout.addColumn( "BIND_ID", "STRING", 255);
        	this.ds_layout.addColumn( "TYPE_ID", "STRING", 255);
        	for (var i = 0; i < layout.length; i++)
        	{
        		this.ds_layout.addRow();
        		this.ds_layout.setColumn( i, "BIND_ID", layout[i] );
        		this.ds_layout.setColumn( i, "TYPE_ID",   type[i] );
        	};

        	for (var i = 0; i < layout.length; i++)
        	{
        		this.div_work.form.grd_lotcardlist.setCellProperty( "body", i, "text", "bind:" + this.ds_layout.getColumn( i, "BIND_ID" ) );
        		if (this.ds_layout.getColumn( i, "BIND_ID" ) != "CHK")
        		{
        			this.div_work.form.grd_lotcardlist.setCellProperty( "body", i, "displaytype",                               "normal"  );
        		}

        		this.div_work.form.grd_lotcardlist.setCellProperty( "body", i, "textAlign",      this.ds_layout.getColumn( i, "TYPE_ID" ) );
        	};

        	this.div_work.form.grd_lotcardlist.setFormatColProperty(  2, "size",  70 );
        	this.div_work.form.grd_lotcardlist.setFormatColProperty(  3, "size",  60 );
        	this.div_work.form.grd_lotcardlist.setFormatColProperty(  4, "size",  70 );
        	this.div_work.form.grd_lotcardlist.setFormatColProperty(  5, "size", 120 );
        	this.div_work.form.grd_lotcardlist.setFormatColProperty(  6, "size",  70 );
        	this.div_work.form.grd_lotcardlist.setFormatColProperty(  7, "size",  40 );
        	this.div_work.form.grd_lotcardlist.setFormatColProperty(  8, "size", 240 );
        	this.div_work.form.grd_lotcardlist.setFormatColProperty(  9, "size", 200 );
        	this.div_work.form.grd_lotcardlist.setFormatColProperty( 10, "size",  60 );
        	this.div_work.form.grd_lotcardlist.setFormatColProperty( 11, "size", 140 );
        	this.div_work.form.grd_lotcardlist.setFormatColProperty( 12, "size",  60 );
        	this.div_work.form.grd_lotcardlist.setFormatColProperty( 13, "size",  60 );
        	this.div_work.form.grd_lotcardlist.setFormatColProperty( 14, "size",  60 );
        	this.div_work.form.grd_lotcardlist.setFormatColProperty( 15, "size",  60 );
        	this.div_work.form.grd_lotcardlist.setFormatColProperty( 16, "size", 140 );
        };

        this.fn_initEvent = function ()
        {
        	this.tab_search.Tabpage1.form.btn_edt_productdefid.addEventHandler( "onclick", this.tab_search.Tabpage1.form.btn_edt_onclick, this);
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.tab_search.Tabpage1.form.btn_edt_onclick = function(obj, e)
        {
        	trace( '>>>>  ? ' + ':' +  obj.name );
        	switch(obj.name)
        	{
        		case "btn_edt_productdefid" :
        		case "btn_edt_productname"  :
        		{
        			this.ds_search.setColumn( 0, "P_PRODUCTDEFID",              "" );
        			this.tab_search.Tabpage1.form.cbo_productdefversion.set_index(0);
        			this.ds_search.setColumn( 0, "P_PRODUCTNAME",               "" );
        			this.ds_search.setColumn( 0, "P_PRODUCTDEFVERSION_T",       "" );
        		}
        		break;
        		default :
        		{
        		}
        	};
        };

        this.tab_search_Tabpage1_btn_popup_onclick = function(obj, e)
        {

        	// gfn_openPopup(arg_type, popupCd, popupNm, rtnCols, paramCols, paramValues, searchStr);
        	//-----------------
        	// arg_type    : A::사용자가 선택, B:: 한건존재시 자동 셋팅 : C:
        	// popupCd     : 공통팝업 관리 화면에서 생성되는 팝업코드
        	// popupNm     : 변경할팝업화면명 , 변경하지 않을 경우 팝업화면 타이틀은 관리화면의 타이틀로 지정됨
        	// rtnCols     : 구분자 : "|"   : 그리드에 출력될 컬럼 지정 (않을 경우 관리화면의 그리드로 출력됨)
        	// paramCols   : 구분자 : "|" : where 구문에 들어갈 컬럼
        	// paramValues : 구분자 : "|"  : where 구문에 들어갈 컬럼에 대한 값
        	// searchStr   : 팝업 조회조건 콤보값 = 조회 값
        	var oArg = {};
        	switch(obj.name)
        	{
        		case "btn_productdefid" :
        		{
        			if (this.tab_search.Tabpage1.form.edt_productdefid.value != "")
        			{
        				oArg.arg_type        = "CA";
        			}
        			else
        			{
        				oArg.arg_type        = "C";
        			}
        			oArg.arg_popupCd     = "P00160";
        			oArg.arg_popupNm     = "품목 선택";
        			oArg.arg_rtnCols     = "PRODUCTDEFID|PRODUCTDEFNAME|PRODUCTDEFVERSION";
        			oArg.arg_paramCols   = "P_POPTYPE";
        			oArg.arg_paramValues = "PRODUCTDEFINITION";
        			oArg.arg_searchStr   = "P_PRODUCTDEFNAME=" + this.tab_search.Tabpage1.form.edt_productdefid.value;
        			this.gfn_openPopup( "POPUP_PRODUCTDEFID", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        		}
        		break;
        		case "btn_lotid" :
        		{
        			if (this.ds_search.getColumn( 0, "P_LOTID" ) != "")
        			{
        				oArg.arg_type        = "BA";
        			}
        			else
        			{
        				oArg.arg_type        = "B";
        			}
        			oArg.arg_popupCd     = "P00159";
        			oArg.arg_popupNm     = "Lot No 선택";
        			oArg.arg_rtnCols     = "LOTID";
        			oArg.arg_paramCols   = "P_POPTYPE|P_LANGUAGETYPE";
        			oArg.arg_paramValues = "LOTID|" + this.gf_getLanguageType();
        			oArg.arg_searchStr   = "P_LOTID=" + this.ds_search.getColumn( 0, "P_LOTID" );
        			this.gfn_openPopup( "POPUP_LOTID", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        		}
        		break;
        		case "btn_areaid" :
        		{
        			if (this.ds_search.getColumn( 0, "P_AREAID" ) != "")
        			{
        				oArg.arg_type        = "CA";
        			}
        			else
        			{
        				oArg.arg_type        = "C";
        			}
        			oArg.arg_popupCd     = "P00157";
        			oArg.arg_popupNm     = "작업장 선택";
        			oArg.arg_rtnCols     = "AREAID|AREANAME";
        			oArg.arg_paramCols   = "P_POPTYPE|P_LANGUAGETYPE|P_USER|P_PLANTID";
        			oArg.arg_paramValues = "AREALISTBYAUTHORITY|" + this.gf_getLanguageType() + "|" + this.gf_getUserAcnt() + "|" + this.ds_search.getColumn( 0, "P_PLANTID" );
        			oArg.arg_searchStr   = "P_DICTIONARY=" +this.tab_search.Tabpage1.form.edt_areaid.value;
        			this.gfn_openPopup( "POPUP_AREAID", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        		}
        		break;
        		case "btn_productionorderid" :
        		{
        			if (this.ds_search.getColumn( 0, "P_PRODUCTIONORDERID" ) != "")
        			{
        				oArg.arg_type        = "BA";
        			}
        			else
        			{
        				oArg.arg_type        = "B";
        			}
        			oArg.arg_popupCd     = "P00189";
        			oArg.arg_popupNm     = "S/O 번호";
        			oArg.arg_rtnCols     = "PRODUCTIONORDERID";
        			oArg.arg_paramCols   = "P_POPTYPE|P_LANGUAGETYPE|P_PLANTID";
        			oArg.arg_paramValues = "PRODUCTIONORDERID|"   + this.gf_getLanguageType() + "|" + this.ds_search.getColumn( 0, "P_PLANTID" );
        			oArg.arg_searchStr   = "P_PRODUCTIONORDERID=" + this.tab_search.Tabpage1.form.edt_productionorderid.value;
        			this.gfn_openPopup( "POPUP_PRODUCTIONORDERID", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        		}
        		break;
        		default :
        		{
        		}
        	};
        };

        this.tab_search_Tabpage1_cbo_inputdatetype_onitemchanged = function(obj, e)
        {
        	if (e.postvalue != "CUSTOM")
        	{
        		this.tab_search.Tabpage1.form.cal_inputdate_s.set_value( this.ds_periodType.getColumn( 0, e.postvalue + "_S" ) );
        		this.tab_search.Tabpage1.form.cal_inputdate_e.set_value( this.ds_periodType.getColumn( 0, e.postvalue + "_E" ) );
        	}
        };

        this.tab_search_Tabpage1_cal_inputdate_oninput = function(obj, e)
        {
        	if (this.tab_search.Tabpage1.form.cbo_inputdatetype.value != "CUSTOM")
        	{
        		this.tab_search.Tabpage1.form.cbo_inputdatetype.set_value( "CUSTOM" );
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.tab_search.Tabpage1.form.cal_inputdate_s.addEventHandler("oninput",this.tab_search_Tabpage1_cal_inputdate_oninput,this);
            this.tab_search.Tabpage1.form.cbo_inputdatetype.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_inputdatetype_onitemchanged,this);
            this.tab_search.Tabpage1.form.cal_inputdate_e.addEventHandler("oninput",this.tab_search_Tabpage1_cal_inputdate_oninput,this);
            this.tab_search.Tabpage1.form.btn_productdefid.addEventHandler("onclick",this.tab_search_Tabpage1_btn_popup_onclick,this);
            this.tab_search.Tabpage1.form.btn_lotid.addEventHandler("onclick",this.tab_search_Tabpage1_btn_popup_onclick,this);
            this.tab_search.Tabpage1.form.btn_areaid.addEventHandler("onclick",this.tab_search_Tabpage1_btn_popup_onclick,this);
            this.tab_search.Tabpage1.form.btn_productionorderid.addEventHandler("onclick",this.tab_search_Tabpage1_btn_popup_onclick,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.btn_clear2.addEventHandler("onclick",this.fn_searchClear,this);
        };
        this.loadIncludeScript("PCM00600M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
