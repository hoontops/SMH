(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM05700M");
            this.set_titletext("체공 LOT조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_stanbyLot", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"WIPPROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"WAITRECEIVEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WAITRECEIVEPNL\" type=\"STRING\" size=\"256\"/><Column id=\"WAITQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WAITPNL\" type=\"STRING\" size=\"256\"/><Column id=\"RUNQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RUNPNL\" type=\"STRING\" size=\"256\"/><Column id=\"WAITSENDQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WAITSENDPNL\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTARTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"STAYINGLOCKSTD\" type=\"STRING\" size=\"256\"/><Column id=\"SEGMNETDELAYTIME\" type=\"STRING\" size=\"256\"/><Column id=\"SEGMENTDELAYTIMEH\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENTSTATESTAYINGTIME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODEID\" type=\"STRING\" size=\"256\"/><Column id=\"STAYINGLOCK\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKTIME\" type=\"STRING\" size=\"256\"/><Column id=\"AREADELAYTIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"STAYINGLOCK\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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


            obj = new Dataset("ds_delayList", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"DELAYREASONCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DELAYCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"STDDELAYTIME\" type=\"STRING\" size=\"256\"/><Column id=\"DELAYTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKSTARTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKENDTIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Combo("cbo_ISHOLD","108","285","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("11");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            obj.set_text("선택");
            obj.set_index("0");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_ISLOCKING","108","cbo_ISHOLD:5","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("12");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            obj.set_text("선택");
            obj.set_index("0");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"cbo_ISLOCKING:0","45","20","91",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("19");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","Static12_00_00_00_01_00_00:0","102","36",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_search","15","Static12_00_00_00_01_00_00:0","146","36",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            obj.set_hotkey("F2");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"70","15","97","0",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("15");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","80","15","97",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("16");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("17");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00",null,"30","45","5","91",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("18");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","Static12_00_00_00_01_00_00:6","10","27",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("20");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PLANTID","0","10","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("21");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PLANT");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_PLANTID","108","10","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,SiteType,ALL,Y,Y");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTDEFID","0","sta_PLANTID:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("22");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMCODE");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID","108","cbo_PLANTID:5",null,"20","37",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("1");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_PRODUCTDEFID",null,"cbo_PLANTID:5","22","20","15",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTDEFVERSION","0","sta_PRODUCTDEFID:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("24");
            obj.set_text("Rev.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("INNERREVISION");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTDEFVERSION","108","edt_PRODUCTDEFID:5","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("2");
            obj.set_codecolumn("PRODUCTDEFVERSIONCODE");
            obj.set_datacolumn("PRODUCTDEFVERSIONNAME");
            obj.set_innerdataset("ds_cbo_ProdVersion");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTDEFNAME","0","sta_PRODUCTDEFVERSION:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("25");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMID");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFNAME","108","cbo_PRODUCTDEFVERSION:5",null,"20","15",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("3");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_LOTID","0","sta_PRODUCTDEFNAME:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LOTID");
            obj.set_taborder("28");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_LOTID","108","edt_PRODUCTDEFNAME:5",null,"20","37",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("4");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_LOTID","251","edt_PRODUCTDEFNAME:5","22","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("29");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_AREAID","0","160","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("32");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("AREA");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PROCESSSTATE","0","sta_AREAID:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("34");
            obj.set_text("상태구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("STATETYPE");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTIONTYPE","0","sta_PROCESSSTATE:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("26");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTIONTYPE");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_AREAID","108","160",null,"20","37",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("6");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_PROCESSSTATE","108","edt_AREAID:5","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("7");
            obj.set_codecolumn("C,LotProcessState,ALL,Y,Y");
            obj.set_text("전체조회");
            obj.set_value("");
            obj.set_index("0");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTIONTYPE","108","cbo_PROCESSSTATE:5","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("8");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            obj.set_text("전체조회");
            obj.set_value("");
            obj.set_index("0");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTDIVISION","108","cbo_PRODUCTIONTYPE:5","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("9");
            obj.set_codecolumn("C,ProductDivision2,ALL,Y,Y");
            obj.set_text("선택");
            obj.set_index("0");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTDIVISION","0","sta_PRODUCTIONTYPE:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_text("제품구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("27");
            obj.set_tooltiptext("THEPRODUCTTYPE");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PROCSEGMENT","0","sta_LOTID:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("30");
            obj.set_text("공정");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PROCESSCHANGETYPE");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_PROCSEGMENT","108","edt_LOTID:5",null,"20","37",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("5");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_PROCSEGMENT",null,"btn_LOTID:5","22","20","15",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("31");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_AREAID",null,"btn_PROCSEGMENT:5","22","20","15",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("33");
            obj.set_cssclass("btn_WF_finder");
            obj.set_text("");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_STAYINGLOCK","0","sta_PRODUCTDIVISION:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_text("체공상태");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("35");
            obj.set_tooltiptext("529838C134CE41DFAAB628B299E1E3DC");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_STAYINGLOCK","108","cbo_PRODUCTDIVISION:5","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("10");
            obj.set_codecolumn("C,StayingState,ALL,Y,Y");
            obj.set_text("선택");
            obj.set_index("0");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_ISHOLD","0","sta_STAYINGLOCK:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_text("보류여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("36");
            obj.set_tooltiptext("ISHOLD");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_ISLOCKING","0","sta_ISHOLD:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_text("Locking 여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("37");
            obj.set_tooltiptext("ISLOCKING");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_search);
            obj.set_text("Tabpage2");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("guidetip00",null,"0","15","290","0",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("guidetip01","0","0","15","290",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_PLANTID","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PLANT");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cbo_PLANTID","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_codecolumn("C,SiteType,ALL,Y,Y");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_SearchPeriod","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("C6A85700415446D89213292978260263");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Calendar("cal_STARTDT","108","35","165","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("6");
            obj.set_innerdataset("");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cbo_PERIODTYPE","15","60","88","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("7");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Calendar("cal_ENDDT","108","60","165","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("8");
            obj.set_innerdataset("");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTDEFID","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("9");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMCODE");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID","108","85",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("10");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTDEFVERSION","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("11");
            obj.set_text("Rev.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("INNERREVISION");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTDEFVERSION","108","110","165","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("12");
            obj.set_codecolumn("PRODUCTDEFVERSIONCODE");
            obj.set_datacolumn("PRODUCTDEFVERSIONNAME");
            obj.set_innerdataset("ds_cbo_ProdVersion");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTDEFNAME","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("13");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMID");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFNAME","108","135",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("14");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_PRODUCTDEFID",null,"85","22","20","15",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_LOTID","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LOTID");
            obj.set_taborder("16");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt_LOTID","108","160",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("17");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_LOTID","251","160","22","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_PROCSEGMENT",null,"185","22","20","15",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt_PROCSEGMENT","108","185",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("20");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_PROCSEGMENT","0","185","103","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("21");
            obj.set_text("공정");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PROCESSCHANGETYPE");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_AREAID","0","210","103","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("22");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("AREA");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt_AREAID","108","210",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("23");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_AREAID",null,"210","22","20","15",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_finder");
            obj.set_text("");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cbo_PROCESSSTATE","108","235","165","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("25");
            obj.set_codecolumn("C,WipProcessState,ALL,Y,Y");
            obj.set_text("전체조회");
            obj.set_value("");
            obj.set_index("0");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_PROCESSSTATE","0","235","103","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("26");
            obj.set_text("상태구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("STATETYPE");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTIONTYPE","0","260","103","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("27");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTIONTYPE");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTIONTYPE","108","260","165","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("28");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            obj.set_text("전체조회");
            obj.set_value("");
            obj.set_index("0");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTDIVISION","0","285","103","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_text("제품구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("29");
            obj.set_tooltiptext("THEPRODUCTTYPE");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTDIVISION","108","285","165","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("30");
            obj.set_codecolumn("C,ProductDivision2,ALL,Y,Y");
            obj.set_text("선택");
            obj.set_index("0");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_ISHOLD","0","sta_PRODUCTDIVISION:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_text("보류여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("31");
            obj.set_tooltiptext("ISHOLD");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cbo_ISHOLD","108","cbo_PRODUCTDIVISION:5","165","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("32");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            obj.set_text("선택");
            obj.set_index("0");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_ISLOCKING","0","sta_ISHOLD:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_text("Locking 여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("33");
            obj.set_tooltiptext("ISLOCKING");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cbo_ISLOCKING","108","cbo_ISHOLD:5","165","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("34");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            obj.set_text("선택");
            obj.set_index("0");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","cbo_ISLOCKING:20","102","36",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("35");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_search","15","cbo_ISLOCKING:20","146","36",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("36");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

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
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            obj.set_positionstep("0");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab_Main);
            obj.set_text("체공 Lot");
            obj.set_tooltiptext("STANBYLOT");
            this.div_work.form.tab_Main.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","89","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("체공 Lot");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("STANBYLOT");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_stanbyLot","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_stanbyLot");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" colspan=\"13\"/><Cell col=\"14\" colspan=\"2\" text=\"인수대기\" tooltiptext=\"WAITFORRECEIVE\"/><Cell col=\"16\" colspan=\"2\" text=\"인수\" tooltiptext=\"ACCEPT\"/><Cell col=\"18\" colspan=\"2\" text=\"작업시작\" tooltiptext=\"WORKSTARTLEADTIME\"/><Cell col=\"20\" colspan=\"2\" text=\"작업완료\" tooltiptext=\"WORKEND\"/><Cell col=\"22\" colspan=\"6\"/><Cell row=\"1\" text=\"No\"/><Cell row=\"1\" col=\"1\" text=\"Site ID\" tooltiptext=\"PLANTID\"/><Cell row=\"1\" col=\"2\" tooltiptext=\"PRODUCTIONTYPE\" text=\"생산구분\"/><Cell row=\"1\" col=\"3\" text=\"작업장\" tooltiptext=\"WORKAREA\"/><Cell row=\"1\" col=\"4\" tooltiptext=\"ITEMCODE\" text=\"품목코드\"/><Cell row=\"1\" col=\"5\" text=\"Rev.\" tooltiptext=\"INNERREVISION\"/><Cell row=\"1\" col=\"6\" tooltiptext=\"ITEMNAME\" text=\"품목명\"/><Cell row=\"1\" col=\"7\" text=\"보류 여부\" tooltiptext=\"ISHOLD\"/><Cell row=\"1\" col=\"8\" text=\"Locking 여부\" tooltiptext=\"ISLOCKING\"/><Cell row=\"1\" col=\"9\" text=\"공정수순\" tooltiptext=\"USERSEQUENCE\"/><Cell row=\"1\" col=\"10\" text=\"공정\" tooltiptext=\"PROCESSCHANGETYPE\"/><Cell row=\"1\" col=\"11\" text=\"자원\" tooltiptext=\"RESOURCE\"/><Cell row=\"1\" col=\"12\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell row=\"1\" col=\"13\" text=\"공정진행상태\" tooltiptext=\"PROCESSSTATE\"/><Cell row=\"1\" col=\"14\" text=\"수량\" tooltiptext=\"OSPDAY26QTY\"/><Cell row=\"1\" col=\"15\" text=\"PNL\" tooltiptext=\"OSPDAY01PNL\"/><Cell row=\"1\" col=\"16\" text=\"수량\" tooltiptext=\"OSPDAY26QTY\"/><Cell row=\"1\" col=\"17\" text=\"PNL\" tooltiptext=\"OSPDAY01PNL\"/><Cell row=\"1\" col=\"18\" text=\"수량\" tooltiptext=\"OSPDAY26QTY\"/><Cell row=\"1\" col=\"19\" text=\"PNL\" tooltiptext=\"OSPDAY01PNL\"/><Cell row=\"1\" col=\"20\" text=\"수량\" tooltiptext=\"OSPDAY26QTY\"/><Cell row=\"1\" col=\"21\" text=\"PNL\" tooltiptext=\"OSPDAY01PNL\"/><Cell row=\"1\" col=\"22\" text=\"공정 입고일\" tooltiptext=\"SEGMENTINCOMETIME\"/><Cell row=\"1\" col=\"23\" text=\"체공기준시간\" tooltiptext=\"STDSTAYINGTIME\"/><Cell row=\"1\" col=\"24\" text=\"공정체공시간\" tooltiptext=\"SEGMENTSTAYINGTIME\"/><Cell row=\"1\" col=\"25\" text=\"현장작업장체공(h)\"/><Cell row=\"1\" col=\"26\" text=\"현상태체공(h)\" tooltiptext=\"CURRENTSTATESTAYING\"/><Cell row=\"1\" col=\"27\" text=\"체공사유\" tooltiptext=\"DELAYREASON\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\" cssclass=\"expr:dataset.getColumn(currow, &quot;STAYINGLOCK&quot;)==&quot;Staying&quot;?&apos;cell_red&apos;:&apos;&apos;\"/><Cell col=\"1\" text=\"bind:PLANTID\" cssclass=\"expr:dataset.getColumn(currow, &quot;STAYINGLOCK&quot;)==&quot;Staying&quot;?&apos;cell_red&apos;:&apos;&apos;\"/><Cell col=\"2\" text=\"bind:LOTTYPE\" cssclass=\"expr:dataset.getColumn(currow, &quot;STAYINGLOCK&quot;)==&quot;Staying&quot;?&apos;cell_red&apos;:&apos;&apos;\"/><Cell col=\"3\" textAlign=\"left\" text=\"bind:AREANAME\" cssclass=\"expr:dataset.getColumn(currow, &quot;STAYINGLOCK&quot;)==&quot;Staying&quot;?&apos;cell_red&apos;:&apos;&apos;\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\" cssclass=\"expr:dataset.getColumn(currow, &quot;STAYINGLOCK&quot;)==&quot;Staying&quot;?&apos;cell_red&apos;:&apos;&apos;\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\" cssclass=\"expr:dataset.getColumn(currow, &quot;STAYINGLOCK&quot;)==&quot;Staying&quot;?&apos;cell_red&apos;:&apos;&apos;\"/><Cell col=\"6\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\" cssclass=\"expr:dataset.getColumn(currow, &quot;STAYINGLOCK&quot;)==&quot;Staying&quot;?&apos;cell_red&apos;:&apos;&apos;\"/><Cell col=\"7\" text=\"bind:ISHOLD\" cssclass=\"expr:dataset.getColumn(currow, &quot;STAYINGLOCK&quot;)==&quot;Staying&quot;?&apos;cell_red&apos;:&apos;&apos;\"/><Cell col=\"8\" text=\"bind:ISLOCKING\" cssclass=\"expr:dataset.getColumn(currow, &quot;STAYINGLOCK&quot;)==&quot;Staying&quot;?&apos;cell_red&apos;:&apos;&apos;\"/><Cell col=\"9\" text=\"bind:USERSEQUENCE\" cssclass=\"expr:dataset.getColumn(currow, &quot;STAYINGLOCK&quot;)==&quot;Staying&quot;?&apos;cell_red&apos;:&apos;&apos;\"/><Cell col=\"10\" textAlign=\"left\" text=\"bind:PROCESSSEGMENTNAME\" cssclass=\"expr:dataset.getColumn(currow, &quot;STAYINGLOCK&quot;)==&quot;Staying&quot;?&apos;cell_red&apos;:&apos;&apos;\"/><Cell col=\"11\" textAlign=\"left\" text=\"bind:RESOURCENAME\" cssclass=\"expr:dataset.getColumn(currow, &quot;STAYINGLOCK&quot;)==&quot;Staying&quot;?&apos;cell_red&apos;:&apos;&apos;\"/><Cell col=\"12\" textAlign=\"left\" text=\"bind:LOTID\" cssclass=\"expr:dataset.getColumn(currow, &quot;STAYINGLOCK&quot;)==&quot;Staying&quot;?&apos;cell_red&apos;:&apos;&apos;\"/><Cell col=\"13\" textAlign=\"left\" text=\"bind:WIPPROCESSSTATE\" cssclass=\"expr:dataset.getColumn(currow, &quot;STAYINGLOCK&quot;)==&quot;Staying&quot;?&apos;cell_red&apos;:&apos;&apos;\"/><Cell col=\"14\" textAlign=\"right\" displaytype=\"number\" text=\"bind:WAITRECEIVEQTY\" cssclass=\"expr:dataset.getColumn(currow, &quot;STAYINGLOCK&quot;)==&quot;Staying&quot;?&apos;cell_red&apos;:&apos;&apos;\"/><Cell col=\"15\" textAlign=\"right\" displaytype=\"number\" text=\"bind:WAITRECEIVEPNL\" cssclass=\"expr:dataset.getColumn(currow, &quot;STAYINGLOCK&quot;)==&quot;Staying&quot;?&apos;cell_red&apos;:&apos;&apos;\"/><Cell col=\"16\" textAlign=\"right\" displaytype=\"number\" text=\"bind:WAITQTY\" cssclass=\"expr:dataset.getColumn(currow, &quot;STAYINGLOCK&quot;)==&quot;Staying&quot;?&apos;cell_red&apos;:&apos;&apos;\"/><Cell col=\"17\" textAlign=\"right\" displaytype=\"number\" text=\"bind:WAITPNL\" cssclass=\"expr:dataset.getColumn(currow, &quot;STAYINGLOCK&quot;)==&quot;Staying&quot;?&apos;cell_red&apos;:&apos;&apos;\"/><Cell col=\"18\" textAlign=\"right\" displaytype=\"number\" text=\"bind:RUNQTY\" cssclass=\"expr:dataset.getColumn(currow, &quot;STAYINGLOCK&quot;)==&quot;Staying&quot;?&apos;cell_red&apos;:&apos;&apos;\"/><Cell col=\"19\" textAlign=\"right\" displaytype=\"number\" text=\"bind:RUNPNL\" cssclass=\"expr:dataset.getColumn(currow, &quot;STAYINGLOCK&quot;)==&quot;Staying&quot;?&apos;cell_red&apos;:&apos;&apos;\"/><Cell col=\"20\" textAlign=\"right\" displaytype=\"number\" text=\"bind:WAITSENDQTY\" cssclass=\"expr:dataset.getColumn(currow, &quot;STAYINGLOCK&quot;)==&quot;Staying&quot;?&apos;cell_red&apos;:&apos;&apos;\"/><Cell col=\"21\" textAlign=\"right\" displaytype=\"number\" text=\"bind:WAITSENDPNL\" cssclass=\"expr:dataset.getColumn(currow, &quot;STAYINGLOCK&quot;)==&quot;Staying&quot;?&apos;cell_red&apos;:&apos;&apos;\"/><Cell col=\"22\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" text=\"bind:LOTSTARTDATE\" cssclass=\"expr:dataset.getColumn(currow, &quot;STAYINGLOCK&quot;)==&quot;Staying&quot;?&apos;cell_red&apos;:&apos;&apos;\"/><Cell col=\"23\" textAlign=\"right\" displaytype=\"number\" text=\"bind:STAYINGLOCKSTD\" cssclass=\"expr:dataset.getColumn(currow, &quot;STAYINGLOCK&quot;)==&quot;Staying&quot;?&apos;cell_red&apos;:&apos;&apos;\"/><Cell col=\"24\" textAlign=\"right\" text=\"bind:SEGMNETDELAYTIME\" cssclass=\"expr:dataset.getColumn(currow, &quot;STAYINGLOCK&quot;)==&quot;Staying&quot;?&apos;cell_red&apos;:&apos;&apos;\"/><Cell col=\"25\" textAlign=\"right\" displaytype=\"number\" text=\"bind:AREADELAYTIME\" cssclass=\"expr:dataset.getColumn(currow, &quot;STAYINGLOCK&quot;)==&quot;Staying&quot;?&apos;cell_red&apos;:&apos;&apos;\"/><Cell col=\"26\" textAlign=\"right\" displaytype=\"number\" text=\"bind:CURRENTSTATESTAYINGTIME\" cssclass=\"expr:dataset.getColumn(currow, &quot;STAYINGLOCK&quot;)==&quot;Staying&quot;?&apos;cell_red&apos;:&apos;&apos;\"/><Cell col=\"27\" textAlign=\"left\" text=\"bind:REASONCODEID\" cssclass=\"expr:dataset.getColumn(currow, &quot;STAYINGLOCK&quot;)==&quot;Staying&quot;?&apos;cell_red&apos;:&apos;&apos;\"/></Band></Format></Formats>");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_stanbyLot","staTitle:-20","0","140","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_stanbyLot",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab_Main);
            obj.set_text("체공 이력");
            obj.set_tooltiptext("DELAYLIST");
            this.div_work.form.tab_Main.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","110","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("체공 이력");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("DELAYLIST");
            this.div_work.form.tab_Main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_delayList","staTitle:-30","0","140","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_Main.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_delayList",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_Main.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_delayList","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_Main.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_delayList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"200\"/><Column size=\"170\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Site ID\" tooltiptext=\"PLANTID\"/><Cell col=\"2\" text=\"생산구분\" tooltiptext=\"PRODUCTIONTYPE\"/><Cell col=\"3\" text=\"작업장\" tooltiptext=\"WORKAREA\"/><Cell col=\"4\" text=\"품목코드\" tooltiptext=\"ITEMID\"/><Cell col=\"5\" text=\"Rev.\" tooltiptext=\"INNERREVISION\"/><Cell col=\"6\" tooltiptext=\"ITEMNAME\" text=\"품목명\"/><Cell col=\"7\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell col=\"8\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"9\" text=\"공정진행상태\" tooltiptext=\"PROCESSSTATE\"/><Cell col=\"10\" text=\"체공사유\" tooltiptext=\"DELAYREASON\"/><Cell col=\"11\" text=\"체공상세사유\" tooltiptext=\"DELAYCOMMENT\"/><Cell col=\"12\" text=\"기준체공시간\" tooltiptext=\"STDDELAYTIME\"/><Cell col=\"13\" text=\"체공시간\" tooltiptext=\"DELAYTIME\"/><Cell col=\"14\" text=\"이전Step완료시간\" tooltiptext=\"CHECKSTARTTIME\"/><Cell col=\"15\" text=\"체공사유입력시간\" tooltiptext=\"CHECKENDTIME\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PLANTID\"/><Cell col=\"2\" text=\"bind:LOTTYPENAME\"/><Cell col=\"3\" textAlign=\"left\" text=\"bind:AREANAME\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFID\" calendardateformat=\"ddd\" displaytype=\"normal\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" textAlign=\"left\" suppress=\"0\" suppressalign=\"middle\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\" suppress=\"0\" suppressalign=\"middle\"/><Cell col=\"6\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" suppress=\"0\" suppressalign=\"middle\"/><Cell col=\"7\" text=\"bind:LOTID\"/><Cell col=\"8\" textAlign=\"left\" text=\"bind:PROCESSSEGMENTNAME\"/><Cell col=\"9\" textAlign=\"left\" text=\"bind:PROCESSSTATE\"/><Cell col=\"10\" textAlign=\"left\" text=\"bind:DELAYREASONCODE\"/><Cell col=\"11\" textAlign=\"left\" text=\"bind:DELAYCOMMENT\"/><Cell col=\"12\" textAlign=\"right\" displaytype=\"number\" text=\"bind:STDDELAYTIME\"/><Cell col=\"13\" textAlign=\"right\" text=\"bind:DELAYTIME\"/><Cell col=\"14\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" text=\"bind:CHECKSTARTTIME\"/><Cell col=\"15\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" displaytype=\"date\" text=\"bind:CHECKENDTIME\"/></Band></Format></Formats>");
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

            obj = new BindItem("item4","tab_search.tab_page.form.edt_LOTID","value","ds_search","LOTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tab_search.tab_page.form.edt_PROCSEGMENT","value","ds_search","PROCESSSEGMENTNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tab_search.tab_page.form.edt_AREAID","value","ds_search","AREANAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","tab_search.tab_page.form.cbo_PROCESSSTATE","value","ds_search","PROCESSSTATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","tab_search.tab_page.form.cbo_PRODUCTIONTYPE","value","ds_search","PRODUCTIONTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","tab_search.tab_page.form.cbo_PRODUCTDIVISION","value","ds_search","PRODUCTDIVISION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","tab_search.tab_page.form.cbo_STAYINGLOCK","value","ds_search","STAYINGLOCK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","tab_search.tab_page.form.cbo_ISHOLD","value","ds_search","ISHOLD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","tab_search.tab_page.form.cbo_ISLOCKING","value","ds_search","ISLOCKING");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","tab_search.Tabpage2.form.cbo_PLANTID","value","ds_search","PLANTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","tab_search.Tabpage2.form.cal_STARTDT","value","ds_search","PERIOD_PERIODFR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","tab_search.Tabpage2.form.cbo_PERIODTYPE","value","ds_search","PERIODTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","tab_search.Tabpage2.form.cal_ENDDT","value","ds_search","PERIOD_PERIODTO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","tab_search.Tabpage2.form.edt_PRODUCTDEFID","value","ds_search","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","tab_search.Tabpage2.form.cbo_PRODUCTDEFVERSION","value","ds_search","PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","tab_search.Tabpage2.form.edt_PRODUCTDEFNAME","value","ds_search","PRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","tab_search.Tabpage2.form.edt_LOTID","value","ds_search","LOTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","tab_search.Tabpage2.form.edt_PROCSEGMENT","value","ds_search","PROCESSSEGMENTNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","tab_search.Tabpage2.form.edt_AREAID","value","ds_search","AREANAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","tab_search.Tabpage2.form.cbo_PROCESSSTATE","value","ds_search","PROCESSSTATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","tab_search.Tabpage2.form.cbo_PRODUCTIONTYPE","value","ds_search","PRODUCTIONTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","tab_search.Tabpage2.form.cbo_PRODUCTDIVISION","value","ds_search","PRODUCTDIVISION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","tab_search.Tabpage2.form.cbo_ISHOLD","value","ds_search","ISHOLD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","tab_search.Tabpage2.form.cbo_ISLOCKING","value","ds_search","ISLOCKING");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM05700M.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("PCM05700M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM05700M.xfdl","lib::lib_mtm.xjs");
        this.addIncludeScript("PCM05700M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PCM05700M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 체공 LOT조회
         * 파일명 		: PCM05700M.xfdl
         * 작성자 		: 박대호
         * 작성일 		: 2021.05.11
         * 설  명		: 체공 LOT조회
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.05.11	박대호   	최초작성
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
        	this.fn_initDatePicker();
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
        		case 0 : this.GetSyanbyLot();
        			break;
        		case 1 : this.GetDelayList();
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
        	this.fn_initDatePicker();
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
        		case "POPUP_LOTID" :
        		{
        			this.tab_search.tab_page.form.edt_LOTID.set_value(rtn);
        		}
        		break;
        		case "POPUP_PROCSEGMENT" :
        		{
        			rtn = this.gfn_split(rtn, ",");
        			if (rtn.length == 2)
        			{
        				this.tab_search.tab_page.form.edt_PROCSEGMENT.set_value(rtn[1]);
        				this.ds_search.setColumn( 0, "PROCESSSEGMENTID",          rtn[0] );
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

        				this.tab_search.tab_page.form.edt_PROCSEGMENT.set_value(value.join(","));
        				this.ds_search.setColumn( 0, "PROCESSSEGMENTID",          dsval.join(",") );
        			}
        		}
        		break;
        		case "POPUP_AREAID" :
        		{
        			rtn = this.gfn_split(rtn, ",");
        			if (rtn.length == 2)
        			{
        				this.tab_search.tab_page.form.edt_AREAID.set_value(rtn[1]);
        				this.ds_search.setColumn( 0, "AREAID",          rtn[0] );
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

        				this.tab_search.tab_page.form.edt_AREAID.set_value(value.join(","));
        				this.ds_search.setColumn( 0, "AREAID",          dsval.join(",") );
        			}
        		}
        		break;
        		case "DELAY_POPUP" :
        		{
        			if(rtn == "OK")
        			{
        				this.GetSyanbyLot();
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
         this.fn_initDatePicker = function ()
        {
        	this.basfn_getPeriodData("ds_periodType");
         	this.ds_search.setColumn(0,"PERIOD_PERIODFR",this.ds_periodType.getColumn(0,"THISMONTH_S"));
         	this.ds_search.setColumn(0,"PERIOD_PERIODTO",this.ds_periodType.getColumn(0,"THISMONTH_E"));
        	this.ds_search.setColumn(0,"PERIODTYPE","THISMONTH");

        };
        /*
         * 기능 : 검색일자 바인딩 함수
         */
        this.fn_setDate = function (periodType)
        {
        	this.ds_search.setColumn(0,"PERIOD_PERIODFR",this.ds_periodType.getColumn(0,periodType+"_S"));
        	this.ds_search.setColumn(0,"PERIOD_PERIODTO",this.ds_periodType.getColumn(0,periodType+"_E"));
        };

        this.fn_initCombo = function ()
        {
        	this.ds_cbo_ProdVersion.deleteAll();
        	this.AddAll(this.ds_cbo_ProdVersion,"PRODUCTDEFVERSIONCODE","PRODUCTDEFVERSIONNAME");
        	this.ds_search.setColumn(0, "PRODUCTDEFVERSION", "");
        	this.ds_search.setColumn(0, "PRODUCTDEFID", "");
        	this.ds_search.setColumn(0,"PLANTID",this.gf_getSiteType());
        	this.ds_search.setColumn(0, "STAYINGLOCK", "Staying");
        	this.onChange();
        }
        this.GetSyanbyLot = function ()
        {
        	this.ds_stanbyLot.clearData();

        	var sSvcID 			= "selectDelayLotList";
        	var sController 	= "/pcm05700/selectDelayLotList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_stanbyLot=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }
        this.GetDelayList = function ()
        {
        	this.ds_delayList.clearData();

        	var sSvcID 			= "selectDelayList";
        	var sController 	= "/pcm05700/selectDelayList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_delayList=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }


        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         *	기능 : 검색일자 변경시 검색구분을 [사용자지정]으로 변경
         */
        this.fn_changeCustom = function(obj,e)
        {
        	this.tab_search.tab_page.form.cbo_PERIODTYPE.set_value("CUSTOM");
        };
        /*
         *	기능 : 기간콤보박스 변경시
         */
        this.tab_search_tab_page_cbo_PERIODTYPE_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != "CUSTOM")this.fn_setDate(e.postvalue);
        };
        /*
         *	기능 : 품목코드 검색 버튼 클릭 시
         */
        this.tab_search_tab_page_btn_PRODUCTDEFID_onclick = function(obj,e)
        {
        	var oArg = {};
        	var value = "";
        	if(this.tab_search.tabindex == 0)
        		value = this.tab_search.tab_page.form.edt_PRODUCTDEFID.value;
        	else
        		value = this.tab_search.Tabpage2.form.edt_PRODUCTDEFID.value;

        	if (value != "")
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
        	oArg.arg_searchStr   = "P_PRODUCTDEFNAME=" + value;
        	this.gfn_openPopup( "POPUP_PRODUCTDEFID", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        };
        /*
         *	기능 : LOTNo 검색 버튼 클릭 시
         */
        this.tab_search_tab_page_btn_LOTID_onclick = function(obj,e)
        {
        	var oArg = {};
        	var value = "";
        	if(this.tab_search.tabindex == 0)
        		value = this.tab_search.tab_page.form.edt_LOTID.value;
        	else
        		value = this.tab_search.Tabpage2.form.edt_LOTID.value;
        	if (value != "")
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
        	oArg.arg_searchStr   = "P_LOTID=" + value;
        	this.gfn_openPopup( "POPUP_LOTID", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        };



        this.tab_search_tab_page_btn_PROCSEGMENT_onclick = function(obj,e)
        {
        	var oArg = {};
        	var value = "";
        	if(this.tab_search.tabindex == 0)
        		value = this.tab_search.tab_page.form.edt_PROCSEGMENT.value;
        	else
        		value = this.tab_search.Tabpage2.form.edt_PROCSEGMENT.value;
        	if (value != "")
        	{
        		oArg.arg_type        = "CA";
        	}
        	else
        	{
        		oArg.arg_type        = "C";
        	}
        	oArg.arg_popupCd     = "P00213";
        	oArg.arg_popupNm     = "공정 선택";
        	oArg.arg_rtnCols     = "PROCESSSEGMENTID|PROCESSSEGMENTNAME";
        	oArg.arg_paramCols   = "P_POPTYPE|P_LANGUAGETYPE";
        	oArg.arg_paramValues = "PROCESSSEGMENT|" + this.gf_getLanguageType();
        	oArg.arg_searchStr   = "P_PROCESSSEGMENT=" + value;
        	this.gfn_openPopup( "POPUP_PROCSEGMENT", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        };

        this.tab_search_tab_page_btn_AREAID_onclick = function(obj,e)
        {
        	var oArg = {};
        	var value = "";
        	if(this.tab_search.tabindex == 0)
        		value = this.tab_search.tab_page.form.edt_AREAID.value;
        	else
        		value = this.tab_search.Tabpage2.form.edt_AREAID.value;
        	if (value != "")
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
        	oArg.arg_paramValues = "AREALISTBYAUTHORITY|" + this.gf_getLanguageType() + "|" + this.gf_getUserAcnt() + "|"+ this.ds_search.getColumn( 0, "PLANTID" );
        	oArg.arg_searchStr   = "P_DICTIONARY=" + value;
        	this.gfn_openPopup( "POPUP_AREAID", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        };
        /*
         * 기능 : 탭변경
         */
        this.onChange = function ()
        {
        	switch(this.div_work.form.tab_Main.tabindex)
        	{
        		case 0 ://체공Lot
        		{
        			this.tab_search.set_tabindex(0);
        			break;
        		}
        		case 1 : //체공이력
        		{
        			this.tab_search.set_tabindex(1);
        			break;
        		}

        	}
        }
        /*
         * 기능 : 셀 더블클릭
         */
        this.div_work_tab_Main_Tabpage1_grd_stanbyLot_oncelldblclick = function(obj,e)
        {
        	if(this.ds_stanbyLot.getRowCount() > 0)
        	{
        		if(e.cell == 27 && this.ds_stanbyLot.getColumn(e.row, "REASONCODEID") == null)
        		{
        			var popupId = "DELAY_POPUP";
        			var oArg = {};
         			oArg.lotId   		= this.gfn_allTrim(this.ds_stanbyLot.getColumn(e.row,"LOTID"));
         			oArg.checkTime 		= this.gfn_allTrim(this.ds_stanbyLot.getColumn(e.row,"CHECKTIME"));
        			this.gfn_openPopup(popupId,"pcm::PCM05701P.xfdl",oArg,"width=500,height=300");
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.tab_page.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.tab_page.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.tab_page.form.btn_PRODUCTDEFID.addEventHandler("onclick",this.tab_search_tab_page_btn_PRODUCTDEFID_onclick,this);
            this.tab_search.tab_page.form.btn_LOTID.addEventHandler("onclick",this.tab_search_tab_page_btn_LOTID_onclick,this);
            this.tab_search.tab_page.form.btn_PROCSEGMENT.addEventHandler("onclick",this.tab_search_tab_page_btn_PROCSEGMENT_onclick,this);
            this.tab_search.tab_page.form.btn_AREAID.addEventHandler("onclick",this.tab_search_tab_page_btn_AREAID_onclick,this);
            this.tab_search.Tabpage2.form.cal_STARTDT.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage2.form.cbo_PERIODTYPE.addEventHandler("onitemchanged",this.tab_search_tab_page_cbo_PERIODTYPE_onitemchanged,this);
            this.tab_search.Tabpage2.form.cal_ENDDT.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage2.form.btn_PRODUCTDEFID.addEventHandler("onclick",this.tab_search_tab_page_btn_PRODUCTDEFID_onclick,this);
            this.tab_search.Tabpage2.form.btn_LOTID.addEventHandler("onclick",this.tab_search_tab_page_btn_LOTID_onclick,this);
            this.tab_search.Tabpage2.form.btn_PROCSEGMENT.addEventHandler("onclick",this.tab_search_tab_page_btn_PROCSEGMENT_onclick,this);
            this.tab_search.Tabpage2.form.btn_AREAID.addEventHandler("onclick",this.tab_search_tab_page_btn_AREAID_onclick,this);
            this.tab_search.Tabpage2.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tabpage2.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.div_work.form.tab_Main.addEventHandler("onchanged",this.onChange,this);
            this.div_work.form.tab_Main.Tabpage1.form.grd_stanbyLot.addEventHandler("oncelldblclick",this.div_work_tab_Main_Tabpage1_grd_stanbyLot_oncelldblclick,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("PCM05700M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
