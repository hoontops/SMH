(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM05500M");
            this.set_titletext("재공품 Aging현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_agingProduct", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"LESS1MONTH_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"LESS1MONTH_PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"LESS1MONTH_MM\" type=\"STRING\" size=\"256\"/><Column id=\"LESS1MONTH_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"LESS1TO3MONTH_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"LESS1TO3MONTH_PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"LESS1TO3MONTH_MM\" type=\"STRING\" size=\"256\"/><Column id=\"LESS1TO3MONTH_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"LESS3TO6MONTH_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"LESS3TO6MONTH_PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"LESS3TO6MONTH_MM\" type=\"STRING\" size=\"256\"/><Column id=\"LESS3TO6MONTH_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"MORE6MONTH_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"MORE6MONTH_PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"MORE6MONTH_MM\" type=\"STRING\" size=\"256\"/><Column id=\"MORE6MONTH_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"SUM_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"SUM_PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SUM_MM\" type=\"STRING\" size=\"256\"/><Column id=\"SUM_PRICE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANYCLIENT\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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


            obj = new Dataset("ds_agingLot", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSRECEIPTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTARTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"ISSMT\" type=\"STRING\" size=\"256\"/><Column id=\"LESS1MONTH_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"LESS1MONTH_PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"LESS1MONTH_MM\" type=\"STRING\" size=\"256\"/><Column id=\"LESS1MONTH_BAREPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"LESS1MONTH_SMTPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"LESS1MONTH_SUMMARYPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"LESS1TO3MONTH_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"LESS1TO3MONTH_PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"LESS1TO3MONTH_MM\" type=\"STRING\" size=\"256\"/><Column id=\"LESS1TO3MONTH_BAREPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"LESS1TO3MONTH_SMTPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"LESS1TO3MONTH_SUMMARYPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"LESS3TO6MONTH_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"LESS3TO6MONTH_PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"LESS3TO6MONTH_MM\" type=\"STRING\" size=\"256\"/><Column id=\"LESS3TO6MONTH_BAREPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"LESS3TO6MONTH_SMTPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"LESS3TO6MONTH_SUMMARYPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"MORE6MONTH_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"MORE6MONTH_PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"MORE6MONTH_MM\" type=\"STRING\" size=\"256\"/><Column id=\"MORE6MONTH_BAREPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"MORE6MONTH_SMTPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"MORE6MONTH_SUMMARYPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"BAREPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"SMTPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"SUMMARYPRICE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Combo("cbo_PRODUCTDIVISION","108","160","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("6");
            obj.set_codecolumn("C,ProductDivision2,ALL,Y,Y");
            obj.set_text("선택");
            obj.set_index("0");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"cbo_PRODUCTDIVISION:0","45","20","91",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("13");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","Static12_00_00_00_01_00_00:0","102","36",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_search","15","Static12_00_00_00_01_00_00:0","146","36",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"70","15","97","0",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("9");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","80","15","97",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("10");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("11");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00",null,"30","45","5","91",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("12");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","Static12_00_00_00_01_00_00:6","10","27",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("14");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PLANTID","0","10","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("15");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PLANT");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_PLANTID","108","10","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,SiteType,ALL,Y,Y");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_hotkey("F2");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTDEFID","0","sta_PLANTID:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("16");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMCODE");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID","108","cbo_PLANTID:5",null,"20","37",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("1");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_PRODUCTDEFID",null,"cbo_PLANTID:5","22","20","15",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTDEFVERSION","0","sta_PRODUCTDEFID:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("18");
            obj.set_text("Rev.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("INNERREVISION");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTDEFVERSION","108","edt_PRODUCTDEFID:5","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("2");
            obj.set_codecolumn("PRODUCTDEFVERSIONCODE");
            obj.set_datacolumn("PRODUCTDEFVERSIONNAME");
            obj.set_innerdataset("ds_cbo_ProdVersion");
            obj.set_text("전체조회");
            obj.set_value("");
            obj.set_index("0");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTDEFNAME","0","sta_PRODUCTDEFVERSION:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("19");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMID");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFNAME","108","cbo_PRODUCTDEFVERSION:5",null,"20","15",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("3");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_COMPANYCLIENT","0","sta_PRODUCTDEFNAME:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_text("고객사");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("COMPANYCLIENT");
            obj.set_taborder("22");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_COMPANYCLIENT","108","edt_PRODUCTDEFNAME:5",null,"20","37",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("4");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_COMPANYCLIENT","251","edt_PRODUCTDEFNAME:5","22","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTIONTYPE","0","sta_COMPANYCLIENT:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("20");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTIONTYPE");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTIONTYPE","108","edt_COMPANYCLIENT:5","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("5");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            obj.set_text("전체조회");
            obj.set_value("");
            obj.set_index("0");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTDIVISION","0","sta_PRODUCTIONTYPE:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_text("제품구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("21");
            obj.set_tooltiptext("THEPRODUCTTYPE");
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

            obj = new Tab("tab_Main","0","0",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            obj.set_positionstep("0");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab_Main);
            obj.set_text("품목");
            obj.set_tooltiptext("ITEM");
            this.div_work.form.tab_Main.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_agingProduct",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_agingProduct","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_agingProduct");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"110\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"250\" band=\"left\"/><Column size=\"130\" band=\"left\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" colspan=\"7\"/><Cell col=\"8\" colspan=\"4\" text=\"1개월미만\" tooltiptext=\"LESSONEMONTH\"/><Cell col=\"12\" colspan=\"4\" text=\"1~3개월미만\" tooltiptext=\"LESSONETOTHREEMONTH\"/><Cell col=\"16\" colspan=\"4\" text=\"3~6개월미만\" tooltiptext=\"LESSTHREEMONTH\"/><Cell col=\"20\" colspan=\"4\" text=\"6개월이상\" tooltiptext=\"MORESIXMONTH\"/><Cell col=\"24\" colspan=\"4\" text=\"총계\" tooltiptext=\"TOTAL\"/><Cell row=\"1\" text=\"No\"/><Cell row=\"1\" col=\"1\" text=\"Site ID\" tooltiptext=\"PLANTID\"/><Cell row=\"1\" col=\"2\" text=\"고객명\" tooltiptext=\"CUSTOMERNAME\"/><Cell row=\"1\" col=\"3\" text=\"생산구분\" tooltiptext=\"PRODUCTIONTYPE\"/><Cell row=\"1\" col=\"4\" text=\"품목코드\" tooltiptext=\"ITEMCODE\"/><Cell row=\"1\" col=\"5\" text=\"Rev.\" tooltiptext=\"INNERREVISION\"/><Cell row=\"1\" col=\"6\" text=\"품목명\" tooltiptext=\"ITEMNAME\"/><Cell row=\"1\" col=\"7\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell row=\"1\" col=\"8\" text=\"수량\" tooltiptext=\"OSPDAY26QTY\"/><Cell row=\"1\" col=\"9\" text=\"수량(PNL)\" tooltiptext=\"PANELQTY\"/><Cell row=\"1\" col=\"10\" text=\"MM\" tooltiptext=\"OSPDAY09MM\"/><Cell row=\"1\" col=\"11\" text=\"금액\" tooltiptext=\"WIPPRICE\"/><Cell row=\"1\" col=\"12\" text=\"수량\" tooltiptext=\"OSPDAY26QTY\"/><Cell row=\"1\" col=\"13\" text=\"수량(PNL)\" tooltiptext=\"PANELQTY\"/><Cell row=\"1\" col=\"14\" text=\"MM\" tooltiptext=\"OSPDAY09MM\"/><Cell row=\"1\" col=\"15\" text=\"금액\" tooltiptext=\"WIPPRICE\"/><Cell row=\"1\" col=\"16\" text=\"수량\" tooltiptext=\"OSPDAY26QTY\"/><Cell row=\"1\" col=\"17\" text=\"수량(PNL)\" tooltiptext=\"PANELQTY\"/><Cell row=\"1\" col=\"18\" text=\"MM\" tooltiptext=\"OSPDAY09MM\"/><Cell row=\"1\" col=\"19\" text=\"금액\" tooltiptext=\"WIPPRICE\"/><Cell row=\"1\" col=\"20\" text=\"수량\" tooltiptext=\"OSPDAY26QTY\"/><Cell row=\"1\" col=\"21\" text=\"수량(PNL)\" tooltiptext=\"PANELQTY\"/><Cell row=\"1\" col=\"22\" text=\"MM\" tooltiptext=\"OSPDAY09MM\"/><Cell row=\"1\" col=\"23\" text=\"금액\" tooltiptext=\"WIPPRICE\"/><Cell row=\"1\" col=\"24\" text=\"수량\" tooltiptext=\"OSPDAY26QTY\"/><Cell row=\"1\" col=\"25\" text=\"수량(PNL)\" tooltiptext=\"PANELQTY\"/><Cell row=\"1\" col=\"26\" text=\"MM\" tooltiptext=\"OSPDAY09MM\"/><Cell row=\"1\" col=\"27\" text=\"금액\" tooltiptext=\"WIPPRICE\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PLANTID\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:CUSTOMERNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:LOTTYPE\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"7\" textAlign=\"left\" text=\"bind:PROCESSSEGMENTNAME\"/><Cell col=\"8\" displaytype=\"number\" textAlign=\"right\" text=\"bind:LESS1MONTH_QTY\"/><Cell col=\"9\" displaytype=\"number\" textAlign=\"right\" text=\"bind:LESS1MONTH_PNLQTY\"/><Cell col=\"10\" displaytype=\"number\" textAlign=\"right\" text=\"bind:LESS1MONTH_MM\"/><Cell col=\"11\" displaytype=\"number\" textAlign=\"right\" text=\"bind:LESS1MONTH_PRICE\"/><Cell col=\"12\" displaytype=\"number\" textAlign=\"right\" text=\"bind:LESS1TO3MONTH_QTY\"/><Cell col=\"13\" displaytype=\"number\" textAlign=\"right\" text=\"bind:LESS1TO3MONTH_PNLQTY\"/><Cell col=\"14\" displaytype=\"number\" textAlign=\"right\" text=\"bind:LESS1TO3MONTH_MM\"/><Cell col=\"15\" displaytype=\"number\" textAlign=\"right\" text=\"bind:LESS1TO3MONTH_PRICE\"/><Cell col=\"16\" displaytype=\"number\" textAlign=\"right\" text=\"bind:LESS3TO6MONTH_QTY\"/><Cell col=\"17\" displaytype=\"number\" textAlign=\"right\" text=\"bind:LESS3TO6MONTH_PNLQTY\"/><Cell col=\"18\" displaytype=\"number\" textAlign=\"right\" text=\"bind:LESS3TO6MONTH_MM\"/><Cell col=\"19\" displaytype=\"number\" textAlign=\"right\" text=\"bind:LESS1TO3MONTH_PRICE\"/><Cell col=\"20\" displaytype=\"number\" textAlign=\"right\" text=\"bind:MORE6MONTH_QTY\"/><Cell col=\"21\" displaytype=\"number\" textAlign=\"right\" text=\"bind:MORE6MONTH_PNLQTY\"/><Cell col=\"22\" displaytype=\"number\" textAlign=\"right\" text=\"bind:MORE6MONTH_MM\"/><Cell col=\"23\" displaytype=\"number\" textAlign=\"right\" text=\"bind:MORE6MONTH_PRICE\"/><Cell col=\"24\" displaytype=\"number\" textAlign=\"right\" text=\"bind:SUM_QTY\"/><Cell col=\"25\" displaytype=\"number\" textAlign=\"right\" text=\"bind:SUM_PNLQTY\"/><Cell col=\"26\" displaytype=\"number\" textAlign=\"right\" text=\"bind:SUM_MM\"/><Cell col=\"27\" displaytype=\"number\" textAlign=\"right\" text=\"bind:SUM_PRICE\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\" text=\"합계\" tooltiptext=\"TOTALAMOUNT\"/><Cell col=\"7\"/><Cell col=\"8\" displaytype=\"number\" expr=\"dataset.getSum(&quot;LESS1MONTH_QTY&quot;) \"/><Cell col=\"9\" displaytype=\"number\" expr=\"dataset.getSum(&quot;LESS1MONTH_PNLQTY&quot;) \"/><Cell col=\"10\" displaytype=\"number\" expr=\"dataset.getSum(&quot;LESS1MONTH_MM&quot;) \"/><Cell col=\"11\" displaytype=\"number\" expr=\"dataset.getSum(&quot;LESS1MONTH_PRICE&quot;) \"/><Cell col=\"12\" displaytype=\"number\" expr=\"dataset.getSum(&quot;LESS1TO3MONTH_QTY&quot;) \"/><Cell col=\"13\" displaytype=\"number\" expr=\"dataset.getSum(&quot;LESS1TO3MONTH_PNLQTY&quot;) \"/><Cell col=\"14\" displaytype=\"number\" expr=\"dataset.getSum(&quot;LESS1TO3MONTH_MM&quot;) \"/><Cell col=\"15\" displaytype=\"number\" expr=\"dataset.getSum(&quot;LESS1TO3MONTH_PRICE&quot;) \"/><Cell col=\"16\" displaytype=\"number\" expr=\"dataset.getSum(&quot;LESS3TO6MONTH_QTY&quot;) \"/><Cell col=\"17\" displaytype=\"number\" expr=\"dataset.getSum(&quot;LESS3TO6MONTH_PNLQTY&quot;) \"/><Cell col=\"18\" displaytype=\"number\" expr=\"dataset.getSum(&quot;LESS3TO6MONTH_MM&quot;) \"/><Cell col=\"19\" displaytype=\"number\" expr=\"dataset.getSum(&quot;LESS1TO3MONTH_PRICE&quot;) \"/><Cell col=\"20\" displaytype=\"number\" expr=\"dataset.getSum(&quot;MORE6MONTH_QTY&quot;) \"/><Cell col=\"21\" displaytype=\"number\" expr=\"dataset.getSum(&quot;MORE6MONTH_PNLQTY&quot;) \"/><Cell col=\"22\" displaytype=\"number\" expr=\"dataset.getSum(&quot;MORE6MONTH_MM&quot;) \"/><Cell col=\"23\" displaytype=\"number\" expr=\"dataset.getSum(&quot;MORE6MONTH_PRICE&quot;) \"/><Cell col=\"24\" displaytype=\"number\" expr=\"dataset.getSum(&quot;SUM_QTY&quot;) \"/><Cell col=\"25\" displaytype=\"number\" expr=\"dataset.getSum(&quot;SUM_PNLQTY&quot;) \"/><Cell col=\"26\" displaytype=\"number\" expr=\"dataset.getSum(&quot;SUM_MM&quot;) \"/><Cell col=\"27\" displaytype=\"number\" expr=\"dataset.getSum(&quot;SUM_PRICE&quot;) \"/></Band></Format></Formats>");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_subMainTitle","0","0","100","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("품목별 Aging 현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("AGINGSTATUSBYPRODUCT");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_agingProduct","92","0","140","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab_Main);
            obj.set_text("LOT");
            this.div_work.form.tab_Main.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","130","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("Lot별 Aging 현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("AGINGSTATUSBYLOT");
            this.div_work.form.tab_Main.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_agingLot",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_Main.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_agingLot","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_Main.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds_agingLot");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"110\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"200\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"175\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" colspan=\"5\"/><Cell col=\"6\" colspan=\"6\"/><Cell col=\"12\" colspan=\"6\" text=\"1개월미만\" tooltiptext=\"LESSONEMONTH\"/><Cell col=\"18\" colspan=\"6\" text=\"1~3개월미만\" tooltiptext=\"LESSONETOTHREEMONTH\"/><Cell col=\"24\" colspan=\"6\" text=\"3~6개월미만\" tooltiptext=\"LESSTHREEMONTH\"/><Cell col=\"30\" colspan=\"6\" text=\"6개월이상\" tooltiptext=\"MORESIXMONTH\"/><Cell col=\"36\" colspan=\"4\" text=\"총계\" tooltiptext=\"TOTAL\"/><Cell col=\"39\"/><Cell col=\"40\"/><Cell col=\"41\"/><Cell row=\"1\" text=\"No\"/><Cell row=\"1\" col=\"1\" text=\"품목코드\" tooltiptext=\"ITEMCODE\"/><Cell row=\"1\" col=\"2\" text=\"Rev.\" tooltiptext=\"INNERREVISION\"/><Cell row=\"1\" col=\"3\" text=\"품목명\" tooltiptext=\"ITEMNAME\"/><Cell row=\"1\" col=\"4\" text=\"고객명\" tooltiptext=\"CUSTOMERNAME\"/><Cell row=\"1\" col=\"5\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell row=\"1\" col=\"6\" text=\"작업장\" tooltiptext=\"WORKAREA\"/><Cell row=\"1\" col=\"7\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell row=\"1\" col=\"8\" text=\"공정투입일시\" tooltiptext=\"SEGMENTINPUTDATE\"/><Cell row=\"1\" col=\"9\" text=\"LOT 투입일\" tooltiptext=\"LOTINPUTDATE\"/><Cell row=\"1\" col=\"10\" text=\"보류 여부\" tooltiptext=\"ISHOLD\"/><Cell row=\"1\" col=\"11\" text=\"SMT여부\" tooltiptext=\"ISSMT\"/><Cell row=\"1\" col=\"12\" text=\"수량\" tooltiptext=\"OSPDAY26QTY\"/><Cell row=\"1\" col=\"13\" text=\"수량(PNL)\" tooltiptext=\"PANELQTY\"/><Cell row=\"1\" col=\"14\" text=\"MM\" tooltiptext=\"OSPDAY09MM\"/><Cell row=\"1\" col=\"15\" text=\"BARE금액\" tooltiptext=\"BAREPRICE\"/><Cell row=\"1\" col=\"16\" text=\"SMT금액\" tooltiptext=\"SMTPRICE\"/><Cell row=\"1\" col=\"17\" text=\"합계금액\" tooltiptext=\"SUMMARYPRICE\"/><Cell row=\"1\" col=\"18\" text=\"수량\" tooltiptext=\"OSPDAY26QTY\"/><Cell row=\"1\" col=\"19\" text=\"수량(PNL)\" tooltiptext=\"PANELQTY\"/><Cell row=\"1\" col=\"20\" text=\"MM\" tooltiptext=\"OSPDAY09MM\"/><Cell row=\"1\" col=\"21\" text=\"BARE금액\" tooltiptext=\"BAREPRICE\"/><Cell row=\"1\" col=\"22\" text=\"SMT금액\" tooltiptext=\"SMTPRICE\"/><Cell row=\"1\" col=\"23\" text=\"합계금액\" tooltiptext=\"SUMMARYPRICE\"/><Cell row=\"1\" col=\"24\" text=\"수량\" tooltiptext=\"OSPDAY26QTY\"/><Cell row=\"1\" col=\"25\" text=\"수량(PNL)\" tooltiptext=\"PANELQTY\"/><Cell row=\"1\" col=\"26\" text=\"MM\" tooltiptext=\"OSPDAY09MM\"/><Cell row=\"1\" col=\"27\" text=\"BARE금액\" tooltiptext=\"BAREPRICE\"/><Cell row=\"1\" col=\"28\" text=\"SMT금액\" tooltiptext=\"SMTPRICE\"/><Cell row=\"1\" col=\"29\" text=\"합계금액\" tooltiptext=\"SUMMARYPRICE\"/><Cell row=\"1\" col=\"30\" text=\"수량\" tooltiptext=\"OSPDAY26QTY\"/><Cell row=\"1\" col=\"31\" text=\"수량(PNL)\" tooltiptext=\"PANELQTY\"/><Cell row=\"1\" col=\"32\" text=\"MM\" tooltiptext=\"OSPDAY09MM\"/><Cell row=\"1\" col=\"33\" text=\"BARE금액\" tooltiptext=\"BAREPRICE\"/><Cell row=\"1\" col=\"34\" text=\"SMT금액\" tooltiptext=\"SMTPRICE\"/><Cell row=\"1\" col=\"35\" text=\"합계금액\" tooltiptext=\"SUMMARYPRICE\"/><Cell row=\"1\" col=\"36\" text=\"수량\" tooltiptext=\"OSPDAY26QTY\"/><Cell row=\"1\" col=\"37\" text=\"수량(PNL)\" tooltiptext=\"PANELQTY\"/><Cell row=\"1\" col=\"38\" text=\"MM\" tooltiptext=\"OSPDAY09MM\"/><Cell row=\"1\" col=\"39\" text=\"BARE금액\" tooltiptext=\"BAREPRICE\"/><Cell row=\"1\" col=\"40\" text=\"SMT금액\" tooltiptext=\"SMTPRICE\"/><Cell row=\"1\" col=\"41\" text=\"합계금액\" tooltiptext=\"SUMMARYPRICE\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:CUSTOMERNAME\" textAlign=\"left\"/><Cell col=\"5\" textAlign=\"left\" text=\"bind:LOTID\"/><Cell col=\"6\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"7\" textAlign=\"left\" text=\"bind:PROCESSSEGMENTNAME\"/><Cell col=\"8\" text=\"bind:PROCESSRECEIPTDATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"9\" text=\"bind:LOTSTARTDATE\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" displaytype=\"date\"/><Cell col=\"10\" text=\"bind:ISHOLD\"/><Cell col=\"11\" text=\"bind:ISSMT\"/><Cell col=\"12\" displaytype=\"number\" textAlign=\"right\" text=\"bind:LESS1MONTH_QTY\"/><Cell col=\"13\" displaytype=\"number\" textAlign=\"right\" text=\"bind:LESS1MONTH_PNLQTY\"/><Cell col=\"14\" displaytype=\"number\" textAlign=\"right\" text=\"bind:LESS1MONTH_MM\"/><Cell col=\"15\" displaytype=\"number\" textAlign=\"right\" text=\"bind:LESS1MONTH_BAREPRICE\"/><Cell col=\"16\" displaytype=\"number\" textAlign=\"right\" text=\"bind:LESS1MONTH_SMTPRICE\"/><Cell col=\"17\" displaytype=\"number\" textAlign=\"right\" text=\"bind:LESS1MONTH_SUMMARYPRICE\"/><Cell col=\"18\" displaytype=\"number\" textAlign=\"right\" text=\"bind:LESS1TO3MONTH_QTY\"/><Cell col=\"19\" displaytype=\"number\" textAlign=\"right\" text=\"bind:LESS1TO3MONTH_PNLQTY\"/><Cell col=\"20\" displaytype=\"number\" textAlign=\"right\" text=\"bind:LESS1TO3MONTH_MM\"/><Cell col=\"21\" displaytype=\"number\" textAlign=\"right\" text=\"bind:LESS1TO3MONTH_BAREPRICE\"/><Cell col=\"22\" displaytype=\"number\" textAlign=\"right\" text=\"bind:LESS1TO3MONTH_SMTPRICE\"/><Cell col=\"23\" displaytype=\"number\" textAlign=\"right\" text=\"bind:LESS1TO3MONTH_SUMMARYPRICE\"/><Cell col=\"24\" displaytype=\"number\" textAlign=\"right\" text=\"bind:LESS3TO6MONTH_QTY\"/><Cell col=\"25\" displaytype=\"number\" textAlign=\"right\" text=\"bind:LESS3TO6MONTH_PNLQTY\"/><Cell col=\"26\" displaytype=\"number\" textAlign=\"right\" text=\"bind:LESS3TO6MONTH_MM\"/><Cell col=\"27\" displaytype=\"number\" textAlign=\"right\" text=\"bind:LESS3TO6MONTH_BAREPRICE\"/><Cell col=\"28\" displaytype=\"number\" textAlign=\"right\" text=\"bind:LESS3TO6MONTH_SMTPRICE\"/><Cell col=\"29\" displaytype=\"number\" textAlign=\"right\" text=\"bind:LESS3TO6MONTH_SUMMARYPRICE\"/><Cell col=\"30\" displaytype=\"number\" textAlign=\"right\" text=\"bind:MORE6MONTH_QTY\"/><Cell col=\"31\" displaytype=\"number\" textAlign=\"right\" text=\"bind:MORE6MONTH_PNLQTY\"/><Cell col=\"32\" displaytype=\"number\" textAlign=\"right\" text=\"bind:MORE6MONTH_MM\"/><Cell col=\"33\" displaytype=\"number\" textAlign=\"right\" text=\"bind:MORE6MONTH_BAREPRICE\"/><Cell col=\"34\" displaytype=\"number\" textAlign=\"right\" text=\"bind:MORE6MONTH_SMTPRICE\"/><Cell col=\"35\" displaytype=\"number\" textAlign=\"right\" text=\"bind:MORE6MONTH_SUMMARYPRICE\"/><Cell col=\"36\" displaytype=\"number\" textAlign=\"right\" text=\"bind:QTY\"/><Cell col=\"37\" displaytype=\"number\" textAlign=\"right\" text=\"bind:PNLQTY\"/><Cell col=\"38\" displaytype=\"number\" textAlign=\"right\" text=\"bind:MM\"/><Cell col=\"39\" displaytype=\"number\" textAlign=\"right\" text=\"bind:BAREPRICE\"/><Cell col=\"40\" displaytype=\"number\" textAlign=\"right\" text=\"bind:SMTPRICE\"/><Cell col=\"41\" displaytype=\"number\" textAlign=\"right\" text=\"bind:SUMMARYPRICE\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\" text=\"합계\" tooltiptext=\"TOTALAMOUNT\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\" displaytype=\"number\" expr=\"dataset.getSum(&quot;LESS1MONTH_QTY&quot;)\"/><Cell col=\"13\" displaytype=\"number\" expr=\"dataset.getSum(&quot;LESS1MONTH_PNLQTY&quot;)\"/><Cell col=\"14\" displaytype=\"number\" expr=\"dataset.getSum(&quot;LESS1MONTH_MM&quot;)\"/><Cell col=\"15\" displaytype=\"number\" expr=\"dataset.getSum(&quot;LESS1MONTH_BAREPRICE&quot;)\"/><Cell col=\"16\" displaytype=\"number\" expr=\"dataset.getSum(&quot;LESS1MONTH_SMTPRICE&quot;)\"/><Cell col=\"17\" displaytype=\"number\" expr=\"dataset.getSum(&quot;LESS1MONTH_SUMMARYPRICE&quot;)\"/><Cell col=\"18\" displaytype=\"number\" expr=\"dataset.getSum(&quot;LESS1TO3MONTH_QTY&quot;)\"/><Cell col=\"19\" displaytype=\"number\" expr=\"dataset.getSum(&quot;LESS1TO3MONTH_PNLQTY&quot;)\"/><Cell col=\"20\" displaytype=\"number\" expr=\"dataset.getSum(&quot;LESS1TO3MONTH_MM&quot;)\"/><Cell col=\"21\" displaytype=\"number\" expr=\"dataset.getSum(&quot;LESS1TO3MONTH_BAREPRICE&quot;)\"/><Cell col=\"22\" displaytype=\"number\" expr=\"dataset.getSum(&quot;LESS1TO3MONTH_SMTPRICE&quot;)\"/><Cell col=\"23\" displaytype=\"number\" expr=\"dataset.getSum(&quot;LESS1TO3MONTH_SUMMARYPRICE&quot;)\"/><Cell col=\"24\" displaytype=\"number\" expr=\"dataset.getSum(&quot;LESS3TO6MONTH_QTY&quot;)\"/><Cell col=\"25\" displaytype=\"number\" expr=\"dataset.getSum(&quot;LESS3TO6MONTH_PNLQTY&quot;)\"/><Cell col=\"26\" displaytype=\"number\" expr=\"dataset.getSum(&quot;LESS3TO6MONTH_MM&quot;)\"/><Cell col=\"27\" displaytype=\"number\" expr=\"dataset.getSum(&quot;LESS3TO6MONTH_BAREPRICE&quot;)\"/><Cell col=\"28\" displaytype=\"number\" expr=\"dataset.getSum(&quot;LESS3TO6MONTH_SMTPRICE&quot;)\"/><Cell col=\"29\" displaytype=\"number\" expr=\"dataset.getSum(&quot;LESS3TO6MONTH_SUMMARYPRICE&quot;)\"/><Cell col=\"30\" displaytype=\"number\" expr=\"dataset.getSum(&quot;MORE6MONTH_QTY&quot;)\"/><Cell col=\"31\" displaytype=\"number\" expr=\"dataset.getSum(&quot;MORE6MONTH_PNLQTY&quot;)\"/><Cell col=\"32\" displaytype=\"number\" expr=\"dataset.getSum(&quot;MORE6MONTH_MM&quot;)\"/><Cell col=\"33\" displaytype=\"number\" expr=\"dataset.getSum(&quot;MORE6MONTH_BAREPRICE&quot;)\"/><Cell col=\"34\" displaytype=\"number\" expr=\"dataset.getSum(&quot;MORE6MONTH_SMTPRICE&quot;)\"/><Cell col=\"35\" displaytype=\"number\" expr=\"dataset.getSum(&quot;MORE6MONTH_SUMMARYPRICE&quot;)\"/><Cell col=\"36\" displaytype=\"number\" expr=\"dataset.getSum(&quot;QTY&quot;)\"/><Cell col=\"37\" displaytype=\"number\" expr=\"dataset.getSum(&quot;PNLQTY&quot;)\"/><Cell col=\"38\" displaytype=\"number\" expr=\"dataset.getSum(&quot;MM&quot;)\"/><Cell col=\"39\" displaytype=\"number\" expr=\"dataset.getSum(&quot;BAREPRICE&quot;)\"/><Cell col=\"40\" displaytype=\"number\" expr=\"dataset.getSum(&quot;SMTPRICE&quot;)\"/><Cell col=\"41\" displaytype=\"number\" expr=\"dataset.getSum(&quot;SUMMARYPRICE&quot;)\"/></Band></Format></Formats>");
            this.div_work.form.tab_Main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_agingLot","122","0","140","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_Main.Tabpage2.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_titleBG");
            obj.set_text("");
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

            obj = new BindItem("item1","tab_search.tab_page.form.edt_PRODUCTDEFID","value","ds_search","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab_search.tab_page.form.cbo_PRODUCTDEFVERSION","value","ds_search","PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tab_search.tab_page.form.edt_PRODUCTDEFNAME","value","ds_search","PRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab_search.tab_page.form.edt_COMPANYCLIENT","value","ds_search","COMPANYCLIENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","tab_search.tab_page.form.cbo_PRODUCTIONTYPE","value","ds_search","PRODUCTIONTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","tab_search.tab_page.form.cbo_PRODUCTDIVISION","value","ds_search","PRODUCTDIVISION");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM05500M.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("PCM05500M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM05500M.xfdl","lib::lib_mtm.xjs");
        this.addIncludeScript("PCM05500M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PCM05500M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 재공품 Aging현황
         * 파일명 		: PCM05500M.xfdl
         * 작성자 		: 박대호
         * 작성일 		: 2021.05.10
         * 설  명		: 재공품 Aging현황
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.05.10	박대호   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_mtm.xjs"); /*include "lib::lib_mtm.xjs"*/;	//MTM 공통 라이브러리 include
        this.executeIncludeScript("pcm::pcmCommon.xjs"); /*include "pcm::pcmCommon.xjs"*/; //pcm 에서 사용하는 공통
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
        	switch(this.div_work.form.tab_Main.tabindex)
        	{
        		case 0 : this.GetWipAgingProductList();
        			break;
        		case 1 : this.GetWipAgingLotList();
        			break;
        	}

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
        	this.ds_search.setColumn(0,"PRODUCTDIVISION","Product");
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
        		case "selectEcmLookupValuesVList2ds_CProductDivision2ALL" :
        		{
        			this.ds_search.setColumn(0,"PRODUCTDIVISION","Product");
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
        		case "POPUP_CUSTOMER" :
        		{
        			rtn = this.gfn_split(rtn, ",");
        			if (rtn.length == 2)
        			{
        				this.tab_search.tab_page.form.edt_COMPANYCLIENT.set_value(rtn[1]);
        				this.ds_search.setColumn( 0, "CUSTOMERID",          rtn[0] );
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

        				this.tab_search.tab_page.form.edt_COMPANYCLIENT.set_value(value.join(","));
        				this.ds_search.setColumn( 0, "CUSTOMERID",          dsval.join(",") );
        			}
        		}
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

        this.fn_initCombo = function ()
        {
        	this.ds_cbo_ProdVersion.deleteAll();
        	this.AddAll(this.ds_cbo_ProdVersion,"PRODUCTDEFVERSIONCODE","PRODUCTDEFVERSIONNAME");
        	this.ds_search.setColumn(0, "PRODUCTDEFVERSION", "");
        	this.ds_search.setColumn(0, "PRODUCTDEFID", "");
        	this.ds_search.setColumn(0,"PLANTID",this.gf_getSiteType());
        }
        this.GetWipAgingProductList = function ()
        {

        	this.ds_agingProduct.clearData();

        	this.ds_search.setColumn(0,"TYPE", "PRODUCT");
        	var sSvcID 			= "selectWipAgingList";
        	var sController 	= "/pcm05500/selectWipAgingList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_agingProduct=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }

        this.GetWipAgingLotList = function ()
        {

        	this.ds_agingLot.clearData();
        	this.ds_search.setColumn(0,"TYPE", "");
        	var sSvcID 			= "selectWipAgingList";
        	var sController 	= "/pcm05500/selectWipAgingList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_agingLot=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }



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



        this.tab_search_tab_page_btn_COMPANYCLIENT_onclick = function(obj,e)
        {
        	var oArg = {};
        	if (this.tab_search.tab_page.form.edt_COMPANYCLIENT.value != "")
        	{
        		oArg.arg_type        = "CA";
        	}
        	else
        	{
        		oArg.arg_type        = "C";
        	}
        	oArg.arg_popupCd     = "P00212";
        	oArg.arg_popupNm     = "고객사 코드";
        	oArg.arg_rtnCols     = "CUSTOMERID|CUSTOMERNAME";
        	oArg.arg_paramCols   = "P_POPTYPE|P_LANGUAGETYPE";
        	oArg.arg_paramValues = "CUSTOMER|" + this.gf_getLanguageType();
        	oArg.arg_searchStr   = "P_CUSTOMER=" + this.tab_search.tab_page.form.edt_COMPANYCLIENT.value;
        	this.gfn_openPopup( "POPUP_CUSTOMER", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.tab_page.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.tab_page.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.tab_page.form.btn_PRODUCTDEFID.addEventHandler("onclick",this.tab_search_tab_page_btn_PRODUCTDEFID_onclick,this);
            this.tab_search.tab_page.form.btn_COMPANYCLIENT.addEventHandler("onclick",this.tab_search_tab_page_btn_COMPANYCLIENT_onclick,this);
            this.div_work.form.tab_Main.addEventHandler("canchange",this.canChange,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("PCM05500M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
