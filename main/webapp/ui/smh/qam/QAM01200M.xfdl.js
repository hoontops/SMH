(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM01200M");
            this.set_titletext("품질규격 NCR");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_qamIssue", this);
            obj._setContents("<ColumnInfo><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"STATENAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREDATETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEASURER\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SPECRANGE\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLOSE\" type=\"STRING\" size=\"256\"/><Column id=\"AVERAGEVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"MAXVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"MINVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"DEVIATION\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRNO\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"MEASURER\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"DAITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRNO\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ARRAYPOINTID\" type=\"STRING\" size=\"256\"/><Column id=\"ISMODIFY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"CARREQUESTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CAREXPECTEDRECEIPTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREVALUE_1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_3\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_4\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_5\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_6\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_7\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_8\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_9\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_10\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_11\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_12\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_13\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_14\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_15\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_16\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_17\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_18\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_19\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_20\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_21\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_22\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_23\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_24\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_25\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_26\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_27\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_28\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_29\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_30\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_31\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_32\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_33\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_34\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_35\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_36\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_37\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_38\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_39\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_40\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_41\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_42\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_43\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_44\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_45\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_46\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_47\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_48\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_49\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_50\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_51\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_52\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_53\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_54\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_55\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_56\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_57\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_58\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_59\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_60\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SPECSCOPE\" type=\"STRING\" size=\"256\"/><Column id=\"AFFECTISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONDIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRESS\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLOSE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("0");
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

            obj = new Button("btn_help",null,"16","26","24","btn_reset:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","138","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_text("품질규격 NCR");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MENU_PG-QC-0180");
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

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("sta_subTitle00","0","0","320","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("품질규격 NCR");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("QUALITYSPECIFICATIONISSUE");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_qamIssue","0","34",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamIssue");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"180\"/><Column size=\"160\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"상태명\" tooltiptext=\"STATENAME\"/><Cell col=\"2\" text=\"측정일시\" tooltiptext=\"MEASUREDATETIME\"/><Cell col=\"3\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"4\" text=\"작업장\" tooltiptext=\"AREA\"/><Cell col=\"5\" text=\"설비명\" tooltiptext=\"EQUIPMENTNAME\"/><Cell col=\"6\" text=\"측정자\" tooltiptext=\"MEASURER\"/><Cell col=\"7\" text=\"고객명\" tooltiptext=\"CUSTOMERNAME\"/><Cell col=\"8\" text=\"품목코드\" tooltiptext=\"ITEMCODE\"/><Cell col=\"9\" text=\"Rev\" tooltiptext=\"Rev\"/><Cell col=\"10\" text=\"품목명\" tooltiptext=\"PRODUCTNAME\"/><Cell col=\"11\" text=\"양산구분\" tooltiptext=\"LOTTYPE\"/><Cell col=\"12\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell col=\"13\" text=\"검사항목명\" tooltiptext=\"INSPITEMNAME\"/><Cell col=\"14\" text=\"규격범위(SL)\" tooltiptext=\"SPECSCOPE\"/><Cell col=\"15\" text=\"마감여부\" tooltiptext=\"ISCLOSE\"/><Cell col=\"16\" text=\"평균값\" tooltiptext=\"AVERAGEVALUE\"/><Cell col=\"17\" text=\"최대값\" tooltiptext=\"MAXVALUE\"/><Cell col=\"18\" text=\"최소값\" tooltiptext=\"MINVALUE\"/><Cell col=\"19\" text=\"편차\" tooltiptext=\"DEVIATION\"/><Cell col=\"20\" text=\"원인품목명\" tooltiptext=\"REASONCONSUMABLEDEFNAME\"/><Cell col=\"21\" text=\"원인품목 Rev\" tooltiptext=\"REASONCONSUMABLEDEFVERSION\"/><Cell col=\"22\" text=\"원인 Lot ID\" tooltiptext=\"REASONCONSUMABLELOTID\"/><Cell col=\"23\" text=\"원인공정명\" tooltiptext=\"REASONSEGMENTNAME\"/><Cell col=\"24\" text=\"원인작업장명\" tooltiptext=\"REASONAREANAME\"/><Cell col=\"25\" text=\"CAR요청일자\" tooltiptext=\"CARREQUESTDATE\"/><Cell col=\"26\" text=\"CAR접수예정일자\" tooltiptext=\"CAREXPECTEDRECEIPTDATE\"/><Cell col=\"27\" text=\"CAR접수일자\" tooltiptext=\"RECEIPTDATE\"/><Cell col=\"28\" text=\"CAR승인일자\" tooltiptext=\"APPROVALDATE\"/><Cell col=\"29\" text=\"CAR유효성평가일자\" tooltiptext=\"CLOSEDATE\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:STATENAME\" cssclass=\"expr:comp.parent.parent.parent.fn_setBgColor(currow)\"/><Cell col=\"2\" text=\"bind:MEASUREDATETIME\" cssclass=\"expr:comp.parent.parent.parent.fn_setBgColor(currow)\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\" cssclass=\"expr:comp.parent.parent.parent.fn_setBgColor(currow)\"/><Cell col=\"4\" text=\"bind:AREANAME\" textAlign=\"left\" cssclass=\"expr:comp.parent.parent.parent.fn_setBgColor(currow)\"/><Cell col=\"5\" text=\"bind:EQUIPMENTNAME\" textAlign=\"left\" cssclass=\"expr:comp.parent.parent.parent.fn_setBgColor(currow)\"/><Cell col=\"6\" text=\"bind:MEASUSERNAME\" textAlign=\"left\" cssclass=\"expr:comp.parent.parent.parent.fn_setBgColor(currow)\"/><Cell col=\"7\" text=\"bind:CUSTOMERNAME\" textAlign=\"left\" cssclass=\"expr:comp.parent.parent.parent.fn_setBgColor(currow)\"/><Cell col=\"8\" text=\"bind:PRODUCTDEFID\" cssclass=\"expr:comp.parent.parent.parent.fn_setBgColor(currow)\"/><Cell col=\"9\" text=\"bind:PRODUCTDEFVERSION\" cssclass=\"expr:comp.parent.parent.parent.fn_setBgColor(currow)\"/><Cell col=\"10\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\" cssclass=\"expr:comp.parent.parent.parent.fn_setBgColor(currow)\"/><Cell col=\"11\" text=\"bind:LOTTYPE\" combocodecol=\"C,ProductionType,,Y,Y\" cssclass=\"expr:comp.parent.parent.parent.fn_setBgColor(currow)\"/><Cell col=\"12\" text=\"bind:LOTID\" cssclass=\"expr:comp.parent.parent.parent.fn_setBgColor(currow)\"/><Cell col=\"13\" text=\"bind:INSPITEMNAME\" textAlign=\"left\" cssclass=\"expr:comp.parent.parent.parent.fn_setBgColor(currow)\"/><Cell col=\"14\" text=\"bind:SPECSCOPE\" textAlign=\"left\" cssclass=\"expr:comp.parent.parent.parent.fn_setBgColor(currow)\"/><Cell col=\"15\" text=\"bind:ISCLOSE\" cssclass=\"expr:comp.parent.parent.parent.fn_setBgColor(currow)\"/><Cell col=\"16\" text=\"bind:AVERAGEVALUE\" textAlign=\"right\" cssclass=\"expr:comp.parent.parent.parent.fn_setBgColor(currow)\"/><Cell col=\"17\" text=\"bind:MAXVALUE\" textAlign=\"right\" cssclass=\"expr:comp.parent.parent.parent.fn_setBgColor(currow)\"/><Cell col=\"18\" text=\"bind:MINVALUE\" textAlign=\"right\" cssclass=\"expr:comp.parent.parent.parent.fn_setBgColor(currow)\"/><Cell col=\"19\" text=\"bind:DEVIATION\" textAlign=\"right\" cssclass=\"expr:comp.parent.parent.parent.fn_setBgColor(currow)\"/><Cell col=\"20\" text=\"bind:REASONCONSUMABLEDEFNAME\" textAlign=\"left\" cssclass=\"expr:comp.parent.parent.parent.fn_setBgColor(currow)\"/><Cell col=\"21\" text=\"bind:REASONCONSUMABLEDEFVERSION\" cssclass=\"expr:comp.parent.parent.parent.fn_setBgColor(currow)\"/><Cell col=\"22\" text=\"bind:REASONCONSUMABLELOTID\" textAlign=\"left\" cssclass=\"expr:comp.parent.parent.parent.fn_setBgColor(currow)\"/><Cell col=\"23\" text=\"bind:REASONSEGMENTNAME\" textAlign=\"left\" cssclass=\"expr:comp.parent.parent.parent.fn_setBgColor(currow)\"/><Cell col=\"24\" text=\"bind:REASONAREANAME\" textAlign=\"left\" cssclass=\"expr:comp.parent.parent.parent.fn_setBgColor(currow)\"/><Cell col=\"25\" text=\"bind:CARREQUESTDATE\" cssclass=\"expr:comp.parent.parent.parent.fn_setBgColor(currow)\"/><Cell col=\"26\" text=\"bind:CAREXPECTEDRECEIPTDATE\" cssclass=\"expr:comp.parent.parent.parent.fn_setBgColor(currow)\"/><Cell col=\"27\" text=\"bind:RECEIPTDATE\" cssclass=\"expr:comp.parent.parent.parent.fn_setBgColor(currow)\"/><Cell col=\"28\" text=\"bind:APPROVALDATE\" cssclass=\"expr:comp.parent.parent.parent.fn_setBgColor(currow)\"/><Cell col=\"29\" text=\"bind:CLOSEDATE\" cssclass=\"expr:comp.parent.parent.parent.fn_setBgColor(currow)\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_qamIssue",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Edit("edt_lotId","108","235","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_productType","108","260","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            obj.set_text("LOTTYPE");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_processsegment","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("공정");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PROCESSCHANGETYPE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","350","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","350","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip00",null,"110","15","97","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip01","0","105","15","97",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"330","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","356","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("24");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_area","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("AREAIDNAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_processsegment","108","85",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_processsegment",null,"85","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_area","108","110",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_area",null,"110","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_finder");
            obj.set_text("");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_equipment","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("26");
            obj.set_text("설비");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("EQUIPMENT");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_inspitem","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("27");
            obj.set_text("검사 항목");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("INSPITEMTYPE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_customer","0","185","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("28");
            obj.set_text("고객");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CUSTOMER");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_productdef","0","210","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("29");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTIONDEFINITION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_inspitem","108","160",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_inspitem",null,"160","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_progressStatus","108","285","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_codecolumn("C,CARProgressStatus,ALL,Y,Y");
            obj.set_text("PROGRESSSTATUS");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_lotId","0","235","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("30");
            obj.set_text("Lot No");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("873DD90A54B04DEDA6CAD3D47CE96684");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_productType","0","260","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("31");
            obj.set_text("양산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CB397083D10E400AA29B0D91A6FB8E1B");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_progressStatus","0","285","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("32");
            obj.set_text("처리현황");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("64D452C9C02143189B0FDA2EEACC5AB8");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_isClose","0","310","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("33");
            obj.set_text("마감여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ISCLOSE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_customer","108","185",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_customer",null,"185","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_productdef",null,"210","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productdef","108","210",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_equipment","108","135",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_equipment",null,"135","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_isClose","108","310","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            obj.set_text("YESNO");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_area_id","60","457","120","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("34");
            obj.set_value("작업장ID (HIDDEN)");
            obj.set_visible("false");
            obj.set_text("작업장ID (HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_customer_id","60","544","120","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("35");
            obj.set_value("고객사ID (HIDDEN)");
            obj.set_visible("false");
            obj.set_text("고객사ID (HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label01","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("36");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("C6A85700415446D89213292978260263");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_dateFrom","108","35",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("37");
            obj.set_url("common::com_calendar.xfdl");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_dateTo","108","60",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("38");
            obj.set_url("common::com_calendar.xfdl");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_periodType","10","60","94","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("39");
            obj.set_codecolumn("code");
            obj.set_datacolumn("desc");
            obj.set_innerdataset("gds_period");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_equipment_id","60","486","120","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("40");
            obj.set_value("설비ID (HIDDEN)");
            obj.set_visible("false");
            obj.set_text("설비ID (HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_inspitem_id","60","515","120","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("41");
            obj.set_value("검사항목ID (HIDDEN)");
            obj.set_visible("false");
            obj.set_text("검사항목ID (HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productdef_id","60","573","120","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("42");
            obj.set_value("품목ID (HIDDEN)");
            obj.set_visible("false");
            obj.set_text("품목ID (HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_site","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("43");
            obj.set_codecolumn("C,SiteType,,Y,Y");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_processsegment_id","60","428","120","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("44");
            obj.set_value("공정ID (HIDDEN)");
            obj.set_visible("false");
            obj.set_text("공정ID (HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

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
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_calendar.xfdl");
        };
        
        // User Script
        this.addIncludeScript("QAM01200M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("QAM01200M.xfdl","lib::lib_qam.xjs");
        this.registerScript("QAM01200M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 품질규격 이상발생
         * 파일명 		: QAM01200M.xfdl
         * 작성자 		: 권혜영
         * 작성일 		: 2021.04.15
         *
         * 설  명		: 품질관리 > 공정품질 > 품질규격 NCR
         *				  품질 규격 측정값중 NG가 발생한 항목들에 대해 이상발생처리를 한다.
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.15	권혜영   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_qam.xjs"); /*include "lib::lib_qam.xjs"*/;	//품질관리 공통 라이브러리 include
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);

        	this.fn_insertGridCol();
        	this.tab_search.Tabpage1.form.div_dateTo.form.pdiv_data.form.calStart.addEventHandler("onchanged", this.fn_changeCalendar, this);

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
        	this.ds_qamIssue.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "PLANTID", this.tab_search.Tabpage1.form.cbo_site.value);
        	this.ds_search.setColumn(0, "PERIODFR", this.tab_search.Tabpage1.form.div_dateFrom.form.calStart.value);
        	this.ds_search.setColumn(0, "PERIODTO", this.tab_search.Tabpage1.form.div_dateTo.form.calStart.value);
        	this.ds_search.setColumn(0, "PROCESSSEGMENTID", this.tab_search.Tabpage1.form.edt_processsegment_id.value);
        	this.ds_search.setColumn(0, "AREAID", this.tab_search.Tabpage1.form.edt_area_id.value);
        	this.ds_search.setColumn(0, "EQUIPMENTID", this.tab_search.Tabpage1.form.edt_equipment_id.value);
        	this.ds_search.setColumn(0, "INSPITEMID", this.tab_search.Tabpage1.form.edt_inspitem_id.value);
        	this.ds_search.setColumn(0, "CUSTOMERID", this.tab_search.Tabpage1.form.edt_customer_id.value);
        	this.ds_search.setColumn(0, "PRODUCTDEFID", this.tab_search.Tabpage1.form.edt_productdef_id.value);
        	this.ds_search.setColumn(0, "LOTID", this.tab_search.Tabpage1.form.edt_lotId.value);
        	this.ds_search.setColumn(0, "PRODUCTIONDIVISION", this.tab_search.Tabpage1.form.cmb_productType.value);
        	this.ds_search.setColumn(0, "PROGRESS", this.tab_search.Tabpage1.form.cmb_progressStatus.value);
        	this.ds_search.setColumn(0, "ISCLOSE", this.tab_search.Tabpage1.form.cbo_isClose.value);

        	var sSvcID 			= "selectQualitySpecificationIssueList";
        	var sController 	= "/qam01200/selectQualitySpecificationIssueList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_qamIssue=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
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
        this.fn_add = function(obj,e)
        {

        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {

        };

        /*
         * 기능 : 삭제
         */
        this.fn_delete = function (obj, e)
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
        		if (trId == "selectQualitySpecificationIssueList")
        		{

        		}
        	}
        };


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        /*
         * 기능 : 이상발생 팝업화면 open
         */
        this.fn_openViewPopup = function (nRow)
        {
        	var oArg = {};

        	if (nRow > -1) {
        		oArg.rowPos = nRow;
        	}
        	this.gfn_openPopup("QAM_ISSUE","qam::QAM01200P1.xfdl",oArg,"width=1200,height=900");
        };

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 최초 호출되는 초기화 함수
         */
        this.fn_formInit = function ()
        {
        	this.ds_CSiteType.filter("LOOKUP_CODE == '"+this.gf_getSiteType()+"'");
        	this.tab_search.Tabpage1.form.cbo_site.set_index(0);

        	this.tab_search.Tabpage1.form.cbo_periodType.set_value("thisweek"); //금주
        	this.qamfn_setCompControl(this.tab_search.Tabpage1.form.components, "empty");

        	this.fn_setDate("thisweek");
        };

        /*
         * 기능 : 그리드에 측정값 1~60 Column 삽입하는 함수
         */
        this.fn_insertGridCol = function ()
        {
        	var nCol = 20; //처음에 insert될 위치
        	var objGrd = this.div_work.form.grd_qamIssue;

        	for(var i = 1; i <= 60; i++) {
        		objGrd.insertContentsCol("body", nCol);
        		objGrd.setFormatColProperty(nCol, "size", 80);

        		objGrd.setCellProperty( "head", nCol, "text", "측정값 " + i);
        		objGrd.setCellProperty( "head", nCol, "tooltiptext", "SPCNVALUE " + i);
        		objGrd.setCellProperty( "body", nCol, "text", "bind:MEASUREVALUE_" + i);
        		objGrd.setCellProperty( "body", nCol, "textAlign", "right");
        		objGrd.setCellProperty( "body", nCol, "cssclass", "expr:comp.parent.parent.parent.fn_setFontColor(currow,"+i+")");
        		nCol++;
        	}
        };

        /*
         * 기능 : NG 발생 포인트 컬럼 추출해서 font color setting
         */
        this.fn_setFontColor = function(nRow, val) {
        	var retBgColor = this.fn_setBgColor(nRow);
        	var retFontColor = "cell_red";

        	//NG 발생 포인트 컬럼 추출 처리부분 (ARRAYPOINTID)
        	var pointId = this.ds_qamIssue.getColumn(nRow, "ARRAYPOINTID");

        	if(!this.nfn_isNull(pointId)) {
        		var arrPointId = pointId.split(",");

        		for(var i = 0; i < arrPointId.length; i++) {
        			if(arrPointId[i] == val) {
        				if(this.nfn_isNull(retBgColor)) {
        					return retFontColor;
        				} else {
        					return retFontColor +", " + retBgColor;
        				}
        			} else {
        				return retBgColor;
        			}
        		}
        	}
        };

        /*
         * 기능 : ARRAYPOINTID == "Y" 일 경우 background color setting
         */
        this.fn_setBgColor = function(nRow) {
        	var affectIsLocking = this.ds_qamIssue.getColumn(nRow, "AFFECTISLOCKING");

        	if(affectIsLocking == "Y") {
        		return "cell_bg_yellow";
        	}
        };

        /*
         * 기능 : 검색일자 변경시 검색구분을 [사용자지정]으로 변경
         */

        this.fn_changeCalendar = function() {
        	this.tab_search.Tabpage1.form.cbo_periodType.set_value(null);
        };

        /*
         * 기능 : 검색일자 바인딩 함수
         */
        this.fn_setDate = function (periodType)
        {
        	if (this.nfn_isNull(periodType)) return false;

        	var sDate = this.nfn_getCurrentSystemTime(0, 0, periodType.toLowerCase());
        	var arrDate = sDate.split(",");
        	var sDateFrom = arrDate[1];
        	var sDateTo = arrDate[2];
        	var sTime = "0830";

        	this.tab_search.Tabpage1.form.div_dateFrom.form.calStart.set_value(sDateFrom+sTime);
        	this.tab_search.Tabpage1.form.div_dateTo.form.calStart.set_value(sDateTo+sTime);
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.tab_search_Tabpage1_cbo_periodType_onitemchanged = function(obj,e)
        {
        	if(!this.nfn_isNull(e.postvalue)) {
        		this.fn_setDate(e.postvalue);
        	}
        };

        this.tab_search_Tabpage1_div_dateTo_onkeyup = function(obj,e)
        {
        	this.fn_changeCalendar();
        };

        this.tab_search_Tabpage1_div_dateFrom_onkeyup = function(obj,e)
        {
        	this.fn_changeCalendar();
        };

        this.div_work_grd_qamIssue_oncelldblclick = function(obj,e)
        {
        	this.fn_openViewPopup(e.row);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.grd_qamIssue.addEventHandler("oncelldblclick",this.div_work_grd_qamIssue_oncelldblclick,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.btn_processsegment.addEventHandler("onclick",this.qamfn_callOpenPopButtonEvent,this);
            this.tab_search.Tabpage1.form.btn_area.addEventHandler("onclick",this.qamfn_callOpenPopButtonEvent,this);
            this.tab_search.Tabpage1.form.btn_inspitem.addEventHandler("onclick",this.qamfn_callOpenPopButtonEvent,this);
            this.tab_search.Tabpage1.form.btn_customer.addEventHandler("onclick",this.qamfn_callOpenPopButtonEvent,this);
            this.tab_search.Tabpage1.form.btn_productdef.addEventHandler("onclick",this.qamfn_callOpenPopButtonEvent,this);
            this.tab_search.Tabpage1.form.btn_equipment.addEventHandler("onclick",this.qamfn_callOpenPopButtonEvent,this);
            this.tab_search.Tabpage1.form.div_dateFrom.addEventHandler("onkeyup",this.tab_search_Tabpage1_div_dateFrom_onkeyup,this);
            this.tab_search.Tabpage1.form.div_dateTo.addEventHandler("onkeyup",this.tab_search_Tabpage1_div_dateTo_onkeyup,this);
            this.tab_search.Tabpage1.form.cbo_periodType.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_periodType_onitemchanged,this);
        };
        this.loadIncludeScript("QAM01200M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
