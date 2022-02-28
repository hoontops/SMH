(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM01500M");
            this.set_titletext("입고검사");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"INS_USERID\" type=\"STRING\" size=\"256\"/><Column id=\"INS_USERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REINS_REASON\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDIVISION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_LotList", this);
            obj._setContents("<ColumnInfo><Column id=\"DEGREE1\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKOUTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NCRINSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"CURAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"CURAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREVSENDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MENUTP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("ds_grdMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"GRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC\" type=\"STRING\" size=\"256\"/><Column id=\"DICTIONARYID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"GRD_NM\">grdLotList</Col><Col id=\"MENU_NM\">Lot 이력조회</Col><Col id=\"FUNC\">mfn_gotoLot</Col><Col id=\"DICTIONARYID\">MENU_PG-SG-0340</Col></Row><Row><Col id=\"MENU_NM\">재공조회</Col><Col id=\"FUNC\">mfn_gotoWIP</Col><Col id=\"GRD_NM\">grdLotList</Col><Col id=\"DICTIONARYID\">MENU_PG-SG-0460</Col></Row><Row><Col id=\"GRD_NM\">grdLotList</Col><Col id=\"MENU_NM\">모델별 제공조회</Col><Col id=\"FUNC\">mfn_gotoModelWIP</Col><Col id=\"DICTIONARYID\">MENU_PG-SG-0490</Col></Row><Row><Col id=\"GRD_NM\">grdLotList</Col><Col id=\"MENU_NM\">자주검사(입고,출하) 결과조회</Col><Col id=\"FUNC\">mfn_gotoWIR</Col><Col id=\"DICTIONARYID\">MENU_PG-QC-0560</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_LotQty", this);
            obj._setContents("<ColumnInfo><Column id=\"DIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"WORKQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"WORKQTY\">0</Col><Col id=\"INSPECTIONQTY\">0</Col><Col id=\"DEFECTQTY\">0</Col><Col id=\"PCSPNL\">216</Col><Col id=\"DIVISION\">PNL</Col></Row><Row><Col id=\"INSPECTIONQTY\">0</Col><Col id=\"WORKQTY\">0</Col><Col id=\"DEFECTQTY\">0</Col><Col id=\"PCSPNL\">216</Col><Col id=\"DIVISION\">PCS</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_InspectionList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"SEGMENT_DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SEGMENT_DEFECTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"QTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"DEFECTRATE\" type=\"FLOAT\" size=\"256\"/><Column id=\"DECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"IMAGE\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILESIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILEEXT\" type=\"STRING\" size=\"256\"/><Column id=\"FILEPATH\" type=\"STRING\" size=\"256\"/><Column id=\"IMAGERESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"ISUPLOAD\" type=\"STRING\" size=\"256\"/><Column id=\"SPLITCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"IMGBUTTONNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_NcrList", this);
            obj._setContents("<ColumnInfo><Column id=\"DECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"DECISIONDEGREENAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCGRADE\" type=\"STRING\" size=\"256\"/><Column id=\"NGCONDITION\" type=\"STRING\" size=\"256\"/><Column id=\"NGCONDITIONNAME\" type=\"STRING\" size=\"256\"/><Column id=\"QTYORRATE\" type=\"STRING\" size=\"256\"/><Column id=\"QTYORRATENAME\" type=\"STRING\" size=\"256\"/><Column id=\"NCRSPEC\" type=\"STRING\" size=\"256\"/><Column id=\"FROMRATE\" type=\"STRING\" size=\"256\"/><Column id=\"TORATE\" type=\"STRING\" size=\"256\"/><Column id=\"NGQUANTITY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ReasonConsumableList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"SPLITCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ReasonConsumableLot", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"SPLITCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ReasonProcessSegment", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SPLITCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_NcrListTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"DECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"DECISIONDEGREENAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCGRADE\" type=\"STRING\" size=\"256\"/><Column id=\"NGCONDITION\" type=\"STRING\" size=\"256\"/><Column id=\"NGCONDITIONNAME\" type=\"STRING\" size=\"256\"/><Column id=\"QTYORRATE\" type=\"STRING\" size=\"256\"/><Column id=\"QTYORRATENAME\" type=\"STRING\" size=\"256\"/><Column id=\"NCRSPEC\" type=\"STRING\" size=\"256\"/><Column id=\"FROMRATE\" type=\"STRING\" size=\"256\"/><Column id=\"TORATE\" type=\"STRING\" size=\"256\"/><Column id=\"NGQUANTITY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_LotListTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"DEGREE1\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKOUTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NCRINSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"CURAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"CURAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREVSENDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MENUTP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_result", this);
            obj._setContents("");
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


            obj = new Dataset("ds_searchCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"INS_USERID\" type=\"STRING\" size=\"256\"/><Column id=\"INS_USERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REINS_REASON\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj.set_taborder("8");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("AREA");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_AREAID","108","10",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","200","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","200","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            obj.set_hotkey("F2");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip03",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"180","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","206","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staLOTID","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_AREAID",null,"10","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPROCSEGMENT","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("공정");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PROCSEGMENT","108","135",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_PROCSEGMENT",null,"135","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_LOTID","108","110",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_LOTID",null,"110","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip00",null,"0","15","290","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip01","0","0","15","290",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPRODUCTDEFID","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID","108","35",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTDEFVERSION","108","60","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_cbo_ProdVersion");
            obj.set_codecolumn("PRODUCTDEFVERSIONCODE");
            obj.set_datacolumn("PRODUCTDEFVERSIONNAME");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPRODUCTDEFVERSION","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_text("Rev.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("INNERREVISION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPRODUCTDEFNAME","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMNAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFNAME","108","85","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_enable("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_PRODUCTDEFID",null,"35","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPRODUCTDIVISION","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("24");
            obj.set_text("제품구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDIVISION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTDIVISION","108","160","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_codecolumn("C,ProductDivision2,ALL,Y,Y");
            obj.set_innerdataset("");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_Main","0","37.71%",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab_Main);
            obj.set_text("검사 결과 등록");
            this.div_work.form.tab_Main.addChild(obj.name, obj);

            obj = new Grid("grdNcrList","49.06%","34",null,"146","0",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_NcrList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"85\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"판정등급\" tooltiptext=\"DECISIONDEGREE\"/><Cell col=\"2\" text=\"조치등급\" tooltiptext=\"QCGRADE\"/><Cell col=\"3\" text=\"NG조건\" tooltiptext=\"NGCONDITION\"/><Cell col=\"4\" text=\"수량/불량율 구분\" tooltiptext=\"QTYORRATE\"/><Cell col=\"5\" text=\"범위\" cssclass=\"cell_end\" tooltiptext=\"RANGE\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:DECISIONDEGREENAME\"/><Cell col=\"2\" text=\"bind:QCGRADE\"/><Cell col=\"3\" text=\"bind:NGCONDITIONNAME\"/><Cell col=\"4\" text=\"bind:QTYORRATENAME\"/><Cell col=\"5\" text=\"bind:NCRSPEC\"/></Band></Format></Formats>");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_RegInspection","0","34",null,"63","grdNcrList:10",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("상세영역");
            obj.set_cssclass("div_WF_detail_line");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staArea","0","0","15.28%","31",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form.div_RegInspection.form);
            obj.set_taborder("0");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.tab_Main.Tabpage1.form.div_RegInspection.addChild(obj.name, obj);

            obj = new Static("staInspectionUser","0","31","15.07%","31",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form.div_RegInspection.form);
            obj.set_taborder("1");
            obj.set_text("검사자");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.tab_Main.Tabpage1.form.div_RegInspection.addChild(obj.name, obj);

            obj = new Static("staLOTID","47.82%","0","17.47%","31",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form.div_RegInspection.form);
            obj.set_taborder("2");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.tab_Main.Tabpage1.form.div_RegInspection.addChild(obj.name, obj);

            obj = new Static("strReinspectReason","47.82%","31","17.47%","31",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form.div_RegInspection.form);
            obj.set_taborder("3");
            obj.set_text("재검 사유");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.tab_Main.Tabpage1.form.div_RegInspection.addChild(obj.name, obj);

            obj = new Edit("edt_AREA","staArea:5","5",null,"20","staLOTID:5",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form.div_RegInspection.form);
            obj.set_taborder("4");
            obj.set_enable("false");
            this.div_work.form.tab_Main.Tabpage1.form.div_RegInspection.addChild(obj.name, obj);

            obj = new Edit("edt_LOTID","staLOTID:5","5",null,"20","5",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form.div_RegInspection.form);
            obj.set_taborder("5");
            obj.set_enable("false");
            this.div_work.form.tab_Main.Tabpage1.form.div_RegInspection.addChild(obj.name, obj);

            obj = new Button("btn_InspectionUser",null,"36","22","20","strReinspectReason:5",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form.div_RegInspection.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.tab_Main.Tabpage1.form.div_RegInspection.addChild(obj.name, obj);

            obj = new Edit("edt_InspectionUser","staInspectionUser:5","36",null,"20","btn_InspectionUser:0",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form.div_RegInspection.form);
            obj.set_taborder("6");
            this.div_work.form.tab_Main.Tabpage1.form.div_RegInspection.addChild(obj.name, obj);

            obj = new Edit("edt_ReinspectReason","strReinspectReason:5","36",null,"20","5",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form.div_RegInspection.form);
            obj.set_taborder("8");
            obj.set_enable("false");
            this.div_work.form.tab_Main.Tabpage1.form.div_RegInspection.addChild(obj.name, obj);

            obj = new Grid("grdLotQty","0","107",null,"73","grdNcrList:10",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_LotQty");
            obj.set_cssclass("grd_detail");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_scrollbartype("none");
            obj.set_scrolltype("none");
            obj.set_border("1px solid #e8e8e8");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\" \"/><Cell col=\"1\" text=\"작업수량\" tooltiptext=\"WORKQTY\"/><Cell col=\"2\" text=\"검사수량\" tooltiptext=\"INSPECTIONQTY\"/><Cell col=\"3\" text=\"불량수량\" cssclass=\"cell_end\" tooltiptext=\"DEFECTQTY\"/></Band><Band id=\"body\"><Cell text=\"bind:DIVISION\" cssclass=\"cell_bgWhite\"/><Cell col=\"1\" text=\"bind:WORKQTY\" cssclass=\"cell_bgWhite\" textAlign=\"right\" maskeditformat=\"#,##0\" displaytype=\"mask\"/><Cell col=\"2\" text=\"bind:INSPECTIONQTY\" cssclass=\"cell_bgWhite\" textAlign=\"right\" maskeditformat=\"#,##0\" edittype=\"mask\" displaytype=\"mask\" maskeditautoselect=\"true\"/><Cell col=\"3\" text=\"bind:DEFECTQTY\" cssclass=\"cell_end\" textAlign=\"right\" maskeditformat=\"#,##0\" displaytype=\"mask\"/></Band></Format></Formats>");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("title1","49.06%","0","100","34","388",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("NCR 발행기준");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("title1_01","0","0","66","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grdInspectionList","0","214",null,null,"260","0",null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_InspectionList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"불량 코드\" cssclass=\"cell_point\"/><Cell col=\"1\" text=\"불량코드 명\"/><Cell col=\"2\" text=\"판정등급\" tooltiptext=\"DECISIONDEGREE\"/><Cell col=\"3\" text=\"품질공정\" tooltiptext=\"QCSEGMENT\"/><Cell col=\"4\" text=\"수량(PNL)\" cssclass=\"cell_point\"/><Cell col=\"5\" text=\"수량\" cssclass=\"cell_point\"/><Cell col=\"6\" text=\"불량율\"/><Cell col=\"7\" text=\"사진등록\" tooltiptext=\"ADDIMAGE\"/><Cell col=\"8\" text=\"원인품목\" tooltiptext=\"REASONCONSUMABLEDEFID\"/><Cell col=\"9\" text=\"원인 LOTID\" tooltiptext=\"REASONCONSUMABLELOTID\"/><Cell col=\"10\" text=\"원인 공정\" tooltiptext=\"REASONPROCESSSEGMENTID\"/><Cell col=\"11\" text=\"원인 작업장\" tooltiptext=\"REASONAREAID\"/></Band><Band id=\"body\"><Cell text=\"bind:SEGMENT_DEFECTCODE\" textAlign=\"left\" expandshow=\"show\"/><Cell col=\"1\" text=\"bind:SEGMENT_DEFECTNAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:DECISIONDEGREE\" displaytype=\"combotext\" combocodecol=\"C,DecisionDegree,SEL,Y,N\"/><Cell col=\"3\" text=\"bind:QCSEGMENTNAME\"/><Cell col=\"4\" text=\"bind:PNLQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"#,##0.00\" maskeditautoselect=\"true\"/><Cell col=\"5\" text=\"bind:QTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"#,##0\" maskeditautoselect=\"true\"/><Cell col=\"6\" text=\"bind:DEFECTRATE\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"#,##0.00\"/><Cell col=\"7\" text=\"expr:dataset.parent.nfn_getDictionaryname(&apos;ADDIMAGE&apos;,true)\" displaytype=\"buttoncontrol\" edittype=\"button\"/><Cell col=\"8\" text=\"bind:CONSUMABLEDEFNAME\" expandshow=\"show\"/><Cell col=\"9\" text=\"bind:REASONCONSUMABLELOTID\" combodataset=\"ds_ReasonConsumableLot\" combocodecol=\"CONSUMABLELOTID\" combodatacol=\"CONSUMABLELOTID\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"10\" text=\"bind:REASONPROCESSSEGMENTNAME\" expandshow=\"show\"/><Cell col=\"11\" text=\"bind:REASONAREANAME\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" maskeditformat=\"#,##0.00\"/><Cell col=\"5\" maskeditformat=\"#,##0\" displaytype=\"mask\" expr=\"expr:dataset.getSum(&quot;QTY&quot;) \"/><Cell col=\"6\" expandchar=\"%\" expandsize=\"24\" maskeditformat=\"#,##0.00\" displaytype=\"mask\" expr=\"dataset.getSum(&quot;DEFECTRATE&quot;)\" maskedittype=\"number\" maskeditpostfixtext=\" %\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/></Band></Format></Formats>");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnAddRow_ds_InspectionList",null,"186","26","24","286",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_InspectionList",null,"186","26","24","260",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new ImageViewer("imageViewer",null,"214","250",null,"0","0",null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_cssclass("img_photo");
            obj.set_stretch("fixaspectratio");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("title1_00","0","180","38","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("불량");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_Image",null,"186","137","24","113",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_fileCombo");
            obj.set_codecolumn("ATCH_FILE_GUID");
            obj.set_datacolumn("OC_FILE_NM");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab_Main);
            obj.set_text("입고검사 이력");
            obj.getSetter("LotID").set("");
            obj.getSetter("DetailLoad").set("");
            obj.getSetter("InspectionClassID").set("SelfInspectionTake");
            this.div_work.form.tab_Main.addChild(obj.name, obj);

            obj = new Grid("grdLotList","0","34",null,null,"0","tab_Main:10",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_LotList");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"80\"/><Column size=\"240\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"품목코드\"/><Cell col=\"2\" text=\"품목명\"/><Cell col=\"3\" text=\"Lot No.\"/><Cell col=\"4\" text=\"공정수순\"/><Cell col=\"5\" text=\"공정명\"/><Cell col=\"6\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell col=\"7\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell col=\"8\" text=\"차수\" tooltiptext=\"DEGREE\"/><Cell col=\"9\" tooltiptext=\"PREVAREA\" text=\"이전작업장\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:LOTID\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:USERSEQUENCE\"/><Cell col=\"5\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:PANELQTY\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:QTY\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:DEGREE1\"/><Cell col=\"9\" text=\"bind:AREANAME\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","89","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("입고 검사");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_LotList","89","0","140","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
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

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","80","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_text("입고 검사");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
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

            obj = new PopupDiv("pdv_ReasonConsumableList","553","779","450","221",null,null,null,null,null,null,this);
            obj.set_text("pdv_00");
            obj.set_visible("false");
            obj.set_cssclass("pdiv_POP");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_ReasonConsumableList","0","0",null,null,"0","0",null,null,null,null,this.pdv_ReasonConsumableList.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_ReasonConsumableList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"106\"/><Column size=\"72\"/><Column size=\"163\"/><Column size=\"101\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"자재ID\"/><Cell col=\"1\" text=\"자재버전\"/><Cell col=\"2\" text=\"자재명\"/><Cell col=\"3\" text=\"자재유형\"/></Band><Band id=\"body\"><Cell text=\"bind:CONSUMABLEDEFID\"/><Cell col=\"1\" text=\"bind:CONSUMABLEDEFVERSION\"/><Cell col=\"2\" text=\"bind:CONSUMABLEDEFNAME\"/><Cell col=\"3\" text=\"bind:MATERIALTYPE\"/></Band></Format></Formats>");
            this.pdv_ReasonConsumableList.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_ReasonProcessSegment","863","789","450","221",null,null,null,null,null,null,this);
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
            obj = new Layout("default","",1258,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","tab_search.Tabpage1.form.edt_AREAID","value","ds_search","AREANAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tab_search.Tabpage1.form.edt_PRODUCTDEFID","value","ds_search","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab_search.Tabpage1.form.cbo_PRODUCTDEFVERSION","value","ds_search","PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tab_search.Tabpage1.form.edt_PRODUCTDEFNAME","value","ds_search","PRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tab_search.Tabpage1.form.edt_LOTID","value","ds_search","LOTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","tab_search.Tabpage1.form.edt_PROCSEGMENT","value","ds_search","PROCESSSEGMENTNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_work.form.tab_Main.Tabpage1.form.div_RegInspection.form.edt_AREA","value","ds_LotList","CURAREANAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_work.form.tab_Main.Tabpage1.form.div_RegInspection.form.edt_LOTID","value","ds_LotList","LOTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_work.form.tab_Main.Tabpage1.form.div_RegInspection.form.edt_InspectionUser","value","ds_search","INS_USERNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_work.form.tab_Main.Tabpage1.form.div_RegInspection.form.edt_ReinspectReason","value","ds_search","REINS_REASON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","tab_search.Tabpage1.form.cbo_PRODUCTDIVISION","value","ds_search","PRODUCTDIVISION");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM01500M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM01500M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PCM01500M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 입고검사 / 자주검사
         * 파일명 		: PCM01500M.xfdl
         * 작성자 		: 김애리
         * 작성일 		: 2021.3.12
         * AS-IS		: LotIncommingInspection
         * 설  명		: 작업 시작 전 해당 검사가 필요한 품목은 검사 후 시작하게 됨
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.3.12	김애리   	최초작성
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
         this.DefectSegments = "";

         this.IsSaved = true;

         //첫번째 탭 불량 그리드
         this.Defect = {
        		inspectQty :	0   	//검사 수량(pcs 기준)
        	  , pcsPnl :    0   		//기준 (PCS / PNL) 수량
        	  , InspectionDefId : "" 	//검사정의 ID
        	  , SelectedLotId : "" 		//Selected Lot ID
        	  , panelPerQty : 0			//usDefectGrid 의 member
        	  , qty : 0					//usDefectGrid 의 member
         };

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
         this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);

        	//this.tab_search.Tabpage1.form.edt_AREAID.removeEventHandler("onkeydown", this.gfn_setEnterKeyEvent , this);
        	this.ds_search.set_rowposition(0);

        	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0, "PLANTID",this.gf_getSiteType());
        	this.ds_search.setColumn(0, "LANGUAGETYPE",this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "INSPECTIONCLASSID", "SelfInspectionTake");//자주검사(입고)
        	this.ds_search.setColumn(0, "INS_USERID", this.gf_getUserId());
        	this.ds_search.setColumn(0, "INS_USERNAME", this.gf_getUserNm());

        	this.fn_initParam();
        	this.fn_initCombo();
        	this.GetNCRList();

        	//그리드 기능 제외
        	//sort 제거
        	this.div_work.form.tab_Main.Tabpage1.form.grdLotQty.removeEventHandler("onheadclick", this.nfn_grd_onheadclick , this);
        	//filter 제거
        	this.div_work.form.tab_Main.Tabpage1.form.grdLotQty.removeEventHandler("onexpandup", this.nfn_grd_onexpandup , this);
        	this.div_work.form.tab_Main.Tabpage1.form.grdLotQty.removeEventHandler("onmousemove", this.nfn_grd_onmousemove, this); //filter 아이콘 안나오게 처리

        	this.div_work.form.tab_Main.Tabpage2.set_url("pcm::PCM01500D.xfdl");

        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.GetLotList();
        };

        this.GetLotList = function ()
        {
        	this.ds_LotQty.setColumn(0,"INSPECTIONQTY",0);
        	this.ds_LotQty.setColumn(0,"DEFECTQTY",0);
        	this.ds_LotQty.setColumn(1,"DEFECTQTY",0);

        	if(this.ds_search.getColumn(0,"PROCESSSEGMENTID") == "")
        		this.ds_search.setColumn(0,"PROCESSSEGMENTID", this.ds_search.getColumn(0,"PROCESSSEGMENTNAME")) ;

        	if(this.nfn_isNull(this.ds_search.getColumn(0,"PRODUCTDEFID"))) this.ds_search.setColumn(0,"PRODUCTDEFVERSION","");
        	this.ds_LotList.clearData();
        	if(this.fn_searchValidate() == false) return;

        	var sSvcID 			= "SelectLotInspectionList";
        	var sController 	= "/pcm01500/SelectLotInspectionList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_LotList=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.GetTXNHISTKEY = function ()
        {
        	this.ds_temp.clear();

        	var sSvcID 			= "selectTxnHistKey";
        	var sController 	= "/pcmCommon/selectTxnHistKey.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_temp=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs,"","",false);

        	//trace(this.ds_temp.saveXML());
        	return this.ds_temp.getColumn(0,0);

        };

        this.fn_searchValidate = function ()
        {
        	if(this.tab_search.Tabpage1.form.edt_AREAID.value != this.ds_search.getColumn(0,"AREANAME"))
        		this.ds_search.setColumn(0,"AREANAME", this.tab_search.Tabpage1.form.edt_AREAID.value);

        	var component = this.tab_search.Tabpage1;
        	var strColIdList = "edt_AREAID";
        	var strColNmList = "AREA";
        	return this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        };

        /*
        * 기능 : 검색 초기화
        */
        this.fn_searchClear = function(obj,e)
        {
        	this.ds_search.copyData(this.ds_searchCopy);
        };

        this.GetNCRList = function ()
        {
        	this.ds_NcrList.clearData();

        	var sSvcID 			= "SelectNcrStandardOfSelfInspection";
        	var sController 	= "/pcm01500/SelectNcrStandardOfSelfInspection.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_NcrList=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.fn_save = function (obj, e)
        {
        	if(this.fn_saveValidate() == false) return;

        	var mRow = this.ds_LotList.rowcount == 1 ? 0 : this.ds_LotList.rowposition;

        	for(var r=0;r<this.ds_InspectionList.rowcount;r++)
        	{
        		var pcsQty = nexacro.toNumber(this.ds_InspectionList.getColumn(r, "QTY"));
        		var pnlQty = nexacro.toNumber(this.ds_InspectionList.getColumn(r, "PNLQTY"));
        		var defectRate = nexacro.toNumber(this.ds_InspectionList.getColumn(r, "DEFECTRATE"));
        		var defectGrade = this.ds_InspectionList.getColumn(r, "DECISIONDEGREE");
        		var defectCode = this.ds_InspectionList.getColumn(r, "DEFECTCODE");
        		var imgResourceID = this.ds_InspectionList.getColumn(r, "IMAGERESOURCEID");

        		if(this.mfn_checkNCR(defectGrade, defectRate, pcsQty,defectCode, imgResourceID ) == false) return;
        	}
        	this.ds_LotListTemp.clearData();
        	var addRow =  this.ds_LotListTemp.addRow();
        	var bSucc = this.ds_LotListTemp.copyRow(addRow,this.ds_LotList,mRow);

        	//this.ds_LotList 에서 보냄.

        	var sSvcID 			= "saveLotIncommingInspection";
        	var sController 	= "/pcm01500/saveLotIncommingInspection.do";
        	var sInDatasets 	= "ds_search=ds_search ds_LotList=ds_LotListTemp ds_LotQty=ds_LotQty ds_InspectionList=ds_InspectionList:A";
        	var sOutDatasets 	= "ds_result=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };

        this.fn_saveValidate = function ()
        {
        	var insPnlQty = nexacro.toNumber(this.ds_LotQty.getColumn(0,"INSPECTIONQTY"));
            var insPcsQty = nexacro.toNumber(this.ds_LotQty.getColumn(1,"INSPECTIONQTY"));

        	var defectPnlQty = nexacro.toNumber(this.ds_LotQty.getColumn(0,"DEFECTQTY"));
            var defectPcsQty = nexacro.toNumber(this.ds_LotQty.getColumn(1,"DEFECTQTY"));

        	if (insPcsQty == 0)
        	{
        		//검사수량이 0입니다. 검사 작업 후 진행하여 주십시오.
        		this.gfn_Message("MustDoInspect", null, "warning", "ok");
        		return false;
        	}

        	if (insPnlQty == 0 && insPcsQty == 0)
        	{
        		this.ds_LotQty.set_enableevent(false);
        		this.ds_LotQty.setColumn(0,"DEFECTQTY",0);
        		this.ds_LotQty.setColumn(1,"DEFECTQTY",0);
        		this.ds_LotQty.set_enableevent(true);

        		var arg = [this.nfn_getDictionaryname('INSPECTIONQTY',true)];
        		this.gfn_Message("MustDoInspect", arg, "warning", "ok");//검사 수량을(를) 먼저 입력하세요.
        		return false;
        	}

        	if (defectPcsQty > insPcsQty)
        	{
        		this.ds_LotQty.set_enableevent(false);
        		this.ds_LotQty.setColumn(0,"DEFECTQTY",0);
        		this.ds_LotQty.setColumn(1,"DEFECTQTY",0);
        		this.ds_LotQty.set_enableevent(true);

        		var arg = [this.nfn_getDictionaryname('DEFECTQTY',true), this.nfn_getDictionaryname('INSPECTIONQTY',true)];
        		this.gfn_Message("CanNotToMuch", arg, "warning", "ok");//불량 수량은(는) 검사 수량보다 많을 수 없습니다.
        		return false;
        	}

        	if(defectPcsQty == 0) {
        		this.ds_InspectionList.clearData();
        	} else {
        		for(var i=0;i<this.ds_InspectionList.rowcount;i++)
        		{
        			if(this.ds_InspectionList.getColumn(i,"QTY") == 0 ){
        				var arg = this.ds_InspectionList.getColumn(i,"SEGMENT_DEFECTCODE");
        				this.gfn_Message("InputDefectQty", arg, "warning", "ok");//불량 수량을 입력하시기 바랍니다. Defect Code : {0}
        				return false;
        			}
        		}
        	}

        	return true;
        }

        this.mfn_checkNCR = function (defectGrade, defectRate, defectQty,strDefectCode, imgResourceID )
        {
        	this.ds_NcrListTemp.copyData(this.ds_NcrList);
        	this.ds_NcrListTemp.filter("DECISIONDEGREE == '" + defectGrade + "'");
        	var bcheck = true;
        	var message = "";

        	for(var i=0;i<this.ds_NcrListTemp.rowcount;i++)
        	{
        		var judgeType = this.ds_NcrListTemp.getColumn(i,"NGCONDITION");
        		var fromRate = nexacro.toNumber(this.ds_NcrListTemp.getColumn(i,"FROMRATE"));
        		var toRate = nexacro.toNumber(this.ds_NcrListTemp.getColumn(i,"TORATE"));
        		var ngQty = nexacro.toNumber(this.ds_NcrListTemp.getColumn(i,"NGQUANTITY"));
        		var chkDefectQty = defectQty;
        		var checkType = this.ds_NcrListTemp.getColumn(i,"QTYORRATE");

        		var spec = this.ds_NcrListTemp.getColumn(i,"NCRSPEC");
        		var gcGrad = this.ds_NcrListTemp.getColumn(i,"QCGRADE");

        		switch(judgeType) {
        		case "GE"://이상
        		{
        			if(checkType == "RATE" && defectRate >= toRate){
        				message = this.SetNCRMessage(checkType, strDefectCode, gcGrad, defectQty.toString(), spec, defectRate.toString());
        				bcheck = false;
        			}else if(checkType == "QTY" && chkDefectQty >= ngQty){
        				message = this.SetNCRMessage(checkType, strDefectCode, gcGrad, defectQty.toString(), spec, defectRate.toString());
        				bcheck = false;
        			}
        			break;
        		}
        		case "BT":
        		{
        			if(checkType == "RATE" &&  defectRate >= fromRate && defectRate <= toRate){
        				message = this.SetNCRMessage(checkType, strDefectCode, gcGrad, defectQty.toString(), spec, defectRate.toString());
        				bcheck = false;
        			}else if(checkType == "QTY" && ngQty >= fromRate && ngQty <= toRate){
        				message = this.SetNCRMessage(checkType, strDefectCode, gcGrad, defectQty.toString(), spec, defectRate.toString());
        				bcheck = false;
        			}
        			break;
        		}
        		case "GT":
        		{
        			if(checkType == "RATE" &&  defectRate > toRate){
        				message = this.SetNCRMessage(checkType, strDefectCode, gcGrad, defectQty.toString(), spec, defectRate.toString());
        				bcheck = false;
        			}else if(checkType == "QTY" && chkDefectQty > ngQty){
        				message = this.SetNCRMessage(checkType, strDefectCode, gcGrad, defectQty.toString(), spec, defectRate.toString());
        				bcheck = false;
        			}
        			break;
        		}
        		case "LE":
        		{
        			if(checkType == "RATE" &&  defectRate <= toRate){
        				message = this.SetNCRMessage(checkType, strDefectCode, gcGrad, defectQty.toString(), spec, defectRate.toString());
        				bcheck = false;
        			}else if(checkType == "QTY" && chkDefectQty <= ngQty){
        				message = this.SetNCRMessage(checkType, strDefectCode, gcGrad, defectQty.toString(), spec, defectRate.toString());
        				bcheck = false;
        			}
        			break;
        		}
        		default:
        		}
        	}

        	if (!bcheck && this.nfn_isNull(imgResourceID)) {
        		this.gfn_Message("CHECKIMEAGEBYNCR", message, "warning", "ok");//NCR 발행 불량은 이미지 등록이 필수 입니다. {0}
        	} else {
        		bcheck = true;
        	}

        	return bcheck;
        };

        this.SetNCRMessage = function (checkType, strDefectCode, gcGrad, defectQty, spec, defectRate)
        {
        	var message = "";

        	message = "\r\n" + this.nfn_getDictionaryname('DEFECTCODE',true) + " : " + strDefectCode + "\r\n" + this.nfn_getDictionaryname('QCGRADE',true) + " : " + gcGrad + "\r\n";
        	if (checkType == "QTY")
        	{
        		message = message + this.nfn_getDictionaryname('PCSDEFECTQTY',true) + " : " + defectQty + "\r\n" + this.nfn_getDictionaryname('RANGE',true)  + " : " + spec;
        	}
        	else
        	{
        		message = message + this.nfn_getDictionaryname('NCRDEFECTRATE',true) + " : " + defectRate + "\r\n" + this.nfn_getDictionaryname('RANGE',true) + " : " + spec;
        	}

        	return message;
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
        		return;
        	}

        	{
        		switch(trId) {
        		case "SelectLotInspectionList" :
        		{
        			if(this.ds_LotList.rowcount > 0)
        			{
        				this.div_work.form.tab_Main.Tabpage2.LotID = this.ds_LotList.getColumn(0,"LOTID");
        				if(this.div_work.form.tab_Main.Tabpage2.DetailLoad == "Y" )
        				{
        					this.div_work.form.tab_Main.Tabpage2.form.mfn_GetInspection(this.ds_LotList.getColumn(0,"LOTID"));
        				}
        			}
        			break;
        		}
        		case "saveLotIncommingInspection" :
        		{
        			this.gfn_Message("SuccessSave", "", "info", "ok");
        			//trace(this.ds_result.saveXML());
        			this.ds_InspectionList.applyChange();
        			this.fn_sendEmail();
        			break;
        		}
        		case "selectEcmLookupValuesVList2ds_CSiteTypeALL" :
        		{
        			this.ds_search.setColumn(0,"PLANTID",this.gf_getSiteType());
        			break;
        		}
        		case "selectInputResultByInputDay" :
        		{
        			//trace(this.ds_InputResultByDay.saveXML());
        			break;
        		}
        		case "selectReasonConsumableList" :
        		{
        			//trace(this.ds_ReasonConsumableList.saveXML());
        			break;
        		}
        		case "selectDefectReasonConsumableLot" :
        		{
        			//trace(this.ds_ReasonConsumableLot.saveXML());
        			break;
        		}
        		case "selectDefectReasonProcesssegment" :
        		{
        			var arrSeg = [];
        			for(var i=0;i<this.ds_ReasonProcessSegment.rowcount;i++)
        			{
        				arrSeg.push(this.ds_ReasonProcessSegment.getColumn(i,"PROCESSSEGMENTID"));
        			}
        			this.DefectSegments = arrSeg.join(',');
        			break;
        		}
        		case "selectEcmLookupValuesVList2ds_CDecisionDegreeSEL" :
        		{
        			this.ds_searchCopy.copyData(this.ds_search);
        			break;
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

        	if(sPopupId == "EMAIL" ) this.mfn_ClearGetLotList();

        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "SEARCH_PRODUCT")
        	{//PRODUCTDEFID|PRODUCTDEFVERSION|PRODUCTDEFNAME
        		this.setProduct_P00105(rtn, this.ds_cbo_ProdVersion, this.ds_search);

        	} else if (sPopupId == "SEARCH_AREA")
        	{//AREAID|AREANAME
        		this.ds_search.setColumn(0,"AREAID",rtn[0]);
        		this.ds_search.setColumn(0,"AREANAME",rtn[1]);
        	}else if (sPopupId == "SEARCH_LOTID")
        	{//LOTID
        		this.ds_search.setColumn(0,"LOTID",rtn.join(","));
        	}else if (sPopupId == "SEARCH_SEGMENT")
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
        	}else if (sPopupId == "SEARCH_USER")
        	{//USERID|USERNAME
        		this.ds_search.setColumn(0,"INS_USERID",rtn[0]);
        		this.ds_search.setColumn(0,"INS_USERNAME",rtn[1]);
        	}else if (sPopupId == "SEARCH_DEFECT")
        	{//DEFECTCODE|DEFECTCODENAME|QCSEGMENTID|QCSEGMENTNAME|DECISIONDEGREE|SEGMENT_DEFECTCODE|SEGMENT_DEFECTNAME

        		if(this.ds_InspectionList.findRow("SEGMENT_DEFECTCODE",rtn[5]) >= 0 ) return;

        		var nRow = this.ds_InspectionList.rowcount == 1 ? 0 : this.ds_InspectionList.rowposition;
        		this.ds_InspectionList.setColumn(nRow,"DEFECTCODE",rtn[0]);
        		this.ds_InspectionList.setColumn(nRow,"DEFECTCODENAME",rtn[1]);
        		this.ds_InspectionList.setColumn(nRow,"QCSEGMENTID",rtn[2]);
        		this.ds_InspectionList.setColumn(nRow,"QCSEGMENTNAME",rtn[3]);
        		this.ds_InspectionList.setColumn(nRow,"DECISIONDEGREE",rtn[4]);
        		this.ds_InspectionList.setColumn(nRow,"SEGMENT_DEFECTCODE",rtn[5]);
        		this.ds_InspectionList.setColumn(nRow,"SEGMENT_DEFECTNAME",rtn[6]);

        	}else if( sPopupId == "file_upload")
        	{
        		if(rtn == "SUCC")
        		{
        			var nRow = this.ds_InspectionList.rowcount == 1 ? 0 : this.ds_InspectionList.rowposition;
        			trace(this.ds_file.saveXML());

        			this.ds_fileCombo.filter();
        			for(var j=this.ds_fileCombo-1;j >= 0;j--)
        			{
        				if(this.ds_fileCombo.findRow("ATCH_FILE_ID",this.ds_InspectionList.getColumn(nRow,"IMAGERESOURCEID")) > 0);
        					this.ds_fileCombo.deleteRow(j);
        			}

        			for(var i=0;i<this.ds_file.rowcount;i++)
        			{
        				var eRow = this.ds_fileCombo.addRow();
        				this.ds_fileCombo.setColumn(eRow, "OC_FILE_NM", this.ds_file.getColumn(i,"OC_FILE_NM"));
        				this.ds_fileCombo.setColumn(eRow, "ATCH_FILE_GUID", this.ds_file.getColumn(i,"ATCH_FILE_GUID"));
        				this.ds_fileCombo.setColumn(eRow, "ATCH_FILE_ID", this.ds_file.getColumn(i,"ATCH_FILE_ID"));
        			}

        			var filterString = "ATCH_FILE_ID == '" + this.ds_file.getColumn(0,"ATCH_FILE_ID") + "'"
        			this.ds_fileCombo.filter();
        			this.ds_fileCombo.filter(filterString);

        			this.ds_InspectionList.setColumn(nRow,"IMAGERESOURCEID",this.ds_file.getColumn(0,"ATCH_FILE_ID"));
        			this.ds_fileCombo.set_rowposition(0);
        			this.div_work.form.tab_Main.Tabpage1.form.cbo_Image.set_value(this.ds_file.getColumn(0,"ATCH_FILE_GUID"));

        			var upUrl = nexacro.getEnvironment().services["svcurl"].url +"/comm/downImage/" + this.ds_file.getColumn(0,"ATCH_FILE_GUID") + ".do";
        			this.div_work.form.tab_Main.Tabpage1.form.imageViewer.set_image(upUrl);

        		}
        	}

        };

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        this.mfn_ClearGetLotList = function ()
        {
        	this.ds_InspectionList.set_enableevent(false);
        	this.ds_LotQty.set_enableevent(false);

        	this.ds_InspectionList.clearData();
        	this.ds_LotQty.setColumn(0,"INSPECTIONQTY","0");
        	this.ds_LotQty.setColumn(1,"INSPECTIONQTY","0");
        	this.ds_LotQty.setColumn(0,"DEFECTQTY","0");
        	this.ds_LotQty.setColumn(1,"DEFECTQTY","0");
        	this.ds_search.setColumn(0,"REINS_REASON","");
        	this.GetLotList();

        	this.ds_InspectionList.set_enableevent(true);
        	this.ds_LotQty.set_enableevent(true);
        };

        /*
         *	화면 호출시 셋팅된 argument 가 존재하면 가져온다.
         */
        this.fn_initParam = function()
        {
        	var sArgName = this.gfn_getFrameAguments("menuName");
        	if(sArgName == "LotIncommingInspection") {
        		trace("argument :" + sArgName);

        		//var sArgArr = this.gfn_getFrameAguments("objList");
        		var data = JSON.parse(this.gfn_getFrameAguments("objList"));
        		this.ds_search.setColumn(0,"AREAID",data.AREAID);
        		this.ds_search.setColumn(0,"AREANAME",data.AREANAME);
        		this.ds_search.setColumn(0,"LOTID",data.LOTID);
        		this.tab_search.Tabpage1.form.edt_AREAID.set_value(data.AREANAME );
        		this.GetLotList();
        	}
        }

        this.fn_initCombo = function ()
        {
        	this.AddAll(this.ds_cbo_ProdVersion,"PRODUCTDEFVERSIONCODE","PRODUCTDEFVERSIONNAME");
        	this.ds_search.setColumn(0, "PRODUCTDEFVERSION", "");
        };


        /*
         *	입고 검사 Context Menu : Lot 이력조회
         */
        this.mfn_gotoLot = function ()
        {
        	var mRow = this.ds_LotList.rowcount == 1 ? 0 : this.ds_LotList.rowposition;

        	var sUrl = "pcm::PCM03100M.xfdl";
        	// arryList 타입전달 예)
        	var objArgs = {
        		menuName : "LotHistory",
        		objList : ["LOTID", this.ds_LotList.getColumn(mRow, "LOTID")]
        	};

        	var bReload = true;
        	this.gfn_goPage(sUrl, objArgs, bReload);
        };

        /*
         *	입고 검사 Context Menu : 재공조회
         */
        this.mfn_gotoWIP = function ()
        {
        // 	var nRow = this.ds_LotList.rowposition;
        // 	var lotID = this.ds_LotList.getColumn(nRow,"LOTID");
        // 	var prodID = this.ds_LotList.getColumn(nRow,"PRODUCTDEFID");
        // 	var prodVer = this.ds_LotList.getColumn(nRow,"PRODUCTDEFVERSION");
        // 	var prodName = this.ds_LotList.getColumn(nRow,"PRODUCTDEFNAME");
        // 	var areaID = this.ds_LotList.getColumn(nRow,"AREAID");
        // 	var areaName = this.ds_LotList.getColumn(nRow,"AREANAME");

        	var sUrl = "pcm::PCM04900M.xfdl";
        	// arryList 타입전달 예)
        	var objArgs = {
        		menuName : "LotWorkInProcess",
        		objList : [this.SelectRow2JsonString(this.ds_LotList)]
        	};

        	var bReload = true;
        	this.gfn_goPage(sUrl, objArgs, bReload);
        };

        /*
         *	입고 검사 Context Menu : 모델별 제공조회
         */
        this.mfn_gotoModelWIP = function ()
        {
        	var sUrl = "pcm::PCM05000M.xfdl";
        	// arryList 타입전달 예)
        	var objArgs = {
        		menuName : "ModelWorkInProcess",
        		objList : [this.SelectRow2JsonString(this.ds_LotList)]
        	};

        	var bReload = true;
        	this.gfn_goPage(sUrl, objArgs, bReload);
        };

        /*
         *	입고 검사 Context Menu : 자주검사(입고,출하) 결과조회
         */
        this.mfn_gotoWIR = function ()
        {
        	var sUrl = "qam::QAM00800M.xfdl";
        	// arryList 타입전달 예)
        	var objArgs = {
        		menuName : "InspectionResult",
        		objList : [this.SelectRow2JsonString(this.ds_LotList)]
        	};

        	var bReload = true;
        	this.gfn_goPage(sUrl, objArgs, bReload);
        };

        /*
         *	상단 그리드 선택 시 Detail 데이타 뿌려줌. asis : FocusedRowDataBind
         */
        this.SetInspectionReg = function (nRow)
        {
        	var lotId = this.ds_LotList.getColumn(nRow, "LOTID");
            var areaName = this.ds_LotList.getColumn(nRow, "CURAREANAME");
            var processsegmentName = this.ds_LotList.getColumn(nRow, "PROCESSSEGMENTNAME");
            var InspectionCnt = this.pfn_allTrim(this.ds_LotList.getColumn(nRow, "DEGREE1"));

        	var pnlQty = nexacro.toNumber( this.ds_LotList.getColumn(nRow, "PANELQTY"));
            var pcsQty = nexacro.toNumber( this.ds_LotList.getColumn(nRow, "QTY"));
            var pcsPnl = nexacro.toNumber( this.ds_LotList.getColumn(nRow, "PCSPNL"));

        	this.ds_search.setColumn(0,"REINS_REASON","");

        	if(InspectionCnt == "0" )
        		this.div_work.form.tab_Main.Tabpage1.form.div_RegInspection.form.edt_ReinspectReason.set_enable(false);
        	else
        		this.div_work.form.tab_Main.Tabpage1.form.div_RegInspection.form.edt_ReinspectReason.set_enable(true);

        	var InspUnit = this.pfn_allTrim(this.ds_LotList.getColumn(nRow, "INSPECTIONUNIT"));
        	var Inspqty = nexacro.toNumber( this.ds_LotList.getColumn(nRow, "NCRINSPECTIONQTY"));

        	//ClearLotQtyGrid(pnlQty, pcsQty, pcsPnl); 대신...
        	this.ds_LotQty.set_enableevent(false);
        	this.ds_LotQty.setColumn(0,"WORKQTY",pnlQty);
        	this.ds_LotQty.setColumn(1,"WORKQTY",pcsQty);
        	this.ds_LotQty.setColumn(0,"PCSPNL",pcsPnl);
        	this.ds_LotQty.setColumn(1,"PCSPNL",pcsPnl);
        	this.ds_LotQty.set_enableevent(true);

        	this.defectProcessListControl_SetResultData(lotId,pcsQty, pcsPnl);

        	this.ds_InspectionList.addRow();
        	this.ds_InspectionList.applyChange();
        	this.ds_ReasonProcessSegment.filter("");

        };

        this.SetInspectionHist = function (nRow)
        {
        	if(this.div_work.form.tab_Main.Tabpage2.DetailLoad == "Y" )
        	{//this.mfn_GetInspection(this.parent.LotID);
        		this.div_work.form.tab_Main.Tabpage2.form.mfn_GetInspection(this.ds_LotList.getColumn(nRow,"LOTID"));
        	}
        };

        /*
         *	기본정보 그리드에서 검사 수량(PNL) 변경 시
         */
        this.mfn_ChangePnlQty = function (pnlQty, pcsPnl)
        {
        	this.IsSaved = true;
        	var pcsQty = pnlQty * pcsPnl;
        	var workQty = nexacro.toNumber(this.ds_LotQty.getColumn(1, "WORKQTY"));
        	if(workQty < pcsQty) pcsQty = workQty;

        	return pcsQty;

        };

        /*
         *	기본정보 그리드에서 검사 수량(PCS) 변경 시
         */
        this.mfn_ChangePcsQty = function (pcsQty, pcsPnl)
        {
        	this.IsSaved = true;
        	var pnlQty = nexacro.ceil(pcsQty / pcsPnl);
        	return pnlQty;
        };


        /*
         *	불량 검사 그리드에서 수량(PNL) 변경 시
         */
        this.mfn_defectChangePnlQty = function (pnlQty)
        {
        	this.ds_InspectionList.set_enableevent(false);
        	this.ds_LotQty.set_enableevent(false);
        	try{
        		var nRow = this.ds_InspectionList.rowcount == 1 ? 0 : this.ds_InspectionList.rowposition;

        		var pcsQty = (pnlQty * this.Defect.pcsPnl);
        		this.ds_InspectionList.setColumn(nRow, "QTY", pcsQty);
        		var sumPnlQty = this.ds_InspectionList.getSum("PNLQTY");
        		var sumPcsQty = this.ds_InspectionList.getSum("QTY");

        		this.ds_LotQty.setColumn(0,"DEFECTQTY",nexacro.ceil(sumPnlQty));
        		this.ds_LotQty.setColumn(1,"DEFECTQTY",nexacro.ceil(sumPcsQty));
        		defectiveRate = (pcsQty/this.Defect.inspectQty)*100;
        		this.ds_InspectionList.setColumn(nRow,"DEFECTRATE",defectiveRate);
        	}
        	catch(ec){
        		trace("mfn_defectChangePnlQty ? " + ec.toString());
        	}

        	this.ds_InspectionList.set_enableevent(true);
        	this.ds_LotQty.set_enableevent(true);
        };

        /*
         *	불량 검사 그리드에서 수량(PCS) 변경 시
         */
        this.mfn_defectChangePcsQty = function (pcsQty)
        {
        	this.ds_InspectionList.set_enableevent(false);
        	this.ds_LotQty.set_enableevent(false);
        	try{
        		var nRow = this.ds_InspectionList.rowcount == 1 ? 0 : this.ds_InspectionList.rowposition;

        		var pnlQty = (pcsQty / this.Defect.pcsPnl);
        		this.ds_InspectionList.setColumn(nRow, "PNLQTY", nexacro.ceil(pnlQty));
        		var sumPnlQty = this.ds_InspectionList.getSum("PNLQTY");
        		var sumPcsQty = this.ds_InspectionList.getSum("QTY");

        		this.ds_LotQty.setColumn(0,"DEFECTQTY",nexacro.ceil(sumPnlQty));
        		this.ds_LotQty.setColumn(1,"DEFECTQTY",nexacro.ceil(sumPcsQty));
        		defectiveRate = (pcsQty/this.Defect.inspectQty)*100;
        		this.ds_InspectionList.setColumn(nRow,"DEFECTRATE",defectiveRate);


        		this.GetDecisionDegree();
        	}
        	catch(ec){
        		trace("mfn_defectChangePcsQty ? " + ec.toString());
        	}

        	this.ds_InspectionList.set_enableevent(true);
        	this.ds_LotQty.set_enableevent(true);

        };

        this.GetDecisionDegree = function ()
        {
        	var nRow = this.ds_InspectionList.rowcount == 1 ? 0 : this.ds_InspectionList.rowposition;


        };


        /*
         *	최하단 불량 검사 그리드에 원인품목 리스트를 다시 읽어옴.
         */
        this.GetReasonConsumableList = function ()
        {
        	this.ds_temp.clear();
        	this.pfn_DatasetAddColumn(this.ds_temp, "LOTID,LANGUAGETYPE");

        	this.ds_temp.setColumn(0, "LOTID", this.ds_LotList.getColumn(this.ds_LotList.rowposition, "LOTID"));
        	this.ds_temp.setColumn(0, "LANGUAGETYPE", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType"));

        	this.pfn_CostomQuery(this.ds_temp, this.ds_ReasonConsumableList, "selectReasonConsumableList");

        };

        /*
         *	최하단 불량 검사 그리드에 원인자재LOT 리스트를 다시 읽어옴.
         */
        this.GetDefectReasonConsumableLot = function ()
        {
        	this.ds_ReasonConsumableLot.filter("");

        	this.ds_temp.clear();
        	this.pfn_DatasetAddColumn(this.ds_temp, "LOTID,LANGUAGETYPE");

        	this.ds_temp.setColumn(0, "LOTID", this.ds_LotList.getColumn(this.ds_LotList.rowposition, "LOTID"));
        	this.ds_temp.setColumn(0, "LANGUAGETYPE", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType"));

        	this.pfn_CostomQuery(this.ds_temp, this.ds_ReasonConsumableLot, "selectDefectReasonConsumableLot");
        };

        /*
         *	최하단 불량 검사 그리드에 원인공정 리스트를 다시 읽어옴.
         */
        this.GetDefectReasonProcesssegment = function ()
        {
        	this.ds_ReasonProcessSegment.filter("");

        	this.ds_temp.clear();
        	this.pfn_DatasetAddColumn(this.ds_temp, "LOTID,LANGUAGETYPE");

        	this.ds_temp.setColumn(0, "LOTID", this.ds_LotList.getColumn(this.ds_LotList.rowposition, "LOTID"));
        	this.ds_temp.setColumn(0, "LANGUAGETYPE", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType"));

        	this.pfn_CostomQuery(this.ds_temp, this.ds_ReasonProcessSegment, "selectDefectReasonProcesssegment");
        };

        this.fn_sendEmail = function ()
        {
        	if(this.ds_result.rowcount <= 1)
        	{
        		this.mfn_ClearGetLotList();
        		return;
        	}

        	var mRow = this.ds_LotList.rowcount == 1 ? 0 : this.ds_LotList.rowposition;

        	var defectCodeName = [];
        	for(var i=0;i<this.ds_result.rowcount-1;i++)
        	{
        		defectCodeName.push(this.ds_result.getColumn(i,"DEFECTCODENAME"));
        	}

        	var arr = [];
        	arr.push( this.nfn_getDictionaryname('PROCESSSEGMENT',true) );
        	arr.push( this.ds_LotList.getColumn(mRow,"PROCESSSEGMENTNAME") );
        	arr.push( this.ds_LotList.getColumn(mRow,"PROCESSSEGMENTID") );
        	arr.push( this.nfn_getDictionaryname('AREA',true) );
        	arr.push( this.ds_LotList.getColumn(mRow,"AREANAME") );
        	arr.push( this.ds_LotList.getColumn(mRow,"AREAID") );
        	arr.push( this.nfn_getDictionaryname('PRODUCTDEFNAME',true) );
        	arr.push( this.nfn_getDictionaryname('PRODUCTDEFID',true) );
        	arr.push( this.nfn_getDictionaryname('PRODUCTDEFVERSION',true) );
        	arr.push( this.ds_LotList.getColumn(mRow,"PRODUCTDEFNAME") );
        	arr.push( this.ds_LotList.getColumn(mRow,"PRODUCTDEFID") );
        	arr.push( this.ds_LotList.getColumn(mRow,"PRODUCTDEFVERSION") );
        	arr.push( this.nfn_getDictionaryname('LOTID',true) );
        	arr.push( this.ds_LotList.getColumn(mRow,"LOTID") );
        	arr.push( this.nfn_getDictionaryname('DEFECTNAME',true) );
        	arr.push( defectCodeName.join(",") );

        	var title = this.ds_search.getColumn(0,"INSPECTIONCLASSID")=="SelfInspectionTake"
        			? this.nfn_getDictionaryname('SELFTAKEABNORMALTITLE',true) : this.nfn_getDictionaryname('SELFABNORMALTITLE',true) ;

        	var emailContent = "○" + arr[0] + ":" + arr[1] + "(" + arr[2] + ")" + "<BR>"
        					 + "○" + arr[3] + ":" + arr[4] + "(" + arr[5] + ")" + "<BR>"
        					 + "○" + arr[6] + "(" + arr[7] + "/" + arr[8] + "):" +  arr[9] + "(" + arr[10] + "/" + arr[11] + ")" + "<BR>"
        					 + "○" + arr[12] + ":" + arr[13] + "<BR>"
        					 + "○" + arr[14] + ":" + arr[15] + "<BR>"

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

        // 조회 조건 이벤트 [S]
        this.btn_AREAID_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0,"AREAID",this.tab_search.Tabpage1.form.edt_AREAID.value);
        	this.openAREA_P00124("BA", this.ds_search);
        };

        this.btn_PRODUCTDEFID_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0,"PRODUCTDEFID",this.tab_search.Tabpage1.form.edt_PRODUCTDEFID.value);
        	this.openProduct_P00105("CA", this.ds_search,"Product");
        };


        this.btn_LOTID_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0,"LOTID",this.tab_search.Tabpage1.form.edt_LOTID.value);
        	this.pfn_openPopup_LOTID("SEARCH_LOTID", this.ds_search.getColumn(0,"LOTID"),"CA");
        };

        this.btn_PROCSEGMENT_onclick = function(obj,e)
        {
        	this.mfn_OpenProcSegment();
        };
        // 조회 조건 이벤트 [E]
        this.mfn_OpenProcSegment = function ()
        {
        	var popupId = "SEARCH_SEGMENT";
        	var oArg = {};

        	oArg.plantID = this.pfn_allTrim(this.ds_search.getColumn(0,"PLANTID"));
        	oArg.process = this.pfn_allTrim(this.ds_search.getColumn(0,"PROCESSSEGMENTNAME"));
        	oArg.ds_result = this.ds_Process;

        	this.gfn_openPopup(popupId,"pcm::PCM00800P.xfdl",oArg,"width=800,height=600");
        };

        this.ds_LotList_onrowposchanged = function(obj,e)
        {
        	if(e.newrow < 0 ) return;

        	if(this.gfn_dsIsUpdated(this.ds_InspectionList) )
        	{
        		var bRtn = this.gfn_confirm("WRITTENBEDELETE", "information", ""); //"입력한 내용이 있으면 현재 작성중인 내용이 모두 삭제됩니다."
        		if(bRtn == false)  return;
        	}

        	var nRow = e.newrow;

        	this.ds_InspectionList.clearData();

        	//최하단 불량 검사 그리드에 원인품목 리스트를 다시 읽어옴.
        	this.GetReasonConsumableList();
        	this.GetDefectReasonConsumableLot();
        	this.GetDefectReasonProcesssegment();

        	this.SetInspectionReg(nRow);
        	this.SetInspectionHist(nRow);

        	this.ds_LotQty.setColumn(0,"INSPECTIONQTY",0);
        	this.ds_LotQty.setColumn(0,"DEFECTQTY",0);
        	this.ds_LotQty.setColumn(1,"DEFECTQTY",0);
        };


        this.div_RegInspection_btn_InspectionUser_onclick = function(obj,e)
        {
        	this.openUSER_P00155(this.ds_search,"B");
        };

        /*
         *	작업장, 공정 값 clear 에 대해 ID 도 함께 clear
         */
        this.ds_search_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "AREANAME" && this.pfn_allTrim(this.ds_search.getColumn(0,"AREANAME")) == "") this.ds_search.setColumn(0,"AREAID","");
        	if(e.columnid == "PROCESSSEGMENTNAME"&& this.pfn_allTrim(this.ds_search.getColumn(0,"PROCESSSEGMENTNAME")) == "") this.ds_search.setColumn(0,"PROCESSSEGMENTID","");
        };

        this.btnAddRow_ds_InspectionList_onclick = function(obj,e)
        {
        	if(this.ds_LotList.rowcount == 0)
        	{
        		this.gfn_Message("NotSeletedLot", "", "warning", "ok");
        		return;
        	}

        	var nRow = this.ds_InspectionList.addRow();

        };




        this.defectProcessListControl_SetGridQtyClear = function ()
        {
        	for(var i=0;i<this.ds_InspectionList.rowcount;i++)
        	{
        		this.ds_InspectionList.setColumn(i,"PNLQTY",0);
        		this.ds_InspectionList.setColumn(i,"QTY",0);
        		this.ds_InspectionList.setColumn(i,"DEFECTRATE",0);
        	}
        };

        this.defectProcessListControl_SetResultData = function (lotId,pcsQty, pcsPnl)
        {
        	this.Defect.SelectedLotId = lotId;
        	this.Defect.pcsPnl = pcsPnl;
        	this.Defect.InspectionDefId = this.ds_search.getColumn(0,"INSPECTIONCLASSID");
        	this.Defect.panelPerQty = pcsPnl;
        	this.Defect.qty = pcsQty;
        	this.defectProcessListControl_SetConsumableDefComboBox();
        };

        this.defectProcessListControl_SetConsumableDefComboBox = function ()
        {

        };

        /*
         *	검사 결과 등록 탭에 검사 수량 입력 시 validation.
         */
        this.ds_LotQty_cancolumnchange = function(obj,e)
        {
        	if(e.newrow < 0) return;
        	if(this.ds_LotList.rowcount == 0) {
        		this.gfn_Message("NeedSearch", "", "warning", "ok");
        		return false;
        	}

        	var insQty = e.newvalue;//nexacro.toNumber(this.ds_LotQty.getColumn(e.newrow, "INSPECTIONQTY"));
        	var workQty = nexacro.toNumber(this.ds_LotQty.getColumn(e.newrow, "WORKQTY"));
        	if(workQty < insQty)
        	{
        		var arg = [this.nfn_getDictionaryname('INSPECTIONQTY',true), this.nfn_getDictionaryname('WORKQTY',true)]
        		this.gfn_Message("CanNotToMuch", arg, "warning", "ok");
        		return false;
        	}
        };


        /*
         *	검사 결과 등록 탭에 검사 수량 입력 시 이벤트.
         */
        this.ds_LotQty_oncolumnchanged = function(obj,e)
        {
        	if(e.row < 0) return;
        	try{

        		this.ds_LotQty.set_enableevent(false);
        		this.ds_InspectionList.set_enableevent(false);

        		var mRow = this.ds_LotList.rowcount == 1 ? 0 : this.ds_LotList.rowposition;

        		this.defectProcessListControl_SetGridQtyClear();

        		var pcsPnl = nexacro.round(this.ds_LotList.getColumn(mRow, "PCSPNL"));
        		if(e.columnid == "INSPECTIONQTY")
        		{
        			if(e.row == 0) this.Defect.inspectQty = e.newvalue * pcsPnl;
        			else  this.Defect.inspectQty = e.newvalue ;
        		}

        		switch(e.row) {
        		case 0://PNL Row
        			var pnlQty = nexacro.toNumber(this.ds_LotQty.getColumn(0, "INSPECTIONQTY"));
        			var result = this.mfn_ChangePnlQty(pnlQty, pcsPnl); // pnlQty * pcsPnl;
        			this.ds_LotQty.setColumn(1,"INSPECTIONQTY",result);
        			break;
        		case 1://PCS Row
        			var pcsQty = nexacro.toNumber(this.ds_LotQty.getColumn(1, "INSPECTIONQTY"));
        			var result = this.mfn_ChangePcsQty(pcsQty, pcsPnl); // pcsQty / pcsPnl
        			this.ds_LotQty.setColumn(0,"INSPECTIONQTY",result);
        			break;
        		default:
        		}
        	}
        	catch(ec)
        	{
        		trace("ds_LotList_canrowposchange ? " + ec.toString());
        		this.ds_LotQty.setColumn(e.row,e.col,e.oldvalue);
        	}
        	this.ds_LotQty.getAvg()
        	this.ds_LotQty.set_enableevent(true);
        	this.ds_InspectionList.set_enableevent(true);
        };



        this.grdInspectionList_oncellclick = function(obj,e)
        {
        	if (e.fromreferenceobject.name == "cellbutton" || e.col == 7)
        	{
        		if(this.nfn_isNull(this.ds_InspectionList.getColumn(e.row, "DEFECTCODE")) )
        		{
        			this.gfn_Message("NoDefectCode", "", "warning", "ok");
        			return;
        		}
        		else if (this.ds_InspectionList.getColumn(e.row, "QTY") == 0 )
        		{
        			this.gfn_Message("CheckRegDefectQty", "", "warning", "ok");
        			return;
        		}
        // 		else if(this.nfn_isNull(this.ds_InspectionList.getColumn(e.row, "REASONPROCESSSEGMENTID")) )
        // 		{
        // 			this.gfn_Message("MustInputCauseProcesssegmentId", "", "warning", "ok");
        // 			return;
        // 		}

        		this.fn_attach();
        	}

        };


        this.grdInspectionList_onexpandup = function(obj,e)
        {
        	if(e.row <0) return;

        	/* Form 에서 Grid Cell 기준으로 위치얻기 */
        	var objRect = obj.getCellRect(e.row, e.cell);

        	/* cell 기준 position으로 클라이언트 기준 X, Y 좌표를 스크린 기준 기준으로 바꾸어 위치얻기 */
        	var nLeft = system.clientToScreenX(obj, objRect.left);
        	var nTop = system.clientToScreenY(obj, objRect.bottom);

        	/* 스크린 기준 X, Y 좌표를 클라이언트 기준으로 바꾸어 위치얻기 */
        	nLeft = system.screenToClientX(nexacro.getApplication().mainframe, nLeft);
        	nTop = system.screenToClientY(nexacro.getApplication().mainframe, nTop);

        	if (this.nfn_isEqualCol(obj, e.cell, "SEGMENT_DEFECTCODE"))
        	{
        		this.mfn_OpenDefectPopup();
        	}
        	else if (this.nfn_isEqualCol(obj, e.cell, "CONSUMABLEDEFNAME"))
        	{
        		this.pdv_ReasonConsumableList.show();
        		this.pdv_ReasonConsumableList.trackPopup(nLeft, nTop,  this.pdv_ReasonConsumableList.width, this.pdv_ReasonConsumableList.height, "fn_Callback_pdv_ReasonConsumableList");
        	} else if (this.nfn_isEqualCol(obj, e.cell, "REASONPROCESSSEGMENTNAME"))
        	{
        		this.ds_ReasonProcessSegment.filter("");
        		if(this.nfn_isNull(this.ds_InspectionList.getColumn(e.row,"REASONCONSUMABLELOTID"))==false && this.ds_InspectionList.getColumn(e.row,"REASONCONSUMABLELOTID") != ""){
        			this.ds_ReasonProcessSegment.filter("LOTID == '" + this.ds_InspectionList.getColumn(e.row,"REASONCONSUMABLELOTID") + "'")
        		}
        		this.pdv_ReasonProcessSegment.show();
        		this.pdv_ReasonProcessSegment.trackPopup(nLeft, nTop,  this.pdv_ReasonProcessSegment.width, this.pdv_ReasonProcessSegment.height, "fn_Callback_pdv_ReasonProcessSegment");
        	}

        };


        this.mfn_OpenDefectPopup = function ()
        {
        	var mRow = this.ds_LotList.rowcount == 1 ? 0 : this.ds_LotList.rowposition;
        	var nRow = this.ds_InspectionList.rowcount == 1 ? 0 : this.ds_InspectionList.rowposition;

        	var popupId = "SEARCH_DEFECT";
        	var lotID = this.ds_LotList.getColumn(mRow, "LOTID");
        	var defectID = this.ds_InspectionList.getColumn(nRow,"DEFECTCODE");
        	var qcSegmentID = this.ds_InspectionList.getColumn(nRow,"QCSEGMENTID");
        	var language = this.gf_getLanguageType();

        	var oArg = {};
        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = "P00241";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "DEFECTCODE|DEFECTCODENAME|QCSEGMENTID|QCSEGMENTNAME|DECISIONDEGREE|SEGMENT_DEFECTCODE|SEGMENT_DEFECTNAME";
        	oArg.arg_paramCols = "LOTID|SEGMENTID|LANGUAGETYPE|VERSION";
        	oArg.arg_paramValues = lotID + "|" + this.DefectSegments+"|"+this.gf_getLanguageType()+"|10003";
        	oArg.arg_searchStr = "1=1";//defectID == "" ? "" : "DEFECTCODENAME=" + defectID + "|QCSEGMENTIDNAME="+qcSegmentID;

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=800,height=800");
        };

        /*
         *	하단 불량 그리드에 데이타 validate
         */
        this.ds_InspectionList_cancolumnchange = function(obj,e)
        {
        	switch(e.columnid) {
        	case "PNLQTY" :
        		{
        			var pnlQty = nexacro.toNumber(this.ds_LotQty.getColumn(0,"INSPECTIONQTY"));
        			if(e.newvalue !="0" && pnlQty == 0) {
        				this.gfn_Message("NoInspectionQtyAndPnl", null, "warning", "ok");//검사 수량을(를) 먼저 입력하세요.
        				return false;
        			}
        			var pnlQtySum = this.ds_InspectionList.getSum("PNLQTY") + e.newvalue - e.oldvalue;
        			if(pnlQty < pnlQtySum ){
        				var arg = [this.nfn_getDictionaryname('DEFECTQTY',true), this.nfn_getDictionaryname('INSPECTIONQTY',true)];
        				this.gfn_Message("CanNotToMuch", arg, "warning", "ok");//불량 수량은(는) 검사 수량보다 많을 수 없습니다.
        				return false;
        			}
        			break;
        		}
        	case "QTY" :
        		{
        			var pcsQty = nexacro.toNumber(this.ds_LotQty.getColumn(1,"INSPECTIONQTY"));
        			if(e.newvalue !="0" && this.ds_LotQty.getColumn(1,"INSPECTIONQTY") == "0") {
        				this.gfn_Message("NoInspectionQtyAndPnl", null, "warning", "ok");//검사 수량을(를) 먼저 입력하세요.
        				return false;
        			}

        			var pcsQtySum = this.ds_InspectionList.getSum("QTY") + e.newvalue - e.oldvalue;
        			if(pcsQty < pcsQtySum ){
        				var arg = [this.nfn_getDictionaryname('DEFECTQTY',true), this.nfn_getDictionaryname('INSPECTIONQTY',true)];
        				this.gfn_Message("CanNotToMuch", arg, "warning", "ok");//불량 수량은(는) 검사 수량보다 많을 수 없습니다.
        				return false;
        			}
        			break;
        		}
        	}
        };

        /*
         *	하단 불량 그리드에 데이타 입력하면
         */
        this.ds_InspectionList_oncolumnchanged = function(obj,e)
        {
        	if(e.newvalue < 0 ) return;
        	switch(e.columnid) {
        	case "SPLITCONSUMABLEDEFIDVERSION":
        		this.ds_ReasonConsumableLot.filter("");
        		this.ds_ReasonConsumableLot.filter("SPLITCONSUMABLEDEFIDVERSION == '" + e.newvalue + "'")
        		break;
        	case "REASONPROCESSSEGMENTNAME" :
        		this.ds_ReasonProcessSegment.filter("");
        		this.ds_ReasonProcessSegment.filter("LOTID == '" + e.newvalue + "'")
        		break;
        	case "PNLQTY" :
        		this.mfn_defectChangePnlQty(e.newvalue);
        		break;
        	case "QTY" :
        		this.mfn_defectChangePcsQty(e.newvalue);
        		break;
        	default:
        	}
        };

        /*
         *	행 추가 되면 초기값 설정
         */
        this.ds_InspectionList_onrowsetchanged = function(obj,e)
        {
        	if(e.reason == 12) //Dataset.REASON_APPEND - 12 Dataset이 추가되었 때
        	{
        		this.ds_InspectionList.set_enableevent(false);
        		var mRow = this.ds_LotList.rowcount == 1 ? 0 : this.ds_LotList.rowposition;

        		this.ds_InspectionList.setColumn(e.row,"LOTID",this.ds_LotList.getColumn(mRow,"LOTID"));
        		this.ds_InspectionList.setColumn(e.row,"UNIT","");
        		this.ds_InspectionList.setColumn(e.row,"PNLQTY",0);
        		this.ds_InspectionList.setColumn(e.row,"QTY",0);
        		this.ds_InspectionList.setColumn(e.row,"DEFECTRATE",0);
        		this.ds_InspectionList.setColumn(e.row,"ISUPLOAD","N");

        		this.ds_InspectionList.setColumn(e.row,"DEGREE", nexacro.toNumber(this.ds_LotList.getColumn(mRow, "DEGREE1")) + 1);
        		this.ds_InspectionList.setColumn(e.row,"REASONCODEID","LockSelfExamNonconfirm");
        		this.ds_InspectionList.setColumn(e.row,"TXNHISTKEY",this.GetTXNHISTKEY());

        		this.ds_ReasonProcessSegment.filter("");

        		this.ds_InspectionList.set_enableevent(true);
        	}
        };

        /*
         * 선택하면 좌측 이미지 변경 됨
         */
        this.ds_InspectionList_onrowposchanged = function(obj,e)
        {
        	var nRow = this.ds_InspectionList.rowcount == 1 ? 0 : this.ds_InspectionList.rowposition;

        	var filterString = "ATCH_FILE_ID == '" + this.ds_InspectionList.getColumn(nRow,"IMAGERESOURCEID") + "'"
        	this.ds_fileCombo.filter();
        	this.ds_fileCombo.filter(filterString);

        	if(this.ds_fileCombo.rowcount > 0)
        	{
        		var atchFileGuid = this.ds_fileCombo.getColumn(0,"ATCH_FILE_GUID");
        		var upUrl = nexacro.getEnvironment().services["svcurl"].url +"/comm/downImage/" + atchFileGuid + ".do";
        		this.div_work.form.tab_Main.Tabpage1.form.imageViewer.set_image(upUrl);
        		this.div_work.form.tab_Main.Tabpage1.form.cbo_Image.set_value(atchFileGuid);
        	}
        	else
        	{
        		this.div_work.form.tab_Main.Tabpage1.form.cbo_Image.set_value("");
        		this.div_work.form.tab_Main.Tabpage1.form.imageViewer.set_image("");
        	}
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

        	this.ds_InspectionList.setColumn(this.ds_InspectionList.rowposition,"SPLITCONSUMABLEDEFIDVERSION",idver);
        	this.ds_InspectionList.setColumn(this.ds_InspectionList.rowposition,"CONSUMABLEDEFNAME",prodName);
        	this.ds_InspectionList.setColumn(this.ds_InspectionList.rowposition,"REASONCONSUMABLEDEFID",prodID);
        	this.ds_InspectionList.setColumn(this.ds_InspectionList.rowposition,"REASONCONSUMABLEDEFVERSION",prodVer);

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

        	this.ds_InspectionList.setColumn(this.ds_InspectionList.rowposition,"REASONPROCESSSEGMENTID",segID);
        	this.ds_InspectionList.setColumn(this.ds_InspectionList.rowposition,"REASONPROCESSSEGMENTNAME",segName);
        	this.ds_InspectionList.setColumn(this.ds_InspectionList.rowposition,"REASONAREAID",aeraID);
        	this.ds_InspectionList.setColumn(this.ds_InspectionList.rowposition,"REASONAREANAME",aeraName);

        	this.pdv_ReasonProcessSegment.closePopup();
        };




        /*
         *	사진 등록
         */
        this.fn_attach = function ()
        {
        	var mRow = this.ds_LotList.rowcount == 1 ? 0 : this.ds_LotList.rowposition;
        	var nRow = this.ds_InspectionList.rowcount == 1 ? 0 : this.ds_InspectionList.rowposition;
        	var srcKey = "";
        	if(nRow >= 0 ) {//bind:DEFECTCODE
        		srcKey = this.ds_InspectionList.getColumn(nRow, "TXNHISTKEY")
        				+ "|" + this.ds_search.getColumn(0,"INSPECTIONCLASSID")
        			    + "|" + this.ds_InspectionList.getColumn(nRow, "LOTID")
        			    + "|" + this.ds_InspectionList.getColumn(nRow, "DEFECTCODE")
        				+ "|" + this.ds_LotList.getColumn(mRow, "PROCESSSEGMENTID")
        			   ;
        	} else {
        		this.gfn_Message("NoSelections", "", "warning", "ok");
        		return;
        	}

        	var jobSysCd = "PCM"; 					//업무구분코드 CMD,BAS....
        	var subDir = ""; 				//세부업무약어
        	var resouceid = srcKey;					//테이블의 키 값
        	var resourcetype = "QAM_INSPECTIONDEFECT"; 	//테이블명
        	var comments = "입고검사(불량)"; 		//파일설명
        	var fileCnt = null; 					//업로드수
        	var oArg = {arg_jobSysCd:jobSysCd
        				,arg_atchSrcKey:resouceid
        				,arg_tableName:resourcetype
        				,arg_desc:comments
        				,arg_subDir:subDir
        				,arg_fileCnt:fileCnt
        				,ds_file:this.ds_file
        				};
        	this.gfn_openPopup("file_upload","pcm::PCM01500P.xfdl",oArg,"");
        };


        // this.tab_search_Tabpage1_edt_AREAID_onkeydown = function(obj:nexacro.Edit,e:nexacro.KeyEventInfo)
        // {
        // 	if (e.keycode != 13) return;
        //
        // 	this.ds_search.setColumn(0,"AREAID",obj.value);
        // 	this.openAREA_P00124("BA", this.ds_search);
        // };



        this.div_work_tab_Main_Tabpage1_cbo_Image_onitemchanged = function(obj,e)
        {
        	var atchFileGuid = e.postvalue;
        	var upUrl = nexacro.getEnvironment().services["svcurl"].url +"/comm/downImage/" + atchFileGuid + ".do";
        	this.div_work.form.tab_Main.Tabpage1.form.imageViewer.set_image(upUrl);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.fn_init,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.btn_AREAID.addEventHandler("onclick",this.btn_AREAID_onclick,this);
            this.tab_search.Tabpage1.form.btn_PROCSEGMENT.addEventHandler("onclick",this.btn_PROCSEGMENT_onclick,this);
            this.tab_search.Tabpage1.form.btn_LOTID.addEventHandler("onclick",this.btn_LOTID_onclick,this);
            this.tab_search.Tabpage1.form.btn_PRODUCTDEFID.addEventHandler("onclick",this.btn_PRODUCTDEFID_onclick,this);
            this.div_work.form.tab_Main.Tabpage1.form.div_RegInspection.form.btn_InspectionUser.addEventHandler("onclick",this.div_RegInspection_btn_InspectionUser_onclick,this);
            this.div_work.form.tab_Main.Tabpage1.form.grdInspectionList.addEventHandler("oncellclick",this.grdInspectionList_oncellclick,this);
            this.div_work.form.tab_Main.Tabpage1.form.grdInspectionList.addEventHandler("onexpandup",this.grdInspectionList_onexpandup,this);
            this.div_work.form.tab_Main.Tabpage1.form.btnAddRow_ds_InspectionList.addEventHandler("onclick",this.btnAddRow_ds_InspectionList_onclick,this);
            this.div_work.form.tab_Main.Tabpage1.form.cbo_Image.addEventHandler("onitemchanged",this.div_work_tab_Main_Tabpage1_cbo_Image_onitemchanged,this);
            this.div_work.form.grdLotList.addEventHandler("onrbuttondown",this.div_work_grdLotList_onrbuttondown,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.pdv_ReasonConsumableList.form.grd_ReasonConsumableList.addEventHandler("oncelldblclick",this.pdv_ReasonConsumableList_grd_ReasonConsumableList_oncelldblclick,this);
            this.pdv_ReasonProcessSegment.form.grd_ReasonProcessSegment.addEventHandler("oncelldblclick",this.pdv_ReasonProcessSegment_grd_ReasonProcessSegment_oncelldblclick,this);
            this.ds_search.addEventHandler("oncolumnchanged",this.ds_search_oncolumnchanged,this);
            this.ds_LotList.addEventHandler("onrowposchanged",this.ds_LotList_onrowposchanged,this);
            this.ds_LotList.addEventHandler("canrowposchange",this.ds_LotList_canrowposchange,this);
            this.ds_LotQty.addEventHandler("oncolumnchanged",this.ds_LotQty_oncolumnchanged,this);
            this.ds_LotQty.addEventHandler("cancolumnchange",this.ds_LotQty_cancolumnchange,this);
            this.ds_InspectionList.addEventHandler("oncolumnchanged",this.ds_InspectionList_oncolumnchanged,this);
            this.ds_InspectionList.addEventHandler("cancolumnchange",this.ds_InspectionList_cancolumnchange,this);
            this.ds_InspectionList.addEventHandler("onrowsetchanged",this.ds_InspectionList_onrowsetchanged,this);
            this.ds_InspectionList.addEventHandler("onrowposchanged",this.ds_InspectionList_onrowposchanged,this);
            this.ds_fileCombo.addEventHandler("onrowposchanged",this.ds_fileCombo_onrowposchanged,this);
        };
        this.loadIncludeScript("PCM01500M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
