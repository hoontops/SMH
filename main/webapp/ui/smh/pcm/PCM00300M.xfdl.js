(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM00300M");
            this.set_titletext("LOT 생성");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_productionOrder", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"LINENO\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SALESPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"LAYER\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"PCSMM\" type=\"STRING\" size=\"256\"/><Column id=\"PLANQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PLANPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PLANMM\" type=\"STRING\" size=\"256\"/><Column id=\"ISSPLIT\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOTCREATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISSPECAPPROVE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"PUREORDER\" type=\"STRING\" size=\"256\"/><Column id=\"PUREINPUT\" type=\"STRING\" size=\"256\"/><Column id=\"SURPLUSSTOCK\" type=\"STRING\" size=\"256\"/><Column id=\"SURPLUSWIP\" type=\"STRING\" size=\"256\"/><Column id=\"UNDERAGE\" type=\"STRING\" size=\"256\"/><Column id=\"STDINPUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"LOTINPUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PLANENDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_product", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"LOTSIZE\" type=\"FLOAT\" size=\"256\"/><Column id=\"QTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"JOINTQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"ACTUALINPUTLOSS\" type=\"FLOAT\" size=\"256\"/><Column id=\"PUREORDERLOSS\" type=\"FLOAT\" size=\"256\"/><Column id=\"MATERIALCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOTCREATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"MULTIPLE\" type=\"STRING\" size=\"256\"/><Column id=\"ISINNERPUBLIC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"QTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"PUREINPUT\" type=\"FLOAT\" size=\"256\"/><Column id=\"PUREINPUTLOSS\" type=\"FLOAT\" size=\"256\"/><Column id=\"LOSSRATE\" type=\"FLOAT\" size=\"256\"/><Column id=\"PUREORDER\" type=\"STRING\" size=\"256\"/><Column id=\"ISINPUT\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"JOINTQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOTCREATE\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lineNo", this);
            obj._setContents("<ColumnInfo><Column id=\"CODEID\" type=\"STRING\" size=\"256\"/><Column id=\"COCENM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_yn", this);
            obj._setContents("<ColumnInfo><Column id=\"UOMDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"UOMDEFNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rtrSht", this);
            obj._setContents("<ColumnInfo><Column id=\"CODEID\" type=\"STRING\" size=\"256\"/><Column id=\"CODEVALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"LINENO\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ISCREATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISSPLIT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_maxSeq", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"LASTSEQUENCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lot", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"QTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"PUREINPUT\" type=\"STRING\" size=\"256\"/><Column id=\"PUREINPUTLOSS\" type=\"FLOAT\" size=\"256\"/><Column id=\"LOSSRATE\" type=\"FLOAT\" size=\"256\"/><Column id=\"PUREORDER\" type=\"STRING\" size=\"256\"/><Column id=\"ISINPUT\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"JOINTQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOTCREATE\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lottemp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"QTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"PUREINPUT\" type=\"FLOAT\" size=\"256\"/><Column id=\"PUREINPUTLOSS\" type=\"FLOAT\" size=\"256\"/><Column id=\"LOSSRATE\" type=\"FLOAT\" size=\"256\"/><Column id=\"PUREORDER\" type=\"STRING\" size=\"256\"/><Column id=\"ISINPUT\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"JOINTQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOTCREATE\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_splitSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"LINENO\" type=\"STRING\" size=\"256\"/><Column id=\"ISSPLIT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_productTemp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"LOTSIZE\" type=\"FLOAT\" size=\"256\"/><Column id=\"QTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"JOINTQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"ACTUALINPUTLOSS\" type=\"FLOAT\" size=\"256\"/><Column id=\"PUREORDERLOSS\" type=\"FLOAT\" size=\"256\"/><Column id=\"MATERIALCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOTCREATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"MULTIPLE\" type=\"STRING\" size=\"256\"/><Column id=\"ISINNERPUBLIC\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_productionOrderTemp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"LINENO\" type=\"STRING\" size=\"256\"/><Column id=\"MAINSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SUBSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SALESPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"LAYER\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"PCSMM\" type=\"STRING\" size=\"256\"/><Column id=\"PLANQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PLANPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PLANMM\" type=\"STRING\" size=\"256\"/><Column id=\"ISSPLIT\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOTCREATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISSPECAPPROVE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"PUREORDER\" type=\"STRING\" size=\"256\"/><Column id=\"PUREINPUT\" type=\"STRING\" size=\"256\"/><Column id=\"SURPLUSSTOCK\" type=\"STRING\" size=\"256\"/><Column id=\"SURPLUSWIP\" type=\"STRING\" size=\"256\"/><Column id=\"UNDERAGE\" type=\"STRING\" size=\"256\"/><Column id=\"STDINPUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"LOTINPUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PLANENDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"LACKQTY\" type=\"STRING\" size=\"256\"/><Column id=\"STANDARDINPUT\" type=\"STRING\" size=\"256\"/><Column id=\"LOTPNL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotListTemp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"QTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"PUREINPUT\" type=\"FLOAT\" size=\"256\"/><Column id=\"PUREINPUTLOSS\" type=\"FLOAT\" size=\"256\"/><Column id=\"LOSSRATE\" type=\"FLOAT\" size=\"256\"/><Column id=\"PUREORDER\" type=\"STRING\" size=\"256\"/><Column id=\"ISINPUT\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"JOINTQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOTCREATE\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"LINENO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("label00","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("완료여부");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("ISCOMPLETION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_ISSPLIT","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var tab_search_Tabpage1_form_cmb_ISSPLIT_innerdataset = new nexacro.NormalDataset("tab_search_Tabpage1_form_cmb_ISSPLIT_innerdataset", obj);
            tab_search_Tabpage1_form_cmb_ISSPLIT_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row></Rows>");
            obj.set_innerdataset(tab_search_Tabpage1_form_cmb_ISSPLIT_innerdataset);
            obj.set_text("N");
            obj.set_value("N");
            obj.set_index("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label01","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("S/O번호");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTIONORDERID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label02","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("라인");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LINENO");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productionOrderId","108","35",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","175","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","175","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip00",null,"70","15","97","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip01","0","80","15","97",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip03",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"155","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","181","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label03","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMCODE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_productionOrderId",null,"35","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label05","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTIONTYPENAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label04","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_text("Lot 생성여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("E3537B33EFE14DD3B402E11E43A3E18D");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_lineNo","108","60","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_codecolumn("CODEID");
            obj.set_datacolumn("COCENM");
            obj.set_innerdataset("ds_lineNo");
            obj.set_text("전체조회");
            obj.set_value(" ");
            obj.set_index("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_ISCREATE","108","110","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var tab_search_Tabpage1_form_cmb_ISCREATE_innerdataset = new nexacro.NormalDataset("tab_search_Tabpage1_form_cmb_ISCREATE_innerdataset", obj);
            tab_search_Tabpage1_form_cmb_ISCREATE_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row></Rows>");
            obj.set_innerdataset(tab_search_Tabpage1_form_cmb_ISCREATE_innerdataset);
            obj.set_text("N");
            obj.set_value("N");
            obj.set_index("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_productionType","108","135","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productDefId","108","85",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_productDefId",null,"85","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

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

            obj = new Grid("grd_lotList","0","77.57%",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_lot");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"230\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"품목코드\"/><Cell col=\"1\" text=\"Lot No.\"/><Cell col=\"2\" text=\"수량(PNL)\"/><Cell col=\"3\" text=\"수량(PCS)\" tooltiptext=\"QTY_PCS\"/><Cell col=\"4\" text=\"순투입\"/><Cell col=\"5\" text=\"과투입량\" tooltiptext=\"OVERINPUTQTY\"/><Cell col=\"6\" text=\"실투입로스\" tooltiptext=\"ACTUALINPUTLOSS\"/><Cell col=\"7\" text=\"순수주로스\" tooltiptext=\"PUREORDERLOSS\"/><Cell col=\"8\" text=\"투입여부\"/></Band><Band id=\"body\"><Cell text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:LOTID\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:PNLQTY\" textAlign=\"right\" maskeditformat=\"#,##0\" displaytype=\"mask\"/><Cell col=\"3\" text=\"bind:QTY\" textAlign=\"right\" maskeditformat=\"#,##0\" displaytype=\"mask\"/><Cell col=\"4\" text=\"bind:PUREINPUT\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:PUREINPUTLOSS\" textAlign=\"right\" maskeditformat=\"#,##0\" displaytype=\"mask\"/><Cell col=\"6\" text=\"bind:LOSSRATE\" textAlign=\"right\" maskeditformat=\"#,##0.#0\" displaytype=\"mask\"/><Cell col=\"7\" text=\"bind:PUREORDER\" textAlign=\"right\" maskeditformat=\"#,##0.#0\" displaytype=\"mask\"/><Cell col=\"8\" text=\"bind:ISINPUT\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_product","0","51.14%",null,null,"0","grd_lotList:33",null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_product");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"150\"/><Column size=\"300\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"138\"/><Column size=\"129\"/><Column size=\"97\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"품목코드\"/><Cell col=\"2\" text=\"품목명\"/><Cell col=\"3\" text=\"Roll/Sheet\"/><Cell col=\"4\" text=\"수량(PNL)\"/><Cell col=\"5\" text=\"Lot Size\"/><Cell col=\"6\" text=\"수량\"/><Cell col=\"7\" text=\"접합수\"/><Cell col=\"8\" text=\"단위\"/><Cell col=\"9\" text=\"실투입로스\"/><Cell col=\"10\" text=\"순수주로스\"/><Cell col=\"11\" text=\"Lot생성여부\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:RTRSHT\" displaytype=\"normal\" combocodecol=\"C,RTRSHT,,Y,N\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:PNLQTY\" maskeditformat=\"#,##0\" displaytype=\"mask\" textAlign=\"right\" edittype=\"mask\"/><Cell col=\"5\" text=\"bind:LOTSIZE\" maskeditformat=\"#,##0\" displaytype=\"mask\" textAlign=\"right\" edittype=\"mask\"/><Cell col=\"6\" text=\"bind:QTY\" maskeditformat=\"#,##0\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:JOINTQTY\" maskeditformat=\"#,##0\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:UNIT\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:ACTUALINPUTLOSS\" displaytype=\"mask\" maskeditformat=\"#,##0.#0\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:PUREORDERLOSS\" displaytype=\"mask\" maskeditformat=\"#,##0.#0\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:ISLOTCREATE\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_detail","0",null,null,"66","0","grd_product:34",null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_detail");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("label05","59.50%","10","9.19%","20",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("15");
            obj.set_text("기준로스");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label10","59.50%","35","9.19%","20",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("16");
            obj.set_text("기준투입(PNL)");
            obj.set_cssclass("sta_WF_detailLabel2_P");
            obj.set_tooltiptext("STANDARDINPUTPNL");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label02","0","10","9.19%","20",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("9");
            obj.set_text("순수주");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("PUREORDER");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label07","0","35","9.19%","20",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("10");
            obj.set_text("잉여재고");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("SURPLUSSTOCK");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label08","19.94%","35","9.19%","20",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("11");
            obj.set_text("잉여재공");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("SURPLUSWIP");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label04","39.67%","10","9.19%","20",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("12");
            obj.set_text("기준투입(PCS)");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("STANDARDINPUTPCS");
            obj.set_visible("false");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label09","39.67%","35","9.19%","20",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("13");
            obj.set_text("부족");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("LACKQTY");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label03","19.94%","10","9.19%","20",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("14");
            obj.set_text("순투입");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("PUREINPUT");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label11","79.5%","35","9.00%","20",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("17");
            obj.set_text("Lot Size");
            obj.set_cssclass("sta_WF_detailLabel2_P");
            obj.set_tooltiptext("LOTSIZE");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_LotSize","label11:10","35","90","20",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("8");
            obj.set_format("#,##0");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_StandardInputPnl","label10:10","35",null,"20","label11:0",null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("7");
            obj.set_format("#,##0");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_LackQty","label09:10","35",null,"20","label10:0",null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("6");
            obj.set_format("#,##0");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_SurplusWip","label08:10","35",null,"20","label09:0",null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("5");
            obj.set_format("#,##0");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_SurplusStock","label07:10","35",null,"20","label08:0",null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("4");
            obj.set_format("#,##0");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_PureInput","label03:10","10",null,"20","label04:0",null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("1");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_PureOrder","label02:10","10",null,"20","label03:0",null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("0");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_StandardInputPCS","label04:10","10",null,"20","label05:0",null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("2");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_StandardLoss","label05:10","10",null,"20","label11:0",null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("3");
            obj.set_format("#,##0.#0");
            obj.set_readonly("true");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Grid("grd_productionOrder","0","34",null,null,"0","div_detail:10",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_productionOrder");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"123\"/><Column size=\"112\"/><Column size=\"80\"/><Column size=\"143\"/><Column size=\"110\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"생산구분\" displaytype=\"text\"/><Cell col=\"1\" text=\"S/O번호\" displaytype=\"text\"/><Cell col=\"2\" text=\"라인\" displaytype=\"text\"/><Cell col=\"3\" text=\"품목코드\" displaytype=\"text\"/><Cell col=\"4\" text=\"Rev\" displaytype=\"text\"/><Cell col=\"5\" text=\"품목명\" displaytype=\"text\"/><Cell col=\"6\" text=\"단가\" displaytype=\"text\"/><Cell col=\"7\" text=\"층수\" displaytype=\"text\"/><Cell col=\"8\" text=\"합수\" displaytype=\"text\"/><Cell col=\"9\" text=\"산출수\" displaytype=\"text\" tooltiptext=\"CALCULATION\"/><Cell col=\"10\" text=\"수주량\" displaytype=\"text\"/><Cell col=\"11\" text=\"PNL\" displaytype=\"text\"/><Cell col=\"12\" text=\"면적\" displaytype=\"text\" maskeditformat=\"#,##0\" tooltiptext=\"EXTENT\"/><Cell col=\"13\" text=\"완료여부\" displaytype=\"text\" tooltiptext=\"ISCOMPLETION\"/><Cell col=\"14\" text=\"Lot생성여부\" displaytype=\"text\"/><Cell col=\"15\" text=\"사양결재여부\" displaytype=\"text\"/></Band><Band id=\"body\"><Cell text=\"bind:PRODUCTIONTYPE\" displaytype=\"combotext\" combocodecol=\"C,ProductionType,,Y,N\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:PRODUCTIONORDERID\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:LINENO\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFID\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:SALESPRICE\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:LAYER\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:PCSPNL\" maskeditformat=\"#,##0\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:PCSMM\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:PLANQTY\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:PLANPNLQTY\" maskeditformat=\"#,##0\" textAlign=\"right\" displaytype=\"mask\"/><Cell col=\"12\" text=\"bind:PLANMM\" textAlign=\"right\" maskeditformat=\"#,##0.#0\" displaytype=\"mask\"/><Cell col=\"13\" text=\"bind:ISSPLIT\" textAlign=\"center\"/><Cell col=\"14\" text=\"bind:ISLOTCREATE\" textAlign=\"center\"/><Cell col=\"15\" text=\"bind:ISSPECAPPROVE\" textAlign=\"center\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("title2","0",null,"130","34",null,"grd_product:0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("품목 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("GRIDPRODUCTLIST");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("title3","0",null,"130","33",null,"grd_lotList:0",null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_text("LOT 목록");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("LOTLIST");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","34","761",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_text("h34");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("guidetip02_00",null,"247","45","10","751",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("7");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("guidetip02_01",null,"323","45","34","645",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("8");
            obj.set_text("h34");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("guidetip02_01_00",null,"508","45","34","645",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("9");
            obj.set_text("h34");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_createCancel",null,"6","74","21","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("10");
            obj.set_text("생성취소");
            obj.set_font("bold 9pt \"Dotum\"");
            obj.set_tooltiptext("CREATECANCEL");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_splitRelease",null,"6","74","21","79",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("11");
            obj.set_text("완료해제");
            obj.set_font("bold 9pt \"Dotum\"");
            obj.set_tooltiptext("SPLITRELEASE");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_splitComplete",null,"6","74","21","159",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("12");
            obj.set_text("완료처리");
            obj.set_font("bold 9pt \"Dotum\"");
            obj.set_tooltiptext("SPLITCOMPLETE");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_product","title2:10",null,"140","34",null,"grd_product:0",null,null,null,null,this.div_work.form);
            obj.set_taborder("13");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("none");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("title2_00","0","0","130",null,null,"grd_productionOrder:0",null,null,null,null,this.div_work.form);
            obj.set_taborder("14");
            obj.set_text("수주 사양 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("SALEORDERLIST");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_productionOrder","title2_00:10","0","140","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("15");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("none");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_lot","title3:10",null,"140","33",null,"grd_lotList:0",null,null,null,null,this.div_work.form);
            obj.set_taborder("16");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("none");
            this.div_work.addChild(obj.name, obj);

            obj = new CheckBox("ckb_EtcProduct","sta_cnt_ds_product:10",null,"90","27",null,"grd_product:0",null,null,null,null,this.div_work.form);
            obj.set_taborder("17");
            obj.set_text("기타");
            obj.set_tooltiptext("ETCPRODUCT");
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

            obj = new Button("btn_save",null,"16","26","24","93",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","58","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("8");
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
        this.addIncludeScript("PCM00300M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM00300M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PCM00300M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		:  LOT 생성
         * 파일명 		: PCM00300M.xfdl
         * 작성자 		: 방성혁
         * 작성일 		: 2021.02.22
         *
         * 설  명		:  조회/수정/삭제/엑셀다운로드 기능 제공
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.02.22	방성혁   	최초작성
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
        	this.fn_ComboClear();
        	//this.fn_getLineNo();

        	/*
        	this.ds_search.setColumn(sRow, "ENTERPRISEID", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_enterpriseId"));
        	this.ds_search.setColumn(sRow, "PLANTID", this.gf_getSiteType());

        	var sSvcID = "selectLineNo";
        	var sController = "/pcm00300/selectLineNo.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_line=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	*/

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
        	this.ds_productionOrder.clearData();  // 수주정보 클리어
        	this.ds_product.clearData();          // 제품정보 클리어
        	this.ds_lot.clearData();              // Lot List 클리어
        	this.setProductionOrderInfoClear();
        	//this.getProductionOrderInfo();
        	this.div_work.form.ckb_EtcProduct.set_value("0");


        	var sRow = this.ds_search.addRow();
        	this.ds_search.setColumn(sRow, "ENTERPRISEID", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_enterpriseId"));
        	this.ds_search.setColumn(sRow, "PLANTID", this.gf_getSiteType());
        	this.ds_search.setColumn(sRow, "PRODUCTIONORDERID", this.tab_search.Tabpage1.form.edt_productionOrderId.value);
        	this.ds_search.setColumn(sRow, "LINENO", this.tab_search.Tabpage1.form.cmb_lineNo.value);
        	this.ds_search.setColumn(sRow, "PRODUCTDEFID", this.tab_search.Tabpage1.form.edt_productDefId.value);
        	this.ds_search.setColumn(sRow, "PRODUCTIONTYPE", this.tab_search.Tabpage1.form.cmb_productionType.value);
        	this.ds_search.setColumn(sRow, "ISCREATE", this.tab_search.Tabpage1.form.cmb_ISCREATE.value);
        	this.ds_search.setColumn(sRow, "ISSPLIT", this.tab_search.Tabpage1.form.cmb_ISSPLIT.value);
        	this.ds_search.setColumn(sRow, "LANGUAGETYPE", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType"));


        	var sSvcID = "ProductionOrderList";
        	var sController = "/pcm00300/selectProductionOrderList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_productionOrder=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {

        // 	if (!this.gfn_dsIsUpdated(this.ds_lot) )
        // 	{
        // 		this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        // 		return;
        // 	}


            this.ds_lotListTemp.clearData();
        	this.ds_productionOrderTemp.clearData();

        	var bRow = this.ds_productionOrder.rowposition;

        	var sCnt = 0;
        	for(var i = 0; i < this.ds_lot.getRowCount(); i ++)
        	{
        		if (this.ds_lot.getColumn(i,"ISLOTCREATE") == "N")
        		{
        		   var addRow =  this.ds_lotListTemp.addRow();
        		   this.ds_lotListTemp.copyRow(addRow, this.ds_lot, i);

        			sCnt ++;
        		}
        	}

        	if (sCnt == 0)
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");
        		return;
        	}

        	var lotInputPnlQty = 0;
        	var fRow = this.ds_lotList.findRowExpr("PRODUCTDEFID =='"+this.ds_productionOrder.getColumn(bRow, "PRODUCTDEFID") +"'");
        	if (this.ds_productionOrder.getColumn(bRow, "LOTINPUTPNLQTY") > 0)
        	{
        		if (fRow > -1)
        		{
        			 lotInputPnlQty =  this.div_work.form.div_detail.form.msk_LotSize.value;
        		} else {
        			 lotInputPnlQty =  this.ds_productionOrder.getColumn(bRow, "LOTINPUTPNLQTY");
        		}
        	}
        	else
        	{
        		 lotInputPnlQty =  this.div_work.form.div_detail.form.msk_LotSize.value;
        	}

            this.ds_productionOrderTemp.copyRow(this.ds_productionOrderTemp.addRow(),this.ds_productionOrder, this.ds_productionOrder.rowposition);

        	this.ds_productionOrderTemp.setColumn(0, "PUREORDER", this.div_work.form.div_detail.form.msk_PureOrder.value);
        	this.ds_productionOrderTemp.setColumn(0, "PUREINPUT", this.div_work.form.div_detail.form.msk_PureInput.value);
        	this.ds_productionOrderTemp.setColumn(0, "SURPLUSSTOCK", this.div_work.form.div_detail.form.msk_SurplusStock.value);
        	this.ds_productionOrderTemp.setColumn(0, "SURPLUSWIP", this.div_work.form.div_detail.form.msk_SurplusWip.value);
        	this.ds_productionOrderTemp.setColumn(0, "LACKQTY", this.div_work.form.div_detail.form.msk_LackQty.value);
        	this.ds_productionOrderTemp.setColumn(0, "STANDARDINPUT", this.div_work.form.div_detail.form.msk_StandardInputPnl.value);
        	this.ds_productionOrderTemp.setColumn(0, "LOTPNL", this.div_work.form.div_detail.form.msk_LotSize.value);

             trace(this.ds_lotListTemp.saveXML());
        	 trace("======================================");
        	  trace(this.ds_productionOrderTemp.saveXML());
        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID       = "SaveCreateLot";
        	var sController  = "/pcm00300/saveCreateLot.do";
        	var sInDatasets  = "ds_productionOrderTemp=ds_productionOrderTemp:A ds_lotListTemp=ds_lotListTemp:A ";
        	var sOutDatasets = "";

        	var sArgs = "";

        	//trace(this.ds_productionOrderTemp.saveXML());
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
           this.fn_ComboClear();
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
        	if (errCD != 0)
        	{
        		this.gfn_Message("ProcessingError", trId+ + errMsg, "error", "ok");
        		return;
        	}

        	switch(trId) {
        	case "selectLineNo":
        //
        // 	      this.ds_lineNo.insertRow(0);
        // 	      this.ds_lineNo.setColumn(0,"CODEID","");
        // 		  this.ds_lineNo.setColumn(0,"COCENM","전체조회");
        // 		  this.tab_search.Tabpage1.form.cmb_lineNo.set_value("");
        // 		  this.tab_search.Tabpage1.form.cmb_lineNo.set_text("전체조회");
        		  this.AddAll(this.ds_lineNo,"CODEID","COCENM");
        	      this.tab_search.Tabpage1.form.cmb_lineNo.set_index(0);
        		break;
        	case "ProductionOrderList" :
        	     if (this.ds_productionOrder.getRowCount() == 0)
        	     {
        			this.gfn_Message("NoSelectData", null, "error", "ok");
        		 }
        		break;
        	case "selectLotListByProductionOrder" :
        		if (this.ds_lot.getRowCount() == 0)
        		{
        		    this.setProductionOrderInfoClear();

        		}
        		this.getProductionOrderInfo();
        		this.productionDefinitionList();

        	    break;
        	case "SelectProductDefinitionListByProductionOrder" :
        		  if (this.ds_product.getRowCount() > 0)
        		  {
        			 this.SetProductDefinitionListQtyLoss();
        			 for(var i = 0; i < this.ds_lot.getRowCount(); i++)
        		     {
                        this.ds_lot.setColumn(i, "LOSSRATE"  , this.ds_product.getColumn(0, "ACTUALINPUTLOSS")) // 실투입로스
                        this.ds_lot.setColumn(i, "PUREORDER" , this.ds_product.getColumn(0, "PUREORDERLOSS")) // 실투입로스
        		   }

        		  }
        		break;
        	case "SaveCreateLot" :
        	    this.gfn_Message("ProcessingSuccess", "", "information", "ok");
        	//	this.GetLotList();
        	    this.fn_search();
        		break;
        	case "CancelCreateLot" :
        		this.gfn_Message("ProcessingSuccess", "", "information", "ok");
        		 this.fn_search();
        	   break;
        	case "updateProductionOrder_IsSplit" :
        	     this.gfn_Message("ProcessingSuccess", "", "information", "ok");
        		 this.fn_search();
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
        		case "SEARCH_PRODUCTD" :
        		    var arr_productDefId  = [];


        			for(var i=0; i<rtn.length; i++){
        				var colArray = rtn[i];
        				 arr_productDefId.push(colArray[0]);
        			}
        			this.tab_search.Tabpage1.form.edt_productDefId.set_value(arr_productDefId.join(","));


        			if (rtn.length == 1)
        			{
        				this.tab_search.Tabpage1.form.cmb_productionType.set_value(colArray[1]);
        			}
        		     break;
        		case "SEARCH_PRODUCTIONORDERID":
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

        			if (rtn.length == 1)
        			{
        				this.tab_search.Tabpage1.form.cmb_lineNo.set_value(colArray[2]);
        			}
        			break;
        		case "SEARCH_SPLIT" :
        		     var resultInfo = JSON.parse(rtn);
        			 if(resultInfo.resultCd == "OK")
        			 {
        				this.fn_grd_salesOrderDo_DataSetting(resultInfo.splitQty, resultInfo.lineQty);
        			 }
        			break
        		default :
        			break;
        	}

        };
        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        this.productionDefinitionList = function()
        {
            //var sRow = this.div_work.form.grd_productionOrder.getSelectedDatasetRows();
        	var sRow = this.ds_productionOrder.rowposition;
            this.ds_product.set_enableevent(false);
        	this.ds_search.setColumn(0, "PRODUCTIONORDERID", this.ds_productionOrder.getColumn(sRow, "PRODUCTIONORDERID"));
        	this.ds_search.setColumn(0, "LINENO", this.ds_productionOrder.getColumn(sRow, "LINENO"));
        	this.ds_search.setColumn(0, "PRODUCTDEFID", this.ds_productionOrder.getColumn(sRow, "PRODUCTDEFID"));
        	this.ds_search.setColumn(0, "PRODUCTDEFVERSION", this.ds_productionOrder.getColumn(sRow, "PRODUCTDEFVERSION"));

        	this.ds_product.clearData();
        	var sSvcID = "SelectProductDefinitionListByProductionOrder";
        	var sController = "/pcm00300/selectProductDefinitionListByProductionOrder.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_product=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        	this.ds_product.set_enableevent(true);
        };
        this.SetProductDefinitionListQtyLoss = function()
        {
           // var sRow = this.div_work.form.grd_productionOrder.getSelectedDatasetRows();
        	var sRow = this.ds_productionOrder.rowposition;

        	var pcsPnl           = this.ds_productionOrder.getColumn(sRow, "PCSPNL");
        	var pureOrder        = this.div_work.form.div_detail.form.msk_PureOrder.value;
        	var pureInput        = this.div_work.form.div_detail.form.msk_PureInput.value;
        	var standardInputPcs = this.div_work.form.div_detail.form.msk_StandardInputPCS.value;
        	var standardInput    = this.div_work.form.div_detail.form.msk_StandardInputPnl.value;
        	var lotSize          = this.div_work.form.div_detail.form.msk_LotSize.value;
        	var pureInputLoss    = pureInput < 1 ? 0 : nexacro.round(((nexacro.toNumber(pcsPnl *standardInput) / nexacro.toNumber(pureInput))*100) - 100,2);
        	var pureOrderLoss    = pureInput < 1 ? 0 : nexacro.round(((nexacro.toNumber(pcsPnl *standardInput) / nexacro.toNumber(pureOrder))*100) - 100,2);

            this.ds_product.set_enableevent(false);
        	for(var i = 0; i < this.ds_product.getRowCount(); i++)
        	{

        		this.ds_product.setColumn(i, "PNLQTY", standardInput);
        		this.ds_product.setColumn(i, "QTY", nexacro.round(this.ds_product.getColumn(i, "JOINTQTY") * standardInput));

        		if (standardInput > 0)
        		{
        			this.ds_product.setColumn(i, "ACTUALINPUTLOSS", pureInputLoss);
        			this.ds_product.setColumn(i, "PUREORDERLOSS"  , pureOrderLoss);
        		}

        		if (lotSize > 0)
        		{
        			this.ds_product.setColumn(i, "LOTSIZE", lotSize);
        		}
        	}
        	this.ds_product.set_enableevent(true);


        };
        this.setProductionOrderInfoClear = function()
        {
           this.div_work.form.div_detail.form.msk_PureOrder.set_value(0);
        	this.div_work.form.div_detail.form.msk_PureInput.set_value(0);
        	this.div_work.form.div_detail.form.msk_StandardInputPCS.set_value(0);
        	this.div_work.form.div_detail.form.msk_StandardLoss.set_value(0);
        	this.div_work.form.div_detail.form.msk_SurplusStock.set_value(0);
        	this.div_work.form.div_detail.form.msk_SurplusWip.set_value(0);
        	this.div_work.form.div_detail.form.msk_LackQty.set_value(0);
        	this.div_work.form.div_detail.form.msk_StandardInputPnl.set_value(0);
        	this.div_work.form.div_detail.form.msk_LotSize.set_value(0);
        };
        this.getProductionOrderInfo = function()
        {
            //var sRow = this.div_work.form.grd_productionOrder.getSelectedDatasetRows();
            var sRow = this.ds_productionOrder.rowposition;
        	if (this.ds_lot.getRowCount() == 0)
        	{
        		this.div_work.form.div_detail.form.msk_PureOrder.set_value(this.ds_productionOrder.getColumn(sRow, "PLANQTY"));
        	} else {
        		this.div_work.form.div_detail.form.msk_PureOrder.set_value(this.ds_productionOrder.getColumn(sRow, "PUREORDER"));
        		this.div_work.form.div_detail.form.msk_PureInput.set_value(this.ds_productionOrder.getColumn(sRow, "PUREINPUT"));
        		this.div_work.form.div_detail.form.msk_SurplusStock.set_value(this.ds_productionOrder.getColumn(sRow, "SURPLUSSTOCK"));
        		this.div_work.form.div_detail.form.msk_SurplusWip.set_value(this.ds_productionOrder.getColumn(sRow, "SURPLUSWIP"));
        		this.div_work.form.div_detail.form.msk_LackQty.set_value(this.ds_productionOrder.getColumn(sRow, "UNDERAGE"));
        		this.div_work.form.div_detail.form.msk_StandardInputPnl.set_value(this.ds_productionOrder.getColumn(sRow, "STDINPUTPNLQTY"));
        		this.div_work.form.div_detail.form.msk_LotSize.set_value(this.ds_productionOrder.getColumn(sRow, "LOTINPUTPNLQTY"));

        		this.calcProductionOrderInfo();
        	}



        };
         this.GetLotList = function()
         {
            // var sRow = this.div_work.form.grd_productionOrder.getSelectedDatasetRows();
        	var sRow = this.ds_productionOrder.rowposition;

        	this.ds_search.setColumn(0, "LINENO", this.ds_productionOrder.getColumn(sRow, "LINENO"));
        	this.ds_search.setColumn(0, "PRODUCTDEFID", this.ds_productionOrder.getColumn(sRow, "PRODUCTDEFID"));
        	this.ds_search.setColumn(0, "PRODUCTIONORDERID", this.ds_productionOrder.getColumn(sRow, "PRODUCTIONORDERID"));
        	this.ds_lot.clearData();

        	var sSvcID = "selectLotListByProductionOrder";
        	var sController = "/pcm00300/selectLotListByProductionOrder.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_lot=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
         };

        this.setProductCheckStatus = function(status)
        {
        	for(var i = 0; i < this.ds_product.getRowCount(); i++)
        	{
        		var materialClass =  this.ds_product.getColumn(i, "MATERIALCLASS");

        		if (materialClass != "FG")
        		{
        			this.ds_product.setColumn(i, "CHK", status);
        		}
        	}
        };
         this.maxSequence = function(lotStartNo, rtrSht)
         {
            this.ds_search2.clearData();
        	this.ds_maxSeq.clearData();
        	var sRow = this.ds_search2.addRow();

        	this.ds_search2.setColumn(sRow, "LOTID", lotStartNo);
        	this.ds_search2.setColumn(sRow, "RTRSHT", rtrSht);
        	var sSvcID = "getLotIdMaxSequence";
        	var sController = "/pcm00300/getLotIdMaxSequence.do";
        	var sInDatasets = "INPUT=ds_search2";
        	var sOutDatasets = "ds_maxSeq=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs,"","",false);

        	return  this.ds_maxSeq.getColumn(0,"SEQUENCE");


         };

        this.GetBase36String = function(value)
        {
        	var data = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        	var idx = value % 36 ;

        	return data.substring(idx,1);


        };

        this.calcProductionOrderInfo = function()
        {
              //  var sRow = this.div_work.form.grd_productionOrder.getSelectedDatasetRows();
        	    var sRow = this.ds_productionOrder.rowposition;
        		var planQty        = this.ds_productionOrder.getColumn(sRow, "PLANQTY");
        		var pcsPnl         = this.nfn_isNull(this.ds_productionOrder.getColumn(sRow, "PCSPNL")) ? 0 : this.ds_productionOrder.getColumn(sRow, "PCSPNL");
        		var surplusStock   = this.nfn_isNull(this.div_work.form.div_detail.form.msk_SurplusStock.value) ? 0 : this.div_work.form.div_detail.form.msk_SurplusStock.value;
        		var surplusWip     = this.nfn_isNull(this.div_work.form.div_detail.form.msk_SurplusWip.value) ? 0 : this.div_work.form.div_detail.form.msk_SurplusWip.value;
        		var lackQty        = this.nfn_isNull(this.div_work.form.div_detail.form.msk_LackQty.value) ? 0 : this.div_work.form.div_detail.form.msk_LackQty.value;
        	    var standardInput  = this.nfn_isNull(this.div_work.form.div_detail.form.msk_StandardInputPnl.value) ? 0 : this.div_work.form.div_detail.form.msk_StandardInputPnl.value;
        		var lotPnl         = this.nfn_isNull(this.div_work.form.div_detail.form.msk_LotSize.value) ? 0 : this.div_work.form.div_detail.form.msk_LotSize.value;

        		this.div_work.form.div_detail.form.msk_PureInput.set_value(nexacro.toNumber(planQty) - (nexacro.toNumber(surplusStock) + nexacro.toNumber(surplusWip)) + nexacro.toNumber(lackQty));
        		this.div_work.form.div_detail.form.msk_StandardInputPCS.set_value(standardInput * pcsPnl);

        		var pureInput = this.div_work.form.div_detail.form.msk_PureInput.value;
        		var pureOrder = this.div_work.form.div_detail.form.msk_PureOrder.value;
        		var standardInputPcs = this.div_work.form.div_detail.form.msk_StandardInputPCS.value;

        		var standardLoss = nexacro.round(((standardInputPcs / pureOrder) * 100) - 100,2);

        		if (standardInput > 0 && lotPnl > 0)
        		{
        		   this.div_work.form.div_detail.form.msk_StandardLoss.set_value(standardLoss);

        		}
        };
        this.fn_getLineNo = function()
        {
            this.ds_search.clearData();
        	this.ds_lineNo.clearData();

        	var sRow = this.ds_search.addRow();

        	this.ds_search.setColumn(sRow, "ENTERPRISEID", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_enterpriseId"));
        	this.ds_search.setColumn(sRow, "PLANTID"          , this.gf_getSiteType());
        	this.ds_search.setColumn(sRow, "PRODUCTDEFID", this.tab_search.Tabpage1.form.edt_productDefId.value);
        	var sSvcID = "selectLineNo";
        	var sController = "/pcm00300/selectLineNo.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_lineNo=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false);
        };

        this.fn_ComboClear = function()
        {
        	this.ds_lineNo.clearData();
        	this.AddAll(this.ds_lineNo,"CODEID","COCENM");
        	this.tab_search.Tabpage1.form.cmb_lineNo.set_index(0);
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.tab_search_Tabpage1_btn_productCode_onclick = function(obj,e)
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
        	 var txtSearch = ""
        	if (!this.nfn_isNull(this.tab_search.Tabpage1.form.edt_productDefId.value))
        	{
        		txtSearch = "PRODUCTDEFID="+ this.tab_search.Tabpage1.form.edt_productDefId.value;
        	}

        	var popupId = "SEARCH_PRODUCTD";
        	var oArg = {};
        	oArg.arg_type = "CA";
        	oArg.arg_popupCd = "P00022";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "PRODUCTDEFID|PRODUCTIONTYPE";
        	oArg.arg_paramCols = "";
        	oArg.arg_paramValues = "";
        	oArg.arg_searchStr = txtSearch;

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=830,height=700");
        };


        this.div_work_ckb_EtcProduct_onchanged = function(obj,e)
        {
        	if (this.ds_product.rowcount < 1)
        	{
        	    this.div_work.form.ckb_EtcProduct.value = "0";
        		return false;
        	}

        	this.setProductCheckStatus(this.div_work.form.ckb_EtcProduct.value);
        };

        this.ds_product_oncolumnchanged = function(obj,e)
        {
            if(e.row < 0) return false;

        	if (e.columnid == "CHK")
        	{

        		this.ds_lotList.clearData();
        		this.ds_lottemp.clearData();



        	   // var sRow = this.div_work.form.grd_productionOrder.getSelectedDatasetRows();
        		var sRow = this.ds_productionOrder.rowposition;
        		var productionOrderId = this.ds_productionOrder.getColumn(sRow,"PRODUCTIONORDERID");
        		var productDefId      = this.ds_productionOrder.getColumn(sRow,"PRODUCTDEFID");
        		var state             = this.ds_productionOrder.getColumn(sRow,"STATE");
        		var cRow              = this.ds_lot.findRowExpr("ISLOTCREATE == 'Y'");
        		var rowCnt            = 0;
        		if (state == "LotCreate")
        		{
        			return false;
        		}

        		if (cRow > -1)
        		{
        			for(var i = 0; i < this.ds_lot.getRowCount(); i++)
        			{
        				if (this.ds_lot.getColumn(i,"ISLOTCREATE") == "Y")
        				{
        					this.ds_lottemp.copyRow(this.ds_lottemp.addRow(),this.ds_lot,i);
        					rowCnt ++;
        				}
        			}
        		}

        		for(var k = 0 ; k < this.ds_product.getRowCount(); k++)
        		{
        			if (this.ds_product.getColumn(k,"CHK") == "0")
        			{
        				continue;
        			}
        			if (this.ds_product.getColumn(k,"ISLOTCREATE") == "N")
        			{
        				var siteCode     = "";
        				var lotNo        = "";
        				var productType  = "";
        				var rtrSht   = this.ds_product.getColumn(k,"RTRSHT");
        				if (this.nfn_isNull(rtrSht))
        				{
        					this.gfn_Message("NotInputProductRTRSHT", "", "error", "ok");
        					this.ds_product.setColumn(k, "CHK", 0);
        					return false;
        				}
        				switch(this.ds_productionOrder.getColumn(sRow,"PRODUCTIONTYPE")) {
        					case "Production":
        						productType = "M";
        						break;
        					case "Sample":
        					case "SampleTest" :
        						productType = "S";
        						break;
        					case "FirstProduction":
        						productType = "P";
        						break;
        					case "Test":
        						productType = "T";
        						break;
        					default :
        						productType = "C";
        						break;
        				}
        				switch(this.gf_getSiteType()) {
        				case "IFC" :
        					siteCode = "F";
        					break;
        				case "IFV" :
        					siteCode = "Y";
        					break;
        				case "CCT":
        					siteCode = "C";
        					break;
        				case "YPE":
        					siteCode = "Y";
        					break;
        				case "YPEV":
        					siteCode = "P";
        					break;
        				default:
        					break;
        				}

        				var migLot = this.ds_lot.findRowExpr("DESCRIPTION == 'MIG'");
        				var lotStartNo = "";
        				var sequence   = "";

        				if (migLot > -1)
        				{
        					var normalLot = this.ds_lot.findRowExpr("DESCRIPTION == NULL");
        					if (normalLot > -1)
        					{
        					   lotNo = this.ds_lot.getColumn(normalLot, "LOTID").substring(0,11);
        					}
        					else
        					{
        					   lotStartNo = this.ds_lot.getColumn(migLot, "LOTID").substring(2, 6) + siteCode;
        					   sequence   = this.maxSequence(lotStartNo, rtrSht);
        					   lotNo      = productType+lotStartNo + this.gfn_right( "000"+sequence, 3);
        					}

        				}
        				else
        				{
        					if (rowCnt > 0)
        					{
        						lotNo = this.ds_lottemp.getColumn(0, "LOTID").substring(0,11);

        					} else {

        						lotStartNo =  this.gfn_right(this.gfn_today(),6) + siteCode;
        						sequence  = this.maxSequence(lotStartNo,rtrSht);
        						lotNo = productType+lotStartNo + this.gfn_right( "000"+sequence, 3);
        					}
        				}
        				var reInput = "1";
        				var materialClass    = this.ds_product.getColumn(k, "MATERIALCLASS");
        				var materialSequence = this.ds_product.getColumn(k, "MATERIALSEQUENCE");

        				if (this.nfn_isNull(materialClass) || this.nfn_isNull(materialSequence))
        				{
        					this.gfn_Message("NotExistsMaterialInfo", "", "error", "ok");
        					return false;
        				}

        				var material    = "";
        			//	if (this.ds_product.getColumn(k, "PRODUCTDEFTYPE") == "SubAssembly" && nexacro.toNumber(materialSequence) == 0)
        				if (this.ds_product.getColumn(k, "PRODUCTDEFTYPE") == "SubAssembly")
        				{
        		// 			var materialSeq = 1;
        		// 			var materialCnt = 0;
        		// 			for(var i = 0; i < this.ds_lotList.getRowCount(); i++)
        		// 			{
        		// 				 if ( this.ds_lot.getColumn(i,"LOTID").substring(13,2) == materialClass)
        		// 				 {
        		// 					materialCnt ++;
        		// 				 }
        		// 			}
        		//
        		// 			if (materialCnt > 0)
        		// 			{
        		// 				 materialSeq = (materialCnt + 1);
        		// 			}
        		// 			material = materialClass + this.gfn_right( "00"+ materialSeq, 2);
        					material = this.gfn_right( this.ds_product.getColumn(k, "PRODUCTDEFID"), 7);
        				}
        				else
        				{
        					//material = materialClass + this.gfn_right( "00"+ materialSeq, 2);
        					material = materialClass ;
        				}
        				var lotDegree  = new Array();
        				var txtDegree  = "";
        				var lotSplit = "000";
        				var planQty          = this.ds_productionOrder.getColumn(sRow, "PLANQTY");
        				var pcsPnl           = this.ds_productionOrder.getColumn(sRow, "PCSPNL");
        				var pureOrder        = this.div_work.form.div_detail.form.msk_PureOrder.value;
        				var pureInput        = this.div_work.form.div_detail.form.msk_PureInput.value;
        				var standardInput    = this.div_work.form.div_detail.form.msk_StandardInputPnl.value;
        				var lotPnl           = this.ds_product.getColumn(k, "LOTSIZE");
        				var pnlQty           = this.ds_product.getColumn(k, "PNLQTY");
        				var jointQty         = this.ds_product.getColumn(k, "JOINTQTY");
        				var actualInputLoss  = this.ds_product.getColumn(k, "ACTUALINPUTLOSS");  //실투입로스
        				var pureOrderLoss    = this.ds_product.getColumn(k, "PUREORDERLOSS");    //순수주로스

        				switch(rtrSht) {
        					case "RTR":
        						lotDegree.push("000");
        						lotSplit = "000";
        					break;
        				case "SHT":

        					var nShtLotDegree =  Math.ceil(pnlQty / lotPnl) ;

        					var totalSeq = 1;
        					var lastSeq = 1;

        					for (var i = 0; i < nShtLotDegree; i++)
        					{
        						if (i >= 999)
        						{
        							if (totalSeq % 100 == 0)
        								totalSeq++;

        							var startIndex = totalSeq.substring(0,2) ;

        							if (lastSeq > 99)
        								lastSeq = 1;
        								lotDegree.push(this.GetBase36String(startIndex) + this.gfn_right( "00"+ lastSeq, 2));
        							//lotDegree.Add(CommonFunction.GetBase36String(startIndex) + lastSeq.ToString("00"));
        						}
        						else
        						{
        							//lotDegree.Add(lastSeq.ToString("000"));
        							 lotDegree.push(this.gfn_right( "000"+ lastSeq, 3));
        						}

        						totalSeq++;
        						lastSeq++;
        					}

        					lotSplit = "001";

        					break;
        				default:
        				}
        				var addCount = 0;
        				for(var i = 0; i < lotDegree.length; i++)
        				{
        				  // var lotId = string.Join("-", lotNo, reInput, material, value, lotSplit);
        					var lotId = lotNo+"-"+reInput+"-"+material+"-"+lotDegree[i]+"-"+lotSplit;
        					var dRow = this.ds_lotList.addRow();
        					var aaa = nexacro.round(pnlQty / lotPnl,0);
        					this.ds_lotList.setColumn(dRow, "ENTERPRISEID", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_enterpriseId"));
        					this.ds_lotList.setColumn(dRow, "PLANTID", this.gf_getSiteType());
        					this.ds_lotList.setColumn(dRow, "PRODUCTIONORDERID", productionOrderId);
        					this.ds_lotList.setColumn(dRow, "PRODUCTDEFID", this.ds_product.getColumn(k,"PRODUCTDEFID"));
        					this.ds_lotList.setColumn(dRow, "PRODUCTDEFVERSION", this.ds_product.getColumn(k,"PRODUCTDEFVERSION"));
        					this.ds_lotList.setColumn(dRow, "LOTID", lotId);
        					this.ds_lotList.setColumn(dRow, "PNLQTY", rtrSht == "RTR" ? pnlQty : nexacro.toNumber(addCount) == Math.floor(pnlQty / lotPnl) ? (pnlQty % lotPnl) : lotPnl);
        				//	this.ds_lotList.setColumn(dRow, "QTY", rtrSht == " pnlQty * jointQty) : Math.floor(this.ds_lotList.getColumn(dRow, "PNLQTY") * jointQty ));
        					this.ds_lotList.setColumn(dRow, "QTY", this.ds_lotList.getColumn(dRow, "PNLQTY") * jointQty);
        					this.ds_lotList.setColumn(dRow, "JOINTQTY", jointQty);
        				//	this.ds_lotList.setColumn(dRow, "PUREINPUT", Math.ceil(pureInput / pcsPnl) * jointQty * (this.ds_lotList.getColumn(dRow, "PNLQTY") / standardInput));
        				//	this.ds_lotList.setColumn(dRow, "PUREINPUTLOSS", nexacro.toNumber(this.ds_lotList.getColumn(dRow, "QTY") - this.ds_lotList.getColumn(dRow, "PUREINPUT")));
        					this.ds_lotList.setColumn(dRow, "PUREINPUTLOSS", Math.ceil((this.ds_lotList.getColumn(dRow, "QTY") *(pureOrderLoss)/100)));
        					this.ds_lotList.setColumn(dRow, "PUREINPUT", this.ds_lotList.getColumn(dRow, "QTY") - this.ds_lotList.getColumn(dRow, "PUREINPUTLOSS"));
        					this.ds_lotList.setColumn(dRow, "LOSSRATE", actualInputLoss);
        					this.ds_lotList.setColumn(dRow, "PUREORDER", pureOrderLoss);
        					this.ds_lotList.setColumn(dRow, "UNIT", this.ds_product.getColumn(k,"UNIT"));
        					this.ds_lotList.setColumn(dRow, "ISINPUT", "N");
        					this.ds_lotList.setColumn(dRow, "ISLOTCREATE", "N");
        					this.ds_lotList.setColumn(dRow, "RTRSHT", rtrSht);
        					addCount ++;
                            trace("pureInput = "+ pureInput + ", pcsPnl = " + pcsPnl + ", jointQty = " + jointQty + ", PNLQTY = " + this.ds_lotList.getColumn(dRow, "PNLQTY") + ", standardInput = " + standardInput);

        				}

        			}
        		}

        		this.ds_lottemp.mergeData(this.ds_lotList);
        		this.ds_lot.copyData(this.ds_lottemp);
        		this.div_work.form.sta_cnt_ds_lot.set_text("Count : <fc v='#f31d24'>"+this.ds_lot.getRowCount()+"</fc>");
        		//this.div_work.form.sta_cnt_ds_lot.text='Count : <fc v="#f31d24">'+this.ds_lot.getRowCount()+'</fc>';
        	} else if (e.columnid=="PNLQTY")
        	{
        		 this.ds_product.setColumn(e.row,"QTY", nexacro.round(e.newvalue) * nexacro.round(this.ds_product.getColumn(e.row, "JOINTQTY")))
        	}
        };




        this.div_work_div_detail_msk_StandardInputPnl_onkeyup = function(obj,e)
        {
            this.calcProductionOrderInfo();
        	this.SetProductDefinitionListQtyLoss();
        };

        this.div_work_div_detail_msk_LotSize_onkeyup = function(obj,e)
        {
            this.calcProductionOrderInfo();
        	this.SetProductDefinitionListQtyLoss();
        };

        this.div_work_div_detail_msk_LackQty_onkeyup = function(obj,e)
        {
           this.calcProductionOrderInfo();
        	this.SetProductDefinitionListQtyLoss();
        };

        this.div_work_div_detail_msk_SurplusWip_onkeyup = function(obj,e)
        {
            this.calcProductionOrderInfo();
        	this.SetProductDefinitionListQtyLoss();
        };

        this.div_work_div_detail_msk_SurplusStock_onkeyup = function(obj,e)
        {
            this.calcProductionOrderInfo();
        	this.SetProductDefinitionListQtyLoss();
        };

        this.ds_productionOrder_onrowposchanged = function(obj,e)
        {
            if(e.newrow < 0) return false;
        	//this.setProductionOrderInfoClear();
        	//this.getProductionOrderInfo();
        	this.div_work.form.ckb_EtcProduct.set_value("0");
        	// trace('this.ds_productionOrder.getColumn(e.row, "PLANQTY") = ' + this.ds_productionOrder.getColumn(e.row, "PLANQTY"));
        	//this.div_work.form.div_detail.form.msk_PureOrder.set_value(this.ds_productionOrder.getColumn(e.row, "PLANQTY"));

        	this.div_work.form.grd_product.setCellProperty("head", 0, "text", '0');

        	this.GetLotList();
        };
        //완료처리 버튼 클릭시
        this.div_work_btn_splitComplete_onclick = function(obj,e)
        {
           var bRtn = this.gfn_confirm("SplitComplete", "information")
        	if(bRtn == false)  return;

        	this.ds_splitSearch.clearData();
        	var sRow = this.ds_splitSearch.addRow();
        	var dRow = this.ds_productionOrder.rowposition;
        	this.ds_splitSearch.setColumn(sRow, "PRODUCTIONORDERID", this.ds_productionOrder.getColumn(dRow, "PRODUCTIONORDERID"));
        	this.ds_splitSearch.setColumn(sRow, "LINENO", this.ds_productionOrder.getColumn(dRow, "LINENO"));
        	this.ds_splitSearch.setColumn(sRow, "ISSPLIT", "Y");

        	var sSvcID = "updateProductionOrder_IsSplit";
        	var sController = "/pcm00300/updateProductionOrder_IsSplit.do";
        	var sInDatasets = "INPUT=ds_splitSearch";
        	var sOutDatasets = "";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        //완료해제 버튼 클릭시
        this.div_work_btn_splitRelease_onclick = function(obj,e)
        {
            var bRtn = this.gfn_confirm("SplitRelease", "information")
        	if(bRtn == false)  return;
        	this.ds_splitSearch.clearData();
        	var sRow = this.ds_splitSearch.addRow();
        	var dRow = this.ds_productionOrder.rowposition;
        	this.ds_splitSearch.setColumn(sRow, "PRODUCTIONORDERID", this.ds_productionOrder.getColumn(dRow, "PRODUCTIONORDERID"));
        	this.ds_splitSearch.setColumn(sRow, "LINENO", this.ds_productionOrder.getColumn(dRow, "LINENO"));
        	this.ds_splitSearch.setColumn(sRow, "ISSPLIT", "N");

        	var sSvcID = "updateProductionOrder_IsSplit";
        	var sController = "/pcm00300/updateProductionOrder_IsSplit.do";
        	var sInDatasets = "INPUT=ds_splitSearch";
        	var sOutDatasets = "";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };
        // 생성취소 버튼 클릭시
        this.div_work_btn_createCancel_onclick = function(obj,e)
        {
            var bRow = this.ds_productionOrder.rowposition;
        	var fRow =  this.ds_product.findRowExpr("CHK == '1'");
        	if (fRow == -1)
        	{
        		this.gfn_Message("GridNoChecked", null, "error", "ok");
        		return false;

        	}
        	this.ds_productTemp.clearData();
        	var productionOrderId = this.ds_productionOrder.getColumn(bRow, "PRODUCTIONORDERID");
        	var lineNo            = this.ds_productionOrder.getColumn(bRow, "LINENO");
        	var messArr           = new Array();
        	    messArr[0]        = productionOrderId;
        		messArr[1]        = lineNo;

        	var bRtn = this.gfn_confirm("CancelCreateLotConfirm", "information", messArr)
        	if(bRtn == false)  return;

        	var cnt = 0;
        	for(var i = 0 ; i < this.ds_product.getRowCount(); i++)
        	{
        		if (this.ds_product.getColumn(i, "CHK") == "1")
        		{
        			if (this.ds_product.getColumn(i, "ISLOTCREATE") == "Y")
        			{
        			   this.ds_productTemp.copyRow(this.ds_productTemp.addRow(), this.ds_product, i);
        			  // trace(this.ds_productTemp.saveXML());
        				cnt ++;
        			}
        		}
        	}

        	if (cnt == 0)
        	{
        		this.gfn_Message("NotExistsLotCreateCancel", null, "error", "ok");
        		return false;
        	}

        // 	for(var i = 0; i < this.ds_productTemp.getRowCount(); i++)
        // 	{
        // 		this.ds_productTemp.setColumn(i, "PRODUCTIONORDERID", productionOrderId);
        // 		this.ds_productTemp.setColumn(i, "LINENO", lineNo);
        // 	}
            this.ds_data.clearData();

        	this.ds_data.addRow();
        	this.ds_data.setColumn(0, "PRODUCTIONORDERID", productionOrderId);
        	this.ds_data.setColumn(0, "LINENO", lineNo);

        	var sSvcID = "CancelCreateLot";
        	var sController = "/pcm00300/cancelCreateLot.do";
        	var sInDatasets = "ds_data=ds_data ds_productTemp=ds_productTemp";
        	var sOutDatasets = "";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };

        this.tab_search_Tabpage1_btn_productionOrderId_onclick = function(obj,e)
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
        	 var txtSearch = ""
        	if (!this.nfn_isNull(this.tab_search.Tabpage1.form.edt_productionOrderId.value))
        	{
        		txtSearch = "PRODUCTIONORDERID="+ this.tab_search.Tabpage1.form.edt_productionOrderId.value;
        	}

        	var popupId = "SEARCH_PRODUCTIONORDERID";
        	var oArg = {};
        	oArg.arg_type = "CA";
        	oArg.arg_popupCd = "P00130";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "PRODUCTIONORDERID|PRODUCTDEFID|LINENO";
        	oArg.arg_paramCols = "";
        	oArg.arg_paramValues = "";
        	oArg.arg_searchStr = txtSearch;

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=830,height=700");
        };

        this.div_work_grd_product_onheadclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tabpage1.form.btn_productionOrderId.addEventHandler("onclick",this.tab_search_Tabpage1_btn_productionOrderId_onclick,this);
            this.tab_search.Tabpage1.form.btn_productDefId.addEventHandler("onclick",this.tab_search_Tabpage1_btn_productCode_onclick,this);
            this.div_work.addEventHandler("onclick",this.div_work_onclick,this);
            this.div_work.form.grd_product.addEventHandler("onheadclick",this.div_work_grd_product_onheadclick,this);
            this.div_work.form.div_detail.form.msk_LotSize.addEventHandler("onkeyup",this.div_work_div_detail_msk_LotSize_onkeyup,this);
            this.div_work.form.div_detail.form.msk_StandardInputPnl.addEventHandler("onkeyup",this.div_work_div_detail_msk_StandardInputPnl_onkeyup,this);
            this.div_work.form.div_detail.form.msk_LackQty.addEventHandler("onkeyup",this.div_work_div_detail_msk_LackQty_onkeyup,this);
            this.div_work.form.div_detail.form.msk_SurplusWip.addEventHandler("onkeyup",this.div_work_div_detail_msk_SurplusWip_onkeyup,this);
            this.div_work.form.div_detail.form.msk_SurplusStock.addEventHandler("onkeyup",this.div_work_div_detail_msk_SurplusStock_onkeyup,this);
            this.div_work.form.grd_productionOrder.addEventHandler("oncellclick",this.div_work_grd_productionOrder_oncellclick,this);
            this.div_work.form.btn_createCancel.addEventHandler("onclick",this.div_work_btn_createCancel_onclick,this);
            this.div_work.form.btn_splitRelease.addEventHandler("onclick",this.div_work_btn_splitRelease_onclick,this);
            this.div_work.form.btn_splitComplete.addEventHandler("onclick",this.div_work_btn_splitComplete_onclick,this);
            this.div_work.form.ckb_EtcProduct.addEventHandler("onchanged",this.div_work_ckb_EtcProduct_onchanged,this);
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.ds_productionOrder.addEventHandler("onrowposchanged",this.ds_productionOrder_onrowposchanged,this);
            this.ds_product.addEventHandler("oncolumnchanged",this.ds_product_oncolumnchanged,this);
        };
        this.loadIncludeScript("PCM00300M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
