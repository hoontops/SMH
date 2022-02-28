(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM03400M");
            this.set_titletext("일괄 작업완료");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONTROLTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SPECCLASSID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"SEGMENTINCOMETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_message", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"공정수순\" type=\"STRING\" size=\"256\"/><Column id=\"공정명\" type=\"STRING\" size=\"256\"/><Column id=\"입력공정\" type=\"STRING\" size=\"256\"/><Column id=\"작업장\" type=\"STRING\" size=\"256\"/><Column id=\"메시지유형\" type=\"STRING\" size=\"256\"/><Column id=\"등록자\" type=\"STRING\" size=\"256\"/><Column id=\"등록일\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comment", this);
            obj._setContents("<ColumnInfo><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ISCURRENTPROCESS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_operationSpec", this);
            obj._setContents("<ColumnInfo><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SPECCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LSL\" type=\"STRING\" size=\"256\"/><Column id=\"SL\" type=\"STRING\" size=\"256\"/><Column id=\"USL\" type=\"STRING\" size=\"256\"/><Column id=\"ISCURRENTPROCESS\" type=\"STRING\" size=\"256\"/><Column id=\"PATHSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTPATHSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTROLTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SPECCLASSID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_equipmentInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINTIME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKOUTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PNLQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RECIPEID\" type=\"STRING\" size=\"256\"/><Column id=\"RECIPEVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RECIPETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTCNT\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dataInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERS\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"GOODQTY\" type=\"STRING\" size=\"256\"/><Column id=\"GOODPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"ISBATCH\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/><Column id=\"LOTIDS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("staAREAID","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("AREA");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_AREAID","108","10",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","200","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","200","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip03",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"180","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","209","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staLOTID","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_AREAID",null,"10","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_LOTID","108","160",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip00",null,"0","15","290","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip01","0","0","15","290",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPRODUCTDEFID","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("ITEMID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_item","108","35",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_item",null,"35","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_AREAID_cd","108","268",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_visible("false");
            obj.set_value("작업장ID");
            obj.set_text("작업장ID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID_cd","108","298",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_visible("false");
            obj.set_value("품목Rev");
            obj.set_text("품목Rev");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProductDefVersion","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("Rev.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMVERSION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_item_cd","108","60","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_enable("false");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_value("FA1");
            obj.set_text("FA1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProcductName","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMNAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_item_nm","108","85","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_enable("false");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPROCESS","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_text("공정");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("ITEMID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_process",null,"110","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_process","108","110",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("24");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_process_id","108","332",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_visible("false");
            obj.set_value("공정ID");
            obj.set_text("공정ID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip03_00",null,"55","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("26");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip03_00_00",null,"80","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("27");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip03_00_00_00",null,"105","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("28");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip03_00_00_00_00",null,"155","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("29");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staEQUIPMENT","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("30");
            obj.set_text("설비");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("EQUIPMENT");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_equipment",null,"135","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("31");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip03_00_00_00_01",null,"130","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("32");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_equipment","108","135",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("33");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_equipment_id","108","375",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("34");
            obj.set_visible("false");
            obj.set_value("설비ID");
            obj.set_text("설비ID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_lot","0","0",null,"300","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_lotList");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"130\"/><Column size=\"200\"/><Column size=\"60\"/><Column size=\"200\"/><Column size=\"130\"/><Column size=\"60\"/><Column size=\"250\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"0\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"작업장\" tooltiptext=\"AREANAME\"/><Cell col=\"3\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell col=\"4\" text=\"공정수순\" tooltiptext=\"USERSEQUENCE\"/><Cell col=\"5\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"6\" text=\"품목코드\" tooltiptext=\"ITEMID\"/><Cell col=\"7\" text=\"Rev.\" tooltiptext=\"ITEMVERSION\"/><Cell col=\"8\" text=\"품목명\" tooltiptext=\"ITEMNAME\"/><Cell col=\"9\" text=\"단위\" tooltiptext=\"UNIT\"/><Cell col=\"10\" text=\"수량(PNL)\" tooltiptext=\"PANELQTY\"/><Cell col=\"11\" text=\"수량\" tooltiptext=\"QTY\"/><Cell col=\"12\" text=\"검사자\" tooltiptext=\"INSPECTIONUSER\"/><Cell col=\"13\" text=\"공정 입고일\" tooltiptext=\"SEGMENTINCOMETIME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" cssclass=\"expr:CHK==&apos;1&apos; ? &quot;bg_yellow&quot;:&quot;&quot;\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" cssclass=\"expr:CHK==&apos;1&apos; ? &quot;bg_yellow&quot;:&quot;&quot;\"/><Cell col=\"2\" textAlign=\"left\" text=\"bind:AREANAME\" cssclass=\"expr:CHK==&apos;1&apos; ? &quot;bg_yellow&quot;:&quot;&quot;\"/><Cell col=\"3\" text=\"bind:LOTID\" textAlign=\"left\" cssclass=\"expr:CHK==&apos;1&apos; ? &quot;bg_yellow&quot;:&quot;&quot;\"/><Cell col=\"4\" textAlign=\"right\" text=\"bind:USERSEQUENCE\"/><Cell col=\"5\" textAlign=\"left\" text=\"bind:PROCESSSEGMENTNAME\"/><Cell col=\"6\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\" cssclass=\"expr:CHK==&apos;1&apos; ? &quot;bg_yellow&quot;:&quot;&quot;\"/><Cell col=\"7\" text=\"bind:PRODUCTDEFVERSION\" cssclass=\"expr:CHK==&apos;1&apos; ? &quot;bg_yellow&quot;:&quot;&quot;\"/><Cell col=\"8\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\" cssclass=\"expr:CHK==&apos;1&apos; ? &quot;bg_yellow&quot;:&quot;&quot;\"/><Cell col=\"9\" text=\"bind:UNIT\" cssclass=\"expr:CHK==&apos;1&apos; ? &quot;bg_yellow&quot;:&quot;&quot;\"/><Cell col=\"10\" text=\"bind:PANELQTY\" textAlign=\"right\" displaytype=\"number\" edittype=\"none\" cssclass=\"expr:CHK==&apos;1&apos; ? &quot;bg_yellow&quot;:&quot;&quot;\"/><Cell col=\"11\" text=\"bind:QTY\" textAlign=\"right\" displaytype=\"number\" edittype=\"none\" cssclass=\"expr:CHK==&apos;1&apos; ? &quot;bg_yellow&quot;:&quot;&quot;\"/><Cell col=\"12\" tooltiptext=\"bind:INSPECTIONUSER\"/><Cell col=\"13\" text=\"bind:SEGMENTINCOMETIME\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("Div01","0","grd_lot:5",null,"32","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_cssclass("display");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("label10","0","0","84","30",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("특이사항");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("COMMENT");
            obj.set_font("normal 900 9pt/normal \"Arial\"");
            obj.set_textAlign("right");
            obj.set_padding("0px 0px 0px 5px");
            obj.set_border("0px");
            obj.set_cssclass("display");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_comment","label10:10","0",null,null,"0","0",null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("0");
            obj.set_readonly("false");
            obj.set_enable("true");
            obj.set_textAlign("left");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_worker_id","0","5",null,"20","1208",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("2");
            obj.set_visible("false");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Tab("tab","0","Div01:5",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab);
            obj.set_text("설비");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Div("divMessage","0","0",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("div_00");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_equipment","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage1.form.divMessage.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_equipmentInfo");
            obj.set_cssclass("grd_sub");
            obj.set_visible("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell col=\"2\" text=\"설비ID\" tooltiptext=\"EQUIPMENTID\"/><Cell col=\"3\" text=\"설비명\" tooltiptext=\"EQUIPMENTNAME\"/><Cell col=\"4\" text=\"작업시작시간\" tooltiptext=\"TRACKINTIME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" textAlign=\"left\" text=\"bind:LOTID\"/><Cell col=\"2\" text=\"bind:EQUIPMENTID\" textAlign=\"left\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:EQUIPMENTNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:TRACKINTIME\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage1.form.divMessage.addChild(obj.name, obj);

            obj = new Static("title1_01","0","0","110","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form.divMessage.form);
            obj.set_taborder("1");
            obj.set_text("설비");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("EQUIPMENT");
            this.div_work.form.tab.Tabpage1.form.divMessage.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab);
            obj.set_text("특이사항");
            obj.set_tooltiptext("COMMENT");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","66","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("특이사항");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_tooltiptext("COMMENT");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_comment","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_comment");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"500\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"공정수순\" tooltiptext=\"USERSEQUENCE\"/><Cell col=\"2\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"3\" text=\"특이사항\" tooltiptext=\"COMMENT\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:USERSEQUENCE\" textAlign=\"right\"/><Cell col=\"2\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:DESCRIPTION\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.div_work.form.tab);
            obj.set_text("공정SPEC");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","71","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_text("공정SPEC");
            obj.set_cssclass("sta_WF_subTitle2");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Grid("grd_operationSpec","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_operationSpec");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"공정수순\" tooltiptext=\"USERSEQUENCE\"/><Cell col=\"2\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"3\" text=\"항목\" tooltiptext=\"SPECITEM\"/><Cell col=\"4\" text=\"하한값\" tooltiptext=\"LSL\"/><Cell col=\"5\" text=\"중간값\" tooltiptext=\"SL\"/><Cell col=\"6\" text=\"상한값\" tooltiptext=\"USL\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:USERSEQUENCE\" textAlign=\"right\"/><Cell col=\"2\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:SPECCLASSNAME\"/><Cell col=\"4\" text=\"bind:LSL\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:SL\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:USL\" displaytype=\"number\" textAlign=\"right\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","26","24","btn_help:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("2");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","80","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_text("일괄 작업완료");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","281","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","tab_search.Tabpage1.form.edt_AREAID","value","ds_search","AREANAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tab_search.Tabpage1.form.edt_item","value","ds_search","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tab_search.Tabpage1.form.edt_LOTID","value","ds_search","P_LOTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tab_search.Tabpage1.form.edt_AREAID_cd","value","ds_search","AREAID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","tab_search.Tabpage1.form.edt_PRODUCTDEFID_cd","value","ds_search","PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab_search.Tabpage1.form.edt_item_cd","value","ds_search","PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tab_search.Tabpage1.form.edt_item_nm","value","ds_search","PRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","tab_search.Tabpage1.form.edt_process","value","ds_search","PROCESSSEGMENTNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","tab_search.Tabpage1.form.edt_process_id","value","ds_search","PROCESSSEGMENTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","tab_search.Tabpage1.form.edt_equipment","value","ds_search","EQUIPMENTNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","tab_search.Tabpage1.form.edt_equipment_id","value","ds_search","EQUIPMENTID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM03400M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM03400M.xfdl","pcm::pcmCommon.xjs");
        this.addIncludeScript("PCM03400M.xfdl","lib::lib_tom.xjs");
        this.registerScript("PCM03400M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 일괄 작업완료
         * 파일명 		: PCM03400M.xfdl
         * 작성자 		: 최성민
         * 작성일 		: 2021.05.26
         *
         * 설  명		: 공정관리-일괄 작업완료
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.05.26	최성민   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
         this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
         this.executeIncludeScript("pcm::pcmCommon.xjs"); /*include "pcm::pcmCommon.xjs"*/; //pcm 에서 사용하는 공통
         this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
         this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	var component = this.tab_search.Tabpage1.form;
        	var strColIdList = "edt_AREAID,edt_item,edt_process_id,edt_equipment_id";
        	var strColNmList = "AREA,ITEMID,PROCESSSEGMENT,EQUIPMENT";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        	if (rtn == false) return;
        	this.fn_searchLotList();
        };

        /*
         * Step1 : LOT 조회
         */
        this.fn_searchLotList = function()
        {
        	this.ds_lotList.clearData();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 	this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0, "PLANTID", 			this.gf_getSiteType());
        	this.ds_search.setColumn(0, "LANGUAGETYPE", 	this.gf_getLanguageType());

        	var sSvcID 			= "selectBatchTrackOut";
        	var sController 	= "/pcm03400/selectBatchTrackOut.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_lotList=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }

        /*
         * Step2 : 전달사항,특기사항,공정SPEC 조회
         */
        this.fn_searchOthers = function()
        {
        	var lotId 		= this.ds_lotList.getColumn(this.ds_lotList.rowposition, "LOTID");
        	var resourceId 	= this.ds_lotList.getColumn(this.ds_lotList.rowposition, "RESOURCEID");

        	this.ds_comment.clearData();
        	this.ds_operationSpec.clearData();

        	this.ds_search.setColumn(0, "RESOURCETYPE",				"EquipmentClass");
        	this.ds_search.setColumn(0, "EQUIPMENTTYPE",			"Production");
        	this.ds_search.setColumn(0, "DETAILEQUIPMENTTYPE",		"Main");
        	this.ds_search.setColumn(0, "LOTID",					lotId);
        	this.ds_search.setColumn(0, "RESOURCEID",				resourceId);
        	this.ds_search.setColumn(0, "CONTROLTYPE",				"XBARR");
        	this.ds_search.setColumn(0, "SPECCLASSID",				"OperationSpec");

        	var sSvcID 			= "selectOtherInfo";
        	var sController 	= "/pcm03400/selectOtherInfo.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets  	= "ds_comment=output1 ds_operationSpec=output2 ds_equipmentInfo=output3";
        	var sArgs 		  	= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, true);
        }


        /*
        * 기능 : 검색 초기화
        */
        this.fn_searchClear = function(obj,e)
        {
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.clearDetailInfo();
        };

        this.fn_save = function (obj, e)
        {
        	var lotIds		= "";
        	var comment 	= this.div_work.form.Div01.form.edt_comment.value;
        	var processSegmentId = "";
        	var equipmentId	= this.ds_equipmentInfo.getColumn(0, "EQUIPMENTID");

        	//필수값 체크
        	if(this.ds_lotList.rowcount<1){
        		this.gfn_Message("NoSeletedLot", "", "warning", "ok");
        		return;
        	}

        	if(this.ds_lotList.getCaseCount("CHK=='1'") < 1){
        		this.gfn_Message("NoSeletedLot", "", "warning", "ok");
        		return;
        	}

        	for(var i=0; i<this.ds_lotList.rowcount; i++){
        		var chk	= this.ds_lotList.getColumn(i, "CHK");
        		if(chk=="1"){
        			if(i==0){
        				processSegmentId = this.ds_lotList.getColumn(i, "PROCESSSEGMENTID");
        			}
        			lotIds += ","+ this.ds_lotList.getColumn(i, "LOTID");
        		}
        	}

        	this.ds_dataInfo.clearData();
        	this.ds_dataInfo.addRow();
        	this.ds_dataInfo.setColumn(0, "ENTERPRISEID", 		this.gf_getEnterpriseId());
        	this.ds_dataInfo.setColumn(0, "PLANTID", 			this.gf_getSiteType());
        	this.ds_dataInfo.setColumn(0, "LOTIDS", 			lotIds.substr(1));
        	this.ds_dataInfo.setColumn(0, "COMMENT", 			comment);
        	this.ds_dataInfo.setColumn(0, "EQUIPMENTID", 		equipmentId);
        	this.ds_dataInfo.setColumn(0, "PROCESSSEGMENTID",	processSegmentId);

        	var sSvcID 			= "saveLotBatchTrackOut";
        	var sController 	= "/pcm03400/saveLotBatchTrackOut.do";
        	var sInDatasets 	= "ds_dataInfo=ds_dataInfo";
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
        		if (trId == "saveReceiveLot")
        		{
        			var msgArray = errMsg.split(("|"));
        			if(msgArray.length==2) {
        				this.gfn_Message(msgArray[0], "\n"+msgArray[1], "error", "ok");
        			} else {
        				this.gfn_Message(errMsg, "", "error", "ok");
        			}
        		} else {
        			this.gfn_Message(errMsg, null, "error", "ok");
        		}
        	} else {
        		if(trId == "selectBatchTrackOut"){	/* Step1 : LOT 조회 */
        			if(this.ds_lotList.getRowCount() < 1) {
        				//존재 하지 않는 Lot No. 입니다.
        				this.gfn_Message("NoSelectData", null, "warning", "ok");
        				this.clearDetailInfo();
        				return;
        			} else {
        				this.fn_searchOthers();
        			}
        		} else if(trId == "saveLotBatchTrackOut"){
        			this.gfn_Message("SuccedSave", null, "info", "ok");
        			this.clearDetailInfo();
        		}
        	}
        };

        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
          /*
         * 기능(공통팝업) : 조회
         */
        this.fn_openPop = function(svcId, popId, pArg)
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
        	var oArg = {};
        	var opts = "width=650,height=500";

        	oArg.arg_type = "BA"; // C: 체크박스 B: 단일, CA : arg_searchStr 자동조회
        	oArg.arg_popupCd = popId;
        	oArg.arg_popupNm = "";

        	//작업장 조회
        	if(popId=="P00148"){
        		oArg.arg_paramCols = this.gfn_getExtractArgument(pArg,"name");
        		oArg.arg_paramValues = this.gfn_getExtractArgument(pArg,"value");
        		oArg.arg_rtnCols = "AREAID|AREANAME";
        		oArg.arg_searchStr = "TXTAREA=" + this.tab_search.Tabpage1.form.edt_AREAID.value;

        	}

        	//설비
        	if(svcId =="SCH_EQUIPMENT"){
        		opts = "width=800,height=800";
        		oArg.arg_paramCols   = "PRODUCTDEFID|PRODUCTDEFVERSION|AREAID|PROCESSSEGMENTID";
        		oArg.arg_paramValues = this.ds_search.getColumn(0, "PRODUCTDEFID")
        							  +"|"+this.ds_search.getColumn(0, "PRODUCTDEFVERSION")
        							  +"|"+this.ds_search.getColumn(0, "AREAID")
        							  +"|"+this.ds_search.getColumn(0, "PROCESSSEGMENTID");
        		oArg.arg_type = "BA";
        		oArg.arg_rtnCols = "EQUIPMENTID|EQUIPMENTNAME";
        		oArg.arg_searchStr = "1=1 && SEARCH_KEY="+this.nfn_nvl(this.tab_search.Tabpage1.form.edt_equipment.value, "");
        	}

        	//품목코드 조회
        	if(svcId =="SCH_ITEM"){
        		var processDefId = this.tab_search.Tabpage1.form.edt_item.value
        		var prductIDCondition = processDefId == "" ? "" : "TXTPRODUCTDEFNAME=" + processDefId + "|";
        		var pPlantID =  this.gf_getSiteType();

        		opts = "width=800,height=800";
        		oArg.arg_type = "BA";
        		oArg.arg_rtnCols = "PRODUCTDEFID|PRODUCTDEFNAME|PRODUCTDEFVERSION";
        		oArg.arg_paramCols = "PLANTID";
        		oArg.arg_paramValues = pPlantID;
        		oArg.arg_searchStr = prductIDCondition;
        	}

        	//공정 조회
        	if(svcId =="SCH_PROCESS"){
        		var processDefId = this.tab_search.Tabpage1.form.edt_process.value
        		var prductIDCondition = processDefId == "" ? "" : "P_PROCESSSEGMENT=" + processDefId + "|";
        		var pPlantID =  this.gf_getSiteType();
        		var itemId = this.tab_search.Tabpage1.form.edt_item.value;
        		var itemRev = this.tab_search.Tabpage1.form.edt_item_cd.value;

        		opts = "width=800,height=800";
        		oArg.arg_type = "BA";
        		oArg.arg_rtnCols     = "PROCESSSEGMENTID|PROCESSSEGMENTNAME";

        		if(this.nfn_isNull(itemId)){
        			oArg.arg_paramCols   = "P_POPTYPE|P_LANGUAGETYPE";
        			oArg.arg_paramValues = "PROCESSSEGMENT|" + this.gf_getLanguageType();
        		} else {
        			oArg.arg_paramCols   = "P_POPTYPE|P_LANGUAGETYPE|P_MULTI_ITEMID|P_MULTI_ITEMVERSION";
        			oArg.arg_paramValues = "PROCESSSEGMENT|" + this.gf_getLanguageType()+"|"+itemId+"|"+itemRev;
        		}

        		oArg.arg_searchStr = prductIDCondition;
        	}
        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        };

        /*
         *	기능 : 팝업 관련
         */
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;

        	if(this.nfn_isNull(rtn)) return;

        	if (sPopupId == "SEARCH_AREA"){//AREAID|AREANAME
        		this.ds_search.setColumn(0,"AREAID",rtn[0]);
        		this.ds_search.setColumn(0,"AREANAME",rtn[1]);
        	}

        	if (sPopupId == "SCH_EQUIPMENT"){
        		this.ds_search.setColumn(0,"EQUIPMENTID",rtn[0]);
        		this.ds_search.setColumn(0,"EQUIPMENTNAME",rtn[1]);
        	}

        	if(sPopupId == "SCH_ITEM")	//검색조건 : 품목 조회
        	{
        		this.ds_search.setColumn(0,"PRODUCTDEFID",rtn[0]);
        		this.ds_search.setColumn(0,"PRODUCTDEFNAME",rtn[1]);
        		this.ds_search.setColumn(0,"PRODUCTDEFVERSION",rtn[2]);
        	}

        	if(sPopupId == "SEARCH_WorkerByProcess"){
        		var objKey = "";
        		var objId = "";
        		var objNm = "";

        		for(var i=0; i<rtn.length; i++){
        			var colArray = rtn[i];
        			objKey  += ","+ colArray[0];
        			objNm 	+= ","+ colArray[1];

        		}
        		this.div_work.form.Div01.form.edt_worker.set_value(objNm.substr(1));
        		this.div_work.form.Div01.form.edt_worker_id.set_value(objKey.substr(1));
        	}

        	if(sPopupId == "SCH_PROCESS"){
        		this.ds_search.setColumn(0,"PROCESSSEGMENTID",rtn[0]);
        		this.ds_search.setColumn(0,"PROCESSSEGMENTNAME",rtn[1]);
        	}
        };

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        this.clearDetailInfo = function()
        {
        	this.ds_lotList.clearData();
        	this.ds_operationSpec.clearData();
        	this.ds_equipmentInfo.clearData();
        	this.ds_comment.clearData();
        }
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.tab_search_Tabpage1_edt_AREAID_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.div_work_div_search_btn_area_onclick();
        	}
        };

        this.edt_worker_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.btn_workerSrh_onclick();
        	}
        };

        this.tab_search_Tabpage1_edt_PRODUCTDEFID_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.btn_PRODUCTDEFID_onclick();
        	}
        };

        this.tab_search_Tabpage1_edt_process_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btn_process_onclick();
        	}
        };

        this.tab_search_Tabpage1_edt_equipment_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btn_equipment_onclick();
        	}
        };

        this.div_work_div_search_btn_area_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", 		this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", 			this.gf_getSiteType());
        	sArgs += this.gfn_setParam("AREATYPE", 			"Area");
        	sArgs += this.gfn_setParam("LANGUAGETYPE", 		this.gf_getLanguageType());
        	sArgs += this.gfn_setParam("USERID", 			this.gf_getUserId());
        	this.fn_openPop("SEARCH_AREA","P00148", sArgs); //작업장 조회
        };

        this.btn_workerSrh_onclick = function(obj,e)
        {
        	var component = this.tab_search.Tabpage1.form;
        	var strColIdList = "edt_AREAID";
        	var strColNmList = "AREA";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        	if (rtn == false) return;

         	var txtSearch 	= this.div_work.form.Div01.form.edt_worker.value;
        	var areaId		= this.ds_search.getColumn(0,"AREAID");

         	if (!this.nfn_isNull(areaId))
         	{
         		txtSearch = "TXTWORKERIDNAME="+ txtSearch;
         	}

         	var popupId = "SEARCH_WorkerByProcess";  // /pcmCommon/getWorkerByProcess.do
         	var oArg = {};
         	oArg.arg_type = "CA"; // C: 체크박스 B: 단일, CA : arg_searchStr 자동조회
         	oArg.arg_popupCd = "P00196";  //getWorkerByProcess.do  /pcmCommon/getWorkerByProcess.do
         	oArg.arg_popupNm = "작업자 조회";
         	oArg.arg_rtnCols = "WORKERID|WORKERNAME|EMPLOYEENO|DEPARTMENT|OWNTYPE|WORKERTYPE";
         	oArg.arg_paramCols = "USERID|ENTERPRISEID|PLANTID|AREAID";
         	oArg.arg_paramValues = this.gf_getUserId() + "|" + this.gf_getEnterpriseId() + "|" + this.gf_getSiteType() + "|" +  areaId;
         	oArg.arg_searchStr = txtSearch;

         	this.gfn_openPopup(popupId,"pcm::PCM01700P5.xfdl",oArg,"width=700,height=800");
        };

        this.btn_PRODUCTDEFID_onclick = function(obj,e)
        {
        	this.fn_openPop("SCH_ITEM","P00286"); //품목 조회
        };

        this.tab_search_Tabpage1_btn_process_onclick = function(obj,e)
        {
        	this.fn_openPop("SCH_PROCESS","P00213"); //공정 조회
        };

        this.tab_search_Tabpage1_btn_equipment_onclick = function(obj,e)
        {
        	var component = this.tab_search.Tabpage1.form;
        	var strColIdList = "edt_AREAID,edt_item,edt_process_id";
        	var strColNmList = "AREA,ITEMID,PROCESSSEGMENT";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        	if (rtn == false) return;
        	this.fn_openPop("SCH_EQUIPMENT","P00279"); //설비 조회
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.fn_init,this);
            this.tab_search.Tabpage1.form.edt_AREAID.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_AREAID_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.tab_search_Tabpage1_btn_clear_onclick,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.btn_AREAID.addEventHandler("onclick",this.div_work_div_search_btn_area_onclick,this);
            this.tab_search.Tabpage1.form.edt_item.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_PRODUCTDEFID_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_item.addEventHandler("onclick",this.btn_PRODUCTDEFID_onclick,this);
            this.tab_search.Tabpage1.form.edt_PRODUCTDEFID_cd.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_PRODUCTDEFID_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_process.addEventHandler("onclick",this.tab_search_Tabpage1_btn_process_onclick,this);
            this.tab_search.Tabpage1.form.edt_process.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_process_onkeydown,this);
            this.tab_search.Tabpage1.form.edt_process_id.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_PRODUCTDEFID_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_equipment.addEventHandler("onclick",this.tab_search_Tabpage1_btn_equipment_onclick,this);
            this.tab_search.Tabpage1.form.edt_equipment.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_equipment_onkeydown,this);
            this.tab_search.Tabpage1.form.edt_equipment_id.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_PRODUCTDEFID_onkeydown,this);
            this.div_work.form.Div01.form.edt_worker_id.addEventHandler("onkeydown",this.edt_worker_onkeydown,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.ds_search.addEventHandler("oncolumnchanged",this.ds_search_oncolumnchanged,this);
        };
        this.loadIncludeScript("PCM03400M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
