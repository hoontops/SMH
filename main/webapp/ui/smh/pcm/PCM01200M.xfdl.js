(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM01200M");
            this.set_titletext("미투입 현황");
            this.set_tooltiptext("MENU_PG-SG-0100");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"EXCHANGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTLIST\" type=\"STRING\" size=\"256\"/><Column id=\"INNERREVISIONTOTAL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cbo_ProdVersion", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFVERSIONCODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSIONNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_notInputList", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LAYER\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"PCSMM\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"M2\" type=\"STRING\" size=\"256\"/><Column id=\"SALESPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LEFTQTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_salseOrder", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"LINENO\" type=\"STRING\" size=\"256\"/><Column id=\"ISAPPROVAL\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LAYER\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"PCSMM\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"M2\" type=\"STRING\" size=\"256\"/><Column id=\"SALESPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SALSEORDER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_requirementTotal", this);
            obj._setContents("<ColumnInfo><Column id=\"KEYCOLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"NOTINPUTPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"NOTINPUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALREQUIREMENTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFIDDETAIL\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSIONDETAIL\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAMEDETAIL\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
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

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("2");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","150","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_text("Routing 자원/치공구/외주단가 등록");
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

            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip03",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTIONTYPE","108","110","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            obj.set_innerdataset("");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_INNERREVISIONTOTAL","108","160","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_codecolumn("C,YesNo,,Y,Y");
            obj.set_index("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"cbo_INNERREVISIONTOTAL:0","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","206","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPRODUCTIONTYPE","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTIONTYPE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPLANTID","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PLANT");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PLANTID","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_codecolumn("C,SiteType,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPRODUCTDEFID","0","staPLANTID:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_PRODUCTDEFID","251","cbo_PLANTID:5","22","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_finder");
            obj.set_text("");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip01","0","0","15","290",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip00",null,"0","15","290","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","guidetip04:0","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","guidetip04:0","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPRODUCTDEFVERSION","0","staPRODUCTDEFID:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("Rev.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("INNERREVISION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTDEFVERSION","staPRODUCTDEFVERSION:5","60","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_codecolumn("PRODUCTDEFVERSIONCODE");
            obj.set_datacolumn("PRODUCTDEFVERSIONNAME");
            obj.set_innerdataset("ds_cbo_ProdVersion");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPRODUCTDEFNAME","0","staPRODUCTDEFVERSION:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMNAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFNAME","staPRODUCTDEFNAME:5","85","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_enable("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staEXCHANGETYPE","0","245","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("환율구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ExchangeType2");
            obj.set_visible("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_EXCHANGETYPE","108","245","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_codecolumn("C,ExchangeType,,Y,Y");
            obj.set_innerdataset("");
            obj.set_enable("true");
            obj.set_visible("false");
            obj.set_text("");
            obj.set_value("PLAN");
            obj.set_index("-1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_CUSTOMER",null,"cbo_PRODUCTIONTYPE:5","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staCUSTOMER","0","staPRODUCTIONTYPE:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_text("고객");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CUSTOMER");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID","108","35",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_CUSTOMER","108","135",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("23");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_INNERREVISIONTOTAL","0","staCUSTOMER:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("Rev.별 집계여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("24");
            obj.set_tooltiptext("INNERREVISIONTOTAL");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_Main","0","0",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            obj.set_positionstep("0");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab_Main);
            obj.set_text("미투입 List");
            obj.set_tooltiptext("NOTINPUTLIST");
            this.div_work.form.tab_Main.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","89","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("미투입 List");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("NOTINPUTLIST");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_notInputList","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_notInputList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"70\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell tooltiptext=\"ITEMCODE\" text=\"품목코드\"/><Cell col=\"1\" text=\"Rev.\" tooltiptext=\"INNERREVISION\"/><Cell col=\"2\" tooltiptext=\"ITEMNAME\" text=\"품목명\"/><Cell col=\"3\" tooltiptext=\"CUSTOMER\" text=\"고객\"/><Cell col=\"4\" text=\"품목유형구분\" tooltiptext=\"PRODUCTDEFTYPE\"/><Cell col=\"5\" tooltiptext=\"PRODUCTIONTYPE\" text=\"생산구분\"/><Cell col=\"6\" tooltiptext=\"LAYER\" text=\"층수\"/><Cell col=\"7\" text=\"합수\" tooltiptext=\"ARRAY\"/><Cell col=\"8\" tooltiptext=\"CALCULATION\" text=\"산출수\"/><Cell col=\"9\" tooltiptext=\"OSPDAY21PCS\" text=\"PCS\"/><Cell col=\"10\" text=\"PNL\" tooltiptext=\"OSPDAY01PNL\"/><Cell col=\"11\" tooltiptext=\"M2\" text=\"M2\"/><Cell col=\"12\" tooltiptext=\"SALESPRICEPERHUNDREDMILLION\" text=\"금액(억)\"/><Cell col=\"13\" text=\"Roll/Sheet\" tooltiptext=\"RTRSHT_WORDWRAP\"/><Cell col=\"14\" tooltiptext=\"INPUTSEGMENT\" text=\"투입공정\"/><Cell col=\"15\" text=\"잔량\" tooltiptext=\"LEFTQTY\"/></Band><Band id=\"body\"><Cell text=\"bind:PRODUCTDEFID\" textAlign=\"left\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"1\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"3\" text=\"bind:CUSTOMERNAME\" textAlign=\"left\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFTYPE\"/><Cell col=\"5\" text=\"bind:PRODUCTIONTYPE\"/><Cell col=\"6\" text=\"bind:LAYER\"/><Cell col=\"7\" text=\"bind:PCSPNL\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"number\"/><Cell col=\"8\" text=\"bind:PCSMM\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:QTY\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"number\"/><Cell col=\"10\" text=\"bind:PANELQTY\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"number\"/><Cell col=\"11\" text=\"bind:M2\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"number\"/><Cell col=\"12\" text=\"bind:SALESPRICE\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"number\"/><Cell col=\"13\" text=\"bind:RTRSHT\"/><Cell col=\"14\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"15\" text=\"bind:LEFTQTY\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"number\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" text=\"합계\" tooltiptext=\"TOTALAMOUNT\"/><Cell col=\"3\" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"4\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"5\" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"6\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"7\" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"8\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"9\" expr=\"dataset.getSum(&quot;QTY&quot;)\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"10\" expr=\"dataset.getSum(&quot;PANELQTY&quot;) \" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"11\" expr=\"dataset.getSum(&quot;M2&quot;) \" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"12\" expr=\"dataset.getSum(&quot;SALESPRICE&quot;) \"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/></Band></Format></Formats>");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_notInputList","staTitle:0","0","140","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_notInputList",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab_Main);
            obj.set_text("미투입 자재 소요");
            obj.set_tooltiptext("NOTINPUTMATERIALREQUIREMENT");
            this.div_work.form.tab_Main.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","110","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("미투입 자재 소요");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("NOTINPUTMATERIALREQUIREMENT");
            this.div_work.form.tab_Main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_requirementTotal","staTitle:10","0","140","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_Main.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_requirementTotal",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_Main.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_requirementTotal","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_Main.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_requirementTotal");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"70\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"200\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"품목코드\" tooltiptext=\"ITEMID\"/><Cell col=\"1\" text=\"Rev.\" tooltiptext=\"INNERREVISION\"/><Cell col=\"2\" tooltiptext=\"ITEMNAME\" text=\"품목명\"/><Cell col=\"3\" text=\"MAIN BASE\"/><Cell col=\"4\" text=\"미투입수량(PCS)\" tooltiptext=\"NOTINPUTPCSQTY\"/><Cell col=\"5\" tooltiptext=\"NOTINPUTPNLQTY\" text=\"미투입수량(PNL)\"/><Cell col=\"6\" tooltiptext=\"MATERIALREQUIREQTY\" text=\"자재소요량\"/><Cell col=\"7\" text=\"자재 ID\" tooltiptext=\"CONSUMABLEDEFID\"/><Cell col=\"8\" text=\"자재버전\" tooltiptext=\"CONSUMABLEDEFVERSION\"/><Cell col=\"9\" text=\"자재명\" tooltiptext=\"COMPONENTITEMNAME\"/><Cell col=\"10\" text=\"소요량\" tooltiptext=\"COMPONENTQTY\"/></Band><Band id=\"body\"><Cell text=\"bind:PRODUCTDEFID\" calendardateformat=\"ddd\" displaytype=\"normal\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" textAlign=\"left\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"1\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\" suppress=\"2\" suppressalign=\"middle\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" suppress=\"3\" suppressalign=\"middle\"/><Cell col=\"3\" text=\"bind:CONSUMABLEDEFNAME\" textAlign=\"left\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"normal\" suppress=\"4\" suppressalign=\"middle\"/><Cell col=\"4\" text=\"bind:NOTINPUTPCSQTY\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"number\" suppress=\"5\" suppressalign=\"middle\"/><Cell col=\"5\" text=\"bind:NOTINPUTPNLQTY\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"number\" suppress=\"6\" suppressalign=\"middle\"/><Cell col=\"6\" text=\"bind:MATERIALREQUIREMENTQTY\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###.###\" displaytype=\"mask\" suppress=\"7\" suppressalign=\"middle\"/><Cell col=\"7\" textAlign=\"left\" text=\"bind:CONSUMABLEDEFIDDETAIL\"/><Cell col=\"8\" textAlign=\"left\" text=\"bind:CONSUMABLEDEFVERSIONDETAIL\"/><Cell col=\"9\" textAlign=\"left\" text=\"bind:CONSUMABLEDEFNAMEDETAIL\"/><Cell col=\"10\" displaytype=\"number\" textAlign=\"right\" text=\"bind:QTY\"/></Band></Format></Formats>");
            this.div_work.form.tab_Main.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.div_work.form.tab_Main);
            obj.set_text("미투입(수주별) List");
            obj.set_tooltiptext("NOTINPUTLISTSO");
            this.div_work.form.tab_Main.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","130","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_text("미투입(수주별) List");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("NOTINPUTLISTSO");
            this.div_work.form.tab_Main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_salseOrder","staTitle:10","0","140","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_Main.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_salseOrder",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage3.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_Main.Tabpage3.addChild(obj.name, obj);

            obj = new Grid("grd_salseOrder","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_Main.Tabpage3.form);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_salseOrder");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"S/O번호\" tooltiptext=\"PRODUCTIONORDERID\"/><Cell col=\"1\" text=\"라인\" tooltiptext=\"LINENO\"/><Cell col=\"2\" text=\"승인\" tooltiptext=\"ISAPPROVAL\"/><Cell col=\"3\" tooltiptext=\"ITEMCODE\" text=\"품목코드\"/><Cell col=\"4\" text=\"Rev.\" tooltiptext=\"INNERREVISION\"/><Cell col=\"5\" tooltiptext=\"ITEMNAME\" text=\"품목명\"/><Cell col=\"6\" tooltiptext=\"CUSTOMER\" text=\"고객\"/><Cell col=\"7\" text=\"품목유형구분\" tooltiptext=\"PRODUCTDEFTYPE\"/><Cell col=\"8\" tooltiptext=\"PRODUCTIONTYPE\" text=\"생산구분\"/><Cell col=\"9\" tooltiptext=\"LAYER\" text=\"층수\"/><Cell col=\"10\" text=\"합수\" tooltiptext=\"ARRAY\"/><Cell col=\"11\" tooltiptext=\"CALCULATION\" text=\"산출수\"/><Cell col=\"12\" tooltiptext=\"OSPDAY21PCS\" text=\"PCS\"/><Cell col=\"13\" text=\"PNL\" tooltiptext=\"OSPDAY01PNL\"/><Cell col=\"14\" tooltiptext=\"M2\" text=\"M2\"/><Cell col=\"15\" tooltiptext=\"SALESPRICEPERHUNDREDMILLION\" text=\"금액(억)\"/><Cell col=\"16\" text=\"Roll/Sheet\" tooltiptext=\"RTRSHT_WORDWRAP\"/><Cell col=\"17\" tooltiptext=\"INPUTSEGMENT\" text=\"투입공정\"/><Cell col=\"18\" text=\"수주배분여부\" tooltiptext=\"SALSEORDER\"/></Band><Band id=\"body\"><Cell text=\"bind:PRODUCTIONORDERID\"/><Cell col=\"1\" text=\"bind:LINENO\"/><Cell col=\"2\" text=\"bind:ISAPPROVAL\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"6\" text=\"bind:CUSTOMERNAME\" textAlign=\"left\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"7\" text=\"bind:PRODUCTDEFTYPE\"/><Cell col=\"8\" text=\"bind:PRODUCTIONTYPE\"/><Cell col=\"9\" text=\"bind:LAYER\"/><Cell col=\"10\" text=\"bind:PCSPNL\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"number\"/><Cell col=\"11\" text=\"bind:PCSMM\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"number\"/><Cell col=\"12\" text=\"bind:QTY\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"number\"/><Cell col=\"13\" text=\"bind:PANELQTY\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"number\"/><Cell col=\"14\" text=\"bind:M2\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"number\"/><Cell col=\"15\" text=\"bind:SALESPRICE\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"number\"/><Cell col=\"16\" text=\"bind:RTRSHT\"/><Cell col=\"17\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"18\" textAlign=\"center\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"normal\" text=\"bind:SALSEORDER\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\" text=\"합계\" tooltiptext=\"TOTALAMOUNT\"/><Cell col=\"6\" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"7\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"8\" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"9\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"10\" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"11\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"12\" expr=\"dataset.getSum(&quot;QTY&quot;)\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"13\" expr=\"dataset.getSum(&quot;PANELQTY&quot;) \" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"14\" expr=\"dataset.getSum(&quot;M2&quot;) \" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"15\" expr=\"dataset.getSum(&quot;SALESPRICE&quot;) \"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/></Band></Format></Formats>");
            this.div_work.form.tab_Main.Tabpage3.addChild(obj.name, obj);

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
            obj = new BindItem("item1","tab_search.Tabpage1.form.cbo_PLANTID","value","ds_search","PLANTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tab_search.Tabpage1.form.cbo_PRODUCTDEFVERSION","value","ds_search","PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","tab_search.Tabpage1.form.edt_PRODUCTDEFNAME","value","ds_search","PRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab_search.Tabpage1.form.cbo_PRODUCTIONTYPE","value","ds_search","PRODUCTIONTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tab_search.Tabpage1.form.cbo_EXCHANGETYPE","value","ds_search","EXCHANGETYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","tab_search.Tabpage1.form.edt_PRODUCTDEFID","value","ds_search","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab_search.Tabpage1.form.edt_CUSTOMER","value","ds_search","CUSTOMERNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tab_search.Tabpage1.form.cbo_INNERREVISIONTOTAL","value","ds_search","INNERREVISIONTOTAL");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM01200M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM01200M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PCM01200M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 미투입 현황 조회
         * 파일명 		: PCM01200M.xfdl
         * 작성자 		: 박대호
         * 작성일 		: 2021.4.12
         *
         * 설  명		: 미투입 현황 조회
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.4.12	박대호   	최초작성
         * 2021.4.16	박대호   	수주배분여부 미투입(수주별) List 탭의 수주배분여부 BAS_SALEORDERAPPROVAL 에서 조회되기때문에 Y고정
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

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
         this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);

        	this.fn_initCombo();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	switch(this.div_work.form.tab_Main.tabindex) {
        	case 0 : this.GetNotInputList();
        		break;
        	case 1 : this.GetRequirementTotalList();
        		break;
        	case 2 : this.GetSalseOrderList();
        		break;
        	}
        };

        this.fn_searchValidate = function ()
        {
        	return true;
        };

        /*
        * 기능 : 검색 초기화
        */
        this.fn_searchClear = function(obj,e)
        {
        	this.fn_initCombo();
        	this.ds_search.setColumn(0,"PLANTID",this.gf_getSiteType());

        };

         /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        trace('fn_callBack trId ?' + trId);
        	if (errCD < 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        	}

        	{
        		switch(trId)
        		{
        			case "selectEcmLookupValuesVList2ds_CSiteTypeALL" :
        			{
        				this.ds_search.setColumn(0,"PLANTID",this.gf_getSiteType());
        				break;
        			}
        			case "selectEcmLookupValuesVList2ds_CProductionTypeALL" :
        			{
        				this.ds_search.setColumn(0,"PRODUCTIONTYPE","Production");
        				break;
        			}
        			case "selectProductVersion" :
        			{
        				this.fn_initCombo();
        				break;
        			}
        			case "selectEcmLookupValuesVList2ds_CExchangeType" :
        			{
        				this.ds_search.setColumn(0,"EXCHANGETYPE","Month");
        				break;
        			}
        			default:
        		}
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

        	if(sPopupId == "POPUP_PRODUCTDEFID")
        	{//PRODUCTDEFID|PRODUCTDEFVERSION|PRODUCTDEFNAME
        		this.setProduct_ProdVersion(rtn, this.ds_cbo_ProdVersion, this.ds_search, "B");
        		this.ds_search.setColumn(0,"PRODUCTDEFID",rtn[0]);
        		this.ds_search.setColumn(0,"PRODUCTDEFNAME",rtn[2]);
        		this.ds_search.setColumn(0,"PRODUCTDEFVERSION",rtn[1]);
        	}
        	if(sPopupId == "POPUP_CUSTOMER")
        	{
        		rtn = this.gfn_split(rtn, ",");
        		this.tab_search.Tabpage1.form.edt_CUSTOMER.set_value(rtn[1]);
        		this.ds_search.setColumn( 0, "CUSTOMERID",          rtn[0] );
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
        	this.ds_search.setColumn(0,"PRODUCTIONTYPE","Production");
        	this.ds_search.setColumn(0,"EXCHANGETYPE","Month");
        	this.ds_search.setColumn(0,"INNERREVISIONTOTAL","Y");
        };



        /*
         *	미투입 List 탭 조회
         */
        this.GetNotInputList = function ()
        {
        	this.ds_notInputList.clearData();

        	var sSvcID 			= "selectNotInputList";
        	var sController 	= "/pcm01200/selectNotInputList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_notInputList=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);


        }
        /*
         *	미투입 자재 소요 탭 조회
         */
        this.GetRequirementTotalList = function ()
        {
         	this.ds_requirementTotal.clearData();

         	var sSvcID 			= "selectNotInputMaterialRequirementByConsumableTotalList";
         	var sController 	= "/pcm01200/selectNotInputMaterialRequirementByConsumableTotalList.do";
         	var sInDatasets 	= "INPUT=ds_search";
         	var sOutDatasets 	= "ds_requirementTotal=output";
         	var sArgs 			= "";
         	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        /*
         *	미투입(수주별) List 탭 조회
         */
        this.GetSalseOrderList = function ()
        {
         	this.ds_salseOrder.clearData();

         	var sSvcID 			= "selectNotInputListBySalseOrder";
         	var sController 	= "/pcm01200/selectNotInputListBySalseOrder.do";
         	var sInDatasets 	= "INPUT=ds_search";
         	var sOutDatasets 	= "ds_salseOrder=output";
         	var sArgs 			= "";
         	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        /*
         *	기능 : 기간 콤보박스 변경시
         */
        this.div_work_tab_Main_onchanged = function(obj,e)
        {
        	switch(e.postindex) {
        	case 0:
        		this.ds_search.setColumn(0,"PRODUCTDIVISION","Product");
        		this.tab_search.Tabpage1.form.cbo_PRODUCTDIVISION.set_enable(false);
        		this.GetInputLotRateByInputDate();
        		break;
        	case 1:
        		this.ds_search.setColumn(0,"PRODUCTDIVISION","Product");
        		this.tab_search.Tabpage1.form.cbo_PRODUCTDIVISION.set_enable(false);
        		this.GetInputLotRateByProduct();
        		break;
        	case 2:
        		this.tab_search.Tabpage1.form.cbo_PRODUCTDIVISION.set_enable(true);
        		this.GetInputLotRateByCustomer();
        		break;
        	default:
        	}
        };

        /*
         *	기능 : 품목코드 검색 버튼 클릭 시
         */
        this.tab_search_Tabpage1_btn_PRODUCTDEFID_onclick = function(obj,e)
        {
        	var oArg = {};

        	if (this.tab_search.Tabpage1.form.edt_PRODUCTDEFID.value != "")
        	{
        		oArg.arg_type        = "BA";
        	}
        	else
        	{
        		oArg.arg_type        = "B";
        	}
        	oArg.arg_popupCd     = "P00160";
        	oArg.arg_popupNm     = "품목 선택";
        	oArg.arg_rtnCols     = "PRODUCTDEFID|PRODUCTDEFVERSION|PRODUCTDEFNAME";
        	oArg.arg_paramCols   = "P_POPTYPE";
        	oArg.arg_paramValues = "PRODUCTDEFINITION";
        	oArg.arg_searchStr   = "P_PRODUCTDEFNAME=" + this.tab_search.Tabpage1.form.edt_PRODUCTDEFID.value;
        	this.gfn_openPopup( "POPUP_PRODUCTDEFID", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        };
        /*
         *	기능 : 고객 검색 버튼 클릭 시
         */
        this.tab_search_Tabpage1_btn_CUSTOMER_onclick = function(obj,e)
        {
        	var oArg = {};
        	if (this.tab_search.Tabpage1.form.edt_CUSTOMER.value != "")
        	{
        		oArg.arg_type        = "BA";
        	}
        	else
        	{
        		oArg.arg_type        = "B";
        	}
        	oArg.arg_popupCd     = "P00212";
        	oArg.arg_popupNm     = "고객사 코드";
        	oArg.arg_rtnCols     = "CUSTOMERID|CUSTOMERNAME";
        	oArg.arg_paramCols   = "P_POPTYPE|P_LANGUAGETYPE";
        	oArg.arg_paramValues = "CUSTOMER|" + this.gf_getLanguageType();
        	oArg.arg_searchStr   = "P_CUSTOMER=" + this.tab_search.Tabpage1.form.edt_CUSTOMER.value;
        	this.gfn_openPopup( "POPUP_CUSTOMER", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        };

        /*
         *	기능 : Rev.별 집계여부 콤보 변경시
         */

        this.tab_search_Tabpage1_cbo_INNERREVISIONTOTAL_onitemchanged = function(obj,e)
        {
        	if(this.tab_search.Tabpage1.form.cbo_INNERREVISIONTOTAL.value == "Y")
        	{
        		this.div_work.form.tab_Main.Tabpage1.form.grd_notInputList.setFormatColProperty(1, "size", 70);
        		this.div_work.form.tab_Main.Tabpage2.form.grd_requirementTotal.setFormatColProperty(1, "size", 70);
        		this.div_work.form.tab_Main.Tabpage3.form.grd_salseOrder.setFormatColProperty(1, "size", 70);
        		this.div_work.form.tab_Main.Tabpage3.form.grd_salseOrder.setFormatColProperty(4, "size", 70);
        	}
        	else
        	{
        		this.div_work.form.tab_Main.Tabpage1.form.grd_notInputList.setFormatColProperty(1, "size", 0);
        		this.div_work.form.tab_Main.Tabpage2.form.grd_requirementTotal.setFormatColProperty(1, "size", 0);
        		this.div_work.form.tab_Main.Tabpage3.form.grd_salseOrder.setFormatColProperty(1, "size", 0);
        		this.div_work.form.tab_Main.Tabpage3.form.grd_salseOrder.setFormatColProperty(4, "size", 0);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.fn_init,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.tab_search.Tabpage1.form.cbo_INNERREVISIONTOTAL.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_INNERREVISIONTOTAL_onitemchanged,this);
            this.tab_search.Tabpage1.form.btn_PRODUCTDEFID.addEventHandler("onclick",this.tab_search_Tabpage1_btn_PRODUCTDEFID_onclick,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.btn_CUSTOMER.addEventHandler("onclick",this.tab_search_Tabpage1_btn_CUSTOMER_onclick,this);
            this.div_work.form.tab_Main.addEventHandler("onchanged",this.div_work_tab_Main_onchanged,this);
        };
        this.loadIncludeScript("PCM01200M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
