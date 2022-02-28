(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM05300M");
            this.set_titletext("이상발생 현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_abnormalOccurenceList", this);
            obj._setContents("<ColumnInfo><Column id=\"ABNORMALTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTPROCESS\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SITE\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PCS\" type=\"STRING\" size=\"256\"/><Column id=\"PNL\" type=\"STRING\" size=\"256\"/><Column id=\"OCCURDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODECLASS\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEUSER\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"STOPUSERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"STOPPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"STOPSITE\" type=\"STRING\" size=\"256\"/><Column id=\"STOPAREA\" type=\"STRING\" size=\"256\"/><Column id=\"STOPDATE\" type=\"STRING\" size=\"256\"/><Column id=\"STOPRELEASEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"STAYINGTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTINPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CUM_LEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTPRODUCTTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"OCCURAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"STOPAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"OCCURTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popSearch", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_productVersionSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RODUCTDIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grdMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"GRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC\" type=\"STRING\" size=\"256\"/><Column id=\"DICTIONARYID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"GRD_NM\">grd_abnormalOccurenceList</Col><Col id=\"MENU_NM\">LOT 이력조회</Col><Col id=\"FUNC\">mfn_gotoLot</Col><Col id=\"DICTIONARYID\">MENU_PG-SG-0340</Col></Row><Row><Col id=\"MENU_NM\">품목 상세 현황</Col><Col id=\"FUNC\">mfn_gotoProduct</Col><Col id=\"GRD_NM\">grd_abnormalOccurenceList</Col><Col id=\"DICTIONARYID\">MENU_PG-SG-0625</Col></Row></Rows>");
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

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("18");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("label00","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("19");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_plantId","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,SiteType,,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("label01","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("20");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("05CA3CAD5FFF4A36916B10CF981DD22D");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Calendar("cal_periodFr","108","35",null,"20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_periodType","10","60","94","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("14");
            obj.set_cssclass("cmb_SA_label");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("금주");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Calendar("cal_periodTo","108","60",null,"20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("label02","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("21");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("F112527EF89E45D8BA876725E97E3B30");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_productDefId","108","85",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("3");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_productDefId",null,"85","22","20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_productDefVersion","108","110","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_prodVersion");
            obj.set_codecolumn("PRODUCTDEFVERSIONCODE");
            obj.set_datacolumn("PRODUCTDEFVERSIONNAME");
            obj.set_text("전체조회");
            obj.set_value("");
            obj.set_index("0");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("label03","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("22");
            obj.set_text("Rev.");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("label04","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("23");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFNAME");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("label05","0","185","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("24");
            obj.set_text("발생작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("OCCURAREA");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("label06","0","210","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("25");
            obj.set_text("중지작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("STOPAREA");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("label07","0","235","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("26");
            obj.set_text("발생구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("364BBD73048140469F572C1F6829076B");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("label08","0","260","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("27");
            obj.set_text("처리구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("908F20DA8613434B902F9E6A0A025334");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("label09","0","285","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("28");
            obj.set_text("현상태");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("841D44AC56AA4B359312F61756E7041E");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_occurareaNm",null,"185","22","20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_productDefNm","108","135",null,"20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("5");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_abnormalType","108","235","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("9");
            obj.set_codecolumn("C,LotAbnormalOccurrenceType,All,Y,Y");
            obj.set_innerdataset("");
            obj.set_text("전체조회");
            obj.set_value("");
            obj.set_index("0");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_lotProcess","108","260","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("10");
            obj.set_codecolumn("C,LotProcessType,All,Y,Y");
            obj.set_innerdataset("");
            obj.set_text("양산");
            obj.set_value("");
            obj.set_index("0");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_stopareaNm",null,"210","22","20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","325","102","36",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","325","146","36",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            obj.set_hotkey("F2");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("29");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"305","45","20","91",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("30");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00_00","161","325","10","27",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("31");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_state","108","285","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("11");
            obj.set_codecolumn("C,LotCurrentState,All,Y,Y");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_occurareaId","108","185",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("32");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_occurareaNm","108","185",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("7");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_stopareaId","108","210",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("33");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_stopareaNm","108","210",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("8");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("label05_00","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("34");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LOTID");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_lotId",null,"160","22","20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("35");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_lotId","108","160",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("6");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","290","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","98","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("이상발생 조회");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_abnormalOccurenceList","0","34",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_abnormalOccurenceList");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"230\"/><Column size=\"180\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"180\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"220\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"250\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" colspan=\"6\" text=\"이상발생\" cssclass=\"cell_headMaster\" tooltiptext=\"MENU_PG-QC-0291\"/><Cell col=\"7\" colspan=\"5\" text=\"발생공정\" cssclass=\"cell_headMaster\" tooltiptext=\"OCCURPROCESSSEGMENT\"/><Cell col=\"12\" colspan=\"2\" text=\"수량\" cssclass=\"cell_headMaster\" tooltiptext=\"QTY\"/><Cell col=\"14\" colspan=\"5\" text=\"이상발생 내역\" cssclass=\"cell_headMaster\" tooltiptext=\"ABNORMALHIST\"/><Cell col=\"19\" colspan=\"7\" text=\"중지 이력\" cssclass=\"cell_headMaster\" tooltiptext=\"STOPHIST\"/><Cell col=\"26\" colspan=\"3\" text=\"Lot 정보\" cssclass=\"cell_headMaster\" tooltiptext=\"LOTINFO\"/><Cell row=\"1\" col=\"1\" text=\"이상발생 구분\"/><Cell row=\"1\" col=\"2\" text=\"LOT 처리\"/><Cell row=\"1\" col=\"3\" text=\"상태\"/><Cell row=\"1\" col=\"4\" text=\"품목코드\"/><Cell row=\"1\" col=\"5\" text=\"품목명\"/><Cell row=\"1\" col=\"6\" text=\"Lot No.\"/><Cell row=\"1\" col=\"7\" text=\"작업구분\"/><Cell row=\"1\" col=\"8\" text=\"공정수순\"/><Cell row=\"1\" col=\"9\" text=\"공정명\"/><Cell row=\"1\" col=\"10\" text=\"Site\"/><Cell row=\"1\" col=\"11\" text=\"작업장\"/><Cell row=\"1\" col=\"12\" text=\"PCS\"/><Cell row=\"1\" col=\"13\" text=\"PNL\"/><Cell row=\"1\" col=\"14\" text=\"발생일시\"/><Cell row=\"1\" col=\"15\" text=\"사유코드 그룹\"/><Cell row=\"1\" col=\"16\" text=\"사유코드\"/><Cell row=\"1\" col=\"17\" text=\"등록자\"/><Cell row=\"1\" col=\"18\" text=\"비고\"/><Cell row=\"1\" col=\"19\" text=\"공정수순\"/><Cell row=\"1\" col=\"20\" text=\"공정명\"/><Cell row=\"1\" col=\"21\" text=\"Site\"/><Cell row=\"1\" col=\"22\" text=\"중지작업장\"/><Cell row=\"1\" col=\"23\" text=\"중지일시\"/><Cell row=\"1\" col=\"24\" text=\"해제일시\"/><Cell row=\"1\" col=\"25\" text=\"정체시간\"/><Cell row=\"1\" col=\"26\" text=\"LOT 투입일\"/><Cell row=\"1\" col=\"27\" text=\"누적 L/T\"/><Cell row=\"1\" col=\"28\" text=\"양산구분\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:ABNORMALTYPE\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:LOTPROCESS\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:STATUS\" textAlign=\"center\" cssclass=\"expr:STATE == &apos;Stop&apos; ?  &apos;cell_bg_red&apos; : STATE == &apos;Complete&apos; ? &apos;cell_bg_green&apos;: &apos;&apos;\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFID\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:LOTID\"/><Cell col=\"7\" text=\"bind:JOBTYPE\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:USERSEQUENCE\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:SITE\"/><Cell col=\"11\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:PCS\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"13\" text=\"bind:PNL\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"14\" text=\"bind:OCCURDATE\" textAlign=\"center\"/><Cell col=\"15\" text=\"bind:REASONCODECLASS\" textAlign=\"center\"/><Cell col=\"16\" text=\"bind:REASONCODE\" textAlign=\"center\"/><Cell col=\"17\" text=\"bind:CREATEUSER\" textAlign=\"center\"/><Cell col=\"18\" text=\"bind:REMARK\" textAlign=\"left\"/><Cell col=\"19\" text=\"bind:STOPUSERSEQUENCE\"/><Cell col=\"20\" text=\"bind:STOPPROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"21\" text=\"bind:STOPSITE\"/><Cell col=\"22\" text=\"bind:STOPAREA\" textAlign=\"center\"/><Cell col=\"23\" text=\"bind:STOPDATE\" textAlign=\"center\"/><Cell col=\"24\" text=\"bind:STOPRELEASEDATE\" textAlign=\"center\"/><Cell col=\"25\" text=\"bind:STAYINGTIME\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0.##\"/><Cell col=\"26\" text=\"bind:LOTINPUTDATE\"/><Cell col=\"27\" text=\"bind:CUM_LEADTIME\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0.##\"/><Cell col=\"28\" text=\"bind:LOTPRODUCTTYPE\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btnExcelUp",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
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

            obj = new Static("sta_title","30","16","112","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
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
        this.addIncludeScript("PCM05300M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM05300M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PCM05300M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		:  이상발생현황 조회
         * 파일명 		: PCM05300M.xfdl
         * 작성자 		: 방성혁
         * 작성일 		: 2021.05.10
         *
         * 설  명		:
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.05.10	방성혁   	최초작성
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
        this.fv_currDate;

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {

        	this.nfn_formInit(obj);
        	this.fn_formInit();
        	this.fn_initParam();

        };
        this.fn_initParam = function()
        {
        	var sArgName = this.gfn_getFrameAguments("menuName");
        	if(sArgName == "QAM02400M") {

        		var data = JSON.parse(this.gfn_getFrameAguments("objList"));
        		this.tab_search.Tab1.form.edt_productDefId.set_value(data.PRODUCTDEFID);
        		this.ds_prodVersion.clearData();
        		this.ds_prodVersion.addRow();
        		this.ds_prodVersion.setColumn(0, "PRODUCTDEFVERSIONCODE", data.PRODUCTDEFVERSION);
        		this.ds_prodVersion.setColumn(0, "PRODUCTDEFVERSIONNAME", data.PRODUCTDEFVERSION);
        		this.tab_search.Tab1.form.cmb_productDefVersion.set_value(data.PRODUCTDEFVERSION);
        		this.tab_search.Tab1.form.edt_productDefNm.set_value(data.PRODUCTDEFNAME);

        		this.fn_search();
        	}

        }
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
        	 this.ds_search.clearData();
        	this.ds_abnormalOccurenceList.clearData();

        	var sRow = this.ds_search.addRow();
        	this.ds_search.setColumn(sRow, "ENTERPRISEID", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_enterpriseId"));
        	this.ds_search.setColumn(sRow, "LANGUAGETYPE", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType"));
        	this.ds_search.setColumn(sRow, "PLANTID", this.tab_search.Tab1.form.cmb_plantId.value);
        	this.ds_search.setColumn(sRow, "PERIODFR", this.tab_search.Tab1.form.cal_periodFr.value);
        	this.ds_search.setColumn(sRow, "PERIODTO", this.tab_search.Tab1.form.cal_periodTo.value);
        	this.ds_search.setColumn(sRow, "PRODUCTDEFID", this.tab_search.Tab1.form.edt_productDefId.value);
        	this.ds_search.setColumn(sRow, "PRODUCTDEFVERSION", this.tab_search.Tab1.form.cmb_productDefVersion.value);
        	this.ds_search.setColumn(sRow, "PRODUCTNAME", this.tab_search.Tab1.form.edt_productDefNm.value);
        	this.ds_search.setColumn(sRow, "OCCURAREAID", this.tab_search.Tab1.form.edt_occurareaId.value);
        	this.ds_search.setColumn(sRow, "STOPAREAID", this.tab_search.Tab1.form.edt_stopareaId.value);
        	this.ds_search.setColumn(sRow, "OCCURTYPE", this.tab_search.Tab1.form.cmb_abnormalType.value);
        	this.ds_search.setColumn(sRow, "PROCESSTYPE", this.tab_search.Tab1.form.cmb_lotProcess.value);
        	this.ds_search.setColumn(sRow, "STATE", this.tab_search.Tab1.form.cmb_state.value);
        	this.ds_search.setColumn(sRow, "LOTID", this.tab_search.Tab1.form.edt_lotId.value);

        	var sSvcID = "PRODUCTLIST";
        	var sController = "/pcm05300/selectAbnormalOccurenceList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_abnormalOccurenceList=output";
        	var sArgs = "";
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
        this.btn_Clear = function(obj, e)
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
        	case "PRODUCTLIST":
        	      if (this.ds_productList.getRowCount() == 0)
        	      {
        				this.gfn_Message("NoSelectData", null, "error", "ok");
        				return false;
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
        	if(this.nfn_isNull(rtn)) return;
            switch(sPopupId)
        	{

        		case "SEARCH_OCCURAREANM" :
        		    var arrAreaId  = [];
        			var arrAreaNm  = [];
        			for(var i=0; i<rtn.length; i++){
        				var colArray = rtn[i];
        				 arrAreaId.push(colArray[0]);
        				 arrAreaNm.push(colArray[1]);
        			}
        		    this.tab_search.Tab1.form.edt_occurareaId.set_value(arrAreaId.join(","));
        			this.tab_search.Tab1.form.edt_occurareaNm.set_value(arrAreaNm.join(","));

        			break;
        		case "SEARCH_STOPAREANM" :
        		    var arrAreaId  = [];
        			var arrAreaNm  = [];
        			for(var i=0; i<rtn.length; i++){
        				var colArray = rtn[i];
        				 arrAreaId.push(colArray[0]);
        				 arrAreaNm.push(colArray[1]);
        			}
        		    this.tab_search.Tab1.form.edt_stopareaId.set_value(arrAreaId.join(","));
        			this.tab_search.Tab1.form.edt_stopareaNm.set_value(arrAreaNm.join(","));

        			break;
        		case "SEARCH_PRODUCT" :
        		    // PRODUCTDEFID|PRODUCTDEFVERSION|PRODUCTDEFNAME";
        			if(rtn.length == 1) {
        				var colArray = rtn[0];

        				this.tab_search.Tab1.form.edt_productDefId.set_value(colArray[0]);
        				this.tab_search.Tab1.form.edt_productDefNm.set_value(colArray[2]);

        			} else {
        			  var arrProductDefId  = [];
        			//  var arrProductDefNM  = [];

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
        		default :
        			break;
        	}

        };
        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        this.fn_setDate = function (periodType)
        {

        	this.tab_search.Tab1.form.cal_periodFr.set_value(this.ds_periodType.getColumn(0,periodType+"_S"));
         	this.tab_search.Tab1.form.cal_periodTo.set_value(this.ds_periodType.getColumn(0,periodType+"_E"));

        };

        this.fn_formInit = function ()
         {
         	this.basfn_getPeriodData("ds_periodType");
        	this.tab_search.Tab1.form.cmb_periodType.set_value("THISWEEK"); // 금월
        	this.fn_setDate("THISWEEK");

        	this.tab_search.Tab1.form.cmb_plantId.set_value(this.gf_getSiteType());

        	this.tab_search.Tab1.form.btn_edt_occurareaNm.addEventHandler("onclick", this.btn_Clear, this);
        	this.tab_search.Tab1.form.btn_edt_stopareaNm.addEventHandler("onclick", this.btn_Clear, this);
         };

         this.btn_Clear = function(obj, e)
        {
        	switch(obj.name) {
        	case "btn_occurareaNm":
        	      this.tab_search.Tab1.form.edt_occurareaId.set_value("");
        		  break;
        	case "btn_stopareaNm":
        		this.tab_search.Tab1.form.edt_stopareaId.set_value("");
        		break;
        	default:
        	}
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

        this.mfn_gotoLot = function ()
        {
        	var mRow = this.ds_abnormalOccurenceList.rowcount == 1 ? 0 : this.ds_abnormalOccurenceList.rowposition;

        	var sUrl = "pcm::PCM03100M.xfdl";
        	// arryList 타입전달 예)
        	var objArgs = {
        		menuName : "LotHistory",
        		objList : ["LOTID", this.ds_abnormalOccurenceList.getColumn(mRow, "LOTID")]
        	};

        	var bReload = true;
        	this.gfn_goPage(sUrl, objArgs, bReload);
        };

        this.mfn_gotoProduct = function ()
        {
        	var mRow = this.ds_abnormalOccurenceList.rowcount == 1 ? 0 : this.ds_abnormalOccurenceList.rowposition;

        	var sUrl = "pcm::PCM05100M.xfdl";
        	// arryList 타입전달 예)
        	var objArgs = {
        		menuName : "PCM05300",
        		objList : [  this.tab_search.Tab1.form.cmb_periodType.value
        		           , this.tab_search.Tab1.form.cal_periodFr.value
        				   , this.tab_search.Tab1.form.cal_periodTo.value
        				   , this.ds_abnormalOccurenceList.getColumn(mRow, "PRODUCTDEFID")
        				  ]
        	};

        	var bReload = true;
        	this.gfn_goPage(sUrl, objArgs, bReload);
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

        this.tab_search_Tab1_btn_occurareaNm_onclick = function(obj,e)
        {
        	var txtSearch = ""
        	if (!this.nfn_isNull(this.tab_search.Tab1.form.edt_occurareaNm.value))
        	{
        		txtSearch = "AREAIDNAME="+ this.tab_search.Tab1.form.edt_occurareaNm.value;
        	}

        	var popupId = "SEARCH_OCCURAREANM";
        	var oArg = {};
        	oArg.arg_type = "CA";
        	oArg.arg_popupCd = "P00267";
        	oArg.arg_popupNm = "발생작업장조회";
        	oArg.arg_rtnCols = "AREAID|AREANAME|";
        	oArg.arg_paramCols = "PLANTID|LANGUAGETYPE";
        	oArg.arg_paramValues = this.tab_search.Tab1.form.cmb_plantId.value + "|" + nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType");;
        	oArg.arg_searchStr = txtSearch;

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=830,height=700");
        };

        this.tab_search_Tab1_btn_stopareaNm_onclick = function(obj,e)
        {
        	var txtSearch = ""
        	if (!this.nfn_isNull(this.tab_search.Tab1.form.edt_stopareaNm.value))
        	{
        		txtSearch = "AREAIDNAME="+ this.tab_search.Tab1.form.edt_stopareaNm.value;
        	}

        	var popupId = "SEARCH_STOPAREANM";
        	var oArg = {};
        	oArg.arg_type = "CA";
        	oArg.arg_popupCd = "P00267";
        	oArg.arg_popupNm = "중지작업장조회";
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tab1.form.btn_productDefId.addEventHandler("onclick",this.tab_search_Tab1_btn_productDefId_onclick,this);
            this.tab_search.Tab1.form.btn_occurareaNm.addEventHandler("onclick",this.tab_search_Tab1_btn_occurareaNm_onclick,this);
            this.tab_search.Tab1.form.btn_stopareaNm.addEventHandler("onclick",this.tab_search_Tab1_btn_stopareaNm_onclick,this);
            this.tab_search.Tab1.form.btn_lotId.addEventHandler("onclick",this.tab_search_Tab1_btn_lotId_onclick,this);
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("PCM05300M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
