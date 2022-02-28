(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM02700M");
            this.set_titletext("재공불량 금액현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_qamWorkDefectPriceStatus", this);
            obj._setContents("<ColumnInfo><Column id=\"OCCURDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONPLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"UNITPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTAMOUNT2\" type=\"STRING\" size=\"256\"/><Column id=\"PCSAMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTAMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENCY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DISCOVERUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISINBOUND\" type=\"STRING\" size=\"256\"/><Column id=\"ISCONFIRMATION\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLOSE\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLAIM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONDIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONRESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REASONPLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DISCOVERYSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"INBOUND\" type=\"STRING\" size=\"256\"/><Column id=\"CONFIRMATION\" type=\"STRING\" size=\"256\"/><Column id=\"DEADLINE\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLAIM\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENCY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
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

            obj = new Static("sta_title","30","16","144","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_text("재공불량 금액현황");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MENU_PG-QC-0640");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_qamWorkDefectPriceStatus","31.32%","0","120","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_fittocontents("none");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","0","0",null,"34","sta_cnt_ds_qamWorkDefectPriceStatus:41.67%",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("재공불량 금액현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("WORKDEFECTPRICESTATUS");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_workDefectPriceStatus","0","34",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamWorkDefectPriceStatus");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"210\"/><Column size=\"210\"/><Column size=\"210\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"발생일시\" tooltiptext=\"OCCURDATE\"/><Cell col=\"2\" text=\"발생 Site\" tooltiptext=\"OCCURPLANT\"/><Cell col=\"3\" text=\"양산구분\" tooltiptext=\"LOTTYPE\"/><Cell col=\"4\" text=\"품목코드\" tooltiptext=\"PRODUCTDEFID\"/><Cell col=\"5\" text=\"Rev\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell col=\"6\" text=\"품목명\" tooltiptext=\"PRODUCTDEFNAME\"/><Cell col=\"7\" text=\"Lot No\"/><Cell col=\"8\" text=\"모 Lot\" tooltiptext=\"PARENTLOTID\"/><Cell col=\"9\" text=\"불량코드\" tooltiptext=\"DEFECTCODE\"/><Cell col=\"10\" text=\"불량명\" tooltiptext=\"DEFECTNAME\"/><Cell col=\"11\" text=\"불량수량\" tooltiptext=\"DEFECTQTY\"/><Cell col=\"12\" text=\"수주단가\" tooltiptext=\"ORDERUNITPRICE\"/><Cell col=\"13\" text=\"불량금액(판가)\" tooltiptext=\"DEFECTAMOUNT3\"/><Cell col=\"14\" text=\"불량단가\" tooltiptext=\"DEFECTUNITPRICE\"/><Cell col=\"15\" text=\"불량금액(공정)\" tooltiptext=\"DEFECTAMOUNT4\"/><Cell col=\"16\" text=\"통화\" tooltiptext=\"CURRENCY\"/><Cell col=\"17\" text=\"발견공정\" tooltiptext=\"OCCURSEGMENT\"/><Cell col=\"18\" text=\"발견자\" tooltiptext=\"DISCOVERUSERNAME\"/><Cell col=\"19\" text=\"원인 Site\" tooltiptext=\"REASONPLANT\"/><Cell col=\"20\" text=\"원인품목\" tooltiptext=\"REASONCONSUMABLEDEFID\"/><Cell col=\"21\" text=\"원인 LOTID\" tooltiptext=\"REASONCONSUMABLELOTID\"/><Cell col=\"22\" text=\"원인공정\" tooltiptext=\"REASONSEGMENT\"/><Cell col=\"23\" text=\"원인작업장\" tooltiptext=\"REASONAREA\"/><Cell col=\"24\" text=\"원인업체\" tooltiptext=\"REASONVENDOR\"/><Cell col=\"25\" text=\"인수여부\" tooltiptext=\"ISINBOUND\"/><Cell col=\"26\" text=\"확정여부\" tooltiptext=\"ISCONFIRMATION\"/><Cell col=\"27\" text=\"마감여부\" tooltiptext=\"ISCLOSE\"/><Cell col=\"28\" text=\"CLAIM포함여부\" tooltiptext=\"ISCLAIM\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" textAlign=\"right\"/><Cell col=\"1\" text=\"bind:OCCURDATE\" textAlign=\"left\" displaytype=\"date\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"2\" text=\"bind:PLANTID\"/><Cell col=\"3\" text=\"bind:LOTTYPE\" combocodecol=\"C,ProductionType,,Y,Y\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFID\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"6\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:LOTID\"/><Cell col=\"8\" text=\"bind:PARENTLOTID\"/><Cell col=\"9\" text=\"bind:DEFECTCODE\"/><Cell col=\"10\" text=\"bind:DEFECTCODENAME\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:DEFECTQTY\" textAlign=\"right\" maskeditformat=\"###,###.#\" displaytype=\"mask\"/><Cell col=\"12\" text=\"bind:UNITPRICE\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"###,###.#\"/><Cell col=\"13\" text=\"bind:DEFECTAMOUNT2\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"###,###.#\"/><Cell col=\"14\" text=\"bind:PCSAMOUNT\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"###,###.#\"/><Cell col=\"15\" text=\"bind:DEFECTAMOUNT\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"###,###.#\"/><Cell col=\"16\" text=\"bind:CURRENCY\"/><Cell col=\"17\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"18\" text=\"bind:DISCOVERUSERNAME\" textAlign=\"left\"/><Cell col=\"19\" text=\"bind:REASONPLANTID\"/><Cell col=\"20\" text=\"bind:REASONCONSUMABLEDEFNAME\" textAlign=\"left\"/><Cell col=\"21\" text=\"bind:REASONCONSUMABLELOTID\"/><Cell col=\"22\" text=\"bind:REASONSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"23\" text=\"bind:REASONAREANAME\" textAlign=\"left\"/><Cell col=\"24\" text=\"bind:VENDORNAME\" textAlign=\"left\"/><Cell col=\"25\" text=\"bind:ISINBOUND\"/><Cell col=\"26\" text=\"bind:ISCONFIRMATION\"/><Cell col=\"27\" text=\"bind:ISCLOSE\"/><Cell col=\"28\" text=\"bind:ISCLAIM\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\" textAlign=\"center\"/><Cell col=\"10\" text=\"합계\" tooltiptext=\"SUM\" textAlign=\"center\"/><Cell col=\"11\" displaytype=\"mask\" expr=\"dataset.getSum(&quot;DEFECTQTY&quot;)\" maskeditformat=\"###,###.#\"/><Cell col=\"12\" displaytype=\"mask\" expr=\"dataset.getSum(&quot;UNITPRICE&quot;)\" maskeditformat=\"###,###.#\"/><Cell col=\"13\" displaytype=\"mask\" expr=\"dataset.getSum(&quot;DEFECTAMOUNT2&quot;)\" maskeditformat=\"###,###.#\"/><Cell col=\"14\" displaytype=\"mask\" expr=\"dataset.getSum(&quot;PCSAMOUNT&quot;)\" maskeditformat=\"###,###.#\"/><Cell col=\"15\" displaytype=\"mask\" expr=\"dataset.getSum(&quot;DEFECTAMOUNT&quot;)\" maskeditformat=\"###,###.#\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell col=\"26\"/><Cell col=\"27\"/><Cell col=\"28\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_workDefectPriceStatus",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","450","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","450","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"430","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label01","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("SEARCHPERIOD");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_reasonresourcetype","0","185","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("원인 자원구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("080CB268F84F4B448416F6E7ED23B8F0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_reasonplant","0","210","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("원인 Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("REASONPLANT");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_reasonarea","0","235","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("원인작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("REASONAREA");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_reasonvendor","0","260","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("원인업체");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("REASONVENDOR");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_defectcodeProcess","0","285","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_text("불량코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("DEFECTCODE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_isclaim","0","410","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_text("Claim확정여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("FA2A7F9869E44FB48C78110008474DFD");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_isclose","0","385","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_text("마감여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ISCLOSE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_isconfirmation","0","360","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_text("확정여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ISCONFIRMATION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_isinbound","0","335","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("24");
            obj.set_text("인수여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ISINBOUND");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_processsegment","0","310","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_text("발견공정");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("OCCURSEGMENT");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_reasonresourcetype","108","185","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_codecolumn("C,OwnType,ALL,Y,Y");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_reasonplant","108","210","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_isinbound","108","335","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_isconfirmation","108","360","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_isclaim","108","410","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_defectcodeProcess","108","285",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_defectcodeProcess",null,"285","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_discoveryProcesssegment","108","310",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_discoveryProcesssegment",null,"310","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_site","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("26");
            obj.set_codecolumn("C,SiteType,,Y,Y");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("27");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("PLANTID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_dateFrom","108","35",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("28");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210104");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_dateTo","108","60",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("29");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210104");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_periodType","10","60","94","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("30");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_productdeftype","108","85","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("31");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_productdeftype","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("32");
            obj.set_text("양산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LOTPRODUCTTYPE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_lotId","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("33");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LOTID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_lotId","108","135","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_productdef","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("34");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCT");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productdef","108","160",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("35");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_productdef",null,"160","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("36");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_reasonarea","108","235",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("37");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_reasonarea",null,"235","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("38");
            obj.set_cssclass("btn_WF_finder");
            obj.set_text("");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_reasonvendor","108","260",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("39");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_reasonvendor",null,"260","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("40");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_isclose","108","385","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("41");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            obj.set_text("YESNO");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productdef_id","10","569","120","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("42");
            obj.set_value("품목ID (HIDDEN)");
            obj.set_visible("false");
            obj.set_text("품목ID (HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_reasonvendor_id","10","622","120","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("43");
            obj.set_value("원인업체ID (HIDDEN)");
            obj.set_visible("false");
            obj.set_text("원인업체ID (HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_reasonarea_id","10","594","120","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("44");
            obj.set_value("원인작업장ID (HIDDEN)");
            obj.set_visible("false");
            obj.set_text("원인작업장ID (HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_defectcodeProcess_id","140","579","120","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("45");
            obj.set_value("불량코드ID (HIDDEN)");
            obj.set_visible("false");
            obj.set_text("불량코드ID (HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_discoveryProcesssegment_id","140","604","120","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("46");
            obj.set_value("발견공정ID (HIDDEN)");
            obj.set_visible("false");
            obj.set_text("발견공정ID (HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_defectlotId","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("47");
            obj.set_text("불량 Lot No");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("DEFECTLOTID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_defectlotId","108","110","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productdef_cd","9","544","120","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("48");
            obj.set_value("품목REV (HIDDEN)");
            obj.set_visible("false");
            obj.set_text("품목REV (HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","290","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("QAM02700M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("QAM02700M.xfdl","lib::lib_qam.xjs");
        this.registerScript("QAM02700M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 재공불량금액현황
         * 파일명 		: QAM02700M.xfdl
         * 작성자 		: 권혜영
         * 작성일 		: 2021.05.12
         *
         * 설  명		: 품질관리 > 품질비용분석 > 재공불량금액현황
         *				  재공 불량에 대해 단가를 조회한다.
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.05.12	권혜영   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_qam.xjs"); /*include "lib::lib_qam.xjs"*/;	//품질관리 공통 라이브러리 include
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.basfn_getPeriodData("ds_periodType");
        	this.fn_initCombo();
        	this.fn_formInit();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
         	var dateFrom = this.tab_search.Tabpage1.form.cal_dateFrom.value + this.qam_jobStartTime;
        	var dateTo = this.tab_search.Tabpage1.form.cal_dateTo.value + this.qam_jobEndTime;

        	this.ds_qamWorkDefectPriceStatus.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();

        	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0, "PLANTID", this.tab_search.Tabpage1.form.cbo_site.value);
        	this.ds_search.setColumn(0, "PERIODFR", dateFrom);
        	this.ds_search.setColumn(0, "PERIODTO", dateTo);

        	this.ds_search.setColumn(0, "PRODUCTIONDIVISION", this.tab_search.Tabpage1.form.cbo_productdeftype.value);
        	this.ds_search.setColumn(0, "DEFECTLOTID", this.tab_search.Tabpage1.form.edt_defectlotId.value);
        	this.ds_search.setColumn(0, "LOTID", this.tab_search.Tabpage1.form.edt_lotId.value);
        	this.ds_search.setColumn(0, "PRODUCTDEFID", this.tab_search.Tabpage1.form.edt_productdef_id.value);
        	this.ds_search.setColumn(0, "PRODUCTDEFVERSION", this.tab_search.Tabpage1.form.edt_productdef_cd.value); //품목 Rev
        	this.ds_search.setColumn(0, "REASONRESOURCETYPE", this.tab_search.Tabpage1.form.cbo_reasonresourcetype.value);
        	this.ds_search.setColumn(0, "REASONPLANTID", this.tab_search.Tabpage1.form.cbo_reasonplant.value);

        	this.ds_search.setColumn(0, "AREAID", this.tab_search.Tabpage1.form.edt_reasonarea_id.value);
        	this.ds_search.setColumn(0, "VENDORID", this.tab_search.Tabpage1.form.edt_reasonvendor_id.value);
        	this.ds_search.setColumn(0, "DEFECTCODE", this.tab_search.Tabpage1.form.edt_defectcodeProcess_id.value);
        	this.ds_search.setColumn(0, "DISCOVERYSEGMENTID", this.tab_search.Tabpage1.form.edt_discoveryProcesssegment_id.value);
        	this.ds_search.setColumn(0, "INBOUND", this.tab_search.Tabpage1.form.cbo_isinbound.value);
        	this.ds_search.setColumn(0, "CONFIRMATION", this.tab_search.Tabpage1.form.cbo_isconfirmation.value);
        	this.ds_search.setColumn(0, "DEADLINE", this.tab_search.Tabpage1.form.cbo_isclose.value);
        	this.ds_search.setColumn(0, "ISCLAIM", this.tab_search.Tabpage1.form.cbo_isclaim.value);

        	var sSvcID 			= "selectQamWorkDefectPriceStatusList";
        	var sController 	= "/qam02700/selectQamWorkDefectPriceStatusList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_qamWorkDefectPriceStatus=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        	this.fn_formInit();
        };

        /*
         * 기능 : 신규
         */
        this.fn_add = function(obj,e)
        {

        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {

        };

        /*
         * 기능 : 삭제
         */
        this.fn_delete = function (obj, e)
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
        	else
        	{
        		if (trId == "selectQamWorkDefectPriceStatusList")
        		{

        		}
        	}
        };


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 최초 호출되는 초기화 함수
         */
        this.fn_formInit = function ()
        {
        	this.ds_CSiteType.filter("LOOKUP_CODE == '"+this.gf_getSiteType()+"'");
        	this.tab_search.Tabpage1.form.cbo_site.set_index(0);

        	this.tab_search.Tabpage1.form.cbo_periodType.set_value("THISWEEK"); //금주
        	this.qamfn_setCompControl(this.tab_search.Tabpage1.form.components, "empty");

        	this.fn_setDate("THISWEEK");
        };

        /*
         * 검색 콤보 조회
         */
        this.fn_initCombo = function ()
        {
        	var sArgs 		= "";
        	sArgs 			+= this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());
        	sArgs 			+= this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());

        	var oColumn 	= {code: "PLANTID", name: "PLANTNAME"};

        	this.qamfn_setCustomQueryCmb(this.tab_search.Tabpage1.form.cbo_reasonplant // Object
        								, "selectPlantListByQcm,ALL,Y,A" // OPTION
        								, sArgs
        								, "fn_callBack"
        								, true 										//Async
        								, oColumn);
        };

        /*
         * 기능 : 검색일자 변경시 검색구분을 [사용자지정]으로 변경
         */

        this.fn_changeCalendar = function() {
        	this.tab_search.Tabpage1.form.cbo_periodType.set_value("CUSTOM");
        };

        /*
         * 기능 : 검색일자 바인딩 함수
         */
        this.fn_setDate = function (periodType)
        {
        	this.tab_search.Tabpage1.form.cal_dateFrom.set_value(this.ds_periodType.getColumn(0,periodType+"_S"));
        	this.tab_search.Tabpage1.form.cal_dateTo.set_value(this.ds_periodType.getColumn(0,periodType+"_E"));
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.tab_search_Tabpage1_cbo_periodType_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != "CUSTOM"){
        		this.fn_setDate(e.postvalue);
        	}
        };

        this.tab_search_Tabpage1_cal_dateTo_onchanged = function(obj,e)
        {
        	this.fn_changeCalendar();
        };

        this.tab_search_Tabpage1_cal_dateFrom_onchanged = function(obj,e)
        {
        	this.fn_changeCalendar();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.btn_defectcodeProcess.addEventHandler("onclick",this.qamfn_callOpenPopButtonEvent,this);
            this.tab_search.Tabpage1.form.btn_discoveryProcesssegment.addEventHandler("onclick",this.qamfn_callOpenPopButtonEvent,this);
            this.tab_search.Tabpage1.form.cal_dateFrom.addEventHandler("onchanged",this.tab_search_Tabpage1_cal_dateFrom_onchanged,this);
            this.tab_search.Tabpage1.form.cal_dateTo.addEventHandler("onchanged",this.tab_search_Tabpage1_cal_dateTo_onchanged,this);
            this.tab_search.Tabpage1.form.cbo_periodType.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_periodType_onitemchanged,this);
            this.tab_search.Tabpage1.form.btn_productdef.addEventHandler("onclick",this.qamfn_callOpenPopButtonEvent,this);
            this.tab_search.Tabpage1.form.btn_reasonarea.addEventHandler("onclick",this.qamfn_callOpenPopButtonEvent,this);
            this.tab_search.Tabpage1.form.btn_reasonvendor.addEventHandler("onclick",this.qamfn_callOpenPopButtonEvent,this);
        };
        this.loadIncludeScript("QAM02700M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
