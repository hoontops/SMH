(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS02900M");
            this.set_titletext("Routing 자원/치공구 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"RODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tree", this);
            obj._setContents("<ColumnInfo><Column id=\"ASSEMBLYITEMNAME\" type=\"STRING\" size=\"32\"/><Column id=\"DISPLAYNAME\" type=\"STRING\" size=\"32\"/><Column id=\"USERSEQUENCE\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PARENTBOMSEQUENCE\" type=\"STRING\" size=\"32\"/><Column id=\"ASSEMBLYQTY\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"BOMSEQUENCE\" type=\"STRING\" size=\"32\"/><Column id=\"ASSEMBLYITEMID\" type=\"STRING\" size=\"32\"/><Column id=\"PARENTBOMID\" type=\"STRING\" size=\"32\"/><Column id=\"MASTERDATACLASSID\" type=\"STRING\" size=\"32\"/><Column id=\"ASSEMBLYTYPE\" type=\"STRING\" size=\"32\"/><Column id=\"ASSEMBLYITEMVERSION\" type=\"STRING\" size=\"32\"/><Column id=\"BOMID\" type=\"STRING\" size=\"32\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"32\"/><Column id=\"ASSEMBLYSEQUENCE\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"COMPLETIONWAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UOMDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"PNLSIZEXAXIS\" type=\"STRING\" size=\"256\"/><Column id=\"PNLSIZEYAXIS\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"PCSMM\" type=\"STRING\" size=\"256\"/><Column id=\"USELAYER\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_operation", this);
            obj._setContents("<ColumnInfo><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"OPERATIONID\" type=\"STRING\" size=\"256\"/><Column id=\"OPERATIONSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEYN\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEYN\" type=\"STRING\" size=\"256\"/><Column id=\"MAINPRODUCTID\" type=\"STRING\" size=\"256\"/><Column id=\"MAINPRODUCTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ISREQUIREDMATERIAL\" type=\"STRING\" size=\"256\"/><Column id=\"ISREQUIREDOPERATIONSPEC\" type=\"STRING\" size=\"256\"/><Column id=\"ISREQUIREDTOOL\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_resource", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"OPERATIONRESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCESEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"OPERATIONID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULESEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"AVAILABLECAPACITY\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSENAME\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRIMARY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CREATORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MAINPRODUCTID\" type=\"STRING\" size=\"256\"/><Column id=\"MAINPRODUCTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCECLASSID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_durable", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"TOOLCODE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"FILMUSELAYER1\" type=\"STRING\" size=\"256\"/><Column id=\"FILMUSELAYER2\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"OPERATIONID\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLDETAILTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"HITCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SUMMARY\" type=\"STRING\" size=\"256\"/><Column id=\"WRAPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tempTree", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_resultDurable", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DURABLECLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLETYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILMUSELAYER1\" type=\"STRING\" size=\"256\"/><Column id=\"FILMUSELAYER2\" type=\"STRING\" size=\"256\"/><Column id=\"FILMUSELAYER1NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILMUSELAYER2NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLDETAILTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FORM\" type=\"STRING\" size=\"256\"/><Column id=\"SUMMARY\" type=\"STRING\" size=\"256\"/><Column id=\"HITCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLECLASSNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sendDurable", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"OPERATIONID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRIMARYRESOURCE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"FILMUSELAYER1\" type=\"STRING\" size=\"256\"/><Column id=\"_STATE_\" type=\"STRING\" size=\"256\"/><Column id=\"WRAPTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sendDefault", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"OPERATIONID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRIMARYRESOURCE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"RODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("StaTitle","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
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

            obj = new Static("sta_title","30","16","272","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
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
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("StaticGuideTitle","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);

            obj = new Tab("tab_search","0","47","290",null,null,"47",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("staPlantList","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PLANTID","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,SiteType,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProductDefVersion","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("Rev.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("INNERREVISION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","125","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","125","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            obj.set_hotkey("F2");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip00",null,"0","15",null,"0","0",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip01","0","0","15",null,null,"0",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip02","0","0",null,"10","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip03","0","30",null,"5","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04","0","105",null,"20","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","125","10","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProcductName","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMNAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFVERSION","108","60","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_enable("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDNM","108","85","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_enable("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProductCode","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("PRODUCTDEFID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID","108","35","143","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnProductCode",null,"35","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("StaticTitleBOM","0","0","230","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("BOM 구조");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("TREEROUNTING");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("treeRouting","0","34","230",null,null,"0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_cssclass("grd_tree");
            obj.set_binddataset("ds_tree");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_treeinitstatus("collapse,all");
            obj.set_treeuseexpandkey("true");
            obj.set_treeusecheckbox("false");
            obj.set_treeusebutton("use");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"260\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" text=\"bind:DISPLAYNAME\" treestartlevel=\"0\" treelevel=\"bind:BOMLEVEL\" autosizecol=\"none\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grdDetail","240","34",null,"63","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_cssclass("grd_detail");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_fillareatype("datarow");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none");
            obj.set_binddataset("ds_detail");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"31\"/><Row size=\"31\"/></Rows><Band id=\"body\"><Cell cssclass=\"cell_head\" text=\"고객사명\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" wordWrap=\"english\" tooltiptext=\"CUTOMERNAME\"/><Cell col=\"1\" text=\"bind:CUSTOMERNAME\" textAlign=\"left\" wordWrap=\"english\"/><Cell col=\"2\" cssclass=\"cell_head\" text=\"품목코드\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" wordWrap=\"english\" tooltiptext=\"PRODUCTDEFID\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\" wordWrap=\"english\"/><Cell col=\"4\" cssclass=\"cell_head\" text=\"Rev.\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" wordWrap=\"english\" tooltiptext=\"INNERREVISION\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\" wordWrap=\"english\"/><Cell col=\"6\" cssclass=\"cell_head\" text=\"품목명\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" wordWrap=\"english\" tooltiptext=\"PRODUCTDEFNAME\"/><Cell col=\"7\" colspan=\"3\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\" wordWrap=\"english\" cssclass=\"cell_end\"/><Cell row=\"1\" cssclass=\"cell_head\" text=\"작업구분\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" wordWrap=\"english\" tooltiptext=\"WORKTYPE\"/><Cell row=\"1\" col=\"1\" text=\"bind:JOBTYPENAME\" textAlign=\"left\" wordWrap=\"english\"/><Cell row=\"1\" col=\"2\" cssclass=\"cell_head\" text=\"생산구분\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" wordWrap=\"english\" tooltiptext=\"PRODUCTIONTYPE\"/><Cell row=\"1\" col=\"3\" text=\"bind:PRODUCTIONTYPENAME\" textAlign=\"left\" wordWrap=\"english\"/><Cell row=\"1\" col=\"4\" cssclass=\"cell_head,cell_point\" text=\"RTR/SHEET\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" wordWrap=\"english\"/><Cell row=\"1\" col=\"5\" text=\"bind:RTRSHT\" textAlign=\"left\" wordWrap=\"english\"/><Cell row=\"1\" col=\"6\" cssclass=\"cell_head\" text=\"PNL X\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" wordWrap=\"english\" tooltiptext=\"PANELX\"/><Cell row=\"1\" col=\"7\" text=\"bind:PNLSIZEXAXIS\" textAlign=\"left\" wordWrap=\"english\"/><Cell row=\"1\" col=\"8\" cssclass=\"cell_head\" text=\"PNL Y\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" wordWrap=\"english\" tooltiptext=\"PANELY\"/><Cell row=\"1\" col=\"9\" text=\"bind:PNLSIZEYAXIS\" textAlign=\"left\" wordWrap=\"english\" cssclass=\"cell_end\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("StaticTitleOper","240","97","100","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_text("공정");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("SpecClass004");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grdOperation","240","131",null,"369","1",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_binddataset("ds_operation");
            obj.set_autoenter("select");
            obj.set_treeinitstatus("expand,null");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"42\"/><Column size=\"70\"/><Column size=\"75\"/><Column size=\"70\"/><Column size=\"0\"/><Column size=\"160\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"300\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"Site ID\"/><Cell col=\"2\" text=\"공정수순\"/><Cell col=\"3\" text=\"공정코드\"/><Cell col=\"4\" text=\"OPERATIONID\"/><Cell col=\"5\" text=\"공정명\"/><Cell col=\"6\" text=\"RESOURCEYN\" tooltiptext=\"ISRESOURCEREGIST\"/><Cell col=\"7\" text=\"DURABLEYN\" tooltiptext=\"ISDURABLEREGIST\"/><Cell col=\"8\" text=\"자원등록\"/><Cell col=\"9\" text=\"치공구등록\"/><Cell col=\"10\" text=\"특기사항\" tooltiptext=\"DFFREMARKS\"/><Cell col=\"11\" text=\"자재\" tooltiptext=\"MATERIALCHANGETYPE\"/><Cell col=\"12\" text=\"공정SPEC\"/><Cell col=\"13\" text=\"치공구\" tooltiptext=\"TOOLCHANGETYPE\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:PLANTID\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:USERSEQUENCE\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTID\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:OPERATIONID\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:RESOURCEYN\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:DURABLEYN\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:RESOURCEYN\"/><Cell col=\"9\" text=\"bind:DURABLEYN\"/><Cell col=\"10\" text=\"bind:DESCRIPTION\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:ISREQUIREDMATERIAL\"/><Cell col=\"12\" text=\"bind:ISREQUIREDOPERATIONSPEC\"/><Cell col=\"13\" text=\"bind:ISREQUIREDTOOL\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grdOperation",null,"103","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tab","240","500",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab);
            obj.set_text("자원");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Grid("grdResource","-18","34",null,null,"18","1",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_resource");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"220\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"170\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"자원 코드\" cssclass=\"cell_point\"/><Cell col=\"1\" text=\"자원명\"/><Cell col=\"2\" text=\"주작업여부\"/><Cell col=\"3\" text=\"설비그룹 코드\"/><Cell col=\"4\" text=\"설비그룹 명\"/><Cell col=\"5\" text=\"작업장 코드\"/><Cell col=\"6\" text=\"작업장\"/><Cell col=\"7\" text=\"생성자명\"/><Cell col=\"8\" text=\"생성일\"/><Cell col=\"9\" text=\"수정자명\"/><Cell col=\"10\" text=\"수정일\"/><Cell col=\"11\" text=\"CREATOR\"/><Cell col=\"12\" text=\"MODIFIER\"/></Band><Band id=\"body\"><Cell text=\"bind:RESOURCEID\" expandshow=\"expr:dataset.getRowType(currow) ==2 ? &apos;show&apos;:&apos;hide&apos;\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\"/><Cell col=\"1\" text=\"bind:RESOURCENAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:ISPRIMARY\" combocodecol=\"C,YesNo,SEL,Y,Y\" edittype=\"combo\" displaytype=\"combotext\"/><Cell col=\"3\" text=\"bind:EQUIPMENTCLASSID\"/><Cell col=\"4\" text=\"bind:EQUIPMENTCLASSNAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:AREAID\"/><Cell col=\"6\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:CREATORNAME\"/><Cell col=\"8\" text=\"bind:CREATEDTIME\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"9\" text=\"bind:MODIFIERNAME\"/><Cell col=\"10\" text=\"bind:MODIFIEDTIME\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"11\" text=\"bind:CREATOR\"/><Cell col=\"12\" text=\"bind:MODIFIER\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("StaticResource","0","0","141","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("자원");
            obj.set_cssclass("sta_WF_subTitle");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_addRow_ds_resource",null,"6","26","24","58",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            obj.set_text("");
            obj.set_hotkey("");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_resource",null,"6","26","24","29",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            obj.set_hotkey("");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grdResource",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab);
            obj.set_text("치공구");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Static("StaticResource","0","0","141","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("치공구");
            obj.set_cssclass("sta_WF_subTitle");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grdDurable",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grdDurable","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds_durable");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"111\"/><Column size=\"250\"/><Column size=\"120\"/><Column size=\"65\"/><Column size=\"250\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"품목코드\" tooltiptext=\"ITEMCODE\" cssclass=\"cell_point\"/><Cell col=\"1\" text=\"Rev.\" tooltiptext=\"INNERREVISION\"/><Cell col=\"2\" text=\"품목명\" tooltiptext=\"ITEMNAME\"/><Cell col=\"3\" text=\"치공구ID\"/><Cell col=\"4\" text=\"치공구 Rev.\" tooltiptext=\"INNERREVISION\"/><Cell col=\"5\" text=\"치공구명\"/><Cell col=\"6\" text=\"설명\"/><Cell col=\"7\" text=\"생성자\"/><Cell col=\"8\" text=\"생성일\"/><Cell col=\"9\" text=\"수정자\"/><Cell col=\"10\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:PRODUCTDEFID\" expandshow=\"expr:dataset.getRowType(currow) ==2 ? &apos;show&apos;:&apos;hide&apos;\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\"/><Cell col=\"1\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:TOOLCODE\"/><Cell col=\"4\" text=\"bind:TOOLVERSION\"/><Cell col=\"5\" text=\"bind:TOOLNAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:DESCRIPTION\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:CREATOR\"/><Cell col=\"8\" text=\"bind:CREATEDTIME\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"9\" text=\"bind:MODIFIER\"/><Cell col=\"10\" text=\"bind:MODIFIEDTIME\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_durable",null,"6","26","24","btn_xlDn_grdDurable:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_addRow_ds_durable",null,"6","26","24","btn_delRow_ds_durable:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_operation","StaticTitleOper:0","97","140","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("7");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

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
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("itemPRODUCTDEFID","tab_search.Tabpage1.form.edt_PRODUCTDEFID","value","ds_search","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemPRODUCTDEFVERSION","tab_search.Tabpage1.form.edt_PRODUCTDEFVERSION","value","ds_search","PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemPRODUCTDEFNM","tab_search.Tabpage1.form.edt_PRODUCTDNM","value","ds_search","PRODUCTDEFNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","tab_search.Tabpage1.form.cbo_PLANTID","value","ds_search","PLANTID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAS02900M.xfdl","lib::lib_bas.xjs");
        this.registerScript("BAS02900M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: Routing 자원/치공구/외주단가 등록
         * 파일명 		: BAS02900M.xfdl
         * 작성자 		: 김애리
         * 작성일 		: 2021.2.3
         * AS-IS		: RoutingResource
         * 설  명		: Routing 자원/치공구/외주단가를 등록한다.
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.2.3	김애리   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
         this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.tab_search.Tabpage1.form.edt_PRODUCTDEFID.removeEventHandler("onkeydown", this.gfn_setEnterKeyEvent , this);

        	this.fn_initCombo();

        	this.ds_search.set_rowposition(0);
        	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());

        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_tree.clearData();
        	this.ds_detail.clearData();
        	this.ds_operation.clearData();

        	if(this.fn_searchValidate() == false) return;

        	var sSvcID 			= "selectBOMTree";
        	var sController 	= "/bas02900/selectBasBOMList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_tree=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.fn_searchValidate = function ()
        {
        	if(this.tab_search.Tabpage1.form.edt_PRODUCTDEFID.value != this.ds_search.getColumn(0,"PRODUCTDEFID"))
        		this.ds_search.setColumn(0,"PRODUCTDEFID", this.tab_search.Tabpage1.form.edt_PRODUCTDEFID.value);

        	var component = this.tab_search.Tabpage1;
        	var strColIdList = "edt_PRODUCTDEFID,edt_PRODUCTDEFVERSION";
        	var strColNmList = "품목코드,품목 버전";
        	return this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
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

        	this.ds_sendDefault.clearData();
        	this.ds_sendDefault.addRow();

        	var operID = this.ds_operation.getColumn(this.ds_operation.rowposition,"OPERATIONID");
        	var mgmtID = this.ds_operation.getColumn(this.ds_operation.rowposition,"PROCESSSEGMENTID");
        	var plantID = this.ds_operation.getColumn(this.ds_operation.rowposition,"PLANTID");
        	this.ds_sendDefault.setColumn(0,"OPERATIONID",operID);
        	this.ds_sendDefault.setColumn(0,"PRODUCTDEFID",this.ds_detail.getColumn(0,"PRODUCTDEFID"));
        	this.ds_sendDefault.setColumn(0,"PRODUCTDEFVERSION",this.ds_detail.getColumn(0,"PRODUCTDEFVERSION"));
        	this.ds_sendDefault.setColumn(0,"PROCESSDEFID",this.ds_detail.getColumn(0,"PRODUCTDEFID"));
        	this.ds_sendDefault.setColumn(0,"PROCESSDEFVERSION",this.ds_detail.getColumn(0,"PRODUCTDEFVERSION"));
        	this.ds_sendDefault.setColumn(0,"PROCESSSEGMENTID",mgmtID);
        	this.ds_sendDefault.setColumn(0,"PROCESSSEGMENTVERSION","*");

        	this.ds_sendDefault.setColumn(0,"EQUIPMENTID","*");
        	this.ds_sendDefault.setColumn(0,"ENTERPRISEID",this.gf_getEnterpriseId());
        	this.ds_sendDefault.setColumn(0,"PLANTID",plantID);
        	this.ds_sendDefault.setColumn(0,"VALIDSTATE","Valid");

        	if(this.div_work.form.tab.tabindex == 0)
        	{
        		this.ds_sendDefault.setColumn(0,"RESOURCETYPE","Resource");


        		var sSvcID 			= "saveBillOfResourceList";
        		var sController 	= "/bas02900/saveBillOfResourceList.do";
        		var sInDatasets 	= "ds_resource=ds_resource:A ds_sendDefault=ds_sendDefault";
        		var sOutDatasets 	= "";
        		var sArgs 			= "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        	} else {//tabindex == 1

        		this.ds_sendDefault.setColumn(0,"RESOURCETYPE","Durable");
        		this.ds_sendDefault.setColumn(0,"ISPRIMARYRESOURCE","Y");


        		var sSvcID 			= "saveBillOfDurableList";
        		var sController 	= "/bas02900/saveBillOfDurableList.do";
        		var sInDatasets 	= "ds_durable=ds_durable:A ds_sendDefault=ds_sendDefault";
        		var sOutDatasets 	= "";
        		var sArgs 			= "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        	}





        };



        this.fn_saveValidate = function ()
        {
        	if(this.div_work.form.tab.tabindex == 0)
        	{
        		if (!this.gfn_dsIsUpdated(this.ds_resource) )
        		{
        			this.gfn_Message("NoSaveData", null, "warning", "ok");
        			return false;
        		}
        		var cntPrimary = 0;
        		for(var i=0;i<this.ds_resource.rowcount;i++)
        		{
        			if(this.gfn_allTrim(this.ds_resource.getColumn(i,"RESOURCEID")) == "")
        			{
        				this.gfn_Message("NotExistResource", null, "warning", "ok");//자원 정보가 없습니다.
        				return false;
        			}
        			if(this.gfn_allTrim(this.ds_resource.getColumn(i,"ISPRIMARY")) == "Y") cntPrimary++;
        		}
        		if(this.ds_resource.rowcount > 0 && cntPrimary == 0)
        		{
        			this.gfn_Message("NeedPrimaryJob", null, "warning", "ok"); //한 개의 자원은 주자원 선택해야 합니다.
        			return false;
        		}
        		if(cntPrimary > 1)
        		{
        			this.gfn_Message("DuplicatePrimaryResource", null, "warning", "ok");//한개의 자원만 주자원 설정 가능 합니다.
        			return false;
        		}


        	} else {
        		if (!this.gfn_dsIsUpdated(this.ds_durable) )
        		{
        			this.gfn_Message("NoSaveData", null, "warning", "ok");
        			return false;
        		}

        		for(var i=0;i<this.ds_durable.rowcount;i++)
        		{
        			for(var j=0;j<this.ds_durable.rowcount;j++)
        			{
        				if(i != j && this.ds_durable.getColumn(i,"TOOLCODE") == this.ds_durable.getColumn(j,"TOOLCODE")){
        					this.ds_durable.rowposition = j;
        					this.gfn_Message("DuplicationDurableID", this.ds_durable.getColumn(i,"TOOLCODE"), "warning", "ok");
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
        		case "selectEcmLookupValuesVList2ds_CSiteTypeALL" :
        		{
        			this.ds_search.setColumn(0,"PLANTID",this.gf_getSiteType());
        			this.ds_searchCopy.copyData(this.ds_search);
        			break;
        		}
        		case "selectBOMTree":
        		{
        			if( this.ds_tree.rowcount > 0) {
        				this.div_work.form.treeRouting.setTreeStatus(0,true);
        				this.ds_tree.set_enableevent(true);
        				this.ds_tree.set_rowposition(0);
        				//this.SearchProductInfo();
        			} else {
        				this.ds_tempTree.clear();
        				this.datasetAddColumn(this.ds_tempTree, "ENTERPRISEID,PLANTID,P_PRODUCTDEFID,P_PRODUCTDEFVERSION,LANGUAGETYPE");

        				this.ds_tempTree.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        				this.ds_tempTree.setColumn(0, "PLANTID", this.gf_getSiteType());
        				this.ds_tempTree.setColumn(0, "P_PRODUCTDEFID", this.ds_search.getColumn(0,"PRODUCTDEFID"));
        				this.ds_tempTree.setColumn(0, "P_PRODUCTDEFVERSION", this.ds_search.getColumn(0,"PRODUCTDEFVERSION"));
        				this.ds_tempTree.setColumn(0, "LANGUAGETYPE", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType"));

        				this.SearchProductInfo();
        			}
        			break;
        		}
        		case "selectProductInfo":
        		{
        			this.ds_tree.set_enableevent(true);
        		// 	trace(this.ds_detail.saveXML());
        		// 	trace(this.ds_operation.saveXML());
        			if(this.ds_detail.rowcount > 0)
        			{
        				this.ds_detail.set_rowposition(0);
        			}
        			if(this.ds_operation.rowcount > 0)
        			{
        				this.ds_operation.set_rowposition(0);
        			}
        // 			if(this.div_work.form.tab.tabindex == 0)  this.grdResource_View();
        // 			if(this.div_work.form.tab.tabindex == 1)  this.grdDurable_View();

        		}
        		case "selectResource" :
        		{
        			var nRow = this.ds_operation.rowcount == 1 ? 0 : this.ds_operation.rowposition;
        			//this.ds_operation.setColumn(nRow,"RESOURCEYN",this.ds_resource.rowcount > 0 ? "Y":"N");
        			//trace(this.ds_resource.saveXML());
        			break;
        		}
        		case "selectDurableList" :
        		{
        			var nRow = this.ds_operation.rowcount == 1 ? 0 : this.ds_operation.rowposition;
        			//this.ds_operation.setColumn(nRow,"DURABLEYN",this.ds_durable.rowcount > 0 ? "Y":"N");
        			//trace(this.ds_durable.saveXML());
        			break;
        		}
        		case "saveBillOfResourceList" :
        		{
        			this.gfn_Message("SuccessSave", "", "information", "ok");
        			this.ds_resource.applyChange();
        			this.grdResource_View();
        			break;
        		}
        		case "saveBillOfDurableList" :
        		{
        			this.gfn_Message("SuccessSave", "", "information", "ok");
        			this.ds_durable.applyChange();
        			this.grdDurable_View();
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

        	if(sPopupId == "SEARCH_PRODUCTD")
        	{
        		this.ds_search.setColumn(0,"PRODUCTDEFID",rtn[0]);
        		this.ds_search.setColumn(0,"PRODUCTDEFVERSION",rtn[2]);
        		this.ds_search.setColumn(0,"PRODUCTDEFNM",rtn[1]);
        	}

        	if(sPopupId == "SEARCH_RESOURCE")
        	{
        //trace('lucky rtn ??? ' + rtn);
        		this.ds_resource.set_enableevent(false);

        		var operRow = this.ds_operation.rowcount == 1 ? 0 : this.ds_operation.rowposition;
        		var nRow = this.ds_resource.rowcount == 1 ? 0 : this.ds_resource.rowposition;
        		for(var i=0; i<rtn.length; i++)
        		{
        			if( i != 0 && this.ds_resource.rowcount-1 <  nRow) {
        				this.ds_resource.addRow();
        			}
        			var colArray = rtn[i];
        			this.ds_resource.setColumn(nRow,"RESOURCEID",colArray[0]);
        			this.ds_resource.setColumn(nRow,"RESOURCENAME",colArray[1]);
        			this.ds_resource.setColumn(nRow,"AREAID",colArray[2]);
        			this.ds_resource.setColumn(nRow,"AREANAME",colArray[3]);
        			this.ds_resource.setColumn(nRow,"EQUIPMENTCLASSID",colArray[4]);
        			this.ds_resource.setColumn(nRow,"EQUIPMENTCLASSNAME",this.gfn_allTrim(colArray[5]));

        			this.ds_resource.setColumn(nRow,"ENTERPRISEID",this.ds_operation.getColumn(operRow,"ENTERPRISEID"));
        			this.ds_resource.setColumn(nRow,"PLANTID",this.ds_operation.getColumn(operRow,"PLANTID"));
        			this.ds_resource.setColumn(nRow,"OPERATIONID",this.ds_operation.getColumn(operRow,"OPERATIONID"));
        			this.ds_resource.setColumn(nRow,"RESOURCESEQUENCE",0);
        			this.ds_resource.setColumn(nRow,"MAINPRODUCTID",this.ds_operation.getColumn(operRow,"MAINPRODUCTID"));
        			this.ds_resource.setColumn(nRow,"MAINPRODUCTVERSION",this.ds_operation.getColumn(operRow,"MAINPRODUCTVERSION"));
        			this.ds_resource.setColumn(nRow,"PROCESSSEGMENTID",this.ds_operation.getColumn(operRow,"PROCESSSEGMENTID"));
        			this.ds_resource.setColumn(nRow,"RESOURCESEQUENCE","Valid");
        			this.ds_resource.setColumn(nRow,"RESOURCECLASSID", "*");
        			if(nRow == 0) this.ds_resource.setColumn(nRow,"ISPRIMARY","Y");
        			else this.ds_resource.setColumn(nRow,"ISPRIMARY","N");

        			nRow++;
        		}

        		this.ds_resource.set_enableevent(true);
        	}

        	if(sPopupId == "SEARCH_DURABLE")
        	{//PRODUCTDEFID|PRODUCTDEFVERSION|PRODUCTDEFNAME|DURABLECLASSTYPE|DURABLEDEFID|DURABLEDEFNAME|DURABLEDEFVERSION|FILMUSELAYER1|FILMUSELAYER2|OPERATIONID

        		this.ds_durable.set_enableevent(false);

        		var operRow = this.ds_operation.rowcount == 1 ? 0 : this.ds_operation.rowposition;
        		var nRow = this.ds_durable.rowcount == 1 ? 0 : this.ds_durable.rowposition;
        		for(var i=0; i<rtn.length; i++)
        		{
        			if( i != 0 && this.ds_durable.rowcount-1 <  nRow) {
        				this.ds_durable.addRow();
        			}
        			var colArray = rtn[i];

        				this.ds_durable.setColumn(nRow, "PRODUCTDEFID", colArray[0]);
        				this.ds_durable.setColumn(nRow, "PRODUCTDEFVERSION", colArray[1]);
        				this.ds_durable.setColumn(nRow, "PRODUCTDEFNAME", colArray[2]);
        				this.ds_durable.setColumn(nRow, "DURABLETYPE", colArray[3]);
        				this.ds_durable.setColumn(nRow, "TOOLCODE", colArray[4]);
        				this.ds_durable.setColumn(nRow, "TOOLNAME", colArray[5]);
        				this.ds_durable.setColumn(nRow, "TOOLVERSION", colArray[6]);
        				this.ds_durable.setColumn(nRow, "FILMUSELAYER1", colArray[7]);
        				this.ds_durable.setColumn(nRow, "FILMUSELAYER2", colArray[8]);
        				this.ds_durable.setColumn(nRow, "OPERATIONID", colArray[9]);
        				this.ds_durable.setColumn(nRow, "EQUIPMENTID", "*");
        				this.ds_durable.setColumn(nRow, "RESOURCECLASSID", "*");

        			nRow++;
        		}

        		this.ds_durable.set_enableevent(true);

        // 		if(this.nfn_isNull(rtn)) return;
        // 		var resultInfo = JSON.parse(rtn);
        // 		if(resultInfo.resultCd == "OK")
        // 		{
        // 			this.ds_durable.set_enableevent(false);
        //
        // 			var nRow = this.ds_durable.rowcount == 1 ? 0 : this.ds_durable.rowposition;
        //
        // 			for(var i=0;i<this.ds_resultDurable.rowcount;i++)
        // 			{
        // 				if( i != 0) this.ds_durable.addRow();
        //
        // 				this.ds_durable.setColumn(nRow, "PRODUCTDEFID", this.ds_resultDurable.getColumn(i,"PRODUCTDEFID"));
        // 				this.ds_durable.setColumn(nRow, "PRODUCTDEFVERSION", this.ds_resultDurable.getColumn(i,"PRODUCTDEFVERSION"));
        // 				this.ds_durable.setColumn(nRow, "PRODUCTDEFNAME", this.ds_resultDurable.getColumn(i,"PRODUCTDEFNAME"));
        // 				this.ds_durable.setColumn(nRow, "DURABLETYPE", this.ds_resultDurable.getColumn(i,"DURABLECLASSTYPE"));
        // 				this.ds_durable.setColumn(nRow, "TOOLCODE", this.ds_resultDurable.getColumn(i,"DURABLEDEFID"));
        // 				this.ds_durable.setColumn(nRow, "TOOLNAME", this.ds_resultDurable.getColumn(i,"DURABLEDEFNAME"));
        // 				this.ds_durable.setColumn(nRow, "TOOLVERSION", this.ds_resultDurable.getColumn(i,"DURABLEDEFVERSION"));
        // 				this.ds_durable.setColumn(nRow, "FILMUSELAYER1", this.ds_resultDurable.getColumn(i,"FILMUSELAYER1"));
        // 				this.ds_durable.setColumn(nRow, "FILMUSELAYER2", this.ds_resultDurable.getColumn(i,"FILMUSELAYER2"));
        // 				this.ds_durable.setColumn(nRow, "OPERATIONID", this.ds_operation.getColumn(this.ds_operation.rowposition,"OPERATIONID"));
        // 				this.ds_durable.setColumn(nRow, "EQUIPMENTID", "*");
        // 				this.ds_durable.setColumn(nRow, "RESOURCECLASSID", "*");
        //
        // 				nRow ++;
        // 			}
        //
        // 			this.ds_durable.set_enableevent(true);
        //trace(this.ds_durable.saveXML());
        //		}//if(resultInfo.resultCd == "OK")

        	}//if(sPopupId == "SEARCH_DURABLE")

        }


        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
         /*
          *	자원 탭 데이타 가져오기
          */
        this.grdResource_View = function ()
        {
        	this.ds_resource.clearData();
        	this.ds_temp.clear();

        	this.datasetAddColumn(this.ds_temp, "ENTERPRISEID,OPERATIONID,LANGUAGETYPE");

        	this.ds_temp.setColumn(0, "ENTERPRISEID", this.ds_operation.getColumn(this.ds_operation.rowposition, "ENTERPRISEID"));
        	this.ds_temp.setColumn(0, "OPERATIONID", this.ds_operation.getColumn(this.ds_operation.rowposition, "OPERATIONID"));
        	this.ds_temp.setColumn(0, "LANGUAGETYPE", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType"));
        //trace(this.ds_temp.saveXML());
        	var sSvcID 			= "selectResource";
        	var sController 	= "/bas02900/selectResource.do";
        	var sInDatasets 	= "INPUT=ds_temp";
        	var sOutDatasets 	= "ds_resource=ds_resource";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         *
         */
        this.grdDurable_View = function ()
        {
        	this.ds_durable.clearData();
        	this.ds_temp.clear();

        	this.datasetAddColumn(this.ds_temp, "ENTERPRISEID,OPERATIONID,LANGUAGETYPE,PRODUCTDEFID,PRODUCTDEFVERSION");

        	this.ds_temp.setColumn(0, "ENTERPRISEID", this.ds_operation.getColumn(this.ds_operation.rowposition, "ENTERPRISEID"));
        	this.ds_temp.setColumn(0, "OPERATIONID", this.ds_operation.getColumn(this.ds_operation.rowposition, "OPERATIONID"));
        	this.ds_temp.setColumn(0, "LANGUAGETYPE", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType"));
        	this.ds_temp.setColumn(0, "PRODUCTDEFID", this.gfn_allTrim(this.ds_detail.getColumn(0,"PRODUCTDEFID")));
        	this.ds_temp.setColumn(0, "PRODUCTDEFVERSION", this.gfn_allTrim(this.ds_detail.getColumn(0,"PRODUCTDEFVERSION")));
        //trace(this.ds_temp.saveXML());
        	var sSvcID 			= "selectDurableList";
        	var sController 	= "/bas02900/selectDurableList.do";
        	var sInDatasets 	= "INPUT=ds_temp";
        	var sOutDatasets 	= "ds_durable=ds_durable";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        /*
         * 기능 : 회사정보 콤보 조회
         */
        this.fn_getComboCode = function (dsCode)
        {
        // 	dsCode.clearData();
        //
        // 	var sSvcID 			= "selectCustomQuery";
        // 	var sController 	= "/basCommon/selectCustomQuery.do";
        // 	var sInDatasets 	= "";
        // 	var sOutDatasets 	= dsCode.id+"=output";
        // 	var sArgs 			= "";
        // 		sArgs 			+= this.gfn_setParam("sqlId", "selectEnterpriseList");
        // 	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.fn_initCombo = function ()
        {
        // 	this.basfn_setCustomQueryCmb(this.tab_search.Tabpage1.form.cboPlantList // Object
        // 								, "selectEnterpriseList,ALL,Y,A" // OPTION
        // 								, null);	  // 추가 파라미터
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


        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        /*
         *	기능 : 품목코드 검색 버튼 클릭 시
         */
        this.tab_search_Tabpage1_btnProductCode_onclick = function(obj,e)
        {
        	this.OpenProductPopup();
        };

        this.OpenProductPopup = function ()
        {
        	var popupId = "SEARCH_PRODUCTD";
        	var pPRODUCTDIVISION = "Product";
        	var pPlantID =  this.gfn_allTrim(this.ds_search.getColumn(0,"PLANTID"));
        	var processDefId = this.gfn_allTrim(this.ds_search.getColumn(0,"PRODUCTDEFID"));
        	var prductIDCondition = processDefId == "" ? "" : "TXTPRODUCTDEFNAME=" + processDefId + "|";

        	var oArg = {};
        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = "P00105";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "PRODUCTDEFID|PRODUCTDEFNAME|PRODUCTDEFVERSION";
        	oArg.arg_paramCols = "PLANTID";
        	oArg.arg_paramValues = pPlantID;
        	oArg.arg_searchStr = prductIDCondition ; //  + "PRODUCTDIVISION=" ; + pPRODUCTDIVISION; 전체로 바꿔달라 하심 by 최창선 07/20

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=800,height=800");
        };

        /*
         *	중간에 BOM 구조 트리 중 한 노드 선택 시 rowposchange 의 가능 여부 결정
         */
        this.ds_tree_canrowposchange = function(obj,e)
        {
        	if(e.newrow < 0 || e.newrow == e.oldrow) return;
        	var classID = this.ds_tree.getColumn(e.newrow, "MASTERDATACLASSID");
        	if(classID != "Product" && classID != "SubAssembly" )
        	{
        		return false;
        	}

        };

        /*
         *	중간에 BOM 구조 트리 중 한 노드 선택 시
         */
        this.ds_tree_onrowposchanged = function(obj,e)
        {
        //	if(e.newrow < 0 || e.newrow == e.oldrow) return;
        // 	var classID = this.ds_tree.getColumn(e.newrow, "MASTERDATACLASSID");
        // //	trace('this.ds_tree.getColumn(e.newrow, "MASTERDATACLASSID") ? ' + classID);
        // 	if(classID != "Product" && classID != "SubAssembly" )
        // 	{
        // 		this.ds_tree.set_rowposition(e.oldrow);
        // 		return;
        // 	}
        	this.ds_tree.set_enableevent(false);

        	var assemblyItemId = this.ds_tree.getColumn(e.newrow, "ASSEMBLYITEMID");
        	var assemblyItemVersion = this.ds_tree.getColumn(e.newrow, "ASSEMBLYITEMVERSION");
        	var plantId = this.ds_tree.getColumn(e.newrow, "PLANTID");

        	var pData = {ENTERPRISEID:this.gf_getEnterpriseId()
        			, PLANTID:plantId
        			, P_PRODUCTDEFID:assemblyItemId
        			, P_PRODUCTDEFVERSION:assemblyItemVersion
        			, LANGUAGETYPE:nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType")
        		};

        	this.ds_tempTree.clear();
        	this.datasetAddColumn(this.ds_tempTree, "ENTERPRISEID,PLANTID,P_PRODUCTDEFID,P_PRODUCTDEFVERSION,LANGUAGETYPE");

        	this.ds_tempTree.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_tempTree.setColumn(0, "PLANTID", plantId);
        	this.ds_tempTree.setColumn(0, "P_PRODUCTDEFID", assemblyItemId);
        	this.ds_tempTree.setColumn(0, "P_PRODUCTDEFVERSION", assemblyItemVersion);
        	this.ds_tempTree.setColumn(0, "LANGUAGETYPE", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType"));

        	var cntChangeRows = 0;

        	if(this.gfn_dsIsUpdated(this.ds_resource) || this.gfn_dsIsUpdated(this.ds_durable) )
        	{
        		var bRtn = this.gfn_confirm("WRITTENBEDELETE", "information", ""); //"입력한 내용이 있으면 현재 작성중인 내용이 모두 삭제됩니다."

        		if(bRtn)
        		{
        			this.SearchProductInfo();
        		}
        		else
        		{
        			this.ds_tree.set_rowposition(e.oldrow);
        		}
        	}
        	else
        	{
        		this.SearchProductInfo();
        	}

        };

        this.SearchProductInfo = function ()
        {
        	this.ds_detail.clear();
        	this.ds_operation.clear();
        //	trace(this.ds_tempTree.saveXML());

        	var sSvcID 			= "selectProductInfo";
        	var sController 	= "/bas02900/selectProductInfo.do";
        	var sInDatasets 	= "INPUT=ds_tempTree";
        	var sOutDatasets 	= "ds_detail=ds_detail ds_operation=ds_operation";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };

        /*
         *	Resource 탭 그리드에서 Resource ID 선택 시
         */
        this.div_work_tab_Tabpage1_grdResource_onexpanddown = function(obj,e)
        {
        	var operRow = this.ds_operation.rowcount == 1 ? 0 : this.ds_operation.rowposition;

        	var resourceID = this.gfn_allTrim(this.ds_resource.getColumn(e.row,"RESOURCEID"));
        	var description = this.gfn_allTrim(this.ds_resource.getColumn(e.row,"DESCRIPTION"));
        	var procSegID = this.gfn_allTrim(this.ds_operation.getColumn(operRow,"PROCESSSEGMENTID"));
        	var plantID = this.gfn_allTrim(this.ds_operation.getColumn(operRow,"PLANTID"));
        	var languageType = nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType");

        	//-----------------
        // arg_type    : A::사용자가 선택, B:: 한건존재시 자동 셋팅
        // popupCd     : 공통팝업 관리 화면에서 생성되는 팝업코드
        // popupNm     : 변경할팝업화면명 , 변경하지 않을 경우 팝업화면 타이틀은 관리화면의 타이틀로 지정됨
        // rtnCols     : 구분자 : "|"   : 그리드에 출력될 컬럼 지정 (않을 경우 관리화면의 그리드로 출력됨)
        // paramCols   : 구분자 : "|" : where 구문에 들어갈 컬럼
        // paramValues : 구분자 : "|"  : where 구문에 들어갈 컬럼에 대한 값
        // searchStr   : 팝업 조회조건 콤보값 = 조회 값
        	var popupId = "SEARCH_RESOURCE";
        	var oArg = {};
        	oArg.arg_type = "C";
        	oArg.arg_popupCd = "P00044";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "RESOURCEID|DESCRIPTION|AREAID|AREANAME|EQUIPMENTCLASSID|EQUIPMENTCLASSNAME";
        	oArg.arg_paramCols = "RESOURCEID|DESCRIPTION|PROCESSSEGMENTID|PLANTID|LANGUAGETYPE|ENTERPRISEID";
        	oArg.arg_paramValues = resourceID + "|" + description + "|" + procSegID + "|" + plantID + "|" + languageType + "|" + this.gf_getEnterpriseId();
        	oArg.arg_searchStr = "";

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=830,height=700");
        	//this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"");
        };

        /*
         *	Durable 탭 그리드에서 품목 ID 선택 시
         */
        this.div_work_tab_Tabpage2_grdDurable_onexpanddown = function(obj,e)
        {
        	var operRow = this.ds_operation.rowcount == 1 ? 0 : this.ds_operation.rowposition;

        	//var languageType = nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType");
        	var toolCode = this.gfn_allTrim(this.ds_durable.getColumn(e.row,"TOOLCODE"));
        	var toolName = this.gfn_allTrim(this.ds_durable.getColumn(e.row,"TOOLNAME"));
        	var ProdDefID = this.gfn_allTrim(this.ds_durable.getColumn(e.row,"PRODUCTDEFID"));
        	var ProdDefVer = this.gfn_allTrim(this.ds_durable.getColumn(e.row,"PRODUCTDEFVERSION"));
        	var ProdDefName = this.gfn_allTrim(this.ds_durable.getColumn(e.row,"PRODUCTDEFNAME"));
        	var plantID = this.gfn_allTrim(this.ds_durable.getColumn(e.row,"PLANTID"));
        	var operationID = this.gfn_allTrim(this.ds_operation.getColumn(operRow,"OPERATIONID"));


        	var popupId = "SEARCH_DURABLE";
        	var oArg = {};
        	oArg.arg_type = "C";
        	oArg.arg_popupCd = "P00265";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "PRODUCTDEFID|PRODUCTDEFVERSION|PRODUCTDEFNAME|DURABLECLASSTYPE|DURABLEDEFID|DURABLEDEFNAME|DURABLEDEFVERSION|FILMUSELAYER1|FILMUSELAYER2|OPERATIONID";
        	oArg.arg_paramCols = "ITEMID|ITEMVERSION|ITEMNAME|DURABLEDEFID|DURABLEDEFNAME|PLANTID|OPERATIONID|LANGUAGETYPE|ENTERPRISEID";
        	oArg.arg_paramValues = ProdDefID + "|" + ProdDefVer + "|" + ProdDefName + "|" + toolCode + "|" + toolName + "|" + plantID + "|" + operationID + "|" + this.gf_getLanguageType() + "|" + this.gf_getEnterpriseId();
        	oArg.arg_searchStr = "DURABLECLASSID=M";

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=830,height=700");

        // 	var popupId = "SEARCH_DURABLE";
        // 	var oArg = {};
        // 	oArg.toolCode = toolCode;
        // 	oArg.toolName = toolName;
        // 	oArg.durableClass = "M";
        // 	oArg.ProdDefID = ProdDefID;
        // 	oArg.ProdDefVer = ProdDefVer;
        // 	oArg.ProdDefName = ProdDefName;
        // 	oArg.plantID = plantID;
        // 	oArg.operationID = operationID;
        // 	oArg.ds_result = this.ds_resultDurable;
        // 	this.gfn_openPopup(popupId,"bas::BAS02900P.xfdl",oArg,"width=800,height=700");
        // 	//this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"");
        };



        this.tab_onchanged = function(obj,e)
        {
        	if(this.gfn_dsIsUpdated(this.ds_resource) || this.gfn_dsIsUpdated(this.ds_durable) )
        	{
        		var bRtn = this.gfn_confirm("WRITTENBEDELETE", "information", ""); //"입력한 내용이 있으면 현재 작성중인 내용이 모두 삭제됩니다."

        		if(bRtn == false)  return;
        	}

        	if(this.div_work.form.tab.tabindex == 0)  this.grdResource_View();
        	if(this.div_work.form.tab.tabindex == 1)  this.grdDurable_View();
        };


        this.ds_operation_canrowposchange = function(obj,e)
        {
        	if(this.gfn_dsIsUpdated(this.ds_resource) || this.gfn_dsIsUpdated(this.ds_durable) )
        	{
        		var bRtn = this.gfn_confirm("WRITTENBEDELETE", "information", ""); //"입력한 내용이 있으면 현재 작성중인 내용이 모두 삭제됩니다."

        		if(bRtn == false)  return false;
        	}
        };


        this.ds_operation_onrowposchanged = function(obj,e)
        {
        	if(this.div_work.form.tab.tabindex == 0)  this.grdResource_View();
        	if(this.div_work.form.tab.tabindex == 1)  this.grdDurable_View();
        };


        this.tab_search_Tabpage1_edt_PRODUCTDEFID_onkeydown = function(obj,e)
        {
        	if (e.keycode != 13) return;

        	this.ds_search.setColumn(0,"PRODUCTDEFID",obj.value);
        	this.OpenProductPopup();
        };

        this.ds_resource_cancolumnchange = function(obj,e)
        {
        	if(e.newvalue == "Y")
        	{
        		if(this.ds_resource.findRow("ISPRIMARY","Y") >= 0)
        		{
        			this.gfn_Message("DuplicatePrimaryResource", null, "warning", "ok");
        			return false;
        		}
        	}
        };

        this.ds_resource_onrowsetchanged = function(obj,e)
        {
        	if(e.reason == Dataset.REASON_APPEND || e.reason == Dataset.REASON_DELETE){
        		var nRow = this.ds_operation.rowposition;
        		this.ds_operation.setColumn(nRow,"RESOURCEYN",this.ds_resource.rowcount > 0 ? "Y":"N");
        	}
        };

        this.ds_durable_onrowsetchanged = function(obj,e)
        {
        	if(e.reason == Dataset.REASON_APPEND || e.reason == Dataset.REASON_DELETE){
        		var nRow = this.ds_operation.rowposition;
        		this.ds_operation.setColumn(nRow,"DURABLEYN",this.ds_durable.rowcount > 0 ? "Y":"N");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.tab_search_Tabpage1_btn_clear_onclick,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.tab_search_Tabpage1_btn_search_onclick,this);
            this.tab_search.Tabpage1.form.edt_PRODUCTDEFID.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_PRODUCTDEFID_onkeydown,this);
            this.tab_search.Tabpage1.form.btnProductCode.addEventHandler("onclick",this.tab_search_Tabpage1_btnProductCode_onclick,this);
            this.div_work.form.tab.addEventHandler("onchanged",this.tab_onchanged,this);
            this.div_work.form.tab.Tabpage1.form.grdResource.addEventHandler("onexpanddown",this.div_work_tab_Tabpage1_grdResource_onexpanddown,this);
            this.div_work.form.tab.Tabpage1.form.btn_addRow_ds_resource.addEventHandler("onclick",this.div_work_tab_Tabpage1_btn_addRow_ds_resource_onclick,this);
            this.div_work.form.tab.Tabpage2.form.grdDurable.addEventHandler("onexpanddown",this.div_work_tab_Tabpage2_grdDurable_onexpanddown,this);
            this.ds_search.addEventHandler("oncolumnchanged",this.ds_search_oncolumnchanged,this);
            this.ds_tree.addEventHandler("onrowposchanged",this.ds_tree_onrowposchanged,this);
            this.ds_tree.addEventHandler("canrowposchange",this.ds_tree_canrowposchange,this);
            this.ds_operation.addEventHandler("onrowposchanged",this.ds_operation_onrowposchanged,this);
            this.ds_operation.addEventHandler("oncolumnchanged",this.ds_operation_oncolumnchanged,this);
            this.ds_operation.addEventHandler("canrowposchange",this.ds_operation_canrowposchange,this);
            this.ds_resource.addEventHandler("cancolumnchange",this.ds_resource_cancolumnchange,this);
            this.ds_resource.addEventHandler("onrowsetchanged",this.ds_resource_onrowsetchanged,this);
            this.ds_durable.addEventHandler("onrowsetchanged",this.ds_durable_onrowsetchanged,this);
        };
        this.loadIncludeScript("BAS02900M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
