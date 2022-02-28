(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM00500M");
            this.set_titletext("LOT 투입");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_productList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"LINENO\" type=\"STRING\" size=\"256\"/><Column id=\"PLANQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"INPUTSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"JOINTQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"LOTINPUTPNLQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"CALDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDPANELQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"PANELQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"INPUTPNLQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"QTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTAREA\" type=\"STRING\" size=\"256\"/><Column id=\"DUEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"LEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"COMPLETETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"EXPECTEDCOMPLETEDATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_area", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"LINENO\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_completeDate", this);
            obj._setContents("<ColumnInfo><Column id=\"EXPCECTDATE\" type=\"DATE\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotListTemp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDPANELQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"PANELQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"INPUTPNLQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"QTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTAREA\" type=\"STRING\" size=\"256\"/><Column id=\"DUEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"LEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"COMPLETETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"EXPECTEDCOMPLETEDATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lineNo", this);
            obj._setContents("<ColumnInfo><Column id=\"CODEID\" type=\"STRING\" size=\"256\"/><Column id=\"COCENM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_productVersionSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RODUCTDIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("ds_lineNoSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_productListTemp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"LINENO\" type=\"STRING\" size=\"256\"/><Column id=\"PLANQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"INPUTSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"JOINTQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"LOTINPUTPNLQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"CALDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("label00","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTIONTYPE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_productionType","108","35","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label01","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("S/O번호");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTIONORDERID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label02","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTIONDEFINITION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productionOrderId","108","60",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","200","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","200","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip00",null,"70","15","97","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip01","0","80","15","97",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip03",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"180","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","200","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label03","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_text("제품구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDIVISION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_productionOrderId",null,"60","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_productDivision","108","160","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_codecolumn("C,ProductDivision2,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productDefId","108","110",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_productDefId",null,"110","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00_00","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_plantId","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,SiteType,,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label01_00","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_text("LINENO");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LINENO");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_LineNo","108","85","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_codecolumn("CODEID");
            obj.set_innerdataset("ds_lineNo");
            obj.set_datacolumn("COCENM");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label02_00","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_text("Rev");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFVERSION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_productDefVersion","108","135","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_codecolumn("PRODUCTDEFVERSIONCODE");
            obj.set_datacolumn("PRODUCTDEFVERSIONNAME");
            obj.set_innerdataset("ds_prodVersion");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01","0","47","290","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Div("div_detail","0","36.71%",null,"42","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_detail");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("label02","0","10","87","20",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("2");
            obj.set_text("납기일");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("NORMALLEADTIME");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Calendar("cal_dueDate","label02:10","10","100","20",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("false");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label03","cal_dueDate:10","10","93","20",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("3");
            obj.set_text("예상생산완료일");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("EXPECTPRODUCTDATE");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Calendar("cal_completeDate","label03:10","10","100","20",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Grid("grd_lotList","0","div_detail:34",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds_lotList");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"210\"/><Column size=\"80\"/><Column size=\"122\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"160\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"Lot No.\"/><Cell col=\"3\" text=\"단위\"/><Cell col=\"4\" text=\"최초생성수량(PNL)\"/><Cell col=\"5\" text=\"수량(PNL)\"/><Cell col=\"6\" text=\"투입수량(PNL)\"/><Cell col=\"7\" text=\"지원ID\"/><Cell col=\"8\" text=\"공정명\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:LOTID\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:UNIT\"/><Cell col=\"4\" text=\"bind:CREATEDPANELQTY\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:PANELQTY\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:INPUTPNLQTY\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:RESOURCEID\" textAlign=\"left\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_area\" combocodecol=\"RESOURCEID\" combodatacol=\"RESOURCENAME\"/><Cell col=\"8\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("title2_00","0","0","130","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("7");
            obj.set_text("LOT 투입");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("MENU_PG-SG-0040");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_productList","title2_00:10","0","140","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("8");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_productList","0","34",null,null,"0","div_detail:10",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_productList");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"118\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"250\"/><Column size=\"103\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO\" displaytype=\"normal\"/><Cell col=\"1\" text=\"S/O번호\"/><Cell col=\"2\" text=\"라인\"/><Cell col=\"3\" text=\"품목코드\"/><Cell col=\"4\" text=\"Rev\"/><Cell col=\"5\" text=\"품목명\"/><Cell col=\"6\" text=\"차수\"/><Cell col=\"7\" text=\"UOM\" tooltiptext=\"UOM\"/><Cell col=\"8\" text=\"기준소요량\" tooltiptext=\"STANDARDCOSTQTY\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"1\" text=\"bind:PRODUCTIONORDERID\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:LINENO\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:INPUTSEQUENCE\"/><Cell col=\"7\" text=\"bind:UNIT\"/><Cell col=\"8\" text=\"bind:JOINTQTY\" displaytype=\"mask\" maskeditformat=\"#,##0\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("title2","0",null,"130","34",null,"grd_lotList:0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("LOT 목록");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("LOTLIST");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","34","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_text("h34");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("guidetip02_00",null,"246","45","10","751",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("guidetip02_01",null,"298","45","34","645",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_text("h34");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_lotList","title2:10",null,"140","34",null,"grd_lotList:0",null,null,null,null,this.div_work.form);
            obj.set_taborder("9");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("none");
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
        this.addIncludeScript("PCM00500M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM00500M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PCM00500M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		:  LOT 투입
         * 파일명 		: PCM00500M.xfdl
         * 작성자 		: 방성혁
         * 작성일 		: 2021.03.08
         *
         * 설  명		:  조회/수정/삭제/엑셀다운로드 기능 제공
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.03.08	방성혁   	최초작성
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
            this.ds_search.clearData();
        	this.ds_productList.clearData();
        	this.ds_lotList.clearData();

        	this.div_work.form.div_detail.form.cal_dueDate.set_value();
        	this.div_work.form.div_detail.form.cal_completeDate.set_value();

        	var sRow = this.ds_search.addRow();
        	this.ds_search.setColumn(sRow, "ENTERPRISEID", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_enterpriseId"));
        	this.ds_search.setColumn(sRow, "PLANTID", this.tab_search.Tabpage1.form.cmb_plantId.value);
        	this.ds_search.setColumn(sRow, "PRODUCTIONTYPE", this.tab_search.Tabpage1.form.cmb_productionType.value);
        	this.ds_search.setColumn(sRow, "PRODUCTIONORDERID", this.tab_search.Tabpage1.form.edt_productionOrderId.value);
        	this.ds_search.setColumn(sRow, "LINENO", this.tab_search.Tabpage1.form.cmb_LineNo.value);
        	this.ds_search.setColumn(sRow, "PRODUCTDEFID", this.tab_search.Tabpage1.form.edt_productDefId.value);
        	this.ds_search.setColumn(sRow, "PRODUCTDEFVERSION", this.tab_search.Tabpage1.form.cmb_productDefVersion.value);
        	this.ds_search.setColumn(sRow, "PRODUCTDEFTYPE", this.tab_search.Tabpage1.form.cmb_productDivision.value);
        	this.ds_search.setColumn(sRow, "LANGUAGETYPE", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType"));


        	var sSvcID = "PRODUCTLIST";
        	var sController = "/pcm00500/selectNotInputProductDefId.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_productList=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
            this.ds_productListTemp.clearData();
            this.ds_lotListTemp.clearData();
        	this.ds_lotListTemp.copyData(this.ds_lotList);

        	this.ds_productList.set_enableevent(false);
        	this.ds_productListTemp.copyRow(this.ds_productListTemp.addRow(), this.ds_productList, this.ds_productList.rowposition);

        	  var colIdList = "";
        	  var colNmList = "";
        	if (this.ds_productListTemp.getColumn(0, "PRODUCTDEFTYPE") == "SubAssembly")
        	{
        		  colIdList = "cal_dueDate"
        	      colNmList = "NORMALLEADTIME";
        	}
        	else
        	{
        	     colIdList = "cal_dueDate,cal_completeDate"
        	     colNmList = "NORMALLEADTIME,EXPECTPRODUCTDATE";
        	}


            var component = this.div_work.form.div_detail;
        	var strColIdList = colIdList
        	var strColNmList = colNmList;
        	if( !this.nfn_MandatoryCheck(component, strColIdList, strColNmList)) return false;

        	for(var i= this.ds_lotListTemp.getRowCount() - 1 ; i >= 0; i--)
        	{
        		if (this.ds_lotListTemp.getColumn(i, "CHK") == "0")
        		{
        			this.ds_lotListTemp.deleteRow(i);
        		}
        		else
        		{
        			this.ds_lotListTemp.setColumn(i, "DUEDATE", this.div_work.form.div_detail.form.cal_dueDate.value);
        			this.ds_lotListTemp.setColumn(i, "EXPECTEDCOMPLETEDATE", this.div_work.form.div_detail.form.cal_completeDate.value);
        		}
        	}

        	if(this.ds_lotListTemp.getRowCount() == 0)
        	{
        		this.gfn_Message("NoSelections", null, "error", "ok");
        		return false;
        	}

           this.ds_productList.set_enableevent(true);
          	var sSvcID       = "INPUTLOT";
        	var sController  = "/pcm00500/saveInputLot.do";
        	var sInDatasets  = "ds_productList=ds_productListTemp ds_lotListTemp=ds_lotListTemp ";
        	var sOutDatasets = "";
        	var sArgs = "";

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
        * 기능 : 검색 초기화
        */
        this.fn_searchClear = function(obj,e)
        {
        	 this.ds_search.clearData();
        	 this.ds_lineNoSearch.clearData();
        	 this.ds_lineNo.clearData()
        	 this.ds_productVersionSearch.clearData();
             this.ds_prodVersion.clearData();
        	 this.ds_productList.clearData();
        	 this.ds_lotList.clearData();
        	 this.ds_lotListTemp.clearData();
        	 this.ds_area.clearData();
        	 this.ds_completeDate.clearData();
        	 this.tab_search.Tabpage1.form.cmb_plantId.set_value(this.gf_getSiteType());
        	 this.div_work.form.div_detail.form.cal_dueDate.set_value("");
        	 this.div_work.form.div_detail.form.cal_completeDate.set_value("");

        	 this.AddAll(this.ds_prodVersion,"PRODUCTDEFVERSIONCODE","PRODUCTDEFVERSIONNAME");
             this.AddAll(this.ds_lineNo,"CODEID","COCENM");
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
        	switch(obj.name) {
        	case "btn_edt_productionOrderId":
        	case "btn_edt_productDefId":
        		this.fn_ComboClear(obj.name);
        		break;
        	default:
        	}
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
        	case "AREALIST" :
        		 this.fn_LotListSearch();
        		 break;
        	case "LOTLIST":
        	     if (this.ds_lotList.getRowCount() > 0)
        	     {
        	     	   if (!this.nfn_isNull(this.ds_lotList.getColumn(0 , "DUEDATE")))
        	     	   {
        	     	   	   this.div_work.form.div_detail.form.cal_dueDate.set_value(this.ds_lotList.getColumn(0 , "DUEDATE"));
        	     	   }
        	     	   else
        	     	   {
        	     	   	   this.div_work.form.div_detail.form.cal_dueDate.set_value("");
        	     	   }


        	            var sSvcID       = "COMPLETEDATE";
        				var sController  = "/pcm00500/selectExpectedCompleteDate.do";
        				var sInDatasets  = "INPUT=ds_search";
        				var sOutDatasets = "ds_completeDate=output";
        				var sArgs        = "";
        				this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs,"","",false);

        				if (this.ds_completeDate.getRowCount() > 0 && !this.nfn_isNull(this.ds_completeDate.getColumn(0 , "EXPCECTDATE")))
        				{
        					this.div_work.form.div_detail.form.cal_completeDate.set_value(this.ds_completeDate.getColumn(0 , "EXPCECTDATE"));
        				}
        				else
        				{
        					this.div_work.form.div_detail.form.cal_completeDate.set_value("");
        				}
        	     }
        		 break;
           case "SEARCH_PRODUCTVERSION" :
        	      this.AddAll(this.ds_prodVersion,"PRODUCTDEFVERSIONCODE","PRODUCTDEFVERSIONNAME");
        	      this.tab_search.Tabpage1.form.cmb_productDefVersion.set_index(0);
        		  break;
            case "SEARCH_LINENO":
        		  this.AddAll(this.ds_lineNo,"CODEID","COCENM");
        		  this.tab_search.Tabpage1.form.cmb_LineNo.set_index(0);

        		  break;
        	case "INPUTLOT" :
        	     this.gfn_Message("ProcessingSuccess", "", "information", "ok");

        		 this.fn_LotListSearch();
        		 break;
        	default:
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
        		case "SEARCH_PRODUCTIONDEFID" :
        		case "SEARCH_PRODUCTIONORDERID" :
        		    var arrOrderId  = [];
        			var arrProduct  = [];
        			for(var i=0; i<rtn.length; i++){
        				var colArray = rtn[i];
        				 arrOrderId.push(colArray[0]);
        				 arrProduct.push(colArray[1]);
        			}
        		    this.tab_search.Tabpage1.form.edt_productionOrderId.set_value(arrOrderId.join(","));
        			this.tab_search.Tabpage1.form.edt_productDefId.set_value(arrProduct.join(","));
        			this.fn_getLineNo();
        			this.fn_productVersionSearch();

        			if (rtn.length == 1)
        			{
        				this.tab_search.Tabpage1.form.cmb_LineNo.set_value(colArray[2]);
        				this.tab_search.Tabpage1.form.cmb_productDefVersion.set_value(colArray[3]);
        			}
        			//LINENO|PRODUCTDEFVERSION
        			break;
        		default :
        			break;
        	}

        };
        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        this.fn_formInit = function()
        {
        	this.tab_search.Tabpage1.form.cmb_plantId.set_value(this.gf_getSiteType());
            this.fn_ComboClear();

        	this.tab_search.Tabpage1.form.btn_edt_productDefId.addEventHandler("onclick", this.btn_Clear, this);
        	this.tab_search.Tabpage1.form.btn_edt_productionOrderId.addEventHandler("onclick", this.btn_Clear, this);
        };

        this.fn_LotListSearch = function()
        {

        	var sSvcID = "LOTLIST";
        	var sController = "/pcm00500/selectNotInputLotListByProductDefId.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_lotList=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.fn_getLineNo = function()
        {
            this.ds_lineNoSearch.clearData();
        	this.ds_lineNo.clearData();

        	var aRow = this.ds_lineNoSearch.addRow();

        	this.ds_lineNoSearch.setColumn(aRow, "ENTERPRISEID", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_enterpriseId"));
        	this.ds_lineNoSearch.setColumn(aRow, "PLANTID", this.tab_search.Tabpage1.form.cmb_plantId.value);
        	this.ds_lineNoSearch.setColumn(aRow, "PRODUCTIONORDERID", this.tab_search.Tabpage1.form.edt_productionOrderId.value);
        	var sSvcID = "SEARCH_LINENO";
        	var sController = "/pcm00300/selectLineNo.do";
        	var sInDatasets = "INPUT=ds_lineNoSearch";
        	var sOutDatasets = "ds_lineNo=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets,  sArgs, "", "", false);
        };

        this.fn_productVersionSearch = function()
        {
        	this.ds_productVersionSearch.clearData();
        	this.ds_prodVersion.clearData();

        	var aRow = this.ds_productVersionSearch.addRow();
        	this.ds_productVersionSearch.setColumn(aRow, "ENTERPRISEID", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_enterpriseId"));
        	this.ds_productVersionSearch.setColumn(aRow, "PLANTID", this.tab_search.Tabpage1.form.cmb_plantId.value);
        	this.ds_productVersionSearch.setColumn(aRow, "PRODUCTDEFID", this.tab_search.Tabpage1.form.edt_productDefId.value);
        	this.ds_productVersionSearch.setColumn(aRow, "LANGUAGETYPE", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType"));

        	this.pfn_CostomQuerySync(this.ds_productVersionSearch, this.ds_prodVersion, "selectProductVersionMulty");

        	this.AddAll(this.ds_prodVersion,"PRODUCTDEFVERSIONCODE","PRODUCTDEFVERSIONNAME");
        	this.tab_search.Tabpage1.form.cmb_productDefVersion.set_index(0);

        };

        this.fn_ComboClear = function(objName)
        {
        	switch(objName) {
        	case "btn_edt_productDefId":
        		this.ds_prodVersion.clearData();
        		this.AddAll(this.ds_prodVersion,"PRODUCTDEFVERSIONCODE","PRODUCTDEFVERSIONNAME");
        		this.tab_search.Tabpage1.form.cmb_productDefVersion.set_index(0);
        		break;
        	case  "btn_edt_productionOrderId":
        		this.ds_lineNo.clearData();
        		this.AddAll(this.ds_lineNo,"CODEID","COCENM");
        		this.tab_search.Tabpage1.form.cmb_LineNo.set_index(0);
        		break;
        	default:
        		this.ds_prodVersion.clearData();
        		this.AddAll(this.ds_prodVersion,"PRODUCTDEFVERSIONCODE","PRODUCTDEFVERSIONNAME");
        		this.ds_lineNo.clearData();
        		this.AddAll(this.ds_lineNo,"CODEID","COCENM");
        		this.tab_search.Tabpage1.form.cmb_LineNo.set_index(0);
        		this.tab_search.Tabpage1.form.cmb_productDefVersion.set_index(0);
        	}


        };
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.tab_search_Tabpage1_btn_productCode_onclick = function(obj,e)
        {
             var txtSearch = ""
        	if (!this.nfn_isNull(this.tab_search.Tabpage1.form.edt_productDefId.value))
        	{
        		txtSearch = "TXTPRODUCTDEFNAME="+ this.tab_search.Tabpage1.form.edt_productDefId.value;
        	}

        	var popupId = "SEARCH_PRODUCTIONDEFID";
        	var oArg = {};
        	oArg.arg_type = "CA";
        	oArg.arg_popupCd = "P00147";
        	oArg.arg_popupNm = "품목조회";
        	oArg.arg_rtnCols = "PRODUCTIONORDERID|PRODUCTDEFID|LINENO|PRODUCTDEFVERSION";
        	oArg.arg_paramCols = "PLANTID|LANGUAGETYPE";
        	oArg.arg_paramValues = this.gf_getSiteType() + "|" + nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType");
        	oArg.arg_searchStr = txtSearch;

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=830,height=700");
        };


        this.ds_productList_onrowposchanged = function(obj,e)
        {
        	if (e.newrow < 0) return false;
        	var bRow = this.ds_productList.rowposition;

        	this.ds_search.clearData();
        	this.ds_area.clearData();
        	this.div_work.form.grd_lotList.setCellProperty("head", 1, "text", '0');

        	var sRow = this.ds_search.addRow();
        	this.ds_search.setColumn(sRow, "ENTERPRISEID", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_enterpriseId"));
        	this.ds_search.setColumn(sRow, "PLANTID", this.tab_search.Tabpage1.form.cmb_plantId.value);
        	this.ds_search.setColumn(sRow, "PRODUCTIONORDERID", this.ds_productList.getColumn(bRow, "PRODUCTIONORDERID"));
        	this.ds_search.setColumn(sRow, "PRODUCTDEFID", this.ds_productList.getColumn(bRow, "PRODUCTDEFID"));
        	this.ds_search.setColumn(sRow, "LINENO", this.ds_productList.getColumn(bRow, "LINENO"));
        	this.ds_search.setColumn(sRow, "PRODUCTDEFVERSION", this.ds_productList.getColumn(bRow, "PRODUCTDEFVERSION"));
        	this.ds_search.setColumn(sRow, "LANGUAGETYPE", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType"));


        	var sSvcID = "AREALIST";
        	var sController = "/pcm00500/getLotInputAreaList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_area=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        this.tab_search_Tabpage1_btn_productionOrderId_onclick = function(obj,e)
        {
            var txtSearch = ""
        	if (!this.nfn_isNull(this.tab_search.Tabpage1.form.edt_productionOrderId.value))
        	{
        		txtSearch = "PRODUCTIONORDERID="+ this.tab_search.Tabpage1.form.edt_productionOrderId.value;
        	}

        	var popupId = "SEARCH_PRODUCTIONORDERID";
        	var oArg = {};
        	oArg.arg_type = "CA";
        	oArg.arg_popupCd = "P00146";
        	oArg.arg_popupNm = "수주번호조회";
        	oArg.arg_rtnCols = "PRODUCTIONORDERID|PRODUCTDEFID|LINENO|PRODUCTDEFVERSION";
        	oArg.arg_paramCols = "PLANTID|LANGUAGETYPE";
        	oArg.arg_paramValues = this.gf_getSiteType() + "|" + nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType");;
        	oArg.arg_searchStr = txtSearch;

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=830,height=700");
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tabpage1.form.btn_productionOrderId.addEventHandler("onclick",this.tab_search_Tabpage1_btn_productionOrderId_onclick,this);
            this.tab_search.Tabpage1.form.btn_productDefId.addEventHandler("onclick",this.tab_search_Tabpage1_btn_productCode_onclick,this);
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.ds_productList.addEventHandler("onrowposchanged",this.ds_productList_onrowposchanged,this);
        };
        this.loadIncludeScript("PCM00500M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
