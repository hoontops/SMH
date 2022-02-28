(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM01700T07");
            this.set_titletext("불량");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,316);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_param", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODEID\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dt", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE_BTN\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"DECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"DECISIONDEGREENAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PNLQTY_BTN\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"QTY_BTN\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTRATE\" type=\"FLOAT\" size=\"256\"/><Column id=\"SPLITCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREANAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ReasonConsumableLot", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"SPLITCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ReasonConsumableList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"SPLITCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ReasonProcessSegment", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SPLITCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_file", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_SYS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_EXT\" type=\"STRING\" size=\"256\"/><Column id=\"OC_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_GUID\" type=\"STRING\" size=\"256\"/><Column id=\"SVR_SAVE_COURS\" type=\"STRING\" size=\"256\"/><Column id=\"DRM_APY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DNLD_CNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"KEEP_START_DATEC\" type=\"STRING\" size=\"256\"/><Column id=\"KEEP_END_DATEC\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CREATION_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATED_BY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LAST_UPDATE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATE_LOGIN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TABLE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESC\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_SRC_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_SAVE_COURS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fileCombo", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"OC_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_GUID\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_ID\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dtTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"DECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"DECISIONDEGREENAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTRATE\" type=\"STRING\" size=\"256\"/><Column id=\"SPLITCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREANAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dtTemp2", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"DECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"DECISIONDEGREENAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTRATE\" type=\"STRING\" size=\"256\"/><Column id=\"SPLITCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREANAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotInfoData", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PATHTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPEID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STEPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRINTLOTCARD\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRINTRCLOTCARD\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINUSER\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"ISRCLOT\" type=\"STRING\" size=\"256\"/><Column id=\"SELFSHIPINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"SELFTAKEINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"OSPINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"ISBEFOREROLLCUTTING\" type=\"STRING\" size=\"256\"/><Column id=\"Column30\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"ISWEEKMNG\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTPROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLAIMLOT\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"ISREWORK\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"DUEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_defectList","0","34",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_dt");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"24\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"24\"/><Column size=\"80\"/><Column size=\"24\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"180\"/><Column size=\"200\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" colspan=\"2\" text=\"불량 코드\" tooltiptext=\"DEFECTCODE\" cssclass=\"cell_point\"/><Cell col=\"3\" text=\"불량 코드 명\" tooltiptext=\"DEFECTCODENAME\"/><Cell col=\"4\" text=\"품질공정\" tooltiptext=\"QCSEGMENT\"/><Cell col=\"5\" colspan=\"2\" text=\"수량(PNL)\" tooltiptext=\"PNLQTY\" cssclass=\"cell_point\"/><Cell col=\"7\" colspan=\"2\" text=\"수량\" tooltiptext=\"QTY\" cssclass=\"cell_point\"/><Cell col=\"9\" text=\"불량율\" tooltiptext=\"DEFECTRATE\"/><Cell col=\"10\" text=\"원인품목\" tooltiptext=\"REASONCONSUMABLEDEFID\"/><Cell col=\"11\" text=\"원인 LOTID\" tooltiptext=\"REASONCONSUMABLELOTID\"/><Cell col=\"12\" text=\"원인공정\" tooltiptext=\"REASONPROCESSSEGMENTID\"/><Cell col=\"13\" text=\"원인작업장\" tooltiptext=\"REASONAREAID\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:DEFECTCODE\" textAlign=\"left\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" expandsize=\"24\"/><Cell col=\"2\" expandimage=\"url(&apos;theme://images/img_WF_inputDel_P.png&apos;)\" expandshow=\"show\" text=\"bind:DEFECTCODE_BTN\" border=\"1px solid #f1f1f1,1px solid #f1f1f1,1px solid #f1f1f1,0px solid #f1f1f1\" displaytype=\"none\"/><Cell col=\"3\" text=\"bind:DEFECTCODENAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:QCSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:PNLQTY\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"6\" expandimage=\"url(&apos;theme://images/img_WF_inputDel_P.png&apos;)\" expandshow=\"show\" text=\"bind:PNLQTY_BTN\" border=\"1px solid #f1f1f1,1px solid #f1f1f1,1px solid #f1f1f1,0px solid #f1f1f1\" displaytype=\"none\"/><Cell col=\"7\" text=\"bind:QTY\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"8\" expandimage=\"url(&apos;theme://images/img_WF_inputDel_P.png&apos;)\" expandshow=\"show\" text=\"bind:QTY_BTN\" border=\"1px solid #f1f1f1,1px solid #f1f1f1,1px solid #f1f1f1,0px solid #f1f1f1\" displaytype=\"none\"/><Cell col=\"9\" text=\"bind:DEFECTRATE\" displaytype=\"mask\" edittype=\"none\" textAlign=\"right\" maskeditformat=\"#,##0.00\" maskedittype=\"number\" maskeditpostfixtext=\" %\"/><Cell col=\"10\" text=\"bind:CONSUMABLEDEFNAME\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" expandsize=\"24\"/><Cell col=\"11\" text=\"bind:REASONCONSUMABLELOTID\" textAlign=\"left\" combodataset=\"ds_ReasonConsumableLot\" combocodecol=\"CONSUMABLELOTID\" combodatacol=\"CONSUMABLELOTID\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"12\" text=\"bind:REASONPROCESSSEGMENTNAME\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" expandsize=\"24\"/><Cell col=\"13\" text=\"bind:REASONAREANAME\" textAlign=\"left\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" text=\"expr:dataset.getSum(&quot;PNLQTY&quot;)\"/><Cell col=\"6\"/><Cell col=\"7\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" text=\"expr:dataset.getSum(&quot;QTY&quot;)\"/><Cell col=\"8\"/><Cell col=\"9\" expandchar=\"%\" expandsize=\"24\" displaytype=\"mask\" maskeditformat=\"#,##0.00\" text=\"expr:dataset.getSum(&quot;DEFECTRATE&quot;)\" maskedittype=\"number\" maskeditpostfixtext=\" %\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_pnlDefect","0","0","1190","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("title1_01","0","0","36","34",null,null,null,null,null,null,this.div_pnlDefect.form);
            obj.set_taborder("0");
            obj.set_text("불량");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_pnlDefect.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_dt","title1_01:0","0","140","34",null,null,null,null,null,null,this.div_pnlDefect.form);
            obj.set_taborder("10");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_pnlDefect.addChild(obj.name, obj);

            obj = new Static("sta_defectCode","13.91%","9","5.01%","20",null,null,null,null,null,null,this.div_pnlDefect.form);
            obj.set_taborder("1");
            obj.set_text("불량코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            this.div_pnlDefect.addChild(obj.name, obj);

            obj = new Static("sta_QCSegment","28.78%","9","5.01%","20",null,null,null,null,null,null,this.div_pnlDefect.form);
            obj.set_taborder("3");
            obj.set_text("품질공정");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            this.div_pnlDefect.addChild(obj.name, obj);

            obj = new Edit("edt_defectCode","sta_defectCode:5","9",null,"20","sta_QCSegment:5",null,null,null,null,null,this.div_pnlDefect.form);
            obj.set_taborder("2");
            this.div_pnlDefect.addChild(obj.name, obj);

            obj = new Static("sta_PNLQty","43.72%","9","2.94%","20",null,null,null,null,null,null,this.div_pnlDefect.form);
            obj.set_taborder("5");
            obj.set_text("PNL");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            this.div_pnlDefect.addChild(obj.name, obj);

            obj = new Edit("edt_QCSegment","sta_QCSegment:5","9",null,"20","sta_PNLQty:5",null,null,null,null,null,this.div_pnlDefect.form);
            obj.set_taborder("4");
            this.div_pnlDefect.addChild(obj.name, obj);

            obj = new Static("sta_PCSQty","55.01%","9","2.86%","20",null,null,null,null,null,null,this.div_pnlDefect.form);
            obj.set_taborder("7");
            obj.set_text("PCS");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            this.div_pnlDefect.addChild(obj.name, obj);

            obj = new Spin("spn_PNLQty","sta_PNLQty:5","9",null,"20","sta_PCSQty:5",null,null,null,null,null,this.div_pnlDefect.form);
            obj.set_taborder("6");
            this.div_pnlDefect.addChild(obj.name, obj);

            obj = new Spin("spn_PCSQty","sta_PCSQty:5","9","100","20",null,null,null,null,null,null,this.div_pnlDefect.form);
            obj.set_taborder("8");
            this.div_pnlDefect.addChild(obj.name, obj);

            obj = new Button("btn_defectSearch","spn_PCSQty:3","9","34","20",null,null,null,null,null,null,this.div_pnlDefect.form);
            obj.set_taborder("9");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_black");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("ADD");
            this.div_pnlDefect.addChild(obj.name, obj);

            obj = new Button("btn_delRow",null,"5","29","24","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdDel");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addRow",null,"5","29","24","btn_delRow:0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_ReasonConsumableList","553","249","450","221",null,null,null,null,null,null,this);
            obj.set_text("pdv_00");
            obj.set_visible("false");
            obj.set_cssclass("pdiv_POP");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_ReasonConsumableList","0","0",null,null,"0","0",null,null,null,null,this.pdv_ReasonConsumableList.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_ReasonConsumableList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"106\"/><Column size=\"72\"/><Column size=\"163\"/><Column size=\"101\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"자재ID\"/><Cell col=\"1\" text=\"자재버전\"/><Cell col=\"2\" text=\"자재명\"/><Cell col=\"3\" text=\"자재유형\"/></Band><Band id=\"body\"><Cell text=\"bind:LOTID\"/><Cell col=\"1\" text=\"bind:CONSUMABLEDEFVERSION\"/><Cell col=\"2\" text=\"bind:CONSUMABLEDEFNAME\"/><Cell col=\"3\" text=\"bind:MATERIALTYPE\"/></Band></Format></Formats>");
            this.pdv_ReasonConsumableList.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_ReasonProcessSegment","863","259","450","221",null,null,null,null,null,null,this);
            obj.set_text("pdv_00");
            obj.set_visible("false");
            obj.set_cssclass("pdiv_POP");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_ReasonProcessSegment","0","0",null,null,"0","0",null,null,null,null,this.pdv_ReasonProcessSegment.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_ReasonProcessSegment");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"88\"/><Column size=\"177\"/><Column size=\"77\"/><Column size=\"101\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"공정ID\"/><Cell col=\"1\" text=\"공정명\"/><Cell col=\"2\" text=\"공정수순\"/><Cell col=\"3\" text=\"작업장\"/></Band><Band id=\"body\"><Cell text=\"bind:PROCESSSEGMENTID\"/><Cell col=\"1\" text=\"bind:PROCESSSEGMENTNAME\"/><Cell col=\"2\" text=\"bind:USERSEQUENCE\"/><Cell col=\"3\" text=\"bind:AREANAME\"/></Band></Format></Formats>");
            this.pdv_ReasonProcessSegment.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,316,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM01700T07.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM01700T07.xfdl","lib::lib_pcm.xjs");
        this.addIncludeScript("PCM01700T07.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("PCM01700T07.xfdl","lib::lib_mtm.xjs");
        this.addIncludeScript("PCM01700T07.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PCM01700T07.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 인수등록 :: 불량 탭
         * 파일명 		: PCM01700T07.xfdl
         * 작성자 		: 김성현
         * 작성일 		: 2021.04.10
         *
         * 설  명		: 인수등록 :: 불량 탭
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.10	김성현   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/


        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_pcm.xjs"); /*include "lib::lib_pcm.xjs"*/;
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_mtm.xjs"); /*include "lib::lib_mtm.xjs"*/;	//MTM 공통 라이브러리 include
        this.executeIncludeScript("pcm::pcmCommon.xjs"); /*include "pcm::pcmCommon.xjs"*/; //pcm 에서 사용하는 공통
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/

        this._panelPerQty = 0;
        this._panelQty = 0;
        this._qty = 0;
        this._visibleLotId = true;
        this._visibleFileUp = false;
        this._visibleDefectDgree = false;
        this._visibleTopDefectCode = false;
        this._lotId = "";
        this._queryVersion = "";
        this.ds_dt_rowposition = -1;



         this.DefectSegments = "";

         this.IsSaved = true;

         this.pnlQty_enter = false;


         //첫번째 탭 불량 그리드
         this.Defect = {
        		inspectQty :	0   	//검사 수량(pcs 기준)
        	  , pcsPnl :    0   		//기준 (PCS / PNL) 수량
        	  , InspectionDefId : "" 	//검사정의 ID
        	  , SelectedLotId : "" 		//Selected Lot ID
        	  , panelPerQty : 0			//usDefectGrid 의 member
        	  , qty : 0					//usDefectGrid 의 member
         };

        // this.gf_getEnterpriseId()
        // this.gf_getSiteType()
        // this.gf_getLanguageType()
        // this.gf_getUserId()
        // this.gf_getUserNm()

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	console.log("PCM01700T07");

        	this.nfn_formInit(obj);

        	this.setVisibleLotId(false);
        	this.setVisibleFileUpLoad(false);


        // 	var vlotId = this.nfn_nvl(this.parent.parent.parent.parent.parent.div_work.form.div_search.form.edt_lotId.value, "");
        // 	var vpfsDetail_tabSearch = this.parent.parent.parent.parent.parent.g_pfsDetail_tabSearch;
        //
        // 	if(vlotId != "" && vpfsDetail_tabSearch) this.fn_search();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/


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
        		case "getDefectCodeByProcess":

        			if (this.ds_dt.getRowCount() <= 0)
        				return;



        			this.edt_defectCode.set_value("");
        			this.edt_QCSegment.set_value("");
        			this.spn_PNLQty.set_value("");
        			this.spn_PCSQty.set_value("");


        			this.edt_defectCode.setFocus();
        			break;
        		case "selectReasonConsumableList":
        			// 원인품목

        			console.log("원인품목");
        			console.log(this.ds_ReasonConsumableList.saveXML());

        			this.GetDefectReasonConsumableLot();

        			break;

        		case "selectDefectReasonConsumableLot":
        			// 원인자재 Lot

        			console.log("원인자재 Lot");
        			console.log(this.ds_ReasonConsumableLot.saveXML());


        			this.GetDefectReasonProcesssegment();

        			break;

        		case "selectDefectReasonProcesssegment":
        			// 원인공정

        			console.log("원인공정");
        			console.log(this.ds_ReasonProcessSegment.saveXML());



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
             switch(sPopupId)
         	{
        		case "SEARCH_DEFECT":

        			var nRow = this.ds_dt.rowcount == 1 ? 0 : this.ds_dt_rowposition;

        			// "DEFECTCODE|DEFECTCODENAME|QCSEGMENTID|QCSEGMENTNAME|DECISIONDEGREE|CONFIRMSITE"

        			this.ds_dt.setColumn(nRow,"DEFECTCODE",rtn[0]);
        			this.ds_dt.setColumn(nRow,"DEFECTCODENAME",rtn[1]);
        			this.ds_dt.setColumn(nRow,"QCSEGMENTID",rtn[2]);
        			this.ds_dt.setColumn(nRow,"QCSEGMENTNAME",rtn[3]);
        			this.ds_dt.setColumn(nRow,"DECISIONDEGREE",rtn[4]);
        			// DECISIONDEGREENAME ???

        			break;

        		default :
        			break;
         	}
         };




        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/

         this.fn_search = function ()
         {
        	this.initializeControls();

        	this.GetReasonConsumableList();
         };

        this.initializeControls = function ()
        {
        	this.initializeGrid();

        	// 상단 Defect & 품질공정 수기 입력 보이기 설정
        	if (this._visibleTopDefectCode)
        	{
        		this.div_pnlDefect.set_visible(true);
        	}
        	else
        	{
        		this.div_pnlDefect.set_visible(false);
        	}

        	var vLotId          = this.parent.parent.parent.parent.parent.g_LotId;
        	var vPanelperQty    = this.parent.parent.parent.parent.parent.g_PanelperQty;
        	var vPnlQty         = this.parent.parent.parent.parent.parent.g_PnlQty;
        	var vPcsQty         = this.parent.parent.parent.parent.parent.g_PcsQty;
        	var vQueryVersion   = this.parent.parent.parent.parent.parent.queryVersion;
        	var vLotInfoData    = this.parent.parent.parent.parent.parent.ds_lotInfo;

        	this.setLotInfo(vLotId, vPanelperQty, vPnlQty, vPcsQty, vQueryVersion, vLotInfoData);

        };

        this.initializeGrid = function ()
        {
        	var cellNo1 = 1;
        	var cellNo2 = 1;
        	var cellNo3 = 1;
        	var strFormat = '';

        		strFormat += '<Formats>\n';
        		strFormat += '  <Format id="default">\n';
        		strFormat += '    <Columns>\n';
        		strFormat += '      <Column size="40"/>\n';


        	if (this._visibleLotId) {
        		strFormat += '      <Column size="160"/>\n';
        	}

        		strFormat += '      <Column size="80"/>\n';
        		strFormat += '      <Column size="24"/>\n';
        		strFormat += '      <Column size="120"/>\n';

        	if (this._visibleDefectDgree) {
        		strFormat += '      <Column size="60"/>\n';
        	}

        		strFormat += '      <Column size="120"/>\n';
        		strFormat += '      <Column size="80"/>\n';
        		strFormat += '      <Column size="24"/>\n';
        		strFormat += '      <Column size="80"/>\n';
        		strFormat += '      <Column size="24"/>\n';
        		strFormat += '      <Column size="80"/>\n';



        		strFormat += '      <Column size="200"/>\n';
        		strFormat += '      <Column size="180"/>\n';
        		strFormat += '      <Column size="200"/>\n';
        		strFormat += '      <Column size="150"/>\n';
        		strFormat += '    </Columns>\n';
        		strFormat += '    <Rows>\n';
        		strFormat += '      <Row size="24" band="head"/>\n';
        		strFormat += '      <Row size="24"/>\n';
        		strFormat += '      <Row size="26" band="summ"/>\n';
        		strFormat += '    </Rows>\n';
        		strFormat += '    <Band id="head">\n';
        		strFormat += '      <Cell text="No"/>\n';


        	if (this._visibleLotId) {
        		strFormat += '      <Cell col="' + (cellNo1++) + '" text="Lot No." tooltiptext="LOTID"/>\n';
        	}

        		strFormat += '      <Cell col="' + (cellNo1++) + '" colspan="2" text="불량 코드" tooltiptext="DEFECTCODE" cssclass="cell_point"/>\n';
        		cellNo1++;
        		strFormat += '      <Cell col="' + (cellNo1++) + '" text="불량 코드 명" tooltiptext="DEFECTCODENAME"/>\n';

        	if (this._visibleDefectDgree) {
        		strFormat += '      <Cell col="' + (cellNo1++) + '" text="판정등급" tooltiptext="DECISIONDEGREE"/>\n';
        	}

        		strFormat += '      <Cell col="' + (cellNo1++) + '" text="품질공정" tooltiptext="QCSEGMENT"/>\n';
        		strFormat += '      <Cell col="' + (cellNo1++) + '" colspan="2" text="수량(PNL)" tooltiptext="PNLQTY" cssclass="cell_point"/>\n';
        		cellNo1++;
        		strFormat += '      <Cell col="' + (cellNo1++) + '" colspan="2" text="수량" tooltiptext="QTY" cssclass="cell_point"/>\n';
        		cellNo1++;
        		strFormat += '      <Cell col="' + (cellNo1++) + '" text="불량율" tooltiptext="DEFECTRATE"/>\n';



        		strFormat += '      <Cell col="' + (cellNo1++) + '" text="원인품목" tooltiptext="REASONCONSUMABLEDEFID"/>\n';
        		strFormat += '      <Cell col="' + (cellNo1++) + '" text="원인 LOTID" tooltiptext="REASONCONSUMABLELOTID"/>\n';
        		strFormat += '      <Cell col="' + (cellNo1++) + '" text="원인공정" tooltiptext="REASONPROCESSSEGMENTID"/>\n';
        		strFormat += '      <Cell col="' + (cellNo1++) + '" text="원인작업장" tooltiptext="REASONAREAID"/>\n';
        		strFormat += '    </Band>\n';
        		strFormat += '    <Band id="body">\n';
        		strFormat += '      <Cell text="expr:currow+1"/>\n';


        	if (this._visibleLotId) {
        		strFormat += '      <Cell col="' + (cellNo2++) + '" text="bind:LOTID" textAlign="center"/>\n';
        	}

        		strFormat += '      <Cell col="' + (cellNo2++) + '" text="bind:DEFECTCODE" textAlign="left"  expandimage="url(\'theme://images/grd_expand.png\')" expandshow="show" expandsize="24"/>\n';
        		strFormat += '      <Cell col="' + (cellNo2++) + '" text="bind:DEFECTCODE_BTN" expandimage=\"url(\'theme://images/img_WF_inputDel_P.png\')\" expandshow="show" border="1px solid #f1f1f1,1px solid #f1f1f1,1px solid #f1f1f1,0px solid #f1f1f1" displaytype="none"/>\n';
        		strFormat += '      <Cell col="' + (cellNo2++) + '" text="bind:DEFECTCODENAME" textAlign="left"/>\n';

        	if (this._visibleDefectDgree) {
        		strFormat += '      <Cell col="' + (cellNo2++) + '" text="bind:DECISIONDEGREE" displaytype="combotext" combocodecol="C,DecisionDegree,SEL,Y,N"/>\n';
        	}

        		strFormat += '      <Cell col="' + (cellNo2++) + '" text="bind:QCSEGMENTNAME" textAlign="left"/>\n';
        		strFormat += '      <Cell col="' + (cellNo2++) + '" text="bind:PNLQTY" displaytype="mask" edittype="mask" maskeditformat="#,###,###,##0.#####" textAlign="right" maskeditautoselect="true"/>\n';
        		strFormat += '      <Cell col="' + (cellNo2++) + '" text="bind:PNLQTY_BTN" expandimage=\"url(\'theme://images/img_WF_inputDel_P.png\')\" expandshow="show" border="1px solid #f1f1f1,1px solid #f1f1f1,1px solid #f1f1f1,0px solid #f1f1f1" displaytype="none"/>\n';
        		strFormat += '      <Cell col="' + (cellNo2++) + '" text="bind:QTY" displaytype="mask" edittype="mask" maskeditformat="#,###,###,##0.#####" textAlign="right" maskeditautoselect="true"/>\n';
        		strFormat += '      <Cell col="' + (cellNo2++) + '" text="bind:QTY_BTN" expandimage=\"url(\'theme://images/img_WF_inputDel_P.png\')\" expandshow="show" border="1px solid #f1f1f1,1px solid #f1f1f1,1px solid #f1f1f1,0px solid #f1f1f1" displaytype="none"/>\n';
        		strFormat += '      <Cell col="' + (cellNo2++) + '" text="bind:DEFECTRATE" displaytype="mask" edittype="none" maskeditformat="#,##0" textAlign="right"/>\n';



        	    strFormat += '      <Cell col="' + (cellNo2++) + '" text="bind:CONSUMABLEDEFNAME" expandimage="url(\'theme://images/grd_expand.png\')" expandshow="show" expandsize="24"/>\n';
                strFormat += '      <Cell col="' + (cellNo2++) + '" text="bind:REASONCONSUMABLELOTID" textAlign="left" combodataset="ds_ReasonConsumableLot" combocodecol="CONSUMABLELOTID" combodatacol="CONSUMABLELOTID" displaytype="combotext" edittype="combo"/>\n';
                strFormat += '      <Cell col="' + (cellNo2++) + '" text="bind:REASONPROCESSSEGMENTNAME" expandimage="url(\'theme://images/grd_expand.png\')" expandshow="show" expandsize="24"/>\n';


        		strFormat += '      <Cell col="' + (cellNo2++) + '" text="bind:REASONAREANAME" textAlign="left"/>\n';
        		strFormat += '    </Band>\n';
        		strFormat += '    <Band id="summary">\n';
        		strFormat += '      <Cell/>\n';


        	if (this._visibleLotId) {
        		strFormat += '      <Cell col="' + (cellNo3++) + '"/>\n';
        	}

        		strFormat += '      <Cell col="' + (cellNo3++) + '"/>\n';
        		strFormat += '      <Cell col="' + (cellNo3++) + '"/>\n';
        		strFormat += '      <Cell col="' + (cellNo3++) + '"/>\n';

        	if (this._visibleDefectDgree) {
        		strFormat += '      <Cell col="' + (cellNo3++) + '"/>\n';
        	}

        		strFormat += '      <Cell col="' + (cellNo3++) + '"/>\n';
        		strFormat += '      <Cell col="' + (cellNo3++) + '" displaytype="mask" maskeditformat="#,##0.00" text="expr:dataset.getSum(&quot;PNLQTY&quot;)"/>\n';
        		strFormat += '      <Cell col="' + (cellNo3++) + '"/>\n';
        		strFormat += '      <Cell col="' + (cellNo3++) + '" displaytype="mask" maskeditformat="#,##0.00" text="expr:dataset.getSum(&quot;QTY&quot;)"/>\n';
        		strFormat += '      <Cell col="' + (cellNo3++) + '"/>\n';
        		strFormat += '      <Cell col="' + (cellNo3++) + '" expandchar="%" expandsize="24" displaytype="mask" maskeditformat="#,##0.00" text="expr:dataset.getSum(&quot;DEFECTRATE&quot;)" maskedittype="number" maskeditpostfixtext=" %"/>\n';



        		strFormat += '      <Cell col="' + (cellNo3++) + '"/>\n';
        		strFormat += '      <Cell col="' + (cellNo3++) + '"/>\n';
        		strFormat += '      <Cell col="' + (cellNo3++) + '"/>\n';
        		strFormat += '      <Cell col="' + (cellNo3++) + '"/>\n';
        		strFormat += '    </Band>\n';
        		strFormat += '  </Format>\n';
        		strFormat += '</Formats>\n';

        	console.log(strFormat);

        	this.grd_defectList.set_formats(strFormat);

            cellNo1 = 1;
        	cellNo2 = 1;
        	cellNo3 = 1;
        	strFormat = "";
        };

        this.setVisibleTopDefectCode = function (value)
        {
        	this._visibleTopDefectCode = value;
        };

        this.getVisibleTopDefectCode = function ()
        {
        	return this._visibleTopDefectCode;
        };


        this.setLotID = function (value)
        {
        	this._lotId = value;
        };

        this.getLotID = function ()
        {
        	return this._lotId;
        };

        this.setLotPanelPerQty = function (value)
        {
        	this._panelPerQty = value;
        };

        this.getLotPanelPerQty = function ()
        {
        	return this._panelPerQty;
        };

        this.setLotQty = function (value)
        {
        	this._qty = value;
        };

        this.getLotQty = function ()
        {
        	return this._qty;
        };

        this.setVisibleLotId = function (value)
        {
        	this._visibleLotId = value;
        };

        this.getVisibleLotId = function ()
        {
        	return this._visibleLotId;
        };


        this.setVisibleDefectDgree = function (value)
        {
        	this._visibleDefectDgree = value;
        };

        this.getVisibleDefectDgree = function ()
        {
        	return this._visibleDefectDgree;
        };

        this.setVisibleTopDefectCode = function (value)
        {
        	this._visibleTopDefectCode = value;
        };

        this.getVisibleTopDefectCode = function ()
        {
        	return this._visibleTopDefectCode;
        };

        // 기본정보 설정
        this.setInfo = function (panelPerQty, qty)
        {
        	this._panelPerQty = panelPerQty;
        	this._qty = qty;
        };

        this.getVisibleFileUpLoad = function ()
        {
        	return this._visibleFileUp;
        };

        this.setVisibleFileUpLoad = function (value)
        {
        	this._visibleFileUp = value;
        };


        this.setLotInfo = function (lotId, panelPerQty, panelQty, qty, queryVersion, dataSet)
        {
        	var queryVersion = "10001";
        	this._lotId = lotId;
        	this._panelPerQty = panelPerQty;
        	this._panelQty = panelQty;
        	this._qty = qty;

        	this.ds_lotInfoData.clearData();  // 1700M 에서 가져옴.
        	this.ds_lotInfoData.copyData(dataSet);

        	if (this.ds_lotInfoData.getRowCount() > 0)
        	{
        		var materialClass = this.nfn_nvl(this.ds_lotInfoData.getColumn(0, "MATERIALCLASS"), "");

        		if (materialClass == "FG")
        		{
        			this.grd_defectList.setCellProperty("Body", "QTY","edittype","mask");
        		}
        		else
        		{
        			if (_panelPerQty == 0)
        			{
        				this.grd_defectList.setCellProperty("Body", "PNLQTY","edittype","none");
        				this.grd_defectList.setCellProperty("Body", "QTY","edittype","mask");
        			}
        			else
        			{
        				this.grd_defectList.setCellProperty("Body", "PNLQTY","edittype","mask");
        				this.grd_defectList.setCellProperty("Body", "QTY","edittype","none");
        			}
        		}
        	}

        	this._queryVersion = queryVersion;
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.edt_defectCode_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13 && !this.nfn_isNull(obj.value))
        	{
        		this.edt_QCSegment.setFocus();
        	}
        };

        this.edt_QCSegment_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13)
        	{
        		if (this.nfn_isNull(this.edt_defectCode.value))
        			return;

        		if (this.nfn_isNull(this.edt_QCSegment.value))
        			return;

        		this.btn_defectSearch_onclick();
        	}
        };


        this.btn_defectSearch_onclick = function(obj,e)
        {
        	if (this.nfn_isNull(this.edt_defectCode.value))
        	{
        		//불량코드를 먼저 입력하세요.
        		this.gfn_Message("DefectCodeIsRequired", null, "warning", "ok");
        		return;
        	}

        	if (this.nfn_isNull(this.edt_QCSegment.value))
        	{
        		return;
        	}


        	var vPNLQty  = nexacro.toNumber(this.nfn_nvl(this.spn_PNLQty.value, "0"));
        	var vPCSQty  = nexacro.toNumber(this.nfn_nvl(this.spn_PCSQty.value, "0"));
        	var vDEFECTRATE = (vPCSQty / this._qty) * 100;

        	this.ds_param.clearData();
        	this.ds_param.addRow();


        	this.ds_param.setColumn(0, "PNLQTY", vPNLQty);
        	this.ds_param.setColumn(0, "QTY", vPCSQty);
        	this.ds_param.setColumn(0, "DEFECTRATE", vDEFECTRATE);
        	this.ds_param.setColumn(0, "LOTID", this.getLotID());
        	this.ds_param.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.ds_param.setColumn(0, "DEFECTCODEID", this.nfn_nvl(this.edt_defectCode.value), "");
        	this.ds_param.setColumn(0, "QCSEGMENTID", this.nfn_nvl(this.edt_QCSegment.value), "");
        	this.ds_param.setColumn(0, "VERSION", "10001");


        	var sSvcID = "getDefectCodeByProcess";
        	var sController = "/pcm01700/getDefectCodeByProcess.do";
        	var sInDatasets = "INPUT=ds_param";
        	var sOutDatasets = "ds_dt=output";
        	var sArgs = "";

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);


        };


        this.spn_PNLQty_onkeydown = function(obj,e)
        {
        	if(e.keycode != 13 ) return;

        	if (this.nfn_isNull(obj.value))
        		return;

        	if (this._panelPerQty == 0 || this.nfn_isNull(this._panelPerQty))
        		return;

            var pnlQty = nexacro.toNumber(obj.value);

            var qty = this._panelPerQty * pnlQty;

        	this.spn_PCSQty.set_value(qty);
        };

        this.spn_PCSQty_onkeydown = function(obj,e)
        {
        	if(e.keycode != 13 ) return;

        	if (this.nfn_isNull(obj.value))
        		return;

        	if (this._panelPerQty == 0 || this.nfn_isNull(this._panelPerQty))
        		return;

            var qty = nexacro.toNumber(obj.value);

        	var pnlQty = nexacro.ceil(qty / this._panelPerQty);

        	this.spn_PNLQty.set_value(pnlQty);

            this.btn_defectSearch_onclick();
        };

        /*
         *	최하단 불량 검사 그리드에 원인품목 리스트를 다시 읽어옴.
         */
        this.GetReasonConsumableList = function ()
        {
        	this.ds_temp.clear();
        	this.pfn_DatasetAddColumn(this.ds_temp, "LOTID,LANGUAGETYPE");

        	var vlotId = this.nfn_nvl(this.parent.parent.parent.parent.parent.div_work.form.div_search.form.edt_lotId.value, "");

        	this.ds_temp.setColumn(0, "LOTID", vlotId );
        	this.ds_temp.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());

        	this.pfn_CostomQuery(this.ds_temp, this.ds_ReasonConsumableList, "selectReasonConsumableList");

        };

        /*
         *	최하단 불량 검사 그리드에 원인자재LOT 리스트를 다시 읽어옴.
         */
        this.GetDefectReasonConsumableLot = function ()
        {

        	this.ds_temp.clear();
        	this.pfn_DatasetAddColumn(this.ds_temp, "LOTID,LANGUAGETYPE");

        	var vlotId = this.nfn_nvl(this.parent.parent.parent.parent.parent.div_work.form.div_search.form.edt_lotId.value, "");

        	this.ds_temp.setColumn(0, "LOTID", vlotId );
        	this.ds_temp.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());

        	this.pfn_CostomQuery(this.ds_temp, this.ds_ReasonConsumableLot, "selectDefectReasonConsumableLot");
        };

        /*
         *	최하단 불량 검사 그리드에 원인공정 리스트를 다시 읽어옴.
         */
        this.GetDefectReasonProcesssegment = function ()
        {

        	this.ds_temp.clear();
        	this.pfn_DatasetAddColumn(this.ds_temp, "LOTID,LANGUAGETYPE");

        	var vlotId = this.nfn_nvl(this.parent.parent.parent.parent.parent.div_work.form.div_search.form.edt_lotId.value, "");

        	this.ds_temp.setColumn(0, "LOTID", vlotId );
        	this.ds_temp.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());

        	this.pfn_CostomQuery(this.ds_temp, this.ds_ReasonProcessSegment, "selectDefectReasonProcesssegment");
        };


        this.gf_distincDsFilter = function(objDs, sColID)
        {
        	var arrArgs	= sColID.split(",");
        	var sFilterExpr		= "";
        	var sFindRowExpr	= "";

        	for (var i=0; i<arrArgs.length; i++)
        	{
        		if (objDs.getColumnInfo(arrArgs[i]) == null) continue;

        		sFindRowExpr	+= (sFindRowExpr) ? " && " : "";
        		sFindRowExpr	+= "" + arrArgs[i] + "=='\" + " + arrArgs[i] + " + \"'";
        	}

        	if (sFindRowExpr) {
        		sFilterExpr	= "rowidx==dataset.findRowExpr(\"" + sFindRowExpr + "\")";
        	}
        	objDs.filter(sFilterExpr);
        };

        // Defect Code 중복 체크
        this.checkDefectCodeCount = function()
        {
        // WHERE DEFECTCODE	IS NOT NULL
        // GROUP BY LOTID, DEFECTCODE, QCSEGMENTID


        	var vDefectCd = "";
        	this.ds_dtTemp.clearData();
        	this.ds_dtTemp2.clearData();
        	var nRow = -1;
        	var nRow2 = -1;
        	for(var i = 0; i < this.ds_dt.getRowCount(); i++)
        	{
        		vDefectCd = this.nfn_nvl(this.ds_dt.getColumn(i, "DEFECTCODE"), "")

        		if(vDefectCd != "")
        		{
        			nRow = this.ds_dtTemp.addRow();
        			nRow2 = this.ds_dtTemp2.addRow();
        			this.ds_dtTemp.copyRow(nRow, this.ds_dt, i)
        			this.ds_dtTemp2.copyRow(nRow2, this.ds_dt, i)
        		}
        	}


        	this.gf_distincDsFilter(this.ds_dtTemp, "DEFECTCODE,QCSEGMENTID");

        	console.log(this.ds_dtTemp.saveXML());

        	if (this.ds_dtTemp.getRowCount() != this.ds_dtTemp2.getRowCount())  // 필터링 한 갯수와 전체갯구가 같지 않으면
        	{
        		var nRow = this.ds_dt.rowcount == 1 ? 0 : this.ds_dt_rowposition;
        		// 같은 불량코드가 중복되었습니다.
        		this.gfn_Message("SameDefectCodeError", null, "warning", "ok");
        		this.ds_dt.deleteRow(nRow);
        		this.ds_dt.set_enableevent(true);
        		return true;
        	}

        	return false;
        };


        //
        this.ds_dt_oncolumnchanged = function(obj,e)
        {
        	// 수량관련
        // 	this.nfn_nvl(obj.getColumn(e.row, "PNLQTY"), "0");
        // 	this.nfn_nvl(obj.getColumn(e.row, "QTY"), "0");
        // 	this.nfn_nvl(obj.getColumn(e.row, "QCSEGMENTNAME"), "0");

        	if (this._panelPerQty <= 0 && (e.columnid == "PNLQTY" || e.columnid == "QTY" || e.columnid == "QCSEGMENTNAME"))
        	{
        		return;
        	}
        	else
        	{
        		obj.set_enableevent(false);

        		if (e.columnid == "PNLQTY" || e.columnid == "QTY")
        		{
        			if (e.columnid == "PNLQTY")
        			{
        				var pnlQty = nexacro.toNumber(this.nfn_nvl(e.newvalue, "0"));
        				var qty = this._panelPerQty * pnlQty;

        				obj.setColumn(e.row, "QTY", qty);
        				obj.setColumn(e.row, "DEFECTRATE", (qty / this._qty) * 100);
        			}

        			if (e.columnid == "QTY")
        			{
        				var qty = nexacro.toNumber(this.nfn_nvl(e.newvalue, "0"));

        				var pnlQty = 0;
        				if (this._panelPerQty > 0)
        					pnlQty = nexacro.ceil(qty / this._panelPerQty);

        				obj.setColumn(e.row, "PNLQTY", pnlQty);
        				obj.setColumn(e.row, "DEFECTRATE", (qty / this._qty) * 100);


        				this.parent.parent.parent.parent.parent.div_work.form.div_pfsInfo.form.setQty(obj.getSum("QTY"));
        			}

        			this.parent.parent.parent.parent.parent.div_work.form.div_pfsInfo.form.ds_workInfo.setColumn(0, "DEFECTQTY"   , obj.getSum("QTY"));
        			this.parent.parent.parent.parent.parent.div_work.form.div_pfsInfo.form.ds_workInfo.setColumn(0, "DEFECTPNLQTY", obj.getSum("PNLQTY"));


        			if(this.pnlQty_enter && e.columnid == "PNLQTY")
        			{
        				obj.addRow();
        			}

        		}
        		else
        		{
        			if (e.columnid == "QCSEGMENTNAME")
        			{
        				if(this.checkDefectCodeCount()) return;
        			}
        		}



        		var defectQty = nexacro.toNumber(this.nfn_nvl(obj.getSum("QTY"), "0"));


        		this.parent.parent.parent.parent.parent.div_work.form.div_pfsInfo.form.setQty(defectQty);

        		obj.set_enableevent(true);
        	}


        };

        this.grd_defectList_onexpandup = function(obj,e)
        {
        	if(e.row <0) return;
        	if (this.nfn_isEqualCol(obj, e.col, "DEFECTCODE"))
        	{
        		this.mfn_OpenDefectPopup();
        	}
        	else if (this.nfn_isEqualCol(obj, e.col, "CONSUMABLEDEFNAME")) // 원인품목
        	{
        		this.pdv_ReasonConsumableList.show();
        		this.pdv_ReasonConsumableList.trackPopup(e.screenx, e.screeny-70,  this.pdv_ReasonConsumableList.width, this.pdv_ReasonConsumableList.height, "fn_Callback_pdv_ReasonConsumableList");
        	}
        	else if (this.nfn_isEqualCol(obj, e.col, "REASONPROCESSSEGMENTNAME")) //원인공정
        	{
        		this.ds_ReasonProcessSegment.filter("");
        		if(this.nfn_isNull(this.ds_dt.getColumn(e.row,"REASONCONSUMABLELOTID"))==false && this.ds_dt.getColumn(e.row,"REASONCONSUMABLELOTID") != ""){
        			this.ds_ReasonProcessSegment.filter("REASONCONSUMABLELOTID == '" + this.ds_dt.getColumn(e.row,"REASONCONSUMABLELOTID") + "'")
        			trace(this.ds_ReasonProcessSegment.saveXML());
        		}
        		this.pdv_ReasonProcessSegment.show();
        		this.pdv_ReasonProcessSegment.trackPopup(e.screenx, e.screeny-70,  this.pdv_ReasonProcessSegment.width, this.pdv_ReasonProcessSegment.height, "fn_Callback_pdv_ReasonProcessSegment");
        	}
        	else if (this.nfn_isEqualCol(obj, e.col, "DEFECTCODE_BTN"))
        	{
        		this.ds_dt.setColumn(e.row,"DEFECTCODE", "");
        		this.ds_dt.setColumn(e.row,"DEFECTCODENAME", "");
        		this.ds_dt.setColumn(e.row,"QCSEGMENTID", "");
        		this.ds_dt.setColumn(e.row,"QCSEGMENTNAME", "");
        		this.ds_dt.setColumn(e.row,"DECISIONDEGREE", "");
        	}
        	else if (this.nfn_isEqualCol(obj, e.col, "PNLQTY_BTN"))
        	{
        		this.ds_dt.setColumn(e.row, "PNLQTY", "");
        	}
        	else if (this.nfn_isEqualCol(obj, e.col, "QTY_BTN"))
        	{
        		this.ds_dt.setColumn(e.row, "QTY", "");
        	}
        };

        this.validateData = function()
        {
        	for(var i = 0; i < this.ds_dt.getRowCount(); i++)
        	{
        		var defectCode = this.nfn_nvl(this.ds_dt.getColumn(i, "DEFECTCODE"), "");
        		var defectName = this.nfn_nvl(this.ds_dt.getColumn(i, "DEFECTCODENAME"), "");
        		var pnlQty = this.nfn_nvl(this.ds_dt.getColumn(i, "PNLQTY"), "0");
        		var qty = this.nfn_nvl(this.ds_dt.getColumn(i, "QTY"), "0");

        		if (this.nfn_isNull(defectCode) || this.nfn_isNull(defectName))
        		{
        			// 불량코드를 선택하여 주십시오.
        			this.gfn_Message("NoDefectCode", null, "warning", "ok");
        			return true;
        		}

        		if (pnlQty <= 0 || qty <= 0)
        		{
        			// 불량수량을 입력해야 합니다.
        			this.gfn_Message("DefectQtyRequired", trId + errMsg, "warning", "ok");
        			return true;
        		}
        	}

        	return false;
        };



        this.mfn_OpenDefectPopup = function ()
        {
        	var nRow = this.ds_dt.rowcount == 1 ? 0 : this.ds_dt_rowposition;

        	var popupId     = "SEARCH_DEFECT";
        	var lotID       = this.nfn_nvl(this.parent.parent.parent.parent.parent.div_work.form.div_search.form.edt_lotId.value, "");
        	var defectID    = this.ds_dt.getColumn(nRow,"DEFECTCODE");
        	var defectName  = this.ds_dt.getColumn(nRow,"DEFECTCODENAME");
        	var qcSegmentID = this.ds_dt.getColumn(nRow,"QCSEGMENTID");
            var qcSegmentName  = this.ds_dt.getColumn(nRow,"QCSEGMENTNAME");


        	var oArg = {};
        // 	oArg.arg_type = "BA";
        // 	oArg.arg_popupCd = "P00241";
        // 	oArg.arg_popupNm = "";
        // 	oArg.arg_rtnCols = "DEFECTCODE|DEFECTCODENAME|QCSEGMENTID|QCSEGMENTNAME|DECISIONDEGREE|CONFIRMSITE";
        // 	oArg.arg_paramCols = "DEFECTCODENAME|QCSEGMENTNAME|LOTID|LANGUAGETYPE|VERSION";
        // 	oArg.arg_paramValues = defectName + "|" + qcSegmentName + "|" + lotID +  "|" +  this.gf_getLanguageType()+"|10003";
        // 	oArg.arg_searchStr   = "DEFECTCODENAME=" + defectID + "|QCSEGMENTNAME="+qcSegmentID;

        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = "P00166";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "DEFECTCODE|DEFECTCODENAME|QCSEGMENTID|QCSEGMENTNAME|DECISIONDEGREE|SEGMENT_DEFECTCODE|SEGMENT_DEFECTNAME";
        	oArg.arg_paramCols = "LOTID|SEGMENTID|LANGUAGETYPE";
        	oArg.arg_paramValues = lotID + "|" + qcSegmentID+"|"+this.gf_getLanguageType();
        	oArg.arg_searchStr = defectID == "" ? "" : "DEFECTCODENAME=" + defectID + "|QCSEGMENTIDNAME="+qcSegmentID;


        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=800,height=800");
        };

        // 행추가
        this.btn_addRow_onclick = function(obj,e)
        {
        	var vlotId = this.nfn_nvl(this.parent.parent.parent.parent.parent.div_work.form.div_search.form.edt_lotId.value, "");

        	if(vlotId == "")
        	{
        		this.gfn_Message("NotSeletedLot", "", "warning", "ok");
        		return;
        	}

        	this.ds_dt.addRow();
        	this.ds_dt.set_enableevent(true);
        };

        // 행삭제
        this.btn_delRow_onclick = function(obj,e)
        {
        	var nRow = this.ds_dt.rowcount == 1 ? 0 : this.ds_dt_rowposition;
        	this.ds_dt.deleteRow(nRow);
        	this.ds_dt.set_enableevent(true);

        	var defectQty = nexacro.toNumber(this.nfn_nvl(this.ds_dt.getSum("QTY"), "0"));

        	this.parent.parent.parent.parent.parent.div_work.form.div_pfsInfo.form.setQty(defectQty);
        };

        /*
         *	원인 품목 셀 팝업 그리드 활성화
         */
        this.pdv_ReasonConsumableList_grd_ReasonConsumableList_oncelldblclick = function(obj,e)
        {
        	//값 받아서 처리 로직 넣으세요
        	var idver = this.ds_ReasonConsumableList.getColumn(this.ds_ReasonConsumableList.rowposition,"SPLITCONSUMABLEDEFIDVERSION");
        	var prodName = this.ds_ReasonConsumableList.getColumn(this.ds_ReasonConsumableList.rowposition,"CONSUMABLEDEFNAME");
        	var prodID = this.ds_ReasonConsumableList.getColumn(this.ds_ReasonConsumableList.rowposition,"CONSUMABLEDEFID");
        	var prodVer = this.ds_ReasonConsumableList.getColumn(this.ds_ReasonConsumableList.rowposition,"CONSUMABLEDEFVERSION");

        	this.ds_dt.set_enableevent(false);

        	var nRow = this.ds_dt.rowcount == 1 ? 0 : this.ds_dt_rowposition;

        	this.ds_dt.setColumn(nRow,"SPLITCONSUMABLEDEFIDVERSION",idver); // 자재ID | 자재버전
        	this.ds_dt.setColumn(nRow,"CONSUMABLEDEFNAME",prodName); // 자재명
        	this.ds_dt.setColumn(nRow,"REASONCONSUMABLEDEFID",prodID); // 자재ID
        	this.ds_dt.setColumn(nRow,"REASONCONSUMABLEDEFVERSION",prodVer); // 자재버전

        	this.ds_dt.set_enableevent(true);

        	this.pdv_ReasonConsumableList.closePopup();
        };

        /*
         *	원인 공정 셀 팝업 그리드 활성화
         */
        this.pdv_ReasonProcessSegment_grd_ReasonProcessSegment_oncelldblclick = function(obj,e)
        {
        	var segName = this.ds_ReasonProcessSegment.getColumn(this.ds_ReasonProcessSegment.rowposition,"PROCESSSEGMENTNAME");
        	var segID = this.ds_ReasonProcessSegment.getColumn(this.ds_ReasonProcessSegment.rowposition,"PROCESSSEGMENTID");
        	var aeraID = this.ds_ReasonProcessSegment.getColumn(this.ds_ReasonProcessSegment.rowposition,"AREAID");
        	var aeraName = this.ds_ReasonProcessSegment.getColumn(this.ds_ReasonProcessSegment.rowposition,"AREANAME");

        	this.ds_dt.set_enableevent(false);

        	var nRow = this.ds_dt.rowcount == 1 ? 0 : this.ds_dt_rowposition;

        	this.ds_dt.setColumn(nRow,"REASONPROCESSSEGMENTID",segID); //공정ID
        	this.ds_dt.setColumn(nRow,"REASONPROCESSSEGMENTNAME",segName); // 공정명
        	this.ds_dt.setColumn(nRow,"REASONAREAID",aeraID);  //작업장ID
        	this.ds_dt.setColumn(nRow,"REASONAREANAME",aeraName); //작업장명

        	this.ds_dt.set_enableevent(true);

        	this.pdv_ReasonProcessSegment.closePopup();
        };


        this.ds_dt_onrowposchanged = function(obj,e)
        {
        	this.ds_dt_rowposition = e.newrow;
        };


        this.grd_defectList_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.pnlQty_enter = true;
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.grd_defectList.addEventHandler("onexpandup",this.grd_defectList_onexpandup,this);
            this.grd_defectList.addEventHandler("onkeydown",this.grd_defectList_onkeydown,this);
            this.div_pnlDefect.form.edt_defectCode.addEventHandler("onkeydown",this.edt_defectCode_onkeydown,this);
            this.div_pnlDefect.form.edt_QCSegment.addEventHandler("onkeydown",this.edt_QCSegment_onkeydown,this);
            this.div_pnlDefect.form.spn_PNLQty.addEventHandler("onkeydown",this.spn_PNLQty_onkeydown,this);
            this.div_pnlDefect.form.spn_PCSQty.addEventHandler("onkeydown",this.spn_PCSQty_onkeydown,this);
            this.div_pnlDefect.form.btn_defectSearch.addEventHandler("onclick",this.btn_defectSearch_onclick,this);
            this.btn_delRow.addEventHandler("onclick",this.btn_delRow_onclick,this);
            this.btn_addRow.addEventHandler("onclick",this.btn_addRow_onclick,this);
            this.pdv_ReasonConsumableList.form.grd_ReasonConsumableList.addEventHandler("oncelldblclick",this.pdv_ReasonConsumableList_grd_ReasonConsumableList_oncelldblclick,this);
            this.pdv_ReasonProcessSegment.form.grd_ReasonProcessSegment.addEventHandler("oncelldblclick",this.pdv_ReasonProcessSegment_grd_ReasonProcessSegment_oncelldblclick,this);
            this.ds_dt.addEventHandler("oncolumnchanged",this.ds_dt_oncolumnchanged,this);
            this.ds_dt.addEventHandler("onrowposchanged",this.ds_dt_onrowposchanged,this);
            this.ds_fileCombo.addEventHandler("onrowposchanged",this.ds_fileCombo_onrowposchanged,this);
        };
        this.loadIncludeScript("PCM01700T07.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
