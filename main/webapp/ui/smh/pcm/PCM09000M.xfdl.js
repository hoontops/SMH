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
            this.set_titletext("자재 불출 요청");
            if (Form == this.constructor)
            {
                this._setFormPosition(1290,810);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_processSegment", this);
            obj._setContents("<ColumnInfo><Column id=\"ISREQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTNO\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"LOTCNT\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOTPRODUCTTYPETATUS\" type=\"STRING\" size=\"256\"/><Column id=\"P_ISREQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"P_PERIOD_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"P_PERIOD_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENTLOGINID\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"P_CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"P_REQUESTNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputMatrial", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UOM\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDCHK\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputLot", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"BOMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"STOCKQTY\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMEDQTY\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTQTY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_paramList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_segmentGroup", this);
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_print", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"UUID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("sta_site","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_siteId","115","10","158","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("");
            obj.set_type("filter");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_term","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_product","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_product",null,"85","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_product","115","85",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","222","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","17","222","145","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip03",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"202","45","20","86",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip05","162","228","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_periodType","17","60","93","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("사용자정의");
            obj.set_value("");
            obj.set_index("5");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_periodFr","115","35",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_periodTo","115","60",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_isPrintChit","0","185","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("청구여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("STATE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_isRequest","115","185","158","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            obj.set_type("filter");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_lotProductType","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("양산구분");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_lotProductType","115","110","158","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            obj.set_type("filter");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_processSegment","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("공정");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_processSegment","115","135",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_processSegment",null,"135","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_area","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_text("작업장 ID");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("AREANAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_area","115","160",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_text("RTR UV_B2F");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_area",null,"160","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","252","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_processSegment","0","34",null,"37%","2",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_processSegment");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"55\"/><Column size=\"100\"/><Column size=\"55\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"30\"/><Column size=\"139\"/><Column size=\"54\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"92\"/><Column size=\"46\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"청구여부\"/><Cell col=\"2\" text=\"청구번호\"/><Cell col=\"3\" text=\"양산구분\"/><Cell col=\"4\" text=\"품목코드\"/><Cell col=\"5\" text=\"품목버전\"/><Cell col=\"6\" text=\"Rev.\"/><Cell col=\"7\" text=\"품목명\"/><Cell col=\"8\" text=\"공정수순\"/><Cell col=\"9\" text=\"공정\"/><Cell col=\"10\" text=\"공정버전---HIDDEN\"/><Cell col=\"11\" text=\"공정명\"/><Cell col=\"12\" text=\"작업장ID\"/><Cell col=\"13\" text=\"작업장\"/><Cell col=\"14\" text=\"UOM\"/><Cell col=\"15\" text=\"Lot 수\"/><Cell col=\"16\" text=\"투입 PNL\"/><Cell col=\"17\" text=\"투입 PCS\"/><Cell col=\"18\" text=\"투입 MM\"/><Cell col=\"19\" text=\"ID\"/><Cell col=\"20\" text=\"VER\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" textAlign=\"center\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:ISREQUEST\" textAlign=\"center\" displaytype=\"text\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:REQUESTNO\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:LOTTYPE\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:USERSEQUENCE\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:PROCESSSEGMENTID\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:PROCESSSEGMENTVERSION\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:AREAID\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:UNIT\" textAlign=\"center\"/><Cell col=\"15\" text=\"bind:LOTCNT\" textAlign=\"right\"/><Cell col=\"16\" text=\"bind:PANELQTY\" textAlign=\"right\"/><Cell col=\"17\" text=\"bind:QTY\" textAlign=\"right\"/><Cell col=\"18\" text=\"bind:MM\" textAlign=\"right\"/><Cell col=\"19\" text=\"bind:PROCESSSEGMENTID\" textAlign=\"right\"/><Cell col=\"20\" text=\"bind:PROCESSSEGMENTVERSION\" textAlign=\"right\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("title2","2","grd_processSegment:12","70","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("투입 자재");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_inputMatrial","0","title2:0",null,"20%","2",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_inputMatrial");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"100\"/><Column size=\"77\"/><Column size=\"169\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"자재 ID\"/><Cell col=\"2\" text=\"자재 VERSION\"/><Cell col=\"3\" text=\"자재명\"/><Cell col=\"4\" text=\"UOM\"/><Cell col=\"5\" text=\"수량\"/><Cell col=\"6\" text=\"MATERIALTYPE\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:CONSUMABLEDEFID\"/><Cell col=\"2\" text=\"bind:CONSUMABLEDEFVERSION\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:CONSUMABLEDEFNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:UOM\"/><Cell col=\"5\" text=\"bind:QTY\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:MATERIALTYPE\" textAlign=\"right\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_inputMatrial","title2:17","grd_processSegment:12","90","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("title0","1","0","69","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_text("투입 현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_processSegment","title0:23","0","87","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("title2_00","0","grd_inputMatrial:6","70","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("7");
            obj.set_text("투입 LOT");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_inputLot","title2_00:19","grd_inputMatrial:6","90","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("8");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_inputLot","0","title2_00:0",null,null,"2","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_autoenter("select");
            obj.set_fillareatype("none");
            obj.set_binddataset("ds_inputLot");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"117\"/><Column size=\"150\"/><Column size=\"196\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"48\"/><Column size=\"150\"/><Column size=\"0\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"120\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"품목코드\"/><Cell col=\"1\" text=\"품목명\"/><Cell col=\"2\" text=\"Lot No.\"/><Cell col=\"3\" text=\"소요량\"/><Cell col=\"4\" text=\"수량(PNL)\"/><Cell col=\"5\" text=\"수량\"/><Cell col=\"6\" text=\"자재품목코드\"/><Cell col=\"7\" text=\"Rev.\"/><Cell col=\"8\" text=\"자재품목명\"/><Cell col=\"9\" text=\"현재고량\"/><Cell col=\"10\" text=\"총 필요수량\"/><Cell col=\"11\" text=\"청구수량\"/><Cell col=\"12\" text=\"투입일자\"/><Cell col=\"13\" text=\"작업장\"/><Cell col=\"14\" text=\"CONSUMEDQTY---HIDDEN\"/><Cell col=\"15\" text=\"CONSUMEDQTY\"/></Band><Band id=\"body\"><Cell text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:LOTID\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:BOMQTY\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:PANELQTY\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:QTY\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:MATERIALDEFID\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:MATERIALDEFVERSION\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:MATERIALDEFNAME\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:STOCKQTY\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:CHARGEQTY\"/><Cell col=\"11\" text=\"bind:REQUESTQTY\" textAlign=\"right\"/><Cell col=\"12\" text=\"bind:INPUTDATE\" textAlign=\"center\"/><Cell col=\"13\" text=\"bind:AREAID\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:CONSUMEDQTY\" textAlign=\"left\"/><Cell col=\"15\" text=\"bind:CONSUMEDQTY\" textAlign=\"right\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new CheckBox("chk_inStockBase","sta_cnt_ds_inputLot:88","grd_inputMatrial:13","113","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("9");
            obj.set_text(" 자재기준 청구");
            obj.set_value("false");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_titleBG");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset2",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
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

            obj = new Button("btn_save",null,"16","26","24","95",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","133","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_text("자재 불출 요청");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_slipPrint",null,"15","71","24","btn_save:10",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("8");
            obj.set_text("전표출력");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_black");
            this.div_header.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1290,810,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM09000M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM09000M.xfdl","lib::lib_tom.xjs");
        this.registerScript("PCM09000M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 치공구 현황 조회
         * 파일명 		: TOM01100M.xfdl
         * 작성자 		: 박현우
         * 작성일 		: 2021.02.01
         *
         * 설  명		: 치공구 현황 조회
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.02.10	박현우   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.searchDiv = this.tab_search.Tabpage1.form;
        this.headerDiv = this.div_header.form; //저장영역

        this.productId = ''; //제품Id(조회조건)
        this.productVer = ''; //제품Ver(조회조건)
        this.processSegmentId = ''; //조회조건 : 공정ID
        this.areaId = ''; //제품Ver(조회조건)

        //SavePos
        this.oldProductDefId = '';
        this.oldProductDefVer = '';
        this.oldProcessSegmentId = '';
        this.oldProcessSegmentVer = '';
        this.oldUserSeq = '';

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
         * 기능 : 검색 (상단 조회)
         */
        this.fn_search = function (obj, e)
        {
        	//품목코드명이 공백이면 코드/버젼 공백 처리
        	if(this.searchDiv.edt_product.value=='') {
        		this.productId = '';
        		this.productVer = '';
        	}

        	//작업장명이 공백이면 작업장Id 공백 처리
        	if(this.searchDiv.edt_area.value=='' || this.areaId =='') {
        		alert('작업장을 선택 바랍니다.');
        		this.areaId = '';
        		this.searchDiv.edt_area.setFocus();
        		return;
        	}

        	//공정명이 공백이면 공정Id 공백 처리
        	if(this.searchDiv.edt_processSegment.value=='') {
        		this.processSegmentId = '';
        	}

        	this.ds_processSegment.clearData();
        	this.ds_inputMatrial.clearData();
        	this.ds_inputLot.clearData();

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 			this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0, "P_PLANTID", 				this.nfn_nvl(this.searchDiv.cbo_siteId.value, "")); //사이트ID
        	this.ds_search.setColumn(0, "P_AREAID", 				this.nfn_nvl(this.areaId, "")); //작업장
        	this.ds_search.setColumn(0, "P_PROCESSSEGMENTID", 		this.nfn_nvl(this.processSegmentId, "")); //공정ID
        	this.ds_search.setColumn(0, "P_PRODUCTDEFID", 			this.nfn_nvl(this.productId, "")); //제품ID
        	this.ds_search.setColumn(0, "P_LOTPRODUCTTYPETATUS", 	this.nfn_nvl(this.searchDiv.cbo_lotProductType.value, "")); //양산구분
        	this.ds_search.setColumn(0, "P_ISREQUEST", 				this.nfn_nvl(this.searchDiv.cbo_isRequest.value, "")); //청구여부
        	this.ds_search.setColumn(0, "P_PERIOD_PERIODFR", 		this.nfn_nvl(this.searchDiv.cal_periodFr.value, "")); //시작일자
        	this.ds_search.setColumn(0, "P_PERIOD_PERIODTO", 		this.nfn_nvl(this.searchDiv.cal_periodTo.value, "")); //종료일자
        	this.ds_search.setColumn(0, "CURRENTLOGINID", 			this.tomfn_getUserId()); //사용자Id
        	this.ds_search.setColumn(0, "LANGUAGETYPE", 			this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", 					"selectLotListWipByProcessSegList");

        	var sSvcID 			= "selectLotListWipByProcessSegList";
        	var sController 	= "/pcm09000/selectLotListWipByProcessSegList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_processSegment=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색 (투입자재)
         */
        this.fn_detailBomSearch = function ()
        {
        	var chkCnt = this.ds_processSegment.getCaseCount("CHK=='1'");
        	var typeNameVal = 'SINGLE';
        	var multiProductDefId = '';
        	var temp1 = '';
        	var temp2 = '';
        	var temp3 = '';
        	var chkStr = '';
        	var sz = this.ds_processSegment.rowcount;
        	var cnt = 0;
        	if(sz>0){
        		for(var i=0;i<sz;i++)
        		{
        			chkStr = this.nfn_nvl(this.ds_processSegment.getColumn(i, "CHK"));
        			if(chkStr == '1'){ //선택된ROW라면
        				temp1 = this.nfn_nvl(this.ds_processSegment.getColumn(i, "PRODUCTDEFID"));
        				temp2 = this.nfn_nvl(this.ds_processSegment.getColumn(i, "PRODUCTDEFVERSION"));
        				temp3 = this.nfn_nvl(this.ds_processSegment.getColumn(i, "PROCESSSEGMENTID"));
        				if(cnt<chkCnt-1){
        					multiProductDefId = multiProductDefId + temp1+"|"+temp2+"|"+temp3+",";
        				}else{
        					multiProductDefId = multiProductDefId + temp1+"|"+temp2+"|"+temp3;
        				}
        				cnt = cnt + 1;
        			}
        		}
        		if(cnt>1){
        			typeNameVal = 'MULTI';
        		}
        	}

        	this.ds_inputMatrial.clearData();
        	this.ds_inputLot.clearData();

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 			this.nfn_nvl(this.gf_getEnterpriseId(), ""));
        	this.ds_search.setColumn(0, "P_PLANTID", 				this.nfn_nvl(this.searchDiv.cbo_siteId.value, "")); //사이트ID
        	this.ds_search.setColumn(0, "P_AREAID", 				this.nfn_nvl(this.ds_processSegment.getColumn(this.ds_processSegment.rowposition, "AREAID")));

        	if(typeNameVal=='SINGLE'){ //한건 체크 또는 해당 건 클릭시
        		this.ds_search.setColumn(0, "P_PRODUCTDEFID",		this.nfn_nvl(this.ds_processSegment.getColumn(this.ds_processSegment.rowposition, "PRODUCTDEFID")));
        		this.ds_search.setColumn(0, "P_PRODUCTDEFVERSION",	this.nfn_nvl(this.ds_processSegment.getColumn(this.ds_processSegment.rowposition, "PRODUCTDEFVERSION")));
        		this.ds_search.setColumn(0, "P_PROCESSSEGMENTID",	this.nfn_nvl(this.ds_processSegment.getColumn(this.ds_processSegment.rowposition, "PROCESSSEGMENTID")));
        	}else{
        		this.ds_search.setColumn(0, "P_PRODUCTDEFID",		multiProductDefId);
        	}

        	//alert(typeNameVal);
        	this.ds_search.setColumn(0, "P_REQUESTNO",				this.nfn_nvl(this.ds_processSegment.getColumn(this.ds_processSegment.rowposition, "REQUESTNO"))); //청구번호

        	this.ds_search.setColumn(0, "TYPE",						typeNameVal); //TYPE
        	this.ds_search.setColumn(0, "P_ISREQUEST",				this.nfn_nvl(this.searchDiv.cbo_isRequest.value, "")); //청구구분

        	this.ds_search.setColumn(0, "LANGUAGETYPE", 			this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", 					"selectConsumListOfBomList");
        	this.ds_search.setColumn(0, "P_PERIOD_PERIODFR", 		this.nfn_nvl(this.searchDiv.cal_periodFr.value, "")); //시작일자
        	this.ds_search.setColumn(0, "P_PERIOD_PERIODTO", 		this.nfn_nvl(this.searchDiv.cal_periodTo.value, "")); //종료일자

        	var sSvcID 			= "selectConsumListOfBomList";
        	var sController 	= "/pcm09000/selectConsumListOfBomList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_inputMatrial=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /* ================================== */
        /* ================================== */
        /* ================================== */
        /* 가운데 그리드 출력용 */
        /* ================================== */
        /* ================================== */
        /* ================================== */
        this.fn_detailBomPrint = function ()
        {
        	var chkCnt = this.ds_processSegment.getCaseCount("CHK=='1'");
        	var typeNameVal = 'SINGLE';
        	var multiProductDefId = '';
        	var temp1 = '';
        	var temp2 = '';
        	var temp3 = '';
        	var chkStr = '';
        	var sz = this.ds_processSegment.rowcount;
        	var cnt = 0;
        	if(sz>0){
        		for(var i=0;i<sz;i++)
        		{
        			chkStr = this.nfn_nvl(this.ds_processSegment.getColumn(i, "CHK"));
        			if(chkStr == '1'){ //선택된ROW라면
        				temp1 = this.nfn_nvl(this.ds_processSegment.getColumn(i, "PRODUCTDEFID"));
        				temp2 = this.nfn_nvl(this.ds_processSegment.getColumn(i, "PRODUCTDEFVERSION"));
        				temp3 = this.nfn_nvl(this.ds_processSegment.getColumn(i, "PROCESSSEGMENTID"));
        				if(cnt<chkCnt-1){
        					multiProductDefId = multiProductDefId + temp1+"|"+temp2+"|"+temp3+",";
        				}else{
        					multiProductDefId = multiProductDefId + temp1+"|"+temp2+"|"+temp3;
        				}
        				cnt = cnt + 1;
        			}
        		}
        		if(cnt>1){
        			typeNameVal = 'MULTI';
        		}
        	}

        	this.ds_print.clearData();

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 			this.nfn_nvl(this.gf_getEnterpriseId(), ""));
        	this.ds_search.setColumn(0, "P_PLANTID", 				this.nfn_nvl(this.searchDiv.cbo_siteId.value, "")); //사이트ID
        	this.ds_search.setColumn(0, "P_AREAID", 				this.nfn_nvl(this.ds_processSegment.getColumn(this.ds_processSegment.rowposition, "AREAID")));

        	if(typeNameVal=='SINGLE'){ //한건 체크 또는 해당 건 클릭시
        		this.ds_search.setColumn(0, "P_PRODUCTDEFID",		this.nfn_nvl(this.ds_processSegment.getColumn(this.ds_processSegment.rowposition, "PRODUCTDEFID")));
        		this.ds_search.setColumn(0, "P_PRODUCTDEFVERSION",	this.nfn_nvl(this.ds_processSegment.getColumn(this.ds_processSegment.rowposition, "PRODUCTDEFVERSION")));
        		this.ds_search.setColumn(0, "P_PROCESSSEGMENTID",	this.nfn_nvl(this.ds_processSegment.getColumn(this.ds_processSegment.rowposition, "PROCESSSEGMENTID")));
        	}else{
        		this.ds_search.setColumn(0, "P_PRODUCTDEFID",		multiProductDefId);
        	}

        	//alert(typeNameVal);
        	this.ds_search.setColumn(0, "P_REQUESTNO",				this.nfn_nvl(this.ds_processSegment.getColumn(this.ds_processSegment.rowposition, "REQUESTNO"))); //청구번호

        	this.ds_search.setColumn(0, "TYPE",						typeNameVal); //TYPE
        	this.ds_search.setColumn(0, "P_ISREQUEST",				this.nfn_nvl(this.searchDiv.cbo_isRequest.value, "")); //청구구분

        	this.ds_search.setColumn(0, "LANGUAGETYPE", 			this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", 					"selectConsumListOfBomTableMake");

        	var sSvcID 			= "selectConsumListOfBomTableMake";
        	var sController 	= "/pcm09000/selectConsumListOfBomTableMake.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_print=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색 (의뢰Lot 조회)
         */
        this.fn_detailLotSearch = function ()
        {
        	var chkCnt1 = this.ds_processSegment.getCaseCount("CHK=='1'");
        	var chkCnt2 = this.ds_inputMatrial.getCaseCount("CHK=='1'");
        	var multiProductDefId = '';
        	var consumableDefId = '';
        	var temp1 = '';
        	var temp2 = '';
        	var temp3 = '';
        	var chkStr = '';
        	var sz1 = this.ds_processSegment.rowcount;
        	var cnt1 = 0;
        	var sz2 = this.ds_inputMatrial.rowcount;
        	var cnt2 = 0;

        	//alert(chkCnt1+'/'+chkCnt2+"*******"+sz1+'/'+sz2);

        	for(var i=0;i<sz1;i++)
        	{
        		chkStr = this.nfn_nvl(this.ds_processSegment.getColumn(i, "CHK"));
        		if(chkStr == '1'){ //선택된ROW라면
        			temp1 = this.nfn_nvl(this.ds_processSegment.getColumn(i, "PRODUCTDEFID"));
        			temp2 = this.nfn_nvl(this.ds_processSegment.getColumn(i, "PRODUCTDEFVERSION"));
        			temp3 = this.nfn_nvl(this.ds_processSegment.getColumn(i, "PROCESSSEGMENTID"));
        			if(cnt1<chkCnt1-1){
        				multiProductDefId = multiProductDefId + temp1+"|"+temp2+"|"+temp3+",";
        			}else{
        				multiProductDefId = multiProductDefId + temp1+"|"+temp2+"|"+temp3;
        			}
        			cnt1 = cnt1 + 1;
        		}
        	}

        	if(multiProductDefId==''){
        		temp1 = this.nfn_nvl(this.ds_processSegment.getColumn(this.ds_processSegment.rowposition, "PRODUCTDEFID"));
        		temp2 = this.nfn_nvl(this.ds_processSegment.getColumn(this.ds_processSegment.rowposition, "PRODUCTDEFVERSION"));
        		temp3 = this.nfn_nvl(this.ds_processSegment.getColumn(this.ds_processSegment.rowposition, "PROCESSSEGMENTID"));
        		multiProductDefId = temp1+"|"+temp2+"|"+temp3;
        	}

        	for(var i=0;i<sz2;i++)
        	{
        		chkStr = this.nfn_nvl(this.ds_inputMatrial.getColumn(i, "CHK"));
        		if(chkStr == '1'){ //선택된ROW라면
        			temp1 = this.nfn_nvl(this.ds_inputMatrial.getColumn(i, "CONSUMABLEDEFID"));
        			temp2 = this.nfn_nvl(this.ds_inputMatrial.getColumn(i, "CONSUMABLEDEFVERSION"));
        			if(cnt2<chkCnt2-1){
        				consumableDefId = consumableDefId + temp1+"|"+temp2+",";
        			}else{
        				consumableDefId = consumableDefId + temp1+"|"+temp2;
        			}
        			cnt2 = cnt2 + 1;
        		}
        	}

        	this.ds_inputLot.clearData();

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 			this.nfn_nvl(this.gf_getEnterpriseId(), ""));
        	this.ds_search.setColumn(0, "P_PLANTID", 				this.nfn_nvl(this.searchDiv.cbo_siteId.value, "")); //사이트ID
        	this.ds_search.setColumn(0, "P_AREAID", 				this.nfn_nvl(this.ds_processSegment.getColumn(this.ds_processSegment.rowposition, "AREAID")));

        	//if(cnt1>1 || cnt2>1){
        		this.ds_search.setColumn(0, "P_PRODUCTDEFID",			multiProductDefId);
        	//}else{
        	//	this.ds_search.setColumn(0, "P_PRODUCTDEFID",			this.nfn_nvl(this.ds_processSegment.getColumn(this.ds_processSegment.rowposition, "PRODUCTDEFID")));
        	//	this.ds_search.setColumn(0, "P_PRODUCTDEFVERSION",		this.nfn_nvl(this.ds_processSegment.getColumn(this.ds_processSegment.rowposition, "PRODUCTDEFVERSION")));
        	//	this.ds_search.setColumn(0, "P_PROCESSSEGMENTID",		this.nfn_nvl(this.ds_processSegment.getColumn(this.ds_processSegment.rowposition, "PROCESSSEGMENTID")));
        	//}

        	//if(cnt1>1 || cnt2>1){
        		this.ds_search.setColumn(0, "P_CONSUMABLEDEFID",		consumableDefId);
        	//}else{
        	//	this.ds_search.setColumn(0, "P_CONSUMABLEDEFID",		this.nfn_nvl(this.ds_inputMatrial.getColumn(this.ds_inputMatrial.rowposition, "CONSUMABLEDEFID")));
        	//	this.ds_search.setColumn(0, "P_CONSUMABLEDEFVERSION",	this.nfn_nvl(this.ds_inputMatrial.getColumn(this.ds_inputMatrial.rowposition, "CONSUMABLEDEFVERSION")));
        	//}

        	this.ds_search.setColumn(0, "P_PERIOD_PERIODFR", 		this.nfn_nvl(this.searchDiv.cal_periodFr.value, "")); //시작일자
        	this.ds_search.setColumn(0, "P_PERIOD_PERIODTO", 		this.nfn_nvl(this.searchDiv.cal_periodTo.value, "")); //종료일자

        	this.ds_search.setColumn(0, "P_ISREQUEST",				this.nfn_nvl(this.searchDiv.cbo_isRequest.value, "")); //청구구분

        	this.ds_search.setColumn(0, "CURRENTLOGINID", 			this.tomfn_getUserId()); //사용자Id

        	this.ds_search.setColumn(0, "LANGUAGETYPE", 			this.gf_getLanguageType());

        	//if(cnt1<2){ //싱글
        	//	this.ds_search.setColumn(0, "SQL_ID", 					"selectLotListByRequestList");
        	//
        	//	var sSvcID 			= "selectLotListByRequestList";
        	//	var sController 	= "/pcm09000/selectLotListByRequestList.do";
        	//	var sInDatasets 	= "INPUT=ds_search";
        	//	var sOutDatasets 	= "ds_inputLot=output";
        	//	var sArgs 			= "";
        	//	sArgs += this.gfn_setParam("", "");
        	//}else{ //멀티
        		this.ds_search.setColumn(0, "SQL_ID", 					"selectLotListByRequestList2");

        		var sSvcID 			= "selectLotListByRequestList2";
        		var sController 	= "/pcm09000/selectLotListByRequestList2.do";
        		var sInDatasets 	= "INPUT=ds_search";
        		var sOutDatasets 	= "ds_inputLot=output";
        		var sArgs 			= "";
        		sArgs += this.gfn_setParam("", "");
        	//}

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	var selCnt = 0;
        	var selVal = '';
        	for(var i=0; i<this.ds_inputMatrial.rowcount; i++){
        		selVal = this.nfn_nvl(this.ds_inputMatrial.getColumn(this.ds_inputMatrial.rowposition, "CHK"), "");
        		if(selVal=='1'){ //선택된건은 서버에 체크상태 알려준다.
        			this.ds_inputMatrial.setColumn(i, "SENDCHK", "1");
        			selCnt++;
        		}
        	}

        	if(selCnt==0){
        		alert('저장 데이터가 존재하지 않습니다.');
        		return;
        	}

        	//맨아래 그리드 강제로 선택된것으로 처리
        	for(var i=0; i<this.ds_inputLot.rowcount; i++){
        		this.ds_inputLot.setColumn(i, "CHK", "1");
        	}

        	//Reqquest 만들기 위한 자료를 생성한다.
        	this.ds_segmentGroup.clearData();
        	var tempAreaId = this.areaId;
        	var processSegmentId = '';
        	var processSegmentVersion = '';
        	var chkVal = '0';
        	var findPos = 0;
        	var findCnt = 0;
        	for(var i=0; i<this.ds_processSegment.rowcount; i++){
        		processSegmentId = this.nfn_nvl(this.ds_processSegment.getColumn(i, "PROCESSSEGMENTID"));
        		processSegmentVersion = this.nfn_nvl(this.ds_processSegment.getColumn(i, "PROCESSSEGMENTVERSION"));
        		chkVal = this.nfn_nvl(this.ds_processSegment.getColumn(i, "CHK"));
        		if(chkVal=='1'){
        			findPos = this.ds_segmentGroup.findRowExpr("PROCESSSEGMENTID=='" + processSegmentId + "' && PROCESSSEGMENTVERSION=='" + processSegmentVersion + "'");
        			if(findPos > -1){
        			}else{//없으면
        				this.ds_segmentGroup.insertRow(0);
        				this.ds_segmentGroup.setColumn(0,"AREAID",					tempAreaId);
        				this.ds_segmentGroup.setColumn(0,"PROCESSSEGMENTID",		processSegmentId);
        				this.ds_segmentGroup.setColumn(0,"PROCESSSEGMENTVERSION",	processSegmentVersion);
        				findCnt++;
        				//alert('없다 :: '+tempAreaId+"/"+processSegmentId+"/"+processSegmentVersion);
        			}
        		}
        	}

        	//alert('Request 건수 :: '+findCnt);

        	//1. 변경 데이터 존재 확인
        	//if(!this.gfn_dsIsUpdated(this.ds_inputLot)){ //변경데이터 확인
        	//	this.gfn_Message("NoSaveData", "", "warning", "ok");
        	//	return;
        	//}

        	//Save master pos
        	this.oldProductDefId = this.ds_processSegment.getColumn(this.ds_processSegment.rowposition, "PRODUCTDEFID"); //상단 저장위치
        	this.oldProductDefVer = this.ds_processSegment.getColumn(this.ds_processSegment.rowposition, "PRODUCTDEFVERSION"); //상단 저장위치
        	this.oldProcessSegmentId = this.ds_processSegment.getColumn(this.ds_processSegment.rowposition, "PROCESSSEGMENTID"); //상단 저장위치
        	this.oldProcessSegmentVer = this.ds_processSegment.getColumn(this.ds_processSegment.rowposition, "PROCESSSEGMENTVERSION"); //상단 저장위치
        	this.oldUserSeq = this.ds_processSegment.getColumn(this.ds_processSegment.rowposition, "USERSEQUENCE"); //상단 저장위치

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveInputLot";
        	var sController 	= "/pcm09000/saveInputLot.do";
        	var sInDatasets 	= "INPUT=ds_inputLot:U INPUT2=ds_inputMatrial:U INPUT3=ds_processSegment:U INPUT4=ds_segmentGroup:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 삭제
         */
        this.fn_delete = function (obj, e)
        {
        };

        /*
         * 기능 : 복사
         */
        this.fn_copy = function(obj,e)
        {
        };

        /*
         * SINGLE 계산 ( 자재기준 청구)
         */
        this.fn_ChkIsStockBaseInProcess_single_CheckedChanged = function ()
        {
        	//alert('---single 계산 시작...');
        	var consumedQty = this.ds_inputLot.getColumn(0, "CONSUMEDQTY");
            var stdQty = this.ds_inputLot.getColumn(0, "STOCKQTY");
        	//alert('consumedQty/stdQty :: '+consumedQty+'/'+stdQty);
            //2019-11-27 CT_CONSUMEMATERIALLOT_TEMP에 소모된 자재 제외 후 청구
            stdQty = stdQty - consumedQty;
        	//alert('stdQty [1] :: '+stdQty);
            if (stdQty < 0) {
        		stdQty = 0;
        	}
        	//alert('stdQty [2] :: '+stdQty + '/LOT List건수 :: ' + this.ds_inputLot.rowcount);

        	var chargeQty = 0;
        	var resultQty = 0;
            for (i = 0; i < this.ds_inputLot.rowcount; i++)
            {
        		chargeQty = this.ds_inputLot.getColumn(i, "CHARGEQTY");
        		//alert('chargeQty :: '+chargeQty);
                resultQty = stdQty - chargeQty;
        		//alert('resultQty :: '+resultQty);
                if (resultQty < 0)
                {
        			this.ds_inputLot.setColumn(i, "CHARGEQTY", resultQty * (-1));
        			//alert('CHARGEQTY 세팅후 반복종료... :: '+resultQty * (-1));
                    break;;
                } else {
        			this.ds_inputLot.setColumn(i, "CHARGEQTY", 0);
        			//alert('CHARGEQTY 0 세팅 :: '+0);
                }
        		stdQty = resultQty;
            }
        	//alert('---single 계산 종료...stdQty :: '+stdQty);
        }

        /*
         * MULTI 계산 ( 자재기준 청구)
         */
        this.fn_ChkIsStockBaseInProcess_multi_CheckedChanged = function ()
        {
        	var chk = '';
        	var materialDefId = '';
        	var materialDefVersion = '';
        	var tempMaterialDefId = '';
        	var tempMaterialDefVersion = '';
        	var nRow = 0;

        	var consumedQty = 0;
        	var stdQty = 0;
        	var chargeQty = 0;
        	var resultQty = 0;

        	//alert('투입자재 건수 :: '+this.ds_inputMatrial.rowcount);
            for (i = 0; i < this.ds_inputMatrial.rowcount; i++)
            {
        		//투입자재 그리드에서 선택된row만 처리 한다.
        		chk = this.ds_inputMatrial.getColumn(i, "CHK");
        		if(chk=='1'){ //선택된Row대상건이다.
        			//첫번째row를 찾는다.
        			materialDefId = this.ds_inputMatrial.getColumn(i, "CONSUMABLEDEFID");
        			materialDefVersion = this.ds_inputMatrial.getColumn(i, "CONSUMABLEDEFVERSION");
        			//alert('투입자재 row '+i+'/'+materialDefId+'/'+materialDefVersion+'/-------------------------------->찾자...');
        			nRow = this.ds_inputLot.findRowExpr("MATERIALDEFID=='" + materialDefId + "' && MATERIALDEFVERSION=='" + materialDefVersion + "'");
        			//alert('nRow :: '+nRow);
        			if(nRow>-1){
        				//alert('발견 :: '+nRow);
        				consumedQty = this.ds_inputLot.getColumn(nRow, "CONSUMEDQTY");
        				stdQty = this.ds_inputLot.getColumn(nRow, "STOCKQTY");
        				//alert('DATA [1] :: '+consumedQty+'/'+stdQty);
        				//2019-11-27 CT_CONSUMEMATERIALLOT_TEMP에 소모된 자재 제외 후 청구
        				stdQty = stdQty - consumedQty;
        				//alert('DATA [2] :: '+consumedQty+'/'+stdQty);
        				if (stdQty < 0) {
        					stdQty = 0;
        				}
        				//alert('DATA [3] :: '+stdQty+'/반복문에서 찾아서 처리 한다.');

        				chargeQty = 0;
        				resultQty = 0;
        				for (k = 0; k < this.ds_inputLot.rowcount; k++)
        				{
        					tempMaterialDefId = this.ds_inputLot.getColumn(k, "MATERIALDEFID");
        					tempMaterialDefVersion = this.ds_inputLot.getColumn(k, "MATERIALDEFVERSION");
        					if(materialDefId == tempMaterialDefId && materialDefVersion == tempMaterialDefVersion)
        					{
        						//alert('FOUND [1] :: '+tempMaterialDefId+'/'+tempMaterialDefVersion);

        						chargeQty = this.ds_inputLot.getColumn(k, "CHARGEQTY");
        						resultQty = stdQty - chargeQty;

        						//alert(chargeQty+'/'+resultQty);

        						if (resultQty < 0)
        						{
        							//alert('CHARGEQTY 세팅후 반복종료... :: '+resultQty * (-1));
        							this.ds_inputLot.setColumn(k, "CHARGEQTY", resultQty * (-1));
        							break;
        						}
        						else
        						{
        							this.ds_inputLot.setColumn(k, "CHARGEQTY", 0);
        						}
        						stdQty = resultQty;
        					}
        				}
        				//alert('반복문 종료...');
        			}else{
        				//alert('없다');
        			}
        		}
            }
        	//alert('---multi 계산 종료...stdQty :: '+stdQty);
        }

        this.fn_print = function ()
        {
        	this.ds_paramList.clearData();
        	for(var i=0; i<3; i++) //3개 파라메터
        	{
        		if(i==0){
        			nRow = this.ds_paramList.addRow();
        			this.ds_paramList.setColumn(nRow,"code","LANGUAGETYPE");
        			this.ds_paramList.setColumn(nRow,"value", this.gf_getLanguageType());
        		} if(i==1){
        			nRow = this.ds_paramList.addRow();
        			this.ds_paramList.setColumn(nRow,"code","REQUESTNO");
        			this.ds_paramList.setColumn(nRow,"value", this.nfn_nvl(this.ds_processSegment.getColumn(this.ds_processSegment.rowposition, "REQUESTNO"), ""));
        		} if(i==2){
        			nRow = this.ds_paramList.addRow();
        			this.ds_paramList.setColumn(nRow,"code","UUID");
        			this.ds_paramList.setColumn(nRow,"value", this.nfn_nvl(this.ds_print.getColumn(this.ds_print.rowposition, "UUID"), ""));
        		}
        	}

        	var strField = this.gfn_strParameterData(this.ds_paramList, "code", "value");  //code : parameter 순서 : 1,2....
        	var nSrc = "PCM09000R.mrd";

        	trace(" ## [rd 호출전 테스트] ## : "+this.ds_paramList.saveXML());
        	//trace(" ## [rd 소스명] ## : "+nSrcNm+".mrd");
        	trace(" ## [rd 조회 파라미터] ## : "+strField);

        	//또는 strField = [$1값][$2값]....[$n값];
        	var oArg = {
        		sRptPath : "/pcm/",
        		sRptName : nSrc,
        		strField : strField,
        		bModalless : false
        	};

        	//var sOption = ""; //"autosize=false,width=1200,height=900,titletext=외주출고전표,modeless=true";
        	var sOption = "titletext=Report pack Label (PCM),modeless=false";

        	this.gfn_reportPopup("reportViewer", "common::com_report.xfdl", oArg, sOption);
        }

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
        		case "selectTomPlantList":	//[조회조건] Site Callback
        			this.searchDiv.cbo_siteId.set_value(this.gf_getSiteType()); //세션사용자PlantId를 가져온다.
        			break;
        		case "selectPeriodQueryCmb": //[조회조건] Period dataset Callback
        			this.fn_setDate("THISMONTH");
        			break;
        		case "selectLotListWipByProcessSegList": //[상단]그리드 CALLBACK
        			if (this.ds_processSegment.rowcount > 0) {

        				//alert(this.oldProductDefId+"/"+this.oldProductDefVer+"/"+this.oldProcessSegmentId+"/"+this.oldProcessSegmentVer+"/"+this.oldUserSeq);

        				//저장후 위치 복원
        				if(this.oldProductDefId != ''){//save pos restore(대표로 1개만 체크)
        					var restorePos = this.ds_processSegment.findRowExpr("PRODUCTDEFID=='" + this.oldProductDefId + "' && PRODUCTDEFVERSION=='" + this.oldProductDefVer + "' && PROCESSSEGMENTID=='" + this.oldProcessSegmentId + "' && PROCESSSEGMENTVERSION=='" + this.oldProcessSegmentVer + "' && USERSEQUENCE=='" + this.oldUserSeq + "'");
        					//alert(restorePos);
        					this.ds_processSegment.set_rowposition(restorePos);
        					this.oldProductDefId  = "";
        					this.oldProductDefVer  = "";
        					this.oldProcessSegmentId  = "";
        					this.oldProcessSegmentVer  = "";
        					this.oldUserSeq  = "";
        					//프린트전에 인쇄용 임시 테이블을 만든다.(세부내역리스트 출력용)
        					this.fn_detailBomPrint();
        				}else{
        					this.ds_processSegment.set_rowposition(0);
        				}


        				var selVal = this.nfn_nvl(this.ds_processSegment.getColumn(this.ds_processSegment.rowposition, "REQUESTNO"),'');
        				if(selVal == ''){
        					this.headerDiv.btn_save.set_enable(true);
        					this.headerDiv.btn_slipPrint.set_enable(false); //전표출력 안돼게 처리
        					this.ds_processSegment.setColumn(this.ds_processSegment.rowposition, "CHK", "1");
        				}else{
        					this.headerDiv.btn_save.set_enable(false);
        					this.headerDiv.btn_slipPrint.set_enable(true);
        					this.ds_processSegment.setColumn(this.ds_processSegment.rowposition, "CHK", "0"); //체크박스 무효화 한다.
        				}

        				this.fn_detailBomSearch();
        			}
        			break;
        		case "selectConsumListOfBomList": //[하단] BOM 그리드 CALLBACK
        			//alert(this.ds_inputMatrial.saveXML());
        			if (this.ds_inputMatrial.rowcount > 0) {
        				this.fn_detailLotSearch();
        			}
        			break;
        		case "selectLotListByRequestList": //[하단] LOT 그리드 CALLBACK
        			break;
        		case "saveInputLot":
        			this.fn_search();
        			break;
                case "selectConsumListOfBomTableMake":
        			this.fn_print();
        			break;
        		default:
        	}
        };


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        /*
         * 기능(공통팝업) : '작업장' Text 조회
         */
        this.fn_openPop = function(svcId, popId, pArg)
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

        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = popId;
        	oArg.arg_popupNm = "";
        	oArg.arg_paramCols = this.gfn_getExtractArgument(pArg,"name");
        	oArg.arg_paramValues = this.gfn_getExtractArgument(pArg,"value");
        	oArg.arg_searchStr = "";

        	if(popId=="P00126"){ //품목코드 조회
        		oArg.arg_searchStr = "PRODUCTDEFID="+this.nfn_nvl(this.searchDiv.edt_product.value,'');//조회조건의 품목명
        		oArg.arg_rtnCols = "PRODUCTDEFID|PRODUCTDEFNAME|PRODUCTDEFVERSION";
        	}else if(popId=="P00213"){ //공정 조회
        		oArg.arg_type = "CA";
        		oArg.arg_searchStr   = "P_PROCESSSEGMENT=" +this.nfn_nvl(this.searchDiv.edt_processSegment.value,''); //조회조건의 공정명
        		oArg.arg_rtnCols = "PROCESSSEGMENTID|PROCESSSEGMENTNAME";
        	}else if(popId=="P00063"){ //작업장조회 조회
        		oArg.arg_searchStr = "AREANAME="+this.searchDiv.edt_area.value;//조회조건의 작업장
        		oArg.arg_rtnCols = "AREAID|AREANAME";
        	}

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        }

        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "SCH_PRODUCT") //제품 조회
        	{
        		this.searchDiv.edt_product.set_value(rtn[1]);
        		this.productId = rtn[0]; //HIDDEN 필드
        		this.productVer = rtn[2]; //HIDDEN 필드
        	} else if(sPopupId == "SCH_PROCESSSEGMENT") //공정 조회
        	{
        		//this.searchDiv.edt_processSegment.set_value(rtn[1]);
        		//this.processSegmentId = rtn[0]; //HIDDEN 필드
        		var objKey = "";
        		var objId = "";

        		for(var i=0; i<rtn.length; i++){
        			var colArray = rtn[i];
        			objKey += ","+ colArray[1];
        			objId  += ","+ colArray[0];
        		}

        		this.searchDiv.edt_processSegment.set_value(objKey.substr(1));
        		this.processSegmentId = objId.substr(1);
        	} else if(sPopupId == "SCH_AREA") //작업장 조회
        	{
        		this.searchDiv.edt_area.set_value(rtn[1]);
        		this.areaId = rtn[0]; //HIDDEN 필드
        	}
        }

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 기능 : 조회 조건 Load
         */
        this.fn_initCombo = function ()
        {
        	this.tomfn_getPeriodData("ds_periodType","","fn_callBack");
        	this.searchDiv.cbo_periodType.set_value("THISMONTH"); // 금월

        	this.fn_initSiteCombo();
        }

        this.tab_search_Tabpage1_btn_requestor_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.searchDiv.cbo_siteId.value);

        	this.fn_openPop("SCH_USERS","P00194", sArgs); //의뢰자 조회
        };

        /*
         * 기능 : 'Site' 콤보 조회
         */
        this.fn_initSiteCombo = function ()
        {
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());

        	this.tomfn_setCustomQueryCmb(this.tab_search.Tabpage1.form.cbo_siteId // Object
        								, "selectTomPlantList,ALL,Y,A" // OPTION
        								, sArgs	// 추가 파라미터
        								, "fn_callBack"); //콜백함수 지정
        }

        /*
         * 기능 : 검색일자 변경시 검색구분을 [사용자지정]으로 변경
         */
        this.fn_changeCustom = function ()
        {
        	this.searchDiv.cbo_periodType.set_value("CUSTOM");
        }

        /*
         * 기능 : 검색일자 바인딩 함수
         */
        this.fn_setDate = function (periodType)
        {
        	this.searchDiv.cal_periodFr.set_value(this.ds_periodType.getColumn(0,periodType+"_S"));
        	this.searchDiv.cal_periodTo.set_value(this.ds_periodType.getColumn(0,periodType+"_E"));
        }

        this.orderBtnControlPrepare = function(pRow)
        {
        	this.ds_processSegment.set_rowposition(pRow);
        	//this.orderBtnControl();
        }

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.tab_search_Tabpage1_cbo_periodType_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != "CUSTOM"){
        		this.fn_setDate(e.postvalue);
        	}
        };

        //품목 : 공통 팝업
        this.tab_search_Tabpage1_btn_product_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.searchDiv.cbo_siteId.value);
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());
        	sArgs += this.gfn_setParam("P_PRODUCTDEFTYPE", "Product");

        	this.fn_openPop("SCH_PRODUCT","P00126", sArgs); //품목코드 조회
        };

        //공정 : 공통 팝업
        this.tab_search_Tabpage1_btn_processSegment_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("P_POPTYPE", "PROCESSSEGMENT");
        	sArgs += this.gfn_setParam("P_LANGUAGETYPE", this.gf_getLanguageType());

        	this.fn_openPop("SCH_PROCESSSEGMENT","P00213", sArgs); //공정 조회
        };

        //작업장 : 공통 팝업
        this.tab_search_Tabpage1_btn_area_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.searchDiv.cbo_siteId.value);
        	sArgs += this.gfn_setParam("CURRENTLOGINID", this.gf_getUserAcnt()); //로그인 ID
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());

        	this.fn_openPop("SCH_AREA","P00063", sArgs); //작업장 조회
        };

        this.btnControl = function()
        {
        }

        //조회조건 : 품목 엔터
        this.tab_search_Tabpage1_edt_product_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btn_product_onclick();
        	}
        };

        //조회조건 : 공정 엔터
        this.tab_search_Tabpage1_edt_processSegment_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btn_processSegment_onclick();
        	}
        };

        //조회조건 : 작업장 엔터
        this.tab_search_Tabpage1_edt_area_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btn_area_onclick();
        	}
        };

        //조회조건 Clear
        this.fn_searchClear = function(obj,e)
        {
        	this.searchDiv.cbo_siteId.set_value(this.gf_getSiteType()); //세션사용자PlantId를 가져온다.

        	this.productId = '';
        	this.productVer = '';
        	this.processSegmentId = '';
        	this.areaId = '';

        	this.searchDiv.cbo_periodType.set_value("THISMONTH"); // 금월
        	this.fn_setDate("THISMONTH");
        };

        //reset
        this.div_header_btn_reset2_onclick = function(obj,e)
        {
        	this.ds_processSegment.clearData();
        	this.ds_inputMatrial.clearData();
        	this.ds_inputLot.clearData();

        	var strCnt = 'Count : <fc v="#f31d24">0</fc><fc v="#999999"></fc>';
        	this.div_work.form.sta_cnt_ds_processSegment.set_text(strCnt);
        	strCnt = 'Count : <fc v="#f31d24">0</fc><fc v="#999999"></fc>';
        	this.div_work.form.sta_cnt_ds_inputMatrial.set_text(strCnt);
        	strCnt = 'Count : <fc v="#f31d24">0</fc><fc v="#999999"></fc>';
        	this.div_work.form.sta_cnt_ds_inputLot.set_text(strCnt);
        };

        this.div_work_grd_request_oncellclick = function(obj,e)
        {
        	var btnIsEnable = this.div_header.form.btn_save.enable;
        	var selVal = this.nfn_nvl(this.ds_processSegment.getColumn(this.ds_processSegment.rowposition, "REQUESTNO"),'');
        	if(selVal==''){ //청구번호가 없으면
        		this.headerDiv.btn_save.set_enable(true);
        		this.headerDiv.btn_slipPrint.set_enable(false); //전표출력 안돼게 처리
        	}else{
        		this.headerDiv.btn_save.set_enable(btnIsEnable);
        		this.headerDiv.btn_slipPrint.set_enable(true);
        		this.ds_processSegment.setColumn(this.ds_processSegment.rowposition, "CHK", "0"); //체크박스 무효화 한다.
        	}
        	this.fn_detailBomSearch();
        };

        this.div_work_grd_inputMatrial_oncellclick = function(obj,e)
        {
        	this.fn_detailLotSearch();
        };

        /*
        this.div_work_CheckBox00_onchanged = function(obj:nexacro.CheckBox,e:nexacro.CheckBoxChangedEventInfo)
        {
        	var chkCnt1 = this.ds_processSegment.getCaseCount("CHK=='1'");

        	if(e.postvalue){ //single/multi에 따라 계산 한다.
        		//alert('자재기준 청구 : Checked');
        		if(chkCnt1>1){
        			//MULTI
        			//alert('멀티 Check...');
        			this.fn_ChkIsStockBaseInProcess_multi_CheckedChanged();
        		}else{
        			//SINGLE
        			//alert('싱글 Check...');
        			this.fn_ChkIsStockBaseInProcess_single_CheckedChanged();
        		}
        	}else{ //무효화 : 상단 현재row 다시 호출  한다.
        		//alert('자재기준 청구 : unChecked');
        		this.fn_detailBomSearch();
        	}
        };
        */

        this.div_work_grd_processSegment_onkeyup = function(obj,e)
        {
        	this.orderBtnControlPrepare(e.row);
        	this.fn_detailBomSearch();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.fn_init,this);
            this.tab_search.Tabpage1.form.btn_product.addEventHandler("onclick",this.tab_search_Tabpage1_btn_product_onclick,this);
            this.tab_search.Tabpage1.form.edt_product.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_product_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.cbo_periodType.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_periodType_onitemchanged,this);
            this.tab_search.Tabpage1.form.cal_periodFr.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.cal_periodTo.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.edt_processSegment.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_processSegment_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_processSegment.addEventHandler("onclick",this.tab_search_Tabpage1_btn_processSegment_onclick,this);
            this.tab_search.Tabpage1.form.edt_area.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_area_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_area.addEventHandler("onclick",this.tab_search_Tabpage1_btn_area_onclick,this);
            this.div_work.form.grd_processSegment.addEventHandler("oncellclick",this.div_work_grd_request_oncellclick,this);
            this.div_work.form.grd_processSegment.addEventHandler("onkeyup",this.div_work_grd_processSegment_onkeyup,this);
            this.div_work.form.grd_inputMatrial.addEventHandler("oncellclick",this.div_work_grd_inputMatrial_oncellclick,this);
            this.div_header.form.btn_reset2.addEventHandler("onclick",this.div_header_btn_reset2_onclick,this);
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_header.form.btn_slipPrint.addEventHandler("onclick",this.fn_detailBomPrint,this);
        };
        this.loadIncludeScript("PCM09000M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
