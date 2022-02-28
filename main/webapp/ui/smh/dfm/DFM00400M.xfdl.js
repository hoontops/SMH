(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DFM00400M");
            this.set_titletext("Layer별 불량 현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1647,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_searchCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"P_PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"P_REV\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_revCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"P_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_layerGroupSum", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LAYER\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rawData", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"EQUIPMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBNAME\" type=\"STRING\" size=\"256\"/><Column id=\"COLOR\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"LAYERID\" type=\"STRING\" size=\"256\"/><Column id=\"EVENTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"ISREWORK\" type=\"STRING\" size=\"256\"/><Column id=\"REPAIRTARGETQTY\" type=\"STRING\" size=\"256\"/><Column id=\"REPAIRRESULTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"LAYERNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchMain", this);
            obj._setContents("<ColumnInfo><Column id=\"P_LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_CONPERIOD_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"P_CONPERIOD_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"P_INSPECTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_LAYERID\" type=\"STRING\" size=\"256\"/><Column id=\"P_ENTERPRISEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmbDefectGrp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"P_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmbDefectCode", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"P_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectGrpT", this);
            obj._setContents("<ColumnInfo><Column id=\"LAYERID\" type=\"STRING\" size=\"256\"/><Column id=\"LAYERNM\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_INSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"OPERATIONSEQUENCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectGrpChartTotal", this);
            obj._setContents("<ColumnInfo><Column id=\"LAYERID\" type=\"STRING\" size=\"256\"/><Column id=\"LAYERNM\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_INSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"OPERATIONSEQUENCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chartTotal", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"percentage\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chartColor", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COLOR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectGrp01", this);
            obj._setContents("<ColumnInfo><Column id=\"LAYERID\" type=\"STRING\" size=\"256\"/><Column id=\"LAYERNM\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_INSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"OPERATIONSEQUENCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectGrpChartSub", this);
            obj._setContents("<ColumnInfo><Column id=\"LAYERID\" type=\"STRING\" size=\"256\"/><Column id=\"LAYERNM\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_INSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"OPERATIONSEQUENCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chart01", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"FLOAT\" size=\"256\"/><Column id=\"percentage\" type=\"FLOAT\" size=\"256\"/><Column id=\"TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectGrp02", this);
            obj._setContents("<ColumnInfo><Column id=\"LAYERID\" type=\"STRING\" size=\"256\"/><Column id=\"LAYERNM\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_INSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"OPERATIONSEQUENCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chart02", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"FLOAT\" size=\"256\"/><Column id=\"percentage\" type=\"FLOAT\" size=\"256\"/><Column id=\"TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectGrp03", this);
            obj._setContents("<ColumnInfo><Column id=\"LAYERID\" type=\"STRING\" size=\"256\"/><Column id=\"LAYERNM\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_INSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"OPERATIONSEQUENCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chart03", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"FLOAT\" size=\"256\"/><Column id=\"percentage\" type=\"FLOAT\" size=\"256\"/><Column id=\"TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectGrp04", this);
            obj._setContents("<ColumnInfo><Column id=\"LAYERID\" type=\"STRING\" size=\"256\"/><Column id=\"LAYERNM\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_INSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"OPERATIONSEQUENCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chart04", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"FLOAT\" size=\"256\"/><Column id=\"percentage\" type=\"FLOAT\" size=\"256\"/><Column id=\"TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectGrp05", this);
            obj._setContents("<ColumnInfo><Column id=\"LAYERID\" type=\"STRING\" size=\"256\"/><Column id=\"LAYERNM\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_INSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"OPERATIONSEQUENCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chart05", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"FLOAT\" size=\"256\"/><Column id=\"percentage\" type=\"FLOAT\" size=\"256\"/><Column id=\"TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectGrp06", this);
            obj._setContents("<ColumnInfo><Column id=\"LAYERID\" type=\"STRING\" size=\"256\"/><Column id=\"LAYERNM\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_INSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"OPERATIONSEQUENCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chart06", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"FLOAT\" size=\"256\"/><Column id=\"percentage\" type=\"FLOAT\" size=\"256\"/><Column id=\"TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectGrpTcopy", this);
            obj._setContents("<ColumnInfo><Column id=\"LAYERID\" type=\"STRING\" size=\"256\"/><Column id=\"LAYERNM\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_INSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"OPERATIONSEQUENCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectGrpChartSubCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"LAYERID\" type=\"STRING\" size=\"256\"/><Column id=\"LAYERNM\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_INSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"OPERATIONSEQUENCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectGrpTotal01", this);
            obj._setContents("<ColumnInfo><Column id=\"LAYERID\" type=\"STRING\" size=\"256\"/><Column id=\"LAYERNM\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_INSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"OPERATIONSEQUENCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectGrpTotal02", this);
            obj._setContents("<ColumnInfo><Column id=\"LAYERID\" type=\"STRING\" size=\"256\"/><Column id=\"LAYERNM\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_INSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"OPERATIONSEQUENCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectGrpTotal03", this);
            obj._setContents("<ColumnInfo><Column id=\"LAYERID\" type=\"STRING\" size=\"256\"/><Column id=\"LAYERNM\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_INSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"OPERATIONSEQUENCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectGrpTotal04", this);
            obj._setContents("<ColumnInfo><Column id=\"LAYERID\" type=\"STRING\" size=\"256\"/><Column id=\"LAYERNM\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_INSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"OPERATIONSEQUENCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectGrpTotal05", this);
            obj._setContents("<ColumnInfo><Column id=\"LAYERID\" type=\"STRING\" size=\"256\"/><Column id=\"LAYERNM\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_INSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"OPERATIONSEQUENCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectGrpTotal06", this);
            obj._setContents("<ColumnInfo><Column id=\"LAYERID\" type=\"STRING\" size=\"256\"/><Column id=\"LAYERNM\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_INSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"OPERATIONSEQUENCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tab_search01",this.tab_search);
            obj.set_text("불량명");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.tab_search01.form);
            obj.set_taborder("14");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_search01.addChild(obj.name, obj);

            obj = new Static("sta_searchPeriod","0","10","103","20",null,null,null,null,null,null,this.tab_search.tab_search01.form);
            obj.set_taborder("11");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("5A9641FD0CFD479C8E4840FB00D0683C");
            this.tab_search.tab_search01.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"205","45","20","91",null,null,null,null,null,this.tab_search.tab_search01.form);
            obj.set_taborder("12");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_search01.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","231","10","27",null,null,null,null,null,null,this.tab_search.tab_search01.form);
            obj.set_taborder("13");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_search01.addChild(obj.name, obj);

            obj = new Button("btn_clearC","171","225","102","36",null,null,null,null,null,null,this.tab_search.tab_search01.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.tab_search01.addChild(obj.name, obj);

            obj = new Button("btn_search","15","225","146","36",null,null,null,null,null,null,this.tab_search.tab_search01.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.tab_search01.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00",null,"10","45","10","81",null,null,null,null,null,this.tab_search.tab_search01.form);
            obj.set_taborder("15");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_search01.addChild(obj.name, obj);

            obj = new Static("sta_lotNo","0","60","103","20",null,null,null,null,null,null,this.tab_search.tab_search01.form);
            obj.set_taborder("16");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("54C33732C27844B298AB8C7EA28109AC");
            this.tab_search.tab_search01.addChild(obj.name, obj);

            obj = new Static("sta_itemCode","0","85","103","20",null,null,null,null,null,null,this.tab_search.tab_search01.form);
            obj.set_taborder("17");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("F112527EF89E45D8BA876725E97E3B30");
            this.tab_search.tab_search01.addChild(obj.name, obj);

            obj = new Edit("edt_lotNo","108","60",null,"20","37",null,null,null,null,null,this.tab_search.tab_search01.form);
            obj.set_taborder("1");
            this.tab_search.tab_search01.addChild(obj.name, obj);

            obj = new Button("btn_lotNo",null,"60","22","20","15",null,null,null,null,null,this.tab_search.tab_search01.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tab_search01.addChild(obj.name, obj);

            obj = new Edit("edt_itemNm","108","110","165","20",null,null,null,null,null,null,this.tab_search.tab_search01.form);
            obj.set_taborder("5");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.tab_search.tab_search01.addChild(obj.name, obj);

            obj = new Combo("cbo_period","10","35","94","20",null,null,null,null,null,null,this.tab_search.tab_search01.form);
            obj.set_taborder("0");
            obj.set_cssclass("cmb_SA_label");
            obj.set_innerdataset("gds_period");
            obj.set_codecolumn("code");
            obj.set_datacolumn("desc");
            obj.set_value("");
            obj.set_index("5");
            this.tab_search.tab_search01.addChild(obj.name, obj);

            obj = new Static("sta_itemNm","0","110","103","20",null,null,null,null,null,null,this.tab_search.tab_search01.form);
            obj.set_taborder("18");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("FAA6C66A19874535851F8C13FF3A95BC");
            this.tab_search.tab_search01.addChild(obj.name, obj);

            obj = new Static("sta_rev","0","135","103","20",null,null,null,null,null,null,this.tab_search.tab_search01.form);
            obj.set_taborder("19");
            obj.set_text("Rev");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFVERSION");
            this.tab_search.tab_search01.addChild(obj.name, obj);

            obj = new Static("sta_inpType","0","160","103","20",null,null,null,null,null,null,this.tab_search.tab_search01.form);
            obj.set_taborder("20");
            obj.set_text("검사구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("F08D5BD5CFEA409A9C07665A28ADA13A");
            this.tab_search.tab_search01.addChild(obj.name, obj);

            obj = new Static("sta_layer","0","185","103","20",null,null,null,null,null,null,this.tab_search.tab_search01.form);
            obj.set_taborder("21");
            obj.set_text("Layer No");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("9BA0994900D94F21A6709010DBAE0532");
            this.tab_search.tab_search01.addChild(obj.name, obj);

            obj = new Edit("edt_itemCode","108","85",null,"20","37",null,null,null,null,null,this.tab_search.tab_search01.form);
            obj.set_taborder("3");
            this.tab_search.tab_search01.addChild(obj.name, obj);

            obj = new Button("btn_itemCode",null,"85","22","20","15",null,null,null,null,null,this.tab_search.tab_search01.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tab_search01.addChild(obj.name, obj);

            obj = new Combo("cmb_inpType","108","160","165","20",null,null,null,null,null,null,this.tab_search.tab_search01.form);
            obj.set_taborder("6");
            obj.set_codecolumn("C,DefectMapInspactionType,,Y,Y ");
            obj.set_enable("false");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.tab_search01.addChild(obj.name, obj);

            obj = new Edit("edt_layer","108","185",null,"20","37",null,null,null,null,null,this.tab_search.tab_search01.form);
            obj.set_taborder("7");
            this.tab_search.tab_search01.addChild(obj.name, obj);

            obj = new Button("btn_layer",null,"185","22","20","15",null,null,null,null,null,this.tab_search.tab_search01.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tab_search01.addChild(obj.name, obj);

            obj = new Div("div_dateFrom","108","10","165","21",null,null,null,null,null,null,this.tab_search.tab_search01.form);
            obj.set_taborder("22");
            obj.set_url("common::com_calendar.xfdl");
            this.tab_search.tab_search01.addChild(obj.name, obj);

            obj = new Div("div_dateTo","108","35","165","21",null,null,null,null,null,null,this.tab_search.tab_search01.form);
            obj.set_taborder("23");
            obj.set_url("common::com_calendar.xfdl");
            this.tab_search.tab_search01.addChild(obj.name, obj);

            obj = new Div("div_revMulti",null,"135","165","20","15",null,null,null,null,null,this.tab_search.tab_search01.form);
            obj.set_taborder("24");
            obj.set_url("dfm::dfm_multiCombo.xfdl");
            this.tab_search.tab_search01.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_search);
            obj.set_text("불량코드");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","80","15","97",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"70","15","97","0",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("label01","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("유효상태");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cmb_01","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("ds_cmb01");
            obj.set_text("유효");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Button("Button45_00","15","50","146","36",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Button("Button44_00_01","171","50","102","36",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","191","34",null,null,null,null,null,null,this);
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

            obj = new Tab("tab_work","0","0",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab_work);
            obj.set_text("품목");
            obj.set_formscrolltype("vertical");
            obj.set_tooltiptext("39E398BEF43A428C8343EFE08F22CDE4");
            this.div_work.form.tab_work.addChild(obj.name, obj);

            obj = new Div("div_total","0","0",null,"225","0",null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("div_00");
            obj.set_cssclass("div_WF_modulePart_S");
            this.div_work.form.tab_work.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_subtitleTotal","0.00%","0","43","34",null,null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.div_total.form);
            obj.set_taborder("0");
            obj.set_text("Total");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_work.Tabpage1.form.div_total.addChild(obj.name, obj);

            obj = new Grid("grd_total","332","34",null,"189","0",null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.div_total.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_defectGrpT");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"LAYER\" tooltiptext=\"44C87C99332444CC8A076FBDB35DA9C2\"/><Cell col=\"2\" text=\"검사수\" tooltiptext=\"QCMFINALINSPECTQTY\"/><Cell col=\"3\" text=\"불량명 (그룹)\" tooltiptext=\"DefectGroupName\"/><Cell col=\"4\" text=\"불량수 (그룹)\" tooltiptext=\"DefectGroupCount2\"/><Cell col=\"5\" text=\"불량율 (그룹)\" tooltiptext=\"DefectGroupRate2\"/><Cell col=\"6\" text=\"불량명 (세부)\" tooltiptext=\"DefectDetailName\"/><Cell col=\"7\" text=\"불량수 (세부)\" tooltiptext=\"DefectDetailCount\"/><Cell col=\"8\" text=\"불량율 (세부)\" tooltiptext=\"DefectDetailRate\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:LAYERNM\" suppress=\"1\"/><Cell col=\"2\" text=\"bind:TOTAL_INSPECTIONQTY\" suppress=\"2\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"!#,##9\"/><Cell col=\"3\" text=\"bind:GROUPNAME\" suppress=\"3\"/><Cell col=\"4\" suppress=\"4\" textAlign=\"right\" expr=\"comp.parent.parent.parent.parent.parent.parent.parent.parent.fn_setTotalDefectCnt(GROUPCODE,LAYERID,&apos;ds_defectGrpT&apos;)\" displaytype=\"mask\" maskeditformat=\"!#,##9\"/><Cell col=\"5\" suppress=\"5\" textAlign=\"right\" expr=\"comp.parent.parent.parent.parent.parent.parent.parent.parent.fn_setGrpRate(GROUPCODE,LAYERID,TOTAL_INSPECTIONQTY,&apos;ds_defectGrpT&apos;)\"/><Cell col=\"6\" text=\"bind:SUBNAME\" suppress=\"6\"/><Cell col=\"7\" text=\"bind:DEFECTCOUNT\" suppress=\"7\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"!#,##9\"/><Cell col=\"8\" suppress=\"8\" textAlign=\"right\" expr=\"comp.parent.parent.parent.parent.parent.parent.parent.parent.fn_setDetailRate(TOTAL_INSPECTIONQTY, DEFECTCOUNT)\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\" text=\"expr:dataset.getSum(&quot;parseFloat(DEFECTCOUNT)&quot;)\" displaytype=\"number\"/><Cell col=\"8\" text=\"expr:comp.parent.parent.parent.parent.parent.parent.parent.parent.fn_setSumGrpRateTotal(&apos;ds_defectGrpTcopy&apos;)\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.Tabpage1.form.div_total.addChild(obj.name, obj);

            obj = new Button("btn_filter",null,"9","34","20","39",null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.div_total.form);
            obj.set_taborder("7");
            obj.set_text("필터");
            obj.set_cssclass("btn_WF_black");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("4B93867528004642A7CB31361D41C80E");
            this.div_work.form.tab_work.Tabpage1.form.div_total.addChild(obj.name, obj);

            obj = new Div("div_defectCodeMulti",null,"8","140","20","btn_filter:10",null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.div_total.form);
            obj.set_taborder("6");
            obj.set_url("dfm::dfm_multiCombo.xfdl");
            this.div_work.form.tab_work.Tabpage1.form.div_total.addChild(obj.name, obj);

            obj = new Static("sta_defectCode",null,"8","67","20","div_defectCodeMulti:5",null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.div_total.form);
            obj.set_taborder("5");
            obj.set_text("불량코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("DEFECTCODE");
            this.div_work.form.tab_work.Tabpage1.form.div_total.addChild(obj.name, obj);

            obj = new Div("div_defectGrpMulti",null,"8","140","20","sta_defectCode:5",null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.div_total.form);
            obj.set_taborder("4");
            obj.set_url("dfm::dfm_multiCombo.xfdl");
            this.div_work.form.tab_work.Tabpage1.form.div_total.addChild(obj.name, obj);

            obj = new Static("sta_defectGrp",null,"9","67","20","div_defectGrpMulti:5",null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.div_total.form);
            obj.set_taborder("2");
            obj.set_text("불량 그룹");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("E92464F917AC4ED3AF7A55CA15ACAAB1");
            this.div_work.form.tab_work.Tabpage1.form.div_total.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_total",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.div_total.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.div_work.form.tab_work.Tabpage1.form.div_total.addChild(obj.name, obj);

            obj = new BasicChart("chart_grpTotal","0","34","322","189",null,null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.div_total.form);
            obj.set_taborder("8");
            obj.set_border("1px solid #e8e8e8");
            obj.set_binddataset("");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"textfont": "normal 12pt/normal \"맑은 고딕\"",
            		"subtextcolor": "#555555",
            		"subtextalign": "right",
            		"textcolor": "#222222",
            		"subtextfont": "normal 10pt/normal \"맑은 고딕\"",
            		"visible": true
            	},
            	"legend": {
            		"id": "legend",
            		"align": "topcenter",
            		"padding": "10px",
            		"itemtextfont": "normal 9pt/normal \"맑은 고딕\"",
            		"itemtextcolor": "#555555",
            		"markertextgap": 3,
            		"itemautofit": "false",
            		"itemgap": "10",
            		"top": "",
            		"visible": false,
            		"markertype": "square"
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#212121",
            		"textcolor": "#ffffff",
            		"textfont": "normal 9pt/normal \"맑은 고딕\"",
            		"padding": "5px"
            	},
            	"board": {
            		"id": "board",
            		"visible": false
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletextcolor": "#333333",
            		"titletextfont": "normal 700 10pt/normal \"맑은 고딕\"",
            		"labeltextcolor": "#555555",
            		"labeltextfont": "normal 9pt/normal \"맑은 고딕\"",
            		"ticklinestyle": "0px none",
            		"boardlinestyle": "1px solid #f1f1f1",
            		"axislinestyle": "0px none",
            		"gap": "5"
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "series",
            			"barvisible": true,
            			"barfillstyle": "#62be1b,#3c4596,#be0071,#4bc4c2,#f8b334,#9c6add,#2ba3a8,#0c84c1,#ea5d66",
            			"barsize": "60",
            			"itemtextcolor": "#333333",
            			"itemtextfont": "bold 10pt '맑은 고딕'",
            			"valuecolumn": "bind:value",
            			"barlinestyle": "0px none",
            			"valueaxis": "valueaxis0",
            			"lineareafillstyle": "#ffffff",
            			"lineitemtextposition": "centertop",
            			"stacktype": "none"
            		},
            		{
            			"id": "series1",
            			"titletext": "series",
            			"barvisible": false,
            			"barsize": "65",
            			"itemtextvisible": true,
            			"itemtextcolor": "#333333",
            			"itemtextfont": "bold 10pt '맑은 고딕'",
            			"valuecolumn": "bind:percentage",
            			"linevisible": true,
            			"valueaxis": "percentage",
            			"lineitemtextgap": "5",
            			"lineitemtextposition": "centertop",
            			"linestyle": "2px solid #000000",
            			"barlinestyle": "1px solid #000000",
            			"pointlinestyle": "2px solid #000000",
            			"pointfillstyle": "#ffffff",
            			"pointitemtextposition": "centertop",
            			"itemtext": "expr:percentage+'%'",
            			"pointsize": "10"
            		}
            	],
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"boardlinevisible": true,
            			"boardlinestyle": "1px solid #f1f1f1",
            			"labeltextcolor": "#777777",
            			"labeltextfont": "normal 9pt/normal \"맑은 고딕\"",
            			"titletextcolor": "#333333",
            			"titletextfont": "normal 700 10pt/normal \"맑은 고딕\"",
            			"ticklinestyle": "0px none",
            			"labeltype": "number",
            			"titlegap": "10",
            			"tickmax": "80",
            			"tickmin": "0",
            			"axislinestyle": "1px solid #e8e8e8",
            			"visible": "true"
            		},
            		{
            			"id": "percentage",
            			"boardlinevisible": "false",
            			"labeltextcolor": "#777777",
            			"labeltextfont": "normal 9pt/normal \"맑은 고딕\"",
            			"titletextcolor": "#333333",
            			"titletextfont": "normal 700 10pt/normal \"맑은 고딕\"",
            			"ticklinestyle": "1px solid #f1f1f1",
            			"axislinestyle": "1px solid #e8e8e8",
            			"gap": "0",
            			"tickmin": "0",
            			"tickmax": "3",
            			"labelgap": "5",
            			"visible": "true",
            			"opposite": "true",
            			"labeltype": "number",
            			"boardlinestyle": "1px solid #f1f1f1",
            			"labelmask": "#0.00",
            			"titlegap": "0",
            			"titletextalign": "middle"
            		}
            	]
            });
            obj.set_categorycolumn("bind:name");
            this.div_work.form.tab_work.Tabpage1.form.div_total.addChild(obj.name, obj);

            obj = new Div("div_grp01","0","233",null,"223","0",null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("div_00");
            this.div_work.form.tab_work.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_subtitleGrp01","0","0","770","34",null,null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.div_grp01.form);
            obj.set_taborder("0");
            obj.set_text("Group1>>1L-2L");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("none");
            this.div_work.form.tab_work.Tabpage1.form.div_grp01.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_grp01",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.div_grp01.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.div_work.form.tab_work.Tabpage1.form.div_grp01.addChild(obj.name, obj);

            obj = new Grid("grd_grp01","332","34",null,"189","0",null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.div_grp01.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_defectGrp01");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"LAYER\" tooltiptext=\"44C87C99332444CC8A076FBDB35DA9C2\"/><Cell col=\"2\" text=\"검사수\" tooltiptext=\"QCMFINALINSPECTQTY\"/><Cell col=\"3\" text=\"불량명 (그룹)\" tooltiptext=\"DefectGroupName\"/><Cell col=\"4\" text=\"불량수 (그룹)\" tooltiptext=\"DefectGroupCount2\"/><Cell col=\"5\" text=\"불량율 (그룹)\" tooltiptext=\"DefectGroupRate2\"/><Cell col=\"6\" text=\"불량명 (세부)\" tooltiptext=\"DefectDetailName\"/><Cell col=\"7\" text=\"불량수 (세부)\" tooltiptext=\"DefectDetailCount\"/><Cell col=\"8\" text=\"불량율 (세부)\" tooltiptext=\"DefectDetailRate\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:LAYERNM\" suppress=\"1\"/><Cell col=\"2\" text=\"bind:TOTAL_INSPECTIONQTY\" suppress=\"2\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"!#,##9\"/><Cell col=\"3\" text=\"bind:GROUPNAME\" suppress=\"3\"/><Cell col=\"4\" suppress=\"4\" textAlign=\"right\" expr=\"comp.parent.parent.parent.parent.parent.parent.parent.parent.fn_setTotalDefectCnt(GROUPCODE,LAYERID,&apos;ds_defectGrp01&apos;)\" displaytype=\"mask\" maskeditformat=\"!#,##9\"/><Cell col=\"5\" suppress=\"5\" textAlign=\"right\" expr=\"comp.parent.parent.parent.parent.parent.parent.parent.parent.fn_setGrpRate(GROUPCODE,LAYERID,TOTAL_INSPECTIONQTY,&apos;ds_defectGrp01&apos;)\"/><Cell col=\"6\" text=\"bind:SUBNAME\" suppress=\"6\"/><Cell col=\"7\" text=\"bind:DEFECTCOUNT\" suppress=\"7\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"!#,##9\"/><Cell col=\"8\" suppress=\"8\" textAlign=\"right\" expr=\"comp.parent.parent.parent.parent.parent.parent.parent.parent.fn_setDetailRate(TOTAL_INSPECTIONQTY, DEFECTCOUNT)\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\" text=\"expr:dataset.getSum(&quot;parseFloat(DEFECTCOUNT)&quot;)\" displaytype=\"number\"/><Cell col=\"8\" text=\"expr:comp.parent.parent.parent.parent.parent.parent.parent.parent.fn_setSumGrpRate(&apos;ds_defectGrpTotal01&apos;)\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.Tabpage1.form.div_grp01.addChild(obj.name, obj);

            obj = new BasicChart("chart_grp01","0","34","322","189",null,null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.div_grp01.form);
            obj.set_taborder("3");
            obj.set_border("1px solid #e8e8e8");
            obj.set_binddataset("");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"textfont": "normal 12pt/normal \"맑은 고딕\"",
            		"subtextcolor": "#555555",
            		"subtextalign": "right",
            		"textcolor": "#222222",
            		"subtextfont": "normal 10pt/normal \"맑은 고딕\"",
            		"visible": true
            	},
            	"legend": {
            		"id": "legend",
            		"align": "topcenter",
            		"padding": "10px",
            		"itemtextfont": "normal 9pt/normal \"맑은 고딕\"",
            		"itemtextcolor": "#555555",
            		"markertextgap": 3,
            		"itemautofit": "false",
            		"itemgap": "10",
            		"top": "",
            		"visible": false,
            		"markertype": "square"
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#212121",
            		"textcolor": "#ffffff",
            		"textfont": "normal 9pt/normal \"맑은 고딕\"",
            		"padding": "5px"
            	},
            	"board": {
            		"id": "board",
            		"visible": false
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletextcolor": "#333333",
            		"titletextfont": "normal 700 10pt/normal \"맑은 고딕\"",
            		"labeltextcolor": "#555555",
            		"labeltextfont": "normal 9pt/normal \"맑은 고딕\"",
            		"ticklinestyle": "0px none",
            		"boardlinestyle": "1px solid #f1f1f1",
            		"axislinestyle": "0px none",
            		"gap": "5"
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "series",
            			"barvisible": true,
            			"barfillstyle": "#62be1b,#3c4596,#be0071,#4bc4c2,#f8b334,#9c6add,#2ba3a8,#0c84c1,#ea5d66",
            			"barsize": "60",
            			"itemtextcolor": "#333333",
            			"itemtextfont": "bold 10pt '맑은 고딕'",
            			"valuecolumn": "bind:value",
            			"barlinestyle": "0px none",
            			"valueaxis": "valueaxis0",
            			"lineareafillstyle": "#ffffff",
            			"lineitemtextposition": "centertop",
            			"stacktype": "none"
            		},
            		{
            			"id": "series1",
            			"titletext": "series",
            			"barvisible": false,
            			"barsize": "65",
            			"itemtextvisible": true,
            			"itemtextcolor": "#333333",
            			"itemtextfont": "bold 10pt '맑은 고딕'",
            			"valuecolumn": "bind:percentage",
            			"linevisible": true,
            			"valueaxis": "percentage",
            			"lineitemtextgap": "5",
            			"lineitemtextposition": "centertop",
            			"linestyle": "2px solid #000000",
            			"barlinestyle": "1px solid #000000",
            			"pointlinestyle": "2px solid #000000",
            			"pointfillstyle": "#ffffff",
            			"pointitemtextposition": "centertop",
            			"itemtext": "expr:percentage+'%'",
            			"pointsize": "10"
            		}
            	],
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"boardlinevisible": true,
            			"boardlinestyle": "1px solid #f1f1f1",
            			"labeltextcolor": "#777777",
            			"labeltextfont": "normal 9pt/normal \"맑은 고딕\"",
            			"titletextcolor": "#333333",
            			"titletextfont": "normal 700 10pt/normal \"맑은 고딕\"",
            			"ticklinestyle": "0px none",
            			"labeltype": "number",
            			"titlegap": "10",
            			"tickmax": "80",
            			"tickmin": "0",
            			"axislinestyle": "1px solid #e8e8e8",
            			"visible": "true"
            		},
            		{
            			"id": "percentage",
            			"boardlinevisible": "false",
            			"labeltextcolor": "#777777",
            			"labeltextfont": "normal 9pt/normal \"맑은 고딕\"",
            			"titletextcolor": "#333333",
            			"titletextfont": "normal 700 10pt/normal \"맑은 고딕\"",
            			"ticklinestyle": "1px solid #f1f1f1",
            			"axislinestyle": "1px solid #e8e8e8",
            			"gap": "0",
            			"tickmin": "0",
            			"tickmax": "3",
            			"labelgap": "5",
            			"visible": "true",
            			"opposite": "true",
            			"labeltype": "number",
            			"boardlinestyle": "1px solid #f1f1f1",
            			"labelmask": "#0.00",
            			"titlegap": "0",
            			"titletextalign": "middle"
            		}
            	]
            });
            obj.set_categorycolumn("bind:name");
            this.div_work.form.tab_work.Tabpage1.form.div_grp01.addChild(obj.name, obj);

            obj = new Div("div_grp02","0","466",null,"223","0",null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.div_work.form.tab_work.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_subtitleGrp02","0","0","770","34",null,null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.div_grp02.form);
            obj.set_taborder("0");
            obj.set_text("Group2>>1L-2L");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("none");
            this.div_work.form.tab_work.Tabpage1.form.div_grp02.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_grp02",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.div_grp02.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.div_work.form.tab_work.Tabpage1.form.div_grp02.addChild(obj.name, obj);

            obj = new Grid("grd_grp02","332","34",null,"189","0",null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.div_grp02.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_defectGrp02");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"LAYER\" tooltiptext=\"44C87C99332444CC8A076FBDB35DA9C2\"/><Cell col=\"2\" text=\"검사수\" tooltiptext=\"QCMFINALINSPECTQTY\"/><Cell col=\"3\" text=\"불량명 (그룹)\" tooltiptext=\"DefectGroupName\"/><Cell col=\"4\" text=\"불량수 (그룹)\" tooltiptext=\"DefectGroupCount2\"/><Cell col=\"5\" text=\"불량율 (그룹)\" tooltiptext=\"DefectGroupRate2\"/><Cell col=\"6\" text=\"불량명 (세부)\" tooltiptext=\"DefectDetailName\"/><Cell col=\"7\" text=\"불량수 (세부)\" tooltiptext=\"DefectDetailCount\"/><Cell col=\"8\" text=\"불량율 (세부)\" tooltiptext=\"DefectDetailRate\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:LAYERNM\" suppress=\"1\"/><Cell col=\"2\" text=\"bind:TOTAL_INSPECTIONQTY\" suppress=\"2\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"!#,##9\"/><Cell col=\"3\" text=\"bind:GROUPNAME\" suppress=\"3\"/><Cell col=\"4\" suppress=\"4\" textAlign=\"right\" expr=\"comp.parent.parent.parent.parent.parent.parent.parent.parent.fn_setTotalDefectCnt(GROUPCODE,LAYERID,&apos;ds_defectGrp02&apos;)\" displaytype=\"mask\" maskeditformat=\"!#,##9\"/><Cell col=\"5\" suppress=\"5\" textAlign=\"right\" expr=\"comp.parent.parent.parent.parent.parent.parent.parent.parent.fn_setGrpRate(GROUPCODE,LAYERID,TOTAL_INSPECTIONQTY,&apos;ds_defectGrp02&apos;)\"/><Cell col=\"6\" text=\"bind:SUBNAME\" suppress=\"6\"/><Cell col=\"7\" text=\"bind:DEFECTCOUNT\" suppress=\"7\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"!#,##9\"/><Cell col=\"8\" suppress=\"8\" textAlign=\"right\" expr=\"comp.parent.parent.parent.parent.parent.parent.parent.parent.fn_setDetailRate(TOTAL_INSPECTIONQTY, DEFECTCOUNT)\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\" text=\"expr:dataset.getSum(&quot;parseFloat(DEFECTCOUNT)&quot;)\" displaytype=\"number\"/><Cell col=\"8\" text=\"expr:comp.parent.parent.parent.parent.parent.parent.parent.parent.fn_setSumGrpRate(&apos;ds_defectGrpTotal02&apos;)\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.Tabpage1.form.div_grp02.addChild(obj.name, obj);

            obj = new BasicChart("chart_grp02","0","34","322","189",null,null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.div_grp02.form);
            obj.set_taborder("3");
            obj.set_border("1px solid #e8e8e8");
            obj.set_binddataset("");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"textfont": "normal 12pt/normal \"맑은 고딕\"",
            		"subtextcolor": "#555555",
            		"subtextalign": "right",
            		"textcolor": "#222222",
            		"subtextfont": "normal 10pt/normal \"맑은 고딕\"",
            		"visible": true
            	},
            	"legend": {
            		"id": "legend",
            		"align": "topcenter",
            		"padding": "10px",
            		"itemtextfont": "normal 9pt/normal \"맑은 고딕\"",
            		"itemtextcolor": "#555555",
            		"markertextgap": 3,
            		"itemautofit": "false",
            		"itemgap": "10",
            		"top": "",
            		"visible": false,
            		"markertype": "square"
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#212121",
            		"textcolor": "#ffffff",
            		"textfont": "normal 9pt/normal \"맑은 고딕\"",
            		"padding": "5px"
            	},
            	"board": {
            		"id": "board",
            		"visible": false
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletextcolor": "#333333",
            		"titletextfont": "normal 700 10pt/normal \"맑은 고딕\"",
            		"labeltextcolor": "#555555",
            		"labeltextfont": "normal 9pt/normal \"맑은 고딕\"",
            		"ticklinestyle": "0px none",
            		"boardlinestyle": "1px solid #f1f1f1",
            		"axislinestyle": "0px none",
            		"gap": "5"
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "series",
            			"barvisible": true,
            			"barfillstyle": "#62be1b,#3c4596,#be0071,#4bc4c2,#f8b334,#9c6add,#2ba3a8,#0c84c1,#ea5d66",
            			"barsize": "60",
            			"itemtextcolor": "#333333",
            			"itemtextfont": "bold 10pt '맑은 고딕'",
            			"valuecolumn": "bind:value",
            			"barlinestyle": "0px none",
            			"valueaxis": "valueaxis0",
            			"lineareafillstyle": "#ffffff",
            			"lineitemtextposition": "centertop",
            			"stacktype": "none"
            		},
            		{
            			"id": "series1",
            			"titletext": "series",
            			"barvisible": false,
            			"barsize": "65",
            			"itemtextvisible": true,
            			"itemtextcolor": "#333333",
            			"itemtextfont": "bold 10pt '맑은 고딕'",
            			"valuecolumn": "bind:percentage",
            			"linevisible": true,
            			"valueaxis": "percentage",
            			"lineitemtextgap": "5",
            			"lineitemtextposition": "centertop",
            			"linestyle": "2px solid #000000",
            			"barlinestyle": "1px solid #000000",
            			"pointlinestyle": "2px solid #000000",
            			"pointfillstyle": "#ffffff",
            			"pointitemtextposition": "centertop",
            			"itemtext": "expr:percentage+'%'",
            			"pointsize": "10"
            		}
            	],
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"boardlinevisible": true,
            			"boardlinestyle": "1px solid #f1f1f1",
            			"labeltextcolor": "#777777",
            			"labeltextfont": "normal 9pt/normal \"맑은 고딕\"",
            			"titletextcolor": "#333333",
            			"titletextfont": "normal 700 10pt/normal \"맑은 고딕\"",
            			"ticklinestyle": "0px none",
            			"labeltype": "number",
            			"titlegap": "10",
            			"tickmax": "80",
            			"tickmin": "0",
            			"axislinestyle": "1px solid #e8e8e8",
            			"visible": "true"
            		},
            		{
            			"id": "percentage",
            			"boardlinevisible": "false",
            			"labeltextcolor": "#777777",
            			"labeltextfont": "normal 9pt/normal \"맑은 고딕\"",
            			"titletextcolor": "#333333",
            			"titletextfont": "normal 700 10pt/normal \"맑은 고딕\"",
            			"ticklinestyle": "1px solid #f1f1f1",
            			"axislinestyle": "1px solid #e8e8e8",
            			"gap": "0",
            			"tickmin": "0",
            			"tickmax": "3",
            			"labelgap": "5",
            			"visible": "true",
            			"opposite": "true",
            			"labeltype": "number",
            			"boardlinestyle": "1px solid #f1f1f1",
            			"labelmask": "#0.00",
            			"titlegap": "0",
            			"titletextalign": "middle"
            		}
            	]
            });
            obj.set_categorycolumn("bind:name");
            this.div_work.form.tab_work.Tabpage1.form.div_grp02.addChild(obj.name, obj);

            obj = new Div("div_grp03","0","699",null,"223","0",null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("div_00");
            this.div_work.form.tab_work.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_subtitleGrp03","0","0","770","34",null,null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.div_grp03.form);
            obj.set_taborder("0");
            obj.set_text("Group3>>1L-2L");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("none");
            this.div_work.form.tab_work.Tabpage1.form.div_grp03.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_grp03",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.div_grp03.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.div_work.form.tab_work.Tabpage1.form.div_grp03.addChild(obj.name, obj);

            obj = new BasicChart("chart_grp03","0","34","322","189",null,null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.div_grp03.form);
            obj.set_taborder("2");
            obj.set_border("1px solid #e8e8e8");
            obj.set_binddataset("");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"textfont": "normal 12pt/normal \"맑은 고딕\"",
            		"subtextcolor": "#555555",
            		"subtextalign": "right",
            		"textcolor": "#222222",
            		"subtextfont": "normal 10pt/normal \"맑은 고딕\"",
            		"visible": true
            	},
            	"legend": {
            		"id": "legend",
            		"align": "topcenter",
            		"padding": "10px",
            		"itemtextfont": "normal 9pt/normal \"맑은 고딕\"",
            		"itemtextcolor": "#555555",
            		"markertextgap": 3,
            		"itemautofit": "false",
            		"itemgap": "10",
            		"top": "",
            		"visible": false,
            		"markertype": "square"
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#212121",
            		"textcolor": "#ffffff",
            		"textfont": "normal 9pt/normal \"맑은 고딕\"",
            		"padding": "5px"
            	},
            	"board": {
            		"id": "board",
            		"visible": false
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletextcolor": "#333333",
            		"titletextfont": "normal 700 10pt/normal \"맑은 고딕\"",
            		"labeltextcolor": "#555555",
            		"labeltextfont": "normal 9pt/normal \"맑은 고딕\"",
            		"ticklinestyle": "0px none",
            		"boardlinestyle": "1px solid #f1f1f1",
            		"axislinestyle": "0px none",
            		"gap": "5"
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "series",
            			"barvisible": true,
            			"barfillstyle": "#62be1b,#3c4596,#be0071,#4bc4c2,#f8b334,#9c6add,#2ba3a8,#0c84c1,#ea5d66",
            			"barsize": "60",
            			"itemtextcolor": "#333333",
            			"itemtextfont": "bold 10pt '맑은 고딕'",
            			"valuecolumn": "bind:value",
            			"barlinestyle": "0px none",
            			"valueaxis": "valueaxis0",
            			"lineareafillstyle": "#ffffff",
            			"lineitemtextposition": "centertop",
            			"stacktype": "none"
            		},
            		{
            			"id": "series1",
            			"titletext": "series",
            			"barvisible": false,
            			"barsize": "65",
            			"itemtextvisible": true,
            			"itemtextcolor": "#333333",
            			"itemtextfont": "bold 10pt '맑은 고딕'",
            			"valuecolumn": "bind:percentage",
            			"linevisible": true,
            			"valueaxis": "percentage",
            			"lineitemtextgap": "5",
            			"lineitemtextposition": "centertop",
            			"linestyle": "2px solid #000000",
            			"barlinestyle": "1px solid #000000",
            			"pointlinestyle": "2px solid #000000",
            			"pointfillstyle": "#ffffff",
            			"pointitemtextposition": "centertop",
            			"itemtext": "expr:percentage+'%'",
            			"pointsize": "10"
            		}
            	],
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"boardlinevisible": true,
            			"boardlinestyle": "1px solid #f1f1f1",
            			"labeltextcolor": "#777777",
            			"labeltextfont": "normal 9pt/normal \"맑은 고딕\"",
            			"titletextcolor": "#333333",
            			"titletextfont": "normal 700 10pt/normal \"맑은 고딕\"",
            			"ticklinestyle": "0px none",
            			"labeltype": "number",
            			"titlegap": "10",
            			"tickmax": "80",
            			"tickmin": "0",
            			"axislinestyle": "1px solid #e8e8e8",
            			"visible": "true"
            		},
            		{
            			"id": "percentage",
            			"boardlinevisible": "false",
            			"labeltextcolor": "#777777",
            			"labeltextfont": "normal 9pt/normal \"맑은 고딕\"",
            			"titletextcolor": "#333333",
            			"titletextfont": "normal 700 10pt/normal \"맑은 고딕\"",
            			"ticklinestyle": "1px solid #f1f1f1",
            			"axislinestyle": "1px solid #e8e8e8",
            			"gap": "0",
            			"tickmin": "0",
            			"tickmax": "3",
            			"labelgap": "5",
            			"visible": "true",
            			"opposite": "true",
            			"labeltype": "number",
            			"boardlinestyle": "1px solid #f1f1f1",
            			"labelmask": "#0.00",
            			"titlegap": "0",
            			"titletextalign": "middle"
            		}
            	]
            });
            obj.set_categorycolumn("bind:name");
            this.div_work.form.tab_work.Tabpage1.form.div_grp03.addChild(obj.name, obj);

            obj = new Grid("grd_grp03","332","34",null,"189","0",null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.div_grp03.form);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_defectGrp03");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"LAYER\" tooltiptext=\"44C87C99332444CC8A076FBDB35DA9C2\"/><Cell col=\"2\" text=\"검사수\" tooltiptext=\"QCMFINALINSPECTQTY\"/><Cell col=\"3\" text=\"불량명 (그룹)\" tooltiptext=\"DefectGroupName\"/><Cell col=\"4\" text=\"불량수 (그룹)\" tooltiptext=\"DefectGroupCount2\"/><Cell col=\"5\" text=\"불량율 (그룹)\" tooltiptext=\"DefectGroupRate2\"/><Cell col=\"6\" text=\"불량명 (세부)\" tooltiptext=\"DefectDetailName\"/><Cell col=\"7\" text=\"불량수 (세부)\" tooltiptext=\"DefectDetailCount\"/><Cell col=\"8\" text=\"불량율 (세부)\" tooltiptext=\"DefectDetailRate\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:LAYERNM\" suppress=\"1\"/><Cell col=\"2\" text=\"bind:TOTAL_INSPECTIONQTY\" suppress=\"2\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"!#,##9\"/><Cell col=\"3\" text=\"bind:GROUPNAME\" suppress=\"3\"/><Cell col=\"4\" suppress=\"4\" textAlign=\"right\" expr=\"comp.parent.parent.parent.parent.parent.parent.parent.parent.fn_setTotalDefectCnt(GROUPCODE,LAYERID,&apos;ds_defectGrp03&apos;)\" displaytype=\"mask\" maskeditformat=\"!#,##9\"/><Cell col=\"5\" suppress=\"5\" textAlign=\"right\" expr=\"comp.parent.parent.parent.parent.parent.parent.parent.parent.fn_setGrpRate(GROUPCODE,LAYERID,TOTAL_INSPECTIONQTY,&apos;ds_defectGrp03&apos;)\"/><Cell col=\"6\" text=\"bind:SUBNAME\" suppress=\"6\"/><Cell col=\"7\" text=\"bind:DEFECTCOUNT\" suppress=\"7\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"!#,##9\"/><Cell col=\"8\" suppress=\"8\" textAlign=\"right\" expr=\"comp.parent.parent.parent.parent.parent.parent.parent.parent.fn_setDetailRate(TOTAL_INSPECTIONQTY, DEFECTCOUNT)\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\" text=\"expr:dataset.getSum(&quot;parseFloat(DEFECTCOUNT)&quot;)\" displaytype=\"number\"/><Cell col=\"8\" text=\"expr:comp.parent.parent.parent.parent.parent.parent.parent.parent.fn_setSumGrpRate(&apos;ds_defectGrpTotal03&apos;)\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.Tabpage1.form.div_grp03.addChild(obj.name, obj);

            obj = new Div("div_grp04","0","932",null,"223","0",null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("div_00");
            this.div_work.form.tab_work.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_subtitleGrp04","0","0","770","34",null,null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.div_grp04.form);
            obj.set_taborder("0");
            obj.set_text("Group4>>1L-2L");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("none");
            this.div_work.form.tab_work.Tabpage1.form.div_grp04.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_grp04",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.div_grp04.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.form.tab_work.Tabpage1.form.div_grp04.addChild(obj.name, obj);

            obj = new BasicChart("chart_grp04","0","34","322","189",null,null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.div_grp04.form);
            obj.set_taborder("2");
            obj.set_border("1px solid #e8e8e8");
            obj.set_binddataset("");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"textfont": "normal 12pt/normal \"맑은 고딕\"",
            		"subtextcolor": "#555555",
            		"subtextalign": "right",
            		"textcolor": "#222222",
            		"subtextfont": "normal 10pt/normal \"맑은 고딕\"",
            		"visible": true
            	},
            	"legend": {
            		"id": "legend",
            		"align": "topcenter",
            		"padding": "10px",
            		"itemtextfont": "normal 9pt/normal \"맑은 고딕\"",
            		"itemtextcolor": "#555555",
            		"markertextgap": 3,
            		"itemautofit": "false",
            		"itemgap": "10",
            		"top": "",
            		"visible": false,
            		"markertype": "square"
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#212121",
            		"textcolor": "#ffffff",
            		"textfont": "normal 9pt/normal \"맑은 고딕\"",
            		"padding": "5px"
            	},
            	"board": {
            		"id": "board",
            		"visible": false
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletextcolor": "#333333",
            		"titletextfont": "normal 700 10pt/normal \"맑은 고딕\"",
            		"labeltextcolor": "#555555",
            		"labeltextfont": "normal 9pt/normal \"맑은 고딕\"",
            		"ticklinestyle": "0px none",
            		"boardlinestyle": "1px solid #f1f1f1",
            		"axislinestyle": "0px none",
            		"gap": "5"
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "series",
            			"barvisible": true,
            			"barfillstyle": "#62be1b,#3c4596,#be0071,#4bc4c2,#f8b334,#9c6add,#2ba3a8,#0c84c1,#ea5d66",
            			"barsize": "60",
            			"itemtextcolor": "#333333",
            			"itemtextfont": "bold 10pt '맑은 고딕'",
            			"valuecolumn": "bind:value",
            			"barlinestyle": "0px none",
            			"valueaxis": "valueaxis0",
            			"lineareafillstyle": "#ffffff",
            			"lineitemtextposition": "centertop",
            			"stacktype": "none"
            		},
            		{
            			"id": "series1",
            			"titletext": "series",
            			"barvisible": false,
            			"barsize": "65",
            			"itemtextvisible": true,
            			"itemtextcolor": "#333333",
            			"itemtextfont": "bold 10pt '맑은 고딕'",
            			"valuecolumn": "bind:percentage",
            			"linevisible": true,
            			"valueaxis": "percentage",
            			"lineitemtextgap": "5",
            			"lineitemtextposition": "centertop",
            			"linestyle": "2px solid #000000",
            			"barlinestyle": "1px solid #000000",
            			"pointlinestyle": "2px solid #000000",
            			"pointfillstyle": "#ffffff",
            			"pointitemtextposition": "centertop",
            			"itemtext": "expr:percentage+'%'",
            			"pointsize": "10"
            		}
            	],
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"boardlinevisible": true,
            			"boardlinestyle": "1px solid #f1f1f1",
            			"labeltextcolor": "#777777",
            			"labeltextfont": "normal 9pt/normal \"맑은 고딕\"",
            			"titletextcolor": "#333333",
            			"titletextfont": "normal 700 10pt/normal \"맑은 고딕\"",
            			"ticklinestyle": "0px none",
            			"labeltype": "number",
            			"titlegap": "10",
            			"tickmax": "80",
            			"tickmin": "0",
            			"axislinestyle": "1px solid #e8e8e8",
            			"visible": "true"
            		},
            		{
            			"id": "percentage",
            			"boardlinevisible": "false",
            			"labeltextcolor": "#777777",
            			"labeltextfont": "normal 9pt/normal \"맑은 고딕\"",
            			"titletextcolor": "#333333",
            			"titletextfont": "normal 700 10pt/normal \"맑은 고딕\"",
            			"ticklinestyle": "1px solid #f1f1f1",
            			"axislinestyle": "1px solid #e8e8e8",
            			"gap": "0",
            			"tickmin": "0",
            			"tickmax": "3",
            			"labelgap": "5",
            			"visible": "true",
            			"opposite": "true",
            			"labeltype": "number",
            			"boardlinestyle": "1px solid #f1f1f1",
            			"labelmask": "#0.00",
            			"titlegap": "0",
            			"titletextalign": "middle"
            		}
            	]
            });
            obj.set_categorycolumn("bind:name");
            this.div_work.form.tab_work.Tabpage1.form.div_grp04.addChild(obj.name, obj);

            obj = new Grid("grd_grp04","332","34",null,"189","0",null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.div_grp04.form);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_defectGrp04");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"LAYER\" tooltiptext=\"44C87C99332444CC8A076FBDB35DA9C2\"/><Cell col=\"2\" text=\"검사수\" tooltiptext=\"QCMFINALINSPECTQTY\"/><Cell col=\"3\" text=\"불량명 (그룹)\" tooltiptext=\"DefectGroupName\"/><Cell col=\"4\" text=\"불량수 (그룹)\" tooltiptext=\"DefectGroupCount2\"/><Cell col=\"5\" text=\"불량율 (그룹)\" tooltiptext=\"DefectGroupRate2\"/><Cell col=\"6\" text=\"불량명 (세부)\" tooltiptext=\"DefectDetailName\"/><Cell col=\"7\" text=\"불량수 (세부)\" tooltiptext=\"DefectDetailCount\"/><Cell col=\"8\" text=\"불량율 (세부)\" tooltiptext=\"DefectDetailRate\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:LAYERNM\" suppress=\"1\"/><Cell col=\"2\" text=\"bind:TOTAL_INSPECTIONQTY\" suppress=\"2\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"!#,##9\"/><Cell col=\"3\" text=\"bind:GROUPNAME\" suppress=\"3\"/><Cell col=\"4\" suppress=\"4\" textAlign=\"right\" expr=\"comp.parent.parent.parent.parent.parent.parent.parent.parent.fn_setTotalDefectCnt(GROUPCODE,LAYERID,&apos;ds_defectGrp04&apos;)\" displaytype=\"mask\" maskeditformat=\"!#,##9\"/><Cell col=\"5\" suppress=\"5\" textAlign=\"right\" expr=\"comp.parent.parent.parent.parent.parent.parent.parent.parent.fn_setGrpRate(GROUPCODE,LAYERID,TOTAL_INSPECTIONQTY,&apos;ds_defectGrp04&apos;)\"/><Cell col=\"6\" text=\"bind:SUBNAME\" suppress=\"6\"/><Cell col=\"7\" text=\"bind:DEFECTCOUNT\" suppress=\"7\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"!#,##9\"/><Cell col=\"8\" suppress=\"8\" textAlign=\"right\" expr=\"comp.parent.parent.parent.parent.parent.parent.parent.parent.fn_setDetailRate(TOTAL_INSPECTIONQTY, DEFECTCOUNT)\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\" text=\"expr:dataset.getSum(&quot;parseFloat(DEFECTCOUNT)&quot;)\" displaytype=\"number\"/><Cell col=\"8\" text=\"expr:comp.parent.parent.parent.parent.parent.parent.parent.parent.fn_setSumGrpRate(&apos;ds_defectGrpTotal04&apos;)\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.Tabpage1.form.div_grp04.addChild(obj.name, obj);

            obj = new Div("div_grp05","0","1165",null,"223","0",null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("div_00");
            this.div_work.form.tab_work.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_subtitleGrp05","0","0","770","34",null,null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.div_grp05.form);
            obj.set_taborder("0");
            obj.set_text("Group5>>1L-2L");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("none");
            this.div_work.form.tab_work.Tabpage1.form.div_grp05.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_grp05",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.div_grp05.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.form.tab_work.Tabpage1.form.div_grp05.addChild(obj.name, obj);

            obj = new BasicChart("chart_grp05","0","34","322","189",null,null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.div_grp05.form);
            obj.set_taborder("2");
            obj.set_border("1px solid #e8e8e8");
            obj.set_binddataset("");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"textfont": "normal 12pt/normal \"맑은 고딕\"",
            		"subtextcolor": "#555555",
            		"subtextalign": "right",
            		"textcolor": "#222222",
            		"subtextfont": "normal 10pt/normal \"맑은 고딕\"",
            		"visible": true
            	},
            	"legend": {
            		"id": "legend",
            		"align": "topcenter",
            		"padding": "10px",
            		"itemtextfont": "normal 9pt/normal \"맑은 고딕\"",
            		"itemtextcolor": "#555555",
            		"markertextgap": 3,
            		"itemautofit": "false",
            		"itemgap": "10",
            		"top": "",
            		"visible": false,
            		"markertype": "square"
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#212121",
            		"textcolor": "#ffffff",
            		"textfont": "normal 9pt/normal \"맑은 고딕\"",
            		"padding": "5px"
            	},
            	"board": {
            		"id": "board",
            		"visible": false
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletextcolor": "#333333",
            		"titletextfont": "normal 700 10pt/normal \"맑은 고딕\"",
            		"labeltextcolor": "#555555",
            		"labeltextfont": "normal 9pt/normal \"맑은 고딕\"",
            		"ticklinestyle": "0px none",
            		"boardlinestyle": "1px solid #f1f1f1",
            		"axislinestyle": "0px none",
            		"gap": "5"
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "series",
            			"barvisible": true,
            			"barfillstyle": "#62be1b,#3c4596,#be0071,#4bc4c2,#f8b334,#9c6add,#2ba3a8,#0c84c1,#ea5d66",
            			"barsize": "60",
            			"itemtextcolor": "#333333",
            			"itemtextfont": "bold 10pt '맑은 고딕'",
            			"valuecolumn": "bind:value",
            			"barlinestyle": "0px none",
            			"valueaxis": "valueaxis0",
            			"lineareafillstyle": "#ffffff",
            			"lineitemtextposition": "centertop",
            			"stacktype": "none"
            		},
            		{
            			"id": "series1",
            			"titletext": "series",
            			"barvisible": false,
            			"barsize": "65",
            			"itemtextvisible": true,
            			"itemtextcolor": "#333333",
            			"itemtextfont": "bold 10pt '맑은 고딕'",
            			"valuecolumn": "bind:percentage",
            			"linevisible": true,
            			"valueaxis": "percentage",
            			"lineitemtextgap": "5",
            			"lineitemtextposition": "centertop",
            			"linestyle": "2px solid #000000",
            			"barlinestyle": "1px solid #000000",
            			"pointlinestyle": "2px solid #000000",
            			"pointfillstyle": "#ffffff",
            			"pointitemtextposition": "centertop",
            			"itemtext": "expr:percentage+'%'",
            			"pointsize": "10"
            		}
            	],
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"boardlinevisible": true,
            			"boardlinestyle": "1px solid #f1f1f1",
            			"labeltextcolor": "#777777",
            			"labeltextfont": "normal 9pt/normal \"맑은 고딕\"",
            			"titletextcolor": "#333333",
            			"titletextfont": "normal 700 10pt/normal \"맑은 고딕\"",
            			"ticklinestyle": "0px none",
            			"labeltype": "number",
            			"titlegap": "10",
            			"tickmax": "80",
            			"tickmin": "0",
            			"axislinestyle": "1px solid #e8e8e8",
            			"visible": "true"
            		},
            		{
            			"id": "percentage",
            			"boardlinevisible": "false",
            			"labeltextcolor": "#777777",
            			"labeltextfont": "normal 9pt/normal \"맑은 고딕\"",
            			"titletextcolor": "#333333",
            			"titletextfont": "normal 700 10pt/normal \"맑은 고딕\"",
            			"ticklinestyle": "1px solid #f1f1f1",
            			"axislinestyle": "1px solid #e8e8e8",
            			"gap": "0",
            			"tickmin": "0",
            			"tickmax": "3",
            			"labelgap": "5",
            			"visible": "true",
            			"opposite": "true",
            			"labeltype": "number",
            			"boardlinestyle": "1px solid #f1f1f1",
            			"labelmask": "#0.00",
            			"titlegap": "0",
            			"titletextalign": "middle"
            		}
            	]
            });
            obj.set_categorycolumn("bind:name");
            this.div_work.form.tab_work.Tabpage1.form.div_grp05.addChild(obj.name, obj);

            obj = new Grid("grd_grp05","332","34",null,"189","0",null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.div_grp05.form);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_defectGrp05");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"LAYER\" tooltiptext=\"44C87C99332444CC8A076FBDB35DA9C2\"/><Cell col=\"2\" text=\"검사수\" tooltiptext=\"QCMFINALINSPECTQTY\"/><Cell col=\"3\" text=\"불량명 (그룹)\" tooltiptext=\"DefectGroupName\"/><Cell col=\"4\" text=\"불량수 (그룹)\" tooltiptext=\"DefectGroupCount2\"/><Cell col=\"5\" text=\"불량율 (그룹)\" tooltiptext=\"DefectGroupRate2\"/><Cell col=\"6\" text=\"불량명 (세부)\" tooltiptext=\"DefectDetailName\"/><Cell col=\"7\" text=\"불량수 (세부)\" tooltiptext=\"DefectDetailCount\"/><Cell col=\"8\" text=\"불량율 (세부)\" tooltiptext=\"DefectDetailRate\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:LAYERNM\" suppress=\"1\"/><Cell col=\"2\" text=\"bind:TOTAL_INSPECTIONQTY\" suppress=\"2\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"!#,##9\"/><Cell col=\"3\" text=\"bind:GROUPNAME\" suppress=\"3\"/><Cell col=\"4\" suppress=\"4\" textAlign=\"right\" expr=\"comp.parent.parent.parent.parent.parent.parent.parent.parent.fn_setTotalDefectCnt(GROUPCODE,LAYERID,&apos;ds_defectGrp05&apos;)\" displaytype=\"mask\" maskeditformat=\"!#,##9\"/><Cell col=\"5\" suppress=\"5\" textAlign=\"right\" expr=\"comp.parent.parent.parent.parent.parent.parent.parent.parent.fn_setGrpRate(GROUPCODE,LAYERID,TOTAL_INSPECTIONQTY,&apos;ds_defectGrp05&apos;)\"/><Cell col=\"6\" text=\"bind:SUBNAME\" suppress=\"6\"/><Cell col=\"7\" text=\"bind:DEFECTCOUNT\" suppress=\"7\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"!#,##9\"/><Cell col=\"8\" suppress=\"8\" textAlign=\"right\" expr=\"comp.parent.parent.parent.parent.parent.parent.parent.parent.fn_setDetailRate(TOTAL_INSPECTIONQTY, DEFECTCOUNT)\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\" text=\"expr:dataset.getSum(&quot;parseFloat(DEFECTCOUNT)&quot;)\" displaytype=\"number\"/><Cell col=\"8\" text=\"expr:comp.parent.parent.parent.parent.parent.parent.parent.parent.fn_setSumGrpRate(&apos;ds_defectGrpTotal05&apos;)\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.Tabpage1.form.div_grp05.addChild(obj.name, obj);

            obj = new Div("div_grp06","0","1398",null,"223","0",null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("div_00");
            this.div_work.form.tab_work.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_subtitleGrp06","0","0","770","34",null,null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.div_grp06.form);
            obj.set_taborder("0");
            obj.set_text("Group6>>1L-2L");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("none");
            this.div_work.form.tab_work.Tabpage1.form.div_grp06.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_grp06",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.div_grp06.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.form.tab_work.Tabpage1.form.div_grp06.addChild(obj.name, obj);

            obj = new BasicChart("chart_grp06","0","34","322","189",null,null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.div_grp06.form);
            obj.set_taborder("2");
            obj.set_border("1px solid #e8e8e8");
            obj.set_binddataset("");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"textfont": "normal 12pt/normal \"맑은 고딕\"",
            		"subtextcolor": "#555555",
            		"subtextalign": "right",
            		"textcolor": "#222222",
            		"subtextfont": "normal 10pt/normal \"맑은 고딕\"",
            		"visible": true
            	},
            	"legend": {
            		"id": "legend",
            		"align": "topcenter",
            		"padding": "10px",
            		"itemtextfont": "normal 9pt/normal \"맑은 고딕\"",
            		"itemtextcolor": "#555555",
            		"markertextgap": 3,
            		"itemautofit": "false",
            		"itemgap": "10",
            		"top": "",
            		"visible": false,
            		"markertype": "square"
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#212121",
            		"textcolor": "#ffffff",
            		"textfont": "normal 9pt/normal \"맑은 고딕\"",
            		"padding": "5px"
            	},
            	"board": {
            		"id": "board",
            		"visible": false
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletextcolor": "#333333",
            		"titletextfont": "normal 700 10pt/normal \"맑은 고딕\"",
            		"labeltextcolor": "#555555",
            		"labeltextfont": "normal 9pt/normal \"맑은 고딕\"",
            		"ticklinestyle": "0px none",
            		"boardlinestyle": "1px solid #f1f1f1",
            		"axislinestyle": "0px none",
            		"gap": "5"
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "series",
            			"barvisible": true,
            			"barfillstyle": "#62be1b,#3c4596,#be0071,#4bc4c2,#f8b334,#9c6add,#2ba3a8,#0c84c1,#ea5d66",
            			"barsize": "60",
            			"itemtextcolor": "#333333",
            			"itemtextfont": "bold 10pt '맑은 고딕'",
            			"valuecolumn": "bind:value",
            			"barlinestyle": "0px none",
            			"valueaxis": "valueaxis0",
            			"lineareafillstyle": "#ffffff",
            			"lineitemtextposition": "centertop",
            			"stacktype": "none"
            		},
            		{
            			"id": "series1",
            			"titletext": "series",
            			"barvisible": false,
            			"barsize": "65",
            			"itemtextvisible": true,
            			"itemtextcolor": "#333333",
            			"itemtextfont": "bold 10pt '맑은 고딕'",
            			"valuecolumn": "bind:percentage",
            			"linevisible": true,
            			"valueaxis": "percentage",
            			"lineitemtextgap": "5",
            			"lineitemtextposition": "centertop",
            			"linestyle": "2px solid #000000",
            			"barlinestyle": "1px solid #000000",
            			"pointlinestyle": "2px solid #000000",
            			"pointfillstyle": "#ffffff",
            			"pointitemtextposition": "centertop",
            			"itemtext": "expr:percentage+'%'",
            			"pointsize": "10"
            		}
            	],
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"boardlinevisible": true,
            			"boardlinestyle": "1px solid #f1f1f1",
            			"labeltextcolor": "#777777",
            			"labeltextfont": "normal 9pt/normal \"맑은 고딕\"",
            			"titletextcolor": "#333333",
            			"titletextfont": "normal 700 10pt/normal \"맑은 고딕\"",
            			"ticklinestyle": "0px none",
            			"labeltype": "number",
            			"titlegap": "10",
            			"tickmax": "80",
            			"tickmin": "0",
            			"axislinestyle": "1px solid #e8e8e8",
            			"visible": "true"
            		},
            		{
            			"id": "percentage",
            			"boardlinevisible": "false",
            			"labeltextcolor": "#777777",
            			"labeltextfont": "normal 9pt/normal \"맑은 고딕\"",
            			"titletextcolor": "#333333",
            			"titletextfont": "normal 700 10pt/normal \"맑은 고딕\"",
            			"ticklinestyle": "1px solid #f1f1f1",
            			"axislinestyle": "1px solid #e8e8e8",
            			"gap": "0",
            			"tickmin": "0",
            			"tickmax": "3",
            			"labelgap": "5",
            			"visible": "true",
            			"opposite": "true",
            			"labeltype": "number",
            			"boardlinestyle": "1px solid #f1f1f1",
            			"labelmask": "#0.00",
            			"titlegap": "0",
            			"titletextalign": "middle"
            		}
            	]
            });
            obj.set_categorycolumn("bind:name");
            this.div_work.form.tab_work.Tabpage1.form.div_grp06.addChild(obj.name, obj);

            obj = new Grid("grd_grp06","332","34",null,"189","0",null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.div_grp06.form);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_defectGrp06");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"LAYER\" tooltiptext=\"44C87C99332444CC8A076FBDB35DA9C2\"/><Cell col=\"2\" text=\"검사수\" tooltiptext=\"QCMFINALINSPECTQTY\"/><Cell col=\"3\" text=\"불량명 (그룹)\" tooltiptext=\"DefectGroupName\"/><Cell col=\"4\" text=\"불량수 (그룹)\" tooltiptext=\"DefectGroupCount2\"/><Cell col=\"5\" text=\"불량율 (그룹)\" tooltiptext=\"DefectGroupRate2\"/><Cell col=\"6\" text=\"불량명 (세부)\" tooltiptext=\"DefectDetailName\"/><Cell col=\"7\" text=\"불량수 (세부)\" tooltiptext=\"DefectDetailCount\"/><Cell col=\"8\" text=\"불량율 (세부)\" tooltiptext=\"DefectDetailRate\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:LAYERNM\" suppress=\"1\"/><Cell col=\"2\" text=\"bind:TOTAL_INSPECTIONQTY\" suppress=\"2\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"!#,##9\"/><Cell col=\"3\" text=\"bind:GROUPNAME\" suppress=\"3\"/><Cell col=\"4\" suppress=\"4\" textAlign=\"right\" expr=\"comp.parent.parent.parent.parent.parent.parent.parent.parent.fn_setTotalDefectCnt(GROUPCODE,LAYERID,&apos;ds_defectGrp06&apos;)\" displaytype=\"mask\" maskeditformat=\"!#,##9\"/><Cell col=\"5\" suppress=\"5\" textAlign=\"right\" expr=\"comp.parent.parent.parent.parent.parent.parent.parent.parent.fn_setGrpRate(GROUPCODE,LAYERID,TOTAL_INSPECTIONQTY,&apos;ds_defectGrp06&apos;)\"/><Cell col=\"6\" text=\"bind:SUBNAME\" suppress=\"6\"/><Cell col=\"7\" text=\"bind:DEFECTCOUNT\" suppress=\"7\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"!#,##9\"/><Cell col=\"8\" suppress=\"8\" textAlign=\"right\" expr=\"comp.parent.parent.parent.parent.parent.parent.parent.parent.fn_setDetailRate(TOTAL_INSPECTIONQTY, DEFECTCOUNT)\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\" text=\"expr:dataset.getSum(&quot;parseFloat(DEFECTCOUNT)&quot;)\" displaytype=\"number\"/><Cell col=\"8\" text=\"expr:comp.parent.parent.parent.parent.parent.parent.parent.parent.fn_setSumGrpRate(&apos;ds_defectGrpTotal06&apos;)\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.Tabpage1.form.div_grp06.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.div_work.form.tab_work);
            obj.set_text("Raw Data");
            obj.set_tooltiptext("TABROWDATA");
            this.div_work.form.tab_work.addChild(obj.name, obj);

            obj = new Static("subtitle1","0","0","73","34",null,null,null,null,null,null,this.div_work.form.tab_work.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_text("Raw Data");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("TABROWDATA");
            this.div_work.form.tab_work.Tabpage3.addChild(obj.name, obj);

            obj = new Grid("grd_rawData","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_work.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_rawData");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"180\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"이벤트 시간\" tooltiptext=\"EVENTTIME\"/><Cell col=\"2\" text=\"설비 타입\" tooltiptext=\"EQUIPMENTTYPE\"/><Cell col=\"3\" text=\"Site ID\" tooltiptext=\"PLANTID\"/><Cell col=\"4\" text=\"회사 ID\" tooltiptext=\"ENTERPRISEID\"/><Cell col=\"5\" text=\"작업장 ID\" tooltiptext=\"WORKAREAID\"/><Cell col=\"6\" text=\"품목코드\" tooltiptext=\"ITEMID\"/><Cell col=\"7\" text=\"Rev\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell col=\"8\" text=\"공정 ID\" tooltiptext=\"PROCID\"/><Cell col=\"9\" text=\"공정 Rev.\" tooltiptext=\"PROCESSSEGMENTVERSION\"/><Cell col=\"10\" text=\"라우팅ID\" tooltiptext=\"PROCESSDEFID\"/><Cell col=\"11\" text=\"라우팅 버전\" tooltiptext=\"PROCESSDEFVER\"/><Cell col=\"12\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell col=\"13\" text=\"Layer No\" tooltiptext=\"LAYERID\"/><Cell col=\"14\" text=\"재작업 여부\" tooltiptext=\"ISREWORK\"/><Cell col=\"15\" text=\"검사 수량\" tooltiptext=\"INSPECTIONQTY\"/><Cell col=\"16\" text=\"분석 대상 수\" tooltiptext=\"ANALYSISTARGET\"/><Cell col=\"17\" text=\"분석 후 양품 수\" tooltiptext=\"ANALYSISRESULT\"/><Cell col=\"18\" text=\"그룹 코드\" tooltiptext=\"GROUPCODE\"/><Cell col=\"19\" text=\"그룹 이름\" tooltiptext=\"GROUPNAME\"/><Cell col=\"20\" text=\"서브 그룹 코드\" tooltiptext=\"SUBCODE\"/><Cell col=\"21\" text=\"서브 그룹 이름\" tooltiptext=\"SUBNAME\"/><Cell col=\"22\" text=\"불량수량\" tooltiptext=\"DEFECTCOUNT\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:EVENTTIME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:EQUIPMENTTYPE\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PLANTID\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:ENTERPRISEID\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:AREAID\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:PROCESSSEGMENTID\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:PROCESSSEGMENTVERSION\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:PROCESSDEFID\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:PROCESSDEFVERSION\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:LOTID\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:LAYERNM\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:ISREWORK\" textAlign=\"left\"/><Cell col=\"15\" text=\"bind:INSPECTIONQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"!#,##9\"/><Cell col=\"16\" text=\"bind:REPAIRTARGETQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"!#,##9\"/><Cell col=\"17\" text=\"bind:REPAIRRESULTQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"!#,##9\"/><Cell col=\"18\" text=\"bind:GROUPCODE\" textAlign=\"left\"/><Cell col=\"19\" text=\"bind:GROUPNAME\" textAlign=\"left\"/><Cell col=\"20\" text=\"bind:SUBCODE\" textAlign=\"left\"/><Cell col=\"21\" text=\"bind:SUBNAME\" textAlign=\"left\"/><Cell col=\"22\" text=\"bind:DEFECTCOUNT\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"!#,##9\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_rawData",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_work.Tabpage3.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.div_work.form.tab_work.Tabpage3.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_resetWork",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","btn_resetWork:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","142","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_text("Layer별 불량 현황");
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
            obj = new Layout("default","",1647,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_calendar.xfdl");
            this._addPreloadList("fdl","dfm::dfm_multiCombo.xfdl");
        };
        
        // User Script
        this.addIncludeScript("DFM00400M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("DFM00400M.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("DFM00400M.xfdl","lib::lib_mtm.xjs");
        this.addIncludeScript("DFM00400M.xfdl","lib::lib_base.xjs");
        this.addIncludeScript("DFM00400M.xfdl","lib::lib_array.xjs");
        this.addIncludeScript("DFM00400M.xfdl","lib::lib_color.xjs");
        this.registerScript("DFM00400M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: Defect Map / Layer별 불량 현황
         * 파일명 		: DFM00400M.xfdl
         * 작성자 		: 김진현
         * 작성일 		: 2021.06.01
         *
         * 설  명		: Defect Map / Layer별 불량 현황
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.06.01	김진현   	최초작성
         * 2021.07.16	김진현		소수점 표현 (3자리 -> 2자리로 변경)
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_mtm.xjs"); /*include "lib::lib_mtm.xjs"*/;	//MTM 공통 라이브러리 include

        // 이미지 동적 생성 관련
        this.executeIncludeScript("lib::lib_base.xjs"); /*include "lib::lib_base.xjs"*/;
        this.executeIncludeScript("lib::lib_array.xjs"); /*include "lib::lib_array.xjs"*/;
        this.executeIncludeScript("lib::lib_color.xjs"); /*include "lib::lib_color.xjs"*/;
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/


        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);

        	// 검색조건 달력 설정
        	this.tab_search.tab_search01.form.cbo_period.set_value("thisweek");
        	this.tab_search_tab_search01_cbo_period_onitemchanged();

        	this.tab_search.tab_search01.form.div_dateFrom.form.pdiv_data.form.calStart.addEventHandler("onchanged", this.fn_preiodChang, this);
        	this.tab_search.tab_search01.form.div_dateTo.form.pdiv_data.form.calStart.addEventHandler("onchanged", this.fn_preiodChang, this);


        	// x 버튼 이벤트 설정(Lot)
        	this.tab_search.tab_search01.form.btn_edt_lotNo.setEventHandler("onclick", this.fn_xClickLotNo, this );

        	// x 버튼 이벤트 설정(품목코드)
        	this.tab_search.tab_search01.form.btn_edt_itemCode.setEventHandler("onclick", this.fn_xClickItemNo, this );
        	// x 버튼 이벤트 설정(Layer)
        	this.tab_search.tab_search01.form.btn_edt_layer.setEventHandler("onclick", this.fn_xClickLayer, this );

        	// 검사구분 AOI로 고정
        	this.tab_search.tab_search01.form.cmb_inpType.set_index(0);


        	// [Defect Map List] - Total
        	//sort 제거
        	this.div_work.form.tab_work.Tabpage1.form.div_total.form.grd_total.removeEventHandler("onheadclick", this.nfn_grd_onheadclick , this);
        	//filter 제거
        	this.div_work.form.tab_work.Tabpage1.form.div_total.form.grd_total.removeEventHandler("onexpandup", this.nfn_grd_onexpandup , this);
        	this.div_work.form.tab_work.Tabpage1.form.div_total.form.grd_total.removeEventHandler("onmousemove", this.nfn_grd_onmousemove, this); //filter 아이콘 안나오게 처리

        	// 하단 sub 그리드 헤더 정리
        	for(var h=1; h<=6; h++)
        	{
        		//sort 제거
        		this.div_work.form.tab_work.Tabpage1.form.all["div_grp0"+h].form.all["grd_grp0"+h].removeEventHandler("onheadclick", this.nfn_grd_onheadclick , this);
        		//filter 제거
        		this.div_work.form.tab_work.Tabpage1.form.all["div_grp0"+h].form.all["grd_grp0"+h].removeEventHandler("onexpandup", this.nfn_grd_onexpandup , this);
        		this.div_work.form.tab_work.Tabpage1.form.all["div_grp0"+h].form.all["grd_grp0"+h].removeEventHandler("onmousemove", this.nfn_grd_onmousemove, this); //filter 아이콘 안나오게 처리

        	}

        	// total 제외 그리드 / 차트 안보이게 설정
        	this.fn_setChartGridVisibl(0);



        	/*

        	// 검색조건 콤보 설정 (Rev -> 공정)
        	this.fn_setRev("");

        	// 품목별 현황 초기 Tab적용
        	this.fn_setInitTab();

        	// [조회 조건 품목코드 선택시 조회 그리드]
        	//sort 제거	(품목별 현황 - 품목선택한경우)
        	this.div_work.form.tab_work.tabpage_mainItem.form.grd_inputItem.removeEventHandler("onheadclick", this.nfn_grd_onheadclick , this);
        	//filter 제거 (품목별 현황 - 품목선택한경우)
        	this.div_work.form.tab_work.tabpage_mainItem.form.grd_inputItem.removeEventHandler("onexpandup", this.nfn_grd_onexpandup , this);
        	this.div_work.form.tab_work.tabpage_mainItem.form.grd_inputItem.removeEventHandler("onmousemove", this.nfn_grd_onmousemove, this); //filter 아이콘 안나오게 처리


        	// [Defect Map List]
        	//sort 제거	(품목별 현황 - 품목선택한경우)
        	this.div_work.form.tab_work.tabpage_defectmap.form.grd_defectGrp.removeEventHandler("onheadclick", this.nfn_grd_onheadclick , this);
        	//filter 제거 (품목별 현황 - 품목선택한경우)
        	this.div_work.form.tab_work.tabpage_defectmap.form.grd_defectGrp.removeEventHandler("onexpandup", this.nfn_grd_onexpandup , this);
        	this.div_work.form.tab_work.tabpage_defectmap.form.grd_defectGrp.removeEventHandler("onmousemove", this.nfn_grd_onmousemove, this); //filter 아이콘 안나오게 처리


        	// defect map 설정
        	// 검사유형 (AOI만 선택 불가능)
        	this.div_work.form.tab_work.tabpage_defectmap.form.cmb_inpType.set_index(0);
        	this.div_work.form.tab_work.tabpage_defectmap.form.cmb_inpType.set_readonly(true);
        	*/
        };



        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색(메인 -  고객정보 그리드)
         */
        this.fn_search = function (obj, e)
        {

        	// 품목코드 유무에 따른 분기 처리 진행
        	this.ds_rawData.clearData();			// raw data용 ds 초기화
        	this.ds_searchMain.clearData();			// 조회 조건 초기화

        	this.ds_cmbDefectGrp.clearData();		// 불량그룹 콤보ds 초기화
        	this.ds_cmbDefectCode.clearData();		// 불량코드 콤보ds 초기화
        	this.ds_defectGrpT.clearData();			// Total 그리드 정보 ds 초기화
        	this.ds_chartColor.clearData();			// 차트 불량그룹별 색상 정보 ds
        	this.ds_chartTotal.clearData();			// Total 차트 ds 초기화


        	// 초기화 필요 (그리드 및 차트)
        	this.ds_searchMain.addRow();

        	var nPeriodfr = this.tab_search.tab_search01.form.div_dateFrom.form.calStart.value;
        	var nPeriodto = this.tab_search.tab_search01.form.div_dateTo.form.calStart.value;

        	// total 제외 그리드 / 차트 안보이게 설정
        	this.fn_setChartGridVisibl(0);

        	// 하단 sub ds 초기화
        	for(var h=1; h<=6; h++)
        	{
        		this.all["ds_defectGrp0"+h].clearData();
        		this.all["ds_chart0"+h].clearData();
        		// (21.06.28) (Total용 추가)
        		this.all["ds_defectGrpTotal0"+h].clearData();
        	}


        	// 날짜체크
        	if( nPeriodfr  > nPeriodto )
        	{
        		this.gfn_Message("ValidateDate", "", "warning", "ok");//시작 일자는 종료일자보다 작아야합니다.
        		return false;
        	}
        	var nPeriodfr8 = nPeriodfr.substr(0,8);
        	var nPeriodto8 = nPeriodto.substr(0,8);

        	// 날짜 체크
        	if(!this.gfn_isDate(nPeriodfr8) || !this.gfn_isDate(nPeriodto8))
        	{
        		this.gfn_Message("ValidateMWONONEDATE", "", "warning", "ok");//잘못된날짜데이터입니다.
        		return;
        	}


        	// 필수값 체크 (AOI인 경우 , 품목코드, Layer 필수입력값)
        	if(!this.fn_chkRequired()) return;

        	this.ds_searchMain.setColumn(0,"P_CONPERIOD_PERIODFR"	, nPeriodfr.substr(0,14)); 	// 시작일
        	this.ds_searchMain.setColumn(0,"P_CONPERIOD_PERIODTO"	, nPeriodto.substr(0,14)); 	// 종료일

        	this.ds_searchMain.setColumn(0,"P_LOTID"				, this.tab_search.tab_search01.form.edt_lotNo.value); 		// Lot No
        	this.ds_searchMain.setColumn(0,"P_PRODUCTDEFID"			, this.tab_search.tab_search01.form.edt_itemCode.value); 	// 품목코드
        	// 품목 버전
        	var nRevDs = this.tab_search.tab_search01.form.div_revMulti.form;
        	var nFs			= "";
        	for(var i=0; i<nRevDs.ds_initData.rowcount; i++){
        		var chk 	= nRevDs.ds_initData.getColumn(i,"CHK");
        		var code 	= nRevDs.ds_initData.getColumn(i,"CODE");
        		if(chk == 1 && !this.gfn_isNull(code))
        		{
        			nFs += this.gfn_isNull(nFs)? code : ", " +code;
        		}
        	}

        	this.ds_searchMain.setColumn(0,"P_PRODUCTDEFVERSION"	, nFs); 													// 품목 버전
        	this.ds_searchMain.setColumn(0,"P_INSPECTIONTYPE"		, this.tab_search.tab_search01.form.cmb_inpType.value); 	// 검사구분
        	// layer
        	var nLayerCnt = this.ds_layerGroupSum.rowcount;
        	var nFl			= "";
        	for(var j=0; j<nLayerCnt; j++){
        		var layer 	= this.ds_layerGroupSum.getColumn(j,"LAYER");

        		nFl += this.gfn_isNull(nFl)? layer : ", " +layer;

        	}
        	this.ds_searchMain.setColumn(0,"P_LAYERID"				, nFl); 	// Layer

        	this.ds_searchMain.setColumn(0,"P_ENTERPRISEID"			, this.gf_getEnterpriseId()); 	// ENTERPRISEID


        	//trace(" [메인 조호 조건] : "+this.ds_searchMain.saveXML());


        	// 그리드(불량율 계산할 값도 조회 필요  / 콤보 / 차트 값)
        	var sSvcID 			= "selectDefectRateByLayerList";
        	var sController 	= "/dfm00400/selectDefectRateByLayerList.do";
        	var sInDatasets 	= "INPUT=ds_searchMain";
        	var sOutDatasets 	= "ds_rawData=output1 ds_cmbDefectGrp=output2 ds_cmbDefectCode=output3 ds_defectGrpT=output4 ds_chartColor=output5";		//색상정보 조회 해야됨
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

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
        	if (errCD != 0)
        	{
        		if (trId == "saveProcGrpList")
        		{
        			var msgArray = errMsg.split(("|"));
        			if(msgArray.length==2) {
        				this.gfn_Message(msgArray[0], "\n"+msgArray[1], "error", "ok");
        				return;
        			} else {
        				this.gfn_Message("ProcessingError", "\n"+errMsg, "error", "ok");
        				return;
        			}
        		}
        		if(trId == "selectLayerImageInfo")
        		{
        			var msgArray = errMsg.split(("|"));
        			if(msgArray.length==2) {
        				this.gfn_Message(msgArray[0], "\n"+msgArray[1], "error", "ok");
        				return;
        			}else {
        				this.gfn_Message("ProcessingError", "\n"+errMsg, "error", "ok");
        				return;
        			}
        		}
        		else {
        			this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        			return;
        		}
        		return;
        	}

        	switch(trId) {
        		case "selectProductDefVersionByRate": 			//[조회조건] rev 조회 성공

        			// 멀티 콤보 적용
        			//trace(" 콤보값 조회 결과 : "+this.ds_revCombo.saveXML());

        			// (21.06.18) 전체조회 선택 된상태여야 한다 초기에.
        			this.ds_revCombo.setColumn(0,"CHK",1);


        			// 하위 멀티 콤보 이벤트 설정.
        			this.tab_search.tab_search01.form.div_revMulti.form.fn_init_multicombo_data(this.ds_revCombo);
        			this.tab_search.tab_search01.form.div_revMulti.form.ds_initData.applyChange();

        			// 연결된 하위 멀티 콤보 초기화
        			this.tab_search.tab_search01.form.div_revMulti.form.btn_hide.addEventHandler( "onclick"
        									, this.fn_clickRev
        									, this
        									);
        			this.tab_search.tab_search01.form.div_revMulti.form.btn_dropcombo.addEventHandler( "onclick"
        									, this.fn_clickRev
        									, this
        									);


        			// Layer 초기화
        			this.ds_layerGroupSum.clearData();
        			this.tab_search.tab_search01.form.edt_layer.set_value("");

        			// 조회 ()
        			//this.fn_setProc();

        			break;

        		case "selectDefectRateByLayerList": 					//[ 메인 조회]
        			if(this.ds_rawData.rowcount == 0)
        			{
        				this.gfn_Message("NoSelectData", null, "warning", "ok");
        				return;
        			}
        			//trace(" 조회 성공 : "+this.ds_cmbDefectCode.rowcount);

        			// 조회 후 멀티 콤보(상위설정)
        			this.div_work.form.tab_work.Tabpage1.form.div_total.form.div_defectGrpMulti.form.fn_init_multicombo_data(this.ds_cmbDefectGrp);
        			this.div_work.form.tab_work.Tabpage1.form.div_total.form.div_defectGrpMulti.form.ds_initData.applyChange();
        			// 연결된 하위 멀티 콤보 초기화
        			this.div_work.form.tab_work.Tabpage1.form.div_total.form.div_defectGrpMulti.form.btn_hide.addEventHandler( "onclick"
        									, this.fn_clickDefectGrp
        									, this
        									);
        			this.div_work.form.tab_work.Tabpage1.form.div_total.form.div_defectGrpMulti.form.btn_dropcombo.addEventHandler( "onclick"
        									, this.fn_clickDefectGrp
        									, this
        									);
        			// 하위 멀티 콤보 이벤트 설정.
        			this.div_work.form.tab_work.Tabpage1.form.div_total.form.div_defectCodeMulti.form.fn_init_multicombo_data(this.ds_cmbDefectCode);
        			this.div_work.form.tab_work.Tabpage1.form.div_total.form.div_defectCodeMulti.form.ds_initData.applyChange();
        			this.div_work.form.tab_work.Tabpage1.form.div_total.form.div_defectCodeMulti.form.btn_hide.addEventHandler( "onclick"
        									, this.fn_clickDefectCode
        									, this
        									);
        			this.div_work.form.tab_work.Tabpage1.form.div_total.form.div_defectCodeMulti.form.btn_dropcombo.addEventHandler( "onclick"
        									, this.fn_clickDefectCode
        									, this
        									);

        			// Total 차트 설정
        			this.fn_setChartLayer();

        			// group 수
        			var nGroupCnt 	= 0;
        			var nGrpSumCnt 	= this.ds_layerGroupSum.rowcount;
        			var nPreGrpCd	= "";
        			for(var i=0; i<nGrpSumCnt; i++)
        			{
        				var nGrpCd	= this.ds_layerGroupSum.getColumn(i,"GROUP");
        				if(nPreGrpCd != nGrpCd)
        				{
        					nGroupCnt++;
        					nPreGrpCd = nGrpCd;
        				}
        			}

        			//----------------------------------------------------------
        			// 불량수 0 인것 제외
        			this.ds_defectGrpT.filter("");		// 필터 내용 초기화
        			this.ds_defectGrpTcopy.clearData();
        			this.ds_defectGrpTcopy.copyData(this.ds_defectGrpT, true);		// 필터링 후 설정
        			this.ds_defectGrpT.filter("DEFECTCOUNT != '0'");
        			//----------------------------------------------------------


        			// total 제외 그리드 / 차트 안보이게 설정
        			this.fn_setChartGridVisibl(nGroupCnt);

        			// Total 하단의 그리드 및 차트 설정
        			this.fn_setSubChartGrid();

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
        		case "SCH_LOTNo" :			// 필터 Lot No

        			var nLotNo 		= rtn[0];
        			var nItemCode	= rtn[1];
        			var nItemNm		= rtn[2];

        			this.tab_search.tab_search01.form.edt_lotNo.set_value(nLotNo);
        			this.tab_search.tab_search01.form.edt_itemCode.set_value(nItemCode);
        			this.tab_search.tab_search01.form.edt_itemNm.set_value(nItemNm);

        			// Rev 조회(필요함)
        			this.fn_setRev(nItemCode);


        			break;

        		case "SCH_ITEMCODE" :			// 필터 품목코드

        			var nItemCode	= rtn[0];
        			var nItemNm		= rtn[1];

        			this.tab_search.tab_search01.form.edt_lotNo.set_value("");
        			this.tab_search.tab_search01.form.edt_itemCode.set_value(nItemCode);
        			this.tab_search.tab_search01.form.edt_itemNm.set_value(nItemNm);

        			// Rev 조회(필요함)
        			this.fn_setRev(nItemCode);


        			break;
        		case "SCH_LAYER" :				// 필터 Layer
        			var nLen = rtn.length;

        			if(nLen != 0)
        			{
        				var nStandard = "";

        				// ds에 설정
        				this.ds_layerGroupSum.clearData();

        				for(var i=0; i<nLen; i++)
        				{
        					nStandard += i==0? rtn[i][0] : ", " +rtn[i][0];
        					var nAdd = this.ds_layerGroupSum.addRow();
        					this.ds_layerGroupSum.setColumn(nAdd,"LAYER",rtn[i][0]);
        					this.ds_layerGroupSum.setColumn(nAdd,"GROUP",rtn[i][1]);
        				}

        				this.tab_search.tab_search01.form.edt_layer.set_value(nStandard);
        				//trace(" ==========> : "+this.ds_layerGroupSum.saveXML());
        			}
        			else
        			{
        				// ds에 설정
        				this.ds_layerGroupSum.clearData();
        				this.tab_search.tab_search01.form.edt_layer.set_value("");
        			}
        			break;

        		default :
        			break;
        	}
        };



         /*
         * 기능(공통팝업) : 조회
         */
        this.fn_openPop = function(svcId, popId, pArg)
        {

        	var popupId = svcId;
        	var oArg = {};
        	var opts = "width=500,height=400";

        	oArg.arg_type = "B";		// 단일 선택 / 자동조회
        	oArg.arg_popupCd = popId;
        	oArg.arg_popupNm = "";
        	oArg.arg_paramCols = this.gfn_getExtractArgument(pArg,"name");
        	oArg.arg_paramValues = this.gfn_getExtractArgument(pArg,"value");

        	if(popId=="P00278"){ //품목(필터)
        		oArg.arg_rtnCols = "P_PRODUCTDEFID|PROCESSDEFNAME";			// 리턴 받을 값

        		var nItemCode = this.tab_search.tab_search01.form.edt_itemCode.value;

        		oArg.arg_searchStr = "P_PRODUCTDEFID="+nItemCode;	// 검색 조건(이미 입력 된값)
        	}

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        }

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 이벤트 : 조회조건- 조회기간 직접 변경시
         */
        this.fn_preiodChang = function(obj,e)
        {
        	if (!this.nfn_isNull(this.tab_search.tab_search01.form.cbo_period.value))
        	{
        		this.tab_search.tab_search01.form.cbo_period.set_value(undefined);		// 21.05.20 명보다는 코드로 설정
        	}
        };

        /*
         * 품목코드 x 버튼 클릭시
         */
        this.fn_xClickItemNo = function ()
        {
        	// 지우고 콤보 초기화 필요
        	this.tab_search.tab_search01.form.edt_itemCode.set_value("");
        	this.tab_search.tab_search01.form.edt_itemNm.set_value("");
        	// Rev 조회
        	this.fn_setRev("");

        };

        /*
         * LotNo x 버튼 클릭시
         */
        this.fn_xClickLotNo = function ()
        {
        	// 지우고 콤보 초기화 필요
        	this.tab_search.tab_search01.form.edt_lotNo.set_value("");
        	this.tab_search.tab_search01.form.edt_itemCode.set_value("");
        	this.tab_search.tab_search01.form.edt_itemNm.set_value("");
        	// Rev 조회
        	this.fn_setRev("");
        };


        /*
         * Layer x 버튼 클릭시
         */
        this.fn_xClickLayer = function ()
        {
        	// ds에 설정
        	this.ds_layerGroupSum.clearData();
        	this.tab_search.tab_search01.form.edt_layer.set_value("");
        };

        /*
         * 품목코드에 해당 하는 Rev 조회
         */
        this.fn_setRev = function (nItemCd)
        {
        	//trace(" [조회 조건] ===> : "+nItemCd);
        	this.ds_revCombo.clearData();
        	this.ds_searchCombo.clearData();
        	this.ds_searchCombo.addRow();
        	this.ds_searchCombo.setColumn(0,"P_PRODUCTDEFID",nItemCd);

        	var sSvcID 			= "selectProductDefVersionByRate";
        	var sController 	= "/dfm00400/selectProductDefVersionByRate.do";
        	var sInDatasets 	= "INPUT=ds_searchCombo";
        	var sOutDatasets 	= "ds_revCombo=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };

        /*
         * 멀티 콤보 활성화시...
         */
        this.fn_clickRev = function (obj, e)
        {
        	// Layer 정보 초기화
        	this.ds_layerGroupSum.clearData();
        	this.tab_search.tab_search01.form.edt_layer.set_value("");
        }


        /*
         * 하위 멀티 콤보값 초기화
         */
        this.fn_clickDefectGrp = function (obj, e)
        {
        	//trace("이벤트 발생!!!! 하위 데이터셋 초기화");

        	this.div_work.form.tab_work.Tabpage1.form.div_total.form.div_defectCodeMulti.form.fn_init_multicombo_data(this.ds_cmbDefectCode);
        	this.div_work.form.tab_work.Tabpage1.form.div_total.form.div_defectCodeMulti.form.ds_initData.applyChange();
        	this.div_work.form.tab_work.Tabpage1.form.div_total.form.div_defectCodeMulti.form.edt_comboResult.set_value("데이터 미 선택");
        };


        /*
         * 하위 멀티 콤보 설정
         */
        this.fn_clickDefectCode =  function (obj, e)
        {
        	//trace("상위값 있으면 필터링 걸어야 한다.");
        	var nPreFilter 	= "";
        	nPreFilter 		= this.ds_cmbDefectCode.filterstr;
        	//trace(" [form의 데이터셋] ====> : "+nPreFilter);
        	var nDefectGrpDs = this.div_work.form.tab_work.Tabpage1.form.div_total.form.div_defectGrpMulti.form;

        	var nFs			= "";
        	this.ds_cmbDefectCode.filter("");		// 필터 초기화
        	for(var i=0; i<nDefectGrpDs.ds_initData.rowcount; i++){
        		var chk 	= nDefectGrpDs.ds_initData.getColumn(i,"CHK");
        		var code 	= nDefectGrpDs.ds_initData.getColumn(i,"CODE");
        		//trace(" [form의 데이터셋 체크값] ====> : "+chk+" || [code] : "+code);
        		if(chk == 1 && !this.gfn_isNull(code))
        		{
        			nFs += this.gfn_isNull(nFs) ? "P_CODE=='*'||P_CODE=='"+code+"'" : "||P_CODE=='"+code+"'";
        			//trace(" [필터 조건 설정] ====");
        		}
        	}
        	/*
        	trace("필터 조건 : "+nFs);
        	trace("(필터 설정) ====> : "+(nFs != nPreFilter));
        	trace("----------------------------------");
        	trace(nFs);
        	trace(nPreFilter);
        	trace("----------------------------------");
        	*/
        	this.ds_cmbDefectCode.filter(nFs);			// 필터 초기화(21.06.04) 필터 하나 추가
        	if(nFs != nPreFilter)			// 이전 필터 조건과 같지 않으면 설정(21.05.12) 이전 선택값 가지고 있기 위해
        	{
        		this.ds_cmbDefectCode.filter(nFs);		// 필터 초기화
        		this.div_work.form.tab_work.Tabpage1.form.div_total.form.div_defectCodeMulti.form.fn_init_multicombo_data(this.ds_cmbDefectCode);
        		this.div_work.form.tab_work.Tabpage1.form.div_total.form.div_defectCodeMulti.form.ds_initData.applyChange();
        		this.div_work.form.tab_work.Tabpage1.form.div_total.form.div_defectCodeMulti.form.edt_comboResult.set_value("데이터 미 선택");
        	}
        }


        /*
         *	조회시 필수값 체크(AOI인 경우만 Layer 필수값 현재는 AOI만 사용 가능)
         */
        this.fn_chkRequired = function ()
        {
        	var nItem	= this.tab_search.tab_search01.form.edt_itemCode.value;
        	var nType	= this.tab_search.tab_search01.form.cmb_inpType.value;
        	var nLayer	= this.tab_search.tab_search01.form.edt_layer.value;
        	if(this.gfn_isNull(nItem) )
        	{
        		// 필수값 입력
        		this.gfn_Message("InputSomeThing",this.nfn_getDictionaryname("F112527EF89E45D8BA876725E97E3B30",true) , "warning","ok");// 품목코드+"을(를) 입력 해주세요");
        		return false;
        	}

        	if(nType == "AOI")
        	{
        		if(this.gfn_isNull(nLayer) )
        		{
        			// 필수값 입력
        			this.gfn_Message("InputSomeThing",this.nfn_getDictionaryname("9BA0994900D94F21A6709010DBAE0532",true) , "warning","ok");// 품목코드+"을(를) 입력 해주세요");
        			return false;
        		}
        	}

        	return true;

        };

        /*
         * 세부 불량 율 계산
         */
        this.fn_setDetailRate = function (nInspQty, nDefectQty)
        {
        	//trace(" ----------------- : "+nInspQty+" | "+nDefectQty+" | "+nPos+" | "+nDs);
        	var nR = 0;
        	if(!this.gfn_isNull(nInspQty) && !this.gfn_isNull(nDefectQty))
        	{
        		var nPreRate = parseFloat(nDefectQty) / parseFloat(nInspQty) * 100;
        		nR = nexacro.round(nPreRate, 2);				// (소수점 2째 자리) (21.07.16)
        	}

        	return nR+"%";

        };
        /*
         * 세부 Sum불량율(Layer별로 불량그룹 불량율)	 ds 넘겨 받음
         */
        this.fn_setSumGrpRate = function (nDs)
        {
        	var nChkDs	= this.all[nDs];		// 선택된 ds

        	var nTotal	= 0;
        	var nGrpQty = 0;
        	var nCnt = nChkDs.rowcount;

        	//******************************************************************[21.06.21]
        	// 이전 검사공정 id (21.06.21)
        	//var nPreProcId	= "";
        	var nArrProcId	= [];
        	nArrProcId.length = 0;
        	//******************************************************************

        	// 모든 불량수
        	for(var i=0; i<nCnt; i++)
        	{
        		var nDefectQty 	= nChkDs.getColumn(i,"DEFECTCOUNT");
        		var nTotalQty 	= nChkDs.getColumn(i,"TOTAL_INSPECTIONQTY");
        		nGrpQty += parseInt(nDefectQty);

        		/*
        		if(i == 0)
        		{
        			nTotal = nTotalQty;
        		}
        		*/
        		//******************************************************************[21.06.21]
        		// (21.06.21) 검사공정이 달라지면 합계를 더해야 한다.
        		var nProcId =  nChkDs.getColumn(i,"PROCESSSEGMENTID");

        		var nArrLen = nArrProcId.length;
        		var nChkId  = true;
        		for(var a=0; a<nArrLen; a++)
        		{
        			if(nArrProcId[a] == nProcId)		// 기존의 공정의 검사 수량이 존재하는지 판단
        			{
        				nChkId = false;
        			}
        		}
        		if(nChkId)
        		{
        			nArrProcId.push(nProcId);
        			nTotal = nTotal + nTotalQty;
        		}
        		//******************************************************************
        	}
        	//trace(" ###[" +nDs+ "] ##(총 수)## : "+nTotal);

        	// 불량율 계산
        	var nR = 0;

        	if(!this.gfn_isNull(nTotal) && !this.gfn_isNull(nGrpQty))
        	{
        		var nPreRate = parseFloat(nGrpQty) / parseFloat(nTotal) * 100;
        		nR = nexacro.round(nPreRate, 2);				// (소수점 2째 자리) (21.07.16)

        	}

        	if(nTotal == 0 && nGrpQty == 0)
        	{
        		nR = 0;
        	}
        	return nR+"%";
        };

        /*
         * 세부 Sum불량율(Layer별로 불량그룹 불량율)	 ds 넘겨 받음 -> Total만 따로 생성 (검사수가 공정순수가 가장 큰 것의 검사수로만 계산하면됨)
         * (21.07.02) 수정
         */
        this.fn_setSumGrpRateTotal = function (nDs)
        {
        	var nChkDs	= this.all[nDs];		// 선택된 ds

        	var nTotal	= 0;
        	var nGrpQty = 0;
        	var nCnt = nChkDs.rowcount;

        	//******************************************************************[21.06.21]
        	// 이전 검사공정 id (21.06.21)
        	//var nPreProcId	= "";
        	var nArrProcId	= [];
        	nArrProcId.length = 0;
        	//******************************************************************


        	// (21.07.02) 공정 수순 최대값
        	var nMaxSeq = 0;

        	// 모든 불량수
        	for(var i=0; i<nCnt; i++)
        	{
        		var nDefectQty 	= nChkDs.getColumn(i,"DEFECTCOUNT");
        		var nTotalQty 	= nChkDs.getColumn(i,"TOTAL_INSPECTIONQTY");
        		nGrpQty += parseInt(nDefectQty);

        		/*
        		if(i == 0)
        		{
        			nTotal = nTotalQty;
        		}
        		*/
        		//******************************************************************[21.06.21]
        		// (21.06.21) 검사공정이 달라지면 합계를 더해야 한다.
        		var nProcId =  nChkDs.getColumn(i,"PROCESSSEGMENTID");

        		// (21.07.02) - 공정 수순 값
        		var nOpeSeq =  nChkDs.getColumn(i,"OPERATIONSEQUENCE");
        		if(nOpeSeq > nMaxSeq)
        		{
        			nMaxSeq = nOpeSeq;
        			nTotal = nTotalQty;
        		}

        		var nArrLen = nArrProcId.length;
        		var nChkId  = true;
        		for(var a=0; a<nArrLen; a++)
        		{
        			if(nArrProcId[a] == nProcId)		// 기존의 공정의 검사 수량이 존재하는지 판단
        			{
        				nChkId = false;
        			}
        		}
        		if(nChkId)
        		{
        			nArrProcId.push(nProcId);
        			//(21.07.02) - 공정 수순에 따른 최대값 1개만 담음 (변경)
        			//nTotal = nTotal + nTotalQty;
        		}
        		//******************************************************************
        	}
        	//trace(" ###[" +nDs+ "] ##(전체 검사수)## : "+nTotal+" || "+nCnt);

        	/****************************************************
        	 월요일 문의 할 것
        		ㄴ 7/5 기타의 경우 불량수가 0이다
        		ㄴ 그래서 화면에선 안보이는데 공정 수순이 aoi외층이 가장 크다 그래서
        		ㄴ 2200 / 179520 * 100 이된다. total의 경우.. 확인 필요 이게 맞는지... 불량수가 0인 경우 ..
        	****************************************************/

        	// 불량율 계산
        	var nR = 0;

        	if(!this.gfn_isNull(nTotal) && !this.gfn_isNull(nGrpQty))
        	{
        		var nPreRate = parseFloat(nGrpQty) / parseFloat(nTotal) * 100;
        		nR = nexacro.round(nPreRate, 2);				// (소수점 2째 자리) (21.07.16)

        	}

        	if(nTotal == 0 && nGrpQty == 0)
        	{
        		nR = 0;
        	}
        	return nR+"%";
        };

        /*
         * 불량수(Layer별로 불량그룹)	- ds넘겨 받음
         */
        this.fn_setTotalDefectCnt  = function (grpCode,grpLayer, nDs)
        {
        	//trace(" ---(grpCode) : "+grpCode);
        	var nChkDs	= this.all[nDs];		// 선택된 ds
        	var nGrpQty = 0;
        	var nCnt = nChkDs.rowcount;
        	for(var i=0; i<nCnt; i++)
        	{
        		var nGrpCode 	= nChkDs.getColumn(i,"GROUPCODE");
        		var nDefectQty 	= nChkDs.getColumn(i,"DEFECTCOUNT");
        		var nLayer 	    = nChkDs.getColumn(i,"LAYERID");

        		if((nGrpCode == grpCode) && (grpLayer == nLayer))
        		{
        			nGrpQty += parseInt(nDefectQty);
        		}
        	}
        	return nGrpQty;
        };

        /*
         * 불량율(Layer별로 불량그룹 불량율) - ds넘겨 받음
         */
        this.fn_setGrpRate = function (grpCode,grpLayerId,total,nDs)
        {
        	var nChkDs	= this.all[nDs];		// 선택된 ds
        	var nGrpQty = 0;
        	var nCnt = nChkDs.rowcount;
        	for(var i=0; i<nCnt; i++)
        	{
        		var nGrpCode 	= nChkDs.getColumn(i,"GROUPCODE");
        		var nDefectQty 	= nChkDs.getColumn(i,"DEFECTCOUNT");
        		var nLayerId 	= nChkDs.getColumn(i,"LAYERID");
        		if((nGrpCode == grpCode) && (grpLayerId == nLayerId))
        		{
        			nGrpQty += parseInt(nDefectQty);
        		}
        	}

        	var nR = 0;
        	if(!this.gfn_isNull(total) && !this.gfn_isNull(nGrpQty))
        	{
        		var nPreRate = parseFloat(nGrpQty) / parseFloat(total) * 100;
        		nR = nexacro.round(nPreRate, 2);		// (21.07.20) 소수점 2자리 누락된 부분 적용
        	}
        	return nR+"%";
        };


        /*
         * 차트 값 설정   (Total - 차트)
         */
        this.fn_setChartLayer = function ()
        {

        	this.ds_defectGrpChartTotal.filter("");		// 필터 내용 초기화

        	this.ds_defectGrpChartTotal.clearData();
        	this.ds_defectGrpChartTotal.copyData(this.ds_defectGrpT, true);		// 필터링 후 설정
        	this.ds_chartTotal.clearData();

        	this.ds_defectGrpChartTotal.set_keystring("S:+LAYERID");				// Layer 기준으로 차트 구성

        	// (21.06.25) 불량수가 0인경우 안나오도록 설정 DEFECTCOUNT
        	//------------------------------------------------------------------------------
        	//trace(" ====> Total 차트 설정(전) : "+this.ds_defectGrpChartTotal.saveXML());
        	//trace(" ====> Total 차트 설정(후) : "+this.ds_defectGrpChartTotal.saveXML());
        	this.ds_defectGrpChartTotal.filter("DEFECTCOUNT != '0'");
        	//------------------------------------------------------------------------------


        	var nDefectSum 	= 0;
        	var nPreLayerId = "";
        	var nInpProc	= "";				// 불량 그룹별 검사공정별 검사수
        	var nCnt = this.ds_defectGrpChartTotal.rowcount;

        	for(var i=0; i<nCnt; i++)
        	{
        		var nRow = i;
        		var nDefectQty 	= this.ds_defectGrpChartTotal.getColumn(i,"DEFECTCOUNT");
        		var nLayerId 	= this.ds_defectGrpChartTotal.getColumn(i,"LAYERID");
        		var nPostLaterId= this.ds_defectGrpChartTotal.getColumn((nRow+1),"LAYERID");
        		var nTotal 		= this.ds_defectGrpChartTotal.getColumn(i,"TOTAL_INSPECTIONQTY");
        		var nLayerName	= this.ds_defectGrpChartTotal.getColumn(i,"LAYERNM");

        		if(i == 0)		// 첫행 경우 합침
        		{
        			nDefectSum += parseInt(nDefectQty);
        			nPreLayerId = nLayerId;
        		}

        		if(i!=0 && (nPreLayerId != nLayerId))		// 첫행 이후 같지않은경우 설정(기준점 재설정)
        		{
        			nPreLayerId = nLayerId;					// 초기화
        			nDefectSum  = 0;						// 초기화
        		}
        		if(i != 0 && (nPreLayerId == nLayerId))		// 첫행 이후 같지않은경우 설정(불량 수량 증가)
        		{
        			nDefectSum += parseInt(nDefectQty);
        		}

        		// 검사수..
        		if(((nPostLaterId != nLayerId)) ||  nCnt == 1)
        		{
        			var nChkInsp = "";						// 같은 불량그룹에 다른 검사공정인 경우 더함 검사수
        			var nCt		 = 0;
        			for(var j=0; j<nCnt; j++)
        			{
        				var nTLayerId 		= this.ds_defectGrpChartTotal.getColumn(j,"LAYERID");
        				var nTInspProc		= this.ds_defectGrpChartTotal.getColumn(j,"INPPROC");
        				var nTTotal 		= this.ds_defectGrpChartTotal.getColumn(j,"TOTAL_INSPECTIONQTY");

        				if((nLayerId == nTLayerId))
        				{
        					nCt += parseInt(nTTotal);
        					break;
        				}
        			}
        			// 불량율 계산
        			var nAdd = this.ds_chartTotal.addRow();
        			this.ds_chartTotal.setColumn(nAdd,"name",nLayerName);
        			this.ds_chartTotal.setColumn(nAdd,"value",parseFloat(nDefectSum));			// 불량수
        			this.ds_chartTotal.setColumn(nAdd,"TOTALQTY",parseFloat(nCt));				// 검사수

        			var nPreRate = parseFloat(nDefectSum) / parseFloat(nCt) * 100;
        			var nR = nexacro.round(nPreRate, 2);				// (소수점 2째 자리) (21.07.16)
        			this.ds_chartTotal.setColumn(nAdd,"percentage",parseFloat(nR));					// 불량율
        			this.ds_chartTotal.setColumn(nAdd,"TYPE","A");								// TYPE
        		}
        	}

        	//trace(" --------------> : "+this.ds_chartTotal.saveXML());

        	// 차트 설정
        	this.div_work.form.tab_work.Tabpage1.form.div_total.form.chart_grpTotal.set_binddataset("ds_chartTotal");
        	// 타이틀 보이지 않게 설정
        	this.div_work.form.tab_work.Tabpage1.form.div_total.form.chart_grpTotal.title.set_visible( false );
        	// 범례 보이지 않게 설정
        	this.div_work.form.tab_work.Tabpage1.form.div_total.form.chart_grpTotal.legend.set_visible( false );
        	// X축 타이틀 제거
        	this.div_work.form.tab_work.Tabpage1.form.div_total.form.chart_grpTotal.categoryaxis.set_titletext("");

        	//this.div_work.form.tab_work.tabpage_defectMap.form.chart_2y.show();

        	// 색상 다양하게
        	this.div_work.form.tab_work.Tabpage1.form.div_total.form.chart_grpTotal.seriesset[0].set_barfillstyle("#62be1b,#3c4596,#be0071,#4bc4c2,#f8b334,#2ba3a8,#ea5d66,#ffe100");
        	// "#86B5BC,#E30513,#C1C1C1,#86BC24,#E5007D,#2F8DCD,#F9D900,#F6A200,#BCBCBC"
        	this.fn_setMaxY();
        };

        /*
         * Y 축 최대값 설정(차트)
         */
        this.fn_setMaxY = function ()
        {
        	var nMaxCol = this.ds_chartTotal.getCaseMax( "TYPE != ''", "value" );				// col의 최대값

        	var nMaxLine = this.ds_chartTotal.getCaseMax( "TYPE != ''", "percentage" );			// line의 최대값

        	//this.div_work.form.tab_work.Tabpage1.form.div_total.form.chart_grpTotal.valueaxes[0].set_tickmax(parseFloat(nMaxCol)+20);
        	//(21.08.03) x 축 소소점 나오지 않도록 설정
        	this.div_work.form.tab_work.Tabpage1.form.div_total.form.chart_grpTotal.valueaxes[0].set_tickmax(parseInt(parseFloat(nMaxCol)*1.20));
        	this.div_work.form.tab_work.Tabpage1.form.div_total.form.chart_grpTotal.valueaxes[1].set_tickmax(parseFloat(nMaxLine)+2);
        	//this.div_work.form.tab_work.Tabpage1.form.div_total.form.chart_grpTotal.valueaxes[1].set_tickmax(parseFloat(nMaxLine)*1.1);
        	//trace("최대값 설정 : "+nMaxCol);
        	//trace("최대값 설정 : "+nMaxLine);
        };

        /*
         * Total제외 하단 그리드 및 차트 보이게, 안보이게 설정
         */
        this.fn_setChartGridVisibl = function (nCnt)
        {
        	var nVisibleCnt = nCnt
        	for(var i=6 ; i>nVisibleCnt;i--)
        	{
        		this.div_work.form.tab_work.Tabpage1.form.all["div_grp0"+i].set_visible(false);
        	}

        	for(var j=0 ; j<nVisibleCnt;j++)
        	{
        		this.div_work.form.tab_work.Tabpage1.form.all["div_grp0"+(j+1)].set_visible(true);
        	}

        	this.div_work.form.tab_work.Tabpage1.form.set_scrollbartype('auto fixed');		// 스크롤바 생성
        	this.div_work.form.tab_work.Tabpage1.form.resetScroll();
        	this.resetScroll();
        };

        /*
         * [Total 제외 하단 그리드 차트 설정]
         */
        this.fn_setSubChartGrid = function ()
        {
        	// sum 그리드 / 차트 ds 초기화 필요 (조회, 생성전에, 초기화시)
        	this.ds_defectGrpChartSub.clearData();
        	// 하단 sub ds 초기화
        	for(var h=1; h<=6; h++)
        	{
        		this.all["ds_defectGrp0"+h].clearData();
        		this.all["ds_chart0"+h].clearData();
        		// (21.06.28) (Total용 추가)
        		this.all["ds_defectGrpTotal0"+h].clearData();
        	}

        	var nGrpSumCnt 		= this.ds_layerGroupSum.rowcount;
        	var nPreGrpCd		= "";		// 이전 Group 코드 값 담는 변수
        	var nPreGrpCdArr	= [];
        	nPreGrpCdArr.length = 0;
        	for(var b=0; b<nGrpSumCnt; b++)
        	{
        		var nGrpCd	= this.ds_layerGroupSum.getColumn(b,"GROUP");
        		if(nPreGrpCd != nGrpCd)
        		{
        			nPreGrpCdArr.push(nGrpCd);
        			nPreGrpCd = nGrpCd;
        		}
        	}

        	trace(" 배열 수 : "+nPreGrpCdArr.length);
        	// for문 돌면서 배열에 해당 하는 Group 값 추출 그 안에서 그리드 / 차트 각각 (필터 후) 적용
        	for(var a=0; a<nPreGrpCdArr.length; a++)
        	{
        		var nFilterLayer 	= "";
        		var nLayerTitle		= "";						// div 타이틀 설정
        		this.ds_defectGrpChartSub.filter("");			// 차트 그리드 사용 필터 초기화

        		var nGrpCd	= nPreGrpCdArr[a];
        		for(var s=0; s<nGrpSumCnt; s++)
        		{
        			var nLayer 	= this.ds_layerGroupSum.getColumn(s,"LAYER");
        			var nGrp	= this.ds_layerGroupSum.getColumn(s,"GROUP");
        			if(nGrp == nGrpCd)
        			{
        				nFilterLayer 	+= this.gfn_isNull(nFilterLayer) ? "LAYERID == '"+nLayer+"'" : " || LAYERID == '"+nLayer+"'";
        				nLayerTitle 	+= this.gfn_isNull(nLayerTitle) ? nLayer : "-"+nLayer;
        			}
        		}

        		//그리드 필터 및 차트 필터 적용
        		this.ds_defectGrpChartSub.filter("");

        		this.ds_defectGrpChartSub.clearData();

        		this.ds_defectGrpChartSub.copyData(this.ds_defectGrpT, true);					// 필터링 전 조회 데이터 가져옴 (조회 및 필터 걸린 상태 ds)



        		//-----------------------------------------------------------[21.06.28] 0포함된 ds 복사
        		this.ds_defectGrpChartSubCopy.filter("");
        		this.ds_defectGrpChartSubCopy.clearData();
        		this.ds_defectGrpChartSubCopy.copyData(this.ds_defectGrpTcopy, true);
        		this.ds_defectGrpChartSubCopy.filter(nFilterLayer);
        		// 그리드 그리드 Layer 설정 (Total 용추가)
        		this.all["ds_defectGrpTotal0"+(a+1)].copyData(this.ds_defectGrpChartSubCopy, true);		// 필터링 후 설정(Total용)
        		// (21.06.21) Layer별 정렬 추가 (Total 용추가)
        		this.all["ds_defectGrpTotal0"+(a+1)].set_keystring("S:+LAYERID");						// Layer별 정렬 (Total용)
        		//-----------------------------------------------------------



        		this.ds_defectGrpChartSub.filter(nFilterLayer);

        		// 그리드 그리드 Layer 설정
        		this.all["ds_defectGrp0"+(a+1)].copyData(this.ds_defectGrpChartSub, true);		// 필터링 후 설정

        		// (21.06.21) Layer별 정렬 추가
        		this.all["ds_defectGrp0"+(a+1)].set_keystring("S:+LAYERID");			// Layer별 정렬

        		// 차트 설정
        		this.all["ds_chart0"+(a+1)].clearData();
        		this.ds_defectGrpChartSub.set_keystring("S:+GROUPCODE");			// 불량 그룹별로 정렬

        		var nDefectSum 	= 0;
        		var nPreLayerId = "";

        		var nPreGrpCode = "";				// 불량그룹

        		var nInpProc	= "";				// 불량 그룹별 검사공정별 검사수

        		// (21.05.27 추가 - 불량코드별 색상 정보)
        		var nArrDefect = [];
        		nArrDefect.length = 0;

        		var nCnt = this.ds_defectGrpChartSub.rowcount;

        		for(var i=0; i<nCnt; i++)
        		{
        			var nRow = i;
        			var nDefectQty 	= this.ds_defectGrpChartSub.getColumn(i,"DEFECTCOUNT");
        			var nGrpCode 	= this.ds_defectGrpChartSub.getColumn(i,"GROUPCODE");			// 현재 불량그룹
        			var nPostGrpCode= this.ds_defectGrpChartSub.getColumn((nRow+1),"GROUPCODE");	// 이후 불량 그룹
        			var nTotal 		= this.ds_defectGrpChartSub.getColumn(i,"TOTAL_INSPECTIONQTY");
        			var nGrpName	= this.ds_defectGrpChartSub.getColumn(i,"GROUPNAME");			// 불량 그룹명

        			if(i == 0)		// 첫행이거낭 같은 경우 합침
        			{
        				nDefectSum += parseInt(nDefectQty);
        				nPreGrpCode = nGrpCode;
        			}

        			if(i!=0 && (nPreGrpCode != nGrpCode))		// 첫행 이후 같지않은경우 설정(기준점 재설정)
        			{
        				nPreGrpCode = nGrpCode;					// 초기화
        				nDefectSum  = 0;						// 초기화
        			}

        			if(i != 0 && (nPreGrpCode == nGrpCode))		// 첫행 이후 같지않은경우 설정(불량 수량 증가)
        			{
        				nDefectSum += parseInt(nDefectQty);
        			}


        			// 검사수, 변경점 체크
        			if(((nPostGrpCode  != nGrpCode)) ||  nCnt == 1)
        			{

        				var nChkInsp = "";						// 같은 불량그룹에 다른 검사공정인 경우 더함 검사수
        				var nCt		 = 0;

        				for(var j=0; j<nCnt; j++)
        				{
        					var nTGrpCode 		= this.ds_defectGrpChartSub.getColumn(j,"GROUPCODE");
        					//var nTInspProc		= this.ds_defectGrpChartSub.getColumn(j,"INPPROC");
        					var nTTotal 		= this.ds_defectGrpChartSub.getColumn(j,"TOTAL_INSPECTIONQTY");

        					if((nGrpCode == nTGrpCode))
        					{
        						nCt += parseInt(nTTotal);
        						break;
        					}
        				}

        				// 불량율 계산
        				var nAdd = this.all["ds_chart0"+(a+1)].addRow();
        				this.all["ds_chart0"+(a+1)].setColumn(nAdd,"name",nGrpName);
        				this.all["ds_chart0"+(a+1)].setColumn(nAdd,"value",parseFloat(nDefectSum));			// 불량수
        				this.all["ds_chart0"+(a+1)].setColumn(nAdd,"TOTALQTY",parseFloat(nCt));				// 검사수

        				var nPreRate = parseFloat(nDefectSum) / parseFloat(nCt) * 100;
        				var nR = nexacro.round(nPreRate, 2);												// (소수점 2째 자리) (21.07.16)
        				this.all["ds_chart0"+(a+1)].setColumn(nAdd,"percentage",parseFloat(nR));					// 불량율
        				this.all["ds_chart0"+(a+1)].setColumn(nAdd,"TYPE","A");								// TYPE

        				// (21.05.27 - 추가 - 배열 찾아서 색상 추가)
        				var nColorPos 	= this.ds_chartColor.findRow("CODE",nGrpCode);
        				var nColor		= this.ds_chartColor.getColumn(nColorPos,"COLOR");
        				if(!this.gfn_isNull(nColor))
        				{
        					nArrDefect.push(nColor);
        				}
        			}
        		}

        		//trace(" --------------> : "+this.ds_chartTotal.saveXML());

        		// 차트 설정
        		this.div_work.form.tab_work.Tabpage1.form.all["div_grp0"+(a+1)].form.all["chart_grp0"+(a+1)].set_binddataset("ds_chart0"+(a+1));
        		// 타이틀 보이지 않게 설정
        		this.div_work.form.tab_work.Tabpage1.form.all["div_grp0"+(a+1)].form.all["chart_grp0"+(a+1)].title.set_visible( false );
        		// 범례 보이지 않게 설정
        		this.div_work.form.tab_work.Tabpage1.form.all["div_grp0"+(a+1)].form.all["chart_grp0"+(a+1)].legend.set_visible( false );
        		// X축 타이틀 제거
        		this.div_work.form.tab_work.Tabpage1.form.all["div_grp0"+(a+1)].form.all["chart_grp0"+(a+1)].categoryaxis.set_titletext("");

        		//this.div_work.form.tab_work.tabpage_defectMap.form.chart_2y.show();

        		// 색상 다양하게
        		//this.div_detail.form.tab_work.Tabpage1.form.all["div_grp0"+(a+1)].form.all["chart_grp0"+(a+1)].seriesset[0].set_barfillstyle("#62be1b,#3c4596,#be0071,#4bc4c2,#f8b334,#2ba3a8,#ea5d66,#ffe100");
        		// "#86B5BC,#E30513,#C1C1C1,#86BC24,#E5007D,#2F8DCD,#F9D900,#F6A200,#BCBCBC"
        		//this.fn_setMaxY();


        		var nColor	= "";
        		if(nArrDefect.length != this.all["ds_chart0"+(a+1)].rowcount)
        		{
        			nColor	= "#62be1b,#3c4596,#be0071,#4bc4c2,#f8b334,#2ba3a8,#ea5d66,#ffe100";
        		}
        		else
        		{
        			for(var c=0; c<nArrDefect.length; c++)
        			{
        				nColor += c == 0 ? nArrDefect[c] : ","+nArrDefect[c];
        			}
        		}
        		// 색상 다양하게
        		this.div_work.form.tab_work.Tabpage1.form.all["div_grp0"+(a+1)].form.all["chart_grp0"+(a+1)].seriesset[0].set_barfillstyle(nColor);

        		var nMaxCol = this.all["ds_chart0"+(a+1)].getCaseMax( "TYPE == 'A'", "value" );				// col의 최대값

        		var nMaxLine = this.all["ds_chart0"+(a+1)].getCaseMax( "TYPE == 'A'", "percentage" );			// line의 최대값

        		//trace(" =====> : "+nMaxCol+" | "+nMaxLine);

        		//this.div_work.form.tab_work.Tabpage1.form.all["div_grp0"+(a+1)].form.all["chart_grp0"+(a+1)].valueaxes[0].set_tickmax(parseFloat(nMaxCol)+20);

        		// (21.08.03) x 축 소소점 안보이도록 설정
        		this.div_work.form.tab_work.Tabpage1.form.all["div_grp0"+(a+1)].form.all["chart_grp0"+(a+1)].valueaxes[0].set_tickmax(parseInt(parseFloat(nMaxCol)*1.10));
        		this.div_work.form.tab_work.Tabpage1.form.all["div_grp0"+(a+1)].form.all["chart_grp0"+(a+1)].valueaxes[1].set_tickmax(parseFloat(nMaxLine)+2);
        		//this.div_work.form.tab_work.Tabpage1.form.all["div_grp0"+(a+1)].form.all["chart_grp0"+(a+1)].valueaxes[1].set_tickmax(parseFloat(nMaxLine)*1.1);

        		// sta 설정 변경
        		var nTitle = "Group"+nPreGrpCdArr[a].substring(nPreGrpCdArr[a].length-1, nPreGrpCdArr[a].length)+">>"+nLayerTitle;

        		this.div_work.form.tab_work.Tabpage1.form.all["div_grp0"+(a+1)].form.all["sta_subtitleGrp0"+(a+1)].set_text(nTitle);

        		trace(" =====> : "+nPreGrpCdArr[a]+" | "+nFilterLayer+" | "+this.ds_defectGrpChartSub.rowcount+" | "+nTitle);
        	}
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
         /*
          * 조회기간 콤보 변경시
          */
        this.tab_search_tab_search01_cbo_period_onitemchanged = function(obj,e)
        {
        	var val = this.tab_search.tab_search01.form.cbo_period.value; //var val = e.postvalue

        	if(this.gfn_isNull(val)) return;

        	var sDate 		= this.nfn_getCurrentSystemTime(0,0,val);
        	var arrDate 	= sDate.split(",");
        	var sDateFrom 	= arrDate[1];
        	var sDateTo 	= arrDate[2];
        	var sTime 		= "0830";

        	var dateFrom 	= this.tab_search.tab_search01.form.div_dateFrom.form.calStart.value;
        	var dateTo 		= this.tab_search.tab_search01.form.div_dateTo.form.calStart.value;

        	if(!this.gfn_isNull(dateFrom) && dateTo.length>=12){
        		sTime = dateTo.substring(8,12);
        	}
        	this.tab_search.tab_search01.form.div_dateFrom.form.calStart.set_value(sDateFrom+sTime);
        	if(!this.gfn_isNull(dateTo) && dateTo.length==12){
        		sTime = dateTo.substring(8,12);
        	}
        	this.tab_search.tab_search01.form.div_dateTo.form.calStart.set_value(sDateTo+sTime);
        };

        /*
         * 필터 - Lot No 조회 팝업
         */
        this.tab_search_tab_search01_btn_lotNo_onclick = function(obj,e)
        {
        	var nEnterpriseId 	= this.gf_getEnterpriseId();	//ENTERPRISEID
        	var nSite 			= this.gf_getSiteType();		//Site
        	var popupId = "SCH_LOTNo";
        	var oArg = {};
        	var opts = "width=850,height=500";

        	// 기 입력값 있는지 확인
        	var nSearch 	= this.tab_search.tab_search01.form.edt_lotNo.value;
        	var nPeriodfr 	= this.tab_search.tab_search01.form.div_dateFrom.form.calStart.value;
        	var nPeriodto 	= this.tab_search.tab_search01.form.div_dateTo.form.calStart.value;

        	if(!this.gfn_isNull(nSearch))
        	{
        		// 기입력된 값이 있으면
        		oArg.arg_lotNo 		= nSearch;
        	}
        	oArg.arg_periodfr 	= nPeriodfr;
        	oArg.arg_periodto 	= nPeriodto;

        	this.gfn_openPopup(popupId,"dfm::DFM00400P.xfdl" ,oArg ,opts);
        };

        /*
         * 필터 - 품목코드 조회 팝업
         */
        this.tab_search_tab_search01_btn_itemCode_onclick = function(obj,e)
        {
        	var nEnterpriseId 	= this.gf_getEnterpriseId();	//ENTERPRISEID
        	var nSite 			= this.gf_getSiteType();		//Site
        	var popupId = "SCH_ITEMCODE";
        	var oArg = {};
        	var opts = "width=650,height=500";

        	// 기 입력값 있는지 확인
        	var nSearch 	= this.tab_search.tab_search01.form.edt_itemCode.value;
        	var nPeriodfr 	= this.tab_search.tab_search01.form.div_dateFrom.form.calStart.value;
        	var nPeriodto 	= this.tab_search.tab_search01.form.div_dateTo.form.calStart.value;

        	if(!this.gfn_isNull(nSearch))
        	{
        		// 기입력된 값이 있으면
        		oArg.arg_itemCode	= nSearch;
        	}
        	oArg.arg_periodfr 		= nPeriodfr;
        	oArg.arg_periodto 		= nPeriodto;

        	this.gfn_openPopup(popupId,"dfm::DFM00401P.xfdl" ,oArg ,opts);
        };

        /*
         * 필터 - Layer 조회 팝업
         */
        this.tab_search_tab_search01_btn_layer_onclick = function(obj,e)
        {
        	var nRevDs = this.tab_search.tab_search01.form.div_revMulti.form;
        	var nFs			= "";
        	for(var i=0; i<nRevDs.ds_initData.rowcount; i++){
        		var chk 	= nRevDs.ds_initData.getColumn(i,"CHK");
        		var code 	= nRevDs.ds_initData.getColumn(i,"CODE");
        		if(chk == 1 && !this.gfn_isNull(code))
        		{
        			nFs += this.gfn_isNull(nFs)? code : ", " +code;
        		}
        	}
        	// 조회 조건 담아 둔것 초기화.(필터용으로 사용 할 것!)

        	//trace(" Rev 여러건 선택시 : "+nFs);

        	var nEnterpriseId 	= this.gf_getEnterpriseId();	//ENTERPRISEID

        	var popupId = "SCH_LAYER";
        	var oArg = {};
        	var opts = "width=800,height=550";

        	// 기 입력값 있는지 확인
        	var nItemCode	 	= this.tab_search.tab_search01.form.edt_itemCode.value;


        	oArg.arg_rev 		= nFs;
        	oArg.arg_enter 		= nEnterpriseId;
        	oArg.arg_item 		= nItemCode;
        	oArg.arg_rtnCols 	= "LAYER|GROUP";				// 리턴 받을값

        	oArg.arg_chkDs 		= this.ds_layerGroupSum;		// 이미 선택된 ds값

        	this.gfn_openPopup(popupId,"dfm::DFM00402P.xfdl" ,oArg ,opts);
        };

        /*
         * 필터 초기화
         */
        this.fn_initSearch = function(obj,e)
        {
        	// 지우고 콤보 초기화 필요
        	this.tab_search.tab_search01.form.edt_lotNo.set_value("");
        	this.tab_search.tab_search01.form.edt_itemCode.set_value("");
        	this.tab_search.tab_search01.form.edt_itemNm.set_value("");

        	// 검색조건 달력 설정
        	this.tab_search.tab_search01.form.cbo_period.set_value("thisweek");
        	this.tab_search_tab_search01_cbo_period_onitemchanged();
        	// Rev 조회
        	this.fn_setRev("");
        };

        /*
         * 메인 초기화
         */
        this.div_header_btn_resetWork_onclick = function(obj,e)
        {
        	// 품목코드 유무에 따른 분기 처리 진행
        	this.ds_rawData.clearData();			// raw data용 ds 초기화
        	this.ds_searchMain.clearData();			// 조회 조건 초기화

        	this.ds_cmbDefectGrp.clearData();		// 불량그룹 콤보ds 초기화
        	this.ds_cmbDefectCode.clearData();		// 불량코드 콤보ds 초기화
        	this.ds_defectGrpT.clearData();			// Total 그리드 정보 ds 초기화
        	this.ds_chartColor.clearData();			// 차트 불량그룹별 색상 정보 ds
        	this.ds_chartTotal.clearData();			// Total 차트 ds 초기화

        	// 멀티 콤보 초기화
        	// 조회 후 멀티 콤보(상위설정)
        	this.div_work.form.tab_work.Tabpage1.form.div_total.form.div_defectGrpMulti.form.fn_init_multicombo_data(this.ds_cmbDefectGrp);
        	this.div_work.form.tab_work.Tabpage1.form.div_total.form.div_defectGrpMulti.form.ds_initData.applyChange();

        	// 하위 멀티 콤보 이벤트 설정.
        	this.div_work.form.tab_work.Tabpage1.form.div_total.form.div_defectCodeMulti.form.fn_init_multicombo_data(this.ds_cmbDefectCode);
        	this.div_work.form.tab_work.Tabpage1.form.div_total.form.div_defectCodeMulti.form.ds_initData.applyChange();

        	// total 제외 그리드 / 차트 안보이게 설정
        	this.fn_setChartGridVisibl(0);

        	// 하단 sub ds 초기화
        	for(var h=1; h<=6; h++)
        	{
        		this.all["ds_defectGrp0"+h].clearData();
        		this.all["ds_chart0"+h].clearData();
        	}

        };

        /*
         * Layer 포커스 들어 올경우 초기화
         */
        this.tab_search_tab_search01_edt_layer_onsetfocus = function(obj,e)
        {
        	// ds에 설정
        	this.ds_layerGroupSum.clearData();
        	this.tab_search.tab_search01.form.edt_layer.set_value("");
        };

        /*
         * 필터 버튼 클릭
         */
        this.div_detail_tab_work_Tabpage1_div_total_btn_filter_onclick = function(obj,e)
        {
        	var nFs			= "";		// 필터 조건
        	var nFsub		= "";		// 필터 조건(세부)

        	// 상위
        	var nDefectGrpDs = this.div_work.form.tab_work.Tabpage1.form.div_total.form.div_defectGrpMulti.form;

        	this.ds_defectGrpT.filter("");		// 필터 초기화


        	for(var i=0; i<nDefectGrpDs.ds_initData.rowcount; i++){
        		var chk = nDefectGrpDs.ds_initData.getColumn(i,"CHK");
        		var code = nDefectGrpDs.ds_initData.getColumn(i,"CODE");
        		if(chk == 1 && !this.gfn_isNull(code))
        		{
        			nFs += this.gfn_isNull(nFs) ? "GROUPCODE == '"+code+"'" : " || GROUPCODE == '"+code+"'";
        		}
        	}

        	if(!this.gfn_isNull(nFs))
        	{
        		nFs = "("+nFs+")";
        	}

        	// 하위
        	var nDefectCodeDs = this.div_work.form.tab_work.Tabpage1.form.div_total.form.div_defectCodeMulti.form;

        	for(var i=0; i<nDefectCodeDs.ds_initData.rowcount; i++){
        		var chk = nDefectCodeDs.ds_initData.getColumn(i,"CHK");
        		var code = nDefectCodeDs.ds_initData.getColumn(i,"CODE");
        		if(chk == 1 && !this.gfn_isNull(code))
        		{
        			nFsub += this.gfn_isNull(nFsub) ? "SUBCODE == '"+code+"'" : " || SUBCODE == '"+code+"'";
        		}
        	}

        	// (21.08.03) 필터 하위만 선택한 경우 필터 되도록 수정
        	if(!this.gfn_isNull(nFsub) && !this.gfn_isNull(nFs))
        	{
        		nFsub = "&& ("+nFsub+")";
        	}


        	nFs = nFs+nFsub;


        	this.ds_defectGrpT.filter("");		// 필터 초기화
        	//------------------------------------------------
        	// (21.06.25) 불량수 0인것 제외
        	//this.ds_defectGrpT.filter("DEFECTCOUNT != '0'");
        	this.ds_defectGrpTcopy.filter("");		// 필터 초기화
        	this.ds_defectGrpTcopy.filter(nFs);		// 필터 초기화 (불량수 0인것 미제외 한 ds)
        	if(!this.gfn_isNull(nFs))
        	{
        		nFs = nFs+ "&& (DEFECTCOUNT != '0')";
        	}
        	else
        	{
        		nFs =  "(DEFECTCOUNT != '0')";
        	}
        	trace(" ------ (필터 조건) : "+nFs);
        	//------------------------------------------------
        	this.ds_defectGrpT.filter(nFs);		// 필터 설정


        	// 차트 설정
        	//this.fn_setChart();
        	//this.fn_setChartLayer();

        	// 이미지 설정(기존은 재조회 / 샘플인경우 필터링건다.)
        	//this.fn_reSetImageLayer();

        	// Total 차트 설정
        	this.fn_setChartLayer();

        	// group 수
        	var nGroupCnt 	= 0;
        	var nGrpSumCnt 	= this.ds_layerGroupSum.rowcount;
        	var nPreGrpCd	= "";
        	for(var i=0; i<nGrpSumCnt; i++)
        	{
        		var nGrpCd	= this.ds_layerGroupSum.getColumn(i,"GROUP");
        		if(nPreGrpCd != nGrpCd)
        		{
        			nGroupCnt++;
        			nPreGrpCd = nGrpCd;
        		}
        	}
        	// total 제외 그리드 / 차트 안보이게 설정
        	this.fn_setChartGridVisibl(nGroupCnt);

        	// Total 하단의 그리드 및 차트 설정
        	this.fn_setSubChartGrid();

        };














        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.tab_search01.form.btn_clearC.addEventHandler("onclick",this.fn_initSearch,this);
            this.tab_search.tab_search01.form.btn_lotNo.addEventHandler("onclick",this.tab_search_tab_search01_btn_lotNo_onclick,this);
            this.tab_search.tab_search01.form.cbo_period.addEventHandler("onitemchanged",this.tab_search_tab_search01_cbo_period_onitemchanged,this);
            this.tab_search.tab_search01.form.btn_itemCode.addEventHandler("onclick",this.tab_search_tab_search01_btn_itemCode_onclick,this);
            this.tab_search.tab_search01.form.edt_layer.addEventHandler("onsetfocus",this.tab_search_tab_search01_edt_layer_onsetfocus,this);
            this.tab_search.tab_search01.form.btn_layer.addEventHandler("onclick",this.tab_search_tab_search01_btn_layer_onclick,this);
            this.tab_search.tab_search01.form.div_dateFrom.addEventHandler("onkeydown",this.fn_preiodChang,this);
            this.tab_search.tab_search01.form.div_dateTo.addEventHandler("onkeydown",this.fn_preiodChang,this);
            this.div_work.form.tab_work.Tabpage1.form.div_total.form.btn_filter.addEventHandler("onclick",this.div_detail_tab_work_Tabpage1_div_total_btn_filter_onclick,this);
            this.div_header.form.btn_resetWork.addEventHandler("onclick",this.div_header_btn_resetWork_onclick,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("DFM00400M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
