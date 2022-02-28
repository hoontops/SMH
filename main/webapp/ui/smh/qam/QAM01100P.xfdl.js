(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM01100P");
            this.set_titletext("계측값 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_qamMeasureItem", this);
            obj._setContents("<ColumnInfo><Column id=\"INSPITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SPECRANGE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"TOPBOTTOMYN\" type=\"STRING\" size=\"256\"/><Column id=\"CIRCUITSTD\" type=\"STRING\" size=\"256\"/><Column id=\"USL\" type=\"STRING\" size=\"256\"/><Column id=\"LSL\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"MEASURER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"ISNEW\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"MEASURER\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qamBasInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"MEASUREDATETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"FACTORYID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"MEASURER\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"DAITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"DAITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SPECRANGE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"AVERAGEVALUE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MAXVALUE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MINVALUE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEVIATION\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"FACTORYNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qamMeasureValue", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"DADEFID\" type=\"STRING\" size=\"256\"/><Column id=\"DADEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"DAPOINTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"MEASURER\" type=\"STRING\" size=\"256\"/><Column id=\"SPECRANGE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTROLTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"LOWERSPECLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"UPPERSPECLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"AVERAGEVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"MAXVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"MINVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"DEVIATION\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREDATETIME\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILESIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILEEXT\" type=\"STRING\" size=\"256\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILEDATA\" type=\"STRING\" size=\"256\"/><Column id=\"FILEPATH\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTINSPECTIONRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"NCRDECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREVALUELIST\" type=\"STRING\" size=\"256\"/><Column id=\"ISALLMEASURECHECK\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREVALUE2\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE2\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"TOPBOTTOMYN\" type=\"STRING\" size=\"256\"/><Column id=\"CIRCUITSTD\" type=\"STRING\" size=\"256\"/><Column id=\"ETCRESULT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qamInspectionOriginalFile", this);
            obj._setContents("<ColumnInfo><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_output", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sendMail", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREDATETIME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"MEASURER\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREVALUELIST\" type=\"STRING\" size=\"256\"/><Column id=\"SPECRANGE\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTION\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qamMeasureValueSort", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"DADEFID\" type=\"STRING\" size=\"256\"/><Column id=\"DADEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"DAPOINTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"MEASURER\" type=\"STRING\" size=\"256\"/><Column id=\"SPECRANGE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTROLTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"LOWERSPECLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"UPPERSPECLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"AVERAGEVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"MAXVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"MINVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"DEVIATION\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREDATETIME\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILESIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILEEXT\" type=\"STRING\" size=\"256\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILEDATA\" type=\"STRING\" size=\"256\"/><Column id=\"FILEPATH\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTINSPECTIONRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"NCRDECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREVALUELIST\" type=\"STRING\" size=\"256\"/><Column id=\"ISALLMEASURECHECK\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREVALUE2\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE2\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"TOPBOTTOMYN\" type=\"STRING\" size=\"256\"/><Column id=\"CIRCUITSTD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_close",null,null,"70","28","20","20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_cssclass("btn_pop_no");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","20","20","150","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("계측값 등록");
            obj.set_cssclass("sta_WF_title");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MENU_PG-QC-0150");
            this.addChild(obj.name, obj);

            obj = new Static("sta_subTitleBasInfo","20","sta_title:5","150","34",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("기본 정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("DEFAULTINFO");
            this.addChild(obj.name, obj);

            obj = new Div("div_basInfo","20","sta_title:40","500","342",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_lotNo","0","0","120","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("1");
            obj.set_text("Lot No");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("873DD90A54B04DEDA6CAD3D47CE96684");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_lotNo","sta_lotNo:5","5",null,"20","27",null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("0");
            obj.set_text("IFV");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Button("btn_lotNo",null,"5","22","20","5",null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WF_finder");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_productDefId","0","sta_lotNo:0","120","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("2");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("PRODUCTDEFID");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_productDefId","sta_productDefId:5","edt_lotNo:11",null,"20","5",null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            obj.set_readonly("true");
            obj.set_text("IFV");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_productDefName","0","sta_productDefId:0","120","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("4");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("PRODUCTDEFNAME");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_productDefName","sta_productDefName:5","edt_productDefId:11",null,"20","5",null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("5");
            obj.set_visible("true");
            obj.set_inputtype("number");
            obj.set_enable("false");
            obj.set_readonly("true");
            obj.set_text("변경");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_rev","0","sta_productDefName:0","120","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("6");
            obj.set_text("Rev");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("REV");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_rev","sta_rev:5","edt_productDefName:11",null,"20","5",null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("7");
            obj.set_enable("false");
            obj.set_readonly("true");
            obj.set_text("IFV");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_site","0","sta_rev:0","120","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("8");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_site","sta_site:5","edt_rev:11",null,"20","5",null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("9");
            obj.set_enable("false");
            obj.set_readonly("true");
            obj.set_text("IFV");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_factory","0","sta_site:0","120","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("10");
            obj.set_text("공장");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("FACTORY");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_factory","sta_factory:5","edt_site:11",null,"20","5",null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("11");
            obj.set_enable("false");
            obj.set_readonly("true");
            obj.set_text("IFV");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_processSegmentId","0","sta_factory:0","120","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("12");
            obj.set_text("표준공정명");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("STANDARDOPERATIONNAME");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_processSegmentName","sta_processSegmentId:5","edt_factory:11",null,"20","5",null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("13");
            obj.set_enable("false");
            obj.set_readonly("true");
            obj.set_text("IFV");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_areaId","0","sta_processSegmentId:0","120","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("14");
            obj.set_text("작업장명");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("AREANAME2");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_areaName","sta_areaId:5","edt_processSegmentName:11",null,"20","5",null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("15");
            obj.set_enable("false");
            obj.set_readonly("true");
            obj.set_text("IFV");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_equipmentUnit","0","sta_areaId:0","120","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("16");
            obj.set_text("설비(호기)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("EQUIPMENTUNIT");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_equipmentUnit","sta_equipmentUnit:5","edt_areaName:11",null,"20","5",null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("17");
            obj.set_visible("true");
            obj.set_enable("false");
            obj.set_readonly("true");
            obj.set_text("변경");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_subName","0","sta_equipmentUnit:0","120","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("18");
            obj.set_text("양산구분");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("SUBNAME");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_subName","sta_subName:5","edt_equipmentUnit:11",null,"20","5",null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("19");
            obj.set_enable("false");
            obj.set_readonly("true");
            obj.set_text("IFV");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_measurer","0","sta_subName:0","120","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("20");
            obj.set_text("측정자");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("MEASURER");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_measurer","sta_measurer:5","edt_subName:11",null,"20","5",null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("21");
            obj.set_enable("false");
            obj.set_readonly("true");
            obj.set_text("IFV");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Grid("grd_qamMeasureItem","20","div_basInfo:124","500",null,null,"58",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_qamMeasureItem");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"160\"/><Column size=\"176\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"측정 항목\" cssclass=\"cell_point\" color=\"#333333\" tooltiptext=\"MEASUREITEM\"/><Cell col=\"2\" text=\"규격 범위(SPEC)\" cssclass=\"cell_point\" color=\"#333333\" tooltiptext=\"SPECRANGESPC\"/><Cell col=\"3\" text=\"상/하단사용여부\" tooltiptext=\"TOPBOTTOMYN\"/><Cell col=\"4\" text=\"회로폭기준\" tooltiptext=\"CircuitStd\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:INSPITEMNAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:SPECRANGE\"/><Cell col=\"3\" combocodecol=\"C,YesNo,,Y,N\" displaytype=\"combotext\" text=\"bind:TOPBOTTOMYN\"/><Cell col=\"4\" combocodecol=\"C,CircuitStd,,Y,N\" displaytype=\"combotext\" text=\"bind:CIRCUITSTD\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_subTitleMeasureItemList","21",null,"150","34",null,"grd_qamMeasureItem:0",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("측정 항목 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MEASUREITEMLIST");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_qamMeasureItem","180",null,null,"34","610","grd_qamMeasureItem:0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.addChild(obj.name, obj);

            obj = new Div("div_reWorkCount","20",null,"300","33",null,"20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_detail");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_reWorkCount","0","0","120","31",null,null,null,null,null,null,this.div_reWorkCount.form);
            obj.set_taborder("1");
            obj.set_text("재작업횟수");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("REWORKCOUNT");
            this.div_reWorkCount.addChild(obj.name, obj);

            obj = new Edit("edt_reWorkCount","125","5",null,"20","5",null,null,null,null,null,this.div_reWorkCount.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            this.div_reWorkCount.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","0","82","20","84",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00",null,"110","20","84","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,null,"50","20","95","0",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02","0",null,"100%","10",null,"48",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("sta_subTitleMeasureValueList","530","sta_title:5","150","34",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("측정값 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MEASUREVALUELIST");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_qamMeasureValue","530","sta_title:40",null,null,"20","58",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamMeasureValue");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"75\"/><Column size=\"0\"/><Column size=\"120\"/><Column size=\"40\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"측정값\" cssclass=\"cell_point\" color=\"#333333\" tooltiptext=\"MEASUREVALUE\"/><Cell col=\"2\" text=\"측정값 (하단)\" cssclass=\"cell_point\" color=\"#333333\" tooltiptext=\"BOTTOMMEASUREVALUE\"/><Cell col=\"3\" text=\"파일명\" tooltiptext=\"FILENAME\"/><Cell col=\"4\" text=\"...\"/><Cell col=\"5\" text=\"측정일시\" cssclass=\"cell_point\" color=\"#333333\" tooltiptext=\"MEASUREDATETIME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:MEASUREVALUE\" textAlign=\"right\" maskeditformat=\"#0.00000\" cssclass=\"expr:comp.parent.fn_setMeasureResultCss(currow, &quot;MEASUREVALUE&quot;)\" edittype=\"expr:dataset.getRowType(currow) == 2 ? &apos;mask&apos; : &apos;none&apos;\" displaytype=\"mask\" editautoselect=\"false\"/><Cell col=\"2\" text=\"bind:MEASUREVALUE2\" textAlign=\"right\" maskeditformat=\"#0.0000\" cssclass=\"expr:comp.parent.fn_setMeasureResultCss(currow, &quot;MEASUREVALUE2&quot;)\" edittype=\"expr:dataset.getRowType(currow) == 2 ? &apos;mask&apos; : &apos;none&apos;\" displaytype=\"mask\"/><Cell col=\"3\" text=\"bind:FILENAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"...\"/><Cell col=\"5\" text=\"bind:MEASUREDATETIME\" calendardateformat=\"yyyy-MM-dd hh:mm:ss\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_file","2.00%","437","500","87",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_url("common::com_file_b2.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"70","28","btn_close:5","20",null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("저장");
            obj.set_cssclass("btn_pop_yes");
            obj.set_tooltiptext("SAVE");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addRow",null,"66","26","24","49",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delRow",null,"66","26","24","20",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_x_close",null,"0","20","20","0",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("CLOSE");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_basInfo.form.edt_lotNo","value","ds_qamBasInfo","LOTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_basInfo.form.edt_productDefId","value","ds_qamBasInfo","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_basInfo.form.edt_productDefName","value","ds_qamBasInfo","PRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_basInfo.form.edt_rev","value","ds_qamBasInfo","PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_basInfo.form.edt_site","value","ds_qamBasInfo","PLANTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_basInfo.form.edt_factory","value","ds_qamBasInfo","FACTORYNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_basInfo.form.edt_processSegmentName","value","ds_qamBasInfo","PROCESSSEGMENTNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_basInfo.form.edt_areaName","value","ds_qamBasInfo","AREANAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_basInfo.form.edt_equipmentUnit","value","ds_qamBasInfo","EQUIPMENTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_basInfo.form.edt_subName","value","ds_qamBasInfo","SUBNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_reWorkCount.form.edt_reWorkCount","value","ds_qamBasInfo","REWORKCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_basInfo.form.edt_measurer","value","ds_qamMeasureItem","MEASURER_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_file_b2.xfdl");
        };
        
        // User Script
        this.addIncludeScript("QAM01100P.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("QAM01100P.xfdl","lib::lib_qam.xjs");
        this.registerScript("QAM01100P.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 계측값 등록 팝업
         * 파일명 		: QAM01100P.xfdl
         * 작성자 		: 권혜영
         * 작성일 		: 2021.04.08
         *
         * 설  명		: 품질관리 > 공정품질 > 계측값 등록  > 계측값 등록 팝업
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.08	권혜영   	최초작성
         * 2021.07.09               1.행추가만하고 값을 변경하지 않을 경우 판정결과를 측정할 수가 없어
         *                            행추가시에 DEFAULT 설정 후 입력시 재판정
         *                          2.측정항목 리스트의 회로폭기준에 따라 측정값1, 측정값2도 판정하여 색상변경(fn_setMeasureResultCss)
         *                            - 상단:측정값2, 하단:측정값1
         *                          3.저장시 판정결과 NG가 존재시 사용자에게 알림 후 선택하도록 변경
         * 2021.07.13               . LOT 팝업에서 선택 후 조회시 RESOURCETYPE이 존재하지 않아 측정값 항목, 리스트 정보를
         *                            가져오지 못해 DEFAULT "OperationInspection"로 설정함
         * 2021.07.30               1.저장시 측정값 Validation에서  그리드에 보여지는 값만 대상이 되어 NULL로 입력되는 현상이 있어
         *                            행추가시 0으로 값 셋팅함
         * 2021.08.17               1.행추가시에 측정값 default value 0 셋팅 제거
         *                          2.EnterKey로 행추가시에 포커스가 측정값에 가도록 설정
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
        this.fv_isNew = true;
        this.fv_lotId;
        this.fv_addRow = 0;
        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.gfn_setGridCopyPaste(this.grd_qamMeasureValue);
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
        this.fn_add = function(obj,e)
        {
        	var dsObj = this.ds_qamMeasureValue;
        	if(dsObj == null) return;

        	var row = dsObj.addRow();

        	//부모의 상/하단 사용여부, 회로폭 기준 column set.
        	var rowPos = this.ds_qamMeasureItem.rowposition;

        	var topbottomYn = this.ds_qamMeasureItem.getColumn(rowPos, "TOPBOTTOMYN");
        	var circuitstd = this.ds_qamMeasureItem.getColumn(rowPos, "CIRCUITSTD");

        	dsObj.setColumn(row, "TOPBOTTOMYN", topbottomYn);
        	dsObj.setColumn(row, "CIRCUITSTD", circuitstd);

        	//2021.07.09 행추가만하고 값을 변경하지 않을 경우 판정결과를 측정할 수가 없어 행추가시에 판정결과를 설정
        	dsObj.setColumn(row, "RESULT", "NG");
        	dsObj.setColumn(row, "INSPECTIONRESULT", "NG");
        	dsObj.setColumn(row, "ETCRESULT", "NG");

        	/*2021.07.30 검사항목리스트가 2개일 경우 1번째 항목의 그리드 측정값 mask처리로 인해 값이 0.00000으로 표기되어 값을 입력하지 않고
        	                                            2번째 항목 이동 후 측정값 저장시 그리드에 보이는 항목만 validation해서 null로 저장되어서 기본값 셋팅*/
        // 	dsObj.setColumn(row, "MEASUREVALUE", 0);
        //     if (topbottomYn == "Y"){
        // 		dsObj.setColumn(row, "MEASUREVALUE2", 0);
        // 	}

            /*2021.08.17 EnterKey로 행추가시에 포커스가 측정값에 가도록 설정
        	*/
        	this.grd_qamMeasureValue.setFocus();
            this.grd_qamMeasureValue.setCellPos(this.grd_qamMeasureValue.getBindCellIndex("body", "MEASUREVALUE"), row);
        	//this.grd_centralHouse.showEditor(true);

        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	if(!this.fv_isNew || this.ds_qamMeasureValue.rowcount == 0) //save 버튼은 as-is 에서 컨트롤되지 않음
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}

            var objDataSet = this.grd_qamMeasureValue.getBindDataset();
        	var befInspItemId ="";
        	var inspItemIdCount = 0;
        	var nullCount = 0;

        	objDataSet.filter("");
        	objDataSet.set_keystring("S:+INSPITEMID+INSPITEMVERSION");

        	for(var i=0; i < objDataSet.getRowCount(); i++)
            {
        	    var measureValue = objDataSet.getColumn(i, "MEASUREVALUE");
        		var measureValue2 = objDataSet.getColumn(i, "MEASUREVALUE2");
        	    var topBottomYn = objDataSet.getColumn(i, "TOPBOTTOMYN");
        		var circuitstd = objDataSet.getColumn(i, "CIRCUITSTD");
        		var inspItemId = objDataSet.getColumn(i, "INSPITEMID");

        		if (i == 0 || (i>0 && ( inspItemId != befInspItemId))){
        			befInspItemId = inspItemId;
        			inspItemIdCount = inspItemIdCount+1;
        		}

        		if (topBottomYn == "Y"){
        			if (circuitstd == "Top"){
        				if (this.gfn_isNull(objDataSet.getColumn(i, "MEASUREVALUE"))){
        					nullCount = nullCount+1;
        				}
        			}else{
        				if (this.gfn_isNull(objDataSet.getColumn(i, "MEASUREVALUE2"))){
        					nullCount = nullCount+1;
        				}
        			}
        		}else{
        			if (this.gfn_isNull(objDataSet.getColumn(i, "MEASUREVALUE"))){
        				nullCount = nullCount+1;
        			}
        		}
        	}

        	this.fn_filter();

        	if (nullCount>0){
        		this.gfn_Message("ENTERMEASURE", null, "warning", "ok"); //측정값 미입력건이 존재합니다.
        		return;
        	}

        	var pRowCnt = this.ds_qamMeasureItem.rowcount;
        	if(pRowCnt != inspItemIdCount) {
        		this.gfn_Message("ENTERENTIREITEM", null, "warning", "ok"); //측정항목별 측정값을 모두 입력하셔야 합니다.
        		return;
        	}

        	//측정 항목리스트의 측정값 모두 입력 (2021.06.17)
        // 	var arrGroupColumn = [];
        // 	arrGroupColumn.push("INSPITEMID");
        //
        // 	this.ds_temp.clearData();
        // 	this.ds_qamMeasureValue.filter("");
        // 	this.qamfn_setDistinct(this.ds_qamMeasureValue, this.ds_temp, arrGroupColumn);
        // 	this.fn_filter();
        // 	var pRowCnt = this.ds_qamMeasureItem.rowcount;
        // 	var rowCnt = this.ds_temp.rowcount;
        //
        // 	if(pRowCnt != rowCnt) {
        // 		this.gfn_Message("ENTERENTIREITEM", null, "warning", "ok"); //측정항목값을 모두 입력하셔야 합니다.
        // 		return;
        // 	}

        	//2021.07.09 저장시 NG건수 사용자 알림추가
            var NGCount = nexacro.toNumber(this.ds_qamMeasureValue.getCaseCountNF("INSPECTIONRESULT=='NG'"));
        	var message = "ConfirmSave";
        	var param =""
        	if (NGCount > 0){
        		message = "CheckNGCount";
        		param = NGCount+" ";
        	}

        	if (this.gfn_Message(message, param, "conf", "yesno")){

        		//bas_daresult테이블 등록시 dapointid는 inspitemid별로 증가하므로 화면단에서 정렬해서 보냄
        		this.ds_qamMeasureValue.filter("");
        		this.ds_qamMeasureValue.set_keystring("S:+INSPITEMID+INSPITEMVERSION");
        		this.ds_qamMeasureValueSort.copyData(this.ds_qamMeasureValue, false);

        		this.fn_filter();

        		// -------------------------
        		// 저장
        		// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        		// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        		// -------------------------
        		var sSvcID 			= "saveQamMeasureValue";
        		var sController 	= "/qam01100/saveQamMeasureValue.do";
        		var sInDatasets 	= "ds_qamMeasureItem=ds_qamMeasureItem:A ds_qamMeasureValue=ds_qamMeasureValueSort:A";
        		var sOutDatasets 	= "ds_sendMail=output";
        		var sArgs 			= "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	}
        };

        /*
         * 기능 : 삭제
         */
        this.fn_delete = function (obj, e)
        {
        	var dsObj = this.ds_qamMeasureValue;
        	var nRowType = dsObj.getRowType(dsObj.rowposition);

        	if(nRowType==2){
        		var bOK = this.gfn_Message("IsDeleted", null, "conf", "yesno");
        		if (bOK == false) return;
        		dsObj.deleteRow(dsObj.rowposition);
        	} else {
        		this.gfn_Message("CantdelSaveData", null, "info", "ok");
        	}
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
        		if (trId == "saveQamMeasureValue")
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			if(this.ds_sendMail.rowcount > 0) {
        				this.fn_sendEmail();
        			}
        			else {
        				this.opener.fn_search();
        				this.close();
        			}
        		} else if (trId == "selectQamMeasureValue")
        		{
        			if(this.ds_qamMeasureItem.rowcount <= 0) {
        				this.gfn_Message("NoInspectionSpec", null, "info", "ok"); // 등록된 SPEC이 없습니다.
        			}

        			// 버튼 처리
        			this.ds_qamMeasureValue.filter("");
        			if(this.ds_qamMeasureValue.rowcount > 0) {
        				this.fv_isNew = false;
        			}

        			this.fn_setButtonVisible();
        			this.fn_filter();


        			// 파일 처리
        			var histKey, resouceType;

        			//신규일 경우 ds_output에 txn hist key 값이 조회됨
        			if(this.fv_isNew) {
        				histKey = this.ds_qamMeasureItem.getColumn(0, "RESULTTXNHISTKEY");
        				resouceType = "OperationInspection";

        			} else {

        				//기본정보 후에 검사원본파일 조회 (확인요.. 한건인지 모르겠음)
        				histKey = this.ds_qamInspectionOriginalFile.getColumn(0, "TXNHISTKEY");
        				resouceType = this.ds_qamInspectionOriginalFile.getColumn(0, "RESOURCETYPE");
        			}
        			this.fn_searchAttach(histKey, resouceType);

        		} else if (trId == "selectTxnHistKey")
        		{
        			var txnhistkey = this.ds_output.getColumn(0, "TXNHISTKEY");
        			this.fn_addRowSetMeasureValue(txnhistkey);
        		}
        	}
        };

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

        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = popId;
        	oArg.arg_popupNm = "";
        	oArg.arg_paramCols = "";
        	oArg.arg_paramValues = "";
        	oArg.arg_searchStr = "";

        	if(svcId == "SCH_LOTID") { //Lot No 선택
        		oArg.arg_paramCols = "ISEXISTS";
        	    oArg.arg_paramValues = "Y";
        		oArg.arg_searchStr = "LOTID=" + this.nfn_nvl(this.div_basInfo.form.edt_lotNo.value,"")
        		oArg.arg_rtnCols = "LOTID|EQUIPMENTID";
        	}
        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);

        };

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(sPopupId == "SCH_LOTID")
        	{
        		if(this.nfn_isNull(rtn)) return;

        		this.fv_lotId = rtn[0];
        		this.fn_searchBasInfo(rtn[1]);

        	} else if(sPopupId == "EMAIL")
        	{
        		this.opener.fn_search();
        		this.close();
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
        	//초기화 부분
        	this.fv_lotId = this.parent.lotId;

        	if(!this.nfn_isNull(this.fv_lotId)) {
        		this.fv_isNew = false;
        	}

        	this.div_file.form.sta_subTitle.set_text(this.nfn_getDictionarynameUpper("원본파일"));
        	this.ds_qamBasInfo.clearData();

        	if(this.fv_isNew) {
        		this.ds_qamBasInfo.addRow();

        		this.btn_addRow.set_visible(true);
        		this.btn_delRow.set_visible(true);

        	} else {
        		this.div_basInfo.form.edt_lotNo.set_readonly(true);
        		this.div_basInfo.form.btn_lotNo.set_enable(false);

        		this.qamfn_setCompControl(this.div_file.form.components, "disable", [Div, Button], "btn_fileDownLoad");

        		//search 호출
        		this.fn_searchBasInfo(this.parent.equipmentId, this.parent.resourceType);
        	}
        //20210818 등록버튼 비활성화로 주석(향후삭제)
        // 	if ( this.INS_AUTH_YN == "0" && this.UPD_AUTH_YN == "0" && this.DEL_AUTH_YN == "0") {
        // 		this.btnSave.set_enable(false);
        // 		this.btn_addRow.set_enable(false);
        // 		this.btn_delRow.set_enable(false);
        // 		this.div_file.form.btn_fileDel.set_enable(false);
        // 		this.div_file.form.btn_upload03.set_enable(false);
        // 	}
        };

        /*
         * 기능 : 기본정보 조회
         */
        this.fn_searchBasInfo = function (equipmentid, resourcetype)
        {
        	if(this.nfn_isNull(this.fv_lotId)) return;

        	this.ds_qamMeasureValue.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "LOTID", this.fv_lotId);
        	this.ds_search.setColumn(0, "ISNEW", this.fv_isNew);
        	this.ds_search.setColumn(0, "MEASURER", this.gf_getUserId());

        	//정보 조회 시 lot id, equipment id, resource type으로 조회
        	if(!this.nfn_isNull(equipmentid)) {
        		this.ds_search.setColumn(0, "EQUIPMENTID", equipmentid);
        	}
        	if(!this.nfn_isNull(resourcetype)) {
        		this.ds_search.setColumn(0, "RESOURCETYPE", resourcetype);
        	}
        	//2021.07.13 LOT 팝업에서 선택 후 조회시 RESOURCETYPE이 존재하지 않아 측정값 항목, 리스트 정보를 가져오지 못해 DEFAULT "OperationInspection"로 설정함
        	else {
        		this.ds_search.setColumn(0, "RESOURCETYPE", 'OperationInspection');
        	}

        	this.ds_output.clearData();

        	var sSvcID 			= "selectQamMeasureValue";
        	var sController 	= "/qam01100/selectQamMeasureValue.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_qamBasInfo=output1 ds_qamMeasureItem=output2 ds_qamMeasureValue=output3 ds_qamInspectionOriginalFile=output4";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 원본파일 조회
         */
        this.fn_searchAttach = function(histKey, resouceType)
        {
        	var divFile = this.div_file;
        	divFile.form.jobSysCd 		= "QAM";
        	divFile.form.atchTyCd 		= "QAM_INSPECTIONRESULT";
        	divFile.form.tableName 		= "QAM_INSPECTIONRESULT";
        	divFile.form.subDir  		= "inspectionResult";
        	divFile.comments			= "계측값 원본파일";
        	divFile.form.atchSrcKey  	= histKey + "|" + resouceType + "|" + this.fv_lotId;
        	divFile.form.fn_search();
        };

        /*
         * 기능 : TXN HistKey 조회
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

        /*
         * 기능 : 측정값 add된 row에 값 세팅
         */
        this.fn_addRowSetMeasureValue = function(txnhistkey)
        {
        	var dsObj = this.ds_qamMeasureValue, parentObjDs = this.ds_qamMeasureItem;
        	if(dsObj == null) return;

        	var row = this.fv_addRow;

        	dsObj.setColumn(row,"TXNHISTKEY", txnhistkey);//TXNHISTKEY
        	dsObj.setColumn(row,"RESOURCETYPE", "OperationInspection");//RESOURCETYPE

        	dsObj.setColumn(row,"ENTERPRISEID", this.gf_getEnterpriseId());//ENTERPRISEID
        	dsObj.setColumn(row,"PLANTID", this.gf_getSiteType());//PLANTID
        	dsObj.setColumn(row,"VALIDSTATE", "Valid");			//유효여부
        	dsObj.setColumn(row,"INSPITEMID", parentObjDs.getColumn(parentObjDs.rowposition, "INSPITEMID"));	//INSPITEMID
        	dsObj.setColumn(row,"INSPITEMNAME", parentObjDs.getColumn(parentObjDs.rowposition, "INSPITEMNAME"));//INSPITEMNAME
        	dsObj.setColumn(row,"MEASURER", this.gf_getUserId());//USERID
        	dsObj.setColumn(row,"REWORKCOUNT", this.div_reWorkCount.form.edt_reWorkCount.value);//REWORKCOUNT
        };

        /*
         * 기능 : 측정값 범위(SPEC)에 포함여부 체크
         */
        this.fn_checkMeasureValue = function(val, usl, lsl) {
        	var ret = "";
        	if(!this.nfn_isNull(usl) && !this.nfn_isNull(lsl)) {
        		if(nexacro.toNumber(val) >= nexacro.toNumber(lsl) && nexacro.toNumber(val) <= nexacro.toNumber(usl)) {
        			ret = "OK";
        		} else {
        			ret = "NG";
        		}
        	} else if(this.nfn_isNull(usl)) {
        		if(nexacro.toNumber(val) >= nexacro.toNumber(lsl)) {
        			ret = "OK";
        		} else {
        			ret = "NG";
        		}
        	} else if(this.nfn_isNull(lsl)) {
        		if(nexacro.toNumber(val) <= nexacro.toNumber(usl)) {
        			ret = "OK";
        		} else {
        			ret = "NG";
        		}
        	}
        	return ret;
        };

        /*
         * 기능 : 2021.07.09 측정값에 대한 판정결과에 따른 cell color 설정
         */
        this.fn_setMeasureResultCss = function(pRow, pCol)
        {
        	var topbottomYn = this.ds_qamMeasureValue.getColumn(pRow, "TOPBOTTOMYN");
        	var circuitstd = this.ds_qamMeasureValue.getColumn(pRow, "CIRCUITSTD");
        	var result = this.ds_qamMeasureValue.getColumn(pRow, "RESULT");
        	var etcResult= this.ds_qamMeasureValue.getColumn(pRow, "ETCRESULT");

            var cssColor = "";
        	if(topbottomYn == "Y") {
        		if(circuitstd == "Top") {
        			if (pCol == "MEASUREVALUE"){
        				cssColor = result=="NG"? "cell_bg_red":"";
        			}
        			else{
        				cssColor = etcResult=="NG"? "cell_bg_red":"";
        			}
        		} else if(circuitstd == "Bottom") {
        			if (pCol == "MEASUREVALUE2"){
        				cssColor = result=="NG"? "cell_bg_red":"";
        			}
        			else{
        				cssColor = etcResult=="NG"? "cell_bg_red":"";
        			}
        		}
        	} else {
        		cssColor = result=="NG"?"cell_bg_red":"";
        	}

        	return cssColor;
        };

        /*
         * 기능 : add, delete 버튼 visible 처리
         */
        this.fn_setButtonVisible = function() {
        	//if(obj.getRowType(row) == 2 || obj.getRowType(row) == 4) {
        	if(this.fv_isNew) {
        		this.btn_addRow.set_visible(true);
        		this.btn_delRow.set_visible(true);
        	} else {
        		this.btn_addRow.set_visible(false);
        		this.btn_delRow.set_visible(false);
        	}
        };

        /*
         * 기능 : 측정항목 리스트와 측정값 리스트 값 비교 시 filter
         */
        this.fn_filter = function()
        {
        	var objDs = this.ds_qamMeasureItem;
        	var rowPos = objDs.rowposition;

        	var inspItemId = objDs.getColumn(rowPos, "INSPITEMID");
        	var reWorkCount = this.div_reWorkCount.form.edt_reWorkCount.value;

        	this.ds_qamMeasureValue.filter("INSPITEMID == '"+inspItemId+"' && REWORKCOUNT =='"+reWorkCount+"'");
        };

        /*
         * 기능 : 메일 발송
         */
        this.fn_sendEmail = function ()
        {
        	var arr = [], nRow = 0;

        	for(var i = 0; i < this.ds_sendMail.rowcount; i++) {
        		this.ds_sendMail.setColumn(i, "USERID", this.gf_getUserId());
        		this.ds_sendMail.setColumn(i, "LANGUAGETYPE", this.gf_getLanguageType());
        		this.ds_sendMail.setColumn(i, "INSPECTION", "OperationInspection");
        		this.ds_sendMail.setColumn(i, "TITLE", this.nfn_getDictionarynameUpper("QUALITYABNORMALTITLE"));
        		this.ds_sendMail.setColumn(i, "REMARK", "");
        	}

        	var arr = [];
        	arr.push( this.nfn_getDictionaryname('PRODUCTDEFNAME',true) );
        	arr.push( this.nfn_getDictionaryname('PRODUCTDEFID',true) );
        	arr.push( this.nfn_getDictionaryname('PRODUCTDEFVERSION',true) );
        	arr.push( this.nfn_getDictionaryname('LOT',true) );
        	arr.push( this.ds_sendMail.getColumn(nRow,"RESOURCEID") );
        	arr.push( this.nfn_getDictionaryname('MEASUREDATETIME',true) );
        	arr.push( this.qamfn_setFormatDate("YYYY-MM-DD HH:MM:SS", this.ds_sendMail.getColumn(nRow,"MEASUREDATETIME").trim()) );
        	arr.push( this.nfn_getDictionaryname('MEASUREITEM',true) );
        	arr.push( this.ds_sendMail.getColumn(nRow,"INSPITEMID") );
        	arr.push( this.nfn_getDictionaryname('MEASURER',true) );
        	arr.push( this.ds_sendMail.getColumn(nRow,"MEASURER") );
        	arr.push( this.nfn_getDictionaryname('SITE',true) );
        	arr.push( this.ds_sendMail.getColumn(nRow,"PLANTID") );
        	arr.push( this.nfn_getDictionaryname('PROCESSSEGMENTEXTLIST',true) );
        	arr.push( this.ds_sendMail.getColumn(nRow,"PROCESSSEGMENTID") );
        	arr.push( this.nfn_getDictionaryname('AREA',true) );
        	arr.push( this.ds_sendMail.getColumn(nRow,"AREAID") );
        	arr.push( this.nfn_getDictionaryname('WORKSTARTEQUIPMENT',true) );
        	arr.push( this.ds_sendMail.getColumn(nRow,"EQUIPMENTID") );
        	arr.push( this.nfn_getDictionaryname('RANGE',true) );
        	arr.push( this.ds_sendMail.getColumn(nRow,"SPECRANGE") );
        	arr.push( this.nfn_getDictionaryname('MEASURVALUE',true) );
        	arr.push( this.ds_sendMail.getColumn(nRow,"MEASUREVALUELIST") );

        	arr.push( this.ds_sendMail.getColumn(nRow,"PRODUCTDEFNAME") );
        	arr.push( this.ds_sendMail.getColumn(nRow,"PRODUCTDEFID") );
        	arr.push( this.ds_sendMail.getColumn(nRow,"PRODUCTDEFVERSION") );

        	var title = this.nfn_getDictionaryname('QUALITYABNORMALTITLE',true) ;

        	var emailContent = "○" + arr[0] + "(" + arr[1] + "/" + arr[2] + "):" + arr[23] + "(" + arr[24] + "/" + arr[25] + ")" + "<BR>"
        					 + "○" + arr[3] + ":" + arr[4] + "<BR>"
        					 + "○" + arr[5] + ":" + arr[6] + "<BR>"
        					 + "○" + arr[7] + ":" + arr[8] + "<BR>"
        					 + "○" + arr[9] + ":" + arr[10] + "<BR>"
        					 + "○" + arr[11] + ":" + arr[12] + "<BR>"
        					 + "○" + arr[13] + ":" + arr[14] + "<BR>"
        					 + "○" + arr[15] + ":" + arr[16] + "<BR>"
        					 + "○" + arr[17] + ":" + arr[18] + "<BR>"
        					 + "○" + arr[19] + ":" + arr[20] + "<BR>"
        					 + "○" + arr[21] + ":" + arr[22] + "<BR><BR><BR>";

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

        /*
         * 기능 : 닫기
         */
        this.fn_close = function(obj,e)
        {
        	this.close();
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         * 이벤트 : Lot id 버튼 클릭 또는 edit 클릭 시 lot 정보 팝업 호출
         */
        this.div_basInfo_btn_lotNo_onclick = function(obj,e)
        {
        	this.fn_openPop("SCH_LOTID","P00224"); //LOT조회
        };

        this.div_basInfo_edt_lotNo_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13) {
        		this.fn_openPop("SCH_LOTID","P00224"); //LOT조회
        	}
        };

        /*
         * 이벤트 : 측정항목 리스트 row position 변경 시 호출
         */
        this.ds_qamMeasureItem_onrowposchanged = function(obj,e)
        {
        	var inspItemId = obj.getColumn(e.newrow, "INSPITEMID");
        	var topBottomYn = obj.getColumn(e.newrow, "TOPBOTTOMYN");
        	var reWorkCount = this.div_reWorkCount.form.edt_reWorkCount.value;

        	//size 동적 조정 (측정값 하단 조정)
        	if(topBottomYn == "Y") {
        		this.grd_qamMeasureValue.setCellProperty("head", 1, "text", "측정값1");
        		this.grd_qamMeasureValue.setCellProperty("head", 2, "text", "측정값2");

        		this.grd_qamMeasureValue.setFormatColProperty(2, "size", 75);

        	} else {
        		this.grd_qamMeasureValue.setCellProperty("head", 1, "text", "측정값");
        		this.grd_qamMeasureValue.setCellProperty("head", 1, "tooltiptext", "MEASUREVALUE");
        		this.grd_qamMeasureValue.setFormatColProperty(2, "size", 0);
        	}
        	//filter
        	this.ds_qamMeasureValue.filter("INSPITEMID == '"+inspItemId+"' && REWORKCOUNT =='"+reWorkCount+"'");

        	//this.fn_setButtonVisible();
        };

        /*
         * 이벤트 : 측정값 리스트 dataset  측정값 변경 시
         */
        this.ds_qamMeasureValue_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "MEASUREVALUE" || e.columnid == "MEASUREVALUE2") {
        		if(this.nfn_isNull(e.newvalue))  return;

        		var checkFlag = false;

        		var rowPos = this.ds_qamMeasureItem.rowposition;
        		var usl = this.ds_qamMeasureItem.getColumn(rowPos, "USL");
        		var lsl = this.ds_qamMeasureItem.getColumn(rowPos, "LSL");

        		var topbottomYn = this.ds_qamMeasureItem.getColumn(rowPos, "TOPBOTTOMYN");
        		var circuitstd = this.ds_qamMeasureItem.getColumn(rowPos, "CIRCUITSTD");

        		if(topbottomYn == "Y") {
        			if(circuitstd == "Top" && e.columnid == "MEASUREVALUE") {
        				checkFlag = true;
        			} else if(circuitstd == "Bottom" && e.columnid == "MEASUREVALUE2") {
        				checkFlag = true;
        			}
        		} else {
        			checkFlag = true;
        		}

        		//측정값 set.
        		var ret = "OK";

        		if(checkFlag) {
        			ret = this.fn_checkMeasureValue(e.newvalue, usl, lsl);
        			obj.setColumn(e.row, "RESULT", ret);           //화면색상변경용
        			obj.setColumn(e.row, "INSPECTIONRESULT", ret); //DB저장용
        		}
        		else
        		{
        			ret = this.fn_checkMeasureValue(e.newvalue, usl, lsl);
        			obj.setColumn(e.row, "ETCRESULT", ret);           //화면색상변경용
        		}

        		obj.setColumn(e.row, "MEASUREDATETIME", this.qamfn_setFormatDate("YYYY-MM-DD HH:MM:SS"));
        	}
        };

        /*
         * 이벤트 : 측정값 리스트 클릭 시 파일첨부 팝업 open
         */
        this.grd_qamMeasureValue_oncellclick = function(obj,e)
        {
        	if(e.cell == 4) {
        		var objDs = this.ds_qamMeasureValue;
        		var histKey = objDs.getColumn(objDs.rowposition, "TXNHISTKEY");
        		var resouceType = objDs.getColumn(objDs.rowposition, "RESOURCETYPE");
        		var resouceId = this.fv_lotId;

        		var jobSysCd = "QAM"; 								//업무구분코드 CMD,BAS....
        		var subDir = "daresult"; 					//세부업무약어
        		var resouceid = histKey + "|" + resouceType + "|*";	//테이블의 키 값
        		var resourcetype = "BAS_DARESULT"; 					//테이블명
        		var comments = "계측값등록"; 									//파일설명
        		var fileCnt = 1; 									//업로드수
        		var oArg = {arg_jobSysCd:jobSysCd
        					,arg_atchSrcKey:resouceid
        					,arg_tableName:resourcetype
        					,arg_desc:comments
        					,arg_subDir:subDir
        					,arg_fileCnt:fileCnt};

        		if(this.fv_isNew) {
        			this.gfn_openPopup("file_upload","cmd::CMSA01220P.xfdl",oArg,"");
        		} else {
        			this.gfn_openPopup("file_upload","cmd::CMSA01310P.xfdl",oArg,"");
        		}
        	}
        };

        /*
         * 이벤트 : 측정값 리스트 dataset add되었을 때 이벤트
         */
        this.ds_qamMeasureValue_onrowsetchanged = function(obj,e)
        {
        	if(e.reason == 12) {
        		//신규 시에 txn hist key 조회
        		this.fv_addRow = e.row;
        		this.fn_searcTxnHistKey();
        	}
        };

        /*
         * 이벤트 : 그리드에서 엔터 입력 시 행추가
         */
        this.grd_qamMeasureValue_onenterdown = function(obj,e)
        {
        	this.fn_add();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_close.addEventHandler("onclick",this.fn_close,this);
            this.div_basInfo.form.edt_lotNo.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.div_basInfo.form.btn_lotNo.addEventHandler("onclick",this.div_basInfo_btn_lotNo_onclick,this);
            this.Static02_02.addEventHandler("onclick",this.Static02_02_onclick,this);
            this.grd_qamMeasureValue.addEventHandler("oncellclick",this.grd_qamMeasureValue_oncellclick,this);
            this.grd_qamMeasureValue.addEventHandler("onenterdown",this.grd_qamMeasureValue_onenterdown,this);
            this.btnSave.addEventHandler("onclick",this.fn_save,this);
            this.btn_addRow.addEventHandler("onclick",this.fn_add,this);
            this.btn_delRow.addEventHandler("onclick",this.fn_delete,this);
            this.btn_x_close.addEventHandler("onclick",this.fn_close,this);
            this.ds_qamMeasureItem.addEventHandler("onrowposchanged",this.ds_qamMeasureItem_onrowposchanged,this);
            this.ds_qamBasInfo.addEventHandler("oncolumnchanged",this.ds_qamBasInfo_oncolumnchanged,this);
            this.ds_qamMeasureValue.addEventHandler("oncolumnchanged",this.ds_qamMeasureValue_oncolumnchanged,this);
            this.ds_qamMeasureValue.addEventHandler("onrowsetchanged",this.ds_qamMeasureValue_onrowsetchanged,this);
            this.ds_qamMeasureValueSort.addEventHandler("oncolumnchanged",this.ds_qamMeasureValue_oncolumnchanged,this);
            this.ds_qamMeasureValueSort.addEventHandler("onrowsetchanged",this.ds_qamMeasureValue_onrowsetchanged,this);
        };
        this.loadIncludeScript("QAM01100P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
