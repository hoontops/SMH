(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS01900M");
            this.set_titletext("CAM작업의뢰");
            if (Form == this.constructor)
            {
                this._setFormPosition(1590,810);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"GOVERNANCESTATE\" type=\"STRING\" size=\"256\"/><Column id=\"P_PERIOD_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"P_PERIOD_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"SPECOWNER\" type=\"STRING\" size=\"256\"/><Column id=\"CAMOWNER\" type=\"STRING\" size=\"256\"/><Column id=\"CAMSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEPTINPUT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"CAMREQUESTID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RCITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"RCITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"RCITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"SPECOWNER\" type=\"STRING\" size=\"256\"/><Column id=\"CAMOWNER\" type=\"STRING\" size=\"256\"/><Column id=\"MODELDELIVERYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PANELSIZE_Y\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PREVCUSTOMERVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"APPLYCUSTOMERVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"INNERLAYERCORRECTIONNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INNERLAYERCORRECTION\" type=\"STRING\" size=\"256\"/><Column id=\"OUTERLAYERCORRECTIONNAME\" type=\"STRING\" size=\"256\"/><Column id=\"OUTERLAYERCORRECTION\" type=\"STRING\" size=\"256\"/><Column id=\"OLBCORRECTION\" type=\"STRING\" size=\"256\"/><Column id=\"APPLYCOPPERFOILNAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPLYCOPPERFOIL\" type=\"STRING\" size=\"256\"/><Column id=\"APPLYLAYER\" type=\"STRING\" size=\"256\"/><Column id=\"APPLYLAYERCORRECTIONNAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPLYLAYERCORRECTION\" type=\"STRING\" size=\"256\"/><Column id=\"ZIPTERMINALNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ZIPTERMINAL\" type=\"STRING\" size=\"256\"/><Column id=\"PADCORRECTIONNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PADCORRECTION\" type=\"STRING\" size=\"256\"/><Column id=\"BBTSTANDARDNAME\" type=\"STRING\" size=\"256\"/><Column id=\"BBTSTANDARD\" type=\"STRING\" size=\"256\"/><Column id=\"MANUFACTURERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MANUFACTURER\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVER\" type=\"STRING\" size=\"256\"/><Column id=\"APPLYLAYERCORRECTION_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"ELONGATIONNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ELONGATION\" type=\"STRING\" size=\"256\"/><Column id=\"BBTTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"BBTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"JIGPRODUCTIONNAME\" type=\"STRING\" size=\"256\"/><Column id=\"JIGPRODUCTION\" type=\"STRING\" size=\"256\"/><Column id=\"TERMINALTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"TERMINALTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BBTMETHODNAME\" type=\"STRING\" size=\"256\"/><Column id=\"BBTMETHOD\" type=\"STRING\" size=\"256\"/><Column id=\"BBTDELIVERYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"MICROSHORTREQUESTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MICROSHORTREQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACEPLATING1NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACEPLATING1\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACEPLATING2NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACEPLATING2\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACEPLATING3NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACEPLATING3\" type=\"STRING\" size=\"256\"/><Column id=\"MKNOTATION\" type=\"STRING\" size=\"256\"/><Column id=\"SPECWEEK\" type=\"STRING\" size=\"256\"/><Column id=\"CAMWEEK\" type=\"STRING\" size=\"256\"/><Column id=\"GUIDESTANDARD\" type=\"STRING\" size=\"256\"/><Column id=\"PLATINGCONNECTINGLAYER\" type=\"STRING\" size=\"256\"/><Column id=\"OUTERGUIDENAME\" type=\"STRING\" size=\"256\"/><Column id=\"OUTERGUIDE\" type=\"STRING\" size=\"256\"/><Column id=\"VISIONPRESS\" type=\"STRING\" size=\"256\"/><Column id=\"TRIMMINGMARKNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TRIMMINGMARK\" type=\"STRING\" size=\"256\"/><Column id=\"DRILLSPEC\" type=\"STRING\" size=\"256\"/><Column id=\"OUTERLAYERSPEC\" type=\"STRING\" size=\"256\"/><Column id=\"INNERLAYERSPEC\" type=\"STRING\" size=\"256\"/><Column id=\"COVERLAYSPEC\" type=\"STRING\" size=\"256\"/><Column id=\"PSRSPEC\" type=\"STRING\" size=\"256\"/><Column id=\"LAYERADHESION\" type=\"STRING\" size=\"256\"/><Column id=\"CUTLASERSPEC\" type=\"STRING\" size=\"256\"/><Column id=\"PEELRSTSPEC\" type=\"STRING\" size=\"256\"/><Column id=\"ROUTERSPEC\" type=\"STRING\" size=\"256\"/><Column id=\"SILKSPEC\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLSPEC\" type=\"STRING\" size=\"256\"/><Column id=\"PANELGUIDESPEC\" type=\"STRING\" size=\"256\"/><Column id=\"ETCSPEC\" type=\"STRING\" size=\"256\"/><Column id=\"COMMENT1\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"SPECOWNERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CAMOWNERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CAMWORKSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"GOVERNANCESTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOTCREATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list_new", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CAMREQUESTID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RCITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"RCITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"RCITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"SPECOWNER\" type=\"STRING\" size=\"256\"/><Column id=\"CAMOWNER\" type=\"STRING\" size=\"256\"/><Column id=\"MODELDELIVERYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PANELSIZE_Y\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PREVCUSTOMERVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"APPLYCUSTOMERVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"INNERLAYERCORRECTIONNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INNERLAYERCORRECTION\" type=\"STRING\" size=\"256\"/><Column id=\"OUTERLAYERCORRECTIONNAME\" type=\"STRING\" size=\"256\"/><Column id=\"OUTERLAYERCORRECTION\" type=\"STRING\" size=\"256\"/><Column id=\"OLBCORRECTION\" type=\"STRING\" size=\"256\"/><Column id=\"APPLYCOPPERFOILNAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPLYCOPPERFOIL\" type=\"STRING\" size=\"256\"/><Column id=\"APPLYLAYER\" type=\"STRING\" size=\"256\"/><Column id=\"APPLYLAYERCORRECTIONNAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPLYLAYERCORRECTION\" type=\"STRING\" size=\"256\"/><Column id=\"ZIPTERMINALNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ZIPTERMINAL\" type=\"STRING\" size=\"256\"/><Column id=\"PADCORRECTIONNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PADCORRECTION\" type=\"STRING\" size=\"256\"/><Column id=\"BBTSTANDARDNAME\" type=\"STRING\" size=\"256\"/><Column id=\"BBTSTANDARD\" type=\"STRING\" size=\"256\"/><Column id=\"MANUFACTURERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MANUFACTURER\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVER\" type=\"STRING\" size=\"256\"/><Column id=\"APPLYLAYERCORRECTION_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"ELONGATIONNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ELONGATION\" type=\"STRING\" size=\"256\"/><Column id=\"BBTTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"BBTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"JIGPRODUCTIONNAME\" type=\"STRING\" size=\"256\"/><Column id=\"JIGPRODUCTION\" type=\"STRING\" size=\"256\"/><Column id=\"TERMINALTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"TERMINALTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BBTMETHODNAME\" type=\"STRING\" size=\"256\"/><Column id=\"BBTMETHOD\" type=\"STRING\" size=\"256\"/><Column id=\"BBTDELIVERYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"MICROSHORTREQUESTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MICROSHORTREQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACEPLATING1NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACEPLATING1\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACEPLATING2NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACEPLATING2\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACEPLATING3NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACEPLATING3\" type=\"STRING\" size=\"256\"/><Column id=\"MKNOTATION\" type=\"STRING\" size=\"256\"/><Column id=\"SPECWEEK\" type=\"STRING\" size=\"256\"/><Column id=\"CAMWEEK\" type=\"STRING\" size=\"256\"/><Column id=\"GUIDESTANDARD\" type=\"STRING\" size=\"256\"/><Column id=\"PLATINGCONNECTINGLAYER\" type=\"STRING\" size=\"256\"/><Column id=\"OUTERGUIDENAME\" type=\"STRING\" size=\"256\"/><Column id=\"OUTERGUIDE\" type=\"STRING\" size=\"256\"/><Column id=\"VISIONPRESS\" type=\"STRING\" size=\"256\"/><Column id=\"TRIMMINGMARKNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TRIMMINGMARK\" type=\"STRING\" size=\"256\"/><Column id=\"DRILLSPEC\" type=\"STRING\" size=\"256\"/><Column id=\"OUTERLAYERSPEC\" type=\"STRING\" size=\"256\"/><Column id=\"INNERLAYERSPEC\" type=\"STRING\" size=\"256\"/><Column id=\"COVERLAYSPEC\" type=\"STRING\" size=\"256\"/><Column id=\"PSRSPEC\" type=\"STRING\" size=\"256\"/><Column id=\"LAYERADHESION\" type=\"STRING\" size=\"256\"/><Column id=\"CUTLASERSPEC\" type=\"STRING\" size=\"256\"/><Column id=\"PEELRSTSPEC\" type=\"STRING\" size=\"256\"/><Column id=\"ROUTERSPEC\" type=\"STRING\" size=\"256\"/><Column id=\"SILKSPEC\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLSPEC\" type=\"STRING\" size=\"256\"/><Column id=\"PANELGUIDESPEC\" type=\"STRING\" size=\"256\"/><Column id=\"ETCSPEC\" type=\"STRING\" size=\"256\"/><Column id=\"COMMENT1\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"SPECOWNERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CAMOWNERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CAMWORKSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"GOVERNANCESTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOTCREATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_item", this);
            obj._setContents("<ColumnInfo><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERREV\" type=\"STRING\" size=\"256\"/><Column id=\"SPECWORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CAMWORKSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CAMWORKSTATENAME\" type=\"STRING\" size=\"256\"/><Column id=\"SPECOWNER\" type=\"STRING\" size=\"256\"/><Column id=\"SPECOWNERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CAMOWNER\" type=\"STRING\" size=\"256\"/><Column id=\"CAMOWNERNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_seq", this);
            obj._setContents("<ColumnInfo><Column id=\"CAMREQUESTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Button("btn_customSave",null,"16","26","24","29",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_new",null,"16","26","24","btn_customSave:25",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_com_new");
            obj.set_tooltiptext("Toolbar_New");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"16","26","24","btn_new:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_print");
            obj.set_tooltiptext("Toolbar_Print");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","3",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","111","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_text("CAM작업의뢰");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","0",null,null,"34","0","409",null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_text("CAM 요청정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("CAMREQUESTINFO");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","0","0","150","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_text("CAM 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("CAMLIST");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("Div01","0",null,null,"478","0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox01_00","555",null,"22.87%","174",null,"0",null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("100");
            obj.set_text("수정사항");
            obj.set_tooltiptext("COMMENT1");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox01_00_00","GroupBox01_00:2",null,null,"174","0","0",null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("105");
            obj.set_text("첨부파일");
            obj.set_tooltiptext("FILEATTACH");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00","0",null,"550","408",null,"0",null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("48");
            obj.set_text("기본정보");
            obj.set_tooltiptext("DEFAULTINFO");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox01","GroupBox00:5",null,null,"228","0","180",null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("43");
            obj.set_text("사양 정보");
            obj.set_tooltiptext("SPECINFORMATION");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_01","0","88","120","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("49");
            obj.set_text("고객사");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("F993645129314EB2A2423955D6AB814C");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_customer","127","88","118","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("0");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_customer","edt_customer:0","88","22","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_02","btn_customer:5","88","120","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("50");
            obj.set_text("등록일");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("WRITEDATE");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_itemA","127","118","118","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_itemA","edt_itemA:0","118","22","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_04","btn_itemA:5","118","120","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("51");
            obj.set_text("품목코드(변경후)");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("AFTERITEMID");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_itemB","label01_04:5","118","118","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("4");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_itemB","edt_itemB:0","118","22","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_03","0","118","120","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("52");
            obj.set_text("품목코드(변경전)");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("PREVITEMID");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_05","0","148","120","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("53");
            obj.set_text("Rev(변경전)");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("PREVITEMREV");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_09","0","208","120","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("54");
            obj.set_text("접수번호");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("REGISTERNUMBER");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_camRequestId","127","208","139","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("66");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_text("FA1");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_10","edt_camRequestId:5","208","120","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("55");
            obj.set_text("사양담당");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("SPECPERSON");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_itemA_cd","127","148","139","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("64");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_text("FA1");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_06","edt_itemA_cd:5","148","120","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("56");
            obj.set_text("Rev(변경후)");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("AFTERITEMREV");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_13","0","268","120","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("57");
            obj.set_text("진행구분");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("PROGRESSTYPE");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_17","0","328","120","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("58");
            obj.set_text("모델납기일");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("MODELDELIVERYDAY");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cbo_innerLayerCorrection","127","358","139","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("17");
            obj.set_codecolumn("C,InnerLayerCorrection,null,Y,Y");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_21","cbo_innerLayerCorrection:5","375","120","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("59");
            obj.set_text("OLB보정치");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("OLBCORRECTION");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cbo_processType","127","268","139","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("11");
            obj.set_codecolumn("C,ProcessType,null,Y,Y");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_14","cbo_processType:5","268","120","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("60");
            obj.set_text("제품타입");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("PRODUCTSHAPE");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Calendar("cal_modelDeliveryDate","127","328","139","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("15");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_18","cal_modelDeliveryDate:5","328","120","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("61");
            obj.set_text("적용 고객사REV.");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("APPLYCLIENTREV");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_24","0","448","120","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("62");
            obj.set_text("PAD 보정");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("PADCORRECTION");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cbo_padCorrection","127","448","139","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("23");
            obj.set_codecolumn("C,PadCorrection,null,Y,Y");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_25","cbo_padCorrection:5","448","120","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("63");
            obj.set_text("ZIP 단자");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("ZIPTERMINAL");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_itemB_cd","label01_06:5","148","139","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("65");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_text("FA1");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_specOwner","label01_10:5","208","118","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("6");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_specOwner","edt_specOwner:0","208","22","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cbo_productType","label01_14:5","268","139","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("12");
            obj.set_codecolumn("C,ProductType,null,Y,Y");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_applyCustomerVersion","label01_18:5","328","139","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("16");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cbo_zipTerminal","label01_25:5","448","139","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("24");
            obj.set_codecolumn("C,ZipTerminal,null,Y,Y");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_07","0","178","120","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("67");
            obj.set_text("품목명(변경전)");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("PREVITEMNAME");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_itemA_nm","127","178","139","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("68");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_08","edt_itemA_nm:5","178","120","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("69");
            obj.set_text("품목명(변경후)");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("AFTERITEMNAME");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_itemB_nm","label01_08:5","178","139","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("70");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cbo_jobType","127","238","139","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("8");
            obj.set_codecolumn("C,JobType,null,Y,Y");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_12","cbo_jobType:5","238","120","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("71");
            obj.set_text("CAM담당");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("CAMMAN");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_11","0","238","120","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("72");
            obj.set_text("작업구분");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("JOBTYPE");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_15","0","298","120","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("73");
            obj.set_text("PNL Size Y");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_19","0","358","120","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("74");
            obj.set_text("내층회로 보정치코드");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("INNERLAYERCORRECTION");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_22","0","418","120","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("75");
            obj.set_text("쏠림 동박 적용");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("APPLYINGCOPPERFOIL");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_pnlY","127","298","139","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("13");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_16","edt_pnlY:5","298","120","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("76");
            obj.set_text("기존 고객사REV.");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("EXISTCLIENTREV");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_20","0","388","120","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("77");
            obj.set_text("외층회로 보정치코드");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("OUTERLAYERCORRECTION");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cbo_applyCopperFoil","127","418","139","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("20");
            obj.set_codecolumn("C,CopperFoil,null,Y,Y");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_23","cbo_applyCopperFoil:5","418","120","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("78");
            obj.set_text("적용층");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("IMPEDANCEAPPLYLAYER");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_camOwner","label01_12:5","238","118","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("9");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_camOwner","edt_camOwner:0","238","22","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_prevCustomerVersion","label01_16:5","298","139","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("14");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cbo_outerLayerCorrection","127","388","139","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("19");
            obj.set_codecolumn("C,OuterLayerCorrection,null,Y,Y");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_applyLayer","label01_23:5","418","70","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("21");
            obj.set_text("2층");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cbo_applyLayerCorrection","edt_applyLayer:3","418","66","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("22");
            obj.set_codecolumn("C,ApplyLayer,null,Y,Y");
            obj.set_value("");
            obj.set_index("-1");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label02_01","GroupBox00:5","88","110","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("79");
            obj.set_text("BBT 기준");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("BBTSTANDARD");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cbo_bbtStandard","label02_01:5","88","9.53%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("25");
            obj.set_codecolumn("C,BBTStandard,null,Y,Y");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label02_02","cbo_bbtStandard:5","88","110","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("80");
            obj.set_text("제작처");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("MANUFACTURER");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cbo_manufactor","label02_02:5","88","9.53%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("26");
            obj.set_codecolumn("C,ManuFacturer,null,Y,Y");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label02_04","GroupBox00:5","118","110","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("82");
            obj.set_text("연신율");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("ELONGATION");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cbo_elonation","label02_04:5","118","9.53%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("28");
            obj.set_codecolumn("C,Elongation,null,Y,Y");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label02_05","cbo_elonation:5","118","110","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("81");
            obj.set_text("BBT 구분");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("BBTTYPE");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cbo_bbtType","label02_05:5","118","9.53%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("29");
            obj.set_codecolumn("C,BBTType,null,Y,Y");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label02_06","cbo_bbtType:5","118","110","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("83");
            obj.set_text("JIG제작");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("JIGPRODUCTION");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cbo_jigProduction","label02_06:5","118","9.46%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("30");
            obj.set_codecolumn("C,JigProduction,null,Y,Y");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label02_03_00","cbo_manufactor:5","88","110","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("84");
            obj.set_text("입고처");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("RECEIPTDEPT");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cbo_receiver","label02_03_00:5","88","9.46%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("27");
            obj.set_codecolumn("C,Receiver,null,Y,Y");
            obj.set_text("");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label02_07","GroupBox00:5","148","110","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("85");
            obj.set_text("단자구분");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("TERMINALTYPE");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cbo_terminalType","label02_07:5","148","9.53%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("31");
            obj.set_codecolumn("C,TerminalType,null,Y,Y");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label02_08","cbo_terminalType:5","148","110","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("86");
            obj.set_text("BBT방식");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("BBTMETHOD");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cbo_bbtMethod","label02_08:5","148","9.53%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("32");
            obj.set_codecolumn("C,BBTMethod,null,Y,Y");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label02_09","cbo_bbtMethod:5","148","110","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("87");
            obj.set_text("BBT 납기일");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("BBTDELIVERYDATE");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Calendar("cal_bbtDeliveryDate","label02_09:5","148","9.46%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("33");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label02_10","GroupBox00:5","178","110","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("88");
            obj.set_text("MICROSHORT");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cbo_microShort","label02_10:5","178","9.53%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("34");
            obj.set_codecolumn("C,Microshort,null,Y,Y");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label02_11","cbo_microShort:5","178","110","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("89");
            obj.set_text("Trimming인식 마크");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("TRIMMINGMARK");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cbo_trimming","label02_11:5","178","9.53%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("35");
            obj.set_codecolumn("C,TrimmingMark,null,Y,Y");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label02_12","cbo_trimming:5","178","110","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("90");
            obj.set_text("Vision Press 기준");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("VISIONPRESS");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_visionPress","label02_12:5","178","9.46%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("36");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label02_13","GroupBox00:5","208","110","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("91");
            obj.set_text("표면도금1");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("SURFACEPLATING1");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cbo_surfacePlating1","label02_13:5","208","9.53%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("37");
            obj.set_codecolumn("C,Surfaceplating1,null,Y,Y");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label02_14","cbo_surfacePlating1:5","208","110","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("92");
            obj.set_text("표면도금2");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("SURFACEPLATING2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cbo_surfacePlating2","label02_14:5","208","9.53%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("38");
            obj.set_codecolumn("C,Surfaceplating2,null,Y,Y");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label02_15","cbo_surfacePlating2:5","208","110","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("93");
            obj.set_text("표면도금3");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("SURFACEPLATING3");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cbo_surfacePlating3","label02_15:5","208","9.46%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("39");
            obj.set_codecolumn("C,Surfaceplating3,null,Y,Y");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label02_16","GroupBox00:5","238","110","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("94");
            obj.set_text("M/K 표기");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("MKNOTATION");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_mkNotation","label02_16:5","238","9.53%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("40");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label02_17","edt_mkNotation:5","238","110","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("95");
            obj.set_text("사양 주차표기");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("SPECWEEK");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_specWeek","label02_17:5","238","9.53%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("41");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label02_18","edt_specWeek:5","238","110","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("96");
            obj.set_text("CAM 주차표기");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("CAMWEEK");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_camWeek","label02_18:5","238","9.46%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("42");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label02_19","GroupBox00:5","268","110","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("98");
            obj.set_text("Guid 기준");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("GUIDESTANDARD");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_guideStandard","label02_19:5","268","9.53%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("44");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label02_20","edt_guideStandard:5","268","110","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("97");
            obj.set_text("도금선 연결층");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("PLATINGCONNECTINGLAYER");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_platingConnect","label02_20:5","268","9.53%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("45");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label02_21","edt_platingConnect:5","268","110","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("99");
            obj.set_text("외곽 Guide");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("OUTERGUIDE");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cbo_outerGuide","label02_21:5","268","9.46%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("46");
            obj.set_codecolumn("C,OuterGuide,null,Y,Y");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new TextArea("txa_olbCorrection","label01_21:5","360","139","51",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("18");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("auto");
            obj.set_wordWrap("char");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new TextArea("txa_00_00","GroupBox00:11","327","21.63%","141",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("47");
            obj.set_scrolltype("both");
            obj.set_scrollbartype("auto");
            obj.set_wordWrap("char");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_customer_id","0","91","60","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("101");
            obj.set_value("고객사ID(HIDDEN)");
            obj.set_visible("false");
            obj.set_text("고객사ID(HIDDEN)");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_specOwner_id","280","208","80","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("102");
            obj.set_value("사양담당ID(HIDDEN)");
            obj.set_visible("false");
            obj.set_text("사양담당ID(HIDDEN)");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_camOwner_id","280","236","80","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("103");
            obj.set_value("CAM담당ID(HIDDEN)");
            obj.set_visible("false");
            obj.set_text("CAM담당ID(HIDDEN)");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_createdTime","label01_02:5","88","139","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("104");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_text("FA1");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Grid("grd_reqList","0","34",null,null,"0","Static01_00:0",null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"등록일\" tooltiptext=\"WRITEDATE\"/><Cell col=\"2\" text=\"고객사\"/><Cell col=\"3\" text=\"품목코드(변경전)\" tooltiptext=\"PREVITEMID\"/><Cell col=\"4\" text=\"REV(변경전)\" tooltiptext=\"PREVITEMREV\"/><Cell col=\"5\" text=\"품목명(변경전)\" tooltiptext=\"PREVITEMNAME\"/><Cell col=\"6\" text=\"품목코드(변경후)\" tooltiptext=\"AFTERITEMID\"/><Cell col=\"7\" text=\"REV(변경후)\" tooltiptext=\"AFTERITEMREV\"/><Cell col=\"8\" text=\"품목명(변경후)\" tooltiptext=\"AFTERITEMNAME\"/><Cell col=\"9\" text=\"사양작업\" tooltiptext=\"SPECWORKTYPENAME\"/><Cell col=\"10\" text=\"CAM작업\" tooltiptext=\"CAMWORKSTATENAME\"/><Cell col=\"11\" text=\"작업구분\" tooltiptext=\"WORKTYPE\"/><Cell col=\"12\" text=\"진행구분\" tooltiptext=\"PROGRESSTYPE\"/><Cell col=\"13\" text=\"PNL Size Y\"/><Cell col=\"14\" text=\"모델납기일\" tooltiptext=\"MODELDELIVERYDAY\"/><Cell col=\"15\" text=\"사양담당\" tooltiptext=\"SPECIFICATIONMAN\"/><Cell col=\"16\" text=\"CAM담당\" tooltiptext=\"CAMPERSON\"/><Cell col=\"17\" text=\"제품타입\" tooltiptext=\"PRODUCTTYPE\"/><Cell col=\"18\" text=\"기존고객REV\" tooltiptext=\"EXISTCLIENTREV\"/><Cell col=\"19\" text=\"적용고객REV\" tooltiptext=\"APPLYCLIENTREV\"/><Cell col=\"20\" text=\"내층회로보정치\" tooltiptext=\"INNERLAYERCORRECTION\"/><Cell col=\"21\" text=\"외층회로보정치\" tooltiptext=\"OUTERLAYERCORRECTION\"/><Cell col=\"22\" text=\"OLB보정치\" tooltiptext=\"OLBCORRECTION\"/><Cell col=\"23\" text=\"쏠림동박적용\" tooltiptext=\"979E3ABB0B704F54A4E7F5624C94D1C9\"/><Cell col=\"24\" text=\"적용층\" tooltiptext=\"IMPEDANCEAPPLYLAYER\"/><Cell col=\"25\" text=\"APPLYLYE\"/><Cell col=\"26\" text=\"ZIP단자\" tooltiptext=\"ZIPTERMINAL\"/><Cell col=\"27\" text=\"PAD보정\" tooltiptext=\"PADCORRECTION\"/><Cell col=\"28\" text=\"BBT기준\" tooltiptext=\"BBTSTANDARD\"/><Cell col=\"29\" text=\"제작처\" tooltiptext=\"MANUFACTURER\"/><Cell col=\"30\" text=\"입고처\" tooltiptext=\"RECEIPTDEPT\"/><Cell col=\"31\" text=\"연신율\" tooltiptext=\"ELONGATION\"/><Cell col=\"32\" text=\"BBT구분\" tooltiptext=\"BBTTYPE\"/><Cell col=\"33\" text=\"JIG제작\" tooltiptext=\"BA1F794379D64F849C352160FC7DD48B\"/><Cell col=\"34\" text=\"단자구분\" tooltiptext=\"TERMINALTYPE\"/><Cell col=\"35\" text=\"BBT방식\" tooltiptext=\"BBTMETHOD\"/><Cell col=\"36\" text=\"BBT납기일\" tooltiptext=\"BBTDELIVERYDATE\"/><Cell col=\"37\" text=\"MICROSHORT\"/><Cell col=\"38\" text=\"표면도금1\" tooltiptext=\"SURFACEPLATING1\"/><Cell col=\"39\" text=\"표면도급2\" tooltiptext=\"SURFACEPLATING2\"/><Cell col=\"40\" text=\"표면도급3\" tooltiptext=\"SURFACEPLATING3\"/><Cell col=\"41\" text=\"MK표기\" tooltiptext=\"MKNOTATION\"/><Cell col=\"42\" text=\"사양주차표기\" tooltiptext=\"SPECWEEK\"/><Cell col=\"43\" text=\"Guid기준\" tooltiptext=\"GUIDESTANDARD\"/><Cell col=\"44\" text=\"도금선연결층\" tooltiptext=\"PLATINGCONNECTINGLAYER\"/><Cell col=\"45\" text=\"외곽Guide\" tooltiptext=\"OUTERGUIDE\"/><Cell col=\"46\" text=\"Vision Press기준\" tooltiptext=\"VISIONPRESS\"/><Cell col=\"47\" text=\"Trimming인식마크\" tooltiptext=\"TRIMMINGMARK\"/><Cell col=\"48\" text=\"접수번호\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CREATEDTIME\"/><Cell col=\"2\" text=\"bind:CUSTOMERNAME\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:ITEMID\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:ITEMVERSION\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"5\" textAlign=\"left\" displaytype=\"text\" text=\"bind:ITEMNAME\"/><Cell col=\"6\" text=\"bind:RCITEMID\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:RCITEMVERSION\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"8\" textAlign=\"left\" displaytype=\"text\" text=\"bind:RCITEMNAME\"/><Cell col=\"9\" text=\"bind:GOVERNANCESTATE\" displaytype=\"combotext\" combocodecol=\"C,GovernanceState,,Y,N\"/><Cell col=\"10\" text=\"bind:CAMWORKSTATE\" displaytype=\"combotext\" combocodecol=\"C,CAMState,,Y,N\"/><Cell col=\"11\" text=\"bind:JOBTYPENAME\"/><Cell col=\"12\" text=\"bind:PROCESSTYPENAME\"/><Cell col=\"13\" text=\"bind:PANELSIZE_Y\" displaytype=\"text\" textAlign=\"right\"/><Cell col=\"14\" text=\"bind:MODELDELIVERYDATE\"/><Cell col=\"15\" text=\"bind:SPECOWNERNAME\"/><Cell col=\"16\" text=\"bind:CAMOWNERNAME\"/><Cell col=\"17\" text=\"bind:PRODUCTTYPENAME\"/><Cell col=\"18\" text=\"bind:PREVCUSTOMERVERSION\" textAlign=\"left\"/><Cell col=\"19\" text=\"bind:APPLYCUSTOMERVERSION\" textAlign=\"left\"/><Cell col=\"20\" text=\"bind:INNERLAYERCORRECTIONNAME\"/><Cell col=\"21\" text=\"bind:OUTERLAYERCORRECTIONNAME\"/><Cell col=\"22\" text=\"bind:OLBCORRECTION\"/><Cell col=\"23\" text=\"bind:APPLYCOPPERFOILNAME\"/><Cell col=\"24\" text=\"bind:APPLYLAYER\"/><Cell col=\"25\" text=\"bind:APPLYLAYERCORRECTIONNAME\"/><Cell col=\"26\" text=\"bind:ZIPTERMINALNAME\"/><Cell col=\"27\" text=\"bind:PADCORRECTIONNAME\"/><Cell col=\"28\" text=\"bind:BBTSTANDARDNAME\"/><Cell col=\"29\" text=\"bind:MANUFACTURERNAME\"/><Cell col=\"30\" text=\"bind:RECEIVERNAME\"/><Cell col=\"31\" text=\"bind:ELONGATIONNAME\"/><Cell col=\"32\" text=\"bind:BBTTYPENAME\"/><Cell col=\"33\" text=\"bind:JIGPRODUCTIONNAME\"/><Cell col=\"34\" text=\"bind:TERMINALTYPENAME\"/><Cell col=\"35\" text=\"bind:BBTMETHODNAME\"/><Cell col=\"36\" text=\"bind:BBTDELIVERYDATE\"/><Cell col=\"37\" text=\"bind:MICROSHORTREQUESTNAME\"/><Cell col=\"38\" text=\"bind:SURFACEPLATING1NAME\"/><Cell col=\"39\" text=\"bind:SURFACEPLATING2NAME\"/><Cell col=\"40\" text=\"bind:SURFACEPLATING3NAME\"/><Cell col=\"41\" text=\"bind:MKNOTATION\"/><Cell col=\"42\" text=\"bind:SPECWEEK\"/><Cell col=\"43\" text=\"bind:GUIDESTANDARD\"/><Cell col=\"44\" text=\"bind:PLATINGCONNECTINGLAYER\"/><Cell col=\"45\" text=\"bind:OUTERGUIDENAME\"/><Cell col=\"46\" text=\"bind:VISIONPRESS\"/><Cell col=\"47\" text=\"bind:TRIMMINGMARKNAME\"/><Cell col=\"48\" text=\"bind:CAMREQUESTID\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_reqList",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_copy",null,"6","27","24","btn_xlDn_grd_reqList:0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_grdCopy");
            obj.set_tooltiptext("GridCopyRow");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_list","sta_subTitle:0","0","200","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_delRow2",null,"6","29","24","btn_copy:0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            obj.set_visible("true");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_file","66.05%",null,null,"150","0","10",null,null,null,null,this.div_work.form);
            obj.set_taborder("8");
            obj.set_url("common::com_file_b2.xfdl");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("staSearchPeriod","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("등록기간");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("7693F1DF1E5842AD972326E4CE8D5234");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear2","171","325","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","325","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"30","15","400","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","30","15","400",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"305","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","331","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPlantList","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("STOPSITE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cboPlantList","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("24");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cboPeriodType","15","60","88","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("calStartDt","108","35","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_innerdataset("");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("calEndDt","108","60","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_innerdataset("");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_01",null,"55","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_01",null,"80","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("26");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staJobType","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("27");
            obj.set_text("작업구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("WORKTYPE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02",null,"130","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("28");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cboWorkType","108","135","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_codecolumn("C,JobType,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProductionType","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("29");
            obj.set_text("제품타입");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTIONTYPE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cboProductionType","108","110","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_codecolumn("C,ProductType,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00",null,"155","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("30");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03",null,"30","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("31");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00",null,"55","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("32");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00",null,"80","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("33");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00",null,"130","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("34");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00",null,"155","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("35");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProductCode","0","185","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("36");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMCODE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00_00",null,"180","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("37");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProductName","0","235","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("38");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMNAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00_00_00",null,"205","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("39");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staGovernanceState","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("40");
            obj.set_text("진행구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PROCESSINGSTATUS");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00_00_00_00",null,"255","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("41");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00_00_00_00_00",null,"280","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("42");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staSpecOwner","0","285","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("43");
            obj.set_text("사양담당자");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("SPECOWNER");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00_00_00_00_00_00",null,"305","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("44");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staCamOwner","0","260","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("45");
            obj.set_text("CAM담당자");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CAMOWNER");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_00",null,"230","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("46");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_state","108","160","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_codecolumn("C,ProcessType,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_00_00",null,"280","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("47");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_item","108","185",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_item",null,"185","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_01",null,"180","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("48");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_specOwner","108","285",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_specOwner",null,"285","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_00_00_00",null,"305","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("49");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_camOwner","108","260",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_camOwner",null,"260","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_item_nm","108","235","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("50");
            obj.set_readonly("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_01_00",null,"205","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("51");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staCustomer","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("52");
            obj.set_text("고객사");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("F993645129314EB2A2423955D6AB814C");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_customer",null,"85","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_01_01",null,"105","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("53");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_customer","108","85",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_01_01_00",null,"105","45","5","229",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("54");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_item_id","73","496","140","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("55");
            obj.set_value("품목ID (HIDDEN)");
            obj.set_visible("false");
            obj.set_text("품목ID (HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_customer_id","74","461","140","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("56");
            obj.set_value("고객사ID(HIDDEN)");
            obj.set_visible("false");
            obj.set_text("고객사ID(HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_specOwner_id","74","531","140","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("57");
            obj.set_value("사양담당자ID (HIDDEN)");
            obj.set_visible("false");
            obj.set_text("사양담당자ID (HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_camOwner_id","74","568","140","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("58");
            obj.set_value("CAM담당자ID (HIDDEN)");
            obj.set_visible("false");
            obj.set_text("CAM담당자ID (HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00_00_00_00_01",null,"255","45","5","89",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("59");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProductName00","0","210","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("60");
            obj.set_text("Rev.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMVERSION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_item_cd","108","210","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("61");
            obj.set_readonly("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","242","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1590,810,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tab_search.Tabpage1.form.cboPlantList","value","ds_search","PLANTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tab_search.Tabpage1.form.calStartDt","value","ds_search","P_PERIOD_PERIODFR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab_search.Tabpage1.form.calEndDt","value","ds_search","P_PERIOD_PERIODTO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tab_search.Tabpage1.form.edt_customer_id","value","ds_search","CUSTOMER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab_search.Tabpage1.form.cboWorkType","value","ds_search","JOBTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tab_search.Tabpage1.form.cboProductionType","value","ds_search","PRODUCTIONTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tab_search.Tabpage1.form.edt_item_id","value","ds_search","ITEMID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","tab_search.Tabpage1.form.edt_specOwner_id","value","ds_search","SPECOWNER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","tab_search.Tabpage1.form.edt_camOwner_id","value","ds_search","CAMOWNER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","tab_search.Tabpage1.form.cbo_state","value","ds_search","GOVERNANCESTATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_work.form.Div01.form.edt_customer_id","value","ds_list_new","CUSTOMERID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_work.form.Div01.form.edt_itemA","value","ds_list_new","ITEMID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_work.form.Div01.form.edt_itemA_cd","value","ds_list_new","ITEMVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_work.form.Div01.form.edt_itemA_nm","value","ds_list_new","ITEMNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_work.form.Div01.form.edt_itemB","value","ds_list_new","RCITEMID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_work.form.Div01.form.edt_itemB_cd","value","ds_list_new","RCITEMVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_work.form.Div01.form.edt_itemB_nm","value","ds_list_new","RCITEMNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_work.form.Div01.form.edt_camRequestId","value","ds_list_new","CAMREQUESTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_work.form.Div01.form.cbo_jobType","value","ds_list_new","JOBTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_work.form.Div01.form.cbo_processType","value","ds_list_new","PROCESSTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_work.form.Div01.form.edt_pnlY","value","ds_list_new","PANELSIZE_Y");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_work.form.Div01.form.cal_modelDeliveryDate","value","ds_list_new","MODELDELIVERYDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_work.form.Div01.form.cbo_innerLayerCorrection","value","ds_list_new","INNERLAYERCORRECTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_work.form.Div01.form.cbo_outerLayerCorrection","value","ds_list_new","OUTERLAYERCORRECTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_work.form.Div01.form.txa_olbCorrection","value","ds_list_new","OLBCORRECTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_work.form.Div01.form.edt_specOwner","value","ds_list_new","SPECOWNERNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_work.form.Div01.form.edt_camOwner","value","ds_list_new","CAMOWNERNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_work.form.Div01.form.edt_specOwner_id","value","ds_list_new","SPECOWNER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_work.form.Div01.form.edt_camOwner_id","value","ds_list_new","CAMOWNER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_work.form.Div01.form.cbo_productType","value","ds_list_new","PRODUCTTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_work.form.Div01.form.edt_prevCustomerVersion","value","ds_list_new","PREVCUSTOMERVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_work.form.Div01.form.edt_applyCustomerVersion","value","ds_list_new","APPLYCUSTOMERVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","div_work.form.Div01.form.edt_applyLayer","value","ds_list_new","APPLYLAYER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","div_work.form.Div01.form.cbo_applyLayerCorrection","value","ds_list_new","APPLYLAYERCORRECTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","div_work.form.Div01.form.cbo_zipTerminal","value","ds_list_new","ZIPTERMINAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div_work.form.Div01.form.cbo_padCorrection","value","ds_list_new","PADCORRECTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","div_work.form.Div01.form.cbo_applyCopperFoil","value","ds_list_new","APPLYCOPPERFOIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","div_work.form.Div01.form.txa_00_00","value","ds_list_new","COMMENT1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","div_work.form.Div01.form.cbo_bbtStandard","value","ds_list_new","BBTSTANDARD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","div_work.form.Div01.form.cbo_manufactor","value","ds_list_new","MANUFACTURER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","div_work.form.Div01.form.cbo_receiver","value","ds_list_new","RECEIVER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_work.form.Div01.form.edt_createdTime","value","ds_list_new","CREATEDTIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","div_work.form.Div01.form.cbo_elonation","value","ds_list_new","ELONGATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","div_work.form.Div01.form.cbo_bbtType","value","ds_list_new","BBTTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","div_work.form.Div01.form.cbo_jigProduction","value","ds_list_new","JIGPRODUCTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","div_work.form.Div01.form.cbo_terminalType","value","ds_list_new","TERMINALTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","div_work.form.Div01.form.cbo_bbtMethod","value","ds_list_new","BBTMETHOD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","div_work.form.Div01.form.cal_bbtDeliveryDate","value","ds_list_new","BBTDELIVERYDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","div_work.form.Div01.form.cbo_microShort","value","ds_list_new","MICROSHORTREQUEST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","div_work.form.Div01.form.cbo_trimming","value","ds_list_new","TRIMMINGMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","div_work.form.Div01.form.edt_visionPress","value","ds_list_new","VISIONPRESS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","div_work.form.Div01.form.cbo_surfacePlating1","value","ds_list_new","SURFACEPLATING1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","div_work.form.Div01.form.cbo_surfacePlating2","value","ds_list_new","SURFACEPLATING2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","div_work.form.Div01.form.cbo_surfacePlating3","value","ds_list_new","SURFACEPLATING3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","div_work.form.Div01.form.edt_mkNotation","value","ds_list_new","MKNOTATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","div_work.form.Div01.form.edt_specWeek","value","ds_list_new","SPECWEEK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","div_work.form.Div01.form.edt_camWeek","value","ds_list_new","CAMWEEK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","div_work.form.Div01.form.edt_guideStandard","value","ds_list_new","GUIDESTANDARD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","div_work.form.Div01.form.edt_platingConnect","value","ds_list_new","PLATINGCONNECTINGLAYER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","div_work.form.Div01.form.cbo_outerGuide","value","ds_list_new","OUTERGUIDE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_work.form.Div01.form.edt_customer","value","ds_list_new","CUSTOMERNAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_file_b2.xfdl");
        };
        
        // User Script
        this.addIncludeScript("BAS01900M.xfdl","lib::lib_bas.xjs");
        this.registerScript("BAS01900M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: CAM작업 의뢰
         * 파일명 		: BAS01900M.xfdl
         * 작성자 		: 최성민
         * 작성일 		: 2021.04.06
         *
         * 설  명		: 기준관리 - CAM작업 의뢰
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.06	최성민   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.searchDiv = this.tab_search.Tabpage1.form;
        this.frmDiv = this.div_work.form.Div01.form;
        this.g_idx	= null;
        this.g_new	= false;
        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.basfn_getPeriodData("ds_periodType");
        	this.basfn_saveBtn(this.div_header.form.btn_customSave); //저장버튼 공통처리 함수 호출
        	//그리드 틀고정
        	//this.nfn_cellFix(this.div_work.form.grd_reqList, 6);
        	this.div_work.form.div_file.form.sta_subTitle.set_visible(false);
        	this.basfn_setCustomQueryCmb(this.tab_search.Tabpage1.form.cboPlantList // Object
        							, "selectSiteList,ALL,Y,A" // OPTION
        							, null);	  // 추가 파라미터
        	this.fn_formInit();

        	//2021-05-13 최초 화면 조회시에 신규입력 가능하도록 수정 (임용희 차장 요청)
        	this.fn_newData();
        	//this.ds_list_new.applyChange();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	if (this.gfn_dsIsUpdated(this.ds_list_new) && !this.g_new) {
        		if(!this.gfn_Message("WRITTENBEDELETE", null, "conf", "yesno"))
        		{
        			return;
        		};
        	}

        	this.g_new	= false;

        	this.ds_list.clearData();
        	var sSvcID 			= "selectCamRequestList";
        	var sController 	= "/bas01900/selectCamRequestList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_list=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 상세
         */
        this.fn_selectDetail = function (camRequestId)
        {
        	this.ds_list_new.clearData();
        	var sSvcID 			= "selectCamRequestListDetail";
        	var sController 	= "/bas01900/selectCamRequestList.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_list_new=output";
        	var sArgs 			= "";
        		sArgs 			+= this.gfn_setParam("CAMREQUESTID", camRequestId);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, false); //동기 호출
        };


        /*
         * 기능 : 상세
         */
        this.fn_selectCamRequestKey = function ()
        {
        	this.ds_seq.clearData();
        	var sSvcID 			= "selectCamRequestId";
        	var sController 	= "/bas01900/selectCamRequestId.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_seq=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, false); //동기 호출
        };

        /*
         * 기능 : 상세
         */
        this.fn_selectItemDetail = function (type, itemId, itemVersion)
        {
        	this.ds_item.clearData();
        	var sSvcID 			= "selectItemDetail"+type;
        	var sController 	= "/bas01900/selectItemDetail.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_item=output";
        	var sArgs 			= "";
        		sArgs 			+= this.gfn_setParam("ITEMID", itemId);
        		sArgs 			+= this.gfn_setParam("ITEMVERSION", itemVersion);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, false); //동기 호출
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	if (!this.gfn_dsIsUpdated(this.ds_list_new) && !this.gfn_dsIsUpdated(this.ds_list))
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}

        	//변경후 품목코드가 존재하지 않으면 변경전 품목코드 입력불가
        	var itemA = this.div_work.form.Div01.form.edt_itemA.value;
        	var itemB = this.div_work.form.Div01.form.edt_itemB.value;

        	if(this.nfn_isNull(itemB) && !this.nfn_isNull(itemA)){
        		this.gfn_Message("REQUIREITEMB", null, "warning", "ok");
        		return;
        	}
        	this.g_new = false;

        	var camRequestId = this.ds_list_new.getColumn(0, "CAMREQUESTID");

        	if(this.nfn_isNull(camRequestId)){ //신규Data
        		this.g_idx = 0;
        	} else {
        		this.g_idx = this.ds_list.rowposition;	//기존Data
        	}

        // -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveCamRequest";
        	var sController 	= "/bas01900/saveCamRequest.do";
        	var sInDatasets 	= "INPUT=ds_list_new:U INPUT_D=ds_list:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 복사
         */
        this.fn_copy = function(obj,e)
        {
        	var dsObj = this.ds_list;
        	dsObj.set_enableevent(false);
        	var dsPosition = dsObj.rowposition;
        		if(dsPosition < 0) {
        			this.gfn_Message("NoSelections", "", "warning", "ok");
        			return;
        		} else {
        			var row = dsObj.insertRow(dsPosition+1);
        			dsObj.copyRow(row, dsObj, dsPosition);
        			dsObj.setColumn(row, "CAMREQUESTID", null);
        			dsObj.setColumn(row, "CREATEDTIME", null);
        			//신규ID 채번
        			this.fn_selectCamRequestKey();

        			dsObj.setColumn(row, "CAMREQUESTID", this.ds_list_new.getColumn(0, "CAMREQUESTID"));
        			var dsObjNew = this.ds_list_new;
        			dsObjNew.clearData();
        			var nrow = dsObjNew.insertRow();
        			dsObjNew.copyRow(nrow, dsObj, row);
        		}

        	dsObj.set_enableevent(true);
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
        		if (trId == "saveCamRequest")
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.ds_list_new.clearData();
        			this.div_work.form.div_file.set_enable(false);
        			this.fn_search();
        		} else if (trId == "selectCamRequestList") {
         			this.ds_list.set_enableevent(false);
         			this.ds_list.set_rowposition(this.g_idx);
         			this.ds_list.set_enableevent(true);
        			this.fn_selectData(this.g_idx);
        		} else if (trId == "selectCamRequestId"){
        			this.ds_list_new.setColumn(0, "CAMREQUESTID", this.ds_seq.getColumn(0,"CAMREQUESTID"));
        			this.div_work.form.div_file.set_enable(true);
        			this.fn_searchAttach(this.ds_seq.getColumn(0,"CAMREQUESTID"));
        		} else if (trId == "selectItemDetailA"){
        			this.ds_list_new.setColumn(0, "PREVCUSTOMERVERSION", this.ds_item.getColumn(0,"CUSTOMERREV"));
        		} else if (trId == "selectItemDetailB"){
        			this.ds_list_new.setColumn(0, "CUSTOMERID", this.ds_item.getColumn(0,"CUSTOMERID"));
        			this.ds_list_new.setColumn(0, "CUSTOMERNAME", this.ds_item.getColumn(0,"CUSTOMERNAME"));
        			this.ds_list_new.setColumn(0, "APPLYCUSTOMERVERSION", this.ds_item.getColumn(0,"CUSTOMERREV"));
        			this.ds_list_new.setColumn(0, "SPECOWNER", this.ds_item.getColumn(0,"SPECOWNER"));
        			this.ds_list_new.setColumn(0, "SPECOWNERNAME", this.ds_item.getColumn(0,"SPECOWNERNAME"));
        			this.ds_list_new.setColumn(0, "CAMOWNER", this.ds_item.getColumn(0,"CAMOWNER"));
        			this.ds_list_new.setColumn(0, "CAMOWNERNAME", this.ds_item.getColumn(0,"CAMOWNERNAME"));
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

        	oArg.arg_type = "B";
        	oArg.arg_popupCd = popId;
        	oArg.arg_popupNm = "";
        	oArg.arg_paramCols = "";
        	oArg.arg_paramValues = "";
        	oArg.arg_searchStr = "";

        	if(svcId=="SCH_CUSTOMER"
        	   ||svcId=="SCH_SPEC_OWNER"
        	   ||svcId=="SCH_CAM_OWNER"
        	   ){ //검색조건에서 고객조회시 다건선택 가능하도록
        			oArg.arg_type = "CA";
        	 }


        		if(popId=="P00042"){ //고객사 조회
        			if(svcId=="SCH_CUSTOMER"){
        				oArg.arg_type = "CA";
        				oArg.arg_searchStr = "SEARCH_KEY=" + this.nfn_nvl(this.tab_search.Tabpage1.form.edt_customer.value,"");
        			} else {
        				oArg.arg_type = "BA";
        				oArg.arg_searchStr = "SEARCH_KEY=" + this.nfn_nvl(this.frmDiv.edt_customer.value,"");
        			}

        			oArg.arg_rtnCols = "CUSTOMERID|CUSTOMERNAME";
        		} else if (popId=="P00138" && svcId=="SCH_ITEM"){	//품목 조회
        			oArg.arg_type = "BA";
        			oArg.arg_rtnCols = "ITEMID|ITEMNAME|ITEMVERSION";
        			oArg.arg_searchStr = this.nfn_nvl(this.searchDiv.edt_item.value, "");
        		} else if (popId=="P00138" && svcId=="FRM_ITEMA"){	//품목 조회
        			oArg.arg_type = "BA";
        			oArg.arg_rtnCols = "ITEMID|ITEMNAME|ITEMVERSION";
        			oArg.arg_searchStr = this.nfn_nvl(this.frmDiv.edt_itemA.value, "");
        		} else if (popId=="P00138" && svcId=="FRM_ITEMB"){	//품목 조회
        			oArg.arg_type = "BA";
        			oArg.arg_rtnCols = "ITEMID|ITEMNAME|ITEMVERSION";
        			oArg.arg_searchStr = this.nfn_nvl(this.frmDiv.edt_itemB.value, "");
        		} else if (popId=="P00062"){	//담당자 조회
        			oArg.arg_type = "BA";
        			oArg.arg_rtnCols = "USERID|USERNAME";
        			oArg.arg_paramCols = "USERGROUPID";
        			if(svcId=="SCH_SPEC_OWNER" || svcId=="FRM_SPEC_OWNER"){ //사양담당자
        				oArg.arg_paramValues = "SPECOWNER";
        			} else if(svcId=="SCH_CAM_OWNER" || svcId=="FRM_CAM_OWNER"){ //CAM담당자
        				oArg.arg_paramValues = "CAMOWNER";
        			}

        			if(svcId=="SCH_SPEC_OWNER" ){ //사양담당자
        				oArg.arg_type = "CA";
        				oArg.arg_searchStr = "SEARCH_KEY=" + this.nfn_nvl(this.tab_search.Tabpage1.form.edt_specOwner.value,"");
        			}
        			if(svcId=="SCH_CAM_OWNER" ){ //CAM담당자
        				oArg.arg_type = "CA";
        				oArg.arg_searchStr = "SEARCH_KEY=" + this.nfn_nvl(this.tab_search.Tabpage1.form.edt_camOwner.value,"");
        			}
        			if(svcId=="FRM_SPEC_OWNER" ){ //사양담당자
        				oArg.arg_searchStr = "SEARCH_KEY=" + this.nfn_nvl(this.frmDiv.edt_specOwner.value,"");
        			}
        			if(svcId=="FRM_CAM_OWNER" ){ //CAM담당자
        				oArg.arg_searchStr = "SEARCH_KEY=" + this.nfn_nvl(this.frmDiv.edt_camOwner.value,"");
        			}
        		}

        		if(popId=="P00138"){	//품목조회
        			opts = "width=800,height=500";
        			this.gfn_openPopup(popupId,"bas::BAS01900P.xfdl",oArg,opts);
        		} else {
        			this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        		}
        }

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "SCH_CUSTOMER")
        	{
        		var objKey = "";
        		var objId = "";

        		for(var i=0; i<rtn.length; i++){
        			var colArray = rtn[i];
        			objKey += ","+ colArray[1];
        			objId  += ","+ colArray[0];
        		}

        		this.searchDiv.edt_customer.set_value(objKey.substr(1));
        		this.searchDiv.edt_customer_id.set_value(objId.substr(1));
        	}
        	if(sPopupId == "SCH_ITEM")
        	{
        		var objVersion = rtn[2];
        		var objId = rtn[0];
        		var objNm = rtn[1];

        		this.searchDiv.edt_item.set_value(objId);
        		this.searchDiv.edt_item_id.set_value(objId);
        		this.searchDiv.edt_item_nm.set_value(objNm);
        		this.searchDiv.edt_item_cd.set_value(objVersion);

        	}
        	if(sPopupId == "SCH_SPEC_OWNER")
        	{
        		var objKey = "";
        		var objId = "";

        		for(var i=0; i<rtn.length; i++){
        			var colArray = rtn[i];
        			objKey += ","+ colArray[1];
        			objId  += ","+ colArray[0];
        		}

        		this.searchDiv.edt_specOwner.set_value(objKey.substr(1));
        		this.searchDiv.edt_specOwner_id.set_value(objId.substr(1));
        	}
        	if(sPopupId == "SCH_CAM_OWNER")
        	{
        		var objKey = "";
        		var objId = "";

        		for(var i=0; i<rtn.length; i++){
        			var colArray = rtn[i];
        			objKey += ","+ colArray[1];
        			objId  += ","+ colArray[0];
        		}

        		this.searchDiv.edt_camOwner.set_value(objKey.substr(1));
        		this.searchDiv.edt_camOwner_id.set_value(objId.substr(1));
        	}
        	if(sPopupId == "FRM_CUSTOMER")
        	{
        		this.frmDiv.edt_customer.set_value(rtn[1]);
        		this.frmDiv.edt_customer_id.set_value(rtn[0]);
        	}
        	if(sPopupId == "FRM_ITEMA")
        	{
        		this.frmDiv.edt_itemA.set_value(rtn[0]);
        		this.frmDiv.edt_itemA_nm.set_value(rtn[1]);
        		this.frmDiv.edt_itemA_cd.set_value(rtn[2]);
        		//ITEM MASTER정보 추가조회
        		this.fn_selectItemDetail("A", rtn[0], rtn[2]);
        	}
        	if(sPopupId == "FRM_ITEMB")
        	{
        		this.frmDiv.edt_itemB.set_value(rtn[0]);
        		this.frmDiv.edt_itemB_nm.set_value(rtn[1]);
        		this.frmDiv.edt_itemB_cd.set_value(rtn[2]);

        		//ITEM MASTER정보 추가조회
        		this.fn_selectItemDetail("B", rtn[0], rtn[2]);
        	}
        	if(sPopupId == "FRM_SPEC_OWNER")
        	{
        		this.frmDiv.edt_specOwner.set_value(rtn[1]);
        		this.frmDiv.edt_specOwner_id.set_value(rtn[0]);
        	}
        	if(sPopupId == "FRM_CAM_OWNER")
        	{
        		this.frmDiv.edt_camOwner.set_value(rtn[1]);
        		this.frmDiv.edt_camOwner_id.set_value(rtn[0]);
        	}

        }

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/

        /*
         * 기능 : 최초 호출되는 초기화 함수
         */
        this.fn_formInit = function ()
        {
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.searchDiv.cboPlantList.set_value(this.gf_getSiteType());
        	this.searchDiv.cboPeriodType.set_value("THISMONTH"); // 금월
        	this.searchDiv.cboWorkType.set_value(null);
        	this.searchDiv.cboProductionType.set_value(null);
        	this.searchDiv.cbo_state.set_value(null);
        	this.searchDiv.edt_customer.set_value(null);
        	this.searchDiv.edt_customer_id.set_value(null);
        	this.searchDiv.edt_item.set_value(null);
        	this.searchDiv.edt_item_id.set_value(null);
        	this.searchDiv.edt_item_nm.set_value(null);
        	this.searchDiv.edt_item_cd.set_value(null);
        	this.searchDiv.edt_specOwner.set_value(null);
        	this.searchDiv.edt_specOwner_id.set_value(null);
        	this.searchDiv.edt_camOwner.set_value(null);
        	this.searchDiv.edt_camOwner_id.set_value(null);
        	this.fn_setDate("THISMONTH");
        	this.ds_list.clearData();
        	this.ds_list_new.clearData();
        }

        /*
         * 기능 : 검색일자 변경시 검색구분을 [사용자지정]으로 변경
         */
        this.fn_changeCustom = function ()
        {
        	this.searchDiv.cboPeriodType.set_value("CUSTOM");
        }

        /*
         * 기능 : 검색일자 바인딩 함수
         */
        this.fn_setDate = function (periodType)
        {
        	this.searchDiv.calStartDt.set_value(this.ds_periodType.getColumn(0,periodType+"_S"));
        	this.searchDiv.calEndDt.set_value(this.ds_periodType.getColumn(0,periodType+"_E"));
        	//접수일 초기세팅
        	//this.frmDiv.calReceiptDt.set_value(this.ds_periodType.getColumn(0,"THISDAY_S"));
        }

        /*
         * 초기화 함수
         */
        this.fn_newData = function()
        {
        	var dsObj = this.ds_list_new;
        	if(dsObj == null) return;

        	//수정중인 데이터가 존재하면 확인
        	if (this.gfn_dsIsUpdated(dsObj)){
        		var bOK = this.gfn_Message("WRITTENBEDELETE", null, "conf", "yesno");
        		if(!bOK)return;
        	}

        	dsObj.clearData();
        	var row = dsObj.insertRow(dsObj.rowposition+1);

        	this.g_idx = 0;

        	//신규ID 채번
        	this.fn_selectCamRequestKey();

        	this.div_work.form.Div01.form.set_enable(true);
        	this.div_work.form.div_file.form.div_fup.form.fup_AttachedFile.set_enable(true);
        	this.div_work.form.div_file.form.btn_fileDel.set_enable(true);
        	this.div_work.form.div_file.form.btn_upload03.set_enable(true);

        	this.g_new	= true;
        	//첨부파일 초기화
        	//this.fn_searchAttach(null);

        	//첨부파일 수정불가처리
        	//this.div_work.form.Div01.form.div_file.set_enable(false);
        }

        this.fn_searchAttach = function(camRequestId)
        {
        	var divFile = this.div_work.form.div_file;
        	divFile.form.jobSysCd 		= "BAS";
        	divFile.form.atchTyCd 		= "EMAIL";
        	divFile.form.tableName 		= "PCM_CAMREQUEST";
        	divFile.form.subDir  		= "CamRequest";
        	divFile.form.atchSrcKey  	= camRequestId;
        	divFile.form.fn_search();

        }

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.tab_search_Tabpage1_cboPeriodType_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != "CUSTOM"){
        		this.fn_setDate(e.postvalue);
        	}
        };
        this.tab_search_Tabpage1_btn_search00_01_onclick = function(obj,e)
        {
        	this.fn_openPop("SCH_CUSTOMER","P00042"); //고객사 조회
        };

        this.tab_search_Tabpage1_btn_search00_onclick = function(obj,e)
        {
        	this.fn_openPop("SCH_ITEM","P00138"); //품목 조회
        };
        this.div_work_Div01_btnCustomer_onclick = function(obj,e)
        {
        	this.fn_openPop("FRM_CUSTOMER","P00042"); //고객사 조회
        };

        this.div_header_btnNew_onclick = function(obj,e)
        {
        	this.fn_newData();
        };

        this.tab_search_Tabpage1_btnSpecOwner_onclick = function(obj,e)
        {
        	this.fn_openPop("SCH_SPEC_OWNER","P00062");
        };

        this.tab_search_Tabpage1_btnCamOwner_onclick = function(obj,e)
        {
        	this.fn_openPop("SCH_CAM_OWNER","P00062");
        };

        this.tab_search_Tabpage1_edtItem_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btn_search00_onclick();
        	}
        };

        this.div_work_Div01_edtCustomer_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.div_work_Div01_btnCustomer_onclick();
        	}
        };

        this.div_work_Div01_edtItem_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.div_work_Div01_btnItem_onclick();
        	}
        };

        this.div_work_Div01_edtSpecOwner_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.div_work_Div01_btnSpecOwner_onclick();
        	}
        };

        this.div_work_Div01_edtCamOwner_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.div_work_Div01_btnCamOwner_onclick();
        	}
        };

        this.div_work_Div01_edtSalesOwner_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.div_work_Div01_btnSalesOwner_onclick();
        	}
        };

        this.ds_list_canrowposchange = function(obj,e)
        {
        	if(e.newrow<0) return;
        	var bOk = true;
        	if (this.gfn_dsIsUpdated(this.ds_list_new)) {
        		bOk = this.gfn_Message("WRITTENBEDELETE", null, "conf", "yesno");
        	}
        	return bOk;
        };

        this.ds_list_onrowposchanged = function(obj,e)
        {
        	if(e.newrow<0) return;

        };

        this.div_work_Div01_btn_customer_onclick = function(obj,e)
        {
        	this.fn_openPop("FRM_CUSTOMER","P00042"); //고객사 조회
        };

        this.div_work_Div01_edt_customer_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.div_work_Div01_btn_customer_onclick();
        	}
        };

        this.div_work_Div01_btn_itemA_onclick = function(obj,e)
        {
        	this.fn_openPop("FRM_ITEMA","P00138"); //품목 조회
        };

        this.div_work_Div01_btn_itemB_onclick = function(obj,e)
        {
        	this.fn_openPop("FRM_ITEMB","P00138"); //품목 조회
        };

        this.div_work_Div01_btn_specOwner_onclick = function(obj,e)
        {
        	this.fn_openPop("FRM_SPEC_OWNER","P00062");
        };

        this.div_work_Div01_btn_camOwner_onclick = function(obj,e)
        {
        	this.fn_openPop("FRM_CAM_OWNER","P00062");
        };

        this.div_work_Div01_edt_itemA_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.div_work_Div01_btn_itemA_onclick();
        	}
        };

        this.div_work_Div01_edt_itemB_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.div_work_Div01_btn_itemB_onclick();
        	}
        };

        this.div_work_Div01_edt_specOwner_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.div_work_Div01_btn_specOwner_onclick();
        	}
        };

        this.div_work_Div01_edt_camOwner_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.div_work_Div01_btn_camOwner_onclick();
        	}
        };

        this.fn_delete = function(obj,e)
        {
        	var governanceState = this.ds_list.getColumn(this.ds_list.rowposition, "GOVERNANCESTATE");
        	var camState		= this.ds_list.getColumn(this.ds_list.rowposition, "CAMWORKSTATE");
        	if(governanceState =="Request" || governanceState =="Reject" || this.nfn_isNull(governanceState)){ //접수,반려인 경우만 수정 가능
        		this.basfn_deleteRow(this.ds_list, null, "IsDeleted");
        	} else {
        		this.gfn_Message("CANTDELETEPROCESSGOVERNANCE", null, "info", "ok"); //진행중인 건은 삭제 불가
        	}
        };


        this.fn_selectData = function(crow)
        {
        	var obj = this.ds_list;
        	var camRequestId = obj.getColumn(crow, "CAMREQUESTID");

        	var dsObj = this.ds_list_new;
        	dsObj.clearData();
        	var row = dsObj.insertRow();
        	dsObj.copyRow(row, obj, crow);
        	dsObj.applyChange();
        	//this.fn_selectDetail(camRequestId);
        	//첨부파일 수정가능처리
        	this.div_work.form.div_file.set_enable(true);
        	this.fn_searchAttach(camRequestId);

        	var governanceState = this.ds_list.getColumn(this.ds_list.rowposition, "GOVERNANCESTATE");
        	var isLotCreate = this.ds_list.getColumn(this.ds_list.rowposition, "ISLOTCREATE");
        	//if(governanceState =="Request" || governanceState =="Reject" || this.nfn_isNull(governanceState)){ //접수,반려인 경우만 수정 가능
        	if(isLotCreate != "Y"){ //수주사양결재에서 LOT투입이 되면 수정불가
        		this.div_work.form.Div01.form.set_enable(true);
        		this.div_work.form.div_file.form.div_fup.form.fup_AttachedFile.set_enable(true);
        		this.div_work.form.div_file.form.btn_fileDel.set_enable(true);
        		this.div_work.form.div_file.form.btn_upload03.set_enable(true);
        	} else {
        		this.div_work.form.Div01.form.set_enable(false);
        		this.div_work.form.div_file.form.div_fup.form.fup_AttachedFile.set_enable(false);
        		this.div_work.form.div_file.form.btn_fileDel.set_enable(false);
        		this.div_work.form.div_file.form.btn_upload03.set_enable(false);
        	}
        }


        this.div_work_grd_reqList_oncellclick = function(obj,e)
        {
        	if(e.row<0) return;
        	if(e.oldrow == e.row) return;

        	var bOk = true;
        	if (this.gfn_dsIsUpdated(this.ds_list_new)) {
        		if(!this.gfn_Message("WRITTENBEDELETE", null, "conf", "yesno")){
        			obj.selectRow(e.oldrow);
        			return;
        		}
        	}

        	this.fn_selectData(e.row);
        };

        this.ds_list_new_onvaluechanged = function(obj,e)
        {
        	this.g_new = false;
        };



        this.fn_printCard = function(obj,e)
        {
        	var camRequestId = this.ds_list_new.getColumn(this.ds_list_new.rowposition, "CAMREQUESTID");

        	if(this.nfn_isNull(camRequestId)){ //신규Data
        		this.gfn_Message("NoSelections", "", "warning", "ok");
        		return;
        	}

        	var title			= this.nfn_nvl(this.nfn_getDictionarynameUpper("CAM작업의뢰서"),"CAM작업의뢰서");

        	var oArg = {
        		sRptPath   : "/bas/",
        		sRptName   : "BAS01900R.mrd",
        		strField   :   "[" + camRequestId + "]",
        		bModalless : false
        	};

        	var sOption = "titletext="+title+",modeless=false";
        	this.gfn_reportPopup("reportViewer", "common::com_report.xfdl", oArg, sOption);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_customSave.addEventHandler("onclick",this.fn_save,this);
            this.div_header.form.btn_new.addEventHandler("onclick",this.div_header_btnNew_onclick,this);
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_printCard,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.Div01.form.edt_customer.addEventHandler("onkeydown",this.div_work_Div01_edt_customer_onkeydown,this);
            this.div_work.form.Div01.form.btn_customer.addEventHandler("onclick",this.div_work_Div01_btn_customer_onclick,this);
            this.div_work.form.Div01.form.edt_itemA.addEventHandler("onkeydown",this.div_work_Div01_edt_itemA_onkeydown,this);
            this.div_work.form.Div01.form.btn_itemA.addEventHandler("onclick",this.div_work_Div01_btn_itemA_onclick,this);
            this.div_work.form.Div01.form.edt_itemB.addEventHandler("onkeydown",this.div_work_Div01_edt_itemB_onkeydown,this);
            this.div_work.form.Div01.form.btn_itemB.addEventHandler("onclick",this.div_work_Div01_btn_itemB_onclick,this);
            this.div_work.form.Div01.form.edt_specOwner.addEventHandler("onkeydown",this.div_work_Div01_edt_specOwner_onkeydown,this);
            this.div_work.form.Div01.form.btn_specOwner.addEventHandler("onclick",this.div_work_Div01_btn_specOwner_onclick,this);
            this.div_work.form.Div01.form.edt_camOwner.addEventHandler("onkeydown",this.div_work_Div01_edt_camOwner_onkeydown,this);
            this.div_work.form.Div01.form.btn_camOwner.addEventHandler("onclick",this.div_work_Div01_btn_camOwner_onclick,this);
            this.div_work.form.grd_reqList.addEventHandler("oncellclick",this.div_work_grd_reqList_oncellclick,this);
            this.div_work.form.btn_copy.addEventHandler("onclick",this.fn_copy,this);
            this.div_work.form.btn_delRow2.addEventHandler("onclick",this.fn_delete,this);
            this.tab_search.Tabpage1.form.btn_clear2.addEventHandler("onclick",this.fn_formInit,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.tab_search_Tabpage1_btn_search_onclick,this);
            this.tab_search.Tabpage1.form.cboPeriodType.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cboPeriodType_onitemchanged,this);
            this.tab_search.Tabpage1.form.calStartDt.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.calEndDt.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.btn_item.addEventHandler("onclick",this.tab_search_Tabpage1_btn_search00_onclick,this);
            this.tab_search.Tabpage1.form.btn_specOwner.addEventHandler("onclick",this.tab_search_Tabpage1_btnSpecOwner_onclick,this);
            this.tab_search.Tabpage1.form.btn_camOwner.addEventHandler("onclick",this.tab_search_Tabpage1_btnCamOwner_onclick,this);
            this.tab_search.Tabpage1.form.btn_customer.addEventHandler("onclick",this.tab_search_Tabpage1_btn_search00_01_onclick,this);
            this.ds_list_new.addEventHandler("onvaluechanged",this.ds_list_new_onvaluechanged,this);
        };
        this.loadIncludeScript("BAS01900M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
