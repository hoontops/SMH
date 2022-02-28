(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS02200M");
            this.set_titletext("공정SPEC등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_operation", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ROOT_ASSEMBLYITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ROOT_ASSEMBLYITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PNLX\" type=\"STRING\" size=\"256\"/><Column id=\"PNLY\" type=\"STRING\" size=\"256\"/><Column id=\"NEWSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSUOM\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ISREQUIREDOPERATIONSPEC\" type=\"STRING\" size=\"256\"/><Column id=\"SUBSEGMENTID1\" type=\"STRING\" size=\"256\"/><Column id=\"OUTSOURCINGSPECNO\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_operationSpec", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SPECSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SPECCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"DEFAULTCHARTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LCL\" type=\"STRING\" size=\"256\"/><Column id=\"CL\" type=\"STRING\" size=\"256\"/><Column id=\"UCL\" type=\"STRING\" size=\"256\"/><Column id=\"LSL\" type=\"STRING\" size=\"256\"/><Column id=\"SL\" type=\"STRING\" size=\"256\"/><Column id=\"USL\" type=\"STRING\" size=\"256\"/><Column id=\"LOL\" type=\"STRING\" size=\"256\"/><Column id=\"UOL\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"COPPERTHICKNESS\" type=\"STRING\" size=\"256\"/><Column id=\"OSL\" type=\"STRING\" size=\"256\"/><Column id=\"OUSL\" type=\"STRING\" size=\"256\"/><Column id=\"OLSL\" type=\"STRING\" size=\"256\"/><Column id=\"SPECTRANSTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"RODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNM\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"RODUCTDEFTYPE\"/><Col id=\"PRODUCTDEFID\"/><Col id=\"PRODUCTDEFVERSION\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_productDef", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"COMPLETIONWAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UOMDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"PNLSIZEXAXIS\" type=\"STRING\" size=\"256\"/><Column id=\"PNLSIZEYAXIS\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"PCSMM\" type=\"STRING\" size=\"256\"/><Column id=\"USELAYER\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFAULTCHARTTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_checkUser", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Button("btn_clear2","171","125","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","125","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","0","15","300",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","131","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPlantList","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_site","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,SiteType,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProductDefVersion","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("Rev.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMVERSION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip02","0","0",null,"10","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04","0","105",null,"20","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProcductName","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMNAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_item_cd","108","60","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_value("FA1");
            obj.set_text("FA1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_item_nm","108","85","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_enable("false");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProductCode","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("PRODUCTDEFID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_item","108","35","143","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_value("1010759A5");
            obj.set_text("1010759A5");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_item",null,"35","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip03_00","0","30",null,"5","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","3",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("6");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","btn_reset:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_saveOperationSpec",null,"16","26","24","btn_help:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","112","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_text("공정SPEC등록");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","242","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","44.99%","134","68","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("공정 SPEC");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("PROCESSPEC");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_operationSpec","44.99%","168",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_operationSpec");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"검사항목명\" cssclass=\"cell_point\"/><Cell col=\"2\" rowspan=\"2\" text=\"위치\"/><Cell col=\"3\" colspan=\"3\" text=\"사양 SPEC\" cssclass=\"cell_headMaster\"/><Cell col=\"6\" rowspan=\"2\" text=\"동박두께&#13;&#10;(OZ)\"/><Cell col=\"7\" colspan=\"3\" text=\"공정 SPEC\" cssclass=\"cell_headMaster\"/><Cell col=\"10\" colspan=\"3\" text=\"CONTROL LIMIT\" cssclass=\"cell_headMaster\"/><Cell col=\"13\" colspan=\"2\" text=\"OUTLIER\" cssclass=\"cell_headMaster\"/><Cell col=\"15\" rowspan=\"2\" text=\"생성자\"/><Cell col=\"16\" rowspan=\"2\" text=\"생성일\"/><Cell col=\"17\" rowspan=\"2\" text=\"수정자\"/><Cell col=\"18\" rowspan=\"2\" text=\"수정일\"/><Cell row=\"1\" col=\"3\" text=\"하한값\"/><Cell row=\"1\" col=\"4\" text=\"기준값\"/><Cell row=\"1\" col=\"5\" text=\"상한값\"/><Cell row=\"1\" col=\"7\" text=\"하한값\"/><Cell row=\"1\" col=\"8\" text=\"기준값\"/><Cell row=\"1\" col=\"9\" text=\"상한값\"/><Cell row=\"1\" col=\"10\" text=\"하한값\"/><Cell row=\"1\" col=\"11\" text=\"기준값\"/><Cell row=\"1\" col=\"12\" text=\"상한값\"/><Cell row=\"1\" col=\"13\" text=\"하한값\"/><Cell row=\"1\" col=\"14\" text=\"상한값\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" displaytype=\"number\"/><Cell col=\"1\" text=\"bind:INSPITEMNAME\" displaytype=\"text\" textAlign=\"left\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"expr:dataset.getRowType(currow) ==2 ? &apos;show&apos;:&apos;hide&apos;\" expandsize=\"24\"/><Cell col=\"2\" text=\"bind:LOCATION\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:LSL\" displaytype=\"number\" edittype=\"expr:dataset.parent.fn_InspTypeAuth()\" editinputtype=\"number\"/><Cell col=\"4\" text=\"bind:SL\" displaytype=\"number\" edittype=\"expr:dataset.parent.fn_InspTypeAuth()\" editinputtype=\"number\"/><Cell col=\"5\" text=\"bind:USL\" displaytype=\"number\" edittype=\"expr:dataset.parent.fn_InspTypeAuth()\" editinputtype=\"number\"/><Cell col=\"6\" text=\"bind:COPPERTHICKNESS\" displaytype=\"number\" editinputtype=\"number\" edittype=\"expr:dataset.parent.fn_InspType(SPECTRANSTYPE)\"/><Cell col=\"7\" text=\"bind:OLSL\" displaytype=\"number\" edittype=\"normal\" editinputtype=\"number\"/><Cell col=\"8\" text=\"bind:OSL\" displaytype=\"number\" edittype=\"normal\" editinputtype=\"number\"/><Cell col=\"9\" text=\"bind:OUSL\" displaytype=\"number\" edittype=\"normal\" editinputtype=\"number\"/><Cell col=\"10\" text=\"bind:LCL\" displaytype=\"number\" edittype=\"normal\" editinputtype=\"number\"/><Cell col=\"11\" text=\"bind:CL\" displaytype=\"number\" edittype=\"normal\" editinputtype=\"number\"/><Cell col=\"12\" text=\"bind:UCL\" displaytype=\"number\" edittype=\"normal\" editinputtype=\"number\"/><Cell col=\"13\" text=\"bind:LOL\" displaytype=\"number\" edittype=\"normal\" editinputtype=\"number\"/><Cell col=\"14\" text=\"bind:UOL\" displaytype=\"number\" edittype=\"normal\" editinputtype=\"number\"/><Cell col=\"15\" text=\"bind:CREATOR\"/><Cell col=\"16\" text=\"bind:CREATEDTIME\" displaytype=\"text\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"17\" text=\"bind:MODIFIER\"/><Cell col=\"18\" text=\"bind:MODIFIEDTIME\" displaytype=\"text\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_operationSpec",null,"140","29","24","2",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_grdDel",null,"140","26","24","btn_xlDn_grd_operationSpec:0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_grdAdd",null,"140","26","24","btn_grdDel:0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_operationExcel",null,"140","29","24","Static01:10",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_operation","0","168",null,null,"grd_operationSpec:10","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_operation");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"공정수순\"/><Cell col=\"2\" text=\"공정ID\"/><Cell col=\"3\" text=\"공정명\"/><Cell col=\"4\" text=\"특이사항\"/><Cell col=\"5\" text=\"공정spec\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" displaytype=\"number\" cssclass=\"expr:ISREQUIREDOPERATIONSPEC==&quot;Y&quot; ? (CNT==&quot;0&quot; ? &quot;cell_bg_green&quot;  : &quot;cell_bg_yellow&quot;) : &quot;&quot;\"/><Cell col=\"1\" text=\"bind:USERSEQUENCE\" displaytype=\"number\" cssclass=\"expr:ISREQUIREDOPERATIONSPEC==&quot;Y&quot; ? (CNT==&quot;0&quot; ? &quot;cell_bg_green&quot;  : &quot;cell_bg_yellow&quot;) : &quot;&quot;\"/><Cell col=\"2\" text=\"bind:PROCESSSEGMENTID\" cssclass=\"expr:ISREQUIREDOPERATIONSPEC==&quot;Y&quot; ? (CNT==&quot;0&quot; ? &quot;cell_bg_green&quot;  : &quot;cell_bg_yellow&quot;) : &quot;&quot;\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTNAME\" displaytype=\"text\" textAlign=\"left\" cssclass=\"expr:ISREQUIREDOPERATIONSPEC==&quot;Y&quot; ? (CNT==&quot;0&quot; ? &quot;cell_bg_green&quot;  : &quot;cell_bg_yellow&quot;) : &quot;&quot;\"/><Cell col=\"4\" text=\"bind:DESCRIPTION\" displaytype=\"text\" textAlign=\"left\" cssclass=\"expr:ISREQUIREDOPERATIONSPEC==&quot;Y&quot; ? (CNT==&quot;0&quot; ? &quot;cell_bg_green&quot;  : &quot;cell_bg_yellow&quot;) : &quot;&quot;\"/><Cell col=\"5\" text=\"bind:ISREQUIREDOPERATIONSPEC\" cssclass=\"expr:ISREQUIREDOPERATIONSPEC==&quot;Y&quot; ? (CNT==&quot;0&quot; ? &quot;cell_bg_green&quot;  : &quot;cell_bg_yellow&quot;) : &quot;&quot;\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static01_01","0","134","68","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("7");
            obj.set_text("공정");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("OPERATION");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("Div01","0","37",null,"94","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("8");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_00","0","0","9%","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("6");
            obj.set_text("고객사명");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("CUTOMERNAME");
            obj.set_font("normal bold 12px/normal \"Arial\"");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_customerName","sta_00:1","7","10%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_text("IFV");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_03","edt_customerName:0","0","9%","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("7");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("PRODUCTDEFID");
            obj.set_font("normal bold 12px/normal \"Arial\"");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_itemId","sta_03:5","7","10%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_text("1025362J1");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_04","edt_itemId:0","0","9%","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("8");
            obj.set_text("Rev");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_font("normal bold 12px/normal \"Arial\"");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_itemRev","sta_04:5","7","10%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_text("FA1");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_07_00","edt_itemRev:0","0","9%","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("9");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("ITEMNAME");
            obj.set_font("normal bold 12px/normal \"Arial\"");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_itemName","sta_07_00:5","7",null,"20","0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("3");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_text("변경");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_00_00","0","31","9%","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("10");
            obj.set_text("작업구분");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("JOBTYPE");
            obj.set_font("normal bold 12px/normal \"Arial\"");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_jobType","sta_00:1","36","10%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_text("IFV");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_03_00","edt_jobType:0","31","9%","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("11");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("PRODUCTIONTYPE");
            obj.set_font("normal bold 12px/normal \"Arial\"");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_productType","sta_03_00:5","36","10%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_text("1025362J1");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_04_00","edt_productType:0","31","9%","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("12");
            obj.set_text("RTR/SHEET");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("E4DA2FCD959342E4A46DA2A80F76FB42");
            obj.set_font("normal bold 12px/normal \"Arial\"");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_productType00","sta_04_00:5","36","10%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("17");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_text("1025362J1");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_07_00_00","edt_productType00:0","31","9%","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("13");
            obj.set_text("PNL X");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("PANELX");
            obj.set_font("normal bold 12px/normal \"Arial\"");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00","0","62","9%","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("14");
            obj.set_text("합수(PCS)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("ARRAYPCS");
            obj.set_font("normal bold 12px/normal \"Arial\"");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_jobType00","sta_00_00_00:1","68","10%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("20");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_text("IFV");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_03_00_00","edt_jobType00:0","62","9%","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("15");
            obj.set_text("산출수(PCS)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("CALCULATEPCS");
            obj.set_font("normal bold 12px/normal \"Arial\"");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_productType00_00","sta_07_00_00:5","36","10%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("18");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_text("1025362J1");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_07_00_00_01","edt_productType00_00:0","31","10.94%","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("16");
            obj.set_text("PNL Y");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("PANELY");
            obj.set_font("normal bold 12px/normal \"Arial\"");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_productType00_00_00","sta_07_00_00_01:5","36","10%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("19");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_text("1025362J1");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_jobType00_00","sta_03_00_00:5","68","10%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("21");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_text("IFV");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_operation","Static01_01:10","134","200","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_operationSpec","Static01:10","134","200","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.addChild(obj.name, obj);

            obj = new Combo("cbo_barcharinfo",null,"143","115","20","btn_grdAdd:5",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("11");
            obj.set_codecolumn("C,ControlType,,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00","590","141",null,"24","cbo_barcharinfo:5",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("12");
            obj.set_text("기본 차트 유형");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("DEFAULTCHARTTYPE");
            obj.set_cssclass("sta_WF_detail");
            obj.set_textAlign("right");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_operationExcel","118","308",null,null,"715","287",null,null,null,null,this.div_work.form);
            obj.set_taborder("13");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_operation");
            obj.set_selecttype("cell");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"SITE ID\"/><Cell col=\"2\" text=\"품목코드\"/><Cell col=\"3\" text=\"REV.\"/><Cell col=\"4\" text=\"공정수순\"/><Cell col=\"5\" text=\"공정ID\"/><Cell col=\"6\" text=\"공정명\"/><Cell col=\"7\" text=\"특이사항\"/><Cell col=\"8\" text=\"공정spec\"/><Cell col=\"9\" text=\"생성자\"/><Cell col=\"10\" text=\"생성일\"/><Cell col=\"11\" text=\"수정자\"/><Cell col=\"12\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" displaytype=\"number\"/><Cell col=\"1\" text=\"bind:PLANTID\"/><Cell col=\"2\" text=\"bind:ITEMID\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:ITEMVERSION\"/><Cell col=\"4\" text=\"bind:USERSEQUENCE\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:PROCESSSEGMENTID\"/><Cell col=\"6\" text=\"bind:PROCESSSEGMENTNAME\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:DESCRIPTION\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:ISREQUIREDOPERATIONSPEC\"/><Cell col=\"9\" text=\"bind:CREATOR\"/><Cell col=\"10\" text=\"bind:CREATEDTIME\" displaytype=\"text\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" maskeditformat=\"@@@@-@@-@@ @@:@@:@@ @@@\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"11\" text=\"bind:MODIFIER\"/><Cell col=\"12\" text=\"bind:MODIFIEDTIME\" displaytype=\"text\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","tab_search.Tabpage1.form.edt_item_cd","value","ds_search","PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab_search.Tabpage1.form.edt_item_nm","value","ds_search","PRODUCTDEFNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_work.form.Div01.form.edt_customerName","value","ds_productDef","CUSTOMERNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_work.form.Div01.form.edt_itemId","value","ds_productDef","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_work.form.Div01.form.edt_itemRev","value","ds_productDef","PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_work.form.Div01.form.edt_itemName","value","ds_productDef","PRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_work.form.Div01.form.edt_jobType","value","ds_productDef","JOBTYPENAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_work.form.Div01.form.edt_productType","value","ds_productDef","PRODUCTIONTYPENAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_work.form.Div01.form.edt_productType00","value","ds_productDef","RTRSHT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_work.form.Div01.form.edt_productType00_00","value","ds_productDef","PNLSIZEXAXIS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_work.form.Div01.form.edt_productType00_00_00","value","ds_productDef","PNLSIZEYAXIS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_work.form.Div01.form.edt_jobType00","value","ds_productDef","PCSPNL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_work.form.Div01.form.edt_jobType00_00","value","ds_productDef","PCSMM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","tab_search.Tabpage1.form.cbo_site","value","ds_search","PLANTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tab_search.Tabpage1.form.edt_item","value","ds_search","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAS02200M.xfdl","lib::lib_bas.xjs");
        this.registerScript("BAS02200M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 공정 SPEC 등록
         * 파일명 		: BAS02200M.xfdl
         * 작성자 		: 최성민
         * 작성일 		: 2021.03.15
         *
         * 설  명		: 기준관리 - 공정SPEC 등록
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.03.15	최성민   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
         this.searchDiv1 = this.tab_search.Tabpage1.form;
         this.g_positionA; //저장 후 위치고정을 위한 전역변수

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.fn_comboInit();
        	this.fn_formInit();
        	this.basfn_saveBtn(this.div_header.form.btn_saveOperationSpec); //저장버튼 공통처리 함수 호출
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        this.fn_save = function(obj,e)
        {
        	if(!this.gfn_dsIsUpdated(this.ds_operationSpec)){
        		this.gfn_Message("NoSaveData", "", "warning", "ok");
        		return;
        	}

        	//검사항목 중복값 체크
        	if(!this.basfn_checkGridDup(this.ds_operationSpec
        								, "INSPITEMNAME"
        								, "DuplicationInspectionItemID")){ return;}


        	var componentA = this.div_work.form.grd_operationSpec;
        	var strColIdListA = "INSPITEMID";

        	/* 그리드 체크 */
        	if(!this.nfn_MandatoryCheckGrid(componentA, strColIdListA)) return;


        	var defaultCharType 	= this.div_work.form.cbo_barcharinfo.value;
        	this.g_positionA = this.ds_operation.rowposition;
        	this.ds_productDef.setColumn(0, "DEFAULTCHARTTYPE",defaultCharType);
        	this.ds_operation.set_enableevent(false);
        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveOperationSpec";
        	var sController 	= "/bas02200/saveOperationSpec.do";
        	var sInDatasets 	= "ds_def=ds_productDef:A ds_operationSpec=ds_operationSpec:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	if(!this.fn_checkDsUpdate())return;
        	var component = this.tab_search.Tabpage1;
        	var strColIdList = "edt_item";
        	var strColNmList = this.nfn_nvl(this.nfn_getDictionarynameUpper("PRODUCTDEFID"),"품목코드");
        	if(!this.nfn_MandatoryCheck(component, strColIdList, strColNmList)) { return}
        	this.ds_operation.set_enableevent(false);
        	this.fn_selectProductDEFInfo();
        };


        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		if (trId == "saveOperationSpec")
        		{
        			var msgArray = errMsg.split(("|"));
        			if(msgArray.length==2) {
        				this.gfn_Message(msgArray[0], "\n"+msgArray[1], "error", "ok");
        			} else {
        				this.gfn_Message("ProcessingError", "\n"+errMsg, "error", "ok");
        			}
        		} else {
        			this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        		}
        	} else {
        		if (trId == "selectProductDEFInfo") {
        			if(this.ds_operation.rowcount>0){
        				var idx = 0;
        				if(!this.nfn_isNull(this.g_positionA)){
        					idx = this.g_positionA;
        				}
        				this.ds_operation.set_rowposition(idx);
        				this.fn_searchOperationSpec(idx);
        			} else {
        				this.fn_searchOperationSpec(-1);
        			}
        			this.ds_operation.set_enableevent(true);
        			this.div_work.form.sta_cnt_ds_operation.set_text("Count : " + '<fc v="#f31d24">'+this.ds_operation.rowcount+'</fc>');
        		} else if (trId == "selectOperationSpecList") {
        			this.fn_changeOperationSpec(); //공정SPEC 관련 함수
        		} else if (trId == "saveOperationSpec") {
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.fn_selectProductDEFInfo();
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
        	oArg.arg_searchStr = "";
        	oArg.arg_paramCols = "";
        	oArg.arg_paramValues = "";

        	//품목코드 조회
        	if(svcId =="SCH_ITEM"){
        		oArg.arg_type = "BA";
        		oArg.arg_paramCols = "MASTERDATACLASSID";
        		oArg.arg_paramValues = "Product";
        		oArg.arg_rtnCols = "ITEMID|ITEMNAME|ITEMVERSION";
        		oArg.arg_searchStr = "SEARCH_KEY="+this.searchDiv1.edt_item.value;
        	}


        	//검사 조회
        	if(svcId =="GRD_INSPECTION"){
        		var processSegId 		= this.ds_operation.getColumn(this.ds_operation.rowposition, "PROCESSSEGMENTID");
        		oArg.arg_type 			= "C";
        		oArg.arg_paramCols 		= "PROCESSSEGMENTID";
        		oArg.arg_paramValues 	= processSegId;
        		oArg.arg_rtnCols 		= "INSPITEMID|INSPITEMNAME|INSPITEMVERSION|SPECTRANSTYPE";
        	}

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        }

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	var processSegmentId	= this.ds_operation.getColumn(this.ds_operation.rowposition, "PROCESSSEGMENTID");
        	var operationId			= this.ds_operation.getColumn(this.ds_operation.rowposition, "OPERATIONID");
        	var subSegmentId		= this.ds_operation.getColumn(this.ds_operation.rowposition, "SUBSEGMENTID");	 //세부공정ID
        	var productDefId		= this.ds_operation.getColumn(this.ds_operation.rowposition, "ITEMID");
        	var productDefVersion	= this.ds_operation.getColumn(this.ds_operation.rowposition, "ITEMVERSION");

        	if(sPopupId == "SCH_ITEM")	//검색조건 : 품목 조회
        	{
        		this.searchDiv1.edt_item.set_value(rtn[0]);
        		this.searchDiv1.edt_item_nm.set_value(rtn[1]);
        		this.searchDiv1.edt_item_cd.set_value(rtn[2]);
        	}

        	if(sPopupId == "GRD_INSPECTION")	//공정SPEC 그리드 : 검사항목 조회
        	{

        		for(var i=0; i<rtn.length; i++){
        			var colArray 		= rtn[i];
        			var itemId 			= colArray[0];
        			var itemName 		= colArray[1];
        			var itemRev 		= colArray[2];
        			var specType		= colArray[3];

        			var nRow = this.ds_operationSpec.rowposition;
        			var addRow = nRow;
        			if(i!=0){
        				addRow = this.ds_operationSpec.addRow();
        			}

        			this.ds_operationSpec.setColumn(addRow, "INSPITEMID", itemId);
        			this.ds_operationSpec.setColumn(addRow, "INSPITEMNAME", itemName);
        			this.ds_operationSpec.setColumn(addRow, "INSPITEMVERSION", itemRev);
        			this.ds_operationSpec.setColumn(addRow, "PROCESSSEGMENTID", processSegmentId);
        			this.ds_operationSpec.setColumn(addRow, "RESOURCEID", productDefId);
        			this.ds_operationSpec.setColumn(addRow, "RESOURCEVERSION", productDefVersion);
        			this.ds_operationSpec.setColumn(addRow, "SPECTRANSTYPE", specType);
        			this.ds_operationSpec.setColumn(addRow, "INSPECTIONDEFID", "OperationInspection-OperationInspection");
        			this.ds_operationSpec.setColumn(addRow, "INSPECTIONDEFVERSION", "*");
        			this.ds_operationSpec.setColumn(addRow, "SPECCLASSID", "OperationSpec");
        			this.ds_operationSpec.setColumn(addRow, "DEFAULTCHARTTYPE", "");
        			this.ds_operationSpec.setColumn(addRow, "RESOURCETYPE", "ProcessSegmentID");
        		}
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
        	this.searchDiv1.cbo_site.set_value(this.gf_getSiteType());
        	this.searchDiv1.edt_item.set_value("");
        	this.searchDiv1.edt_item_cd.set_value("");
        	this.searchDiv1.edt_item_nm.set_value("");
        }

        /*
         * 제품 상세정보 조회 이벤트
         */
        this.fn_selectProductDEFInfo = function ()
        {
        	var	itemId 		= this.searchDiv1.edt_item.value;
        	var	itemRev		= this.searchDiv1.edt_item_cd.value;
        	var	plantId		= this.gf_getSiteType();

        	var sSvcID 			= "selectProductDEFInfo";
        	var sController 	= "/bas02200/selectProductDEFInfo.do";
        	var sInDatasets   	= "";
        	var sOutDatasets  	= "ds_productDef=output1 ds_operation=output2";
        	var sArgs 		  	= "";
        		sArgs 			+= this.gfn_setParam("ITEMID"		, itemId);
        		sArgs 			+= this.gfn_setParam("ITEMVERSION"	, itemRev);
        		sArgs 			+= this.gfn_setParam("PLANTID"		, plantId);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, true);
        }

        /*
         * 상세조회 : 조회
         */
        this.fn_searchOperationSpec = function (rowPosition)
        {
        	var itemId 			= this.ds_operation.getColumn(rowPosition, "ITEMID");
        	var itemRev 		= this.ds_operation.getColumn(rowPosition, "ITEMVERSION");
        	var processSegId 	= this.ds_operation.getColumn(rowPosition, "PROCESSSEGMENTID");

        	this.ds_operationSpec.clearData();

        	var sSvcID 			= "selectOperationSpecList";
        	var sController 	= "/bas02200/selectOperationSpecList.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_operationSpec=output";
        	var sArgs 			= "";
        		sArgs 			+= this.gfn_setParam("ITEMID"			, itemId);
        		sArgs 			+= this.gfn_setParam("ITEMVERSION"		, itemRev);
        		sArgs 			+= this.gfn_setParam("PROCESSSEGMENTID"	, processSegId);
        		sArgs 			+= this.gfn_setParam("SPECCLASSID"	, "OperationSpec");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.fn_comboInit = function ()
        {
        	/* Site 코드 조회 */
        	this.basfn_setCustomQueryCmb(this.searchDiv1.cbo_site 	// Object
        								, "selectSiteList,,Y,A" 	// OPTION
        								, null);	  				// 추가 파라미터

        	//권한 체크
        	var sSvcID 			= "selectCheckManager";
        	var sController 	= "/basCommon/selectCustomQuery.do";
        	var sInDatasets   	= "";
        	var sOutDatasets  	= "ds_checkUser=output";
        	var sArgs 		  	= "";
        	sArgs 			+= this.gfn_setParam("SQL_ID", "selectCheckManager");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, false);

        	if(this.nfn_isNull(this.ds_checkUser.getColumn(0, "USER_ID"))){ //권한이 없으면 사양Spec 수정 불가처리
        		this.div_work.form.btn_grdAdd.set_visible(false);
        		this.div_work.form.btn_grdDel.set_visible(false);
        	} else {
        		this.div_work.form.btn_grdAdd.set_visible(true);
        		this.div_work.form.btn_grdDel.set_visible(true);
        	}
        }

        /*
         * Dataset 수정여부 체크 함수
         */
        this.fn_checkDsUpdate = function()
        {
        	var bOk = true;
        	if (  this.gfn_dsIsUpdated(this.ds_operationSpec)) {
        		bOk = this.gfn_Message("WRITTENBEDELETE", null, "conf", "yesno");
        	}
        	return bOk;
        }

        /*
         * 행삭제 함수
         */
        this.fn_delete = function(obj,e)
        {
        	this.basfn_deleteRow(this.ds_operationSpec, null, "IsDeleted");
        };

        this.fn_add = function(obj,e)
        {
        	var dsObj 				= this.ds_operationSpec;
        	if(dsObj==null)return;
        	var processSegmentId	= this.ds_operation.getColumn(this.ds_operation.rowposition, "PROCESSSEGMENTID");
        	var operationRowType	= this.ds_operation.getRowType(this.ds_operation.rowposition);
        	var defaultCharType 	= this.div_work.form.cbo_barcharinfo.value;
        	var specClassId			= "OperationSpec";
        	var inspectionDefId		= "OperationInspection-OperationInspection";
        	var inspectionDefVersion= "*";
        	var nRow 				= dsObj.addRow();

        	//신규입력건은 입력불가
        	if(operationRowType==2){
        		this.gfn_Message("NoSelectDataSaveAndProceed", "", "warning", "ok");
        		return;
        	}

        	dsObj.setColumn(nRow, "PROCESSSEGMENTID",		processSegmentId);
        	dsObj.setColumn(nRow, "INSPECTIONDEFID",		inspectionDefId);
        	dsObj.setColumn(nRow, "INSPECTIONDEFVERSION",	inspectionDefVersion);
        	dsObj.setColumn(nRow, "SPECCLASSID",			specClassId);
        	dsObj.setColumn(nRow, "DEFAULTCHARTTYPE",		defaultCharType);

        };

        /*
         * 공정Spec 그리드 콤보값 변경 이벤트
         */
        this.fn_changeOperationSpec = function()
        {
        	var dsCount = this.ds_operationSpec.rowcount;
        	var infoObj = this.div_work.form.cbo_barcharinfo;
        	if(dsCount==0){
        		infoObj.set_value("XBARR");
        		infoObj.set_readonly(false);
        	} else {
        		var nRow = this.ds_operationSpec.findRowExpr("DEFAULTCHARTTYPE != $0", 0, -1, [null]);
        		var charType = "XBARR";

        		if(nRow>=0){
        			charType = this.ds_operationSpec.getColumn(nRow, "DEFAULTCHARTTYPE");
        			infoObj.set_readonly(true);
        		} else {
        			infoObj.set_readonly(false);
        		}
        		infoObj.set_value(charType);
        	}
        }

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.tab_search_Tabpage1_btnProductCode_onclick = function(obj,e)
        {
        	this.fn_openPop("SCH_ITEM","P00043"); //품목 조회
        };

        this.ds_operation_onrowposchanged = function(obj,e)
        {
        	if(e.newrow < 0 ) return;
        	this.fn_searchOperationSpec(e.newrow);
        };

        this.ds_operation_canrowposchange = function(obj,e)
        {
        	if(!this.fn_checkDsUpdate())return false;
        };

        this.div_work_grd_operationSpec_onexpandup = function(obj,e)
        {
        	if(e.row < 0) return;
        	if (this.nfn_isEqualCol(obj, e.cell, "INSPITEMNAME")) {
        		this.fn_openPop("GRD_INSPECTION","P00136"); //검사 조회
        	}
        };

        this.tab_search_Tabpage1_edt_item_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btnProductCode_onclick();
        	}
        };

        this.ds_operationSpec_oncolumnchanged = function(obj,e)
        {
        	var specType 	= obj.getColumn(e.row, "SPECTRANSTYPE");
        	var lsl 		= nexacro.toNumber(this.nfn_nvl(obj.getColumn(e.row, "LSL"), "0"));
        	var sl 			= nexacro.toNumber(this.nfn_nvl(obj.getColumn(e.row, "SL"), "0"));
        	var usl 		= nexacro.toNumber(this.nfn_nvl(obj.getColumn(e.row, "USL"), "0"));
        	var thickness 	= nexacro.toNumber(this.nfn_nvl(obj.getColumn(e.row, "COPPERTHICKNESS"), "0"));

        	if(specType=="IMPEDANCE"){ 	//임피던스 회로폭
        		var ousl = usl==0 ? nexacro.round(sl * 1.1, 2) : usl;
        		var olsl = lsl==0 ? nexacro.round(sl * 0.9, 2) : lsl;
        		if(e.columnid=="SL"){
        			obj.setColumn(e.row, "OSL", sl);
        			obj.setColumn(e.row, "OUSL", ousl);
        			obj.setColumn(e.row, "OLSL", olsl);
        		} else if(e.columnid=="USL"){
        			obj.setColumn(e.row, "OUSL", ousl);
        		} else if(e.columnid=="LSL"){
        			obj.setColumn(e.row, "OLSL", olsl);
        		}
        	} else if(specType=="COPPERIZE"){	//동도금두께
        		var ousl = nexacro.round(((thickness * 36) + usl + 3), 2);
        		var olsl = nexacro.round(((thickness * 36) + lsl - 3), 2);
        		if(e.columnid=="SL" || e.columnid=="COPPERTHICKNESS"){
        			obj.setColumn(e.row, "OUSL", ousl);
        			obj.setColumn(e.row, "OLSL", olsl);
        			obj.setColumn(e.row, "OSL", nexacro.floor((((thickness * 36) + usl + 3) + ((thickness * 36) + lsl - 3)) / 2), 5);
        		} else if(e.columnid=="USL"){
        			obj.setColumn(e.row, "OUSL", ousl);
        		} else if(e.columnid=="LSL"){
        			obj.setColumn(e.row, "OLSL", olsl);
        		}
        	} else if(specType=="CO2HOLL"){	//홀사이즈
        		var ousl = nexacro.round(((sl + 30) * 1.2) * 1000, 2);
        		var olsl = nexacro.round(((sl + 30) * 0.8) * 1000, 2);
        		var osl	 = nexacro.round(((sl + 30)      ) * 1000, 2);

        		if(e.columnid=="SL"){
        			obj.setColumn(e.row, "OUSL", ousl);
        			obj.setColumn(e.row, "OLSL", olsl);
        			obj.setColumn(e.row, "OSL",  osl);
        		} else if(e.columnid=="USL"){
        			obj.setColumn(e.row, "OUSL", ousl);
        		} else if(e.columnid=="LSL"){
        			obj.setColumn(e.row, "OLSL", olsl);
        		}
        	} else { //나머지
        		if(e.columnid=="SL"){
        			obj.setColumn(e.row, "OSL", sl);
        		}
        		if(e.columnid=="USL"){
        			obj.setColumn(e.row, "OUSL", usl);
        		}
        		if(e.columnid=="LSL"){
        			obj.setColumn(e.row, "OLSL", lsl);
        		}
        	}
        };


        this.fn_InspType = function (data)
        {
        	var editType = "none";
        	if(!this.nfn_isNull(this.ds_checkUser.getColumn(0, "USER_ID"))){ //권한이 없으면 사양Spec 수정 불가처리
        		if(data == "COPPERIZE"){ //동도금두께인경우만 수정 가능
        			editType = "normal";
        		}
        	}

        	return editType;
        }

        this.fn_InspTypeAuth = function ()
        {
        	var editType = "none";
        	if(!this.nfn_isNull(this.ds_checkUser.getColumn(0, "USER_ID"))){ //권한이 없으면 사양Spec 수정 불가처리
        		editType = "normal";
        	}

        	return editType;
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tabpage1.form.btn_clear2.addEventHandler("onclick",this.fn_formInit,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.edt_item.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_item_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_item.addEventHandler("onclick",this.tab_search_Tabpage1_btnProductCode_onclick,this);
            this.div_header.form.btn_saveOperationSpec.addEventHandler("onclick",this.fn_save,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.grd_operationSpec.addEventHandler("onexpandup",this.div_work_grd_operationSpec_onexpandup,this);
            this.div_work.form.btn_grdDel.addEventHandler("onclick",this.fn_delete,this);
            this.div_work.form.btn_grdAdd.addEventHandler("onclick",this.fn_add,this);
            this.div_work.form.cbo_barcharinfo.addEventHandler("onitemchanged",this.div_work_tab_00_Tabpage2_cbo_barcharinfo_onitemchanged,this);
            this.ds_operation.addEventHandler("onrowposchanged",this.ds_operation_onrowposchanged,this);
            this.ds_operation.addEventHandler("canrowposchange",this.ds_operation_canrowposchange,this);
            this.ds_operationSpec.addEventHandler("oncolumnchanged",this.ds_operationSpec_oncolumnchanged,this);
        };
        this.loadIncludeScript("BAS02200M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
