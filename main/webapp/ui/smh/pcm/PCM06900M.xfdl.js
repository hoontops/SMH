(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM06900M");
            this.set_titletext("최종 인수 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_split", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"ISPARENT\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"QTY\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_message", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"공정수순\" type=\"STRING\" size=\"256\"/><Column id=\"공정명\" type=\"STRING\" size=\"256\"/><Column id=\"입력공정\" type=\"STRING\" size=\"256\"/><Column id=\"작업장\" type=\"STRING\" size=\"256\"/><Column id=\"메시지유형\" type=\"STRING\" size=\"256\"/><Column id=\"등록자\" type=\"STRING\" size=\"256\"/><Column id=\"등록일\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comment", this);
            obj._setContents("<ColumnInfo><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ISCURRENTPROCESS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_operationSpec", this);
            obj._setContents("<ColumnInfo><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SPECCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LSL\" type=\"STRING\" size=\"256\"/><Column id=\"SL\" type=\"STRING\" size=\"256\"/><Column id=\"USL\" type=\"STRING\" size=\"256\"/><Column id=\"ISCURRENTPROCESS\" type=\"STRING\" size=\"256\"/><Column id=\"PATHSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTPATHSEQUENCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"DUEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPEID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"ISREWORK\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STEPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRINTLOTCARD\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRINTRCLOTCARD\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINUSER\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"ISRCLOT\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"SELFSHIPINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"SELFTAKEINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"OSPINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"ISBEFOREROLLCUTTING\" type=\"STRING\" size=\"256\"/><Column id=\"PATHTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISWEEKMNG\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTPROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLAIMLOT\" type=\"STRING\" size=\"256\"/><Column id=\"SPLITUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MIDDLESEGMENTCLASSID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_paramMain", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CODECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ENTERPRISEID\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dt", this);
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dtStaying", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"STAYINGLOCKSTD\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENTSTATESTAYINGTIMECNV\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CUR_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_body", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKER\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"GOODQTY\" type=\"STRING\" size=\"256\"/><Column id=\"GOODPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTLIST\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"ISBATCH\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_processDefTypeInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"공정수순\" type=\"STRING\" size=\"256\"/><Column id=\"공정명\" type=\"STRING\" size=\"256\"/><Column id=\"입력공정\" type=\"STRING\" size=\"256\"/><Column id=\"작업장\" type=\"STRING\" size=\"256\"/><Column id=\"메시지유형\" type=\"STRING\" size=\"256\"/><Column id=\"등록자\" type=\"STRING\" size=\"256\"/><Column id=\"등록일\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"입력공정\">RTR UV-LASER</Col><Col id=\"작업장\">RTR UV_B2F</Col><Col id=\"메시지유형\">Comment</Col><Col id=\"등록자\">빌트원</Col><Col id=\"공정수순\">10</Col><Col id=\"공정명\">RTR UV-LASER</Col><Col id=\"등록일\">20200118151539</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_uom", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotCard", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKTYPENAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rdParam", this);
            obj._setContents("");
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

            obj = new Button("btn_save",null,"16","26","24","btn_help:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","117","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_text("최종 인수 등록");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
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

            obj = new Div("div_work","0","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","10",null,"42","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_search");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("label00","0","10","100","20",null,null,null,null,null,null,this.div_work.form.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("AREANAME");
            this.div_work.form.divSearch.addChild(obj.name, obj);

            obj = new Static("label01","26.43%","10","100","20",null,null,null,null,null,null,this.div_work.form.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("LOTID");
            this.div_work.form.divSearch.addChild(obj.name, obj);

            obj = new Button("btn_area",null,"10","22","20","label01:0",null,null,null,null,null,this.div_work.form.divSearch.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt_area","label00:10","10",null,"20","btn_area:0",null,null,null,null,null,this.div_work.form.divSearch.form);
            obj.set_taborder("2");
            this.div_work.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt_lotId","label01:10","10","15.92%","20",null,null,null,null,null,null,this.div_work.form.divSearch.form);
            obj.set_taborder("4");
            obj.set_imemode("alpha");
            this.div_work.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt_area_id","label00:-46","10",null,"20","btn_area:205",null,null,null,null,null,this.div_work.form.divSearch.form);
            obj.set_taborder("5");
            obj.set_visible("false");
            this.div_work.form.divSearch.addChild(obj.name, obj);

            obj = new Grid("grd_productInfo","0","52",null,"150","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_cssclass("grd_detail");
            obj.set_autoenter("select");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none");
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
            obj.set_binddataset("ds_lotInfo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\"/><Row size=\"30\"/><Row size=\"30\"/><Row size=\"30\"/><Row size=\"30\"/></Rows><Band id=\"body\"><Cell cssclass=\"cell_head\" text=\"Lot No.\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"LOTID\"/><Cell col=\"1\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:LOTID\"/><Cell col=\"2\" cssclass=\"cell_head\" text=\"이전공정명\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PREVPROCESSSEGMENTNAME\"/><Cell col=\"3\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PREVPROCESSSEGMENTNAME\"/><Cell col=\"4\" cssclass=\"cell_head\" text=\"공정명\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"5\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PROCESSSEGMENTNAME\"/><Cell col=\"6\" cssclass=\"cell_head\" text=\"후공정\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"NEXTPROCESSSEGMENTNAME\"/><Cell col=\"7\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:NEXTPROCESSSEGMENTNAME\"/><Cell col=\"8\" cssclass=\"cell_head\" text=\"공정수순\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"USERSEQUENCE\"/><Cell col=\"9\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:USERSEQUENCE\"/><Cell row=\"1\" cssclass=\"cell_head\" text=\"품목코드\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"ITEMID\"/><Cell row=\"1\" col=\"1\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PRODUCTDEFID\"/><Cell row=\"1\" col=\"2\" cssclass=\"cell_head\" text=\"품목명\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"ITEMNAME\"/><Cell row=\"1\" col=\"3\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PRODUCTDEFNAME\"/><Cell row=\"1\" col=\"4\" cssclass=\"cell_head\" text=\"투입일자\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"INPUTDATE\"/><Cell row=\"1\" col=\"5\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:INPUTDATE\"/><Cell row=\"1\" col=\"6\" cssclass=\"cell_head\" text=\"S/O번호\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PRODUCTIONORDERID\"/><Cell row=\"1\" col=\"7\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PRODUCTIONORDERID\"/><Cell row=\"1\" col=\"8\" cssclass=\"cell_head\" text=\"납기일\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"DUEDATE\"/><Cell row=\"1\" col=\"9\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:DUEDATE\"/><Cell row=\"2\" cssclass=\"cell_head\" text=\"품목유형구분\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PRODUCTDEFTYPE\"/><Cell row=\"2\" col=\"1\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PRODUCTDEFTYPE\"/><Cell row=\"2\" col=\"2\" cssclass=\"cell_head\" text=\"생산구분\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PRODUCTIONTYPE\"/><Cell row=\"2\" col=\"3\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PRODUCTIONTYPE\"/><Cell row=\"2\" col=\"4\" cssclass=\"cell_head\" text=\"Locking 여부\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"ISLOCKING\"/><Cell row=\"2\" col=\"5\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:ISLOCKING\"/><Cell row=\"2\" col=\"6\" cssclass=\"cell_head\" text=\"재작업 여부\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"ISREWORK\"/><Cell row=\"2\" col=\"7\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:ISREWORK\"/><Cell row=\"2\" col=\"8\" cssclass=\"cell_head\" text=\"고객명\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"CUSTOMERNAME\"/><Cell row=\"2\" col=\"9\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:CUSTOMERNAME\"/><Cell row=\"3\" cssclass=\"cell_head\" text=\"단위\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"UNIT\"/><Cell row=\"3\" col=\"1\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:UNIT\" displaytype=\"normal\" combodataset=\"ds_uom\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell row=\"3\" col=\"2\" cssclass=\"cell_head\" text=\"수량(PNL)\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PANELQTY\"/><Cell row=\"3\" col=\"3\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PNLQTY\"/><Cell row=\"3\" col=\"4\" cssclass=\"cell_head\" text=\"수량(PCS)\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PCSQTY\"/><Cell row=\"3\" col=\"5\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PCSQTY\"/><Cell row=\"3\" col=\"6\" cssclass=\"cell_head\" text=\"MM\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"MM\"/><Cell row=\"3\" col=\"7\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:MM\"/><Cell row=\"3\" col=\"8\" cssclass=\"cell_head\" text=\"자원코드\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"RESOURCEID\"/><Cell row=\"3\" col=\"9\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:RESOURCEID\"/><Cell row=\"4\" cssclass=\"cell_head\" text=\"자원명\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"RESOURCENAME\"/><Cell row=\"4\" col=\"1\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:RESOURCENAME\"/><Cell row=\"4\" col=\"2\" cssclass=\"cell_head\" text=\"상위분류\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PARENTPROCESSSEGMENTCLASSID\"/><Cell row=\"4\" col=\"3\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PARENTPROCESSSEGMENTCLASSID\"/><Cell row=\"4\" col=\"4\" cssclass=\"cell_head\" text=\"ISCLAIMLOT\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\"/><Cell row=\"4\" col=\"5\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:ISCLAIMLOT\"/><Cell row=\"4\" col=\"6\" border=\"1px solid #e8e8e8,0px solid #e8e8e8,1px solid #e8e8e8,1px solid #e8e8e8\"/><Cell row=\"4\" col=\"7\" border=\"1px solid #e8e8e8,0px solid #e8e8e8\"/><Cell row=\"4\" col=\"8\" border=\"1px solid #e8e8e8,0px solid #e8e8e8\"/><Cell row=\"4\" col=\"9\" border=\"1px solid #e8e8e8,1px solid #e8e8e8,1px solid #e8e8e8,0px solid #e8e8e8\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tab","0","grd_productInfo:5",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab);
            obj.set_text("LOT 분할");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Button("btn_delRow",null,"14","26","24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_addRow",null,"14","26","24","btn_delRow:0",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            obj.set_text("");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00","115","9","3.50%","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("UOM");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_uom","label00:10","9","121","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_uom");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("PNL");
            obj.set_value("");
            obj.set_index("-1");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00_00","cbo_uom:10","9","5.33%","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("분할 수량");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("SPLITQTY");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Spin("spn_qty","label00_00:27","9","100","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_min("0");
            obj.set_max("10000000");
            obj.set_value("0");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_split","spn_qty:3","9","34","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_black");
            obj.set_text("분할");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("SPLIT");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_lotSplit","0","39",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_split");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"250\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell col=\"3\" text=\"품목코드\" tooltiptext=\"ITEMID\"/><Cell col=\"4\" text=\"Rev.\" tooltiptext=\"ITEMVERSION\"/><Cell col=\"5\" text=\"품목명\" tooltiptext=\"ITEMNAME\"/><Cell col=\"6\" text=\"단위\" tooltiptext=\"UNIT\"/><Cell col=\"7\" text=\"수량(PNL)\" tooltiptext=\"PANELQTY\"/><Cell col=\"8\" text=\"수량\" tooltiptext=\"QTY\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:LOTID\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:UNIT\"/><Cell col=\"7\" text=\"bind:PANELQTY\" textAlign=\"right\" displaytype=\"number\" edittype=\"normal\"/><Cell col=\"8\" text=\"bind:QTY\" textAlign=\"right\" displaytype=\"number\" edittype=\"normal\"/></Band><Band id=\"summary\"><Cell colspan=\"7\" text=\"합계\"/><Cell col=\"7\" expr=\"dataset.getSum(&quot;PANELQTY&quot;) \" displaytype=\"mask\" maskeditformat=\"#,##0.###\"/><Cell col=\"8\" expr=\"dataset.getSum(&quot;QTY&quot;)\" displaytype=\"mask\" maskeditformat=\"#,##0.###\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","120","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("분할 대상");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_tooltiptext("TARGETSPLIT");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab);
            obj.set_text("전달사항");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Div("divMessage","0","0",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("div_00");
            obj.set_url("pcm::PCM06900T1.xfdl");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.div_work.form.tab);
            obj.set_text("특이사항");
            obj.set_tooltiptext("COMMENT");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","66","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_text("특이사항");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_tooltiptext("COMMENT");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Grid("grd_comment","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_comment");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"500\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"공정수순\" tooltiptext=\"USERSEQUENCE\"/><Cell col=\"2\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"3\" text=\"특이사항\" tooltiptext=\"COMMENT\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:USERSEQUENCE\" textAlign=\"right\"/><Cell col=\"2\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:DESCRIPTION\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.div_work.form.tab);
            obj.set_text("공정SPEC");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","71","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage4.form);
            obj.set_taborder("0");
            obj.set_text("공정SPEC");
            obj.set_cssclass("sta_WF_subTitle2");
            this.div_work.form.tab.Tabpage4.addChild(obj.name, obj);

            obj = new Grid("grd_operationSpec","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage4.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_operationSpec");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"공정수순\" tooltiptext=\"USERSEQUENCE\"/><Cell col=\"2\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"3\" text=\"항목\" tooltiptext=\"SPECITEM\"/><Cell col=\"4\" text=\"하한값\" tooltiptext=\"LSL\"/><Cell col=\"5\" text=\"중간값\" tooltiptext=\"SL\"/><Cell col=\"6\" text=\"상한값\" tooltiptext=\"USL\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:USERSEQUENCE\" textAlign=\"right\"/><Cell col=\"2\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:SPECCLASSNAME\"/><Cell col=\"4\" text=\"bind:LSL\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:SL\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:USL\" displaytype=\"number\" textAlign=\"right\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage4.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_work.form.divSearch.form.edt_area","value","ds_search","AREANAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_work.form.divSearch.form.edt_area_id","value","ds_search","AREAID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_work.form.divSearch.form.edt_lotId","value","ds_search","LOTID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","pcm::PCM06900T1.xfdl");
        };
        
        // User Script
        this.addIncludeScript("PCM06900M.xfdl","lib::lib_bas.xjs");
        this.registerScript("PCM06900M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 최종 인수 등록
         * 파일명 		: PCM06900M.xfdl
         * 작성자 		: 최성민
         * 작성일 		: 2021.04.27
         *
         * 설  명		: 공정관리-최종검사-최종 인수 등록
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.27	최성민   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        /**************************************************************************

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);

        	this.basfn_removeEventGrid(this.div_work.form.tab.Tabpage1.form.grd_lotSplit);

        	//품목단위:UOM
        	var sSvcID 			= "selectUOM";
        	var sController 	= "/basCommon/selectCustomQuery.do";
        	var sInDatasets   	= "";
        	var sOutDatasets  	= "ds_uom=output";
        	var sArgs 		  	= "";
        	sArgs 			+= this.gfn_setParam("SQL_ID", "selectUOMDefList");
        	sArgs 			+= this.gfn_setParam("UOMCLASSID", "Process");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, true);
        };
        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function(obj,e)
        {
        	if(!this.fn_checkUpdate()) return;
        	var component = this.div_work.form.divSearch.form;
        	var strColIdList = "edt_area_id,edt_lotId";
        	var strColNmList = this.nfn_nvl(this.nfn_getDictionarynameUpper("AREA"),"작업장");
        					 + this.nfn_nvl(this.nfn_getDictionarynameUpper("LOTID"),"Lot No.");
        	if(!this.nfn_MandatoryCheck(component, strColIdList, strColNmList)) { return}
        	this.fn_searchKeyInfo(); /* Step1 함수 호출 */
        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClearCustom = function(obj,e)
        {
        	if(!this.fn_checkUpdate()) return;
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function(obj,e)
        {
        	if(this.ds_lotInfo.rowcount < 1){
        		this.gfn_Message("NoSaveData", "", "warning", "ok");
        		return;
        	}
        	this.ds_lotCard.clearData();
        	this.ds_lotInfo.setColumn(0, "SPLITUNIT", this.div_work.form.tab.Tabpage1.form.cbo_uom.value);
        	this.ds_lotInfo.setColumn(0, "USERID", this.gf_getUserId());

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveFinalInspectionAccept";
        	var sController 	= "/pcm06900/saveFinalInspectionAccept.do";
        	var sInDatasets 	= "INPUT1=ds_lotInfo:A INPUT2=ds_split:U";
        	var sOutDatasets 	= "ds_lotCard=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.fn_reset = function(obj,e)
        {
        	this.clearDetailInfo();
        };
        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		if (trId == "saveFinalInspectionAccept")
        		{
        			var msgArray = errMsg.split(("|"));
        			if(msgArray.length==2) {
        				this.gfn_Message(msgArray[0], "\n"+msgArray[1], "error", "ok");
        			} else {
        				this.gfn_Message("ProcessingError", "\n"+errMsg, "error", "ok");
        			}
        		} else {
        			this.gfn_Message(errMsg, null, "error", "ok");
        		}
        	} else {
        		if (trId == "selectProductInfo") {

        		} else if (trId == "selectAreaResourceByLot"){	/* Step1_1 Callback : 작업장, Lot ID 체크 */
        			if(this.ds_dt.getRowCount() < 1) {
        				//존재 하지 않는 Lot No. 입니다.
        				this.gfn_Message("NotExistLotNo", null, "warning", "ok");
        				return;
        			}

        			//작업장이나, 자원이 없을 경우 nfn_nvl
        			if (this.nfn_isNull(this.ds_dt.getColumn(0, "AREAID")) || this.nfn_isNull(this.ds_dt.getColumn(0, "RESOURCEID"))){
        				var popupId 				= "SEARCH_RESOURCE";
        				var oArg 					= {};
        				oArg.arg_lotId 				= this.nfn_nvl(this.ds_dt.getColumn(0,"LOTID"), "");
        				oArg.arg_processSegmentId 	= this.nfn_nvl(this.ds_dt.getColumn(0,"PROCESSSEGMENTID"), "");
        				oArg.arg_areaId 			= this.ds_search.getColumn(0,"AREAID");
        				this.gfn_openPopup(popupId,"pcm::PCM01700P2.xfdl",oArg,"width=456,height=170"); /* Step1_2 popupAfter 호출 */
        			} else {
        				this.fn_searchStaying();		/* Step2 체공상태 체크 함수 호출*/
        			}

        		} else if (trId == "saveLotResourceId"){ /* Step1_2 Popup Callback Save After */
        			this.fn_searchStaying();			/* Step2 체공상태 체크 함수 호출*/

        		} else if (trId == "getCheckStaying"){   /* Step2_1 Callback */
        			if (this.nfn_nvl(this.ds_dtStaying.getColumn(0, "ISLOCKING"), "") == "Y"){
        				// 채공팝업
        				var popupId = "SEARCH_StayReasonCode";
        				var oArg = {};

        				oArg.arg_ds_dtStaying = this.ds_dtStaying;
        				this.gfn_openPopup(popupId,"pcm::PCM01700P1.xfdl",oArg,"width=556,height=409");	/* Step2_2 popupAfter 호출 */
        			} else {
        				this.fn_StayReasonCode_CallBack(); /* Step3 재작업 여부 체크 함수 호출*/
        			}

        		} else if (trId =="getProcessDefTypeByProcess"){ /* Step 3_1 Callback */
        			this.fn_checkLot();	/* Step_4 함수 호출 */
        		} else if(trId =="selectLotInfoByProcess"){ /* Step 4_1 Callback */
        			if (this.ds_lotInfo.getRowCount() < 1)
        			{
        				this.ds_lotInfo.addRow();
        				// 조회할 데이터가 없습니다.
        				this.gfn_Message("LotStateIsNotAvailableReceive", "\nLot No : " +this.ds_dt.getColumn(0,"LOTID"), "warning", "ok");
        				this.clearDetailInfo();
        				this.ds_search.setColumn(0, "LOTID", "");
        				this.div_work.form.divSearch.form.edt_lotId.setFocus();
        				return;
        			} else {
        				//InTransit 상태 체크
        				if(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "LOTSTATE"), "") == "InTransit"){
        					// 물류창고 입/출고 처리 대상입니다
        					this.gfn_Message("CheckOSLogisticStatus", null, "warning", "ok");
        					this.clearDetailInfo();
        					this.ds_search.setColumn(0, "LOTID", "");
        					this.div_work.form.divSearch.form.edt_lotId.setFocus();
        					return;
        				} else if (this.nfn_nvl(this.ds_lotInfo.getColumn(0, "LOTSTATE"), "") == "OverSeaInTransit"){
        					// 해외 물류 이동중입니다.
        					this.gfn_Message("CheckOverSeasLogistic", null, "warning", "ok");
        				}
        				this.div_work.form.tab.Tabpage1.form.cbo_uom.set_value("PNL");
        				this.fn_searchOthers();  /* Step5 나머지 정보 조회 */
        			}
        		} else if(trId =="selectOtherInfo"){
        			var lotId			= this.nfn_nvl(this.ds_search.getColumn(0,"LOTID"), "");
        			var panelperQty 	= nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PANELPERQTY"), "0"));
        			var pnlQty      	= nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PNLQTY"), "0"));
        			var pcsQty      	= nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PCSQTY"), "0"));
        			var queryVersion	= "10001";

        			//메세지 탭 정보 조회
        			this.div_work.form.tab.Tabpage2.form.divMessage.form.fn_search();
        		} else if(trId =="saveFinalInspectionAccept"){
        			this.gfn_Message("SuccedSave", null, "info", "ok");
        			// Print Lot Card
                    if (this.ds_lotCard.rowcount > 0)
                    {
        				this.fn_print();
                    }
        			this.clearDetailInfo();
        		}
        	}
        }

        this.fn_print = function(obj, e)
        {
        	var lotId 			= "";
        	var workTypeName	= "";
        	var languageType 	= this.gf_getLanguageType();
        	var title 			= this.nfn_nvl(this.nfn_getDictionarynameUpper("LOTCARDPRINT"),"LOT Card 출력");

        	for(var i=0; i<this.ds_lotCard.rowcount;i++){
        		if(this.nfn_isNull(this.ds_lotCard.getColumn(i, "LOTID"))){
        			return;
        		}
        		lotId 		 	+= ","+this.ds_lotCard.getColumn(i, "LOTID");
        		workTypeName 	+= ","+this.ds_lotCard.getColumn(i, "WORKTYPENAME");
        	}

        	var oArg = {
        		sRptPath   : "/pcm/",
        		sRptName   : "PCM00600R.mrd",
        		strField   :   "[" + lotId.substr(1)
        					+ "][" + languageType
        					+ "][" + workTypeName.substr(1)
        					+ "][]",
        		bModalless : false
        	};

        	var sOption = "titletext="+title+",modeless=false";
        	this.gfn_reportPopup("reportViewer", "common::com_report.xfdl", oArg, sOption);

        };

        this.clearDetailInfo = function()
        {
        	this.div_work.form.divSearch.form.edt_lotId.set_value("");
        	this.ds_lotInfo.clearData();
        	this.ds_lotInfo.addRow();
        	this.ds_split.clearData();
        	this.ds_message.clearData();
        	this.ds_comment.clearData();
        	this.ds_operationSpec.clearData();
        	this.div_work.form.tab.Tabpage2.form.divMessage.form.fn_clear();
        }
        /*
         * Step1_1 : 작업장, Lot ID 체크
         */
        this.fn_searchKeyInfo = function()
        {
        	this.ds_dt.clearData();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 	this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0, "PLANTID", 			this.gf_getSiteType());
        	this.ds_search.setColumn(0, "LANGUAGETYPE", 	this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", 			"selectAreaResourceByLot");

        	var sSvcID 			= "selectAreaResourceByLot";
        	var sController 	= "/pcm06900/selectCustomQuery.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_dt=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }

        /*
         * Step2_1 : 체공상태 체크
         */
        this.fn_searchStaying = function()
        {
        	this.ds_dtStaying.clearData();
        	this.ds_search.setColumn(0, "SQL_ID", 			"getCheckStaying");

        	var sSvcID 			= "getCheckStaying";
        	var sController 	= "/pcm06900/selectCustomQuery.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets  	= "ds_dtStaying=output";
        	var sArgs 		  	= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, true);
        }

        /*
         *	Step3_1 : 재작업 여부 체크
         */
        this.fn_StayReasonCode_CallBack = function ()
        {
        	this.ds_processDefTypeInfo.clearData();
        	this.ds_search.setColumn(0, "PROCESSSTATE",		"WaitForReceive");
        	this.ds_search.setColumn(0, "VERSION", 			"10001");
        	this.ds_search.setColumn(0, "SQL_ID", 			"getProcessDefTypeByProcess");

        	var sSvcID 			= "getProcessDefTypeByProcess";
        	var sController 	= "/pcm06900/selectCustomQuery.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_processDefTypeInfo=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         *	Step4_1 : Lot Check 체크
         */
        this.fn_checkLot = function ()
        {
        	var processDefType ="";
        	if (this.ds_processDefTypeInfo.getRowCount() > 0){
        		processDefType = this.nfn_nvl(this.ds_processDefTypeInfo.getColumn(0, "PROCESSDEFTYPE"), "");
        	}

        	this.ds_lotInfo.clearData();
        	this.ds_search.setColumn(0, "PROCESSSTATE",			"WaitForReceive");
        	this.ds_search.setColumn(0, "VERSION", 				processDefType == "Rework" ? "30031" : "10031");
        	this.ds_search.setColumn(0, "SQL_ID", 				"selectLotInfoByProcess");
        	this.ds_search.setColumn(0, "MIDDLESEGMENTCLASSID", "'7026','7534'");

        	var sSvcID 			= "selectLotInfoByProcess";
        	var sController 	= "/pcm06900/selectCustomQuery.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_lotInfo=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs); /* Step 3_2 호출 */
        };


        /*
         * Step5 : 분할,전달사항,특기사항,공정SPEC 조회
         */
        this.fn_searchOthers = function()
        {
        	this.ds_split.clearData();
        	this.ds_message.clearData();
        	this.ds_comment.clearData();
        	this.ds_operationSpec.clearData();

        	var sSvcID 			= "selectOtherInfo";
        	var sController 	= "/pcm06900/selectOtherInfo.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets  	= "ds_comment=output1 ds_operationSpec=output2";
        	var sArgs 		  	= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, true);
        }


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
         this.fn_openPop = function(svcId, popId)
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

        	oArg.arg_type = "B";
        	oArg.arg_popupCd = popId;
        	oArg.arg_popupNm = "";
        	oArg.arg_searchStr = "";
        	oArg.arg_paramCols = "";
        	oArg.arg_paramValues = "";

        	//품목코드 조회
        	if(svcId =="AREA_ID"){
        		var searchKey = this.div_work.form.divSearch.form.edt_area.value;
        		oArg.arg_type = "BA";
        		oArg.arg_paramCols = "ENTERPRISEID|PLANTID|AREATYPE|LANGUAGETYPE|USERID";
        		oArg.arg_paramValues = this.gf_getEnterpriseId()
        							+"|"+this.gf_getSiteType()
        							+"|Area"
        							+"|"+this.gf_getLanguageType()
        							+"|"+this.gf_getUserId();
        		oArg.arg_rtnCols = "AREAID|AREANAME";
        		if(!this.nfn_isNull(searchKey)) {
        			oArg.arg_searchStr = "TXTAREA="+this.nfn_nvl(searchKey,"");
        		}
        	}

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        }

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId=="AREA_ID"){
        		this.ds_search.setColumn(0, "AREAID", rtn[0]);
        		this.ds_search.setColumn(0, "AREANAME", rtn[1]);
        		this.div_work.form.divSearch.form.edt_lotId.setFocus();
        		this.clearDetailInfo();
        	}

        	if(sPopupId=="SEARCH_RESOURCE"){ /* Step1_2 Popup Callback */
        		if(rtn.resultCd == "OK")
        		{
        			this.ds_body.clearData();
        			this.ds_body.addRow();

        			this.ds_body.setColumn(0, "LOTID", 		this.nfn_nvl(this.ds_search.getColumn(0, "LOTID"), ""));
        			this.ds_body.setColumn(0, "RESOURCEID", this.nfn_nvl(rtn.resourceId, "")); // 팝업 리턴값
        			this.ds_body.setColumn(0, "VERSION", 	"10031");

        			var sSvcID 			= "saveLotResourceId";
        			var sController 	= "/pcmWorkProcess/saveLotResourceId.do";
        			var sInDatasets 	= "INPUT=ds_body";
        			var sOutDatasets 	= "";
        			var sArgs 			= "";
        			this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        		} else {
        			// 현재 공정에서 사용할 자원을 선택하시기 바랍니다.
        			this.gfn_Message("SelectResourceForCurrentProcess", null, "warning", "ok");
        			this.clearDetailInfo();
        		}
        	}

        	if(sPopupId=="SEARCH_StayReasonCode"){ /* Step2_2 Popup Callback */
        		rtn = JSON.parse(rtn);
        		if(rtn.resultCd != "CANCEL")
        		{
        			this.fn_StayReasonCode_CallBack();	/* Step3 재작업 여부 체크 함수 호출*/
        		}
        	}
        }
        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        this.fn_checkUpdate = function()
        {
        	var bOk = true;
        	if (this.gfn_dsIsUpdated(this.ds_lotInfo)) {
        	//	bOk = this.gfn_Message("WRITTENBEDELETE", null, "conf", "yesno");
        	}
        	return bOk;
        }

        /*
         * 분할 함수
         */
        this.fn_split = function(obj,e)
        {
        	if(this.nfn_isNull(this.ds_lotInfo.getColumn(0, "LOTID"))) return;
        	if(this.nfn_isNull(this.ds_lotInfo.getColumn(0, "LOTID"))) return;

        	var lotId 		= this.ds_lotInfo.getColumn(0, "LOTID");
        	var pnlperqty	= this.ds_lotInfo.getColumn(0, "PANELPERQTY");
        	var lotQty 		= nexacro.toNumber(this.ds_lotInfo.getColumn(0, "PCSQTY"));
        	var uom 		= this.div_work.form.tab.Tabpage1.form.cbo_uom.value;
        	var qty 		= this.div_work.form.tab.Tabpage1.form.spn_qty.value;
        	var chk 		= true;
            var splitQty 	= 0;
        	var count		= 0;
        	var dsObj 		= this.ds_split;
        	var dsLot		= this.ds_lotInfo;

        	dsObj.clearData();

        	if(this.nfn_isNull(uom)) {
        		this.gfn_Message("SelectUOM", null, "warning", "ok");
        		return;
        	}

        	if(this.nfn_isNull(qty) || qty<=0) {
        		this.gfn_Message("PriorityInputSomething", this.nfn_nvl(this.nfn_getDictionarynameUpper("SPLITQTY"),"분할수량"), "warning", "ok");
        		return;
        	}

        	if (uom=="PNL"){
        		splitQty = nexacro.toNumber(qty) * pnlperqty;
        	} else {
        		splitQty = nexacro.toNumber(qty);
        	}

        	// 분할수량 체크 :: 모 LOT 기준 자LOT의 총 수량 체크
        	if (lotQty <= splitQty)
        	{
        		// 분할 수량
        		this.gfn_Message("SplitQtyLessThanParentQty", null, "info", "ok");	//throw MessageException.Create("SplitQtyLessThanParentQty");
        		return;
        	}


        	while (chk){
        		if (lotQty < splitQty)
        		{
        			chk = false;
        			continue;
        		}

        		var nRow 	= dsObj.addRow();
        		var panelQty = null;
        		if (count == 0){
        			dsObj.setColumn(nRow, "LOTID", lotId);
        			dsObj.setColumn(nRow, "ISPARENT", "Y");
        		} else {
        			dsObj.setColumn(nRow, "LOTID", "Split-" + count);
        			dsObj.setColumn(nRow, "ISPARENT", "N");
        		}

        		//계산식
        		panelQty =	nexacro.ceil(nexacro.toNumber(splitQty) / nexacro.toNumber(pnlperqty));

        		dsObj.setColumn(nRow, "PRODUCTDEFID", 		dsLot.getColumn(0, "PRODUCTDEFID"));
        		dsObj.setColumn(nRow, "PRODUCTDEFVERSION", 	dsLot.getColumn(0, "PRODUCTDEFVERSION"));
        		dsObj.setColumn(nRow, "PRODUCTDEFNAME", 	dsLot.getColumn(0, "PRODUCTDEFNAME"));
        		dsObj.setColumn(nRow, "UNIT", 				"PCS");
        		dsObj.setColumn(nRow, "PANELQTY", 			panelQty);
        		dsObj.setColumn(nRow, "QTY", 				splitQty);

        		lotQty -= splitQty;
        		count++;

        		// 최종 나머지 수량은 모LOT으로 지정하여 Row 추가
        		if (lotQty <= splitQty && lotQty > 0)
        		{
        			var aRow 	= dsObj.addRow();
        			var aValue 	= null;
        			aValue =	nexacro.ceil(nexacro.toNumber(lotQty) / nexacro.toNumber(pnlperqty));

        			dsObj.setColumn(aRow, "LOTID", "Split-" + count);
        			dsObj.setColumn(aRow, "ISPARENT", "N");
        			dsObj.setColumn(aRow, "PRODUCTDEFID", 		dsLot.getColumn(0, "PRODUCTDEFID"));
        			dsObj.setColumn(aRow, "PRODUCTDEFVERSION", 	dsLot.getColumn(0, "PRODUCTDEFVERSION"));
        			dsObj.setColumn(aRow, "PRODUCTDEFNAME", 	dsLot.getColumn(0, "PRODUCTDEFNAME"));
        			dsObj.setColumn(aRow, "UNIT", 				"PCS");
        			dsObj.setColumn(aRow, "PANELQTY", 			aValue);
        			dsObj.setColumn(aRow, "QTY", 				lotQty);
        			lotQty -= splitQty;
        			count++;
        		}
        	}
        };
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        //작업장 조회
        this.div_work_divSearch_btn_area_onclick = function(obj,e)
        {
        	this.fn_openPop("AREA_ID","P00148", null);
        };

        this.div_work_divSearch_edt_lotId_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		obj.updateToDataset();
        		this.fn_search();
        	}
        };

        this.div_work_divSearch_edt_area_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.div_work_divSearch_btn_area_onclick();
        	}
        };

        this.div_work_tab_Tabpage1_btn_delRow_onclick = function(obj,e)
        {
        	if(this.nfn_isNull(this.ds_lotInfo.getColumn(0, "LOTID"))) return;
        	this.basfn_deleteRow(this.ds_split);
        };

        this.div_work_tab_Tabpage1_btn_addRow_onclick = function(obj,e)
        {
        	if(this.nfn_isNull(this.ds_lotInfo.getColumn(0, "LOTID"))) return;
        	var lotId 		= this.ds_lotInfo.getColumn(0, "LOTID");
        	var pnlperqty	= this.ds_lotInfo.getColumn(0, "PANELPERQTY");
        	var lotQty 		= nexacro.toNumber(this.ds_lotInfo.getColumn(0, "PCSQTY"));
        	var uom 		= this.div_work.form.tab.Tabpage1.form.cbo_uom.value;
        	var qty 		= this.div_work.form.tab.Tabpage1.form.spn_qty.value;
        	var chk 		= true;
            var splitQty 	= 0;
        	var count		= 0;
        	var dsObj 		= this.ds_split;
        	var dsLot		= this.ds_lotInfo;
        	var	usedQty		= nexacro.toNumber(dsObj.getSum("QTY"));

        	if(this.nfn_isNull(uom)) {
        		this.gfn_Message("SelectUOM", null, "warning", "ok");
        		return;
        	}

        	if(this.nfn_isNull(qty) || qty <= 0) {
        		this.gfn_Message("NotSplitQty", this.nfn_nvl(this.nfn_getDictionarynameUpper("SPLITQTY"),"분할수량"), "warning", "ok");
        		return;
        	}

        	if(usedQty >= lotQty){
        		return;
        	}

        	if(qty <= 0){
        		return;
        	}

        	if (uom=="PNL"){
        		splitQty = nexacro.toNumber(qty) * pnlperqty;
        	} else {
        		splitQty = nexacro.toNumber(qty);
        	}

        	if (splitQty > lotQty - usedQty)
        	{
        		splitQty = lotQty - usedQty;
        	}

        	count			= dsObj.rowcount;
        	var nRow 		= dsObj.addRow();
        	var panelQty 	= nexacro.ceil(nexacro.toNumber(splitQty) / nexacro.toNumber(pnlperqty));

        	if (count == 0){
        		dsObj.setColumn(nRow, "LOTID", lotId);
        		dsObj.setColumn(nRow, "ISPARENT", "Y");
        	} else {
        		dsObj.setColumn(nRow, "LOTID", "Split-" + count);
        		dsObj.setColumn(nRow, "ISPARENT", "N");
        	}

        	dsObj.setColumn(nRow, "PRODUCTDEFID", 		dsLot.getColumn(0, "PRODUCTDEFID"));
        	dsObj.setColumn(nRow, "PRODUCTDEFVERSION", 	dsLot.getColumn(0, "PRODUCTDEFVERSION"));
        	dsObj.setColumn(nRow, "PRODUCTDEFNAME", 	dsLot.getColumn(0, "PRODUCTDEFNAME"));
        	dsObj.setColumn(nRow, "UNIT", 				"PCS");
        	dsObj.setColumn(nRow, "PANELQTY", 			panelQty);
        	dsObj.setColumn(nRow, "QTY", 				splitQty);


        };

        this.ds_split_onvaluechanged = function(obj,e)
        {
        	if(this.nfn_isNull(this.ds_lotInfo.getColumn(0, "LOTID"))) return;
        	var lotId 		= this.ds_lotInfo.getColumn(0, "LOTID");
        	var pnlperqty	= this.ds_lotInfo.getColumn(0, "PANELPERQTY");
        	var lotQty 		= nexacro.toNumber(this.ds_lotInfo.getColumn(0, "PCSQTY"));
        	var uom 		= this.div_work.form.tab.Tabpage1.form.cbo_uom.value;
        	var qty 		= this.div_work.form.tab.Tabpage1.form.spn_qty.value;
        	var chk 		= true;
            var splitQty 	= 0;
        	var count		= 0;
        	var dsObj 		= this.ds_split;
        	var dsLot		= this.ds_lotInfo;
        	var	usedQty		= nexacro.toNumber(dsObj.getSum("QTY"));

        	if(this.nfn_isNull(uom)) {
        		this.gfn_Message("SelectUOM", null, "warning", "ok");
        		return;
        	}

        	if(e.columnid=="QTY"){
        		var panelQty 	= nexacro.ceil(nexacro.toNumber(e.newvalue) / nexacro.toNumber(pnlperqty));
        		dsObj.setColumn(e.row, "PANELQTY", 		panelQty);
        	}
        	if(e.columnid=="PANELQTY"){
        		var panelQty 	= nexacro.ceil(nexacro.toNumber(e.newvalue) * nexacro.toNumber(pnlperqty));
        		dsObj.setColumn(e.row, "QTY", 			panelQty);
        	}

        	usedQty		= nexacro.toNumber(dsObj.getSum("QTY"));

        	if(usedQty > usedQty){
        		this.gfn_Message("SplitQtyLessThanParentQty", null, "warning", "ok");
        		dsObj.setColumn(e.row, "PANELQTY", 	0);
        		dsObj.setColumn(e.row, "QTY", 		0);
        	}
        };
        this.div_work_tab_Tabpage1_grd_lotSplit_onheadclick = function(obj,e)
        {
        	//헤더 체크박스 이벤트 강제 호출
        	// Grid 전체선택/해제(Header에 checkbox있는 Grid에만 추가
        	this.gfn_setGridCheckAll(obj, e);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.divSearch.form.btn_area.addEventHandler("onclick",this.div_work_divSearch_btn_area_onclick,this);
            this.div_work.form.divSearch.form.edt_area.addEventHandler("onkeydown",this.div_work_divSearch_edt_area_onkeydown,this);
            this.div_work.form.divSearch.form.edt_area.addEventHandler("onchanged",this.div_work_divSearch_edt_area_onchanged,this);
            this.div_work.form.divSearch.form.edt_lotId.addEventHandler("onkeydown",this.div_work_divSearch_edt_lotId_onkeydown,this);
            this.div_work.form.grd_productInfo.addEventHandler("onexpandup",this.div_work_tab_Tabpage1_grd_productInfo_onexpandup,this);
            this.div_work.form.grd_productInfo.addEventHandler("oncloseup",this.div_work_tab_Tabpage1_grd_productInfo_oncloseup,this);
            this.div_work.form.tab.Tabpage1.form.btn_delRow.addEventHandler("onclick",this.div_work_tab_Tabpage1_btn_delRow_onclick,this);
            this.div_work.form.tab.Tabpage1.form.btn_addRow.addEventHandler("onclick",this.div_work_tab_Tabpage1_btn_addRow_onclick,this);
            this.div_work.form.tab.Tabpage1.form.btn_split.addEventHandler("onclick",this.fn_split,this);
            this.div_work.form.tab.Tabpage1.form.grd_lotSplit.addEventHandler("onheadclick",this.div_work_tab_Tabpage1_grd_lotSplit_onheadclick,this);
            this.ds_split.addEventHandler("onvaluechanged",this.ds_split_onvaluechanged,this);
        };
        this.loadIncludeScript("PCM06900M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
