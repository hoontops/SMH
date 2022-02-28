(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM06100M");
            this.set_titletext("작업 실적 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_workResultByareaList", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"BASEPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"BASEPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"BASEMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WIPPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WIPMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"LARGEPROCESSSEGMENT\" type=\"STRING\" size=\"256\"/><Column id=\"MIDDLEPROCESSSEGMENT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_workResultByproductList", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"BASEPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"BASEPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"BASEMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WIPPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WIPMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"LARGEPROCESSSEGMENT\" type=\"STRING\" size=\"256\"/><Column id=\"MIDDLEPROCESSSEGMENT\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_workResultBylotList", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"WORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENT\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WIPPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WIPMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"LARGEPROCESSSEGMENT\" type=\"STRING\" size=\"256\"/><Column id=\"MIDDLEPROCESSSEGMENT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"TOPPROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"TOPPROCESSSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MIDDLEPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"MIDDLEPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"WORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cbo_ProdVersion", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFVERSIONCODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSIONNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Process", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSNAME_MIDDLE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSNAME_TOP\" type=\"STRING\" size=\"256\"/><Column id=\"P_PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("sta_title","30","16","138","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_text("품질규격 NCR");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MENU_PG-QC-0180");
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
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_formscrollbarsize("10");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_Main","0","0",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab_Main);
            obj.set_text("작업장");
            this.div_work.form.tab_Main.addChild(obj.name, obj);

            obj = new Grid("grd_workResultByareaList","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_workResultByareaList");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"Site ID\" tooltiptext=\"PLANTID\"/><Cell col=\"1\" rowspan=\"2\" text=\"작업장\" tooltiptext=\"WORKAREA\"/><Cell col=\"2\" rowspan=\"2\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"3\" rowspan=\"2\" text=\"Roll/Sheet\" tooltiptext=\"RTRSHT_WORDWRAP\"/><Cell col=\"4\" colspan=\"3\" text=\"기초\" cssclass=\"cell_headMaster\" tooltiptext=\"BASICS\"/><Cell col=\"7\" colspan=\"3\" text=\"실적\" tooltiptext=\"OSPCLOSEACTUALAINFO\"/><Cell col=\"10\" colspan=\"3\" text=\"현재공\" cssclass=\"cell_headMaster\" tooltiptext=\"CURRENTWIP\"/><Cell col=\"13\" colspan=\"3\" text=\"투입\" tooltiptext=\"INPUT\"/><Cell col=\"16\" rowspan=\"2\" text=\"대공정\" tooltiptext=\"TOPPROCESSSEGMENTCLASS\"/><Cell col=\"17\" rowspan=\"2\" text=\"중공정\" tooltiptext=\"MIDDLEPROCESSSEGMENT\"/><Cell row=\"1\" col=\"4\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"5\" text=\"PNL\" tooltiptext=\"OSPDAY01PNL\"/><Cell row=\"1\" col=\"6\" text=\"MM\" tooltiptext=\"OSPDAY09MM\"/><Cell row=\"1\" col=\"7\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"8\" text=\"PNL\" tooltiptext=\"OSPDAY01PNL\"/><Cell row=\"1\" col=\"9\" text=\"MM\" tooltiptext=\"OSPDAY09MM\"/><Cell row=\"1\" col=\"10\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"11\" text=\"PNL\" tooltiptext=\"OSPDAY01PNL\"/><Cell row=\"1\" col=\"12\" text=\"MM\" tooltiptext=\"OSPDAY09MM\"/><Cell row=\"1\" col=\"13\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"14\" text=\"PNL\" tooltiptext=\"OSPDAY01PNL\"/><Cell row=\"1\" col=\"15\" text=\"MM\" tooltiptext=\"OSPDAY09MM\"/></Band><Band id=\"body\"><Cell text=\"bind:PLANTID\"/><Cell col=\"1\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:RTRSHT\"/><Cell col=\"4\" text=\"bind:BASEPCSQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:BASEPANELQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:BASEMMQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"7\" text=\"bind:SENDPCSQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"8\" text=\"bind:SENDPANELQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:SENDMMQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"10\" text=\"bind:WIPQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"11\" text=\"bind:WIPPANELQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"12\" text=\"bind:WIPMMQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"13\" text=\"bind:INPUTPCSQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"14\" text=\"bind:INPUTPANELQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"15\" text=\"bind:INPUTMMQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"16\" text=\"bind:LARGEPROCESSSEGMENT\" textAlign=\"left\"/><Cell col=\"17\" text=\"bind:MIDDLEPROCESSSEGMENT\" textAlign=\"left\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"합계\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" displaytype=\"number\" textAlign=\"right\" maskeditformat=\"###,\" expr=\"dataset.getSum(&quot;BASEPCSQTY&quot;) \"/><Cell col=\"5\" displaytype=\"number\" textAlign=\"right\" maskeditformat=\"###,\" expr=\"dataset.getSum(&quot;BASEPANELQTY&quot;) \"/><Cell col=\"6\" displaytype=\"number\" textAlign=\"right\" maskeditformat=\"###,\" expr=\"dataset.getSum(&quot;BASEMMQTY&quot;) \"/><Cell col=\"7\" displaytype=\"number\" textAlign=\"right\" maskeditformat=\"###,\" expr=\"dataset.getSum(&quot;SENDPCSQTY&quot;) \"/><Cell col=\"8\" displaytype=\"number\" textAlign=\"right\" maskeditformat=\"###,\" expr=\"dataset.getSum(&quot;SENDPANELQTY&quot;) \"/><Cell col=\"9\" displaytype=\"number\" textAlign=\"right\" maskeditformat=\"###,\" expr=\"dataset.getSum(&quot;SENDMMQTY&quot;) \"/><Cell col=\"10\" displaytype=\"number\" textAlign=\"right\" maskeditformat=\"###,\" expr=\"dataset.getSum(&quot;WIPQTY&quot;) \"/><Cell col=\"11\" displaytype=\"number\" textAlign=\"right\" maskeditformat=\"###,\" expr=\"dataset.getSum(&quot;WIPPANELQTY&quot;) \"/><Cell col=\"12\" expr=\"dataset.getSum(&quot;WIPMMQTY&quot;) \" displaytype=\"number\" maskeditformat=\"###,\"/><Cell col=\"13\" expr=\"dataset.getSum(&quot;INPUTPCSQTY&quot;) \" displaytype=\"number\" maskeditformat=\"###,\"/><Cell col=\"14\" expr=\"dataset.getSum(&quot;INPUTPANELQTY&quot;) \" displaytype=\"number\" maskeditformat=\"###,\"/><Cell col=\"15\" expr=\"dataset.getSum(&quot;INPUTMMQTY&quot;) \" displaytype=\"number\" maskeditformat=\"###,\"/><Cell col=\"16\"/><Cell col=\"17\"/></Band></Format></Formats>");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_subTitle01","0","0",null,"34","0",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("작업장별 실적현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("WORKRESULTBYAREA");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_workResultByareaList",null,"6","29",null,"0","grd_workResultByareaList:4",null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("GridImport");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_workResultByareaList","130","2","140","30",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab_Main);
            obj.set_text("품목");
            this.div_work.form.tab_Main.addChild(obj.name, obj);

            obj = new Grid("grd_workResultByproductList","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_Main.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_workResultByproductList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"250\"/><Column size=\"50\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"생산구분\" tooltiptext=\"PRODUCTIONTYPE\"/><Cell col=\"1\" rowspan=\"2\" text=\"Site ID\" tooltiptext=\"PLANTID\"/><Cell col=\"2\" rowspan=\"2\" text=\"품목코드\" tooltiptext=\"ITEMCODE\"/><Cell col=\"3\" rowspan=\"2\" text=\"Rev.\" tooltiptext=\"INNERREVISION\"/><Cell col=\"4\" rowspan=\"2\" text=\"품목명\" tooltiptext=\"ITEMNAME\"/><Cell col=\"5\" rowspan=\"2\" text=\"공정수순\" tooltiptext=\"USERSEQUENCE\"/><Cell col=\"6\" rowspan=\"2\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"7\" rowspan=\"2\" text=\"작업장\" tooltiptext=\"WORKAREA\"/><Cell col=\"8\" colspan=\"3\" text=\"기초\" cssclass=\"cell_headMaster\" tooltiptext=\"BASICS\"/><Cell col=\"11\" colspan=\"3\" text=\"실적\" tooltiptext=\"OSPCLOSEACTUALAINFO\"/><Cell col=\"14\" colspan=\"3\" text=\"현재공\" cssclass=\"cell_headMaster\" tooltiptext=\"CURRENTWIP\"/><Cell col=\"17\" colspan=\"3\" text=\"투입\" tooltiptext=\"INPUT\"/><Cell col=\"20\" rowspan=\"2\" text=\"대공정\" tooltiptext=\"TOPPROCESSSEGMENTCLASS\"/><Cell col=\"21\" rowspan=\"2\" text=\"중공정\" tooltiptext=\"MIDDLEPROCESSSEGMENT\"/><Cell row=\"1\" col=\"8\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"9\" text=\"PNL\" tooltiptext=\"OSPDAY01PNL\"/><Cell row=\"1\" col=\"10\" text=\"MM\" tooltiptext=\"OSPDAY09MM\"/><Cell row=\"1\" col=\"11\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"12\" text=\"PNL\" tooltiptext=\"OSPDAY01PNL\"/><Cell row=\"1\" col=\"13\" text=\"MM\" tooltiptext=\"OSPDAY09MM\"/><Cell row=\"1\" col=\"14\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"15\" text=\"PNL\" tooltiptext=\"OSPDAY01PNL\"/><Cell row=\"1\" col=\"16\" text=\"MM\" tooltiptext=\"OSPDAY09MM\"/><Cell row=\"1\" col=\"17\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"18\" text=\"PNL\" tooltiptext=\"OSPDAY01PNL\"/><Cell row=\"1\" col=\"19\" text=\"MM\" tooltiptext=\"OSPDAY09MM\"/></Band><Band id=\"body\"><Cell text=\"bind:LOTTYPE\"/><Cell col=\"1\" text=\"bind:PLANTID\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:USERSEQUENCE\"/><Cell col=\"6\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:BASEPCSQTY\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:BASEPANELQTY\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:BASEMMQTY\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:SENDPCSQTY\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"12\" text=\"bind:SENDPANELQTY\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"13\" text=\"bind:SENDMMQTY\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"14\" text=\"bind:WIPQTY\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"15\" text=\"bind:WIPPANELQTY\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"16\" text=\"bind:WIPMMQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"17\" text=\"bind:INPUTPCSQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"18\" displaytype=\"number\" textAlign=\"right\" text=\"bind:INPUTPANELQTY\"/><Cell col=\"19\" displaytype=\"number\" textAlign=\"right\" text=\"bind:INPUTMMQTY\"/><Cell col=\"20\" textAlign=\"left\" text=\"bind:LARGEPROCESSSEGMENT\"/><Cell col=\"21\" textAlign=\"left\" text=\"bind:MIDDLEPROCESSSEGMENT\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" text=\"합계\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\" text=\"0\" displaytype=\"number\" expr=\"dataset.getSum(&quot;BASEPCSQTY&quot;)\"/><Cell col=\"9\" text=\"0\" displaytype=\"number\" expr=\"dataset.getSum(&quot;BASEPANELQTY&quot;)\"/><Cell col=\"10\" text=\"0\" displaytype=\"number\" expr=\"dataset.getSum(&quot;BASEMMQTY&quot;)\"/><Cell col=\"11\" text=\"0\" displaytype=\"number\" expr=\"dataset.getSum(&quot;SENDPCSQTY&quot;)\"/><Cell col=\"12\" text=\"0\" displaytype=\"number\" expr=\"dataset.getSum(&quot;SENDPANELQTY&quot;)\"/><Cell col=\"13\" text=\"0\" displaytype=\"number\" expr=\"dataset.getSum(&quot;SENDMMQTY&quot;)\"/><Cell col=\"14\" expr=\"dataset.getSum(&quot;WIPQTY&quot;)\" displaytype=\"number\" text=\"0\"/><Cell col=\"15\" text=\"0\" displaytype=\"number\" expr=\"dataset.getSum(&quot;WIPPANELQTY&quot;)\"/><Cell col=\"16\" expr=\"dataset.getSum(&quot;WIPMMQTY&quot;)\" displaytype=\"number\" text=\"0\"/><Cell col=\"17\" text=\"0\" expr=\"dataset.getSum(&quot;INPUTPCSQTY&quot;)\" displaytype=\"number\"/><Cell col=\"18\" displaytype=\"number\" expr=\"dataset.getSum(&quot;INPUTPANELQTY&quot;)\" text=\"0\"/><Cell col=\"19\" text=\"0\" expr=\"dataset.getSum(&quot;INPUTMMQTY&quot;)\" displaytype=\"number\"/><Cell col=\"20\" displaytype=\"normal\"/><Cell col=\"21\" expr=\"dataset.getSum(&quot;BASEPCSQTY&quot;)\" displaytype=\"number\"/></Band></Format></Formats>");
            this.div_work.form.tab_Main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_00","0","0",null,"34","0",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("품목별 실적현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("WORKRESULTBYPRODUCT");
            this.div_work.form.tab_Main.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_workResultByproductList",null,"6","29",null,"0","grd_workResultByproductList:4",null,null,null,null,this.div_work.form.tab_Main.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_Main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_workResultByproductList","112","2","140","30",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_Main.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.div_work.form.tab_Main);
            obj.set_text("LOT");
            this.div_work.form.tab_Main.addChild(obj.name, obj);

            obj = new Static("sta_00","0","0",null,"34","0",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_text("LOT별 실적현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("WORKRESULTBYLOT");
            this.div_work.form.tab_Main.Tabpage3.addChild(obj.name, obj);

            obj = new Grid("grd_workResultBylotList","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_Main.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_workResultBylotList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"180\"/><Column size=\"200\"/><Column size=\"50\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"생산구분\" tooltiptext=\"PRODUCTIONTYPE\"/><Cell col=\"1\" rowspan=\"2\" text=\"Site ID\" tooltiptext=\"PLANTID\"/><Cell col=\"2\" rowspan=\"2\" text=\"품목코드\" tooltiptext=\"ITEMCODE\"/><Cell col=\"3\" rowspan=\"2\" text=\"Rev.\" tooltiptext=\"INNERREVISION\"/><Cell col=\"4\" rowspan=\"2\" text=\"품목명\" tooltiptext=\"ITEMID\"/><Cell col=\"5\" rowspan=\"2\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell col=\"6\" rowspan=\"2\" text=\"공정수순\" tooltiptext=\"USERSEQUENCE\"/><Cell col=\"7\" rowspan=\"2\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"8\" rowspan=\"2\" text=\"작업장\" tooltiptext=\"WORKAREA\"/><Cell col=\"9\" rowspan=\"2\" text=\"Roll/Sheet\" tooltiptext=\"RTRSHT_WORDWRAP\"/><Cell col=\"10\" rowspan=\"2\" text=\"작업구분\" tooltiptext=\"WORKTYPE\"/><Cell col=\"11\" rowspan=\"2\" text=\"자원\" tooltiptext=\"RESOURCE\"/><Cell col=\"12\" colspan=\"3\" text=\"실적\" cssclass=\"cell_headMaster\" tooltiptext=\"OSPCLOSEACTUALAINFO\"/><Cell col=\"15\" colspan=\"3\" text=\"현재공\" tooltiptext=\"CURRENTWIP\"/><Cell col=\"18\" colspan=\"3\" text=\"투입\" tooltiptext=\"INPUT\"/><Cell col=\"21\" rowspan=\"2\" text=\"대공정\" tooltiptext=\"TOPPROCESSSEGMENTCLASS\"/><Cell col=\"22\" rowspan=\"2\" text=\"중공정\" tooltiptext=\"MIDDLEPROCESSSEGMENT\"/><Cell row=\"1\" col=\"12\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"13\" text=\"PNL\" tooltiptext=\"OSPDAY01PNL\"/><Cell row=\"1\" col=\"14\" text=\"MM\" tooltiptext=\"OSPDAY09MM\"/><Cell row=\"1\" col=\"15\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"16\" text=\"PNL\" tooltiptext=\"OSPDAY01PNL\"/><Cell row=\"1\" col=\"17\" text=\"MM\" tooltiptext=\"OSPDAY09MM\"/><Cell row=\"1\" col=\"18\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"19\" text=\"PNL\" tooltiptext=\"OSPDAY01PNL\"/><Cell row=\"1\" col=\"20\" text=\"MM\" tooltiptext=\"OSPDAY09MM\"/></Band><Band id=\"body\"><Cell text=\"bind:LOTTYPE\"/><Cell col=\"1\" text=\"bind:PLANTID\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:LOTID\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:USERSEQUENCE\"/><Cell col=\"7\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:RTRSHT\"/><Cell col=\"10\" text=\"bind:WORKTYPE\" combocodecol=\"C,LotWorkType,,Y,N\" displaytype=\"combotext\"/><Cell col=\"11\" text=\"bind:EQUIPMENT\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"12\" text=\"bind:SENDPCSQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"13\" text=\"bind:SENDPANELQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"14\" text=\"bind:SENDMMQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"15\" text=\"bind:WIPQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"16\" text=\"bind:WIPPANELQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"17\" text=\"bind:WIPMMQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"18\" text=\"bind:INPUTPCSQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"19\" text=\"bind:INPUTPANELQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"20\" text=\"bind:INPUTMMQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"21\" text=\"bind:LARGEPROCESSSEGMENT\" textAlign=\"left\"/><Cell col=\"22\" text=\"bind:MIDDLEPROCESSSEGMENT\" textAlign=\"left\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\" text=\"합계\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\" text=\"0\" displaytype=\"number\" expr=\"dataset.getSum(&quot;SENDPCSQTY&quot;)\"/><Cell col=\"13\" text=\"0\" displaytype=\"number\" expr=\"dataset.getSum(&quot;SENDPANELQTY&quot;)\"/><Cell col=\"14\" text=\"0\" displaytype=\"number\" expr=\"dataset.getSum(&quot;SENDMMQTY&quot;)\"/><Cell col=\"15\" text=\"0\" displaytype=\"number\" expr=\"dataset.getSum(&quot;WIPQTY&quot;)\"/><Cell col=\"16\" displaytype=\"number\" text=\"0\" expr=\"dataset.getSum(&quot;WIPPANELQTY&quot;)\"/><Cell col=\"17\" text=\"0\" displaytype=\"number\" expr=\"dataset.getSum(&quot;WIPMMQTY&quot;)\"/><Cell col=\"18\" displaytype=\"number\" text=\"0\" expr=\"dataset.getSum(&quot;INPUTPCSQTY&quot;)\"/><Cell col=\"19\" text=\"0\" displaytype=\"number\" expr=\"dataset.getSum(&quot;INPUTPANELQTY&quot;)\"/><Cell col=\"20\" displaytype=\"number\" text=\"0\" expr=\"dataset.getSum(&quot;INPUTMMQTY&quot;)\"/><Cell col=\"21\"/><Cell col=\"22\"/></Band></Format></Formats>");
            this.div_work.form.tab_Main.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_workResultBylotList",null,"6","29",null,"0","grd_workResultBylotList:4",null,null,null,null,this.div_work.form.tab_Main.Tabpage3.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_Main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_workResultBylotList","112","2","140","30",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage3.form);
            obj.set_taborder("3");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_Main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_01","50.00%","7","200","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("조회기준 08:30");
            obj.set_cssclass("txt_13B,sta_font_blue");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"380","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("29");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","Static12_00_00_00_01_00_00:0","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","Static12_00_00_00_01_00_00:0","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            obj.set_hotkey("F2");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip00",null,"110","15","97","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip01","0","105","15","97",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_dateFrom","108","35",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_url("common::com_calendar.xfdl");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_dateTo","108","60",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_url("common::com_calendar.xfdl");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTDEFID","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMCODE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTDEFVERSION","0","sta_PRODUCTDEFID:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_text("Rev.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("INNERREVISION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTDEFNAME","0","sta_PRODUCTDEFVERSION:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_AREAID","0","sta_PRODUCTDEFNAME:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("AREA");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_TOPPROCESSSEGMENTCLASS","0","sta_AREAID:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("32");
            obj.set_text("대공정");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("TOPPROCESSSEGMENTCLASS");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_MIDDLEPROCESSSEGMENT","0","sta_TOPPROCESSSEGMENTCLASS:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("31");
            obj.set_text("중공정");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("MIDDLEPROCESSSEGMENT");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_PROCSEGMENT","0","sta_MIDDLEPROCESSSEGMENT:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("26");
            obj.set_text("공정");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PROCESSCHANGETYPE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTIONTYPE","0","sta_PROCSEGMENT:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("24");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTIONTYPE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTDIVISION","0","sta_PRODUCTIONTYPE:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("제품구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("THEPRODUCTTYPE");
            obj.set_taborder("38");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_WORKTYPE","0","sta_PRODUCTDIVISION:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_text("작업구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("WORKTYPE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID","108","85",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTDEFVERSION","108","edt_PRODUCTDEFID:5","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_codecolumn("PRODUCTDEFVERSIONCODE");
            obj.set_datacolumn("PRODUCTDEFVERSIONNAME");
            obj.set_innerdataset("ds_cbo_ProdVersion");
            obj.set_text("전체조회");
            obj.set_value("");
            obj.set_index("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_AREAID","108","160",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_AREAID",null,"160","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_PRODUCTDEFID",null,"85","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("27");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_MIDDLEPROCESSSEGMENT","108","210",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTIONTYPE","108","260","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            obj.set_text("전체조회");
            obj.set_value("");
            obj.set_index("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_TOPPROCESSSEGMENTCLASS",null,"btn_AREAID:5","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("33");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_MIDDLEPROCESSSEGMENT",null,"btn_TOPPROCESSSEGMENTCLASS:5","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("34");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_PROCSEGMENT",null,"btn_MIDDLEPROCESSSEGMENT:5","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("28");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTDIVISION","108","cbo_PRODUCTIONTYPE:5","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_codecolumn("C,ProductDivision2,ALL,Y,Y");
            obj.set_text("선택");
            obj.set_index("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_WORKTYPE","108","cbo_PRODUCTDIVISION:5","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_codecolumn("C,LotWorkType,ALL,Y,Y");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00_00","161","Static12_00_00_00_01_00_00:0","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("30");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_PLANTID","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("35");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PLANT");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PLANTID","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,SiteType,ALL,Y,Y");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_LOTID","0","sta_WORKTYPE:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LOTID");
            obj.set_taborder("36");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_LOTID","251","cbo_WORKTYPE:5","22","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("37");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label01","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("39");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("C6A85700415446D89213292978260263");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PERIODTYPE","15","60","88","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("40");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFNAME","108","135",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_TOPPROCESSSEGMENTCLASS","108","185",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PROCSEGMENT","108","235",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_LOTID","108","335",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_hold","0","sta_LOTID:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("보류 여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("41");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_hold","108","edt_LOTID:5","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("42");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var tab_search_Tabpage1_form_cbo_hold_innerdataset = new nexacro.NormalDataset("tab_search_Tabpage1_form_cbo_hold_innerdataset", obj);
            tab_search_Tabpage1_form_cbo_hold_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODECOLUMN\"/><Col id=\"DATACOLUMN\">전체</Col><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(tab_search_Tabpage1_form_cbo_hold_innerdataset);
            obj.set_text("");
            obj.set_value(" ");
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
            obj = new BindItem("item0","tab_search.Tabpage1.form.cbo_PLANTID","value","ds_search","PLANTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab_search.Tabpage1.form.edt_PRODUCTDEFID","value","ds_search","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tab_search.Tabpage1.form.cbo_PRODUCTDEFVERSION","value","ds_search","PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tab_search.Tabpage1.form.edt_AREAID","value","ds_search","AREANAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","tab_search.Tabpage1.form.edt_MIDDLEPROCESSSEGMENT","value","ds_search","MIDDLEPROCESSSEGMENTNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","tab_search.Tabpage1.form.cbo_PRODUCTIONTYPE","value","ds_search","PRODUCTIONTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","tab_search.Tabpage1.form.cbo_WORKTYPE","value","ds_search","WORKTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","tab_search.Tabpage1.form.cbo_PRODUCTDIVISION","value","ds_search","PRODUCTDIVISION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tab_search.Tabpage1.form.cbo_PERIODTYPE","value","ds_search","PERIODTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab_search.Tabpage1.form.edt_PRODUCTDEFNAME","value","ds_search","PRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tab_search.Tabpage1.form.edt_TOPPROCESSSEGMENTCLASS","value","ds_search","TOPPROCESSSEGMENTCLASSNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","tab_search.Tabpage1.form.edt_PROCSEGMENT","value","ds_search","PROCESSSEGMENTNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","tab_search.Tabpage1.form.edt_LOTID","value","ds_search","LOTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","tab_search.Tabpage1.form.cbo_hold","value","ds_search","ISHOLD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_calendar.xfdl");
        };
        
        // User Script
        this.addIncludeScript("PCM06100M.xfdl","pcm::pcmCommon.xjs");
        this.addIncludeScript("PCM06100M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM06100M.xfdl","lib::lib_qam.xjs");
        this.registerScript("PCM06100M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 작업 실적 조회
         * 파일명 		: PCM06100M.xfdl
         * 작성자 		: 박대호
         * 작성일 		: 2021.3.29
         *
         * 설  명		:
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.3.29	박대호   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/


        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/

        this.executeIncludeScript("pcm::pcmCommon.xjs"); /*include "pcm::pcmCommon.xjs"*/; //pcm 에서 사용하는 공통
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

        	this.tab_search.Tabpage1.form.div_dateTo.form.pdiv_data.form.calStart.addEventHandler("onchanged", this.fn_changeCalendar, this);

        	this.ds_search.set_rowposition(0);
        	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());

        	this.fn_formInit();
        	this.fn_initCombo();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.fn_searchInit();

        	switch(this.div_work.form.tab_Main.tabindex) {
        	case 0 :
        		this.GetWorkResultByareaList();
        		break;
        	case 1 :
        		this.GetWorkResultByproductList();
        		break;
        	case 2 :
        		this.GetWorkResultBylotList();
        		break;
        	}
        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        	this.fn_formInit();
        	this.ds_search.setColumn(0,"PLANTID",this.gf_getSiteType());
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
        trace('fn_callBack trId ?' + trId);
        	if (errCD < 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        	}

        	{
        		switch(trId) {
        		case "selectEcmLookupValuesVList2ds_CSiteTypeALL" :
        		{
        			this.ds_search.setColumn(0,"PLANTID",this.gf_getSiteType());
        			break;
        		}
         		case "selectEcmLookupValuesVList2ds_CLotWorkTypeALL" :
         		{

         		}
        		default:
        		}
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

        	if(sPopupId == "POPUP_PRODUCTDEFID")
        	{//PRODUCTDEFID|PRODUCTDEFVERSION|PRODUCTDEFNAME

        		this.setProduct_ProdVersion(rtn, this.ds_cbo_ProdVersion, this.ds_search, "B");
        		this.ds_search.setColumn(0,"PRODUCTDEFID",rtn[0]);
        		this.ds_search.setColumn(0,"PRODUCTDEFNAME",rtn[2]);
        		this.ds_search.setColumn(0,"PRODUCTDEFVERSION",rtn[1]);
        	}
        	else if(sPopupId == "POPUP_AREAID")
        	{
        		rtn = this.gfn_split(rtn, ",");
        		if (rtn.length == 2)
        		{
        			this.tab_search.Tabpage1.form.edt_AREAID.set_value(rtn[1]);
        			this.ds_search.setColumn( 0, "AREAID",          rtn[0] );
        		}
        		else
        		{
        			var value = [];
        			var dsval = [];
        			for (var i = 0; i < rtn.length; i++)
        			{
        				if ((i % 2) == 0)
        				{
        					dsval.push(rtn[i]);
        				}
        				else
        				{
        					value.push(rtn[i]);
        				}
        			}

        			this.tab_search.Tabpage1.form.edt_AREAID.set_value(value.join(","));
        			this.ds_search.setColumn( 0, "AREAID",          dsval.join(",") );
        		}
        	}
        	else if (sPopupId == "POPUP_TOPPROCESSSEGMENTCLASS")//대공정리스트
        	{
        		rtn = this.gfn_split(rtn, ",");
        		if (rtn.length == 2)
        		{
        			this.tab_search.Tabpage1.form.edt_TOPPROCESSSEGMENTCLASS.set_value(rtn[1]);
        			this.ds_search.setColumn(0, "TOPPROCESSSEGMENTCLASSID", rtn[0]);
        		}
        		else
        		{
        			var value = [];
        			var dsval = [];
        			for (var i = 0; i < rtn.length; i++)
        			{
        				if ((i % 2) == 0)
        				{
        					dsval.push(rtn[i]);
        				}
        				else
        				{
        					value.push(rtn[i]);
        				}
        			}

        			this.tab_search.Tabpage1.form.edt_TOPPROCESSSEGMENTCLASS.set_value(value.join(","));
        			this.ds_search.setColumn( 0, "TOPPROCESSSEGMENTCLASSID",  dsval.join(",") );
        		}
        	}
        	else if (sPopupId == "POPUP_MIDDLEPROCESSSEGMENT")//중공정리스트
        	{
        		rtn = this.gfn_split(rtn, ",");
        		if (rtn.length == 2)
        		{
        			this.tab_search.Tabpage1.form.edt_MIDDLEPROCESSSEGMENT.set_value(rtn[1]);
        			this.ds_search.setColumn(0, "MIDDLEPROCESSSEGMENTID", rtn[0]);
        		}
        		else
        		{
        			var value = [];
        			var dsval = [];
        			for (var i = 0; i < rtn.length; i++)
        			{
        				if ((i % 2) == 0)
        				{
        					dsval.push(rtn[i]);
        				}
        				else
        				{
        					value.push(rtn[i]);
        				}
        			}

        			this.tab_search.Tabpage1.form.edt_MIDDLEPROCESSSEGMENT.set_value(value.join(","));
        			this.ds_search.setColumn( 0, "MIDDLEPROCESSSEGMENTID",  dsval.join(",") );
        		}
        	}
        	else if (sPopupId == "POPUP_PROCSEGMENT")//공정
        	{
        		var resultInfo = JSON.parse(rtn);
        		if(resultInfo.resultCd == "OK")
        		{
        			var arrCode = [];
        			var arrName = [];
        			for(var i=0;i<this.ds_Process.rowcount;i++)
        			{
        				arrCode.push(this.ds_Process.getColumn(i,"PROCESSSEGMENTID"));
        				arrName.push(this.ds_Process.getColumn(i,"PROCESSSEGMENTNAME"));
        			}
        			this.ds_search.setColumn(0,"PROCESSSEGMENTID",arrCode.join(","));
        			this.ds_search.setColumn(0,"PROCESSSEGMENTNAME",arrName.join(","));

        		}
        	}
        	else if (sPopupId == "POPUP_LOTID")//공정
        	{
        		this.tab_search.Tabpage1.form.edt_LOTID.set_value(rtn.join(","));
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
        	this.ds_search.setColumn(0,"PERIODTYPE","THISDAY");
        	this.fn_setDate("THISDAY");
        };

        this.fn_initCombo = function ()
        {
        	this.ds_cbo_ProdVersion.deleteAll();
        	this.AddAll(this.ds_cbo_ProdVersion,"PRODUCTDEFVERSIONCODE","PRODUCTDEFVERSIONNAME");
        	this.ds_search.setColumn(0, "PRODUCTDEFVERSION", "");
        	this.ds_search.setColumn(0, "TOPPROCESSSEGMENTCLASSNAME", "");
        	this.ds_search.setColumn(0, "MIDDLEPROCESSSEGMENTNAME", "");
        	this.ds_search.setColumn(0, "AREANAME", "");
        	this.ds_search.setColumn(0, "AREAID", "");
        	this.ds_search.setColumn(0, "PRODUCTDEFID", "");
        	this.ds_search.setColumn(0, "LOTID", "");

        	this.tab_search.Tabpage1.form.cbo_hold.set_index(0);

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

        	if(periodType == "THISDAY")//금일
         	{
        		if(this.gfn_svrTodayTime().substr(0, 12) >= sDate.substr(0, 8)+sTime)//금일 8시30분 이후면 당일로 지정
        		{
        			this.tab_search.Tabpage1.form.div_dateFrom.form.calStart.set_value(sDate.substr(0, 8)+sTime);
        			this.tab_search.Tabpage1.form.div_dateTo.form.calStart.set_value(sDate);
        		}
        		else//금일 8시30분 이전이면 전일로 지정
        		{
        			var lastDay = this.gfn_addDate(sDate.substr(0, 8), -1);
        			this.tab_search.Tabpage1.form.div_dateFrom.form.calStart.set_value(lastDay.substr(0, 8)+sTime);
        			this.tab_search.Tabpage1.form.div_dateTo.form.calStart.set_value(sDate);
        		}

         	}
         	else if (periodType == "LASTDAY")//전일
         	{
         		var lastDay = this.gfn_addDate(sDate.substr(0, 8), -1);
         		this.tab_search.Tabpage1.form.div_dateFrom.form.calStart.set_value(lastDay+sTime);
         		this.tab_search.Tabpage1.form.div_dateTo.form.calStart.set_value(sDate.substr(0, 8)+sTime);
         	}
         	else
         	{
         		this.tab_search.Tabpage1.form.div_dateFrom.form.calStart.set_value(sDateFrom+sTime);
         		this.tab_search.Tabpage1.form.div_dateTo.form.calStart.set_value(sDateTo+sTime);
         	}

        };
        /*
         *	작업장 탭 조회
         */
        this.GetWorkResultByareaList = function ()
        {
        	this.ds_workResultByareaList.clearData();
        	if(this.fn_searchValidate() == false) return;
        	var sSvcID 			= "selectWorkResultByareaList";
        	var sController 	= "/pcm06100/selectWorkResultByareaList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_workResultByareaList=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };
        /*
         *	품목 탭 조회
         */
        this.GetWorkResultByproductList = function ()
        {
        	this.ds_workResultByproductList.clearData();
        	if(this.fn_searchValidate() == false) return;
        	var sSvcID 			= "selectWorkResultByproductList";
        	var sController 	= "/pcm06100/selectWorkResultByproductList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_workResultByproductList=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };
        /*
         *	LOT 탭 조회
         */
        this.GetWorkResultBylotList = function ()
        {
        	this.ds_workResultBylotList.clearData();
        	if(this.fn_searchValidate() == false) return;
        	var sSvcID 			= "selectWorkResultBylotList";
        	var sController 	= "/pcm06100/selectWorkResultBylotList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_workResultBylotList=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };
        /*
         *	검색전 작업
         */
        this.fn_searchInit = function ()
        {
        	this.ds_search.setColumn(0, "PERIOD_PERIODFR", this.tab_search.Tabpage1.form.div_dateFrom.form.calStart.value);
        	this.ds_search.setColumn(0, "PERIOD_PERIODTO", this.tab_search.Tabpage1.form.div_dateTo.form.calStart.value);
        };
        this.fn_searchValidate = function ()
        {
        	return true;
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
        /*
         *	기능 : 품목코드 검색 버튼 클릭 시
         */
        this.tab_search_Tabpage1_btn_PRODUCTDEFID_onclick = function(obj,e)
        {
        	var oArg = {};

        	if (this.tab_search.Tabpage1.form.edt_PRODUCTDEFID.value != "")
        	{
        		oArg.arg_type        = "BA";
        	}
        	else
        	{
        		oArg.arg_type        = "B";
        	}
        	oArg.arg_popupCd     = "P00160";
        	oArg.arg_popupNm     = "품목 선택";
        	oArg.arg_rtnCols     = "PRODUCTDEFID|PRODUCTDEFVERSION|PRODUCTDEFNAME";
        	oArg.arg_paramCols   = "P_POPTYPE";
        	oArg.arg_paramValues = "PRODUCTDEFINITION";
        	oArg.arg_searchStr   = "P_PRODUCTDEFNAME=" + this.tab_search.Tabpage1.form.edt_PRODUCTDEFID.value;
        	this.gfn_openPopup( "POPUP_PRODUCTDEFID", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        };
        /*
         *	기능 : 조회기간콤보 변경시
         */
        this.tab_search_tab_page_cbo_PERIODTYPE_onitemchanged = function(obj,e)
        {
        	if(!this.nfn_isNull(e.postvalue)) {
        		this.fn_setDate(e.postvalue);
        	}
        };
        /*
         *	기능 : 작업장 검색 버튼 클릭 시
         */
        this.tab_search_Tab1_btn_AREAID_onclick = function(obj,e)
        {
        	var oArg = {};
        	if (this.tab_search.Tabpage1.form.edt_AREAID.value != "")
        	{
        		oArg.arg_type        = "CA";
        	}
        	else
        	{
        		oArg.arg_type        = "C";
        	}
        	oArg.arg_popupCd     = "P00157";
        	oArg.arg_popupNm     = "작업장 선택";
        	oArg.arg_rtnCols     = "AREAID|AREANAME";
        	oArg.arg_paramCols   = "P_POPTYPE|P_LANGUAGETYPE|P_USER|P_PLANTID";
        	oArg.arg_paramValues = "AREALISTBYAUTHORITY|" + this.gf_getLanguageType() + "|" + this.gf_getUserAcnt() + "|"+ this.ds_search.getColumn( 0, "PLANTID" );
        	oArg.arg_searchStr   = "P_DICTIONARY=" + this.tab_search.Tabpage1.form.edt_AREAID.value;
        	this.gfn_openPopup( "POPUP_AREAID", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        };
        /*
         *	기능 : 대공정 검색 버튼 클릭 시
         */
        this.tab_search_Tabpage1_btn_TOPPROCESSSEGMENTCLASS_onclick = function(obj,e)
        {
        	var oArg = {};
        	if (this.tab_search.Tabpage1.form.edt_TOPPROCESSSEGMENTCLASS.value != "")
        	{
        		oArg.arg_type        = "CA";
        	}
        	else
        	{
        		oArg.arg_type        = "C";
        	}
        	oArg.arg_popupCd     = "P00197";
        	oArg.arg_popupNm     = "대공정 리스트";
        	oArg.arg_rtnCols     = "PROCESSSEGMENTCLASSID|PROCESSSEGMENTCLASSNAME";
        	oArg.arg_paramCols   = "PROCESSSEGMENTCLASSTYPE|ENTERPRISEID|PLANTID|SESSION_LANGUAGETYPE";
        	oArg.arg_paramValues = "TopProcessSegmentClass|" + this.gf_getEnterpriseId() + "|" + this.ds_search.getColumn( 0, "PLANTID" ) + "|" + this.gf_getLanguageType();
        	oArg.arg_searchStr   = "PROCESSSEGMENTCLASS=" + this.tab_search.Tabpage1.form.edt_TOPPROCESSSEGMENTCLASS.value;
        	this.gfn_openPopup( "POPUP_TOPPROCESSSEGMENTCLASS", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        };
        /*
         *	기능 : 중공정 검색 버튼 클릭 시
         */
        this.tab_search_Tabpage1_btn_MIDDLEPROCESSSEGMENT_onclick = function(obj,e)
        {
        	var oArg = {};
        	if (this.tab_search.Tabpage1.form.edt_MIDDLEPROCESSSEGMENT.value != "")
        	{
        		oArg.arg_type        = "CA";
        	}
        	else
        	{
        		oArg.arg_type        = "C";
        	}
        	oArg.arg_popupCd     = "P00203";
        	oArg.arg_popupNm     = "중공정 리스트";
        	oArg.arg_rtnCols     = "PROCESSSEGMENTCLASSID|PROCESSSEGMENTCLASSNAME";
        	oArg.arg_paramCols   = "PROCESSSEGMENTCLASSTYPE|ENTERPRISEID|PLANTID|SESSION_LANGUAGETYPE";
        	oArg.arg_paramValues = "MiddleProcessSegmentClass|" + this.gf_getEnterpriseId() + "|" + this.ds_search.getColumn( 0, "PLANTID" ) + "|" + this.gf_getLanguageType();
        	oArg.arg_searchStr   = "PROCESSSEGMENTCLASS=" + this.tab_search.Tabpage1.form.edt_MIDDLEPROCESSSEGMENT.value;
        	this.gfn_openPopup( "POPUP_MIDDLEPROCESSSEGMENT", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        };
        /*
         *	기능 : 공정 검색 버튼 클릭 시
         */
        this.tab_search_Tabpage1_btn_PROCSEGMENT_onclick = function(obj,e)
        {
        	var popupId = "POPUP_PROCSEGMENT";
        	var oArg = {};
        	this.ds_search.setColumn(0,"PROCESSSEGMENTNAME",this.tab_search.Tabpage1.form.edt_PROCSEGMENT.value);
        	oArg.plantID = this.pfn_allTrim(this.ds_search.getColumn(0,"PLANTID"));
        	oArg.process = this.pfn_allTrim(this.ds_search.getColumn(0,"PROCESSSEGMENTNAME"));
        	oArg.ds_result = this.ds_Process;

        	this.gfn_openPopup(popupId,"pcm::PCM00800P.xfdl",oArg,"width=800,height=600");
        };
        /*
         *	기능 : LOT 검색 버튼 클릭 시
         */
        this.tab_search_Tabpage1_btn_LOTID_onclick = function(obj,e)
        {
        	var oArg = {};
        	if (this.tab_search.Tabpage1.form.edt_LOTID.value != "")
        	{
        		oArg.arg_type        = "CA";
        	}
        	else
        	{
        		oArg.arg_type        = "C";
        	}
        	oArg.arg_popupCd = "P00133";
        	oArg.arg_popupNm = "Lot No 조회";
        	oArg.arg_rtnCols = "LOTID";
        	oArg.arg_paramCols = "";
        	oArg.arg_paramValues = "";
        	oArg.arg_searchStr = "LOTID="+this.tab_search.Tabpage1.form.edt_LOTID.value;
        	this.gfn_openPopup("POPUP_LOTID","cmd::CMSA00100P.xfdl",oArg,"width=800,height=800");
        };
        /*
         *	기능 : 작업장 그리드 더블 클릭 시
         */
        this.div_work_tab_Main_Tabpage1_grd_workResultByareaList_oncelldblclick = function(obj,e)
        {
        	if(this.ds_workResultByareaList.getRowCount() > 0)
        	{
        		this.fn_searchInit();
        		this.ds_search.setColumn(0,"TYPE", "BYLOT");
        		//조회할 작업장 설정
        		this.ds_search.setColumn(0,"AREAID", this.ds_workResultByareaList.getColumn(e.row, "AREAID"));
        		this.ds_search.setColumn(0,"AREANAME", this.ds_workResultByareaList.getColumn(e.row, "AREANAME"));
        		//LOT탭 조회
        		this.GetWorkResultBylotList();
        		//탭이동
        		this.div_work.form.tab_Main.set_tabindex(2);
        	}

        };
        /*
         *	기능 : 품목 그리드 더블 클릭 시
         */
        this.div_work_tab_Main_Tabpage2_grd_workResultByproductList_oncelldblclick = function(obj,e)
        {
        	if(this.ds_workResultByproductList.getRowCount() > 0)
        	{
        		this.fn_searchInit();
        		this.ds_search.setColumn(0,"TYPE", "BYLOT");
        		//조회할 작업장 설정
        		this.ds_search.setColumn(0,"AREAID", this.ds_workResultByproductList.getColumn(e.row, "AREAID"));
        		this.ds_search.setColumn(0,"AREANAME", this.ds_workResultByproductList.getColumn(e.row, "AREANAME"));
        		//조회할 LOT 설정
        		this.ds_search.setColumn(0,"LOTID", this.ds_workResultByproductList.getColumn(e.row, "LOTID"));
        		//LOT탭 조회
        		this.GetWorkResultBylotList();
        		//탭이동
        		this.div_work.form.tab_Main.set_tabindex(2);
        		//조회할 LOT 설정 초기화
        		this.ds_search.setColumn(0,"LOTID", "");
        	}
        };
        this.ds_search_oncolumnchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.tab_Main.Tabpage1.form.grd_workResultByareaList.addEventHandler("oncelldblclick",this.div_work_tab_Main_Tabpage1_grd_workResultByareaList_oncelldblclick,this);
            this.div_work.form.tab_Main.Tabpage2.form.grd_workResultByproductList.addEventHandler("oncelldblclick",this.div_work_tab_Main_Tabpage2_grd_workResultByproductList_oncelldblclick,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.div_dateFrom.addEventHandler("onkeyup",this.tab_search_Tabpage1_div_dateFrom_onkeyup,this);
            this.tab_search.Tabpage1.form.div_dateTo.addEventHandler("onkeyup",this.tab_search_Tabpage1_div_dateTo_onkeyup,this);
            this.tab_search.Tabpage1.form.btn_AREAID.addEventHandler("onclick",this.tab_search_Tab1_btn_AREAID_onclick,this);
            this.tab_search.Tabpage1.form.btn_PRODUCTDEFID.addEventHandler("onclick",this.tab_search_Tabpage1_btn_PRODUCTDEFID_onclick,this);
            this.tab_search.Tabpage1.form.btn_TOPPROCESSSEGMENTCLASS.addEventHandler("onclick",this.tab_search_Tabpage1_btn_TOPPROCESSSEGMENTCLASS_onclick,this);
            this.tab_search.Tabpage1.form.btn_MIDDLEPROCESSSEGMENT.addEventHandler("onclick",this.tab_search_Tabpage1_btn_MIDDLEPROCESSSEGMENT_onclick,this);
            this.tab_search.Tabpage1.form.btn_PROCSEGMENT.addEventHandler("onclick",this.tab_search_Tabpage1_btn_PROCSEGMENT_onclick,this);
            this.tab_search.Tabpage1.form.btn_LOTID.addEventHandler("onclick",this.tab_search_Tabpage1_btn_LOTID_onclick,this);
            this.tab_search.Tabpage1.form.cbo_PERIODTYPE.addEventHandler("onitemchanged",this.tab_search_tab_page_cbo_PERIODTYPE_onitemchanged,this);
            this.ds_search.addEventHandler("oncolumnchanged",this.ds_search_oncolumnchanged,this);
        };
        this.loadIncludeScript("PCM06100M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
