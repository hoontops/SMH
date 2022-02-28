(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM05000M");
            this.set_titletext("모델별 재공조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_main", this);
            obj._setContents("<ColumnInfo><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"ISINTRANSIT\" type=\"STRING\" size=\"256\"/><Column id=\"WIPTOTALPCS\" type=\"STRING\" size=\"256\"/><Column id=\"WIPTOTALPNL\" type=\"STRING\" size=\"256\"/><Column id=\"WIPTOTALMM\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENCY\" type=\"STRING\" size=\"256\"/><Column id=\"WIPPRICE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"WORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INNERREVISIONTOTAL\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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


            obj = new Dataset("ds_cbo_innerrevisionTotal", this);
            obj._setContents("<ColumnInfo><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DATA\">Y</Col></Row><Row><Col id=\"DATA\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Process", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSNAME_MIDDLE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSNAME_TOP\" type=\"STRING\" size=\"256\"/><Column id=\"P_PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Combo("cbo_ISLOCKING","108","310","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("12");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
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

            obj = new Static("sta_PRODUCTDEFID","0","35","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("22");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMCODE");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID","108","35",null,"20","37",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("1");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_PRODUCTDEFID",null,"35","22","20","15",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTDEFVERSION","0","60","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("24");
            obj.set_text("Rev.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("INNERREVISION");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTDEFVERSION","108","60","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("2");
            obj.set_codecolumn("PRODUCTDEFVERSIONCODE");
            obj.set_datacolumn("PRODUCTDEFVERSIONNAME");
            obj.set_innerdataset("ds_cbo_ProdVersion");
            obj.set_text("전체조회");
            obj.set_value("");
            obj.set_index("0");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTDEFNAME","0","85","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("25");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMID");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFNAME","108","85",null,"20","15",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("3");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_COMPANYCLIENT",null,"110","22","20","15",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("26");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_COMPANYCLIENT","108","110",null,"20","37",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("4");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_COMPANYCLIENT","0","110","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_text("고객사");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("27");
            obj.set_tooltiptext("COMPANYCLIENT");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_AREAID","0","135","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("28");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("AREA");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_AREAID","108","135",null,"20","37",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("5");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_AREAID",null,"135","22","20","15",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("29");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PROCSEGMENT","0","160","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("30");
            obj.set_text("공정");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PROCESSCHANGETYPE");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_PROCSEGMENT","108","160",null,"20","37",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("6");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_PROCSEGMENT",null,"160","22","20","15",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("31");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTIONTYPE","0","185","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("32");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTIONTYPE");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTIONTYPE","108","185","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("7");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            obj.set_text("전체조회");
            obj.set_value("");
            obj.set_index("0");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTDIVISION","108","210","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("8");
            obj.set_codecolumn("C,ProductDivision2,ALL,Y,Y");
            obj.set_text("선택");
            obj.set_index("0");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTDIVISION","0","210","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_text("제품구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("33");
            obj.set_tooltiptext("THEPRODUCTTYPE");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_WORKTYPE","0","235","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("34");
            obj.set_text("작업구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("WORKTYPE");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_WORKTYPE","108","235","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("9");
            obj.set_codecolumn("C,LotWorkType,ALL,Y,Y");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_INNERREVISIONTOTAL","108","260","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("10");
            obj.set_codecolumn("DATA");
            obj.set_datacolumn("DATA");
            obj.set_innerdataset("ds_cbo_innerrevisionTotal");
            obj.set_index("0");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_INNERREVISIONTOTAL","0","260","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_text("Rev.별 집계여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("35");
            obj.set_tooltiptext("INNERREVISIONTOTAL");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_ISHOLD","0","sta_INNERREVISIONTOTAL:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("36");
            obj.set_text("보류 여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ISHOLD");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_ISHOLD","108","cbo_INNERREVISIONTOTAL:5","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("11");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_ISLOCKING","0","sta_ISHOLD:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("37");
            obj.set_text("Locking 여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ISLOCKING");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"110\"/><Column size=\"50\"/><Column size=\"150\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"110\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" colspan=\"10\" text=\"기본 정보\" tooltiptext=\"DEFAULTINFO\"/><Cell col=\"11\" colspan=\"3\" text=\"재공 Total\" tooltiptext=\"WIPTOTAL\"/><Cell col=\"14\" colspan=\"3\" text=\"인수대기\" tooltiptext=\"WAITFORRECEIVE\"/><Cell col=\"17\" colspan=\"3\" text=\"인수\" tooltiptext=\"ACCEPT\"/><Cell col=\"20\" colspan=\"3\" text=\"작업시작\" tooltiptext=\"WORKSTARTLEADTIME\"/><Cell col=\"23\" colspan=\"3\" text=\"작업완료\" tooltiptext=\"WORKENDLEADTIME\"/><Cell col=\"26\" colspan=\"2\" text=\"재공금액\" tooltiptext=\"WIPAMOUNT\"/><Cell row=\"1\" text=\"No\"/><Cell row=\"1\" col=\"1\" text=\"고객\" tooltiptext=\"CUSTOMER\"/><Cell row=\"1\" col=\"2\" text=\"생산구분\" tooltiptext=\"PRODUCTIONTYPE\"/><Cell row=\"1\" col=\"3\" text=\"품목코드\" tooltiptext=\"ITEMCODE\"/><Cell row=\"1\" col=\"4\" text=\"Rev.\" tooltiptext=\"INNERREVISION\"/><Cell row=\"1\" col=\"5\" text=\"품목명\" tooltiptext=\"ITEMNAME\"/><Cell row=\"1\" col=\"6\" text=\"공정수순\" tooltiptext=\"USERSEQUENCE\"/><Cell row=\"1\" col=\"7\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell row=\"1\" col=\"8\" text=\"Site ID\" tooltiptext=\"PLANTID\"/><Cell row=\"1\" col=\"9\" text=\"작업장\" tooltiptext=\"WORKAREA\"/><Cell row=\"1\" col=\"10\" text=\"Roll/Sheet\" tooltiptext=\"RTRSHT_WORDWRAP\"/><Cell row=\"1\" col=\"11\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"12\" text=\"PNL\" tooltiptext=\"OSPDAY01PNL\"/><Cell row=\"1\" col=\"13\" text=\"MM\" tooltiptext=\"OSPDAY09MM\"/><Cell row=\"1\" col=\"14\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"15\" text=\"PNL\" tooltiptext=\"OSPDAY01PNL\"/><Cell row=\"1\" col=\"16\" text=\"MM\" tooltiptext=\"OSPDAY09MM\"/><Cell row=\"1\" col=\"17\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"18\" text=\"PNL\" tooltiptext=\"OSPDAY01PNL\"/><Cell row=\"1\" col=\"19\" text=\"MM\" tooltiptext=\"OSPDAY09MM\"/><Cell row=\"1\" col=\"20\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"21\" text=\"PNL\" tooltiptext=\"OSPDAY01PNL\"/><Cell row=\"1\" col=\"22\" text=\"MM\" tooltiptext=\"OSPDAY09MM\"/><Cell row=\"1\" col=\"23\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"24\" text=\"PNL\" tooltiptext=\"OSPDAY01PNL\"/><Cell row=\"1\" col=\"25\" text=\"MM\" tooltiptext=\"OSPDAY09MM\"/><Cell row=\"1\" col=\"26\" text=\"통화\" tooltiptext=\"CURRENCY\"/><Cell row=\"1\" col=\"27\" text=\"금액\" tooltiptext=\"CLAIMAMOUNT\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CUSTOMER\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:LOTTYPE\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:ITEMVERSION\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:USERSEQUENCE\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:PLANTID\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:RTRSHT\" textAlign=\"center\" displaytype=\"normal\" maskeditformat=\"#,##0.##\"/><Cell col=\"11\" text=\"bind:WIPTOTALPCS\" textAlign=\"right\" displaytype=\"number\" maskeditformat=\"#,##0.##\"/><Cell col=\"12\" text=\"bind:WIPTOTALPNL\" textAlign=\"right\" displaytype=\"number\" edittype=\"none\" maskeditformat=\"#,##0.##\"/><Cell col=\"13\" text=\"bind:WIPTOTALMM\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"14\" text=\"bind:SENDPCSQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"15\" text=\"bind:SENDPANELQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"16\" textAlign=\"right\" displaytype=\"number\" text=\"bind:SENDMMQTY\"/><Cell col=\"17\" textAlign=\"right\" displaytype=\"number\" text=\"bind:RECEIVEPCSQTY\"/><Cell col=\"18\" textAlign=\"right\" displaytype=\"number\" text=\"bind:RECEIVEPANELQTY\"/><Cell col=\"19\" textAlign=\"right\" displaytype=\"number\" text=\"bind:RECEIVEMMQTY\"/><Cell col=\"20\" textAlign=\"right\" displaytype=\"number\" text=\"bind:WORKSTARTPCSQTY\"/><Cell col=\"21\" textAlign=\"right\" displaytype=\"number\" text=\"bind:WORKSTARTPANELQTY\"/><Cell col=\"22\" textAlign=\"right\" displaytype=\"number\" text=\"bind:WORKSTARTMMQTY\"/><Cell col=\"23\" textAlign=\"right\" displaytype=\"number\" text=\"bind:WORKENDPCSQTY\"/><Cell col=\"24\" textAlign=\"right\" displaytype=\"number\" text=\"bind:WORKENDPANELQTY\"/><Cell col=\"25\" textAlign=\"right\" displaytype=\"number\" text=\"bind:WORKENDMMQTY\"/><Cell col=\"26\" text=\"bind:CURRENCY\"/><Cell col=\"27\" textAlign=\"right\" displaytype=\"number\" text=\"bind:WIPPRICE\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\" text=\"합계\"/><Cell col=\"4\" displaytype=\"number\" expr=\"dataset.getRowCount()\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\" displaytype=\"number\" expr=\"dataset.getSum(&quot;WIPTOTALPCS&quot;)\"/><Cell col=\"12\" displaytype=\"number\" expr=\"dataset.getSum(&quot;WIPTOTALPNL&quot;)\"/><Cell col=\"13\" displaytype=\"number\" expr=\"dataset.getSum(&quot;WIPTOTALMM&quot;)\"/><Cell col=\"14\" displaytype=\"number\" expr=\"dataset.getSum(&quot;SENDPCSQTY&quot;)\"/><Cell col=\"15\" displaytype=\"number\" expr=\"dataset.getSum(&quot;SENDPANELQTY&quot;)\"/><Cell col=\"16\" displaytype=\"number\" expr=\"dataset.getSum(&quot;SENDMMQTY&quot;)\"/><Cell col=\"17\" displaytype=\"number\" expr=\"dataset.getSum(&quot;RECEIVEPCSQTY&quot;)\"/><Cell col=\"18\" displaytype=\"number\" expr=\"dataset.getSum(&quot;RECEIVEPANELQTY&quot;)\"/><Cell col=\"19\" displaytype=\"number\" expr=\"dataset.getSum(&quot;RECEIVEMMQTY&quot;)\"/><Cell col=\"20\" displaytype=\"number\" expr=\"dataset.getSum(&quot;WORKSTARTPCSQTY&quot;)\"/><Cell col=\"21\" displaytype=\"number\" expr=\"dataset.getSum(&quot;WORKSTARTPANELQTY&quot;)\"/><Cell col=\"22\" displaytype=\"number\" expr=\"dataset.getSum(&quot;WORKSTARTMMQTY&quot;)\"/><Cell col=\"23\" displaytype=\"number\" expr=\"dataset.getSum(&quot;WORKENDPCSQTY&quot;)\"/><Cell col=\"24\" displaytype=\"number\" expr=\"dataset.getSum(&quot;WORKENDPANELQTY&quot;)\"/><Cell col=\"25\" displaytype=\"number\" expr=\"dataset.getSum(&quot;WORKENDMMQTY&quot;)\"/><Cell col=\"26\"/><Cell col=\"27\" displaytype=\"number\" expr=\"dataset.getSum(&quot;WIPPRICE&quot;)\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_main",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subMainTitle","0","0","60","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("재공현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("WIPLIST");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_main","sta_subMainTitle:2","0","140","34",null,null,null,null,null,null,this.div_work.form);
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

            obj = new BindItem("item1","tab_search.tab_page.form.edt_PRODUCTDEFID","value","ds_search","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab_search.tab_page.form.cbo_PRODUCTDEFVERSION","value","ds_search","PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tab_search.tab_page.form.edt_PRODUCTDEFNAME","value","ds_search","PRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab_search.tab_page.form.edt_AREAID","value","ds_search","AREANAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tab_search.tab_page.form.edt_PROCSEGMENT","value","ds_search","PROCESSSEGMENTNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tab_search.tab_page.form.edt_COMPANYCLIENT","value","ds_search","CUSTOMERNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","tab_search.tab_page.form.cbo_PRODUCTIONTYPE","value","ds_search","PRODUCTIONTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","tab_search.tab_page.form.cbo_PRODUCTDIVISION","value","ds_search","PRODUCTDIVISION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","tab_search.tab_page.form.cbo_WORKTYPE","value","ds_search","WORKTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","tab_search.tab_page.form.cbo_INNERREVISIONTOTAL","value","ds_search","INNERREVISIONTOTAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","tab_search.tab_page.form.cbo_ISHOLD","value","ds_search","ISHOLD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","tab_search.tab_page.form.cbo_ISLOCKING","value","ds_search","ISLOCKING");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM05000M.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("PCM05000M.xfdl","lib::lib_mtm.xjs");
        this.addIncludeScript("PCM05000M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PCM05000M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 모델별 재공조회
         * 파일명 		: PCM05000M.xfdl
         * 작성자 		: 박대호
         * 작성일 		: 2021.03.31
         *
         * 설  명		:  조회/엑셀다운로드 기능 제공
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.03.31	박대호   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_mtm.xjs"); /*include "lib::lib_mtm.xjs"*/;	//MTM 공통 라이브러리 include
        this.executeIncludeScript("pcm::pcmCommon.xjs"); /*include "pcm::pcmCommon.xjs"*/; //pcm 에서 사용하는 공통
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.searchDiv = this.tab_search.tab_page.form;

        this.g_areaId = "";			// 작업장ID


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
        	this.ds_search.setColumn(0, "USERID", this.gf_getUserId()); //사용자
        	this.ds_main.clearData();

        	var sSvcID 			= "selectWipListByProduct";
        	var sController 	= "/pcm05000/selectWipListByProduct.do";
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
         		case "selectEcmLookupValuesVList2ds_CLotWorkTypeALL" :
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
        		case "POPUP_PROCSEGMENT" :
        		{
        			this.tab_search.tab_page.form.edt_PROCSEGMENT.set_value( rtn[1]);
        			this.ds_search.setColumn( 0, "PROCESSSEGMENTID",         rtn[0]);
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
        	this.ds_search.setColumn(0, "INNERREVISIONTOTAL", "Y");
        	this.ds_search.setColumn(0, "CUSTOMERNAME", "");
        	this.ds_search.setColumn(0, "PRODUCTDEFID", "");
        	this.ds_search.setColumn(0, "AREANAME", "");
        	this.ds_search.setColumn(0, "PROCESSSEGMENTNAME", "");
        	this.div_work.form.grd_main.setFormatColProperty(4, "size", 50);
        	this.ds_search.setColumn(0,"PLANTID",this.gf_getSiteType());
        	this.ds_search.setColumn(0, "ISHOLD", "N");
        }


        /*
         * 기능 : 'Site' 콤보 조회
         */
        this.fn_initSiteCombo = function ()
        {

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

        /*
         *	기능 : 고객사 검색 버튼 클릭 시
         */
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
        /*
         *	기능 : 작업장 검색 버튼 클릭 시
         */
        this.tab_search_tab_page_btn_AREAID_onclick = function(obj,e)
        {
        	var oArg = {};
        	if (this.tab_search.tab_page.form.edt_AREAID.value != "")
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
        	oArg.arg_searchStr   = "P_DICTIONARY=" + this.tab_search.tab_page.form.edt_AREAID.value;
        	this.gfn_openPopup( "POPUP_AREAID", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        };
        /*
         *	기능 : 공정 검색 버튼 클릭 시
         */
        this.tab_search_tab_page_btn_PROCSEGMENT_onclick = function(obj,e)
        {
        	var oArg = {};
        	if (this.tab_search.tab_page.form.edt_PROCSEGMENT.value != "")
        	{
        		oArg.arg_type        = "BA";
        	}
        	else
        	{
        		oArg.arg_type        = "B";
        	}
        	oArg.arg_popupCd     = "P00213";
        	oArg.arg_popupNm     = "공정 선택";
        	oArg.arg_rtnCols     = "PROCESSSEGMENTID|PROCESSSEGMENTNAME";
        	oArg.arg_paramCols   = "P_POPTYPE|P_LANGUAGETYPE";
        	oArg.arg_paramValues = "PROCESSSEGMENT|" + this.gf_getLanguageType();
        	oArg.arg_searchStr   = "P_PROCESSSEGMENT=" + this.tab_search.tab_page.form.edt_PROCSEGMENT.value;
        	this.gfn_openPopup( "POPUP_PROCSEGMENT", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        };
        /*
         *	기능 : Rev.별 집계여부 변경시
         */
        this.tab_search_tab_page_cbo_INNERREVISIONTOTAL_onitemchanged = function(obj,e)
        {
        	if(this.tab_search.tab_page.form.cbo_INNERREVISIONTOTAL.value == "Y")
        	{
        		this.div_work.form.grd_main.setFormatColProperty(4, "size", 50);
        	}
        	else
        	{
        		this.div_work.form.grd_main.setFormatColProperty(4, "size", 0);
        	}
        };
        /*
         *	기능 : 행 더블클릭시
         */
        this.div_work_grd_main_oncelldblclick = function(obj,e)
        {
        	var oArg = {};
        	if(this.ds_main.getRowCount() > 0)
        	{
        		var sUrl = "pcm::PCM04900M.xfdl";
        		//var sMenuId = nexacro.getApplication().gds_menu.lookup("PAGE_URL", sUrl, "MENU_ID");
        		// arryList 타입전달 예)
        		var objArgs = {
        			menuName : "PCM05000",
        			objList : [this.SelectRow2JsonString(this.ds_main)]
        		};
        		//this.gfn_newPopup(sMenuId, objArgs);
         		var bReload = true;
         		this.gfn_goPage(sUrl, objArgs, bReload);
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
            this.tab_search.tab_page.form.btn_COMPANYCLIENT.addEventHandler("onclick",this.tab_search_tab_page_btn_COMPANYCLIENT_onclick,this);
            this.tab_search.tab_page.form.btn_AREAID.addEventHandler("onclick",this.tab_search_tab_page_btn_AREAID_onclick,this);
            this.tab_search.tab_page.form.btn_PROCSEGMENT.addEventHandler("onclick",this.tab_search_tab_page_btn_PROCSEGMENT_onclick,this);
            this.tab_search.tab_page.form.cbo_INNERREVISIONTOTAL.addEventHandler("onitemchanged",this.tab_search_tab_page_cbo_INNERREVISIONTOTAL_onitemchanged,this);
            this.div_work.form.grd_main.addEventHandler("oncelldblclick",this.div_work_grd_main_oncelldblclick,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("PCM05000M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
