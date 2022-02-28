(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM03100M");
            this.set_titletext("수축율 측정기준 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_qamShrinkproduct", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SHRINKPRODUCTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"FIRSTMEASURE\" type=\"STRING\" size=\"256\"/><Column id=\"SCALE_X1\" type=\"STRING\" size=\"256\"/><Column id=\"SCALE_X2\" type=\"STRING\" size=\"256\"/><Column id=\"SCALE_Y1\" type=\"STRING\" size=\"256\"/><Column id=\"SCALE_Y2\" type=\"STRING\" size=\"256\"/><Column id=\"SCALE_XY1\" type=\"STRING\" size=\"256\"/><Column id=\"SCALE_XY2\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNID\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNUSER\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CREATORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEASURELOTCNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"FIRSTMEASURE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSVALIDSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qamShrinkproductoperation", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PROCESSSEGMENTSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"OPERATIONID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SHRINKPRODUCTID\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"WIPPROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"SCALE_X1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SCALE_X2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SCALE_Y1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SCALE_Y2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SCALE_XY1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SCALE_XY2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CAD_X1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CAD_X2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CAD_Y1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CAD_Y2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CAD_XY1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CAD_XY2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNID\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNUSER\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_output", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_firstShrinkLotList", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SHRINKPRODUCTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTARTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSCOMPLETEYN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_text("수축율 측정기준 등록");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MENU_PG-QC-0793");
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

            obj = new Static("sta_subTitle","0","0","690","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("품목 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("GRIDPRODUCTLIST");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_shrinkproduct",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_delRow",null,"6","26","24","btn_xlDn_grd_shrinkproduct:5",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_addRow",null,"6","26","24","btn_delRow:5",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_shrinkproduct","0","sta_subTitle:0",null,"55%","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamShrinkproduct");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"220\"/><Column size=\"68\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"품목코드\" tooltiptext=\"PRODUCTDEFID\"/><Cell col=\"2\" rowspan=\"2\" text=\"Rev\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell col=\"3\" rowspan=\"2\" text=\"품목명\" tooltiptext=\"ITEMNAME\"/><Cell col=\"4\" colspan=\"2\" text=\"초도측정\" tooltiptext=\"FIRSTMEASURE\"/><Cell col=\"6\" rowspan=\"2\" text=\"측정여부\" tooltiptext=\"ISMEASURE\"/><Cell col=\"7\" colspan=\"6\" text=\"투입 Scale\" tooltiptext=\"INPUTSCALE\"/><Cell col=\"13\" rowspan=\"2\" text=\"등록자\" tooltiptext=\"WRITER\"/><Cell col=\"14\" rowspan=\"2\" text=\"등록일자\" tooltiptext=\"REGISTRATIONDATE\"/><Cell row=\"1\" col=\"4\" text=\"측정\" tooltiptext=\"MEASURE\"/><Cell row=\"1\" col=\"5\" text=\"측정LOT\" tooltiptext=\"MEASURELOT\"/><Cell row=\"1\" col=\"7\" text=\"X1\" tooltiptext=\"SCALE_X1\"/><Cell row=\"1\" col=\"8\" text=\"X2\" tooltiptext=\"SCALE_X2\"/><Cell row=\"1\" col=\"9\" text=\"Y1\" tooltiptext=\"SCALE_Y1\"/><Cell row=\"1\" col=\"10\" text=\"Y2\" tooltiptext=\"SCALE_Y2\"/><Cell row=\"1\" col=\"11\" text=\"XY1\" tooltiptext=\"SCALE_XY1\"/><Cell row=\"1\" col=\"12\" text=\"XY2\" tooltiptext=\"SCALE_XY2\"/></Band><Band id=\"body\"><Cell expr=\"currow + 1\"/><Cell col=\"1\" text=\"bind:PRODUCTDEFID\" expandimage=\"url(&apos;theme://images/img_WF_search_N.png&apos;)\" expandshow=\"expr:dataset.getRowType(currow) == 2 ? &apos;show&apos; : &apos;hide&apos;\" expandsize=\"22\" edittype=\"expr:dataset.getRowType(currow) == 2 ? &apos;text&apos; : &apos;none&apos;\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:FIRSTMEASURE\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,YesNo,,Y,Y\"/><Cell col=\"5\" text=\"bind:MEASURELOTCNT\" textAlign=\"right\" expandimage=\"url(&apos;theme://images/img_WF_search_N.png&apos;)\" expandshow=\"show\" expandsize=\"22\"/><Cell col=\"6\" text=\"bind:VALIDSTATE\" combocodecol=\"C,ValidState,,Y,Y\" displaytype=\"combotext\" edittype=\"checkbox\"/><Cell col=\"7\" text=\"bind:SCALE_X1\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.000\" edittype=\"mask\"/><Cell col=\"8\" text=\"bind:SCALE_X2\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.000\" edittype=\"mask\"/><Cell col=\"9\" text=\"bind:SCALE_Y1\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.000\" edittype=\"mask\"/><Cell col=\"10\" text=\"bind:SCALE_Y2\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.000\" edittype=\"mask\"/><Cell col=\"11\" text=\"bind:SCALE_XY1\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.000\" edittype=\"mask\"/><Cell col=\"12\" text=\"bind:SCALE_XY2\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.000\" edittype=\"mask\"/><Cell col=\"13\" text=\"bind:CREATORNAME\" displaytype=\"expr:dataset.getRowType(currow) ==2 ? &apos;none&apos;:&apos;normal&apos;\"/><Cell col=\"14\" text=\"bind:CREATEDTIME\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"expr:dataset.getRowType(currow) ==2 ? &apos;none&apos;:&apos;date&apos;\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subTitleRegistProcessValue","0","grd_shrinkproduct:10",null,"34","378",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_text("공정별 기준값 등록");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("REGISTPROCESSVALUE");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_shrinkproductoperation","0","sta_subTitleRegistProcessValue:0",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamShrinkproductoperation");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"48\"/><Column size=\"60\"/><Column size=\"160\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"수순\" tooltiptext=\"SEQUENCE\"/><Cell col=\"2\" rowspan=\"2\" text=\"Site\" tooltiptext=\"1493039772944A708CF4F968BF7D80E7\"/><Cell col=\"3\" rowspan=\"2\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"4\" rowspan=\"2\" text=\"공정 ID\"/><Cell col=\"5\" rowspan=\"2\" text=\"측정공정\" tooltiptext=\"MEASUREROCESSSEGMENT\"/><Cell col=\"6\" rowspan=\"2\" text=\"체크 Step\" tooltiptext=\"WIPPROCESSSTATE\"/><Cell col=\"7\" colspan=\"6\" text=\"Scale 기준 값\" tooltiptext=\"SCALEREFERENCEVALUE\"/><Cell col=\"13\" colspan=\"6\" text=\"CAD 값\" tooltiptext=\"CADVALUE\"/><Cell row=\"1\" col=\"7\" text=\"X1\" tooltiptext=\"SCALE_X1\"/><Cell row=\"1\" col=\"8\" text=\"X2\" tooltiptext=\"SCALE_X2\"/><Cell row=\"1\" col=\"9\" text=\"Y1\" tooltiptext=\"SCALE_Y1\"/><Cell row=\"1\" col=\"10\" text=\"Y2\" tooltiptext=\"SCALE_Y2\"/><Cell row=\"1\" col=\"11\" text=\"XY1\" tooltiptext=\"SCALE_XY1\"/><Cell row=\"1\" col=\"12\" text=\"XY2\" tooltiptext=\"SCALE_XY2\"/><Cell row=\"1\" col=\"13\" text=\"X1\" tooltiptext=\"CAD_X1\"/><Cell row=\"1\" col=\"14\" text=\"X2\" tooltiptext=\"CAD_X2\"/><Cell row=\"1\" col=\"15\" text=\"Y1\" tooltiptext=\"CAD_Y1\"/><Cell row=\"1\" col=\"16\" text=\"Y2\" tooltiptext=\"CAD_Y2\"/><Cell row=\"1\" col=\"17\" text=\"XY1\" tooltiptext=\"CAD_XY1\"/><Cell row=\"1\" col=\"18\" text=\"XY2\" tooltiptext=\"CAD_XY2\"/></Band><Band id=\"body\"><Cell expr=\"currow + 1\"/><Cell col=\"1\" text=\"bind:PROCESSSEGMENTSEQ\"/><Cell col=\"2\" text=\"bind:PLANTID\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTNAME\" expandimage=\"url(&apos;theme://images/img_WF_search_N.png&apos;)\" expandshow=\"show\" expandsize=\"22\" edittype=\"text\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:PROCESSSEGMENTID\"/><Cell col=\"5\" text=\"bind:VALIDSTATE\" combocodecol=\"C,ValidState,,Y,Y\" displaytype=\"combotext\"/><Cell col=\"6\" text=\"bind:WIPPROCESSSTATE\" displaytype=\"combotext\" combocodecol=\"C,WipProcessState,,Y,Y\" edittype=\"combo\"/><Cell col=\"7\" text=\"bind:SCALE_X1\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.000\" edittype=\"mask\"/><Cell col=\"8\" text=\"bind:SCALE_X2\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.000\" edittype=\"mask\"/><Cell col=\"9\" text=\"bind:SCALE_Y1\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.000\" edittype=\"mask\"/><Cell col=\"10\" text=\"bind:SCALE_Y2\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.000\" edittype=\"mask\"/><Cell col=\"11\" text=\"bind:SCALE_XY1\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.000\" edittype=\"mask\"/><Cell col=\"12\" text=\"bind:SCALE_XY2\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.000\" edittype=\"mask\"/><Cell col=\"13\" text=\"bind:CAD_X1\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.000\" edittype=\"mask\"/><Cell col=\"14\" text=\"bind:CAD_X2\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.000\" edittype=\"mask\"/><Cell col=\"15\" text=\"bind:CAD_Y1\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.000\" edittype=\"mask\"/><Cell col=\"16\" text=\"bind:CAD_Y2\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.000\" edittype=\"mask\"/><Cell col=\"17\" text=\"bind:CAD_XY1\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.000\" edittype=\"mask\"/><Cell col=\"18\" text=\"bind:CAD_XY2\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.000\" edittype=\"mask\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_shrinkproductoperation",null,"sta_subTitleRegistProcessValue:-27","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_delRowValue",null,"sta_subTitleRegistProcessValue:-27","26","24","34",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_addRowValue",null,"sta_subTitleRegistProcessValue:-27","26","24","65",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","175","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","175","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"155","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_firstmeasure","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("초도측정");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("FIRSTMEASURE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_validstate","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("측정여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ISMEASURE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_validstate","108","85","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_codecolumn("C,ValidState,ALL,Y,Y");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_firstmeasure","108","135","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_site","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_codecolumn("C,SiteType,,Y,Y");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("PLANTID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_productdef","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productdef","108","35",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_productdef",null,"35","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_productdefName","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMNAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productdefName","108","60","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_enable("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productdefVersion","60","457","120","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_value("품목Rev (HIDDEN)");
            obj.set_visible("false");
            obj.set_text("품목Rev (HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_processValidstate","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("측정공정여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("MEASUREROCESSSEGMENTYN");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_processValidstate","108","110","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_codecolumn("C,ValidState,ALL,Y,Y");
            obj.set_value("");
            obj.set_index("-1");
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

            obj = new BindItem("item1","tab_search.Tabpage1.form.edt_productdef","value","ds_search","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab_search.Tabpage1.form.edt_productdefName","value","ds_search","PRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tab_search.Tabpage1.form.cbo_validstate","value","ds_search","VALIDSTATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab_search.Tabpage1.form.cbo_firstmeasure","value","ds_search","FIRSTMEASURE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tab_search.Tabpage1.form.edt_productdefVersion","value","ds_search","PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tab_search.Tabpage1.form.cbo_processValidstate","value","ds_search","PROCESSVALIDSTATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("QAM03100M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("QAM03100M.xfdl","lib::lib_qam.xjs");
        this.registerScript("QAM03100M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 품질관리>>수축율 관리>>수축율 측정기준 등록
         * 파일명 		: QAM03100M.xfdl
         * 작성자 		: 권혜영
         * 작성일 		: 2021.06.02
         *
         * 설  명		: 품질관리 > 수축율관리 > 수축율 측정기준 등록
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.06.02	권혜영   	최초작성
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
        this.txnhistkey;
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
        	this.ds_qamShrinkproduct.clearData();
        	this.ds_qamShrinkproductoperation.clearData();

        	var sSvcID 			= "selectQamShrinkproductList";
        	var sController 	= "/qam03100/selectQamShrinkproductList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_qamShrinkproduct=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 상세 검색
         */
        this.fn_searchDetail = function(objDs, row)
        {
        	if(row < 0) return;

        	var shrinkproductid = objDs.getColumn(row, "SHRINKPRODUCTID");
        	this.ds_qamShrinkproductoperation.clearData();

        	var sSvcID 			= "selectQamShrinkproductoperationList";
        	var sController 	= "/qam03100/selectQamShrinkproductoperationList.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_qamShrinkproductoperation=output";
        	var sArgs 			= "";
        		sArgs        	+= this.gfn_setParam("SHRINKPRODUCTID", shrinkproductid);
        		sArgs			+= this.gfn_setParam("VALIDSTATE", this.tab_search.Tabpage1.form.cbo_processValidstate.value);

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        	this.fn_formInit();
        	this.ds_qamShrinkproduct.clearData();
        	this.ds_qamShrinkproductoperation.clearData();
        };

        /*
         * 기능 : 품목 - 신규
         */
        this.fn_add = function(obj,e)
        {
        	var objDs = this.ds_qamShrinkproduct;

        	if(objDs == null) return;

        	this.fn_searcTxnHistKey();
        	var row = objDs.addRow();

        	objDs.setColumn(row, "SHRINKPRODUCTID", this.txnhistkey);
        	objDs.setColumn(row, "VALIDSTATE", "Valid");
        	objDs.setColumn(row, "ENTERPRISEID", this.gf_getEnterpriseId());
        	objDs.setColumn(row, "PLANTID", this.gf_getSiteType());

        	this.ds_qamShrinkproductoperation.clearData();
        };

        /*
         * 기능 : 품목 - 삭제
         */
        this.fn_delete = function (obj, e)
        {
        	var objDs = this.ds_qamShrinkproduct;
        	var nRowType = objDs.getRowType(objDs.rowposition);

        	if(nRowType==2){
        		var bOK = this.gfn_Message("IsDeleted", null, "conf", "yesno");
        		if (bOK == false) return;
        		objDs.deleteRow(objDs.rowposition);
        	} else {
        		this.gfn_Message("CantdelSaveData", null, "info", "ok");
        	}
        };

        /*
         * 기능 : 기준값 - 신규
         */
        this.fn_addValue = function(obj,e)
        {
        	var objDs = this.ds_qamShrinkproductoperation;
        	var objParentDs = this.ds_qamShrinkproduct;

        	if(objDs == null || objParentDs == null || objParentDs.rowcount <= 0 || objParentDs.rowposition < 0) return;


        	var pShrinkproductid = objParentDs.getColumn(objParentDs.rowposition, "SHRINKPRODUCTID");
        	var pProductdefid = objParentDs.getColumn(objParentDs.rowposition, "PRODUCTDEFID");
        	var pProductdefversion = objParentDs.getColumn(objParentDs.rowposition, "PRODUCTDEFVERSION");

        	if(this.nfn_isNull(pProductdefid) || this.nfn_isNull(pProductdefversion)) {
        		this.gfn_Message("NoSelectedParentProductdefMsg", null, "warning", "ok"); //품목리스트의 품목을 먼저 선택하세요.
        		return;
        	}
        	var row = objDs.addRow();
        	objDs.setColumn(row, "VALIDSTATE", "Valid");
        	objDs.setColumn(row, "SHRINKPRODUCTID", pShrinkproductid);
        	objDs.setColumn(row, "PRODUCTDEFID", pProductdefid);
        	objDs.setColumn(row, "PRODUCTDEFVERSION", pProductdefversion);

        	return row;
        };

        /*
         * 기능 : 기준값 - 삭제
         */
        this.fn_deleteValue = function(obj,e)
        {
        	var objDs = this.ds_qamShrinkproductoperation;
        	var nRowType = objDs.getRowType(objDs.rowposition);

        	if(nRowType==2){
        		var bOK = this.gfn_Message("IsDeleted", null, "conf", "yesno");
        		if (bOK == false) return;
        		objDs.deleteRow(objDs.rowposition);
        	} else {
        		this.gfn_Message("CantdelSaveData", null, "info", "ok");
        	}
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	if (!this.gfn_dsIsUpdated(this.ds_qamShrinkproduct) && !this.gfn_dsIsUpdated(this.ds_qamShrinkproductoperation) )
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}

        	//validation check
        	var component = this.div_work.form.grd_shrinkproduct;
        	var strColIdList = "PRODUCTDEFID,PRODUCTDEFVERSION,FIRSTMEASURE";
        	var rtn = this.nfn_MandatoryCheckGrid(component, strColIdList);
        	if (rtn == false) return;

        	component = this.div_work.form.grd_shrinkproductoperation;
        	strColIdList = "PROCESSSEGMENTID,WIPPROCESSSTATE";
        	rtn = this.nfn_MandatoryCheckGrid(component, strColIdList);
        	if (rtn == false) return;

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveQamShrinkproduct";
        	var sController 	= "/qam03100/saveQamShrinkproduct.do";
        	var sInDatasets 	= "ds_qamShrinkproduct=ds_qamShrinkproduct:U ds_qamShrinkproductoperation=ds_qamShrinkproductoperation:U";
        	var sOutDatasets 	= "";
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
        		if (trId == "saveQamShrinkproduct")
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.fn_search();
        		} else if (trId == "selectQamShrinkproductList")
        		{

        		} else if (trId == "selectQamShrinkproductoperationList")
        		{

        		} else if (trId == "selectTxnHistKey")
        		{
        			this.txnhistkey = this.ds_output.getColumn(0, "TXNHISTKEY");
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

        	if(popupId == "SRCH_PRODUCTDEF")    /*조회조건-품목*/
            {
        		var productdef = this.tab_search.Tabpage1.form.edt_productdef.value;
        		opts = "width=650,height=500";
        		oArg.arg_type = "B";
        		oArg.arg_popupCd = popId;
        		oArg.arg_popupNm = "";
        		oArg.arg_paramCols = "";
        		oArg.arg_paramValues = "";
        		oArg.arg_searchStr = "";

        		oArg.arg_type        = "BA";
        		oArg.arg_paramCols   = "P_POPTYPE|VALIDSTATE|SHRINKPRODUCTYN";
                oArg.arg_paramValues = "PRODUCTDEFINITION|Valid|Y";
                oArg.arg_rtnCols     = "PRODUCTDEFID|PRODUCTDEFVERSION|PRODUCTDEFNAME";

        		if (!this.nfn_isNull(productdef))
        		{
        			oArg.arg_searchStr   = "PRODUCTDEFID=" + productdef;
        		}

            } else if(popupId == "GRD_SRCH_PRODUCTDEF")    /*그리드 조회조건-품목*/
            {
        		var objDs = this.ds_qamShrinkproduct;
        		var productdef = objDs.getColumn(objDs.rowposition, "PRODUCTDEFID");

        		opts = "width=650,height=500";
        		oArg.arg_popupCd = popId;
        		oArg.arg_popupNm = "";
        		oArg.arg_paramCols = "";
        		oArg.arg_paramValues = "";
        		oArg.arg_searchStr = "";

        		oArg.arg_type        = "BA";
        		oArg.arg_paramCols   = "P_POPTYPE|VALIDSTATE|SHRINKPRODUCTYN";
                oArg.arg_paramValues = "PRODUCTDEFINITION|Valid|Y";
                oArg.arg_rtnCols     = "PRODUCTDEFID|PRODUCTDEFVERSION|PRODUCTDEFNAME";

        		if (!this.nfn_isNull(productdef))
        		{
        			oArg.arg_searchStr   = "PRODUCTDEFID=" + productdef;
        		}
            } else if(popupId == "GRD_SRCH_PROCESSSEGMENT")    /*그리드 조회조건-공정*/
            {
        		var objDs = this.ds_qamShrinkproductoperation;
        		var processsegmentname = objDs.getColumn(objDs.rowposition, "PROCESSSEGMENTNAME");

        		var objParentDs = this.ds_qamShrinkproduct;
        		var productdefId = objParentDs.getColumn(objParentDs.rowposition, "PRODUCTDEFID");
        		var productdefVersion = objParentDs.getColumn(objParentDs.rowposition, "PRODUCTDEFVERSION");
        		var productdefName = objParentDs.getColumn(objParentDs.rowposition, "PRODUCTDEFNAME");

        		opts = "width=550,height=500";
        		oArg.arg_popupCd = popId;
        		oArg.arg_popupNm = "";
        		oArg.arg_paramCols = "";
        		oArg.arg_paramValues = "";
        		oArg.arg_searchStr = "";

        		oArg.arg_type        = "CA";
        		oArg.arg_paramCols   = "PRODUCTDEFID|PRODUCTDEFVERSION|ENTERPRISEID|VALIDSTATE";
                oArg.arg_paramValues = productdefId + "|" + productdefVersion + "|" + this.gf_getEnterpriseId() + "|Valid" ;
                oArg.arg_rtnCols     = "PROCESSSEGMENTID|PROCESSSEGMENTNAME|OPERATIONID|PLANTID|PROCESSSEGMENTSEQ|PRODUCTDEFID|PRODUCTDEFVERSION";

        		if (!this.nfn_isNull(processsegmentname))
        		{
        			oArg.arg_searchStr   = "PROCESSSEGMENTID=" + processsegmentname;
        		}
            }

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);

        };

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
            var rtn = this.fv_rtnValue;
            if (this.nfn_isNull(rtn)) return;

            if(sPopupId == "SRCH_PRODUCTDEF")    /*조회조건-품목*/
            {
                this.tab_search.Tabpage1.form.edt_productdef.set_value(rtn[0]);
        		this.tab_search.Tabpage1.form.edt_productdefVersion.set_value(rtn[1]);
        		this.tab_search.Tabpage1.form.edt_productdefName.set_value(rtn[2]);
            } else if(sPopupId == "GRD_SRCH_PRODUCTDEF")    /*그리드 조회조건-품목*/
            {
        		var objDs = this.ds_qamShrinkproduct;

        		objDs.set_enableevent(false);
        		objDs.setColumn(objDs.rowposition, "PRODUCTDEFID", rtn[0]);
        		objDs.setColumn(objDs.rowposition, "PRODUCTDEFVERSION", rtn[1]);
        		objDs.setColumn(objDs.rowposition, "PRODUCTDEFNAME", rtn[2]);
        		objDs.set_enableevent(true);

            } else if(sPopupId == "GRD_SRCH_PROCESSSEGMENT")    /*그리드 조회조건-공정*/
            {
        		var objDs = this.ds_qamShrinkproductoperation, nRow = 0;

        		objDs.set_enableevent(false);
        		for(var i = 0; i < rtn.length; i++){
        			var colArray = rtn[i];
        			var equipmentClassId = colArray[0];
        			var equipmentClassName = colArray[1];
        			var sRow 			= objDs.findRowExpr("EQUIPMENTCLASSID == '"+equipmentClassId+"'");

        			if(i == 0) {
        				nRow = objDs.rowposition;
        			} else {
        				nRow = this.fn_addValue();
        			}
        			objDs.setColumn(nRow, "PROCESSSEGMENTID", colArray[0]);
        			objDs.setColumn(nRow, "PROCESSSEGMENTNAME", colArray[1]);
        			objDs.setColumn(nRow, "OPERATIONID", colArray[2]);
        			objDs.setColumn(nRow, "PLANTID", colArray[3]);
        			objDs.setColumn(nRow, "PROCESSSEGMENTSEQ", colArray[4]);
        		}
        		objDs.set_enableevent(true);
        	} else if(sPopupId == "SRCH_LOT")
        	{
        		this.fn_search();
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
        	this.tab_search.Tabpage1.form.cbo_validstate.set_value("Valid");
        	this.tab_search.Tabpage1.form.cbo_processValidstate.set_value("Valid");
        };

        /*
         * 기능 : 하위 데이터셋이 해당 품목으로 존재하면 return false: 수정 불가
         */
        this.fn_checkData = function(nRow)
        {
        	var ret = true;

        	var productdefid = this.ds_qamShrinkproduct.getColumn(nRow, "PRODUCTDEFID");
        	var productdefversion = this.ds_qamShrinkproduct.getColumn(nRow, "PRODUCTDEFVERSION");

        	var nRowCnt = this.ds_qamShrinkproductoperation.getCaseCount( "PRODUCTDEFID == '"+productdefid+"' && PRODUCTDEFVERSION == '"+productdefversion+"'" );

        	if(nRowCnt > 0) {
        		ret = false;
        	}
        	return ret;
        };

        /*
         * txnhist key 조회
         */
        this.fn_searcTxnHistKey = function ()
        {
        	this.ds_output.clearData();

        	var sSvcID 			= "selectTxnHistKey";
        	var sController 	= "/qampopup/selectTxnHistKey.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_output=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, null, true, false);
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        // 품목코드 버튼 클릭 시
        this.tab_search_Tabpage1_btn_productdef_onclick = function(obj,e)
        {
        	this.fn_openPop("SRCH_PRODUCTDEF","P00202"); //품목코드
        };

        // 등록 버튼 클릭 시
        this.div_work_btn_regist_onclick = function(obj,e)
        {
        	this.fn_openPop("REG_SHRINKPRODUCT","");
        };

        // 검색 조건 변경 시
        this.ds_search_oncolumnchanged = function(obj,e)
        {
        	// 품목코드 변경 시 version, name clear
        	if(e.columnid == "PRODUCTDEFID") {
        		obj.setColumn(e.row, "PRODUCTDEFVERSION", "");
        		obj.setColumn(e.row, "PRODUCTDEFNAME", "");
        	}
        };

        /*
         * 이벤트 : 품목리스트 그리드 팝업 호출
         */
        this.grd_shrinkproduct_onexpandup = function(obj,e)
        {
        	if (e.cell == obj.getBindCellIndex("body", "PRODUCTDEFID")) //품목코드
            {
        		if(!this.fn_checkData(e.row)) return;
        		this.fn_openPop("GRD_SRCH_PRODUCTDEF","P00202");
        	}
        	else if (e.cell == obj.getBindCellIndex("body", "MEASURELOTCNT")) //측정LOT
            {
        		var shrinkProductId = obj.getBindDataset().getColumn(obj.getDatasetRow(e.row), "SHRINKPRODUCTID");
        		var oArg = {arg_plantId: this.tab_search.Tabpage1.form.cbo_site.value, arg_shrinkProductId: shrinkProductId};
        		var opts = "width=1060,height=560";
        		this.gfn_openPopup("SRCH_LOT","qam::QAM03100P1.xfdl",oArg,opts);
        	}
        };



        /*
         * 이벤트 : 공정별 기준값 등록 그리드 팝업 호출
         */
        this.grd_shrinkproductoperation_onexpandup = function(obj,e)
        {
        	if (e.cell == obj.getBindCellIndex("body", "PROCESSSEGMENTNAME")) //공정명
            {
        		this.fn_openPop("GRD_SRCH_PROCESSSEGMENT","P00305");
        	}
        };

        /*
         * 이벤트 : 품목리스트 rowpos 변경 시 공정별 기준값 등록 조회
         */
        this.ds_qamShrinkproduct_onrowposchanged = function(obj,e)
        {
        	if(e.newrow < 0) return;

        	if(obj.getRowType(e.newrow) == 2) {
        		this.ds_qamShrinkproductoperation.clearData();

        	} else {
        		this.fn_searchDetail(obj, e.newrow);
        	}
        };

        /*
         * 이벤트 : 품목리스트 rowpos 변경 전 추가 데이터 확인
         */
        this.ds_qamShrinkproduct_canrowposchange = function(obj,e)
        {
        	if (this.gfn_dsIsUpdated(this.ds_qamShrinkproductoperation) )
        	{
        		if(!this.gfn_confirm("IsChangedButContinue", "question", "")) { //변경된 데이터가 있습니다. 계속하시겠습니까?
        			return false;
        		}
        	}
        };

        /*
         * 이벤트 : 공정별 기준값 수정
         */
        this.ds_qamShrinkproductoperation_oncolumnchanged = function(obj,e)
        {
        	// 공정명 변경 시
        	if(e.columnid == "PROCESSSEGMENTNAME") {
        		obj.setColumn(e.row, "PROCESSSEGMENTID", "");
        	}
        };

        /*
         * 이벤트 : 품목리스트 수정
         */
        this.ds_qamShrinkproduct_oncolumnchanged = function(obj,e)
        {
        	// 품목코드 변경 시
        	if(e.columnid == "PRODUCTDEFID") {

        		obj.setColumn(e.row, "PRODUCTDEFVERSION", "");
        		obj.setColumn(e.row, "PRODUCTDEFNAME", "");
        	}
        };

        /*
         * 이벤트 : 품목리스트 수정 전
         */
        this.ds_qamShrinkproduct_cancolumnchange = function(obj,e)
        {
        	if(e.columnid == "PRODUCTDEFID") {
        		if (this.gfn_dsIsUpdated(this.ds_qamShrinkproductoperation) )
        		{
        			if(!this.gfn_confirm("IsChangedButContinue", "question", "")) { //변경된 데이터가 있습니다. 계속하시겠습니까?
        				return false;
        			} else {
        				this.ds_qamShrinkproductoperation.clearData();
        			}
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
            this.div_work.form.btn_delRow.addEventHandler("onclick",this.fn_delete,this);
            this.div_work.form.btn_addRow.addEventHandler("onclick",this.fn_add,this);
            this.div_work.form.grd_shrinkproduct.addEventHandler("onexpandup",this.grd_shrinkproduct_onexpandup,this);
            this.div_work.form.grd_shrinkproductoperation.addEventHandler("onexpandup",this.grd_shrinkproductoperation_onexpandup,this);
            this.div_work.form.btn_delRowValue.addEventHandler("onclick",this.fn_deleteValue,this);
            this.div_work.form.btn_addRowValue.addEventHandler("onclick",this.fn_addValue,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.btn_productdef.addEventHandler("onclick",this.tab_search_Tabpage1_btn_productdef_onclick,this);
            this.ds_qamShrinkproduct.addEventHandler("onrowposchanged",this.ds_qamShrinkproduct_onrowposchanged,this);
            this.ds_qamShrinkproduct.addEventHandler("canrowposchange",this.ds_qamShrinkproduct_canrowposchange,this);
            this.ds_qamShrinkproduct.addEventHandler("oncolumnchanged",this.ds_qamShrinkproduct_oncolumnchanged,this);
            this.ds_qamShrinkproduct.addEventHandler("cancolumnchange",this.ds_qamShrinkproduct_cancolumnchange,this);
            this.ds_search.addEventHandler("oncolumnchanged",this.ds_search_oncolumnchanged,this);
            this.ds_qamShrinkproductoperation.addEventHandler("oncolumnchanged",this.ds_qamShrinkproductoperation_oncolumnchanged,this);
        };
        this.loadIncludeScript("QAM03100M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
