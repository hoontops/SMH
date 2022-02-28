(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM03300M");
            this.set_titletext("수축율현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_qamShrinkmeasure", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SHRINKMEASUREID\" type=\"STRING\" size=\"256\"/><Column id=\"SHRINKPRODUCTID\" type=\"STRING\" size=\"256\"/><Column id=\"OPERATIONID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTARTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREPNL\" type=\"STRING\" size=\"256\"/><Column id=\"GAUGER\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTDATAFM\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREDATE\" type=\"STRING\" size=\"256\"/><Column id=\"SCALEABNORMALYN\" type=\"STRING\" size=\"256\"/><Column id=\"COMPVAL_X1\" type=\"STRING\" size=\"256\"/><Column id=\"COMPVAL_X2\" type=\"STRING\" size=\"256\"/><Column id=\"COMPVAL_Y1\" type=\"STRING\" size=\"256\"/><Column id=\"COMPVAL_Y2\" type=\"STRING\" size=\"256\"/><Column id=\"COMPVAL_XY1\" type=\"STRING\" size=\"256\"/><Column id=\"COMPVAL_XY2\" type=\"STRING\" size=\"256\"/><Column id=\"OPERVAL_X1\" type=\"STRING\" size=\"256\"/><Column id=\"OPERVAL_X2\" type=\"STRING\" size=\"256\"/><Column id=\"OPERVAL_Y1\" type=\"STRING\" size=\"256\"/><Column id=\"OPERVAL_Y2\" type=\"STRING\" size=\"256\"/><Column id=\"OPERVAL_XY1\" type=\"STRING\" size=\"256\"/><Column id=\"OPERVAL_XY2\" type=\"STRING\" size=\"256\"/><Column id=\"OPERCOMPVAL_X1\" type=\"STRING\" size=\"256\"/><Column id=\"OPERCOMPVAL_X2\" type=\"STRING\" size=\"256\"/><Column id=\"OPERCOMPVAL_Y1\" type=\"STRING\" size=\"256\"/><Column id=\"OPERCOMPVAL_Y2\" type=\"STRING\" size=\"256\"/><Column id=\"OPERCOMPVAL_XY1\" type=\"STRING\" size=\"256\"/><Column id=\"OPERCOMPVAL_XY2\" type=\"STRING\" size=\"256\"/><Column id=\"PRODVAL_X1\" type=\"STRING\" size=\"256\"/><Column id=\"PRODVAL_X2\" type=\"STRING\" size=\"256\"/><Column id=\"PRODVAL_Y1\" type=\"STRING\" size=\"256\"/><Column id=\"PRODVAL_Y2\" type=\"STRING\" size=\"256\"/><Column id=\"PRODVAL_XY1\" type=\"STRING\" size=\"256\"/><Column id=\"PRODVAL_XY2\" type=\"STRING\" size=\"256\"/><Column id=\"PRODCOMPVAL_X1\" type=\"STRING\" size=\"256\"/><Column id=\"PRODCOMPVAL_X2\" type=\"STRING\" size=\"256\"/><Column id=\"PRODCOMPVAL_Y1\" type=\"STRING\" size=\"256\"/><Column id=\"PRODCOMPVAL_Y2\" type=\"STRING\" size=\"256\"/><Column id=\"PRODCOMPVAL_XY1\" type=\"STRING\" size=\"256\"/><Column id=\"PRODCOMPVAL_XY2\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNID\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNUSER\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTARTDATEFR\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSCOMPLETEYN\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTARTDATETO\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREDATEFR\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREDATETO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_groupList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GROUP2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GROUP1_MAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GROUP2_MAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GROUP1_MIN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GROUP2_MIN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GROUP1_X1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GROUP1_X2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GROUP1_Y1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GROUP1_Y2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GROUP1_XY1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GROUP1_XY2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GROUP2_X1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GROUP2_X2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GROUP2_Y1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GROUP2_Y2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GROUP2_XY1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GROUP2_XY2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GROUP_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"MAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MIN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GROUP0\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GROUP0_MAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GROUP0_MIN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GROUP0_X1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GROUP0_X2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GROUP0_Y1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GROUP0_Y2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GROUP0_XY1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GROUP0_XY2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"COLOR_RNK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_group1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTARTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP1_LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP2_LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_group2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTARTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP1_LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP2_LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_groupListByProcesssegmentid", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP1\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP2\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP1_MAX\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP2_MAX\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP1_MIN\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP2_MIN\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP1_X1\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP1_X2\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP1_Y1\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP1_Y2\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP1_XY1\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP1_XY2\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP2_X1\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP2_X2\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP2_Y1\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP2_Y2\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP2_XY1\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP2_XY2\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP0\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GROUP0_MAX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GROUP0_MIN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GROUP0_X1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GROUP0_X2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GROUP0_Y1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GROUP0_Y2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GROUP0_XY1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GROUP0_XY2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"COLOR_RNK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cal", this);
            obj._setContents("<ColumnInfo><Column id=\"VAL\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grdMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"GRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC\" type=\"STRING\" size=\"256\"/><Column id=\"DICTIONARYID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"GRD_NM\">grd_shrinkmeasure</Col><Col id=\"MENU_NM\">LOT별 수율현황</Col><Col id=\"DICTIONARYID\">MENU_PG-QC-0470</Col><Col id=\"FUNC\">fn_openLotYield</Col></Row><Row><Col id=\"GRD_NM\">grd_shrinkmeasure</Col><Col id=\"MENU_NM\">품목별 수율현황</Col><Col id=\"DICTIONARYID\">MENU_PG-QC-0460</Col><Col id=\"FUNC\">fn_openProductYield</Col></Row><Row><Col id=\"MENU_NM\">Lot Defect Map 조회</Col><Col id=\"FUNC\">fn_openLotDefect</Col><Col id=\"GRD_NM\">grd_shrinkmeasure</Col><Col id=\"DICTIONARYID\">MENU_DEFECTMAPBYLOT</Col></Row><Row><Col id=\"GRD_NM\">grd_shrinkmeasure</Col><Col id=\"MENU_NM\">LOT 이력조회</Col><Col id=\"DICTIONARYID\">MENU_PG-SG-980</Col><Col id=\"FUNC\">fn_openLotHist</Col></Row></Rows>");
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

            obj = new Static("sta_title","30","16","144","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_text("수축율현황");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MENU_PG-QC-0795");
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

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_basInfo","0","0",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab_basInfo);
            obj.set_text("수축율 측정현황");
            obj.set_tooltiptext("SHRINKMEASURESTATUS");
            this.div_work.form.tab_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_shrinkagestatus","0","0","690","34",null,null,null,null,null,null,this.div_work.form.tab_basInfo.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("수축율 측정현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("SHRINKMEASURESTATUS");
            this.div_work.form.tab_basInfo.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_shrinkmeasure","0","sta_shrinkagestatus:0",null,null,"0","0",null,null,null,null,this.div_work.form.tab_basInfo.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_qamShrinkmeasure");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"180\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"측정일시\" tooltiptext=\"MEASUREDATE\"/><Cell col=\"2\" rowspan=\"2\" text=\"LOT 투입일\" tooltiptext=\"LOTSTARTDATE\"/><Cell col=\"3\" rowspan=\"2\" text=\"품목코드\" tooltiptext=\"PRODUCTDEFID\"/><Cell col=\"4\" rowspan=\"2\" text=\"Rev\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell col=\"5\" rowspan=\"2\" text=\"품목명\" tooltiptext=\"PRODUCTDEFNAME\"/><Cell col=\"6\" rowspan=\"2\" text=\"LOT ID\" tooltiptext=\"LOTID\"/><Cell col=\"7\" rowspan=\"2\" text=\"공정수순\" tooltiptext=\"USERSEQUENCE\"/><Cell col=\"8\" rowspan=\"2\" text=\"측정공정명\" tooltiptext=\"MEASUREPROCESSSEGMENTNAME\"/><Cell col=\"9\" rowspan=\"2\" text=\"측정상태\" tooltiptext=\"MEASURESTATE\"/><Cell col=\"10\" rowspan=\"2\" text=\"SCALE 이상여부\" tooltiptext=\"SCALEABNORMALYN\"/><Cell col=\"11\" colspan=\"6\" text=\"측정 수축율 값 (%)\" tooltiptext=\"MEASURELOTSHRINKVALUE\"/><Cell col=\"17\" colspan=\"6\" text=\"공정 기준값 (%)\" tooltiptext=\"PROCESSREFERENCEVALUE\"/><Cell col=\"23\" colspan=\"6\" text=\"공정 수축율 비교 값 (%)\" tooltiptext=\"PROCESSSHRINKAGECOMPVALUE \"/><Cell col=\"29\" colspan=\"6\" text=\"투입 수축율 (%)\" tooltiptext=\"INPUTSHRINKAGE\"/><Cell col=\"35\" colspan=\"6\" text=\"투입 수축율 비교 값 (%)\" tooltiptext=\"INPUTSHRINKAGECOMPVALUE\"/><Cell col=\"41\" rowspan=\"2\" text=\"측정자\" tooltiptext=\"MEASURER\"/><Cell col=\"42\" rowspan=\"2\" text=\"측정기\" tooltiptext=\"MEASUREEQUIPMENT\"/><Cell row=\"1\" col=\"11\" text=\"X1\" tooltiptext=\"X1\"/><Cell row=\"1\" col=\"12\" text=\"X2\" tooltiptext=\"X2\"/><Cell row=\"1\" col=\"13\" text=\"Y1\" tooltiptext=\"Y1\"/><Cell row=\"1\" col=\"14\" text=\"Y2\" tooltiptext=\"Y2\"/><Cell row=\"1\" col=\"15\" text=\"XY1\" tooltiptext=\"XY1\"/><Cell row=\"1\" col=\"16\" text=\"XY2\" tooltiptext=\"XY2\"/><Cell row=\"1\" col=\"17\" text=\"X1\" tooltiptext=\"X1\"/><Cell row=\"1\" col=\"18\" text=\"X2\" tooltiptext=\"X2\"/><Cell row=\"1\" col=\"19\" text=\"Y1\" tooltiptext=\"Y1\"/><Cell row=\"1\" col=\"20\" text=\"Y2\" tooltiptext=\"Y2\"/><Cell row=\"1\" col=\"21\" text=\"XY1\" tooltiptext=\"XY1\"/><Cell row=\"1\" col=\"22\" text=\"XY2\" tooltiptext=\"XY2\"/><Cell row=\"1\" col=\"23\" text=\"X1\" tooltiptext=\"X1\"/><Cell row=\"1\" col=\"24\" text=\"X2\" tooltiptext=\"X2\"/><Cell row=\"1\" col=\"25\" text=\"Y1\" tooltiptext=\"Y1\"/><Cell row=\"1\" col=\"26\" text=\"Y2\" tooltiptext=\"Y2\"/><Cell row=\"1\" col=\"27\" text=\"XY1\" tooltiptext=\"XY1\"/><Cell row=\"1\" col=\"28\" text=\"XY2\" tooltiptext=\"XY2\"/><Cell row=\"1\" col=\"29\" text=\"X1\" tooltiptext=\"X1\"/><Cell row=\"1\" col=\"30\" text=\"X2\" tooltiptext=\"X2\"/><Cell row=\"1\" col=\"31\" text=\"Y1\" tooltiptext=\"Y1\"/><Cell row=\"1\" col=\"32\" text=\"Y2\" tooltiptext=\"Y2\"/><Cell row=\"1\" col=\"33\" text=\"XY1\" tooltiptext=\"XY1\"/><Cell row=\"1\" col=\"34\" text=\"XY2\" tooltiptext=\"XY2\"/><Cell row=\"1\" col=\"35\" text=\"X1\" tooltiptext=\"X1\"/><Cell row=\"1\" col=\"36\" text=\"X2\" tooltiptext=\"X2\"/><Cell row=\"1\" col=\"37\" text=\"Y1\" tooltiptext=\"Y1\"/><Cell row=\"1\" col=\"38\" text=\"Y2\" tooltiptext=\"Y2\"/><Cell row=\"1\" col=\"39\" text=\"XY1\" tooltiptext=\"XY1\"/><Cell row=\"1\" col=\"40\" text=\"XY2\" tooltiptext=\"XY2\"/></Band><Band id=\"body\"><Cell expr=\"currow + 1\"/><Cell col=\"1\" text=\"bind:MEASUREDATE\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"2\" text=\"bind:LOTSTARTDATE\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:LOTID\" cssclass=\"expr:comp.parent.parent.parent.parent.parent.parent.fn_setBgColor(currow, SCALEABNORMALYN, &apos;&apos;)\"/><Cell col=\"7\" text=\"bind:USERSEQUENCE\"/><Cell col=\"8\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:PROCESSSTATE\" textAlign=\"left\" combocodecol=\"C,WipProcessState,,Y,N\" displaytype=\"combotext\"/><Cell col=\"10\" text=\"bind:SCALEABNORMALYN\" cssclass=\"expr:comp.parent.parent.parent.parent.parent.parent.fn_setBgColor(currow, SCALEABNORMALYN, &apos;&apos;)\"/><Cell col=\"11\" text=\"bind:COMPVAL_X1\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.000\" cssclass=\"expr:comp.parent.parent.parent.parent.parent.parent.fn_setBgColor(currow, SCALEABNORMALYN, OPERCOMPVAL_X1)\"/><Cell col=\"12\" text=\"bind:COMPVAL_X2\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.000\" cssclass=\"expr:comp.parent.parent.parent.parent.parent.parent.fn_setBgColor(currow, SCALEABNORMALYN, OPERCOMPVAL_X2)\"/><Cell col=\"13\" text=\"bind:COMPVAL_Y1\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.000\" cssclass=\"expr:comp.parent.parent.parent.parent.parent.parent.fn_setBgColor(currow, SCALEABNORMALYN, OPERCOMPVAL_Y1)\"/><Cell col=\"14\" text=\"bind:COMPVAL_Y2\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.000\" cssclass=\"expr:comp.parent.parent.parent.parent.parent.parent.fn_setBgColor(currow, SCALEABNORMALYN, OPERCOMPVAL_Y2)\"/><Cell col=\"15\" text=\"bind:COMPVAL_XY1\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.000\" cssclass=\"expr:comp.parent.parent.parent.parent.parent.parent.fn_setBgColor(currow, SCALEABNORMALYN, OPERCOMPVAL_XY1)\"/><Cell col=\"16\" text=\"bind:COMPVAL_XY2\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.000\" cssclass=\"expr:comp.parent.parent.parent.parent.parent.parent.fn_setBgColor(currow, SCALEABNORMALYN, OPERCOMPVAL_XY2)\"/><Cell col=\"17\" text=\"bind:OPERVAL_X1\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.000\" cssclass=\"expr:comp.parent.parent.parent.parent.parent.parent.fn_setBgColor(currow, SCALEABNORMALYN, OPERCOMPVAL_X1)\"/><Cell col=\"18\" text=\"bind:OPERVAL_X2\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.000\" cssclass=\"expr:comp.parent.parent.parent.parent.parent.parent.fn_setBgColor(currow, SCALEABNORMALYN, OPERCOMPVAL_X2)\"/><Cell col=\"19\" text=\"bind:OPERVAL_Y1\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.000\" cssclass=\"expr:comp.parent.parent.parent.parent.parent.parent.fn_setBgColor(currow, SCALEABNORMALYN, OPERCOMPVAL_Y1)\"/><Cell col=\"20\" text=\"bind:OPERVAL_Y2\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.000\" cssclass=\"expr:comp.parent.parent.parent.parent.parent.parent.fn_setBgColor(currow, SCALEABNORMALYN, OPERCOMPVAL_Y2)\"/><Cell col=\"21\" text=\"bind:OPERVAL_XY1\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.000\" cssclass=\"expr:comp.parent.parent.parent.parent.parent.parent.fn_setBgColor(currow, SCALEABNORMALYN, OPERCOMPVAL_XY1)\"/><Cell col=\"22\" text=\"bind:OPERVAL_XY2\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.000\" cssclass=\"expr:comp.parent.parent.parent.parent.parent.parent.fn_setBgColor(currow, SCALEABNORMALYN, OPERCOMPVAL_XY2)\"/><Cell col=\"23\" text=\"bind:OPERCOMPVAL_X1\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.0000\" cssclass=\"expr:comp.parent.parent.parent.parent.parent.parent.fn_setBgColor(currow, SCALEABNORMALYN, OPERCOMPVAL_X1)\"/><Cell col=\"24\" text=\"bind:OPERCOMPVAL_X2\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.0000\" cssclass=\"expr:comp.parent.parent.parent.parent.parent.parent.fn_setBgColor(currow, SCALEABNORMALYN, OPERCOMPVAL_X2)\"/><Cell col=\"25\" text=\"bind:OPERCOMPVAL_Y1\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.0000\" cssclass=\"expr:comp.parent.parent.parent.parent.parent.parent.fn_setBgColor(currow, SCALEABNORMALYN, OPERCOMPVAL_Y1)\"/><Cell col=\"26\" text=\"bind:OPERCOMPVAL_Y2\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.0000\" cssclass=\"expr:comp.parent.parent.parent.parent.parent.parent.fn_setBgColor(currow, SCALEABNORMALYN, OPERCOMPVAL_Y2)\"/><Cell col=\"27\" text=\"bind:OPERCOMPVAL_XY1\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.0000\" cssclass=\"expr:comp.parent.parent.parent.parent.parent.parent.fn_setBgColor(currow, SCALEABNORMALYN, OPERCOMPVAL_XY1)\"/><Cell col=\"28\" text=\"bind:OPERCOMPVAL_XY2\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.0000\" cssclass=\"expr:comp.parent.parent.parent.parent.parent.parent.fn_setBgColor(currow, SCALEABNORMALYN, OPERCOMPVAL_XY2)\"/><Cell col=\"29\" text=\"bind:PRODVAL_X1\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.000\" cssclass=\"expr:comp.parent.parent.parent.parent.parent.parent.fn_setBgColor(currow, SCALEABNORMALYN, OPERCOMPVAL_X1)\"/><Cell col=\"30\" text=\"bind:PRODVAL_X2\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.000\" cssclass=\"expr:comp.parent.parent.parent.parent.parent.parent.fn_setBgColor(currow, SCALEABNORMALYN, OPERCOMPVAL_X2)\"/><Cell col=\"31\" text=\"bind:PRODVAL_Y1\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.000\" cssclass=\"expr:comp.parent.parent.parent.parent.parent.parent.fn_setBgColor(currow, SCALEABNORMALYN, OPERCOMPVAL_Y1)\"/><Cell col=\"32\" text=\"bind:PRODVAL_Y2\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.000\" cssclass=\"expr:comp.parent.parent.parent.parent.parent.parent.fn_setBgColor(currow, SCALEABNORMALYN, OPERCOMPVAL_Y2)\"/><Cell col=\"33\" text=\"bind:PRODVAL_XY1\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.000\" cssclass=\"expr:comp.parent.parent.parent.parent.parent.parent.fn_setBgColor(currow, SCALEABNORMALYN, OPERCOMPVAL_XY1)\"/><Cell col=\"34\" text=\"bind:PRODVAL_XY2\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.000\" cssclass=\"expr:comp.parent.parent.parent.parent.parent.parent.fn_setBgColor(currow, SCALEABNORMALYN, OPERCOMPVAL_XY2)\"/><Cell col=\"35\" text=\"bind:PRODCOMPVAL_X1\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.000\" cssclass=\"expr:comp.parent.parent.parent.parent.parent.parent.fn_setBgColor(currow, SCALEABNORMALYN, OPERCOMPVAL_X1)\"/><Cell col=\"36\" text=\"bind:PRODCOMPVAL_X2\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.000\" cssclass=\"expr:comp.parent.parent.parent.parent.parent.parent.fn_setBgColor(currow, SCALEABNORMALYN, OPERCOMPVAL_X2)\"/><Cell col=\"37\" text=\"bind:PRODCOMPVAL_Y1\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.000\" cssclass=\"expr:comp.parent.parent.parent.parent.parent.parent.fn_setBgColor(currow, SCALEABNORMALYN, OPERCOMPVAL_Y1)\"/><Cell col=\"38\" text=\"bind:PRODCOMPVAL_Y2\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.000\" cssclass=\"expr:comp.parent.parent.parent.parent.parent.parent.fn_setBgColor(currow, SCALEABNORMALYN, OPERCOMPVAL_Y2)\"/><Cell col=\"39\" text=\"bind:PRODCOMPVAL_XY1\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.000\" cssclass=\"expr:comp.parent.parent.parent.parent.parent.parent.fn_setBgColor(currow, SCALEABNORMALYN, OPERCOMPVAL_XY1)\"/><Cell col=\"40\" text=\"bind:PRODCOMPVAL_XY2\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.000\" cssclass=\"expr:comp.parent.parent.parent.parent.parent.parent.fn_setBgColor(currow, SCALEABNORMALYN, OPERCOMPVAL_XY2)\"/><Cell col=\"41\" text=\"bind:GAUGER\"/><Cell col=\"42\" text=\"bind:EQUIPMENTNAME\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.form.tab_basInfo.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab_basInfo);
            obj.set_text("그룹지정비교");
            obj.set_tooltiptext("GROUPDESIGNATIONCOMP");
            this.div_work.form.tab_basInfo.addChild(obj.name, obj);

            obj = new Div("div_subSearch","0","10",null,"32","0",null,"650",null,"32",null,this.div_work.form.tab_basInfo.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.div_work.form.tab_basInfo.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_valuedisplay","150","0","100","31",null,null,null,null,null,null,this.div_work.form.tab_basInfo.Tabpage2.form.div_subSearch.form);
            obj.set_taborder("0");
            obj.set_text("값 표시");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("VALUEDISPLAY");
            this.div_work.form.tab_basInfo.Tabpage2.form.div_subSearch.addChild(obj.name, obj);

            obj = new Combo("cbo_valuedisplay","sta_valuedisplay:5","5","120","20",null,null,null,null,null,null,this.div_work.form.tab_basInfo.Tabpage2.form.div_subSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("C,ValueDisplay,,Y,Y");
            this.div_work.form.tab_basInfo.Tabpage2.form.div_subSearch.addChild(obj.name, obj);

            obj = new Static("sta_selectXaxis","cbo_valuedisplay:10","0","100","31",null,null,null,null,null,null,this.div_work.form.tab_basInfo.Tabpage2.form.div_subSearch.form);
            obj.set_taborder("2");
            obj.set_text("X축 선택");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("SELECTXAXIS");
            this.div_work.form.tab_basInfo.Tabpage2.form.div_subSearch.addChild(obj.name, obj);

            obj = new Combo("cbo_selectXaxis","sta_selectXaxis:5","5","120","20",null,null,null,null,null,null,this.div_work.form.tab_basInfo.Tabpage2.form.div_subSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("C,XaxisSelection,,Y,Y");
            this.div_work.form.tab_basInfo.Tabpage2.form.div_subSearch.addChild(obj.name, obj);

            obj = new Button("btn_lotView","cbo_selectXaxis:20","3","120","24",null,null,null,null,null,null,this.div_work.form.tab_basInfo.Tabpage2.form.div_subSearch.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("선택 LOT 보기");
            obj.set_tooltiptext("VIEWSELECTLOT");
            this.div_work.form.tab_basInfo.Tabpage2.form.div_subSearch.addChild(obj.name, obj);

            obj = new Static("sta_firstmeasureyn","0","0","100","31",null,null,null,null,null,null,this.div_work.form.tab_basInfo.Tabpage2.form.div_subSearch.form);
            obj.set_taborder("5");
            obj.set_text("Vs. 초도 평균");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("FIRSTAVERAGE");
            this.div_work.form.tab_basInfo.Tabpage2.form.div_subSearch.addChild(obj.name, obj);

            obj = new CheckBox("chk_firstmeasureyn","105","5","25","21",null,null,null,null,null,null,this.div_work.form.tab_basInfo.Tabpage2.form.div_subSearch.form);
            obj.set_taborder("6");
            obj.set_fittocontents("width");
            obj.set_iconPosition("right");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_work.form.tab_basInfo.Tabpage2.form.div_subSearch.addChild(obj.name, obj);

            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","225","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","225","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
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

            obj = new Static("guidetip04",null,"205","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
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

            obj = new Static("sta_lotid","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LOTID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_lotid","108","160","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_lotstartdate","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("투입일");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("INPUTDAY");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_lotstartdatefr","108","35",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_lotstartdateto","108","60",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_measuredate","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("측정일자");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("MEASUREDATE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_measuredatefr","108","85",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_measuredateto","108","110",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_productdef","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCT");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productdef","108","135",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_productdef",null,"135","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_processcomplete","0","185","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("진행완료");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PROCESSCOMPLETE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_processcomplete","108","185","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_codecolumn("C,YesNo,,Y,Y");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productdef_id","100","448","123","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_text("품목ID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productdef_cd","9","448","79","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_text("품목REV");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_lotstartdate","10","60","93","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_measuredate","10","110","93","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
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

            obj = new BindItem("item9","tab_search.Tabpage1.form.cal_lotstartdatefr","value","ds_search","LOTSTARTDATEFR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","tab_search.Tabpage1.form.cal_lotstartdateto","value","ds_search","LOTSTARTDATETO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","tab_search.Tabpage1.form.cal_measuredatefr","value","ds_search","MEASUREDATEFR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","tab_search.Tabpage1.form.cal_measuredateto","value","ds_search","MEASUREDATETO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","tab_search.Tabpage1.form.cbo_processcomplete","value","ds_search","PROCESSCOMPLETEYN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_work.form.tab_basInfo.Tabpage2.form.div_subSearch.form.cbo_valuedisplay","value","ds_save","ITEMUSEYN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_work.form.tab_basInfo.Tabpage2.form.div_subSearch.form.cbo_selectXaxis","value","ds_save","ITEMUSEYN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("QAM03300M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("QAM03300M.xfdl","lib::lib_qam.xjs");
        this.registerScript("QAM03300M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 수축율현황
         * 파일명 		: QAM03300M.xfdl
         * 작성자 		: 권혜영
         * 작성일 		: 2021.06.08
         * 설  명		: 품질관리 > 수축율관리 > 수축율현황
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.06.08	권혜영   	최초작성
         * 2021.07.24   yanghee.kim *그룹지정비교 탭에 초도측정 추가
         *                          *chart에 min, max 값을 표기하기 위해 ChartBase.js(7041Line) 수정
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
        this.objChart = this.div_work.form.tab_basInfo.Tabpage2.form;
        this.isInit = true;
        this.createChartCnt = 0; //생성된 chart 개수 (나중에 삭제하기 위해 필요)
        this.fv_chartContents; //json을 string형태로 저장할 변수

        this.addTicksAreaProcGroup1 = 0; //공정차트 그래프 길이조정용(0.005)
        this.addTicksAreaProcGroup2 = 0; //XY차트 그래프 길이조정용(0.0001)

        this.firstMeasureNm = this.nfn_getDictionaryname("FIRSTMEASURE",true); //초도측정
        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.basfn_getPeriodData("ds_periodType");

        	//this.div_work.form.tab_basInfo.set_tabindex(1);
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
        	this.ds_qamShrinkmeasure.clearData();
        	this.ds_search.setColumn(0, "PRODUCTDEFVERSION", this.tab_search.Tabpage1.form.edt_productdef_cd.value);
        	this.ds_search.setColumn(0, "PRODUCTDEFID", this.tab_search.Tabpage1.form.edt_productdef_id.value);
        	this.ds_search.setColumn(0, "LOTID", this.tab_search.Tabpage1.form.edt_lotid.value);

        	var sSvcID 			= "selectQamShrinkmeasureList";
        	var sController 	= "/qam03300/selectQamShrinkmeasureList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_qamShrinkmeasure=output";
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
        		if (trId == "selectQamShrinkmeasureList")
        		{

        		} else if (trId == "selectQamShrinkmeasureGroupList")
        		{
        			this.isInit = true;
        			//공정별로 group
        			var arrGroupColumn = [];

        			arrGroupColumn.push("PROCESSSEGMENTID");
        			this.qamfn_setDistinct(this.ds_groupList, this.ds_groupListByProcesssegmentid, arrGroupColumn); //PROCESSSEGMENTID 로 group
        			this.ds_groupListByProcesssegmentid.set_keystring("S:+USERSEQUENCE");

        			this.fn_setChart();
        			this.isInit = false;
        		}
        	}
        };

        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/

        //선택 LOT 보기 팝업 호출
        this.fn_openPop = function(obj,e)
        {
        	var oArg = {};
        	var opts = "width=1000,height=600";

        	this.gfn_openPopup("srch_lot","qam::QAM03300P2.xfdl",oArg,opts);
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

        	this.tab_search.Tabpage1.form.cbo_lotstartdate.set_value("THISWEEK");
        	this.tab_search.Tabpage1.form.cbo_measuredate.set_value("THISWEEK");

        	this.fn_setDate("lotstartdate", "THISWEEK");
        	this.fn_setDate("measuredate", "THISWEEK");

        	this.tab_search.Tabpage1.form.cbo_processcomplete.set_value("N");

        };

        /*
         * 기능 : backgrond 색깔 set (SCALEABNORMALYN == 'Y'일 경우 yellow, 기준 수축율 0.03 초과 시)
         */
        this.fn_setBgColor = function(nRow, scaleabnormalYn, val)
        {
        	var retClass = "";
        	if(scaleabnormalYn == "Y") {
        		if(this.nfn_isNull(val)) {
        			retClass = "cell_bg_yellow";
        		} else {
        			var iVal = Math.abs(nexacro.toNumber(val));
        			if(iVal > 0.03) {
        				retClass = "cell_bg_yellow";
        			}
        		}
        	}
        	return retClass;
        };

        /*
         * 기능 : 검색일자 바인딩 함수
         */
        this.fn_setDate = function (calType, periodType)
        {
        	if(calType == "lotstartdate") { //투입일
        		this.tab_search.Tabpage1.form.cal_lotstartdatefr.set_value(this.ds_periodType.getColumn(0,periodType+"_S"));
        		this.tab_search.Tabpage1.form.cal_lotstartdateto.set_value(this.ds_periodType.getColumn(0,periodType+"_E"));
        	} else if(calType == "measuredate") { //측정일
        		this.tab_search.Tabpage1.form.cal_measuredatefr.set_value(this.ds_periodType.getColumn(0,periodType+"_S"));
        		this.tab_search.Tabpage1.form.cal_measuredateto.set_value(this.ds_periodType.getColumn(0,periodType+"_E"));
        	}

        };

        /**************************************************************************
         * 7-1. 차트
         ***************************************************************************/
        /*
         * 기능 : 차트-수축율현황 그룹  검색
         */
        this.fn_searchGroup = function (ds_group1, ds_group2)
        {
        	this.ds_groupList.clearData();

        	var pArgs = "";
        	var arrLotidGroup1 = [], arrLotidGroup2 = [];

        	//parameter set.
        	if(!this.nfn_isNull(ds_group1)) {
        		this.ds_group1.clearData();
        		this.ds_group1.appendData(ds_group1);
        	}
        	if(!this.nfn_isNull(ds_group2)) {
        		this.ds_group2.clearData();
        		this.ds_group2.appendData(ds_group2);
        	}

        	//값이 없을경우 검색되지 않게.
        	if(this.ds_group1.rowcount == 0 && this.ds_group2.rowcount == 0) {
        		return;
        	}
        	//array push.
        	for(var i = 0; i < this.ds_group1.rowcount; i++) {
        		arrLotidGroup1.push(this.ds_group1.getColumn(i, "GROUP1_LOTID"));
        	}
        	if(arrLotidGroup1.length > 0) {
        		pArgs += this.gfn_setParam("GROUP1_LOTID", arrLotidGroup1.join(","));
        	}

        	for(var i = 0; i < this.ds_group2.rowcount; i++) {
        		arrLotidGroup2.push(this.ds_group2.getColumn(i, "GROUP2_LOTID"));
        	}
        	if(arrLotidGroup2.length > 0) {
        		pArgs += this.gfn_setParam("GROUP2_LOTID", arrLotidGroup2.join(","));
        	}

        	//service call.
        	var sSvcID 			= "selectQamShrinkmeasureGroupList";
        	var sController 	= "/qam03300/selectQamShrinkmeasureGroupList.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_groupList=output";
        	var sArgs 			= pArgs;
        		sArgs			+= this.gfn_setParam("VALUEDISPLAY", this.div_work.form.tab_basInfo.Tabpage2.form.div_subSearch.form.cbo_valuedisplay.value);
        		sArgs			+= this.gfn_setParam("FIRSTMEASUREYN", this.div_work.form.tab_basInfo.Tabpage2.form.div_subSearch.form.chk_firstmeasureyn.value);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 차트 설정
         */
        this.fn_setChart = function()
        {
        	var selectX = this.objChart.div_subSearch.form.cbo_selectXaxis.value; //X축 선택 (공정 또는 XY)
        	var valueDisplay = this.objChart.div_subSearch.form.cbo_valuedisplay.value; //값 표시 (LOT 또는 평균)

        	//chart 제거 및 생성 후 group 처리
        	this.fn_removeChart();

        	if(this.ds_groupList.rowcount > 0) {
        		this.fn_createChart(selectX, valueDisplay);
        		this.fn_procGroup(selectX);
        	}
        };

        /*
         * 차트 동적 제거
         */
        this.fn_removeChart = function()
        {
        	var objParentComp = this.div_work.form.tab_basInfo.Tabpage2;

        	for(var i = 1; i <= this.createChartCnt; i++) {
        		var chartId = "chart_" + i;
        		if(!this.nfn_isNull(this.objChart[chartId])) {
        			objParentComp.removeChild(this.objChart[chartId]);
        			this.objChart[chartId].destroy();
        		}
        	}
        };

        /*
         * 차트 동적 생성
         */
        this.fn_createChart = function(selectX, valueDisplay)
        {
        	var objParentComp = this.div_work.form.tab_basInfo.Tabpage2;
        	var chartCnt = 0, title = "", processsegmentid = "";

        	if(selectX == "01") { //공정
        		chartCnt = 6;
        	} else if(selectX == "02") { //XY
        		this.ds_groupList.set_keystring("G:+PROCESSSEGMENTID,S:+USERSEQUENCE");
        		chartCnt = this.ds_groupListByProcesssegmentid.rowcount;
        	}

        	for(var i = 1; i <= chartCnt; i++ ) {
        		processsegmentid = this.ds_groupListByProcesssegmentid.getColumn(i-1, "PROCESSSEGMENTID");

        		// 기준으로 삼을 top id
        		var topObjId = "chart_" + (i-2);
        		var vLeft = (i % 2) == 0 ? "50.5%" : 0;
        		var vTop = (i <= 2) ? "div_subSearch:5" : topObjId + ":5";
        		var vWidth = "49.5%";
        		var vHeight = 300;

        		//BasicChart 생성
        		var objBasicChart = new BasicChart();
        		var objId = "chart_" + i;

        		objBasicChart.init(objId, vLeft, vTop, vWidth, vHeight); //left, top, width, height, right, bottom

        		//BasicChart add event
        		objBasicChart.addEventHandler("onboardclick", this.fn_viewChart, this); //onlbuttondown -> onboardclick
        		objBasicChart.addEventHandler("onlegendclick", this.fn_clickSeries, this);

        		//sub title text 설정
        		if(selectX == "01") { //공정일 경우에는 X1,X2,Y1,....
        			title = this.fn_getColumnName(i);

        		} else { //XY일 경우에는 공정명
        			title = this.ds_groupListByProcesssegmentid.getColumn(i-1, "PROCESSSEGMENTNAME");
        		}

        		//BasicChart  설정
        		objBasicChart.set_categorycolumn("bind:TITLE");
        		objParentComp.addChild(objId, objBasicChart);

        		objBasicChart.set_border("1px solid #e8e8e8");
        		//objBasicChart._setContents(this.fn_getContents(title, valueDisplay));

        		//2021.07.24
        		if (this.div_work.form.tab_basInfo.Tabpage2.form.div_subSearch.form.chk_firstmeasureyn.value == "1"){
        			objBasicChart._setContents(this.fn_getContents2(title, valueDisplay));
        		}
        		else{
        			objBasicChart._setContents(this.fn_getContents(title, valueDisplay));
        		}


        		objBasicChart.set_binddataset(this.ds_groupList);
        		objBasicChart.show();

        		//lot별일 경우 Series 추가 : show를 해주기 전에 series를 setSeries 해줄 경우 "Cannot read property 'getObjectByID' of null" 오류 발생.
        		var valuedisplay = this.objChart.div_subSearch.form.cbo_valuedisplay.value;
        		if(valuedisplay == "LOT") {
        			this.fn_addSeries(selectX, objBasicChart, processsegmentid);
        		}
        	}

        	//height 설정
        	var oriHeight = this.div_work.form.tab_basInfo.height;
        	var curHeight = ((chartCnt / 2) * 300 + 100);

        	if(oriHeight > curHeight) {
        		curHeight = oriHeight;
        	}
        	this.div_work.set_height(curHeight);
        	this.div_work.form.tab_basInfo.set_height(curHeight);

        	this.resetScroll();

        	//초기화
        	this.ds_groupList.set_keystring("");
        	this.createChartCnt = chartCnt;
        };

        /*
         * X축 선택 : 공정일 경우 : new dataset add row and set column
         */

        /*
        - LOT 별
        dataset id : ds_groupList1 - X1
        ------------------------------------------------------------
        TITLE 			| PROCESSSEGMENTID	| GROUP_M210616F002-1-FG-001-001	| GROUP_M210616F002-1-FG-002-001
        외층 M/T적층 	| 4014401			| 0.001 							| -0.002
        외층 M/K인쇄 	| 5010401 			| -0.002							| 0.003
        외층노광 		| 0.5010401		 	| 0.002								| 0.004
        ------------------------------------------------------------

        dataset id : ds_groupList2 - X2
        ------------------------------------------------------------
        TITLE 			| PROCESSSEGMENTID	| GROUP_M210616F002-1-FG-001-001	| GROUP_M210616F002-1-FG-002-001
        외층 M/T적층 	| 4014401			| 0.001 							| -0.002
        외층 M/K인쇄 	| 5010401 			| -0.002							| 0.003
        외층노광 		| 0.5010401		 	| 0.002								| 0.004
        ------------------------------------------------------------
        ....

        - 평균별
        dataset id : ds_groupList1 - X1
        ------------------------------------------------------------
        TITLE 			| GROUP1 	| GROUP2
        외층 M/T적층 	| 0.001 	| -0.002
        외층 M/K인쇄 	| 0.002 	| -0.002
        외층노광 		| 0.004 	| -0.002
        ------------------------------------------------------------
        */
        this.fn_setDatasetByProcess = function(objNewDs, objDs, columnName)
        {
        	var valuedisplay = this.objChart.div_subSearch.form.cbo_valuedisplay.value;
        	if(valuedisplay == "LOT") { //LOT
        		// ------------------------------------------------------------
        		// new dataset add row and set column -> lot별일 경우 row가 들어옴
        		// ------------------------------------------------------------
        		for(var j = 0; j < objDs.rowcount; j++) {
        			var processsegmentid = objDs.getColumn(j, "PROCESSSEGMENTID");
        			var processsegmentname = objDs.getColumn(j, "PROCESSSEGMENTNAME");
        			var lotid = objDs.getColumn(j, "LOTID");
        			var groupNum = objDs.getColumn(j, "GROUP_NUM");

        			var group1 = objDs.getColumn(j, "GROUP1_"+columnName);
        			var group2 = objDs.getColumn(j, "GROUP2_"+columnName);

        			var nRow = 0, val = "";
        			if(groupNum == 1) {
        				val = group1;
        			} else if(groupNum == 2) {
        				val = group2;
        			}

        			//2021.07.24
        			if (this.div_work.form.tab_basInfo.Tabpage2.form.div_subSearch.form.chk_firstmeasureyn.value == "1")
        			{
        				var group0 = objDs.getColumn(j, "GROUP0_"+columnName);
        				if (groupNum == 0) {
        				    val = group0;
        				}
        			}

        			//set 또는 addRow을 해주기 위한 count (공정별로)
        			var filterStr = "PROCESSSEGMENTID == '" + processsegmentid + "'";
        			var nRowCnt = objNewDs.getCaseCount(filterStr);

        			//addcolumn 시에 binding된 컬럼이 '-'가 들어가면 expr이 적용되지 않음
        			lotid = this.qamfn_replace(lotid, "-", "_");
        			var newColumnName = "GROUP_" + lotid;
        			if(nRowCnt == 0) {
        				nRow = objNewDs.addRow();

        				objNewDs.addColumn(newColumnName, "STRING");
        				objNewDs.setColumn(nRow, newColumnName, val);
        				objNewDs.setColumn(nRow, "TITLE", processsegmentname);
        				objNewDs.setColumn(nRow, "PROCESSSEGMENTID", processsegmentid); //비교할 processsegmentid
        				objNewDs.setColumn(nRow, "GROUP_NUM", groupNum);

        			} else {
        				//해당 공정의 row를 찾아서  set 해줌
        				nRow = objNewDs.findRowExpr(filterStr);
        				//새로운 column을 넣어줌
        				objNewDs.addColumn(newColumnName, "STRING");
        				objNewDs.setColumn(nRow, newColumnName, val);
        			}
        		}
        		console.log(objNewDs.saveXML());
        	} else { //평균
        		for(var j = 0; j < objDs.rowcount; j++) {
        			var processsegmentid = objDs.getColumn(j, "PROCESSSEGMENTID");
        			var group1 = objDs.getColumn(j, "GROUP1_"+columnName);
        			var group2 = objDs.getColumn(j, "GROUP2_"+columnName);

        			if(!this.nfn_isNull(group1) || !this.nfn_isNull(group2)) {

        				var nRow = objNewDs.addRow();
        				if(!this.nfn_isNull(group1)) {
        					objNewDs.setColumn(nRow, "GROUP1", group1);
        				}
        				if(!this.nfn_isNull(group2)) {
        					objNewDs.setColumn(nRow, "GROUP2", group2);
        				}

        				objNewDs.setColumn(nRow, "TITLE", objDs.getColumn(j, "PROCESSSEGMENTNAME"));
        			}

        			//2021.07.24
        			if (this.div_work.form.tab_basInfo.Tabpage2.form.div_subSearch.form.chk_firstmeasureyn.value == "1")
        			{
        				var group0 = objDs.getColumn(j, "GROUP0_"+columnName);
        				if(!this.nfn_isNull(group0)) {
        				    objNewDs.setColumn(nRow, "GROUP0", group0);
        					objNewDs.setColumn(nRow, "TITLE", objDs.getColumn(j, "PROCESSSEGMENTNAME"));
        				}
        			}
                }
        		console.log(objNewDs.saveXML());
        	}
        };

        /*
         * X축 선택 : XY일 경우 : new dataset add row and set column
         */
        /*
        - LOT 별
        dataset id : ds_groupList1 - 외층 M/T적층
        ------------------------------------------------------------
        TITLE 	| GROUP_M210616F002-1-FG-001-001	| GROUP_M210616F002-1-FG-002-001
        X1		| 0.001 							| -0.002
        X2		| -0.002							| 0.003
        Y1		| 0.002								| 0.004
        Y2		| 0.002								| 0.002
        XY1		| 0.001								| 0.001
        XY2		| 0.002								| 0.004
        ------------------------------------------------------------

        dataset id : ds_groupList2 - 외층 M/T적층
        ------------------------------------------------------------
        TITLE 	| GROUP_M210616F002-1-FG-001-001	| GROUP_M210616F002-1-FG-002-001
        X1		| 0.001 							| -0.002
        X2		| -0.002							| 0.003
        Y1		| 0.002								| 0.004
        Y2		| 0.003								| 0.001
        XY1		| 0.001								| 0.004
        XY2		| 0.002								| 0.002
        ------------------------------------------------------------
        ....

        - 평균별
        dataset id : ds_groupList1 - 외층 M/T적층
        ------------------------------------------------------------
        TITLE 			| GROUP1 	| GROUP2
        X1 				| 0.001 	| -0.002
        X2 				| -0.002 	| -0.002
        Y1		 		| 0.004 	|  0.001
        Y2		 		| -0.002 	| -0.002
        XY1		 		| 0.001 	| -0.003
        XY2		 		| 0.002 	|  0.001
        ------------------------------------------------------------
        */
        this.fn_setDatasetByXy = function(objNewDs, objDs, objDsRow)
        {
        	// ------------------------------------------------------------
        	// new dataset add row and set column
        	// ------------------------------------------------------------
        	var valuedisplay = this.objChart.div_subSearch.form.cbo_valuedisplay.value;
        	if(valuedisplay == "LOT") { //LOT
        		var lotid = objDs.getColumn(objDsRow, "LOTID");
        		var groupNum = objDs.getColumn(objDsRow, "GROUP_NUM");

        		//addcolumn 시에 binding된 컬럼이 '-'가 들어가면 expr이 적용되지 않음
        		lotid = this.qamfn_replace(lotid, "-", "_");
        		var newColumnName = "GROUP_" + lotid;

        		for(var j = 1; j <= 6; j++) {
        			// ------------------------------------------------------------
        			// binding and setting to chart obj
        			// ------------------------------------------------------------
        			var columnName = this.fn_getColumnName(j);

        			var group1 = objDs.getColumn(objDsRow, "GROUP1_"+columnName);
        			var group2 = objDs.getColumn(objDsRow, "GROUP2_"+columnName);

        			var nRow = 0, val = "";
        			if(groupNum == 1) {
        				val = group1;
        			} else if(groupNum == 2) {
        				val = group2;
        			}

        			//2021.07.24
        			if (this.div_work.form.tab_basInfo.Tabpage2.form.div_subSearch.form.chk_firstmeasureyn.value == "1")
        			{
        				var group0 = objDs.getColumn(objDsRow, "GROUP0_"+columnName);
        				if (groupNum == 0) {
        				    val = group0;
        				}
        			}

        			var filterStr = "TITLE == '" + columnName + "'";
        			var nRowCnt = objNewDs.getCaseCount(filterStr);
        			if(nRowCnt == 0) {
        				nRow = objNewDs.addRow();

        				objNewDs.addColumn(newColumnName, "STRING");
        				objNewDs.setColumn(nRow, newColumnName, val);
        				objNewDs.setColumn(nRow, "TITLE", columnName);

        			} else {
        				//해당 공정의 row를 찾아서  set 해줌
        				nRow = objNewDs.findRowExpr(filterStr);
        				//새로운 column을 넣어줌
        				objNewDs.addColumn(newColumnName, "STRING");
        				objNewDs.setColumn(nRow, newColumnName, val);
        			}
        		}
        	} else { //평균
        		for(var j = 1; j <= 6; j++) {
        			// ------------------------------------------------------------
        			// binding and setting to chart obj
        			// ------------------------------------------------------------
        			var columnName = this.fn_getColumnName(j);

        			var group1 = objDs.getColumn(objDsRow, "GROUP1_"+columnName);
        			var group2 = objDs.getColumn(objDsRow, "GROUP2_"+columnName);

        			if(!this.nfn_isNull(group1) || !this.nfn_isNull(group2)) {
        				var nRow = objNewDs.addRow();

        				if(!this.nfn_isNull(group1)) {
        					objNewDs.setColumn(nRow, "GROUP1", group1);
        				}
        				if(!this.nfn_isNull(group2)) {
        					objNewDs.setColumn(nRow, "GROUP2", group2);
        				}
        				objNewDs.setColumn(nRow, "TITLE", columnName);
        			}

        			//2021.07.24
        			if (this.div_work.form.tab_basInfo.Tabpage2.form.div_subSearch.form.chk_firstmeasureyn.value == "1")
        			{
        				var group0 = objDs.getColumn(objDsRow, "GROUP0_"+columnName);
        				if(!this.nfn_isNull(group0)) {
        				    objNewDs.setColumn(nRow, "GROUP0", group0);
        					objNewDs.setColumn(nRow, "TITLE", columnName);
        				}
        			}

        		}
        	}
        };

        /*
         * dataset 생성 후 group value setting 처리
         */
        this.fn_procGroup = function(selectX)
        {
        	if(selectX == "01") { //공정
        		this.fn_procGroup1();

        	} else if(selectX == "02") { //XY
        		this.fn_procGroup2();
        	}
        };

        /*
         * data 처리 (공정)
         */
        this.fn_procGroup1 = function()
        {
        	// ------------------------------------------------------------
        	// variable declaration
        	// ------------------------------------------------------------
        	var objDs = this.ds_groupList;
        	var arrColList = this.qamfm_getArrColList(objDs);

        	for (var i = 0; i < 6; i++) {
        		// ------------------------------------------------------------
        		// variable declaration
        		// ------------------------------------------------------------
        		var chartId = "chart_" + (i + 1);
        		var columnName = this.fn_getColumnName(i + 1);

        		// ------------------------------------------------------------
        		// new dataset create
        		// ------------------------------------------------------------
        		objDs.filter("GROUP_NUM == '-1'");
        		var objNewDs = objDs.createDataset("ds_groupList" + (i + 1) , arrColList);
        		objDs.filter("");

        		// ------------------------------------------------------------
        		// new dataset add row and set column
        		// ------------------------------------------------------------
        		this.fn_setDatasetByProcess(objNewDs, objDs, columnName);

        		// ------------------------------------------------------------
        		// cal max or min value
        		// ------------------------------------------------------------
        		var arrVal = [];
        		arrVal.push(objDs.getMax("GROUP1_" + columnName));
        		arrVal.push(objDs.getMax("GROUP2_" + columnName));

        		//2021.07.24
        		if (this.div_work.form.tab_basInfo.Tabpage2.form.div_subSearch.form.chk_firstmeasureyn.value == "1")
        		{
        			arrVal.push(objDs.getMax("GROUP0_" + columnName));
        		}
        		var maxGroup = this.fn_getMaxOrMin("MAX", arrVal);
        		maxGroup = maxGroup + nexacro.toNumber(this.addTicksAreaProcGroup1)

        		arrVal = [];
        		arrVal.push(objDs.getMin("GROUP1_" + columnName));
        		arrVal.push(objDs.getMin("GROUP2_" + columnName));

        		//2021.07.24
        		if (this.div_work.form.tab_basInfo.Tabpage2.form.div_subSearch.form.chk_firstmeasureyn.value == "1")
        		{
        			arrVal.push(objDs.getMin("GROUP0_" + columnName));
        		}
        		var minGroup = this.fn_getMaxOrMin("MIN", arrVal);
        		minGroup = minGroup - nexacro.toNumber(this.addTicksAreaProcGroup1)

        		// ------------------------------------------------------------
        		// binding and setting to chart obj
        		// ------------------------------------------------------------
        		if(!this.nfn_isNull(this.objChart[chartId])) {
        			this.objChart[chartId].valueaxes[0].set_tickmax(maxGroup);
        			this.objChart[chartId].valueaxes[0].set_tickmin(minGroup);

        			this.objChart[chartId].set_binddataset(objNewDs);

        			// 설정된 컨텐츠를 다시 세팅해줘야 함
        			this.objChart[chartId].set_contents(this.objChart[chartId].contents);
        			// 차트 보이게 설정
        			this.objChart[chartId].show();
        		}
        	}
        };

        /*
         * data 처리 (XY)
         */
        this.fn_procGroup2 = function()
        {
        	// ------------------------------------------------------------
        	// variable declaration
        	// ------------------------------------------------------------
        	var objDs = this.ds_groupList, objNewDs;
        	var arrColList = this.qamfm_getArrColList(objDs);
        	var processsegmentid = "";
        	var groupIdx = 0, groupCnt = 0;
        	var arrMaxVal = [], arrMinVal = [];

        	for (var i = 0; i < objDs.rowcount; i++) {
        		// ------------------------------------------------------------
        		// new dataset create
        		// ------------------------------------------------------------
        		if(processsegmentid != objDs.getColumn(i, "PROCESSSEGMENTID")) { //processid가 같지 않은 첫번째 로우
        			groupIdx++;
        			groupCnt = 0;

        			objDs.filter("GROUP_NUM == '-1'");
        			objNewDs = objDs.createDataset("ds_groupList" + groupIdx, arrColList);

        			objDs.filter("");

        			// ------------------------------------------------------------
        			// cal max or min value (초기화 후 배열에 담음)
        			// ------------------------------------------------------------
        			arrMaxVal = [], arrMinVal = [];
        			arrMaxVal.push(objDs.getColumn(i, "GROUP1_MAX"));
        			arrMaxVal.push(objDs.getColumn(i, "GROUP2_MAX"));

        			arrMinVal.push(objDs.getColumn(i, "GROUP1_MIN"));
        			arrMinVal.push(objDs.getColumn(i, "GROUP2_MIN"));

        			//2021.07.24
        		    if (this.div_work.form.tab_basInfo.Tabpage2.form.div_subSearch.form.chk_firstmeasureyn.value == "1") {
        				arrMaxVal.push(objDs.getColumn(i, "GROUP0_MAX"));
        				arrMinVal.push(objDs.getColumn(i, "GROUP0_MIN"));
        			}

        		} else { //동일한 processid
        			groupCnt++;

        			arrMaxVal.push(objDs.getColumn(i, "GROUP1_MAX"));
        			arrMaxVal.push(objDs.getColumn(i, "GROUP2_MAX"));

        			arrMinVal.push(objDs.getColumn(i, "GROUP1_MIN"));
        			arrMinVal.push(objDs.getColumn(i, "GROUP2_MIN"));

        			//2021.07.24
        		    if (this.div_work.form.tab_basInfo.Tabpage2.form.div_subSearch.form.chk_firstmeasureyn.value == "1") {
        				arrMaxVal.push(objDs.getColumn(i, "GROUP0_MAX"));
        				arrMinVal.push(objDs.getColumn(i, "GROUP0_MIN"));
        			}
        		}

        		processsegmentid = objDs.getColumn(i, "PROCESSSEGMENTID");
        		// ------------------------------------------------------------
        		// new dataset add row and set column
        		// ------------------------------------------------------------
        		this.fn_setDatasetByXy(objNewDs, objDs, i);

        		var nRowCnt = objDs.getCaseCount( "PROCESSSEGMENTID == '" + processsegmentid + "'" );

        		//group한 맨 마지막 row
        		if(nRowCnt == groupCnt + 1) {
        			// ------------------------------------------------------------
        			// binding and setting to chart obj
        			// ------------------------------------------------------------
        			var chartId = "chart_" + groupIdx;

        			if(!this.nfn_isNull(this.objChart[chartId])) {
        			    var maxGroup = this.fn_getMaxOrMin("MAX", arrMaxVal);
        				maxGroup = maxGroup + nexacro.toNumber(this.addTicksAreaProcGroup2);

        				var minGroup = this.fn_getMaxOrMin("MIN", arrMinVal);
        				minGroup = minGroup - nexacro.toNumber(this.addTicksAreaProcGroup2);

        				this.objChart[chartId].valueaxes[0].set_tickmax(maxGroup);
        				this.objChart[chartId].valueaxes[0].set_tickmin(minGroup);

        				this.objChart[chartId].set_binddataset(objNewDs);

        				// 설정된 컨텐츠를 다시 세팅해줘야 함
        				this.objChart[chartId].set_contents(this.objChart[chartId].contents);
        				// 차트 보이게 설정
        				this.objChart[chartId].show();
        			}
        		}
        	}
        };

        /*
         * Max or Min 값 계산
         */
        this.fn_getMaxOrMin = function(type, arrVal)
        {
        	this.ds_cal.clearData();
        	if(this.nfn_isNull(arrVal)) return;

        	for(var i = 0; i < arrVal.length; i++) {
        		var groupVal, calGroup;

        		if(!this.nfn_isNull(arrVal[i])) {
        			var groupVal = new nexacro.Decimal(arrVal[i]);

        			//자르지 말고 표기.
        // 			if(groupVal < 0) {
        // 				groupVal = groupVal.abs();
        // 				if(type == "MAX") {
        // 					calGroup = nexacro.floor(groupVal, 1);
        // 				} else {
        // 					calGroup = nexacro.ceil(groupVal, 1);
        // 				}
        //
        // 				calGroup = calGroup * -1;
        // 			} else {
        // 				calGroup = nexacro.ceil(groupVal, 1);
        // 			}


        			var nRow = this.ds_cal.addRow();
        			this.ds_cal.setColumn(nRow, "VAL", groupVal);
        		}
        	}
        	if(type == "MAX") {
        		ret = this.ds_cal.getMax("VAL");
        	} else if(type == "MIN") {
        		ret = this.ds_cal.getMin("VAL");
        	}
        	return ret.hi;
        };

        /*
         * series 추가 : lot별일 경우 Series가 LOT 개수만큼 추가되어야 함.
         */
        this.fn_addSeries = function(selectX, objBasicChart, processsegmentid)
        {
        	var objDs = this.ds_groupList;

        	if(selectX == "01") { //공정
        		var group1Cnt = 0, group2Cnt = 0;
        		objBasicChart.deleteAllSeries();

        		//공정일 경우 동일 LOTID 가 다른 공정에 조회되어, LOTID별로 그룹을 다시 한 후, series를 가져와야 함 (2021.06.30)
        		this.ds_temp.clearData();
        		this.qamfn_setDistinct(objDs, this.ds_temp, ["LOTID","GROUP_NUM", "COLOR_RNK"]); //LOTID 로 group
        		this.ds_temp.set_keystring("S:+GROUP_NUM+LOTID+COLOR_RNK");

        		for(var i = 0; i < this.ds_temp.rowcount; i++) {
        			var groupNum = this.ds_temp.getColumn(i, "GROUP_NUM");
        			var lotid = this.ds_temp.getColumn(i, "LOTID");
        			var colorRnk = this.ds_temp.getColumn(i, "COLOR_RNK");
        			//console.log(objBasicChart.getBindDataset().saveXML());
        			var objSeries = this.fn_getSeries(i, lotid, groupNum, colorRnk);
        			objBasicChart.setSeries("series" + i, objSeries);

        		}

        	} else if(selectX == "02") { //XY
        		var group1Cnt = 0, group2Cnt = 0;
        		objBasicChart.deleteAllSeries();

        		var filterStr = "PROCESSSEGMENTID == '" + processsegmentid + "'";
        		objDs.filter(filterStr);
        		objDs.set_keystring("S:+GROUP_NUM+LOTID+COLOR_RNK");

        		for(var i = 0; i < objDs.rowcount; i++) {
        			var groupNum = objDs.getColumn(i, "GROUP_NUM");
        			var lotid = objDs.getColumn(i, "LOTID");
        			var colorRnk = objDs.getColumn(i, "COLOR_RNK");

        			var objSeries = this.fn_getSeries(i, lotid, groupNum, colorRnk);
        			objBasicChart.setSeries("series" + i, objSeries);

        		}
        		objDs.filter("");
        		objDs.set_keystring("");
        	}
        };

        /*
         * 크기가 늘어날 경우 원래 size로 height 변경
         */
        this.fn_setHeight = function()
        {
        	var height = nexacro.getApplication().mainframe.height -200;

        	this.div_work.set_height(height);
        	this.div_work.form.tab_basInfo.set_height(height);

        	this.resetScroll();
        };

        /**************************************************************************
         * 7-2. chart setting.
         ***************************************************************************/
        /*
         * 기능 : chart에서 보여줄 dataset에 data setting.
        ------------------------------------------------------------
        TITLE | X축에 보여질 값을 바인딩할 컬럼들..

        EX)
        TITLE | GROUP1_VAL | GROUP2_VAL | GROUP3_VAL
        X1    | 0.1        | 0.2        | 0.3
        Y1    | 0.3        | 0.6        | 0.7

        ------------------------------------------------------------
        */

        /*
         * Contents 가져오기
         */
        this.fn_getContents = function(title, valueDisplay) {
        	var titleAlign = "topleft";
        	var legendAlign = "topcenter";
        	var itemtextwidth = null;

        	/*
        	LOT별일 경우
        		title : topleft / else : topcenter
        		legend : leftbottom / else : topcenter
        	*/
        	if(valueDisplay == "LOT") {
        		titleAlign = "topcenter";
        		legendAlign = "leftbottom";
        		itemtextwidth = "10";
        	}
        	var obj = {
        		"legend": {
        			"id": "legend",
        			"padding": "0px",
        			"itemtextfont": "normal 9pt/normal \"맑은 고딕\"",
        			"itemtextcolor": "#555555",
        			"horizontalitemgap": "6",
        			"background": "#ffffff",
        			"markertextgap": "3",
        			"align": legendAlign,
        			"itemtextwidth": itemtextwidth
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
        			"visible": true
        		},
        		"categoryaxis": {
        			"id": "categoryaxis",
        			"titletextcolor": "#333333",
        			"titletextfont": "normal 700 11pt/normal \"맑은 고딕\"",
        			"labeltextcolor": "#555555",
        			"labeltextfont": "normal 8pt/normal \"맑은 고딕\"",
        			"ticklinestyle": "0px none",
        			"boardlinestyle": "1px solid #f1f1f1",
        			"axislinestyle": "0px none",
        			"visible": "true",
        			"labelrotate": "-25",
        			"tickstartgap": "25px", //안의 그래프의 start padding(X축)
        			"tickendgap": "25px" //안의 그래프의 end padding(X축)
        		},
        		"valueaxes": [
        			{
        				"id": "valueaxis",
        				"boardlinevisible": true,
        				"boardlinestyle": "1px solid #f1f1f1",
        				"labeltextcolor": "#777777",
        				"labeltextfont": "normal 9pt/normal \"맑은 고딕\"",
        				"titletextcolor": "#333333",
        				"titletextfont": "normal 700 9pt/normal \"맑은 고딕\"",
        				"ticklinestyle": "0px none",
        				"axislinestyle": "1px solid #e8e8e8",
        				"titlegap": "0",
        				"tickmax": "0.02",
        				"tickmin": "-0.04",
        				"labeltype": "number",
        				"labelmask": "#0.00000"
        			}
        		],
        		"hrangebar": {
        			"id": "hrangebar",
        			"background": "#f0f0f0",
        			"linestyle": "0px none",
        			"trackbarlinestyle": "0px none",
        			"trackbarfillstyle": "#cdcdcd",
        			"size": "12",
        			"visible": false,
        			"trackbarpadding": "0px"
        		},
        		"vrangebar": {
        			"id": "vrangebar",
        			"trackbarpadding": "0px",
        			"background": "#f0f0f0",
        			"linestyle": "0px none",
        			"trackbarlinestyle": "0px none",
        			"trackbarfillstyle": "#cdcdcd",
        			"size": "12",
        			"visible": false
        		},
        		"crosshair": {
        			"id": "crosshair",
        			"type": "y",
        			"xlinestyle": "1px solid #dddddd",
        			"ylinestyle": "1px solid #dddddd",
        			"tooltiptype": "y",
        			"xlinetooltipfillstyle": "#000000",
        			"ylinetooltipfillstyle": "#000000",
        			"ylinetooltippadding": "5px 10px 5px 5px",
        			"xlinetooltippadding": "5px 3px 5px 5px",
        			"xlinetooltiptextcolor": "#ffffff",
        			"xlinetooltipborderradius": "5px",
        			"ylinetooltiptextcolor": "#ffffff",
        			"ylinetooltipborderradius": "5px",
        			"visible": false,
        			"ylinetooltipgap": "7"
        		},
        		"seriesset": [
        			{
        				"id": "series1",
        				"titletext": "GROUP1",
        				"barvisible": "false",
        				"barsize": "3",
        				"itemtextcolor": "#333333",
        				"itemtextfont": "normal 700 9pt/normal \"맑은 고딕\"",
        				"valuecolumn": "bind:GROUP1",
        				"itemtextposition": "inside start",
        				"itemtextvisible": "true",
        				"linevisible": "true",
        				"linestyle": "2px solid #0c84c1",
        				"linefillstyle": "#1abd9c",
        				"lineareavisible": "false",
        				"pointvisible": "true",
        				"pointfillstyle": "#ffffff",
        				"pointlinestyle": "2px solid #0c84c1",
        				"linetype": "segment",
        				"stacktype": "none",
        				"lineitemtextposition": "centertop",
        				"pointitemtextgap": "8"
        			},
        			{
        				"id": "series2",
        				"titletext": "GROUP2",
        				"barvisible": "false",
        				"barsize": "3",
        				"itemtextcolor": "#333333",
        				"itemtextfont": "normal 700 9pt/normal \"맑은 고딕\"",
        				"valuecolumn": "bind:GROUP2",
        				"itemtextposition": "inside start",
        				"linevisible": "true",
        				"linestyle": "2px solid #62be1b",
        				"linefillstyle": "#1abd9c",
        				"lineareavisible": "false",
        				"pointvisible": "true",
        				"pointfillstyle": "#ffffff",
        				"pointlinestyle": "2px solid #62be1b",
        				"linetype": "segment",
        				"stacktype": "none",
        				"itemtextvisible": "true",
        				"lineitemtextposition": "centertop",
        				"pointitemtextgap": "8"
        			}
        		],
        		"title": {
        			"id": "title",
        			"align": titleAlign,
        			"textfont": "15pt/normal \"맑은 고딕\"",
        			"padding": "0px",
        			"subtext": title,
        			"subtextcolor": "#ff00ff", //분홍
        			"subtextfont": "15pt/normal \"맑은 고딕\""
        		}
        	};
        	return obj;
        };

        /*
         * Contents 가져오기
         */
        this.fn_getContents2 = function(title, valueDisplay) {
        	var titleAlign = "topleft";
        	var legendAlign = "topcenter";
        	var itemtextwidth = null;

        	/*
        	LOT별일 경우
        		title : topleft / else : topcenter
        		legend : leftbottom / else : topcenter
        	*/
        	if(valueDisplay == "LOT") {
        		titleAlign = "topcenter";
        		legendAlign = "leftbottom";
        		itemtextwidth = "10";
        	}
        	var obj = {
        		"legend": {
        			"id": "legend",
        			"padding": "0px",
        			"itemtextfont": "normal 9pt/normal \"맑은 고딕\"",
        			"itemtextcolor": "#555555",
        			"horizontalitemgap": "6",
        			"background": "#ffffff",
        			"markertextgap": "3",
        			"align": legendAlign,
        			"itemtextwidth": itemtextwidth
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
        			"visible": true
        		},
        		"categoryaxis": {
        			"id": "categoryaxis",
        			"titletextcolor": "#333333",
        			"titletextfont": "normal 700 11pt/normal \"맑은 고딕\"",
        			"labeltextcolor": "#555555",
        			"labeltextfont": "normal 8pt/normal \"맑은 고딕\"",
        			"ticklinestyle": "0px none",
        			"boardlinestyle": "1px solid #f1f1f1",
        			"axislinestyle": "0px none",
        			"visible": "true",
        			"labelrotate": "-25",
        			"tickstartgap": "25px", //안의 그래프의 start padding(X축)
        			"tickendgap": "25px" //안의 그래프의 end padding(X축)
        		},
        		"valueaxes": [
        			{
        				"id": "valueaxis",
        				"boardlinevisible": true,
        				"boardlinestyle": "1px solid #f1f1f1",
        				"labeltextcolor": "#777777",
        				"labeltextfont": "normal 9pt/normal \"맑은 고딕\"",
        				"titletextcolor": "#333333",
        				"titletextfont": "normal 700 9pt/normal \"맑은 고딕\"",
        				"ticklinestyle": "0px none",
        				"axislinestyle": "1px solid #e8e8e8",
        				"titlegap": "0",
        				"tickmax": "0.02",
        				"tickmin": "-0.04",
        				"labeltype": "number",
        				"labelmask": "#0.00000"
        			}
        		],
        		"hrangebar": {
        			"id": "hrangebar",
        			"background": "#f0f0f0",
        			"linestyle": "0px none",
        			"trackbarlinestyle": "0px none",
        			"trackbarfillstyle": "#cdcdcd",
        			"size": "12",
        			"visible": false,
        			"trackbarpadding": "0px"
        		},
        		"vrangebar": {
        			"id": "vrangebar",
        			"trackbarpadding": "0px",
        			"background": "#f0f0f0",
        			"linestyle": "0px none",
        			"trackbarlinestyle": "0px none",
        			"trackbarfillstyle": "#cdcdcd",
        			"size": "12",
        			"visible": false
        		},
        		"crosshair": {
        			"id": "crosshair",
        			"type": "y",
        			"xlinestyle": "1px solid #dddddd",
        			"ylinestyle": "1px solid #dddddd",
        			"tooltiptype": "y",
        			"xlinetooltipfillstyle": "#000000",
        			"ylinetooltipfillstyle": "#000000",
        			"ylinetooltippadding": "5px 10px 5px 5px",
        			"xlinetooltippadding": "5px 3px 5px 5px",
        			"xlinetooltiptextcolor": "#ffffff",
        			"xlinetooltipborderradius": "5px",
        			"ylinetooltiptextcolor": "#ffffff",
        			"ylinetooltipborderradius": "5px",
        			"visible": false,
        			"ylinetooltipgap": "7"
        		},
        		"seriesset": [
                    {
        				"id": "series0",
        				"titletext": this.firstMeasureNm,
        				"barvisible": "false",
        				"barsize": "3",
        				"itemtextcolor": "#333333",
        				"itemtextfont": "normal 700 9pt/normal \"맑은 고딕\"",
        				"valuecolumn": "bind:GROUP0",
        				"itemtextposition": "inside start",
        				"linevisible": "true",
        				"linestyle": "2px solid tomato",
        				"linefillstyle": "#1abd9c",
        				"lineareavisible": "false",
        				"pointvisible": "true",
        				"pointfillstyle": "#ffffff",
        				"pointlinestyle": "2px solid tomato",
        				"linetype": "segment",
        				"stacktype": "none",
        				"itemtextvisible": "true",
        				"lineitemtextposition": "centertop",
        				"pointitemtextgap": "8"
        		 	 }	,
        			 {
        				"id": "series1",
        				"titletext": "GROUP1",
        				"barvisible": "false",
        				"barsize": "3",
        				"itemtextcolor": "#333333",
        				"itemtextfont": "normal 700 9pt/normal \"맑은 고딕\"",
        				"valuecolumn": "bind:GROUP1",
        				"itemtextposition": "inside start",
        				"itemtextvisible": "true",
        				"linevisible": "true",
        				"linestyle": "2px solid #0c84c1",
        				"linefillstyle": "#1abd9c",
        				"lineareavisible": "false",
        				"pointvisible": "true",
        				"pointfillstyle": "#ffffff",
        				"pointlinestyle": "2px solid #0c84c1",
        				"linetype": "segment",
        				"stacktype": "none",
        				"lineitemtextposition": "centertop",
        				"pointitemtextgap": "8"
        			},
        			{
        				"id": "series2",
        				"titletext": "GROUP2",
        				"barvisible": "false",
        				"barsize": "3",
        				"itemtextcolor": "#333333",
        				"itemtextfont": "normal 700 9pt/normal \"맑은 고딕\"",
        				"valuecolumn": "bind:GROUP2",
        				"itemtextposition": "inside start",
        				"linevisible": "true",
        				"linestyle": "2px solid #62be1b",
        				"linefillstyle": "#1abd9c",
        				"lineareavisible": "false",
        				"pointvisible": "true",
        				"pointfillstyle": "#ffffff",
        				"pointlinestyle": "2px solid #62be1b",
        				"linetype": "segment",
        				"stacktype": "none",
        				"itemtextvisible": "true",
        				"lineitemtextposition": "centertop",
        				"pointitemtextgap": "8"
        			}
        		],
        		"title": {
        			"id": "title",
        			"align": titleAlign,
        			"textfont": "15pt/normal \"맑은 고딕\"",
        			"padding": "0px",
        			"subtext": title,
        			"subtextcolor": "#ff00ff", //분홍
        			"subtextfont": "15pt/normal \"맑은 고딕\""
        		}
        	};
        	return obj;
        };

        /*
         * Series 가져오기
         */
        this.fn_getSeries = function(idx, lotid, groupNum, colorRnk)
        {
        	//var group1Color = ["#7b68ee","#6495ed","#87ceeb","#4169e1"];
        	//var group2Color = ["#f08080","#fa8072","#ff4500","#ff7f50"];
            var group1Color = ["#0C84C1","#0054FF","#4641D9","#B5B2FF"];
        	var group2Color = ["#62BE1B","#008100","#6B9900","#CEF279"];

        	//2021.07.24
        	if (this.div_work.form.tab_basInfo.Tabpage2.form.div_subSearch.form.chk_firstmeasureyn.value == "1") {
        	    var group0Color = ["#ED4C00","#FF9436","#B71600","#FFA648"];
        	}

        	//var titleText = "GROUP" + groupNum + "(" + lotid +")";
        	//var nArrColor = groupNum == 1 ? group1Color: group2Color;

        	if (groupNum == 1){
        	    var titleText = "GROUP" + groupNum + "(" + lotid.substr(0,5) + "..." +")";
        		var nArrColor = group1Color;
        	}else if (groupNum == 2){
        		var titleText = "GROUP" + groupNum + "(" + lotid.substr(0,5) + "..." +")";
        		var nArrColor = group2Color;
        	}else if (groupNum == 0){
        		var nArrColor = group0Color;
        		var titleText = this.firstMeasureNm+"(" + lotid.substr(0,5) + "..." +")";
        	}

        	var bindColumn = "GROUP_" + this.qamfn_replace(lotid, "-", "_"); //addcolumn 시에 binding된 컬럼이 '-'가 들어가면 expr이 적용되지 않음

        	//ex) expr: 'test / ' + profit
        	var tooltiptext = "'" + lotid + " / ' + " + bindColumn;

        	var obj = {
        		"id": "series" + idx,
        		"titletext": titleText,
        		"barvisible": "false",
        		"barsize": "3",
        		"itemtextcolor": "#333333",
        		"itemtextfont": "normal 700 9pt/normal \"맑은 고딕\"",
        		"valuecolumn": "bind:" + bindColumn,
        		"itemtextposition": "inside start",
        		"itemtextvisible": "true",
        		"linevisible": "true",
        		"linestyle": "2px solid " + nArrColor[colorRnk % 4],
        		"linefillstyle": "#1abd9c",
        		"lineareavisible": "false",
        		"pointvisible": "true",
        		"pointfillstyle": "#ffffff",
        		"pointlinestyle": "2px solid " + nArrColor[colorRnk % 4],
        		"linetype": "segment",
        		"tooltiptext": "expr:" + tooltiptext,
        		"tooltiptexttype": "text"
        	};
        	return obj;
        };

        /*
         * Column 명 가져오기
         */
        this.fn_getColumnName = function(idx)
        {
        	var ret = "";
        	switch(idx) {
        		case 1:
        			ret = "X1";
        			break;
        		case 2:
        			ret = "X2";
        			break;
        		case 3:
        			ret = "Y1";
        			break;
        		case 4:
        			ret = "Y2";
        			break;
        		case 5:
        			ret = "XY1";
        			break;
        		case 6:
        			ret = "XY2";
        			break;
        	}
        	return ret;
        };

        /**************************************************************************
         * 7-3. 퀵메뉴
         ***************************************************************************/
        /*
         * 기능 : LOT별 수율현황 호출
         */
        this.fn_openLotYield = function ()
        {
        	this.fn_callOpenPage("qam::QAM02300M.xfdl");
        };

        /*
         * 기능 : 품목별 수율현황 호출
         */
        this.fn_openProductYield = function ()
        {
        	this.fn_callOpenPage("qam::QAM02400M.xfdl");
        };

        /*
         * 기능 : Lot Defect Map 조회 호출
         */
        this.fn_openLotDefect = function ()
        {
        	this.fn_callOpenPage("dfm::DFM00100M.xfdl");
        };

        /*
         * 기능 : LOT 이력조회 호출
         */
        this.fn_openLotHist = function ()
        {
        	this.fn_callOpenPage("pcm::PCM03100M.xfdl");
        };

        /*
         * 기능 : 화면 호출
         */
        this.fn_callOpenPage = function (pCallUrl)
        {
        	if ( this.pdv_grdMenu.form.objGrdMenuRow < 0) return;

        	var nRow  = this.pdv_grdMenu.form.objGrdMenuRow;
        	var objDataset = this.ds_qamShrinkmeasure;
        	var lotId = "";


        	if(nRow < 0) return "";
        	var arrColData = [];
        	for(var col=0;col<objDataset.colcount;col++)
        	{
        		var colID = objDataset.getColID(col);
        		var colVal = objDataset.getColumn(nRow, col);
        		arrColData.push( '"' + colID + '":"' + colVal + '"' );
        	}
        	 result = "{" + arrColData.join(",") + "}";

        	var objArgs = {
           			       menuName : "QAM03300M",
        				   objList : [result]
        			      };
        	this.gfn_goPage(pCallUrl, objArgs, true);
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        // 설비조회 팝업 클릭
        this.div_work_div_subLeftSearch_btn_equipment_onclick = function(obj,e)
        {
        	this.fn_openPop("SRCH_EQUIPMENT","P00310"); //설비조회
        };

        //그리드 더블클릭 시
        this.div_work_grd_shrinkmeasure_oncelldblclick = function(obj,e)
        {
        	var objDs = obj.getBindDataset();
        	var shrinkmeasureid = objDs.getColumn(e.row, "SHRINKMEASUREID");

        	var oArg = {arg_shrinkmeasureid: shrinkmeasureid, rowPos: e.row};
        	var opts = "width=820,height=550";

        	this.gfn_openPopup("srch_shrinkmeasureData","qam::QAM03300P1.xfdl",oArg,opts);
        };

        //투입일 기간 변경 시
        this.tab_search_Tabpage1_cbo_lotstartdate_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != "CUSTOM"){
        		this.fn_setDate("lotstartdate", e.postvalue);
        	}
        };

        //측정일 기간 변경 시
        this.tab_search_Tabpage1_cbo_measuredate_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != "CUSTOM"){
        		this.fn_setDate("measuredate", e.postvalue);
        	}
        };

        //일자 변경 시
        this.fn_changeCustom = function(obj,e)
        {
        	if(obj.id.indexOf("cal_lotstartdate") > -1) {
        		this.tab_search.Tabpage1.form.cbo_lotstartdate.set_value("CUSTOM");
        	} else {
        		this.tab_search.Tabpage1.form.cbo_measuredate.set_value("CUSTOM");
        	}
        };

        //tab  변경 시
        this.div_work_tab_basInfo_onchanged = function(obj,e)
        {
        	if(e.postindex == 0) {
        		this.fn_setHeight();
        	}
        	if(e.postindex == 1 && this.isInit) {
        		this.fn_searchGroup();
        	}
        };

        //X축 선택 combo 변경 시 - chart setting 만 변경해줌
        this.div_work_tab_basInfo_Tabpage2_div_subSearch_cbo_selectXaxis_onitemchanged = function(obj,e)
        {
        	this.fn_setChart();
        };

        //값표시 선택 combo 변경 시 - search 다시 해줌
        this.div_work_tab_basInfo_Tabpage2_div_subSearch_cbo_valuedisplay_onitemchanged = function(obj,e)
        {
        	this.fn_searchGroup();
        };

        //form 화면 크기 변경 시
        this.QAM03300M_onsize = function(obj,e)
        {
        	this.fn_setHeight();
        };

        //차트 클릭 시 이벤트 (차트 확대 보여주기)
        this.fn_viewChart = function(obj,e)
        {
        	var objDs = obj.getBindDataset();
        	var objContents = obj.contents;
        	this.fv_chartContents = JSON.stringify(objContents);

        	var oArg = {objDs: objDs, contents: JSON.parse(this.fv_chartContents), bindCategoryColumn: "TITLE"};
        	var opts = "width=1300,height=740";

        	this.gfn_openPopup("view_chart","qam::QAM03300P3.xfdl",oArg,opts);
        };

        //차트 series 클릭 시 이벤트 (해당 text alert으로 띄우기)
        //=>>>> tooltiptext의 값을 expr: LOTID / binding 컬럼명 으로 해줬기 때문에 split을 해줘야 함
        this.fn_clickSeries = function(obj,e)
        {
        	//binding 된 expr의 값을 가져옴 (ex. '40017220-0201-FG00000-001-1-S /  + GROUP_40017220_0201_FG00000_001_1_S')
        	var tooltiptext = obj.seriesset[e.seriesindex].tooltiptext._bindexpr;
        	tooltiptext = this.qamfn_replace(tooltiptext, "'", "");
        	tooltiptext = tooltiptext.substr(0, tooltiptext.indexOf("/") -1);

        	alert(tooltiptext);
        };

        this.div_form_chk_segmentType1_onchanged = function(obj,e)
        {
        	this.fn_searchGroup();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.addEventHandler("onsize",this.QAM03300M_onsize,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.tab_basInfo.addEventHandler("onchanged",this.div_work_tab_basInfo_onchanged,this);
            this.div_work.form.tab_basInfo.Tabpage1.form.grd_shrinkmeasure.addEventHandler("oncelldblclick",this.div_work_grd_shrinkmeasure_oncelldblclick,this);
            this.div_work.form.tab_basInfo.Tabpage2.form.div_subSearch.form.cbo_valuedisplay.addEventHandler("onitemchanged",this.div_work_tab_basInfo_Tabpage2_div_subSearch_cbo_valuedisplay_onitemchanged,this);
            this.div_work.form.tab_basInfo.Tabpage2.form.div_subSearch.form.cbo_selectXaxis.addEventHandler("onitemchanged",this.div_work_tab_basInfo_Tabpage2_div_subSearch_cbo_selectXaxis_onitemchanged,this);
            this.div_work.form.tab_basInfo.Tabpage2.form.div_subSearch.form.btn_lotView.addEventHandler("onclick",this.fn_openPop,this);
            this.div_work.form.tab_basInfo.Tabpage2.form.div_subSearch.form.chk_firstmeasureyn.addEventHandler("onchanged",this.div_form_chk_segmentType1_onchanged,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.cal_lotstartdatefr.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.cal_lotstartdateto.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.cal_measuredatefr.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.cal_measuredateto.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.btn_productdef.addEventHandler("onclick",this.qamfn_callOpenPopButtonEvent,this);
            this.tab_search.Tabpage1.form.cbo_lotstartdate.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_lotstartdate_onitemchanged,this);
            this.tab_search.Tabpage1.form.cbo_measuredate.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_measuredate_onitemchanged,this);
            this.ds_qamShrinkmeasure.addEventHandler("onrowsetchanged",this.ds_qamShrinkmeasure_onrowsetchanged,this);
        };
        this.loadIncludeScript("QAM03300M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
