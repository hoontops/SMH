(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS03000M");
            this.set_titletext("Rework Routing");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSCLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"TOPPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cbo_PLANTID", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"STARTBUSINESSHOUR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cbo_ProcessClassID", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PROCESSCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSCLASSTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cbo_ProcessDefVersion", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PROCESSDEFVERSIONCODE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSIONNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cbo_topProcessSegmentID", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTPROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Routing", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PROCESSCLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSCLASSID_R\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID_R\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION_R\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFNAME_R\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VERSIONSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKITEMCONTROL\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKSEGMENTCONTROL\" type=\"STRING\" size=\"256\"/><Column id=\"TOPPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"CREATORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TEMPSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Operation", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PATHSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PATHTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSUOM\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"INT\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIQUENESS\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"ALTERNATIVERESOURCE\" type=\"STRING\" size=\"256\"/><Column id=\"ASSIGNEQUIPMENT\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRIMARYRESOURCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ReworkProduct", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONTROLTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"INT\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ReworkArea", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONTROLTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Resource", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRIMARYRESOURCE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Equipment", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRIMARYRESOURCE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cbo_PLANTID2", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"STARTBUSINESSHOUR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cbo_ProcessClassID2", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PROCESSCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSCLASSTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cbo_topProcessSegmentID2", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTPROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_result", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchCopy", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSCLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"TOPPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("0");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","272","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("2");
            obj.set_text("Routing 자원/치공구/외주단가 등록");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("staValidState","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("유효상태");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("VALIDSTATE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProcessDefVersion","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("재작업버전");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("REWORKVERSION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip00",null,"10","15",null,"0","0",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip01","0","10","15",null,null,"0",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip03",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("statoProcessSegmentID","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("대공정");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PROCESSSEGMENTCLASS");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProcessDefID","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("재작업번호");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("REWORKNUMBER");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_ProcessDefID","108","110",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_ProcessDefID",null,"110","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_ValidState","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,ValidState,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PLANTID","108","35","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_cbo_PLANTID");
            obj.set_codecolumn("PLANTID");
            obj.set_datacolumn("PLANTNAME");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_ProcessClassType","108","60","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_codecolumn("C,ProcessClassType,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","200","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","200","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            obj.set_hotkey("F2");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04","0","180",null,"20","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","200","10","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_ProcessClassID","108","85","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_cbo_ProcessClassID");
            obj.set_codecolumn("PROCESSCLASSID");
            obj.set_datacolumn("PROCESSCLASSNAME");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPLANTID","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProcessClassType","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_text("적용구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PROCESSCLASSTYPE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProcessClassID","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_text("재작업구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PROCESSCLASSID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_ProcessDefVersion","108","135","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_cbo_ProcessDefVersion");
            obj.set_codecolumn("PROCESSDEFVERSIONCODE");
            obj.set_datacolumn("PROCESSDEFVERSIONNAME");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_toProcessSegmentID","108","160","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_cbo_topProcessSegmentID");
            obj.set_codecolumn("PROCESSSEGMENTCLASSID");
            obj.set_datacolumn("PROCESSSEGMENTCLASSNAME");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grdRouting",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btnDelRow_ds_Routing",null,"6","26","24","29",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btnAddRow_ds_Routing",null,"6","26","24","58",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_RoutingSegSeq",null,"6","103","24","btnAddRow_ds_Routing:0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("공정 수순 채번");
            obj.set_tooltiptext("Toolbar_RoutingSegmentSequence");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("StaticTitleWTime1","0","0","112","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("재작업 라우팅");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("REWORKROUTING");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_Routing","StaticTitleWTime1:0","0","140","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tab_Resource","0","66.29%",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_tabindex("0");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab_Resource);
            obj.set_text("대체자원");
            obj.set_tooltiptext("ALTERRESOURCE");
            this.div_work.form.tab_Resource.addChild(obj.name, obj);

            obj = new Grid("grdResource","0","34",null,null,"0","1",null,null,null,null,this.div_work.form.tab_Resource.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_Resource");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"300\"/><Column size=\"80\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"자원 코드\" cssclass=\"cell_point\"/><Cell col=\"1\" text=\"자원명\"/><Cell col=\"2\" text=\"생성자\"/><Cell col=\"3\" text=\"생성일\"/></Band><Band id=\"body\"><Cell text=\"bind:RESOURCEID\" expandshow=\"expr:dataset.getRowType(currow) ==2 ? &apos;show&apos;:&apos;hide&apos;\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\"/><Cell col=\"1\" text=\"bind:RESOURCENAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:CREATOR\"/><Cell col=\"3\" text=\"bind:CREATEDTIME\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.form.tab_Resource.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_grdDown",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_Resource.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.div_work.form.tab_Resource.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_Resource",null,"6","29","24","29",null,null,null,null,null,this.div_work.form.tab_Resource.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.div_work.form.tab_Resource.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnAddRow_ds_Resource",null,"6","29","24","58",null,null,null,null,null,this.div_work.form.tab_Resource.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.div_work.form.tab_Resource.Tabpage1.addChild(obj.name, obj);

            obj = new Static("StaticTitleWTime1","0","0","65","34",null,null,null,null,null,null,this.div_work.form.tab_Resource.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("대체 자원");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("ALTERRESOURCE");
            this.div_work.form.tab_Resource.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_Resource","65","0","140","34",null,null,null,null,null,null,this.div_work.form.tab_Resource.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_Resource.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab_Resource);
            obj.set_text("설비 지정");
            obj.set_tooltiptext("EQUIPMENTAPPOINT");
            this.div_work.form.tab_Resource.addChild(obj.name, obj);

            obj = new Grid("grdEquipment","0","34",null,null,"0","1",null,null,null,null,this.div_work.form.tab_Resource.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_Equipment");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"300\"/><Column size=\"80\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"설비 ID\" tooltiptext=\"EQUIPMENTID\" cssclass=\"cell_point\"/><Cell col=\"1\" text=\"설비명\" tooltiptext=\"EQUIPMENTNAME\"/><Cell col=\"2\" text=\"생성자\"/><Cell col=\"3\" text=\"생성일\"/></Band><Band id=\"body\"><Cell text=\"bind:RESOURCEID\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"expr:dataset.getRowType(currow) ==2 ? &apos;show&apos;:&apos;hide&apos;\"/><Cell col=\"1\" text=\"bind:RESOURCENAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:CREATOR\"/><Cell col=\"3\" text=\"bind:CREATEDTIME\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.form.tab_Resource.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_Equipment",null,"6","29","24","29",null,null,null,null,null,this.div_work.form.tab_Resource.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.div_work.form.tab_Resource.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btnAddRow_ds_Equipment",null,"6","29","24","btn_delRow_ds_Equipment:0",null,null,null,null,null,this.div_work.form.tab_Resource.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.div_work.form.tab_Resource.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_grdDown",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_Resource.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.div_work.form.tab_Resource.Tabpage2.addChild(obj.name, obj);

            obj = new Static("StaticTitleWTime1","0","0","65","34",null,null,null,null,null,null,this.div_work.form.tab_Resource.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_text("설비 지정");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("EQUIPMENTAPPOINT");
            this.div_work.form.tab_Resource.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_Equipment","65","0","140","34",null,null,null,null,null,null,this.div_work.form.tab_Resource.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_Resource.Tabpage2.addChild(obj.name, obj);

            obj = new Tab("tab_Rework","0","36.43%",null,null,"0","tab_Resource:10",null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_tabindex("0");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab_Rework);
            obj.set_text("공정순서");
            obj.set_tooltiptext("PROCESSSEQUENCE");
            this.div_work.form.tab_Rework.addChild(obj.name, obj);

            obj = new Grid("grdOperation","0","34",null,null,"0","1",null,null,null,null,this.div_work.form.tab_Rework.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_Operation");
            obj.set_autofittype("none");
            obj.set_autoupdatetype("comboselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"250\"/><Column size=\"120\"/><Column size=\"250\"/><Column size=\"80\"/><Column size=\"250\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Site ID\" cssclass=\"cell_point\"/><Cell col=\"1\" text=\"공정수순\" cssclass=\"cell_point\"/><Cell col=\"2\" text=\"공정 코드\" cssclass=\"cell_point\"/><Cell col=\"3\" text=\"공정명\"/><Cell col=\"4\" text=\"자원 코드\" cssclass=\"cell_point\"/><Cell col=\"5\" text=\"자원명\"/><Cell col=\"6\" text=\"대체자원\"/><Cell col=\"7\" text=\"특이사항\"/><Cell col=\"8\" text=\"설비 지정\"/><Cell col=\"9\" text=\"생성자\"/><Cell col=\"10\" text=\"생성일\"/><Cell col=\"11\" text=\"수정자\"/><Cell col=\"12\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:PLANTID\" displaytype=\"combotext\" edittype=\"expr:dataset.getRowType(currow) ==2 ? &apos;combo&apos;:&apos;none&apos;\" combodataset=\"ds_cbo_PLANTID2\" combocodecol=\"PLANTID\" combodatacol=\"PLANTNAME\"/><Cell col=\"1\" text=\"bind:USERSEQUENCE\"/><Cell col=\"2\" text=\"bind:PROCESSSEGMENTID\" expandshow=\"expr:dataset.getRowType(currow) ==2 ? &apos;show&apos;:&apos;hide&apos;\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:RESOURCEID\" expandshow=\"show\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\"/><Cell col=\"5\" text=\"bind:RESOURCENAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:ALTERNATIVERESOURCE\" combocodecol=\"C,YesNo,SEL,Y,Y\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"7\" text=\"bind:UNIQUENESS\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:ASSIGNEQUIPMENT\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,YesNo,SEL,Y,Y\"/><Cell col=\"9\" text=\"bind:CREATOR\"/><Cell col=\"10\" text=\"bind:CREATEDTIME\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"11\" text=\"bind:MODIFIER\"/><Cell col=\"12\" text=\"bind:MODIFIEDTIME\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.form.tab_Rework.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grdOperation",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_Rework.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.div_work.form.tab_Rework.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnDelRow_ds_Operation",null,"6","29","24","btn_xlDn_grdOperation:0",null,null,null,null,null,this.div_work.form.tab_Rework.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.div_work.form.tab_Rework.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnAddRow_ds_Operation",null,"6","29","24","btnDelRow_ds_Operation:0",null,null,null,null,null,this.div_work.form.tab_Rework.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.div_work.form.tab_Rework.Tabpage1.addChild(obj.name, obj);

            obj = new Static("StaticTitleWTime1","0","0","65","34",null,null,null,null,null,null,this.div_work.form.tab_Rework.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("공정순서  ");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("PROCESSSEQUENCE");
            this.div_work.form.tab_Rework.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_Operation","StaticTitleWTime1:0","0","140","34",null,null,null,null,null,null,this.div_work.form.tab_Rework.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_Rework.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab_Rework);
            obj.set_text("품목지정");
            obj.set_tooltiptext("PRODUCTAPPOINT");
            this.div_work.form.tab_Rework.addChild(obj.name, obj);

            obj = new Grid("grdReworkProduct","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_Rework.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_ReworkProduct");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"300\"/><Column size=\"100\"/><Column size=\"250\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"품목코드\" tooltiptext=\"PRODUCTDEFID\" cssclass=\"cell_point\"/><Cell col=\"1\" text=\"품목명\" tooltiptext=\"PRODUCTDEFNAME\"/><Cell col=\"2\" text=\"Rev\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell col=\"3\" text=\"설명\"/><Cell col=\"4\" text=\"생성자\"/><Cell col=\"5\" text=\"생성일\"/><Cell col=\"6\" text=\"수정자\"/><Cell col=\"7\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:RESOURCEID\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"expr:dataset.getRowType(currow) ==2 ? &apos;show&apos;:&apos;hide&apos;\"/><Cell col=\"1\" text=\"bind:RESOURCENAME\"/><Cell col=\"2\" text=\"bind:RESOURCEVERSION\"/><Cell col=\"3\" text=\"bind:DESCRIPTION\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:CREATOR\"/><Cell col=\"5\" text=\"bind:CREATEDTIME\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"6\" text=\"bind:MODIFIER\"/><Cell col=\"7\" text=\"bind:MODIFIEDTIME\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.form.tab_Rework.Tabpage2.addChild(obj.name, obj);

            obj = new Static("StaticTitleWTime1","0","0","65","34",null,null,null,null,null,null,this.div_work.form.tab_Rework.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("품목지정  ");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("PRODUCTAPPOINT");
            this.div_work.form.tab_Rework.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_ReworkProduct","StaticTitleWTime1:0","0","140","34",null,null,null,null,null,null,this.div_work.form.tab_Rework.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_Rework.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btnDelRow_ds_ReworkProduct",null,"6","29","24","29",null,null,null,null,null,this.div_work.form.tab_Rework.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.div_work.form.tab_Rework.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btnAddRow_ds_ReworkProduct",null,"6","29","24","58",null,null,null,null,null,this.div_work.form.tab_Rework.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            obj.set_text("");
            this.div_work.form.tab_Rework.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grdReworkProduct",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_Rework.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.div_work.form.tab_Rework.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.div_work.form.tab_Rework);
            obj.set_text("사용 작업장");
            obj.set_tooltiptext("USEAREA");
            this.div_work.form.tab_Rework.addChild(obj.name, obj);

            obj = new Static("StaticTitleWTime1","0","0","84","34",null,null,null,null,null,null,this.div_work.form.tab_Rework.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_text("사업 작업장  ");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("BUSINESSAREA");
            this.div_work.form.tab_Rework.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_ReworkArea","StaticTitleWTime1:0","0","140","34",null,null,null,null,null,null,this.div_work.form.tab_Rework.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_Rework.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btnAddRow_ds_ReworkArea",null,"6","29","24","58",null,null,null,null,null,this.div_work.form.tab_Rework.Tabpage3.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.div_work.form.tab_Rework.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_ReworkArea",null,"6","29","24","29",null,null,null,null,null,this.div_work.form.tab_Rework.Tabpage3.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.div_work.form.tab_Rework.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grdReworkArea",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_Rework.Tabpage3.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.div_work.form.tab_Rework.Tabpage3.addChild(obj.name, obj);

            obj = new Grid("grdReworkArea","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_Rework.Tabpage3.form);
            obj.set_taborder("5");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_ReworkArea");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"300\"/><Column size=\"250\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"작업장 코드\" tooltiptext=\"AREAID\" cssclass=\"cell_point\"/><Cell col=\"1\" text=\"작업장\" tooltiptext=\"AREANAME\"/><Cell col=\"2\" text=\"설명\"/><Cell col=\"3\" text=\"생성자\"/><Cell col=\"4\" text=\"생성일\"/><Cell col=\"5\" text=\"수정자\"/><Cell col=\"6\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:RESOURCEID\" expandshow=\"expr:dataset.getRowType(currow) ==2 ? &apos;show&apos;:&apos;hide&apos;\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\"/><Cell col=\"1\" text=\"bind:RESOURCENAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:DESCRIPTION\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:CREATOR\"/><Cell col=\"4\" text=\"bind:CREATEDTIME\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"5\" text=\"bind:MODIFIER\"/><Cell col=\"6\" text=\"bind:MODIFIEDTIME\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.form.tab_Rework.Tabpage3.addChild(obj.name, obj);

            obj = new Grid("grdRouting","0","34",null,null,"0","tab_Rework:10",null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_Routing");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"250\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"적용구분\" cssclass=\"cell_point\"/><Cell col=\"1\" text=\"재작업구분\" tooltiptext=\"PROCESSCLASSID\" cssclass=\"cell_point\"/><Cell col=\"2\" text=\"대공정\" cssclass=\"cell_point\"/><Cell col=\"3\" text=\"재작업번호\" tooltiptext=\"REWORKNUMBER\"/><Cell col=\"4\" text=\"재작업버전\" tooltiptext=\"REWORKVERSION\"/><Cell col=\"5\" text=\" 재작업명\" tooltiptext=\"REWORKNAME\" cssclass=\"cell_point\"/><Cell col=\"6\" text=\"설명\" cssclass=\"cell_point\"/><Cell col=\"7\" text=\"생성자명\"/><Cell col=\"8\" text=\"생성일\"/><Cell col=\"9\" text=\"수정자명\"/><Cell col=\"10\" text=\"수정일\"/><Cell col=\"11\" text=\"품목제한\"/><Cell col=\"12\" text=\"버전 상태\"/><Cell col=\"13\" text=\"Site ID\"/><Cell col=\"14\" text=\"유효상태\"/></Band><Band id=\"body\"><Cell text=\"bind:PROCESSCLASSTYPE\" combocodecol=\"C,ProcessClassType,SEL,Y,Y\" edittype=\"expr:dataset.getRowType(currow) ==2 ? &apos;combo&apos;:&apos;none&apos;\" displaytype=\"combotext\"/><Cell col=\"1\" text=\"bind:PROCESSCLASSID_R\" displaytype=\"combotext\" edittype=\"expr:dataset.getRowType(currow) ==2 ? &apos;combo&apos;:&apos;none&apos;\" combodataset=\"ds_cbo_ProcessClassID2\" combocodecol=\"PROCESSCLASSID\" combodatacol=\"PROCESSCLASSNAME\"/><Cell col=\"2\" text=\"bind:TOPPROCESSSEGMENTID\" displaytype=\"combotext\" edittype=\"expr:dataset.getRowType(currow) ==2 ? &apos;combo&apos;:&apos;none&apos;\" combodataset=\"ds_cbo_topProcessSegmentID2\" combocodecol=\"PROCESSSEGMENTCLASSID\" combodatacol=\"PROCESSSEGMENTCLASSNAME\"/><Cell col=\"3\" text=\"bind:PROCESSDEFID_R\"/><Cell col=\"4\" text=\"bind:PROCESSDEFVERSION_R\"/><Cell col=\"5\" text=\"bind:PROCESSDEFNAME_R\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:DESCRIPTION\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:CREATORNAME\"/><Cell col=\"8\" text=\"bind:CREATEDTIME\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"9\" text=\"bind:MODIFIERNAME\"/><Cell col=\"10\" text=\"bind:MODIFIEDTIME\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"11\" text=\"bind:REWORKITEMCONTROL\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,YesNo,SEL,Y,Y\"/><Cell col=\"12\" text=\"bind:VERSIONSTATE\"/><Cell col=\"13\" text=\"bind:PLANTID\"/><Cell col=\"14\" text=\"bind:VALIDSTATE\" displaytype=\"combotext\" edittype=\"none\" combocodecol=\"C,ValidState,ALL,Y,Y\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","0",null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","btn_reset:0",null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","26","24","btn_help:0",null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("5");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","290","34",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tab_search.Tabpage1.form.cbo_ValidState","value","ds_search","VALIDSTATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tab_search.Tabpage1.form.cbo_PLANTID","value","ds_search","PLANTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab_search.Tabpage1.form.cbo_ProcessClassType","value","ds_search","PROCESSCLASSTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tab_search.Tabpage1.form.cbo_ProcessClassID","value","ds_search","PROCESSCLASSID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab_search.Tabpage1.form.edt_ProcessDefID","value","ds_search","PROCESSDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tab_search.Tabpage1.form.cbo_ProcessDefVersion","value","ds_search","PROCESSDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tab_search.Tabpage1.form.cbo_toProcessSegmentID","value","ds_search","TOPPROCESSSEGMENTID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAS03000M.xfdl","lib::lib_bas.xjs");
        this.registerScript("BAS03000M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: Rework Routing
         * 파일명 		: BAS03000M.xfdl
         * 작성자 		: 김애리
         * 작성일 		: 2021.2.23
         * AS-IS		: ReworkRoutingVer1
         * 설  명		: 재작업 하는 품목에 대한 Routing 정의
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.2.23	김애리   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/


        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.selectRowRouting = -1;


        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
         this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);

        	this.ds_search.set_rowposition(0);
        	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0, "LANGUAGETYPE",nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType"));
        	this.fn_initCombo();


        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         *	공통 처리 이외의 콤보 처리
         */
        this.fn_initCombo = function ()
        {
        	{
        		this.ds_cbo_ProcessDefVersion.insertRow(0);
        		this.ds_cbo_ProcessDefVersion.setColumn(0,"PROCESSDEFVERSIONCODE","");
        		this.ds_cbo_ProcessDefVersion.setColumn(0,"PROCESSDEFVERSIONNAME","전체조회");
        		this.ds_search.setColumn(0,"PROCESSDEFVERSION", "");
        	}

        	var sSvcID 			= "selectBOMTree";
        	var sController 	= "/bas03000/selectInitCombo.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_cbo_PLANTID=ds_cbo_PLANTID ds_cbo_ProcessClassID=ds_cbo_ProcessClassID ds_cbo_topProcessSegmentID=ds_cbo_topProcessSegmentID";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };

        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_Routing.clearData();

        	if(this.fn_searchValidate() == false) return;
        	this.getProcessdefinitionList();

        };

        this.fn_searchValidate = function ()
        {
        // 	var component = this.tab_search.Tabpage1;
        // 	var strColIdList = "cbo_ValidState";
        // 	var strColNmList = "VALIDSTATE"; //유효상태
        // 	return this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        return true;
        };

        /*
        * 기능 : 검색 초기화
        */
        this.fn_searchClear = function(obj,e)
        {
        	this.ds_search.copyData(this.ds_searchCopy);
        };

        this.fn_save = function (obj, e)
        {
        	if(this.fn_saveValidate() == false) return;

        	this.selectRowRouting = this.ds_Routing.rowcount == 1 ? 0 : this.ds_Routing.rowposition;

        	var sSvcID 			= "saveRoutingWtime";
        	var sController 	= "/bas03000/saveReworkRouting.do";
        	var sInDatasets 	= "ds_Routing=ds_Routing:A ds_Operation=ds_Operation:A ds_ReworkProduct=ds_ReworkProduct:A"
        					+ " ds_ReworkArea=ds_ReworkArea:A ds_Resource=ds_Resource:A ds_Equipment=ds_Equipment:A";
        	var sOutDatasets 	= "ds_result=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);


        };

        this.fn_saveValidate = function ()
        {

        	//this.ds_ReworkProduct 에 RESOURCEID 가 겹치면 오류 리턴 //AlreadyInputProduct

        	//재작업 라우팅 그리드 저장 필수 체크
        	{
        		var component = this.div_work.form.grdRouting;
        		var strColIdList = "PROCESSCLASSTYPE,PROCESSCLASSID_R,TOPPROCESSSEGMENTID,PROCESSDEFNAME_R,DESCRIPTION";
        		var rtn = this.nfn_MandatoryCheckGrid(component, strColIdList);
        		if (rtn == false) return false;
        	}

        	//공정 순서 필수 체크
        	{
        		var component = this.div_work.form.tab_Rework.Tabpage1.form.grdOperation;
        		var strColIdList = "PLANTID,USERSEQUENCE,PROCESSSEGMENTID,RESOURCEID";
        		var rtn = this.nfn_MandatoryCheckGrid(component, strColIdList);
        		if (rtn == false) return false;
        	}

        	//공정 순서 그리드 duplication 확인
        	if(this.CheckDuplicationId(this.ds_Operation,["PROCESSSEGMENTID","USERSEQUENCE"],["DuplicationSegmentID","DuplicationUserSequence"]) == false) return false;

        	//품목지정 그리드 duplication 확인
        	if(this.CheckDuplicationIdVersion(this.ds_ReworkProduct,["RESOURCEID"],["RESOURCEVERSION"],["DuplicationProduct"]) == false) return false;

        	//사용 작업장 그리드 duplication 확인
        	if(this.CheckDuplicationId(this.ds_ReworkArea, ["RESOURCEID"],["DuplicationArea"]) == false) return false;


        	//대체자원 그리드 duplication 확인
        	if(this.CheckDuplicationIdVersion(this.ds_Resource, ["RESOURCEID"], ["RESOURCEVERSION"], ["DuplicationResource"]) == false) return false;

        	//설비지정 그리드 duplication 확인
        	if(this.CheckDuplicationId(this.ds_Equipment, ["RESOURCEID"],["DuplicationEquipment"]) == false) return false;


        	//Resoure 삭제 되었다면  품목과 Area 는 있어야 함.
        	var deletedResource = this.ds_Resource.findRowExpr("(this.getRowType(rowidx)==Dataset.ROWTYPE_DELETE)");

        	if(deletedResource > -1)
        	{
        		if(this.ds_Operation.rowcount == 0 && this.ds_ReworkArea.rowcount == 0)
        		{
        			this.gfn_Message("RequiredSegmentAndWorkArea", "", "warning", "ok");
        			return;
        		}else if(this.ds_Operation.rowcount == 0 ){
        			this.gfn_Message("RequiredSegment", "", "warning", "ok");
        			return;
        		}else if(this.ds_ReworkArea.rowcount == 0 ){
        			this.gfn_Message("RequiredWorkArea", "", "warning", "ok");
        			return;
        		}

        	}



        };

        //colum 하나 duplication 확인
        this.CheckDuplicationId = function (objDataset, strColumnInfoArr, strMessageArr)
        {
        	for(var i=0 ; i<objDataset.rowcount ; i++)
        	{
        		for(var j=0; j<objDataset.rowcount ; j++)
        		{
        			if(i==j) continue;
        			for(var k=0;k<strColumnInfoArr.length;k++)
        			{
        				if(objDataset.getColumn(i,strColumnInfoArr[k]) == objDataset.getColumn(j,strColumnInfoArr[k]))
        				{
        					this.gfn_Message(strMessageArr[k], objDataset.getColumn(i,strColumnInfoArr[k]), "warning", "ok");
        					return false;
        				}
        			}
        		}
        	}

        	return true;
        };

        //ID, Version 으로 duplication 확인
        this.CheckDuplicationIdVersion = function (objDataset, strColIDArr, strColVerArr, strMessageArr)
        {
        	for(var i=0 ; i<objDataset.rowcount ; i++)
        	{
        		for(var j=0; j<objDataset.rowcount ; j++)
        		{
        			if(i==j) continue;
        			for(var k=0;k<strColIDArr.length;k++)
        			{
        				if(objDataset.getColumn(i,strColIDArr[k]) == objDataset.getColumn(j,strColIDArr[k])
        				 && objDataset.getColumn(i,strColVerArr[k]) == objDataset.getColumn(j,strColVerArr[k])
        				)
        				{
        					this.gfn_Message(strMessageArr[k], [objDataset.getColumn(i,strColIDArr[k]),objDataset.getColumn(i,strColVerArr[k])], "warning", "ok");
        					return false;
        				}
        			}
        		}
        	}

        	return true;
        };

         /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        trace('fn_callBack trId ?' + trId);
        	if (errCD < 0)
        	{
        		if(trId == "saveBillOfDurableList" || trId == "saveBillOfResourceList")
        		{
        			var msg = errMsg.split("|");
        			this.gfn_Message(msg[0], msg[1], "error", "ok");
        		}
        		else
        			this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");

        		return;
        	}

        	{
        		switch(trId) {
        		case "selectEcmLookupValuesVList2ds_CValidStateALL" :
        		{
        			this.ds_search.setColumn(0,"VALIDSTATE","Valid");
        			break;
        		}
        		case "selectBOMTree" :
        		{
        			//trace(this.ds_cbo_ProcessClassID.saveXML());
        			this.ds_search.setColumn(0,"PLANTID", this.gf_getSiteType());
        			this.ds_cbo_PLANTID2.copyData(this.ds_cbo_PLANTID);

        			this.ds_cbo_ProcessClassID2.copyData(this.ds_cbo_ProcessClassID);
        			this.ds_cbo_ProcessClassID.insertRow(0);
        			this.ds_cbo_ProcessClassID.setColumn(0,"PROCESSCLASSID","");
        			this.ds_cbo_ProcessClassID.setColumn(0,"PROCESSCLASSNAME","전체조회");
        			this.ds_search.setColumn(0,"PROCESSCLASSID", "");

        			this.ds_cbo_topProcessSegmentID2.copyData(this.ds_cbo_topProcessSegmentID);
        			this.ds_cbo_topProcessSegmentID.insertRow(0);
        			this.ds_cbo_topProcessSegmentID.setColumn(0,"PROCESSSEGMENTCLASSID","");
        			this.ds_cbo_topProcessSegmentID.setColumn(0,"PROCESSSEGMENTCLASSNAME","전체조회");
        			this.ds_search.setColumn(0,"TOPPROCESSSEGMENTID", "");

        			this.ds_searchCopy.copyData(this.ds_search);
        			break;
        		}
        		case "selectProcessdefVersion" :
        		{
        			//trace(this.ds_cbo_ProcessDefVersion.saveXML());
        			this.ds_cbo_ProcessDefVersion.insertRow(0);
        			this.ds_cbo_ProcessDefVersion.setColumn(0,"PROCESSDEFVERSIONCODE","");
        			this.ds_cbo_ProcessDefVersion.setColumn(0,"PROCESSDEFVERSIONNAME","전체조회");
        			this.ds_search.setColumn(0,"PROCESSDEFVERSION", "");
        			break;
        		}
        		case "selectProcessdefinitionList" :
        		{
        			//trace(this.ds_Routing.saveXML());
        			//if(this.ds_Routing.rowcount > 0) this.ds_Routing.set_rowposition(this.selectRowRouting);

        			break;
        		}
        		case "selectProcessPathList" :
        		{
        			//trace(this.ds_Operation.saveXML());
        			if(this.ds_Operation.rowcount == 0) this.mfn_ResetRoutingPosition(); //하단 탭 조회 없으니까....여기서..
        			break;
        		}
        		case "selectProductReworkControl" :
        		{
        			//trace(this.ds_ReworkProduct.saveXML());
        			break;
        		}
        		case "selectReworkRoutingEquipment" :
        		{
        			//trace(this.ds_Equipment.saveXML());
        			this.mfn_ResetRoutingPosition();
        			break;
        		}
        		case "saveRoutingWtime" :
        		{
        			if(this.ds_result.rowcount > 0 && this.ds_result.getColumn(0,"result") > 0)
        			{
        				this.gfn_Message("SuccessSave", "", "information", "ok");
        				this.getProcessdefinitionList();
        			}
        			else
        			{
        				this.gfn_Message("CancelSave", "", "information", "ok");
        			}
        			break;
        		}
        		case "selectReworkRoutingResource" :
        		{
        			this.mfn_ResetRoutingPosition();
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
        	if(this.nfn_isNull(rtn)) return;

        	switch(sPopupId) {
        	case "SEARCH_PROCESSDEF":
        	{//"PROCESSDEFID|PROCESSDEFNAME"
        		this.ds_search.setColumn(0,"PROCESSDEFID",rtn[0]);
        		break;
        	}
        	case "SEARCH_PROCESSSEGMENT" :
        	{//"PROCESSSEGMENTID|PROCESSSEGMENTNAME";
        		var rRow = this.ds_Routing.rowcount == 1 ? 0 : this.ds_Routing.rowposition;
        		var nRow = this.ds_Operation.rowcount == 1 ? 0 : this.ds_Operation.rowposition;

        		this.ds_Operation.set_enableevent(false);
        		for(var i=0; i<rtn.length; i++)
        		{
        			if( i != 0 && this.ds_Operation.rowcount-1 <  nRow) {

        				this.ds_Operation.addRow();
        			}
        			var colArray = rtn[i];
        			var seq = this.ds_Operation.getColumn(nRow,"USERSEQUENCE");
        			if(this.nfn_isNull(seq)) seq = nexacro.toNumber(this.ds_Operation.getMax("USERSEQUENCE"),0) + 10;
        			this.ds_Operation.setColumn(nRow, "USERSEQUENCE", seq);
        			this.ds_Operation.setColumn(nRow, "PROCESSSEGMENTID", colArray[0]);
        			this.ds_Operation.setColumn(nRow, "PROCESSSEGMENTNAME", colArray[1]);
        			this.ds_Operation.setColumn(nRow, "PROCESSSEGMENTVERSION", "*");
        			this.ds_Operation.setColumn(nRow, "ENTERPRISEID", this.ds_Routing.getColumn(rRow, "ENTERPRISEID"));
        			this.ds_Operation.setColumn(nRow, "PLANTID", this.ds_Routing.getColumn(rRow, "PLANTID"));
        			this.ds_Operation.setColumn(nRow, "VALIDSTATE", "Valid");
        			this.ds_Operation.setColumn(nRow, "ALTERNATIVERESOURCE", "N");
        			this.ds_Operation.setColumn(nRow, "ASSIGNEQUIPMENT", "N");
        			this.ds_Operation.setColumn(nRow, "PROCESSUOM", "PCS");
        			this.ds_Operation.setColumn(nRow, "PATHSEQUENCE", "0");

        			if(this.ds_Routing.getRowType(rRow) ==2)
        			{
        				this.ds_Operation.setColumn(nRow, "PROCESSDEFVERSION", "");
        				this.ds_Operation.setColumn(nRow, "PROCESSDEFID", this.ds_Routing.getColumn(rRow, "TEMPSEQ"));


        			} else {
        				this.ds_Operation.setColumn(nRow, "PROCESSDEFVERSION", this.ds_Routing.getColumn(rRow, "PROCESSDEFVERSION_R"));
        				this.ds_Operation.setColumn(nRow, "PROCESSDEFID", this.ds_Routing.getColumn(rRow, "PROCESSDEFID_R"));

        			}

        			nRow++;
        		}
        		this.ds_Operation.set_enableevent(true);
        		break;
        	}
        	case "SEARCH_OPERATIONRESOURCE" :
        	{//RESOURCEID|DESCRIPTION|AREAID|AREANAME|EQUIPMENTCLASSID|EQUIPMENTCLASSNAME
        		this.ds_Operation.set_enableevent(false);
        		var nRow = this.ds_Operation.rowcount == 1 ? 0 : this.ds_Operation.rowposition;
        		this.ds_Operation.setColumn(nRow,"RESOURCEID",rtn[0]);
        		this.ds_Operation.setColumn(nRow,"RESOURCENAME",rtn[1]);
        		this.ds_Operation.setColumn(nRow,"RESOURCEVERSION","*");
        		this.ds_Operation.setColumn(nRow,"ISPRIMARYRESOURCE","Y");
        		this.ds_Operation.set_enableevent(true);
        		break;
        	}
        	case "SEARCH_REWORKPRODUCT" :
        	{//PRODUCTDEFID|PRODUCTDEFNAME|PRODUCTDEFVERSION
        		var rRow = this.ds_Routing.rowcount == 1 ? 0 : this.ds_Routing.rowposition;
        		var nRow = this.ds_ReworkProduct.rowcount == 1 ? 0 : this.ds_ReworkProduct.rowposition;
        		for(var i=0; i<rtn.length; i++)
        		{
        			if( i != 0 && this.ds_ReworkProduct.rowcount-1 <  nRow) {
        				this.ds_ReworkProduct.addRow();
        			}
        			var colArray = rtn[i];

        			this.ds_ReworkProduct.setColumn(nRow, "RESOURCEID", colArray[0]);
        			this.ds_ReworkProduct.setColumn(nRow, "RESOURCENAME", colArray[1]);
        			this.ds_ReworkProduct.setColumn(nRow, "RESOURCEVERSION", colArray[2]);
        			this.ds_ReworkProduct.setColumn(nRow, "CONTROLTYPE", "Product");
        			this.ds_ReworkProduct.setColumn(nRow, "VALIDSTATE", "Valid");
        			this.ds_ReworkProduct.setColumn(nRow, "ENTERPRISEID", this.gf_getEnterpriseId());
        			this.ds_ReworkProduct.setColumn(nRow, "PLANTID", this.gf_getSiteType());
        			this.ds_ReworkProduct.setColumn(nRow, "SEQ", 0);
        			if(this.ds_Routing.getRowType(nRow) ==2)
        			{
        				this.ds_ReworkProduct.setColumn(nRow, "PROCESSDEFVERSION", "");
        				this.ds_ReworkProduct.setColumn(nRow, "PROCESSDEFID", this.ds_Routing.getColumn(rRow, "TEMPSEQ"));
        			}
        			else
        			{
        				this.ds_ReworkProduct.setColumn(nRow, "PROCESSDEFVERSION", this.ds_Routing.getColumn(rRow, "PROCESSDEFVERSION_R"));
        				this.ds_ReworkProduct.setColumn(nRow, "PROCESSDEFID", this.ds_Routing.getColumn(rRow, "PROCESSDEFID_R"));
        			}
        			nRow++;
        		}
        		break;
        	}
        	case "SEARCH_REWORKAREA" :
        	{//AREAID|AREANAME";
        		var rRow = this.ds_Routing.rowcount == 1 ? 0 : this.ds_Routing.rowposition;
        		var nRow = this.ds_ReworkArea.rowcount == 1 ? 0 : this.ds_ReworkArea.rowposition;
        		for(var i=0; i<rtn.length; i++)
        		{
        			if( i != 0 && this.ds_ReworkArea.rowcount-1 <  nRow) {
        				this.ds_ReworkArea.addRow();
        			}
        			var colArray = rtn[i];

        			this.ds_ReworkArea.setColumn(nRow, "RESOURCEID", colArray[0]);
        			this.ds_ReworkArea.setColumn(nRow, "RESOURCENAME", colArray[1]);
        			this.ds_ReworkArea.setColumn(nRow, "RESOURCEVERSION", "");
        			this.ds_ReworkArea.setColumn(nRow, "CONTROLTYPE", "Area");
        			this.ds_ReworkArea.setColumn(nRow, "VALIDSTATE", "Valid");
        			this.ds_ReworkArea.setColumn(nRow, "ENTERPRISEID", this.ds_Routing.getColumn(rRow, "ENTERPRISEID"));
        			this.ds_ReworkArea.setColumn(nRow, "PLANTID", this.ds_Routing.getColumn(rRow, "PLANTID"));
        			this.ds_ReworkArea.setColumn(nRow, "SEQ", "0");
        			if(this.ds_Routing.getRowType(nRow) ==2)
        			{
        				this.ds_ReworkArea.setColumn(nRow, "PROCESSDEFVERSION", "");
        				this.ds_ReworkArea.setColumn(nRow, "PROCESSDEFID", this.ds_Routing.getColumn(rRow, "TEMPSEQ"));
        			}
        			else
        			{
        				this.ds_ReworkArea.setColumn(nRow, "PROCESSDEFVERSION", this.ds_Routing.getColumn(rRow, "PROCESSDEFVERSION_R"));
        				this.ds_ReworkArea.setColumn(nRow, "PROCESSDEFID", this.ds_Routing.getColumn(rRow, "PROCESSDEFID_R"));
        			}
        			nRow++;
        		}
        		break;
        	}
        	case "SEARCH_RESOURCE" :
        	{//"RESOURCEID|DESCRIPTION|AREAID|AREANAME|EQUIPMENTCLASSID|EQUIPMENTCLASSNAME"
        		var oRow = this.ds_Operation.rowcount == 1 ? 0 : this.ds_Operation.rowposition;
        		var rRow = this.ds_Routing.rowcount == 1 ? 0 : this.ds_Routing.rowposition;
        		var nRow = this.ds_Resource.rowcount == 1 ? 0 : this.ds_Resource.rowposition;

        		for(var i=0; i<rtn.length; i++)
        		{
        			var colArray = rtn[i];
        			if(colArray[0] == this.ds_Operation.getColumn(oRow, "RESOURCEID"))
        			{
        				this.gfn_Message("RegistPrimaryResource", null, "warning", "ok");
        				return;
        			}
        		}

        		for(var i=0; i<rtn.length; i++)
        		{
        			if( i != 0 && this.ds_Resource.rowcount-1 <  nRow) {
        				this.ds_Resource.addRow();
        			}
        			var colArray = rtn[i];

        			this.ds_Resource.setColumn(nRow, "RESOURCEID", colArray[0]);
        			this.ds_Resource.setColumn(nRow, "RESOURCENAME", colArray[1]);
        			this.ds_Resource.setColumn(nRow, "AREAID", colArray[2]);
        			this.ds_Resource.setColumn(nRow, "AREANAME", colArray[3]);
        			this.ds_Resource.setColumn(nRow, "EQUIPMENTCLASSID", colArray[4]);
        			this.ds_Resource.setColumn(nRow, "EQUIPMENTCLASSNAME", colArray[5]);

        			this.ds_Resource.setColumn(nRow, "PRODUCTDEFID", "*");
        			this.ds_Resource.setColumn(nRow, "PRODUCTDEFVERSION", "*");
        			this.ds_Resource.setColumn(nRow, "PROCESSSEGMENTID", this.ds_Operation.getColumn(oRow, "PROCESSSEGMENTID"));
        			this.ds_Resource.setColumn(nRow, "PROCESSSEGMENTVERSION", this.ds_Operation.getColumn(oRow, "PROCESSSEGMENTVERSION"));
        			this.ds_Resource.setColumn(nRow, "EQUIPMENTID", "*");
        			this.ds_Resource.setColumn(nRow, "RESOURCETYPE", "Resource");
        			this.ds_Resource.setColumn(nRow, "RESOURCECLASSID", "*");
        			this.ds_Resource.setColumn(nRow, "SEQ", "1");
        			this.ds_Resource.setColumn(nRow, "VALIDSTATE", "Valid");
        			this.ds_Resource.setColumn(nRow, "ENTERPRISEID", this.ds_Operation.getColumn(oRow, "ENTERPRISEID"));
        			this.ds_Resource.setColumn(nRow, "PLANTID", this.ds_Operation.getColumn(oRow, "PLANTID"));
        			this.ds_Resource.setColumn(nRow, "RESOURCEVERSION", "*");
        			this.ds_Resource.setColumn(nRow, "ISPRIMARYRESOURCE", "N");

        			if(this.ds_Routing.getRowType(nRow) ==2)
        			{
        				this.ds_Resource.setColumn(nRow, "PROCESSDEFVERSION", "");
        				this.ds_Resource.setColumn(nRow, "PROCESSDEFID", this.ds_Routing.getColumn(rRow, "TEMPSEQ"));
        			}
        			else
        			{
        				this.ds_Resource.setColumn(nRow, "PROCESSDEFVERSION", this.ds_Routing.getColumn(rRow, "PROCESSDEFVERSION_R"));
        				this.ds_Resource.setColumn(nRow, "PROCESSDEFID", this.ds_Routing.getColumn(rRow, "PROCESSDEFID_R"));
        			}
        			nRow++;
        		}
        		break;
        	}
        	case "SEARCH_EQUIPMENT" :
        	{//"EQUIPMENTID|EQUIPMENTNAME"
        		var oRow = this.ds_Operation.rowcount == 1 ? 0 : this.ds_Operation.rowposition;
        		var rRow = this.ds_Routing.rowcount == 1 ? 0 : this.ds_Routing.rowposition;
        		var nRow = this.ds_Equipment.rowcount == 1 ? 0 : this.ds_Equipment.rowposition;

        		for(var i=0; i<rtn.length; i++)
        		{
        			if( i != 0 && this.ds_Equipment.rowcount-1 <  nRow) {
        				this.ds_Equipment.addRow();
        			}
        			var colArray = rtn[i];

        			this.ds_Equipment.setColumn(nRow, "RESOURCEID", colArray[0]);
        			this.ds_Equipment.setColumn(nRow, "RESOURCENAME", colArray[1]);

        			this.ds_Equipment.setColumn(nRow, "PRODUCTDEFID", "*");
        			this.ds_Equipment.setColumn(nRow, "PRODUCTDEFVERSION", "*");
        			this.ds_Equipment.setColumn(nRow, "PROCESSDEFID", this.ds_Operation.getColumn(oRow, "PROCESSDEFID"));
        			this.ds_Equipment.setColumn(nRow, "PROCESSDEFVERSION", this.ds_Operation.getColumn(oRow, "PROCESSDEFVERSION"));
        			this.ds_Equipment.setColumn(nRow, "PROCESSSEGMENTID", this.ds_Operation.getColumn(oRow, "PROCESSSEGMENTID"));
        			this.ds_Equipment.setColumn(nRow, "PROCESSSEGMENTVERSION", this.ds_Operation.getColumn(oRow, "PROCESSSEGMENTVERSION"));
        			this.ds_Equipment.setColumn(nRow, "RESOURCETYPE", "Equipment");
        			this.ds_Equipment.setColumn(nRow, "RESOURCECLASSID", "*");
        			this.ds_Equipment.setColumn(nRow, "SEQ", "1");
        			this.ds_Equipment.setColumn(nRow, "VALIDSTATE", "Valid");
        			this.ds_Equipment.setColumn(nRow, "ENTERPRISEID", this.ds_Operation.getColumn(oRow, "ENTERPRISEID"));
        			this.ds_Equipment.setColumn(nRow, "PLANTID", this.ds_Operation.getColumn(oRow, "PLANTID"));
        			this.ds_Equipment.setColumn(nRow, "RESOURCEVERSION", "*");

        			if(this.ds_Routing.getRowType(nRow) ==2)
        			{
        				this.ds_Equipment.setColumn(nRow, "PROCESSDEFVERSION", "");
        				this.ds_Equipment.setColumn(nRow, "PROCESSDEFID", this.ds_Routing.getColumn(rRow, "TEMPSEQ"));
        			}
        			else
        			{
        				this.ds_Equipment.setColumn(nRow, "PROCESSDEFVERSION", this.ds_Routing.getColumn(rRow, "PROCESSDEFVERSION_R"));
        				this.ds_Equipment.setColumn(nRow, "PROCESSDEFID", this.ds_Routing.getColumn(rRow, "PROCESSDEFID_R"));
        			}
        			nRow++;
        		}
        	}
        	default:
        	}


        };

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         *	Rework Routing 조회
         */
        this.getProcessdefinitionList = function ()
        {

        	if(this.tab_search.Tabpage1.form.edt_ProcessDefID.text != this.ds_search.getColumn(0,"PROCESSDEFID"))
        	{
        		this.ds_search.setColumn(0,"PROCESSDEFID",this.tab_search.Tabpage1.form.edt_ProcessDefID.text);
        	}

        	var sSvcID 			= "selectProcessdefinitionList";
        	var sController 	= "/bas03000/selectProcessdefinitionList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_Routing=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        /*
         *	공정 순서 조회(중간 탭 1 페이지)
         */
        this.getOperation = function ()
        {
        	this.ds_Operation.clearData();

        	this.ds_temp.clear();

        	this.datasetAddColumn(this.ds_temp, "ENTERPRISEID,PROCESSDEFID,PROCESSDEFVERSION,LANGUAGETYPE");

        	this.ds_temp.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_temp.setColumn(0, "PROCESSDEFID", this.ds_Routing.getColumn(this.ds_Routing.rowposition, "PROCESSDEFID_R"));
        	this.ds_temp.setColumn(0, "PROCESSDEFVERSION", this.ds_Routing.getColumn(this.ds_Routing.rowposition, "PROCESSDEFVERSION_R"));
        	this.ds_temp.setColumn(0, "LANGUAGETYPE", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType"));

        	var sSvcID 			= "selectProcessPathList";
        	var sController 	= "/bas03000/selectProcessPathList.do";
        	var sInDatasets 	= "INPUT=ds_temp";
        	var sOutDatasets 	= "ds_Operation=ds_Operation";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         *	품목지정 조회(중간 탭 2 페이지)
         */
        this.getReworkProduct = function ()
        {
        	this.ds_ReworkProduct.clearData();
        	//trace(this.ds_ReworkProduct.saveXML());

        	this.ds_temp.clear();

        	this.datasetAddColumn(this.ds_temp, "ENTERPRISEID,PROCESSDEFID,PROCESSDEFVERSION,LANGUAGETYPE");

        	this.ds_temp.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_temp.setColumn(0, "PROCESSDEFID", this.ds_Routing.getColumn(this.ds_Routing.rowposition, "PROCESSDEFID_R"));
        	this.ds_temp.setColumn(0, "PROCESSDEFVERSION", this.ds_Routing.getColumn(this.ds_Routing.rowposition, "PROCESSDEFVERSION_R"));
        	this.ds_temp.setColumn(0, "LANGUAGETYPE", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType"));

        	var sSvcID 			= "selectProductReworkControl";
        	var sController 	= "/bas03000/selectProductReworkControl.do";
        	var sInDatasets 	= "INPUT=ds_temp";
        	var sOutDatasets 	= "ds_ReworkProduct=ds_ReworkProduct";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         *	사용 작업장 조회(중간 탭 3 페이지)
         */
        this.getReworkArea = function ()
        {
        	this.ds_ReworkArea.clearData();
        	//trace(this.ds_ReworkArea.saveXML());

        	this.ds_temp.clear();

        	this.datasetAddColumn(this.ds_temp, "ENTERPRISEID,PROCESSDEFID,PROCESSDEFVERSION,LANGUAGETYPE");

        	this.ds_temp.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_temp.setColumn(0, "PROCESSDEFID", this.ds_Routing.getColumn(this.ds_Routing.rowposition, "PROCESSDEFID_R"));
        	this.ds_temp.setColumn(0, "PROCESSDEFVERSION", this.ds_Routing.getColumn(this.ds_Routing.rowposition, "PROCESSDEFVERSION_R"));
        	this.ds_temp.setColumn(0, "LANGUAGETYPE", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType"));

        	var sSvcID 			= "selectAreaReworkControl";
        	var sController 	= "/bas03000/selectAreaReworkControl.do";
        	var sInDatasets 	= "INPUT=ds_temp";
        	var sOutDatasets 	= "ds_ReworkArea=ds_ReworkArea";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         *	대체자원 조회(하단 탭 1 페이지)
         */
        this.getResource = function ()
        {
        	this.ds_Resource.clearData();
        	//trace(this.ds_ReworkArea.saveXML());

        	this.ds_temp.clear();

        	this.datasetAddColumn(this.ds_temp, "ENTERPRISEID,PROCESSDEFID,PROCESSDEFVERSION,PROCESSSEGMENTID,PROCESSSEGMENTVERSION,PLANTID,ISPRIMARYRESOURCE,LANGUAGETYPE");

        	this.ds_temp.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_temp.setColumn(0, "PROCESSDEFID", this.ds_Operation.getColumn(this.ds_Operation.rowposition, "PROCESSDEFID"));
        	this.ds_temp.setColumn(0, "PROCESSDEFVERSION", this.ds_Operation.getColumn(this.ds_Operation.rowposition, "PROCESSDEFVERSION"));
        	this.ds_temp.setColumn(0, "PROCESSSEGMENTID", this.ds_Operation.getColumn(this.ds_Operation.rowposition, "PROCESSSEGMENTID"));
        	this.ds_temp.setColumn(0, "PROCESSSEGMENTVERSION", this.ds_Operation.getColumn(this.ds_Operation.rowposition, "PROCESSSEGMENTVERSION"));
        	this.ds_temp.setColumn(0, "PLANTID", this.ds_Operation.getColumn(this.ds_Operation.rowposition, "PLANTID"));
        	this.ds_temp.setColumn(0, "ISPRIMARYRESOURCE", "N");
        	this.ds_temp.setColumn(0, "LANGUAGETYPE", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType"));

        	var sSvcID 			= "selectReworkRoutingResource";
        	var sController 	= "/bas03000/selectReworkRoutingResource.do";
        	var sInDatasets 	= "INPUT=ds_temp";
        	var sOutDatasets 	= "ds_Resource=ds_Resource";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         *	설비 지정 조회(하단 탭 2 페이지)
         */
        this.getEquipment = function ()
        {
        	this.ds_Equipment.clearData();
        	//trace(this.ds_ReworkArea.saveXML());

        	this.ds_temp.clear();

        	this.datasetAddColumn(this.ds_temp, "ENTERPRISEID,PROCESSDEFID,PROCESSDEFVERSION,PROCESSSEGMENTID,PROCESSSEGMENTVERSION,PLANTID,ISPRIMARYRESOURCE,LANGUAGETYPE");

        	this.ds_temp.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_temp.setColumn(0, "PROCESSDEFID", this.ds_Operation.getColumn(this.ds_Operation.rowposition, "PROCESSDEFID"));
        	this.ds_temp.setColumn(0, "PROCESSDEFVERSION", this.ds_Operation.getColumn(this.ds_Operation.rowposition, "PROCESSDEFVERSION"));
        	this.ds_temp.setColumn(0, "PROCESSSEGMENTID", this.ds_Operation.getColumn(this.ds_Operation.rowposition, "PROCESSSEGMENTID"));
        	this.ds_temp.setColumn(0, "PROCESSSEGMENTVERSION", this.ds_Operation.getColumn(this.ds_Operation.rowposition, "PROCESSSEGMENTVERSION"));
        	this.ds_temp.setColumn(0, "PLANTID", this.ds_Operation.getColumn(this.ds_Operation.rowposition, "PLANTID"));
        	this.ds_temp.setColumn(0, "ISPRIMARYRESOURCE", "N");
        	this.ds_temp.setColumn(0, "LANGUAGETYPE", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType"));

        	var sSvcID 			= "selectReworkRoutingEquipment";
        	var sController 	= "/bas03000/selectReworkRoutingEquipment.do";
        	var sInDatasets 	= "INPUT=ds_temp";
        	var sOutDatasets 	= "ds_Equipment=ds_Equipment";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        /*
         *	dataset 에 param 값 setting
         */
        this.datasetAddColumn = function (objDataset, strColumnInfo)
        {
        	var arrColumn = strColumnInfo.split(",");
        	var setEnable = objDataset.enableevent;

        	objDataset.set_enableevent(false);

        	var i;
        	for (i=0; i<arrColumn.length; i++) {
        		if(objDataset.getConstColIndex(arrColumn[i]) < 0) objDataset.addColumn(arrColumn[i], "String","255");
        	}

        	if(objDataset.rowcount == 0) objDataset.addRow();

        	objDataset.set_enableevent(setEnable);

        };

        this.gfn_allTrim = function(sValue)
        {
        	if(sValue==null)		return "";
        	if (new String(sValue).valueOf() == "undefined") return "";

            var objValue = new String(sValue);
            var sRtnValue="";
            var i;

            return nexacro.trim( objValue );
        };

        this.getChangeRows = function (objDataset)
        {
        	var tmpDataset = new Dataset;

        	tmpDataset.copyData(objDataset);
        	for(var i=objDataset.rowcount-1; i>=0;i--)
        	{
        		if(objDataset.getRowType(i) != 2 && objDataset.getRowType(i) != 4)
        		{
        			tmpDataset.deleteRow(i);
        		}
        	}

        	return tmpDataset ;
        };


        this.mfn_ResetRoutingPosition = function ()
        {
        	if(this.selectRowRouting == -1 || this.selectRowRouting > this.ds_Routing.rowcount-1) return;
        	if(this.ds_Routing.rowcount > 0 && this.selectRowRouting >= 0) this.ds_Routing.set_rowposition(this.selectRowRouting);

        	this.selectRowRouting = -1;

        };


        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         *	재작업 번호 팝업
         */
        this.tab_search_Tab1_btn_ProcessDefID_onclick = function(obj,e)
        {
        	var pProcID = this.gfn_allTrim(this.ds_search.getColumn(0,"PROCESSDEFID"));
        	//-----------------
        // arg_type    : A::사용자가 선택, B:: 한건존재시 자동 셋팅
        // popupCd     : 공통팝업 관리 화면에서 생성되는 팝업코드
        // popupNm     : 변경할팝업화면명 , 변경하지 않을 경우 팝업화면 타이틀은 관리화면의 타이틀로 지정됨
        // rtnCols     : 구분자 : "|"   : 그리드에 출력될 컬럼 지정 (않을 경우 관리화면의 그리드로 출력됨)
        // paramCols   : 구분자 : "|" : where 구문에 들어갈 컬럼
        // paramValues : 구분자 : "|"  : where 구문에 들어갈 컬럼에 대한 값
        // searchStr   : 팝업 조회조건 콤보값 = 조회 값
        	var popupId = "SEARCH_PROCESSDEF";
        	var oArg = {};
        	oArg.arg_type = "B";
        	oArg.arg_popupCd = "P00106";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "PROCESSDEFID|PROCESSDEFNAME";
        	oArg.arg_paramCols = "PLANTID|ENTERPRISEID|PROCESSDEFID";
        	oArg.arg_paramValues = this.gf_getSiteType() + "|"+ this.gf_getEnterpriseId() + "|"+ pProcID;
        	oArg.arg_searchStr = "";

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=530,height=530");
        };

        /*
         *	조회 조건 변경 시
         */
        this.ds_search_oncolumnchanged = function(obj,e)
        {
        	//재작업 번호 변경 시
        	if(e.columnid == "PROCESSDEFID")
        	{
        		this.ds_cbo_ProcessDefVersion.clearData();

        		var sSvcID 			= "selectProcessdefVersion";
        		var sController 	= "/bas03000/selectProcessdefVersion.do";
        		var sInDatasets 	= "INPUT=ds_search";
        		var sOutDatasets 	= "ds_cbo_ProcessDefVersion=output";
        		var sArgs 			= "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        	}
        };

        this.btnAddRow_ds_Routing_onclick = function(obj,e)
        {
        	var nRow = this.ds_Routing.addRow();

        	this.ds_Routing.setColumn(nRow, "TEMPSEQ", Math.random());
        	this.ds_Routing.setColumn(nRow, "PROCESSDEFTYPE", "Rework");
        	this.ds_Routing.setColumn(nRow, "VERSIONSTATE", "Active");
        	this.ds_Routing.setColumn(nRow, "VALIDSTATE", "Valid");
        	this.ds_Routing.setColumn(nRow, "REWORKITEMCONTROL", "N");
        	this.ds_Routing.setColumn(nRow, "REWORKSEGMENTCONTROL", "Y");
        	this.ds_Routing.setColumn(nRow, "ENTERPRISEID",this.gf_getEnterpriseId() );
        	this.ds_Routing.setColumn(nRow, "PLANTID", this.gf_getSiteType());

        };


        this.btnDelRow_ds_Routing_onclick = function(obj,e)
        {
        	if(this.ds_Operation.rowcount > 0 || this.ds_ReworkProduct > 0 || this.ds_ReworkArea > 0)
        	{
        		var bRtn = this.gfn_confirm("DeleteLinkedItemByReworkRouting", "warning", ""); //"입력한 내용이 있으면 현재 작성중인 내용이 모두 삭제됩니다."

        		if(bRtn == false) return;
        	}

        	this.ds_Routing.deleteRow(this.ds_Routing.rowposition);
        };

        /*
         *	상단 그리드 row 선택 시
         */
        this.ds_Routing_onrowposchanged = function(obj,e)
        {
        	if(this.gfn_dsIsUpdated(this.ds_Operation) || this.gfn_dsIsUpdated(this.ds_ReworkProduct)  || this.gfn_dsIsUpdated(this.ds_ReworkArea) )
        	{
        		var bRtn = this.gfn_confirm("WRITTENBEDELETE", "information", ""); //"입력한 내용이 있으면 현재 작성중인 내용이 모두 삭제됩니다."

        		if(bRtn == false)  return;
        	}

        	var processClassType = this.ds_Routing.getColumn(e.newrow,"PROCESSCLASSTYPE");
        	this.ds_cbo_ProcessClassID2.set_loadfiltermode( "reset" );
        	if(processClassType != ""){
        		this.ds_cbo_ProcessClassID2.set_filterstr("PROCESSCLASSTYPE=='"+ processClassType +"'");
        	}

        	this.ds_Operation.clearData();
        	this.ds_ReworkProduct.clearData();
        	this.ds_ReworkArea.clearData();

        	if(this.div_work.form.tab_Rework.tabindex == 0)  this.getOperation();
        	if(this.div_work.form.tab_Rework.tabindex == 1)  this.getReworkProduct();
        	if(this.div_work.form.tab_Rework.tabindex == 2)  this.getReworkArea();

        };


        this.ds_Routing_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "PROCESSCLASSTYPE"){
        		var processClassType = this.ds_Routing.getColumn(e.row,"PROCESSCLASSTYPE");
        		this.ds_cbo_ProcessClassID2.set_loadfiltermode( "reset" );
        		if(processClassType != ""){
        			this.ds_cbo_ProcessClassID2.set_filterstr("PROCESSCLASSTYPE=='"+ processClassType +"'");
        		}
        	}
        };

        /*
         *	중간 탭 페이지 변경 시
         */
        this.div_work_tab_Rework_onchanged = function(obj,e)
        {
        	if(this.gfn_dsIsUpdated(this.ds_Operation) || this.gfn_dsIsUpdated(this.ds_ReworkProduct)  || this.gfn_dsIsUpdated(this.ds_ReworkArea) )
        	{
        		var bRtn = this.gfn_confirm("WRITTENBEDELETE", "information", ""); //"입력한 내용이 있으면 현재 작성중인 내용이 모두 삭제됩니다."

        		if(bRtn == false)  return;
        	}

        	if(this.div_work.form.tab_Rework.tabindex == 0)  this.getOperation();
        	if(this.div_work.form.tab_Rework.tabindex == 1)  this.getReworkProduct();
        	if(this.div_work.form.tab_Rework.tabindex == 2)  this.getReworkArea();
        };

        /*
         *	하단 탭 페이지 변경 시
         */
        this.div_work_tab_Resource_onchanged = function(obj,e)
        {
        	if(this.gfn_dsIsUpdated(this.ds_Resource) || this.gfn_dsIsUpdated(this.ds_Equipment))
        	{
        		var bRtn = this.gfn_confirm("WRITTENBEDELETE", "information", ""); //"입력한 내용이 있으면 현재 작성중인 내용이 모두 삭제됩니다."

        		if(bRtn == false)  return;
        	}

        	if(this.div_work.form.tab_Resource.tabindex == 0)  this.getResource();
        	if(this.div_work.form.tab_Resource.tabindex == 1)  this.getEquipment();
        };

        /*
         *	중간 탭에 공정순서 그리드 팝업 버튼.
         */
        this.grdOperation_onexpanddown = function(obj,e)
        {
        	var idxProcSegID = this.div_work.form.tab_Rework.Tabpage1.form.grdOperation.getBindCellIndex("body","PROCESSSEGMENTID");
        	var idxResourceID = this.div_work.form.tab_Rework.Tabpage1.form.grdOperation.getBindCellIndex("body","RESOURCEID");

        	var languageType = nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType");


        	if(e.cell == idxProcSegID)
        	{
        		var pProcSegID = this.gfn_allTrim(this.ds_Operation.getColumn(e.row,"PROCESSSEGMENTID"));
        		var pProcSegNM = this.gfn_allTrim(this.ds_Operation.getColumn(e.row,"PROCESSSEGMENTNAME"));

        		var popupId = "SEARCH_PROCESSSEGMENT";
        		var oArg = {};
        		oArg.arg_type = "C";
        		oArg.arg_popupCd = "P00111";
        		oArg.arg_popupNm = "";
        		oArg.arg_rtnCols = "PROCESSSEGMENTID|PROCESSSEGMENTNAME";
        		oArg.arg_paramCols = "PROCESSSEGMENTID|PROCESSSEGMENTNAME|VALIDSTATE|LANGUAGETYPE|ENTERPRISEID";
        		oArg.arg_paramValues = pProcSegID + "|" + pProcSegNM + "|" + "Valid" + "|" + languageType + "|" + this.gf_getEnterpriseId();
        		oArg.arg_searchStr = "";

        		this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=600,height=600");

        	} else if (e.cell == idxResourceID)
        	{
        		if(this.ds_Operation.getRowType(e.row) != "2" ) return;
        		var resourceID = this.gfn_allTrim(this.ds_Operation.getColumn(e.row,"RESOURCEID"));
        		var description = this.gfn_allTrim(this.ds_Operation.getColumn(e.row,"RESOURCENAME"));
        		var procSegID = this.gfn_allTrim(this.ds_Operation.getColumn(e.row,"PROCESSSEGMENTID"));
        		var plantID = this.gfn_allTrim(this.ds_Operation.getColumn(e.row,"PLANTID"));

        		var popupId = "SEARCH_OPERATIONRESOURCE";
        		var oArg = {};
        		oArg.arg_type = "B";
        		oArg.arg_popupCd = "P00044";
        		oArg.arg_popupNm = "";
        		oArg.arg_rtnCols = "RESOURCEID|DESCRIPTION|AREAID|AREANAME|EQUIPMENTCLASSID|EQUIPMENTCLASSNAME";
        		oArg.arg_paramCols = "RESOURCEID|DESCRIPTION|PROCESSSEGMENTID|PLANTID|LANGUAGETYPE|ENTERPRISEID";
        		oArg.arg_paramValues = resourceID + "|" + description + "|" + procSegID + "|" + plantID + "|" + languageType + "|" + this.gf_getEnterpriseId();
        		oArg.arg_searchStr = "";

        		this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=830,height=700");
        	}

        };

        /*
         *	공정순서 추가 버튼 클릭 시
         */
        this.btnAddRow_ds_Operation_onclick = function(obj,e)
        {
        	if(this.ds_Routing.rowposition < 0)
        	{
        		this.gfn_Message("CheckRegistReworkRouting", null, "warning", "ok");
        		return;
        	}
        	var nRow = this.ds_Operation.addRow();
        	var rRow = this.ds_Routing.rowcount == 1 ? 0 : this.ds_Routing.rowposition;

        	this.ds_Operation.setColumn(nRow, "PROCESSSEGMENTVERSION", "*");
        	this.ds_Operation.setColumn(nRow, "ENTERPRISEID", this.ds_Routing.getColumn(rRow, "ENTERPRISEID"));
        	this.ds_Operation.setColumn(nRow, "PLANTID", this.ds_Routing.getColumn(rRow, "PLANTID"));
        	this.ds_Operation.setColumn(nRow, "VALIDSTATE", "Valid");
        	this.ds_Operation.setColumn(nRow, "ALTERNATIVERESOURCE", "N");
        	this.ds_Operation.setColumn(nRow, "ASSIGNEQUIPMENT", "N");
        	this.ds_Operation.setColumn(nRow, "PROCESSUOM", "PCS");
        	this.ds_Operation.setColumn(nRow, "PATHSEQUENCE", "0");
        	var seq = nexacro.toNumber(this.ds_Operation.getMax("USERSEQUENCE"),0) + 10;
        	this.ds_Operation.setColumn(nRow, "USERSEQUENCE", seq);

        	if(this.ds_Routing.getRowType(rRow) ==2)
        	{
        		this.ds_Operation.setColumn(nRow, "PROCESSDEFVERSION", "");
        		this.ds_Operation.setColumn(nRow, "PROCESSDEFID", this.ds_Routing.getColumn(rRow, "TEMPSEQ"));
        	} else {
        		this.ds_Operation.setColumn(nRow, "PROCESSDEFVERSION", this.ds_Routing.getColumn(rRow, "PROCESSDEFVERSION_R"));
        		this.ds_Operation.setColumn(nRow, "PROCESSDEFID", this.ds_Routing.getColumn(rRow, "PROCESSDEFID_R"));
        	}

        };


        this.btnDelRow_ds_Operation_onclick = function(obj,e)
        {
        	var bRtn = this.gfn_confirm("DeleteLinkedItemBySegment", "warning", ""); //해당 공정과 연결된 항목이 있습니다. 전부 삭제 하시겠습니까?

        	if(bRtn == false)  return;
        	this.ds_Operation.deleteRow(this.ds_Operation.rowposition);

        };


        /*
         *	공정순서 그리드에 설비지정 값을 'Y' 로 바꿀 수 있는 지 확인
         */
        this.ds_Operation_cancolumnchange = function(obj,e)
        {

        	if(e.columnid == "ALTERNATIVERESOURCE" && e.newvalue == "Y")//대체 자원 바꾸려고 하면
        	{
        		if(this.ds_Equipment.rowcount > 0 || this.ds_Operation.getColumn(e.row,"ASSIGNEQUIPMENT")=="Y")
        		{
        			this.gfn_Message("ReworkRegistEquipment", null, "warning", "ok");
        			return false;
        		}
        	}

        	if(e.columnid == "ASSIGNEQUIPMENT" && e.newvalue == "Y") //설비 지정 바꾸려고 하면
        	{
        		if(this.ds_Resource.rowcount > 0 || this.ds_Operation.getColumn(e.row,"ALTERNATIVERESOURCE")=="Y")
        		{
        			this.gfn_Message("ReworkRegistResource", null, "warning", "ok");
        			return false;
        		}
        	}
        };

        /*
         *	공정순서 그리드
         */
        this.ds_Operation_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "ALTERNATIVERESOURCE" && e.newvalue == "Y") //대체 자원 'Y'선택하면 대체 자원 탭 연다.
        	{
        		this.div_work.form.tab_Resource.set_tabindex(0);
        	} else if(e.columnid == "ASSIGNEQUIPMENT" && e.newvalue == "Y")//설비 지정 'Y'선택하면 설비 지정 탭 연다.
        	{
        		this.div_work.form.tab_Resource.set_tabindex(1);
        	}
        };

        this.ds_Operation_onrowposchanged = function(obj,e)
        {
        	if(e.newrow < 0) return;
        	this.Get_tab_Resource();
        };

        this.Get_tab_Resource = function ()
        {
        	this.ds_Resource.clearData();
        	this.ds_Equipment.clearData();

        	if(this.div_work.form.tab_Resource.tabindex == 0) {
        		if(this.gfn_dsIsUpdated(this.ds_Resource)) this.gfn_Message("WRITTENBEDELETE", null, "information", "ok");
        		this.getResource();
        	}

        	if(this.div_work.form.tab_Resource.tabindex == 1) {
        		if(this.gfn_dsIsUpdated(this.ds_Equipment)) this.gfn_Message("WRITTENBEDELETE", null, "information", "ok");
        		this.getEquipment();
        	}
        };


        this.btnAddRow_ds_ReworkProduct_onclick = function(obj,e)
        {
        	if(this.ds_Routing.rowposition < 0)
        	{
        		this.gfn_Message("CheckRegistReworkRouting", null, "warning", "ok");
        		return;
        	}
        	var rRow = this.ds_Routing.rowcount == 1 ? 0 : this.ds_Routing.rowposition;
        	if(this.ds_Routing.getColumn(rRow, "REWORKITEMCONTROL") != "Y" )
        	{
        		this.gfn_Message("CheckRegistProductByRework", null, "warning", "ok");
        		return;
        	}


        	var nRow = this.ds_ReworkProduct.addRow();

        	this.ds_ReworkProduct.setColumn(nRow, "PROCESSDEFID", this.ds_Routing.getColumn(rRow, "PROCESSDEFID_R"));
        	this.ds_ReworkProduct.setColumn(nRow, "PROCESSDEFVERSION", this.ds_Routing.getColumn(rRow, "PROCESSDEFVERSION_R"));
        	this.ds_ReworkProduct.setColumn(nRow, "CONTROLTYPE", "Product");
        	this.ds_ReworkProduct.setColumn(nRow, "VALIDSTATE", "Valid");
        	this.ds_ReworkProduct.setColumn(nRow, "ENTERPRISEID", this.ds_Routing.getColumn(rRow, "ENTERPRISEID"));
        	this.ds_ReworkProduct.setColumn(nRow, "PLANTID", this.ds_Routing.getColumn(rRow, "PLANTID"));
        	this.ds_ReworkProduct.setColumn(nRow, "SEQ", 0);


        };


        this.btnDelRow_ds_ReworkProduct_onclick = function(obj,e)
        {
        	var bRtn = this.gfn_confirm("DeleteLinkedItemByProduct", "warning", ""); //해당 품목과 연결된 항목이 있습니다. 전부 삭제 하시겠습니까?

        	if(bRtn == false)  return;
        	this.ds_ReworkProduct.deleteRow(this.ds_ReworkProduct.rowposition);

        };


        this.grdReworkProduct_onexpanddown = function(obj,e)
        {
        	var resourceID = this.ds_ReworkProduct.getColumn(e.row,"RESOURCEID");

        	var popupId = "SEARCH_REWORKPRODUCT";
        	var oArg = {};
        	oArg.arg_type = "C";
        	oArg.arg_popupCd = "P00112";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "PRODUCTDEFID|PRODUCTDEFNAME|PRODUCTDEFVERSION";
        	oArg.arg_paramCols = "TXTPRODUCTDEFNAME|PRODUCTDEFTYPE";
        	oArg.arg_paramValues = resourceID + "|Product";
        	oArg.arg_searchStr = "";

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=830,height=700");
        };


        this.btnAddRow_ds_ReworkArea_onclick = function(obj,e)
        {
        	if(this.ds_Routing.rowposition < 0)
        	{
        		this.gfn_Message("CheckRegistReworkRouting", null, "warning", "ok");
        		return;
        	}

        	var nRow = this.ds_ReworkArea.addRow();
        	var rRow = this.ds_Routing.rowcount == 1 ? 0 : this.ds_Routing.rowposition;

        	this.ds_ReworkProduct.setColumn(nRow, "PROCESSDEFID", this.ds_Routing.getColumn(rRow, "PROCESSDEFID_R"));
        	this.ds_ReworkProduct.setColumn(nRow, "PROCESSDEFVERSION", this.ds_Routing.getColumn(rRow, "PROCESSDEFVERSION_R"));
        	this.ds_ReworkProduct.setColumn(nRow, "CONTROLTYPE", "Area");
        	this.ds_ReworkProduct.setColumn(nRow, "VALIDSTATE", "Valid");
        	this.ds_ReworkProduct.setColumn(nRow, "ENTERPRISEID", this.ds_Routing.getColumn(rRow, "ENTERPRISEID"));
        	this.ds_ReworkProduct.setColumn(nRow, "PLANTID", this.ds_Routing.getColumn(rRow, "PLANTID"));
        	this.ds_ReworkProduct.setColumn(nRow, "SEQ", 0);
        };



        this.grdReworkArea_onexpanddown = function(obj,e)
        {
        	var areaID = this.gfn_allTrim(this.ds_ReworkArea.getColumn(e.row,"RESOURCEID"));
        	var languageType = nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType");

        	var popupId = "SEARCH_REWORKAREA";
        	var oArg = {};
        	oArg.arg_type = "C";
        	oArg.arg_popupCd = "P00124";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "AREAID|AREANAME";
        	oArg.arg_paramCols = "TXTAREA|PLANTID|LANGUAGETYPE";
        	oArg.arg_paramValues = areaID + "|" + this.gf_getSiteType() + "|" + languageType;
        	oArg.arg_searchStr = "";

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=500,height=450");
        };

        this.btnAddRow_ds_Resource_onclick = function(obj,e)
        {
        	if(this.ds_Operation.rowposition < 0)
        	{
        		this.gfn_Message("CheckRegistReworkRouting", null, "warning", "ok");
        		return;
        	}

        	var oRow = this.ds_Operation.rowcount == 1 ? 0 : this.ds_Operation.rowposition;

        	if(this.ds_Operation.getColumn(oRow, "ALTERNATIVERESOURCE") == "N" )
        	{
        		this.gfn_Message("CheckRegistResourceByRework", null, "warning", "ok");
        		return;
        	}

        	var nRow = this.ds_Resource.addRow();


        	this.ds_Resource.setColumn(nRow, "PRODUCTDEFID", "*");
        	this.ds_Resource.setColumn(nRow, "PRODUCTDEFVERSION", "*");
        	this.ds_Resource.setColumn(nRow, "PROCESSDEFID", this.ds_Operation.getColumn(oRow, "PROCESSDEFID"));
        	this.ds_Resource.setColumn(nRow, "PROCESSDEFVERSION", this.ds_Operation.getColumn(oRow, "PROCESSDEFVERSION"));
        	this.ds_Resource.setColumn(nRow, "PROCESSSEGMENTID", this.ds_Operation.getColumn(oRow, "PROCESSSEGMENTID"));
        	this.ds_Resource.setColumn(nRow, "PROCESSSEGMENTVERSION", this.ds_Operation.getColumn(oRow, "PROCESSSEGMENTVERSION"));
        	this.ds_Resource.setColumn(nRow, "EQUIPMENTID", "*");
        	this.ds_Resource.setColumn(nRow, "RESOURCETYPE", "Resource");
        	this.ds_Resource.setColumn(nRow, "RESOURCECLASSID", "*");
        	this.ds_Resource.setColumn(nRow, "SEQ", "1");
        	this.ds_Resource.setColumn(nRow, "VALIDSTATE", "Valid");
        	this.ds_Resource.setColumn(nRow, "ENTERPRISEID", this.ds_Operation.getColumn(oRow, "ENTERPRISEID"));
        	this.ds_Resource.setColumn(nRow, "PLANTID", this.ds_Operation.getColumn(oRow, "PLANTID"));
        	this.ds_Resource.setColumn(nRow, "RESOURCEVERSION", "*");
        	this.ds_Resource.setColumn(nRow, "ISPRIMARYRESOURCE", "N");
        };


        this.grdResource_onexpanddown = function(obj,e)
        {
        	if(this.ds_Resource.getRowType(e.row) != "2" ) return;
        	var resourceID = this.gfn_allTrim(this.ds_Resource.getColumn(e.row,"RESOURCEID"));
        	var description = this.gfn_allTrim(this.ds_Resource.getColumn(e.row,"RESOURCENAME"));
        	var procSegID = this.gfn_allTrim(this.ds_Resource.getColumn(e.row,"PROCESSSEGMENTID"));
        	var plantID = this.gfn_allTrim(this.ds_Resource.getColumn(e.row,"PLANTID"));
        	var erterpriseID = this.gfn_allTrim(this.ds_Resource.getColumn(e.row,"ENTERPRISEID"));
        	var languageType = nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType");

        	var popupId = "SEARCH_RESOURCE";
        	var oArg = {};
        	oArg.arg_type = "C";
        	oArg.arg_popupCd = "P00044";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "RESOURCEID|DESCRIPTION|AREAID|AREANAME|EQUIPMENTCLASSID|EQUIPMENTCLASSNAME";
        	oArg.arg_paramCols = "RESOURCEID|DESCRIPTION|PROCESSSEGMENTID|PLANTID|LANGUAGETYPE|ENTERPRISEID";
        	oArg.arg_paramValues = resourceID + "|" + description + "|" + procSegID + "|" + plantID + "|" + languageType + "|" + erterpriseID;
        	oArg.arg_searchStr = "";

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=830,height=700");
        };


        this.btnAddRow_ds_Equipment_onclick = function(obj,e)
        {
        	if(this.ds_Operation.rowposition < 0)
        	{
        		this.gfn_Message("CheckRegistReworkRouting", null, "warning", "ok");
        		return;
        	}
        	var oRow = this.ds_Operation.rowcount == 1 ? 0 : this.ds_Operation.rowposition;

        	if(this.ds_Operation.getColumn(oRow, "ALTERNATIVERESOURCE") == "Y" )
        	{
        		this.gfn_Message("ReworkRegistEquipment", null, "warning", "ok");
        		return;
        	}

        	if(this.ds_Operation.getColumn(oRow, "ASSIGNEQUIPMENT") == "N" )
        	{
        		this.gfn_Message("CheckRegistEquipmentByRework", null, "warning", "ok");
        		return;
        	}

        	var nRow = this.ds_Equipment.addRow();

        	this.ds_Equipment.setColumn(nRow, "PRODUCTDEFID", "*");
        	this.ds_Equipment.setColumn(nRow, "PRODUCTDEFVERSION", "*");
        	this.ds_Equipment.setColumn(nRow, "PROCESSDEFID", this.ds_Operation.getColumn(oRow, "PROCESSDEFID"));
        	this.ds_Equipment.setColumn(nRow, "PROCESSDEFVERSION", this.ds_Operation.getColumn(oRow, "PROCESSDEFVERSION"));
        	this.ds_Equipment.setColumn(nRow, "PROCESSSEGMENTID", this.ds_Operation.getColumn(oRow, "PROCESSSEGMENTID"));
        	this.ds_Equipment.setColumn(nRow, "PROCESSSEGMENTVERSION", this.ds_Operation.getColumn(oRow, "PROCESSSEGMENTVERSION"));
        	this.ds_Equipment.setColumn(nRow, "RESOURCETYPE", "Equipment");
        	this.ds_Equipment.setColumn(nRow, "RESOURCECLASSID", "*");
        	this.ds_Equipment.setColumn(nRow, "SEQ", "1");
        	this.ds_Equipment.setColumn(nRow, "VALIDSTATE", "Valid");
        	this.ds_Equipment.setColumn(nRow, "ENTERPRISEID", this.ds_Operation.getColumn(oRow, "ENTERPRISEID"));
        	this.ds_Equipment.setColumn(nRow, "PLANTID", this.ds_Operation.getColumn(oRow, "PLANTID"));
        	this.ds_Equipment.setColumn(nRow, "RESOURCEVERSION", "*");
        	this.ds_Equipment.setColumn(nRow, "RESOURCEID", "*");

        };


        this.grdEquipment_onexpanddown = function(obj,e)
        {
        	if(this.ds_Equipment.getRowType(e.row) != "2" ) return;
        	var resourceID = this.gfn_allTrim(this.ds_Equipment.getColumn(e.row,"RESOURCEID"));
        	var procSegID = this.gfn_allTrim(this.ds_Equipment.getColumn(e.row,"PROCESSSEGMENTID"));
        	var languageType = nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType");

        	var popupId = "SEARCH_EQUIPMENT";
        	var oArg = {};
        	oArg.arg_type = "C";
        	oArg.arg_popupCd = "P00129";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "EQUIPMENTID|EQUIPMENTNAME";
        	oArg.arg_paramCols = "PROCESSSEGMENTID|EQUIPMENTID|LANGUAGETYPE";
        	oArg.arg_paramValues = procSegID + "|" + resourceID + "|" + languageType ;
        	oArg.arg_searchStr = "";

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=500,height=450");
        };

        /*
         *	공정 수순 채번
         */
        this.btn_RoutingSegSeq_onclick = function(obj,e)
        {
        	var sequence = 0;
        	this.ds_Operation.set_enableevent(false);
        	for(var i=0;i<this.ds_Operation.rowcount ; i++)
        	{
        		sequence += 10;
        		this.ds_Operation.setColumn(i,"USERSEQUENCE",sequence);
        	}
        	this.ds_Operation.set_enableevent(true);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.tab_search.Tabpage1.form.btn_ProcessDefID.addEventHandler("onclick",this.tab_search_Tab1_btn_ProcessDefID_onclick,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.tab_search_Tabpage1_btn_clear_onclick,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.div_work.form.btnDelRow_ds_Routing.addEventHandler("onclick",this.btnDelRow_ds_Routing_onclick,this);
            this.div_work.form.btnAddRow_ds_Routing.addEventHandler("onclick",this.btnAddRow_ds_Routing_onclick,this);
            this.div_work.form.btn_RoutingSegSeq.addEventHandler("onclick",this.btn_RoutingSegSeq_onclick,this);
            this.div_work.form.tab_Resource.addEventHandler("onchanged",this.div_work_tab_Resource_onchanged,this);
            this.div_work.form.tab_Resource.Tabpage1.form.grdResource.addEventHandler("onexpanddown",this.grdResource_onexpanddown,this);
            this.div_work.form.tab_Resource.Tabpage1.form.btnAddRow_ds_Resource.addEventHandler("onclick",this.btnAddRow_ds_Resource_onclick,this);
            this.div_work.form.tab_Resource.Tabpage2.form.grdEquipment.addEventHandler("onexpanddown",this.grdEquipment_onexpanddown,this);
            this.div_work.form.tab_Resource.Tabpage2.form.btnAddRow_ds_Equipment.addEventHandler("onclick",this.btnAddRow_ds_Equipment_onclick,this);
            this.div_work.form.tab_Rework.addEventHandler("onchanged",this.div_work_tab_Rework_onchanged,this);
            this.div_work.form.tab_Rework.Tabpage1.form.grdOperation.addEventHandler("onexpanddown",this.grdOperation_onexpanddown,this);
            this.div_work.form.tab_Rework.Tabpage1.form.btnDelRow_ds_Operation.addEventHandler("onclick",this.btnDelRow_ds_Operation_onclick,this);
            this.div_work.form.tab_Rework.Tabpage1.form.btnAddRow_ds_Operation.addEventHandler("onclick",this.btnAddRow_ds_Operation_onclick,this);
            this.div_work.form.tab_Rework.Tabpage2.form.grdReworkProduct.addEventHandler("onexpanddown",this.grdReworkProduct_onexpanddown,this);
            this.div_work.form.tab_Rework.Tabpage2.form.btnDelRow_ds_ReworkProduct.addEventHandler("onclick",this.btnDelRow_ds_ReworkProduct_onclick,this);
            this.div_work.form.tab_Rework.Tabpage2.form.btnAddRow_ds_ReworkProduct.addEventHandler("onclick",this.btnAddRow_ds_ReworkProduct_onclick,this);
            this.div_work.form.tab_Rework.Tabpage3.form.btnAddRow_ds_ReworkArea.addEventHandler("onclick",this.btnAddRow_ds_ReworkArea_onclick,this);
            this.div_work.form.tab_Rework.Tabpage3.form.grdReworkArea.addEventHandler("onexpanddown",this.grdReworkArea_onexpanddown,this);
            this.div_work.form.grdRouting.addEventHandler("onexpanddown",this.grdOperation_onexpanddown,this);
            this.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.ds_search.addEventHandler("oncolumnchanged",this.ds_search_oncolumnchanged,this);
            this.ds_Routing.addEventHandler("onrowposchanged",this.ds_Routing_onrowposchanged,this);
            this.ds_Routing.addEventHandler("oncolumnchanged",this.ds_Routing_oncolumnchanged,this);
            this.ds_Operation.addEventHandler("cancolumnchange",this.ds_Operation_cancolumnchange,this);
            this.ds_Operation.addEventHandler("oncolumnchanged",this.ds_Operation_oncolumnchanged,this);
            this.ds_Operation.addEventHandler("onvaluechanged",this.ds_Operation_onvaluechanged,this);
            this.ds_Operation.addEventHandler("onrowposchanged",this.ds_Operation_onrowposchanged,this);
        };
        this.loadIncludeScript("BAS03000M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
