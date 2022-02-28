(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM10100M");
            this.set_titletext("월별 제공 수불부");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTWORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"ISEND\" type=\"STRING\" size=\"256\"/><Column id=\"REQUIREMENT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prodVersion", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFVERSIONCODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSIONNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popSearch", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_productVersionSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RODUCTDIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_wipSubul", this);
            obj._setContents("<ColumnInfo><Column id=\"PERIOD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTWORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTWORKTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSIDNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTIDNAME\" type=\"STRING\" size=\"256\"/><Column id=\"STEPCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"OWNTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"OWNTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"BEGIN_WIP_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"QUEUE_BEGIN_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"QUEUE_FR_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"QUEUE_TO_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"QUEUE_ENDING_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"QUEUE_SPLIT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"RUN_BEGIN_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"RUN_FR_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"RUN_TO_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"RUN_ENDING_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"RUN_SPLIT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"TOMOVE_BEGIN_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"TOMOVE_FR_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"TOMOVE_TO_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"TOMOVE_ENDING_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"TOMOVE_SPLIT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"REJECT_BEGIN_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"REJECT_FR_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"REJECT_TO_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"REJECT_ENDING_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"REJECT_SPLIT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"SCRAP_BEGIN_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"SCRAP_FR_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"ENDING_WIP_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"ISSTART\" type=\"STRING\" size=\"256\"/><Column id=\"ISEND\" type=\"STRING\" size=\"256\"/><Column id=\"PROD_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"RUNNING_CHANGE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FIRST_LOT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOTID_USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOTID_PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"SPLIT_LOT_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lineNo", this);
            obj._setContents("<ColumnInfo><Column id=\"CODEID\" type=\"STRING\" size=\"256\"/><Column id=\"COCENM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tab1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Edit("edt_areaId","108","210",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("30");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("16");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("label00","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("17");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_plantId","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,SiteType,,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("label01","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("18");
            obj.set_text("기간");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PERIOD");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("label02","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("19");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("F112527EF89E45D8BA876725E97E3B30");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_productDefId","108","60",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("2");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_productDefId",null,"60","22","20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_productDefVersion","108","85","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_prodVersion");
            obj.set_codecolumn("PRODUCTDEFVERSIONCODE");
            obj.set_datacolumn("PRODUCTDEFVERSIONNAME");
            obj.set_text("전체조회");
            obj.set_value("");
            obj.set_index("0");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("label03","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("20");
            obj.set_text("Rev.");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("label04","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("21");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFNAME");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("label07","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("22");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("DC67B95CD188427AAAB84B5346920900");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("label08","0","185","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("23");
            obj.set_text("작업구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("WORKTYPE");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("label09","0","235","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("24");
            obj.set_text("생산입고");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("F44F4B342D1C4C1F9D2688D6FAA9D10C");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_productDefNm","108","110",null,"20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("5");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_productionType","108","160","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("8");
            obj.set_codecolumn("C,LotType,ALL,Y,Y");
            obj.set_innerdataset("");
            obj.set_text("전체조회");
            obj.set_value("");
            obj.set_index("0");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_lotWorkType","108","185","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("9");
            obj.set_codecolumn("C,LotInputType,ALL,Y,Y");
            obj.set_innerdataset("");
            obj.set_text("양산");
            obj.set_value("");
            obj.set_index("0");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","300","102","36",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","300","146","36",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("25");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"280","45","20","91",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("26");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00_00","161","300","10","27",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("27");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_state","108","235","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("12");
            obj.set_codecolumn("C,CurrentStatus,ALL,Y,Y");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("label05_00","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("28");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LOTID");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_lotId",null,"135","22","20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_lotId","108","135",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("6");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("label05","0","210","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("29");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("OCCURAREA");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_areaName","108","210",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("10");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_areaName",null,"210","22","20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Div("div_periodName","108","35","165","21",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("1");
            obj.set_url("common::com_monthCalendar.xfdl");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_requirement","108","260","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var tab_search_Tab1_form_cmb_requirement_innerdataset = new nexacro.NormalDataset("tab_search_Tab1_form_cmb_requirement_innerdataset", obj);
            tab_search_Tab1_form_cmb_requirement_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">NULL</Col><Col id=\"datacolumn\">없음</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">폐기수량 &gt; 0 </Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">기말재공수량 &lt; 0</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">부적합기말수량 &gt; 0 </Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">(전월기말  &gt; 0) &lt;&gt; 당월 기초</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">Split Lot</Col></Row></Rows>");
            obj.set_innerdataset(tab_search_Tab1_form_cmb_requirement_innerdataset);
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("label09_00","0","260","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("31");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("search requirement");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","281","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
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

            obj = new Grid("grd_pcmLotList","0","34",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_wipSubul");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"119\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"119\"/><Column size=\"80\"/><Column size=\"65\"/><Column size=\"181\"/><Column size=\"170\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"98\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"품목코드\" tooltiptext=\"PRODUCTDEFID\"/><Cell col=\"1\" rowspan=\"2\" text=\"Rev\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell col=\"2\" rowspan=\"2\" text=\"품목명\" tooltiptext=\"34F62A5A5E0040598A9BEB23444ABAE2\"/><Cell col=\"3\" rowspan=\"2\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell col=\"4\" rowspan=\"2\" text=\"생산구분\" tooltiptext=\"PRODUCTIONTYPE\"/><Cell col=\"5\" rowspan=\"2\" text=\"작업구분\" tooltiptext=\"LOTWORKTYPE\"/><Cell col=\"6\" rowspan=\"2\" tooltiptext=\"USERSEQUENCE\" text=\"공정수순\"/><Cell col=\"7\" rowspan=\"2\" text=\"대표공정\" tooltiptext=\"MAINOPER\"/><Cell col=\"8\" rowspan=\"2\" text=\"표준공정\" tooltiptext=\"STANDARDOPERATIONID\"/><Cell col=\"9\" rowspan=\"2\" text=\"공정작업\" tooltiptext=\"MENU_PROCESSWORK\"/><Cell col=\"10\" rowspan=\"2\" text=\"기초 재공수량\" tooltiptext=\"BEGIN_WIP_QTY\"/><Cell col=\"11\" colspan=\"5\" text=\"대기\" tooltiptext=\"CAPAIDLE\"/><Cell col=\"16\" colspan=\"5\" text=\"실행\" tooltiptext=\"RUN\"/><Cell col=\"21\" colspan=\"5\" text=\"이동대기\" tooltiptext=\"TOMOVE\"/><Cell col=\"26\" colspan=\"5\" text=\"부적합\" tooltiptext=\"REJECT\"/><Cell col=\"31\" colspan=\"2\" text=\"폐기\" tooltiptext=\"SCRAP\"/><Cell col=\"33\" rowspan=\"2\" tooltiptext=\"ENDING_WIP_QTY\" text=\"기말 재고수량\"/><Cell col=\"34\" rowspan=\"2\" text=\"자사구분\" tooltiptext=\"OWNTYPE\"/><Cell col=\"35\" rowspan=\"2\" text=\"첫공정 여부\" tooltiptext=\"ISSTART\"/><Cell col=\"36\" rowspan=\"2\" text=\"생산입고 여부\" tooltiptext=\"ISEND\"/><Cell col=\"37\" rowspan=\"2\" tooltiptext=\"ISSPLIT\" text=\"분할여부\"/><Cell col=\"38\" rowspan=\"2\" text=\"R/C\" tooltiptext=\"39BEEBE287F540CD81CE56A53C7AB32C\"/><Cell col=\"39\" rowspan=\"2\" text=\"생성일\" tooltiptext=\"CREATEDTIME\" displaytype=\"normal\"/><Cell row=\"1\" col=\"11\" text=\"기초수량\" tooltiptext=\"BASEQTY\"/><Cell row=\"1\" col=\"12\" text=\"입고수량\" tooltiptext=\"INCOMEQTY\"/><Cell row=\"1\" col=\"13\" text=\"출고수량\" tooltiptext=\"SENDQTY\"/><Cell row=\"1\" col=\"14\" text=\"분할수량\" tooltiptext=\"SPLITQTY\"/><Cell row=\"1\" col=\"15\" text=\"기말수량\" tooltiptext=\"ENDING_QTY\"/><Cell row=\"1\" col=\"16\" text=\"기초수량\" tooltiptext=\"BASEQTY\"/><Cell row=\"1\" col=\"17\" text=\"입고수량\" tooltiptext=\"INCOMEQTY\"/><Cell row=\"1\" col=\"18\" text=\"출고수량\" tooltiptext=\"SENDQTY\"/><Cell row=\"1\" col=\"19\" tooltiptext=\"SPLITQTY\" text=\"분할수량\"/><Cell row=\"1\" col=\"20\" text=\"기말수량\" tooltiptext=\"ENDING_QTY\"/><Cell row=\"1\" col=\"21\" text=\"기초수량\" tooltiptext=\"BASEQTY\"/><Cell row=\"1\" col=\"22\" text=\"입고수량\" tooltiptext=\"INCOMEQTY\"/><Cell row=\"1\" col=\"23\" text=\"출고수량\" tooltiptext=\"SENDQTY\"/><Cell row=\"1\" col=\"24\" text=\"분할수량\" tooltiptext=\"SPLITQTY\"/><Cell row=\"1\" col=\"25\" text=\"기말수량\" tooltiptext=\"ENDING_QTY\"/><Cell row=\"1\" col=\"26\" text=\"기초수량\" tooltiptext=\"BASEQTY\"/><Cell row=\"1\" col=\"27\" text=\"입고수량\" tooltiptext=\"INCOMEQTY\"/><Cell row=\"1\" col=\"28\" text=\"출고수량\" tooltiptext=\"SENDQTY\"/><Cell row=\"1\" col=\"29\" text=\"분할수량\" tooltiptext=\"SPLITQTY\"/><Cell row=\"1\" col=\"30\" text=\"기말수량\" tooltiptext=\"ENDING_QTY\"/><Cell row=\"1\" col=\"31\" text=\"기초수량\" tooltiptext=\"BASEQTY\"/><Cell row=\"1\" col=\"32\" text=\"입고수량\" tooltiptext=\"INCOMEQTY\"/></Band><Band id=\"body\"><Cell text=\"bind:PRODUCTDEFID\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:PRODUCTDEFVERSION\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:LOTID\" displaytype=\"text\" textAlign=\"left\" cssclass=\"cell_linkTxt\"/><Cell col=\"4\" text=\"bind:PRODUCTIONTYPENAME\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:LOTWORKTYPENAME\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:USERSEQUENCE\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:PROCESSSEGMENTCLASSIDNAME\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:PROCESSSEGMENTIDNAME\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:STEPCLASS\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:BEGIN_WIP_QTY\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,##0\"/><Cell col=\"11\" text=\"bind:QUEUE_BEGIN_QTY\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,##0\"/><Cell col=\"12\" text=\"bind:QUEUE_FR_QTY\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,##0\"/><Cell col=\"13\" text=\"bind:QUEUE_TO_QTY\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,##0\"/><Cell col=\"14\" text=\"bind:QUEUE_SPLIT_QTY\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,##0\"/><Cell col=\"15\" text=\"bind:QUEUE_ENDING_QTY\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,##0\"/><Cell col=\"16\" text=\"bind:RUN_BEGIN_QTY\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,##0\"/><Cell col=\"17\" text=\"bind:RUN_FR_QTY\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,##0\"/><Cell col=\"18\" text=\"bind:RUN_TO_QTY\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,##0\"/><Cell col=\"19\" text=\"bind:RUN_SPLIT_QTY\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,##0\"/><Cell col=\"20\" text=\"bind:RUN_ENDING_QTY\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,##0\"/><Cell col=\"21\" text=\"bind:TOMOVE_BEGIN_QTY\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,##0\"/><Cell col=\"22\" text=\"bind:TOMOVE_FR_QTY\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,##0\"/><Cell col=\"23\" text=\"bind:TOMOVE_TO_QTY\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,##0\"/><Cell col=\"24\" text=\"bind:TOMOVE_SPLIT_QTY\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,##0\"/><Cell col=\"25\" text=\"bind:TOMOVE_ENDING_QTY\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,##0\"/><Cell col=\"26\" text=\"bind:REJECT_BEGIN_QTY\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,##0\"/><Cell col=\"27\" text=\"bind:REJECT_FR_QTY\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,##0\"/><Cell col=\"28\" text=\"bind:REJECT_TO_QTY\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,##0\"/><Cell col=\"29\" text=\"bind:REJECT_SPLIT_QTY\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,##0\"/><Cell col=\"30\" text=\"bind:REJECT_ENDING_QTY\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,##0\"/><Cell col=\"31\" text=\"bind:SCRAP_BEGIN_QTY\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,##0\"/><Cell col=\"32\" text=\"bind:SCRAP_FR_QTY\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,##0\"/><Cell col=\"33\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,##0\" text=\"bind:ENDING_WIP_QTY\"/><Cell col=\"34\" text=\"bind:OWNTYPENAME\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"35\" text=\"bind:ISSTART\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"36\" text=\"bind:ISEND\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"37\" text=\"bind:SPLIT_LOT_YN \" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"38\" text=\"bind:RUNNING_CHANGE_YN\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"39\" text=\"bind:PROD_DATE\" displaytype=\"date\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd hh:mm:ss\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","5","0","108","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text(" 재공수불부 조회");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("InquiryOfPaymentReceived");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_wipSubul","sta_subTitle:17","0",null,"34","762",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_pcmLotList",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","22",null,null,null,null,null,this);
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
            obj.set_text("Enterprise 정의");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MENU_PG-SD-0121");
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
            obj = new Layout("default","",1258,747,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_monthCalendar.xfdl");
        };
        
        // User Script
        this.addIncludeScript("PCM10100M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM10100M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PCM10100M.xfdl", function() {

        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 제공수불부 조회
         * 파일명 		: PCM10100M.xfdl
         * 작성자 		: 방성혁
         * 작성일 		: 2021.06.08
         *
         * 설  명		:공정관리 - 제공관리 - 제공수불부 조회
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.06.08	방성혁   	최초작성
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
            this.ds_search.clearData();
        	this.ds_wipSubul.clearData();
        	this.ds_wipSubul.clearData();

        	var sRow = this.ds_search.addRow();

        	this.ds_search.setColumn(sRow, "PLANTID"           , this.gf_getSiteType());
        	this.ds_search.setColumn(sRow, "PERIOD_NAME"       , this.tab_search.Tab1.form.div_periodName.form.msk_month.value.substring(0,4)+"-"+this.tab_search.Tab1.form.div_periodName.form.msk_month.value.substring(4,6));
        	this.ds_search.setColumn(sRow, "PRODUCTDEFID"      , this.tab_search.Tab1.form.edt_productDefId.value);
        	this.ds_search.setColumn(sRow, "PRODUCTDEFVERSION" , this.tab_search.Tab1.form.cmb_productDefVersion.value);
        	this.ds_search.setColumn(sRow, "PRODUCTDEFNAME"    , this.tab_search.Tab1.form.edt_productDefNm.value);
        	this.ds_search.setColumn(sRow, "LOTID"             , this.tab_search.Tab1.form.edt_lotId.value);
        	this.ds_search.setColumn(sRow, "PRODUCTIONTYPE"    , this.tab_search.Tab1.form.cmb_productionType.value);
        	this.ds_search.setColumn(sRow, "LOTWORKTYPE"       , this.tab_search.Tab1.form.cmb_lotWorkType.value);
        	this.ds_search.setColumn(sRow, "AREAID"            , this.tab_search.Tab1.form.edt_areaId.value);
        	this.ds_search.setColumn(sRow, "ISEND"             , this.tab_search.Tab1.form.cmb_state.value);
        	this.ds_search.setColumn(sRow, "REQUIREMENT"       , this.tab_search.Tab1.form.cmb_requirement.value);


        	var sSvcID = "SUBUL_LIST";
        	var sController = "/pcm10100/selectInfPcmWipSubulList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_wipSubul=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        /*

         * 기능 : 저장
         */
        this.fn_save = function(obj,e)
        {
        	if (!this.gfn_dsIsUpdated(this.ds_pcmLotAcceptCancel) )
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");
        		return;
        	}


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
        		this.fn_LotAcceptCanCelList();
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

        	switch(sPopupId) {
        		   case "SEARCH_AREANAME" :
        				var arrAreaId  = [];
        				var arrAreaNm  = [];
        				for(var i=0; i<rtn.length; i++){
        					var colArray = rtn[i];
        					 arrAreaId.push(colArray[0]);
        					 arrAreaNm.push(colArray[1]);
        				}
        				this.tab_search.Tab1.form.edt_areaId.set_value(arrAreaId.join(","));
        				this.tab_search.Tab1.form.edt_areaName.set_value(arrAreaNm.join(","));

        				break;
        		   case "SEARCH_PRODUCT" :
        				if(rtn.length == 1) {
        					var colArray = rtn[0];

        					this.tab_search.Tab1.form.edt_productDefId.set_value(colArray[0]);
        					this.tab_search.Tab1.form.edt_productDefNm.set_value(colArray[2]);

        				} else {
        				  var arrProductDefId  = [];

        				  for(var i=0; i<rtn.length; i++){
        					 var colArray = rtn[i];
        						 arrProductDefId.push(colArray[0]);
        				  }

        				   this.tab_search.Tab1.form.edt_productDefId.set_value(arrProductDefId.join(","));
        			   }

        			   this.fn_productVersionSearch();

        				if (rtn.length == 1)
        				{
        					this.tab_search.Tab1.form.cmb_productDefVersion.set_value(colArray[1]);
        				}
        				else {
        				   this.tab_search.Tab1.form.cmb_productDefVersion.set_index(0);
        				}

        				break;
        			case "SEARCH_LOTID" :
        				this.tab_search.Tab1.form.edt_lotId.set_value(rtn.join(","));
        				break;
        	}

        };

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        this.fn_formInit = function()
        {
        // 	this.tab_search.Tab1.form.div_periodName.form.fn_initMonthCal(this, this.gfn_getYearMonth(), "fn_monthCallback");
        //
        // 	this.tab_search.Tab1.form.cmb_plantId.set_value(this.gf_getSiteType());
        //
        // 	this.tab_search.Tab1.form.btn_areaName.addEventHandler("onclick", this.btn_Clear, this);
        //
        	 this.ds_search.clearData();
        	 this.ds_popSearch.clearData();
        	 this.ds_wipSubul.clearData();
        	 this.ds_productVersionSearch.clearData();
             this.ds_popSearch.clearData();

        	 this.tab_search.Tab1.form.cmb_plantId.set_value(this.gf_getSiteType());
        	 this.tab_search.Tab1.form.div_periodName.form.fn_initMonthCal(this, this.gfn_getYearMonth(), "fn_monthCallback");
        	 this.tab_search.Tab1.form.btn_areaName.addEventHandler("onclick", this.btn_Clear, this);
        	 this.tab_search.Tab1.form.cmb_requirement.set_index(0);

        	 this.AddAll(this.ds_prodVersion,"PRODUCTDEFVERSIONCODE","PRODUCTDEFVERSIONNAME");
             this.AddAll(this.ds_lineNo,"CODEID","COCENM");

        };
         this.btn_Clear = function(obj, e)
        {
        	this.tab_search.Tab1.form.edt_areaId.set_value("");
        };
        this.fn_productVersionSearch = function()
        {
        	this.ds_productVersionSearch.clearData();
        	this.ds_prodVersion.clearData();

        	var aRow = this.ds_productVersionSearch.addRow();
        	this.ds_productVersionSearch.setColumn(aRow, "ENTERPRISEID", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_enterpriseId"));
        	this.ds_productVersionSearch.setColumn(aRow, "PLANTID", this.tab_search.Tab1.form.cmb_plantId.value);
        	this.ds_productVersionSearch.setColumn(aRow, "PRODUCTDEFID", this.tab_search.Tab1.form.edt_productDefId.value);
        	this.ds_productVersionSearch.setColumn(aRow, "LANGUAGETYPE", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType"));

        	this.pfn_CostomQuerySync(this.ds_productVersionSearch, this.ds_prodVersion, "selectProductVersionMulty");

        	this.AddAll(this.ds_prodVersion,"PRODUCTDEFVERSIONCODE","PRODUCTDEFVERSIONNAME");

        };
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.tab_search_Tab1_btn_productDefId_onclick = function(obj,e)
        {
            this.ds_popSearch.clearData();
        	var aRow = this.ds_popSearch.addRow();
        	this.ds_popSearch.setColumn(aRow, "ENTERPRISEID", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_enterpriseId"));
        	this.ds_popSearch.setColumn(aRow, "PLANTID", this.tab_search.Tab1.form.cmb_plantId.value);
        	this.ds_popSearch.setColumn(aRow, "PRODUCTDEFID", this.tab_search.Tab1.form.edt_productDefId.value);
        	this.ds_popSearch.setColumn(aRow, "LANGUAGETYPE", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType"));
            var pProductDivsion = this.tab_search.Tab1.form.cmb_productDefVersion.value
        	this.openProduct_P00105("CA", this.ds_popSearch, pProductDivsion);
        };

        this.tab_search_Tab1_btn_areaName_onclick = function(obj,e)
        {
        	var txtSearch = ""
        	if (!this.nfn_isNull(this.tab_search.Tab1.form.edt_areaName.value))
        	{
        		txtSearch = "AREAIDNAME="+ this.tab_search.Tab1.form.edt_areaName.value;
        	}

        	var popupId = "SEARCH_AREANAME";
        	var oArg = {};
        	oArg.arg_type = "CA";
        	oArg.arg_popupCd = "P00267";
        	oArg.arg_popupNm = "작업장조회";
        	oArg.arg_rtnCols = "AREAID|AREANAME|";
        	oArg.arg_paramCols = "PLANTID|LANGUAGETYPE";
        	oArg.arg_paramValues = this.tab_search.Tab1.form.cmb_plantId.value + "|" + nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType");;
        	oArg.arg_searchStr = txtSearch;

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=830,height=700");
        };

        this.tab_search_Tab1_btn_lotId_onclick = function(obj,e)
        {
        	this.pfn_openPopup_LOTID("SEARCH_LOTID", this.tab_search.Tab1.form.edt_lotId.value,"CA");
        };



        this.div_work_grd_pcmLotList_oncellclick = function(obj,e)
        {
        	if (e.col == 3)
        	{
        		var mRow = this.ds_wipSubul.rowcount == 1 ? 0 : this.ds_wipSubul.rowposition;
        		var sUrl = "pcm::PCM03100M.xfdl";
        		var objArgs = {
        			             menuName : "SUBUL",
        			             objList : ["LOTID", this.ds_wipSubul.getColumn(mRow, "LOTID")]
        	                  };

        	   var bReload = true;
        	   this.gfn_goPage(sUrl, objArgs, bReload);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tab1.form.btn_productDefId.addEventHandler("onclick",this.tab_search_Tab1_btn_productDefId_onclick,this);
            this.tab_search.Tab1.form.btn_lotId.addEventHandler("onclick",this.tab_search_Tab1_btn_lotId_onclick,this);
            this.tab_search.Tab1.form.btn_areaName.addEventHandler("onclick",this.tab_search_Tab1_btn_areaName_onclick,this);
            this.div_work.form.grd_pcmLotList.addEventHandler("oncellclick",this.div_work_grd_pcmLotList_oncellclick,this);
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("PCM10100M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
