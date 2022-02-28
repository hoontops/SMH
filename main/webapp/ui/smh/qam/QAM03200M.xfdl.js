(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM03200M");
            this.set_titletext("LOT별 수축율 측정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_qamShrinkmeasure", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SHRINKMEASUREID\" type=\"STRING\" size=\"256\"/><Column id=\"SHRINKMEASURECODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE_X1\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE_X2\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE_Y1\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE_Y2\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE_XY1\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE_XY2\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNID\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNUSER\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREPNL\" type=\"STRING\" size=\"256\"/><Column id=\"GAUGER\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"SCALEABNORMALYN\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREDATE\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qamLotinfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATENAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTARTDATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_measureData", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"INPUTDATA\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTDATAFM\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREPNL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_measureValue", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"MEASUREPNL\" type=\"STRING\" size=\"256\"/><Column id=\"GAUGER\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTDATAFM\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SHRINKMEASUREID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qamShrinkmeasuremMaster", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SHRINKMEASUREID\" type=\"STRING\" size=\"256\"/><Column id=\"SHRINKPRODUCTID\" type=\"STRING\" size=\"256\"/><Column id=\"OPERATIONID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTARTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREPNL\" type=\"STRING\" size=\"256\"/><Column id=\"GAUGER\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTDATAFM\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREDATE\" type=\"STRING\" size=\"256\"/><Column id=\"SCALEABNORMALYN\" type=\"STRING\" size=\"256\"/><Column id=\"COMPVAL_X1\" type=\"STRING\" size=\"256\"/><Column id=\"COMPVAL_X2\" type=\"STRING\" size=\"256\"/><Column id=\"COMPVAL_Y1\" type=\"STRING\" size=\"256\"/><Column id=\"COMPVAL_Y2\" type=\"STRING\" size=\"256\"/><Column id=\"COMPVAL_XY1\" type=\"STRING\" size=\"256\"/><Column id=\"COMPVAL_XY2\" type=\"STRING\" size=\"256\"/><Column id=\"OPERVAL_X1\" type=\"STRING\" size=\"256\"/><Column id=\"OPERVAL_X2\" type=\"STRING\" size=\"256\"/><Column id=\"OPERVAL_Y1\" type=\"STRING\" size=\"256\"/><Column id=\"OPERVAL_Y2\" type=\"STRING\" size=\"256\"/><Column id=\"OPERVAL_XY1\" type=\"STRING\" size=\"256\"/><Column id=\"OPERVAL_XY2\" type=\"STRING\" size=\"256\"/><Column id=\"OPERCOMPVAL_X1\" type=\"STRING\" size=\"256\"/><Column id=\"OPERCOMPVAL_X2\" type=\"STRING\" size=\"256\"/><Column id=\"OPERCOMPVAL_Y1\" type=\"STRING\" size=\"256\"/><Column id=\"OPERCOMPVAL_Y2\" type=\"STRING\" size=\"256\"/><Column id=\"OPERCOMPVAL_XY1\" type=\"STRING\" size=\"256\"/><Column id=\"OPERCOMPVAL_XY2\" type=\"STRING\" size=\"256\"/><Column id=\"PRODVAL_X1\" type=\"STRING\" size=\"256\"/><Column id=\"PRODVAL_X2\" type=\"STRING\" size=\"256\"/><Column id=\"PRODVAL_Y1\" type=\"STRING\" size=\"256\"/><Column id=\"PRODVAL_Y2\" type=\"STRING\" size=\"256\"/><Column id=\"PRODVAL_XY1\" type=\"STRING\" size=\"256\"/><Column id=\"PRODVAL_XY2\" type=\"STRING\" size=\"256\"/><Column id=\"PRODCOMPVAL_X1\" type=\"STRING\" size=\"256\"/><Column id=\"PRODCOMPVAL_X2\" type=\"STRING\" size=\"256\"/><Column id=\"PRODCOMPVAL_Y1\" type=\"STRING\" size=\"256\"/><Column id=\"PRODCOMPVAL_Y2\" type=\"STRING\" size=\"256\"/><Column id=\"PRODCOMPVAL_XY1\" type=\"STRING\" size=\"256\"/><Column id=\"PRODCOMPVAL_XY2\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNID\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNUSER\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_output", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"RESULT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cadData", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SHRINKMEASUREID\" type=\"STRING\" size=\"256\"/><Column id=\"SHRINKMEASURECODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE_X1\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE_X2\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE_Y1\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE_Y2\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE_XY1\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE_XY2\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNID\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNUSER\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREPNL\" type=\"STRING\" size=\"256\"/><Column id=\"GAUGER\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"SCALEABNORMALYN\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREDATE\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("sta_title","30","16","144","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_text("LOT별 수축율 측정");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MENU_PG-QC-0794");
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

            obj = new Button("btn_save",null,"16","26","24","btn_help:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("8");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("sta_lotInfo","0","0","690","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("LOT 정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("LOTINFO");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_lotInfo","0","34",null,"73","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_cssclass("grd_detail_Master");
            obj.set_autoenter("select");
            obj.set_fillareatype("allrow");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_qamLotinfo");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"77\"/><Column size=\"180\"/><Column size=\"77\"/><Column size=\"100\"/><Column size=\"77\"/><Column size=\"65\"/><Column size=\"77\"/><Column size=\"150\"/><Column size=\"77\"/><Column size=\"75\"/></Columns><Rows><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"body\"><Cell cssclass=\"cell_head\" text=\"Lot No.\" wordWrap=\"char\" tooltiptext=\"LOTID\"/><Cell col=\"1\" textAlign=\"left\" text=\"bind:LOTID\"/><Cell col=\"2\" cssclass=\"cell_head\" text=\"품목코드\" wordWrap=\"char\" tooltiptext=\"PRODUCTDEFID\"/><Cell col=\"3\" textAlign=\"left\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"4\" cssclass=\"cell_head\" text=\"Rev\" wordWrap=\"char\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell col=\"5\" textAlign=\"left\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"6\" cssclass=\"cell_head\" text=\"품목명\" wordWrap=\"char\" tooltiptext=\"PRODUCTDEFNAME\"/><Cell col=\"7\" textAlign=\"left\" text=\"bind:PRODUCTDEFNAME\"/><Cell col=\"8\" cssclass=\"cell_head\" text=\"작업장\" wordWrap=\"char\" tooltiptext=\"AREANAME\"/><Cell col=\"9\" textAlign=\"left\" text=\"bind:AREANAME\"/><Cell row=\"1\" cssclass=\"cell_head\" text=\"공정수순\" wordWrap=\"char\" tooltiptext=\"USERSEQUENCE\"/><Cell row=\"1\" col=\"1\" textAlign=\"left\" text=\"bind:USERSEQUENCE\"/><Cell row=\"1\" col=\"2\" cssclass=\"cell_head\" text=\"Site\" wordWrap=\"char\" tooltiptext=\"SITE\"/><Cell row=\"1\" col=\"3\" textAlign=\"left\" text=\"bind:PLANTID\"/><Cell row=\"1\" col=\"4\" cssclass=\"cell_head\" text=\"공정ID\" wordWrap=\"char\" tooltiptext=\"PROCESSSEGMENTID\"/><Cell row=\"1\" col=\"5\" textAlign=\"left\" text=\"bind:PROCESSSEGMENTID\"/><Cell row=\"1\" col=\"6\" cssclass=\"cell_head\" text=\"공정명\" wordWrap=\"char\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell row=\"1\" col=\"7\" textAlign=\"left\" text=\"bind:PROCESSSEGMENTNAME\"/><Cell row=\"1\" col=\"8\" cssclass=\"cell_head\" text=\"작업상태\" wordWrap=\"char\" tooltiptext=\"PROCESSSTATE\"/><Cell row=\"1\" col=\"9\" textAlign=\"left\" text=\"bind:PROCESSSTATENAME\"/><Cell row=\"2\" cssclass=\"cell_head\" text=\"Locking\" wordWrap=\"char\" tooltiptext=\"LOCKING\"/><Cell row=\"2\" col=\"1\" textAlign=\"left\" text=\"bind:ISLOCKING\"/><Cell row=\"2\" col=\"2\" cssclass=\"cell_head\" text=\"수량(PNL)\" wordWrap=\"char\" tooltiptext=\"PANELQTY\"/><Cell row=\"2\" col=\"3\" textAlign=\"left\" text=\"bind:PANELQTY\"/><Cell row=\"2\" col=\"4\" cssclass=\"cell_head\" text=\"수량(PCS)\" wordWrap=\"char\" tooltiptext=\"PCSQTY\"/><Cell row=\"2\" col=\"5\" textAlign=\"left\" text=\"bind:PCSQTY\"/><Cell row=\"2\" col=\"6\" wordWrap=\"char\" cssclass=\"cell_head\"/><Cell row=\"2\" col=\"7\"/><Cell row=\"2\" col=\"8\" cssclass=\"cell_head\" wordWrap=\"char\"/><Cell row=\"2\" col=\"9\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_measureregister","0","grd_lotInfo:10","600","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("측정값 등록");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MEASURVALUEREGISTER");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_subLeftSearch","0","150","68%","32",null,null,"650",null,"32",null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_measurepnl","0","0","100","31",null,null,null,null,null,null,this.div_work.form.div_subLeftSearch.form);
            obj.set_taborder("1");
            obj.set_text("측정 PNL");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("MEASUREPNL");
            this.div_work.form.div_subLeftSearch.addChild(obj.name, obj);

            obj = new Edit("edt_measurepnl","sta_measurepnl:5","5","80","20",null,null,null,null,null,null,this.div_work.form.div_subLeftSearch.form);
            obj.set_taborder("0");
            obj.set_inputtype("digit");
            this.div_work.form.div_subLeftSearch.addChild(obj.name, obj);

            obj = new Static("sta_gauger","edt_measurepnl:10","0","100","31",null,null,null,null,null,null,this.div_work.form.div_subLeftSearch.form);
            obj.set_taborder("2");
            obj.set_text("측정자명");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("MEASURER");
            this.div_work.form.div_subLeftSearch.addChild(obj.name, obj);

            obj = new Edit("edt_gauger","sta_gauger:5","5","100","20",null,null,null,null,null,null,this.div_work.form.div_subLeftSearch.form);
            obj.set_taborder("3");
            this.div_work.form.div_subLeftSearch.addChild(obj.name, obj);

            obj = new Static("sta_equipment","edt_gauger:10","0","100","31",null,null,null,null,null,null,this.div_work.form.div_subLeftSearch.form);
            obj.set_taborder("4");
            obj.set_text("측정기");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("MEASUREEQUIPMENT");
            this.div_work.form.div_subLeftSearch.addChild(obj.name, obj);

            obj = new Edit("edt_equipment","sta_equipment:5","5","100","20",null,null,null,null,null,null,this.div_work.form.div_subLeftSearch.form);
            obj.set_taborder("5");
            this.div_work.form.div_subLeftSearch.addChild(obj.name, obj);

            obj = new Button("btn_equipment","edt_equipment:0%","5","22","20",null,null,null,null,null,null,this.div_work.form.div_subLeftSearch.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.div_subLeftSearch.addChild(obj.name, obj);

            obj = new Edit("edt_equipment_id","415","5","40","20",null,null,null,null,null,null,this.div_work.form.div_subLeftSearch.form);
            obj.set_taborder("7");
            obj.set_background("pink");
            obj.set_visible("false");
            this.div_work.form.div_subLeftSearch.addChild(obj.name, obj);

            obj = new Edit("edt_shrinkmeasureid","5","5","40","20",null,null,null,null,null,null,this.div_work.form.div_subLeftSearch.form);
            obj.set_taborder("8");
            obj.set_background("pink");
            obj.set_visible("false");
            this.div_work.form.div_subLeftSearch.addChild(obj.name, obj);

            obj = new Div("div_subRightSearch","div_subLeftSearch:20","150",null,"32","0",null,"220",null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_equipmentdatafm","0","0","110","31",null,null,null,null,null,null,this.div_work.form.div_subRightSearch.form);
            obj.set_taborder("1");
            obj.set_text("측정데이터포맷");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("EQUIPMENTDATAFM");
            this.div_work.form.div_subRightSearch.addChild(obj.name, obj);

            obj = new Combo("cbo_equipmentdatafm","sta_equipmentdatafm:5","5","100","20",null,null,null,null,null,null,this.div_work.form.div_subRightSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("C,MeasureDataFormat,,Y,Y");
            this.div_work.form.div_subRightSearch.addChild(obj.name, obj);

            obj = new Static("sta_measureData","0","192","560","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_text("측정 DATA");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MEASUREDATA");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_shrinkmeasure","0","sta_measureData:0","68%",null,null,"0",null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_binddataset("ds_qamShrinkmeasure");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"Running\"/><Cell col=\"1\" colspan=\"2\" text=\"X축\"/><Cell col=\"3\" colspan=\"2\" text=\"Y축\"/><Cell col=\"5\" colspan=\"2\" text=\"XY축\"/><Cell row=\"1\" col=\"1\" text=\"측정값_X1\" tooltiptext=\"X1\"/><Cell row=\"1\" col=\"2\" text=\"측정값_X2\" tooltiptext=\"X2\"/><Cell row=\"1\" col=\"3\" text=\"측정값_Y1\" tooltiptext=\"Y1\"/><Cell row=\"1\" col=\"4\" text=\"측정값_Y2\" tooltiptext=\"Y2\"/><Cell row=\"1\" col=\"5\" text=\"측정값_XY1\" tooltiptext=\"XY1\"/><Cell row=\"1\" col=\"6\" text=\"측정값_XY2\" tooltiptext=\"XY2\"/></Band><Band id=\"body\"><Cell text=\"bind:SHRINKMEASURECODE\" displaytype=\"combotext\" combocodecol=\"C,ShrinkMeasureCode,,Y,N\"/><Cell col=\"1\" text=\"bind:VALUE_X1\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:comp.parent.parent.parent.fn_setEnableText(currow, SHRINKMEASURECODE)\" maskeditformat=\"#0.000\"/><Cell col=\"2\" text=\"bind:VALUE_X2\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:comp.parent.parent.parent.fn_setEnableText(currow, SHRINKMEASURECODE)\" maskeditformat=\"#0.000\"/><Cell col=\"3\" text=\"bind:VALUE_Y1\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:comp.parent.parent.parent.fn_setEnableText(currow, SHRINKMEASURECODE)\" maskeditformat=\"#0.000\"/><Cell col=\"4\" text=\"bind:VALUE_Y2\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:comp.parent.parent.parent.fn_setEnableText(currow, SHRINKMEASURECODE)\" maskeditformat=\"#0.000\"/><Cell col=\"5\" text=\"bind:VALUE_XY1\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:comp.parent.parent.parent.fn_setEnableText(currow, SHRINKMEASURECODE)\" maskeditformat=\"#0.000\"/><Cell col=\"6\" text=\"bind:VALUE_XY2\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:comp.parent.parent.parent.fn_setEnableText(currow, SHRINKMEASURECODE)\" maskeditformat=\"#0.000\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_delRow",null,"199","26","24","31.94%",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_addRow",null,"199","26","24","btn_delRow:5",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_measurevalueData","div_subLeftSearch:20","192","200","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("9");
            obj.set_text("측정값 DATA");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MEASUREVALUEDATA");
            this.div_work.addChild(obj.name, obj);

            obj = new TextArea("txa_measuredata","grd_shrinkmeasure:20","sta_measurevalueData:0",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("10");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_proc",null,"197","90","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("측정값 변환");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"197","80","24","btn_proc:5",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("초기화");
            obj.set_tooltiptext("CLEAR");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"199","90","24","btn_addRow:5",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("측정값 출력");
            obj.set_tooltiptext("MEASUREPRINT");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","75","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","75","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"55","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_site","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_codecolumn("C,SiteType,,Y,Y");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("PLANTID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_lotid","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("LOTID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_lotid","108","35","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
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
            obj = new BindItem("item0","tab_search.Tabpage1.form.cbo_site","value","ds_search","PLANTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tab_search.Tabpage1.form.edt_lotid","value","ds_search","LOTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_work.form.txa_measuredata","value","ds_measureData","INPUTDATA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_work.form.div_subLeftSearch.form.edt_measurepnl","value","ds_measureValue","MEASUREPNL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_work.form.div_subLeftSearch.form.edt_gauger","value","ds_measureValue","GAUGER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_work.form.div_subLeftSearch.form.edt_equipment_id","value","ds_measureValue","EQUIPMENTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_work.form.div_subLeftSearch.form.edt_equipment","value","ds_measureValue","EQUIPMENTNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_work.form.div_subRightSearch.form.cbo_equipmentdatafm","value","ds_measureValue","EQUIPMENTDATAFM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_work.form.div_subLeftSearch.form.edt_shrinkmeasureid","value","ds_measureValue","SHRINKMEASUREID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("QAM03200M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("QAM03200M.xfdl","lib::lib_qam.xjs");
        this.registerScript("QAM03200M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: LOT별 수축율 측정
         * 파일명 		: QAM03200M.xfdl
         * 작성자 		: 권혜영
         * 작성일 		: 2021.06.04
         *
         * 설  명		: 품질관리 > 수축율관리 > LOT별 수축율 측정
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.06.04	권혜영   	최초작성
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
        this.isConvert = false; //측정값 변환 여부
        this.isEnableUpdate = true; //수정 가능 여부
        this.isSaveSearch = false; //저장 후 search 여부
        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.gfn_setGridCopyPaste(this.div_work.form.grd_shrinkmeasure);
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
        	if(this.nfn_isNull(this.tab_search.Tabpage1.form.edt_lotid.value)) {
        		this.gfn_Message("NoSelectedMsg", this.nfn_getDictionarynameUpper("LOTID"), "warning", "ok");
        		return;
        	}
        	this.ds_qamLotinfo.clearData();
        	this.ds_qamShrinkmeasure.clearData();
        	this.ds_output.clearData();

        	// enter 시 바인딩 전에 event 가 실행되어 바인딩을 해줘야 함.
        	this.ds_search.setColumn(0, "LOTID", this.tab_search.Tabpage1.form.edt_lotid.value);

        	var sSvcID 			= "selectQamShrinkmeasureList";
        	var sController 	= "/qam03200/selectQamShrinkmeasureList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_qamLotinfo=ds_qamLotinfo ds_qamShrinkmeasure=ds_qamShrinkmeasure ds_output=ds_output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        	this.fn_formInit();
        	this.ds_qamLotinfo.clearData();
        	this.ds_qamShrinkmeasure.clearData();

        	this.qamfn_setCompControl(this.div_work.form.div_subLeftSearch.form.components, "empty", [Edit, Combo]);
        	this.qamfn_setCompControl(this.div_work.form.div_subRightSearch.form.components, "empty", [Edit, Combo]);

        	this.div_work.form.txa_measuredata.set_value("");
        };

        /*
         * 기능 : 품목 - 신규
         */
        this.fn_add = function(obj,e)
        {
        	var objDs = this.ds_qamShrinkmeasure;
        	if(objDs == null) return;

        	var row = objDs.addRow();

        	objDs.setColumn(row, "VALIDSTATE", "Valid");
        	objDs.setColumn(row, "ENTERPRISEID", this.gf_getEnterpriseId());
        	objDs.setColumn(row, "PLANTID", this.gf_getSiteType());
        };

        /*
         * 기능 : 품목 - 삭제
         */
        this.fn_delete = function (obj, e)
        {
        	var objDs = this.ds_qamShrinkmeasure;
        	var nRowType = objDs.getRowType(objDs.rowposition);

        	if(nRowType==2){
        		var bOK = this.gfn_Message("IsDeleted", null, "conf", "yesno");
        		if (bOK == false) return;
        		objDs.deleteRow(objDs.rowposition);
        	} else {
        		this.gfn_Message("CantdelSaveData", null, "info", "ok");
        	}
        // 	var bOK = this.gfn_Message("IsDeleted", null, "conf", "yesno");
        // 	if (bOK == false) return;
        // 	objDs.deleteRow(objDs.rowposition);
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	this.ds_qamShrinkmeasuremMaster.clearData();

        	//저장 시점에 SHRINKMEASURECODE 가  VALUE를 포함할 경우.
        	var updateCnt = 0;
        	this.ds_qamShrinkmeasure.set_updatecontrol(false);
        	for(var i = 0; i < this.ds_qamShrinkmeasure.rowcount; i++) {
        		var shrinkmeasurecode = this.ds_qamShrinkmeasure.getColumn(i, "SHRINKMEASURECODE");

        		// shrinkmeasurecode = VALUE1 ~ N 또는 CAD일 경우
        		if(shrinkmeasurecode.indexOf("VALUE")  > -1 || shrinkmeasurecode == "CAD") {
        			this.ds_qamShrinkmeasure.setRowType(i, Dataset.ROWTYPE_INSERT);
        			updateCnt++;
        		}
        	}
        	this.ds_qamShrinkmeasure.set_updatecontrol(true);

        	if(updateCnt == 0 && !this.gfn_dsIsUpdated(this.ds_qamShrinkmeasure) && !this.isConvert)
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}

        	var objDs = this.ds_measureValue;
        	//20210707 측정기 필수체크 제외
        	//var strColumn = "MEASUREPNL|GAUGER:MEASURER|EQUIPMENTID:MEASUREEQUIPMENT"; //측정 PNL, 측정자명, 측정기
        	var strColumn = "MEASUREPNL|GAUGER:MEASURER"; //측정 PNL, 측정자명
        	var validation = this.qamfn_checkEmptyField(objDs, strColumn);
        	if(!validation.rtn) {
        		this.qamfn_setEditFocus(this.div_work.form.div_subLeftSearch, objDs, validation.column);
        		this.gfn_Message("NoSelectedMsg", validation.msgTxt, "warning", "ok"); //선택된 {0}(이)가 없습니다. 먼저 선택하세요.
        		return false;
        	}

        	strColumn = "EQUIPMENTDATAFM"; //측정데이터포맷
        	validation = this.qamfn_checkEmptyField(objDs, strColumn);
        	if(!validation.rtn) {
        		this.qamfn_setEditFocus(this.div_work.form.div_subRightSearch, objDs, validation.column);
        		this.gfn_Message("NoSelectedMsg", validation.msgTxt, "warning", "ok"); //선택된 {0}(이)가 없습니다. 먼저 선택하세요.
        		return false;
        	}

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveQamShrinkmeasure";
        	var sController 	= "/qam03200/saveQamShrinkmeasure.do";
        	var sInDatasets 	= "ds_qamLotinfo=ds_qamLotinfo:A ds_qamShrinkmeasure=ds_qamShrinkmeasure:U ds_measureValue=ds_measureValue:A";
        	var sOutDatasets 	= "ds_qamShrinkmeasuremMaster=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
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
        		if (trId == "saveQamShrinkmeasure")
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.isSaveSearch = true;
        			this.fn_search();
        		} else if (trId == "procQamShrinkmeasure")
        		{
        			this.isConvert = true;
        		} else if (trId == "selectQamShrinkmeasureList")
        		{

        			//입력상태조건 체크
        			this.fn_checkState();

        			//측정값 등록 text and button set.
        			this.fn_setMeasureRegister();

        			//저장 후에 search 했으면 메일 발송 여부 확인 후 메일 발송 (SCALEABNORMALYN == 'Y' 일 경우에만 list 조회)
        			if(this.isSaveSearch && this.ds_qamShrinkmeasuremMaster.rowcount > 0) {
        				this.fn_sendEmail();
        			}
        			this.isSaveSearch = false;
        		}
        	}
        };

        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        this.fn_openPop = function(svcId, popId, shrinkproductid)
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

            var popupId = svcId;
            var oArg = {}, opts = "";

        	if(popupId == "SRCH_EQUIPMENT")    /*조회조건-설비*/
            {
        		var productdef = this.div_work.form.div_subLeftSearch.form.edt_equipment.value;
        		opts = "width=400,height=500";
        		oArg.arg_type = "BA";
        		oArg.arg_popupCd = popId;
        		oArg.arg_popupNm = "";
        		oArg.arg_paramCols = "";
        		oArg.arg_paramValues = "";
        		oArg.arg_searchStr = "";

        		oArg.arg_type        = "BA";
                oArg.arg_rtnCols     = "EQUIPMENTID|EQUIPMENTNAME|MEASUREDATAFORMAT";

        		if (!this.nfn_isNull(productdef))
        		{
        			oArg.arg_searchStr   = "SEARCH_KEY=" + productdef;
        		}
            }

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);

        };

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
            var rtn = this.fv_rtnValue;
            if (this.nfn_isNull(rtn)) return;

            if(sPopupId == "SRCH_EQUIPMENT")    /*조회조건-설비*/
            {
        		this.div_work.form.div_subLeftSearch.form.edt_equipment_id.set_value(rtn[0]);
                this.div_work.form.div_subLeftSearch.form.edt_equipment.set_value(rtn[1]);
        		this.div_work.form.div_subRightSearch.form.cbo_equipmentdatafm.set_value(rtn[2]);
            }
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
        };

        /*
         * 기능 : 측정값 DATA - 측정값 변환
         */
        this.fn_procData = function (obj, e)
        {
        	if (this.nfn_isNull(this.div_work.form.txa_measuredata.value))
        	{
        		this.gfn_Message("NoConversionData", null, "warning", "ok"); //변환할 측정값 DATA가 없습니다.
        		return;
        	}
        	if(this.ds_qamLotinfo.rowcount < 1) {
        		this.gfn_Message("NoSelectedMsg", this.nfn_getDictionarynameUpper("LOTID"), "warning", "ok");
        		return;

        	}
        	var objDs = this.ds_measureValue;
        	var strColumn = "MEASUREPNL"; //측정 PNL
        	var validation = this.qamfn_checkEmptyField(objDs, strColumn);
        	if(!validation.rtn) {
        		this.qamfn_setEditFocus(this.div_work.form.div_subLeftSearch, objDs, validation.column);
        		this.gfn_Message("NoSelectedMsg", validation.msgTxt, "warning", "ok"); //선택된 {0}(이)가 없습니다. 먼저 선택하세요.
        		return false;
        	}

        	strColumn = "EQUIPMENTDATAFM"; //측정데이터포맷
        	validation = this.qamfn_checkEmptyField(objDs, strColumn);
        	if(!validation.rtn) {
        		this.qamfn_setEditFocus(this.div_work.form.div_subRightSearch, objDs, validation.column);
        		this.gfn_Message("NoSelectedMsg", validation.msgTxt, "warning", "ok"); //선택된 {0}(이)가 없습니다. 먼저 선택하세요.
        		return false;
        	}

        	// dataset에 set
        	this.ds_measureData.setColumn(0, "EQUIPMENTDATAFM", this.div_work.form.div_subRightSearch.form.cbo_equipmentdatafm.value); //측정데이터포맷
        	this.ds_measureData.setColumn(0, "MEASUREPNL", this.div_work.form.div_subLeftSearch.form.edt_measurepnl.value); //측정PSL

        	// ds_cadData set
        	this.ds_cadData.clearData();
        	var addRow = this.ds_cadData.addRow();
        	var findRow = this.ds_qamShrinkmeasure.findRow( "SHRINKMEASURECODE", "CAD" );
        	this.ds_cadData.copyRow(addRow, this.ds_qamShrinkmeasure, findRow);

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "procQamShrinkmeasure";
        	var sController 	= "/qam03200/procQamShrinkmeasure.do";
        	var sInDatasets 	= "ds_measureData=ds_measureData:A ds_cadData=ds_cadData:A";
        	var sOutDatasets 	= "ds_qamShrinkmeasure=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 측정값 DATA - 초기화
         */
        this.fn_reset = function(obj,e)
        {
        	this.div_work.form.txa_measuredata.set_value("");
        };

        /*
         * 기능 : 측정값 등록 text 부분 set.
         */
        this.fn_setMeasureRegister = function()
        {
        	//측정값 등록 text control
        	var measurepnl = this.ds_qamShrinkmeasure.getColumn(0, "MEASUREPNL");
        	var gauger = this.ds_qamShrinkmeasure.getColumn(0, "GAUGER");
        	var equipmentid = this.ds_qamShrinkmeasure.getColumn(0, "EQUIPMENTID");
        	var equipmentname = this.ds_qamShrinkmeasure.getColumn(0, "EQUIPMENTNAME");
        	var shrinkmeasureid = this.ds_qamShrinkmeasure.getColumn(0, "SHRINKMEASUREID");

        	this.div_work.form.div_subLeftSearch.form.edt_measurepnl.set_value(measurepnl);
        	this.div_work.form.div_subLeftSearch.form.edt_gauger.set_value(gauger);
        	this.div_work.form.div_subLeftSearch.form.edt_equipment_id.set_value(equipmentid);
        	this.div_work.form.div_subLeftSearch.form.edt_equipment.set_value(equipmentname);
        	this.div_work.form.div_subLeftSearch.form.edt_shrinkmeasureid.set_value(shrinkmeasureid);
        	this.div_work.form.txa_measuredata.set_value("");

        	//button enable control
        	this.div_work.form.btn_addRow.set_enable(this.isEnableUpdate);
        	this.div_work.form.btn_delRow.set_enable(this.isEnableUpdate);
        	this.div_work.form.btn_proc.set_enable(this.isEnableUpdate);
        };

        /*
         * 기능 : 입력상태조건 체크
        		- RESULT : FAIL_NOTREGIST (등록된 공정별기준값이 없을 경우)
        		- RESULT : FAIL_STD_NOTMATCH (LOT NO의 공정+작업상태가 기준정보에의 공정+작업상태와 일치하는 않을 경우)
        		- RESULT : FAIL_NOTMATCH (LOT NO의 공정+작업상태가 입력된 측정데이터의 공정+작업상태와 일치하는 않을 경우)
         */
        this.fn_checkState = function()
        {
        	this.isEnableUpdate = true;

        	if(this.ds_output.rowcount > 0) {
        		if(this.ds_output.getColumn(0, "RESULT") == "FAIL_NOTREGIST") {
        			this.gfn_Message("noRegistProcessStandardValue2", null, "warning", "ok"); //공정별기준값이 등록되어 있지 않습니다. ->수축율 측정기준이 등록되어 있지 않습니다.
        			this.isEnableUpdate = false;

        		} else if(this.ds_output.getColumn(0, "RESULT") == "FAIL_STD_NOTMATCH") {
        			this.gfn_Message("notMatchStdProcessStep", null, "warning", "ok"); //측정공정 또는 체크Step이 기준정보의 체크Step과 일치하지 않습니다
        			this.isEnableUpdate = false;

        		} else if(this.ds_output.getColumn(0, "RESULT") == "FAIL_NOTMATCH") {
        			this.gfn_Message("notMatchProcessStep", null, "warning", "ok"); //측정공정 또는 체크Step이 측정단계와 일치하지 않습니다.
        			this.isEnableUpdate = false;

        		}
        	}
        };

        /*
         * 기능 : text 편집 가능
         */
        this.fn_setEnableText = function(currow, shrinkmeasurecode)
        {
        	var nRow = this.ds_CShrinkMeasureCode.findRow( "LOOKUP_CODE", shrinkmeasurecode );
        	var enableYn = this.ds_CShrinkMeasureCode.getColumn(nRow, "ATTRIBUTE1");
        	if(enableYn == "Y" || this.ds_qamShrinkmeasure.getRowType(currow) == 2) {
        		return "mask";
        	}
        };

        /*
         * 기능 : SHRINKMEASURECODE== VALUE (입력 가능 컬럼)인 count
         */
        this.fn_getValueCount = function()
        {
        	var count = 0;
        	for(var i = 0; i < this.ds_qamShrinkmeasure.rowcount; i++) {
        		var shrinkmeasurecode = this.ds_qamShrinkmeasure.getColumn(i, "SHRINKMEASURECODE");

        		if(shrinkmeasurecode.indexOf("VALUE")  > -1) {
        			count++;
        		}
        	}
        	return count;
        };

        /*
         * 기능 : 측정값 출력
         */
        this.fn_printData = function(obj,e)
        {
        	var objDs  = this.ds_qamShrinkmeasure, rowPos = objDs.rowposition;
        	if(rowPos < 0) {
        		return;
        	}

        	var shrinkmeasureid = "["+objDs.getColumn(0, "SHRINKMEASUREID")+"]";

        	if(this.nfn_isNull(objDs.getColumn(0, "SHRINKMEASUREID"))) {
        		return;
        	}
        	var oArg = {
          		sRptPath   : "/QAM/",
          		sRptName   : "QAM03300R.mrd",
          		strField   : shrinkmeasureid,
          		bModalless : false
          	};

          	var sOption = "titletext=수축율 측정값,modeless=false";
          	this.gfn_reportPopup("reportViewer", "common::com_report.xfdl", oArg, sOption);
        };

        /*
         * 기능 : 메일 발송
         */
        this.fn_sendEmail = function ()
        {
        	var arr = [], nRow = 0;

        	arr.push( this.nfn_getDictionaryname('PRODUCTDEFNAME',true) );
        	arr.push( this.nfn_getDictionaryname('PRODUCTDEFID',true) );
        	arr.push( this.nfn_getDictionaryname('PRODUCTDEFVERSION',true) );
        	arr.push( this.nfn_getDictionaryname('LOT',true) );
        	arr.push( this.ds_qamShrinkmeasuremMaster.getColumn(nRow,"LOTID") );
        	arr.push( this.nfn_getDictionaryname('MEASUREDATETIME',true) );
        	arr.push( this.ds_qamShrinkmeasuremMaster.getColumn(nRow,"MEASUREDATE") ); //측정일시
        	arr.push( this.nfn_getDictionaryname('MEASUREITEM',true) ); //측정항목 Txt
        	arr.push( this.nfn_getDictionaryname('SHRINKMEASURE',true) ); // "수축율 측정"  Txt
        	arr.push( this.nfn_getDictionaryname('MEASURER',true) ); //측정자 Txt
        	arr.push( this.ds_qamShrinkmeasuremMaster.getColumn(nRow,"GAUGER") ); //측정자
        	arr.push( this.nfn_getDictionaryname('PROCESSSEGMENTEXTLIST',true) ); //표준공정 Txt
        	arr.push( this.ds_qamShrinkmeasuremMaster.getColumn(nRow,"PROCESSSEGMENTNAME") ); // 공정명
        	arr.push( this.nfn_getDictionaryname('AREA',true) ); //작업장 Txt
        	arr.push( this.ds_qamShrinkmeasuremMaster.getColumn(nRow,"AREANAME") ); //작업장명
        	arr.push( this.nfn_getDictionaryname('NGSTANDARD',true) ); //NG 기준 Txt
        	arr.push( "±0.03 " + this.nfn_getDictionaryname('GT',true) ); //  ±0.03 초과 Txt

        	arr.push( this.nfn_getDictionaryname('PROCESSREFERENCEVALUE',true) ); //공정기준값 Txt
        	arr.push( this.nfn_getDictionaryname('MEASURVALUE',true) ); //측정값 Txt
        	arr.push( this.nfn_getDictionaryname('ShrinkMeasureCode_COMPVAL',true) ); //비교값 Txt (19)

        	arr.push( "X1" ); //X1 Txt : 20
        	arr.push( this.ds_qamShrinkmeasuremMaster.getColumn(nRow,"OPERVAL_X1") ); 		//공정기준값
        	arr.push( this.ds_qamShrinkmeasuremMaster.getColumn(nRow,"COMPVAL_X1") ); 		//측정값
        	arr.push( this.ds_qamShrinkmeasuremMaster.getColumn(nRow,"OPERCOMPVAL_X1") ); 	//공정수축율비교값
        	arr.push( "X2" ); //X2 Txt
        	arr.push( this.ds_qamShrinkmeasuremMaster.getColumn(nRow,"OPERVAL_X2") ); 		//공정기준값
        	arr.push( this.ds_qamShrinkmeasuremMaster.getColumn(nRow,"COMPVAL_X2") ); 		//측정값
        	arr.push( this.ds_qamShrinkmeasuremMaster.getColumn(nRow,"OPERCOMPVAL_X2") ); 	//공정수축율비교값
        	arr.push( "Y1" ); //Y1 Txt
        	arr.push( this.ds_qamShrinkmeasuremMaster.getColumn(nRow,"OPERVAL_Y1") ); 		//공정기준값
        	arr.push( this.ds_qamShrinkmeasuremMaster.getColumn(nRow,"COMPVAL_Y1") ); 		//측정값
        	arr.push( this.ds_qamShrinkmeasuremMaster.getColumn(nRow,"OPERCOMPVAL_Y1") ); 	//공정수축율비교값
        	arr.push( "Y2" ); //Y2 Txt
        	arr.push( this.ds_qamShrinkmeasuremMaster.getColumn(nRow,"OPERVAL_Y2") ); 		//공정기준값
        	arr.push( this.ds_qamShrinkmeasuremMaster.getColumn(nRow,"COMPVAL_Y2") ); 		//측정값
        	arr.push( this.ds_qamShrinkmeasuremMaster.getColumn(nRow,"OPERCOMPVAL_Y2") ); 	//공정수축율비교값
        	arr.push( "XY1" ); //XY1 Txt
        	arr.push( this.ds_qamShrinkmeasuremMaster.getColumn(nRow,"OPERVAL_XY1") ); 		//공정기준값
        	arr.push( this.ds_qamShrinkmeasuremMaster.getColumn(nRow,"COMPVAL_XY1") ); 		//측정값
        	arr.push( this.ds_qamShrinkmeasuremMaster.getColumn(nRow,"OPERCOMPVAL_XY1") ); 	//공정수축율비교값
        	arr.push( "XY2" ); //XY2 Txt
        	arr.push( this.ds_qamShrinkmeasuremMaster.getColumn(nRow,"OPERVAL_XY2") ); 		//공정기준값
        	arr.push( this.ds_qamShrinkmeasuremMaster.getColumn(nRow,"COMPVAL_XY2") ); 		//측정값
        	arr.push( this.ds_qamShrinkmeasuremMaster.getColumn(nRow,"OPERCOMPVAL_XY2") ); 	//공정수축율비교값

        	arr.push( this.ds_qamShrinkmeasuremMaster.getColumn(nRow,"PRODUCTDEFNAME") ); //44
        	arr.push( this.ds_qamShrinkmeasuremMaster.getColumn(nRow,"PRODUCTDEFID") );
        	arr.push( this.ds_qamShrinkmeasuremMaster.getColumn(nRow,"PRODUCTDEFVERSION") );

        	var title = this.nfn_getDictionaryname('PROCESSSCALEERROR',true) ;
        	var emailContent = "○" + arr[0] + "(" + arr[1] + "/" + arr[2] + "):" + arr[44] + "(" + arr[45] + "/" + arr[46] + ")" + "<BR>"
        					 + "○" + arr[3] + ":" + arr[4] + "<BR>"
        					 + "○" + arr[5] + ":" + arr[6] + "<BR>"
        					 + "○" + arr[7] + ":" + arr[8] + "<BR>"
        					 + "○" + arr[9] + ":" + arr[10] + "<BR>"
        					 + "○" + arr[11] + ":" + arr[12] + "<BR>"
        					 + "○" + arr[13] + ":" + arr[14] + "<BR>"
        					 + "○" + arr[15] + ":" + arr[16] + "<BR>"
        					 + "○" + arr[17] + " / " + arr[18] + " / " + arr[19] + "<BR>"
        					 //value값
        					 + "&nbsp;&nbsp;&nbsp;" + arr[20] + ":" + arr[21] + " / " + arr[22] + " / " + arr[23] + "<BR>"
        					 + "&nbsp;&nbsp;&nbsp;" + arr[24] + ":" + arr[25] + " / " + arr[26] + " / " + arr[27] + "<BR>"
        					 + "&nbsp;&nbsp;&nbsp;" + arr[28] + ":" + arr[29] + " / " + arr[30] + " / " + arr[31] + "<BR>"
        					 + "&nbsp;&nbsp;&nbsp;" + arr[32] + ":" + arr[32] + " / " + arr[33] + " / " + arr[34] + "<BR>"
        					 + "&nbsp;&nbsp;&nbsp;" + arr[36] + ":" + arr[37] + " / " + arr[38] + " / " + arr[39] + "<BR>"
        					 + "&nbsp;&nbsp;&nbsp;" + arr[40] + ":" + arr[41] + " / " + arr[42] + " / " + arr[43] + "<BR><BR><BR>";

        	var popupId = "EMAIL";
        	 var oArg = {
        		  subject : title,  //제목
        		  contents : emailContent, //메일내용
        		  objAddrList : [],  //수신자 배열
        		  objUserList : [],   //수신자명 배열
        		  atchSrc : "", //"BAS_ITEMMASTER", //업무에서 올려진 파일 첨부시 (테이블)
        		  atchSrcKey : "" //"INTERFLEX|10400010A1|FA1"   //업무에서 올려진 파일 첨부시 (키값)
        	  };
        	 this.gfn_openPopup(popupId,"cmd::CMAM00100P.xfdl",oArg,"width=790,height=790");
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        // 설비조회 팝업 클릭
        this.div_work_div_subLeftSearch_btn_equipment_onclick = function(obj,e)
        {
        	this.fn_openPop("SRCH_EQUIPMENT","P00310"); //설비조회
        };

        // 측정데이터포맷 콤보 변경 시
        this.div_work_div_subRightSearch_cbo_equipmentdatafm_onitemchanged = function(obj,e)
        {
        	this.fn_reset();
        };

        /*
         * 이벤트 : 측정 DATA dataset add되었을 때 이벤트
         */
        this.ds_qamShrinkmeasure_onrowsetchanged = function(obj,e)
        {
        	if(e.reason == 12) {
        		obj.setColumn(e.row, "SHRINKMEASURECODE", "VALUE");

        		var valueCount = this.fn_getValueCount();
        		var pnlVal = this.div_work.form.div_subLeftSearch.form.edt_measurepnl.value;

        		if(this.ds_qamLotinfo.rowcount < 1) {
        			this.gfn_Message("NoSelectedMsg", this.nfn_getDictionarynameUpper("LOTID"), "warning", "ok");
        			obj.deleteRow(e.row);

        		} else if(this.nfn_isNull(pnlVal)) {
        			this.gfn_Message("NoSelectedMsg", this.nfn_getDictionarynameUpper("MEASUREPNL"), "warning", "ok"); //선택된 측정 PNL 없습니다. 먼저 선택하세요.
        			this.div_work.form.div_subLeftSearch.form.edt_measurepnl.setFocus();
        			obj.deleteRow(e.row);

        		} else if(valueCount > pnlVal) {
        			this.gfn_Message("DATAMoreThanPNL", null, "warning", "ok"); //입력된 측정 DATA 개수가 측정 PNL보다 많습니다.
        			this.div_work.form.div_subLeftSearch.form.edt_measurepnl.setFocus();
        			obj.deleteRow(e.row);

        		} else {
        			var value = this.nfn_Lpad(valueCount, 2, "0");
        			obj.setColumn(e.row, "SHRINKMEASURECODE", "VALUE" + value);
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_header.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_work.form.div_subLeftSearch.form.btn_equipment.addEventHandler("onclick",this.div_work_div_subLeftSearch_btn_equipment_onclick,this);
            this.div_work.form.div_subRightSearch.form.cbo_equipmentdatafm.addEventHandler("onitemchanged",this.div_work_div_subRightSearch_cbo_equipmentdatafm_onitemchanged,this);
            this.div_work.form.btn_delRow.addEventHandler("onclick",this.fn_delete,this);
            this.div_work.form.btn_addRow.addEventHandler("onclick",this.fn_add,this);
            this.div_work.form.btn_proc.addEventHandler("onclick",this.fn_procData,this);
            this.div_work.form.btn_reset.addEventHandler("onclick",this.fn_reset,this);
            this.div_work.form.btn_print.addEventHandler("onclick",this.fn_printData,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.ds_qamShrinkmeasure.addEventHandler("onrowsetchanged",this.ds_qamShrinkmeasure_onrowsetchanged,this);
            this.ds_search.addEventHandler("oncolumnchanged",this.ds_search_oncolumnchanged,this);
        };
        this.loadIncludeScript("QAM03200M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
