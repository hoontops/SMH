(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MFM01000M");
            this.set_titletext("LOT별 납기 진척현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"AGGTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_deliveryList", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"WIPPROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"WIPPROCESSSTATENAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"DUEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"EXPECTEDCOMPLETEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTDAY\" type=\"STRING\" size=\"256\"/><Column id=\"LEFTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"STANDARD_CUM_LEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_CUM_LEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"DIFFERENCE_LEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"REMAINSEGMENT_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"REMAIN_LEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"STATUSNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("label01","2","254","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("공정");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PROCESSCHANGETYPE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label02","2","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTIONDEFINITION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_processSegmentId","110","254",null,"20","35",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","295","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","295","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip00",null,"160","15","97","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip01","0","80","15","97",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip03",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"275","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","297","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_productionOrderId",null,"254","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productDefId","110","35",null,"20","35",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_enable("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_productDefid",null,"35","22","20","12",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00_00","2","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_plantId","110","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_codecolumn("C,SiteType,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label02_00","2","204","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("양산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("4AD4AB9312524CB59179ECBC3D92F143");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_productionType","110","204","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staAREAID","2","229","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_text("RTR/SHT");
            obj.set_tooltiptext("F95DBE2A7A524441927C96A4F53E4264");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label07","2","107","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_text("Lot No");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("873DD90A54B04DEDA6CAD3D47CE96684");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_lotNo","110","107",null,"20","34",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_readonly("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_lotNo",null,"107","22","20","12",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label07_00","2","131","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_text("고객사");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("129DB36F5D0C440FB801FBE99039BC20");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_customer","110","131",null,"20","34",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_readonly("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_customer",null,"131","22","20","12",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label02_00_00","2","156","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_text("보류여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("C8F5C4B290FD4AE389944A2729580407");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_rollSht","109","229","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("26");
            obj.set_codecolumn("C,RTRSHT,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_isHold","111","156","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("27");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label06_00","2","83","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("28");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("90E2C010747A42E69BA1F036062EDC69");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productDefName","110","83",null,"20","13",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("29");
            obj.set_readonly("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_rev","109","59","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("30");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_rev","2","59","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("31");
            obj.set_text("Rev");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label02_00_00_00","2","180","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("32");
            obj.set_text("Locking여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("C8F5C4B290FD4AE389944A2729580407");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_isLocking","110","180","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("33");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","250","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("title2_00","0","0","130","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("LOT별 납기진척현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("MENU_PG-SG-0141");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_deliveryList","title2_00:10","0","140","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("none");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_deliveryList","0","34",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_deliveryList");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"94\"/><Column size=\"59\"/><Column size=\"200\"/><Column size=\"180\"/><Column size=\"62\"/><Column size=\"180\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"71\"/><Column size=\"74\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"95\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"114\"/><Column size=\"1\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Site ID\"/><Cell col=\"1\" tooltiptext=\"LOTTYPE\" text=\"양산구분\"/><Cell col=\"2\" text=\"고객명\" tooltiptext=\"CUSTOMERNAME\"/><Cell col=\"3\" text=\"품목코드\" tooltiptext=\"PRODUCTDEFID\"/><Cell col=\"4\" text=\"REV\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell col=\"5\" text=\"품목명\" tooltiptext=\"PRODUCTDEFNAME\"/><Cell col=\"6\" text=\"Lot No\" tooltiptext=\"LOTID\"/><Cell col=\"7\" tooltiptext=\"USERSEQUENCE\" text=\"공정수순\"/><Cell col=\"8\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"9\" text=\"작업장\" tooltiptext=\"AREANAME\"/><Cell col=\"10\" text=\"상태\" tooltiptext=\"WIPPROCESSSTATE\"/><Cell col=\"11\" text=\"보류여부\" tooltiptext=\"ISHOLD\"/><Cell col=\"12\" text=\"수량\" tooltiptext=\"QTY\"/><Cell col=\"13\" text=\"수량(PNL)\" tooltiptext=\"PANELQTY\"/><Cell col=\"14\" text=\"MM\" tooltiptext=\"MM\"/><Cell col=\"15\" text=\"투입일\" tooltiptext=\"INPUTDAY\"/><Cell col=\"16\" tooltiptext=\"EXPECTEDCOMPLETEDATE\" text=\"예상완료일\"/><Cell col=\"17\" text=\"납기일\" tooltiptext=\"DUEDATE\"/><Cell col=\"18\" text=\"잔여일\" tooltiptext=\"LEFTDATE\"/><Cell col=\"19\" text=\"표준누적L/T\" tooltiptext=\"STANDARD_CUM_LEADTIME\"/><Cell col=\"20\" text=\"작업누적L/T\" tooltiptext=\"WORK_CUM_LEADTIME\"/><Cell col=\"21\" text=\"차이L/T\" tooltiptext=\"DIFFERENCE_LEADTIME\"/><Cell col=\"22\" tooltiptext=\"REMAIN_LEADTIME\" text=\"잔여L/T\"/><Cell col=\"23\" text=\"잔여공정수\" tooltiptext=\"REMAINSEGMENT_COUNT\"/><Cell col=\"24\" text=\"상태\" tooltiptext=\"STATUS\"/><Cell col=\"25\" text=\"상태\" tooltiptext=\"STATUS\"/></Band><Band id=\"body\"><Cell text=\"bind:PLANTID\" cssclass=\"expr:STATUS ==&apos;Urgency&apos; ? &apos;cell_red&apos; : &apos;&apos;\"/><Cell col=\"1\" text=\"bind:LOTTYPE\" cssclass=\"expr:STATUS ==&apos;Urgency&apos; ? &apos;cell_red&apos; : &apos;&apos;\"/><Cell col=\"2\" text=\"bind:CUSTOMERNAME\" cssclass=\"expr:STATUS ==&apos;Urgency&apos; ? &apos;cell_red&apos; : &apos;&apos;\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFID\" cssclass=\"expr:STATUS ==&apos;Urgency&apos; ? &apos;cell_red&apos; : &apos;&apos;\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFVERSION\" cssclass=\"expr:STATUS ==&apos;Urgency&apos; ? &apos;cell_red&apos; : &apos;&apos;\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFNAME\" cssclass=\"expr:STATUS ==&apos;Urgency&apos; ? &apos;cell_red&apos; : &apos;&apos;\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:LOTID\" cssclass=\"expr:STATUS ==&apos;Urgency&apos; ? &apos;cell_red&apos; : &apos;&apos;\"/><Cell col=\"7\" text=\"bind:USERSEQUENCE\" cssclass=\"expr:STATUS ==&apos;Urgency&apos; ? &apos;cell_red&apos; : &apos;&apos;\"/><Cell col=\"8\" text=\"bind:PROCESSSEGMENTNAME\" cssclass=\"expr:STATUS ==&apos;Urgency&apos; ? &apos;cell_red&apos; : &apos;&apos;\"/><Cell col=\"9\" text=\"bind:AREANAME\" cssclass=\"expr:STATUS ==&apos;Urgency&apos; ? &apos;cell_red&apos; : &apos;&apos;\"/><Cell col=\"10\" text=\"bind:WIPPROCESSSTATENAME\" cssclass=\"expr:STATUS ==&apos;Urgency&apos; ? &apos;cell_red&apos; : &apos;&apos;\"/><Cell col=\"11\" text=\"bind:ISHOLD\" cssclass=\"expr:STATUS ==&apos;Urgency&apos; ? &apos;cell_red&apos; : &apos;&apos;\"/><Cell col=\"12\" text=\"bind:QTY\" cssclass=\"expr:STATUS ==&apos;Urgency&apos; ? &apos;cell_red&apos; : &apos;&apos;\" textAlign=\"right\"/><Cell col=\"13\" text=\"bind:PANELQTY\" cssclass=\"expr:STATUS ==&apos;Urgency&apos; ? &apos;cell_red&apos; : &apos;&apos;\" textAlign=\"right\"/><Cell col=\"14\" text=\"bind:MM\" cssclass=\"expr:STATUS ==&apos;Urgency&apos; ? &apos;cell_red&apos; : &apos;&apos;\" textAlign=\"right\"/><Cell col=\"15\" cssclass=\"expr:STATUS ==&apos;Urgency&apos; ? &apos;cell_red&apos; : &apos;&apos;\" text=\"bind:INPUTDAY\"/><Cell col=\"16\" text=\"bind:EXPECTEDCOMPLETEDATE\" cssclass=\"expr:STATUS ==&apos;Urgency&apos; ? &apos;cell_red&apos; : &apos;&apos;\"/><Cell col=\"17\" edittype=\"date\" displaytype=\"date\" text=\"bind:DUEDATE\" cssclass=\"expr:STATUS ==&apos;Urgency&apos; ? &apos;cell_red&apos; : &apos;&apos;\"/><Cell col=\"18\" text=\"bind:LEFTDATE\" cssclass=\"expr:STATUS ==&apos;Urgency&apos; ? &apos;cell_red&apos; : &apos;&apos;\"/><Cell col=\"19\" text=\"bind:STANDARD_CUM_LEADTIME\" cssclass=\"expr:STATUS ==&apos;Urgency&apos; ? &apos;cell_red&apos; : &apos;&apos;\"/><Cell col=\"20\" text=\"bind:WORK_CUM_LEADTIME\" cssclass=\"expr:STATUS ==&apos;Urgency&apos; ? &apos;cell_red&apos; : &apos;&apos;\"/><Cell col=\"21\" text=\"bind:DIFFERENCE_LEADTIME\" cssclass=\"expr:STATUS ==&apos;Urgency&apos; ? &apos;cell_red&apos; : &apos;&apos;\"/><Cell col=\"22\" text=\"bind:REMAIN_LEADTIME\"/><Cell col=\"23\" text=\"bind:REMAINSEGMENT_COUNT\" cssclass=\"expr:STATUS ==&apos;Urgency&apos; ? &apos;cell_red&apos; : &apos;&apos;\"/><Cell col=\"24\" cssclass=\"expr:STATUS ==&apos;Urgency&apos; ? &apos;cell_red&apos; : &apos;&apos;\" text=\"bind:STATUSNAME\"/><Cell col=\"25\" text=\"bind:STATUS\" cssclass=\"expr:STATUS ==&apos;Urgency&apos; ? &apos;cell_red&apos; : &apos;&apos;\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","34","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("h34");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
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

            obj = new Button("btn_save",null,"16","26","24","93",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","58","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_text("화면명");
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

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MFM01000M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("MFM01000M.xfdl","lib::lib_mfm.xjs");
        this.registerScript("MFM01000M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: LOT별 납기진척현황
         * 파일명 		: MFM01000M.xfdl
         * 작성자 		: 이명환
         * 작성일 		: 2021.05.08
         *
         * 설  명		:  조회/수정/삭제/엑셀다운로드 기능 제공
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.05.18	MHYi   	   최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_mfm.xjs"); /*include "lib::lib_mfm.xjs"*/;	//MFM 공통 라이브러리 include


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
        	//this.fn_initGrid();
        	this.fn_searchClear();
        	this.fn_productVer();

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

        	this.ds_deliveryList.clearData();
            //this.ds_search.clearData();
        	//var pIsHold = this.tab_search.Tabpage1.form.cmb_aggType.value;
        	//alert(pIsHold);

        	var sRow = 0;

        	this.ds_search.setColumn(sRow,"PRODUCTIONTYPE", this.tab_search.Tabpage1.form.cmb_productionType.value);
        	this.ds_search.setColumn(sRow,"PRODUCTDEFNAME", this.tab_search.Tabpage1.form.edt_productDefName.value);
        	//this.ds_search.setColumn(sRow,"AGGTYPE",this.tab_search.Tabpage1.form.cmb_aggType.value);
        	this.ds_search.setColumn(sRow,"RTRSHT", this.tab_search.Tabpage1.form.cmb_rollSht.value);
        	this.ds_search.setColumn(sRow,"LOTID", this.tab_search.Tabpage1.form.edt_lotNo.value);
        	this.ds_search.setColumn(sRow,"PRODUCTDEFVERSION" , this.tab_search.Tabpage1.form.cbo_rev.value);
        	this.ds_search.setColumn(sRow,"ISHOLD",this.tab_search.Tabpage1.form.cmb_isHold.value);
        	this.ds_search.setColumn(sRow,"ISLOCKING",this.tab_search.Tabpage1.form.cmb_isLocking.value);

        	//alert(this.ds_search.getColumn(0,"PRODUCTDEFVERSION"));
        	var sSvcID = "selectDeliveryList";
        	var sController = "/mfm01000/selectDeliveryList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_deliveryList=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);


        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	if (!this.gfn_dsIsUpdated(this.ds_deliveryList) )
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");
        		return;
        	}



        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveDeliveryDate";
        	var sController 	= "/mfm01000/saveDeliveryDate.do";
        	var sInDatasets 	= "ds_deliveryList=ds_deliveryList:U ";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {

             this.tab_search.Tabpage1.form.cmb_plantId.set_value(this.gf_getSiteType());
             //this.tab_search.Tabpage1.form.cmb_aggType.set_value("Y");
        	 this.ds_deliveryList.clearData();
        	 this.ds_search.clearData();
        	 var pRow = this.ds_search.addRow();
        	 //alert(pRow);
        	this.ds_search.setColumn(0, "ENTERPRISEID", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_enterpriseId"));
        	this.ds_search.setColumn(0, "PLANTID", this.tab_search.Tabpage1.form.cmb_plantId.value);
        	this.ds_search.setColumn(0, "LANGUAGETYPE", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType"));
        	//this.ds_search.setColumn(0,"ISHOLD", this.tab_search.Tabpage1.form.cmb_isHold.value);

        	//alert(this.ds_search.getColumn(0,"LANGUAGETYPE"));

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
        	if (errCD < 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        	}
        	else
        	{
        		switch(trId) {
        			case "saveDeliveryDate" :
        			{
        				this.gfn_Message("SuccessSave", null, "info", "ok");
        				this.fn_formInit();
        				this.fn_search();
        				break;
        			}
        			default :
        		}
        	}
        };


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	switch(sPopupId)
        	{
        		case "POPUP_LOTID" :			// 필터 품목
        		{
        			var nLotNo 	= rtn[0];
        			this.tab_search.Tabpage1.form.edt_lotNo.set_value(nLotNo);
        			//this.fv_itemId = nId;
        			this.ds_search.setColumn(0,"LOTID", nLotNo);
        		}

        		break;
        		case "POPUP_PROCESSSEGMENT" :			// 필터 품목
        		{
        			rtn = this.gfn_split(rtn, ",");
        			if(rtn.length == 2)
        			{
        				var nProcessSegmentId 	= rtn[0];
        				var nProcessSegmentName	= rtn[1];
        				//alert(nProcessSegmentId);
        				//alert(nProcessSegmentName);
        				this.tab_search.Tabpage1.form.edt_processSegmentId.set_value(nProcessSegmentName);
        				this.ds_search.setColumn(0,"PROCESSSEGMENTID", nProcessSegmentId);
        				this.ds_search.setColumn(0,"PROCESSSEGMENTVERSION" , "*");
        				this.ds_search.setColumn(0,"PROCESSSEGMENTNAME" , nProcessSegmentName);
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
        				this.tab_search.Tabpage1.form.edt_processSegmentId.set_value(valueName.join(","));
        				this.ds_search.setColumn(0,"PROCESSSEGMENTNAME",valueName.join(","));
        				//this.tab_search.Tabpage1.form.edt_productDefName.set_value(valueName.join(","));
        				this.ds_search.setColumn(0,"PROCESSSEGMENTID", valueId.join(","));
        			}
        		}
        		break;

        		case "POPUP_PRODUCTDEFID" :
        		{//PRODUCTDEFID|PRODUCTDEFVERSION|PRODUCTDEFNAME
        			rtn = this.gfn_split(rtn, ",");
        			if (rtn.length == 3)
        			{

        				this.tab_search.Tabpage1.form.edt_productDefId.set_value(rtn[0]);
        				this.ds_search.setColumn(0,"PRODUCTDEFID",rtn[0]);
        				this.tab_search.Tabpage1.form.edt_productDefName.set_value(rtn[2]);
        				this.ds_search.setColumn(0,"PRODUCTDEFNAME",rtn[2]);
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
        				this.tab_search.Tabpage1.form.edt_productDefId.set_value(valueId.join(","));
        				this.ds_search.setColumn(0,"PRODUCTDEFID",valueId.join(","));
        				this.tab_search.Tabpage1.form.edt_productDefName.set_value(valueName.join(","));
        				this.ds_search.setColumn(0,"PRODUCTDEFNAME", valueName.join(","));
        				this.fn_productVer();
        			}
        		}
        		break;

        		case "POPUP_CUSTOMER" :
        		{
        			rtn = this.gfn_split(rtn, ",");
        			if (rtn.length == 2)
        			{
        				this.tab_search.Tabpage1.form.edt_customer.set_value(rtn[1]);
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

        				this.tab_search.Tabpage1.form.edt_customer.set_value(value.join(","));
        				this.ds_search.setColumn( 0, "CUSTOMERID",          dsval.join(",") );
        			}

        		}
        		break;

        		default :
        			break;
        	}




        };
        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/





        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/



        // MHYi 210518
        this.tab_search_Tabpage1_btn_processSegment_onclick = function(obj,e)
        {
        	var oArg = {};
        	if (this.tab_search.Tabpage1.form.edt_processSegmentId.value != "")
        	{
        		oArg.arg_type        = "CA";
        	}
        	else
        	{
        		oArg.arg_type        = "C";
        	}
        	oArg.arg_popupCd     = "P00163";
        	oArg.arg_popupNm     = "공정 조회";
        	oArg.arg_rtnCols     = "PROCESSSEGMENTID|PROCESSSEGMENTNAME";
        	oArg.arg_paramCols = "VALIDSTATE|LANGUAGETYPE";
        	oArg.arg_paramValues ="Valid|"+ this.gf_getLanguageType();
        	oArg.arg_searchStr = "PROCESSSEGMENT=" + this.tab_search.Tabpage1.form.edt_processSegmentId.value ;
        	this.gfn_openPopup( "POPUP_PROCESSSEGMENT", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");

        };

        // MHYi 210518
        this.tab_search_Tabpage1_btn_lotNo_onclick = function(obj,e)
        {
        	var oArg = {};
        	if (this.tab_search.Tabpage1.form.edt_lotNo.value != "")
        	{
        		oArg.arg_type        = "CA";
        	}
        	else
        	{
        		oArg.arg_type        = "C";
        	}
        	oArg.arg_popupCd     = "P00159";
        	oArg.arg_popupNm     = "LOT No 조회";
        	oArg.arg_rtnCols     = "LOTID";
        	oArg.arg_paramCols   = "P_POPTYPE|P_LANGUAGETYPE";
        	oArg.arg_paramValues = "LOTID|" + this.gf_getLanguageType();
        	oArg.arg_searchStr   = "P_LOTID=" + this.tab_search.Tabpage1.form.edt_lotNo.value;
        	this.gfn_openPopup( "POPUP_LOTID", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");

        };

        this.tab_search_Tabpage1_btn_customer_onclick = function(obj,e)
        {
        	var oArg = {};
        	if (this.tab_search.Tabpage1.form.edt_customer.value != "")
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
        	oArg.arg_searchStr   = "P_CUSTOMER=" + this.tab_search.Tabpage1.form.edt_customer.value;
        	this.gfn_openPopup( "POPUP_CUSTOMER", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");

        };

        this.tab_search_Tabpage1_btn_productDefId_onclick = function(obj,e)
        {
        	var oArg = {};

        	if (this.tab_search.Tabpage1.form.edt_productDefId.value != "")
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
        	oArg.arg_searchStr   = "P_PRODUCTDEFNAME=" + this.tab_search.Tabpage1.form.edt_productDefId.value;
        	this.gfn_openPopup( "POPUP_PRODUCTDEFID", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        };

        this.tab_search_Tabpage1_edt_customer_onkeydown = function(obj,e)
        {
        	if (e.keycode != 13) return;
        	this.tab_search_Tabpage1_btn_customer_onclick();
        };


        this.tab_search_Tabpage1_edt_productDefId_onkeydown = function(obj,e)
        {
        	if (e.keycode != 13) return;
        	this.tab_search_Tabpage1_btn_productDefId_onclick();
        };


        this.tab_search_Tabpage1_edt_processSegmentId_onkeydown = function(obj,e)
        {
        	if (e.keycode != 13) return;
        	this.tab_search_Tabpage1_btn_processSegment_onclick();
        };

        this.fn_productVer = function (obj, e)
        {
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("ENTERPRISEID", 				this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", 					this.nfn_nvl(this.gf_getSiteType(), ""));
        	if( this.ds_search.getColumn(0,"PRODUCTDEFID")==''){
        		sArgs += this.gfn_setParam("P_PRODUCTDEFID", 			"X"); //제품ID가 공백이면 VER 은 전체만 표시되게 한다.
        	}else{
        		sArgs += this.gfn_setParam("P_PRODUCTDEFID", 			this.nfn_nvl(this.ds_search.getColumn(0,"PRODUCTDEFID"), "")); //제품ID : 다중건
        	}
        	sArgs += this.gfn_setParam("LANGUAGETYPE", 				this.gf_getLanguageType());

        	this.mfmfn_setCustomQueryCmb(this.tab_search.Tabpage1.form.cbo_rev // Object
        								, "selectProductDefVerList,ALL,Y,A" // OPTION
        								, sArgs	// 추가 파라미터
        								); //콜백함수 지정
        };




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tabpage1.form.edt_processSegmentId.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_processSegmentId_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_productionOrderId.addEventHandler("onclick",this.tab_search_Tabpage1_btn_processSegment_onclick,this);
            this.tab_search.Tabpage1.form.edt_productDefId.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_productDefId_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_productDefid.addEventHandler("onclick",this.tab_search_Tabpage1_btn_productDefId_onclick,this);
            this.tab_search.Tabpage1.form.btn_lotNo.addEventHandler("onclick",this.tab_search_Tabpage1_btn_lotNo_onclick,this);
            this.tab_search.Tabpage1.form.edt_customer.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_customer_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_customer.addEventHandler("onclick",this.tab_search_Tabpage1_btn_customer_onclick,this);
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.ds_deliveryList.addEventHandler("onvaluechanged",this.ds_deliveryList_onvaluechanged,this);
        };
        this.loadIncludeScript("MFM01000M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
