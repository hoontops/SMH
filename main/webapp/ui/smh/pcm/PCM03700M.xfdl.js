(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM03700M");
            this.set_titletext("LOT_Locking");
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


            obj = new Dataset("ds_lock", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_locklist", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotlocking", this);
            obj._setContents("");
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

            obj = new Button("btn_help",null,"16","26","24","26",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("5");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","26","24","btn_help:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
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
            obj.set_taborder("12");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","15","290","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            obj.set_taborder("13");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            obj.set_taborder("14");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static03",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            obj.set_taborder("15");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_plantid","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("16");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_plantid","sta_plantid:5",null,"165","20",null,"sta_plantid:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,SiteType,ALL,Y,Y");
            obj.set_text("선택");
            obj.set_index("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_lotid","0","sta_plantid:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("17");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_lotid","sta_lotid:5",null,null,"20","37","sta_lotid:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_lotid",null,null,"22","20","15","sta_lotid:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("28");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_productdefid","0","sta_lotid:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("18");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productdefid","sta_productdefid:5",null,null,"20","37","sta_productdefid:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_productdefid",null,null,"22","20","15","sta_productdefid:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("27");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_productname","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("19");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productname","sta_productname:5",null,null,"20","15","sta_productname:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_areaid","0","sta_productname:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("20");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_areaid","sta_areaid:5",null,null,"20","37","sta_areaid:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_areaid",null,null,"22","20","15","sta_areaid:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("29");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_lottype","0","sta_areaid:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("21");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_lottype","sta_lottype:5",null,"165","20",null,"sta_lottype:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            obj.set_text("선택");
            obj.set_index("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_productdeftype","0","sta_lottype:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("제품구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("22");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_productdeftype","sta_productdeftype:5",null,"165","20",null,"sta_productdeftype:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_codecolumn("C,ProductDivision2,ALL,Y,Y");
            obj.set_text("선택");
            obj.set_index("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_owntype","0","sta_productdeftype:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("자사/외주구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("23");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_owntype","sta_owntype:5",null,"165","20",null,"sta_owntype:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_codecolumn("C,OwnType,ALL,Y,Y");
            obj.set_text("선택");
            obj.set_index("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_locking","0","sta_owntype:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("Locking 여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("24");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_locking","sta_locking:5",null,"165","20",null,"sta_locking:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_codecolumn("CODECOLUMN");
            obj.set_datacolumn("DATACOLUMN");
            var tab_search_Tabpage1_form_cbo_locking_innerdataset = new nexacro.NormalDataset("tab_search_Tabpage1_form_cbo_locking_innerdataset", obj);
            tab_search_Tabpage1_form_cbo_locking_innerdataset._setContents("<ColumnInfo><Column id=\"CODECOLUMN\" size=\"256\"/><Column id=\"DATACOLUMN\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODECOLUMN\"/><Col id=\"DATACOLUMN\">전체</Col></Row></Rows>");
            obj.set_innerdataset(tab_search_Tabpage1_form_cbo_locking_innerdataset);
            obj.set_text("선택");
            obj.set_index("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static04",null,"sta_locking:0","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            obj.set_taborder("25");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","Static04:0","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            obj.set_cssclass("btn_SA_search");
            obj.set_hotkey("F2");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static05","161",null,"10","27",null,"btn_search:-32",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            obj.set_taborder("26");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","Static04:0","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_cssclass("btn_SA_reset");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTDEFVERSION","0","sta_productdefid:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("30");
            obj.set_text("Rev.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("INNERREVISION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_productdefversion","sta_PRODUCTDEFVERSION:5","85","165",null,null,"edt_productname:5",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
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

            obj = new Static("staTitle","0","0","140","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("Lot 현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("LOTSTA");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_locklist",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_locklist","0","staTitle:5",null,null,"0","50.14%",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_locklist");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"50\"/><Column size=\"250\"/><Column size=\"70\"/><Column size=\"200\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"200\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" colspan=\"15\" text=\"제공현황\"/><Cell col=\"17\" colspan=\"2\" text=\"재공계\"/><Cell col=\"19\" colspan=\"2\" text=\"인수대기\"/><Cell col=\"21\" colspan=\"2\" text=\"인수\"/><Cell col=\"23\" colspan=\"2\" text=\"작업시작\"/><Cell col=\"25\" colspan=\"2\" text=\"작업완료\"/><Cell col=\"27\" colspan=\"5\" text=\"Locking 정보\"/><Cell row=\"1\" col=\"2\" text=\"양산구분\"/><Cell row=\"1\" col=\"3\" text=\"품목코드\"/><Cell row=\"1\" col=\"4\" text=\"Rev.\" tooltiptext=\"INNERREVISION\"/><Cell row=\"1\" col=\"5\" text=\"품목명\"/><Cell row=\"1\" col=\"6\" text=\"공정수순\"/><Cell row=\"1\" col=\"7\" text=\"공정명\"/><Cell row=\"1\" col=\"8\" text=\"Site ID\"/><Cell row=\"1\" col=\"9\" text=\"작업장\"/><Cell row=\"1\" col=\"10\" text=\"Roll/Sheet\"/><Cell row=\"1\" col=\"11\" text=\"Lot No.\"/><Cell row=\"1\" col=\"12\" text=\"단위\"/><Cell row=\"1\" col=\"13\" text=\"리드타임\"/><Cell row=\"1\" col=\"14\" text=\"LOT 투입일\"/><Cell row=\"1\" col=\"15\" text=\"납기일자\"/><Cell row=\"1\" col=\"16\" text=\"잔여일수\"/><Cell row=\"1\" col=\"17\" text=\"수량\"/><Cell row=\"1\" col=\"18\" text=\"수량(PNL)\"/><Cell row=\"1\" col=\"19\" text=\"PCS\"/><Cell row=\"1\" col=\"20\" text=\"PNL\"/><Cell row=\"1\" col=\"21\" text=\"PCS\"/><Cell row=\"1\" col=\"22\" text=\"PNL\"/><Cell row=\"1\" col=\"23\" text=\"PCS\"/><Cell row=\"1\" col=\"24\" text=\"PNL\"/><Cell row=\"1\" col=\"25\" text=\"PCS\"/><Cell row=\"1\" col=\"26\" text=\"PNL\"/><Cell row=\"1\" col=\"27\" text=\"Locking 여부\"/><Cell row=\"1\" col=\"28\" text=\"Locking 분류\"/><Cell row=\"1\" col=\"29\" text=\"Locking 사유\"/><Cell row=\"1\" col=\"30\" text=\"Locking 설정자\"/><Cell row=\"1\" col=\"31\" text=\"Locking 설정일\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow + 1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\"/><Cell col=\"3\" textAlign=\"left\"/><Cell col=\"4\"/><Cell col=\"5\" textAlign=\"left\"/><Cell col=\"6\"/><Cell col=\"7\" textAlign=\"left\"/><Cell col=\"8\"/><Cell col=\"9\" textAlign=\"left\"/><Cell col=\"10\"/><Cell col=\"11\" textAlign=\"left\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell col=\"26\"/><Cell col=\"27\"/><Cell col=\"28\"/><Cell col=\"29\"/><Cell col=\"30\"/><Cell col=\"31\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static00","40%","grd_locklist:0","58","15",null,null,null,null,null,null,this.div_work.form);
            obj.set_text("h15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_Down","40%","Static00:0","24","23",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_shuttleB");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_Up","btn_Down:10","Static00:0","24","23",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_shuttleT");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static01","40%","btn_Down:0","58","15",null,null,null,null,null,null,this.div_work.form);
            obj.set_text("h15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("staTitle1","0","Static00:5","160","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_text("Locking Lot 대상");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("LOCKINGLOTTARGET");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_lock",null,"Static01:-29","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("grd_list3",null,"Static01:1","290",null,"0","23",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.getSetter("tabindex").set("0");
            obj.set_cssclass("div_WF_detail");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_lockclass","0","10","103","20",null,null,null,null,null,null,this.div_work.form.grd_list3.form);
            obj.set_text("분류");
            obj.set_cssclass("sta_WF_label");
            this.div_work.form.grd_list3.addChild(obj.name, obj);

            obj = new Combo("cbo_lockclass","sta_lockclass:5",null,"165","20",null,"sta_lockclass:-20",null,null,null,null,this.div_work.form.grd_list3.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CODECOLUMN");
            obj.set_datacolumn("DATACOLUMN");
            var div_work_form_grd_list3_form_cbo_lockclass_innerdataset = new nexacro.NormalDataset("div_work_form_grd_list3_form_cbo_lockclass_innerdataset", obj);
            div_work_form_grd_list3_form_cbo_lockclass_innerdataset._setContents("<ColumnInfo><Column id=\"CODECOLUMN\" size=\"256\"/><Column id=\"DATACOLUMN\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODECOLUMN\"/><Col id=\"DATACOLUMN\"/></Row></Rows>");
            obj.set_innerdataset(div_work_form_grd_list3_form_cbo_lockclass_innerdataset);
            obj.set_text("");
            obj.set_index("0");
            this.div_work.form.grd_list3.addChild(obj.name, obj);

            obj = new Static("sta_reasoncode","0","sta_lockclass:5","103","20",null,null,null,null,null,null,this.div_work.form.grd_list3.form);
            obj.set_text("사유");
            obj.set_cssclass("sta_WF_label");
            this.div_work.form.grd_list3.addChild(obj.name, obj);

            obj = new Combo("cbo_reasoncode","sta_reasoncode:5",null,"165","20",null,"sta_reasoncode:-20",null,null,null,null,this.div_work.form.grd_list3.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CODECOLUMN");
            obj.set_datacolumn("DATACOLUMN");
            var div_work_form_grd_list3_form_cbo_reasoncode_innerdataset = new nexacro.NormalDataset("div_work_form_grd_list3_form_cbo_reasoncode_innerdataset", obj);
            div_work_form_grd_list3_form_cbo_reasoncode_innerdataset._setContents("<ColumnInfo><Column id=\"CODECOLUMN\" size=\"256\"/><Column id=\"DATACOLUMN\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODECOLUMN\"/><Col id=\"DATACOLUMN\"/></Row></Rows>");
            obj.set_innerdataset(div_work_form_grd_list3_form_cbo_reasoncode_innerdataset);
            obj.set_text("");
            obj.set_index("0");
            this.div_work.form.grd_list3.addChild(obj.name, obj);

            obj = new Static("sta_comments","0","sta_reasoncode:5",null,"20","10",null,null,null,null,null,this.div_work.form.grd_list3.form);
            obj.set_text("특이사항");
            obj.set_cssclass("sta_WF_label");
            this.div_work.form.grd_list3.addChild(obj.name, obj);

            obj = new TextArea("txa_comments","10","sta_comments:5",null,null,"10","10",null,null,null,null,this.div_work.form.grd_list3.form);
            obj.set_taborder("5");
            this.div_work.form.grd_list3.addChild(obj.name, obj);

            obj = new Grid("grd_lock","0","staTitle1:0",null,null,"grd_list3:10","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_lock");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"50\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"생산구분\"/><Cell col=\"3\" text=\"품목코드\"/><Cell col=\"4\" text=\"Rev.\" tooltiptext=\"INNERREVISION\"/><Cell col=\"5\" text=\"품목명\"/><Cell col=\"6\" text=\"공정수순\"/><Cell col=\"7\" text=\"공정명\"/><Cell col=\"8\" text=\"Site ID\"/><Cell col=\"9\" text=\"작업장\"/><Cell col=\"10\" text=\"Roll/Sheet\"/><Cell col=\"11\" text=\"Lot No.\"/><Cell col=\"12\" text=\"단위\"/><Cell col=\"13\" text=\"리드타임\"/><Cell col=\"14\" text=\"LOT 투입일\"/><Cell col=\"15\" text=\"납기일자\"/><Cell col=\"16\" text=\"잔여일수\"/><Cell col=\"17\" text=\"수량\"/><Cell col=\"18\" text=\"Locking 여부\"/><Cell col=\"19\" text=\"Locking 분류\"/><Cell col=\"20\" text=\"Locking 사유\"/><Cell col=\"21\" text=\"Locking 설정자\"/><Cell col=\"22\" text=\"Locking 설정일\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow + 1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\"/><Cell col=\"3\" textAlign=\"left\"/><Cell col=\"4\"/><Cell col=\"5\" textAlign=\"left\"/><Cell col=\"6\"/><Cell col=\"7\" textAlign=\"left\"/><Cell col=\"8\"/><Cell col=\"9\" textAlign=\"left\"/><Cell col=\"10\"/><Cell col=\"11\" textAlign=\"left\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_locklist","70","0","140","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("11");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_lock","130","Static00:5","140","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("12");
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

            obj = new BindItem("item02","tab_search.Tabpage1.form.edt_lotid","value","ds_search","P_LOTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item03","tab_search.Tabpage1.form.edt_productdefid","value","ds_search","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item04","tab_search.Tabpage1.form.edt_productname","value","ds_search","PRODUCTNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item05","tab_search.Tabpage1.form.cbo_lottype","value","ds_search","P_LOTTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item06","tab_search.Tabpage1.form.cbo_productdeftype","value","ds_search","P_PRODUCTDEFTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item07","tab_search.Tabpage1.form.cbo_owntype","value","ds_search","P_OWNTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item08","tab_search.Tabpage1.form.cbo_locking","value","ds_search","P_LOCKING");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","tab_search.Tabpage1.form.cbo_productdefversion","value","ds_search","PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM03700M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM03700M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PCM03700M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: LOT Locking
         * 파일명 		: PCM03700M.xfdl
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
        	this.fn_initCombo();
        	this.fn_initGrid();
        	this.fn_initEvent();
        	this.fn_initParam();
        };

        /* 초기값 셋팅 */
        this.fn_initParam = function ()
        {
        	// 화면 호출시 셋팅된 argument 가 존재하면 가져온다.
        	/*
        	var sArgName = this.gfn_getFrameAguments("menuName");
        	if (sArgName != "")
        	{
        		var data = JSON.parse(this.gfn_getFrameAguments("objList"));
        		this.tab_search.Tabpage1.form.edt_lotid.set_value(                         data.LOTID );

        		this.tab_search.Tabpage1.form.edt_productdefid.set_value(           data.PRODUCTDEFID );
        		this.tab_search.Tabpage1.form.edt_productname.set_value(          data.PRODUCTDEFNAME );
        		this.tab_search.Tabpage1.form.cbo_productdefversion.set_value( data.PRODUCTDEFVERSION );

        		this.tab_search.Tabpage1.form.edt_areaid.set_value(                     data.AREANAME );
        		this.ds_search.setColumn(                                  0, "P_AREAID", data.AREAID );
        	}
        	*/
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
            trace( 'ds_search xml ?' + this.ds_search.saveXML() );
        	this.ds_locklist.clearData();
        	var sSvcID 			= "selectLockList";
        	var sController 	= "/pcm03700/selectLockList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_locklist=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 저장
        */
        this.fn_save = function (obj, e)
        {
        	trace(' <<<<< cbo_lockclass  ? ' +  this.div_work.form.grd_list3.form.cbo_lockclass.value );
        	trace(' <<<<< cbo_reasoncode ? ' + this.div_work.form.grd_list3.form.cbo_reasoncode.value );
        	trace(' <<<<< txa_comments   ? ' +   this.div_work.form.grd_list3.form.txa_comments.value );
        	if (!this.gfn_dsIsUpdated(this.ds_lock) )
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");
        		return;
        	}

        	if (new String(this.div_work.form.grd_list3.form.cbo_lockclass.value).valueOf() == "undefined")
        	{
        		this.gfn_Message("분류를 선택 해주십시요", "", "error", "ok");
        		return;
        	}

        	if (new String(this.div_work.form.grd_list3.form.cbo_reasoncode.value).valueOf() == "undefined")
        	{
        		this.gfn_Message("사유를 선택 해주십시요", "", "error", "ok");
        		return;
        	}

        	trace(' <<<<< ds_lock   ? ' +   this.ds_lock.rowcount );
        	var lotid            = [];
        	var processsegmentid = [];
        	for (var i = 0; i < this.ds_lock.rowcount; i++)
        	{
        		lotid.push(                         this.ds_lock.getColumn( i, "LOTID" ) );
        		processsegmentid.push(   this.ds_lock.getColumn( i, "PROCESSSEGMENTID" ) );
        	};

        	this.ds_lotlocking.clear();
        	this.ds_lotlocking.addColumn( "LOTID",            "STRING", 255);
        	this.ds_lotlocking.addColumn( "LOCKINGTYPE",      "STRING", 255);
        	this.ds_lotlocking.addColumn( "LOCKINGCODE",      "STRING", 255);
        	this.ds_lotlocking.addColumn( "PROCESSSEGMENTID", "STRING", 255);

        	this.ds_lotlocking.addRow();
        	this.ds_lotlocking.setColumn( 0, "LOTID",                                                  lotid.join(",") );
        	this.ds_lotlocking.setColumn( 0, "LOCKINGTYPE",      this.div_work.form.grd_list3.form.cbo_lockclass.value );
        	this.ds_lotlocking.setColumn( 0, "LOCKINGCODE",     this.div_work.form.grd_list3.form.cbo_reasoncode.value );
        	this.ds_lotlocking.setColumn( 0, "PROCESSSEGMENTID",                            processsegmentid.join(",") );

        	var sSvcID 			= "selectLotLocking";
        	var sController 	= "/pcm03700/selectLotLocking.do";
        	var sInDatasets 	= "ds_lotlocking=ds_lotlocking";
        	var sOutDatasets 	= "ds_lotlocking=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색 초기화
        */
        this.fn_searchClear = function(obj, e)
        {
        	this.ds_cbo_ProdVersion.deleteAll();
        	this.AddAll(this.ds_cbo_ProdVersion,"PRODUCTDEFVERSIONCODE","PRODUCTDEFVERSIONNAME");
        	this.ds_search.setColumn(0, "PRODUCTDEFVERSION", "");

        	this.tab_search.Tabpage1.form.edt_productdefid.set_value(     "" );
        	this.tab_search.Tabpage1.form.edt_productname.set_value(      "" );
        	this.tab_search.Tabpage1.form.edt_lotid.set_value(            "" );
        	this.tab_search.Tabpage1.form.edt_areaid.set_value(           "" );

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

        	this.tab_search.Tabpage1.form.cbo_lottype.set_index(        1 );
        	this.tab_search.Tabpage1.form.cbo_productdeftype.set_index( 1 );
        	this.tab_search.Tabpage1.form.cbo_owntype.set_index(        0 );
        	this.tab_search.Tabpage1.form.cbo_locking.set_index(        0 );

        	this.div_work.form.grd_list3.form.cbo_lockclass.set_index(   0 );
        	this.div_work.form.grd_list3.form.cbo_reasoncode.set_index(  0 );
        	this.div_work.form.grd_list3.form.txa_comments.set_value( ""   );


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
        	this.div_work.form.sta_cnt_ds_locklist.set_text( "Count : <fc v='#f31d24'>" + this.ds_locklist.getRowCount() + "</fc>");
        	if (errCD != 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        		return;
        	}

        	switch (trId)
        	{
        		case "selectComboList" :
        		{
        			this.addChild("ds_locking", new Dataset());
        			this.ds_locking.addColumn( "CODECOLUMN", "STRING", 255);
        			this.ds_locking.addColumn( "DATACOLUMN", "STRING", 255);
        			this.ds_combo.filter( "" );
        			this.ds_combo.filter("CODECOLYPE == 'ALL' || CODECOLYPE == 'LOCKING'");
        			this.ds_locking.copyData(this.ds_combo, true);
        			this.tab_search.Tabpage1.form.cbo_locking.setInnerDataset( this.ds_locking );

        			this.addChild("ds_lockclass", new Dataset());
        			this.ds_lockclass.addColumn( "CODECOLUMN", "STRING", 255);
        			this.ds_lockclass.addColumn( "DATACOLUMN", "STRING", 255);
        			this.ds_combo.filter( "" );
        			this.ds_combo.filter("CODECOLYPE == 'ALL' || CODECOLYPE == 'LotLockingCode'");
        			this.ds_lockclass.copyData(this.ds_combo, true);
        			this.ds_lockclass.setColumn( 0, "DATACOLUMN",   "" );
        			this.div_work.form.grd_list3.form.cbo_lockclass.setInnerDataset( this.ds_lockclass );

        			this.addChild("ds_reasoncode", new Dataset());

        			this.tab_search.Tabpage1.form.cbo_lottype.set_index(        1 );
        			this.tab_search.Tabpage1.form.cbo_productdeftype.set_index( 1 );
        			this.tab_search.Tabpage1.form.cbo_owntype.set_index(        0 );

        			this.div_work.form.grd_list3.form.cbo_lockclass.set_index(   0 );
        			this.div_work.form.grd_list3.form.cbo_reasoncode.set_index(  0 );
        			this.div_work.form.grd_list3.form.txa_comments.set_wordWrap(       "char" );
        			this.div_work.form.grd_list3.form.txa_comments.set_scrolltype( "vertical" );
        		}
        		break;
        		case "selectLockList" :
        		{
        			if (this.ds_locklist.getRowCount() == 0)
        			{
        				this.gfn_Message("NoSelectData", null, "error", "ok");
        				return;
        			};

        			this.ds_locklist.addColumn( "CHK", "STRING", 255 );

        			this.div_work.form.grd_locklist.setFormatColProperty( 0, "band", "left");
        			this.div_work.form.sta_cnt_ds_locklist.set_text( "Count : <fc v='#f31d24'>" + this.ds_locklist.getRowCount() + "</fc>");

        			this.ds_lock.copyData(this.ds_locklist, true);
        			this.ds_lock.clearData();
        		}
        		break;
        		case "selectLotLocking" :
        		{
        			if (this.ds_lotlocking.getRowCount() > 0)
        			{
        				this.gfn_Message("이미 같은 사유로 등록된 정보가 있습니다.", "", "error", "ok");
        				return;
        			}

        			// 저장
        			this.ds_lotlocking.clear();
        			this.ds_lotlocking.addColumn( "LOTID",               "STRING", 255);
        			this.ds_lotlocking.addColumn( "LOCKINGSTATUS",       "STRING", 255);
        			this.ds_lotlocking.addColumn( "LOCKINGTYPE",         "STRING", 255);
        			this.ds_lotlocking.addColumn( "LOCKINGCODE",         "STRING", 255);
        			this.ds_lotlocking.addColumn( "COMMENTS",            "STRING", 255);
        			this.ds_lotlocking.addColumn( "UNLOCKINGCODE",       "STRING", 255);
        			this.ds_lotlocking.addColumn( "RELEASECOMMENTS",     "STRING", 255);
        			this.ds_lotlocking.addColumn( "CREATOR",             "STRING", 255);
        			this.ds_lotlocking.addColumn( "TXNUSER",             "STRING", 255);
        			this.ds_lotlocking.addColumn( "TXNREASONCODECLASS",  "STRING", 255);
        			this.ds_lotlocking.addColumn( "TXNREASONCODE",       "STRING", 255);
        			this.ds_lotlocking.addColumn( "TXNCOMMENT",          "STRING", 255);
        			this.ds_lotlocking.addColumn( "ISLOCKING",           "STRING", 255);
        			this.ds_lotlocking.addColumn( "MODIFIER",            "STRING", 255);
        			this.ds_lotlocking.addColumn( "LASTTXNID",           "STRING", 255);
        			this.ds_lotlocking.addColumn( "LASTTXNUSER",         "STRING", 255);

        			for (var i = 0; i < this.ds_lock.rowcount; i++)
        			{
        				this.ds_lotlocking.addRow();
        				this.ds_lotlocking.setColumn( i, "LOTID",                         this.ds_lock.getColumn( i, "LOTID" ) );
        				this.ds_lotlocking.setColumn( i, "LOCKINGSTATUS",                                                  "Y" );
        				this.ds_lotlocking.setColumn( i, "LOCKINGTYPE",  this.div_work.form.grd_list3.form.cbo_lockclass.value );
        				this.ds_lotlocking.setColumn( i, "LOCKINGCODE", this.div_work.form.grd_list3.form.cbo_reasoncode.value );
        				this.ds_lotlocking.setColumn( i, "COMMENTS",      this.div_work.form.grd_list3.form.txa_comments.value );
        				this.ds_lotlocking.setColumn( i, "UNLOCKINGCODE",                                                   "" );
        				this.ds_lotlocking.setColumn( i, "RELEASECOMMENTS",                                                 "" );
        				this.ds_lotlocking.setColumn( i, "CREATOR",                                      this.gf_getUserAcnt() );
        				this.ds_lotlocking.setColumn( i, "TXNUSER",                                      this.gf_getUserAcnt() );
        				this.ds_lotlocking.setColumn( i, "TXNREASONCODECLASS",                                              "" );
        				this.ds_lotlocking.setColumn( i, "TXNREASONCODE",                                                   "" );
        				this.ds_lotlocking.setColumn( i, "TXNCOMMENT",                                                      "" );
        				this.ds_lotlocking.setColumn( i, "ISLOCKING",                                                      "Y" );
        				this.ds_lotlocking.setColumn( i, "MODIFIER",                                     this.gf_getUserAcnt() );
        				this.ds_lotlocking.setColumn( i, "LASTTXNID",                                       "InsertLotLocking" );
        				this.ds_lotlocking.setColumn( i, "LASTTXNUSER",                                  this.gf_getUserAcnt() );
        			};

        			trace( 'ds_lotlocking  ?' + this.ds_lotlocking.saveXML() );
        			//

        			var sSvcID 			= "insertLotLocking";
        			var sController 	= "/pcm03700/insertLotLocking.do";
        			var sInDatasets 	= "ds_lotlocking=ds_lotlocking";
        			var sOutDatasets 	= "";
        			var sArgs 			= "";
        			this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        		}
        		break;
        		case "insertLotLocking" :
        		{

        			var lotid            = [];
        			var processsegmentid = [];
        			for (var i = 0; i < this.ds_lock.rowcount; i++)
        			{
        				lotid.push(                         this.ds_lock.getColumn( i, "LOTID" ) );
        				processsegmentid.push(   this.ds_lock.getColumn( i, "PROCESSSEGMENTID" ) );
        			};

        			this.ds_lotlocking.clear();
        			this.ds_lotlocking.addColumn( "LOTID",            "STRING", 255);
        			this.ds_lotlocking.addColumn( "LOCKINGTYPE",      "STRING", 255);
        			this.ds_lotlocking.addColumn( "LOCKINGCODE",      "STRING", 255);
        			this.ds_lotlocking.addColumn( "PROCESSSEGMENTID", "STRING", 255);

        			this.ds_lotlocking.addRow();
        			this.ds_lotlocking.setColumn( 0, "LOTID",                                                  lotid.join(",") );
        			this.ds_lotlocking.setColumn( 0, "LOCKINGTYPE",      this.div_work.form.grd_list3.form.cbo_lockclass.value );
        			this.ds_lotlocking.setColumn( 0, "LOCKINGCODE",     this.div_work.form.grd_list3.form.cbo_reasoncode.value );
        			this.ds_lotlocking.setColumn( 0, "PROCESSSEGMENTID",                            processsegmentid.join(",") );

        			var sSvcID 			= "insertLotLockingChk";
        			var sController 	= "/pcm03700/selectLotLocking.do";
        			var sInDatasets 	= "ds_lotlocking=ds_lotlocking";
        			var sOutDatasets 	= "ds_lotlocking=output";
        			var sArgs 			= "";
        			this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        		}
        		break;
        		case "insertLotLockingChk" :
        		{
        			if (this.ds_lotlocking.getRowCount() < 1)
        			{
        				this.gfn_Message("에러가 발생하였습니다.", "", "error", "ok");
        				return;
        			}

        			this.gfn_Message("정상적으로 등록 되었습니다.", "", "information", "ok");

        			this.ds_lock.clear();
        			this.ds_locklist.clear();
        			this.fn_search();
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
        		case "POPUP_LOTID" :
        		{
        			this.tab_search.Tabpage1.form.edt_lotid.set_value(rtn);
        		}
        		break;
        		case "POPUP_PRODUCTDEFID" :
        		{
        			this.setProduct_ProdVersion(rtn, this.ds_cbo_ProdVersion, this.ds_search, "B");
        		    this.tab_search.Tabpage1.form.edt_productdefid.set_value(rtn[0]);
        			this.tab_search.Tabpage1.form.edt_productname.set_value(rtn[1]);
        			this.tab_search.Tabpage1.form.cbo_productdefversion.set_value(rtn[2]);
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
        		"P_USER",
        		"P_LANGUAGETYPE",
        		"P_PLANTID",
        		"P_LOTID",
        		"PRODUCTDEFID",
        		"PRODUCTDEFVERSION",
        		"PRODUCTNAME",
        		"P_LOTTYPE",
        		"P_PRODUCTDEFTYPE",
        		"P_OWNTYPE",
        		"P_LOCKING",
        		"P_AREAID"
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

        	this.ds_cbo_ProdVersion.deleteAll();
        	this.AddAll(this.ds_cbo_ProdVersion,"PRODUCTDEFVERSIONCODE","PRODUCTDEFVERSIONNAME");
        	this.ds_search.setColumn(0, "PRODUCTDEFVERSION", "");
        };

        this.fn_initGrid = function ()
        {

        	// ds 세팅 및 포맷타입 설정
        	var layout = [
        		"",							//
        		"CHK",						//
        		"LOTTYPE",					//양산구분
        		"PRODUCTDEFID",				//품목코드
        		"PRODUCTDEFVERSION",		//Rev.
        		"PRODUCTDEFNAME",			//품목명
        		"USERSEQUENCE",				//공정수순
        		"PROCESSSEGMENTNAME",		//공정명
        		"PLANTID",					//Site ID
        		"AREANAME",					//작업장
        		"RTRSHT",					//Roll/Sheet
        		"LOTID",					//Lot No.
        		"UNIT",						//단위
        		"LEADTIME",					//리드타임
        		"LOTINPUTDATE",				//LOT 투입일
        		"DELIVERYDATE",				//납기일자
        		"LEFTDATE",				    //잔여일수
        		"QTY",						//재공계-수량
        		"PANELQTY",					//재공계-수량(PNL)
        		"SENDPCSQTY",				//인수대기-PSC
        		"SENDPANELQTY",				//인수대기-PLN
        		"WORKENDPCSQTY",			//인수-PSC
        		"WORKENDPANELQTY",			//인수-PLN
        		"RECEIVEPCSQTY",			//작업시작-PSC
        		"RECEIVEPANELQTY",			//작업시작-PLN
        		"WORKSTARTPCSQTY",			//작업완료-PSC
        		"WORKSTARTPANELQTY",		//작업완료-PLN
        		"ISLOCKING",				//Locking 여부
        		"LOCKINGTYPE",				//Locking 분류
        		"LOCKINGREASON",			//Locking 사유
        		"LOCKINGUSER",				//Locking 설정자
        		"LOCKINGDATE"				//Locking 설정일
        	];

        	// ds 세팅 및 포맷타입 설정
        	var type = [
        		"",							//
        		"",							//
        		"CENTER",					//양산구분
        		"CENTER",					//품목코드
        		"CENTER",					//Rev.
        		"LEFT",						//품목명
        		"CENTER",					//공정수순
        		"LEFT",						//공정명
        		"CENTER",					//Site ID
        		"LEFT",						//작업장
        		"CENTER",					//Roll/Sheet
        		"LEFT",						//Lot No.
        		"CENTER",					//단위
        		"RIGHT",					//리드타임
        		"CENTER",					//LOT 투입일
        		"CENTER",					//납기일자
        		"CENTER",				    //잔여일수
        		"RIGHT",					//재공계-수량
        		"RIGHT",					//재공계-수량(PNL)
        		"RIGHT",					//인수대기-PSC
        		"RIGHT",					//인수대기-PLN
        		"RIGHT",					//인수-PSC
        		"RIGHT",					//인수-PLN
        		"RIGHT",					//작업시작-PSC
        		"RIGHT",					//작업시작-PLN
        		"RIGHT",					//작업완료-PSC
        		"RIGHT",					//작업완료-PLN
        		"CENTER",					//Locking 여부
        		"CENTER",					//Locking 분류
        		"CENTER",					//Locking 사유
        		"CENTER",					//Locking 설정자
        		"CENTER"					//Locking 설정일
        	];

        	this.ds_layout.addColumn( "BIND_ID", "STRING", 255);
        	this.ds_layout.addColumn( "TYPE_ID", "STRING", 255);
        	for (var i = 0; i < layout.length; i++)
        	{
        		this.ds_layout.addRow();
        		this.ds_layout.setColumn( i, "BIND_ID", layout[i] );
        		this.ds_layout.setColumn( i, "TYPE_ID",   type[i] );
        	};

        	for (var i = 0; i < this.ds_layout.getRowCount(); i++)
        	{
        		if (this.ds_layout.getColumn( i, "BIND_ID" ) != "")
        		{
        			this.div_work.form.grd_locklist.setCellProperty( "body", i, "text", "bind:" + this.ds_layout.getColumn( i, "BIND_ID" ) );
        		}
        		if (this.ds_layout.getColumn( i, "BIND_ID" ) != "CHK")
        		{
        			this.div_work.form.grd_locklist.setCellProperty( "body", i, "displaytype",                                   "normal"  );
        		}

        		this.div_work.form.grd_locklist.setCellProperty( "body", i, "textAlign",          this.ds_layout.getColumn( i, "TYPE_ID" ) );
        	};

        	for (var i = 0; i < this.ds_layout.getRowCount(); i++)
        	{
        		switch (this.ds_layout.getColumn( i, "BIND_ID" ))
        		{
        			case "PANELQTY"          :
        			case "SENDPCSQTY"        :
        			case "SENDPANELQTY"      :
        			case "WORKENDPCSQTY"     :
        			case "WORKENDPANELQTY"   :
        			case "RECEIVEPCSQTY"     :
        			case "RECEIVEPANELQTY"   :
        			case "WORKSTARTPCSQTY"   :
        			case "WORKSTARTPANELQTY" :
        				//
        			break;
        			default :
        			{
        				if (this.ds_layout.getColumn( i, "BIND_ID" ) != "")
        				{
        					this.div_work.form.grd_lock.setCellProperty( "body", i, "text", "bind:" + this.ds_layout.getColumn( i, "BIND_ID" ) );
        				}
        				if (this.ds_layout.getColumn( i, "BIND_ID" ) != "CHK")
        				{
        					this.div_work.form.grd_lock.setCellProperty( "body", i, "displaytype",                                   "normal"  );
        				}

        				this.div_work.form.grd_lock.setCellProperty( "body", i, "textAlign",          this.ds_layout.getColumn( i, "TYPE_ID" ) );
        			}
        			break;
        		};
        	};
        };

        this.fn_initEvent = function ()
        {
        	this.tab_search.Tabpage1.form.btn_edt_productdefid.addEventHandler(     "onclick", this.tab_search.Tabpage1.form.btn_edt_onclick, this);
        	this.tab_search.Tabpage1.form.btn_edt_productname.addEventHandler(      "onclick", this.tab_search.Tabpage1.form.btn_edt_onclick, this);
        	this.tab_search.Tabpage1.form.btn_edt_areaid.addEventHandler(           "onclick", this.tab_search.Tabpage1.form.btn_edt_onclick, this);
        	this.tab_search.Tabpage1.form.btn_edt_processsegmentid.addEventHandler( "onclick", this.tab_search.Tabpage1.form.btn_edt_onclick, this);
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.tab_search.Tabpage1.form.btn_edt_onclick = function(obj, e)
        {

        	switch(obj.name)
        	{
        		case "btn_edt_productdefid" :
        		case "btn_edt_productname"  :
        		{
        			this.ds_search.setColumn( 0, "PRODUCTDEFID",      "" );
        			this.tab_search.Tabpage1.form.cbo_productdefversion.set_index(0);
        			this.ds_search.setColumn( 0, "PRODUCTNAME",       "" );
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
        };

        this.tab_search_Tabpage1_btn_popup_onclick = function(obj, e)
        {
        	var oArg = {};
        	switch(obj.name)
        	{
        		case "btn_lotid" :
        		{
        			if (this.ds_search.getColumn( 0, "P_LOTID" ) != "")
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
        			oArg.arg_searchStr   = "P_LOTID=" + this.ds_search.getColumn( 0, "P_LOTID" );
        			this.gfn_openPopup( "POPUP_LOTID", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        		}
        		break;
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
        			oArg.arg_searchStr   = "P_PRODUCTDEFNAME=" + this.tab_search.Tabpage1.form.edt_productdefid.value ;
        			this.gfn_openPopup( "POPUP_PRODUCTDEFID", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        		}
        		break;;
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
        		default :
        		{
        		}
        		break;
        	};
        };

        this.div_work_form_btn_down_onclick = function(obj, e)
        {
        	var chk = false;
        	for (var i = 0; i < this.ds_locklist.rowcount; i++)
        	{
        		if (this.ds_locklist.getColumn( i, "CHK" ) == true)
        		{
        			chk = true;
        			break;
        		}
        	};

        	if (!chk)
        	{
        		this.gfn_Message("LOT Locking 선택 해주십시요", "", "error", "ok");
        		return;
        	};

        	for (var i = 0; i < this.ds_locklist.getRowCount(); i++)
        	{
        		if (this.ds_locklist.getColumn( i, "CHK") == true)
        		{
        			this.ds_lock.copyRow(this.ds_lock.addRow(), this.ds_locklist, i);
        			this.ds_lock.setColumn( (this.ds_lock.getRowCount() - 1), "CHK",  "" );
        		}
        	};

        	for (var i = this.ds_locklist.getRowCount(); i >= 0; i--)
        	{
        		if (this.ds_locklist.getColumn( i, "CHK") == true)
        		{
        			this.ds_locklist.deleteRow( i );
        		}
        	};

        	this.div_work.form.sta_cnt_ds_lock.set_text( "Count : <fc v='#f31d24'>" + this.ds_lock.getRowCount() + "</fc>");
        	this.div_work.form.sta_cnt_ds_locklist.set_text( "Count : <fc v='#f31d24'>" + this.ds_locklist.getRowCount() + "</fc>");
        };

        this.div_work_form_btn_up_onclick = function(obj, e)
        {
        	var chk = false;
        	for (var i = 0; i < this.ds_lock.rowcount; i++)
        	{
        		if (this.ds_lock.getColumn( i, "CHK" ) == true)
        		{
        			chk = true;
        			break;
        		}
        	};

        	if (!chk)
        	{
        		this.gfn_Message("Locking 대상을 선택 해주십시요", "", "error", "ok");
        		return;
        	}

        	for (var i = 0; i < this.ds_lock.getRowCount(); i++)
        	{
        		if (this.ds_lock.getColumn( i, "CHK") == true)
        		{
        			this.ds_locklist.copyRow(this.ds_locklist.addRow(), this.ds_lock, i);
        			this.ds_locklist.setColumn( (this.ds_locklist.getRowCount() - 1), "CHK",  "" );
        		}
        	};

        	for (var i = this.ds_lock.getRowCount(); i >= 0; i--)
        	{
        		if (this.ds_lock.getColumn( i, "CHK") == true)
        		{
        			this.ds_lock.deleteRow( i );
        		}
        	};

        	this.div_work.form.sta_cnt_ds_lock.set_text( "Count : <fc v='#f31d24'>" + this.ds_lock.getRowCount() + "</fc>");
        	this.div_work.form.sta_cnt_ds_locklist.set_text( "Count : <fc v='#f31d24'>" + this.ds_locklist.getRowCount() + "</fc>");
        };

        this.div_work_grd_list3_cbo_lockclass_canitemchange = function(obj, e)
        {
        	this.ds_reasoncode.addColumn( "CODECOLUMN", "STRING", 255);
        	this.ds_reasoncode.addColumn( "DATACOLUMN", "STRING", 255);
        	this.ds_combo.filter( "" );
        	this.ds_combo.filter("CODECOLYPE == 'ALL' || CODECOLYPE == '" + e.postvalue + "'");
        	this.ds_reasoncode.copyData(this.ds_combo, true);
        	this.ds_reasoncode.setColumn( 0, "DATACOLUMN",   "" );
        	this.div_work.form.grd_list3.form.cbo_reasoncode.setInnerDataset( this.ds_reasoncode );
        };

        /**********************************************************************************
         * Function Name: gfn_findData
         * Description  : dataSet object에서 키에 해당되는 Row를 찾아서 rowpostion 전달
         * Arguments    : ObjDs:dataset, strIdCol:키칼럼, strId:키값, strSubCol:서브키칼럼, strSubId:서브 키값
         * Return       : rowpostion
         **********************************************************************************/
        this.gfn_findData = function (objDs, strIdCol, strId, strSubCol, strSubId)
        {
        	if (this.gfn_isNull(strSubCol))
        	{
        		return objDs.findRow(strIdCol, strId);
        	}

        	return objDs.findRowExpr(strIdCol + " == '" + strId + "' && " + strSubCol + " == '" + strSubId + "'");
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.tab_search.Tabpage1.form.btn_lotid.addEventHandler("onclick",this.tab_search_Tabpage1_btn_popup_onclick,this);
            this.tab_search.Tabpage1.form.btn_productdefid.addEventHandler("onclick",this.tab_search_Tabpage1_btn_popup_onclick,this);
            this.tab_search.Tabpage1.form.btn_areaid.addEventHandler("onclick",this.tab_search_Tabpage1_btn_popup_onclick,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.div_work.form.btn_Down.addEventHandler("onclick",this.div_work_form_btn_down_onclick,this);
            this.div_work.form.btn_Up.addEventHandler("onclick",this.div_work_form_btn_up_onclick,this);
            this.div_work.form.grd_list3.form.cbo_lockclass.addEventHandler("canitemchange",this.div_work_grd_list3_cbo_lockclass_canitemchange,this);
        };
        this.loadIncludeScript("PCM03700M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
