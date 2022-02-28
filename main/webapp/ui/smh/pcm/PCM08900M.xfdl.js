(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM08900M");
            this.set_titletext("물류창고 입/출고 현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,890);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_statusInspect", this);
            obj._setContents("<ColumnInfo><Column id=\"REQUESTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"ARRAYQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"OSPMM\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTSTATUS\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"P_SEARCHDATE_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"P_SEARCHDATE_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_statusInOut", this);
            obj._setContents("<ColumnInfo><Column id=\"RECEIPTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"SENDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"WAITMINTIME\" type=\"STRING\" size=\"256\"/><Column id=\"PREVAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"PREVAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"SENDAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"SENDAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"ARRAYQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"OSPMM\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_statusOutputSlip", this);
            obj._setContents("<ColumnInfo><Column id=\"PRINTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"PRINTUSER\" type=\"STRING\" size=\"256\"/><Column id=\"PRINTUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRINTCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SENDAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"SENDAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PATHSEQUENCESTART\" type=\"STRING\" size=\"256\"/><Column id=\"PATHSEQUENCEEND\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"18",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("sta_site","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("STOPSITE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_siteId","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","172","200","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","16","200","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"180","15","97","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","190","15","97",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","162","205","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_area","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("AREANAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_lotNo","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ISHOLD");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_product",null,"110","22","20","16",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_area","108","85",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchPeriod","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_periodFr","108","35","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_innerdataset("");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_periodTo","108","60","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_innerdataset("");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_periodType","16","60","88","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_productId","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_product","108","110",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_lotNo","108","160",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00_01",null,"180","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_area",null,"85","22","20","16",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_process","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_text("공정명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_process","108","135",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_process",null,"135","22","20","16",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","281","34",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"1","20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_formscrollbarsize("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","112","-63","101","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("서브타이틀");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tab_work","0","5",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab_work);
            obj.set_text("수입검사의뢰");
            this.div_work.form.tab_work.addChild(obj.name, obj);

            obj = new Grid("grd_statusInspect","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_work.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_statusInspect");
            obj.set_autofittype("none");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"118\"/><Column size=\"72\"/><Column size=\"100\"/><Column size=\"33\"/><Column size=\"203\"/><Column size=\"0\"/><Column size=\"50\"/><Column size=\"183\"/><Column size=\"100\"/><Column size=\"209\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"66\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"의뢰일\"/><Cell col=\"1\" text=\"진행상태\"/><Cell col=\"2\" text=\"품목코드\"/><Cell col=\"3\" text=\"Rev\"/><Cell col=\"4\" text=\"품목명\"/><Cell col=\"5\" text=\"공정ID---HIDDEN\"/><Cell col=\"6\" text=\"공정수순\"/><Cell col=\"7\" text=\"공정명\"/><Cell col=\"8\" text=\"작업장\"/><Cell col=\"9\" text=\"Lot No.\"/><Cell col=\"10\" text=\"수량(PCS)\"/><Cell col=\"11\" text=\"수량(PNL)\"/><Cell col=\"12\" text=\"수량(MM)\"/><Cell col=\"13\" text=\"완료일시\"/><Cell col=\"14\" text=\"판정결과\"/></Band><Band id=\"body\"><Cell text=\"bind:REQUESTDATE\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:REQUESTSTATUS\" textAlign=\"left\" displaytype=\"combotext\" combocodecol=\"C,RequestStatus,,Y,Y\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:PROCESSSEGMENTID\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:USERSEQUENCE\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:LOTID\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:PCSQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"11\" text=\"bind:PANELQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"12\" text=\"bind:OSPMM\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"13\" text=\"bind:INSPECTIONDATE\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:INSPECTIONRESULT\" textAlign=\"center\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_grdSalesOrderDown",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.form.tab_work.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_statusInspect","0","0","140","34",null,null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_work.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab_work);
            obj.set_text("입출고 L/T 이력");
            this.div_work.form.tab_work.addChild(obj.name, obj);

            obj = new Grid("grd_statusInOut","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_work.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_statusInOut");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"118\"/><Column size=\"118\"/><Column size=\"67\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"199\"/><Column size=\"96\"/><Column size=\"40\"/><Column size=\"165\"/><Column size=\"0\"/><Column size=\"49\"/><Column size=\"135\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"입고시간\"/><Cell col=\"1\" text=\"출고시간\"/><Cell col=\"2\" text=\"대기시간(분)\"/><Cell col=\"3\" text=\"이전작업장PREVAREAID---HIDDEN\"/><Cell col=\"4\" text=\"이전작업장\"/><Cell col=\"5\" text=\"출고작업장---HIDDEN\"/><Cell col=\"6\" text=\"출고작업장\"/><Cell col=\"7\" text=\"Lot No.\"/><Cell col=\"8\" text=\"품목코드\"/><Cell col=\"9\" text=\"Rev\"/><Cell col=\"10\" text=\"품목명\"/><Cell col=\"11\" text=\"공정ID---HIDDEN\"/><Cell col=\"12\" text=\"공정수순\"/><Cell col=\"13\" text=\"현공정명\"/><Cell col=\"14\" text=\"수량(PCS)\"/><Cell col=\"15\" text=\"수량(PNL)\"/><Cell col=\"16\" text=\"panelqty---HIDDEN\"/></Band><Band id=\"body\"><Cell text=\"bind:RECEIPTTIME\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:SENDTIME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:WAITMINTIME\" textAlign=\"right\"/><Cell col=\"3\" text=\"bind:PREVAREAID\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:PREVAREANAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:SENDAEAID\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:SENDAREANAME\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:LOTID\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:PROCESSSEGMENTID\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:USERSEQUENCE\" textAlign=\"center\"/><Cell col=\"13\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:PCSQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"15\" text=\"bind:PANELQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"16\" text=\"bind:OSPMM\" textAlign=\"right\" displaytype=\"number\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_grdUp00",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_work.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.form.tab_work.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_statusInOut","0","0","140","34",null,null,null,null,null,null,this.div_work.form.tab_work.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_work.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.div_work.form.tab_work);
            obj.set_text("전표출력이력");
            this.div_work.form.tab_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_statusOutputSlip","0","0","140","34",null,null,null,null,null,null,this.div_work.form.tab_work.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_work.Tabpage3.addChild(obj.name, obj);

            obj = new Grid("grd_statusOutputSlip","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_work.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_statusOutputSlip");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"127\"/><Column size=\"87\"/><Column size=\"40\"/><Column size=\"187\"/><Column size=\"0\"/><Column size=\"151\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"205\"/><Column size=\"100\"/><Column size=\"54\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"회사ID---HIDDEN\"/><Cell col=\"1\" text=\"공장ID---HIDDEN\"/><Cell col=\"2\" text=\"RECEIPTUSER---HIDDEN\"/><Cell col=\"3\" text=\"OSPSENDUSER---HIDDEN\"/><Cell col=\"4\" text=\"PRINTUSER---HIDDEN\"/><Cell col=\"5\" text=\"RECEIPTSEQUENCE---HIDDEN\"/><Cell col=\"6\" text=\"LOTHISTKEY---HIDDEN\"/><Cell col=\"7\" text=\"출력일자\"/><Cell col=\"8\" text=\"품목코드\"/><Cell col=\"9\" text=\"Rev\"/><Cell col=\"10\" text=\"품목명\"/><Cell col=\"11\" text=\"공정ID---HIDDEN\"/><Cell col=\"12\" text=\"공정명\"/><Cell col=\"13\" text=\"출고작업장---HIDDEN\"/><Cell col=\"14\" text=\"출고작업장\"/><Cell col=\"15\" text=\"Lot No.\"/><Cell col=\"16\" text=\"출력자명\"/><Cell col=\"17\" text=\"인쇄횟수\"/></Band><Band id=\"body\"><Cell text=\"bind:ENTERPRISEID\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:PLANTID\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:RECEIPTUSER\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:OSPSENDUSER\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:PRINTUSER\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:RECEIPTSEQUENCE\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:LOTHISTKEY\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:PRINTDATE\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:PROCESSSEGMENTID\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:SENDAEAID\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:SENDAREANAME\" textAlign=\"left\"/><Cell col=\"15\" text=\"bind:LOTID\" textAlign=\"left\"/><Cell col=\"16\" text=\"bind:PRINTUSERNAME\" textAlign=\"left\"/><Cell col=\"17\" text=\"bind:PRINTCOUNT\" textAlign=\"right\" displaytype=\"number\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.Tabpage3.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_titleBG");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","3",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"16","26","24","29",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_print");
            obj.set_tooltiptext("Toolbar_Print");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","55",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","100","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_text("물류창고 출고 조회 발행");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MENU_TOOLSTATUSLIST");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:10","16","24","24",null,null,null,null,null,null,this.div_header.form);
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
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,890,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM08900M.xfdl","lib::lib_tom.xjs");
        this.registerScript("PCM08900M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 공정관리-물류창고외주처배분
         * 파일명 		: PCM08700M.xfdl
         * 작성자 		: 박현우
         * 작성일 		: 2021.03.03
         *
         * 설  명		: 공정관리-물류창고외주처배분
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.03.03	박현우   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.searchDiv = this.tab_search.Tabpage1.form;

        this.receiptUserId = '';
        this.productId = '';
        this.productVer = '';
        this.processId = '';
        this.areaId = '';

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
        	this.ds_statusInspect.clearData();
        	this.ds_statusInOut.clearData();
        	this.ds_statusOutputSlip.clearData();

        	this.ds_search.clearData();

        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "USERID", 					this.nfn_nvl(this.tomfn_getUserId(), "")); //사용자
        	this.ds_search.setColumn(0, "P_LOTID", 					this.nfn_nvl(this.searchDiv.edt_lotNo.value, ""));	//Lot No
        	this.ds_search.setColumn(0, "P_PLANTID", 				this.nfn_nvl(this.searchDiv.cbo_siteId.value, ""));	//Site코드
        	this.ds_search.setColumn(0, "P_AREAID", 				this.nfn_nvl(this.areaId, ""));	//작업장
        	this.ds_search.setColumn(0, "P_PROCESSSEGMENTID", 		this.nfn_nvl(this.processId, "")); //공정
        	this.ds_search.setColumn(0, "P_PRODUCTDEFID", 			this.nfn_nvl(this.productId, "")); //품목ID
        	this.ds_search.setColumn(0, "P_PRODUCTDEFVERSION", 		this.nfn_nvl(this.productVer, "")); //품목Ver
        	this.ds_search.setColumn(0, "P_SEARCHDATE_PERIODFR", 	this.nfn_nvl(this.searchDiv.cal_periodFr.value, "")); //시작일자
        	this.ds_search.setColumn(0, "P_SEARCHDATE_PERIODTO", 	this.nfn_nvl(this.searchDiv.cal_periodTo.value, "")); //종료일자
        	this.ds_search.setColumn(0, "LANGUAGETYPE", 			this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", 					"selectOutboundwarehouseStatusInspectList");

        	var sSvcID 			= "selectOutboundwarehouseStatusInspectList";
        	var sController 	= "/pcm08900/selectOutboundwarehouseStatusInspectList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_statusInspect=inspect ds_statusInOut=inout ds_statusOutputSlip=slip";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 저장 && 출고 전표 발행
         */
        this.fn_save = function (obj, e)
        {
        };

        /*
         * 기능 : 추가
         */
        this.fn_add = function(obj,e)
        {

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
        		oArg.arg_searchStr = "PRODUCTDEFID="+this.nfn_nvl(this.searchDiv.edt_product.value,'');
        		oArg.arg_rtnCols = "PRODUCTDEFID|PRODUCTDEFNAME|PRODUCTDEFVERSION";
        	}else if(popId=="P00115"){ //외주작업장 조회
        		oArg.arg_searchStr = "P_AREANAME="+this.nfn_nvl(this.searchDiv.edt_area.value,'');
        		oArg.arg_rtnCols = "AREAID|AREANAME";
        	}else if(popId=="P00114"){ //공정 조회
        		oArg.arg_searchStr = "PROCESSSEGMENTNAME="+this.nfn_nvl(this.searchDiv.edt_process.value,'');
        		oArg.arg_rtnCols = "PROCESSSEGMENTID|PROCESSSEGMENTNAME"; //공정ID/공정명
        	}

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        }

        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "SCH_PRODUCT")
        	{
        		this.searchDiv.edt_product.set_value(rtn[1]);
        		this.productId = rtn[0]; //HIDDEN 필드
        		this.productVer = rtn[2]; //HIDDEN 필드
        	}else if(sPopupId == "SCH_AREA")
        	{
        		this.searchDiv.edt_area.set_value(rtn[1]);
        		this.areaId = rtn[0]; //HIDDEN 필드
        	}else if(sPopupId == "SCH_PROCESS")
        	{
        		this.searchDiv.edt_process.set_value(rtn[1]);
        		this.processId = rtn[0]; //HIDDEN 필드
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

        /*
         * 기능 : 'Site' 콤보 조회
         */
        this.fn_initSiteCombo = function ()
        {
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());

        	this.tomfn_setCustomQueryCmb(this.searchDiv.cbo_siteId // Object
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

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        //기간 구분 :: 이벤트
        this.tab_search_Tabpage1_cbo_periodType_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != "CUSTOM"){
        		this.fn_setDate(e.postvalue);
        	}
        };

        //품목코드 버튼 클릭 :: 공통팝업
        this.tab_search_Tabpage1_btn_product_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());
        	sArgs += this.gfn_setParam("PLANTID", this.searchDiv.cbo_siteId.value);

        	this.fn_openPop("SCH_PRODUCT","P00126", sArgs); //품목코드 조회
        };

        //작업장 버튼 클릭 :: 공통팝업
        this.tab_search_Tabpage1_btn_area_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("P_PLANTID", this.searchDiv.cbo_siteId.value);
        	sArgs += this.gfn_setParam("P_OWNTYPE", "Y");
        	sArgs += this.gfn_setParam("USERID", this.tomfn_getUserId());
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());

        	this.fn_openPop("SCH_AREA","P00115", sArgs); //작업장 조회
        };

        /*
         * 이벤트 : 조회조건에서 '공정' 버튼 클릭 시
         */
        this.tab_search_Tabpage1_btn_process_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PROCESSSEGMENTNAME", this.searchDiv.edt_process.value);
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());

        	this.fn_openPop("SCH_PROCESS","P00114", sArgs); //공정 조회
        };

        this.fn_searchClear = function(obj,e)
        {
        	this.searchDiv.cbo_siteId.set_value(this.gf_getSiteType()); //세션사용자PlantId를 가져온다.

        	this.searchDiv.cbo_periodType.set_value("THISMONTH"); // 금월
        	this.fn_setDate("THISMONTH");
        };

        this.tab_search_Tabpage1_edt_area_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btn_area_onclick();
        	}
        };

        this.tab_search_Tabpage1_edt_product_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btn_product_onclick();
        	}
        };

        this.tab_search_Tabpage1_edt_process_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btn_process_onclick();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tabpage1.form.cbo_siteId.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cboSite_onitemchanged,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.btn_product.addEventHandler("onclick",this.tab_search_Tabpage1_btn_product_onclick,this);
            this.tab_search.Tabpage1.form.edt_area.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_area_onkeydown,this);
            this.tab_search.Tabpage1.form.cal_periodFr.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.cal_periodTo.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.cbo_periodType.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_periodType_onitemchanged,this);
            this.tab_search.Tabpage1.form.edt_product.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_product_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_area.addEventHandler("onclick",this.tab_search_Tabpage1_btn_area_onclick,this);
            this.tab_search.Tabpage1.form.edt_process.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_process_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_process.addEventHandler("onclick",this.tab_search_Tabpage1_btn_process_onclick,this);
            this.div_work.form.tab_work.addEventHandler("onchanged",this.tab_work_onchanged,this);
            this.div_work.form.tab_work.Tabpage1.form.btn_grdSalesOrderDown.addEventHandler("onclick",this.tab_work_Tabpage1_btn_grdSalesOrderDown_onclick,this);
            this.div_header.form.Static01.addEventHandler("onclick",this.div_header_Static01_onclick,this);
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("PCM08900M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
