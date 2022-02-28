(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM02600M");
            this.set_titletext("불량별 현황");
            this.set_tooltiptext("DEFECTSTATUSBYDEFECT");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANT\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOCALEDIV\" type=\"STRING\" size=\"256\"/><Column id=\"P_PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_LINKPLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_INTERPLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"P_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTIONDIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOTSTANDARD\" type=\"STRING\" size=\"256\"/><Column id=\"P_INSPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_INSPECTIONPROCESS\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODSHAPETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_CUSTOMER\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOTNO\" type=\"STRING\" size=\"256\"/><Column id=\"P_ROOTLOT\" type=\"STRING\" size=\"256\"/><Column id=\"P_EXCEPTDEFECTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"P_JOINNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_processSegmentByYieldList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROCESSID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectStatusByDefectList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"JOINCODE\" type=\"STRING\" size=\"256\"/><Column id=\"JOINNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PCSDEFECTRATE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PCSDEFECTOCC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PCSINPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PCSDEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AREADEFECTRATE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AREADEFECTOCC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AREAINPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AREADEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PRICEDEFECTRATE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PRICEDEFECTOCC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PRICEINPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PRICEDEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("0");
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

            obj = new Button("btn_favorite","156","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16",null,"24","btn_favorite:0",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            obj.set_tooltiptext("MENU_PG-QC-0470");
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

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("sta_subTitle00","0","0","84","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("불량별 현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("DEFECTSTATUSBYDEFECT");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_defectStatusByDefectList","0","34",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_defectStatusByDefectList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"40\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"110\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"85\"/><Column size=\"80\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\" tooltiptext=\"No\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"checkboxcontrol\"/><Cell col=\"2\" rowspan=\"2\" text=\"불량명\" tooltiptext=\"DEFECTNAME\"/><Cell col=\"3\" colspan=\"3\" text=\"PCS 불량율\" cssclass=\"cell_headMaster\" tooltiptext=\"GROUPPCSDEFECTRATE\"/><Cell col=\"6\" colspan=\"3\" text=\"면적당(㎡) 불량율\" cssclass=\"cell_headMaster\" tooltiptext=\"GROUPAREADEFECTRATE\"/><Cell col=\"9\" colspan=\"3\" text=\"금액 불량율\" cssclass=\"cell_headMaster\" tooltiptext=\"GROUPPRICEDEFECTRATE\"/><Cell col=\"12\" colspan=\"3\" text=\"투입량\" cssclass=\"cell_headMaster\" tooltiptext=\"GROUPINPUTQTY\"/><Cell row=\"1\" col=\"3\" text=\"불량수\" tooltiptext=\"PCSINPUTQTY\"/><Cell row=\"1\" col=\"4\" text=\"불량율(%)\" tooltiptext=\"SPECOUTPERCENTAGE\"/><Cell row=\"1\" col=\"5\" text=\"불량점유(%)\" tooltiptext=\"DEFECTOCCUPANCY\"/><Cell row=\"1\" col=\"6\" text=\"불량M2\" tooltiptext=\"DEFECTM2\"/><Cell row=\"1\" col=\"7\" text=\"불량율(%)\" tooltiptext=\"SPECOUTPERCENTAGE\"/><Cell row=\"1\" col=\"8\" text=\"불량점유(%)\" tooltiptext=\"DEFECTOCCUPANCY\"/><Cell row=\"1\" col=\"9\" text=\"불량금액\" tooltiptext=\"DEFECTCOST\"/><Cell row=\"1\" col=\"10\" text=\"불량율(%)\" tooltiptext=\"SPECOUTPERCENTAGE\"/><Cell row=\"1\" col=\"11\" text=\"불량점유(%)\" tooltiptext=\"DEFECTOCCUPANCY\"/><Cell row=\"1\" col=\"12\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell row=\"1\" col=\"13\" text=\"M2수량\" tooltiptext=\"M2QTY\"/><Cell row=\"1\" col=\"14\" text=\"투입금액\" tooltiptext=\"INPUTCOST\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" text=\"bind:CHK\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:JOINNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PCSDEFECTQTY\" maskeditformat=\"#,##0\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:PCSDEFECTRATE\" displaytype=\"mask\" maskeditformat=\"##0.#0\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:PCSDEFECTOCC\" textAlign=\"right\" maskeditformat=\"##0.#0\" displaytype=\"mask\"/><Cell col=\"6\" text=\"bind:AREADEFECTQTY\" displaytype=\"mask\" maskeditformat=\"#,##0.#0\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:AREADEFECTRATE\" displaytype=\"mask\" maskeditformat=\"##0.#0\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:AREADEFECTOCC\" displaytype=\"mask\" maskeditformat=\"##0.#0\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:PRICEDEFECTQTY\" maskeditformat=\"#,##0\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:PRICEDEFECTRATE\" displaytype=\"mask\" maskeditformat=\"##0.#0\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:PRICEDEFECTOCC\" displaytype=\"mask\" maskeditformat=\"##0.#0\" textAlign=\"right\"/><Cell col=\"12\" text=\"bind:PCSINPUTQTY\" maskeditformat=\"#,##0\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"13\" text=\"bind:AREAINPUTQTY\" maskeditformat=\"#,##0.#0\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"14\" text=\"bind:PRICEINPUTQTY\" maskeditformat=\"#,##0\" displaytype=\"mask\" textAlign=\"right\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" text=\"합계\" tooltiptext=\"SUM\"/><Cell col=\"3\" text=\"expr:dataset.getSum(&quot;PCSDEFECTQTY&quot;)\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"4\" text=\"expr:nexacro.round((dataset.getSum(&quot;PCSDEFECTQTY&quot;)/dataset.getAvg(&quot;PCSINPUTQTY&quot;))*100,2)\" displaytype=\"mask\" maskeditformat=\"##0.#0\"/><Cell col=\"5\" displaytype=\"normal\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&quot;AREADEFECTQTY&quot;)\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"7\" text=\"expr:nexacro.round((dataset.getSum(&quot;AREADEFECTQTY&quot;)/dataset.getAvg(&quot;AREAINPUTQTY&quot;))*100,2)\" displaytype=\"mask\" maskeditformat=\"##0.#0\"/><Cell col=\"8\" displaytype=\"normal\"/><Cell col=\"9\" text=\"expr:dataset.getSum(&quot;PRICEDEFECTQTY&quot;)\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"10\" text=\"expr:nexacro.round((dataset.getSum(&quot;PRICEDEFECTQTY&quot;)/dataset.getAvg(&quot;PRICEINPUTQTY&quot;))*100,2)\" displaytype=\"mask\" maskeditformat=\"##0.#0\"/><Cell col=\"11\" displaytype=\"normal\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_defectStatusByDefectList",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_productStatus",null,"6","97","24","btn_xlDn_grd_defectStatusByDefectList:0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdLink");
            obj.set_text("품목별 현황");
            obj.set_tooltiptext("STATUSBYITEM");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_defectStatusByDefectList","242","0",null,"34","562",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tab1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Combo("cbo_localeDiv","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,LOCALEDIVISION,ALL,Y,Y");
            obj.set_text("유효");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_localeDiv","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("20");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("LOCALE");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_plantId","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("21");
            obj.set_text("출하SITE");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("SHIPMENTSITE");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_period","10","135","94","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("3");
            obj.set_innerdataset("gds_period");
            obj.set_codecolumn("code");
            obj.set_datacolumn("desc");
            obj.set_text("금일");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta__linkPlantId","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("22");
            obj.set_text("연계SITE");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("BD1A7499ABDC40EBAFC6608B3A41E9BD");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_interPlantId","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("23");
            obj.set_text("구간설정");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("A3DAC4640085428E8EE8BCCF1617DDB4");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_period","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("24");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("SEARCHPERIOD");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_productionDivision","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("25");
            obj.set_text("양산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LOTPRODUCTTYPE");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_lotStandard","0","185","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("26");
            obj.set_text("LOT 기준");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("FE2869CDA50145B287FF1E06A7D3C099");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_inspType","0","210","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("27");
            obj.set_text("검사기준");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("EB38046A433441468685F94A94AA0B59");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_inspectionProcess","0","235","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("28");
            obj.set_text("검사공정지정");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("551745D7DB044BE6AF3387741463BCA0");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_prodShapeType","0","260","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("29");
            obj.set_text("TYPE");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("701B101FEBC14B9A87C8DB77D7F23880");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_customer","0","285","127","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("30");
            obj.set_text("고객");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CUSTOMER");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_productionId","0","310","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("31");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMCODENAME");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_plantId","108","35","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("1");
            obj.set_usesoftkeyboard("true");
            obj.set_codecolumn("C,SiteType,ALL,Y,N");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_production_nm","108","335","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_interPlantId","108","85","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("2");
            obj.set_codecolumn("C,SiteType,ALL,Y,N");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_productionDivision","108","160","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("4");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_lotStandard","108","185","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("5");
            obj.set_codecolumn("C,YieldLOTStandard,,Y,Y");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_inspType","108","210","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("6");
            obj.set_codecolumn("C,YieldInspectionType,,Y,Y");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_inspectionProcess","108","235","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_processSegmentByYieldList");
            obj.set_codecolumn("PROCESSID");
            obj.set_datacolumn("PROCESSNAME");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_customer","108","285",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("9");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_customer",null,"285","22","20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_production","108","310",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("11");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_productionId",null,"310","22","20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","450","146","36",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","450","102","36",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_exceptDefectClass","0","410","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("32");
            obj.set_text("불량제외항목");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("EXCLUSIONOFDEFECT");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_lotId","0","385","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("33");
            obj.set_text("LOT NO");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LOTNO");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_rootLotId","0","360","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("34");
            obj.set_text("ROOT LOT");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ROOT LOT");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_productionName","0","335","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("35");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTNAME");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_rootLotId","108","360",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("14");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_lotId","108","385",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("16");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_rootLotId",null,"360","22","20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_lotId",null,"385","22","20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_prodShapeType","108","260","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("8");
            obj.set_codecolumn("C,ProductType,ALL,Y,Y");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"430","45","20","94",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("36");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","455","10","27",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("37");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Div("div_linkPlantId","108","60","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("38");
            obj.set_url("common::com_multiCombo.xfdl");
            obj.set_enable("false");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Div("div_exceptDefectClass","108","410","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("39");
            obj.set_url("common::com_multiCombo.xfdl");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_customer_id","195","430",null,"20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("40");
            obj.set_visible("false");
            obj.set_tooltiptext("조회조건고객ID");
            obj.set_background("thistle");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Div("div_dateFrom","109","110",null,"20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("41");
            obj.set_url("common::com_calendar.xfdl");
            obj.set_text("");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Div("div_dateTo","109","135",null,"20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("42");
            obj.set_url("common::com_calendar.xfdl");
            obj.set_text("");
            this.tab_search.Tab1.addChild(obj.name, obj);

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
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_multiCombo.xfdl");
            this._addPreloadList("fdl","common::com_calendar.xfdl");
        };
        
        // User Script
        this.addIncludeScript("QAM02600M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("QAM02600M.xfdl","lib::lib_qam.xjs");
        this.addIncludeScript("QAM02600M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("QAM02600M.xfdl", function() {
        /***************************************************************************************
         * 시스템명       : IFC MES시스템
         * 업무명         : 품질관리>>수율현황>>불량별 현황
         * 파일명         : QAM02600M.xfdl
         * 작성자         : yanghee.kim
         * 작성일         : 2021.06.26
         *
         * 설  명         :
         *---------------------------------------------------------------------------------------
         * 변경일        변경자      변경내역
         *---------------------------------------------------------------------------------------
         * 2021.06.26   yanghee.kim   최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;    //기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_qam.xjs"); /*include "lib::lib_qam.xjs"*/;    //품질관리 공통 라이브러리 include
        this.executeIncludeScript("pcm::pcmCommon.xjs"); /*include "pcm::pcmCommon.xjs"*/;  //공정관리 라이브러리 include
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
            this.nfn_formInit(obj);

        	//global value setting
        	this.qamfn_setGlobalValue();

        	//조회기간 유형 조회
        	this.basfn_getPeriodData("ds_periodType");

        	//multi combo site 조회
        	this.fn_searchPlant();

        	//검사공사지정 조회
        	this.fn_searchprocessSegmentByYield();

        	//multi combo  불량제외항목 조회
        	this.fn_searchDefectException();

            //조회기간 popup div event add
        	this.tab_search.Tab1.form.div_dateFrom.form.pdiv_data.form.calStart.addEventHandler("onchanged", this.fn_preiodChang, this);
        	this.tab_search.Tab1.form.div_dateTo.form.pdiv_data.form.calStart.addEventHandler("onchanged", this.fn_preiodChang, this);

        	//최초 호출되는 초기화 함수
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
            this.ds_defectStatusByDefectList.clearData();
            this.fn_setSearchParam();

            var sSvcID        = "selectDefectStatusByDefectList";
            var sController   = "/qam02600/selectDefectStatusByDefectList.do";
            var sInDatasets   = "INPUT=ds_search";
            var sOutDatasets  = "ds_defectStatusByDefectList=output";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 조회조건 파라미터 셋팅
         */
        this.fn_setSearchParam = function ()
        {
        	var count = 0;
        	var strLinkPlantId = "";
        	for(var i=0; i<this.tab_search.Tab1.form.div_linkPlantId.form.ds_initData.rowcount; i++){
        		var chk = this.tab_search.Tab1.form.div_linkPlantId.form.ds_initData.getColumn(i,"CHK");
        		if(chk == 1)
        		{
        			var code = this.tab_search.Tab1.form.div_linkPlantId.form.ds_initData.getColumn(i,"CODE");
        			count = count+1;
        			if (count == 1) strLinkPlantId = code;
        			else strLinkPlantId = strLinkPlantId+","+code;
        		}
        	}

        	count = 0;
        	var strExceptDefectClass = "";
        	for(var i=0; i<this.tab_search.Tab1.form.div_exceptDefectClass.form.ds_initData.rowcount; i++){
        		var chk = this.tab_search.Tab1.form.div_exceptDefectClass.form.ds_initData.getColumn(i,"CHK");
        		if(chk == 1)
        		{
        			var code = this.tab_search.Tab1.form.div_exceptDefectClass.form.ds_initData.getColumn(i,"CODE");
        			count = count+1;
        			if (count == 1) strExceptDefectClass = code;
        			else strExceptDefectClass = strExceptDefectClass+","+code;
        		}
        	}

            this.ds_search.clearData();
        	var nRow = this.ds_search.addRow();
        	this.ds_search.setColumn(nRow, "ENTERPRISEID",         this.qam_enterpriseId);
        	this.ds_search.setColumn(nRow, "LANGUAGETYPE",         this.qam_lang);
            this.ds_search.setColumn(nRow, "PLANT",                this.qam_plantId);
            this.ds_search.setColumn(nRow, "P_LOCALEDIV",          this.tab_search.Tab1.form.cbo_localeDiv.value);       		//구분
            this.ds_search.setColumn(nRow, "P_PLANTID",            this.tab_search.Tab1.form.cbo_plantId.value);         		//출하
            this.ds_search.setColumn(nRow, "P_LINKPLANTID",        strLinkPlantId);										   	    //연계
            this.ds_search.setColumn(nRow, "P_INTERPLANTID",       this.tab_search.Tab1.form.cbo_interPlantId.value);			//구간설정
            this.ds_search.setColumn(nRow, "P_PERIODFR",           this.tab_search.Tab1.form.div_dateFrom.form.calStart.value); //조회기간 From
            this.ds_search.setColumn(nRow, "P_PERIODTO",           this.tab_search.Tab1.form.div_dateTo.form.calStart.value);   //조회기간 To
            this.ds_search.setColumn(nRow, "P_PRODUCTIONDIVISION", this.tab_search.Tab1.form.cbo_productionDivision.value);     //양산구분
            this.ds_search.setColumn(nRow, "P_LOTSTANDARD",        this.tab_search.Tab1.form.cbo_lotStandard.value); 		    //LOT 기준
            this.ds_search.setColumn(nRow, "P_INSPTYPE",           this.tab_search.Tab1.form.cbo_inspType.value);    		    //검사기준
            this.ds_search.setColumn(nRow, "P_INSPECTIONPROCESS",  this.tab_search.Tab1.form.cbo_inspectionProcess.value); 	    //검사공정지정
            this.ds_search.setColumn(nRow, "P_PRODSHAPETYPE",      this.tab_search.Tab1.form.cbo_prodShapeType.value); 		    //TYPE
            this.ds_search.setColumn(nRow, "P_CUSTOMER",           this.tab_search.Tab1.form.edt_customer.value);               //고객
            this.ds_search.setColumn(nRow, "P_PRODUCTDEFID",       this.tab_search.Tab1.form.edt_production.value);	            //품목
            this.ds_search.setColumn(nRow, "P_EXCEPTDEFECTCLASS",  strExceptDefectClass);                                       //불량제외항목
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
        	    if (trId == "selectDefectStatusByDefectList")
                {
        			if (this.ds_defectStatusByDefectList.rowcount  < 1)
        			{
        				this.gfn_Message("NoSelectData", null, "info", "ok");
        				return;
        			}
        		}
            }
        };

        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
         this.fn_openPop = function(svcId, popId)
        {
            // gfn_openPopup(arg_type, popupCd, popupNm, rtnCols, paramCols, paramValues, searchStr);
            //-----------------
            // arg_type    : A::사용자가 선택, B:: 한건존재시 자동 셋팅, C::사용자 멀티 선택
            // popupCd     : 공통팝업 관리 화면에서 생성되는 팝업코드
            // popupNm     : 변경할팝업화면명 , 변경하지 않을 경우 팝업화면 타이틀은 관리화면의 타이틀로 지정됨
            // rtnCols     : 구분자 : "|"   : 그리드에 출력될 컬럼 지정 (않을 경우 관리화면의 그리드로 출력됨)
            // paramCols   : 구분자 : "|" : where 구문에 들어갈 컬럼
            // paramValues : 구분자 : "|"  : where 구문에 들어갈 컬럼에 대한 값
            // searchStr   : 팝업 조회조건 콤보값 = 조회 값

            var popupId = svcId;
            var oArg = {};
            var opts;

            oArg.arg_type = "CA";
            oArg.arg_popupCd = popId;
            oArg.arg_popupNm = "";
            oArg.arg_paramCols = "";
            oArg.arg_paramValues = "";
            oArg.arg_searchStr = "";

            if(popupId == "SRCH_PRODUCTDEF280")    /*조회조건-품목*/
            {
        		opts = "width=540,height=480";
        		oArg.arg_paramCols   = "PLANTID";
                oArg.arg_paramValues = this.qam_plantId;
                oArg.arg_rtnCols     = "PRODUCTDEFNAME|PRODUCTDEFIDVERSION";
        		if (!this.nfn_isNull(this.tab_search.Tab1.form.edt_production.value))
        		{
        			oArg.arg_searchStr   = "PRODUCTDEFID=" + this.tab_search.Tab1.form.edt_production.value;
        		}
            }
        	else if(popupId == "SRCH_CUSTOMER284")    /*조회조건-고객*/
            {
        		opts = "width=400,height=480";
        		oArg.arg_paramCols   = "ENTERPRISEID|PLANTID";
                oArg.arg_paramValues = this.qam_enterpriseId +'|'+ this.qam_plantId;
                oArg.arg_rtnCols     = "CUSTOMERID|CUSTOMERNAME";
        		if (!this.nfn_isNull(this.tab_search.Tab1.form.edt_customer.value))
        		{
        			oArg.arg_searchStr   = "CUSTOMERNAME=" + this.tab_search.Tab1.form.edt_customer.value;
        		}
            }
            this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        };

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
            var rtn = this.fv_rtnValue;
            if(this.nfn_isNull(rtn)) return;

            if (sPopupId == "SRCH_PRODUCTDEF280")    /*조회조건-품목*/
            {
        		var productName = "";
        		var productIdVer= "";

        		for(var i=0; i<rtn.length; i++){
        			var colArray = rtn[i];
        			if (i > 0)
        			{
        				productName  += ",";
        				productIdVer += ",";
        			}
        			productName  += colArray[0];
        			productIdVer += colArray[1];
        		}

                this.tab_search.Tab1.form.edt_production.set_value(productIdVer);
        		this.tab_search.Tab1.form.edt_production_nm.set_value(productName);
            }
        	else if(sPopupId == "SRCH_CUSTOMER284")    /*조회조건-고객*/
            {
        		var customerId = "";
        		var customerName = "";

        		for(var i=0; i<rtn.length; i++){
        			var colArray = rtn[i];
        			if (i > 0)
        			{
        				customerId   += ",";
        				customerName += ",";
        			}
        			customerId   += colArray[0];
        			customerName += colArray[1];
        		}

        		this.tab_search.Tab1.form.edt_customer_id.set_value(customerId);
        		this.tab_search.Tab1.form.edt_customer.set_value(customerName);
            }
        };

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 기능 : 최초 호출되는 초기화 함수
         */
        this.fn_formInit = function ()
        {
        	this.fn_setSearchDate("thisweek");                                       //조회조건-조회기간 셋팅
        	this.tab_search.Tab1.form.cbo_period.set_value("thisweek");              //조회조건-조회기간(금주)
        	this.tab_search.Tab1.form.cbo_productionDivision.set_value("Production") //조회조건-양산구분(양산)
        	this.tab_search.Tab1.form.cbo_lotStandard.set_value("SPLITLOT");         //조회조건-LOT기준(Split LOT)
        	this.tab_search.Tab1.form.cbo_inspType.set_value("FINISH");              //조회조건-검사기준(최종검사)

        	//조회조건-검사공정지정 => 검사기준에 따라 검사공정지정 Filter 및 기본값 셋팅
        	this.ds_processSegmentByYieldList.filter("");
        	this.ds_processSegmentByYieldList.filter("INSPTYPE == 'Final' || INSPTYPE == 'FINISH'");
        	this.tab_search.Tab1.form.cbo_inspectionProcess.set_value("Final");
        };

        /*
         * 기능 : 조회조건 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        	this.fn_formInit();
        };

        /*
         * 이벤트 : 품목명 초기화
         */
        this.fn_editProductionClear = function()
        {
        	this.tab_search.Tab1.form.edt_production.set_value("");
        	this.tab_search.Tab1.form.edt_production_nm.set_value("");
        };

        /*
         * 기능 : 탭1 품목별 수율 그리드의 Head의 금액수율 Title에 접속 site별 기본통화 적용(금액수율+(KRW))
         */
        this.fn_setHeadGroupPriceYieldRateText = function ()
        {
        	var rtn = this.qamfn_setHeadGroupPriceYieldRateText(this.qam_plantId);
        	var bSucc = this.div_work.form.grd_defectStatusByDefectList.setCellProperty("head", 4, "text" , rtn.strColCap);
            var tooltiptext = this.div_work.form.grd_defectStatusByDefectList.setCellProperty("head", 4, "tooltiptext" , rtn.strTolltiptext);
        };

        /*
         * 이벤트 : 조회조건- 조회기간 직접 변경시
         */
        this.fn_preiodChang = function(obj,e)
        {
        	if (!this.nfn_isNull(this.tab_search.Tab1.form.cbo_period.value))
        	{
        		this.tab_search.Tab1.form.cbo_period.set_text("사용자정의");
        	}
        };

        /*
         * 기능 : 조회기간의 기간타입이 변경될 경우 날짜 셋팅
         */
        this.fn_setSearchDate = function (pChangValue)
        {
        	if (this.nfn_isNull(pChangValue)) return false;

        	var sDate = this.nfn_getCurrentSystemTime(0, 0, pChangValue);
        	var arrDate = sDate.split(",");
        	var sDateFrom = arrDate[1];
        	var sDateTo = arrDate[2];
        	var sTime = "0830";

        	this.tab_search.Tab1.form.div_dateFrom.form.calStart.set_value(sDateFrom+sTime);
        	this.tab_search.Tab1.form.div_dateTo.form.calStart.set_value(sDateTo+sTime);
        };

        /*
         * 기능 : 조회조건- 연계Site 조회
         */
        this.fn_searchPlant = function()
        {
            var sArgs         = "";
        	    sArgs        += this.gfn_setParam("LOOKUP_TYPE",  "SiteType"); //
        		sArgs        += this.gfn_setParam("ENABLE_FLAG",  "Y");
            this.qamfn_searchMultiCombo("ds_multiSite", this.tab_search.Tab1.form.div_linkPlantId, "selectLinkPlantIdList", sArgs);
        }

        /*
         * 기능 : 조회조건 - 불량제외항목 조회
         */
        this.fn_searchDefectException = function()
        {
            var sArgs         = "";
        	    sArgs        += this.gfn_setParam("LOOKUP_TYPE",  "DefectDetailClass"); //
        		sArgs        += this.gfn_setParam("ENABLE_FLAG",  "Y");
        		sArgs        += this.gfn_setParam("PARENTCODEID", "20"); //속성분류-관리
            this.qamfn_searchMultiCombo("ds_multiDefectException", this.tab_search.Tab1.form.div_exceptDefectClass, "selectDefectExceptionList", sArgs);
        }

        /*
         * 기능 : 조회조건 - 검사공정지정 조회
         */
        this.fn_searchprocessSegmentByYield = function()
        {
            this.ds_processSegmentByYieldList.clearData();
            var sSvcID        = "selectProcessSegmentByYieldList";
            var sController   = "/qampopup/selectProcessSegmentByYieldList.do";
            var sInDatasets   = "";
            var sOutDatasets  = "ds_processSegmentByYieldList=output";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false);
        }

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         * 이벤트 : 조회조건 아이콘 버튼 클릭시
         */
        this.fn_popup_click = function(obj,e)
        {
        	if (obj.name == "btn_productionId")
        	{
        		this.fn_openPop("SRCH_PRODUCTDEF280","P00280"); //품목
        	}
        	else if (obj.name == "btn_customer")
        	{
        		this.fn_openPop("SRCH_CUSTOMER284","P00284"); //고객
        	}
        };

        /*
         * 이벤트 : 조회조건 이름 삭제시 id 초기화
         */
        this.fn_popup_canchange = function(obj,e)
        {
        	if (obj.name == "edt_production")
        	{
        		if (this.nfn_isNull(e.postvalue))
        		{
        			this.fn_editProductionClear();
        		}
        	}
        	else if (obj.name == "edt_customer")
        	{
        		this.nfn_isNull(e.postvalue) == false ? "": this.tab_search.Tab1.form.edt_customer_id.set_value(""); //거래처
        	}
        };

        /*
         * 이벤트 : 조회조건- 조회기간 타입 변경시
         */
        this.tab_search_Tab1_cbo_period_canitemchange = function(obj,e)
        {
        	this.fn_setSearchDate(e.postvalue);
        };

        /*
         * 이벤트 : 품목별 수율현황을 클릭시 해당 row의 LOT정보에 대한 세부내역 정보
         */
        this.tab_search_Tab1_cbo_localeDiv_canitemchange = function(obj,e)
        {
        	if (e.postvalue  == "LOCAL")
        	{
        		this.tab_search.Tab1.form.div_linkPlantId.set_enable(false);
        	}
        	else
        	{
        		this.tab_search.Tab1.form.div_linkPlantId.set_enable(true);
        	}
        };

        /*
         * 이벤트 : 조회조건 검사기준에 따라 검사공정지정 Filter
         */
        this.tab_search_Tab1_cbo_inspType_canitemchange = function(obj,e)
        {
        	this.ds_processSegmentByYieldList.filter("");
        	this.ds_processSegmentByYieldList.filter("INSPTYPE == 'Final' || INSPTYPE == '" +e.postvalue+ "'");
        };


        this.div_work_btn_productStatus_onclick = function(obj,e)
        {
         	if (e.row < 0) return;
         	var popupId = "SEARCH_POPUP";
           	var oArg = {};

        	var count = 0;
        	var strJoinName = "";
        	for(var i=0; i<this.ds_defectStatusByDefectList.rowcount; i++){
        		var chk = this.ds_defectStatusByDefectList.getColumn(i,"CHK");
        		if(chk == 1)
        		{
        			var joinName = this.ds_defectStatusByDefectList.getColumn(i,"JOINNAME");
        			count = count+1;
        			if (count == 1) strJoinName = joinName;
        			else strJoinName = strJoinName+","+joinName;
        		}
        	}

        	if (count==0)
        	{
        		this.gfn_Message("SelectItem", this.nfn_getDictionaryname("DEFECTNAME",true), "error", "ok");		// {0}을(를) 선택하여 주십시오.
        		return;
        	}
            this.ds_search.setColumn(0, "P_JOINNAME", strJoinName);

            //조회조건 복사
            //this.qamfn_getArrayRow(this.ds_search);

        	this.gfn_openPopup(popupId,"qam::QAM02600P1.xfdl",oArg,"width=1119,height=486");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.btn_productStatus.addEventHandler("onclick",this.div_work_btn_productStatus_onclick,this);
            this.tab_search.Tab1.form.cbo_localeDiv.addEventHandler("canitemchange",this.tab_search_Tab1_cbo_localeDiv_canitemchange,this);
            this.tab_search.Tab1.form.cbo_period.addEventHandler("canitemchange",this.tab_search_Tab1_cbo_period_canitemchange,this);
            this.tab_search.Tab1.form.cbo_inspType.addEventHandler("canitemchange",this.tab_search_Tab1_cbo_inspType_canitemchange,this);
            this.tab_search.Tab1.form.btn_customer.addEventHandler("onclick",this.fn_popup_click,this);
            this.tab_search.Tab1.form.btn_productionId.addEventHandler("onclick",this.fn_popup_click,this);
            this.tab_search.Tab1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tab1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tab1.form.btn_rootLotId.addEventHandler("onclick",this.fn_popup_click,this);
            this.tab_search.Tab1.form.btn_lotId.addEventHandler("onclick",this.fn_popup_click,this);
            this.tab_search.Tab1.form.div_dateFrom.addEventHandler("onkeydown",this.fn_preiodChang,this);
            this.tab_search.Tab1.form.div_dateTo.addEventHandler("onkeydown",this.fn_preiodChang,this);
        };
        this.loadIncludeScript("QAM02600M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
