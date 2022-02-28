(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM01400M");
            this.set_titletext("모델 수주 진척 현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_main", this);
            obj._setContents("<ColumnInfo><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ORDERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNWIP\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONNOTPACKED\" type=\"STRING\" size=\"256\"/><Column id=\"NOTINPUTPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"FGI_ONHAND\" type=\"STRING\" size=\"256\"/><Column id=\"SO_FGI_ONHAND\" type=\"STRING\" size=\"256\"/><Column id=\"HDI_ONHAND\" type=\"STRING\" size=\"256\"/><Column id=\"VMI_ONHAND\" type=\"STRING\" size=\"256\"/><Column id=\"AGI_ONHAND\" type=\"STRING\" size=\"256\"/><Column id=\"REJ_ONHAND\" type=\"STRING\" size=\"256\"/><Column id=\"REI_ONHAND\" type=\"STRING\" size=\"256\"/><Column id=\"REP_ONHAND\" type=\"STRING\" size=\"256\"/><Column id=\"SHIPMENT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"NOT_SHIPMENT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"BEFORESHIP\" type=\"STRING\" size=\"256\"/><Column id=\"AFTERSHIP\" type=\"STRING\" size=\"256\"/><Column id=\"HOLD\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECT\" type=\"STRING\" size=\"256\"/><Column id=\"LOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"PCSMM\" type=\"STRING\" size=\"256\"/><Column id=\"YIELD2MONTH\" type=\"STRING\" size=\"256\"/><Column id=\"YIELD1MONTH\" type=\"STRING\" size=\"256\"/><Column id=\"YIELD2WEEK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tab_page",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFNAME","108","160",null,"20","15",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("16");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"edt_PRODUCTDEFNAME:0","45","20","91",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("6");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","Static12_00_00_00_01_00_00:0","102","36",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_search","15","Static12_00_00_00_01_00_00:0","146","36",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"70","15","97","0",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("2");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","80","15","97",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("3");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("4");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00",null,"30","45","5","91",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("5");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","Static12_00_00_00_01_00_00:6","10","27",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("7");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PLANTID","0","10","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("8");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PLANT");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_PLANTID","108","10","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("9");
            obj.set_codecolumn("C,SiteType,ALL,Y,Y");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTIONTYPE","0","85","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("17");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTIONTYPE");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTDEFID","0","sta_PRODUCTIONTYPE:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("10");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMCODE");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTIONTYPE","108","85","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("18");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            obj.set_text("전체조회");
            obj.set_value("");
            obj.set_index("0");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID","108","cbo_PRODUCTIONTYPE:5",null,"20","37",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("11");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_PRODUCTDEFID",null,"cbo_PRODUCTIONTYPE:5","22","20","15",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTDEFVERSION","0","sta_PRODUCTDEFID:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("13");
            obj.set_text("Rev.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("INNERREVISION");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTDEFVERSION","108","edt_PRODUCTDEFID:5","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("14");
            obj.set_codecolumn("PRODUCTDEFVERSIONCODE");
            obj.set_datacolumn("PRODUCTDEFVERSIONNAME");
            obj.set_innerdataset("ds_cbo_ProdVersion");
            obj.set_text("전체조회");
            obj.set_value("");
            obj.set_index("0");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTDEFNAME","0","sta_PRODUCTDEFVERSION:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("15");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMID");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_PERIODTYPE","15","60","88","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("21");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Calendar("cal_ENDDT","108","60","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("22");
            obj.set_innerdataset("");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_SearchPeriod","0","35","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("19");
            obj.set_text("수주기간");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("A240C714A5134192B11144C9D3244F10");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Calendar("cal_STARTDT","108","35","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("20");
            obj.set_innerdataset("");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","143","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_main","0","34",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_main");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"50\"/><Column size=\"230\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"고객사\" tooltiptext=\"COMPANYCLIENT\"/><Cell col=\"2\" text=\"품목코드\" tooltiptext=\"ITEMCODE\"/><Cell col=\"3\" text=\"Rev.\" tooltiptext=\"INNERREVISION\"/><Cell col=\"4\" text=\"품목명\" tooltiptext=\"ITEMNAME\"/><Cell col=\"5\" text=\"수주\" tooltiptext=\"SALESORDER\"/><Cell col=\"6\" text=\"생산미입고\" tooltiptext=\"PRODUCTIONNOTPACKED\"/><Cell col=\"7\" text=\"미투입\" tooltiptext=\"NOTINPUT\"/><Cell col=\"8\" text=\"투입\" tooltiptext=\"INPUT\"/><Cell col=\"9\" text=\"생산재고\" tooltiptext=\"PRODSTOCK\"/><Cell col=\"10\" text=\"영업재고\" tooltiptext=\"CATEGORYSALESSTOCK\"/><Cell col=\"11\" text=\"영업보류재고\" tooltiptext=\"CATEGORYSALESHOLDSTOCK\"/><Cell col=\"12\" text=\"VMI 재고\" tooltiptext=\"VMISTOCK\"/><Cell col=\"13\" text=\"잉여재고\" tooltiptext=\"SURPLUSSTOCK\"/><Cell col=\"14\" text=\"불량재고\" tooltiptext=\"DEFECTSTOCK\"/><Cell col=\"15\" text=\"재검재고\" tooltiptext=\"REINSPECTSTOCK\"/><Cell col=\"16\" text=\"재포장재고\" tooltiptext=\"REPACKINGSTOCK\"/><Cell col=\"17\" text=\"출고\" tooltiptext=\"OUTBOUND\"/><Cell col=\"18\" text=\"미출고\" tooltiptext=\"FCC8E019F0D84C00AA244E56991B4AEB\"/><Cell col=\"19\" text=\"출하전재공\" tooltiptext=\"BEFORESHIP\"/><Cell col=\"20\" text=\"출하후재공\" tooltiptext=\"AFTERSHIP\"/><Cell col=\"21\" text=\"보류\" tooltiptext=\"HOLD\"/><Cell col=\"22\" text=\"불량확정대기\" tooltiptext=\"DEFECTCONFIRMATIONCAPAIDLE\"/><Cell col=\"23\" text=\"LOCKING\" tooltiptext=\"LOCKING\"/><Cell col=\"24\" text=\"합수\" tooltiptext=\"SUMMARY\"/><Cell col=\"25\" text=\"산출수\" tooltiptext=\"CALCULATION\"/><Cell col=\"26\" text=\"2달수율\" tooltiptext=\"YIELD2MONTH\"/><Cell col=\"27\" text=\"1달수율\" tooltiptext=\"YIELD1MONTH\"/><Cell col=\"28\" text=\"7일수율\" tooltiptext=\"YIELD7DAY\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" cssclass=\"expr:dataset.getColumn(currow, &quot;PRODUCTDEFVERSION&quot;)==&quot;합계&quot;?&apos;cell_subSum&apos;:&apos;&apos;\"/><Cell col=\"1\" text=\"bind:CUSTOMERNAME\" textAlign=\"left\" cssclass=\"expr:dataset.getColumn(currow, &quot;PRODUCTDEFVERSION&quot;)==&quot;합계&quot;?&apos;cell_subSum&apos;:&apos;&apos;\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\" cssclass=\"expr:dataset.getColumn(currow, &quot;PRODUCTDEFVERSION&quot;)==&quot;합계&quot;?&apos;cell_subSum&apos;:&apos;&apos;\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\" cssclass=\"expr:dataset.getColumn(currow, &quot;PRODUCTDEFVERSION&quot;)==&quot;합계&quot;?&apos;cell_subSum&apos;:&apos;&apos;\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\" cssclass=\"expr:dataset.getColumn(currow, &quot;PRODUCTDEFVERSION&quot;)==&quot;합계&quot;?&apos;cell_subSum&apos;:&apos;&apos;\"/><Cell col=\"5\" displaytype=\"number\" textAlign=\"right\" text=\"bind:ORDERQTY\" cssclass=\"expr:dataset.getColumn(currow, &quot;PRODUCTDEFVERSION&quot;)==&quot;합계&quot;?&apos;cell_subSum&apos;:&apos;&apos;\"/><Cell col=\"6\" text=\"bind:PRODUCTIONNOTPACKED\" displaytype=\"number\" textAlign=\"right\" cssclass=\"expr:dataset.getColumn(currow, &quot;PRODUCTDEFVERSION&quot;)==&quot;합계&quot;?&apos;cell_subSum&apos;:&apos;&apos;\"/><Cell col=\"7\" text=\"bind:NOTINPUTPCSQTY\" displaytype=\"number\" textAlign=\"right\" cssclass=\"expr:dataset.getColumn(currow, &quot;PRODUCTDEFVERSION&quot;)==&quot;합계&quot;?&apos;cell_subSum&apos;:&apos;&apos;\"/><Cell col=\"8\" displaytype=\"number\" textAlign=\"right\" text=\"bind:INPUTQTY\" cssclass=\"expr:dataset.getColumn(currow, &quot;PRODUCTDEFVERSION&quot;)==&quot;합계&quot;?&apos;cell_subSum&apos;:&apos;&apos;\"/><Cell col=\"9\" displaytype=\"number\" textAlign=\"right\" cssclass=\"expr:dataset.getColumn(currow, &quot;PRODUCTDEFVERSION&quot;)==&quot;합계&quot;?&apos;cell_subSum&apos;:&apos;&apos;\" text=\"bind:FGI_ONHAND\"/><Cell col=\"10\" displaytype=\"number\" textAlign=\"right\" cssclass=\"expr:dataset.getColumn(currow, &quot;PRODUCTDEFVERSION&quot;)==&quot;합계&quot;?&apos;cell_subSum&apos;:&apos;&apos;\" text=\"bind:SO_FGI_ONHAND\"/><Cell col=\"11\" displaytype=\"number\" textAlign=\"right\" cssclass=\"expr:dataset.getColumn(currow, &quot;PRODUCTDEFVERSION&quot;)==&quot;합계&quot;?&apos;cell_subSum&apos;:&apos;&apos;\" text=\"bind:HDI_ONHAND\"/><Cell col=\"12\" displaytype=\"number\" textAlign=\"right\" cssclass=\"expr:dataset.getColumn(currow, &quot;PRODUCTDEFVERSION&quot;)==&quot;합계&quot;?&apos;cell_subSum&apos;:&apos;&apos;\" text=\"bind:VMI_ONHAND\"/><Cell col=\"13\" displaytype=\"number\" textAlign=\"right\" cssclass=\"expr:dataset.getColumn(currow, &quot;PRODUCTDEFVERSION&quot;)==&quot;합계&quot;?&apos;cell_subSum&apos;:&apos;&apos;\" text=\"bind:AGI_ONHAND\"/><Cell col=\"14\" displaytype=\"number\" textAlign=\"right\" cssclass=\"expr:dataset.getColumn(currow, &quot;PRODUCTDEFVERSION&quot;)==&quot;합계&quot;?&apos;cell_subSum&apos;:&apos;&apos;\" text=\"bind:REJ_ONHAND\"/><Cell col=\"15\" displaytype=\"number\" textAlign=\"right\" cssclass=\"expr:dataset.getColumn(currow, &quot;PRODUCTDEFVERSION&quot;)==&quot;합계&quot;?&apos;cell_subSum&apos;:&apos;&apos;\" text=\"bind:REI_ONHAND\"/><Cell col=\"16\" displaytype=\"number\" textAlign=\"right\" cssclass=\"expr:dataset.getColumn(currow, &quot;PRODUCTDEFVERSION&quot;)==&quot;합계&quot;?&apos;cell_subSum&apos;:&apos;&apos;\" text=\"bind:REP_ONHAND\"/><Cell col=\"17\" displaytype=\"number\" textAlign=\"right\" cssclass=\"expr:dataset.getColumn(currow, &quot;PRODUCTDEFVERSION&quot;)==&quot;합계&quot;?&apos;cell_subSum&apos;:&apos;&apos;\" text=\"bind:SHIPMENT_QTY\"/><Cell col=\"18\" displaytype=\"number\" textAlign=\"right\" cssclass=\"expr:dataset.getColumn(currow, &quot;PRODUCTDEFVERSION&quot;)==&quot;합계&quot;?&apos;cell_subSum&apos;:&apos;&apos;\" text=\"bind:NOT_SHIPMENT_QTY\"/><Cell col=\"19\" text=\"bind:BEFORESHIP\" displaytype=\"number\" textAlign=\"right\" cssclass=\"expr:dataset.getColumn(currow, &quot;PRODUCTDEFVERSION&quot;)==&quot;합계&quot;?&apos;cell_subSum&apos;:&apos;&apos;\"/><Cell col=\"20\" text=\"bind:AFTERSHIP\" displaytype=\"number\" textAlign=\"right\" cssclass=\"expr:dataset.getColumn(currow, &quot;PRODUCTDEFVERSION&quot;)==&quot;합계&quot;?&apos;cell_subSum&apos;:&apos;&apos;\"/><Cell col=\"21\" text=\"bind:HOLD\" displaytype=\"number\" textAlign=\"right\" cssclass=\"expr:dataset.getColumn(currow, &quot;PRODUCTDEFVERSION&quot;)==&quot;합계&quot;?&apos;cell_subSum&apos;:&apos;&apos;\"/><Cell col=\"22\" displaytype=\"number\" textAlign=\"right\" text=\"bind:DEFECT\" cssclass=\"expr:dataset.getColumn(currow, &quot;PRODUCTDEFVERSION&quot;)==&quot;합계&quot;?&apos;cell_subSum&apos;:&apos;&apos;\"/><Cell col=\"23\" displaytype=\"number\" textAlign=\"right\" text=\"bind:LOCKING\" cssclass=\"expr:dataset.getColumn(currow, &quot;PRODUCTDEFVERSION&quot;)==&quot;합계&quot;?&apos;cell_subSum&apos;:&apos;&apos;\"/><Cell col=\"24\" text=\"bind:PCSPNL\" displaytype=\"number\" textAlign=\"right\" cssclass=\"expr:dataset.getColumn(currow, &quot;PRODUCTDEFVERSION&quot;)==&quot;합계&quot;?&apos;cell_subSum&apos;:&apos;&apos;\"/><Cell col=\"25\" text=\"bind:PCSMM\" displaytype=\"number\" textAlign=\"right\" cssclass=\"expr:dataset.getColumn(currow, &quot;PRODUCTDEFVERSION&quot;)==&quot;합계&quot;?&apos;cell_subSum&apos;:&apos;&apos;\"/><Cell col=\"26\" text=\"bind:YIELD2MONTH\" displaytype=\"mask\" textAlign=\"right\" maskeditpostfixtext=\"%\" maskeditformat=\"00.0\" cssclass=\"expr:dataset.getColumn(currow, &quot;PRODUCTDEFVERSION&quot;)==&quot;합계&quot;?&apos;cell_subSum&apos;:&apos;&apos;\"/><Cell col=\"27\" text=\"bind:YIELD1MONTH\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"00.0\" maskeditpostfixtext=\"%\" cssclass=\"expr:dataset.getColumn(currow, &quot;PRODUCTDEFVERSION&quot;)==&quot;합계&quot;?&apos;cell_subSum&apos;:&apos;&apos;\"/><Cell col=\"28\" text=\"bind:YIELD2WEEK\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"00.0\" maskeditpostfixtext=\"%\" cssclass=\"expr:dataset.getColumn(currow, &quot;PRODUCTDEFVERSION&quot;)==&quot;합계&quot;?&apos;cell_subSum&apos;:&apos;&apos;\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_main",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subMainTitle","0","0","150","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("모델 수주 진척 현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MENU_PG-SG-0120");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_main","sta_subMainTitle:-8","0","140","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
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

            obj = new Static("sta_title","30","16","150","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_text("화면명");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tab_search.tab_page.form.cbo_PLANTID","value","ds_search","PLANTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tab_search.tab_page.form.cbo_PERIODTYPE","value","ds_search","PERIODTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab_search.tab_page.form.cal_STARTDT","value","ds_search","PERIOD_PERIODFR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tab_search.tab_page.form.cal_ENDDT","value","ds_search","PERIOD_PERIODTO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab_search.tab_page.form.cbo_PRODUCTIONTYPE","value","ds_search","PRODUCTIONTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tab_search.tab_page.form.edt_PRODUCTDEFID","value","ds_search","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tab_search.tab_page.form.cbo_PRODUCTDEFVERSION","value","ds_search","PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","tab_search.tab_page.form.edt_PRODUCTDEFNAME","value","ds_search","PRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM01400M.xfdl","pcm::pcmCommon.xjs");
        this.addIncludeScript("PCM01400M.xfdl","lib::lib_bas.xjs");
        this.registerScript("PCM01400M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 모델 수주 진척 현황
         * 파일명 		: PCM01400M.xfdl
         * 작성자 		: 박대호
         * 작성일 		: 2021.05.20
         * 설  명		:  모델 수주 진척 현황 조회
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.03.31	박대호   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("pcm::pcmCommon.xjs"); /*include "pcm::pcmCommon.xjs"*/; //pcm 에서 사용하는 공통
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	// 초기화 (공통)
        	this.nfn_formInit(obj);

        	// 검색조건 공통 콤보 설정
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

        	this.ds_main.clearData();

        	var sSvcID 			= "selectSalseOrderStausPerProduct";
        	var sController 	= "/pcm01400/selectSalseOrderStausPerProduct.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_main=output";
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
         		case "selectSalseOrderStausPerProduct" :
         		{

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
        		{//PRODUCTDEFID|PRODUCTDEFVERSION|PRODUCTDEFNAME

        			this.setProduct_ProdVersion(rtn, this.ds_cbo_ProdVersion, this.ds_search, "C");
        			rtn = this.gfn_split(rtn, ",");
        			if (rtn.length == 3)
        			{

        				this.tab_search.tab_page.form.edt_PRODUCTDEFID.set_value(rtn[0]);
        				this.tab_search.tab_page.form.edt_PRODUCTDEFNAME.set_value(rtn[2]);
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
        				this.tab_search.tab_page.form.edt_PRODUCTDEFID.set_value(valueId.join(","));
        				this.tab_search.tab_page.form.edt_PRODUCTDEFNAME.set_value("");
        				this.ds_search.setColumn(0, "PRODUCTDEFVERSION", "");

        			}
        		}
        		break;
        	};
        };

         /*
         * 기능(공통팝업) : 조회
         */
        this.fn_openPop = function(svcId, popId, pArg)
        {

        }

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 기능 : 조회 조건 Load
         */
        this.fn_initCombo = function ()
        {
        	this.ds_cbo_ProdVersion.deleteAll();
        	this.AddAll(this.ds_cbo_ProdVersion,"PRODUCTDEFVERSIONCODE","PRODUCTDEFVERSIONNAME");
        	this.ds_search.setColumn(0, "PRODUCTDEFVERSION", "");
        	this.ds_search.setColumn(0, "PRODUCTDEFID", "");
        	this.ds_search.setColumn(0,"PLANTID",this.gf_getSiteType());
        	this.ds_search.setColumn(0,"PRODUCTIONTYPE","Production");
        	this.fn_initDatePicker();
        }

        /*
         * 기능 : 조회 조건 Load
         */
        this.fn_initDatePicker = function ()
        {
        	this.basfn_getPeriodData("ds_periodType");
        	var toDate = new Date();
        	this.tab_search.tab_page.form.cbo_PERIODTYPE.set_value("CUSTOM");
        	this.ds_search.setColumn(0,"PERIOD_PERIODFR", toDate.getYear() + "0101");
        	this.ds_search.setColumn(0,"PERIOD_PERIODTO", (toDate.getYear() + 1) + "0101");
        //  	this.ds_search.setColumn(0,"PERIOD_PERIODFR",this.ds_periodType.getColumn(0,"THISMONTH_S"));
        //  	this.ds_search.setColumn(0,"PERIOD_PERIODTO",this.ds_periodType.getColumn(0,"THISMONTH_E"));
        // 	this.ds_search.setColumn(0,"PERIODTYPE","THISMONTH");

        };
        /*
         * 기능 : 검색일자 바인딩 함수
         */
        this.fn_setDate = function (periodType)
        {
        	this.ds_search.setColumn(0,"PERIOD_PERIODFR",this.ds_periodType.getColumn(0,periodType+"_S"));
        	this.ds_search.setColumn(0,"PERIOD_PERIODTO",this.ds_periodType.getColumn(0,periodType+"_E"));
        };



        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        /*
         *	기능 : 품목코드 검색 버튼 클릭 시
         */
        this.tab_search_tab_page_btn_PRODUCTDEFID_onclick = function(obj,e)
        {
        	var oArg = {};

        	if (this.tab_search.tab_page.form.edt_PRODUCTDEFID.value != "")
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
        	oArg.arg_searchStr   = "P_PRODUCTDEFNAME=" + this.tab_search.tab_page.form.edt_PRODUCTDEFID.value;
        	this.gfn_openPopup( "POPUP_PRODUCTDEFID", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        };
        /*
         *	기능 : 검색일자 변경시 검색구분을 [사용자지정]으로 변경
         */
        this.fn_changeCustom = function(obj,e)
        {
        	this.tab_search.tab_page.form.cbo_PERIODTYPE.set_value("CUSTOM");
        };

        this.tab_search_tab_page_cbo_PERIODTYPE_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != "CUSTOM")this.fn_setDate(e.postvalue);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.tab_page.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.tab_page.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.tab_page.form.btn_PRODUCTDEFID.addEventHandler("onclick",this.tab_search_tab_page_btn_PRODUCTDEFID_onclick,this);
            this.tab_search.tab_page.form.cbo_PERIODTYPE.addEventHandler("onitemchanged",this.tab_search_tab_page_cbo_PERIODTYPE_onitemchanged,this);
            this.tab_search.tab_page.form.cal_ENDDT.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.tab_page.form.cal_STARTDT.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.div_work.form.grd_main.addEventHandler("oncelldblclick",this.div_work_grd_main_oncelldblclick,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("PCM01400M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
