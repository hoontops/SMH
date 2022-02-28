(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM04900M");
            this.set_titletext("재공조회");
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


            obj = new Dataset("ds_wiplist", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grdMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"GRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC\" type=\"STRING\" size=\"256\"/><Column id=\"DICTIONARYID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"GRD_NM\">grd_wiplist</Col><Col id=\"MENU_NM\">LOT 이력조회</Col><Col id=\"FUNC\"/><Col id=\"DICTIONARYID\"/></Row><Row><Col id=\"GRD_NM\">grd_wiplist</Col><Col id=\"MENU_NM\">품목 상세 현황</Col><Col id=\"FUNC\"/><Col id=\"DICTIONARYID\"/></Row><Row><Col id=\"GRD_NM\">grd_wiplist</Col><Col id=\"MENU_NM\">이상발생 현황</Col><Col id=\"FUNC\"/><Col id=\"DICTIONARYID\"/></Row><Row><Col id=\"GRD_NM\">grd_wiplist</Col><Col id=\"MENU_NM\">품목사양정보</Col><Col id=\"FUNC\"/><Col id=\"DICTIONARYID\"/></Row><Row><Col id=\"GRD_NM\">grd_wiplist</Col><Col id=\"MENU_NM\">Locking 현황</Col><Col id=\"FUNC\"/><Col id=\"DICTIONARYID\"/></Row><Row><Col id=\"GRD_NM\">grd_wiplist</Col><Col id=\"MENU_NM\">Lot Defect Map 현황</Col><Col id=\"FUNC\"/><Col id=\"DICTIONARYID\"/></Row><Row><Col id=\"GRD_NM\">grd_wiplist</Col><Col id=\"MENU_NM\">품목별 Defect Map 현황</Col><Col id=\"FUNC\"/><Col id=\"DICTIONARYID\"/></Row></Rows>");
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
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","32",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("5");
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
            obj.set_taborder("18");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","15","290","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            obj.set_taborder("19");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            obj.set_taborder("20");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static03",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            obj.set_taborder("21");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_plantid","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("22");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_plantid","sta_plantid:5",null,"165","20",null,"sta_plantid:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,SiteType,ALL,Y,Y");
            obj.set_text("선택");
            obj.set_index("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_productdefid","0","sta_plantid:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("23");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productdefid","sta_productdefid:5",null,null,"20","37","sta_productdefid:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_productdefid",null,null,"22","20","15","sta_productdefid:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("40");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_productdefversion","0","sta_productdefid:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("Rev.");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("24");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_productdefversion","sta_productdefversion:5",null,"165","20",null,"sta_productdefversion:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
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
            obj.set_taborder("25");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productname","sta_productname:5",null,null,"20","15","sta_productname:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_lotid","0","sta_productname:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("26");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_lotid","sta_lotid:5",null,null,"20","37","sta_lotid:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_lotid",null,null,"22","20","15","sta_lotid:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("41");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_customer","0","sta_lotid:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("고객사");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("27");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_customer","sta_customer:5",null,null,"20","37","sta_customer:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_customer",null,null,"22","20","15","sta_customer:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("42");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_areaid","0","sta_customer:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("28");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_areaid","sta_areaid:5",null,null,"20","37","sta_areaid:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_areaid",null,null,"22","20","15","sta_areaid:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("43");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_processsegmentclassid_top","0","sta_areaid:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("대공정");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("29");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_processsegmentclassid_top","sta_processsegmentclassid_top:5",null,"165","20",null,"sta_processsegmentclassid_top:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_codecolumn("CODECOLUMN");
            obj.set_datacolumn("DATACOLUMN");
            var tab_search_Tabpage1_form_cbo_processsegmentclassid_top_innerdataset = new nexacro.NormalDataset("tab_search_Tabpage1_form_cbo_processsegmentclassid_top_innerdataset", obj);
            tab_search_Tabpage1_form_cbo_processsegmentclassid_top_innerdataset._setContents("<ColumnInfo><Column id=\"CODECOLUMN\" size=\"256\"/><Column id=\"DATACOLUMN\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODECOLUMN\"/><Col id=\"DATACOLUMN\">전체</Col></Row></Rows>");
            obj.set_innerdataset(tab_search_Tabpage1_form_cbo_processsegmentclassid_top_innerdataset);
            obj.set_text("선택");
            obj.set_index("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_processsegmentclassid_middle","0","sta_processsegmentclassid_top:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("중공정");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("30");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_processsegmentclassid_middle","sta_processsegmentclassid_middle:5",null,"165","20",null,"sta_processsegmentclassid_middle:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_codecolumn("CODECOLUMN");
            obj.set_datacolumn("DATACOLUMN");
            var tab_search_Tabpage1_form_cbo_processsegmentclassid_middle_innerdataset = new nexacro.NormalDataset("tab_search_Tabpage1_form_cbo_processsegmentclassid_middle_innerdataset", obj);
            tab_search_Tabpage1_form_cbo_processsegmentclassid_middle_innerdataset._setContents("<ColumnInfo><Column id=\"CODECOLUMN\" size=\"256\"/><Column id=\"DATACOLUMN\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODECOLUMN\"/><Col id=\"DATACOLUMN\">전체</Col></Row></Rows>");
            obj.set_innerdataset(tab_search_Tabpage1_form_cbo_processsegmentclassid_middle_innerdataset);
            obj.set_text("선택");
            obj.set_index("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_processsegmentid","0","sta_processsegmentclassid_middle:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("공정");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("31");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_processsegmentid","sta_processsegmentid:5",null,null,"20","37","sta_processsegmentid:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_processsegmentid",null,null,"22","20","15","sta_processsegmentid:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("44");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_lottype","0","sta_processsegmentid:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("32");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_lottype","sta_lottype:5",null,"165","20",null,"sta_lottype:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            obj.set_text("선택");
            obj.set_index("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_productdeftype","0","sta_lottype:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("제품구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("33");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_productdeftype","sta_productdeftype:5",null,"165","20",null,"sta_productdeftype:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_codecolumn("C,ProductDivision2,ALL,Y,Y");
            obj.set_text("선택");
            obj.set_index("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_rtrsht","0","sta_productdeftype:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("RTR/SHT");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("34");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_rtrsht","sta_rtrsht:5",null,"165","20",null,"sta_rtrsht:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_codecolumn("CODECOLUMN");
            obj.set_datacolumn("DATACOLUMN");
            var tab_search_Tabpage1_form_cbo_rtrsht_innerdataset = new nexacro.NormalDataset("tab_search_Tabpage1_form_cbo_rtrsht_innerdataset", obj);
            tab_search_Tabpage1_form_cbo_rtrsht_innerdataset._setContents("<ColumnInfo><Column id=\"CODECOLUMN\" size=\"256\"/><Column id=\"DATACOLUMN\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODECOLUMN\"/><Col id=\"DATACOLUMN\">전체</Col></Row></Rows>");
            obj.set_innerdataset(tab_search_Tabpage1_form_cbo_rtrsht_innerdataset);
            obj.set_text("선택");
            obj.set_index("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_hold","0","sta_rtrsht:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("보류 여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("35");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_hold","sta_hold:5",null,"165","20",null,"sta_hold:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_codecolumn("CODECOLUMN");
            obj.set_datacolumn("DATACOLUMN");
            var tab_search_Tabpage1_form_cbo_hold_innerdataset = new nexacro.NormalDataset("tab_search_Tabpage1_form_cbo_hold_innerdataset", obj);
            tab_search_Tabpage1_form_cbo_hold_innerdataset._setContents("<ColumnInfo><Column id=\"CODECOLUMN\" size=\"256\"/><Column id=\"DATACOLUMN\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODECOLUMN\"/><Col id=\"DATACOLUMN\">전체</Col></Row></Rows>");
            obj.set_innerdataset(tab_search_Tabpage1_form_cbo_hold_innerdataset);
            obj.set_text("선택");
            obj.set_index("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_locking","0","sta_hold:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("Locking 여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("36");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_locking","sta_locking:5",null,"165","20",null,"sta_locking:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_codecolumn("CODECOLUMN");
            obj.set_datacolumn("DATACOLUMN");
            var tab_search_Tabpage1_form_cbo_locking_innerdataset = new nexacro.NormalDataset("tab_search_Tabpage1_form_cbo_locking_innerdataset", obj);
            tab_search_Tabpage1_form_cbo_locking_innerdataset._setContents("<ColumnInfo><Column id=\"CODECOLUMN\" size=\"256\"/><Column id=\"DATACOLUMN\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODECOLUMN\"/><Col id=\"DATACOLUMN\">전체</Col></Row></Rows>");
            obj.set_innerdataset(tab_search_Tabpage1_form_cbo_locking_innerdataset);
            obj.set_text("선택");
            obj.set_index("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_worktype","0","sta_locking:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("작업구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("37");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_worktype","sta_worktype:5",null,"165","20",null,"sta_worktype:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_codecolumn("C,LotWorkType,ALL,Y,Y");
            obj.set_text("선택");
            obj.set_index("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static04",null,"sta_worktype:0","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            obj.set_taborder("38");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","Static04:0","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            obj.set_cssclass("btn_SA_search");
            obj.set_hotkey("F2");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static05","161",null,"10","27",null,"btn_search:-32",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            obj.set_taborder("39");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear2","171","Static04:0","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_cssclass("btn_SA_reset");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","2","80","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("재공리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_wiplist",null,"8","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_wiplist","0","36",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_wiplist");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"50\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"70\" band=\"left\"/><Column size=\"200\" band=\"left\"/><Column size=\"210\" band=\"left\"/><Column size=\"50\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"\"/><Cell col=\"1\" rowspan=\"2\" text=\"Site\"/><Cell col=\"2\" rowspan=\"2\" text=\"구분\"/><Cell col=\"3\" rowspan=\"2\" text=\"작업\"/><Cell col=\"4\" rowspan=\"2\" text=\"품목코드\"/><Cell col=\"5\" rowspan=\"2\" text=\"Rev.\"/><Cell col=\"6\" rowspan=\"2\" text=\"품목명\"/><Cell col=\"7\" rowspan=\"2\" text=\"Lot No.\"/><Cell col=\"8\" rowspan=\"2\" text=\"공정&#13;&#10;수순\"/><Cell col=\"9\" rowspan=\"2\" text=\"공정명\"/><Cell col=\"10\" rowspan=\"2\" text=\"작업장\"/><Cell col=\"11\" rowspan=\"2\" text=\"상태\"/><Cell col=\"12\" colspan=\"2\" text=\"합계\"/><Cell col=\"14\" colspan=\"2\" text=\"인수대기\"/><Cell col=\"16\" rowspan=\"2\" text=\"입고&#13;&#10;검사\"/><Cell col=\"17\" colspan=\"2\" text=\"인수\"/><Cell col=\"19\" colspan=\"2\" text=\"작업시작\"/><Cell col=\"21\" colspan=\"2\" text=\"작업완료\"/><Cell col=\"23\" colspan=\"2\" text=\"검사\"/><Cell col=\"25\" rowspan=\"2\" text=\"단위\"/><Cell col=\"26\" rowspan=\"2\" text=\"공정 입고일\"/><Cell col=\"27\" rowspan=\"2\" text=\"공정L/T&#13;&#10;(시간)\"/><Cell col=\"28\" rowspan=\"2\" text=\"LOT 투입일\"/><Cell col=\"29\" rowspan=\"2\" text=\"L/T(일)\"/><Cell col=\"30\" rowspan=\"2\" text=\"납기일자\"/><Cell col=\"31\" rowspan=\"2\" text=\"잔여&#13;&#10;일수\"/><Cell col=\"32\" rowspan=\"2\" text=\"예상생산&#13;&#10;완료일\"/><Cell col=\"33\" rowspan=\"2\" text=\"Lot Routing&#13;&#10;적용여부\"/><Cell col=\"34\" rowspan=\"2\" text=\"Roll/Sheet\"/><Cell col=\"35\" rowspan=\"2\" text=\"보류\"/><Cell col=\"36\" rowspan=\"2\" text=\"Locking\"/><Cell col=\"37\" colspan=\"3\" text=\"수주정보\"/><Cell col=\"40\" rowspan=\"2\" text=\"물류상태\"/><Cell row=\"1\" col=\"12\" text=\"PCS\"/><Cell row=\"1\" col=\"13\" text=\"PNL\"/><Cell row=\"1\" col=\"14\" text=\"PCS\"/><Cell row=\"1\" col=\"15\" text=\"PNL\"/><Cell row=\"1\" col=\"17\" text=\"PCS\"/><Cell row=\"1\" col=\"18\" text=\"PNL\"/><Cell row=\"1\" col=\"19\" text=\"PCS\"/><Cell row=\"1\" col=\"20\" text=\"PNL\"/><Cell row=\"1\" col=\"21\" text=\"PCS\"/><Cell row=\"1\" col=\"22\" text=\"PNL\"/><Cell row=\"1\" col=\"23\" text=\"출고\"/><Cell row=\"1\" col=\"24\" text=\"측정\"/><Cell row=\"1\" col=\"37\" text=\"수주번호\"/><Cell row=\"1\" col=\"38\" text=\"라인\"/><Cell row=\"1\" col=\"39\" text=\"수주량\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow + 1\" textAlign=\"center\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\" textAlign=\"left\"/><Cell col=\"7\" textAlign=\"left\"/><Cell col=\"8\"/><Cell col=\"9\" textAlign=\"left\"/><Cell col=\"10\" textAlign=\"left\"/><Cell col=\"11\"/><Cell col=\"12\" textAlign=\"right\"/><Cell col=\"13\" textAlign=\"right\"/><Cell col=\"14\" textAlign=\"right\"/><Cell col=\"15\" textAlign=\"right\"/><Cell col=\"16\"/><Cell col=\"17\" textAlign=\"right\"/><Cell col=\"18\" textAlign=\"right\"/><Cell col=\"19\" textAlign=\"right\"/><Cell col=\"20\" textAlign=\"right\"/><Cell col=\"21\" textAlign=\"right\"/><Cell col=\"22\" textAlign=\"right\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell col=\"26\"/><Cell col=\"27\" textAlign=\"right\"/><Cell col=\"28\"/><Cell col=\"29\" textAlign=\"right\"/><Cell col=\"30\"/><Cell col=\"31\"/><Cell col=\"32\"/><Cell col=\"33\"/><Cell col=\"34\"/><Cell col=\"35\"/><Cell col=\"36\"/><Cell col=\"37\" textAlign=\"right\"/><Cell col=\"38\" textAlign=\"right\"/><Cell col=\"39\" textAlign=\"right\"/><Cell col=\"40\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell col=\"26\"/><Cell col=\"27\"/><Cell col=\"28\"/><Cell col=\"29\"/><Cell col=\"30\"/><Cell col=\"31\"/><Cell col=\"32\"/><Cell col=\"33\"/><Cell col=\"34\"/><Cell col=\"35\"/><Cell col=\"36\"/><Cell col=\"37\"/><Cell col=\"38\"/><Cell col=\"39\"/><Cell col=\"40\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_wiplist","staTitle:13","2",null,"34","781",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
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

            obj = new BindItem("item02","tab_search.Tabpage1.form.edt_productdefid","value","ds_search","P_PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item03","tab_search.Tabpage1.form.cbo_productdefversion","value","ds_search","P_PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item04","tab_search.Tabpage1.form.edt_productname","value","ds_search","P_PRODUCTNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item05","tab_search.Tabpage1.form.edt_lotid","value","ds_search","P_LOTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item08","tab_search.Tabpage1.form.cbo_processsegmentclassid_top","value","ds_search","P_PROCESSSEGMENTCLASSID_TOP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item09","tab_search.Tabpage1.form.cbo_processsegmentclassid_middle","value","ds_search","P_PROCESSSEGMENTCLASSID_MIDDLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","tab_search.Tabpage1.form.cbo_lottype","value","ds_search","P_LOTTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","tab_search.Tabpage1.form.cbo_productdeftype","value","ds_search","P_PRODUCTDEFTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","tab_search.Tabpage1.form.cbo_rtrsht","value","ds_search","P_RTRSHT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","tab_search.Tabpage1.form.cbo_hold","value","ds_search","P_HOLD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","tab_search.Tabpage1.form.cbo_locking","value","ds_search","P_LOCKING");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","tab_search.Tabpage1.form.cbo_worktype","value","ds_search","P_WORKTYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM04900M.xfdl","lib::lib_bas.xjs");
        this.registerScript("PCM04900M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 제공조회
         * 파일명 		: PCM04900M.xfdl
         * 작성자 		: 장병곤
         * 작성일 		: 2021.03.09
         *
         * 설  명		:  조회/수정/삭제/엑셀다운로드 기능 제공
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.03.09	장병곤   	최초작성
         * 2021.04.05	박대호		PCM05000M 모델별재공이벤트 시 fn_initParam(); 조회조건 세팅 및 조회추가
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


        	this.nfn_formInit(obj);
        	this.fn_initCombo();
        	this.fn_initGrid();
        	this.fn_initEvent();
        	this.fn_initParam();
        };

        /* 초기값 셋팅 */
        this.fn_initParam = function ()
        {
        	// 화면 호출시 셋팅된 argument 가 존재하면 가져온다.
        	var sArgName = this.gfn_getFrameAguments("menuName");
        	if (sArgName == "PCM05000")
        	{
        		var data = JSON.parse(this.gfn_getFrameAguments("objList"));
        		//품목
        		this.tab_search.Tabpage1.form.edt_productdefid.set_value(			data.PRODUCTDEFID );
        		this.tab_search.Tabpage1.form.edt_productname.set_value(		  data.PRODUCTDEFNAME );
        		this.ds_search.setColumn( 0, "P_PRODUCTDEFVERSION",           data.PRODUCTDEFVERSION );
        		//공정
        		this.tab_search.Tabpage1.form.edt_processsegmentid.set_value( data.PROCESSSEGMENTNAME );
        		this.ds_search.setColumn( 0, "P_PROCESSSEGMENTID",           	data.PROCESSSEGMENTID );
        		this.fn_wiplistSearch();
        	}
        	else if (sArgName != "")
        	{
        		var data = JSON.parse(this.gfn_getFrameAguments("objList"));
        		this.tab_search.Tabpage1.form.edt_lotid.set_value(                         data.LOTID );

        		this.tab_search.Tabpage1.form.edt_productdefid.set_value(           data.PRODUCTDEFID );
        		this.tab_search.Tabpage1.form.edt_productname.set_value(          data.PRODUCTDEFNAME );
        		this.tab_search.Tabpage1.form.cbo_productdefversion.set_value( data.PRODUCTDEFVERSION );

        		this.tab_search.Tabpage1.form.edt_areaid.set_value(                     data.AREANAME );
        		this.ds_search.setColumn(                                  0, "P_AREAID", data.AREAID );
        	}
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
        	this.fn_wiplistSearch();
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
        this.fn_searchClear = function(obj, e)
        {
        	this.tab_search.Tabpage1.form.edt_productdefid.set_value(     "" );
        	this.tab_search.Tabpage1.form.edt_productname.set_value(      "" );
        	this.tab_search.Tabpage1.form.edt_lotid.set_value(            "" );
        	this.tab_search.Tabpage1.form.edt_customer.set_value(         "" );
        	this.tab_search.Tabpage1.form.edt_areaid.set_value(           "" );
        	this.tab_search.Tabpage1.form.edt_processsegmentid.set_value( "" );

        	this.ds_search.setColumn( 0, "P_USER",             this.gf_getUserAcnt() );
        	this.ds_search.setColumn( 0, "P_LANGUAGETYPE", this.gf_getLanguageType() );
        	this.ds_search.setColumn( 0, "P_PLANTID",          this.gf_getSiteType() );
        	this.ds_search.setColumn( 0, "P_HOLD",                               "N" );

        	for (var i = 0; i < this.ds_search.getColCount(); i++)
        	{
        		switch (this.ds_search.getColID(i))
        		{
        			case "P_USER"         :
        			case "P_LANGUAGETYPE" :
        			case "P_PLANTID"      :
        			case "P_HOLD"         :
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

        	this.tab_search.Tabpage1.form.cbo_lottype.set_index(0);
        	this.tab_search.Tabpage1.form.cbo_productdeftype.set_index(0);
        	this.tab_search.Tabpage1.form.cbo_worktype.set_index(0);
        	this.tab_search.Tabpage1.form.cbo_hold.set_index(2);
        	this.tab_search.Tabpage1.form.cbo_productdeftype.set_index(1);
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
        	trace('fn_callBack trId ?' + trId);
        	//this.div_work.form.staTitle.set_text( "재공조회 <fc v='#f31d24'>" + this.ds_wiplist.getRowCount() + "</fc><fc v='#999999'> 건</fc>" );
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

        			this.addChild("ds_processsegmentclassid_top", new Dataset());
        			this.ds_processsegmentclassid_top.addColumn( "CODECOLUMN", "STRING", 255);
        			this.ds_processsegmentclassid_top.addColumn( "DATACOLUMN", "STRING", 255);
        			this.ds_combo.filter( "" );
        			this.ds_combo.filter("CODECOLYPE == 'ALL' || CODECOLYPE == 'TOPPROCESS'");
        			this.ds_processsegmentclassid_top.copyData(this.ds_combo, true);
        			this.tab_search.Tabpage1.form.cbo_processsegmentclassid_top.setInnerDataset( this.ds_processsegmentclassid_top );

        			this.addChild("ds_processsegmentclassid_middle", new Dataset());
        			this.ds_processsegmentclassid_middle.addColumn( "CODECOLUMN", "STRING", 255);
        			this.ds_processsegmentclassid_middle.addColumn( "DATACOLUMN", "STRING", 255);
        			this.ds_combo.filter( "" );
        			this.ds_combo.filter("CODECOLYPE == 'ALL' || CODECOLYPE == 'MIDDLEPROCESS'");
        			this.ds_processsegmentclassid_middle.copyData(this.ds_combo, true);
        			this.tab_search.Tabpage1.form.cbo_processsegmentclassid_middle.setInnerDataset( this.ds_processsegmentclassid_middle );

        			this.addChild("ds_rtrsht", new Dataset());
        			this.ds_rtrsht.addColumn( "CODECOLUMN", "STRING", 255);
        			this.ds_rtrsht.addColumn( "DATACOLUMN", "STRING", 255);
        			this.ds_combo.filter( "" );
        			this.ds_combo.filter("CODECOLYPE == 'ALL' || CODECOLYPE == 'RTRSHT'");
        			this.ds_rtrsht.copyData(this.ds_combo, true);
        			this.tab_search.Tabpage1.form.cbo_rtrsht.setInnerDataset( this.ds_rtrsht );

        			this.addChild("ds_hold", new Dataset());
        			this.ds_hold.addColumn( "CODECOLUMN", "STRING", 255);
        			this.ds_hold.addColumn( "DATACOLUMN", "STRING", 255);
        			this.ds_combo.filter( "" );
        			this.ds_combo.filter("CODECOLYPE == 'ALL' || CODECOLYPE == 'WHETHER'");
        			this.ds_hold.copyData(this.ds_combo, true);
        			this.tab_search.Tabpage1.form.cbo_hold.setInnerDataset( this.ds_hold );

        			this.addChild("ds_locking", new Dataset());
        			this.ds_locking.addColumn( "CODECOLUMN", "STRING", 255);
        			this.ds_locking.addColumn( "DATACOLUMN", "STRING", 255);
        			this.ds_combo.filter( "" );
        			this.ds_combo.filter("CODECOLYPE == 'ALL' || CODECOLYPE == 'LOCKING'");
        			this.ds_locking.copyData(this.ds_combo, true);
        			this.tab_search.Tabpage1.form.cbo_locking.setInnerDataset( this.ds_locking );

        			this.tab_search.Tabpage1.form.cbo_lottype.set_index(0);
        			this.tab_search.Tabpage1.form.cbo_productdeftype.set_index(0);
        			this.tab_search.Tabpage1.form.cbo_worktype.set_index(0);
        			this.tab_search.Tabpage1.form.cbo_hold.set_index(2);
        			this.tab_search.Tabpage1.form.cbo_productdeftype.set_index(1);
        		}
        		break;
        		case "selectWIPList" :
        		{
        			if (this.ds_wiplist.getRowCount() == 0)
        			{
        				this.gfn_Message("NoSelectData", null, "error", "ok");
        				return;
        			};

        			this.ds_wiplist.getColumnInfo("WIPTOTALPCS").type = "FLOAT";
        			this.ds_wiplist.getColumnInfo("WIPTOTALPNL").type = "FLOAT";
        			this.ds_wiplist.getColumnInfo("SENDPCSQTY").type = "FLOAT";
        			this.ds_wiplist.getColumnInfo("SENDPANELQTY").type = "FLOAT";
        			this.ds_wiplist.getColumnInfo("RECEIVEPCSQTY").type = "FLOAT";
        			this.ds_wiplist.getColumnInfo("RECEIVEPANELQTY").type = "FLOAT";
        			this.ds_wiplist.getColumnInfo("WORKSTARTPCSQTY").type = "FLOAT";
        			this.ds_wiplist.getColumnInfo("WORKSTARTPANELQTY").type = "FLOAT";
        			this.ds_wiplist.getColumnInfo("WORKENDPCSQTY").type = "FLOAT";
        			this.ds_wiplist.getColumnInfo("WORKENDPANELQTY").type = "FLOAT";

        			//this.div_work.form.staTitle.set_text( "재공조회 <fc v='#f31d24'>" + this.ds_wiplist.getRowCount() + "</fc><fc v='#999999'> 건</fc>" );
        			//this.div_work.form.grd_wiplist.setFormatColProperty( 9, "band", "left");
        			// this.div_work.form.grd_wiplist.set_autosizebandtype(           "body" );
        			// this.div_work.form.grd_wiplist.set_autosizingtype(              "col" );
        			// this.div_work.form.grd_wiplist.autoSizeCol( "body", 4, false );

        		}
        		break;
        		default :
        		{
        		}
        		break;
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

        	switch (sPopupId)
        	{
        		case "POPUP_PRODUCTDEFID" :
        		{
        		    this.tab_search.Tabpage1.form.edt_productdefid.set_value(rtn[0]);
        			this.tab_search.Tabpage1.form.edt_productname.set_value(rtn[1]);
        			this.tab_search.Tabpage1.form.cbo_productdefversion.set_value(rtn[2]);
        		}
        		break;
        		case "POPUP_LOTID" :
        		{
        			this.tab_search.Tabpage1.form.edt_lotid.set_value(rtn);
        		}
        		break;
        		case "POPUP_CUSTOMER" :
        		{
        			this.tab_search.Tabpage1.form.edt_customer.set_value(rtn[1]);
        			this.ds_search.setColumn( 0, "P_CUSTOMER",          rtn[0] );
        		}
        		break;
        		case "POPUP_AREAID" :
        		{
        			rtn = this.gfn_split(rtn, ",");
        			if (rtn.length == 2)
        			{
        				this.tab_search.Tabpage1.form.edt_areaid.set_value(rtn[1]);
        				this.ds_search.setColumn( 0, "P_AREAID",          rtn[0] );
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
        		case "POPUP_PROCESSSEGMENTID" :
        		{
        			this.tab_search.Tabpage1.form.edt_processsegmentid.set_value( rtn[1]);
        			this.ds_search.setColumn( 0, "P_PROCESSSEGMENTID",           rtn[0] );
        		}
        		break;
        		default:
        		{
        		}
        		break;
        	};

        	// trace( 'xml ?' +  this.ds_search.saveXML());
        };

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        this.fn_initCombo = function ()
        {
        	this.tab_search.Tabpage1.form.cbo_plantid.set_index(0);
        	this.tab_search.Tabpage1.form.cbo_productdefversion.set_index(0);

        	var search = [
        		"P_USER",
        		"P_LANGUAGETYPE",
        		"P_PLANTID",
        		"P_PRODUCTDEFID",
        		"P_PRODUCTDEFVERSION",
        		"P_PRODUCTNAME",
        		"P_LOTID",
        		"P_CUSTOMER",
        		"P_AREAID",
        		"P_PROCESSSEGMENTCLASSID_TOP",
        		"P_PROCESSSEGMENTCLASSID_MIDDLE",
        		"P_PROCESSSEGMENTID",
        		"P_LOTTYPE",
        		"P_PRODUCTDEFTYPE",
        		"P_RTRSHT",
        		"P_HOLD",
        		"P_LOCKING",
        		"P_WORKTYPE"
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
        		"",							//
        		"PLANTID",					//Site
        		"LOTTYPE",					//구분
        		"PROCESSCLASSID_R",			//작업
        		"PRODUCTDEFID",				//품목코드
        		"PRODUCTREVISION",			//Rev.
        		"PRODUCTDEFNAME",			//품목명
        		"LOTID",					//Lot No.
        		"USERSEQUENCE",				//공정&#13;&#10;수순
        		"PROCESSSEGMENTNAME",		//공정명
        		"AREANAME",					//작업장
        		"STATE",					//상태
        		"WIPTOTALPCS",				//합계-PSC
        		"WIPTOTALPNL",				//합계-PLN
        		"SENDPCSQTY",				//인수대기-PSC
        		"SENDPANELQTY",				//인수대기-PLN
        		"SELFTAKEINSPRESULT",		//입고&#13;&#10;검사
        		"RECEIVEPCSQTY",			//인수-PSC
        		"RECEIVEPANELQTY",			//인수-PLN
        		"WORKSTARTPCSQTY",			//작업시작-PSC
        		"WORKSTARTPANELQTY",		//작업시작-PLN
        		"WORKENDPCSQTY",			//작업완료-PSC
        		"WORKENDPANELQTY",			//작업완료-PLN
        		"SELFSHIPINSPRESULT",		//검사-출고
        		"MEASUREINSPRESULT",		//검사-측정
        		"UNIT",						//단위
        		"SENDTIME",					//공정 입고일
        		"PROCESSSEGMENTLEADTIME",	//공정L/T(시간)
        		"LOTINPUTDATE",				//LOT 투입일
        		"TOTALLEADTIME",			//L/T(일)
        		"DELIVERYDATE",				//납기일자
        		"LEFTDATE",					//잔여&#13;&#10;일수
        		"EXPECTPRODUCTDATE",		//예상생산&#13;&#10;완료일
        		"LOTROUTING",               //Lot Routing 추가
        		"RTRSHT",					//Roll/Sheet
        		"ISHOLD",					//보류
        		"ISLOCKING",				//Locking
        		"SALESORDERID",				//수주정보-수주번호
        		"LINENO",					//수주정보-라인
        		"PLANQTY",					//수주정보-수주량
        		"TRANSITSTATE"				//물류상태
        	];



        	this.ds_layout.addColumn( "BIND_ID", "STRING", 255);

        	for (var i = 0; i < layout.length; i++)
        	{
        		this.ds_layout.addRow();
        		this.ds_layout.setColumn( i, "BIND_ID", layout[i] );
        	};

        	this.div_work.form.grd_wiplist.setCellProperty( "summary", 6, "text",              "합계" );
        	this.div_work.form.grd_wiplist.setCellProperty( "summary", 6, "cssclass", "cell_bg_green" );
        	for (var i = 0; i < layout.length; i++)
        	{
        		if (i != 0)
        		{
        			this.div_work.form.grd_wiplist.setCellProperty( "body", i,        "text", "bind:" + this.ds_layout.getColumn( i, "BIND_ID" ) );
        			this.div_work.form.grd_wiplist.setCellProperty( "body", i, "displaytype",                                          "normal"  );
        			this.div_work.form.grd_wiplist.setCellProperty( "body", i, "cssclass", "expr:PROCESSCLASSID_R == '재작업' ? 'cell_blue' : ISLOCKING == 'Y' ? 'cell_red' : ''" );
        		};

        		switch(this.ds_layout.getColumn( i, "BIND_ID" ))
        		{
        			case "WIPTOTALPCS"       :
        			case "WIPTOTALPNL"       :
        			case "SENDPCSQTY"        :
        			case "SENDPANELQTY"      :
        			case "RECEIVEPCSQTY"     :
        			case "RECEIVEPANELQTY"   :
        			case "WORKSTARTPCSQTY"   :
        			case "WORKSTARTPANELQTY" :
        			case "WORKENDPCSQTY"     :
        			case "WORKENDPANELQTY"   :
        			{
        				this.div_work.form.grd_wiplist.setCellProperty( "summary", i, "cssclass",                                                           "cell_bg_green" );
        				this.div_work.form.grd_wiplist.setCellProperty( "summary", i, "displaytype",                                                                 "mask" );
        				this.div_work.form.grd_wiplist.setCellProperty( "summary", i, "maskeditformat",                                                         "#,##0.###" );
        				this.div_work.form.grd_wiplist.setCellProperty( "summary", i, "expr",           "dataset.getSum('" + this.ds_layout.getColumn( i, "BIND_ID") + "')" );
        			}
        			break;
        			default :
        			{
        			}
        			break;
        		};
        	};
        };

        this.fn_initEvent = function ()
        {
        	this.tab_search.Tabpage1.form.btn_edt_productdefid.addEventHandler(     "onclick", this.tab_search.Tabpage1.form.btn_edt_onclick, this);
        	this.tab_search.Tabpage1.form.btn_edt_productname.addEventHandler(      "onclick", this.tab_search.Tabpage1.form.btn_edt_onclick, this);
        	this.tab_search.Tabpage1.form.btn_edt_customer.addEventHandler(         "onclick", this.tab_search.Tabpage1.form.btn_edt_onclick, this);
        	this.tab_search.Tabpage1.form.btn_edt_areaid.addEventHandler(           "onclick", this.tab_search.Tabpage1.form.btn_edt_onclick, this);
        	this.tab_search.Tabpage1.form.btn_edt_processsegmentid.addEventHandler( "onclick", this.tab_search.Tabpage1.form.btn_edt_onclick, this);
        };
        //재공리스트 조회
        this.fn_wiplistSearch = function ()
        {
            // trace( 'ds_search xml ?' + this.ds_search.saveXML() );
        	this.ds_wiplist.clearData();

        	var sSvcID 			= "selectWIPList";
        	var sController 	= "/pcm04900/selectWIPList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_wiplist=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
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
        			//this.ds_search.setColumn( 0, "P_PRODUCTDEFID",      "" );
        // 			this.tab_search.Tabpage1.form.cbo_productdefversion.set_index(0);
        // 			this.ds_search.setColumn( 0, "P_PRODUCTNAME",       "" );
        		}
        		break;
        		case "btn_edt_customer" :
        		{
        			this.ds_search.setColumn( 0, "P_CUSTOMER", "" );
        		}
        		break;
        		case "btn_edt_areaid" :
        		{
        			this.ds_search.setColumn( 0, "P_AREAID", "" );
        		}
        		break;
        		case "btn_edt_processsegmentid" :
        		{
        			this.ds_search.setColumn( 0, "P_PROCESSSEGMENTID", "" );
        		}
        		break;
        		default :
        		{
        		}
        		break;
        	};

        	trace( 'btn_edt_onclick ?' +  this.ds_search.saveXML());
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
        				oArg.arg_type        = "BA";
        			}
        			else
        			{
        				oArg.arg_type        = "A";
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
        			if (this.tab_search.Tabpage1.form.edt_lotid.value != "")
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
        			oArg.arg_searchStr   = "P_LOTID=" + this.tab_search.Tabpage1.form.edt_lotid.value;
        			this.gfn_openPopup( "POPUP_LOTID", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        		}
        		break;
        		case "btn_customer" :
        		{
        			if (this.tab_search.Tabpage1.form.edt_customer.value != "")
        			{
        				oArg.arg_type        = "BA";
        			}
        			else
        			{
        				oArg.arg_type        = "B";
        			}
        			oArg.arg_popupCd     = "P00158";
        			oArg.arg_popupNm     = "고객사 코드";
        			oArg.arg_rtnCols     = "CUSTOMERID|CUSTOMERNAME";
        			oArg.arg_paramCols   = "P_POPTYPE|P_LANGUAGETYPE";
        			oArg.arg_paramValues = "CUSTOMER|" + this.gf_getLanguageType();
        			oArg.arg_searchStr   = "P_CUSTOMER=" + this.tab_search.Tabpage1.form.edt_customer.value;
        			this.gfn_openPopup( "POPUP_CUSTOMER", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        		}
        		break;
        		case "btn_areaid" :
        		{
        			if (this.tab_search.Tabpage1.form.edt_areaid.value != "")
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
        			oArg.arg_paramValues = "AREALISTBYAUTHORITY|" + this.gf_getLanguageType() + "|" + this.gf_getUserAcnt() + "|"+ this.ds_search.getColumn( 0, "P_PLANTID" );
        			oArg.arg_searchStr   = "P_DICTIONARY=" + this.tab_search.Tabpage1.form.edt_areaid.value;
        			this.gfn_openPopup( "POPUP_AREAID", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        		}
        		break;
        		case "btn_processsegmentid" :
        		{
        			if (this.tab_search.Tabpage1.form.edt_processsegmentid.value != "")
        			{
        				oArg.arg_type        = "BA";
        			}
        			else
        			{
        				oArg.arg_type        = "B";
        			}
        			oArg.arg_popupCd     = "P00156";
        			oArg.arg_popupNm     = "공정 선택";
        			oArg.arg_rtnCols     = "PROCESSSEGMENTID|PROCESSSEGMENTNAME";
        			oArg.arg_paramCols   = "P_POPTYPE|P_LANGUAGETYPE";
        			oArg.arg_paramValues = "PROCESSSEGMENT|" + this.gf_getLanguageType();
        			oArg.arg_searchStr   = "P_PROCESSSEGMENT=" +this.tab_search.Tabpage1.form.edt_processsegmentid.value;
        			this.gfn_openPopup( "POPUP_PROCESSSEGMENTID", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        		}
        		break;
        		default :
        		{
        		}
        		break;
        	};
        };

        this.fn_gotoPCM01600M = function ()
        {
        	/*
        	//var nRow = this.ds_LotList.rowposition;
        	//var lotID = this.ds_LotList.getColumn(nRow,"LOTID");

        	var sUrl = "pcm::test.xfdl";

        	// arryList 타입전달 예)
        	var objArgs = {
        		menuName : "Lot 이력조회",
        		objList  : []
        	};

        	this.gfn_goPage( "pcm::PCM01600M.xfdl", objArgs, true);
        	*/
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.tab_search.Tabpage1.form.btn_productdefid.addEventHandler("onclick",this.tab_search_Tabpage1_btn_popup_onclick,this);
            this.tab_search.Tabpage1.form.btn_lotid.addEventHandler("onclick",this.tab_search_Tabpage1_btn_popup_onclick,this);
            this.tab_search.Tabpage1.form.btn_customer.addEventHandler("onclick",this.tab_search_Tabpage1_btn_popup_onclick,this);
            this.tab_search.Tabpage1.form.btn_areaid.addEventHandler("onclick",this.tab_search_Tabpage1_btn_popup_onclick,this);
            this.tab_search.Tabpage1.form.btn_processsegmentid.addEventHandler("onclick",this.tab_search_Tabpage1_btn_popup_onclick,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.btn_clear2.addEventHandler("onclick",this.fn_searchClear,this);
        };
        this.loadIncludeScript("PCM04900M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
